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
    "2KuRtkFcR8mcWKxdcW39N2dphRCQKcaPdj3eAqGHZvbDQCHtwciiT9MFk4LPueRwxd7UttHS39nXRxybj1JrT5Ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4twqeMNa6fHRVKcZGUD16PXb3ihcDzHDJnQ8uckoGzQhdEtyLXD2zKPf9YxScdF55YL7D7fzodvxyRXiPuD9t8Vc",
  "key1": "3uqjvaD9fNRWe85Wgj3fmg4tnAYyiaXrooWHmWUdhywAPgxkAbECaJhNZdcVGuoA27bdaYszF8UYHVEBwfCy7EFr",
  "key2": "3Q6g7RxfN2kKEtU7kbxPY4xwSBZibMArhzjA94gND3VVUX2vJ1ksG2Rj2CuvtNNSaQmAvgLGkTopx4yLpfe3ovdJ",
  "key3": "2YjA8EVq7bmpyQrnQFC6e3PSUTe353MSXpWSdsTUDFJPBFQvgo23iYYN9QeVFFzDFSEbhwf7QrMe4jVPimNitPrY",
  "key4": "2aGidAdcuWkfqXumGGDuxF9QorMKuMVBgRFvFXj2gScrzSjSrYGRA1Q51GfiNjeedESwrSgyQDtoVK3XZPen2W7e",
  "key5": "2WLfzUd2N4mWFfNw8FiDR3JTBaErcvrvR8RH71YbVWPKRmomTnv9J4FGkTZGF7QNZ2Havs5vpFG6LWoYGMiBmmgL",
  "key6": "2j62hRCsvSrr4ydAUsvY8EpavGwmjNHTVLSphpTTFpk7YSdGDmPcmtcwGSMMYbtBSqp6prJa1yhhZzTB3bZkTgZi",
  "key7": "JJ5imZa5GfjzbNVbiZLu3mtjvV1BtH6FXy3DfHVaWvm3c5vGTWKs1U5qeMs7c3xNd9iZxPRZv2Aw7fSu2yc9sxK",
  "key8": "3PCDmRGKqeEobzPnYorAnqbBJH8XjoyP4eeDxNbwi8bwWE78Sb73kfenTL4cjmkvmdaozsFAagsHcrP1Mx1i6Aon",
  "key9": "3ApEVNqub1LpvpVaQQVNUCYNZ5GMUdB7knZ46ptyU9Sfk3T9VWvzRgcoQZCaHJs34xy3Dzq7XDPWoYfMy7QG4kB7",
  "key10": "2qa4GgpZ3TUTvc5CgKJjhG6z9uRyd4bS6UQL6m4swhtU85FbY6z2X9dopzvLxt7ad7X2ZZ2iZWq3xkbeVNcgrrRZ",
  "key11": "2JRVwJiJCvA7bewLDqBkmF9sbhAUrdRmcNqAV7YgnybiYRsDGmVXhmXNwZwFbQvZZtZqCzKGS7uvd5FM1XMTxR2q",
  "key12": "64r9FLX84osz1vkt5re4m92JfR1QtCKqvZ86Ga9MXoCmnHtH67EPa9sDjHSAnRKNeVv47ix1sDSnQon4pgyFhkUS",
  "key13": "pQ4ngbU2B2RikKpnGNBJdmz9pF1QSHT91VVFwrQhE7tAXzsBWJUF7QroYwGePxG7MyjAL4te3AfC6SpcDv68K1m",
  "key14": "2nbLpGNXarNbsZFQ8FQFJCVdZn63M8VuxEbgE3vJhow3vXEs5CWQ8C2ppFBc7PAVr7Zy2ReGAayNNVGMYKLwBcBo",
  "key15": "592qBCom4UwuHenshS7wAVp2PurPcHEwms8UtHKhMVFKJc96fF7o7QaSE1VWn2XF6wKzrHbKnc6PsXLvpQcfT2J7",
  "key16": "5vG9jxCRZPSaNq28uNxdzYYaueePx6cobYRrP93i6CWSdKTBgqvsPQ4a1CVACdYmzDaK6goFBmquMaBqcHYdtbtW",
  "key17": "xZqZgqFY1Ygrry6wH3qg7GjMLtv8vJhM2VNc3pFDqDD78sv1tNrvTEUqQ513oNGPZBfBxSe9akyDFYvEtT8BTYy",
  "key18": "5itgRe4KFhCXGpcES4s7HSLngNjZSr8Aik5kqKPe2hy1Quisa8VCY7iPNBqHJVjSDGViSC26po6EjizezAtEcBoB",
  "key19": "21euAq7AbRcnJaJT2MbvKJX9CmBJTj5StRZdawwp1sScyajtDqxSpxxgJTUvPVjvKo8DvviFSp4yud1jESCRg7qb",
  "key20": "4FZhNp5YxBAVQbADZwzfNmPyxWEy7ujCh9pi9D1iVR8nh4EQbwQAButjC3gStWyqNjCCUjT6aq2a9TUewmTYJaC4",
  "key21": "2nv6okAP3BWs8RCQJtnkLpEeNXeMGzXvYfCy7btGBuPvT1XrMAhEayZo7XtmTBpgF5sAbzD3GFakLgriHKuhjWSi",
  "key22": "25SwBqateEWcqxvpVekwPiiukUhdAqzKXCJLmPcBBDrkugns2a6iwx2rM3gsv7ZVx9x6xMZAiv6N2JZnQ7fWz8RR",
  "key23": "4119e5Hr4fRLrfLE1deHLeqrHtqRUvRjHzLmLA5TV5YZZAisRarzAwWorbyrxxzi4aVNhqqLUrCNsu1aECo6ZHsQ",
  "key24": "2pdchVmnAbnddc9DktxDZCTMwBDwZG97cisoW7i465GFzEGhxMJapu7E1VXzTTjPtiZB9SeSR9PfC3Z2NuFdmZTu",
  "key25": "2aLcTch34KWYj3MmDhewqdquX4PSUPYpHgc3WNYKm8JJifZxYjdzKCsvwnJtgjAE9N7JEGYt2MzVs25yWpFiHeA4",
  "key26": "5gKXqr8xYPHMdynhX7B2aayr44vrXXY8n7J3wwfG6V5Lrekp8C8CuLseSXvMRWjusRgtsmhdZH3d98879bz1aJ8e",
  "key27": "57oGM7HU1TVLMXkj9sy8XXMZU6Szf7FBUCdFQHm1oY3QAPjWDuigTm3Yw2VfEXtyN5psj9zN7HdDAk2wu4h9SPdY",
  "key28": "3dV9GumNrLzYizM9Zr5Kj2DqVUBJr32V9GwXRM8zMYhvbqwZMbdHQ53jrgkjigL7txBwJnfmDArPaXPXvjyQ2Rnh",
  "key29": "6e9FpayDL8uEzr9a5C3wQKQiF3z4KurXeEMJP1UCN6p4xbhBPpac5iVRuRs9nYKcodLGYkkot1FAr5zMqZgG15H",
  "key30": "4Xw2ujphYV69L5YcJGpwbmyNbtzqdhXWuYMv74RXXLsvEQEPYWrHoPReUKiaf3t7YmycDwqUHHX8CV7LsmWBTrk7",
  "key31": "2YPef6kPY4ir2BGq2Q7VHStyw2iWKN5mRLGrowsMKeJDHPCBWW5DhondHB4cQXovHkmDUPiVd59xoZj9ufYPWZxV",
  "key32": "5Poh3UrbwP39JMNEBYz2VuuY2v2izfG52LhckzdFCDVaHftn23M3r2nSJQgwVajtkUYQDZLnRsQh5Eo9oJex1edJ",
  "key33": "3csMVmhLqX728qAbsy37SnR9JtMrx6m52aaF63Nb3PUdD4ebjcg45uXxnyGFSxZmoSYWP6sbp96zS66cwthyPuQS",
  "key34": "yTEkx5MeeNLB5FxK9T6K3yeJSWbbmbGxmuQjZMGKdGXZYbBZHzQ4oB5zopNbpDb2Fkwpu8uYni2AgXtk5pApWN8",
  "key35": "qeSpoqiGpFiaHXRrw69KSFJPibSQuvMRKfiLvG9g4R6gsSfhUyosNMt1r1NcYCQ47WsJFWjDah6N77MXjcEqF1N"
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
