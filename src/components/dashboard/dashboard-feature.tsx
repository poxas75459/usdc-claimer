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
    "3VJMBxkF3egdrQTHJth2f3dNB9QwEP2e71fRZFQGaUuG8fppVSTQParKV5RASPih77yxx8UsWbjhptQXWPrHmfzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wwkqgNDY7h9oM4s8n2ZfuUkPHfwPRRbqad8vqHAE3NHJtjx9Dxo3ysdAsu5ZW17T5bPAV27WaYXyPHJdy1rLfy6",
  "key1": "36hCJdmDgYs5Xjdxtu3S3v8b22bdAbQWXaBqqVuND17QPMx3LFjxdKzi99kpRvJZmx1RAp8fHQfFFcfE8YrEQ9xH",
  "key2": "2a19FwNvy8YiWikHzvdEaNASnPv6m62a6mZJrDCUWjRWtzZ9wRGoxiNM3ksxZePhEyZ2vgwWRKv3M1SJajjMTVDB",
  "key3": "UaK4PVtMj8wKzHKPZ69bvADgnneFUCQYXLGhdUF9FSm6im99HgtiGyhi2zFJciASWarfru1MZ6kyQoD7wfLnLfs",
  "key4": "4SFk3fHfAi4S48Gvw7ZwmHmjB1QMjzcCRvGZB8u4izdiyHC98pVzEuSouaut9vUteufJMrdHjQfQ5qUmbav2sVKH",
  "key5": "5yZjVJZrP1gV8onYzrSMvxPiBiaWx2LXqnE7QTgv2pggmRFJrYNEJL7AFL9u5fr5LCMjY1WZo9oFoPvMrkHLmx1r",
  "key6": "3QJbxSUtZ63psc9rtCPUhpLLF9RfjPqz4py8Mjr9ZA7Mvt6HLgGfjEGne4tHjhiLgykqMsLCKPYJ8AQDkbEyEgaq",
  "key7": "24LGyXZH2YM553Km2RieRGRD3xo9PizY5NiWFwDJVfH8gZ82D8bULzwkpAPNs6sWN1iesyCQ5oL3iVNTomcTxCdi",
  "key8": "5XX7yeTTWoEvv8wUKB1s7n3USs2U86iUL5ZkasWMZbjfjERE72uw1rgG4NH7rVeSxVd4N7JUhcW3fHsqFtVDYiwZ",
  "key9": "5cbhghPhe7BK8oz7TviiC6XF4HwRdUzK5vbNwEUrErEyi6r3Ww7hsgZ9DSB3EYgvGkuqJZPx7hYf2Yk1REk8GZp1",
  "key10": "5YkhatrPbn6drP25htXGc3E2SSAZc2aURdERJj2DrSqUT6bT11CnsSNky5mP22jX4d8PY2rWVS3wckR8zmYGxG27",
  "key11": "a27vt6cZeUaD4k5ZmWmioDoBDECmNJ2DdfxFLzoK3fzUwhaTmcTXFvhSHbp8YtC74dff2UghdEphz5CfdtSZom8",
  "key12": "43hSqGtwE8mhEpRerS9WCRsrw4bzrTmQQJxLTXVFBUPmVmavN1bZWj9jGS3jqR5dr2LAp3KYPt7xVaBv1N7eXQgx",
  "key13": "57FcMNVC95ErdmmLASbnjfoJjfUBXqnt9HDYnCNnukm2RXXMtS1dM9bdnUdLoW6uY1qoDUe49d6k9F5mPjta48CE",
  "key14": "2FuS3bdsJLk1XA3MXWc49L6sa4ABqPQwgy9qZ2eQG17wf8yWC8KaKi2gbKwSGWvgMizfcX6P2PcXY4nm69vtm3Au",
  "key15": "5ST5QxKnWauoLPCsGUj52Zcgwz7TJ79XK86fZRc4vaUfuwfiZPsarDKbpijBdHjq9MT8Nih6mnDJ3caSynQcCbyY",
  "key16": "4AwJ4MY7x6nrAJZi6oZM38FmfbWY4hrNKj52trKYRRYZ8gTS9fabr7xR3du6Ri5MRp1Vp7UDmLruocZBoV7jAHrp",
  "key17": "671n7od9Bz49Abw45Kp2A3PJUfw6ysQ8y3jEt9gjLYi4DW2LTY55Lq4QnaYzb8Wxv5jDPjaGxtqUdGB56W64zvGM",
  "key18": "4U33Av7Gf3kJnxe8u8enSWPxvLocM9ZyrdLxsGYqaVPEt18QTrmcY8GVeEGLCNi5rSKSbf182pYNH4ReuNBDuNHA",
  "key19": "4MPMvReadtgz3VmBHoppHVqM8iMogeWZvk6WT6RfRGWNSjJL2dkoJgpGG3wkpqpj2a2F2BjY7bBDmCm1L8fyyHe6",
  "key20": "4DUdwWXw6VrADMJMsdApqj6tb3uy18mWj9bL17fLRm5UQuuceA27RE55yiwj6uXMmcy2mXJTDHXnMLBrWYqpg6Ro",
  "key21": "XoAyQyqjmXMsmbGj4BBYQ6PXXUDqx6yVQxs21CRPP1D9zgdncGEVDhTHe6zdtJQNErsK4WESA8aXGKgDiw2Fayh",
  "key22": "4zTmpJKbBvweSAWqidagmg1ego2eaJeA8y5NPtckyrKzeZGsmaF6EZWKMWmB6e71L3vfSBedUy5xVtN6VZTDC1y6",
  "key23": "3FVLNAwubGnxEZwqHPD17WsWcfKKi8LKWoCCokSEvQL9BJdsjTwX5EzEdepxjUD1fpP4HybhkCxzA9ZLir68SFg4",
  "key24": "5ndDrwpSLfEG7nvfpw1136moNvdziudV43Ltf4grq7DXsKqp1qb1HyaR1H9YMutXgCrG7qsgr7KnF7q6uaCA4JaX",
  "key25": "2DsLo1SaurjTekpAEHzyxw6Ne99Wg4KsQk1odz9DdaLR4NAHAb4xz83H8SdPrFhcUSeFFM8bVtaDZwyuK9dAiGg8",
  "key26": "5dgUctfqGyinYHJt8VvStcgckcuYEMx51BpNQV3XCKvHutDJsrv8zeFNxYkygVKSS2mD6UnBmrbP5iKhinqFoKts",
  "key27": "2uaomsr3yCfLU5FPddXcySuteWcgj2Esj5PoYiYkWvqvBuGSRBvbD63cdsQ4Cm1coGnhPLuRPwGAPy7Ei3LkSbzc",
  "key28": "zsE4hX75svDW8yL6a3N1z2XTeF1Yk57Ai4jxbXwYVeHz4D1mK4GBX1Ptx5o91r5rUJRE9YvioVWqVcN3qH4omsY",
  "key29": "3phGYE5foLMoyR9XbYE6bMSdmSLJqn5wvB9Pa8kqHWSUrxs78fpmXZUKkjrmF3QeQMRLjwUtAZ27VtDxFEFzqXPY"
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
