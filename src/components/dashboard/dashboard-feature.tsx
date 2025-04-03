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
    "2B7Pk7qaqSmzBcpWREpaWXpn2CAsZojzfUKqLP3KVmXv1vseEpnnhJuh3X4bzdPzhPy4FowA6sA3Wou8TXRB5UE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66cg96tjmkiPyDBcbmsMzotvuvo4CFx9MAk2R51195NZBQgjaYENmMcfzbkaoMeE33eHw1fEXa5zAUzeiiwdGXEH",
  "key1": "3GpjBuCzDyPzwuzvamkrrtJD2Eem9mDRjAkWD6F3F49H8B6vg48XqvcQrrTisPqdRQ8N9KnMkmUeiTHvAqXqBZXT",
  "key2": "3KMJKXBJDAN9Zb47WeHY8fiRDnY872qzDmhVjUsocbWimW238Ea9aaJ1gkyVDzjubCRgcam11qBSmFB6DCaprDTj",
  "key3": "5oSedZeg7unoVza8sPEAifgcSoWKNdr3RGeRR3HUeVCvghqWss6gazCB4eL4dtYiKgBtNR6zJkvNSkZtsFFmeFuc",
  "key4": "5T4gPB8CLMs2UC9AtRrvu3vBnR9HdgacsnCjeEmv8tnJDz2RJdGsX5ckxTBMBxzz8hZDbcFktH8CCBmiJ3Yqo1mY",
  "key5": "QV11cS71K3975FtHxoUcUQXpVXxDrVT7ogkWxGH6rGsTwoUwFWvkx7e9AaxTBjhZGoy3u3emi1fZjSKx8aGpruE",
  "key6": "Pm5bqTNe73DgXosmgPG1imLcdHvhSNskuKwt9AMxpogJTEoMrZ98hQSEmxv2BzAPGsYGXnXj2rcg4KqaVRSPr3F",
  "key7": "4J3y29XrfAYSr6tBihHD2TtB7qPqe225d8FZajfhZLvHGgtoMDGGPui6nGRofwXa4H95b5ToRvc4YkbRCXxweTF2",
  "key8": "21AaXZRDEfkmHDtUBcorGDw3v4Af6SvjHxEe9uUD1XrVpFGxkc9UiL9Bv7u7QTmcykZPjafbSdfr5UuoXScx5UQy",
  "key9": "ddhJHUerGBPHQmVWwzqXTks6Usi9YDX68QNdGzs2DzEPUuEGD9u3BpBerwQmbgsrAkyksLQA9Krts1EujM5iaju",
  "key10": "54JoFnH6FNnu7y8qDgee2crcPvJSHCEonK73HCtVB88xcvCbStJcZwjXKz558oYq4MdXzVUQZE9ZV8DNkqojuTWa",
  "key11": "2BRUnH52enXecq6Rcs6HuqmrWvNFUdX337H8YMpTwB3LpNHzyKkpaBAZoHsJX12PExzqdR6LD5fV43zWSGgvY5WJ",
  "key12": "zfV81RJ3FLTFu3Hnnmm62p2EretAhmMWGYKrdsm4gUSKw1RLb647A8Y49sqZRcZ3Qf75vs9FpEALAZoV58HDEpM",
  "key13": "3rtUXSkiKJJUDvzmnDiqZY42U7XFJK3FL5cnv3frQmPgH4fQa6gdg6bGhxpJtC2YvvJKzABdsPHe8Q2eGiK92b9E",
  "key14": "4AjDvBt9YLZYfg1gju283Dpdj5vgpnDMUcZMDPWJaUfdKzgNH4nzBten84ddiQwPofGgwVPiiMfYNHeD7AGobcdb",
  "key15": "3n8SvUzwLNWekoVNkXUV7ffRk8ErA5NKuArh5sZZ8GjUV8PbDAT5E42bYvUjuc5LbcozTmqvjWMXBzy6Y9wx8Gpn",
  "key16": "23wkQxjJdg26UV7oy9nhmAnJpn3i3fbkQnDasWGdhWvhhkLsHqPtRg9MrMhhmcCwYufrTi7UY9w1e1M2rzSEawqi",
  "key17": "4G9DPSp941pWZQCkxxqDEuhm851ZxwKGRebxinPcptiTL613Wxun5dLEBPuH6mi9jFuV3ZcESSHaECWE4iEkjREW",
  "key18": "4eczaMCoKBgwneDypUDDoju76e6pWWZ4Nks2bNDNK7dC5nCKawbaEpze6qC8t1oPCYP8kDKXZwHNRgNf3xpsjt1b",
  "key19": "39XQz9NGKGCnZJ89JZy1sinKBo2eTyNXjvLWyLmyDMAGEcTSoYA8NTiGwuRkVy99Ehrz4hJHqDoh8ap7ov2nE2e1",
  "key20": "5kALgCDe9WkzRzgYFXnMZqXTMv3itP91FHRo17E9dPJFVWa9Abh7bYqFBpB3kfDh6xYKtmXRGhugTPUFQPhaX1c3",
  "key21": "3rhysf8qssvoMa8PNTe7YgoATH8RRPzipqQfg1QcrNhEPtqwE1WWcv37uiRvzm3zMYrWGpQosiG2JUrQwFcw8NWT",
  "key22": "49HtawDbkwdMqbqdwad15VAdcnMvsQNMo41sQJc1D1riTLfDYkbjPtMDZxEJG4xTtgf7XEyYJ4UeRkK4D9cWd2DJ",
  "key23": "2MxxS5Nq8zvoBTDGQTw6vxUVf8oUAiXMW6cjYvghHDctnena3NgRaEy6Y96uLeZnAqLDZTSQf2iFrtH1K5bFTB3M",
  "key24": "4Ei2f29nXGzu5pqUF567eQLcN3U5ZqH87eLLx81Xh2DivgTDHcFmYW48jooHPKpDwUJgkDQ5owq6V4pgP9bPMeuu",
  "key25": "5qs3c61vgFjnJBB99N2A1X9QjWqcx1CV6Z4nPCem9pGWNnHFgURdRRHKhTpztMyRrHgHhbCzj3XwtgMZ1ECVKzit",
  "key26": "4U14JD7oSSkkPRLwCVQTirRq8yuHcPVaJ5TQrWTeHbktqfXGvC1cf2zWkJ19RuHcdZ3n2WDFznQjuEcaQbUvsY5T",
  "key27": "2aBhGy4HzzFBQCg37C7PdgR7PEBcD6e4mSZUmHxGfnTy8mVAjzDvYtCEfpVBwfNjycmJQVJBH2uJ3n7HeQ4zLj2B",
  "key28": "JHdctXs6niZMcZ18S813YTachiKW118AmaTUaTQs3M5u8JZdQr49aWhnarRfWTWkYbSfHaf7FpBuqKnuTxuwmUP",
  "key29": "5kEuGJww1Rc5aJqu9rkXaihWipEFaw1KJAyGYWpvLvDMpwHJW7zUp96U4hixaogA1C7NaRDVYcngj42AnFZGE2q2",
  "key30": "5oRfbe4NyBPwoNFZNGih8WRCievCGDLYL1RVF2WHXiF156wjEGqq4kECeqt6XP7oRDG7HNXkXGTa4n5nW1cenv1w",
  "key31": "4h9FoTEunJWa5R9FM7Andns6WPVt2DFz5EPRmnRZhoDxLHUui1pv4Aw2VG5r5cbZj5qohSWCU7EfXQpLoVTfy6q",
  "key32": "54SbFG6wCkxsg9sC8TPU2UK6pZgvp9YMwUYWaja1y6B8cbieC52hUSPSozCVEpsPN8xj9FeXc5FLXTDPhWJjeFmo",
  "key33": "4dPnhfuvnTp3Vqj9Hsvw8zd178K3VHg28GiDfvQ2KtaBTuLkVgnvG9qaLGZhyY37BAzkwcSfQoPyhWMZswXEUER6",
  "key34": "2HR8ownygkRxJwzRGhYvz8HMGppG6gL9da2z4UmKRo2Nz7RybBSX67frjbp9Wj6fUBr1YhXMH6FkbZ8TYZ24e9aY",
  "key35": "4YDzYqvuFRnRf1CJQCh9wEBHCTmm2PiZGBS2zWBuBAj9fDqWfAAeTsvcK1pFnvcuE1qGGnUiuv8gojeG1PwAvmLT",
  "key36": "5TeXavcUkjHYCJT7HLYD9vDspWop7jHFNtWe2btQF2mcXKwheZ7UE13vNxqseCaWo8UCvN7xy4MeD6LYya9xxCuq",
  "key37": "4aF6tmgPZXLLzXexgVydBeK3GFcKSJpVPxXDE4WdgNKhQSHWwzT7NtwSJJJ5RTT7Kkctsbe4KxC2zLF3qqcetEXg"
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
