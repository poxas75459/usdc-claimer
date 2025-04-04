/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2kHgf64NWtuRDXcvf69SK1FJE4Tm1o958ZLTjJxR9vwHu7NJwDPe1fyHWQ5PGyjxi8oizXNf5iAwEjubBnybLPP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42WNB9tJHG3RStkx4uBXMsRDntTFhFN7gfMVGZYE1PemFSzZ85R2g7WKUVuzvGE2YwhxfVzxvzK4Y3Qus13xCuyv",
  "key1": "3vjjvSDttgwSdv96UVgzhD2bKiE8jnqmN1EsoXTjyvV1D5GcxCqdzEPcQT8RKuCJNHWrzVppfYCqf5TDbnqCEZxi",
  "key2": "4Wx3MFL2FxVPMeZhbxafZ8p9VJQhJNdZNpo7sh32S9ByMzHctowziTbhXF8ZDXTNstSYB5ian6Y4fM8ADksVW1Wk",
  "key3": "5UxotvrhV9zZkNUw6R5bmpMxmYN7tFsxYUzZeagc8N7BbYMV5X9H5H49dG44kzfFiwsWHnDSm96UaFQz7XdkeCSw",
  "key4": "3NiUY6xzxdKFMhhYtieveda75AaaLZE5EWSSVhhuqa9P37JuPzJvNXhTZZxcmFq8gBsRg4Ljhi6jS9W8fjVGfqnE",
  "key5": "4DbK2C6iXtWxxWaKZt8jX6D3cfh6y31kLxfZMPbqZrpkbmyQjtXvrjHYbo8A1VGsEnBqKSLvPRqVe36GVSrxWJwT",
  "key6": "2D7PHHuo5i89zbGYWEUbvBAA8P63RMcHR6oAeVVKiBsZ7u9WPK3heSzBPeppx8rtsfX1xNtdkkprFGuR9xbKhojn",
  "key7": "3swS6sYHL8GRQKPpuvqKKH48wnNoqecHbcxPLuU1NgfxWa2iF2687XZJS955q27qsmx9M2TKmJJkdWaUv2of8U2L",
  "key8": "284KWFxyayFYhmaFFpAcuZdbdbMszfgTD6FEUb7qdze2E3XQQy7xSzdTQu4Mx1pqfZnG7nAerNH3usK1Mn68JGBn",
  "key9": "42JeYbGzouktErAVT8Kv5XJ618MxHUk9yM1UHdZKAiEWG3vYrYgmbjnNgUR7CrKccQHouZYyjwMr15Rhyca7EY7u",
  "key10": "66RASkh8pB9pdvEAiecgLdQHPauNfFC68eAypP28wtCoDCVMkFrAa4WMFe8gYSBQqYfMTLQqFwXmrwUqE3j8iVkk",
  "key11": "bXrrgoNd1XUvcudVzfzUt3Bx9h6aUmymvUf6ffrwncaBiyjbT1pbo3br1kB9nbyScVFKk5kDP6ZCm5yS1wNf53b",
  "key12": "4YPutUqFLd7Kewj8vQs8hi5cG9oKnS4k8Jivrcf9tkjeae9NRc9gEapRwWiobTENqZCvCvtY9SBXCNiRHuC2DNvR",
  "key13": "5XK8Fq4MVDoMiGZG2gwkRaJJJ1yxrGeRfGWQVA5wDv1HNDS1u2Lcp5pcFQWU2U8wY2p8nggyMonbAndRU6whbwhR",
  "key14": "2GHunv5jNh9KZ7sbXYhCWg6VtejVVK36Fq8j6QVZVcBJS2D2YB7txMGGMwJT8Jv34FNG5o9szbbRRMENbsibbHmX",
  "key15": "22LnXj2MH26jkYHvhfPeaymSKdEd4fTQgqJUbdbMEUm5PjqJRnoj66CggiJnd2Wj5MYG9NDLpAhfj5Dngwqpc2ph",
  "key16": "vHpw7ySu2aZmuX22hubF5M72Gwka3xfXUdcA9r4phsTjgdU9wQcKUq356im44wcfXtPZt7KD8pNigSo31SpH65s",
  "key17": "haj3M3yQBT5QVs8M7gm8VfAsVZuyZi8PtsbD2VbFicYEVGQYEvWNtsfqr9ZBTV1hDNqTye7ay6Wf3o62H85ndJc",
  "key18": "3ewgcPBKaL5D9oCtmzeKnnDri7CrH2LJVV8nXREPsCvCphNVrU9CRvZmGfX86Z5RFbvvdgxN9dFkJJZD2DSb4aNs",
  "key19": "34DAL7M1qYv3UreF6SRFnyoive5NWhufB9q3YtJHUhfVkothswTEC3aPuPVaUk62pT2vYvjEnpM9yDopWmHx6Tyo",
  "key20": "3z38o4nBe1caKaqd3gtBnYX7eyRwQRyaAEG28eXYEoak7TPQy7fbS62FqET95DR5iGt6u6FC7ap6NFj1inxTYevL",
  "key21": "5YvLvGDaBbV3f4AJm3pFg3Ct9NaEr2dkfNmqBhxHEJwhExQ8xcHt1bAhXvvENv2s9AuNNbLQH2dUdZZRjK2Px3Hy",
  "key22": "2MBnK5DJeqfrSmjpPNXDqBWQcAEn45dZdh5HF7JQoKjvFNAqfhmpNWHQW8bBt6Y2pxEd2SyS4Vnj3iFTXRxLG2VC",
  "key23": "i5ptpMJTiGtN7yQJAnQVVs1qe8GyGVqW5PshL1Hk2TPdZRbiuULZFCyuFEfwkCnAFaKdLaMSh68YyzSBBVmVF4y",
  "key24": "3ZETQEa89ViPSNNRVLkEk6LkFXvfVe5MDJACgqWYqhe1ctVMTazjdRw3EkoKoaiK16ViBHeXf9Bku616FnYTZkm3",
  "key25": "4rtHpr89RHBf89eJRLvVQgxThG214ZGzECdcdWxvAaCJyqVDMERmDqwG3oZy2bJUWotuuRcvc4wKU2PYsASR57Vp",
  "key26": "2pkqUS5edMWZGCkVa9C5jwxnXCdHxNaczAt9khowDEhgT1wjRHFKsMnbYcm5qqCkM8MqLsF9PqXm5DVvs4nUjefJ",
  "key27": "PEmC9wagqbWJdY4pGs73Dv2m1LpkFjapEbku375YnDU5P4CVx92tknz9VNcjYjrihamG41ttK1uRi2L7Xb5EV9G",
  "key28": "3qFTa6cz7f55RWqXF4R32YPsZpHHwmoAtibZeWdHbWBA68LQuBjSMhcJEbWrzVrqrL42xfe9j4wvM1JAjUzQqKjb",
  "key29": "5BbKCKopUxms3LxEcTyHt9KPfRpBePM5YLMTpoo633DkFLGCLkDAWkngA3HAmgdqE5cwzjyQrG6RZ41vNF2Qxzz4",
  "key30": "3bSHQZbRz2fX61T6bDgT7hQKVwqT8BV85gZkyv7Lp4gXF62pdkhFeLujCrStDTNne1H26iZUrw5Qu9m8Uu6z5TZf",
  "key31": "28AkjJo7b5p9npTAEqkbhgZTVzkRmwo3FUQDs4XPkzRCcyRQ2KH1fPuxgePAA5VYRbksWPgmyhnpdKhiGN64EQpt",
  "key32": "9Mz8Xej5onZDWcpehCMZTvF6JbgRXQARdKwkEfjJJrPyBwMHwuGadcabc2kbLTJx5L8ndrjzUf8mFyRmmcXHPSf",
  "key33": "PBTLHjjqMe8GvwG75fRrGeQQe39SdRj8N1y3z1rYzKhXsnbWrsqQm6v6MrrUgfvnwjhqUk5SijDWsyw68Hspg8s",
  "key34": "4jYNtY54wYa829k2ZEkfHQMpXEqeUtS3Jgf3r5Mb9QYoaqqwYDfgxTgjwxDKyhww5H1AL4kGZroxwF7PBHrHnUC8",
  "key35": "5uobCRDdHRuKLHXTd7BqfThqWXXSgNermgvoKPoByoQPN72AQPytVpXwJJxL4qngqZLKfPJ9CrVZ32veTZPsuM5p",
  "key36": "3kPdnesqmNJeBNzgKV67CbgfyLduZR2ZJ9Q336C2dziDA5dgLBpFjHesaw9aCbaxfx6XRKgxExPS1wGPkm8GszEG",
  "key37": "28srfVBwtEUqhrgg3Mdr8R146jGEKWEGve8p8hq6CRg5zYLqKwYPHeypWxejxxKCQjSA4WcYUEjXEmF7CRpQgVnE",
  "key38": "HTjfYisaWWydUsMv8JAF1daqV5DkAzhyFGoGj3w1f7Jf41Y73ZfrKxirHL9Q9fWb5TGaKXJgAHmPJmVW8BL6ZQN",
  "key39": "2fsBRV8ukGy5MW5KwDRqL9QqSA5QxuK28RAhWgncqMUpqiEyiYe4a5Kkm7Xd2J7V1cn1fBMNNwVaTCEtNyQLM9DR",
  "key40": "YSVkrxUxCCxztFfCZnN1kDwkJFM7WjKE9mr6V66H1ixAF3S87SiPEu8CuW1XWJ7GAUwugBTLnu3xGxCxVVz9vxV"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
