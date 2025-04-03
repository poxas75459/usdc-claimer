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
    "2Nk6eHqb8p9B7Bf1CXodzJnsnkcsY8c7Uwzvers2kw9APE7tGdZkZ1E4SoeQ3pyF9MXabQCmuFdmmeSSFn1XzsMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dzoGj9zQa1yLLR3jfMGyohi4xtnijx9bw6ZCNoQwyB549hpKNcYMSVhaiDdZTPina6kJzy14i8QWxM1a6zdPip3",
  "key1": "5ixyWawDTSpxnnYT44NY1EZ4LRaEyF3THcArJBEEQ5C3P8vdHZnKgre7gwxPfic3WRLoi9nHmnunbCSEnBeFBGiR",
  "key2": "cwioyKNPAFHSvJQbEtxEfYhrbFsJatjwGrsd5PUPsj8QvshduNMMJPRiJ9aYjotTbShSL4H1Pxn9tEBCYxFZ69L",
  "key3": "656QkL4JN6mCviy8PeEhjF47jmov9u7LvwnoDNE5Phm7jYFuBx3vMJ7K9t3X4r7o6mZ85RiKsTBbUQ2ZzsdJZEu5",
  "key4": "2GdhVn9geZBEmqraxM9yEC2FD3DDDi1LtwPjbvV3pJoWhqAsimznKK2GEqWsfMRpQzGp7dN7D85oHVx2MSr1ZNQB",
  "key5": "5e2mHDw1zuaagDjjJD4CmuQztuNy13VyCURezP4SVpLYytYuoq8nVgax6QsAxr8Hxp3WYeBUkhvK2FUYeR99YNe2",
  "key6": "4ukU2ovDVwV6h7ZG36zPeZde7nth6kt1hHeoimPyLns6f8AhszrxYK9Vn4DPLiaMpBVPgU5hevGYztLFLzDDNhxM",
  "key7": "6pUmigNDGugqUZvCytATUjYuWVYR1iGikpgfdwB39MEpEjWtuPZFiJHAi71ij6KdKgNxumqGTengNFYii19gxU4",
  "key8": "2g2AxB6mcXAGZFcKyvjJTAKPyewe9xDsLrDg2qZE7yVLxvWkAQdX7Z7wxD5YGNUPG66faj4pfPoDVKCFsfqbLxab",
  "key9": "4pbpqSPzyebQXcXnN8CShw5voedk6QL2oKHyvCd2MZ2hAdS1eGNVYJhTCiqR7ndA6auDgsNUXRsYr5fzNbDq29c",
  "key10": "41QpLKERQcb1MgqUXaF6DtdhFGbnK8N1AyUjccCHxsiXuZ39uxB7FDw28ih36cJQjdZ1JZ1bdv3w5aURbTUcYWre",
  "key11": "fYnfsZZpsUvovynGwJTcu5MUaeXxkgRnBVU8Du4mxq4viqaf612QaBA3eeQ9jsEfGmkJqvsNgLo44qqmxS4dTF9",
  "key12": "2Uum4AFKxamqNxuxq2YmxdqXvLe8JXpoGJD2Y278dtUSDMLo31govnDwZnwsAj5WFXxRazjdH5cgCEVdzCMCwZ8r",
  "key13": "5wz7u8TAvcTWcAaCJQFYSefhqZb6ASmgoMxQNJcu63Av4NMuwrb5wa2oQ7UGNAhii5g981NC9hgy4qCnV2CZ3Zs5",
  "key14": "3aAB1iYbBQECntziJregNupgyXZV2wsdo2WmB3CcdDxmS2ujBoc4uD16MkAzPQAkwKwZBLi4XxW4XDr5VUc28D1t",
  "key15": "293rZdkaHSu15Dtkw4E58w6rcgMxNMqwhRZwaau45kJVvuVfbMXsLny4dMnye1ZhnXofAexKgb3tsdZnb72f58Pr",
  "key16": "56VzzyRJLAq6BdyAmZn5Eyf2Zw5rr9hUABSbTMnNZRHo2xW7tTcdztx3Gak7cpij9Cj2xKWDnLsH8GQrmv3JyEN6",
  "key17": "66Kv56FHHKXDeSby629GKjDyBhXKCKzwe943FCTxw2WLMVfa6cTkk7QmuD1ckr5j8HeRAEKR9i1JrkRFUS2DbhXj",
  "key18": "66gfDTi3HhSc56N2yX2XNVWiLnQUvTQdve8UvUWnNMrQdWBvGgugwxLgmNaNswLCuq2d2k1hrt2PYrwnGazzq7DW",
  "key19": "5oZ2H3Hu4t43VDHUGb5acJVubTiNeNYmxw4d1Hta9bdwmygDFn5mHMjkAVNqKJ7VDctJ4rg2XMxBPcqsipVFXqPh",
  "key20": "3MxcjZQMfVCyvoccCTcETjEkYfRRdJvNwhywfwqX472eac9jgwmma8QH3sEV8xxsdYEFEHezd9kAfP9h8EDkaBEc",
  "key21": "wBCcx2gWRoiwVzQDGKv4vGNbGG3YSbdC7eYhGfBjLb9kyJwcQi4wG3tqt2XmhkNNNX7tXKfqEcTfLmuFLZxMe6H",
  "key22": "2pAZTYF2ikPWgxiMyiJVUgjyY3EJ4wzzRRLRYukXxWiAx8bHuaP5hdZp4Yiothn6M4V7sCJrmc7hz5LRVemb8vE6",
  "key23": "4ZyGnE7iE2veh8W61TuZ7pNzKRzBZTGyXsfFjrikTNCgRtiFiko38UHPvNu1LBWgK71bS8dBifTjxTHdeam1niFC",
  "key24": "4nb7mfs9zdgihZCaLtaDjN7ph3V8qPFQnrW27KrjFhSxXnnTFtnob1mHRapEFaR2GBxN1WWn6zmNGX5fVbk2SfZL",
  "key25": "4bf7U3inj2b9iFRQ2b2eE6oVPUYGSm9dhHSV2rAku387QbMVtzpLee39tnYHwshkDmeJphn8Gk5Ao42MF8XKHQui",
  "key26": "4UWZJiw7wNgZio8mc1v3c756vaBPnwovRBzr32Uwf8Wj3xd2hPvyGdpZDge3RYtWEAK1fFrSNphkzLC8zXKPTzti",
  "key27": "4df7Z2ymw1Py6bwH7MLy6kjdSxrHnXUp4VqvdayozRVcH45k7iTSPdjNAgizSAtiNtcoxzrViBfzArrKo2C6L2db",
  "key28": "2ERrpGUSHqD4pjMo6N5BBvZnPFyHKD1TD5hDpFJSgEdyx5BGh4e6Cng5E7x7bqvzt4T3LgUe1oxDaBVG2ejrQb3t",
  "key29": "2sf61ZT5P2M8MzKsf8w7cTEekhtCqU6yjYGs9SfXMTiAhFaV6q6YgXYiALKTdywU5GWEEmjX6fbR7jeP2Njdf4fV",
  "key30": "AcHuAc7e7BkD72mLu7kXis1RNxYC85ANVgM7Cr6ZQcSYLTZUqsR7Yw3RK63mfKXFWbqcsmWG2k55zAjtw6KNnSL",
  "key31": "47JB5mFxXdTJHj3w5z1rpyWWhBP2qUG7wbxAe6ceUQ6LoaMKgzFMVjiaqaGTifk4fQqcE4bqbYphjQqZoKMM79hP",
  "key32": "4kSisikF9Q6mQyMk66XowK93CV1D9oosveDrnJXwBmrxgz36xrtDA9k8yryePYu8nEkVVF2p4ZTGFj2PYp2LT7nQ",
  "key33": "4EriRZtSdFLgiHQ42APGxZ18PAEhQwWBWumfXDxWZ3sGHxEepf7ivNqrFfc2tn48vk9sZTPyA8ksmH7i35iE9AmR",
  "key34": "3YfRoqw8JcJwBB81pU8o5AEDoykUjKSvbQypuv1CBPGypqox8FwN8fmLoNfsr3wBkVKpAKhaWMe1wmqAx8hrSWNM",
  "key35": "4tYiV6Vx1cfKJaxZu5bJRms2Z3iVYdKikYczT1Wnj74PC95uvCFC8aum49bjDNx6e8BHfc9ps45CSoKbsZVLxyWr",
  "key36": "245UCFwK6TuETHqDGi76FQHGaromjbTTzgDPZGkTey2vUAMoVTFH5BQitgbVULBGPn7KDT3Wre2xPu7UDUysF24F",
  "key37": "2162kkhSwKXyfADGwRDwhX18GL2NMEqihQd7iLNhnY5S2nUomrMScWS8cuaKT7ND16snaCMxr7YUz1jgiMNjbBFp",
  "key38": "oo2hB7diSXJbPtmJGv18uvTSCJ7G9Es2tRYKJm67DcEdkj8Nv5HjLvG1DzUS6Bbx834qwZx8uJZ2fx7p3iK4v3i",
  "key39": "2gWjLCMpN7PpgLC7WdjJUwNf8dzskQ8Aw7MnKn6bFUbFUADDC6t6cVTqw6MabkjEVJAkXBUXdfjp8t5JrSjfvqr7",
  "key40": "2qPVWGucXYckzTSZq4uaoKnxPqq74WBUNLGFQrjtVAy6VSrnqwFAxppk8ZKQwSRVLwLjSTf2taGHpyX28S4bJFn4",
  "key41": "4wF2QFunXyBVTfhEt4LLP81ABpqiNuTQZDjKgdiYxazU1yv2DbLRZbBxCaK49jcV4sv7xSddc7xa8oys6aNVyB98",
  "key42": "21Zp4Dg6RM2N9uVyqyVFUbYAyQMd1m2EkZEK6gCRvewhUZcsWo3cAArVkuY3CaKm9j8yZoUkMbfU5UceTu3ePZtQ",
  "key43": "57rwuzPd8ghihkKeevbCYQx6QPJNBADqZJpccMK2HXkau3dpqaW56sh92gSczihtimKW54xTQXkN8V2tn1e6CjaH",
  "key44": "5EywQCgNgjTaiiCC4viKc6fcTej4U757WGhNX2dsUZphMdKNFFfe9qnepj6tSwyeJNBZTyV8N5MXhSR2Cq27tXBL",
  "key45": "4UU75NpR9YifUFZKY7Xo2RhHrbRw5pXwSKvzcFkVaXEGDMGgJvv2971PBoyn9RpLyS6VNZYtjCSae9UVxoLCbLWF",
  "key46": "eSVp3qG49P4NzjkbjQYd57WzEHfjzPTHtGNSVBkurDTGPNvk1A3u68kTJQLGFkFejwscTEyrrReJV7BDw98VAt2"
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
