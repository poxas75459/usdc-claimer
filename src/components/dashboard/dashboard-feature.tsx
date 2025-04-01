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
    "UBhw3Ky4xc5hN8N52weAHVj3pQAdBqSRb3yXDusLkcqmTJzxnNEeCiU8CmZFDXCiYGLaMScLAudEBHg2q6vtPVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8jbjEKTnpbqLw4abr7UwtRhBj3mtuymiD5SEf6kDZqqV2z1YJvMuwnF1zKm6qSKG3XPndQ3mhHV222NwrTVvha",
  "key1": "5zwm61cwwWKFKc2fPu99VN5Ka2Mtzf75Yv5BFGQPqpVDcgdngmF2fTadAbD7JFHVYjm663AFjXrihDYTtkYxGdyf",
  "key2": "3yNZBPLqsu1ChiLCkvQU3KzySNmC4BNhUS2whoMt494eHHGRd2Dq55kq1QUJNgnuJSoost6vzZYvhkJLNQSxvrsK",
  "key3": "2rHyrABEt1AVXzxE9iwdwW8Ngtt29n2snb1HbFXkZV5La6uTB4dAMVcjXKhdsby8ZA5sQ9huvS7kkpNvsrCNRVoc",
  "key4": "4ya3xaR2JmLh5Lwyvqc3QmKdkBQCSvKsH2FkpTahRsopAHR6F9sTH5caJbREZwoSjgwogCSdQn1fACm2Tv1jJ1Aj",
  "key5": "Ai6RKJAKPhjr8g7d9LigCru4bucgNUGg8pJZT7hTeP3VeCFYp7YFabgCMkjtWGRDakN2mHESRV6KYKjnNHa2hnx",
  "key6": "4tYQydgoMmnX2W8TqRd3XMkRShiBgkDTuyEQxU4heSdi2TdeUKn6LqHG71aF32weumUPq7PpLTtBvUnq6pcXbvt9",
  "key7": "4mbiWmW9kUEtmVK133CNWqLBEzjFq7AUrrhmzUYQf1ENRGZ3cZRVn57R7PFvnAuFCoABbdzeL11emLiaRkcSu1tZ",
  "key8": "xwkJXPzQBCJhRGFpfvkZ61AcB95xXaSmjMfkZ9F3xrtmfAQNTVY4rdww7dEsPQx39fbm1i1ZNXiQRKMDDbU5ios",
  "key9": "oKSH6eZwygnRApFKkH9JJjsny9Act4jjcCBdaZeUuTeSyLxMrpgJMQmyfkiPwaLKikspaFcXk3ExrhqiA7ExX1F",
  "key10": "n3WkAVMbnTQF8E5u1SdzML46c1d2JgHo4D6Km4xAowzbhzcrzXdSvKeoqFt74Cb2vyXA73hWx6uZ9JezveXrJR8",
  "key11": "psWiXUU82sxBxd9JR8tsAnzEVMdUqV7hcccwsDftLaaA7JdkUvyuYUozvV9rfPg4TS21VzjZrYo7LLraJ85pK3c",
  "key12": "3qWNzfKAnQw9sSNKgpGgWqkkRRqhPC4sgkw9rdETjiyubdtbDLKE49WegrCV8ATAPoq8DWjadqnWArAJfYgXWhxf",
  "key13": "4Y35MN3HJuAtBamjjo5kCvsfaac9EFxMRLVAeYHKybM6cbdoi3mhJLxWxbDL5HaSu757qoP1eoVMPVrUgx56c7i",
  "key14": "5Qfb1v8fy4dSvAR2Cy9LHsMDYzWaWEzrAUrvUdkdXhJ6FuBucNqVfeCuN7EZ4rBksF5vfyAEq9dxHJWH21C7QPSY",
  "key15": "5NVLYQDYrBQXADCvnoLCggK6Bc1LKvbSGjezn9Q45cWMjdNwVj8Es7R2LmsJUqNXcKXtgf5VkQVHTQiL4chFyWga",
  "key16": "2XNiKnPZe4iuoNtp3ytngAApKM4P96AaZcmqZN6jgyBax6djagfzswvhC3T4V9hnMQUXPV7fB2HuJiNyA75ZtQcF",
  "key17": "2T8PJfgCELMbnvDz2NKvbKkFeFaRyvvvyWnnbyQTgWgBbxaBByWwanXYXx7Lc8mMFvFR4LT9VinDHyMs2CtEcWGb",
  "key18": "22TP2WW9SMY8L6UNX5t1WmmTJ6qXMoj8SrjwuVEetqBKt4fxHr3KGBkFhW6wQJ7v44uc775wiWqnYWmHkAu87ugR",
  "key19": "4jNkussetP4KUWjJgvqRNyAtjCxRHg4mWm8VtiqLusAqknx9uEcNDtRfsPEXK1qfzqziarTY7HZjGEVFYAtfQzux",
  "key20": "3ByyXy2dQdpXmuAVA4w1sM8EpSzLdsT1LVP46SPmPway7ToE67TtUMsy2KwYToHxkfRvPiZL3pLkNkSfSa3xDN6i",
  "key21": "3eXLt8rD6C2kFZarYN5oRrWooub3kXTYpv7AwuFgwYRb3F4GZfo81ZDdUEssz28xpTJhvgfGw5ejHgUP6n8ZX4WS",
  "key22": "4LZXAmf4x8MabA2dubqW9a3AyyzXA1U3nHgvw99fan5ZJAJ3AEQbXdFCs9KjC5aHGtucSVBtCfv6294zLZznFWLg",
  "key23": "5Uj8YuEt6frXfsu5AbNxF3BRMDe4CiTXkYybiUndwXGC1WuycBF6xWrtQ3hqongXpDPrDRWvFpLahgvbYn8wEdEU",
  "key24": "3SHcKcSGcartDXfb14xbMcnxiEP36W1xFXnDNy7yzrUd3s6fxD3snophPXcgnYrAdLAzhrwLUuuHUMbRM76JRFvg",
  "key25": "5KusZnghkD9JG7GGnZhxXc7ZXLq2gqivJhzC9wHZ6zpRmex8br2tCsecMKaMkjxaT98hm23Q8ejNsMeQWHRq3XYT",
  "key26": "5LPKnMHCv47hjo6aSEUQihYfY6S3jRx9ixpBGi966vLGaZjtzLKVuUmLDJoBL7zxKLBqR4CwUnzTerVB48sXudCy",
  "key27": "2ZJt7hmkGfjhD9aFe8J6NabyqgUyjFGvErfo5rG2dMm6vtbJsmRexGCqenrY2uTyCSCU5Ree8pAwKfMNunEZLYj2",
  "key28": "47sz7YmJVHgwGcjs5ziSZE7FVbgepQmk3FS8c1ifV9u86oFr95dwE15vmsECzkAV9T4C3kAFPTFu5V8WHWohXyBJ",
  "key29": "4ijCHuAaMcJkjS1QHv8nGadLFUYSN5u73uofmtXBwPiqTRML1ZxjmJ7LK9KCH68ip3Razk5zikpXryccTybgg57",
  "key30": "33oRzpTWKijPS6Rg8xiYPzzg11gSVn3j4JLJz5YCtvdpc1KZ8igsjBo6DFyT2s9Bz1z1YcSeA5ApXF9dY1TyZFUE",
  "key31": "s4nJGdc5rNXF6xmHUVuXsyV1jDKApGKPg3mgy9rC4LVy7HTtg1EgJCszBLfpEmcZL4gjRBeRxCymbv5xbZaWhDj",
  "key32": "63ts7DoJrNCxkJ37eTd9EYkdpa4yJGdcn8QNy4aYanAgQ1w5j7fB5L4cD4FTtRq4BRYq6RvnrRiypzQCTMPpxyyo"
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
