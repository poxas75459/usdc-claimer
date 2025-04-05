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
    "5hhmkVAv34rWsGyYGuveTo6ZbZtjwkD1hc9E7uNEWmjttAeHGMMaU7uuMhavqmvGkGHAw8FXiApMSrrHQMgoZs1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i4tF7SNPpEf3oyZc3QJ3rcRK2vCK3ZuoSzYGQnE3xuCEydYUD5ePLe6uR4rZpXz5yduqBXhSqMX3zCYiz8SsKKp",
  "key1": "5nyg4JvNYu6NtMda1MF8dRy5xVtTNm7iwnXreEoUTZ8y5yZVSUT31P4QfRN3gLTLPiwyfDNvrJsGimqyLcxLGBLx",
  "key2": "3QRPSjN7jshVQUh3ELEVKzLQvFNpgHjEtaLoBHDseYpgud4Zuk7NmFwTx8Hm5xJTrbq775LfnyBRu8jCP9P8Cb9v",
  "key3": "ahFGd1NvnCDbaon2PpYdoea2RzfsTNUTm3brPvtf2LyXCMs6ymawnzrsbgqaEqhr9s8fKe7pZuxPbsHJiHVjnDb",
  "key4": "5k93fU5XXLSH87Hy2YwgE29gvS8zqXovUJKRmG2nG1yghpN8CXdTKfnGmrhW4JXQb44Zh47QL1suqmCDuQ7Vfg2G",
  "key5": "5wayGswkH8kMiHCZo6PSCPK7DSW7SFtZFSH4m8CKhN3Xw3MhdGABqv6n2bQmbA1VferqzXqdDB9sedag81wkh7Ai",
  "key6": "3s4yF6Y8ec3tnwyyNfoujnCZpdKqRnWonfQxd2JtUFoRCqgH94gSqbyP7SKnP4k3ugYcRnyH5KmvvvSC3pRhv2DU",
  "key7": "2W2R8qWRaRWmDRyv1FWFL2UB2EsYExmmscgrsGEXybRN6ZqfYeQtchfc3qGV5Yx63J8g1mfqcAUFQ2TwyWeoK2Qe",
  "key8": "3GFh6PZCnwyTEHjSAGacLKQDtN6GhRBoU5Mf6vqk1BwYj7GY5HjKuPhcxCjLxCbr4S8QvbSkdmWnv3PQnZouKzrc",
  "key9": "4KEjBxpS2eGbKPWoewCmFCFYmUe7DrUQiWo7QStXqcisYySyfBnS8BpLwNMHuNCTdkPs1N58XbNg9BbHhEd43F4y",
  "key10": "422u1oFXe93zGeWySkePXU48mM3fz7CEsaYmkLL58ea6aacktDELYiqcfFiokjbT83MaWWr1KAPdgKFYbBsHSgK8",
  "key11": "5U2JdTmgswSArJPBY3AdF2c2hGZM5Bxsj8PG4yTtCnE4ZRFPBvj8eMjRroffdG6zqtU3Xqz898PGp8ZghfqtMeGx",
  "key12": "4chXdYHrFzxe38PwBK6c9Q84y5iudJ8DHGiMa8kQSnpD8eEbiBi18iBQEELbDLKDgeT7fSRLcR3RWyopqkX1qBYi",
  "key13": "4XCKoaSpPBgd75XD9yK6EpRCUk1bNxMig4aUs2WrAupsR8UfeALmgavJPsXb7NYCLWK7rehSuLjNgDNg2aFaReBM",
  "key14": "2voZy2DmkvR2WpQV9aptGMWMPYaqDVqWwiG3SapWRVn58zjZoEL9EBjxpJXDwTMzW9AFGZUT2cLjbemesCKbdeSq",
  "key15": "35PeNz5AjiGDFE8aTikxtghh1SSQYkqVy6J5C9Het9RrvG92FGTvhpRz3fT2Kbf7K7zUfvVfA7B4KZ7JvxyN9mZM",
  "key16": "25zge3P5iYtXxron7X8yKMt6uqELKz9Mg4guzExFmYBFxStMLUSHzqNvjJyqHHdFEy5RCRw6BirzAe4WJpRoeqax",
  "key17": "2Uof91p8eddj6jGQAJuYqSGofJHHgSxSHFMLopQycWid7Un1DA66mwT3fSnPPq7oW3B6DZHAt4bR8hcDzkoYjvQ2",
  "key18": "3pGXjVzBV1gQiycN6EKizYXwymzUVr4KV3va2ykx4iG385RF21nyRBiQTbA1vJNR2EgAXK8J1Y4YBSZXSz9ksSbm",
  "key19": "34HALHyvem5Ue8zbs5n2uGADxAQpJnNCdtcN3xZVsyMvQnVHycjnYmQN4N2PN2P2cYU3eg2gCjE8jrepCsufddhr",
  "key20": "2JSTAwStL7Py3CrtDoXW4H1fHMA19RxB6EaSKmSUdqLZ7GRK8C7kaAB3xKxypRYrbkACRUPzu74yq8LETnXc6eGc",
  "key21": "4FZtzorLA271C92sGGx6YXY1JBFCfV98uyYMgiKJoF7RpSUEkgaKE1auvDfGm5cxswXBEZBmLCYsywkrr5iuA6Q",
  "key22": "5oym473w93tGnXGBCqWJjcq4xLWRAmhsTP8PPPYe53AbmBsbwpzmcqpubwZNkVH9oUtBMrh2FdrHTi4MahdKHhLR",
  "key23": "3GTCjkxxjWmps5nGLTiMzZTSYQiVCbByw3DGmNxuhMjcJ9y4oV2RUByJ592jN74CdbyZDzseV2Zf25b2i6ivMcbr",
  "key24": "2CqFXT6Atp5PnqAPG5BubRe84BjtNJJ5gLAHTo6YWqvM87ikdX6ctTLU75QFLojfw9cJZUJWrYz1vyrrxiQfYLbt",
  "key25": "31KSaHrmeW9YzLjkqDP55ubBWssyK3YMDCyFFHDrsw25wD9HsfgKwYJ1ur7jik98A2awqkEdSjoZVX4ShXH12JeJ",
  "key26": "4wRR2oQBSLXPa6xVCZ7NB7JRiYqS61BkVvVm9GQxscefxpezgeowPNuzkJeHRhY5rpPECBApPRCe883e46ucbWV5",
  "key27": "UcfZDyEA4ZvU9r5DF2ir6UQVrssS27tLfkCmWwdCwuxxsZHXBrjYp5KzvLZpeTgdJTJkx6quTtQvtxoza4iFFzG",
  "key28": "665UF9Y3mpsvo6PkEnc3hCjC6MW6o5aQVMBSoUkSQ1Pam7MYC4KtZFfH4TcAos2bYzRsvbLsruZLTqW2mmACrgzx",
  "key29": "3jRexw7jfKtZa7hUC9MrZ4JBS3UpLKFCP2CoQKg9k3e3kAwK6EVnT9CU3GgHEappqmdBWBuETfPescthDEVZ8cXN",
  "key30": "4CJrSSG4JKiYQ5nQDh6k7Hmd4CGQRKktmafrDU7sPMGhXkFRubpWL8MAwcUp3cvJqtuWUvdjZ8xZMiNZRLCcPqq2",
  "key31": "p4kV8frPrZ1XuhxH7mJuTGrfAHuTCgYy8H3NSKv3q3X4iYQFWMepyAHRQ5vruBtjknkZWtpT1b7vsu34gxtrf8t",
  "key32": "594YbdBxLZ8vAdSjwYpfCqxnLjnccHiW8n7jscURqQE4J4j7fHhpkamYcrNWuDnfLs2LPyRPr7vRes7udmCJzHms",
  "key33": "3MTgvdWyGq9df2S7GASLVrdqjva9So5EGhgKyJwbybnkTGZYEMFwD2hmU4bMCpqJS9cKcJQ5yGNkD3RnaDkhciZg",
  "key34": "5h1ZyFWbdQuPeiBiYaByhfKWKdL3n25cMc8VE2zfKtcX2nnXGHxmc3SFpzhEUg4639pdCf6DjExK1gfx3VY721tP",
  "key35": "4n7SH7hEnoJvYc3WkA5Gyd6f79HJsMS1pu6a3uU63Xkomf5gzUyrFhmF7xdVxXmpeSkcmjv8qYCm4XnugrWEqwav",
  "key36": "5n9VzPjAEkiZNHCaTp6NJjeTGptvHWAu1myZQ5AcvkafaMSuH28bAfzcndZTyiGfBzmTDKhhdncwivanDYkMs7PJ",
  "key37": "37EdnHouKqFcCMg4LwqjGqL8zYs2PLJpfqbkkL94fDy9LbV8EDoGQXFJrcTsEmhC8gqmkU621tRzFcqPep75NMrd"
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
