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
    "27vDJnMeXetEETvwf2EmvMnGrBbGGShZxFfWY9PSP724ThcithYvRP4S2k7wQnxMV9bhDEdAeRAeQ8dMvmGyzLYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H1zeWU9JReXH8tU7GbmGhg5oKV8xEYMs1CYakW7f3eEgpYuyt73JgaUpWdw6stkUnoAg3ZxgyAg1RXnG4KYK1nr",
  "key1": "2eaiGjjFAWzvtfuWr1nd7pRqgmxTqNxHq28nD6wXCqUZp7hejP6AFfXLmHEA7YQzVaECgtXbptczmKVuCxbfwhRN",
  "key2": "36z1nstQp4Umfk3pDuggZcFZBUE2KNmY4YgiDnv9AXEqgMMaRsdH1x2YJfnmRvsWt6z3db6RQD4NLsth7cjLvCHY",
  "key3": "38rNbr8thj9DJbzH4rQJ2v8dhggZJPZUcJgvAKEDA98fzogrTYqnPN6cGbVdHe4jVnGfxpN1srmkzU1iocAjRzSy",
  "key4": "5osYg9n33RZpnnSz6LBchadErFVTD5VeTevUvzF5xQrMVfAnNnoE32cPepBXDZPbAHfr3eo2cNYDpGunsxMdoM91",
  "key5": "4Xg2HrbAzzrrMSg9A42qnBRVq8SravSCfBGd4SfD2CpwAvFvtX8Yj39zdeYMARJHsbMTiMZCz855sjDEtbgj3GVR",
  "key6": "3BCDPaVs1diPcm3eyAQ5naNm3u3Bk2ZUffptm8LWoZkUv8TTTs2A5rdmfNfbfJh3M4mkicx3jwSbUH5MzKjyZusg",
  "key7": "61uPq95gjhF5nTCbbip8xoyYSQB4ZoroBR7AhbVsGNyWi7FV4K7AFt23GfYBN4kzhFmzppqJZkacPPb8GXNA58vy",
  "key8": "5DR33RHPSmZXHh6kQo2cXQSoL7iYHqvQQ3Y6emLwrCUsffNaNDud6ToeBJr5h7SkGDxHuyfBHMFv9CcdvoGhBKyo",
  "key9": "gEXy2x5v8i9duxsuQHViG63PYT7eSdHam7DPk7j4HSrV6uwPuefPYX6jDFX8MXpyn7NHyMCKzMTwwC9eHwmwybx",
  "key10": "43axBHei9YxL1nS18idCge22XzggW8u5EFdRPm9aFXdsrGjpU53wHRXPa2ZrsWZinyugCpFxrMe1YvhJY3wTZmD6",
  "key11": "3QCYafNxXkCUfhpL56DYWFq6JcZaxMJnwKfFHo3s2BeLovBfoEobSjcnmP2FmR8GouLCmbCi4QyrdovZM3wrgnyZ",
  "key12": "3yRKYctDxES7Bq1YQHczLqVmHWHVxAjBhmwF1BdFGrUyZuuS8t9Ddm1gYcqrFqXGfFzfhkfPHuJ2UTbnB4poGx8R",
  "key13": "2CvoumM7tRDXd6xTgMwQUnKAqf4VgTkzgKxpvqpjTD6PqXiVeH32tugURTZgk5FEth5MZ8heutTMquz53wnHdkxd",
  "key14": "3FHZ42adUkNf5Popr55wsKvBUz5wLvG6a9sV1FwcFnCecV4C5hCKjDvf9bd9WDdoWEp82FTirUEANc8Edki79Evz",
  "key15": "3UfggWnWUMEREw3WMHA1QSFLBFtLWG4Qr6SBafHS63VDZ4srFxnddNVireZCpoXFS44Eghw49SkshxkZbrVNzx1D",
  "key16": "4hfBj758vYziMAvG6ZZCEg7iwhVF3vwdSvTeYtP9fZWdaMCob5wxRDHipE9psouuYQovYPbBsHh6hoFx6c1KXX5M",
  "key17": "2N7ftafxmfXRCxTDZVZK9HoZppZcYi7Bhd2gUR4GzWXGF7xyk51M7ro7ybUqZe2cMeQt5AvPYM2dUg42N21QXnrV",
  "key18": "3BbUJbcdoE3GSCTTPJNqFobMGE27WuisgWpkNWTaYGjU6Lqxf2fGm7C3Mm1hakFYQkEGS9kppWDRYNBoGYnJcoQz",
  "key19": "5kTbmS4HP9pGNqayZUt5LJVR1uQmLVZmgy7rp4GqoDwF9K8jiSi68RXQTQmd1Y68EGxkLXSXG3Ek6ys1JQWuE5vW",
  "key20": "2Q8H5sJA8VzrrVPA7Pxhm7JNGggzn8AAzDzWm98hkz33GGk81TrTfFwQQvRmTRuenYq23GYgQV5LSaLotVzNqhs",
  "key21": "5ZKrWDRppeseh1o5VW1sNnGZdihygiWNMKepH2CtHArbg2ucQckhoRWmxoq5kZ7hGvFfBCt7XdyUxLJjjxFmU74e",
  "key22": "49LUC99hJhsmgq8JQwR7JrnTHr4jhUiAzRxSREeHghgUU6t4Qheka1fGQB1CQFtT8iWtncaeJGn23RDc2LB3Nu7",
  "key23": "58qjsVSNozHtC1XFWeG3hQL2ZZS18i1AnJrgLzF7uGhWDGYzBs4CH1x4oVrJ1NsefPPapTJuYrN1CVZJbpyL3iM9",
  "key24": "2DMhp715BLGirCqGnSCivmbSGZJyanQxjXXEYasiCho5Qcd6sMRFLMVtZR6vePUEzJoPiUs9aMjDx4ir7AcDHsny",
  "key25": "5cFUUjrW173wWaeLhj9EL2WB6xRgw32qa8KmXF37NgjnASjoTVX8jfYnwzszCiRy2KT52LQnyWXVNZU9iEWhFCGW",
  "key26": "24XDQcwzMCfWm7P7BzvPv2cj6pMYvKxv2ikDCP6eBBh98XYDBP2ZLvKLU4mGZRunMFwr1e7X7jJoeB2u5r2BrDqg",
  "key27": "pAYEj3DgPLBXwrq5Y6UJAcFk6NoadfWU6AKNmeyhXZdzj7kpxLHDpNvmqvff95AJegy67FBGEFuG2gj8jC3s1bX",
  "key28": "3ow2zpzcH8yg3G2eaYePdkgK39fJKxorPCh94K3icc7ckn8Mb6tuJUXWwyxKxKJTisQuDaZ3yNhhzgsyTSy7rV7p",
  "key29": "4yfZybYTvsvqPL7vjQQcrwqLsMizzTZuKh88uhjqD7xPL54qiKKAy1gNabnSh2AGk3FyTJSyk7ijxwubHAPvfR49",
  "key30": "666MzS9crQnFJBzBjVwGU9uJGxdE7JFg2JEiFQLWf671vEPrDjeznSexcbGMCUzXETas1YTcmLftZshEBuScKGSm",
  "key31": "5LhjaWVUFXWe9nd3Z7zTjkYR2gPDXq1hQTPEV28rS7qKuYVFN8RruYS3Bm2heh5wtyVKzR8cErL9N1Ba1zSKmgNV",
  "key32": "pS2J7zCh7gHFsh3RhakGKiowJzBmetLnSxDmSr6EFaRQqueR6sf3mMybchdsxgTwgWYJcBp93nvSEUBZR1V5nXW",
  "key33": "okxzkb6MccLvXTP84DzqZ2kc5ERAsEnULyGSzzib3MQPbpk68e4kPkFYrvzkvYf2BZMzCdNBQ1RwsvunkEbSBTS",
  "key34": "3AdSRR5NiSsEWYMYXT3Bz2VYU4jVccXhaUXGczrFEkXRJqi3hK3FdaGxBjaSVGPPbyzkD41J78ztkCsqXEhjVbbb",
  "key35": "26fAbp7n83zxX1ViZH4szNEbmFyZmKKN9KhisDQRia7cS1mvLXwQgrT1mtHjGFpr1mCmepG3VqDDCXqYN4vR6d9J",
  "key36": "2S1r4654bay3ZS28PiaAm3TQnLHpzStivL2fUzFJjb3pxQyjukBzVf63tur882qptx1sTcxEbEAVQ96AXHVBio74",
  "key37": "2efgmq9k1frFjLwcVWAiyjgNSDAmYaCCaAnk2gwxJ9sMfjXaDiobmRY6YpKH4LUTGy7FXo4yoeJxHNSMKCLXAAX6",
  "key38": "5kptyfuLzsmRJEsbP1jizKBnkc4BQ8FacQNsa5sH2kYPX1KHDj6s35a5ByHmWAmZZRrwpJ3KzSYqcgwrgNQkn1Eh",
  "key39": "5Ez7Qu5Z5daPhQHu8j5Fa4rukVghk79Jk35L7yf6nUucBErCWK6nCbgrppjuXwzFokoETPnsoSvMnZ4sLvk7pgma",
  "key40": "2BJ7yrExCP5XG7qZAY3WNo56gJG7QjyCgzFxaKG2H4SWfjspQoh5HsBNEtBajKf5DHgEemy1mJtXUfeAh1THM64d",
  "key41": "4g9eJjMWFq26z63HgTj4WjFxgJSwYeSnJ387WrMFefbd6cR1ue7uZ6N4QeyZ9F4hUQVSSDspWgVihoQfAJAtaK2d",
  "key42": "5ZPgos4PKsXnqob9oPuBrz4W92XzucUa13uf8E8F995wnssuz7zCBUPWVDVHkuojwzYdJr4uKi7KBeGLgMF2VSM",
  "key43": "2p7SJ6KSf4Hj8jLpLnAhNn6GZyG3vVLLxTThf3rkHppnvqrhQkg8UppZYPFQRPF9LQHag39WTeiFvz7Ait4erg2e",
  "key44": "2ryYvuoFsgUGa93yCz6AavenqCaM4PQXVJLsjeZxXu6Hcc8L3Th7FA8Wen7URHcwpobSgX8K5SF3RYLCwmC3rEAV",
  "key45": "DWtVR2sokP5UvRzveDW5BbxTY74qYn7nWv2tXe7UZDEqHjHfoFFEkgYQSTwSMUYvTeV9qYtRFgsswuohAfRVnx4",
  "key46": "4HX52gc3uXF1D3ZF2u4LV8zxk7QQxEohmSz8iEPFzZ9ufmQMU3dzkffcak65mN8uMpWwqJ7UncF9qqmQ9Z9KsEXx",
  "key47": "2fHz1PmqpJMbph51DaPtskLKWTRsoP1sFfx8ydsxZyeXytieeBWdrwhtngKjRL3ydxr4wWMiqUf9PgLkFm5dp4Nh"
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
