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
    "Lr4Hfya2hUMeUv8xjNxGMWh4hjmt2ZxEuXpzdyQe9BHDEBMRDgydMkKPzi2ekpq4F3obfzriVHU9skufHUJuysR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92drB2raxAEheufwWbP2JFc9cvRyr3QjTP5sLwYNeLSx3Z7e9RwiK8Jwzb81r4r2dYUCw9JhRVRP3DzgA8v3p29",
  "key1": "3ASjd2aQxV5PEAPbCQqbQsPpMXfroymtnXWXeurJZLN15pXDWAVx8EpBtuggKpkuDRy4sRWB6SYWfhsiGQdfTwEZ",
  "key2": "5rANLN9dPJETXPSLkGnSSRHRxRCZQgwsPgwik6C4bFyUuj81hwBn9gSAogxbn1T3h5qt1cw4MpxYTxtQFpk7b3oA",
  "key3": "3ks7Mno274uheHZGNe6NJ56erHkmBGqUpa6JPB8UYXkJqoQVw29RpUKWMzrnABBSjP3yDN34FUWgtg7PtZQCs2uX",
  "key4": "2UAFSAPajUaWimBWefT2LRpRCuWWQAEndF4ypt3wWCtvsoNKmW6v6GjMLMtw2mh5Xz7RZitWRJVdtPvK3gVSKtZe",
  "key5": "4qfAehyE1BNiVULV3LrQbvWVY5Ym86HAcPMHNZgfGdvnbExMtrCofmZUjMZHqCqDtMLnrZ8LLNWBW4EmzgqDu6Zi",
  "key6": "3qiZc6eEHs3tbxLFNNJc1Kzh2dbgzA7AeJJQeSBYeogjXY76jFeuXovQJrk2yjfroUmLqqHxQdUzMnKzxF54gRgd",
  "key7": "bB8YCgeL22KSEiw3itd1vtWZpWUMyJBRH5QnshNSWnqqT6QNL4zE8Zeg1NoFJh2LeT7DcSPpb7a2zRtHBbcutzT",
  "key8": "22QtTVXUTazeYrHDKzxtnPfho2FWhF5uSjh7Dzdp7VSfo6GkqYiYGmMmj3h9WVp2cG69jdGcYm7wLHsaHTe6ppyL",
  "key9": "4JNjG9jnK2D21W6dgZmhkS8VRWidC7938f3S4FhQESidjakXSy38B7KdBsP6ipS9zx26MRMk2S6p83jm4new1Zww",
  "key10": "2QG4d5bFiwQkNyGvMdoimK9F7pyQuPKi28uuh3P9uLqDhqUrENxNSiaPCPWAgsvqVoZUGf6FYC6UsbbkPoq3qbBL",
  "key11": "5PLrdicX6s6ujxy8nHioQrxdzpL9LzVyHKc4yKA1gvxWGW6KksFMUx3iuHWD1PwXanAzTBPsziQqw4QFdGfHeERT",
  "key12": "28EjjCq3VQbfPRMKjU52PPc53MqRk1tfoCyLtVYCiA1fnZ2p8EDg1XWpUZRY2LaEQQuiQwvpdLWs3PjcdgSCUezi",
  "key13": "2maLM7qRWupyd8pGaeZnSW88GjFSNemCN4vx1HL3EKurbsX6FS1qSoXM7w5FEuWXG3YwtxxwgMvWL7zgaa8Neoa7",
  "key14": "41TtTp2AsFJW3nypGNZRm61gZc4bgsMTNrA7b6vW17U8in9ojfrHvYbAP6EZrwyFWS6XXnZ193mpjLnwCez8oLey",
  "key15": "4QxMH3qV3H7bYZzyF9nXgQon33DhpQpmEhmNqtmay43JH2hrFgCcHSzdFpmFQJ8gqMDioqLgKXXfSAycQLtf8S1P",
  "key16": "2tAXJMRixynuFjeDCyDb5KTfi9SX6zop9UGGjnK6Fq83cqR4pnPEDaEJcrbwkHuDkBU68hPRt2wGpjgL6e2TuyNz",
  "key17": "5mgdkTfeiPJAqCfYxgMtStP2xvcg9Us4FnmeeHjqPMjvFB8Nv8YwkA7qe4CEUCNApPAirNfXee1sYF6kFcavUjYw",
  "key18": "uUt4wHSunnBhCuRw6PZsqRDFob5KqV1YpP19AuFCh7UGfkDHwy628jP6cEDcFfHbcfiLtdRcwyq7opkGeMHw7pV",
  "key19": "62eudkhp3k2W45we6wDb3yqSnMJSpHMXW2uFtjgwR83Lgb9wj9M8Qw7gjdjZcBP4JTuzoW9jBcyiJPu1dDk6wjeH",
  "key20": "vc9VqAMmxtxrQS5RbT1HSA66XvCsUDwbAEDtGsJupUftae5avG5QbK9eBNK7ZFTUeSwT3uhfyPtNFLoNruTmaUH",
  "key21": "3RMnwAeR8wHcYrowque61FS6o3HxNiJk32D7QHerb2VqnDCyZYQ2165vkHbWDRfnjaeN3jq5LGMqX21pbSW4nyu9",
  "key22": "2TZfvUZzLxPLiTe88WYosPMLDAE3NC3fkEmC4i7M8UM6JtuARdMMNFLU98gkYpaBRpsVgvfA6DYRto7phAQeWpE4",
  "key23": "42gVcT1eCxHeEJ3KP4oHNdB5Mazw7QCvTkA6FLWeecGBUrxEydmpK3hG5bqfcjFLEFCkbfKvazKhxcNAtYdaUJXj",
  "key24": "xNN3enWSzdyXwYaPmpc4J96MRZ1pGm2EUtSXuezWqv998XzYqjAt36XLQ9dhmmRvXwf5nbidzKvZm77nnepHyAB",
  "key25": "4YJmTCBb9QF88Mave5U2ACMgyq87daabAaPHJCf11XxJWHiQfqppCadDa1CfMBnhRJQhES3PwTVdegXQge8rmnjw",
  "key26": "2AD4piT7cFqueEyTEyj9u4ZKP8Sq6dqAUiqUPuXg3GuLpcsheBsZ5owMRZou57e7jcmdQ5W6rfVyLXWMruA6YCCY",
  "key27": "3x17P85XM9rqq65yNeYPoXUoeHFcAMUECrzFSWrMWMaURfKDqSNpkCredpyRpBsMDkmD5BJFiSKmTEoC2QryqQCv",
  "key28": "3cJA7rFjvKhTBGSAYJY15Gs476o2bf6nfgVBna4VeLyUdNK93UpgM3mu2YpaU7VUEPDQYgQAzzHE6hsrhstk5iBj",
  "key29": "5mhn6TXwDAG6VFsBLfULN7v2PezuCALH88RYBtcr4u8YvXr9HmqMmBJnzamTL9kEeJXHfdhN8F4ebMt6KZwfPQ8i",
  "key30": "4TSuEPT4RMi6nQCsoqgEAVovwrTqRHVUtLiq5Lceq7Ckti2kkD9qktatdCw2tEaQLP3ADcU4qoJjuEGPp7xLfXE9"
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
