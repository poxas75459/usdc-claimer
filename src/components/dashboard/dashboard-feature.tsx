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
    "Peh4sjNsuPabq18k9Y1RmxZcH5d8fkPTWC74sy9pbRbsGwwuvbWyFE3ptftKX1oS7C4t9hfG4By2YpBhBmPmm5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQVknNwsLgVDMcanJVr4mXuKCgWXJJYvKhFqn82QjD37JcfXLvDFoW9nw9Ytg1YajCWFvvq1KnEdPsGJa2XWZ1x",
  "key1": "WvJWT9ntwjGuh4xQw6nqUamHKrEdK81ua7QdeKfEd5MyXn5SkVnXriK6X2T2j7TVBQnAUeChbMkhMJ3DXqw9nHE",
  "key2": "4p58GAHxwQUF7JRZiuMPiTpHzkyZyVnCYXiHhCYeBVdbmLFkjW4SfhZzxNfg6VfDSKPuWrfcuSsCvNJ8RvKT8y9c",
  "key3": "48Epwr5MF7idYy6WefqyjEgH28hWPC8XyiHxWiPxGzp4vwcTSPVhfpMYiw6DNfRoGMEFQrfMq3LAg7uwFsVFqPvX",
  "key4": "3q2dDxQMMWMhjUXgukXCbjpcvd4SRTgsimCiVQDrNDTkVu3MHySmco81rV5oCuHLFxNY2FmFpoYCkrgBgb8Jp3Lz",
  "key5": "5AaSdgc3MJTMXR6vbtEeHbzPkTgDawDCat2witUo69FhbMXBTcw3KvZpc1BWUvkbdEDmFYxwKJKK9C6B4feNf3WX",
  "key6": "3fEpYxaDdFUVhLK81R5M2Cddy9yyqwieHZG8NYgtN7frApgQV9aWdH4TSTXxvab2CzjRupd2n7kkNsTF3BVaASU9",
  "key7": "2nMSYKi62MNAaiH5Y6bBPrkK3g3yyfdssFPAJ6SaGYtkzYqfvmUGozxpXveJ4Jq7t8MxbxRsPrDsmqVZTFGiBRru",
  "key8": "4D3PzQghQxHBgQ65HxBQdfZfFafXtcnNZ7WyrFCNxvTEPUvZsD6QNWNzcpuLodjum1AHxvWWZoRsSgtW3J58DfyK",
  "key9": "5R9ZJN9ifYjdcN5VtRR4B5exjRyS1aNUmTCSvzfrBz1RZaByuJfRED1633v2aJZbf39LAuUZvahsewAu5KFEgowN",
  "key10": "2XwWjLU9DqZJh7G3yw8fmzMShnugXTeE6uw8ZtjtXuaS8KgJgHvtACfqN8917XHSytY6efbUkyrNTdNbvxkb5wy4",
  "key11": "3G2kYXg4nEqxac79ryFxyi6kJcRd3QQtGyb5a6eGS57KgDcm8y4U2m6cBWXEtjTmWj4qQ7jXnHimQThTD4dtT7f7",
  "key12": "2mQMn3kbo2LfUzRY9KqBUvbDRh8GduxyVbWRPe8whRCdb5kJq4Zaw814zcHHF2de5jGdm68XmHymUzc3stXQdrQo",
  "key13": "3nTmnNC9rhY72Han5tPErmgSHxMmte4TegE3af2uBXFkQmufzETq1bjLcKptx7E5xHReYekjRAwU2JUSpqSgiBwK",
  "key14": "4wzKRcWZFcDPTuKicyLVyEW3Ag9SQT4RczjYVfaxTRDKTJkgQAcotgu9H3M2QFtiFWEdzDJ4EuzBXyL5TtSkJ1qB",
  "key15": "3mj1spRQ8QQJ5njzN79oRfNHjGHMqLtPKxHurvnn3MV1bQEq8ziD8x4a5tJPSoe14b5jWMGt8vdK6y9dguMhJc1o",
  "key16": "5gvYReerAiXo1nJBkwMJazYPKQC6UApdTdNtXBngBPz7MR9XyY6Gr1pQ9LQEHacvg3feNPxMDX97Y4jFJ3pU5jAZ",
  "key17": "3Xrr5VxGtQNHUPjFw6xBnMt3sWv8pNQBq7vALVWySFNa2TwySqonheMJRpfBKbvvAKwMvUMWfpW1MHUPNb3iqPEw",
  "key18": "5EcYkGXTkdbysYmj8csrvMBZTh9PvLpTRQrKqmiffULoedwz59d2S98nZKr2Lq2WkLu3xErav4zcVRqBsUWi4s2G",
  "key19": "2QMqEz5yj9ryt5ZiFLWcF6MSb2Be6LgXcyswfLcXXGZjN9YbVeAh2BoQ5VYNiLGQXcE6BtkAzifxx18GZtBgGjbn",
  "key20": "4mqwtnt9oC9AJWfWt2syTSMS2dPZam7X7gyT6K4SfoKhen3gWjAGsNm1wcYZt53QkLA219mXK7f7DqPE1UKwVGdN",
  "key21": "2ZvS6x8B4Hz9DRLem8nNRNn8VZis4bPrPGUN25NrQB6Ru1Tcfnf3zhb9H14xKoqgdj4kjdpaHwWYCETxMhCcvcG9",
  "key22": "3iQUT3h1jnV7tp1AaLRRg7zT1rhMitqKSsJwPPZRWrFGdAjBVDM4oghZnE26NBNvpBmiLR1b8bt3g9wpBj6TFSgY",
  "key23": "5y9MssZZYm8PwurqvaQGVZWRrnhkNxd6oKRz18tZXxb1mkercAuaXQfe92eN6P4MBYwA8zLAJinHxBuUgmgds5Y2",
  "key24": "65phU2AwTf94xYaUhLoGwNDrQWcZvvXz73SBnVsdY5uvwnWv4zUd2LGCM42HsPZjSpwk8aq7HkAUjh1R1Xpn1jTS",
  "key25": "2MrnscQjuKsY156WnEi4XBJrFwNLkuSsrCPTx6waKoLh6vJ1TXoTovkUcED2SoynT9hJ6ppE14rJskA1rhBnquzT",
  "key26": "3q3kSDFLAPMUp68frS3G1UZ62iZS8QoKqLHr3sY5wedw5iumCvtaUTnVvfdxBYgN1jxY2YvcsP9cfhPZm4XSL3wv",
  "key27": "mVL6bMdNZFXWexrijtoP5BvuYsf91HAL3BDPt5uoJbFvKqunyhWt6JSE1gTYzTn8ZGPm3UZWLBnCfUHYygx6rrY",
  "key28": "5huzXm4XX8qvTLKo5CWkT1ANb3JsmjZzeguWxumf6XCZJxxVqM5mxRmsdBKE5S5MtzWQXhCshQaEY3CAHmXVv8vk",
  "key29": "3bzKntjmuegnitkjfYr1qL8Wi6RL6TzML2YQ1JZt82fFJ4XDBnQbeFsZG9tYwnLP5G9Xsu5UcHD6r3eRmrC93arC",
  "key30": "28jsATgJqkcQsqY8X4248PZaA9JGPL1up9558TocKG3oGoXJNrZFXWYhwnYzEcuJWovH4U2HwoMuvfPDdhzkjanp",
  "key31": "5dLTSYwST2hM5qiL4HoZzuBcisEzk33LsAHG2t6n8C5oVTYEuGeMmCobzvQDyC6YA6du4F3mhvAH27zmi7xTQDDn",
  "key32": "5HNy8nTicqiE3TarUQQYGWukSmnkMFcaSL3caULkZ6WRwVNPr7ziobckYncDsJriFnWU8xU4diUgHmuLPjpDnZEK",
  "key33": "48sNzvRa9QYpSje7iesPEHaB92rqwHuvj9s13p8C5R8T7GJZSG965DRBqS4pkj2QSXrd2b6pUWPqaeukPhyBJyzk",
  "key34": "5jWbdtyDyAUkvuGM1EhniXkm9c48iLyC71Tosz6A4FF9f5sbEvMz5rgVJzopSYTLqPTQjKHW8vH4AYoWok2LgcFv",
  "key35": "51cbvQojEEGp3Ed57SpYWhHWZeVjmSHUWBsQSv8qHYgzALCNRMEENCAMnDSNmyRM3CRqnTy29SNWxwfnrsrACCv1",
  "key36": "2PnuWswZMPDxf4Jgm6ftfRrRn6ALhXuFUNqz7TsR2cTbUkwKeZAdJN3XoRjqtF9JAKmhspctyyqrJkiekGFAjK9v",
  "key37": "3qPoryAL5TCVkrqNSC3hsr25cFot83DdGyBURpPr7uV2fo7gN7ScT37dr5UB4J9mRUt8EQBWWuB54EyDdRr4vpZt",
  "key38": "5yDJPnJjaRNqTyL3tbV38jxjCTid5jWzvFEtAXr89EW53PJaXtoKZxj91mhNo5Z4dQUySjLifuUpwjnRVwYthKuB",
  "key39": "4aM1BvdgBcPYHv4YvosWd5hXzyoCKJqbEcLLQtVr4WP7rp4sWTpTwCKTdFRPn8yJfjUV9GvGJ6QgbBu8wGuu64Ky"
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
