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
    "2vv12pXHk59yCKnjL2PEmkA5gb4kfbr9jtFjYxT5R16x4RWLFoXYGq71qaFTiUjJbhQPmbwbR26AcosphZNcTXPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LFq9Bv5T2NETsqML6u7ra8pD8mTf96pXpRy7JhoKhAcR39Nm53w1AmYctxxsTou31jNGtTxdAz3Rzi2qJTLyJ6Q",
  "key1": "2JRkmL3qsa7MQjLCv3B4RcVHZPcTpvkoKFWUsQSaPGqqiEW9N12tEa58Fjdqvch1rzvNCmxEhmb7Rsb69YfkuzVR",
  "key2": "5BTwgWozQwEQQhuh2YwSs3NTNKDjUsNTbsAFK5iiBeuLgVcwbvwFR5x9JyB7bUir1Rx16jtWve71kTfsYDWQCiUm",
  "key3": "3KhvCoENCUnv5FAXJVRo89NQ3aEa7GX9MiVVrgsayyU5drKfkKYjU32i65XRbmmw4sbtbpt24u1UdfAZh34RN7zA",
  "key4": "47jE9wAvDA4mQ2fRb438ckwAdhMepauX7F8kwMdZXd86izi5LSzBEPwHVYUAjuxSrGC752c1Lx4gSkP8YLHBDWCn",
  "key5": "aHdFFAgb8tbaFrPBuUjguu27Kg737axCHGRWjfevtTgcz5PiJzHUpuHH8xvfEDbNNHfi7M8znLCqSyqsqgGXC3T",
  "key6": "2PbXAe6djKyRPCYoCHxo2Uz4zL7g2hsgb2oaJuujRQ9dAcV7aQ6eLxuo874rPzDWe7uYbuhF2hnoRy44i7NGAkTG",
  "key7": "5CuWXznZrNe9izFcxRvyPaW79gujbLrWdgcxcbX5axuK148WsZLjKGMvG2MgziaQJjszCqhRKQkZpMWAsKTCmT4y",
  "key8": "AGFZoLuEWW2ioxhpVNgCHKgQSDrNmcc3hP862bbbem9CUTCfNzoM6RD2BcZhd8PZw6VkSdgfYtUzrnPHJBuYbSz",
  "key9": "412einAGhW61YbRXWxKvHgKm7U2UCVapJwAWQZNBSbrMQM94Es8YfDuixTCPcmo7j9uGFbWHjZUhUbwefqqM9qdA",
  "key10": "2dSNTQS9f9ADV4v4HL4ZkDG9JcQ5SFxskbmguFNdXm51iFBvzoBiq2EkRM7kRr2NNwiEDntzgMxD3SSHQnd24HLJ",
  "key11": "3igjMVexZ5DWKktzAsdJhmMautMgCwhkyawgcaWvBacLsZczxwpdppqGjNfn9mjkiwy65edMjMkTpRCAfzymVrYr",
  "key12": "29mnqVTZ3ubSCqdeZKbpDHcSA7cdWdqokYopuFGEYMsniWN9prTKVGMDZaXTRfSWhcVHiTMyX1YxaWzRkaLWWbLt",
  "key13": "3fGQWXyyVgu3rdBZfWjU5b4sevJuHLK1zCYGHJzaeQMjQVnGW1u4MNBZ4M4ACwPJrgREwK1Y1VBYMopR277tH9dp",
  "key14": "3CDehXofBoUcyAxp8jpg1xDzR9MPB9EXdhmfjKgVA7B7WLDTAzw7ij9Zw3A2qrLQt6aVk8tUoWo3jjtsYaQCjAU9",
  "key15": "5Sy82mGPwv7GreZGsDr6NCHhvrhNiaQEfdHZjyCfjY5wS35GHdoiGHcTzU1cmFzx91kSLP61cPHwyJMmoJbyLmYf",
  "key16": "3FWxZf6YMQrVbWocuVvfzEZNBqCFzVwMhX5t7ADhsMnGjWP6Y7SBYrUpC2fqQda3NUpYtfcFq5dCZX8ZSp6hL1ZH",
  "key17": "2S3n3GAHjR4bokqPb8BvdES9xPrxvFk7H7shsJ7PNayYrb9KkN7yDS1Nzr9wSJ2yPGsrTDzFE77sxTUB8C22aYZJ",
  "key18": "3rE4fbKeqMNG4DP4SCJ8UkjDNsjrC75sw3kvESpN2E9Tt8ybMSiwCDXWgAuMAh7TKsfJAfkWgNwftBVAaQGmXt5j",
  "key19": "5HFb4msY7SokQEciSQETavedejGUfm17eoCsNvaBG3ZMmYqfd5KxidgTTtKebNwEs9PqLBL5h3hGrHpJ3myiqp4s",
  "key20": "5eRvQbagHVnxuNpjFUnryXfQLrZjmccqV7yDAQzz81VYhCpFjWCjmzroALzYFoQWYch64maZWKjwa9Us8koTVxh4",
  "key21": "58PGjMwmWR6xhmxvTQGzGiGUde4imJ6bsVov4tLjDNRqgNR9DAuBTTsMQuHXzDnS7KMQNyKDqRfKFJhUW7QqBuBB",
  "key22": "2Ww5ADVYFBXbaH3GFqWHzoPUqLYVe24VEprBB3cDFwmnumSZKXUHMVpWfJ8WxxvDGifxpCmAtMAaVeLfwhAEwdMx",
  "key23": "5SGon7uYaQWkjmhSCcbQurfSoZMLaeeobZTgP7L2mLRt3gFuDVB4SDLr2MZXULRV4AVYjbtjX1iH9YDUQV6nAxHL",
  "key24": "2ttH5LBU7TXmdpKjKBq71MgJuwgavKsK4c23THmEfRhZWkgAGfysXZa8HQtdtLHDAQL6dEVfGxJ46vk9VdEN8j9h",
  "key25": "2H3EAspuB3ATsTFYomEyEvJh2wW5dXEfHxEF9dMb9ogkVzuJB3Kiybd9SqdyGkXpG9ooeWAiZWmcEksSKYpV1cQd",
  "key26": "ADRNBXZJMSrArFnnCRPzv47WangxcDu5DWmUE87o2maSQ1BPEtNSsu454kQe6AKZroHNZy2wXwP86GLn8qzz8hP",
  "key27": "4eT8ykzJwREtMDvQE6bvBNjcj2Ek4iJ8RW7vKyhtCnLCCxjqnyrbsEb9iiqm84HRtxn341xa5KGmSK1pkPpTkDj8",
  "key28": "4i6pdF2sYLWqqkLWfSztqaz1GjZvaqRTWXhkEKLCegxLFXh5MpFTLW28YpJ1GodYRDHNyGf2cHudTDKsmKqgdjoq",
  "key29": "5RrykfGZugFCYQkAPiz66ddmPGiZx83KxAR7zcPTkigvqHAC2Qt2S1vBKmroSzJxZLLyWrLpyrkbmZ3EmuGm6cfH",
  "key30": "5dRVYDN8HKYp6newUnYxH4J3arLtvQBHXsxryRAvUiSuewmTATNBMF2N5m1mVNhYQEz8S6bCsb5RYdmqniQZBKNS",
  "key31": "3QpNYNzcLRrBEaXsXtqcfcLNnmKiGgjxfgWB2cc55dRfRr34aD83S7Lb7UoYrBgUDSb2orAZfZVAVxmgcZsye7JC",
  "key32": "2s8XqJ3mJtSZwKUVw93HfNeRqjTE4vna335egY5nSvo5faTnAwiAjj8QHc9HbDfkfHYgdRJZLxmBmD2HGonQYU2b",
  "key33": "2ZN3ULtjnJMKP7HyAoA8nmVEt2qY4rsgwFkE9Vnja4nnNTDs8eirB8WV7ukcTDcUqPRdvVfvG67ZNKVD81H1Lxwg",
  "key34": "2FPUMcHzdswQmD34bKrJqZ9tJwz2xXHFShadTqCcZCzQwvaVutCaxz6AeZhSZZGJmbKRVpy4RECpzi6w27cu5Rft",
  "key35": "3ob3UzAqE3rVGaREb9kSjXxLpqPVH9jJgEvpysaKiN4TrEioooUZYdbHUccsQK4kBATsvqhfpmwUbGvg8SeA6rST",
  "key36": "2abSuFrGuQ1ce3FgZ58pxuM5fUnXv8Z4oL2yXiHuZd6jKC4ukR8uZYqabyViaFN7tsPaEDU2gh9cFSPTaJhCw4es",
  "key37": "36BSQnH1NjWdowX2NVKJ7yhubVsDySurubfrm73UErMc74eDPz5xHzJ8riRMpu9C6LBVQMYjdjFgTGzNbxb9pFmz",
  "key38": "hUfEvpWME1zBhrEqKZmt4dpc9TvaQckY59uYwXFXAfvveQnKJvgYsxRr7kR8aN3xxFE5tCpm9a49sCqjHf8gTcg",
  "key39": "3FesAoZRozo1R9EKFDCwN2sJopvVqX3Yb1bEN58p9fgphB4DiKercTds2YYHp8CtwfswUpijRnjUVt49HMzTPw8G",
  "key40": "3Kneov7MJNXPk6ox96jowYv4LGykVQsv5okSr2xV68yv1wJzhjwEZm6kYxeTN7YHnmL44o2uFyqFCGMD3LGDGULq",
  "key41": "5Gt2nNtou5xGFokhJgH1Y5HzA4fnNVodP2arihp3y3rLh5xpgidrMc3hTBYx6JQkjTMHa5JkSonCXvF53fh32y5E",
  "key42": "3y1wVii2tDPVVoCEcXtZwzJbnbgnP2xLfme4GxjXUGYSaoP1k9pjLTWXMKsKHtpB4uk1b78GWuS7d1S2NsbEg8pp",
  "key43": "2dE1EzbadwnPFqt9G9Gip6ALNAoJVHFUJ3WL9RTugpXRW5CLPo8m8TbjESFeCMZdRPx9Z75UAaQFwm46abth1kHQ",
  "key44": "2QGbpVMzsVhS4k9hir1H7ikJJFYwHxZwtXgBMrptCUkpTF3bYbtgYJCsU2LWhwb7pXjpCVX1EefuC1PkxMMexxZ6",
  "key45": "5g3gopG8VLgUs7BX9aw4mRkh4Sc1dr6hWZXZyY67sp6yW9QGFiDQGn7g8GdAHMzeGoe8v3nWe9sadLH87dJEwNbq",
  "key46": "432CVFnooqg3GCKXYWG72RLrJJsoPpCoFo5DfTFQZ1533Y6AwoWsLKcgC8a18ddrb8kVnuKUbaUkHCqbGTXQnGdj"
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
