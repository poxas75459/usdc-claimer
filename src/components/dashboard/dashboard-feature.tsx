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
    "5cAtZmwwZqCbz9ssHjoHNWqnJoSvNpQCff9jNKZ5aoVMH1eMDFp4JW9asb4uEnrUKPASnSSuC5GgnsxoGqzAMHXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nozMTawSsb26fuQmA6HsmSLNuspFYTAUKNJp1om2E4cxSQLoCpMQ7vounH1dPJqZYEv3kiJZ3MxNPMeugG7jxqb",
  "key1": "ZsKQsbAepDDX86GhcBvkMrHesgsk88YtrNTHLsbF3mE8TADNBJRmar9t2ZLXB2bct9iFiwjC3PQW6pkpYKmMaYT",
  "key2": "3xMRPeBbny1dvviLdG9GjeyHrhMRUDYn7YoymjtjHa6AASBRSfd5Xj6EEeTLdFMe3vdygYQk39qa4KVoX5ktdQxy",
  "key3": "3VgxBS9gGGybSQXuWgApmFWBrMhPtUHMs82rwUozEjei8YEpVhrVaJxEF7bF2BtTwAbaCJAjsN4BB4PbL37LFzbj",
  "key4": "2H4asMD4EC7nq5fCy7EphogsDsK6D9mjiKWMAk8kCMXc6aBuvtws7kB5PLPbWBm6gSogfr8gkoP9uKdQud6yttV2",
  "key5": "GiwTHooSsqvivFT4d9mvFuhdvQzq1TPmHWF8ZSypF1UGd3nDt5ZovfNVA5wcwkT3PSzjnoGaCQQKwTuR2Z56JNT",
  "key6": "2McPdxc6RJ6BHLVRx6tZnAwA8JC4wa1RofV2wte3uFkhMo1YSp5sVxVHHpwyYUccPCDRy1PNntY7Ntv5br123HtP",
  "key7": "4qpntUF3qXPDyF6s8b9eDDAaFPP7QUTVgqrdompkUdZRPZ8XWwGZPoJuq67vh9m9xbndSTKME1CmThW3ifHWkZ2J",
  "key8": "62fbk6RFt9AiLQLXe3PVqeYe1DkyHb5L7GJYdA7zGUe53CS2bV2SgqvqxxAk5zJr5GbagkSrDuiiUL4FeMWB6Rpe",
  "key9": "3HFZk4dauroHoqwZRS37utnaSffr6pkUEKKgAe1Bo6i7WoufK9XDWKnoiKuqhHskpy1juCywL9nXarVxMswjvFGx",
  "key10": "4wUaCvMkDYXsRiRn7FPmo8DeuFrcWiyHg3nyR48EzYurtjLr8iumpkDbWiBL4GWQKtRTVG7V3SwiZ7qBFnYJrXQ3",
  "key11": "5C4eiSqPTpzGb67Fj6WgPPo4257YwoHUtAdEWgmYoAeRcfdGfcZUjZZgmuJM8RboVeXJLq7mnoyEh57oiAxGh1wj",
  "key12": "5e2jc97vHo7nR5ZM7LzhB1yfFC2a9bsSHP7nYZKxRch6esf1yQGYmxYjhXGPNpPQz5H7GorRytZM9DrV7bT6Z5PY",
  "key13": "4g7sE1Msuk7oZgnR6fhC7QBD9TrypTqboYbfKoGHq9Zrb6Tbkomk8vk3b2YyF5LeydKqfkL7Fat4NrhfqrcPba2R",
  "key14": "2Nk7zB7q26HJiBXJwX5xsnZ5YaGRKyRv1Jv21aKXifyxje8xLtYjceTtDjg9j7URUgBkDTndemXCY1gPKgcDQf7K",
  "key15": "5KufQxFp8LP4q9rPbv1egyZSdyLT5T7MBEkxDW3eNrUUzkWHb6kfZjMfvPokifayKFWKzLBD7ww1NtbXP36bYxVW",
  "key16": "454yTU5eQUrEq9iVWUAjVZ1j973R4FfHvrbxYsKdgn62qBzmdHwjWRNPpFS5UXZ8UbbM8dpnMZA8EWn9vmCY812h",
  "key17": "fUTEC8qJDY5d6wA9bQjC6Tzk6xHt7L2hnLQ4ehTwfsy6Sp9acMMXUom9h8izNm3QCTKBFrsZmdW4yWpGt6i9tAR",
  "key18": "cbKSUXPWT1gXhnTe159QEBKuSdSccXJCj11WM9NoGckpiFhCNHUR8cZW3Qix8d8RyjeyjX19iRLfaKTqkrm3yXL",
  "key19": "5ndBhjpz63NTzH1XoNAu6YgDNtvLZ5NSKu6T6gZAxAYayMUCZrCNk8BPVTLCWDEyrze1zshfZTc8cWozwuB44uQw",
  "key20": "4bRswJkxxSCpmddUaMA7dQMytak3NRKfaCj4xXkTeSndkUP7pt5BhGfLPesso53ZFk1kMa8TCkoEacnmZbevwwR3",
  "key21": "XFv99aNFZ3YmTGLRTCyWQi16kDCcdsLgjFJDYqXKbDiHPgcMPqzBnLPidmppcrYmnbQrRrt7As3ViEzYn9orr4U",
  "key22": "4HbYdE3JyBKnDaV9yrRfWttVdqCXnaxvtz9mo664nAw2mSjHpo9Z6UYrvpy75AAfJEj2Ja92cbntY8zXSPUMu8iS",
  "key23": "eWARFe7NT4SjsRepCCPys55MrzrAEBEJ6tiRDc9wysWzSD7zW3AEdeJtZjUm4pdp9UFmTLFEPG3xzYNr3TNU3bM",
  "key24": "4tpvbLigBGPHEdEALMsX3CLUuaUyTkKCmzHonKtdST22LhfRtX7nnPTUqdbnQVccjtLBo24Jr3mNGTzxFznLHfvg",
  "key25": "36Xny6PjgZzfEDWd76G85qtHgNSz4UA2rDqANQSdbKdHtUmGatfUgk3raAZh7etmrBCYRmsf5EkhiA2XsdkAWVtZ",
  "key26": "4UDX92iFk6733ae3bwMkVDKPTJqkHcUmedytCLMC9zUBcCQnvBk4f4WLAUAA3ws4XSejb3eUKLcYPpUwSaeq33ZU",
  "key27": "3iYXcQjeQqhC1DPtRBFJMSu4RxaRWtY7u7je4r18Gwvkma5HTppQds2RqpRS5pAUqzVcUXMLUWJLDRmW8qKiSKdt",
  "key28": "4Ma51N8AjW54BvzP6WySzi8cyu7i8YYWyDcy2hiMs9ckr279nr4UvHAofNx7qFUcvw2E5J6KeLgq3x1HeWPvGR7u",
  "key29": "4HUpgPLGNR9vVfTja4AqRREde52bU1F8fGMECgKN8fUT7JALjjrccQbBb21LYTy78V7nn4bLbBL8NUu5BdT2vQs1",
  "key30": "41FveB8u58fB2ahsbpqoEPubJMvgYyp9NHxgUEUT2iNuiieugVXDfVEsFT9YYBuvRLQwhtYaD2hdbZTNuBvqzpjg",
  "key31": "4yfyS91w3ime7NxYS485WxjJ6bvpB3HJi2NZKc6MhcAmoZNYjcGRDfebZxuzh6x6w5ApiYUWYhEgpftDJBTxW5AV",
  "key32": "3mDuqaibMsKZVoVcCyfNE33wStUWAbqVrcBhTSiX3PNWQCijmcW7nLF8v32ofVTdKYBTHAGrVrNCQ3yHr2T32XEJ",
  "key33": "Vi4ipJwaurYr74AqW6HpVC253NqLggkNT4163SFMcUEVzdu56BrGytNgFBa6id8x3hKZnbcNETGgmLPEMaUidzG",
  "key34": "3e5KrrgDXDge32ebaCWZYE9cGw3r3Pd6dzoSzFCK19fM9gvqA3kc93vP7p6dqn6M7CiXuyodQzp9p8mzJnLgfoxC",
  "key35": "2uYsWnZbF77Uqo9hZVAtzPeRBpwf3MnyrtL26cZZsdBimzgkaAzHtiNdGZvLNzXxZb3uy7pLUSweRiZzQ9i53aGg",
  "key36": "4SrRUV7ccVTLabLvpoNedhPfuwAMdNzNqse8X1rJht2T8c9YnoHyeX5JVPvaADzCqPTWCRX2mgjAQMk2rdxfdCby",
  "key37": "27pATQD9NaqTdAia1oyrH6HAdY26r3QnusEm7XdniH67AYuD2gapp4ZEfGgpgKKJqdGnkD4JZmGrwGzFNTrcU5ev",
  "key38": "5uEuJpfoJR3R29L98NvZvss32H5cMs5JQbTNMyFnkvMWCPtbDykddHnhfmy6sS1F54HHttvcruUQbY3sW2UH193G",
  "key39": "5kHQfzcfq163pKi2TJdPHnv1jPJbBG7oFwsZ1RawysMNyiEJHQ547Wwqh8mtjgkpVRLhyq7UcCtoZZUK5fMoV6gd"
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
