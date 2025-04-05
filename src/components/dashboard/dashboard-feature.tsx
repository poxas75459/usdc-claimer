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
    "4AyoA72XVBRE3r2KLwFGVUN5GhQYoq4wk6vsWykhs29EfDBVPZNcsu1gzd3FpEFNAW76NSuYcse9s2P2nZ7P64mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yfVMjUudDDjfH5SryJZRrPQ7RsPwf8YQFYBzJ5P9gjSfdMKa2WG6t8wmW99vWBPvo7ZMutQUL2hFWesyrWvSbLc",
  "key1": "54uJEJgmojTfsGgBL8RkvG7XHWpNM3zG7wtNbTAVB8TGNccHY6rNMpFU5GuFFmNchNSrxnShq1PjEdH7KHsAyhKQ",
  "key2": "527TPPrntjycG4Tn6ZEtj1DYr3yGG8bC5gG3bxeqmNn7sZ5yUYMVWbHhKPzpXE18Cp5gEznmGgBbZhW6EwvujAwx",
  "key3": "5V6jgD6Fh7Y5cDTHhae9MLa3wtZB3dv7dRGMXzktgSAaFF78dALhwULmYQUBWJeUxkWrCQMUGzFJVrf4xmbtoJp5",
  "key4": "B8b4yFvDCga73FZvyp4bzCdgFjzNNvnCszuZjaP1rtsHsY1imz8LQ2RNRGtnvJ9quBs3yCbsXsyryxNrZPFJbmV",
  "key5": "anqKEJiaDWRZgDA3Kex2WBCuhdRmFSebmc1DbLj7xPp2byrdEXaQCjMvppfz6zPDZwHjGJ4eajmSoaNL5EzRmyw",
  "key6": "LECQNt4WqME7bCrZe6CwxUqhBGbmVw5hzuap86encFsKBpRFahyFUFmHN5v3HeHQafBH6sMoN6vUn8dZVQ2WCop",
  "key7": "Wq8L6QKPpuKFjkXWGLtKhfyPhbSGXKaHsGXGuguXbZUarmntVrEM8XnVAFNoxsz1rqZh7GGxXdvRGozoxLPpEZC",
  "key8": "2ggJGjLghY8XDU1NH1zgBrSDtVn4fMjKrYvmkrMiEcWszueArGtq5Ld9UyqWtMShgFHY2um5cHXwMdC865EfCJSm",
  "key9": "5ueW1KexWxjMwPvzxMn4pdwawHBiQPCP9eFy2t4ix1v1LNwMJShe1Yf9HZKGWF42cx46JtFkdb4TDUCp9xbVx1Ho",
  "key10": "3pC2AZy37ck4xR6qWCVigr37EhxdhSSuQj25rX6s8egbW55cvKHiP7z1b4Jqnyz2WGiJmeRx7BKSFG9vjCbVFgn4",
  "key11": "594JgU19fBpHwujC7jJwXaxMkHVGpyqUDYNhZJAmjJpmL3LXh5G38xVrsqzjzHg7tfuZgPFNXmJbhMTpJkXMLBaV",
  "key12": "66BoziQHFz32WdVcT7t7DeoD4ExswdLVoUVQ81vGre3g3DH21YC2Qm9fiUMp1SW2hvbJLGDeQxZSAPfGKYCzFcf8",
  "key13": "5g3YK126H8ZR4jW4NfGWHGt3uqm9LZQqjNcwx5NFUuPFPH86QufDMAwBfhGtzJi4RDTSJZoLvMYXbSb7r4gu4SCp",
  "key14": "5JBZSSZk27x4Vb8h8u4K96ARoGpt9SeiNYD75GYg24EnD3r3spAEs5VKPjrcMZWV8AcBrArCkbP9ztndH92QSSwk",
  "key15": "4RKBiqQb7iZGS4NVMZVxe4HpKUtqY1BV1QEiG4vG6JvMMp8XkGPRKJM1uBkcMqWtzE9Vcp2GpAjDENnVFtepZktW",
  "key16": "5vzHeDHThULLB9HzJNTuEiWHB9x8EPNZeYiUvCJ4FeziVsNwD9AYiEqZZFcRpp22QkJvTMxUhKek3fQBPudfen1p",
  "key17": "3z3jouByKkrs7wPv3eXbVmp9dxvFBaNgXcR9vQi1BjDwz7EdFo8mYctG2u1qDH2MZz6coE1EnaCSGSxqHTNKLRew",
  "key18": "5CmvWNJvoMLU8e4bbq1NEVWtUBiyzF5Ux24FaL98BN5x2L4UEpkH93cJZFcq5PNU1T2i5SNQY1KGDjxAHHVK8qPz",
  "key19": "3b4jdL92SWnMowi8CqdhALGhmvbd5yv3gkLrHPQ65GQXuzzEsXFTEbAk7mgfZpq3TUSdkvATfc1ewqc4PVowmvbe",
  "key20": "36s76zQWuxaUNNyQKwSQFm19xZTAPtfDpd1kMWL4darcpbdC3n3L1owf1gWWyjAFXhr2SagyzGQSu1f8qwr6zwcG",
  "key21": "2ZmqBjqkBMGc165EBrNjcmhqbzV83ZL6d4g2gjFJb8cBmUvBQkBFYz4jjQaWQHYibA6dkPSGNhAy3PUJepzEi2S",
  "key22": "nmgUzuVDFifa1ym1tyDQvMGJAN4YRVtP3Wy5s7nqZrF6rVu2LGvADuEvtcXUpSqkWxiEj7WjeSVkZrdwQ3vX7F4",
  "key23": "2KD8YfDCGrTVLfvwoxunteW9Da25Wac5dKEjmZpuc7dwWT4jRinEFsuNcSx8EfkydF79qq353Rwr5Ry1S7a1BKBg",
  "key24": "3b4cwdGh4qBCuYg2Zz2hXNmGUVHqddf2kHmkGiCRNMWPJGwh9kZMVMFmqGjxnBiZiZib3PcamdUrZ1LGaVojd475",
  "key25": "5uVr1j4rQj3VUN8HP1UtG6q4FDFUhsViMNuopZnRNbg6bcDGMrkMuwipJ2ji4f1vBd2agFaH44WHgFM4HVmR9NM4",
  "key26": "4m3AeiMamEYKa8NK9fP1TBghX5F3KonaqXSA9UptdtxuX7tMpXj23LRvd24WSwSEB9YpSMENfexatRPb2aXZUEPY",
  "key27": "4Acd2ug2pAD8XPv5WgKpgGyRnT2fZbXPr9D7CKfiTxTtqkUev428FueSSmqH7G1a9WSuNeqrhHHcqwt3Y6EzRPXY",
  "key28": "9wJJ4btg3npkUts3NPw7hWRCaA7eKN1zuow14TpZCYouNpVDQg4Dt5N3Wne55g1kyiCQ5iGodN3WVUUh9SDRnRa",
  "key29": "nqy8v4XFy8nvL1PiizxKbydmYvjxatGqqemTiqJ8XtEgPf5gHje9NZ4UntPsfkXxKbybQkuxUpjSNxkrz2pNYTx",
  "key30": "2R4LGue8R2qMtLf95C7pZj5PRtmBXgBWGgKoymLD255e8hEan1zYU4v9yTpWihdeQ8LBWzTuo4J2KvfTYWrZ7q2r"
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
