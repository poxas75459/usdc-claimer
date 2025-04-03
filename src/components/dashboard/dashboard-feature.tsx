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
    "5Spwmw8kDfSfrCQZtRLntj2ueMrn86ccRmUwpu4W4BnMqgV5Qf8tssqeTYyfiEyQ5vNzdz2vurkgdC5SiDtECBQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFmHwywqXj5mjEmNnJySKF6YktriKyEXRYiEaxEmBoaNw3foPq6XfpdUXStgGEAFEGT18hb63raDXQAWpei3t38",
  "key1": "28DTNJ7RM6MwYLYnfP22PC8Je5qfA3bSetQMSKinqy3KrTGbHQ1aZhXZTCZn4WZK6pVF3xyQrQGNidF2S4iLBCQd",
  "key2": "pVUAvz4xNkp8FTzSiE9kNnkfaRAbREWYj9y26Pojd5fubdqzDE6kLJeksRjaMMcBFXQsFQhw93d6qfi1uS55MUP",
  "key3": "4N3UEyixVJ95TfsSoGS4uESJMPi9LtxhNkG5uU7XUwjsqdb38z1rWiftNwdgzAPSzq71qYBoi4tGeThWQsEpNL49",
  "key4": "4URDLHjSAEj1m4rdNxaKMuYgMtx9MCFXMZ1RPVvLxs5x55VdYkJwjVz95jj7KF8rpLHTpnDMvx84qrTkEkbhyQ6m",
  "key5": "4m7phc2fCT2s5D3yAvdLHssvcs11Vw2deB3PvhARnKLEub9gaRyPfpkhwLevydAo9TXqkXErp1KQX7S9dxtLoJAF",
  "key6": "5eir8vrurp1Ka8yzkw3Ncy3P5d7DHd95TmBxiJCdVWJxsv2cByqQagu9cKKSAteiPsEtuMFyT9km5pXRAKZqKhsT",
  "key7": "3DuWM8CuM21LHeb5k7L9M7wqhRYABpYiCxFnAxpFXtnaPoQ6K9Dg4TzNxw124TDWmg8Am4H8JYxwnMkHGKhswDis",
  "key8": "3RMPwPMH3Gs9GyXsmYgQGVgzmSJj4ynBoHrhRjJTGdjvT9LzQiJ5nyxHYKkPSqjxjCpMky29kGuPMkiQnBbkjvHF",
  "key9": "pkwMyMVoa8EaXT1GZJDDgLV36Dtf5xCqpN58q5iXjFR5NqHi1nsyV5q22CJdeGq15ypaauyrZMAmzzsddH3MNmq",
  "key10": "5NuaFEoWAy2ZRJhArPLfevSo2jN68w1mvU717TfQLr3ZyybX4VWaABac3QEhGYZG6FxrdrVEUgujqreatSb7EKMd",
  "key11": "5ETjWoPXe8fkf8dDxvTX88Grf6XKw4C4uMBWe2jR4bCbcuTcizyr9vuusVRGAsPjzf2FBUvo8AWUqE6dS7Y2n4mF",
  "key12": "3jAbCkYCiTPsW2qyh9fX6oyjbHCJgrzLjMvesmHYviYTsDj1gnAnYdn4wEC5LpFHJ3W9pSe5cz9otVFVdjXfTcZh",
  "key13": "5px3QTaEdV4GTW7MY6MY7dgBJaDFR336zGSAX8QeV2UAmMPPW6Tc8QTXfirVw39dVum5ukrSMtvoaf1qxqtwa52S",
  "key14": "3fu9TCgsqAc1Lpkn77UfWQAYy5XZrFLQ2ZaxBzY8mbQ6xFyPjLCXqwEXn4X3mNM83qM8aH5QVAFquQfK2ry243Zw",
  "key15": "487bLhqqGH1f16yNEveoC2rk3HhWHerYNsF5vehFFjZKnwGc4me87Gcwq7gTcgLHBgFD7G6doqJpCapYdyVe1eLK",
  "key16": "3vQf8QVbKgPbBXj7fHTSBr1WLA8an4KujVWN8YzDyyzdQCScRxnJCV9hEkiCD2d1zPr9iJUQCCYAC7AQtePtGxjv",
  "key17": "2ck9Ui7nffBvYvawVps9oDZbwgScYj7GFq1JHS5qeuTvNbDqUY54WNfRS941rh2M5W27xsiLABkbv2UPKM3tskBt",
  "key18": "31EKTyQKsSrQVgXS63NjDbuqxMTMdakrqMa3qcyAMDkjf9z5HFhJSDTZrysNRTnfi69ZPNpBeTTEy7LmyscXniJM",
  "key19": "3bPtRhREfqb51oq5PLwmKZAXVhrvVet4xByzd4a4xDi96gNNSuU1eowF22r4vW17AsJzCj7xg2jN7yyjVwWMwj34",
  "key20": "5N335Hzn8hFzR2WU8VphsaQ9ek3R71qEszgE3kpizesrgjpeZNoM2QkoUSDzuFTwSpu8bvpiCFvtncGK9LDvHjRc",
  "key21": "4hfgNPU95V4LoTBC5vM2mH7pVHWXA4R3HmoP67iLzUrdwdSzvwzqCT999L8BP75HrDanZ6KqghbmSYQJMPS9d5X6",
  "key22": "23DhSphjF73SJzCM8u8k55VefB4qjm387ozC5ZMH6KabnUzkNfEh4NUNCUZzddZ3HgJDReJWWbdoVJipXTaaZkzj",
  "key23": "4h6F1Zq46pVKythwUjyBeRzyy24v6LeAojWe6J7PNgHv8hbHSzf4PofwgkdhoV2m43fGnvShWo63PpMXgshr2ghq",
  "key24": "2s9MFSv5TUSFeVej28TmeLPsJuJN4uGELaXobfGqFB7oZ8Vs3Tp29rA3CiRbiLsz4NBH8tdTV2stpfREbF5V5uMs",
  "key25": "3MJFHxLWK1X1J7cVJmb1y6pd9jgGMR7wsJByV3BQHRR2fhu5AGabYYafnJ4kb8f3ieMHEDVwpAzPmi3y5qW8wfDM",
  "key26": "2Y7ztuw7cpeQ3XCkLu1kPPhasUyyVQMNYH7eBtKaJCaQQF5U3wWTnCE4zvoKVetXi4wxQnpk8vLw6mAjxGQFuSki",
  "key27": "8nWLFX8JjgMScUpEkEy1tnQqpG95wibCFrSz5me7ZMGN3yYPv8jqpAgxdCgqSP6WR9MkXi5KtjaYUNsrPkG7Ysi",
  "key28": "3NPmLiVawGrTZ95URM64iZ16QqogSCgg5LdG8X5VUcBzTpcwHbQm5bXvZgUofzNaDRUxGwYpi516d5CzcKxSKTF8",
  "key29": "7X1euZVxwez9BVXeGcG4TseGSsjiu1Gyp396HK3QXAX2MpQAMSn2CJJSdmgnAzP6gAPuYaCsN9ZPu52CY9CgS5E",
  "key30": "576CmR9MfbswUP4VEjnDnC4FtNVZPWvBJVpEfxt4k6caVuMXsw65ewukSN8FAgxP9R6Qmh14DqccdscDww9yY7ba",
  "key31": "3wQFB6KnZWM2NwSPUx6GRh5LhKGfZmvSoeJpmuhfXdnuGKaAZvdcqS2siK9d9HdEbv2D5CE7j41mpmu5q1EhRNiu",
  "key32": "mHP9UsCreBfnxQwKCJyggP2CGfXT4krcaAPvvdVZeoNUCoRzg2ujMKxPo6c4WkKJ89byT3aeX25sybq9XYzuiNE",
  "key33": "5uRHwkaR4YZtfv6aKcZqh2rEpDW9EbRxyu15Qg7pJFzW37ALpRkNARcRHUdWZ2gDJHzLtqPHXoPhGB5J4EJNxMkq",
  "key34": "EpGdpioMVmJpBLESX1PBn88cBX4aGiLhUVNbAFXvFnrbmYpJXz1wKLMyMw6gLUiEqxx7osarP6CmoUGR1qqu4h8",
  "key35": "2SFm2Gf6x2PaePtuu6boXpLNqfFEsE7NFhgbZwc98qqMHG7gQYePiUQWqkyv7qAR3djWS2skmyguRew1KSSmxnWN",
  "key36": "ZhC1AiUNfF3TFyXYxm2taDXVCGMuELE1BdbCzBQ7QuauAiNP2azYJpiyJmycvPQ9eaQ3FWKRgYHvc8XE8xpvUPW",
  "key37": "5AAwG3vqAiQxPm6tHbxxUc2XPAWK8yrC5V6B3jUTmDTyaYZmqD2DeHnY43j2doXytrHzMLNgon6kmNpCP9WkxSMa",
  "key38": "4CV5jnMsPoSrPAetHnYs72C11pmP1UJq6uWiMBSP5G6DgQYD8TzHzAraGZCNq1587tN3bcAHhR2G4U2Lvt35MgiQ",
  "key39": "4WNmxtHhBgriG14jXJRTdLBG5Uj1VJZu44jaSf67br6Pw6JJX9Hef2GzkVJyDkRbt9V4zjQBWCB9KCjNPmuwRxaC",
  "key40": "3QtN6FkAy7gMvb5jjSLfCdSPMWfU9MtB76JgfhwvTd6ZccywYReBWyCpCf5LMgNr5z9bAS6c6ZY9KMmTeRw9snW8",
  "key41": "88YPG7UX8uebR9HkYBqHg4ufbHDsEaEDq5AF7cFDcRtmdY1mY5GaQ4gQ1vjNyTrTB3qQE9diQu7DkLiFQwxARaw",
  "key42": "jpHvNawtn1Nj8hH8pS6t6FgxSmx23B1zv38nBymw1QAgrLr4ZwcSCkwCfCuVuyGa2kXQiGZsJKYGj5Vr9NPTZ9w",
  "key43": "5o4UGBodaxgsaEDmHQqp27V84DheAWHBMnGhLGEi27bx8LZW6sEsmpkyHwLC8654JBKMAMTU85xHb2sqqk3n3Huy",
  "key44": "2NZtAr18koc9JWntHxnisqDfq6Erb5ATidU2JGyGFWooDb3YVp7H48V631AXNhppm16ocwPGsHuUUJdaFy4jXty5",
  "key45": "63Q4jDzYTfFGZrMNn1oNyfmLnNFVioHFFKafZpVtFFCuM9HmpFEFaiETwUpqvax6J8MZJ2dP3tHwD9VWb91axPSM"
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
