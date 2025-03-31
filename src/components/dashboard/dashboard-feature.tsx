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
    "51Ry9qMfdqwHJtoRemgwnRg2iu7vojiD8NES6a3YAF736CPveFfJ5Ef4rwz7oaEFcSAf2LBNJ62TNsSGjWFf5EuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DWPmd2MQrWGT8sd5SiVbTPNfd3rho8qF6qjSRuYmArDgAAgs1XLkdUjd1XpzXhH7WH1KTmVxde7s26ZRpgGjXsc",
  "key1": "2WAUmLZSRDhvSGCjUsW9RYCEih7EED7zQHzhHNhbRveG8B44z1LJwu7CFK8ShmPx3AQjLm3Nw5HGEpMzuv6izYts",
  "key2": "3164jvQVSxfmRQBWpZDx78vc6pyE1eEuxjni9mTj3hq9vYjq9XdwmbiNoZ78e9t8jDiQURUXzVHt78fTwcWtcDzb",
  "key3": "2E4pDuFdvuEgvoRBpoMdD6J8Bg31RBBug14cNxVSprdXLqHLE8w9GinjdjeT6WrFrdEG6AdSd7BDBZcYR9GrPQ6p",
  "key4": "CEjVa8xqPNFoF9vZJAAqZC7NzmaB6E8XCrBmP1gL3hRsfYVDSzU3DAShrp6brWh2B2sPcgXpR29vLQPuro2DpT7",
  "key5": "54peLCDbp6FABQk2yBnJHmfBzU6Pa4su3BEPUzVey5EKFhVaTpgrtjmCsMPVc3tWxzCCot1HH4YJxmEG7SCpxdnr",
  "key6": "3mkrGoBEyrj7ptT2J1tJ7Ezy59KMLqXrLMGcpDmxGmr8c2iA3rgcwcKSCDReA4GutQt2gPDHrSy9mdpnkxmdDXUi",
  "key7": "36YCejqssMqEwAX81BvQQ9LgnctLWwNBQYFTRgb38V59AJyaCyJ8yBMifMVvhK1n6NuJ9JVsvkvCcwCzxeKEB2r3",
  "key8": "6DjLQ6En6VNZrnAC1iZSRhQiYoDkiG6am9NjWLLyQm1uEfH9gog77zKt7voJaHTGapyzswxgDUcYVZRkgUqNfND",
  "key9": "4CeWQkN6Ub1BPo9cXRHXixr4wSbKbbMbBxZTQ858seqFEuVH4LMvcfHbmqxm9dir3G5ZBBkythEjBnVYJKkva3vH",
  "key10": "2cZJsnkLjdkDzus137pd6RnpJ1uzBiWA3aMVLgmFcUWRWFB9sVTknaN7hGx9vTMS9qfdzzHRgxQwBUiUji8a6FbG",
  "key11": "Fyf21gFYSstXmFpXmBHZKTLA3o1ZBVU1hsn5YVHECWApuTgcQgw8ZPGQQ9Ae23Qc2QBfUkBY2xs69ijY9Wx6UDo",
  "key12": "39C7GZDQLi1YgdnZrsQ2d5fiapRv1bH2hhjqGnSB3YxBcgoa372sDnCHGZR7yYG62HtPMs9fyqrNFM9ji1SQ4Vj9",
  "key13": "3C5urxNF4ax8CYtH8aigY7sVoJdKd92bLQSvSJpN3FFgBqReXyjKDCgDmFaCTp8msZbyNWxkMKQa9reXBLPxgbRd",
  "key14": "4WXT3gvVThg6eAZkBkv2kaFX7GCm8eX9FZEhyPhTUTPwUcKvrp4mCweYuDVKHjbHp1hkRTtn2hmrMYNMGgzb5j6B",
  "key15": "2NreKAo8wojsa2aBXYreaqR9i6F5BQbNYuoCUuXtNFgYXtnfR8kYr6W78dtpce3BzYdA8F1oMWbdwCEqZ7SPaXD1",
  "key16": "5EEQSRb7HfdZ4PKBJTVAR7Lp66Jt983BH3mttXd8oQAHEqd3GWF9TwZsrrcyiA6P1EWcNykfhxXzxaKDdhhCfut5",
  "key17": "TeHzUcTejAeNf7rWCDJdEnWwbAtAjBmwMofjuWQmTEhyuMpJo3dMJA9VsLzTGRLgZneS4Z58dUE4d3nXHxc8ADc",
  "key18": "4ugKTdB3kNRyTVHey2Sspb42aku2ftJ7HfqgxggKkjpPx5GtwUg8mbFxD59oTw76oXiNZGjasCQPiRZR1evEfyJY",
  "key19": "34zTkKnZ89p3Yc1LYs5Bos6yNTzQegc8k4MKorgzg3ydRbXzDEZHCX4Vzq6CJGkhynu8f1RGjbjvxMLMGVkWcZ5U",
  "key20": "3Q1CmGYjRXszhHp5fdpbmZAsRjmCnNk76LTYvgvee7e6e7jVg1Y1sWqoAoi92NxKXfUqhCHutafybUZ8MCipxY4c",
  "key21": "2Ni2xGKgTLuuCMXFsmU4K2Xg4ovLz4uvQz3ieraHafXLhUidwWu5KCxUrgPhc82qVrFSCBm4YqgkdEgSBeRVM4FC",
  "key22": "43CpmivzyUJuWJRvdXKybrixCC9MdhEgWPnRM91sMPuukBKfLreNDLvUa7yfcpQLbBYfWqCxFTfk9HHTfFbuveJ2",
  "key23": "4t9sTEVQDXtWuBksmXaFtqGyHSL4xun9qt7i3NGzUTpJLSGk8tSPw98ipxaqKW9VXvcGnDE7wrrYXeK2QRnNxsoU",
  "key24": "2YdEFZXFWmCGXCBkMf72F5L43vz53eDDF3a4ebvt1UvbReeWoqfZt8VZVMX3cLzQH2wQuKnFe6sj7ztFqU7yEmEn"
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
