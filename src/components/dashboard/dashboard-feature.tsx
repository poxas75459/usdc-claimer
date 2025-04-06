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
    "2Y48bB4A1Eu24fFQ5eSQzZTkJKBnC34YVBrRX9U1poR72m2FHdhJmxXxUuMRySp1MdDRqeEoNqU2gzo8Xu189PPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XWkWowJcNhW6fz4L7AgmSCE5ULs1Ptdjri1eRrGxW4YJWz52u4PMBqXNUgsNm63tzj1UP6csPCKuATfxocBm3V",
  "key1": "5PNvPETo4Y9UkJtLgE4d1jSpHy3hSMWc2Shf8ZQrV6dm6TqQUjMWXBRqAL5tFTtEdTb5gKcSRgMsuXzydickE8C",
  "key2": "4ozdoYbRrv2rMDRiZeXe5dqT3rAXQkVyWLeiF6MdZFiNom44WQSNbN2akjKtyJE34YnDzwdCLiQRJtNNWEbKNxTK",
  "key3": "33h3aBjefkyTngAnP1VFmCxCNr4BbQ7SNUaWH6r7csTa17MWUGEAWgEzeyArQc5qLtegDXq5NoDWSWwQk4vGiiau",
  "key4": "4jZK9g1Tc2QhUvnXt2YhB98YdgWfjLJSLpRZgwoCqUzbrynDzZtou7Q7j2hxf16EsAR1Q1Hj4fEtXCP2a1836vbz",
  "key5": "5d1vuX6ds9ZBN92nHcLSvogSZqwv3tEzTbctCYai3EpLu1mx4pzjq7DFp9f3EYxgWzWEFmZetwntouzuRiHigvUB",
  "key6": "5rrAYWSLKWdRst83FStJCDD144N6fbMQ5ismTUr8u2aQswQPHdxu1mgk7nTSUjqFm6ySpTc6fJ2MBXP3W54vDfCz",
  "key7": "2k7t5WkaDUETTY6CeDkzHaLgnXfT8ptiM7bvX8nHfve4BWvyPuNMoDTAkESGSnaYmxBhh2qD7fkwBMi6iUYJ6f1V",
  "key8": "5ca2ethamnQmzX84qsbsVKGu2Ci9bUNtu84BhWBgZbvkBXHbh2vR4mb6XKurKgrsrLKs34U3v66jyqzTWamkFr89",
  "key9": "2sXjEr1tDUn4xZunTjQEwHkWSEFJeAJUewkcNghmzkRH5thyVMSipKe3b7s43F3n5GXHMxmZo75B3uNgYjp78Lbu",
  "key10": "3w18yzeo4p8tC9CQNwrCd7WCc4bdFLCLqBAne2uM6dugutpMmNspSQbqfDWeZb1CwmqCe7QTuj38BznJFQPzgV7B",
  "key11": "58ZTi72rkQMLCq5Jx3NKJSLuBkTDXFbvjpzNT5gEeESfSQBEm91d8SirrAjGuj78L8awkz2GjPkvD8xZBkoW1bYe",
  "key12": "qg1RQKbcG9AJXGqKH4uwJP6XA31NeJytRJyG8caPhv1cWiAfLPrwAm72Jet1zWpCGS8VTvzmzkmZAKntyby7JYh",
  "key13": "2N9ZDuRuGAqd78LYVHx8syQEwYSGFoPCVrn5wn4tMvJ8GJsyNjSS8pnHdtJAK5L2bxifqh9ZNxtK61cfuAGkfvzU",
  "key14": "2HWBgYkQmah15qkWH4cepAhyKEXQGrywnAR1FFFE7jJ74SPpTd6YHxHBNCm3wBT7qkxuZih72UHyoXTgmFwcdyoq",
  "key15": "3wvNE3VB5svN8Lr16gKQkVTdfp5JPgJ6di9wzVVe4AGppoiPwVcjkaa7QCXyyRcvGxdxzMV2B8PqXckARgHYuDiY",
  "key16": "2idqXZo6naTY1WMmhZ2PnQZE5CAGPFUyZWwcb9hYLpcdyU2UDpdJujmGqhrdinpureahLYajRazsso5qJtZbvzV2",
  "key17": "57paFByhrwDvW4Wqw6GJaXgNFAXspiNjsVRKkuYZxGxmvvY1LUKh4TRqAuVUgcqD63wwrD9SW6rzXPEWzKV2484e",
  "key18": "PWP9mskYgUc7Gj8CyuxQngwhqQRUUxWL5iYVv6WiqJvCuPjXCX1Hv6RsawMCvL6ZnuSuMZ3FZkDvBzJvgvHZ2Ww",
  "key19": "3UV5N83yJcwcYA5eLuVsrii9Xqrzokipr5DirDRHEDY3NKGidgZG6DqhG7oyuE18p94qukesGLbHHH62MRXU2vwm",
  "key20": "66ZzD6T9duEB2eRGqLCgxqkqTufSdzbU3ez6exPuCLgeLrcjWbT4omcQSx1RnyDUJNR7iH6dxJDBvkB2SHB5PQLs",
  "key21": "46UMiQuEW8fBYWnp18aibHkDB9tyVMpZFNRvFs3d1qh1nURuuofjC4VHobazSePGrERZRFXwi6CHbMEhQrnQtnjQ",
  "key22": "5JrXeQaJnqjgNBACVbEjL7sTbRExW7kESzHLuRu9wUZNerJGWjGeqG4qnUMMBkxbuGDpTh1CibW8FHqhZX5gpPs5",
  "key23": "4bypCdo6nnSURewkgwMQq8K4TNyoN9p7SQYvijfbQGfhtnmG8TUiDUSa18fMCC27w9wW2R4kuWJT5pvN7XuTa4D8",
  "key24": "xCXNYDbNzj9tziDgvEdLDofgmUb6bWnJ7Sd7u9WEstez8G2DNyUqQjhw5vQM2BN2dyqyUwJ5Y3AJXp3BwmT5fac",
  "key25": "21xu4dooE7P8gyDoKcoHWptjwAd9dnRXzywUUfYLkCPPAN9idHKDzXA5E8UKy6NiWvhCq6hwFy3kd6yJKjAdTVvV",
  "key26": "3hT4cpXP1dKBtbBT6z3yaP82PjMiC33GW1GoYfm4M4Gv6idWsJSauSQ6pytTFF1svWzMrEYQf3ECptRDh6ajcVN5",
  "key27": "3vbu64JJC7w3i5VYTDxWumF2wgfTEjsoEYpbaSYkn12oUBLeczVEtpFY2MfGn9UMMmTCLjLaApe2F35jyK1RTARD",
  "key28": "3fg5XTZGCXjMxrhQmSterUkhkthmBTmx4S835yonzSeDtjhqxP1KaCK6NK3GjjzRg6f7uDiMiMXeDFoM2sRg3aAi",
  "key29": "5vL9SUJf8CXJHsZTiNC5jvuXSN89xG8CLH6gYbiScsnExhWivdEDUbjRyK3DwWucME4x5H6qCzX1ZdT6Cs6ZPrev",
  "key30": "2SWyh5FSYXtkfNM9hWiVec8tykyGnFKJV93xNCTJZKpEdKwJUHjApuz7Uj23DwJmkG5w2Svk5ZPQmM1fHpuTNRtM",
  "key31": "3TF7fXHCCdjZkpggMEef1kiVnZMtHCpCsRxUDXRzjRVBZByCcpb5dqXWDrwKxXGBE3HzkrdA1b4FiWLBWu1xmTDA",
  "key32": "2UZPrd7rQqLezxvp7RYKMexZ2JrctPCvB3uKFaxsRgQDLzmNnxQQfmNSXx4Y7iK89dauWGsmNRzf2FtoGLHPmGQz",
  "key33": "4c6p1R4egH9HBRmRy33XbStsgP51HPRdkYccFGwUkn58PmfY6bdaXSwmsBm1MP7awMpBa7S2tFbJLpXzfnKedpT2",
  "key34": "2d2W86ePJDiqgTZoTA9hphSi1Lkb2yunEci49gwZwC5oRJtbxrpFwQX1ZXtrgwc6Qi6rgZy8Z6UBbTs6mGoUE7K6",
  "key35": "3dWkpgrcZoG6iDiNX21wAVctr2nbj4evJcsg1HtsE9qYs3VDSC5CA5gC1hKwy3VYGc4sMcN8fR72FNufb3mN6Uu8",
  "key36": "57o5u2tUEhgRVnyhsexhcBDxMcfPXrexUaEi1W74yLNjpQoq9pKs1yqt2jyjzPqp61tVdAbJdnRtG8GvdiKbU33x",
  "key37": "3DGdePU3DU1jPbG3aKhHv7d9u4bBEdCuUSF2fDUkCWVBXdeF1QdXwVjnkanuahB2ivf25fhasXkneqMoTmy9kPFN",
  "key38": "2N8xaLDSdP9oT71qwj8jfV4jfYAB2MrxumBVKVeJcbmjN3kPgvcepWuBCmxrF5mmy3n2V4uGvPXWXVXWZAbf4G2V",
  "key39": "3q2BmKbW6NH5iyQCEu1u5VDTVbZ2wWptgsjEGXyH65LP5eLwAJV18hU35inR5SZNiV2hz1Ub1bv9AF439JbH6fr6",
  "key40": "5DqHBxLbGFkMRCo3PrAN73Ppp1V8c4HN4cigazRmcqoYtqaQm9khfPgWYQTQ7ms7nZkcjUp1pktHgXQvscby8dBw",
  "key41": "2JniJMRmP9e8xubH2P4AhfxTBhwbvRe7gvjTPbA7cyZWwyKtQ3zDP61PtS4fFoGbopGQiT9tQ6t7RKj2XvjimYjd",
  "key42": "2xSprVNdNJTYErLqr9txcyL4GzyAu9mSpHpryptamViLxt97d4mSgqoEBqHGwNAeTmy6rXApZf7tLYes6q7Np9cq"
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
