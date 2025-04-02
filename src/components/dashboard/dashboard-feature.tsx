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
    "62wFJ6h3kwSzScaoba4ckehyYp5kv4NY5QwXJN71dkxfPsx16po7gnupfK8jZuXmsPemhUMyRuhoE9gBM6x4JCRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5q6nxcirWP9zDP11Pon8TxTm8cZ68RjwT6FENAiZSSApNWTgscdJYipMZavGEJHqnzrfMeU6H7WkrdmDPJ6Xpa",
  "key1": "3V14sw5yHfh3nZFWu76g3PtmQJ42nc8jx8W2Ddo7GfczJE416t3AkTjbB3CKMqFDjgzLkAetrZJSSo9m2M8Wgxgk",
  "key2": "5e9rBmdF2a4iTFSfY8yALCS2EzyaECQe67KPTc2RsCdqpSn47eGE6CZ8BjqBhGD7L4yBgvqqEtQVoaJeGr6D8nun",
  "key3": "4QXF7V8UwzqiE1989ySDd63g4PS6R2tbDZLhYPczLAZzHn7rCqHqh2BTysVasC4xTLPsFtwzg2Jm7BfrQJXTqryk",
  "key4": "2ViEhdUYybQ3j11oiaFEEU9scV1apAEahbG6YaNtKfM6c1dwKV3AwrgdH3bm2qTfoQ7tPVBgmoaFMyV2B74AQBdY",
  "key5": "51SmZZWpAULt5CRWZjxuPb3U3k1K53zZexKg6x1H6waFECfBPxqGr5NAgUNpNUCEpz9GFZsy8akiJyXfRRN5v2xT",
  "key6": "5423oGGJj7SnKVzwcDLGXDMwMJr7a5Uij7c4aqJgZeEyfagYFrZfNDLgTKS4JPCRv1srtxaXzBNnmmiN9kNKPXy2",
  "key7": "2o4hS3XNt4g4EM8oAM1tPtXsBrWYVhZ9cT3C8pvmkRggTRJ5buLcebRfyJtwbHw3o1t9mcco5yRQBhorpnSS4Yjb",
  "key8": "5mqGt3iwMjPwohmwSTkLQxyQiFHSwNhCTqdECAdATq6JAU8aNJwEcE5mXkEGLoVPuBgDWHH646A3iEUHT4p1czL",
  "key9": "5aULyCnJxRgibebg9Jhyi9W2AfnWHZFa6H6X9XfKdLLDPV35Px7qbTvjCRpnjtxuSt51EgoiEgxqyA3fSSJZRYDo",
  "key10": "2jTvwy4oAEZJes6EqH7JyhBqCyUm3ZmME4e1Wp5AeYX33ApfdpqZmEHKkQgVigx2rhRzwx8Y6GvMoLw9Ma5NG2U5",
  "key11": "X3aN4ucgtUyvfrbDBKEdCqF1pNJaTJQVKqAts7r9QKErDc1DpozS63QNJk1zdWniPap3pyWnd8ZeVTeQYdBbQUy",
  "key12": "4Bz7QAQVEwzCSMcMXHWFZ8gHJCJ7zcCQCjRSN9JZ31dbaSocpwXp37FYYxZCkYz3wZgrBXzTAczvWoVzSZ4aFgmp",
  "key13": "3arukgBsHRG4uF3EcDNiWMH4C5Ue7DqBY7augKyynax7VY8wRxU8Ly7R7H5VCJLupKuTCU95jmidLmLZWXwnd9Yo",
  "key14": "2p33AmpvqWPhRb6SWhdXPDuWbvP7sGZMAFnxujBzuiRbtbHkL49kQgz8m5epFKE4igzGNgViiVk7jK6CJ7YBLxk4",
  "key15": "5t3QbstfkknZq4mrmtPsE6ieXVtYq4JHqhn6parmbmKzFMbSUJwKkLfv1u3mvEKtgFcqfSgDkZLkvbawEpSyg8yZ",
  "key16": "4i6KEWnEpvfWw43P3fGL1TMCESFLtMdMR3y8Hhm7qBpNqWpy5nrks1tWnKLVQC7meUFvk43evrCyQyEvqtcSbEUG",
  "key17": "58SAeMvY43ybi11hVkvb25DS8gKad6PWcrCijy39zf4xi4VpRVj2zYxe7XPffBWmhTRRmDAv9FyqPM7GJv26rayG",
  "key18": "KeYjkXH73J9PvyMNZ62BkSGwRLLtfD5CX6MFKrvvkkT1r2ZvmKNpVXhjiKSUwqwrm7eD1MtkHKpBzwPK4i99DUa",
  "key19": "2nF6Abukk7CDj4QqbpD1g1eTnYHHvZQ5nWusFwqakNJm5K2pRipkKWEt5KEDiec1FVfCVMUpgGCYToMR5nhbtBZQ",
  "key20": "YZ9A1xXfgdrxFfQLY8gRUbkURyqtf548FhA68RoQANwwbfue3KZSe9A6BHN1egBHdagmpuyWcJi5pJmbrqr7sUv",
  "key21": "DH8BTUxeBFVTUyjexghopZvMEbqSFNqREYNF4yqhudV2FRt427tmn3ftGFC6xjmuvWNaCyfz3tmkn5pmqTYQybd",
  "key22": "5VvdPD1zwWnSVpQ1LGgd9hBQKRoNSLHiRQkRFJ3HWfqHTTuAbrgzfdUPJ3yfgif9nwakiesupfftcPEgrP4aAtaR",
  "key23": "TLcy58FC1z25XowTK3VhnTPmfySyCpTSZ6t1FB4p7pr25ZzBHTH3fkx74FX1Yqw1qhverVdDaCpEr1rJt3nxVxA",
  "key24": "5AdhFLGGuSgDiftMeS6TRQ2Uc1mYAVtRtYJTgRJgQh2y9YAXMRQHdGXdB5pnvg3TseaSheCv2HMCdiGH4dFm5rnT",
  "key25": "21CdCM9cGg1ejya9vPk9Zsh91iqYESBU5f4fax3LbLz4Rv3x9ixLvyRKEA2tHhEMhATJ2c7N2mZRC8eLjTscMFkU",
  "key26": "5LrJLzP3XJDANBpPZnGHb9ggUiphFWQpWM9a5HMVgThEETKCMTkN986VDfCHmEey5rCArZTSFnkAeTDneLFgDWVt",
  "key27": "323qtC77XRDv4kN8QGU3kHG2XqPnMShWEbfiGaTTKx8vamKsZStxa1WsYQsHYEAeDBE5sNSwUjEZePiGiqz9VXxg",
  "key28": "3tpDAeXoi85E2WyaMMDgtQFrqTLZMQvY3zvoEZV3zaA6rFyeZTUK7NohshTAyhJ3FsPJ4FGBpHMtQ82pPVDwE2y5",
  "key29": "3yFRDSS75xn1CtbiwtirNTSKF2jgbDR9xjBZQJ7eHCv9XABRyycVVMPcEkWgsXezWaHt8HGCtcdgaATT2tRzQtAZ",
  "key30": "4QiYyGhDybyXMrCUt2BxX9UudjqCbr3mZAr3Z4tFV9R3oQX9x47mkyxAEEkuGuuBsYENx8qe5RWQ9wpi1XLZ52Wv",
  "key31": "3WZvyzhryMPBEBJm5jBMouuG3tsRCL3fDEskdnhHUaMwuFVe8RXCvbVCQyEVNX7F3JfU2jk47c8uBX62dppknvh7",
  "key32": "5cCjyGQNWgzaK8or1171n44EDSb89TzLZXgvo2mj6gsomdYikDzLpBpSVvLUAiJYzWbUQmLyCpXtPytNEtpQVajX",
  "key33": "3ieUVMeaUfGVp3VATGhDpaPfPMfw5y8r4DSbDhW1CVGbmjsw8cZvTnZHLzCbcCu9GgREp8uRDES4Qg6mvRF8mkfS",
  "key34": "5z23mtYFDf1dJ3xabsGfFnmdHjpyxPrKsmwQRPvwQ7Y4CYEZkFYkg5ez2XykiK3CPt3cervhwfPVDK83d6zn6ogh",
  "key35": "4JSMtNaSToKaCJQC8fs2Dq3ny9MRnywELv5MS83zzhddNk42sjZ6wfKpxqzqXBXxXymeJF7UcV3qK21wmQEehQH",
  "key36": "x7xPx25XiJEpGPJaPpeWJxXUS2YUkb617MWtKnrCJLz8RcaUdPuiar8ZXD9eBTqKtwEUi9Uwjhd3UUBQXiCikkJ",
  "key37": "Py59yrpdtvBy1jnAjduNktMFBGzM34SRnWK4BS34j2tzYTwavnEwCzmj4idZeFtBbkBGm1YfyKZKVRj8NMFkGYT",
  "key38": "3m2ZzMBXxfk85txRsjg5jpTMrXPdJrGKvwps6A6YFWZq8kKsoqWR1Dfo73AaLkrbvREbME6qi8DrMxZmBQRGqzJe",
  "key39": "3xvFynzwcQkS9Hf2Sxi5Pfvj5fYxoosJWJrsSUpmRuFHGQpamDsxVaJvaZSPDkyC8VXMUav71qs1jpd5wvmB3R1h",
  "key40": "4qFcHGj45C9uF162iTaq7b7JBSmNyQSxJPRcNmDqhrVA8zcvkXgdy5KkgtF4KTiMEnnUKy3ZLALmZ9ptsVfeesqr",
  "key41": "3kTUffVDhbJJvzWvD3EQzpsRbANVj2BJmsKJYvy7MksrfuGKsbPQPNF1wERuXjGAs2xqbPACek3HctRLn5FZtFcu",
  "key42": "4LpNiAPKpHxMrhT22Q2aTSdPSJcrMCi4pcb62S2hPVyXfLL1tn2SXcqtuBpomEAJ3Jszg4p8UH76PvJKFMni3jcQ",
  "key43": "132D8nBPB4v8HkQ7gMEsvS7FzSSMJHUtF8N2NzyxXcoo2zRdvg4Bty6WWpNFm9tfAPrHkd9X2UehkZ9k6YqjnhC",
  "key44": "4EsbPZL3Tt6iKYaEJQa2knJ6NbprKjysyUAoUbWifWBkUtLZuoewBs9faStz4H5yqYk9M9LrXyZreV1rzSAT9PeZ",
  "key45": "SDGgjnLNy9gw9kXfrfPya48mPBdQF65bzs1QYs7g5i1KTADcmUjQnjruP9Vy69DPwqFqu6ZtW1QRXaQrwr2npZf"
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
