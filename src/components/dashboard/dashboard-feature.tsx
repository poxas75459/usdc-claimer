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
    "51Goeop5otwybNALZRostYhMSt5oinHWsXAnzqJAgKbKvkL6ypZLFutcyiMBKYDecZsgRXtEeTt3JRjFN6rkqPLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkxaLzN5zgmwVR1tUqefqjdj2jKgGHRPkzYrSvPu2xVmyK6xmTJcySpxrEY6HfpjxwQ2MkU1jjG4UJjc7gbKF89",
  "key1": "4LkxyJrP5LQwDNqe6tV39CRsgBGWvtA85KPL4XobfD9mc8aUDCjsnoCAF5HPj1WXvDDSH5LWv2hhxakGkKfWkxva",
  "key2": "4vS9E7Pfj7XwdcR6Wxbu4d7nxkvpCMzuQ9TPVsPC6qFCo991HUbSu2D1rFgLnr3Yx29hFjEAkdtdfWYXpKrDRqQZ",
  "key3": "kLRfJyoFbGSfjjPo98dwQqG6bdfkEmk1fbPrGhdRemdX8KVPX19M8NfQuTBJkAfCUJ19PGNnm9Zn2H8dco3G5bG",
  "key4": "kirGctujyAnmnHRVh2gmeAHEDnGwGKHrKCL1DY2LmPktC3TTBzuwotTdVnEimhsg2K5LH2NcYsV6XJkwsQ232Aa",
  "key5": "5RmtuKQKeuyVZUNbiQzniPqWrymuZyDL58xSaiyNRtUBwpaNsn1fhXzySU3wWQdpfStrjtYtoVGbPLoDpbJTkqsr",
  "key6": "3RZbi1QBgQArSjDVhjwcgVgmUrVzTa1HdETWQsbiQUrMiEVDa9SXQpECDJkJJVkxMQZ4PdYNFDr8pUNovz44RNHM",
  "key7": "56NixkQB7ri9rjwAu2DS8NNaUS5iZcZMK1vKFPPahMXEhPQy373yhpwELQNxUWoxdVwFtfLnqbecLfNz1n9HVa2W",
  "key8": "3ZVGYa1UKzKCobohDPyxppaMx1Lp6DH7RYbWL3QYYapMquMxQV2q3sDpEjKQ97ijaPVkRDz4cB5mj1Jbznu3ps6k",
  "key9": "aUtGfRAxJg6fpNg3BmLeSjAyPW3HszNQsZLBdJhTHJhvUU7gco22zafyvwgCTdNnYHhx3ssfA7iXH8krNwQYrfk",
  "key10": "XWSryXNKzKFCSTptEhbsVq3Fhj5SWPPS55hfLPSBFjkxkuV3MUgNDU6w1yL926P6y9FqCrYuhq58JXhVFRfhPF4",
  "key11": "4kb5gyGC59i8RbDDqXPxSDE5hQYuVavfYCC27nFgQ46VY8s3wASKwt5jrgjFSudPFhyL13GXdDgeMYCkEm7py5xT",
  "key12": "2QPWVabukHnpH4KUBtpM3bRvk9NSscaJaSDLP42p1LDMJNE59RHmcUxF1RkZHbj2BniiYTJREMDPetd6K51DQHeC",
  "key13": "5Be6d1VvLo6dEpxn24ZucsqyRvS9yDCbgCPsMo1J854fTfjbZtGziFT9Uqgp3vVHzd1ruyzNMFojxMf6ZKTi8Zj",
  "key14": "2hNj3JznfVPEkndukUEkfPq7hA1MjiVMZGmRYeCitjyhTfK33Dy3MV5u4tZmuAkEHdcWPV9L9L5WSnNkUxx3gfX5",
  "key15": "2LrUzXXxPtBjkeTxUdPGpzTGRSsUrXtFKpaSGtPtGUsxAVeMnLhkyLnEKppmx5gyp1DLywqpDt1jpaMmWtz6w6VJ",
  "key16": "62Jqo2WpBrzgBBggtCC7qFZzUCiAPihHPnZteRBKehKvdRABKkTxnwxHX1YfXR2KEKC39CGny5kaxf3AUMY7XgCr",
  "key17": "48mCWndadsjNVPGtbkMLdcnYk5ajAbo73Ltqjx3ieeyT6aq32DEgY1JUVvcxUhWQtqhFtqpQF1HsKxqcYybjrua2",
  "key18": "58PWvHBVhfEQ9mCXe6GMkCFtJmjnihBKV197DKNBPrp4eMAJq23YkPnj38xUrh9MBhzgGBXRFPacRadiofqFRxD9",
  "key19": "35eEGz3f1kSjFhLhXqKc6BLC8oTvpiSJVgsKP8o7ngFoMupWg6VsAKPUHqssruAbDLENzc9vws8kA4EaQ4GfMPvG",
  "key20": "4BmQhjFn4TTW1ap5gfRbm39jUJ8sBHi5h6zU6Dvk5zVxc9g2e7a5yMKtxiGjf3DHNCFEQiMNbGEK1yJxE98vV5vb",
  "key21": "5HEUm2iEEJDh4vswdhwMeyJT2mEAXzJTkGRrNS5aWXs7KTa4sunRyhbqZDJgdut4kwEwiAiKxBXybb8Ds3skwMET",
  "key22": "5ZukmyVs38H6hTbS2HuuZ6TRjHjaE2Q9zMHteG6ZpirS6f1Tqx4Kwd36SeHqkfpBomX517cNuAmVRsVApEoVPRHo",
  "key23": "49zx2fCf42kEM7sj48JWQLarLZGNSdKtmmu6pmYNcLKdFpyfL4C58zaZiEpxm8b3L11icZHhhh2wP7LQVRf2RbPv",
  "key24": "4uwVwXAEiAwCRf8oq66f2kkWLZM1zbLy4Ry6XYKraZXuEDiGE67jEBovw31okHrEvkofFzC7FwZFan85vngHc7Ki",
  "key25": "2urr3eadAE4oqwaX2qHTQDGWT4YjKBMxe7uAufHs21XG7CZgBFgogTphqkZ3xHF8CaBgLDCYi1vRA46bwW7opDae",
  "key26": "25Vh6JdRt46EiruxL27P2MxaAcTxWpHSxBAqt2PfSJuvUF24TksBxn4ff93er9f95roJwk9LsDGFG8JaHXrHDKXe",
  "key27": "RB8XDVEUQ9tuox6v1Mcv8Pr4UH2Yg37bVTrnmjpcYPSgbMEsw4YHKz51DrEVU88WNMnCcUs62KPKA3CLCKXPqzf",
  "key28": "2bhswGhzQiavVHDPHSKxJW9ibNgwWLs7gwNQK6ZvAA6sVJxUr2UWeQwMXb6jSrVoy8Fab2d8ZPbZ3r9f9pwczYNg",
  "key29": "5pZqYjN5ECWwUvvS2fTZvWChBc5TLseHcNBKZsV9M5aGXwjbGorYuAbxm2dxZrfjtCjZQwsy43NhvMSG1JXQyARo",
  "key30": "5nGnThYHCWriA5mgkcGraaG4UhoTzuxX7thqs6pNFSNCgp3iYnrT3VR5ahmB3o9ZUYkVaNLnpuNxmrsRviq4DNRj",
  "key31": "WM4kYZ673uxmAwBww2MXQc55F7ZefFPFkqG1JUhApZ4aojpka9EVbcmnDG2LSSDdQAUUEmpV4ubVTzWT52GenmM",
  "key32": "mmNvND5DiRLRX5sKmwwZDB94WBq9K1q7eiw2fvYcaqnLJ29qLy1rgrrzYGBV7vQpsCzfhAG9DD2jrsyVxiNRKpR",
  "key33": "37T2jgiDLnniU8HhPAJZPBHaaC14qfobHpFRFYXupJqbbAW9qFMTJSLLx9d4E3jYxG9F7iVJEmwu3MbM2XZEMMm",
  "key34": "5JUjxgq25ZUBtTcH4nio4PQbW9pLn5575zWGti6rThXt8rt2ExMvBeJmWGvQ7at6dWGodfec7dBDp7B55ZaYMHZ8",
  "key35": "28E6NSshPmc6ZRT2gFqtWeqN9ZMDcXcNPiL1J4z9Z4o3UrbACuFAVd6NncfuqfFtqtvxKCmYCcZGkucfDWQfteAo",
  "key36": "3N5x9mfGatWDB26Qgh93ASRZfvq3hGggTCKXySWie9oN1fdnjAaeQPZvqDtDpLmSxUJiZMkBP9ac7MKYSG94xEyW",
  "key37": "5hwBQ6643GAnzgpDJYsiMs2NFVwdndUo6UYwXstYnmfAvyENU3mUqv91VBcEmZgcKTVB7FLDPhBoNX5GLBay96Ek",
  "key38": "2anZANvTjPKH41XCSDfVVjbd5qfrVGNkyLWhD2pDyk9sUNersiS5PBsTat1LbouXqS5Hoksh2Ackpb4stnvrp6Kb",
  "key39": "4K4e5qZWwtkqTQ4xBHXqTKWgRUrxjpjc79SSXcjFPdXtoHehp1hWPQJP8sY84GCXmmxhSbFjesMvz85S4VBAqvKJ",
  "key40": "37jzz8xSGwHHGTbHL25eNCtadjxeAL1urtNXTPykm2LZoeG7KfTTMizWXPDBz37kXGsbWwcwbjwev2SpnjsR8ATC",
  "key41": "4CajkQ78UXsTy4yihGcfQtZRCBxNGFESUfBCwK7vdSY8n2zVitrpWNd3gg3xs6cYYTLqTB11ReVsziAA9fswqaZh",
  "key42": "5VWJexaUo5hzA7pLY3LBWJ13xLGMLTCqd3iPLX4xjs2DrC3LUfiSabykdsjrsUWNAr5FoEp8HGVj6b4Lvc3g8dLE",
  "key43": "5cyEEX66YVYfqmKFEzfhTUP68Lte4gjtXJdGevsFRsqWHMHeBczvbnRx5ULTny2aBHJDNFgJ5ns7KaABwJL82KHE",
  "key44": "3Y26ppYHofGt6T7qLaybKkTaijg2J3YCXACrthSa4WociU3j64tGc8CGa1obMNxKEc5hn7b5oTA3HBUsQhqioLRA",
  "key45": "5zL8JpVe2NgrnFRPb8ijjmhCK8PQRUUxFtNZQ8fGJYyG9pf43a7JSC34HvkekwTFcZpx2NVhwbYciSASctVs93uW",
  "key46": "5PqyhxjWxx8LW3Sz8y2auK5Pye5MwmnQiqW6afoBBh77YNwBZfAovbagL9yLc4phynKt2Mn4o3uoeM6YUch64tPd",
  "key47": "qby94VTuoLt5EsQsgpEEk2whNPwBi7oj9wyJjKyojUbrW5TEmcWPBoFcNJH8USXCCq14H5F6MHaxhpTp1gexPCu",
  "key48": "5Zf1ieTrjhaR9ynbRbPMB9hxkvg3RsjToHq8FnoaHzLU3TjfWiXRzwKaNX7DiWrnatwgwzALB6HUBDBvRqY4t75U"
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
