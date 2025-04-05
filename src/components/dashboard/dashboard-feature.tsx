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
    "2jW32xkqnqMF59KeieUHjSPd5ZMDnhbRmbHpEASf9wT18r7BFNWPHVyfAd6qkuQqUMRpvmMJwQWrd74zpGxcJTp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LA4WTpwfTLSBp7ub2is68tnbjTkbzG61UAdgSoXaV9463QGVVXRmaXhGBVo9Zyjmvfj1bB2vx5T2bvKXZmGzPAs",
  "key1": "3bThQedC9iWUWof6JYnrjnAPpTTKzKjHYHFJ2Dg6t1GUPtLgsSKS17szGxfaBLrxZVhdhW8oQV3Eypbr4QEhatff",
  "key2": "4VHZ9H5R9xtWMG9WrcFaAaeme2wb5cwcS5i6YJ7EfBhhCKmNCq3PLHY15vdvu9vX5hAZrXDAqaLKrTTyALjkTd6u",
  "key3": "a2zvaKoYUpgYXPLb28E9pzqJJepHzBwz754q5DdSWH6rTkJBNBP68NCtcNjavvtmFnbcbo5br3k3T1dbrvYcRYY",
  "key4": "R9Hp7DPawsYnga7NTwmV1GD96aSUdwGkQjJydJttXzftn9zTbB7iEXeiAaR54et3Qn1wYPNfBrkE7kZbFY9duUG",
  "key5": "3irawbNXqdLrwRXzziNdKDEmag9YJ5ksrmQiRukgrcyQkB6kKFbG3Y9pAEPjJsPL4hC8FmmoKjGqA1WueZ3y22gB",
  "key6": "4JYjZ1bKfawurBKVgf7v2YRGxYDMX3fff8KwaYVHwdBdNpNYg419AejANyQxWE9mR3DQAuzfvBvz2Rn5TfuCHZwR",
  "key7": "2CZ9paJRRwCunfsP9TBiGZJWkQft4onHqiPjzpJuzuVQDNZYeaftckXLcYYHZJdMRrTb111CJCNEfTAjNTyDkarx",
  "key8": "2ydFfrEafZXpPG2chnj4KnHoub3esnHXKy8sasGyQK8vknyrGdoMKPkizpiy6kSRzDe9FByAzKRw5FQ2SnjjrtgE",
  "key9": "3q8prqd8DJvwNfGEVMhUjjsKvFtj4ftR5m8wZzUXiSyiDxeUd8THcnoytcuAyDAoXdvdNSGR6zVdyAZ1rYdNztbu",
  "key10": "4bvoA3hSBeugFBgE9iCBSWDZAKrtT3e17cuYuLymm5BZttkuCqVe5T2TvjTLjYhz15voviNpYiKT7Pkhqo9pMYu9",
  "key11": "5gaLSiRFTiSVXQEH7iBJKv8MdMSZZrgaFmGxAW2oFkWE6HHenG8zikg5ap4GeZgWChP4hkkeQSTn2ZLWjNmXaMpX",
  "key12": "2qMQqdobY83dF49PaHxEJBWyJSYWArBVReCx57ybBY9akVH9RWiPa1NpPTWzeguvC87vJeTYBh6my4fc39bKHDZF",
  "key13": "36semdgtrFiXSyqzkNJXbf81wW38eY9pxz7rQm1ECWu2cU3r3nBscTotLp6pZeKKb3FVU3sSq1PBqCupBbeLh4Sn",
  "key14": "5TRRPtsX5FTY57cg17nsr5HNKeMSDgJrkoWpkEEqUHSkTXuTUC6zXYzDWRywX1bSeE9BEE1YcrA42t2iVWxpS81",
  "key15": "wrwXjNz6SLFzNFzEFSGwEzpDkZqxHKcDpSmHDRiSH28W4QYvHWLJVzNyQ5moCHkTm8sJcuq4EW2L1s6ZkfLganf",
  "key16": "4fLoz1enV6EdZKGgiHunfRgZsaTsfYrhjTJ1G2jP3aWncRS9ViPPGcuHC6SdZtp6Qw6jEmhA9iJs5XS5abYYqywW",
  "key17": "2GnyTqL3kP1dZXfZLupVkcm4fZ1cFAQ8RSnPPBWwuUa6zT9LtqNrD2qCHJAQDJeFzsheZaJ5JaH2FzkL3dusXWPz",
  "key18": "2aoYnyxGitaXQ5TTewkMHVVCVX2cwWZ7cgKBUyNXAxGnJMywKsgp5rtayJrMCJN8dY52K4p4oMj9wPTJUgaVXeX8",
  "key19": "3YxfqDtnitu9wWBsJJBrYzh9mx6wX2vTGUsarwwmBxVPdVtjaXjmJRwEPA2WBd92zjhFUDxb2NuZyVtoBKfFvH3U",
  "key20": "3h4Yze916JDbM49ntgaBMjdFcqYaj9dhTtrPpPvf1cQf3yYacBwG3XYzrYpF1q9orm6ZcieUL8CR2Y5pcELLLZND",
  "key21": "278oamR5JMpZr9C4F21Epx3kMFvJ5vcoqKzARMgvUVGLJuc9UfxujryrTc5L1kAds7LN8s2UVbbhJbtehYVYS4pa",
  "key22": "21nGehMofifxb23arCJapPDyspgwi5r3kHATgNK47o3SysCcZZbRvcpB8PhDAPviy7NGhB8mWBVmoHVBSZihw5NP",
  "key23": "2dWvCExDwdkeJXeDR7sQZgqvx4DUNiJHCanQJ5KnzZ5MnQeUuhNydsFyfjRA97T6jzRaUrPN9yrfscrAsCHcFcP9",
  "key24": "2YWaam68MtJPfm2qX7AGtPAV4SqiKHadZ8KGhCWFmcSSktvb9zskzsmXL4BDkm244TmMTaH1WeYzqbHLCsL1r2cE",
  "key25": "3mfUKkVDHdhHnN9ASXqpBjECnoqG6ZAkUmwFB6JASMibjMJeE9d4qiFt7xmWdjsbybFbzFqNLjxgRmSS87wxt4p",
  "key26": "fuiRMYcmbt2krE3tMxxePf8fazm64DYYqSXsDFe6RpcWn18NBQuhWq4rzynow3Kxoa2xwbfGhW2fmzyLVF1bFFg",
  "key27": "3QRGSDakCCQwiDqYcVLtWdKSXA5sqNBAF9tGYdTcJPU43yRexsF1VM1kmr1YRUxVNbjQcKimdzDZfi3pGtd7H2dw",
  "key28": "4VVbrgHpPP2JxTjpGnkv4TTAg1xXzi1to3aELvJAofdkXMczWEcF1kgRmYXrt47DbVkZkqQRQp5qqPEMKabKt75h",
  "key29": "2kNbfEft74JdCbdZhd8XL8EJmb6QWiqQKMqNmbSWCBv2WceoaRrizUivQf4E3nZ5M1xdZsk1iXYrb8dAfumtCtuE",
  "key30": "21cyHPmop1uaHjQiSQ2X1zt6ANBHu8ygNcCknN8hNdf4CzsmPXRpJPk2qatFZgvkXQDaSM1N2nB2xtwUc1XSV9WY",
  "key31": "5MCyrMnm1ebTKzFpWphUeuAXWDGdUMgaHK9HE3Y1GiEqxMVYEmh6YcF29xbzPrdEMq8cnm912kffHEsHnSA7XZjX",
  "key32": "2E3gGegydoKiwLpLoTk3T44PxNC3TAcmVXqmhNxtmxEBELwRbuurT6fVgMGrAZ7BX2U6bWvNNR2dFYKv5nKTtx3Y",
  "key33": "KiR8cFuE9sobQpCCvKNKitrSAWe3VD63v7Hb1SHgbcR6C6xF1XjXSRAMTszNRuLSb38w4Lsf5S2pJzRp5reAp7c",
  "key34": "5fE3sAL8YRXbALkyxBnBayqW8GyFMAjiahVACYgqy4wxx2jaSoFEKUcDFomMCXbjjciWVmoZ9d2mfhbBNz56BhRe",
  "key35": "2bwVJybP1VhEjsGc6gbfqapVP5pu93r4rgzB9bfG6wAUghirqvHzWe6yuuTuJ38gu4gp5qxd8fqifjwaRuMa4JiR",
  "key36": "3MMTR1YQxBF6RskjzwJcfw26tDx9SpZMfyrDDJZR6yJPy1uF63FvH8znAysJd1nY5WWFeyt6JA7YJg7pZzUMPhiD",
  "key37": "25GpEM2V27HtGiHMDNkvfSip6jLcvfcenni6XepxXpNS5yo6VMa7SLVUxPQtdkzZqAcSvcXJkzBJtvtj9QECKotA",
  "key38": "38D3wuDrfJmLDb65TsWoZd4KTzYYawUctqcXPddYdCXGR4ToVTUZ6kMcZsCAgxddogyeppvTEbwitaAeREhBu82b",
  "key39": "4owvw1pYHBJ8BGA3ds9eGbXkHWAdE7tixZM7w99QEBaM8DYxE97tSmkPKZZEx5aHuqwx4UxLmrX89uL6qYZrAvc",
  "key40": "45ufmyjGe8GXYMzsMM7s6mBzDm9bpfwpE7GJeCK1AT34hn3LBbWPa35ANtPc5oqXTVrg5iDESQ7L6wcQFntUdDTu"
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
