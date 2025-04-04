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
    "2cwDKdruNkkzH4zLKG3SK7ZBUaVi5pdKxz15UjQjAd3WVyeYMJaWpLr7Yrk9DSwHRtJHxuWygqXBLdtBmEQFua2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B2zZGWGq4eiHZKMYGebphg4s8TH8KuSNaMzJhxu4QHqV17mi3RZrySm8UQSLVsyyPsrry8etcYLMLU3dHznoiX5",
  "key1": "KoH31xw7Fb2XYcBegfGfTmVEDMPrNASrs2bUPaXWKWJ653kxPWUqUAHRkruv6FA76jP8SbXwKrBiZh3UzcwTvpn",
  "key2": "3sjVD1f28tzfr1t8YRrLDTu9yBuxd6RisuqtwvEG6vLREK47L541YV2YMkXM78eLVUKPzSc28eGbaRjcwVfA46fM",
  "key3": "54EexTSuoUfC3t4KaBgGiUVtcKhmX6d3VhNE5nEcj1vXx9FmAFbxxm52KJUGRWE6jvGJALByj4ghQnhxLbkwVH1U",
  "key4": "323arJmnSMaMdVykhTeU3GoJR2kK8EU2Xs6YJ45dkp3hzk2aV49tBVPU3NAgQQ7ErrQwCV4ZFe3zaFuV2FzXA71Y",
  "key5": "3ajApDBMvNpzmv1QPwt7y5wHDZYXGWHSitjP9v9p2tATR1cU3hZKQUfY6NQ572eXQLtcyCNqMYRfHX6hCt9VCnmM",
  "key6": "2EtxqVaEzZFB8T4R5rQqCYXghhhU1NLKDJCVrWtRutk1RYH9FzbTV2kWgLHYXn9pqKYk27PayMKVrFjpni4zVn9Z",
  "key7": "5zSKqZi2mH836JDX7fJTZLCBduruSR3RNmcc3uBXHzKFdUE74KSNNkBxfQ6yTJi2UW97TH6HdVAL4RvQV6LQUojE",
  "key8": "3nBetzRV8TbzJzn6yG8pj8B1jXq29yVFuVYdz3p2DDA5AkrTwgbDmj6KHgPxS8uTonxR1GEgPLGJEDx5p1zrpyCx",
  "key9": "SHKX1stHC5tmY1vVoj77q1DBXDycJn9srsyPwncJFE7BNAvYj9LjdDzwwN7JZ7EhToK6VNTv5kVSxxrVFmjEwBV",
  "key10": "3etFKAnEX9p32zYB7bUtwbjh6HwBYCdXdRzieWDoffk9PuRGk9QwVS4oodQCzCNNKUYpZ5CurtLQnwqRWthk63JF",
  "key11": "3yVZhnC1SuBrorUa3MuW9c4qnNXBSKQxFoRtYgWw8MUT5vfyAmSZZAtfAQ7yQph272esix63rSzDXsy8gfFUWY9U",
  "key12": "378JfzfMwZEZptJ4G29FsMxxPiLfvB4TRgcQrceQFMP4G6Rza73rhPYLjfoPHHuZ2da9hwEGAysYM7zPBEycGQa3",
  "key13": "FbB5sqTyFnGCiarTCjzkBjnP6359cxpdcnuCNF9PFFMXNoG9e6STxcSsmp1Tw5Cj37i3NPh9ZR5SoKrgqnUKcvV",
  "key14": "Az86vMgGVdNa44L1BWq8mjDHmNFEj7xsQqDw23SijM3yb6EMBdSf3zVEEdMDmhL54SK3M4cTS893HAnieX2e5Bd",
  "key15": "2xYbURMtfPbBi8u9oG4FdywB8Der7aFQT8VRQbNtE3fSV6cCCEQtuuMk6i8RAXJFR2Bz8gbytmY1Wjom3mWG2UPV",
  "key16": "62of7AQXUz9fPAYS1E7Uu2wtK33aFsyETEmvxTdEwgGAKmuDNFFiSLBewMf5ze1qSHzaJaqtJKHJyYYMQ6pmED7W",
  "key17": "67SmNmD3wKEkFNVZYUC5rAiTywSFRSNpaoAohvnM4joPavSMGdDYtz6TfQYBCfa8D3fE47CMULpYAHuMNfvr2pio",
  "key18": "4qeBFNH58zY3SExTAkifNUQWE6LfyHo9aMgb7UEj3FqeBwPny3gVgsBX3VgWrVjeBhT1o1oYN96EWEKjUp24P4bX",
  "key19": "5oyyqVRPnHL9rWPATeVmhGU9LL5Sxw2FhppSegFEfobGjhRJmNPhyWnjRox8AeLWxUooPzn2wdBKbd2pg9QHAXrC",
  "key20": "3fstJvPXMVvkz4fMWEdx6KdkCmEQfNwoiSCWdA5ut4K8EdanHdbxBftx9mG7Yo54hxAG4PSc7oUxj2VKFuFZedF2",
  "key21": "q5yFCgpJ2E1KxqdMKcgsg9QjDBd5JqJ5oG9Nd5q4dsgzKhbqZMbzQhKKQfR4i2zJtben42sD42JzrNvZ2vyAyQV",
  "key22": "zESJQM7rJmyMfEhRJw1ykCuKAoXVJBn4keFt3QJVFwANwbhCBxadQFzEcMTPDk93DKpqeDsbfd2P5NssHCgM2zA",
  "key23": "3KKShD1MZezBu4bZFFUpzwTP9huWDRsT2CQBpXFMYrWnhWQGzVpr8omzQ933kgxY33d1KUMVvJGoSRWmuDV4hDTc",
  "key24": "5HmthAnDeLk9hZNmbFoqB2GhYpr7jgjUymrXYxp6Nv6EFT1XHn1fMnJpUrzXDK3wcUmdgVp56M4xFzraqKXV7vrw",
  "key25": "RaY8Pcob8f78yriizERZKuaJEsEoikxRPhVEinkJdodMkB7vRw2QZXbyMb3swADLWfKtbrRnz7CsXY6SFMB71ku"
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
