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
    "4AhVKJGnBJHseZBJ1K1oyYPtq1XrSwFkymAxjy9DiZS6WkgDKz8JF3TPuimb2m6GgdpBxpo9UTqRMdCRh82Piaq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHDd9gQYxgB1oPwLYfksmQ4wE2Rh5HM2B83GHx3YwXFBo8nHdeLkQgugesRRpzjpSLGkojiMgcL4WrZvqgHGEbY",
  "key1": "3JACKoaesLjMKVqazZXXqhJvFi3R7rJMboKBWyJQaNeALTWgVbGsDZH6buuGfbJ8rFnmoK4Q9x1FPaU97MtKPmo9",
  "key2": "4UiZ8Kry8YDC48qrPvcvgFNfMuWYR4iUkfpVvhcYESDeeWGBtMx54LVmCyaNL4RRm3R9GNyGqzsKyqVhNErL3jg",
  "key3": "5mGEevDHQqCmjqNoQw3PQHAfPtpEjUEhzcS6e7Erfu5vixYKigpZkwfKVRj7QgXXkFRNXrX5DbsZBfEhdYDfeGfk",
  "key4": "2wN7zP65pGnX4PtGZMhqjFsrtGzq2rcAFDuasNxPAEmqsXtVJWgnVmtW5FBqBqoETr4sXsohgXRBzcB6EJiLaJFr",
  "key5": "3aSZvbSUNwtcfBdQbpZzWjoqNs3DVvjLWAdwdXuAhUAb1SHmdnqE87n2D5WH5r5G4h1xXDuEvQ1kDhTDtmKYN1T8",
  "key6": "re5mdhxUvHxnrb5ijdBr4S8TgbJyThAFLc3jE4QteJQ39z3ADECqYU835yVXoUFJpDqLLRUQzxTAtP4xiP18DnA",
  "key7": "3BMTBDYsoSadfENaVSKkDmEFrSKUN6q9iqV3vfmn2NWUfMjRqGsbnKuyJKRAN9UD7VWry8Gxzia7JcoGfVdU3Vf",
  "key8": "5FEMVZLC6Mh3M5Eb7evDox7MevFdkLPFCAUyyDNWFXrwrRzvzqQzeJbwihD4SaK9qqW5WirFeFQKmZ22ct4mYKZ4",
  "key9": "5GS1ZycZnyV6bqV8nqx5jJjKqhWHKySs9jrwgrwgF39VVTYpGj3z5a7XwMzrSd35zz9FEZmwncXQX2fqvuaPXHfx",
  "key10": "5wAtzMEtRufnvuSvEfSR8Cn62miUQfhh8TfXToPGA2pt8URhFEhdZgcks1fVDAnMYunCaWG5zCdvkjCJo3xvUBPK",
  "key11": "39Cw3T98wzM3RQVimPiSNnnGKxMAmjKdcfbDbgmkzFqiKyJ9USqKd8VQzHLA8FeAuqwExzCm7QNDJVQrA85ruGhG",
  "key12": "2ZXW6s3kJnjwanKikNbY3SrWAwHxZeoS5r2iTkWCwkFfYJDCgKMhDjNeVCs4Dy6oaQ4bvTMaaNFwgs8k3wKERenT",
  "key13": "4wWyg2ywSLoX3v8cn8GiRC23hZa5gyUwLMTAwEvwMDp23FN9G8z8srKvr5EiXHRoAqSndnRaZWZWmyx5VJDEjWsR",
  "key14": "2U2s6Q6Fw3Vm1E1MR2hTVQvBBW3FuV18wE4pDxW3HDPcY92J8EZbLtTaKMvvK11wLNRMMh8NZHnDvajkb4S9JNnA",
  "key15": "3GheKaoChvoSubPYAM3DH8Q2hGpkLFZWXEfdYXhPiqHV8R8wyAXrK4qhB8ogK3Yod7imA3GQT66NUqMoYwwn1S7K",
  "key16": "3qHGVuPZAFHzr2zw3PQzGSNp3ViPmV2rtddfabxJfd47wBcd1jJzUMPxxdWJ1wEUAbhpLTsXXmmrf7eS24cLgBQM",
  "key17": "z12pgYYQ4S5xkwqArC3YXgw5GpqhxoEfG5s2owJUtJntWtTqHoZF4eTXx2XEeZKXEmM23ShUDyUKz89SMJYeq2o",
  "key18": "29cj79T4pBMLEAd47hiGwDCh7NrQ3XmVSYHDFYjTUhh23553kSUXDU8wAC3iXpD8GjNuByysJ6NUKZi2zZeoE9ny",
  "key19": "4Vkh7CChw9SkzKTjLgigiw8KtuPvPZ9EAs2wMgn8GUGEuChkoka294AgzweZY1ymLcWqeZKJQABiuE6wLmfFLeXh",
  "key20": "5hktArBLAvPXtfqX443TsDh2nizeWoXaj3Tad2FMZYyLZM86B6Wb8BHkY8uFRW4Mu2ftnPcFDPnAPUk7VYC6RE2j",
  "key21": "4p9Cqf7qU7675T6gYDxAHHfLNjuSRs2jqjChRryD174n43sNwL4Rr7hHWdUgBFXaC3HGnHGJDZHfKk7cuycUktTa",
  "key22": "5dcqN2P6FCYRjnawPWk2TUBz2vt4PHQchgoqJCBvfpnp4VwJZipNq5ZU5YLbXkGU9kDrh3jpnvb1kxf9BX9HLGNS",
  "key23": "3FcG5vJosLKgPvbQ38GgXwauqrJqk4NVZiw5DkK1Q4MJPd2VVUUZbqAwwhPbZEydy1SnFj5bkEJy7w4ZfkgX952C",
  "key24": "4WGa7CQNhXUoqXKUGxMGBeJMvSkQjPSpiRDYt3PBdZJxg8HFsH4mYYtHZuLCvyEryMbkbupSZDeR3UGC4NL3AGZb",
  "key25": "N4Tkn71nBojok58FTGQU2WtwXjLxboVmdwuW1yU6jartsXuqSJbCBp2s2yT4goKadwDfqn4VrkE8kXPFuWzzaTK",
  "key26": "3PxM63E6uk3WojGj5L8RyC7CuCKLoNgoeZMNVpF1xtEdbg9AxGce8pSBXwiH3NL1xskBZ8ob6fQHocdUvfbshgrL",
  "key27": "2DQGrsACtGG4VManf6KeZjBX4WJaphRxjN5i4xSNyMTvQrHjgA85HLvm9d6BFRGN25dYwDs7nTxGmPs29PxE7Yhq",
  "key28": "35shjgDKVLZWNygiHSKiLq5XkcafygVKpp3uSTPyS7imXkyLgyFvTsmHuXjRz8R4bFveXVD14M9a6Qyn1bbmtwLo",
  "key29": "w5zjDZaMEPoL1uJBrk5bXfhVg2Ez3sWocTeRydnWaKpUZoZsFvSRv9UNpYesPE7TuWzSSvqNxdaeig3FGzgBkWt",
  "key30": "35udCfYBcUSUtZ9xNZTz6XiAzPLDuaFCcA9rs5jbokrMS3y3gPMRftbb8RsmnbhWThF9t4d1Cr9yWUNCQ5JtMWsj",
  "key31": "5gxrZr5WB6BRbATr1TjouyFmmHGJYnq32wWmJx255H38fXcJyUynbRJrA4UMKML36yyWh5nsq7iZJGsHLRu8xtfQ",
  "key32": "5Jz1nV1UguDXKp18vds5prBXAMEkG8EsBthHwPFLN1B2oVEWPxBvWxbE4YfopAT9NFKctf4Q1Sydh8pkcfUMHxtb",
  "key33": "3eGPvU8qacGvRCHELuodhT93MW4hBMtdZ5Mb3ypC1iWk9iwtwJtEoAS7rUzyKFQMvT1Ac1N58Yif65CJRotoQKP4"
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
