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
    "3uSRwCCCqZprozBM3DUjcrp2khFTnFJnZ6AJ7zToVqbFRKLLnUxC421edWxX9U7zYAwAN6ENEZ3NnyvLywX1kEwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gwu5JtFCiR6VeAnzRkw6BPL3jvdFnJGk1eHon6skxQMp6YPFYDtnPve53a7ZoYhzY3WgbSg1P26WfkGbgK9x63",
  "key1": "4XunwMwy1XR3QwkXSbgMNKVWg12dQnsVx1skZqBwpfHrxyioHP3KJ11YeM2vPiGnDJ99yCFcFxCEqhVz8YZFk3Sb",
  "key2": "5bH3cZtJxPRgiVFEka9nDJLWjXGEbaT5yhdJvDnimkjjANcUVrUqZ3HPawZvXnsnwn7Gomo91so6LneNPCQtq5AG",
  "key3": "5R3BfjcxjtbKuMHEL5qnmHL3Q1pXbWP5dA4NQU2kA6KoyswVGNiGi541MzAdZoatYp3BddkJLUKDjGhJfvzC9ySq",
  "key4": "5niVHFsEhEaRwmVuFw4zRHn2nvefnH9p3JLj4X9Cq9Gnt8DHmuysLfFhhK7RW3rRmWquj97AcznwxR7q3hB3ToN8",
  "key5": "2WE6vPowZARU9d2Qc5LuysHRuviNojunfYwbxekczQe8kRbtsaCe4g7kS5jcc8bokCRz3pGftWNVTgaf2dTJQjup",
  "key6": "nnBvifA5WauK376y6FWiGooG6tfpoPBSFETcdyZwBJhB8dPoeXwdEk8bDGBUVRp9t29sedcwiv1i14fxDQkSxWe",
  "key7": "2cd2XhMALtHVyhBszc4x7hq3jxu96bRpXhMY83UPRhTKdRJfUNskzpEMFrU62K4zoB6Vah8bXCkquiSGkG8ZE82D",
  "key8": "2SbQmCZxiQqoxisknNfChDBUvaGw4ccP1WWLHABUyRu1aQ3rtH6FRa2J5hd7krH8beivowbYErVGf8AXwcDHZvq3",
  "key9": "3zHXzD86aWuZVAWu9nktNqfb2UxHdCtkn6xKZHLcTFZNbv2crvZdhGmMUmbun4h28T2vVYu5eaUfmYd1vVrybmgw",
  "key10": "4WHCYQeWTJP8DM1PJEyg9EfjpVgWAYwWsppyBbG118YAn35ekegWusAD7Rkd2unbhPyR1mMKpL7uu8ciiAfeNJHs",
  "key11": "T1nSvbQ1ijWXbgpu7PCD5Ps8vwYkZWdURcsdyCebAutkfNFHE6iJ4sAFBC2coTCp1MDPeYsgRwFpZX2w2HyYs63",
  "key12": "3Ts8QyTWb83H1oFcHGhqrzvtTFfgjgrWa7fxTopmmsLzP7V6ucToiqRMpjVQovsYNiFPXr38Rt3ozKBXnCQrpnzQ",
  "key13": "aNqm5odYA2ZyPjz8tQyimCKvkyj465WigE46ocUmVuxFXy4W3r2RN3wHyPR7kUyBKNwYtg3LYgxn54ExxHUUpwH",
  "key14": "2qTyJXr1AXmCYNfhrijyB6PD7AhibN94eFWarCTmLP4qErb32Tr1xeXrfsE1yymZbmmY8cepScWGSPJMrN3W3Jff",
  "key15": "T4icvLrpwz8CNzwpsg8rL8t31meJFzSTp2F7gsLYgsrNezy4vpMrJHUVxYZRK37QmCCxcDNNefkPWDDXVpunjFY",
  "key16": "4fXzj4v9oqEANhRx2tXSEjt5ixFuD9DgtTvUGk7iyTi3JypMgScVRjZbvQsY2PmFLsQBSek1Rm458q7wXknDwxMr",
  "key17": "4JNgPbA7ZyJvUD6FVggRaGBxhYirTvABpGbLvfbz3BWLX9buDzbQb4zdGfbwBhGd5iDTvCmPTQzZaRAT4rcr6RTX",
  "key18": "2bwEdhiENx4v2AFNa4B3FxiRC46NeEpYGQhaBbAikMgCm3myhrkZsYEmzbCAXnvdtJYT8UpzGhNywoaZbrwCdUER",
  "key19": "4yYQmLCw9r5zKxSx3JiS7vtWWFMve86xGK2vVj5L2tS2uuDQhzFwGswpg4r1VoeAbiUQDQH5NXPuDbMVuhiRWo9F",
  "key20": "3YHGqRXgPUgEpdqAkeTmviUwuAtMC9z4qiCb1YBZpitizALsuKW5v5qh89avbh2LpzMWd4keHorTL2Kx81P4qCNy",
  "key21": "WH7CovwqxovKB4SN2nNJX7XB6PgDDCCXc1cGds5b8canyRCN7hPNuL1WgJwy7juYqU8sQaB6y2FC5WrJKDVU1tH",
  "key22": "3ZxnRmHxWaCTK4PqoDv2b9TpcBRUpuvBGLCJNC2VB8j7vfWPjUkHXu4hfFC5bb6TqrpT5ES3LmHSZ5UTGJDU97Aa",
  "key23": "5XLjtX2xoPQsPZMKogwtRwpQuY4RqKa4nENkhNvZqguJkzhzi9yBHpzFZz16PVTYbTRdeEqxgHFi58BB6PhzDrmM",
  "key24": "3A1cNeaWNiZv5pKbUTJS4rPPXj9oAjaopKGjo1HyAf7mMzTwcvYWSSwTXbRAAjXr11ouK9rfurGhrh45nA83z1wh"
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
