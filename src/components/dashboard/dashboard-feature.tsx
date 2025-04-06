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
    "2WqBsX1LC8kdUJKtSyGr8GXBNfdTNGHxPYA59aC7NLjWzBgsNs2Ww3WG7qPv1jHChSpF3dGwSWYULafF3HNximU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5udemqXheffQ5VpuS7r6ZizzEsktf3PV1UKovt9H9uLhZLh8F7hyZb4pAZkHxGxjTbzf6w5HobnL1REAVK7tuUJh",
  "key1": "3dF3bdntkrfcgAP9Az7LWtgM11RqfcqBJQebFjX56j8p4PNXj5XaLmAeomVfxbRbEDpe8UaUrsegrb9z9sRC5HHW",
  "key2": "2k84oEMmMTe6vUA7N9ASZ6W8R48vGUEqk9E7GE8xpCNxVz24tFwrAv6aWWnYhfAPy6boTuJdYt9a7zaua1TzkLBm",
  "key3": "hSTyzned7Ts4LB55GjZLQjFXPFStzNSPxbfJtnB7Pe8fLWnFtrSKThbgUyG3g5M4Fu4bBPZZff7t5r7qYzrxaMM",
  "key4": "4U4wPBtVJJ8MbwQAwK3xsuXnudP2nMGqjfAASrzPfH4dzc2afMAMEWfSEnRxtoKvZLwkekeRA62AvJg8Mk6KgRr6",
  "key5": "5wsAfu1AaZJM9DEm1QKSXY2B51YNpxL9ggGuiZ3AQt9D6dHEvnRKG1wrp1KdjWRcUGTDLPJnGsi7vudG4Wt1srwY",
  "key6": "2dsmtzRyaCRYE1NpARJtt7F7ESfjc5VaqqG6wqR7uoidZB6CSrDsiVduHf5GZ9QhHEQV8XfQuU5Aw9PXU7AnwSmc",
  "key7": "q7zL3puaCkU3ZZLwDSqPGCHwdMZB42dhF4JKxrtBEjesGL7GLjcqoWfqeuHU7WXPA6QFmXcCnC5Kc7Bx1brE3Ca",
  "key8": "dMbPsUCLeqYUUTSnPmpfWSBLmQLKSFyMw9h7o8VUcAk3e6cKXxPyutsCB9XUmwpvGa8yTFSjpmZBsHtufTUdXhw",
  "key9": "2UxvVp3rr1W8KwB8kkJFLMmpDTC5iLDuCCv9QhLBq9yDj4i7UXkuVXLQVpLKg4WfNA72ACgoni6jC3H7konFioRN",
  "key10": "2sZ5GnqU9dBc5cLiMKaD6U9kk6PHSMU9pf7CRL1xvR1J67evqmu2aEZa3qAVNFeFhJCt1FAzdC13kaULC5bTKmyH",
  "key11": "2uXj9xQ4tVwGb6FpznAP7CKpaXiJU18qRxQNvhp5nyVuofvHkpC42RKDu6HV2gzZBLZFqHony5c4Hic7hPikWUHW",
  "key12": "o98P7Lsjwp7V2AE572Zg1fBvpaDaqWoRDxNT2NnwusUsxBbASgr3STnw4Nsja8sxpReiCHYT9Zg5MRn9RKwRqBG",
  "key13": "2xX7cY5yEBQaP8ZX8aowZaLXB2F9Yyn9L5Qv4tAY63cgWRR2uzhMbHPm6koXwZQgrcacS2LqZUu7zhqS4oFQyDhB",
  "key14": "YPSEBVrrhSVKy9wV5A2nB8R3Y9pz8p9GDfwsPogrJHHJndB6D3fE4x3gyKf3jyuR8dWbUM2dKLExWjVNrp66qa4",
  "key15": "2qabWcdXiP532NdKt8vxkfsQwJSPFws369gPr5WZyUYzwgPPCPCMYgvV8hehqNUKhtn6xPPPiJLYxaZUzGHJzsKh",
  "key16": "4enCRE4eWamXpCEDGgMLY1mzmuu9g9RU91V2mQa9mRriL2inYp51kD6wZcK6m6eU7wxQQrjCQdZr7WbGkTMztbD4",
  "key17": "2MzVpoQ8EiFoxwLbGf1tKnoQWPiitR1uzPtAEhKxkib6Xum286HmprXozrrvBWhehHV79s7gqMDtQ7s4P6pmdCDL",
  "key18": "3h4fKmsoKAie8P89cvJtcTZN8Xvt821kANkY9QFxz1as5jXtgtzZvKKm7XkaqvjSyu58Hz39DaTkiPDr3pHdSNQi",
  "key19": "49SRwWEN487VER3jsZHdQRqpXdBrb5mpQHLfmCrgd9wcbCc6LkTdevkaQRHbSx6qvDtoSzQdds8KxhkdyN82bkkk",
  "key20": "3otuqYKPuPJgQLZsVW1w4MjkTFUTSwXm7Q5xhURQspw9LKHqLiK3K8xidFoAeMajZJLZCUWefJcn1UaNcdSJM49",
  "key21": "kxZop1QMJJHRATHm1mCKngF2BEzncjVfNMaEpC1Be74xHmeV3U852Qm8Y8mJ3YnBDYua2eWk1wn4vcxZzFKuWjT",
  "key22": "3qGJvVaFe8hn8b66J82pnWwrSz636xZ2u5pwuoTwkeuZvXqencm6up9nxFzYsQKdNTj6KpgezhkVDgBLu9xhmjhj",
  "key23": "36EFuxpR5qP8kCSS3J2Wuy6o9GAqRykrCzgQrW4RyekYpzsrV9C3zM2wPw6CcvpW5tMdNNc7xjMWCxdbvFaZcgkp",
  "key24": "4pVwUSDZ2DqD17FvfJyqpDobtBCrinWwDMEfFp65VC8JkdRMJ8cxv6E3iCnC4XadkynVTmSpSctDadFoC9Pj28or",
  "key25": "4CsiJLFCDPxifQmXiQUoYDbpHaiJ4MfHkQkeiWEHE2WYowVxzUQLPkFCZfijUb5QDvsUPkkmFeBxowT1WJtF87R4",
  "key26": "3PEmZQa9ASqFbfujZrG5acamTwxC4aB213QfhtbzHFwjRe16aJCrFJnbznpLjRyPKT7HvupZ6FAjif9nUuStU2Tq",
  "key27": "2AR142c8Bgiq69BoCvKcrrcR4TREnw13iET2rwWM5dyYpAL66tuaqg6tWbJZ2vbsS6uUEqfaGcgxKjX7TLQYQ2n9",
  "key28": "4zXswjFkZMKzPJ1kFhXpA6m3cmnai3Ds6zNtJehHajqr95cnFyoGYPExR3pDvBuYZryZWb6ykPyWC62PqG6WNWqc",
  "key29": "5LZEeiKPktpoZJZf3UtyQK2MFECaSrQUGXJBqo8emVuMjFT515pG32HmBZVM3yYVdP4ghkemuDVnHcUpvhrU1YZS",
  "key30": "46Jct9rGKEd42RRXFEnAL2e2jYAJHXyR19iSzpkTxqkFougWKGjK6VfZqKdCQZNHyEetthqemUgjS2Yz9FApZe1S",
  "key31": "45uLZhSLReYWhGAikwJSQzo4Ws1M7rtje7SibquCkYWrcJtrGmCPuTBjtY7Xny5BHapow4BUaTYwXafVeDs5wC4f",
  "key32": "2fUsFryFpDrQMe5i8nPd65PZPiVWVfLjFSpzYJd3FwszSyBSTJXsFgHrggVjfF8p2H1Rcua1wDuecC3yFbu22kEu",
  "key33": "4ucbeJdya4JBPwk68nPSMANkPJR2FtJcDUHBJX2Cw4vQsYkiXcGParHuV3TyodURcHU9K3pQNS4GvDFzv43hd1wR"
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
