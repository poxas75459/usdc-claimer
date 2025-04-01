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
    "2NhDR9KPTZbp6oYxua2VypAyvthCjKzkRQDohGPjAfKnTquerCg4Hmt4Wwdnpn5xurHuJ9oENbuA1u9hKPWmmddM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ducSwjwASGPf9E5FgMc3HGMawy95CKeyCaRrH4Rt2YPgv1WBrRGNW1tmfzuQWiesWvoznWmxJTvFUAREPhEGnU1",
  "key1": "3nMTTjnrjunNPvH92f5mbsmTe43nbXMsTFGpF2635QS2CCKW3dShMf4SJZWPPhhEZstYrkziioeX37A4JGqMbUzg",
  "key2": "3oiSD9QB63P5G6kGkCTj49Nrb4ZG1sYFVUAzGFNEJq9o7LAKpLZa6oxfXMM8xsMSwWgrLa3GukP79KAAJhyHpqFL",
  "key3": "3JZ5rqH7zTnLHUnQFhNYhGG8eKAiYBZ138n3tp78LGKbjvmhsxGAk1m84jvLCzvjzVnc2A7Di3uMqtNrtYtCp8EX",
  "key4": "3U5ZMgXEpznk9yX4LqWSScJ2ymYLGCBRh7xmB1fAbqRzWBHuJxDR441VrfcXMFX8fvzKFy4hR4jQu8J4eUfQV55",
  "key5": "5H2SZ2UQQ15NxT58o1tyE4gZAQHePyHdQAbp28epj1UGJU6SCB8ieGHfGyqe4HLp7T6pFtfwZGpf5Adwhzf6qwEN",
  "key6": "3C5tbLEgg5poy798KG2eBhL9aiQg428UeVfHvKGJVYDohPoU8ZeoobNkHDtSzTmupFhRFCozxZ58jtMkPWc2dxEC",
  "key7": "3zg6FUyBQ99HRLCNqjc8xnkAXp2dEQTmh6LnwS9Ve5uuQ61rX8skUaFG5vvGyRtTfvRu8Ep8NztGYypve5iwVXNg",
  "key8": "4rLEcBZqVyKQcwvV2cPd2EsgNychNSrUYgp1ic7BLPjCDgqzPnpkmKo3Zxung12wrhhjAvjiHNSXsiqM3a9H8u3F",
  "key9": "5cr8PNNy9t8nqqVTnecabwBwZwt3UHS6pnibqG8jnsUwgRrhfExHMN8SqjMeDNoGHW49y1U2dryzdfenxzkErkwv",
  "key10": "2RGrmNjBhZRpsjtBTzLmrEcgkzm7sSNWBcwee34VhXjLmmEZJgVTonG1ogg6f2mATRPF3fMuepoNLZg2Pff5aunz",
  "key11": "5HtgqSkHArDvsSDCauJwT6fdEKu2VCRZoLsPweccSB742EQSMsXwiLh3AAfzWPK683p7ZUwvrYQv2c7GTaSNpoA",
  "key12": "kHwAsowTgvZGHmtu6ZekLHD98FZZLHeAXzzmExAPzgUgpo7sVN6bbaPFFXSYosXHo1mMpXrUWp36ZjppVAJZBwt",
  "key13": "3xEPaLK2yWBRAXXxRKFLBVzhSmzmwEt5AEeqDeBWwoVCMV2kBZsiaYJf616rGbPHeN2niyp5hnp8YNhwVx4gDbWH",
  "key14": "4ExWr6HqeBWTpurwNEPqxs8Gx11M13xGwFLB83DfqNkcbbhGWKaD92b3US2yiUm7NHFYb5rvf9bA2vi3gsiT9ESb",
  "key15": "3eQ6TkhfyMXxqtMcjHbaugnJofk5XY5r6xN9UkNeN6d3JYuTKqBvFkrGYa65RKziiewFFfmryEhKq5MQ5p4tMu9s",
  "key16": "3zSSBszEZYACRLRRZFH4Sm6CF5CJR6c5A7aiSWFK8YPg8VS7kfkfe6pDy3YzYBhuB5nkVRQWkp7DKJscAbSyE8dW",
  "key17": "55VNYgynsBijVSBqSW1rTTzrsymmF5aSYFQN1XxzZiCQcJEKrcXvcrzYUF1w1hg1Cp93BR1ng1gA9ZX1b3xKBRkG",
  "key18": "5v3Hnr9MLNzgha2vcBy86SCDMv8w6eujjiPH2o3WDvFTRvEjtgWyExnksftpbNMUG6eQQCeaiPbpMvdUd6aHPAfD",
  "key19": "ejTKhWsBNF8vZusNedvgGngn5sV2eZYHEHdycEDVnzrbnUBX8MfnoLsBzNNyAPDLi4gjZ1WMYtiWAPw8H4NoU6m",
  "key20": "5dbSMyadSo1vWf8XSg7ydHY2L3uEmLDMZBrFSB6VcYoJiD9wYuR3SzNg3U5E1Bn4nW46NZJ7gAuLNk8xjQ87YqUW",
  "key21": "257NjrirF5NTYrEQwv3Bd6Zc1JYBUHawvJYUaL88ucngJ9sLbQLYCBzFgzLZHdqZdv37MMJwkdEXy1MouxRqeFzp",
  "key22": "2WGH3rZzfii7ZpVaiLU4fRf4ZAidTWcn3ALtR6DEfGxgVUuCuFFZ2TVDGpzog5n5N4BGy9H1eKSJ8xHbv4zWqWeU",
  "key23": "55H8bKbmfSunK6VKTu8w2kwMWwsu8XojWQLJRSmfcuXkvNeEXnz9AwZD4fPsBYheKQdsNRDfRVKse8ZQpFEEb3Yo",
  "key24": "5g9eC1ANeUbKt3Kk1tSsn6sskeBffEzk3zctAfjxGmTJJMMJa6vZ3426LbkbikBXZhyLAkr3ity5tPBBixY1nebu",
  "key25": "4XRaMjY82YVJBhYdCbFg6WNzxQhzvGFLnrYJeSqrLQmwz92e1HBHTbG8wP9PYKhs8kwNsUU6y9V6fJwxPLwJrPFk",
  "key26": "5FxJRLeMFLJCPdyBQSMc9r9ffJE5cBh5DSScjG9R2QQseWbNSuUU3gf2swHfPLTtNndxuszpS6m1rcGEnwLvJS8D",
  "key27": "3tuRFsXUpTTmLqHk7pSdEw5aWnBePGU5Wn8H8Upt7Tc46142otzW1JrJgEgwuAWYdnL8n5ixdaBEQo3cMVkGeocQ",
  "key28": "4B2KJr2QyGbxhP2Xncm5eHK24TtQ7QZNyciFUMCXqaQfpWNSK3dvwcZfwbM1ngRq5Cd1C3DTgL6KdypwqGunhca5",
  "key29": "2GaXU7fL3HfYCV7copeFk7PyJNS8i1uw53PbugeEtzA1ge7YzeEQTj7k4qKZMkNJk8AKMvePqiqAfo78jp5ypcvb",
  "key30": "wNDhs34NLsG9iVhgDAE6uYUGcQPVhTvWQ2kMVVZBtf7oA9on76MFS4V2j9XjS5veFi81qo8noNqHq1qDUEFDu8D",
  "key31": "5nn8McE9wmM8DrahgHwkYG35FeYPPER1q44DHThF5n5E7zE6wy8HJCb7smqDDYidsMQpfD3H9NPxKPubmHEfvnx8",
  "key32": "4jg2UDPjdxh3wjYY3vEpNM2BTa1XGRqen4FdxiZanXHFpNkFgTHyACxd6Y2EjhGKdF62mnxrehdtbjGoKAQE3ZDu",
  "key33": "G6jC56XJa7PqPCaSUqhUDJRvSrkD7btkRmjiQ7mRef3FyQRSKGTLnRTjkCm9DHhd4JM1XfdJjbVpgB63yVvbCft",
  "key34": "4SHQmBd3wsRzgy7P7WJV6PmJZoHbCbMaYEr4GMyg2uxTU1SfUHCYyX7THoeFUGM6M77u2s5irf2EyNr974E6NRX1",
  "key35": "4erLDc6P7GpWttkQ3xErjKeLKoXRfwWSdpLkSaBDbeP6KQdHMrEdDEUSVa4bWnFxbGw4FRM3Yxds5eRQnJA3xjnw",
  "key36": "5esJpUBXTWjCFprPPWhPPih7kB2Pe8s548uA24zXrqXiz9MPuLnrzhwRU5Mf6QLRngaRKt7YASyynggJiXuGVFUv",
  "key37": "31wq4eDETmkzdtVgUmFMXYkaYuR8GGHWsWdFzLP1YE9ow8qUguetP535oME8P41UVW8rhUBPPffjQrSKyyjxxFv8",
  "key38": "VL2KypEsNoaxYGzXdHB19p1LvvoYMBNymsdrpBcoD1vW7tGkmuXRWEwNdhDhhtVCzyPuQUWDxsWpNnMdKZmV6w2",
  "key39": "2paTKGmNqo5K1KZddkFXsX5JDNGi9XyZXHMHcipLvrD4EW7jcH5bawUrJPmpoXc2bhxxSnVjkG3vMScSgHuUoTf5",
  "key40": "2A7Mz982WUMN1Eo1aw7XUQ3q5sgZSGQp6pMNmGsqcHthS9W2jcfJgEVbUzxEpsF6sB3dnkiVsX72PzrGBwaBk7Mb",
  "key41": "eYYKAuvrfWzLTy2rQduLoRbbumYPvxePdc2frDjX1dvT8sXaJD4Y4bX8LLZKa1o7XgwChNi9PSYJd9nLTM6FUg9",
  "key42": "4PeM4SkkChLWdqTNubN9tzTnQASn6CBmAcSiVTFbNp937wYMPzYPadF6dE6vL6fX1rcFwW6VoEqGAL6SqYg3Fo8P",
  "key43": "61TLeGQwhTVdUQtqfab7hvVQpPuJc69tAMq7hUoqALE8KBmBsZskENsG26bQa48rXCfp1n1FWjYrCuVggzfiJQ1C",
  "key44": "4jASDksdG9uTEYpvBystJWvvdbw2z2v52smdhURKMuk1SUmQ4pDtDRSbJCkozwVu8qXkn6k7SHc7LGRL2Gk7iXxm",
  "key45": "4FmYzC9ruzHQXHyX2FFsYLHYnMHjxbFmBW97QJuwXjKmMEVzt76BJRNzWBhNWs8PNidXgVs3Zj7YfLH266cUW7YT",
  "key46": "5WxTF9qJbCVUAmcKPXkpSmmaYPsUYC7kGYkFc9HwPyBGbZhdDs7hRqMGe8ztwyZCWzm4Jitjy17VovBFT7km61wN",
  "key47": "gjX6JMSkCHG9tm8p5vKVvwEK92Xrm6LxhvU2SmwgZyq9QEPApWomsjdsneZSs3MwzzFMK5MvVapZ2YUKytjCJ8U"
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
