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
    "U29NZZcnBpyX1qTcsp6u76qWinL2jHHgoqJzBBDci7Ve9htn62pF1ip83ahKdFSaGpV1wjGpoTjRQCmoDbf6g4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G7GAJ5QeonNNfm4qbBQDF5ghQwCSvXwLr8obWs8euziqqU889HaMSPD3iGCZLdZK4zt4pv2dqQDGuFkh42nZy37",
  "key1": "4124bvSzZMLedBt2dun5qNxCdiNUjRFx25xubuSownFAPgF87WhTS25WEqCWqha891ZA8nuzyatwBm2wfM6mNaCy",
  "key2": "nStYaH5K2JkT26ZZr1HmhB4gYU2nyxhfWPk4N1uBEd6AqvCjiLUscnjLjGqFEWmEDCFLL7ceuMut4iuCx8hWbo6",
  "key3": "3FxPL6znxZZdPrj5yFCDw83MxL7Zi2GNvF2UbVDHgheB32mMJgrAhs7wvUR6bhXeb3xFhkrVVpkqBTMLqKVQkGUk",
  "key4": "24LHGyGm1QA9JX96umXfzmoP6Rs7b5hUuVipNpMCaaBxddbFMwSguX6CrYFortcYu1cnadQxX22HHPgSEzoepo6U",
  "key5": "2n7wScPLv5VLsnvJyHKVnHBLvn3kYhs4LWjzjw4GhokYieQFrGCntv3j3pDS3U1jUcdJa3BrFGGwhjEshUGoSBkp",
  "key6": "2ZiPZ5b4ehhbP1ZcTL5Wgkwp7p3qrzAtEukcgu9AZfkgjX37qWwXVzfw2oAFwdfbocG2TU6CGch1AGDJeuoxeHwd",
  "key7": "2pFgoAXPt7ai8KUTw7SBGG1b6oyZFpSZJWGwDsTyHGLyh59H5J3nsw7Vpvy6XJ5YNGtsAU3d69M6SnsQKhLRigBp",
  "key8": "62Vb26EUSFC5vjPUnTk5zhi5A7bzHBdRrWNMVNx44gUfiWoF2b9ox4RGivtThPRr4eXc1qBtrmvwzxnEthoikRMR",
  "key9": "QVy1RUwxAiahR97hxLNsBNoGMAYv3AFeTHCcGmjw6USYBqKX82YVFMPM7f3ffu7HsBSJW3X64MpVRznwLai1MCi",
  "key10": "5zyT5kPFroZmp5dvkEoEB6S9EgQbpLe9pcNfyr1PCp1qrcQM9LNdrqejYNqutbLWQp2JmEYHkgqMRtJFCz4VKeg7",
  "key11": "2FMWCyQyKgm7uuBrTSF5eWgnbXxYWYKz1uWUMPJLg9M7qNvpJLZAZ2GwhHxS5PmV3EyrZM38EvKj7WTrjbP2oB7",
  "key12": "7xjAUcBfZgE8EQ8RJUiCQqeJaugfxXQFN1Jnw8HKV1GwPkLn13uY5pf3J19mVBr1FQX3nhLGD7Y1bbjnNMfbVZP",
  "key13": "435jjxYQSvEcVbyzfAUBbU846T1PB7mNWaJyXBoV1x8czBYkvBYfWquawdEsbnLy83qw3PxkQ1hEANzbkA8LZPyv",
  "key14": "5pz6yKsFBdTaVoVNexgTqRjnMizaqmebLuCzytNCzEWQ8iKHCeHXBDTGXaeVXMq87gRSGWWoHQh7Mv44AK2tyEp9",
  "key15": "39JuVgQMJJknBNi1E3XhTha3gKCbyrmcdmLtcFbuTXyhL7PSXyuFJHoEkNMiNJFJpSiXzB2tnfN7CwJEwCLArvkx",
  "key16": "3vGwRbEcPZvWtaPBsDcexPyXBybPj1WUyt396JPWFxLw3WR3rwzMfb2XUigtDDxcxGXHoWsbsxtwsEg5aYaCND3t",
  "key17": "4s94Q4yWJ8U5nqNk46TCMMjdDMC5Mtux1Pt3ZqgguPoj3BpLjGRj9bmtNEJKHBUYWMNRY3vy9E8JXLvnsHF9vanV",
  "key18": "4K1CS9sGss9Xh39ZvrG54SXNgfFP52itwSeDXRp43PpEKeHBYci4kfXuSuZbXd5oiMuivhCX1BqzhoDrmcimJAb5",
  "key19": "5b5r6NW7PP2NAbb2WJNJ2R7VWNw7uWzKKZgxehykT79j1a6ocGtyxrwQj1RdRXtY3BSTvZ5nUaXnkeDhrUqgsC1b",
  "key20": "59jszPPvKdtKGCJDJwKpYEVbkQNCnHQm7L7qgb43Fh6rGUp4UD73kHC19Eevmap4u7xGe7c3pyrWVEGvvGKHQv8w",
  "key21": "3TBYLwbWoH31FY15Hym7UcG17p9N2qwYtHGszC1znhJmoLgfaGtjkdrSah2AvxNyEfLCfHWfsRSnpycU5EMbty2u",
  "key22": "2y9yzNLLmdx3qyfxXXTtjx6WfCk8zu14ijtxu5z6XgkUC5bZ9ZTbbbnwWyXGHQfqYvux6yGWgzDMcYR84fxYj2n",
  "key23": "3xSMMZv6DeS3KqpHJfnUhqA1yrByJPfroR6RBV1czpWDbvmsebT4hMvh512P171MZ1jnpN8AYhQmAWAe3Kd6WkHL",
  "key24": "4kwiXCaEvknXsSnyKKqtyNwPtQg1UjvrGyGW9V9JWG3txCmJzQJQkC1N25MaDHfPLmkN1vbejBQtK4NbAnKRDADg",
  "key25": "2wLU6oSephyj7CL7WrzJXcfvPoLpgtEg9bhpEBKdhesNjnF2ykfx3tPrzwd3uDrsvgnBNWQgsQHsgooss3kmTXg2",
  "key26": "WPLLkijHnEcTrcq2Go1qbYZAyLtJ6g1oPpJ4gW2fTE5ufyUUabKvYrdQgyGcqCYrBjpvSrHhnxwSc73D7RhV8Yd",
  "key27": "53LA4ErwdpCAQx1SoJ5wrqcspConwfCphoaLxfyK1ooh5RD4YkQcaiR4ftft8ddk2T2Cn37t59KCheRZMf9cCP7v"
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
