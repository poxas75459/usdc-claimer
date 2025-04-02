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
    "2fHLwsme84aryy8R2Ga7sGjPjMen2kLjGZGoGvSKLA23gP2GuaJb5BtXrtkq34SZM7jDhAJpw1ivGmbRQDZ6YqAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KBqZFPQmQuAGb2doDDF4WUhJfkjcRV3XJr2k8chKT3fdoqvzkeij9a2kK7UNavnxToMkhJJNPfGtSGtWGtrFoz6",
  "key1": "4cjcsiK8QTyRV2131FrN67Tr5hLkrsbUqqzf6gNUzWR8qBWGM2CD28sbABcgHqUqpaLPEQz92X36L9MosXfSatF9",
  "key2": "2hQjvsUuzyKJnkkhD6w2f7RuUxkAEkworSmDCxLpZVfEJF9eXEksAkL6oGaxz1RhG4L23QdCeD49kmhi1bZ9kPj8",
  "key3": "4G4FBs97fcb2S9KAx9hCgHXAAudUi1yQJbxemS8huk8b7Ht1nirKuvQosNvkbe5Y6pzBoacZRMhnVE7FWCqdK52U",
  "key4": "2jVUNepVZfBSmhrNRdTD5rQC3LR3iBHHTn4NUiEcSsziqEh5ynH3rdBGeeF5nHPqsAjkFeVwZUQjCfGwAQiZTyEi",
  "key5": "2mEqTKc69Q3VV5T3VMyYehVGNxh6TURo9BndwweRNtjkE63v7WUEpy92hmgY1pYfp1e9JgZU9BKmCZjugV6hmR5z",
  "key6": "5FaJSa5NvuWkiepDg92GWB3RJkXUwK2kpchQ6DVqGALEjeFWwqHBVeubuZo8PwgidgGqAfLUU3RxDcG5rAiRtowj",
  "key7": "2MnehaVWPQZc4fY1ekkLj7xYdwUcmJZEyR5guuEytigwvMZi2qBZy2sjbNo9LzFrGTRSd7zKBSQ2QR8qprpvkLBW",
  "key8": "4mfHMknAT9h4zHWYnkx2B3qKsvS2EcSM1MjGyoCtFgup5mEbszQ4a9ecjrZso6Efrr2qfqVsdCELoPyeijeceHuy",
  "key9": "5tU8sbJkCctfEZrb825cgQiBnAK7dBU9JqstA2ZN9QpwTeR8YHKV37Hnb3AbgTWm3Cy61i7A3dc5M5BpAExNP6qU",
  "key10": "5skKbQBhRbsUHBr7HXyhXT6z5RCmWxsMrTrCUVJQB5UVyxxVTKry2XZ2FZmobB198tRRAmeUfoGhmMuwspXoRuPZ",
  "key11": "37DaiDgW23T4XSgFdR2SNTN3UC3x4kJNaMjrDigoBTitwhVfmSBNuvzW69AWDsRW1CaJNX7StnP7BX5JgaeJw8pu",
  "key12": "3UWGzGUat1ozbogdyybzLJSM9vtKi9CLW7efvzFgFyfTvjr1c3VGNzwcoSRKfpXsk6aKjAZRDnZN8VuTdgx8DzGn",
  "key13": "2Dnt6jcL7J86r2fwpL641awoiYPefPaP24DGVPTL9T7umhiFypXnBbZ4wGY5kEXJvSHTZpDFGrgoi45fJN46qXWE",
  "key14": "21SBX1rrTDVwzJDPmyk822X22c3usivg1YAJ7Zo8TLq9EXxtC5orCdf62pYD1aJnUhGYQ1q5MZEvpmA23UPsUfzA",
  "key15": "W2gKhQoYMGoRZyhofE3TjSzrmQAg1Rut7jEjHa7QJM8utWyCpAKi7aSV2ifMmU7NwuEZ9rELrDrjyWsn8apwE7R",
  "key16": "4Vwd7j7iGqd8WzHkasA5donTi3VMxdK4H1wvS4jeApy6LmBtm6X3VGsLHD1F5UxQrZH6zdpLaHY2nBUZ31LGA9au",
  "key17": "3ChQTmt65qNmSyX7Kfjbv8FKREMtCAccA9GviAnKYHAkKMwxdgjW8o4Wmk7ZRsstgR5iF3nXnJT7EJPavPg8cXWp",
  "key18": "5xRLdgfc4hSMJZAFViSa1EvHwRfzJ9ojCzGftReFngqgPq7Yi8QTZxicvCxFm5ieM2bssGtChQDgDPo836CS6E2N",
  "key19": "B6f46Xe15w2KCoGmhjXLVbFgzECeH7hKCfEujJW9axvx5UVQo7TYMvww6nPHz2hUmKJ2Kzht5Lsdr3H1R9TBoG3",
  "key20": "4m9p7beo6hrWEUiDeRFcdoWz7bk7oEN3uJHCQnLeBAXuj64J57TkzdmPert1P75CfBdKgLHuSzx7kyt5EsxCR6gp",
  "key21": "2wfNHG7xrXeLZUrtvTmiLPF9nakUm7Cx4maEE7Goc5PPWqnH8M9TT75cZT66Xwn8NgkY9PZ4AUn7fRZuyGHBcYf6",
  "key22": "33xpDTGDCphHuUayDRqXDTwQrjzaEMMHZGTUsp6fjg1F1jsbrdcra1uJ8M7QQbarYAK6YEreHMfJSJsscYfA2daS",
  "key23": "7v6HrncWmuirTJYCYu3jWPmQ9boXyy5vspMXsNCpUUp98nRpEUEP61mL8RoMf2isJr36XzCTzC9UdV6WKifvozT",
  "key24": "mCYCMEkXcvgBzbr9eXxhhrTP3MmZjg1McSQouVB4woWQwnEM3sdUMUC8tCfvGxPt6s8EqGapQwV7fC3vhqDuL69",
  "key25": "35dUjcT55G96CEjtkMbeTZQAQdni3btN817hBVoen41UMKWtaVyRFQ3GWkKY5GWthv2vx3jjnaatW1qZq8H3RrB8",
  "key26": "4FSFwLTf4pYEDL46u9WK9G4ZgZamPnso8PyCnJXhpAcXQFhF6vGUsqH9DkU8jiEkXgTa5CQZHdJcYeJVnYnGpf79",
  "key27": "5L4job8atQ2DgYAsH6wjK9wbsytj28pkhoGGmKWZ2m6hCSXnJAEeHUSXf6yS1Zw1AEKjSi1ULofartJzg79i5Zmh",
  "key28": "2dZAvSgvMPRCNT8sMSWnepk5FNnaBMJ52MSaVLpMLTCZgbEEqzW4rBapyaN65cFkAfrLs89G4Xef1wgSDgBJgpB9",
  "key29": "3Q4W97iJa3zv7K3yWQFAoLATM8i2N2oDeuTU7Cxcis93ghxsHYdFo6HUqpW6Sn8nwR9GcJydrt7sxPv6tEZEUt8c",
  "key30": "DRa347ZYV697vfYt97fqcKUkXMc3HHeLPwvx1BZN8NRqe2pfspmKRhmzT81SgCEywYzyU5cYw7yMzd1gnPQMubS",
  "key31": "oaqsDPSiKoW7VEzvwqRjrVsjATJLFZHrBeUQ3UpEZGkeMWFBq2zbRcXpLsYpDdV2GJ5ULCNJjvnnGYinyBy7Moi",
  "key32": "2oKFSfs27vQVZX7eMnqpj27NTKx9o6JKTgKedPQwnuKQLegHA3jASFemNV5BtWFKUzyb5fxn1wMLMm62AriQhkLi",
  "key33": "4AwQnGwinAs17r6vXoqUfMYXHw2BBnyKYH4hV3f4iWiJ9aj5EeTU3BGh4yg7oDK1RRG59AaSamAoS1wveFS8pufW",
  "key34": "5LZWGHWLu1ku4AUCwdyc8YiRxNT7wtqjSStMCUnN4xRxS9LQZUTNh4TiriFEdBycMQxwPsFmVRyQdKYd4JuBBZZg",
  "key35": "5feM1JiJw4eUizJBr4mqVrq99dK9YGYewLehjPcEvj9qL44oj1XvgbC11M1JzEd7GENAqyrgSeP3MZDqwaaPvmgY",
  "key36": "3q916KYJwGXKG7KteC7MBbtoJGEpRYaacFrhyMhgQ2yweeSUWL6JMrA5Bc7prdM5JRpsKun7jr3UAJEbXk44GgKz",
  "key37": "3rgAabi9fsxX7iQ7mUZadMEDaDmULvhpDNs5Yg68WWSUEAVBAhRDqKnSExA3Pe87uy5D9FpQJyw1Zf5z3kQsMCgn",
  "key38": "9VxxcJNyw49s2oSH6AUVg3W6XatueL3kAurZi13yW9TwEYCyTjbaFJih2yiMmLe6qFGvCNyzrEB7xfvNs2VF6vY",
  "key39": "4JFArhToTZu8XtZARuuduL3DP5bcVL41Kz67t2YYYZEkvKHbwmbQDAVak68ZFwfuDUu2FTTZUzL3SJ8mtfnah3vr",
  "key40": "4h5ZYi1wADgmz1qvp6prKc86SBgwbuy5n8cAoyJKWeQf88x9hfpquVw9QNCG32EDrJtnFiuSXvWPEbJ5ghzhzhRL",
  "key41": "3JbeKoXM3WVreCT9Gom47HwDprg8footr8mTnA6WyGe8T5GWRuSUhajdnnDA5Xa59wKQEUazbMgiPwVAtTuLoceX",
  "key42": "FXiUJyoAAPYy11FGWWviUv5yfiWxAdSfCsba41Mv6NXN9qJzptMrEdXdTKAqCfgzGgTabU8oiEM5kFZmRHzyLXF",
  "key43": "5E1crbhsBMCHDEoVUezvk8qhuUSpqPUdwkkA9mA7Umr2mY6KgGrHJo5APK5RN4D6an71BFg2QVpNzQf7sX8GzVPH"
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
