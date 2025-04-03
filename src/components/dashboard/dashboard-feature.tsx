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
    "49cWyJZMXiKgHtFxDv2h3HcgjghGoaa9D4DyRb11p5hNcwCMGpv1D27UyTRYtw5hXoujn9soYBMCMMG98A6J2ef1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eEMpF2tZRzQPrnGiTFZFahbRaopVTb567XttxLQj7omQ3VMN2FhMiME95yw3EvkRsSeMuighRY6o8cbN6qXfY63",
  "key1": "hjkZd9KP62ixPKVb3rw9U8igne5Ht4jGWs9VvEHYW7xcn4J6VPjihm77FRx6fV7wsQfyhuWak9VH9HjkhwasyFK",
  "key2": "2p3KiGjEZmHf3ESdRfd5ZjTF5gGfThUJJGbSTG6ZrExp5HcvyYXn5nsui4PjucgKa2BvBHdXa4sFGup1XQ6WGnBE",
  "key3": "5HnPxTGqGpraRXsnyKcEaVQSnpLptYtLWkh86omKdtayhXMv3gENYGXqr51KXgEZ9RVUDux2FJ1EZoNJHmk9YYDJ",
  "key4": "4FeTukoudJj3fiVh2dubGE7ima4dvU7Ch6CGMCfCJXvxDBNbTWufr61vmVbj3mP2gxEJvExEURLxoLWiGPVT73Kg",
  "key5": "2S3KqxLqJJzrtwb6PsasRbBeU8aN2XiNmLYBsPrQd1Dvw5tMeP1dZV2y4iSWoTN1VLZUvbamnCVjifMQvmVwoQPf",
  "key6": "4JSRV5CKZtoZgyzjBxmuYLfeH4QPVGvD73i7naVPDWasWSC2Dtb2ZGD2PqT7bLwVw7GUP26ZRXoa4t8eyBABTDno",
  "key7": "2YGf36dmtycW4bnUkHvNkeQ4HkADU2TJoHfjp9GTjBFoD59BBYGtQ29AezhcR5mHnxKPdvsaLHL6tvbdKhUq1TAm",
  "key8": "3t5vBQuPJNZrR3wadD3tz8mNzxCKub1QNfQsbaxFTk3ATPV7kzpgyZghjDaDDYSqBSGNpGbvMCMqCJeZgN2oGASY",
  "key9": "3YuBy84ZQeaxudpcxAQdGSpTSWcDyCLWWGou4MML4WrZDsPhzSV7bDKRqwGLEs1TfojmP3PwA7QThzqPb1duvznW",
  "key10": "37QgPez7CFYJZ5Yd55xBRJSPBMcs5fToYHjhRYFsUgKJhUawAFYh5FkWVac99qcrkhAQtYHrEJKvQCCf2SbgKJNk",
  "key11": "4zQ6EwcVNj5nAKMB22Mp5RFCJxMcmnBzuTSU3tBGRyZAEthMWnQ8fYyL6PhCvkfyC4qRqmpLgQWd91at26wssuDg",
  "key12": "5J2ATp7ei2y5Ewk6C4hjXxoXZw41CgMCHPUR1KLDupnWUJdLuDVi8YFEz9iWVkWwdQnHM1a5q519vg1WCUkBPauu",
  "key13": "3yfH3re5Uj6AvKwXKLGcV5ozUdeZTHghBxtwZaLRzSaorjsHPBUtfxK6hFN9z6aaRkWmv8NxAACFd9fzFaxVnWSF",
  "key14": "3tCg5Dw6qhRNxsGHxLJbWAbfBKQmS8rzmdJVgJFfj2AVAWXyuC43w5p1zgjqzkjZ3YPHzvMUc6SWhifTuYUAQXuV",
  "key15": "3QRjJE8n4qUkPtH9dkWpwdepk92Fzb5hy5qfCRherJCfzD3Z8WhgFXeHdoHQdeaRGNbfjKCSGNAAGTD4nyTcsN7g",
  "key16": "3YyuxEsKU4LZ4afcRwqacQqydagE2VRrZKo2LFQk7UdgGo6oyuRLpDzjZxRWVJTwBjLdHgw7TzmNGG6tTXd9iXuS",
  "key17": "5G9MJU5aP1qRg3dQCzE7u8QoiFUYt1yVFC7PHNJHWVbmFYfUkpBXauWYGuf3hRrWhnapyspdL4gFHUd3mjyx2vDw",
  "key18": "a5Piw2wMUb83F2QreJptzgHDvP6W62fSNUUbpF2PRVsXbhrJCQBpunkHbbceTCfQV8v2PvTX35XHd6WHNdKHgHD",
  "key19": "48LKyLMH7mcwkp3rLsMW6WsmPNFe7MQkeQ37zkVVCBHfNFfJ5Ti9Q27VhANAPEzxdNrM7ehQiWdTBNykhoMyfDqS",
  "key20": "2WVWqXCAr3Qr2p2BYsgRwCGvpJV1kRk3sj6Wc3oSaB2wLjeJPS3jGCxkxKmnrBZk6KxYNgbEHhb3QMejZKSoyFt1",
  "key21": "5zQWkyxH394rok99A6mcbjdYioR1GMSXA872W7HzBCbJkFayKDuchUPwGZ8EeTrxVT1hMexyns1tyswsbjmyQD3W",
  "key22": "5AQViXu9mqr9gE25yuMkrZ8cdGQFsfQFaQckYiSSUCjSUEbG4WUzeVTSjfVciw7RFKmZbxGcRjag4tRuXN8ayecK",
  "key23": "2oTDmYb4zBs95CUt2qkF7NrQKgrJ7KyPXPbfMfdGG2M76uNqeEpRWLT5F7RATh9K9hwLqhRz1LpBs4wVKDkBzk1p",
  "key24": "2Af6YdrXQLdMHqBnbgJrT3TKPVgKxMvb34Mo7nWo3qHdHEHTDiK4zozfkoefBJWzwqZz9hBKTuBbqMKybHiNZqP4",
  "key25": "pNYwCiz6LsyLmTuZByLUp8A96xF5mRAJRsxKhpVrZoyVt5DspMRrji7ywMW1ikpBi4RsnEZVUuHXadE4Y9qasHG",
  "key26": "33TmmqZfiez5QjTtzPf9x9oGj9iWH8sUaVWUh17hdC8xV5ndEjwX9ryDd6ig64BBZ1GWwVnPRFKeE4nFBgjqogMT",
  "key27": "4AV6MdJTn378QmUH9pzAknzYnRs46583EAHzEPexwMedafMKrNcjB2XX9UptQcQCS6FUVmpJKWi6YBWzMuqKnoDV",
  "key28": "4tzcXpZihxGwZga2cTWD59nBd7LBRHJ7g68EyiyKMwbLKmvuabwxqVRLbK4xKLBq7NQc9ySdDWMHi9ugDQB2EuaF",
  "key29": "5sH4syx2uNj11jY7rWW4K4esRviyhhQSo1dnD3zW9G2XnfykgHPhJBUqB28sh98iXKWUhouMiSTmCELcbdGBdp9h",
  "key30": "4RmjAEXS5WCoz6WVmdcu1JfdH7nV9rRPBv9AyiDz8L62u1Wu6ZFXnFNnjGTWcFrzx1ackRiGLQWQPafkiSA5AcVY",
  "key31": "3hLZ82igxFv6RCatPv8L4KMQCYfYYgVXC5UuYPXVYXnQfhZ5HxhTYKuukmp8p8UYg6muRhVZ6tKeusWc8wj4pmEC",
  "key32": "3ESAdKUV5GYmTDUigroRstb2c2oTwFEvVgcqagXqK72oSGDdR14Ef1qGFbZg3eeZD2Bw37wgB18p3N3b84Spfkau",
  "key33": "5rzFzTidHq8DGFT1KkyA6M1nQmmomxmf8vqGGgkuBNLcJJBd5TfswppYw846V7WQZcCq3V8KU6V2U8aYBt45ZH6H",
  "key34": "51Nhj6A2Hgov9jTXNLkPdmiq6gocxBqLtD3E7jE1ipgpEEWXinuNJmzQ5wRewxWRdXABMDfwBYEjS4qbNM3Gjmqy",
  "key35": "4nRDikGu4T9p7p3TeM91Qpo891NeTuaWo6VHXBPKu8qpfsqV8zKZgxz2N85E6fQpnzUEubhbTr5Dt4GHuLLJgx7C",
  "key36": "3BmDSAmjimuF8TvhW5WcTQxWZ83kfvLMpd4QfdDzxLZ8v4BdsXpbD7nzUWncM5id8kecrU2bb4noyDL89fmHG1m7",
  "key37": "31rUTbrAD23arBXTha6gttRoFNEymk2nWBPURd4UAN3EPCsoGyPzn7cv5Bzs5WDyCJsxsuLKvKwEXi9cjN83sZkj",
  "key38": "2f7fuoku8kbwYLYLk61rLFewLonwsqnmVVpvRrU9JfcHXBAx4vYwXtjqNvafcKqtE3ppxWo1cJTDdfopioLC9ZdY",
  "key39": "5ybmgUhLPAueKSSrujmBtZp3BC6srJaharTvsEWhuM9QinAZw9an3qjEFqLbJRPCfCfRGGEVNySjd9ZoN79ENuND",
  "key40": "QsTc356VxsLDjCh6vEa93mAniqxgRqHbReHDkKA7cMzk4ETpnjyZXZxAtoJr1yJcCkdAok9GbwES19BMu4bJrug",
  "key41": "BoVsjvgRKB7dB3p467diHwcvX229DwxUEJZqdHkGcceHwc7iaLceKUuNfEUhLev1ECwvpfuWZ8VxS7WddiWnhTe",
  "key42": "66njs58MY4B4XAEPMRC8a3PSSEhGsQDT9jUDhnurowc16eeKD24yikwtfwDh4Gf5hbY8gwbNiFaTnrumeCtaP8Zy",
  "key43": "5KbNhbkbR9qeFMRtQEsvHjt5owDNbR1ohEvCu1oJ4SjsC4m8xMvCK3eLAQf4gCcMpofueh7asgk4Eq3U5e6XkZih",
  "key44": "4Cs4KGdmM5u4sKGGnETvcNDdXBJzrJVWanzWRvK2n9AqfTgXEHCrktKrthPmf3wCcinGAGi4ZJD6cwyKpK92kaFV",
  "key45": "639EpybqH24P2FeakaXAzLxo8nvQdEjG5Jfp6NrZzpda7TsGoPkA83hA3RCybWJbJeeoj6tenh2p8QmXaTzWd4hq",
  "key46": "2XRLnUzW1r41WEhA4on2LNr2MLCJziHJBSPdmrAUHFDcyvdEUe96oLNu8wQNJzKxY14wS9ujj3e6EyUBPfQzJKWf",
  "key47": "2QnYcacNtRBHtWUZR8WrizDrDLATg5qFbn57KAJm6Jv5XXyD6mLpXMArMSYY4MT3peKdu4M24aWw7B2og3H4h4rE",
  "key48": "5GKcuRDs4Z1LUZL1GL6eUZJaq3tsMjQkLfPnXKHm1V6u7HMaKdfKb31QBjHqruee3zXY6mMv8wii3TBcT6UHrdyD"
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
