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
    "2ub8iFfkNAdnXzgAWVt183RoipgAdrwMp5g34fZLMPCXZJWFV8vBLXxjQ9DzNRdQR93TinkVW3nWNxe89Frodpuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gB9bmuw2NEQ8QxqB4oWtx3SABmfMBXja3rp6YkTau6SCE68PWLpoyExYFmZ3KJHent7yKQePxUNd2hmmcL7bsmw",
  "key1": "Ss7kcoxAo8oK9pEFQfcnfUF8jwwQfUXYKpkbFV5p4yQPpaVcfB7RQn1r958NiqsKLoWdwh5QPNX9tNDMT25ZX7U",
  "key2": "5bmcxXkros7AJE5Zq6wQNj8hyooGHCPSFCGgEzBL2mZXUTT6RsiPXabiYuez6Lorn4gq1w8Lvo6XmnaFPRvabRak",
  "key3": "4FARN59MHZswdqUpL67hWyP8MnCHvrm3aNcXq7WdUGyNjwNbyjvMaFzKNc7Ewk8bG6gFbWBCdNSUHsGw893CR4qk",
  "key4": "47CbQBBsSdDuCHVTduEB1fGU9hV9McHmnYs3YoejpgtNrK3Lr6eEFaK5PnH3qjaEy1tQovbzPzJ5dtRVbEuU878j",
  "key5": "5HZTfvC3ajqBEbtVTZ2pHaxavWUJrQjGThS5F6CJgAHPUjDahmEsbEjKZsgnMhFjvvbdnKBG4QHKJNWvgPAFdB6Z",
  "key6": "4XbiA1mTJQGXMYBCkdBct6hMi6rVfBra3ziBGQo8BUvXCHammLVLj3KaZ9KJ2E5vLeAuie7rLc12eeoNhyeHiKyB",
  "key7": "2NdDE1wxak5k2bShjUKXNzDrWkM28Qdfz12nrD78Z7tr1eBGmKLMnJL5nzKrdwBJxves1YxprmdqFYyozcD9Ni4Q",
  "key8": "5nY5BuK8Zuj73LNXoRWmsxjKqKJX2SLaihwDbZJvmJBYGdBbfo9zQeqcCM1kXcK4nZaC5DB6vyQQuuknYqaD6nVN",
  "key9": "7SfVJrdCTyRMDs97cnr4bQAih3W5NZzsxXKosSWwPNKymbSTEKJbcQprQGeLsR9KgJvNaDkGCfiH3ba6r722WJg",
  "key10": "3KLEdpmSPg9C5km9XD1zTKNKj2WZSEmNuBWpiEdioPMNJ7YRDRe2h3wnY8GdxkCBjdoBCpjRzEhUVAzwiZAgVgsU",
  "key11": "3gqZBxywGe6E6A45LEGZKaAqzfHXeMJEGigDynVcRGGdaBBbTAs7DCQA1rQqCf4yqv2LDoWBd9nd5CW2DGT7nVDU",
  "key12": "2NiDWFPkBvFwbFV2dCtBr146FhsS7kVr8aPX4K84B8uezGoP3fx5XoLbEzf5ztGP3gKRCNMLUGZf7dqjANDz7nge",
  "key13": "5VPFLLbf881FoeRnhRJVwJ6y24KCcDgZ5Fr6FXaESG3pRGF7LXPcC51sV6U27V29JXT3B4oNSrLb7TMHAykRqbKq",
  "key14": "2uqZ4xAwna1tq6Qyfqj2FaszRtzNtZqh3iAs2ptbZ4eJ79TTQD1niowNnQGDXtLb3ZB3bZ2BrYYRuzegwqyVBzX8",
  "key15": "4ej1L4L2KMyWHUm4AwyViotymehmbAYzn2hhrQSqcAcvBskkVaXZpog7Kjjc3PxDiXA7YuGLaBT21SRQersuMkuW",
  "key16": "3tnPpjX9knkRwXKnVXPPu8uRPPr8eTAgDTKpwGvUq1cRjmHAuYTzYUi553Ha2UA6c2EpRBtqxEiCcTVNeVCRUdpA",
  "key17": "29CduzqNXSqnEU5SpzciKA9GGkkVUrPGasyGHvkXF34Yje95eUGKJvpKwCsf1DvZpDF2CygnrmBkVa31Xc6hZf5R",
  "key18": "43v7aUE9AmCbTgZ7MZMCyvBxy6B5EiWwdQWbYCttNrRWksuNZsVTxkLRKpXZsvLUez3Dr7huP3EhLzpuf8JwZPrz",
  "key19": "4nxe8BS6tEg5uwXDDJqozXsck93NxXeAynr1DWp85bfFso6KATbvpy4opBXT8JwWUMSFx6MQsq4c96xEejjUyvYC",
  "key20": "TmcDmN9y4J7UNfg8uj6F9ZZ4KQAsCnipuQ6uw9XfNmCvEriUn41FhuVnxsF3nFcMbAEKB4hKGgMxXv4wAXjveee",
  "key21": "4XSw17vw3jE7JjkGtHs1sUzzhcRetfBtM6jmH73HvL2wALnw2Vx9woSDxwbvZnZmJGz8ojBTWwPoMicmNu8x8Dee",
  "key22": "2pNLXnb27JrPyeopmQYdiCPB6vTyrLJ2zidrUpcL37Ydu9B1F1TxC2Mn3PSfwr2BkLJPDvisPwt53CuLJDzsBrXw",
  "key23": "2SoKgNBkKVY3eAeydZEMYz9Fvfxmtb3DAVac2BKMdGPEMD4wS9VKwvNW76UjJXYkv9PSn1dQEKJPX7jXvYHPUFv3",
  "key24": "264HjEctP9q2GsXT5LPgiYsRvd4coKwdE4dMakLEwDiEYxhHW6KznjtZsNEb1YBHEQzaAyuz35T22JBJjHRa432o",
  "key25": "3JskgFfhkCLx1Kx1T7Nx38tT9nr2csbSCxNGmhjsjHCgXfZZHootxfSPnMiWLXQp7HR6jJntAQRipambVRZMJSkD",
  "key26": "3swXJquTZMoGgaPty7HEdQaY7xcoGZdoj86utDxLHL8FxuyQrAHYjWJbRPonrky7nrRqNYznmWmZYDXKwHMCwcoj",
  "key27": "4wvAirig8cSe9VheiMwJmwghytpVTtBQdoazzCTYCt8ujCGJybDDQNMZntsaRvtV5SmamQ1ftNPZx4diMyjZz2Ss",
  "key28": "63H6d1Yv7wv5R4KkMJhNsRshRYeCEYfLGGqRP8MdrpfXRymdAZaMrVhtoEbN4dy4B9CTDhAEvCUieCYHJqjFRJDY",
  "key29": "45rgJkEa323rYhSyAiijwTAAjJmjFZFx3hV3DXi1AW53nLk6hHiV2DywofCmRYLbR8mezJbaD36dERZwkiy4NUnb"
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
