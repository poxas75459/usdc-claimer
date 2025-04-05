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
    "nHuXQVSJ2BkX3seDuiSxwdjM4g7GjnGp1VDfsnc6hzZJQKoxXi3Rb5cjW41muimNvid9a5uqzMejYGGcJeE5m66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4D6ERKMefDn4tSS1QyN1N8jAShkvrT6d2TQUqWExqyJXPgHVjFwnqfZeQTCucwHnEpRzGuXe1psXvnCeFmeUyS",
  "key1": "61NVpC7Sijdt8CaZQukQFQ6PzKuasMAN6AmUcCQBmuv8jCbB5LrpN89EzTKTFb1fByAghPAk8HurL9bSnGpmpVP9",
  "key2": "3D5KCDsZSZgantXMFpoCoTMQQEtXwQq9oAo8u55hjEVJjMmfQMNJ6Q7qciXNPutXxKzx2e4yQgL7tbLb4bPquYPF",
  "key3": "2bND8JLAUn3D6JNdYUWVAn8qqfRjETR2RiCNcuhcxqLxoJrZw2tFfge1nVxnFb43Nnyoo3NCYhhnuEKmHVPeNxnB",
  "key4": "34wE9StKgCWG6VfknKCx3DiCdsSSZyiUDAx3EqPZybTXnFppe7ezzoP6xCwXV7jNYEPrmFG2gs89tveejvaANKRY",
  "key5": "4qMGPGuYFdPAA7ZNXsBhJexMj4g7PboEsQkjG9UJLQEDHUJi6WYLsVdv47poF8VdXFqAgoKhzEpRtBM8wKfLvwz7",
  "key6": "4rMKfGptcW7DPackoTmsfc48znx8zgBv31EuuPXEhotyw5tm5gkXATpL6QTTjcVf6LFA62yUQLS6LPjTSNeQznQs",
  "key7": "5aSgGP7dntjSigEfekeq33GdEqAUpiymQXcQC8CgWAd1V2LiPCnWdVKvnUiT1dHqHEGEgqkdoTQHCNy5DE6QMiy5",
  "key8": "2kctQZuJsps1jkjsNoavkRZTARLEuuj6Dq2Xm34CTQdYCF6B3rUxy4vpB61FTe74gx1MGpD1CzoeNDPbbCHvNHWA",
  "key9": "4oo8JsVeSNtLhksRUNeCZKxpt7DAiEzkvZKEaojyrCDrrp7Gf6GicxxX9kQRecJqnw6nUbxsn1h1541PT266sjNQ",
  "key10": "3U4oANnA9DzXJNTXJLJ5cVJCF5uTX8W9YjMtcWkWBMzJ7RXHAQq388A1rtYZ1ZtetM6sG7rcUXGXGZvAp9RREMX3",
  "key11": "2RLBhXBkrPAQUq8dJxv7pCTdaHQu4z32JmVFHX9bdcvVy2EKhzsKayk9XkFYrENTYtz9pQvTcbmdsZ83cHYefYcz",
  "key12": "616LCfcuFQSkEjX7fhobUtSaNQna5LjWmz4X2hrFCvezWygCsu8ngBCgaw8kKucg9kxWtBwrRX3TvtpT5dghnYAa",
  "key13": "3WuJsMvyajpnPdvPNhXG6ByWSfMKKXDWxuo72r4gtXzmLCG1gNSfz57nahWF42syGZNEieBoUMjhcbdVzMipkjQ5",
  "key14": "2LzSD927FPuKx9RSyXKkos58Pp2TwLSQeJT2V3Rx8ik5J4N8LxrfGix92GsHrecDy4T52ri5vGhEExMnAG9e1HyW",
  "key15": "2Y8V5sY3WmBzwmmz1wqKEMuZtjYEwEg8xKX82vkb18B9y4gxnpDyPoHLAu6Z8kLUNyJjJUhFLPaGSRibNua68feV",
  "key16": "2vQxTWUfrafjSgph4FL2nfnwE8bk53hWHE3jj5PUWs1bk7kXARsvhmQGfg1YhGYu3XRgKh5ZhvkWRc9r2k9gR2rd",
  "key17": "4K6WBqCG9uHy7WFzJrfUmWwvjaBAweqxq2qUBjycSD1A6QSLZpZ8Lnj2zuWGCmr4WNQUiK7B6dDn99nxHqLGzDZn",
  "key18": "3QanvXuyHsdjx2c8gvHs3RpeeacUCcQQCocwc98gUTR9kR41HjaUTyPyyKZRGBUNfrMUYfxTBf4PAVKsrZqba4jb",
  "key19": "5xkAUdqT7fYQ39Ebi9Qhs32cnoVjmJJqksMSyT228GvB1vP8pnEEGSGxN4diqjAj4MsBnrW8c7odCRke9iya7grU",
  "key20": "2U7vVQBVx4fFLBdCtTWFYvXZnnUmpbxn9Vu1qTSq8Yhmrg3XP1tsZcwrFE282RKivKDfM9mctMJtLMA3BtmtgRTP",
  "key21": "3mV2SQC99Tr4NQ1nVYBvNFKfJwE5rdt1EhfzykTKpj9uT3DVK5Juf2TiUB9iGv4Hg2qT6PJRcztE4pMv5yps3vtx",
  "key22": "5tJWFrUQQE9xxNPLAav1GJgJvRh9w342Z5TK3DuYQp2zWJYmbBzqDFZH7672hCs7x4w7YNKsx2Sv3SYSgwMG6paq",
  "key23": "4Gs7RUUWcmMZWYuwVVNLVmSYVFPdNHLLyt7gDpZ2wAbphboM95NL1U1sUYecfn2Y81TV3aGuDJ8jvmSDmsUnS3QF",
  "key24": "2a5X1UccNf3TSzP9w3mmUsrpuPznxG4hXSQq3RKu49WwggzpQrbL1wQE6fWTvjfoRmxTuZD9YxtaUaeZumM4XPi4",
  "key25": "4MQ6j4sCrzx44Yn9eCdZ2LhLhKZaNSxmntQyhbyavgwr41TpCTEoLgya2dPMNPMFPXkFM3b4gTc63Dm9Q88gqohv",
  "key26": "2NWT5KreJUpHr2xTej7PSoTk13HoapEcNKVsBCZZ7vSYUwehavUx7pocinLSdzqpdxo2EwfBmvw2Ww7yNNUQMgUh",
  "key27": "3MnbLAKp6AcwbLAHptgfo8XjWMPx5EcQtyywdWiMYxgJiwxhrFyAkCuMe5BtqL3mA8wd26MSTbZWuCHXxKkr6vdk",
  "key28": "35Np2PLgRXhyDpCssKJN3ZAbTi1F1QjWj7YAgC4Cs9RSCTWV8fHjxh2uNbKTNUxW9HGcxPFaBcbkURTVHBJv3Gzj",
  "key29": "2zVQtQpXrxcABKt5iyvjiwYgtmWE4JZuStndDDuCcTFMprYCxhihH3W2V74PgqMGfE9cwxxxQ3Ydsphzm83eHfga"
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
