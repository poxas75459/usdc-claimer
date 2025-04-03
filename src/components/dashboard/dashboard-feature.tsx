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
    "3Gw55n1eYt4bCL18UeVRmvFELjSTjW4JWAxquzGqHxVZ7WCe3y2cMSBY3ueBgNTWbKoqeV7u5vqcYq5XVXNYYZoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cedgu1ErWAPkJrfazGzkXSPM888NMTrtothyfbAUqzi3NuP22Et44ZcmzQvEAPHZyfFi2BaMjS6SV6XU6DJyzdQ",
  "key1": "3XFKubFkPkAuyJZ2HXeDoiknedm9msz9rqvopreyWiBWL9KxAvPhd3WVypiKWQp2Wym8ifNm6vRaieDsGcScw2Qe",
  "key2": "2K85qo7LiSKsESAtSdyWggULwB7A5RUrMneLd2FrUAj1pLTEXePb86fY14mXQ7uN4panQoaVGcbRxPaXY5diPpWu",
  "key3": "5E7NyAgkUgq5ZC2meXnuD4Mbi8cPQu8vZAeZ2zkhDjG7zHGgvRqs8BaASkxgAT5TrKdPQVooKs9bSHmtCv3XNyy4",
  "key4": "3zQPAqT3r96XDzAKiGs4oKjCJuutvd21xFLwtrPuuws3ffVPDfeEpkAzc1m2WqMbiSD8VNFNExW3iSd3f8TrioAf",
  "key5": "CroRVfGU1Ub9aPMNAyZqg4tBnSaMoubwFXTw2hTaSnGYCWy8LZ1LwmYVp9Sq7Ff85RPi8MMvWJVdu5hX9TBafqt",
  "key6": "QCH1NYKAmppAkUsxNrcuxNRPhgqPSCEcKJ2rvFiamtrrTus19hbxwyydCykTvfT7FNNt5P8LhMRVBkAyLs6Kr5Y",
  "key7": "4514Bps1LZmV5NA4LGGgXqsb5mYLBwU99k1TSPk3RUP661BWxMwHEo1GB7H4HfEHjGZjj9Tvd63rtnt5KkquJvUv",
  "key8": "BWsqJCX3BENGJLRjxUg5yeKJf4QBUXJ57gNWzxc9BXJHSB5jqEMkhhUbNzSFFG5AC4pesMhrRFzbuecuY91xrAs",
  "key9": "2Zf48jKgrzHxns6R4Y2fkiiScrNXV2hZGgg8iLUALjxdTDGg8CUBnojWtoexQu6uk56S3iph9uzH8qKuAmWuQcgS",
  "key10": "5c9bj1BQAr87Kj3bNTW4PETdfJvuhvwayjjtYpV6Lt3un33DjUrSfT9m7FVtqTymcq2YtYgUuKowd57bntRj9XqQ",
  "key11": "565hoPzcyy5DWXc6ou4M6kn5PWDZ4DPT215LPz6StNHfe3CzyiiK7SsKdTSb4JGcFvCU49K42kgU7dq3rYT2LKhm",
  "key12": "264rhx5e8utKuBH8n18FrUhcvLaVGvg2LC3Wpj4FKrxoxapVA7WfTEW7ppNhUtwGTeMnUwXBTyS8PVhEKEKWAa6m",
  "key13": "3rWXKksdAVtXbzicLKeUF2kwW82nW61X3uJRnaXUx9GaGqVJgRzYHaQGQMtSMYEJAkZQUQWTExBZLK8uQYQoAqcC",
  "key14": "3VaMMZooirqWbo3UpJFfm9DtY9NF8fVtGkjyu2dACtKWJcdTZ19saVDSngxZkfHSwt6Xo9BqAw7ynG8MSELZk8Q",
  "key15": "3vbN6no4FUws9k1vztTZMsNkxwu1qvMKhiXx4wg9hwcQsmQPZdX1yjUgRSzBuG2hQW3wwBeVb9dWQAcqm6wCeW1C",
  "key16": "58Ke4eP3gs8Qe3JSXNuARVvDU426qFshoAq7MfgtCU2FV3fy6Kmiatq7EmqBwF5gmmczh58StUBex6CEFC2S646P",
  "key17": "5VViDDg6fRXge77fDJoUwsNZzdBuDBAxW5VeVzzEBvEKw9pms4ipQfWTPuTCoXraxceDKo2vEPtvKzcTuVcBFW8f",
  "key18": "2GrT1JAntYTXdds6GuX2EarWxr1awiX7QGQknY8eH62KN3RVqfsSgdWHRLyLvPCehVVLNVTS5vz7feN6PsiqAicm",
  "key19": "2ypNdxsPhhTuxMJhxMWAFKVPnfsSExM4X3wdJgkQdqJ7Z6BccghxqHm6xrUNg7bMNrzc2ysJhHoGro4Am2v1aFNS",
  "key20": "5BTFHTXmEy5ev4H9SctgDdHTX333VpTaabpGC871c6ZfiyTt8ibKjUFYohutu3bDNXyzTewAosWqLY8czgY1Dmu6",
  "key21": "4PXShixMReT9CShVsouYWQm1nGsQX8ZkmXcYEgVMXwsAYk9ryXMSCoFz6VM89D4KDCb3DGumMDtWMxrUNaNrtmVm",
  "key22": "5SzzvRQjfE8dGca1BfwniMBcdkB9rM25fNMsXR811DUeyYh1FjLxbKpbAuq5yR6NEJ6nWXs56MwsiQSo8ue2QbFZ",
  "key23": "5nbrwUeBXh7sXiiCkepRBwHaBfs2hYYexGYZKHKxb15bjfudDNCiM3K2t3G1cWCTkqdqqJWEWCdsDx8jnAgk2YdA",
  "key24": "59SxmZHqzMxZMBEb1EkxRv3iiF1Z627eXUrwVTY4TrfHJ5TKsnwwwNmFrY7TgEd3LN2wqpyt9i41EJhvbh5bHi8p",
  "key25": "4bB3CboCGVpUpNeRGfkvP5fmNygeDGjCAHf1oweTbjn9m7AEHCyBdAJ794vWp4PV5tMy3HmaZeLQkzfWjXZa35LP",
  "key26": "92VUBSxFfGHfHThogWjuNWmtHCPtpZ8rLxQPQ67JSitTW5iih4KyAFRm9KUhemeciUtU8pXaoHv7vebQhGc2Upf",
  "key27": "52GoqruzyY75vuaAusyToxxuuje3uv54t7vZpchZB8QveEVbzkbbHVy3kkiekDtqz6NVqyry2PG3psdaj9jGcFZ7",
  "key28": "5U8BGQviWvmCVssM52L1t2v5camMwk1wFLrZyjDAZK2LvAgkhMQ8216FqJEehDPrw7G8PUe5YzhAEdsJqNeV8FTJ",
  "key29": "3qFHoYVxyPkC9TpLF255WbwfjhDnwsFrrA29qVp9kftSUwnH7eamQeKQmw4AZQUi8MqtKepbGphjC9vBspdam7Rz",
  "key30": "4bgZzU89YKSP348w4ksmLUxGYsKRGnDg3A2vpzigLNjhdAFMpqf5pDQ9dGL7pk8Af9GKSvvCwaZZk6m8JtJXPLjm",
  "key31": "e17E34RwZ2iET5W2Z9sxJ4mGfuUnwoLBUCw1j9NL8uDebrGnEtbeypusePNPDivunfaMWg1SJBsUd8j87D8218U",
  "key32": "3nztkKu8S2MftjAf5EBqmvtXwhBcFctnSRbL2bWDeefgSk2i4gBg1v76CpnsdbNn3AtmNU5D3sPktNqZgjhL8gD2",
  "key33": "5drZLAzJTMqCCLyKgsayxnW2yqZt82HdNV396uxn8yF73RJwChFD66N5t5hDXEiN4bGeLC6qShXFiztRDGRD1aMQ",
  "key34": "5fym73hnpws27eb18RZTiPwMe3MKcANNL6Y2xoubY9dMU5Xb1c5Djdyz9DCs191Rv9hPBeGqcDCnVb1qfRVNpKTG"
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
