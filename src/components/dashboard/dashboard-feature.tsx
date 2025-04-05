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
    "ZjCx5AqWmpcgpze1B2hvHAji35JHGawbehB2BYk1bXip592JwpcmJDYskum5DtL6tZegncaUNuB5U2PzwwnPxD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34bm4JZzXJFbA4PLWffaguFsKFFvKiDQREvCgAMhqrbNpWLWfZQCRsKdsXhcsNJBjK79qSunfjMrQCdCZAb7YmhR",
  "key1": "3iNQPsVgo2Pyu3bCsMrEKEVGyuDywUQLrgKnJG4TCbwV2gHSvgrzguu8nSZuoBKwq4P8G4pzceVEK9JrBa5n9fs",
  "key2": "45jKwRhqsktFLqRnnbS9wv9MmZNFrTziSKPydoBzTrCHZwKmNGQW8RV5r3D6DjuSbJMKKNyjsGcDxJ5VdydNMG6J",
  "key3": "4PDV6nnzCAhJRgSLpSKRHrbk2cueLkEqPzGk9XGtBcCiys6Jud6gpMBY4XUCfXFZ1w8uR5imXsW9f8sgwZUKomqf",
  "key4": "4UMoWnTbnCSTGSkygvpMN98BkicEp5DWysg867E4Tbx7WGxVyHcmJXTzCqddcQAvKM1S3SxR6YAGjNvNf3TKzJAB",
  "key5": "3c6inyAb6CGpEEKJJPZww6BvTZ8JWebBMTBrHw2fXKTg57Ddks3TJC2y8YrLqHtJ6Vey9p9znBNtSBtGCfP5EanL",
  "key6": "2cr8Lbd8eZk5yqe2sTSHEWL3yeSXUNS7LcWvfCBEXS4qTkmGMfgkyUjfT2UxsaJ2pDdDH1dJJqDYPi6FmiGUQjAd",
  "key7": "3vpTBVmEt3Koxe3PqqiSLHwqK6ixtSwPr9GSgaYcj6L82EMrsinmEmgoDDwgd4Aj9RBFmT6orJogXD1rrwH5xCak",
  "key8": "38KC8WADoSRRoezwvPh3KDPWwCPuVsie4jWxMnHJYSY5eBnzBHKhYyPEiKdLkfAc3U3n8sRU7motXQe9aK9gExki",
  "key9": "3nTNhDmRinbWgb8rJyT1DoCHrzJ5GrU1VgrBmxwhvjj1qs9ZA39bzkZpcDTFG4Tkv1JnHpQxgDKzKqrWwDHCnNUf",
  "key10": "2HYtkkrEWTsaV5jd2EsCJXNP665pbC93L7ggcxKN5Cxt6ZHvS4pkTiMGQzv12jQjTwRDwWBCcdKiL1RpAKVupNju",
  "key11": "jRJqPmQBE8pp5Y6rWLjg8QGGfRNEANxopGhuMQ5xeC8gGa2H7jMMSPNFeDeM3K4Z9mGLzXSy1BcvB3UCurCxTpe",
  "key12": "4jc3ad3dXkxvvX6M35xFhGiqV1r5myyH1yubt8KJXzkmXJWQJJQs4xrNq9u47w9iqwoHnHw5HoBb2479cNHJQY6x",
  "key13": "2yULtyqEQLR4Lpvbnqf1D3oLVzfyYVHBgGEe9QdcrzH6bRUYkKDTws6SHeFzySbEqkHfcr6zEu83iEfFjhoSzqTM",
  "key14": "3XqVnnoBthAr1LJbCRW1YGXGzjPtKC2xf9ogwaGNqyJdocztNWykG2zYCyPw5kd4Hp7c5nnREzgy56D6wC5t6chT",
  "key15": "46jj2S6yZjKQMqTLn2yYwZZU9o3MMc2NXBcnSCmsboW987sdcBFMiP73o87THf55egqcBtpp6jUNmj2zBR8Aa6ea",
  "key16": "24RBVVdRK5Ym5S8gk3QcjsZUJK3xpXLGbvTA6JL6BAWHGXp1Xt7w3sZhE92255ryN6qPF82HkahkMPHfNHDHcLbM",
  "key17": "3pPQowvbMnaenR2tcebbrkBpGeWaSRJ5dDvcE8Lqv4MFcKvWh3FLMmygNjeELQcthsv52uHLctWvHsK6LHQw9vzu",
  "key18": "5he23c9kj4gvjt3wt1R7mESYY1faydiBhDWwuH78sT6Lw2XtjZDinjKNKJ5XdM73wVFUKE95qYhBmttqRteu7vZV",
  "key19": "56B6yEHCdybSWzGoyXgh1Kf4wfSw9Q83mHAZ4WDcwABaWB8S6zNtaCoXLdoXTnoWpg2pkKRxKT6S9zqppfUDLDMb",
  "key20": "3nhfdFWkdkbqy5CfaTcJazadFd2szxD5TWuuS62Y9UXKzSLPC5YxCHid7LyefJNEFPXrBNa8YixFZXhVVj4nBdMb",
  "key21": "62kvYw7jLK2MiccmAFb3ZhNmSEoBKVoxQwx9m5SYmEM1LpASkGcmN1w3rDWw1PZ6A3YK71m7XdUTcfF2K7ssNpGe",
  "key22": "qD1rbmGuZegjQDsNUtaWD1m4z66yJ2wanN1dAw1DzCrU9eoXPokFUFpWY3aLgZPwPrKQYS3nyeDNDa34PsYxQoj",
  "key23": "v9eXTV4V2dc1sKhCdirNFHzzJwvFAazgRNftQae31gPTDPeSAy5iBnJeGtXKjxTKTpmkJvTmPHnQQFqv1Gnnfek",
  "key24": "51tuQwWBT6yNp7CjXQPFLLXawuJmnHQphKXCGSgRXrSjS8CMSSSGAZg2yVTV9ghKnrYmk8dwAdLwVaVqgW8v8KUp",
  "key25": "5JxQkpZbsbH1ZWSpaYKfXdc3TCM4gekNrEqZz3yL8weAbZgLg8XevqiMgJUFrw295Y8RWo8ujZguqyixL9MhSKmc",
  "key26": "52qc4N3zWVWE5k8JP63tU1rDAHmBwKY3yu7YNpVQqsaLw5Ue1Poace7xPzsyeumxsn7fB6oDyhqRSdmVsDPee1uu",
  "key27": "34UugnsEvoeMAiab59b4Dmz5YLUc3cCpJUEJHDg9E2fJm1FYrvobfizp4QHmH7kmqSVQt7EbgTWZCVy71DX9ZG5m",
  "key28": "23ab5rZcBxK9mmDdzyCEUm3PbPDG4C7unPGisChd6iy3gsjUteojXNxzdKufwrHrWueDTZEKoTBSeuPT8f4kiqQz",
  "key29": "2Fsyiwrd2MUxPtRaGsf2vF5cAALkBHJVRu6ft35yoZ1Gg1UyCWTk4AXpJuzoocTLkpq2bPTGYRn5wjNzqbrD52jH",
  "key30": "LhGfAxMYrZwS77jjFN1QTxGGEyFA9CS6okPyEzX529Pdkpywfe5hYz2S8ztaf1bFiLeektZrc7TQMZcxc7P7afd",
  "key31": "3AxFeDV2xe3XVJCa2kcYmbdBczK86vHuZVxWs3ZTzS7H6shSdVsD7puXh1wbboHsnd1qqF3UJsWHGxCi2dtRpjf1",
  "key32": "3TF5ovW3qYyN9VLX42JitGqxKjuzWivoeKLLaLTeBai3yXyphqyoNMRtbwjbWsgAiVVm8i4EDXH5bAtPh3HfFtwk",
  "key33": "WrdPAaPcbAfPJ68ntfhCAforuQeWVgZVanCExc8C8MJfGSYUbpUBBfH6etEmtKf4ZDiBhHz3HmCQFXFuDykxkr6",
  "key34": "3fWK2CtsQPUyLvpTKSnf4vsunJDrYBEGBcN4kqaVHERTpM4K3VHX5eYPnjvUWec4fKfTjzzLgeJbxJHYXisUdcGT",
  "key35": "2NSjah1pEWq4qauztZpX1SkUa1jw3vvmGyF8sFs5NLGvRtmRWgKqpbZjcEtwNurdEAo1Agawgdv1YYLyV1Fa3QVf",
  "key36": "27X1n2UUQTLXSQJ4P4McLmRaAkQaGJ5JxNwuK267uy2gosFij2TmivaeQfZcXEEe2sQ46XJd5MdJb3tLtHQnY5WY",
  "key37": "hoLgurbXayKLpJm3NSSbxp6Whdqs5ZPpfuNVZxGJSyz22HKNJeYM5NyE7tHQrPvVfUabLpNCePvoRjDEmNnYDxr",
  "key38": "3RcsSEfiS4onMRuvbYkwpdAKmJSzqZnKzfNkP7gcYo6NeiXLmN4Re3aoH81y85EJCgqsTXAhyGG3TS3yoM444Zq9",
  "key39": "6Gem7FEB8MeX8HbPwH9NzMLS5QbYesj1bmgfoRkJGFDvvtaCfFxmJx1aFW4PC3LG4cLAXZki9qFr9SXEqyJxNNV",
  "key40": "5uEqpJgBBTTmUbANjyKRFnRmPzQK3XE5YpX7AsQVqtb4Q6TnViRREwTdR6cC8HLpgeQL8C4snZbYzLcPYrP9b7iM",
  "key41": "5Ubd79nhZauBWqdNFQdNuRQA45N3WK6bsraA2ryRXp8A8KVH3c1y6kjmk1E3HNggK7eTdoepDepwfznDybJfWrrW",
  "key42": "57gH3FxM1XAFL1cX4vgbrAiyNbRKpAuCuFS369ooEk9VDn8VoRqCWd6MtfoPbSVgCtgksbmxYdS5FUmGD2ii6Jrv",
  "key43": "3nLjY2gY3ze3SmWEx9BaDVC2jagUZ83bBsCmJ5wrBPtXG9SsGKLSDgqH8prxNViuS5MWjcuv2G4BdjHSf2P6oKvZ",
  "key44": "EB8YX4E87QG9LuzxNkeo3yaFipwzh1Ex4ASJA7HtVBPBPu4tsDFSfWYwGjS7QmbGXUjYDYrQ2cZkz639qFYjhDN",
  "key45": "3xETd7faCvw5AJdL81sh4tbsDR3Ebt4mVFi86t5e7VbQhYLYrQ8DFBe8cKCnyo4yET6kgCSm5x76fJmLD5zXdHYQ",
  "key46": "jvqsi3xuR6SRkSwwmh4k146CEfro4Bx1PhN1je5xZ9T3tCqGifWx9c8P8NyC1wh7TqNbM8o9d97za72d1KXX6ct",
  "key47": "26yEApsknJ4r5cvNERiQLWADbwXSvNTea34LevjaBnNWszAUu754np9KuoPX1i4kQf5JDM1JeS3CzPgRpNugTNRL",
  "key48": "3pmnwApJ4ctVHwqaAqRXgTuoLWFzunCkPDw9iJ2Ms8D98MGzJgRhGLc3rdifjXaXWxJTTpif6SZ1rNqNG1PG9nJp"
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
