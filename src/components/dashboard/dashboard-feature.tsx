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
    "2KnoRoCPDAkb8kL7aZaRMBA8ZgSw2UdCnS1WpMRGuHG97s7pQopqDApKS65KRpJrP6qjVo7SZBA54Sf7ZunTcJDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VhmsuGMx1GGaocELa9t7tGMG31U1Km86Gx8X1WxiwevePGV1omBUKqKxWrgRpYJNmWtKjhRmWDAKfxmpBvUoXjP",
  "key1": "2Su9TPF9dwDR2cAdAwk3aJdsmb3geECwRNKnc7CiU6JRre85Wn2TWjEpLDPLYGJbUZjztKteEjTAUjbbc4MCgLfJ",
  "key2": "36zsi9r5kEagGUgdDy1yScuQrrc9TMNdouvNnmBeeQcNZTiLDLQizQvDanbHxPaXx9EtV1s48Zb3vmCQUeRDNZGo",
  "key3": "22ZBiTYw5UDjdLnnofcXrAUw2LtmYDeMEStuXexE4X2mzV4WnDLiniy8MFJ8opFXSiocUfwy5YVcrg7SFW6qj9Em",
  "key4": "3GBynZZYEHCHfzZJQdqx5ys5DVCsKhEyTGs3AJhffWgiE2uj3H4ZYg7othrXLNhsHo9epQ4RrGqT1hnN9qc2GTRS",
  "key5": "3H2G4m5meiAiWub65xFjTYAzDWZD5uqgPXuA9fVx1WA4MsNEGZ5jWCsbRhZQmNjJiNomwPqSbUeSsgPov3u6TGv6",
  "key6": "2cyD98sZakWEGzdHH53Jrevz4AogPxAk6CLi1XvTKWrcTXV3yVung4WanZRU8icFNK1vNcjraAUSBr4yYogTkmh8",
  "key7": "2MHDDpUYQuUxWWePLsN4MEDpVPd4UbT2t7EFbmNwDqXGDysrvaAKBzUjgBYzHn6VAspApcXWJEJQeHmrW9Bm8EgH",
  "key8": "3hiQMD8c9wkret2rVA1KJ3idkMDiuiHepnSLegiHNiRzSdwUJ79WLiZnCVmh58wC5WSFbfV2zujfNeMnzBXAvDCE",
  "key9": "Z2KSixuE5Cxv2z9NadohKuypbmPKHbZVedpFyuj7YSxLCFoWxfZM3U3G57LpPzYNqrvKk1Dfg8HrQqSz7sAHrPh",
  "key10": "dQYRiS8yb8baRSQf5XyxxXRVudFJAiy1mFPEKttH6V6ecfxvqi6E5tgUGR3t3cES3jhw1bZWXzw5VpPumbCbj9y",
  "key11": "5w42KYsf1d99PMetXAvMGyo28ysCVJedhvRRGMd1dTV6VboGzjVQZSgXKpRhMMoVXE5UZP91tkdg9r8y2NHFfKWN",
  "key12": "4Djnkg6ZMZLCS68VpcKCXUXbwVD1L5PfyyaTEZREG9eS1uhUNphR1bK9iNACH7vHaeEPt4YzaxbSySUCMRWCt7ip",
  "key13": "4A8o9bHAG6AbcAVRUhQy4YST9gXvw3FarVhTGJbxNjSz4aqJvYd5pgZJTSGKvKc91nphKFqxP3EwtHXYdvcvEuuG",
  "key14": "vPuzs2a194FeHTvF6FCzETkh1oxmzMg7m7hutmxiHBapordjmdUQSTedzbz2R6YVCNE5BTYjDxY9PPpRw59s18U",
  "key15": "3sU1TgTM1jeQ4aCDJviscXFRec5YT77i3jgAPj4FXo73oMN8Nxh6ChReEkNRvQozCmYFLArH8DfdTB5Utk9YP5DB",
  "key16": "2UMYXsnvxDzBXGuex24oNjMpZEWqejLBsn63MrYcrTeYEBhU8TXmJiKeifpUGjcXXqLrX58BpUSuk8Wy2YVDB83E",
  "key17": "4iXwDjRBn1fYsBpiqtufZm2NRaLec176bX6qJFeBYM5zy2YXeTA9wGygTHNa9H2id6qecGr8Z7T29CCwbKfqR1yN",
  "key18": "2FAQTchtXq5duQJ3XR6w1Ly2r2Y3KVwYGPTUyCcZ26wNcoTcAbDX2XR6iZss9JCzXdwzxTZLWpFdnPbDGyz65ojL",
  "key19": "3X381qKCdypKTUjTvRWJjga7eBK5infqNWwDLSb8jNz2kLLVcrwZNBbkrExq6e3srpoD89eYvHuoR4Afb4B9b3oE",
  "key20": "4qvZz1RA1gVwjAjFhsDGwdc7vSKuKP1QBohzRp6AKcbM3t2Gea7pZduL1qQedb3uepLU8GfRoVaKqhUZxVYCM3wT",
  "key21": "5WnrNgq2HsDC66vs97iZfPaRP5ikKuuFevVqDbPo7Yfr5d6wYURz1rnUcjW1kfAgq2GqLnskNJM6TUhvVEZz8Vot",
  "key22": "4pVygCtzNYt1msJHgWKuTP6BoEEfHWi38m1k8sgceZyDFPZzpexmz3p8913XzcVigTgH4FeuCqx6SQAkxSpGYfJb",
  "key23": "4PHRHBFgGtJpBWYuMgnP81NF3hBKx8TNM6TKiR6Fy79LEFtU5qPL4D7Cu2Z6ZKJkJ6bHRujiYyzRhoWEy6YfBzwk",
  "key24": "4j3S9XsYnnjne1oismhq7zpYHc946n5EjgTA9oWQd8ovDd7dwHE52LBNDgiVWe7E5dqTvgbgsuGY4Hh4Y8QToB1F"
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
