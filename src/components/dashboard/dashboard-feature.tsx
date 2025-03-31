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
    "2WsoqY8MeMA6FR577TFmiLEVV6dwzpmMipan6iJ8BbLR77cNk5tpUX8UkEotNnmkhh39hD3mttbnxDcqWy6U7TwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p4rHymf9FDg22JRiox1rzHUCNwZAULdho1Uxd7PvEqDZjV7s3QHUzawDLWsfpqg9b57DgJmDCTewHsRRTBbv2bf",
  "key1": "rMNYYBtopGvhNQeH1PaQKseJ5sjfgfw1mLdrMRwwLVnrY8Zhej3GyC1wRQNq5BAUSHTZRvgbSvBZu5gfzcMdvCT",
  "key2": "3sS4JwcYKY5hUw9G3Cg4LNs8kXP8Cwbuwo9C8yQMirAdiEeNx3GB5UZt7f8kC41DhKZVv4jz6EgbNN7icMrjWnT1",
  "key3": "2QRAhtv3WQzXKdEKmYR3PqwLCtBi4ztV5Aae7yzRzP5UVkWYP64DCRsSkYLU82yK1oa5zPJvzSSMc9osRVuXeWKk",
  "key4": "4AFPPuv1gBduDvAvUz7xaPcAZrqkr8gi63yJNVknxCjantSu9qEupRaQcT1ZfwXdyw3uAQgoFucaDQkNZP2Szjo3",
  "key5": "3pKPeMtGfM4neMuRTEEGqUyqr9FKnLBrwrLC2u7afiX3SpzBPbX3vYZvcbcPmyBXFyqiBHam5ggr3ntrMmdYQbsx",
  "key6": "2JePehD4Xv1U2pTiSGQhJs4GAUFEwcARpUfaLQhiAt6YV9ghRqvSzVBL2gDUmRyY6H86yx4ubueZYCm1y8qrNJda",
  "key7": "63kAnQQJRwo5TZ4aweoRionghTmX3NwJcYfYTwcAoS5L4btumVWAFnX8StPGD1dR8MY6pRmDoHJN166Fv6zpfEDg",
  "key8": "UYJzDgXLMULWSuftZ188P8NQJqtvbKywjxhCnV6mq5SQq6Ega7EE68jpABJzqhkJo5wEGTV21ypJeoQodGj6zVX",
  "key9": "cMCGvwekYCvWYa856CsDuNM6Pfj6HxWf2EhhGBtRTUTjfK2crVpwcYNRQShwevBAHnjE2XzGVCd6wYUXqnRdNTL",
  "key10": "mi97qU5bY82UhmvrchwfN6XXhDjnwy8szpSe5KbUEug87QM2jK3eVRRsBx42fZjDYk58hr58QXYNfyX5uZHwbAe",
  "key11": "GzWW8UUTAWEhxGhk2KZr5NNcxTp5kaxYuMb6FWjmt8XJvj6beaqfJLUn3wNgHTk3kd8p9YKTk9MuEb2z2hcNmpw",
  "key12": "66f7XdEsDmVyEKdt7XyPPxxabjLhDtNQVPqm91JkMDakhCqsmupCcp2YDw1cgSA8UTXcExugtawJS3CQWWEXFsPo",
  "key13": "2qBh4w5FjmHn4HzyD1vYsuQzzNj1pMELe4QyZQxWuCDy3swNw9H4czn9pu6KKbmRMLeiyDYRNhpiQzAQSvVKLLvR",
  "key14": "4f1d77f544Puumw3dRHk8yLw7wzefG1kpbxshj1nMsQC7ws1mSdqbZFbxK3zdHxTXQ3ciQspspyWrGZexaf8e4RL",
  "key15": "2Q58bMRx6QUXyASiVkJGef2m8m7Mwz5ArdVwJ5ewuLLWoppnCf7ZqtzJ2xsf2Snp2E4CFrZEaAXi4iaFNZRmDLvY",
  "key16": "2zsPkvWzNpK2fJGrKXcrEpdzoAmfgf1K4GwZ4UyuTadAa8qKB6rJLKgkjbdBWPG954zLcvL73gKTwBGN3oRFEuaH",
  "key17": "2fctx5Reiggv8hawzy3hFf4RbvmzNn12zvrV8AM14rWeEeWhR4VboxUko8qBpFUHse7x5pH9zJ9iaWaNavBVXmaj",
  "key18": "51n26XRTi7tPyUMrZpXWiUf73U8Tb35EJvarxPjMqUrb8wSe8xByLUBeUqsGj8KRQg9rD3WrBgxjM4GGsD2gVN8T",
  "key19": "2scEv6xnGB9NcWyHP1STppnS9NAUdiapSKqoim3DzVP5nPmGz2PrmoTQ2AetRp7csQmFCQ1dbesrMvcVpWGPN2rh",
  "key20": "66kT5uy5Cb72QAC32CcxEFzowJ9jTtGqPFcDrfE72sVyZRc3EXaLA1jVSDFRrK8BryFTaNfXhPujxmBNm815Vzen",
  "key21": "2rFWca2R94rALnLirHdunBL2gA3Z4xTcVPpH6uFn6M1BsZnhPsxFbFD32nKCQvcgcWEtHZLCVCrJyjwqMV8NYcrW",
  "key22": "BtZjpayJM5V1GjN8uEeL2yA9cka65VnjoBLjotbML3RPiipYojgta9xFgmshh5Dcxkj1cFpzjtpSYnF7S6hFYMo",
  "key23": "627nTzLs34qsnLMfN17Gkgn2oz36PrdqCNpJhBdcSRP4fYStDpxMCSQZHTcAjQKGDgkvf6Yb3uSfQqRTNZmsvf6M",
  "key24": "3Ujo8zxFhjiFUfoETGVqHPyTyEVtDYsHVqGCuhULAM6DDF75k2GChX59fvyVFeyKrqXaXYNcqYvefR7CxLwxV8ma",
  "key25": "5Stjk4Ae9V4YEaw3ek5E1yAign4j5EnaQkmMvdPmhg7WDwVTY9wPPV9kXkkNamJDftnKJRnQxsgGpbJXmxuLxLSU",
  "key26": "3uHAECVddnMRmwizPYaXcmZvnkgpW3X8bbBL5hDDAk8Sjs8M59Rhcufjre46dsmtAaWUBSPCKvVb4VyuGtnTSVLf",
  "key27": "5QeXzidsegJ6jRUhgeXRE3Tr7AyHa6ETWYpBLLm9BN1PP4zPqZ1tASwdxkjUqp8VNNftJo2e2XTv8X86Ckc2ifx9",
  "key28": "28TmDVR35Bib8K4QZyjHnQaVyzvB55HMwe7SsrLas5D5zsakQhWmYPWmDjSa628PVuYnEPqZKCg3ApCE2XyAeByQ"
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
