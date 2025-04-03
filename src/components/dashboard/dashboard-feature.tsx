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
    "4DEvDoVBMzna5EKdsFSGbop5auefGTEz6ABM1Gn7vQfLoCkjmzZwbxQpNr56tZjogsZM6T5FqhNxw6SaFtEwNjjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27uDNFGbFwN8a4z4c339nNTQrFaM5Vi4bKSA9j43AC8haBVrgozUGjxymDADSyRg967kucS8JV8N43TzL9vUAGjy",
  "key1": "2eZridiUbbdjF9LtF21xpa5cUXigVRDcCtvRNgib6xLSFwSKvcMwsoh768UtMpeb6vYmMjNoqtoibNtegLmMevbh",
  "key2": "3uJ2eH9r8n8WPZbWZ3qvBbLLfHKEshP3SfQmLpj1vyMPs4nkVxpzTrNtkgUeJ2Kj9WFNRN8PGwB8n8NGetzMmF8t",
  "key3": "31gTe99bkJHwYmi99FigALnfsQX1fAzTNqCyPqeNTECyZhZqiH4pXcBSEzukyNbm7beHszKh5CbUnzRKKNF7QYar",
  "key4": "42fFmSLbS8Q5FcgWtAPNztR6ivg8RkugWmWqR6ubRThHLY1jK1ZsXPQ4CvkBRczRb5XPSQREvFHXzgdVAct3xDtA",
  "key5": "mTxrv7QQTdJAr98n6sfd6mPZm5itCxZSoJUYCjDe8RXu1tTSMFzP5zQbgj6CcrchJQct1e3LTxjG3U5V1NbSGYu",
  "key6": "4N6u1sqSWwdtRdneVZRnqR1ZApFgPGTMwU8o2CnX8E6kWNQH4EcYeUGFMhypEtZtzQhsq3fXgJ6X7opt1QRXTwhf",
  "key7": "5aWjmuhp92U7D8qse19nZz522wKiDNzqLjY2ELiGD7NWDoHwfiE1FCSCNb5jwUoPXDfHcH8XDobsne89rHphNBvq",
  "key8": "3C6Ahvu529sZMDwpnVPFjvyf7KExYfcom2yWrMXEyANGEW8MKD8V1m76BAbDtXEFMJr4x1RrzPCbBNfu5w2CcmDH",
  "key9": "q22ymnRZVBSMYddprmqybmizoYmBEh2PsSzXPZyfcuwxMqLVXzDwR1rGbkaRSNLGJxHkMqBWmDVyc6kffDqTRho",
  "key10": "5iZ8cG1zXx3zNQozSjrvJtbhhfLo6Exa7gLGhbowNS95FuCV36sozcKmzF9vMQqCs4GT5zGoEsxZ9vDV1dvQemWi",
  "key11": "5sr912c8WtZ3gMGhdNRa5fRMCZPXVMWdSoKPRtiKN59reBduWpHWMXrGBrmDw6F4BvrefwzFsSrM72ePtdEd63Kz",
  "key12": "5KXmhF5UjAoDhrbjBUAWsVBDqKv3khq1QtXgktVRPx91meZjETuCvWrxPoersgrrfsM4DzjJgx8851Qn3n3Tb7DW",
  "key13": "qMJj3PTHifrHtaJ8GhfJ2uiFCzcg2hh7dwtJzmbkkiNEprF5wg1TyQE7pa51Q366v8uTZnpUEfC792m8Dtk11wx",
  "key14": "2LuhvA6FNkqannExi5u35ncYka8JwhtT1XtfirEdWFxdooMFCzTUJu1trFMt2BivP1BcsKgfjNWvHYQSM2EHwmoQ",
  "key15": "3QaXUVd3xN9Z7xKkegyeTzVFFwVNDpqjj6MdyeSFe2EziVmYdTs3XVYhdWfm43NngKfPV3kMLZDSWo454nD1V7qc",
  "key16": "5b3FptcpdTu12MEeGxqab9Yjzwp3cdWKpgkrZLuQQrM85GyxSE2vUTuhF4jKqayNCk3J9wwfn6n6Y8tST8ve6WQh",
  "key17": "28i6QVGUzD3uc4ZoSE6GFnUtKswx4fvN9fc4BagyoQLRRHGM8BddbtSdfxTM8pef3sia8cHSTiBSY1fJjVgAhRhX",
  "key18": "5Uz3JSBEr1D35ekvqczGNz1vG5tuqwT6tqxJhctYR8qC8Y5eFriF2MMia3fHuFr2jkNnTuxfbB4tCwy4GSYj6Ss7",
  "key19": "5wwGGT2dpSoqAiJdkcihx4YVuas4FVZBnnhYZ7UG89zgUBdbs4DUX4PMP7aQUQj7A69ZKzYjqwNYroUqYVPR8J3R",
  "key20": "4VNZWBLwz3peTG3buTrNVhqMNMQb9s5JnNvdTU5k46AviAng5HP93CYq5CVqmwKNe18Diyu7oZpZJxiKSLNcSUzJ",
  "key21": "5gozhSPYPVgg9Tui8j3bmRB7qrZbfcw7rKqewSCWKcJ8nUpC9ogw2dTo6UUmxCtyaexrW1Ur8TmabrJ9GXQ7h4ya",
  "key22": "5dZxxgWvpKmxPrVJ2CWddcctCS9KzVZnvqJiDE4Az51QURqV8uYPy9yUmmBqsBcfJoVWEfjbNF9kkXctVPFdrDZs",
  "key23": "3g915n6Z5EFRVoVtBdruW2rns8C3WdzzDmy1njiwSudgSvDJ9VmV4tYEk5ieYF9N81E6AvgDaoHn1owvjBd6UQFh",
  "key24": "5xjGY3PaGfCUcBQzGUANr5a9hRAEU2eb9Uhsd1gvjrtDzkxnDTxCZMKnMC7noh5z5u6of7ePeej8txYyeqBFUqQN",
  "key25": "53SZFN4HWbXf6A3FWiKBG3pFgYGEX58WDHMgEbd2WKUagAhmSnkzYkKy23SpUAZWFpT6Q3rMjhk27LhzW3go1rd",
  "key26": "5V7hY6zpjAHsVwZjPU1npyozx2owMtT35Wyu62MTJbytnxRUD8vJvJ1L16bSVPYNkfKXn89ZCCBotkqNjoXcQGU7"
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
