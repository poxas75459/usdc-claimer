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
    "3JfrgyYYEw5on6XzNXPMdteNtcw2XeBknLoGJprMH1JMVzeHfkLHTBJkahZEjSXvAV9LxpRmuZYPovxscyFjox9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YMxfbdQU7JUjEwBkSn6NC6pdNx1oYDrPDDmfKjXUVQLyUfSBjb5q2ey4CFPXijqwDRoFjNrprQbJ5oGRib5q258",
  "key1": "3JwBSfQxoqYyKuDqCSr2r21Dkgdcvjd7egdvTfynbRXTwuFqVmCJTaCkWtKL5EJSPm1CYufWeBSixGR8gcGtoS6i",
  "key2": "9aPPomGaE1XUwjrbiTm9sQAF4acYJXJKBZpqvBWigzH4LeCuUVGixGbJ7CYsaqjbt5WhmWzohxm5es3jcG6hfPg",
  "key3": "4SNeTS62frh6ndN19DoA2yNvHn6c2yutDqVBw3ABTU44beExw6vkK7sH1HFLzD5XNwCKQtg4kRU9BkAXis1A2qDX",
  "key4": "3aRCPZyDQjRhLptQDgSY28py4hJcDnD9aA3YJ6V2mMN1JPbhRksEpyEX2vfjRAFj3YTHS28CkE7KDmzJYt9teuco",
  "key5": "5TvJjzcUJJMVaR9EDMkxPeKK57ayFRyCs8dohxHERxZGLGJpnxoh4tJRvXK66phRBxkG8L2JT5CLtemFmC158wJv",
  "key6": "Pu1aa5GQCgYDEjAzqTc34J176cgDvBAHXzFQLCYRZEqauZcZWi1WvygZiJTJnSKCUubzTx8YJ9HEPtdNeuw19sa",
  "key7": "fNrsN8g4Dw6JvVjMKscf9AxfGUmMM9qHmQJoLkbEgemjPLq9NY5Ws1AydkMZNMJkGWoJwSeyKkLMyZ6SdBtAARf",
  "key8": "3Pz18ibZ5oVv5kt49Z9yMioTEskPzhWocehksZ4Mridr1Sm6K33iLmuKg4pnJGabppTANv4tv1yKnhAtmwRGqxEq",
  "key9": "dGZeTqW2pVq89S2sdrRiJzUp818H247kukYNhLPQUqtNEes8ojWaw21C58jZzaCLZeQLeaAFbGohWYqFkExEK8x",
  "key10": "2nhmaA3D9ctkQpawhTWHokBf9LYMYeb69jqyWrdWAbn4gMA6zrxEYK1NRqzqrsVJZ9gt6FRziDte685ptfrVczyF",
  "key11": "4qMFfegVaY9WAuHwa5tDkAvz7AtpHXvEJeWXCaMrY65nhQKvJAMxQ2KBwynRvsxA2Povf41oXqvdDTP42iZgTccD",
  "key12": "39SkqnaJwkgira9Mx75Qa8tk74Sq9E7py3JXDCWt5rUwkdujv5Yyu8U1h9cpPfajPSKmSdtws3yJpqhGocJoct25",
  "key13": "52LssNPhBcDSFgCmstDA4GWoWtArC2rf9nd5XnDdtdk25UWNp7YDDqzizSDw6WDhHjgYRBWovjRHRutPLy2AzE24",
  "key14": "2qaavQZTetAaBX7MSmzsCj5Bq4b66qepCiRM28A3PdaKBxbQxKN5FvifcCMZXGMEdwg7DH7F52tMvAqcUf8oB3xP",
  "key15": "39D58LcQK19PerjoEFfynEMncCRdmcqzcajvCYrMx7fKwxhhtQrZi5jswVoVZg4wSYtZJTKfENYunqELCc7oHgo4",
  "key16": "XfNp9m5ogJk1aZWY3Adazgo7hQn6obq8HsxjsjV6cGRr5UoDrF1nqjGAvvYa9pac3gNWUYmyPCXb7vm7aCvQ4gy",
  "key17": "23aoNCCjrcc7Xw23HDqSiDV4RhTqCB5xdxVim4fzCXaSE77rp5LT1LXVTd3zUpShiGDbPrD39n2sLfa1dMabAwup",
  "key18": "5ErieThfRtbcg3Va5USZWHoLKKfAkoAXpWYLZbodXbQvcKj326qadCZpicDVMGPUBagxfjhQz5DoaeSHAqkGeXDR",
  "key19": "65QD4oNBbNeVT4B7PDxFhqHYELmyCD28z9WEFGi9vRs32jMuNtg2CoQ4MuDmQ6vR9KvKxGTZUg6LocMjPSb7dwG4",
  "key20": "3TvVDdoEW2krhwuP6jxis75utyCCNLP4oiZLJjzRjwMSfoohBtdQUTYasgNccUx3GfHf96mjbr6zTKCfW2GZLDuD",
  "key21": "5W9vMydVBfyUWu4JYbsoAH7R5bWG7nuTZTaMzCBHXCSSbP6PJbnnbawcqT7V9X3BWh8wTMgo5LcXu46KRHY3FajU",
  "key22": "33GxRNcgSBBsHvJcD3rEyUHGoK72PWRznisu79kVMHF2HsKSJ9JeDb7SYEaRA5nHA7YHL2Txq3uT7CqNpTCCkLtF",
  "key23": "2KbNUDSNnK11pPKq1y7VkyQuXisCvSjkFBRRay5Rg85v1B46Mt8wZnePJtoDUDHJx6tcjkTx4Z32PvcfcF7Cjysp",
  "key24": "5E7oHoVAfpuSouZbHZ6XD4oZJEeeaiSr9Y1XiUrVGHUptUpe3bSvR7X62LjpPvHMyJJLHzNgPKeXhm16xTq4fcNV",
  "key25": "245snyvfEKWsMJkweKtvMjk7hKJ5Kw8RnGksw4j57Dex7B44q8XezRXdHPi9ca7voAtFKJpf1gwVTGG1ZCSP7wZD",
  "key26": "V5xoFpmpc6ka7293omoXdFxpo3YGiRs8Goniv91eaXw19ayxhGzCtH2ZfRM7qWsuKrw9aLJoyH9HTCHykL87hnG",
  "key27": "5p6gAj3cvR9mEpsvH8PfGLgPgAFHB9UAwn7bytdiEeLWH4CFuQn6LdEipnNx47u1iKx45pT3pe2kQyLu99kwz9A9",
  "key28": "5bwrmGbZZuoggyY6ey1YoS5yrdhcR5ZD9SqyCJVTcsQPSyGRLrtWPXdx62qVWDWhvyjLZ7Gc3ecQZhXuy6QfbmGW",
  "key29": "4akJj9ab9xfRdLDQKVbBJSd9PdMo69yNQaRf6mKwyDcHTHZDmdHnXXwAFdNLSTUhL57qqJxmKDCbAAyNXoSs55X2",
  "key30": "5nUm34TnJK9kndSu7Fe3bkrG65SdSEBdsrfN5eGqzbcRjN1U2TACnrzqa2XX5u2HLEwwWskuVvzcLb6p1Nnm8hHv",
  "key31": "2oYDPRnLesyEHSQsZu8todYf5hPhNeLLs3bNn2ky7tbJ6waC93s7as89bqat15NzThft94qVbRRyCeHaRTePvpBB",
  "key32": "38dHZtRjp7pQCdCZMVfyxvVyobquvmxaazNqFjicDbw9Ky74zYtGrZJ1JpqmpN2not5Atj8dRXHb6CHYwKaUvMbK",
  "key33": "5Q7ADvpGwPyr5JLg55T1NMghvBvRa2wbcnNwe9t3tQTkQagwQp5QrXnep2Jsk7CC7wLELVRFKizMzfv2PatXZ6ka",
  "key34": "2ZBpeSDGrjrTU585SGXvf82pKT38WZkWppS5hmoCEhzzbApDZ2fHz7eCDPbUiePyXqZZxihwzziyZ1et3LazN2tS",
  "key35": "5pGwfdmexj8813Sb8uHKkp8uqguYZihVJAS14swzRGcdxJNMJ3wMGVfEoDt5YHgYVmqmKLdYvsMV7WAc7H7RWcfV",
  "key36": "sJSXybVptHCGsJCfETjxnNE7yz4e4b8XRjzNN5AcaTXfqDeUFow3nEkkLs6FZhzxdaVkTu8bGihC5Qfr8gEyMWt",
  "key37": "29JgybRedzbpRLCaDhMuMuYZJ667yvpSTfdSppXyEdtxTDkXEEQ9sG1jtXotifrDbnjy6tJ48182hbXmnWBGqXzB",
  "key38": "3wyzoz4jrFrwiaPWupta5wgcU3BndXCfBHNcDvrbRZCT8AU5rJUf4Wf5yTzkY5ZcZ31FpUCYji9UKdMte6BLYzXj",
  "key39": "2PJ3AnfxNUsFV2Ek9LNMaN59xPAa31TnTmb3cmWR34h2Y1UFWeeBKsevfVMmFTawL57G9Ybs13FpoQUNUcHqswmY",
  "key40": "dBQrdQwsLjrFAtQBWQtFVqRZ4YmeCR6gmnUgLuugJEM9dnF2RHnEA55eL4kZU7MC2osf4DndRuHP9No3bDqjwzf",
  "key41": "cV5mDjTgCe1CnVEZKPjMxYavsH4BBYqsPy6fM8WNWXLGCwNV3dq2qVMpMi9Ps23ZLCgwr7uhgHH4wJEqTGuZ8pK",
  "key42": "4hcsnbyLo7EZw57AKM4mLkQpKA88zXkBsi51HF3nJBa5Wq8pXKQA1CPgT23ThR1DaCUxwu1kcv6jHsUrYXgS3p2R",
  "key43": "5QHgYBQGUMfFZvYDyZoDNLnqaQTWP99e8Jck3aXVecHT3pT1VRxFgaV4PY7owTDLLmSnSGQ6vU2Ro4JKTbm3WokP",
  "key44": "2mogb69s36NRUmWiHnwaJXc9Y2CnNRpyDu7rpcVEAaSzLb7WSJKkaiPueJj8yXApFdefD5akTrAtAzjBzQgTMww3",
  "key45": "2fGJrLGo4P13fzzM35XWm65VDvw4ySW3iCjmtAecCRyY7bFrSahWyYKGbcUgmDiEuirpfwxoYKuGzNqJJo5hoNdq",
  "key46": "2VXXWqGMDmrN1PK2Aik3cgaG3etxPhJwLkCwPFzbs7Ev3kGSwMtHf9TvMkskG9rMWn4WTWJd42aVCkNdK21RAUCM",
  "key47": "nbQN7iR1EjH9hEBPS8CkuYCcwiBHia76pX18ZyiBZcKq7ZNbFyqabNZ2XuVJWoCq9YJyMbVobxUenV2b8bhRzMc"
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
