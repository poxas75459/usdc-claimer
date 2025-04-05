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
    "3VoBqQ2NpVWsN7Yx5hvBeR6c27n7pkE7BJsKzvur53xuT6nyYpSUunFAvqt5WR4WTGP716hwLX8YfzgGgA93z4hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GNoTSfL7qP4FjZyeFsZDJ2o2dgWtpW9jvivXSp9hsSNk77529tdbKFqGbDXexDksXJaCpJik6CSR9VzVdKddARb",
  "key1": "35hJAYEnnrrosD9zNL39HTMTrLA8Cj2amiTH3juUviRmF4ExKgiPaEnHeck88XkDxRqjeroy7RmcN82AnjgyXg27",
  "key2": "33PJKWF57BpvV89PdM9sQmgqhnEp7imRtyxxUF48krUkhyrqhVh1QHWtS4KCQarxE9Jdu669T1sjvYJ5zBytWgZc",
  "key3": "5BYDVTkQUmm9u29gEkbnCBagcYXdneS85bGSZuYWt1WyNaGxHC1DviFVwGz7vFJwWwBxebDGzvuDTto7nnZs7sPy",
  "key4": "2i66eTEzDoS9x8dkeuy5Ckii6nNRR5eWDTyaPw7EA2yqofqENwnhpF5o27fF5H23hCwsh9usEps3ppMcZTW6anmn",
  "key5": "NUaSeTMjgdCjry3AK9fmtK85cwNj6ZH9o2gu2CUwjX92M1BcFDtmrbavTcpzqiGhTHfPBk5uwsjSeezJYiEvxQ8",
  "key6": "3RbBtsvrjkYU2B4mJpN4eMxh5CgouVWqdAJxxDBDjAo6MV1HF4UuqQk5eNucGGCi26AqvxWiircgKXSsE72ofoNo",
  "key7": "rqgT8CfLPYiha3vFCEyHRcb3SwbowgLq8d37sttsutrhAFFwQEuyz4qdqQzLKZBJqHkkiCK9gcFvAPe1jFbKLjR",
  "key8": "3xcF1kM8nTpcQcYQMYeVeYuxh4hZdShL93sx3k1f7tGnGi6HWgAKFnG4RGuZdvJLg7N6ZNxouUJxQnwNT87cYt2i",
  "key9": "5UFpRpPLF4Ccb9EFAgzt8jLzDxe7Xt48zycPBqpuHrFoNFkLgktycPSsc5uiRteqWJ5gwXzZeasUX2tw14pJGw4W",
  "key10": "4uXnULp5AeNnE6UUNe7mJyRqtcsjCQBb4frhbW6v37XxpRDRGyAXo28bGVUwd9MWA6iTTLDYEX8wgmyLNrETtfNK",
  "key11": "4A2MggPXfvT9rJRVakW5rct2hLykKztpBakor2G7CQyYkmJXXQ491FZ7CU32ok8s4TCXp9uqvr1ShduiPCP4N4ev",
  "key12": "2pDCuYzDfZ3iSRj1VUwKtNXCtzYtVGiHy2bkFQ2gtVTCiYrPsHQ2zHQcAbGSuY5o899GqmYMUayiN8aDL6ZvjnG8",
  "key13": "4HGF4JghxAvmSEYKja3rkqovsGyxDycmY3my9fRRQmrPJ88qA3EnRxbGdXw6w7sVEWMLrRhv3wKWVVca1DQ6HQLF",
  "key14": "4HuNMZBrxC3ZGuSqT6CQuXBMFNxMPpEAyXKyDv5CoJLwLUfjgko49G1rNvoe3uffyppxxqwy8D7nY2Y3ecoqd6sV",
  "key15": "46AcrAYFt4PV7eDhWH4aQa8CsJSaR5gJa1m2jKqmmWqWyo4nFvak6cMhy4RKc3qJqd7eNcD5VrPy2Lwo1pBamSRG",
  "key16": "ZNr2vwXheEwW7bmfdrLKeEJww3PmHa9Yk5eTb49nh7mHQvhLivxjZcLu3qECmJGPDh5PVdHJC8UAMz4isSJLW7n",
  "key17": "2vGNWmAFkcDrXYjda71BSYdvzt8ZudQJDJn6w2p7r3ak4jYM5hANzrKRqFVCYMdNnpFhJQxVEsL3ipKScKcAJvR8",
  "key18": "4ki3dDGGXbrTd4ytQDJspR9BZ59Hnhvmpt2MhNkFMDKV5rs1axf6R95dH6uCYTuYWoaYno4PsnjR5X14m6WYafkS",
  "key19": "8rXagsKqLaL6Z1mqeArmJcD9QXZhz6zc2XSTeHyhFrKWvvNK5cer2SYRxtfxrhDky7H45ZeksCnBnL13zwjnFRp",
  "key20": "2fFFEvVmkhND2MyUYZk1vxYttjMKAszpZ6BAAVXaCPw5jv69E57Kzj3GhMShoqDA9xxUjLULTpiF67JJ6GMnZXVR",
  "key21": "4jzURJXTGKia9VeCe2jM8kK3PtrZ1XU6NuqCPSbWBRhsdzyk7ubz4RSCEJL57WVvJGEF7N4jCuKPWYDGC123i736",
  "key22": "YKsSGp6uPj5z7Ty1joqmX6EXVsYpt4PX8Uo5Eom8S49Vb4xm8KCnxad4V6qvZcConY7kdB69JddRfnEk98tacfy",
  "key23": "49pDSjmC4wPUqxaGq1a5VxgNFS7boys72r9WraGBnXTvWdLrocKQbJ7htgyyupC8veD5Xm8ogRTkB3cxMeFvwxU",
  "key24": "4MhFUsyjC7ABT7qsNVBHLX8okdRmEXkzHVhopBXjSVZpgc6eAW6rTc9Fdw4r83w97f5Uy24cXeRcjCphSmgBPMrp",
  "key25": "61bkVDta75tyifZFteDPkZRZyvfoK8QNXzpaxL3xqzjYTcVAcqMYCtX1eX5L9jYAgMXyohFXuJn88owX9CuXT31H",
  "key26": "PgDq2VNBfgu7uGAvFByQg6JG5QcxQufqgKimC1Pw3Ez4Aa6J9dzJkr2YWy4FcQZ6cmQqT32Bvo5qzszAcu7CSuB",
  "key27": "4bewNBjsQg35TzXKv2DWCXiqebKFPrFxt3ui3Sywn2T6PYmf2TaAHSRzerP5fbhSC1gZdznTGFdpqg5QRZEAFVi2",
  "key28": "5bzqTVTmc6nTxftfdE7XVUA3qu2GkptrJyrc9tN6TKCkcMMhUbbxoAxg2c89a95fojvSuADGue4ZcQbUt3b2uZcc"
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
