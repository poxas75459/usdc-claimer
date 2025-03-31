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
    "2EW8BGPyZ1P4D8vj7LfGBC35XjgMJKSzFfcv4vArb47ty3SsvApXD6MfWo1w1UEjKZkbsXLdzYrMJ8SQ7DbJoTic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CFmzJjgV4ZFqWyNNMTnm1XHvfYKMj2Jj2dt2HtXHGthvbqah6oQad5qDPf6KRzwvXgsUVLii3MpGh8QEY1ZNU4r",
  "key1": "2eHSeydgrYXzWzckZHm8gFZkZZGB7UFWSvMe5dF6SpypV4nNbYiRNhrNA8kYrG3APGR6Hq9ycEbubMPE2FoPNYkf",
  "key2": "3JWoLABPRmPJNuUcJwmjQiJzU4YnX4SQWe6Ybkfiw5o31pnPmmrFQErh8ytLcJzo5hroBowgtoCX1zA4D8iRhmVy",
  "key3": "2EHYcAdvwV1oeqFc7fkYrgfdX6RrBZL6vTUw4oMDr9Tp86RqT4BNXtMEa5psAAxHsbqsmpwYSXxjz1x8XQnjWCxA",
  "key4": "4CBRUU6Lph6g4cjR85fiX2dvZwTw54MfTfMjR2gntn9GXHiEKwqfCEcK3soVhy7tF9bqvTc3YGRAq8cUoRFFtjBj",
  "key5": "4bzj29NzTYJrVNnZAYk9g3dqwcvMruwjjQV3mdZwofFR4uKwk75U9PmW4UDSyCBf76pKH6JrTa3GhX1WkUC5WQwb",
  "key6": "5Z4kWBUyfrqnnm8jEx6p174sNRGikaVWYzj73gbzoBTHQYunn6Yz4gyAkJ2rW84Eo3o7bcU9Poa1pks5n89NPT3Q",
  "key7": "28vtJTidbbhuxmAQQkRYi2rXwAHycackDuTeju8XzHmAvVLxDQx33fvPdjQdcERRNUP6fvSBnyh2wHKsMUyHLxDH",
  "key8": "4YbmfRBW7QpmbBD9qCbT8hy3tfRLCSeM2RdBiVHBEdqiLgYbRwafbfUZnPx2Ao6jfM2AvmMLHzgRBCmXsbYQ58NJ",
  "key9": "4XbsbXZGGduQVTdFxgE5gsmAhSZTnrWmBoaaj2tdTvicmwCMyJJemDdNnvDN9U2BgXsf4GFJ6XhTo9EaFrzTUbkF",
  "key10": "4gGAuhasWn6D2qP3gz34pp7VjodDqoDE8EfCR54V9YCYSMgcgZEsrMh1D3veXZ4c41HEpHtY7v2JfUo68VBeuA2D",
  "key11": "5GDi2RSJVKKDg5CpLbE7Y1W8yUwVuucLPhL7XECWabUEhAjLU4kDsHDxQWwcxFBiviEnCkWpWBCBrewnBuRNFFBD",
  "key12": "5pXdyzV6Kn9GBD3pBhWnFNiKkDXiJD8hrqukKPoFtgTB5pcV2QTVxutq8wxrgH3PPmLzyMH1k2e5Frs5XApfVVak",
  "key13": "FQKBkySbWN88bqaASL5FHA75dGKR9Kjrn8rA21snxA2nWVXRHCXprHCtXQBE8U3pFHab8prnGFSPGvQggwk8Jxn",
  "key14": "5aZiSRDfRQRk9mA7g8LtwP3TtDqVKvaQWRGpA6jvRtVNdixHtzp56q481aGF538SPjNnFgty4xh9Mciqx5YgFueQ",
  "key15": "vN84ismquBJE4VnQmZjxmbAgbbE4pFEtWzJCPHJGnsMnypJ8kNcDPvuXEXujL5gn1uzAVk6m8kaKbgiJz517KHF",
  "key16": "PvUzNVZeFrbpW8uFHRbq6BuuVjGLevRCejPRzenfVKBB8h5kJZvQmYpRxtufG4FBxVpe95p1QCTAmcoWTYcdUGG",
  "key17": "4AbJV2D7LAS3VtzqWaaVwqUfSWMnsvMJejqGHdGKNBt5Q61kcMqJ1M5GYp6LAu9fWsNHU9pqAcxYCt8VRoDTUnXq",
  "key18": "3eis4RrEWMKRPkpMJjFhTm4wbfn5atyuEKqRUziedQTJu4JQJudXuRWkDiE7r4Y2qnpFRihZyAtQaiaboNivYgJu",
  "key19": "5deHTPC3smevMg7eZRuquQNC2Te3RhdwraaAi4x3yt9DwUt6qSFtuA4Nav8nGqZJgsfi3VPJrSRz6NeZD9gJ9gqv",
  "key20": "4d2qxBMvAGEPStGNt4YXCLuEqzQv9PWGWUM4UJCqA3ep84FkYu38xpCCinZ7hNjraShxregrNVSFwqa8BXUWXZ5i",
  "key21": "LAKXWpwBENBTZDmwxgd1Vt4L5rThFkNmFoxV1jhnF74CD9i86HgajThJvtPrdQZXKhd2XBap8VWUAmMHhpMtXNE",
  "key22": "4YXp36XrXoJybXr5koRrqvPDPt4DvKcYriVuHsrG6gHLFJd64SpeUVQTQ8x6f2mhdVAvyVd9jcgxvshebASSsEv3",
  "key23": "4YhmPPoHaqN3MD5cL1JabZE77xzWM8VtVXRvuvtzLonP7cnC7c4GTukacdi38vtnFGRJaJMvgqQPjCgiC31byx6B",
  "key24": "5NrsJvBx9MyzgzX6ZykucjdLo3TFwdbBP4YeLmoZAqQRwkSSGXWVmoRoubJ34LZWjXoWywC6CdLs2utDbdyrCR5J",
  "key25": "qjscyjxFNXPrd2cXctJjPVSnA9psPpwiQ82Y17Hvf6yMk4mwsATFuPxmpYGALUapHKLxCyn5A4dDAcSLLPR4G2X",
  "key26": "2rp1YoXMLoSy5aoXUbvkuVgQJdNnb14dKmsk1AJ4ofBNfkN4gSmerPGoFvCPvUa9TPm145yGc8Qs9edqTiaria6h",
  "key27": "378WheiY7UNJZCLU18ZtDMo9UzFxkLyoZ6j2nY84m5TJH9QGbX5X6yUTFoCSRj83tUvQB4Xx8tkRx3phumXzbuMD",
  "key28": "2p9kZdJPhVqJiozXHnDAqFBHJiJhqWHvqzzE8w51Fi8PtwjaM5BHWNqNhY4ByCZJB6s3TypJxsVPsAL6tfTDCARy",
  "key29": "3SYiQpYxHMDW924eXGHPGxAXsfSjNzndPrU66aFjJsZBjgveKuVpvpeXqfFnPjzwh4QbjhpKYVLsG8UnD3U6kSGV",
  "key30": "3kwobk2nhbCjWLkSZmNrvV5sY6obrj1S437G6rMad4Z4sQ2jGroDuaK8e6VyoctpymYsxkikVbbVB6TktvcPGkjE",
  "key31": "62xSxDjr3SyXUj6frgdKviQ7Vm7VSkLxm3Vs63EX6yULNn9gB2ZxkqJPx1BNjjQPwsn7EWPanwk2bJfKgoUxPhJL",
  "key32": "37jxi28GHJDnwWnQEv3bN67KjP8VUcJWJsaczhmGAbBajvctb7tsqGLmF7L4mm3SWbbBwUVPgqbg9woszM2uL7cN",
  "key33": "3L5xHYaFJpc8AqQ9GYLsXRigAhGh7EDFN8hstyf1W41tTT4L38QdKif6S4murSrF4zkTYoMHgfz3kZY423PbwSAf",
  "key34": "5EzvhXqCmxSR5JLWoDqrr4PKz27N7gU4hbfGDmufJk1dvJWv8cMCpVM8GpAjb4Gp8UwJAgMYMBf1WpoiXZ6sWceT",
  "key35": "4AiZEi68MR9ALmzQh1KAMEwGdx2QJgLFj351uAqcsyKCM2mGSkQexEQpktfggTgDCAenZzTV4pEqxrSD8rpND93t",
  "key36": "37KLtanfuCXyPaAyKSkL7GFr8XGUVVhNsbhPSDLmaPeW5VmTjFpYjmixnnXuJj8FB4puvTH4yrxzmsM9r7q976Db",
  "key37": "3JChzRmJ8GpTC21qc8NuiPz9u95aSMf3th6odK1pJ2dpHhm38bcnrN3mxpW4ZeLLiK66HTpTP2HQyrUkS4AHQnau",
  "key38": "4NT2gcDigJgDNZCi7GhVXB9hC8rBDDX41GZcQXR4zf9dGGhMH1rfFhBzVBTAgcRne3SiYS4eobahFW9iYPQ6aKi8",
  "key39": "38sdEjpv6Z9vQa5o9WKbm9wXZk5D4sM3aaQHiLvySnfBPUKLoHUPPatLJHezgv8eKLtHpnTEpxYeNrFX6rMp9tYh",
  "key40": "4oHPYenF5H4Se3hDBPYxzPnfC6tkPwVSfTxGhVKVme73CPPDJ5Np4BvY5MUHfcRxdT5rVjrKs2DDjRyh45JAB3XQ"
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
