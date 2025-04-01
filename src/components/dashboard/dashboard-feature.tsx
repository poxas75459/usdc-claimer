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
    "pUuwWC6hXjJswnNFqurMXpT6ky63nTurNhD8vUzYHWyPgkWWreLDMvSgDzWjiN2RBU3LM9bA7qF5q5mqwSGnqiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59hVntCVMghRksivroaQM2QQDhS6J5wTiFjxgeigpAEKqbQfS6fpqJaRNXL9eFUeXvb9SXJKcBabTWhMC8kPfdv9",
  "key1": "2Ps9Yvuu1zpWXZUW3HbcmYcuX72BzPYmstvV9fSDF71VUJJyBcSk6FsrQaVfBrYghWxHfxG1onnoUJBwm2H66GzJ",
  "key2": "4QSPrupe57PDpiv4kuQfg4z5yKtgrRka9rNonyxdryFhWX7sR6KXcLKnXLuW73XpjtQ3zuasuVGAzNF2jpRt2D5L",
  "key3": "2bTDexSRgMhZff7HKhTnE6AragaKwyavHazA2jrnCebN7nSU5nAH4hU2pAprKxTywkoKpVsQUFjAjg87DGJMMBsu",
  "key4": "vbZphmoY8cvQ8EvzBSgNpBhtmK5V1gD2buYaE6h4QcHxrA1HhMn7nAX6YKxmVoEazZDkRp7yN2wJMSax8dGA45a",
  "key5": "2vfHkfnxDJyjF4DKbTo58WnVwk1k8SWr26osTqcjFRChcMhzR37XsAzbuDp6whZNcZ9makKGqQx5EeKwouNeeDC5",
  "key6": "4KGWdLzaqZw6jc6rzTj9oZh21paMsEi3ZLm76JgWvkZfcNzpggD3GpqUx7kc8XbL3iX6b55py7XFn3TJ8fThSV3G",
  "key7": "an9Mu1RiS2crKr8vGD4Ck4bhDSgWipLvBAxGcYuVshrVqX4BFoJ8BF7AXwyUSwxHX88rLnM516EphYufCzeMcYg",
  "key8": "4MWRQwdxEztUWf5zwZYDpaEd531qgGxf3rT15zm22C6T6W12EC4DTRnME1Q4A4XSqCYeQFThvmz7sHsLbdihVQs5",
  "key9": "4yT2KQru6HnFnQSaJCW1Za6oQcLL5Y1ehjxzruWJvHjeYtrRyqDaXFT1UQ6vhKJrb9EacEy2AX2eDnpRZkqmJgaS",
  "key10": "37kjYy3pm1F4cAaxc9kgSTVeaLUfiF83AK2KZV13gi4tyKzqW1rZpBNUNeQJ8EkokS2tuEzb78TatHhY7eyvogBn",
  "key11": "4K2UNaP5CtVwpseLWzxMgbc2aMib8MtgvSXtrJjGJZfXMGqQoVUjCJRcf5vFg94xrcQd8ohZoAsTsp9mSRLsVhs4",
  "key12": "48eQ66Q9Di2GVXgH87DoAB5R8HZpYx5v6wDUJNCJpLK6RJZWMADJtVvPtH9u9PDANPkCzWWMSd76oopBzJ4hVCQx",
  "key13": "L1Kjvnvay2mqHn5oErvmQeMJTdvDsEThDqHVNgPoYeu42bVsevr2553hpVMrbtJE9rFs2Xc6ZXdutvhfT5wfjDQ",
  "key14": "Hx37CsG1tpkNr13FNYgNRBW4qpDfPX8bXuceU81XMqnik19MWG4i56QgVde9H5R3VWHQfg8VwCYzuUCNxU1SnAA",
  "key15": "24ZsqMR9u2q1yT3j3ohthQXTfxSoiyUDryjvVqj8kSvdrV13wP1zQMWSxpxE5qqz7h9QQUvnNsq7UDWyfWpNjVWV",
  "key16": "4Ch6b3A4dMRGTfWzk7VBGHWRw89qNR3DNYFU4h9hvZfjReJEewMKsBDZfa2CoWJ9K6CAjxGmpPdkcGJE5kRr2AMc",
  "key17": "YiVRJnKwvqSowv9ktA2YANTnDodPEqNb67EumHHHCoRJWDwa7Z65FKjS2c8LveW6nvKSRWLoRJJFWjWWLwwU95S",
  "key18": "5tGV3uPUHZBurBLxRFNAFrVZiMdJfbM5diq6MxeY4WB6DKEBJwTHKeCRjbbJmpJz669x1R3fDhG67Auxr5oqKXGx",
  "key19": "4wZia6oeU1mK9Z6hZJdcM57t4donKwkdRjFU89dbnay7Yaix7Wj2RGHoLnUdxNJZStYqan192RzNJbzJyRhqqx7y",
  "key20": "SJaoVRHQZ84ReJ9493ew7F34QVAR1NsqagL1UXnJrpGsFFSL7MqpYLu1qquxt1Snb2wvK7ngNQ5eAJQovQETqn9",
  "key21": "4w8hGbaceTsDLiPDBiKfzeXDTpvFBpD9VuYqcppGrYgNDTCHm67qktrmhDyQ4dwrnhNAJwUhAuS8as6abpeg4nJS",
  "key22": "5816VTm4t3WY9auZ84DWcStJ8gkHVbimobZMvDK4qJzzDKhtvh2hxFrW9VfhU7fj6XknBfMrkbgGkpBC32qkcZrD",
  "key23": "3TFYDGF48kRbhPUDnTdMnyAjB1Dvk6RD2KbwDnSqurspAW48ATotyQCGbdChx2eEnjiuqCVS1ijwUZ7BqzozLmwo",
  "key24": "22NQ9jGbitQkSctU8p7aD47F2CtnnB8ogAvGVYiWC3PuX8Dfh68m4C3k8HFxL1ZEUxbyTWMrtGdx8CyDSVyMohfh",
  "key25": "5EYUUgfsHAR41qahtP9VESUK1n3TBFT8Q558Eo1QWLJutTxnJABDTf9jzc8HYMekQ1bWjy8QBWFRqxCyKNDsF9S4"
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
