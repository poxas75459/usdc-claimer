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
    "4h6GuPV1gc3Xf7z8EKrvYFUTW2PXPTtb2Bt8yCMU1sweDEWQNV5RGMEFaQXXrAbbny6AYJJAUqtfqxpmmc176jSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q8xGcdp1oRYQ43jbbmvLXhaJsXVBU87hs9fJm1Y6qtn78G4fUiPjfTrvzq7qY5jWwfo4fkFHQj9n9jtxYmVsTiy",
  "key1": "61fbQgn7EZxLt9vZ6pvRcWn9ArjnvQGzjCDGMGj1vbrwzwtyoa67bRW1GWymsSdsyV3V8es9z5VkUtRwatJEMETB",
  "key2": "4tfkQ7h1VTZBqYvb22WLYR9vKCXAbE4y9M1KGjjxpkZzgU9FxdP6ko91fSUuUUqzDMsHjaZwq7LwCbfkoBovHvdz",
  "key3": "57vCxYUTTUxjV4oEbcaBuqueAgK9zXWr8wBuqJDXgXAzSDuMaKzK389R8GNitybsrhhGNJFELnG6p9Na8FarZK8a",
  "key4": "4zVnZk9VCVY4AYyqZNrSjQHseHNFnx9jbuZnqiCLgJVwG7SDVGckvbuP4NMKVCgykN9rwvdobXgFfxzHuRzSsGsD",
  "key5": "2wmR9wpVQo8kpB3XVEfgsLDNQTC9aSNgp9Er1NsXCC58ZQjTQd9zMWnrfmmGCGKFcTqvJqZy5YXYkq6nPcRENBau",
  "key6": "mtU5HDbxgvpxFRBjVD55gxTr4vfgta8NX9pqtkLeK4umCsXicx3WwTKC4Rz6hFrkF6iTZroPNMsmfsxxksDavdt",
  "key7": "3qeTS4vtAn2ynUnc6hFBMwDubbNJ8ZyyNxKWb7BBLBunvvUnLPH7DxqTXESRdZA3oeumRmBeewhRcLefjyYf7wxT",
  "key8": "5Hb6VAnd6M83TPQHA6SkmY4tXMxjHQUYA6cb1jV6WPc1oNoWRbgDT7JuJw8SMnXzijwhJFrvgVFtA1pUvnusvhn7",
  "key9": "2y11U92Y3Zerke8jee6DqQqA83nE5PF5kN2sZzeDqRvreET2cu9w1aoGZbG8LyMPjLjnrVueRGgy8UDP78L8uA7U",
  "key10": "5x5cz1mcJToCuR5z7cuyCc4AE8f8CMHvF155US4P9M9hRuJe8GGTAUDmXLfAbhrM8ThcX4XGzq7eAUYWTFWBLMAh",
  "key11": "23Kw3niSgkkvLM8oN1bwB6UBubz9Nv7MVkxjTuPKpYUv6VTLmh4oQB2iNdSpUsBVcwGHv1dEGfeRYNo6oXrbU4GY",
  "key12": "odHJjSGBxrAYBUSFVytaFsvZkDXpdzSBmYpuMsDiEaFzF6mykTJA1ViqVon9JdEw18gAi3m2VNb973B4BmyED5B",
  "key13": "368RM4AX6KhZFquwEcmSxzi9agW4yunRxF6zFh4F9CwVtwxqC6j8EGWBUUk9CdHsDefviEWF8DAnJzePEz6bcpUC",
  "key14": "4CzHUojwmcPLYZf3snR957KBwB8RMRBwpw6Gfjn2rRB4LwARXA5geuJGze5DVnHdm6pvQ3wphHrRnoz9WSUkwZAi",
  "key15": "2K4CWVq14sD32F7gsbA8iWpJxQjeR6iLSy9A1Qppy2mZxmRsDHK1mVfuhYDW8wznANFFpz36PgRzcduA8UdZHKi1",
  "key16": "3LpCeyBGm4g8tpx3ZM2TqDbY2D5MsrCLxGq8EEKjnLvg1X5HzDvTZoHxCKqpixCGYPDbXcasbPLcMZPpyv63myrv",
  "key17": "3BoAvRBZs4iFyVB9xiGBwbDqPaJhXQc7hvMnnhtcHYgZySYKrRqPaoPBRT2nCrzjFvhp85Lst77zojsGrzMjdVJy",
  "key18": "CcCN5ir8KBkQ7wxM29pqqptRwvGREWgdBjoePQEqtXrg518ftLTjpMC6f5hq9HCt5VvCZqZrW5Ry4nRk7arVcmZ",
  "key19": "52vYsk7PGTX7cYLnebvu1bXob5SWQX5Xd4Btzw8gCif6CssfLFiLU7sVGxWvfx1DckBHPUKYFTV7V44JNwstccVr",
  "key20": "4TdY4s6EfRvaj3AAxG2urgPuY1QdXA4tZm3BJtgx61mrmFXB95FuEwwgkFpLFmPUD2LGBEWgTuePwE4eqWCwkZ6X",
  "key21": "3w6UCHqQbzaoYT1RrD3eB9kQwgmYaSvAig3h3xpGZpnWwpUqBT2dAnyeqjTuGYt7eetsLk5KG9iAdhE6rSenQVL7",
  "key22": "48SqmbVS4RBCqWumSBCYcHbLdW4gKwtWoxkgijKnV5rCkvtzfmX2bPjVN31UGnjSqyU687oVz1aAA9VUZn6p5D9c",
  "key23": "2mtDSZ6QAnDKgJxzzvzm8ALTGshuXkLbkJDAvtKLhwsqYKb6AyDQrGKT7FBURWKm8W86GcCtyAyGWb3zzDzyAmj6",
  "key24": "5bCeC2JkxRXyFbrfN7wVBXmbdASwYNioPgcFFmCrYpJX4ctsDKzzMLgbG3JPnZYZ4oAz7kaQww8D94mC9uQGCZXa",
  "key25": "55vqwXwmLAqKLTkCCSXNxyYqgAQeJR26dzt6LCpLENgzD6J5ioRq7aiMdBBrqMqK1joGLqjdhub4FJzDbDEgnWWy",
  "key26": "2EPjLoZz6mDBTaSaChavDWK3KKYZ5AYnmzY5MsrT4AuJ1uQ5GQJrH5wY7SvcCaCwuY1U11pomLMKXpJGKjFUKcMX",
  "key27": "54R4BLxfDnFHb8ZjhgQzTLTLXFYCCwfcAYqJUJunSn84m5Syv2epLPVkR8La3f7XnkxWRTy8nYKFNYUiN83bdh9m",
  "key28": "2UCNHhWquPjVstXhpRa6WLXyj4SC9k7cwN49Zodc8mtysVWJHqEMWUtfUR2k5XTotXwwjdfKrToadP2iS9bL5Zwc",
  "key29": "23d4GnDWURTXM4fuqzAQEjH2Vk8sY4a3hRgMiXuvFRfmZi3BmiK2LU1vsWAKQG7ZbgyiL4YADgkmzRNxpStwXZ8T",
  "key30": "4ztsZWFDXVfSLNEaZ2GMtEG1bNzutRs3dQYvkCVDFmNASA7PYrDLGAVWbaoQ2AMwGKgyKegwfeGfmSVCZeKZNH9e",
  "key31": "tRxQx9fRQvoVJjvMksTH5z2AhR97h469JHxzQqbHpZwJnodHRD1KP3kes6LCht1EhhVxGCVxX4hNN7Jd3vUMY7d",
  "key32": "2AD3sEKdREEZsZiEz5QZ4VzBK4QDrWs3EKsQZRT79GBjHad9kDVAu1MLXMyW2Q9dn3MDueZXbr1w3YLfcfyKvE7K",
  "key33": "2dbJQZYqoz8F4avyyi53z6zxLdT7FapFK34t8hLS8PHJCdJ8cgZRWhYCYKAjiBRxyC4NrS3QXz7SCQWVeU53Vkvf",
  "key34": "5TFYtgDHNi3LaqubV3LvAsGLH9oy9VbwcXGYPiGsACwquSJ2uLX24ak6x1KV3jLyLxuUfQQNUh9wFCTKf8jgHQTv",
  "key35": "5BdPAzeJVZkzkbE27pHqFK5K8Acdn9rL5xFkpPJAe9SWf5jsLobYTmLSM1L9ZQxgytVf5S51bLLDnRabcyR8XtGZ",
  "key36": "55bYpKhVwmPYHLDuhkKAwKFFzmHGn9w89tvRZfn4eFkALy81BPWZzL24aZsGZqgfij3BZrRfPvmkTaqvVau3tcBV",
  "key37": "3MoRS9eoGUmjKsBWPKETBggCtNjPMfdtTwsZ1WNoYLse6HdGV6xNsHdA1nC1iEEa2PNkb7TKxfdoP1mtrKWCQvfp",
  "key38": "5BRE6YVJXkawNpd2nLYbMEJM9qFEwmFeiTF2LAUXdVtiYGkuwuMcSRQKXsiS4vi73JvKvBiyTvUAbBuVHH5rNBHk",
  "key39": "1LUcF5wnaZmsVn5Per2Rc2XzQoJNeD94K5DQvLwW5Mua84KsiTp2YpiuM7PQMDQxVC1SBVbtKFc4V4hhBoUMmfM",
  "key40": "62sUgt82yZuVR4tHa719Cdc4EV1AKAdcqsmL9LgC33oxRLhtT4MtBbLxcgeqLvvgv3myTUZRU422zAbDAqNP9tjA",
  "key41": "acPxBnGbEX3revfunSn4zs7TcVCjYXox6S4j4imWsok4VLaZqPQ4sLMkG2XdMfEGAF3vLmJuByp1NFjQCSJTaZu",
  "key42": "p2qYxEcfNTH6rNE4e5wssz4fjteBNNmxVeM94PaCs3kdtrFaRBzJVGYpyfKRUv4vRy5VfPQdQXbzRqxgbsJdS2z",
  "key43": "26h29i7F2LbbMaLifDjemDGuEViJpQsiX6APmA4qZDfKXaEKFKmFztB7yTyZ4ePbhyBWbHrL6XDGj1mBJKzVgWo5",
  "key44": "yNhDiLMb17qALM7qTApydsEAr9NZGfC9MVnmir9pYuvqFpeXanAKa8AQAUM2RB52UfLpnNVEccJeZBawRdd8rL7",
  "key45": "3JVVff9LfJGmQsHvG31dY3cCN8fYSm5MP2ngMvHdaxSyi17QSLjeydmVWNeMUBiHsg1hBnughtLLr33uZ2BMpaEX",
  "key46": "2k7knBMYsb1aPoFFXh8ghZ7ESASecPLosTpPThEDHeFcmAVTKZ287zLff1dE4x2fUjtu78JCozip4x9cZBtcmdhv",
  "key47": "515hY5nUZhNpcyoSytwGz29hF27WMyAwpSqNwYPr5j8nYifXZQTtuzfyK68LwJuBXLS13fTWSsZ7Nd5guJ9HAikz",
  "key48": "3Hu4hmUiwy6FFkL3oTezhWCpgimKL2TixcMcKsNKWDBs9YB8iFLxgrBrw2zmoUrxznneu4bBjuwbk1B6Hrst1BBk"
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
