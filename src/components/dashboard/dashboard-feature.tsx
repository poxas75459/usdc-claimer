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
    "isZWTktttnpc6yqSjmJotceD9BwhFbQFbHUz9M6YpuXhv3UCtD5zof585sA5zAaZuU9uTSBRGSME7TCatTPSV5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S2HWeesrxz6JujdarBYuAH5HmiQar8C8HxbjWWxheEeoG2hvfDjvooM2bNQv8CZx4fESwGDRZpmBSc4uKrCN9vU",
  "key1": "5m643QiU3GexqkUukmNeppdvbHFQF8U5ydDHejL976jEGsaMMBKd3VYHPQdC2wPrCZ1LtcbiViYqsXNqjg1YB9vH",
  "key2": "3qR36eRPFe66QM76RKqRX551mVAw6ZYbQBzXpaeo5byZDEuvGjQhLrdwW2xYuidvgfj8cqj1wqE6ERHbPNtyFq3u",
  "key3": "2YV6nB1JwUXweLzUxeJdaLwBtyaqhUJ1woopnfSwGgkDPdc3KhTAspvf5EmmFTo23mWZ1RwcoY1QCfGwJd5PXacs",
  "key4": "3A88pcUwsigo9jL43hrHM6vbjjYV3CZTH4qjGGUCuvHDSPHjw1yC8ja9AJuKDFdMzuJT3hTps5Rr8mcLxMTvQoQZ",
  "key5": "56xUAB5po7oYJNHJhrQHAGi2AFb57C37fiThNL82MEoRbqTSxUKsRsTD1RmHe7Ckqb8yLRHXCLW8UEwxm8VWv84U",
  "key6": "37nqWvUq8ok1R1NNkDeh2r9jUr72RrthE4ALmkbUJZWTzAr6XdQX3wNYu69e5fNFyRfpsHoXJQpSgfo36vnxDkM6",
  "key7": "2jU9vyzKHbJzwdebevdr9ZMT7CczRw9GFqoCZX6EJbhL3Z55rALj3xXJ3nUjvMukJ8bdjiEvC6ufmBacRkVbYySt",
  "key8": "2UCWsBTYwAS3VHssYeBUsjkG2HzqoNZMMPyY8eZprzNZ3kpzLPAE9AEbF44zSTX56BMZQgw9JgKiNCVjGuauSusJ",
  "key9": "4afv2nn4VMvzPAkZwxnj3B7oNzWiXy1jr91725ejzumHRxNYD1kjH8w7THtGNjct6V2xDyuUe5NfyBTLtVWwbnqk",
  "key10": "SZUqyBwiUJRZSB1v5Pfu4Qjtf5wQ5Hjj5fPN1M4rs6mB1DGASSePJETAxxf43iFFCCQFRyj5arPwwoGCraUpZmP",
  "key11": "2HJd5QnsDCj6gZhf78KM6V1qdiwKP7PeQyutJzFvhdGdosjBHmwNnaKD4SYthWC4L9jQm9UZuVZ1xbZ7TFFanJ7b",
  "key12": "5Btg5gB9XZZAcT4x7KSVZG8WmkDmaFj9GNevVEw3oaiyWRTS6dSEAKvm2rzN5YTnr3axT2oPAbqNV157EeFQFq2N",
  "key13": "5G6xxjjnmjAputFHB98wjif4Rzz7jUH88awaXvKZzsWknEj6cUdtzfF5Wzqt7NyBUCZYmmRpYncZbHnfeLH5HieQ",
  "key14": "4sZG9n8sDd53Zqke2wFXeWkdA1KpXkiQDVykQPs74Cr4rasYwHiBSYkPDaKkNACrfcDc7vViV4AjxFZ4nf4eCWAz",
  "key15": "mkBo2hVLqqE6Mdoo1Bh3q68Th8VoNh2DZqnVkfg9AJqq1R68MhMrh3gtCnEpHdkaCcyB4FXDPo9EpLQw4hQcYYg",
  "key16": "4M8fr1KbQGTaWykDdjy94ZeHcavU34ZUH5TY3Wbu5ygUChf9aPkXy5LDvs4bNh81sM3HPaJYUQaUzA2buAaNVV7X",
  "key17": "47xdb9VCT6GZREuzdD1DnBiWeaRPDB2vWJst6XPUiggCVyjKnEQUKafy2VUY5SYaZTm9KH5oJ87LwNK6YYpetSd",
  "key18": "2hVeTmo3oDDfNGwZkNFnwJvJcZWGjHf6q37wJ6oib58SByGczFMzCZ7p447KRCUFdd25cEXiiDpLNBArc2ALRomv",
  "key19": "5MYoxPhwjnUhjf2bUG9TXVNaFgjBVwSziGePWJ3Qc84NYoerGsLD3xqhnR7nDC7NVLRzgX66oQGkGYaxcdNB8xn9",
  "key20": "3zuE9q1sF43tSEHtuE9PgaXt8J1VqknjxgbUebjCSUGrTkBd9hm1AV8Cjh1Fh5HjCcaySHSR5fQP9zRSR5UQK6cn",
  "key21": "3RGUdpTP29tg72kBKYnJrVvoWjviSbh4KSLoR8BVLmjE79qVnbCvb6CyeyhfENpSgWjwdBkgHbLAaWPu5NwFo5Se",
  "key22": "4AMvKqNUegrhyrZT2oVZatY8VFNVigWrKakBSvz8xAX5iamoRD7kNEKiTikyGkNoJgL7T7krsDsMzPGdi4W8McQn",
  "key23": "5r5zVZm4uw78qCjCzrt5WCuZmq7oRFYc64kZPPMsK1JWJ2zYgwsuAxegu2BNcocvWyP2wgxPUu4RE7bmsffSQHZv",
  "key24": "34kMy9jzqPDdrXRsYXFwozjHCyQ3Hpvw1sSJLYAVozEn5tdteZzK1iAYJedcxjD4KdL3xwn4i6a25ny4vUS5pk7D",
  "key25": "4PGZw6Mti4psgy86tKXewqjMFmGPcQzn6jphXY1CUXtSVwWH2uHfzuG2g7vnaFrPp6xqhTNzyKasxsB3arpJcyXs",
  "key26": "4vZm5vGEeCpgzjAPNeoAgZJednRB1kvFzDxwnz2FWGW2QxYcjHMuCgNryNr6zSYJoD3dwAapX3SfCWTfvZF7h9Wu",
  "key27": "ogVhoZqcswgfx3c5YV9dEyQa8iWVn2w2vSiDXu45Bn1dh2AqpNgC7MCfgCgBKgsmGZBeCpkv6nBfZRT9nAZ8J38",
  "key28": "2j9dVKCiDkq6yJg96RJPuFMpYdEQB3198gBV7EXi1tQkpjvr6yMwNUDAbS9ZWyvZzjTFAABXDUrvtTiJ8AeWMMui",
  "key29": "5tVVhetXmBQsxJetvpXsxemmHMV865xJpgJb1enc8qde92F8Zy4y5eYPcvTcChKzjtmEFqHTf5PdJ7gCKB3aKMjc",
  "key30": "4k3LXL5yqHcAZGSr8vK6nSLgnS8XDtw8TCTRMo53ie2iApFEoMVrN3i7JWvJezwmojF9Yt2htqEHw6HAKEpBBj2",
  "key31": "2bMhYoGtjYgtEdENEEqLJNh5ATU76YtTGgoTUVxkPEqmeTzdgMQkCXSgQkGUsFPWeP7pjzyLpNkmfQQickWvdkeu",
  "key32": "45cYrChipuvmU6vkhGkPHF7C2XgsPhRAwrFaSDY7JQ91YpAe1J4qwdvp8FoEp9Pfmf7Dqf85KP5Hf1HSBw51PbwF",
  "key33": "5EyjRQUSuwyfLYxjke2AzxP7uBih4qMsqRo1YKgg6t8zY7Tcz7UY2XBbVeLBYh66xFfYj4Xpt6xuBtnGwm6BF8dF",
  "key34": "Ko9S2Jzq6LzGV8yWQxwhkNF1G1eoYHscXXevujhVY374bopVLTYSEDMDtC6eDNmD6wcKdywCgNxNfEKsGo8wxXD",
  "key35": "2HGTwyWnoo4grkWKqfDujycfJw1hzMTBDKP7RPfoyXv6jJUsm8RUL1JxoBADfKNY6ZcDEAetVeBexzLgV1MyxbFo",
  "key36": "uFqFfwS73YEN5ba6sK3dpJaGgqWBgKgj8hrtmuvnzmye2mJ3vreC9mZQJAgfRpvaNbPP38G4mFE9vAP5ujqWBrb"
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
