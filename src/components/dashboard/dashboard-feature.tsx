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
    "bGkJe58MH59M7YUT8UEVD5nWHD53fvm3kR2gGPp7dmhaZ77vuZuqkNM4W39o1uLt2aXr5vQq5gUmkTZb213ydLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JinpKHLViSUVx9hjYqNFZmwzaVppmirw2wk6crsRcBX2QauATwejWtbu7voVbVE4ZKFn6PqNRsyYDTUKaZGvC49",
  "key1": "3xmUoTRNEfLnd51dG3vtHM8TCTMWdj4WoArtrEJWJB6vMQDz6uSAwAVC6yvPc9ks2tbDLzXw2qR6c4CMNraBbscT",
  "key2": "2mum6BpWzRbLMiEK8ZzhZ7SsZFKM5mW5XanTC4wtsGcC8Cqd1PTX38zGa4rrrgoXpCEakKLn4b9ZFvgXLHMpH4t3",
  "key3": "JWZSd382Ps3WdmhU1drZGYwjvwXWUa5vn4GnxBWwJiuvSAMWKEqheXC8PdvCJms9Ef8JLYNYRcMQUSCJ3jRPLwM",
  "key4": "3eZPW51J3qAjz15NWY2bHHC2MXMsyT6XDchVeoR26GxHhQ17p5hXSgJ5xXTrGbGb7brvBUDJkqA2mUHBpps5mmmh",
  "key5": "31x56AN8GqwKh6WKnUUx7JQfGdgBX9RgEcbUiuuE8EoAbQAbzfiR8HvGvDvk58UqDbyVarZVBsVZzViZc4GAit4H",
  "key6": "2KcSUDY9kvHUBNfgA3kNGnxWVH653JqPh87APfTUJYtP6inWa69CRa4Zz9GYTX7zTsZKbzppx65477q6VGFRe9p8",
  "key7": "5CgeN4p9kFCrUtt6Cd7ACEdbKr7mW5ACmjFCu61PE7nC8r1kXRXSoXQ2cpJ6sHoHjdKEst3KF2exxFkBGRr1bUAr",
  "key8": "5EnCywJ6ANXQHEK3B4PzFo1japG4TAYhy4GqjNUJjcSeDyWuEDXjPLsxzmkMjawco92fqrV1Jgm2aKybVYmJQ9y7",
  "key9": "3EYcmzFwjgPKmr6HiZ1G8Bo7w7gZRekTjtaNY1VJ2ZDZXezEBHxfCJH5oeZvd8caDgLWjRmcn9u1RzYUKdiPj14V",
  "key10": "2kGSRPvSoK31KHxKfRZY5pCvukfmKigQmnZcKgdChq5o1HSrnh8Dmmp6ke6RjB8eXKQUVyPBRvvTNvNEd4BWTKfV",
  "key11": "3XYKyLE2wv9zVobXVMYq5uW7WJD1tCUM3Fw1ER1fjVq6aw3GECZ2N1GFRcMbtB7unuqda398qXfQ6ZJHqv7MJeQX",
  "key12": "23CiWeSX928uQ4DVwxc5vPY3fWVKf7JWAPKhyKwA141sJft7jkjKzPh8S4edLnMN4B38ZKjj5WNbEfrXKwC2Eraz",
  "key13": "qCJpp6dR6KEgsusD97ZgnofpwM6ktVcfnYGNn5kRAysUmaJP7XzQ2HCkbed3ZTmQnUhmfZcCKrfCAvi5n39D3TX",
  "key14": "44um1HahTqwdU2m56MR5LBfN489BhmQmmQmv4Y9x7yfDFPTRFdDhLV5RTXeWu8X5wdrvWpMKgb3RGnTHQruD1rhK",
  "key15": "5H17SZHQJPAutiR8YDzpWcDrFbAS92Jd677xhyUqwKrLNcakvp2gBm9Hf2eRALDranFyAj2abBv9s5kpioSESCgm",
  "key16": "49Kkws424CNsha4AhbNXqXR8Z1D85PnzH5Zr7n6tEJ8bHgMLS2cTQNHU5HBBdk23ySgiALUvb8NNvMGdcJ2vouud",
  "key17": "4mYqmbbFQbHVwCUDHfFks3QzMbE225zmRbvcys5YzfGopPGiyvCTrAt4X7CEctV4dHTUA5foBNucrtV2RiY92D5a",
  "key18": "XLEbwzRwZhyyBUvoSLA9dHEckwgpg6HV6ac1JCGUrwdwgD5QEeHEVkVJ9EeceSDPTY4Q2na5xkNf33NoEuYmcwu",
  "key19": "2xV6RnzaQ1AwawR6cn8cgSoE6M9kgjNF5anrxJZk29pfEhVASGn64eGLp7xHdn7A8qr7fTXhxVK9B8jNor8uCPmV",
  "key20": "o6xt2RQ62QfMxsjEWgLnGzBa2MUubmxMFxvR7QLgcZR19Bi4H3fbPJ4UenR6vyoPZi6joEFFs8HdVLs1pMbgieE",
  "key21": "3JMw7RzLMNfupzf6yW1vAC1v52zK19vBWtNL5xNLDPMaAXtdioWTvqDKukN8UE8vatqCmwVNU4URWNKmLBeuKBHK",
  "key22": "pDkCcXVJyE19wLu2SqMVFpehXDWVpWfSQzz6z9iSq9zeyD7HQDpPFrJmMMdEFozefmuVetdi9e2PP6LACG1fCDb",
  "key23": "3sqY1SVSyCLLVyn5Nhzig8Wy3aoMuEvVkXbMpNwNPLEkZJFesZdsDFq5uLSE2naEeqiWSXDoFjoRwY37kKSTyjU6",
  "key24": "3GpD96wFVCUK5XYsUYyKb5moZ9Jgb1twh8sFFP5uFvcRCaehr5i6NtHV6AjQz7F4jzGbPj1NzLRvxPV7VJg5Z8cc",
  "key25": "3FXdH2cTkXUQ8fYvuM7j6K3ViP43dq4EES9nNa3eFDTT4E8iqcYr58to3Tr1KSBW4viQEZRcQFAm1BeqxSn6woPa",
  "key26": "3ZE8Th2zKVR9WyvmK3Cb3oMNX8a6oSN87JEdtNDwEBJvGeWka9VGweyfztyPBgwLW6LM7nhxrgGybr9bk4CfUB9N",
  "key27": "5zj1VPgwe8nVTDSBneEDYn63KoqMHKaxP5D47GmctTh2EzSH86eibZVVgMvLTsJDCmbnMb4jvGJdDSWYhamk6xqt",
  "key28": "3cLjeNLSJDHxNXnX6hkxftCJv143YvkhJ2b5MdYp1QMb3cukZR1Sv2HKvJAPZ5QNaCftPkF7SG2Zx1iG9ZETxx3M",
  "key29": "3P2ffsDgMKKdGvgUyKakczxNDPTKspT3PZSKhxZ7A3AYXScUM5kNZesXHz2rqgWiUpZWxj1ihcoMoAuHBEquvjnP",
  "key30": "2vyFqD2NU4P3Pe1SzdB3C1DK1TmnewmFXtcREyNPV2ZjJtUQsiPohMqg38matLVkSaYHKHPssqxdLiqHSxMZfNZK",
  "key31": "5neub5AUTJMdt54qyzJPczviE9CG56XQyP1CNEPUHLfj1dMceprj7t2jPCyBmbZkoR8tVbYQHYzcG6AKuEv4MiXd",
  "key32": "4AaQv1AH7Yz46yjn1qm5zvTAHshYU2twCkgo7HokPynnaurJ4eYfoPFKiwRY8DziTxABE715NNSXG91BnuMdhj6P",
  "key33": "hidx7bLRCRLZsZgstEQejtUazbXgpqAMbYFV9Xsu14Ai3T8yTrMFRkne2doWAXdDRwZKspqzJbvADZo9DnSBeDG",
  "key34": "3xWSargTXAM6rGaohsa9dhBx1ruPLeNyxwHoDGJGZ1Rqac6pZK1tDtpTWT4JZ4ZgtwQLaVfXv6iYyk99UJ9NC5e6",
  "key35": "643V1TqYkJGZvV7vFFw1wUtWPEryP2tKTiNp9VcS1ez7pbnm477gud1ah6pKAGMDLngbZPuX8Hu4BU3EJV4FKRLn",
  "key36": "5xxHT2t6PYrbAxggAHVKK2j3TpaDEQcSUTzPkdKvuhhRbvfpFi13H5dQ3Ujaecmfh4Kqx7gnjeKPnFwtroaqgAtq",
  "key37": "2LZeercWmMAGr8rXCSFYpKqaCzycDhYAJdDH8kdzaUFSwVN7VkLqU9KZ884LfEQSB11KEFAYYdDauEwMU4LKMzyD",
  "key38": "3EgV21EYBWJN8rRrB6d7rXbtmF6vJhcSV8cjEgehaMt2T9dQDeeBTxopQcFfLfQRDsWi7uHWQJCF4FPUjTeKgsgT"
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
