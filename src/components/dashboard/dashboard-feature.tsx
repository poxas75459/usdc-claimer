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
    "7aS1fRTwX2ZonHQaFYFt4SwFanDfBx5SiykHDTqNG1tMHqHxD24ZWtgv6C2z7mJN7LHCeVXT8cyWGW4hP1CjawK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EiuyaNcuL3AULYPnjT4cTXBPYGZWbKzf4f4u3AyC4sqrRAWCPmJU6vcENc3AuxJNGAaixFTzMj7a5ym9zy2CeMm",
  "key1": "5dAMFjiYVSn63i9jZkWMk1DbpmMRacu4u3VNGokC6KXMpGx3FEPQJjr6JYWRDJoyJqo8WrnDR5N7SX5BUsCyKD5c",
  "key2": "3meKrUXLiCUbQNhfRKTUYAw7eMG5p1Ha74pfF2gz6GZTbv6RedHEwzxf6cqgXAQRuaTdqVkDGb7U4VNouTFEVLUy",
  "key3": "3JGFLUX3J64HhE1bby9Jp37wajVj575ChQAEQNS9wXJUdeTbbAiXkESeExenVSgHSKUHfDPS5fMhDFkSEZpm7Rcz",
  "key4": "5gUrhWkRfqMir884g9yB5VrLSy7mENV4PJgvgUFKaJYVTSTMc8yX3yGC88xax7kVuaMw9sv7cMXjRLyBqQircc9t",
  "key5": "4vswXVVteW1hwBER6dZRgbY3Nyeu9fexLUTjqoJhaJL5Mh6Q1WkSsaTxg4HKtfU54QiqTq6c3NDS2TLeGopLz1f2",
  "key6": "3a2vtn6cgNynP42x4VFg1YQmTgvz5ndFbYLGk9uEpYFYKq8hpnGetChtAu865CMe2xXyzS5NvmNx2vncnkKKuPVu",
  "key7": "2HWLCV2mskoaHF8grhpuuXXvEYKWoZwaTR1qWsaCvdwxY1vfcL3P5YyyWAN6nMvJTo8zvmvBetTRdmXYD7ynNusc",
  "key8": "2jHbKKcnaKx1Ut4F6ewkHCiepMZJU2Xw4F1CSXKbKr2GBCCkbyAKGkjWhUGXGfAETMAsgxsAYunJ8cmSEYYryUVU",
  "key9": "2PeqNZVAS5ujZ7G9J7wnuAt8gdUZhYXBwfvahJwCbeSahUGVzTZ27mfBbMQZfEm69Hp1YvUgPB8ufkb5ExnJiQ8p",
  "key10": "3NNkEt5ALRuxyt8VvcA6KMU377uyBSWZxX631MMSHkLTirJ7FXAkC4kwMjXqH5qVovhm8Y8xW9dSzZNDoFMFaXpc",
  "key11": "5t43C8TrkKkWm6yFi9c7ojV78N8sr84EvChvoV6nqFxvMDabrrxLtk3Rh7WnwxvDKEXS3kPqYHWrefmPTELUy7X2",
  "key12": "HMee6UYi8bPFi1VPzLGJWqq86Di3c4hGUM5G7L6Man6SrPUoTnbQUicpqHe89Z4cBgpoJDDPd9CmXh7q2uDei3x",
  "key13": "5UQWtRrdaLVUV6mmimFnxPBh29jGszrLhSXLDWYpkB96Js3iGcSWPnnapuR4vEf37hCV4GrwikMJumPts87RuWq6",
  "key14": "VBGNKSMtXjsrpvozW7QHVYgdvRWQPDF9vHj8TeV7umHpAxJe369Y6D4mV6TdPi4c3tCb8faV6xmQDqKSJ3sGtKH",
  "key15": "CtBk3rem95xysWNNm63wPibYacDyWHNKCuPUTH86VMxS2z1785tXSkMTKF4qB8UTjd5aLeYHTnWdtqCCNnPD4gj",
  "key16": "4Uk93aEzCNoVTjgCjGM1oTDieQNzbmKm1Fv7voPkoQWHjYjsZEL3LBv44Q1nXMKr9YqJvKhdmmsLP4B2JV6U4ray",
  "key17": "5J4gUxMv9CRErimREEkQQYJnWzzLbNtXc9YNbda94xM8hMmJnue45PCCZHnW9VryJ9usJ2LubcxQFyfXcoByRasm",
  "key18": "2BPtzXmh5MkFUGGcd5LLVionEZMExFYkUXuNXuD7pEbZCvyCbWwdzXJULJckmSjwycGuspwB6VqUxhfuu43duVQF",
  "key19": "2mwsUeWLGfQ5ce3DUutLhPcB2guNQGCZStmH8Nk3CTfDjqJJVpcAw5h275wPHRLzZeaHnDvMue1MUHvVzQUagQT9",
  "key20": "raSR4NTv6t5r2afY8di18uqX4wwyFQmTYo1cwgrKnwwZ65SrpZnAsx2uBze7Aq9FeEz8E3iqQ8GpvZg9GiJyZJK",
  "key21": "5unDUfm65UDGuKMjuhJduwkBenoazoAc75oTrRBv2WuB7UyUzHHC37gqAfL47k1X3tTKWu7qjyC26kuz3Zi7ATmT",
  "key22": "23MeC1pjkdbGeQne5azJgQFZzyE8LHGT9dw7ihxGwbKuoRoBnGRbMJ7e9tjhE7PBS41SfZRN8rwYHHPEDSVFDCwz",
  "key23": "4sxXQjtqzP8s3wNeSUFFaUhxHHsyu1daD3cS2zcdqmyGQxQK58unu9dW3xGAPVXjdbqbJvgyPy15TrjCaL7Umq5P",
  "key24": "2ntAbmYNL21B68JQnWCjuucRr8xjF41BdN6Q2MX9tPJ6pK9SzzoR1XtX8afeJMgghNoKZBdk81U5SvURMxtuasFg",
  "key25": "63aBCSnq2hipmNcB2VxnyppzPmd2UxQkViDuRYrh8deHoFoKpuWLhbbcCFqBToUxiRAToRnLUXxaAEabFvXNmvKU",
  "key26": "3EtvZRCv4L193PQ1Z9PLaxaNGojL9Vwa5W8yURrgyh21pB54sExV5Q6yYMG8G5E4UKrukJEdWJ8Qp9vHLSJuzWwj",
  "key27": "23uZPS5rxpkSpM7iebNTsmUr1G2YzHycr3NN2sNYdkfy3EQDYVBnRCTPEN9Fh8ZFeNChMpJN4DQSbrBbkxiUhFR8",
  "key28": "44Gwq1PaWWBbXA3rDBDDQxiBmWkHYEP383kkwKaGMvSfnyFfKK2N2NZJDcwfxRAL9KLDhxCme8SCDx5hgHQFTUp5",
  "key29": "2fpKQHXXEKFjw6oHEi3KkXVYWgz8eucBTkmMWdACxTLoeg598auKQYYyFs1wp19xmPR7LiZHMze7Tgg7Wbcx8pAU",
  "key30": "4RiZSJez2VKcihoYityFKRqiA969h1hHn5Qj4pyYBVNtgJTPKvaqws19b19iUGa64icktMmeyw4kCNVmZTUKJtDi",
  "key31": "33owkJJdhE2FAWTDV4ZqpUpoXe3qei3KsZap3cmnLrK1Qbwh5MBJGSryestTEZV1AQ4N47tRmL46V6t9qg7a4Mve",
  "key32": "5ggvrE2WXdGMyo9wQy57zseyiHjzMhEAdxvYHoM155rs728GsSxPsDrgvWzdwPPoCZHyAqWv4F7fW1BBEHSX2SXZ",
  "key33": "GgewuLmcsnQGuUEyFR4vjnscvW3xVgy9vEbt5X6NJmUu8gtiM5wSLgtn88RzEX3tLrvRjYkfqumFWeRuSCmLK7K",
  "key34": "5yiB8TdsHYg9cmGTgQmTeqCR4U89ro6HoHQpDq4ey3oiMxDb8Tf9WQYAqow4oRSveG45JiemWdJ7qHvvsEztKb1M",
  "key35": "51fu9dWCyitG5W3DsXsmhXxK16CSCrsmixxwdKYeyYjz5ReUrsLu69foYZNGnLFKvcSSe9ow3k6b252gmYf41abi",
  "key36": "57YCNghkP272CB6JFAHQiT7auusCLGzAPL3VPGc7wKyxy6PgUxgwodjK6rUhb3gDDmG1UzcqVUPA36vrA1WFuPbS",
  "key37": "23tihEnUKmsR9NQFXkDJnagyY9cEVKJibFzM34ZsEMNTKp85Xo54x6jpQbFSg3dCkJTymYxUQ1NTgTSj65K7G8mz",
  "key38": "4A8fWQqaDExB1siqiS1Ra3SyfTj7JhammcK7RY5NoYfQso8GrizP4r4ePh3aHTeNsWfy9Y6P3WS2YZT86ER7q8g9",
  "key39": "2EhK4er2ujQLcKnXjksiEXt9SrRTPKCKLX1qYDdLqeQZTRhnMWhL3o2JaUwX5x48xQ7vnX5dGKqCNmbB6QyzJmDo",
  "key40": "2MJfjJJPNmEhVzBuTYtkCVMXM4sxuGHvxj31JrFfLS3Tyss5CQ51FZzRQrYtjBNxqL2QXCDkieEAfmGmYNp5vcS8",
  "key41": "hdozXgoTQpVq8CvSJjcDERa4tHFzCQWUt7AtUHDx9qYqS6CHRS6F3t3QqnuzdRW5iDaGaNgWxz7eooDQgJnc4G2",
  "key42": "4u4dud3qFfcaNWjRgYBPuLdf7VVTy2wzgxiiW4XBsp9SohtAHgbwAzyu9cC3wRcfkC2W6GDeNpUfX4xqdwNk8qLo",
  "key43": "2GgoVcSUa1DWbrJu1TwV2QZ4tc3orX1ZBPTPctUgKXfiCUQySqTLYipiHyXsBZGvsZe224owAZQ1GSbGGQQv9dwJ",
  "key44": "2fQBoMhuNN4TtVZNusb2roj3mHsTkMk8Neet3oT95Ju4ZQk7wsEnzZEhHj7T8776kxzK54eYpwsuzjhpPS8KHqkZ",
  "key45": "rmsxW7vt1zig1Jfwzg4vVoDF3AD7bCWpBBCHRQXLEJAKeUtU4G77uMYZK2rSpuzu7uzheM4BCSgyGxQbXbxQtcY",
  "key46": "4xNnwJyfvvC6uJ9hpAMedvQccrAYdvSe7boogT5N8zTjvzTeoSjCdgxYeyX49hub4SQdFC3DMRxTzjJY8PLgm7Fu",
  "key47": "42YMDAmaaL7LULTvZQxnEZXnrwVEtnqqwMx5prz6rwHgBJi9MMvMvBiK7jwtYjSyf3yq8965xa6JGm45cdRqj9nm"
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
