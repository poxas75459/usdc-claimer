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
    "5z16djW8PEpxdNmcQ5hnPSnA1FbgFuFPXncbXzwtbdm2jHrnR3foi7orrVWHaWmLQkGu6RKWp1ksEvGNz2An9n46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ftPhFfHLjaSrMUf9t1NwrRHjd2mJ6zfMY5cJnJX3AobuH291jeqNpccJYJHn1TZyzgVpKfRsFx6mou2M1fPAgiH",
  "key1": "2t7SH12EaDfpZv7fstVdq6ThegqRCHQMLmD2NyAMrr2nbYqhA2GQ3xe4nAxkMu5eD4FHtkt8sfe5kqDcPNckfwey",
  "key2": "gjDN6CQWV6hyZcERn3eoWHbBwtFysaMq8ucuGy5p96ZD6wUUEYRyFj27RJB1MbEefR6jSytHTKLCtEMHnrvmy2M",
  "key3": "5UpNbs4fSkxpDidAsLVxuTNpuHBSmspRQNfBKMBMBHG1PoUQYE9UQdZzHRnpJ9XiXQv2ZwhCdBJhVGxaRefQ4ERP",
  "key4": "2eky5k8f4rTVv3znPPNcwx7ZQkQR8K9h46tauZ7hojL5XD6T1VTkKybXbVvDT8JogbZC2TEqZWQxuizuQ8k3MFZZ",
  "key5": "4zQ2176XQdabC966njngyQHdNvFeuSy51mWt5P41NBFLFkdnmUTKJKg2ZC9DRuaUoCUovRzCAASWjj2QdjzQzdNt",
  "key6": "2TCXFCTur3zXDKKzmQwYhAWiZpKjZo49SEAsZ7ydHFKzyDqvmuhL941mn5k1nkDevbgA5Th58RxpaTuqpny2Qyry",
  "key7": "3QvCQPGnuBGUnsUW8naJaXA1rnCrf8682MLf9Qgt6AWtK7tfnbs1WRengWLjxexMBdwqXhMNXfW4segwWT8y8Qb2",
  "key8": "5ZXScCjA65R6Wan6tSRCeSHuPyKVd7NSQrpZV5BdH5FQqH492EbfgkvA5mGhGQMdqsuqBBtM1GrwFfhSczZJ1Vse",
  "key9": "298UvCh1dfSZdz6iBktuwcF6wn7Hyeh2qhhUbMsvVGSPN3oBfrTqcNpJxx1PeQpwSjk5vXYKDWyPFdbFW3Xhfafh",
  "key10": "2uJBvs5sbvyiHq8vde36VK49BuTTViwbZ6EQ6Ct3gJfaUr9cE5HjiAAiaNNPuFZwojw79QStoAQvXUN25c9PEAoj",
  "key11": "5J9Ec7Sn1hG3a6tV4YZmoBbdtq9Piw2KrgcQ2RCj3KtEoXpwgTQY9zTQHj2TFexhGVii7Fasxrt4hoRfZMBvWb5v",
  "key12": "2Zz9mepmZA4A4rtcBhBEw9KB7gCnpHouXsL261aVGLeAYq9jVzuk8TAsSZYr5EancUNN9wv8njdq3se6iWcADNLB",
  "key13": "3pisXss8ecnebviGMRSRcXTreJWuVJfE9aU6ePoThsZiw2GdAnqFzWZbvz4XJrNuSmwKaDDWfcXxb2SwkakgSaiy",
  "key14": "2NKf3yzaGrfdCU9jjSmdP4AUeNUvyZgo4afnCrRXBDjWvVm6w9QZoaAi5NpLykRm2HmPcr76N4p1P79bo4WSMwjV",
  "key15": "3s9fNopPvAdRhDJKxJ8FSCKHSzH3VNhsvstmxgYW4BCXobKaDrvMEmACk6eE5bJmKfd1qwxBz9qp3rzkw26TDXJ3",
  "key16": "22v36BopsrStcFpoKBhHmp2hPd4zVSjyLrD5opnLXtGJEPfbutCfn2Y1Bhz4Jiy5uYqc74JrHHPAsyBw2zLPijgn",
  "key17": "2gNoho55y5mJLovGvf7DnayL5ujXA62mtJ3RTG7WFvPe5gshYSu2oUbMKVYrkSwM81f385qajTr9KezjVT5F5Tt5",
  "key18": "5ofoA1vDfMRKb6M7yo3puLxREq8cYtVG9fRMN445nqLdGmKrBeefVD3MexiijB8KDXXievN8871LrtWe84efiyTm",
  "key19": "4cuKZJhToiSDfeU5JauqP5DSLc9dDninzxERS732uTNJGAsoJ14fAx3ND4SeoTLVPwr23VAGon7gQbx3Dcon3D2L",
  "key20": "29Xb1Tnnu3WaD9dEQi5njr84b4KpBjyEEgo3NNQ6Nao73a2qsUZ9L55waTR7TkhqazwucdfUUfJARs5T4hPFCPzr",
  "key21": "LiWzMT5Jfn3RfUyPNaRbsNWRUDUaFpPmqvFdt9zpAYMNjAZAbM3UB69hgMoqaVTzeUmnFz9SsDTvjPbH4VChVhU",
  "key22": "2xrqg1dtKVy95PruUV8htrE2T8JXtA5Q51FWGGopfQtiQNfWSEzeDncsmDYAgXtLG8nozQ683nBhJovoGmYhJWgy",
  "key23": "Y5Cer8AmSPbKyyrELEvQqsfqbyc5VaK7JRWMD1LxpPYHdvebomKAzMinAzH9p6MufHEGsPVPsBmYuQFcdzkP4Uq",
  "key24": "4Cc13hDFFdAL3HdJotaVq77sQR45of33NMb3urGRGjYkyfashEmF2isr3Bsc94Q1GN2ZXk462j1SZ3c5DHDtLyvT",
  "key25": "51bk9SLso7KrtY7R5pM9Bx7SM6VhpGG4HF75wcZW8wxwsMFyu8jZCvE3ebH4aCawesPVJBN4Mwd6Gb1EApVCPEW5",
  "key26": "2diUX8aNYQaTf4hyMHuTGW36G353kKe6bXvKdvWqBjf5R57pQp32e7uTtNvr7EbMgSVVFKoZaeWGPj5ZcENeUrvu",
  "key27": "jNcJr5V1HjibiSThTVNwojKcA9jfUech6B2itrnrWAkyzBnwovQAxUrEayRubpx3EqZXVafVpbtCAjBE3zp3s5K",
  "key28": "59g1CkVXJmYaAYn9GJn2zw4eWUSn2zPQdvv7ruZQKczkm18LsYRY9H15ieHywnTL1AxasKDpybghTFRaUdksjuWW",
  "key29": "cWG4LM4wie3pmzzsU9rqcDNE3sHkbrpXeFrZ9d86LmskWHkogcwHiJzeaUC7ePdh5z2Ec26ZaGUMsrsqAughnpc",
  "key30": "3cZKtggU8hgcTy6k2qWhqDbXQze4fAovKH9ArLT3NffuRB65kqiJ2YJjoxfESbG6NjCBRaTaufEp3yZEWa4NQhAy",
  "key31": "2bYkssmJQL5o2oFyc3uZacTvb93vK2ZJodJivRydbHFjLCcta3kZ5aMSjmYmSESyva4XJTXpk19PfTmTThc8pirC",
  "key32": "3sn9EeVxatxVbGsLhsL5oniyJoyvdsVAPEYZmQFK8PUcgUnSaXeB4imupSd1piKcTnUdEiVRgDJsCqjg22RRkNir",
  "key33": "5fFz5PTTBsnLitJ6FumktVVPimUKS7qF567NZQPo2ck1DMZYDfcqWuKYyj2XF41CizM2m3hfeSTmC1K9weNa48h9",
  "key34": "2pqAkjPDvCnU9hfvW9Nr9RqmeLMtrbQ6nk48rMtNKBYZAALnFg8AoBGLJaKbsEwgpvjVs5CDr5BkMyGHiECCYQGt",
  "key35": "58grEW3XM4E2AWmTVcCbvKMpP5GkbHiB1NXNmJaY3UD5roNjbxgNcax4CPcR7MpeRQMFFLTYMgWBupRXkcMgpnWm",
  "key36": "2JDhPKnRztTGDMmiuArA6ehN4gD8hSTfunYozywnqS1zNbHoCNLx38uQD7rzcBvQZMAaEQKdd4A4puTQrK7GQJq8",
  "key37": "beisCoCM7bjUpvpki1622851xCfHRSNYu2NKvySi1GgAzU52ypsXLVJ9e5RoVn2bAmGdC1xDiMDpNcHBwXqQWff",
  "key38": "3M1GarXG3mAqF5aonhJVaf2hcoXESBkhSEeShLq9TxDCXbgazJDvE8Z5FJP8syeupiFLaCMa6jkYEm3PwVYErxsi",
  "key39": "Zsdfgb5AGdP16n2VxkoMZZk9g1YM5UUaWusj9f7rZSjsJNkJ1GJDDaP8RXLebKpEjGshfjJaU2VpWkYSPLaQFj7",
  "key40": "5BvwX45jAaSQahA4X9svNRDkAsgLqRUtppLZb1WuUAHYYPjL6LW38QvMjrUwCvJPDMYPywtNLQoaJsPyBAH5vfQX",
  "key41": "67Q5HzbPSoAYHsZ3RVa6aZWCGf34z2reVEtStwUozAxK8ik71vvWDSTw7Jis7ijeJt3KtM9j4dpWx32dANaQ75X4",
  "key42": "5svEL72q5vfMCPXTeyec2eD3jRDMQCBMEm8qz1EarQC2vjBkn9zZvzvtxsdvcf9nubg4U1ZQPjC98rsHSEseUEW8",
  "key43": "3TfsxWmH8Qx9etL6QSoVkpEc5eeP5rRnvoiYQCTGejvcvLN25fgXt5RwoMiKjxvpDeCzCq7tyGpHE6w1yfGvDvgH",
  "key44": "3HqXX6TSx4YNMbMuCF4a7qoVFqYYQdVKH66bPGQjfy3a3EGjNQrfndtUoNV9SkAidHxN6ihHt5FFYXQTSbhzo6Ci",
  "key45": "PLXWF5yrd3EQfYzCRAKe1iQYQ8zbR1ssSD6jk1x5NhEsLxbZD4AFgrAR2BjiYiUHXzjnxZk4bK2CfnDyjdpnNqV",
  "key46": "2YkWVEggWYyDSkPMszUesd2mH8Wt3rVhjADvFmWJRMGP3LVcFArRuZGyEUZ1tMJ6ihSowcsoefjqMcBYKVN3gvUc",
  "key47": "58XZJGEBrHsGU35fhZMY16L4RwwNWbTctkaaCc4UJ69TjUbgfx6i32ZCaet7EbiH3bBSAJpJst7JHrVHpnwvNj9p",
  "key48": "4vwxDJhRfz7PBNb6LiNNuNDuVfvt8i9uLELuVeDJojTQFAQELgeGr7mNuhSfMq7NqznWQu4hY9FmogP3WYV2fmzF"
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
