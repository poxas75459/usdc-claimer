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
    "2FvccYmPhbwMk6y4NSwhok78YLrAUoFbNRvne4aCuSxbZmo63yxckxKikBgMTbg5EfysMwAMHr8gQqXKTFzzdCWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XdU8qsLKoMYSCHtW81BjkAgNqL5prEtD5TAyhQkVUZcBKgezAkwEabCYXMsbMpiBuAHKdp1WfpTtBTEcttKpL8d",
  "key1": "2Gkc85Yyo2ytuFSuJJGLQ82j5EFXrjUYcAVLLyRAUBMuey2usZrbfX6Ty2DK515NqVxphWqck5bk2H9VeT9FcnL8",
  "key2": "2kccC2jAZnB96grCFo31o46GU6RkEb8kAuLZHqr1kicmSSjXhyUg7vJk1rR2NVRA3A9vhsF9za4KwPGxCEk9dwdD",
  "key3": "528JuBUjekoqmpvhvYfhJi6ywxvuaduxA6uo2YnZif2zgAySaMXQDtz4uodn6PCa3EbPFnhb23vTaoQo2ybUf2W1",
  "key4": "3eC9WL66ndFDWPgwMKV7nBjLyB6ckJ5Z5kBxjxbKPnfqyWyZUzRUVusuQEgs5jnRJGXixH4YTDUR63sBAW2mC9kh",
  "key5": "VuCST1raRF5cRJFG9BVcRPDAdhJVQbLL5vU6427WpbJCvaFep7ZHjmoM2EtfGhuCgg3CQvf7RAn7aTRZFqSM2WA",
  "key6": "67RK7xXyGTUVVZPz1Nx669JFMzZGchhpqUaemjhHWnLNEVgLNPeexChJCCheCLpjBu3ff5iPdk413zLHkJufsWCQ",
  "key7": "3YVMhWjCm1yo9kSqrwaEWq2g9YU3SiA6RioPbyC9M7EMjBCqju5J5CPdtLGDEaZLLLbSBepPi2i1UXwVG8jya14x",
  "key8": "4CdMKscnqwf9L9bATA6dnXUug1RXgUM8BAxUyMHnzQzdwHa8cLEsN11fXSs3S1aGPrcwWPTCTSJAXSbj2ZQwQbs9",
  "key9": "6sJC6MW135XiSUPVYTKvQHneQPkRyJ9rL8kvFEwcEdBAkXX5jHm7jBiTBNpyUUW84eSUfK4DfSn9b7RRh4cR5wQ",
  "key10": "4jypqVBPSpdtqfkZ35PprXmbCQjraJspBLRFRHmUwT2LWmuUAnksPqH9Xxp2kLMR35dY6yuBESZhjRRawEn5LxWY",
  "key11": "5cuJAb9Wmh9v86ZAm875f9te3JK83sR2YXnLBLNBQ7a8kFJd6Vm4mKx91Cy64431wpjeUT3yZro5pcEKXp2ZYCxp",
  "key12": "2Bhzz4VMQzCoK8xDnX6bGJtZ6uboqUeBmie771gn7TLwh2ToSDJrxX46PTdgFQkdaXvmM8HKpLNYfghbHEpapA8P",
  "key13": "4dLcJ7ymYe65XWuDLN9YSXL3nqDTxohsnQkyxHdn1XuRGr4LasV6m4h7krr9gLDM64Wr8WGnejYkPQrJYKDSr592",
  "key14": "5eoGDqTsj7gGvGgZiYA5SCWGSnv7b6qKFUBhgnAZuFJiBP4tUaqTCbXDTs1xbWaQv47FJh5D8HPpzdRybVDRAQer",
  "key15": "3JaB4GAGAwiDGjWKW7WNdFPULZdj4ii9wTpTX4SbJXzBYEtwZFfrTMwBs1DkLtA9BC9asAQHjhgP2xRKVdZcz2Dq",
  "key16": "4DoTdP7qYhRycvvzb86uQ8p6PeBV6xSM7gGC5hXuX4vayyF6SkwgaMwA28x9Y89MmFKcJqNEZoqhUzwbwopJ7VZ9",
  "key17": "3QfsuwZF9NJ8tgxjwytNw29aqgHiyTg76bYSmmyupMqkT43X1ypxR3Z8bCxxft8XCm5jVd7LS5ivfimUCdL7K7PG",
  "key18": "4XcLNLpBR7JJgFnNch76TvuD7ySUaLte21BZuceyv99y31Eb9hpeQZ39RVxFJqLpK4iEsjsMeYrJUPrwi2BmQPx5",
  "key19": "4DkATE7XNKkQg7vdZEc5t8sNba4pUa43YHqTp8XyzGrxNVHjwHsNJeWY9QuH5J9VAnivcy8szQUgUYKr51dk7Gx2",
  "key20": "kaxBDbVwNYUvBDkYPLsr7Vd3tGsZJpY66JJqWzTLSvrgzrHwvgwfQ9haYYw6s5hh8VNehfAEJYqxU5RwWYHGhXg",
  "key21": "yCVPWK96tuHWPEyCvj1GUzr9Tf8wYPyHJodQ6dY5hEJbVuPwtQmYtgtgtbRCHPtLG9XUePB7HKrsnUNgvijEwMD",
  "key22": "2KGYbG9EmaTzATrdHfZqhuNNhBCPHuw1PkLAnYpJkcy4idCWQ1RRQjwEs4cYrZm2bZawNrEUM49TE8NJo4QsUVvA",
  "key23": "4qr5KYWRqnF1KXsmjfRT9RuXJtkzDzVF15Vcv3wxdBfhAFqxXcMKumVUFuFWw5M1469JrMq8PKKWCyeRyXGFhPa2",
  "key24": "3uxiUPCcDGN3JmyYp4Ds7dT6cMSPaD5RqNVdEd36K7jH3xDdFGxbaw6tzME27p4iSPMztj3vb25zDnJccQUrWN2t"
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
