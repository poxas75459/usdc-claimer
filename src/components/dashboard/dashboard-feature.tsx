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
    "4fbhWUuGWyzSBb7HVJ9XU36taCN7TtpxCUf3LYSfgkXHvWiPHmVzUrQ4JDPxpe4nGY2cArW364W95Z2ei45j4BfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41otWfWHcPuttcrWo23Qp1jKANWF1ehH9RMrLymJAG82a2WDsEw6gRK8CjFdQSEzf1BWJfbiXpgRwh7EtetGtV54",
  "key1": "2EZTDHCo7LBnjmRk1VnGa8pwrkuzgYjzv2ubdK1ujZihg9AvMW16nKzZh4ehhVBF8B5hNdJkU3WjZ3DAiozr24xe",
  "key2": "4BAYojbduM55c28X7kFgv4oy6Es3CBSp6mYsqKXcn3o1LxnqLyBZVdxGxgzoZrdoCobvmaXoQAxVSCQVqBBbp9Ro",
  "key3": "4QgkQuGD8cZ7qvs5gwRY1htRzot9PjfSXmE6HtbakK3aJspsRRJqbM1eQuosjfTdRp9mLVafXpbmyxHXxqHM9BQr",
  "key4": "3YsXPNX6qpnodRxp87dXZo1XvgK9KrAPRyGvYkkheUEyzGZnUYx4YhRv5AxNwBYmVLPJcvLpowCzvBnVow3W2ujj",
  "key5": "2mfAYJ88eiyJPJsLHZGczL82nCesgqfbi9axsJ5Qt9y99Pne39rHQWDpMKzkU8zMXGf3CEpxWoxXh4Fr7f2zT9mK",
  "key6": "5XFwwbJLMzmHmgpc4hL7oDWSXkFCubeYXjt7U83Ky7psfwkYYYD4DXt58SjFeHDL32WSzF7YtU1g2jruvT3FV27r",
  "key7": "cF5ZP7MCTehxaGFrggGqfbxNdWB2LHSCo5p8qR5cpMFg4iUV5qPXYNECjy4Ddzq9e7SQKALYyFwH9pxLc22WvWm",
  "key8": "5zFzrZMmbHdHkeT8ZSz1e1UoiwMh63vUcr5ZkDFSxLiLeV5vUVibpxuuLcXMExU3jdWJHKsGMeRHXom7UZgzUmk9",
  "key9": "2SkmJvzi8JMoUXMFcUyLSkDF6vtEySzAMdkyxJkNsZvxeZB4QM2yAXUDghdjSQqmkfLzUdrRvwrWjArWBa1p12qy",
  "key10": "3q8W6j97EkUBNnUXCjShEtTfVd5E6jpTNwtqF8gNT6D9odj5WuCExCJvhugUPR27hKLxNPNVmSQSnP4Yhwu7v7nY",
  "key11": "voGaZib2ToPPwbFiLRAAgA5LYjrnC7FJN2W4tDSPQdqAFfSFws8L5mR8Z2vFYSEV1vdFDhh8vEKVgZFMYqDcnv9",
  "key12": "5Tix3ptZqm5bArrZZAViuHuWPZNF16UsxfHPPqbMazP9YNos2CNCRBepfKsTTxiZtSWmkeHt7g992kKn29CUWgo9",
  "key13": "u34mJnGJSJj9YPnFTJu8tpuYT9V87ESS6BYAQuyn4BaVLKAxpFWs5oC6TnsGXxAADuHdJz6aWR2VxUrryASyNJr",
  "key14": "5VSfSJ2J4JiZipcqAUix9Lovhyrc5hj9jaCA9NPrFDjehF9ijS4cB1QwQFMf1gxGE6d6hN2wnRhXvuGN6mY5V7Sd",
  "key15": "2qFNc8kuoEZ23Ww7xN6y3xsWhX2966YSzprKtxfdFxasENPVUzYnqriq6q1b4Bh4v8EDC4n5HGWFqmSNq9JBGrSu",
  "key16": "2qkz5eR9c94fnktC4J9SohjPAXzJSzdqbRurqahq5WyaP6z33heVgLRWERBHcEZZvoHfmqXFjf2k1ivQ5yEPXomx",
  "key17": "4zGvWNCze6C5GWzPqWSTimzPjuTeWgwFgEXR2AhprW5MMXbLrv5F8EGEkFH7imYAzGGW46uhKDUjXrwZDn1nWTSg",
  "key18": "3MQYSf64RSpZnMRASdLiQSgZT5UMcGKdKATTvSPNqR8Ud2cK36fmsXuqaiokvvwb4SShYpVaRWGmZNph5YgdoFV",
  "key19": "3a9JpQKaxE96UwokKanShgpXbEdxeKJCCtPa2T3KATeysWxmDsc1oXkDHZjQF3oo4d8Gj5t711pHKkavdnPx1t7i",
  "key20": "48tPL8xYoSV4YzaSkZkgYa7wQFeZoLWMybP74QBvgj878987fCZzeF3Yqw71799j1HuXe9BP8oGKxDXoLvmSJc9z",
  "key21": "2A561F887VTP6oDmbK94UjYe5LX7FhDxhUshK5saFt8JWppYCfaLcXPgJ6H79M1YQqMJpVDQujFGcae1N6ssCTG5",
  "key22": "47gaNXRKjP3ZugYWzHAo7Kvph91RtMrM64ZMsHjqbeqstHZT2wF5uUbTvniusCMA6gQKpfhj5myUx4cpXJz4PQDV",
  "key23": "3BCVjwDSjQG3pMqq1WviA5s9MV8FSPPZGR94JGAkECnj8sYukCJ5TrP4ZQTjuiC4Am11v3L482uz58qGdny91hXu",
  "key24": "5dqvm48LcKQRKncVcP1SZuWhGeJxbJqnWmQ7nVBmFai7NnH5oy7qEceGC6j5WVpVkvrabTazERt6gFgNLrXMdDiv",
  "key25": "3MavDJADvtNk8qfoWDUHTWyipJ6ZsEMLv9WQL9qBg8zPdck2vv7n3TDSkM8ZJkWj2kAgnSHtFG27vtoBevgPyRQ8",
  "key26": "38Fn3HHQnvtNYM38Nj1s8GXNQwSgNgZ8miVa52G1KujoKAjJfpgCQRGHQ2u5V8hwZjcZdGyRvFmqpDEWfNj6rcjh",
  "key27": "2UiAgyezy4DYTtxu45JacoZNEk9h8t8k3NCEJTQyxqVNo3x2Rx29pjsgoJELY1DVZmmKBpQkvtpCTQPzLS42uUBv",
  "key28": "5919gJh7SFPd8yTVuVrVGDDddNqaZMu6rP8gCaKPgNGUPU1eMrtqSEge1GDCv3zRVasdMVKbYmCoDSXbPG6XjkHC",
  "key29": "2GAj8awdmCPWcj3s6TBu7F4CCcUdbhZgvsFLE1eG1yjaemAJqEGQcfeQb1KoymoKozsmuuKKUFUup4eTv7vswbXN",
  "key30": "4oywkWmVSFUw8Ecq43jiTW4U9EcE9n8xTUj7LgAQ4UhM6ffH3gFRdiarRJyWa3s8eNJjUA5k5vePAiV2CA1CJ4TF",
  "key31": "4RsWKKUCshXuF8eVAr4bJsTcpHrLhVNRbRtuNeAske83qAACTL6TRGdWGsuioeonMrdoRVcvd9qu3ZNV5FxZ2MTS",
  "key32": "4v4ju2MmK64By6Z9JwbhuAeCEK5hYKSLY6iCkejeS6xvMaYBnUtkMAWrhUVWsw8QVamw7dfJ4VM4b8XLyi8c95gz",
  "key33": "hkXx2uYdyaFHouweiRyUoFRB6aoHmtSoMdS48rUXrkaRw1MsifaTtCPBBvRDa43ecRG9U2qn481AiURf28APgDB"
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
