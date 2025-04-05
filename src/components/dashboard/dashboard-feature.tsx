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
    "4yGXDbGx1LYSjsNcBJKNLsUXxe638Kk3CQWxdTtMZdLaeqJsF4d5gsRxizTwS1sbzR7z5PyMfkhSS7GVigNyRH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WqJdPYr8yqspgqAA5b7MHoAYLV263NtsHbojzfCYxXXtmqad1WaSMHGJik3W9pfMdVNyaMWAdNwj9LBL4RoNizj",
  "key1": "5cyYY4LPADWZ33bzj47uoGxQs93rL6T5C4SL8jasKV4ArUZ1BwmDUKSfDFPQJZjBw2BiXyewNsucFBxjQEpAz3Hz",
  "key2": "5L8fAn3cTCfHiFkXHCbZdGgRQPLch5D4PoqcRJ1PJ1k1itJDS2rszzYsNWx54HQqnhMHUYwBJvJZVbSk1YDmihum",
  "key3": "UjjJQ49jrGYZyUd3gSLGEqQZCPyjTLTkx4Tcsf2tPPcCMDXVpYRS4W4zChxpjN7yNJF4ucDJCyUUrF17F7szx3J",
  "key4": "5XDAX4EtANHEKBt8KkpdSfz26DMyKaDLvb4wqCKvNzo77erDHVvhsZRDJxTemSw3qzXqRCcTLxEsDHiRKTnaxeKc",
  "key5": "26PXtYVzKTtTLxKzYb5LsH7NqX4hBNVEgaU5Z169YW1rXLMkv5KGWoBTa9ajFziS852LCB5Ywcwe5DnaaHsFHZo2",
  "key6": "jyJw9CqQvHMqnkBfPLzia4kg4WZ7W7q32qo2XwJEnicqcHZxsAw9xZwuGPbENBxo3vqmS4ph7tvArD4wx4hsNUi",
  "key7": "4mKNAViteuyd9SL3T1ihAFvGtH3LgvnQMpZhW4TwM49ve2NYUX3b7Ma6A5LJJhByS6YuKQR1QjKWieUfVd2Ybzv4",
  "key8": "58EpAnxrkPxo6dtCRibHrHG7DQHSatSAP3T8qnNDshCeK5m8PUFwPAAKieYg5PB4aZwv2kTqn1ttEJyPkxiwrHLt",
  "key9": "meZBsXuW3xcofdkosY2Z3EYPru7CzAHvHy5EkBdBZHa3KKzkuY7ozPrj4X1PMUD7wo1JdyoR9TD6VTy39bp2QyA",
  "key10": "3vy2k5twdBkcbkNoLrCMWzJtPpKYdPS3TJYCdKa5tNzyzfhMptm7gfHHTdASzaxjAGp9QhHqzZYNV72Lagcx1Ubb",
  "key11": "26aX5dR1VM8iNW2MqoTDoURcyvNTbCEwNXuH6VYKVfJno7yCjYfmCZs9PjUJbtRZnM77TYo8ciPMPfDRswe5GiHi",
  "key12": "xoDkgMeKseMPHAM8JWCdJwaxjH5aWM8w1WgZjtbkrtm1EWfztHuvvbERawDKsFERSjV8L9t3kijjazNkd22YQWZ",
  "key13": "2JB14rBWoW1u1JHPeJgx4QpL85J6wBu1xdhasdb8E1wN1LR38Ewcz6JjTqg523KYomYKbCnowwGDvbWYZGdPLE7n",
  "key14": "5usnbEXJYzTAbdnFyPfr5yp6Ag8SJaYy49KyJAabhxMT68NM7jVhNHxR5soFmGv5FCJs39dmckcJ8Q9RN4LzhfyY",
  "key15": "4NtqKLBasaW2Hvax4TxQkm1dgq1caEGzCSqjYYCCd3U8xvM5RJUFxKYwcpQD3vLdPArbgrqCRGj9izAp6fMo817f",
  "key16": "59kYVyKnVu3pvDisKgHHUKoi3KB73GtHgvDkL2pAMGijfa1RQwpt6HqdxUs9nFkxVtyZQTPq4eVFbYPQ9E7wjRJN",
  "key17": "4oRa4sKpyjZdt2XChtyETkoFZYQrRoXjtzWKzNdGCBZ7sy8kysmQy3cLF3iBQGnrXkWndnktt1SdMNxpbo8TkkSU",
  "key18": "2KPfNwEURq5y1HXW868GXAs9KgjbNk6ZhGqwfGV42somuetdLigJBZmpq6o7kfFuRjoeiLMAZCmcYpagZAUdo9ot",
  "key19": "5k7mD83dh77QM3vNNNFtPoUyPbxjB2v7Vppf9jo3kNGqBs1ThxpHinPLiVEiyJ95Hb6WBruTT216BUbSGWkvxknU",
  "key20": "UjSSorc4SZa3dvC7iB4vKJY7zGMNLZJ1NQmdarH4CVpSJa6ZW996HyxQKej6RmAUHikCfgKCK687cRpjtdu3BaP",
  "key21": "2VM1gqGDmHXBbeH3xt4L1mZaDppaWPX5U1TgmnuKgPVCFZEkp7pm1o4gpydBShYzwj6thgSN3rFXWoTErYaK7uMJ",
  "key22": "2g7aBkTtjSRvv1xwzBnberVowQnXwBCU21FgDfz9LXdEpz23MBsiP4s5NJdVSGtKjDAEejBiV9AfzwUyk9mxn8pv",
  "key23": "3zE4JaU4BkuQwzfwtbQP6qBy3dqBd6Do5RFj5MeTi2W1E9JgkZtrS7ZN9gJ1dQqktrAN69ayxWehycrva2UxBZdo",
  "key24": "4FPu8qeX8tmXEoQ5EeFCLFn8NfRTerVFYtFKeodKbfBvE2t2hXnzSNJ6C59J46EHbYrSEQuEBoaAqdr6gVSjzT7Q",
  "key25": "bHsjs87RZEXWpZLVeTc6bhLZYt5bBGX8VVm9m7mmQEsbQC4stKT7VSJf6hTKDmspTcz2gVZKxgcZHY1fEm4Mjzj",
  "key26": "5VKaQpTMX3eBQhAJShSZykZVRKvvXuLqLvR65EGdvNywWeJapbJd2tSJz22nKRpoqnCS1PZfm5xfrqerM2i19T21",
  "key27": "4ZXjz7aVcTKxVpbi3TShnU27kxCnaa9s4K262FiekgGbPtfU2zs9bSYwMwVsUkg21oSk6PiH5g3TH6SK57VuqTrY",
  "key28": "3zHefMhPAnhkKNL25HnneZaPpHXFfPq8r88EDLZ8624UyBB89m6ZayYg9fdGkAmQGyEgVKPXQs6Gdmb6A5EHhZFF",
  "key29": "2i1qqP22z7r9teikUQQxkrguwdJk9jZLE5BCcBEmvJXeuAaS8WUdCfLFXn77BZ8rK176bYaEByHLJm7SVFZn5Yxa",
  "key30": "3nAXw33cD96m1214FsSBVFgFp7U2yWu6qr4ivQun7X2rmmDEQL9SUu9qu9GvMFQb2b1VPd1GpWtcEqpg96pMwQUn",
  "key31": "4NNoTg3uvbYAAQ3ZowWuB9T8dU76MaUZ5E4asCCR1sAh8e4XMNPeGnuFrRqDMpT3XAsRUt1QxeUTtmUoxZcB1XnL",
  "key32": "3K9iowFXuc7CnFQUX9rQfGaSxf9WwH1sFyMsRHHFUjwRiERkgJ4Uu7zfHKVYhMy22qw8tpjMiN5LQPbdJpAWT2sK",
  "key33": "2jwCtthVdKe3dNmg8RVn4eapjGhANnPAKfXK9XeYboJucnZmFLWVv5aGDMQMRsSi6KtnEoBg3VsyUfvDySCEVHHm",
  "key34": "2fyKrHDiRakVWQVtoMeK9QrkAXN4K7vHvCmrMWg7qVSan64r4SMbkYxUuQMAX49fyDbj2NTDq5sksjL6oVLcuVkr",
  "key35": "VSMrAEPKgap3enxww3rAJoMuZDWNbCWrte3L929nAn7E8mkgn5fUwhKiwkm2Z17TwfKY2Y6iUi6173MBbGDSKpn",
  "key36": "3F43gDRbFqoahTTwwoDjcJHgbRD78GsSonFHN5CWPeKWtPe71QkfkGvRdnxLunAfPyEeN8QYjsY4qyQ9MSzxfVd2",
  "key37": "3ojtPPhMCqTbMtosjpgaZXrgRt8fvYN6ecbgteGj1h3KsfEBVjx4toxgH3myNMkGV2ZmwPnhy1HoUe45QXThQ14d",
  "key38": "57wDT2wUTbyfRpczCF4p51ejJqeef7Y5zQSUiQuasSz7qaUKM5B5NBXhZ25zNGN9CR1XD6vhWvcX2moNryS8ZNsM",
  "key39": "3knzEEdcG9UPRsFDrwLpjDDgzCyqT8BcKWCwZdt9gV4PXskfrfHXTFtFGNaDVtXoHsh4nWYui7JmdSA36xVXxHKa",
  "key40": "5Yn2nxFqqMiES9pLc8AqyrnReGvuXkiCZRWaMDvTqpArELK9ys5eyLZfrJqwRkcBVqDXqKNnJ2mqEHrxvg9Kywsj",
  "key41": "1xZQgbAG1yDSQVDjZp7QupfahzzzAxXhCnua91oUmWQWatXc8ynCZTZZ3oDBFHc8N9XohhoX8CaRDRPiJB7qd3m",
  "key42": "2zeYuutmsp1YR6MjgVA2d3tF31aNWLShYDhPTUeGvMoqHkrGsrUrTm6zAhKcGGExPsqRzySeH3xVmLSZUiTF1Z4N",
  "key43": "5zuyJUEYyMkiivZPudARFWmvG2uwr9tJzHVenmjNjAu2Cu5zsaxKFHs2RGMqyBBQsg168X1gvGi6CsdjE7REA2Sh",
  "key44": "2M5BnJp8haQtHXY6iyU6WH4HYbRzTvC9qLSq3QDfNwsB8DAQ4Kz3dtuMj5TWCSkvTPGHeQSqnbN2v7BamCcanCPA",
  "key45": "2bMSSnFRZCSifjiBNB1PtpHnVD9Qvf61C6i7kr7mR9VVpSvQsnMjxeDaaZwiKA7CdkdQUX3Ujc6gcdw1uB3uHPKo",
  "key46": "4vaP9GagHNnkbWUb4P8pQEwJ7oUbL8X3YLx7ncgvgiVvbgX8Ta82W4B2vpSiurjvayAgzBho9K9tPuQ7XpehPWeW",
  "key47": "hmq6o6TGo7zRP3qgzo3HpeAbXAYrWE2CmDYUmWBiPeDVX8DtfWUnwnCv4WoEeMYeAAGdDEgnmd5Z13zxBN7gTHZ",
  "key48": "5jK2BG7htqMwdQr4kEGsrneCKqa4VzdbYXMB7QUsw29ndcHu1MNbunBhYy1W94rczjeShMsgG4aNGusS4S5kcKQa",
  "key49": "44om5SQ63wkuxdS2rm1BakfNVzwTNpoyzZhK6n7jdbZVjyJCgDWypr1hcr9eCEBNRahsmJxfasHotRarbXMXhjAg"
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
