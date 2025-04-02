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
    "4avN2hrW9RF4kQazrFWTNdgEBmasCF4n6A19cAeP2oNGd1gKZChnFcBW7YyhPM3NxnA5vdY1K9bkcFXpFKVLagKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BsZuqoX3KyL9sUnBeLAMuYRbtk7Pjoo5kkKfU5PNP35ANqw4fpRYnqdz3iCHboPjGS48j8gSKuKRJeKq9Ux8mZB",
  "key1": "3XeRm1fu5EX5XsbrbM5NAMPEFtTJUGEvGsJnGkQLooGDsN6cHvtpGU6ttYTrfRLnVwGs7uHx7kPV4ifbFNAe2UCs",
  "key2": "U9mrHfv8hDJpQR3KYc8T3YDptVLBacwoJMgLzvyLBDLq3hjtJ4Xcx2mSsjZfKp43j3Ajfy1PToxisR6zsJb7JQP",
  "key3": "3N7U1yM45ZmnkHatSX4ir7TFkjQcM7wuAHCbomZuAAa29yvS1U7nA9kpzfqkrm6UKq9iS2t9fviMbDp9MBbuSCpA",
  "key4": "3q1wwuWhdee8TLRvHwqHFVHGHxLLhy8v3kZmer1oP3vXoAK2esr7bnXrosKcg5VjwiFH4dZn1BGwh5Pc8D6NJMwn",
  "key5": "5WsYki8xSQyCLF17k6gr4iXLFmW6UdC9TLvcM5izuArsLowCbfBbgXooC7y3riMUKjDfDxGaLPLg6rMn3oJpK37s",
  "key6": "4LbkXmCLnQpBTnFCywy7u8LZcDVMAMqreW9xX3bSDbKe7uCxhLTNevRe9vVmsADj91kiLB49NWgED2zRu34gTsuu",
  "key7": "2F4rtHcUfrTZ95AknJ7vmn7RG4hrC3qHDxwTDG4d69T1qpFbYUUSURp95Up8kZC47VgcfEZtrtRpEAXDuf3pNqWk",
  "key8": "NnUWevt1NJWxBeRZrwoPCCJrtheJZErJTKSVDXoZwoSd5UGxRzypWWeoNwDFppcAS6LWBsVagNSzfDZUPfTDar9",
  "key9": "4rgstCwNdrXUhiZjCy6cGXfXSMHrMdMpaWfUUGcvXmFHKeuBncvRuApwsYztXtNCM78aGu57LY5rDhHzPRicF12d",
  "key10": "4RjiHFydhXx4WFTrLNQq9VwtmVHijKVjKoRHXTxB2QeMKGkTfXdTmNpbCumYHnYHUtVDf1hhzLg839LCBuWz2xex",
  "key11": "4Cpbeumdd4Rj9GiPQrvHBKNR6UKi1nBQYR9xjzVUEBBSACEfLaqnvuGwCuJwVPRkxPY8NLWtdTxhEZVBpPmCU2Mv",
  "key12": "66NnPQHeFtot13a1Wdyw73GEossVSjgqC39mBZtdhQ2d6HLj1LX46kUhTxgYt6pZvMgGjQW9ZuFeHA2cb5mc3o6z",
  "key13": "3u48eRMLWWWcHtJTLNwpqqvCoxQDQUY9QBUkKRQWV8mSTkiaKZkxJiP5gxfpLMwXN6vL3GR4X7q2K4NEEQDQa6Pn",
  "key14": "BwsRByoQyqkJRHPPHSEaeJLTLyS1ct7xyic1iSt7cSkNQFJso5VBFxwCL1k8FWqvHmSRNZfFJAke1LHfSGoqmDn",
  "key15": "4GM2hmcDK2JL79DH6o4VDWB5pP6ZEJ6mLL2XwRVGwScHxiooqLYusjzQNQFXs7rfqj7Xn6aWwPJ5Rd4oScQ1ZDFB",
  "key16": "4Sk7j9erJQt4R9MSrVF8JgTt3oQ27Hu5hHZU1hS3EmRi7tXsC8mmk7XwdQFuidgKoeWwGW4GTbgvPJx3kCM8xEuw",
  "key17": "N7dtgqdKSu6Adkunx8VNsXzAZZbevhEqSQLh3E5ixzkM7zUCAw3tXZbrmraytaT1mKaiuMXRtmVwz4CTcc6xnNL",
  "key18": "5RdiTt8JNzGcQfg5tF19aS2kXCUxXXbtxW2enwuTxep5bngVEZM8aabgPwavNAFd2LqVM7BN1rfG83RpqiY7Dmd7",
  "key19": "5AknaUWLiAC9QawEq9kKNQwfzLeUTPKzreJRSw9aCprrejk9HKPRJGfo4JaUcuXnCzdyTsPuCimXaxFunrCeA7gc",
  "key20": "XQDBi1BFAri2mi8KVqF81oLRCeTyF48YYLaDjUYymupsoBy4tFawoMdEkoyQCXvYbUiiooMhbNCSft1RAQ7PAur",
  "key21": "4iARtsbgTHcCTYKqtGanFkwF1jyBumjGUdsXfXoDYJjR6ESrVt2BnrAKNxmy9fKHTiQcmQPDZt349PuZZNqyyUJP",
  "key22": "4N1R28eTPCGVmf44J9YYmjxeRibpCo1cc1ovuJk6tXQ5ARgLXmDYbCm37Kz7pmFX5ToQ72xpmLmY3Jh5SGUGVXye",
  "key23": "2S9usHFi8AoG8jTQPLKDUtDeMKxh776amUXv85EFnFZV7Do4p5fTF2hv1NsBEnbBNUfsKTxDiZnpG8Das6u9CJ3F",
  "key24": "5yPyZHjVrLr4Aydtw3Mc9zb6qY4iye7FXQch2YBWoFrPhC9oLJKAearcLzVv26a4YPJdGc8yp4uUspD9zx73STfp",
  "key25": "LmPpSaxd5A2tkgBsdJRZV7swzrZFhjkTZUmtHUGgP6wgZWHuSvpARVktg8rwreYV2ByyB5yLfchdJW4axYkQSr4",
  "key26": "5kuLqWQk5inhFKkjj7MUMTyFzgZPMW5hwYt7sy7u2WUQ5E2wnk4WaxYCo9Ku8hGjpWEkQwSywsK6uSGbeVSyhihm",
  "key27": "2iXqcuuSBbUwgzvaD8UxdZNZB5Mi8FUEW44NffGp3iQZow1VfmjG1JUYvENrDMrYBZH9n5d4rsCGKjtcfcGMWdFL",
  "key28": "5twXd7Pus8XM8KtDWWqibePct6S8RzmCwJYsmn8cQmjeyBSrfabnz2f9xWz55bcfEj5AGEwpkt2iDPzEfprZauhk",
  "key29": "37EbcgX7ssXk74SQYEbTjcyZ9ELVBbjUUHDhcb3EELXFXoUsoTr1s2n1ESwPEu19UEKAmAxwTdPK7mdd2QmycihT"
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
