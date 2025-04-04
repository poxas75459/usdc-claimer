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
    "3Dh2YUnHc2c6USQKSM1v8LcWixNLQbjhsbAobHtZQVZWrw24JwYyFkZwNNSxEsRQXaY44Tg26ag4h9gmvf1phUfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41iKKwxzMDWVLzmMLoXCjnU4peef6RjDuK9RBEkermoJvHrq4ke1xKCZwCyQGXPSYYhntRFJAcKsa9eCDroUiCBQ",
  "key1": "249hgcRQnCM1dsQGXxsuUCtRqPPnNvVXyB7YnzeLtKcXc25mT83ruuu3SLuRnrw5bHxTSXN3okiL4WjfpXRuWWLL",
  "key2": "5sucS2frmjZCVdR3s5PBguLu9tjgdYYqXqkt9ETJt2ewXsAjCkMAZdH9DomKyQ7eToJQqPToWekRz4QiNon7GkeE",
  "key3": "4NpTkc5WxspXtkekgxuSCvkWZKrYXUKSKbQBVgdUZ6xXWxit8HtgESQAhn7qLGzfhdCT2Ps6WmUSyqLUVBLd2XDs",
  "key4": "1YtU2WG1CqAi2WuaWUQ7C5z2Z5JtDoF1iToMNzAYnFNxp6zXrJF1dN5E8157emYWD1jB33c32pYZn72cr4xaAo9",
  "key5": "2nCqPZpuUW4yPaasM43A6JoxJad72Cv76ETfcDhakFM9Rhtp8LrhoRrQ2mNbXoszm3g7ZHMTuvvwr9CF4A7V14RC",
  "key6": "2jhevRuhAqNSACZ8xiuUgjWbDw7VFarQmhFHm1mJPUgH8u1ALdJBdbhoRQXnpVsmphhLqsP1FhxviJLgAY4HatR6",
  "key7": "5w916bYqz35T6awC7B4nL1LBNHRYfouXCo9prV441rPP9zLo9g7ECFaEZ7nvf4d1zMiPWskv457fot6ANS5Ev8Qu",
  "key8": "Rb558GZtgiPxjhTwUCnnV6zsDrNsNXCLwSd5Wr1UkT7a2kEHaw9RJivsCvJfJAxJNsaQ22xj48izzCWTVkzoCSX",
  "key9": "39t8CuxY9XYJfVSZ4j8SsWQxeontoxMLaGV9tt6Ww1SrSUvYVL4owU9v76GGeAXLi8R6HxLgr2NEnkJtSmVT4pN8",
  "key10": "3UfdETh8fAqEE4fnWGM8d9nbV1gSij1tXPoKGKUfdz92N43C2dRXA6EzfjRUxYbLionvi2YBPqTSPhHCLRkQ4uKV",
  "key11": "391etVjYxDhTPcqCuHLmc1pymCjMFkF8efAVv3Yv49mkbRzAQhxnTEJiaeMj6hHrUX9aAZ1jbage6CsUfWMVSWgf",
  "key12": "QdH5i76AVduz8AF4JQ8b9LF3QxA6GLqtVNjVkQMeMcTnW7Dn8GUCLyvXhGFm3snWWWEaJn44KFnxUEz2gifS5Yd",
  "key13": "2kypNKirupoGYrqcPPrbbSxwFYzJWgW1nwkh14N4fgEJh4CffrwN1gXzbKnbjHYHfYKeMPwevvjCb1jk1ANYbEtV",
  "key14": "55Jekh3jPs3Q75rjVdYUaYJMH2fkHSKisMj7HyCGUBwoss77DDxSfwuJHp3fytvBsr7EGfJE31Qit8JpwSgZyNt",
  "key15": "rBNeohhDNkyh3YfgsfPHEVKa8yg3Ap4JpWJcK8nMuvvqcGrg9PFj2q94rA1LjdeZqAPE83ZLUsj4CKo5ekqbYoy",
  "key16": "4X5rTTgFEgusYMGH5z1HsgbCK6uBzzWP2xrx1mnfeu33PYiWNjcvtu2YMndGYiK7Cg68TRpMRKRF5FAHCcFWdGS6",
  "key17": "4cPDfGdFEQvwgTrUpVaM6Jkkq1XgQrJiJ3W1Jw2W1xXi6r9MX1zniJcfDDHN7i9UCzxBj1HkzHH5dPMTkxf8SATX",
  "key18": "3DEgz1bk9xBkizLEqqtFwUhsXp8v4mAthPWRBDaqfugKV5EVVsowEuH9S2NbhyYDi7K1AHp3D81a5B9UJQe8NMHh",
  "key19": "52ebqX4ELqpEuGBNa3sGV6eEXsh38opwPXQxPDDqntqVdLFZm3vsR2Hewg64izDkKiSytnHwzePsX7p3JhxzM475",
  "key20": "4BS2DnetJBHKbaHR5DZfZSrLmyaCnmm1fx1MXRpDBhNCDFUqtS819M9FfETBNoZ4Gode2j8M5ahq8MBCt9i31LZw",
  "key21": "38ERYjsEN5QbUu7QToFHWN2RNpRq38guo8QgxYLC7dMsJoQrMmTDZk28Y9VSgV2XDoWgQSwapFHe5DgQatWAhnMR",
  "key22": "T5JmvHvmAdmgcoBJg66bCLPL9i1xjSC9Jkns3N6ebHXLjwenDTPyRQsiYcitbsAboGL3HtDSMNyWUToLtib292p",
  "key23": "VMbDzbjxvUUeWPcgTurMgTuW6WV6sMwLEUTCzKMsvM61NebipixDNgZyrN8XbjnJR4PSaExGTY73fEMmcgYxydJ",
  "key24": "5V5WMocc7SQb3Ajs2s9udFBu9X1XhsW616ChqvWCNhfhU3eb81dcSgNdxr2nGy6mPXYWmaRkQTLYfSJNLFnFZeTZ",
  "key25": "264qLMYrGhMM3UtoEcctQnoKgTFsvViDrABoeYbBF4egDHXp2tompe3QdXJqZAdsJH9tqzbkAkXo1A7PcHaXzqKJ",
  "key26": "nX8L8ykMVh8x1VyZEna459eS6wFw3633DSAd6u8EQX32xKffzo6xgG2NcDDxFM4ZE1znLHZaza3aCRBBTdEXemx",
  "key27": "4en37q49pPhakvESLiS6nokGbVC4zBzLxafbVxK1RZvFXi11AWafSbXLJFBG7q9bHHGsYqCGAUt6AMpgM3eiF6wU",
  "key28": "4uqavJEVQyuXUgoVFZi9MwBBZ6XGAzCWawnD7Rk8LamMcTy55jFTLLFpoeq7RptJ2Tgg7tfwBmjMkS2AGFdkM6nQ",
  "key29": "5mgCXWbNvcWdmgsQBqshu4hCEybMJfsGNaFuSJbvs5TFtvuk8ZP3ecA2kbdfB9XS6uhk3FzbraRacchZBQDP3X4f",
  "key30": "4Br39YATJHDmy9bBDTXupXzQ6jv5GUmrVsEj9qnh8XTq92AXv4N1dYLDFdFuVqCadr7oidafaZuTaQSBojQMJ5nG",
  "key31": "4hT5rTqiKWtfK9mfjtcFEbkyr3JPQXDZn2szK2CmCZrout2PpH7F8MVRkWaRnyS8GfDq4oGzx6tdNzutSPn7PY7D",
  "key32": "3MCmEKDRMN6YA6H6ke2CLR659CtkEnkSZVka32DxMKo7rQmd4AZhq51AuFr1DpAqUFt4cCZy4moWiHNHzNd3aJjU",
  "key33": "4F2hgU4oNHPUq6cBoMgHe7u12WrFTcfw6DKQVuzTnEB2MQxyBmU6BPGxWPQPTLsT33JsvwqXE6bdoE4aoHWedK8B"
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
