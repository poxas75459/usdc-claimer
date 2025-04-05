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
    "2ReiZ2CbVxqY6fujXDZFiCVcGLaoygcd82WJVfFgfJPhULQFx3tNr6n6JmgKBGLMDH6mWUzezmrFA7RHFf1Fz7xB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38RwgLYFwZErpqYebncGNMi1ofPTbAniCa3gKfJ4JkzcXnZwPYnt7QHhcAPAnfUTkZjtCP9MsZ4ZUKXMaKjkAqGG",
  "key1": "5tUKVvwqAMkP2MUfR64bTijeoiDNYF9kk1WCYvQnSdD1zjwPMB959bjdYBTy1u1hr29tefELnfGuwPeHLYBgKh9g",
  "key2": "3bAoycybdqmhSGNbNVwLoDREWKhEG2Hg81qv18poEKKDxiVggprYQVPNpu3QjSErZ2GFgS4jjNvsYb7PZzRs5QEr",
  "key3": "5XKztFttKAyXJf55Bmw5QjCxnVUfqcMdqKJVCJ6ct1BVDj6aaDvd5VXrWqmLgdJ66hUAHydEDEf6WD8785TikV2v",
  "key4": "3Wv2agCPrSUwEnpE4KVsNYHxnaCsB2zjYEeTgYrV9x55b1m1xvMBbXboSoyTT8qSprjcgye47A8SytLtkcfowVxo",
  "key5": "58hxT15MTd85VFw1GGCi52M79k96FsojLBzxZAgc6trPkZwhuEcXPAFXF7qG9u2iUYHEtvd1ZVYeSvRoRSDNbFyq",
  "key6": "8DuZtBZErJS14nkAx7EHzy8WdCXNt2LUMpmUqQWneavx2wQq6zdiawZ4CXyqbCh2muqrfPuxFAtCQUoGGRJFDgn",
  "key7": "4yeG2dd9SDxbmrVD1BYgRWUKQp7fshUwgXqwHHF4DgTFP4wLQHmMXHvg12PVGy5ZzqQGFGWUj2cgZnafSrrfWu2L",
  "key8": "57M1WqGNPtp6Zf3hF8eQFD4ptexAEm779FAnF6mEYVBSJPFVaTcHwQcFC1ZUVLtCnUB7SkY8hzNy6b7TpEE2jSju",
  "key9": "2ZjWescH2ZBJBBneme1PvjAjKsRN4jGkWS8Jnjiq1CmZBcX2PuzftWmU1JT5Cci7h2A2bbhuqeWPK7VotpWvWFSR",
  "key10": "3U2QgA5XdYPzBMJeoMkyehZ7YTbm6DxfKnLZNg6bxXvP17MSW54nuR19hLpp6tcXWAMS1iMc6iRx2o6sDqwUjjdq",
  "key11": "2RFgtZReXL8SZAQPN1EWW3n7eYe2Y6QXGP3uRymwf9PGMyiH2GAmKA6WPGyjkWqnTPiSMWCtM9BMJ4spZMh2kMUP",
  "key12": "35mndnNg3mDum4xeKHQ6Cw2hoq8BAyhPiEF5icUghTNNwTeAmXBykiVSeuCwDea32RtYvqqRwYE4LPBAMWJBrRNj",
  "key13": "3MXSU2PHnXvf9JyzWhq5x8qwqxg1WkjJjZYCYrediA1tanuqEp6D9Dgzn1eNLR8zQZjQYZ5sVJe9RsU1gGGWCgg5",
  "key14": "5nLokSxGe4bQqKiqfwgk1afTJGvGmpw1CZdsx5zAxUn2sphRsry2T57CvqCRj3rYbvEeDht4Lhnp9JdL8XA9euSs",
  "key15": "4vF6h38F32BqcrSt5q4Y8pXMZwYprt29wLJXFa5qrnXFRgGm7wLkeAEGchQRJE81zFHjVLqvXoPZoszecnzrUuvZ",
  "key16": "2VsRTUKimmRvmisEGAwsbUSwbDmJcBi47m6WKfnNn3ut2EjyowZTepETaMbGASHRKwNnEx82FqxjSRg1wxjGoNeE",
  "key17": "4RsEPj3nV8f2diDephuKRBfx4ydg1s8T5xVFGyhZtoSBmbGdYpUy7xbyEd7G4HyuT6aj4Dp5utaW27rRYMJtXkTx",
  "key18": "4YJ3sDAh5dUHLs7X3bX1nxf9nXVk1eUe8MYzUWESXYDGczF5apZ5Aq6UR3xxxkS2bddTAvRkof9Vb5EvnzhhSYA5",
  "key19": "5LRp7y3C6DpLbcvCTsgUyatNa22nSxBFwUWzdg6trguLuRwxj3L1jaWtfWDJMUuvbyto34ZvGnuAt8JXBiEVfzda",
  "key20": "4vjbyyeTNRxz82PjGugAgqE9vMH12gpwoEvHeyU28NBB6U3x5uViAJoK2iJZ8FCZ7C3D8Lg5PtE3KLevCHLiwDKY",
  "key21": "5CfhRshEsv6aQkJczdVmydKTtTM43k1JkbSjz2bDmt9mKuhDpaT3AzHjaGsiACoue5iy8hQEiUYx9g4ge1NkjQts",
  "key22": "245qwfEjv3eRNXMQkQdJLACyaacP179wefPFYnK4gSxM57eASnw4enXrXLC3GwTajoj2hkoZCFUcViRpU4jS2s5E",
  "key23": "4R9Xodgc6QUmib713wmJU9kdge6aXJJmYwwEFaY9tAPwFMQ6JxYFCdFHYS7otZz7NTabFJ6V5N9is6dQABY2bXLj",
  "key24": "PMdi2ZSXPLYs9NL8XMEuX9z7833t9Szr3S98h7XxUuGKW9dCqWws34JDFNZxFx9VmkMLnJNEZyeABzeFdg5c5v1",
  "key25": "5XRhYmrVSdbDpHh4DhDeJ9oBMqAWSAmqZDQ9JjKkD7HUuyPTSsCStKeyNCjxmFFha6yWqnmyrh1ZbPSMWdq8zbjb",
  "key26": "3y8E6UMUHffXfqFypSjUeSK5XMTh2SS14DxveWZAdTKaGzNstSdxNczHUFQjvTwF67rjsigWeT377xGeVzKSd1a1",
  "key27": "5yLoBgZBQGTPF3NdV3EvGKSe5eYaLXX9bAw8LeQkdLiNDVQXXGSba8Tn7b5sZzagiYqDeRgqECDrtJpv539RBpKt",
  "key28": "388duDytoX3d97FoHLbT3P9SH1DFBGZXKfHFqi44651D7UUb1dhwkbGYBxUX67aVJGkaL1qFxpZe8Wyy7YgZhmte",
  "key29": "4odHqV4uN3fzF1PU7q4D8Kz6jBkeoHufE9TCgxUan6VmUvpLyyvif6AiVa6VDt5nb9seU79JDizzykUQFuvYtKZC",
  "key30": "5XehtgipTox8T1tckkoRVyj7Kq5cDfezVY2Y23KhA8B5HxqcYmXkcExAs1t9QFx9pjQ5jGgTfu7RibSK7Ze6V926",
  "key31": "QHiQgn28BLC8c2gFkt6qYAbZNyceWcN6HNyDm65iziRmv163GRQhdf8NrhxZCXSbnWLp8fGyDhPko8FHjPL7buE",
  "key32": "uhRZ6NGsgYdNJtPZs9gwf7gR3wQ7PuHu5kBVtfnGYa7ZwqzgJj8EtNQK8uauAMfSLM9S3NRLeMbSSk1kVSGajiA",
  "key33": "2svj3czHNSJeYvE17NH71s2BGXxY7GcNfcbB6gQGbkCDD1VR88KLSrFZcJ6Lsxv4ToYBw8Vt6izzD4rwEhQvUtGn",
  "key34": "3HYXnEtse2arKcPmHQGYeUppqnUTus5t6EQxQ2kP6kkgPFAznTvvKWDxEs6xAdgddWz8G1B6T2gjXRdxz3UvysZ4",
  "key35": "3Dnt8AaStajUMd7Cs7fwKwyh69jheoSwY9oSgrjp2XkdWdRk6ofkSbUcsZDjMnYxHZ9ZhJxaLnEKQ6xCNUjyzxfa",
  "key36": "2QoChJZpBfybTW4vNgvuaU3ivZXha8yfyQ2Gyvw5Lhyyb9Ws2Hanbsco24aWULb993NM7ZsTNb6ePTcBFY8CXrQw",
  "key37": "3vFz7vZrivJD7MALV6tkjX6DaYKjzWR1tqeKDG91U5t3Vid5m2HjhFhU7GmiFYZWUFAsvy9Kc8C8M5HQUW6Xfboq",
  "key38": "2AAC8pEN7dWFzbvkaoGhtxPVNwS3QmyutzWSJfyjrZge8c2DWBz6oGkWFCVijWXV3NwUFzC7YqbxbMwoT8vtXEjN",
  "key39": "2bnWBNPP1TyWBhywBddbDTnfgjqahv9M9ZWrxs656QUMjoWhJ7eWhPm7Z415BebnZ5ZT9WPDNF9YSdJ6gbVdYTZB",
  "key40": "5U9ERi4gczbd4okCs1kZJzR1uV6WKkGbx1aCoLcHRocwDctbF4U2g4EWaYNvoLFskzMWWaqYuSNENXPQ2rg4Et2S",
  "key41": "2YsBuPsWh1iYPcV6Q8QGGAaya3mr1sfGNZ8SNj3WL43v9JEfHKRr2Xb8Gf3gR5JfHPL2NKfrTAMQcoeGeLNh4f7j",
  "key42": "8Yqux89XbyXLrMVfrqRxvLMnNu3ybMYGRGt4EVuiFiH2dPCz5p9UQteMUyBDqnRs6oVSJqbPs8waPCw2gGQBW4a",
  "key43": "2J9r2UcKWRhR5fw9C7vLa4A3ARWySYWJn9ZTuBz3HYcqz1kqPUy8RLJ6WRjNPC4S71AYQhgguSBGefSeU8Yis3Vz",
  "key44": "63i6Yk1Rp5RDXrUiMLahvsCoom8mARqY7SXPGdLyLbZwEJ5pCL5D6GbB9uf3Xdcpe69eSLSarnF8Ksj8VVL98WX6",
  "key45": "5yphQpVobsCHco43zPfg4P1Fc9wuCD9E9AhSBQQc6cNfUAK5eh7Vtqc3cX29Dsh5AVth4tFSANu2wX3p2tASJcjo",
  "key46": "4NDjB7k2STg3ANH3UsCAquZshi48X78VMwhq8jKuqkXpzBU2KMzVqEbghXNTifp4bia4XRvK8c3TB9T8kTPb4cBN",
  "key47": "33MTLsdeHQBjoED7PwDCife7Xk9uezXaRMNbJoZYdRwVTLD2eFFyEAoYP3dHNVVa7B2bgm2pgPRvVYmET1C2mNR8",
  "key48": "3zDT4fMpQx1gmjaCCznAasmoSB3yypwa6Rrj9XmNaFFdfqDujpKofpbtUUQhiVKTg75PdZnQZtC9yFZSZBoXdNWp",
  "key49": "4MQg31fNXbXKM32EvK3sH9GPdyE3cCcswNrtbtSYbW7pk41YaD9UPWKAoYnHpDCz3i8zZYXTmJpfz5vu4r7asJe1"
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
