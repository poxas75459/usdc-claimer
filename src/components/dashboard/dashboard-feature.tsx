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
    "2nFuhs2ssEHrCYLdqc9S1kHrvmVHDcC6MCwC2jsAXzyNNSaWKeirrkS5XGZ5u1mvugL92h5NNEMcuTzRFHYEirwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NtxjQuhGATgTnCFSmiGdwGwWgHkVTFJD9GxttUUaw65ymt7EzEKBxG8ES1P6PhWjnKpHhQ3KX9dhG5ccGSXVXEN",
  "key1": "LbzZDaDKuPm1pr25ycNzznVx3sWkRgUm4gReXUfDNmsYD5efokFXTs1kWZSY6nf213TCeBeuJkMJidDvqqBLCNs",
  "key2": "8pKwS89e3RFih34CZQYUr6qJafaVXkAzFGAcYQN42MzUam3oTDz1cMJLoj97TjQaXS3ktQC2HPynd4X1R7rdHn8",
  "key3": "4Am2qd5qR3dFHKBT5P5dRu8LPsWaFDoBGSLWM19KEGCLHVvukC44S8cbTFXJECsEF4HbjuYVnbTMVmqDmE6ov2fT",
  "key4": "5GNA2MUMDDJv4xRrmb8a5R58q9vhHRNxAbj1U8Q93TecV6AMKW3CXRHxmA8XRzyo79vQ8aacXhWSNnErdk7phwqT",
  "key5": "qtizdDQEKxAebvKYQzpUqM2bJR4z1JTw1gt4i3y9m8MxDbsPtXfTNHuNGyFM8jXAhdXJDDALaGi5r3UV1Goowkj",
  "key6": "2Wbeum3tv2sVCADk318PbK9gMsE7SjbqXcdZ9oUQTxGXZfopyYcUvDj1ABy1Ey2kbcq5JXzJv8fLYShSyo8X1JWY",
  "key7": "5LLqNcvE827vuKxHuiuixJyhZs1mzQjZUF5R22jSa8mMDG2KJmkJXPC32PgJPaimDpndi3VJqFuYryyRzSCGDtTr",
  "key8": "27czmiuUzFFWFwTY2EGHKfqZkgP1g4qfnyTPC2mM1qG5GjcgC9Na33NZYonp2wovSBYTvdHDrpFLJYKWQKwGbTKt",
  "key9": "4u6dFJynp1Wi78UKbTDar4UUyn26oaYeXDqPLtFYAApEHySM9PKmPi4SchvX68Mp8y2MMxFKuThNv51KFNeg18DB",
  "key10": "2DeE2aC2UTWfMwABPedrpkEhsctBf59Y3LWZfrkynz4c7zJLSZtBh4JcCSqMuV3Sbkek52sdaMWkAtxBuWiZs5nR",
  "key11": "5dQCdAhAaUDnbcsw2VjxQSgdRGmtDCEt2tXmaDhFTgjAmCkYxzyiiGabu926nvXchJQUdjkkUuHzxTcn59vCqeG5",
  "key12": "4QwmNQyaQpL2128fjbrrAXiNSqXR9W9r4SNxekM2JojWUMZL12Srz3oxxunAVSePY7CegPGKhmyn6MYpcYj22bg6",
  "key13": "4QUUEFQBT54dHSxkX9LQNYssNKa7FgfBq8n3kaKxRGH2wu88mVMgJw1KdVG1E2EHc61U759bgWT34LdSWZtm4Y1j",
  "key14": "4jmVv4mTwqzTZc6xcmGXsU1WXUdia1daUjySX6LqetJhbX2xxcHViQWfnosiwDAdRkY3qWYWY9CPpTweQcVourSc",
  "key15": "4xnLHLnXt3q5BDmtrJU4uUy5GXkZXiajtu318Lw4fiPgpMX3otAjS3yYykF84rJJjLHsJtX7L5yJQHmNtX2Gs4rR",
  "key16": "4SwvjFaekbfsbeeRX7zm4greEdyoEEv3v5F49iLZ24Qe3r8N1yYZPk221cgWZLLD6bW2ULYP45wADFvL7g2ubQ3U",
  "key17": "2LK1GsErDjMhN9DthAgSUQpGYatz3n9LTwsy6nr8KXhi6ZqN4J7Gyu9RyXAXW2YP3n45kWTitvckTY2SL8Zquyb4",
  "key18": "2Kf7tgvsLwiMe3fCQsw31kKGT9F6zdY4dSD7hpvYdxwS6Kw9pMyxdE3BtECda2wz5WAMRmrdLcHZuuKD8x1xghkf",
  "key19": "3P94NwahjwsDnpSDcGUUJecc26nxVfocvRNHxFbQjkvXDFoyCZoCNsMKjUaD1sDW1KCFmSqMYXN7dogFDjqiuKbg",
  "key20": "27tJL1a8NWVyVDboTrQXqQDDP3yZiLcWLy3arwexQNQCHsFPV68XR8r9ENnZyScWcbCoeqoqxXuNFKKf35LAMbcq",
  "key21": "DGjp9ZSuRyzd5MRCYvKDaXoxBb8AHhyJLc3KvGmyMWb3Xs2k76eUaCa61Rt7nB6zenVj8Fpmm6Mf1E1wMkN43mH",
  "key22": "4aCdf3nRKKfdk8VBxey4NKLRyt9Zq5NbyCFC8MJLG9Ni3yCWxbKMLbCUY91sb42Bw6qkEVDGHXguFt6mK6NhRj8m",
  "key23": "3iwot9PEhmy8Tt7ssTFV14z6vrPMU8R9NQ812pqL6w4dmN8zYzqU3Vq5scnef4S33YR88GxE3fH7q6kGAE8o5eo8",
  "key24": "4KLe3fMDA7cQExopxGKo9g9tnADpwWydSGpJwguLNZAMARVRPpSnH4USJFC5bPmHDJRyq776eMkLxaAhRJeMBj7K",
  "key25": "29HJAno4xWjK8Zbmo5yyoeVqKooHe8QycCsT5NaasiQByqeEsdeRVityTULi6QN9xpyJJQQ6J2CySCevGo6qjMv8",
  "key26": "3E6RFAuf4rcwYMtQ5rVox1MiTMTT1qTYe4vGC1cntV6xwq9Sp9PN8smPzpY2DvftoSKzGn8PRQyo6sURefncB3LQ",
  "key27": "VjpjPef8mLb2rFctxokHiyQHCes8Q2LYhvpigowYA6rKWeWUNreqfwjiwkEE1X116eMnR3NorsupzmFWdN6Q2Pz"
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
