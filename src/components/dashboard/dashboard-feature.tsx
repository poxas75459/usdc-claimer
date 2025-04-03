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
    "4iPX1KkwPJgiTdvz8gpacAqMjwMXfitTskCPzmEwcCJ73B9QSUFUnwfNs7Re6hhE2sf1Diqy3jES7QqNFkGvE6wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cfouWHsypCxPgtAFtm6F75JSPGrUWtjQ5sFmXusu8tg483gmPSLtPj9ofgrSihyqTJmcB4Mtv9zXdJ8yveWvFMT",
  "key1": "45YQu5ASM41haoMeHNkt3iSERCKtJqJSA7BJDUK2k1qVN46kx6meXgaTygMA5GrU9iXpFPvRYo54vLwrPKPvuFrb",
  "key2": "24GRt3RP82V5jbnBCK7pkUvoDXxeY4iBUJZFjoFUMEt7ZpkQbiUWSMV5PXzEJ42CXgHvTkh4b5zAuh4Us1areB2q",
  "key3": "4ZMtsSQR48A9YzQ2VxDcFcxqpYir1VejiNw7qM2hRXjyo223Aq1s4TUvxZgXsmrknq5XuracBGcZAgEwBRzPZvX3",
  "key4": "3Qi7yoeCGoj2Wki8Knkd1zVhcydWfQvf1jM58jUJMRoLi7ry9bzsABGZjyrzp2z48U5JRXDX6MuSNbNJchfQT4zi",
  "key5": "5viEht6bEovnB6ndA2yH3mRuwE2JyjiNvxjddLW1y4prLKEHqGtvQXy9X2WTCm5STkoZQK5sB8xEgC49o5hS9i1k",
  "key6": "4NRhHy1YVqNFz3YTc8CpPatHTbd3K56C9zGJqgViGpUazfjiactAYj2T6oTagKRCJgisE8j7rpxWyzCZs1geHNTG",
  "key7": "U5eRME3aiz3d7cjHKFyHs4syoEspowyZdqxQRkyXq2GWkcoJZzzMcSF9KdRipBW4sbimyCc95RuWaXmF2nbnkYw",
  "key8": "4cftoc3Y1X3gLndWA3mwxG2bF3zvEv2o93db4kjCZEe4mNdeMMgiFodk69jcFUGy7Fmm4cpvQWee2Py22VgRASfU",
  "key9": "2Ruid4T92nj2XPoEvjdpVPwPvKVCEYpbkpV4MSLiZJQrv8un3tUvAEUcaCHQ9hxfnnaHxikLBymtUvvGCwUJqgAN",
  "key10": "373sRHpA6bKeC5gc1NgyvugGxfLvmruyYeYH1YAqffFFR1pY3JxmeppTHJ7uS55b9sYoN4Y8qJqveoyFHsQoWjEd",
  "key11": "5etfaaK1iDamKW8CZT3KvvaRzCeiiEmWcmwPsFGyXL8vcrfsmmFwPWUphcKKkZzcphBRYUMbi7cvtBtURT6wFsJ3",
  "key12": "dzAGXjzBfywMGNn9NLyPWgeJMzJptGt5HCqzbH3DnkoUf6hebB311SMxXvnyVkuEBP81AM9Eee35eV88U4juutJ",
  "key13": "22Xs7zrnkkoG8aqJGggkgkwVGeDYUQ1Rt4CDDF9pjaABz16MuDhA7LQurX5Ak7eQcFgscEv1KGTxR5C1rPYGQpQy",
  "key14": "8o7DbXTaWriPdV12saSZKv2Mit9kn28c4zHgUgp7kYhzCwR564C5sX1xaL89e4rq9NYW8hGJYgzeiF3eHX9JSGp",
  "key15": "3KEzSmx7YhScCP5ZSGCasdesNeRGhq5CgBn6RYj2dAsHGjAxkoFRfUdAPQ2gw2rRHQtUCyWuNBjxnHuXYTM2tTe2",
  "key16": "3n8Z2z1VxoVtNi35VdJ5WuEdhx7fj5dPRtFg8t81mVxMhensKjDW54Kc4Thoxuw8t2Z8Sy1h4pgfcDz6Mk55DtUu",
  "key17": "4G1nyttVxKNNYfePR742wR2aHMSnEP1g7xHwfu5FeNKeHXfUnMdSkvNBD8WsG8LFJoLWQGTcCes8TXpuZwdZLWo9",
  "key18": "5JpMc8fPvtdyWvU899aHZMAdAmLsddoSkgDNxZUqg7tnEmcaztzWDGtf8rqH79iLCECkurSggy4snxf6SdTBv8Vh",
  "key19": "SXcsbpWhqW6KS6aGr1GwZvvVHZpxuEchj6f7NTtCCm2Xn7nmKebKwDJks7TeCUexjw7VnaZPzxw7MjkAZWJKJ13",
  "key20": "54VJhQqownm3u1cmb7VcM38UBiy28wswZzC1wVpjckF5f6qpwhAJD2vbiCpsjRC4dWyqVCunnZvuHtoYiCvjJU3",
  "key21": "mjMpkU4mKJBXXGcJHUgCnJNWCTnADrbYCVJ7CHz9xCAF2CknUqXQf9toCyH7Uzw3u8Sqo9xPCV1qPXegGd7n92v",
  "key22": "4QN7J9xWATdWzUPZwWwaPnaJBmZuW6rccrfryGTAAEFurZAZtgdhB8oScCQkqPqF3MND7mq1fmQWxbTYQG7hArrA",
  "key23": "2agJ6KyMcHCrvZU2jH1d3ghSyT3Re316RF5WxD1WBgHfkdrSsRnTYcWFFRuhb5gzrA9ioTx7rSdoyKWga43f6Jqi",
  "key24": "3DkXBv1aoZGRX5bHWRsb79T4S2WYuSy4STRTpmjHhMVChXXCtb8jBEgYieNftAKszaPFY8qSLqfx5cTrfBCJAkYw",
  "key25": "5to92ADqrqiuoUFak9yVtheFg1Jw6NkwBEguu3URBxrw8VKkz4u12nS2gKC1FZqABrKpevzAkbSyjRBMPQ3XNENK",
  "key26": "8c42zL3N7rC7FhFBRCQd7zDh12jYxV6tJySid12dbNBf22KjzPnfcJKNPWrUFREyx3yfmJGTwtYbHdTugPyPXkN",
  "key27": "39bddbz2DLS92G5NjvxpKuRh48Fmz2BrCdj9y6yBXHTkRnngUUwNVvDHDcnuFKowmSDiiTMTmgiadhJMBmQvrno5",
  "key28": "4Z7qiHrXVy4LGtSKJ7swLb9628ZZZiYUXVR39Fav4bbdSQo75djJRXxoVidj29hCMp6tqAmeneUcLXusHCDEBdPk",
  "key29": "4Hb3Uq5UuoA8niQULMcxdsQTodprbRRsZs163J4kXL3sU7pjNVyknVgvMZPMhizHMf3nE6DC7n8yVeaoVXSYZnBm",
  "key30": "3gzM7maaSdS69i5whe9cjNwjmVmwE1crkgwWCsdeUeqyZxkgso5UZbPuz8gqCLbmhMHbKgorAWPdkTSqfp9xt2PB",
  "key31": "2nvQzsN28PZvZY2oFKaL4keqnMWDZU9tSw715HmDTMQfm4wMbqFc7PBDCuzT9LneSotuXrNvJLUYX53G4xoPMX2f",
  "key32": "2TWPhsmK8N3bKG7JuVhWXknJ2ViEbAjufNDiUYRsuefqqdY6RmfYYDuYyFMdDN4X6EN4ELSa7jkm18FxCHW6hxUa",
  "key33": "2bo6FNWWZuRcybsmf9vxKWxvYkpxNMmq6Ug9Vq3rFEbQhYcwUX5F4GkPL49SJvsmt1AyjuDKHB6n3CNRufdWNNj6"
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
