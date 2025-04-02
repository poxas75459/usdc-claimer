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
    "5PDKsxcCh7aXJ4P3d5kFXW8pz4ikuCQDs9WpEKzMxPgH3oUsYcPmm7gPJFwB8cdkA7XqnH6sVmpX15FQPRYpS7Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sVSnPzc3539a9y9d36ZKwLhBP1nEyH9Hg1gMnEg4ons5zbCdPdzxR4y3177f9BHpcLqGwuqfTGepmuGW9dzrbyC",
  "key1": "54SzvCNrtLqwZioFeJ5632CcWr1mUzchZv4hfMH8tB4mcxYRBmTWnANi9beQe19w1cdZF1F86fQfqKH8LgaShDPQ",
  "key2": "52peVrgPWhBq3cY6gqDRLa5uM1U1Kt4aMbTmuPcWdxmAZr17TN4APax7gCVp3GBQJBZ35mXndSGKAcZKbaJHUMrS",
  "key3": "m75sdYEqKtD5kE6bPsXx2bzGmdokzxuPduSGkCmkFyLg5zYTsrgfo3i6VM95PRjgZwnfa6WFxtaWGQDx51uauTA",
  "key4": "3u1w5mmm5Qgoe7duZ3HTGWZNcU9FkYVGiSzmA1YJF3GjxuRrPcUZAE58g53S8U85ztxro1E6sKQyeviB6jSKuCp5",
  "key5": "2nN8mH51R8gyz3rdwxzqVdh2DgJ5y2Py8o4s73gMoZtB8fcb7FRxN2MqD7Rw1zteep6mgvbzWRByy9EerRYNbBCJ",
  "key6": "4d8AbVii1CU79PLUoQoBGP22Srtu8i4HDGpPTFu2iG6FFZbPxfJRSjaY3gABHChcNZZ9Y8rDbDrRyNyykvTzbmwu",
  "key7": "5TuhCWHhLy215zHWDQ3cWdaRdF51kTn8tVJFmyK2YgiyK7QqtUwnj5p2K4t6YSBm8j6yLu8176Am9ERwW3XdP7pw",
  "key8": "2TLUYq47y1277EE9ZpTZBtVn5P1sAzyDJfvxiuauVZarfAwUS3FBn9iEFQnuxy4P9p5g9gd4p88XpfrnmQAHi6X6",
  "key9": "2DzpmGN2XEw4jdv5nrkd6XCsczWeN75THbW1vWBt7BikyyGz5YW9upRV7RgucnqWxJswq31Muu4dsksDAvv6fhne",
  "key10": "7jhykWKmykmFjDsU6tGGLZPKpmxYnsLn6eHL9K8XDNoBaUrdYY3fyYZfYV5pE73k34fH3pQwpJNDipwM4UHtZSR",
  "key11": "4gmmvgi4gwxmBbisZyxxcum5qZMgStfy35yDhE1drA7UX1TpqFhKdBCNSWzaYdtXuGhMAbs7Gvy5mzXJYukXXrWK",
  "key12": "67Q856j52HApip3PxGsKFPnT7vF387oebRhiwbQY4WtbLNRtA8XuKtwj2e3g7oacPYJKWzLvQn7Ggb5zB5Yh6oae",
  "key13": "3B2Vzp2RvJiLCn28so5ipMeAwg4cWjzC5rss4Yaeugz3rQvM4pPxmTkVBTiuAFfwBEw7PKwaC32TT2QP7q5ywzQA",
  "key14": "2FGmrmD9D5g9j39v63wpmH3mrguGTGjDzEzt2szxM7D3Lm6dfnahL1zFmb8SErj6EYxuuNJdskkyWmB3Vs43jZ1i",
  "key15": "4mKr78nxxs8Q4qzv3j42hbPdbXuMD93Rm3ziwf8jVaJJ7LCjPM7ioidQHWArw7RkCkYyMm5KMUQ9CzuvkayJkQWD",
  "key16": "2TGP92NNnG8KNSvYRastCtrvU9qVWMP5xzNL9vLP5fgfeMuaX52WdvBgjPHgasVUGoaQ1tnoJU3JB1JoGJpdvdZL",
  "key17": "5RhLEe5JZTgNjaY5C7zynGHFQtQYvDXYao8Pzp51bzHqwiRPNSXUogFyoGynMLmDbnM8MMbMP6CZR1mLRdTddeJx",
  "key18": "4P3UyTAZKCYTc6q3YycUPp7rtFB1BH9EoLbRRsaSyhvdAJL1F8e7ggbja4Laj2fUGncCNKpeEZV6mbWEWrzZp38h",
  "key19": "5KHfsEBFUcNp8m3so3ojzkB6n5TYMYpoCeQstBSPWmbgCr29CQqHpoU9y4nTUFMPRpML9d1iUvWEuYFAKVvZxJFE",
  "key20": "2KEa125Pc6D2WBzdTAQyR6q11XwvxVuqmwrCMjWF4HwXkUSJrJah3Pik8CXfCXWtYh4ZwLpGXhqH1ofQGRDxh8Fk",
  "key21": "5PGCGamLx34q64A2mccSgmQcHM8gjgGNsPzVPzPeRBXsx5spuoNthEU6M5Df1hrRsGHb58LA5T2AFi1d1KiM9fpK",
  "key22": "5SEmz5hmrEVzG9WrrkP2vUUU9oEW9WUFxtLD4ThE7jqqdRRSbGchVCepVoyJoE6LWNtC48BjkV3kgEbo76VTtikX",
  "key23": "2EJUsvSSkHQ7dRxv2tUAXJQF2cy8qhkAAzgHwUbUjxqZxxAS9xpMQ18KAeq6bnhe7JD7GZZbz5j3FkdGfsKeUdxi",
  "key24": "3tj4azXnypdLsoEKtCAx5xQdXXsiYawuHaQPDmbH1wWCKqn8x2ahrSgcr21NvMRTnv7vP74RPdhkx4jihFKHVMCZ",
  "key25": "6Jh6sE1z1MECqg7nvmyFgWodeyhWiGugacZLtTq1DCgaNFDMeoyrp9q7WDHqFiH2SJZz2wGLUhsE7uJHYJ64dgm",
  "key26": "ry65JLdDGVHP4ZV6Q8SWFQE1JHGNyuj1jTaQEZWtMqPbV8HNiuHkBypGmG99vfvmWnewJvmhwXASVXxUiUg8PwD",
  "key27": "5QbhNBF7L7bcse89V15WiACfn6jsPuHZu1V2HvkxR7XePuDroRqwUjYjyFL7EtJrCspxMXYo4GkN2tSf9RTt85q5",
  "key28": "4arqtgFStFn8FyUqtZ73PZQpwBBcxbprm9bqYrj5v7ZiajpL9zZgEMmku9S3LBuyv8QvcSabppGbMvtwqxZDaTkT",
  "key29": "4ridBSvZkgRDuRAcwzRgfAaLJQgozAUJFVY3jMukm6ZEyTDDfSsSx4xLLdq5htbHtxpbGdTjsYd9T5aQDFm9cjQf",
  "key30": "55VVZfyofV2SDsoZZjfEVYKa7K4L68MHLa72Hu3qX1bvnzQTDDAgSBG18qWbMiRhNdNxTDP7vfUmwofARdqmRA8s"
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
