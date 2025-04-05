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
    "3zXQDtNQxPqTEMWojJs6qSByrACH5HLChSu4UqLYAGwHt7eDMeSA2PpguqThn3f4qQbCTumV7WmxMUVHttV4W24a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zFKgTY2qL8G3gQRbDZfSMBzrh2ipFogfXR7L2WyJsCXG6FQgmbK326ziiwUASworcTw7AqGKKnQ35Cj8ZgQLDkW",
  "key1": "5bHwXyrKSyGJrfw7QoBdhsh45ha4YxWED7QpXqWLgtH4B2CkJm8nxTqVYLF5JFnyv5V6hevyhiidJNWmxG48Tdj9",
  "key2": "4FjnXnp3ecF5LYtzrDhp1dyXuKWEP1oUYJgNoqRuAokkqMkzFb38Wyw641DfYoGa4WZ1L1LJQG41azo5dTEvtmzX",
  "key3": "2H2FhgktMkpaT4WDU5yAAiVK4bdg4ye3wHJdNchvqbNkRCRavoEfFCZdm9qy3HRLb9WVg4AfewFCALtXo95sYmj2",
  "key4": "423phSgxYu6aL2iP86mvZVY87AYUAK1Lk1io4B12AUvN8G21NNoevxAcQxRECSNHc1ZspyoNT1s2uNWzdf35skDh",
  "key5": "6316dThFduB5EvTu6d3V9csxxNRZQfWwQtKmgJLtNT7zRe9yFhp6dQmSgh67RDtUqAthusHqXSESqvUfywr31M3j",
  "key6": "5Y3Tytg1PxR3kTTSM42pdkaZprnV9g7yV5zzBEKtFMLE517ZYt7B8c4EveTXuEJyQSwGVQ82R6ZtgK8V8w2ce9pW",
  "key7": "2oXWghqr4LEyP7Q6G6d9C8to5UG52bF96b4XTBM36i9FdsiAPPoSqYrc1tvNkaQ7zStkdd9pDn4cC3NsdfVnJRof",
  "key8": "4vAeWVs3swHHEHHTtNuNP7eAUaqS2NQWucNX3PQjwfMEPbr9kXQJsL7gCCKHU8YPtoumVjxNshDQaA9XRthNBsf3",
  "key9": "2XaBo3zpyiEoD7f7RVHnwErcwDJ8cU4i6TEQ4L2pjU7y4Sgn1zxhi66AyTMSKvkaMwdYc5dnAWrF8uRdurDsyTAw",
  "key10": "cHRLRxribmPsZyDz2zKXTStfKg2spgeWYAixtFknLLDpNCNZbd6iLfG5Giq8ScoXKNR6XFfyH1TTEEuW7chQ7D7",
  "key11": "55jb3FfabMC6uJ7K3efiqSFGNrxpMK6rar7ZTKBQ4586b6NNDAFDzGUdQxNu1HBYy3cA7Eo5b1ZSdJARh6JzX2pC",
  "key12": "4oWkHrekFkFjJT8xL7RKaTtuCkg1JHPd4UsDKrYugFcDKEoRqm5byjS6TXK9UuAEjGjkfTLk8XHCZ9DB9CFFFfEJ",
  "key13": "5yLjiPkuShhn8gZHL8K3BhVcRGVDPnYZJPNg4v57eKUm76KTyvVLoZbMb3RxZaivJmxQ58nJSvbg3kodZWRS8TEj",
  "key14": "43AGde4VLgTawGcDbZ98rQKeeYXGQrrjEisfRcNYTpoQ9fHQS33xbfw96zU4Dm5NeByGEyP2yCiqppi7i9uQDSUe",
  "key15": "2KgCdPrJfEB1Hhq3Kj7ukiExLprV5jdWT5dogtqBPmMNbeBVN5tSiKiur1ffqQcWMc6y9BY28fUtTpEytxFMPsay",
  "key16": "4dP7tcyYdPhuP6jHViQ4R7DHJuU9jrftRkA5BmTT6hVjFGsTvuSZU4VFt47Gh2RmF9zf361KoMjBnDwcajs9kQ3j",
  "key17": "MwQEh7AXQ5tR3TXyDamDHKDrcQbKLyuUUM3XtTMsz1soa77LLBo3tZBYoa7jRGaiJaaJTnceudSDZZJTokCPJ2g",
  "key18": "642Q4LjxEc89oPU1ebce5b3ThJbYqDyZaggRiHeRiBC69qSvaySL6xaeWQ3REs7acSXZzofVcPp17V3RKnT1GMwK",
  "key19": "2mhGHfnEnwShzBS7TEBNNDSgBfwoyxtGPKbSKkv4nzL3JWsnDKLGfAihSmKbjvQstR9jYdwNEoUnuQrphSTMFXs8",
  "key20": "4U8y8vZ1icXNHgpEZRPNLYJrSp988bUo2pLZAwYoERM6d5866c6sWnrnANGny3YmQHueiYSAijaVRTYTDKUiwvSW",
  "key21": "5ZC35iiTQM68gzp9dnV4AxSQcQxp7mQsrbWCohRxzfAMEwe8bbCyx9fB3Sg6CQipL3WDU7b9c5LL8XrJJa3wEaB1",
  "key22": "52tvaXqM9vEWiL9VaNyMxtkTfPrd84NRtfgBMfHA6kyyLY6EbD923vgpchd71FqWjtJJke34axB1r3kMwWDsPQof",
  "key23": "2Lc193akCVsY6rmrQrLx43MAMsK7v7trAGR7Y6w7S6Djms4igCYktSCouqMMCfVM8pfXYoBgvKo1y3tTvJZT4yqb",
  "key24": "2ZefEcgDgKBzhqeawREv6CwU1FofkKJBNr32G9r7wxtwKToJoY6G93CnzmpvqiNGgK1XMW9o4huue7bqGsFUqXev",
  "key25": "5jVC9HDgyESneZvYpnhp1vM1wncBXrUjWVAey9qMWSfr9365NLiajWH5VX3XN1iQj34VfgLw6zmhfmK8XDTRSQ9C",
  "key26": "5HnJBoJZ4RWpkq8P7aQA6xV7vhaxrLDHxcMmCRXDjaej8UbjdwmyqybutvGDEekyQ9fjYZWsBMnMr4PMsq2LecsW",
  "key27": "c3yZ6bJ47sn9Kc5LhAPNi2gWiU94KiGdYLRK78vybaXodh8rSzCQqpg7BMZWWdHvYbS7yGf1wNgxYRk4uhmDy85",
  "key28": "3SMn1ye3ohCTfqeG3nYCFtB9gH3jcc8ZSh9T2DojL9T8YbJTExdHjKp7gfsDxuYJB4FzA3BXBuymviLX2CqPzx2",
  "key29": "3hvSwwouEC51S2HhVq2EzJbx9K2AVPWqxCyb41wKPK1SxiGr5Q78LHP1wUCq1s6ECWGxZc7qqyqLyyug2R5TuhZB",
  "key30": "4SUdEaAiNB3wShjrHHdtZ8tgDeCbW6yc65GYijovkGDosoBxuQsELSWqJYP1CtMsPxLS3mX48TKkUQpy7M5AHVmD",
  "key31": "5KfCMYM4ch1p4nRdaNtMiS5D6AZDsqzXoEKS7qSKDtkf4EmkRcrUbj5naGzoPKM38UQ1yg6aWdb8WPG9xPhd6wmM",
  "key32": "67aBSP7kztf4AZBJ66xDYyAUM9tyXVmzNfHMGXmGngyJ2snPgcetxyw1Evi7TesUmVg2yvhpmmzGH9S5jFPbAh91",
  "key33": "7nyWfB5UZdyQCLCLBwRM9BQtXHXu221QKgojtxVzduwSwyyDJ4imnaXGPTvYLcsqrLUsDcpVr42hsMuyTfe7qBi",
  "key34": "2m4JNNMpQ8nHJ2FTvDPSDsYXt8Q1ssESKnnszTaZQ6uo25aN4FyWuoqfssLddweeBTJcv8WVXzR464iGWi1W3sVo",
  "key35": "36QoN5kNUuBpEPcxv2ehmAxTC9RTJztqEXtJ4Zt4rVfTwdky5Xam1eJRFgKQQ5ZC91rtd2py5ApfHxc5ZMpmwWQv",
  "key36": "3BML5f4MqNVQVWt54zh48bfGu9HtmqBdRKjcFBr1N27u2p295NztJz9D7D97AARUdjjFHf6B2UnnUkHDKrK128Po",
  "key37": "3JJUnsTtQ4yTJXutajHXoty1Po3q89YP99egTY1UUUtDRPY3CcKyEgdiAMgTa6M8Kd9Vhz3RPkM42EctmuyFTvYC",
  "key38": "jZHbgNscb7eqjLQgg8eHH8jtmK2bzfhmDVJjQNSE4tSqgKARaJQLxhSf7DfMTGGkZ4huK58CHTpbK37qS3c9LAU",
  "key39": "46nzqUQXAj7HV1wTGidzpAfATwxccxVVWTtdgzLYef2YXinneiv5yBCmiWgq3dM9FgR6WZsrmt1Agv8iiuQqdphW",
  "key40": "Z6rZawmpp6r9HdEDWUuyHacceWq5HmMgFRkytejHWfTmFuxL7xLSZ722Pw7jNuXaRSQnyQAHWHYaoMuik8P91E2",
  "key41": "4eXxgZpAbmr8DC16hJXtnyoqh5zMLQTDmKsxXDN53KiJ89ATQ9hRLiG4UcGVRq5aMY58PLkY4c7uaN8LyFYsNPHV",
  "key42": "5iRcou4Qqk16q6y5z2fKSzZQ8LXynyPqaPaqwNuAG6XacjaeaCVtAp4nJ3XLx97s2vmGN3tcnu3S1DMfiNw8XKUZ",
  "key43": "5sxjgwLBj11hXnZu8D8171GP5ALTUg4rmipyTrwBrDwBXoUDkDD6qdkm33V1K8G86ZW9AdHujztCEXNxAdS39ZEt",
  "key44": "5ujMMgZYAT3L7smScHrmwY3X3VBgakCKd9ZFT7WobnoxggNMbi3vrE97x2HFAQbNpbAScDY6nnMxfY8FBznSrcrz",
  "key45": "32RLo8YPM2QLAbWej7m7uA3V8wjsmpkaDriRHqEEMdTXTxAywj3AJsusLaPkujuxccNi6Zo3krEVbPtB3MiFb8eY",
  "key46": "63isvABRE2hyKrYh1eDT3euqZEseJBDsQ8ewBAXk6vPi3oMYYctfRsuQgjwqVXavYiMv4JLNztiWi2U6vt2nXP6b"
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
