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
    "4yCxc6XLcFo6SUHQt7eBKnCtcFdhi9TW2vphbaRjQHVAVPQYjmsgfwXaygNevLVf1eucdgCb66UWL2TSp1ZFZpKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XRRZ5htPEEgUZQcPgE146ihWR69DUXMLxT1LrZAQtBPmvW4Xnkm9t9P7jUEG95MdWeubxb7moX6GuSKyJRQJg1B",
  "key1": "R1kmFW1d8iKfKdFsXdzQCTgjvCRgJKgQsdNrtzShe6tUKN8EUePFNWwkQobpJnBhz6hKb1LKWhVtQK5pkXbzXJi",
  "key2": "4V5zf9eMypVT5rMCDJY4GkXBc4EqksAdehLGZbdXqKr8Rs6itDBq6QJ4EiBsJRkLdBPn9n1VMNR1TkEK5vBZNpZF",
  "key3": "5YwYQMgJJGGtTiyCx6JCh8iBszPJMegLkDdhYe43eEuCpWiikGYTWgcyi7xvxaonCdujejh8xzEhcebTpkLKMhy1",
  "key4": "21Qv8DxMXkw8xGQ2PRG8xnzwueLSCLyudHrTRe7dTSaJU7DA3evRCn6dMSdaDQCuUd8Jamt5kkLWsMQ1nBkPK6Hw",
  "key5": "2MwX6MY3QYemT4h9CH8AhqkAju5DzRjttXLqDt7FH7sdxzJwN34u7T8VyYkYBNiA6BU8XBmVLpanwTL6t9GtTELC",
  "key6": "28YAXVtpAzbE6dM3pcna2a4GHbv4dCo3NojAHf4kXHZ7fLGMGoQd9fJZotQGY5hWxfMA2n4iS5XunS5G4rjpZq8K",
  "key7": "3BHYmoCzc4Qb5LdCDR1VBJwBZ97hq2DXjUctZ7c57eHUBLwaxLdeGGCcJMgEPWWmhUwL2jQ78TELjpirL9i8o74Q",
  "key8": "2aLygjrshxoNgCH4Cz5SxzLEdyEsg6bJsuMW6DRRqcVegH9PyxkQpya43E81jY41uTZt9V4yX7oGrbmAgtwercyJ",
  "key9": "5GWJYoaZiTZXDNqU2vusFzFhV3eszqxbadmsfzJHYwM6Ev53txihvcUrWHKRHzvpn6Z5eMFRRZZwmj6mH1TR1vCh",
  "key10": "uU24EwyeGA2jWCjGUdRWjeGphLfpe44bvaaFuYTCY4cfnu2xYBcJ8uGZNoiTU3G9zT436HeWHU1EPtdifYC2qks",
  "key11": "535sjTS4iwjUVzGAgRaLBL9q8D56aBasfsmesJDBb6qdEGvVQx9eRqk7acZzzGsqvU1YpGG8ZeJaTzrVfNPHBzM2",
  "key12": "5Pw5U3dK6AwUF4SFNvij5A4s8c65LC17Cw6sp92DARK8v48GUKPHKR983Duia1YqkqEVr9LN9PXiLQciwkB4cXf8",
  "key13": "3LpwvR4r1t5dneUKmvJ2WHvQaKbRK7GMXXvcEu5qXzGassxJJkHZv8oVFJLyaxvEbF7psE5vakZ9ZoYtYV78TLcY",
  "key14": "4fY1Adw15yTDNGKjABXyLWvu75tGG15a19RqbwyZw7QBkFLLKcxyLRuZeWRdKCWdSfeKTG7pzFqRZiJXKxFZj2qX",
  "key15": "3KDW4vCAVtvPCjWGECzAAN2vXej6wYrpZ3D6KSK9FnqF4YcPFtvZ17TpseQsWyU5RM9Kf8QFYwkkyhfgTFr9rTu2",
  "key16": "2Axv129FNz49ea8gEFDEXHyAaqix56RMMkiT58xNoqNtq7XEnW12ULv93b6GXTqgzokvihWvHuBX4qCTG2eAcrjP",
  "key17": "5YNgUV4ULSTf6wLDHMBEBqjKoyDXSpD3GQD8w2fgCDtTTo4KmBDqVXp6Bod8YmV7bDTCZeXMMEL2QmWfKcWc6wKa",
  "key18": "2naCpfpsKGcFCmZS3pLH3MvpsJWPC8rNektJerjk3as8F7a1ZkewnG1qJ6NprR3JHe6eR2TDSAwLLSnVCsfR3nw8",
  "key19": "5nkPAV84ENcZLCjj9xVp4WEgmirPuYJr9hB7vfsim1GMUrPBcYLCEjVzx7RvU9v6CFxu4QjcBuWW9t939wbZu42r",
  "key20": "4Cy6ygF4eJjkyfWy9nvzvBtqN3qmiTWnkzbqoAosMrfJBxD5N4b5xuvJkip8K7xYte2R6L7S2uRE8fddjjzGuubb",
  "key21": "2cQxUSrmrC8CreeyGg3qnvyXeseKuXKjw42XfDDVongcSdGqRHS3DLjGg8p4s8cVTEqegEwxh7c7kToRvmQQVyxa",
  "key22": "cKKTT44scK2KuUmscNYxHnDJgHxRq9T6mEFMUpWNEkAJXv3fxWD66R2KPJVXVhkmQKPhpS73xVWVRxLiRhq5z9Q",
  "key23": "UkX3KYnkY288jeGRj3wXPNLLzmbCiU5XzHsH7mwaHfBrn34Ct7Gp79hGuvJJi2r9VAkgA6NB1mbQ4xMgdC3ahNz",
  "key24": "5artNLBjvim6xxTVx8XkfdAmE5sdgmPSFWKPYRBbjtQaeHeDku4rx9ru9wBBQkfCy8HsZYQzy6idPZZASuzHBpWs",
  "key25": "3GZ5xBKfnBrwzFmKZPbPjC4BwHDijapJmfK91mc5qNXmwWii5jPa7S5SLGTw8qvFXqJgunugwg2pwzfhd57f5uq9",
  "key26": "LAMrGEiKccmsTmw4YJGzUQzr3RPakPpg5gQ9BgwwFk2T6kUXsxjgs9B9kyLJX9yuxnGrRn2jhavQgfu93GBjBRk",
  "key27": "37hUiRchjQix36BKjLwg1yhWZwUB4TLgcdhVUJLzEuQ6tQXAQ2u2VkpUVcyFSmU38SPgjoNSCD1qkTbQewCsYyan",
  "key28": "5j6uuGNdzyRRfd7Zj3xxNev3BudW3aWkswzz5hUhD9XKaA3yVTKhw8b4Jf9yrRFpxxhnZskeegwthtzEj3rER3bc",
  "key29": "5wKNvuRnxevWRM88kv2xPjMrgurrxMeUR9k8kpMk6mepfWAJd6kZczJnCQsE33c79FxQMVzee4BzgNgPghHqgqcY",
  "key30": "21Nn9UZeCa3D7H7n5bTn91F5MSbbQQpSJBEwDcD1gg9bEqtzHADSysmRM6h8cEqa2JuMAqcuLVUqnB9YKU6AUmPo"
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
