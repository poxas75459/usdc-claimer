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
    "4nsPawHo48TqMK29tGULbK6oeEHruCKimTmXg5cC4qpRW1fu4vhuNLVWu5NtGucFwc4pRWCkmzNsnBRLVRj68KjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q7nwDpDWuBZ3jz1Y8ecwvnbpA5bFzRjYoWnyhk4NCTdrbd68EaoraK8JrreoY48iFvpodqepdocfozcAS1Ak6sp",
  "key1": "4mrJv8yJx3B7nmzKoY6dufAXktc3kb7cMkPj7PxW4S1sbB25dwURBDCBqRinVdt8VaDNw2imZXB16unhSLdVFeiF",
  "key2": "4gumftrwmgmkcWh77wLpYteuWsX8dGZCLvmvjtFeTPEXty692QYemDZbuRGnXvajBRbyyE2yecJ6NAdrytvuJeSK",
  "key3": "2PhrwMEmAupSSTjHomnXzEWsMXmyd7sCmzrf8vzqpUPGN4ZHrcAPCiQifzDRFrpvwBJSgHSsnoszq1vxEvjccBcw",
  "key4": "4BQMuStkBq7FKvAHFk1i5EKU4ed6mswqdvGCMpHTPw2pQ5WSmEbQ6ETufNjNxReq8yepFUNXDzAjnTuUy2vNe8ZR",
  "key5": "UBZN6cyTmywL2rddQm3nqN2ZNuuhdwsjraG4QWsxK4p5NMECvqsdsJPHUutP31oCyHST1Zh7tUTja1TAnQY67Cr",
  "key6": "4iCXXSR7uQjqdcPkDVZUzysQvj4DnGdzJa3Fz17C24bbnkHZVUUR1pEtRCSGhnSG2zCaAbrfr2VcAF3Rdb33vhHq",
  "key7": "4kvQe8wDDec7F4Q1LPS6rUGr86exxiFqXLE4QtCwxoRib37txu7rvyR1HggSZwHzoVrABbq2b555swyR4uAir4W",
  "key8": "24EpCePiagxGMHshM1ixPNPGrZ9UkReCNZ6ExqFhM3ho9CBmQZEUPNDtzve2AxiS7tGVSHGBqTV6BzNgYSKgc9V4",
  "key9": "5cSapFWk4EzjHdvfvGs8X1EUbfvSjhB8SWTdqSx9xBoiGRmdsqFdu8G5jFPLh4mKN9LydcZitfA1Zo4cwUb271cc",
  "key10": "38BqJcs715fwEgCySVfmgezVrUEVXez3CXGoKrGCHwpkrVTmn1KEirhgrfmFicQQhbTqjxn55AXyeH1V4UbqeHAA",
  "key11": "2R24faHX4V355k318yBakh6PtnoY5taKZASB5biD14SynK7zqhZLxz7oWUisujRnp1AXTPT5t23kmAowLgyiNVuN",
  "key12": "44upMFLGfSYiAfSu4SPt7hFLnR8DSQb4RR5AWriVywSCVZBFdgdUt2uC8eYDCJmPhMQttFKxg9Ys6aRdcBeabSAG",
  "key13": "4zRQWHz3idFUQakfMxmsQ9TnRB9dhJ9oxbr5787Lm6DDcXzwZrWbenEky4oG52c2kivx6wqfdzsPXcerhSfq4Zpg",
  "key14": "5SF9egtYUJgYiezyC9kiiwt2gZ8WmK7iHFSBEspLKxuyu8P83Zkr2kRBJT29tyi2S9v5rZbJuoAxg1sfUZECm1TE",
  "key15": "36XVAvpDmpuRyxvhgULLTBxAEi7cGfeTyydNzEcdu3qLx6WXznRZ37AhBKiaZswugBUyHc46nxs4fjmVkDCumZAQ",
  "key16": "4vdQhyU358dPyAkwkEBGW7ecgnDXyxQn8oCTBexsTvZ1sXyBoaCBHwcdZ5PGFWscsiZibyv9Z9ZHUZ8VW3Ay9r4D",
  "key17": "YaUkLEYN2ayRm9tQqipPrRcfbDqx2cuSQfUcNZ4zxGJ5uQCpMiSSL4wCVXXPdr7QUCxBbh4UgJbpE8DcALhHd1W",
  "key18": "2F9EyXi7dvwaJ35KmCK7mFESnan3S7xE2MTHiREoaDAZHaR6HmfBqx5NpmtUm4rSWU58qy5R7ZyXEwxM4zHMKGQX",
  "key19": "2qgDksgbzBWXPhF7CiFYauG8stPTHXwoEEdHZCyX5Ve28Wddaysm3XdnPH2taN7yQ3rqn4QHHhBCFVRCSPf8FsZj",
  "key20": "5rpncZYAMsKn3igU7iogaLpFVrB9Lf4jdnjBmDY7ikeDUVtW6HUqd1x3fK6KPFKDcUAzavoc7MGe68Xs5rtyzYvU",
  "key21": "4mNzaCb7pbNdX3BnJWQp8xVisHLnYx8sWF5TDchPhq1xfhorvTrUJRfgWyduErea5Nus47ac7fLDmn7yoSF2rA48",
  "key22": "VGELyDPZtvntbtvXRn8tcYQwhB3885HNYmcAp7w6pCnih8FxZbCtnE2W6b2dxzU6ZqTVned1X8MBijdHtQa6htW",
  "key23": "2o3vNbGG3p5LCEjocmDtC66vPtSGBrA9CfWD1HWR1BcMzTq8WRmZ2qZsmjqS1ptvJJTeEhqKwBUws45S98B1C7uf",
  "key24": "52mdqsGtSp79tWWpiLiLzn2qiCSif6irFEahZCrsnigTHbRJSgXqa8RnLUeRLsWNzjSjq2BaG4BMgQ4swuii6vcZ",
  "key25": "2QaC4hW4EgtZLvo5VFJaPKjWdH4sQrwPfdXfscvWnFreH6bfchd6wxN3HgtB2BmyGbpHtGcyk3Ei8CwWswtJXMM2",
  "key26": "5yovqYNzRUmrZ19EVqd3yuXvsYydRWABsSuBVS4hdueU6hqD5kg3orWQSabusyg6EtLJP1st4SRpu3J1M1ep9xi3",
  "key27": "3h6JmbAMSvCXzgX8twR2pzC455gCEuddm1EptX3buU99DicTzobLNekFo1JCdGS9c8ZtbJ4kRuLkq7AoTUMHnY5J",
  "key28": "2VFEwKFhjKLQLQs3unUN6HqubTLHfGAJQsqBKW9wmDx2sGH95VkjdDvnanzoCe2YYEY41ad4AGn2X1KmXpitmUDk",
  "key29": "4tKVy68rqVjnesFTh1zehbgbQ4vy6SgDGgwA3FDCPC5oXvVfAJEwkH65BBQWc52tHHAsUd2YDmAgCDRVgEMzrkCf",
  "key30": "34mR9kBBoDXGJGJpPcPxRspD67V8Ub42UAG9ev6MQoErPDf8XAAcsdYNZQFZLNwGnYBJ6eeDyDGbpfKiK7W9PGf1",
  "key31": "2wRaQMPnmHUhM5MPVNyJKMHi1uagiBzkm1BJSzu9fQK7wU3Tg6GQUHV7po1H48nzLXnWLhfw81LVgTEs6ociHMHd",
  "key32": "4uz9BT4Gr4QUGG154GUc5oZYF8tfjxG3Xs1YhEPQ9q6uoqVfauH6DugmFC7ZPZ9CMnqEoh5fe5C6D9wcMmpQ4231",
  "key33": "5mRETXbL3yyKLohbMooutcErWKSWVG7DywvmA2TWCNUzMEx1mvjB9RMQLFUw7rXUWrUUiU49Yp6dcYFkRurVCu3M",
  "key34": "UDZ7jHrS3Wqap71ooLRMUbosnngCLWB1BdsNh8o45HDhcJb8Cm1GRxXYvCJYtRu5ogbe1rViYHRXWKo9f5Xk3Ws",
  "key35": "628BAEwFnzDZ6kgKR6VLL2uQCXpQZfgvG5bJQvuWoqQme5KVPCD6RkEnUCupJhY9MskmhRYJYKKSThRv22Cu6CNf",
  "key36": "5nrzsHdabfL3nTFNwFcuGZgPxW3p9UyQSSKuT6CfNkZ2t4djtWo83XSYvRiq2MZUDkXCWY396sii4pB6U8T2HjFU",
  "key37": "2dhju8UXNf2Q4KZVtTwtjgXF5cEkHZaKvrd2TyQiLWXPtWtaCUw4c6MfaS7kBf45exuSYC3u8VLmS8zGyAc2oJM7",
  "key38": "3cKMQ8bwqxKeCULRM9wespwAJKJ5qMdGmH7ioPYga8kbE1BB1A2oQxqy7vwHQeWoMTtozeauHHETyNB7dMAWN5td",
  "key39": "41o43ZvKyjAAa62h1Jha2upDiSkppNWu15D8xENn6BmoSrwgr5VXbi5bTXuKHqn2YMunaoW6zuRVxMZDouVm9PJ8",
  "key40": "2HCyKkcBKRqyht2PR5HF4EMcpG1NHoN52dfHnK99Z8HC7bdwhdXhQRmREE8EWiUqbw6gsStz6fJD3ABRA3P92mJP",
  "key41": "YbyXjFjnMvswRW2tVvQvxvQosKK39eWJVnRaqL8W79VFNyygriNWrnrWzUhtn36xewK8arAKtPMVNi83dEqUqMb",
  "key42": "25bUcvBcvYB4FmRyXGrNDBBEryqdyW7i51mvKQJzcVnxcWHAVpHrZktL3J7DKbGFtwZbwyTyGNJrYcfw8YoRVWbg",
  "key43": "3MGv5QiHPh9aZybixfmGLJsNa8iK9gcAfBBk1vqK3rWpEffQxHcgqzFNBKEeRgesWpZ6xQ89pXFU4VWcU2SFkCBa",
  "key44": "8EcyaP5FPaRyPrJuXsW8cPdomxRx5x7YziRfRbPxyPUWQ4JdMKdBmNP7VAS5mYvNkQEVRQKLgCLouDMVGvQ7dn7",
  "key45": "3c9Z76owELDHBsmv3m2Eh5hQNPd8Go5ym4FPEN2wQsPvzDVdJqq1gZnm5pE4XrWddJyfcXpqjETEUypmXDRkQERN",
  "key46": "4NjSdbRGuCDjeF5v2UJSm7xdhYD4Mp2H5DD7SxqzpdG1GGewn2H8JAshiDhkaMfPKuYHkdJeX8K23ndhXt7qwG9a",
  "key47": "PpovsG5XsgdYxFNGk7D2SUDm5rt2ZPiyeC9gDXe8rhvoFCR5nWELq7txJs763WtpXeRQMzSPjgXcJJNmMzzberX"
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
