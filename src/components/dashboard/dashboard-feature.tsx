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
    "4GU1uJbS7KE3xMM51RFpRmGRsbMSxiGZr5ZBSTdp2pCaGXBUE92vaMJnqEBw4SHgonyg4fu3GUWoCWTAm88WWoaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EQHoHQDhAnpr1rcoNiBN3dv8n4EKw83LcLGUE4UUYd5W3CcW8kvDcXEWZVjeX7ZPhu7Upwuqh1mbqXgzQWVwg3j",
  "key1": "5q83YqMRa3L9aDkUn8SNZUZsBWRAMnS9KeeT72km4FhQ7LNNFAVxZfCqZhkieXwJLNNCyBgjbrgWQe5omoyEYptD",
  "key2": "2NvJKyQWxZkBh8u3RN6LGtjHGFkUkWHyvHLoLBbrm73kKFJerE7aFcXTrQM2ZZntfc3xrtFmZTZnZVQUMTWfWXDZ",
  "key3": "4q4gUAdFMwiot66oiDezqS6F8WBJ8titp5RfoHbF74wwfgja1SbhTKQth2C76Ey3hmAuhnP2ttpE4JRgKH3XPs4Q",
  "key4": "4BwDTRSL1bjsQNZVDgP5rKBkNToojSKRe6meVhwWqENc4S8gqgwvqZCPsWseSvDcgkyzV4CMQ2roL4NhQnf5ozbV",
  "key5": "TZuhMKKoXD1iwC9pEzPPCGVJCYsuYNRdKyX6tRTZaHb8bKueNfppZUdetnuRPrdc2kN9Q9ivZaTC9a2rSBi5wtL",
  "key6": "S1k8VbxJr2rzFMDtTNWCtU9Skx1iKHz8joB5QCH91AQLQCMP23DTTrHbJMYMP2YZHWjKaw5ww9XVMGKXB7V3DQM",
  "key7": "625mcKqFEjUDdWoFB4oAxrrt8Qyb29Qae43bW1mAFdpQh1ZEvdDRHeXRKaNYsaXyuLEGtETVt19jDDpAQU3RHQWW",
  "key8": "26SrBNK7iDUWwdSFwithpKP23Hoz9uXA2VYPjP1zLUBRKH52M8YkJDtqMf2oJjucNCKpyBxogmQbeFUT5WzKGPm7",
  "key9": "3v5SLRPfBxmM9Jk8XUcVR2J7ikVCUZobuwfW3RrdSRqA3Bttga58GquYPfCqbziMbZq9SCXZNvf99yWrTmewRnS2",
  "key10": "4QnCBFDpuD5swdpS6nf2qRq6NnQhgaYuy6P3BreM5oaa6foqxnwAyenGmW9d47phtEtobU8AULiXjicdsR4ZDZsm",
  "key11": "3JnFEzv6R451FYbHx6n9Nd1TtwoCpJ6tQMFY2YSCWmFkePDqsJxHM4aZHJpbjYoE2kkw6BDFpukkU7zyNgUhbkUJ",
  "key12": "3vJ4j1PHmaTog3Qoaipx2XAQ3ZPuojE4gG1jCMbbdV5u4iEN2TApWdZHyYDHL2wFerRYpcTzU5m6TarFmvCnoNMZ",
  "key13": "5r2xVJKRpmTFfdmFwbmP628hzeoMUNiS3o2QnCda7VgTfzAJsJnuijHaqbUBEFUzZQRcDMyPFj4ECgcbDJmdsAZa",
  "key14": "42qHyxeE1qqJmbnMa55PZ2HmkuFPF7aZfEk2jwhYDGNXbwFn9eSqneh9JTkrm7Ra3CwNZ7quyK6qh2QeMTku9mjx",
  "key15": "53PD8uVpEyaEahimwKstWD38sk8JzmdSVWPq3F1P2SUtjamk3hPxJVhbFWG83D8CbVy3MP6zHXYymnvGnQAwbubo",
  "key16": "3mL4kL7MHmqCPZDMAKiwfusJptTPXGvnja1TqQvqpSZ2xErgNSgR8UUFUKgofwWhtuZBX9K93mDtbEMXVW5Hgn7S",
  "key17": "4C93vu9Nq8GmxSsc15fdHPXLkY8HK1kGZdc7hQeZ2LLmKZ1uawXTVJGqMsKu196wPfTBUwHaEU78zFHF4es6bouk",
  "key18": "2sT2HAGTanTQMKSe4NTucZHi8WYWKNXgpg1fntDeE543E3z1qjb6zwUPY7PiWXztSLabicyGCQVNmcexT5Xegkna",
  "key19": "3hdzE8BYSrNk1Jcu11a5Zzo1EbDPr6UrvwNxTF9GZkptgbJnLx21AmV7Sq77imCQJRjnvzsZiJ7ywE36YV6RtYLq",
  "key20": "DkCyLttsMWXU7hCorT2KzPxJwhqQySMA1DV3bazuppcsvGKGwFJjne2rG4zsB5YxD4kxwXMaTsLNRTSdHaqyH42",
  "key21": "5UGYmtzRru9wfnkKcahhmz26SL3oc4VasNqsT6tLsiYeRZ1s8jzfZk6thFVLKtAfN2v2uuY4SNFy6zQ81uzWGsiK",
  "key22": "2JkUeBubGfm6YDkgieVquNL54qBbf8Q6VhXcVSfvdDMLFwc8jSqMPkM93uz6R3zpE5D2nJv9S9dVX5d52R5PAshQ",
  "key23": "5rKFSt67jTieuZUzfGd7bURKt5HqjHwhv8MrYYsbPrG35Yw9r15ynyUb296ejBU2MwmmwB1vBbQJkC7XiDfAjVsD",
  "key24": "4xejTt2TSSjHuLwWsCJYVaqM2szZ5xUTfPMi7YsZaeVdTFkm7bj9Xn9KPUQGn2cKttX3e3q4D7rCPjAFEZKQmFDK",
  "key25": "5bAkJGinSduP9vr3YDFrkYSwFwqLgCtB8w4y3CkKHCLB5mS45oo9p3xDk5cApzvznYEXfhdb2ZsERWL2yd1FVdSK",
  "key26": "2fkVP6t4s5VcK43V2Epd9P58g47uAwdsJLdcPLYGqUSbWseMToFJBd9wejd7mMT5E3twCr2RYdW9UTALZYnr4ovb",
  "key27": "44u3Wx2N4L3wtNDqEG6qMZQmMyF8J7gjL5ZuYYSGGHuMbcdT93mxhDCmJ6S8rE25LgsRc7dQ8sBkjiQ7pqgFKDvf",
  "key28": "4TukCvfb8AF7sHmErhmuR19c2Fv1pDWJoquLxUtRzdHf9HAU7YNpcL4GPPQhYZY8aqfDVkRkVyuWZXdGCa1jJx2z",
  "key29": "2KxjmPcjsAr6fjNWV8KJT6sV83HwXR3wCbsj8TwFRMi1oUZi7owT5jANhNK3LprpN59tFCFCS8S8Lks7fgi3cRrB",
  "key30": "5cvw1A3EhDCUSwpyCrSQNLeLeMfwPsGJKbTS2Gn7pKJEXFB2Yz8f8XQDP6cKRiGy8fLCtPL59y4eJmaSQ8Sn6zAG",
  "key31": "5AucugWeaKzx1KKM8auwCMDwpKzwzvNEqJ97fGyZVUTA2Tn5rnHWB3inxb8V8Ya9VpUXFJLQ8i5AMxVS5dkCXwNS",
  "key32": "24B41na7qtHwswoRw9UUsVJmms8G5RQfm3MCiPZDWA9tUsr5uFHKZrvxCZKpTuTWeYZJbtSFK7Zodter46EpPn6R",
  "key33": "F8baVN4J6M45KRt4MWXDmyy5Y56vmxdBqf9oGmrFpab8x6EKvnzUgTrmN3ehqu6Triqueibm6VctBnHnHbWL4wy",
  "key34": "4dWU1HMpWeKTVou8jsVLnYUWKDKpXi5BkXsSAxgZ6AXtwHsiKgW7xYDuCAqjwZK8JCPJGEdjAkKndkpPSfBkyJh1",
  "key35": "3bPrQXB3dSzCWi71cdsRJNjXjnc3XQMcDZHjej5CADKjLpYWD2neUR9BiopsnYVNrmzDiA88Z6J5GmYx7FBa4uZS",
  "key36": "3aLsDRy4HNY9hWd11PDrRUvaMoT2pRv9g2VziwVPxJPpjFMPAjishFaq25Ra66a93Vvxj7KKzFW7X8z4Z3F1NfKZ",
  "key37": "W52moyXgeap3RPCnhf6P2qu9XpjDdgWyhC7YET3FXKsyiLB3sU2XbsQY4uoSPqZ63pQNukEz9RtNeLYDaPpyFBJ",
  "key38": "2A6yjWXXypKWrZa4AmRwxw6PWQzckeDJ56mFNEbg3jKnU6muG5DnD7KRJm6N9fFaTH2xa3aYnZTTNpTnEvXAQQJu",
  "key39": "4zFc2iEvCafLxjuphpJtGiQbKjWGfJV6DpSEky7jKLUFEpjm5qYwheNZgy1hAwR9WCEg1xeEwQFMzLiUuncWuLRH",
  "key40": "RfFhThYjSEWn4AaJGgeRBcYUYkX1thsiirGvFZ82q22c7EnED6aK3TLpiBCkuNnrVuURfvoZbr8R4LWWXoCbtqi",
  "key41": "EBy55JXN4WBgXf9Qyt3VawYQW2UqrbKJ3PtF39LCYxPEaYVjTgg6Q5ALDwVbTBfU6f3U1koHS9mPQZ6v9iXY28D",
  "key42": "2JBRVgGKpphBTJLDkbiuoZ6BPWHJ3AGTUCJodCkCQuRDWifCQWM9tT2rH9UnsWLCdvLuitwJ2kPAefiCDHmbqZfT",
  "key43": "2z4eZsaPCzTCn3vniDK7NjZfFwRAeJLZtPthnot9fwcmciwrJbGyTpREWYgYWECu7uXqxaCHUE1UbbJtUKgGYuoU"
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
