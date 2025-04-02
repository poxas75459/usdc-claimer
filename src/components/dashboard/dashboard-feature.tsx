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
    "2HrpSD9wekiRXDwuj2d62XoKJd9QGwuXxpJsgaHGnDr2eNfFJkd6bUzawfbYSAxmo4G3UeE4opFLbd9ADiCMpdEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvbNfbDM4hLUSgrWRpxfw5GVwwemgoRA55TtPvVLDQ6ppWxNDPs4DRGCeexgU54uHmcpPYjSk1qWeCnzeTXaGmx",
  "key1": "3NxY7H2yikEjfv1DvcPdBxq7xWiS8WFK4SxnDwpTN8zGcTpckBm4s84dmqqS2Tb2UspSP4N3NScVMRbY2V391sSw",
  "key2": "3KfL1avqbgd6Q4vu1qSNcaYk9sdSYLKM25q5m5ZqT5XaRGTxTErFpMu8fvU59xQ4NKeCDfK1mRCLuEfSukTyzGd7",
  "key3": "T3GxDQ97JxMWRs6QVZpsH6pSon4owgRjiMfFk4ZanikCUMvGwAGFPc1uQqcsA8R2rLP1fok7e2y19r9nVVUAdMG",
  "key4": "2jW7aEUrDCK4odcFSphaHjsPFHkbcpUzsLz1BawCa9bmmz29GjLKKxBHfa1B1U1h1qn8wj27LsKJPEkFTRrUof1a",
  "key5": "2gZ3PWfh7C3w4gt9kBPs17wZhWEMwzhGyLkQV1huPDTCygRhEMvNfQLkxzuBDoq8NbSXaZbAJbdn5ocd4ZrcLuvu",
  "key6": "4iT94SfJebRfibeCKQps8waz6DcVLe5ZL5m3hoJ879mDaSdfkS5Bk1rx52CzSiFa3GpzY5bh2VHx426UwQhz35Xi",
  "key7": "4mZ6WZTyKLhvc6Fpf8WLk98swc4Zefub4DBgMACk7XKXHXtTPduV5qTCEnZnYddbB5Hxst91kCeBDDrAziznnXUU",
  "key8": "2tgMUss4HBkayTuPCDu8qhKcgj28xuSd4scfF2Sg488SrXu1XCYUagMB3GiuEYUZgUTiQJDe2U8ZRQKDuaDFVXth",
  "key9": "4pwk7LXRo6PoRAWYtctQSK5zumJeEsmSCWAybUZtzqa53sSgzvujQZWCspBWZHf5bqM7GkknzQUFZyvEDo9ibFog",
  "key10": "3Vg8MRqTx727PCGbXruVaJnfthHS42ywxZBhsEFag9aV4zy8PR8Eo6DoFXz92UpoSdxgA3Nb4KrqUfrJcrvVFF2a",
  "key11": "5HTbxpEqf1dUt5bKjnmgYvEZEnJhrbFPYAb5dyLBDhHLvAzbt953TgtAw2v4ABSovxCAwGsuV7HVRSQJfvFBLAim",
  "key12": "5Qy5mkoV7Ms4f2d5jskmvhJpC9Simh5Xw4mUXo9fduupQFpP2PWdAxkBxKZ2ggqQcaYjyA1gBhxLgzTGWbBn4vpF",
  "key13": "4zoAsK2gB84qHyu5NcMwhQSqKFNwKkVKcGM7rEizPTG7GkeHu37WAafifbn8muoTaQs6tBF5himukRRwEnHT3EvX",
  "key14": "5Dd1FdfXshTTGmGiWbgLtaLNHHTLM9pCJNn2Y2BjJyf1LbwoMvuBdptR9iuEDQpyakggWY45kbuanrd96UK4sWsw",
  "key15": "5kPL4qTLaVmnNZEyLuXVwbJbgSa7KUe6GpabxZfz4TKYSYXNVKoJjVbju2gonJTxs2icbWCC321DXVDcuQBc5fVw",
  "key16": "5yCo1HrAzsWbsR6Yna3hkzuJQKsZ6z5ESxjDaKL9NvEnh63jTtDFQxGiHjD3K2JhjH2MLKpTxCgQGzQtYrropo4m",
  "key17": "4kk13Xp4CHEY6Ps41TquZsFNGh8Sa7Efn3iFskQAQ6hB7Pdicoi9c4EmagUmZHUMjAFjt97GTdbtcBaijsQvue5B",
  "key18": "5mRa2RCTPg2r8Mjaq7PVscYstFHxdVsWnNuTfuyKKSq57s87MrF7iKyRPyCxSGHmWdckyxBPSLTrsvTpA38A1ufL",
  "key19": "4VptaVdixnMVPEG2rYXJS45rxkRRjD57V5ErWtohKgJrxvJNTDafgwiLKfceMbR5T9PPpfDRY5cPqnfMuRwtR1jn",
  "key20": "51NijpLkcrRaCHihp5FGnpzBt8g4vAhdYcGjbPrsx3kq1um61TNYNHuuprxpqXbvY8wAqT2hLEtcDZuvrx7bhdYz",
  "key21": "2wbyjorPhoSjmEP9ziG23ks2XbKs1qjmZz97K24euVpppgG57rXv5fat6cGzV67J3qGXdrRzi1BoSihoZf2rHhEL",
  "key22": "5JL2yWXqpgEb7tzwy9QsjeUuEDQ51kNsQrC2zsARPtHr2myduYcR6ZSfXwW4WnkgUiNz8HxoX46EaS277ZuW47U3",
  "key23": "4BK2yrhRTi5FJYE6heCAFPddvnyDcKTRPCZ3GBjY5Ysp63kxQvVRmBuH4eUvZvZj5EHB7dCfhvf72mmfBs9a1w3",
  "key24": "2c3Ja3Ggc2JjthcWzrnefmiwhXoPJ1RtFNPk6XeJHC4eWek4rQhRDK5ckDSvAiyEETTxTQDJ6jcM3ae9RzquMNTc",
  "key25": "4zHXf8FiY8FEwvBtS4YVcUbW1tm6MrsSQLsZhx9srojLFd1HQuPXKBNBzzHvZ9tE6n7VUpYEBhqdUcz7XTxK1Wb",
  "key26": "37GagZixSq4xLWK5fV9KqWy4vziSEXoiigBTKZRHS6eb7GuPfHfRpahyPYWeWS3cdPPAquzDnxUFx7cxzKwMvU1L",
  "key27": "DZxnUfE31vZPvE8XaZFXvq8VbhNeMz757y4yg6KjhiNdLStzNW5vaUkaDiAeYaHf8NgobW21ia3hTryw5yy4uFv",
  "key28": "49AgMqYr95LosJj6JuwZrkxgJ8xACvMZ6vCWSf1GNYEexqdBPZJjG39Dm2rgg3aNdA7zWp9R8TfkspZ789uwn8Fp",
  "key29": "5ZCK1RxeRDBYQqmRPScrDgSLrhBDubeTm9VrGSxnYhSGqZc1wofhJLRCihFWu2n6ZPGjFc15Dr3PUEs2zNesMHpG",
  "key30": "5wD9sPMdBEcS8AteFH8JRvpFTTRcGML5qrVxc2FdretfgxzdgS3DeZHdRkE6Smem7roSL4pEP8kDAGjdkWyku77G",
  "key31": "5Z6TpAE6aBfAkXPqw9Zh8CordBiz5adgjZA6nhtHoxVZjCv81qzZzCj9foF57J9PTn6rqH22Ru2Jh2es55n2pW4U",
  "key32": "5YLWf2XjGYa7LvRJv8dxDt8pKfjWowiTYJocgSbQKxdab1sFNunEWLXGWLu1NxyR1W3vJWLY5MRhif3k6vAuwPG1",
  "key33": "41dECHUcZh79HGBXvMGL1yRLtDRs7HiaDE1UW2K9Xt1oXNYZkzVgPwx5CgcyJc6gXcL5A5gaHPL1BrYCcTX4uxaN"
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
