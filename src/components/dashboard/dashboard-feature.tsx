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
    "5DJxMrpuz24EDv8WpmrH31mn7FrU1uVYsCgA6MoDQUUJn3c2XZAEMbgZk8QseYqcsWVtDehKuoGrqE7K3oBzjhff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63qNcxz2E211KEX5hLJA6tFTaWZ8AuXtqqwYcdeYXBrt8HuM56LEtJDt8q2jXAUzDtH5QFbmA1iNuTnkKGvwbsD1",
  "key1": "k1thN1xx2gayQGeKWkNPCLNVNnKTsyrKDruMfVxPRocbo9dTzM2VvozCAa6JyZz9U3RjHgX9BmaNn1VpjZdd21r",
  "key2": "3DEzQASm51bkDX4PxBHnsX1qdBRi1BL4K3ZngNuWSk75VjEhXrUPniZVSuhqbyizsrDqpdZ6ZC3z3j4mrSWxPkCY",
  "key3": "21885t9nVRcP9ZahRetpywUjrzRRjX7wYX9SPMESM7Ssm1hJW8ZEjctMveB3KQYVyLQphK1HYVEFPWoyuw7Mcuoh",
  "key4": "3DUvheJArJXmT1EdisR7xcRqSBDZxponYykVEaNDXNV4sC3VHCZ1Bud6LFb24JvLs87tcdwGjMzDkVcqb6vzvTRA",
  "key5": "5LT9mStzop6Yi25fX5jBwH431JwKXULSihS9YsEMTwGCQDDECXk9RDDy7aozDQqapoR29FikUXqTRgqnPhBoDwN",
  "key6": "3Ykd94GLhRGnW1fQTbPmr7vN5TuYyrBQSxdA8g4A1pDnkmjVpef8tXdCmkojkE83fVeH9MATKcCAnEETnNPPqyA4",
  "key7": "2uhLxowdsGnxE2Sxn88DAM1baLYoYvsa3y4SjT2iacj9rAPu3m48CdMHFkjeHm3criwuaTPueGcqB5DJB9kVDk2u",
  "key8": "4Prsbr3okVL4tE3bRiC53Y9XQbhBTNYvyG9E8vap5u4ZKkf9WPPkaQM12u5HC4WFufDhGoJQ9d2Cb61dTCbzmba4",
  "key9": "2575GjUQ3f9mb6Hp7FyocGeUd9XRuN2bnVMBoXh2WCpwonRtF2jDvE4qu6qH1hG3uaabaVBEiZkAi7fjAkP4cJ4r",
  "key10": "47QAghV8uY5tRbtjBHWrZzyzt6gZrgYi7si5u5WFGR3g83YHL6nVHKMU9kVM4ZnnYns61GrTEj9XZXvCurfeiuyp",
  "key11": "5kC2UyWZbWTAKBPo3oi8CkX35XaazxhipTukTN6EV9mH4xAQk8hK7vzhHHYeMuUTYBt9pcEQgTP5wtZzq5LnY95Q",
  "key12": "5GbHZkgHtfHASVwTSwA4eQdQYL3WrRLrbFhQeapRbCHtfyHmZQDGv8ySYTyUTAiqgjJFfGrfaJZHdkdx3TRGqxzK",
  "key13": "58j2xM6P2rwpWGbKFHKBGc1rfBpkW6pET82RPVEEzypFLNAUZ9aTmXvo73QhbHdb38aNSK1i1YfEmRtwDNmByW25",
  "key14": "5sNJgShvp9AStqCPAz9kKmjNLFT1UikyGd9hgE3HRNV9DvkSG2UxMDbTgi3s7JehFDZTihtZNBkz3YJG9zQWNKPK",
  "key15": "45wJVV6fELAa1zVWtV1QWJQS8YVkkK6KdFhNUbjNhoX1gzYWE7efbimSPHKbqHz7U4odyNpy3viq34QSNDgmiye",
  "key16": "5voCQ4MTuGjxv9uFLoWqgNaXZ3jG4ju1XUamctPLtQwZQKh6rFHmcrCe2ELdWi1cmgYSwPg1iW8t3txUMfmTSPVM",
  "key17": "4TNEBvT26u6Ysr9k7yWa9VFkTo7cM7SBTX6kfMbyztw9q9sQv2qZApovxt7VH75jDno7VqUgxkpnf6U9GF8prFUW",
  "key18": "2HTobvgzmEZPSdHTDs8C3x53pjAyA9E6LmuSkZDfD3PUjxfy7qVmG8Ghb2k1CqkNP8H435FT1x88eA2FWoArgAG7",
  "key19": "4w6DGE9YMB7p3BTj6DxaX5UEFw9UadmUUBTPZF8dbPjnNy7k1DFHAA6MrJsb8VBiYVSGBHS4FuNkXFKa1nvxpnQJ",
  "key20": "U5dovchvkboH3q7jdpmA9t9nxmVJRnUz71Np2rbYaN2XjKVEin3SFc8BfBj2E9ZvxgxBPWuD8MWf4JjWwx4M8VP",
  "key21": "4LDwZdtLxj5Y2STEiZ6fr9qRN58WVwUGfLM7gm3GNpBekS3kV21sacugANjEQXDfB5m7tYMBmuX1mNPXGgW9cqxT",
  "key22": "CeCPZSt44dU7NJWP9sySQFJAiGGrc7iSoUH83JNcGHkjk4LSq77ooMC9GzFz1gmX7v3qhkJ9jvdNqxi7E4uVBVu",
  "key23": "5VKtteaYZVr3jBz1cDVJk67gQTi7RddXCHNE3Mkiwq1pjPGMwvV7HfykJLGTgkXSXrvEsZYuf3wSEUiEtVANMQTz",
  "key24": "5Lzb6mh4AQta2W95BiaXaVCrpaNhCsWx4r7HPZLCQVPeuh7ypFkm7e4ao6j4vsFfyzA3p6Y6hU2CHQZ8iYV13yoG",
  "key25": "4DvtDuyqH7orE8EAXuxE1oe3TTq73SPvcmyJ1X6V3s1KJBHXmfZysj2cHreN6gVbzA9vqX7DzHjK5B5WLwaMNQmi",
  "key26": "6EexHvmECo9txkCQmi2qprR4YnkmfbWwWwVqKxE262sXUM3NqBxkZiyxTQSTbBk38ANtK83swf2zav4AqkFEWUa",
  "key27": "5iWLjrwQPrZhwKxVTiFRDPgiPHCyqL6crj1ZmjisPpi1MqdiysXC5rdBELoAmpnZzzJzPBY8RHaGwYjTMzGtJRwP",
  "key28": "4soxrBaMKy27zGESDicoHEEDrwroMuqRh5CzVELASz6fZWUMPeXu4C1R9NkVnxqmnixkX8fba7Jm6eBZQ2Y4d5zt",
  "key29": "nf6ME3MK7AZDRYtKtdQJHF7gdYgHQoSK5f47Lw5p7hEaNEWt6VC8ZTh3YYLDSnv95pRLNbxr1o15AWfF2coYdjJ",
  "key30": "3ku3ZvvS84nk2cNgGtAbR2L3DSxAhYf17uvR9r7TJxkngtSL37xJQsF7vy411wnJwoFKKwyZ2PHLVbE2yXSiZW5c",
  "key31": "2ss5h4j7LgmdghnXBmmLs8cmxkFEScLHK2VGzqFes15hF6X3ziNmvyLtJM2iYKz23sgFG1A9CGorhsUuBmaYEJUu",
  "key32": "2ys3uikxvoY7uYRtktLns6mrk8GTemCPXnWmhADk6rz36QrZ5NTU1YJxytVtDwWUFPLEuoUNCFLKvaP1wqCVWMEG",
  "key33": "31vQEqnLyFoZi6vW3vrrykjJVLxNe1UUw23jwfa4dRXT8gkvDP4RtfeHCkoRvk1nXg4kAsDLfwN4Rt2EidAA7s1t",
  "key34": "3uDYAbZCKWXrh4JPsRXgLgLW41g9vpzhY296HJ767dmnMnNDHfp9xfmGptp48wnr7BmJyLKJAnsZYRu7iHB4L7J",
  "key35": "tSArP68JG44eoGX1NYKVYcrjgjD2WB3rMuS3agq1HDAkR1faQP33uZFvwYJDcxc11EWQN1AnhZaJXTeGSCZYjez",
  "key36": "2J3a9xeojsAq3Zsx8HScM2mfEKD94jrkcQAcaNrMyv2SSRvHCXnsjGtQ4CnYX3ZWQ3zoczHXaEU2nyTv3rfXvmLH",
  "key37": "61SxfzBSNJ3Zyeso5CN1dRW2DCQXSmuFVCLUSCXgtE1hAxQFboNMLigM8u8PfUao6cNQ3Cf3QPcbmVCv76ei4fz6",
  "key38": "2iZoTEH4G9zvDBvJaM3WbEPiHWtUoBgBTCa38CMMMg38uz8A4UDepzfGWoczrrtuaNP7Q3t4pWoy1BXLifBhNK4s",
  "key39": "xAs25jGWVK5ECMGoULu3zvipceEGscLTUcEVHTEGWeU77ULd2WQesjXzj8feHRSDAv8vRFUdiHyEuEEsUYriQ4y",
  "key40": "4fMuVQikDtF6JsyLph6eGw2owCLvVkAXXxidPFZZbiaM2kXsjjUDL5Qg519k8f9VXVd3EGVnjwQN5ds7Vzxu8ujw",
  "key41": "33SjqsSDrFVECJvM4xy9eJh2ri23KXVMGzeeEtmBZ83gCcuY9BhX97fMBUTh9rtod4ssbNJ6WbQYWsyxFmt8BRkH",
  "key42": "2nQ9Ly7umKpi4ATJLhhDTGJ6wFYWDyehFmiVkPh6Nf1X5fzfkyDRJD7zWXnF1QywwM4mTTu9pQswKNMFRGcVS4C7",
  "key43": "kqyUsHSkuD6LPqSSA6hTTCSJrce5P5TbMDLHerd3t9iu2c4BdrZmmGKvNXetVaSrZgfnq18mr5smG9oyPbk9zbn",
  "key44": "3fGuwYcqq4DncmS6SD6zS66yWH8TM5ight93EEgjN9pz3QQR5ZasLEERn2bdsMLjBGuFUsSbJRadtqMCeWNCJteW",
  "key45": "5K7tDjcZLJST1KqnLs4SZTPBDQjzajnGVytXcM9akRrPZgbCF9dWcHfRohM8amqAb7nFgSg39DUFQexbNHirdoW5"
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
