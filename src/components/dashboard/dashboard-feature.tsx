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
    "tPs3BReahxdUZXE1LFHAAC9kEL2DkXhByBbxVJ2d4uaGnAqWtGncvaxwHoVFaDcxKHXdpCxmb2ThyUsTRCZzWsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pFz8U491rRJbNBDJzN7ZkSKSMGqq8AkCvG63TVg9Qj8VDqwp5psLxh9iXDdJTmSPYkeCSgvfTC9gu6su9HdgAPn",
  "key1": "p9eCrba5s5vu7jQBnqKQZRx4qnXMfT2NPKE72tKCoMR8YM5GbHSWmmnv2PsfPcQoURHuPTw3BG3rSQeFMA1FHpa",
  "key2": "55BD5STiGhbB6QiBfaw8vhe12A9pYaMSSzrgMMr26wSt7XqqZZQKPxveuSPv4aiEasfejN4cQ7NL5jti87s2Svko",
  "key3": "4oEPdpDvgE3A3NipZ9BtFAs5oUk2Ph8nNoDHnsrEn4KtKb9gvwsaXFe9D4VhP94j4MhqYvwSc9JSYpzQX165V3yR",
  "key4": "2PV9hFTwweQUf7Yd7kaDCp7pQSGHmWTTKB2HLACBTfJRLDBbnJfs9AAVMtCngTk6aPKC6CDiNeM9VWamDrviLp18",
  "key5": "Zw8AcVzMH3aEQRZQRn2MGmmZ5Hahvym6FM1qHymS2W4WeukZrfpbF2scbGz8bjmG5o77uKHYgEq187N5wom2bFR",
  "key6": "637mYTMFSPToRfnP7PZ4n7C4byJ4G4Z7VSh2AkVuixs16juuXe4pwMPUm7jP87GW8zNMKR7tSvzLRK7iUfvkBiS3",
  "key7": "61V4nGRC2Vv3PmEDza4DWG4Qm9cpMkt7FNcptrSdemZmc3YVeMkZEpvfUBKazS2kbp1quQDNW33cgtk6pGwa97Lp",
  "key8": "7Crd3HTyz8WA9KNbFrFuofA96qWxDTsebNdgUXdRkbZ7jcmCb4UfaZk3aVJWcgRa37riVKm7TL8AcB8sR8dS8Fz",
  "key9": "3g5Wr3ea9oRTqJo9z8MLdN6qdzyhZiDNG4fSMLcYsnLTUyVxnpazjb5qRN439LkbopFqyag3gcM6f83xVsdJBoNJ",
  "key10": "3HhooCRQXeXNyYKeJJWfL4wDKyhbqbvWyxE51zf7m2HyquGfTYLaCLj7mc8vDqYJCJwAweAiKqqvb8y4Rcx7cGXz",
  "key11": "2JsCVLqRx48FYEUj1WcHxny9pSeJg8mEArss6e59D49PVEuhuiyKSGeJgteHLBzVujvoA9Tzg6URZbKTgJ9DkqZ5",
  "key12": "67EQJqWjFjCyQJPzxkRDrmX4b84US5n33a31ZkoXjszUXRZm8ZQAHNtobmPamch78XhWemtLZYjT4SAu3PomgSF6",
  "key13": "3Tueeu3fiDWBB9xNo4b9mjMdTWMimi5eWzvycdBfdjeApEj3qkyXeAjfLF2qM9sAJsc9ui9L5AGxMp7UceFEmy1a",
  "key14": "5NXjro6eEvZ7iQdZVcawZbjNEyj59tamd3YwgPFBfvvQwt8mSj4Uqxf7jmeutauiYRGLbDjhCMLaefxsmExXqrBf",
  "key15": "5tMsvfNoJ5Wz323pQSjzKR3X1LKLSDjy6VZRjY48CM4XDeZX61F2Gu2zXMimn3Y7oNKgi26HDjKEwDyaWa1YroXj",
  "key16": "9XZg4bvPRDhyewZkv6Sra4TSxAwJghg8Fw4mJmDHthFiZDfksN9gfe3oFM3w33gWcQCkBWuf2vbCxzK6zL2Ggst",
  "key17": "XUYRhGEqTxA1EZKkNwGreQstKoucDhQmW5fDnv2Y7JniwQ8FLYQ9HS535AK95XdH4Y3dE6nyjoSrKCvB5QhMeC8",
  "key18": "5jbgW7LCEiBphPZYfQf7LDeC5aGepQqKyJGYXz6o4dGZPWxn7jKcrCpMQbnX2CwWR4hRXGdfhYkUoEG11JxsCZq4",
  "key19": "5VsUiE77bx4nBQPy2PDMkfMHxodasLtpr3naG9vvnWwKcwFKcUZUnZbHao9LKP798mZPCApA73jt6AYfj5E47hrf",
  "key20": "2fNe6oGEmee6KWWtPbnc8zXDy7HMNqFemH39cafbFXPwLSSorJuPUXXEwiGb7Qk9ZoQSsmdXijaAgs8fEpVufsXv",
  "key21": "3yYR1tEWXcBAK7iWooDy43amK9DH4Aq5wKYu4YCp4naVmq35hCiZGRA31UiAaiLwiBMvuVSsmZ1S9F6i5SrTkDJR",
  "key22": "3EikK61v5qR2pHj6jfuhv7hZ7HQkUuaXodnMjQd7SwuZjrA8nLyz2giZApgXeCec9qsF4xWBvDFYmKX1u3U4yh2e",
  "key23": "4JSLBXnyZYtdQbJFBzoZF1ss8UPeUcqhuBAMTk5quu7Noc5dwiMn3SeieQUHu37uH9Gsdtn9HDRupSoxxLRNQa6o",
  "key24": "2ZPjNR2pPTZ8MS2hbjpfhvSSU4VwU5BXy6JM5uE9EGgGTBFDjpGVHQTSSNMZut8Zsy6xbemujidKor9eR2zdH8EH",
  "key25": "tenXawheSKyHhQrMAFAKDoYnCUUdj4sVisaEKnDxiU5VmM96NB3QiwTh6RuVSrVxj1xpDA28v1VE7nxRDhbVKvK",
  "key26": "24ZXwCufCbfmbvvTVpoy2D2NuMHbf5c3kqQxw2aGHZJq6httrBxgfPUWmoCNWwkrQTqXGma9dTL8Zk3Q6LVem2qv",
  "key27": "59QHA6EtAvQYPvqGd9ToK6CyKs8Ys3CtQpnvZ5XAV5X5wAJVfnb4DKGjgLrppLPbRAV26ADpE5YKh7fj1DhYpWkp",
  "key28": "37yeRzQveE9Ag69QVsE1PEyyqmCz9GedoNArC8NWscJ2gK37anMMYcQS3xb8dcjm8JczEc8VfR4VeSBT3nhR7Jvn",
  "key29": "2AqaeQzbtwiyrVH8dHRBN3SZUF5ZypEpg1vTweYxRuAhbPY7yCrwCZophc9VV5UJXmMSJCThMfMUByS9wxMNzka",
  "key30": "533ygJWKyCuWrkeXmrGC4DX1gmEvxMkxQu9Nek4zydw78zPzE5AoZM9fVtr5cyaViAJQp6SHvHiozdY1bRzrJdVN",
  "key31": "4fzBTbpYKa45qH8x8cZqPuCEbiTPJEZqnRySrbDKDDKPyJNShwZMmRALGXAbTJDM8wHwZiEGkpTyBy3cnfaRGfMx",
  "key32": "3D6DFRhQmDvPKMfagjUywoitrNYr9E4dmNsHWVBUEwWQueJgEdYqBYWiewKkugbEFMr6WRqCMLXnc2RsdKb6nU4e",
  "key33": "4DydEaVD5mYSWFNoXZ6YQdmpgCduaUVV7ghPdc8iHR3vjBc6A4eWvVnzGWuu9gQhYqyxsHgc94wf4JwH4BwWXK6B",
  "key34": "4EJHoap4WePo1hw59XFrcDpVKQi64VyH63431oLyzGkAsJq2AXBr8F5FibmDTD7TpYbZxwjBAouCtpp4TSyHhNoZ",
  "key35": "625kHPEC4ADwXwrhHT7JzPJESFHhCfzzcu3XWT6UbuLFekLUeoMfjSMnyUCHXFz3UG46WMrtK8JC7rbQzu19Bjvr",
  "key36": "4YNUtvtJZMWsYj7fj27kBEWK9UsgJipwEiy7xKCDQAuN21JhJiLeeznanvAsxDzvF6UaQf1GhS4v85nFej2cx2w6",
  "key37": "2UKW8V6TCyDHy4uuGRL5o3d5x5FZLpNHpxEMJd26JfSZCpDmUrW6DN8rCoJpNGbFBAefiSgm2QZJiQxrDbb8UjNo",
  "key38": "hDHbiBV8DHgw7w87m8chG4STaPRYttjPNHCXijzLoKW5TGF2QbqHbhjv3CHe1P3Bp1YKqPQq19aH6JJCwxMgyC1",
  "key39": "38SSGp9QMapUTSBrNpZpxEvmmcM45zpgSM9orfVN2jgZwk2bxMb5SHcm4yPT3Nj1tip2K91ezBoWxywF1QxGicAL",
  "key40": "39EA97xEhvS7MHnfhSKnVUvHcRUvtpo3LFdR6usgTQnKngcP9zZgJzUpVQFgL5w3x5d7BGgWtJe9opBPSMZjK8BP",
  "key41": "3aPmbwqd1u9KxzqJVYkVm4vDpPYFJLq59vpE9Cq4STpWRtCb93BuNS5ww5Aaavr843fbQFXAZ3FTkvv3eEpC347G",
  "key42": "3pauazHGghzZmd7dLa4Nw3JKXqEBxRfkSfNKShLE9m6zRSSppfm5h9FNd4qtHQTfFdb6dhdo5BPhPfU5aGbRiiyS",
  "key43": "4TvdY7oLL2c2rNdKQGQqUai5NWVdJaraYc4CeLaWREEjEKsy88YLhqPcL4mcLi4UdhiBMfkLE8tcQhbUh1JN7Kuc",
  "key44": "rKnkkRM9WvbaYNVg6uidfffAuhXoBAY9fhfUivuwAtTesQgbNxkaGqFmFThxD1RyUvg6Xa1MhdhoQPCzHpoDZNw",
  "key45": "57fthdJL3jg4RmFsUG4dNHpGD1qftPNa3cYPQo2Y6zdLtnHMrRCaQESFXMLCPsbmqmfcVzpCWyschMWT5x2k4q3U",
  "key46": "4zQ1gDjPiWnC74Q5QHHENFmojNtWZpdBkrVDd8xVjhzJgRJEnKN8iwTb7QaamtdWFpcjgwuQ62f9GTN9TUJRmNfC",
  "key47": "2G9jYntfVknce6L3haLNL36XGYZh1ZdgmzKrMJUB19CcSBqiuA9PD3oWnGbrUsL89S9VHvyHMjNuuFLLP4pJDf8E"
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
