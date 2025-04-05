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
    "4XMJ7nx623bLHf4FCeTjaxxiiAzjEGzhd9N1WJt7b4MUoCXEGD86DZ5R5hcaXDC6i7UtBbxP2MptJcm67TTQAewf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f6Q3NJMQMpcYtVP3jD8cg3cSbPDeKeCumB93zhbfF4jjdugZwwov7tJZQwGyhPrK685iQXChugUjC37ARTZtpeA",
  "key1": "26ejwLsaW6G2GXX4YxS8qdRZwTmXTrHViUP9GcRvKPcV1XxTAHWbRpQvmf6hSewd6enVCUpwfXXB7EKafBgxr36x",
  "key2": "S4bWW4TG1NwZ2VrKGfLFibosKJqjMB5aV24M5MNhK6Xdzk2xGZFDz9VQZ1UYMd353PDnYBXv4fgmKrzrUnty1qp",
  "key3": "6z2CED3BKikwTGXuGRUHJhVKVzUx2tacBryUfDsGU7xkAqGhgWshAiXXxE3oCqb9uWa2dXAKuV2ddLZkCs1iBr6",
  "key4": "5k3yyjWTnt3SozYS7WaRnMtQM6KuvQe2uqyXwpBg6t8V4usUyRRM5EEx9H7p1qNuSqmYqXfuPEM6kUgiRDgyXh9Q",
  "key5": "36gTxtc6XhDDz2jb9ezbmyFtKuQTQCbTSeY5WS9uGQJZ5Zz2x8s7LSJC3pkHWxDsYoDq1mHQ3RpTSycKjwr69hTe",
  "key6": "33X4wa3b9DS1qguBwYb7NWB3V1tMteuuFyBVjitctZkgENzfxqRqXA5shd9jG61xemthAwSF9omQJzSuuzZcP3MT",
  "key7": "A6R5vd6hSmuzFHaznKQCassHQ8zPGSSvdvQYS64aYrWHjUhcUk8B3UdDDKRUqFLYcr5DZhZwLW4hQ3e5EKsswgE",
  "key8": "2RHgAFNgr7LaHdirQ56DjwiGMT99TuCzihLwkycCGt9brkPcgEVe5fex54x9vHhxpMrDwi6hR3FmHjzC7f3HBo7N",
  "key9": "PPsiH3JHHgXQkgvhgn9CXUZfpMJcAnHw2y2zwcF9Ugo4uAoDKC8qcuFHVapnCoL15mQzWgWtR5EsqxfGuGkFuHW",
  "key10": "4tLhmb8nmwpKBZazsvt7gTzQSUJmmS5adYooi9gKSZSkBYuqZSDL6R61FyXQw9hBP9sDTpsrmJGAYGhVnnoVTepT",
  "key11": "5vkzG7rFMgVxNjdWWPVvhDrFnHTPgzRQ5Xqpm5cLQqMV79DTAtpK6menL8qYJJXpGbTcC6ZgoTL41QzjfPuw8cVH",
  "key12": "3TXwuoefn2yRNYLMNA6ZbjDjZVbwCD7R1qw2PawujyshWhJhrX8vrVzLgjyuvWkPiawvWiTMCXEHespnDg4WXQhc",
  "key13": "371FZsbCsSR5MCpMcFToZ1MsKHy3CzmNdkERNM6oBLk2SE1kH8ZiHGkst9EYWaB51ewtdHLN6CDPjjovhJfJPDqz",
  "key14": "4MbUBzn7u1RgkbiHerWVuNuYT4kbgNjmrCaUSPwgAHtdG9F3ma1TXrEqqQwXHmtZnT8Na35gJYgyvkeN3Qd2zcjg",
  "key15": "2vdYhin9HQjFC4z5bHPTDH4Gpta7TN83EswKH1f3XazicLEvhRS2p76zNSCdVdA2b5jhJ3pkDbpCxPGSq1bZx4iX",
  "key16": "izWYF5ns435py1fo6ErpKQNwUHP8KKraY828qPZDhcSZoMdDCXamnTTwEjnDDW26PkHABN731HgZiF2gGwP55CA",
  "key17": "2N29a8rVvPK9JSrvG7VdsWsbNxykNghRAG2XnUd1gwTJCyqBkzsDLYoH89feUXM1Bo72oGgTYreYDCRg2Gbt5Let",
  "key18": "5mJaL1acL53PqU1AEStJmNA5hFxtteaNFgoWEXcaJfnvLKFFJ8vhVLDutkbqdhSsKqrqjRqcTUjywwcYC84Aqnp2",
  "key19": "3L3RVf25qT8DFWcNSBARC13HqPuHkgRw6ishtXKSbA5Ztjfs7CLC8QrUeuTHZVsjZJHYg9gE7q8DVZj2eefe9k28",
  "key20": "5eSKhujfucB6y5A2tNCWcvNFjkwmgUErpzPnV8a28hFmH2BRaa7WcmcbFYz21JgtKE2vMeRxt8xgfgXfo6WhzQuz",
  "key21": "65KavTQqY1wT6RYQpkP8wev2GT3bbUEy4iKDVNfWnvDkNhb2Lhi8gskFp5hHpSrSm4eAiKuXNEgfQGq9PQq5Fszz",
  "key22": "3ZpsLvsXS557PihpwJL2jyVynFeWqL9gNbkupGCUaXjzi38X18zk3Wc1pCoWyW9yokeFgR1P2xBR9JhXsLwzTUGy",
  "key23": "2LJvJzCQj1SzHjL6AuJwCGytErcWT2rYYruKjaV6uzU9LBVDLPCNdsZFN2UKuRYEnPdAqPYm3P1PNN6fc54Wzh9G",
  "key24": "2rMpHza2ZKC5ED2H1v2JGMnaatkAUjoj7RQ4rggnJFyCiSMEEpsntPdFkvWuQdmbWvE9RdXPhNmxTsBUXo6jjRdz",
  "key25": "55Msv9paUz9P34Fwo7SH8wqrHqyaTbDU6vy1qEVjbLHVN8ac8TJ1JLbYzbeCmYR4BxYMrZDp4r1Ei2NS1sdE3DX8",
  "key26": "3UQ43NnVJADj3YWUQXv2grWmi3J9ho4UV2pUQbqJYyvgdanf1geXPk9AvvefweqEDUQe6HbfwYCh9ov5uwyCrrzH",
  "key27": "4V6Tfd3Vuvv2xMPUjwrPFNobATgtXT3gQn6goXDwR8BqkZmVKa1Y3eoQpw6ceE81pxijyypB1gFJcYYAhwzTsZoz",
  "key28": "2Tb22AcygFkDmH4EP22QMoGKBZLZjzD1ujpRReq9uyR3HytNd2mnL56S4edUEt7XBxnJq2wgsXV7KZxVTMg6Ts3K",
  "key29": "2iafDuHxiYkMdaxkUYNEgpbftnygyvk5bwn9PTSJeGK2RKLxn9e4VWZbH6ChtVJVm8RDMLwRN1ucdMpQ6fi5TUwK",
  "key30": "bVap4TfR4DttusvJu9JC3vhwfDB3JwjKpzXv8SNr92sVjYJQTt6LPEKYkSXThvbHGULrvL8ufSnnzQAvGiguuEV",
  "key31": "3t82kYzXWmom1kGAhgmdeo4njY7xAGKm575p89NmV16q5wC1wM6XUwbYEgSkwEUAXRacfrAVjFjbR71HoHqBQMgp",
  "key32": "5q98ymKGWG69csc7zCZ62dEybbu8PkrLwrX99YkKkBkgMKzBGSdzJURj9V7pWpWQZvDEagYsbJVZjQYtMmhe3Bx8",
  "key33": "38vwuYvu1nkN4JvKJKaEygapaPducWSpj4FHSVna8J7TNBGWv2NduzCxjHbDjjBmPsC7McnFMX5gh9yKWeMZXU9M",
  "key34": "4RJ5KYEMmHm5vM5KuBtnxsrRpw2EwJTozjqTEFy5437eSsRweXzppwrkA9rckzFhS9MufEFrrvprtpZiJKxmGTut",
  "key35": "3HUkEPg4tm8jrZnzTqkX3SfSnT1G7jWPoeFoX3RaeZhDB7uc5KCEEpTCQDk2mfutZhTpCUR7vqeSe5fNC14rVrCc",
  "key36": "5syyk3riairDHNLbhtgrqCv1JuXk5vrfMG3MBxGSJgiZkt39JU8sGBiPznUrpD4uPdGPQrhbHkjpEQT2Gh3juBhs",
  "key37": "4dSGaLMFmSJrm8rvgCaqaagqyicaboWgB2pdK1wmY6kXN654ZrKmKZT72ZUmAHnerK1NxhASWzoYho4iSSqADi1n",
  "key38": "2wU3sSkEexn9bfaZWVkkYc2Lk6WbVczxZ8n5C1ofck99d8cSeMDk2rdAHg9xGS1VuAZad993k1kBLUsATmmfc99D"
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
