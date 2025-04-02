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
    "2yWKNniUVjssrcikgeSTxCpHricBHRXYLBDUbyGYYmzPomMua5fnBA3HoJeRvxmdo7PgdW7maUccx8xDq6msNjUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mtY26youEKvnDns5xmtHphT6JhHbpuAefia8iJjczfDCHU8QZfbvjY3XR1hdCUBKuJWBwTz3aip2j4wZpoME8vz",
  "key1": "2r7SCZxntRRKZRCYxYNvoywy65azWcQCRSzpExk4rCZYSTHBBjdsGZHfHVtBwgWEKZhNirHsPsrDCLnnmN6DCPoA",
  "key2": "5rWCMgqRziJUbKgGZPgvWZKDjkHG1KrMoC8GviVMa1SKAyKELMtAefAKDPRFxuXqAvByzDN7nRMJWcU19Cj8dQsj",
  "key3": "4DHhTrY1ZCeufSCsUi3FD75kdk3zB93FdbzNPyUKD44Q1qVTJiaZAduxcozJ1anq1xVqBQvkXcMJQEp9Runre5MF",
  "key4": "5Ktphdy4FtV9DNsyvUvRMJdMt2vuoVuQKqpKNJ8NeoM2G1y1T9T4fF392BWFNvRSezQGFY7Z9rtvkYNR8t55PNyU",
  "key5": "3n3pxJDcCYsfEX9bLbJNLcfYRa9CifdK3p73tihfj9vsKKjRH3BrCWqREtwXZJLkZ4Jvy6SAP3SrBY1MtFdEUKeX",
  "key6": "3Ad2cg28P2mcHSimG3eygQQms7BRgtj3sqTdJXbvqs2trAKKguLPnE2fHcEJtiazTEsjovnkEMRLr2CGwdb6uqRG",
  "key7": "5AnJU4P12EHYodNhVvhJit8mEvwgaaXwJwwPCxe2EfZ9BtBjPc3m842bPdztwkZVKfeu3UsqvcR8CzAXFwRWV547",
  "key8": "3pvdN3M26E3dofBL7zu9NpoRUmrquf33PrEMZU3Jyi8w6wVhF3e4ZXuQFP1e8a6z9XfTVxPhhKSEUAjhczPQbLsr",
  "key9": "4xoL7YDtU23LNdwAZJeHaPc9bRRuDfficjJfsS1TZruokQzDwYYV7iqNvv2tC6sq1QVQcLGQq8aeuKnF3PhvhHLU",
  "key10": "tzErE2JHHiNWpyQKSboNQjd6jmq9QEbeqwiDyUtff53CzefUetYpppvoKDcS7cEkhu2AARr3jpN6saW4FHfM2RJ",
  "key11": "5ZGdmcrfDNpLUFsowMrZReWeHMEkx8f8aJRfe4gZ2gbCKgQpN2sMQGXsMPwhoiCmmqEfL79o59QPUFQcNYK7MJxW",
  "key12": "3SWJZjCYebqEC5Y2LHCMMXsSTkZ9k4aNuqMrfh2GA5p7pn9XtuYvhmrctdKQS76Z6DJ19HKZUwV5KRN98p5BVejC",
  "key13": "3aJGnapkb2Ebgojmdtfp9qRTvpPhNUb8iFzX6RB4Pc4trSbXG2Hkjz58qNT3xbvq99YxjfmrVMXWwSsGjuSgyw8k",
  "key14": "4CugthPZZgv1gLAj2WW1PEmTfbaG6Kg9FjYSSpoxDfqc26TbJgCScCfJevXDVMHwftLk14kqYWxrtddADuAFihvx",
  "key15": "3dg91RCpQCVnjqtmro4eyz9mi4Tuag4nT3h4Ux3FLQoqMdXFgY8588fAH82FqoVjc6xsg39b19weKTEMANrA4rVz",
  "key16": "2Yobv1E1sNQKF76V2P35zgUmak994b8rrMvXweEz82Avpm2EUU43FWcVY4rGwUfeA6rwAmaxhAy12xD4hCm57kZ9",
  "key17": "3NXiwo9QKxe9BPeArUKUpq3YBJA5csAP8M9g5XgLsZ45AgapLXLX1GaZTxXDuqtKwjLrHNFDh72Bab44PRfjR5sS",
  "key18": "1idZN81MJSmKjWJGPTC1kMAMjtWicRw9dN2hEiSuX3B2qDBi8RKMgW1mwAdGqbDvwTfuTtYjMsXPSJppXRCkfk3",
  "key19": "2MNrJmdPh9ea8mvciBfhkKtsPNRPTy8XS5pdfjYFtwEPKFvfViurHLBw9fGgg9u5cnTiziVda9sedkMndHZutMey",
  "key20": "3oHSm2S9qZ27FAmQvhpK67xxAW1PmXU6wZ97gQArjG7iVNdZnApcCiEEAbBcw9fr5gi1ZJvL9exQVd3TXTfL4VuF",
  "key21": "2PrUmsvkdGb2nDQZooo5aGzLKtrXiaHT8BJo6rkWhF9jMoHZspAbk6g7fcpVbdskkXPiP5mmgwEM1LqktXtUZsf7",
  "key22": "3z4sA8XRVqftFiQBhKnVqa7jg7eJbDqAuJ7QVZ8fXCrj9SgrxJMLsRpqUifLhDYRnMcY2z1Vysv19oVoT88XvDfX",
  "key23": "zKU7dju6F7sSjpgwj7vjzJiwX2wEXTj896H3gVbog8kkq6z9orEuRpD5Wy73kK5K9GZ9rpw4DgFhFJkM3huwdDm",
  "key24": "5vMhtdyGSgtwBGvQfWVRMnHru8zjQE5S3oFB6XXNEBUK3gC2XXjXghbHS6nsyjXJT6eLCgPWA4n1X5SYP1nBGizi",
  "key25": "4VzVHSHMXMTGwcU1mNtLSTVJEYtd9Zj5v6NQwMbgx9y1pWVpGMxt2CEaHwV2vtww5dx6XTHFfu5LtELDak5tqKki"
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
