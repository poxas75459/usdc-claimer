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
    "34F2nWbuqyKmDBAiVdf5ADAN2K49TM2fPqmcHMpQz2v5hYqURnamLVeWvyHR66BtRfxrYGt2K9pqat7qtAjqz7Gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22cmqaTpWmneghduDPqFCyhGVoD7UJVutjQ71iusJVEVdR2Qj9SLphBDP2m9War7A5h2aXZrQdBFRBRDYbxqKnYn",
  "key1": "3Dh3v6rpneePMS27BUsWC8sYK9Wen5rSQ9UKh7eBo4gPv5h3kH5rm47qjPJFk8dCp92jC7fQxZ4gTNiMhd2CrGQb",
  "key2": "XscNVPmyeW6PXBCei6vPpoX9hoj5KFx971sqBPshiiuvnDUU8bbMThgJvjuf33NuzUN1y7kSwxNKLXCfJ4oYDeF",
  "key3": "AD4YVP1jTkcskvABpFM3dPkpmNqj6pQmLsh7snGFFYgXU6q9Q2TmhJdQ26Sw7KXpPmu3qDLUuRgJ8iUncnt6zFj",
  "key4": "4aBMuSTJL5g1fxmCV5rfVZzC9YzNN5UMZockwf96MBSSW9KMZ6toGQBmVtvvouX6kpYj4qp3M3Twdyj8cp1igSS2",
  "key5": "5Mbebf4gsZMYUiLUk99KDYvBDpKz5QfANGEyepWmHMs4R55B7fRwzEFAuxCx6sqbCJvZkjjFCdG7gSqmFU9jpVUi",
  "key6": "3ZkiKoWNu3tXrBfTr8HJ3f5N64Ra5SrRYSYVeSx7cqG6vcmzEGxGuiJNmE2gjpKX17BAALbzdTyssAnUbqGfK1Gg",
  "key7": "5dNtzn9axjWMDCwcrHoPaAhXp77uHV21eAU7U7jdRsqW8mAoLdu1Sn52efX3FkqJR6q2LPLrKGURJzSaAg5QRa7a",
  "key8": "4ydFSsmQ1iur3vjroqHoVGERcbyj3EgZ3GBtMEMnd6dBdwGZv6bSzBVexyrTft44d2PVHkYBSfWAUQEQA2KweRsj",
  "key9": "3NGoW3KFopyX28aaxhjsSPhzDNcAP9jyvycGsZrfS4yvGxu4oDffEyNZenhduGM8XeaPdQKBVwderg9DQHezGosk",
  "key10": "dbky8qhZvQi7iy6DU83H1jPvMAfcRPueAbYx5GaWf7yZ7mSFYXCLMPQ7NaTMfAByGhFLExvNrYWGrthsaf9L8KY",
  "key11": "1222UCD6bLzWF94HMbbop9JTnHgUzLdiSywFBHXwaKGEHXmRBuJ3M5QASRyWEng5XFvV8TNeUBA2CkAGDFPRuW4d",
  "key12": "4uBJa6Vv5fTbdohCEiam1JxzgGxvLCkye3Vg3ZuG2TjxW3HrnNZSDjmhcqCYKdZWKwLigysLsH9NJrfAGfpwPABJ",
  "key13": "2JUHvcLMMcLkCMoe4NZBtTnCDNcDoQURQEKjNSpohRRqWfFm2LodcvdcR2cucCd3PEaTFh57MM6JsH82YzwBRGz6",
  "key14": "4QjqyDC9jXqYDiKRNicLD3WaFd7fecWgmPTQmqnjMD8TSABB9UtEBBsvwLTzgHGCJessX9QUJiVJgEneam2vbMpm",
  "key15": "2ZsKemgTvPahvv5FqV7np5aCyuz7G9FSvWaCpLGgG7FYKUS1kpJPJRDvJWHMdssUdxahyGXjKDfVd5DZBHZ5j4gA",
  "key16": "3R5FeUprekkS8NnWZLMx51s6D6hfsUjQbyeg3eFJuahFyScCN4urAe2wPTHdtJzQWvdYWhBJBXa1ptV2MCDdi8mm",
  "key17": "2rSXAzLanhV9JLEReN4eMkVZYLnFfXAg7GAiWT9h8qYgBPix46MGcTCC1LxR2SpmDokMsLThHLi6p5GcGJwfyU7a",
  "key18": "3KSfGrpQ44AzwJNcNsvrV238eff3Auoo8kueiFLyHJsMZE3hLQqy8jX7kpsF4YGg7SJoWmu1S8LK9joCyodapPGC",
  "key19": "oiY5nafCykoxTVEeBUmy2CvSSSn21i32SJd3aXBtNNXZG71XvtWpTt94EQou8hAJeRhbY3CiviPt4eQiZZ5F1Sv",
  "key20": "3D4PnHGkmBEUrBkMFCFw36HxwX7kLhd19nHWBV6A4jXvLFPxrKeXEfvXsq9VyWdfUa112QFEihRocbEfH5tcinzf",
  "key21": "25mR55np1gUXmaaBFBFt9VaX9SQkWBHRYvN9VwUWnKT15mu6EpaXeYzw8tsDxERR95hrZNARBELhd34giYu8BhMQ",
  "key22": "2DkkNdV4BLaqBWFky3UP9Noiuzwhz9JS2KKFryrTvX8yxYAbHpqaBYp6VXXuqEa4fmMJATYRWR25HwJWQUeRr14k",
  "key23": "2V37vomUZiW4Dv7WA45SczxJHjnA24Dy4dLo6GKZ46Xwxd6mrN5vxfhh8ziaPcEjoAGv69P6s1LdL2cuG92Rk8Vy",
  "key24": "5rkXJZPVzYWqqYE5UduQKyU4guY3ScUYR5VYFn3qxvRH3DWsNcS27uEwWmyNCm9aJA9PRYWjFWqPUZpMnagHMgHj"
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
