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
    "4sLz1xCvwWz1ANP2cjgEusC1T6tTUs62G1wWieVfM3pEEjyawtkUWe8t9jacFKkUokw4YSYMt9Dzfz5NojPA9d5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hQph8PPwKvd5k4BYfGSHuwfdS1h3a3a18DRuXF3RBadvMZHzZzzPu47JDSyur8Zz5ekj91YQVP6pRedCCmJ2o3h",
  "key1": "2zCwiEHC9rqNQQA9d1a2MB1SkTjndPsTsniy8GmaqK9dHaftPqu4qDQZM77hinQRKDGcwE1NSchFM9YkorVgHj9i",
  "key2": "3CfaouJEwvTPHcDbM7yshVHvGvVPcKhSXnVkXsfg6giZSuX32VYoRTpvDmafFkTeeqDijckZi2B26uzuZ9suteNd",
  "key3": "dXGXqzaTgcKtAfYxWcjX9G3Qcprrz75j4ufG9AnuDBRqYCMD2Fnw9ULyovbDKJR68MDpkHTnkFGhGJRb2623Qdm",
  "key4": "2bgw9EP984eYdTet5MGc71DJjRWxVtPoyKCkdeUf6F2U6pDUNGpTZmZUqgPRADueeXZf6MEq41MM68Fp3YrsYfCb",
  "key5": "4e8E2xL9mFmHiKN6DCq9GUYyKmcXcwXLdJ3PFj1UjodVSyz7zQQMWc9kg6uGsZwHHj32p1HH5BTKhBzDvKZQrgwN",
  "key6": "5SYwHtngtoRgaGAHEbdQxj2a3ksXBVHrRYeUnLv5kvzfHcB3GMYuoGehEjhqkDPFSszFzmNA8eL24zZCir1tm8qz",
  "key7": "4oCa43HTNEqvsgin5wRAoaYUuAYCstH2aTPAqg3S6M5gxbeVwgPdQZ2XEE3HTWJ5RuHfraoYCFARwm7HbeNZAehP",
  "key8": "492eYVeKeMtbeP9wnnpUk2GsnrJYb99eRRRZXt2DmmeVUjxb3kzuCmVwUoSYh43nXnkdt5vrNsdBQ2RK3tP2dPTP",
  "key9": "5ytYbhQ1qMeSxhnfiBbKwhU9swBCkVrKv1j7jrSNuzNpi3JJ9XAaYJkQFgYkiCPuA77GqiwLboNSUhXeeurESKGE",
  "key10": "7vR17rQHHbzzRZ2EWBnwgrCNutH8zAwdAu18Zoy5nUqqd19yta2iBvHc7JGRhUqdNbor4smpb7Ee2jW73DA3hFo",
  "key11": "2wij4uhBL2wq7WNJ6B4Lkf7CJfZdGLbrqux8gfuqm9uvfyJvAd3DGbkrh78GATzzFZox4qfPQZqdsbNexpgxvUYg",
  "key12": "5mx11aauwpcdiGLEFCz1BT2tynck2wcjrHCK3uXWziUYUssrK9Pmca3hEZ5zt6sczwA2czA7CqiMK3EkAwmuht5K",
  "key13": "2jBZhCpRrxP2AmenXHAnUgwctwc9WF2taUWcawzUVNfhm2eGRtbEvVwsGez81jCc69TURAD87WcQ4p8vSj1zPUrW",
  "key14": "5spAyEgmzTUCZBXxxswoNyuQQPgG6XdEco4dp6RhQzw9CKHFcQGEaPRgHnFFP94JWVZRSGMMhE8g288RewgdAQy7",
  "key15": "5cWyhJJ7RWa4egLT8DB5fzbFKhyhuWZGQASZ5PgwWGiphcNEeBij1c3cBNUxrnMPQkHJyP1jd9tBMkqL51junRLw",
  "key16": "WTW6T3XcXhMebCdEdMvKu9qELHqmjtysQ7W4sxx3Sm89JL1NqDcTaxxBY88rS4VoRmuR6Sh6AyZqFFwrnVZtmiu",
  "key17": "CuRD5Riqy6n517sVQ5JPAMfRXmdsp4TKZSkxeecLJjfKZLjVPafBa8s8U76gFDGb7o1pFMv5LoJ5BWMHN2G7swC",
  "key18": "2VRR56ELNiiQ2Mdi2FLLPZcmgDeQQ9mUod2ZyaSiQ5pheLuU3xo5ZMvgzqtgs4PVT665eg8E2ujG6L7LxhPq4z2w",
  "key19": "3oGGd8fd2ZUtjhJfuKyXXMzZBJMPw443YV6k5iFwAqTfsrwobxvVjan7kgpTtHhKRtrUPcgywmi4VEhrjtuSoadZ",
  "key20": "5AQKEJUHcaZLF7nmWC4fbiCBpSjuW7qW3U1idZ8avLSzfCotTfQpqPzgcWdKzEM32fx67kcqe4cPZs1uvWQyB9fB",
  "key21": "tgUYbEXGa1mAKddyKgjACmsmETKkrkHkrADnE24GPm1dCdGKVGZ1qmrpnyV2Xine48ULcjiNYWtbaja5hTZHK5r",
  "key22": "WFEg1sgGZVqoHc4GN1tHBR5hS23VLNFwCbPdN3ja3LqMEMhSH2fU9SxNLi1inXV4MS2vWwN5C9kPNJjgwnDQkAc",
  "key23": "3jgL8ELfm64YjJADidQtahtYirgDRdbSmWCPKLSMwK2vdXdruNMnEHkw8cPNebMutFMAERKGCrpj6xtDm5kmo6qd",
  "key24": "5hsnCat4yMWyPM6UgNacomumS7STtjpwy9fmXEgWFtURBSnT5EaatxeweZTmS52NHh9wewDhEB2mf3m9RWWeA7WP",
  "key25": "5rWMVJSbV1jgzpecJtS3j7cfV3JPWkzhSY1thSne29Z3uyLws3PwsPzLNcSP6NrnEkvjCymA3fvfJqmzPSc4i5T1",
  "key26": "467JkA5Gp4VdRTrEgoce1d4XUvHvcofBujg7B7jQDzPN4ZyZWLce5EjTkQ1Ae4v3a7qNZAoFPmawKWGeqy2ERnXb",
  "key27": "qCggPRNoDi3yEF1R8MCFA7TcjpfFyKzHLZDs2yziKEABe8mT9KnnPGKTW4dVDyoDsQ6a73sSKswKV4s58Gz8KY8",
  "key28": "4CM16pECJC8qLhFxCnEX4ZRBjXcEXUYQyh24CryZDyMBz6u8zwcWm4STeRdhwoQTaDUQbR3vVYbJywvXdHNeKXiG",
  "key29": "CDDKPv13ZSazVc2iCBfy3Ppvz5DdLAJxLqnZrq5mooWyGq1jp3dya52k835bxa8UHDLrTzL4SS2hw9A9Xt3XSwr",
  "key30": "VjjPeLHTwAHhN9sVyGsF9qY4gtS31HiGA4jiGXX7NerQBSi1mSi36HGCm2rEp2ZRKCmcoznzCerctvFCvMhJKhs",
  "key31": "UvSE9fUvvPzGdH7nygoLcP8NZ3SKrszMF4JzVmdmFEWdyAaG2mSYG9eLPkLTJ34P5jUbqXE5acAxTDX2bNPuzor",
  "key32": "6xkYwCtYSv9zQL9EEoq32GLgj513q8NguKN3wyLCyLCGCpecYvR5cRZTNiStHUCGGThEzxZ9ydHUPy4vD4nWru6",
  "key33": "3xPZydcQ3TCvqs3SCNg6xv6ehM5A5xfH1sjL23MPHS8jPSiry7VUvRLuAN91Kv6sHk8buWjfvM8mfiLx3KHXxH1q",
  "key34": "1wMSVJ7zvX1remGWdt9TQ85fyU9ZsNVWFqwqusQkJ6pNmKVTRDhLEut87okUTWCSbiF8do4CJJMmJgs6fj32W3W",
  "key35": "3rJiCeQYLjuPwDesLMAaBzwJKK8yYQQHDCi6zWAeqx6P2d1awEvNnxfTH4NVir9d2DBd79ZUtceqsPHgGTkrSEkG",
  "key36": "3SvUjw5cARbBR9T4UD9Jsa2pc2ttL7UhGrmNVMPMXxfmQJHmpAPzamxE9MFZZqBbzTYAdfuEqvPw59iZNUdiznHB",
  "key37": "5t9NJcUjC9Bc6WHcMs8TS6HFJfgGgmcm89wKHvH9DJbGsmmyeBtEMcW8MwEaw2rQBoANzdBqb3RUSa8De9A3ad8t",
  "key38": "8RXhwovGq3YX9gYE1hWuok1hqQ2fnH36QqVJgoDn99yzQ4Ka9DSDSKzLgvSxYU2eA5z4HSykRpuvB1B3e5S9aPf",
  "key39": "2zAHuWconh3UuuYbjSkzsZwW57hCvpTqypbiRKk2pUo2Js8Z1iSkPNnqLK2ndzbUk8jrRpCA5qE3vTbkch4p5U3a",
  "key40": "4FzuFE92SDak1bxekizR2dAZpsLtGxJXzSbaue52RUL6WLrAWMCQ7LMbB32D3bHp7wLdpbwr2weE7FbYqgqoePri",
  "key41": "4EoEgAntfhqQfJFfeesVAuSf9TikWzLAZ49MdE1M61LPGdz4RdPo8CMwJx9mcDJTetwQAcjt9JqggqUfri98f5ws",
  "key42": "5sswuKTV6RLkzPhhB3V4NvTFqi5keyFAGSyECYXErDDQQ5LeJXVMmycujRs668bssdCNxL3RrqfvEARP3q2rZED3",
  "key43": "3pgsdikH21yWvFYMpD2vJm5T3A7RphHEwWUPG3hLwiHz4eVh6oH1fS9mAL8YUn6BiByjS4GwzkzUab7L6Sr8dp14",
  "key44": "2FdjiSjdMKuqQEMavjLn9qFC9c3JsP3ZVj7WhdWj2SwjjPEjaNeFNG24Mr4jqQ4PyiXuRewwsfDF9BE58GhdGDLx",
  "key45": "5UwyaA1BMD8Nxi5mm2HggymnN1CLpEDwuak5bHfg1XrXb4tJEPkpPWmfXNqBAxQfcZqTLJivNumo8SHZSurAKVW4"
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
