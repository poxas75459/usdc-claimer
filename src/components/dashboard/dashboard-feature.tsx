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
    "5dBRjXtw3HTchbXtMXD1RDExxPAoD6YuJ3R1YDSdaN8QRQxK6jQpMzifUqyrTw7RJ42HZ8hUpiKbWXkVddwjxkQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kB1M5CfkPGmagEqVU69ipcqPeXyGen7xywysvm76aCpBj5MoLKJPoTgWUYXqtXcssMq8r8V6JDchQWEXZ9hGPj8",
  "key1": "2kusyDZLnN3YMzj6eVzfXwNohTofRepUPxLfHJJFs6AZgERvHEWJBKUVYcqedK2Ku3KewXrVwdDtdGyfRveNir5q",
  "key2": "3xhm9am92Citz1d5SVnNASnKJGR7G2qo1LxCFCLgdjZ5hWjmiiDz2tZKbQrQePnvx5yxJsXVCUZWtXMkDcBFjt5i",
  "key3": "5JHfZiwrhqLM92HhL6te6LzxWUJ5SvneTjh8ZgFgGfNUy4fNcPQKFpncabT5LuoukvWHf1fRSs4NjBNrLi5QSnWC",
  "key4": "5k1hugpxN1tJzUdFn34rPDGMvNiJvhuAg2NyG3kp7ADmFUdofwxTptPPkxFiW6xJiV8Lj5k296qUsKuPjWJ7ooYG",
  "key5": "59N2u85fMjFKTczPC6iYtVnnVh3tEt24ftiPj6iWifBrgdEbfLESS2CrU68pdY7b1GsX3ULFDAWViDCPfxdcjdmD",
  "key6": "EJBRuRc6DxvfQ6SysBFyQnniNkvG3Hb412Hm9jbSYo6suzaHwBH48ADQpGt1xCfPsjR3Nzx2NbVvoYfnwtdA2Zo",
  "key7": "4CN3qwZdQtoT523FLhUYo64DHPUFa4W7HqiGWjzqyYshekx8sVekxPobHPT1FWgP9Eh4xpKoydxg97HGgtxPHd4L",
  "key8": "2fK9k62638TxnrdUoenrEuk3bTjv54DA8zqKakyXAtPZUCfGRQwM8WsyPb7i8yqDQnEgB3boQgGD6o3EKMBS22So",
  "key9": "2zYHvHk6gMmUHd6J57S7cjQ81xX1F7umXfDLkGbT51KN17f9S6fRWytowTuzscDjKSnF8FDJbF3sBHeLiC2Afghb",
  "key10": "4Dv4QAGHd7MUfgSNhGR9Lbmx3j78MJU8Np4oxyFcsMRLmh6SXr9yhoFWFLRLtm3FXXedpmkB6bqqwvhKoa52gHrK",
  "key11": "24ApymHef7LNgYJ4uEcXbewutnSYPbauJoToRuqr5U2m2cn5Zinmiz3DdCEdQ2U3UoxhdQpJvc16XJM2qFW42ZVJ",
  "key12": "5sJLmsgGFyFQnFpMf8aDHo2JGSJRseKt5e1QNEuSUfrjmJnudTw5pwZaNVPsv3QNNHCGWmqwttmZRDNwL3kEoLva",
  "key13": "4x49gPWecQTFtLHCkxoVhRswhE4nxz16QYincSvPodtFa2kxj2Pavr3cXhCGDAZVPgXmn9x9Nm6QPNFLnqFk1z51",
  "key14": "h7t7LDnLVM6JQPxoeMUbpgmS46wfLcuadrj8QNbZc7ysF2gY7aCh9ySEr6eGq8Mr7yZBif1S79m8DfpAhbF7AUE",
  "key15": "fjFyvkzaBhtJoY1TE1GHpqwizK9Rqeca4ww9aPJTh3weDDCt4tKH7yqzD8EMSoTsyJ213XHRGu4XkjiThZBi1xm",
  "key16": "3sfvbPwuXxbNhU2XrcFNAmCTtj7Yo6mSX7KfJyqJQfwozmZjX7mtRqbPhAanerP8RfSejbXQR9qtd4RBrgMjWeLY",
  "key17": "4s9xPUn6MaK9FforXjM7pEyt1fao8s6gBU2Rq96RWw253RtFQVhRr6kYceKkBSF6Sw71tn1eFvMxzetHCrDhrjvG",
  "key18": "Npw77TqsndHwrRatFFuMDE67kTY3eiZxJCxzTo9SzSrnT5sGyAvPWej8Xmze7WxHabzEAxWEMGXbCwEtRJeivVP",
  "key19": "2w9S38jePcAPWA46CgvhRiDvLc5aVnhiKpscpUJc1aC78M8MbcYqHKEhqjfop6uK3TswgH1ZYQZno3HLB6yAQaT9",
  "key20": "5hLSguEHBrYe3Uvas18JSkK72AqJJ5pv6DdrcPmVXnDrezGZCex2tRGs6ZKwgtymMBakoT62LSaW6KPY1kw6p5ea",
  "key21": "3YFPpsWoSM3VA7Sh8e9mMLBLELk5y2FCdzwxMm83PYpJwDi7rE9VNVuPBdFifnVShu3WisqaRtxSW1zMpQX9HezU",
  "key22": "2xvRohukbj9nixD5vG6Tx2Uqd76kRhqveHTu2wx5xJoxYATNUQcZfRr6HeUaVJf6EyBYL8qv8Z9F1QSiqvnc9p76",
  "key23": "2oivTYxDRaBk4SV9GX6kk3QPG4ZQxChtetrFDYzSrfSYNvNssyqA5HHbcoaPzi7gY1vSSs4d3wzqqvR28XXLrDAs",
  "key24": "2UT8q4k38ZiCuX19EEw4me9ftTvRcTK19g9WagXxeAErd9nQ72p2UjMfB5kvfBjXdzwF1Y7bjHjNc2udBEjMyuhf",
  "key25": "4PNy76vfg121geasqVZ4Emrei1rCms9dNdWfcwPjUagdvhaSMeyEJqb3LYEpqmRXYng2pDV2q8uUCBHKMXmcEYSs",
  "key26": "zkR7hRy1yszkX3wWVSX34Ag61V9Vcee3KuuoNFiQuUNPC3QzPrvAMunnfnvsT7TZu3yn7xTjtidTYQZcHGRVb3z",
  "key27": "oYoZ2KfXKcTNq6FZHirAHvxajiPp36No5kAn6wTjcXBGMYmAu69VYq13UGwCGrqYVYJX3HztZA7jkNpoYrGsgJe",
  "key28": "BbcfVA4Q3WH4ra7mbq9KCtXwpDphdu78jmYFw2eufA3uqmHkxLg3NXUvauNDHTATuWrZbStS8EqvYu6bRb7xXjG",
  "key29": "23VwDdsowbgqGaV3tzmRGoa5aAE7jNe9oCVLbXEHEwftp5DgRMx2ZBeveV1p1Q161C7CFHBS6Pjj5LRb64kT9ijb",
  "key30": "5ggUfcddXnEb1ffqTqkANpM7nW44ox1KqJqHUZcTPx7gnEgGr1sFWiYTEqV1d13pSpnus1wxQGaQb934of2WHkZt",
  "key31": "NxAUZLZrFso3BcijephVaTyLddXHY5e29QQL3qfaWuJgJQtuUCv53X1cX5QF7jnwvpSW2dc3QjcnsRjUxyCDgxy",
  "key32": "4FQwveXqVBHAQR3kVFoXP18mUNAUWcCjuGw6SNBeKrRwU7t2j6NqLgKoeVAYWJUnBEL8HhyEncPAYqPopPkvAA6T",
  "key33": "Kp2fTLfqgGqHavuL21aaQRzvbVRkwMzchTBk4t6eZ14GbBxcBL1UE8pHKa43tvoxCXhXvV2zXHLXmbyQmFAakwn",
  "key34": "5hAyfE1GWFtgYWpTrKDwDimg6aKbSy5Qsniy1jPEKMrjvRrF1phqpZYZDmGwshtgC3XpZ1qAjDnKj5ivN9u7MWnT",
  "key35": "j8EgGYeggdvnfutrEHcTZ7h6yTbamfj5uaNN4b3FpCqw8t8Qyzo6NwkNmGXknirgEcMcTScm6K3JXoyyPTwvjNk",
  "key36": "2cfCzobkZ5Sxqp1HGeZSGWBFHPVCY4y8dRZ8zZinFnx2mJezZA9jFv17Kt3oeWDsqCJmrtUMTcRBn6uYfYNzcPFd",
  "key37": "5JSDLEexFkN1LWHkfWZWPNbD7HkUPtbYcUMuKvPVrtqV4fjgpRoN97FEBxokVLQHxkZtLRnNub1fc9uRATLi56MV",
  "key38": "2pBeRbReHJgv52BPpVWrdCouyNkk8Um2FWDAUCJyhUFKNmcJhTUJJok5xbFMXHywUFiSkFiQHQSqK4YVH11we8sW",
  "key39": "5C696VA4MTPFkmyFz1w8tY5DDUTvAh77Xc9pxqRtV52nMUyjVwNy3zscfvpBbexYLAG9hRqqEaCBFuF8zetrXH85",
  "key40": "CZuMwAqTc38TY95Hp5gbJd3b5nrvKwh3Y3warGS4khTGERTksRuTsowQCCRoocy4hWkqhgygN9xV59GTakhTdvu",
  "key41": "4STVEcXT1Nc5eNmYxN2WAePD12RS7amGftF22dwy3LXTncpxr5zwGGMu8JzS3jhRB7dg3s14VDJCuF8Jggdqf5De",
  "key42": "43ps873aW4VyepSZ4qfGS3wBUuDA6kzK9T5TVkau8LSg5LSEKpbmmJwfUmMQiLxVvcgnbWvVXpzgDFTkAX6ptoyR"
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
