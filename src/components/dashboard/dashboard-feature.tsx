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
    "FzftDZ96UMQwrfyGWdv5wcyY25KBcquSH9KwoDruFUGjhyMqvSJXPQ6fGyCooHV3dAXeWiJVWsd6znqEUxCk1mW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62DGs5gDc4HFV7GRHm7qC8vcQZQCoVFDn7KHYRuR17ezDPmAmevF9jTY8YWQAV6UZkpGUMix3Ybq25mLHUPN8ej7",
  "key1": "3wvG53bySDRA5Cc2GaKwKNHHVn5V991XvpV4caEU3uDVRebvY3Yg2zpfWonpDw9VmAdSiUjcGpgLvQDH4BAfSi2z",
  "key2": "4eTEC9mQmWBsutvFmCQzX6uCYQSMY3ShUis3buiGiaK6k7W1fRhmnMsXXs1PCDJBUhj5ScVBwu7gJQdRWNabqyCA",
  "key3": "438MBwP41QjuyeK3pjsyRZvKDpXq36MdTd5KkBMZEVGWt3sqD4hMCvsY4UDXzWdFnsv4hyqycavs6jErBzWbq4RL",
  "key4": "3DJWCczCY22ofzNMGUQLrCoB5gp9gseHC8JJ5PWgcJHrBQaHurSxoa8n1wLkwvd7qiyzKY2UkqoJ8JjhciEE1Qsr",
  "key5": "3BLWbvi9ZdkJb6BuvGFuBNmFrN86jYqGkWaTXuJGvpraGdhqgYwLJCCKKT68QkHaFZKFwzLgEFYXRMbh3B2WBuFQ",
  "key6": "35cjTQXj7RRti95qC4GFtKFnAomZnPsD5DktjCTmHdKyKXLZJn2X2eX9b5W4pztYg3aDR3vi4hGMSihmrG7PSFLw",
  "key7": "3RcWUu89Vin4s4fsXaHnS9778LSUWTDohtgMzrzQtHYfTNurHQaq2A5GjHsJvRCw64MmhAwLDSd6Xc8YM4PJd4fD",
  "key8": "3nrnFEFsw6xs9wnC4qE3cTvve2XRo155SuvsreASXMkKAJ4MhDfBFcfKnNTXVsUPH21zgZYrbdw8h3c7pMr6URuj",
  "key9": "5yoQNDKDrnyundjNQUDucGyDsBRzu8VhRy5aou6a5NZcgEALuKGsnnALo6VpzpntkDMbwJ1XF9Jg31J6KJ7uXCxM",
  "key10": "3QXM7JJky6tgTKZhFkE1usbk22wwSkMFcWX1b9JgZMDVXU9tTFmTXE484gf7D9PPLtTPbPUEgxi565197AxrVbww",
  "key11": "4VAknmcRsQ1j8qcpvJSSKHmAK3WPKjbj3DjoHzcMQxKeM6Pqt7yRz7F5uhEnimn13CPq6GxY3c3Hxx9CpXMnvN3G",
  "key12": "5dk8zTFSuUM6LqNcxsFnoB5Qaxzj7qtA2QTcVTYYv7RfWTvigTHcy3MwHobQDJh7Q2Gt5cRt3CEi8157u36Hp37d",
  "key13": "HFvt935Qhm8hxijxTkRnV6GYsobus1ujRSqCSBcAPtSpCgFizjZd3ohymSM9yXrPjn12jpFLHbwCUSwsSEuczrs",
  "key14": "cBvYvcC8qAnjGDmfZGfVvQzUttbcqGm5qRru3m8gEdnXTn5Q5h8tz5dDpBLZDaJZx8e89qATKa1zjPLFX8Gh6yz",
  "key15": "iosJFLBnjP8GqcWEkNuBD8Qczvk1iqiBK3xQuhnDRo9Pooft2GHfSrXAqsV5dCmMGtKwb3jJ2kMxW3t6B3A7LgT",
  "key16": "QTqufdsgL2MgPtwV3cBRWwUFraxx8pRstTjaEwe8gzGTe3bjtmzHJbiTe9vzDFckrRRDDw34V31s89fsFSQWXqY",
  "key17": "64KexhtNpgtL3J23E5ogzCm8zZcme8g2XuxrudVk2GrhPHkmn5UVhtV22jBqdJ51edyqA7HVWRDMY4wnL3khgxoe",
  "key18": "3vd2E3TD6AKhU4vLX8eSUPiChEW9HKEj5eKnPrUXhWEV9a6rbX3hJogTipwfneJnon9nRArddUccaKsaPgCbHzdW",
  "key19": "E6G1fBff6QiqE8FgfsrpWRbMtHPhGwb1vT9A2qhifuLJQJBqwh7EdFRkmTFmcFmCj64SVinJMNSva9V5FLcSt5v",
  "key20": "sgK2diz67vmA5D9WeaBRZjtJhkGx984Ftnd5bioZDQxacYBb2FUia9xdKy1kyc7EcfSdcVgUNmd62umWXp581Dw",
  "key21": "2NrPH7keejPkjMekyWz9xvCyvKjJ4wNAw5dKyyYqrvkdNkBJ2MZLiT83f3wQUo1ck8sQtcZsQsEuYHRgjVic9ERr",
  "key22": "mGeaz2zfBH1KYMTxVim69fTYMdsRr2siN4g9kkEJrWSBpsJnNktvFoDRJLRaMqpu9NLX8X6YTxP8XRyKGPXcaNM",
  "key23": "2yq8ktwgguKXQQxGaPqV9TAThBJivf9cGdUFBSNCmXEUfD1d3LbvMiL7rLRVb8CqZgwSSTJNKgzfFdNxni3Mx6W6",
  "key24": "2LMgBnRCjnPpkU1nJmCPhLWUiaHZrYJXsnjtZKdcmmvDoo18TTMm9Nsu3YgWZeNjjTcBkzHJQyFdKvtwgCWM8N7U",
  "key25": "GPUye3TAuWa5CnA9Ak9UCWkgQTTQcFb5oARijAyxhXK2u1x5eN6U6m7tGXPmt6ne3EEgHmVqptpFDeDEAWNWXKU",
  "key26": "4ghZ2oKzwtRGr7b4LESjtGMhoRXjt1tLEYwrBRzCwDPfBtKmCBdpeKX4cj9Ma5ftzqBS7krbPgVsj4hwyNYjYSHi",
  "key27": "TiFCu3f3uke9KseU5LRYB34vP6ipZkxaH9JJDz7KeBexyny2L9ERFj7yDuS5Cnqw8FcDtb3EtZvZDkMYsoShU72",
  "key28": "hpPbv6ttLEx5B5CLBaL8APYGQm6NBd7y6fTHpVWj5kxFPYi92peUHvHu917hVbrbZzethb3oKyKMiW3dnWDWBwP",
  "key29": "4C1JouS9RjjQimLMM3ex5Q8QTWHhuWvZof7XDYmpbhKXE727mZDnu8StbLz1JREtPhnAyfvQNXpRW2ZuibB3DPzM",
  "key30": "4CyWKQLnkF2QtzSEx8Y42QRUMUfBi8SZQ8x4HVFBRhfUTXvnSCpxH79AEsT5LLW8TVK9c36rQj6A7qpFQANfRntE",
  "key31": "1guaWHoWth84TV1N4QuZoPLLKMjgogF7tTN7wjuTfxtsQU2wksxFeebf8nZG9VcQZ8SAE1EJPpXVHeGnothG1UQ",
  "key32": "5KgZJkiUhTp1bBbgYP34s1PxCko49owTn1vtAP9AG8znkHw2Dbv5vXwkK6GHToPw7e24U3ScvGAJ7fB6hiS7Ljzp",
  "key33": "3Zv54mWiHXez7NyJcckH8BLB8FKCULbozWc9Vo4KeuAQevQXpNxYbXyhUL3eBjFLbgKjH8G2FPRXxUJdjcXVEoW8",
  "key34": "3ArkBjteJGoNFmNiAUDNK1VSg6jwK6ekCRuf1nFafmKkszUiK8eaHVVFkAQynxquexbbwJHrKW5hXmYVbuPN8A5K",
  "key35": "3HKM4KpHhewt1nUWop6xDUF2yzCBJiJKfcZD2FvxHRpYg5ZtwdkR7Pm61nMdEjej5ecixCgjfgf4DFRaDQUxHiib",
  "key36": "4NkDt7q84WibzBKqFSXGJr2QBkVSQAgqysc76Aoh3aauagFVqZ5KVFinwEsWKQXwxi3oNh7b7z8WoSfM7erv8fp2",
  "key37": "3XkM5oWrq6PxKBU7mc8nHG3dDvG85a6mMir37Exx6yHmriPqRLDmC42wWpC5vhwEXhsd61PajE753PTieyQczwq3",
  "key38": "4ARiv4C1b7AQF9R4NcgTnkocrcmBYrQ3pG4aVxxvtCXnYqnvtNapQaTFywoUagd3gSSvurxNKhdic44Dvb2gLgiN",
  "key39": "5F2odSv6yLSZHL6mpPAdC3XEVj2j18LB1BVcxZCpZg75eNtiQuhnDj44cbg9JwatZGZei5tU88CWoTEjp6YgvrwH",
  "key40": "TyFLu8PqwoR1kFZmHWpVto1LZHuGqRJhJaRNtRCPQnfrpxEfwQsPeGbQyjJspK3v4Y42Xi6L5qwFD3vwPfYAram",
  "key41": "3n1QHytmWe9P7HcStkRcjsnMifxz2JbCc4m14XRnaE5v3GVD5iK8TjjCiYDyUZFaoMTspcbDxA238hB1hfoaZj8u",
  "key42": "5yJvyhhTRQzaJmJLova3zVHWoa5CG2ZJnRtYLySJtQhnrezYL5RzvNw7ehYH7tTqGQWuSgyXxz1z5gxvZzhxcENP",
  "key43": "XvNRxsdWohj42vaiKEyA7bggv3KnxfntiUqRLK9SE4Tn2vjRpqrMBmhp4Af66nhgaedipFX4vLpoM2zSy9T9j7y",
  "key44": "5NrSBueGESiHsi4GFGeNoJ1ZGiJRv6Q2L6CvQJ3T5A5s1UFL3Sd5mQ3KqmcdsoyQnjDgFZU9BvitQPhNSBbsgMDj",
  "key45": "2bpsYyLijry5sdXZTU5N6a7qjoc1kG3WyLKWbyr77Gz7qukfGxTcjEQnhCB1oks8xqPizxuoXM8HvQB1qJi5SpZB",
  "key46": "3hHXXMA3MqkyUiygyqcLxCZW17wkVpkZGZN9qBC8cwYixrKpmij381vwEDsaFTW4t3Ayosne6Rw9ypagWnTnSzdG",
  "key47": "2yFZ9hS5eScRj6p6HBVFtvuGV4SekR9soYz4oyfZjuBtHCiPnLRxcs9cVCYWyRD36uzFPm96Gd9sod2Tuaht5aZW"
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
