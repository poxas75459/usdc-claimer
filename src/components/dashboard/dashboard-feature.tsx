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
    "5Nkx3TuVymwVcun8sh2R36mkNhhY5cHXEaohdeXAgj8H5WKPGr1ZjFU7P81VF3Ud4EVjP8a8q16WLAVwRuFEYGv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qKDZQV3PqYgXHZ1vEj8bpDwtVteXBnYg3hxAKaymqkcRkp1PENUJKVTbFviUtZfFhwvQawvN79NhpiC6qWcKm8c",
  "key1": "6qRZ5y1fuf249bcHFzhiHAqR9HSiwgdXo6zR4z9PSujQpcSXDoPFKZt9pJMU3quStWosSJtk8e4DYCPYpcgfoE3",
  "key2": "4o2BsXWovNk2UJpb8Rd8HiN5nX3TYsTCPSM3SHpWjck6KaETxm3xWmf74D8Nfea4kGEHRxsMjyoWEcXSUJQGDevK",
  "key3": "RZd4ZSiffaYyETmQA72mABGQuyw6Na9TacrLC7uobFmFq8LuS3DbKJhSvFQ7BC1Lz2daUWsA5nW96rde3qovjaZ",
  "key4": "51QTQ9L1ekhJW4Cs93R7qkzJrKSs7fW9JAkkue4siyegWezniHWUJ74xDyMtCanfm8Lp8Ree52XT64vQ3ZkXTETd",
  "key5": "4dJyZyE1EijatJ7VaLERi1Vt4NcuYHEi63C9nab4poJfrLuZ7PrmZ9in3mptSiuGZgTBzREYdgqhi12bHsu7kBYE",
  "key6": "3jRUBuLehLeU6VZqWqAGfUFZCZznzao21pXCdqLqZseG5ECo4zrGGzCf1a5bHmdSTGY2Jmx7n9qLU4iywUDjpKaK",
  "key7": "3LMFJhGJs9C8Pu33QN1BA2SyW4vaMi6NEb5arkZ5PrUfRZVGjQgBtWNgvne8mik2iyHEXb7qQWiZCznJkUziFdjB",
  "key8": "2sjX8Kqri6BcpXrt8QDWNb2wWK1vaqiqPNKNaZ7tMB3sNA8pXuwzCi6zVzn85bB2srzBdyxib1PAyMvSktNikAum",
  "key9": "17U7k7o7zaHbu4361p2AbgrrFwA9CNYbEeG4NhPkpZW1T1RNtkZw7SkNbEHbgi6LWEPrQDqj1478bubWgoASyNL",
  "key10": "5n5v1inz4SHQP4vTqbKgWwrAppZts2FGen3vCbs5Bs63qiDL5LByTAGoNQV2iyJcKAdR8qPV7aC28qVxheFLCQQW",
  "key11": "5WR8QTzqZuhXxsdqBRsPKPpX1KndcqKjwpM9Z34BQegY3YpFB3zN2HSY48gk57virDQ4tFh5ycjiFRcHrVwBkRSs",
  "key12": "FGvgDujKh8FYuWT4bKVHnkdku3XG9aKTCP5ErwkMWztwdWpmB6wKmYttCwPTLkfjLE1F8WUSXyQ2kthzHvipXCD",
  "key13": "3t2PrgBBw8nTjzJuZGExMtYeQ4hzu1x9TKsMF7fUzzshJPApVyWJ2eReVtCgg2yojxd6v9xHduyYSrbN2owof5tZ",
  "key14": "4WeuJqhJ2p8ngE82r9WV8TbkaqEaJCP2RzwqX9ACrqNkPqYrwFbiCjBi4MHJjJFsKE2ca68jzXcFkVCbXDi1x4Qj",
  "key15": "4XySA1SpqzJVavwmDfURDUBTKyrHGS6Q6FPon4hHiHaGk3Y9pefn9KnATM1Mg9y7sTPMGNyWw3cAhecCNio9rCJN",
  "key16": "zvUGvaD54i8GkwCmTaiXUgKQ7y4m3uFPVj8qvQe4wCq4H73r2LgqNSWr1R5EhsX7sgnA1UcFPMAqrp69uhRFtNP",
  "key17": "XMtwuNpT7CcAakKPiYLnGM9yDbaH6UZYH5BzCL32bMYpxg27Q5RBov4kJA9UmmJ6423CMhMKmWcYGhJATLidaFR",
  "key18": "4gUZ3Mg1Jaxp8gjdbWFYcVU6GmE27SaqpNDJqe8oHm6FEDrnfzd4yLHbwFHmbquS3gP2Nx7oWCt7ozrFTuASkUqc",
  "key19": "7pPFpYo3fCgvWScki1a3s7EHgfsqSZTARYwuG6zaiqKK9Cdw5zYoEC5NSuzegX9zaU7DGpPQdjdJDwYWk6916F8",
  "key20": "FgARwZ2AximwoSCSSQQVXbWm2chCc2366VBr6hcqqndJcBedfERbXH8L5Fd2fX5kyVjzvgCk3xTosXgMNmxax8B",
  "key21": "L7S52pFtHux6Qbb9CKuJXQPuBpi6Fss92JNMT3dRPHyCAWubftCQuCLqbdyE5pPLzsLxmTUfFS2bGMCmYLGLah5",
  "key22": "2jeqU4Q2mHsBRh5nqcQM7xXkBxKPTfyjwc6yf1Zq42DudtNNqPJkGMXm8augUfHg5qvLe7SaddTimdbYbE826otk",
  "key23": "RmGaQB43GDuADR7chFAGTwbA2tfKiso2rEPG2FgDuYd6UWWmU7CjixWxxAvdg1Duxy24dkM3DLkA3eQe1sgDf49",
  "key24": "2iBQz5iV5NFXpS77H83qFij38hMGXkJf24JPbMiXpy3r5Rv5wqj8UB4BzPYq7zgdv1bK9cKtm3t8wv1Q1ri2Tnkt",
  "key25": "3wMnsEHnYLknGYYSAmGHvwq6NJFC7AWDTYcH8j5qGqgLoBitLW24rpppPerjWfLGuLT67QfRjJo3Wprg3VNhrqYn",
  "key26": "61vZ89zzVqyHPrnEUgQtvjgfcsY4kBL6wfGtaCG9qLSPEqyPBBNnANNY2NXSXceZkPq5Nd4aWPoX8d1zwjFof7Tm",
  "key27": "4aHfntDmuCdxtXTvuqv9RkDsgCEKj8YDWN7C7cZm6k4Pz3bfnpQthJhSXeW7qW8ouNKMunb2GcvTzLRpgkx7FDaA",
  "key28": "3qZ4BZo6Gwn7bW6fD1AJSueBKvc2HHuVmhx5XUXSiDcDCHT1kTDQULJq6GACEGyS5E5Z9vDbeKoLLyxZbj1Gzgq2",
  "key29": "56AEqYJ13bEepsSv4txjx6xVUmUMDcZTkLwS8NGh1MTjX6ZQ3ptHC72c1JZxSYGvKVGUZAdsMJC2MtLmfipFFEL8",
  "key30": "mazvX7jmdWvaRdwLVSsmrLhFTmjNgRJJ3Rgtfy65MRPTSr9t9awY6Z9uXnCD8f6ddmHeEsiysS6BTDehULvaRhf",
  "key31": "5KHkYLzdThrUZ96pm5bpmaNpJan9VYM6hFnBKvUytPUVBuyE4qtfFJz4Tte4aAHWppcKiPpCKyvsAyZXkoHDsQ8D",
  "key32": "5Hub87sXEZPgPeXsKe3tQTjp2YTYYk5f4PFXvyEd3j6oDGcRtD7hNZu2qnbNg6SWDSgRUnQ8fRGV35ryvfxuyF3E",
  "key33": "54zoBUVkFXcnmnUJT7oTzwBFSwUnvVxDVjSsN5VDiMq3369SHKZJSmP3v4edvWPTFopXFU4aoV8t6udpZF6P9fVP",
  "key34": "BoB9UidvFDsbGaGW3iRJ99bB7sATs7iWaqLXN1CRF7exYiwexJT2vHoz2GMcqqveTrhmHbxAbt4UzZLbEzHrMcN",
  "key35": "34wB13GXuMGQ9b14ePA6THRY8GG92rbwhYWFfSikH715g1FMiaqXXGGN7HcHdRzgMeeHVmRQ9iSqnBFYbsf3Wv6k",
  "key36": "5gknbFvhTKWxjnkdCUNY9GRNe3g64N22vsZhPYMz2k6pg6ZxHHNeBnpuHoAoJh63xtWZHahxPy18bRamgvki2i3T",
  "key37": "3jrbv1HVxSgCUACy5jUT668urwWTEsdsbWBQkejqYdiW7fjP7cHWctEGeJrXyivpuUF1sKLM29kYs29N68b7SUr1",
  "key38": "52pKpNrHobB73tmfq6U6qJ43cKRtic3EHDz2bDbGPDpveZ9s6pvdwUwzEyEkDuYxSAPitJpFgs87WUPomi3T1zd",
  "key39": "2re6pHqBPNJT3DmztpfkwDxt2bZmvUVp2Chucs36xpHtUWNKgP4sfssogNHEawptZHSHqEMCFs844FiGPdMhCBUC",
  "key40": "54nNe88iHbtwVwWEgeF7efRDuV1hTj2QZQcEDVANpN8AMTXMh5bJbVsFsbZmbeD7kuSjhkqg4KcNLsD8nTrQq5k6"
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
