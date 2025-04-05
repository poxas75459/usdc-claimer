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
    "2UyBRRH2W2hLSUDooUBSgJNhk9zf5QdB1HfrwKrukMJQGectTL35aeu8LcNGFD7LsRh9QPoXebFKhdh3iyaXyGFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55c7uAhyaxt2BCDiF2nJYSEaymJcQN1VNxrAyaWSxrbLUxckrwnT8BqG1hVEye8zpipThiBvFGqLgVNdjdLmfRqD",
  "key1": "4FGFcL7scLnXKWUTTPLLpJPMeYTub4spDq6p7CsQY9CjSWZsYEqm29Tnhh56pgWdAKTekMYs51gGPM953Cpf3CHP",
  "key2": "2xEpdddrSwjDwtdT6ziioUBCKTyeyBdPex77cAdTGh3vh3KBem3SDjGkM4BSSiUzaLD9airK3Hr7DMwGs4F1kv5W",
  "key3": "48qrywc2quFXXQpVmhXUYRq5bh7DimMjTW9QGNda1iwaZd7mHki3SJ2fPihe2BBLGQ4iPLBjmqE4BcD3PuToWXVd",
  "key4": "23jrVZkxo5M81tVJRxP55XUMgm7sqM6ji1XgPeb2BoGGv9RmG4iPcWsSfhrpS6GuhK7Ah8nURg8vy325wAktcT1r",
  "key5": "5ytDAJtPsnhTX6CTvbUq65TZtpvpYEhN5WroCSwrJc7pwqS5CnXJVmTrvsem6B5Fb5zZ51RNdPghXTnH1fYHvznX",
  "key6": "4Dp9AtyN3QCp8gGyqPC2y6MAVuBAATFkGNcT2BizQWjYwnpaHKC5WEnD6ydz9K4TmUTCrXsC8J3KxHjvivZS72k9",
  "key7": "286cNuHTJNmqAZSPxrjZVr6xt7oQrxkAWkoJ9KHJMGEaQjuPNnRYjyGzPBWiTjYxSHxkNAdUmxeUXL4snAyZpMJ6",
  "key8": "4bH27rN2ZbVVSYJ2pxMtj3ra42VWyvo3YUu6vZBX6kCkVGodNfZm2DwAg1edvLhjxZqpynAAqJpPzLkAPHneJJXg",
  "key9": "2eGDYFx11nEzq47hxGWk8Wj7pFW1UbH71WXut5LsRbw1rczvhAmKVQ26cXxwGkkkXHshbtDsXziVc1yjKXDNRkMM",
  "key10": "4XNBzcjah3pmvxv6tL1qLW1ov55ymcHdcHnxsvgFudPeuyHM9dKcfUtuo4gpgWHnaS6hhHrKB7NHWkqfr62HRyaG",
  "key11": "2L3uEfLCuQuoqaXK8iLXd4o6QcpRfn4na22NbMzkvdYE73N11jy7zB4srT5D45YUSi1NeJ33tSCgVmQZRwJVAya3",
  "key12": "28juaxu5nEmyJZZnwVSJrCHtf8YKv2BAZzk9nT5q5L6UjQpou8kvCSEwViLHtCY4VBXNKZSmDwN1pveHrNHvgBRb",
  "key13": "32Fk4m55jPyCMMSYLquwEfi87UxS1aU6ppFtv19EwXtDSy9MNdwbzAdPfr8DdNq8sapafafEMvgroZSxcDgPorAh",
  "key14": "iuvKuU3F1u5uXL4tAYCtfwNg3NpW8y4vPTi1poaQ8x1NifSPKTPp5i6QskNhz5wo9bSQL9zcFuV1i9qM3bmg1h2",
  "key15": "4tXERfGEeRcsnEYFEMEBbfuFCNsfLGLpqqziZjRD3JDmcdNtNVAtvWj7EnjSGxCF2jAtjbibneZDazpB94r3FJKK",
  "key16": "5BcUNMq5PzaoGSWafJpXLSmAE5xFqYKSkdoDvLNvRMi3oqmnnShyPeeEPBcdQLTxBSbTcap1sH2U6ZVYpiriPN2X",
  "key17": "5qtMQBg5kg9DsT6xWw3BFAoNHJxDBekAhe1skfserNQZrJAenpq4fetqRWXcMZDjmu95Df6j4ruQdp8dYdjuQB4z",
  "key18": "4hTwZc2qnbApGVVWKqTnJ5gjSpmhks5L2XS8tougZeMpNgRpfrHY6pL42KcDAFxgfa6xH8jBnKfGArGifWibYZrS",
  "key19": "4cPp1BpJeu2LL24ohD1PhsgnvUvLwYUANsUUJEJVCqkY6SgXqQkR5y7Mms44JgwXcheUSuwHUb5kSNd64gYk8GTS",
  "key20": "4vaK4pq7cqdhRPNZwRbqBFhiqjjiAc5nKH9pRkx1VstHVdMftSfpECVMnWKWzG9XtSBwCNauXyfeo5DTVGjTPp25",
  "key21": "3hsXz1as4qHRrANDa9gbmLbtJnnFTHgVKqigBBSoHEog1uLMmLG7EsUAFHomqwMi5hxdE8VbjeUPqAq2vD4GXwk3",
  "key22": "4xpEFZ4KX2TXGWQXCo4to4u1cEohwAkp9aojMuYga9spf3PNoZVEnU9oYrajWWMxVV5AUoiv4bT8UzJrXNBfgeK6",
  "key23": "4rtu5BNNkcD4p5KnMrrhnsEmwgqVMTb6kXXCaqdv7DcUssinpqJQvjjgHLaMS8SU1cG75XrkTuTBo9Jre1RLXUKN",
  "key24": "67Dc6wNLnuqk1RjupyhfBHfPU8ji2FyJaUKpWoqC1khwq2a9YVXTsSxKtXpFBCZQGegDPBtF4SvauS9gLyqetBvo",
  "key25": "4cWUsDBCW1smKpctsB6p8FZ8Mt4WU2NvhcbKaWHZKtuzALQqnhbeGUCje4ePZ1xoLFiHiJTTV4x7hNZ9R4gswbGJ",
  "key26": "5evuiWvDC6p6UWKdLUZMynYhjjjQyDa54LosTae52tSKNMSTGNJgFvAmcbKDCXFazqkxMQtQktPJQcYFW1e7yb4Z"
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
