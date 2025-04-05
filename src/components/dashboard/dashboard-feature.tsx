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
    "4JcQjKnnSfuVAPkWQ7vcq2yTg2RWiRJipiVQkYgjhrexJS5vkx3iR8kxST5uaQaA6SJJWDSLVnxrqoqbwXJsLWKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUArLLw3SqS27k7qacu7ZYQL9Jy2ABhKnWrTTxmDzfaq8G1dQCoRNkWsJT3qX1HysW7sXkjg5cgJRSRS8BuhDh4",
  "key1": "49EGGQyAeUPHy8x3bcUPaTZ8uhKUCDc7n1uk1Tpbnx6s2Ad6ndQs73vjZhXjUfzpyt4xy47qkbdxcpqvTmJyaxcj",
  "key2": "LLtDHPTQHDQXvsSwSpfCN7R2HtJoTQ7DTqGhHkBkzL4ojbWLCBvoFDe6qLQTmkvPp3b3HoMsF8ADyYA8es62d8X",
  "key3": "3bN23SSizXhXkE67JTD6bEXGESvHegpm6WzCJn9BaNQ7L3rEkZ2NgEguKGybrf5FK7i54H9NhvyZDgBg8xLrixk5",
  "key4": "3EtTMVEvqoQhVev5JXGCHHXxue4G2EWWwTp1tsCAEXiRNo8hZb8vksMrU3Vghsn2qCHRzKobKtSvfDwHwotAh3oi",
  "key5": "37RCKxa7BSV7up7A3f6TiUXRPqpX7s3VZ4Fka4NGnRWfCRjNrGYGBgiv3P6ARajd9mfQB9fDktEL4vDTWTWJTSV9",
  "key6": "37Dugm8K6H7TJzFpX4zr2FkDPi6XkKmjdejYWuiWqrvHRTjRCTjcft6LJemBuUitLtHAmCQ5ToCymK2oCi7SCL8R",
  "key7": "71KeuApQmePz2ougQUyi8EDC6fXoBKmjnPdXjNPiCQe9sxvMVEWTpNB1HDftAPUP94HYExPGiY5j99zz2HFeJWn",
  "key8": "2BLe4L63Ei6PtikZXGxivVu5vXeXcmBnVEpzcDKBGaQq45R2YLyd3UPpeSpBrDHGLSiUhqkiHiF2Z4gBjqF4MVt1",
  "key9": "tCdpXkza5VqumnfW8L8W36QckV2A4L47kAfk9KxbK8AKKb1g5ULiq8CczVuWCBmR7SD352uH5tWi93RLXcdjDhE",
  "key10": "5YzPfhugWvEiTT4dtQKBzkJSWKEPxFFuvykx9xjzcCxJn1sYSuLZ8RDrnxEkBrRuWFT1i8XWr1N9c8GRJtcDSg67",
  "key11": "48rhAL4K75Tj2CXmZB39M1Udq4qYMWDa67PMNA9mHWEzr3nh8VEqitM4E4xSSUE7UPCM5AQYgw7g91Lp7LaqTHo9",
  "key12": "FR9QXFcJC6DG8Dd2rVZwX6RoDR3uBuMsDLD6f9t7WF2qFxZbPb5UrYQ88oT1pLvEa6KxMj2HmzZ196a4Wze6RAp",
  "key13": "2RUZLm8d2zDHm6fqbQzUHWkVLTRdupoeLjGYDrgERHYfRPUpx47tLLvRiBaQ8kuyYVMTzG1ztK1n8EuQLJktpZyt",
  "key14": "2Kegfoce2RJAABrd9rjoow7R8Lorrtx9DNErP1Xiba3j7GTEu8p42F1bEyJb7AMPSCHEpHqYtoJ1Y3o5oaM7KqeW",
  "key15": "2E8rbYvepFYGznitQjSX7ZvEUAPSHCJbzme8DZmNvPG8oWK65dMRjxP5QBBSpVH4sdxK99erE3DgHaf36VYpi4yG",
  "key16": "PkvjPiVTdaWRwFhoNf4ZmY9C8tBb8ngBSCU6GWyh91c6RxY3AwAitzkuRkrije3S2sKdwymGLVfCdKBHLxH6TJM",
  "key17": "3k96DHL1dCScGzZzUJNH1t1Fvu4MPmGM61rg5E7VrpgPpQPMLsNA6nCSozweBmfUY6FDRvoZv66fsKyefYLVmnYr",
  "key18": "5fvggPWwDEFHg4hCwpiCGVJM2wNcUkzZbQu6LA8zyaCpkn9eM8rs3jEcWGPCijdNU3aGnxizy3rPFYRoffEQ9XXZ",
  "key19": "5htbJS3JjWBLgjeN8wd7E9tCHYcMN4nTcskid1ECbcvg9HVjGvEbPkvZUUY8inBMKwHaGvJeprhWmCDrM9Um89on",
  "key20": "VyhYm4Y4UgMFADfw9hq9aobvohs2WJHzhM2QqZHSd1nM7CT7RaRhAZCmsGWoBT2dByFfmQaD96dHfPxSxH8FaPD",
  "key21": "4RxR1NYNAgJb9eGgcmvG4GdAJejkgKQTKNvxHBv9K2vSnUFypCfqgAmuAmDLWoPy6t2T5wpPzDKuDEtm9HUBK5u9",
  "key22": "2ziikNQeNEVrWcWkYjB4z85XndrbM4YdVd7aRQ4XRUuzPNQxdCGmNxFx5BUeRntM4ssBzQZTYU37QzYdF7Armsqu",
  "key23": "5VxgTdF6aWbf9yu9Bp8Lg7Uf2eE66DVhFKFtBBBp1WHnCYJr4995mDbciHThsb2VFW1zrdRPaGzw9X31bvz7tEuM",
  "key24": "3wDVAxoENqFwop12MqBB2By1TT3XbYFX5KjeLTUPjp7D4pQ9AVf2sgcr357AB4a6zacphpiSuJomXpgtFhPg7W9K",
  "key25": "43ygey96iM8dXD2ngukv8ywLnAqxTMXd6zqrHnF5hdPM7jCBwMJo5jjcBSK6DdeYtP3xwaPzCv5EnhaGj81f1mZz",
  "key26": "47R4peLKGfMWsEu3oBsbFNbVMq12xComP4KAXjq7sJ3JPV2eNSBmNWuM48YT8m7vy2ukRtxyr8iaXz8egz52eQc9"
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
