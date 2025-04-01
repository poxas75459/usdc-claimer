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
    "459jGd5SPszvURGdT9SDZFSsfhh27xHh2w3JfazPU6tACQoHxMs9bGbky8D8tLDQhBUR1AQSSddjdtkRQEHarWen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uxgw87pD5bjgFD81GHFaGDnZeagTogBtqwdX2Q566c7itb24mBGRi1q31yXHx1zwhzQ7AuiVqZPXCvUizenXLnz",
  "key1": "49zZbjFewH6ARPdC6szBRhvJLp6roR3Nx5J6V4FrY1cFpd4Y2WnMWjHbDMxQz6H1jvR3aaFZ19CSkV5xkUYVs9hC",
  "key2": "5W2iCsUb8qvw5Fg71wtRixXp9viwnxDrVVrRSSJbSKTizXmerPBcCmg3k66pT92K4G7TmSyqTD2uDMseShwZ6eYK",
  "key3": "2AxLBuH8ShAjvddY7uwNPnx7JUbNc4BaCtsPfdcVkro7umgKZkaQBZ6Xag2jxyWjPjpN6AV4Fazh9D58nY3xST4h",
  "key4": "3QV6wqT8L6NoUeWLuGFrNzaEb2QcK2X3kq9iBmHNDXd5yEXWGqtd8Z8AmA7MvnveQpptggKXqKbVxaKULR87VZge",
  "key5": "2guHpyrFZ3Je5wt2NuHewr2rCmKi7rTGj8hxETAMLXz7NMXFuYxRZyQoASHVmkJDFWVt2UnabkrxhRqtDX2ifMmq",
  "key6": "5xLowigoYugHDWhFDuqvVu9F6sR4PoxXAg3WLjQ277zTnbjHTLzvD2CMngHpqTZMLPifYhrAPyeNTFECtx4mrDNr",
  "key7": "4dnnsCnKCNJhjESqzT5Fj6AnevTQHvyr3JGKnk5hVFMUEv4qLcWB5DseHwuP37sh9tVzPTjmn2eued4Y6kYqYfpY",
  "key8": "2tfk7eXg8YtL88EAKZq3WLLMUbekadpwoZ1NuT3LBemnQK9FA4Q8LSVTQNhduc6nUJ3HVLixN85wQEj1a6GGJqjt",
  "key9": "E9GN9yo3SjWwic3wDGsPyeckgUagPvvyWeopUhjBfi8JcStGnJ5zkkcNriXE1wauqxkfQvKXxS2MWKSQ6gEPCe6",
  "key10": "3aFwgUWoMhcGvbPfb1ucnqTzsBLtQFdeMMH5EQgq3i5ToP8BPpnipSihabhgrm2XbqfpBNmC9fWSKvAxXeRsYUxc",
  "key11": "2k2Pffcfj1DXCsf6GseEoCcTcMgJZzRL7PzeaL1pZniPtT85S8Hhy5dUBShGGv22YWwSTbkxjqNFoZ94AKoNGdYc",
  "key12": "TsrvNrr5LdXKS6p7EtfNnDBNhUjmtVZsmHMQ4J2Ti2ro27Ng8HfcjFtb5234DGC1tESLGA4N6NvbUEMZfeVwZid",
  "key13": "J4UozdsVyxzjHp9BmwyqTFW9WHgwqtfrwTeXcdbdMQR4Gq8jp4HwS75PzVftXHFfj6rPGEMHQ5rhNDq8CymmhtK",
  "key14": "4dZq573XVg8NSJemdcGJauwn7EfMxuitNKtGeCDszjuYeXt3bXdEN1mjLuyDEyRdHqmtxckfk8GksJp21sMGWCPM",
  "key15": "5vPL4ZtKzkMbMgY9hxY6HMGU4QigNV8cVAF4FvLeJoaZYmgyxrJoRrGazUezP1SR7KTiHFDkupQH75EChNhukSUu",
  "key16": "4c5XPVT7eSX4oUZ1ZZ3tQi32Xnve1Ewi5b9M6quRMor2ZX1G5GdVDCy9MU8z49E67nTLediggf31SQQBSdQujP2j",
  "key17": "3kSFWXHt6RzUs8fmp52F97sJGVcFdhVensk1x3rJqdVAYYLWB6PXrYbqN9Xfj8oEbfxJQ92CkoxhWtQBNTrcZwV4",
  "key18": "5HtoxJYACHHAU1EE55myavCiANXix14QCuCyN84cugfoKJD8nBMFEikX3NuqZDAGVfXPaM6GWo9hRUk4xkck2eeH",
  "key19": "3owqYwYudKi4soroPmUoUwnE2fWTbCCJPzpTMAFA3hs9dwHQxnX1vVUmj7jf9xSHPEh7nxwZs39UGHzCg8P3SVu3",
  "key20": "4bLdzjV7KFmvo2D5GDTxRkrcBVTDiLu3eGPZo2fKbdbFSnJCoE2W7Q5gCcAtYdQ3AojrinWqXc14mnfF2koMYm4s",
  "key21": "5pd7sYGTo9HqLx4Ng3yzyf4wUKExmkdPY4J8rCmBbhQVwBY43fHmv8BjY3YEGQduKrZ6wca5CfsU1zNPXukwvwzF",
  "key22": "4JGM8DhXWqiJYeaU3MRq8QvGH8TMQCcKa3NWNFdXBUteAu6BRC5CHVPnjQ6aVq8TT2EaGLdumKXo896omyKnnMWf",
  "key23": "cQK55Wr7rdwPkTS15zZpPS5dJLtYzzpcGejq1sHhe57azt7ZfqvYeVmzsVqQBEZ6ZcbEMZD2P8WPe4BjmSqtBX4",
  "key24": "5eaEXJSpZAWN8iV9Pxqoj33PkMpwLBWiUAVFYwFYUtYXggQAQAhzpCfEs2Go4Qr9wB71rmGgqoqjTQJK3k1bKXVT",
  "key25": "5nkrKYPcSUHgJZd1j2ZEuqRgy9SHnkhzFes79PZqsycdyzwSBHxsUY3V1veNfF5unVMgJxMLUUTq8xCXCNSABMav"
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
