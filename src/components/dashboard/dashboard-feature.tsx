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
    "44BxpLi7e6UQi2Uy9PxR2Xq8tM5s4Gdpr7d55AUGcEHkrxJsJT41ciXvao6mESURAAjGYCQ3LdUT5dvHPAgWTSvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xyfCkKqJd2RZ2eKeLwRXJhaXhM5sVQfPfiASnfSRKddEXuKvemyNHEyTU7yxk1j6EJdkW6ay8FbY9BM69MqZFko",
  "key1": "fb3sryY5uYU41YbHM1KzJSELmS7Q9frDUQ6Mna8eyuhVEkZLk3QFB3uc13e82xDDSK4afQUuPqP2iskAmUKeVRH",
  "key2": "5HsMRck2rtD7oLSAUtpswcjARzWuPz7LSqUUw26kgYpNCTkTFKwZPmUdHrvapbFKqmfmm6PFHqg9ZCGySjwJvqBK",
  "key3": "5P9fJff9AZwwMsFxgVPmCss8yzkeNx36AGEuBDLpf5bjq13YmLyNSjZ9MrDBCA8sK7NJKedn8LcTfSwAJ4n5e6nW",
  "key4": "5SNSNedK38MaYH22Mcs8mXCrf6Q6YxgMMhrde4hpEwHi6yWznwSmBqxLtnPHfCgH8gXr14KGmdbWntGsjT1nfB25",
  "key5": "5ojzveHBrUWJ7yVhaZBdXrwuwEqfALPC27RadJWnzZ9oWH2iZpg6Wz1LHELNJvaCM258ke4inHE4XbXKgqKjsw9g",
  "key6": "5PrNf1bpLXJG15aGqSJ2ihjs7p6y3ncGTzQKJceXqpacfEsdjiHKTgD3MmTRS6ptVnLTnJrxSC15dJ4MRg82ZFpm",
  "key7": "343BsidSbD4b9ZkP5r3J4YmqxtYacbZVE19iKBgwHfRddCUPyYaAhPJUBRpA128bojKF3njN3s3EBTWVNfPdQhXA",
  "key8": "5JoBd3T9MYkkBxcAdF9VKTP1R8xc8jfMDVKJ8D9XRj8ZFZTwXiC3s8noMXjjbFpLtd3fxgDiyTqsxpSeo27rGabM",
  "key9": "3jnmNBKVxmLo4goZbCbvQhSA3jzPv3Qe1YWRXnmXP1uqm8XmeBCeQraqs9ubfaF4W1mxsVryrAWkLBZztoMcE2wG",
  "key10": "3agugL1RinkvpASFyQWtk2JtZE8HkkZ6hRVat58V1zCVPkLDjpkCWhwA54cmK1fXTkt2n6TkteW8CE4DyhXioTsy",
  "key11": "5GLr7Dt2LMtmLQ8NM8rqyeugkqDjzfZ7oyUbCHViUUoL2ubKK6kBupmaUxue9Wc45rtHTrArvt8A9eHFz1iLeYaK",
  "key12": "J93CkynerkgU6BTFNoPxQ1kTRmRrJsoMtT3EAWT13rWB2qZbn1mZfCmHbjnzqH2vs7vdLEZeuH6jshDqRdygdUd",
  "key13": "5Fdce21c6orWW6b3WNxF8sEAufsG9czyze9W4WieDQjVMdd9aqKK3AgCYP8BR1JaSprCE6RJ9KR51ELvM6KEA4B1",
  "key14": "3e5j4Ya2sedJ999a8aFDe1yJFfEsZXGsST2CbvaZB8cFJQZ5pZCML5rcj39G5stL99yBDpmkSEhtjXiBkAxAR9A6",
  "key15": "q4hCYLJuSzVmNaufUHMQdnviasQdsF9oL8bdWs2ChchazDo5hjNKDerUF3RLUD9hJj1ridebWJpFgp8u3TZG3EQ",
  "key16": "2DzLfdJZW3eXpjsK6fik6PsZ3UjJfMQjcGPp3TH9DgTuYdL5mT33FDB3Mvjv3CnhmoVWEy4gav53bssWE3rTDgS9",
  "key17": "4Npb6MtxCXgu6ycTyq6mXKRvB1KCPxTzw6rLnie2VMxDoJJLsdZstNf6B3E9DtwQ3mWTWAs44ZfAS83Y4rLfDHtb",
  "key18": "2Hd6euTxc7yyAadFuK9NzD5h4Ne7qMdHHK6iBPprQEVZzWdkf231bXwQ4hPXr86uDefXVh8KDddh7bqFX4CFv7kQ",
  "key19": "2VQwKgA2zBujrrW8bAFHyKUE1wKTmSd7skAFXcHB6aFKAxZ2TTeQ4dqYRpQRXx8WUtu4vitEUmqjSf1hnZM4oyWP",
  "key20": "57wybYjjLawZzA2LVMiyCvoVeBZPt2erE9YaRPDPSa6NVK2shRsV56oyN31THYenLCmxG9xwHBZ88BwJk7GqKKX2",
  "key21": "33bUt4W9KgvSrvQkh1mLHHFdwwpo5JbDkeTsRU3VUkt8ogpqkJgcS7yysXq9gQN3fPeU3wjuA5rBfNF5hiFXzpZ6",
  "key22": "2DpxdRG8cfvJazK81XUqhtRcaJi67qiYXUVaXV5zqbVKz3j2VQPJeofvbU1HUkmhdJaqf8VfpmTf856429skCpJt",
  "key23": "4SgHy5vQ4FQjM9cXcXs2D3zxVGTb78nVFxYbYK4BDBDiBhyzWzsaGVw8g4gcgxFXUh44fjYSaQzDeat38antvub4",
  "key24": "3HNbEDuJt9Ps3NAMMpaA86giYjanvJQKCQEE9Zg3GUA556W9pxUi7Kb1XvQYPWKkk7uJVFqpq1AwPVnPwDHHt7Gh",
  "key25": "2L4D8P1y8LY2FQ9XXzgjrNUTeqghMos1UbpTyH3XC59v4v4wL4tcbV7pUkQWa5MitVLKBKgkBgnrYwxmZhXqYMwN",
  "key26": "3JEVS9LwTtwpLjv7tmUtob7Knkqmh2ujyACmPUFh4ZASVPdqG1C9HqR8N3bdM2KbWA3kgPoypacg5fMRzehy33RD",
  "key27": "4FGDyBYEzNMozQ5uU2HxxUqCY3PhBqhPzSJ2nvoiErXRoheeLmVL6U68X9ihQcEtCtrfJhUwp3qmeCF1XtjfhJ6s",
  "key28": "5EogZX9BWBpVcAWvE5L9Ys3PCD5KeadGQjNNJ9PPFedQXfQVTMmD8PjYKnHkmH46UQY4owNAxTD2UAcfisk6g6aU",
  "key29": "2Ag1JYCPWKRoANHizD31y9v3jVgwLgUEouhuofVWzZJ4EgXRd1gEZCwP83NbSBVGkR8bdu3rCHeToSuzTFAuJwy3",
  "key30": "Vk5R2uTJWCpkLMDKUiwcTbG1hMqSUBPdPMAufLe5AxBviAbPAhLUs33a3wTwR6gdLaqa6QYRXxYS2GAeZ1XqMCS",
  "key31": "58QrEnQDbwAdY7DPqmuikAE95ZeXYnJCp2eQAZJxVPXRTam4x4SwY8cVD3yF2tKAYwizoMuypb63y7UQeFDXuLuD",
  "key32": "5wLdKDucPCEHDo6kebpg24KCnUjUBaduLUehDAz4EjSSUc149xRCum7dG5viB9Nsae4MVWY7RE1Neymb3nU4P142",
  "key33": "5xbn3U7935j3nTyRWs6X3g6WHzz3VkP7313N6ktYwu5DhSuTGQwY6CMeQWJCnHSTN3R9StVFX9mP279BGTxx12ys",
  "key34": "4rq1sjXk5TEpztLxCTVV2i2PharL6C79gfZBfDCpBcfyc5kiMrhyMbGCcSVA2PFMyBJ6vn1Ui3RDYxR5BjrD1S4U",
  "key35": "2w2ubU3HnyBy4G1knfWWAJ2fY74G9v8hZtBu5jGdoDZFSyxRJf34GX6sXeqayPxLLS2ttVnTFRKWfFbTpwYte1Us",
  "key36": "5ztRndqvxNVfJ5MRPeiVJHtBa3w3LfLJRahTpozcqh2Tqp6So57ygAYFu3ZoZzJgSEgyKeHj2pX6g7nwaS5kpJQq",
  "key37": "5UyHnx9j1tc8gqn7Y3vFXj7nmELfEpKy1wqSWcXQcSF3UgHVXyEWxNnv5p1KjVZJTxTTCQANgHT7KvgnhLv9m7Wn",
  "key38": "5of2mpWMM1FSeXQgy2Xjdr5HAjDtydMJnJjULMfJwXGaNDoEXXVcHbVKG9AxMvLiiisg4xkNxjhkfPrWdEAxZPW5",
  "key39": "4DMAhyNAbmh1YVTZx4UUx5cm1dsXDZMW77MmQnYkkMUFcZRjQgkFSCUfnmzi8pwQgHQHoWLbV6GoJ4Rj6kEK1LEJ",
  "key40": "2h3wpD4cRVvS4eaig2QzC4CGtEJv7KXrBFnZHimJSKVaXsERKwHqQxsu1295zWzJV25qCB2qoKvVCQEuoY3MPcqi",
  "key41": "2SgSWk4LDKJK1NXcBiqT7d553ee1TC7uxfBhe9XMbLfBP32rWZnwphVnqDCdT8PJo3UdZZnwpsUhZQW4qjyETVQs",
  "key42": "GeTo72m6bqKQcg5NepH7bh6WtEKNkBkvz8MeM4AN3riKp3wFGkPH6txomZfbrzWcXvs98hfwfV6YqqJg1cMA2sT",
  "key43": "2qfVbLaKn1K3Ayd7TT8SYz9LzvWfMsK5xfeyrEsMvjpmboTG9tc2L3Hbbwxt1EVthpYJg9cuJqceXn78eQKiDAMJ",
  "key44": "TmS2kCWPV31ostBechkENMzGc7s3b9cq83nXNh6qLz7FBuAqL9P31Y75eNLPWyodnUDkyEbVui8uKBz2ZvGLCAb",
  "key45": "31sfUkHK2RrewMkhsfBJCxRmjExo6yhrfsL9QcQ37B4cGf9VyehcZusXKxL3a8rJHHM1Pjtp4QcgwmrkPGTWfDUW",
  "key46": "5QgaaWCAVB88VTNyS2tM366c4MpGhCHNzepHNGC2K4fRA92LG2xBQ6A5Z4GmK8Kqfzb6QBG4gRDCYdhRNrttoeNa",
  "key47": "VYoMbWMDh8CYa5WXicBxS8KYwHoKMNzQdjeULgmK2FZ6PuSyX5vT1LSxou8b24EVqQnzrLwYQEEZsURnoF5ZZsw",
  "key48": "JeLVCiLYbPfdXtAnWKTDVnccwJatcKR9EDm45gB3VRdrcmQmojWXZqfCJrvZXHjbD6J7aGb6UUGA1e6e3EuWYKR"
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
