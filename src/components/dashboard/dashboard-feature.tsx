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
    "5QnJ5Zybgy9vqkiP5fvprN1ndR2p8E2ewvwJxYdmZB44H321YLjqdfUFA7x1zbjsXrNd6347rJ2JL1NufHFdx5Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49B9GC55s5S8yT5N114K9eZMsewKKXbWHbHPta9VxYJxQwnNAqkUZFoMg9ZWqvzq8YdDRPTL7FVV5qiyQy7KZQUY",
  "key1": "2q5pDUkQf84QRC6DsgoYXv7BEw5bexCsqCwdiau8NQDEotxUyt9Yde6Hg5KVsgQ26DS5gUUbCuK57NqsQusoqrSD",
  "key2": "2fjXbH999vE3HqEWqPxfGsYGbbKiSXWHyb3eezZ5z6aiD51j26eSmCYMazJsjJifdFPLcMazUJG42588GTvD96u3",
  "key3": "K9htuuJNTxESj692jxohsJMEwmi2WWbDBe5KiHSasJmGSkRr6RF5a1hVu5aQQ8qM3YirUtvAqxPF6VtntYUTT9h",
  "key4": "4NgyHiT9hcLDPBiFc3xkVpe2ZbPWgiGQ9U1wNYMazR3KZh1NXquAjRLDqTC5Q3tJXSHnzEaDxfKqGwPt3GHh2anA",
  "key5": "44zTbZ9TFrhnVbVwXs7SgWfA5wJmdLQNuTqT8hDb5ySF2J9DZ6cPYFpznztv9TnWfS8GzmYy8y7Kn8xwvkUhUs4j",
  "key6": "25FkFX5ZNFCRSkXFZtmkHskcUzsZwHyfAM7ViJdoS7yV3PWWUUf9cuqKymQHvM2D8RSbbysa79DnXThyRLDgTBTj",
  "key7": "EJQ9BFcSjhoG4B7gFiys9HNJ4GQiB4Z6Wza8amuEYhQ71iH3PXpLEHbmM7Qkdfc1rQgyYtAfgx1uRECtyuwwEu4",
  "key8": "4V5eeWP7zJvFNmkED8kfPsuNf6Q8LCuFmXHfhgcFAtfckpKSaQtBGaWaNxPzTA9SXWbtZGrrzHfpeRcWuffrbou4",
  "key9": "2Z79Gd3iGxHUtrNKb6MULkXVC8YyzwQXbH6ijRSyDT6jDQgrMHqXgEzA5z89yxS3p75iGKCmQE56jozqQfRxvN3A",
  "key10": "4xgYsMH1wnGaZXUan1HjRnRCRWowKe1gQaS353L4r8DgZyuo47KhLDbnfMPnBuJ5asotRL9p1D5FvBrSPZVjhBiv",
  "key11": "51t7JNQLYEZqj9p4JuXyauaVKzekceuVJxMdeiDjw8ZuQitqWKW3vbuXaXCy1ffXpkJYzjs1rFxsPpYQ1y1uj9oa",
  "key12": "227p5M3RNjgq5tAy5XD74Pk6GMajE2LErT8uWiAvaaAsJQ4a6B8V2rvGG8XNSBnurSKWcJG4yyq1XowDPaqpMECn",
  "key13": "i2f2kPRZZZs64txrWJoww4x5bSvGXHur5WHRh1ComkEpdxy5Wxni9yufxNBA9AXbceaXaf5K1KEJNqZSi4Aw4cc",
  "key14": "de8riEQfBfmHiKEHUR1jjVs8nRjUxLE96BAAeJtj2H1syNP8T55xc81kuRiRHst4ZKba9zBPbBckn42Xk5qQdBG",
  "key15": "5VsWdHvDGqHiutWybscNg48h8bjNisKjZSpBXuFyGz598oKTrgoNRnSyvyRcigzudfzSvC8VayjYYcqzhhCRGVwo",
  "key16": "ogVcsX2XE9MRmTzBcZDqfk2VTDQPi2FUkG2dnamHg6u4dFzxmgUKT3PwqjCZK2T7XPiHXE9EzMVbr7XUj72pGEU",
  "key17": "5rE7qLZKEjfpKFN1SX26sywgXb6nhws7WfQyTFTd4iCaQdLUTke5LRnkcNneAgp9fiCS9E8S4nDcaPoM2DR143nx",
  "key18": "qgwMPzqZvxMFg3uMGMrboi4GtMh3aAn5BegAPgaUVGmcpaVuE2KmmxuZoozjgtjhufu4477Yd8WUwmDudESveGp",
  "key19": "2wfqYPyo4f9MKWnggyUhSo8AiyiRVZKb6jomXDL94KHfEx6HWSaxkDYMXph8a5GG4JQTUQS3ezJs9fZGFiVDji9V",
  "key20": "3m2b1dV8zkgKSEMPW7ojQJwcmbqHC3tnLQBhsqY9KPF7RHR8drAxXg5rDCKTZqDzwqAzo1F81PjFdrf9PRu8XRnu",
  "key21": "23zVwNdfv2jFHzCzijZuGrmaPijmmKYvLb6e8jXuqEhowJKNNddnsbewdyscZvBYGEdQgEJt3Yc7vMBTjGmpS2pK",
  "key22": "5N7dkA8ZyBaxqaUVmDWBS7FLEQnXUMkFafuSWA9hxBLS911q5MY1VPXrcZC4SHvctEQUTe6RSwyVRVpWNCzYLPKd",
  "key23": "2GRdK5vANSMtrj4tbj6wxYXBayfQkJUCHskDNPsGx6RQpzf6XJ2dX8eJQKQ8R5ZL89qGNfBqrcN91iBGVpnUvZa6",
  "key24": "4YAJQAsRCE4GjS1V2QWyszxhDQohpjZH1tRoH9SoVSfPShWqurYEaGLWJaMLsC2CRwssUFr9d53BFHGkxUw6wnoh",
  "key25": "2JHQcsDA3jF31uS7qaDjnrSGvpKfVemnrTrwy3RkwUrM3sGex13h84zxs6A3NshLvkPYaUndnPiZ7yHFdnQwEY38",
  "key26": "6sUPZcfUzMmJQ5fvLRjSTwvCkWtqhTBPLJr9JQqzoN4uKSkw5Na2KELfxdy4KDzeQDtV3VWgYAYbfWRRjha1isz",
  "key27": "XAtpU9YpvFmtKPJNLzAdjWyHeQxM5yHcQThv2Yime9TRUN1aP7qfWQEivd37HjRkviXPu6MKWL1AzkAexdDkREu",
  "key28": "YBWEQvkEji3EBzYUUrLrTuvF4cCWUgc1kGpsam7L3rrn9YuoiLpbkC5563d8eydfns5xtDo1r9rkvsGazFQ9nfv",
  "key29": "5FdgD4AvujVLW6kukFcUdhdyCVkasjdSWVQJ6k1v5n8PUK6wRpisTbvrfjamEjL7p36YLXawRQuyfVUVEUqi1Mqs",
  "key30": "4hoS9VfdCjinty4FpK8irGA3s4SF6i6z6qPKUvvHHy77TWEwSyhjYVFSLTNNYYfNHR4pxkgdmk8bzs4Uh7ZSJZio",
  "key31": "4wmHEcAxpGzgKWo9YCMNvC2Q74EVhrG71GKToPZMJDd2hjxWxV68MGgcQqaHgNb1BignQwvirSS9oQVrDkPXedBZ",
  "key32": "3spm6JiPUq4o7BzqGNNANHtuiLkVVNKdaRjjXCW5F6Eaq5S4fjDF9A8cvpXxpEjkia3DdmzKg5q9sQGTzxCUkFtx",
  "key33": "3EiLnJHskbVbdU5caLGXaQMGNHxbueaPDKwtfMzXe8yyqDw8Z1r7WU9Wq8pkPniVWtZXEpK4bSTujm785UaDmiAa",
  "key34": "QGMJBNb1qbVpqL7QGhUyUAqjbqFYQVNHq7XAoqjjKyhoVkh5UZPn5XMf1XmGVu8NsALC2fjYXGjDYPsUNXR6Wqm",
  "key35": "5g4PBXddA3op4dZmNzkcd2v49Rv3ktCDhr93yKhQtyHA7YaE49ZeKk3np4xQG8nE2Xw3bWWt3Za5HqbbajFR91rY",
  "key36": "4P1AHYnkFcZkNVxSihsLvkvQfR8rCN343Yi53F7gdBGMMbXxZbaTyPDz1WeosfuTYr3TqpnMySvkyacoNMSxzGij",
  "key37": "3tR7qp5Ty23djRmVqmZBsHNagwHRT1sK6eZ1mhDj9r8tGeFBaAG7DkSDXkia6vKGuDsc4geU2qTrK7TtJsFycVPN",
  "key38": "47p4nQjddjF5aLbrbdeKg1H6J4nXPTHg8dAwPUDviCnvhG63qqqUD6gNrLoX2w2P6ZmJbBKJcaWtzibCfGABSwCW",
  "key39": "3ZNdZ5odtbFy2MV3avUuZ6HRrCYNvXptUyopvhKJdH1QAuMmAbVcwCZhCFT2hUg1AwoVhVzP1fGGgxhgbFBooCDu",
  "key40": "2aAKQHfWTexqyMTK6GJTkK3gsgag75MVZuk4pnaTHuMpvSaXoCehRz8YDyG4iyJDTqjZxf8emgxF3N2MXV3Yg8o6",
  "key41": "EonMYgpQVkVLDhJd4BJANou4bn5s3dgopxPSxprdPWj2ND7a21zPmvyaERH2jrweiUzyE3hhNh4GpBEhozPdqqZ",
  "key42": "wuz6ECtXAHgGv4h7aDCMtSvspTgYg8nnGTYfMJJdfHuNJq6VNPUgk6K6jjmNPPF4AXirqJ4VA3CnVg5jxPVDhaF",
  "key43": "5XV8tf4q3fFtfFzoJvXQcGKNWW16djWHcHGhabQze32PJUJ923a3a7EDqKCt2QDtt5s115CijvjcYn4dXsXvAWYC",
  "key44": "3SeczxMBxLFFRFsxGgF2Ajc3yF5iajq3a8W748U2F7Lz6MkximypM8EztHz3k9UiopsyXpB94BKxxZFm3gPaoGzs"
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
