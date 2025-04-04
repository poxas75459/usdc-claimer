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
    "3j4pgVyUBncFFQN1zwmX2iPrXW6mhqgr2CJC77cTamZXAwHCwjNXgVHn17bmz9JPcejv1RAHroEqP1gwAAuYxJFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o543p5gvwPuBEfA7oyxhgvQJ8Y1V2NH5Pcq5D12G1tzEukLoJ8sjHde3L3CKv5Lw7aJRkv27YqVpkovENWzuMNJ",
  "key1": "2fBevzBsySJS8fqPASzGMAoz84Syg1FXzyg6jG5tL9Haw4MqqPe8SRLQZt8JyTKApZqGEb7HXuQPMm8sJ8oQfwDG",
  "key2": "4TiqxY1ZxpkMKF9hFZhtsgmuSpCQQJDh86evAHvARtSMqfGaC3YYEf6zGEQvWSeE9BeuZMvWL3UBk12MtCZ44Cu7",
  "key3": "5K46LuRPUew6AFNq485xFGra4hwagcFcJFXZBYjV1NqZh4SALrGDbq7FfS63StfqxFWB21TK6xKffDnkJxE6zYPk",
  "key4": "55GEAMAsdjdkrpi9JwT1nVGZguiRMPSM1GmUnPkjpT4skkXDiD1RL8r6KH42dErMpd9zwsintCorCd3h4P6TAU4e",
  "key5": "4uuhAUA8LdxeynuKiEAiG5p1ZWfQFPnNXuhiNEzTCs2q2THnesV89qHMVV78qgdeN8K9db1vMRsZc351SzR3Zaou",
  "key6": "3Rbvyev6gSZ5qwUF1JoS5K7dKftqX1KzdB8CPB7Api5djR97bfA2kMo5tMb5Jy3TW8Jp6a8anniAdrTs5PDbQpLD",
  "key7": "4TLr1ZU7Fy7t3bmyYrNZZaRNCSMapeXv2geDKrZmeG8fRZbuaTVDK5FEdeYhCMtmC8qJiqq3Zu437JTRoKshWE92",
  "key8": "52zfGkH1sTbcbauCFARf1FxAyEtxmNSHPSbWUznd8EWMUiPUDRchu3zLo1KwzxPeGTx3b2HYuQ2U7EPyC2i9yHgg",
  "key9": "2H15eiWgAjcr6oXodjVbVSoUQoPjAuLPE1j7iP6BCLnNcEGJ5vuWEsEse1ZvxjBSDGzdQ37k7iAexPijHFc3pA2j",
  "key10": "5aRuQEXFpFPYEWHcaTGnbnhvh169SHqTgxifNMDkmXvWWnWQ5MDhbD5GLemhANWJ5nePvYKv7gjWdNvkLbjRKUZb",
  "key11": "2r4wEtHoTBVqTEJxRAPaN4ekMWNMfMj1bDvsKuUVCYq19f428YUFGfZ3Z4e3GVEkhMCkC91mc52Fv3YW4UEUkveA",
  "key12": "3ZV2rfhKapQ6jFtxpXjdgeZcd4KqU5Jvi3xSK2hF3ZkQiYK85HDMJ65FBnjz6uAioef5yw4PJNoFBYxNCCtVZ95K",
  "key13": "4yMQFCJVkSjTe14JUWkHTRegs4Z8QgxENtxLdFrRqNP18AEL2CSRS2Yj9GE1Y1QyBM1vjeMsKqdEAqjvdvTj7UAn",
  "key14": "2BTq53kA3SNJHz5WiHoxjLgozXdWRMoCZkYgXxbqAWFKqKp6EADX6wBn1zzgDWPkWvAVhnshcNzPHFxLQy2QY7mJ",
  "key15": "5r2CEQE6YwMo1BVX6sViWGaBmgsGy1PoxoFcPLWnN8ZsvdUdYomH46QBHsNQEdEN1vj5rmeNuRp1rVVwfzaNccLJ",
  "key16": "t5ZSkAt5R77FfydNFg185ULAaZ9jjR3w3A3wyZrGimTJNwnkwPLPgL6CUusDb7V2tydtHAe8f55KUoiuoBCsdko",
  "key17": "21DvXd9aH8JzJBxK1ccpxx4VcRuZrFZWYCLC94Boe5qnmxkWj89z1LcVi8uDymtnJgTCastcLaiews5L2QEmTdtH",
  "key18": "3pRTZzJQZ9AEtcdjgDvfeVYTpQz1a21Nai6A3hBirNTZPYxNnz3WpFKStPvSVd4rRiyjt6j5NkdiNREUNiqdFpoC",
  "key19": "3dbvq1nZzqs5kqA7Cg5wgsjKMF3iKHGZvwBpLcVtj7q8jmCfzbsUbCyn134zj3g4wyX23bBRm6qrhye4vV7ZYv4",
  "key20": "jGgEhQWskBzmTrfrzhe4oeqfM3JV9g46crqwHRFMBtdGTiMXVbSeyNM5mv3StY3Mm14PZr8uXXXAa4tAvnmBoNW",
  "key21": "3JRF8q2LSiTDyUhS9Gi6JPvZ1eC3kKM26fA8qZB3adUYLm6grsPbBfX32EFGqpiUQFnNhpyzhNyB46mvG6UmhGAx",
  "key22": "4teoAp2SAxcR5AaNMnp9jN3RHJbaFnfXXAFU1D5La2waXWyoepQXy44SBr71ecgN2ggbZd6uGhDUktXij54pr9rh",
  "key23": "4fvBKzZkGDqNwKLa8ZM3eUwE1Lp4shHCa82w2irLknviVYxF9re4mdRSBNeSwzkwu4ohHJVS3iLk1wpSQKCKrgYZ",
  "key24": "38VYdTPxCH952RRRGnaito7R33Lp7VJjackauAuXgc8ky3EMj7QWsg4yJWF6UhZ1en4ijdZkW77zeLGS8qhX6viw",
  "key25": "368D1MfLJV2rQfw4GRDPqGNRMK4H9Z1o8zCAEdxtDbRpDNfYD6HHfthWkjZg4MW9vBzMYUatj2VQVhQV5bJVoMtR",
  "key26": "27g6GMzxqZL2fUJDSpdPKQxtmx5yXTngS8bVYD2Ha77heBDPqmzznuEgZS9yYqExRPFcJjsV2EpMjMAM7jY92vT3",
  "key27": "5z5WQJd2yGTKAR4eghV3LY1GuGmHucBCKMzzaPUpSvnFsjt5uQzuPwFZBoEGTQeoXN73sEnf7Zm3DYcoG9gSPW6w",
  "key28": "4D3RqD2p7um1y9v7D4X8PEtwfgXemA3gz4zgGzfRxRuMfaWQFH5fiJpqfEKPLubzWnCNcf8T6AhHCpUeGvKdBnP2",
  "key29": "44q2pxxWhbA9YF1x3PhsFKDzjQDutB36pZQ9dKnDx8nKJAizvtZmRm5FBBwHtnRghrwuiLiMzc6psCEGCR2PfMH",
  "key30": "mcgnDgkyTBamLheRKPL5tMoAr8WAPhYZFv7LGn6gHEXpFNvbsTvyU8wx1Lzc4xAVccb7Rg62XPqBfw5iBDdDFse",
  "key31": "3HGqCWvmaUErN6jKx6CZMTB5tU9tgtFd7DuAcdCpSchKKBS4nfMKWE5N7xgttahNHSL2M53HNz5NhdJYmf3QYXG",
  "key32": "5uo3x2G6FTEp4xeDbJL93dSupSeXfA6dC6tk9zcXars566TZD9Yo1ZsS2Azwj7aSXh7h25oqqu3Zamx4V2h1zfh1",
  "key33": "4uTaihiR4N1DVCugYQXY217ohdSw5XTraFPozDaXqsHR86Fwsa7Ds2izEHsehpvdXw8vhxNGYZD2F8229iQnN7MX",
  "key34": "63erdYqkKa1NTUewXP42gBDvtKh4DGCpXdGCoqLHTLnfhBqG5j57JoSUtbaXB9gpHcp6n1bAAbGBoRHpcbR38Js1",
  "key35": "56oz5dRdUmszfN1mvJG74yAn8pbNMKBF3aCpPkpYZidq2t4wFpn26E1m1MTFRn2ckKKynD9vTAe1QsN9PfdHMeRA",
  "key36": "37d1AeaYAH5mPeDn4GGgnpbtggFQ39JBknvWnFx9yUykopqxZfBFSr4RPe4BHjg3YBycKc5vrWaRmYFDNHvjAeiS",
  "key37": "3wwxGcxFfBCeS4g7P57YP4eZkCD9BAEVhBpC5n392hTsjEKxfpZFfgnN3AvZdeGPYS3SdznFtsxueQk2SMWLkWk",
  "key38": "4UZx7j8aeQ6q6HLWtzfWnMyHdL8ifgKrV5my5vkeV34eVEwXjxy2ZhpYUQnuGTDAhzQomZgG2kXTi2TGTrxTw71E",
  "key39": "4wXH6X8FqU42XGbc2BTZXyJaCVDjaNVchDsZtyEPfrt14qocPBLSySJ3pwb43AvAVMeBeQQsMsz38C8nBqQC1iZx",
  "key40": "5o4D5V4JRp9nK38gsXMvkiBxJazRkM8yuryx6rG4onCYLf6T3ytxgF5zNLWCSkAa8HQvD4ocLEXMwXZaHwVZAQVX",
  "key41": "3jcPvTRQbiBFSsbA5VKLsDyeTSxJWH2bat8dGNjTsNQte3EJ3faZLdMQvsRfRMe5hYAQcdQLGBnVdP4AQ2GCmnSB",
  "key42": "6YBwy8MkGMYwmCwhFMs5Gp68X3fPzoU31YvddnToViHMHQZFvFpnAnmva39QSeFtkDtTGayi23ki1npoPqJHZUt",
  "key43": "4HpnNRefEycDbAYi3kc7zq6hzHtopgdheUDcZpizo6GvyfvKdJ21omQdfttxViQ47pLFkCxxXFuzKm6BG1XrZEYB",
  "key44": "GRgUZyYfKF7npEuuqZohC2k64eA8hqxraPiu37jVmb1iivZBePyT5WJEW5LDManj6vVj4wB5xX7aP7AKMx5uV8W",
  "key45": "33G5Qe2DfC183uoyXR4HVExCjUjw8S2mLXMTiZaEvdTZDhBWf11sNDNhttnChSGHjEc9zmQDkDqWo9LTr91netg3",
  "key46": "3Lis6bgS8zvCoFtUyy1HMBVEHjqnMimMenssLcgdhLux7RV1kpp6Kk6LXgv4q9rZ61aZ7Yk4mKZChfJ3ZFhWEmJa",
  "key47": "zdhbW45a35u1q2T1ZDrBNW1qj3jkuBBjtDrvKcnf9v3hpgSSTJmTVFBkmxAKRWFV65m5EtFZK7yGVfnKiHKAESv",
  "key48": "4YWvJpX3xDeXcuacWWT76WLccny6WhAFx1fJs6Spd9FjtRHn4tHY2wMKu8Pbw9FRUK9rSRyoi89qqrMZhjjA1gTt",
  "key49": "2qmp3hpWKtEEFY1TPEB8ua1iS3pobd5NiHk5G1Mvo1L5Q8w8mHLonv1qujbVJLdHd9zCya9Q43eyRmoFdLSbqa3k"
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
