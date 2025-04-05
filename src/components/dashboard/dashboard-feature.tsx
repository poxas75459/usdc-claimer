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
    "363Jq9YEeC1Lv9q9goGuuZNkERP9Sko63yMVyVcHTWH6NzsD2ta9Bu8doB5VSQVbLYUnLj7UdLGmDKqiw3W7RcqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c5PdY4AoGKy9d95jMy79HtEUmtj47hdsX8XBP6qK5HjBzqJjxmu5isdAvEpfPHnx765TzrWCgUkBZFB1tf9bNBs",
  "key1": "5JJjLfgwWaKyCYcGJT2C4PVka677hTxvwSWs48918LhubYMizjyCuFQuVnrAB3VQoZyFEyoYSH1qsCs1hmKBKK4z",
  "key2": "5pKWVkEhxrzJbwrBZi5YarqKmoVPx5StvYBfiBW9UAYPCgk5aA39yfveoCoSNabQLEZ2Yw5xALMHBzMDLu2abjjk",
  "key3": "4k8Ef8i1YdUqY53XrxSRzz8zhx8sFjxFUqkEiDSWjSgw8zazgPoh7wif3M6PAwQr38czaVfcgLHW1LLDbxtJrLWm",
  "key4": "37ygfKUbgHFQCtVkJgKEqCLY9n6UmA4oU9AMbCNgAf3oESSxA1nsyuFkbB2A5Bx4u9p4udncs9gWuDYqpZGdqh2S",
  "key5": "4v2N2MX33oDKEVD7CTrnmEBcw7ex1xKrQMwMTuZgGCmzvKfcze2psFLuY8KQEjaY8QyDiBn1cAF8KnSCrsnistAQ",
  "key6": "d2vLe2Vp9J54LNZ3vzXqHiB5WUqup69rpUmKihwWCoCcitqUY5EBTwBPKovoQtZNM6WJn3a2oaueogyqHkaA8c9",
  "key7": "59AzuXg2nHQHJ7KDemxPtCd8wAGPWAuS5yqjGiNHhq3UMib3hUDbSHtrmZq8XgdLnWn7rJVC6zvREjTG46XL18B3",
  "key8": "58hDGprc1Q3mwL9W7ysdJE37XpdEBx5dJKFw73ZrsSWLRbFS6NgyTbi7WKskU8tJUxGwg6QAFfxawh5vm6B8qcND",
  "key9": "3p4Bc8pdLG4VkqAyjE7b6ukNdUXoMziwYT3Jv7oFnEuTaRw7D6mR3Dff6e77E4G147AMM22kcLAPMFZfVAhXYvBe",
  "key10": "4jpcdWQN8PvRoYZqYppayZtqJN2a3jurBgV9zdYTSka6XMCrRdtfPReUAQMD9wyTzgdwiWPJHmrqo9XEM6VesH7s",
  "key11": "33kk9ad6AXP5UEjxmaWU3YsLPh1uvVpTnwzg6fjry1vZvtcACo1FjFjteCbeeoTYtmZVSFicorCM4wjxdchGdxhD",
  "key12": "5k1UmTzaQR44iLqdUZJ9WwkKxYH3WpBWAiG8BGtCxZbDTiA63R8SZ3j6pveWkm1B7DYSC9arn5Se6TVJJg9hYYEw",
  "key13": "3MtHxATFVMNgvSNq7MGXnG3tyA9KcChcX1iGT2KkvEEFozxpa6DMb9yAYkwzAHVPyqfVrjAs8876BEZ2LW4yZuGx",
  "key14": "1ZDShPF5SYTLJkCgDhdrZkFv65iLE3fCt4DLTbEn6aLaifQcRZRG3dPWBNBgXmZMS862Hzr4dKfyvKzTumpftLK",
  "key15": "4uXR1mGWveQR78h6gJLBAgGzvt3W2ZqohEuKERdAi59PYCa6vkav9KUsQFpSCqF1FSHVufVAeyFycowqCvukWN9e",
  "key16": "4uA9rC41xWCdEh8W36xsE2oZECRMpmXpTkiw12oEVzz4HaLCJsEXJr8gm2bdCFaNnTJ7ZCH8sLGT6E7K5P3ngqBQ",
  "key17": "2sr2GmgKJKHD2HhwWjXisVe2SZFymrPWh4iDWUswxNBh6oYpagtpmKq4wp9B7oCxaccFEzASbfgYdPj9zuv1NfZS",
  "key18": "2LXzHvhab4dCSd6kQWvJkVLcqCfqgPtkquMQhS9yykh6arkR53Zb8v6DTvEwzWXvqJUjHyhEb4PDx3R7XMD4QP8e",
  "key19": "5YHfiSg7czzs9Uczo8Ed43LPXBhdZUHJ3F2hT2VtGAKJtc1x9dWM4jgg1P8h5dNvRBFteqvPo8R6V1sPdHpofDG6",
  "key20": "3tAr43m8HMUNxqqrK1w2rHbtddW4LCnFLz5wyjgSQZXaAGGtTVEUvXypR7XQ1PoLiBRKStN4vAMthBQK33NSk63C",
  "key21": "2jfsgg45TWTYqyEbiRuVgE84uvscV873rKvwyVBmmc8a6tdCTLcacj3fofwjeYx1E1sce3pg4xQ4w9rhaTWkcZSw",
  "key22": "qU8AqtYZhMeCoVuxRyV71ZgK7hPyPcQzDv74jMXN4E8bHsEqmAdeEewV8tFwcKM9nnZPtqybcr3wdeTBU8PjvGx",
  "key23": "2P3yqKR9ypBD7kuv2FpWNi6vCUgqMcYhmRdEeSccJVU7pbmFxbrDsExRbGCYPRMtD4Z1ub5qmRz2WhHLfhXijDhF",
  "key24": "oo4LazetfuBCXbNTRSGRSAeGzdaZMuR9uUDQuReknoHM9CmtzFUXgjF2rPWZVDvE5rCSrQer798FU8FMbSWSMbc",
  "key25": "3qZrYeb5LuQ7RFB25vGAesQendCqjSfuvJQ2KA6Mteif6sseYyJiTnEXVnK8pPFMZmnW9w4guBdodvN47dosY98r",
  "key26": "4zMVkeHEpPvLxwaEHm8FBaBttv9odxVpd3LrnqYkjdTct4c7FMPgnzpTKiH9WvnfJNeR5QGHx4ft5BKrJMYZejWJ",
  "key27": "JGWdero1MrbvdtB5CakfqsTFEnBSP6bGTNNrgRDQpKQYpRs39Bta5dW7iQ9GCsDuoepgbsZwZfuVKeZ8YEMXPSd"
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
