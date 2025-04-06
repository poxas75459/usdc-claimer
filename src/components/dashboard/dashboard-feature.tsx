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
    "4W1cwZR5cRreW8nzXvApH7hc6xZcYDewpTi6eCNLR7qwG52G3j7V9nhUR68T2L9F2WnEDAfjNSzdkRJVDbz6Hvpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EtUSw3T8d1KLRKfgBaXKpq1MWunvhKRxPnfemWT18gFtv3cpmZWXXMaVpJtzRbppTrxfF25UDZ6Y6z2mWQFXCTS",
  "key1": "bn51jbiTU42Yuzp78PK3Z1TUCxhtiT1cBpwsAszAXxZti7Z6sRVauvDq31mkrsS8Ybgwtt17jzBaA1YghLkWNaa",
  "key2": "3gBGRd9K54jnmj4kRMfAyLnS8PeqxwjVoHMFE1rDL9coC27MvoppReWsVDSz8Law3hyuDue46qqcGJAKU2khGwbG",
  "key3": "2KSyJNNUe4Kyq911w5NDj6pQTHSn5sP5vmBmgHKKd6yDmoZSzZ2k48CteWagWx9v3QnWVWM5fkw1Wj9ziymgfuwZ",
  "key4": "2kYitby8bkRvA7TUkMAt7BuxEWgeTKFHs9uYYUv5GF4Z94jbkZ9Gi4yGUW4HcLBsfk14NrnX75XWXGgurAstdhn9",
  "key5": "W9WvhdqqSZ3zLv8RJWwb8ZRUdRDq8yZZYzeJfkQnND7EdtuWcMFVCwHF49ExdrzCcj2oHh24hYMYgYgjG1CZDMz",
  "key6": "5wJ6KG56B1RzK3km3xhHX6uk29VwMXUvr3qTJg9ArbK7CAA5sPsqdYiuJPsYwnANzaKcpzHzQeWv5mQZYCb1C54H",
  "key7": "3fVeS8dHkYRW2pSCdocVUbLzawk4g1S16mb8ZntEFANenz1q3R3FrXMM9nQVTLPxw8rwYDpDSy3873g4vgfxian8",
  "key8": "5qMy5djfCVC4cdJsB7Je6uV3a3FLFeAefJT9NCGEL6xhBbZkZob2eDNXeMEoiGYBBZZFqpLLGdYaZqyzAP7z9ZaR",
  "key9": "48d1sHTuVGVWaiAN53vczDBQNHk87FnLeCmfoGrSHgPxZ5EoWZKKaCtJZ13myNshcnpoopfK9VXZeNYxq48UE48M",
  "key10": "4QsTX8vnqeXE37sETK8vW7CR9hYDkBCNRYs4yzn9oGSt8ihP56yG7qpwzPfCmKiZTekyDkWwp1xrZ3fYW9tSfmpf",
  "key11": "2szxoYaTufMS9h3FWb8NSzwk3fPDUv6oqVT8bH14vn9MhRzQCM8B7JaaNRWpTtDpYDgZRAK45b8fD2BWWzHzXxpW",
  "key12": "2tq2kf9aewstSqPeXRzDfd6TtHJj9dGyGvnum44LT3Ere1iugmgYN9L32kCkGP1kkrsL3wLkHbRFShC2GgRdQ4im",
  "key13": "hccNC5Gbziz2GT5365u4Y3LSuiueS35nXwFWnX4D1ZR9SNS1DM5EsYfxmFV5uZ7WweCjbMH8ZDEAraD69bR9vRg",
  "key14": "66HynpsusT1pSCWHqx5tZn7JqgtAnTSgbZt7VfQV4XJpP3wmue7NyJPECueDc6ThNzVNpU7cgcfkXttGgHsNLUcz",
  "key15": "44oymVK1WdbT11Y3EpxyJ7cUGgxPW7PovvAmpprxhBZu6JavLsUVT9dXTC35spBnD7ZFWvn76NbwPTa87F1oBEJ6",
  "key16": "2A2ASk5UGtjrUh98qtnYc2Ayjk5iasCaD6W798LWocpRqywGvBmvT4heDT1Af94PPhVVww1es9Stbe4v1aY8f4EQ",
  "key17": "2U7YUso7HPnX6pW4uKeFCv9DtSdtiURC5SbzqaEuNgLhdBHVpJZvNLRCetA8C78mzQUpnR2pFAQac8Y2hqgU3rPW",
  "key18": "3fDXPWQDuNpS1MCph4uTgEV6W6eRexq3QqgZugaDUrjNkG8LPbTHtLJbBtVt11DeAqFjkLfpaJ7aWQJvrkUXPLg7",
  "key19": "5uP6tF2B7AadTzXpb8nwRsrzke6WfUzZ97ZHaSaWHzU83LfT8PoouN7dH9e3iSiGDb3v4827GoCmpr4zaAxtsTdJ",
  "key20": "4hRpfaTnYdFntur39ZnJJesRS1GcWiA7kn93LpSEbe1BqpoBMevSDQLB2muMAPQEMMqonvUnzfiPEUbD3tgo3mgA",
  "key21": "4LSjT3uzm1ZEovtWTM2Fu2o6XX5yU9WJMaTKJ3uwSieBtsD181xpKFvYp79J21hd9jZJi9dT2UM7ZxHSTM5tPwy4",
  "key22": "2aYVijyyZ5rsqcPqE29wbiFAVXV36bZuphMVVpEiLpJPZb5PEojpHuCxjPVTTd2e5GBoQr4ZTj3ZNmVtzB23wRZ6",
  "key23": "3xf1e4qXpzJC3ib1RDTFgLozmCioL9VLsggHGK6YzPBLCxKsoaxr8dBUvGYEhhqvNhEvdn75ytyzrp25GRugeykC",
  "key24": "XYyDbBe1Hd4t6ckQjtM5NRiGj8egG4HouqyZKfbDNPxBjxLxoMksGeSx689nuQHTQ4qXMLuhAVYhDS83aovbhvf",
  "key25": "497MHwWSZQw9Uib4z6AtnG8jLq98dxWpiwCHSUZU2jFiyAhAeSNM1arajVGnpDGxknDiWfQvhnahiW4Sqk6WcKux",
  "key26": "3Qab5FUrAzSaaXuGayCWWXaJWczkzJkbKbhcgw2XG2Ar4aDzC5ejhr4E7prSFQdsemdJmcSS18MLeiSbWBTk6dp9",
  "key27": "eK8883FB7gHBuERebPcysXCqztgAEM21ZuvzT7b6SDJSrUtXAc24Un6JbiGLnYAwto4KQC44N51SrKc5VKrTySC",
  "key28": "4s4JPba7FgFLTqoh5YYr5P47cXuX3KSuR32cfGbf52ru3CVeNHMuPod4F8aowyyjJdB9bXyqQyemPDHF5bLdaGSD",
  "key29": "2YzKXY7iKrP6qCu8gwxQq7eYyLjdV1Ym11HBvHF6KsSn1vaK7r6pJd6qgWwPDUTewSGtmdj84UrBHiAC2d8g1Hnt",
  "key30": "4wLyRNruxBpKsHVi6BKbP45g1qCaAYRRERtrB7xvMszwCEE75wgd7MapEqPhALfQ8nnRrkXDs7jSdnVyPtSoxAgf",
  "key31": "45oXVDLurvemWeeYKhNGbF1qkCqyjahFz4SURUdLvZVGUNp3q7FSNp1pbZhsvijS31Wv9UqXESJ7grpc4PnuRfhf",
  "key32": "bP48T6fJRNSPMGqXgRbXAK4neq8Uxi7HSbtrKcPpxji6vCtBR8DcRECkGXfJH6Zy4SAksVXScb1ysRVDneZm6QD",
  "key33": "NxZeT3kALb6JcDMoUFAJovzizd2YnBMFhMDvAzeFzbVNV6Lris2udz119zntcAhnE6CyLegqF5JSW3BV9DwJ9K4",
  "key34": "3Hj9iGsjr8VpEKYq5Mrv1pEZqSngH7F6ecdiyqdD8GjvZ8iVfi7Rj3zmSvZbSe1DjscZZJGjQ95FLrWiKkWgiNqj",
  "key35": "4eLCzDh4vFPNMJjyydhwcxQFcVWNrEmZLnhdT11Nnn1XuHoEz2mN3ttc3bR63KMuiC7mWjiYUb9oPQR4FRxEyTtq",
  "key36": "45At2cxByJwkHWSXpQvG1oUg719T2T1ttj2Fz5V6EBUzTdXuMspVWkSryzDvahpK1AwmD9D6UVPnyoDn4BUPoSTv",
  "key37": "2boRje6drjjXEDciR4iMGsucsRniVEJQ3uJ9UTGfKq5ouL9oo5b7BFCkxfKDQVBdD44N2bCzrfEEdA26yVmTdDt5",
  "key38": "3AePDyMiXrDR3NRvNWWyYskEzaTyTEBC9HAGAqk8wpFejZVo86qa7g6x9sKuYqVxXPdTDuqE5fsVLQbXvpfpg2U3",
  "key39": "sXA6Fr9hZrQ2u5HVXqMukrbjFwYrsmrtZfFXPAd14EbfcFyyanAcrVP9E6zXefjbS6UyjVkTbXQUzVM57jwbHuD",
  "key40": "3ByktDBVpVpsjhro4QSqQE1bK9XJWzV2BNihFtPKMaPzxE5k8yv6LFLrfV7ZFs8w3AoW8tXaAC9uSEKRKamYjovN",
  "key41": "SsWKpMHUD5DNw1K1G6XctrQvLoK5CQ5fd1W6jwn6qPYfwm7PY8zFbkc6gfe9qfgVasNx71RuHZB6tmZSWEnnnoz",
  "key42": "ZGZwHZhHXv87NySvzKdyHsKvGdbhjhotK93ZZEKhUsYYv7vvtN2XvsmWNGTeobj3jNsZQDmoCuod9nmboGw7KNS",
  "key43": "5HuPLP7a7aaRmdvW6ojMdzTkVbv1YPkgH99aheTwmPLMXMP3sw6pthHTtJFy9W3Mu1yxiseym4MYHR1p7wz6aHFE",
  "key44": "4uuz8EBtvXqx2qsigMNzxwededsf1gkn6kkeXuHMq7M2x5YMaeoHxQYT2LfCHmzrVLnMEznJw5DN6kGMzaKZUWxJ",
  "key45": "4DaccZ4WLV6ZtXcrd1sMJgWwsNTGwCeHR7Yf8t3uBKALJbfnM6Q4vaaGsrU1Qf37wDcHSfeKvQ6WDAe6fznEUzLa"
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
