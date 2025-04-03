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
    "34tf2hGmG7rNph3V3m4k5zuth8TAnxaTVrgaWAEi6tJEAvyzWCSmqKfUJerzEywNTPgNuBGQPCFrxK5PxyA58bfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hUy59AF2yRMP3ym2NHDiSmi3Sji2U5AGBa6dXREvi3zotQYyu61mkXVHUEfZBjYrWMb2PrNiDtDiXFQBLAN5a5m",
  "key1": "5af7sGuRk23hfMguNpTUefc2id5ZhfLDPsbztKBSRANfYKo7sZsvFhpf62VQJbXcBe7xPu3fcHxhWkGnA2HFhLez",
  "key2": "4s6CRbnAxkfhQANw35LVpBXjjKN2Qk57MMDHE2Zgk3AP8cYiLgnTDZyVEErRk3PzZByGf37rUFMv2kfXJWWevXgk",
  "key3": "62q24BPAm7Lq1uH52VhR6buiXa6WrAy5BakzjzvgcfAyuxRezgw4CSr8r5hDyr7VstMEQPYR3y1ChBy7aJPkvzCd",
  "key4": "qWN6Hfktn1bMvXFkQPUgexWLecajeEbnZgn91bzXWF3SJtNPkhwDYoqVcWV2ihaiLgydyBumvtEgURGYMBQY2qj",
  "key5": "3XioaChn9EcAZ6GfwnLby2DUvgRL7SNcQZ4pP9iGV3qG5JgB3su2DCt9dN5UdyWRPhp6hJgUuZFi6BvV4ausxsjg",
  "key6": "44W5H2E3X2qDMEJD6GAvUrxF9pF482C5y9WufaAzDW51cDYcJ25S4cWjCvBFpcGhXtZbAzaVDpMpL84HhkDw71WT",
  "key7": "6y7mqnBa6HwmCC2QzRVLc6HLgiSpj89UPRgxSbsNgUQmEcy6gLpkRbTtUC24awQJabSHFD9qrR61bmQPHxy7uTN",
  "key8": "2NqyJ74uhq9VKkhgH5bZcjecaAhKRgUg54J26asB4fYWBic1xnb2Q765rFJh2m46ob2onkADk1VhasF1ZWXQnf7j",
  "key9": "jt68zG2kYcxmwJysGfVNgxWfJsctDT9dPZscwqP7pwoKdLxVSstFvAZvARi9VJJ2fmuWQnzEVeewcd5Zg33sJyN",
  "key10": "3D3bZbwh6fXuPPUuGP3YM48ALPxZv6K8r44RRmouxCb2jZCRSgE9xd4dH2sbLaTuQnbeZAa87kqCUhP8pAHCfEHH",
  "key11": "5EQJr7Lwe4eagZ8P69yRnxYFSQLafuVwLLHm9nSykeuZpkLgW3GoNSHPYxwkpeMiqJqM9VxCnxahe86hwtiKECYS",
  "key12": "2JeJG1GjJcgcSj8i23tiXnyuwhvMM5v5tBahpatRpmSRn21aBAgxUEPvxKYdw3uUfA2gdzaYnq5ZR7gW6ntAW5ES",
  "key13": "21VYAZRLYwFDwXkh7VuQnQPVye8HQCu94RW3CY1q88SBG3Ps9gRqY3cQS6bWZfZpASDmp4y9bgwNGvzo8JxcQkLE",
  "key14": "ZS9SprmrJtVubtYtLQ85VrPkRRNS75GV3k2jmA9Jo7eW2oPWUQFQx3tDpuMo9YiCtAykbReuLHbKk5TkB1ZbUDh",
  "key15": "4myniriPovs9J49VKJppw73Rdv83Jtj9XGLcZGKe7nu38imwiVMzqHs8t6eoqTfr2gaXhEqQvWfPZkgabqdWfxJd",
  "key16": "2Yin7X6odUd9W8iXEKeJ6h1TVTuYveDAEpUqo1Gfpd8WQQgYcksHEMtTmamm8NjCEZbkiMjZUDhZVkTtbpdxABNM",
  "key17": "ov5tYnaMA7XhonxGsWAZ6XrfbGr5hBWQaDBj4TRj1dPeCft9PZ56Z7ZtH2Mc78pyh97KcJT31FmpjRwjT63Aovi",
  "key18": "352mUMb1uQ6LHa7FdAhUhn97yGxhq8G4MJSJBTpoy3hSxgtY5WnFjLZAxgcP7n3zqcFNmoww4qrvNzou1kWdey1L",
  "key19": "2d3NRK3JAxxp3bvXgUMttWftczepi1mk6jd8gUeFsSL7FdDJRmg9BX3EGCUxPZ3VErukK4uATK6TtjW6faEQHC7s",
  "key20": "43DtZeoFE2f6ca6zq2v7upjAwaP2eYag5vXAcNtLwnqgHStmVoe7wVndoksd2UQ4j6Ztp3vwxfQnXzXobM4cdPQD",
  "key21": "2KQ7DP3sVtvH9DAi9cGXGsQUP9ya3vzUk77ZyA2miXJf47tvNiAoJpAPMkFXAqWtoqc5VnZd4LhodfJb1nXDnZnk",
  "key22": "2UVddBjsEzxDXZdcFoHZHPpYtjPAFp7tvpoodDw5mwwxrEoz2qQVYVw8Ggt2FBHUqJjmM2jQuJZNNkmo7Hyeh9gt",
  "key23": "362G3t86qA8s5vbvufPoE7Egd9FTVa3bVK8NbyGLXnCYdMamSJhsFqPqhYNGwUGWGETDJGQsin22gKjFSy37Y5Cp",
  "key24": "2iqz8RiAkhsD6J8yb2x4ZDEX6A5uwzsQ2RhXkwJvosEyoSATVvEsRBYiEpxMEDnUqEZWjyWzNfFsuYDKEVxQZEFk",
  "key25": "2AbkPGrbND5BAPMcg8XukLSmxsWsKTKTFLz2fUeEtbsGKDqL9neyjpyzDGSLVKNmxmaZgbiVBo3R7jTLM8PcBUGb",
  "key26": "AidvudKuN5WE1V17LUM7E3PWdYn2AQvgzYMi5kBrarLJKdiTz3aaSEUpjendYDKjrYA7uy9R2DkQtLyxQL2sLu5",
  "key27": "5AF4nXXeaTnCZ8nDVTXRkbkGxxy2iehVCvxY4LuAj443ZAQ65gM7ooiTgWXn14eqwEC89JsYv3ZEJBQBfdm9h7gY",
  "key28": "3aeMM3eZHMkZQTb7WDiTB9YsKq2mUkFzJ5mDWWVKvLKxAuNZ87tLDHqN3R2ALcBU6n1F5P6HJdjwTMkKbWRi6vS6",
  "key29": "5PWqxHRHkTzdK6WB9BuS9n7eWSBYL9W4Lex3skP8riQX5wJpyT1fbdoH1bgk7FvyaqtnrfUbvVqcHVRG1Jj5zGpB",
  "key30": "aBziE1c5SLFRLfb39dLKp6D8s52NtNibyx46tGfFj55mVKTJ7f5WrQofi2fgtheAiwqvGgCXU5QrHTTfJ1Yoj5G",
  "key31": "QoeVHE7nxHq5dzjqgtYV51hUaeFx8WbQzweFpQEY14tH4hGSAsXaMHGC8gR89ciUFAtDHUr6c278cuJWKkd1jTt",
  "key32": "yzDuMhVpVEawmBsnJTidq3XDV9mDoMFJEzXuhqQPv6E7AsvYrh614G8Re7Z15pX4ab2YusWAtyagZgtXTAYy8Mm",
  "key33": "4mnU2McomgXfjmwAV3oULoLrRQzJtDmegBbMySVKiUzoFmWmL7MVHJ4XvgTxh9uMRiaAihESzRPNP6GBycg6a71H",
  "key34": "3rbeCvZK5LjtwXnCYpve6QcmWTizKsmtfCsXr3JnnvNPrimW8hEMVmLUyVWh9egq5SueEELeyQhGLxLRVSiDKZBV",
  "key35": "Q53mYU77pPTRH9B4CzU6nTwigE4mxzaW1JsFwo7hQx4MAHnDEU3nSHEUAKMxmgEkfqZcVP5Qz5ZSuDYofcF2VUj",
  "key36": "zhWqdhoDpyKkJUuA7uKEqTNFuxT6i44W5zfAhwZ1fqaW1atG3QHt4ChYs3qn5La8CbZuqCmz7JSftvvqbgKWmSf",
  "key37": "Lpj7o2p5Leq5FowrCUt7CRB95fdSYzbZmAqRub4h1RJoS26ZkNs7fCE7MTRM5qnJU6oLES2Y7rmcK33u9qZkmSS",
  "key38": "5SVJzLXeUwRHpv4AC2C85BNsSy7MeN4yx8R5Un9H2odvcyScqvZVsYXcJ5RweF24HP2k7mKoABm171kB1zxpy263",
  "key39": "4tEvsKhjTdW9HJ4fTg9Btbw7YLJDh1MPVL6L3e8vHYvqG3AydBd4Yx4d9q9M4a1HXd4YmND5Nj1zFvzfwxBv5iQp",
  "key40": "3woeTyDS3yRghmiGkitfXqHhM4Aigk53g6e8w3boZ2AkAVCMktNGhTHYXkE1CAiELdnvvejUzaxViAgZL1HCGFcB",
  "key41": "TnCw6ivXynEWvzF1q9a2DrRK57Dkd8LCzEhJTjpibjYEWyTTj84tDJ6RSVni35Vph9N2CT1mnabj33jJ3jWwcXS",
  "key42": "c4En3CbLYqdge1T87SLo1g7tARn4v7HjcmTvEGTxFsB8LPjA4ga4bPH5WVfyyXJqztUpYkdZUxny7vfrrBJtkuY",
  "key43": "43USd7L2DNRRP3E5ygN4sFczNCJor2pMdG9pBQWKMStC1BGtvPKoTfa5rMxcC1hvx1T5Aq2QcVqUkwK4ELyLVayd"
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
