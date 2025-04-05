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
    "4HPkHgi4XgdXAnnKSTBByJ3ZZzBWDzb7pMibeCT5Nkzv4wxwP3h2uoSqLkwGTJ3vPcPmVBD58ah2aFUbRBNDGTjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26vPXQrSkA9tHrYDz7x1L5r38rvgWB64NAaKPHU5C8LTzQpejXgjdrAC4vHYBoc5wk59cUqhTbhMa3LskDPfr9J8",
  "key1": "4ywqxPQ1jRPU9j3qCRLhpbk47d9xYfWir7Yyz7rwHeYgtPZiSxZv7qNX74B3As5H3SzZ615JBzePXXDBJpB7vcXH",
  "key2": "617ksbNYDoNEPkryJH4FLRp6QB7YWWKhxnsVCJHfYrH4aa5WKXztHk3ez2aVvmYH2WzrF1BG7F3e3WnENrCkzgDF",
  "key3": "4KTuaKGvaEQfAXCN41L1s2tuD18oqd6EQ8geZyQyBbgMusBEYvNUGLqbw9xuABnMgqZUXary7DJJATfb4CYiUcmh",
  "key4": "svNqW8MgWpZdYnjR4ZA7jKM6bxkCyd4qD49FhpwTinTehrnASzTGx1NKSJqreLRf9CEhu88Evw3nWYMcqsFnS1U",
  "key5": "4RU94SCPAJ6oD7u8W3KCESZhrDevZkNskhe3PaSQhHAietA2F8Vwejpp4T4YnHWYcyjxXWpq2Zg1v2hTBFLJjnXr",
  "key6": "26q2mujWF8JcKct1GmJE8jEh2ncnQCn8j8TP6iBEiugZ8PP5A3yQdrQyVC4yEddn1mrkLH1pp2MAmG6o5vwu2mSP",
  "key7": "2gKpXtUdEizYW7QJ3uNLQPYD6aB12bkq419vntEcDcuN2zFjNQsdSC3jQKmmmmo9jrkGTebQKWkK1KTrbUQpsRfE",
  "key8": "22JDoPkMeA9qfreBu3iUbguj9cmCtymbW5Yf5BGC7wrxAwzTEHXqPcH5AiSrpPWGZMt1pRiJe6exqvegdHBF6DuT",
  "key9": "4odmeny8mPpqAHckbKt11uDivH4nJUYL2QWaNBT4FJ2fHtppRU6u3nYdVZenqzZQ7asofvUWFawMKH6Ph4NYKhnD",
  "key10": "7zC1iDfuJksGuab9y4ippt9xJoW5LkWSjkyFRy3VoSV2pwrHSq7M1dynBBoBC85iqCuTFMC82Z1Qzp8E5p12Fei",
  "key11": "2dKgpLRdZWF84zTTRin9B5oJ3LiJpcdQ9qum3tx7ttbY4azWKiL7Ks2snrri9CpbTtrskcuAJYACJ7bJmw4bymZH",
  "key12": "3E9dt1RYFLPeMfv3xbQsGtZjios45sd1KDimiTVexwjVnmHXDNjwBhAyuzaMTHEVN3XhcHg38vGPUnrVpnci6GAb",
  "key13": "4KyUgJ2MT1HJ2Cw2td8UoWGPybmjsCWQrs3PyUY16ktbGWPtvVcjWyCwpk7kVCKZUbDCpeCji1zym63VGhpwEQWH",
  "key14": "3xJHzLonehSGAa6FR96JG3xCjmcfGAZAhLabdd3fCT8mRKy6HBBCmBjjWRUcwMWUVoirEFdWSKQntHYPYd1vorKS",
  "key15": "5NNGx9MCVJbxQjbCFkRC4ikd5KrTecxaTpjRrtp2RDTB8LYtT1jG3E3Ry8c8Prz3Xk6TA9Lid478psyDhBnn2DLM",
  "key16": "yLxcwe6FjQvdKDxHKJKGhqbWmLvvxYrfG7NjLN1Nz31vdN2tdreycJn9K36xEeypXMmsEt6Vwi2zNnfNzCJkV85",
  "key17": "sqAwrHucGj9T5dzH79tAmkX2mRQQLDj2SyhrGibmXtmWSR27Ycaw5onyrWaAo1hbFbu1NtZgpUwTLuFWNMR7Nxp",
  "key18": "2tzUeAJYs4iWNERgWN4g3qfCgZP8jufvTiYiduT13kMzibuzB6VtLeN9VMzjsftNnppRZ1M9gXDnU6qHXK3owuCC",
  "key19": "1xU1QUXQjKAtUzjMD2St1WanvTcCWs4wCjX37K81oHxYQkwdWFTVTFtQx2cBTTPM9k4RaJEtCVkULiZckUAeJpi",
  "key20": "2ccDfn1QMn9gqKiYDZ1SLETkbrFTz6fBkuTn9RHuZNVs9wA7pyhh8v7LVoKMer5e9C2DLPQJADrgxXg3aaB5AUtb",
  "key21": "5tBS79bE9nobXMv3Hp8ZJzasKrtvZE2G5GQFDnY4hrra8iVR3MAWRMXBVgoLdg3S7oaF7hdWfwSLp6aCY5H24zKN",
  "key22": "3YusnjXa3pzkh96jqLEH1p17Av6J7dMKakWvsi3EoaKjvhiExFAmYAyYBkXafU9PyqBGmSf7hFYvJApcKtnpirnd",
  "key23": "bmD3cjvQFP52SxaoNcTAHrMmVxjHJVrZXSr2Bs3CfKs9UVwU6BK4knzNh9QV4uMSAKh87yZMdzCGP9ShH89mAJV",
  "key24": "3J93KcotQknL51j6WtYf2vD8A2KG2R8vm4atKUcXF6LyEMRSZsXNrU1cNPVxBHzVoAnLBGDCdweaNnqtzBtNERRB",
  "key25": "665nXtCgCNqurvM8VKAxHwu73FDvhbjFKGsHF627KJMvMQRP2Gbke3PihRr9eLZEFES2paeELHjuQAUaFzoB5tnw",
  "key26": "K2yDR7NgbWuwPPCXBpvQec6mBbVX4sBbLSZ2nhN494ehx7kS53tXwpFiuSrLQMK3KRttnvWZMABKdNii1sDMJZF",
  "key27": "5Qt1FNTQKEEFba78st4wegSbUgH3ncbS4CtX2pK1oYmby3VJEhk7CrTzjApKX9CgoHFAWATDcReXLdpyZaCUfAkY",
  "key28": "2jBCT4uJUMXXCH3Zv5msG8fouoRv68uN8p39ysssZN99LmyfNNJrGPqYhwKFy1JGbT1HcUKbzUWkZboNrWbDyNRX",
  "key29": "42mNTywUJJzGri8xVz2cwbWnBVMf3GM8629u5P2AzUKf3Auz9eQ5nUqxZbdsTTWPJtYkAXXVQG7RVQoovkwW8x8a",
  "key30": "3QdEAWvgxeFCMWXWXX7oZKB7k4RSTbVbfZnEWmvxM6eRvjp5MDkYsZdJb7QVRoaxZ7t153G6uXZopE6GQg4zPsrd",
  "key31": "5g5SLWmswXocUg8WaV9epp9vNmzagudUZy2PQKvCBME98z3jNF8hhUYEDz1eALDv3TA8J6MqJ1i4vad21fYnkzFy",
  "key32": "2sefh9BfcFyEAfjya9UYjDXjYDVgzQCmFrCCmjunbpDTD1ohXXfxNeS3f4EwQUG3eDxiYMuqV3joAJyu1tEqweQe",
  "key33": "5JFY3pfDu2yCA5YEsCWQ3xnF8JxQ1M64xbGugYf8dPiSZF384WVw3LvXWzp9GxL88Wh9HJjwdxEA2WKbXxgiaeJn",
  "key34": "5pfE7B3QPbbXTC2gJ1L1iHLR8hN8eSAVYo6uunYRtjs7ZwhubYznxChvfJYw91t9JdrD16pAXEJ2G5GEU21axFQS",
  "key35": "LZjto6n1xrVR1dDxWywCK4YcY4H2wXt83ieRxxuvJCdYA64vm29KryvGwrLyEUeWWmvvW3T646jSpJgcW4oxsk6",
  "key36": "JuKWSawyLsZJTZcvs5dzJjcfzFCJrRjg1DtksxT5YjyrLWwR1eCdD5MxsYCz8bfHukRt9Be5K6HeVJMCyQzwv7X",
  "key37": "4XvCyNJh77CUmeyBEjjnpPgsW6oEieDgvCWQzMXahm4BK8vqUT7fH4W17D8KLP9pf5pwUTec5TsohyQgZsxF3UR2",
  "key38": "5cWwRSncKoKo34q9pnLanh8zgB6FkCoKyuCnpgsQ4euCgscvE2bvBFJ5Qbx2D2GV2qXUVR817pm9vHEjmvyRFFGk",
  "key39": "4nvsReLfA96sfBXr2piGZvSR31khTr7Q9gXeahopMCtVHMYVw7UgKsyJcDw4JnG1yPRdpRRvW3r83S5CWHyvjHSY"
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
