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
    "2k22EtjL2mgCSNr7jkB2oHyBdwX47emyZvBbYsiRBiLYJvWQUnbqCLTLMocRBjhHvqn5iyeTraGDPC4QVDTYmqcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41fNF75LygJCLck1JMGjUNvejkbxy9e4MZQQiU31BYfS3iBu9yHxAs92Vz7UKYhr1F2K5Hy3hUEmAmgRocGmSJcd",
  "key1": "5QLP7RC5yhgJjSH1bJfY1DquxGtYWq3dga1EFuFuCyNVdMdJPBrAst6THVXSqywPHSVLAFAn2rt7m7mpsiAzrY6x",
  "key2": "3TuSmfGRNGuiWpWrywQjKkPuUa58g47XDito1th878Kfc5zQaCUD3Mf48Q3aHVk9rb4WrBaVUAkfWC9L2hQHNxN1",
  "key3": "VgCDApbrJuHcorcmJeLHD4E2CARWaLz4KqAzv7Srfo8dXSNC3uRzTet3bZ6KPyQ3cJkyFikvmpBWyvG5SS89fNZ",
  "key4": "39o81JxnbCXhtH4TFFn3cRrgY2yWWALSyF2t8J28qQwMQyCgkmHmzhZo9v6qwvM92HxkvkpQNAexZTM4hrMMf4Aq",
  "key5": "2mWw967xWcgxkaDUL3oqUqFnkfrdhLEeyiiqLPfnGC3pZ5MnsLdy3dnqmUbjKCwUWnXtGBAQJSieb6CB34pXSsRL",
  "key6": "sa3rm3PjSTY6mnDGsQUGi2mPGrEGkQ6TzVWuQ7VgCMEnDGTbVgJ1WVnVTg8hrCyxcSmutJij76UnBfnMVsFYvRX",
  "key7": "3dgo76ykocxtgMXWsM8Ku4xMnyu5nUvyCXjntrEvQLrmWPUjJFyU7afqLietCnz35J5NxPD9DgMSiUBY3ESYUqss",
  "key8": "2Jgbo8UoQ1sLjziSjvRmzAotcXh5cGtZqWY23tf9GJqArDPLSFQ57pZnwkVYr6TJbukNQo83GXCV8iLCggNmAq43",
  "key9": "3tr5pbGUWuejBC5ePXZLQFpQsds6htMhNM1rmduVGgqdHLPLYa8qGuyA3Q1qGxC1u4g6KMnK73DyZgqfdCKSsWY4",
  "key10": "347Ga77ER4gxNw6EQGfjcQzSARqvj4BTrsX1nXxnY86wur99pnzevH2nwwDnfEPYDGdt39Hod9SN9QQy3dQShRyH",
  "key11": "4AQ5eEx3CrMU1iywQvqYFVNGXHgPt6sMSHAa4FdJDkbFT11nyoeGp39BzAGAJb9pULRnjGtwAFstTmGcNP6iYxXc",
  "key12": "RUJMnt1NWPr1DMCZLJYUdW4rp7mG6nSkxDaCmStX4imz5fMQurs3LpD5o5QAaBKN74RtnMVVzqV9KFjQsLRNdDL",
  "key13": "pr44c2gpYeEnpjW2bS7VXjbnvNzyyvMrFCUmDC6Jf6CFxeW1Cfy2iwEwpPSNLHphJRg6EB1XJfkMw4NCKT92cUR",
  "key14": "4BsTDrm6aTWFcsYTrzuCdrw3HKtGDRyMumHatAgY1k9VenspwDeiyvrAsM61Xwz41Tu3Nwvy7Dyes1LPwUuoYdv3",
  "key15": "SHnjv7s8hMDqshiNvLsVQuocg1uimeQJXgMYEKCi4T48p7q48KthEqwmxL2KGAXj8VtYvo3tBdmZz4ak4gzjDPo",
  "key16": "2Jvq1X2BAJgh985uaWkUTZMGWnNqr3vMh6TjMQYmHX4WsXE1jUN6Lhx3iTwvwGaNTxtjzqEA444GBKb4GqAvvSy4",
  "key17": "bzKBAyb1zcXaYqsPnTq8dR3fqDV5fdLtg3Cp9raWT6k77kvLJhr4itx4tWzQ9sHwHxwWFx2AsUWfW532TKCvfhx",
  "key18": "5KgDT9dNLosqpzPB5mVoes82mGWBmaAjkVYxN4rDgXMazavX9ZTbqui1e5WScfqEAE5F6yxNVUz5tcMRateSK3RC",
  "key19": "q2NewjCc2MpqvoMWYfvDkkPpckoU87FdrqiDXV3fC2br7vVZxyd65gJzf5gEnUXYynDfgjifrTNJ7ci69XbjBwx",
  "key20": "5HPQxjyi8jiNHqZbozJ3e3VfWtt4LViKAqKnKTGZjnSVm1Te7TbacNQPAHNJcevpbRSUG7hqMQ7JkU4JSNzS7wGF",
  "key21": "4QjrewV5vXHzNe4kAVPuffQ4hNpwyJm9WGnf3XELXNY9XmHCNGwv6Gpwn4hLVpoakTSjGsVtLZM1DLCXWwVYmVya",
  "key22": "3fLp6nutwoqVigh61QmjKgsaeBwEbZWqMBJNDNgiQ9cmXWLrjbPrEY8VMifFPNk7JC7PQvoXE3CC1Now58U6WSnt",
  "key23": "dvrg9ecZH8HiEVWJRhC3ubP8z4RKGG7N3LvBoyze921cbnJbEkDaJt6iUZf7YpTHVq24CDHkwi3tTRuni17XbUm",
  "key24": "2TRWuJvrqSx7Rc7dZmU7HwPLqwGgYwzAAHEHpzeC5CoRPRD1VN8Qv2MkbGe4faWWHYvweoKjuB17sruDo86AQkqU",
  "key25": "Kn8K37Q1RR7NB77kM7TpLkLpBy2jcm5WQ59pQW2yetCbiwKP6KSvtHXqANcpQsjGBMLsVaFAgugEbwUmm92mZ7f",
  "key26": "4CxDzvAKzVdW1Cy6ZrryjTFHJw5WoA4wEvCFmhpvec3ENrjEs9oKP8Wz9eWrq32kkEVHpZt4vJdSUxGWzVybUVXC",
  "key27": "5MgRyU4K7jSuQC7JY5SzFmwfVxuruM36fR1g6rVRuAgzHCRGAqMNDRSAqNsFwFnX97iELAmxVV9B5VQECiFdn2Wq",
  "key28": "PHg79p3WTJRuwiNcbBjRb2QeN4ajThqjuFUDLbKwPgn48frok6NVifCBuKEmut4DC7uacnoT2wvFXsE37RXiWRW",
  "key29": "2ZgA8B9YNdDJSRf6AqaBSwXrT9WNeFzdotnqVhBKDHCJYR2C2rtHY1P6w4UWJTx5gLtBNxmMLDx66jEDtVaGPksH",
  "key30": "5Us3xYU7ZeDvFRstBB25xVWqYVnLETH3q9knzoLYnFyAnU4p9WP3LPH6ztJ7B91Soj3ra1SxBUKpmbwDVMCcPFnC",
  "key31": "v671YYtVdKRRwVLDJ5S57W84mLv5RKFqNj6nNV83UgiAhFvN6PiMMBcCT4yxZ5RdgBD3yihL6wKm6rYbxBfHPxk",
  "key32": "33ZUMUTb4D33DuMDR36Qqu2ZyFQJpyFnLeFPq53b66Qg5GDw9tuK4nJ2sQKHSQMo8p2CkpBpGUFtKCpHbrde6RUD",
  "key33": "56xeR3P3BMikraxDTAh32Fp39WN3T2bWqJD2SWB8DJriTsnGD2JnptXg8smjznRjvZ1B8Wc5MfgwqGpLnFopr3yk",
  "key34": "5snhNpNvtNqwLccG8emJcsbyuMohzjquXWpVn9zJVJq2kMWJYVJdpgyRajPRbmB1g1mXm6L9yLmnHLnR9adoZJk2",
  "key35": "3UNQAiCLgfephDiphV1QbmULnLYZzjVUztBLdMCsJr2EZU3NLG9XiwL7Yr3ov92xv2ZR3DdkhN14oYzUnGhDC347",
  "key36": "3Y9CcVdMGagRKuHtR37d5noDZ65bZLs22tKKktUSgnx3P7TsYCLTDaKx8gZBF8o2SZrpd3k35ihc9jLyQzTg1STu"
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
