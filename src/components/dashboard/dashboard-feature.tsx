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
    "4RydErqTm9V8PoK2EWwB49YnUAuZ4nbBRKPw9WqAmH13PP3aJB156HvcMFfhnWJkXu8f4KaejbqW6oyUyRK6BwUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbFZzZxv3ZxCf4uLmpKcfgSbY4fAwckPMHwfq3EpyCEGcvkFqevcpAo8Y7gGnhrwspsk8wauhRoKjf9WaF5VdtS",
  "key1": "bJQEAbW8SKHM9rpHgyR9FpRXjUYxWgC5F5qXFf7kBaDd49GbJC2X5jVqBBMPV8f9LhrdtsBuF8NfdvEgLifYecM",
  "key2": "5dseAkCWmDcLAfFqAZH878N6YKYVX8SaCpTvq93QCxDBRwLJ3LUTJkSKvwBVZvbZ9UcaVqQeicNfZ9eaEonpaK76",
  "key3": "2Q6bphJi8B3WGKUaKeyeZzeadXgyt7AxTyZdjV9h3zoJBBaCTDUrp2vnrW5KKD1oLD4oKYnY6DfuZzmdMsm7A5y8",
  "key4": "MZrLbfoj6gfy7tmonMLetB6do6vAJWZfzPyPg6XmTPdKLDANm2Wj8oGqcLs8EWXGPCrN3uZa1yGzZHVDUcVXjmv",
  "key5": "54BAC9RpbvsZZDoTAjwasLiiKE5ZzvCmaHD2adXtoirahi9gRboNp1PRB53CpHgpWjurCEs5QaksUrorG1YPe2Km",
  "key6": "4t6fPpMkAymMQoQ1Sb2JE59A2RKt8ArbF5ACPqDYn3d8fisxQ8sCooeRzgJ6B5g8DwNr5RQD7KWMCBTSFaYCDtVj",
  "key7": "2CGqTi9fSVToK7a4bSmazzd1wGqmJ1xiiZuC8t2UG2B2uyizNXzTpNjnc94FWf74PewFwWZ4VbFMQqRQXzsm4zXA",
  "key8": "57SWsuamvY4wMpKx9cFxCSHsQAVaB49pYWr4rz3Mc1ehcRJhBzj2JPbNGmzteZLtNdJnm8RK1q49K7sMq9UMJZN7",
  "key9": "2CjUbUBKskQfckMETaMhVMCV1VdYmhkvNAAGMPR4UhAfVhp5dBAaEBJVJ8JBe8d3YVcwYT1wCzL3LJdZK2EZoXeA",
  "key10": "2gYjBcSYKEvk8LLyfVaMbjuNqNBGGWwfPNFYEmi4ENxq6ZNKkD8x4g8cJ7BvtUgigesShnj9GqMvCLuaj69qnqZd",
  "key11": "3Ez1mYW3pJFDW4wEp8eNEtMLm2KyiswMWrDKCYqmvgo974CUAaUQ6pfDzs7YFPLgNnGjTQ9FaP5CW8gjFTfMwaQU",
  "key12": "5vztCtgYEJMcZceLBoJZw9miBMfuGMtGW498tBr1sbxmUNHehVAjVEV3QsLTamopiUqqJVUWbKTAUoRjXXdLfQHn",
  "key13": "5N9eHFimFNgxZBusaPDDoLAUpcmGyQ2YuHyQbGexx7XKermkPKvVvaReN8VzVNk13u4qkmyw2cJMtfkUMZngyRUF",
  "key14": "2dZuxRrBYwvmSFPnoEMsZEUXdyd4zQDSSvGoKjoXfsE7s3z4iMXQjhpmTqgP5RnHWbPHVFLq7Wtfs1ZkM2GkfC2n",
  "key15": "3JNeBZugPXhs9Sbi4Wi7tLxyn8gwFJY9xp9m3cfFg5iLqcsBU5Bt2LJiuiaE3EzEVpjNXzQzQQYaFQt4C5CGGmg9",
  "key16": "662Px2WzXe5uxpB43LzKfyWn84eLxNAWDwP9xsePP3dzcECZP5fKRX6KhZXNaBPX8huZonB4MeTHh1dAuiRMNvEE",
  "key17": "5mHXuLEWySjyEJrCPBL4BJSBLYkUe2DzDW8kpwsjgfJvZ9AwoacopjFguVMyUE1ic56d2aXs1zqsVoAt8bRKWpBq",
  "key18": "3cTBno6nPATbyNhZQs94bfyVYJMbso3b7AkhvKzzNwAFY8QN4LLYkVpJxvZZtBGWoTVYpUEix25GaPr2JfRpxqDL",
  "key19": "25sj9G3Rp3XytHLZgzngowAiQoJerC1U9gunqXVSm6z1vCwgvQCzY1h3RnXGY6tMpGL5sgFVRGAYauQyWKKNNx7g",
  "key20": "2ZDHt61eS6FNGhmm7R5fNdRpTVxnAKBN7oR7xgVJUxK7Quw7nhTFxeWCi1TxanRKifVUoZFvdc3phBP1Rx2mNpDh",
  "key21": "2ZvCp9bVPz4YqaSTEdpG6ePTnMcHAC95vHj862nH1E2oypdhmZsPxg45tqmp4R9ijGFaBibyMp6fSrYeDVBddvor",
  "key22": "3dL8wBNA5FKS8ksnpk5FbXYveSPz3HCPjvFkbMph6NbtD12gSVu67yDcXNgD1XMCCt2wVizu1GypWr4XKBqn4TYY",
  "key23": "bCjgA8FeYNFbr1r29fLcVpZAcFnHEkYw5G7ZFz5dBoMdC8YNuH2PCyiddbhw8k8J8qqoaCQNUXSCs92r9GgKhLU",
  "key24": "52m2CqcEFpdDgdPW5vussvTr2L2gS42LectmFkDf6od69YyxoktgvH4Lft9SGcQmEAdTaxW1Xbmt6o6c24Wr1Vmd"
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
