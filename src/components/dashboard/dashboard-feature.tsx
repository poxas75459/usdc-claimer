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
    "2ZCg4TS3yGq3uFqHry43HHhfNcNEiUDsf1otRoPP6SuX9L4WgYyv9mjz3FdKcALo2BmEfZvuJacdhb1wyzQWnMEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mwk5J6YsXVT4hsx7Qz9N341SNjppCCBtjcNMkpVpfCvc7yGumtLcNqSw46vM4bPqMSWjyDxdQrh7jC8sEbgXsi",
  "key1": "59Smj6preZf9q9WY1T4zonUegSWxyUmZgPKdwWasgwugFoSDz8V9YHsMTd4xwJkvEzaLcb2n93ngW8zxqtuGzTXC",
  "key2": "3tZEtuMn7HHULeuiR9Qd9wHPkuH3aT7KqgkJyeQsKpPo6g7V4RXBsqegkWSHWKSu3C9k8SinYzNQjC6awv8deNb9",
  "key3": "4nyox5wyFzksvgRTQk1YBsia23eX4txoKBMKfyLFwh4QvEQVN2bw2Hp32zjhB5b6xAA7fE7KoTXtV8RvBUECwLNY",
  "key4": "PGu528T37t25rPQQwmMsrKegsNzZWuBkg6UxPz62Ly7KM8iwikpNvWRKebTfeEMQnqWiRSPrPQ12WnooFzj9bTu",
  "key5": "65tUchXs63VAd8hNJFCK6CxTiYbtMpX3LGAjVb18fgDiFu5uv5gdQShGThDz8KqpoBwmmpKziRKRktLQ5m7knxpZ",
  "key6": "3bnChYQTGZi6PoTSBP6GWsAQ1AskLFqEzNhVBdfcC2xQ3PQ2rYqPGQ9qs3VvWPazhxLhJPb7NXMd9WACjScYEHik",
  "key7": "3RY33hEWutw641BQmCmSr2djxHLz61y9T1U8hScgMgXsBz2Gy8YbaHKFsgp3DQYjomyf5a7Kgm9LKDWctFkZXuEB",
  "key8": "23qUEgvHERMy9aWBnyC9jTn7guVXxAytKiih6PeUpNdBbaYQ5aTwz6Nw8rhNXPwxGsGtfxu2MFKVFVpKWCiPcYXX",
  "key9": "3GHmw1XC1fiAfhKZV1XKFyoX3pw4qfNTnYp7XC64wCnkbQXoWqymgYPiEstmEZNwbokkjCvCiYgBVo8MPjA5aFDc",
  "key10": "21JkKxTGmi3VnzAEiw4nZYRUardG2rqDAzzhcuKnWokTRSMBvz2rTre7LHuS3f6vXBH8BAbKxcVbE9i9LEyfsC76",
  "key11": "5zkF7Qghd8r99Kz9VKESt5qrYghE4B2fuuWdgbM5fHpQZyUEw1zcMP5oX8z3aKZpagZNigKAsmyRySeSNdmbjNan",
  "key12": "vGjxDmD6rbrCL3ZQqJXTSBfN2E6C6qMbrGHqcSWgz5HSWbcvRRSBtH4QwYrCC95sP1qHbvm9rXSFGhVs3XLPWtg",
  "key13": "4nWkZHsEVXZ4CFZKyUvmzSSZGQ7d91XGoA9u6HyWFma6mjqsSSLuWnotPfWUtZ5SAdQ2iE5m95QnExevNGiQhzJu",
  "key14": "5BxvfZrDqtXtPT5Cb5Wjn7Sj14vacScctpfdJFcSGiuEY1AXRzsLKwZ9TSdG6LuzpjMPtFRafSDALXecMmHcJSFw",
  "key15": "S2iUDMq5Kc6BxUb4JcFg8gthf4R63WdoKXFSgqyNphSZJbHAYTqM8597peSoxtj3SDZteUaigerFVBFnDk7H6if",
  "key16": "B8EuHC9SP3eptNff3VUCMdNKEPG3D6rUum8hcbsyVRj3yU1LYFZGJVHYnuDASxhSzvkXmp5VUzjSiCZ6iXftoh8",
  "key17": "2awSJJnJ3yh9qmsDqBvqtH6GmLKtZBBY1BLbmv23todVFDSfX7JcqzzYCJcQbTrQsoRcConeNdJdW8Z3ytLqRVpP",
  "key18": "3VzaTuDNas9pCXkw8w4pHH9Pntu19iitEMQBfRXNSinZUkKRJp1pV6e2cYwRwKUDJijQmFH26hRrq9uAY3ACRGvh",
  "key19": "4y9geVGbNYREZfMTQfCifrfB4xdLzgLDMBV345bZ94vNRkhCepAHwpPZBkdTUGdmVPPXATs57FWYBxUF77NgFLC5",
  "key20": "3vSSXVSkZ7FYkG1ZDhRzoGvcgkVRK8Kh3peKbj9pW73e9cEXnrXi6v8Anj7ETbNQTFMu1XPEsA5BQNB2Pp8BDV6W",
  "key21": "2zNA5C9iCCX5fSywXtys2T4SZA4G4T5Rz6jD8KxqN9eWYMwVWXUtbuytkKwe1tbL4wkLWSrxYaTqB9Nxo1vsyWrq",
  "key22": "3S7wv2bR48NjHHwuYZyxjwKkActp6EdBozEtm81a4pRar3biVZmE5sZQVv4zmswAyx3QZTv67dNvMiduXeAcpwDi",
  "key23": "4ohgP75HJj2PeDMq2yLp3Birx6ACiwYoXTu7kJTftZQduoxd7ysrgY93wQAE3i6gfvGYk9kyE9dFm8Gq4GGUkCtK",
  "key24": "4UcxBDKZbscpaAuKTwqfbY892UDzkXsgF53PfSGbDVSDagbkB2TrcmR8AtysfRKnjDbqUnVjopWzbNM8jkmTpVTF",
  "key25": "25xzqVW5QnUJkQ8t5h4xBYka3smsBFipWMZyuDmyiX3QmPX6MXUiVJKUX2q9HwxvxUu5KyrExew2xym5d1cmCBWp",
  "key26": "2DyW8MBSuzEDfgKdrpuHZtN4sHST5NwGedkzwDkM5SC62WdWNLbj795kd9CVAXbksV5wxRHkwG4mYCFLEkoS5Gs4",
  "key27": "3oNDdfE26cBhQhQg8juPx3QtEdYHsE2qkytzRmybhKV8TcaYNVBXVFH2Ln7AHpEPtiwE6oKxCJknvHnPkHLLknPi",
  "key28": "5mKQ9v58zLHxHbDvnzz1tNWtDx9zpZpa2cJh6ieuYV37ctR8sKCkMiQHyNuesYMnSrNh4Krgd9ZbqVVbrN23JiYd",
  "key29": "5Qk3uj6auj1erN7TWRaj4MBoas2kmHXBrPw2PGuM6MoEjUsCfYsNM9NTvcQVKDEiVy9jztDLBmU5qV6cVbPXBHqD",
  "key30": "31TLJLF9cuqXsB6ocSJdKnzhs4fHuyZ85oX5FUSSE5bsN2X8h9RbZ5qUtrHy2pnxySSRbgZY3fDkYJuUdRPwtUp6",
  "key31": "WLWzo1uPAoBpSxFo7mrVMts1njuPZUjAD9PNNRtH55N8fThc67649tDoF2s4PWwcnL2jo1A1Ms3VteoShDsdrw3",
  "key32": "2fAnHjjcPtTLVmo2zXK6AXy8VgDdPCyM5VCkFy67wFVDmrzrvEnQcDMf1J5vFWCBXuudRYmuBMzsG2cQKXNBputo",
  "key33": "5WBvEUBYncP91FuTCYDoAdTRaeBPWnvizoJSWQtABkGUoCCt4YyMWDipCBfSS4fF8F3CBd4eMcTS14bundFazAjx",
  "key34": "2Yz9YShnDVMYDRRUE7bHxnyX5XHREQB3ZZrBQ68Gyjw5L1sLMv1TDA4acH1oTHHwFjbnEz2fxZ1RNaCpCz2hxM9m",
  "key35": "MqWTDdMQrvXArhpaDoufd6v6fGvR3QrDmEFaAztxZHozE13yBKjnaNXGRXNw1UeWQxugjuAKxakCqfTXRJEdHEF",
  "key36": "52HDgddPbkuarhAM3mqP39S87dxYSCZyAwM29HJAJLN6F1feJPcm4wZ2hAdRpa8jNLtrgC7QUKqcWv89SkAc5eJk",
  "key37": "2jwtb2Sj46QFAkR9PMDBLcHXq42yqWFQbdFzhTZSpUGKVU3N11cZjqVr8S6fbNnTd5RaHn4cnHjuhnmUxJgaEyHA",
  "key38": "51htZYgpXgrqZwCuPtn44Pg1G8sLhwKCHFPiXNGFKseLdtozRnbs8eYGdYgpA6kw2R4ysZ88MfaKFvXBirHpfjaB",
  "key39": "3Pqtw9Pj3jEgKKWg97rwHTwR1kVfmZLkcHZ77EaNsip24fHCVRyaWK4918d69ehbFKaQJ3YdrNkQUabcM8zWRR6x",
  "key40": "CmkGD34UxVhWoDfxXrvnsvoinEckbqSNQzcZC4AQpyBcomGHM6YPbm7Jdu3XXhZMrLXCh8wJ1VpjcdCRomVRvXE",
  "key41": "4ZUZP6EwbE77fg7hekkqCMWokGYQdGzWxk5Sxu3mLP1BuQkWEm3AeuiePVUqKseW7TmdECmQCMuBpL5uUHBkzrru",
  "key42": "5UKLbV1g8cf9rPAxp1r81hq4vGiTKDDbamEZj2SBzPt3s8Bmq7nATU56yVouUgXPDHJBkY5gABHTKy5pFBWXVDxC",
  "key43": "48jHAAMDKkNqVmti13gnTYyR6YLGTMauP25QWUScQaL7LoC3179975Pet6CbUBs1SwVWVgeiQQ9ViCNdmkkKhkYp",
  "key44": "PWcHQgP549EfFo3vymmq6V1NnU6naKb2WcA4GTR7KzYSzTB4oc2iyUKjVA6ZZctB4bavKcvdXTEV3cV2cbVc7yU"
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
