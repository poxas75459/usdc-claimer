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
    "MsiNvt9fJXrCF5DemjNRyzQUZCJuFrA8WRZEhHEaQbg9niESJzgUs63KSrvhnGqmyUrVaW89Ek5q4CJYt9kBa1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67KgxezKjr46myPCxiHFBGumHhH6VowKyEgPUsbWARFW8acTmS8MigZjVDiEKnhafHh4YvLRkeaM1WtqqvSjzQxA",
  "key1": "RBnaX7PdZW1uxo3fDW4kCMwpbuD4HGPPDaVVBDFengEGj1fEohSAQDBSDh86tUL55oKaiDKwN4cdnTzjG2S4pBG",
  "key2": "2otZz6VdJ33uzuPJvdXCxqm2ibQt6Wzi9tscw2KYV5UxtMxCsRaTVzZZg3vVBdJyzWLLDpnAfS5myfB9tonhNZ8W",
  "key3": "5hdgQ8RZd59ZG7ub8mB64GyDzTR9jXQaG1Mpq47r4HTHZwp9bL5iAEgwqQAYzYVLZj4Wa5FEedNGG7ReZaBSBgKG",
  "key4": "3wJFDTtmNY3srFbXPpWkbGekEbwPtHVi7btKo6fMiPgfJXxo5cq5326nTh592JEsKqWtud6yDNToubNwBWrTkrne",
  "key5": "4h5ZpfaCivcm96WREDbU81LmFoNBzcVpvovJkUn2dR8HCjYmLDXbjgSmx7ELzUiwkJF9i27UWSuw1bzpzkXooJXd",
  "key6": "3rXthT2Bm2vZbr5LCBxJhu44b1Z3vp3wANecbtRYWA53MmMXhBXkCp7pqjNVY4SooCNq2FxSX1sPzc1hDkdtayKy",
  "key7": "39QgpLfMZdQodn9stvoC7qvaM3JRq5vur7hJGa3oEoFVZuNmQVAjEMMUNgQyT3P41Bm7Ekp34amADkVNRrPyKz5Z",
  "key8": "bi3mG28vWd7pKMJbBbeqLVHenaqUkuqwSWhFaMhXBPxFgfPAD7Dt4C7LeUN1Fou4DKcbLYyeg5PiVRxfm4Hy79t",
  "key9": "5KDB2SAHZtDqNAHjKNSQXdWn4q5xjN64zXg3sXyaA3K6hXuhZUSo4rzhjiPSX6tHnZXehtYP86VPcnRqyeBZTFsq",
  "key10": "imSNiDMgZsiZphVnoqKwTTqdemNJa5qtGRroV4Et1Cn4xb9veirUaymJQijBaJPh45RCWM8qNeyNEhcGFZJn7uw",
  "key11": "4zv8uUWY4iZd9eFA1RxXNWQqpAyKDi7otXB6KV8xqF3sL75sdQ2Emgd6H42PwQeassfFi3pWrKe3MQAgGJHYZBFw",
  "key12": "TZmBoqsR9m1sEUTDpfwjtjTrWEeCVR3q4HQNjQkBQdocWfVTji2cLwTNbeiLxbDnVrc9sv3Eg5pfRobTNNdVhXa",
  "key13": "4VwWm7SZgo4Z7P9tNwSfAAHTCtVficwVMEby3TJVjwEmuSRqweJ5tMssJhKt9v95YQDpe5ez7UUrgthugmrPPPWJ",
  "key14": "4vVtQrueSE2HhyRwjUThiLxTaUw7noyTyQ6nB1FEcAGUkxAx9APTdgAg2vGyEaLE779PTgncSp9WaVEea1C8K685",
  "key15": "HHMudw6oF55uTnfzxsoYXZNVjJwEQq4TjnLkE5mfnwNwTPC1TdWidRNt86SuPjKqbzSTjZDW6tDS5CL8qaB7V4M",
  "key16": "4kgHHuNQbJxm6qNjmWQYeq7TSoof4Srka8maj5NifzJ9vBApgihT1UDqMBXDK2yvkPyukfdBKUdCE9FXS6XREw1F",
  "key17": "3MCoJBKnUV6R4Nm86Zj6dKpxfbDDHhHVHFSDtc1arQV42ydDkyW778J48MkBRR5GrPwdNyoDurSMx9xx9bux1e7X",
  "key18": "3cNevdTBRhR5CnpbZkHLXY7zeukoPWMy98xiNnHw1rnKshoABeDeJqksdDMMPm2YsU4rDEMpoxiKutFJLJwedsk7",
  "key19": "ji3YsEZRzdEbA5vpmmTXCxj9fjyesDLDmiDq8DWtowVQF2LFBdE7rHWUZv1tYkTHAKzLTEHeWLmkefnrs1xHevQ",
  "key20": "4jLSvJEbtY1RtnpCMxM5kXf7pFwfTXK1V1GQTRZthGHaDQCXZs3tWTQfRGwqAev4DaxsXLjmgGokZZbxhLx6DCmb",
  "key21": "uM16cmxhnWp2qsjkZ4RWChsUNhVDmVmzrGca1ZdSE2B4kuUkU6YQn2Y2WieSFWssYKkwAuxf3EArqZhsMSCEjGh",
  "key22": "3SNSdAVVBk7pQfXmSNfUckYC7R2He1XuEJb1BiGSZvTJV4SKCQr9zgufMLWA6KmeFxsRu2CphVWPrvgtFsRmy841",
  "key23": "FiTo1pef1Sa13rJiFPEpSiK6nM3NHNggq3M8MjZEbjHCTU1C99VTAWeSitJuTRHDmMKtrvuejNfxyJLpBVhq1KM",
  "key24": "2kSLVtfeLbFDADsFESbvWSAGr7jpmLD3Ftx2CKLMqwLJHjYSpyYqdrBaQDinxskxPJTEZ1aj1GxGdtZ4knBz3gee",
  "key25": "2JsKz6o8VE2Dz7jofbStBQ5byrZ7VnkPSFGPib8adtsEtSZEvzez6PYbto7oxFMtNmnJUMUtoDAU8kQM6Zqj1ea",
  "key26": "2nnNmGttAWrG9FGUJNZcCYPGGHETUiKVqRReFoMAVDms6AYKoRuuiunY94SLH7UKftGrD9xyLbr5W3VBh8rvdzCD",
  "key27": "4eDgxqMB1mdBspnKk6CnDWLPxVNYnLYYnRX62eGy2x4o3FHu8XtPLzDkrigvLJWyQW8ndK4zfL4R9KTHS6YT9PmZ",
  "key28": "4gxzTJbbFduSLqSFpRtRmHCrVQMPsK7FTqRjNPkrNXSg77igxA6ReUaLLhkZVHov9vazKLD7i8QQPECKK96Kv4MS",
  "key29": "55hwL6ccQhU1gYHZz1NoUWZZy4eRbE3kNMR3jvP3YrLbcy6BfVJXCXXqyiy2ZCYuYTGtaYfHyZthk7a4ASm9vkjj",
  "key30": "2nJrBVD7m3sMwMj53Hiyhwrp3143vjyguqF1MkRbVTUcwrSxtsGvnWzmihosYj8xTroFRuXepiZd8hBW2m5b7TZg",
  "key31": "4nM1UVS3GKD5wD7RsQNXrCvnKzFumNE6XoZYR4i6LDFAZ3k6GQvYTNPdMnhLSv4DwZHKNza1Wm6f8E99gQMMZjT",
  "key32": "4ryVXwjyw9NYtdfRdYFwZ1btXjqNJyhk1X2rpgRLNYMxuNkamGGQV4KNyD11n3AqUaLiVY2cXkS1YEUran5w6VXR",
  "key33": "3UQksxZQSz8giAFXbBwfaNHicGF1s2vzBXzzmTeDEuebGRvoymf6utviSmw719ZyBm5eei5daS4r4CjETvoSxZb5",
  "key34": "2qvWkJqAahkjwTaG7ZgPRm8x6QeqCiKg544rhqfWnp7Hdpfq2okFVfTLKhq5Hb8xbxZL2bgC9Y97QXWCJ4f1W9y6",
  "key35": "2RLeBaLkh1KV55gcHSFMC6w9ahjvtstntS7Fve8asoGVz2a1pfUbuQFTyHfaCLAhSxkcyn2LZTqJo1HLngj4dNZP",
  "key36": "3dtiErtFy6859B15z5JGtMtQPt3g6fkSFyceAVcgjNRgzaVTCRk88joXscNjU9g9wVNVSx9YJo8KARb2QnkvzwcF",
  "key37": "28umx2FHeBM795QTjmLHZAfPL1tNW2TSoXZLvJPsVAWLqoNLxWb2Y4jSshpUps36NDvX8PWAw7LhWiMVuyxo1HNX"
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
