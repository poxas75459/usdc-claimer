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
    "64rssZHuJQ33cztRhYejJkM4wKvPezw7M8oLmm1vbmyM8bBcvU95czPnHg51RzwBtctKSY611jCnkEZiM2DXw8aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qv97bd9vXhMHnxMfkbJyo5mZFbgJaKeoZehSzF7oainiiLMS5yeSMovam2yeRzrpAkroQ1r3VMGyHhfgbuXZPeu",
  "key1": "3oB335hEjCQqiGhv6TKzJ1Yzpekoir195JE1nqyVKeLhWu7RLfAuYzxGPb3qQEQvdVkzzDPtMJoyS2tiE7gkznSQ",
  "key2": "UqSMKcYiFEZioRAxNWpjtFTttVWLinmw96RnofrT3XCq7YdwrVaZJNMTVFnvTcGzz8w2wSqMczT8UK6mSFa6aEa",
  "key3": "cX3zSFZYe67m2P8VxwPKpMjk6whxPXU9i5aB7zRC8T2ZeWpX8CQCsfsdSxZSE9N9HuHtgHkocbQqLzosZrFZGFw",
  "key4": "4E4hbEbJHKdhCfCzT61MgoUG6CW9Q76Nvb42SqTQwycXGfA7h4b4fCbXGkTjs6qAmAQ2gWsefyfW4xfF7sBoDiGP",
  "key5": "5JYVsLqpWq5S3C7Ls9hT7FkMycj6vyPFKPhoL3mpY9sqSVtG7jjJPkiupoQJU9m17JqhJvXjhoB5ocoheacP2Z8E",
  "key6": "3TWaPi2chxrDPmvL8ye7K1dHKsJZYuwcobpphLZFenjsUtPgbtsN7oHiZzywxjMVVPQuYqfQ3vyo7D3WWZJTWNUF",
  "key7": "zrbhckFHDvDdQpQhhGXkdyEWBHiseyBRyKkq96Yy1pFB68NMLa6eKPUPuQ5VuZBTzYazhJcipseRwPVVWTk8Jmi",
  "key8": "4WgSfbStn1zExXszKZ35VgXkQpo3R4DhcuPZerG9wPxePmjgcxcEHN5G1RkpXq7ZQ7mC6hzWZpKBo8WioFGuPejY",
  "key9": "H8f1v8dHs3VWf74ARyNdWhc5mEsQRGUb8DxDRsVpMwqY1QXQLi8m91BovvrFsdwsstZz4g6HhAHTi3hTgnigkiA",
  "key10": "31khepA62TfMuub3XeQpDaw3PFVFXVmA6sfbAyhMc8FusgKY5A3f3GTi2SSt5qxFjJZCPsuEyWxWj26BTZaThVTZ",
  "key11": "2TEDqDqga951LRjkpm2ndFN2R8kVtxkRe2kVA1WM5PpksDNQ72qQJUxH1ZZFyPkFTwANywE7VJNN9KfJhbkay3fj",
  "key12": "3P3TnK9Jye8NV8tH37zfmAgYE9Rs7AYkGanBD2U8mL3d7pfPcin7pxvLwhc6PBVgy4dn91e67iTpqC9FyYmhLP3E",
  "key13": "4DZ15oDTa7xqZZnwZGS4tUzsDZMEDrjqTQ1YCtBhWsE4ibpufFmw9YgZJKMb3FYPB9LVaM4zX2G4TzdC7hDwoSro",
  "key14": "2jN6okuTTfKnSNeU1MYFqXxKPjBVpZyRFXN2JXiH4RLZyFCRWrD18BmWoE8rtnFb3GmfNkxR3yyUgxqMf811cFw4",
  "key15": "323DrKemiJh61GaeS5Nt1p4Cw8kX3jA6tUqjGyaC81tS19M4bwDKWqdKimTUdv2Y6o8VgFnC953ksRM6Vqfvs419",
  "key16": "5uRcHYh6ZcMoxjd3nAWdWdNp2qUmbR19F5Bkr1aMwpwtGz8kGjTjvMj8QpkJZsfd5eBdj9fVf9tvrcKW13nS3arp",
  "key17": "3wjfQbrqEhA23SjySYEVNHRf2pVf2xXUCzMgmbAwJogk1XX2F42n4qj7NXQuApKo2n3d6wEuRZJCNPvgiQmigEQe",
  "key18": "2Ap5m1HPh8tc1L8n7yn1VsykZzTNsT1JRJxd29QGLhn75gt14hTEERFurK8Nug9tWoSjzctdU6MRbVyhVa3i4mkr",
  "key19": "5D1nDE1fwjyGhrKqT6suumW9bSvscGvMkuVzoGoRfddX3EupdL7D2AcFqcUL8T8qLaABq6V3TrmcFBcbJbzUTiTM",
  "key20": "2CyH2zGp9FAf4nHbh8mv4UhqoNQZQy2iV3XmkF1jEFFguM3qLJDmfByPPr3dceP82kVaPG7sDDXRzMXF1FfUhhUL",
  "key21": "49q9xE4at9UuCUjNJxCGtExHdw88m5XmkmZfgqhxcaad4ppxPdVnxoRUWycDcFDBBQs2vP1YPQPAcK7CWsNxHUwr",
  "key22": "3JVHX1nR5wZVLWzLNhp9C2Q5qWjg9ieK7thb2S66YfGsEUXjfan6CtuBaRDEAmGHt1LQW8xYUQ5tXfMdmXuYk3Nv",
  "key23": "61JrqfzTpx2gs4hPnwLDjMKtr3QxsZuWNUcgQQmi6wd9y4PtQ32N26jYVJHEBefe8hf7CzbHonFCYH2MLEagYmN5",
  "key24": "3cwCMsGSZY4gPs8vQDoK2E9kXi78Qv8j5kqKShrEVHSJa3FBVWRYRNzK3CwXSpMKbPg5S3RZza6BnKaojPzjV1AZ",
  "key25": "5ve4YkK4z2484Xdhkg16i4vHoPt1QBeXynf1My7sX4ZhjqrEYXp5XnSn7u32auXMmRepiZ5NaR1wp7MFXQS4psDi",
  "key26": "5CTEhSsQxJxLx95YjqUwR5xBkjgc32NEaBUarnHjSHmWnHqrMhyB6BS6Keag2hvkTr1nHFzpBwv74zsjsvcaMngV",
  "key27": "22zK2YzbFEe1EhCTwY1qN2fZrKAhFApr1rVFwUi16qMyfiuofoJaqkEf57a3CWNx8B52RHAfdVjkh7Vzenm5Ltdt",
  "key28": "qqMVZFrguLa71RtjyjSGjHRwArsHeSAydmcMFRsQd9U3EMkLFQ5bMuDiV1hj4mQ51i92X3eTKWUA8PVpv6DNpDe",
  "key29": "BVJHzFcLka35GhVn81eLJbQbRckW9i3ycBW8p5zN6sNa69jKHkot4AiCrvwPidSUaRensZCXJP6HeY9zitPh2Zy",
  "key30": "25BaGpQPDd6ARSBDc7kSZE83nTXWbBY1pH8h4SSUZbYb44QWnttpC3RNuuUe3WkXVugE6fXd8oKUy9nmktZG8od2",
  "key31": "35bayfCZg1poRpJrcZVmBZFRHfAV9HnwoVvpKDa1drMG8zRdedEzG3ELRwHzEZ6CZB1fAAAJSyaGNzkukj4rkNhG",
  "key32": "3wxzSoevqr6ZTHzNiq3gFgTLBrAdZ7acbsnTxhWDnNTkvEfuEgjb2wqVo8wx9UxtRgVMnjjxQtuAVfRtz2YwDCmL",
  "key33": "4kn8yU1aPqqgsFLWGD6Hinh4B8t3UDF4KRvSAgiEb9FgpdHezdKTkJs5tSbQPcGomQUdyMK7fDr9KQpTimfwh7TU",
  "key34": "5tC81ZzWVi169qqAiqtyQfaNMxoEPjebdakizXv7e6qgKjA1a5X2Tz98dqgBepADWg8CewpdpkMaGW956t5Rkm8n",
  "key35": "Xiyj5Bued5BBt2XA1yUfojW32Vkk6aVf5g9W6qjnjHYL6QwuJKKvAUSgBXzz2HGHUX6D9gf9Yjnv4YcFVtEkt9z",
  "key36": "52h9QdHEuD3pToFBMupRCdW8tvnhhdM3bWHPoTgdsdmJJRS9rrTF2WrBvs6xoNWEAVjtQZUFgNJerWr2p3d92SQA",
  "key37": "3QqQpnUGXLfheovCri1pi9BkeNfXk5AMCjcPWviRFZyywzWbcngB8CcE4rafjWFDMtK8ZciGdivDCsxnZHSRa3n2",
  "key38": "nX4nHS8hwbfHR3UGgfQTJ6u2hnCjFWZecTyLE7uDUxmrDhf7oUNCVQpvLHpC4gvi7H9jKbaQZZd9xSWhBFzttht",
  "key39": "2m1QJhKH7ycuyGMw6iBkCRvU9fb3EntT2Eikrn3xP7kep7a24bXEegF5TmFbDoZLCkJVr2gzQ18R7zbgDK81wQ46",
  "key40": "4YkrHnhhCF19B7mpZZpBX6S8MYCp5Y6f3SHCt7ncjYDTZ7ZZhMjmQBoGoC5pigpUYQdp18AQR73gsW2vfRrsQx94",
  "key41": "31Jaia2pevrLLXB9BqJiVHnStG845wQcA7BQFapYduQ2adAvTZmMGSjrUTLixwaetmzt8y259rTKrmNpn8JVo2KH",
  "key42": "3aX6jAe5EJY2yTmogvY8RgejveZhU1HuYoTusW4yKaTpwzuhXA5vMXyHErJ2Li2yA1GtsvtwGdMAFSpaPprnaany",
  "key43": "2LXgvV9p7dp1fV6xzK75p5wUNeoteGdi5v1FgTzJZ3Xsik2R2fpqjWHPCRSKLpLRP7DgUJ3teeR29ss8FyxcTAJ5",
  "key44": "4EiyxeurDb3rTz6ure3JUB64uTbBxkpRDkqdhDrEuExg3HYnTxcnwF2fYCzzgZgxb3ShnbSBx1NPHCMzyx2kVi8Y",
  "key45": "5GhucXxuCmUDVb1tZernoVYAFcMVNcxBZUKhN7pgN4J3jsWFQH9Fhn37E5K7zks8XSbxkGmYVAj3Dht14jU6cALX",
  "key46": "4y9bxBKqA3hs6ktBpR2YGnr16HuZAQYQH51vQ78UiUh3Ek4H528HNvjWpckTQ8tmzBmxnDJtDgd4mgxiWjhrgfu1",
  "key47": "57GgG8U7s6SeCSJnEZGLyhyEadwTQXF935srUspH3aipTfZtwKjX77C3fi993cCRtJXcVxAtLZ9oZGjkcof1QVNr",
  "key48": "39grNEtsLn2ibs5GULvC9i7jGLfq6PnejD6B1f8CMBMzChjKW3XpM2mKeTJpSpHFMrTGN97sEc2vcoppPZEFhbtL"
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
