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
    "3c6sqpbN32P9nYKwH3A9RHBmnfPooB3rjwY5bR4Sd8aUDUTCgm7ioNxBwyFEswdyfD1UV7sioTrwxQVb62fFEvjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ctXTYBs6CBkghkmtCMJBen4pNU6RjJkH6avwKQw91QgY7Zt3bWFxxsm3E6xQB2fgun82bKSGFBh2BJZ2KWKgvwL",
  "key1": "i7sYumL7xxi4AnqRTnzz7oLAwWfycnLFU52DtpGai47HKPVafT8azMQhnRvNhy2EbpDmE6ZuJ3hMFiAs8paC5qe",
  "key2": "2YyhdX7SMTnUmyGqGbAYgb3u171QCwsMP6s4NWQRc5iztmSW4GjBRf9SRxXoby8ZWv8Wfbd9A2aGeouAFbbSPLzN",
  "key3": "4wE5yXJkZF78edp6i8E2U6nBzGfKNb8HjeZvGVEzm3LcTt88wgPrUoZqVEZH5T9uXxzMxYyaz1pCaxmFijNKXaWM",
  "key4": "4ag646sKnzgj9bUDTg2unjCvSiYjhEUdHKAGKRtinorG8tS8yJRKePzGc3wYc17WcsLkx6mPgrrVamA8kR3HhgZG",
  "key5": "jnNy6cwkM9J1UT7nqgMZwgR9TFxhm4oyJSHsWgjf9jV2CuaJzN8H1GiSDE8ZsaaDDypUJoHkrm7AMLyGuQxapnE",
  "key6": "2KYH8ERRNwELmSxD8Xsme8sBifuyikvTBeBuzRg9AE4THepwgouDYBTiHTX4zXPsyMrh3NHyWR8eM5NTV1ihbKgH",
  "key7": "4DXRQmFjy93rbJLxNjE3LJP28EYW1o7NDBfsxjNSWqBviJoao6MsXePFSHsb4L7Kz4GWjxYHF8cknL8JfUr26EAc",
  "key8": "ZnjryoH2x5jABzRfFjh4mYRKqLasLb3mwLTG6qNEqYyr9g8bjUR6k8ohXkyHktaSsrwcDZtAvYmwjzSms7KUfbG",
  "key9": "wXSy3ddMrpu9xJmNEK7hD12VPkFMxRGqfZG8DBvsDzvkdT3YCJGzEnWwBZ72wzgiQinm3rC7jsUyDUk3sxzJU63",
  "key10": "2vzHacP7QKbTnkti9utFG5piRAKd74hMRhdEs8N1cdAGkAMv23kCwSjTE1v7wCZYAyV5cV86hdegwNw9ZqS17GV7",
  "key11": "2NXi6w7QmRaxZ1kmqrPTvWmpUbqddGgEFDyUD1FFTKfLV7LbxrqHbr2ziGatHjLuhbxs2UZGsowKA9FLmvbK2k74",
  "key12": "3hQJ3C5TRftP6gvejm9upnC2F7JDwTncpLgw3HWY24nKDBg66RAHPPpFxEaHrvgjk6SakpNmCAdvnXdWAGsjz6w9",
  "key13": "4hvHoSsJu37JECfpZoaYts64yViHudfToHHgx4E3M4hg9n55g65ngrDXRaL6tyG5cyorL9A5d6URKvkaEJ53gziV",
  "key14": "4aqjLKartsJ8KBTjcWS6FitLB71CfuT5LWnUzBDUCeTymAMN6V6F26tURTckK5oBYr7GaspYdvJzV9tPCF4g9Kkg",
  "key15": "3xnpkJEkiSUmYHnxKV6gHBmcpQJZz13nV4dpMTDuz9QKDrYLotTTTTrsdWyc5bsRjj9vdg2G35kEskkhctmhmTfS",
  "key16": "FernR2hjUmWdVGCLfbCPzekNKTc13dFxrE3vXtnMzrTQUxkv1EcvZGVdGotwZAxefVUjBFqL8qv6S4NX5KoHRyR",
  "key17": "37zU7ckD3fCN8FtMBej6kRtQuEfiL9efN6AbUa7rkCTdfeJENKc1idJCBEQK2NPLyqLnn1fJVob9Fk3V1M6hEUiv",
  "key18": "2Xq1PCZJRtY4F2BHDhHsWuugAsRKnsnpYRp96Z9w4DoFcvwbmkbL5YpRswz3LGT9nuBmitAfzVxca64xwWamYghK",
  "key19": "4Dkc8gEH9ev7eXngrn2eZQVgy2heHgfwbuFAhMAJihwFMU36J7WdxhYooLgqGfiUYCtGV1gm6zpHdmZV2Ro7fXtT",
  "key20": "474gdyFSSeKWrLyVsCFpD1zknHLmrr1Ux1EQiwQaxzBsb85pbGQRky3cV2MDrRW2BFoezqqtw7ArVkS5e3wMTBZ9",
  "key21": "2ieEJXrxES4DpvNU7eqxvo8KjSAQXzDx4WWYm5LjSJAMzz2AH3Z79HLPpTAT4GnV6yzYsJGbu3jBSFPeUpsYcHfB",
  "key22": "RFpCoscstVBzb62D7kE6PWiVfJxamXzUG7kb3GPZQwSwF9uUfKYd42Ee6dnRaVWkSfeo9VPra9iM9jL5pX7NmtJ",
  "key23": "2Q3st9ssYuFJzpvevDucWTfPgXRb5bTC2893wSV9HpQLvLTC7xcgevKahUHfVX1eV1VdjdBSgCzTV2Yg7Y3d3ZCL",
  "key24": "22FqvPUFWBHJiiMKK6cKz1z4mmkUPaceSfRFT8VmVUaeftXppGmYozr5hNGufhrBeJ5HHxY1JQgCzgBrHgWV2z98",
  "key25": "HgWcsjpiEdZsaLULsDj6rsRe1Bgza6Ma492yEmDCcEcSijvZFFGVJyNou6jm2iJReXeFw7qam5fHxd28cmuQDGM",
  "key26": "VXY5FMwpboJtxLpNbKYvEkZXtrDAD9f7aMwx7xNYN8Sd1dgyXK5qBpkGQ6o4mUv8qx2hEd611WjmHxWgNamP1VS",
  "key27": "4LKQ6FS6cG4Ua8so1nd84tAHnm3wR8o8W96MyvA2tba6pKT7XiZQEUMA9epNxPFWa2RiHaB6SrPUK2zLyhx29bfo",
  "key28": "zawu4QmWedSGEm1vDkYW4b9jsb7S4XFxKsqXugWWGvkB2P6Xh9jcXetH1TWJ5Bn6hKwe5Gf9kyHP4BAANhpu18S",
  "key29": "5zKm5rm8CGv6jwXVLX3UNc9aRMXM6YVAE4mMRzBeFZCfHcNkhwf9iDCSzRFVbju8X6UXxAz69XJxf9u6JwsndcTF",
  "key30": "2SPorVLCQgmT8xKK4biCimw4atw3EU6bftiJXScK6HjC8riKUtTBRo46Bs1oL7ACGZPVDBsTxVR8PixzGdhsMStJ",
  "key31": "47xWE6bZ82W5dapzMPNWPoVG82TPbYoPhXYsxgRogmm9Do6dvbJuyQvqCkmicAFx94uBjgddD7v1K6biCuyfXpRB",
  "key32": "3bvFNFs4rnNhWhtujsbAJEc9QzRRzUqj3tV5dqWh8pnfgB1fCtmHSmQDLrjbioZdiRc5R2H5vifWLm6PLcrWpMHt",
  "key33": "5B6JmareA6biELvUaAacBbPo6wCTWj5B65Lb2tLuAWcAG7tfxjPKxNbaSEdBQ9Xmzi8eJhH2ExiqQr6Q4xBcgTHi",
  "key34": "yohpQXcV7ZgccDFYi5bMChyL865nAtwGmGdT553n2sJkFKrJR3nTAAruDSmnwp7SbJr7uwWjFstMM1oSvzQcuSK",
  "key35": "41gW3a4tRez2a7j9tPThwZd5gx5D2EgttzFPDgvpuY78hueFpdnWqLpNYKvswxdx1NLECFU2YoanjSH1wdFYdjkr"
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
