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
    "5TNrwKGJ2AgV6cBs7bzA8aedcjrTUUX2fBLJHjAGzVkHHVFjaXHiVsFcPRsFopmEFfLQoyh7ooyBFzRGbx124V9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3doEHqaYkWK1RhUQ4aDsHmsHCwxULDZQf84iNkxMMjP4yXrQ6f8e5euz4joBRuoZyEzF54qEQz1isZpf2WcQYGAc",
  "key1": "5BtbgKcuockyWYxCiN6TEZQtdj5TtD2MxPfey8W1gxLzHVD5UDaTCfyNaNNrgZZnSXm2uqaP2B4v9DdZRZaLjjvj",
  "key2": "25rJLRcD4K8bQbR8wQtMLDbNS2J2oba2aVKhXzsHK3VTF5mkqi9kE6s23dUr9Q7R9LDhV3ZHxXqd9dN9hq3m1fDA",
  "key3": "31UYok6vtWkaWjeXm772wNphVunCTgisRt4HUMDs17WB4Vp6zbnJhw6CJjdbo7AEzgwqEmaj5AvM31V3W1CoTwRS",
  "key4": "3gH1TGxSgff7gU4fc2fDf6icoEXPzW8oPTgJ7mTeCokLxrZD9nHaTTWU6PjVTVkkFigmdhKtbYEky4yQMLeQR3nL",
  "key5": "4qg6MjYTP2edEoomybjrXJiyHneVLGzJNZUmhqrQPHbKGSPRUTK4DEZZYhwzpddYPyCRFhBbwQzScqv1eSVMBzgc",
  "key6": "SB56oNcVR9xaKzKTBi3m5n26KxW64AMwX6EyjsPgauDWfdqUZMeB1F6EgA5w8qqjnvSUHhLdePeYv6siUu8LHNF",
  "key7": "2e7F3kMGsphrVnG5vmyrArw5CAXCwTqTpeMHp6BEEwfAmCgjQTv2QpNXsn6nVRFtYLTgUJkpU96yYiLGSztYTM6p",
  "key8": "5wemxptb9nng8mzurriniL4PLV3zH5tMMfkNMyTcy3Mh2y22RWj6k5BPKcCU1U8gCsrExsb33uN6YqEr821ZQbHL",
  "key9": "2K29Eve8VP3eqz4aGHpdVywVWQ4UgMefRVYvXgRYoAJCXgC6sNA6x218A69VU9M6Dj4GdXywieN5m2esycgkFKdr",
  "key10": "5bwmQqRX9b4CbMF6ucEb3HYnzoZ6kTpMdGrPh3pU5gUZusfU8u4eDe86DTYFXK87FrXU5q6xkCzVscXUri4UiBUk",
  "key11": "4VYtbVH69E8Dt6UUnMAeb7NGUxjTQ67EpfPDdpCdUipY2e37m8XP85mn2ySzQaZHxLPbq39LqUVRuAeWX1dSxBsK",
  "key12": "dJ88mZb9NXHXNNWtUtZe2YtWs4sB9ZSJzRugiSzwKuzKGA4GZwjBPYoUb191SpaRUZmxt8UuRJTBZQ3nxmDFJ3a",
  "key13": "51zsqzaRFKKfZLFyhSY9Q4R9qqBJ6LreB81pnEwQPTtE4YvLB8zy8Sb9ZvTm3BRXeCzKrAjAeVy7Qjt8orZKkjTs",
  "key14": "286Sa3NEkYzArDah1faq1poxch6tDaRZJDXRmpX1FoncjxgbJ9iXSeNm1TCWamkb7yz5t3mUPcHTpS8AzqDboD17",
  "key15": "29xAb3MhtMuj4dsJYTo9VdukopKZmzoUgoCPcVxhvbPnYirwWZFPBi7fWqpg3zqz5v5ikdheWL91kgtNwwgHKSU2",
  "key16": "3Z653eU1ahG6FSf8mKMEfvmSnCzGes1uhwQDxihFAiPeik95yKRw1HGXGJA2AyD8KTHEZFTLX1d9DH2SWfMi9w9b",
  "key17": "2qy4fdYuvuDXaeU196tLGSm1uMWu9gcUQ93usPyVrdFbX6MQwFTPVBDQrnD1fkaQxVLRJyGRR8JTefQ8PwHYG2w7",
  "key18": "5jKL4AvbNDtEbAvcLQfBCyzaoFTZBD1s6G6yrzxgTEc1eFusxu5jcwaAET1rTuNJLx6JRwaV2QmJArQB5zAdgThF",
  "key19": "4jDTku7SWpn1ZyG4rWAzvQGkMTCYH6z5CrMHz3mjFMRPPY2UXpL8s1sNg4UTU87pbnKCPQp6JY9E1ZMRm5iZu1FK",
  "key20": "3CGA6M6UMaiaBD9Mph4H5uZcrqrQ9eSanYGCdKBFtWMWEg4277rWqPo8Q59kBYKYCQjicgTZxZP94TqVkCkoBQ1h",
  "key21": "4UV2UeTAHQR6xLtoqVFzhpu2sYWMoEUkwtFUFFRHSg4WCFVYHAvjbS7BBWJW9jjjDBWciqLJtk4zwfBURnk2VkyV",
  "key22": "5mJKXedUhCEsufNY9CxManCCJ6yigikCEYeH3rf53KAn7btJ55RBB3Q2yEqoVRk7yqnuykFsukXKkBvEtTvk7U7p",
  "key23": "23zMq3eA59quDtWV7donXXw57NBaUjDHn69bLSbGUnp1ENwQHtXZYeAJFW6zpaisctVKDA6A1McXQ13hvnpew6NU",
  "key24": "ZCyyUFCWL1qZYPVcYXNTiA69epDD7koraGERfgpVqt8b7u9osN7PTaTf2YFZ7YopCB7oUMWv7YykXE1s4HLwonH",
  "key25": "4MazUidmWXqn28RGrZf5P7Hf5ogZKNvsWBeJebPVYED1PjYD3cUmySKzxFU246TG8KX7AK53NYWhMvFMkjZpw7Up",
  "key26": "5owT3bzSrcN6DoU6VK36obs2BxNtB3qVFQZsS9YdoPxAJvJGMRQ77ygimEBHrcxitxVhgvNDkUpt9p9J5xN68d17",
  "key27": "3WGE3ZYeWTPyFFmMCF7JSZgxCcYiYQC9YYJHknLXnqMiJZRskh6yLXFauVhNnFBFV9zA6rg1nFEUk5AbabiVs37e",
  "key28": "5koiU3kVwoLSSvTpNdN3PDSGS5YCoLw7xjdBrp6oM8hxHZ8JskZz9ETa3mDt9YdZJvi3Q7VAwp3Jai1JiyPYQaTF",
  "key29": "23RK1A8Wj3EA2czu1FTyZX6R83qvnaz48r9Gw53Si9u1zJHST1mVCVfiCYWC2kYapWfFpTpZ2M47d3vJPjz4PytK",
  "key30": "4U5sJWB5Xn9KaRZ3YM4dRohbTnBi42HBehNUoAB31L8m4JYMWGHTtvzEJKN1tSmiqhrZYsr66o8c2HtXJBiZaYJ3",
  "key31": "5SwsGwpSu29td7xzas8WBp4tt5N9LxYYpht5ABMh2SN7qkLqVJ3b6BHiAyokX79VMf2jtxRqJYGP5XewDCmQN8Hg",
  "key32": "4sTU55GxicynRrK7HJAptndrSdpXazEfyLDUqxDgczh1fC4AtjrKkuLk2JKYLACBxMGYvaNBPArBfwac7DyABQfr",
  "key33": "5GFUeRrbkNTcMHNMZCg567rQJSWz9Fjv2r4KAecTrjEr8oXf4XjY3e9yXTdse4g2SQBM8ifoEuPBbs1Xwkk7dWc4",
  "key34": "6D42YngypdPgpxBe1TvuxKJNMtTzabtpJLaqNJvZtcmx4tVLuaX7kxg1xyg81B1UKQPRHCG5KuNx2TCQztg1pki",
  "key35": "4rB2icu9HD4jvhkja4WRceL8sQ3Auhv1DnJ5EDFC2tEegRJWG2J5KjHEWk9WFamfrFosZBbs7m9YssdpirEFwjaC",
  "key36": "2qC9nH7k6NwSBYvFhLDk7Z5vDaQii9nCnBuCs1zs5FGqUyz17U18DWMDwKwQRgw7GdeSgTxtvun8HNHAWmAJ9x1a",
  "key37": "2QuMyzsLt944jfhqyPoWEzg5DJHtRk1Xw5KHa86RveYUMK1imRVoc63X1dfK1YaRPRQZ3xCxnH1YPZ4cXNZpGGT4",
  "key38": "27ZJckc4ckwuAhZRM5emokkuWcdiXP3GL7Vm1LQ7WLAETKkgoBYz6dtG9RQeCnVbKpqiKVT3biwSkWZvBprQyvfH",
  "key39": "ZqaEG3eZtNaNc92fFVexekG26ERST8y1M1uktxjvCbv3AKSt9V6u6k62VR8vx4NFgnVdSJZucRJ9Us6Ch6bGPx2",
  "key40": "5PVNj8FUpF4dHMKCMNgJsLgiJve9gdv8n9sBNFMdXmZB7FcQ8Nwi7pgeJVCQrL97V9eAtUGzNx8xZQ7EMcW1YfSo",
  "key41": "5zTv6YiaF8TvRkT7r4sQcz3D2n7ikmKpCfKwkFseCjnrN7Uz2WB3JToJ6x2tDhroWJHBqeEZb737F6kmHWb7d3q7"
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
