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
    "3WUGrkPQw33pWNFtAcrhvYJBFQbqKvQgKVmy5ea4mRoztyvJSZAqiDEZKRMeNYJLahfJS4XxLnNZq6Xzp31Si1gD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62uTh9eVjfW2cXygznhooSiBDkVnNW1bCu37dK93RuaEV1S3R46BjrqEK3xLWFib2kuYekfmfqNr6RvYpxntigAN",
  "key1": "4ZZwdv3pMZEEdipoL7QXwVngrz5o66AgJsf5mcBSzu5BPWnMDczpfoK7AC2MuvqtmKv2FoegvAcNcz9K1wMV4cE",
  "key2": "2AoeriJLhW7ey38wNBJs8obRyzGinFW82bsMeS8y65ZpgVifHacuF417SFeW8kK5enmWWiHu7WDACMep3bGfHKqT",
  "key3": "65gxc1fegrpJjt8hM2eZ9hKMkqHqaJmrEVLUpmrJuLU7D7cNAM1dz9XpEzXLDxBbUMrP184Zj2VFt5MGtzQr7rrQ",
  "key4": "2t82KdH54vyD9AycZ5CbwDsTsZydVXWGn3QBorfqbdsZXZ3aA5XaezfwMqkQ8k2tFSMSM65Ei5QyYyBwXDwmgX1t",
  "key5": "86ZnYN9nHFUeKzWrevSyyDCRzejrzVSHD6PVFn6iPXGpvCosbnDExzi1FSqcYHr5wibMXZVj3ATf88wsP6UiV7i",
  "key6": "5mjEes1ZPvNUVKfYwVGbppQMCLhzSt56oPN2aioYjtkfTRcqJGPonjARSsUYAstUJ7ACoqgioG9M3yZmb4kCjwNH",
  "key7": "1pmB27EiZRH6VTfsWicnbzGtXxNDdho6XUn7AFqqDfuk9hKSaCaqGGFTrfnEswi8sbyeGMeJSXDVwbJWX8danFp",
  "key8": "5dPhA6eYPVpGgWWweMx6PFj2b1Z4F9aD7cWqb7GiyJjkBfMoGX1ZaqXAyzYeLSSAvpAizdZwybx38AefdQvFBzy2",
  "key9": "2iPVkDrd8iruUcqDEep1AkyovWf4cSeUv6jX8TadE5HQYHikjLkG4HEU5DJhk7hpTDzJomRpxGBURsQen5fcf38K",
  "key10": "5MfHFHavo1FPtinFRwsqyrJHTRQatdjALKLxakpjJwtwaTixCy5rL9WwSxEGGkiP5qrLVYdrjv9PKjrnFycwemKA",
  "key11": "RvhgQ68rcpc1d8UeRXLAUpdZVEARdU9TwFdwuvx1hXeWADDWZ15AtzChSRosuRwuRMqTfruHtKY44RQLHNhWgCF",
  "key12": "43mR5kaEexPqCiWwj7Zibn89JzPLy1ZiUMGRrz6rZPViKwcnXSbVDszyPFUbPDPBt9HKBu9BUmrdr1VdxLabN26z",
  "key13": "2xi7rnsGiMCnNr3FZeTGarGoSap5NmKokxgTqVHEyqSssDWvsYtfK332QoK2jKaA5axbsizkrwPae8a87HkRBmWG",
  "key14": "5tHb8XwVxXfu6qY7enJBNLr36JkHSJ653gEM7R1e57aGwF4fbwNyNvJQ3CgrmLJm9LrpX1YUuGjh2h96bWfnLVM6",
  "key15": "4hWHwhtP7ZDYCVmqd8GvwuVVggpk33sj8dfpRmidVjPS1WqXdgrsqxBzhxx6rq27azmuqJ5xzuoywVCsCJWXTUVp",
  "key16": "2tRC3bHBLhhqwEN55oNuviw8b1AK37AjAV9ZAMvi9LirGcnvtj81DDmEiNs2iuE5Nn7bm9MsjxxoftvUpXY5HZma",
  "key17": "3Tbg3P6FuDnTw3gNDH1eMjRPZXoeDLvAQt9caRGpQd6Hj7U8XGaYFxWf1J7FSqLe49E27cMv6x4EanVFAtpYpdEs",
  "key18": "54H4ZSRny7mY6DXcbbbbLzYw4tsH3mgTt6n11rNzKvhh7Ya1Q17GhbyuP6Z9CVVBRxhBJpLymZB5z4mKQJJ31jqg",
  "key19": "eYaorkMV9EJ2PgyqJ7FAgBc616UyV4C43miR39vetrFhrA6FTgqo1syEhLuKPLS5q4rQ1kasZ5bWmw539jmDref",
  "key20": "2M5GYQbvnWYEGYfzJDsX8FtoUf2Z1Tgtfzg9uVLcdGhCXTKpLJ3DXA5eGCCoWTbb1YVzw9c9Yujgq9tBbqs84KCT",
  "key21": "382Sg6fhWgsRh5PazrBnbUYngJ1wY5JzVhyDRrp4UzeHMTS8XQWDADRbXXSXmMUYnH7TrqUTQ7NeRaaGNwuLgMVg",
  "key22": "3r84WdVr7B8fHecGN5NDwytZDiKMfaF3L6w17Ue1fh3MbJXQjwTUosaGdCzi67uhrHDxhdxYsvEzF3MdpNH35JB7",
  "key23": "5yj2fGrqy2x2c3dqHdNFASztU9DtwtDkJRAoiUPSQZ1VEdqwuVoJPvxmo1otAMrvZse42xFyL4qjhMLKwUwxyTLG",
  "key24": "DQwaof6VimSke1N8GQgF6QQW5NfSEjPsTxv1wb3m66EKsx1HqPq94uoK2VTKXd6f4QybCTiQfiNAHxGboiFXJ5o",
  "key25": "4LDsPYgdB4Ai8GGLRQXtJT1fr3uxqcXDbE5pPwH5tuMrkT6rwNiNMMTfKCJgmKoVZNeA54pJMvpA3ezsWP6qeXeQ",
  "key26": "2zV3CJ2Lgj5vT6n5pHtC45vGsaNeaxT43qJGZX6GmEXjNHApM8J7vLEYmCsQnGz8MohRmdP8mVtyWcGnzQBMmYr4"
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
