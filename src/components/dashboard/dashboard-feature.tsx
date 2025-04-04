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
    "5hDM2PRoNF7XjgD8g3RccD4vvQztSNAHoFEaoExCt9ZzVboiq8jVUYH3CcCBUQoWR7ZERFzSFErvxKrWaWiRVYWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67NtyyYYCvNmG4ma3w47tDmPDsBmKTNdf2V9V8Vo7QsquJ1cwgpTGF9XMkYKW34sKQH9dTpe1mTw6yvqCSkUMMy9",
  "key1": "2nqD67vXQcjGAnNzGX7p7m242945T3DkMadYr12hBJkM1GoCeWaxEswXs4fKeaZvadsHxRXC2TvumJWhvMX44yrk",
  "key2": "Xk3Kjsy6iLemBMhPYPdaSrgbYoRq9tLqZ8Bgd3Lmhd8oTRKWDgW1q2CXK1TK2eNU5e7BpPr5cqzjexwcZNaCTGA",
  "key3": "2ENB9zPrtbeBNaAGgYaCtafXRvoFTQ7ztFRhPqfCTwHyTJZ1oQLikQbd36jQ4ggeGH7ofL6o6MjQP4QrTghAvr1X",
  "key4": "4KYbUDkW1GYgrCLHffi7uTwiZxaLMsovMP9D9VXMxywmSwFJjof8jG7QTebzQGH3BxN8achjuuoukyYVRpNxBGos",
  "key5": "527y16N7vrEoMyWfgwxxsHnJ1tnCtyfQLHxNuvsNqoPgsMfvVz1B1hxEM4f9KwC6ovdBwPT2y2Y6Ui5u3CrveN6S",
  "key6": "sZK97s2unzgpPvovEDDvApFEKNpRK2GLRgaCqM6sjAPYpEGkWdNhnPnm59CDzGsvMx8Fmv9PVmWSxYEoqfTNyqt",
  "key7": "3gSPmy6XUTTNLVVZdtx67u48VXtNUMahRyMNwXv8mDHY5ZHRJUHJJjLE4VKbRWAFuM9Tn363YbvkYMf4ot5WGf6M",
  "key8": "5CEHE5YiYiNoyELAsL1FS6UGzTJVzymxERXRobYucTaeLzb4HXLVmkVA4RPC2qwFanMUQziHLRreHDTEhAxHuVHK",
  "key9": "3BqYWkGD4E1cZZs34kgF4gazZK471LbYk2Gi6YPR8dTfyY6s7658nJtyNGoHHjJHXvNzkRTDiHKVLj47MC4Rhk34",
  "key10": "3AiPhXDZuXezSSYHdQuWmwoXyCus8RRxcdiyxrv6NjiDxHhoedyQ7ZqizeMLm45Zm8i5GZ1rXm9V1DhqTjqHXgv2",
  "key11": "3peVT2XGfJmyjTna2ES2xmvHyKMjdw8wuGQ9wKNZuWHKKnJtoD1Qxu1Ud4y5zsquRSbNNdJtcnCkwm1zMpbtwjF4",
  "key12": "35n4v3PVbFENoV35g7H1HR9xXAdtFhJ7zD8LJJ8XGaPnNpWLLFbTRFz46ZPtbDQoUWFG2pkmWhJWhUXit6puXCZp",
  "key13": "3DKkVQam9A2Yi4u6LhaKY5mWhFbMtGGPvz1tToBPqYmJbLrE48bM8SUVTvmT7T5xioQdqVfUNfuM5oKesqDb5jdS",
  "key14": "5ixGyCR6AWfYSPePjz2GrJKVVdqErmYLGvNuJyySZ8KBh4PQC9MSujFjJh4nRa4UkpWfw5m3CKi33CZMpMEqrNTc",
  "key15": "2wLER94B8JchCWusUWrvQMM2co25TchVNU9L5Bt9jMKHK8i7nWFfJwnYGWRHmip6JStfhc12WsAZXuyZaNv86hbE",
  "key16": "38oRvtagANMPAi6WvhbY4FJPvqmr3Zbd8xVioBofXWPztAu12RDJ4CTfDJtF9cPACJwoDtg37qdhCN9iDiEGS4KZ",
  "key17": "ZJvGfcuR8w3vS5GwCP7zYWBcEitPrVUB6ZniuTLgNqdVUgc92LzPUV1f8vGu5XKKZkmXZTbJ9GfJwiBU3GHUDGc",
  "key18": "5snzTRvNbTtLKGNitAC4t4UqtJj5KbbJ9fQrh1fCfzZnY1WdKirY2vSaieDGBRMUH2h1r9ei8BehEiKYyMpJb7o4",
  "key19": "5aZMtyN2pUpf967KcD2hdY2S3hGenxyxBnSWdCGkMt3TefVTvURFraqfKDpQdYFATSyWSymKnErN6nKFDhK6Mva7",
  "key20": "2AHZnNq4c3dUYoDLXQ2LhV2x4K5YEmTmcgyKtJRSLjT2ZSvyagxuCGvagve6n24uj1PGvZKwXLZTJN3x6Fh1Lbj7",
  "key21": "2WFZRYotczHsTGNSdm7F7HtR2JMdd4zz5TsQqEk9vN3ibpbrzH6wk4ausDnibRQBxzrakFgHQBPUD9AeznTpyZDG",
  "key22": "4uy2rh1UzELXB9jnSmo2KnAjakKAbFUKWhnoUxpY6wcFb1HH42rZPMMqZ8wX6gRFmEwiVWvJZkpnBcyXGkBPDj3c",
  "key23": "7Y1hjuktUfaeR6Q16mN2U5TTr3rNPcqeCqgv6QzHY2qGiQSeemCGLrNWq9f1rsK3RL6tQTRtcGZ9pq6M8auBL62",
  "key24": "2G9pegJWu4StsaL6YJQGf81C89LXkTEnuzRYjdZbvgjqArYUL8yJsYpAaMMtEU1vmGEgDFVaYqvL4G9C1ifNdB97",
  "key25": "vRiWfGyvN45EGb8W2XPMcnimn1zsPB1C9L121VwrqXoCUzZvgZsZukmyzFLYPjgVc9jrEbnjqJQW4nnaPz95vAZ",
  "key26": "6325YJbox6LUPp31nuh9v5BpKD2MB1VDAY81d7AAd4yrrmjEpnN6gqa2cCQYdt5R919GhHQw4UAxiq4ACn3zz53K",
  "key27": "d22HehG3cb1rMhooxHaoWrpGyuAf4jZZHUxhteKVGSUhGdzKd2YvnyjUMvGAPrGJ5rw5S2wFCSbJJx9uzwKN6Gi",
  "key28": "2YUGB63WFekLYJCPdJSdPvfgUaRwzTWPse3N6kpMXYgA56fVzDQbeQGaDhyay7GazT1yCLomyKsjorHwvR9Lq2GM",
  "key29": "Uv5bKnsyvroL92ZdiZUX4UixwZ89qnvLoxwEupHvYPyTYD1mTfEUXHic8JE2VLCiAx6aP6LCZzKZC7kHReHLpki"
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
