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
    "2vAtG2KLTwxy6auQLXe2Gb49mxiABH2j4uuedKGUtbmrY4AKXU2Gfr5Q8QiXCi8HAdTrHycKznXXuZ51bXorrtCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qd6F6DnY5NYEREiLJh1VaEzzeYShHkLgfhghYaTXaw8xiK7mcivQ2VYHZS29GwnqpmGe1YDaJ1XS3nwgnYT29yb",
  "key1": "4aSiDtqzHvPr9PcUDVrchf64SCCfhqfktxgMHspDZqmnSgj2z6k1kuB8oVbsrpXTzPBrc2TZ3LWMTaL1PMgRgj3e",
  "key2": "24ExTTnANeyMkNUVAHTnzx1LmkpFDC2SCiGRPrf6USALmhRnuSJXXdoUjYmk7gbyyqTPzkRZ9kzRtPSFPgqHvCg6",
  "key3": "2CxnahkdJ2ULe4m6utKEsVr2jekSed8BBVTS3A4fuMHg1AsHGUS8eeqnPVvKy1D2rP5hF8oGABmtvDPfZ2LGLgLa",
  "key4": "35RdwLe1sbuMXyDQHmrtreXyh3x5RvXKEEj8FrNNz2dLkrye7rJ2iGB7XuGxpvxsPTby8JhQFzBHUkzTUcwSbUom",
  "key5": "5EBf4MUgQF3fdixYgS8ritQsUDwtBpsVmVnqGVZn6zxH3SnayPEa9PL6FRmebmu3vU8VfhV5Lpt3NTMnkBkFgTz6",
  "key6": "3CLKH3PcHDA5RWVY1shFNgmhoWcT7Cxww5pKKXKpeRV2eMeBRKbwkE7iv4vjxqfooJ39zpVHabbYjNDndH3L4WMX",
  "key7": "2bFaqyNFDj8DMgqUGXpYZjVZFRx8sDWrju5Zghq5qin9uSqCTnU1xZFWBnHn72fyrweHdtjJCA2Kmy8rkumH3bZc",
  "key8": "3eMHwmtAcHWr7AJCkNpErdeKNMKYYwbtQNyrfzZZGfjYeWVbeoD9cvEd6y17zcXv18d1o5FDMfoxWT6RC3HN5bgr",
  "key9": "47prGpHKneRMwod9CBLsZEGpFNP3M1DRF86qteMmvhpjpDtUV41qwkkcCeqgP3oNx8EnrYf1WTP3q5gxQnFAXptk",
  "key10": "4PoFDHQH7H8NdsCaQbptxkfrM3Fcowkb7kZze8oGybBJunJug6FN3XbZ5qSvgPf3zVEuBWu8ENRGtUUsLZYnZAES",
  "key11": "438xsS9LWqdMWkf9AeQ17Qdyzmw6c24FQX1W6SW4aDfxoSXkGWE6Y15HvEEeu8ssAGcNAobzWrtue7qLAXRMgDT6",
  "key12": "2ohbw6Hks3TEd6JEFeLuLPm1Rnn4svKyHyEy7WioAYzpXZ7y6tqntd1Cq6PcsHdqGvmFhZLdMvY5wu4XJhNh6Ed9",
  "key13": "28jcaQ3dPRgbWQaSP79hnSBbGWncNVGv6NGCeQJXjWJwwN8zP7SAXTJ9ayirpdZQKbKbBrFAd1Z8LSMY5dBDfKb5",
  "key14": "2i2xWHgJbpM3opY4TvZMcegUWNk5gfMS6grFJu2NTk1rPEk8CqtBvMhiMLzWqbtiN8mbvYH83RahVkVJdnCLCPic",
  "key15": "4NehBWe5rabUadavtGeW5H2wKWZAiNYATC914fbVqj3WeCssN2bdL7NWVLvPx2cGqHYBrYgE3vFEfDW3Fas8fMnk",
  "key16": "4r4gh6Z8cxXSFLkJupR1PNcumzQLxDnPtk8k25STvFZ4Un1hNWtKx6RuEYgNGarLLNvAxJKXx7wBrFoQe1g9XBU4",
  "key17": "FybiGcSmUX3uW4B2eQcfCR8H8aKNqsLxhFW2zhW2VduBty3nPU9uSD5krXUv1NFLSU5ACzDZZXvfEMFEAck3JZP",
  "key18": "S8C36SVWSpSu5yTqirvj7vVCPefem3ooigjWjBVAWmbMVFtPEyWEaMaCT57ry3yoafNRqxxUVWx11o64eJpnVE8",
  "key19": "5estZrcm1wbXKY7pvj7czGUg9feosCH5oTGXjbQow5aWT8KuUngQGmA1MZu3GadLmS79bSb6m2i8sFXnAqtVJLDL",
  "key20": "4ZogkQGR12mvs9G63okDuu43TgsJhikQdB3k8RREQLhesK366YKXqeXnzB7kSHmZX81ku6kZZakT6Y32RkZYMLtz",
  "key21": "63jH38YF1HoAgUpLo7P1R9ENTzajArcpxaHiwhDG6UNz4SwPsuLrL1fHa6ehP7kht4UEGDSX1xa1F5zXUpienF4w",
  "key22": "3gaAr6xjRezAAyiDzBKVk864XHHNHK5edPx45njhtQSYVtfXtpJ2DnXXP9wmBL2Ur315vxEt7c6JBzoDrtjGZj5a",
  "key23": "4RNKCJu9ebgewvf8o25fHggTQw1XUET93Hcckp3awzDEG76c69Q7tdv5BQq8rCGpKvKkqBkixGSJ9bgCzULXnCTC",
  "key24": "61UiPZiiexW79NCdQjFJb8mQJ5r9MeLo7XoXVUksCPsm4rXug7CyZa2GVSNJcNfkwynaAXM7UMP3ouLLYwE9MVee",
  "key25": "3vAz3qfzag1e6vyhmA4hg1crkNXVfXrywNWQKtfyLTmHBe4V6cF1JzJirRxWudBHQ21eV3KspEXi2DVxTPau6BPC",
  "key26": "2h3vJ4RQiQZG2WJpu8ypEUWRxUshveD28ubsUbGmq7dVBVZfv1WqhAeSwyAkar7cES2bNPApFtkzzJM3qWzoP2J1",
  "key27": "24BhTCZbH7rmHZjAJ3pq6fubDzTdcgZN9TYDnjAoR2tQYLiC7fU26sSBZ33pYVEoXyf4ZF8vkSPZhtPWrwnEizFC",
  "key28": "mG3RLWq8td5t4u6GfVj7vgAKPKwHJz2JFTnscfMub9W3oTq3ucjmw1qVq3xqCWdCd89AA5s7AQ1buLcfX8dhpPe",
  "key29": "2XNT6ia6uGawaX6Nm1Rd5QUGLkk1XhixLwd1hNtagf8UvkC9Vn3g263AqzkHjfxn5EobzdnBxWxwT8BD3erLvPSC",
  "key30": "4bURdKyN7CMMFzikkUyUQTZJ8jp4Zi4cfgGQaGZktK114jpkhnmXYiVhMXTdQy35bHTqMwuktztjYZYeteuyZeiK",
  "key31": "4zEhEKpSWCMZvTwPrgAo2iaJ4dDE74XDxMwpyw7BZXE15dtiGN2Di9e7G5hh2nghAiB9w71MEJjsVjSy2JQJ6R4H",
  "key32": "4Ed5gmPHcPzdaQAwUupSu7pgtyDVaXZhknasgT1Vs96GE4KvsioesLXGuVUFhVjKgobHC2fcWBQKLfUwkCK7HpWZ",
  "key33": "2DeDLwDchxB2RZKAssJr6wYuvbxJ99fZAB9CZKNCYT2wAGwWhreKnJpbeTq8ZLhUWCevhxs3nU5TUg1eUaxjbPsS",
  "key34": "drN5p3rmHSbtd1DeiJGScbWmGp3sTpiJmt97EYqrnPk3v6YUBawW5rRLEpjzyCbb2uYoCEi1mbKjdVM29it1HeT",
  "key35": "4TJycu4odK3yJbo6r6HPxRTnuHjkUUqgAAoRb7TjUe5hifbZ21vkfkchEK63tj6eh8pNyhNZB3oGmUL3udjYCGp9",
  "key36": "5fbJvHUwscFAkpRJne3Yd1spU6FdHFnfLw3f8vRvxZfmQhsEbUDwbbDoeeN7kxPpzmz7ZxNfMtKFtXvqBvfrYs4h",
  "key37": "2oy5DucuNEhz19DdQQpRNUgTtwr1qHRSm5HCCmugyLcmq7Gw3gycofP1bBUmGpCJRNqh3zAZnZxSsDihdHqQMuUx",
  "key38": "NVcQMzwvRoRKp7DUs9tQVLjNWQREiiw2YLb3RuG6Y1bbWmV1inzS99TkDD8HvdMuBCBcyThkNc6ycUCm8uiGgyL",
  "key39": "3KJSADkAdKpdM3894nCipr4AYPbZZAb8NFKWA1EC45Wqg581WwHpd5yqgShqzJzHUNJNfZXZz7xYtxCEdjMBCE9e",
  "key40": "3GjZAUF6E37n4xvwTpR4CuGm9bUVWz723cQtSEeKShpyY3cxQfDi7Pv3Xzbja2tAuTdiS1A32ELmPruKAZCmYtMT",
  "key41": "3LPXGLkNT3ej6noZaW2ToMAeDtWLCCH3xcBGXUpPyaT7yEncZpw8iijdfjwgWa8LomGizQY1raBTwn1KFrLXGr8n",
  "key42": "5SVsU7XzKiNyHf9DNVfWymqRbJqGMCGuV9mb9355cRm4uzdNDfYVd4iE6kvcVadjKhBN7fjhSdW9utETeMoigfaR",
  "key43": "XbKBhKWoDbQkv6WLtECA9RUtJmPrNSigrnnrh4PegEUD78iz7GZ8sFXF2hKPuioxa56hAwJUsmDi8iomjyb5ars",
  "key44": "4vwnwwLqGwe19zFa9WP5Kdkg37KWMeNj8AZh8kArdRQvGHJt78tjfesQsSdxttzYfy1vBnPqktTyhwgpVqS4Wzik",
  "key45": "nX5wWyGJgDYm97CbADDhYL8AH6pcxpbP3bbwUchKMamq925d3D4PYfVRxxXoC5UVFWZyJGBJFXsB73nmsy6CXZ6"
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
