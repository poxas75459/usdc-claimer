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
    "56zVs9NPorFkuobbE6922LVtL6mNucYxZBUwvhe8QPNksSgFrekn2VjFj9QYhQKY4oa5MRC8dyfjzgN3VYCrKhvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z25ZwcfXf1wHXwJUzoRc8GJodwGzjpZ3PHUePjFVW8zxoLSFJ1jJM9uCoXCXkDPq16BvwQ6kQNnQhNmoLmPqKPD",
  "key1": "5WRBAAUpAvBWcyc33SoR9mz4Re5HyyGNBUq8QbdogU42M5ij4N2HiDuJeHUGG69FJHdCgLPuTe8hp7Nvx7H4AD7N",
  "key2": "54VhPb4jqxZzkXLwtCAW8TraNZSf8qrQGo3TemucLvKjQppMvwhzeCK1gRojQdNaTHS7iE35zx9gnGgeFnSqCGrf",
  "key3": "34hzxYAFx4fgHw5XPATJvEQrtNwsW2fkbgYmocEeVCdcyu9zymFjkj51ni9QHxY1q1tnJETFCxXvKYJQkZ15D4MY",
  "key4": "3ZHQvUw6g2CFZy6LbrnXkGihnktHtzDvFVFLHy2HvWJRFLVz7Dc3mAJQeBTV6r56FsHPScYx9KQQirAHS6fWLEZw",
  "key5": "2rNGB2vCeKyBARbKSDDjM3iJ3ejJ3QJTd1oGuNnp7gwbJ6YasARW7zA9x5N8SdjUwPjc1DNA7m91YDHGnrewaP13",
  "key6": "4Pkc1poBujVfYdZHZS3hNjDTrsoYTQZFFwFf9WWYwkZZYzTCKGStMihiLxzyUyVFoaxEQCrLnpwk546NSC8GdxRQ",
  "key7": "mcKU59ca7fDj3oY1iDzpRk5YstHUKiDxcyTb9QnC7LmfaCse8nLf3Km1rmkRZfiHyruRrYMSFogH7nKYj4gNRkF",
  "key8": "4J7ZL5wnmvS2vuoagXLj4t7t6HU3sqCbk4R3SA6X67NJQXhp4WCP9xjJDcmtbpojiCrGh4dtiGzdDczkt2tdeUZe",
  "key9": "4yZGVZymQJRtPmfoKsjVtowCgHf3Yyqja7GQD79SNH8CdKveRKgYm1GV8k89iNGpoGwKWBPxbjUp7LF156DGzivY",
  "key10": "2d55uR2KFuByTRuTi5fihUpBzqgpnJ7hosEyc6AAYgUvr97DBK9pLeQ6em2QhZjQb9Y5y1r1275qfaStFXCPMtHu",
  "key11": "3sA19Bxk9tAK6t4n3E9reJccqyArq2BwRgQg1Xyr3XTTEQ5UZrWvfxVeQfSazkRXV54TLDRyrbRW9KJZguMNHo6t",
  "key12": "5i2ctqpigrtXRY54BBZf6SA7hmfpttrTMBxoEACDFziM1ace2wCeWQQwFvdhXNMVo6RgcrLPc8jFKGPFK1doeZNC",
  "key13": "nDXpycqYSqwYYw75P6xr3LwREg1jmBcPqibkhBH2WKD1y2h9dqxFqNewMznTDtkDxjt8w4kEX2TY7cCrkGhxqmF",
  "key14": "4MVWZvveS2TKxs99Ue5QS7UroAexKnDephNfKhUAqFyu4KgKfsMmwgPypxEhhAGzcTX494coSaVuqNrkXbvbi8gF",
  "key15": "3V8KW6t7jWmwjKdrw17cGQBrPuK6uFyqMRmFtDF5mKL4djMFKzy18dMKP65Ht61aHJPWmvNKC3VkJ6A1Sv4Et8Ki",
  "key16": "5dCGzeXFqnTyen8DYRu5w9g1yq3HfVKtoSofKebVa2Z4x7WEF3fjaR3jY9xKyvXoKf5Va5zCqfztoi1UQcPrDeoA",
  "key17": "2naifNB1ikL5PMAoHrfuxjtrwCoteCbBoo3pXjdVAG96ywea29rKosLsr8SaYJHu3c1YQsCGbV7Xn2QXn7HTMBCy",
  "key18": "wa51rnK36jsQdwNXNA5Mjb6juf5rv1ndwyXnzSS7My1HoBKhHuDM4ZYVnuU8nPJ4eptVmmRrsuX1byGRiYQRN7R",
  "key19": "2uFgCxwS8NcCoiEdqHsajK3rMPtzrQPJ1F8huXihZL4YSVPZoMryR7mXwz1s84o1e6owYDAdZhyKHGA8Jhqmy1ZQ",
  "key20": "4bwiKB72zu1pTaC2gLcLoN7cAN1uJbtRigSe8z29ch8f8itE36qH94AT596MdXFixCF4vGJW7VtwtrCFL2fQmhhJ",
  "key21": "4fKxCD1W2rwpLndvd7qBCpHcErbSi6oiRkKrNeeFxZKYAfJuvHAEQiaK7vaWDQpGNdSWCGoChmxsjZ6uxGRB1oxG",
  "key22": "cpcrZbvtgAhq51qhFppkL47MLcqD6DDjgdMF74fhCJoaSPaCK6YScC7xQ35jm5rqBhHkJ8PFRuMzCMT8y35yYuA",
  "key23": "4kHsVYJs8GiDebnnNtUD1ycwYCRY7Wd698zw9SNP9ycpr7eEcEhpp4h7o56xZmkujavRUnd8HWVXGGcyiCNarcTS",
  "key24": "aaZ4tdfdkiHCrRxLgSpe2xRYkzZmCrjfyV4Dg7ZAd5aZNCzqy6vYjD1XPCrX66DMMDNvyv3ebeJZYkgT4BZFwUY",
  "key25": "3YeH3febzqRLJXogqbWzW3uXQjhfZ74DhyhPwhghWUpxNVCNYvByczWWeubVy1NhaCkQvQEYgzgbvgwiTiXbgEsQ",
  "key26": "dvT8gEDbUSWrhKbP6GB4HLcEPr97xAVVU2oxKPEJzP37bzK9JYqVyE4NPFNsVhSYUYTWCMjCT4NQKr8QhvJ75rk",
  "key27": "4qyk1dcHZUGied9CefwCzFKHiSwQVQ2wP68UTCgsGs9ncDtbKhQFsuRo2PT4QwjEMQG6yiTfuzuqc9jn456wmbak",
  "key28": "5S26cM7nusxkNxKKw3xvP7Xx4pLWXGCB1q5ZqqmGrrMeertPNK7Pe6hXhFP4XZSDZc4YW6MhwGMrcqUysXTCeBfF",
  "key29": "2YNMoxGbUVVFL8cjL9iBcj1kX4P9jeUPbYdPDWdSVR9PfvsuuwM2mJrv295QjyR5KKGHAmGWscE6VZjCvBuwwTkh",
  "key30": "4FfQP6Hbtg5EFJHGVJdxZrmokg75RcTHzNmiwoEG7TCrtpvcmyWBe9fQEFdMJ8NCj3rmBBMRC4iQdwDSPjyqoDgg",
  "key31": "4pEHu8VdEuYhkGhf1DUAfUznpBH4DGjZHXhEb4ZikwaiCJYqrdbMHKjq1czy8hvDtpZAFUTHehEqrQ9Z97BxWz6m",
  "key32": "38DDra1RGd3fVXuCrvCjQNFjT2rwwgkq6W7GT7yWNXvYTUJTgh3pPtCU8NHTLfr9f1HSUkWE8QnBVonF6GnSn1Ns",
  "key33": "5QQTme2Po9rS3C2hJrotCZTmCmZXwxF6VJyErxzxG61Quv1JimGy5MbsT1A1JSdxAsTgYFkXy5xCVkWqyDN16Qo5",
  "key34": "5qDzAXLZZ73cxiwMXrf4bv4zLJMRVZni5cF35CCfXYggPMW9yeQF15icv2dfyWViN3uD3NwEJrgE8jBAkVueeQcw",
  "key35": "4aQuFvjbp6P5rLo9LTAhB2vVPQgfbYxLGkqDmfzKrseAEUewJW5buTZVu2fV4g2bCeuAubSKR6GoW5WZaL1znufN",
  "key36": "5FTESnenZ2rf3PcaNUDM21iUtPZPaYyHHKd4KQBuvxCknCRgX8xcookoo3WZyJVTPFtdny3YFwdvHrhgC8vGZWrh",
  "key37": "3ruAb25dco5e4rkNKQkjbAn7v1UBdbp16LZJLyFgEAW5P9MeJSFCNGQfLsuQFqjPohWi2iguDjevFho6cAEE4XeU"
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
