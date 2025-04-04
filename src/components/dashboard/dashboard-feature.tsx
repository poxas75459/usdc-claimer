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
    "97tTjbakpKLvGJU2jR9rBjMF8SNVF98JhkNRLE3xqgVw4pFqj37JxPtZq1R9WHWX664z9D5fySohHrRoD1C7Ewb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38VZgj9CBVxxL2XvsLxy3vN4tGjsP1oF9mVhzGFrD6uG7DkZVrHz5K2yR4mMKpTmads7rc6Looc2L4aPtpjUGgTJ",
  "key1": "4tPtJxUMXzNdxg1DqcB8HxPpsRP4KWQkiz66Tncw5WW5m8JDWyVSa8j69BNxTDwApppU7JJu9D656i6uioHBLqef",
  "key2": "5hDScfSaBuSpivukwQ2uzSH5spbbY68tEz3iU9fJ4Qw6cuo3fAnQeSXi7cMKgehD4BvSia7GkRzJBLm7E6kC6xp6",
  "key3": "4YH3N2xQzWprGCovCuETdguuYjXB6VCoPVJax4BprgRprrnUXUqQFXWrToAPEirCGhCPGdZiSJugbeEAVQ8kGcuU",
  "key4": "2AvN4eM2AeVSBBKgvZX4PWfcHshnzs5RxoZ234hbYtd7azkW8rjXBX82jyhasZCP7tZLNaU7kdXv1JmHH8AFQfJ6",
  "key5": "6kt627PPMJTaJmwbti3D5PYPZDjttyQzKTXEJJDmcddQekwkpSHUoacWDtKfbHzFD377EcYyUkJS6WTgvroKeXU",
  "key6": "2d6y2sZji6CvQVjseU9FpMpGh2655hxdzt5TjeEegQur8qAup8H21RGKAXkQaaezHpW4nmoKD9xHiKsnfkD199vM",
  "key7": "3Zu2s8dpWn7QsGToDmbvUWaiQHhjBYnzYW9W3diKDDXenXPtZk9Ddx7xV3MdRqxkFdivGB3MGsfZDoP51Msy5W5o",
  "key8": "4WS1rQD6SZatTyaxXCnv5cXFYVjaVJbJkTBRe2QxoiA8svVHVowDJQRfJkcovZPzW8hdU2487SuNHF57vMkEFZT8",
  "key9": "2fSox9W7u2LwCRm2qLDErj9S5owH5nPnXqSfCBTTpPD4fEfwTeGMQvHKwMysAX7wTvrHEcJQmdEeSKKhsYyrXnyP",
  "key10": "5iP2kTN4khPbyywnTWZPahGxyCJN7LoALoHj4YnW1diwzoLeiQfqFo5cyHqqhtVn6xmsctpx5zMzoHJCDKvbPGGd",
  "key11": "41m3rQjX9kWZPqs5bETHnkpsL6hsAUw2V751JuKzUvGREZDeV289Q2ojfZxKDSsYHAGZWFPW3hhUgKpsXXNayi64",
  "key12": "67PZsScyEzwuqDiAr8RhbuJR2vWFyh9pmXE6X8FrwRCUr9bG6hJSzsc8by39MAF4egutiGpE5enrxFAMw1pL6ng6",
  "key13": "27xACdrmBoiiYaprcKT7mUov4ShthZ8YvJAeUGNQLVhDYdR1Tb9itmyUZTkrkKfBaCRKVqjyyycfZDX9xE7k31RL",
  "key14": "3QeGEppLh1ru7geMzmw43ghbuW7qYHKZUct73ZAMugTN3RjLJw9waXuQTikiLL3i54NarGRoEz39Qd7vthYBwoms",
  "key15": "23AQFmLxuzAi9BKoKp2mNAxSK8GdGbDRs6RwHMPSA29cJXasUCn5YACGXCcQqq1tatwZmawewQDDgTkc86s57kPT",
  "key16": "ouE68NMLiCN8EsVwCeHTE3UNDKrbbopgjHif3RxsoUJbD9kPRTogFXuwK957JYaaGxRXMfoYid2WaCK7XAcWczW",
  "key17": "BT5MQNL6ed5EwCkLNVEUaw2bUTWNRpHLJbbAAZJ1BLsvCkNSyxTrq6sMJR5SW9oQBUsyy3N8vRRtPcjwtFuoCRK",
  "key18": "3AWqjZpStcs4AdmG4DvWRtyG4a9LW9dZqcFT3wQ3NURwQXzjstQALhzMGUD8xMT7RPTpKgZfvrvEyR9sFKxFdUfX",
  "key19": "2jbcrdpRLyps9WbuViZBPmn9cYGsDva9RR7xFvqh2ZzJS5UHDX6DVNDxYtrfeENCVPMRg6piZdCwH4XbwHatvJQQ",
  "key20": "224Q9xGDc6bSbeUEzW2PzW5XhogNLVfXiRkwWZuuAE1gVL6L8Eh3bFJzrSkJmsKSav6tZDx7teN7snxJo3UfbeKm",
  "key21": "3nLcxnpEkAVYZisSQ6SsVxwKsDRQV2PcYpP5NUbSjA7DVcRyJ2whDuMSpwnpM4phmsp7ZyjMhPVnH7tJ1D9zHpYo",
  "key22": "3aNeUwxHtSonNB1cbQtC3DdFW1G6DbfBewcNjRn2XD8ZqaHKus312AWiUKyLbBJPYn7EGJb2iRvcUSJPxu9ZkUni",
  "key23": "5ueS5hgKAAQvBs28SiNTwRzTYpxgx6YXZ46X5rYThN3xTDWNRRDDhRtfhrQSXPbzwJWfZVpyaqKGFcfVoPKkQPNB",
  "key24": "3W2CG5sxU7ptKuwLj45yGdfYKZkMZZntAdBUHS9cR8sMQb6hRZssU2C9xHXcxHRx1mJDr981LEdn4iG54PCkePfb",
  "key25": "3DQrckhMjpmdTs12exfayBkw34YuShMQxkDBBAcDt35sx4nwyksTadpdFku8UghL3dA13znC2JF94N1QpmEv5y4J",
  "key26": "5KSaaWcqvrRx39s1Yxn415L76XHUbonLFpzj9X7adQizZVVhi9q6HaqSHVe1W1cQyfeomC3pKZCnHRJLfv8nuPMk",
  "key27": "2mHxwM67xP2U5pnt8pfhx9FALfMdAaGt9TxzYXufHyPJJyiSsv3ZU54Gt67t5Y1BuUHCTN4fwZAAhkVM3hNX2YXG",
  "key28": "8nKMA2gwpkgWS6ERvf2vnyg6GdZermwXnVuCrppfLbHdaUwTWArcEWJhGYJA4ZcYYHeMznnHahy4j6pfQKxrjyz",
  "key29": "63V24NGq2AAW1bzKodvuPUkmsc5UGytfngeZqiNfhJ9CHKmNv43uF7srW3JKc7bvQ6AhwGS4DWiWBfgxyDxeW42y",
  "key30": "2wX5zySsTjxe8tWFMPuoMB4zwSnETpq52dg5cxzvPt5mezpBGv6vhj5Z3HVgXTZ79Tgzr7UHjjXP88fbDeTpwABc",
  "key31": "khmq511Eo4ArzNsfqkUNtTSUYDSDgCAgkhkGkzuk9TiStJFWr5CydjmCSyp3w4ehghLWuR6qqGygMoqyihbjgbq",
  "key32": "3NSKEmwBE6zWUywn9sHXBxBXQ6VzvrraZqp8tMLxuAhh3iLjUjaZkBnjzJx2z5GbuNd8CVRq1VfzVA7MqWKkmHCr",
  "key33": "w6eNWZm6hZ1QVotAkdu7vDyQFuYV4EEZh1FsCNWFQBzzCJLszxUmDp9mTnrhUPbAGTTcvrDEJqiWtYUKu7YEqoW",
  "key34": "3aosMtQvDcLQsBB7mSAvc2XQzT5ZqrK1ji4pSY44FZjqechu4gtHtx9kDsqnL2dRbu9kLviURVyzZRTLNPRrMW1L",
  "key35": "4mjH5nbdUNBQJrqu5snQBu5Ga4ZjXKXjxzcvfEFreZqwkusypmEgkpGd4kfrHHEGW1cq8AZzM8w6dmXVU85LeJaG",
  "key36": "Jzvnt2X8ApxvWxAGL3k4B3qeFHsj7VmXSVkBUm6zyBpupzSqxJhMR315k5G7FsNsHdhrQoz2bbtZek1bddpo7r6",
  "key37": "2mFAtWTLxgy4binsrmJZMnMf7bQUyGsUMFFx3SxqKr6zKeLBxS3vT5pWgCxA5UpuJQXcop7BJWnbC4k1Pf7DPNFD",
  "key38": "5nSPaf21cQXBHZ7u6iRXjf2KNkVyhuaoSCN5tKEum9gUeRwzv6cVb9uSmnuGgtt4Xf6dAN3Kr6cS5g4A7h7aTj6i",
  "key39": "3wpuBLAucwBJgML8YzCm8qVEZDUBHYhhrJHbAsdb1nsFmtr58kkkATM5kdbqXy6VNM7HSTHUqVUJ1fy5uPtiW27z",
  "key40": "ReN1CopJUZyksTaCqw9PSkQYjNtCyoX3MZ7VfxfUHWMdiSJoQU9jZQKUzw45Akc9HRC2NFh3mQAEC44GJ3pa27s",
  "key41": "5wGxUkYes3sd7LTR1Kfgaq27m9XaA7VQ2XaXNkMfsvFgebjm6g3xtctyJgmh9ZNG25hmro71AAgcffKbTfwJMGEe",
  "key42": "9Yxf7FKZW34nCqDUooi2EzrWPN4WyM2pZ3JD55N9MSuPFtkgwZ1VdXJjyPrQHuxEfnxrawAxcpG5Mf5QMh4uXKt",
  "key43": "4ykouYmurbEJMUKXDvuDQ7rWPwWs5EqEtoJW23T65bueBbs3QRhyK74RLb1dQZaBqfvcFk2WkApHNQA5UYGcBnCR"
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
