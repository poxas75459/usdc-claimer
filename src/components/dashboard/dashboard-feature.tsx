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
    "4AEpATec3eDGoQDs1F5P2QZ3sxsPiBRiKuCnVuxp4izzs55YQUifwDJX9F7LkBuEu1srLTm44sAcx7PS9cdN5no2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hFioYnVqncMJqpcbKjyr3RzFcsGfL23kggk2XrRzNCKeRvnwW7a1RYXfVKjpnDmKM1VWUeTjqMqejCcD53NHGFx",
  "key1": "2bkeLb7giN5hoZpfsR3jRU4UM29nJHue4YYYKgUtNE3R1xA2KJxE7825HWq9gy6poZX81TLCRYEFjzmQbuxFMeYv",
  "key2": "4uqLq5i4ytnwLzxzKKgKnoyL8NkSqkUvTNPbdZCtf9JPd7gLXYbSKZpkcx7pFfsRJhi2WhNecN4Xr1YcDedV1BBr",
  "key3": "3LbwyE1JcZWyph4WHFbghoezuE4x38xiCF1Gqh2RZSteAmwsTzZCW4WjsHvCyuqgeBwtZWG2MohUkerz49Av9Na8",
  "key4": "26iwY3t53QeGWGxrhbvYXVuH1WxTanRncvFZ8nikmVTVQc2STRNiv6UAgWEUQzRiufhjErtugKrMW31GCY4bWGco",
  "key5": "2gszroPGdfrXkPsiFdy2V7Vp43BFSuL2b7AqbBHe7nntruQjFww3kstPYEPHigoTnZwEpv8hSW5cySDgbtc2NwXk",
  "key6": "2v1mquE2HF6WnNRQKG6G5CvFuvz52wPUi9YVLBwMYiZZzyzpU4rfGgRJNf8ThaTWZWvsK6Fri9gJ4mQFgk6d7Qzo",
  "key7": "jEowcKHujveDFePJaZ3AeoAsczZCQ4eRupdW2MqbKonUh8kVpNso4VY1RCVwkZu25JnZevXAaYqCXVyvWMXvArj",
  "key8": "34X2i5x5Tf295BS8pRhdcKBe1w5F7MXon52wgXraCJQ2efebW3SeEepTN5syt6rpaXoyrXHhT6r6dNzK5BnswXiC",
  "key9": "DjKUS2YzzaqstGtpQfcaxmDCfrManQQXuU7QwQEeeqyDgFYzdQcKoFSaCoWngTXktMqUQQxzLWQRGvhiVDcjQMN",
  "key10": "NWJbws41rP4Pe1UG9hpQgHKfp8s2o9megLFZXsYGeWVZYZzkxPrqXnYN8ao7oPfi3iEZ6A2uj6A6RUQRTisfUJT",
  "key11": "pf2dgULAgkkj83aubrrSjrewDJGK37knmHRMNnaHnwnSehJfhoWjBKsYsK1Akk91c86YmtoPZMA6dUvkbUn1ZWL",
  "key12": "3WBAKkieoUDktCQ42o6zZRNBY6NnUu6hSKkNdkSvCUTprbbEZaRvbNB332YTGVkgsy3TNcoX7wz3M7M6MM71iRQB",
  "key13": "3Xi7GzjmYxR9K693ssr4yYHWiE6HW8kTd5hjnnotnhbHrSnrTcRxXGvdHANrBDRPP77S9BbDFn2df9PBHQVa9rTG",
  "key14": "2icCKYeMqMmJZ5btLEqdwxo9Taj1iLDR2Pss2uwNUR92xAbTu47PkMa34zHBc9ENFJ28qmA6e4H5zQeYN5e79n9C",
  "key15": "3raZghVRmw9da8QmK5pcjfvf7znV6bsyFCKH6WYWMXinh9Pp1VSfU25hSnLouyBwFTrW7563Y3ym3fptB7yZ4zjn",
  "key16": "43FufzWzx1hYnNWzo3EZ3nLhrBsa5Er6FowPSSTo4CMHR5ufWdts4JsnhPcfMruS66zEaE17Jt7neETWH74FJtZG",
  "key17": "4naEYkj31vZwRmoyC99DiqgvVqMJTPDzMaiy14nLjhwoAmeK8HioX4QXHc9k1oejJbHtZ3LYjunFneH58kX1FenR",
  "key18": "PfK2jAsrc117Jc5NQ9bjSSVSxqcwYZD1gjNP8BeWuk3Dpjxp84MZADK3bZ4sG8gZUER3fPPwQYdLAwqfr7WehhM",
  "key19": "5k1sGBToJ8w9QF6HWWGmbdmb1AUkahDHTz4gXL3i2tLFxLwMQsBKoM48mKtimxqsyU5oUHu5BPi8BjZspkoiFGHX",
  "key20": "2LPPC1rHzeZdrAmGS8zGkaopWsVC8qzA8jS1Lh8XpbgXsH8zfXJUFpMoELzka2TiabB2i5om1JpvgqiTEknqZtDu",
  "key21": "39kWxBhZrsGveF3KnB7KjzHviK2nRXkbGQx7JEQ3vaHkCN16E3oEorkXwWqrUYWpBoey4PMnGFhTj3jLaehFzGZm",
  "key22": "5XiYVVVW5TUDM85vhhLMvdUNt2en7yhTgNJtQq5x4EKKUd6E5vwLZ9ARM1uQuyvbbqZazKVACT1iuwmAT5ec5amG",
  "key23": "54G4prETi7fWdRaHcRfGXiJksh776ihYyDKtzDyERWp2b55M6MzM6yiHDW1eozY39gBNJMBsQ6VgUwDdzW9MiRTG",
  "key24": "2NTHmbXab2uKYzs5z9s817NxM9Vyk3kDkQsAQJiiE2PQgWHkBUvk3vBWoas7GmQKEMRHj7keAx7HCPaoWTn7No1R",
  "key25": "4dFsa6u54m4KZFq3wqcNWSFUZrawvSrN7hVjUjfS46gZB24W57cwWbBRtY2C62qdKLZQauXWTzAgxXA1ySPwHjBv",
  "key26": "27U1tSzskSRE98CFCsu5axEK3SfqaqpZamvJoT1FV3bvGq66uKoeas4r2LGBqoTzK1ppZb4qryhaVMW4t9TAxoNr",
  "key27": "361WPwRPG6NkhFhMVSsekxQNBA9uV6412QguCDLkrpxNDFDGutqr4sLAuNw3W52xJf9yHmgH7gs33QXXGJgP63kT",
  "key28": "evBGg4vCgxEQNxF4mYaCGepAuxKtacwMsdohdviku3yCL4tsWdX9gKv5T15TsMfBQXc5EdVGajZZXEhf4PKbv5P",
  "key29": "37AiXaBv8YM6LPHPo1db4KCCu7QGafu8CwDENE4XqNjYLVZaSwdw4Qx8iRsoDUVhzCrXidFyp7ucrh42WUg4C42J",
  "key30": "2iXKQT6MfvSFGxB67nw6KTuMsU2K27MZhv87h8AShe8msv8kR2syiWdJqQFnPvsKteUokNAXa5rKKPBnShsg4h4b",
  "key31": "9d52ft1CJ9KrimxAps7cQeUPnPnrRHuG7PkaaCHzT49DQt44HBfaPywJxqeBUrSYbRHc8sQzs4h9S66V7JDu2VK",
  "key32": "66VokZ3qft8onGhNPrtKvwceKVDMvxujdW8L84Fgqo1VUb26ob8BKBn8WTDoQVsRR2zFJZ6xWzAXEKHFZUqFjWWR",
  "key33": "36F3QBg9DCL9GUjopdEhr9cS85h8KeSn7mNT7RrvTrfcu7sp8r3ReKyuM3zjk7rUmanz82y6b4j4crKruhJhkFNR",
  "key34": "3nJdHRnVRmBU2Kj9td45tdXqLMxLCHumQ6MtRZYWi2XFFWQTK39K2vUWo9qJQRRgKTBgybeXuMyZ85Sw4x2qJGMb",
  "key35": "3yqYDGx4VooLZEzebSRFSDVDJsjRP5xvwodGZmLZ34m8jmEYRXpA2NbfDeCUSpBhLZZNFG44XjYUDMFdFtACceMN",
  "key36": "4LTfpg9KWNwpMMSz9RVUGKKeDYvHXee8igQHtJkdvJcQGyVz58NgeggeX558b7yxRv8cudeKnHkXRcxThgwrKKw2",
  "key37": "5h654XoxZoqxLx6TXQkQsEL4airaNkLXP5YtFrLRLCFBAJjNtW8JR3cbhphfWowcB8RTfQqSNBP6PvniQyYCtQZF",
  "key38": "2CaKrUFjk4V2mzwRW4ADpzmhtD8g7EoprX8oN7KW4ZGoaCxz93YzR2KRb6GTmqeniY4EMbWeU86FfPQQGAp2ubrZ"
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
