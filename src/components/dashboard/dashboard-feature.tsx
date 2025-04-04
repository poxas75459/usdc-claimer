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
    "4BzecHPzvH4gDsYCo1VDxBvF9uMx6pWRitABSg6nLhuigViz3nmz2zUv8hMyk49tJQ3RAgxwRfArR4xwaiQas7Nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A76xaMycWMsvuLxaKNzv5gkwFk8t6WE7Q3kSE6NETvpc3CMCSn1prcEUT9kesgPCFK6m935gaJ8icLz4ycJnwqr",
  "key1": "2nJKFx3EKmtC5irDJMCmKTBFmRAnLVLDvL4cZxxqd87DXDrCpr1GQburifzeCxcvZEbBDgaHGr3xPFpJCNCpndM6",
  "key2": "521ZZPnw6Hdb7yc7sXCFte5sjQiEhP7HPzx6yXaj5FL6sH6FfT69DBDrph7wsfKNQfZE6Sxqq7648FE9zDcEXMNt",
  "key3": "2SJSkpTBPGTrUtGenis3vkWfBmM99g1gkbbnLocemMWXRzXDq3L2T2TMRpH3ZNCBoEJhe3BXfn64hRNbgjJ7LhHG",
  "key4": "2pbVMrvrP3DPdXkJt92immHd5ioyJcZtoyee2pvHWxL1bdfyVFqRApb6hJB2U5xdPoMGmrkPo61hbgPTbbC8vfdH",
  "key5": "3GTuJdJrYzUp5fcbTrCxScePKzNi3mkYSsYZLkAs1PQBcmhMrUyXYn1Aazwh9oBGHKrZB73VpMzSVeirxg2efTin",
  "key6": "3hLsbmekkuaiWpW2L55VzSwtmeA9FreARaGKayhQRmsP7qDBp75xEcMkRXtdPkDD7Yzm4cQMGY4igzv2WWWuG7CA",
  "key7": "TADt3oFYf9QYazMTJzYxXmPb8ShX8vR5Jt73uHgctU2A8bpvJsLeyzq7VvUs2mpcTiY3k9QA2TiRy6dQiDohF1Y",
  "key8": "5jV6UucAf15aLfiNWmM2pKWrGoLhoxUWacecmuRDz1YUrehgFFapmuhGt7HpHcdByKMnY3hEX26pi3WWPU8jPcfM",
  "key9": "3vXg7VgZwiKD16oeHLxCKnuDm6cXDVQjuE2QTxtUqm3x3i1Wdx38zvgBmP53qjmgEXw9ysjfsGjfmXwMSGKNyqf8",
  "key10": "dVR1V2CGW75N5HRAGXXe2p5256MA6iR53KhqKPyZHqnPqbdKCyUBAGbn4yuVYWHn8E2nM6QFrYmoQMCn51bLkwp",
  "key11": "5YvNAyoLdoRn1AcPnkhFMVccqAUwo9bQbVopaMmwhZhcZF9AdBxZgP92hi9fMRmd43K2zFLae43sk67F6ju8Smyi",
  "key12": "4joSmuvJDfg93mBR4jGEcwhJDxGdTEhxiw8QwjtRanUK7W3XXt3Do2KCabGfqFpQc4QxYRnv9bP5zS9yNfbourkw",
  "key13": "6LUrV5Fbq6S4fiwxVfsY8rYobbrLoweoZTpFrLC3UKnRyFpjn7v3qoz7bKoEEsTe6CSHRrBZtYqtrw42Dgmh2F1",
  "key14": "3PSpkRnTnvfsQMVLDZz1wJxSkLvG2EHBn6nBpbqo9vtx271iMce5gd2VqVHp3oC6EPBm3XHdDGhtZ5E64RbXqrWB",
  "key15": "5QuiNf1AzGsfB7UdCESf2LSpNbWR5zUdWiVCqpwcCG5wJ6uhs46m2wYQZDeSogL6b5jrKGF6FvzcBT8fZMWx9oLS",
  "key16": "3Lf3L4GAPsSFRC8cuMn7cW1CJz2y3e3qh7MaGvHtYpNSYCn8GqiGf3Wc63tx7yzJ943k1ErDehsH3TXzkK6GdrVM",
  "key17": "5qG2yRNWHiHKEaKYj8woGKeQ8TYsH4EUNDAwjHM8ecCkpx6HZ5sJFV1fev6gS4RSpQ4RkxqQh3B4BTFDzsq6tUv",
  "key18": "2cNyrCsLKi4ka9q3Wh6jngF71a7N3VzhT6RQEV16wi5gZZPHw6aWG4cgbrd18w9V2eAnndhCpGkqidU5QeBxbEDU",
  "key19": "3gyc4P1ZcfjM2ZNYVQGeLcrhUWKJqDs5PSzdnYvpbx2ttrzLmm8ZTFaEBbsAiVcDe9ubVFGZwushH7MYTRiph8Cm",
  "key20": "pNDDdqZifLAKXgSDWVw3UJqwniveqdxdH4WEoaFGLUGJVcHDuaU7f61VAKJyHchBBru7A4V2K42zQTUwC969zA3",
  "key21": "3JshivHmPweQ1hbcC27NG7Ng1BfJzLTk7q3uRcsMCfq1s6eMG8akrjcS3wAnH8DCRWh2QHCV5B2sMB7mm9xhB7Lz",
  "key22": "5YEam3yMnGsw1PbGrehqe9Tjj7SXztSW9u1ZkqFRYhmNLvkykdDSGZbDFxWi4xQkVzzxHVJPCqMXg4hFdSzvTjNf",
  "key23": "4KW6WbdjetFZMKkjkzkK9UF9HjDUkAdFzkuNYbeVJ8EqfTzWki1wakxXvNsbQdBQrgrj5qnV4TnHka2nFcjawcLt",
  "key24": "4rTNc8EHdQ4icvEthREv1RhY64hgTZqDvK8vXc3Buv81WRg3uWosZmWq8KkmBY6NSsky7ZLfnzT2j2c1yRDQq9SX",
  "key25": "dmovZhgTYhSngtuejjzpq4LMZ9e47pyQSJfH981LKXRkuptTVjta6zwQx2Th9CYXZ8YbYgFDxTkwDZU5zmNEJU4",
  "key26": "3CQeLyTGAFXSRsjWuZ4MXjKCwkbUEgGy2u2N9evFrXCovwy1udX5reuD9n4qijK1JpCg2bJjJGzG8hHwpFWzZHkW",
  "key27": "3F6m76AuqcREjY6KwBZ8uHg8g4AQrUjoUYFJm4n1QwQfLAWkF6c3rfpzgw8f3a5pRG6EL453P54pyCDZnWkyLhHf",
  "key28": "41sA4tRHQK9CL62G9bGxn22k7yhNVjnGr1c4m28hQca6griAmJeBAHB6hUow1nyjjDBvJpsAt6VBPwuonP3uAvF4",
  "key29": "4cnWxAunYhc84pbfnPcpQHbZKPxNgrMEjAfYDZ1TWfWYPrMQXKAXvR9V6bLfKjoKZdNeNWFhK2asqV6axy2mCqAg",
  "key30": "36RASYXLqAoeG1rMAMesqTgwy4y2obn1uiPDGqAKhatE11MgmZJEFyDz1VL8X7eymXP3vp8KfdamF52GQ1uiuGWq",
  "key31": "5qEcty9Asn5WBxV4aTXyRf9NWV1MsJ8odLkMJ4X6Fg75ge8HiTCxGSCzxCVhNYiKco3h6Qz83TpPwdF7ZDyQX3Uw",
  "key32": "bTLGBNbBsqXrdjTFobDkttJyGg579isjsX6BcaZYU41YGzXiveRXmXnCzm4EHv4LGSgPfFSdddEW4CBX5QXsS3N",
  "key33": "XuZjo1NGm8torb4JbNJA8jFnBYUBHucwvPeqDvKk8xCE22xiBBZ7bw5WeXe8gam3KMePtxn4Q1FxNP6y3Yvvtqc",
  "key34": "4aj7yxHjD6zFz8ihXxy2tsRYa9CJQnvcgHeyn5Bc8MkEQFs6t5tFe8P8Zr2jHrdm893T9CsBXef7C3vV2eKnrS1r",
  "key35": "VGQgPp2uqevXGwJzoS5YaDpWXG1q2mwyigxYx57LGLTZ4PDWh4FtuA6VdquVUuo1WauJXFdsAkd5Rx7m4VKGEnP",
  "key36": "4NwhDkZy7u82tonuatK1Az181NdvSGKQWSzcqUdtAYykDqFdnGCkgJny46ANBQEtpeH5odYoqyRTw63eH5Ri17uz",
  "key37": "5BFKjjwBwv8ueRaVWaJJbLfDNSeK3UH7byFLaHhLR866L1aHSWJMtmGMth6jkdKB5dRm2GGFiubCwp98dLAxocTK",
  "key38": "2mreQEmaLofxCCPcvpunKi1H4nXQ9BpUeGvJDsnzs5YLwjGdgahByXf27wLPQCKDCbk3RvYSheUNj5ZFTVNey4KR",
  "key39": "4MiRrckQfxWFCMoxQG8sEXN9ytesKoGRUXJUynVpsnqBnSDoQBz8hVBYesde85FG8ibBcXbeLJHg5QJWrwFyPSz5",
  "key40": "2cA65FfaunwhkAxDaabb7PRR7zSy8zvmZcgAtYqFz9BA5ZM586kid2bAjvc5hQw2VKPysgANrWb1J8iqSDwrLu5C",
  "key41": "3p3srhs81XKvrfHvq5uSTHHAzXiQm5bCEUtuaR7SgPg85VRQdwy6pQt93UfpJx53k6gutsWjxEP4MBA4HLBEeuLu",
  "key42": "51Xm3PSCKcLmubKrWoG54sPpkndqQrCNwPGA9Pv1cZyiBqBQN4DqVm7xk7B2Kj1AHEjP3or8PQ2YpFFK2jY6ZvpD",
  "key43": "5hFJhe7ppDrmMhZd4hXQmN9ubBTWfkKhH4Ucm8H4sHKxhKtd7DcDRnKBDMjp6CLtEpxzBG5TJkPa8xjZzhSheK3p"
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
