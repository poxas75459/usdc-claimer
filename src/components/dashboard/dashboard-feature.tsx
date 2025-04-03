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
    "WtGiyUt2q9Vua8P21FCKc1XoFdCQhnZew9ADvmnM3cVJwvGoHYZxrCk2EJhq2Y7GiqmhwNiXiqR3PkXxny7AWcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GZn3kngbUTPcbXNdnUTZSVQj5bFVBZt2PGQ5cDR1nCUoHJxkNKzAzEUXNibDPNF2HxoBKyf1c38HoSDE5it8uMN",
  "key1": "SXidZCpQ3HRYqvyDyj62FUHswKPfq4Tdewekj8KveuCoNcheRPFC1tz8j7v1CLh57uwT9Djvh3YAbQPVBzUwuph",
  "key2": "5GgnFgpWZyWwPDT4LvkgNKK7z6ahiCJctPax3HinJKk14J8SwW35wpQaGWaWqENzT1nWHBndsvJjYEfeag7HQ5EU",
  "key3": "5BgqDxMGiNqgWq1KjTVRyzqdmPUtLJK5ah3nKxmmzNBKGF8YRamsPQBTtYSx9VdLt51sE2bYZmNauQBcn5bok5x2",
  "key4": "5ydvbKHzEARMmTuZy11pVuRtSjNMhyNJPp4mjAW1FCEMfBdX1AUGP5iDsAnxP5NQCav6KBJ1e8vK4i9HczU65SPM",
  "key5": "41HZmrfoyQnjPEdv7jpuToxop1fu2kXVsEaV8A9Cdp4Tbphb1tnDrhqMSmV7CaZBA3tBEHxH3qZBks3N8o9aU1MD",
  "key6": "kPRJ7QceGopboSiJuFeREwmDqQqQwzk5eZ2dGNAVdz8fg68HAdCAxgrNMTYzBL6dgx7VcQvQauRXeE8oyRXPAhw",
  "key7": "5derCwU7wnB4isCoTBdM6Vns9WEAVFPMpqmjtb8q1iZzePFqFi2XNKsyCDvgSZqHPDmPcdya1wmE86sxZNFbLnvj",
  "key8": "i4SBeXhz5gTncytPqZ2jx46RekhzT7TjX8XW5Ha7AYevdpGzbGpDMsMqgp1rpq8tNLYvrzrWzfgRjzobmCMq2Hs",
  "key9": "sS93P8kgHW5XuCLT3jmV7yVi7j1sqAeDJVoqwjb7YtHpKnySduDeZ2oqNE8Rrcg67jAHqptDbW4iFvTHKKbNRVt",
  "key10": "2DmZRupzjgn1aEgQ3DTQSex4FFPqmq6WsFjZxZWDhABt87Getqe7YMGdq1iCiGj1B16GVBwg5FzEQ9Wzvw8ABNiw",
  "key11": "UkmXRWRMDwuUGmfSWrn5NrXjXQFKLcTQUAiaDku7hY9g4bKjyYpwYGhQp929CkHqiBs4H8ZGbQUaz8tNMyNMoDv",
  "key12": "66Qa1kRDf9QWCR5PYn7YmkWVp7vwqqDN5hPNsx5eNoY7EqxLKxhC6ps8C3XPDKsusmf7A31Qdo2Hi6L76hHyXvb1",
  "key13": "UdF52QaC8Dg8AktJyjzNsnvNj4a8E6yF2DniDBpBPAcCpFAS6Jg4pWmksTrAzaBkyYVdjKspnfbttHv4j3bYhhy",
  "key14": "37DDTFNnkqk5xQufnX418NGNe9qwYSrMpfExhhfqx4kX6SbFwn4xNu8FZ9Pp7Y3Rbe6iGYc2PafN6jqZwewxkvnL",
  "key15": "678oHtzejtMaUdDgkZdfjmYHqKJhxpoLrFM92Qj1A84vFSSiRXt9YBpCAEpSuskEgUgktmhJKb3Xc86d3C8vfXCL",
  "key16": "3vR4ZJXekg3F1widfJW1N5pJcLf4Nf2kKh7Z7SnZyHBcdjL81uKu5TLoJ3VVrrTKF1qgZfRiVdm9uFMRNLDWj1eA",
  "key17": "3mtsc7kJFfzUjT12C9XiKhiW2HqQnS8wgknYfyS3RzyqztEFQEezp4ST9hUpmGUb9L2BW6TrYHrhGZbEauw5xvKa",
  "key18": "5zEYM8W74ykuqGwYkVqaNSdr3JKNLmB89weiYb79gfSNMKad5HEcEZvC8Go8j6q2S6NfDfuqRLusB1uqo1sNpSTn",
  "key19": "3utfLKkM1KWMmJYhppu1vTF2hp3GnZeJ2GuSKaVwuakppY6WuuL8LfVYzMkvJKPVdqdvqTDbio7adtSobreU5tBt",
  "key20": "2RhoUtDNqibmWLDqabcEcGf3uAhzH8DVJiXCYAZYMYiqQ6DuEqqrCXkhmwDkC7cKUt5rZRHHz8dvVntfAq2pJn7V",
  "key21": "2xUe7HyMF7YnxsPNCGdwnwFTdBzzcH15V3jVKhhPaXYcjokhGvMK4UyBfyDZkfh1f9qYxhLe31HSjx6rWdcGRuud",
  "key22": "4SPbUUUP7mYHbWYYcYTMVvQkA2ADKL2Tvpo8L23asLvVCQf5wkAeC6bmBE9gwNS8pzP3ikfmGLJG6PhyNJjnmv7b",
  "key23": "65JW4p6y6FZ5pM7QaikJG2Zsq2qAhNq5FPP5t4e3rbtw1RBD3GKtkmf7y5g9BJEV1dJcNHbyuhxk6dgyupXU7o6Q",
  "key24": "3HMj2KeL2NY77Kj2Zrhm6cRok81movqpDEY6eRmm66vtHxvnwvhsxXoRJjANrGBXxPQXuARUFsPmsgrJ5rMj6WWZ",
  "key25": "4rzCvMCfzjRjpZ1o2REizV2UW1bsxHsDaUHrneLJ7barbCcj4AQDZteDcWpHWBt6Qfw1wcnr1fX7St71LkeJ7Q5t",
  "key26": "N9J5UHTb6voqf7R51juS8ZiCoxLNBpehk98SbpdcFLNGJf1JfqcvtaYvggrCKcLzT6V4mZA2P16HNUX1DoV5FYo",
  "key27": "BCNEgYWoUWxSsn5Mp2HEZwRyhmKnD4VEnnoD6vupi7pb3XymVSm4zFcn8LyUqywXBinuKDoJNH9YAbsDbuL7H7D",
  "key28": "Uk95ifjpZuENcnTHtXuKztGv2qnVSSuuomYmWS3N5ijK99q9bG261Nck6jVc2YWTAkWGxtXCnYvygJZ7ULjh5Rt",
  "key29": "5PRsgNevKu4S1Ssntfq7Qk1PDNhDC1cscBxmqDUi6ZNMLaKshuQMEwv7KQC1yChWY1XZEm9aQNJhUbQPAD7xGcaQ",
  "key30": "2T9qoGUqXDcXo4SCsgshxdgrTtqPLUSge8bXeFhVsztjzTwpDZ3tHYJeStZBMUUJjdB6SPJMixCG7heSTER6FhC",
  "key31": "3f5Zeo5CrycJjE3RA7EJur2de5j2YfREHkemB4fPr9Ur9tu6h7bXbbJNxsjd8BTQBRmu324eHjV9pXYDCPEYyp5c",
  "key32": "3tbggpwSUbWLpi44ENUnTfs6VrXeFME6RnGrpCTJQ6iqhc6941V1gzaXdMLnLfJSjWYo7PtEb3LbxaWfhv5q4x8p",
  "key33": "2UChbWGUXJHouFNRjzbGkRcMASETKjCxxN4zDc9hSD9nnMM61WQx6eHYhPCctAdqQUi95NNJZAEsrkHinQQSFHKP",
  "key34": "5kJHgRaGUR1QhHxxd1Mp2fsoHi3a1QqybBU7AMroPkLJL1v6zD2WHGkRGYbWbSznBGDTk2VqyoMCk6xRiX5WLGJB",
  "key35": "7C8FzMzdvAF8RLvFMfQenoipipTi9QJQY5w11MzLF8J29bbykP4hoamdigQWhJWHE6Qh55TUEv8q7TM8ygFb6Dt",
  "key36": "49reG4pKxno1EUD3SBNjexprub4FEoN5o61HxNQ2ajjdUSN96ZuXVBVYmsqHtYuicXjHwHyunV9cBPgNWPz1edAv",
  "key37": "3NPDZosRp4pTp2gV7emsWCSW6hUKQKsBAqXLhGDshgmBfygeNzuUZfomC6M9gTgPY5k1Z8RWS9iJBFzqvoduM6Bt",
  "key38": "67FQhCEEiuLX91Phh43dpvwkmCYQrrSTRLZeimAnP9SNrr85n5uMxNLXhZzcmS7sbDMxmd7DuNCG6FQSFDsfA4BZ",
  "key39": "3ewVAxmePQot9SManTCArnL6w87aurBNSUMndf3L4eZkg5ffpG3XvcgKhzKJ1m8rcYNjD3rhUknpyKVLXdCa4rn1",
  "key40": "4eBFiBzarxdJ5L7aQBcop1tXWyKKrTrViCBHEX67sDSwjNzhkC11g7f175g5JWKcoAEht7nn7knzmKHCKGRR3N33",
  "key41": "ne56Fsh7oJo1fiwEGmKsDcNyMYPWm7XcGZLJo7oQ13vYgDPyUieSTVJzyEzhXb7WuD4MuWwtSTriZ9UKYjFpgrx",
  "key42": "mf6qMwQCdV22wiPZjS392qCPfC9Mn8roBkMPeoBnN9Qis3FKU8ubBUeGkDVf5RoYZVPYeFNZSadofr2EuqW5WHA",
  "key43": "2mWyqtdHzMVQs29J22SeZHXcWcZEpkwt6W4HTq6UmsJMT3YVXXv7132TvL6eRqeMEPNXf6vsRutKVvqfkqm5jByw",
  "key44": "4rmi7LJgFWB8EajhZCqeq8bycJ1wzR9RcvoU4wssQbaWdPgvuAoF5Sk8f22ZfeZhc1A9eJHZ6MLTxVATmVFacsDq",
  "key45": "5mcqybJE5kSyw87n9zykiteunaYeqejz6kTmWDdpFstdJLySPoh3BBdBBz6PX99E2qZ554ie76k52fw2dehbvYcG"
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
