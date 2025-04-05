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
    "4RfbnztL2yfmTfTZudFiXQu6waQAZhF7SFs9GS9UTKp9QbrGpBzTFfez9iyiwM2YkJEJpgSmkX6Kd2iRJLck2EH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V1Z7ntSGRRdWmAWbhK5mQ2QXquB7n97dZrEv7zw9RnE7T8sMGtD535jjyq3GZKbQUuRwsX5suVcFU9pXJKrmrmG",
  "key1": "sFJyH5BA51wW523gFdecWLJ2Lb7C4ETEHmWUrXRDRpbpehEpCLTJsnpJXfFVDHp7t76nGNCZ7v6SquSGGopK4y7",
  "key2": "5JDGstWrCnLxTYu3HHGU8eTmkN36xPSwo6h2qs1BPEsqNN9iVKWff1fXF3ngbUqTho94ttu2jWG2mZWLFaWTm7mE",
  "key3": "3KwqDeo67oLdwSMz2P9oftCxrJLpsNSU6ffZyUUgMqtUE9QDJHDDxrnb3iKopYmtVKcEg8Mvu5pa8catiw8QxXPb",
  "key4": "7jZ32e9dvqehdgmDpuKDh153nakYG7EekqESipobnVVXGJNr7AwRgn93XjRSzmez2DbZw4wVfpiLxALLDdNPrPa",
  "key5": "5b4UNp4BxzY6JjseCaeLf4vjxqULTZRvDZomDFH7da8PzuwGUets622sCoNpCMc88DfzVds8rMneJKZMNXAuwbSW",
  "key6": "3EUohZ15xXZBvX7wS7kgtbjj1jaAyAMSntUKKXeaCknHGnwxfySnTwk9cMVexc8RYyh6Ri27dFt7e3wQdpTnb6pc",
  "key7": "2tcEFMMit1V3SjutPwJzmnJhNSFrpE56Gf7V6AhZPngRqrdvuHUAZPujDbPH39RS8BUabs1X3byN7cQC4ve1SXxQ",
  "key8": "XkJM2Dc3pURovs1HidR5wZsLW1Gd8RvzhU6GVo74wHwrc3H5gxKMLRj3tGdS7E2u2f6X8eVmzKCpyzAm3ENLW6u",
  "key9": "5CxL9CT6M4ZwFRb2houkkeQT32qPqchbiYRchE7HEp1bYJiQvjPmebBytveyWKtMJZn9crnznPg7NQEkCZQGAaC2",
  "key10": "3LcyvMXsRtEsWwcJfaXiqmpw4WwbweZESvzhGmiu5Ae3qUJ1ixYx6t9DmRUoXTgpH7kFUvJv952UXC3tngvE4Rj7",
  "key11": "3HzuowSagmTof7QGgYVvYAxCiuQ5LthMNenZH55i6BgEisrqb3XXeSgb9qWYFVJduQFYaop2ob9VKuW8hfeMg252",
  "key12": "3x8XvfoeGp8xLheeqMyKvWMgdSSv4sqo85YNPQ9X8MTVLBthqFatK25awu5G2FLtDgMopiatZURNBjt3hMANWUMm",
  "key13": "38tECDvv3r4nnmX44zoXyscoPfRR5xskeLN1jbJkLFPFuGVapww2y7CiwDt6qxq4nTf3zEegir7wug7y1u4gL1UF",
  "key14": "4KCYntoCVjNfSXpXy2uqdkhtU4JeWhVZcYuxDpDcDt81D3EYpc76VdJsQmgNnWCSe5QTJXxve3pAHfrwJ7vGEtJ1",
  "key15": "2ZbxZx5fRKaVR9GJspAQoZohU6WV9YUb8juQserAYszKZDKBTDrZN92XXzRhXiXSmQhZswz53sw3ehwkLYUoWsjA",
  "key16": "4sKdxvJfBAPcqHXqc4gnqSYrBvoyDsQ6HQH4L6FujG3V7SQXHifU8z5MejMyUxnBX167uTaBjq69WfBzRm1JYmnL",
  "key17": "Ean4RMCEDUYztEY8f5AWpPysf8t4166qiEnjxhz11yVQT1jwJrPF9EpBDSXf78vbWmNzykUgyYyorCbTEAPy7Ri",
  "key18": "4qPPN3AJjj4Soi24gcbadgFDnZGYoFt77RPECjdb2NaeyKii6yP2cgmH8AsRPj39NR5aooS6jZRuf8VW12nC24G5",
  "key19": "2gXeTSjxRGiQhYLoHUQWAgpgt2LjevGk5BK21gdqtU4iyD3KfvQN3kwSzxKQVZucXRLc1eZ1aT53fyLktyiharwk",
  "key20": "4jx61P2xhpYv1YHTqAGSu9cg29hZiKzo1LVMyax3ExBKD6HaPn7coDhRT129AGfUckSjZqZf4Y6xVmn8AkAi2RH5",
  "key21": "3dgTGB9Hs2e2YwMJcVQFQHWXyEDGovtu9iVFfTg8sNzrHfNfzPFaudNQzcWPMy7u76Cy2hvDqthzVtMFyAjxLtkx",
  "key22": "2ZeNHbdpzxQPj8hY3yg7NrpfCkvDZCzATSHaqMmK97SKwZWpngPFhD5poQD2oPPm98ufWx5d3rmJkB3RKgw569aa",
  "key23": "3DNUsTqmgsP1K5iD1TEFiE8m9khU5Dy7REbFrumyv5hBqQjidw124qQX6PqLXp7UKTApGJj8nVcvZuJFCfHmmJjM",
  "key24": "35ioAn8SemUf7WGKHyhwFWhy1wnqVnjRq7kK5thygAsJAKYFuYVSb1Mtz2QztkJuE5bbkghbAUfvqmkGH92rkcyx",
  "key25": "5WMHnegG86cFZxsUMheVmTo3kMf95UpT6qfwMBhYgZc37YxjZZidit5XPZzvRGBWRQgJm8sbC9kapDL1sfargs7F",
  "key26": "43YCkJd6oM6X52BhQDPe1G4XSYgM6v4yKjW2SfNN9dgd83yKxg8ss9DdHA27y6tdkCBkgCfCbQfyESGEB7AwFgkP",
  "key27": "4YzNqg5t8oJDthkQQMxhSNVx3uVpCSDUaotzCv66EJDnYJGpekkTJ6njkPrJinZrAGysiknhgS8fDApiKU2qMbof",
  "key28": "3w8BR7XSeBcS3HYqmJWeG243fKSC4RTpT4aJjCfzsKiAKgj4Eja9Mzx6YsKhsrPjQXRZomzbwxfdoK6MVMhrAdEA",
  "key29": "5dFccS59JSonvfA9kHbtN2sB6P3fJpWpVURe9qN8E62FEJySzB8i7KcXZQ1ExXxcpXPb3XcCJ2S25QxRJQnLiV6X",
  "key30": "27Bd9WtuyGDxs6LFUy4MEiewvJ4r9iSeePFTib971dpmFy4oX5R9u4CunDLen3SrwwbmYDwAEhfiiBRPJiqi4a6W",
  "key31": "5YpMsEZ8qVkRUHEWeskq5TJnSmqwexQTGuD3QpsoYRNQ34TTtc1ATL6SwB1tqJG2uFYrUFUG79na5MDs8FjybBfr",
  "key32": "4ZzVQpEQH9bURemHGo4HUHKTKAVLw3C2jTom3RHDb7LeEF5ZDRwUuwJKoNea5X8kCrbTVsTLEhrMzGmXREJz361h",
  "key33": "3T81qiqeXTWvVA1UBWo4VWkrMRh35ybLuuGStmQ5GUHng9x79azW2cmX6TheGaDzbnK66ewTgJa9FyAwABENjvvh",
  "key34": "2Hr951wrYr779XeEdneYzn51aERvZt6hNZoxaqesCatWTEZ8A2HqmSBCV9X421qzCuPuLzbKvFoBnTWnmbXXdNv6",
  "key35": "3H69cbBxLcv2x3wbF4p1xGs6JFqkYWhsg3jRKZ5g9DhuUykByK7379PrT4vRAV75p16nm8VAEAuZrHKkWQaq34od",
  "key36": "eJ6VngjDB5omLFrHvEU3KEwGuqjZBMeH8H5cAFSLQKxMKrz5mNHTpTVTzZFU4sZsweB29armycmuAGeDRKYwAyk",
  "key37": "3pSgAm1dcJ7vJHTSmKmSY23YUt8e1mqFtansWABffgme1es4X88YFRDJR2ExBEHiMfv8FFaBSmLXsrAVkBVUrGjj",
  "key38": "65LLtvbLrV2s7cEx2dPft9uUMrFU3UehxAfkmsprt82xn4JGpMCuDshNwZisdUMND9QrtEXciCBtzxJuPPBSiXCH",
  "key39": "2cCSrxLFeVV1GCG78j5PPWKhTH5MqsQTtrCszh1gAK8V15HupZhnFzht7PcYMNBpBeZbAQyF3BK4R6cZfs88vSZM",
  "key40": "3wKjd78sSA4bPcittqPugHvti8nkhoBsPrgBRH4kemmh1wCGQxwaLkYbA4QtThha5QaGk1Lxu7P6ewgP4LtYCBh5",
  "key41": "vCuH7EkYf1A99hdHZnNSYzp3dR2n538wWKoYv2CV72yYeatZg9L2ZCcahgoD9UkTm8j646PtjBg7tTh3wLpyDUp",
  "key42": "66oReoztyCBU4ypxW4Vc2udCEHXyjrcHytpggFGTLqFwJnR7FjrvtYYxn52MiDytDzhKZFLcHJEZc4Mo1yRqKxYC",
  "key43": "3SQn3eDwAipaTmGLioRbp8tTNma61Jce3UQnhVF8HPAddzQKPBYWpA4rXNjoyUNZ8RctrBUyNovjY4sPooDKEPWm",
  "key44": "5VUik3J3NmHhiYf1Vt88KXZosMjsq8XW9tYCp3GgniJEpxr4LDwph6NWiF3uTZjRfAaSvErufVBBUDyHV9k3eq6y",
  "key45": "5k3fR2eWkXev5wxqmyknDn6qh8TYobYs4uR5MHpaWyQ5Criww8iMirCJXXgKKfCSE6owQu5Q4di69Nfj2vKuWNXc",
  "key46": "z465yaEHEw39wpRw3fTAuhLjSApAhJ3khwxM69xStiu7JrVVMDxFxZ8trcTUa4GgB1PzqG33QhnLjMEMFxAC8pB",
  "key47": "2Bsa9ffpwFNw9gEKqgJagxHpgyj6czbvoYY72x1KMqAL8F2E4zjjFzxjh7VLjNbpZDiK7jSbNpQbrC2DX5qCJzt1"
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
