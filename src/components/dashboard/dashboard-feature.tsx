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
    "5oPTYgrWVqyVN4pkCUkHsvZKvK3mScLZ7mpPTHQKDjHDQ672R31QqcMPjGLeyv8Vr84Q7mhnncBDiNaA1DtWpRKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XdgdJ1ox6YSsa2uQL8hHWTH1ormhHgeEgN3BKhBdhXFmPPEov1iT1knB6KQBsyLxptsPFJp1Ewrzs7Bb4dZ2D9z",
  "key1": "wkuxo5MNaVytuSnrMTkdYHXjTf5mA6WnWR5MiqEytLebxGWnJSWNFGUS7kAmExH1M9EEqWZyrDmwhi3pn5ffb9L",
  "key2": "PxQFcWgvE88iF55gVKYMQupJprWqxMxHUAnAH4RS3MPAFR4cvuYa42pXwcYZsnNQ21NBnRFf9XEiojjLZd2pYRn",
  "key3": "DKGTSCpLBXnXQasZtKBvUrUgk3TzifiiETk2JRCMYZtaPBR3AzTFDMY21pBfzU3n3W1SWFgioNBfo2vfdv8AF2p",
  "key4": "42o1U1Yu1i41wPYArLhT3uC5Tq9CXAgYNATJuKodncfzaSoe5Cia44KQ5vgqJz2f6p9GhRpTRC9EFQHmWqqkVmP9",
  "key5": "39BWyv8hYQwVBBn6JmjgqHyVvrisZqbCLsffoHr97mhKKbUsyfrjs97WjsC3PjJQeTNZ2MFDtGWkPQ4gs7BCha4J",
  "key6": "7RJTVtcMAQ2A2W9H9Ybg6ndLZeAEuueY6Siw56MhfAz5awVVwj8Zucs9jui6a8e96zEiv3iVRFyfsUEh6NzyHKL",
  "key7": "3vbiaaE7wmcMFsNjdVW778LRRBNBd2KvFdAJ8NMKinqG7wQnef4khGH7JjPwkh1QQrStNVM9Me4CaioVmXoT19xv",
  "key8": "2stF7ieSkmQJeC1jhBZe4snLd9QJagXC2ZbyKzGZZjnWe8roQnTTmB7oc8vdduxhcWN3UGERahmd7E2tm649Ucm",
  "key9": "QoyjgzEEynZGek7P8cTMmbUj1S8xka4KNjqNX1vbNw63tQxe6fK5NtTq8uR2iEp14o98WfVxSEMFevXyHamo7pa",
  "key10": "54HjgncgNTZpRR5U63StTh8e67kBxhisgoaGX3CRdPFnH568zekvcRFV2tJomURBTLR3J5idhzPRHdRArjimRGvv",
  "key11": "3tjcpgiCFTpR79RVoJkzz7svarvstzjubXX5AX5mVunqb2aMUcFuMekiyyxmV2oS9JQXAkRYUGyC6fgqSG3dZsLL",
  "key12": "5CeEPpdCLiRB5QHLmeSQbQ26NfzzyRbVFWBVMFEAy6tfu126rrqp62K65MoYyuEKDAPQkMACoNkFFrN6oy3HvTBF",
  "key13": "63aYQJT48A23SCZ7CCcw6r2jsUofHeaRhty9ue5oLkvK8kQxsEsXN2Awva2SM1NzP7ZwndkpbCRiKiWAxVv7NMVY",
  "key14": "5eFaGBY7hdhgBcY4Hi9QTRHPB7tTUcFSUd65bKDiPMmKZF4v8ir4qBma681cvFTiAVh3MLjb1gKxS7NoRc9xNtJY",
  "key15": "2oc4ZnXnXTACrwZgn7ALSheVQSFyibRiiSyD814FcvDd1VKSSp5xdBMSwrAnUU31AWEKzEFSJueo6AdoFE1pzEFV",
  "key16": "3SY4SMKDoEZmcTD94bqUYFuevFBPy6HH415W9H7rJPK5emcd6u3yVUXaVuDRF6Zpqyv32gKXmiai5YtPHF6HMMxc",
  "key17": "ntbfJBq84DEsXWEy7uTX9HQY6VBvrQFqiJEVoqMcRwg2R6ztGpd2NRkcP5rWgiCkLGUstt752whc542MhZnVmU1",
  "key18": "5xB3hZ1c5mAZp6AxHRACoHwPQ5XK1XbCWwk3fjEnM3F4vxfMHoat3SDkPTa6QHyWgCEMG8mj6fNAqebgWd3rBQgb",
  "key19": "azWJDLskkGDkYWGxk84F9AExiwTjKEuEuyUnTD7iuXU3nhKjC61kB2DftNbkB29uSbNZaUPTLYCYDZ6NaUeP2rY",
  "key20": "LwwJEx1fCcrdwgpmo9xUyDMYyEENvVgo42q8Dy3cqSC4NRA6kqdTK2D6ZUu1PnQoMmqNU56pysrsaKTLoi92Daq",
  "key21": "sNXGCLPcq9QNrZrhgyyXjg7RxA8FwETSoepckB9N8UWasfg1MnVhqkHr9SreT95FooEp1KBE4KQv17rJ7oePKwT",
  "key22": "5LdMVviuiYwbvQ4455nC5FDs6qfhZD1VBgjbZKh1DxipFe2UqBbH34EKzr9i3T3CbSzUZ6QeJjottcLbv2NKSQP9",
  "key23": "3rUHW8f1AtpisZQcCKZXjYjMqiEN51A37x692udaXWCYWcaxLVEKtt4QTKJtrPprAmhSTsViPzA2sSLFjbw3LovX",
  "key24": "2EqG6GuuhKNk8YVnSw5WSuvSpeBaanHEzVPhYFUPgduV34JQuMKcVw5FBnLtdBdwAn7i3aaLcB6YUojzuHqenFeQ",
  "key25": "V67CB8ATT2yQuWpFoBXYGMy3Jb1csva1iiYSnJF3S5fwnYA9gNPMeutk7efTW7aoMF7kGdZ3iXiEc8zWY5GsmbT",
  "key26": "5HMdaSQ8RZewijXinPAfH1Exj1M6s2vJhcXrK78bH5qwM9qaCpHoE1zwkvmNCdyH5mMrpe29BAH1vkDmxnzxfaNq",
  "key27": "4LWgbixpeigyfB3CHw3GqUCATVM5DqpZ4Fm7ShunAXqSUmfJrycYie8GyNu9f82zZq4jhNoMaSPEFk3ncTd1nynZ",
  "key28": "2PPHkq5GooSDWxWnVBrfxSpeBUZWFJi9Doz23BZrnAYztRZRibAbYrG1DVj6MEbujdeNucBwX2ZV6ZQU5DggmBzW",
  "key29": "3cV3AUCHkp8v7nCD5H4Bg7dCiX8uF8Me26v99L8Hq8hzw59adBtndwVBgNRJwXBEijfgqA3mMJfd1himVfpTCqmP",
  "key30": "WVudsqAVZ1chC1uYofizHwZZeMKnNdRYiy3DAbE5AKHPX99mqi3r4WPrKXzz995YYCqszyp5P3cJzNMPCtsf41M",
  "key31": "36HHapsK4LbPiN82T5La8gnCtXUMafXvViLR6VKwWK4BWCHyy4j6XWGd9DbEeDbCsRDHWKQ9EiQ7BtvarJ6tiJgp",
  "key32": "5zQUfMMbAioMtjWCRBAVuehYDSw7NNLh2pFEjRa8z4rnbX4BevZT7Yybi2dDud4GUhUMoyfGNGcpCinEZ3MeSSey",
  "key33": "3Ap5dvEiJUSH2LPN3QSKFvVSK4csJN6A91UjD4R18F9JZVKbxSwuAvZTLLnzh4nVPRp78X6kKL2dwz4YqBkBdTWi",
  "key34": "QY1juYeBTEZknQqjLsGjNcWQ5XzZMZJtcTQWuTYxBYut978aV72osakNzsgM7j8bdkpSNDTq75Ky9XYoLHmYviU",
  "key35": "fvbQqEAv7X5jSfJYWPjhqLmGuE95rPRcvKe6H6fT6C4xMMdCLuR8nhMeXJbb2csGK5Wd8scnzBoPMUWa5PK9RDa",
  "key36": "35rcpkg3eaw7p7EaShDL6zWZrfwdk5toEGYUJvFVF2RwcHmqCqqQ21uuUZA7aPe4SiwMLekC5Hb6MdsCYK7PvwUk",
  "key37": "T7u5ZRkHBcbiQroiFdk469B4AohovSSGmMV3GeZvwhAcv33u8ecv2vWbeRgr5QaKUydRQoHbP8r9ABrGdZvwCLk",
  "key38": "4oRY2SAE9HYex1LSv5Kqd5cuxPV18nkWkAqCK3Sko97zNoKjhNQQ1f2bqdcKB3UnFv1aL5CMukmr2qUJaiByYuv2"
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
