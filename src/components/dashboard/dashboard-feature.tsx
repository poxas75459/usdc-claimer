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
    "2naRecoJHE24Prskvm4Bzr8WuthWLB6BbkTDJLbV2RkaRY6V2UFMkDx1pS9ALL9zFLqqF4pQ3GxPunWhb1yBTH4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QdUzvyw3UjCBY4nwtZa4bdZLhcctsKUpR57tvzH4FGc95yaRJ93BihRLnAGo88eWPgBYJT1XeYkHRdGL6mkHXJP",
  "key1": "2u4ptkuBhPZGFuskeUoFXLPoWkMsmRJLJjdoVQJYfPrQFPfEqL4KYHJbXVFJL175BphtnPMwYvEVEwLoqjcbYcLr",
  "key2": "4o43aDDL7cqFTNk3qVHzBvMEtex1BpTfmj7KKYX274cegX6Ejg2hMUTWrcPNcxJc6SrVA54vzP3Tt7VcihkdUkpb",
  "key3": "2pEbRYnND6jSR8jWwMGBi3actEwUtxv5q3c4P6RtA3jUepa1EXrFPfq8D6T3eGAzAvTmbQj4MPLjN3fRRSwkGEEb",
  "key4": "5v5JLXXGBKubisfmNntL4v1vrcqoDchh8Y9hhtvu1SiUqBsRuCtjFBAvG2YmFcU6skBYmMe27T7Fd92e63CLuCnZ",
  "key5": "455v5TU3JdqRpvrh78kKocyzNCX2PUJj8nbSxL7xwNquZxEpP2F1KK1ZWUnXeLXMRz6zgf6NgBhNvj6RSReFp78p",
  "key6": "3HgMjmx6FsypE21rkNpHub8v42CcteP3qL7cvcMnyPtbN1XoUWSasJXtta2ifTMwLVRsh4RcbZv4Vk2c21BEvMFb",
  "key7": "2AK6n5tmxR3cks2DHrYy1YoFw43pHcjNtcNRhpLHBVuUmpAeHg598sXFqWYHrhVg7Y4TamudiCaYr34oHR7zVtGF",
  "key8": "3P9aW3jPwZehzskWSaHmEYiip6RTYPXDSVGSeCupQz6aTXqXbaw1wNeg6Lpbgw2uKYJwj5uRbVaHj5k68QtKvUx7",
  "key9": "2jTeF4TYZ4QUS2CmgmHok7RbRfw81ZVCvcF3DbyVyPpUTh6ZHEnptZQHbVuq4Rfj4L6JD2caAWBAoXPB22zmBh24",
  "key10": "61kMCb8RY4vSqc7GfBHYtnGhLK5XK7ghybbcJrxDbvD8WR9HW9y9BnknGg1U57kccqgCcUazfMNh17ozUGHKqx1n",
  "key11": "rgmBeGeCVeETPz4JNJjCGg7x7evpgfQ6i4uyFz6AFS2KBCyK7oogz428rYskYxZ4n7X25BYMLREnTo7Kv6ABJ8K",
  "key12": "NkUXZaJvazmKz4i5MhHvreJ9q3Xt62fRDczAScikg18V3hqJhHyCJHuuyd2kjnSiQiWbqXymNaQJPK1DzJKt99t",
  "key13": "JFPfcXHVBVpc6Ecdt968DxZ9kBptExATTG9XUw9M74VaRDoPJat8iDF5PNLFUtgMYyYo7B7bbwXuk2KiE5pyNJd",
  "key14": "2okozVEdd6MCiAtSrok43FKtmrC3X7vkVhsrqXw5d6UrWXJEpZ9wSo3wVyDpMgNWc1ZcGADfqkZehc6dDjHRTu5q",
  "key15": "JDmvVNiSHcwh5LHzLBHo7dZqnspmFL31zYa4CoSDMiqnTKbrTpkmxq4bGd9ZYdULZ3TTwyGNJvGEG8K8rv1VioK",
  "key16": "3TSgQtEmSXBZEVp4fKEfTkUULzhLNnJFDdiKwGJZpchwahihWQ2Wo6evzUzm6s8unSqNacJuLbLrkCiJswap96Qb",
  "key17": "4XqiedSmPBN1cVnHH2JvptK7fGagKdfirZ674K6mBkjukp2QbCkYFC9D4qcMr97NB3gX7sp84ChR5gYgYuotD79C",
  "key18": "4sgKvfDsVpDAFjs89W1YH8Xa87TfSHDt5RNe5bn94gWoJvZavPyi2bkdUYjwxaAAW4HNjsp3Sj8UQWfV63u3Ryip",
  "key19": "2xZgEWGbmdkFsZEHcjAQgNqQbL2f2m8gczw3YGeda6XdMW64E1Dc46P4fEN2rkSrvZaEk4p8zast7cAUsU7YJ8Ct",
  "key20": "5G1bzRfpTdQyUzQB1Fuckz9vz6y1p3EzXuEEWVcnwX1y6hLSk7eiKYFYLqJ7BQbS3f6f3mQBVEoVuPzztNUjBJVs",
  "key21": "32T2pp3JhEfmJw2Gs8nJPxaL42EBz59dBeDmtAqgftWS8X4hR91LHGBFtuxp3MYHUaqKhjDiwzBJRKwTfbNFY1m7",
  "key22": "3N4rcPbzTJSbu5ndEsBi64thFTw6MhNjLEQPxFHcRprPoDqUri5xq9fP7vdyLtwtfqi2UwEPQ6msa1mD7HSifZAc",
  "key23": "4vVZz28h4tzevhQezVwRwt7251JLWVq3BTfiSpPeLvDKUUJtxbAYWnVxaNZaBjoDePC37iqhFx9L8MM34UaUsXxq",
  "key24": "4X5ihgp9Zn3SRBNDik3HnsP8YLodbv6PT7ygSmYpu378aUvuM3wJeBJp4jB3LNWsDenW453vRNuqmuzBC3cjpwx2"
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
