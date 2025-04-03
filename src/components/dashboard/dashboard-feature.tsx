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
    "2eWuFPS7P3RV4Ssw7FbRJu4o6gdGbethx5KoUvbJy4xvXZtoXPXvztoEgmoJNHFsD7HggZZmPF5y2VhFGpNgnoNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63P69QDckEHeo664ihtECJoSTucRrVGHdDaawXwUCBwCw67XbQSn7WimtdEXbpH2QGr9kzm9SEnFkJ3iGCJBKM5f",
  "key1": "3aKSeUTbtdkiPHvFk4BYLirqTQ9d1rfYyopu5ESYgEdHVXMEuNNT9i8bjBhU89HipK55g5vekWKZWLwrAg5NzjLq",
  "key2": "28721e8q742Dm7xpViBDgZEUSAvRQyXxftshuvEHAgdGckoXed1J1Gm8fm7pVhxijYfypEDVqJ4QaWQnBxsLV5ic",
  "key3": "STaHw3iKbwpZRaWfpXvJ4w1EALNaBHaxPFgHXgupz78KuFg3nV4ME12MZuKgRB3uUiFEn5kyd5RsCtanc6jnCzv",
  "key4": "4nte1aNALLYz4Jg4EfRxhqseDfm3fuWV6MkJP6cBN68Pi2cWsQSouA9LffXKpthWLAiwhjzi9BzRA1Z3nhkaMosF",
  "key5": "ihew5fht2bpWMHf9NeRVgTfDVLLRZWMdhNrtbfE7yAu29GiV3BD59behzi69QoUD6GXzpQgnfka8KoBXfwtWAva",
  "key6": "38YE24FR4dJ6iVcJd3Kf9gWW4rpLDyem72cn78HhopGhyBi2cHBU8GPbLT96uVswGQiC5vypiPhMjsuhagtZmU5w",
  "key7": "5ozXJZiSbmWPZ76UUbUtoMw2USyDgKm2pBx1Ex6rjySnc6EyzN79rRT5CGQwq9iaSJ97rmAwqL3HPSGPiud5W9fK",
  "key8": "4P12SFmc51KqLfUyhfF3cUQfVuTWsLqwMKixGDQ3wqm5pyvhC4kVK99R3H9rZ9gqQo5d7XuzJ79cKrLVx1UPUfEH",
  "key9": "3AJpf81HS9d3x8rEat6K6DpzRgStpKNa1ZBT2PT2iW87WWEUGCUTXpgqwUNxGSskQ8KvXriHKjt2NciuWwUCd1F3",
  "key10": "54fAu83FvdyySM2fpYySuoFwuJQdoEuwnoWtW9svE2DDq86FJA9kaynrPgpp11sgnubb5ENc73JF5o85dyR2TMqr",
  "key11": "4HBAkoDxhMWdhTeY8BGYeXMBLZcP1iCTmpQ23uiDmibD2k42Siiyu5edUvdeCB2jejZRwMTev3MPrzdnLAZnHXPw",
  "key12": "598dUXa32GautEcLBU6cx3qoEdhLBvTVaHdAsEjwRS9uSyLf9gmujs1A7paT3vwAWec2ZEksXk8M2mUimDVCmTtb",
  "key13": "5Ly53HZs8CzEJdqps8QaPd4wG4E7SyCR6CitU15gV3XBpepFrVDBcwoECnCdZ8ZMdDWXjj2GzAB58R8ybMcetiFp",
  "key14": "dzfv3GtV5HPaH11cXGMvFj2RDXmGZS39LSjKKsvrCAkHqmrVoARzAoWyPipGbGAL89up8nXU17tkjUjRCKxuWWt",
  "key15": "2nJKdmt8HbZLq9ognyVMdTeET2FsaokBtuqHTtHnGPswedCMDsxkoMWwqbWMByEgCAhqtSggE7RCiLY1h7muFJet",
  "key16": "T74V6X18uQcZXfBxoihpdXtMY1eNbc2x6xXR7YdDeGubF2xfPZVi5UzrwVQ3zpMrHVkXd2Df2UWputNCCiVfinU",
  "key17": "3XmbkHZPjv36hAggJTu872Koa1wciiwNmMashkDrct9wmht9RyPyznc8BiayTRVhYx1WQwtzXG3eJgtkaqzizxth",
  "key18": "2SSJqoQ6ie8vH5rdpyQfLgbcrH31Ndy3ZXzzVH8biY7DK9CqBcTVmrLuC6AoR3Sy82gyhv6Yde5XhMzYhpkUwRbV",
  "key19": "2ss4acm5aZRV9rH4LxSn7eaVoPGpXUwrCU4AskvUnceM1Uaz5wSrzbWoXMLaVv4tXThqz8FH6rvosfh5V7cJdkAD",
  "key20": "2UeSVoMd5UhSYjWfnDPtJ7ipJs6JTpLRcc6Nd9TaCyo8EtRFdWSWqzN7GbM3smoPn2UbxJgcjV8vvgsZzfhh1uaz",
  "key21": "3WsUs2auUh1CA96vneTDsu2w7cgy2EVQtccTMbQof9Su3AsDCb3P8cGtg1DvHUwWSeUoiFiSourPRHh9K4jBgfVg",
  "key22": "4EAZJn34UZz7bpbBP4ri5nXH1D8A9rkzY6oeAFvyDcXLTH3HUBy7mPs3opWzc6ssVEMXEUCSeozDYLdbfn8bu5YN",
  "key23": "5iu8bQHpyhQaLVNutBj53A6F3N8Him6MFBDJJWsU9ZQiWjbGLeVP4KVBv5S1W8tnPhZEkuFR6XwewizntYb4SbQj",
  "key24": "5NQ5MtYDx8BLXMBKVBMWuEDjdy3mmHMPCRLXQz4RjBcP5YYbE7WRAFtjsQGefj8AaYAJo6LySExtG9r2Rcov9Psp",
  "key25": "2onThS3qoBPajXaoHBNVdcv8U6z6Mt9cqiHoNe4o5DUUNNkNamK97KWcL8xMia5FV4TS35cyTUV6E7fkTHicCsAp",
  "key26": "5zcmdTA23t3uicgTZfTtj1tuU1bDDd2F6ZBeqbBw5UmYhULRAbWKCEycVzjcVoJCP8wAokHUcjrBMAy3bdn147vQ",
  "key27": "BPsyiv58erA3BasfaUvwm47gd3GgFY7eK6jmFjwAUFTnKJ6RhtbHWsnTsbPQ1f7NjcYCEFWEUdtdsd3g3rp9FSr",
  "key28": "2tdnVtKoRJiHwCohprVRzZ5rvthyR7reqqE2UwcGDRzcNQPE9HEdDdyjwAqyk5QRPWJcHP1K6AdaLC6XTL1GgXjj",
  "key29": "tJpPCyq4nT49CkLWwL12sK18FpVkqz9DswrKgM7QcPU1bEt751oRnUZueCBwiTYfQ3DgUF4krBWeuTDij4RkfWh",
  "key30": "29CDjVmZ3PaG6x4YY6HeGwMwUWsnnkSQVG1DrfE5BwSQwCGUTNj3JPdzZQU6igRCzCj3vdNC5i2V3uaS6TBUJfuW",
  "key31": "4Ev8Dt9rpfNTMEL5i5wKLgZv3yRxgF54gaNup2z4xbqCYpYYinb5WRahXmEB6PZ2LAY2zDy3DTbtM8HP1WsPUnM6",
  "key32": "2EoAZfRJEwVF94nV6RNkuazZ451DJjaK9KosvxSqCY79PeqEpYMWSdSejsdLrWLvSnUxixEmd9xBSzpXpD58x8SP",
  "key33": "2LFESLfygn9tGaTvi8KUhrEhMfTbPfFJrZh62NH79bFDBoYKwSakwEtGjrkkaGtdXgQPVNHfEy85t6M2Ue6q9xcZ",
  "key34": "4yyVDpG4mxpPuEk6zV3SomNpJRsp85yDpHtjSa5gu3jKc36rhQEtiRWKX76uMDmd7q2fzjJxGKcQbXqEG5xUVnzr",
  "key35": "3Qxe94prUgH3Ey5pgoMUXHSo2siPpfdy6hiTEowX2iAjBa55atguasVTChT4UgpCdN5SUYR6eTvmeycbRkiND9FS",
  "key36": "2d8gtVaUU6BjAQqSAzveUqHWPqtHceHayQE5BRRCEqnWFKfgHorugUX45L5Ea7BQY5KJuCifxxFkRQ4QftFdSv3M",
  "key37": "3ArnJxDE4AQpZ595LXReyd1EQxNtTm1YZbbusNWb8kSNVZThTnq7purETUbqGLYYwPZt9QJRSRmbZCsqhxQRs3S2"
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
