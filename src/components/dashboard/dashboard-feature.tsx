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
    "62tDGcaMhvyDVZ7duG68auBpVPQQDi1qrzG32LZuBXPnH4sRVZ9TsPaYpy4o7fPt4bywQHtB6NVPRi8wFea8iuEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hu2uh8S5tYzdGZX8yCoDVQKkZWj2hy1HCm96noNTFWdZ6Qvr8aXrvDhKXxVP9ZCkj3jhBoT3sqFK4msCYj8xRu2",
  "key1": "CqnEUV8RGzwkD6dyoGq5JFZySebQ4EWWexxferXBLKahW7uKjfbaygNTwdLHnLU3Tv6Ss2V8NtEoRCbGCwacRB6",
  "key2": "2pwXoRYXPrRmcEabhdKHHEuvLdc7bKdebAGdUYLxiUC4fi8Rgvie2ovAihbSr8vrc3FLsDPMjWrS9m12FaKSUGW1",
  "key3": "5Gd6z33b4UmYe4Cw5C1vEQcs9iWLDr86gAagpyQYgt5Lkn3noafcenfiY3PCoDm5Z2thStC6Ad1tRV6iBwJZxDJ3",
  "key4": "33syA5dmLGcAgn6XP1sm3GatLtJffgNHrELf7iv7LL5KABFLEsXyDNnGjYW2d3yTra8jcwWgsBJPTZgrcEz8sHeS",
  "key5": "WzZxaicYT9d3gJPaqjmb21dWXDJpVuYrDHCQAvuXuY8Bu3eyDiCBkdBCHJfAMhXTkDUHgpRvFvdSN3KXbvp6qG6",
  "key6": "24nVfYiJ41TBdSuTDmjQdonYrcBx6sa3SxGa55G8rTZbTuiiVArjpyPzx9DLmk71smdyc7ivue7oBuU1RfqmAQha",
  "key7": "2FZFpMfCPzs9eQJCpRYsgAJ7Yr4rBRnsy3DibLufxghhZMQGiXBFSVo5Sw4o3TsEJgMtAh8vk4QsoTQjKckX7hRm",
  "key8": "2syysvaGYUMbzwh9EGMZpn8X1p78HkAiR72nACQQhfErsY3Sf3Ab64HJzeKJfhc1BBUjmE3Wwq674T6vReQwrbZa",
  "key9": "EfNXpijpaWDUkmKWHQks4dsZxwFqyJWG1ePCkdxALBeiBGU33r2DAwThGn4Y84CXysgoZg5Q79dk9qBr2VQ3cxy",
  "key10": "4NDLjSQ764qt7U1yV3vciGxc8ouLutbHE2C8fopGo14725RQAij25Pv9mLWS9qsdMkCUky11jVY6C1gmesNqze7r",
  "key11": "3T8bFP9MdCFSU5FmRvBCGqFKznjQg8q8cR6HFyGkRWWvTYA8TcQUQV1UHq1sEYo1jMMgaCt1jE94YHDWdt3Sr8sV",
  "key12": "hbVxajDj1hNRXNYumMcViyAKDGbATLD3JbfuZHDXgMGWwRiZEzDYm2GXgoCWH6XUC42mA9wxdftv8b6LQScvwcv",
  "key13": "5fb1xBgPpdiD1DvYxwqsBEL8W8BNn14UzGnt87Lxuje255YWkthaL17KGTQPTgYL6sRR3SfwVZaMYWS4vMN7erM5",
  "key14": "4RBAn9KPN2nVYPfszAjNJnUa2iyPSsPWMpf827LanFqh6UHZVCbiUGF42Ka6fBacxzjAnNvjDBxETJLhNRaorFPT",
  "key15": "3nX8JEnJPtfZDY7QQZTb5tkZNvPftGK3nWkroSRccaNunZJxkdiAgK3rE8xacvMFWXkXxM5y7S6ee29Ab3KBz6MQ",
  "key16": "4ZpA8S2RVbXtFNRYBAX3E4JsCbX2RLctUup7KUBjZgxWfYTXQJWmph7zWg6fdkhEGCoidfigUU4QAUixg6hgJqRd",
  "key17": "2ZpnDfgBcpckKct2DysvQmptdfWiSmxmJYyuUUMNKHnxRXzP16m7nravaqGwmcVcCnB2MqXgXFxVrcU4y5Y3zwYw",
  "key18": "5eJWhwhd4o7HBiD94yM4hmUxVuSPSZ8vcE3Do3FU2zVbHtxoUQsQCBkBZPsjQ8P6XdrywgP3Tnz1iT1J6KjPWE8S",
  "key19": "SzvzWzysqHcr4oJZ3D4UEFPQ34mYxhiMb1bGLokRnzYfq2i4v4avjNwyF7ynNsBEmxy5fwE68Tss3xX3zmUNMgY",
  "key20": "4cbTgXrnrccwmus1fmDRyZtmhiZwY4CfD7LRbKks4gbE1Z7PYCvcRdLRuURSMDHPqwhAvCpabJ3XzuxsnKpYqvpj",
  "key21": "3pN2hBfUfDrMMmh9HrgApBhyUHnKYRXhejkVgVHQy6WNpziXddagYEJ6m6r3NV7eUZAdFCS6onVVCfB5owwYJ9Ck",
  "key22": "2N5uPMS1XyonExytqngQq278TquwQdQyWpFF1HpSMZtbSzcpgCFxhuNRPxEeDp2qmfFETJsDhfHJjTJgcbe1kJ4Z",
  "key23": "38RpnCpqy3m5DyNZRwcKKQFaRpJ1bTSQ6aTRakcKK3gnHzG5AbPEaNMFchq9AuXCWwLigJ5VGGUDumTEaWjcaNJy",
  "key24": "51BtV4a82R8yF5ftVxLrFH2Z5yhn3Ut2Gt8ubKyHSNSHS98cGJyvUDRAgjTTTZ68HgPP1HoZy5Rhet8LP3vJxwue",
  "key25": "5cjh5sMAKqhRkq3EotorRJvJ27AwfvLiv532Wt7UZ2BVqhJ1nW8CFaauYUW8i1DxaUgi4JVhJo6B4rPWpnZnygM3",
  "key26": "2sYVbXF3ZLcPixxcQ2DE1h4ETcovYj2mXPPJrMrwjrYW4Jgya8aiaRX4dEtkQULbuWLHsKqK4QVrKtEqFNRdqN84",
  "key27": "3Z6HadZZDpd2RKDoNco5mPEWVHTUedmsk4YYSaU7Vi6PjmNgsVqN5y1dUshvrNSqzLJABTyQwQY2FKp6Y7iU4xcV",
  "key28": "3RnLbk3qPJNaGyrsYvykH3JKXoDFSzYoM63feBkSU2uZjuKtCxsvq369BugabMfBZee8FUvmgbYhL5omWdy3ieSX",
  "key29": "4yEydjy3256UB9ht4m8jrcJyywCQtNNSBFAw2TyTe7jAax5JiGnyj7vm63zCJbAYFX1BLSdpiGDGvTTFSHJpAN5F",
  "key30": "enDnGmkpvdLCGEkLxBxJ8zDewdju2EHRHg8jwLmXgjfFAfH23mbtRRzGYkxts5atX2yRBju5z1UtdoJJUjdNhca",
  "key31": "ZCrRKoTyVLqDGWvKELJchgRhc7jezbqF2CWSN4V54nUve4h7Dqoamv3kopbk9pp1CxwJAt8mgspssX8Y9A8T6Nm",
  "key32": "2L9HwE6ovXX8J7HrvNveERAfdE7EQNvS6kZvFMoa3moEvc7yj47LHzzi7b3hQcS1beipNFvsdKKWWEsyYfkMgv8A",
  "key33": "4ESiNdRL9oYYV91VaAWoAdCHm3EdihZqhLNFeibXCZ7wSDn1N5DpvwE1jWjUmp4619VssbNbBNUSHpF6CqNzfCNG",
  "key34": "4rzTi5qWeVCp2iCEhRr6xMoDM5ojFgnfLLX7NeGuVFqdTXa2v97R86vQ31XFsu75Zd8Kus5sdx4G3BG7U236vH49",
  "key35": "5SQT4z9tj3FT61VpmtkS8g8eWPHnx444TKERQXVqSYBYma961qVsCmkmxw7B1irvpegnfwXPyBMvaEhk3p42XwQt",
  "key36": "2nAw1i2diSUtgZatsAimbWxwhPZBYawtFanUCDyxr8PM2ycjqZTdJGimb2JHVJWEjFMesA2Z2qTkw1eMh3cLGaKa",
  "key37": "5ud7sxz9UqrfvNKmApuQer2ZBgCA6qXERG8Uf1Yh7xs7DrkPJqM2N9dYAgxTpnjMbeaNHiGeF52gcYcwVi9sszG8",
  "key38": "2odmnykwe54j8ZnhvFMzHg1UNDF6hLfmDC9E9zZwPnfrXruA8vF8AU4n3Mzk8F8iwsBtyqoG8f9vpXibEc25AYMk",
  "key39": "7QsSD5JoD5xJKMnUe6vTUEpdRv38BKk52SFDcQBpWCTDYvboYWZkt172ERge1iJENM25X7DAnMF8VKUeS3XXbeg",
  "key40": "2CzFg3EEdMWfAmSwYtXtsPYH2WLa3mVmxjs5wPAJaJEhr1DEXkpJ1tn3962NZ6cpbF3W8dj1wf7dzFegLcnGJMVv",
  "key41": "5faWJFxvN9PjqURwrmsiKeqUtzXgmTnbNFnUPjZd9F1T8XqYRfXgNhxpf9SpaevPDcTsbdaLnEh4VurcYYHZ94s6",
  "key42": "2heyzqPS5eNFxmBzF9137WsXDhdZqWSEDmwRsNN4EtEg63ik4xuHc2CoChVaUVt6qikQ9E1Fdw7HJjYvYUDNxjpK",
  "key43": "tvXbsrXAdNeazSiFhdCFo8bcMWQqkb1fkRcxwvyWjoEeHW8ToGnoip2VCkpQRZMtPX3RZR5GzFgu715yvNgivPY",
  "key44": "2axPv8emySKCTWR46wWPrf1tsqDtJPoJoNfkHDeEnTxnWjGes4mBJe4tvai7wmiw4NWjLoMvbxSDEB1zySdKNUHg",
  "key45": "X3f1gWhAY1CjFBBzvvKjFBjbQFvoSTaT3Z9x1BisE4V2zh3wqvtarYFv1CgJq6wYEk4qEfgFnYNnWVcmb1sYcrn",
  "key46": "2VVXWmbohySkHSEZGfGeG2rUxy2cvDaTYj9L6fR2F6JQ7oALV9cssxAChEfb2tjGBj1k8ERSXpFdHfxvJuNyf9Zi",
  "key47": "5Vi7BMKXS7QCJ1m6BSJTjc91xRDBTGMoSUpQztXMXvE4RsugWv4DDD14DFbWrk1bjKaZ7Whx6tZtGnCwqFs3X7Wb",
  "key48": "5vXmYaiVFXU6rqJ3bvbnAZ5h2QhLNeD94zETTfiVnB4Wef21MJjjZ76KzGYQZqhfKGQBLTK3Zfm4AYfvLAabgEQW",
  "key49": "4HJSu9LfrYwj2NeKx7P91ZeqfVbn2h99LEXRKUX3s8xz23vHuBGGbwfU2fTne7azxjmZfMb54KDhKZhP3pPVYimw"
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
