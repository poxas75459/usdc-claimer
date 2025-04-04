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
    "4tKAUqNtq7JLpYDgdY8HPVd96msdru1Y5KdZBXMPiR6u1ytggj77P5KJxCJBKdhRtmAbKcTLSnV5FZh66aRgzXGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkuJ9CS1cKHp4guthA44PLLDrUQF9uSAoMQfMJu1zf7hMBaxT7NyPRcYgypXmnQx2XRozpPpgRnVnuKxsqXdQPT",
  "key1": "62iW3FgbUvPRnEu9HJ31GJ7zteitcGHyvqtm2b5T8Pwy7URPGZ2wWK9Sb8UGBg9HPF1yg1iXRS96NQib11YPq3Ro",
  "key2": "4k5HnVBHoFFfgV6A872HBAiUe6dBApzF3eacURiE9uJfsSYTANsiHESxV8DtADHnxAu9Z7NxJgCPnjKJCLfaqecr",
  "key3": "fZnCTZwrQQ9TEtCZwWkVhCF8fryeRYZjc8E25uPGvvSQ4923yC9RXgT3jCvFDJNphMoPUHygzQAPBonbGH9VtHB",
  "key4": "2kkWzsQCdKvjmai8cC9qpWYZdDAovNB4bx3wJ9WDdM1hYqJPiUUpuS3aSQJyjkYxR4omLHW3kTZBkVXjmqCh3qZX",
  "key5": "5WpLAAq5dVSaatnHLRn1wEM92Y6VHgjZ3Mp2swoFgdf4i43es9Csc8nrYVND8EkcE81HASs4DpkzCNTE2ppbRxAT",
  "key6": "5hZ81G4GJKWLUxAWW7LwMpgRNeYhLShUoQCLK3xfBUJhGnnCnqw1enzJtd6z4eZeLbB5vLXqwwAMnqzzmPC9xmLN",
  "key7": "3JiVb2HNHEo83qdFbUPNC1tgPf5ALDzhtXz69XbtzRoPxa3S4aNdn3PME8NfxtJ4z6gERS9PueQuXKsfLVCzsKuq",
  "key8": "5myKFM1N5Ryv9czzWeiUJ8w1412aQFr3cH5jPCJPjrE4B1MghRmJfc3HoeE3CZdtQDp8CbcGKm7MqYNBtb12wFCm",
  "key9": "HA7cd4uhLQ7jj4bkysm2QFaHjHiWPnHVqTRhraQfXZjFGyY5SXxp5YCkP4yTyXQX91frqiNkWHgebT7tDcZdyi5",
  "key10": "3M1kLCQFVPAHHoquUxE3GWqnrMQJaKSjmBGLa6B117LASjQEX9bLciqZv6QogV6E9ws8Wdv1WCwofkgULxrv8TCo",
  "key11": "2Y73uxrPipRbjbg6B5m7SND168fx57yRWfpzoQk6aij16rGjwSEFYCXUPoiArGxr4APU5qH2a87SgdHNHkwNpiYW",
  "key12": "3ihexRpa5V33t8ghyb9xs1E8XCDQ7Ta7y2RVceQ88bD1Z7omUow4HD4NUxBAhwYJ8FTrCQJzQNgdSEogfVR9nNjf",
  "key13": "4bCNA9g7S7gemgSZsaZ9ZRXrE3FwXLPS9N8ozedcMM2up5XaurDnsuRVPn5njepAcQisuhVurfKqvYkgciHBipn3",
  "key14": "3C46d4ZPkmcuDBdEwmiKdKf2fJxd5QjVhUTKpRUv9p62rETqv2CyNUP7FEcmbtBnuPecp7R1jXTSaNnuuBQ5q4KN",
  "key15": "xQ6xsiwWgpDowjvqWpFwLY8WoCbUcySFhPeb2Uk2FtUq9vHEMgkRFAiTNA4WnJLLzjhAxKSYvvBvFsnTePETD5n",
  "key16": "2owrvbkLT3W3EwDsQFtBgQvZip6xVRQJrgMJueEvyuqePsKp8Dbzo6WmFZZ4VRfYT9Y39BtfRRyVWTUd2TudcGW9",
  "key17": "25sBNL1zoJqauPSFqFE7yLdUdFsx4jPhJUia8SQbdCohpPpDAmrpf6xAmvY3A6LeyHCoyn31DWwoLUEP2F8twcAU",
  "key18": "3s2SrfE79XT4LQ9wsgzMfREYTgPoAw32t3vxHfQvhJK23p4zUpSa246TrX8MQEePeHueN7ZzFEjSyai1uDAMhEYZ",
  "key19": "3emVMhDEnTe75MsGQJiyJBNPsYw3PGnuW86bgjYXqVTfqnoXn6pfwZFZaG91BLaqU3xLrNhkBwNee6EHLpCtJPp7",
  "key20": "5JRsyUrJskjAfn3jwkT1B6iGFGUPbtVxbvu3P1c7wT6E5yhgZppAvUEZH7DhBHEhv7USFYqG8zr3CCqWTCBbrW2D",
  "key21": "3Rw37C236PYWAYD1Nzqsi2N1GQc4rpqDcpz9uNBBC9hM6wJzTMmWgrUePEMjV89iVgnBvU6pJPEbd3g4pcdDuk5i",
  "key22": "3jGUTajK7m36tUU4knJzzV3J28CnPStQA9VF6fhajX3uvpCadBk64TBxt3253SftKnRr8eZpARy1Ku9PUZwUP6XM",
  "key23": "3V2w4B646khqY9nmNRDPQ13qZECyMMgTdkvCSRZ7VaiiRpKKdrWziGQHqm4xeGPRpNH8ixSqYzGYwzGbj3X75i8h",
  "key24": "MCdShC3bGafAkVFkRnp1WTo89ffxPh8kUJqu2RDDZb6AxaA6RcT23oQ5vbk4JARz6enz1XTQ2BPEXnfk8jHzNEB",
  "key25": "VJ9Dg2QDmiFDwoxMMkUUA4D6kSbs347urLVsdiNT7caomLvRPcNLL4yfpbhoQCVoiCa6JTg7fQFJVoEd5mCs8Uq",
  "key26": "4ecf7p3zW78p2c38wMj3i3isVFLdMF42NY5Nvbn4LoJJ2rjA2iTKdGkK6rV4Cnnqzvn7yfq9R4fNiw4Qbx8xDYc3",
  "key27": "29zX8L7pVbosC6G1FJUMXGDMSqDG8yhgJh5e3woJ7Tth9GsvVgqqFBTfgAAmdHiXUYsWiPwoXVwQuiamTMFn3ooA",
  "key28": "2P7VgPrZ19Js82gxawbipBGoqJqrRJmPbzEzEP8wLByMAxYWLM87uzaJKH13nSyjmmEafjh2Z15tuEjJLuDTkzFu",
  "key29": "4GHn9M1NLkkTQfwB82tZg4gUA4MWX1US2Bo3CreZ7Ekz8dqW1fy7UQ2x71i62YJAoctTRVcrrjxmCafikWuntSxE",
  "key30": "3pgYgY2KTwdTooqL5FyFX8NV76XHCQxQ2hvdRBnDnfGvpczbRf9Ecuw9C57CpjMwgyuzGrLyhWv1h1Catj8qpeFz",
  "key31": "4qNAgvKgLHN5M7s3zeKMPxfPLTZdLxXQgS2EPNRXmRLyExoa24kcWJNDdvfVsAJv3CZXDSWsxhZnvuYiNMrCUW1X",
  "key32": "3uuu4BJZzw2tDKCi5fPeuMy668okvPoyEawPvbfueMVXc9cYsBbwMZcsD2sjszZqUMQ4Wb9kTHorXSZctLPHQQq4",
  "key33": "xeXV13z7dwddJtYoDVozHLTxcnGhDcgjSu7oBcE9mRmKdDvtLBZK1uqkzhBReK526TR7D2PUAmyJP8z7WxWaAYk",
  "key34": "3gQwPLYrqaQ9XhWDoAjZ6VcvhaugXqXCpbpyvJNy72hyuJTkGaFQeti9k4UmXtj6Z9Y9uiEB1ceN19b7dMyMePVk",
  "key35": "4MsDVsu2q7QC7EqQQzrXjWxdwxMrGnhgvVwG5BjWY9uewG7p1xAXsSCqBk3gz7CfLVEQJ4BAmTku53Lg4qwuDLmY",
  "key36": "4ASN7mkeZyUt4D5JGDKMrXFT4Q3A6zLXdFaoqfRjWxw4zAsfHMiuvvvw2wk8NYEbn6MbjkEEXxMxqNwvuRzhjF92",
  "key37": "5pLsztYch8rvz51nJZZRJSRa7ZCjwLbxVoZWpnqhdYYzJqSajHWPocdkCjYkGpGFYoAfiSqh4KsujrrZS1chwMzv"
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
