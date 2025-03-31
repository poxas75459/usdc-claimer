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
    "3G5zSbMaFatFcNVikn6NACHRmWzmkJ4GQNMEs1APpR3hwC51vhdh2iaGvbYiRK34pgYrNgMBHfwGeYsJYwXMrfvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A8MNPQkrkyyTqcEX4PTbBXMBopysG1Zooc3XtcmHwmE1xWMv5TWCyMHN1RSTq3geuWa5tqM3wUp6fKjfuRAJuxU",
  "key1": "4kMJpTmVPRHxWxTB12QANRyp6qhWy1cmfxMHJhbJzeCjmMmYiNNCqZ8ammfm4VdG4PWsG2Hi63mEmeYTHZgBcBPJ",
  "key2": "4gpLV4e7LPfKX3AZtJpXmzHwbYhQmySVEVKW3ppVrgozHHbyoxsX7ouc3NNRgNuaA2inPyzuZdxaABWzdDudz2h7",
  "key3": "66QtbjQVf9yp6QeeYiuVkmq3E3ueZRiGT7NmwK47ohafBUTmkAtP38atTMzQVQQPwwk4oJ9ToaHczPJxo6VrNSrr",
  "key4": "31kBqkUEBq8oV8KussxkamnSBQQycQ7QQfe4CAwxHXuppxhvDJF1LK7o7rR2aUzvVuNX3pVrFRSj8Wf9LPTyEXV5",
  "key5": "36oMU1V5AdXfa1CVdmw7U6NQBZX2KJAw6uR6FJjapGj3kjrwtKm5e9NMHwmKFUNcbATbcYzs2w34p2KF8HT4PXi",
  "key6": "39U3wVbuxtFirYurAQTrRYXeXYrDFwJSrjEeVfEfBnvpGdWMaRkofzTfJwozRcDmFrGCVzdkhuLhbj4ibCbRjzXM",
  "key7": "2CSKbkRN6GFXiukhJvUqaRZFYjkuZ8nNZ3UwyK4dbfECYTX3d3KaZw53jM5dnbfd3GW2aQc93RDbWvDLd2xo7w7m",
  "key8": "4AVcniTtjz42DgWu4mf4uWqaYQ4S1yE2Sgsg9eC2AzgT6Fe6NcCCyYJAJCBpBRkfSfCREGf3dmr3GpSwGfp5gs2B",
  "key9": "5qVrncu8vSbXCWMqx8iJY17ao6zbD4PnQpJSaBQDakyJXcKuoxEKuRcd3haC2QJTEKy9brVpBM8AQXrbAuJef4uh",
  "key10": "24RgQQvapjpGsHRrSnmuYrKeWXVuFHnDZYKUi82gudSkVQKxN86r9BWDeaF2qNbu7swPvUqL9bCtoESz8a9M9pfu",
  "key11": "5jRKSRpVGLW7VWdQZJwwQ7LkgGJijyowQfqpgZot8PyngG7rAWyUwanseofqCi4jGN6qDsVRNveMhfVBrDHoBwfW",
  "key12": "2zHdmurUpcswWMSGFWLrpsYq2Gv7cDZQfRdS59GAvv3t6eXHpeCG6CjeAjEqVb2F3t9AJMmepXrb2gJZ38b2G7KY",
  "key13": "57HmRzs3Bw1cDh645Gp4iYSWU9gW6aGyf2rd2ZhGKwnxWWq3bj1nY5dn48B9sfNJnHZf2Rz3df8N8f1dTm2fzLtz",
  "key14": "31VmHUgoLAg1TPALoSAX4RDLgBAk8dMEMQ66ypAfLcXmsiTcWL9RmJnHAEhfJTpwadnxubSKTcE8Jwaju9uBXhxz",
  "key15": "wjxHyGjFR5w3Kz7KM3aZgiumCTXZX1R8SyPh33BY4EKp7MdE8uQHaFGa8mewLTQVyrEE2Jt1XXb9BBbHxMy7mpB",
  "key16": "3atsARzBwM6S4NTgoQpmi9yuX12i8r57kqddaZFaeQuuKF5wV2DqJTwx3oJe54ZJ1BaV3XD5o6r29cwMKZLQotPM",
  "key17": "5kGvSFoJtiRLR6CKCvLZFKmRr91tynnqsEA2dVrAaNb8Ue4s8nEaurWdSrXaiG5sTUmb27EPv47nyMcjC5upffF",
  "key18": "2Um8ZNhWJd9oqtpiwpDNXNMwUTUfDrE4q5nKzCoHTdTY2xbUqDQCFubRNktWQGinTbPNK1BGKxDbHqTZNBpZ8xWp",
  "key19": "M25JwLMttSbTx8gG2eg6tqhab5aAbakFLNzdNtysfXbHujaVGTDoWJ6HQj6WRDwy1yQMJ87BjMR5ZwEgvdPXBG8",
  "key20": "4URmzSUzbwn5EqgMvcX5a9rCRhQJmtSYT1P9R7QeHNVnZbHNtvTsAcWewEMJwmxZwZZc4HA6d169VnPRwstRqaYe",
  "key21": "53k3VLJcyA75TVJHpAUVipXtuCa9KGNZUjLyK3qybXKATB8J6rU4JeXuciZCKZLj7iJcLVQtgbD4GoVCG6XTVf6S",
  "key22": "52Ci53GDdogxPJkyPycMLhfUV7V1bCohf8eXW1977PCnAhR3hzHqPSeNtUCAFtc7ZZDNFPXR2VqLGzRPfvhkLLfF",
  "key23": "3vWbFHxiLq1YidzXHcm9XK8HYbsbmVxGdjnZ2C2Qu1hXHJ6P5rH7xP6TwRe4XNBEjYEnMa1RrRTccLShm3zgHnom",
  "key24": "5YAKSxckTqaf6WBJ9sNPP2kVL9mf78tiE2cWzDKGcfAT94RSGWLjVJAm91ocLFJAMAbQq1UtdXMvAg95jNoUKaAN",
  "key25": "4w7wgsZhHaQ33p9CmhXvn7Bcqz9WUAtKxNyc1stM6hqprS9p9gLeTVqHH6q5maxYjUqvp1VRTzzkhQtTgwAnKziT",
  "key26": "4YHGyWAAjDyXgDbU4ymWbdAx4SrpWBA623JjWuXwYHrnCT85B4bCmhgmPwY9tAhvYvNPWeRUJKnWrwJtp1NsWvHa",
  "key27": "E9gTcWBy6b6U85JWXSh1Qo2aA75TuXyiK69KGPsXpn8LcPTFyVkXxA5Lrfo4Z1fdpuoEgsbi2xrVeZJge8N1vdv",
  "key28": "5tXnWD3RaYY3Mr55S9hwkwt2rMJ4BQTg7votH5j6Ko3gE259YPKwErzEyhs26N1bkTDMXy67ZdCLCgRmmFqVMHKF",
  "key29": "4RWQEUVFLRx7ZN9dugLeTfAETpZWfomuYdKAuwGfKWMM1vbSHyPck6nqC4TSP63LuCxdPHqA5c3xnyuQ695iCWdm",
  "key30": "3Mw8beBqzTz3Eaus68rjF7pZmtwu5jQpjS8B8BuYKBs5MF9Q9vQgACKfvNLwVPFArLrv5ptndJ6u1L5d6eNUY9Lt",
  "key31": "4WX4DMVd7qiyNu1QnxUzzn2ssyYtBKucKxDmUFVimQS3zPrRbWSeGE4ugp5XQVqaPCGbatyqyFVy95xiEaTxdYX4",
  "key32": "2VqJPp9cDHmj39ueoHHncFQqsNAMf6kxdBU16fTgFEv22p4NSgriVTS4cWzmPnWwNMzmXsiEy76TwwMn769Z5K9Q",
  "key33": "5G5vhnHUHegWAUaqRTEdVCfCHbSWqfYy81nYUyFMG8N2kiABkgfrPMKDsSFpnhpQsGA3abu3Qfnh3b3KsSXNsHrt",
  "key34": "35YcnZjQD8SZU7911irzseDsR8iQCYadEirgAqMHMRdXwyNdCfX9LBHsewpSkaRBQkDsHQMRfxo8gaGwjMKYz6Tz"
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
