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
    "r7hp6Gc2P4CkLsHgBna9GHNaiZ4cMEC8jB5kFbSCjtQdS1DbUpxBMGzKMuaXjaZMV5e8yn4EMHgBJWhchQi9Cnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ieNZXLYE8jps57aMN1Si1CPz3Ti9XPsfuMq2E6eC7U13sSxdW3f8NqUpKKS23t6RZk7y4zbJJqhLeD5U5iodVkk",
  "key1": "5EhYhpfqjKJwSZK6L824rBUbxf2ozMubJFMQtwUVVr7zxDcJPQ8TvWTcGoM7crdD2vW5p6LmLdR8hAsRMY7ENECm",
  "key2": "Gdv42tcg5nm4vQ3jmuRaFKq2YML2UpsefimsS57RXMkUMETXcQQd995kM3AZM4KzBxAqkhbRuhjznJppKf58rcq",
  "key3": "4hwkcW6K4gK857JMMMYUMnSnEExcDGMPBBsfz6hgN996FPLKekN7Y51pP9k4YnHDxonwaaHXPe6hB6tMNAtHYZyT",
  "key4": "31abgFDvWMJqsqZcoE8qtSNKdb8exC88w6HwJszmAN8rBZ4isSsmFrtT3ENqdXY4B6N4449fZtKH9NsC7qCassSz",
  "key5": "Axg1xdUtNzusBPTue8AsSEQqMinn7DeLMHiEpuEPEpvV4ojQBnBndoiinsCPsTm1itV5BitHzp6L2Eceyb7U8jR",
  "key6": "61VDFAkanYwiXafaRhDKuGrXFEW596ALZ5S9ygzDk47r85wzCjNCq6unT89VjCDhA8rrjwBkyhMAXVsxVb7MjAYs",
  "key7": "3GzA5BuHQaZSgEE3EcKAuWpC7WaUAcDczwyWA5i5HUdCADFGEsoHZWEiqieSuH6cNZSTUy9bnAWKjrH7wxrmNDVM",
  "key8": "3mwadhzG9iqddUL2PCoSvScgPZnahQ2sxkZsmZHkgBocSAvBbuzFq7AyhuGqshXvZzXJtDLBsDJQM4gzRdb1aSQR",
  "key9": "4khbGvCDTPYAT9avsFsVjo5oqPmuMxfcWE86pYuPkte6Q7BWCDbKP2JcVDcwXH8E7CBFjy5AYmtbbc5F1fbCgno6",
  "key10": "4dmkTGqGoPePVj6PFyFm69oAm9tiVbp3HA7538dWfiYZhixHrDVkNmZaR3TVbiS39sE5owJU5szxcyQ5kxBuzPQf",
  "key11": "4dyVyxzs5HnE5BKS8SDX1c6kmctdwQAGGC4LXJSoumjQMcyNyzD6bDwMB3FVYhx1NgtHtK9SaDXxcT8tMvpboKyn",
  "key12": "5xkyY5rSJ2T1w4ebHwyUAhP7o5FKkA7XypMtMjWno34mw5wR1Y95Vgimjw3VckzuyL7yytXf6FuUbEYMybrAPBEU",
  "key13": "5Richv9SS9GbpoqRSqgFQS6qvi3tcACeftbRq8FgKUj2u13ycAXQTzLSGd7Qcf8QvwtLHhoHaJjCTsv5RrrXtjEK",
  "key14": "fU7RMjWNvWWVHpZCUT3CZVNwMXHmbPAbq4eejZw4i3jBFD6nrWF68frpmV3QVhwMHABZwNugVwCzuvpGWgAny6Y",
  "key15": "4eqkA2muZGqBqsUoZu4ivY8sgsxymB5HocUGAdbsS9hHhszcgF8iudjMH14nZr93JyZTGARcNwuHUnyw8KDq6cUN",
  "key16": "TbtDGJC4qGMKQRowtgAqazWYG1But1T7o8nmpDJyazzFEYrb2vbGCZHKaziZ3XG54uVSeXui5iQtw32aPXHpdcq",
  "key17": "2WPqmzKHMjQ8LnLNWnjJKYsqBTs8Yw23JybBF9ZZcjbdaQWCPqQm9auLP5o4bwjmS9STebAMpcG6gbaG6AE82fpk",
  "key18": "3h1uEQB6t3sn92TUVDJQJQCYrtRdMJ91FAvSzVdPzHnmSCbYUUAJ8pccivMsFeWjkigcX51dkDqSzE8hRjv8oAVs",
  "key19": "4cDCyQHPxgTPFJDNizPgiLskDphbXWFWqy6PBP8AtKcjn4HbZrXATSAtxbpypaqBCBAHZYfwRxVjBMtnmZR1Vnmc",
  "key20": "3NaVxuc9Q87JVu56w1wxeNmVcLV2cMnqWYDKHkBTdz3MY53XXXh54iDeAG1vsaaP559iCfggifjWbYK8Yd7AKhdf",
  "key21": "5cYuzj5MaSjZCye8vGBZxGVtn8F1Efjj19R9NNa4gHYuskrGT5CGBoYvdutHihMWgWufoxgvUL1q7Aj8AQdjiN8d",
  "key22": "4Be8cgaov5tc3FEUB1FERkWNwsBSQCZuJsh8QGtk1iLRD2MdYhydVK2qWE9YNj98UTiURNhB3qQTxS3knTVBvVAs",
  "key23": "4U5VRYoB4nCYL7Bjs2sA9rq49D85R6hM8n6nvy35fVHskHALVPCYdaKb8SgrYqmBSsK99VMS8akMdP4EjNjncTxy",
  "key24": "4bMxAX29W5WC72ejeiuvrL6a4zv6pgHDwj9XZztjsEjXuReb9fwNGeiBEcoQ6eNZLJMEormYSFc9pC1SnWGo9PaV",
  "key25": "4VfDd9MAsuHdez9aw4CTqGNqi9PxgxLgbzapGiKhrfafLB1BreJXQfF5qtwz1mPRjU56MWkgdG4sTe8kSQYZyhpW",
  "key26": "2iC3ue6zmxdHPF2noe1YmEYA7PK7gtsSyXpPQwaH5sAbufoMUaSD9Bo9o6rC9V3t5jCCT9nk6XPj27punnyAgMNv",
  "key27": "8ikq4RoSPHMiviDbvXdvf3Ai2vBdkE4oEY9shbRZrbkTLqWjp4ZfZxtdexZpCqLhSA8ivzDVJi2qMoDhGpaLdBr",
  "key28": "4kfWSXPaAj2ESLbyoLNErdv8hGsp32xXfBDXxwGVazXiPbG6XekyHTyPRCmQU9reNvHAiFFf6sgyHCk3n3YGv6iZ",
  "key29": "4JEUeZE9G9ashXnKHJspmiSt6NXxPJBxWPXkSyBFQugHQuRsbVErG1LN1EFSrBkwJcNw2BQn17FPTmJbqP5xb1Kh",
  "key30": "93FEJ5sSiZ3qxUsJPw9cft2JDyNCWVmaWjzvfaJtJCT5wecZ52ARD9gPhMjTFTdvUWNt3qz1QELvFydv8dp1Qqs",
  "key31": "4EZQGo8sE84AvvDks6zTCHJJw1eg3yETThjAp7zdPL2wDvQy2f7BQFstYibJf1K8TBYf5RMch3QZXEtUYUVNPMb1",
  "key32": "2AgrSmkJB1nQMqVtQXHRS8DxuUidTMJ8y6sqUnuBgdC9XCafpCtyAswY7UBDvS9C1NgRNirHNpi5jLtc7JNjAeST",
  "key33": "2Faw9cejncZ2WyJsg51xzHhR3mzxbvFuJQzq8heZ5tHEHDTv6VwYRRreeRkW7H19XChQZGoj2mvoR4wbHVjVXcZ8",
  "key34": "3aChDpEDQAL1Zav6B8NdNVcUMVNRWRoogYfdpf3tQJ49MeSKPj1vzRtTagnUrmM7KLni4GJEaSz95vxy7arewim2",
  "key35": "4BE2a9USJ8MPbnBufwSif55WTDA7HSzLBcuMPnuku38F2mc1wnzThXUpjp5XoRQzsV7oMu5TaUHFmJWb3K6F7Zv7",
  "key36": "65XUFhNt3BpAnBEnrySVY5YKVvNnvx1srpXYPFsrpM7JTPBnaPfnfMKGZD93AHMDGu21s57cwSNaWV5VAwviDsTZ",
  "key37": "4xDcP2nJWibM3MkNTkxAyewcfubbqAxxH7GteVywvkYr2kSLUhiZuoaVwGytGuhkkquFdd5i8L1U8YpLE6VJY6xZ",
  "key38": "3aWgRYfBcLRYCyFNn69feUTiUjLmmqSTCfhCcoUYiPTfhaJRMNseGvLJe75PpcBgzsgjxBejnZJkJ9RLq3ryZmZn",
  "key39": "TUzj1pciA9NGoxHSkTjK2EHhLnZBfb3nCHzhcd9NtbpfDY4W6qUvzbQrdMuQmRbdPZhAyyDYKSi5xejR4AX6f3S",
  "key40": "5WJchcGP5rCQmnJ4piYwkZvuuNKdJWLLmvHt86YDqekXXpBy55Gai2FAhQY6vXVpQU3zHahoUnvvXQC7wijf16oS",
  "key41": "5yQJS4jRFKkVtbJhhfd3sZPp4dpLWUtKGVNBA6D842aUpjubApQsugf3XGxUgjJAxAG14qANjtiaTj4dKTKfUoDt",
  "key42": "62TjHHY6aEFKbVNWZXNBaJ61ZbNSfAUH9oL7G6UFDNsXHvixcfgm5qHgjepfsAA33CGy22oVxgmjrK3gsFXe7cj8",
  "key43": "4ik4rgXQyn5cvWB4vRn5mDpDpt6CK7EF5KpZGJzxGMXXACdiwMmbrwgJ1A7xaVuKLVV3BvYrjQZREKNSvWSEijdL",
  "key44": "4Y2XTTpRossMM7mjj4anFCrCjADi3q8yromq4HY4nsw3pa475sVHxzMAT2s1zpL5cF5drqTsCzgKrzA1919e9xgZ",
  "key45": "txWQf9Ti1Jn6YEbcSCS62XumfVRJwzbxUtarU2PNRdUGbobwpwvLjmtSiBYTtnKMkqiGEsqAZdZJEueEnQzB8Pp",
  "key46": "4yKSbFYq8iSSDAd4LfDtoDn7R4ZvMvbBxjW8Jnv5NcFn4JfhpBVUombwizLxK1adAtR3DxpcbBYLENaTqeBygj1c"
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
