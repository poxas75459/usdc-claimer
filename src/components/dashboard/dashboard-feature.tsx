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
    "2c7BxaV2WSBhsF6sowCkPazJ4WmRH9cQqHs3JjxHJtRLSJmmLCUTKssnwhX3AoMZmjUYJ9aoFKo8wSL97tR3SDpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v6PEmUec8y48QtPg6VK5BBkg1DMdQCar7zQpcjUPT652Ed74WhXPW1u8sX2hqrFr8UAupc1u7SDzzSwYpHZZoHu",
  "key1": "5W1vdY1UV2rSS5LnwR9vtq3royJP7aLwBrTaWgpH19QNTF1jawKGskcnLmceHga4SVXd6KfvLTsFNXQPWLD7DET",
  "key2": "4TySDaqKnLNaSmB4ZH85rS8YGK2ErThvLFWS7txM9WbR1Gcoo6KF3pWu9Erq9zuBExCgbEzxydwz8HcftTRRzgzr",
  "key3": "2qca2jhQVHAqDGTsBz2YSEc3JtDJBo2eTbzi7eardVj6D8Gc7x44E3HnkXSBmvavpfoPTt3zUgcQeh3qcX82eQP2",
  "key4": "3MJk6xNEgYzE25UzKy1WqUA1JpNUfXPtceQoXjaziJJJApf2rEbM9bjUjggFEjkpiaurCQ2k8QdfKwVoaUV7sVAy",
  "key5": "4SdmRiNcnejS6pUGF8KKUEb4zeCdrzEemxzm8iSYG6GsjDCBydXnhHqwUYKGsWyBmteB2oHfgv98KF3pHxXWtPFn",
  "key6": "3AkYmXaQGDPDBCxyxFsJWNLhgjPULSmmXfqhB2aJmUd6z1o8zKVGzJW9knPRkagGYBVJX2Vu6fuketMWt82CYp3B",
  "key7": "oYxGLPGokBFL8XZ43EYSZikiAoqGPE7bsh9jph7jJnK2VKwNPCZAxmG3rZKkCXfsTuzTDWXhMEynQ6TgXkoVWSG",
  "key8": "38mxa798zJ47D55wMij58qDeatPbv8BvyYfTqCQGyDWUt91SJfLqe8ZaKYXxs2GXYsDA27GcdvNrzs87QDWdzuZz",
  "key9": "2FscaimzPsHA5pfQYCx7gWcSDH4vD3EfXdajXkPdeG6uN16vm5mqoVL143QZGfsJQPQg7NAd4Bkaa9L8KL4DXU1W",
  "key10": "4cr4JcHsgxRCkixP8p6hwepa9J4qTRyprEZDbe3mVwCQ1znMJmSmJcRxuGBdj715kPctGpK43EMhnbia5oSJtymE",
  "key11": "58LkgjyvDN24vWGWLUi98Hxj2bbGbMzBGC7pqejcTKoRbLiTZgd2ART5o7izVqnDqJQjxE55tGVAwzq1wxfWjtH",
  "key12": "4SGRt35cmrewjkkqSsiYXgGjzBXWqg3AoEegAeSbHaKvJnriKrgdKEY1K7rJw5iivUY3a7jfNAhy8dhmZb9A7RHn",
  "key13": "2zQDS26xv5LmhQq2fLkUKSGQu6GrgxKG1vWLRGKoA2UANeXkEGuDWc8bn5BQmKW9w3jU4jv6LRfWw6ybT5fPiw33",
  "key14": "4twU49doKMfPcXeU1GWJwKGAUcTfpRN8ZA7TSy6jQCkbtFUav3JDTFmJ6wfj8QTFuFy2nfTmUoL7N3wyhMBC9wwv",
  "key15": "2EugS4jHRVqm5J8vuZYLt2bAa183rRtZvCzmQvFt5oRpmiQ7vCPk7XP1yFmLPzPAvSdTJqWiu1KnRiKUjVFRw9La",
  "key16": "hUhJdyyrQTioxhMCyAGgiML78rc1KKp4ty6M2A6UB66gpwdoeL8B64jeEPVZ1mfhCMv4f9tbheH43k66Ny7wCCL",
  "key17": "3RfxnvA3y6ZydhfXK3DGT1Fc6X73sPXTvfyt6emNVbgSnkZBGPUaRPiAyvP1bnFYZrKvEcoR4h1ZQJKBQooV6cuA",
  "key18": "3QsTwqVgcNiHZfRvX17L5HRcdNjjJ1qkiATzdHgpP96QEkGLBS4KCUwV5aA8Pa2yuEiZRjp5dDe7WAmq1HxfV56z",
  "key19": "J7Y4ZTAy8uf4sVYhSoSF4Cna8yfiAW74Jnndn7HdxPQGbirRxnrYLxbCjgWLMSvhk94Eod1uFoW8w5LiQ8Tsr8w",
  "key20": "Gz58J7aXkrJLEr27EQuYSDYtdaYZ5UTAPNxM84VaVQ4bAP1q8mvB4MoTS1ZkRJFFZM2JNd6p6Lby4Li3YnSqbMw",
  "key21": "62j76MgUuFAJoWg2JxA9jckG7eYTQXShbyZLZfAKpxVwaSfGNjpyDSjt6Sx7knwhTAYkgMsjXgnMfE8qdw5nFpR7",
  "key22": "2VQd2whE4pYKZsWW2NYnjWbmyzBJ4CqhfhNnkaLcqXJwhniasX6VPjVy9DW1cvB5f7BU9nmvLfKM2kiXjkKRsoTC",
  "key23": "4zqzQf9fsYXWeMUrPEnLAYSbduY3KSkqRnDePnjSr9VBn5XomNAgqAauTv7fbtrmSZfmTcuJxuCF65BLhNbCRQsA",
  "key24": "SWPaYAhiQoM5DZjoscFFbimEvd1tcDbTLwM78zTcTvVvD2jfiUZPKswSRzJwMmTG7rozRSxGiawn2mKKG6m9fLu",
  "key25": "5cwKhXEjmsVc3b4rhHakPDNhBzs2A1XvFfcyvgDowerYbptpDCkvpVFzFC93HFq1Q8duAuiBaKt6nTmxrnJyNvo5",
  "key26": "2Vd4v8Qg8FnnPyec2DZKwUHWoLm2ca3PX97BqJeS6uCFTTU9PVGCmpzPKyQJdk2PiSxZ7RbSMF4qYmcvNktpzCFY",
  "key27": "3U8jpCEeRJycHCyovaifX1AqumAJBuJ1VQdB1WGGgQtLrMpHQ37DR6WXvSxojJpwc166Ugig6huaFgcBbwP7AWyH",
  "key28": "4y9fjvykUBxwsmAUbPUWbJtcjkDBptZbRG9MLAzKXEZ6MgHPN7ekERzywTwwhP1K8TuBL37C483AY5448tz1MW69",
  "key29": "5m23vjQoqDd2qEYpwgTGpfTDh27s5Wazjqcnn6gWmb9jQQ57MEsKwkJXWdUBnonuAyCEVAgziNf3jS9gte1YTFkV",
  "key30": "3Jp36CkqjPj5Bhbiv9pmsjZ3GV26ArEvsvosdFpSAeKpWzwKoYAMwWmEupvzaR7ZmYJuqr3pVzxBfCm8UmW6D3GY",
  "key31": "4o8XbQErWvyZbJi5PAPMSWCiQECccPoVPbaM5t9Sc2648dhD2y1UngHRdWpja6iA7nWuk9gFA283tQb4J36kWRMa",
  "key32": "5A4M5p4Hdu7pK9eKcCq3sSgCEayZYGNeUfZCjK4p1eq7Tktu4HpsLdxoxwBPVW4erdToJGhke3ivTsntL9YtHs2v",
  "key33": "2zuofFuwH6zhHBz9ySDns5uQCQEXbJwBzKkvfM9mHTpNL4QQpfmDFds83WqVQA8uEiy19uUbamjnRa6XLs4MKH8",
  "key34": "MEfsYMUHgwuYAJSx4iyB7rwV7LAWaSyghqLsHPEfM6zVppfpGS52VManSgZhSh9EiUuWo9PcgXpiNjK3gJhWdCK",
  "key35": "3hc9ExmrMNsE5s6ESBqC98wqrHCg6Xs5M3LHFBGyEhSZ28tMvXrnQAXn7bxJyFyqr8WLxW2i1rCEsARuf4LJXwbv",
  "key36": "3XVZEwPFTmShd2exnLJtNf6uf4Jsf1mDiCf7LXBc97wJeKxgcSViZWzKqY7DKJXUmGzoFADs7S66JmDzY6BUMaeZ"
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
