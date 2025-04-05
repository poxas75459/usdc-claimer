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
    "34viHvbVctxK8rrePSJmszv6c4Tmd2EisVXn5Rjv4d74meAWLAegisq4xVf2X6FtNWb4BqEDdPvv8Nwo82pPxpME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L49C6hWbbsQ1ZiB2fFmjQDUvhaoD6vU5cfuX3U4bANZpNmmjwYZFknpCefHrwhfXJrakcn4mCyRSTmc2BaFyfX5",
  "key1": "ebM7Ar9PhaNwM3hoSpiKUAxm9Aut3BA7rPxjzvKDW87vhANafc9QNd4NfsXgNbJT8t7TAKGZe9SrkfnyuuyKir5",
  "key2": "67LgJL9m5XddssXYqw4qTRyPh6GHMu1qyZKirPZ71PKgqa2pzNPcuboUbRYTChLcro5kR9tJythZt3BkYgF2Euyc",
  "key3": "5Jm3LfJ8vBAZ6LRNEWZnJjekksMduxVPPbakiatVBVE4fzRyASczZYn3KbNdUvhmXabpbnbwhKVzQcZ1fddgQbQe",
  "key4": "3qYactJvdLTSEVJR36mp1esa6Vzg9S2yqGZ7V3bD9Jr4ngLqL6CmACbr3gJxLnsW4Bo6wKbgMKi6yLCLGcgFtYcg",
  "key5": "3kQk6PmwDBw6FdoUk8QT1LdqyfejF3r3q1DHELLSNtKeiQQWWBkVptxng7EFSWvnzogTeTZM8dXRzEhS5r5yW6yo",
  "key6": "3ptAXUPumHioY9q3AtTc9Bdo4Qpy6mCARrvWYzrt8DKRYdZNPYfdGUTCXMH2mhspS2tmvvoTa1qntawfLiBYLz3L",
  "key7": "Qgzc8XNEdoF8pYip4HUT7fyhELnP1PaHZ7eXHNMFa7B5JKbccuf9JjKfQjb2ck7tWZ2uAHi8uv7jcAEQcPQF2tT",
  "key8": "3TcyzE5Z4BAcH8ZKdZUcncx2Kxspyg6U7EBxJq9iNReog1AoDih2bcVHFax8n9paiaJHd55uWJqNFNDvYtMS9GkP",
  "key9": "33Hqe1Ja6BBpGvzcHyWD3bvhWuQRbnafojC7wKhaB6cttYpeu9BL1TWhZg1PCqbPNMpTNoyJHk5zgH1CpZjYbJZ5",
  "key10": "3s2eA5FGrDdAxo9u5SAQCPt2HpmQgWmpc2nJnXvjDiHWhe7iATCFPRaASRfuFQEyQmR12rVngnK4B2N6RihBMJ34",
  "key11": "46YaytjByvNt32tAaDgMWykPXgC9dfYKCir5WzEtqZmuDFQMmUoXU87FdXuEysXEDch1ozd2ddGkhtxFgPkBoz8K",
  "key12": "5wzJeUhZPz283QgYfDYdA4tzKMoTgr8tQwoVr7aU5tthdXQ1ybvoPsTvXLtuM2dx9zc9M5xn3bXkr7DM5qHoF46v",
  "key13": "3wwxQKtfXNi2FCb3RSxcFM8kyYPCWr2cyGyfT2zqm1K5NrMUdgEC5RQ4wSWzJ2SSUvYYmX2wZkmCCFrCRjWUPnNT",
  "key14": "nshmkwxNUSXbtuMoc6hRDmED9M9SsR33G5M2UVX2qgL7GwdSPSR4cWtVrRY7cHTdPtFemcQSn3sUP5LorGGqj2w",
  "key15": "28tDDWWsqFkFvqxQdy1xchL8a4zC28siHbvXtNk81oRWySbq1LrfKaTxDwsSPUzci2zdCLFCV1WVPpZFaecd8eZ1",
  "key16": "2DnG9pt25UPnQeCQYgiqZx4rW7eQzuNboE9MrTeC8U286NSgLvUygLrADTFExPvx1aS3Kn9HjHvVK5PMfDHKRQgU",
  "key17": "4s7B6Y169R8wSCPGMxfhNXpYYrYtEkrnZgERq55kKtfBr1goFiE9N5jznnSCpHRhTcgRRHDsQprmG4Hzei1vMQwg",
  "key18": "Knq4sKJRbbVhZefD8nbbLHArRxnDrvxvUWmrKJ3jUD38Em9EbiKznbkeEUktYSgsqgkK67sWpxhepQp6fAQakgG",
  "key19": "2jgoN8Jw2Cd4NYzvUsPC7VRGLR1b9oxdeDmeugyKkJ4UQ8oJ8enBMfsY2GU83VhhgS4kR9uFkJ376d5grpU41s6S",
  "key20": "23QHjiLBVwqR9DTMFNtWe49b7no4DHSBZqgDcs3S7GwLpJyM2cymrZh3f1gN9iYsDoJGU7mPS5ruuaXjQw3JLNUY",
  "key21": "2YYUBJxoKouq5oeGdMbHerb9jdnA4vxX9eWpgunHzfSUbbhfSe51BvJHf3g3eTUjgK1r4ns7zcK8mRvmG3i3rF5s",
  "key22": "4kUGXdTNszS8D9j6M8JJ2awPVKneDLKXaUwKx9UCaBRaYvxuTLBewq37FJo6YFb1H1xibA5sCp8BJ6BBfq6bmWoM",
  "key23": "YfHZR2UHT9Lgpsov9JTQHMuvvcUvWmoTeLvZAUnjxGioCKpjbjqA55SuDZEvs3xvsT8X1SK5TaNrm8581Q4FhoW",
  "key24": "oz77G7DbKXSG3cNAxWZEdXLRnJUx8bAmfwRATaEA9ryVN4fVGW2mtPKJiznex8pYHq27bMcmkzx8LmDCXCxYRQi",
  "key25": "3LKWkvKPH2YKdhGCKjvDv7AP1xhCuC3V9kTqrJmyewiqXL6yHcAkRDChfR3wSdzgwzGyVFEfTRBY3rARwUwGxcky",
  "key26": "5SbKnf2qWfcM6hnWocoA46J72kS4mfGRbEf4CUNANxrLUcZfs765Jwo1xUKR1dmLmo2p5mEErJ2hX9bQC8nK17wR",
  "key27": "UC4onKhhmB2ehTACLrf1LK8B4ofmPPYyAnUGXC5QvhdKeXbkZBkE4Pcyag6jAohwPkMzHidJx4q5m6spCBCZ9iC",
  "key28": "4AokttfXF111knJdtSpTnvPHDwEQXjjL8aPKd4HrLdw9fWtn6pz1WWPXMNPVo2fiuxLJQtnJbtJEScrUDbfBMRtG",
  "key29": "3SsFeTpgEmTkeD8PmPkz4r3rbu84Fdbh7KujFa91CuduPfSLLo8dwax9WnRovvjRWLhjsVvuUAVU3s9UyEgcwGFU",
  "key30": "2j32C2MYj59UrcyMxU8bPhR9hPtFAr78fMujFLoRdAHsnWMYW9nkWCUMtrCMSX6XE5xCykCq9wxaoEHKPQEBZJJh",
  "key31": "3jW7W4vvi1jR2KdBBGuH3TA2pFwhc6qW7135ZhSiHXiq7SuzfrzQw2acXRgGbt7bTfpZ3KgeraS9LRfgYHn7WZrX",
  "key32": "2E6n8aH6KYKbmLbiSa6GHzTLiPR3H3smmM7Cmm7L1TwzCHsZfbmmzhycfxsWeNRw9k8kH84TXmvYT93xC93jBa6K",
  "key33": "48WKBrLP1xnjznLvoqXzcywmv9S8Z9esbrSALCPudyKynweMbRGDZB4zBsMA1CB2QAnhyFiEPTej3HC2nQfxeiCe",
  "key34": "3vx78sYUJ1EEYJ4Vi8r9JLiQF9LXzXVgJStvr9jSmgCeMQmzFQx8KQoDjw9KufrHbSXrR38Rfxx15dEAMyQjVCGA",
  "key35": "3s16a2pw5CXEqnGmnR8HiZzTRHrKuRYq8czFntV8AaupmbNBAwmdRmQMU5tSwqQBoJXadz55bRhm6Vn7Sx5sZjU5",
  "key36": "648ha8dbXBvpdq9ZtRz31Tqba1Lr6jsuRqDHhuVq8wifkwtthJrFHQFfubbThJo9HwPqLwPqVWwdUoSkCUc8x5aE",
  "key37": "42mDe6CstHqD9zfY3TXRV4dNaneGKmsSnpAfgfKL3PLYwmeo3rVwjzPbQDbuVFRpeA8zR6zQbRyiVxZdY7zL6w3D",
  "key38": "5YMdfz67V7BsCsxpDh1c2dFw9MFqJwpxkQhX4BVNDFYWRvS3X7PNTp2QFHf1smiwcn39JjcMJK6H3YVeeHp1wuQ"
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
