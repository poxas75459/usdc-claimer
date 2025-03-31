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
    "4Kqf7SbnZbpC7ppZENe5Mj2qsLAhMdXgiXmzpwcT1B4nz5dMhTrNK17iFVoMtDhZcoxeft9HRWVJibyuLMVHDE4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vC6MS36FjCZZbfiZNLjNzX5i4NLSPhy5M4v18yjgdnnHv4iTpHWTnfkdi3D6F8P2paU7Z8VRCWa2S6jtvd1PTMA",
  "key1": "tagCiebwSdui3sKpYHoC4BTU5NfqndsHucbT6UUMpCsTnTYTV1Tns6dk7tc1FgW2hkKeUr86VacgdYDRitBYMW6",
  "key2": "JYuXLERGSYmqerjXeHjDzUDtAACgUe9HvvBvmjrmfFsfAYWE9597H84LJ1iCjhnnmfBYijiY5Y1TLtEJfTnFTj9",
  "key3": "5nQeKWkWjg5cgg9MLcapSBK8Eai13kU8kMMS1gnHc174B1zBCGtxkCLMGdjCgQg8BKAFRV6MFUFZYtm1Q96vcUvD",
  "key4": "5K5TVJFpFWyv8DPpiMLE6pFXzobRrSdbPxVNuMoT8qM3xZJGRzauq6nED6HZ3PYS882psAPUbPPa1pbXLT1vwavN",
  "key5": "39VtGAgFHrLSBb5dJQEYHwm1cn4Lpripd6jb4c8EAtsAkJPv8CZkjtFxZkn3GyippyhTA6j35EHSqARZVtVwV1Ea",
  "key6": "5UXYpJqvHSpyfMaN9skby7z3kfQ4LQRdFJ1xVvW1TnZW5ETo149F3REXxEuqXBYfoKq412SzPVfBXN9BdFYkNBkv",
  "key7": "o1qNuU2S4DLuY4oXDLRqTunAJh7wH6JtJUP5de2K6Z9gTymGqz5sxoqgzM6wNHJiaEpDVxbfiBrqa4UeQZrFySe",
  "key8": "3MKZu7uducX58o7ZTGGk5SvzonnfBqLA6tAcBXqm7WdVinKzHHNUox6VJGbogvRadBUfjYRmrB3QRj7Uc4Rc7jQY",
  "key9": "5bGBKxT1kFEjVxRvyyPwdHjYHyXsLgYgrs5oH9wxK4ocZzteyrGqsdKRG6pcWiCkW66Amh1ZKp8h4C1gm6xZq8qu",
  "key10": "292uPbTENYEmmV1oYqVjV5zoUR84WxhmBccoCckAFBHzbohy5xRqgH26AKt1F6JToxK9gpcZpcf77sXoQ1XdttmD",
  "key11": "42kUWm8qsg8wkpuxpJYSRrdqeCxtvp28q7SPrhyjHjqB8eV5PE4jxhHguzkGmKcVrj4Yr3bNznR4AdzFSn2XY1ci",
  "key12": "5bKXaaSjcJLSZ9YVtcKWtNKDnyvQ245gNU1SibppKahqHrgKG5hBLN6gGJmPa9HNtk5etBwdEMUppNdk31Q5kEsC",
  "key13": "2CxViVnuByZkGTx9Mn6iv5eaLWTGjPCsew1QaAPz7YCK7RnrwTpN4agwEBrZJWkTP2XSLri7JjuMUpsY6Q27G9m4",
  "key14": "3XqQxbsRaqxo3aPPw5BC4rLdqujRBpgu7xaoENdeyNqjnMuZowkBFYBfXwKBdV2hG5SFhdFyzbYPjonu23FinFAB",
  "key15": "vSEDsE61itEXmTx3cKASMUgL5nfF2RzgMHcGzTBToH2NHQWWqzyGttdYkk51cUi1e9KamKVfS6F4W93zgRfvojg",
  "key16": "4xDX3wcKVcPqZSSKkAxZqDARvGyBVhbK9H2DLfBu964eq86ihmye1PEqhQdbAMG3vDz7aZuKHdVndtjFMCywQNZA",
  "key17": "3J9UvoFzfYgzyBf2DWNsYRxENMaNgqyVzBXZnNN6jPR7PW1w5CRqYwExd8qhecmuhHzudrjWtHmyH9p95QEDjrGu",
  "key18": "28kGdD2VxnmFRFwNPFvepZkzNaX1Dy2PDGKDk8TxXXa7wQp9JG72ShHZ2a6neb4vbcjU4zdcxiAPcCdAVfv7CZoC",
  "key19": "5GW8RqkY9dKLJdozccSLdLVLPa76Q8Y799zjo1zpN3N4qFwae47hnzxAsYEuJ5xApH9wfzqb7AqygonLuymR2H8P",
  "key20": "5kosKt9S2qnig9phQi9x7uvAZAf4S1JLAsqkdEuz7A5rtextbj9pt4N7QATKupL4HKHDQDyt6FpqR4UunxrXWSf9",
  "key21": "uzfx2BAQL6QieRmx2eBYdwMVN9Ft9S7EJbtkCLgdgdBsEKA2WexfaLyGgPqNQjARyzX8QqvaBWT4L8ZhHrG82vT",
  "key22": "2hBBtdwUqRHqQnSbfyR4odh5uMiMvUc8chNNith27up2hRbCEH7vmQKWKjARh15dSH9UwiPv1i4HoHCKGrWkPci3",
  "key23": "5vvhnA9GiZP5t1An7ErVyS6pcrcyjKxBy7tRXoRGmNR5qCct1KvK64bpvJLuzTVdYpUKmrYMtmTNYpW4zvCTrNiC",
  "key24": "4YKxr69mDEg4pH1Fw2fiT7uAA5pXGUcTUhrAVfh2mZBD9XFVAupJAE927vGnnKcB6Q7G29sRh6qmg6GF967EcJ2Y",
  "key25": "22EKqMRWKLipwVTBGQuw5tMznTRmDH9nxME3zVo5Eze6dX6HZ7XfGxHsk5pRtFPZVnkRpXZh5ChAhDZpRmei7CD5",
  "key26": "3rc3qRM2qx85YCkfri8qfBKLnbHkzDLfWiG6x8MaMRrVZcCsr3iSRqjs8pE6XGyK86vA75kTeHGoFzrm9MVxf4qu",
  "key27": "fLjvzTaz2qzegQLyZJxJcXESMr29B41DyWubgiwyUTDKTVoza9bBsKX7jsquTeRoD3FcihWzzQ5ruA2eZHwo4Ne",
  "key28": "VwdGsb55KC9GpTWtQLW3cco5Sxqdd9AEFnE29DNBisXMF3e9PiHpARtzM4EQbvJFyQVvP5cHkCcLxsXFLBumr8x",
  "key29": "46vDgumecrRnXnDqDRHs8Qvbrcur8qiEh32dnQzAQAeRmvtAqajf4315Fm1Qu6KK5LZwFKUXgCThMmvenpwgGSek",
  "key30": "55Drb2JSZZE3g9vfbGE6FG749wUPuWUTT33tQZDv7x3n6iwbcb68K9ERBrPAG6C55nSzu6eUfSDkz9Eihvk1WCxM",
  "key31": "48yYwhuxk86immXfkPm41VdV9C1faiT4sJTbrwTaptYNPFLnPauDMZ2HUZHXqtEmDEb8k83QSR5tuhS8ZK7TozVR",
  "key32": "3FqKFujdnD6T1ZpT5awHj2W1hMw5eD1sZSoufCmcyj22ttP8GaKoCSmAzMJHg4iJehB59QhJycYAaitwLpKnrbvp",
  "key33": "3YdnSVkrXeMkmsemYuVSqBYKkZdwbVkBPLXoKSacv7qgBKAkXghQsRNPM3sS68wF4a1F9PDKVpyZKebaTxqeu8nQ",
  "key34": "4K2Afwfymk5XABX5paqTACE3beqbTCjvojuW3B4vx2q4Ac9zXrL7Pt4VLY9SYC2BboBoM9vuK2dV7TkkqfJxLwp8",
  "key35": "3F19zeSufxXGvrTZXEiUvxXxFk8P3vyvAZeSxwzRxt3D6UZV8AUhXDLM1hE7fmMHJRXNNhoM2vSftM3X8cmQvvfP",
  "key36": "3GCyrQ5CvQBn5XjaQSMzToNG2quFH6iWtHUNEiprKHDFT5R1nSiX4kedCjFKoETouf6vsiFfjzutEBD5Y5vPPhCL",
  "key37": "3Pmox4AVnG7yCAt3G7WwqJCoDcyFjQ3Q9M713AcCzZqcpcUMiJS1czC9Neix4hg8kF3HX7AEuuRwMbrwzbY5ToAy",
  "key38": "4uTq8NKKEoZ1cWQhq2nh4MJx5fCfKRvjfD8bdg9rnxBcfJ4kjAuG7ZQA4Ee5JNZQB4qmyHXD1bpaH7YNQmFniuLV",
  "key39": "5ssNvzL1QKSHyPddCZzyFrVTarywcVwwJQJo1ANtHFHjs9ofdM6CkDQSBQe1dGpqgPyNpBMMoWxw9JyRpVBKVs7k",
  "key40": "5Ri6UWyumatn2bEts9WVjYH52pMVpVNmTj782xndMpcim7vfvG9D2YyiLEBh9cLoBFYVFnBNWq8HmYNUUpRfhZv6",
  "key41": "3dBbYBoN4mww6pJmfMSnmQk2xa6Dzfkq3YKE1wj6Gv8A1Q2QjdtGF1vBL5hqgvjkM2g4g3XYkQJ6AZDUHAe8SUnZ",
  "key42": "2e74yN2nLnmgZhKtaUjqNRnpmV7U2jwcM4rN2FwQcQQg3p2fwucmyuc7CP3p88jY3ijaejxr6hrKrsTg7RkYQReS",
  "key43": "3UpLsLXd3nQSqT1z3crS1FvFPfMms4QZH2gKAoKba1NUW14XVsH9HnoFVNFpu1rAEZjsxnb6q9HLxNcsbe7BvobX"
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
