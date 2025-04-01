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
    "61e8PbDoo276e1YQdkFF75CKj3c1D3zr2PjkquGFqBKNtUNLZxVZgJCoqEUY6P7a4w1MGaJXgsWV4StE8KNT7Ajm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3792ssZRXbLJdXo4uA8K41jBafBanGsapgGDLT7hRUEnw5baNSahhoqx5f3nYvijK9GcS2x3yg39tc2VbLbiakeB",
  "key1": "dEwZ3WrkM1eD9bQvN13A62Mpkz3g3A1oGpYu1kBjbpvA1JVXHjr1tN5Yj538RrYNyqjETLfTb481aPYXpRDFFGQ",
  "key2": "3cYC4Z1QJmfAytzoLDF4DAF4TfZNPBEzDpRoZwGFj3jbdGbMSndaNSW4pbVJPUtvZ1iSfFHVMUz42n37PcrxREgK",
  "key3": "2aiGNquPzDGHH3EYdnNpFpJg2Fk1CcZvoUp4zyE4cR6nYRumQJF3rKMMsMBoUPaFrKxVe5Uk3X4TtR35U2C5Ze7U",
  "key4": "3HjHtCc5wKEFAzVSZJ2n3ceygifqFSeJuCnPRS1HcQMwHQBgJnUC1AdxEUXXeC68QXMVuYCNMf3H5avSmUeWhpd5",
  "key5": "5siysxqooqQZbPcLK8Ek7AYi7xAwpu4KUXMXrW97dziBYNfreYVqcAHHo1DSvCoiB5suNCLUNVLex4FefmZaT9Mf",
  "key6": "2DNsKro9F3JeVac6ukeAp36b3Hei1mHghpRz7qVoGNXfKhTg2z4fQ1zuHQbbKRJ5KqQuqqtaaeqxDTgcmJnUvkB1",
  "key7": "2xtGW1EkPsHrqzAjAGXcGrCiYiZQQGj4Vim8XiXUMdtCatvibKHro6MUU4LLwu3nCxSfHeruNgyL7n4w7WQK2zd9",
  "key8": "3hxQvYC9JofL2rSzrmSL6CNyVM8t1gDqT7wdW8JVXvrGCFVtDdyACHsdsHQNdL2f8T8xto9TX6UKiptC2tXZ4u7P",
  "key9": "2fbVDjTvszLPt8PEFMFsha6evN81PefKz2QViMc3YMCWud5yYMDa7KLRj9QBd6BR5WozngXfwwHTYfxsgPUaNJDC",
  "key10": "4GiKs5tudrSCvSGscHQb1DTc67e2u8kf1c1MsAMxvbA9jofUyo3wxA6LR3GkcUsZ1Msb2MxMPMY8t7wmCJmxTgX4",
  "key11": "3CaA8qjdQkBDPRDT4ewxnH7gfc6xwjopwJDV7mcgDSNcmZKEZRiPck7Naxo5csCh5NMBFWXqFWEBYML4cE5wvYN3",
  "key12": "37juAUCXWbjvHGFGkWZojWyUiEH7hLP3CRKdBs6Vv9hon6G3LrRYFGYAoZaDG8LJL4xejfaYJV95aGZ4WpLLuM3F",
  "key13": "4yzTUm34B8sCqVHyMunmVCz2vS1gUNQnGAEa7bA7QcQFhuqepyHfekvYXxKVtyUDPc2jNM2KE4VwAYRg3nvDj9mc",
  "key14": "PvziDoUjFTfBwGRpGmBasP1osSngtJJt7tFhQSBrsBdamajivZXQpyNsSXm4ooqGafg7bBDzFbASirfDGMziv8X",
  "key15": "63RXiRAzHYf16Zv3jWqp9ReygAypUG5XCWCFAi9VXG9xtiAHbCg3D9gzkkcFtwvmsFPtsqpsKXPJnpKZekNqkVzi",
  "key16": "MMoPMsxVQQwVp65NunaJHZAJZTxZSUADLVWAocoERQnizL8xy1HstMzKJJLa2roCPVkCC4ftbjQANHz3puUMrDU",
  "key17": "2ybDLcPznLep2DaefmE43kcyZdN65Y3Xb37QvxnX5pe7pwRKBfGvDSCSjmSWqT4MMPE8sXtqpEBKAU3rZruecbFF",
  "key18": "4Dd6CwXbiSQQ5YrcRixXepyMeUqcpvkU8PRfryV84Xut1NuiJRnf1EZS6qvVCtx2atTZsjGgaVbhtyWBwu33RCnt",
  "key19": "mZr8Yo7wXTYqsLMBKacwsNzSdHWTXywUKiTvtnfsjsKtuAgwD5q4V9U7NPJDSvDCCFywqNcZ7ytZRoRXZVKdK9t",
  "key20": "3u76ghdCmFgCeDqxdBSz8eUDRJr6scD7BYxqQVJNwynKy7DoKxV2EvHEj9rNAuag2tZMAwqHM8EVBq5VqfvRDHeV",
  "key21": "4q9nW44ePLKAo7BRZmmYTJ69jCwHxV7gj6gQ4d1t54tGtcXmiMitfJjo76SCTBExycaUuBEVYwg9gvudkWfzVnyY",
  "key22": "2aTRxWJ8Xn9SKfDq41xes4DJAvVaQNxMRUZaejFkygbJyuRY63q8R3W8mkX3NWPwb2WuRA2PHkU5cWRaAqDmcX9w",
  "key23": "2xjREvuv6XDoSzD6bA61cC3Fe18yVzVdK9TVcnodKsDLkihYBHfD6BDoQUrMok4sMg9rFPMgqAhnkZ4SNYxXac3y",
  "key24": "4Fn9cNWzH41ERoGPh3h4vKk7LAiSA3o8hNvDxehvouvt1dYfAcQwHdmuwbHuEdvB4RAcxucNa6tJaMo5cAF8YNtE"
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
