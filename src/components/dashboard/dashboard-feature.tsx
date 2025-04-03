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
    "bfcHoazz9MuwGFkfYrZ4KpJAR3nCcH5m4it742cuB981QTUvVkNNoVkaKh3iPQk35U4t3KbLn2RFnqpTAnWheNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HK375n7qoJBFt8PaMe287hwftqtBJ6SSbpdrx3XLo8vZPzxhDQqUgKHPLGcxCmRxbatFthG4SUWF2xKGZDuA5C6",
  "key1": "4TqCQ4gSA653cyzBSp91wbbDE8RUC62jE4KzJ8syohRkePuDb7B8SufDe4MCxXQ19t8dUYpTiW3ovVqvpMUBvKHs",
  "key2": "5ytX1QydZqztotaLNXU5VyzcKCNu6KwdEETPurkE5MRjRkj2nnFrCf1cjKvStSQnZqmKz1eG1fMufHunoJyieZtk",
  "key3": "4CvZK8boTRtLZgqxKcTBj2VUQ3vNNomYwH1USUrZtHNhVjKAwLp5SDuH5wB5R1EUqmg5K1BNjRGx2cJ5G6NUXvJ",
  "key4": "Fp2cMaii3NZhywgutSf8a9armkYgWo4S2R5Ka5WDE2W3tPStQQSvWHZyr3fMWbGd5949UXsFt3tA9gwTLWjPtZd",
  "key5": "5sU84u2TAwDd9rBNCkmyo3B7UzC3BCL8wRnisP5pEbfDMmQ7BqbEWSbKYR92vzG1kxc5aFzqvPM6wskP4UupP6ib",
  "key6": "4hQbaSo4J4UfLaGoLxouJ84ztrsCRHxJ4PNt5HxngNyjVx8c6PiqBqVoLjwTNhZQQcs6DXKSyUvHJeiUBCjHMtur",
  "key7": "5KqkzzB2kgDe4c39pcJuE7SSLcS4syaZMP4aXe7ZeG6xPN2dKmm6anZ6VpHD1MG9BFNhnH242QPAwg1NuHoXYWVk",
  "key8": "4iMDfE6BYq9dUniUzC4ZrcKJUWQwraavE3eDef4CUge7ANF8naWMpqPc7UvCL8TC9kndWGXvvrn7SVUs7NyddQV3",
  "key9": "3S4Bpcu9uyhxumvHxrUoPDUKyBYgJUKEQWbaqbmGo5THv3g7PMMj3K25dMAmA6tPVpudFwqyFhFzCRzycUG4xrTR",
  "key10": "3cxfx1BML8PTV5VRysenfsfpvbJrSDM6R1EQgriJwKYSnspdgcz6RZ9hudf8NquLZF7HvKrs1zEjpoJzzgBNGAXB",
  "key11": "4L1cbd6WDfNs7JnW7oWCwMpyQzgV7JHawwtzziFt74y26d7HgNJKe7fNdDP9RGSmTh6qWVJvLr9eukumThzbThxg",
  "key12": "5rStbT9mSDxNcM6sAKsfQ8d8cRg2ecAUZ5ckiLF4KBWVvxzgpGfBfZvQTniGgGMcw7hKoCpbcpTrxfRdKqT7gpr7",
  "key13": "4r74pzqp9NCSYk5GPy6h5TntYwR5pX7cgkEELcbB88q3vRYx91dz9PAYu52f9h2eVxQGYPYvEp3CEiAbryLzz4bB",
  "key14": "4uVYkpUWktSSsTUT29NdpR4YqCdGkYgMw1DgNugQgsy1bR9SSEmJvAPWC1zLBWZAWaGvHu9RV6zZyBNzjzZPrj7W",
  "key15": "47qm7JAxvJ7SxMAcsxc2AcKAc163c3wtPsJo4MnzZCc3XRGrZDqjDSDGZYQDneLEdtp9JM2oy7MXq4bSf5WjSQNU",
  "key16": "4tzkWTgde7rvGcE9NoK2xMBtkFiuXrxZArpQGdcJC8awB3EZ8gbTpKZCS28s4Afez2k4d5UUVebAhubzqAvfkxfX",
  "key17": "3kGT3JtHMJdLHvyPBwyPMrvMfzZ9ycmTsqzPc5i4ZWPyXsHE9oWzaBmpFiArA7T1TT16mDD5dBq2u4F8LgJmqajM",
  "key18": "5du5ZE1RUrcx9Tbgv79x7m9MT4hzVyGaBwTp1RH5rZrsSuqfMeV8tsukyujvrjUpnSgy6jqHKHuthCeAUYLqjC7d",
  "key19": "66SYHXGx7h8VuSthC3A6pNHiHMnodE9idqHYXYn4F15c71zZhxMkyzhGW2hnzjjYL7qFinmCXz2XJETGyvcFUTNs",
  "key20": "3jGBsQUVVLekkR3DAtyaMJYR9b9nmZJgS84qvwU6YJFK5Hy6gQwzHrkK3vdxsxEfRUxGbEvEYrG8yqNr7ufcyBYN",
  "key21": "4pXEBPivHFLAHcjSrbrGERzVLBFbTjTCTpCZ12sAijZicMiu4GFyoSYWwJm3cqmcBUq8ULpm3AEpddaoeuxc5mSV",
  "key22": "5jAT8YvK5U8y1YKze52zWWXqUG4yefmsWEYmbWVnA2NPmUuij57LTqVXExRpTACPAtN3rnnvRFpCEjb33zhvapob",
  "key23": "auKGfFhp4cDqq4LGRFZ64gZ61YGqA9JTj6WzKYLnp9Dz7ERUM6soy7xEikVG9MT8TUDQjmj8oywNXdihZ97Tw5c",
  "key24": "5Un2jJMDnYRUH1tFrKJkt3WVyUXy7X8MGxAcy4UG6WCSYAizZmon15ZNU1xxqq3BMRiJ9sDRXAGVa7f48CZUJeAe",
  "key25": "xtYLuDqENFbzuvnLyUn5RTb4fSVD818Zgvb4BwVoe2HJrFEa4wuFzWPMwjWekHBeWqjUpDmkUnqYt1xudrPSaLd",
  "key26": "5ziUgg5doNjciwiTCR19ZhT5GS6zQD5jfdoh8Dm1CYzT4N3yPK6duDZhrBtctCGu65fxvqBMuFeLRraXPFsT5B7e",
  "key27": "jdxrRMAgN1bKyLmGChaA2Sj2RjFJHL91gQBCmqVN561qkXEWkomgWDHniCUphNg27JAGhxqZzMXhVh3W7iVU8FC",
  "key28": "46Mnzpt1YyaDrzfxM9Voy7VAW4irYeni1i1b3dUHjm9PspnMQ1XRcydbs7LUTEkWziCBJzvUfDz9y7j3Gp8VoV23",
  "key29": "3BSSPPnAf5uwfLkEE93iersvk7cndnu9K3bhvLSHZhoeYkxDQWVwrZWprgrQQDgbqG8tF8aqe5BtgrrHZNEAHqNw",
  "key30": "4xzYEQNHtKXgfa9v5Ar25UyeG1uoYyuKeCxaaap8iCQnrTx2L4EeRhg78iyH4cRHqZHfvLWeeuUu3ZKEzqPD5Y8H",
  "key31": "2mDn7uTERkJGADk6swm2K7XKZ6qnG6Abud6iijA6QH9eSygaXNBASrMjvT9cWgn1bYAY2RabMGpFDmMKHK7GmDiu",
  "key32": "4WhvxyNwSuXKAFJig5NiEmEVjmWCFp4LdWBxksshMrtd9zWmuNNhRvMDZpS5CmQqbpwL5HeNWtFRvJv6Pho2kjmx",
  "key33": "R9TZoYpc3zYZBAS9tvVVpJWs6uRRpNqAZ2NM17c9wzkpSS7fYvRKh7ZHqqotZSw89xvXXPNep3pdLcYoqhgdFYE",
  "key34": "Ygvp3rrQgV5UR5AzzxVgArfjqoJLs2rFAGW8UNDYdJg2uNXd38finxjcRYNX3TWUYnbPfcpQ6yxPUcU1ZAJ5iRE",
  "key35": "2tvWJfakSqtMhBjvDiQ1uwSBDjRbqq1S31fycoAxCJ25nETmStFVkW74CCe3MaCkrTJdXJ2xRbQ3qhTSWkH76irZ",
  "key36": "61h2b8bDTAkd32G9n9pY9Y9X7drAvwKZ5SGroBUtqdPsE2rdvhk6QEXz69v4PCz3sUe6caafDEJAFE5oJKuRdZjN",
  "key37": "4x6nHcFi3E9wMvVchAaDyG98Y3HNpAL39VCgSfmMwGefnHajJ4jbdDd7oFbeWJucLNAkyxgCATDBtA9Hx9czKzNR",
  "key38": "5ffKZJiVjH2KCUQM1c9Wf1Qn2qupHL7wW3bX1X1mMg83qoZddhPATZtPbkQrktQAUcZTiJQG5gKArqVVi6YnK6GY",
  "key39": "2849VtbAMzNBGQ7cccqNSmVwuuZ9E4iDffm18FrJKXxz3hWBayu2P3BAAR5JggPz3H8D2k6UyCwvswcB5dXSUGrG",
  "key40": "5m3kz5oBtE1XRntHApec9pvyhUPuxNpJjLFF4hReX2PMcSbxYocimRNqqp2FMPqXitEJhBqsEmSkcmQfssXyUkL2",
  "key41": "LWFQTmvhbHxRsiWLtZKsRsKLbay77uus4HWH7kN3GKjBck7DedwQ57okZiRpB431VXgMkHnuErjLA7LR5wsDPKo",
  "key42": "3ybrbGh6rmYdHwX7TgxV2n9Bf1TW2MHX6fqhjAmGcQ642KmnwuFHNzYsPpKjzRyrezRypjTBGmgY1kDZR44AU3PS",
  "key43": "2Qnf2e4XvHdGoZn2yBJA1uxSR7GA5fEteVzVmbiDwLtLexf2M2WDjrs6tRWdJBTqRskdkPWG36iXtkFVfLF7nyaJ",
  "key44": "5xw3JuqKkytQc3sJuSt1JZ6zvaCVqB8rA6kPBPQkD5FRrKBjWFci65T3yHQE8hYVBE6H3ZieKWQxe5HMyTfX6ZPg",
  "key45": "4Do1Gg3QT6f2s7i8Wq9acto4k2NhvnmmRpuBSFiXcEh3ab9kV1VTuUwXfKeoAwZnjdd61fpAb5oVKiHpCTSLCxTX",
  "key46": "2HFyo8kxD5pLJc5kxfsqe3HT8CWEsfzRhL8VCNSexN7Fex5Bf9hWee4H1zjEpkWDkZ8BN3epuv6rvwUH5G7fLp6f",
  "key47": "3mCSobn7v9VRQEyQ49DynCg3wis5n9qdnVPs76RHCaqqoXQkZdt8xQii1WkSD3t6VbbSVmbnZwfEPT87DYwT5Q2e",
  "key48": "ipWznsbzegjAF5zrZVBungXMjqWNxmz2o6Z7y6yCk25QGQ4NUDUSre2hMw9ZaaUb161sS7Wyh2K5z7jP651q9Ri",
  "key49": "31c5CU2G1M1jEEHuFStRv9jpb9Tr1aEHLtyUUsNeCU6Jer973e6tepe6Bgm2z8qkUzEjGYzL2LvUQGJ652Brhy2E"
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
