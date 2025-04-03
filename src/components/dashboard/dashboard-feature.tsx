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
    "3MmhnwcH8NfSUFkeNLCRSdA944GuS419rv2FBJt3rX1vpjm3Trt8cypgv15KiAdETC1K1mvecCXNN6C5Nbxu4gst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dSTaWyn6h1vPZMpFpPqVzN3KJ9uqze2vnQd7nFx6yG9E6ZK4MCSY4oNBfTPmY1kZQs9s7hM978u3dQEDXKdtwBm",
  "key1": "5FJXHsefEF8vE8HiKdYt9TZ42dQxJuYNdBRUk5j1NBbYCoRmVppfH7FEidchAqP61y41z7w2nAm3dVhRSC39Hrwz",
  "key2": "5YzT3Th9D1PQfywZevw5XmVL3Sa6K11HfpgJqUY7ech6RTSAm5JCjKvB6w5GjAWwKXsdvNps7QiwPVvqYG6Qyjui",
  "key3": "3DNv2zmBFkXHF54Dk9AJiegjYXjis1jGdnxofCuAj1KHKSMz8fdJuqCMaHy256yqhrVxZaFgU28eVawWjgL4Jp4a",
  "key4": "ZN4P4cecsCfbwP4ust6iADgadbif1A2gfEsJPfu1CGhC16eriJLCUJoa6WdgHFSAttf6haBs8v8V2CV3hLtffJz",
  "key5": "2KghuQY37X67CWMfRrJL7tFzkJfHesswSyKR5rbu5a9SK8tux1tq9DbggX1NL5CCukdhDPRNaZSsuiZkKwW19Wxu",
  "key6": "4Xut2ZGsMC1u9jM9SRtJ9LgVKdKFvhKjQtheoh9jB8j6HmGhBvMZm94nZD5gzqYq8FGRaFc8fFVH92GmZQiFS5Hg",
  "key7": "2up3SRYQMSxGZwMF7rmtRyw3ZHANxgrvkb881u5giECzG3THwNH26XR1VjzVJY1MGQwxPVZqwtMXmUmVvToBNHCh",
  "key8": "bPwKHCWM99ZYD6zywRC8sdModfFojZF6vHKFy9Zs6Lfh2hzBDN75NDmuq14f9yGk21ixwviUWKkrxvEbwqVEzbT",
  "key9": "4mkcBiFUuMbeQ2HH7qAdeNqBEFynJYh9NtaGNURYqBqcavrH3G6oeEzTo3i7xr3NrZxV9XLmZ7RDeXF5EJ5DdtL4",
  "key10": "3mEtN5rP6zN2CCGKUodTjtgMkWkdeENxfhDGHUuKcFhsRjhondQMx9PWabZg7M7cC23PdsCDk1nLxie5bWLtto2C",
  "key11": "8kBfvqYBVMKL28N6gW1GgZCAqnVCCGoBi3cTBa7gFiCUXRRL1tDnw1hcaviAStUuHNmw9zV5CKoseE45uMvdk47",
  "key12": "5Q5Nm51Mx5Gjftd9PodQdy12xTfscnKv4WoYDezi22Hh8RvoKgrdPZYBEvHeMTKabNnhXey6Ex1z3wJYNqp6P8Fz",
  "key13": "5EDLuoJNzSwZZ1pKGZ81XAnf9TcV9inAUwVPRhB7W7T2XDDMYcbprbvZDLxqrotMvbfirhjsfH3wSB5Jx8oTGH5o",
  "key14": "62EnjjUzRA3GUBNwhrUhV6pbV2MiG6eMMZKgEyTawsTgCsPwnTfWMx1wiciU44hnYU6nnFJSrFgWL9DT4UW1S44M",
  "key15": "XLZWbks6GqgwqP5pxvqGH4vdb53xFWDYPykeZs2fdQg8vHCwZGBt5BngJATvB4yQwCvMvjcwnqKMUw4PT5Givsi",
  "key16": "3YjrNgQHNyfdmEYyLA8NuJ92C7LWemkFmiyRhcEz24sU3dF8LySpEZzAogMsyN3xSUEr9h1k7VkM1DmruABPpvCo",
  "key17": "2jJxgkoKWqc1h1NHjN4qpzXFkw54NW7y3LR3WbmBqLfwiBbn4TnegMFuPRCaWJBGwtxzN78AwRoAdorkuVTNuiHY",
  "key18": "3ytFnH13wpdZ1n4gSvaADcwozuEPFQBcfeyHv1UuimprFEq4dX6WM9C9rJCQedAQ7e4HrmSBkJkqhqkYMswHVD7d",
  "key19": "wZQyACDEPSDBxY42ot37WMHzkLFWj1jcLSmepxVgNRBSMx1F7vT8vBtA1ts17HAW2JooeUowkK4MTQPkGVxXtk5",
  "key20": "xVK5EocurE2SE1x9yMQ695BYBvvrYnsKt2w7qZNjQpXesoR9WXy2pUmgL1DGg6qNNboRdfpcyn7y3XCnxRFqBKa",
  "key21": "5rwcxxByK13MnhE6HoxCcm5fBydLuhPo2dtJA57gyz5JF38Dt1VtmmVGpc6eyrbZT7Y8xfpKcBAq7RboAPxc7KGa",
  "key22": "2WmQe6aPMY8etcFpvSqVbw5CydB4g6LScUugDFjfMbqBHsYYodjaYNcBdp41L6FaiV6B4ZC9gHHzKGooPZcinLfj",
  "key23": "2JCCCphH3r9F1LPHXDXDXyKaXiuG6mG7SKfi7voy6Say9MLCByKBa8Xqvb7KkYSRYs1vyb4hdQpEr7jSQE9Ucqa9",
  "key24": "3fCdsMBrjV1SJutDmRq4TsUtFFqc8x6JgkaoYnteEVJ2umK52BDoFH48WY7fWqNBVGKgPQGUBX8xoFz3TA71YmHJ",
  "key25": "4rfdQoE13D1krNMc6HLH222CdhuxjevwFESWWvMUEViXqgkiYJ1qGg1i1Eb4oDfKPLxFpsMRFW7Qy9hk8MPwyCH6"
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
