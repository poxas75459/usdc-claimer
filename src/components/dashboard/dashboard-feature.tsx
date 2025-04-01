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
    "5FPMWtmuv5yyqtVhCV1kuXiAHe1rQgN9FUkqNAdM21ysozmiNrdTcYLSMrjnXFHGNfvdrZm4EasJVirYkeKFvAiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MSravU7x6MiYU8WdexoLWrCuuGNnqpubgcsj5q854Q1byYL4SaQ3BFc1Qfo5RD4WS6qs5RsxUrsSfcQSZyA5xoq",
  "key1": "3LrNnS7JoeTYtraynTHXmCUUJKwhAzynCN7nBsvuUgGzawiutu1pXMGLhb7RTGLhSkspV24D91so211vtoitJGjD",
  "key2": "kfaw25NQnrFo1GtyXsc3A6sXZKKMnP8smQgEhAxg45cfVaWcZDF96vWE2G5hJVif7sKoBZzLtS2Bpp8bYVr538t",
  "key3": "5uzjj1dhmwbGRsKRCTcXv212nx86DafL1iycgBuCvopWCZVfu8WuSq49pw584kFdebF2SmfiGAGZMWtzVQ6CdCUN",
  "key4": "3hRwqqigyV4ubNLP8bXpLG5MvHFy4H1aBGT6s6Dwuu4RCP9yGCuSR7jktdT6WLB1W5LSmx9Z3QDjWn5uYCkvXyae",
  "key5": "2uizmfnoaw62gxn7PMGo2Y98vAwmME26AQw2KmRFZZnWLLog1EaH4UieKgjKLp3CpeFP6jtRmkUoVfUkbVdbPGZk",
  "key6": "3Zp4dgn8o8DeGAfVqLcVsT56EkxA9q55ZCLH6jmg2vQcqeqHhMVeBuBTG3LrnKW2rGpE3EBDGwSeB8isM8ikKq1q",
  "key7": "4atDFymq7HGVyxnwPErtowJxrWzg8XQo7vNmYnCjEaTjtJr9Aa8MphUdcSMWRNFB8Sje9kNgUvAGCMwZN9PamCRN",
  "key8": "4eGBSZe4zESUqbAwLnJtJbcTBqbzE8ebU3eQdQ9DTYySriJ7NksKar4YHvZHWUV4DMPCNfCb2cGfgmsoi3sojwEs",
  "key9": "5jzXnUXDTEx9HAi4wBBegVTFaUBtsTYYYShFTaGP6BibotACHnbmqvK8vXCqAzYENZfUQ5fSUocsrrxnUNdETMaS",
  "key10": "295c7RqMbMhi7o8dc1hEFgdCnBEgHCESHSyKEd4HcYKEdBMRMGvSzwbChTtvStTJx8pBqHzMo9bDNPoVDhHtPL5T",
  "key11": "4HKrPrerkD9NjrBMTRLVcB2ZeJrz1hK4rRGCorEhL1hG5C8KXouHKA7QCPk1pe4knkwQyG9ZpyeDwydswvz2UJ3w",
  "key12": "3AA7avsLA5bLCaJidYDCVWFzxEFGyeJPUf2fvMQEwXAegbDiJ87Nab1jnPMLdsXRRzVgQjLKSRrXNp6TmMizpCPr",
  "key13": "N8DcSdMrhjWgdD3WZUtc6Au2uoThEAq5QRpKHGDwEerk8jLknDDM64YcB5HocRTtqFrfo6BTF2tUAMTTQgWBfgR",
  "key14": "4hUEu6DqANK54q3YQ5qg2Ueiw28CSuyhWKSQ7hqrVV3qXddiZzxdQoRYKDgdMReDVt2PUGo8GjGyGo2VXzpWHzHq",
  "key15": "38AwExXyLQ5BTpyhsKCebowfQqFZHK4M9m8WufXj9CFuD1XEqsiDxWp9RdbExPFTJ48GqhDFvAp9W7YJvx47SKf",
  "key16": "2EusnTJ9oMbKtmw6XHpKyZ4f1ubDK2gVZPZzfGngejeHqgjCEff4BCFeibLbduCLwzRT9YCjBvyTxKed1B3ttPfF",
  "key17": "2Lz1ybFhg32ATvcXoZB6qfViTsQjuV37MAKuqBC9MsZyxUxztaUTWaL7Y9eadZaY8F3jrGoXTR4n6Dyqibk3Pv7i",
  "key18": "5XjojR2TkUoVxGCb8ZVqs1VvN7jUbZUYtqgMqDB5vxcdviDH9pTD4pVtxMy4qbxmaxY2gjPgkpMT29mKGDGQtSqb",
  "key19": "5bSffbEJBNZYA2kMwFeeR8sDB1iSttsv4HMZsnojh2Eu112DbeQekLiByUYGBqqqt3TxnYEWxsqejayUdz6CCgR8",
  "key20": "hbAqwoTmMLE8iqm17qWVyANvzpbo5VBgmk6MJkEZyxdKt5fDC8GYBdtoUHfQNArURuWNBkTmB2T5JLcsqBnRg8m",
  "key21": "4EuER4Wn8tLTHfvCs7VhvwgrhnEfuAZw999bKK7NgcQ41dfqRx6DHoHVPrcSbWtbUa9ASbbuCntG8uauSuWvB7sc",
  "key22": "2MtZm46a61aJMk2UbBsSzgor8k2gtjG9ArvnS2mAo9YAWZCgRBjN2StFRAsQNB2YSWqRSAxpnvFyheVXCCwuNJAn",
  "key23": "3jcUZvNgzsMeQrP4AMzH7YgxbDUwK5jRrP35b247W8DCz5NGkMwzVefdk5u7BaoDeGbAhNgAzT75KZjhxtYm4qZH",
  "key24": "2EK8BEuueiCwa9x9dnbtmjZc2tL6n6PByP8kQHsFT4hfoMBFqEHdvVArQg7usMMLLqswHKm2prXWAQkrTW7fMaB5",
  "key25": "QmJ2iqaSn9XKdP4VZgnKKcsvhG3cLU8esx5BrcDDj5Z1Q5NjLmMnicz153u3Fbje1cTubfMvcaEko6TQNEmdaqE",
  "key26": "AXmmDWPhaXyyRCKrL5NsV6EWLbxHNe9CQBcdgpj8u4DJBeNZehfTjejBsvFDwmxcR2eTkEAMenjLRTP79JqnoZA",
  "key27": "5V8oDA3UEHLLXndnMX1prdis2AjZwJ6wWzNmtnk6edpwQ2d37ySuHCFc7KPrFoFTKBHBy3arAo7ATuBhs4LhPVWy",
  "key28": "2ni8ZqmGU3CcDZb7BQ1YiQ3DHmVH8rkR4EW1eiPk2ezgqBDoFv8ASeEpV5oADVav36LhZL7C5EBmZgr3QUhBJjzG",
  "key29": "2GqTjNoB7apT5HCepUKE3BkFZT53L8QhjsBjkM8Wcv8WVWn64hBAvN26N9PKbi3Eva8RFA75Ymgh22L3dHQpSpme",
  "key30": "65W8haVSpLb3cLiGi5WaTPGvPn3JEqUwHDVQmjnZaZWTo4i63WXUp2rvH4CSThw37CXs6CMLzX9LJ6vAFJT1sn79",
  "key31": "4nB8chZ5CrMvMML8HnfQcVNzHXGiq9cwwh2k88JVgBqfezf2VSTpApbUtp23PDcgCHu53ZGAsFiSTUkAHU9QAgJn",
  "key32": "3zQP4xpPbDZ9uAtCBxbjLmPwruGipnqgJUdAVaS5ud3qNmRqYByN9sTg635jVH7HFoMCpq49KHYtT3YP2YrjBRvz",
  "key33": "hWv95bdU7t7ogs9cYnVbfmxKhSyaJtHKDANFTAtoHwBQbZFAZsmKGyADqki9L6zRwjgETEZetK9xjXbbKAkR7jS",
  "key34": "w1PKoR4VXgbBm9NdnTY96RQbBTKqQ7qdNEq2BKoWZSzzNHkz1WAArtvyCnuTLEefWQindw3axbbVw3T1vod7x4P",
  "key35": "7ymupe9xoZHp4YBjoDmzbUSTZKCrRs3TnAio22ovixyiJJk1tY2jH9PJ8LDRwU9ef138DxzLTfo7dU6z1w7KArV",
  "key36": "2WzXp7MWSLHX4ZR9HpGi8Y64YokhnJhMY1A1NP6L1KToUNfYykdT6avMzooNyymTjYDc8v47ybYy8gM4gPpeMhVd",
  "key37": "jweUhmWrnfhrEiM25ATbCxJR3VF5tANPWwxL2BZ6YATofoL3QDwLMZLpRUdRtaDyY4C8hh68H4EteUsaJ9hUPDG"
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
