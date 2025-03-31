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
    "2JdzmminwtEqyP37ucVszK8WfVKmVp8buc6NP2JmqFxxvyZDWkrqetx7asQYLFMPydJ1P1tGNxjfSc4EyoEBLufa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L5e3yBiKK4wL5QRKjkUjRqsoYyYDWaTfZkpKTAFpUjhkPbUXANfHTjpTvGeVtwskEGMbJnrbafCBKj7uahbGNmh",
  "key1": "41DS5Di4CXaDTj3pEBBQpagHgVAexDXh3e6TrhGW2FydNVuA3mxgdfYHNCQC2tQEsTiN6UczqJCyPkbKEYa3rE1o",
  "key2": "HAGeXAvief1PvLa1jZhjPFCCpg93qnRPXZAHsPFy4CsZET26rukB9Wg5doLukPKNdQGWxBrtivaJyBjAyWTM3u2",
  "key3": "5sBeHJVpmoroGQ1j2sPWnc5Gc9TcnSuqyXkPFCakhmntKMoS3LodVtUMVtfaC3QziVJqtjm4S1YxiQqpQzizqynt",
  "key4": "3SSim3VCtn39yZGXxymNpGEL4ooDWu3R2RpxXkMWg49meCxzWtNq3pFE6SUzAE1hiJMvJegZX2jukNRTRRBYjaAY",
  "key5": "eFrsD479681J6UpomEjvaVRWtqyh7tTDz2zUbNK3WbjqL2cmRgGPXNjxStbc5Gwd82Ho1KF1dvsqTFDsDAmDDbf",
  "key6": "34xVwyp9ub8AsNzQJRToyoq7awgV1JMuC29JjsGJNhmve3kg7eFaYuha4nsXSQf2mhuWHPe1GpLs78NwtAVYo3iz",
  "key7": "2TKar591maBZb2cFzTPC573isPbdjitkuUpDNbXhBsmNoLTQ9Aa1DVtUmph8oiRjQvFvqYTQeVE2MeEbYw2VoDmz",
  "key8": "22whHobUZsUxPvwsMwNpwZgPgXn5FNBYEyyaKhmzZiFvy1sF8tbC5bSaoPMgQufhrRMgWggaJU4chgj9o2u9AXUJ",
  "key9": "HEWTkQ6863Cy6jonsgTgRBYJ5FUB56CJSi2me57XG5uDVc8K73vQNhMkopnjKP7juSisMSLm75uzCAG9WiR5qAn",
  "key10": "2XdaxSV56ih2RVTf274CefkeJu9VMPFEY3oW4Sy48ydfiUnYbKYGm8rRb7cgVXq6Z8JVKcRBW3kv5saQYxhNrmgp",
  "key11": "2Cd57Dzv2jenxXTtNjChpmWH4uM1riDFj6nof1quagzXpyS7fwhSwa2VLFA7GYUpypLV8CuUQnEXbrSt11RjYYT8",
  "key12": "2Xf9GwDUWb4nLhjCWD9H5KknAc1VnFb2dD3CNdQR6xkCYpMc9ewmZrjLnnQxGnUUJGCdmXdi693RZ9by8ojqCfW4",
  "key13": "2WPRhtRDkUD3axM6cPF3DZ9CRe5NWZnBrfQbiaQGXS26jLikejDCfJKb1GyjEbNR9nDVjYXR2n6x2xcJZKFjtGwL",
  "key14": "4JBMPDwvBuVkdJJrnX5hEyYvsUSuVrq9mLKLhU2yyeUth6Kc9CkhxVqwjfgsZkK3RhGszZdDRWR6wcDZfK82axXv",
  "key15": "5YsDh1AtPAgZ8uX2KWgPTp5m5vhNjKoJCtzRJTM9LNobXkBm3sbzjEEZ8aHjorpvgqqXTfuAdmXm8tdZTMStFjat",
  "key16": "2AysuTK3uiR2nXQxTjUvhup7VsQ4LewjT9dS9iR5UaeksD6o8NmGwqd8cPcR4hDM25sXHxC4zQQCGep1sPcwGCTr",
  "key17": "3srSP1K2ciGYMfnVyX7iHny32wauRiARzfxkNjwwtVncGM1qefn2MXHzatpWsTg2tjHXXZ6L8KZL7xFYPUWvFUsi",
  "key18": "4vHPMHhpbPJxJMwBzoWcqzN1Tqs3LNVRhs6g4R2rt9auzUVj75u9h8Eu2e8czHiuuQZVTXFy5WoRALW4eTpK7PeK",
  "key19": "xo33yknBFLDM5ifncZnqhkkcBKpnLiJVPSRucPKWqNrP2TkegHd6SphuRk6QQHo6HiKg6Nxx6yKjwjLqZ6pGaPg",
  "key20": "3AG6rV4rZ6Lowi4UgC6mU1QfTrx8FSMpW8yeVLphPoMtx6iv6wasPQ1qSGgFQjHkUSZzat14QqHsp8x5Lb7fPiV8",
  "key21": "HLAJgCHjurH9VGdbihYneBTh2C2LeUTVD3gu7R4Bx6yg8gZqme5CqDb88CUbfwocjX9Ff7hvYBvq6P6KwnhBQWb",
  "key22": "3T2Zgq7ywTzUdRUiQB6DWBdzfMQ1J5Uxco99ZBf1Y5a4Fsjf7f3YTjhNVGtM6MeXMuon1ixRHJVvGBJSd4d2rdCX",
  "key23": "AJyMAbVcoBrdFidFq6xUHm27THeY7fWyPtN56Vf4mJG5bmSAD6pCt1wyakKXYbBjPeLVHcKJmLSWqit9ym819zh",
  "key24": "2Yq3BQ3Fg9ryauf13gXefbiXhJwa4JQSjnzEDtQqm7RhrdA1ZL4oMnKNdW5FrnyubxJr9AnESGDzEcTUDHVECyrn",
  "key25": "2zRRAarSVrnis7HHXBht5Ew9xRp1yBKeP8JpanonyxzEqBwsyZjApQHKtbSPBf5oq8frHFve7R4tZxpd4SJpMsBL",
  "key26": "4n3oLcVFCBbrE2xJMXTmzeffTXwQy3SJkFWBS85R2476cDje4hsq6M98jpWfUm6GiFbPCb51CBB19VWKLPCKLcWj",
  "key27": "4xgoPc4Rg5LtjQ7qUL9kCkDnvZnaFq8Mto4QYogXTxVdUgfTqg9VUeYwzMvZU6XsCt8WdNkfCC6zfLBy43BRzPW4",
  "key28": "5rCpYNrdB2hpUfRhc1TgnLkXo6g5qW8gHGTMr9AzvANsNqnMQtmdfxVLuYmFp3ztNGzp1ecTrTY5WJRmgmaigCtk",
  "key29": "31G6jbpFPL3hSYuigqXctGsFZJYorf6xmgeVRN91dCGAfzAvUr3aW3iMso7GzcCfsb2NiBnF3bpE6GaBFURj7nTN",
  "key30": "4NDeR4qWpGpzii6AhCWZkpUCrePisuQ3aXdXezJZwYiTYssokRW1sziMwM7xDkWNYuHvZkryL3brUGbbyuP71SH9",
  "key31": "hbQSVd4aoxn5PN2pjig2eaxLaoADmCnSCNTsXVFRcKh9sfuNLtkZkqGzaaTVKQto2ck9SycokVYd84cmHYPEnNZ",
  "key32": "4WnrTUHfRxPhEEzL15a27mdRAjLtD7YdVCAM731jRWyMEaqGPgqCvrqzMw5z4LRZUpeu58ySqqyF1U9Po4dhpgzK",
  "key33": "Yib8wXjmRrHp1m7KnKnsgvD8RtmTfnD6uyDvg4S7hRc9fLPDQ2LsMototjv4votqkV3hDDChD4h5HCgo8BCZhQg",
  "key34": "4x2ENqxPKuX3gf6yLiVCf5LSUqyy3znT6QMjBDC4Cipe7Vdh3kjfDzdmzsFSAM5Zwa7SXdGowzrYaUY9iUjCqYoJ",
  "key35": "2syARqePtM2SfGFSRq9rTD9mg5KV8JT1ejEqGbx96oDZ23QJKX5vDE5j1dLHmvh5NFcyzxJc2xZBp652mxVtziNj",
  "key36": "4gEqknS2sZwsHQjKi9YthGTzcxgXhNziZjt8KyQ4wV9xYmGdLWok5ZrAGPCNXVnWUaERdKb9PSpQDTwWAeMbeDxE",
  "key37": "4ic9baTeeW2dSN7YFAASzUPViqufyzLKP4cBJJP4S1qXcsDtduKpPqaWxhFgMFcpQSLi3YCHE3NH7u5yN9Da2rqp",
  "key38": "HHU4Tkv8hZnXWApkxHEPmW7V9mT71sKKswqA1PiaJWTs4wJhzjjwi2Ajn5k4fVerAhiffqDqy23YCgvx3daA6HK"
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
