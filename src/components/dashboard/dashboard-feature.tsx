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
    "5rHE2R9SRzEsQ68fTniyGadf2WVW2bKQZALjvrfZ2EEhogBmgTFzgacdxrkSF9NCavTZ33fcNdEzjcy6zoXcwTJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AaAtueNfh1fhH2wGispuSVUEp6tRfTZpikubPmhT41fQW5yhxWmeNG3xNm1rFkk5TsiGgg3FihcEdg3xdgq2QY4",
  "key1": "2fa6y47A4nTjxLUiotpsHqsWpgKe4DgG9EkzLmByXkZfSwsSc98LiN5UFm7EP87hCA5v9quDx4JRXgwkYXgfLJAA",
  "key2": "36YwMBEf7WWTJQjTm6FthRRdK5x5ixNX6vRgcUbURuakcCEC2kzi2vZD5c9WMaFzCZ6JVo9kY5Yq9ejwprxmnfka",
  "key3": "5xNCokzKgg8G2azPeAFZLLUicnmbTMHvUTcrggWuSAiUMDN3gJZ4fWwjtLSJ8h34acrnCjvMywkV4bMnmrutzxiQ",
  "key4": "4rbjiULWLHbsCykrrFaNmUtmgvdifR6UYhx9GM82tC7xQbBtLyU3MSrbeTFsji5xiPZjHbjLFjpieQFx3ECtiGuc",
  "key5": "36K3QQYGN7gzyMJWsN2iy1cST7zMLUVM6DXneCMAyYxQh7TpLXt6rK8qQ1zMkkVJGes9nA7EL5QJv8MUU6sjSkAL",
  "key6": "3NFWa8oZV7Cm8LKH3P3vHHDyNKoqSsgUsr9puTTcFd6xjxYhr5SFiT31M8LZnFDpdw2CTVH9k6YXd5qshviUTWLo",
  "key7": "tdCfPD4Sr9z4zP13oAsRC62ixTdHJZDU7T8eW9tMEMJgUbDh7k86g1vSjez7rFBh3t9d6RWaTEukot48f9TUEy7",
  "key8": "5m3AfnkkQdgY2wqYxmThJrT6LpR3Ra76XjGj2Bv8t6zKogtgzuPgJhxctuJsnAVh8ndXXaexUBBZAVMjetPMzN8R",
  "key9": "2C6GTJZNbPW35KsN6jNpvfh95YVE7uz6hiL89fmpbR6MjsyNoi7j2yBxEL6dK2acynbbouPnokwCPmcVCyLJHgRY",
  "key10": "4t3XYY2h9xVmTcrNtAE9BpmMCs8UYjXqTeeCU9oemXuUA5ZxkUrVFtSAmDJg3gNvHdkgjduBoDjaRpX8eYuvJf7w",
  "key11": "5yobYWWKUECYTCxFCKtAyBKMVoZ7p2bxg3PkCVykDcV2kV2NuK4iW8jpUrsDaA1atPB1tSjq933agBhFrD3uvmFh",
  "key12": "HDJV76ZcoJU7Y1z8UufbwvPYmAAMpQuysv4do8GstLmaiKsNvUg2WqXyEko6EBp4ZR4j34MgBiq7ZEgjCujbxZy",
  "key13": "2anjo2uhckR8b1Eo8ek3UQJjiaR3avfcBX2SGMrbAXCoj9Z1F5LwPGfTyxyV1qu5CNKnJRnt87iQCr9CNwkAhJKy",
  "key14": "4jJao3jv6eUyMNrbVMFPaKjia1GbhZPM3JY8ou1mantW5rPxSNH2p9yq4MZvr5acvdKKCKsmp2hwpoTpZk79LFRQ",
  "key15": "49SbXKvj5akctCdT46bnBStxnFcVejxUyHdAxj8q7gpKM2FP4GxBM6MrqwzQ1DFratE5bSeQm3TAk8bUPfxzE522",
  "key16": "4b1DQpf8uoZXY2bfhE9ZR25zigHNuZMR3tFXUAZRBvPT3thDU1Wb71GzMhve5hCNtwkj9RrXdnBcvLyHYwhVP5Ut",
  "key17": "5NZjWfBnAmrv8bsYM6581W5bH9PyEvcGgnyt6vR4y4ovmBuakSSxju6eCQHHzDKSD6Ck1c26YNUv1q1rbp3DjcgR",
  "key18": "3U4XsonQDJksiM3iNQ3viYShYGr11QkKTWEFcARnGA517H1aCvLDgZKC5v9WpUrwcbnM45A7zHhZXi3B5sdvfTaa",
  "key19": "7TkUQpdKd1mSH2yrDsV5PuH83Luk5Qa9pLPeSZPmYUghCQGXvpfchtnAbuPEq8t1nFRfPvrxaFr7LmyrsgM9dxw",
  "key20": "3aqdpftLD6RCzX4UrffZhD24EHVszdHuaaGjh6wsdPNAWUsq9iFUXirXnowEknQAumYDsXKXWtBksgCDRzHkxFg3",
  "key21": "3fcR15DMpcimoEzeq3a3VZqsW9dYj5tnKGC8Kv18VyceVFHDi5WecDCvLjapm95UR3JwMgBJPuo7c3VFozCvTYCR",
  "key22": "4F6o3gDkHvYcRgdW5qn432VjmJncVjJfMAkm9aMZeAHh6LEEq4PnsD8wxyDSsKGjYTSKas1ZPH1xaq9XymwXsieu",
  "key23": "57AdLpELYaNDUwGYVdasSwNDXYf3sv2TMrByyocjyArcM2HwFzKVk3wW9haN1hyaKZpPrY3yt67Vq4QJxfhGX1Fy",
  "key24": "4e3vpLkqiW5xancSH85nWbty7pGeU5rQZZUpwpqrDKQZsPYm24axXyZiwyd9n4mxe4q7jaLs5TsuxB71BRwR8FoT",
  "key25": "MniRycjV7edD5vz6GjZ5u2f3jtcSapsdmrysbDBjuJeN5RjUEsMiLmkncvZEEbHebdugEAgNpd2PWGjgwGPVd4d",
  "key26": "QKMuwg7xhYi25MMR2igXQ16FBdS7QVVXETdngskW7YtvV4RU88f5vPoEWoAJY3VwKLPqbJRmxUaioYt33fXnuKL",
  "key27": "2VUUyD4CE1nfcAQ5A5sGvzBkYVNuMVdbn4V5MbZZKL6QdHMa2kH7Nx8cCdPLFMKU86M4mbH9wAMvaJBVaPBKgDPq",
  "key28": "5Bu39gZZKcPEpXefFSq3Q7xFJYrfPZtMi6AyhRMF6zi6pT4N6DwS23TKLJzvie5LBPzHsz2JcsPRfPhnybKQvom4",
  "key29": "2AwW1Lb2na8vCcypBtPMr7GHMcx1Gh8HyrYncikHEoLvfcZ9EHwwBDKpBza6yaeRXig6X6AXfY8bbsEmXibCJqq8",
  "key30": "Db1rTPD4xg54QyjsJfDAGhB4UJrPT9YBAXrAyHtKXs56ah3WZS23jLVxVA75Etd5rrbNKPrMg5z2uL2Z5dQRsaG",
  "key31": "4vwboCUbM9YJgwjyHVn8W9keJQjj26Y8Hq3RFJJJkxjUgLTFt5m1zVU15pPwcnL5uittPJh4p4DGWoJcBVpshiEs",
  "key32": "3iBfynEudhD8z61Sf8qnNzHJWsEQsv71MWn8zVWVTHkzze5wz8qw6sb3M72dwcjLpQsshBHFBjzRW5rTmSmG9mp",
  "key33": "5yrg2dLpcHynJJRxTA2puiqEpKrRb5ZeaR4sZE1gZKJLuD4NPX759BTxF45VKuE8dcSBoC4VK8FscFji67iDLUCu",
  "key34": "UV7HXLFh3fEmLrtdMaNEtbZ4unEs7HqMXcPKgRzhMnABgkpvHGRnSHNyTNh5GcprSaUKqnQa3QtTDDe531PnMSb",
  "key35": "AQwqiUzRayHjC6QCi6fUCE4mfBVERWb8BBpasPRZYyjdmCPNCKYfeywCmrDJd1HB5BZZxnQ9aE5iH1dnDMmpZuL",
  "key36": "vecx6VZo5HXe3pomnhKLKNFMCTbdBSko6ndEH1ZTNpMCVr9DUPVDcYMDoRZgGPXm6yfp89GfBRVXPocW6nudGDD",
  "key37": "RFeBvsKjMMkNd5j8Mp3GNrJcDPg1mbSbxE2qtUzRUgJPhk3ZTgiTAWkapkJznuT5T9CNeXzoB3rSg2txuMN1TwP",
  "key38": "24kMMRy639EY9sE9nWeVC7vFDwEqgtuqrEzewj1qVZBPvw3prV3jnJJPcbL3t9G2VsyGwMqwYh51jmG4UrR8GNDT",
  "key39": "5Yjyqf8YL13FZkzkT6jb1UAfYF8DZG7ok6mMQbm4FsnKECxiyLAmpp7J2bExkjGvmCEn5NJxE9EeU4Pxaij14vzs",
  "key40": "48z3FPhucJPiLuswr6fCw3QMDAkr3YZs2AWhe7Z6QUxM8WNJHBaBR64QMoS8GW97BhpGjZvyLsf9xiQicHKVH183",
  "key41": "46HCu53kkdQ3zBoqJiTB9gYZ36iDGTB49MFhx4PcA4VuPCsPhqx5ESpYiEgnhsgC4sXU3zGfDcgF4e7hHZMHxAFn",
  "key42": "5DtN2fv4umSQDo5jUrisK891hjPqRctkw5rRS4DKzWWp9q4FmVceRBbjw9wt2Q2yxbwxf9FS3RfxWGC3su6YJMwa",
  "key43": "5W5fbyU9D85Lz3y6WVrPq9RXjma812BvJpNX3Dir5EGM3BGwEHMqC9Vwzzy3aa6GgfMNN3jW9sRSF1AEPANn9UdE",
  "key44": "3wTDgGkbTGehDWFo6ZKdcPoziNMrz6aj2S5TqnzoHUDvTn2SLNLMP8kXHhPUdNNTJXRuZbmQx92d7x5E2i9FNf1q",
  "key45": "5X7xbwR8GW1gCzuvS9R4JrxBbHknfW56MYi6n6UX9byGR6D54jQDHZfCfF8QaixjZEpwP6sZDDdSing61tSiYYmt"
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
