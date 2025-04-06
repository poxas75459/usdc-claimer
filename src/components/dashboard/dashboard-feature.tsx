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
    "2BsiZYmYAdW439cnJ1vQMY1riVis77XyrGCsRPVJ66roGaBygkFvGBRUjcykDKNPTJbemX66WZNGu9n4ib5TyVS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x9QPP4eRAQqcP7tCpcHMpB2wpNZLz9HU7YYsYLaiL2vbA9x7NaEasY4VqCUESPE3X5xgn9yqGAwRjmYWx1GRNKN",
  "key1": "29PBt7WXWYG9RFLDyfbdgsPyUU8Tinhcu8mi3CGia1sAs27GGW75Z71WAbYgSsGFVR5G65KPvxuj9HRq36ro8FiA",
  "key2": "3fVELFdyCL3KRKSrcrH6jLr1i11z4iz3JSmeBdufiD7haug7ZCMxH46GGYyxsXYv4ZiyD3Wm4KAQckiT4YjPhPCj",
  "key3": "T6D2PqyhpvJEzg85JH9iHNzVQyUcPP1At3Z5VXzzXeEw4K453XzhtbkkM59cKNjvTEtZDPPzr5Uw2orxaKiaj3W",
  "key4": "3F1jtv3Ej8VsfNfbpqUmiDBbBAqfBtxxdwnhbsw2CKSLDZemdN7ivYS7YSSeJN2siMaA1QdkVEqUxsM9NuQirpad",
  "key5": "28tEmL9qjsFsqs2gof65a6BVpZQ8kGL8Gs3iZrKnwL3sf5bXr5GE3eTXT4956qN8kGgpQuiAcXgu5maE6F7yLfxF",
  "key6": "3fa5W3kTzjhPF1pjvGfeUNJ7EAGbEWt58rZGHGMCrUuuYJHxwnWwkhQQKNHRfCNSvBpgNghFZfMCYjiQoUuecwWr",
  "key7": "2XkCuGevtjFVWjS2Byz6meJWVAKQJmHTbPSQLP48rWmfXVXr1jBVAT7i94SWxvJ4wHYwHRVDcne7DBUXvxvTN7ZF",
  "key8": "2ywwN9er7NMYYGTqNWMWbjQyErwpkzLw24FkidTF1XgxkJ4eWRZLpUr1PSdqUXKTjJVwEAEZrNPFmjvSFFGuLBrv",
  "key9": "5X52RHmbuG3yTiryep8sAMRZUVot3BMwpnVYqK6ABLx7uYqr8PFoeRA6K7WCNVAAGvLbdQuzCSEXNC2Ch8EFB2Pk",
  "key10": "5e9EFow1M3dQW3Yr7YuwjnrgBL6WBiqHHGAC6SUHDo5eWnsdLgRzQxwNaC6MBNnj6kTLWgPK2UZ3z6tYo1yaf1qc",
  "key11": "3n1NRPErzu6LBDXWaacQgbnU1XQ8jRm9pMF7R8k1sBH6dfWnav76Z7aphdKNQ7ADatw77YcJUA7wP9C6fLbfTgdC",
  "key12": "3GG6Rc7PPKz8vsyR1RwuaWf86BvJg9YZkuRdoChCjmiFWC4Xvb4rdegXF1bpJYopCkUuksXqnbCJuZf3bMjBrxLy",
  "key13": "EihdzmvVoGiZiMMMq5SoAPPhTmzxkF1fZRcoEawxJxsFrbPtPCmpCQfsQCnEri9gj4qdKxQhbp6MC15cmH14Bor",
  "key14": "35aQW97zA6bjsN4AaVcMtPn5A3gdZEWJtarKBBXdYwqVS8bkQgX53Zv2kUxXUb8BLvyjziaxGGwJmKWuUzRjU9qB",
  "key15": "2fVFB1gof9FLMurvQk2FmiRZvSUFBAZyfwkVgsnL3tDYH9EoWjTgv6WkjqeDr2sDDSy4ngUwbNJ8d3X1MQBJhkGp",
  "key16": "5exH7oKa3pmAwAGdwYr6oVor1CeHZLVYXGAk3NqVt9wrUs7SuNKPUDYSHZYsg4H14DCVXm6yiK54gKbJvASwZrNe",
  "key17": "2wrGwx7mvmKNm9Pmwcnk8FjKKhNRxJRCZyk212d9JFWiiBqEE3AzN6Gb62buyuV24dm49vLYZsaJpBA3amkMiY1U",
  "key18": "6zJsq92ckHngTnN2LHrNiSCGdfbmeNPwtDxkkGsLASvRudhf8t4bKLX5E9DNrwj7vSjnpV2nFZNqyNh8WkmFxjZ",
  "key19": "3nSB56TKowuViUFqzT7Pnf2NjpJ6NuERNfaR2BcbmJWN7chCoSYZawkqktSMQCYwMPMfk3dDfKs6tbjFkyhKSJaU",
  "key20": "4ZA9WrkwGsN9y25M1QAf4KCiFb6WYNqTPLywC57B8HnU7bhQBaHEMUfSZjzbNrvdiSHeEkbARFv7KwVw9pTsFhnn",
  "key21": "3Zp243HMaTNJe2tdWz7SLjk28cj3KkrE4U4qwsJe7DLkXcTk8NHkSwbqgKgUonYxXghrAksdbSSFxyidZMJM9BjD",
  "key22": "h1CU2VrrkCE6qZU9L39JgDR4zJiz4CwD5RpxgxbXABwXNMAR9Rudun3ucDkhH1iVAP9uXoStA9TgUFDGP34Yzyv",
  "key23": "2nEadsr3saNMMsm5scpHZpERJ9VJVL9FEZ8yJSiVyeKj3PQCq53MJxjSEGJvnTvfAAAWC34uLk7qhdz9jeWqC4cz",
  "key24": "gS9VYwWoS2dqV4kPaCnzF34WQLVh746iqX5HHwKcfMf5YKNahR4FPGpEEEdBZ3r5CzoQnkNVTdRQd1tDaPSnEiB",
  "key25": "5Pj52fK3E9AqpkfGRGiUnFmwnWBsxN7BZpMCHWmVNFA3c6nfPSGsVmhmqT1x6XfTfEhF1bTdJd6UBGnATnZDY5r6",
  "key26": "2WwCbUP3LbEReRCtpXPZtq32bEEPf2rfQem9RK6uwmEWcGCRSWWsunLsthETSfwmLg3HeF1cGMFND1sR91BkybFb",
  "key27": "3ntXUEV3NYfypQrZ99RZh2frSqP9D2yKDuyv7y18s4JDyquvwXMaGfgrL3Nt35322jUyRTuC7zbzJRxMra6dY3N6",
  "key28": "4hgtDb4gQ4Wn3krjndeURwPYAwernAEu3hfX24wcyvJAgrfNr6QZ9cGPq27YpKKKXByEJsphcECAe5i7F1piyX93",
  "key29": "5SN7AhusGKgpQGJFaM6peAhGQbLtLUTGPF2rXjFZVjksS1zm4zXuFXFCxRdBoVSujDvGndKHvmasqRRcGmsXEFt2",
  "key30": "2FFcZ2gishn2Lv6CEn7Czi52zX26TzoJHZ23C2K5hkjhwMEF6u9n7BbGNXn2qfWr6S51DLd1V4gNt6oDmQHW3ao4",
  "key31": "2aKhduntDg8xqgRgcA4QhMcHBimm1BZAHeGPthxgUhsrgf4KWMQVn3PVes7y8dUCapKFR1s8YVJrNWw7DZPkKs4R",
  "key32": "3iTpoU8uSCfrnStFFFVrK6sYy6wAdAza8L7gA2yyZuHVD8KNh7Mo5xbTenmJUocdwsv6ZNrk3EoEj6bDpLvYYorJ",
  "key33": "5PBFiY1TLCViZSAS3vpuhnvz5GPfy4hoQM4y7V2W5XXKBL8SLmdzN1ApUr2WJrHqjAqE4spAE1ZrR5QT4fUtFumP",
  "key34": "5uAMAdwFwiWa7XG6TudUzk63bQtsoenEcL66hYSgVoJvJzR5JfMpo3NSxuAvmWJ282NiR7Sf6bPgsY79RYvMR9dG",
  "key35": "NHskxBdE57B6bC51kFmWmbDPJZ838Gaq943nJ7w5RZjRdt2qADwTHdnPiSdjtAiopULJj4vE7NYdVs6kn23nq8v"
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
