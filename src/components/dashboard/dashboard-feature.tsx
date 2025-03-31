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
    "4NajsYFQgKnJ35NfcuE5XGGYeZtS4NqqaqqZ6tZA4iFAwpzmZH8bvjKKYUVnxbozVvPyhpPTZKmxAzfCmdBz7J2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23nq3A5LvxJAV1gESeo5f1caENykV8G3MrLaTVrVEvJHc8sRUASdEFwPYEUrq4UJ1VewusJ7ZXXn8LAw5Nt4mhzY",
  "key1": "3rZDVCEf38NKHZwWMznbUxDBAWnnzRRR4ox4drLcJyEdULvLxCKjy1WQbAP36eT5XL1EvBA5Pyi7Gj9bwMHx9cEW",
  "key2": "3FQ4Ke4pvigHHsq88z87hih5t8M6z86W4BQsLM5kc7a2VdGLoK9tvPDxHqHJDbuFYSPRX6BiQmmRpisQhEgJ61PH",
  "key3": "3fMRHgXqqxh81eQheMZ9dSmg8hCgst4kzAbENbAoNaGgTpyJtRPXoNJbNLwbWu7DgiikiaV8X3RTDNCw36UoQtaS",
  "key4": "5ouA4Tag9suzNv2aRNrUcXuNQeSXKczV7CjDmeyJBEAQq39d2oamYMmiNHWrFkbR94HVJtSuu5TxuDHp4Laj58ao",
  "key5": "38S3j7rgZxi4qwPy1A2niheVQqmNy353pKyyWYGdCttZWLxq5jJQjMGbL8VhNFpmrtogk5Qz1KRMs4hoEhzwQU5k",
  "key6": "3bb7HxujAmpvQkAcwV6qSPAEFXurF6bwveTJCPASoFYj35c9C8TY7kn6kzk6zaVVBbcFCvHeM5JCYf9m437bneLa",
  "key7": "3XskUQwokt4ofmRQ7jGuCGGrtmuhRbwRUGij9bamgwga2ZKnLeJcWKJiyvBAgq4jAzv2cBm4mGNF4hPRZLgb1xKB",
  "key8": "4MfHYuhrBN91uth5mcqgDyHzUdcRN8ywRNQF34mgh3wWZxhXPDwFAyMZxVLcGDAURWcoPT5zGRpSgnMC89iLUt63",
  "key9": "fsUpQAB31TNp3fg58q2Kp23Zpfcrtf3qyEqY7FtwjAvtstXxBnfySEqHV7N5KEZHwQiepK2SVcRHLGdjzKd3xzk",
  "key10": "53rU5WDYVzPWgpeJ2mCjS6c6Gyfpa8k98UAQ9c9wJhvcJeyihJj4fGegXHoDjW7HLhUKE2h2bPhRQYvA6N4Vk128",
  "key11": "4euL3HnVJCzMW9Q6wwEf1PX2y5Wj6mRSU8fKjqs7F4kXzYxN2gwVmjTgMzW5rq1BsarDEK1ce4WscZubvE1mKPYR",
  "key12": "3u9SyXsggpcCrLJStVAvENMW46EsY6ZGyCumxjmAVTybU4A5XHQ48xygV7gTCNTrrdF8KqKxhxqNKbENzHD6aZnq",
  "key13": "3y3Wr1P27amw7YH9C9x7Xk6i2neBiYpyQN53PqXKKwrCt9XfvarKtRYD6fzwHrxcYjvJSQiL3XB3FpmQRau6ro9",
  "key14": "375TsNLw1Wt6wVuPFBoFbTcGwsQzzK9JqAZpyEAJcBihKybHo76unAXX8odbMMAz7UCtCBJ2eaL7EXv9JSXXiwuv",
  "key15": "BK1XcRF4yQC3eJ4hmqmbgmVVUuf53nbKzq9EADQfFUL3rUePG4vf6pNr5qq2Wb3H6kpGLcL6dkQ49z4uskHEyJo",
  "key16": "3oTHswyvocFarjUpBkrY2waquy8uyRKL2wbfa1tR5tYbvM4PL8qm2zrHXEF6LRksPmxd37aAr3B16JYKQYqB8mSt",
  "key17": "4EKYwrTYytHRwAvR3iqYBEjB4tDBYZUSHzchEhPiseNmiUWzSSiVCK9uQLzmM9VwxkjD6Dfq5wG4AiLdWQgvpFbU",
  "key18": "5stMNpkYky2NQF6zGjbGAjD5Ad6q6CaByCmwDxwiQnQcU9Wdr6mDVwgSSxKBc2Qb9bbQAVkQrTVP6i1eMqgbgg3z",
  "key19": "2FNBvJbxwfhN54JapHHZbRZbjs31RsQi3LZn6eT5Vs8wkKPo795vgmv6orNfWv4jWyhFY73L4CoX6uQ7ifRBnpqk",
  "key20": "5AdHPmvnP6L4z89fBLVRdZjCYmRsbZKx918kKgMiYhVUHcMpRApYj3SH2bcKgxfJt2eLpKs9jfk3NDP2X34VurSE",
  "key21": "53xryLGKqoUcqnz3FpPLKBoMGQ6oFSkhmh51fJiPSM35UajQXNSPEq5NMskW8pWcxozW7CReWmFJi33gYG3kBTzr",
  "key22": "28xLWRYzjooNc3JLeQMVrpoEBV9pgoFHExEbTwUvNcgVdJA1CxVF9v2ySsdptKKHYGxfuvKhFnKuwLYJVCLnzcgc",
  "key23": "4ruWgkbko4EjU1zo8t9hXstEbcc7WuN5YvaK3hDLhM7iZQbdmwSEG4avL2xeLQWPUgfDmL6hr83Atuqz2sZJsK3Z",
  "key24": "36mRd91V1edbNzccbGbGoueQQ9fZBpGGHgoSGfhuzEEBT8RWamvhq5erE9vfFn2yTH5C8En1TMphWCwcHbpRhM5w",
  "key25": "5SAdNpqZZojQCKvrzLrxWcSRaAjG9GggDkUsdKMj3yQ8LJ7T89xZtrVWqz3ngJF5Y4FUzdFXNPj7QPCxkqAbDzQm",
  "key26": "Sg18BeXaCF7UVLUy9WafWNmUngTkJEtq2LgnXfvwxrn1TCH2FSyKqcPFHLUWfKv1M1BAf4DSptVHUyTiwhHHpLD",
  "key27": "2rRv74k8PUt9HGpSv91D8b65bXUQVfZe82Siz49GAhTvGQ78jmf6M5d6DWRJvALMBRPuDT14SbXcV1hMicq3jCaF",
  "key28": "41TZoQZyuTQyB9eAqWFPrAYicA9cJb7tYJqSXB2mQ1SXQpsV5hEGRFaRUvZktv55uT72fHY3XCDUUSdayesSw8o6",
  "key29": "2kNZ6xkSfmdNJfik1pdq1Y8jgkRyZUYA94u8tjCVVEDVXndauGBsGFZYzKirFzSvK8USubjGKyxhdDZMf4Qntbrn",
  "key30": "3yGdwnD3MEroiStJK5RmfBdWgFiBhejgJBMeP5DBCk7fe32dwVdoHywb1c168ugFw3Wd3CvZnT2HVwLFs7vqxEPz",
  "key31": "2KeUA97fRYzsFiN5EagXiYZWT1Jouh6LcBK5YpbYyFGaRdrDhmn77JpSrwh4UhcNd1sdgbKDZWK3EStrjY2hLsAL"
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
