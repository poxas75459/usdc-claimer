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
    "4n3AAZxPbNVGpUYibywUYZx8bf5FNRHGCN8K4rqawLUiYwP4CGiAq7bMC331sKADxLpvmA9z1Zi7mvsJA6u7YCPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WRzU3GsBJJPzt3J4p3GtYqUp2G7KeCuTQvgbQvhF58k9oBZerN2Yz8dHQHYkvSkXaq2ds1STLqnTY7QqpzFdZPc",
  "key1": "E7Mw23nc7wLS4FpXH6JhtVvmYxTP3HkzzVKPpFUdjvmXo8Rx65tWVzVn3VAZpDLy3Pd62XrKVcSUy2z14Mftyzd",
  "key2": "4XQmB1nrMdL7p6u2fRA8VzGEVRBAwnNW3puyZgYpC47S6esT1gRCRMycCVirr9zQHCiPX8CjzoA88oM1tEmSAUw6",
  "key3": "2uhdLwxhgDhCSC9dEZChYBcbcdokKjmtj7xLybJQz4oN1XWYJKzSn4hNRHxGCgVvjh1MqKPnAECf38wYZoRuk7yW",
  "key4": "ZdjJqxcZ11kT46LQhgRJfNLxheuNqBfpW1B8QoF6F6aQxhEpHDox7GU7hvrASjYwTLimbgneMBGVtWeSpu16oDd",
  "key5": "3WjXtJZuWBT1wyJLjmRcm4Z6kHYWMufi5Sm6WjK7Ym96R9xUSJW4S4Leo9Qt94KuKoaPC1AfB8tGDBKAui3dkTbK",
  "key6": "N7GCyuiur82B2WzgBzvECDZ2icRoxnRG23t5UV7LGk4cDotFsZTcG7UR7TMG1U761vkxXq8JVvUmJPYCCn7LUww",
  "key7": "5VdC7Py2FwYHC9NjUTg4u1WfnBTRsAfzXAQPHm8EQw5XGZZdatcoVoypTwBhuTuPQzWqMN8NgqwNA5ZoBZy9uDBq",
  "key8": "4cThVtsSZbswcHz7hxUyjecZ5ZG6DHpvWiwjrdcUnFbpoYMXEYNs7J6W5S3PxqLfVbMf5JhABku9E8XN6k4WNi8R",
  "key9": "3FszgszQ2qzsJzBp7trUKf8tLeDv2RkWzFzyNzdFUPjiHWhPCXmxwJEtEfsr8bbJaePBc6CLWFs5fAtTRHnobz3M",
  "key10": "SLjEZAB1TzS7ShgWaVa9DmiBnVskAZAVjdMwG1UFkrecMmS7AxD4revNFx3duS1YSSi9vma9A9VD7nbdKCLfxrm",
  "key11": "c591zXS9puvVY6qhYSBBdgiSb4twBrM85XzxEZjCfsvMPvT8ZnHsjp4y1wV28RhoAp3844j8zTpZihLbyYrriCH",
  "key12": "3hvJMdSD4oZf3jx1P9dr4abj7W1dh9EkF2AqJyhxgHTjzntdYZ9f5jCPqL4TRcyvSGsE58vGPAjUVa3mL3UyDQFY",
  "key13": "2rehnWrW1ha7GYcUgJixGtv7gz6EJWQckZPXVsLup6jc1oNouWnqpUG71SgLqwgkgpr7MxhVwjaikcgkvxPSvtQN",
  "key14": "4bBPLvfwFHaj4Rxa9LLsZHuzgTJp1VX3GkMLeVQkNZBQLvE5deoJbGNVNeDwrYGaNiLDttqBm5s2i5Fc62TVnKA6",
  "key15": "3mA7oyzxBLCbvStLb3GWXW7X1TsGpKhhEvbLSQVSvjDZ2DNGafCvsaxUv6uAAxpkzY53wnC24iMHqcpRUE79osaG",
  "key16": "2NWzByPMmajN8NSx1ZJjKtTDWHWDXzvMANSnM7rWC7sifGW87QZcFVA2pqQmRAdP444RayG9vNDmuLVcY2vxQ8Bc",
  "key17": "Kh2jsTCyiz55SfrVdEJtbfammQp9oGwDSuWBuwsgEnsG5T4ULFHZNAyJPuk67KcwsbNywRCiv8LFaaCr6BrDyfA",
  "key18": "3XY38UPieNicCBKFDRRDSBmbXq7gKrFRcbASs6RrtvHq3voPAmFAfe2jXiSJw6njY78VGM6ABPNXgXwncWxbnSY7",
  "key19": "2J4t47NxK1PKWQ1Ynbsown4Gtqv1j8Js5HWRGyLUCXHokAN9BobfQPXrkRZcdBnspfm9ZnCUWStwLKyS9jph5k2t",
  "key20": "4MxjNxN8Sy97um4XyuoAYHeZ4mwypGCXnZtkUFjfzaK31uYwkWvun3uTLGFhMJ2q6mUUHX3iG1BzaGpx1dFVxdAS",
  "key21": "5S1rYhCAD9d4EXmWRCRuSFnBY4cKfKseo4rVXPJP4gmAbcaVqXKssKgn8Zq8tXj8hCnpHSk5ZFKXG4xi5aAp4Fmm",
  "key22": "vi2otG8YWxaoY2K4FiwCSPHYGvLvmCTZ4HpYhsa3EMLWo15oLThtraDKipGkEtnSa2JX4TTHbT9zwALWJ3CcvK7",
  "key23": "3zndouWW7ZfLRs6k5EW7HgEN6skujLKLyKBnQREnzwHRGGmPpNJoMvRVFZ243BmQoQdXZpBkwbzvUYu1mNK6UpuE",
  "key24": "511URUQaqwjcP8CZhQHsNmRZaSfYwW1ShnHNvndVPmMyY3dUz5g6TgDQApAZ9kvxaopFisqMb7tcfo8KLuvdNUFp",
  "key25": "Rt6UoAMLjMSEaY3ELMgWjHTNA6DW4nn71wvwGtMuUjnaMJBWEpMcxTHVMLhmHW92SXj2Adosxe2Lgb2D74yth1C",
  "key26": "4iCaqxKJQc4KsQaKdm3EiWUXG1NgTx24ejFB3gqowC9zh6j1PrFNCBEJkPQd3cbLxE1gptwc8fkUriBqru9QRbE",
  "key27": "5m3NBHayW8J5X3HYXWAqpy56ywxJu6Y3GDMhdgbzCDFKPG8MYJHXS2EPASy9F4zXzD5QYSgrjMS26s6rf2SqF7hM",
  "key28": "4bVyfrkYDPtJTpbqvLn4veE58xpX9b8wDdAFvwwnX7oJYGscYpyvoCcq8pREBaLmKSsFgn6ge3P8WyJ26RxcsQ8k",
  "key29": "3BGzVuXGpxELyVrk5acR5YYstaYDtdKq1geKZko5Tn2GNQHeQ44nzLJirGQDsitA5txir7sURSKfMx2s44TzQv6A",
  "key30": "4UBZ56MkwLs6oTCv9yP4U5DvWcthzo6c2TQkmSM1Gk9DWtDqAoPcAy5YGoChGaqVWy9Wd1HaERBnEtsrKqJf2j5G",
  "key31": "6QXprnoiAk6L11L3nq5Ugmxtngu9aJLhGEJ8wmjPjppN2UUdGN1iGWZzMZjNpvaPkXj8Bp9EorDgerm7Mut6ucD",
  "key32": "2Byh891QcTpyDB877R6CJZr41K5oumLeq5WiXctDMGMnof7vdXr6uvzKUbyUhwBsEDJcgN1tud6ydhtexdEgx7gm",
  "key33": "C9i8uE977nMVQ7gtx75eSVi5UuHSEQPjrjSudJNT8n1rYMX252y5hd5L8moE7nEAU7Xr2weBkFbz9PL8BG97Hwz",
  "key34": "5MAButqjWnN41L56X5VHhD9RccQY8aGqLdzA3madAYxFRZkJ9kKNCM1anZcNAyix8pcyehZSL6DnTxbZ6uxKqtat",
  "key35": "3i94wk6MAmh2RBi4zXJE7CMmfxW1VuToHtEFW3xwykuaNNXNPtdXW4CSbThtZTi31h2wX58jUQYV1qLVdscvuQQn",
  "key36": "DoKdqDEEYMBKP8gJqyeSW1NvoLiS8dHGmJyy6WRHvNC2YmbGdvhHR5c2ppCQWEvrU7FTr2h3n7CNJAyZ3T5Zeix",
  "key37": "tzz3jH2jNJkBkBEndCU4p31T8LSvoiePnsLRdGXDBuvDxkMVyNqrjTXNFQ5Zo4hsP4xJe3bU7AkGuDPPQJmg1nd",
  "key38": "2MMAoDTJ2WPy9PousodYBwFZXH6smCPmJtN9xnvSMs4HcYTdXB79zM9M8ApX9v9n8WHozRvdVdb2ZeoH2u723xMm",
  "key39": "3kjn8gZmmzFcfp5QoeDG3dm5r8HUoCfPRogbf1zSGaBVzyLyrzxZL7h2BH95CRc2kEdF8MmgnnXCKdEnn87nNVPy",
  "key40": "5HjnXH9a9L5MoQBuJEfsNg97GnmVBC8VqFrWAPJEwnqWkjsCbgCHTumKGfFZFm46nb2F7DWab8tw6GihmeKaGV7H",
  "key41": "57VeRRWZ4WvCCsZuLaEf3w5Z1YGtM7PM76vcXqkyQxhGjXHzU5xdudntzWy59DKcq1rpUgpmBbNSPFrmpbstW8Wx",
  "key42": "2iVuotaMzAwDgEAytvHCgiKCWC83CuK31d1hKXNCdzbC485Y9m9d3ehrtZ2ktZyd4gjHrZXMmrLUdJ2t8hPoEUyU",
  "key43": "5sFgDewJHBB21zPYeVtGZ3fbpG7KTzUQJqHyXukW29TPHv7ErAqyQMzY14xyfgPNEKRoDDnziDqJX14Y6dpVx31q",
  "key44": "4XiLcWzesGSJuz1VTkMYtRFptT5WuzvEqqkTLqA6a3GiJg5sFnQUHpunfeoHtBUMfhyTyN3VK4YzFw9aLinqpYM9",
  "key45": "4K8RWNi61hZVVpLUYPF1VbbdpgCt3nEEsywNWwrFysg8TvCDncLRmGYvPEm8oLkqH1h22BwKHvhtpG3zLzvPYnBX",
  "key46": "2tyWfpNwgHaiR7Y53TxNn9BZ42DMxkyaUkXyuTYNqSdiUhTHtE7CjghQktSHv8e7WFzDVarKvyg5xdXn9Lk5nJod",
  "key47": "49qDKwoLciBM2KdsVEmNqRbUgNH78o4nJZUxdmXK56StDo1ep6JzQL7Jpew43rF44uPZRCzm2nzbqJLdkhxm898b",
  "key48": "2nXuPWkmWZGMqiA3PQ6De1XNqjFw6CRJAG21KTNABzR5mTXT6Km58VbR37HSADQCrkpoZeaHQ8iaFGppzKNr5dMn",
  "key49": "45M1oTLUxXc7T7PdSPFGScBAEWNgRCkWRcqHj6wVQcWx6p8XA84zYec9wKRyJGbUFiX4e7NsDGgmTikfyW5JisfF"
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
