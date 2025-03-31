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
    "5mZUsAvqkSRENLbVFGHowzvGE27Q855wWm3GpXwW5bkWLhAzv4t2xoXzSCsHFdyfrZyFKRoqEkChwv65KtSfyLT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWkRUvrQ5P4qBuHkMBytBwpjbvDsCmDeHGeQRpD2rDuwCpraRqiij9HWmxRUA8PcrXzCYTtQimUpDR1YJzXA1iJ",
  "key1": "CMVHBQh92gbmYfJHE22M4pNMRXUkLfkMtTQVg5enK7oKdBTCtwnqn9PURVkB3FqZ2LgAq7Zaw94vpoqgjv9K6N3",
  "key2": "3i3yH7RFv1JRCdCe3efBoKvEyKDw1kLGfxEYgWc6s3Vt5eCqUNCGjKWBWeH7ffB6FoReWNEAwrWk3Ep8MTMedYRn",
  "key3": "4CGXPiHHWeRRZLacYybgkBhBuVpVhJz1c4mchMXrEZZt55NLVBo8os3rpaNue9P6iRz9PV1gSqbCuDYWpNmtUVtK",
  "key4": "4ELfjZ8sHHTh9L1VArCkhp9m3kVb3ijuvsQao1agDvacrjygvWAPa5gkDhsvcQHw8s7BDzypCsBn4Rjh5Ug1xaVT",
  "key5": "31qQDFamDikbesUnhATN6t4cgFvf5UVhYo6u24zLBVFniDF2KeTqJj5NzwkcuLRCGFjC1dSEyyUGeTv7862Ahb1h",
  "key6": "3jprry75xs6eNGjeJZTXjpcYV9Etij2xejx3GLjqjxY3Sq3bUSJM2R9JhiYBBeGDSe1vtdzjbpQXTsMjiAnqA6Fu",
  "key7": "5miwWngSsXkLdXKhPiJhgzWrYaEfvv38ELvMpqumTnjRs8cX2Fw6JuE9VPRLheDkCFZiF8sHH9tKknq2So8KwxzM",
  "key8": "2f8VkRSTPFpaAj5DgBUimPd4juu36Seh3azqzpu4ZDQaJDfL1CFZtfxyt4V5g1wUYdvsHcKr9NYUd2x5rFCxr6eM",
  "key9": "5LzQYzCumuwd7umkwXv5DV8GAUB3p1ArzsEVqjCmQxHW58fLmytoqz9h1pj4yPE1cszUhYfM8B9qxYxd8ga9TACL",
  "key10": "4Lv9b5Wr2QpG5bCMN9gdwkGbtaK8x6Ddv7fauiTbAqL1JxAxzERNWijjnur6LXzwfuNDr6oyW3VxAcsqXs3vLqTd",
  "key11": "ZT5rhNiTvqfM3rHxYdog12gyvn7YCRk34piTnFWGuAoMZ5hL6Aohtu6T44VspWRp54uyjYKTao4T9qYGs1LnHgW",
  "key12": "wmYkGBUbVfYmxsCPbFRbEsnCBdMGycqU8csHAXekuo4MtCyVkJX8Cw2pjKzCYzRQBEKZxGQNB73XvodCnkXDx9f",
  "key13": "4Zq7rEa7hh5sz1t3ce61xZ2EcB9cnx2c6PK54QGKqsBZqPLiEjvH6tV3JV9xQtdAjqXAHAFGFoYcBruFBgBa3Vfz",
  "key14": "41VP5E6ber5g67J7tugq8Vifq8eLQpv1NH91UA15yPC7CBfZc4DBupJeeop5n5eZ6ptEBYTnW9cCszbzGRwvShT3",
  "key15": "5Qca4jgPBqhFH2jaUeVpchCAqr8qePfyEthXJxVudDMPSHAU3mWHYSKze2hja8pPV3pXimHdS3NtDeW91rooGZYY",
  "key16": "4gjk9DkziKD2Ff4fFcKAir5ADPRHDUtgHcYB24eCMzoCmqV8UMRLH9zhMMFRueWtncTfxBhzB9aMjUL9Se3p5bah",
  "key17": "2YHpLXM9TLBWZGTgS5dCA9DF9xG92rmKsUxWiFVPK5d1YmwEAMm2PYbrchCYWj9kg8HoAuzD2pvYW8kcekc5ZPhv",
  "key18": "3tDwinSw8GKGRbHTjGNPzNK4ndbyWvPCqZZhGh4pU4fbS89U7CsLDirGjdgaUSfowaBE9iyhP2YXikVJc1ttmMdM",
  "key19": "2GfCYRUWBh91GWvptepvxZ6yKX6irxQpCUusxK91BbuGkoRpSPaiAbkFxZBEtsjWHXtnwi9CcboCSKcEEGvoRwLP",
  "key20": "3qeNKaKKQRpHxx13sUNJpJ4Xe2CYL6umvWAZhn8GYeuje4SVTXzJYdcK5dAohnj1mWfDGZKjYriAbmxXwn5q9Pk3",
  "key21": "3Cn2w6uBSgeSdMLSCbAdwJdX5WJgWMRUGPzjVXqANdfQ8cF6QP9B8fyhYhjyuBwi5n7oQ38shsAdkWTXByrT8dfJ",
  "key22": "4u46omSWJQZnwyV22PRhWAanY2W9ST3zSy8FRCb6dp791VCe1cNtThxE6oQtHhRNBeiZourfnqca1H79esEqUoow",
  "key23": "TWXmWv8Hav7baFA9P9b8Mon7j2DGgCPDuMdjLBVuF53brG1fM22qxESFkWjYZdtS8ic7dKuf6JFsQUn4eApGQU7",
  "key24": "Z4HgRYCVZeGaCd8Jur95jHZFbtdB8hH2S8cs4N8ZxC91XzgJRuouSxpjX98ovayug8M7JoeaLHsaE5H2GsuQ95p",
  "key25": "1bkjL54hS98zrY2o37VsRLWQrsiPm3Xf8YyoEqTo2f4dhEeZa5ZA9RVyz4s8mekU3zDL19NKVdCKbtQsN7SHS7p",
  "key26": "3T1tPGB98UV9aWALaba3nyZQuBpJfLHHdj83jXNHvZad1uxpZNZa7r7yWyaU23taugJYrhJVvx8PLxsMr8cqEGDx",
  "key27": "QrZifKSWcKUpiq4VvZvbyjiEReQ18pfnkVAAukKAoXQ9EZmQhPtDPHG5CTCQ1AxkSru5svKKBKBPrwYsMTKUuQj",
  "key28": "sr6xgJBTKCsLNHFC13rxvT9y6f24jXCJLSAVFiZYE73RnBz3WoCVfQTxvkfeLecBFUAP8WRpqbXxwnibN5nHEub",
  "key29": "38pFzHu8VonM3F7vpfjmuuFBvSEd44zKnAt89b9grSzxdPWygTXM1JeSMFwCJqPpXpK5yecRQ2AQBvLFGcbg32Hc",
  "key30": "ZU7WxdRoRTh5ry7aRb3MHPNLQTioc8tMF26CcdYrGpFqYcm2rKyhBoGzVLPvTmdpfKbD25c6sWJybiVRgigaCcy",
  "key31": "QnkhssYe8KydQWqSiLfTmw4ieoW2wMRVhM9t2VCbyJbzPcU8Z7w4xmxAqEos23faDEvjVkRRN7QVi4UetmiAWUa",
  "key32": "2YCK4imZ1u6ZtE5tRmkWUTbziaP6SUepYBEpsBxJgSo3xqgjkYKcFpenekTmbYdUCgXsoVhdCue695StXhCsmqSf",
  "key33": "3F6HVgQUZeWvSJAMdVB4feyq6CgkNzRrjrfz66prChgH5NnsGgNo9qKy8B4LqjSgJf4tyNHvZ6nHZ7ddWbi3knxJ",
  "key34": "3aLVKq8KP4zmmnRmUW4exRs5aL6uK8ocZxG4z69wrTc7ozvHTvMi45qqfBPYBSkZ7GSdUsUr9bMARTkjko9e9YVH",
  "key35": "d4HNn9HsJ9DsJ2z2KULFcCgGKnEj28okndcHwJeur3BcD1EAuYnNyRSFnxhajkq7SgurwgBL5M449yrgLWXbu5L",
  "key36": "2KLXL6yzbDwkao3j5PwjULs7HuAd6bfwVFHC1Shc7MEJLF5JmhBLAaSK3ytPDzZQjQFmWziuz1NVRP1ipThwHDsJ"
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
