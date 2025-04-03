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
    "8846eRAU4iVyvDPvRncattdCsfmzbuzJyBVbQDXa3W3q5da2sbqUUu7PTkNnpzqBihC8w4oNRvi62REtUwx8aaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9DuCffGGEqWyQsHtvYp1ykv1KjgFbtXjcqyznyWbdCNVzQDYyrNGrFLy7vsin9TkZYT5vSzwciyrvWp8sFEnqa7",
  "key1": "5dNm7d2i6udBDhBLFvdRvK3LfpWAJMKY3gDsxShG3mrtkeW4MzP2VnyXS1gPbCZBuj9VPuRTQfBxtMGneZCdCBBK",
  "key2": "5D5wc69HqvP21piceEsAeFFBVzUbKdU53xYn4aYPgF8WDXVXZGuNBXt3sNTnDmUbh7UNwZyMr3GSUP5iCX88yA8m",
  "key3": "4V18aRgnM3zDpxmQiCECeqaYHEietd83hPGVXcgNV8DwH7cTRfpwKzTux4bRePCSZGYSy3abEnUbaLbSDSV1HBWd",
  "key4": "4zDA7bxEVka6VALQnvir58awsaM1CpnNR8FcMJChBa2Esu6X5QUAs67AQA1fxsJs4kWM29ZTQTLioJ3NBLE2US7k",
  "key5": "3ngbbifphb6HJyeQ3n9iER4ECJcHGHq4eoaHjDHd8553zyQ3qRyM4DBNey5WuCBnYAwpAcbcPWBnkDbkJgC5uRoS",
  "key6": "48HcbMLmysvTXcmcXJKdj3QaQurKdRJPmDtwEaC3qScNJv5vKTY2Kt65nUS4jtnmjkbygWqv8Cq5tr53q9pjArvq",
  "key7": "3CC678No18baf7cg8n73ZKg73CSqoLVRfvVpQvqKvHbmAAjmTH8G1qqdehNBbA4HECBswSajMVUVpmjLb4Hr8DmD",
  "key8": "4PsFsvLpELY7Vc3yNdvnQADimZDLY6GZCF2Hb19n3Uqfr7oBAkDuacHkn7TqMB2s8naMFH1CdPP2xCq7wA4DW8bM",
  "key9": "5KKTMeh5eKX27MBDWDAs71XVRcSLgnkRz56QEW5J64voeYKwita5YubUK9UihuqwedzT61zfKjeL37wLsApzhmLA",
  "key10": "qoqoSwZ1ZYqGuscFL3kCpJKAWMSiF1B3FBwHD5jB7kMQmgWZXeEt3X2zXtpafhEaCQSUfiRVNDRhRsthWRidY2e",
  "key11": "LMvp45BBhZwvsdi3b1YsSRjgP1dq6vVerFaSotU2pKpAMZdiR46tAjoozj4hJ9hVJgyb72PtXPBKbskfT2xE4z9",
  "key12": "33awXD9mELTBEXAFfMeW2A58yawAyoQF12H6sSSP7BTqSB9vAm7S2fZWkQn5UbKwZfN2g67KPjEX5F8N47aCzRB7",
  "key13": "3xqyrAmoYG8euuPrxV9nAqLbg8EBcYbNBGuZpivWK1fjkwfbCsecjZUzWB7pSych1Bx6kdjfoB3963mEGkNuGfKw",
  "key14": "2n8sZ7TjAMMMzjwg24VWG9ZzkmGuWzjvVQyYdRm79aroLVn9iM85JmNEMoJLPJNny8kYhcVKpgvenijt9ueM8GSA",
  "key15": "5GDB8rK3mqxkQXBgF86otUctPLTcS5bjDux4Q8rEhz97ba6jaJyM2NZv8HqhUWgmqJCWWZcG6cjhJcQLp9r1Mah8",
  "key16": "65Ho2aAkgLa7NUdYnfMeHnNKJ4ffAFPtZpQp4Kee5hLpRzVajgY5WpQjGQoYCHHE8xrXx5qpcKAfBZu92iRucCPQ",
  "key17": "25MdXw9J9JnseLq6i1uFHcphMoJW7omAP9RgfgVVZL2WAbYZPaAyJr2fvYFbBgmigRr5B8SapdBeYwhVwNvVCDcM",
  "key18": "21rumrrk2KmZFNShvBsfomG6AYu99ZtCgbEbumy98EJeCeqWQUa6zpp4hBST82nJfRuLbyvTzz3gd7ZgrJpuCj1e",
  "key19": "4HSg4zWSN7hcBxonyJxdcPfAAhJ4omrKrWK4mS2pFCp47194d4MgK3irYp31QhboqqvSgrzMJLK5igzLUFPUGHMq",
  "key20": "5AfJwut57qtvkCK8G3FyfVrNXfMQpKFgdc5iGgXW8UaG2tX8zGJUAYXRer9xeYWBWDZ3HgAXhSahR24woPWAWqx3",
  "key21": "yymHxapxr1bfo6kMXjJRBor8mw9mXYRnUSQp5jRqN2bg9fN9TgdeQqrssQug16bQSZNSCsTsqYbY9Fsbg6RGNqX",
  "key22": "ApQZwS86zHRyrAwD6D3Gs8HstUzrAS8JUSVaFbTyCLxvj7576Zqv3inW7Bzn735HzWhj9e22ydL7XjPgYN6KaqX",
  "key23": "4WBumgmeJQRqScT53tfnzFjekSvoaiWrFXRShQGvqfNrWZ6opBPpyXMzsY5msuLcVRk2xg4Myjfy7V563U6wjDcz",
  "key24": "RvEYnHkgNENrEgbDKixtUTLAZyPMpiQterCLC4CNK6qxy2QrhACemT7KCW2oTZcwTEgMcStsDPEjaR6wAvXybCv",
  "key25": "5JHVFLJC6NGachEcb4bwgRMzowXKx7SMetDdM3Ko7XwG3DhahoWUM8yyiGi4DFYstLsbZWMUQUFE8KEtfcxdPb6j",
  "key26": "532qcpgJaRoj3mXXwfbC4cYVUYzNqankbdW9MhMoF3aGfumUNov5bDUq25wJDBiQFFt6heLuJqQrYLfccGuXBcoM",
  "key27": "5Hkooe4a3fUD6m2rZCH53rGiuFYw7E1SCxX8K7eXLuEV32m5pkbmmnFmwax72UHDpB6TWyA61TjKwNQa1B7uxKPy",
  "key28": "5Eox2G3EycgTLprcZzXkJMGdwsWVykfBqmcQ9L9fbQm2VKoen95vpjiNu6hzSwp1qgVRqYLiroanJAkKxUGFUrRi",
  "key29": "3T9v9Yo4bKa4631YcmiuPFQDu94m6gnLJK9uyWMSY353D2vqpRSs8r8z3vYn9Bnh9Y1inoVpu3TNhCH82RqzrZhK",
  "key30": "43d2Qq1NhCqqjddzbMLuJp2fFrRZi4B7QQVc3qnPyTqk9AJXsaSBKD2bATSQzrvfksPGvR56CuzmYvoBVVRjKpLi",
  "key31": "4LWMvRhvBYjiEK7r6xWge6EWASwM3Y94ihDjuNxPWnL8oMu5BJEhJxcdw3CTW1wZwpU2QiLrUGkMHcx3zFGibiDW",
  "key32": "4S7huT9G9GJEDD2SdGm3g4H9RmaYKZa8YdmVwPbzvdzHUS6Jw6icp4wcacJ367FxVW66jU6upABvKdyfWBA1cVrm",
  "key33": "5LwV1dk4GFZdKGxvptVAU7Azo83QawpDv3XoJe24hghjaeQCtqBLYpr9XM8MXWQ35CejpZK81zZTyrkxvNyGmDjp",
  "key34": "44Q9yFU6iiZQo1h6xbS7HHEueHNUs2CKnoqVDWsYkf1BaDobNTTKGZXqYYCDeXEXy8BmyvhHpwJKSQBL6sDu2k7k",
  "key35": "5yuyWpa5QffoPFiGnXB6e1zL3ZPzBGN65KSZkc8TFDbnqNkzSJffaRxzqQTcdXJsxdwC7qWQwtbCK9qWK6nS7uct",
  "key36": "4aBuD7f88ozNmtveDTxw5Gj9xagSzEWwqzmUwfmXtZC4zK9ACKc4wXpND6KhF9q8bPGe2J6SZ4WjkNvQTmCRfgoJ",
  "key37": "2zAgioCfUGGWh9YkK5HGpNeXnEYD1NckcKJpYAX22FZ19og23i3MsC5PTjmmSem5HZdw6rPU6ETJKBD54yXXUZ77",
  "key38": "3PpPX6hNvEz5UPevt6B3XZCjCG9FZmhE31qRckDTMriy4agPDojtr5enF2KGCVfj2WHQCj6Wr9K2DpBKUfemaoYh",
  "key39": "5ReMroTJ9m7hbZV62g1akyb7Rza5BwRr9xWicXnVttYFzQSpb2HX82ZwvboMUxFYiv29TumhytoANtYTjyiEntJ8",
  "key40": "4Lix82qeQHcBEHheHvrByCiFCQ7P1QAzdarkmrxH16hegB1w8ncmvi1KNxkNDNizoLMoTnDze88qxhRxBZmBwBWe",
  "key41": "4ZVpkjofLFyu6YTkZxgh2pr9dBpkopwp8uQfDMBeDcwjTBsAipcPx2mxjxazjwaQU35nFR4WeNwbSe6fa2UFATRJ"
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
