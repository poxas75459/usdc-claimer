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
    "58NGYZf6xXJRJhHDgLtUoG6Cti2ggpwNHdRqnweXhjDDahf5uqXAcszKaPtVEHhyt9uhvLLWhzsnSErPtjRXy4Nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RoNwAuJ3xXacqVbphokSkbUSZTXLa52bCu2Yy7BZtoUjTiMNJWDnqbyJ8xo35pvqYYMQ8sRxeYVXhzLECtExZkT",
  "key1": "623i5HvmmcCFKBrhfBjHvqUwHzErBQUbNK678XbhisBivQxdJhjpcvL2hMJhuq5hnfV5znzp1Kd1e4CAEPBKy6sV",
  "key2": "2b7pRA7KFxpoj5mTLBpVmiScz7QQinECEYz16rbVUWVWUbMqsW4pJdLajz5hYDtyqBkYx7QG3YJx8MacPpoJnu9C",
  "key3": "s2DAcFYU2CEe2cfbn957gFXtCSkQDphpYGTgXwDxc7ekLDNyqKsLYMPXjbnMtiRPnUxY2WvFx2bKGvbPkcScuiz",
  "key4": "3LQuLivcTpPYPHBSpP8cJz7FqDedD6ba4EwtbwrjqqUakK1bPZrXARm6hLyYdXcvjCQnh2xrQMUTf6AjgMs92yzK",
  "key5": "2t7MoQtirMh46Y64PSM2K6V478TVXfZAtUuDBgaMjM7KxNE6C34fZRswypHZo2WVEzRwKsYJ99TNya5Gotc7pVrv",
  "key6": "2bTkZJtSRNoxVVDNgE6FwuWQ6TGZg193FEG3g1QLCd2gK2VQ8Y3XccBCnWS95ZmPjg8zXnBpSXgR3MXxhmtMfzm8",
  "key7": "dDnSz9EVgmn3EN5uT1qLpe22TQozptQxSDVFThdsY1nxVp2PvXKnVLzGYWbenhf6SL6rNdrJ2ccVDH9Tftbod6u",
  "key8": "65RBMU67Po6u3EZSKKPyCZMC5iVEBAhBHXZLVfgCxtst3fdHM9pCHCWt32zkHYVsUvY8yfQ1YFMYYkziMBoAp26n",
  "key9": "4fDr8WrwiQTgNMNXUbD7pkXLo4ipyyP4tRCq3n4dj32LRXfpc9LY4WePKKdCMRK3ZCYh7TvaFGkscLvnG4ScMeqy",
  "key10": "gXPaESVJEpBSY9GhL2tCi2TE54UsjDpTfwA849z1PGAJeMGpTxhAXb9GNruHsPBPkgc6sscoLcwr5L9hd2j2fGz",
  "key11": "2923Yqx6zz4DaPxatpkFcKYnbgG3mefTejrimGNKZX8jyAM8GcMVc88V5hfixib2FRnUdqgP3WrTBXrtBY1Jnghi",
  "key12": "4bnjerQwwmTSGnLHod2J5PAPaDm5w9EMENEBBSCDtBekzbKVkECyzS89ctkrN2ywRrfrmA272pUERmGntKbTqNAp",
  "key13": "53D3DiZTs2actGNnDoyYExhBxfm3YXEqCsVhAUnztr6HYRYF76WmvV8hnBRPnFAQjPG6tvqqJAfjRMpHxB7Dkn4n",
  "key14": "p5bVTJJrAhkegagRdK1minE41CJzJMteoCMy8ti6GXhavB7aMHi1D9daJrWr7Tzp344SiZWNSqbJHySuAZTZX53",
  "key15": "4RjNp6ZoVjzYdVxxZA7pYW8kWbe9QK916QArrqXxyfBqJ1cSsfuSdfYazgJcJ6kzyDtS4Bm5S3Xmr38vNM3Zt24d",
  "key16": "5sWXo63x461hzVNvqhZm9YEeQdPK3zpGTmPufaTb6AYgvbtKrshQ39oYdK5b2uEJU8onW8NzSeazLJZhnADZqeBf",
  "key17": "3SaGB8JmmGXvmyKwDnjGHEJkxZnSYEtaDmQpG1LUT26LzHEFQzzfVNpD7Z3yuumrPuYZtWWm1jxW4NaBL6sivRwo",
  "key18": "2FamJpCk4uyaMtsxeqCAYGhFv3gych6aaBBkodNeEpuuzRn35iZBVY2aJGiGtJkMRsQYnFrfnpC7xcTEHb5s7uR4",
  "key19": "4MZ9wgBnp28ZoFotErZjMVwRPg7VXE9s4j4YLttZJEM54y7ypaLAyConaGQWjXjW6zNMeSNbZtC1YN9bU4CwqC9p",
  "key20": "3oDDc8dARqXwaX591jQeG1424tiBmmeszrE96VJ2o2T4vTRFqZnN8YYk7rmc2xxX6LaVKv6WovTUHsdrLBw36bAX",
  "key21": "2zEYRbnLK54fYrnw79vKTfEehuiFYhaHBRRv8ziXL9NcmiQG3wSmncksh16CpRfrcwmPuwTcHwJDeW6ec2nB4cAw",
  "key22": "6wTDPJCKsqioi9iBhnSdQfWMTWHRWLbf981HLgiwy7pgHqQd1v1WGbT57tZg9UTFtPJ6KFsbNs1nzJ3UcyuHsWF",
  "key23": "4iqUmmzrZpuosgvjGjmiXbTQeXvbJrb4V49x65dYFwzP5j62aELumnQKK4eXnFHf9uQT4p2u3jh2ThnFDYu1V7Fw",
  "key24": "hRwzgBBFFk3bWfL5EMkaUpomq7zUj49NCHXenXH9BXL1oUeV9Bk2yia3Eo7hjUCRWANGTXBnwRaaCbsW5J7Hvob",
  "key25": "2yG1MUysoL4sGb2swfSfamDkxtUHTzJ2bqYJSstCh7XboU5ZFTdtWwEqg1RomC6RuBADtDsGewj5baRtuAoTyScW",
  "key26": "67gcQWwLkXAa5tCzXccKTeysdwhKxuQdaFMbBo5LPLsEGDTZ4Ne5oPV5duwfzs16upwecoYyc9tQctysZut1aoiy",
  "key27": "8fjyZvn1x4akXakQogTZCK8NmoSWYtzSwrBhCJn53wvXPcLeuiGFj14UFKUgQuUdJ48brx8S7NQnvXKqHH1fJZi",
  "key28": "4hevuiy3Tkrr4u23J8asd8M6yF1E7tZ9NkRJhwwqKhQDsRf3PA1TvsygMUdbriviXYThmx1uRo5jAcw9kKzhuHEw",
  "key29": "3s46m7H9uXQgnThg2KTj2NQMtK4FZ6jr9zncMHDGMPkAGzZUKud2H5iY6u2iZiEWyREAVGwhGe4Vnu33rrXoGqtH",
  "key30": "4rZnPj2sRnv9Zi2AE33rTPTBQ9jkxdbNk7PQaZ62ouqEkb2HF9MZbNc6QMJ3H165gxhjbiUk8umaKyrziybeTz2L",
  "key31": "4NwDCjnKRczfyLAn7LJMHcd1w8ErGRfw4oaSvSRsd2yEQ1YxV5f8pBRMHaZSzgqSFEn4xvf3TSauJyhyYxMP7dYA",
  "key32": "2Cv3nFyPNCLcpcm84wjxEoSzeyJefUbcoidTa7UEXbMWm2eQcMZn2uCDYrM1JfuLLYNwsCTvN32VB8Qe3GDdv5GN",
  "key33": "37GmeLvmmTgaPtCNThSVoiq68fuegaZqgs7G5BpcSGWUScF9sskVcRCbaCg5QNLpNeKB9jPUGBp5kDQEASYTgy5Z",
  "key34": "4AR1re5GvGpDBvkJ16d8nxLVXQxJKE7m9pi8SRR1RdM6C6iSXQ2J2uxkxvG7aMc3zYhy8EP2yCSGBoCWNyDyyTqX",
  "key35": "eYqN3wCHaJ3JHjEBqtTSELzxKAH748QYH54ZVpZPwHC53N7nM4hy6a6nRdRe6X6MTVQxi4UyNgcCJWFVVpyxB5v",
  "key36": "51xWUsFs1iDrMWAEKSnaHAfvA8889NofXPrCpiZw5a7gxu2ooP686bApFebPnkMDYcRUcDScQoVu1JBsZ7b5TLSx",
  "key37": "3Z3xAvogmJRfwHyaVcSSYSVf4QPoNVjx1uMVrqVTCWwrqoQDamTYfs1Pzq1XynJ72SR4dsa8c26t86Y14uXTB1HV",
  "key38": "26bANZD4TyHV1RXWWSTpmaUakxyGd9WGe8GyghsyB2c3sAZTcuEqwXXBJzn69JcLuHKsLZLgU726rVXRhAZMpyv1",
  "key39": "6RejfTN6cm6JVPFREsouxfmodCarYZHZRbfLQrca1hiU7gS5AdevNhaPHaLpVyVndWevmV2UiqawEtBfaWUiriw",
  "key40": "58nTxdipCA2PMst6NcJV9hUiqutNTi6QraJSkNopGzC5a4mn6xHizntEm8rJ4zbrJG3enEZNcybRTWzMjoBhiyf1",
  "key41": "jgRoMDcLc8ceqK8nRddKyPT2Kg1MmBf3ycP19182HfiMjY7H3eBdv5dHFWXQtGLJAcVXUggJpmBQhVHWPNwqSsx",
  "key42": "W8FHrppHREChr2GuHTLPqRvciUhLWKxePCqE8rrbJ6XyyicwtJH74m4DaP9QF8mSyVpic9R4gGjhP3FAw8sASsY",
  "key43": "4EHmBWWBeTqSR26P95Z4Gw4bUvEam8QocEvMVwCNQtiq8wr55UMRyLz4W9NGD1ckZVtcsvzaJ8FrgFxsssrrffN9",
  "key44": "vbBZzunJaMu6RXFhKjG3XEKeBBcxgrZ11qsyhD8WWc22bHpHaiZG9rCpyuJk2oy2C3PdNvjs4WPunmKy787Z2DP",
  "key45": "5QspvMau2krKk7cNevsRPrZ35UGdFkRUQP4LWVdguj6JSmbL8W3Dj8E7yn9xGU38CrCTcHCZXtiwYRR4GxjYaAfb",
  "key46": "7fMRSA8To2tfqZQZ4oeBBEZYM39azpbkHmJ34ZmzWbA27j6jvfJoDuMjUJM74eneZEw4VCXZ5mKQwpg9CxQiXFW",
  "key47": "5Mh3nirKyZVw9CKN5NpvninKjryh6sXjxJeh3An3HVCeSQFBmAN8ed6DFhMVaHAVNhdturojgBWwDRJ57qU88wRS",
  "key48": "4oBzB2KSoh4nKLAxBpYZgLZMEsXVinkgzLzJ8A3BpM79tLQQrY9PyXv52u61w2muwKSoQKQCkrZQPpV8RoRnbN1S"
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
