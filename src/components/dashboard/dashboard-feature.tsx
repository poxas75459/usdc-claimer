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
    "4r5oappuQHVx3rM9PK6xb6uWErTHJoHF8wXecDb4fsz9JqUUxe2MhNw4AUXKX1ngu3mSPMhsdU6mAmsw72JKzyjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38B7iLtnWrTEk5zdTeaWLiRP8QvDoJwX2YAtXTCnCYSbkBuAGTQarKbryrHR3cf1fcmeA3QPNhokFEZssAP1KGex",
  "key1": "4mt26xkAmsEjQGyswDWGJ1CUHSX6oTASNCYQzBeVKFoCHVqbLnoQWuBQXS7u6ERon6hFuLdJn7zR6fQyUDtfXRGq",
  "key2": "2BmiA9o8w2uyhG7pbQD8x8iLazscvk9A9PVuTcJZ9P4NoHkADi1dLKsjxCk4vborwEQGtaf2DvyvXSwASXwWRKyf",
  "key3": "jVt3V96NXe6pwxySHfXB2rjJaaZ1jYfgsAsrY5ufWoru4ex4x1NE2YTWx91hgwabpHtpY4X8JJGPF7UG7ibmw1m",
  "key4": "ED5rWgafT7v1MicjEhWx6jvCgknTBxsYp2AghsnVLhrPDSHikNCfPauGEdm8DayW5kLqiMSR99PYmURmQBhN2rb",
  "key5": "QKwF8jFZNkYcakjUgxWrLHbMxdyYtp33UuTQ1x3n5ESrKsxsQtG9MpKBbScPdk2KuQjbypyRpDg1pRDJZwHUGp9",
  "key6": "wsmJ2zxkt8YJjZduakJua3mLiy9RnmmrNPuacoGKBmGKHxb1Xj84C5Sxouysfe79odrACSiyfNgaz1z53jdeUxF",
  "key7": "3QgwpEpQhZpbsNreHExSe3SbqXTM84MZAV8YTPfHBEj3FoyjbWsDDqz53R2Zg4mk97cRhCBMDsQU6zeP7F19K4ui",
  "key8": "5x1A8roxwozoCHV7Vn815JovSWUgivk5CTfvPJnF8fACLubbKtMCXnR9aFouLcUHsZpCg88qxPPdhLnStm2WrhUW",
  "key9": "2Cy2Nms9fpCWNYNbUE4gKKZcyJ1Ybsp2dxKAJTHDXYqCxk3Q5Z1yJQLSjBYwU5dnMAziLiYMRprNCa3xKtmCjNRd",
  "key10": "3oFysa49VvDUrV8bfc5K5hYQBLLAGA7fwrcVUPZ7SPmoq8HzYj4dLzpmYGFDEMT6KGB6qH9UeVxhNUACPUjne9X",
  "key11": "2R8QuTKzXydahrYKazRX93hqGkK1x2oHkHiQcZ6xsnABzfm5Jfo3PbJLDFXq5ydHmxSBSGxui8rEEVTbntEV2uaf",
  "key12": "3RzXekqrLrM3yhzf13wRDbo2n7X6waestVtnnnjvNZhXe3Sn5WoAC1YSyxctMrxXbDFb4NQSpXLQqy9n7pQX5Cek",
  "key13": "2fHkpN7riPoNdcD1LZtFeYLzGw4hW21h2RmDFVSdcFFustRE3m1q7QSySwQP9V7JaaYncuFTESsoR3nWLw8WpzKj",
  "key14": "4c5AagoYyGQJDpwCwV1HVHp7bqfZQuajBDYBrZcLxJ9VSgxSjPwwXFW9CRqpcu537Ez2gxuEUP2DYzx2bwXnn15",
  "key15": "515KjF8ognZ5DoqZiwdS85CMxCHx9YsUm6ZChdFQZimesDncJqm7UDg5V91vJgqWtC2iGdnW5m8aSQ479HQuCHbg",
  "key16": "44TyXMnNPd1KhzUBGMijfFrcw1AF7Qz8MZiYWQHyY24YBTw5RXqpaZZyGwLHjS5Dk7577Fxt1TaBuGWXFmPtPtnw",
  "key17": "74mQxSr2D39hwtPuLwiwpJ9yd8nb1jKciw3ZjsAnrsN6yYB7uPzHmStybaCpvg6NeopmTHAdUrmZoEJNStjKKTx",
  "key18": "uiB74DA3N35mqez67LxHm1fKXC42oykaCRSVfafYXjtdmNB35TWNajViUaXAHiK8MsfbkNtW6qfNc5nephJbGPq",
  "key19": "4kDwNCsFvJx55bYuNY7jeARVSJ1dy24CoRM5MospdGEMkfNKs3AyQgQ2ij13Z746C18jr75PeEqbARgMvFn84vic",
  "key20": "2K4FGAioEDCxG4eEX42moRZvxcAdpGTsNiqEjGkAPRkd1oQU9ipzhoYBFuD7jbton22waX5xEuczseq4P6b2xdDm",
  "key21": "34EFRVgEszrEibpjjdFxJjWiaTi6ko6wCR7TLgVxWXgLKGKb1n6NUw5zipCQnximQ9fhLb7nqxMtCkXbU2QBs66s",
  "key22": "vNR7XPuWgvaJG7y9bpL5uGSc8HDHx7HfB7EfKpv1zTYumed7q7nZkG7GPse5Ag2cQx1Two6wALmaMPQP8EstozP",
  "key23": "45ULeeiRapkx5Vdwiv1JzxCXWMqixnmUXyxrJMGpR8hXz69Yy2wDG8GJToFFVKtVgNwdEHGDdUprcJ2u3jw61qjt",
  "key24": "3Zi34cbmfYTkqT9apXbLkrBWJ1MTgJLXNyi5CpSMLte1NMG6znCyQkPGMi5dPVQFrwasgqGrHhUZyfmGaq3zGozq",
  "key25": "3SNLZTmUg9HT4vAiaTEr6Hn11dnh1yzhSrBkvMJ4woh1jbzMedcyUiSzhRadJvexoUCN1FBLqAzs8ykHMmaAh9Y3",
  "key26": "5JyRXcN944sW8kQoQ9NKkrnu6xeyNpx3wP6SjS9T2WZ9FtruxhqfqeqxwwsL1Kb3Bqp68ddT72KSEQBSVrDBnqpt",
  "key27": "Q7U4y1ztEg249txgJFX2dg1JU9FXp9FEQnUAxbHbiVMZtewhAjSLCaex4bxAJqkknaSRN7wEWJX7wVAG8nmDro9",
  "key28": "4ve7y42brZJfGAQsqgPTafxW812N83Fz1ZmyFirfKimEfbb85QCrRZQGxhY8yoGJDkVyQTGD8D2ztusQP8LxNg9i",
  "key29": "4W67MFEEd6YHyfFnr4aVZiEJVUpMJ4NkKkfGMJm5EsuujJJVPJf2ZaxbRpoMi6xiKNUTdwdNGPErKC9jbEzJ2HLN",
  "key30": "mE64wuWpQbBBs3YdVXpcCyKysyxim55JCgXyYELBgJpviZzYdU7kQe7B95cUV4UU7Ctd2hkUhhagDWZJ95NoXEd",
  "key31": "2fxKh8jJbrvjxtineaomMCEZNYmZkTh8jafKs9h42PAfSFXg7JsCRtVEWatYjbkQe4ayvneFc45Dx3x8gGiR3TXm",
  "key32": "4XxyQb9XC5MBtW7jXhj5g1SGd6VyG4FrAyFZbzomSPLHu3pdxzUaPTcPBNJG7Zw5nNNt6oNBu1ihZeQhUG9XoCsQ",
  "key33": "XeSpqsXo5zLgautg2dcZ7XFJCQZpEX5WbZNiHzdkcZNA7WHfNo8baUA2tbJGuGtL8SSSUNAnce5wSUj1MAEru59",
  "key34": "5bFN2VFwgWqso4zjaosVzyE2jQJtVsHKgnY6TgU4iQmbUXyRJNQrVsjZkp9oeLzn15nrWRY2CgW1AtetuX18XZuP"
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
