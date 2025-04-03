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
    "2NU1KvXK11GJTnEb6t7PWSuFntSuqBe4TAg7Ah2PwYeA9Z6CQEGksUxvPzBFLBHnis9gyGtRWVE2P4ra8mfiAQgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dME9ztMsRddombzXuTMoGBr6ViEXuiV2GC5wfXfYYuU7dehh2VHXsb1mN3KEnNW8m41eN1WFh1iqwbjJqANK2Jk",
  "key1": "4hwUZ4vG4CD4YHpFTc5eVtLR5paVFo24wvX8dZADY6MkxLVfXJPLYNpf2tZBoy8Vmm8rWRqykrCt5Z8L1MGLP3uo",
  "key2": "5FxwXbaXW53ULT6YFgcpQ7zXJBSbLz85Y3Dnhs8ksde4qGJfGGAf51mzxYLyUbHsN1ebqvaF2NbTWnGv6atwvBkC",
  "key3": "5CjwDFMa6j2kZyMUBv9sGKbdKJGASfp6MzUSnguBzFPxvKSZUL7vy69Nj3y7GzqMXeHVAQQ1Jst9VpkohzQ4NxAZ",
  "key4": "3ADkNBH7cWuXDWQFzSzXyFS1cND23LWrpgszgQczvzEDwc4BpRPUrB4bWp46tUrGjag2vhgwAB76AR5k17Gx9Vej",
  "key5": "3NVRZoK4HtyVFVXoUDSbQq2pXzkUs3r6nNsxbHQ85CQje3Ajakc26mSmCxgddez6rR5Jgssf4T22iLhZqz1ujBWP",
  "key6": "2ZY7nAG2oJty3sVZ6CcJyP9Ri6e4npjuC7K3yo9fAZ6AzAzUSLVXHzwJGyraxJTEhVrFMgDwiPyNgZdABXnxYzgR",
  "key7": "4x9WPQE4Qi9dxHL4sMp1u1Dk3rUPzLGtdnZrw2VPDHyqWkimfn2w3Ku5zvpteEy9GCnKL251avV7UFhEc1phTh3X",
  "key8": "Y5GSeYN8JEBn1UZB6NUXKwn1RkSEKGGSDGF9Tj5m6Whqn1ditEd2hM8i7REvFs7JU7btA5qWA6zHX3mXpcwj3yz",
  "key9": "3K6trEizJHArTLYQ71d5oonZyD3haXz3WHzzWyxXUf2H2myrc6AcVoeVedd1xzZCSBtJxo3Hn9QV6JL4FCVvAwu5",
  "key10": "5MjxdPdgEnH3sqZXKZAJwYgSHRwYu91dybCpotsmLYMHf5xXYV7VHNXof9dowsZUjTavemSGBwfNeNMfxd7xtKiZ",
  "key11": "5nCD9QaQy6vVWzq6CyA3xHzwy1equWHrYJY7jLnk52LUZsCMuh3zKDvdtgu5RVVJVn38qYvdhBbLkZF5HxL1gWbR",
  "key12": "2rbVFVRTKDtsRCyWKdtzWVDLC7LhPxtgistXShUPkAfhekVWnSFudCZCL38tAHqDbbmwhEiuqhFcicFyXfokW3F",
  "key13": "xrdvXBdH1hKoN43q2a8vb2QDkt3Bm1MeXupuNTyTGhGqbbhhFgFVjGkbNAFgrj9kAZLVERZ7ByKQWhzaWteWpuU",
  "key14": "3PfJvQnuqovRCJDs4fdzPUnvTzTVLXkPvzmU8wz6Ar78gWm6XX6nk9zH7Dv8HqgHDq6QMh2bea35QJNnC43YjHCC",
  "key15": "5Hkicg5bztbdDrCVwkL83AzSGJtCwaN6ucvGXePQ9dTrTue8c4i2sQ54544upmXa52zxviFNmLo8BypSJhukuERF",
  "key16": "5hSmMc2PQZoW1HTrtbtphDbo9Di762isDAeC6JA1rbgzGwd4kAvCwgTz4aMwGYgTUd6kBwuz4nUAyFTiyRxH7RdE",
  "key17": "3u1JHkR19VyCEuk22UixDE9JUBfFuYnhVUv4gmGiBz2CZbGuTtWsKFrwpJuEwdChCVbxBSjCGZhXFLJBR6isbtCe",
  "key18": "4tz4TxieHSBcxvqWoXFzuNyV626MPsbhSynAstKxCZR1Ry6y7V25rJEgEc8zQ3wsXhefGfN2JJBXXyDUD4YPX94z",
  "key19": "4XYM8W9fxhYEcxw5yBg4a7sdLLvxP93uxcqXLMUqvmp7YQwpHpktCcTisbcfTNtgmckLYvMmwHbRobF5PwVS5ify",
  "key20": "5LmMrmU99xMxMFq7wrMFA6GPUgvhwywAkZ6ZVQ5F73Cmpm9z6Ra9WCRUWW1oJ4qHPpzMGRs5cR98d8VgRWvSBp1g",
  "key21": "5HC89NYfpD91eQVKtiBtPVUKhv2U7hsps642xNNJfBhhqDksv3aVsWcziZBPccb4P9ScdtbvjUEMX3R39DBf3KN9",
  "key22": "5aveeSdEFGKk9gHCk9PPrVEjKEqxSQKezNPt7BP8LC55rVVyHckw5A2FtGicPmAghH3EhQQU7NQK8XSK58DWNZ5v",
  "key23": "4GnNAYuJxjZSVmrhhy71e9nr4tcwiP6UqLruNM1krrN56i58FAWgK9d38sTr6yFSEnkw9b5F8B92F4ncz1nYAcAm",
  "key24": "3xRdN1aChD8u7hkqoJuAjpCjhkDZHG42o9N5tDkzbbTLuWgWxEwSAh3LLLYtbfCcoBF3J6WaEckHhR8WncwCYBaz",
  "key25": "wh2GVoD35qXBBHhTCCEKkqhvsjTugtyEJ7yjkVHd3scgfmfWprwot7GhgMXry8cx8vjUfRHetSctfei1yKXuvsd",
  "key26": "3GRY3dKXY4WFdySz1GQtEFXBW52ty2sNXHZFEayZSeAMSc7KLzW9KtUmpLGdLS3x4YfiZ3jAW5sZ99YSZCj9Biww"
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
