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
    "4MuN6b9c7Xhk47w53EWPRNKpdC8X6KvGRfmHyNrvG19Ap24QHmrgpKYVrYbL4eH86u2ZvgcPPMC9cDdCWQSk3X4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2cRaxnhcS2hu8daTDsHQN2oR4o7FPpLCFH4VK9UbBYsLxvv7fyPm3Ac5QT6o7kT6eti74oAucw5vp6ZFcDsLH3",
  "key1": "64T29tsKZ5JvXnr53qCKjq2JVStd5Fxm3vL3G1j8YiwRd1o3aHvLUWKvCqt1ngiRmM4iEycBS1rEBC1dWCjhGuf8",
  "key2": "2HexL5yJ8p1kWTk7QAnsqhsFbWqCAL4dk8S5dwn8jXtVr4gjjf2fdSvcu1ijEyCuqXYdVW8a7xqGjpNbKL4n46Mp",
  "key3": "4Gacyd8fMHeijvTHL7JYFaxLciVe7eG78BY39Z4bPcQ7BS1jcsNPiXbRWdYRnYjGTaKLQnsmN3DQ3ux5f83xVbC4",
  "key4": "5AbQgtoQQBUXZkrSLJD5Pfwi1DSMotuvDWpFfMNe8saxMGEvH774r7nNhRPhojDvHQffJVrdVsWMTEuHU7tnRaQs",
  "key5": "4rV59ReDaqEH9UcXLH4uuMbfbBjWSioMocmcE2tFJ1GPfKrEmR1vnKESppqrxFt3ryTQh97yYWb2tNTyLkHVpNK9",
  "key6": "9wNk7gAaJahncD1p2Xdmk6CvzsrADiamdHAxbV44VL2vKcyU9p3eDPfCVxPn9jovUQw8KSpeJsyFb5YN9yKqmGW",
  "key7": "3FVND2wamwaSQwXf4MpmJLKhZwh2jhxcRSLWLkQqrZiBThXuuvrUEtyy48AnLLpbrPh6oKd3QMcgMoFsaxms25Xt",
  "key8": "2rpyn89AMdr64WyJ8eFbPQS2zJsL5Z5s1Dmd2UhQ8eRU1NK1iY5RuLaW2CoknGnQvTjRXyeqZm6zAL1ETTodWAkP",
  "key9": "4aUnSGtc5QffeM2yCkCKcsWTPjqwGG1er4KFgJKyq2o4QN4Cxrkhru1xM68jd8gWLPSk3dc1EhJvvFNA6rpaZDAG",
  "key10": "35oN899sVfYT6rnsGtaVSekj5n1nNkA2JCo3hqmjBSY8ocKMayrSCKKLDM97oiBghMkjRjisFZN9FBRxoGfBWe1A",
  "key11": "4ZtoeVVvvAAJx1D3P8DvFjpCoXH49ud6C57q7u5qv2GwE6KtDNazT7CHD2QjqpedMm3wyisbMNk3ZBzxyMqqiHvR",
  "key12": "2GdVbrDVjhRkbiX2pTzbCPyJewDSJzu2rBjqf8gpMRrRyxJF3eurwj6uhFoZoFfiKkZF2KCRzkmhgkYPTGEd4uqA",
  "key13": "4ULNZLnLzuWi2TWU64duDoiiYzbuESxm1vpW3fVmtJjuTwpMkfsTW1jQRzKD55dZtFEED6cmba3uz6vgPH4P7xv4",
  "key14": "2qD5NouaPQW3UjwXBnD4Rnx7Q8iKbgPKHgQSejrMCNRDNgo4Rh3pJD2CJdUxXAf6fT8oPCrkyEQhKFaUbCMircwZ",
  "key15": "V8ABs6HvB8jhCPEhPSsFtmbBQFduwuzY5mcZryefNYCojpN8QfuhQVCTo6jG7PA2DMzm3o6CBiNUwSnTQdGAg9x",
  "key16": "L7yTcuxVzFpe4mhUoiG1cux1iWkQJ1na8kNi7692Ugd2hEWC2YQEHig1zKUH9XrtNun5ucfSbwz7m6qbHLsVN2R",
  "key17": "43AAXXc4ui1oNSt3eVvpPAQa88b4kj5vw7XQGh8tuijk4ffkmf4sBUmYHRc8rC3o12B3aqUDw3RiCf9WkZ5ixMPk",
  "key18": "2asPUbhMj4kXmYZsJWSGPvzaqf9nqU17NNa9YWdF5fJp9YzpmbeNUN4aXfi56hrVAmQquLMpaCvWG91iFLHke9Wi",
  "key19": "4Czbq7xJkCTGpaGurtuofeGrZZwEZFyB3dFQh24J1zkNijtCh1uZhcHY7TgZe997hzLaVPprGCkjxGqPwnFVxd6z",
  "key20": "4TPCaLK2rfr29WKJn7V9gkiFFJW6YubJjwFBQLYcwMgTv7PcEF1Q4s9oKZ9XHFaYQNuqLqeP9AGm4qTz5Li9QhGj",
  "key21": "3b1CkndBMeygL3NdxKxcPDQxouR9hqUNJQh15gXSUzhckv17E6QLm1NTFypH5W4mJV5mjZKXd33cJCQUQbJjLq63",
  "key22": "3R4GqpUj91ZAbC6B3tLjmWQhQqDmBLegu1a3RBbWys9qenD6ahBwT8g5GBQN7bCYsyA4jVjf5JAFdah3kpsPX9Rj",
  "key23": "26BMLKir4Av255ft2ekq4y8WdWDyMuvfWdGLcpm8AyoY374GYtFfXqUuCJviXsp628bJRMqtSFMhZADiicnreHUv",
  "key24": "2is335zpKcZDbm78GeWAJZujmuBhPFenyq7hrmTNPH32emJTjjohhiTibBx7wTA2Bcpx3kV4kJerhNbTK5EnS5Dx",
  "key25": "rn6gtcDcRqn1QJyyn3FrPa7LkLR7Ur2VeDwrQK44bSB9tdP9wYERBqQMFgKhxUSnAopiHG2XMQfVsHCJDR1VQ8y",
  "key26": "4qsuNJSwcgM8XaMxaxaNnRYJanHSbciGdTM8jW62LexTPkqasYKV9KiNaLvaAoANamXdCYWqANRbTGzQY8bECHUE",
  "key27": "5spcdbiMPeVCma4dfediQohf6mcyjW9EqrG22cezkRgqtwX873BFgE8yBxHpyifwEnt9RfvxT63WH3kLEet4umZ6",
  "key28": "iyoZtYxJQMgpCkoPqm3dTCkexDX8DjSG1AqwRAX48ctTcBJhQnqpWoyS3bDGVT8jk4SYQJE14iNdaGKe2yX7tjL",
  "key29": "5QRCe9E7xT1CFMBH1mZ1ppaQtWSEKtyDgEUUXgXTwtHtqtJ8cGURg4bVs25pUXxEjRHCJkVzDe4NALQLUb8QGS8E",
  "key30": "34wPy3DxCgBve4UWmKzxsnjxHZUiKyjKbtqKgKmYeqTD1DgxWexbFzSSzfNQyWpLtpr6dh6QkwaR8vreXR1FuddA",
  "key31": "4SeLUtRAAxCdf3EYPKAAgyJfTRFezGjUAnKtdcr7yyXfEvhEyfQy5Afw7pdjtSMi8nTysjTuPeBLScdZCS6y67oW",
  "key32": "3KJV3gs4JytcDMaxgA8j1M74R9xT5fup3zeHUv6avEeMrGacDCK83FQ1S1wnKY77nRP1AhChTMg3EcaEBh3nHDb",
  "key33": "92uKZWF4hTw6ufC14iiFqgRGVcnffninGzmxGgbPMT8s57nt6UW7YxzaXCXNwXfFWaPLbbdzqqykQr9bSdvM1a8",
  "key34": "3J6CyL9Rx25UX49CitMJcQaw4r8nR8LnKoqSTDrYUfTXRruQojThGRMjPtAyM1cG3ke6CtRVCe258kWDqQSchetn",
  "key35": "hPuU6DHGg9iSVrkjnpeWwzu3x5iDy4EdUDJUDjY4eXi8YNCDm9Wg21UBxueUbhMqg7ZLAqnAnZLANJjF7rLcsy6",
  "key36": "5X244DvnHqqNi6mA1tRw5xcMQLHzACAo4Ez1F5aXwQUNz9tc4cyu74am7wuZVHsP4hwBeWgA8KrX1i6AWuhM1kfN",
  "key37": "5mAEcegkgTo5UjuyAfLF8cf2fvkdPkx4mziSzD7VJ5nrEHT21Afj7J2va3jWsxK8ztgSqYh3ciLcprfCzGenXwur",
  "key38": "4gPfArp9QrmSjhxGK58CVe5NQViuedfHt79vKqzVy6Cea7C6ZSkQfNnzo8WTy3HRB5axp2WbfJz9FkvEpJxAk1S5",
  "key39": "38DPeCAhk7Aa3HCRmDALio3QMzDWUBViD7nTYUKQ76dWxCrWTx7EcdJ2H7zRQj7UWZ22w9xKwsY34YVqBAzYrxyW",
  "key40": "1NgEopqBTwp1ePb9rDTswze75UPcaZuQFmo7V4RoqUMTtar2TMosabP1YQrHPv5NhPNdg4k7aA2bLfoPAFKvbAx",
  "key41": "45Cm4mGP4rYKrxpLh2XzKN9MVzGCDEvkn7BT5cRrqdz7YK4eXpdAa5hm5SF7dRvMW6fiuJhq8QzgSt5vuEPBGu73",
  "key42": "5g3fMJ4VW9T4tmkhXBFHjeGAQDGCDCykFFeXrsC7b1urGJsU2hHmiCn2is2cJNarV4wBAX41V5MgP7DdpHKbZ3oo",
  "key43": "4xyf3Ehr684SwnJFnuYSNUJrpVArMmZnyBCCW13UPqA62Y7FmwP4o74eveJyeE9b2JyRBLHeJWezVJJxJJifiuTA",
  "key44": "2u9KubM9kuaZRKGH29xtYyDvKdUNdR4s2yeCBmjMCD3VRtTTEkPLPivEvwGnei66SStiwQf6g4sd2zphE7kAjMmi",
  "key45": "5A4t9GWTz7oe6sGcnzscbHdn4VuuyiQXGc6Estowm4QLFJkz6MHnHo55pE1cJFyyRRcXWSiDA1wefdQSeZrrJZ9S",
  "key46": "5CTQ9BsKU2SBxeqK5dcwFWLMeEi4TDpjybdVMmnFm1pscRwEQFaGVWznFeaqVwtDjyBDTfUKAqjxfjJc3GeQdBUW"
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
