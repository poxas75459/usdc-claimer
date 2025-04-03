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
    "3ju9J4qsFPbSBFfqkgVqKWJZ7FFv8mUchcUZ83gL8UQQEWZE6otmh4i9LenKQFZwc8XeZQcbftKXVKd5kCoD8Jdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzMQbXBEYQWFJhFdkZ4XUTkYzwWNcGySp26K3K2eBhnyxhngNY2hPSHGCJACRB3st33fGLUmmJy3jX1oKFtf4wR",
  "key1": "5mDfCmqFRhS56c33Ee9E91buamQ9WN5ohbgFaFUwofMkq9rACog9edR1RomaHJYYnodGe1fWDF5jJbK5ouGkuVwc",
  "key2": "3aQMsnLiJuhmDm4NKKyjVxR9CwFVaCpGyvvzs2Q32RpKZBnEDY16oNQ1ANzQKVGcJGNxhBowMy6nm2w2RorqAt2L",
  "key3": "3xX6XzyBD3Mta9A71SacNRxCkm3wNjghGGeCuvazUbs6sfRwakH9NtqKbB8PQ9kUZTUKn6cm1fkY3ek6Spa7ZagV",
  "key4": "5xgEXcPvsayU9dnW6TtQZeymphbBvM1SxaT3bPk3AbfrM9HQRqtN6GcT31LMMYQRqwukU8BkiCu85ZFghfy9Kobq",
  "key5": "3XHMTF4fkLACDMznn1uds72csr24j32YLBHLhxsAiLkAm2Vgdqipj7eheoJsdW4zHGdAju7X5wLR83VDCjME5N5p",
  "key6": "2SaaeuidvcmATo9oduZhdKBNVkGnqgAwdXbAJRpDv2c5P7mCtNYD8fLxWCDnbCjgM3Nc9AsNof97wk8LrAy4yB31",
  "key7": "B5g36Bnf923E6vM1ZVwLUV7Uf5AAXU8mfJGPy5acEBhVMaawXAWYe8yib9ZAdD9ottnMD1mhF8kUpFfYrumrqQu",
  "key8": "32L74Jm9oZSHXwMisVpdfM5z5Q5r7aoekhaZdjd8tEmrrS9T1Nvsgz1jZ3Z7UFrJXZpaQMkkdnVM46qWbdeDKijU",
  "key9": "2vReNn9VQPLqWFWKmLF27WCd3Lfn4c2n9NFmeiqqBqocWTMcmTr2UjpeqpSysa45juqMUneuKCHKeTHPz2wMeEG7",
  "key10": "4cZM4sbnGHPn4zdSBni4ng7SgcMzz1DrNtcEqPrA18nm75YvbVH5m5Yk69em9KbchFaVb36kchDCcDXEoKShfTbQ",
  "key11": "51DR6KJXPRLVjNsJDbzW1HhwJTjxwvus86Zp2AYAt2e9sn27gBAruESwm1aozFmH42jfedsLivztyhM1WNkPQ72",
  "key12": "2ZkMyikxUCCePbs3LLymoxvCzA2TzuPCHZH1HGMhuM2H7mRtkvjnAszNqf9DH1MjxPMCrpQy1DYCus5XtQDLbtDF",
  "key13": "yRfqxq7FBQZoeEDdbEZumaGPUfPFHzyX2ACh7DEQCsgbS9uRqjEM9Xu7eZAjSg8m81sXjfUpsbLtkm3cvTsatoT",
  "key14": "5r2wkRV5FGL5Z4hKoFgeMdVHp9nHMt77kszQxSC8dTu5TwDQHw9hQEbtebKWLRV7BUHMRYJ8yVTvat3G8wppwB93",
  "key15": "41WU3NwzikAaK4FigeGHrWhQXehGwhywNzmXpVT1yXp8sYpr4TE82YgPsqRck7xk5xh3KrZxjiSDhmWx87Ehw9ph",
  "key16": "5eqiYhdQS188HrhFHB6EGyMQV13XQ7s9ZfLd8RJGNCBKFLJ7CxqsmXXMUUE1soX8SMWdoBUFVgtsM9ttYMqJDbVt",
  "key17": "4TR8F8CMyWAetPBP9841vS1Xda6A5ABj7togBnYzA2JDBr8ene6hdxg96DnUu4LwbPoQjUaJVAzPK3ikhUArcosT",
  "key18": "2nHfByKP3rRxbayMsg6jXyYBR8bcV4GtfBQ7jSpgwEATe8dvwLzZnSHPzYPMcHqUFm5CLbBemKCiVMQ6PpyxChjo",
  "key19": "4f4wBeutgSBxG4E7pXbsDjBzGUNAtrzPDTSgZbEdqwH7McsqoMrZ8kejtvMdTQZKifVEwZt69UFTJ9XZk1MBPQVE",
  "key20": "tP4eEDRRpfX8hZ1jPcgbXAW2qKmGPD6U9Td9PACNfJ8a8BV1eoukySDfCeswoTsF4xrfuTqmL1VdKtw6DGxD13c",
  "key21": "5S6GA8HoC3uHRpVZtiV4rzW1pFdngR7u2CDzFtcPg2SoMdHDdjaYQp9mypXRZWv2P6o5bjQuaNEkScc5Mnk4Y8wF",
  "key22": "HHDtHUS7HKVF4ejQkNMqcGZsThAPNn2i9mv9UauSDcgwjfuHUMikdm7zu7TBrZysQVpxhtExS8Nj2er562qCVHd",
  "key23": "JGhiF9RguJHZi8Q8ivcv4dTxXp51rAjVmYSSC7xdphd1MFekuC69v6EuzVehFvASxczhdJpSYW29SrmP9nyRTbA",
  "key24": "2M5UTac41cDjAJxZJqoqSgsJFV3w8TrApWedSLDuFg5BpiBcyZetagRnez9zrYCjJk7hg2YaonkG1Nnn8Xzjwf5V",
  "key25": "Cu2fQK8VvTNH8Tk3Xrh8zzQCN45M5bEV319pgiGXGSTiewcQNph6KaPzDSuUC82We2p9oTb8eAdy3guqA6Es142",
  "key26": "2akTqZrjK2nepbSN6fzHYUEJrmfDxTG9VesK9kZjeg3vtHkbiXXEZZhvZ93tD8Tr6bCBa6nQE3aEsH4iyAvzHa3a",
  "key27": "4WP9tWwmr6tS8uYDFddsFGHHsjXxcBsepGZSruDhGtgHL8cAMDP4Uq61JzDR1fLXbNEN6HDhhbwG8eEjjLcuNNVj",
  "key28": "39aaZD4FDGx6pqFZFxJtECpJgCBb19uqGegn9nHTnKtQoZFrrxcVrc6rjfx5mjysPtYMZkyARYMfXknh3uWTefos",
  "key29": "5vMAWjjFC94VStLjDyNzzjq2Sz7X5QD8czWUVXXegb53X4Nfpr4YNhpwYZgRuAuqLa5DE2rg7NisE7Qwy4omY2mx",
  "key30": "3XUt4SpcGwyi7eY2QXkew4fkJdFMoq5AfR9414MwtsyyFB5rfJcYiF6VmGREzof7zZfDnJvFs34KGDZbpZoWRXFS",
  "key31": "3Lyg5U1STVTy5sZXsSVDwmevf1yLHqc1hLoVPsXoM6NS2cawctKpZy2zSRq2Ec4d6eQG7r1SKU7YezuFym7N4LTX",
  "key32": "f1L8Wed7kHpWbAvRquBwTvUisK1Nx6yqfcs56qfHdQ3FCgDP7GBkdk1H3XuhgXQwH2LV6bsuAMWJpMirm4TWGjd",
  "key33": "54fMAn7dUvHo5v69sKaSPicqpbee6QWKMr6sJkgmjHPi6rtr3cpKTrcTd3NHRys7vMp1KTGx7QqPr1vu2nvyXgJZ",
  "key34": "2eg48WXbjozjQ13Z1TRE67WnJuJtAqM3cD17EtC5uK2GNEt84AeuwFzR2UBkg1Y9KhfVCdt7HxCXCQoXSMS9PzsE",
  "key35": "2Zic1ethnwVVNz74ugAuxkGRctmx3pdJkHwP5XcZ8MtLmqpAXy8SohU4HVpK65f78F1voV19inatJe2NtqsvWza5",
  "key36": "2J7URw5CjornTuLny5eA5e3RBzAFWCGJGJW5ZbuHPSg274kBpUXHFMjzsCgvrZk7e6pU9PxwMN5N9Cx4xrE3nokv",
  "key37": "2dJaveXBpfG4mF1LHnDyQtNarJA5DzJYFyLsKncxyizWGYk6XziC2cQ6Zrm7hzgsLSp5rqqUeUwJ2nAibsfxmrM7",
  "key38": "4VggCMU31pj8ifeanVmEgAdJJjWn7WvtT2cMn5Qnzxrf1PNWxyjeePJDz8HMkbMRCeLXcXRsFP7EvCWDGZVBit6D",
  "key39": "KAxibK4gxuQeu46jtJFNKj2J1E8ZpjN6ykYG5FaRCPfAnjMpAyYrXCFPfYNLWfW8Qj922mJLHZG25UuuLohfycd",
  "key40": "7H8oVCEeX2kGYMXntbKZUTnbXkKM21Nqw2t3pc2i3FkVGAW4H8owh4jyF8D928cgkHLGiQMyceTLoxjeydkL3zR",
  "key41": "51GJWEpmKz9dWFTejXr9av8WFnFF2fMbqvrmUC3Y4ffifYzDkStFUnV9zPfYHpw9X1XjkoKibAijoub2N9zcSx4Y",
  "key42": "3qt53SMgWGimzkstDU1ysfRbmFzqaQvjUMLyEcaiJ8UcfAQSRDGHXVjwxajMELSTbUVYSUoQ5aBSAJSYeLJ73njA",
  "key43": "2vkk8WVDHBMkiBCX7pHWBVcemYm89SxBv1KxrYCztg8HoRqhPFkGPGsjq4g1QpdQ2frsiNbfQ8sjoFfeoBxZnary",
  "key44": "2Z5VrDWs2Eo5mBrM7NQto8YMCqQXxkwV6STiKm9BqUd31cSB7t5q8ZNwGtxYoYAW81VZf3kbZGmVS6tKQ52vfBZU",
  "key45": "61bZbBHmVM6za9X8MhnP9kmR2mMNfRxs1NevXpXrgUcnMaFwDTGHf8L3Mc4zKqqukhKdZ34CH4Gkyu9QLWEEt31f",
  "key46": "NobuuvERXQbezm1EZV27Le3HCD6cA5H35CH5czkGdigkpy13PdwSzcsEvo3QWbXk9CujiFwnBmBSnY39XERFLRf"
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
