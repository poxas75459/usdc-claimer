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
    "9Sdzo6ZJAkWuAuct1mtBpe6yK1YsdCwiA7jT8P8qdg1o3j3YSqf5WDzpcHz6CpAVSPJA5cLit67AzVkfEm5vxX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NSH25EuihncZZwcWq6KPGeYYXRB2f1a7KMeHxcFoeAVK5jEoa3UvcwF6ZvAprmc3R4sXRegnquMaZtgUH7i3MNf",
  "key1": "2uG9pyWWHvQf2rXzp8Ri7A2mVY6kDJWt1GqMVPD5tZV9nxSVd9EacJB6AFTf6rvT3YuzDuokerGaRMSFjPFPJVy4",
  "key2": "Dt7jAyxmFN15kWdE4T825AT4YjQjuQ9MthZ35VunJD16rxiwKXnGa2piYJmcE4HhYN5z9dCoP1pi74sdX4HWchH",
  "key3": "S4qZQDQyGgBPipQX6ooAVd3HJvvuP46caGx6JQ5KwGnsnXt3RAXb5CkuHxmJT2vuRSG8HVfbVNra8G4XgyJ1vFW",
  "key4": "4HPhprdt84MCY4TzfRMxwKYTwVVPf9r64h7ub6jf8MfTFit7maJHnY95ePafQDYA8ctzmAH2UUbo65sbfvUrAwA2",
  "key5": "2HiJy8jwiVqjsPVwkchmEUPZke7D6iAVevkR2QA71ayYZgLHHSTGkgHjfhJZiutXP7czLLNnLU6qzJeCcSMzWCFK",
  "key6": "2h8zQwZXh6NP2sYGCJj3zprh2FhiLbvvF1ehr6oWdhHZLRT5ZeEAjYeFsT7zYQuotgxcnXrtshQ9siK78D7Gkep",
  "key7": "xvvD6M6Np9aqDgEV8CXrXEHs5CLQD8XRZ4sNzR4QM3qaB1hUuCJvhqSMqZ41uCRNGCCVMX7djtMJwWQT3KffiEU",
  "key8": "2zyWr7CyGZfLoce9kZg5zxQBxKiTdLLPq3aLTqMLJkSKHjHXicToo8s4rjHawWVkMvGwWiKsoayu8UEvNmyYe4PB",
  "key9": "3B6iKaFh1tHGTMeLvwQVR9BpkCUnE9UN3q5AdhQRW3weJoMmEoHd1LMrJ3ugiPoYExt6JLXRknatToJ5K2qewNgS",
  "key10": "5FJEswgA1civHFxExz5q7tm5ofiE4GXdwbbxh6PmLjRx6AsSt4n8KVEW1UQsMmutPrdpems9f7rnfegvqZQQUmx8",
  "key11": "hpX5gvjkNprgFUbwMYMmGvdJfzQga7Yb31DaeLwRdxFwicHeYs21GoprZrTPLeubd4n2xxHFjvMTrS3R3vhNguw",
  "key12": "2pMBfm4ABFt7WJwbXykxWFhqD3V2uG6kaSZ2oZNRZTXmomqkDExEkuipe7sfJiNUcBgAF1eTAtzjuz8tHbYFiLyV",
  "key13": "2YNuicsVwUznMqAGchNrQcBY76UrCgPCjmA184ztqLMEX8s7689zrBZHaVoepR2tt94rePQP3hm6EFrJfvrpDuhY",
  "key14": "5NMm4F4ALi4wDbiaFvBVUUZ8WXZF7HjuDTEvWBm67zRej4Vv931Acqr4mU12fkzzywdSZAsXdgnzTuDyZ9xi6bbW",
  "key15": "48ftFXhQ9iBkYtfLUDzAjXJMcHBXwweNRMs1xDZS1DRY4JdLYAM6tK6JarA9N46MkLQBuuTgHTgyENHVHSRpiZFv",
  "key16": "2ogHhX7AXQT4SP6rudbGYRQGq4mehzTY8rSsicSstUNZjZ5XbxJ8gK5UQHmBF7G5FYHnRubLz1gnWs3pvyGSv6dX",
  "key17": "2syaHYub5U2SfwJ1efX6ijgtbmFPHcrm5GKHZmR6GDPQ9S9uTsPjG6sfpgfxM5uXet5YzWDi2JconvXTr7wZs9un",
  "key18": "3UgrBbtxN2apnQVqTFiiWZ6KWWqKqccx2rJwZqLE5gWSFtboLRfzXxsfphMUVNtXQuFgWNjsc9iYHXXPUZCEcoGv",
  "key19": "4G2sZ6tyf6QLYenpwJR7w4z5oWjnm6upx3Ju4SKs6nLLERYxFJ2s3TfX6S3m5rNVoZwfz3KS1sC9ufbe896j8y2W",
  "key20": "5cNuowApLktxezEqbxtdWQdTuvkUfAHMehRURM5RF43rtGoqiP5Fg7sftZEDWB228c9y3fYw8zh2X48cd7zzvpPS",
  "key21": "4KxPvzVBNScxBR3GnjNgh3JDZ59qCxYryhwDdKtrHjdaL6SyD2WQyoYmAR1utUKvEkrrgY4Rmk8XbcaKAy6DDs1X",
  "key22": "4TthZPvXqRDoUKMM3pyhcnEPprJM6U2VYy6FxCxf3RHGg4LGxBTTqnTY2oeEer8BmZZ8R988iVh15AkGDkq5FBXw",
  "key23": "3jjcLACxwnNUCpeUXi3px7Gg9ejNk66xqHvTcDBDy1h4Hxc6KVYHv6jB5NgvunzjS1xxPnvcsMj6Zu5Mz117Y1k",
  "key24": "SMWpRMJqRvHbi1k4bCPzS9orBJfMTsESf2KBk3GaemZZxpLNMtRr9sAbJMcLE89wy4MBtjavx87oxQFewzCPmGf",
  "key25": "4HF6H7FkkBiLxPwPcPsRCx3YkHHmsQVxwyXAejpYMvq69rQAjMj8C1dou7dPMMNTBXwfTYt1oGzBPJHS8kw4rRYd",
  "key26": "3FBnGDWMdKZhFTiaCqmQkYj3jfr8jYZbzo3Pke7skLjmDHkhKnKicsutkAGz2CdfpzWDeoviDprkcs5GCMEGzPM8",
  "key27": "3ci6GqWogngKSteDSM7XhRKqwXwa3RVyH7hi75UtG8jjJLCZEsu5dBYET4mJjmBzP4RCCQd5GVeqMeLR574YVvJt",
  "key28": "3cs3UUCJLx1rPAN2vg92mEBrx8BHHDa5FCY1NuUDocAEwjANVQQEBf9GjPPbjwUQGvwK6Y37RacYYRWfjxb8sxmb",
  "key29": "2pMDW3Wzu2Q5Db1JNi1Lo3NiTZiTbswHdGJs8RvPu1LHooyAbonZEvDHQZKc73RN2Y86Rkzn55zGcJwZXwmvLvW8",
  "key30": "3rY1rcyYE4s4KauByBJNuP95yctwTGfbyaxEFiNbmpzT18jMDbGCSiQMCazwRec8jRrfjhExuzECumUZFL491TzR",
  "key31": "3BRVBmvork6P23RtZqwFiavEcFDqDKDui8WSwXpH3x9jJeJtnvL8wzg6hsL6PnHMN5wA766WJMk8tfumY3i7hKpJ",
  "key32": "59EtvqWfDQvJmmRnPyEDiRB1chat2cmYbUBcaHFmyLHQfALCnhScBScVdUyVv7JNU71UL6889UwGJ6atZjS4vKXh",
  "key33": "xtrnQiiq5hPXm6z3qoG8TWwFcy8nRseUd7i84th7hMTajZzqPPFwEzfF3JzNMLW8CXXyQkmLc813u2Pq1YiNk2o",
  "key34": "5dA9k9Sdxcf1RSQMEMKz8qhsES1mZbh2USpZ8sfudUFweghBYoGaG47D7mzHGqcfwWVejh6xRt2CJtaaEpbtojqX",
  "key35": "4aM6HG34Pg6SPatYtBkS8VPfd2Z7GR9PLLB1LGsA8Y4WZCiiXB8ny4WyNcJEqJWTeMW3M4e6N9xXxi92yNLw8hqV",
  "key36": "EYFkEKsFo7ZGp2JxcEBEub25UpWTDupJo4apQczunprrg42gVbXhTjKK7a4hq1upSxstc9ZdwKVrGQQTBY2VcgD",
  "key37": "277GWNmMsmx5h63JwMXDDJkU3LY93LvSLJjNe4VNqShY37JCTnx8SFTd2GowFXWMKFFHt4jrKmVWQSJ7sAXWkidz",
  "key38": "4dfEacr77Awee23ZfvsqMKTSSwsGRA3Me58XRBv5DsAsTHetF3Fh444cbLTWEwVABroGFQZZBNqqavzSnZxjVfAv",
  "key39": "2arJALUdVz2MKw5ZBWqM9wsLATfoAuWAS6GvxWMm6PoRaaEkiqWv7QsExfTAsJBL5czzejYisezphmvej7rSbBkE",
  "key40": "4Xtk9zjHcmw1zV5mpmiLTKRXtEkz19DmKqjcUDNbqk8srJ2a4xuDRmBiDkFQCxo61CgExM9MYBvDPtwagsRGvcBL",
  "key41": "rDz2ATMCTWsa8UqeFL5eZEriVKjUuq7NXgjG3ccTy2PTywgL6RBF1qKnnQBynsbmg1G1fZWLeGntYEmgtyJ2hRt",
  "key42": "2nG1HD5P5ofhpKDrQrwQV1Z5VVy7D39YvCAqGBMGLcjMQCihjuXYkDKAXhJJRYoVZNNHBEwoNe8bVo3cZt9f89pW"
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
