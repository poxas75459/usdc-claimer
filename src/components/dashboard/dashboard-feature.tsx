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
    "4NBNAEXohSpv7oxQwoEJCxr56ikRn8HonaEv3r8VzhZkJao7idyT8RjN3DbA56ghvQbMLwn45mW2jGLvd9n3CQYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WL3CoUu2SqRg9aa6SNxApNpKbAFgEYGscYcpdjmjybb2c1i5YkWcmJPFCxq7i4w8Pf6kWDjydUseAuGyJT1p2f1",
  "key1": "35bzmXAagZ9ohG7bnUE1ahPhdgau6NNQ2MeV531ECmWYxQmMnWNppKv811iteJg8sr6kQcdrMe4tARYB7k4dRWX1",
  "key2": "31J9aQHpPHNLn4bFkrEzG4FQHY9Bw1HX5uHh2gRTrD7ja9VYzTGVvuhYfXTEvWPS7JNSfRBTkENfjvCvUH3nnCth",
  "key3": "4EdxMFnfKq74v6QLJfMbuwkBvs1njr1RTz2fV88kRTndYJ7idmXCZ1aJ1oh9Cx28qkVSVwm3JVvAwY51H1Szi5z",
  "key4": "64zY9UuWCigidUX2mSZy8e5hR6ZEPqsoh7KE5pVRtwY71ET2Jo8eXicGjXShvMNvkuc8NvsJJw6ZepacqLnYqy3Z",
  "key5": "4opyvXeo53k4jXjAvMag8umDbi5mpy9pUn1Ucz2ogJRPz1c9HaPNDxrEw6Ve5oPRB8xwJ67hoJ4AM2LFFHssogYr",
  "key6": "5CKSSDuBYKeUVxCvY8yrd1U2gsXVqgxJ7iw1PLSrWvRmQJt4zZ2Fxj82K9YEYc5jqd1qmkdBcC317QfLXEq4wpD5",
  "key7": "36YhiaTaW4TLnytGxahqLxdw1S4ZvFmJgrUzhfagayD1bAgTJvxNT5vjBJJCn763YWGYY4V7GH6sBmKkH3VBgWxU",
  "key8": "3dJdWLwX2ufeD3PCgU3zwepPuoN2QCEcjiensszqSgAebm1mx6QSvRjNP3GYBUemuTf9QEbDNj2BDqeMQrmtog5Y",
  "key9": "4hfJNSmJE1DUsr9RPtQ9tPGVFWEHtwN4LxHvwPUkkSEZZdM4qj3bgMC688fxT8rWSEYviKnv5LoV7Mn6VfoTBnzm",
  "key10": "WHaYVheshyW1cQ9FnEGV1Pb4oB2yiZVaNFbnwmq7AbkKM1VYjJoVs21der9WcijtJiHKVhmCbdtG5SQTZTb3fQg",
  "key11": "2SXGBKdTq4tRzMytjRh2qNyqigtN9xEMybGxjYmRwFrF4mKAJaEMGJ8WJbFoJrU9qfDRqbkq2LR7kPp7Pk3i8Lch",
  "key12": "67WPxUkQWMgU2ezUyVzNp7nLMQ3X4pzNq1fQEe8hTz9CHmWq25kqrK3yMd9qtJ5QGUXEieeTUwygFk3yxtBNYgoH",
  "key13": "uP6Bf3YTG1Nmu6jzrqfnGpC39PyGWxVWRTTca1BwNoa7PLzX2x3XT6ufJt2rXr9wGMnQtKnt2wfmTTfMKBvvMaL",
  "key14": "4UuDQS41WwZWa7tiVY8h3x8x5qX4dbEk3mQH4PxQB8q1YnjmNPsbmL9wCZAiSnTDZYWJ5DCqTcjcrizxqBUBpsLk",
  "key15": "2s88NywYpXNMMsyqaATBr4vHyy6CyacoqfJC1mFZRamFGcrPCwcBJ77uz76WbBSv3z6ku57ndQ774ttcrSZEyMXJ",
  "key16": "24NkAQybPqH4v3dDdtXFsAshZ3h15vHhzidmsUpyaYRZEUb5mYpXDAKZeXnunwLjf1hTaVJbaaPyGP29WFRQPitY",
  "key17": "2e1cSB9bYq6UzYdVtCHCnmaWu9Xn9Cn7CBvsFLdqZ6Po8NmNinQD3Wz1W4cYgcDdCQyzowEvt25PNwpbbF6FNnij",
  "key18": "3acLbvpiu25aC6a5uPecmHQfmsmkJQgzzS1NNPdsym8mRe5gfvZ5LCytHNofTS7to2heaqvcpaf3FtdkTDnSTTxf",
  "key19": "5p5u2NjkDRFi74U11P1Zw6zbScQQTUXh1ULL8RLhg8ipMruakgDfMH3g4yBC7TXfWQPNrTMgxHeJfRhX4kUMETY4",
  "key20": "5gqtS4MpBS6qsDVD9P8uuiwP7JoZ3sVk8GqVxmRAjJYrmf231fEqE29aLW3x1SAawZEsLNqssYSTni1EWWA7ffZ4",
  "key21": "5hnbkZTJeQFGjvQiMJed7pS938wkjS4omwBwMtQeuF88nYMSuwwmMH3dET7Zv7o2Bb4uK39fGMbypNL1d942GgAf",
  "key22": "85PxdREndXkGRrVrZLiSjuSZTK2Zq48icP4oNTKNxDcYag5wowzmeeso3JuMyuGvBfrM3fnJdC3L8euAdGpmZqi",
  "key23": "QEsuKW96GPfydwB14p8PmhQ41RhWiN9ooJgGzN1m8wuaq17XT5KXk6HVLcWyBo5WhGFM3BpZwWxnCkzFeqcQyvY",
  "key24": "5ex4p3sPcf7qSnzh4VVG9EtWZYNR5LW2Gu5z66UyLadfkT9jbmcKjL9ZEUQLfZ9qE4nmTLDXqjodMzebaaw1ak9q",
  "key25": "5GbEtqcZUt9fnkMHifHriydtp7GmMRPkp2MukiKgpbWbYxYGDDzoRwbptTUKBFcCLJrx7Mi4Vk4zpH7bYNKtmCwg",
  "key26": "4xgCxKXmnd3kWPH2RQEEik3m5EiD3dKX8udhutuC9dMW2aN82hjqFjJeFsH921DYM5oP86L4sdFusDwdC5gW8NKx",
  "key27": "2G8828roHrUBkcHhDC74tmMwPSFubJXcyFvpJmDntLMadjJdvGsD87jTk5h6zwWRwjUCZk3SyjEb77WNNCj4RoPL",
  "key28": "DWvK81b4SAkVL1DVdWBkAc95Cqjf7PyKaDZaMxgjD8ovk2EWgTSXXfdJmbYy4cRZDDev1vzF7GPAGesgKj2EQHw",
  "key29": "2L6X7qM47vZ7GveYgfx587fscmZNpTsE3PFHKzeMUHWxkCofBxDDbUteEgBUy9ZVqwj3DFHSDGVfjveNQfk2Xw9E",
  "key30": "3Es4nfZwGkJXsb84CoGh6NsQhSFeSPAgXN6hqTJXmBD2QPx3vydSWiJ58pr16TuAjXFPKnY8NHw9ky65MwwWVhck",
  "key31": "2YAsyiYhNazUNuZrqYJCRmgAbS5wbxVLF3LHn2e5w8RwhQGU4vD44xiTZt7Kxcwxrw3mKnmy3zq19o1VGWngGSvN",
  "key32": "5iAZg41tLMfnG8z1G5Yn2s1gaV1PVwp9pC6qSZs1ePyBJvsQk78vaaq8A9v25ahY3zjE4pjxPfyJCWd3GSQmk4py",
  "key33": "ehhwTH4nE47bTkACUCXzXhDcKJRfbdmeW2uA4ccdHTMNin9o7gEMMzbXUeHxLopD4S2y8zoizhssLURDFfoE7ae",
  "key34": "5fkKpjUqbkjyLEkKYrmecUiAD8Z9fzd2Sz5HYXnKrQ8GXZhDtbDddYJqJc6sM9JJL4J2z6Z5hny2CYYzRCiMg7V3",
  "key35": "2kBrKQdKH6aKpByfyFT5GHCBM4dDKo4BLkuDPJKiy7VF8Xc81QBTo1295mFpYiqE5jMr7UpASgamhKHi3cWBVCRc",
  "key36": "2wzp16R4U5VEjn89zKRXLFzrps2jTTHiksbE78GoznkLa3UpUyjaAd8WDJyaHbFkrYUqBxQGTc5dcCHVzgQmPeod",
  "key37": "5NcEQbcdYsYBokpgAfGdduwtL888Q5NPLQoiSGxRAdLPYETAjdcMFXuGYcJZrTM184287pBheyTob4WS8gecJFGx",
  "key38": "49eWit96CZ5U4kA3HmU2Q1F8djsidRP68agZWf38q6R7tfJD4TdFcuKvJZqmwNfrxdSpduuymWLeq1WytWhrqtVC",
  "key39": "7b5KX1fnauZhoiV8BXsHatj83pywU1uGSR7R8K2Ue4uz3c1R1jwDannEoCpz2JBvVNGVd36F4Sn39Tgc9ipAX3s",
  "key40": "4X6zqZnM1B3kpYxHMx7bNuNRBovuvxjiDnpBxiQC3jo24y9ATBRprq7KHYNsiDqGx3HwdxJn3US7Dz5DZnrZ2SXZ",
  "key41": "26XdR8isCpsZ3B2PZyv7vJfS2QKdR9ZTK6uNA8optjvko2TZH3YvsW2YncNWXkRkULRjxEU8T3tk7ibQjntWExVB",
  "key42": "2wzNhhEwp9t9TnQe7tHJrcRDBuEPZCZyW1UcjmpMhu6XxbSXAvYQgj4Cqm1mFLh2XfDiYzFSHumSopKPBE2ubRjt"
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
