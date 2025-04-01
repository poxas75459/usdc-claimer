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
    "4xgc6WvNRh8abx5hsXDhBwwsXGi6SnLSqdF9EChHeoecbaDLBxmfUb5qeD8Y77cuaTXvxtbJD6u2safHRZH6H9Xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MT6duroio57ScrYFrBQ82aMqRX12sKPnZNURHDfDHZkaeqZ6Z4Ytm4FQt6XWWQaqKkHd5zuwZAH8ncM5V6ZMxFs",
  "key1": "4rcCV1SQ7CPhEJ8wgh1DaiFAdTtnf2vHGPo9aZHYufK3qH7j5SVGBVxsKFGHZnTgguxNLxiRhGRdmiC7XfiH6AYF",
  "key2": "2AdqhjYkgVvHiffHHR4sw3Po7ZeYoYg1yJfrm6oSymVnjXU8nXX4YmbuEh8M9LrpxNPLXjAap1AiZcrSdLUmxaYP",
  "key3": "dP5sHuL9B5eHeUSwnCgcBVmPjbNqAhvzVhhc3oHPAtUkYMYKRvoC5hn7ZapMGRExxRHqPqySgbWcDneBBN6iWke",
  "key4": "58n2LXDKvSezgVUXffMbYP5giwAbRZ21VGpezo1AaN6zjBdojDpx2JtKWFNWfsFLeGgx5Pdg4WLfF1eK1rHhxTMZ",
  "key5": "3SuCzTLb7p8chp2aXcoCobj96fqQgJG8dQwvWqEs7pi7Q1zP28ZLLQhNUbo5tvYhNh2jHcA8Kbpiwg7hJQXWpLs9",
  "key6": "5inhzLrFctcwhP3Xxd4cfTBabkZcvvKLo7Uc9mvkmJYKjG7r7fDYnm1fKVbQn1H2z7614JUCntKyV6K3DRdRkiWP",
  "key7": "2qBjtuWvvbuSHKyZkxqR1dWHnCyQ9MBTe1F2SUYiM4t586t6HG8x6qH6Bwv5rkLrHquyrvexE7aiXuNBvMviT4wz",
  "key8": "5E2LJMdX3VNhgfMKL9iv8V1iyHeuUi6kShouVWYRAYUq1b8LRdBLZDveAaU6qk4N5NRUHgtLyBowi8SW1UogZonW",
  "key9": "4kgdNnRoh5RV1KiBgG85LAYy5BaRkpSNRDNB8uukqcV1iBLXkmq6z9YBtVwSQ6P65p4c5VNZQ4GABQLguz9M5qbY",
  "key10": "5HkXUH6u7ndEoA6TwexXg7sqXS9TgQSTConTuznEjB521EVhKbJfiQH3q56JbShKraKac1yZzHZbhMmFu3aohLK5",
  "key11": "5FYpJpMqnYgK8yaXvpGB6suB2jBcypwze6WYAmi4dn8XoUatY58fusWxmNJiSGJduV9N1XosKYApHXHy6wD3QkUx",
  "key12": "4sy9Pd2cuNmHWDRzeBkVTkLSt1KSna2Qtzv2SxfePcmdwbv3n6Ndf9tctBFPszExn9UJ47NiWwUPA6AzkUnQNPK",
  "key13": "5hRUamLhvEpXFrbhGaxM3KhzShd6CFcMBapUUfp1wXTh3M7sGsiNuUv11uMu3oBCa8UnpKkbNTxT3KWgvbguHBku",
  "key14": "xqowTndg6Nc8YeK7BXLFqSoD5bAu9sdNZgejzsSNCv1inEzDU1NgrqhNK3UzTkYioSjrBkyep2g6UbYeLcQCKBe",
  "key15": "2Rqx69pdiobrBiToCYEvxM6e5WN4bTPrSrskWUmrfCp4qLSjjfK371yg7ob261ZT1TdiRkt4YVNwfeofKJqAAG8i",
  "key16": "47zQw91GsZHDmtnyawtXLSyptgvDtDZzfCMtkgcUepSkjphCu1Z49bHDAPpfEQDwGqjBqiw5pjrp41cAqVWrHvxo",
  "key17": "2yNh8xG7RxTXaaGEYvxqa1AZF4e31PEX83UasabJBawFnAaPzSLqZUwRH6rVeMceHqTx3f5zyaCDE8s9rckGTDcF",
  "key18": "2Adooav9riWqcuEs76Tq4s3SZyMgJFRsFUM59MmDc55y1YHAUePtRUgVQNFpTx5CKmuBuHhx812swgkHv25EUhLQ",
  "key19": "5g87a6y8N2zCwiSYKRTy3bDCeEq8KyCXApsRVAqWvMLs5bRYwMTBdHESHwZpH8P9QtFUgAY682HSbRJEcZPwcKwc",
  "key20": "5MdoUDY3SJcfTR5YagMXoPpcFbdAkHxnjorbaPpdi9qAEBWXUkaVQgTVyVVqmD66zWLgXGGb72tRqeXxpZ87u5nE",
  "key21": "2ondKv3tsKcPR369z6QHXTkY6sAnQX6JoygtYSj9bsJc6cpJmoeryZAukr8qxpBjyeRX55NWfeV3pAQSGCWCsu8b",
  "key22": "2ceFQRPmpxKGvgPWH83Q8Hz6FEteqSu9Tebmmy7iXEkJKsGogmNasKK5o8BDje4QVzjfiTCPT5AYfixzLJ7hg9QY",
  "key23": "w9m7F747ChXJ1aPVeidFupyuP7Yzg2DeQaV71qiSX9DeWAUmGyTd4oGjJ2QLwURiMvBmypfmS55u8EzC2tzFLhX",
  "key24": "44Dv9nj5GG2MywEjubUGGUtK43rtw7ygqJounp5w7VxvyRSwPPq5o3YjfLVQSM8C5h1r9dGKS2kLrYurNWHYA4Po",
  "key25": "4icSysRrnDiBKC2Mrmp9TXJEigr2otsexj5xbEJ7twdvQnye1kKHbWebkDxtjTEVMnZmDUDgXzHxAweuQrdJ5gxK",
  "key26": "2Kws1xxJbgiMDFCWKuuid7syAaf2uW2NwyevhRdixX4CYi5ypP7UAtqJD7dbunztv85Jf3mMFKSuvQUsizTWNgLq",
  "key27": "5MLrnedeFxrUdUx1y9YWuLH7r9p9ZtWo8e5p25CtLoC49MoCAhXeXKTJLJQuCyDXzMruSEzXHHHfHapVF7P5maBD",
  "key28": "4NKVjEWvCxf4snyzEfhhoXzwesyfkXAzzTdXaAzyXUFPoPT8bVqep4wta14byxTABZTPjM4A1x2mH9yJC1pSLeAp",
  "key29": "5mJSu3oPsYoTvYJ5guEqKdo4L5zHKfPJYaAHdck1ccUPKufGuA3uDdCHVwzuzeLG1PG6ZJJ8iu2MVx7fygxoQCXr",
  "key30": "4Hvvr89H7aE3dp3adGLqP4ffvooB5s38THqaucP7T4Ccne8QFo5Q46pm5L8zvvoTvPZ5nCw7eR94ge5bQQ3FrMKT",
  "key31": "4KyqndTHBUGyzc1EyLSuPxGSAPbLBX8m6vTU7pZWH6Gdw68wMd2SR6bdkphkjTih5vRwAiGmbQnVWK1wKZ9ak4nY",
  "key32": "5XJNoR2SdfKLXfZK78vTPrEsonSoKA32VWnZ1LYFEZvFqyUNjzwsJW4X285xzgFFnrbrwRoYgkuUn6c7KqBMCkux",
  "key33": "MY2Pb1gjNunDJMmderobjY73KPE21rmSXJUb86t8agAff4RiMTztANMDGGg1HURdEDaayzaV2D8koMSooEvLT31",
  "key34": "4mEvhF2bCR4iBHNJKX2WnSftf1EAmtUAGFMXoGhRJfxEWCuETDMAKdcZWuZXpsSvanZcx5gYx1cGoBxnm3LSfSBL"
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
