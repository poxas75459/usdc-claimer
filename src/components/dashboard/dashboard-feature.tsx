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
    "3Xws8eKWgw6G5NjRCfDz23cJ1DRxMH9aiQ71rQSNwArBcP8dfgg2urRPaKFQGZLzrvzL1xdGx1s33c4gEZbTUD82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WCf3u1BEwmHRiPwWGBsxCgdFyEDS7UBCt7TChyiwqg7qaYqsyXLPdkhE3eqJKYGbvW9FFLaYvacxn47ZuSv46hc",
  "key1": "4hHLgSceBubUEkNfCQJxpwKxpZkJqwzqkEiFZK4AeJaEgu8FQ2PGCjzLRpFdtM5wcFXrQDx2HSgJVmpGndXnNtDj",
  "key2": "4d24X86DoLdD7Y4gspkPU4Gca27ev7QTVRsTmBjgwQNQ3jmKzH2ko5ji3w8cTspThjk4xUAqM21hjFK2nUSPzNRy",
  "key3": "56hx4aRB1ztwcQPVePe9cJWaN7E9Nvot2KSpbkoNchEXHEt4q9modQUcge8iuXasy1N7RZAJEcZsxfy4MsCY3mDZ",
  "key4": "2DAtWyzWMxb3NV7rWk1MpE5p53ZDiwdfhizgXMa4RMKQWvGPMip7TSapsAoeyV5VmdZFtA72fzXfnnWWvSg4cUvq",
  "key5": "4Qdj2Mztmv3tnSpM2peWMtyGTQAkfFfG2JuiLA9ykH9jh473JcftiLH2Qd67L2hTJAqdNF8hbEmT2PnTnACcnfw7",
  "key6": "4czQmQLHDPjxkbnNVuokiAyYrJG7CteMSQ21kN4V85LrNbPqDPb5EtNKwXbDjPXvucr5K8VWsSiDADnbshtqr6FG",
  "key7": "jaBoPQv83e6eQpYhy9ScbR7Y3Dw22h6zLbjAt9iZPTRcRXjSMr7GZ5tgFMhK9NRZq7wPdGPnMBqYejN68kykntt",
  "key8": "MtJftR1Ma5XDc44xECgKpgr5FjTPcJ9GUQev9Yn47wC6vHrxQwAVj1vb29JoDf4kubZJgGQYimkVussUF97T4VM",
  "key9": "4mYXpnmCHYvekNrzkJPwuEnjbCQNFqG1RTxtCCZckNFWr7jmrUrEh7VsoE7i636xYsYoAUQ1U1AiBTrcVCvDCryJ",
  "key10": "5kBxL6FST5AQ789ho8sL5dZP62wKzGSaTyYa9eu7LNvYjbV5di925m5PG43fY5KNutQW8G9y22ewkvH6zUTAWG6K",
  "key11": "396FDZCxaX3dyRe76XJ6Hg7bkxuJVAJ36Cynrqmu8RnXKhEdVaGzGVTsmzrwo6BK9vr5krMZLM1pkzCMgPB3rsqi",
  "key12": "P6MqiQMbNSLGvWx9WFzfDQtFDFvUe4MyUnJzCeJN9fACi6WfAbWx4xWGYu3Br9Tx2GJnePF1ifhorAYaNyVLKvQ",
  "key13": "49P4sdFbAWRFDBwsezPrJZhYkQdA5xtLyveuf2jE8Ugv6wEwwP3Xc8f3EuxJ368nWk9JGhjpQTursZLMELDYddDi",
  "key14": "qb9BRQLuMuQov1WMWhAGUipGpBNERFux9p5aQQHhh42hX2U8evR4TACf1tU8sHaXq97bGcJk8ymi3yrP7jyDifa",
  "key15": "64vJsDrxguVg9UgD1FuKM4zDevpjugUcs7xuhd8DN2o3uFXS4nrVXNb42drxbJ8k5HzgRhseNjaSWRC1khhfCCJ6",
  "key16": "3kpFhGWABnFYbZieUYj3CYkQzdPhZoU3D9EgBFCHQ4q93ScTjVehQTntDPRWKidCJVx488Ru4FxHgdp3gPbZjnGu",
  "key17": "24MmRVVRUzzmdoCEjjdDQskxwccif9ybF6VvTcyL95CbYKdB9VW7yztRwqgUWEZEaKLRgRLrrsjpvohWSYrsjjZX",
  "key18": "33iL4Eak3T5uiQLJxf2L3FrtGV9Sqmdee3CQ3y66b29J6bRqvgdxtbJ1xjyWrAY3eUBgXm35T1KWKjbCFc4tfK92",
  "key19": "3Nx91DNXrtFNYYfWtGdBPxvvW4rW7mxoxMYk3v6it3saVLk8wKqarxrrgZFjacb73eTGPVV6aepcebo9p12xMPbi",
  "key20": "4GWV2pX3z1P45Z5cYT3LcVmJhhkudmh56ULYpeADqKF6xDBkMccBjiots3pAxW8WbhyjcDEyHWAqnt5THDpKeky4",
  "key21": "5MDqu1YfjdKaYBX8RbmM2kLJQhVuWtLsu6RAXajc8QmvgQCdkKJgunFRnVcES9FNx2iuSBnVi6c6t7c7SNCTMQDQ",
  "key22": "5g4sTJQhxfiWAyBsawFaCs314eVhg83xfXqQqNKZu6gChXu9dF7HEz5QiE6QZAidr34hH5NB4Nuckf9DcuBYEXG9",
  "key23": "2LD94jph8reZgMWoPV8XrzyYsTKUo7NrVvRQfww4XwH7GZ3LLinDeYhgbgTCHcDcrP1zdViEXbvQTpu3dSkBcNnN",
  "key24": "5AKB36KQxbU5LRkw3y1CeezQCuD6c2seWq6TrgvfWXufUveXatc9BrP4s6tDtjfa5AY18VR5vJbYp3sZR2sUW9Pi",
  "key25": "5Y9Y2zJRUxpPhu613EtxScHPYivKzEeaJeFj2rv6om8m6otD4dkJCvE1dVjdwopitqjCHibB4ikCQ2xBcStxUfp4"
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
