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
    "5RRc391sgaMCrvy3zG6Ukp8Gc9st23sKbBkNCb4NJHxHd4Z2Hmy8DXkBdXS4FXwftfV6ZE4Bn2d5Q7rHVUarXaLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rmz1ZuFm5zmmGF5KEWLVa9TaabgWBcQyut7PvCAUfM3x8YesgP18z5jLy7xtrsXqpvgMx8KBb9cGKraFDmyXxja",
  "key1": "XDU9ZmBS2bSF3KgRNBueTJMTcFQnmSPs8EY3s4tkLotac83FqFg2Uijg6UsrtUdFPKFXsmo6muQcpeo6zBExDGF",
  "key2": "3DmgodgRkxFNptxQyFCEe5mTjRjbvfz6qxs4WVgSxk69y8ukN89dRSovDJzrCaZAgxiHs7b7tVK4HcdwcmGFH57X",
  "key3": "4MbnNW4Jmt6qjheU6aLHUq3UwM3hN9HfUSSEujPsiBKFShEDxWnZrMzdQxa46f5jt9UEHGSa73jUnkeRSYiVhH7F",
  "key4": "5mzYqQSRY47Bgi38MuvX5KfBtR1a3dKUHTD5ny8Fy5bQwgMTKcC46U9N4SKuBZavxQVDmfmB93ePBefY2qcBpSDa",
  "key5": "3o5YyzZVd66PEcpMzRG8Zp7YdkhRDV4yXDScFUPbDa88KFP49ToGBT6ydPWp5p3WbVyUH4NcpJJYyuu4hvvGtz1m",
  "key6": "5vfELFY9sX9rMzTffDAD1yLJgYUHW6pYnqK2aQCR5ZbamYdxUpPNcVYThShdnCAuQfUY2oj3oCCDWeivBxS8Sgv6",
  "key7": "3MrNVEv2dMpYTysf35cZ5XenxdRZH1N6C3rUJ8XLP4ZJMwBLbvuh5MQP9MmtZfsWy2KgWy46um8wDG2fieGfj1Wh",
  "key8": "PxGTR8u5HqVrYmKNSG1SbEsJbjawuLD5tsvrBHW3EoYuavHZYSKfPPWCGb1gBD8EJY26nqxN5nRyac5UGZr63c5",
  "key9": "5ki2uZBiTqJQ1L46wa2qhUdNN5yJ4deMnpgAh8EX2fdYQhbdAUUAU3kuBt8jk9bKeT33Lg9XsF3bDF8fcdHm9qmY",
  "key10": "5sGusV9fUNVLdYhuAzL3CJSwDoPieL9RwuPS5zYKHftR5o3Y2RpWNKu9FJv7spQTYMNnkza8QW5cdRQoWPqqcipF",
  "key11": "496rvT3CY5DWWkzhQXZf3w4wr3gYSvwZfnUVNDvkLJX38j5oSgkKzh31vrMG1FMnb1p68wm8WJVkfHzN6KjEMdNE",
  "key12": "2BcRgyaCfKgFayduPJRMRBgQuoUBGs86iUgrqJzPqKsQQnv12AMWRmkRM1aDvY3CDvGPdWTAUACU7xuuMFuqr2wR",
  "key13": "2fuScraTEsvni1DaJWhpo8hmXdnuP3mCjNj5DqsyQkAdkpzyTMwYTzSUqv9WrSLmzQqciUdn7kNG1uz7ZXqtCqBc",
  "key14": "2Y4puuRZv7oGY3F22mtxbBkKkJzFZz8GqRt7e3o1aJWdMaGL77KgtkohY3DFuqhT3rtUSfuCir6gi9h9istaCkch",
  "key15": "3pq4V7pGkfpPEbeZfFJA32jNKr8MBn3zFszfme19dSapFa7R3DT5Uo2YYFrw14FuQyTh1WbiMs2eKokb4pX2bKGp",
  "key16": "4T3tKsGuZfuTPeGDMVoPWWDqVYnZM57f1U5VTqx9TmRyBi6unTffqWFvxvv2UftnSkh5dvXR8mYhw6Vii7h34Rrr",
  "key17": "2NYiCYkK8ySxvLyW761m2BzucStdmnTdzJ1F1sedaf8669GYJ7AVQqJjKL7UZsvK4FXE97x6gYPYvBspXcAepQfG",
  "key18": "2enbd9Ndwfs6e1a57jWSWQRkq57fkua3WwexAYQ8AiVP6yPo5g8QTYaf2oUhT7ZiHmradR1szUL1KJiuFseWEhXg",
  "key19": "3d4YbTToSEJDdjniWQMnQd3QJvNeMJaCugPHsgWf9mjhwTqH1Ln8mv81rDNT1pcx4cvJiURN1D3EDfCfRsf4hiyU",
  "key20": "5RYaKRKoFF635nsQzahvnxCcPxVhPdfrt2gboixmoahiUnnDJyWgXpjet2xnRS1TsH9ifM3gNSzqsFjhEAyxd5vr",
  "key21": "47SBS1NvVyPCX3hi4oWyz88HgaG53nAUq3fHcefdhaanxitS9pieL7VWV9btAgEQD8S9MLY7rmkQkArce4P23Wq3",
  "key22": "5RNPY1eaEdZc5iojZx9yvhqnSJrHfMpYgDGjXhhy5RphWexxfTNsw5g8rNoHQnFrR3Cyy1wq8nn1m6zb9yPf3kru",
  "key23": "EboE7e7XEHJU48WEd1M5phfyrtKCGyJLuwphTayEwXXvXqehEwyfW9PwLxFR8mxPd3qhVm5kTnuEsfPiKZ1QATP",
  "key24": "2b6NNxPCbHbnMkcRDtH3YZZvFCLDTyUohaBTRWRwqEJevfi5Gk1oFKDdGra3CMekHMVXTRCRxtc6G5LgvFWvCqdH",
  "key25": "sWdymT48c2uhJKgxSyvHPdKnnrtcJpVuy1ZhZzYXdrVJr2HARzmtey9YHjYUVd16AWpECVbpjBbYufT9sC3YXSW",
  "key26": "62aEFgsY1hD1iqvmWNqYLG1aJkzEGyzmWwcDQ3Kt8E2DGLJkkW8JomPnuPdRjjStdDUFWh63ugXDEaLb15h8Fc6k"
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
