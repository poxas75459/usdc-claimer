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
    "2bpTdFkmeWMQ7QKz3HExWFAqfh7XZawerqs9jQo3yBqhQDjJhQizdN5JvgypzDStChGXmnaMkp9m9aNkxw7cntgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Np1xJH2nU11R1z91pnn26CkaxvdSA5vtG8E5zY6gygnuFVzhaaeQhrZAX4FP9aqeWHnzeLG6RvSQ9HBVKENLtEQ",
  "key1": "cuo7rXg1TXzdKSMwb8CvPTtuyapbN1xRwRyWYU6h4PCeUmap2ng4mZteULs1cSki6DiP37f4JrCdrzmWbNhbLMB",
  "key2": "4qwDwNWnEEB1U25ZecJbGitcpnrf9RMoota974rPtKJ6suy521KWr4xYZNozTXmfUS1AYQwAxANc2wJwoHr7yxAM",
  "key3": "2caGxg5yphafwN2bvHXZsb7hskiwNE6TFzFkMgsXeqMPtK1gYgUHRX47dZy9GEr5jnxynBzbfmeBZ93V9pLvtoUh",
  "key4": "4S3ByqB12oXUUjTWFtPWqQL3YFfsYWLc8xvZ3RW39Hh1qQQ3r2gEfHwvTBrHfHctDjNQXHQ6J53BgSApjKUoUGMH",
  "key5": "3beXS6coAGBiYAJH4z94owEYCnQg6hzbjeQfD5K2YQBu3o9q1sdu1hDj4Z5NvdMCA29f5ECXkLDT7c1romc3Krat",
  "key6": "3Vq8mvU5J7CmgcsG4C8Nc5H59XfY27S2diaJPxPLxPw4ytHM7RvRDfuuBvADMsWPR94wzTJ64uHM8pS6AJpBeteq",
  "key7": "5uxB97aKEzmdSvV5xsSr7b5vXCUSZE1FgFSEGpKcbmJAZ7mB3bdNvzBCmmNb4LsD5TsmPJEZ653BZodetqWqgwkK",
  "key8": "L8zc7mKbKTuRmsmhv1vRKEzN1LXBhXfSjnW9iLJu963cATuJxhN14shVE4LAt9w5z7eXBq1J86ZGXRSiykKZLB5",
  "key9": "4RMak8EQVhBjGYFPjwRpf4UMpKeCJw4jrrGK3uSwgaSv8K2iXFcQSYnQWsi2ssHMoNtkD3zEXmQAm134LxJExsUi",
  "key10": "64ooaTeyHKprUR3ermo39doAgNWp1YQuxXgnhzaPuda3vUe2ifR9rf3ucuVKMBTckjVX7yQbkZWvjXZ77RQDYZH9",
  "key11": "5KTSY2Xh45pMWkhNaLvaYTUyxwTgmomQkarx9b86n3kuXBheLFNtdUbb9ZSrFQ3hhXvVp314SSzmFcmPDu1nckYU",
  "key12": "3WyJLsqxiZwSN9B8oJ34Xz1FtzZbhcwfSyabDdHb3WoCh4v36WzSoWcqP6hiJqZRXMSvDyfPE42rX6qFz7nZbSvX",
  "key13": "4tR1LPidrTyWqqsCnig6qZ4PRnHiH2ZzyCV8wdkBL6wmvBVco2a2AwXWaUnPpn83w6ZCjrbEwbGqySi2xm9psenL",
  "key14": "cDp1HnWqdydgZVWNCFf2TQWJL8sWNHVz9EqqbVq1QaFwTbqdGGUVEMUwYbkPj7LECRHsr22GjBr6DWTR71ajvEg",
  "key15": "4aQXbPMhdf5XGZDGy5tnNRDr997ZugF8zgcjK7AeviHVfLKndBmuMLDa3WmpRBZZKU3p5T3UTeHweMXTRnwXxCmr",
  "key16": "2ArCmDejk1YQmwjWmXLUESmLbneUrRP8Bb6YcZNVR4U1g17DxsLnwL2FbUHFryqX1bHevq286g5WMSgVR5SYpraa",
  "key17": "2vPsvqQeFckknLMx11GAQporc7sWqvCbkzwN4orB9kSYm5Mtk73K4m2SrHVKMbaWQWCTAeeQCHqfXJ8VbJhBj4i2",
  "key18": "5UNka5PQJ5UbeDdskV8ez5TmQhuQnwLTFj2TiwtFhc3TZXv1TVgHz85v6qS4p8nvog39vNNybT9Nd7zpQZ3Apscx",
  "key19": "2dzHPbW8NryyZVNG2Bd74x5AvzcqpMC2j91jGySGiYQYvRdKsmnjRapGaR9z1GZsjX86ktPAi9oYh6urhgufk3BP",
  "key20": "4yVHFgesUjMzqNd5ac7ZZPBnNvTxpmFCY3H9XYrcrCBinoeWXNu19D68faiSXjGiQJeRSx3xYS4unobFrYZD8cH3",
  "key21": "3VCcsDPGPmGCbtcRLFWY5etfed8JyrDLommSZkARcYiF3YUtV4FXDpaaMLbXAsLcdAoTdqDiQCeT6AUzFZq497hD",
  "key22": "b13BuiqLBTMExzb6aCDHSqpwFRSK72hb6DBJLLUHFgzwCHuhCM9BTvf45u4UrCw4E2if9gQMtkudBtV4HNE5Ffc",
  "key23": "4WkK9nE1cEPcoBLVsepfAAQzRwHoCxGCsujZ2XX9fNoBDdSmr5Wxc1C5bt134ZZhhFpEeHrnjdvTNPK3218Pk7iK",
  "key24": "Gwom4Mb9bXTsvXg65JXabpd7LbiEVaZSQXHWYCNyQ5C7ZodJFiwRQbeAGSd7C3wsjeU8D1pR9JKki2a8QQGkuxt",
  "key25": "3bY3WHXLKg4Tw6xxfi9tFK5wT8BKGgCvZPJimtnjS1iBgTyNBoxxL5VvfZTRFQkEdobHn5Z1xvzqiVHyR3dKkJzF",
  "key26": "5Lh8uzZZyLsCqtncgzqAUULdKTXNjwZZ1pngLvtxcM59kUC5Sia8VzRqpnYJhAPpJewus3N1Ab4t4LkG7M2u43Mi",
  "key27": "2DQx6UkqWDqX3gSmbYFZ71h5dPxSeuuu4AAovyqEhFWSmBv7Uf19PUhodqBWQvbnSvUA5ibSHyUNAgoBHjJfziEe",
  "key28": "43h4SrZQnUjrtpjaitDsmDbrZmMJzm1fgXZASvNzkVw9Bho4AAiRvcaEkAH65G4pcYymRop5KnonERin2XrXzXcv",
  "key29": "2z1uQJSJ2v42117NBWQwEtupsLgHeJsFiLhotNNQs8ppHSw2pahfjsKYLu9mCcq4T7euzf2NCCcoJ3ZDhdtCbLmm",
  "key30": "HSzeAVXQBc8kuBPTuY6TEriPvdAKLY7Tsc6E7u8YXBXPwUXmrwzATj83DQftAZdRKdPtyRLiwFCQMSPfYaJnnUC",
  "key31": "4yHc2UYNzL2T5Wr2ZdgEsw8z7aUSTBddGndfmbTyL75anZZtUx97qs26YxG2EC3FqjGH4fdqsLwLmxrEiBgZLeuV",
  "key32": "53GTJwXcSdV3irVx3vpGBo1zMoTy6tyBQBRJtCfaMz88wbDo1rMGjzZ1uxdUwFSeaLY8CirC5bv8W4jaAZfuijbv",
  "key33": "2FEpJnuHJp6xe6o6M7zwp3iTxLeAUpaYqRdrznBu2NegDBbjmofBcdAiZ8xCaXCNiBhsUYyyhAGEkxjuaMkTtqac",
  "key34": "2pRZhVVXFptmz3rHkNdn2BLmFBFsmkYJTxsfodRUmRLgZpaAUUHXVfG6o8o3nBBoPVsWhvNAQMyAPnnfWmnjeFss",
  "key35": "2GJxqn3mQTNDJLkqhNxQrZNeie71Ao6ecDw6kpK4TtvVkXEq223TFdvUndSt5zCrg6LzUiURZi1fNGPrEzTsbxTp",
  "key36": "37iquJFXs6YmDZPNDGoZ4uoeAMfUhd4uuPxrBQEtk2SC3BZyHEF9u8zpBhyA2wStRv7ukMbvB2gr8fYaKVXq3Rp4",
  "key37": "2PSZ1NZNM1Q56PMWHPd8F84D1xJ6zkcD3sc7epnSkHr8sNuB7NqAEYXFvaDgjmshjqJcfNkD3a2h9QAadvvkyXYM",
  "key38": "3PWGRThGz2JNbXvN3hCrWa2aswV9CfJPJQLWDYcWaKSZkp8tr32KAgEMABXDfZdnajeckHv66baAvjAEJY513u3x",
  "key39": "ase417VjswoGVHZCye73CgRsExvP632ZmbDLMeF23tUhFgFbaNQGhBNnRM2TtovqpKabZRVmj6j2S3BDpRp3ETa",
  "key40": "Q3GczEkQXy2PdVXFXHkA6uoUKHQoe6hyPjhn7NiSkSFg46vn3qFrRq5AQ9oVmP6xnEUrtdHmoXsY49cMFnRCVcT",
  "key41": "3sWThBwjhFaGre7Dmp2k36iHHA5hk2mmQA4M6THfXk2DoGzP7tY2jQX8Pa5UdHzrrBip5AHLTPmkMCeUjfs6JJvZ",
  "key42": "3QyzbMyZ25zXnuuPW9bMv95MuyHEwkVjWvKSEVmZoYEJuYEVc3Hy543hL5LYmeyhsd95oivwcMF2pAHvfb7WNhhu",
  "key43": "3S94fa5j8nm3atLhLeHWhNK1Nor9uXJRkXNELqn6hZKGuBrBPNwV6zDsBLvmhGHsBrxmuvw2WdarCnPJRzvAmtdx",
  "key44": "4H3w3YLiaT345qvXZdbFDi424XWEMLfWiEuzDoXF8kaqbh4uhtw6Vcrw9qUTcCq74Ed7uQP4BHxjAnKTnD4D89N4"
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
