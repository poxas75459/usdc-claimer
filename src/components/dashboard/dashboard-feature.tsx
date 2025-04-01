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
    "63RViE97oKaENWrAedYHEBxvzxtQxbVDi4Dw4dG6LAMRTBFbU7hhBkaKtBvxxm8oA7kCbRFTbahAKLKS5icQjSXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5X1i6fsngE9Wb1eKR2z5BirpiHf3vaXt3t5PhTb1LL9uo7ssXXeKht1qtrE1xuEFKWADLKUZEqaReKvg7P4JaU",
  "key1": "sj42u3vinPWX5EbUHGGjVVsMnqa5PeTACP5ZP5nc8K5z3SPXwKzXe7AYmxRnwoLGJytNhzQhL8UGTnrvz9Kksb4",
  "key2": "V9nYLecdL58uMVHpLWyeNbeGfDm8zGyAgVEADY4YkbamZ5wPVLsf6nBQJjPndmzFvKvSwqhTpMBrgSUzujwpXXC",
  "key3": "4Lj1sgYB1yvQyQUPJqg1yHshaR7LbBVcZsH9KWaQhC4xBEhrkMtcbbSonRrTSve9zh2u6nbeKNHpdaMgqnhod7AR",
  "key4": "Qk8Vcirx32dWracZHwDmAcBHWpDMeBUUjobp1GVqmpAz2Fu6eQWAHaNK43ZPh7qVhKebTWJSNuovU3mH18RV8hs",
  "key5": "1HJz9qtCi2Uubr88FGQP5N9wnPfhyW9YdD9LWBkS6LKgrrcdkEEsVC4wkNKLJsvBcfxQ9JLFDunDLuEFEsaAexZ",
  "key6": "4H8Y3MSnf1qWrnQWgz4mRFTneXoeYnwPSdKNpGrVMQJqW9L7ow14Ry3N1ZUcPJPKKeo3ZPVpoxfEr4Joji1Zdb8G",
  "key7": "5bri3M6cYQCYpiKNWB7XUzLL5qZeYTDzBEHzu8XgdfkscAP4mKDX7UpkKsX52hrJtpVK76vC2ZvWRnqBpkAHnnAd",
  "key8": "5LW16MSXS5oWuwXc2MGdRGa3exLHiZs32UGeuC2mhPsFeMcWLHcygWuNUPqKBzLkc8HQnHnzXJMf5SzAuPapmWpm",
  "key9": "2ZerrNbgnLpME2MiGDT3NnbZadQ7HmFAZoDjGskqEhnnRijFDmei35H8W5evmgQLU23SXYB1fGW5sYW79EA9PqoT",
  "key10": "mJkGDBWgSwxzmYMKvBSu6xAPWLqXT6ddsDfu6TzDtmPaqbyEt8R6JWRPa2uaN6V1emLenE8KYSj6CGYHqzMN3bT",
  "key11": "4yfbcASh4B8KvqA97DBKaWEYKXtehMLejzBT4v5yhAbjeMKX5qZL5WpFsdACkU12C8V1n5RXnxqSpgbo1jjqwEiE",
  "key12": "5awxcFeMffbd6jy7Ww4hqMD5fRWaH7XoMJ4RQRGAX51Knhbnvk9ZK9u5bsoF2RA94MAJE7MrnHpdqihDRGDoUWM1",
  "key13": "4FCHt4dTwkmeabVMfYKxrj9SCcT95NRYDSRTqJ98ohiTuu37vzR9HQwCd7JiWmQM1V84bW5TC6dz77S1tuj71arb",
  "key14": "qgk8nmLNZGrWAbzWpgy34BjwWECmo8F5vDDEjn3mhX47N1nCmKo1eyR9ZBhSCEUW1TYpgQq7ENxah1UWhFNd6Vk",
  "key15": "65Z4JUTR7DSyysr1foBXau1GpkJWxpsM6QNeYqc1GRpd9tf5rFgNwRE6ugPiNM9hSPNDKhLuQqqxgrKfwvbxjNYB",
  "key16": "2jrx7bECcHFHieAwt41H6wt7etAhrdxpnRfc8WBY4uaZPWJYDQc1L6qoguQUuMNMKSdQeMYk4zSQFdryxjPsSEzS",
  "key17": "2CeTZyQGUURaaZUp2mjLLvxXDUHAfwLcQrogSU4Fk5AY4smpMiKCjWRhqkZVT6fWe2DHfjMu632Z1wpDncVomtLr",
  "key18": "123NMApC3QeHy4Ht69o4wTSXiJXSA5Mfc9mdKnhmkCvNK41wCnE9VVVAeG53NbP1nRfQ9yeZofJfh7eZqn9pthzw",
  "key19": "3KK1drxavo66rjmTp2BA5YCQNpXdmrJXkBwVJPGDK8RtRfZCvFcw7GuiN8AgdbDZNTbfmCSGq2eQbGqeJh7rmVhm",
  "key20": "A3fvoaLYHJ32DdnbqaSqJ4GXZ2gW1kPP69zMsWgRgiHa3cprnuok8k4TT3pzddyoFwiiq3jzHXYT1fZxHyNmoPt",
  "key21": "ca73P6MzHawHMUx2UkCwN8SKkD5Qebo252EWui5dWHAG18Eoy7mH4hSVC4EUuMsPAW7ix4Tcsb7rNeprqnEJ2tm",
  "key22": "3KpJodBaS7VtiWvwyywEcQHtsrdP7UXiK7AuQwoo7HxsMeexe79edJ3bPpY84dBSWuZtsLBU1GnxaRzA2kssBhnT",
  "key23": "2zuWF29nSFzgDBrnpmaWYPNteCTuQa23Lq3jkfQ2fkT69HYg9BkCsHFj6cDpExPk7Sxk3aFzvwiGYosv82xnoGSd",
  "key24": "2Yz4Xs1AMzt5P5dY5QEp3nSoGKq9hpusuAP2ufCGuwEoDqvFB8K5oKq8xkQPvBQgbBjvdALdiF5i4HKTcK12KY51",
  "key25": "67crZSukqfLt2SmKuGFcCJxpwcFF5WFp7ofMwDWC29piuMYDy9JGVZKn73fmkmAw5C4QonNE7U5reuGsQTcVNyqR",
  "key26": "b1SbTBomiMXbSTVqaX3nGGNsyEVZbW5XXBYDBb1PeQy6pBvXPr2RFcFfr5NjibSvRSh86Ub6JtWU8Rooxj8ddKL",
  "key27": "xjtZb8AZsXCtUcBXr7XuDi5PAWRgBeMW6GbztqoBoCZY7SyYLoZK4Z7GnwozDNLk1YHV9hEUgimUc37NfRp7T9H",
  "key28": "3us9SRreowe8uyyrQ77fXmqNPeTinMRe6xTEziAFkWFCo6HyQcQHSQf7RWcaE7NDmR5aDfu5LbApaCW5SRQMhe6N",
  "key29": "2AQ4WYuR9K31xEjr2QQbi1VtpsiUR8kbmtPKL4CQ6epGDgnN1pdxXnJxdboiUj2hSDhpA8XqPAr7tUg5wAaCVeoj",
  "key30": "4M6y5DMU7JHgsw6MwSQjWx3cg38T5g8So25xiD9cyEhuM8vir9bZfu5aXGDwc9rFNNA6Q6Liw1uyUawERhhMdhFW",
  "key31": "xVP9T8vWK4pDch4ZTN3M2unZxvgjVk7keKdWg3V7VmrqLdv1YgboEczPKgWvur8Ete2NfN8n6YqCyTDxcvqdqKj",
  "key32": "2VCW893CzTSXeJJeHM8yNC7XaxQcoBKFe1jb8295yux1MyuNJ4HPyYcsteBkgWhmqS4ED43V8bKPU68tqCm3UP8y",
  "key33": "3dvKHZ8Yc49pt13gWjyCvViSFhtjjhvZGnbJC9JCm2b2GUNY1JgkydE5k3h6R7SfMscm35gsNKFKzG5n9zYsfNRt",
  "key34": "3Wxj3X5NTqKbGFGyzGtoVhnWnaryak37CeKfajR9z12knRmHj7Qt8F55UBNrQgnneQn32Aw8QiPmbgUzHJRNaSNQ",
  "key35": "3Bsvw3n5ZuB1Qaqc58DpgZhVX5K6WXrRZLo1gr2d21MxsLgaahm5Zf5oZTRcPfgC4ZmgRSBxbvdAzJdd26spscSj",
  "key36": "5Vm4JbXzo6VYoFgcfNHY2U1CK3t9Ju8jEmnLEKjg69HG7LHDYBxyv9ZjV5HZUSWUfGr5sBxASfcVHJhBgTBeaXZJ",
  "key37": "2icvGrw8DDgCjECsnveK9pkS1aQH9EyevZiXwSXXqxnY35QKB4ZDpNKTA9HQku4bGbado7UfUZnQLhk1cdKBexCP",
  "key38": "4tbgNchncbH8W1T1kCiZ3KauiAGQgFRvoKG9e1pnucg7Er9fMF6edEPGRQa5Fxpa2zxMK4FjKfusghM6Qyz31wWN",
  "key39": "4CwrcPhqkEGgf2QZMZMR1UJmxCZrytBvPutCEneheT2cNo9oHb8YxwTa3jrmFaEa5odffiitHZajaiuu5gwKGGuB",
  "key40": "4kasoKiowF7DgFTaU3MMB2G5swGgPtt4Ti7bTh6LFaYq2oNKDfuEb9NpyfjFnLBsALi14jwucjf1Ze3bMGu3mMNa",
  "key41": "a2apXtdLeJVti3Rq4nyD62L9tnfXUtSQVVFKKiPnkLqjDEHNwrKskGzenMZESRaJtTAbq3QcTsufgWHoKkjvVUr",
  "key42": "4xKH1Lc4kzHayuZY5N93e94NaCtFZ7bALPMrR3PHajYcwGo3sHhB5F5xyUhBNSeroGk46htkM6p6345E9iFKi4GM",
  "key43": "3xccqPyeNhvgJZGrQP48foAyydDVxGRX6LQFXeq2ZBhVHEbz5G8GJLEvdCAMdxHTK4MfkRZaqjA48W7n81toBAa6",
  "key44": "SXVUYRPXaTCQJaiN3KoYNThe63sDVgDeEYpubzZMWhDUAaDcYeXuG2omCRyFkS7wZEuLcow5VjTzKgKuwtwiMK3",
  "key45": "D8DusM9sEWEcfrqrYvR46ATFtAwEeuhWAg6h7rmiu4BFrJdFqNqEwqauFhG8GZoLrUtfMerceR3t2t1AJTVAR7h",
  "key46": "3d3XURDbVRwHwzGyAmbYnthzFzRhdiV8re2SKhYyV14khqWZZs2VCTiDSci4pncnu5MLRrwb2XBonWaAM59Diny9",
  "key47": "2fbsQH7M8sSRuBd5koTxL53Zu5GEQC5yCmnzQktAAk1wcJowtxNtGZnzzYQczHHur3apDWsFh664hQWttFk1CCJg",
  "key48": "2XeFBpSZrPj96frFm367ZND1XEifUv4nuMnXZn2FK7kucyjP5yNj8FLSJSSPLE71AsxgGm79grUQMhJM5JATNmbb",
  "key49": "5fdimbYTTy9n9XJ2Y1q2EHic1nq8472Bkj9BYUGXytqhwjePxzh9yhyKFv2N1hZYA15Vc8VgZGZpr6sfaBvU2WoY"
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
