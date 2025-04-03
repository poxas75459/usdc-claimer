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
    "3jXWRt8hEy5PX1t1c6cbU2yQJ6YNgSxJkyc98gr6xfUNFi6FPf7ZWmMcQdLcQ7RR31ySrc4zB7hNPUKGzPVSAiDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48bZGkDNUu8gAgTMLKTXQVJ8LvYq2MwQu9X8GVPrgiegNYW9NKjgEMDRVb2R4kCHZdydCd6RTrkJU1dJHkBf8LUq",
  "key1": "5mDgSW8rjDGHS4hx2iG733fRPVSuufj6eox4vVvonmZcGPvHncwy335TrsnCE57WY18tVxfs9UqrJzumG2zz8bSX",
  "key2": "35tWH5h93kwhFGM1F4M2yq3QMs16dR4QVhES3GWEmyZDxtD86dbr9RQHh9N3RBhj88rBAi2UMnAPiqcuwRU5xW9G",
  "key3": "5UQnafLvtNxtTtZksFwv3D3zrh5PEgVMyRorzjEas9PvGXFMTKb51VP4zdJCfzyvivBaDrqKiSShS2qxzTEWyT2L",
  "key4": "29zVrp9eicjj7zCcvjaPb96DrY555JTiyXAhqLm15aFsuUnJT2AYJYbcTA69QqQfpwqX7pGAewr9JmYJkmgPwUzE",
  "key5": "3tTvQzvx6hGDXSZvJYk8WWeiGgvRAdjgb3T9oVMAFsZzJNSKwa2rd8GV53YaWft5JQ2DUXfAvZt5btKiWfqP5ZSR",
  "key6": "2bXyP4hjkD6hjKgsNFciCdzoCgugYmgoCwQrDuLCevFd2qiG7zHTiV8EE656w2RMGKYpkPwnuv7e9DrTdUCtY2ei",
  "key7": "5AMxwE3m5FPXuLEqCpwmxBdtuzythqWkxsZ9DtVTAdFgZtrDnFLzkHkBsze4aS5d9LNNhTmjCSdMvrefis92ND1b",
  "key8": "53LXFvdXCPSzL666ZabaLiqzDeFgWrfQdJPcijeXf8s2Rx2x1KDM4KgVghXeKbnDMJcPykKQ5mq98jVUmdy2fWiS",
  "key9": "2rdLCdWUSvifmCT3dAhG45FgDAj7pfkb2nMKM2WwMn6KLd1JsDoKbScUwSTXzw8S3DXecyu6AyjvgoDbYYS67PRq",
  "key10": "cXLreZoJcfuCnwaDJ93ydf3qrTh8ee88nukzdbVjiMfRFpFMERuACNxLd4UC16H3371ragYMrKqhFGc42CjjEm3",
  "key11": "2aLkrnrxE6bMsMepWy5GJsvp2g42BhHekyHeogJi58ghmmXtq4wYp3nkDiMF4CvkJck6EQJw7YxDpqEHMPihFHgx",
  "key12": "2hxCsSFd26pnjKk8Z5xpDPShxHkqP1TQhJ5aZJr2gzTzT2fSBm9Erd5J36fUrJXQfetroQJA5roMN4LL73s9ZrT",
  "key13": "3E3pnNUvgs8Np484J7D6zbNnufq4jGnmKgW4KQY8McmQWkLuUREXcDRDzxsd7ZYi3FtZTokoKwQfMvo5LGyaQza3",
  "key14": "619KdQgqmPyGUkcuiPTnfsLhFmzUtx6dWTJ7KRDJQm6hTE7BVZmcSfWJhqo2HjNrH4oKN2NWziyypRVJqMZ6B5gX",
  "key15": "26PHpwir4dEVKjajSBPYx53j1bTWs1t6h8XbzyjLnTwmqw93zJKG1XPkiNjRytg3GWb5kY8iopz7n425AsBnF4un",
  "key16": "4WPUGFCVHvwVGZBqVnikRFeaHmB2PxFnM2PeJCDN191z7NV4xfJ33KiPytz6nQjhx9UnevkMFC1GgvjVK8LvTy1W",
  "key17": "3KrF5G85UWmPyuc9bmuVE69DEJT6SJqP6bG3UXBx2ryrrAqxx1sUBPDZaw2B8QWycydNciJEQjtdrqbrFfpR7WdA",
  "key18": "5GEmshmAM7CVWQXJvfQ5zaQkzT4DmYTpuL7wazKZjS3r3eNSPJVGTk6RUsutQeMgkdM2GFKfohyGtohiWbqLjMPe",
  "key19": "uCKD1vUDkrdpDppM93ds1Hm1667yDTeuasBX6gbDX2qq49fS32KDYPiAErSQsnno6wBBGRA4ATeVWgjkcnMs1WF",
  "key20": "2aDLxLFTAMJCMuzZJquKTDy7cMKHHacypxe1YZ9uzYU3uqwAyHFmrjy7pPTfVBSZsZtqHKQJsKVbKcqXzxE4f8W",
  "key21": "3Fgarf7YZ8oaXwySKEUpKk2JjJh9AMeJigzuBAbbWfeFQkz7UkccsCCn6YhyzB2VEa9SPAitwku3o2g9Q14ubpFD",
  "key22": "5P9dqzeP23Th5Tvh2mChxt8cWsMdx4vrp3fcsagw6TArRt1qKtTaeucsxg3Yib2dY98T1uhnibFh7FNnApxz5Mi4",
  "key23": "3TQ5GVsBjKTvj6mMsuFq7D11o8NW95j6YmQJjc9sxka3Znmcz549UFpGU9iL477ueNPdbpow1iXFnkNxN6voY7C2",
  "key24": "27QQVFkHAnL9PUQhiv96K9dS5ofcoEqdnKPmnRhB3TaYaVzUDsesjgG1rz1YYb2CFf7bEAsGEKkfa7ZuXDdxcAQR",
  "key25": "2uG63eu91883WBm5ootGt2QHDXT8r5uDbHLKR5GLuGyqAoFbGB3nmmTwiSm5A2CzJyiYe1j1pHHaXL7VDuvA1sn2",
  "key26": "2x4iTCqkDjCneHuYdAKSNXesKgre73R87Rn3Rp3a5wTXpVDuofKqYW7Gm8igrvU5gb5XgfmQPvvbNykKtMGxzP3h",
  "key27": "5RhMZK76ZXNFFXEUERdodUf3jd47VXx3sxwTMzBVjYcdRy9zkmK3F9Eznt9iftjChGdjMPPPoLfpLNcxzxx9fNZw",
  "key28": "TmDCbX3D89MAneMWQpQrbnkhKeTFyMYjZQqkdPonMiymfjbwYmE7W46ff5Q2ziD4P8UNpojPRrRiD7eRfJXvSuo",
  "key29": "65B8frW8fXtmHS1y438bZ685YJurSZWAsCovVuSzurA5NPwBp2jdoSWURLBehg5Y5YEndZde4K9juT1JsawL8e5D",
  "key30": "3hquV32mPVqxoaWTB4WndgMqfvJRMkWU9x6HPEamSawUMFpYxYp8cHCtePYXTjZywfe6TK2VjD3ofkghCieRCg7r",
  "key31": "soooADzWbhX3tBXppXvCXGoFRdjSritec2BV1DPmkhvYrW3N2AQ6egHM5eZpyRNVX18AaHiWXcjjf7ok1ZEmdtg",
  "key32": "4K8M1tFJNAHSySYu4EaizX3F6qkS2EQNZARkaSGtcC1NKL89PQ6LNMYQUPnJXammn6QP21ujW8ngTQu5tDkFuz4T",
  "key33": "4LTk6km2GeyHvPoJuNNJoaX2sv8pSaTLteWizM8rVDGineHVcMq6iypqUwGy1567z1oYkDwfUFtNFBcgte21MSub",
  "key34": "31TwR2VLfJDVWjb4xSoA6ZxCUb8TD26zNteJ1jLFbge18GgituARmQarocF88B5XiNmZuBdUrXneoDNF1YnNgzTu",
  "key35": "3m8FTWtpbQwdnV2CtG9QA79GtfwWrRV4vsdy52rq3MEhM92SZ6o78Yrb7kK8QA3ScfgQTz2j6S8jzbLw6WpUM7bj",
  "key36": "2ER9o45BVcm1A4YvxWwiGLrtJGMLP1nyPyNw47ymnBxkauSKayDs6PqjSHDMufDaDHcV92AMGH1GwzedXLisc1y",
  "key37": "5jvY52KixmbQnUyvSZFkDxo5sDFBb994v6fJDsY3KpBGQW94djT8ZhsxqC2B5GzoLdCHUvMtuzw1gtmNugd2TGrQ",
  "key38": "3vBvibrsPCWHRLvjf4Yrp4EyBveEA9MvDged4Hnn11EPVaieiHAHap8mHhVVCCbbgfyQHkSBMhegQJ6LmJ8F6FpJ",
  "key39": "4EekyRtge2ExVGPMH9LXSmFcNpqaXxG2feujy84aH4awBhXd9KPL1k6ymAm2GttS4UQy5oVuRW8a3YqKMJaMEpVj"
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
