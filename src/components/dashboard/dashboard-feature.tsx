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
    "49PJwvoQshPq7wC1nW9CvtdVZSYbV4iucAQxgof7KaUBYuhYiiKdBWbm5YfmbAeJpvQJvDEwfRnwBLmxWzvJqryg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hKZhAdSFAj7fyJYeXc4n28CfodPjxq12UfXrJYoLo6FZX6YYH7kLft7abWoFhbY64WTHdS2yK5CSBHNMAnZ4vto",
  "key1": "2Mb17CUZm21hJGmgK7hZeueKiLS9hVYjPuDrD6fxLW6QEFiE3ySLqXyDYBvmFKQUMgc4zJuk6hJPQm4szeAvX6cF",
  "key2": "9z2iGGWtpF7BaN5UqZQkuhGWgHJrpG1JTeHwT9AVDX9TwqfPgpudYD5NhL4AutoMKCxe8SMBeMnBDss2qnP4HHJ",
  "key3": "5GY6sRG83LZL4ZufmscQkLFwaKNQTytequMbb9kLabX8AHUf2jMEf5CqKGZ7PMuvhpv3rHVqtbKE28b7T9pjBpfB",
  "key4": "3AEgJNxTVCV2dNayJefaPJ7gsLjo1bk3ukC9AqnNZws4ZCLr1z7DUKXTfcTXxBnzozhkCDDyyDV9kzk4wLrtAPMT",
  "key5": "3L99k5jcj7tsfCbByZ58jyCDzy9pDBfqGh63cpyrfMHG9bmi5p1wZpUmNE1x6MqMNuuFQV2BafsXfyBw6vJh6yTF",
  "key6": "2Yr43L37U4ybSg3xr13wGh7Ukv1EpRXkeLFfeN9NGpNXFConMUwnc54ybTJTmsTiws6ceLB85tCH4Bw48ePR1PnW",
  "key7": "Q13ACh228gW6dRhvu679k1p3D8ShANs1HQ3hVmJnacY7S3qDimwocH4iMNiusTfEtUPnuppXkA5x5hubZVgedub",
  "key8": "5sWiFyyAsiH2voKHzmJBCWHtyRqHq5UfbPNNCWHDDQoHfNaGkSNCPgfRRU3wQDcdvdxcc2GH6XSY6USyNYriQzWY",
  "key9": "4AFoGTmnM6JAzx9Bk1ZMsk4bqWwUCUCKCf73DJuJfM6yP7xktXGzDtZq8SQrgFs9KDF4CrhhNGKwk6SwmvYZxCVw",
  "key10": "6GKgH5H9hEWa3wbHjic9W3mnn2Sy1cYYZFY7AxKmcB4EYQPXQSmSsc31Xdq6Y2UDqCKjSv7R6r9yCFertxycBWB",
  "key11": "4ezAHjJ5FbSEnedizGqNTfUPRCoPuwkt5eSxSTwqtZsKMTa6ptoXBCdmigPH1UEWzujpevi2ZqyZ6GS64KNhKoW5",
  "key12": "2jAnLoN67YhXJJ52ND3hKs3ECZ5Xgd8q8WMrpu5W9kbktBB8Jd2ucEXtxgQ32CtoTU7fqLTS4sTFCco8MgqshjL2",
  "key13": "5x7ADTL7ZQaEJcs56pdWr6qURMmhKYyj4BdAKThoGRFnxJ54GzfXXEW7UYEP7CWEFktA82rBouwExHYYouC5mZVF",
  "key14": "3FndK8u5ETtVjdS86zsNWDexWBzBBgB2n8YjWtkFRDCjQpwWQcteguWPRWeuW8aTmgv74qYzgmH6E7i5W2c3xBjQ",
  "key15": "4aHhao9yvU1NBodbCzwESAaSafHcvjD2jX944Nz3xQ5XmcUaGLuFgScYULwsy5AZhZy9WX1BQgHgLSvwzLFFYPmz",
  "key16": "HPiUi6kvprVTmHD8Zsty48wG7UPyY5M4jvUsKnKjyNf7x4w2dfkAy99YaYroKSVxA1Nc6MkSXHmRsnhBA3XCBJw",
  "key17": "3rAxsuqps5q4bppHY4mbqvQPpJfbiFSLB1WbQH6yJkBcTk4AQNXUheiGdWvPfag4xLxCEc8PZbnQXkd5wFzBZ4BZ",
  "key18": "hGEuvkYFiqYGKJYFAhZ5vLuiUhgpBnQ577WzzB5eZAnjx58sg1xkuUy3iVv323RKoxpvzXNbyvpXSZ1FJhJTEJc",
  "key19": "57c1fqUMLwCe83e35CMFFRABrgXgAnXfGin5RzeepxJqZQwzmvrR4nppy4ZYKdr5icWSVgza3yRdJg7jRwNqKN6g",
  "key20": "3EkBpPrveqeN4VXmcgfeeMV158Guaw1EQrbNYBqV3MfdJMDBojs3sQYvbNXxsQreGASWZGSBRjM9borrawKvKhQx",
  "key21": "3cd9ut69jZirrNVpbw1TJWvivHvZBncuBzGVZ7E752qrj1ARtAtNNATvsgpQkSBU8dyYX1Nmn2nRNCXddGf4zPUQ",
  "key22": "2LJqCkRG3Ed3tmurS1bwMcDsk9DzX2pu236EVEhCdAjmWQefAmTRbm3Rm74e4cTFJfM5LkjeoWkBDGkDNbgwxh2N",
  "key23": "55X1sY3ey9H13H3zKkkP9yDSEFoEEzZEKgh2KqaQdVjeQpdBkDkbrTEoxa8q3tCP642nkf48gDKfzX3LyF6BVCC1",
  "key24": "2TidY4RiyoT5BCkJvSbkb2ttwVBUsEqzM2giogTm28mqZXjGD2XaParfi35TGeNy91LSGk9FamCA7dAJ54uZbKgB",
  "key25": "4xjqQWWFvBBD23eVRuDJEu5ZRMx6tn3JHoKTnrJsaMCRk2MYwLQpsJBMMSXvWc4j9zNCjySdCv5gyAZMtXdgNM9q",
  "key26": "67hLGPnNK6Z1iKGhsbqvbww2gjrzMiUVPB77xgTeNB6ZMDijW2gjhWC6xEqpbkVjV7u4jgYCNFfctxTN8ujhfyMU",
  "key27": "3Qna6cAK87VxD6KNQCcsY6rjbPB1Ek7UDVUg3U6e8S8XdkgksskMa2S3mSLp4mVLJyq4VkCB8qoru2Mpmh3M1TiY",
  "key28": "ZzEChB2nhnG4q7rJ5eHiA5BLmBFKMZFNPP8DTmhRrewtdVS5GqTz8an6gd9NUCD19gk3e6CNbR8WtRKrdwDiAwz",
  "key29": "2Y1JaBFDZcN1rURdQKid9tGJscPHRyfLBApyveq2H9ivkdPHJbtqtC5T9Es2L49SffbAA8rvBEKEFyYsEP9QS7pf",
  "key30": "5LCp5xEFdfTeZCQXe87X9dYuYSuPgMzy9Y7Ngu7Are4Ms1jhZ51g4Bp8U8rYUYM21rQRywHJjh5BpCgKVdwHSGMQ",
  "key31": "3LiYwigXCSzDiS9aSQLsp7wpug6Z6PMQqWYx7xoLwf4EtLgRp6uU3krhSK9cjADMNj2Djus7p1J6HoGvQtpDZkZd",
  "key32": "3mRJrb7ZrgwrCd9TVqvUUjF8hH9ay4iBiAzMpNZDgiGDTtco63pSpCKpZTNbHaPeiutm6HHRBJU6sW5reGBN3138",
  "key33": "3pq77efz9urCSYnpgBaTdTsPJc37QViYRG8bAetyKsYu1wQgEkMVtBWDzV21HHjJoVAeCakShNCpkatAubQMWENY",
  "key34": "5ipVqfWuoH3YpcQL4C2B3XswLwVjsXmdwcYsWQkprZiL9wRS7YhA8NC1oamEH66dzt4ySpAUx3nR5LP3VNAzL7yf",
  "key35": "3fEsxuLCH2QiLM6Fn9QdpGzv1iXvS2PHagZ1LQRQXJfSdLvzda3yzy9tDNn1yjcShZFv5jh933C9KFYHA9TLQ43N",
  "key36": "gpJovNUa271izcVN6YAED2Dm5dnCTYBD4yR1TrGHzp6GQVHuM5DJMCWiCHcwar12JuayDscM6vxQLnsh5vyhPqB",
  "key37": "2TWQxZ4AkLjSTCmsawaHvY1xmkgXgMFPMVaUnf4UqPQG224RxfJ9Ria9MnjvtmErgbuZgpux3AzvwSXAMutd7RKt",
  "key38": "5rUWbFQ2cSeVWoHWYeckHXDeuShCWCYGcKyAorf21iDKHZLBHyH3Wz7ZPz8Lj6SDebJqRcGq2NDcJkLqTa6XJ697",
  "key39": "vS3yYqZMXRazdnYXhjrB2QnvoDs2AFTMLC511aw31wu7tBA1jAXJ3fwRt6LMRpUkmB4KjURU9d4kqd5uipjcweb",
  "key40": "58W1WhU9sQodTH68FNWHnJY1xqmskBj4VUeonKJPBXjutq5LYQQPL7cvc1FSgJeN1VLyRXgyQbgWa1k4Pj19Puqp",
  "key41": "2DuurRzkb6LJ6yx2e1tsC43fgfVXoTm9AcbRRgCvXWTWgDL5Nd7Wdea4czJYYmHAKK9DMG1VKoH4KxwiAzbrUsBk",
  "key42": "runbiXKSkVpqciZDkQXRdFHK9uyTZM4VJmN7JSDt1M7LTH3z3QVqqJ69L1qY9YdujqNZXLpRY5dk1p9WJXmNzzP",
  "key43": "3L49Fo5CEq1rtrdhttPA7kA4g8fFe1xGvGfndHStsdwqS2JphmKZouiG9M7tNSnzbtGwPryk85YRQDEyVF15aLnG"
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
