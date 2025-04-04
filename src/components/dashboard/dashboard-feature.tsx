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
    "3L5KtJL8RBModMBLqGv5KR69UZiu3BpxSXP6qfUBTz4BENBin4fuPacAGtBPxEWrEjiq8tATVSrLSZxJpiZ5Sgd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GnukgVsRhSKuCkEy7LckKDTBJjVk6sWqquB3MUm81fL49Pm4jtgbR7Xo2oFxDESPjKZA9BUVP1GANKeZ8UJLpEN",
  "key1": "DhmXfai6YvfUfkFB1fwEUeocmYX9TstLZWQSVj54hwKUmhetRXN5eHmN8FMWNjM9zjetPupXRhQ7ULzStUxUYaB",
  "key2": "oeu5XdWGm6xZasi8cgDmFaNz2aQPVHND8YSnoGRdW6TitGnx7Xxkog5xbfha1d5xymMd4AcdKh7qDoQAhBUAFNj",
  "key3": "rpMurHUNwXexdNQTkBrysRVmJ7xDaKYAxmUKvAWXXE4Awwh1pLQfUKtFsiJEqBoNNnWfEA7bYp32RpAmREVWAJ3",
  "key4": "34rjn6PRmmqxcF35yuTDts183yzP5nSwnTSQcL53jiQ2GZcoWSR2sWivJRbmdPsXzSgoCbrMPwX3iRz9RuqmfbvV",
  "key5": "5mcvhJaRmX43ggiuJSCyFqi38oRF6uG8L2pBEKSox4waTX2xXa9BAMjDJTow7XYEykVhSxnYwkuwV2nAKuCjg4n9",
  "key6": "2WLuxCaHAbrBorTMRTjqzNMekrRfXAnsaAsW8uh4S3vjY4hVpubgbcf43atyQfDDUg7es2ik31txs2VFW4z9y7n5",
  "key7": "23dKBfC5EMRhbRHF9uxhTNBbjkQc4oKuKTjU2tbdXbTcbHJKr89f2dkbM4goas83sR5Ro18ao56nCbA8iuCUik8b",
  "key8": "4spAQcqCg2pXAVQUgHaDN4osjgsYWLHcsbXMvSpxe2kZuRmpMbpcjd5n3gCTY6Hjh65syQdkRHi43SpQKwZJoEsb",
  "key9": "5mFe9K5bXzLdNkVTfGmJEi1MyfeGxHKq2NT3ftYfCYkveLHw7xu2yWRd37skFqNr4bBbbdHbP4tZEKjvDyvwNAZL",
  "key10": "2ZpHs9pKtX9H5iZrUfDjPptTPwsFF88Mb7qRwEiUM8qm5hTt8wZYWd16cT17NR4uLw5q17kHVyJCqKBkqB25LX3D",
  "key11": "2wVvcrscAia8Jfa28LVuitqvYQFLqzdu8ouLT267NhdDsNqBKteZ9k3YUJ9tNw8oi5uFQpgBWTfYYPTd6XdM3F8c",
  "key12": "3VqAV6wPq4T4tHthQupKe8bHFLCoQrNst74fCsCcDrif5XN3Yf1Co4WFrg7yga8kueNG95yKHVYd1AmTMpvFomeM",
  "key13": "4cduTLuBaEZF2Gb97Dm7wEH6kCguhsHCRRnqmvozJwSzjM49dyk2jAGucDbw8tEkD6Kf9AYRbbqMLGXuJ2HixZdK",
  "key14": "5ijbDd45PxW5nQa9AjxTVE3t97cSrMnaQvZfkfUXsWQcKsZk6C5VJLbfktWQBJm3LFjbnLcVUz4XpTps7Q1gnbUJ",
  "key15": "n9MrDww2qzKm2AM8Nm2EPgT2Q8SUpRfibCibK7BqmCWJaZ5BSWFqwAUxDwysgo9PJKZjBFjKKhdv6Sz3S45K51s",
  "key16": "4ymAQEtRiRD9J7U2cPR3LYfQYpC3bnaeHeVJ7cWs5vpyVwurn9ymUnidDFLNnfUTsM4nqKwpe6Vq3PnoDD5Cj7y",
  "key17": "5jAekM9BJGxUJvo6ksddVEXBsvxiEcvLgtCzdnjtC1juPfNPcCCgeu6v4y3yn1F6ReZridgzy8NveMRfnMy9isNA",
  "key18": "3qpzLmzR3dSpSnLJyFfcjFgaYgUFxFYqbk67SMXZnnRR16QcCKGVnNaBSedqDhpLVmp1QNomcZJWmGpKSw4uJTxH",
  "key19": "4EoYQ51pi72uLwgfVXbpVMGtTJokMhT4sWTWt7WRd3FA5j4gjREXiCaxakWu3oh5bvnAmt9VBbzcCpts9SLGJyhv",
  "key20": "3DRya36az8g14LnbpHrjPEnSaLPVZsRqWxBXGwWc8UAEKgpuFpj7DqyPdtJftuuDQaMauo4t22wNCKzoyMsYR58X",
  "key21": "3k1rA4prLoLQmbzSFKEDFRVdumyXbcHdxMDoKrztKhb86LZPiisCZpwXfxtVEB5AXdJJJH2Xvu7NDeFK4ufawsQF",
  "key22": "3tjmbTYeykWiP2qLLxxK7zUknmEY2LdWB1hoPptzn3wPg6ju3N8WD15XErFN48zGJFwZGN2H7Q8QVi3orVC2HhJa",
  "key23": "213RmnmV2kvaGVd9yq9NsDWCrKAhaRzoTRHiRbHzvedHf83bCvvLNwDV9iNEo7f19gQcnCKjPjimvzdkFeqk4Lpp",
  "key24": "2VQemHVGRGBQPBb5DX9HvJaMN97S7JWREEWsmrixVuVgZ8ewdo3MrqqiY9TaqNTaXQd2oP9GKx58qxpMaQfCgn2R",
  "key25": "5Ph7uSBuYS1Q6zG9HfGYmLjVERYQxAdaAnMobAob5vkzpGqySkX1my8cB9k4ZtVXDV3opLLsuvhgJMh5MKFqspfS",
  "key26": "5K7D6M2q4JqdCZKv1z2nrEeqYbxUqLXmpKya9R5m8s8bMpUhLCzuXUqSm5L2ZZhV8E7318vAeToeckJb7KgJTxrN",
  "key27": "4eN5LzQRekwUsgCQnmLmaSQk6JKLP8wu8ec4SMsJJnPEW2gQLxZCkcdKGfs6sj7LzK45A4RQwW63vAYV8k6GXjkp",
  "key28": "47W3cGfbLgsNKyPbywgzEwpbnhCZyrSd1KzmndLmgyf37rJkjw7Szcq6poqZDusrkpfj8EdAZRnsmT54jXVcaHx1",
  "key29": "4iGBndhSRG452b24yt914wn4zdRxj6W8cZkYPP7eV7YJha45mqpW9ZTKDXz9FFhWwi3WPbMj9Avf9eNXkqTbxMqW"
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
