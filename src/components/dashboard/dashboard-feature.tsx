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
    "3aPaWS1BvUtMLJuMufHJMtR7Sv1e1YPkYtkjW9ETZxNpqfVEEaLJk2CXcCqtrGsH3HLGS9xFZ2pM5V42R5L9Bxg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p5YMpNoj2LAW8MLdwq2M7yFcubyxtR4wrzHNoGRiLtXy7o2BJFpPntKbBX3ySU76Jw4F3BmgGjJfYUZvATnm1sF",
  "key1": "vYAjDVvb6yE6PN9ye9unUqPYBxe1rbT633vFiuZDCyRWBMRMe5Jd5ja2UDg4GKdZisjHsqGGvBpytYg4pn7Px9u",
  "key2": "5AfgzENG2fgPZ9XT6DsxSgHF2JrsJ34rQrxJcjMAdfPcmLmMd9BrxgifF446G1VC1JV7WbB1sPqEhJbPdCEG4nCe",
  "key3": "25XLcsyDkaATDyLgmpdSCSVWpYhSwgkdMuEXafyKffTz5SrXVB1XpnERB6hW8fht8zyKeKrfgiKfFYVFmKqo1qdG",
  "key4": "3DPmBrHHMqEZgRrJfDrVoWLBZ3Ts3HMZcqPsvcf8uBuVLBVSMoUULydggHAKhZ3R7xAE6PoWoMXmnbt7Y6byEcCw",
  "key5": "2RZ8XQhdWABptUAMNAzXf82EcpxdVBX2RUJo9UNQckkEDL4qv1wex1yTa6HWgPnQyCoBopxXYZdX63Kku9pdYBwX",
  "key6": "4LDnKrNAZjn2o72VFdirMTUCKJYVvAyV1jRyjzrG6drJokAsbtCKxJXdjdcCk5zoMjZN5vRNsoJ91u7uxJiGNng6",
  "key7": "59FgfJoyHQW8BgLLKCfYp2eUvMWDFjEcVDdcnJruNh6g3rmBrGJ5MwFnoK6UBdG1UGpDTjrx2f6WUtqcuwNEvjtd",
  "key8": "5SGExyoFjoY6HknBJYmpuZDXNZhUy2EHJ94gdSsgDnrk2aSf8fAPWM556Gpe9CYdW3LNAnA7ZGWgx7TYj165jSAf",
  "key9": "3uNmp4FDJHvwvj4mSuyKSXkD4eDakxXcTXzPZfz4LhbsWxhCjFYHLjZddnwp6ttorpqrouVY8KGQi4GuMzj3NmMt",
  "key10": "4dTvriwbgp3ikiDMAyQJJPe9BYPzi5cS6932MA2w49sYa3HdZB7pAMgSQUtMP65p5H4VpWqJtGi9QnCYfXs1TsZg",
  "key11": "2HjVdcegKCH5iWYqNDRjD5x9KbTuC1Tx796vMLb25atWDgWftuAqad4BMSn84mSZXqQ8HigrWZN24ErvFrnyQw6E",
  "key12": "ut9HcDdD4p1HSoTawf35rLxJBN7umcrjkdpdTUW8tHyXcTMnqRNVAi3dpS3NkrxgaxJpnoKXeetGS5x9UUHRixk",
  "key13": "5xtXGfkciwwhgPvQ3AbLrrDLVUjtmSWpSNzTFoz8WXmYNj1f83Pwe4Hye4os8T52ruCopuhzYnxzBHdATxsBE5n7",
  "key14": "4topkm9WTLo1n7u92T4Aqvj825yivKF5LaYbcSesgGRfS43sdo4sDgCi6m8MBtk4wECUu1uJrQCMtyZdhmvGVsao",
  "key15": "UrrhejsNmj3iRj4b6BT3sBxAKEZhUDwSgyVN1ekhGTxRfpTddrM9cYpfwqjkdiX3gZ9TpeFYrYtt9gPvtuaXiWq",
  "key16": "ZoxtydFEchx5Fq79TfzG8yLfgGFNJEv8p1Z76GRhDQhG2W3XP9urvuQfXfYx6HC114oU9c3Fe7CM9KXC46L2zNY",
  "key17": "3nGk74QUnPhydQJweFdC4cq5Uen14es1cEthFFSt3MP1jJApsGCC8igf49YmvLWZDTLUR2HhFcotirwS568EQ5Lc",
  "key18": "3HYskwDWhwuqJhTF25XneHggCQSQVDaGVMKsam3EjNkE62dmY96GK6hTr6idGX3GS8fZzbK1APoHDdCeuKmStdRN",
  "key19": "3PCaMnrCgPxfZ7TBAyv89nvBywC7AMnUkK6spnH5BWVyggG8oFWEd3t72iqBHhzUYyUQMyPmKReNWjLUV7fPWG5m",
  "key20": "5cQfX7X55QHz34JP2ZGcR7Ahi9eb2uC1KfBYqtsUkfoGnpfjDr17jqd51eJYqevkziCUWcQXRfaDMDoUrGNmQMpo",
  "key21": "5DPBhYUnU2vbR6KudHBe8EyhtK9JVkQcWmTQptNzHkGd1VJJXjNhcmpdxhJuUbcbVRsEQ5a7SByf6mCqHLR5MNdS",
  "key22": "4vx5bkzaJC8tASB9T8JF8GNnFnJv1XKE7LGEKWXPx5hj5qHDxin1vcXD5sWGfAeFnxyBRRZRk1dtKjV6DNBTetFx",
  "key23": "2Ds4MoqedKhPb4CajfosFurbbeK2uh5SjBS76C17PEB7j1n9CzM4viN2G9VNWJYnD6EHVjjqDzDEhgrK4nGWwVny",
  "key24": "2adPg8wMuPmcFKUxbuTsPup5M2awJxMDwiqWWWffu1aweCCjkVFxgoEWXwWbDAgEh3fYHfqf9WT1btAmGNDbG1F2",
  "key25": "5BKV7LTQTEoQMz7cf38yTf34tdZDPu8Ztr7bwhw7z2XVAr8enJeSbQTXJ1Yx6Y1ZZR9NehFKFvycAGPDtcAK6wKL",
  "key26": "2tFde1KnT1FcssTQ75QY4RnhRmma8Y6zZW34y5YofyQnsS6bAJJWbJ4Jsdgv5h9UgLTdi64FMKKoAmPvjRptiSz1",
  "key27": "2BncznfKw1MnBoKwEc5NFdKBEXKz5qENAFaaA7V61r3BXYWwqkBP5sUZmKwMy8LWdkzcZgYhoUkMZnC5LFmcmCik",
  "key28": "42aJ4tqo7i7crRgEKfPD3JaUSRbfsMKK7Q3wiDy8dExpZGxnVSQdVMKhgUiepKN7fnNg1LHFcwJxD26LDUdzgfZM",
  "key29": "2JgtwbJvC49yvX3uAXRmUU6gYGKxqrnYG3gC2ctQkz6DiKygz3aoBRHoNBsdwd3DcmuHsNm3Q7M6BmPgaqb1JJ5R",
  "key30": "W1ag1sRYiFM8k3b1CSEqHNcypiCbFLzXZUV34b2eYAtsrWtNof1zqGbPBM9sZkTqt5G5fQESwssgtQ7WE8RkRcY",
  "key31": "4XLNYjTRZeHrTWt5YXTyhrRdjqWo2eP1cHDLcD32wfvfScz1SsbawL6RcoXqxZgcPJJZhsjzXjXqnn3SpAdaQYQz",
  "key32": "3AbSBCT1YkiqGUVzGxg4crvLZLQRLCSUCouakEfNKeo9kpntar8qQFU9YoiniQzCMUCeeQvWrUxSHeTRCksm3EXW",
  "key33": "3YmtS1FF3Np3gXkRFgPzmwnUzBM8aGcw1SDPSrVaAkkBE2MxSpQKc8p2UmiNi1aNgDebVNJRdHSpCHu1qD5nG1hz",
  "key34": "3MMCyh5rZ6vQCz3gaLh9vaS4NSwMEaZzy2XdBh569MZ23jFFtNWdEnA3a5v8nNSGxfErNW8gnRwuwFzdnGGrYEtk",
  "key35": "34wcCfA1G5z1heaKNpRQiN3up7bHCAnHnk5PpK1ng2dWCaSMAnSjrupgMauu4MF8FhcVfXwLc3iTTEz2CyZvqEQ5",
  "key36": "XZ1Z6H7ycbxZMsCHsWbjGJjDvw9zBHagwTSTumaNrwefERgRQ45BRFh9ukcoon6YGZ6gF2r9vPBuCXgtcbgd6Gp",
  "key37": "5c6f3yXDsm2fi1HSKX87c5tFPy3AK2yDmP55bUchU72EoTFHyXRJdL44fT1YKnCXgFiH9XegTkaKWcFwsMZQ1USw",
  "key38": "61uSQ7VqUcG4ciQB51XYXRKsguXGUm5bHZYuswauPU4QhsfKjiS4YMaRKwBSbDbmJfebAXbodXL3Ntqb85zPmRs8",
  "key39": "63hPwqJcowiBQZvqXUAzrRQUvS9WAVAjJKEzfHtH9PvVMaYtsjosG8XwnKEU3fCsSdk3gPiRLT9jDhnxFtYKbSF8",
  "key40": "31cgnzSE4Ta1tKyp4tGY8JbQiRSMcqccdEQWtCu7MbZKAwuQnp5aJmLAWYYBRAXLcpR8nZZm5ksWKEMo5Fk6dsrF",
  "key41": "LKaBcZ4VQPNa2K462jVJuzdsxuvgaYXNGjAHoF5m4iEBtQZFMH17TXBnQ2wrcA8NSjvucJYegyzTSLjjvHVNs9Q",
  "key42": "5jdfihasSdBFqZ21NBV6fEQXHgxHz7r2bCNSPKEn8PoBPq2aRYmwBwTJNtu8JK5JcTpaZnisQVyd1p6cqxA7wy1Z",
  "key43": "27Pn4Xq4xc3Dv38GrRvpfCLFnUtZiDaus8nRVm7L6rpPVZy8fJ52Txsz3AMtZJynLqupGGmkuLNGMdi6HLpJU9eX",
  "key44": "3NayDBjU5YYfsfef1CSA84Ut18PegfmLnY3m9ibrTqoG67j5yfhrvP7L87T9Gtg8Gxg7UzpV9eKerYEQytpxpa7"
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
