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
    "3dswus8uHtsmynA6HcHYDchSDQXooJe3JcdeibStF6UjCkztwnk5UKPS5edjs98s2DM9zQg9k8dVeNZW7BxdrPxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c7PbCvbmUesyipSPUCBR2FBfvi89YPchhpEuXZM7LLwirhkaYHnigegoRxKf3z7Q59uo17iB89wTr12sCe35sYp",
  "key1": "oHk8PwmkHn7quejsc7gTbt8efDDwtomcJtrHVH8F3SpZdMYyUx7VHDFL62nmXqkgQtDRNHtJSHsakaj9XXxrbfF",
  "key2": "3VHPrWmA8RXJBybHuwyQUncq8Z1R3aBquCMnCtdyYcTbNyZ3Fv5FctqWS4XJ1R77Sr3F8qLLNzUVDEmasFNFUgd2",
  "key3": "obb22SuTyzMdSDpL1XLWMfSVGgBB6YoHvn8NDt2CLAoXokQiQaK1DVwL7RjGe2r8mEHyxWZAbjPzJSwQFuLbuT1",
  "key4": "2w6zhKytGVYVoVUhRDnvX3Crug9GCbwWkkiqXDYHZf12Ujvt9qp2YR3qfVps1t22NAXjKP5VAEmYL8JLssPTjjK6",
  "key5": "4v9tBU4AsoH2QG4aYeWwMeAotoTpqZso2KfC9683Hw5KbfU7SP1zo8fBZUxPqAnWUFMveEsVJQMX6JFhAB9hjUAp",
  "key6": "2pJaq1wLXFpQZWsM5Zt4EnHNkMKBw4Tw3qn7UzA67gz4CDQJBaXg3E2MyTTLBG9bjk9JByX1fSrZKfZvx7rFJ17C",
  "key7": "2cNYVDan95B2LZ9J6fUrnjjkoXgg6gZ62FuKk6b1TpaE9T3iG75EdRe4EMtFp8UB3hcAEaf3HcRu4sq9u7BNzGHr",
  "key8": "2Y3dES6apyw4gNktXnYAsQt9aF5XjzUDu7czR17aGEwKgea9oaqHffHJZsChizYJwjvGwk9dC7hS5AC4p4czmbtd",
  "key9": "4DsHHqGKtRzLmKFvp4esJmRSo6m5JYsS9pkK3buZFka7DGDMmFN2z7ZZ33MKzNGApphBXXjMx5mgXqgyoDEHS3MJ",
  "key10": "2pvBwtMhZGnLs7piqZrUMKe8nBHNU55TMK7sw1rzz9bNvq7JkM6e1DjD4ZoJYJptTJ1pT6C4RA3dkpeYN19cN8Xv",
  "key11": "64qohK7xpaxX8duGibAoVmopGyjjG8h5njUcNFHwQgJe7ZbE5Kmqnh1PZuwkwQJmQHRF6zviWPFSt9SF9Kxhx4Vz",
  "key12": "2GWYzVGoYAkRNZ2QdjDUjmbw6aSiDc4cez9CpkwBCa1S789yEXurEiCazRsgZrDph3Pin2hrztQGXfNL2vLoneSM",
  "key13": "4ECRctWwUNVmK9tir1hLuPGTycAzBBCg38i1RMvbb9dHcWqfdqamgLLs73muiUFPwpc7KJ3Revp83w7ptvTo2M3P",
  "key14": "PwmrgkmsUuUEy9aFqV8U4EzxMeSpcD2nQvbWVpbhhwqmuNJd3QACbRLhwYLi9wuGXsgZ2xPvYCXyRds6QnRVWi8",
  "key15": "4ERjSStWM1xQYwDVjh8XuaWx5spRCTPWUSnSqq4JL4roUtGThC3H7VXWj8bKfbFayUhYhW73L7RmhyN3YUiousCJ",
  "key16": "1C5Rr7yM5Hjo8WdyK1tRm1FHvhaeozZnkgBYC2iSHyNjZihfFgLkws9cwBCj3KbSfkfuDyxSwM87yqkRaVFmM8H",
  "key17": "29SwPhfrucTomB45KyswVaUwXpPnVSGaZAjYYX83c9UgrbxxmTbRLKinAu8hYL6gwi3ykr6THruF6dx2K1gb8tpG",
  "key18": "5a4Mf5jGc4FfAgnZDf7yK7vGv4R54syMyGjaDVDcB93s4LBtipvgcaZSoLHuP7W5MLDLDynUUNaVzg2AUgqyAww3",
  "key19": "4E5UqUvvMT6jHetxrSqYUCnF6CTqT1YVAH4nQPDbTSejrqEBk6zq5B4wjmEvwviLYhEzQrzRBRFF631qmpSGBx66",
  "key20": "2ZW76fixTMuLqKU6ZgxqDRp2jBRY1TjF298khDnTWqugx2hMmKByGm1t3TGJN8WzXVETLAT7Hzm8C4bydvk5KM73",
  "key21": "9CFQgc2qHFPaHXcHKeVnZEjFyJA7jLzKotg1B4U6FzKhpcEaE3JKorEH2sqGQ4mRThh68kms5FR1fKVCTmoNAVD",
  "key22": "E2QTRue1Qk74KtnZotgvBBxcixvvVhXNTY8gnCFzAzn75w4qCdfb356gxksgok4az1DPHxyYMYVftW8mFENRGzQ",
  "key23": "Q3k5mCds5FUWvRLtsSbfcmcLkconDg27T51eaanuFNrsRVZkR9ZAXeGVioCr2jr657NMxXv8KuD38GyiRgFETJc",
  "key24": "4LRhrAsrhNz14h8CrcKzhqSWtu3bn7MZsUbrFwNPfipKnpZfi9MsMKYw1c3PVHEsz6u6qn8X1NGZSDT2T2ZSwsKN",
  "key25": "eWFrprNmRpSVp1VW1ibAnVv3v97indMzkupEPK2C4ohepr1EwYBiKz5LGFvPRWYjGMxTYedptEjj11HSqVXzzDu",
  "key26": "3j7eE1FxZ7m557ELwuzVsUc3X9LdKkFHXh9AoVpVi3vKarKKzZH8f3Ru38x4fWrvCffwz1Yr9jFCmeb1cErDQSdz",
  "key27": "32pffjfiaiZqn5vMv1DFs3n1V5N2xQGdYj9RrjYHVeCqK88Q7QTwYKoERZqDK1jXscjukdp5awUY9EjbWPoQNMFS",
  "key28": "4AUeknY7aDWoPMNC4iJ7zpyay1cTYxt3LezsVVNuHjc7To44fM8iF5i5fbbGNN1z3ueFi4sfTUTqzTsKmLN8B9F6",
  "key29": "5abzLraxjFZisW5PAdebwqRDSe8n3xuykm3fn5cGF2gfZhmaJZZznAyzsBYBBP8GZCa624wqqb3XbQDfGLJCtyaR",
  "key30": "5PtVXVbCZhRUERQpAsm3FUQVejquq7yf3rDZ8G3NhTgbaERT63AM55Dpt5Rm6Huq7nWyxnamFA76Z1ewp9upcsqG",
  "key31": "Z22btj7fMMufouz8Hzx19fG85agAjizFjknWrSuMzPFY2pzuQ3u9GGVkt7agVYesBuVpVcXnxcjQ3RUd1Zp6upi",
  "key32": "42o5BDvDsfLdb8U5Do1ZPndUooLd2rSCH9FBqcFSwsnRMtSb2Vpe3Wd2zz9ir6xctLskgkM9KTubLnPS3XHixMH2",
  "key33": "4bZRYdpove8CJ6qzEbaoP89ipQ3wZTCoSt2it2T1xk6fFtzYTPYBu8Bg1mSCoc4oYQ6VQbzy1g1Exy252TMM6vMx",
  "key34": "77TmxNcBi6Qp8MgqQ66Gc45cueEezzJLj33yhvKr9mjM58UU2nx7qMNyp8EUYQUJwARzpVTeyMn9CPy9oyCj1hp",
  "key35": "4DMr1UUREaHunSjXNhrEdpiZoubJ7dgHwQaAqaqhszxbBM878RdkoAyCTB4KAB2ez9V4nuJNe6D4AmFJDoGuvKmx",
  "key36": "2umHQa71Gtzb35MgqRBvA2g3Xm3Lsz1PQ96HmWdaYRhurSXvU57rbRXrZ4YBM4Z4JCLBFFgAh3f2GA81dMUdUcVy"
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
