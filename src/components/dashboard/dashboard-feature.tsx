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
    "2YH5fJDrPrmERKu43JSkMVnYmdKVziCAdgd3bWMx34fpGmV1rqNk3gnPzG3yNrFhxx9kWtTSfnUNLFvMxEGWXYGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PspNA2enhMjo1aMA6WtgYfrUCXP43gNc8JAYwHRRzxtMvXmi8WZNEPMTmUrDZA4vg3JcUF4jQPeLKoo83NMmBxm",
  "key1": "34dd4LAq9ysJDmVL1Ac1uXqpec96emhtAx6iFXnG4rCrM3WnrvBr38uecuAcfp4ManwayMzCaieFtvEaDKDE5yEJ",
  "key2": "2soXKPpBaFqrp1wNEzgoe6hud2MKn7YGhmGr8HftjJe6xhp9bu3dnumhMM6oZ485gEaZ1CUcGatydYEH7jo6cu3Z",
  "key3": "4CrhNiHpY1WMnf1wsiRHWk1ECYpLF8ANYbJDVknBAXeD9TaqVQxsAQtRBQoFNS4sMAb8ebEkhwuGND2Lod2fqo2j",
  "key4": "jJMgmoKw5vvx5RL2joy8nhc63pU2cgFWBqzBhK4h9kmXk3mEziTRditQ3tCiihG9PgsmCDkivYXgeQffwDLwk7a",
  "key5": "347oHPciSmdjVvqZBLTXVKMt39WeYzVxxjztkS8K9aE5Vkfm1Awrz87nBRHsymu8U9M6TG48waBmshaJBcbZdxAc",
  "key6": "24JcJan4eBbFC3RW863BFGwgWsQ8LsgY9R4gKympRtkWp4sAsG6tXX7jea5KJEtj58m1q4suM7Qg3smnbcrRgPJQ",
  "key7": "2XJeEcqy2xfcyBukAvP75Q1v7J9jaiFsLoyG9KiJm3TH5S3DyGftHsmEWT9jXuBHjQyNxXwJTXDuPwvcBZDAw7HH",
  "key8": "eVpP7ZRG45hcDpgmYin86YEnnieuQd8WF6DpR7bwDR4JD54ejZAXSBb64yi7WHAyihAT6AmqrrcJhdndrtofjP4",
  "key9": "2bvW2pNo26VoSUteBKHJebqgFQjBiS2mfG8q1VAQViRyBeHeKmPeoCXJ34qE5DxxvHmX6KDjaa2Mz2uTvErWUNPU",
  "key10": "39Y84VJf5RaQXhrh6SSzpGwX43x1WhWrjAATKgbkwtuUJoamRQqomUrB5GfRfvARXgYoqJ9jgpCCYrLBWopPHBbk",
  "key11": "4v32xd1531SyGykGzzDK5Fj1bRo1fnfLH6MZrdUrc5xRwrhKmeX5fHWHQ387RqW1cXVGDLbsit6rdUM1GfxWXM8u",
  "key12": "3wkmsQkvk7CU6nozGSFZAFwCcAVy4cXP2SHXarGZwreaw5JhxEX7GpHWV6gz5xXm17A2SN4K1UWea79NUzLe8Rxr",
  "key13": "YFWqLBHJ6Fbhr7gr6KPMSCWxbyvjuBNKCG9EEUzQ7exoidVhe4yHE8AgnQ8BXZvZAEn6m4FYkQ1eDCjtTaF1RyS",
  "key14": "27cQoqGM3Jxg6WN9yXr33RuYVorkR8N2VDLDwjX46foYUicTs1d9pgnfbe1FpCLjeok58pb2CcBbMDtsbhzbpGiK",
  "key15": "2RJv6XY3nDSPhFrZa3HxpEEPmfT5aYNMwx14A5TeTvTbbHRtyhgfD9fUwnJXXsw4tLmQSwEUD9hUgpHXYyfxNaEH",
  "key16": "26cPSwVrGwhr2m3UHyfHV1jEmGB9dWBo8WuibBFRMumEboXnkWuBqhhuw8RQ2TEY87jcWKy7JLAufja8ujWNimST",
  "key17": "3WgiKC7SxeX8XucHr2WPNPdRmdybVUyM3THZgiDKY9PTRT6M7W3ke5kg6bmxc7VtXjAwRV3BZ5VzxAQ3MHtAyAbj",
  "key18": "5tsEXmTDsz4E41Z1VUirfyUb48riUyH33H8xzQFL7WGNMUytyHJjBG8UnuCTaoJLeQfQ4a7j7vvgak7HHWZfdqgH",
  "key19": "3Q6C43cB6E8SLZrukJTnwJbaDSudgdNwP34PKFjLg59YbXTJNZWePKLAababnT2Hi4GTstymdKY9vq2QK3tXg4TJ",
  "key20": "4ZtwsQLV5aZAghfbUfqFDnKWa9TSoAW7c9mu1A6qp9MZrvV2LXfTGTT8P1hEpyrL2mf6K1kEHWarMLzn1Agfs9sH",
  "key21": "5mHy5zjoaHJAdJ3KcQBGGwFCx7juFkfwvtsJaPvGx41PwiLAXcQ2NmXkGvmeJf3dEbrtuU1SDPeQykwvoGGA9jHH",
  "key22": "59CnUXE3nrgS5TycLt91pqpk428bWC3phBDUpQEU6hnfoMqweWRWJi5wWAyx7SxhEeu8ocf45rARJLiJi6qRkDUf",
  "key23": "4SvBaucVDEsLVTvYSQhytQxWhkS8Qa41farMQa15GG2Hg82XjE122kDcRqWYv625derSZwLU9N2LCm4jibJPBjiR",
  "key24": "5ekYLqwrm6rm5E5hG1Gzro8mL4SeFLjBVUi5gMpa6me2iXr6QMsNH44kaXKGFGwXNuJZid3R1L8CdYm8THURkNUH",
  "key25": "5AJxh4kgYjYxPae66dUV6LjDqwbbeecgvAr7ksEqZBE8cwiMmtiTjUtsGR1jPeZ9pnSCJNHSt3QJ9uYNitCjAXd",
  "key26": "2FCW2C1BFNAf867wd8Wg9MELMNGM2Cbr5xP5uudC9GZNtM7tcEm1uPT1iApkZJqeRSxNa6wYZHSL4urtHZv2PLn8",
  "key27": "2fzUxmTPsxeyvAVH7wPkrrBSbh3JQx23jLFigx5MaHRCv1kNsFZb2ox9Ftw8zPwpNNZnL3TR9DePamd9B1m6hhha",
  "key28": "22Hr7beKqz7Zs4NVAgpMMkyew82HuAB5XmcUjypSvLpJfEhMe6oJvkyhWJxgsnfzdFUTBo73nGxrQoBpMM6PeRhs",
  "key29": "3Kvj3KsE83SMmA2rpcrzzoSbHa44dnWcu9x7mHK2DncD9EsJAfzByEBNqmVVKQWuwwumeury8QwexGLibgVGPFyv",
  "key30": "5JxkcZJxp8doCUjHkDvVNSB8sR3km33LNHWkakubw7gnKKWMphFXT8c767Gdmw9NgfUTVSX17KkpGCe4DeFYUwwE",
  "key31": "5jeXEiayJEcgjWqh8REJGv1oHhbLWNEmb57kcnRAWMXXiNXJE4FFigSGhhmeH5n9F2FrgLnt3ukpVuqsaC7sMPoM",
  "key32": "2An1eXMqRqGdzK7Q724HhiWs7sNBkRGZDu8buxH1wy7DXHuuC2r7ojffwJ65aeoih4LSrvkEvYrkazwtXyXUS7nt",
  "key33": "3pHbXeStEDW2GmyU9NupDoWABheLU5i1o6LYJbUTrhbmMuu5v1uUPBrK8F3pjHRyBXLBKwXy5z4ADkYtPwtM8MPR",
  "key34": "36EBS2TEUEMwcJZh17PQ2sBHkJ2eYrtoYC1FHbGy4LMHFTiY6GBoM4dFmFxfBk3J4H6uiWztVib6pHdbGdzrJo7j"
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
