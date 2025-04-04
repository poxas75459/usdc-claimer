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
    "5mQk7m67WgRcVGkEqkCnMeqQvt5sss1VyCXrRUwfcxC3TimoDrdJu5eW5JyoCdmUaS2Ze4rgvCGEbywAcKKwHCJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9J4KYbbxCPdHkAJPHaWM4g8iKGkWQ4cg7doXFZErucUyh5V24oRsN3718upCiAiv3RDDJfY7enqAGuX3mHq7q1d",
  "key1": "4nwRMykbiNszJYvnkFHAQVtfgoWfAEuwxFbcgf4Mt3KziKH6FAJdyg2ziWrtVqXuJdqwh2HWb5Vy5WprL7ejmeMH",
  "key2": "5UFnGfp8oZuBupujPdd3GNj5U3fTPEjpehDqGiKcvpQ1ozLsWPoy6w7n6pXZWYQs34fjyFs8JudBirapZnQRM4SH",
  "key3": "2J6ractnihFb82TcrkX2fvYshTFtvuzCJNdexm2TCHogQK7eFiKydE1cRsgbgxCWSw61NuKwg3Em5eo9FeteAVSQ",
  "key4": "56xPeZvTtKSmqg1ARt8vNJWtsE8fgXd9rugRFHv1CodYw1JKbndRWXTyyuBp4mUsAMQo94FzspzrVX3J1HPyNYXY",
  "key5": "hkTKD3EdPV9sV8ueLNUZsph6KNEA7kdGcXnFbMxCQjTiXvf4aRdxavptp4i26EuCg4CrGayJPXshoqPFDutCvkP",
  "key6": "63sLZ8y1srDo7v7sMywu1AZPREMMhN63BDA2uf4Um9F7bJMPXB9NWwzAuPfsDrdRZB2FHASd8pdgd3y7kTGGDrZ2",
  "key7": "ZQ81geg6qGsgWcNetcbM171cVwdKYCJycrAc91QKTGv9mFPgqnWY7dGjWwjvZPWQAK7rhftBnaZmmpeku4LpT8B",
  "key8": "2qiBEUTe3jWeQLwUHf959vge8qwUAwFBUorAgVhASnXNGfuRN1gCRt3ZhzRnLeW5yRe7ZKmVFxnjQewGn5tC4wbf",
  "key9": "3sk5VseAeva3vU96R6zo3CiosGfV5u2p18HQA7PRs2L9FqtJdqWCsf1bdPToQeiKXTFwT88PEZYscte4ERtB8r8c",
  "key10": "29V3niK7exuhaPmTqrQki7bgg5a5kPmdNY7o1NBfyoraG9BvtvFui9oFDeqRyDFq7s4DfWUEkCvjzr1is84v24sm",
  "key11": "2GCm3pGrRk1D5ZcMvNXTzVGjNHUHqRosWERRnrETxjDYhaw31WgG4Sh8byd1fc558QSSGsX8NmeRAmMGvrMqQyXA",
  "key12": "2MpnWjK4YftjZjBsyJYgHN9UtiYvPixyr6LAeoUxjumnHTuzMhYedy8ZSM6wRVta43t8guDuVmrHBeygH2X4T5Y9",
  "key13": "5BLRMk7bo3V3qZqk2Ff8boxBd32885H29gQ7jqwQ2zWtMrD6VSRKyGMr1HvS77LBYok86n1sKn1ph2yyFHUZUunA",
  "key14": "Yyn94uciULS15NDqNi3UcdCPrA7PRtQpaViSmeZQoHiyaMzDdYaC5TEgnsSxvBtwPniih3pccmBAhoEqdfipMyq",
  "key15": "5H342ygXiBuDZddHs64fD1FcnokBd8uMwWGgRwq43dvNWrF5qkB2vJpewUbMDV8WPm9TL8RRRVQb8ELYRFBSYPgG",
  "key16": "5ESiVpLmNfqYL8tiLhjKcR4DJrcH2YZJGyrTb95nEsqXKqRa4Swet71m3yT5PbX9GQMY27RuQtmKZTWB4KZjzyFy",
  "key17": "58fUYfkLaNcckgsao7WoNRzczz1WxeWk2qhMPdMvdMYmfbJCMnC7wHPVYNzQ9eidXqcwcbtsoFrZJeeyDYebGsro",
  "key18": "3SgaNP83HEufgQzjk5viyfhjrVrNC9BPCmSxZ5uE5qKtYxp8GGv5gsZFM1YW1Z4Upv5uioRxd7VgP9GeMV6r94wb",
  "key19": "UHVEfc64R6xPufAPmeorMpBf5cYe7NPDqzDoXTs25vZ7d9hmRzG1UkBV9daiAVyrJgHGJ35PDUvWTGzo6UDZq2j",
  "key20": "3Yga8ncoqjEPack1A49zmCRFunPtjh9YPGeFYYQZNKGhTCFWjaRnPg872BNPfkG6eLP5LJu3U5XqFWbgPue15hyb",
  "key21": "5VBCUyCzaHPfg2cW4fP5Lg1BpTBYpeE3GCUoJj785b6LRagxNjCM7QhPogyBNmaPYzCzgbjsshQLGaEz8ZTBkWwC",
  "key22": "3NVP3aQnX5VMPg2c72BhfYt8tVLFurtsF235V9oa4GsQyz7pJDm9akkgR6dGtLwbafyjTZpXheCkZ5HYFbSS1gZp",
  "key23": "2ATnpugSg96ynvvntg5skUtYK2bkLtKJdW63un9RHmFSPdsYrFbqNGj53AKbEaSdsthszKqrkwdgZcoHkMJPSpEB",
  "key24": "xwRVVaRfV6fVq3ghiBi5pojrgC2B47HGbLhkUgE7beAkZX8x7YVnfKzJoBj86EzDh8h7GGRoWuAEqcg4YgptBck",
  "key25": "5WkfkditQ1i3RNodqTP4KGfpRXA4aWwXUHL6SQi1DzLj7gRJp6CTkBhyuDTWwMAvwtRHiojecfACYEpbQhNtcKdn",
  "key26": "i8xbc3VWdREmW4ZD8YkbDMuEQXC53V8LbT5ps1N2xxCNf7UEcG1HUeRpasUoAXfLPAysferXhFMveKFUnemSnce",
  "key27": "4oCt9sKyA3FuZ85v5BkMVgqBpigfWVtGh88599iFCaiw3VmqsaaZYJzPGEtz962acYgjM5UhvNJDxT7jUUvcQMoW",
  "key28": "47qmhT72XAVPHh8JxDkBLLmtsEerHjuVZgEkCFTAyctLf9k9LpprkRmuscGsUzSmUJu83uxSgRoAk92Rry8WsxHV",
  "key29": "22VyNEGt1E2xLp2nGCPHnj9KcaaUCGL89sX4Rnb6iKiVKwYwf7dMY3HkGwYtGnjQuik2bNyJeYS5X5uAYSt2z9Zt",
  "key30": "4P3zZDp85DMvph2wyDhpqCgjXsSDDm7QZiqgd9cERYvmCq1jGHdqReCkkmVdV9u1SpT79tKU9EB4mx8sLnmN7Tpd",
  "key31": "3Fgj7paXmiYhsoZCboecwmWJfkLkiyWHgEA99u2jgoGoKbVvZrYkzNSYGjUDQAHxo3DXWRx14XRGKSnL7mQnSbU9",
  "key32": "4te9LczoG9BsJMACbZ5GJRV4kezPHdvMyurfNWyiqkQhZ3E2pDBLqDwpHEDnxehVU8rfL3Wmx8MjUDednGGjeoRi",
  "key33": "vSRtetwsx5qCVJymDmZUYrs7utN2jfeDMGpA2fnFqsEF94thMUfW9sAbs7SVVfA7596iBEA195mdMP7Up4izATX",
  "key34": "2EpnJbZ7KcvW1sBUTLdjGN8fRqCuhYtBx3JVycwqwNhbFE84dHXwZHWswBaweHaekuT5rRMYuCg1TawhnPbWZup4",
  "key35": "3mHDcqywC5dK5g4wMg8mDLG87smRp7FpTJYV3Pv5FR5VceHeZntNkaNtAam8A4zfqasDbhbAuKUA9eC8qBY3e6sX",
  "key36": "5uuQ8h2kCnmYU5JnHyWNJjeyowg7QicLSm6jo4j3WFuEdkEjpj7UmrEoAnyfDhtZqLaMxvBxcF5V5hvQnEoC4Znx",
  "key37": "4yzJ7EVLXk9TH6YEG5dUjSPNaDMKezqqw6VAyCpTnjRHxBgVixPVYmaafxCA7dsN4XBe52RfnPDn59PXbBFGfRf7"
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
