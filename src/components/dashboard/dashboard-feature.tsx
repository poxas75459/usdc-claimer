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
    "2sWtSw7i2yNJp7XU2nSZAG1NhrhxJZDLpSChq493ocs2czxYMz6xaCpsF89VV2sUAQCJXGiTtr8gopMHBeNMt9Zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kU3NBGVN7hwCxNRNad8x2bkQeb26HKagz6YxsiQG1ZaiPrmm4HmVDsWLgGqCLeP6jUWnFjkX4TthaRvXK8ymGa",
  "key1": "3Ld8Y2ZRyHXKRfuVp4k1dLrH6gUsaSxehdE5rwdFPCoZUB3YoVbdDDt3oswFYL8pSABufwfzpof4tQp8qJ95yqy",
  "key2": "X6R4UoR31ojhLWziTmYtzEgthBFxDrifDBqnzut1qbHhj8GpcMwtpLq5ErgZewHsNiHW4yJkKJdFzJeibbFkEXy",
  "key3": "3XPbRDELBDbTuKoPmqD8Smy9EjtT2QakM6nEHjkbzBck8j9h4LG6Wh634n3QGS9BXEmhHRPKaPykCERWgtuix9X1",
  "key4": "2SdBN9BqHTParcwA8QX4nJxbYExEviC4Ep6D4CJXxfa4RSYKfRhMw3k2s8nZ2QZhMo5ymPxMGfWCBnQGXRHVWhRc",
  "key5": "4wA5H6N567wVNNGq1MM425eBCssfS82X6RBCnXrvU7NAcJqS7NMWXNKD64mFZVAp63ZzR8VMs1dYLcA1fR9xrTze",
  "key6": "A43FKYmazxX8D7Bfjc5sxxAUjgLmKhHLU8K5AA4eauZKhATrURwgww7Eo94jSaurC2EegW7UhgLJKouRf9yTBfw",
  "key7": "4z1nDGCfMTWou483J2bKH3GNtwwGC9j9WJqV8d7qcribWh6F9F51WWtz6B2rG7wXkDJLeGovQ86WPniXF8C1foVd",
  "key8": "QiFi8fN2eUkR7hsK9cThPSJZCYvPfnaT2j65UpYq41cSkV5izKE8E8CuhrGthkytAEKjsa1bpiYvPhjHaQTgPgL",
  "key9": "38K42J7VPWdX1TVbzS1raXT1dBAYcpEw9vbVjz95ocTJ3g4bPHAyyVLuq74ooDuHAtBPHaKBuxWVvqrNpznTC7Wg",
  "key10": "zbuUbALAnaNsqTdTWMgAAnegyyGzShdxqHGVSjzdqGrbtbjP2EWsHZkcsqXT8NyVCWDnu4QrMt4zhfabgA2EhsF",
  "key11": "5xgv3WeWGzTXo3aaVhFNi25qfVSkjGRTTz1fMn1wCWD3j63kpDAP3Y4ZQLpkJn8cJd35YxhaWePP5efZ55bRaApx",
  "key12": "AJa4a9Ft6vFE4UkiMFdP4sWnEMF1M9mTgBCeoXd21ykhSfQ2kQjQ1odVa1EuvAJWJfiPERiad3wjsuWwdmJhuAo",
  "key13": "2dYNW2SK8q8DMShBbcGxUg4AhXFzpYieABAe7SjFurFtJ1r3eipEhnj58A5PszFpdKEKZ7dRiAo8b8GLFYiuneWC",
  "key14": "2uPvRjsmzvSrhoYNg1XH6GurqyHrBDYczPR896uUoavJD4ubt3Uaa9GbrHXNJn9sT4Hz9gLum3pev6av5EzWdd2p",
  "key15": "sHjxU7b7cUFfduz3Gtm2HjsDouWTxAHu16Z9au5KtzhV2WwzW6qYpDjZevFSUHNAEJovMvNdcp8XtMoZdzaZwSQ",
  "key16": "4mGs6HkRXS73YkmVThcssvhw2p2Lc3rm1scbgMneqhDJkM3Ay11RyyBeXt52VxctPC8ijpsb3QX7dke9uuwBFDJy",
  "key17": "5yv5ke3MdWjxLWLGXTNcakLgr3tQNwH8ZdxPtbmDdVCWUCNLgXB88YmsjsbA1tpAHXV4dXjUZA7EhqM7RZ8wfNaB",
  "key18": "4aks4Ea5F9fr7HgGjWnq7MYDxkQmyvrwnYEGMmh5uZ23Q5Stc4nemPZxo1S8jBuy6JFnV5pjc2ZQkiKN9gZ98RFt",
  "key19": "2qF2wQiJsMMGj9G7yEpBQgxbJ9x89jBaTHYEVxVBYjo7SiPHmLpzbAZu2hSuatTqwaQxa7GwUNnettjKgXbYQcbS",
  "key20": "5b9o31ssfGGBFb42Cjj7nFneNFjnNYDXGZGNHgwimuUJcHhL7rJfkMLHgESY2XFwUjsg4jhGS7mYfo5LuTN2TNJc",
  "key21": "4zR9nFQeEiDHoUq7QHkdM9fcJ5yBFvvUx16NVNBTFropaT5DJSWdj6owpVDDaRjEqeqfG1RnfAXq8AuPJ7ACqtEt",
  "key22": "4oV6WHWqmvt2ABGqxLptJ5UnYpYyFxF68BVhog3gUftjbqtpobFMddcsGtQVHkAPAPooTCxXr1b11n7RvRtZT5NF",
  "key23": "3wxfYG2AMhRppynpHD52ihSUm3SspyC3xfC9My4vUoZ8bSw8ZoUuaVP79sFESbdTmb5wSfjT4rGghini3FmmVdoB",
  "key24": "wah7fUHySzhXdq6W1xdJ4zyv3rtD9HhTqqUY9gMSiCDG6fjTLjN9scpy2N3MR8nE4oRkyNN8szn9d1mQfzoXtyG",
  "key25": "5YGAxMQnD1Xpbsu3iKx8hrhAdbJ6AxS4u9TEYrFyRLYsDvXw6TXKp4JaFftvJVKvowh8Qgm8DCdn9bfFSNiB5XtA",
  "key26": "VcwCNyUkfdabkKxFuTEpQAQ6Z2ZbFwuZCgAHzSaXjHxV78ZHVtuaTBRuNswuMniPS3BwbN1jaM3jMQSde8dZqMt",
  "key27": "3YYuJDk7MdQuFunjq7S3ZC7GNDNHKjzQaFxVwVG3tUVyQN39WzrZhoxVFBPFo8fXpsNXTyuDJsDyB5vNdjyxPnnQ",
  "key28": "UtFBpRAQwDReguriCevrystf5D3sM7HBmGqJnRsvUYDuzcmva2FvQ6ambhLxX1HLobucqCJ2397ZFuhMo8hvLYh",
  "key29": "3JFDH8R49mKuN5FC4eHRvHy6zV94yAcmZD5gVjcWdFqgZabkPoD77kWx5D5yr8QxpLiSRrbv8BuWaa2PC39NwWq4",
  "key30": "svJw49z2kfzsspBf2B6jEk62WYXFP3XgjKqXjffuMzEbLJcZuVuFVyiEAfGte26ZQVnCojedaJJJGy7ZLB32dqV",
  "key31": "2H6f2VjRMSNgfNP1GTbaEPhx2Q4SnmHnHyvjCq7S4xR6dpjTUCUpfAY7uskVV6APcgs5dtjS8rCeVM6SYH6qH8xG",
  "key32": "24TPcrxG4nBY7Q8D53kS9SMopmNz1uiJj1isWNRYyELM5VdWyeLUMLNmeWAUeyiP6SV1tZVLfGBdjzxyidDGkip7",
  "key33": "sJuLzHMSEF8k77pG54vmsFSSUAo1dayK5A5WRB5Nvfx5U4GkLpTdbyfiet4Kw71UuWiuhykNVZ131yeXPuomRZG",
  "key34": "5RPMHgKjhd61mQK4mNEHZNLkNSuuEy2q3Cvsv1UVzGKfTtYq6b9mnq1PJZozxFhoQnGC4NAhHbL5B8LW1zJSet2w",
  "key35": "3UvYzHtX6tHBEATcpgZy4KBrMHxcaSQPzytii31LhE9qes9oh5Lc3BsK9HyCYRyuYyW5ZGPWV1cxYFYi8KRKw4AT",
  "key36": "4WsxM3ZsRg7raqHZaGVxJUpwvZS8wTzH864qLibrAQR3PDLL3XcXdA2SQMakiK6RrF1Q1pkfMWebY4mfWonGDAex",
  "key37": "4XytHPGggVfAmmjG1hLGUSKd56xawYm2hoKtGeBGmLgbFg1qjZVoyj7d6z79jYxuotTn9k7m6P3VZ9zAfmNMd64o",
  "key38": "2Lxbh6cmbHHg4Xp9krHKDtQnYQq81VxjMDndG4oEMoFmzLuRxspeWTFCtVXyzY6Kc2HfSDugU4wyRH9Gcc3f2KQZ",
  "key39": "2KdnD2Kk3t2KVibwG4QwyuXEAmBDRomEQFfJjdWmkbQqaREMDy7EyoTWY7KDwdopcH49Uqs8T9MsN638BSVY8DEe",
  "key40": "SS7G97NTqmeL2H7ec7qu4RaJXKSW3Qj2QkMM28at2bS8AmLyDoisS4hhhv22KVBKJkt3ZMSqSmxvLLDmWrje26R",
  "key41": "4VMMJ5hZeY8pfe1DhqzmXiW6AMr687pfcHF7KSfHpeLi3JB7gGKcXbViRv2xPJ1z8iiESSK42o6rs9steMq4bkEZ",
  "key42": "2PgjmRbzAJxmJXEzV4QSmRRNfhnKfzfCpjqdk45BhF9hGA2DuBfgkVbVwJZF7V4USpQRVdFVSepCkZu9bCcnbQyR",
  "key43": "4jAwDSz1AG7ckEEiLyQTGVJRHjE8SYPaiKvkkd2DiAcZ2gJ4XTcNJ7NEFBAUXdJgtYjRkMbTfahfkK6x5NoxdRd4",
  "key44": "343VxzvayGXHKwa1SfCSme2wdUkTrSBTfn1zQMmQywF5nimoLg1VXiAUJhrYg9T2etx4yEyNGxokR3E884ZyD1ZZ",
  "key45": "2e6vMhX2QAST74RSH6etSGnDHMXZaoryRL84m6nYFDg8V2Ej9rEPwJek6GXzcUDFYXNMXS4hffdzzXqD1k7uosbk",
  "key46": "3PffDG5Vms3DWHhSUJ61A9boR8U1ne9q4s4kMNXEc89fvJeASqDmLam6bKA5hQsnfyoMK1HCGfiV5xFeB1t3oRC8",
  "key47": "2YEw8vm7dLR2cp1xDZB3XJSqygNyt4aALtGSutVrJhL93xPeJSNbUVdqqSub7JSDovnYC2Pn7wFjjduWHbj6Z5kB"
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
