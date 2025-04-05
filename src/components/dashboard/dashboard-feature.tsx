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
    "3UgJxJud6cxntcovC6aD82sqbpUuiMs4NJNeMhK9gcEi1XK4NNH6sxi3PTLYsX5iXvri14BFbF4mKVRKmNSBbUc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZhxq9SPY3kkuopmGpKdxjypReA8WLzJJVTNHnq1qqee1GH2yqi2MmpXKTzF3WoEWfEUwv6P9oUear5W1C5JppC",
  "key1": "57bC5ygVWYiqtQG2nyy1wbujYdQiyURvUUDePt4hydJ4Kx2AsoFDWD4AMpHBSRbj2xnyv2tQUiv2f9tdeJj2gHrn",
  "key2": "5bQ4JmiUWFgoxr2a3F4zBjs3MFJbfXaeZNBx2LQF1yS1d6kuTJJ9hSUKPtc9GAiDYuz2q8zZ1oyiHTCAFcsMikf6",
  "key3": "nwv5ZcjFy4qgy45JJSB3HdRbwJn6hMVXrWTG8bUqe8LUhiGob5WN1RCwHTfuSU3rfaiuvU21RwXfo1qMryEQXuZ",
  "key4": "3vqqK8MZKPKaS8EsrU7HWvztLzCGA1v7X6vWWkvuirxRqi3fT1BD3BKUagxTZ7zysUxbnTuryaJ89FkUrV1zZQAw",
  "key5": "343cFRe3eCQAtDRH2SWmaftCewMzbkjUkDdrxu3Z94QRJmdrcFpWnrHbqPwHugVmaYHryW6T33uQSD93qU23aqZ1",
  "key6": "bmmGswi2MiTYn4i3fbZ5DqCFiwhHL29qGXEwhbtEFTjDSKjWZ7SaFDqKmn6FgKkoEBbi8RSPzjPyMnBYZYDwmB6",
  "key7": "4LNjdTPq9PRigW68f2XckN7vMJPYDQRWrybFT3RrahAHP112GQ6vxseYMA7GWgLLCMmZkDSYayegTVQkLK5iYXUB",
  "key8": "3Si4npQ9YsNg3bS6qvtuZUErh3Sg6DHUvbBGT89jG9j3f9KebYYEpWyPc475xnoPgeHHtif3WQGvQgpmMwKv7hqn",
  "key9": "2juCpzrCXTKSC7DhahCHesVTi5xDwwSDktuRwewGrjTrzpxUf4kYhyseVvYvqqGZo2fbAuVuJfVwtgj2Lg1PY6Yy",
  "key10": "45hz1Dy9s48na3nYRi8CizJgEwrMkZsRyB8gEzeNH9nbYn7cCfC8eSPjZ28v9EnYZmejDJnGEcTTejJfUmKkvLvC",
  "key11": "5qnt3YKmNeoGGdV272YERif5Bwifp6PjyV19ZSoY3C63dduxy8TDe7FCKKH8BjcwaxMDQshPzbShTwepAXhbnRhD",
  "key12": "2fcpv46A4GJBWTEE6NtaWcVnrwADtTnGAQiwf1h2xhfrG77ecVFShm9mgrJJKa2TedzpCnCFbmY4f74n9VnpagGp",
  "key13": "5RzsAaDLCLrvAJ1d2FQmKoXM7oD7kZNeaE5B3QDcs7mAyxx4CJpi3Aj6j2chfZjETtvuqjxKnjQ9QDFSmcxsjB31",
  "key14": "yZQ75A1CqTCp9CcVjAypzqYr7BWYKNErwzzUHkHr6W1v2dx2ptiefd9aqUqNB6hSnX3fTMiFgKnu2mCAcinSbAr",
  "key15": "45jfnoTsbwoBafeRsdBk83U4VPtrShtvbPksVpeZwdkBHgu1bqXs4V3kBWtfKWACvPiaPssGkF61qqMaxNQJA7x9",
  "key16": "fi1gxWRnqtJDLur74i8y3MzbuBBZPKNJm3ym9QtnE3a4xrnKyDn3zSGLuHxgSLuQjpbHoo8KiE1ZKmJuwKFzzqv",
  "key17": "3S19urYrsfms1Yezaq9XcWEEHYkTzimupQsierFSbpA4XF3z9EedAPPVs7JmNMqVWgZr2PFErzWYDoEjL3zSWHFZ",
  "key18": "2m4uydA99RmuHAQDeVpRXkCNnzy8nS6S1jps4LZ9EUFUPNxaE8UqhdqqGWzogyUDePQBom8tpxUt6TKAVqZHTy43",
  "key19": "2xYSyhNBUvvHb1mbnvHzrtgNCu2vWYwXExfnEQfgDApxiBMZ1Vgs7GLXSpTxe6Ni7uJQ7B9xCBpv6xmh5qef4MLB",
  "key20": "2Dw2SeXXA9FQoJ44t1XkKGC8TvUFnKvhGTWxJC7kN55t41j5kzvTohFVgQgiZZLAaXqEDT1X4tRXJuwUzQK51i64",
  "key21": "3tveKC2YA6jXvztMPubem7r6CDQHGK9Ea11i48xJY86xtEWXsr9AiTqWpEgjxSGiBN5qk1LRZxrsRFJUgqf8om3F",
  "key22": "2e5bc1e4WF8TcERPtrk337bC2o6kbNoqLnEmeLYoqgbGpbATgG24ssiSfJkzjZr28u7NS3ZfX7RpzWdVeAYUEiRB",
  "key23": "4Ymg3Tv15p2Lip7u2KwZXePsaniejRQrBQ6Lr4NP99b6tb5uLs5mqqSC3jmwoP3nbfwn795nRxZK15ZWUq9fYGRj",
  "key24": "28gMQVDbkW5c3Gt6DjYGe6zfE2TuqhewNd7ejSQwAa4aTkykz4PCgZKXUf5gdwheAnosJw7PH9bjNQryDrAxWnSh",
  "key25": "46DTLzn4cX5F3DtaMoqAFat7qXqDt6YhZA3HmBS4FMub8tuLLdkn1xmgUqTeF4BhpaavCQuoPLmZsTd7KWFEy87H",
  "key26": "qNQBRQaoFLdR5A8KJ6qMq9P7EGgQMNHNBZrPbxHhFEZJJ6Wt6nnJcVPreqWPuLh5c5fg742oPm6YXjQWHgC5Fmj",
  "key27": "3aQ5Vbt45rXTM9sqJwsCeheBbWNjwDfFUV3ps1sz77hdbhz4kK1wuAa9cLz7j7x8GTJ2hSWxhX87UY1o6RABtjKj",
  "key28": "3GrBrjB7kQQrgr63Y2tbM5czuoghfFzDTKX8UmPdzpF34Skp5NCc2YBLpnYwQGsREmebPwaPGyJKFSgAKYnfdcHN",
  "key29": "4e6anXdrAF7CbKmZye3CyRi3fYwSEbDUwi17sr6CwDEo9tvxGfCXGRDB1GoZX9aUrCVBwnvnP5H59QiTPdacADBZ",
  "key30": "4giTu1x9D3co1rYnrjASf16R6eFfrPTGZp9TZiBuLiyctNeVZ5CmJr2ZFiLn41SiWHgiatkuPTCaSoqbZGGBcen2",
  "key31": "36DWuNJ31UNYuy3ZcHSb2hWVReThPVG2gtXfY5r8SENuZEQSzWF6ayVu2zR4MhBGW6G9oYYYUgB14vYFEDtsBcYY",
  "key32": "58GUL7pbFCHRdjD1tUZ1FcFYTRc25yGXiP9TGSTEkyQUPxvS7rbrH7x7BoMWvWuU9QCsCAiUuG1dUuaRTFSPF2gb",
  "key33": "54wnEJfjfPUnuBRvfh6YtxuLBF6CH1m4th4tTi2w2uwuaiLspaMUWpf3Fg3MeQPMGpxChY3Y2rJtEAbWw4jBJbbY",
  "key34": "2nAxjXAMJ4jrqyKoyeQQnvt41tjCjxtuHJNhak9413AVJ6DJXVXr3dpN1wS31JkMBZG351J4bmaFD6c24E1PQB8H",
  "key35": "2JAtRRTpS2aL6SaQLvu3hEXgKGL62WbBXqCAiU2SRtEwiUsZCSdegfj7ALFpDeSj4E7ehcsngKvYrv833EeBwSe4",
  "key36": "31kJjG1GotwfziqNNBz3ERDbfDWBwG4f2rKQm1cLfUX4tuomajqhDupULJ1zMYHsEpNZQSXJyn4EzgTa56VGxFeZ",
  "key37": "d9q1dBptpTsVMNcE2qEbhQ8WoyJHwjwgnzG6S2CkwAqspV7Vvgjfyq4E4sDgFbMq7k1jnuhYzWXZD2LqDCrzhrS",
  "key38": "2yczs6Dk3npZMw3JRmYSg6Sr8tntJvEkvXpGVE4PePWTjTcLyHZxT3xu5eNmamSRacH5rPjxApr7eE2UDwzp8a1D",
  "key39": "3txYjdoHhwrbiGsHRRngNU8gNA2tbdzrcGbqLL7EBqxAsgW3Zx3udKWRXMGmjBJZVhdPMEFbrNjMNshj12N2eG7p"
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
