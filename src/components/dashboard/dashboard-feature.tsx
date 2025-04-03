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
    "3tzJsnExKfcoeiuxTMm4JTdZaMafRsezv3GyLs8ZiJFWkW1G1Wu2ni2xJvvBrPwu6j6saZxjBpgcbWN8PxX2kA9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33uHiu8shHbhpg4HuBfsuYZY5mjVRx2MsHJb7GhqJ6JPvPoMNv4uHWGDtqXp6eHU1qkctmUxndVrFv9axpjyw7fU",
  "key1": "2vnA1hwSKVQGvGib4LRhuAezsZe3vyAehwwZUP4TTzWnEohBovAdTVfpDEu3UNLrQDhZzViux5AmFp17NJzoPLQo",
  "key2": "29rWcuAJ7WqWBHjFYDqWMcZeN7BZfECyqYvAS1q3vicK41jVjn161di7ExZyZnepnX6Rsf2dMQAb7kyNsyaEkX1z",
  "key3": "34GvnxxNTQ6KGai15yLNydyETqpSzFm84Efu56mgU3aYsGjFeNuYMKXw3V5EV1HLxWUK99o3TULv7DPLpC6X48Bp",
  "key4": "3zZZgcUVL3CEhgGFvJEWtCJG8qUtdzh1YBRfGoNw5WFphwK8oSyCW7jFGJHatfZTe6zZLKtyzV23FsuwT3mtHxWr",
  "key5": "w1pTcz8rAvRw7aXnZNYjt4peFMfTmiiH7dJ9vaayEyKgSP4oGgtC8UjvqnvH9dKiXrVjwDBsQVi5eTc7jTo73Ms",
  "key6": "3dCzo72KSeAh6mA5mqG3BS2LJw8LPD7mzbESYfJ19m9ASWiWrwopk7v2fs1RjmoPM3kueM51GnQ912NYGWGk9G9X",
  "key7": "hehaGH8DB1DZvBKuRoYpe7wezA8Sd9TuYBPzVUfVxfwyjBHErzdQJfBzwzxeNJh2HhxCoTEvxFn3LsjGu8hnowg",
  "key8": "2bZStvT3jqyynUbkCpuVFJYFiU7BhQsjF6F2pasajevGUwGywS97FWDEfegkT4Vsp2wkVLkVTv6LXX6n8FJrykyw",
  "key9": "4DU4VppgnRHU5LwDhjLR68H3VZM9UnBwEb9kXBwtjYPZ3Kc64Rr3impcJQEH1mfAmRHKrpG8amJTNHFPdDPxLHpT",
  "key10": "PVCT2LxaTquXeaWu8PVrgy52M4828THvTFSALsvYCFc4BS1gN4P8gznxFvZbvR8RC6icLn1F5J5oMFvLJq2KyvB",
  "key11": "3BpoJWnLdtPrzt8gkm8GJD1TqQT2zt4FbScBWP31baxXphkXFAw3bSYoscQYpQVZU5yoPg2iGPzkRdsCZ9BCxWoR",
  "key12": "QyQQnum15vE7TWuww4hagb439XHZVb3pDzYqnQc9d2FRLPWw67jxZiWiHH6XLuX68iQLBDmZQqZDTphDhLkS9qe",
  "key13": "26fDnYEqLQXxbEZzD1dEquJUdLPHCAC272q1Y13gw59v8SWPdfPU3EkKgMvg47Tiirf7tVmZuVEi35XqSR89Uyj6",
  "key14": "44FL86s347rbz6RxtjtQ7wX9NV1qB2eUtxqMoURDwH4TNvJ73QY6xAGZ3KvceuX7fdrmwkKHB9Rkxp62N4v7KVCF",
  "key15": "4k2c9voE4foKC286hrnPjmsNuCsFXZbbqcQFVb4T7Kvp1c7MtwuTN1FtgNYkZHWFfcM7S37KuyFh2Qhdb6PaWaB6",
  "key16": "27tuXB28ood6rjE6nLs8bLzD9jjXUGFmpWbDbopiqug89xwzvT1Cf2JdTkcNzLEyqgWRpESNmJeng9DHrKHmoPLX",
  "key17": "4kVgqffAP1CksGXiqXJR3DKJpUCJMyL9douBN2xkEiLEZmCvkMswiLeYqYEX2X7KRb2AvGCFoN5zFGwqJNXhwjvk",
  "key18": "Jm9WjMWneAeXN1jnqYgBvBZfJh1zorkdHAvrxD4T1RTWC1ee8PtdAWmEGfVD8MhuKaV57XEvR3v1ntHmZeZny7m",
  "key19": "DK4U2tNdSZvsy1bY47GEHibc6wcjpGqiihooqAp3HtG8t9NZQ8oGP1BW84a941D1L1Cf3Pv3he95r2DGUJ5j829",
  "key20": "5TJSgT8DKFH6rB73cnsxbwJGQJ5q2J2VjkvE6dkCeAC4hkLghCrX79gajQboenHVu9QivPGu1vMohZo5LkT9iTkH",
  "key21": "4VX2c6ZtkGLvTQH2ByEdcEZc6WxnvtkFc8HhCacmc1tSdv1EaFv5BYtfEWoeuJA7hY5jR9H4pUMYgzyJZhgNDZSM",
  "key22": "5oaTZUGd5abWagkvKgNLY1rfgQ6fKdabf5nhEnKfoX4UGbufJxLH2KZJtHemkAr9WBXqxHFDeh6czW8rkme23NYb",
  "key23": "5toSs3fF3A1987kXtfJ66YxFGCGC9T1Dv8SHGSLtaKTRau84g4fpdJZnQfTPZS32RrMeQ4mkJVuoozM1eh2F2u8T",
  "key24": "2zprvsZKt25fog4c28wEmxa4PDJcu5wRmMXeNwhN1zMCg7XHW8Nr6VEQaWCHpX7SbQHJz9MZb3cbgYorKZRjgySy",
  "key25": "2XYn3PssyEbW5jrNDRkWrh35A3bAgrrNycc4yR9Yw1FBn3XounMeLrZ6bBiM9cDbXDTvDFk9gSnV23wD8W36xkDL",
  "key26": "28xg7P3Ls84KvWMErkp2PARQbseuv7bCKdNgB9vbN7mAzmNMx9oeRLAyLJYDhcKewSsNRCXZFZrYRyXF4pQfGcD9",
  "key27": "2YZoqhHiuTUSxKxv1ksSFb1aJDekNU7be7p5tkbGVKs1qFXs3Y2SqLQnJmiKkVko9wyoyv1sw2VJkL1eRKhimK6B",
  "key28": "5mPV7Cb6ojLXvrVKYR5GAWwYEAp2Qm4SHoNT8zhdwG6M7PUdPBgK87ZM8kRMqHce9xWn4WbwekEH7M3Rn6AP31i7",
  "key29": "5rr4jXBBP4tKdYsW3AAa8gDbvkbss8rXgVik1PteUpJvSADw2Qek2nJCa2EYcAbc23aLcfabPpB3KgYxNBSFjJQS",
  "key30": "4gJDL1uSj2QGh1oe8pHsH1o3TeaSEqDsQiJSDdVFPrDhzM8YALNzWi25MtfjRg8Dn72Bkhu5BQF2v8Dpf5BjQYzN",
  "key31": "32QGeWCDtQnXjdyTkkubYcugzKEb6M9StnXVQezfZCwcdyiVDcpC9HcDpZajTYp2QbDFRQ1B1XVthkAhQ3pXqFUZ",
  "key32": "2D1hbdvBapoqPzLHYqBKxoLVGCuiTb13tHaGWvSebRLuSxrcnSHGVTDeUwc52rrGgbmUVxLTjEFLwaUKY8wjkNwi",
  "key33": "3k8L3fyh3CfwPr5N19JDYxCyhbP1J9RGLTNTLNrLMYyRnFnGqF2qg7T4nJaGVo2TE2A2ntDu8Xon1SUSLrHVfkEK",
  "key34": "2ZiTyhhhfbjVjAwbtUJ5ybMeMX8gqgPXhE8hbubAuw7Ee3M2bUqAHsp62TfURX8svpcniy6WWK2yK2jjpNvz4mwW",
  "key35": "4Un1kfnYx8AqyUrBKogJkT5ZcY6XhAZ6iiK6EKEjXBFXXB9fG6L68fXPsKJ9rHbY8USYsB1H6pTh1sdaihUXeih3",
  "key36": "4SmXznc7iNZEKeiyr3zuwagFspj4GHhzfkRm9FyW1V252bcneYqLokKsCAuCvxBdd75Wb7dgmbnivtZDPP6H8grx",
  "key37": "EWaHw8y8azZboGQqQpyBqvRQPoBycoLpnw4uFy3ajhJSqUVWXBn2cDmt7Pf1fXchV38onGEpxUCgQhHcyrvjVLH",
  "key38": "2Lw4GkksjV1eJsEZxQP2zJWd8LZFvGBNtFfPJRr7GM3iQXhyugtJCxg7iyKMqQgHBbmpKghFuNowHe3AukjZRMBt",
  "key39": "3aRfsqSfTWE6bqY7QDzzECTcfRxijvs6DCgi5U5RLKFu32yoweP9gzEvA1HGj55NLK1boXXaKyzsYVqdD8u991D5",
  "key40": "3ZFa1Y8MfDDopaUfjWWwEgNAS6ZZLASGxxfBum1dHXkoEWpqShjeaNbLp4UiKdZHyDryqTyuHuzmaGFC9SQ2aqET",
  "key41": "4CStUNt43v9GfjbHam6AMDL2mo8uDLFMzbb9qvhZoV3d4xCU3vtdx73zB7CFfngRQR4bnxsgf2Dz7fBTGKCSMfBs",
  "key42": "4aZyB2TBeSF6W4LfiJsAN7EerVZoWcLs2uB6fJnUC1ee47vrr6xedzA6NiSowGpUXqLyT3rduRdhGBoTmwmB3kNu",
  "key43": "3WhWeA9MMWKcp7bbn7Sd7nsy4WRLNuVR6op52FFwWpfvHLSpgWskxirNw3dZ26Jy9SC4oJ7GD1cEdVuThyc5j96U",
  "key44": "3uy48xfDw5S8LEQzMcunowMKD9dRhnvtiVmmTMf1Mwvy2CDw9TWBiYJZhs9CDFYwUaC8ku5asbXveWN4ZBYmziZU",
  "key45": "3FfvL6oimfo2E3kjjnmF3N13345teGFaSXwGNZZDFdESxfN6BNGVVHdvZJQ87zzBEetK2bzneJe76eiCb3G4Lj2e",
  "key46": "28ZtPpYXsicc47Wi83P5UXyCY6tjBeLNkerLgTGEd4DJkDT7Bwzbk3UgcPUxYksN2hi98yHkif8FZw2EFij3Rq2A",
  "key47": "5T21qKpzfmnccYk7LNKuLywJNBwZhN9TFwaHYr6BDhnVe2G8qCjsuApY4BaYw91Z8jz6bJKRP9nPrT9esEoHSwXr",
  "key48": "3hxLkaPE9dT7Vck3DidRHzKm6igTYgHRh5KFUsb4MZ8YTFSvTv8Lx7zFnpnXc3WW2ZQbEeADq4A5zeQabuqhKbZd"
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
