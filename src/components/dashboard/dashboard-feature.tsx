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
    "4H8UBpkc1sG248vfsmujna7XDjn7E2Y9LmC6cSU6uL15bdDpyJvSsKhPVPmBPx9WcpVYWZTjHnHZALnhuikvtRqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzncE2Z3h17cKAUWNa6msvRn6d3aL5RLzZ2ZihYZNhaWrF6b8QcG1aryKCbsYi6JC1dVcpAM69trAAFQu2eTvnS",
  "key1": "2aFa6jWi5LQwLWxYnsLvZwhzAw25WwhjhTmgAXa8aYDgLhsjAXt9Th3jZdKpgfHaKpCdzDcRA4FpCgszX4ZUggWK",
  "key2": "5ufNX2Ez6hYYmxGRgR9TMa8RqtSwQp7UydGf57M63jekDSe5JNBPVbYtX2NouG2s6wjNq1zb9skV7wYhZTLt5dfM",
  "key3": "5inS7dEADh9y23TUkFUWHDj2a5umuhZCkdu7jxj1XFpiobERm7qU6QUuBeJnKvHQvpfTi99Kd5BZZBw6FwA34W1M",
  "key4": "4L4qduzAGFkk9aEPaACrUmbmMPQ1jjACp7oSozrbKzTg2TpAGryVMh2o81qAd3cDwvicMPBiWU51qhmTkFWCLCUr",
  "key5": "3bnZKdAw9pycb8BECWTw8U5VGepYw6tKM19mhAskZMAeKx1D3sUKteNoczUk1RFGY6Kv5vSBqFUbjB4khfzE12oN",
  "key6": "2DLJFzmPuSXXX6tqV4o2n7uCLu52Eu5XNzYLwjs3yoFcTGT8BCtsbSSp7F44Wv2QTfqT5HtTLo2BULLpRU49KB1L",
  "key7": "5XUpJF9yS6pe4oep1KD7Szty9W42u5TD18gdQSyw1ZuWS88vhQQjTRUg4QpHMUQU27Vtyc6yNKsikd3RQyfN9pt3",
  "key8": "4nwv43w3e3DKYeowpAgvupLMiaQsZtMnxqgbwfM597g2k8EMVhgjodeVjPWss3CHcXQM3hfk7fnoUrnMtHkEPZVV",
  "key9": "4GXgny4QooACJu2GvkRCqZcgoEoSNZ1TiWMc2mhoVm8mwcXo366G3jKY49FcuBoifbBpbuqaS9VGynxaqTDTL7rY",
  "key10": "3UUQWyiVrBy6mcTBxtMkxLCXcKHA3BYUaxjC9NnUz4Z2mTsefQEe4fLpuYNgyXUyFVGcKuaPhtya99PdEfSP9ct7",
  "key11": "3UbvJyg4gsvYApeEpLVJiMfbBD4n7PoJiP5nq9SYDhXQz4gxHVYh111FEHR2ECLc5eHwBZTf4WMU5fn22ha7ZxCN",
  "key12": "MYCsaNnbXQJYdDYxxtvrtyd1F8N6aARGfsCyyyacQNmHoRCfZqaqyAvD5mLdhi5w1E9iuZgoKCtosBhrCb4f5i2",
  "key13": "3SWScUxBi3wVCqCsNyoCWJHokehAvrPFoPW5vQiDLxdVNXaBNtvX14DTxdjuD8yoRGqRNuv1w9Ht3T9sYoWjXC56",
  "key14": "5HSXEXiaoSACH5iPV3hktRX86GBafzzH4aZh8YfuqnnXqrpjq6NK8NPiuYvv8E4wZqCC15t29y8CJitE1Ve8sxzU",
  "key15": "3KTHVaLypY7J5uG9qUFhbwtgcDPiwJaWSsirANEi1f4keDpjCfMMadxo3ws43DxFsBn3sSUaLPdViCREhc72nGia",
  "key16": "4vFnejDmvgZpCMeeidUicDZDqbusu5sN1iRXkkcJwLp9zMB899fan79iRijw5eTVD7UiZqbaWoGQEew2nzNDYZpw",
  "key17": "4AhaFCZcEKXa48h8atgdAus12JJZDySoPR8C22CAogFmJrBEbj9hdDRrsvrUqfcDEiGUsEA3qMHoPscp7phmKhQx",
  "key18": "2XdSiuxZrt9MAJRvfEsrboaoeF883QFeva3XEh6TLRK3doeSP4j9ggXqa6aCHG8VbVNkxZ7USRbN9UFXtLxdofhe",
  "key19": "51DtMrEJEAgoVhRoBff3j39yHLvncDZcTJtnoksLeVtjM6cehbuHzaobG3cTKEdx7sg6oMHyupnRgCJs2zdErsix",
  "key20": "36CcTmGs9QNoCo8fcDJt4FnoeQNASyjXnn6sU56kikCDgexDRbjCiboBzNMNRt1BzaFjANdZ8naq9QSeth6aM388",
  "key21": "3i47VKqHcRaEcA5Rv8ro2K7zH3mL9Mx4KCMszXk8nWttBwwqtT5tcQY8zJP2k12GeBJxbSupMFDTjtyuVAyxkZXJ",
  "key22": "B7t75yRPLMQKJCAHjdooc6mJHrURHRLzMNMaeZmdHDhpLeEiemNWCibYwx7vbtDwhiD9x9s1Jh81y1MQ6hsBytE",
  "key23": "swuexoEEAM4m5YT2ioLRSRk6MxUkcrBNYN9okjgr5GhSJ1xoKjvWecjrBxH1GjH2jT1wWDs5y93aabPkAr3VkFN",
  "key24": "6ujWk8JNZ1AGFt8oCAwPDzDXpzK24rM7hErkuXFqFZCKKwcoDNqiwe2XDgnW4ZhZrpnwwt7h5UkS1FXhzM3vyHS",
  "key25": "3MdpvtkBycrMCVjA2kCpaSMwvAgBbKC2uyP3EsB5RJj1biGRDmYfn6BEqoBfEE44TBzXrdk3eL3Rj24epVAtpnmp",
  "key26": "3G9x3AwJsUqnQ6etN2EQAM8u2Eg4odTChgRXSzdpj7uxR4PRH9Vbo7cLtCqVjeVSGKnv8qPj89w8yP97uprfzmCX",
  "key27": "3EnUfuxcoUjnMBSY8nXuHGH5tjiLmxwRzaWCWh3urLqF8WALAV32d3RSd6raVgPBMPukBE7HYeMkBdq5N9ysmMwj",
  "key28": "3QMxLCne5no73KbJSg6swUFJuDHRiFZYa51Zg5V2Y4YS73gU5pcSAmmE7Zaxprc7nHCgRAp9pSwMKrosHS9SiaPH",
  "key29": "5rdU8wbomejM88HxAcDv6bLjdehPa4cTYdkZoBrp7wA1cwyeUXQosjqNxHTanL6mc66NHqXvU9Q38MNCqV8Ce9FA",
  "key30": "2BTkQBSwbV2iepAk4RZVZsda1FoECpNj4iBtfCdoQjJz5buinLzaRCU27HTBq7P1MSE5NJfCH9iciMrvWuwFnqZC",
  "key31": "4jhiRDb14rvBxMrNYu3Kqp8zXh28x6Ck2MSJhMBCrMBzA4W4p7GxRRYpjAERYHk1z3r897Ng4u664vDyjpYzCwZ6"
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
