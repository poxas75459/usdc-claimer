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
    "XugxH1Aw2FHr2RyyZZjC6eyAU7uLAbnCuoLBjXRhH5ZJ8Qb9yhq8pmsEzqY1dWb9CJ8wTjBJaBx27z7Zw5byKRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61aXRTLqdEdGPNp2Q8kqDNVjZ71naBTwBJ55q9HU1GGBWE1fKi7BKBNh7P3fHDFtrgKKpB6ABXiTnaYmWrHPo5AZ",
  "key1": "82PSkfV9DdEmURG2RBf3Y8crw86PHLx6iCMepUTFvwRGgpDxy7a7W4bWWw5WeEdTqcyijfiHCwrEwWEKAC3z98L",
  "key2": "2FE5rQYWfmxyeNbFfi6WC887Dxxq17QX5TJxuGqhp9ANjg3NsyLp5voF1eVte3MFzRBXfowdEXnNGJ6J8eMfkAnK",
  "key3": "2gwKvURM5SL5vwASRzYWhxPGhH2tm2qn5k6rtUibCeFxTgWwAWJf64CDmgzUksgdFTMqZaoAvqr4KHhRutvhsGXb",
  "key4": "3nVHrUz2uZ2hauW4EEd2zwbTUh6XqfiNtjAnWepzJ3SMve5DR4PmbKhuZ6baKHo2JDRDzhnxeji2bV6K8HgznZ4Z",
  "key5": "666R6WWZPBWch3QtgiDWXVFiKfS1zPNWeMgWeCivHQ6uLzNcKGzLgzsbMwY9WNenZvshzAEj8bsJPQjjkhNT3WB",
  "key6": "43z41niYcQvKx3TMwsvsmy5RqCBtq1yuKRkogVfNwUcsggMqmQb7mcbCjZcCYgfJAjVtp3SREqHAPvexf6o85Tvi",
  "key7": "55VhSzaiMykQyX8pWtc7TJK9HwcD4DCmzhu211FHMcvo5K7fFJA2HRko3ipmPfviTvKHJW5te36ZwnkW8Eu5NLdE",
  "key8": "3Fpuv9Lcb9J5YpoT1JjfaHHK7WJcZ1UqJT69KZbMRPTJv4kTyCuBSaULRJarKmWVURBvVkLTSiPA7MqkkqEPimVr",
  "key9": "4v9TbnnDsUmrLse1h3oU2CojTKgDy64gR1knx6UXdFfcqZ9pW2WxW8gr3gR6XoChVNLktDbTe7dWGWsTvaPuaaq8",
  "key10": "3WrMbJTF3nyZetWbH7mBMGuBpcHRUPwajubfWkF8nvf2xYMtP96rDeX4vgcwUjYNvtntzTR8bVMFcdfMPHGCCt7H",
  "key11": "51cVEnZVCM2qHULFU28YAp6q6zzSFEuipLnhhtDGrn4DsVu2rViWFMK1He5kHn6EGqiC44xumejqZvDhGBNaj1XY",
  "key12": "2E163aUxZhBZcUYRaEH1bMMpbzVgakR4SmDRK68Yae1SsnTmTMv1Fybrg3nThzU6cPULxoNmGCU34VnzM5RgxYyz",
  "key13": "2Z1y4XEC1E7bzCuRb7fKyCT1bEmtcSMbgDPvqnxfEeXXe8wgJ8u1qsvxk3KE8NHxVWiNGmxw3E2Yo8TbnHpRtJhv",
  "key14": "DvB5DZCpQ2b5irALumCr6Cd4zB8ojjmSxyVQ83YpKWqikuzvJHiHPHqxmqUQ8WkJN4qW4KNp6QJBjf15w4Zaf6V",
  "key15": "3kaTuJWRtHXxS97uzwXabgj94CcDnxfZp6h4aeqrzBGEPbrDMZ9jre2prXg55RWTf6z8CvBy7ouXXgj6iqeQpecU",
  "key16": "548bdiq1pU9QStKXf3ED43ZwUh1kPW8eiAPuothvNFM51q1EbaCWKT1K944xtKtVTDQo2STCmSMKFQRsRxUehnAN",
  "key17": "39LtiD4v71E8NCjT6PMR2cRBmRgrKmBk36nShzkk35CSB6kHwWjtWqPa7R4guBwpWy6atPareWb9LMbTHebub7hC",
  "key18": "2sjMX9KzNLY1W9mTQv6zdFmrd8Ja89PZditHEnd5x4ksojtaQzzSxJwAUGgCLmxfLfnzbfzBU2jEHdJMBqoeCZyk",
  "key19": "3Fb7i9GN89qanGxZnJdZE4bqKsQXF3zkgkmEsebr5nWTQN5PBNyGBwAeaKvE2feWmTRWxWvC3xFJcNRLmRYbMF71",
  "key20": "t3e8fCrT7zegcJf4Eh8LHRbjMSW155r1J2tfsV1LTcNgXZuk5S2ZAumyJn3DcuJZ88tgVCC1DSEiocTRE4e1i8T",
  "key21": "4vCAUq3WLydPHNzcTZif55D25AJz24JURVqDsy5s7KPu9J4uZfzos3uqDPNjzLbYc4C38LYrr6PuV6QUyzt52VRE",
  "key22": "5wuajm1NRygiP5qvpzN89aUSsT3XemcB8WosJ8VxwcRpM4XK3rZHZAJsGnhT72zhLVokADdVBWpLujRCQaF4QN2U",
  "key23": "5nkeENd4456gbfDgCFa9AdLheMRgCiCLMNDj2VdEWNLAuCe7dApTGUhwXp8ptsX1eQK5HJSKVnAnLXBdY775dqt6",
  "key24": "5xq2gnZcs8YnqfRuTCBwyto7EhSZ4PQjF7V9XdyXj2myyy2QXpoFfZP41o8CqAPH2sbkvixVKbmAb4wQt8xjGsG6",
  "key25": "5NvnznUptAa3jXoSsCch6KxjXkTLmBWpoNSoNbTiQ6wE33EuQv9hczjMy2qtJRdqrKNf85tuukUVpKN2qnCV3vjh",
  "key26": "46JfWZ1jJso1TuBhLpW1agjiT4291V4KbyL1LB3GwkUhJYFNHEA3yZwB84BEGAbJfiV9TSEBnsvuztdNyLFRJqYa",
  "key27": "62DS6EyGfAhuyPbFK9KmmvgRktQ4Pt4t7Zrp7ikoqBJy74qkS5bN67C44oHw5DhB3Sp2VZpuiiTMhJtR6BkSEHBU",
  "key28": "33i8rzBWZ9qHwkKvYQbRsZRdvWJFVxB5zyA32PuBN6xv2EJAPcWBa6pUVT24E9tXKwdFrYx3Kus5nrazL9fJmFPq",
  "key29": "3bcNGin3P1B8UXX18AsbDrWDikuPerpEXkbgv9YgFc4dknspDP5eppRhUFg31MSVxwN6zcYDexXsTzwce5w3v7aC",
  "key30": "34tWa6zmyWRR8KHaBy82P4E426AcLKR5gt93PQstX69Tdsbpj67kxnQVyPAYcV2nyvNZ4Vewn3souBg8D23oeZBJ",
  "key31": "4a48z4QzrxYQyciZVwiMHg7CacvBczE3qaxvy6bzdBo6dBaku2NYbQ9ihiPSiZfaCQeZyZzKxsbzK8vT3t4WMagu",
  "key32": "2arsHCGAERRFZqUfBoKeiuG2x3gATJkXX4KHscrRa3V21tfervb32nGbAwB4iUZA7p3v1hTamTkPy8EbEgio8usU",
  "key33": "21PneRPnMMSDDfVvTMnm7wKrJFh6DwvZiukuT9jSTU4Du41QCrE9qymkVAFC4SZfZxub1M2kXhrCSpxccjxzzdUQ",
  "key34": "4tccQBvozrN2f1qk2LQLH2tuEtDxotq4EZYvdPXBh6Ttbv7jWbJEGGdctt3QfvDWZeMRaoaRPDUNR1aZhUxwHu7M",
  "key35": "3Uo7nbzg4ykZYFJqmrTXivQ6Qk1mBTi34qe4MfKSHuPR1Nu39gGkYpxp7iG2fDgjxTdqGuVcTgZm8Qx1o7jXZjGh",
  "key36": "2XyaG6xM8sr1E1vHiAH8Q7YvjmDGspxFeXzs9YZrkriR9K6f5BkvkLXMw1he2aLpdsz5F2Tb8k53hET5T33rkNA2",
  "key37": "4q6xufPxi2bLbeEwH7AthhpHnyzUUSjgfjNuqDUfwTHmxxyTaqdQ3J3Lia3ECoQq38nAgyn1oiK4FLYPqZvnxF7H"
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
