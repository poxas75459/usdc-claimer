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
    "LGEjtdMoKFTo59AUABBt8grF4dvKWVR9Egb8DKRrREom1oYEUaMuuTLvG2jB9sxhSW8RypgdFmET8GWCUre2mrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ukYXNHDD56cA3ZR1M4nQpksGFXnVp9V2d6s8CNGAmHi3GR8JKd2mh7dqq4QTE4wiJrBNUEgLbi2niJJt1ABcgH",
  "key1": "3myZCwHap6Ck67SzwvQAQCvZ2ttWf6qpJcbUaQJQdSy9p5fF5dVYyRmbAETsguGoDTgbceSPEVv2W5Tcq9jRUTuM",
  "key2": "5NJKVVSV4dWF1khC1xSMAT61JxD3UQfekY1F7qZD581dqyKi1f7XZCT3U9V654Y7NUdvbVmv6NpPYCdfb1uPGG7p",
  "key3": "4vuMBGgampCELZUa4nT9APDktDNU4u2s8LAuL1GVry2X62xdfFHrP5UVHoXCJ4SbCKPWH8zGmd2xTAMGfabFLf9d",
  "key4": "37QXym8RNdnZanufEbF3ryVxHhDhNzZ1qhKLz2FDbD7iwGBU4NDtLygj9QW8Xrgi8Ffisg44dLRNFhCtPADieAPW",
  "key5": "fTuqwfRuP3zBu2qqzBwLAENoqfgQ5qJtHqRa3xtfCCw6h314NexUw9BFCV9shU6NF14LfVuhTmFV8vEMdvzp319",
  "key6": "2j7JX9vD99udj9JiKrkfZxrJ9LhNmbFcTdhhYLvFeQcHkLj5kgCPXvYwKMLbRFRcyf68qECFkaASbWTADmB4VQRW",
  "key7": "4DgcGRPNUDCYCMknqK7CxmicwBawKiD9Gw96GDG2WbMkjYyJ5XKg8Zv8wBExh2ySkniXE8Uxp7Eem74nQrhMkWvG",
  "key8": "4fzXAjKxq977hieLg2n41GDVFfyujU1GnsL6nGd5cJeM8ZAvA8pdY28Vwz64qwCAe5pXBLQL4XAegPBB7z3WXhww",
  "key9": "5ixrf4DFLxJRhGk3nqYGruH8Avy7k3pp1xuAnJEy5CzYMHnfRhyhdukb8CM4iNFfwEmc4SdP7Dhab62sYmTps8h5",
  "key10": "PQN14NAb8vyabMzn9ou6uuQWdVZ4q5Gpcc27sWrt1iFzBjfPP2WCnbN7GxYCnVta9dqH6QXosTcMcgK1BzMq7qW",
  "key11": "2u22ERgPJcNXRGBYcDoSdhRsJUSrA3t6nrwFu1LKgVEq1vXv13ZxA19CmJTb6LKvayoVax5axmGynkWig59EoGvE",
  "key12": "wX65v5NKrnDNdj5ZJMQw45BJRBktRNT1Mw1mfXdFoFKuoREEg2NsoV5A5hTMdikK5MgrMvgvyuqo93bxKkupxne",
  "key13": "5fpXN6eMw6z4JVXBC1CgHmf7EzPW9EbszrqD4o7BA2Sd6GG37qt41joREKkv4cH69nzR8pjYjjYGAUEcVXFYkEXh",
  "key14": "EnhuDJJ7L28ZZuunCz6mmaU97pq6uf7kdqGfFWNhgrAFEghXfPmD8h2RYRLR5s4jh8kkwZ4hDiPKmV3ZjvBuJmw",
  "key15": "5d11LGeAzWL5FQ3cCuBDzJ8T8KsHYW6f8UQNHHVmPMv7SmKCPiZQ2dQaQQmCth7FdjMCB1c1x6ySVMssS2HALZuN",
  "key16": "pBRjTUdewm6mwXh13mf7eJ1LQ9j9sdHWMwgJSAf8Uz9KExSjyPVTXWu4YcHsQExtEWTQWNMEE1PEiGnaw6jStko",
  "key17": "22A6v6dudt4MXLjYX21Y4jbU4rUvRh73NgvfqTBsJjzTLj3WMREV9r8STFqqEBKDc3cKeVwaTsEmQjm3ouUDT4Rd",
  "key18": "3zxP8QqX8GNRMXBwM35qkJDy6stqyEvwY2YZr8gNkRQcmf9dUcizL9AGJeXDi4RGDDk4NmzG7hE9Uu4uBkh6MEPV",
  "key19": "4iDAnKwaYEVMSYEgTyte4pdmyCfwx1H81fCTfn6qEMGt89nhWKGbYWHknmaPyH1TUBfXVZqfPD6J9o9a9NHW1MTx",
  "key20": "4EhJKyMz37ZNZc7j2YjCA9as9tbC3VM9xiQM9mAwMGhB8xf8kuj1X8GhDaSPtaNiHtMVotjWjFLCNLk3VgKH1pSA",
  "key21": "2GkaUT1BobTWNr9yknQzR6xqt7mMqAnmarrUStWSoUq2LcHmV5RbuwtKs9gTNopKUDYJC5k1RYhhxrxKEZ89hhuu",
  "key22": "53RJgB5tBNgMQZxost3DUzrdF188qgdUKL7gpfEkECsuYQgqfHd3x8h7TEufGT4jMXYk4RXrurksDABTTLKQFRsn",
  "key23": "5zAyPjaP3j4LFRWHjaTgjJdPi12CP5U2jNuqFHDPyVDCAC1twEKbqzbzVVCVe84dxPUBoLT2Y15szkffYxhds9Pp",
  "key24": "2BDaw1orYonAA55BvCxStUoT6zKSvedY8MUzzJaPJtYRmbMtSvhPeQFkJtUTKPdGrSnfh9umstHb98J5CyA1tRZC",
  "key25": "32ASEMHLkQyYx1DNpisVS2v9r5k2cvznWE4S1EE76pN9XQ9Na1mz4f5cp4PC9jjxP1Sy6Cbr1kyi79XKkzGZ7Gsx",
  "key26": "4NftbtbPUCynuKcc1e58swpq8LmLtk8uZvLcpVfEt2UsNqtd5FsRJvkkgdwQs5rAects4qbBBXjzkfnvDLU1Vb6o",
  "key27": "3RbJpaiBUxtNyRgrYmUwx643XVe9u2oZYm3pnXwtY5a4uJtLZ4TGp5kTAJFbAsXCwCarDVEAZmhkXsoyV9jnZK4X",
  "key28": "4ifd5aT4Ab1kN54gF6sV7xehiCKvRqCTtLzmLZawMhyaJXK3YE92MMYQtGnvDsafJDFAPBaTxYriEv8M63mADqiY",
  "key29": "5LUCDiv71J8sHoA4TuGaMgNXYEWifopHZrU8qhnHccJWDxwhvhDfJMKPS6JjYRYSfsAtCkU3ikx8Qi1N2pZhuv1e",
  "key30": "4wMDrY3s1y9L8wxnkADEX2oQQGjFqgmud5tq3ztVAKqSTj2vugLU1rMayr2F6hNQZ6mMG5dMDFMDJ3GJaQmvhkvN",
  "key31": "2CgwTvgM5qGzTH4n3Wcg7nbF3ibmwfSgtvQvr9T17LRn8WXFG7FAwozjvsDkr9hjXgpRMHRCmswxgFSniuFNe7mM",
  "key32": "Rnx4oQ459P7hvjmWYbaDeCcZPBPFZiDoQPAppqC5GnvS3H31Npo2fCE6obDD2PQHD6yKmyD3Fs3r9CVdAdNtbrA",
  "key33": "5kwKTp5iaGP1fyVQX9KGaN8Sr2kpdBXPJsZj6bjra1U7AvUbr2JiXsyA9qCmpbc79MiRiQPWnLaCVtpghdnDjsMY",
  "key34": "ZtFnAXiAnchVTXVTJj2eQr4WrmfLjQoGTwL4sMR2RqedHpCBHGJCF9w9ZyfDdmWatCfgP5unRvJdvzhiitmh8DK",
  "key35": "2DS5HMzgwuQsX1dJwPq17FEfN6sJYsjHNXh3RdVesGS98PdATik92Ntm8k7Df8d9shhV6ETefaou5zsNxv7Lr7Hp",
  "key36": "4axDBc9YYYc67StL5mdEQekYoBF8LKmuD5ETj8fuwyTaJ6jwxob2Cbya1rDV5bf9a8nUtu1vcXuSgresfMacSHGf",
  "key37": "F6cWVCFYSAaaZy9uZh58RZSTnKj2So9bcRm8bauBoxqvwEsc8fPZpbga8pUvQAZUk14UK2mN4c6VCTnP9g5HZ27",
  "key38": "XBtW27XdrzWUwaMZiVG3GpAKfxJiV3H28UyoPRzA13pJLFzcsEdo59RH4F8bnpWuhcSwSpHeUiD95U8r73LDD24",
  "key39": "5xiKg7SpGurkLwuzfmr1kZxkCURt1SdohPFfamHhDBfdgVNEeCeVwy1Uqz48puxpi2gBEbMuxEpx4q1EaRXWWnPH",
  "key40": "zWiRzueX663QtioJdA3UigyuMRCjn54mPLk28kq3h2PGHWb34mJuoLrLthYictpJ1BJyTLXSnk4ReNtFxJ2egpY",
  "key41": "2ts4dcvb2V6iZsJmZCjoN7ZuF5pGMqWVsXepnzPtTjqB4BMxaCarHHFJAHV7CbFxYkD4AcLY8fzWmR4EWpNUXxVJ",
  "key42": "4CZo8dMDtobs3AoV5zor5uyBdQ3oBVr66CmK1MtgJmWK6BjXBVSzqA43tQmaHS6Qnoz9CTjycq7Gq8rZ9VF3Xdzy",
  "key43": "5Qh4b4QrFFdBL8adrM7S3HBuz8uamW5JtJqk3R3H1gBFhjPjHJYBeXTdXJCxTXSzq5n7FyhuHHp7uUJGafoYvqv9",
  "key44": "5A5grH9RJWzw1mYoaf522h8B7d2TmgZ2zYtBEaczhSBvuRH55ZEggSLRe4gvG5HvmwgmExaKbQF1k3dUk22UdnNx",
  "key45": "Aiz6uVrPWXngGEpspq9rCCHgvfiQdJ7rpoGgKkGzLFrnTHtEJxVNPBhzK6wbUSp8wU7dz516ZM6xEnDFZkwqBu8",
  "key46": "wmGGL1JQt45vHun6zQoSrW3gY6hVpaxghzwMytbRzYGBu1AMNbBGA4AuHqZ4q7MjSgsrYX7LGTs7NDUUrJCysjj",
  "key47": "29jsLZfAzbbMzsfHTvdagMMLft5xCzhtg1GEaPrAoS6CxjZC5fSNDD9ugWjDW9x8zm9GEqPyPW6euoCC99CzcEeL"
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
