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
    "2onsMAQFQXztW4mtU1LUr8vFJ2k9bWfdRAkex53NcmCtcxGv8qDZefTM6yWeR9xJcDAqBfddhkAwcejnKrU9TSKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdQuybFUFWAMWs1oRhbDrAdQj1NTzCU44ciDRDZgkJZbcKpYQN9msbLCD2cB43JgzjeQ5qm7Q5oMCVGycnPnDrT",
  "key1": "417bRbKxWGuZYAppyTACCW4LUkdb9nBFdSDsGbVSWLJd25gzZEar46weix3CQPosPyFoiRo8BaabmBV2iEuPp1VZ",
  "key2": "B5DYDfgkQ6WqPWYVAFyrRqUynxNnNbXFanJubsCeY3ZibSXVCpqv4VZ3csku2BNjMvMAgXE3BFCZTjoUZTry93y",
  "key3": "4wZ57J18iWnwVCwAwoDwKRKzuwYo2sGAzin5hvic7ptWkHiqrjg927gZYn9Vjm4sfcngiTHtKs9odzbBR26Zne7v",
  "key4": "5v5obREBSb8LCYX21xoBAQNTgKXRrQRmvW2obaNP3U4ofR4FEbraXGf9KpSUfUaHWxiU5igeiGSYAZhtFXjmHnWw",
  "key5": "4WYZyBzd4EGyKdY7XgouPzZPSwuZX7Zenh9vvvfMWkLfmVVj4knPb8KwJeWrkHvMCykePUh9Cvt7fhAjpWFyR5Jv",
  "key6": "iPwGqLgABx6cuqFiNysxsYw4Y1YpqFSRiKbh3PTFD5uhxVZ9aPhJsYmqaQNtW8SjW4ucgVfoNw5vGL6dDhx1Qm9",
  "key7": "27t382mGeqWTD7hRA3ytFrc3Z6cqPYx2ehZx7sdKTX5brZmSbnQeQay1EX1KcjAHivVGkszYxRXmeuFQpyQyhxTD",
  "key8": "3DDK5Te8CFjUccrqYb55ASBCPLVMGu4yHUnUwBYaN1JFc4k7Zgbccn4qthvRB6Ao28ucJ1aBpZM8kWB5E4sMgWds",
  "key9": "4CwuLjPdiSnTC8nEuVQDrgxggfx65ULAR43MejoqKwv4iZkKLayEhbwYhfY7aW98KtZq52D2H853kCFHDJBYDnfv",
  "key10": "H6FfXiMoCxZTipqPrQXruRw1LtFLtuMYx1AxX6ALhr4zDuxtGLh6JVaxyU76Sfxh66LQg2N2SmyMATjzwPYVZyx",
  "key11": "4nUJsHwNYRepKuQ3YXWA1EpyXiTaGsEDzwDffobk5g37qEarW6CFsVt5aFJi4k3mbsd9DxeJe5sxey2URgpfcoSr",
  "key12": "4uFbuFVNGvNUYorEp8F6ZNx5QUXut3XzuWp7L5X8JFDZyisdkvJ8c2bFMPGEGx9PXvz9TtLoAF6TPRKYLniVM89j",
  "key13": "2co62nuaFGgTGauXYu4m9DjeoM1m2tkBW2aXwU932vtNmjgzBFatt23bnfsbacMeEY3GMxpsQ72aUch27dExxurW",
  "key14": "367GXKqmGKStjSECtns1dMmGys2QP76nLk3RMZiQkoJDGHB8dQMwxcJPKdiD7s8wY6p4hCdQiabzBWTtxfzRXc1r",
  "key15": "5usqDiWDd9p9p4a55LGY2xi9pEU17pXGckBDCwoZnMYS1vn7nZ8oysfCEXLpfrQVoqcWVsVRDCzpNgr3M4ePWYXa",
  "key16": "5vV9HtZydP7NfqicHXEoDXM2Ceqc7tf3JmGjRDk9AmbQpkUMf3RJJnJPhsNd694psWqQHpPxuxvQVkMXGti1DuAB",
  "key17": "dPLeyxMKh8YHqeoZVb6GToEUC9dKoYViwjsbAePZb7sUSy6P66EXhz7zZi7pfGwQi2d8J7gmQ9gdF4D4aRZqDV8",
  "key18": "5E7b6EdA2RWewCTNvawMWwKqasy7h69TZvbpM9GYU6qLn7KQEuQTG25sRwzGgKkYVabjwyGTQhp7ErSCqNDyaUnu",
  "key19": "5FmELJx2NbGwX7Q7b816PL9Bxrd39WWW15PkzEgNGDUSbkHA75EuK1f8nZ8wWnMHKBDYtNr7LVtvLvpJx7Q8USKs",
  "key20": "67mYThxuojPRms9G27PaUmeHVH9vN7nV5dyeyF6q5u1a6temV9pizyR4EQw4XW3MfLBAJxVa8RzE1afY1UPAQGpE",
  "key21": "2m118cJyvpcprwLTfQEL3AbRNziPHZ1RnzmgJGe4112kwx3EDK3ZFAd3c2m9phVrBBFkCxFuz96AT7RRgn5kDP8n",
  "key22": "3nV8dxhgvEDGg5dV3ASvmRQgEi3NKBfcUawTVuDUtdgk45xgknM5KF8Z2RfP7ZysUw3ZxWZDFmW9ueayn7ZCKtoU",
  "key23": "36Nqx88bfRGg73hQPRrp3yMyLRkRJfZRKGjakGZha6EYFTWrYvJZW1z9vhgbnPywa3MLVFAk691cqFyiraVbDBVE",
  "key24": "2maMmNwQmhXTbFzbxTR5KZZm5uX1JqESMSsPfjo1MAwAqMAwqjC8NizSELqAxvV6cfajVpfj6DPBxFXPwvHmopDd",
  "key25": "3PJFwQec6jtc9jPY1txVthG2DDM6xHvdnomDSrsQPLHamBGVDQAS5UgEjNa34LLRpx5wBUvdqbqLwYEtp2V6SM4C",
  "key26": "5VB53GWt26Av4bsWTgv2sojXXFNjNbY2Eq8DDhpRGpNLq5yx423ERyGkRJU3LbJRHkmRfkEwRNfAWZN3yshGrhGx",
  "key27": "5nNHb4AQ9qc5Yz4MGPTeQTuNHw9pSE42C2conPwukV3eXabVsf5PuWUmPqkY81qp2N8VTYpUesqfSMCMerVDVDZ8",
  "key28": "4qxYG52YGvTmS1biDLTRAGQ2Ee4FTaCF48BmoRhs7iAVo7zASFkLhWM5VFgGnoXP2EdDuDKrvsAND2GkcGGsBU69",
  "key29": "52MymTFizwhbcArChHHrELsQc1hxV3kyt3q9zMAedTA6teHVjGRLVAM43V5WbdpyxGa27WSSiwLbDVR67Jj7K4ga",
  "key30": "4K6AhiePfjgyNHhedJFc8CGQvhesmTWTFgajBWvuf4JkpyHphyv6FgYUfQDgqHQKKr3NoAjCygcqNpLjs7BhPC57",
  "key31": "3fmL5Djp6FUdfJcwTytVqjMmfnz5P9tZHd6RMRsFb5u6hXDyEWoZyj53WYqtRaq8soTaKMnJcnx2j136UniEko9j",
  "key32": "5xhCyPSapH2GhGx5Q1Nxaz8QgqkYfr8YAx1BdvHVQjGxYBJfMzcJihJqjdnR3219ksTXZJx3dFC97tQo7xC3dKpJ",
  "key33": "26Aqwr4RVKWMwgM6YmpbZoaCqfGkafsDQgLMQF3znZWS6zEsf7WvSdUww6VnXGWrcCkb1bTmBKBNMESiUoHXoShJ",
  "key34": "2UyHBvCNXgjT47VrHQMz2y3nFjwYvpWKCz1LMKjaE7K16JPSjHC5kSMqeNyawJP7XLPfjggtEXNZtomibAG8bth6",
  "key35": "4ibk7hWbjxSw8bBFGrsrzci5WKhJ1hm3npVZmyDzCkJfSPNgSDvcawTDv9TV3okj2EoXQVt2iP7XPxSZkBthmSq9",
  "key36": "5syr18jsjSisJ28raRq56HoetsCPPDJN1zceyvmaeDwdik3eNiA7aWhMooG2a9kNfuo1qdekVXnwy8famhaYSQ94",
  "key37": "4yqaBtMyrnewcvRFqUfmdfAjuM5ALGC8sL9Wz3HL1g3bwBwEEF3PJaGmFxKzUAC98q9GHjWK9Z7LbjGrw5vTr7ge",
  "key38": "4FUEk9rSepgfvMwjU9QyP2ctJBbHomDmyyyJFuX647GCheA33qQaCd4QacnX9kNZM7rWX6fsEc66zUnApDRsepEd",
  "key39": "4EZ5AQ3AfJCrWds3f6sAneiS25jtZLMcEzqQSARgc9vBJKJhHn7gaj1JB2jiPNrry5BJ4ba3P2NjDitCEF7cTPyp",
  "key40": "48TSKmkSYHRqixPeiKuB7FSaGVCnF2Kun6StGWhJyhWju7TiSBQFA5atMKevw5H5tqRrm4Gei7wTxGZRyiFK5BjD",
  "key41": "5FjBWDK37vY42oDgSheXi8WUQZf7RFgCUSqeFSbLr2rPf2bVnLRcEKXnhE11egU5hrxE137X8HFFS2ZRSDD4wDUd",
  "key42": "3Ayt4HcjzjCruDSYLxYhDkP94Ys4FVTRkECw7FE1cNiedbbJ9yfKREdBg3MBKg8CNwtFyNsjLQyGz8VfhBR6yuWy",
  "key43": "4bVM1AoF19UfGKH6shiWRhotqhedNMgAoQPaJQDH34XgTypRKR334ZMjqcMbVjV3QpcmEazktvzvsR6kge3isZFV",
  "key44": "4TkToxZrwcaefjLdw1WZVfXG12M9rjnWm3VvHwNLnVHpto5MJhVDrLCgCAH7k5rvg7BZx67peAsq9HbhcGU6XQEs",
  "key45": "2DEUhgdCTYCX2VZgr9H66Ggy6f2J6AFBPf5HtQjfggP2zYCvP5HUjumXhiETryEtNoB2KuS9p4k8VUjtboBEzNuz",
  "key46": "3WACBN7NtfGdNjaVQh3M7K9L6LptpUZ7Ne3T3UJwxp8hWGxHgB93hstWk6cqNf6EiaSQMiZ55J2c296p7q7BBGnW",
  "key47": "2WeTNQX2apYdjQDzBmV9DUG4e9PXRC72ngNiw47XcY9N4Ddw258SLRoV8n6aN7T9hZrfDE4VEjcduppryrJsq5Ze",
  "key48": "vFRLD3qp5ddyjFe94AW8mUKE8E2kPP5K8TEq5KEyHPXteUvd25K1ZN47rCTm2L29ni3K7XvHedsHFRR82h8vQ8N",
  "key49": "6LceNvUhWKJdxdARM5VTkX1NfemncRCzDTPvXDLyV1pL7DKjzyPNJdUTmWP6yywzF5ybSfL7J8LKagh7WZmk1UY"
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
