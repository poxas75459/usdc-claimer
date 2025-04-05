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
    "nFzax4ebj8o5SzgyYc7eupfh7sdbeVU4JDDtTdHMKeSLBRh7gJxpytQA8sX66rwArxMaAqb9Q4rpBCKhUCKKyJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ee95BH84JPiCmVWMZYdZHqJB3gDZWN7QVjione9j6tZ3SxGqT52ijV5DPbg8LZiRoSTHUnaPFcM4Tnf97Az52U7",
  "key1": "5Fw8CzH3jDNkgK2hAZEgj2zG3BJ8agczyTnaQZhEC1LqX9vC7ckD2cJDW9XbxdgR9h36xDLYazEXGX7TCaJo5Rk7",
  "key2": "5rcWMNiDykbhkL1khmvKJVRMkSHknNtjBmd7kNgNAZsxGPPWfDbHK4EMBNoDoe27fa9WSRr9ZLJWzZSHVCnukWcu",
  "key3": "2s828qkBQPaVKDgZPjfP5XUvkDT3V7stV9PdkaUwMwNw5AsUGT63TaLiWS96Rso5iHFqVbmESpUJxZFTFB76MHKu",
  "key4": "5oqR3zGqSxBCbX1pwVYr8iMmoPthRBmH7hVogz1HAJRJqbUMXukn8aKKPn5DmkjSHCK4G3Wgv6qHsMLat1kh1GQd",
  "key5": "65pSG5pgMaKoNmSt3sbQRSSuQWAjwoktb51ujmyp2VvuVR7nHY1oqBw5M9NsnYFYy77pgx9NBMKGLNN8khUkRt1T",
  "key6": "2DqVFuszNxZdhRQAExYEWEmzzX42ExjEuqgcSrB7G5m6AsdQDkn4gk2B9AEhBfTLQPqvtCnSJgUSgp4i89PiMM1T",
  "key7": "2wtCzkKNaPwBVuDxJgwVZZm7B3kv1CFzYVZoW7mg92eKaxqf71Ymt3X9GvoM2VDDn3aHtop5FQKgpC4kS5uNsftC",
  "key8": "3UXjQAMJ5Uucp9L7uypS4M3dyNNdCYLXx4HYvqxEuCzkbY6hD9BykZyQvwSCLvfNQh1D1kRAJCCV9anzb4JTtmgV",
  "key9": "3agGthLpfgnESLhXqzMQoqEGtt2p9tHwQCjHdeTFayotxaHkJkWaNZuiv5nGrXBdMPBVnkrkSsWkV5ToUqamX32E",
  "key10": "4Ru9KnCk7peRpLwUt1if17pZUGYMXXAcFb3RC8Ua3pXRvFqNckNqvPQ1sRc7ZyAnehSD7JimJAqPdnkk5x3KBTds",
  "key11": "66a6gRGeSE3zoRfY2QFsz6kG7FY6eMT1NmQCECd8YUnWJs5uCLXQia9djAqYAAGBtHCsay1LZFcE2AigQChprmHc",
  "key12": "7cqUY1kdEGpUTpyHz64JfhV5TFtmjWHvBpXGcb1SKVB19j2bECh6zxoAmnYuuUyjSq4Kh2MfkU7xgjUrKd4Gbdq",
  "key13": "5ZtmYKYDj6EDmaKJ2Aamtny4BCe66rmYKzukMMqTLqWyj6uuopboua4poSRRBnGLVvQFRV2rqearQHFu27GHGTxr",
  "key14": "3EjgFagDq4h3EEvFj89yZPVYf2eJRQU7K7Hvy72GgYnJ5ShJmF1niYnMSbUJ5AxaMKgQM9ozkNNdQwejBunsFH47",
  "key15": "3KqLDucLCh5D3wKt1HCDgdAAKgCqFTPFxZi369ZSH5jLqhVC54aXvnVw2NgMY61VvDsygW2ZURtbcKGpgw2aoXZC",
  "key16": "5dPkLdeoF5UewCKw6P1Zr12ncsEsXYDUUAWEUAikDQbcPrTJvJfceevBGGc7XQzfxdKuQCsZC6H6aGwnHfQAW18",
  "key17": "3VtipVLsAyCGGF2goxPFR3GpdKtKA13uNLkytbaX8dN7yokMstE7KseNALE4iQXvixJ2Ea9jhr1tfd9M8cWeyqX8",
  "key18": "5C5ZHeEJVjScE9CfYD6xehadtb2gVf1fDDDC6x2SeW4wAr3i8hAX55EQKF1SiQ5n1tuhqzPoqujLsjLg64URtyv",
  "key19": "36Na5WC9hT6rSoFyhiQhepJb6MJWWagx2W12wQwyJaCtqEF72XFaBABUxLwJkeYN1Vbby9vwCauSKSqcnv8NAdq2",
  "key20": "nA17oJixUxPepgPzF61FvSyEpTnytMDrH5eWpzAtyUHczNVhSyNDMeMg99vfyj28QfcjuoxuD8c4iATqdNaFFGY",
  "key21": "4vimYL63xVC8gkgKFaF4hGYjWzY85Ed5VMLPfSGUwT117UmBLmGPeCKUywewKEbaefiJzJVwjp6cmpa7L6AKNSJs",
  "key22": "2XP7PK8CofsbSdzFVj6oSb6ZtzyxHqjBAHoPyWJ37fXmbtYtdFJFDzCp2zgYzcfwYfrEaisYcfHfm8QMY5dfdu4p",
  "key23": "XPKMmwTCfo3CHSN9ojV1vfQeFnFCVNuThg49TGe3x58Tc7ByWUMLrMEF45b2f4BkkW8QAjwBuM6ChPNbiJFmbra",
  "key24": "4fPhQsxRKJ4GGupZd9EFu7fpdtGy9d9hB4Tr3rzdk7VqqgrjDVtC11wor6VjTKZL6a6emKRmnqCbpkpkYQL6fTh3",
  "key25": "BA8aoekdSqgFWN79CX3UEasJG1DrXMwtEfW2SMouJfhDp4fewdajpuRa3HqUoWP3oNVbqcHB4EuEArwgQBHgvPw",
  "key26": "SPkmdPxZHkCwDw6xx4fntr4uyiqRrYR97nkGvTmzEkBHQ8zUGdyYai7me98xRuHhPKi743shbLyEjHCzGUQfaDv",
  "key27": "idZREx8FXduSa6nWHgjGwhK6ifQCU4VYQ6iuZL8qn2xvfGPVAc9icgKUnCp2Pkh6UiZr1iAt288AntQ5RDDcY2b",
  "key28": "xfrT2zenwZ9R9Wq7mxHFCj9Djiy6ThX9BWnZjLEzC4k46TjQNWJtx13ux6mV7vSK6bdFBhmHZfAvrYrofKF67M5",
  "key29": "6hDDE4sQ9j6oVkXHHgjsUTLeAocdodSWU7aJpzDh2bx9mLZxkuJ4EHKzLEs523CQWAaYczT8oU1c4QzSypj2bdt",
  "key30": "3PeoZ45Zjmtnj49T5zZScVvHpVFCQP8dQjscQKWYCXjnxr24X7NQp6BSsEa9EQvVo54BsJrT1H2vxTU9ydg2DoLB",
  "key31": "4F8XEca8H2STgetrHMC7BCkBkUy9daLATE7cCfDnZveBv9dCfarRcNUDySTBKXGQ2Z8Ftv1S8jttP82wo6HhVzB8",
  "key32": "46PuSKhiBP6tuqiF1fdyzQuw5SbuYk2bjYm94wBeNPhUmTnbhcJ8DvYowuck6VNZEfrxLhX7VDAKzmJkEf5Qksya",
  "key33": "5xE9ZTcVkmxNZAAefP2T5CK9A76mXVRzLbsgtrLBvztZ5FMeo4AmTZ7riDQDDrgWVDTshFBQzxXMngWWeLxYeEyv",
  "key34": "2HGVh72dSLw7S2RELPhdiQXDjQmDKNd3F33yacgEo3hRAyzHEkvhzDMDu2nS6vg74ATT8agjXRreFoXd2ffNypJz",
  "key35": "2SYYb5mjp9UUTshJG7iWEz2vGewGQELtxeUAfcTMjAGeSd5WNeuoCGzJrTsAAuQBRbpRG9Mb8MWoqrzr352arsyz",
  "key36": "2hTGh7ERCfihgLn3dmD2HRWaK3HSTtzcjnWorXMFpij3xX1CVDX7mmTkz3gGEFMLWEwr4LY5975yqPn4tNuXw7Wy",
  "key37": "3mVZZYbDoywHxpdLmxqggpnTyaj4RoWPpPgLHsYGhingNZ5CkwpwJVykTm9gM1KQDgmTnGGtWqBcv7HxMxPtbor3",
  "key38": "5nm6QGBskBYWvjQQGtCQTFGpb7YQobWZJYJ6DPkV3P5RKzb6vYHXFJuEjv1kpqK153SN2oAayapS5dXaRrqZTj8G",
  "key39": "5G1J3g2HFzcG4SP5g9XWNDsoYKMGkmQnXnhYdXr3NmYYkjRbLd54MC16MU55MMDetTWUSzGsuRyjqeqEH3PyoMPR",
  "key40": "3xRyZaU7VDEYqYAbMCNum9EkoT7i878nYP7MvWvDA1xtw6bc6Mp4hDzKntJxbEqtkfA6H7VBvEnurnyrJg583oBU",
  "key41": "5djokgDaLEaPvH7Udnewv8K5f1osrKYLxMpMTAE1MWcWfTMwxdekb4iyYsRpuJjFpjiAwwnAS1E5HemwvGncYyBp",
  "key42": "5FJ4Pa54m9Zcy2G2QiDkAs1q2vyM4UPou6c3aDccYd6Nv6i7FHZ3UG99er1Nj51wp5YyKbfHcg9ZgDyZyBYNBmZL",
  "key43": "2dzYFhrRVHxFWqoDhLEpkbWLQ1aKWDgsEFNMaGFK9xt7csucPVPLgY1rLAMVgma9ZBrhuCAot6nCG8du9momrbT3"
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
