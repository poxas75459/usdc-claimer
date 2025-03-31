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
    "5XiWPXMAaovfcMoXhseM1MgF927CMMANY4HefmBPrMeKyuaVdjENr55HrmD2P9ACwUnHyu7LRLkTCTJaBDKoMoG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z637r1hhCrub9vVj37D6pcVCjKyv4v8kbtemh2N45HsVzpWQUvBgjqeaT2RTeWYq7AwvZxV8p6Pe13jnbdkfpbo",
  "key1": "39aSqWZBiCRahYw9LKzGpmQwvaFRSHrRSVLhkzAoHN6fRBR2FFhjp86KLNqL6KRShtf6SMPUZYasrXf1oG18bMLK",
  "key2": "6a3vYMbSYFPcCsGnYgE7yiCVgPSJU8pCFEKzmBXQVs1SeDqgUPXLjfeaeTD6LqvQQeySCx647EGy8PUBZKj5mab",
  "key3": "2g17GFf8PzP7aCyBW9rayWDErbFkT1prfTwdypS7ViCF2GW2jTHxLmPw2acfwnpuQn3axCdJfuK58GLFU39YzXM",
  "key4": "5wUfprHCDr4STanLg66zW6vAj26rQtTLTLpNVXQFLLFdkoeBRRFfiYee3KWK7hx4y3WUqywrP9cjFwCFqZaqntcG",
  "key5": "FhFAVMjfgG1GJvHdbQvWEZW4DiUPwV9LMx9kyE76wF3JxS3s2sKfay4kcNee8TeCpWrrerR6EqeUTGP67BeWfHo",
  "key6": "65o1Y4nGC2xXJzXeuPafJLuDLXbX7KLkceDXLiqhQqi9rUzvZRyh4hQn6VhGF9TixR1wsQSMUfdDZoJoejt35Jcv",
  "key7": "4SAEhaubzyhpDrqpGtDgYNWM64iK8oAYLYpGjkqiJrFcSGwHsEQuPwirUb55tGWTjf3KADTM6ndbLKgzRmc5BdVh",
  "key8": "4wnUjsezHVvXjp9j4hkisP2d2ZCkGy1LBzmgdcsW4xw9zvxGkSsrgoayPara6NWuw1pF228AJQs2bQd7rgGqRZLM",
  "key9": "g9PudWt8fBQaVpoGx27aT7jYEDTSYMpZyrA8nZobQqjCLHfSdp63AvihJxVAZUCYpfv5PfSJXDPCQdi7Cztf72F",
  "key10": "42zCQujZ1RgcrYKbPA4vjTMoPgXvZKfB6CvyomiuGL557gpuqpqs9q7RAcEDjXJCH8DCnJcXonqQtnVqNZvFMFBv",
  "key11": "5JBmT3DWG6p98uwYr2HA7uRsFBErZFyY5ZsCuJDw6G4cVySCNDE1dLBK1EqoXXYUycwZ81BWqJcfWTb4rHQKJa8s",
  "key12": "2GcvB8hdzJR9qzUusZ9WszhLqNHVVUcY76B8ZKZ29zJ2yvmVicfxwAAyMe1CoompWazcdHKGvpASaqWC3FBi2kox",
  "key13": "4DSCH7e2D2fzDvRhLSUjEtXXG3cRoNJiHSfu99jgf7FtbYh8AWwjdfiC7gfp5wYCeNLWu9WynyETAJ3VWy7tmfc6",
  "key14": "3AyQrWBgWKDCgHj5j5QL6rPrwLSQBqd4F2KUQ4Afs5HDcaejjPqHC7GQLNv5fpswwPBvD6bCeNwyaKYebpy6Cx2Y",
  "key15": "4MUPbVfs64eKpaFaWE9Wy5YccMUCUmm8RccMp8ZpPtMRJscLnPPAegsFB9FYtiNT3k6rm3NLfGkVMuF1A82iEhMi",
  "key16": "66HavqH9zQZR4L8DocDtZ9Jq4iQEh8P23MzPRcQqZLSuwpHkaB6duHb1guL5JkwQZtAac1gB6apkx6qpjVYgvpZF",
  "key17": "d9GGYVenrXCtUEa2pvWG37tduRX71StAe6DDhjussxG7kpsi31men5xRAkk2ubhVckDCowCnmT53DhaYGoZAMLY",
  "key18": "4bKV2YeKEMQ9r8RTiqsDgyuNhiBknxHJRzeGWuAXFQPZCJNaGpBjMMbJRQfm7xh7353qT6cmVZpfBYix2LkkW2Ld",
  "key19": "5FHLfRAYDPC75tkPowZP2M1C4TJ9PkGx2bqdenvaA17mCQqFCmx3VKktU4ud3sKKV1DEZhFMfRU4Qw3pJ6gsGhpN",
  "key20": "RDLmkc6p3wGUvyJjX5gdZo1Pe71GhyTr2DcaY4J5vBjW8BGWj8hpr3RT71J8B1X8UtLkH4reqhz32mAKciau2iM",
  "key21": "2TVg8BbrNRQTSkA6sXrxQ52eUhhdKqxPXLmuujPzBNozdMbPhCMTgaBwT5PArcuHqXaZCwWVVc8puSEiEinzbodm",
  "key22": "7Dw6zeYhUdKZTS3CXZQTwmcnVGSdn5zA5dBEkFbHeix38T8vRb2RguVAoyAtHRL4PYkaAad2PbQx5Dc6pNNbmF9",
  "key23": "4YTWDYzBAH2LEu8jHRTPxB6KhCsaQDWaqFSvSR78Tb6ytxuyzmcoKhbTUb5f7acNDCmFyoXtsoctneG16bcMoY8E",
  "key24": "3Gh5D4eKXftwpJy4AmeBEQ3CNjtFPQwkFaDtjSMNX1DYCayU8im9NMgXR5Znnm4weAKrASpakP5CUhRdwToaaavD",
  "key25": "3uwKeicohDjcmeaZgT4dN5GfuJqWfsBURooN9JG1RgwaMqSEYsmAd14DcM8cmKyaGPdUcgCg6vo4LDm5pAHhVz4R",
  "key26": "msjF3HPe3s8gWd8h5Rt4aW7JnYAyLzevMeapi31aS62QZSX65wrkwed9qM2HmVkoNMVhgVUkHwUg4uk9H7GozwD",
  "key27": "3taSykFS3bwT7WAhzVpiR9WfTmLcVrcR1moSDJhCaBdiB8F2cYsPrkFdAC8PDyUmnfkoC8MnJsJMycN9ASHr6RrA",
  "key28": "2aj8nUNYWAHXoavC3yBYPg48kF8omnMCfcxQPnaPntPktqH6b9ZyaHDzAVGpNAQp8o7L7yqJ7jhABseVwJ88uyec",
  "key29": "3k4gKx8DM8WuMPkefcj6riVMD8yb4YkmACMGvfgyyQY8y7mEZUVZhCMQfZPabBbd5N66sm8fvBzRFjCNXmfwj9ox",
  "key30": "2prw9HuFrBev4cXkyd4ViXihdt7ss2ZSBMGCiPnXxv6rPu3gyvjyeH2Q9JQhuz2m3L8cFJ86TJGPrDBxufDrowsV",
  "key31": "5EaiQhbPRnFqshaqB9pZ8Rf5tdcfzN3L4RvhxJFejpVvqmt4jDi7nXoaAZagQ7uR5Y6YCJU99pVw8ywGm2ofBQKr",
  "key32": "akhLsaDRfnLdJZXhKBhtNsbEpKsrW6nPVe4mzRojma5u24NCsLSyY5oT3eZQXEa35PhLPpX9iwBWPVRdokcT81J",
  "key33": "p2STGxnQ8rz77GpcQ9pGJARPMT18St37Muf1UUGR86p3JL7JyqfoJppEkyq83zrqErTjkEURU87WDcEBaMTc9We",
  "key34": "5DdcdK23tPXNdDgTLizZPjQjJaVfvNvVUTXDJdok8wQRnqVQBDVurafGux1tebwRdgu8gDjWvJsGuVRsfL3Ptvk8",
  "key35": "z8fskG5KtBSrhu1qQPqnBEVd5Lho6PD1G1x5rf8tCuzFtbFZEJypXxrWK4dUCSCWb1QSvNrFhu2Pkog3LzdgGxY",
  "key36": "AjaGz8jERhA2V8bwtvBprogDZz8WvrQTTtbus1j4xmn2C4Egfi5pU3bwrUjuifYSLCAGSxCXD1UVHe42g3qYccY",
  "key37": "J6mwFj3JzpyoRQwtS8LqEx8efUoytBZBywHuJkzRUi8RACbGyHdiKTRtSRn5ipo4A51puQLHVaY7ff74VPXYSeh",
  "key38": "41XVG7q29DZyAuHC7WuJZNxrbaE4R5AcKRdQDhHK9H65RDrfMrF8gdNwMeFjUvPiaw7LVQE6cCauAffamxPsn416",
  "key39": "3PQHheL55uEwieznQSHQo1Ma99UM6jeCR4frMmiykdu4JxkrFobA9UWE4c5j11uDqFiGM6n4tiNVFqBsWSqLXBE6",
  "key40": "21pG76JNPNKgjgifWahYXE9LD9LT8cSVnsmWhjV7gVDE7ckMYkixCVc2WRfDYX1Hcb8aA4FLdooj6He1UrhJqGTF",
  "key41": "3vGZGfxAhve4RG47zwQRpv9qKuLteRNaihAd7AzEReDCGcXzEziZdRwBqMgVDS1GFpNrHw9Qa8bDhthxA5R7HJs9",
  "key42": "91GxzR9JqdTSTECedSnsfKsvpyQkY9hvJJiH9haAqc2HLgVDuRjeohoBrSvhShLY9BksMYvhdzZbu1QzVa1KwhP",
  "key43": "42Gs6jRBSgpvmqFsJW57bHvdP6GgZySVTsEUhhexujTYkjE74bqJcyyxkX1X3ofARTknnhQ3RXdpugm1zdxAi3Pr",
  "key44": "4v6rtd7VBq5eEvAXPQVn3Nu2L8Bqe3Rgtga2Vnyd1kpH3Ks92zsHHJhbZvZkk1myhJ2Wipv2hQoXS4hqG78YZ4me"
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
