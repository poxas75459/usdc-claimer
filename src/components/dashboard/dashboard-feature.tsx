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
    "FNMDXuwYvcHe64Rg2AaRRhTpo6kyhANgsAwoSsB7WRMMEUbkRzq7kqzpf5KpX9Ephn7UmHwKdxGszvUx71a46vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p3WQPgMsKuAKu8mGziSWr7xcS72oPMtaAE2Z43DjunMEWi94WX3LBsrixmYuH3EKqUETPVgPqTmh3HjmX66ohTf",
  "key1": "4rtKpjVGToT2kBLdu23QKUrhGzLJWT9HFPsPGGX4DYLpzJHi6qWMThszzaZYD7J2tWaKxzR2yGERL9SxQwAgkxFF",
  "key2": "3MJZ6NB4aFF4oWpEKXY9QZj7Uj43F9WhyDv6skPYYVcnTiUXF7BeaxMHtRhBMcTL64cJBFrCyKU6Mm5sdtpHQaGs",
  "key3": "b5Kr6vAt8T1F8MjzuByXYXzAj3EgdNukWYWXyX5y4XCJ9cKXjcaxPoZAT2C6uzC5ZcCdtJC363x6HqHGQ95ykkt",
  "key4": "3vKKK4giegz2o346F4LS7xMfUFbwM2D5NTt8s9TCSu9wuBugrMJRwkqvWoi7Bs7HXousAAA4Jxt6UqT89Pn1FmJi",
  "key5": "4kyegQWnLPJdj7B7EsMpoaAsSdsHMEH98cmq1G54GM4Dmyw7msmrYi1TcZNJs2Q9RhTkCQkKWRU1XE9TMSNo1CKW",
  "key6": "2Sr7e2NpvNDdvGmFNfDu9s4FF4AXLgVtYheKqzPCNAARN9ZJrTXKHbkYycVRu18UA3VURzLz8cwC7KrTGLPimpbq",
  "key7": "4HTEyKddBJ5rDStgUWRjQwKNbNzsYTQgeAyPpwk2bNvTgVXAxJwEw7qHx6yJCRvZN7SoJg3DnKoLU8KxtNq42ump",
  "key8": "5Cq2rC1Z2NVJQx7K8fX9mR1gTANdxCRQWqHw16M2XZuAwEPhR45QGJ4JTVCcXh6gQXv6H9Bd2VFhMUUmB7teB22N",
  "key9": "3RGnLTs34mSUQZuFKjK4z4euDYA2ABZMdEKz67a38N16SD31hdCdo3ePqx27u8K213JVGgb29YjoxyVnxLizsQUJ",
  "key10": "MLiZAT6m5eNRcg3A5GggP7iqT9tEPspohHi1XScJrYS4BgNE2dEx5Q4HPtYhNKRGxixj3iCgmqVjt9DaF2Bau4o",
  "key11": "3o8GArjaK6Nd8QPSZP5chci93D1axFRFbyMFu5J3KsM3MvrybNFh9W6NrrHFKKTNRCJyEivqUy5kQwF9N66kGvTs",
  "key12": "4P9unP6X3UcLJUoFtGSjhZM6f69azZtQvZxX76eCpyPZsyPW13e5bM1LKBnZExw6UdTX4LrJK3Kxj4UrbVfkykgW",
  "key13": "UdEsEgZYLmXYAvhZq3xbD1xZuU5dXi17ufgAhfsd6wyZ1kfK4anYs7nLn9e9rf9kR5Wi6vktbrrpoVpCh6ujrd6",
  "key14": "2cCSoiCB2u83UohMcrE23UCCL5oFFriwestosWzFNURoJXvdcvD7LVCys2Hvyd9rUzVyFScQ2ASJy7aTaE3QFPnk",
  "key15": "3fFaKLXWaaadcUFjdkzw7pywSSBQrfEWGCXrLmDDeNM8m8gA4xvDu7Xnziz2NXo2V9ArQHYUUfhFmg8yGF8uJs75",
  "key16": "24jN2dy9T3QpGAFsxrkYLRkH2X6nCFBXJUJ7oVyGtiuaYUMak4XT3E4a7vvZTQcjALuMM9CXqgGUrLv92MpDnRYh",
  "key17": "QHbDsStdUUyW3fVGbSochYYhVuCZhgaXKKbVmXznPxdtZwQ4H8PdbqRvLUjpcyJsr1Gk5f6WZz9pWPd6tyZqkZM",
  "key18": "5MZb9htx1M1gRu9eq7Wa4UHMkPJZu69zDPoBcMMC37WodMzCyYQCkYmi48m3enkTKQopN4d9GzYzN7dfEBr3Pb5W",
  "key19": "4R1xZLguPhH9uKbxd1tVHhRXoTESx7z8MQ4AuRgtzVQNUq5Yugc4uWmpczheJnJsgymut9rjzPtRCGE9bHb2XP86",
  "key20": "2sPtXyWeC7ENKM9bPB2NiWdKShbmHbACpys9Lf8JRSxbdUQfLAWyZ4RgQxtntYUhmihNLvfVXZAA6fTfdCmXzpCr",
  "key21": "4pDhV67JVLWcdMu6kbLn9gEvn5e2AuVP7j4zUdsTTYtHAR2F9bSMZYC14j5aQVF1scf9GoZx28A3cS3Z5T1Pxpti",
  "key22": "2cnosqpx2SmWWEGrJ6sqJc5HQaA2iKhGtsFj6Mqrz9K7mjDQAw9kruScMx1hfapXjMbkG7s61Xc58beVHNCSVie8",
  "key23": "5APQ4dGbpN8zagWBzhmrygRekAkLyvLGZ6Hyw8HvrgbEYBDsKpXFJBce45JLb1TUqpLoRUCcHJ7H4tzCkv3PnRqe",
  "key24": "kdyCke45YsqEjJxpkwphnmJThpFjSeLekD7cnwv2feMyfK4c9xB6Cqqk43styAKUQXAsWCMbhZDuBf97dKr9M81",
  "key25": "4mmMMURBjS6H4Sa1Y6sLnQ5TU5QKYjKapd1z1FBfbAwSNmsm6GrNQe2YNqsUi6JqLpawpYC1mszecQGPCT9Z9AEQ",
  "key26": "2rwfBn6sKVrmqVwbcYkbpM3wRfui54LDXv93r2SvKNduMKC4x9WmVSAnJ1ACP6SuQHbNM2Aj3ekvbKE6rEDKmZU3",
  "key27": "5Bq65xRQ5FGZ6EYkJynKfbq9gU7gdMq11zJuVGJSh3twzdrn7q8gbcoFHUw1xw6YB644ZP5xNzrBRqRCXFSU78gw",
  "key28": "44UqxWVLX9YEYCTq3W4BMzZqvrrhyW5MDV7hRotqaPfL6B9Yu1jUNcacTq2REEgxy4o2eb29ymo8cS9b5gdG9Q8a",
  "key29": "2gkfwLqpiwKE88na9E6mF8rzQB5SmxqrW6eMGp7wM9vSPT9b1PzrXaznkiH6fxe2pj9rwVigm1ToJwW382oHhfFM",
  "key30": "4nzwrLBWMHCbZKFyuAB4pTATGQxpRoRb8zsRBfuA93KA36XSh6yXMP1VXrGr7gh2S1jVJHaQmZfZ3f7Ny455zEWJ",
  "key31": "3ixa3yvCrJ5A2imLUjqjRpanBgrSBUrpXXWZSxLbD26nQG8fxE5YEavgYCXyzxXZBgmcNnCWyJ5rtTNLPaxKVZmz",
  "key32": "4aY8gA9gRHuXfwozyAWhW4rBoLHaNawa83qhp52M75fWjPXDAVGBixWFvUUfcPtg9h6HEYYrWZG7puyZGwshgGST",
  "key33": "481NS3inomMf3JYKAeKtZVu9ndUefbWN9Ykdz9cYndKkucKbeSNguWh1ashwU5bPZL4R1fajoBrANnJgp7ZywR1e",
  "key34": "5BomkLpkCPJtm7os68WpDRNnnZDbE6j1T6Dz4RnnQGh99YWfd3ZvX9g7xRVYrjyXu4W3HzmdnCGrBEaZyZVf4jrd",
  "key35": "4Y4uLmRbqfD21gMAhDubCG8p4ZUGFe7cpiE46VVvypDMgb9VppCbnNPU63jDUC3macJaNxs6EzTMEpconN5hNSrp",
  "key36": "3erwpa55r2cYwmnhUKDjBqqwVDbZzyPMJReA9VEENZPyv6P3CC8xhTY9W2psU3bJfLWBJ2pCikToq8aqSBBBWE3x",
  "key37": "56EfgsxWqqxAGdQoP47SCNH9fgmTgJTLAFv5XqQ2hChRqoAXrk1jJ5mLNrhn9cUeSpoyyJmE8tBDLGMQMdsySNct",
  "key38": "3gCXxFShDUB5V9rNi8aYKV4yNaZSw2HhK4wFmQi6ff1hoWi8YuiyynLvMyqQH9TNmiYT3QEfc3N7o2GTNMMqeKbc",
  "key39": "5S2gzKoykuaCgbPDMn4yQKRipt7cVbEF6KGSPda9eH4H8W7yXhHEPShTiKgBFqqzDPbFEu48Hqi5nCq19veKzPco",
  "key40": "N8WJv2vSjrYNNzpWzpB7ceKj4AUsU7FPKuG2bJYMJo5Qi1qWLPMYmF8qzG5S8CmsX8E38kcowrCnYNQYMksRHem",
  "key41": "5rHqQukTNXXVCThJTs4G9cEbmRLH4x8nxbuaoVKW4i3LZZzcUyJB2N5uwUmADvqQh8fxtNut9gwmYCXGuYmc88SV",
  "key42": "4VmiLUQ9JxGbMoECAN6iEooZDKUKPPnfK1dVkY3Y8fFbUU6wREi3dcpEFzuFpnrRbbGPsFa7q8S5q4ZE9fHqH3Fi",
  "key43": "4izw2qSkKgwsjAuv7FnUAHFcJpS5wPRDZQLQn2NANB714rm5xZtCamd1x7rCNfoHKVmNKJgQWFiaYLgmybttFhMk",
  "key44": "3CSRkHXzG4kJWjoHUpXDqSvZN2CS2ToKRyxAxKjb5VJkL1s7mStCdKDTTKe6TNgxSAWn4FqVJ5fY5KjkmuQ1jmmd",
  "key45": "23bvM3ZPVVM5n4Zu8ii43ZHkDLZg78PnAvBbdQacMUdaoN8Vhc7qPxnaDLvJePY3TrdqivEmof2BHYeaP82UVDfg",
  "key46": "324KDRvt5zM3VLFYZG6Y4dykq5EZ63hjDpwLRDYbNh6eP9W7EgQEpFv9K14Qoqu4TZn25EmQsVLMGVZAhtsi4F6B"
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
