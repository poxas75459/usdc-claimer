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
    "3iZn3HXcgqfJTdk2CVz9RxLuGgmvi43UzpqjULmzC3JBFn9cgb2KupwLHyhu1wq3SPztqLSMvKKJ3n51FqeuHAFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EP9KvgndUKPM7gKayyg1kFei2CBWJHAWNjrdTz3TLXpLpM6FSFvwDnk27W1c6kiwy2eactj38z4dGaF79LpYFMh",
  "key1": "248ZsXFhZuRGPEDwTuv1BHV1iYAJbNr2JEttfgpRBznpoukoHMSZJGGqBtwD2AugxMqZJU5TNEgovbHkEwXMniXJ",
  "key2": "2zcbTwwspDUkbzbkk3mdMxxiMVvF16k4d9k8rAYznRAWr5sotHTgG85DXZ5URtuFac7xAUwWvLGyx2ygPeYaz8X5",
  "key3": "VbPCqSrRS9kzb9QTD1Y882qV6eLTCAB1gexzoDKdBfwDg3q2wT5jChATctyjXq4GBigA2d9MjPNnJEqLmbFpwTR",
  "key4": "3dUvdLvZink3AzBDUXXjjkrWLihoVxdM7o4YobQzg742upYZi5MEgi1jXXrSS8bPeqLyLFLJWqsAqVzinjZvuTjU",
  "key5": "X7XjGmxF1fvyHt36aM4ZHp2KUYLmcjcVm9nCuHKzwnB32Nw9UPRRTBxePohDroZdxzEzQFj3MDUBEigZ3PNPtcE",
  "key6": "3dJSMPBh2iS2aVL4c12DzY753p33L5SBtkHV8wk22K9PUty91KxgRWKj4fCH7qTyxQuc2ENWFBLaGwLPXrqUKS6X",
  "key7": "5QNdzqoDAtaLdL8obBWj8Tnz9NaW41zZ9tnWeM6rMLJYXnshw6gfRKc35Vjgh864gynqVkifWp9RhsryfXjgnkhf",
  "key8": "5jXuNYxM7QE2t8fpy7Gf21Bz632CrjKBWKsc6Y6jBvDshKKmL9mahmmWSWxUaELk6x4TPG4zXMPDFwN6bZixNh6",
  "key9": "2t4sJpYELwCt9HzDRnexzc2UeumLVwqormUwK68VKqmm5VfpbPsUTuncxqWJoSWkR3s39BhdeFYP5HX3EyoRvgWS",
  "key10": "3uBTZ112pfo7kbJ2MUjSypaCrcoWtL8hCnsacoEcmM5A6GVAoR9o2PahtfDdmhLXbdGKtybUb34rhCx5vpNGG5m1",
  "key11": "x7mTLUcEKfA71qp6CsbWV73Yej1nhdmrdg1E5pLW53sUx7QPQPcDwZK25GLL91476vqTWDnzNgaE9i9uMcPNZTs",
  "key12": "3FZRfet1raZ9pASZ2QTu1TWoDCTfHXPpBNZEjTEpGo7qW9XowAm11V1Gb5SUvJiaHMvi8c1EgwbtbGoYqSUh88hb",
  "key13": "3FjqyVrbqYALBd3d7AtViqKHT6vS3CqdrUVMjs3eh23zbaUhK2Zs9CMRoT4hF8xM1672aQgJLZqG6FSGTyKHPRU5",
  "key14": "LVKi88SDUXz3a6hv6dJpDRPsC7rWhFN1AExpHFK5SeUFt1veR9LdGbRRNhqP7cPK8f8zyPjfJi3Yi8mDXaFZu1i",
  "key15": "3Gar2Df6rcfmREN1TtdeifJa6YjUfKEYp5WMi2YpvZqUYq9NBjxZcMVCgPrhLnGUpXTMnDkxPE84BcCgS2ns1Sf",
  "key16": "5DC4ryAHDsGXWB8U3vrCkeEybyVsTTmm44P7Bn3ats6hN2whBnuYxfGYkJRZYowTsZCWV8HwSGY72u7dVm5xmwLj",
  "key17": "3PZH3AeczFb3jtC3DGh5QysQvBZvSHHkJiZDHc1haDcMCJLraN7d5GHQbYXosPtMFgTivePcXGx33bgSG7an3Red",
  "key18": "5DuwKNRKVS5s6sNNZ99wniQ9pHLj8uUwQFxi66GvsCrw1DZe1iwB2pwnpYPmEvCmCnS4o1AbqrDfpLMiuATnupYt",
  "key19": "4hXoLBt6TciA7BTkxudSb4NZsLQvbYfPTCzUdqceLCHpTwcLuzUX1ShcxsaUWmHgaGhvk3Q4yV198ksVomnY8nCG",
  "key20": "4yYGjSd4BpCGYbXZQJD1vgamQhgJJVzF4P6kz6XiNzuMWyZ7aYaU91ig8pAUxmqPWESqxNXNzVQAUiaMr9yKWH2N",
  "key21": "2YkK3sfVPZf4bY2YT8woxa9A2wX4iyNZsozgKNMATc5juFEuFUdeH8Ya5iFtNHumRsihgGNU3pzq68Lg8dnBLd9u",
  "key22": "4Kyhjv3Ad2EfNeeyq92MG1Po5mD7pmx2YgjMhoLN3RMtJAaHc31AnWdsKvN16cAEuwTVUQZwYFnBZ6LC9rnVDd69",
  "key23": "TLrPh14wJPSEGYxNadt82L3ksnoh6sqgLd2bbX9nnkz9pzrLikq8rQusrsYnQorzJJfQY4XWCVsXGZhStCMokaM",
  "key24": "5QBYvT2xXZRnbWekSwyz92tjPU6GczfrBxc29i3qKi49TwjoWwwVmqUaRbVZEEJ5UgyK1Hb6Mievp57Dw1LSv98z",
  "key25": "2pNajFda9QMUkYAq7V1Vp43yU7cW73nAZLjbRYqtARfEt2xsFrKApT8KmTnbNTNC32kLzASRdodhb1UJiktZWxbp",
  "key26": "5GscyVnHR9DDc6Y92DTWTGpuWZbaqMfD7LxvGVMgFbBnAz8jXEZ2j56U9fi6zTWwdS4QpB5p91mDeUAaVvU6FEoZ",
  "key27": "2WhQGTGETfRvkJh2KgufDgtKsYwTcQMdic7ioPi7PdvE8ysMr6Zp683tFGowvyTfjNyHhV7uBY5z9RaMhhK1mQiX",
  "key28": "9iKHZZka3JBkat9ZiwQvpsT8EZ4byWXbx623eg1Mpc9crNDinsjuacavjPWj28U2oLC6ScxdcrYEUCi1x6kosRt",
  "key29": "3UFixAYUrpRRjaJGm4qN3yyGBAvz6EJGk9AcmQbCQgsRae4HNJ2kPM5DSA3dHPLNe2L1Wg72iZq43p7EroFSbFpG",
  "key30": "qb5tuX9heP7hCScMEe2iY5fWjqfLcgZxVoufFKjiVuGELNx7WzLJwwsDu7FLctPM4ktp752P6W3RuniQtvqxCDG",
  "key31": "h7NgngbRcGKJB5o9snPkRa3iQTxYfjjhz8gf5M3W6JSdz25HYXTFbHpESimB6WECCo76C5813d99fpYJGjvKBMR"
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
