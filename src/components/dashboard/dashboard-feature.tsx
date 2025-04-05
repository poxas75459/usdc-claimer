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
    "3Jp7ENkjiBjE1eEguCPnoZnvbioXQDP5JF6ovzB8kfsUiV54sZ2jrwBm5Mgx4uzrKJFFdHa8ctvDzze5Ku61bxMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PQkatWDKUMbfSeGjMrPD44xn754bJCaYJJPjgJ3UQEKA8oqvVzdrNxn52sPG1TaegZU2dV2dPzyXTh5ZaU6zxdB",
  "key1": "NkuEYcAQ2rYNS6MGmjfNDr997duvwcXDCyJjTL8coD7KoD1vAzPLH7n762kyNdjwkM5TxjfrJ2K2DqSHBnAqLKQ",
  "key2": "4FYEsxrDjdMMquFQUyu7FH1x7GsmXLLv64ffbFpSNNNcvL7E4m4AmLQhfdY4wgXpaVEiAj11jX5fYMXKLzv1vjxR",
  "key3": "2pwLBrvJSreijkNGJyPqtkPvnutvmT3TSGD7v7Zz1vNa8AQ9NmAkdiiaYepu9obFtSh6bmpa7cvdwQqZUFAY5Hdq",
  "key4": "5NPJSRENKCo8mCzrR1fwvjnsA81tQybtpwtp8Bo5Uf2kCX46oqusQsh1oR5bMFRQCzdXkjZE1z3r715XqgiSwZv7",
  "key5": "5n3ezdifmHfUwT1wKUBUyN7CYbvsGBYW5vtdLg9Xmogc64fV4ezKtsY4fwDHK4TvqpAB3EuvtE61PQ3HTopqyfFj",
  "key6": "5meubDQze16kAy4L2cbnc4uMjwbkgWYfsmh5kdjdLt6abgTX6Q8oDsbeMueVj21YRGvhYBeWiPCGRTzgYRRiRPNP",
  "key7": "PMMx7LJqMaKJrk3FF6KUTPwHnALMZg87DquUpXQ5exaFH1W3WgQBvtaUDf5ei8LoSKXGKHnufpYuiNeU7dL4xua",
  "key8": "61bYFB7YudNwSWW1R3qXDQL8qvLSjMfTSNXpmeeR6mU5QtzVCaTmW2t4pPyH376Z2efxNaES1ynjg2pksapMWwYP",
  "key9": "3oP4iipuXxpnujJXhdha2CUS45LFsUPeDWSBeGc9zi15EhJazzwV7FQH9M99x5pKRaiS1M9KhuHRXJAp1rcrtKfi",
  "key10": "43FjbDj1DKDXRLnoeRj7A41if3t9iCvZPNmz7fgrXqciQWvbYBYgTEWVhDSSTu2qHAc1qGaEG655FvoBqo8wyckU",
  "key11": "3CgcUu25JV7u2oVvx6cavCu3C7hfkTjq8QaumpYb6fispMAgKezBCsKTaGKetKhXgzNxv3opzT7hQ6xgsanvX1Yr",
  "key12": "4XmqyCLt1N8uQr4FtnUci7arfRyAhkvcNazjbJJ3r8WrNVDYrxuaaNh12DDzbHSDtaDtAaxRNFT18whpcHbWoNFQ",
  "key13": "5DkDzojwhGL97NdSE1Q63sHfcUSn8BAaVrbtuRLmXTTj3nmTuT9WLQFfhX6DtqkWGcq6tv9WNUMyhRUYTR3xspGg",
  "key14": "W4jpVXE8gv6XPyTfAKJpk1TkHst94P3TA4ioHRFMDGPPVRS7ifKTBV7eajknfDSNgHYSVnSwBtbgr8MLG1mTNxw",
  "key15": "2Vfs6mh8oaQvQ3BPP7ELornQamYATWXZfr7UNYjX2AwUBmsUCb4Yb42VYohfotAXydByNWwnXCcvubsyXakV1fv1",
  "key16": "2CA6PUFCDNyh5q4VcWgHT3C9tiA9jQKxkTqBr2TDeepKJphmdANhCF7u9Too11qWxne2L52TBXhLK2U57CTHwMcW",
  "key17": "25Nq6PzWxdbXsC1hSQWZSwNqZbBsvfPyRp6pbqM3m7fYfXU6isBNWNGxqDQ1zfriXCNKQjztEBQGNq8B4Cvuoxif",
  "key18": "2TucdVsBcw5E9nyvPYfsL2R6dHRkwDKMTUBDJdLjAyJckJzLSkYv2zRNyp8B1S83SVjZxBztLR9gazWyRsn7MDs7",
  "key19": "21kTkZfqKibxUkAZPbuVYmvGRPMsDwiXWem17xfXyyD7RwUC2U7aeBZoA7ALfbWDkNyTmL9hquwsn7LehLHWHd4B",
  "key20": "5MshNtUPmXePaHBiNPxtqWxETmHjHJN62VYGKtDhKgCsni2nsQNg9sx3AUuoReiKaXygLwx4VVBKr2zRxckHabs1",
  "key21": "JevEyoGuDpkAHEM9ekWNP36TNwUmT1nTdChoUmND3u1QW6GNLynDQTDeaKyFtzcz9dh3BqrYUXtNvv7jXsHZWc1",
  "key22": "4VLTHji8uxPVjY1etuBUM5Pn3dJGtNvLNN7LzDmvbdvQNVokHjb6S2gCSrL5f25Br7DtnNBXL55EVQeAjqysVG9Z",
  "key23": "5Dytf8EP3YLtrkqnPrsaxWvqQrrzSpbYvvqp73h3VKUpk3UGNAbZVXeVgqgQZfhGgWiRv4wjv23n3sh2ebkQwXaa",
  "key24": "2vwG5eu9hnQ6aiBitXFAtuiQWnBrez3yLRzCQJjBdpboymNFxmn3AAsCW6cxKKgEn2ER65HHbE8SU1Rdyzpuoh8F",
  "key25": "4gZHYnLwvjyXzbv359f2AfFbtoDpdFmWoLPqdHzRdMHhmJwYK3NYk38M1pMkS5MuDz55WNNNb9wnZFRgiugjfY6F",
  "key26": "2n3W4HJZBRjozQFTqw5FiZdKTos9iTLyKBuXUAJA2fvfwgBZ7vbUWWF55dkbTQPwtiz2PCQeaxgmZc5oBiuuqoHB",
  "key27": "2GhDZgieNrezJMGHseH73Xd8jVzAxpaAvm2YAFUPFg4RG9DjQMHCNJv7P7WGUpvvbeRpMKaJFrA9NKTi5vVS29SW",
  "key28": "3KEt8bZBpmEEYsCLbkPamKfA1aj7PDi446DddwCrK7sCAP7178hdYNb6mCQuDfdQ6GN9LVYs5rjpzBp8iCxsMRLz",
  "key29": "3pU5p3VvY9XVasxkQJkHYW8HFEd1aB3ysbmVux2T2XMaTmaRcA5LrkCL8oFAmQwTP7nc1jkzSbcAgzmRTyNmrcYy",
  "key30": "5UHiX7j2bzVx9vkKrEEUHrt1tZ2Pon8ks4h8uvVdFiLc5HxQj9u6Ya4AG8BUp3rtDmrtdiDLvvHbeBfNSKw8o7TH",
  "key31": "3GK5hVr5DtaPkNV6s9wQNNxxrhfXtACtygbQf31S3eX2Cr7NPBYuqfJyJiB2D2h3UbzDyHZptoFqFF5C6iQUY7bz",
  "key32": "4xi7vDpXed8LiRkhugVKJvi3kPhRC3fFFryEiUwRzDxBzGEtbhnmfB41VSLLpjdBDZ2EzcamuDeeNjEMDCCADWZo",
  "key33": "TQXSngisQ2kbAYNM6AvkUVUcSaaZ8wnMx1EnEqF8JHj6KJT6vXK91DZJw8k7ic4sV82AfE8G8WURECuQUDaYhRE",
  "key34": "3AtbmE4dgUTo9GGpuMb46r2JN6shtbjjLoJkCL5pDQ5EocitwitWRhUVCriiducfXnUbptGEXw5PWUfdrvmtAC5S",
  "key35": "2ohfmhnP81oWckiU8FqWknykPg2yguHgKFFTqeMrGXW6deKuV5C1oo3Ez9Rd6qnAdXSXcxyEw4uZakp3XYTV4AqL",
  "key36": "5MCFAfTBUNh9N8rPXunnZ6URxezv9ETaATSASC9GUGdniobgK3JK4vPVAMJ4wnLwiS5GEXuiWZZaZJYGHaHjYxtq",
  "key37": "4Bi3J92tVpbk72tyH3Wp2gqiNLtLfVHkRDBnP53Bz4BJ9BnetS2mCJtRQchyymEZ1QE9raAGQhinJoS8avG3jCDg",
  "key38": "2bGC41XJWmHkt4RkN6iJg47tAXRoZb8AB2xvZjEupbDMb94QVapEBpJF2YSucz8N8pZiDzzUKmoot7ytMtqnkg9D",
  "key39": "4Ew3zsDxDDL2BmYKHHTojprgGFTNe6HrYGCEQtfZrAo9iXBiQnJ7pEardLP1dx1gQ5rw5QFk3DsXfTbFxbFWS5oG",
  "key40": "2ZHWe17o1C1esYuWgaaxAGhRQkXyiFaUXYcdWdTWPiXQrikVBRiN7hi14NyFDfPfXmtNDNQp4vf8UxUGaQefBCZD",
  "key41": "4qu41esdA7r9d4EWSerYU6oZTmTn3mA5ebWhj5R79vdhdEK399xQfjDaGJSDwZKXt6QkPA6dv89GCCiDpAo4jFCa",
  "key42": "4uUewfRsjHkpUFxLjWJGHdKosDPtCJcXBLKSsU3N54e6pyYwurj9z2NCKX9hEkc1nFyg4bX5pX5W3ra6YK7wVkGL",
  "key43": "2oRua8gnRaV7sYeYPyPgqGnPJ99QFbYRA2pKgP2JdGkRxLxv3NQRELLpspiofZeS3Qm3KySzn4pvhvFEBEPFSGR2"
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
