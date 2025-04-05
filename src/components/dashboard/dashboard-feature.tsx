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
    "5Nr9kE3VoE5okuNi7hQnVbuWuiBSgtRiRXRNiPQ9nGDJ97tNCM6vNxb3X525h4V5Ai6UoKJ6k5ccrzRuRc1GQgfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JpLb346YARphafh56HawVGDJKU6YmzoqRWqQzoocE7Dx1ipC1WJUyo7shSDHkPBnLiCNJxEjY2nYc41pResZq6H",
  "key1": "2wYdbGgMvVtvWG3z2Kh4vanWZd4teEWnM33pTzQHPUwBStBaw4LJcSiVSGio3HqKpVg8y5ZyRC6Zxq2Q2Q8ybjEd",
  "key2": "6VSHt9sEFfQFcTvREqtujCyxKsh8FN4Pyv2JWR1o2NznGQ7LUtjqexz1fmU1ftFZTecUQtwrH29rHw9aqUxzMJq",
  "key3": "ZdBXRGx9MskJ6iiLnZrRc4kdrUJ9JGW51uNuiDUMWGk41NpAVMK5bGheFzTabStkkYKChUSqF6EE7YBfWHQGssz",
  "key4": "2LkAGsUURFZ7s5yUfoTAdXcMDXmoet3Xb5XNhKDpzWX5gDf3hkuVqUJjVw731f1RYHguJDaLkktvPkiq318SY5xo",
  "key5": "24e98oaKEAJWZGBF3kEbGzasxSLtTWHXvGoi7MnS52grHgm17bJV345PZgnZHUHHHWv6EQ7udarY19XxXGzPesf9",
  "key6": "5P7WHHaYt1V5JZ7TFuJ1FJFP64qUzjvV74e1Hactygr3Fv6udQbNxX4nGGYg4ZoDUy4ArhjCAgxfQF15JKBo8QHM",
  "key7": "sxvrnA8r9RCyKXhgoYQLqqC2JnTnAKKxXpKXfU7cLH9QuwybwYG6enEF4kAYGbZ64QB1FWcV3MTnomhtB3u1AMU",
  "key8": "CWQjvEYCvoxGWuFdtQ9G8LqUWR87zBSG2zr4ymkxav7wrCM3GT7vKAnXz1x2AoXnY3M7jDJJHRPeuKsrDyPsp4x",
  "key9": "2H99f4u5RaZuMN9MzcRLF7BCwcXRjFvXaXiWY8kySao3Mjz3eSEXqzoKkErE9HA94DGV88kWTdWjs2Tz2zgkjjit",
  "key10": "3TQ5nAT6P8BbfBoqYi8yvEU6C16iDasbnSymrPy4ihqLtrVYyW4EKqh2J88hes2dqH5PV16yw4aZYNgPx6cQ8kR7",
  "key11": "3DMMtsJvDCdtq4CtGchjePs7tdjeotvBWFWXtGzceSY5DaFVPHczW5jXEoRZNti5XkQesEDRH7f3jjuUwewhpt6w",
  "key12": "3y3ppYyPtH7fDnbRUGEpip9VoNPdU4cHVUjHdmwQ2aqYc9syVkAtL2AVm2VScT6YnUTaZFmhcaakKtjyfcBznAAV",
  "key13": "89bgKRvqctL2nUzHAUFYBCXnWJ4VuVz44exQDH4NhSMZVqhJ7GhkymQjdnbb7XthitciMU1K4fFuPCwt6YJytDg",
  "key14": "2AHJBfmEScoDgph2SSAecrqE6vSGDaQyzuVZ3AoTc3nqmcs2UAXU5gGUkbB5EUVydgKiiSnvJ6Dz5Vov8MbM16S2",
  "key15": "oFiwAr337VtG9rpxu7KRdRhUJo2bfcR8CGpLC5rwvUhJdz1WTAo7s5cbJx9dAZKm4RNLighnZ9EA66zWLokBdMz",
  "key16": "253yXdNMEzsB5VPWvwRJym3MzckvAsYVAFB5kKtzdy5ki3D3PLarCz6PL7nAFydbbKY8c7NQUCAM7CfyBWGrt3MY",
  "key17": "4MmMyp6vzUerRo4piDzWyy2XDcA4kH8nsvXUsLCdQLdRQpEvzH3eAYQ3jGPWuTif8zZmhXQi9mYDFQ8LxYDkf4uv",
  "key18": "4UCGNCQjfjufHaQeuZ2QqudoxWX9wNgCryA7tArWFwUwFfQzPfX22TGPgnWfNpCXsyRR2MZH4SgyF8KMoigjfhjG",
  "key19": "UusRPoz29YR6U18JL11sEzhKDt8Ph6pAoQiTMxPSndG56e2SCnNACS84t9XH3gnccxoxzK4uu9GgvYgAmVUNy1N",
  "key20": "32PLEZTA6mY6QrsHT73oqd8y2dDgMrgKdNyndFTstsjyyCUws5gmH2FhEoTfBZCziDRkDpJqYzUoMZNUUhw44ye",
  "key21": "4smj9sxniivYh5CzEUJ3NZNv2GaWz87Yp3Xunb9qQB6w5DdLPVT2yaZoJ9ucmPnWKwzeGYxaNA4cEshJni94cihy",
  "key22": "36rhbVhaWyXwFSSA72BVv9kNks7n5ij4hdFwcRUssjJUwaDmQoCWCXcABmqHZ4rqWMt4tp67rb77WSgvftiQXjSp",
  "key23": "4U1cwkx71FHWCREgEpxnnA2GF1FbyV12a1QBar7g6k6Mg3TaWWZz3U4hrgGzPZGD1tfWbcUDRo29qt8DaSYAKsV4",
  "key24": "5rcQLpqY6xXrUyar8auTxUHnTGs3t5uMu6mJpGnE3ZhztumQuL62x62cTZpw9EcMgSLbZHEEvaFDET7B5iz3YriY",
  "key25": "41BeiTmDVXWiThW8QT1unbQ5HJsHDAbkxP5chJ9tiK1nH3s3h1KhMxhikxSQzvqtDt119SSyUPdyErjYBcxTmobh",
  "key26": "2cStdLneRz7DHoN3SZX4KiFGYk48PncyYv8DJvjzxxhpFZJM9bWsbhkSdawN254QKPRecz4qX7qg8WLZFAsGf9C5",
  "key27": "fRZp8FhMHviQPUbEs3Buts6mGdwAVjWQVT97AXZ1ZJHcwoBBqqoBJahQxAD9YjxaLGsTse6uAaxVapk1P4wC76m",
  "key28": "5dZF3amBTMp1Uq8AGS7SD1xyn4HcjwL5RchK8WbpjyVB3d3YYaS2dtR1Rb18qio9MeehwGdCcpmHzJfxNLu5MvbN",
  "key29": "3toQZP8akSBwvcJDMtthkRs5f7MT5PA5QpXqQrEQCotknri7paahkPxSCG7kSorUZ9G9G1wj1t1v6tcbqnAeSajW",
  "key30": "3s34y3kpBY71QaunopgzzqBcg8xQCSRTDo2qBcHYQEWgpduiMTGbgBFhoG19w9JPfYehQgjxaTdZBQVfx9H5R9pY",
  "key31": "29wLuAnP4qkdebVBFscn62vNPow9oQdLegRM2btGqxW1R8Mtz7gv9YKf1nUgrHZu14HvkWWGoSYxFtqGZjKyXNTn"
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
