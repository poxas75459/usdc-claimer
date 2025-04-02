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
    "2fexEXUemiKygykaTCYM7JFCY3UmfRnhpggUrHtN31rjtxAPBzUSAkw3HF24dH1pmjxHoyuC8qjHpnksH6kF7zvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GhFY8cqTkHR6Ukz6vgbAJrQJsgS4mGLxHtfEx6rphCn5LUTWdDQQKV8wfqLWwEd1TLQgUWqjP3FEVXcYZfKkAoL",
  "key1": "ku5MHcoYRRvv9fzsLqGUEDRA1dfHvib15wVSFKiqNAJefNJx4sP2sfLqa5bZmWQ7gTMFWMabEPE6o9tVH1CsRvv",
  "key2": "3NpBfmHL1dDL57ykdAruJe9G9MBBbTV4966YbRyvqzwbNqLEJwBadWQ7wxDYwn5EZCwUBEjhjfqLD6dHNYncdCNG",
  "key3": "4L7wq7BBPYnw6CzAEcCSjyNofb5gEyGCZ2tMY87FqCaEZKfZq3eyUk9j7cxLGM5mBBvagAVK1ecwr3QMwYbuVuFh",
  "key4": "XKa8VWjEtVDCG9w3bURNnZ51GTubAkGjTk89CJa8kufZeGoaVezrnQmGzzJa4cksJspQT1ZgfWsrKchEQZMwSUW",
  "key5": "3n8BobJhUWabwX52azu9XhDDkskyXMEixxgVPw8MmA2CHM8DzVJz2T3jciR2YtMbUsaK6YyLbc8JN7qA9fSKDxqF",
  "key6": "58ncTpyKuFkdkW6BP4bMGooXF4LbVFhoD8MCUDAV1mCYSSKibFy2J5wcVyjVmfxHgx9tCa5u9iW5BuRYmuQ4EXv2",
  "key7": "3PnQ85PENvdiQYF7kHjKfS4nuew2BKRfeNsvueysHmEqSaNcpyUkCm7ohZJvk2Df2sR9XAyMucDm9tA7TmYu8jYL",
  "key8": "mvK8fW9ba1kmM67S1Dk6iLZ54iFH8aEtgMssRWmP7GNwrrZczTGRGuZXSSxukUrv9S6mzTkpxG21guiT8Vkcux2",
  "key9": "379QgA5saRK4w3mAzHFeUyqo5PDhAoRRNZ1i9cncrj8c1FoDQ9SJRznT4DXeeTMjWtfACqavDDvvT6p2huworWhJ",
  "key10": "4PTESQvGF6xugXPPvwab4JwMhnePpZupV8DMQcqFzzXdgWrAf3DWfZ63bhMdBRn7emTUty7RQfmV5Lc1xuYeY6bk",
  "key11": "ujE85HhNNqUV3mKFKLaQWPsm3ajK2rvDSePANcBCoVdfGvieChTWyk3e75sax2a9rbEwHDmqJsEWgH6V2hUhLBE",
  "key12": "4aT1GxtwzosJg816bBd6bdjEgZZyu42rSMNHMcVC86J3DcsnJWmuVXzW6Pv6NiMbb9b1LCafRFd2uxdbmHN1xwbe",
  "key13": "JxcoWAwcsBeF9msucrXkWshga566U4gVK36B9bAK8xGYEWr8prWPJGWpKYSDWYxm7ER5AbgvuWcWdcbPxzzE9Kk",
  "key14": "2nx6dbFNtQuYdT1txdQ6JoMYTh4zBWc5rE7AWGkn99Dt9NiHxXDaL9rdP46bk3dUMe9KdH5m4ZWUuhrYkscRB9ec",
  "key15": "4kvUdp9dQ8E95hrt1uhh42WnSgt1mi67t4f5tYXDMW5A7KZgnKg3PyrvznhTmaqdERHE19z5ukhYNbCansUqH1vL",
  "key16": "5oXsw4n6wWme7U98DvbdaP966sLnvsKXhiQumcYEtpsMTgNFCXZp1nibZUzJqSRuDsMdAUABk6jpXzfLpLs8ckxq",
  "key17": "2Am6WThB8PU5H2ddqrSnLXagqJMUamxgef9XGCT4X6FjU9vz92nciGNCepEzXQjjkvT5RTysBWeG7knab1Ee5fua",
  "key18": "3DBGkjX7cYLeBw35zNR29dajyAaR7DRgjz7psijyXWt2BUxGjDagQnK2eh9uyXJeSY3bXPZV96qavPcW7BWAvq3a",
  "key19": "33uYmhddRSyi375iPmxGk8g9Wfe3QPKqGfCfv6KfNHoZ66C4uZ9ucddqwZDt2pG9QsXdwq329kg2Huf5afj3BkMs",
  "key20": "4vprsA3R1nKDUUvJniVD8oHDn6pFg9dcGSYLshPd5e7wHbX62ZNj48RkYchVEqYiLGeA1RMEhrkZnrnK8fypmzA7",
  "key21": "3UK7mmxkHiodPAh1RUxabhJfS4BCgLQP6qTKKC8NCNVth5TXEoEveMCW9sG3ewUXTXzPtSGUyqaqf8FRpJjMryst",
  "key22": "55rXz1qvreEn5u9BsH5A8PECzD3QfoV8JoqvUxgHbJSEWELd54QPHSFpkngoATXQZdy9oW32dyHyJryLet8mtxTD",
  "key23": "2YWDdRio9zN7oJSA1S4cZRtxWYAtipPm1GQJn5rpxEPxYyMJwhhQ23gMBcvS4fnVWt8vVSGJh8Hct9x817ay8mRr",
  "key24": "3SG3A9iX2NYwZVwygKYMUYorpzXNtTM7pbYPx9pfRAu1AYPVyxqQ74kACq9nYgg69eKex9eV9YAb92Bdt2bnssBs",
  "key25": "4nUyRecZtJXZmjffRSadF9Bpu6WM7iYht1PyXHsLWQ2RYKcYGURq3LxG3Wfdo6wR3Xmtmj5kQcLdvyufawQ12fHZ",
  "key26": "55Unin7XSbsf7oafwNpvgZ1yPBnLJm1SgMhzhYEt7N4M64qqepgqY3FWUTE6uxexcaEdTDueVnuXFe9GTXQBWqJK",
  "key27": "cfCVqztXxoJUe4evhFZWy5TB9bGG1F6AJGH9q3XVgDEFQeMhaSJevmG4GoQKiQNQJgYZGeLPRUNJFqdjT4TZbAq",
  "key28": "CixJE8miKwvj92cF8tEurFKYJyC5hF4Ep4R1njTMtZkaRU7jtGBDJ4ire9wFXEzPCT6zg4zvvyMXZVzgX4su1Qv",
  "key29": "4Z4mLKEUKaCHuWAJZnMJJWMoU6nFpwrRX4FE58ibPu7aaDtwTKJmt4yadEPZMfZ2DweTSdte2SzuXVqV8vdCCAFd",
  "key30": "2zXVnxBnhGkpCTHqPNM5J1tbNpEUrbzxeVfcHwfEfVhdgWbDWdUKGZks9MNyq2a7YH2VUMNPSqvHKiPjghbgddeh",
  "key31": "4e7kCX9ZeRk44qmFAdQdnUyKoFfz61T2rf2mBweXPS2dbBvfaaPEEn2jNCtrxnMzvigHatti3BWDcQ2qgTixh9q4",
  "key32": "4wiyRZ27kCqmyy9zN4yb1DqLWVy9ocm48bFP3AKHqtZo4zH7Xee1wBZnCgbZqTdRx7oQi6C1aAjg1Ecog6zHbDcp",
  "key33": "2QZEzDp1eeRgDXaummfAUHT4VKvh2K42QTwNUVamBzNy9kE3UcKKcEqD6avggH2a49k1xgdV9BYPeDzcrrr6ZqCn",
  "key34": "3chmyLgvh7JViBWhJrTYbPffJGU78gvW6MkbsRBUYKt8Hpw9eL6NyiELJQfmgcZQAaME1fScmVPB3Kee1rR3E97Z",
  "key35": "67j9Va3ikAZRjtomAMiASN9iDxCEpCF47CtyChD8GbJ9Sd4SyxEXcNh8h9sbpUdNV5ouJErXHPw7wNrpALEK8GRU",
  "key36": "3ncD4K68h71Re2p4vUuRmwvCcaAnK8JcQMbBwDZaMkURJZmP8yKG3QdnLG1c9ycQNwcRCiDHZeX7z5adgwHFvPib",
  "key37": "3cJMaaBFjBRojRBhpZ2ome7uhBeAvAEXLdoNtkvkd25cimY1WXBB6WYHkf4cNbifq6kSwspTZ3zbm1V4q4ziiq4b",
  "key38": "5pUdcZJF8buGQL1yuDY3Tx9oRmd5UU1KfhnmLXf9kBb4vEdpUBEHY5EDJEo84AT8Z1hDR7T4qSHDEG89WXL5rAUH",
  "key39": "gFMmJcueieNktSa1cd6weYVouZi4eg8DG62CLqqJ4yNjuaZ94k8YVExUbrak7uJmbGUW3oMgRUZiuFMVFYjwm8L",
  "key40": "2AHw8Ufsk9hvNJAC6X5mpgBz43Ns8PskjWSFhLs5NNtevTNRYQ7eSMDGntuSbQSjXbDLibXfrJ857a5wtc1A7pGc",
  "key41": "5UGzJXr5Wb6vKr4hYB58X8bTz8131PLYxBBkPxKK2sxaGaKJZqyoA1ALFXp6QXWBTdHudMbU4rep5Lk1UwMLDSPz",
  "key42": "54i2f5gCWzPTxD5C9DftFnfAHewdpo9zjwKuBm1jv8dC2uuAwK4pJdfaRCTs2fQpJA39iaV67nyzMf9qQd7TW6Qo",
  "key43": "54QVDm4NR2zfpY7cX9kv2FsTZUWHcPA2kXgKHZhLaDdpRKuEVJWoVnyQQJVK7mkeHdnHfHj1hLSKeVdfBPgjr12m",
  "key44": "4WwdvidU6FBFV1vHxYCYt3h8y8kJtPEFwHrKndP1psjKpZT1PjEZXx6D8THQPHZANQUjW15XrqeTmL2bxD5z9Z23",
  "key45": "5XgJJPQaMvj1jmd7DnWA2fZA3VgAxMktqKSr68W2WcwKiXS9i1KSg5LyoNNCp7dHQ7XVigeTnv9kKweS8qQRyiEh",
  "key46": "57JNXNYpFuKMxw9RSh3iMXpio2Y3BJdTuiwejVo6hUbjBur99vMFmCTNTLfMBuQf9phqPT59NhECaqPcxNPA7h7Q",
  "key47": "2NcEwMrqyGyHAEDxW71ct6ro8eohMgZ38qzY76edNMPwTsTRgPMfwLReE4vfajtqoeZMhYPDGe1UzzzTgUf7JthB",
  "key48": "66cSCDYuiuvU2xkbszbw2TzGjw9PmQMyEWQru4iGdY8bJZ9g6TSKi3fkGqcPn3SbecmFs6RSR5rSDCRQqnxHbfFS"
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
