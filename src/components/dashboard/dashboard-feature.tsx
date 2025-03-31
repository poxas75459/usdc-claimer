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
    "62Dwz5D7ysBU4nMkecLhacxN6Py4EPKf1HbECAKVFyKrVs92rhd3mUhvo8iaukntxk3fB9KsUwz8Bz4A7GFBuxZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QbKpNs34hJkqHysqhFkohs49vwGfCZh6gbyLv42G24ew2vc2goxD2szyAncJn7uXAJaMJELtTN5d2kKuEE6NWL5",
  "key1": "3LdxfrHKDXbqLs23E3R3uho9NSZUVQq8v9hk8K4eQGXQkMZTsximEgKdUNCQLmgvs7yHxt6wiwrqQP2M3EYPVaM8",
  "key2": "5Hp9D42V3YvY4nELfK1yhU44wojvhjzG4UegVM8u5hQTby7T5aDvqybQoK7kCyBQjZ1R9VTbDET2pbwV5RBxioCD",
  "key3": "54UucvL2ujQirXVNVw1CsWMTxwta7hL6oR1g9wCcwL37N1mwSkRQT1JxNeFyRcHCPSkwScpAc48jTCRJnk2zFg8k",
  "key4": "t3Da9BzCyWwbHCDg531Y1MCRHq33CujdHnFWMhiqd4RoyCy9ZBe8QBCuqWF2UDboTrCrwWMxGQrPcnRZ9Rq8een",
  "key5": "NPQj4pHMue4DwnsHun7ERh3uXMRtN4WH21VF9vmHVkb3USP971Sig3gAf2vcNs6vS5AzkU6Y3TDwKJ158N6cuvg",
  "key6": "N6RTp3su2UGX7qUyJCPUy42GYagdLkwJxA1tqnPiRorQZqPfdBANpmAk1qEww4Evex91AZTx85VAqUUXvR3ctEi",
  "key7": "5bjbA1cX7bYWP14r4Yo5SrUWRzCAJmYLwnkKPqtNWh1RkNHCdRwy3uQPuDhTjwNiWmNMsnJDsoh3L2eqn5TB72gv",
  "key8": "5cjn3TgG6pKAKfBGzPfnEV5fzowVQCe8cACykc3sWmc723qJ49p3LwnHUCxts5wa7gBRHhVYdQQaqGRFSdubmp8f",
  "key9": "496493pEap7LQu5QfWvGJaVuK1Q7SfATQdxLYUzo3Nn6h2g1w665qphf5T5YVjPLbZk262MoBxSk3jWXGEXhgoDF",
  "key10": "yejNt14iGNQ78P7EDLXMZY3znG3FD31BmNGNX1FGwkwwTfDf76KQWB9SmzDUy44A9eo69wJdcGJQfKsrZCTp87g",
  "key11": "37PBckoDkwnxfYxwhyLhCGZ4FPVRCgPtuqiGFh3Xdec94rGhGv3m5uD5htYP8eYnrmiDxut6pXan91wCU8SHZgvR",
  "key12": "uMmvmbaq7Ah5eRjfhAeAPoCNtBqvLQXZg3iAFns8CFQA8wHHUaxPQ1nZTcCyzf49qxTJrRmgZe1YVN1ckcBYZ2s",
  "key13": "4u9pvQSRNyTFxWybDPMEeBbUn6qYFcwFfaW8J1Y82V4LryPQrieb4BCaPUF1ZFXYg29cGvRxbDEmrrFg9K7X5Ffb",
  "key14": "3a2FTw8wsuRpesnamfPqTaN9UgKhtH75A2JHgGB5MeZbckANH2RSBXU4y6LDVzuA5mJTy5khpC76JTDVyeVYUNUF",
  "key15": "2FYRDPZNfqSe64c2mU3E9koYHT8MtKZxBhmYwDAwa75MYRaCBMNuA23fVhmtDjQZdY3BjjX4wzQedqjfiCbTMQbR",
  "key16": "4qizfpZfpaRtVvuzy9kUWR65qcVYTeV6j67gXLXD5kEd7cBjoFs73tuF9uWy3QZJnFyM68BuG8P3FAiFFuTnHJYM",
  "key17": "CxWgj48k4Kb8Ng1nqMNRf9ujsU4ndp1CodU3sBbkLg6TUCdFvvg8ocUA6LjzJu1NNtowxVv8XU3WLJYqDbhu7hX",
  "key18": "2qbnj2CNhTULKbHcZtiuoXjkHiAE1NJ8GuUh6rhgWNWHJQAkeP6J5mZH2H2TmnyXak4gi3V3KtsJkygzYtyEs4em",
  "key19": "4XMWbkB4FiJ1qrWATt1vG8h7rQrxDniLGys1oDaZ6NTGier7CFqtwuBvwE7jrQKSL4ryEKuGJpCgtKLHCaiwx4GJ",
  "key20": "21NnDLboqZhbtjVrS9UPktyzKPhKFg3F9NwayiSkAFfZQogb2i1qV3pUT46WnmYZZs8vcKk3kzcsygHN7jZ3zH7X",
  "key21": "5VthinhB8TCfjuHyuFZuBgxKFnMjgTwSe2YhgEtCdsRqmhTMQFTEwxCbpBsBEyu8jy1gftzSMTYq98oSvhnAmktm",
  "key22": "4pd16enU2dsLTaG15zax2hfXFspqDeRYNrP2SZ2ZnMMZhGe45chQhqybUHicxi1iZ4oTEKL8sPJmrHuQbkyncWQz",
  "key23": "3BwjMXLMxctqBFpC7LMeUndsQHFyN8kJu4yiyj7A1M5iueNjkbJ9wbVPy55E1hi44zxjqwQwaqLebjRGSPgcXZya",
  "key24": "451AQ82neyvqXZgPwapC3xFuVxiKfmNb4NAJu9bPuqyaKhTjtMbWHqGdCJsLoaQu9A3bAf3xHg5S1BYn4XubVLVP",
  "key25": "24KxfgK3J8TkdGYL6EFBh4zZYdmj1urJ23bu7Jayp9JHWiSv67iWYNV3aWoQJ1HeAGLvWRWpaAZRxnvsATWYoQvN",
  "key26": "65MZKDNPk54mDG8VDk324ff7QsQpqbXYSdCEn7kN9cd5rYNu4WbREDJfpRQX2uy4L3p11LGztQtcU8FJLLFR78qd",
  "key27": "3xeExrz2xU2E9XRKn5GQAzEWgPZK8zMek5jDo4xjk2857o4gNYNeQcCi47PNJcPCfdp19SYekhd6KVmxbwfF5qkA",
  "key28": "3BjjzykoJF2AXytmuEkQWMXYqDaeEvXnZR6obgfkw1LC2mpyQvLoQNXPtxzuNScbxLQazx8h6Vz5VjxeyaN1W5xB",
  "key29": "3GKWD2mS3gs8hzv2jrMKrhAxFoa8mWvWAMrHaroXS1Tx2xGFhUcAsDq7FCkMrpoi7mGgwopi4bLjp6wE8XwcJqap",
  "key30": "4psgFoQHnoYYewszsPKV6MfpN43zvhMVC8hYx14Znohaqn88UCh3zi6sPwWfWaAoMLA4R3FqzGHcJ6ev85Tz1K8w",
  "key31": "583Cq15FHxDzr6xdxc9FYDJsVoXpZZqRFy4jJWt8VPvsdhaYQRFgYMr7C3vWJhjA1D1btK6ay51vZpW6cGkj4KHn",
  "key32": "2ALiUYMPS5RQtKuAA13nFRuaiQBf3xrM3vi6mrYQ4KndYVxX7FJF5EXmf67tWE48iFtca8LyaXG2Tv4FvQreiLcm",
  "key33": "4PCzxBiXgPmdYGDnEEHE61zUxxJQXzNrPkG7w4uD2GDZPfUv4JApzmXaozWPvxosWy5XBJWVXRXfFK6F7DNb2xx2",
  "key34": "2mxqh5Bz1ZwtjLietino2bLfHdBoQJyq56caV1jKgyCcq5wchLKAAVQXdi7YNuPGqQZXVCykpVPHZTZsCdVAx6d3",
  "key35": "4n2w8XpnmnMzWak3T2oCwxR62CxxdsASuG9xy37f1TgGNkCURKYE2imifxeqfnJ7KQyyjfxgKxVD2UT2MimJGT8Q",
  "key36": "2NnQf6SU2tsYcWRBEEQgW6P8HnyXtaCkgFBo5GUWrcx4tQYMczceyVQEB3DFzVvKubWWvDDHTvoVQQY7oqgPVWQc",
  "key37": "52xHyUvTnNFkSLETQyWKi2GR1oZFu39KPoqhdEsdEoDdeprnN81RAjGqmYYcRwVxa1fTU6gK6DF2CCRz1dmCas6e",
  "key38": "2HiPLDvZCtBpQhEnT6x9YYRiYG8gkFJmXbc6oHHEGpjZk9Lj5hi7bzmzvxhgJ9K3GRPec6nwccvaopmZHx8dwL6g",
  "key39": "5y4fpetiqXYpvN4sB4sYeY2mSCyj3MDDdzCYpt92mKK5HuBYZzRFn4RUJnbZ6DVbcEUtD2y5B51p7AWvmNoEQKdb",
  "key40": "2N9t4V6WrUM53Xx6zuDx5RSsyiatpqHPsusiUkQEvPGwQiuFxGvsczeenJJhFKbDGcJmot1iKVForyr9KeVKjt2z",
  "key41": "4dydj5HbCPU1m6ogP34tfDt4SpBqczG5TuG21qamGxrT4mLhTLDouB7aZFWhtCjfpmUBETjiidJx9Uophuy7qhnt",
  "key42": "22ZdsQLhDnVgUU84sAzRLtrSbLSXo8gxtF7qKHin6zEjCx2AANJXoNqkobvDpfB1oaVGucwwRzNcuSxJPPD6BAKc",
  "key43": "QLWZAcSkChsNr3uaBUSeZJHFSpPXSiMt8gL4mRvMe7T2kQyonFCt51kDSCqWqN5Hu9DFSFdpxUnbrVigMrwf5sY",
  "key44": "2fbURiLwJxLkqVnegkHwc1tBqz9RXiZnwtWV9JiJSfyzCY6Bt4CfRyzGSqA5RT2XwDZmCkryzx9uGZ6iCHXiVAYf"
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
