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
    "4cKRiZaTeUKxw4ECZXkYoAgcf4mzXhTD74UenB84cAxj8c3Fo2ienZAdPBL9kTR9DJXcMX1vDpvbodMcoRa2k6cP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KLaAK2yBu6H27VMTvv8uXR8fHD67JopiNt3tbS8taB2bi7t2CCYSGRUHv3vaaDem4mhcKAUKEaT5bvnUFh7VApH",
  "key1": "ri7JTHJsUAs3u5TASSWcaRs3b3p3VFq5LY4mEGj6W6EekvGwLMB7a94xUr7wcZmCvybaKioPM3MhUSaCiCEJik4",
  "key2": "2pNrJNbSVEbUtu8tpCFbsZevBgSyZBRxEjNuGZDChGXa6Z233E8ow8tv8uiWg4uwVnJFX4Z4AqMgkxjq2qebAxpj",
  "key3": "3iL5bEpTCMxU2Wr6V6hGw2FctmcCo9veCkK3ZxQeshic3KW8uk82vCg4dC3u1SQ89Fxh15vuQJyrXzsoywGXtTiP",
  "key4": "xWvYbfqedHC89QXBe7AN4GNckxWiW7sGhTa7FbNeWV49bjxmYcUdeWoSHsYkmjiRrMWeUUG1HjiLtas6b5M2RCT",
  "key5": "3SEZwNF5A5EFUNRZbH99E93L5M7cZHAYHQNW3rb5SSBnRQd4Zo1TjH8o8hvUJPokf4Sh4NqPdLwXgCQPf4APCnQv",
  "key6": "2BZjYJG5WqtxeQgZUF4btj2J7vQaMzD584JyNeHbHByLGXHZWvG4CE6NQUKDxjZKxMtX1GJxCu6fuRS18o7Hm5qv",
  "key7": "5RfsvLV1WtiaWZQ3XaSSPobriori3TVJEuuVRF14qX2YnGzjC746dfbDCRpUFhNYEhD4mPtrGSf46kVi36aNEdbE",
  "key8": "KEtKHAW36RTDJYp7EXebRwMNyubR8bbybMdAuveppQyEvrKQYu6hcrwiKbuVLHbDYPsPirfWxFaPGM6NVLpvddX",
  "key9": "2q4b7eBJWtVV9C3TShTu26ckj6NA4Dux8iDdVch2HcSLQ5QgDyZFcoBa7BdzeLJcV3Q1vJkGfm2i7r7cxoNYnAVP",
  "key10": "NxyhBo7Khz6QmpWPPxrP2zwQUwKYvaqEDN3QkYKvdyXA9kqDVPpAHQwi6vZaLo6cdbUva1FCE6qsv5SszeJaS6i",
  "key11": "4PUKunaoBdYPyF3UNUW1UXQhWeK3gepFRpFZWXPCmLzoc4xK87gKJecSZuKQf6q2fGUETMThDcjnd4JveB8DEJQV",
  "key12": "5jnt6ANH8xtzDu6nrHJ17WaZZpc8gidNa8K4dsN4NctHtXgErJ3pPA4jdxVXWdcvNnwDrHeyjKjhkfKXxmbC6s38",
  "key13": "5c2uzKXEbT38943L3x6GQhCq9j2ShVpG6BcZifcVZ8azZymLGKV3VGj8X3MWjD5KsFv48TZcmWqbygGXanCRAzzY",
  "key14": "hyiKwwrGRz3EAr22dQxQ24Fgc3p3utAN3nRyaPamoa5EH4LZzQwHmeLHPZucRygVHcxGvLQozQXgAXUuYcpiHGb",
  "key15": "3w5Rird9hwV3jno5SVR6eVUCNNFPZtW7pAjETMHDhh6adVKrkj9YvJLipSUC6BkjPcL4QW3uyn63oaqr6UoHY3eU",
  "key16": "3tZ4HXFeuZZutLmRguMj7k6pYdUvF9zwDk7qDDt7bLMExpZamFPD7PiWB8jqkrRaW6dhDmcm3dMmyzN2GV8pmDYH",
  "key17": "1uKFQ3jphawdrwtPictopyjxEDwnU714KeWbmRM5HtD811TVzVawwghRdzyuQLhxvwyY7kSiZS2Wr7d2vLLvd4v",
  "key18": "2nurH1jTrd4nXjyMHVLDThY9zt3GJimV78QosnzQ3mKCQVipuuY6t6axSqcagEtNAA2nkS8kiiRKiaNVsBBnwtYW",
  "key19": "ZdyfAXMcriZBjczWeyx1hvXExoBoGm8V8MqWyw7LJNaCsgnb69gh7k4MjdMva6barvGoE7PZVvP8Ydrqx2cayV7",
  "key20": "4QAqBcHfd3i8d2v73BvFQM5NXejU9ZTfgLtM6ZbrRPiSG29YTw9FE94iooADDiFngdz2EHhns7g72NBandBAHX9n",
  "key21": "37dKYD7tRdCnE697kX3dkGfxmL7rUZxmbbFbhNJUohYvV3arg9pTXgH4yZYb3e2w3kmnENztFZjQxu7gmfVTeSxg",
  "key22": "21zYfP9F6qD7fp9UuRpEMqH9QXqNMabjG7MdWo1y1U2VgKp2jozkQGz4BcqYEcn4BE7soG5D4giCXxXNsvPygghM",
  "key23": "5r8PjAzBHkvnSn1PMarbqq82oWcU8i3aQDPWTyxiLLze9Kz45t9pjzar48co3orJzM4iodaYe4rErfSNYRLz1FzF",
  "key24": "5G9SqweyhLhipAZyKmqDH81aPDAEarSf1pRtZ61N4xTxbiqdjFh8XJowyeeTBLP8Y5Sw1p5ifwZ2KBSAU7HxRh94",
  "key25": "4bNDjFNLyTefd3WHgPFDtRbBRturvpith27iayK6XAMXhAFsaAVuzURaAZi9TdPfSb95LQRZA6dcGeCTQWeftSP3",
  "key26": "5Bt2RtqiK2eXpVdY1AjmzHThtWr4UeoJWvTsGzcXT2MzKCC7fyH8TyKKktj2NiSkz85MtQEceYqpEaLRWcdxQxbM",
  "key27": "5LWPJGnb5M2rReo1F9vr1GPCzxiKSsj9b274SwpzC6CRSkog2xYSpx6EB8xs3AyuWS6DvZoin2whftTtWzz6Q7of",
  "key28": "544mzbMRmBK7XviDzjLfTgQsKGSgvpBoJiycDEuMMJ3ed2knKe3PapUR3VpxYmKG1rWR48XdHSDuFRkMALBYh7US",
  "key29": "66CjztH6pw9CgUxnZKsQADPdQyLmjwJkjeU2SfBSyf3XzPovBmUXY7b7mb8JeMbiu95NuAGZCKHUxK9nQpykkTZW",
  "key30": "3GcWGTY8aoZeZiiLJEwsnfdgaPkrjDMHxef2gjrChEvhD7pw8jqK2U5xK7B7nohXZCuEkLmqas5J1BP4BYzRfW5e",
  "key31": "2KR9rqWtuW8TixozzTJCVtKuejeZ9XYWtBHWNcsJJ4f53bXSMTiWWbX3BRHsZtZ8fS3M97AYpH4kU7fXnRyh3LVX"
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
