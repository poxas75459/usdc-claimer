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
    "2igwXFKxtXSTiuHVrQpjMKbQ8qnQNCAbPzSRMJQsBKGb9JHawmJwjkaEXA3xruViCwEVHubADZ6jn1e6uKCmzwFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uszHwqvMNxDQwsMtKngQuRYfn9ssHyPwXMPCHrLPoUZvtNQgkf7frS3D33MsXQk6SP9VFYjGXsY7s21sHye32Ag",
  "key1": "3sTZxCuz9mtoVunHZDNdh6VDnV5Cug7TxgZjiEi1R27poKLFhU7wh7xJgmuErtqtCbRw3XWF4C91d4x6my8o7KYJ",
  "key2": "5itGzBJeuRdNCiKj3yx7ZEJCfjuGmAVqwWQLcQAuVfbtsihocnpKHycXFhQcsoQsoB25vqf24PQXSKJijnVTBsw1",
  "key3": "3UUikuDnJGFtmLMhUt4KhFKm8oQPwvFcffy5tjKGHUjn1oSzjERohRmH1FQRyj2UDjko91nCmEiUQHUUKzNJGN6k",
  "key4": "kzQWrDzCdeFw49p8sKDkCk159y42vzgM7furKSDhKKgtDc5xdx4itYqvQbqs46NmqSs7XpaHyXesDzCJBeBXUFY",
  "key5": "29M9ypMSTSAARVuqqFXtrGHb8wCXZGbdPGeS5aZiVNawcrUHiSzFwKq8YHBkriqUmzhQLG7QDNJznyGWB7NrieQv",
  "key6": "2hwEt7XL6aWtnh1WpSvRBikpxrQ8dMgpiSj9rxbz9Za5yr3tWZe3sFPLgvskn7PKiANZ9ASr5NbewcCa2rzmTAjf",
  "key7": "3CrvtXSAoBUWMFDDkMvBUNB1xd1MUikS3NbbxoPcfrv6JtT3TB2EZQvf3xVaLKUc62bUAyLycFDWuf5PzccuB8WG",
  "key8": "2sPL1PrNYpNEdNymxydgqD9rWoJPWUnyU82UZHU3oAqEiqoTK6H7NrM5tNgmR6hgPqvHBHYwnBeSNmeBBpWUrxvr",
  "key9": "5LiQo8hwh9eoBdomdatDNHWNzmdzZn1y3oN85hAxnT1d1cLJbnmQEEtmi4mQy9c2jEvdNef1bDs8iqJcEzHyDWFd",
  "key10": "3ww5APGgWU6CtCoE6kperaVjtHLCeHwY4DUeBAsWSuzJnenXR1xRyDnXbmGwbZpNRdi6BwzGAfBGG21DixgWctDs",
  "key11": "44HCxQxbosJCtbiN2NmfwDBb8fcShDfSNsfHsy6jZhde9spbr3kcem1jWLZQ7wbUc2iA7DZ4Vu8QxAbbzHyf77dU",
  "key12": "5JmC3LskEJq3VTHmgVD7egxHFPhmqPPrdwTBVEDpnQs13v72tc7o5q1cns86ysvmudkJYeV2cSG4gF7YYqnrzTuD",
  "key13": "46xF4zgaWtbw8DaBHgRM5t4Yf7apKV55CTQWLA6bfgvt9Eeqh3wUBEyV17a4UCH4c8HZ56Uvq2iqsjU32hs7L7rZ",
  "key14": "3MpdEJuQwoQUWznN4FF7R7U3FWqk7ubrxYqnVhdW7ojF66KdSUnEJYrJSshLN7qhvgpRVt7SmZVvv9keVHBvW65s",
  "key15": "5r2oSDKhv1G6zvaMUDx9ZrKKvF3bv7n9nsDpBSdo4Maeco7VXkZJfhqcWVsgZAgENXdSPNzo6ffsUEksJzVeoWBH",
  "key16": "2WKmVfAiiApTAdKe3oDST7mdHQqvZZW6iy3JnSAVLUJRmaD4o6RLjRBkQQvF37AGvF7k2B4q4Q1eKACtmCtJEDdu",
  "key17": "56vf3RwYZvJKUrF7bFscUkBuyZxiCWjW7MVRpviX6HmKNnCzKSoKGeRcfQmRvFjXZnspNkSuN6J1G8tREFdYh1YS",
  "key18": "4iM9mkbz5cuz99rMZNZbhrocLrbooQ8BcTJDqeKY73DyUXoWRsTtJLFS4kWkWj7L71aew8gPd4DMsE1BykpsFAYq",
  "key19": "2bD9b68XCAisMViGzNNLqDhVazpfy7FSZfAknXsSUmEP5gnJPhxiD1X4FyFzAbwWVKHjbRZRM67YVnFNqaCYSA45",
  "key20": "kxJLvjhvdR6m2GJWMrKpFaHQxRdrr8jDFE5AmZg4LpamjboAHmwjnoYGaPkeQbMU4Mufq9eHRDi6PpBLVGnQP1M",
  "key21": "2rcx1bG8JEHd8HX6371J2Bz4JEfcBBqehXGTaGCc6bJLRmwr8KofRAGkQieBLuJ4JXAf3eD4jNhzgQuxi4VK5CRr",
  "key22": "469JkEBwMbAfCSotspa2XBjpS6Gxg5TyDZWqiov6hvDuiDzsBTcBwxh31XReusyHtsKMxAXcucNkGgwcrq5K2msQ",
  "key23": "4jC4wCpQ6YPa2gSAXTE3rYPDpjfw5tvkSeY7542MMN6CXP8mA6Y4JVUZBEesyrR97pzMWyrGDyNFW8rBsT9p8whJ",
  "key24": "3xp9Ug6G926JVFiMFZA3cm8JbEdvs7qcWoZbsyDqSFsDqMjAUdd9K77LSEH4Udxi4WoVoXD5fjgbkKpsZ1U2ELqV",
  "key25": "3gFz9TzHAzsfaGXaCKsfGLXPLoRzyMqN7Dfy4m5TaTmBdN76AmajnsC3T4RRayFfGPifGUtsvnQrtWdguHVVC5Yg",
  "key26": "48885jymzkHQytYrXTYH9HvqHTyL339CF48pVRVUJzxu2agYrTLQwuqc9dYBuHTdrjCkurthUJJUxFoZLgpfgors",
  "key27": "3rDBofoqy9dheydrbGYhDuitTYekn3yYidqK3XYUmpaZXQJHTw12EuvqVYFdKVUC8KP7Sp4Miadww7waESmcXELh",
  "key28": "5cwncheVPHhHzXrcyLCrXLgjr2Tg5XmcifumLfSTvbvk5D34HiFhFDQiVbCtKJuV4SGRpHt3EbYEapwupGHJ6HnJ",
  "key29": "45WzK69RfAwR9UbkgFaRLmU2imG1UgKjRJGHbDb46wt5ouaChrP1kBEFKVhcfyTsoquoGxbd6xeGvEe1FX43dUP5",
  "key30": "3ZuPzK3NuFKvuEiikuG7UaLPbdt1KR9h3ZX8YvUf5fhCU9TbCQiCL22krqPySJEq7aSHWid1bG2GE6keMs8vzwMa",
  "key31": "61JrfcsYGEFvQtLi7rhWr5nzKAF3CZrLShiiyrAP4NhULU3qj69BUDRyCdwfepyHykTj5YqWbAAS35r1HScM7MAm",
  "key32": "5wqiws2yj7zVZXA22T1oCzF3kMMd4sw7XNfavuGGELc3mUa6AC8PpeD8Y4sbpCVRj1Ww5YSCscGpeNwSvKyyPR6",
  "key33": "5Ejskahju9HLyfxy5edmB9W6vFEvpGGS3xWwHQAZ3aWNasVA16QHqgWvnHi41bXdQWth7cssTgyhr3yAKwkqB5FS",
  "key34": "51uxvgkz9ZphqPL3M6PTw7nACvDTHKARQCktfcidxnP3T8Lyd25PS4fGTTMqifD5fj9CB3iq2EYRWvZagm37qTWM",
  "key35": "4a6L4KFwoChgYfhKpTyjShzWoDn36cm7WyHZcgXdzh4F4u1nu4Ft3imS4jbAHL4zoqby5TVxog2VwrEiBxebDnnm",
  "key36": "2b44HaJAvSH573QL2wnaiYyT9XXPdS6qWUxh7CHqsq9LH1RqXUnUQuhQZ8bcCewJ63Y4X5sH48FaCPiuXePGP7fd",
  "key37": "xv9R79Rm9KxKccPjNBgcuBpqN6aj9Afk7BJCGKCmtsjdsX51Unwd8ugocQzje4vmDapxG6KkJ1t7uTgmeD11moS"
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
