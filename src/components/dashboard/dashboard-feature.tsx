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
    "2PW3ZDeMPXtpdW1Fx4fsJDiQkAuYayazwHxtYhwRsqt3H67tvdiCim6qDSMMd1aESfQK8sNdq3r4kayTSsVCBFbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jjQcsQyucYVH2deUWbBgGp8sUDVDEakFaz3gLxMu2tBUVcKakrfn1QbSQjYx7ozpf3FRLsezZ24syX1Zyx93FjP",
  "key1": "48fA45DPFwtSuyvUwA2omEuxWhyJGK5txjFXc6AWyakEaefuba515t2xG2eRq6vAVwtXHiFApRZQTNjgtdJkfse2",
  "key2": "3m7efeRHPqoH68gyKyd37SS27VDs1i13umbNfLP4WwXzWRo7kEyC14WPKUo6jy8P2aT4uCQyk6ZremzAqFibf157",
  "key3": "4H6PKyy6uVfUqZ4qtvUYkeyMTwPpqHbFwKMo4Rwozck5SEKCFJjbdBZuXCJSLt9MQgEXqMAL49YzgN7VmDvdHoM2",
  "key4": "MHJ8aBnJ8nKBxH8QmCayucUXbAGRWMzhBCp8mQxywjmCrpgHwZds6wfN7cdwwQSwJffigfLWRRqyLuxvagYf3z3",
  "key5": "2oBKNP9QywYLkrJV26bS7xk4wnwzgvrdUTmzCaq8ZiEsVrbq1B7SNgt6a634CrqvHPyr898tG1K4hF2HKWDSFfEB",
  "key6": "rGgRKihpUJiiytwsi95yfyFzeApNpEy6uYV42htBY8aBRe37EjW1DFTU8ESw3mQFmmFQGviWqvgoLEK8cN3nU8s",
  "key7": "2tSiVxtPk32udCGVvCgg6UNHPStdnhA2rPzu9kG4rkgPiMxsERZFrFnc5bpLSqn8bYppgi8voXhsaBQaACBpKhpR",
  "key8": "3xCXh9kj216yjQrzMiQS7eMhZyLJsS25XEaWGaMLFBQ9qtierBzfnWumLW8mkRy92LMdKnPP9JXKedgKH5a8qUJ6",
  "key9": "4553JNFWEk4Fmao1rD5HfGidjg22dn8hvHywUq597EQXDo4JPPWEQLAaWxe8UVYrMFS6nmXtCgdSSnoSxfU7bGqj",
  "key10": "4R2dkS6Z5nFZieetGLNAetVLFsAWK2uRXWbtjrpKa7De6WpyvbB4GyeTyfe2ndc4pJjCFLCwG69PDEDmzDonU1pU",
  "key11": "5MLMPskj9V4gunN4jeKoWgRBJoWkQ8BRNAT4cVqTEzVx4qapCipxrqZQQMUZML3ADatUygbZnNMikeMPfPthWReY",
  "key12": "57mTqk39KmstR6wM3xMNeNHboGXDQGHH9o6dqjdydUaYa8YcpnVekdb1WcCLWf5zqvRLjXWdz3Adgx4VHyXaku5R",
  "key13": "4EamH6kbcWneK1MPT315Apvys6zfcBSH76uzqCkce8dnzRwLcA1XbPhMEQmAPkir3QRiVMa9wftABf5YsAZ1vPAw",
  "key14": "5c1vhD8MbgBRxBzaJ8bxW1bQF4cG6ZERGb9oqRGftkesTNvzSDQJHKdhYhNCVsC78FDL4K8yGYKBfe5heERcK9qH",
  "key15": "37hJQuX3HDkSJUnesxsdNjXryPka9wekbjpAmoN9r1XnDeeEaEKJursgH9cF4oVnW1TinWtuvdEVAPrQ1th8Ljgw",
  "key16": "2ijDbcxqyFYRTvTpBKtAo7qft2BEK2oGnPF9QF4t1bXxxKsHSHKvLcLMo7RAf7UUDeWQsQco4BvRBNKt31i7WP3R",
  "key17": "4CZXLxA2kB2ZvCimCPiXmsuuiS77HunQ2LhY6rRBPSrovupxccnqmGLXtue6io3Gshmsv5VB6DqoFqboJGwpDcke",
  "key18": "5v8RFzz3v7qkvVZhzjwJHmTyGN65F9kkFEog2vSWeMZmoouJstMpD3gaD19NKhFbuWnRDPUp78L8NhNXoyM8sxYp",
  "key19": "5F6QyZ22TWvL1scPJwYga5rJUaPwKnvqBiB9EPugVZKkDhjq2D4AHbAd8ZXnZ6uuD2V8H4yNwh22bmzTnwvBdF9X",
  "key20": "4dHUQTvLRe9dbudiq6q9Ahff1i2nD339Mh73MunYc4NXrCnsyu5PBD8WX2Q5EAqMKQyudzCAfT7QVG8LEBsPB8fh",
  "key21": "31wvLpN2QWQ4PYSjvz4TNqLsagC4yzDrt4pWBuNz5RmP3BKme1cD2SjcKPgSkUYRCUBXHwK1UtjA75hZ1ZoswwtG",
  "key22": "28Gh75frXUQ64C1FiYwkE7KzzweNi3pPu6WXLKyKjpmMgoU6UqVVzGf9znPRGKGJirVZtnqB5bNM1RZnXeBN8qkJ",
  "key23": "2KVtDG3DinHnzmrQS7XUyw2QjcrCnsRYineixTLXJJ8m5CmAVDQx85T5tX32shKNKNfmtob5nCqbvzHghBhQ2AeX",
  "key24": "29LzziTdBwg4ZphPZGqRNsgTkW4j1NpLdMLKKbNPXSFhJ1o2csYhQd1Uj5RqYa8BTDhCBGtXsnunptyaUxYYyp3W",
  "key25": "qJizS9oaZi6ckkppgcSJqQMnvuGMonmvw1LZwBFDm8PnEMX3hjSC2bGi1RjVLnwg9QEdeiENHy4TVcY8VNPUz7H",
  "key26": "5UinmuZcAuhzBBr4wHyPt6BNAwMghPAEQyLnwzDL3kA7JiHZkNYdKcFP2yBLWuSCPrFrVTSFNDevqo8HpzwNySaj",
  "key27": "3xz2tXfunzJtgR9UQAowxKYfrpPMS2F9VEq6XNHrC7URHFU1JJwVQ4BxKUjSckRTPDocQSo5YciyUZZo9CLXncB9",
  "key28": "3aWZB2JsJpFR1fB6yzXgetuh5nFpSodj3jHJavFRMYS2La7sEs7FxNr7vwKNYCgQRL7Ke5VU4RAtaGPYkyN8GmXQ",
  "key29": "4pkkPi4vSA1uYqaqQS2XnywghmuYF8fau95KLJzSnvBJDHnz5BSqBuFw6AFjYZFye7KhVmgjuxvfF4rsyYrndGfN",
  "key30": "5EykFq4itAo2WHDwJrnzFhHiJeDDM5iNAUG6iKATR7BR7obzWn3pzUoJ5qRBej3mhJz9Dk3SSm9EGpW4vrFi7wtd",
  "key31": "4vLvbMU3jpNm3BcyAkF7popNQ4HHtB1dRJFDPJw84LUfsy5TuFzevtPAtzPXWKiNC9kGuUJkSDsj2dfMWhFH5FRc",
  "key32": "2dYSCDouzg3F88RhUKusYgjQFPeoGA68hEDZoTgTvCbqpw3HCQ1d4UherissjhDSd2Q6uBCQ5nz6wCCe9aiGS1hE",
  "key33": "3JABN1iLScQ98EMBsU74oTU9sJkkdwJdRMJqSGpVc4524kqK89knKWWbtfTYnpWyXCujz1H9x6B2HPBpGiXuGaHW",
  "key34": "2S5D5sTFoWLqAeQhFuqd1U2ESMdyLXAcf8xWiEayQu76pdJMr8iJEWyxGYo3CqWKSUat8wbgEco2GEjtoRdn9UXd",
  "key35": "4eHGPGA5DotpDW4oMubxBXZFrv7qBGiKWQtzNs5kLbsbvemZYywCxScbFejutoF9sPFyHPTUKF9BsPRTMdhKGFVX",
  "key36": "2wzKuEJuhbkifCG8LvtiYqBs9nk5284guuwbjwDG3kDDdvZoPqxYj5vxtsbKUs2ZzGn8T24qxErwicPsbDjuye3D",
  "key37": "2pykioE1nPxzY6xWr2GprByZGYYSnwWUJPYB1y4a64KhTJTje1uqMxxSBbLykmBg8yi3ySc37jg1QEECSMjyAnjD",
  "key38": "4aKcV9Cm481AssCdrb4fqsgeEG5yb6AKLBE6F8mt8X58TBP6JjX7YU3ZLtTRRCZXsVadgLCV4ibfS3F5RdpCW4dG"
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
