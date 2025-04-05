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
    "4EoXpzJH5cKbVt6fNcsmCkHk5xL7tFjBusoRxneML5nEE1stKGf79gw4fQcpVX3oUQHHvtvPtGyshEGmg56NvKke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vhFnxNM2omQhWEc9SG4a8eoRFmSbe6t5SyQhA2PGj5c2qg3U9mb8nFoGQ7nL8QypLBFXTtd9zo5inz5L8aKwJH2",
  "key1": "3nc4egWCEM6B93pokoMQJtAZ9EL7PVLWy5u8dxA3QtWko6kwtJjG4UwZhhxUBkNZh1AJrE1FfGaMUXhsZjMitmi9",
  "key2": "5rcxmcD8KRCUwLJ7iLrKSkiQLX1HZf8ALFQaTA7QVMv6bcspp3PHbitp9WbPuJjqt3SdJg8tky7xpxLf47SRSjRC",
  "key3": "2KXaBL3Lx9A9uZGiCfoEayfnVav3vKic4fyUucyRBwcafDNyJiFnA3DvA59LWPBwbkc8kBUX9aBDvo7Cu7QNXMbN",
  "key4": "3qAhbMudrm95dQZwWuuxYvojMzpBscBEi1e7WdTNCYsLFuDw4SizBnnVBgbGwwCs71wGoP3brdNJ2iPMbNjmsuQc",
  "key5": "2yX57xE1hpsJPNr2WbvWDFnJqV2ZhnZrfQVUYZUgwavDxqT7RZUtQHrX2iqiuFH7oExF65Fu4tysH2Z4NQYAVbLG",
  "key6": "g8msgH5YJgJQH9Z8QHpuq4sNhQAqkPYqBju6rs2MTzYQ6qjoyJkG1TEo2kmXcH6gUXgVX5hPPEmNXkdeqVyYNPP",
  "key7": "3zg1Z3WnPZQcDBVkhX4NAqNA1acVSFFTWos4gijJmQqbRuZiNH21riBDeaTfyQMCPL9JDr1YH5vNwgL5qHxsWNGo",
  "key8": "3Nz8skcaTCCwgpkAgLAukxVVGD5tXQ8JEcqEKNxSNE8MWFRU7usnGtRBAgHX61p48ZBCmDytF6xWiXgAV9FnyDni",
  "key9": "f1cdNxX3DRqkqUV9MDa3NeNmPEgJK4Rg7odRCsJpX6zcmD4qJKQHe3gw4FVFttxWowMmMGs6BaJX8iqVshueFgV",
  "key10": "2y4b8do1xsktZTfcaEVYFAQXokRBzG4wrWSuJpvvTKbR79myQE4HDY9SV5QbfL2RnbHS77G3sEXBL8hYayV74tKf",
  "key11": "4Q3za91NNA9stre5iseqRPHmorD8bhVmt8KGSJhRSRYj124QaWpTj6q34c7M6G6j8MQ9jZ755JXaPjX58McLg5TB",
  "key12": "4bDCxQ8oyd8j7LjE9nSB9iwTS5E8NSKbP4Fo9EBSwiAMZdK2u9oCakuQpXq2qh8ZL49eESV1R8aWGJ1njxxQYdP5",
  "key13": "4gmipZ7DzaXJTnbM6s22yKrmTMdjEvcYo2bkGb9L6cDGCjfrMDxEvmvLnor3H6cNvvPDk4YUDhiY89w1H6pfTnEi",
  "key14": "4zgbrdNtXzyHHBeRE1RzeDdXrynTqCDfdTqzw1XD5HC7Gd7BTNd2tnLtdMivdERuRXjG2iFtX9zD1F2Eb3A4kePg",
  "key15": "5duru368Sx23Qmk3F5p3axKv9V9rFQUS7rC4iiXAQkZCqYyVUdMCccvJK7HYc2kg71B4PPvvdxL3sqpnVFyo4E7o",
  "key16": "28VPKyyAF7Lmpc6VeGeU9fCKpXde1nwph8iyjtFP3XsbzbgBfQYFxeVoMxRASbdVBNPufdnKTV6dSEkr6SRnxH9y",
  "key17": "XyQc1hKgTG3du9B9G1ULgMd2JWN8ZQGDxyKt82v8sHCgjXHW6TXkgpUJirdCJpo9KdxgxMfXEgQvrLmRYtGRDUc",
  "key18": "2fPcAS7fvhG13Xc4fUyRBwF2wPjaAwqTTDsqnjx4gfi1g1E3xnuhmGwQfgDeik9LQrCuBRLyQCt3ym4JjCykp8CB",
  "key19": "5iQNBwhLFKeoujukZphS5BgUNX4rWcsV1CPzssVRonGZJxm5ctUrkBpUBoscjEQcb13PwYenBeC12GnSLjuhniey",
  "key20": "4ait4P2Z8NAcaVR5b2CfuyPoUB48UXarpJCARZFwkkCtQRrpXx5GKhDwVxkJDmZAp37YHRoK2CHLQSSm7785VyA2",
  "key21": "YbeqCT1qRqRSYxBmZHQVt2WEqWF39xmT2e9P89GHGJd4srDyLyha3hLpehzir5UUJ8n89bojXi5s3owzLJrmn4a",
  "key22": "2e7kr7mYMnZgZE11KafbfhkxBsojM3tSuW5ZcH12mfSWMTpm8yL6SriDtE3TZNX6zjxuuUWLLZbyn7SrM43et53v",
  "key23": "5sJadMME675THkKKofAzVN2bAaG2ioKbhVyduLSZguAK2nQS2g37BdA7LSufXku2oGZHdvsNwjhPVV6ZPLu4rXx9",
  "key24": "3goPhgQU6tCXLKwgzKQ6cKBHwDBazvLVDAedYVxwfR89nJgsg7WyZX4cfQf8JbQ5XeU5FRvDCnmDSazgqbU5YjMC",
  "key25": "4vGKW3Cyy7tpFuVGtYR31i2j1bQLGf8ugVpKDnxhz9yuvXQ6GqTMqzeNTPkEaKKq32GdxUzkXXfYppQTt2q9EUQ8",
  "key26": "3Dg89dKuaNDGc2upqDfVR5PxLMmYsqhKoVyib7Ksz3n2Ynca9uDFHqDNvoWr1EhYChr93JUFAv74egK7Nk1TEhDU",
  "key27": "3BMvny5oE4GRXCBvLmLi3m2om6cWuAmE2e8bRv2ycC2ePiNdRD12nk9PzNZmuQcdZATp5NdS7xjDm9QJGna6khKv",
  "key28": "2wKPp2zK1UFHwr1iVFr7tZSs2Lmj2WuzcrhJLrchMVHCg3Q54mNpHSD7fqXRVgp2jex3aQPvoU24MmFGZeq3XV3j",
  "key29": "4VSo912wCZJ5KkxstTF1agynVNFaygxNXtSMwzoTL9Mj5LoB48DYNS9j2MPmXN8YFXyB7URmZTeJLcfG5nemXDwr",
  "key30": "4ETqmZgT1YvwFUKQ55SxoKKJWu3sg8LvxBZ7LQd9hi69EVJteQRQKq75E6e5jDaZtRzfrk2yAPwXk5JxkwXGjTY6",
  "key31": "5DzuJwUMC1JMQ2eaReuxFQgo1WGPdQKFxwq1r8eFtfcVG5YVrMzCk8XbtNp3LzjVF47KFLmK7WAeErf6wQQuhSDG",
  "key32": "47QZ1KgdpAyDGK8DwkqR88rra4raTrxFPvc5i1uQnWvfPr174DEgynB6ZXP2ipyDBdJJBYYQsMCQX8s2wucis9P5",
  "key33": "5DopHzVWt7mvT1KrmrxZ6bd5hhDsQcKEeQkzKsPw3E7HXycG3ZWjGn5HDgRXwKFQsEnSp2FngsMYTyTp2R3ZGhhU",
  "key34": "5XzRnZqhaxtbWTjW59nNRitZUK7rAXCCoowPx4UXD7JbK6xfdavqw2TPPhTF7A7JQuRtCkcpoMc5JY4o6HCjcEBp",
  "key35": "4GVyEAUjTjarvqWzhTvnNxFhYBJYfGEMwsHJXdLaF8W1y3mZXrwrLuQnjSwCZSeun9ic8hVfdKNvfsZpWRCXLGsb",
  "key36": "51NF2fnxUS1WJVcZE79xSNMeESxHdAcY7aLjCuMbthQGorhnRFUHHVodxtctoXKqfcseAp53cFyZ5VVKsC1pyftD",
  "key37": "NWEd1YhjDQLrXsfAfbp2RKpNGgzwQpYhgdhMmjjvKjWMF6Z9Bjqcm9wnN4X9x4TQb6cYML16MB1zmdJFzDq4Raf",
  "key38": "4FVyM1tH6LpdxXUg6CmupGbHKxBvNE6FgwNSNbr16ESQ2LFvgBS4R7hQzNuHUcYyTwV3ypUgjpi2em5zyRWbktYp",
  "key39": "2vTEYrsYhu9EK8wUpSZsKCVoT8Q1Tu4uCfM2GpuPXMqRkm6bQVHZnFMQDLtBX5XegWDo6K53o9fKy8yQbRfNTYdi",
  "key40": "5nGVYKf1J7sq1SmAcjZ9ndJVuv7n2KeP4aY7hkauKhGme6zEsSoaWtibSFxozNVDHMRVJsUkNPfYfbK1Hbe7cKvU",
  "key41": "4pkBUYYGs81G6WHv9UsFLk8uEHwhHLqCfiXjdXpAbiN8sWekQCPWHfvA7ZBSGGbtqUCWNXU3a5EGbh6CvoJ2FrZQ",
  "key42": "WTAZt1RcRKjzdTr5Q3e1FB1U8utxBa9K7qhYi3KhSdyGVqARH1cL6AdAYLfmb7LECqSf8D7XjSC1nf8gPMxMWrL",
  "key43": "64tpbwJqUbH2aQNncDjZ1dCwZ4ysdySipM9JY3rMnYz7LXTSpoRk9XCrLL6XxaZcZBY13Deixt2MCVxVRnci7oTZ",
  "key44": "5wd8iFatBc7SVjgRmsaXgEcZpLqXYebJx6XxhGT1Kf3UsdQUF99Gkv6e61sGfYQWZSoBbYVLVQL9kj2a9D7aK5Nc"
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
