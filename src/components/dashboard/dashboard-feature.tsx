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
    "2RBS7i8LCWzr8LW9pMNqcyu4hAUmQ98h2JbT8J9RcoruW9TkBLHsC2RaPWS44Ps9yZuvwpJ6Skumi8QQECRrGhBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znJWv8vBL4SgGLEE5sGaaZnce75frqBBcqj5Sfw6cnqQVA2oXpnebWoWvXQfoP1DpTUJxNhvvNxwXx14BRECnQ1",
  "key1": "323rhEACtjGh9m1KaUNyckgEoVR22ZoX9LZMeCLe4X32twPur494DHVJyqG9fphC8ZxY7FWaun1sxaGPvxhZjKPe",
  "key2": "3e7LW1tpjihA42M1YwfMxrPamcQJNUSVFoRCT53H5xAcCwWFNuZVKVLpoSUFjJwxbwnSggXh1hhKVjMjHw8cQS5V",
  "key3": "Qki7H9nRTjieexTCu3ZTJ7zEbumP6vCG1RNqcBSbxZmARh2Wf8LXsQiSCMaNzAGE28ktXnjDXgZAsq5c8MeYiRS",
  "key4": "5Jg9byGEXGFXkX5MTEjmw2JuAnEGxUQDjabMbGFnf7SRKqQnVv2Qqyri9o9bpB1VbAh2Mbgc1gqRPStc1NpzD2tz",
  "key5": "4vyCxgqKSmvQAWFQNjireSkT2tVbtyCkqFFb8DZP2aZoBjJG52HtXrvtr4B9CJN4jdd5aXD3CJNfSTEwdtcdNqHy",
  "key6": "5nMx9yexkGmhKDp4WTxmDTfLisCisKUi8pbctxjqRijWpAZPfrpW3VEQrkPA1JDbokJz2HcMzDi3nrYouvmKhV9M",
  "key7": "M9oY61oJsK5p3oY85Fvwrai61P2GmRozk73bcM3JiUxYeVaEsssZEDyPrL5ardKRHVhsFE6fvBoZsYxqkUjBg3Z",
  "key8": "5Xwzc3wb6tDM6w5aVemXnqun4yBTHNNPq88mfXpcguyWZd5YfsTwLww6QFMNbHVTAqxFUEPWE4K4DBXRe9Kgyt9v",
  "key9": "3JAMSM8xZ1xSAqToBozwsLAQ29H47vDYMYxaBtayEvfHY6GhquHgzfCjtrr2MbCV8j8Ux68y47WUbT7ciMsmp3QV",
  "key10": "2R75NBwF3PdrztuyTobSiT6V4qL2F3c5G2uaMoDMYhPvvgHtm4ED4vWFoBRmw8bKHTTcsums1ANdPUGwZff2HrJR",
  "key11": "4dBSGfZHwwoCpK6dAQJjnFczmesDWgM2XQckjKxJPTCCfDQMU6cKactCeuKmH7fKQCHskckeMQd2RiGpC7KCRdLN",
  "key12": "f5PaVVxwvSagjReGB5j6tEBRSaogjyngNPpxivBpHC3Bt6x26iqougDA1qvozM3h4Gio2FiLj8ZpvkdS1sLFfns",
  "key13": "744DCewWcntZw4BXanauCWtHbiiJHndV3SfSURVkSTaLcBFbCVsGekBoKTbvVbarLMwFNCoBZHhVAUu8tDTpQkF",
  "key14": "3nx4sPByU2Q2TTitvkaU1QV3HZLmpWVgGZdLmDcKeDhaVeJL5hw5uvqpHdj17S3ejW7TMEJZNBXBna5p87wCHJLG",
  "key15": "3DJBnptdeq4Fct5YgCEBynkAeFU3S95Y2qok95hEqB1Q7ovCUw4gJop6L3VFkqQbpu73TwLB74vusvN7AnojwfmM",
  "key16": "EFJm7JGPSF6GfpoXtGfpS9Uo4TFQ4JPwu99rJSQhUBcCD7SRyCvyRvn5oJS3Jr5UzyGqxrR4dCYmrZWvrkfZUXL",
  "key17": "4u31kS3PB65v1k4v3AnVfiktZXowo7EGtcmo7FVtLNigC2JNhAjf1AT89ofSCYwPdHxvw6fkTGuwH8rGS8cSrmH7",
  "key18": "3q3tJRwWVQiFXnzgq85nQP54c1AtHpi9XaqQaYFs3WEJVqfNEYN9WL9ZR1wSGTt3WyN3wjzSJgd4ZSZiKyPzANND",
  "key19": "22F21pDag453V8M7micFDkvc6JVjZGSTYoKhabjQ2haZWQDuwowrqN7SfKbhZKVyRBcJ2qteD5syuKUXf7Kve7Wu",
  "key20": "3HHWQ39MTELCGWbMPSdUTpzeGs4GZw5bZvkFs5cWQfSukC2y6J3Zn2VdUjGWVMin4SXxvQfdjdXnFeJ4ijqnenJv",
  "key21": "3cwym9B7LXE9BpNYQYQNxqefsudRL3LTyxkZNd5BZYt1525exoisNgFXDzUME3MJz6ZN4pFEquxtU7i5cxo8Myhc",
  "key22": "21pCaiYakg8nKgRQJUQgVG9WKEKpt7eg5pnvD9TF5EkdEihoU1SrC2CcBJjDwtCp6nxLtQcngJQWqE2M1QYBJGwY",
  "key23": "2AcyhJovWhAFvxHW3GDgs9Bum5JywGnWu3KEy2RJ9jPr7paV7iwFo9ibXLh2bgNpEuQmkaBBqEMX5SGiA4yXRUfV",
  "key24": "vLrQnxRU6c5notxpDSXcTY4xsaQ7GGFgSi9LZeJ7gw9aRxmD8yfM4wCdX3n3nDyWvhg7kRi4nJowE67s1c1YESX",
  "key25": "HuXG6kvDePGnheETJkabHLi3pnLMejk9TkDWvZFbTqUZkJbGQsoEnnMF9xxMkJqosdkw4vZ3rdVS6qiNAb9Hy3V"
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
