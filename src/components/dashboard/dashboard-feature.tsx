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
    "2KN3H7ku9Nr2sq1VMwrHZxHniTBcPJbsjnHNAi1nMqfQ1Mk8k1RqR786VZY2AhfnwN3WR38p7VbohSrqDmHbTNDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cCfjXuBKKcGfwXDYM3wcuNRmBzsFnQimSwGaSCU8TNgTMzNxaaKhsmi2DXX2KcnydXVXU1up6e3UPVhPn3KS1pF",
  "key1": "3pe9pUFRKso1WdGYUdGWdo6PYQ8L2A9vxaHsCPsYXd5vDfXJ4zw5B9uiDEiUa9mZZqJDNfxk9fTDiSSCbUSdvH8t",
  "key2": "47kwTvYte4TuHwYvHEKSck5TviJyjg1UoL5hrwdLxWbkdraAdM5tmgZtCFHydVbFFKz8rN7qkJcgeJYAfGCF1cXT",
  "key3": "aQEejagR4oeE93Jd5JAXgUksLmb36Si7yi2QqztNjqhKxMsP2EG8GPTq1CBGrpVTcjSX8e858wmjUFbSme7isGG",
  "key4": "529pjWeF1jNffecwVxFL1CrevNamiEzDVuZ4yKNBoJcfcF8jEgL5MQP8dSshfAmvEPjQzw9DKfFZLVAkwFr5BBv4",
  "key5": "3u6GWp8E4cE1S8zNtJ3SC1wzMYnzd3do63twf1eq8Bp2vdNt7pH5c5ma24Pu8FGajT8meCtErUGpbvz9pAHVJCpo",
  "key6": "3FqVH4wZ5zhJBLnvLR6xi7oN6uohPGjwezCKgRYrCAN5kPKHQJ9sprm3x2bcD8WJeM1rwGsBfZBRfLFnM1C2a34b",
  "key7": "4DUtcrGTweEZ4XvAKXY5hnmWoooTUM7e9gTMfrjATnDkCy2qfh6YCjU7ejPBEkm7jwxtLjLEi4MrFvVPj2qozxHW",
  "key8": "66Bd1j7WiV1fwWegCrczpxg81ZUrjKav73i3VYfqYkzBJ1RfZm8Qfw98wPv5uwJiTkNPuy2RHWyFLCXoE2wUaHTZ",
  "key9": "2YGbdGaxJVPFwdTLeYjoHuCPwka6pE9YAbVaxiEGg4GwBX4ZJMGpjS82EQZxQ5V5nymNu9sSynxR5Cj5arQxoXQR",
  "key10": "4AX9sPpS8CoMU5EasAKyRWTMJVTUjED7iPBtgWdGo1hZpzwtNu31b8WHU2545CzxnPxTkep4c29Jw7eTg7yNGfN5",
  "key11": "4To4ETbvJvPNTL8NoaBtd7spehS94rb9GpmUPESdyPJcKy8K6YtsUG62FSAu5Rqyr4p82Nn6J3WireuACnksEaKd",
  "key12": "4C57iZWn87oizPA2KfSSu2vLq4WF72SBP1WcTv4Xn92H3i1YGr5oA9sfKsjLyqBpJ1iumQoMzxmQv2PgnjHqctkz",
  "key13": "2qvb8iDCDZHMntReHovLFb8VQ93KkUdw8K1SBMdSgVgjrKpEpyBd5p4TbpbymYs5y9mbAGXyq5MLr1FmDH9mjAUU",
  "key14": "4j5A3eHKAgWzHSM7gj4hq5UqVTo2cB4ryt1S5k196beRemuFWsHSqt6th8xX62ippRN5RBQ3CgSw7gi6fEZpZvTA",
  "key15": "5mo5SWDgKPi4YKAxxc3ovM8JsfL5pXK5wDVbfyxRkSE8E9WiZ3XibnUTc4Bq7iUYh229BkvnzyNUkLUx7xgMbUtr",
  "key16": "4rgFEzTAw67SFuwX3xWzTPKsJDx7iWs7vzRRSr1SijkGNNJATXshLKoVESeGjCjJHy8M3G9vEEizvK7kZ16YnHro",
  "key17": "38SkjekErRwfADe5krL8wrnYPZXuF6VC9V96YCstu54JknvWUsvcP4aHCySzDfumrsmVnAwezyvn6fqgMMLyNygV",
  "key18": "34GF2ve4gGXJCvqm2b2PznnUrAwawvXGYxE42XiomKkEmvFkTLk5AW8jWQUEc2sbQz6jRMV5fUFCqpA6EMEXBcw2",
  "key19": "4X2Z8vkuFJuFhrsfg5tJakfpdghYWnWYghDGuimq94yiz1pFgqrX9ZVCzt9AQ5rHcYzqmdq3RqnHNp8xbW39rV6k",
  "key20": "2SMf4jvBckEQTtGcqBsAZ4d9cpQsbJhfBatK7WEVGGDAZAVfkEciqytzUmwjHBpAsbGdFBWsL6txZLMhZeqgrBDQ",
  "key21": "4ADto4fLtAFbW3EAqbEY722Y2owTatvFvQqaouDcx1ZjsjZGvJMi1fbCix6vU8bUQHypMbUycUNsKVTXupPJnvD9",
  "key22": "3Q5MZm1n68tWUQ2ApqxV59BwBuGeX1gVCmNDkZAZsjEHedBEwGc3wUnKA65XQJEPz376vRi77H6tXKthwKHhmTQc",
  "key23": "2WdndCNFY1DoDMSN8PnPKwqp5TLU8wmaKJKkkaa6Hdg5HLcibMfSNQo7JFUiXpdh3NCH2ZFD9r2RrBEzxRY6GLXo",
  "key24": "NaXs4RrsCMRC9yrEKjD8gZiGwJzEJEMTL5A7Lmf1rsuRspcFmhszfYwz5nCJKCuY78j23kYwGBKaT6x1A6TvRor",
  "key25": "2snQvMLjEKUPXZLwVBSwurwEZib8KYYBQW6Jx6kNX1bDiJzMx7fW49xheoijm3uCrJroszxE5fKPA8Q8PF6ahTjZ",
  "key26": "56F9zxyiEQLWcdgZt1fkcFyvATHbQmA2EjUjFKE6L6cmz1bL7SYisbGnTo4bdVHkHDe2TovwWWZZvXM5DiDr8mug",
  "key27": "3shPhV44tJ5jLUnPJTVjZjvNnVedvkzfc8eG1gyHATWdi7225jNHL4quMsSAk6cS798DTzUkEakN34dxa52N4fh8",
  "key28": "3wmHfVmPBsBbLEuV2F1FaTaqa58DYnoVtqCeLGpcvtnDQ5ibFXLLroBYMi1Thf36Ae2VV2m1CrSSfqaaAypCBWVD",
  "key29": "55eB45ofcePn8xVeJCD92jFEcpDGnRBJuJDwPWejMDaFi3dD57rxrzs6CkWQhjTMGEbRgKFDsqF4LA3i11aPjTMB",
  "key30": "zxKVuia6QTtM1uUP4jtXa1qDDaoAPs9e9EDkXHNMEUDCZ2LMNfSFZgoAomFX4BWwECWwCucArw6rKF3yxowsQod",
  "key31": "5Z87rFM8grqMARsJ5RpMwSqaUXz2SpshaK2PaktEfkAc6DTExaTkwCc4dRogJpBk6pGM6x1Zt9W2S49bkCeHZgK4",
  "key32": "3BWGSGEm6qAjf8YeD6z4xRKSUDw8agMHeK5NRerD238idjeFP93ULJDurzqyvuTauCXjEu81xtYkTJgKiPH3BQ7d",
  "key33": "gso2HCkTACtzmMfZiJCNSCFABm3MfCBrwkjpGvB7pGQeyiJHfhNsCWVo18X35PBm1fKCDWAaAtcAvc8DiNrdry3",
  "key34": "xxfWyiU2AJmKeAHoucPC1pF9LLVYAZzTEeo9tVRHiEPJFQkAxDY9NemA5nmGh1AyiBaGVdw2oZkXnKcm8cWGpWj",
  "key35": "4QviSYgsoDuNS9cXCcvZxx5U6jUy9qNaB9iETpVnGYwwVVvUkuAwvSwgSxwAfyJdzWjxBPobg2XXgz5trBz2JeTf",
  "key36": "EnnuNnpJ6fWUkCpkYegv4bWtZiqxkgm7RjUeDE9pZ3jwmcmC1nHxSM6huqAFZt4csncFNLaLheFTHfXc5aJeyqV",
  "key37": "3Y41eVw62hxpBVpwQBCRn85jJXBFpzoTCBZzUKpzZGJ5GZctprUUStd9Xzn9HJHsLbTWdupEAo63gSMjVLMbJBd4",
  "key38": "fHqzzLZ9DfWJcePyzxDq8muworu6Uq25KerqYEB6FH76MLAVMuZwYoq3fZNAerBr8LXFGRdD9F1WbKKt3GAUd2e",
  "key39": "4zvPEZXhvW6EVQDrw7mMZ1bDKnbBjaWjkk7FRbLpfESDfiCRCa8QiBye7Ma8y46QCHuoa9qF6UW2ifcW88HCmCCr",
  "key40": "2yBsTj4G8DHTt98aVj2oBhdzsAWbhH3cCsXibviwg1hcDNVrkxRX8xBQba1FuM6i7ncfAJNStvugq3fGoECAHTm2",
  "key41": "3ysTdtLNvq3bifjpnSAowXYavp4Sf1qCAnmvR7adUJR3NUQd9AsMnSZ7mxaZdLrpGcY8Rz4QMHg31BRC5yDqe4dH",
  "key42": "54aGfWCnJKbryPoME5Ck8R4y3KRP8ujiXv38cMsugDp9ZCEoyv4Ei7J9FuF627PvT6A3kai685HD4oZYvz1gJTxh",
  "key43": "3dBhnSKTLSakMv2Jb2F1HCASGuSaTMHY6Q9i4zHHSN6Wk1u7hgN5NAMT5nJX6aTWUsQ374Kh1WcrrAF13RELfSng",
  "key44": "3gPCLpdtYbx5mohJYdqUAy9UEzoJhbz48dkaL8vYsYcc9rz4AzN4qMn7YV4uDgKY5GLzmVdTwZhKtSKJcXptXWWr",
  "key45": "4dzS4ci2t9hXVEUYgvwTPPqp8nsAKT3Y3rpbHfMUjMG6BRwhN69dq1Bnjf1fbXcjKHAPwWSYCxXeAoiZU2XpW3i2",
  "key46": "4MRJ46d9BzYmhWzG7S5UtMbekdevisDrpMUbPEunwznvQEWe3YCceDusVwFkuZ3r2hoybeqigZ82NUK2es2mLTfX",
  "key47": "59NEn7pnUV5kR4nu8WzPC8hAhsirkP7pQ6xuVe3qbNrmbZhncZsszQTy4GYDMggoT5hWL5LdfKQryj4fYVW6bp8g",
  "key48": "5atkdi87grnebow4Lw3zkKqUmQ9EnRFZgiBsaeCfojHqarQSLTvM6BNpbAnVYVcQtupKN2z7nScSnZAwMUe43TjG"
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
