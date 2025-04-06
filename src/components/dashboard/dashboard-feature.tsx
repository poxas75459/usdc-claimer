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
    "4Z1UtTsQyb559S2gZDePZhynvKCDYGjDNLRMzYYz1g9U8dz5KivvwqAxLVcv566K9ieyyyyc3pixMWYi9eCatcq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XnueyCMsRRBscgf7JMr8DLgkLMu3txtveEF2UuS7BjCpUExNFnmSXeWX7mLFd27QTrpiAzn2kLFAcF16oKPdsxg",
  "key1": "2e6so4WRAssVqq52v8x4cqRuTdaTBmmBZ1Gp5Luzt7c7HCr7Vy6Yp7cLxQM3XVnVJ6gJpFkZWqQoziF5ux994oke",
  "key2": "4oFLaTy2w9M8dYoV6Zw3aU6295xrDxQyFLjxXAvacuioZbWhKbDDWfy1Nfn9vZRR7pjGdocmM2hj2NhKcraibw9G",
  "key3": "Yssdjxn286y4deaUEWdiQwq966YZ47d8odTzHghXdZxrrvDMGYrwJgs64rakz3mKpyuJAuWfUACHNBXjRsLjT3Q",
  "key4": "5RuVT3Y9PPZ74UJzQKSnXKHUF8Y5Jyktyoe1Ve8Lz6ukEGQPFmjVpfuwEW64Dd92uFHsx5BWwDHUQWfBmTUyJsjb",
  "key5": "447Q4zMoBmC5Ms8CJjTAF9BHrAs49YyPY55oAggTCC31wfLotfghgqarSWCttuAN9brzkuBdQF9mMVH8PJPiVBAj",
  "key6": "3AfjKBZqHuXrRhCJpCqDyTgVndN3kybcx9VnMVs8MUd5464u4Yvotf57W23PhFMkcwS89ogWBgRzNtkcQyvL4gGx",
  "key7": "4imsA9YxSq26gaKc5Tf5YU6xR5y8NRvMDV7NqtRX9tydFwxJyWok3xWJHnJqFudoKK3KkSABKy5PGWXsAVj1q9jW",
  "key8": "3ZJstwebNEdnZKqjVZS7Maisb3PEX4PJsUhD1eq3HUPXP6PRazH4gv6rwSpJ9MmZynqqib6sxYeggWzgPQkmM16E",
  "key9": "2diDo3d52TNkhWmWoHpUo6YY3HMzmqJYu7Wji4BSvgR11W56wPp1NZm1JeXfvicLdy5u5Msbyk3oxa5j9Q5GoPCg",
  "key10": "5Ud1hZh659SpddGSdKo9z2MUSVYX9WgE5v1p8BcBdAnqgjpa7xweWTPLXaKrUmEmD8pNL1frwg6APK2PtTVdnyUn",
  "key11": "3ND9Et2QqvGPnFWUt9pScZqsKb9VC9F5DGNRechaE3goZV4a22mQS3GoKP8ZUh1wJYq4woDaXceYqnrr1nKgm2Ky",
  "key12": "3GHsFifScj9T38djGNab7dTV8DmX7sEGePLS5ai8zJ2Tuuieq5gGKc1k8R8J2YNvjjaM4ERmFAd3Xua51qV75X68",
  "key13": "3JsTkDnchdHS2eSMe5fEyVP8koemXMaKo2Ep8chiY4Cqzm1VNjZamZUdGqiaq8VDegD2vXcwyryWdBvxLekctPBm",
  "key14": "27Eo8prUTXRnPcKrJck9Ea65nUQia6WWTfhMfPm1X12gZFkYX28MX1Y2RU6KbxSxRJh2a83jbXiRSYKJ8w5f8dN5",
  "key15": "41yPBBYe6MYH2vRAZy4D5FkC8vqXyGemWVkx7832NMz1rfhWLgK5MqH2yptQgMrQYype9xFeKU2LCZsz1uhJSsfe",
  "key16": "3CN65kp8jMV3JHW13CT4duDZhdbLJoeioxBQqrX6oDoHzsvafYPQyEWtKFunM9GDDmTwGJCg4dCuFHXcsX9uFJPS",
  "key17": "5bj7tByHR68cAvaf4DhyXgVqqWSvyYeb5MnjLfegcSAsHreCxqry8eP2s1X7qUENrGm6VxGYoz2VkfvXxTCc3oNj",
  "key18": "sccvwyNfkyTqfn9LH2zYeikMvwUyNH94hNvF2cvHjjZaZAYuniYyeypmnkEUGDstDAskLRFe1YaecuQjaFY4yTx",
  "key19": "4rgAT1BJC7xzr7dmFCGrSKVBcthLLoVpDsg3gmakmrMctaG9jQa2xEwP8RtSt7WcFM2Z9ricgtmSe4QgfAgCftds",
  "key20": "5Q2esa6V9sYdfDiSfqcLEy18AHxhuh5mGUeeQ6sEYX38f82SPKoqZUQgUvuVaxH3J4LJS3dTYfyxAvUR3DYfbSeV",
  "key21": "39stec4vuKg8phXwLh7CMwHZea4bv64iKQ4JJEenBCtXA31CyuMSFiYgzqApsGsgKuLGpTnJXDgVvsPeVRR9kFmd",
  "key22": "3YMQpzZUUbQHvhprg5EPaYYZ7hPkM3KAXsBSxLEbRjTVevk7LMx91J9Cwf9rcWRr3V2LhMimxKPGWt5yep6vwJQG",
  "key23": "54VQbwqMtKSQZJrzTvKX1BG21L5212hgsfviEwSUGCbqAFA6hTF5GRuXfYcbvxT5Nrj8L6atFAMSDzBrTVwbQGqt",
  "key24": "3bsZuMX7NVnrfiohRmoBfNtT8hNEen1WTwDTBghKh53Esa6cCPqSSX4WKdexXctG1PemhhvziYspDFpqpP3hvBZq",
  "key25": "5ASdNmAQbpiP4M3ZCvxZFjHE9N5KNTzh5sRS37XkAigHZuBUDPPnhHXgnTamFpcfqcttNFaq8wvfz1e37pvv2nVg",
  "key26": "3PtFqHo3uCvvurS2qzRkChv9Fp3RYuWwCb6FLtK3WqPkEUiRud2GSuiyuyhqDP5DojmAp5hNzDEMnF4oaV72612E",
  "key27": "431svUWQz1JknLPD5y2DNdXoysGHSoiXW8ykYUFRxmkTvRMy4fCmkMR3cxFTcpSo2y58kPnFMQcfS4qepyzpkg1y",
  "key28": "2a6JKJhUo593ZAUBu8ncvedVuHyPothpi8wQoLsqYmRkVAxuNz1UsDuHF6zF2WpujYkyAzcn4MU9R7Pq4iPMvU8j",
  "key29": "5YhMrdjNgwWo7Wdx7cSAC6NiCDUQ9ChR11iX3g7ZSwrvKswEci1qnRHHnfyouJQ82p8U9Ba9NrhDdsHCFRGSEx9S",
  "key30": "JpwWSvSpBoeLwBVB9efRhDT2T3iW87Qeygz69uJ4jY1TYF1QhBh9H7R7SsDDh1EE2iSjSWqrT4c3GLDfT2mdQue",
  "key31": "5jVeUtFTtjPmz3rhfWEafrP529LYGQLx54ih5C8zpGRMfh9fk6nNqqkj3qt11Sce94vFqbuBYLi2FLB9xxJjZY2D",
  "key32": "3TyGZ9Ppcgt5b74VJhMybYGLsJQfqQ6hC6zrRpPPFJYCQ3apzMBFwEkM3TpFJGNq4WjVV6myoVwKNJx6xEraxptS",
  "key33": "3PEYvskJ8pX1TUV6q5JhoYXq4h5W6v1M9JqSYmvFvz6DTXorYVSeWNoK2o6pyfLxyeVGCimxcmanb5788sXKj6uw",
  "key34": "c8G1tXELfUrXkALycSyS2AGLqJyWPZZLouUn4XgbULbBfD9qnVBJXhEbX9gje9PgVGZh96pd3tp1EDnatdofcS1",
  "key35": "5XpwcFGZKujRvjZo5MZJsbLynBivm2uVhGLFRLVkpvn6jtMi8pdbkd6uwiKgyZAUMatVp3opGmLqf1MZ6oJhHS67",
  "key36": "5H3C4TypJXNsEx6BjHkFLzEuZd92G5jmoLSe3UneseWtc4YjSi6qzgtJwfRfTvcZFjMvLzJyvw9NE4MNKxAm38ag",
  "key37": "5CuF8TZmVpKWnXZZayGT5MARJEbnSCko73PRMD1KTpw78LfQj3X6dqdYEDRfRugCXcBh13aQX7yoirrtBZR7dTSM"
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
