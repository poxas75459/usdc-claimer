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
    "2sGfjmTBPUFWfHMnLhwXp9SfLPimq5hazAq9Phz725Efg2uyiUsBPEqMoFbg5vKonoqTwDoiRrZWicySeUMB2Smt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5enMJUd34JgUHDYkVZRrpiK3SuTYUkSRyYtRiaswJ5Bv16hUVQ5X847zzKmUQz3L5yovnX6vCU36EyoZa7rKjsh8",
  "key1": "3L8zTu1kDqx1MBjcK9kXYx9mhdQ1FoXGVYKZETuozh3K51W1PnKMvK7mruJtxkqfcMpLJmPhn5wnJa1Dq7cK91jP",
  "key2": "5xVDig5MYktZZAYZ44KjGX3yea7mkqEGvGfmLaDFVyGP7VvB8LK4MYxCMFJ4praeUnZEFke9R7UaWD9s5WGghvgt",
  "key3": "3sUJ36AjHPKraY6uLxQdbQexgbAnWzAzuxBJio75L72K4xzEChGyBmJFq73uyBjHVpp4Ur1tpb27tLFStTeRjxa5",
  "key4": "kbP3Y5auMKDQQ9udWwypgL6KYitQ3vWTNWqirbSmniu2sfyZ8gperpW4x26YtRzm9sdNJkXKevipL7WxK4cqWNw",
  "key5": "31kbrPcNXjHBXs4TLVrQjxCKDMq56JP1mTA5mngMhTfzBk175N8Dkbh6gG6niriYCEorwsiTgvRpfxB4H9Y9cTAt",
  "key6": "512WEShPbyFD4Uv2FBbSqksJMNF9nc3fXGbW6HAnJZi8wAuAgLxtZ7EvUn5GYqYVGZvasWZ2UkADg4t83LGWKdBz",
  "key7": "Q6r6Lm88xWEaNmL87C92TRvM45LeuTWnwrsC36euxnofpxDLxngd9TkEhCtJCRLpefteRwBcdJskuLiQL7oeD6c",
  "key8": "3huCGGE6MMbwDMSCSgRSDuLPQxc5eHMHAeMZyL52ZZ3yjDuXSdhUNVpAuUPg6feAYknFugyRh4ShzhLFZ3LS8UVE",
  "key9": "2TFBZzWS8NCguPNTe18dJpMVbFEypVzryuHFVCjswpJw6jkEUaimHNtXowrJtZF11JyaVwXFcSzNKfBuH24PMULP",
  "key10": "3P6rTW4q4b7Mjun2erfw48Wp5RFZX7FGXoZn651TL8kFtixN6qi553uskKzj3XtzHEJapjE2sRsGKVZdJmnBkhHQ",
  "key11": "5G8LTRSt1eEh7b8mDrL4RQ5jb1EnM2WGUofViBMSFpqqDRmcPCcC2d1jWyYr7kACtiHSrC2vcZVtv5BecrzZL159",
  "key12": "39NQS5RpNjvu4qhovXwdjBZUyHcMwoi6NSuUpcuca64vrngBrgmoe9V2y6tX1EJSeMvLdsTcPs1XhptVLrmxa4sq",
  "key13": "3zmtk6yNMYwzBEPkUimUXELJaVva5hPZb2rVC7qxSMX7TXCEze9b15kR5zhRWVDUHykuNerLqVczJapG2GNXVa1J",
  "key14": "2G7mBLbi16Pd6kQRhyAFKQJ7yT564f3B5HJGpdY4FJ9qNKdwxbfZXQkCrngS4jLcMsJvc8tjVVYWPSHtitgadyHY",
  "key15": "2Jb76D9G5x5xwcRaEZVnibgwgrsCRsbu8J4EAcoy3pM6LnyzAzodGHUGoVdnLzwCmo7ygXd3YfsXzT7oAaLb2th1",
  "key16": "5SHZ2t9o8vdyRkweJs6dm3jARD6n3jjBkN9rVmFm4e77NHH2GsAYTtf2xnRMGGFfXpPkGpJMR5Yc4wychNqmY8WP",
  "key17": "31GJ7teLu6Vrf5ZWCZgLyZpMowHpEbbu79Axu2eoUjxNvXSxdVuiC2NdYzgbK9o8YsMJhN3qoXFvB9wRaoFY9DbF",
  "key18": "3LucbrBzmFSbtMvmR7oQNpTZnSwxqbdu7kR8vouHWSkGz99Pj5ztmX9Gs44scfNKS73Fd8QtGYUdKgLCVP1xHqXB",
  "key19": "2p94hrUeho7vVDyhVzxUiQNFFsSR5uymmpTPGV8K22NvqpAR3wbaUkFVFqGh8FYazHtis1RBCBkAj8U3hf7yqjr4",
  "key20": "8Xp3qSWRQiqb1oCrgZazcyGnj1GxpRA66K5AQcJ6gKCgUHMy3QiJtkqcEvtVqdkou2fKKmAC5J8Gc9NAzPkQsVK",
  "key21": "5b7u5hHzNDVvaW1oZoDZrr5qZ5sz1658rWz5hqRDPc3zumanxMv53q3RFFP6xbofAB6Ux3sVbx5sgHx1T2rT99rw",
  "key22": "59kDRi8PB9hyZDmemY1ZCq9h7Pe1pJdna6fKTcgJ6BX4Zwpyuz96jmVspG9D26b529H3NyaQNsH1YYk9XBf8XV1F",
  "key23": "5CwCqx8bKd41LwSLEbbR1fG5UgowasTRC6qC3QCz48nFjr6nagMx5mEgSo493shiVhBxAnewQiwMvnQJd6roZavX",
  "key24": "4PeE7knjfnpkZVLwDt3nTnbUqDEc6ccYmsffw8Xyi2MAxGNJhNsjD9erxZzSkX3PJjKSjTQZTQT6Jo9FqwbZgCar",
  "key25": "3xyEEDUnZueznJRKH4QbPPYHTmgeNgYFh3rXresSRTaohc2ngJMbc837oQka6zoK4KoZXW6pxBNn8HMsCnz119jP",
  "key26": "3WTV8ZAGbZPB8T7DPy4xFKi6q8XX9VFyEyGohWKMB4CrhozWdekrszW4BapjNpfs5BaKSDAewikfSwixKQMguQpK",
  "key27": "2HaeuxT6P8Z5Q4DtQfjh7bu5QMa1MuxGvJFen4s6VBiZtiTmJYh37UULJv1La9B958F9Rt6t3u2RjUFTk2MY7zUL",
  "key28": "4AXSU1fQrTiJG46xdRHE4VkBmbKP9W2pA25fNkyV7ezYetZu7ZKWgNVEJykC3MoyLg4zQzSKCRfRvnqWLsd7oNdE"
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
