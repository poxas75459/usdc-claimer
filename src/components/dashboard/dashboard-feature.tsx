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
    "4EDvUu92zHaVWKVCHwxvZeiQkA3nLbTezYcLNtscPPw1JPAsTZu738Yezk83toWDTirCDJjtKXNGbp2WQB3d9rLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mue2vkRPgb93vkDMMC2rm7QBdMrqJTrGcKAJm61G2FpqTQmyZCZrekQmK7ybGsbU8Cz5ixPcgw1hZ418rkCEJaR",
  "key1": "5M6gjLCv63zCEtYmFMFQm1J64fSB9VtLS733Lh4h9JvhuCH8ivnNnPptqYwdfujW6Ufguee9dozfpKu8cJbLtWqE",
  "key2": "2jtCi8DoDdXYnTvcY2D2p54jJxXLZgq4aHtSQuAVdnhpJzoNy4uLU5qLo1juDNNH8C8ccvCeSjHeH9J81ojAkZnx",
  "key3": "4objTbTh2SJiHuXK7qn7qciPLz3XWNUxUMGyprkQVb4HuZv2aLtrLDNEPabDkVQ1ZAdTYaXtJRugZFPRAUgm3hwp",
  "key4": "4iqQtWND7c9casJ3FnD8s4DWQNQcgLAFuVb5AmHDbfjRDFVZ2sD27yS2oDqBoVcsD6EUirPncqkwawxNJuJMW5VV",
  "key5": "2Aixx7ReTwUEHpsEiw2wMwQxUj92UvUCQM4icQAwYo1nra3n7FfwU4Us2z6LskbgX9PqXeNfog2j85sYnUG5BteE",
  "key6": "36HLoJ9ZdQ222k7ExHZnT4gWzwmMevoigFtkJGS8vsFhjwpNtAS4Mro9wj1u1EB1qZ5syb5KD5SebawZ5YgKfUVy",
  "key7": "5GnzMMTcpYxGhLLkcSSqwZM168bw6xvc6mrQApGByTdmhQhhUKLeyi2k9Joqpn2xvkVvVcK3LjM5XzKGjT2FDpk2",
  "key8": "4dwiBjP2KNiXXG4TBaKezc5vH5m5EQ1fHGhRqLKyYEC8BUfWH9q9z377bpA2QFCQMKKvC1ZFYW6rVozM7ZwQ6NEc",
  "key9": "4Gq4mytSWu32agdifimqqUsE2wo6kyXRC13jYJ4nJoeiWYxiam1tDyGP2y9imkJHm93LgBmg173M2fv7URBY6pnm",
  "key10": "5ZMfPVzvpZMjEJsauBo87fwAL3XykbfbXYGeg8UDDAU1yfgpQWS7viuaNxRQCCWnhXKa2PxwC4wBS2up8y2fVE1c",
  "key11": "38YFvdJd2FZgRtku4mLNWfuSWB7SKE1kDZNB3p7grch1JzMmxayiE1dnNM7cjggTv7oQLa8UxrCnFird4NpZkpMC",
  "key12": "3P6gpdhrx9CuhEGvHX8aKi6piAZZqjjA8jMpo6TVyEXBZSLUKzXWwQbt663Bj5S1kzxnmHmgmTmCjy2PDRcDnFyP",
  "key13": "4Bd5ze8ht4Pja1SEjPqCxDEWwRBXDKQWnHKEAmDE9oLpqG2PkoUfsDHJ5JsYSBvZ9Eq37Vt88Bqtbw52NPt38uVc",
  "key14": "4pazLSTM5Jq21bLkZQ8q5cQTYBdr8qxZSyyVxj9bfjdesf6eS16uhFFUBQofdin9tUvcLB18URGj3ED8uLaf25o3",
  "key15": "4WQzqvCndGuyn2v8nLbnrLyKxgu2LRoFoncnpzeFRhEUvxLEHQYxKzKKgQmbxch21ziVvFaTFuSU6cdEtFNzD11n",
  "key16": "2tpJcK8ZXuonDNXq2cc6zJcDp1hSBGjhQ1JoY5znibBJgYdzbPm1j581hBqXMRYAhcrHbGkqxsSumi6G1BWwS11B",
  "key17": "3MSexYPpiCWEwJ7SjNWiDAL9tmFZxanJx27JJnoEYrD3jDHa2eAT2kBx2QQz8xdX7s7vu8G6ML1bh7zELBV8dbXk",
  "key18": "3P34Py142sxcKmupxXpd92GK1xz3D9GhSNFoF1NPff2QrfsCCH4TCn6Yr838RUGvdBubQH7p5dbJjk7Z71ZMmHHj",
  "key19": "5JyHdJ6i5kCABxaFjauGkYMAWY3MSE9QhBgRhQibF578yRRTutHPAGpLVnFKcK2jTq38WhHSqXNgaYtx67odyNqJ",
  "key20": "4tjLppPS1AzNFSWt2AF6YWKyRbVEF3eb72kF9utiaYgRBxpQMG1AoGqHbuwcwAQrn5NayATJitGutwpqMhEAWnj9",
  "key21": "5veKVd11pQKxE3LrdnFVhUktraUf98bzu6NEnEHzNVQeNgijN36WfcZJdQZY5vN8esMAVqbDNC9cmVFPVWDMrXvQ",
  "key22": "2HPYJx87h44qg6xVLVSm8fY937TRxwkaw727uGSmGC1y8EXdKUYU9G7tqAV9xv4sFKzJndQeohqecu8h3WaCxNWL",
  "key23": "24v8JVPeGw93wVim9oMdSSHkqXn6WHBY68GJKF8nU36rQoFnMpv1xexdnaZwTJcvWxJ4pY1k9iTpeE2zt4z5BeaH",
  "key24": "64EbCAgUwMZz3sayvzcE8gXJMn697jJoHnSauMPiQjtCC8gvPPHb9unZ2dt1uGK5XB7946tzk2phvD1FZ4SY7GFe",
  "key25": "BSF24ZZBxZaHH2dP9Q9LnnVgMaMwWHWhkg7S387xj53GZyAYe6s8KnLvZz7ZYHVduXnyXT1feS21X6rTR6AFXiv",
  "key26": "4nGq7M8Y2SJ7E3AeNM83f6ek5BJ8cMRyztu5BpKbXwGnSZ8tj3YyN6Su57coLVSXMrnuDJN8gNtMqQR5GHVq5yKD",
  "key27": "4CWg1feGp2cJGsFw89sQzW24zBTg34mxUcKShEDuYwdaJA4b8sqB2bhZrxTY7deDgp5KEWYa1RmP6x6Lrc49uDBM",
  "key28": "4A8jtGriQKCXZ9C4WoyPGv6fgt4DPJ2poEBKnpB1gpFbcuZT3ZxF9tHgMP1UAYXE21ywMuvTKbXMLjq8wACdqv6N",
  "key29": "uWCdrxF4TfMs4o2dE14to7Ka4SZ9EirNvMksTGe9zMVj3JCQgAEd6uDe9TE3KTatbhgfCbokv77TJM5mL2VchYG",
  "key30": "5rSB4hKuNgp4ByUbZa7Ey2aikqUkBupD2fPBjBg1u7qycuDscJpeoBBLSyLUD1bV17MwAkrhhWcYnbm3Y852vwKM",
  "key31": "5P8wZZ9KyZfNgMpiRCrL96osi32FcGRdkLyXGAfJEkrLVndYqb3Vbb321k1XkVaFMYwGK32eX5s4ujFqCeu3Cpkj",
  "key32": "324TbfNrJiA3QF5YDbgEooBc1otBRXr2AVKV77hcqoc3TDWfKRTCeDuKnvfPsiA4Sx8UdHorsCNDLAQJ3h8eF4Wx",
  "key33": "TN4k4L9catoSuJBmqBUU3G9EVS52zgiWdvC6nQKoAGBRxYg2UntstNtXHvrYJWHdaNt1JbZP4mxx63t6JTRYeUX",
  "key34": "5arEb5F4s3mhWgAViaz53pSr7HjWCkqEwEg7a4Lqo36zvDCDSaJVTNCWKTG9Cu8SAeybzRBTXEy9FD9hn61Mf3YF",
  "key35": "26YXVdMEEj2JfHrBgEEqCyUFg2FxfSZ8dvG8mXX5jf1HmtyB3Mz1TByDPFWegQacEVaSwDwSPidjYSA1QaiYNFN1",
  "key36": "3UTHDQ7gi4qJVzV9BMhTUN4am1Vmq6Bp2wQkofyML9TnqAV8VrJ96cHAEvuibuusDM2DSphubq9o9KD7PC7ZrWWv",
  "key37": "33o5hF5Nj4qdxKarTksveqfftH7G5wEaGiG7CfN8XAhRseFRMAHr1YUweKjYnTHVwGeAjS1v7e22ZMURc96LRkEK",
  "key38": "4gEbDHn94CKXuJUNng2XySAsZPU5tRUy4B3JRfqqmWJQMPzJVXVP3QtNhYWYrRrv9PZhXu9NbXV2RNEapJuqsVbE",
  "key39": "5goxdAFd5VbnTrWfNCGHdrwvAi3tFXm8CETRTJArbb6bULHKqqrpB3C4Uz56uy9nRj2cWQZxcWbxj7315qSjXWtS",
  "key40": "1dtxneaqSmQ8TC1LHbEdbJxYwfsykm4ppV6vbjA8GVfPXRzjWF7kn1rg1PKr715bLLCRXqRaaYHDEh9KgtjToBt",
  "key41": "AzoPoKf5a73iYLRf5yjyEohcrK9uAPwVN8CxYvLvBzTHr3PJ7GUzPrj1DMU5TspHGRPiLLpXFMTaUHpebPjNjqh"
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
