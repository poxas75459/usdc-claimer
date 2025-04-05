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
    "3vJDbjG9DZTfYvjFPPk15tjNCKEJ8gemYfYGSG2B3gsnfUhz55RGMUjmTBhJNesgGpSbfD5BtebaFv4nMJZpvNLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iZiuM1cyniDMeR1qnuL6gyZhgyt9XgLAGFsTSCufSd9zETnjfeARwGTzK9q2BxUmGQHiWNaHa8G6XFAjyD41Q52",
  "key1": "5UG7p5x4hyZ9Rk6Kk18Bi36koRZZhZBdRurtVH3W2Xju6xKsH4CuNjfpKD8jdbgfBaQSNieQeWqkAXQrYfTsCRPV",
  "key2": "PyF1ARVCrdNiYQgiK4PjDU7iQzLuXg7cid4HTeNBwDjTdxEot7vdjKA5V38Zp9P8Hg4PeJ5wuVvhV3jUk5frSte",
  "key3": "3KzXq2zMCc9g4FXxrEA6hxMZsrL66vpoAcNv34UqrL29G2za6vVT8ZAen1PL4WGwKM65j98BuJyZQYenYNoQgEgF",
  "key4": "3otssV7UhRr91QxDUz2Nko7uaHEb792JCwtQVAQbqZDxxy46rGzzou358m5PVWmhuSyVDhephA5jTUh2Yg8LLjHK",
  "key5": "42DFkiLZpn8V1ncmyTsBXrGgLXb5yZdhudK3ArV6mRuzD7ZTEN686Fg8o8eDJYHgCkfzn7EXa7onam5s4W96wN9f",
  "key6": "5yWvFG2Sepqu5FCgSm3pFAprinLhGBAiSznURGpwLiDtaSDeticdjCMVeZVwQaXxXvKZFGTWbsT3mu5i8qXLAg7v",
  "key7": "4WDZJLsMrjyt8KLsqTcayZ1RmJ4W5xJvEt9HBc6ukBr69Ba1v7gv9t6bFjNZ2DusJukt4U9DXoSdy7Nfe5FvS86d",
  "key8": "2fREHAPvjzZYjsHg7BDu5pMy5YCpMckNnoQyKYCdXd5WKhh8aWdTqH8REARhrfH7xcksWHN8a4TZ4d7k4RNeo3ix",
  "key9": "5rJs7WuU9iGeqnZF9w8uSfLLCPcm5CCjzTT9e6WW51qQv6i7KRfNyMdgFjBKb7EtLHKguTwfGKuzmjTHzX1W3f62",
  "key10": "5xcvMwR11FuN9Svz7CMpSsUmEzQ7zR1roQo99zngc4PPVmwkXZ5twBqj7PktPXaAtcgNKeEKAHU9TJ9CNnGxH54e",
  "key11": "K3J35SSW5FzwF2RXiYoKFFSXayWDAbFfa5s65pRFnzorWCD8MWg95TWyLNdcg5YsUUaNLwDXVLp7fhywaTLMSoz",
  "key12": "2E1aL53jPqUzVYdGLLrB1XvLJbBAn1D87Wpb1n8kWjTQuF8yA3Uvp6tk31Cz1Hj5fkVHRGszGnjN4CFfW32UR7f2",
  "key13": "3dmGhWvnZgqbinbJoJh2siM5wkQoVhQTfdKzuSSP5s9KrgTd7Bf49FguF7W2B7JCvds7LcSqMbRy4D5u4RQUwFzg",
  "key14": "KU1xwfiU6enHEfNrZEyU79m3LHd4VLHKHLiArQVZgpSVqxMZy9hXGma8F8Q37UNDMyv8CUNKHvaDM1YZHWTXJrY",
  "key15": "NinS1sFJygMyWyzWZwQCd6NvUiRkJsho6rhdkqz6N96617Qif4ymc1ge14SJvsajJt81ZavXz9XEpPRhzFyBxMU",
  "key16": "284X7KbxYLJAksh4fXFkjKfonbwsBASDZyRGQXyQmFhx56FS5dKqUmM6akQnfJ5m6puA7PBYsbdvNANhoXCgja1K",
  "key17": "4t7GZXsfhRBkja2W3sdMfCw8L7wPUSnv9LGqKu8mZjCj2ByaUVL3jmYpeRgoiy8KNiMnoHEjvwGTijtTyuoWfdH4",
  "key18": "4WjVetLDNrFqjLvJ4oWhwJNjjcL7EtYDnhQ9DYSzV9wCExZBhW6pL83mHQQ7mtnr4CRfTUNFyGRLHNcoUqnLpLPV",
  "key19": "cXVo9DhoMdtzWYXh3ujKEB6i9wiWmV5sW1VAYmHBfhW4QGiU8E5AJUBeLP34Zgj3Wuw8F2AWTvAesAV8bGnPzwY",
  "key20": "2yzApCjz5tCwbSJPFSrFHzwc8TLXepVkrrpuay3ZxmJW76ct7eN2JGafkUh6wsoYLBowtdJs2ZxWZexB1nHNYVQY",
  "key21": "2TFJa26ADSggc8PXvL2d7sdTYB8pbcyd1Qc31A5eevyTtHyJgyX2qB6R4F4VnHibL7jVtksm7JKmeGVhCUDYWDX3",
  "key22": "4rGoeBdvBU4QrUyPh6sjiQvmZSJzE99JFs81XkGCZ6crpgeb3i61wixLvg6VcL37BSiXSzwJE48XuwScsPHH3RBv",
  "key23": "4NB6urt8ztVbrEnGDt154L9viSoRLs7rx8Tn8mfuMeHehWEh3oRx293jGr4MwVeGKQb1ctcWZUzkjbKBMvzb7Yw2",
  "key24": "4RdAvaofyGMhFVUonrA1rWPhxAMpKAvzq3H1QKZGfkuan432rHsMidf9Cey47iYBDH5eEhWSSHpuYwF5CTZXx6NC",
  "key25": "zprWi7AYXnPGB3fp9wuZ6zRL1Rxtzq1W3vPK5KGwvPVoZaqaNSXAtu2H26XUnwhj5YCspJckHdNzFwxNbJH7dAn",
  "key26": "41puownJBsWdiUYyT6A2FdzBFr4nYy6wEBxhW8wWMQ7LV1qBWsvG92jiFG4q5Xp73DMcLP63GcJm5xX9UovjJ46q",
  "key27": "4woMuw65yRW4dX1dx62FiXrk4iuYo7fVufNZamswwxjkQ1LjbmT6Uh5iJzC4jkyZponjgSLHsgJ9i7VyKgEpcSjo",
  "key28": "rQ6pAR8eZKcV55bLgsPPZDXeVqDxDPD1cRQUijUVQyr5MziWciQi58ighx79cf9mzwpvPvMmnFDyn4ZkkbzWXiD",
  "key29": "4QrwWxBLBDSoQEFmkURcsJcGZNRgPXTUEar35QgZCyX4dkowK9iywfBXj79tdo6FcBdt8PQQSiawhDpLdcPACCcN",
  "key30": "2bkbJiSkpAKSc2rL1No9PnkPzS4ELD8fBBQcY86KT43L9mmZyLuueqTyZok7GJnJU28uUJjEx3NfjfkesdRs4Dc3",
  "key31": "3xySVonbo2xbEWai1PAhsXRyPqD1aTCt8fqP9hurp6jtkNThnhDJ3mRK8GRujuzZD3AKdPkknLT1LQj8NmtMrC7y",
  "key32": "5v6sVvYZSfbvoAhcch9izxqTT36s1stcVSxYvA78RxUL2FcF9wt6ZTuQoqxdHTDPejsmfWC7JjKAB5cWXreDCnen",
  "key33": "5FnPimk4kVMCocfuvpDQ6UeXT1pcKLhXwo8cKPjCX6D2TenqUdjMELS7C8CRLwqFtDJJdhBrXhXy4RNMnDTDb1Mu",
  "key34": "fg8dSKcQhcKKswLViczvuZojTyQak9tFRoQN2fxW8mFHYzZdxgmWwFGjyPPBZAC8eumXy7ERu4fuBQBzH7Nc8DV",
  "key35": "4WFBprhqy1tXiV6jryfV9nQLyUCtdYmRp87BMhH7Yhkt3BGYxTXuSvmamXzMJRufuvzpD4w5TVKWmDQA8v5Nf6JS",
  "key36": "2XTEQEakwwsUcEnk6tyDd2tcPaapESxAzdCqqAgMm1rqZD929mwmeGHHCJNjco4x6CFyYytpvCUuALVUcCZQB4Cb",
  "key37": "yPxQrZBnA1VvAExZsfK4U8uTt1ztsY7wguggnkEFXv9HdJFRcC7sXkhSBeHzN6Yf1ze5Q31CMVva3VnxTyEM4Fa",
  "key38": "3FvDYtiE7yNvbyjqrjNSBrDSzw5KgWAua8HinwZeBvWbqVpngEUSp8H8zxwPCmVfFv35b5g76xQZDYQ7cD8rPi3p",
  "key39": "4GsurQGCYp8dZddCQ57ozjuJQLArRXa2YeDyEKjXts2WuKRqeZghVUR1KnTEik358v8zomRYeGkqUJFtzSw4EXyP",
  "key40": "63U8MqW7n5y5pDn4oVH9nGCa42fRwr9Te9yoPXcyoN9MbLSFKy8f3oBgwSNSHWrjdGz63a4MmLkmnhXgRjy5u83c",
  "key41": "5girr4KJexap1sZCZvB6eeKn81mepWgUztJcrhH7PZ98EyStq8EQAHc8vk6NmAjMKZvWZzKcTGWLebjCqnkdWTy5",
  "key42": "2KPfhMJsN5zkFLUc2rNzdcUy3K4JcYkGAqYpr41sqbpy3Tta1XqvUFWfUab9TPRHUAR6fyp2mHUrXYPSKs4iN2jT",
  "key43": "7EYXh2bz5JaXwg7oDaf6soiBkEqgvN6Wh7EsjCCSGeH7CK21QEtNSyhR6EPLRe6Py8iZtFKY4awv8rZBoSnoaS1",
  "key44": "5Mz36J6zU3GjdN7n3M4Lrd4gw5g3Lj65oRiWsy9ggZEn2tB55kZU9fd3kmYi65tZAbY1SW83v5hXjNuo3hmmN21w",
  "key45": "2RZ9ZPW6vqnmgqghgsQZVv6knc9aVJ5fNvaMrn5SHitRFJfQXYFEcut6b7SBemijD5FoNE4pHDxPiBrjCKfHsddX"
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
