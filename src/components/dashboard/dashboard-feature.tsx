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
    "2o5H8DtfNeUZvazE2qHVAmhc1TQJcbTDAae6iheErjAcCRCxG6yJqZeh9meX7rXLoKrQQ7AQ9cBALxeW8fX3YZSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k4ffzd7ewvz1heNALwhEPRiMD29cigW7vT1GKS5wSzMtJr8VZMTYiLLEQyozNwEMZd4awcAEiCaRgJyuXVLSahr",
  "key1": "478gfS6wEjEAkN1QuXGEWsXWvqJkmYJBn5Vamp9ch7dvLj3cwATr3XV4BtB8Ysfy5yjmfwgwr1uriWxNEobXXsSX",
  "key2": "4AJnJyasXP4UFzb46MgCDc6fcyBDRPFAaUrDVsi3Fx9Ljy1t1G15pxsrqxgGZXBQfSbg3Wa6JJk8MaLMm9bmUBdD",
  "key3": "iNJ5sFaCTQAJYmDcxjR7vkyrbK3VmMDUKkEJNDwzzpQoKU2L5N7rHzSDfxGWv8AHfyzvkrgnxvhKMz3wQKwbmP8",
  "key4": "RLm8XG9s1Jp8Yd6SvUbbvW9mRgFH132fvzJcgQerrApXmL7hAeha6UNEHMyXerxAxubVCEjazN9r9Sp52Wi41Pb",
  "key5": "4H8kdHu7krEpz8BvecAR9BjL4hRxbSJ4oYvZqzWjo4cvNC66ordDyGgyGuyMJo7WT9fGuuGBEAKH8Uq491fLhn35",
  "key6": "4DZBGMugNjeenUZas1WdVEm4uVhvvAxC8YgKLX6tT66avhX4ZuD3R1WfxTNbgdJkWmjBtRMP5wwQpPtnPHktFX1D",
  "key7": "2NXVr2RtTxcAi38Ajwz7S5cCGzedqoTJwiqugEpXW1v93HgkGb368GmBnHNB7S5iS5kaZaM191G5AChFu4tdx8Co",
  "key8": "48XmqU4mxYjYA4ryT6m2NZGuWUZPuXzWnoAF4yan8xA1CSB5Z1ywWjJu4NjrbTMdEsh2YR4kmkQ9WLT7tuTafK9z",
  "key9": "2acToEdYTLpAZoJurN2NagKpUyRHnKKAi9E3wEBGA952aAfj875K4HPpKDdi5W9JgsyV6vj869twMxKBYYYnVeEv",
  "key10": "4BbXFFKNn5RSUCCoCXG6iSc2U7eJXRUczsorJrecM4MiDwf5cS1VdVXid1wYEUsvRDz5FQMCf41wvNWe56RpFTYq",
  "key11": "4Zq7XRr7CQnXiBams8q3Hz8z9oKT74qSeB995HLAeJRoo1zBRVWzzWAesjZzsYarpvt8vy73CGhzazhaRSiJnMGM",
  "key12": "2pUm9szSs3Q46e5BcuFeJPcre1w2gGyNV6iVnVaRhz19yJZ5qjuTZw76dzceR8doiX11HbDMMoaXVHh6JskrktCg",
  "key13": "3yAcb3e8MzeJoYN3tetongXkw4Ad4To4VuKPDsymBhJGeSUFVpYYphYtN6EpeA1179dq9g76A8iyxvCJDTPFLw2p",
  "key14": "3DpbQmUXUbmiumd6HfiEvsWHHu1tbDsa28khE5oTJKbLxuQWPW8X1dvi9JcB9Eo2nABDoMe9ubfBjvXdfFfVi7pL",
  "key15": "4PmaXCNrh2dL4mkuunbsUA5RRoW3Ahe6h6KnYVpb5H2uq8gexzuYimPiV723BCTkvQWdpesxp3ezVSXse9yGe27W",
  "key16": "bwoRG7YguQJzcmca2dDjxyKaLmaUJpDBpUNcfM3RiC5VqiCVa4vEfyqQWSeeJXwEakZAerr5KnsDZK1bx73SgUh",
  "key17": "2RvhurFZFw8tt17KjibvMqK1m5APNsPhdL58fhm9cji9kLmG1vxqMjnA7ifVc9BKFxrdTEvsKa2U48DRbbH5W7hQ",
  "key18": "4TdSEUyEUu45K3duDb7Yo2kky9uzh376PUL8nes9Qj8jVPMes1XLTvDxThUNhdUBJNbPJT7WoPb5Bv8XNa6iP5re",
  "key19": "2SvFzB14Ek54FREotXQVfzCSKLFwvvB2mP877jhvkKzfd4Xt1awdukNgPysnFp3NGQARNMnivyLuUwmBSd4oxtu2",
  "key20": "54QGEFeB7Hfx9H1Zyz7fGQJPXL31QaKVR71Q9L5DVtGt2YpMtQZJuD4cEKJka4iwGUAjFgU7YQDHNLgy5SZHMwK7",
  "key21": "2ANXTa9Ttre35n3TZgkgE2RTUyDKDpBtvKDCc36LP85b3L69KrXdUcGboXVcjSWqDkbwLmNCS9ugutdoXpmbuNP6",
  "key22": "D34aMFKCL55R7sMe8TATjQAWGxboMXMaaFoXj7vyQkQBeCVLTsG19v7SMn56nueJ1tm4ahaZY5HygxWn6n8recr",
  "key23": "36dw6dWorcAYCcczZufR4fgE5XSzS5YCs3aqXiutH21pcxT8Qy7CMQziT78a5Y3fvLGgSLyM34BpkojwDTvzEk4R",
  "key24": "4voV53AGpuLSkYWWVB3mt5atUUy6j5yeGDsqptoB7LvwagWiapTVgnCbu4omfqq591uTd7PYiXecF5y25uDzpcSR",
  "key25": "4xAniGj4f8iwtvJv8zBCYd1UcaSciNxWsr8mQEXsCmjdhaqRh4JccqJETn8gSHCNzcNUdU1613juVaCci1qCKtVv",
  "key26": "kbJkoRw3X8wfeeiFoB9B8JkNeASQRaZRx82FSbwdYztXaTDWj9SqBopBNY283CDbtkDoHv2vbqFtnsAfmHsEm5T",
  "key27": "5UNrx2QuqCVsbF2JvxXaSekv2Z1mFMvwSHhoKQaDnx7y9ZtejkY1ZNKWktPAHZXkQR2on9jV5fLH1GqWyvsPWP5D",
  "key28": "4ZrSE5Ro99JekdUXDRz12Jtiz4PAamZ5ox6m2EqPZp2xYqaCsXjwx29d4mS5c3BvwdwBtD2tU9Eynaj23HXD9kPZ",
  "key29": "3d8zMi5Yz45UGpBN9PBLFAZrZNa8sznLFQNhLpD77n9aAoChCr3vA79t4H64vncc8sXAYZZyrDsBtziU11BDTvmR",
  "key30": "2ZGCcggXEjg982REu83e4WtnvBHQFkZtqA8p2f9GqREMNhWdokmRNGnqwrJF3Hia5rvi3soSG1fC3aMbCJLyCpZq",
  "key31": "3iVrkCkEYkLq9GEk7NG8VjXbaQWZhAUZrEpXndXPeSuY93AXat47KnZAwUaWEpcCfLFDWv8S7TKvugvcZCw3KAFx",
  "key32": "3D8TmdMsZZzA55cRw6ZCViDaJruUC5y7ak3WMeZfxmZRekQYUh12YWXbSjQMSp5A7gdUQSCQ6onAszPGVjxMLTd",
  "key33": "3hdMfJqmQ9BDLEuUTeL8dmC9RpMQZtuSX2ShdMtcStMomzMQZFqBqQ2wynBKdQ2CmduA1WLpaqT1VX6Q5XfEpVZ2",
  "key34": "3V1T4Q6ffxGsAvaVmZnUya6jUSi3YruzRbDhwT3s31thGistiDfincyLJ2an4emqMFYdUWSgnCbGTtjD7R9UakXt",
  "key35": "2WiGDGBwfwvpvArdo3vj3c6ABNdmEMNoHYF3jV189A2hanRnUBeWrQB9g9CCQsji5QgyM9AWnEocfRvAiPeqYsvL",
  "key36": "4CjhkzvnVwyF4R8vnwxFcuaVD8ttwSrV8mNubdUvQZdmf7w2THi7AyzB9uBPXcKqCRVsWf4oDL6eL7vaAraXGzzf",
  "key37": "5jQDVwAXMYztwzRfPb9tksZQDtya79HhDhaJonoraekj45jvkjwswxqVwpGvcfkeYURyhAtreoWSqPiE6Uh34RkB",
  "key38": "5nDFZ9nCYeh3yKH6XbYZsHANy6tT7HRsGL4cMjmzSxz71wWJ8gsb281aar9PrwR6WMVz2Y6QC96GdttcKgjx3k8b",
  "key39": "4atbf3aCRXCzafJ2Qgk5w2CvMTUQaD9QxCaPEVxmrfSMFe5ZJTZ9mNb7gzisAEZhRhAniuhAj19NRDDU9EySraeL",
  "key40": "39CraSC8bvCHxKvybHUbtvtkmAnTNPnqno6JZ8yWshTUQZQHyuHrhX8vpfKNotertyWC4QYskJYvLEerbMEzX2Nr",
  "key41": "5K4RaFZ1NHwgLRTQT6MU5HZcod3jp8EiySBmRaxzz8vAjG1973sx36cQnJRPz2q1jHQTUKBsDmevcE9TUC1uHeaY",
  "key42": "aywpHggc9vvem53E8Npz1czWmWbnD7uxDXmCqaKemWEGDAJeYCX736C9vJMZp5Qsb5uQLJu16r1JEuTF8iDZvNj",
  "key43": "4F9T6wGgE6XSxfUWqUBwLU3vbz41uBkzg7dfyuAc1pmf95B5MsJwUPg99bsRo51dRhbK5iG8KBpd37soRrajTXk",
  "key44": "35wfBvHsThRDsgK24tC51ZrntonVrqZhHATZ2eboKHayvb2JgvpCcTo7BYPyxozJ3NvQ65R9iGVdiphq53rNHxvA",
  "key45": "2xMxYT3uggtiv5itxNSzrGW29vHzc2jtBNtEWrrrFv7Z41kXF6SDUaBYxP99fsXG4RysvW3iiV7fX9dPswQHxNHz"
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
