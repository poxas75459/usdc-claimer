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
    "Jf3BH8YztRWKpvcYFyyaUBaW2HHmT5my7CnBpzqm1SmXj2Vs2Ru5QfHmGLwv2yxWntGsfi6p7r1rtXiodDAwnNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CnneknvY9iijv1hAA4466W7Ye12Jv8wbwhCPgGfCV7S3wQVh3E2rENyfuJ9n7LVt5JTAvAxK7YQfY49B3nkVxXb",
  "key1": "5nZjdSSbwU2fUBUSy1TCF3xeDqbASMsUxN4zRpZJr3R3ReXsqVtU7aMXyc55Fn8YfGCDJuAkeisuZCW6rrV9Qx1T",
  "key2": "5hgEk8gmxdEayeYYVZkhKXLDvTf7KrGHyjF6EzjZ8C4niASTuxnJzrANM79S7zEkLKtNYWpQyr2pA1NsAqngEx2E",
  "key3": "2pg6Ygxabt5mY6jsAwZ1LSbhfYuAmM6iQu8TJy86NGNUDbLhHuN8sAkt3MfrjA1cuYJsSgiihpRAXbnV4v5zmpq",
  "key4": "3ZsRXun5tY4VKXhhb74onKu4w9pFSVLGquwLo7A2Q6GcgyvrojYnPtJowQryqXk7vsgA6sL6t4KieoYZLLaBtzMh",
  "key5": "3ErVpr6Te8UHN8ZfWMAxhLZBmyrUJZkByJEVaiE1PJcgvA41p6pu1WCARLg1hTmKUhxfbxvFwdfmna5ydTnmqYNT",
  "key6": "4Z5PVVpx9xxKRUs1QthiutTeBKKcXaPbrmxpcDTB3s29BsSEVstJ8DKMeiDvZRWBFdjeTREGpP5bxDZAjywPA9Y3",
  "key7": "2vdSqYzarFrqVVyW6fxi4hfuN5WttmY7eeKjv6h7SGKLrVwNmGncTgcL1Ve9qCdQcXEDKVy4VRQQSipqbSJjnU6P",
  "key8": "3yJDbVPErJh7ueHezNBhY8EW8JuNYjeoEuJ2ELczdK83mgaKu2NuMQJ69zxyMYs8FJJdKjTu8AwVJfgej54hHz6f",
  "key9": "5cf9wfkZK7XC8YYNpmS7yasu6nrsF21yGg9hq2UHG3WJJFqcdjitSYAKR95RQUzGRuQXjJnrGqgRtFAvH8kYHrCQ",
  "key10": "493MYFeAwhVRtaEwkJt46eDYyur2KNYvNNNCp6UCcpGTfq8czbZxmm36bGqRiMP3k5rfQL56psZeuXfwTeVG2ns",
  "key11": "3ZkBJMMuzU1CAx4idW8tAwGixSVdGbgQKbRRqQuvDrj1sWw5TPJ2P5QNKgpZiUmHiJbC71tvhcxmeCtZkpdzKuSY",
  "key12": "3jiJBgsSSTF7s4uv88DL5DWvwBWk8PT6G95F55oUBwWMYgPoLaP4472fbCFFUuibnNAofmo5MMHw4Y5UmtmMSQuy",
  "key13": "5WyRfeNywfztpnpS6kNVWdDyXzhcs21JBtff96JnfpnCXF69YCVupoYagtDza4cxDVeLDZZLNRo8ht1diWdfj1PR",
  "key14": "5qsYWgZt5WKBpmGSSD2cHYVvWgBzVeKic5JNmCsiaKBisnzyiW98vXChtteH8R1MuHGYUqjxuJgUjbtqzjrRRQPS",
  "key15": "62a2EQqPQ2GqrT8mzkkk1LTkZyXRK5AAt4BPwkVtJNXr15kmQ27BCkjqmqqLCRmw2YVSLLtNNSdn3mVbWi4VGY8y",
  "key16": "U6ksGiu8bdbi4VQGrTvmnrsLaVuksWsQ5bWeJadw4z7P1Z6xbsPQrK6db8LbH7Crob6So6Gcrmry2eW29utNsw3",
  "key17": "EzWGFU6vggjYZWgTJz56LmaGwvyKDjGdLqAbPwT7AUaKeA6jcmJ9JVQ9RYg1y8a7LCa5yvnCw141xzyKuj5uQiy",
  "key18": "4yEuxLnZQw8p1BqFAUUguWQDuwx9yAkVciLiMSYVc4sNRxzbTJRZM15wijN4jE3wC4dqUX8BjsUfpodpRRjCySKj",
  "key19": "3XrMzbcZ9dGg1x3H1ssSyedYiMB2U3JSfdHh5usNCVAaryq8bUMzssMFVnr7NjgzWd3xBnGxEWvW1AqZV1zkZ798",
  "key20": "PgeHprZkBbrjikSY2xkLE8yX9jpmrmkotPn1bd3pcXHSYBQVJxCY5BQrczQZiCyCXco9PGXggg9dFP4uw1xg81h",
  "key21": "5aH6CRnHVRUvT5yPoQ7uKdRcH2TCpweyQ5K8cUQ2KG227tBtguUWde5Ct7dsFACWipBtZba4rZyztokU7qek6n5m",
  "key22": "3BDvbPVRYHriZ5YBCYcBsLAZKvcBxukwfheAUWb5i3ZmeMY3mzskFcBEEfsWDsvBf2RakSw7UAsboH3tnD4FS1Qh",
  "key23": "5MLmthhbYgSwucWcK4u57fmxURPiVuZ1usReBTmJKoDY9LivKkh9zBcocc1xaUGbxFP1ALAFBpr8LBDDbhB31BhX",
  "key24": "4KKuicvemDCianfX5fPU6XDr4EKqUdnmEikBgiiWe75jve1tHJHKvcP1pKN2USkK4S536gF756cE9cvzEncZmL4p",
  "key25": "5K9kA2UsFRUJux9K6LHFKeQED1muoBqP3cBhjQtspP4CyaopSts1dNrQqRCAPvkYSWYumHXdBaXkkPbeB2sa1vc4",
  "key26": "3ZKZwHaNvqtNQLNpQMCB5qaAjh2bT827TUcmzkut9QskgNNB9jiVx3XPv5tKbTAkhJ2g7fZccAa4XgJnYwUa7N6b",
  "key27": "4FM1VMube48acq5URXoTsjX1P3Tn6yJXyJhAiSt2XE9VgLBeyLTsSPzgva2aRuJzp14ENZUdPXy4N4dkgwc61Csu",
  "key28": "5i33RmjQ3vDCdVKiKdYSASXb2h3mRwj3bRmXNNx99fy6ioruDseUnQkPfVMn4XtUi6nRbYTH4ZRwE6KrEKG2hbAQ",
  "key29": "3f8gNVxtbkeeoKpokqiCLcv7fagqpoH9UXTmVg1pMdZE9DkoukkTXmCsKx7kYGHyxiNoPfENAWpd11ixi42PKTbj",
  "key30": "rTg1JmtY3UHR1BQofPbAjETrZiLUazfb9eH8nXtrWfy9PenebHMNyX1Ts4PctZ5NuwJCzALCgaC36f1dDkxtCni",
  "key31": "zbLK9Q6cXAXYiKcukCTxcANyxSM5xNngf7fiqGzUwAUKBPgKTG9NWHf2pKNktiFSBCxq4QawVtHd9RH2FC2NRWQ",
  "key32": "35vuVKDENjWvR6p5RXkzTJmqnoY1sTaP6z7QrG8KZdi2RQLVB7EgFowtnUUpGBBm5DcW3tHe7tkcwajg2tnJgwRm",
  "key33": "2pQkSh4X4gDKNhtF9TU3wbH9TEfPqzF4bv1WjSNfs57LJjAxWmDH4xx9mU1mU9EUwequCnvobRqPcKDLh4dTSBJd",
  "key34": "2vWuE7q6cHwn32YDXmQ26b6YfhWBp2V7knZJSzM7451UYfCEQF2vhsbjs4AVLXafDpf6xi1WV7ntJV1esHyp55Dd",
  "key35": "3C87GYjJ7nzRPTdKZFQtcdivSGyLz1deiepzSi6RpNCfevQTKt3jjbakbD9jEXQUFXQzxCKs8EqpC5rhPJWdWpDn",
  "key36": "tjWoy8CDNtRT7ynkByXmWQzg4fydz8tJdrHexWsSnTmJpTdJx7JTzUbHF5rs9KhgXVupuSVPDhECsX2JDkU3kJ3",
  "key37": "4Wd5mzp3cwawru5UK2qGw13hvxCc4A8ShTsrVwzj9EsvGLFH6ZWW4RmdxmRmUKoHwxpJcBneU8MHcdvkNKAzejMZ",
  "key38": "4buG6dFH8Hq1a3jtNqAtEaMHkSK3XL1V3YtGq5RDaAoHKiU4i9WKtzn2WoMYVUBVG55dqCBqwWBuvPeYHsdT7oR7",
  "key39": "4mLhS8jne9YdiXaxPAjxcPgDmGBei7i1rTNBpFphejKpS71uxd9rPd12vUsT1L7E6sLjgGtUdyUj1ARW2Jn3zirM",
  "key40": "FUAqMCsjZNpX73PpG6ubsGnCzEZicVrGy1wpToPUNSHUCnWqTrRCrFpK7uNXX8UE2Rym2ChBDcLPP5fKLFiCeo8",
  "key41": "6jqEwMRJJmbsEHsqr18vD6KsoPJxq6czsgYW3mJZQb49DnifTaZfzvCULPtGbRUYSvGXEJyMgBQ89rsS3p5RyZy",
  "key42": "2UHBzbybkm4MG6xB37adn9pZsmnBBpnEqrVZrShtn3t87pDBQJk42rUKfTE9og4RBgGBnY61dGFpmA5oY6xGU1JG",
  "key43": "66U7wACqNUu2TGDmMeyUvzw41mrykWqjDtATbiESAbafkRqTS5D7XGJ9mNfjrbvxWa2JjDxRAQEnSqmxbC2Ee79n"
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
