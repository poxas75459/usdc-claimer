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
    "2qCB4sfLjNoPSSgwNwc7C9PeQdhk2qS8K1LQWHDzTx5AsxxjywMsG2TCCMrYMwKeEoSqMjZdmMwx2Ewq9pVC4LA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44aXTPqbPQw8iYj7BQpRDaJokcAGFd6JH1eKbZy6hxr8EbcmfSYKA7mYnXwTs34TBoGLotgUuQPmUGixPndDxada",
  "key1": "4nBFfX28eaBxvWoekB4dhMYeSe744Z8LJJEsYCHqpJ4D62ew7DvGeK8qp9Hrx5TZALMppHFNFYzq7WHNQJ8Cv4VM",
  "key2": "3LgGC2j7py3yzPjBuzVLvpk38tVcLJJoyaTm9Br5RnySFzhW6MNCXzTvSB2Memw7Lr96smSLLWYBTSFuAGuWJW7L",
  "key3": "2NLRsxHbHfXbfwyteergRcSUkUyCJu6se4qmfaDMEuGpWjJSjmoYsrUcWGLfcBRDLQT6fX5F13b82hTKYN5KsD85",
  "key4": "5Ax3ZGKyhewNzKXyuyjvSWdaXU7SRhWHwDosj3EEPhtnHw8DMkmc5r9eUTFenrf7jQSaEZCfbihEdPrs9Gr2e7jY",
  "key5": "gfZwE7DRjG5SutCShaGykkZ4Z3GrwS4YbfVZ6fon7coq8a2T3k5dbNn6QrGhuoWVmTijdZpgym6Fm6anBmTCfop",
  "key6": "46UcePncQUKpSGPuqBjop579YhmrqETJtcc82UGbTp4MYq1pj1hfyxFSqKB8YvKTLQWPwn2VzYyYEvopFoMwMh5D",
  "key7": "4Qsxt7HZ5hbtbWEX9HA9Mi7UmELM2eagmpybTm13jwbo4WqAKWGgqTVtRxmAtvWU2ak7ZkdCSPB21TsHiym1U8Kk",
  "key8": "4PscR5B9WT1RqruCZNPiCukTRTBAi9hjpk4J3FJLACLyxqqKEtypGdgJdvtrkz54VhDtaPUuPYV5NFdaW2KPyEtJ",
  "key9": "5XmJCThL94goR1H6cNcmWvwUurDWqfwcbev2pd6u43w1QeXs7ZtERfrLKskiVAQJt9U2r4nmLSqo3gkyionE9Yhz",
  "key10": "58Egw3XF7VKMbdf6gP32TZseL4VkEHq7k1iVZMeBq2eVn9usp9WonN6GRwitfMJWNwkNmEP6rwcRbTJdwxzkzVGN",
  "key11": "4G318APY2rJDfnVgBPzqNjMZq5YBH3hfDZDrZeSd97J12oJxsDBXFVZU1kdjzDw3UAWyLFo2nqf9YJ2CQYybeo5H",
  "key12": "3e2S3rtysugdzG2aygbpofANnWLWKD5nZebyjvwyRAYSoavvJMMmn3nrroNGQgxZaNfj2M4tvqU2xG3xpjF8XTkL",
  "key13": "2zyVHgyJc91JmDsn2wVZH9Fq6jtseYZcaFwJid6rWxgkvz3N21EcZ6iWdKdAqKSDxkcymfRGWjEeCp2KwZv7xJo5",
  "key14": "34boyReR37ZuiLoEXE9zCe3bBEtEiwLoBC1EY38XrEwHH2sDTo8WytKFo6xJ4XTVxxhi73MBAeZLjfJrrTGRR3Yc",
  "key15": "3Kien5z4oyqYpkhT4XejBQBJqxCH7tcmkuboCUubkJMXiJ8SMp2LqAQXJCV6ePHVvExhkvREgPbGaVSjjupPJ8Cm",
  "key16": "4K7L79Mz3yWqqZGuyLmSbyhGRByZ5uBud57c6bbdBaer2gxx2UT7DWC127xLtufY8bHsr7MLU2Z7kt1qDu9mc4T6",
  "key17": "3coAemt6Tz41yTsCYhoBM7vPvvC8nyD4T7W8EcAdfHVKygGRXyhGQkULkuttEzqFea3GyD5a5X14ARhJi2p8Bf2t",
  "key18": "3QVbuCvAwUM22JU7GBaZBGsLDi8VZ22TMfzZt2vaHpYjEFRjyLffhDkTqzcdqMip8yGb6rsnwuwBqn138SBh44N2",
  "key19": "63i8oDSw8ZkXqpKdYnMyz8Kc5NuenxbHJobudUbn8sMfgCEqXnnGQgAvoBgDwRzqV3izzfEHfimqT3KgQCtdkzoV",
  "key20": "5uemHZ6Foj1p7bXf4uNkvK5KjnHE4nUtLNSvVFmY959agjzXEtziS3KbamoiRevH4zKbeSfzuzScx918UP9fMnRy",
  "key21": "v3om4HnxWzXg5j4x2FyF4QPFzx3QTHp61PVc558P7euHZH5q5BJ3VZuWchANDL23haXwXKVSUFpXa5NMHCPC8F2",
  "key22": "21qcKCWyqArXK8jSs6SosKtYPCnJH94Yin9JzCN2zMXHmjyyycsMB9TZet816qSY3tMprmSJNacnLa3j6tgtb72T",
  "key23": "4ZvPfo6qfAn1NxtrjkrNnCqeMyXy9XWw891tVcUi45PS93kDNUNvwJgwJRNFFehMuXxvDNuKV2NFxYDskcrKQ3JF",
  "key24": "bpRHay2rQ6vGjDB9BJBNtDxtXazdJFwxyFBVKtDL5LmoKm9w5R29F9ih6CfE8rUcKxpfiUPn9E9B5qdZ7ZBTFsk",
  "key25": "Zbsgg3wTv94TTh1wQLvzmGQQQmh1orAbALYasQ8TAkG3KRhrgBuAyPpQJrNQ1qpfEUhDL42XDiPKnJGioVJJ3ey",
  "key26": "HBKSu8BY76mcKGyL47KRnUcaXSGKcWrJH1QDpfTerXEvt81w5ja3NA4zxcsX2NXmZctxzfXZov7Z4xwbjwc9AdV",
  "key27": "3KqixSfkaRvY5zQqsZAbDLmo71fDLZ5Vw89K2PLEj7uHdt4EGDmAjx7YqduFY3cBy4nhDCDGcvQcFNpdgk2SHebC",
  "key28": "2Bb7wbm9miB9upgX36j68xDjYLcQMpWWu2Uj4QRavWiUEtbuXv9wj6H14QzywqruBvztc4EMbgHuENVorh62vRNb",
  "key29": "Zak49f84nKgCrG2SG91cQpFNZc9HArPjq9FDZjFwwtLkdqEidv6CF13yABkkiWRDED6jfJgP9RQcYpVccvhoEKi",
  "key30": "4WeDxFqoWfNN1p8yF4WxgyGsYwButECBHK4nSwhdHEdEZ8E9V1Q7WjQLWr6FTL1QtZ2ebMQaHFkRdqZ18eowfSVD",
  "key31": "4TgMeCJDQmtEjuDJ2KkxEoo5JobicwAkK3WrJtNM7XipvkrfpmMeYAqz9KuK5i8o3ZgERCBFNXshJpKCYQjJW8sq",
  "key32": "Sg7HW56FmJhWABSdryUtP54WDt3DK2Lh4BLHDYuviMR6CprxK4WytfxT4nAYVSGXXdwvxDwz4qzMms1WcnLvB9n",
  "key33": "vRfp329QL5TTf3NTgG7LKNyU5Z9at4vLuN4Fwn5dHG1Kh7JqFnpAQvFqcLDHLPxJ8hreFDcqABbZAYveUWENtEe",
  "key34": "2oq2ZhVCwyqhB3WY8GHJeF4zL8jryqeXoBkSpngpRFNwmNsaJLVNyS78cLeMWbBNtxKNG21ARsLT4PGi8iDcq6xV"
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
