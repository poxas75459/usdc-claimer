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
    "4i6JiLaeibt2qqbZ8WjdPt5DV2dKg2X4bd1JALj7UAmDPRqQ4jzuFJTkqvyJShQC1wwfAEnzACPftXo5hxE18juJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PWKnQxhEWSYdNzTxMixadTWbMBxAMb2ZCHXkcJWybbuNRYMmb4tJUhPqDTYyJ1korxyd3fboAtq2t3NJZoWL1wY",
  "key1": "4hq36mX19LQeYMiWvfoKMZAbHxT8Tn3i98Qxm8d5hfW1z7dyW1DBo9zDdTFbBJPdaYAuN42ctLsuhWQKB7TyQyPR",
  "key2": "2ygf7h8GwugoDSuiVQczTjqScGZ7BvtJAvwx9rSvKtE5D3c66tU8WtDmiSdos29c8n7oYQtKKYV6v7g2cvTMKZEA",
  "key3": "tRJS1NZqB4gTusE4CAANQW5Ljjty1WHhDY7THGNzsGe7ozUnqbZ9qTFvcBgWHzje9GBcp6BDy7VX2SFqPWZu6Zi",
  "key4": "Wi9aPZGennVQHgwKCDfxWVidz8GjFZMqZy3GcFb7XXkrRn1tm33Z6MYP1dStB654JZjGEsh7mteeJSLm1PmuxAs",
  "key5": "3bCic4HCmiFwkytFpgKRSAkF4PZdvSA1u5RbXMCt9gm4q4fvraZL6y85hRokwbyk5mvXTExjC9dwK17ZAzPV1zL5",
  "key6": "3TXqAtSxXTvZEbNyMfTFraCUi32MeGSV1CS9H6i5BXTd5tJaS1SNWmyYcdhXhbP6rAwV1C6XNiWs6eWJGVCWkWt5",
  "key7": "2swsXG52dBSRPjoNxG1i2bD1UEumuz9cwBkdV8Y47VvupxH8eB2Ki4pm8mTJhKYvK5oeP6YEADX43QD711QyQ5C6",
  "key8": "3VzzXkZfhbWG1SCmTRSuXwuLwusmvXdQrEbnf31SBbroedfM7p5xmF64SERkop9sG1QVNaRjDnuhxYYLCajyeyzq",
  "key9": "CG7wyFtDDMLLPHqXLyQr2c5fKiWSc5TBWRc8fggDJHjobVaz89rAFPHZ1XA2Z5Udmi7KsynprdQuhisXnKFQske",
  "key10": "LUqRH7xyasd2ZLBAubFbR9xzDvucnwAEY4DBSTELof64C2gygSRRB3VPZFGSZ7dH9KoErzGk53nKVJQz4RULLpe",
  "key11": "SMZy4c7SoGr3wig5cBoVxoZVtUcy6QpoTzfKU6qh795vWV4wDqbcBAMXgyuExCt8A86wjQ7bKADdfqaduQTRLzh",
  "key12": "2gYmfnSnoQm3pAq7aqsAe6z9xUvRszLdJWPFdhr2kJfP1mbkDxjm2m5AS8gNz5GKLhe99HtjPjhVDLsM3ZhCyUXy",
  "key13": "4EzgXxmT4CoBPxjjZFZ3UzKfZo78hSgC4FcdRJcGqbUru79iSr2AFCR1YRACiP5LYWYLwE71iNCKzxbSKej8YoDK",
  "key14": "5kp9ruPvmkXd1pcN2mdyZsu2CXqAnEQUQ5eS1QhAn4SNJCKEoRfSGW8DJsJdJt2wi1hnpoZ1jPxXGq9muKTukGvJ",
  "key15": "3x9HxDfwa31iwAUeunRWp3DWvEN43eKA8aQVQeMRMNU4SRNrChDwB3S6WshJqgNq5mJJjLgWRBLZErMmFGzkj6JN",
  "key16": "3ZeGC1Gyia5dRb4L4wMAMqY6MQ1EkuGqb3H71iXMxqzfXPEuQZMECPuSgMBSAYemKerv6dfKzsyeWV9mjrBNtEru",
  "key17": "3aqiRoGjoxmBg3GGLttqatss7MzKst7LwEJs9srWzF8JYEHuNWgYy3GsFT5AV859gW56Yuhmjbk63QCtZfuprbLQ",
  "key18": "4ChVtDUYdvzVLEUqd7hevcfW5qpyS1s14Rm8MMyjdNZZHMHiU6Q7Y13wVkfcuUbdfLRMLRJd1kQFYcKZXCFzEE3T",
  "key19": "3P5PzKaamCWgwg8bn9zvzrXS1BmrFCwvsB5fSJyCquhoQMd6j4Ea3qDQDx7sjRpdhsuBJEe34SAZJXzRkxb2BXXZ",
  "key20": "5T9VGemW98Hh5RDFiw3nUNNUPui2fBgtusU3wcw8CPJHAMN8FU9zncgJZR61pdn8vZfdxpwHTRFVswRATMfZWtam",
  "key21": "3nhJc4ZowLhEEiumRACoRTVCtboRJUWiDyEmyrXgnK6tAZER2EnRLB2j77xH1jdcfEV8CHPxmqjKzEVGLFQWApEZ",
  "key22": "5tKsD3nJDZoFiondyqF2hbhuPG75CK99WNJBJAFNNtcYx1MWjVezp7sVUUXwbb4oEA5F4MSL5gYWrweFREVmewXq",
  "key23": "5WZtKL3FTrhzUkX3Y2zvRn631jMmfKemzS3ehEnehiUiMxSzk3YoNEzNnPEwPKhSRu1nHkWnUa446Uzfb2jjFmbB",
  "key24": "3SzKHxvpMt3JuYnaMbo3V329eR3b8r58FtCuhW5YGYxne9PHdqMPSGknXpqf1xh3zq9u9AFisCgSN8JEyJq5mDbf",
  "key25": "4DebdtrvauCqG6cqv5yMQzPBwnubBkLhNMjKyHGgVbe5Uy9pdXbRz8L5kmSWj3bbQRTXnMEZSRZYBcB65W75pwRV",
  "key26": "4pdjuy35vNHGRs7xUa8JRDZdptyPbWybcmi6HB8D55fVdktVV11Asw7pLgKZKcTpkBE6kdCPMKzywgw9xzgmhqAw",
  "key27": "4W3EnR16HxoyHaJmY5Ewogi51hKCeCuoLSc5FGHPfT1dqVTJarK1T1YrGweRXSZip1e2tr3sTCfaRDjJVPLEvLCC",
  "key28": "17XDrv5AJMuqDEUEU7LbY3KqfrDjivqhL4to5awEy4brkMLuMkSDJr4DsUGHH6bgQdMEPQsVLnRPS6DnxFXbYk6",
  "key29": "3Gc9GLdTWsuS9iB9DSz8p1TZmWyofdYyPjJhBGGqag3SeapycXxNXButjKSkKLPERCfeKuWgLN1x7sF7ppfF7EW7",
  "key30": "2DAYGRG8jhu6GfJAmYEr2oTtBWpeCAX4R5fBTy7AKJM6Z3aY8x3rtWqvQk7xPBdQ9KtsWBg8jgVpfGAsEceDyvEQ",
  "key31": "3AzLJX7T1TQnG1fgagpZ1geGbFYvnMnHTHit1eRAXy8KGeHPEd5K1ctFBqiW5zy5hLB6ReiQH4ihDbWZpZa6jvv7",
  "key32": "5Wxt7vn7AQ65cxn4BHCSuGWYCwmW1fTAmTcx2hodtXC4VDU1rBePi4HvPPD2nUCaTJbr9Zgm5SCNsRZX3i7HYTWe",
  "key33": "4cyUQGDmhbTC7S5JrDZFRcgEUkxnAwmDryhMxe5ppbkLzKUtHLPzA63YSVuiYLnRWatALLT1FKSnY2d2dA3FE9MU",
  "key34": "k1s5y3ggS525L8vksoSoTj6E9ZKgV5ZRpW4UYdi9MPcw5YbfiPQQqPQiJWvQZccd8ZP1zKcuXbDp9MkkN41vEZ2",
  "key35": "ShBmAYJTuknYYTMayKgfbtb1HeftcpENQTATUNT97hkeWDdRGNX1VXB6xX7367amBQp41q4kb7p2WXrJV3u6yDT",
  "key36": "2Eqv2pxpEmv2Y5tz3coTdhPsoZT5gF7A8qCg6vtmd2zboRKY1Wosh4bvsEogi1XMqjkFmkwYCeqJRSJFgeuHCtfg",
  "key37": "RVdQvSyHLLQrXXRFaFhp1zwoo5ECtxwPfxPDP8zgAPiMssP84swKTxxwcgyyZRCXQCLteYiMWYZpJKP5Me2UBSt",
  "key38": "26KDw5dTeZqv76JXD5E9wS6TTwu4ogViEVKJYCXS4LKHFovh51zGFEYJHV3ZhQGPS9jMtFjgyZmweH5nGxrYQWWz",
  "key39": "4BLcn9Z28WKjTAXmr9MQ99yCU3vPJYiP2yQK3jPMvTMu4CvvSjxbYuhb8m7NNoiHaZe6fHqyZi3Y1ZVWojCR4aJ",
  "key40": "5cXG4eKVk3wStMoVJAKh7eraHyUtWWEu7oUhsNqTuvfrZWSQPZ6aDvWxJa8ybDh8qeap3UmFYSYoVLVpoPdcPjJe",
  "key41": "4WHhqr4ZRqAxCq7NKRs8oH6tREJ1birfewS9cebgwY2kuhp2Q5h2wHUjxKZ7Ec8Rh51RSd2WzH9M1mhYBbrsnNgT",
  "key42": "461ULc1sxfj3oYPWT2cFSmZqF9wtZXGBfTA7ZLXadsPU6hUz7GNRajm1MJLXY7NyY4oN442oDBummmkYZocNE3oQ",
  "key43": "5ZEkUZAawDULRjkHx2AaW93nz7qoVq6yJTBWe8tozGqyYdsXVWd9ND2PJA8a7WMq8kGBUeL6ZKpN5Ece2vp4hpqw",
  "key44": "hwBYYJW9Gsk5rNAhn4fSNSPJv6cUZVJsQUSQ9dcefUfPmHUASntMZkVSbYDnGpEh2U33ZhQrB7giSiLTBynYMQC",
  "key45": "5U5ZnPPArMr3Z9oP2aDojPyd5n5Uziyxoe6UHPg1JuJeR4uKjQchBuo6VKedUkxBgchee61Xa15gtoikybzyeRWC",
  "key46": "3aLAdgAvKoEongQTnFUPuHnfFfZqac3Y5rACc2fTphaABGzcUEMmenohxjVucyZ4neWQbQYz8gnDBbCdeKpxD3MQ",
  "key47": "2Eh8hdEz7AoHscLf4E8wNYMKoAC1dDPS7pKT3dyq8iLNX8FQvQZMzHxLxuam8azHHEwWA2VwUYNcwJHaxkpEKXAc",
  "key48": "3u76oUYHCbToPKWAJHrWSaHJrrxfWYAszApTFXL3ytJunuDzkXp19PRAciD1fUDZt58YnU7ViGDaxeCKnXjETk9z"
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
