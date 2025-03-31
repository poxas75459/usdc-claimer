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
    "4Woh9abzY23ZynzzfpzygLWPv24eEWdevLJMEHDHYhH7UXrrjL1Rki84iHTeHALPGAL4VkM2Kh1Hpy6G9CrXHgXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "248G1c7y3K1uU56nkukmt2YBjmA1dh1AHo1j6MVcQqacDKtcgk6UciU771DkYtkboJwVJG5uYew8GRSyL6SMF3Jn",
  "key1": "4EdSt37FQbMMkAkfUBoBGHhVYkFXWQkLpaz8triqnErLemmMi55K1riDsvDQf6QGoh3ySRJ8TgpYwNuNyiHG8frG",
  "key2": "2EeSeizTY5w2bpY84R9VzWA2vygcESgsxrd8tZQG1xAHvNoWwWFkihmiXkqGqgdGYB3n4Pzi5JG3ct49rKNBaJD8",
  "key3": "4WPNKG1jgkRr8tVWSvZ2k2uRMkLih2CimPKuq9Y3QnvpWx3pL6VzUjkMqJfA2LvxRpL1jSuEyRx1Ju8FSeMyW8n4",
  "key4": "3LgYWihDJiXt9z5TA8usa5kUC7aWv8psWTCK4NvRLoubavVW65JTRNbh5f8NWDDmXFWbDqjnjbeSgWyZzTssFkTK",
  "key5": "2aawFG2WThquZPmrCexfx5wd1NKtd6oXwV4KSBqJUUMohw3xkcKCyuvJiAhuw9F7Knv4DDG7pSPjaX4sZXBy49rX",
  "key6": "2zKNf2YnrHZfaFtzACoPu4xTUoh3eKyGzFZ4LLBoMoWyq8QtDmNocod1Jqu83kPMUHV2WmNZR9Sd7b4d6URpA6NV",
  "key7": "4k4uVRmYFK6WkW2Tn92BDvecbCmT1pF42ssbbK3A2PLkAaVSoZ4BtNw3iTufG77FctKNJKnDtyKKUh932ewRJ9xn",
  "key8": "WiP32rL2tGZ99sk9xPyXjrkaHb4iDpJrgVt3gQjNB3Ju8FM9etN5aE4WF31tX9pwyaRAdhUWxWYf5bSfFoFoww5",
  "key9": "5fXkHmv536onkVwJqLdYe53sy7zVGXvJJMoGTxVJAjx8dQBDwBzktVu6NnUMcwu8AQ75TBLjsw15etFrdCqCdPb3",
  "key10": "4jBn79Ti1f5wnqG87Z5ED8VaupzcjG2fYKDUkrsXeU61712t1QHsUqJDgHFJ4sqmT2ZvKNUYQNK9TdetVHwZRKfU",
  "key11": "23CArwVf3H9j4DCJEkPkcXbcgd4yBgMNwYrnt8nEQRt7Nor5Dq4jMcuC7kPDFBoBqWuTfAV83RhhUnwHo6QXm1hP",
  "key12": "63CSJ7oigCrgQvjpiWwuiFFsghaXa2j2xhqkYN2gNsJbX8DsoFsHMraTi1Ayaruigo7hhzQvD8hig1BpC2LT4juR",
  "key13": "5CfZxxCp7511hhYw5ZSoSbZJzhRRFySc5hgBsMuCagXfZTo4ntit7wwf8C5t5kRVQXUQyazMwgTsPi3hjcFQ7Ywd",
  "key14": "4VkuJCafAWtdm6K5w3G7hrHP8C2xxa89tH79k4zn95izxEdw4kXhi6mJDFdup2YXuxgWFNppLiB7tSs2eB7c46E8",
  "key15": "4Y5MTkngFCyeT6EA5cJt19Aup2aFCHuJE9T4nwnbPZn6A3AhsFgWT5jNe56DKWAvtWH8ST8zxkPZBgGeRzuBTTmf",
  "key16": "3ovzSqdMtYauVfnsPrBmKYhkVDH9wF8nN5WkpnRDsfqdgc15iyZpVaqrVsB772oJ55iuHqH1P3iHUfBDnB68dDKp",
  "key17": "5sKNRYU3CVTvuWXGvbKzt7gUsYeAZnJ4kacWkqgMdFrjqz2Dy16a3FoZ2R5fV9LEKm85AKqf13yK9MD44gcErtCu",
  "key18": "52em4YdM6uM4xeTiZ38yHDuHS28K2oc8QDovsXyxxNhbkKgmDWXUi2MnwExuBT6YretgYfZT8vTesdY1h2SW3RA8",
  "key19": "5hEtDT66B38Rijy5cBV8bzWRhabKh4EymEUVSp9mvpJxqxRE1p1qghQKFX6CkuYTYBzeTbC22zhvn25TqHJQAaXU",
  "key20": "4Pm3uX8gt8hLZYqUc8x4UM4oGiDHeXNDc281sXUpvo7BttQtGYGP5UNLUFKA2Rkzts5fHPshasBX7BbXhTJPobgr",
  "key21": "57kqBcn4fQnkowM1NPaqz37DTZmSLay7SsDGe7ZE7UbddW6CVqNYj3DbX3UDDy4v6w3sBuezuSXLsomeCHXkagkr",
  "key22": "3ibxV1uK7vUMH39ki4AJcbSLtUJWSgZ1rso9uuJJxm8NLbGdTvGNvzi3WEvZUDzaAMJ2hJwcV6KQPYvN2FkSyiTc",
  "key23": "38WYoZjcGpvjHvxvC7RiRLDnGozSupDEWnAPR2AMZGdofBa3M4RRjnuMzAfRcxnn76wgMdLtgvhWwH6rjRNQqaF8",
  "key24": "2ikM65ud9XfAijppEJTBR2NpxYByQo9ctcN1GBCXtQsfUBDggHuEkQncG8oDjzkvmHSLemX281FB7uTA9fNDW48s",
  "key25": "Q4Qft6fapnYL2WBtCdbRQzKdMqeQNPMtr97DwgNqkVTnMkTt4ciuzhy4pEdf1cbERGVYLeGSkjhUAosZCv82b3Y",
  "key26": "5ENWdi7cpdFaxWGQGhzL4HTcWeBHsonZvMKpz3qWkb2GMZoihB2iQvrc77dVfBQ9mEZpmWjfbJCpGWrQtdWDdaGo",
  "key27": "2LoP9S8YSSCf1JANHmoQn84rCMzHvu5WiEdSS9eY9haUexhH4wQkWMnKacTPHYsQ4XXRpv73GNB9sCdSr9AZEaxq",
  "key28": "2oCgbBXRByzMU4WVAacijXAtkPMASW37aVHy6yHMcofeChwNTRTPq3C4LWuAMybes45KgiWeKBU5bYxyP6Fpwo2f",
  "key29": "2Uq3jXxKaLrSvkWm3u2pyiT7nsMgCHVxm83XMwyrJYqG1k5nqkJrkmShEYVxEnsrPoBKCkF4ScceRP6aQLGx6qkZ",
  "key30": "UgZpcL9j6CDpXASUqC5Eb72aHLLSqmfhjetpKp6n62ZuMQrAKTphyEs491MrR8eofDJchLAAb5EBa3Tbx5DSVtU",
  "key31": "2wNjm3Znw3qcXrtuU87aRKxFxXcivQsMv9m91N1m7ULdoVGeiPMp5TR4Pk5at26AUmba5hh77W7RSsZ6sBB4UShb",
  "key32": "5Lv4ABa475zmmpGQQWdrPr9zAQmopgdvKLYgzeG7DCj8jWvyu5VWAZoLgTY8AhF1GMiiVsU5sqHinpSSMjfCKvCe",
  "key33": "beE3YUWBtcBd6vatuB5XgsHYyGdCLxZPjC96YwsCLKrGFAyRkv68gAvC2zPNLrR9j1FcH4GGtU82W6ksuW4jKjg",
  "key34": "2NVxZQYKLkX8A2ChzCrZHJ6SrHvtqhxhquEXs5MTSfAey1qS7M4voPDpJPmJQrHuL8gZoiQtnvZHR6QXZ6ASqQHP",
  "key35": "4dGW1ZbxHPTjbdJzAWHaUTH1WChPWdJouKhh1FqsefC36fVg6MS2yoY6p9cmBNRd2Jd6BJYSsP5eewqvkAx5o1S4",
  "key36": "31Se5zU7VyywdHetN31bEDzw4BoSeeRypbeDfT8HKjARsAPKkkd7pBqctZHE3SdGd7VujcF9HVgw6Z3GTiWgJiPY",
  "key37": "2F5cN3gy85zyrMtGWHaiGfXnR3eq8X1TKTdMoW2AbDxbQRNYEP7X6xnAebb5yxuqn2dyrhGox8PAtkJ1uBFeyxMy",
  "key38": "4dPs7Bh7ERxkPKML71FuzVkK3Jo29d58PeiRm4na8KjHP7udihVNu1tzYanQWLfDcPcS77isYMGxWJafVArgSTAM",
  "key39": "4dcgDHD1vqCkUpHvHYNC3XTnZCP1jvUb3Bc8GpGHthYrm9dUEKEYxJSm49v4GVMoz7qzwCZKVmAv2dtn58itzSnm",
  "key40": "51kYEcqkcPyaPaTbdbASsy67vbyfAvb6WGNXoxrF7yTeobF2wgwBWrNqvVYZt3VBZ4Nv63f8WVsesYwHkXD9hmrD",
  "key41": "2rDwRovseyRpdmXD8fumppZia88b8bYtq2bK2SB1dJnX73aFxaTRrFJW7Nv7GRHWrjmp3XhZgjtEeV8wyH7UgFED",
  "key42": "4yrKdXhvujAae8skW8rJYkU1cyVEdfrrXivqFNJtbdHVigbZzAVz7bCfi3JrnxiUrEkeQFBTTFvwr2Xuws5hT6Ke",
  "key43": "26N68CRUeXAy9azaBZX7T6Pg9soe3B5pihNi9QNj1zrXYHRk7pyZkcVoV5JKUpMahPTHH995jJyw6umLJL9n8Atj",
  "key44": "RdLfq8ycsMDEhsBQfMYGibkJ25c8JeeE6WLp6C7o7bRvxCTC5E8nSC9cz8TsUvVx7ZtzwoU6dxQB46GiEqh4FbZ"
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
