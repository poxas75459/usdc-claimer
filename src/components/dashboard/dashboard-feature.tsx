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
    "36qedQ7vn4hcGLUfoNBDUAX4Qr659VftaUFLxBoPMR4tAkhZX3nRtKZwdGhgYtoeGWfMFyvZ7jSXc7tuNGZUAw3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VVKT8hVdFGkuqco8CtdPnRMdgBJAPPysHsJCaYaR7m9ZknHKCui2VfXZ31bQKyBXMZ3MpwBadc9xgonvNRrTDwg",
  "key1": "4HB4nKAYQw46HJaSbYHAXR8SExB9KguoW2nWwzfMg34u64h5HMtgphWEjVvUZxThtc91LtsYt6C6oo5sviM2Dos4",
  "key2": "2xWxkvsT1CG5QrE6T64L9tPmoB89vMPAgXUE4YBPqcj1P93jH95R6831i9RJPmTQsN1Txbatij57xWdwZeTBDKgP",
  "key3": "4micy6g9tVCAtSiRAmxxGG67TPtsn6oa4Ma72Qk8qrAGQrYWkrc5MwucavALVbVTf86faJBSVZjq8bHbqdSW4Cn7",
  "key4": "PB1RxUWw6EBxijb1MPjFsVJVVJRLQewiX2saQxHHUE7NduzQ7i5PPHstifc46zzJXgv6PV6MYgKzB2ReNYEb7YH",
  "key5": "JVogV7eXPAL8aC8AtbiqEPEcETYmUNZKFFdrQLfS3qKFHARHGYmhHoQDpjoHm2ucSCpMyrTXLu6gJDcRnDe7JG8",
  "key6": "5KtvpZoCsSFXCPkqBE1djPJMuxSLLy6cQvzoVz9ij5Cg3DitvNXJKawLf9ndDjCqcPxnCuk87yBr5tyRRjwjX86D",
  "key7": "4ugh5vnUCqpdT5m2xKwcM2zrK4BXdoGfvUbtbg4Fupcn3B6toB5xcmEfndB2tAQvspiYqwuH4jKgLEonXc2ysArj",
  "key8": "QGzvbtHTQgjSSiRCo1qJyMPBBjJXdWic1mjsjKQ2nDjMjdbfWsuxkVVQx2F3drQDNWjyeMq4d25Xg9K3DZPTtKk",
  "key9": "4Pn517pUPksJJetMHnwzdWi5vy55XdKoJbWMtbpWdg1J629a9HuMn7KjLbCTDzRYYGbmmSn4tP7MwMWfUU8SakJY",
  "key10": "5Uocoa6vQ6Lpr4o3hKVF993Lfo1zzdLDnevtZxJco3KYrVPFCfSQ4Rz2vSbcyuoy2ndjVNZorLwCnuyE27xMs3Ns",
  "key11": "noGDW9WvnbbmabptmyDWMuT9gC9aDcZ6rcWRzrbDveRsJt7rvpJgJHt5JtzcwH6R4rhCYSRYvuLbv7WagVaNeX7",
  "key12": "41UhGLuxv6CsGVgpHey7hM9wr8Vv7VBpgEhrnViHkjfDB1wK1p486Q9g3Rn9R9CtBQ82pvbHAqbwoNfgLzJWeHYu",
  "key13": "534Xf7bP2Zd51QMPvUfuFP7EX44bKNddt9DpPJ9PbpkFpcBvpghBNKJUEVZNpyvFbkSxLFGgdi6rSA4DMwVHaadN",
  "key14": "3CmsDHk9qD8xsCgGRjZHLq1CjtkJk6JipfCm1i87Q9D3L6bBNPFc98MbdJ9PvKDZrSDGWbzvkPaZCHSR6qHx3Gme",
  "key15": "356nBY6EXz9PHAHKMp7SXScvHffKQL3y75mm9HZydSDB342kgMWqDj7WWLuibP6iPdwraCEBQW3T5Dj615WvrSQf",
  "key16": "4fEPVCqKaSgA3tiMDhVBpjABiqCrT8JJMzRYk1D9nLxkLbeK7DYEJHbgs7j7U1nvLdX9d19N1wDf97QKwAwVBX95",
  "key17": "2h847PUewpXhoft1kxzCXWeywVXFZAWQwvuFt1WV7HH7SqPgLfYW5b1gNgad9K442DTNYiGfiPm1wDF1RLxFcBpm",
  "key18": "5LPnLC4xHHwZk8Wgt1shNpkNyTgSAjpzaHjP4WQ6SBZjL4Mj46uZjj6svq7W6oZRi6cgBN239HAL8XfKGeZZcgBJ",
  "key19": "3XadiuRUkBjRLPEtTb94Gkr3Vq3jxjT1W87UbWuUHYDn3gxwNRUJUW7kj9Hyoamn3ooH7SoaJbtJo9QwtX2QkFT7",
  "key20": "2bWDafC5n53Jb7RYxGL22pjfdScACF5n17kh6zYbMfNE2gRYoih24mBqsXguW5zdfz9pz213DuZyHAoHbt4UGUaD",
  "key21": "43x7gbxhHC2h6RhbJ2MvtrLmJSHTc8P57RbcMfTxekoucnV7GG54NSmZyuYQ2fRm9N8hPVvmCM1rMDrtJw7XJwcX",
  "key22": "3EenfEgAy5ge5gjQvgLPrw4WGs8erQausA1hKDmZbSBNRDNkUSxVc7GavvFPkPDN2zuGvFqZTxZBG7txUxzyEFo8",
  "key23": "BJ4vS7j8nRw7wq2ZLsAUzUVotcR4ELWj4cdEVgefiM9KyjYPLuPJMUrZftA52VwVzPEFnoU1GZqfanzFqXssDvZ",
  "key24": "532SKLP1MSEpD5jX5TSgc5RBaF1Wrj8SyUWqX6xfkGX62bzXTQo4WMac6n6ehAtFhe9AHen8iSZd53n5qbyTBedh",
  "key25": "2bCXGqibXyfbtrHYbsUVMmmaZsPpfjn3igFgzfjjTsKA7LfmqaB7W5t8HvQLDCNXZzaPQQqyfJtDTaRYtQEjbnWR",
  "key26": "2yhgPuTgAE1HFTgaJz1ZGkhZdkxN7jpGzkQ9jPtrFTKpHLAkGqL4ndLQv3n7y6nTtJdpR98VyENhosHJ5enromdA",
  "key27": "2t4fdBxxWkEaGKSWLShNUYdqPPmm2xsoVPPz3StYYBDXLhoVNw7iF1zJMc5AvHuYezuvB3n5D1RRAFCCp5iUp2Zd",
  "key28": "2jkZF9G5JBFQoGua6ncCKvtmhzb38wnrYZNDVM35C5TBFamjm9bJvmHKtftM6dGk1AkxqFLzr7KEVhvkSmEV7ieV",
  "key29": "24GgNqVH3fLEs7J3iZNFNL9FDMGxHTcXDPfe9Nep7itzXQNnTUwyUGBdWhxdCi9h8RhEVzwtPM88Dv99K3Wurdis",
  "key30": "28Teu8ZSjRCLhLiXygftJiJFCFr8LFT2F42RMpPkNqzomkAncZ9RNwTRB1HsUojWECnFiEhn9uBih7FobnCkYDWh",
  "key31": "SsSCW22JTYBr6EoWV3STYQLD9LMhy26hpXwTD5wMh12pQphG4QX7oJaDaYNa2jNj9rZKvCNUcCpdr4jVKiFzmop",
  "key32": "3QpadkhcYTVffnht7ZCLqK9syUJsivqe4af7rqseRPPDYWjarks3X8kEKfqU7rv8oYJ8pdTHEHGqxm7ucuMmsTTZ",
  "key33": "2JKFBA6HvnHJLTVpzYf9N7DhCsoh8gQf4av74kSps1WJTeKfRZNXZUXNRmyNXncqKqPSvYB5N9QaTvrtR6thT7QQ",
  "key34": "5hNfsvWhx7Ni51Ua2H1JWYN4Qiaajf8gAjz9k1SvzKYzGJneZwnXV3uNEArz76vP2vh4PLhM44nVxHTPA8DxfHq",
  "key35": "D75XM3LS49CkmU9jGofvY9GT34ahTzHf7cFD8AQYgLUQ5EFAFHbPhNBPEjwydeUfNHZUzBJ35Uw6h2jcokXDake",
  "key36": "61jUmr58LrnHpWuQKKFcFvFn8dqz3pduBHNKsJ24TfzCQyK1XoFPaHDufkmEGiFu4oiB4UuZ7AV7qzVwgLgjipYf",
  "key37": "3fBjTr6jNTcSWSmTubGEajLubzBUYQzKtB3hncztXE6bwFTzrhBazEpr4nFMy8M82AumhdEBMjrG9pjvRkEDeuXk",
  "key38": "3w3j9uNTfEtjYQftAyJbgyVmouGiSXobdtFh2BPLtffUp2MpTDfdMY6jVEfNZCzyWBvMyKXYzaJwCBME5xtSZJko",
  "key39": "2WQhPcUb5EH62wmFD4E3no1nFVZVpLbHy1bAQ7vMuVAhJnstKBH8KrEiQPK2bmKJGBCh6rfCMAf1yjgKo7Sn3v2z",
  "key40": "4xeNs5K5gesk1xNtjnRHEAi2CW3v8HEi6BPqWdu8JAzrQtTHCHW576bzC4YsrCtQ2C9X8B6RLWZbZu6mhrweK67L"
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
