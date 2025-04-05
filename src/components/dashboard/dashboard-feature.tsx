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
    "N2wLDKTqtECGWe8Mx46tZvTRynWcH9sFrS11QweZToUTdpYbcTtspcSsLWgLidhHH7Tn98knymZQJ3YAWpEeXbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BkqhKzTn8WVHbHBNocVNbuRzdnPVhQaZc7xwHrFQfUHXZN4B9ehz9QU16NKEPLU2Vi5TsTh4sirErdAvaVRz2w8",
  "key1": "5DdYrYedtBY2N9cT4GpmJaDEtEvFtXbVFLTJ9F7tEEEEpr4Zc9zU6Wb8oSDtgFhCzatia2yuGYdgLJpvqr1JLyko",
  "key2": "5cpWZFqNn45eUyXo6V4Luaiv8sxTfRXzqhioqaY5cUWW46h7g7rmJMCTDV5i61CsLtbmPp5TyNNz12mLgHH7iH7o",
  "key3": "27KHh6Mq8bsy3c4pPSrKUVkyUHbjkVbrvRCXkvKWEMTLSfWeYKfCc3z7FuaCABFQukixAfE2SbTzXPu2uiLmtLST",
  "key4": "ekMYXMJ3X2zRyAQPCT6nSwP2VeNwo4tusQqB3AGEQhCUcxb42fx6N3HXYErhHVALG2paXbpmSoZHqNjYFd2TBkJ",
  "key5": "5o9LAh6DyHpHEuTLrXzs7KxkJrRSdEYsBMKuutZMkmrWvgXKHLLg1eqTifsjm9uPnmtUX1HrRVpDaD69x3crpY4N",
  "key6": "2L4xkAdnpijxmcBcAs2R4wryjNh9VuptVe2DtPEmHwBS1CZxNGm3K3ZWyHJpsAAtX9RAKRYnhoX6yTNcVqYjv2Ew",
  "key7": "35JsDtfirp4yxVFyMwCDHKWAND763VvoqHtvBNDVroRFewZ99qbNDTc3MVKE9qsnC2Dsq6ibmSnNQhf9KabgeqpZ",
  "key8": "2yYv8VY2uahrRE5Wq6PsYX1M1hbEiVHJyVakrkcbh4buV7TNEtr8f2E57n1GmpdY2cbB1RFveNVHBqKdCYxb6Lrt",
  "key9": "28Dx7BNfMGkgybhjAMPSjvskWfYSApAy7khFprUGwKX4wX19SVYbMsnqXHXUmA6HRoV2MkKK2VG6iH2MDn7Eb6CZ",
  "key10": "2a128A1s8mJzs49qD3XUPmTM7BSKNLkJQZFXDDQtqRijWvZQVWj9XJNgsHXau9Bmde71XjghtNjuJZaC6chfvJVY",
  "key11": "2ioJHkNMfeXf7E24ReAhstJEfGNMerJtULd5RBcmJShhKEZc2AJqkrpm87eEyirhZR4Mrnwrisqq7SPzeFy3BwLC",
  "key12": "2pRNSYtTpSbo28rmuWkCV11u1HWDwZ8cKFoE8CNCj15Nzbfj79dmLCpM3MvWtVJ4ThwVzwWqkxAxYsHvRXGf77pq",
  "key13": "2p5adikLazzNoAE2cgMc41ooHJZvzn3gMiWWevGhFBFSfpZ5HT5VVT565BxCKqv3vuvuch96iNMmi6YhF1AtdGSh",
  "key14": "3bZ9qyvA85d6cQNupZU9avnrS5DZ2PUwpk6Z7Ex7eyFiVDYUAZhsokUDeEFDtheeDtDNuVQ3BZAgv3aq1AojRPtG",
  "key15": "4Jopy5zcwKCAG6kpoZM2YzX3kjmbUX3acTabcHTC6xD37U7c49AgWNWf33LEApxpmne4HtjNoKmfnNvk6L6VBWBP",
  "key16": "5VxvJ5AMr8kR66AAnmMwK2KH6SngBHZJVEsqDRfcP91uX56GQjmxajFXR5nVayY51TPMQnUWq1QrGohuHQ5JWGBE",
  "key17": "Q36z1R5nH1dFb7L2mwSYJzHXUHdNo7QtnzRgB7GccW4QR5AkpMYna2rRVNxapt8ba2PNx6qKAS7ejYiQDfwj1GF",
  "key18": "5z1KDob2h4QJYYrBcr2roBWSvZaiowYnDW8DRPR2qFpKpmkTLGxa2RYNN1zNUryXcvS9zFvuYefCBZ3YwLBPPXAL",
  "key19": "536iBSRS1GhaZmXxfhyE1cpbVMACYxS2535UAb2tnEzNWBWNzvmo1z9u4eq7yuauBcxwqHkKk73bekXFFgDKuPbA",
  "key20": "49RdT63MTEA3bnMRPv1A4Qv7zmLrhhoxcKqLowxv1gG1rD3ksbxTsoGSWEeWyzwKQA1hUwjrdXqyyUDvbYK3zwg9",
  "key21": "2pM1WEdX6iht3bBGCDFVrCgmETyvGSDurEA5xaBH3QYqWQRc9XnLSQfKWGKP3LEwkJPmkPtDMjvwzctDVHxxtJJf",
  "key22": "mzNWhuY9bgWATgaPdmbGApa4J7nZL4A1yNsecMBAN3UNrvwwuS3hnguf9erRseFN7XnxQTzetAGwXsRcLv7SRH3",
  "key23": "3A29jCdK24kim4sfzpQ361js1KepoUDLGH5HRgAmCgcAPiRchMVpw2ADARMAaAUt7tuRADhMsrsQenJDFx3tAGyy",
  "key24": "471mjPWfMMPT8MqM3SpnxVuMNrAXYAPaxL8zSfLLEfFr9M43eGcYDXgDvaZXtDkfUs5gbG8dYG4M97cbScewmLba",
  "key25": "3qpn1H1iHMM5c9EgujgiNrMV28vWUADPbjnWJxsrbFM65v1kvVS27AmtDVgEVbgvKezk9sjQb9tD4SihrBoYw1eX",
  "key26": "3utLhRBvcDEpcZionZA1hsJ6a7vdzG9SLgULtszFGJ6pcbDP5R8jJ6Hba7rZSmxxtkoaHmzzWh14YmXdrmz14ywM",
  "key27": "4dzWe6XsKPr87nqY1pbwqDHmL7QwgGqPWsFQGPqFtdi3949FW2k1YMC3A3RKeVquZq115uQ99YNHYmv9ZPk4rsf2",
  "key28": "44LJZegLYDZuyQ2jn2QVPqyj3h8UMYkreKixVySBcY6U19j1DThzUdEw2ewKeGg1ZNnotMVbTevswiT1N8B43Snc",
  "key29": "5QQjkVofhAnD9jLQVy6voKpxKghAsgQ7QPwME38SbA6zHGWcxi4tMuadrFBt7JsLW6xJpAKzvKcvxyx5Ep4iaLda",
  "key30": "2yjJBqF99fCCr9MCDygy3RZYeRbynTCWd7GLYpFnTimL3p34wKgN7i4WnmCkdhAZ4J1Af2BJK3tXtunF5kkoHALL",
  "key31": "4XsrKUpJZ7WY7Y2GKDeR6Z4NDFQg2dvgsZbzCd71cwNvZHabUXhUyP2X76jVp57Hu4RwGdBEQLDjndwxNs8V4558",
  "key32": "2vN17usJrHNhi4jRPRybARUune68X2okfBqS7Qw6o884yGsgVFrWUGJfFkehWxLM1AQ4XU8zMBpLZffKtkYg8kge",
  "key33": "5z513WDmscJLSz5eJS2dS3iy2j9AaK8p1SidaoEuEz4sbvvPr3pGh9hf23bVb7xYYqj93BsicQRDTUZs39kkxFie",
  "key34": "3F7BPggT9jTsQx6cWX77MXWPN2zhUeUgPNRVzgRnRHPFQqvpjFNXQzvPxzXC6gzs5Mx1cVWSEfyhQhUYpUQNNVUz",
  "key35": "5TPd5D8jL5qNQ2Vq8XyKpqhnQGX6hys3GXv46RkeExBmgf27YLJrAV49QwxazK799UhNAPqz2fcDtw7N4NfKMgKj",
  "key36": "3mGnFPrmTfvhb6ETigGUNJVMPzoG7ahqXGhYRwaCDFo3uFJwtRD6nnpnzmdFmfe9pWPikDFX19zjUW4uE4VJcFC",
  "key37": "22pW4vgGUStruV4pAFTm4TSN9RXXcGATr6AQZHD6R93XE3AtYNWF7YjMmDpDxszTo6aQZbGBi76tVc4anNSiUyt6",
  "key38": "yu3Mus7oTixmxqRDGFtPvNp5uyrgJ6EuGGAY3T1k5wVVt4aW96GJvc3EM4i7xrH3dxBRZGmhtZ6rwMieaSiZoAf",
  "key39": "2pQw4kvR6yfPRYMg9tkEmb1ez5jBLo426TABzYTVRQBNcocuTcQrxU7jYCYQ25PnbrC3oT7UUSEwapZsKxNxnDfR",
  "key40": "HkEgxCd8FSHrRnxof8dy2SzAte9yVJsNT3wCA5MbowUjX2ZCYo7t7qkeRxDgyB5jiJdY5v9sngtHb78zgD9NDfW",
  "key41": "38HKNjQoPXnrrTy1YQRRqkRwcd9Dub9ZA4DPKCYvzmwv1men9Qif81LTh4Dg479z7xVpuk2Ci2sBMTRF1RJHy886",
  "key42": "bFisC8VdnVW5mWSrV6PjjWoawYjDq3fPoLZvcLQmhGG9djwKR1FJByj89H1Hdts1uGwu8p5KoeKpyLadvnoBJya",
  "key43": "5CcEXvzQbzJC7GEQbxTWEEq77JQM58BbUZvboT7qrMToxKen7vJJ56sbE3nXxf7V14cd5GN2akqX4qe3WDghaRH5",
  "key44": "2dBPSKz6e7RW4jMyznpUwEkeEu5dsjx2DdgZmYAFyP5ZhHqHbeWRumeFAvNzSjdDn3EVCTjRCcPjZ5zWYD7ktoDA"
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
