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
    "3BK4Yc7t2RkUT8Q3tvbKXYk9CygrtpkFkBQYENKfe38JXHcUFktsjU5vW6AZFhNem17PBRhFomMEk73tNDYvZQpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eMPcXZVZfTVzXDPoQdACogaWp7uDhcFKtjp5LRXVZjxnhdgDgzkq5LtgfQuH3GwPQEwSS7SXzS7pG4Tqk3mSZYQ",
  "key1": "Rm9unKndCF2QPznpWYbemuY1BfW8ynA299owZbPXAsZGGtPom9UVudis5AuqbknFnLK5YszUBnhJ8s3Jsgi51KX",
  "key2": "57tN2wg6j5P7zm2sT5Mt4k5C6R4m2MDMxrCEjvLcEEPXgfymiGVvnKPvarW3V12nX9LmrDs4NGTYgdukWDQ8yarN",
  "key3": "55BVW4BaQcTEfrMsKYHsSPBLY8xV9YyCmhR5niPYsrFhsWLP8E5oZhys84MvvueszGgEyvobnaXgFF9SiAWNSpJY",
  "key4": "3RFFR2tkYMSutWmmnoWFTj2xDkokxpUsRAkQMMYRXtYwpHPSDe6n49mxwnN7iQJUitfqMyYCMBVMurFHYKYZ4NYk",
  "key5": "4AknzVvpuHqcY1psAkat3C4KUdPptGZfA4MiSn3NDrzYh7pevPmZvN928LyMy9ksxGwXFwPpZ44iNC4z1Dk2puw5",
  "key6": "SniZz7qSgvtszJEZeDFFTq9Y7bcyyBLQ6BHX3Fp3NwyhskroqKxXersPz5U966hDstYqcuutt1YaiFSGgvTvDtb",
  "key7": "4Kgn19vQmC3bRm4nirRBhvXM5B9xFpPtTNT9CfmFqLQsUS8XCQNGMmiwJnt9jxMVGRsnphuLYo4BAKxhaoxc3Tq6",
  "key8": "54bN9V7ZCDCM536qfBmZEyhbUquJQsscXXpHk9bVgjmhSkN5bNNts56MXTFmwFGfsxgdZwJmfYMtRdVtCBaL2wZM",
  "key9": "iJ11aKr1qsXCig8Si6AabaKQoaVD19nEayWn6wRh3aGM1DyJTJAp3KreqTVxa65ScKmZd4Azz565siwxJDRXGQk",
  "key10": "4ZPqfdrLkRx4Hyhnu1Kp6Gw8QEsgjcKYN1c7wFsUX7JGZub87rhz5PpG4m8xtVpp7uYtXaRNt8va6gV9HgELfWBh",
  "key11": "4iKWgABu5hKzC9jAvc5mz5fxRi45p9A5U37fJ2pJBah6XHBKjqzih2C7FGb7TbZDxTN4q6VjjddxQSPFXfiR6ReS",
  "key12": "w6kvRC2NAsCvnkaTGMcCbw19uKpe83QFXgu8RhtAr7MjiyKRAyTtd7WQ4jcbab5LxgyQWJFRimQhJNttjKDKGez",
  "key13": "36c9wgB2BKEiMTgztLdQeQZUMTWFj8uR2eEEgN9tmQsWdCMfcdrkLGRNKMkNYdDBj4hkSCVFQftxDzbxFZZfnfag",
  "key14": "5U9K74zVHDuzZ7oA7QEABYNtfbY6fQyjrBpxusibjqNzzeoCfuqdiEuAHUar52CcP24Fq1wgDW2FJa3JosxtzhdU",
  "key15": "56V5Ff2Yafugrz7TBChjRDuPUUKdgJps7FuSudEwYJeFjNG39c5Q7YoqaUhpo6HnVEf9KVBLZhykE6ofhQ8XCPmp",
  "key16": "3NJZ2ik18D5VMj9t3mhjAtrcedcrkAxUpZxrTEXZKBtQXeiMwEqjfdxXXaPvGMZoRtqTCX1goP7iw3K2srpCREUt",
  "key17": "2oocho87QW2i1NPgaDBjp45Ev4fnCbuRVX29kHuJ3xhvY67n7xmHGxU2uRxd9hqKDG9iGyWM1vSJaGpw6MtJusRw",
  "key18": "3SbJF9H9jfoGV1i6z5QfbDYQUpxo73AjrMCMuGkTdYMjmWcu7X7FGGkSdyGp9zg7AgY8gv64aAagzzUM2iK589KD",
  "key19": "44CfyR4v4qqVw8bNfR9WLG2V4UcGLJbf9B3pTAoTVduX7Aw85oQ3KZbuUSXhYfLuUhsuyXdsw7MDNj3F54wZin2S",
  "key20": "4ovbtZE4Z4VSRz6id2ySfjzZx5LGvifKQrYjZHhEsgrtzv44zAxbq3yDKLbHaZxJWSVKDCgSF7jWpu2mHLBVzkAR",
  "key21": "4ZpU4TZ81MUaCpvFKm1ehZmqudzM2jb3sicCZWomMB7aJMimsobv2bQ7WGwkTMT2RTQRcGHCDjeBr2fidDHFBy39",
  "key22": "2NWNBebyM2erWRq91spbu6zYYK5asKMpHg6HyXM1h1G18E2RRTVfZSvhpz3ftYVvscAVqMy7rSbmbULc8UYgygXU",
  "key23": "4syZqw36qVFpxhYZJNcfMC2SMr86xgUZ8rC5Xnx6oYidSATh5q1faiHJ2oKwy3YfD4BbHu66fPhF3TxKwuXGx5Yt",
  "key24": "NW9RaprTwjiZ41NC6BcSWM14g2cMKtaq7dqQ2jH15pUDQB95Gbrt2VHS1UqwzbFL4WsGbudiBkcii2AT2NwhYYE",
  "key25": "2wizEpDLx56gtZDm4FYnXtuGKV8D1cMEgHKf5rssNWBGkRAD7HfNwYYFu1A1hCdKmKK16RLgu1FqfCZRPfrsgazy",
  "key26": "4xSgtkbJkZ3pFQJtPcVFtLa3sL7s7391bh9SQadA9XqHsAHST5anoQToyXd597xdWhjZtkMcQXUYYeJPdAZoF1t",
  "key27": "YxNCF1EjvNVhwc8aFhbLBQot4nV4MC7jPtctFAnqbGuL4apr99m1U8GJNB1F4EePqua3qisCDLRgNG21E7HDveZ",
  "key28": "fS9e5BuUvRsARVK4Sab8KtSz7JQKAngVQvFjfvjT1hjLXw6FsLpn89x5yZrrPtz7ztFMPQq37vSbHHRnoHSLTnT",
  "key29": "3LbGTN4aYeRERn8F1hDbS77d6x91WZbmh3DmiVhfHANRWfY7zpXXoJ1gVaHyFXL392sA6a5Qx667oVHUQJW4Wuf8",
  "key30": "5Ko9DYjxjPKnzv9fANRzF51WMTPDWzVCKd6bJeiphQBZF34pjVGMzkhR2mPasDi4QAFbEvGtQXitCCHmAGc9UMeD",
  "key31": "o5gpE5L43MYKqGyVfhzGs7RMVfd3WvYjRm1Jyo36akBA4P4sNYiENJYYgNAUebHQrBpb4RNreU31hEArdhpccuc",
  "key32": "4dVDzeqLASQNvzMy6AjFe2J1mfK68cqDcyMssachiAZasnJ1YDzAMqAeCB35yF9a2Q42ESMLq6sYXFSVjUHS47Es",
  "key33": "4i8xxwxWaPTszNVYAtuwTaHNtvxQGMABp2GxQLhk7SPkSjzBtoWD5HPxisUMDFeaXdFLZs3m4EKiPVG43L7ia5e8",
  "key34": "31FW5pkuoBaNBtUut7MMDwZqrrK1ji6HoMEiFpWxqsk2AmvrHpsYZeTWQde2R4DMtTH5QRsAasuxfsDSc2LUrSTv",
  "key35": "2TxscuXF7xk7CnXnpmhnZDaF1DwJb5LKQZBCAXnQ97btvnXifm2VKgeoaBxvmcGZJWW2qmEYYdiA9nmrdUGVKas4",
  "key36": "2EVCSvocbA6LVJAAmQetXB3Xns1e4GLXRD4mTp5K6zYzQufsE1R3BguwLMVSXMzCqexrusXf9S1RWk2XW9K1LdMe",
  "key37": "h8CaxpE6ExZURZ7UZJQ1zTDZTDuNnVfC79vJTPU3m9nQJYSWBgCChUFijAx2fpewP3DxvBioiSGSJmSaBj4STew",
  "key38": "3VJ8VhCpCgAY2Pph8RbHoidsHQdeNrdTHzNTwiyBtndMYuoqJhhZF74xzKSFP88XTiA4dYS1iixC1dxVKL6aHcvt",
  "key39": "2HhmPvPJvypRx89P8PaMxaFudhKwf6o672go9oUwi6fC2Q5Aoyv6ohN85cfGs3qfJgHBaT1xyQKN85SMpUjVp2ZW",
  "key40": "4tog6sBQKGUFyb8rZLL4tR9BouR1xLNBNq4UzKS1fB2NUmTef7yAEHmDi1Tri119TXc9RuxEDY4Nk98JtCu3yutY",
  "key41": "62MCZsUaM8FJPgFsZMVCiCSAiNrox7uh5PstEz27gajxD4K1ydfWzMdanfUvgYaH5t6j3wcvQGy6KjdWnXUfYBf9",
  "key42": "5yxYpBqZo6NgR25XpaPxacufTu7dpzTTyYSJwNdBkseoGy89kRW5FXVod3Us9gkggaNrEZ362KFwJfqcUQfcVd81",
  "key43": "2o3WXoc4RJT3jx3r3BmNLL7es48cLqdgPgDdWisixxwmZWMGqywFVaTxWDQEnCRY4rgDkwfJKdoRu6iFiouqmgEm",
  "key44": "5AWkGq5Z8kLJ2HjdXsj8aUvsa6LeKnJfxJ2wBEjKgaNoJsg1qinBN2UMfWgoki8yQ1qugc2viiprm5iZDnj5fNUo",
  "key45": "5Wm4Fzonc9z2qGynuSMkRizBoMudFzjnbo3jZSNki57KV7z8Ppb6tVuWsfVUUNgGGcPSPVkLoJLhYJkaFtFupdMu",
  "key46": "2XAD4XWd4Swx5sycYWoA86zct2W4JVJuvKWvPoCXfYbYZKunRky3AFjsq45wffNuHgnnt6kPbzkUZi2ds75NF8Sb",
  "key47": "5oaNSu1WMQeWvmooFhoYuYLiaYQKs2tzw1iD99iCyBhrpBXeGngpzrvD39iiyEyHknvGe9fsqhn2cXgTpBmch7Hz",
  "key48": "5qPFnQ733fAhQ85racbuZsFMrb3d37oX723vGqvePRyfgqUS1qPQ9FDvBBU1HWqnnAWEr7vjS5vkuBjjn7j5WknJ",
  "key49": "3CsRij3rLKZGhcTeQb9tumcakz6aWWYTjvb1mkoUJNL7fwSTceZyptcLSEEesVXgUGt8ybqTRuQM4pJVyjrw7QBJ"
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
