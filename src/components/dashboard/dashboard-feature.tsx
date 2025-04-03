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
    "52avTRu327jdtjwedKzLcReQkpt6hbNiCfZiKXKdvdKCheysomECi8aAvpxUSoQfjwuK2X8hzwFBDq7SxWfvR7E7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Zz3YcUm6RwDHe5WUshRN9u8H8FsSmKvWLgv5ytYTPUrzuXpcNMuX5mVWw5oFw1NsGYmhTAoTbssZyWvhHyEAPA",
  "key1": "4iwz4BEN68SUTKW2LBxBNTcWvpcKwe19xU7Vvam1KCfkTkEW2THmnD3j689u17xtYL75cZv1Fd1E4Q6hZL47MiQ5",
  "key2": "uSSoqsW1RuHwGNVTTKJJU71NWbw6t4HUpRy5eW3v5emzKko6b1AgSMB6KWWG7LwkLDcjjKbHYbRjfubX3nFkae8",
  "key3": "4hfGaYxPuAMQcWMvJMxTmDUbnLvYYTnPyb4L3beo2KGWPfKGcZKuUjqtbcWzqGULWhVFRWq3N5d45PiMUwq6dzNL",
  "key4": "5Ln7P18zDF5Ngi2LXsMHP7tECWheEtxmwwTWfLQEhskGWiZiqbRLRkqWhmYfs7i8aqCJjKb32zv5YNDbjJhjkDDC",
  "key5": "2Y8sFJqm7F4P6KNHVdPsu4HMdRKHXzdKN6rXV78sBStc3fpGY5fhd8nvH63cT6gpnuWzqRKuENm1ARKXuNVsbhAQ",
  "key6": "4Yi6LqeVpuG5uSEBNiTcBUHAkYP66T4TqHmRMXEZdr9TM34uMpLCCEDUGaFad5BHWrYsKEyfvTh2trAUHoWN9ULP",
  "key7": "2NodqY5LAN7Nhs3vcyJLzPUPCTL1qokWp9u69voo65id8xzgrYYPpwMWPBkfFom97ST1yMwPRgyE7MsD6zojShi7",
  "key8": "3oWPxp29WpHuQGa3aiqZ5odrrA97nJnmdDqN38E6L3FpoFdzAX8ttPgwo8cqtKWRCAekCDyTycgG3fGTR1hvFJDB",
  "key9": "4s2w1gJuWCr8BkZzjhxMazSNKkzzLjZopAABXyQqzCG8kYALnYxxYPTfexkeWhXzGd51JAXz8uFo39McoC278xhF",
  "key10": "YDmKQztmVdGz7DusDhYT86nzhcFL8WpWyu4ZvGKFz4ah8mdRxg3t9dxXLqB6gDKhPbYSFTVY1HwtQ5cJ6bhmwHz",
  "key11": "5BtuGrrK2AFFn85y85SqyMBuA24jgEcutmyT7vXdvrQhC2i24oLWBSMrnQExFRUqPQvqwsoQdCcCrQJuZTo8puAz",
  "key12": "3HseaGSAWEoWXon7PJ1XmzYmh4e9MGRv1T71XQssCM6dA6nSerKpdZSZsukytpeYbfBkXjxTVkQu6MJMNB9uAFC4",
  "key13": "2AJAGFRx5dTEwGwcYPcQcSAfKoWZae4xtA1WrmZMmWqsESnye9HBbBQdHHpwLELaZLVPq78XhM5xnWfNpg5JeJcf",
  "key14": "4xmw6fraK6HTBBKQEMoLucWMMvMKoFKDRUwTt5TyaJteYFdJrW3KaUFK4pkzv8CDnavJrDYUijGSRbyUWweujKUC",
  "key15": "AnUvFCusvJg975bzH4KZ7fS6w5de69SRUStGuTuhiuXzAgVCBbboXdmqJAxGuu3j7DhwzNhaVQ4ycAZTACHZPSi",
  "key16": "5HxziFPprtBLa8FhafgZUtpNWjcgyYkseEbESRbtSVijzFsmL2t6U9497agLwqTiAi2W1m4L62qSemNVVxkCLHqH",
  "key17": "3eeKzFw8kfajNAWwuPhVQxomzioUYUxA9go3EBAsycM71UAGuCeRDv7tNXXnGKsFu1LucN3RnDhdAyXWCuz9PQ21",
  "key18": "3e71CkbLansvH65w8wV76Riudho9xRoGWkRPQkYtFd1PEv78Jq69E8e6nGrwtz6ZBqZLZE5duUBQuBZopHB2nMsn",
  "key19": "CjwPRwfPMMYHCQPaxjrbx3ctE2X1TCRYUie9ebtcMv6UgQAJuowmw5SW37hbrMmPB7QLa2tYxtxiYtAb7gtLGRp",
  "key20": "4hQnNdd2uTtDyo8sLwE63MqATdENPKKP9dUpWyeMKoAq3GC9mgKavp5B6HjsJHguTt7HuNFnSCj8rrD6Pp7vxvTQ",
  "key21": "5RQN7ztEvUV3kAPDtQmvY9L9fKuGyshUFZxPzrZWL6FZC8dSCicLUqFW1Rw9eHBaFoWdRRmx1itN6psBxdz2gNbc",
  "key22": "4nfRDZ2HSPkKND7YvU7Q8nBkg4d5ZyJq8phdTPpyJDbtgwJHyM9BcjheMZHS1SZL3Lk269s2ZbVSn4s7rbXT7sYt",
  "key23": "3gh5PRV4my8wK1PaxmTGPXKkfQdFmBVCE5Jfay7Yf7fcReN9gcSJBUmo9mAg4naSaefYotKkgLBZsMBXNQvkRvP4",
  "key24": "3cGvq8eauuhrcenR9mQiCuzzMsH6UVq29gjbuURBrySAiFaCbRmXEDbfUuxvLKay351HsgD3fTY25zME1qRqqsr2",
  "key25": "3mLGTST8NxVKgbATHeNYKs2pSHUCDrhz5pQCTBZDTQ4qvZQWGJH6qz1cjznmusfFsFHWeVTMmANkCqzWiyHwypn5",
  "key26": "w13v9jfHesPqMEUX13sxhqEDoXbkSDE5wewthbMiKbH76u3XYmkjPRLReLXqvuAUFGbDujCfBE7TABomZzEnn6m",
  "key27": "5GHA3HY2Y2oT5Ki9qa5nj48yEMvocLAFKJSYxNzSiNWoxCsSEwCUG98tzC22TYYpNpNgckptvzze5ffYMFVs7EjE",
  "key28": "5pGtBMX5BuRMXuobhoGpR9Yg83w541Vavh9cc1L3j8UUAGAen5w7Hyha838FBfvi6FjkSTnXTc7vysGXSXcMsHHk",
  "key29": "Yk9NWaHeEArwZjtyPAo9PAKoDKUgSbMsZRe6LPHuUfmvUhrEV3W3sz8rjL6t6QAsoNoatJPZaJp2erkSKp52Pdx",
  "key30": "2ytkczxagJNt7Y6s4qB3WmNWMN7wXiTDo46TQFj8CvB22wangrxtpR1Dy9fEa7JG9bevM2Gv7fbd3ETyYG2Mofg7",
  "key31": "afjjTFZps3rbvtcP5XyVEzBozZQxyKJqBRTU8jfWJZ68QcbbzSN44KnT2Dv7DyZh3wCKg64ME24wuNf9F3P7m9S",
  "key32": "2Z46k6NQa8G5PaYs7jjayv4KXekgcSk7jyYPWUatFWdJV5EPT8tVTL3AypWGVXH8SdYrQczecyUXc7efL6L4yAHC",
  "key33": "573X3PcUqFKJAQzVviQCMvUtsPcPkFKtB8MZxDhGRNHEBVuFC4QgrCuJjNHAJZejxU12vbrd8yiuRLWRLoRcqXL2",
  "key34": "3Sa9of3JQgQ7x4nwSYRmnMV4u4y24WdCzm2DfkKSyXgLe8TrMG5xbRAP8sAjAHbQaMu6Lsneo6LGgNC4wRyyxHjE",
  "key35": "4iCZZ3w8w4EaBGNhbpPhdBEtwjVZLTycxcTivjWg6fk3j76EBYinDnk6a8ZG1dAD1LtYNySELhVLYrwtCJaY9ASH",
  "key36": "fzZcAJjLjmWvt7Cu5taRMSi5ehdofkBx7m5q18UujQA5sHKyjXapVe8em6XbHW1bs2VXB38juTByJ5Rgw4jw8jV",
  "key37": "w1AbqH3mpUjqjPR2HpZU9GtXGJv1ytdBoAc41TJZpvXtsheL4FSgm4saCkVtwNV2Fib4WQPeNPTnEAcoo4gzsuk",
  "key38": "2jy96jspJow77K4HpVfRhdUHSTFUYbRNFej4mfobGQa8Bw45ZwTKiarXCqwrPMJ8socBVYNDwiVdAqz5oC6nfZFg",
  "key39": "5DPBwTFxtBgoh9ZMp4Kh7odNHUpNuvDTYS8C2ShdkK9cp1wyzzNzTdYK7JvaEmBoGuFui6UhJwYBs2bGdxV6MXfM",
  "key40": "3ue78MSTgj9QGb2h7J2SpkYyHoddjyxF77FthujwCFRzNZJYaVGvxQiSoQ1ctHPeDZ12RLP6c4J7amL1LHN4tnpN",
  "key41": "tgMHwkUDg2AhL4dUJ8gHYAfMDBnJkaLYgxTvaMQyhv8YnzBMg3iDgn5iUcKMvkhXKe4JUtPqEydp7t7i8bfNZwH",
  "key42": "2KGKk1SiMaLaPMFEX11gLXE3GJ6Sf9jKXa3VwkBYcpW12EyyuekTGYYUXXZrxYt7QxsD88dCKCzEwPiKVBxnkwS6",
  "key43": "UKmviaPY5tnxjBHnkGPwrtmjvo2GzA36AfxhU6bt4LzWnJC4DfiGjt7cq8hGKkLeEjFhxCrjy2hkhPpuyzPjiXk",
  "key44": "2nNqiCAxGqsThaxdSp9KmzDkRAH6eYLaY5GDeFtjvk12vZapQLeMgzaJyiTnxH88ThEf2Cm6g4yhvtyxpUNk64WM",
  "key45": "461zsSTaFJ1otbc5geUxCcFAqdxzKBXKmgjmLMW5KSirsXFxSEdbtwR8dcEsTvNpgkMtTB3T1biuX8NQvRuB19FZ",
  "key46": "4FescE73ENggzZXNkpen9uM4DLfXNjufYnTbGTEnBDRMdvZ9mQMiTpwR8f46eMqNogzdzmFjpaY8MAinBCV4seG2",
  "key47": "4NqnEBzU1CYNzNT3GvpiiGN5vDJDoadQKXeahGzkGWkiXwVTigupEshYQzP1RrmssARv22ZJVnDL3gNceoFqNh3e",
  "key48": "5B2czt29EGYpFcJ4eXP2Wre5nCUgkTrD9yMwKZaNR2LBRYyjV4wFQ5mYipT88Y56sA7hwxcqnvemWifTXT9tqoZq"
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
