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
    "BHhD3oTzMkoSNzkTR6mtTPoW8Z9TmAAEnkfGCv8Nh2WPV32CSUQi6Les63q1nqB2bN5zEBhFMwNvT1Yw4huzJhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m1SRVaUiM6k29d5PUHShEGfqGAX8WcPW7F8QWQgfMMZ6NiEpkujP8cP11qdZJU1RCuNwn21fHxB3EUUeX1VCE5V",
  "key1": "2ihECh1QZTfN29aZVcpSwFhpsVraz75QHgufKFk3S5x1sCwA7iMALSYoksTcnUuoBv92BtW1S1Xk4VSBs9UAR2JC",
  "key2": "323FXbN7iAvLisy5BGiMZyuVGiXjPaxqwEnNG7PujqsDEhCcoGKWG1gUSXxJdZnGiir21eJ5DYXLQDfvZNNQUHs3",
  "key3": "inWhmL6wvd9fMckTNcoaTxvAXpU2xEcPWUhPWzjUFAskT3HRpKGk8uuJdB9kkmajyhnxKG4j7SPvynH4w7kjFWQ",
  "key4": "1vUJWoPLPdrJUKm6UQBxYeLnSkY5gBknPsrUVR9SuwefBNYe5Wm6r7a5muswJwH44CUojYjdQKyWKPDELgxEhLb",
  "key5": "4pPC273a5RjUSvHBpLEpJUTLg1stdma95mqiLxL1pK4MPGgEfcybD7eMmbLJZ9ZV1fp7rUjft6sHEP9gPNvnCVJW",
  "key6": "jZMo2G9avtrhLDft4BUbVNyyXF3SroRU5hkKB7fityhqauwPD1kZXHQvrMK4Zok548suHTSp1367zWnJ4LSE938",
  "key7": "2NMBr9McCDw9z3wwaQbFymdLcaeVv7bDtmf1y1CxGnwHu7UkdcyXdLHcfPWQWCTcBydbciAMdJt6ZcNmJF8og9uX",
  "key8": "5Pdx9oCEut6i1nyx4sgnTW5mVeseFPdccn5tqxou4UFB8W4GsKtpuicxfzQbnJSBGfv5zvzwRkjA9p5Z6LgxJuM7",
  "key9": "3Gsz2Awqj5MGNfQUgkXPYRTbUgRimq1sA3MJLicwAUHJA9Cuubg3higNV5wRvrQtqkpL6mH8B9utwmefpvS9KURH",
  "key10": "29bsFZzTTTkwDjdK32M4dBpRDD3r8DRgrV3k6AAyC6irtmNqVb3PjEKFVaQ8QA4WEa9RCw1KkZe7V7nVMc8wYEbh",
  "key11": "anMZozby5YeUUvH9945HgpKUJH3Xt15Z2zgdioeFSpofWiBy3fvRTPLYJa8oVhpdbpPmfYv7MSh44W9p2Dh7Q19",
  "key12": "5EDDf7RSiid8wv98DusAXkPMjTvXMsKnRfVtmcdA5Vh2ScKaDrv7aTU1fDiwFwPFL4EK2pRWjqXtGz5Stk4zqDCg",
  "key13": "4gJukbe6UEtgehcAnwi6XPkVKvcYq1y6wveMGccKLqP2eH3LE2EsZx6CSXG93qqwpYQBAqkMkboMgfAePPALXBT2",
  "key14": "4XU4xhj9n1Lr1hQZG9UAgXV74U61GMmMjzv1zRyaU4DTkXpwmzRZuTgYTZwJcPt7bPYHFdQBUBoJ9szwfRoHufDZ",
  "key15": "3YYseje6WXi4KauEyoDPKKXRasd6hUg8Pcyry5JdRxNEU9WUNUAo99F4qnYxquQ9bd55ReSfQA6QQSaMNd6Zfzss",
  "key16": "2agJWcng5K7u2kv9xJxvkA9mpDhj67ZarunpiV5fpQZEZRp81sHW5KbwgUngp8HqP86nExawTRHrxMNEWnAM2Wnn",
  "key17": "3Pf8sRMDkSDwp53z9bxVsXH94m1TCo5jbniq1pPhcPXNhRDCwjRVGUiGd4TRNRp1tmhYUnPhS6Wxq1XdpYK28Psq",
  "key18": "5yqX3hhW9KMwqyrryZcHEbBPcGMEK82iHpCTtuUGh15G15g4TvRdG45Xx8USoNwbQPW7dxTf5uCzYpbXWXm6zeEX",
  "key19": "5hypp851iTPZ4Nu3Zwsh5nWx2Twc9hCRTWxkoTTHxtvQBv5TKiHVmxthXA1EbR7g7n9RigbRggVvqWRMcbBDE1wk",
  "key20": "3J3czup5SXKRDuJK5SwkZ21BE8qfAjskH4D8uYM42nd4BPDZJFkQP3A7bg6Jt7tBodFMnR5K9omHQP5Jtz7x8AWs",
  "key21": "5qPRwAS9cCm7hXZRQsKDEfs5DK7RFgd5vcK38So9SbiRarJnz7KtyPw7qqUhxZGHBnw4pZrh4iJ1j13ze59qpQsC",
  "key22": "4qBdMzVfL2mL7nZqssKP3kwkf2CLUCoM9YqA8VP7ByTcaT711iWoFS9oRmgcdRsW84jqN8bvnLWhy7Df9crEeJ2",
  "key23": "4EoYe61torAF3MwV1L8Du7nsTtBsUiBdCoUYX1fUvVsA34epTi2mw2CNne7ybGDXeV5Q1Z5N5VeNjGLgXXRnYQWm",
  "key24": "3uFiuLxcpvkDQzP6pqy4uog72omrhM63vUr2y7TGvqgtPtde5aJCuBamsnwFyQvXvWVjcv2dASnSBaT9KmYhazqy",
  "key25": "4HacYwQdJpUKLuPJrhE4sBZYygR6XNreYTAPbpoxfqswsCaqtvbvZ7FyJjkhGc1pXYNMxx3v11fdjKuaHUaL4nTk",
  "key26": "281uTDTP9yX34xMV9heEwKjWB7Lkqvb7jQPEYizcCyQw3NJo9Ld6WbCZbdf2ofppH1NMVAaMGAqEZjB6JmuShrY7",
  "key27": "43CALsT4wTSjsGTJWoFtidNu8eSEsxaxM1pVjyZB3nf3zoWV7oFGxYyTDw7Jum2afAYUzKJNoYs2BtcxhJTws9HB",
  "key28": "5hciV1TKn7vWMJB3j2t9vsDksBcTDiSCHb2fKXpwFwtiuLVVXqGJZq7rFjTkAQyzLDe6gZwTzRJMxYXw318fBQUt",
  "key29": "4Lxsta8Qvpzfxy3z3H8NrUMocQy8MNGxYHwxKg4cubDwPFz3FBJCExb6HCzAx4ftTmBDTR1Frw7XCuf9VzGKCfo2",
  "key30": "4Q3qbLafdAZnimDhuoCZihSoewQ51dPdmXCVjxARnJaCvzy2x4kinrGKeSe4edYnkVWiy6RgAjrdg2VtESABX3EQ",
  "key31": "5qsi6mj5kudFdFwRbpih1ommQCyj6uyJjGRsgtPTnF3pkrCPtcth45DDbU2BJYQaJmBsgAzcKuLfCXRD2fLznC9v",
  "key32": "2UPAtqZoDbMc1VG2AaUkZUH1X97yoK5eC3ubNjLuSvghatRjMdjxZ5YhBAaM5kFRpikcUzh7zEwXtvuYMQYTnYTP",
  "key33": "d1GuW96H13NXDvVxVaFG3eYVvkxCYfQNCQbNscPSJs6rcBzweh1mNgzp1mxyoJpwVqgWeeNjyWMvLXEQhBzkTTo",
  "key34": "4zeUDufUYXBmHftNPWv6V34wjZim3XP4ECjRijhnwsrZT4h4iNr2cPsjpjTNTVxbe4TVdiMthcMRnCk5uBSxMJTX",
  "key35": "2KM7EW3w8J9tgjBHunmus4hKAaVCqcf3wXNLDWL3rx12rBMnTzGQVjc1SRPJk7hLDHYVhyLdaR25Ho7cx3VMgxWx",
  "key36": "3KiXejqu29i6kzjB4XoEu2Af2wz1kMsAvaT9iNxFxDLx9EazJbG4K2uVxYK5NzeRF77CWp8wHsAdzEJ1APKLmJMu",
  "key37": "3Jj6X9ZeRBbjQ7AV3Gvaw7MsKmec9UbX1Jodx69LVRVkdFavTEM6S15fibQ3u8fFgCNHfS3M9gHTbGDLFdG3pdQL",
  "key38": "2yi1cM21S4yAYKpgrxYcWaVFQvNKohoqau35bkMc3TeKCLoFzhdCKSb8CncRfdzdG9Dbw8nnYARwV4DQ8945mu6W",
  "key39": "2t2NyZTN7Uc9AUufLKcNYh6Eoi6YywwbjPveSkojTK9ucZvuohJ4eHcWRbm5wPmF8cztQpSURg1pnQEHrmrW1qg6"
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
