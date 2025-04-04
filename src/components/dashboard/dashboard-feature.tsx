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
    "3omfqqV8xxZjbQM5FoVbphTNv1s9V5N3cowqszZvT1gUnCTUNLR8QPuphatfRpWtJX3Rtm5CjsX8hW3Bd6PbLvoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r5sxapn6BFG3fhhCExXZecyGp2jgJSkYvWXfjg41DnhzUYefCXkcoCeC5uFqiMtJVus1Wh85ANHZutidk62z5sC",
  "key1": "4vKaNa7AA47Szj1jizPTaMgmsotCyb7MiMKu3PmFbxECaDMUbDGKFHzqba8cgfA3aRMYYV1cL3kZkZAcCjdvTwUb",
  "key2": "3jzPnJUCRfbY2FS8hWEEkNqQUy81BGcvXCpfvU6sJzTVspcofST16mSqb61rnQGBYcWedKpmQwmfQvaRh8PN4Wid",
  "key3": "66MXKEdJMVkefRXYWConVSCnExXn9u5FBgDqyzg8kvS7v5H1vWo1jMBQb4YWWyxpqbM9cLyWB8bayZ1a4WS5RyFB",
  "key4": "Q2w8uDceDPVfkQC4TWiU3YyKZ6GtqYfmGB6hL1wm4EkxTfmd22xLBGn61ozSAzczf4WmNUsyP8ozYrhSWGz8XAZ",
  "key5": "4g73dtL3ZZAabtkGjnXP6grrB94HDPVK2TC2fHhrmfd1D2FUP5hmBn6Kr6eNaEve6uUMSGMsuiztbTDCMi5WGp89",
  "key6": "2Lq73LhHkeToKPeGA1QpjcYrzsfPTipTWNPYYBnnSAfK9sZ6xZ34ReGThiWgWuvXqnkjmZ28qLL1D8SrqobxV8et",
  "key7": "k3dPkZDZhb3REgSbQ8uMobYUY5kMcj6EorJBUfXYDmGcpkur4tsWBJyUsKAmPiWK8aRVCvQxat4XQasUcMVxRWX",
  "key8": "3rpTuSiDhL4fKBVgu7MYZMiZNGNT4qKh9ysXYMkKdEMGWmB1rbn9QEFLNn3WpEQaQbB5fiUViicgzUPQhQ4ysjbF",
  "key9": "2FhmJ2BGP3WhpgFvrcDLmwswZrdiBhtXxWbKHWssiD1ScDm65LvVQNJ6fjdmUfVBJ2vWEayRzR7BrKpcmL58Yiz7",
  "key10": "HDD2Ry9Hn7AZWH6vF35GFHYWzkw9ndUEvHKa1q7qraSsQkQfyKe4FiFyX9iv55z96BMjbdZNLB9CTaoR2ydWzun",
  "key11": "5KF6UEgZG4ozJywQhEzWfQ5hjyu7ueVSRXkJR2xAbS2VFo5WqiNGGnhhV1Y9unfwiU1fSCBqarpEFA9vyUbnrPBu",
  "key12": "3o76WFQFP4kcWoPAsjdrc6ZqXnnz1GEPKcy4uJwyEvFhyNr3PmPXjKEb9j2FxJPECj1yXKgWmmuL2A3YiF359D1c",
  "key13": "4fRGLzjsiXTrmNj2s41PAQ7umTwsiX6fs9tkCb7RJWvJC6oztoiwc7p1d8ra5G2vTTfjc9f9GPUEHaoF1sthWHVj",
  "key14": "3ucv1u8BNAB1mQt9tEt2cictufUWnnBh9N64ZZYL7HxoHhbeWrJtZZQH5w6rj4s2C9AfSsTA1qXRbFt7eAHunMu2",
  "key15": "wLhkhgHY5AUokBtx7zwySEga5ubhLid9AxmH4kgrfFTVkJATdu3WynPVETALet3Cv1V2ze3yNzXCfmMC5aFrAa7",
  "key16": "67VFQnaGzqGg7asxCyaaG2yjCw4BWie3yEsoWZgEShXxZGY7nNpCuQY5VDeiWrdGKZG4ofDfiQDhBeZp5srePXxr",
  "key17": "AwAmSzXp53g2BusQuYK9F74v95cdsUbiCEUmaewXDsqoUQfMSuDzEwG9yb8JGHCiERSHDn4DMMjWPwFEZ2Fn4ow",
  "key18": "2D68chkcPTyNx2ETZVkynTHuNjAb1XJWu1nyYQDLt2qsMrmanrVtwHht3uD3AyD7bFj7t3u6C9TyY2RtGLCcU3is",
  "key19": "41ak1LcXLJaGJuHddPXrWoZ3UyM5fqp7JPiuNmMJs1sQJNHmrFcGK5vTftgBJd4AYfeuk9wzV8aFuPA12eyjE8g8",
  "key20": "4AVEB9XqR8vaMsxiWTc5msmA2kUQDb8YDJJt2A29jSx4Q59TQ3mr13trK1jfwxE6trs2n59NQDSb5dJj78B1PF5B",
  "key21": "YjT6aSR8okCYDeBE1ss9cgbkdVwgY1n6MFTEtUThSC8BMAeSp1yjDoUJaNNNvBa12wWzAiLXCq8vc3rG3i9mE5v",
  "key22": "2jXENQ4gp2TwFcTL5wHd1Mmum8Dm5T8bQm15x5VvKMqQQKRCGzbaW9razCRHbLvX3CKQbtqJM3m6Xe2wZbKEJzrx",
  "key23": "4F5a75jcJeTa6KmsmGatHGoPddxLiffVyvW1Wyb4FSNshcyR8rktbg8yr1kZXJfz9MCAmmv8dhdETCg6K3EbZxyy",
  "key24": "3JEScdBPQzENy2aSFXGRChLcSzAo8ckA4y3ehymSn51BMBKEQ1gPJEgM1bFcEKjUhAKqvM3WBjGnK3YFDvsLWMn9",
  "key25": "5wKbTd7UVLPeEwN4gSxd5SoLk67g1masAa1DeUEEnZLwmnzLpitxzWEfrdMHeoRMWDAcG85tDqZzmeBeQKm53Vtk",
  "key26": "2j8ncKLwdPQZKRM4NRJhz44r8m1Agc5F9PUmScMq42ayZFzjgd3BCqfK72ue68T9xKpLZkpUxJmaoKn1VNWxLvrN",
  "key27": "7osVQciiFpESzHk6XytED2Ysrm961LQfXdqPZnasSPGNf4Y3UwwZ1nuaJ9GUjqyQeyXiJpiRMez3PNUpL1GLfQK",
  "key28": "59C6BkHADVLJZmSVpsCpEncj7EErQLmveGWpUa9csowRRubzUGrc3PuULssBdz2ZLnKn2c9ALknJLhjhxd6ZskKu",
  "key29": "2iMJQsEXggz9CszCzMwowv9DMyZH7Q8rn67Z4nbLSSoHT9qEYN6kFzshAXFM6VZm31tR8tKKb5Pfj98D7gXn5ULx",
  "key30": "3B79bga4z63CNMMvuLnyMoev6vpMH1jJ3GvGyqJCBpK8uvHm1uaq1HRrEdGZkM7KPWEo8xeAJWNZxvfWkX62m4xc",
  "key31": "54EBXqtf58WWR8sW5dUmbhLo8E4ZAvR3jznbnMmVyunN5Fc3UXPD56tmBG7KkAWgKSkXhYFWEWBCZceGSuePXsgn",
  "key32": "V3JP2q6EDv9MdMcUhJRB7rKA3dLWA1Y2vUH62ztVUHWWtPgpqtYL1iqn2RV2jwAEipnCYUGmiWY3iLUUfsebbvm",
  "key33": "13NdA24VggD378aLMAoyWajt5XvRM97TtvnZwfoicm3Pfascdpn59gBqhCk3vGWznkR3hoet2zQzpSEHXuQGYBT",
  "key34": "F3UGDDbtwxUPr1tWVi2eJt7HgCggn8WgpzX6MZkLMCXQb7kxSbnamnnLcQbPWHmH3YpHqkCzmpxFgSxLakYoWBL",
  "key35": "4mRLywfw2aag21AniqXWM3kEadqBYRyjGtr4U9SnihCNPmRne873W8CAT4SY3vDeNy5MHCcbgDzJhnmr8AkYiXzB",
  "key36": "2FCwNuFkYoBhD9F3v9b1RGwCzn65okwxesdKFNH7NKGDqxep6X9D2CEzxAkLWmGUndp7cSXQri7U6AAbeHabvJUC",
  "key37": "3eXyvMmA1HY22psJGfrTmQQbgn34MWiNxApUp19QWXRSFBmHY2rgv3ckU4Pj7WSCdQBWXd2EAuKVHvxCA8eCN8Vj",
  "key38": "3J9tiCbzYqBbWLmA1s3Sm48TufzQNnJNBDgP8gjFxxacuFBNYFSsWabTgvvJCmgBoXFSuSX68CTpTZnsf39yTmkM",
  "key39": "56bj9yGbKTPXeMdmoE8WZe9htocWcaMpxqMyVGjWTB5wCRN4aV2Y6DuMg7zDGCax8U1H9TJ9dgSLKdsRFwrrowRG",
  "key40": "2UsZahqSD497dUZGm74z6vLT2czCUdU8dqs2ARqbxEvKDufmTCC8jvn6up4DRiRDUJoVG2eMQ2okWmjGv3EJCDgz",
  "key41": "5A5M7koyMcBzNXzNUGArn7NXNbtQdCmhZhR7hkpGFpvGfvxDZAnE9D3H4jyXpfcPUkYFTqGZ9sgkVcY96PGhyBaC"
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
