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
    "D6EvcDTYUdcx4xWa47r9ydJwKkzB8r3W8ACCmFAEXMrKeFNQ6YU6kyXvv6A74n8V7ve9xt1UvKWM8eEmdbEaNLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjkU8DHYb6H14k5oc6USmua7ZSHoGoaXBp4Rz9Qk4TSD5XVT5Th3uzjXnHfbhXNfbAVqdTs4uMv1XLRadcjNAvY",
  "key1": "2yHM8DMdBXcUSCtJETPFWCGH5AdioMKKJQMxiQTHWQ67x2qSUYdGkSMCvpmnP89cSjL2ASYSAYR8yndruS6Ra2hZ",
  "key2": "5M1n2CaWj1PDdntBYxBQdgggNQGNVUN1Har65pYS2GGAAfrbdxjHcedsYgrPP3dU9pAzF9YReaUXEvWfRpvNFbZA",
  "key3": "55Zef4YaiLMhZaBZ5SKCoJ4RAr6sphdAfS9k81zQMDSarzvBwLTRWWsPBTEK75CRwuFNxKbT6speYPjtKpMX89Qs",
  "key4": "5GMhj1Q1kEfDr4R3GtnLUr8hrm3FtSZuYPgimx6FctgyWJVL2Ex2V3MdHCtjrPVJf5d6wjCgNEiKb46K4HMKFziH",
  "key5": "4mDXKr75skWEzPUkJP7VRN4NHKdMLK1DULExrRynwpqKZjWe67La9jgyGCSnGpsFeRyNowaivXSTnyrgyDt92uts",
  "key6": "4YHdUGRssceFYBHPJEZoJN8YdcmvsgUXwE8UTKFK9psQD99dGSfAKrM5X3uCsvyfooabTRUvb5X1A3Y1LwGc3amE",
  "key7": "x5aYgqyS4KJg5TAMzaEcSN33QDyinzqMsJLhDePmsiBYXf5XC3Q7ko4LLjiXuD8rHuWmyLRSCkruXiLCaJQw5eb",
  "key8": "9K8AyzZsfrZujVoXNYRPbbUTz2sUsWtN6dUgMk4RBuaVfNGRJG3RaKs2gkMYGJh1utULaDSGC2wmywdcJn62mp1",
  "key9": "2RreABaKXkaju2iD17Wdt1jaU5RikjWJmNeZLchJq2ooUieA3pKRv2LFGtYHpfpod6xZbxwJ9jRaMrx86b6uxRej",
  "key10": "3dRkBnoRWdVmsAiNhHyFkuJ3Dd58TnFMYQ5Ua8gAMcSJYvUHBStV8LPnydXbitzVxKjhq5mpRhfamtgQdnTEcYh6",
  "key11": "2Zi7QrRDsUP1Cvwico1Earbx9aU6LyfC81Pq7TcS4LdyHzt5uWRftYdt235k8Ci9d866AQYbkB65MjMp3ahvofAS",
  "key12": "3mtc3tFGbwZ9bQ7NqYLDp1r5E9aCZN6hwBr5U38jAKk55AypSPcdk1Aa6QosSb4m5jspogpaB8HWiEUgVNsLNyn3",
  "key13": "2n5RCLQsrLwy41NPfp3YhtLgzUTWbaZ2SaqLDsYaUYhAPrmK6mVnfGy5Vjmi3YbkGq24e9uw3HjMYpecnntsChHn",
  "key14": "4Kga9mc14f5TKbdAv2CCoFdhKa97xgVioG29FTTujzUnnCrQGe7K7ZXQETsHHxSZd5PkVMPjc1biXCYYQbPqC831",
  "key15": "3TudsarVuwkmgpdbnAHqDwrwPCTMMX7xrEmmxHYQw9LRrQT5ytAGTZLy8zmiFpKKsA91KSaQjCF7GJGjt1bucPZL",
  "key16": "bM4ar8E68khssnBRcnxjAWJxag5i3T6msiMPcnqpERRRgsfgRM8KJzz9vXAfaFS868E9wzyEESLGjr24zjhYdN2",
  "key17": "3FrMxWjC4s1CWd1rHkrm1BjtAbHUTBSqAShiXhf8JNm7HKStYa7hsJYHqfddGzBw4PxRkDRwKF8NtJXzdRK7gBP5",
  "key18": "5nrwFwU9u7yBPANs6UcvkuSE5gJEYyDkPhS1hfUHcsxU9aqvzAA88qsZrnuWBi4iWNxqJRFNWkP6xr9CXTUpfoXS",
  "key19": "61YdxCPVa5KJYExVcvTeG3nedajKSu7mSUDEJzJ6RdYNLzvQoSrer6qWr72SCGoWSiRws168uP3Y8Ut7wABPpSzf",
  "key20": "b8EAxt5zNdCTHZY2mhfFs2frovggSEPY3jaNQnxhTM4bU2ZVk2J5yGy7JJciFqJk9yXhYXq46uvPAyUG2MGngx6",
  "key21": "4cSpLffSbLfVtqbTesgeSKcmYa3MapspyjcV7s1VYBfjGeocPym5NtaQVMJBSEpcAxNHGrUuyzpKHAxuvkcWjDny",
  "key22": "3mSWbsGUvUTcC86gMVKhF2MXaXtV2xAJk3XYEXJcjaEFE6fbjProg8gkC1UXJG2R5NK3tEyY8cGVYWkdh3r7zCqo",
  "key23": "2wUjuwC3Az7wzfwA4XWMAXdARtBbLNuhwUfZDuB6oBKSZ4fpVA4RdSMMccvb1W49M3ASDP69j33Bh2K2bVvcpcur",
  "key24": "39Upd5QaYFa8aVcYQdnct5E68uZtdmV7aKQY49B6CgnJswX2kT8L1urKZBRAjAryeXtE3a2CNrSVq3pyasYUXywK",
  "key25": "2cNXaJy1Wxsv1u7V42NhLLCxov3B1938Y84ZVERUu9STmKuQYT2FurFcupWn4iFXYGPEVoC1yXX659MGnj664Rgr",
  "key26": "ZUPyEuxwcHhehzsPUEVhuCMWuRcZqWuGEbMkMGxMi8jCgKpKQpt4ANCrsj7qqYrQdHL6iYi7cArXT4jG4ZX2xwD",
  "key27": "4DiW9awofpgzhDqfA8YXt8AXUHZozFd77ZpWsCLgqkvmNggS2spBJ7C23TRJ3eHiJEC1pykWFQ5omhPsbqooeWiq",
  "key28": "3usBCf1QTAhncLDNPGGAcKW2TkyUCd7v3Zw11uLKdgwsQY6HqhKeYtVU6Ufq1MGgFJp6Z12ziZYmrcTAFkPouUsC",
  "key29": "4EXkp9ciewYzSKA88uw5YyjcbTPyuHBkiCafMkLuPTc9HEuoMSMfb69ojA43vuDHEZP7WwASaf42q2nSEuktvcMt",
  "key30": "fYNf46jHx49FdhyqPq7Wca3HaR7Sj2NQqigXGioUbZceUQ3cVEnAkbcBBy34tpzFWoN9wux9fxDDZN1w1PRdmVZ",
  "key31": "4Yfs4o2JRmpzkKNs6ozpgDKxNJuusJjEjxrekeg5irxXQKWYD1dDSU7a5tchUoew18Sbd7bheKnii9t9MKarb6Z7",
  "key32": "5bbccx2Y2KwmDnxAYTxzNmmjmEwiEyEjLCZrnAu12mEqNW5vHUSWC7BuaN5tfKSPFke2ZZou8ZYw4jtPNrECD4VU",
  "key33": "61UkPUpae1nxL77TnHT52ALv4cKFzv7JcXQaUSkw8CHiRS2UsLtv8VTKfNZjoFwZSnC3PVmVPbX9A47qxSLqkoqa",
  "key34": "58U7iuniFTHAzcuK6tsLf7BTLLdSLNTTD2DJKjcfuLz67bvbZFbhajeVqusZruTzBGK3q1sYoTFqUFjWk3Xc66Vp",
  "key35": "4JTZ4o4MbFnMnvVpYXn4XUWxw596RDvTVsnfZ5LTQeV62L8pzkhmVrVwciWSjj5MSmDiw73TxgfSY7Tb6vyqCrXP",
  "key36": "SosuRM7Dsh7UVhd5s4MoUpwH7Qj5Rv9ZVpNqQProL3hGGE29oFwvsSdRLTFAiVK2cf81KAp8etUK8LKG2nmJ7pH",
  "key37": "2DDUvn5ZvtdJA7ETx8xKeeweqxmy2m4CMXPJRAuKmJUFP5gagApEHDo1pUm8qGqnsUQqapbaUbgbafgRpoNn6sA4",
  "key38": "5VELdedXtNN2gFyG1fHKA2BWJQhrgJosdxfQPiVfM8kfHfVQcUzemavqJHhhsRweVYdUhpnKWuLofSJgTqq6s7C3",
  "key39": "4KUATeGAfeqmW3gFNAt6eBrz6qbtxc1owCgeVf645FAua6v5gJ4hWncHMAXHBbXvNmCxVAkECrtB2MDbHnjaUa2r",
  "key40": "3G5cq3Kysp9AksRZpuCU2M1aMZKg6oiNbtRKgAR7qAQwdXhJKPDwymfr44RjLgqWhFih2HEub3mqZejhywpaS98j",
  "key41": "JvbrabPeZkQiyFsSAo34hTey43eXURLE9Gb3ZEBp5e9PJv11TG2wjtooM6TK5wRDhQJ6pVKP3jjZF8F12ER9UKK",
  "key42": "642BAfcYvRQqJgt3J44S2ya9g5vuWdy1m8TeDoQ9roTVrfXsNSWr8aWd9TKcBF5VRfr7p6k6twvFETweHyWY6W5K",
  "key43": "471uJRPaeYXbQyCd33eXJPoqN1czdgmzCqrarbH4JnxTM5RovEv92PY9DJTeoBb2XFcNdkhPnQL21qKdHmJhfX1f"
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
