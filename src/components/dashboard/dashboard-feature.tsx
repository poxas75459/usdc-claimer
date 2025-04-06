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
    "23MNAt2TNKF3hu1E88cpmirphEWS8DJrdGGaEC9HAUDqSWAyesrP1VPvMMUfgMXkpxsixDqwEyN4u9iPCF3FMwPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MrpEywRB633MkE6Y32ab1Ur7ajGi5QrjzghJ3N77GiKvC88qykMAQfUN48jUSd63EVE1Wy83seMAb87VBvUNPNN",
  "key1": "5CL5mvvtmkbSTPDEgtoc9BM7mPG5HyTVEukacb1MQHzkciAkTRDL5o18E8bPAe1vddT79SErLVRb33Cx6Tdw4APY",
  "key2": "3ZtvjMWhNfmqTyYcKLo1qJ4asa51xy3uUWJafEWatqvGpR4USgmvcedEijMZSbvEGdqj29RLwdepuV6nZX7NmqsG",
  "key3": "4G8VtV56dSVsN2VEoTGhQKg22hE2rufYVeEiAyfoZcyoqkmaMZyM3u67aUZqvZ5x59qVDMbm64iFibKwhFRpeg7m",
  "key4": "2APgUZJ3nACu567ZFgehpTgmEiXkyVWhQFc6PXJRDLi4A114jM8gSVYNn8L2f5qJzTJkk8wuV5PLLdrhZfgdKdLv",
  "key5": "4DXMEn3diFj465LiNvfcxrfcuWgqCRmjwTgja6HcBBMjjCxruXJnb2pZFtz7gqzSsUPu88KvyZW4f9N8CecooHGC",
  "key6": "3D5WrMDRHGKZTz5tcLCqqkvjJwggqkkbQ3UbtL8pWEcJMhPrjaps6ez3aVhoW6qu2MdZSdsHq5bEdhg9irniwiMV",
  "key7": "3Ext3H5VGSSDuj2mb9CpkUsUbiRZTphVRLoeVLUARm54amFuySKm2rk5CYa3PRNLuGtFFf2Hko1MhxSomiQySS61",
  "key8": "62TQkcjtP4d4pa1spQwF5ENFxS4r7adw36dehU3mFeiciqESLS99jfo1WGBLCEnAcTJT8LCpfXsBmXVFuNSTje1Z",
  "key9": "4T4J4NhUt6Z4k2TBse71QseSyAKfu66UAkQ5Jp1hySs8jBZ315naN4TV4L7CCshna8ArBkMobtfdsFsDpu8kpH2E",
  "key10": "2XjwCsBbnTE5MR2fSJMprar9W6JszcGJchnc4YdUWawwJELEeZ9sYkV5p7WHhYZp5NRHipYecEBHTmWHpstGCT4c",
  "key11": "muXmpyh9tmzdQAybYAQoxpWiE1khy91YJE7BTqCcMTncV7mkpgKj9fBeeB9GmZzjuNxNpmPEXLtrcRdXTsXAXEz",
  "key12": "4Ey3LGFYNBpFtcNxtcuN2pba6RTdWaW7MuHKRyjf4UxZhak2sTq16mjGVxnPP9bmLeUg63aWufZmiSF7HcvhDr6q",
  "key13": "3nSgrH8kQiKqoBYrUp96eEXrrdHVqDYxKfXxi3V4umkqJpVSvo9ixf1E6kifmveyQwR34CcqSsV7LFkgA6LM8URH",
  "key14": "3RgzRgptEEuJ8SebbeeUFPfUGh3jaqWAQBPjJWTsoVi65HvCg2LNzok9ayZzeZD2emBnf5b79cftTJc7arvEcYYF",
  "key15": "27HbL91ZUUSqVEMbR8vj84G5bNhqSXAyJKtHs2mUxhzokNasL2ZZ2ZkbyBP2tfA6w6FBjZkW8AfPdWPwZkgPouXM",
  "key16": "3G7kcYfYGAFvKN3cgexBUHbyzpxQ2JaMfNFCCEJJK7nGJuMribiBwvP98K9XSdJqmWSfuuiD8Xrctz4PPyBXmEw1",
  "key17": "2dcAWWSQpt9vrGme2Wj3PhYsLry22EZWP1GJTc9jbbzKpXqUz5tVqJ5UVqdvfLKC4xvfGM1dgZ8kTtooUN3xpA7a",
  "key18": "yMZZjSnSyzH34hJ46tD3xN6J5EoG51bnJfWdCSGpV2U4i2phA7zNbrg9CZodiWTwUbSvoDBKptE4gYg41udcZot",
  "key19": "mcaLorvZfBKaaMt4LWLZxsbEUYQ8oR7wUk7MFynqUrBt26jzdPKgKk5QBKPVSAAFzDSvjq1HufLF9L8bNv1Cub3",
  "key20": "2PwvfLUgnkUYc56kLYjjBjJQNsCnKDwMa6i6NUjUpt8QDDoe95yoGh5kXY53MoWkzjfb3pRhc5AL65F42aZXuj7A",
  "key21": "23u5Wh7khhJL69rbx2sZrhzWGXkrdgBjTD5gJWwdqf62DqJ9Gvmmv8tVk7Pejipej2khXmsyrokiJM8VGR2g8Brj",
  "key22": "2rWny3URdoaZJbeAJDfB7c5fjHVn3Ek8HUsdS2nTy5PhqZaxC8wNW8KRa5HZ9Z8f2cXdgEcZsxEaajCVKYZHmg7V",
  "key23": "3r55zsoE1ZAVbDf9Hu9D3uBDvzrktFzmNKsBfqjcLqzcsbVWKYqnQsAdTYTuGoXx3aWv4wwzMJtZRfqUqzB6cFEv",
  "key24": "ZZAQt34zwnvYu9mZzHmkCoCi1cCnmykVMe3hKs3oej6jP9rDE8s2ZvAivKKGL8sJg9LwS4LJKVUeqU6XhyLsoZu",
  "key25": "3Edq3WQfCcuTgm8QYPfR43riBgwWafzktVCTkN8rLGZz2Yn16Gid6n7VNCBPBL83kEQtrDLNzWb1YVThZTYAUApd",
  "key26": "328ag1taxXDJL5u6UTSy7PSEQnPLCRwAoUV6EPEKJ9cnaYwtAmZTGUs8GjjvsmbGuqbKey5akQ7VRUPqWg1xiVrG",
  "key27": "2Lzzy9eZPX69r5s8vpES9GSBevDPet1EvJFAn69rxFwUsv1H8KEtphWJSGLGwq42KcS4ge8KYJbjYFsBfhuWfiQL",
  "key28": "2CsjGRHZHAdtzL3rA7iFvT3F3H8WGDxgbr9QQatkNMUquoo6J4LACVw2BbrPn9hzmdVSDTsJHepB49RzJTX2145H",
  "key29": "1A5N95xGkPYaSpXjAumFiwkCAuKqnqkNjYNfZbvtBqoGrK64o2uZjLKB7r5Xc2dtYjD6Te5JDDMQaxKAqonJ4Vo",
  "key30": "52735p6cwqhGjS6aFpN5kysyixKwcHfPcv3mGm8fs5V2nMi6tg7k9nmQyCCQunLa1j6jHredQAoNmw8UbUp2id76"
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
