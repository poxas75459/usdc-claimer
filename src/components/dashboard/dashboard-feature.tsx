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
    "4H3XtrabhbwrpED9o3bHonAY6qBBLALspDkHSnoDu8hrkNPUib1NR13e4awMMyxagyoLZPfHoT5YmpK8u2uPSKim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EVD8UqjKcngYFZHkBE7azAwU3s7B431oAudgZHCvigCzPMeef82EbaRdwjdMsfTHwgE14EryeyWvbF4Lm2bNfar",
  "key1": "32VutdqX7APZQn2tKbFTZny5jFqdef37sujkJE5y9bnggyPyGXrCx9dN6XzmU7yuMuk6usFz1wBqTR5pYupF6cV3",
  "key2": "28z5VmHkYa5HT5hdrWP4Yfqrzod6AeL9RhfHBaiRUCyH2zTRDfaP2ED3ek9k95e4NPDf2KBmEXc62entKDxz33qp",
  "key3": "55TYQBgofHncc7xgHYvFAYxqa35govEfP7xG1xXko5GFat3VgaUR1bVEjFgs85vX2v7gYCWjH3wAQ2hN8QS3aFPo",
  "key4": "6Z53XwgcvxT53GBHTUKq5MgmgF68vWvLU5EauVmiGkPGinZbELQEapterum5qzsNtA1yLcwa7VN5dWFwBaTTtom",
  "key5": "4nW6mcjY7m78UM4nUvjD3K8MboxivqgTx1AxwN19SbNDVDQUeE5pFBy2geYc76XWJPenKaRyvNwYrtwZGYqZ8PSy",
  "key6": "3PnsaZQzkHQ32Xkwd4Ru3B2FY23qT9sW61Nvx6XB7SNvyW9FjiqEiJHMsY32os32CL1hvHeU4SrWKnKw7VStdzJK",
  "key7": "5dTnUU9SXRuYKxSwqxgrV6W5ptkEiNx1mpgJSu6wiAFHrV2cw4KjavfuREU89dYX2Qoud4W8CvtyPEAYRLuRbV6h",
  "key8": "5jUc22rRwVL1pJBRdsZtKneGUSa21UiAhb51vbRgZkfwXvvKCv6NVBhJc9PHEpbjMB5KPfKi8R574CSDnSGyaEjv",
  "key9": "4ydQFHrAFqsFiungwZf43kCE5zJXRFiQVCByYu7EpkZSxe5rsUaKEBbeBBcy9WdDBtKBKW4TqAZJqSfYCy2e77GV",
  "key10": "5FkHETkNgd9QCmK8Yd7CpPwZgqmTBJmxrSPobPG1r2JQy27DBmDzHEcZpxiPiG9gCYScBgNhjeiDs448zDuuM4ak",
  "key11": "trP5AnMQcSvQvApGDUkqtBPemPP8iERa4rHhKZZt7vBMZC5VntwhWuQT99NhJJcbC6ymRnSb8f2kgNTnEytRuDY",
  "key12": "2kjGwgZ9uqaVCEQwuZrabQHGEvuohHQ2RNsioT2PiixSiPF3c81RCq2Ng5PC8F1zC1zRpEJsAbaaSzs9nxqjAJns",
  "key13": "391J3SGtx5VtkrphEHJCf15UrCPcHwSWUndu2UUiJe4xMp3CBLvMe4LsUnHinhEGiVo4GMDXJNeii4GmaCBZsspv",
  "key14": "52wcA4ZhGGGPWWsXpoSSvxiTmmTt4Jcpt6oBBqN2f1cfAxPMBTBuQ9EMNMNRAvMNuuNCPHxi7mH1nGcsPxx3bvTM",
  "key15": "3FEWjqwAf3xyZk8U4VYFNScwiovYGrBEo993W15M8erXAu3yRKtTXZhUKUYzwm5ftBtSZqg3ofzcuVfe6mrEU7j2",
  "key16": "5GtmRmmavr219XsoZXUVZ66Laubv45dRjdZvLHGF8sSMz6DDKud4wpnaWtMwxnJWzER3gGsBezM7acEeXGTtt3K7",
  "key17": "3ZSdTKkhqQgtTizsrPVrRZAxLkC5J8TVkMWbExXtKPgArfuvq6Hau9EfXd9hdJhh31wEgQTB8wdBDRGfQrGBwyuz",
  "key18": "4ZUeUxBKxsUsTXzDE9qtpGbJy9rFLDEitspJpDoLgP4p6DaD2rDgJsSeGPZDvMr1GNvDPkLrijtsKzAk9tYSTRBe",
  "key19": "Z5nr6AK5shQpzwMM9iSiUQx53Jcp456oBjJpAA6gkg4kMLkD1FndsgXbz848kU7A5hchRLq8JoiY3WwYgim1TEY",
  "key20": "3CC7a1nRfE5nAyRnJq1CFdWNMFWQpofsJV88DM9ojeCBKHFdZSXFc4xTibn2KjujLJ4zgyJH4jTbNJUS817ntTpB",
  "key21": "2jcuxwrMaHEQauinfrUabfxyKVByXcpdZ5vP4HfFRdgChXtb7sArgrzAxRgtaaaeQ2PLmJCx2Lw6oBLWHiFVCtMy",
  "key22": "3MXQ4fdiWgpTMPpfEXyDypNMKVa5Nfoe2CznBjgpVAgdLvanDVvoYtQzXPzeiiDjsjDTnoXA3tAkcQ1dUB5PuAMS",
  "key23": "3gvc1ub9hJ3jZDFyPsnWqQzuXM28cK6zeiJGEJ6uGKAkzaGNnDgQGAhCaYubvoS8NotWRzMTkrWNWroQsTxWw9Bz",
  "key24": "4drbjfJifChjE7KeMwvDgMBbr3ZojT9SM6yBFBefgpVjZ3aVhBxEN1nTCBFKVdqpviXpg8GbZVxv12DRZ7AQs2xE",
  "key25": "2HuXG7WrtvhU4vsRc6ypWKEavxk89G5QPwN7qHDKnJDwxqc48E2P8KgBFfBJH9tRJnNZcXP5gU1j5UB67Gb7tWb4",
  "key26": "5u9J6mZsa8qDFqTCtghyAZvsC4zSJxyUc9PYs829LC2BHFRmqNnzNTowX4ahiqM2DiSWcCLg72ZEgYJK2Qyk4PvP",
  "key27": "3kLWDKr8WVvdSWgzqFyVbbYU8VoMT5XpGMDHmcFE3Gsa3CZnynZjN16QSt6PWfH4UaTLN2QSZAwb7dM1N4HAzVbt",
  "key28": "2iA2BdoDWh6JrhdhqcEV861tY3r9R5jCPdbi9tpiVqHYQVd1VLb5HPQQoJkiWQxCEg4KPtNu8bMxX5rSDdaee6PY",
  "key29": "4A7qLWkuhKqU26bXZNC8Dvoq49gHyhMVVEdZEQXamMkHYqMhZZ7T8nNpi3JLbEr2eucY7vVCrQG9kno7TQuvXbwU",
  "key30": "9QacP2KNBJ6976q8QsAFnconeyjbPS3SLSYGacJavj4GJoJXiVduEtKpouB3Kg7sVDsxcKcaEZdXqwwp6F7gWrD",
  "key31": "4oogKsvu9zy33KRky3NY232etcQDUbneDmS6HHK7deoGYhCKaYdxSAo3c6eVZhJL3aDsRFzPaMn45GEurv2UNj5H"
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
