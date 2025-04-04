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
    "2NyfTG7gNrjpAMqmvXa65rNNpuPkBd4zqWDBwVD3tEaHfTDQJGVmDDo2S7n39GEiA3K1ts4SfvNr7eghP3VbPwFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EVy2VdCodJSszsr7h1z5uQxHkLwaifRgCShiwo4qSB12YEh9jBZC9TejFJ2gwCFGpqFY5Krs3P1tHJScScG3hAR",
  "key1": "5MLzgw5Kgk7d6dTSU1APDZcMECxSinrH6HSHYsbZoSjyraW48ofovhxFDb6vnyYh8EdycCSUg2HicL52ty5fcjii",
  "key2": "4wVyXKVMAuPpYQjcRyevsBG8ZK1LsY76gcM9tE3XVMA8nHoM25M6RdxNnbrmTEoWiGxQ1JH7Dh9EGqAxd5bP3wx9",
  "key3": "zUEazcLSq9GavX8d56pEDdFNVUx7fddSCaTLJYBzHjFrZ5cyyjkMg2ycx8z7J9GShzohQo35fJ33V8jYoHkxPF6",
  "key4": "5CJneWbTHYDY4FmXnWaL6AkxCZZ2y1Xda97nRG2fMegNh5qtYtgLjtJ4Tc2q2ZFEYDwSamr4TsDtUuwnNSTVrwx9",
  "key5": "5kdiKQaSj44dojtj5gpdLPSz7bfUuAPPChMe9ZydZTJgdhriHGYdew6iugYRrSrf3EYg8YX6hEsM5CkpLTJxFp5t",
  "key6": "4PfWdSgmA2YycW4T38nGN5nWCAt6fc9d9dF268J7JQSQAYvcJDmbvahZenbZVHewC1qsfzTuEx7r9RVrAkWCEve7",
  "key7": "2CibrHFLw2YmUsm65ier3aMhEvHsyzcMJJaZXooHV7zjixLyPgRWN3VyqspDPmnQFxQyWyQwP8UTgv1vwiEDYuW8",
  "key8": "4E4V1ENFtzhx6Rxnx3iBBoXjUTg3dc2C8QARxWq35ekqmnrkLpa7WLiVPjeimmh4RjEtTybpV9xQWCwp8jmYNZhs",
  "key9": "3iCBaEnk9kPdaecKdhkEBH1AHbQn99e7LXmRgZJZB1iJpngb6M8baCHHjn2UEz357eem32HMUD1i5RCSP8JEZEmJ",
  "key10": "2oPMnwwhPoKoCEgWe7TPZ1QGHQyQbp8rHDHXK8WwSry7gGz75tfV1i1VmHSWwyx6VnnYTfiVLPdneSzoxQBtSXJZ",
  "key11": "3e3fDWk71B1EDLH7trPSZdzSXGSo3bGiP4C3YVp4Cx8rTcZC554AwxAHydjHUMWkHmg26ifS6jrDFmGDniRE8sdj",
  "key12": "2bh5BdEZvRNcRcyLtw5tVaDTS2w4DHQk3HFU2mvjctrRBXBK2eYXZUrotb7NqRiRE1Z3HPyKJBee684UDf1bMdYp",
  "key13": "2ZbFSCfMy1Tdt9Wi1aMdFdSDos5UTvHrgqNXBDkUbKgz1dqeorpxk9d1T3EtEE9LQytLV93C8esGCNfr8LGrZP8k",
  "key14": "2fBkTTMkdyfFEVSMxQXFRQnQCT2EUgx13kpYt3yKF9Pp2y5nUcwDVLiESbSLkUi53ceMuA9dFNvwZh79jDywNRP2",
  "key15": "61ovcufiVtop5gj5zkZVskSZWafrkuqZEXHwrXRe4VhPm7Aw1AqCwbYXJ1z8Sv6XJJEag7PzGFBkxye6CWwrbXRG",
  "key16": "3Xton33eicUCxoZ1kDGh7bNAZm4gRdF7b41NQhnH6heja5vJP9BdjKifuc5fGuVskLuiX893QGcwRpz65Zw16RBQ",
  "key17": "xyr5ywckuiLxEf2smgottmA5eQtRC7JCWN4T4gDKoCmLW8KBrKgCcmWqaUGoB8JQLUThSMyx6A5qdxCx629ZwrQ",
  "key18": "33V1m3YLgSMmzNczdwvDirQHwYkqVBdqT9pFscMZS8s3efiq5FjH8owT3F2CWi1qb9zBtUHw7b3TRXaeaKyZkKJV",
  "key19": "eEopaMjyWF8P8NN9SNME2ptT6sJLnExRE7aG1CckzF81EeuG5b1bzrSBvnsWX1fuQ4VE5bdEo5VtsDa2Wn7qF8J",
  "key20": "3RcyW1GPGxK5VA41P4ipsRW8uM68ybLXVRW9tRNGsgnkrHWshPaR7nthmbkqgG6z8F3iWxzPGpY9JSzidAvv5AXK",
  "key21": "5GuodLCDX2dPr3UKf6zuDnFQ9gGgRYNt2cvbCE91LW1M41YbcEU7QpUs5uS2hNVb77nmhAWnZAbyM9yrP4LFY8i3",
  "key22": "3eFpQgbXV9Yf9s2WNoafBTCjveL2FwMbJhBevKLk69Um3JmjtQyjyT15TzfKqTJoHVu9rgZFTGaTrucEVwMHdWTn",
  "key23": "XbpH9dMUjyGHm5qCGac4m3r2NUYHdZqkxjtrVhM5GSzXb3bUyV6uFn4KmNm3Li1oMyDqqNtSGUxVdxRVpZYehmP",
  "key24": "yCZVbGiDtugRrrYq2ZoZnDpVg785Cuag9tsFywU96oBpUR6zAS89dfELrJygJ1PHgBVged5Ts4wworBkx9tFuzh",
  "key25": "33RdrJtwEZwN8PMjNutMm8GPyz3EainGUrcwXWwahstF4nfBoUiYowsaFJjBq12tUsdHYM4sH5PzgsEi7C7qDeYW",
  "key26": "2cK4g23jb4KbQ5EF5B75xCoTvwmYe5Ns7GQPgJAzx3MMrUmvj4hLsTPuoVQuAfaX9PudC9ZoSKPMCgVczceciL4q",
  "key27": "57BtrXT3HysA7MCJMSq8w8FTuYQigZXsvCGz1VntGsc9zAWcJLUG66p5eh4hL6sVayVz3JfrxHWbSrmNoVUjs14f",
  "key28": "5HqYwiL5FJHeyaKo35PToQM91D83CSbfEgx2oLHrBVSFU8v3SAT7dEyKhGhxKkdmGve3LCRMBciekmbBU41gMSmk",
  "key29": "64XRm5ajHSga9pA7cSvu8FX1GTpPEZijY5Y6oAYgjSG6zjDYSPwXuPU9f6LL2FqDmBqrejtnZqn6aCP2XJaL7Vwu",
  "key30": "2JJQkwwv9nAtYjXNDtwFfygtyz23UxqX2qRCo1VGYytC4abHFFKoacZ2qZtCi8pVuyzMgf978JGeeu5PH24qEVu",
  "key31": "37amfU5dqBYh231YHGzXy14btRCr3hoZkQtDwTtwpHxjhXQ4v8EH2mGEANKfTKXHgruGHRj82BhEUb6q1nDpJViN",
  "key32": "3QnH2DCY95fXKcLqSnVMY5q9Y5ZiNUDVtpzJVSeM3BYssH8T1GzUhbLeHeBykWz8M6x5LnjCmBVwPN8UuJ4PRaPM",
  "key33": "5YBDzEmsYC4dkyC7dCpCTkioyrwaT5sKEXkDmv49Wwxu2Bxvs9trpckuiN5uvG31xrFEVCbYUxszFDs7HW19bsfP",
  "key34": "3hTYiT8Y7SfPfJ8BJQaBpXeiHw9uxZFNo3S683P9FXgAfvwjVihS3TKT4zJKa9j5uMNNthNyc2qB3A6RJBDwqbwv",
  "key35": "33bdEmZ3a2H3HGven1NzC8gRAZrJWKuRnXnjWXwsUwoyx1PQW9ByFpDjir3piuY6ea6Q4U27G235yqbJGeqvx5ku",
  "key36": "2yYkQsHHSun5Kfq8yRgFgxQd14ae1eCtirY32KyPkfCvZMWtjuiqWpvsT1YdHtAKQeSovKe46xJwCnTMCZ2x4E78",
  "key37": "56ez962rm3tS9vFZBpxWTXS1RWPPEhYRz73kGmV4JsQT8dH2VtqJbWkocR43898wUuK4Ba2n1WaFirHffvty5ms6",
  "key38": "4br3uSnsaxTYXrwR1eyY3jELV4h1fUu16KueL8ojhd2r4VLQ6bmobtNMFpT5xmon3C7Yuq3kTaZPrPPRCRRqPKQQ",
  "key39": "2rLqNfosoRnW2mSUqY5kc2mfTg1rfeySCECMjjePojTdXN3kxYXFSuP9UJ5q2kqkQ2zquWDYkKEyNBetmby24t2G",
  "key40": "23ZYBHppejoeoxfuj8m3YGCfrHFiWEDKxT2PXAko4iNpaGcAmhNu8JMzPkPTJccxmcrSCNCcywQERpxPUwEJqYwV",
  "key41": "wxEge9Y3uZZj8YTKLqdKknDmqx2ALXzoAt4MG5A3xHUwVSJx6hmEAS862ccrHPfwga1WL51PNq9jbNAGg1zVnBw",
  "key42": "biKcd1GBFZtqjBdPJhojDYRaC25bLtWzWsrD4pr33KvSJmFQswCsn5oXsdLUYMsY9zPbgP7pkRk56NLs1TxDezc",
  "key43": "WRCN5WJnB7LZqzEZhXQjcMuwjfH2ER64WZXx3vhDknQtFMHtaav8XKCBFhzR6zZWU6EMptV6JDHeMbBKfbHmxxL",
  "key44": "2oQfiyQ1NFpe2KCyLpX7JuJUEwKUjrSy3nBeopmGhV5HqDGGki5JdKXcwtdch36YtcuPDx3oHCf1xDCzeDaXYt2y",
  "key45": "3hr1uK8MTkPMxxqDHgMYfX7TJQ2WBTrn8ifwjxGR1FixonNyktYmvxtRBS9L1H7oBN7s72zdoBbvThdnsA1to7UJ",
  "key46": "3cVxCDsBxPKoAViYkdpMgUW9BA37DLn1h2dQAADKvPHsbj7eX6aLAcHv1cLoH4sBt1B2Ejao3ESqtQA4iSZwJCfJ"
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
