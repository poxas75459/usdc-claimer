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
    "5Dbfz4HafyWHuyt63H5iYRwaSXWv8XrpVjUwsQfwqH2GhzXoph9bR6nqooZhcBRU3kiEzQCMP9svMTm7txEKAZKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3taxnhJeon8ffTs1SD4fCbfpPCTsG5nfRnVifA2cJRtRCNYzXxQ87889cC6aF4GoVoASKoLxwuFqoSRKPDWM9A6d",
  "key1": "16v4vnwbzDRc1iooQvWsYuaQK7oe3SUHrpujWA5HsWyFDPLJUisUNZarqb6DVALutZfyXves2BW1eA3ZVZZpAkZ",
  "key2": "3hZD55pZrX9UzyqJVRdTiwVc2mX7rUyjqX9rRD79y7kDYe7wjmSgZR6rzr9rrWKWt1UfsyPnEr2LoJnRwXB7EMRn",
  "key3": "4Tkzj2jpvUpgYFbyQSNMuovpBp5x4YG8w1SfginGwygJzgMJYBp5nHBfy7rSmUvm1Gz7oj4Ko21NB11Cz5dg8AsF",
  "key4": "3waSg5f2Cm83t6SuDj6cyzeSANjW2vGq6gmTKzGxX114nyCkzMcZrieXFYX9TVCdFxLbAAtZNRqDDUXFj9FDXufc",
  "key5": "3c9KSabZS4c1L9LCxcC6ixdo78TmPAV5k9vVhLK2uurjgHfYsvKAUYZCPaN66W4nQqS4WGF7gHEGWncWrDM3kv1X",
  "key6": "3zpicgKBEyZ82xzRzcpaEXdySKCuumgsy7T9zNGwTKj4hCGhHVjKYUKzfB5qE7xaBVrE436D1oQ5ahk29JCcuJ3o",
  "key7": "uFkRn8hq581o552X7gegWFGt5t6F74n8JKrw23pcqv2oprw8ha4cNCCzZnPHo8w8D7XVnouxSdeQhyuHURi8dMz",
  "key8": "61SLAu9wrKhG5XzDRMRARRVbaNot1dKcay2e5cXGapdtG7HzRffchBnfg4Jw3F5EuqTVp25nSPs9WV6GHDovc6oN",
  "key9": "38xc3NboaSvGSTs4QvZLyhnnoSN1JjEjiF4NysQM7iEXR3qtrjm9dWJcM6QRKXyJ5AyiwDiBZ7UNqdcWY5roxgQm",
  "key10": "21jjA7Ly4bznjLoxaZE3vkLeVeBWZBmJxTuBX1wTQP4X8RwirpH1fR3AaEKVKjQBBy9Ssc28HC9gDJBtYJqWfArw",
  "key11": "29UF5aoeQ4wvbsRKEWfZWoQJ37wszZSDoRuRDjUfTWwxdMYfSXNaiqoq7L2gNGdb1k3knKfoN1cumDJCER4poyEt",
  "key12": "2c54VJHC5jcaaU2VrNd3zTDi9tFHg1jgx4nuxQkTAgPaRLrHrDVQr95KfXEbfpU29xVPrmZkYR2vNpQhfQMfeqK7",
  "key13": "WC68ZTDjCu7HayJHudHHW2wAM1SN58Mos1FActbjE5FK7Scrk6DYnTWjtCTSBKcjK4LYNSdLcnXoM1Me3gtSNd3",
  "key14": "erx7w8bELB8Ungdr1tQE8cL4o7p7gLbTXycqT3ijZ24DSS7tDLQ16tvdGEUX4ec6ANpgXzXXzPSokHtd2whbUJ2",
  "key15": "2DQvfoqhHGzJjWZyVGxX8M1WxrTQNeotDdswBLRebCDW9gwvBMQ6cALn4E8muibxxD3X3ZDXCxqjaqQFwYMvXaB5",
  "key16": "4xMWwfkf9eNZ5hyacDXCC6VowyJ5i4ciFBHB3yVHRBzY4pY4sE3sVu44HVsp8r4LDXvWYMB27nb1GR1V7GPMvfve",
  "key17": "3myVc8ydg1unU7a9JxHi38fARJWZVt9DpSPVQvdYA47dETbHvgbJMi1eKdfR4xh4qronEKcDvFi7Jfvf7hrJ9xuT",
  "key18": "5RRVnYM4qHDeWSy4hPViCCnDZxKBgnYHa9WvmEX16fwebJVCx9hEUkP6cZoU8RogBAQBLzkZYN6kuRNKhJ5rHXV",
  "key19": "5dFTRjx8RX8bLKuoUZ5rnaTNHitWQ9VkdAnkidjT9UaQtoFBRXzfWVzEADhSTdiDCcvY5N7myStY33nmdmEUVfig",
  "key20": "4o5MLQVviMXgELoSUWwuyJodjR8Zs6fgdiQzdETX7pvikpP7UfWJeMom3qtrrpqCbBuYqAGTq7xbGADDjSk7jr97",
  "key21": "3orefNL56QthVgzHUD1dp7HcY8E5uYvZR9FWQgxgWucb54f7DBTk3gWqtR2x4nisD6Sm3mNPfg1nC1d8wwbdTA1C",
  "key22": "5bMRYcnepNCaZLJ63WdyieSDh3YG3Y6pzMtK2NeWKCMcHBAekjDRo3gNUazj7gAwq5W6MQBHkTi89bMYm4tsvtTU",
  "key23": "62Uq3n1oW4icz6sihWBXRnG4aFADMxhV93coRN4TafGmyfsjzW8sEJvirQmovsBAAhPn8d6KGHgQvcBe2x4bgiza",
  "key24": "2Gq8JjkZL7nujBdkbnqabFXZwUcfCoNQCr8p27ncrtbddLC9J5CpxdEYMpTgfwhsauNnHp5s4VCqxdNvhstivoxT",
  "key25": "GhWrDiANbkxbra9NSi2jJ62jds7Ke9SLxex18Bx8dyfq9dCb3V1zF8XFrH9D7tMJyzGcWenKHZNj8ZUmduacDgY",
  "key26": "471v9YHaGTVm7ZXKLpxEZn86QMpqMHUEc7ZiEJTUXz1AQMACbBo6TGaDmjuRvE2ecdRhF61W7QrpLNNf6bhBLzHq",
  "key27": "49jCPBeQiL8v12J9UnFBgFgjAsfKnMeU1nErysftPKHRG6TJYvAJaiYR64hCEadYNq79h3t66iQqSBcSRq6sieDp",
  "key28": "rjADLaTaSXigTycuycpcPx1rHKbHL1LGG4oXhvH19EJmfoZrMsMoNQjE4adwnR8BdSo9X32ojRqviBFzzdDsWX3",
  "key29": "EnQnygD7tJ3FJhm2ogycZRiL8TZdYa3YY3MRKL2BEKEdE1kDkj6HNDywYTGUka5hME8PbaG5FfUruEXmwtScKZq",
  "key30": "AA4BVcE6LHxLfifa58ygDKBG5eEpNkkZNJdLpC5b39iRTiTW3qNeC399rqJc4atjYLyDYX3B3qbVU2aUUq8kckd",
  "key31": "41u2CoqQFqvdaYBnBNRThMxYXVD17rdUSxRw4r4YvGYnw3G67yLX4HU9kKUgMAFbEmZxt83mt1a8aUfFmUkn4hWo",
  "key32": "3HNZDt2VX2GqyQgtMkoULHnDat6aNgMuFB32siFXjdGmpNeRVQZChAxmscFafM3Ep4JQmHrW7Cjh1JptZAjgtVqe",
  "key33": "5c5TEciJhXSJpzcTF2DWxMvjDFxWnZZDjtdfSHczWrvgn7Wsd3k9WRYPKPcmMmXjtnPatTQGbj6ecqJd1xHL5ifA",
  "key34": "5DSM92MS6Nk7yHVWUgLjPsCci5yosc1fk55zg8eqQHrymbemAjXLghmYKvivAVPzzfsRwMa4cKrJ4D58thocWsdH",
  "key35": "3wbUik5S1odqNUQzGTovSYGV1ojVdCtxqs1U7F8Dx5tQKLQxt6D537cVLicazRHmvHFZMkPGFhUZajQxsPq3Ghpj",
  "key36": "QPwvT14nYZy8NAruhkMvZRLMQGet7M2ENWrEkvNVzYT7wKMHLYtcGuH8mscKHZ47QNnGVyA5WhqbSw7MCtq1Nwa"
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
