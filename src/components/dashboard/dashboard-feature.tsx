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
    "3xXcQ2h3AdXopeeeNd9d2eshsuSvaK2S2zbueab7pnRRzmXB7fZW8AqSDedxv9m1FQ5FcZxrquYyy3o5qU6EzTNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5iEvd1kpbgpvP9z5NUaidXGfjeFLw1UY6Mcab96Fp4T4nyvPzoPPhXM88Yp392A4ZD5rDf1rdW5wU2zRC5p3fS",
  "key1": "53oNkQidQ3MRTdj7SjPew2txPqPPAx239E3samyvtYD8BafuaC4fd48xYYupaYojDEaJ5H2YQo4ZcxR66NdaKgvU",
  "key2": "3BqToze1PiZAKjJdS4UvmBmbW2rm2fQesJqunNeivpUFSzqXj19KMhUcG2ZoeFXFdDfasMVVGGhqMnn8fNXhk3Ta",
  "key3": "3W7f3wnWPY9bwTbpSeNt2VFTrtHuLVLmkW3qGa1bTr5cGNCSd521kd8ubVnifA8whrnSRUv7dWZiN4SiovXBLR7N",
  "key4": "65mqJbuA4qt6HNfbQiSoWqYg4mLoHYstodRPY43gEscjkGRmwfkNQe8soB5HEEJeEiHx9iu4J3271Dh2TxFS98VV",
  "key5": "2QdD73c1XCgdAzGTPNMPQuVRtjAGTDAt472ow3e1kqBCC7piGEYC6sAXjZxpepNsLvcmUbQzM755fyYfxFVbBT6A",
  "key6": "4XUp9gHevXHuT2QhkNuRa5i5duMjTrXcC7KvLzp14oySoj5xgozQGZwzZn72YnRCkqUZhXqcMysRhMwjKc276xp2",
  "key7": "2LPCXMNzxJsWZn2q12BmJ5aYHj8ZAHfLUwWhezRGGA6cnD2Wtj2xoqZhy6aPFPrfdK6Nc4fURLzts4XXUe583EvS",
  "key8": "48bth6PjCyjCLS3Guiac4GnZsz81TnFyES6ZRGLj2AxJSgeydDRDH2UoxhVrPJ1TMRs48gMjKLfPvTZrDXYUZgbY",
  "key9": "CiyBy7XbvMLZxnXaRwYcfVWTmYQADFi1LidS2FQYUM68RtnRmt6pVMmBb3ZK1Dadon95gVQGmhy6mPRYJZ9iccN",
  "key10": "3pkF59YMijpgKbzzB3mUveeYMmGaraXhRDYgDVKGJAj1BkH1eN1dWpgsv6wNKpac1rXQ6T9H9Wo4gx9xvnnsM6MJ",
  "key11": "8DQk6CQFCB3zApAezcPRQtuusnXfsWnqxqSBChXiptsgPBU9DV1y8FnWfPf4esDxuperiFuUE1se2QKg2KoFZ65",
  "key12": "5oF1fuZpKbLCMGiqNNF8J9yTkdAnbHPsQY6SxqS8adsLojNjuvGatbEEAhdsTciXTJRWYnGdoRWHbqetQazpun1L",
  "key13": "3XQXbY6MXLNEK5jjyrhRDPQz1NfUfEK9Unk4xseXgXg4wQ6CHZzJFtfKHUZJ4z7P2jvch8tVedjsMP5BtLUWLGgW",
  "key14": "emsW9VpSmHEKoFeBPUCZDBWw1DL3XxSBFXV65iWRgRtFip1FrmdFV8iYoHCb7J6d8MvJEy7dnDD93JRxXPRJs5V",
  "key15": "2wgG62TKxAXzJamb3NVuPzTS6Gt8av3tvrG3u8RjXwjfnxPfmmkqYg17kpCe6qh7u8afFxDQ5tYMTxaEHeCaC3pc",
  "key16": "4jzH4grHibgbz2DmNMV7BTCjpg5iyN8T3XkwXZ2Lvfk6mUEGprjiZbPb7vaDovJwkF7UZhEhv4QSqN3xn9gG2CiQ",
  "key17": "3hJFeXsqSitw7rD3TGmnR9dHenoge9SK63LWb9nqbPu2zNRT2HXd4hqdJHR3FnzChhj3kkzC5ghdvhf8rVGgxV5g",
  "key18": "3qP2cfvQtSAAkFK8HMc924ZsQvhuLSkNmuGCwxXR6m58aPJbi9Mbnnobu2V6gkxfMFvmzcNAexfX43qLTjmxmNQq",
  "key19": "RYiqTLDw9S64Avkq6617wWQbkLsgv4M2zxX7zwU63jmMREcsTeTQttjBRsM6ugNtod5cs98vXVwPF6drRbe4K3W",
  "key20": "5gHJX5XrZNZ8ie7Tg7gQpW1U6fZkNpjfviBS8exwRqKA6EC26J24EsRX3JdQj3nRaQk7RinaVqcQjvt3hecFB6Wf",
  "key21": "VS5RvWMWNYSpRwHMyHGdjvBZPzojTVtFZfWpSo7HvYvSPSW4GZfqfovb3obcSSufaT4WDcwnWi839tcndnGV4g3",
  "key22": "4unLwBaTzEHsnSAfHoQPesi8G4PBkvxTt6fs1sE3AzEkxRCCWyriMbSA7RJDWUAjb7VnGMTiXZRHEX7rq6DPUefc",
  "key23": "41EjBcdqwsVcLyRDCHMZf8X4VdZmKf4uuXLxHPAWgx9vUffgJbS4iDGoCRrzx8tbrgaA32iVsX7UoueFZBuam2Wi",
  "key24": "3nBav1zikAmHLbr8J12CvrgnepFqg7swLcTsESuf8nLRNcSSqaZdLJdmAKJi8Y77mAu5tYfKvmXKU12F7Q3eXq4",
  "key25": "5cUqUGdqwcbPj4pGY3a9dr7qGy5ob27Aw5kt42c9jV7nbdvZ9y5TuSWvdBA9jCNWQrtgspy4BwWbJrezXGnggsxU",
  "key26": "5sxxEXtL29qgsKUqM1LBXk7cYD2gShFKC7eGnqyYA4J9ypQcLtH5mfYVZsCdiJKGVPa94EkAm5pw9q7wHi6R533i",
  "key27": "3zyEC4R9LbX8duAF9FULfRbosJw5RQvMraNeayGvvTU1ceZNwvFXSKQD6mi9143okucZnyP6kTZyieY25ZRzePgA",
  "key28": "5kqy1AwVqFutN158A1u5sAW7ZqDSDAgXmj8oUA7FkrSvm1jBmJPwkqosecYsX84VnWKEJM22cNyV7mhiSQ6nAupK",
  "key29": "5tf7tzGqiZkMxgGUSMrTdQ15bNv5fnEjD6fgVL2ybkDQeSkES441aGcfLtdEsdyZQgKRGFtu7UnqBadhwSW78yqr",
  "key30": "39E5Wp3VX4pSaK1AUL2sUeKXYvrhojQNbuyBrepM7YdPos9HynWsEj35UMCspT4uXtLv124RLNyKXq35KDvqgY3Y",
  "key31": "WR8JJXfX91RAWMS2NPRqaAJGAWvc2oknJ5ZFWxwPhJJvDkuGeTcDTA3Zk8eaX6Nzdwd7YZDjESHGAxhojJQuPNy",
  "key32": "KVBLchGC2x1ehUCWtKGdM8XdBGwM6jzgNXzqjcrKhZyLPiTaPACUoWC1DrLC3JY6CfuKQGo6Y8UDpSBCpXTswFy",
  "key33": "sLsFtLzC9RFz66fzJh9Yu8R9UPhw8z8Qjq48UMjcW8hH48JLeQNgstGzJY2aXnAmHVZ2DYcP6FhuajBtkBLbfm2",
  "key34": "NZ9sPQ4XNReM5Bf9RuZqvV2tCwBVRYq5cB4zTjy3N3TsF7Zayqz6kHBi3Xx2UMcJQKsRwnAw9zhK9DzT6uKcm8r",
  "key35": "2Hcs2A3hh6mdVL8vQMV6GL2cEvvugmXae36qG1vMMV1MJ9eeNkCMh2KiEhUxTWhkwse8QseH82B5GhHmuDdx8oji",
  "key36": "4CPU6uMD8ja2uSWfycxDoZc9efjZdSaCaKv7P9HPXUXJz2tMAeytAZjjadhVXYSyazpsqf7FHm8vEvtAhBLbd4zT",
  "key37": "6DsBWynQYePPQQncJdcSifSGNFgXoW8sqoLtqHuhHc3ZngvA3pmWetD3D4UXfB5a21da3tjRUPDsEjJfzDRPZqL",
  "key38": "5DuxnywRsUEhpBjPaujSVH8HSYiV2xTcYFo688FCkWKMVeLDawjb2MftabVVNaEQiFHPaNTYVP6G9xvHmuNg5bfx",
  "key39": "54kYwcUNZMtYc7cJRuVCN8gFgLWUx5HJvUEafLgpPhDhcpDbbXyHKyGkTKnf6tzTBp9Ldk3tsCMy7368f32rxq4M",
  "key40": "5tQiwnqTxYqt28jj4WskuDdAe9yAKZ2VttidM4nUKgjKgPRbQvxzs4cLrC3fKtkbZ1Feiz7zLuxr3B2LwuMCP92a",
  "key41": "26j58RT4QEQ6AERoSXUf4UEXMjHsFB9o5yFuZKs6ioB8nW9Su9mU9rNAy66peV5KGDphMJVLcoccAhDz4YyaYe3z",
  "key42": "23zL4GSuqjibiMq5PgUYFaJuWJuChMYYTyUMN19UUtn7LVNd6zm66TdmovrF5ps1hzbzvwWAP67yqy7TecitzV4B",
  "key43": "nTewrqr5RFXkXZsEV4s786Jv5Av4tqaQVFXhdKJh9FiRWxDWZJmruH4ekbcBXj8ECe5Edxsuam2AhfbFUtxfwcq",
  "key44": "3r6TzDA7PyxtfP1NgF5qySB6WKh5wXVmWddMBcvrWknFeJFQyohubR4xcrfmThzMxjyjBxKR2kDWA9nbDup9BKJ5",
  "key45": "zhkzJZHar1ZPkSGxw2Tn5sFGkWF5zF71CVAKFwxiKiQvnF3WrFoLxLMuqN8RtHTcFZh1D2EAAtnLvztRoGo2sX2",
  "key46": "2HkYg2vx93wAfjuPk1366WygFwpTTHKaDT5aKBU5D81r8MbcsGizahhw4ntJGVPpVmPuHVhMHvwRuduC1KRURVrZ"
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
