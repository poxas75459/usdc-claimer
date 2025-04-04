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
    "123cHswcwcsPkvYrJv6trAgnHpHLusao2oBzduHN6onkWwXebpVaudcpN9o1JCA5V7a1hzAdjMsobEe7ebfKi12Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V8znpTtJGomJq3njcoyjkr9KjZRfU4zXTpK9yXCZuBE73ZoGUMWUzjakhHgsfewGXStVDpuH1mHTit4moGoQoU8",
  "key1": "63TgiRx2iR5x8EZ75EN7CZEvJNEFYLSTov7zmifwdj9Uiiw5pHYVuShdm6McGoqBabAsmyMjDGHXC1Ctiz7p4qPG",
  "key2": "3URPhMB6GUneFXbKxHuQhPF9dwGDM8Gp2YALB4ZwPG9y1JJps6qauyMuQShq7bwdvTqaDDXhsGZvN3sRGUuwJoqw",
  "key3": "3DoRFKPXvX94avpZyr6Fzwi9ptmGHYR8XUA5srrjY35XnVADPvqFRp4cS4n1CTNa91kxs2L9YF3SrSotok6jsqCB",
  "key4": "frPnH5sXuwdG9Vv2ha24qCcBs1cU8GDPcDCiMX7Gs1hq5cJaPb3DTf1tJWcdX41mYiJ1fiR3vzi9jgrsAvftJVj",
  "key5": "4wZbXzKFiCouVmzw3b6rZR3uTZi1qaGTQZhbdiXz2XEHffLww1N3KpU5c3fMweB3t3ZGW2aJtqNcXX3y1KDjhYL1",
  "key6": "4ssEMuHJ2PY1R276gBpAaLeFSMDZ89fHFgrPcgsgN9zQjbGYte9N4J3ntme3WMTK3FQnAAX9qFCcVjsTjxGRL84Q",
  "key7": "NGJC1Z52fXaMfUhRdXFZ2D7XGx74M8hVUAZSJ4jseuw5yiBHpHHnFZ6YcM9QEv5vfkEzhizKaBg5wZ9QDGfvovo",
  "key8": "3gBB8WfnrFuMSmX6D6bZGcxjNxTiwSVKXvnz1yZto1r5vjZPxgHsCRRMsepw9wHFL4W9TGHEE9jg4aDqaVMsQ9TS",
  "key9": "47kwSEAXs5UmFJSJjQKyDTUvKDEd2jFQP5KHj5c89D4oEhQpikJ8t5MP5BKyu5cDSauGpRPdxDvERs2hAq7jCjge",
  "key10": "4BwbvemBcVFnrxV36tz5AMgveeGaTVRPgDdJUhoaaAc4ShpHTXBnsBaCHGTeba3tuo249SJHXFETUz1NTAv82atK",
  "key11": "3KZJf8b3N8wGyHvEY1qewktqDijsontAFMqirSf6RPSCuoWSUZLnuabzBoSXuqrUxtAs55Do26tLzvWVxBkYRcz2",
  "key12": "5XQFyrGK2tcwM22JCPsjW2CQiwtFYSgqDeQf9Mgn6jDT5mfqPfb8KEHmuDGGVAk4MHRmBEH2QCmUmCSbcMmFesPf",
  "key13": "3KiGVLzrL1s7T4gmmPqPc31J6LsioLg2QyVoC8s4rHujoe4fhujyvcEPpEGkB3okwHbwHM5SupYPUaaJ5Xjwwjvo",
  "key14": "3pV4eAUnF8zmmFTBSALti9VLzzTkzEsJED6qwSA1AQoegjKL1wuJYgXAfSeX5MmVfEeo3phvEpR9TVaj2w9USfy",
  "key15": "58hqJKhCaQ3FC6habhzjqRTnqxF8VvHKD7Scgagg55oA2XM3VZcDqMuryJjkKKEuimSi2vGrnZFMBtin36coURo8",
  "key16": "4pHonrEarrJ1x6qCRXjgDdKERDBtuovPYBzW1rvwNqXtCYusu3ANyMQydLLNUf5HEFpAaCt94BCcce8JsA3eoNbF",
  "key17": "2yimn9AexEtHj6tTTZoJtLx6iEvvwHTCgw5nNWSE33P7ihnjgyzFUV9UVFM2tRRhmzYjeXcy48k4hnhYyDoeHQ9H",
  "key18": "3wApy8Dy9V66v7RyBYJ3Uj3ENxjJpFVWriKfQfBBeq5yNWkLBLdGVAWzk1VZmuKCjsfAHkEmTdcNP4ju8MmexvFg",
  "key19": "5kd1a4fZ9mZFGiCa4rQX3ST1c2ESMimkxs7nwNfKQYLoLzkAs7kuG1Dx1Ba7qR4jsMA1FnPAGh3ZbFCHh1Frt6PM",
  "key20": "Qp76W6yaqSvXddxg5qrcbRM7BPDEDe2qBKFG8rCTCCk9wAG6zCXGraaQxYNDQnuoCMtXohKobUANkiCPuDTHYqg",
  "key21": "2sHE6BL1YvdKE1dekxzhyknacCaYc7aPvdMUMDsu7tcUZVCodop4SkPB719GtWrdj5PaJGhTg4K8gKL2hTcMTJdN",
  "key22": "3F25BRh7ZEpY3zFhADDEqQqQ8vDpxtX1EhcAzmKbyfCCmxNyt8wtrGbecjENUmgGiNudntj5sorrX35pqEDCwrXi",
  "key23": "4oizWSMbWvNxFMr79bGQ82dGF5Ge4Mtrue3AyHrH84qtBM8KMkFLDsXYJTMXMgthoboRELY8CeWAgaXQGvMZnaQA",
  "key24": "4wQcmz6d2K6c66ayDko3jSP4t9UArQoJhK3TUvZA1ofRunpRLCsjwMge54qQjmQ5VPury6WQujyzbbCrkK5xkHSr",
  "key25": "5jHuvAZaSPuRgXRNu2iC3tnNbDB4zYnqRcSp8gJ9Rw6yoNz1Mmc5KHszoGkPYm4gG3HznFGH7BgD2ZG7v7ZZGmz7",
  "key26": "33wJ8YYHdBN3kZfD5jK9YnuMhQ2r9VcrLLsk3UfnkRXWFziPzyrHKcX6W3k3rYZcADcWFiex9FvMR1qY3kqwsaTG",
  "key27": "2i98oHfwpEq3tU22N6PECJmUiHZoTPjE3uXXrqAwzruZPzt6YWJGZyXdW1pPa3tCbbyDtVDGibsrY9e6LUimcK6q",
  "key28": "33kFMZ8mgm6zpz8vCVzehhg7hMqm4zxka7J92Gu4Rzhyk5hbrun5fhuQgTzqkyG63yWQH2rVe1nsqcGf6Pk3KqoA",
  "key29": "cYk6ZPQBDj6TH6WAovDfZBcCm8GYfe2xjJAKS13QQU9pmWrmBnkzACu1KDyQRBRJ5YGT1wMnaMXKdvFSFBF1s9s",
  "key30": "5ZLWE4GavezmDFx9YLG4Dr1uhZFnKmbtePNuKJKQSmirPugPbGrfYu2ZVmNQM1yKTrVwrQre6YUFcuiPJr3n37yC",
  "key31": "4ukokokNe9NapNQvfgsad8LpKayRUrbkLvbpStzEgPpb24DE9z4HzU3pqhyhz9WsYcWgkFK8hpk1aYcSqZiQwSZM"
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
