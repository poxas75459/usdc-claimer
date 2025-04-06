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
    "YBweu1oCZGEf9MHEq1aMCfhDqbuJsSh8KwKbCUxbFwuoivwW7tFKd6pHw4ruAs1tjnTrwEzaUkY9VsRQciC5hC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p5PXQ1H2nKwuiQhURtvu5sHjHMgMw55JwDcuvKQRNFrtzy3yjmBrX36E7deWWvRs1RsfkZfZvyTDvtHsfTQi2d6",
  "key1": "47hRhv5hbwwDDM25gBqyzibRUV7KRwWNsktX7XrbPsZ4TKSrAK9zj7y4ihZucTEkq8LvfCFk5XFYrgT4X14WThbR",
  "key2": "fJmS5sYgLBuPZwmmbXPKcX1tmkMfJRekkW3utc2fjPckurPhJ3K9kXQfcZQ38N6QntMSDDS8by57G3qq6jUvyHr",
  "key3": "5nRaT94Ti8xsrathzEDa7M4P6XcixCC7PZCSX8pWNS974ZhEkXSj2CyGt5zNj68ua6BzaMtoCbFsEKXwhQFHaJMa",
  "key4": "5JkRd42RWnzepokWkyc4xUdXLksVvAGLsLi7Fww2YzpQdK4msPvYKco1fG6MxfGDkWrJMcjDpTTh7JwfZciyubsu",
  "key5": "2bSA5jhBE1wGe4qt9Ngx6SPoRMS1Ct9NgcR9cSBS3Piw7R8Gt11CKW9B4LKBgTvdCRkaZRxHFePu7wg7DBnhPqRa",
  "key6": "bUFsTr1CCHDmkWUKQxe4q8kVGVrKy91AYgNawCbdtTncWfWJSpbXNnhs7g112mct3AqPrdAmfZrX6MiZnnyTzn7",
  "key7": "4W94vKN98D9KDxXs3XY1gFUi1dC24Co9PAdamoHUPAHSaAmzNXS4Gh85MwaQ5dCKqqGWYsHwoXpxT7NwFQhnUhhu",
  "key8": "4xR6SdvpRrx9G1bJrQe7q96swp738FzkUcgDysvJZQkLckLqaWVrpVngZusDZ11E41xDSWBLeyNaoaTpPZ8DAWca",
  "key9": "3gEtU1Zur6sht2UJqPdvLxu4rRqbg1TNuFGqBQV1h9YLwbpf9ivfbVpBhvqmZKgtzjJ351sLTtFVEKrzvraw3tFw",
  "key10": "31uXjSHuH9A3zjxdY6qj87FsJ6o4aWPnGPUzADjnuDUZ33kGEF67U7ETaXsZDWUQh7EQwKzdWh4fJGiPUX3uK7Ld",
  "key11": "3CJHvmmSmpXaSXV9YTUmFSJij9YRUjrePwZyKUMQCn5nQaNSAwr52dJcJEY24jhWvrhPdKYDgboBrXhk36VNB2pU",
  "key12": "4gZRnY1mDZxF5MmFspTXT2fJwLfsDZqeVeh9FFAGAfDuQoYmrFg9dAH5hsnFB9LbyPppw1Lf1DQYtUSHnpq9YDsW",
  "key13": "4QQrgFMSdxcLBPAAQRkNRyWTphPBsFTvmvrTLxxCsPVQ9YYBM564FEDAGSx2y8ziGf4j5zZxdKRd5bgLi5GLKxES",
  "key14": "5FvTBYjeSQQeBvhMU23bqVQBapg3Nna9qfyQwxcjxLuYL3yhwgDVZ3qFxDvY9e79yCSRyVjcRMtFW2g8LGcKm6oX",
  "key15": "4qQwk1sGHsv73h7dVrBjAXZMYwtHiHf66VuShUPVR9fVxWdruNyyUgY1XvTEYt2ApdChMn9ej49HiQdMTtYvpZam",
  "key16": "2xyDFnTnYKZ8DG61Y5NEm64p371qxQquem8cfN5fbrnZui9DpLwT89wp4L7Hd5U9sMMxNezpH4kYUnaHHAwkUix7",
  "key17": "2jFdYZGrDXss7F76b2reVDaPa4RdR44eQYowQwbWwpDKnPfWqBghH65GfmbgLERz7B7BdzZkUawMjjGYwECurFqj",
  "key18": "3tUyD6bhQ88Cd1NhsD5jCLuXP5q46PzGeztk6FyTPuQpx6Ew6Mw4SuomLaxqbFBfH6EqEqRSEFy2WFjz24UVPpWN",
  "key19": "4ZYYh4oiN5NZpqNANdpbuFFPmp5x1pbHqiNtb96j7nxc3bXbKJQNvVk1QTMvx8osAMVn5xGVeHUpoj1nGFB2fjj5",
  "key20": "5VbM8RjkbzUsykhNWvvC2d6xMMgPqCrhXYgDQcRq6z19NqBzdJwMxiomCSxxF7ozFJMYdyY6F1YXER8gQRL5VUHN",
  "key21": "2NKUMUobe5cegr1WcEotxWHbWfpoAgPxiXyL4Jwuy5shy6eA69eKeCzaKQwRt7euCs7FEn69MgzaqmpLZdRsiN6c",
  "key22": "b2gMzSEzAFBqtTWUfXvfmD3h3Wva9x1W1ENhxfyAX7xYeUg35Y2TuTPnUCMLZQkRiK6ozg4eAxFzemxBgZJe271",
  "key23": "dguQowd1BxjeTGhSbLJJvP5SSbpLuyav5KQ1w1e4Vxw9iG9iVUzx6MChBG86AP3892y8ioVyxCLJJnghKzo83cr",
  "key24": "4LTj5wprwY7ztNpLs2w781gjdrkfdnnUWprrNjpTHkJy4S8XTNm84SAVoGJY51d2dheYPbE2ZYgv8jpzAnfa3SFM",
  "key25": "3ZmJFWQNpEgivHzPtDUCW6YEmQxVaaoW7ov1CtqT1Z5exa2NF3CZaNrJyMVS75SvKugLFiRso9yUo2rd5At4xZBa",
  "key26": "48v4AyiU7Hb1t8APJLHNhDFAtMHRiLu9Cy9BQH1q4hrWqbTKdyLpi4VinEfuHXg8M8dMAFqKNnDSakVTZQa8wkQv",
  "key27": "heHXZscsEbko53546JXpSSS4MTr2oXoUT34vDZ3Sxno676MYV6nwLbYWsjcxQneToApkyrZ4jpyuWXHM19YLhBd",
  "key28": "wX9uthCESLPMW6Lt8JouRkfwNjMbma8quR44HS2ZYWBNFAiRh1H9g119tT2MhWrnEARReFp2vb9iXMxqfSiyNuD",
  "key29": "gZLdCPRtTdbmZszZ8yA6jYqTcs3WFcQZLXAzQj4wnEJNeuPymnmcp2GQapyhPMAh71DdMgk6Fsu2xf8z5LYPfab",
  "key30": "33K65zMfkHoxpmLX4pnhrefjbpTAxaMaCgsmXmhMTg9yg23MtsDEEgBiQpiajkxTcWPB4AVqKMcbhVgXdD6kCF72",
  "key31": "2j1F5NbQSXQCwMztEk36VhZqSk5nHm5MHa7syoD2dNvuuDCgNPbjrEFDb5jQWLwK8vczDGyoJPPpxZP64WrjjpKw",
  "key32": "5REz3Mqg86NhNHe39FjuWQKN47TANi93Zpj2CsBwkSYZSahLfBFnphMvwrUM8Qfg1ZJYnvWj3CpZ1f9gt5cPY83R",
  "key33": "363gDEVSaFXF1GPBSKFKWL88E9K3RJ3HAPvep9g66kAzjSJra2wbRwbgt5Huqj4xXbbbUdGSVSR8bezAdpFCjTxs",
  "key34": "3UWdkB9a8hDiYHD6fLo425RRnkVLuH7Q1tNmaxgprM7XxfexPGXd7hhLyVpTPkLbRD2nDose6jCQBQQP9zoPSt4B",
  "key35": "5BX2HKmwCid3Cpq39NKWQrkpyeas4NoppYyMFQXbkgQ2vzQwn1P8hgcz1493H2wKcTh8bPfyxZMVr52WZCD1679s"
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
