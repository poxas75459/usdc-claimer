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
    "4yuQDRd4rxBDRWJ8xcKvM29D7ErXqiKLL3K1UseTBsWH7qbTk3aPGFrNcfCrBhb7dF5KexYXPzvtmXGMXcTb3Aq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XUNbgF9GLgBHafQWCBq7YtuJJ8nCt3c2HKt6G8wDhrPhbKnPHF1o7E8C922c429J3R3Pgo3t87rSo6P5gKfmfbE",
  "key1": "3wV14qTwsKZVpALDtXEyNcQ7x4DmxzdX7QoERVEQog6mmTt5W7WF4a5pcUub5cWmMJbqEPR5xtZkiiodrvcJiqwg",
  "key2": "V1L7EjbbDXFeBZbxcn1ZhraaNtC2WvZhcTEk2HEAh8Pkk1yk24Ak2zKtnFSe5b3fK783GwDucAjN29kMC4gfBRi",
  "key3": "3YLgYAQZbv38ThoHGBar7UJar3fqv986DUHrFNXFkqGDFvKTfv94s6Frv7MWAyBu6GBbAYCbaN27TU2UyFNvJtgD",
  "key4": "Sw144ggpd1N7ds6TNRAyGVEKHSUqnHmh87EkH2jiekxJfv8oKwWbDwxrzg73VGb3k3CLZ5L9eseX8bo7rTf4oQu",
  "key5": "5GaHP816XNMXZM4nvZEki3PeS2yptjaiBSENrtPiLqrYinZhLBrtSSguGHhWEMQutTrovpymZWW5H2cn8ter1XMR",
  "key6": "5x9uGD8LXtTMk733gWyfopM24axsgmgM6TQ5DY4FTwqc7cdD9t3wP78HCKAJA7QWTaNJ9xpMnJQZ7HBToWiqRw6v",
  "key7": "5iQxKnSeViXHHtdTsp5EpBHhv2FyekQxmCxeodz11qopZf9LAhMTdt2L5UeBPtkw4RDaRpsMagTgQ7FqQKro1P25",
  "key8": "2MWnisesXcgRFa2DLUXKWyXmfiSq3e1uK8QZPHBWPp3eA8rBSo1YUXW8S4YkthtsQXCjP4C2EoMhdKFPZxY1wiXD",
  "key9": "4DJSeWLCunQMPHTxPd92QKSTEDSeNaZY6U9CCxmr3bRSWwkVS7mwc7cPSiAHeYcN2hUKm7RgtdjSrDW2Fcbwr3b2",
  "key10": "5AmET9XWuT79m2NF9TZDXnFrU6hFStLGjjk26JEibzDDVNH2oE1HFu28u684fhSgYnkYnLpbjAKeA1vnzfFvWyVk",
  "key11": "4zoJGbkoSMycpwHWn3nKGEgUkUa2W4UxdHjQpawzKWAqqFAJwQ6L8NyxdEvSwfSDGoYGSSACajZdzfU9DK8BoEs5",
  "key12": "4iXbXNeR6tYHgVMRVCFh3AM6crfbXcj3HUWN6EBo2etKACWppLLdSXgixEAPZfjrAbBsx3QGgmsfCQvcZdR285F9",
  "key13": "3LYdffsCnxCiGUgdj9oSrTBgheqxUvYwL2DYCPTTVuFs7PbTHFdJoL1qTMf4wEek7nefoNL5yc8KM7ZseM7H1E9G",
  "key14": "3rPbiAdTKYk26RBNQXCfomzZiHGRo2n6N97sb6e4axG8tFZzcYBPaBGoALb7KzRBg1WDnSPTLokqvtmYbWH714SQ",
  "key15": "5huein9AYuL2cPQ6s1X6SZ7JrQ7Y1fexZTo7HN68yJUQu3R91hhcEJj1Kx3c139srPj99YxMLitCvXxSKkH7UygA",
  "key16": "2d2yhbyMPktMTdBjmqLdczH67MGZnj6VU6Ntpevv55DhTsMQgm9LrcW2f7K6K14jAgQrvfJdVmYVP33Z2KBKTpye",
  "key17": "4sAhY7tcQSjbAFxpUzk5WCtD8wVXLG5mHt4Gtx5PDAbXg9Hbqa5jK9Jv6vYGGzGmqVcf9XbNX3AYLv63LRcfmCvC",
  "key18": "3aJqoFkyRn2erf2xfi3SK8A7MPhukDBvZBFybG2PpCptmJ4UrKuMcDrfDVi5kQJdSkUsp8QSZe1kPsz8MRNo6DhG",
  "key19": "2x7ZYc7eq3TvFxVNpdkXW84XHHFDw6QF6cPWyvQddLkW52i2qaddzKGtsr7PM99BQCgpddTfm7LbzabnWXewdRWg",
  "key20": "4x6wHwEEXq24jr5HQ3NLg3FgRhm8PJR5voZTBHfqdY6L353waNMCx2d8UVGzutrLazy63QS7DhB1ruxofRMpncH3",
  "key21": "vfpQqpNVUx58gAyT5wC17wBG9pmrv9yMDgiJFVp1kJPSDkm58xrcmku9jecyKoRduJgbeUYH6sG98rFQJZE8SfA",
  "key22": "A6wjZuFB7A9x7gjNrW811kt5e2rKBYptCrJAVxzgiSnPfp9gRJ5jwWyLpnAdFh2aLPbQD5B3pE9porrqe9wajr8",
  "key23": "3PTb2zHo2PSnUpLZpP7YJuNTvLeN1G9AcvdxgFn8abSpDGSv39f4vxpsbFbESjk1c91818eAT9bSkhJef46vvq83",
  "key24": "59SKTzfYTFos2W21SQjPkiezG9ZoouLtE8AzDkP6y3wNEwZ7sMwERaqcceFhggGkaYDVyRschxK1j8ipQ6LE7ZGt",
  "key25": "QzjX6V2UKc8bncXY2x29QRidQcqYWHGX5gJs6WDFP6kTzSHtYrLMuUuXJAa62ZV5kDssLh58SKKdTfJKP6f7n5L",
  "key26": "3rWix7CWQisBgY9ETeELxCTy8TnXB5Ch8QCuJzVZ1CH3qpo58tDVViidtDc6V3YREVNS9HLQZ8KhEJUf6XDW1iBJ",
  "key27": "3nX9gmuGEAyUgJu8q25aeYCdkgXA8gMP9mRf5XoBnR95d8ie7kTYTJ7VwZYiZUgASUaXo49w2Ru9uUM62M3yBwDA",
  "key28": "28qqMMPxym3zkxVbCyVUsNfdBg5vUMCrBeC5c2FumLB7UpvUqMfgph2XQGBkepwAC2fL5WmzzwGPyvTLS7gJRJ97",
  "key29": "66GDYpLiJfmx78cxvo8qdRAgBkqYS7UWzLtZpH3GcrAF5Ujfq15GkPTxDyZsdtGnWF5vHWWLs8uBQGgrA2Kq22mj",
  "key30": "2xAMwsovdhCWjk6wbYr2pGHFzhjeUyGVhW6xwbitCL4qkGCBRsBKReGzdsJhwHZAYXprPS3nkNqgwRiSHepcd7xu",
  "key31": "2PNPw1ytoiBFKnPomStkYBmMHS5uzQPqLyXDRYnkxGhWiDGAvrY3QhdnZYGsxNjGm3f15zxLMrqU5QSoBzWttdDs",
  "key32": "4kRWvLTpub3A9dhewmN5Yk94o2FxTPs6swx5EM1KmSwNYzJJHRtq6NUT27DxFYNbbKtT2Nt3EhPFDHtHPFSc8cbc",
  "key33": "KUv882enRvCe9JeriJ4cBkQKARKS1BTC7qyG8ymDdQmYFHhBcBebsPNsnAPbLeBBs5qchjRDazSd9SH3vCYeiYt",
  "key34": "4faHT6zUDREyqJu67LNSjyXHC8bvZk47eTwei3imvUh7PnbwY5GLvC5kqN6gUMAzJJhmG1kTdULZzeGucDjoDLtz",
  "key35": "3bMLWSaihU4yhotxgS66KrKqEEWjZaRSfbXs6bDPhV5z9WVKKdV8KzWCj9k5wAMpQdSdHv51cqBvEob3CjUPc723",
  "key36": "87Ly1qYwNwNdeqDyGkD6HR8ZakS1wGCGcwxuaRUSRDaWLp59X6NHkPsys7aos15yu4AUK5cn8hGW4LnXkMCWqra",
  "key37": "27FuRbCeScQNKcT3LbjXZQNMComGB4TqqxkW7vvZGYmhDyG4edEmmUNCRjrJsGGUcmEDeG3EY6gJjzmvtJ4N3e4n",
  "key38": "5cLHKz83qu5dyCRe5UGYLTZ4hEf3RP4vdW6ddKuetMio1F3qA9tNwhZSL6nSXPvLwCcDB68kojdHnqoTjEujdefz",
  "key39": "3La9A4jU1vR7EeJ3yUBMNLWgsveqvPjgwhAuWo6qNRcxrYYbrKJ826HqKQFDL5HVXuquotXKzDKVKBhvfzhgDrS",
  "key40": "2tV4DusmG2vnVTg1D1iKzzcZ5vfGKUg8ySY6N5TBkgEXTFyBURQHVynBJiRyR8qHoqUDQpHq3FeLCcLiBLj79Nx8",
  "key41": "ejhu4KDCBVFhqceuTU4VjdHHFMcuxBRLSVGkYTcERR7RzV7jjckHzuKUBdcFB9gjqFC483zyai6FREBEjC1cnVw",
  "key42": "xCjQUpxRkHxXa8qMa7oGnhZwrSBQUddJX7sB2pFs82thjFSWtwn8XEXp9tfHiYbQffr6CB8Ydm9Fh8xy9TyLuBx",
  "key43": "2kdHfpPwXerxwDuBXwpbYqXPybyhpbCyivh2Zhjwp6MpUFrgAXyEEz6BNVF8C7tiZSEzJwDiwjoChJZxzQpVwZN7",
  "key44": "4vHtiD18oYZ2zpdpE7W1nyZchMeTJa6Yj69DDp6pYav7mrzoFc972gUZaUAW6gr2qjKn8oyj978Br9aUeaaJceLX",
  "key45": "2UjmqTupbmd5ufHSyZkvaqtwtvENm7tHTY6NxAt7Ax5smRPDBNxvrDmSaGyznP4Z5TFVk7CnCfoaWjUp5xt68fMf",
  "key46": "5M6srjbfAor7G9NEVR35uiJgrjfnRnF85GpXix1DmVWo9zuaW3768NNpnmhSi7jQbGhBVoK62117JRwnc6JKAdzG"
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
