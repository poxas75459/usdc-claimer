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
    "2usfYCp5q2vBbnA6N9E5m9NMbmgCSSrSQMYm2Vk5Dg3zbsh811DKVNHVXRaAyTixeaeo51Nme8Uwpny8kH6eUQpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h1HY3tRW4DVDxN5g55Sd85k4GKUKmReBtq45KSsQmQH5yyGnFkKAghanMHeEqS6MsLJF6D5A2W8JpYZkBGEeTmc",
  "key1": "4MwpgrVjKe2myPet7LwbQ1j2xDnXmrHdKSRhejSLMPEsJppvEeWK9A1bSPBpv8i9XJsBg5s2P7oUG5oj28hD628p",
  "key2": "2ryz4LyrgrSqaGmmyWGzDB18MfrFYoLZAwcvUGmHZrPigZPrUH4EMXiuTAfgmWtjPboLukVCmbBPSxxdqbUujHQd",
  "key3": "5kjnYjVF7SQ8bn7Scok9xynTTDxsnmbMq6oCuHHEHoXK2zMzegxtQqwzBL7DxuWpezectFdvkiVeeShFok6KZ21X",
  "key4": "5Dxv3Xxmathr1MJ4nqJgzFN296CgChysY1zdZPn2W9nxujPiPEZkXuHfbvu7vWwxwgpFET5nTBxCBHDn6WVirEMK",
  "key5": "2fbT9HRKqshbR1c9afo89gz1c2CWX8Z1mkvYLvRP27V87pdyEtxkHAW5kgQG6tQHqsxtUY9GND33ykjA3hjSh2M4",
  "key6": "55vZL94s5avgHx7iSq5am1R1CQDWVGKuTVUp9KABMF7yrQUT4nFK7NkeHSs177Rd2f3FoLYCHVB6SgcqAi1GpLXG",
  "key7": "3r1UCrQCZktkcunm3goissWmzRjGtZ8VWbWUCs5nZh9kbLgchUWCsozqo5TmPQdfNoo4hKZkMpTTsveLrM3JcQk4",
  "key8": "3TBuXMu1tfgUm5VH6PbeYfCDsGDuJk39GMDNRz3L5REy6TDP8fPy7So7kxj1UAnUMnYCcjyAah18UJCoqfSPpjvW",
  "key9": "5qoPb4T5FiBsGqEHXEeE9P4f7pLKQzqpv2nUJN49JtKvQVo49MNKHiZHuL3ZXQNJbE4uhvFiPCn5Kj1NkBc1X3W5",
  "key10": "4RMzsC8dUY3AddJ8MqjvqC3Gv9PrGkMqSWrfpiTWxxs2x13HFAqMMsS3SZd5vUmFZJWMzhq1F2KyMobzfqXp5sRP",
  "key11": "35hrP8wYSR22UpUCLZPyorfxMvxpzqR2rJj7tK7FxTgUdXTYovoPqRQfR1zuCaCu4Sv9JoPDYQvJucS7BueoEgcK",
  "key12": "2vD2ARKrrNCMDPreBy8i6ZvdHGB4pcwfXCRaVzkM3CNzcvgyUo56Mj6CxNWcNGPhy1b5SA8mW1tAVMiFPtr8Wxzt",
  "key13": "4UG5ak8rEft26AmxSm3WZFKfuikpXXTzsFrFcHZcZMrTdQZYgdvXN8B9EoW3rKuakCZEhYd78tARtJaTSu3ZDenn",
  "key14": "EZ3QhUxdqC7WHxNFszrBchF6mRkXcPRH81n8ipyckXRuUxw8oVdShpbLixstvw3w72oSbKjeyHDA977EbQW2tE4",
  "key15": "3SyomrrdjixEgKJNNmqqpXDjpajdKHbnXAapQf2uC8qmoFGcHsav3xCuiWTF2Dtmyt9ddi2TyrhfvWjvCWJUayXb",
  "key16": "5KNVGboN2G3N7tEtZVWsSzDreafk6DKTi1Ca1qaiDSum2QqzJDXDNU92gz9BtvMDW1JXPvdgBUUzuFy88XgBPxZ3",
  "key17": "2RXR58NS1vX5CiMgBmJCM5rHKSFvdu5NU9MyjCNvrEuy684E81QLoh8RiLXSM2fU1UvorF9FkzPy89TBfKskRSYR",
  "key18": "4z1zU8KLArbp6g1naG81NE4pgmqzd1dTRvB48SfoqvLit8Pj2Fcv9MZDfEtYGtwuHqejA9C5wgXDEVsi82j6RyyG",
  "key19": "JCx6SdJmug2BmFe9V272fPjDX3bTM22gjTBdriKkuv1AtyLcoupRnYswfDsKK3KJLyMLEdJPFdTDDFxPUQKjzh5",
  "key20": "2uLeJXYRSjYzp9KxTubPB7M7x6uZtEgdw1JsxogCFkHksBoWaLpX6JMepX1GaurWwT1GRYMGatXJYQ3WzfsEyet7",
  "key21": "5Npg38PfyFL3cJ5pY5hw3EDhLgtEWgEaZXU4fRHas8rHw4rVtKCFh3Q55MYW98mFzRcWtVqBnv1UmoMuvSYhftJJ",
  "key22": "sKKBbYmm1TcctDoCjemPPbGr4u5pADFrn2vdpcuYpfsVTMueRWSVsV56KYuk8SbHY6stYWY5wnLYWgruAfiBn5G",
  "key23": "3H2AFdUstKXckvohv4g3NGwDdzgacpkL2QBGhX5nPRxFrkgdwMeCS652GWJhejDUvLn8Y8yGbSnZQanfgbV3XksD",
  "key24": "2kNwmCDSaK2enAgD2FZtywMSjuxzeisp43ahcQYthKUuV67HDqVcbjMjrEhuLB4Z4fhKJTmwM4PydAJ4ZbKqMBAB",
  "key25": "5kg6cKiukvpS7tdPySbu8oM8srZNr8ne4dLoUCnFbLP3Fmpb6mK9gB2UgBL3Q7To2JupbYgFcgdNJeSMF2gW7gD5",
  "key26": "3pa6ktMQbx7sjw3kTzjVBivu9d4PP2ZjjXUbPMpoPLb3gUtQiuowivScfiLPGqHsCbS8in9Gb8K2MuCGPnJCouAP",
  "key27": "1Wsoc9ATexr37Pnazx3p9k5cNPz9zGtP5aTqr4HNEBSfUdXEXBJ6w7xVa2gLVVneMswL8yXyR7KHw9hbUiWiQ2z"
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
