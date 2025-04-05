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
    "EPDbUprx7ojouQX1YpkjCRABb2jjvqn8rjgdDUHLPeGjkeV7gkzPS9qrnQjBgQf7cRbGenzU2n7hCr6SaCMHwKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e4E1kDtquyAsgebeFbFeUqFgJQfSx2tVuhGRr6HEWnXbVrfF9Govx452cExAqxyAL7BdFwUhfpcuF4voYdGGDSc",
  "key1": "2oYzdD51EfyWnAWiFESBqWYyjz2yQmKLZfTr3eiqng5DJEt78YDDWv3b1hq5a7yYeiBRhmkyLJQrdQ4qK6ZgySZn",
  "key2": "2soJ7nAGS6Wn4Bvuba8tehrN7DoTq1Vn1zvhwj7oK15rFQFgrZwm57PodFd3QksgzTBPCtVw5RwW2noNKrzF24ws",
  "key3": "ub1ar73K8sv2jeANHhERwwweSfdHjWs77ELqRJaLLYjo5d1wTK4or8cxQcm8kGs4yftnYWPHxMFw6UyiPPW3jBe",
  "key4": "3PPH9n7q3hsNXGbAJtSbAPJLLUFL5UYWGTEgpzAsDqBud2bmX8wNc37Htpvj3LCL1h9SPKK6nyD3rVD9k8FGV2v",
  "key5": "3xX3jT7Ctxrd4gypofxzVekB4GWZ1ido7b1aKeD8miTr5jAVgR1MMEHptzc6maZuy3DmwMPnf9DiSwojrTA95K1c",
  "key6": "2gpiGuxqmyHriRkBVdCqUq6LP5ia7PbhZoYTq2FDFFwcMMvhtbsJiT15cwC1MyeXQ6kxpYCzuVX7dmToftJ2Mqq2",
  "key7": "2fMJj6gBn85hFSWPwF3TkyzRskazKsrhqKfijQYUPiWkMeNQdkfYNkiTaFGj5h4aVmGxQeRwr3Cdwybp75wP3MVS",
  "key8": "5ebgkB3AuyF4Z94bdGTyGC8ceJrPnSbDfmn5HPhwU6RPwDtATxRhHjbFf48vNsQ1ys1P7v2GsEppaXEbZ6v2sDBY",
  "key9": "452M73XJm6hqHBQLqMBr2QsrNwa4inZrhx3dvTBZEfrCdDowrmLea1RbxC2brUqWwVucf9cNfhi8hwSGHmEMc8e3",
  "key10": "mgc5i2cuJ6Wo7Wu7k9AUhHo6ME4sQSSoVm1ychTGyaZ2mX1V5Z37uyLn9RGj2aErwXF3gSm2kZRosxPvGt2J1GM",
  "key11": "66Uct6RxLTuDncHPTHnQVpywftUDJbg6JXw5UtkY2MqVk3oGorJjz8RkFDzkkHEYGF92DitaFNkGJKusQHbZEE5F",
  "key12": "4nkgbjDg1e8uU9ZoL9r9fTmZZkLdZBu4tVSEdE4j9koQFPajnecVN5qP5ThEZL6Rj6cRU4JpzoaxbffYVgUf8pgP",
  "key13": "3SiyRyErTZpJZNiXSnHAFsgY8irvSFWaJGVgv6g81SBpDQurMVn3CMLU7LUC55nY4htpEGhUpLTgpPDoECdz8FGY",
  "key14": "645Xrq2yZbTXCh5vgBeKuYmCMeEfoF4QeXjGBJew3tu7XpFPESd6uPigNdnHPbdiWWVftxo9UJUnGeS3w9o4Df4S",
  "key15": "4eCHENW8pwvsfHfpvMZekPqsUVEFd8aHT9SDy77EwwfJxTznDpAZBLhdvcEs4sziZApVK8CmT376ChBg6sJsppM4",
  "key16": "5gpbegMz4S5A1zEMSBehLnF5NssGoyPuvz17bxNG5ACBzBx3NAzCD3R1Uu4ATCUNdxo5uuVjgP5QnmEkV9CPqXP8",
  "key17": "462Y2yggadyQfgqxPkLKAbbyEjkxKN6QjH2S2KFLo48aNtBy3JK2QoJhuxxQXKcsom5PhTk4yNb3aAgcYHWjH1Lu",
  "key18": "58s7iBerxPRTihcY5QLgHmDDp7ApAD5QZAaFgEB9hpjYsn2YLRkp2MoJyTCY8mXaw3ehvZoVRS8n7TGfiskxgkkF",
  "key19": "EJdFaRyn72ChMsvT2mf9kupu4DcjM5QkQ1LKcugaRQ2kqsSQKHByKPh91ceZqkC8A2Mzhuh28nCpucyapTUcpjq",
  "key20": "53iUfAMYAstsUzqr3B2DtEsd4Y5FepHTJ2cZw4pa5VTnfdCJKoGBxSe4X49YRBWn8AWn4mqQKvxq5gbygG8CRo6w",
  "key21": "2y7swTNPCNVH5Ew2UGUAcwuygjFavs8W9TCMfy3yQ91ng6BYk3ZYBamrh9vsaRLE6niYNa6ZApuHyzF3cdwMEvk8",
  "key22": "4TnjMJcBbH5qxsfEioheqbHiAqE1Ys86M7JihQHMCKdczdk3871G7DDpmL9vpeGD23ukmTAmwPUcRXq3KNGQcktq",
  "key23": "3LUqsvpvHftUXiARje4x9mmWUBfS6UkhAzP5hVEUHSMTvY8Xg7V3ADTPpsjTtmKfB1aXUbsJDQvMEdNccSvUsZzU",
  "key24": "5iiHXEr41mMbPnkbwBJXyEkHu9kzsutHAYNAtQL2VoaexRB6521rnCDBADMcBJca3wJgqTmxZ5Cbv4uKRWUQzqq2",
  "key25": "5HrhopbHYMv2jFGem8m8wWzYNLfJQHGCxSXPLuPmyE5vYLxssKT1QdLXhijiSV5vTymNHDbDKbLZesyXgjxGUjp2",
  "key26": "51qcSfvXYQccF6jiqqkzG2ukeYLGDL2rBGQXLxdBnqxeDVTwTrrzpHaBNHL8EtCq8BzfLn4nZvY1LtU6zMYAB3JA",
  "key27": "5d1o5qq7jH9sMYQC8N9xrYM52DBxUMf6pbMHU4SgAsAWuQPRoZ3ozvJhPQSLM4N9bQ9qyZ3iR51fr2PUh9YvSFgV",
  "key28": "4kYv11DyeFHUsvxtewiK2VpwbovreHkyYSn3r7cSjv29qEKUd8iiNu7yEbjd8HL2cAZ4nJF3KEfP1f8bnxQw5t9B",
  "key29": "54sP7NBV17rbNXs5AJu91vRjYpAnaUpgDyxnotTCarmR2beVqB1LXVwfuGVxBMk2YJ668Gz34k1ciYzbwN2edsqq",
  "key30": "4Me5HEUBvFE7V2SFzeUJcVCLRUmumRmUzWodHDnCw1cWs9iwqFuwcfXjVAsnFg26GUM6TnbJZ2xpsGB5NaDPumou",
  "key31": "59TXsABJA1YGjZB6WkUnhW1VGkQwFdXfz9xgqNANUPUUjinU67saeF3AEmXG2Y7UQf3J72XFyu55R6TQmezidBtP",
  "key32": "5uDBJE7bNpMCaedTDmDYsSkRTefQQUvs8f2Zt1f47DRbjjWFkdzchiCtsUu7rBipH21xGRhoqQqdrd9rQr9waBSR",
  "key33": "3SfbdKrd2azKtupf449UbukvZEFCz7ktYaNZqQfK3LPNb7gnognnqGf5REMRothM6yi8gBXgvKUf8mhzCmWPVt5c",
  "key34": "262uhUdc3jpf82Uzw4XJmBuc5aEyQ6PQKjRvtTF3XomyAPTo6eekw8t1C33s7PnAQgc7ijdia5dUsAiHonA4vmMR",
  "key35": "4W6HHsysHQ25ajxG9os8qhXv8dKpstfJipxtbSWmQGVGN1g51ZmoGvNqPzSgX1MnK7LDam59DFDGTKhv9T1ZcLvt"
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
