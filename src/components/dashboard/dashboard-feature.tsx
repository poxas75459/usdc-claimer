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
    "3s6YTULDbQ5jmjocUwMfHpyzGpcC38dJBqQEjWVAprjuN9SNUSGBfWtTnBjxME5C5AAi5XAZdaRV5U4Ctu4KiBun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61enz1bZjnFTvSzt5nZFDmby1Pr3LTyHHHFcX1D4ERQ8dxkhfqV8vMKXLkqS783RsLSDryo8TPJDBsCZEZHFDKL",
  "key1": "rdmveyDTXoh4YuDxatxhGjMQevDLZjbCs6pv8SgHUtJr8sAucQhqZUts2kDzDkj4Z5M7g8S4FhAbDSyPbcCWcoB",
  "key2": "CjkkD6kno5xrnA4VsSRcuKrNfACh4vXt9y7DuGJ74rNBbUeCeFX6QEKfcRQ96Jzwsemx5hE3Qo1DYpDq9ViNnVm",
  "key3": "4DLw3pAcjHLfuYVe6Wt53HtC8AxVmx65jkDjuMvktd6BDW7Lwpt3Sh7DQn5YbUaf7vqCM5som82GmJcBQHNAsccq",
  "key4": "3ipmtF1BxGvCdz9kwechZ7oZtK2HLEYzmTZe7NTWpWSmbVsK63ZeXLLB5SgXrFuBwmeYpSHeDuQbAjraLEHM1nVQ",
  "key5": "4F3BRGmu6Mj5Pbc5mneSR3tru4NDshDESsRcqHBcK23UvCACCpcws8G2zS9Ajv4VV6DL3R25qvTBt7iBTAx2Ak3p",
  "key6": "3r536hWBDDspDCKEFfHHFm3TEMR4nJANwm1XMEnWPvZBVfquJoqpxbXKft3DKyCsNJzPQo2fdSX9M1SV1Epuv9Kx",
  "key7": "4wS3c2VqPRuN77cn9T2NRkMRPSG42NDrKDFEnQMM93NSUj4iz5nAntxYDJVfbnphR59Zxm5Kvss5DBpfLmk38r1n",
  "key8": "2DKWf7pa225NowoxkTKYmf89zBkDAnQkhpSVKFnpSW5Ca2rypaWQtWTXzJL6zQaxHjFsgXXWEZ1n7yhVhQwVLDun",
  "key9": "4rrWMxunLEzUPFi15SdMjVWXn6eqHsuhicfWmw7nfVQjncuDLusMZjxENMfKw9RVR49PEipHrH4BCmEFd2ZnZrB2",
  "key10": "2C57884cnjPHPYKeQLQ3cmXBv36jrL85dvfnmBkHinHo72i2DcCJ1qcPQzuPJBvmwDEzonzZkiY3ds6mt7pFX4ZQ",
  "key11": "3i4pe6gEVe3jW91vwvRf7pwYvv2CPft6guRKQNDMvkwMijyc3KoYr57qXj3C7qP8hQu7QJgXb5DKitgxBXZFebQJ",
  "key12": "5kTY6JiiH6p7RGiKAjiyM3gDxEw4ji7oRxYtkpvrp8qFUbr1AUMFCLC9aojZaQRuxxPx1bTsKrzv4riTHNJc5HYS",
  "key13": "2DGVt8TAaNiPaFJ49PHJesKs8t9ifcEXbRUtMv1eYATFqEiN3DGwVRSrvf4DeEz1sLByoXh8goSWRUKPoVYLjFJs",
  "key14": "2vHxfcPLqGbQo8sf5KhwKnU7kFgduXhecZsfYyatJXZMDEmTnq8hL7MwUEmwTTjedB89WVcXrxhCgHsmajaCDf9V",
  "key15": "4r3Y1FxH1rUVJAQ4vmz4PU5ZwRciYtCNg9KJgikfrLNNSorUAcrRdsx5tWrkaMSd2gQaD2E661JqNJeUtiA3NRuG",
  "key16": "4JXxuzBnsLVesbQczbuovSxf4w6hKy9fk9YBayRZ1UmjUanwWENCMQJqcDAAEueRGZePMC8Ys17iworoGgybQzD2",
  "key17": "3DbCpV9SMVpvWFqEk9gMbm3pitjhPzNjfCytjk4D5ppaDAWEs9TVPE8JwAPF3cu6qJ7wp6Q1FKb9xwHFFjJk8tQJ",
  "key18": "W8qj79dQyN26Cke3baEuSH2Fur8mc5mHdiof3FCWmSw45o4JRGmQuLBzreddRoXd4rR3LJpbXNgzXmfdUR4n8Rs",
  "key19": "33pQhs4A9ha5yWUb8nenC4KA8F5XQkvjGGRF945DUF9M6iDKER3zGithtxfMfbSdVJ6PjzrRajzDUB15tqJmW4a",
  "key20": "2Kn5upcbdCRYFcLM9U6W33LEkB3v8w4QbiCKcxGajgrww7DvEfpEPkwg7EhFb4Y7nG88Z8tDP9Xj8M86WfroTFvL",
  "key21": "25QYbiasA784FQrmZQDMNc4Yg7P4hsB937atJxZG4oKcZTLrMQzFWPZEaoJ5wQv4jyUuXBSxK4L4MJ7XyxYAYJnq",
  "key22": "3zfTxVXCWsWoNr8KcbbyuwQ4uTeBKHC71RsaghAJ5fm2ghaFSgnUkpeY6phsJjD5i4w9id4Wyhrqy3fP7kW62y3j",
  "key23": "4qgDotzguEAmSUv2GoAedPDVLcFUKycXDS6AHzbTWcJGXSYVG5cDU9iDjcFKwVihRUeyeyGqSdVsLP3RLDoueSdL",
  "key24": "5QFmACZtSJAVe5o8Z1m5VMCjcgmfHPs7G779a9nEJizmsErmyxdtmqU7PV2gjf8XFiSMyrMvJzckYcFogyaC69YC",
  "key25": "5kuUR6xMPZrQmKUgjkVjAMfgqWg34TNomUnKQRpgxXJw1qi3ZPGQyytTpWRNdoG2uJiBK155X2Zn96GGuAN2ivfi",
  "key26": "3MgY8ojUJYiHo2HZyRZyJLA4iJwy1WxM9Fb5K4g7Jv9ntcJEXoXFCFLsa9XXNUwoJWopSkvamuwoyzuVi7JLdXjC",
  "key27": "5CUgz2jfc8La34iywQcWtgLpYk7VvVFsMRoDAgx19WP9eZd1SCjisid42vf763NNGTMrJuiMuSLkSJQeQNcmNur3",
  "key28": "dy4f9pB3aRDoGdLQZ5LpZX5zntujYXmirHhioNAYXHFs2YyYBszRAmegxDCEd2M1rqRirL3HgnCXhxp9oygFkQh"
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
