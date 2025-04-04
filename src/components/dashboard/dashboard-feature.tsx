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
    "4djUuiuuDDWEFEk74hsPtQvgvntSGfsQgD5Tvaad8qP1m2ufCL6EpLn6qmMFP53iVYLJCueZbzEyNskuhsdjmPmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWRqtiFHG9gikK9XZSBii2gtPyEr8teCv2PDYF3GChutZ9Vn5zyLR8ZCYBraCDnz7vDW3E7uruhyNmqeNxfDJtY",
  "key1": "41obfASGrHe31LYwxsKLMS7sGiBdjRGDZF7SaAgQGcbSncsA2yeiBLjDNfBD9cygso1ubq7hNxq7iu6qLvoHBizG",
  "key2": "hKdcx18goMEoEk6Dq4v6ytNDfD5zB9MECtxZ3DQRLXE37zbeQ4c7hmMR9cigM3yCkJsPvsyM7k8K7oEeQphnQxg",
  "key3": "2zrX6iw3MqY2wZz8QpTFNiYdjqch64Ky9z1MPW64h93eSZC5cUKJ9tHNPqiYGaXGSgQ1TMTX8wM6iFduubqBLQ49",
  "key4": "5r86eZFAoNeU9CXGtWoXppN6XV1v8kvpmETXojgyTGVCAxPgaViok3Q3NdPrhPFhhg6srqsMgTmpgpusVb1Sck6f",
  "key5": "5eWjNsxJP8hR3oLxNK32hv6UX88BA5Xmk5ncEUUDFF6s43MKtDaLUdESJ3TghHvkiMvQL5hXNSRBc3cvraeY41g6",
  "key6": "4AAniE57WC7FQo5uD5LkYa2eEqVreMCEsQPvCZatnpMMKpLECkeaBBqHPecVDVzbAf4EDCEbcxsQ9Tw5UpxHZbPx",
  "key7": "4bxpX1nFRxazaeU1uD29DD2NdMAoKnKYdcrsirHnvxxcDewzJZrEnZMEGa9yaDZpr1rajt6ipwQ6VuThXJ8R4KVS",
  "key8": "5b3GGSdeqp9DSAQEMosSWie4Um1Fa7cb5nPkC46NP7idNyXtVCJrnqJPToDaWWzWgHa2YXVTUkeixwsTi6jikjzY",
  "key9": "SCsR3tFfh62U3NsrDrzqhSVQF5LvFe64Lp24X9Bv1FXcojjnkj38KKV9TNYChKgox2LVYPxJAMp1pocKsoZdoBW",
  "key10": "4whyRAyF5gjuReaGLfhQe5rt9DJHhteUBBSB4yVBZyvBT2VVNV6q7Fw7JGr5n4epu1km91fNUs7smXAA7pB12vZQ",
  "key11": "4VbcxSrPBE34aEraQczZUN7Zo92XMmE4NWAC8hzypWGShLHJ1BjxGpMqjTXR4fcMVkVnzN1WJzAJXxRKKfct7WJW",
  "key12": "2jgRXnA8W9c3HLQ8GZwwzX9hVDf7QygkoT1sF5K6fCGJtzH6EhcSJZFbcEqGRG7VJ3V6iDcKMJfqAqXW2mDLcWhf",
  "key13": "3EGj9KTPbRCNErtDbzj6N3h5wTk7tNDCFDze3Kbbkp8eSTzbYt6dG6wSb3sGU7pzDg8zj2rcWnKyE6mGQ9a7RjmX",
  "key14": "4cV7zVzR9WeYbsRE7yJpBLC7Ud7bPMM8kSevWRMqrPMAhicJt2srf8Z8p49YYebnmqXKXysyLPMhuizZ8rEHWraW",
  "key15": "59kchKBCrXpPkWS62ztpdLbnhuaENEQ9k7f31gEGkLX9pJDgtdb4xv8ah9e2C2vicipi5vLjweNSAxEfxhbFCYJr",
  "key16": "2kYS9LenEjippTaRBfbLecvVPgKnfGjqPWUArDZdz2DT1ZTDC4aQ8TkCYLewwPryns6X4YMtDVSHBfCQQZcXXKGG",
  "key17": "JwGLNECssXPCqidEmWA6Mxhi5xbpZ8CbdcCd3jEXLRWmT51DfAwdbEB8LYm5TXwScT5sF2nJGUqH2uaMQghsorK",
  "key18": "4hNMbifpzvYH2yVMdt3hMwD2Lm1o5Wguz6zrhkhoVCpN36pAcct1T5qS38HyHPGnYZYCdpEukdzorGkKzJ6fMDcb",
  "key19": "jjQZFxvSFBScPhHCQvrm58iSDt6cnx1oJiK761HTPZWX4Kq9iWTVhM9DD9NNJyaEjXzSyVo54N3xVnYTvRbFfVD",
  "key20": "2AuZtjkj94NmcoJGVNhoNHXzopQCkQ52SLxYZetgG4HzycG4G5FK4NyXyHCxhKz8TH7rWXJBqwefWpqdkuWDcWXL",
  "key21": "3mkErMUVy4HXwrzSUn3PvG87hkuV8RBRMJuBL59aFbvx5Nvn1pgJ3TEaRSHzi5HaGrZUbP8R2kgeUMpPduWHJabu",
  "key22": "2D8rZeYsLu7oAXXsWjKiMgPXTDvGRynFSTeR3KgHt6ahiciKAu86s7PrnNwn55vG3DzsE2vAA1NT3cKiZe8smGjC",
  "key23": "3jWXfYsWcMbEgF5WMame2WPjP4EN6rTCedcimDmAStAGEmZR9Nsbzd7ty7LTHZCt3bWacqVUz4CW5WabmV7nqjth",
  "key24": "4y3dk1PQfNx16k8bWJUJDoAdmLfEKtaMGoQxZRWXxaJ1b2GfHqAVvBZwk4nZkCgcKBB9XRgJd6Fv5zxiaQJmN9rt",
  "key25": "2AXPv6ddc4hkDhqAjHWZHs5n8PP4TfwHEypwVgU7ckRmKFsJdYGw7ZTsEEwZJojxDiNA4yRmShXGNzH8x3tB2Cda",
  "key26": "3pbWFCiTusjxaVve3LvLuBPDDSvZojsBwjq1Qh6b86tWsAwYCPWYy9WZpYGQonGsgFtB2p3hw3eDxS38Pv9CP2kv",
  "key27": "51LZxvmcbGrhwvfKYCbPJMVgNEFRCkxdmio1kSUJR4ZqaGz54w9UBki378JZGVEhrpsn43pd2HXCpY8H7WQT8SZM",
  "key28": "4cvsGJidFG2L4Z9XXZt4Dj2dCVkQSrRQoBqyqqHwgSadMAji2uG5tBWVNgTBjnxZDHEifiBUKCt7xJgMxf2agXqE",
  "key29": "2S1U1vR8SGhboL3JniqvZ2Y5R2KVVna2i3Ns5DQqgsWcRdJXJR5dTTbFhBvVSV138E9aXu4cMzBNKMHAGXkD6TX",
  "key30": "65cbjgnoY3nR4CM75aGQC8nK6zemS2beAkUi6DNs6Xkk7MNLv39xf83DKeGXMuUYwBXZuWpFMe3Hgs8qy3sgVtBg",
  "key31": "4KTXXfPM1V77ePQHKJpakMDjhLaFevUHXUtY62eRpuDzxpoSy7YgeRoFazcJVVXyEqqSGDnwT5cRoHXy7QedbQfc",
  "key32": "xDhphmuY13aUaB8XoRNnZ3cvX9AfeJdaUXMuUVTsDEbANn8TxGbfwajhjnWuUriELCxpfNxRMH7Mu5zEFPv8E2t",
  "key33": "54aXntxAm9yGMS7RRD1NRK6Yfu9nNf9uGnc5kFD6Qjc3G2c1ARHSCQN8CkFNXn1yxa9maYaHoRFEE8LpmRDa7pPk"
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
