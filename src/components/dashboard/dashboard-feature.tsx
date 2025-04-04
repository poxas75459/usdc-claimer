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
    "c7bzVxHxSUwNEEx3AZcz2Nv1BA7b7Kt28JrZzxgS1k5F1uqiYk6uLW7ymmSJ6LNrZQdUuWyBWAKFzhxxH2SY5wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y9tf1TYXhwWt7Rs2a78uWGfbJCYLm1p7ZTjDbVjyc9qJJrktMhoqXQ5Fgh55h89L5X1qc1aU27es57nzBV28acZ",
  "key1": "A9bzahuTfhD2BjqxXSk9HDC3HLv9C2KsffxPgk15HfyY2yKo4FrXoHJFqg3CdFQdGmjij9egEwuQwyVko4QkNQT",
  "key2": "2mPoJNbaqfmAXZ1jmCYCosr6oiVC5T7ZJyjPm4m8UcD4ZXNXACLkWMe3yEWV9HiELsBU6UagdBMpkWxZyULjtCQa",
  "key3": "5JShCEyHHruDWCbFsdwXZ98zv7mDte81ebDu4CyQV7tWGNkhXG3dhb5L5xvND7AxTN6Qxsz5PBNqjJUK1H94tJaq",
  "key4": "4ChMGzixZxdAtzDoXeHJU3gwBRnuf51xiThJL4piva7zsYoJvmGXV38phgpcMMKpLUoVUFCKv5nkKaohgiraZo1q",
  "key5": "4MuER3Pgva1wXeJjKfaSodQfNmMHNzsYhJsLyjeC7AQaihHKxpRGHQpwf7TDa4VGnGVFkbicwdH6fkoU5t5SoJWo",
  "key6": "4KCTG6KaCtQj8jxQaP13AJQwEifWwpPRfaZjdSszjrzSewKTR8Pk7Upy5ZGzi6hCNCQ4vrA1yZLEsT5owNvgC1s1",
  "key7": "4H4pBumQY2qeS5L8iFq1K14aHSZLoEgDBy8U61smVfuhA2y2wgv6Mhp9q6UW73i56ogCZiG4TeWE2Z7HBqtp13FN",
  "key8": "ycXDFdGNYYzGxyDmVugQgucdD6kPXVvbEK5KAJQqxdvwbXhKqV4tv9P9efsMA2fWDgKPxhVzb8kDZdTsR72Adck",
  "key9": "5FsnxqJecx1LxT7Enzv9MP8RH54x7s3ibvHQMoqnfHv773c4vazrx6sxQcJo9yQhLhdWMZq4FRgVTGJpBuVU13i1",
  "key10": "4Mspm61QKT9R5R6sa3H1oTL5ZbqjuM2yj99sTThkHpQr8FyhAyHi2Q42CqU252N6q4u82Q1CKLNc9qchBa1GTas2",
  "key11": "jBDvMpJCSft5v6z9wWdTPyi4aCZK8qAUzL7cw3tgfkV68VrAo6tQE76QhdGq6X6DwNDoR6oiCGj1xzy2JUe3u9q",
  "key12": "4bQ7n8DaUxakjaN6ogA7SCaXpv3649jYAPPHAwHBA2W1JrSwTEQvRCJ9CvYE6HixuSMTg5W58Mv3BvZNmpiBf19j",
  "key13": "5nu1LcXhxLNLAqHR5wqmX5MBtXfaKC7dWX3bgZkyEBAVfkjbBStZA4m8gU3gd877NS81zaHrWredo8DUmG2ikcLb",
  "key14": "2cdfdQNKwZmdXUnwSwTPM2kU654aVS46CTGJtoB2u2xWCof7YTy8rjFbCcZKZSeiDaTNJzKnkN6RtWaPvUN4ym7p",
  "key15": "48nQta9qckLTPHNF2CDtDSou4gXpkgvshaFvHVtMoWc42FdHH8mfCrSpWK8kHSJ29hnWZwLEQpTpMkmmimDRPo65",
  "key16": "4QauGKhX5v5oZmHeKMGsZ1yxbqhqqbHdqt1Co6QkNtF8p9cYcfRX2ww3LQq55zkkf1nQgy1p9Gm1P5mjfmMAKZ4",
  "key17": "3GgVLbVdT5NM4GdwnziVQZRU6kTWWo4bzk4JsGG52892LDFT3tPbnvqtg67P6j8cLz5UtrLMHCPFv8YUzYcV3iS8",
  "key18": "2av6Rrf8s8dg1sbMKvvUFQfR6ApLDeE9fqs79hc87kjAH1m65tmJdSDrQPJeqr86BXEojiE9LSXHGbBfcdrXAQhD",
  "key19": "4LBfvnRVRinwzrgkXUHeBXxPW6er2o7fegBvurCkMe7QPB7PwgMwVH6yS7CKL4313XRMi3HCx55uqZ4tjP53P27A",
  "key20": "4VwL5aFeRRnxUFoJX55gpaq6HTJmXxuhZj68V1WWvT462eaLmakU2Y2NYuHKAX587iUB83DFhc8DnPQd8U9Ub6M9",
  "key21": "aApoTAE63y4kn8S9Vg93k84uJagG6AnCzhLtP3uPT4exLyF4LHztBQcRS4Drt1wRS55Z35843WbRoFBSoZFoY6p",
  "key22": "3TbuGC9Ywdb6qtorpoaCSYzHyiWQRszSsnyC88WcXWBdMxz6Pbp5hTBe1g1WTNQ5LzKtDdMMdeEnc45jW8WaQiur",
  "key23": "LKqHrHK3ew9CN2o7wTzMBnwrbPXnj5ofDcq3NKjbfcmRgYhuSAPoQ5XHvCRau7ePN19FePfwPLuBRBo24sbDXq8",
  "key24": "PsuFCG6ARmHW1nHRo4HshVkHhR3LbS4xUtZyhTwYZGRrPW9h7YKJaNd3fG64RuurMjq7Qm8eVtnfZ7agDH1N1TT",
  "key25": "59wYQqhze2Av12jxw4t43T8dn2i4UCHpVgFBbcxDuqht6QcKW8tcVaCiWoGJ5E9Y1XqXmN6EPc6SnPLrrZ1vDKsw",
  "key26": "2CTHJy9zeYGnG66ijud5G9dDjhLN7kVhdJ4pDeJ7fhGxLXow3RriJUNvXoJHARGwr2JeaRecJEYPiPLgd7Y1gBX9",
  "key27": "3aikKvbUzyq3qeTqLCiiLwpf2UE9PGkjg6FbGVXUxnBw2XUjtaa8HnuNDvPd1DgWZ6gP6URfKwN28bN3vRrRCNFR",
  "key28": "3Cd31ymvCLAYmT2JxzwnjFzpk1eToK7rUdphSSXUCt3fyqHKwZHb71yM13uQSsFW1Sc92jPJbL6hACbM7BHyd1as",
  "key29": "5Z4WsCymW2AMNWXD7s7xiZBTZjUVgmXKXVaEqSrD4vhSNXFGAc6EU7hwYqbS7xUdV6dKUr9Y4myfdMe1bpDeoFvP",
  "key30": "3y5TxYeBrk48qyArnHjCJXLXbQNqx7SGmEH2gFwK1Yf4eb95TngXxjKGuZW6HxB8KPFSoRnzpyWBYyXnRfuq4kCr",
  "key31": "Tsat1J9FDuUHe1KGkU23CvoGw6LHoY9ACYBrzbbPiiPrGBkFxkFenGSTtEP6Cu6D9yPLpvAMDc6GN2F9Ws2JTcm",
  "key32": "2C4da14QFoMcJjqQJTRneGA8xYPWVAC7bKBWwouzfWhzdoxeK7giNbyCYWxP9yJsvxZfo7Dd4cHjDiB3aC6QjLBJ",
  "key33": "5avf3ScFur4X6dYRVAFj9DuEin5E8PBD73wPJeVjEjLKm1rApLNFqj93nrK9Uv4kq8Gf9mFmitzWvoXtuy8kNMPb",
  "key34": "4ytimeDgku4azToZ6pHUAvEiLPQRrmwKctosPgaKRoapWLo1Z9GY8fmmws8G2fTZ9q5jtXV7642wJ1pMKHdYfKmR",
  "key35": "BckCB24XtZrnyYvgqr6hffcCj48PCostV1b4161sHSBLDMG7mzHWqa2etsnZSqDyt9aR1ptd4CbFuMfcpbpF1C5",
  "key36": "2okmB7rT8cwqJEnvkxDktQqL6r9U3SGZzaL8Nx3wSM3DipCcVdyyDhXZc1trCWLaAyurJehN4sA9zk5TnMTeZyGk"
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
