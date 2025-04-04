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
    "26E9yqnceNrb9tdumgWwkdK7V1AxNSTfwFnme6YgcDtvB5JaV3uLpbAeEkCWoy2taVrcMaU5DeDH9KqDf5QrHgNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CzA79TCdwrscfYJncGL4xsQ6TxXgGVbaMtEcXpS6wxbeNdgsnQgbnRSfxdHtQPrasDQ4YeNMQpLZYf2xY36QgLG",
  "key1": "644xzuUWrdLgStimD15D57pk4GG55WkMp5zngteviybkxMhEkusmC69QZ5jNVJftg4uUnHLYmopDkstBBR49UCFd",
  "key2": "3SacYVUcWArv3M74JFTJBfnB9BngTqJS9vLxxCeZV5Zy91s6jbzdVfkM9hjEJiob2r8E6GUMnzt6F4JqkEX7Xd93",
  "key3": "5Pj3ikz3bzEnfuadzAin84v2Pswc5r1QANtHq9M1HwYy78sKdiNvmWsMN5yuEtk26NkTmUfNDRoWU5xmkAABZFRG",
  "key4": "2m4T4BzzKRJggVr6WVpTgQCCkaERy1NRXjUezUaTcCihUPWdLHypvv7tKizFNHhwsChzMfoGm9oJmKjbZPharEB1",
  "key5": "2VZCE7U4EHtsW8BWhD2vSSJF7ZhwmLqDnecCuMeJCBP2BsAGzRuCRDjE7hojoe3x64zN1KtrhuRc8s1H5v2j4vxz",
  "key6": "2FE9mtXSrhRciyJVQswCCKhvVuoo9drW4crE41uQY74E76Jdy2sh6FVxucL4ugARyA3t1KD8hRhuWTgrjAmkdVik",
  "key7": "sZYFGAPFheYHTFfMTBVfgkjdktvHfQqGUVnDYr7EUX42FLS4t1ej38pfiLSbaZQ54U9a9n18LvtFHNVLTSsTWXa",
  "key8": "3nJuLcL3Xh6sv22nxMpKxEgZV4F12zpWUkrpoevosQuxyS8x8X7Koo4Cf59ciFpQngDKG9VVgEVqNzaWRzRQYTPg",
  "key9": "o7Uc4TMia2CxbqVqWgLTdMjn9SyeSWHCMyD3UECivZMVvRKGVcDhPGf8jZYXFWWgDVHyNp8Y4aKgMNbBMnNdE8v",
  "key10": "4kzQUxNXfUYpcp5m2GQYFt3tctZYB2mP23vVPtjH1z7FbgQ1dYyfBm8e8BwNwsfMzF8C7rAeRcZ9SGyjaWPEKZG7",
  "key11": "2TFwBVW93JEMLEMtsyuxtbjKuC6PReqdVxE6EJUgyvr1uXXz8w3fc1qrgJx72p6zAph5zCHuXCuup93dkJLX8hmS",
  "key12": "2GkHnyY8xeMZwVuRFSCkcBrSXFxte1czsK2FaGBrCQJ46h5AHRRSMgvewRxc9bVtPw8gWiknYGHVAy1VRwChQWZM",
  "key13": "31ZUAP53MvCyJANPGEkKBLfbstTPpZEEpF1cUcQD4JZeFzBkSLugkub8T5rbfqdKZvMH9cFb1NHaTKbUaVxxC2DP",
  "key14": "5iNCLQw1mM4nC3cXKyQgKtdsGWT3ji26SQvQySz2qtfDPqv4zotQtofWegmTK9sbmFXgCc1xXP4UWGc72rUBA3uk",
  "key15": "2My6jiagBQzji65rqXdfJrB8VwzJSVyznQ68ZzMjrnQxBq9duNJE5XsedFXdMxRuJ5c3YXEGY8FgxFwpBdon744M",
  "key16": "49kRH8LDoPakPu7iWqzRUCuLYVZDAjMddPKmWtEA8KEK7MVAMfsUtcevxgzRufew9oHG7L5ZRf1xcLmcRcEXSw2n",
  "key17": "2d7E8mjtVPBkfEaBwwihoPbbxGsr8CeFvWDJVgtjedrbjsFknEzwbRMrM8QvivAZ3SGYNop8STWfXFpuYVzCUxw4",
  "key18": "2TGu1TJv71auMXFHZ8udWgDKq9vUr5DSiujPdC8aPgD4xPp2dMRAYhwrxEKbT8gRVUqozBUiQrGyCnMBVgJTrM7Q",
  "key19": "3bLYFHPm5spiU28vQa3J8BfzHyX9VgW9Dj3Vxt84Zy439p4Gxdms4b64wgwZ12ZGAndNug8Gw9KsC2VjmfjTn5gt",
  "key20": "4XujZFmRq5mVC4k3SJ9JyY4cGWbBrsFKLrsL21Dz2WjKtqCkDvngCSfVmrUVxkGkiPaozvsXjj8tRUhKVAzvnHwb",
  "key21": "5LnranSQUmSp6779ZuN8FbK7H4cQYnddYjGT3ES91DJdhoqg2Zw1akD5RJMYe9FAJSvWuT5MY6SM1xAjTra6f9zY",
  "key22": "3FGSYpTW2UVmV6pZxY4gWvLj4JeeUAfCPGFgPWQ1UwvxX15BdJNCq68hBVyvzDnpGimPWg1iXFp2bSCkjZ9awugS",
  "key23": "5CkmLZbyXBDTkVsxv4qZMDAEU5BqjLwz8257ZtJKJk5fJP4d1X52j9xwPdQHNBeP2qudCmvZ1cbDBXSTduHYhbQ7",
  "key24": "5onUKdhbxsUshgWZs4p6AXZUPoT38WviVDQkgbvqJkGBZLTuFCSNNSRgtRPv3jmgQW6VXA9iFoMggK8AHohCoPwM",
  "key25": "561onp25MSrz9NLtxNYouERexpVKjReDayVqjnv1ngseNUd7N21k5QzCtGwa7f3e65C5mN1ZKpk8QmuVsvj4tMp6",
  "key26": "3rHmBx9bMC4XyaHgE7CTfkUw3pfSii4k4r5gQL27Tgbx2ZxTSz4JgkGMQht4NJM55B6GhwkLTsyzurcY6J9n1NKe",
  "key27": "29ZxLpW7ebSmxH8PRKFgMSfw6sF7fKaa77kZinxR6pmJmX5QsXVbwpF234yrvxg6Z12nceKTwhEZ8PaVFgC3GDVw"
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
