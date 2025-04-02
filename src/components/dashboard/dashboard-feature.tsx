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
    "38EuMXuVE4R8Aj91mxsDbPYqT3cs7zA9qcwJAb52aXXyPVzspiyxSJG46QkBYyr7KEG5nV1YwVZmhPQP1TnvSQJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCrGCETnu3vdhcP9hrETXG82KrpXc56zZKRN4NW1vn22y9aPPmbYNX9WiasDcmPJAj7Mk5EM2bCURNZwmSvncVz",
  "key1": "eR9jXXCUoaHeJmULRZjDSiqLnBfwog6Y38Rkd93qNGRBaF1TV1cxJz6SjVSJwo7YmFLBBRPMv1s3v5MBoVh5kBa",
  "key2": "5jZ1y7esrCHsuJ2nJCJNWR3whhGLqd6jBffCUQjHJyqzGMnz7fZuPPjiWUdThRrhcu4HNsf6wTrrYkJ9nH5KhjCf",
  "key3": "2X21YLrNBaS4sZVRDpdZT8xeStfxTJN7BbUwFrZgX3WhBdipuhhW9F4RRF5ZGKV2bheKhsepMjm8sh8TEQGmxkuB",
  "key4": "34wpX9Gc6BQGTKUwkZLcGuWrikcig6Am7oKpMe9nLSGfbrADZxcWZaeNVBKZNTbnZnAQ2vTdRF8Dt7NQo88Qite",
  "key5": "5K1ratpcK9mRvtD5KaPsarArBTN8qR6pDY8Xic9yT632vmJ7Wz5bHUNrLCu6h54nEUXMYWjRx3roDWdmaAXU4CBS",
  "key6": "4nkd9H4rRH6jLabeCVgAxNHCjgzrUdfmhzdnjAKAht3pmxQMUPoJMeEdKGHs9g3KnB3zKTQTcKM7kkDTuTKpAAVU",
  "key7": "2dSmdLtzYXraBgaFkPuGgq3zQnYy2fM6dby4THJMr2GnKU1z24cxG8fqoxdu76HZwxnDhgcxfLLLGk5rbRZ99uHC",
  "key8": "SgJ5MpRrYFm57Lk1Q65gvdKKjWFwFruDg41kw4Na5uCVXmNmiK98jnEzB6yAgXd36UyTGynpzkPNuEWyUAUa5AZ",
  "key9": "52XYGABTstMY9HxyatrpiNzMmZZeLFbniPgd4Ux1iNm6eMod8T1px17YeQGxSc9Hkjd3LjGGPQ9wkgDwaQRFdGCi",
  "key10": "5WZaGqYkbKDyU2tVByCFTP49KNYce5fLUq3uv3UEZjHmtCNaNRp81SMuFRcNA2cRgeQtiooWCzaTrURE7mDQX6X3",
  "key11": "5XeAyMX41g9wNVJkqeb19HTCLKbwF7XQgrdzDysPsCrgFTvmMNHZhSumT5DgGeqoyWzSGtj71b3FHAUAnD36X9Qo",
  "key12": "tZHNJ4FpnJrKwTfxpy6s1Qon7JqfnxBL2S1Ty4mNCRQiTj2GKuPczDd3cSzsFaXT4WrCjmHrbPQJFZhraxS4yKS",
  "key13": "4zMxusLEuwBPsabTrLvMJoxNCcpvu57sCq7oQA3Th558tR6wtJx4PLU5h1HZeRWeAMTg8uvVq2LqAgbkPKVxTbTE",
  "key14": "VZQ9txzadNfnQYQ7cxhX8ZUCcvGxFeBQrpiNXeJHMRgjHpZVUd9NL326L6iEXpHEXc9Jyq3T9uQpNK1ZQUd3WX1",
  "key15": "1LBEAnk1PW3EVricf6fuEseEPNE2Py7bCc4CxoSU5P9uNeBVnmhusomm1F2TgEAg79BdyeutiJByTdYdboXnVx4",
  "key16": "ucZRiKc3EGd5BBGgMtjRHYWQaB3pZj3kHRR4fE7rHGpUdMxpDzG13cK8FzGAX3GN5T8N6P1z7DLWMoCDioBKAot",
  "key17": "5vqQtH1NC2yn9RAsQByM4CwjsuiGRCerycyG3UwpK3gbbkXFsqvcJWsH7ybBFCBeEDMJL4wp8gy8PefYpTaoJ2dR",
  "key18": "46Tn1qTczwjGPTkQt87w9bLB3r9AeY7Wh6qkkhErRZBEJFuk3pXAkmqNLcdAp7Hb7ZPVP3VUGF34WoSw8RFAmGTo",
  "key19": "3CMWraS1hZVcRimzCqJGNfLh3h3bUXfENkCKDq74QTHytw34hA72e8FjDX2GUkrgG6ibumhKWKh9S26YtdsbUavx",
  "key20": "3k8eeAgAtugwqRaebRX83DfCFn8ZxbjU5VoDRLUxt6GgZckRfRiWndkckSr96QpBCJBPV1cyFj6R3bd1PUPnwf81",
  "key21": "4crkc1EWefmr69tFJTCAXBi4Tyg979sZDba8JCMBPvPWFgjpcrMyVkbfXvEEmVn7TjJb5h8mgvvs9n5xup5DNA4X",
  "key22": "jpcHJhLW6NC9JkinefEnCjPuNYGMndZCS1LtiBYR9SMMU3m2z8diY51QFWPYL9Qnt5XBiHs2tKdd4KRyZAHKAbH",
  "key23": "4bZXr5F26EAQ7mGe5q8oR8cTnSkpwspgvZCsL9tGkVXEHtux2vHpXAViaUacagAACbZatdbmvj8hUmu2w4jrD242",
  "key24": "2gdp51tkYJEpFgcTmxW2GWRHL5vbCPMG2HHSemASzziSFFNNF6bXeAgGmN7gKm2swzRJXBT8JMUxZCbofAfWTGqn",
  "key25": "5KKEb6uih8JHmbwzfFoXUpbiP9gGFqhuviBSxT25Nx1Q1FX8sd2N9HhYhTwtwQRChX7KRvgLXgnzunPq9YwV6Rsf"
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
