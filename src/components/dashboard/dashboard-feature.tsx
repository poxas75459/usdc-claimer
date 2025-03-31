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
    "5jnvHi6xgtnzrgnfyeVDBv3PJ9qWCEM4EkYAub8B2zRYgmuJzgQ3n2AEnPQ6ncr98h3gHoAH8NeMkX1xbvEi2o7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vb2LFrbaxoSLUi1gSLfkPkH47zR22n1CK7tqqLdxUCr6koFCsQmJCdkRHS5pnzVtw3MtKuJNCH46DV5sodcJYSm",
  "key1": "3c6oYNuY4jXYKq8WpFYUqVdPqHZNTXKPBm7YZ7Cafatw9c7HMPDB8pytf1tPBSegJpS8drBHrxm8NN9GuKycXrF1",
  "key2": "4epvVh2n6jksVYFv47J7k4z5ycDE2pSLmHuoJKkCubrj5opmTsBBDHbmZc78sq28BxuiEV6ECefAHKR37VYeorws",
  "key3": "4SwYrxfKwGevgmtWSJ6xSZPHpG4ZdDptYmcWpH6NByPF1rNMSZL3ze9VKCmFxxfE8c2Pgh1W4ZWbitSeU1MtUV8Y",
  "key4": "2dLZX6KY2nCbcSexB88V99jvXJ1VPux3T2K6C2kRNQPmrPFmiBEKdr1HT7iJcHwuDJwSvnEMH1VNd28FQHrD5wd2",
  "key5": "2JBzr3sR398Ag2V2SVfBbfivjR3tUJ1BZqWHNVMQrSTMvo3kRU4o6XSdfzXSdr9NapbR9CCjUZYdFxPAffUSHccK",
  "key6": "5TYFGKQF4B7wTUMaavd21yixo1ktiyqNvydWwfvXRvUYTX44JEKa3wNfsexcQUjHSNAYRx3YD26MSGhAqCTEVPMS",
  "key7": "5q3YJ9Z7xnr7THkeuWbTw5vu48RfVgr5ZS6XZWFb4UbFPPQ9n2wpMojMkzUFwA2hHBDEmKVDNMSCTrsPnjheCSXh",
  "key8": "2LyWXZzT3bG3cNjNk6kL52HDC7Rod4d4zsqDHbJdT115BJV5esgxkj9bGV3GDuJzu7Hwrm2gtt7nMpYr5m4ua6MF",
  "key9": "3JHKYeLL6fVkeYJVdNQxe1Fxtnv46mX4NPqRaY3tX5D2TaoiNmMBYBemfc1Jjoo7QChqocSJ2C7RNjbytrvqY5F6",
  "key10": "3riVedPrJmABQ7ZMATxT1ux7VcyZC82FSo97mGmWTJAJwZWiEBVgMP9RPSPuG7so5KGY5cgDCJrwKdGEyvTWQ53J",
  "key11": "2fZFjKac1dzLD76Z2MmBDJv7BVSxYB4UCDKSKpUhLvWVuU5xzkvycwL3sgZ81RndGRqxZ1q8PW4XRh58Z3D2Rmz8",
  "key12": "cEjcbeuje9UmuxXkM19vnbT7vky9GLwaZXZwDaVfsqbJN8LT7Wo3XC5Fcc5DQShhP8FDQ4pHWiRvt2mQjHtdnpg",
  "key13": "4UTNcncZiAVXEHJCSA7ouxbiAZ3X1pAYB9UJdPSJ7MFMpMZsQokLvNtkbJnbKcHK7zqH98dRuyKwJ8Jv5qhYXC9g",
  "key14": "3QJYmNqdtkyHVtRHANUW5xo2dH7ZjbeSurG7sWDMGSkvYRiKWs16Hq1p5sH5FqsagBJKhFhf6Nx48BThFMvyEkyC",
  "key15": "5x4RZhbbtJazwSpq6Dfh5phnXMGBitr2zkFLHwWqkRgU5199WFcakJehgwXA474UVYpUQLAcVLWiZCByVouaWHzM",
  "key16": "2UdGzTCnyFTCZyQygNizH1NJUhQrU6VguFkf41ugamyz2ygk1ubrJnosGuD1oYZbBkJDmeYaeGKurJH5vxkVEXCx",
  "key17": "2UfgMCpA8JLEuRFKwxZ65tHnRdKVjHw8XuQBTGXJJN4T3RXXECBYTbRDgBKizx1a27mr4VMMGRafhjQ5wePoWNqs",
  "key18": "3zmnpBD5g1QK4YpSFZtSem6bH4rBcZmxs4bp9RoaDHs3Gc8CtmHPKqJps9kJVq8uUZ45e1XovAUrvhpwWxL3JnP8",
  "key19": "4WsfSpPdSsjYDEYZnwTu9ydVQEH6w5NQ52gZiH5WbgqpVjfxhfpYJ1239rifgju8QJWbwS76VmnUTUDdB9eAHHwz",
  "key20": "55AJCnduyk9VHTnBLntPXdcRgTFCsNqpiTnXeqciHariDZq8idKsFZ3wSx9aDqmwBZDnfimVhZ8HgVtYs1UJLZr8",
  "key21": "3inHTQEBTU8wiudaE5qmL42AVieL73VdZnkVUuUyz6QdXPCXPE7VbActwpF7aWyzBzWugccsiuRTs46b1b3zW3gz",
  "key22": "58ga3ALmRKCscEeZgdFkJojE4uQMVpYne3F1hPNLFEoZMKdzrYzfCd47LijvbD9irTP5sQiG57o72hgZN5zvXJ4V",
  "key23": "5WkiBEWQux4cnSkegdrninJEL3ibZxVL3CPrXnfGCRHX1u48cZntvFfAgg85kvskr8KYiQxKqGxr68ETXwRxNZaQ",
  "key24": "fUFqpYDcwcS56ZdkeW6qRiFe3L4ZiyuxGprtLsevc388Umy2CMLjuEsznPEDjZSmhNo5kJCwcPoCcGjY8aoj3ae",
  "key25": "2H2wkXAWFWsCA8SHAFzcYL4Wzy5XvVa8he5wG8gavbRtxLnoppiGXhLMdseicApxddAdbxhXaXsCkVgFL8t5oGAD",
  "key26": "2qo7EWEkv79wsTzLEenLq7H6oRFJLountQ6saL9RZXjFgqa9sZm1ayFdwGZACdCQegdoS4HjGvJJFKuw6CL5QeoX",
  "key27": "2TLcQKJxLtmUrspA4UUCK3egQ7xxXqvLb7Atigxp5L8Wxvg5X3aFgRUuc9i2jE9ujeFiqdF17tKHVJfcWZS7tRnT",
  "key28": "5e5herBsNcq5qWFa5KohCfvBF3b391VQpSiP5cdoUDLdtHR1g38duTqyVh9HbejcmxqGHakpwy2yMtmYZYQoc4sD",
  "key29": "5mXiUnr61QB7QephxeMc3kQtgvrEgdzk3DtnDXr3d1KWiEAnRunBoJ5HNPAJNkCS4rmrG47AhhHYj1TKCsp5ftnh",
  "key30": "5DCKAkTDRQUihtV9zCHcjcJfoKu3adaTGTjFwamvQaKXmo9Mi4SvWrX1mUQLjKMuoXbrRKB8Xz5WHRYLeaNmrw77",
  "key31": "3tB22JDreGcTHu739ka2G5YaG1YeK534HBrmhTZiBtwfFLvzekQu6eLq36cKRvKAH8XMpQ3j9Wg4e3sgYDseCjMR",
  "key32": "4166aBNyis9PtgsqdjYKGseNDXfVNZK2bkcXGPdn3RcfLrAVSPi6h5wxkkPKFkto8nKhngLvFGtjx72NiM93GR5k",
  "key33": "35ipgMng8hcb6kFzpa2qeCNsjpsHTq6bAGDSpfg9qyKk2XD6Wx7UAbQuoDWHisYW9jnyXPNCF1GP13Jbj4ANoC1q",
  "key34": "3zaM3q8nHBk44opfEWsz2uw12czS8EuLPQQUHnUzQeVPSUhN8rFZN3MhiNadrLiJuV7oZj782Ni6XYv3pHEdqQCU",
  "key35": "5FgSZzDXotrrK6whrY4CYW8ikPM2qAJBRDYkPdPsHnDJBh31TZjw9fH3sbhN1PKN5U6TVFRRS3PNxk71iGjA5s19",
  "key36": "5RTULCY8Y6CDuzA7qBzcguDegwW125u6ZohXWGijXqYKJi8nEVjJewW5RtxnxJjv7dRFV6bGaoS6cE2LAE2kH9kV",
  "key37": "2HWncWAMo9ZWwhB8gLJbDzCJx8numkjwg3v5fp4fd1TP4kHmQybcs5SnLCfy5W2aH1DxR92a56PAwzTpJ35MoEuZ",
  "key38": "3PojaawwcJR7DbGGZEkBMW2QXuFLPpFy4gdPhDhynaxqK9ZXfF23dWFirrnBap3cobic1LmcrgxSSJ8fcVAJtXH8"
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
