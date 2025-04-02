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
    "U4JGpALusJp4r9ehQSbezkpahwdhZhBnXtztA5cXsoiKTPg992TQEZ8godahrrXHjyPWEY8ZDu1Ryh4DP3Q2EFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5SxHVhBtEKoH7Rh6VVVVZzG4MRQN66PpYUKesEYUn2ci1Y9grMe27N33ootrbotFx174qyT8zU99yWxhLy1q2U",
  "key1": "3UmRo8gg9fbuBqPvw9t1qfF2mw9gVa4j3edEb4hY8P6mAft4Xqyodr4zZJUnXAcC8b61C9uUriE5nMLSJtyLZZqw",
  "key2": "3FVmryEATAjW1zWLMuJr6JiKiYVPhkLfiEkYVgkzFx7ZtNQ4Q31x6ouejNYfAJTPcwEBgvm7rctrWhUgAGELbtQJ",
  "key3": "2zPnqSGHnq4aV16avvyjxWeU5HAu4GwL9jKSvks9ih5n5r28gsKhwkU3Y6Q3K33dfpo9noz1Ry5zXeemCziSz6XL",
  "key4": "5ZEetiZ3SKiGij66xJ3jzw1dXH2or3UJCAd42WBJfox8bL9ZnE7XxcVU8ET2WM7dsfBbDsQZH3HnxzmPwVs4fUDF",
  "key5": "4SDVxVXorTaGrmWVNEvUXGwwbazyE2J8jb2wzk51iHbtZm6LSJSvtvmwR4nXXf7LfzSoMrWJmTniWNP7HwEECyao",
  "key6": "3yuoiE2LbUHgM4c8Yfyf4SSSV2enCxUM2ubpyhBj2AUQn8j7sE9T29evqKxgtQYcQVRS3oUYyoGxcLS8rFtbgqyC",
  "key7": "dtihKZgvDCoTK9XGoNA31ZYTjFxdfMkHBfcsgxjBBGn9yJWxhFjP1NZBa2L2vZF6oDWESqUFWkLrJmNLVLa8TZd",
  "key8": "zEGkt71ozuLfkaq2v8NW6ZiGoJByGuwXHfvGMYjMhXfANr8C36N2xLTbSUEdF1gcmucBUQVrvsvbxRE3c6sY5Vw",
  "key9": "ceKbkt4aQLTqbZg9Yt9oaZ7VJKcsV59vKMbVjPo99c4VGvfyCSn7g3hDwexYCzkWPvEjoXWfEX63swqcSkTG8gd",
  "key10": "4D9r5KRA9fVzmFqZ2gLZT5uRkhMM9GFMweEJKGjvCJDDi2skw86tQZG1TESeUkDQT8CrjtW3TUeGzVth83t83har",
  "key11": "3MQ9QnuThiGPiCKixbJ41gjXJiwqinrRG5EwA3wS4fkPmesF94ospQ7gN8FkdPGRTPUSaauVFQWAUKbbr6m9iBMM",
  "key12": "35trrvEdHUUkeFcdhuJS3RbVY3B3HS9MDhSmRV4iRbKEYnfvKuB8CdoMikSpbQQfnwJBLaikFVxupUDqq7ZDL56o",
  "key13": "5NhybhnJiWodPw2MUus9SVF41X99Gc4vZNfJGm5ekKXUu8JkGcARPMnUP3e5a93pnCfx7zuqQ3kLP4iXcTFTTBAh",
  "key14": "4djGFGFtyS4AKkKFwVV2JGdpayHsCT6gPJ7ovghww7Zc8Chp34Yj1TW7h9rPWpEkFwENGbrzHgiEf3dkTiGtCCAP",
  "key15": "3mf3iiztGNamYEZoSzWu2WLpYJMfiw3WzDFQEUhyeYVPF1wcjwkDBJLkRxynW3BCXiWtGfKU5zwwqJN1Cq5gusHF",
  "key16": "4zfk6FRAPJ1w8Hk7ss8CFJLTZQSCWuRWcLbV1mAxCWcFurqf6vTGZ9LLPhgnTwFw1d8DyvxW3qWuiPHVad2ZWoWj",
  "key17": "oYXSPmFQG1UJdQ44cKwvaWtedHziJxLGBYFAwdCf45AiXfE6zr66cLURTajqjfL4MuiuphMKRWaKqUT7ufX76C6",
  "key18": "TE1HBhVSr7QCSebqyHEsckP4CKinzkWmgVFgrhzX96k3YisnL25ydhYkpUKRn9oUAYccRFjAT1NV7ei2CVk5VE6",
  "key19": "3twrpCRMrFX32AXcBMLgfnr6Xk4BDqmdZKqNwXsrd17LVhtEnMSeYdeDPCkRHm2Zk1gU7bAF6XrVfVUKbawefwmS",
  "key20": "2Am3qm97iRRJgMjKEgyPo3bhhFVEsECWo8DmjeuVZUG31ZnoQaQRwnmW6oybzhf1vBAJSsuW18VPc72uE6JeTaZn",
  "key21": "5erHrdNtJudKRGpWvBCqZNPWsi4ez7DHEookex3Qfnrp3fGQUYPeaPJoqevge4yjXod2cG56jnXxupk2bW75oRdK",
  "key22": "3hSojCFNvvWgB53rUbWaV9QzXWKT2mEcpLz3BhDoAczcJr2eEEMn835MfhkaUS25uBS6HrFyFBFVdjKBLqNSLNtD",
  "key23": "4BJonQEkNFMBtVK7QvRyfFKn1Xo2xYsXb4H5ZVbJyvxQjvN2876JHjLkTLwwrk9Gh85xx8xuyLn1HEqCJ8T8VVuJ",
  "key24": "2HoCcMgXLgnrjE9iTBUV4eHw7vRBqxZvTs7nqC6Vkdt7xN2X3LLZEbkbGTtzq6kGUwrCuyLfiuPaqmH2K6yZhzHr",
  "key25": "5WzotTP4PfyfQM8ERddsSy2WQt8tDtuQTWFkyqEcRjEnyzNfE5J8V5BJgojckqpEi12Z79EAUQTQzTsdr36scuGR",
  "key26": "2muKq7RiFkiZhvVw1mk1fVbQd2yjiAvRE9ZFftEZ2Cuoi1WBbKS22GJLGXdVSSQcKoPhE3FPhQF7XmibV8Kaqmdg",
  "key27": "3vhZfSKnUAJN23qmoopkvgJW8PqZJ93TFFV531P6ZLGLqCAXEVC6i1o2SvVfBgosyarNtgrfE1qVxtDSvcz1aPbr",
  "key28": "3KyQVWatucHt38pwwuXjGYRK3edQJPang7N5DUHE8fUSafAJg3ynNaEapTabDPtegEKB1mx3uHeShvEv6zMSzq57",
  "key29": "oxX9AUUPMGXbzUTdH9CpKChdsniKRgepE9ebfkiV1sPNowzydHsXB18akM6cnPNs6yhiWAtGQgQSPCuYYeuMHqV",
  "key30": "5ujkPNmmnRzQVNuVX9bNAGLzsZwouZWtq9EQUytzGq1h26GTH9bia9HWWJJHzo6mzgaCT4k16kWhNK3jSyf2snfj",
  "key31": "4Tt65bqpKWkMQfAwRF8o1fkZmDkK1s1YpProG1QJ278FB8m59HqD1nE68JvkjjkKp9MfRxSLeA1LyXmo5pH4fUpw",
  "key32": "5eztvezwFHPhGCG1fkFxrFchn5tsvHLwZykB5HbxALhb3mEBD3Lonx2Xryhp18YQkB1F6c9zwGatnJY8kYr6Q1JV",
  "key33": "5g6mY68Hv5tdskgM6dUERM9t7aQTAwMPZAYDDk6vLuqojssaJBPxxmidkNrsmnS3Nv14bbPejBaKTfGdGKLXd1Hu",
  "key34": "4v5RVD21jW8d889jufrH41RmwAUH7c97bm3D2mJmfEKbtYFEMtbWG5U6TDxcCf8cLAMZ1dAFRtewSSXCXHp8dWLe",
  "key35": "3YoKJRKhds4nxW7YcLqZxwfwE8EAtDwogfCsaZzZDdJEgrNJDNHbDngbL9EhiN1bguzAPJfDnJhw1ueP6gDhETUN",
  "key36": "3sHrXsVcswD3WiV8qxfD14xFkb4tsjF1Y1QxWMvWn8Ubo9AJCgbTFLzoK6pwrTWUzNFSiZXtqnXhjNfmBhN9zYzm",
  "key37": "TqJCeDuNuu56MDEMXMCoyas1T1JDbUpbCodHj33JJzcahtvXfkqfCnhYRsX1Px2NeBojKCzSxgVUaAcfnc66PNC"
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
