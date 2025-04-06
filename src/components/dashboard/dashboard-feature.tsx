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
    "2yia3bHi7p5XDuv6SkYZkakMk6hmYvFhVJvmKQxi5ZmvAaRjnT2ihTxy4cSqsHV3X7vwfsT7w8JS2LTMPM3M2R79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3g5p9PvSQLYYzzUT9c8pcRKAhWDdN2ZjkkpwJh9hjfz8q5Eea7QqtKENyNYhgB8XCYGkWHoDMJq8YEDbDkHaWZ",
  "key1": "273aksuXg9HaPfn67wDvXhqjxXch3J4QhZjro38KbwbRMNwdSWsuUWNwPBPcSRNym7iU8XkyP2ykH77viRoHL7dU",
  "key2": "4dbqsUxtU46heJcyPdPpE5rsupKbAfgxVCGKzb2VQvnYWdPnLAKtHS3xKTeFxCy9T46Dh91sMvdQSBDptmMuZg7h",
  "key3": "55DYRoov9Dv7rhrJfs4UfojAquBoD8Ytti88VvnmWFCk6CHJbWPqtJVTxAhqamKuftZWvX88uMxSnSxZXZrxVKp2",
  "key4": "trcELSr5dUHpATvtgMy9kCWy27xpbPdrtRn9ynKe7ohqtSZwM45rX39SPQyqVpFBiV61NgXFSM11zCuf6jRAyE4",
  "key5": "sLbv9Z3SEfusdRAomHp41r4nCxAwN6r4SvxL1H3Y4n2v3qGyc6BkEb6X8fAwJkjyWmubc2sZcG9gbu41vfniNpY",
  "key6": "2CtdtrVdutTuHSCV23db3Aa5u7Va9UfY7PJCVT2jawFrMHaWd2C3hRr7HdHrpqXiYkfvhGpqaosX1Pc8iJz64xaa",
  "key7": "4cusKZ6E9cpfhXeNZQBUoDJre2A1QkYYzqu19WE5QnPk875Wk6zw4KVXECL7V2Szf1oa1oEQ2HiiJmfvpBqSBrGs",
  "key8": "5ZqJ7AvB4qeTkZHd4tRkRN9P6d2g9P1LkaCpPeBQKuMQd5tJJttetna1UpEQNE1wpAS9V4FR2onfe7oLvoYMdeTj",
  "key9": "4Zxc5r8meHKd5afz88tczhZEg4iYCT2LXUasAZYfr3P2c2tPsTrw9aSW3pQv3CwPbCRRo7XyWaWXm2U1GPVHok3c",
  "key10": "T2eafgedE5b8CQaMyUmkP1HGak1FMQvjEHpKosGeJzMk2wfVBPyrwHk1C6ttR31MKFaSxd6dEYK5iJhSzzGFTqt",
  "key11": "3QcLNixe62yG5YJh1aBoWeKE9awERqMc2ZNWvB1YdndzMHWnamJg5tYpxvkeSvZjbrArwaqEEoXmZwQMffaqDBBp",
  "key12": "5v4enfXimB8HA4wz3rpiEJTHiX6SZ3n2jPiQdcFHuwwwUzjAViL8qNjXz3iGZu7MTgS4c49oAtHybtZdfgdHQGPy",
  "key13": "3ty4fzoU9GCP4mjmXVojnh3cCnSYip86c8w8mKtBKMdAsB7gYyHivB4W95M2MfsJFyAk1whS45KVk2W2oVQAF5wf",
  "key14": "4AUXknYN5keMKwBtL29vVfuYQmHSs2DKtMdMW5vaDzDTf2PgXiFaM3fkmnjoNXG7yfNBQrAT7i6eLJtENVPd6FWk",
  "key15": "41TBx5TX3Ft1ex6bPuB42JjnyakxboojeF1HKLdDes5vjKFmx5pAsDunGV2JCdGJji3ZMGCU7g9ALpb8rx7kgrLk",
  "key16": "66BhiPufaqFCxTijArea2bQpd8jriMifrypi94wjePvGY2LQz5rJeADN7NZAVAxd8Qk57dzjUxia9r3z488Brb3V",
  "key17": "4W5GZHoCh4QTyyksZujHPHUrViMifSMA5VmPGRAeCi4QS6ybF4GZwt5Rhm3PYBVhabEHgYv2BPAv6oqNEqtn2w1Q",
  "key18": "3W2GzcEpasmYtHeecGnJnsJrPWsAtEWdmJqHvB3G4zFWqx4CR8xvzrFYTjvKHhiRBCZaqYzfax9u16YM7ZmVuzbF",
  "key19": "5cHHZubyydcLh4U55aNbcByyPj7Xpa2yoKH4WrBhhN4fkYC5mkwokc4Yhp9PfHAjeXgHAqiCrjqNVzW2eejWrymE",
  "key20": "nUKuwvUqihd2YfoXfbCm1T6qP3BPVESj8rHySfc2gcjiQqrw4QqsTxAbLxoqKUXjStsm6VMvTien9xCgV4SLZdM",
  "key21": "56DyN147Ns2cvgTMbczabVvZrYo4WWX2ZyRFkMio79AAvRWHuPvoYAfFSbKKmNsEj5qmiwjwobdoLKxTM6F36xmA",
  "key22": "K7nf8xpLqmpnGrVRLbVrybjAvK5EagMp1n7N1hev3YEqPdh6eAWAoediNH9HGZVurXKSj26nTThiWxp38si3YWM",
  "key23": "3LYzjCaHz6mXafa8nbFDGLhLwFob2hTvvE2P7wM6dwvATaZrq6pxAnUwdVUtnt5hUtPTbKyQzzjdCcg4WpTNqq9d",
  "key24": "2ggiUS5naWuguQCZMKGMjeYsec9Eh9nakQtCA8sqYctzRmJPhPMBoxJDcLYQmScCgAvHbUoP2ojwoZRRsp84Sz62",
  "key25": "5UjSHkoxdLJaJDwyRMzk2uQN6zA3Jc1vuxhLeY8UAwkbCcfjtwNBKnirHb112pRQz3bpRUuCqLPzcLK2CFcumEBR",
  "key26": "2cTtWACJ4skVkhHyCa4hSTAJbor99CxVcW6ruG7VvBWeFYUu8ii5GzBM6WuGASmrLm7MrVDi7j8XNiepcKkiSRzi",
  "key27": "2Pzp32rdCobEY7jaANFZFWZwCcKpaCexd1BhfxkhHnd1qn71HypPPB4Bs9wEMxdDFZNGg1bDopcZ176eiL1yTEQc",
  "key28": "2tPmwLnpyw9hN481gC6wmmrmA2zyQsLrjYQu6RWMsUP1SkC7oBRLvKwxToGHkh2LGecQBN4CFt77gBsPno8AHZ1w",
  "key29": "2i6hmEE5tbQfxNdNpd4mLEYHaJXJbjFBAm8xhXjAwjFwrT1TKLRk6nWiSNQBLfVDqhgRZLgHSyp7tVCeR7ee34v",
  "key30": "4WfBEwZvVXRmPsgDEkCRoY7t4dRkS5ddDHCmQynA1rA3CCpv9CELiKscUr6Y8FCzvpYTpjrWHbC6mQQny94n96PB",
  "key31": "2NgiebEkk5RxK4MJDGssxNC86ZvQt5ALhLXENJe9VGneBsnSdLF4Ro7rPBL5FouLLQAApnyurGZgByuw7Ngp2wYh",
  "key32": "4YKwM34j7bNGw7HfHkBqX1eNGxcvUxaMtaTNMHNKF3i84aYLosH5ZUFw3xNkYYYeV5vGtZvFx6QH7cKtwCEvkCVd",
  "key33": "2JZvNCN7nnQRSooNpeAEw5bzgF1askDz1hbYzphtz6XnCiYt6FgiNqZePj8o6uh3PH4Ws9aaC16v2MAys4Ceb4bn",
  "key34": "5fadeESpvbrSVBgWaL9iSkspGv39VDoTgHpo1aAfASN2MDrLSpS9ujibvZB9Dg678UUNRx3zmFHDJhCKZhC8Ke7u",
  "key35": "5XQLTx3JbnrU2sNxqXyUiA8Rak8nSNMtC475AniEbe8qwHP9Vwt5CvvdaJ5QeiJJVYcCZ1TLvo5qrRByfNXR3hsP",
  "key36": "36dzf8db6R7SdQgFiMsCsCcyoazzeLXioKYBx5iFzaEDNcztFnPVPDLBhk4EaTswHecHDsYg1b2iXNAwiRpM8Fbt",
  "key37": "3BFjar6AcnkAkRT7bDknCsQBR1xCSFKL6Kk1SwchrAhr7aYoNZ3tP7iG8zQoGUYxVRkaEpJEGPrPRMxiZEGFUZgs",
  "key38": "5n7AHjTkqrZeFZEgvFd7kzcpvwBBWpYR7NAshrFXGQ6eBinAeTpxiUYHdJwUjNg9u6bxpcK7gsX2mxVHSgRUq4Yx",
  "key39": "2uBUyFeq5YjQT17dFzJhPH4KdaUHgNaf5PLFohQRhv91Fe65tzBWKLNLG4x7xykXV9TSn6TQ6e7FH4TohH57BU8Y",
  "key40": "2zgrfbfeWipwvfGJwrWJYb9URBt6tTo6f8BxxjHATXxUoPkbBm8HD6Ucz2KQAVE3CNskXRgLSYp3oqyuPFpKpLxb",
  "key41": "NC3XxtERtU3hLkSC9ZeSQ6kDz3wFV7pAQjVzuEeeSXR8xLwChw1k7uGg5XLsV3yhrvhob8sgWfMVK3Npsi5oyby",
  "key42": "44qm3v3HFCqed2sVXMjNY2Hf1hwR5FLC4zNwQVc2MypUgRxgxKT3Karci8K4F91uXVZmCjL96AHUkzxyLnh2FSuZ",
  "key43": "NCSvaNAf8qXrhNK3qCBFWSLspvPx6kk1NhHAACvmsfAtsEMsB7AEQ3h7D27MpsNWfyyKfXmu5WjUar3h5EZqLTG",
  "key44": "UbB7jD4KPQBthzHeEPQJF3NKZhjRxZTHeLwNSaxzaQpsKwENW9A61wgyYfTFX5sMx1uKVM11KP2cghE5s38zeFg",
  "key45": "2Y25HaYHwcpGovgHShNdhKK2Rmg2M1T48uj9V39eoecDYPgZv8HA1wBXP8ui14ZGwgdDAEaj4UthWUUVEtnpjeJ9",
  "key46": "EwG7e3oagGgE9UzweXbR96Gcjhodu7jJXFjatv16dAYYP7qF3PgCXCDSNJKdAVsf4oqyjXJgn5SaPhRsQXD1fS9",
  "key47": "38g97QsoD3tkknnmZUTbgnv48ftUPWWekc4wQj8k6A5bDEbnjoyoiMwCha1KCNdKcGQZrepTHVHJ2yo4kV4xXPQg",
  "key48": "472PJkCmNAXafKAmNuiCjLmuQN2uCH6TiXxBpZHJGe8fEkbXc3FQuUVtWAKjM1c8tbek84QBHdsCP7XSbeM8ya4x",
  "key49": "2peakFZnB4qCBnmbhfg2WLrzpsdoNtkN3uga18GSGKawuhbVZ4EfunVWmosvy1VAnSUZwdAqoy4QiopA1CDqFaku"
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
