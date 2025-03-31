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
    "3rmkrWxxs5fyZYMPmjdaUHZBVJa4snJCub87UseXV6rQsT9C7F9MrZmtXjsDyuEwtEdA7BxX8GKC1QQsYqnRiPCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xpeVSTD1jRyA8RkXLmGZCwD8xFJeSXfnXqqTivZL2FefsLq5jujb7aZS5a6UHtGm3NqXNdNNe7UK46YSUn22vD2",
  "key1": "4c9Zp5CnE5RRw3UwFXEquNVbV6rdcoJtXKNzHjpJ9PySC2Ud6BA2jaPXcshFvBZNxsQrD4kfhuX52sUREH5pppjJ",
  "key2": "3LLLMnDG4N4U47zS7zKSumoBVtE4MrvjMpeqCTJJavk4vpQJ2osGc7arQVivcW3zgF15ytKUrmHQtGKxGZvi15tW",
  "key3": "4SVGyEJdcZSSquWf83YSX1CBDWYCYeo4JZ4dQ5jq9bmZ57Zag6aEGurx6gUpWenD7B51Kb9Q6o5pBjtNtHZ3U33b",
  "key4": "5TJRDK6STzaWEoGWjjxwZsnELSY59vAW9way4bJX4ENKrLmuGDcCZs2iyhTJ3iRyhj18mxhwdb2GB3bPHV5gEqXV",
  "key5": "2uQwNwC7H61VeyqeD2Hyi39kdrJt9pUZBzsVYhPsiG6BsFEkbcZE3TwwDtKtNw7zuYYMAZfcGJjD1hfPsxBgqUh",
  "key6": "4C5xjyDVXcEQTfpmoMf2Bvppp1YRhnz1MVBkeNss4jtDQhgCckxVfkH2hH67zj6pvaAGinygc5kN3dSWnw5wRadD",
  "key7": "2zeLZXVextYGvSa6w1XTBDuSsgyu9sFqfJuPeZaNG29CKfeDupEAAJh1XYPjxFLZC2N5pFnzLTA1umyBDXovUfyF",
  "key8": "57DUWozKEK2uDc9JvyGZDny4zrwsaVVzFmgwRDMeqSQon8PTuNV28CaLXMTj3BLngVuDgPpHtdePCVuwUKjSahW8",
  "key9": "2QaFddy2eVvCn82ES5tfwrDXXYuuDVa55woPGGnrVba1zQ3MPVEG7rWBUspdssYZ7jy6XHxtX3E78DpkQx8Y1jxr",
  "key10": "4Eo3smb173sC4FqSaHhCVg3vzuS3aqsjQ6ynVKiDUwE4YmCWBUL7qr4j5hf9cH75FRpp7gZDHphTvowzSivF4rGW",
  "key11": "42xkPVrcdfXuw3yK3S324Mo5AKEP7f8fZ6ECf3YP4hXMCCee12PKpKEd4XsA1Q2Q5ZJ11ThLQX1jum7cwJx98ZAV",
  "key12": "4Rr76A1VibRCuKP4ajqWFkKBvg93uGSaFx8J5vrQoXQNbGFNNgBFk6hYVifiVw9evVSXYnMjn6eJs2mcTj1f3ss2",
  "key13": "65qj5caQHMW9ucF4bSJP7k1uT6bP2uEFHwP6PgLChGpJFYXrKBUv51idjMC8xSkEG58KAm1xcLe4jTKvxZF1fCGQ",
  "key14": "26J764J44dSRafp2ATQhAhKgpf5kmXY9bMs9XdWMWcqca4UrFysCTFzaNHd1PNcMxB4ge1hgXQQqWnFehDGC4E15",
  "key15": "4fksWJTLjqm7XM78SCSJnnntVv271UPCHS9hR9Y8VfihbnmT8L7tRruEPF6iG31EEcrhR5QAUHV8zhvLsAbjM8nj",
  "key16": "4Nqnc9D4bxDu9U1QiNTdKtwUYtCEFu9TFA1uLFBy7s9z2iF285M5r1zkyBueKjDvBNxrX6EsirQAZZDW6nXcKy59",
  "key17": "5Pc71EGCxk5DEk929yXfo6yh2xcCiEDfJ7m5QU8QRydzSDCfi2zdvtCzdR958VoYCnmYfUMmoJHR1a5sYqzXZGk8",
  "key18": "4BKnDME6zzdtqQeEHtMYsnbAxjJCkbMtDCCMgk7xpWd3J8X46vMv3t7SCoy5ruvg3iWQVHzj8AGAnudocaLQWwmf",
  "key19": "ux2772TLbei6DYen5v9APNURGgybfNnhsfAppJFAX9BdZZ6UsDYLwgaWNBbaoPfqcf4rFTnuAqkKkuBZYsuw22Y",
  "key20": "5en4dPj8zXa2y8kspQzPbsqwubSJthvHTydZHLhE6wiwt6Mim481z9Lhd6aPFPf7Zuk7pKJcSoq4aYGDP6SfH4f5",
  "key21": "2tKL586fXtcvKChiWWsVtwKJsHe2SZYnDfowFEYw51eEbkioNWXkx7NtWbrjDKHWKurQpP55aiPZLkEnjjqHPAdW",
  "key22": "33QVh9QPRcJpRM16ZNLooEtNRCrnNtgSyGR1XN9X7BsGPaiCuHqg2bPd3dx17jiPQtEQ33zghFsLYRw1H7SjvWib",
  "key23": "2oLifwhEcYgLZ4hDzeCqpaBknGB4mtpzHFyiyp2NdJJVc6CqrxeEszQhugWehuJZYQU8E3KSTE6Hgz3Nuj8ASwSL",
  "key24": "4Bap51v3TubjpPZM44o4vZsH4xAuMPSu8gPy89ASVBs5Dr5T2jJ9MTeVDLpLMmfHUV1PGFCAfg1Fs9RjDzPaZwBz",
  "key25": "2V7LbfxixmtwGg74ZJSbSPu7a1SqW5W7rZJoSMo8S3TRgoDhDREN2fLaDU6fj6YMZiM9VMhK1Qg9Rg5VZUnMiPUe",
  "key26": "sFVvLpNeEy82fXFzBxP1qVra5SygWMLGmjdALpMxVXhK8J2tQfk2WtejHu1v6N2MmSRPnjewjpVEzPJoG1hiBMa",
  "key27": "4nFpVgxeVRffvPoYhdTbiTPEcL594dBm73jCruwFboZZyrztEph7h9XjBGN8cmrL7aKf9oYNAxfZR87JrPHTBDNh",
  "key28": "4UWbhUgVUzUaHP13G5aNxsRopwSaPisTDHsVuhF799dkzVMnc2Lc2oS1kJbJ89nHtQo6GvXdtcQZN6JQgiKSLF8u",
  "key29": "5sKztk4pCaktwF4tsChvvJv5DUt3DiWR78xx1kHjthWhku5U3DW3rq9Lt8L31jNbNoDj2iPuupSfoMYFb3jAYZXo",
  "key30": "35MGDUtMn5wjGPfsdH9d1BDCfRT4QhgyXtcVYfjFZWfvp217yCkpJkaDuS9LLJVp4Lc11ZsxMVccBth8dHggyZg4",
  "key31": "53JHwdFmxGYYyPmeVmdPFUHeQqjV4pxLQY7NG9ezFDT6o3mRTKyXAYoqcD82JFTv1n72Wducpf2hsqkXfCVd7XCz",
  "key32": "2hPUq4aAHTgHFSz9SmTJXyJdH2NXYaWr3qcdNW4XxFz8UdoxrUeSdHNh9vYzopKcGYoqH1q4Yy217UCfURz7AoQf",
  "key33": "3tPQcKr6YkBfehKTJ75qFZkZQBNBpA9qEasJm4NfaMA1EXgQRfFDnFXGBexmJD1uoEXPofNBPn1ZQFQ2f1ro86fL",
  "key34": "4LKJtpJt5YZ1xbBJjgp1cVMjKF7U9KWKCNKSqkA1rDDpaEJAAV8f9rmLsC741yxp5W2rX5LrtAMufcKUNH44sY2U",
  "key35": "4GUj8TrUi7fYMLQzoAgBbvqzLEZVVZRveLLf7qPa3SysWgsw7wQXhGdoBeN5JgYk9VJ8BJVqF6hN2bvZUEAW28Zp",
  "key36": "5BS8iywCxx33vsHJMnADBTdDa4LL1PAiMFva6R2CdeiyawTo4ZhdFYHLr7XAosy513u4nD6iZvWihhxPuzWPPYV3",
  "key37": "5P49dLxkfULtz4tD8iMp2byw1ELakbjwUuK96x1QgQxYpo4KExPJ6hLWArFEyTesTZiftVicEgrHJmuMGYTCWTP4",
  "key38": "3J5MaeAc8km3ZNJ9B3YcsuUFpz2u2g3uFJCeGW6gnibterE27UmcEChWC95WKCjoAQ43jZLZTpYmCrAeXVzuWQwS",
  "key39": "2sNc55V3PvEXEdEHdmhBQnE7ZjsVMnTM1UmyEyyU9r5UE2EhTCwtfa9fYif7uFrexP6Mc2RzpAx18viJWDEbzUcc",
  "key40": "TfGKpJMiS9xyghr4ieev8mNi5CPkL6tPj2uQEsJE6rTZhmQBJxj2XBq2fFw2TYc83R8ZZwkdJb2TQxHV48nP4aC"
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
