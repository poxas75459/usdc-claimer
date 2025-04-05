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
    "bkhJGXh8GbpUzeFH9Z3gQQkfdFHdkooj2PQn87u6UNwFKJbGRXBd1gmFJzwmicc8u89dyxKnKyteKw3CogpwrjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ez1rs8ys5zQQX9283XCUHcq2p8CZAzoFX7bBp1S43gPtXDc9vYMhPtpesJzrTFFKUGSip8WgdbYSEKDgRDDmmcm",
  "key1": "2kNJ3qdez3Q4sdftfjnRR2GEtrLoZGTgsBNuLxDncwULieUpyESBwMetdLBainEoKNXDefh6d1efNEtFc7amtEoH",
  "key2": "iLdBTdoyEBY9TQ9RzbaqdgBEADbXqgz82U9QfEAU3QFb4L2VeybhgPXGBJSRRzyYi5B6dyb3zji7P6dCNBUnesc",
  "key3": "4MpJbierW8qqLivjYnzU4FkHCttBiBmBV42PoL79jhrFkXvZKSigpqmTbZVqX33Q7YUAhiFLDw3dRFJe9Zx3Aj8x",
  "key4": "4v39im3f2KeUbTXw2pF9LNMmaVEnjZMLR1wug1vZKdyvzA4ZdRWEp1RJXFTJKfsNyfmfDZosbMHyFpMzkSRNSEvv",
  "key5": "G6k83HCNmfo5HE4dcU4VytmSgMxUQDPYtjF3zrCeh4ChMNNopwvNsGr4z2XSSUBCjbDjSsqAidk1kj2331rhbjP",
  "key6": "5PFdXL2B42J4ZfGz8jGA29J7ULS8kJgxnMqh7Eme5q2vjk28xa3AK9VTkNGkmFfgMsdZ72qWLJwerSRQhy8k3iGT",
  "key7": "3axaL9QHeyVhyvzi87YtpK76ubYk4ywaTBkeZDgxZMgY2NDU3TAg3hDZenxsnEecAQn6snGdN3p7YzdZEefrQqMQ",
  "key8": "3aK2HxWwRWSaWoaxhJSH1uLZLV2m2PSZfVRbcQsbvR7n27HEkXx8YZFpBrVn4DJFa3tsKWCBRUXzBDmHivpLGHkY",
  "key9": "3Ddfkk96v1ES4sVtfKiTcKK3QsSd6SduxNhHcRZacaLooabkRaVT9jMdVojjY3BTCQkwx239yWH5E1t6aXLvNhVM",
  "key10": "5Zx2Unoa2sj7K4TNMXupDLNDPH1girv3bdVd9W7ziRPregozApUrg69cfXSAWVDsXKQNqQWCQJPhshQTpaa3iZyz",
  "key11": "pnJwFs865WGUtaGxca8oZeeB7c2FE4UxUg8P111gwRoDt3nX78WKfg4W3CdZQrZvRWAbrpaKmEoptNHNaQujnk5",
  "key12": "2VmaSncRYVeS8SW7Ed94GLQpPk9UyDbiE2bNPgh72KaMnpWKexs6JnVtezuDEUgw7Q9khwELc1yT34RUCsS4CgFF",
  "key13": "4rUQMyQYRdXEfXuognHrpKKfYbV1AsTUMBvoFZfrZjgowyfX3CCq2kRLdCsgQYN4Lpqi8Gcs7Gks7aQZ7Jsq36By",
  "key14": "xfHvSHYVW6zio4tcYJmT97dL6M8xfWfRHKgfdBfWfUQSTCc44HvK5tn2qzpeUyEm6PiUAA1T8C5a7hdkz6PtfwR",
  "key15": "4DDn6seVn2Akx5HN4PZWdq9vCVogebLYfwuxkgDvJ6ABbRvYPwaevSAE2PJuwzuTebMi9N8xy5ksgaVQ15EngdhV",
  "key16": "2B6KmrV2B2uuVQ4Ky62ctr7LY2WShwe6evX23fA7nQ81eBvRiYhtfrCapZApRAeP58tmS7mJP9MjDMUoAWwmrmNS",
  "key17": "WMmPcWyM6D93u13fpYnMGgqgm4suxCoZPda1ijzT4Fgr66iKpMybyJWmPePbYXFJ5eYbUt1rfQa25iZceG9QjxB",
  "key18": "2aqUvicT8fHsv3t5pTq7WY4bUMu2vcDihreGEdrxTnps9YXj9r8iTMe5eMGXkptAoExHVL7yRm1oPyUCQi31N99d",
  "key19": "3GiGpAunvyRchTqyM7wDbYgp2VBVvdW4VKBLWeS7EZTgHrAFR65xA9TLNigCkcEXejTYR7sLDPyncqDKNBtQZUNK",
  "key20": "3BtMXfKWnBMJxuZCDPGEjpVhh4j3RwvSp1XPb3TagaVkrEwGBYZwSFg3V5YZ8tjBCrbSN6Cq3EnXag9jq592QSiU",
  "key21": "44YVPGyxMveZjpkPxWMBA8m5bbT5m4i74t17gigw9acxj3JeVXprXZCmuKu31NRAhvB15GDcPcdkbQLvi8kwQgyo",
  "key22": "3PwbZLZGiDE1dfxTWjdzYgQZg75YEJt3dEJCk9Hs7uajPDy4nMpGVLdsfTrmTvFRcgxn7T7aCYMAzpDkeEBhi2td",
  "key23": "47R9t5aGwtTRhhh253jQ5up5e7832LP7VtXPR4SP5LUL5WYbZxPFQB5FLb2jPURcFiezjL9AzrARyE4fs72FCYGc",
  "key24": "GZ64KdxBtS6GK54WZwd5sLdrgYDbEZ3M7BjEUsdehD4V5u5riz97HbjmqpHN1py34VP1ikL4UF2p4Exy3CVBAZ8",
  "key25": "3bU5sEZCNVLqQZg4ZML68Yd7MZh9g5yTQSMpnWMdoooSWJJ3Vivw81Tis8qjgeE1DmsQApAqu1M23WqnzbrA8Hha",
  "key26": "4XzP2KmzXRWUHWnzGLaYSdZESrTqSoiYGnhC3sfDkoCiKZDbzk29gcd6snJ8NqUSjKVKv9nyWoVKYoQ3nLdNFDDY",
  "key27": "5tmhdRGrYtdAquKk4rhPw8sDLetPrMKdcDDxWyBH5Q4TKFuvPsADyvtfSEqxz57GqwW671mByRyg1DyZjCBVvtL7",
  "key28": "317fgeidpu15C3xJ7WP3FbU4aSATG4eLEsvw14q4FbjrzfN1whxJker7aVFFn6fhPDYuf8B4Qsg3jRwk7FAfYDej",
  "key29": "3U8Z2SRZqCoxhcgzAo6uvnV3Y6Ro64d8FPqPJpRDGhbdizZKLvFMjHoMKWMk2Xt4Tv5akPMT6DvwftZju2RnKW2B",
  "key30": "D8mhv8KD1v6Q6gFGTa8ZoZJtXXQ99iCZBKDUangVmrXsnuXGDziZLi15zh3Eo1Ze19xUscDPxZLXgKnZpHbYvUK",
  "key31": "2CCS9PCopxEvftGs6qrLLhs8fr8U7GEbMjipj9b4MYoHd44Fc9BYVS6cnJf1Rz7ruNsFL6hRUQ6ETLCm1CYAqSSA",
  "key32": "5oBb6T82bxaVsedhUHLWmG1hNDWz9n5Dg4ZaphMHH1JaFSvCDJWo49NRCpXM8qMuHhn4TPiZ3qzVdbrgo5obcRzV",
  "key33": "4D8RCw2ndLo5X4TSySMWmYKEFiwV2NKdQzSMPaZSDDrCJCDLH1Y5fbtirM5sHhswcxnMeyCsJskpTS7gFLUmrBv",
  "key34": "BBTMoHM4rxmeo24Der2zgjUaHCKj13Z4VbNhHZmPqSBpp6AbtvRgxSgfnt1M6zrUgpB8vqEUTkDekUygw7MZFUW",
  "key35": "3FHxegWNTRCwRU23QxFU4ZkDYfdyHWMX69CovVK1ihXxFBEihAmdtZpbjs2fiACzJaSXAWjxFgkNcACWNuSGT1CH",
  "key36": "4vVPu9G3HytTAeZarjRFaY3CCUS7HWAa1TdQJU1i9RFyZwsEaX3P8AM7kwWRiebY1aBXZaeuzSZwL8rajiKyikGD",
  "key37": "5QDgnsALDy1mc9hTn3XS5zcEBnUm5yafvFJibtsP9p4HTjAL6ytmiS7rQQG8LKVv7UbC6MkJCjVpaHACgG7xB8JM",
  "key38": "5i7As3AqRwvyBo3r8Xjs8QS7AFjsSiRFxc3o8gMi22Cw8YW3XuVLSXXubRM4rSzQJnP51pJWfNWWNfhcrcvLJVqA"
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
