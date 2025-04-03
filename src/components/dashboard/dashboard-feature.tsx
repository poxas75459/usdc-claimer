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
    "42tBvpe8T4FRr1yUMMjmD6kK72t4iS28ZkvB8fKxBpEzcfDogRbuggy5gbrVmS8dUimPZUnAczDyzJU7yGgwF6Mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yowuHTVb6kZktb9d2g6bSr3QurnDTkzL1RzQCrDdszL4HTVU6cT4q8YihLV8TBGogGPVagTDybP56PncrVKzVVr",
  "key1": "MtSbgCkzAurBi8D47AmmuemFoctRobECnEDNkNV941GJjHorrixix9RPVVZ2QrcFN8kHTtDvY5F4MnaF2nkzB2q",
  "key2": "4d49o4jS7M6HvzMKeQJs2eHrZAwfNa5v3wriWdKtiZGzhABCd7LViXd4b4RjvawLUqybjjWuL1q9gb3ezyTGushG",
  "key3": "4BtJhp6Sx3RyGNx5dedSPNeuHR2geUAkWbCyRkGQv4AhpXLRd2ixBsCpDt62GgxA4x9p15WuCyHAMa5dDe1EiBuN",
  "key4": "3x1qvmGNPa5UQY6S52hsfjEogjtueAy9JHwDDkL4YA2n3GkSrc8QAPQCEeRQp2FEMbGPaHvc585coahkRkCC8jom",
  "key5": "2KKcujjm42C3CXaMf5YZuMvA23Q6dpV8mgsUqgZqrutTg7jrgVpWKxdagjiQFVKgy5tXu88uT7KhSJifA4VqRwXj",
  "key6": "YMc2A9aMaYuatyygQfp2uby9smS8UocXrTXx3QsWQNzU1kcxXHpVtSdU4L9pdREuuvsmYwKUCZChUTecB8HmmVH",
  "key7": "4ZwJh16MGkPvNFUXzJMpHNNFmsmVgzDFTM6h4gDFxY59owZ7DvzvxzGU9cjvXnpcN9Evk9JRBmJ1FyfCuue718V5",
  "key8": "2EGZy2nL33Ey9rGxMtPJcsLupYqcGCwEDEWNh9ZUw3eKUemuek8gqBwEzuWGgY3PVM3KyPDdGy6SfB6Sq2R5giJb",
  "key9": "41yGBGkHMJWsU8Fz8VUQkmupvtoDh1TpjxidFEjqQynzAQGVtNUrjw5NYMyjYxfj3KUJJPiKTSgKquq5nFHcHTGG",
  "key10": "2QP45oqceGZuHtEEQzBALxU17bXr6msqZSa4DXTzmzLp7Jejo9c5aj2pqNdky8T1zBwzz8X95VxGpzY9RrFFgRoc",
  "key11": "4hRZ6w8e6z7UjJgW22U33S83DdC4SVjtgoh84fXdbZy7CwZxcbS7npgCebs4NKVU6pkmBDNb4HwoxxyUwQf4fGHv",
  "key12": "4HYgkPCHDnesYTqZ1p2khE69RNz5GnFescQQA25nCjuQoATgfQYwwJS2BnRyiFVzi1NJcadn54JYwgizT7eCGdco",
  "key13": "hY9nk1Y3NcTFA1DbjKyQkg7dSJoakynu8GmyajNmjvYhxD4SnztHD6HDQw1aDvZViEdN7sG4rZDmxudsss1Eio7",
  "key14": "5ARWUhuaufFEPFtE2CKwexFXMCdPcn24goYFLhDZW2Nnz4wXET4HAfTwcu4GeRfxujRHbfvwLsEtB5NkNgki5amv",
  "key15": "3chGtvE2FNgFsQaQhvvU9HZEjZyeAkbXLQAq2TUcRZk1ZgeXMq1miw3gnwwCtt97cKZEzZBzTqUXA5K41kMjWHvX",
  "key16": "53HEPcBQSTG9c2qC88RgBsNPrN1k4REenDdxTFsuHKAV7Qgjcc2Xh83BJL5MU3BvvM8gqTRPfqLMviZEc1o4RgHk",
  "key17": "3tGowFuueJPVsh9vVFjy4gwmh5VFnFiAwzM28zqYRLWcgMR3sqh8uy3E32jBk6rrKSAy6qaQPzG1U37kEujtHmuy",
  "key18": "4RYiSxYUT9GFKjRsXi4upTL6V9ZWvEMFfEYHkFSzmn7zeMwhtYUFAimzpTgZaeb1baNoNc6cTAc35RZ3BiJ9JiGZ",
  "key19": "qpWaMCYtoJpyCYkySrNhSBBADDPQ9JGrQ2J4ewX7N8vsoT6yfbUG4pzBkDq1Kp67nt3c5f95LWoU3sKwdxKC812",
  "key20": "34okdzUoyJH8Wm739c18J2bYFGtg2kCSG7MqDcDC7z6Wb8M7bmEMWUaYaRRgCMj1YMZU3VPHrFircofRYxYCu1zX",
  "key21": "3REgWPrieG72u5pZWhTkaMvCFW69PrFEhfVG1voqFJUwvK6CAUy86vUohcijAkW8nD9PBHbrRhYJYtdRraAZ1Ff1",
  "key22": "5EZFbpHfGCVfasbs43xURJw3YA6zFYq4Eg6rrCtauVx1A3KVukwS9jaKoPUHzwS7ScLys9K5VdWFV8yBYLqS5uGy",
  "key23": "4q8pEtBSX9tFaEU1LiJjFh314piAEdH49DHoHcabUpkvKeANMfC7mPGZnwLrAKATfnhddotoYakDXRFpvcZt12PJ",
  "key24": "2ZbUAvj7SGJJPpnuWq7Lh1cLn64TAZ5GoAZUxFGjsP9PzH8GkRf3LuJJoi6EFNDuqcr39JhfmGesAKK3HJ6gBvmk",
  "key25": "2VqoMbA3Qc4SshJi7icdjFP9i1eM1Y5BSVPcJMU48VhCo9Jk6tt99LqxQgdyXLXik83ukuLTjvz88eNXhsDfBe4m",
  "key26": "2mmDFzALzmS2aNrqayEkx1YfEaB4GfuizN5gbiJ8oz4ZFTUxUeD5HY9S6dnQ4qQjPEm7Vrx2eAxBpF6QTTsjMqcC",
  "key27": "5ceNUhPgMqzquvv65X2Fh75dwE6TWYsTBbfpUXaimDhMHyYSj259aXYfZZSs4HD22tM66DJzwnemJvzxgWfFPMBd",
  "key28": "3MikLMkdmdvZWcFtnGvmYeViHF8uTkjRTs1DMWPQ4EBBjfh7TVM5Mwf9i1sTGiGZHTiRi89ytL6t8855vsALAJdm",
  "key29": "21rAscf24v6wGQiA7Eo6uE26JdTv9EXQ5S14MyBJVoJJNZwxj28STix7esYnEEaQU6KPiEWjRa9AvsmW6X9WFwF7",
  "key30": "2pq7WcPE7Eh8soYUvnPwC2CJFkPrWizDL8JcpK8xeVLoRLosrczn6rvBYaaMLk93nNEezywPF9xyADVJRCCE3NYC",
  "key31": "HHWxM4rYpErL81eBT3ansGQfhdUvE9wM4FWVph7DU9yMt5tZj1ZGQfc7f6cCtLT3td3kZtApr9xnXm7462ioQUw",
  "key32": "2RTSoiGmWgceWL317463a4zdUeisV4Y5maarBtzLNC8S5KxnM4AytNrXZodyurer68TM7yeL6BU69n84Ue4wNm6k",
  "key33": "3J4oDepPnWc895yFAr2fTeY6JhZtKJWvwS4qWgTnhJ6whyfxSJpbWvpQ3qSbZHTaDicCmjW8YpCEyeKJHFHuwn7Z",
  "key34": "5TGwyz4JKzufdG39ttad7ZEKzr4DiUmQKEFnFUDNFWJoenbyKvTpDuprUPURJacCFY1p1DRuxqqw1xFBYXXMs1vt",
  "key35": "2YM3Sw5LuHCoYz4Y5j5HGr3vT7SmwbPuzmR1kR3QnaExHAHiFRqjjJfwReMC5q5mC4fqvFw8bVTMo1Eb36uYNR1C",
  "key36": "33CofCLESRRQ31XwASEznVdQjHBcPYGm6gU6QsvHibLFLj1U4fio3xfAjtgyg8tpzDJqRXiWv96qoNDDw3NsTApY",
  "key37": "4ySYbFjZXSXvWp4cq7ed7WoN3ABFGHBewCuQRcbmYysTLgnYfdStYBoCxYbX7bq2EW3WhnVpVLMbmXWjYYE1BM45",
  "key38": "2FQ2JJZ1foEGyC8ou53MkQSeK4Hch8d2hs2LvYMWc7XvHTfNXky2aSNoEruMoBW1n564adpsJB4VhSSy9heEZt4Q",
  "key39": "6gEgjSfGZECECLgzYaxZetWn5wNwF7sRsFJnmUeJbUen4yfUdJCF8jCZtd6Zb7iWJkEkeoCsYGokbiab4wCRHxh",
  "key40": "3oBaMm9gEQEDjQZeaty4gyPiLqfakf2VF9jgByoo8rNrFfFz1QuYqK9mrRfCQNsj8Dj9p5Y9K2Cc22EDoFwjRPCJ",
  "key41": "5rtrkA8k2XWSh744Lf4sqdo5T4ufUFLeM36LprTZoYVzdX264ma8duUjg1eCSxico7y8M29KEZUdcJQjWVJBaJSZ",
  "key42": "mWLMZUhHXVG4LtZgBMVHmMwEYn3Y2S426d78ZJceDc4rckMUaMEG269yuzMf6AEhYTgE56bvEBoymiufacCZ6MR",
  "key43": "5t36smzfQrcMb7EXQxF6u8oYj6HSGX7tC4ZLQfmky6ftxJLMiqTbZtEmdwRVZNdb2KSkkBc31VhC2SsiPtDnfjdJ",
  "key44": "5UJS5G3fdQG6bEM6SCeJkwXby4KToKadQ7nFudburxtX2YZyDJKnLXAoXuApqJKcnWpinNPK6i2SBpkkKe9BnCgB",
  "key45": "4okDNyMKiMcjd28tYzgJKavyCpUnnEGf6SV7KbkZUnQj6VC8kzGgGfYRSEvvNR4m2cp3df2FnYyPdC4uqb1jfVNk",
  "key46": "4zbwqbBLvQARUqi6SR1NHBVitAa5WmUNbUugT7A9fP6UExHE7tUc5EGNCdZ9xvtUbRZoHVoitsPM6LrvqHpGxfoN",
  "key47": "66L7iPTVMmVnCRs8E4z3Z3fag6ZgcR49g1QLLzBkX9ySwCYr3kwJkYcXNfzS9NH11N7KRM6xV9cFGTJsCogNf9on",
  "key48": "f3d9vcHG6jbFMjRRs39wfyZtNFDY1C9B6qYZyXid4agakAGK1RCRsw2APiCasp18bAQmfLDUc3xo1ctqcrh9qaM"
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
