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
    "2x8JysE58GnNBanaF1wfeHHT1fV7dpepuLFhDytqNAPPxQq1LBYPrAgGJf6NGerSCrUvT8vWjATe3DcGytPGqnce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCEAWTppm25bQYNSnpmiZSp9UtHAdwsHVzgGKW9msMSGzVybN8CLRxAZb93yFaExC58yMyLNmdhSdNP66GKEvuw",
  "key1": "5iYB7nyNpDh33F19G74s7MBAedqcrkL9xGX6QSwWpTCe9VN197vjoaUrSSGuZHeBGbvRkpVFoeK1X5R2LiEdRrsP",
  "key2": "2nwXDJrqMNFhxvhMtL65zWV7xeP9SpQPfgGjKHfjFWEcKPXnPvDCXNEqCL8K6HMyUo7ZQG93X2htg34CrHjvVu97",
  "key3": "2nKmXWRRd5dGxhBsk4qBNupiKByhq5Mfc1KFc1Lk1NChCPgsCM2VrLk41zt4rewr1NRVuVcV4JQnBxLhpXgLTXAF",
  "key4": "3JU97MLZKjbw6fPbu5wWA8bYCKN48VLedyce21GtrLonQRkGjDstgZYLiK4GHkS8ccF2bpDhYP6K1rRGMW1nPfNQ",
  "key5": "645qVYjDsZVkabRyDvmAhkivEyKAMYPLwQZC1LL3K1h2WmHEXZFPAseCFxo3jeWZViREPMBXWud6VNqD9BmKgAxS",
  "key6": "2kxvnwBKHvHjHdDk8iyvbT1GPxULb7XN2PfUvQF2VApn3wcHYBDhyVnQRQ8bz1U6ydZxsQmeXQP9PfddyLfzcz9e",
  "key7": "5yCYH67HvHEXQdD4cD3iHLFVM4KvCUCQ2V8XdwsfRUi3JpLkJBcQzVp6GtacvVojdearsBxYcXm4w7cgZokL14G4",
  "key8": "4PboAnnfhXuP2ST1fK7dztoaH3K1QA8G4F7YZ3qHkGY5YyskNVTYQzDkyUzpdAu9iXCVgpPc4QEvtbzfJzPX4k5V",
  "key9": "4ZNyGtfapVt6vhRfztbFrfkAY4FtXMZ7ZKmdLC4rG9kE9m6YXEJxHNNCZMGYW9JzgBGq9B1nDZrhqyTud5mCHJpP",
  "key10": "3usa9yuPCYLdwhuq3mxKQ3QQ28XLXoZaPaEaJyWzrfoMnhY9dsMvumZ8jP3BpjZ7yHoBrDgqRpfMHM4f1wDLfQDK",
  "key11": "2jjajCg1MEx9ZsdiUp5swrLcHJ6PwDm1FVNHF5KW9aBznYCrfL8YmLdEY4dx2bz2EBefn4cSgdBwjRJE77ADHvQH",
  "key12": "usK8iBg3t1aYQXzpDpqRKw2ds6SN5EfEMKEGifsQbC2woDci17SoRE3ysX7vDp4amcuKR75CQwMhZcHa1UUk49E",
  "key13": "2opFGCuQcf3J8j51DVEATpVLrBJVLLVqDY3H4Fw2KS2sw67NzyLEsMDmWxntSTrGvdjG5ob3e8kEMDKqyCY4szWS",
  "key14": "2pdEhxgApyu9PjF4LD2xpxuGw8ZFtk8sbJuZ7DADwXqvnr7qDTy9h1EwwmXqyx44fGvbwjaaxZzgQEp35RWMY7B3",
  "key15": "4V3hefAKAkD3AzPCS37TSimTGBsu8XXMjaRkf2kv1QKxTKinrLsczDYpved3YCtzbDb4TrCGgPtqycyLqaFkWqxy",
  "key16": "2ZnQ8NQF6c7go3ocyZHnTdydL3B79mdZLqroC8HhogvZmzmWYUCAZh3WfE2ut6FbxH4X4AzFNYU9AxxgzfpnHyEq",
  "key17": "V5nGos2ss5MauWbeML49dP8ozA19VbMWwzn7mK5vt2TdkJwZCV5NEpvwWiert35iJtYseewHMZKv7jnEXqjsfTL",
  "key18": "4bk6Qv4wDevaNuUTmuNat11hqLPFtHxaTa9rRTR4jCLJhquCZJbLNFv6h5MnmfyyYdEAMiouTetK3VGYmHWPvJ5z",
  "key19": "2dVetHi2kU46veGZCBJA9PTU7Tf6u9ntbG5EuzTfphEN1e1oYopwXEQ3W4vYmYyi4mubZ2gSjzJEwrzbdMryGXaj",
  "key20": "5iiGqgqXEVm4ckRQzJJ1htobnNUTh7Fva4dZe3s1ZnsL81V2VrR6eUvwvJqPUZBXYSxojbfhNe1XuunmkR5sW3Ec",
  "key21": "5S358uwjvCWho814kVLoNvG3jBPQcX9E49GEVAwzcrMW1M9sQbuJMQLko8PvLWXRBXGXNubA2vQFaGZqtBHTQL22",
  "key22": "QZtHcF5WL6DubmaXVoiq1XQuD67JJvmL8AAwnVmkzgW56SdJborp3rakmXtkNCQSqeQeo67gf89NAfXSmLaNFST",
  "key23": "226f6PgDjdFFfkxKigXScDBwdFGAv1auQCPqyycmMk36SxMaLv7RxMA4LmKzWM5vEDhCFKRHrLU4qNkp6nnA97oT",
  "key24": "ijjGkKpYr737BtkT7aBCF8616FUzQ6U5WWyTg5PvXSnfz6dCKyKcNCnySNRmgK2M5o6cBKRy2neK5PLKPFn9oVU",
  "key25": "3pxUZa5CKcTTomJPJNkfkUPGJvJ3v676qSHwguzazBLHZXbxWcDQRg5jHxFbiAxQhM5WTxT1nzaqTmL8LNujnZZv",
  "key26": "3L125oPTUvwLG9MLgwCKh5R1jSanefaW4bFoupKjygNrNKeKwTFrsooEAwXNrTPkeUdtSRBm3y8GnVQfCmPLb3YC",
  "key27": "3EaRPbZE9KELDmZetwaw4RY2Mj5PoJx3NaRuprPuNxPxQqeLh1Yy7JQ4DRm4sCNkgFfvH52UzmpJMSsh3DVSSaxy",
  "key28": "5eyZF1waX5Peq2fND71UBtp479bVcfh6FTFTmmzFkVt85KmvjuMre7jTVnd4ApYrsaGbdaCuy6hvdGHn1x5FHxGF",
  "key29": "2pAoSX3qZmpnhXNC7XuHPGztJfYXMgdY7y9L1cFBxKBBDT6knj26EwynrDoUMkTf5cjASnf8yDiGw5QqjhS2uh5v",
  "key30": "5jfL4fSoMofQHdRNPburou9t8BajZ7rbFBdwiTCvSpq5QmtMaw2jYEMVu9GNDStp5duPNNa9TBAsFXrVxXwDPd4G",
  "key31": "nwKsUk5nXzmyy5Rp5e2FLTcnY1r5bbjzxSCt6eqfaT4a3ekPU7m8nrXqDCE3idntEP9HbgKkkKxjY3dkQGKnk4i",
  "key32": "3rYyxUkiNLDLemNo2mnSQWo1Hu1gGmGRsYREASaFGNjnyu6mFEHY4d37UwKtmh8XpozTKkec47xrzA8fTpNRNQBw",
  "key33": "277oxoxk6SRcy7RbcfSwsdicW8GB1d6YFossxsGMmE8HPCYLq5fCgRfnYf2qPFdfmqx4JHRCnRm8QGaHjVb1uK2r",
  "key34": "4LZyUFYb1jjxiY6EhXnmoZx1EbV8Bio67dnt6m7hYevsoJKdzWTfsYAqKfeLhCKh1Qo7gqwQjasgzFhM7fBHeViq",
  "key35": "2tD5sVEQwtCxUj1Vg8nPWkMAFSuPxYcC6rgG72XeXKv2UKwAAJYEUyrpUTE17nJrUQG7mPtbyudVBUien2s2vuNs"
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
