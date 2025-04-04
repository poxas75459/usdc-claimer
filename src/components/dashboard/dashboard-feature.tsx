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
    "MkrUP7kJMLxpLhFWr6mqMM2NCy4mvg82TSzA8aQSDC5QVkFyNMNoAnpxzb2ypPeckhmZZ15jutZDuHBDUT5ayvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YF592VixFzpMDbWWTShMBUS6W1tkStbhVtvNzvL97tJgZQxW1sULoNm5C5AQbYnSTm5jUKs3VwVJd7m75bg5kNe",
  "key1": "2UDmgfXSAQwd7V2oXKKaFZ7stKo6jRj1sQbzw7RuBNzuV1PQUtTuc3hxZUhQBAYwpvp3gjMtthMKcZzv3x9at6fU",
  "key2": "2TphcX6KFku4eo9GoPJH4P4CGzcWBnF4D1YYNeaPujHDRjT3HZ9hX9s7XAicv1SNyhBUBxHGaNQN7d5ksVPJqB7q",
  "key3": "5xDczouQK3X8VZDAv5KRf36f3tnByZwGbHod8eVs8JZ1XSHpEU5iezN2hSqm5hzygKxWCMTp6tQDTZEG13Hv9jXq",
  "key4": "5uSdXXWsVLT5dYi1ko5udG2Bu2jRs8Z87HGRXYi7jJfF4nsYojAYjHYiveQ9WZqmiY75h6dZW5M9vWKcARxmM8T7",
  "key5": "2P5JisgHmQ16WcATLRUQVxb6D1DvvE6DFcadDLvtG4E899PKVpvgPwqZjQqd4tPqoZoQYXyBR5NsBEprPtJJW5DX",
  "key6": "3ZgTq6tRKrXEJ9FKKUL6i8A4NktZQJgFj1rx2nbDaMPvkzt5FUEBhrBJmMwgpQpeMjQuC7cHUwDaT5CNkzTwg3PA",
  "key7": "5gRnhYHEyCZCZrFzzxtC4TeDkjNB9fyzzSfzdcUAPeg982jpNQYApnidpqU2SaNh34PAiTFudVb1zhzXxpMoXW5n",
  "key8": "4QD2yentDxFMFqgnwr5dUB8je7S4VXpYDfJAW73pXBArSjuBSb3D2aitvUsuoLRvqgYunMU2J7ikBAppCsdePH8B",
  "key9": "3LVFWqsPECyXMNJacVE8xhzV2gbXY3ytFRmFiQCj2jvdFhPcWPJ2RZ8i9CJm9FFZNNfBbsPA71YbVueURqsr3r1q",
  "key10": "3Fg449TbpJPDuwca6jg2LX3qQGd2h7h12YMpd285bt5Lvb5UbsyVpR2Fpj6qSuiy74ttqkVbkAcXrFURNEuer6qP",
  "key11": "3xynvvfZ8tGRUbyWVrA8xWFXFTiMqecDS6woqQRuwi2ryBWfunTpaD42FBH7rRDWGcrZkVGPCePyy3snJqQKdb4M",
  "key12": "59RZQ354eCjTrdQdfKU9Z2qsMBFGaSGB91gyC6PcPxbJkwhosW1JwLVfsvrLNLYY4cZJXuJjXe9bAncummirHLrh",
  "key13": "4QB2GoBvtsCRHmUJ2WyAPzqTwvv9bMTkREs22TWg53hUMFjxmEMQNptBWJ5JYzkdhent2aSNXNUJbMaDBodS6bZ3",
  "key14": "k17UXVu2z9xm3Hg761cxacEYsQRzkDSKg2fYeaJgAGJ4ttrtgmsjbiRGa8hrWuaYMXrAfX7U9HDNE9q8eEdCUit",
  "key15": "5Aq5qmyKzPTvWiS2uV1Y9EHj7xWf1XuogNtNLMjAdLEYYQDGp1tNi3GGgX9b3itZmDg2tQUw9TGiC2EyYFrYVaup",
  "key16": "4LVjNoK46PR43gdbF6LmYXzoT1rNNDYzTbBMF1HeJMHB4D2EK9hKNBN9xMYDo5N8Ujj1hwZJePKYFgpn6A9pvS9C",
  "key17": "2VAY2Y87EX5QhWq6ubHJZE1z4ru9cK1aqPdSwcXdZ5oqSrVvLQddoRuAMpDJTEyEK4cTSYjko31fTYAy4ubFiSzn",
  "key18": "it7X2itEEJqF5GPoGpnVarT2UgKccyaCFrpyNq4ijued6xfYoj47Bd424Rt8dydw9seQZa73o3BSRs58fCYPV6J",
  "key19": "8wHojhEcmHh37LE47woNA84CamUtpn5kCZjxribkJwxnExj5UxEtaUwXHP1GVFRXDKqiZwnTbp1cveLQuLk2fw6",
  "key20": "3TAtkiidyEfW1HawCuYJkGszATudHpPQkwfGTtHbA8EDWHkfxm3E1hiyW8ZdMMBktJLNKLdugZjfgeNDYjS7DnSq",
  "key21": "4YbVdGoVuKhMdQVBk1v9TwmNNmUuqkJKXinzyNNFCmBxvvaLYPurJu4KeP6ZPuXZPNcCNnws6uiE9US5j9jVCayP",
  "key22": "2hL6XnsHVGwAEck3x7VVbAp1ap75whZvxbabHPmCjYk8xaU6B8rb2Bk7WH7ASYbWSSBxqfdAQbBquvBA9BQA4Yxq",
  "key23": "2W3ptHTm8qUZA8VzrcqHBwt8SPjPHdtxZ9QbvN36rxYxZ7MoxwcMjMDDKUb5xJZqDxzrajBcNB5MwZmtK9o82djM",
  "key24": "5kQC8dWv2uGH2nBgzJKK3japrAVqxg1qjfh8VAhQhH93GnszoX9N8y472qYzBnYYQLW43fkqvKXcLqKB41YwA7Jg",
  "key25": "28uGakBjqHxejBKQspKacs8G57iv9LixhCww5XegcdH1Ry68Las4f27THCLw4E3TMaF8daxzbwEp7Aqyg41n3W3X",
  "key26": "3ZmLvC65DAecsoAfKLasoSTwKHWfQCqncPaFEqz9j8hzwuXMx3uoyojR5ijHT3q6H819sdtf9otZhWVStr9t4DNK",
  "key27": "5eJsnrgfLWBfuBhHJGa627CjeDd9qoSvEsKfbyvhTpFv35tnSo7SkRhFuZTxi1HwSceCSNVWexKpFtPW3tgRGDbA",
  "key28": "5YPRGV51q25g4KtEc8PFYiR1kaEv2TkeMTgRxJpZMXBn2ry2v8zRod3zTbU8rj1nJbFrxyantK2LhwJBbL9SKC95",
  "key29": "3VU2Vd2EFKGgFM8d4s6Kn35jq6TKykUz2htDb1Tm4LPN2ygNtfx43YUTxFEULvTy8V3toGH1mjBH4bkdW5bwYjnL",
  "key30": "3uDR56nGKQFFr5FCAMmUC3vmgK1gzEcoJDSDS1bsdzUSLJo16DGNJVB6UmBX3ZLMWqEqQCs74YwRRmFUymoGR99y",
  "key31": "3Ucv1ASfYEvvmVrUzT481K8n8mCXmbWAFMj6b9mN8bkm4eL5gAXJhwwmPRvX8akHcKjHFP4rUFRCRvuSpbydebKF",
  "key32": "3W1S5Ru2zkRW1uvRKbeyBnkh3BbS9JtxLs29DZ2gEBQanv9k6Ez27WcApp5StwBTXyHtYs89DrUTk8XgtQ1cLodY",
  "key33": "5UgyThngWzahT1YzV9Kt4vJjipQPcYjxiauc8V8QSwPdu1zjCZCskgfzTvx4So6acpJg84SeSnG7bnzXzRs77QE7",
  "key34": "5W3w3h1XBZeVz5fftqez6CD8dvBfZZUFFtWPTgGiY8JEfcCgh9zb7x2R51AroB9ZERFfMq7i2VDLWgAPEbsM9KZC",
  "key35": "3T5AExbjdhZ6ytJTsSsJZWTQkJV8QSFss5pZAReFZEdi7t6iVrRhT1AkZ1LRoCam1R2rqiXua66e5xAJNzRDL6La",
  "key36": "427rWHWy7bFruGBT34kKXHoqYF5UpEsBJYwx7ijLjXgZVHnq358j7Cn7wxBP1nmr3iGDBoWi3dDDGVXF1Z3pZJFn",
  "key37": "4mSSTNQx1EvS2bHamZGK5BbTabq7e1HS9HJeH3WeniTwd1PmQnysLRK2MtdhZZa4wBK7QD7TRuu5v8UEKxBYxepW",
  "key38": "sPjNLx3AQbEwNdMYGvh1THnqdoWuKqFTzqLPDmPySrH53aFcaoGf8TqD1vm797AQukrMhZmVNWBLUNTu9KQjL8x",
  "key39": "2fEFEQe5smMMaifTJwrkQE2WpvR7ttt5tuiMfVwWN9p3TRWKjMj6S8UVqe6aBoVuBzrGWDBZgkJ4tSpAbo44czoy",
  "key40": "gu6MZ3WMTcVh1JCTtg3zGizv2nYtRE4VdEXoWubbs32qzxJ3UN3T854iHMKKNP4WBDs8GvZAYbs7Se9DDkgygH4",
  "key41": "4LRCdf946JDYLxW448fMvMxMrGUTYZaqoJZoCG9UEsG2QQ3R2GxTUcwPoFVjZ6qTsUPSfdzfwMWkXMFx3nAA7XiB",
  "key42": "38Z8UmBKdtD6FykvofxvQzvF6J4816vmPbbN2ujAbxhcZYSUj1u2BUw4XibtmdFKdrESHkw8KrUiqSJEsD4CGhEL",
  "key43": "JPJJ4QTZvCN39xE57cjhJtJLbnnm19KvVJic8VVnYuaqMtCWJiMW15yk8fyPHMBHvL4iCdWUD5GURXhbbR4MTVA",
  "key44": "QLV6HjFLMvW3hnzpU7w2rSJoffLVp2RTYDPMDodL4U7p432SsC51XQ8yEPH7RTz4Gk5MKaWX8nJvfHL7AteA7nt",
  "key45": "5ksyGMnUmjrXBZuVYpPNHEPc55UBzjQcCgjd22KsghMxMR5FhDc8M9hDcSeH1vi4iCSALyQnrPm7P2bbUNXfjGBY",
  "key46": "3ATpsZtmXnx77cV5eyTuLX5Wr5Y4VBAXk4nC7uFFvKc9JN4ya2DwRUofXZgSTse6KePFcMR5NkWCUppsnoztnL2r",
  "key47": "4Ph35PUxHYPajLPcnw93k3Nm1J2QkHAw8tdyNLsMbzpyiCin6mNRFiKfd2LiMC4DVCV29ogED3y8Q5LuZhsXfMS9",
  "key48": "5B4Ud2hsYz9ULehDbPDkXSJFRf6J2tSfuRTDpxzc5BtPGJV1xooSxYaEoLLAQBezuQ7zVpbZhnAZVXJfjw8Y27tN"
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
