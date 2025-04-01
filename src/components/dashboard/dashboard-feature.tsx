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
    "45HpqdN8fiL5iQmks2pQ1uqjB8DthpWAYuqsy5rPP3hFpxqVaFS4tWjMy3FDJXuDDgGRzBX4739oV5ZKfCExXqeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G61dFVkNC4RnmAxQRNonVYTeCnhcpt8v3VmhB7T8yqgdFEU11QjfFEqajWyB1URxSaCEbJjsU9vvvvtw3ybv9on",
  "key1": "617yw3EAZ2XCAEy7p86pZ7N5fSd57hQyHFmBs9Bt2BRWEzhGvJeRZhzMeKoXku6M2JwgU5trdoN7XhyQxNBQmErZ",
  "key2": "2V7Pi9G1ksqZdRfyB8oQGLTURewi3X8MkcqFP5SU5Dcrj6gzVrmxzUb6mGJDHPG1vynj7zAXVLc5Kiquc4GKbPyL",
  "key3": "3ActV2stJAy1LTC4hPRbxgnjFz1RThWd1pz6y269a8PSfPSjP9HYB8xhDiTgUpwYjUF27qHVpnj7M67ccPqnmfkC",
  "key4": "5KsgksTYq8RNuPXkYqNVyAfLAbHwH8nZXjt2QKNVUCZa4mRC1A3Tsb2aKocYg7SawGvAxPBLJXjnLqzu5zdgaBpz",
  "key5": "4E7gNhhXQdJqmBqt6zJ6Ekziwe59LmNB6yy42gVXgQcxbMYM17FB7doehj1UAotkYnPjXt5wViYu7H11hRXvRKHG",
  "key6": "5QdtxFq5cFq51qudD8xvcJ8n2guQAgc2RjxP7Crmp46YjT8KLa8MWvmNPJD55tz2wgbQAx9ETouVB889tSh5juTR",
  "key7": "kSNiicQJixuinQhZmEyHuirCy1xnX74seMVyNvbuNDtRdGtvvV1hqjcV1JP2HZVB3PPs1WpNMvFZ27mSWtyRHhy",
  "key8": "374cpqnTPv8Cx5WjgVXvc282JRDuagSS5Uifxs5pxr79xrSbeEBzY7wwgVQwHzTca3FVwQmrUwPmw3reGGmHfS5m",
  "key9": "4Lh4tJ2UrRzwqMdGywH5KYKi7XR3CqYB4CqLVbFPkTbCLVY8oyW1vkLVDi8xTPa9nxeD5c9ddaZpyR2Bmznku1Ms",
  "key10": "62ccF9pMrxVz3owzWj4prHoEwf64ZexkQ73VfsmWNturoimVZVYk2DDAAWaxLJiTMohRbi38gL89L1CsVNMtDbPK",
  "key11": "4hcqQ21DJua2aArDwMmMd9FiUg7LmVekkEo4JFgXuS8UWnobChkymCGrQgqmjG4bProDFBMmCika6XJScZYVohvp",
  "key12": "2X45xZ6J4EWBzEXXY1w2wX11VTwSFgAQSUPwaYUfHhxK5pc53Zg16ESPCTNrG8GCTo681ZKsz2XimPp7uv6TLcYp",
  "key13": "29yqwdiWCfuCfQa7LNJcwRGChw3UnbYUcz56xdRA87chEpe9iC4PvXQc9vKyseUuPW4RkiFkEt1MVNZBMeck4wjs",
  "key14": "5hAXTZY8QjNFjjcG5MvQVYJMgZ4ZZxvgxvxxxfyySrkZAk82WNc3fYXna3CqXz3jLqBN8QGuvTuqTHFaZE7DLHHj",
  "key15": "y9YhjhSxUCHY16woV59kWNy4YtQSKnP396x6d1T8eBvDnZUrCNW57hqiNC173yrTw6ahfotqozbB6hefH8vKh2e",
  "key16": "5MTojX4WDJyY9d4cPPMFDXSGfBZwhgExQ1PzBiDuAQNB7cNKQskvrMi63b7N3aZ8UBqzajEcBjNrkYe6f5wsTLU7",
  "key17": "43G5KmGYeSNDBZqDXgvTAwnjGY7qCGe6xQXrSYG2x9YSqsryZnfLgUHLLzTEEVGtkbwjmJpPeF4bqA6UCHgodYue",
  "key18": "66e4ST8Xq3jsoFokAp8fG6ENG7dh67LVEvJ8LZn6W4zp682ufpcf2iiqgdZwvVrW5xcNK8FyG9fc385FsfvKX9a4",
  "key19": "3PDGVVUHXL8NEsp1vmwoQMuFNUtcMLNovVV9XcVQRbSF4B7pTUp2Xku2x9j2DMhzb5tHUB2wPvL4Tyt6BUMJNvZr",
  "key20": "5d3idUxTj3gLMgFbFpmfZKidsD73SXhSPxdyPGfYj92pnQ4wjG3H5CNRaZu4gxo381pFXJgnrfGucPHrmg1QA3qv",
  "key21": "2GqeAfa2EB1WPwrx2K1baMhvwdLDcqfnDqKFvHTz915niTCayw2bvpYRqWNjJD4nECVH9Yjn8jEp4tMJz6jhZuaJ",
  "key22": "3fZP697fhJfL4V8Lvf4oujEnU8TEtLZ66RWfwtNHryKVuPrzqANpPVbJFLGetJSfK9VrFLwiUC7cuCWEkCk99YHd",
  "key23": "iV4Lb2smJgEw7wszb3YQ69SbkC32ovNDyu7HsFNXTHvHbutFPY19eQLsHpZKcKhWUmUPBCbuyzPmqNbXeTg2WWZ",
  "key24": "5ZrNy4Yw8WQZ93NVn61kTsKRAuy1H56svRHifwVxqvGHs6syhu7pn1U8pYSk8NyC3w3c6nczHjmRsjW2DQbgNcTQ",
  "key25": "4vjKZkvsLxN2aCcKgtArrVutKDPTdeE2SS9sPFescVoBLwNjzFZDUG3fZ4HGJ5gT92gvgb13Q4CJoAxsWpX5CiUK",
  "key26": "26mKqioVtYhrh4uMoK8pJqiTpRoDwvfaYyCT6YznD8Qkgt2fL9TykT6jfUkHiu8LaKzx3TQ7h6zUo9v7uWrzVpe1",
  "key27": "4gPqhrKRhrfYkJpzJSEabJF1y96yEe7UAqBJP3a7z9QzzRzPQVqwMyV83rvy564vR5Y2uh41FFmF9ihvqSYAbCHu",
  "key28": "5R5WPM3qM89Ugr9bQqJDRFwDKZHWDvCfcLex7LPkasqXE3VGveySBLrJoZJbsw1Yy48JMt86uUZBzC8FG9LnRpAZ",
  "key29": "2rXtmHpMWin3hA8gGPb8wS1UWwL1hzGo5UWdyQKkSfbF2eYkJr3e5urYXfzkpUEUwhXYxqRRXg8nPurYRZVeiKMC",
  "key30": "etHn2SRLREnWtpvWKXQoLA4net2wSJMfj3ETW7cuRjT8PEVyTBQvrSHziMnaLrHPhjeEzcPCT7BS5mWemLSHZYA",
  "key31": "FgSazCHHFWmSwkoU5kyMBtDbFNtmvmFPreYKebxkAavNyhaFDo3GqCnxoGzAfF4VNQ5qwxnzdwopFmxM9bxcQcU",
  "key32": "2KeJTSqfF1R9u6687DL5d6vqN4ocotkmZQHoBXVMqTsq9N8zpgLeuTSRCARRxxFw37fApBMyVeA57v1aWz7XA2H9",
  "key33": "2AjL1uHbwEnNbSZWgdt6WMifd32s5KJcFxGqWndj2uRHk4DNhvGnA3CLjonJqjT18DCUS3bzEwRaVxFpiEobkmyA",
  "key34": "5EKYSF9d18N1SARDXYcc7JaXNXh8eHjafewprKGzih9MWadZvM7PCRRptNMAE2cwiqwQZHVVxGdc1eWVkzviMMHj",
  "key35": "4eoJKGvHx6nq6cpqAvMMvGob1WpDdfcsCoMyvcU1PvbL9oWRAuifuMxUzVjxEojyv1NuPtncv3D7yAqqDmgsQX29",
  "key36": "4NKWYrcygccySnWc1Wg7Sk5MyjXTkGE2qtvNh5Ca6RYoHu9vbs2Uufp9UhUTqwscSwNGh428ZJepxUCs9cPMWsHG",
  "key37": "5J7J3SS8yXdiD1gw86QdhKuJDsNTPxaVYSkitPTo7Jf1mDo225FzkZeeZi4LtBW84DLu136TmqKrLq1hkTcwuNk2",
  "key38": "3VKYx1JuCx14C5JvSjzYbMrthDtjpADUTfJVcLBM5dzpWsHWuCicMTgX6hgvULeMAmaCmSAEma5P5GY9nWLyRXmn",
  "key39": "26vELLAfrNxZAEEfwGuUDh963zmpVesb3MAQGDiDaQKoiCReLDuyC3aJCXRLFoA34ZLVAVNynKA8kK1Dnjhsp4Pj",
  "key40": "zLa676Vre4ySz3xeUww76288L7bJFpwYcActz7xx7WheGWXtbM1zAdKytr6KiwXJLKyxByo2XMQDU2n36TTWW3c",
  "key41": "5KRtHYy9UHqYsTBNtd5vCeqRDThn7mvoH4cg7j3qHAT9MtGiTkoMjaAQMgWBHDiqnMTvXQpRShputNivTqqgYjmC",
  "key42": "3eeC6hgWWe8Jd1XT2P13uryycf2mF5UqnKVBPaVHwiB5Ctesgi9jHrHNgn5oABs9A1yA1rHovxhJvhp1vtDeTqyY",
  "key43": "2wFmxJZkDz1nei7gwex2B9XubEKJK4vcPxinJ31EuRG5wwzQnpsqY4BdDBLmn1Sp2N1EBa7ujfhmsq9U5wWHCZmq"
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
