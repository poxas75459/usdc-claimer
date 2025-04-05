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
    "2XmmY7tJLZbxmDLvFGapfmchR1vVpqzRxN1Je3Y7SLos2oQ3CSdUUuxE33tTAaQHXvmcChfG5wFVYHZUZohPKZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dR2Tq4hq667GS3mP6Yef9KfSNfgnhzKJBMpMqCaSG4XyCdf6qK8CU5oZzMZgUWCBMeukS1YcmxuraDWTLCENG4u",
  "key1": "nT45TMe4SuK33Ljm9KwrAZQYwyhEweDuQBc8UiSKSRYbPCFjtuZSUcaBsSgFtCCUaqywEJ1H89PYNrCKWGqf7A7",
  "key2": "iSgNtRkQPuNMbEjUbBzC4ZBjR9ReuZWQYQPDaxzaf2CuYLV72upZ8anF1XueXPNiJjvcFn23AwYyaURcncco5HV",
  "key3": "5iQHE78UhKHTLG1bqWdLKL8iYsL8jXrKeaeJq634NZwLkYoWjZhtsSxACa9PTWUHG6cWuLTNMe55ZKrcK2ciYHKc",
  "key4": "46NptZu5VaQiZzWEBxGmW24HHe1hpjcL7DkfPAy6wFKB9aXvgSLxftwjVzdxkxiV8HuhCSfhZ1tFj9Avwja7RwCY",
  "key5": "2F7qsa5Bu2Npq8xMQvoSTqjPyMJqRFYUH3bJT8Xka1q2T3Wv1AX2i6JE2K8z4uiLnbv1zVfeRhPqhQw22wYABauD",
  "key6": "2b235J1heuPLTZtfzEp8BbFHJPfq88ypZ7PdVWeyX2oRrrPZvjThqoTGYLx1BNmGiQUJewniSZGAUm321FoDtdNK",
  "key7": "5g4fMmtYtbVbHBLjpg5msxQJQXumoRiyxBCyzQ4eLtwrSCePC8dPZUcJNZ61SBWUgkhkUyfVJg2LC1kL4t5TP4TE",
  "key8": "4EdueTiRSFSygmLDMtd67crJWFpz2yH6Pmc68s2DBXo2zAWA8D1RT6VH4c2S3VHZ7bB11SB9LF3JSrNkPpDFHF6B",
  "key9": "5TuB9x136Vay3aCUqXeUgHdr2y1J4rEf1GjrHZMEyN43fFbbgsLQFDH7Gq8ukzuHzQ1PUx5H9Eowo9JJiSnhfQhp",
  "key10": "52V9dtWb2xfuFuUMmtVW6q1WPAzKph3sDsnkP1TvBMvqWtcdPFSiNsMwz3s59svWCfoswm1p8hZ4wVbfM7XcpmzN",
  "key11": "5DhG8gsPaoimtWpRHuADmULjmbfLJKSCxmtwa9dKWzeVbvjZRHxgp3XchaL5B2NxP9MWNgxvg5arJJbMbSvaCVcg",
  "key12": "2p7mesx9x6tPZXg7eZj1tFY6nVQZkZrfdvYHxVP8ETzbewM24V6onc6MzdsmwjhyRhwbLbPW3u5NkZgYTZtNWC8q",
  "key13": "2ZDp1FRyUSg4WgyxB8Zb5AXChCRFN5jhTeoiCjgFvcvNqeZgYZRyF3LrRqB56RdsPF4x85TkfaFFRpFnSAB3QA26",
  "key14": "XEakEKiaKvRwurZnco5yx3r7psmBD18oE5Y82M1fKx3XH3DSW2Jy4BWd7vQsZPc9GHVeAWmGqfzj1axF52ocWyP",
  "key15": "4QMy46mCGGJ67HqsLAQNcKDiDYc3iCgrdm1Ff1zA7JH7DjM9azcUbpqmU6x2KBz3zC4DFj8wEjCFX8qwbB2vjHbE",
  "key16": "2thLwHq1d47ACyes2dhEyrAKxZCWoB7Qfi6H8kE2ceboQ7dkEFBAg1YLqHZwJF8XQ4tva4rnu7TQ8w7FHnRpbmgj",
  "key17": "4EsxGVC9gg1RoxuJPBTB3khouUuAiZiKHucgc7efrBpxx5wkuB9vyZpk5CGFywSNkKDmUNi2wM1XpMaeTJVwf4X8",
  "key18": "2MappPLAsfNuMX6XEw8KWhgYs6F7fwwCERgqPBwUeJNsVEkx1q5XvG5mpe5Hg2mvZjH4hzJ7PLyPnjybP1QLuxfY",
  "key19": "28SBCsgfmmdD9hbwJcbbpJbHuTAP8PzKYCaRC8aBtXteJdx9dX2hwaxXXoSH2DzshNBAufUiMM9PdQY6cnWGVPTN",
  "key20": "5Jo8gbowVJeSMT9UAUsB8TvVB8vDh2xDim65R4yRCoS57NR9ePqxfksXXsDEtPWkrULAqrBsHzGxJBcSG18bVvPX",
  "key21": "2SgvLGUQVxLDNsdr7tbnsV5ZVFdqvcLMfpHEU9Ds6tM3D9Bm7vChrugeBsz2Fqwr2HV6K9fqsw9HkSZAuZGDRukC",
  "key22": "LjpxRfFmfJed7e31EgLV6qWcmUZ2gT7s1bbG7B6QWAZSLAJUD3XxbY12C859LLYLhNbCygTeq58zfMviGorXADs",
  "key23": "2ev5nj2uCAcPN7kGGfrYYTYGsb8DWWCWXTFN1QdDgonHhj2qDSjNxT9jKNxjBftzQbF7njwsc9o2niWLZP2cHoUq",
  "key24": "2fVokQH1Ev8kWD9LS5XLCAink8amDkQYSSsxV4UScAg3rELtZrsSqYKwGdjjjATaK5RKZN8CMDbo57rXhp7nBfq3",
  "key25": "2pq5UxwPzsXgGewgLmjEr3GhRJTQ7sbTRmhCk5p6kgGRp3irZ8kg9uo1c6HBTeKC5GPgZ2V6H7HACD35d7qv4Muk",
  "key26": "5HYwWPA18WPBgPDBZmuF3ZRHLgMpDmBgcJj38yJEMQu6LnqTA658hChBWx5CxqwWXJ4jsVreRiy1aPTef1d3Qn9t",
  "key27": "3oir9aGdJoVZcaKoQBFPEJagiPMR9ACwTFgMRpbX6dHevLsGzscRoHKgYrjWYs7A7FwuNgH2uiaHFi8PBM5aVVqW",
  "key28": "nWJuM1FpvgiYDjbnoJ5j9QND9H7HL1dXvNWng5M52AfvY1YWLAcsp6ztz6BN7bcNoeV264KBepixowAqJnKtjJm",
  "key29": "4ZVefvKSWY8UeXFrnjPRveQ8r5qH5d53esta7knDeYhc7bPGAxt6z4SycdLBASHniPf3w8myu1j3yFX94vvmHss7",
  "key30": "2YvDkgrN9SYdA76M6LW8HJbPdD6rU6bTKnYCcQKk288Djd1upw2SU5T8eERuehApZhYerNa7wdnrRjQT2xcgkPn4",
  "key31": "hrMuMJCqhwyQG2xiKk9ByH9wjqS4azgeHwKLF4XRsHLZuhK7Zss3bcYZ9sS3oNqD47tXebXqAKmPeoikRBr1ZzV",
  "key32": "2pVfe8d8G7aj9Vcruz2EvqEquEstcR4jbYDUbHCZP2p8fooLNS9egsWRxuYWpfiaCFT3t8sdVyJi3hHmWXPLQ3Ji",
  "key33": "2mxx5awszQTQhQXPhRr1h2QpVHA9hMxUzPf1es6nFvYoz2BhZwBhLW2em8oygkC57UULqGXcjmYwtGKBYQ7DZZUY",
  "key34": "5RDwCkd57DyQJG2qgnX5ddURCxJqJs9NTQAUvKsrUfE4Zxub5GsJk4Mes255CjSXnJ7WoT4T4PG3n1Bz8FkVz4jD",
  "key35": "3Bd8jAVf27DUAcYyx8NYfPUT2J2j1CwhkUhwrHbWvj4f5SNShdM7QDmt446rk7ZBqZa4Z91GMHGXeRVXqmdj1SwH",
  "key36": "3HovRX6FaDrQCPGi7M9GK5ugxr1LBkZRru7tx3dM2t1yHCyJZQQs9aotEMTj27WiweQJMBn4LpL75ansMv4nLWge",
  "key37": "D3rNUHFFDfcMJHiZCwVEq7CszoRd8vKNs7RGeXy2C3Xi7i6iqm2votyGuBmRFCAbKbts1RuuR4Mr1eNZkce3aug",
  "key38": "Asz4L9botBPwQBXy2XSFjDtTnfebSF2wK38NT3wskJJP7zKfGNqjJ74KVgSuHVLSFJFsA8SUnj593b26nP4fyMo"
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
