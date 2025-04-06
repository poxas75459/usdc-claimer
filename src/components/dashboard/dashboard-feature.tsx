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
    "3UJ3KVPquLvkxYMRCHvTEDb7C1KKPMtHHr6nRg9q9dQ8VduJEh8Z5AP9XrAC4y3M52QS5ZDruhKgwmxFkPSwPRaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djhzHKVeuoTAZ7jcPhwrTeZxpZY8GgwL2if4Bhs5KFZqXhUDxd4r8mSbCtzWEuj5YXu3HZ4hvqRhLLU3Jr5feBr",
  "key1": "kct3X5bmnJNktd1bJztafEiUGPHMcj9D46oZmPtEAmBmeQvRYRJoSeCHCzYUudaQ2s6JhaZVvmqjS43DEUhPgPi",
  "key2": "3yFN3J983B1rHsNywJ5ABEQevTKdaXefgWn4KdWZM2fXvrcpFXJ2ntSGMErAZJDrXzrLhoED5gaukHMzsySmgg8i",
  "key3": "48k5xTPbRB6AyyLwPYzDhZ2qVdnoxhJQjRFbBHMUukF92HMdM8g7U9iTAbgkQMmLn9uLtHppK1sTcNwhA1VvwEhu",
  "key4": "3MsKA8jUJ4qh7oAbfNJZHjNd94xBauriQJp6BVJMtmCX4bpjiU4PttEstgRutszTvZRbchnoWfFqQ6NapZqxqLNo",
  "key5": "2aTCgzoCqv86vahmMnL6gB3VnXUiKtToG4kbE46i2EGS39gf1uubRKPAxfZmCFRuYrdusyLX7zb1NSmVd6Tgcc5y",
  "key6": "EL4NS4Gbzu7e5g4eLZp8ZBQboexP4F5sV7k6HeaDaRrtNZe52i9oKLuL6nUnRtzM2toec31YDFovArD4p3szFwe",
  "key7": "3QAe6n9F1fW336ShA4Z4uyT9zCBCuMzw3rT5PQVRDucMZ1kZguep9oJYkd5BJCW86GuRctBBSjxMCeuQoKSbSDts",
  "key8": "5g3ENQgaxEAKL7x1TssaDjw8bvXffYwEKWDjdvRwLHimosaDJFzZXQBnmDUTsRmVWdFiqFK8P5AHHuVg8L7rkoz5",
  "key9": "4K9Zj6LrP8fqKg2zCwAmWMwJKAprM6YAePB3YXtCDUJ12DKVoSyTVRztzJ4tceDM2G13J7VnSHWjnhsJQEpZusrS",
  "key10": "2zG5dM4m6F2Y5c5Ks1SecBrdkRhjg2gw4pvPBse7Y2egQHcqMPGcQB2Jjc4YggERUjoTZ8KcJ7TGDN7e1xyUGab4",
  "key11": "4uVfLZdTz3L69uBbnrVV1q1HAzC6qszetNz5nCXGVCDF1a68hYEq4xQAQnYsx4EPrbmWvQQpUkp5gaTwBF9Hnhs1",
  "key12": "3j9MEgK2tjjs8f5NjKDbqirHz8X3FQY7eNzfk6jC74GDsP6NabHi4KyjLggKMCopqX3Z2gocwExNtWATx1NhR97a",
  "key13": "5tmXrHXFyJ9EL2Uk5VA37RaveLnYnqgHNqdjxCAmjyasYA5amEcDSgNFFRtuWQMFHngv9W2paCFQvhqePRe9eg3o",
  "key14": "2bW39GytX8YPiQt2N6vwyfhDF155WXBA1LaukmYvw2CzxEnCCJJTUHVr5yfm7X5BxrL3AdJqrGutWdnXdQo5Te1V",
  "key15": "QJ6WDJSRJUYKLXYUotuamHfvYwYP9e5ScyUKspCQnY21uiphpQ8Rq8McjVpmEY9mrXUVEmHqawpQugrmwWSHcPv",
  "key16": "126a69gx8U1rUpX1RtfLtLcuUcgctqCNWSfFSCuJSoB8A5q2XbB22ZnGrwPiR43a55byBESsbE3AR6njY41kNGWA",
  "key17": "33kyuPeFhjZBfKujrAYcfLjQxdvw7iNAfTxQ8TUGd6sAtuPtwZE2BCjFTtSERgWgdiSHZtN1zzB1L7U3zEdomwYB",
  "key18": "yqurpFpnYGSSaJyUMgA8pmeVJuxuAbQPueEKJzdF3jJSReHwoEJoeh7gxBxQUVM99Nk2XMuyvePbEJbHvZ8sssK",
  "key19": "Xbe4Za4G8eqFrgxeBdoSnS9P6v3Z7GvV1QmyvYZjvD96KVsXvqbpMcC3392ae2cuzSShwoLZALNjQDJhdxgE1Nc",
  "key20": "3vF4DZdRgyEdD46EM6EPuuNp1uz1jEYNDP3Co9FfZ7Q9EmN5fUiCcHY6BXscHCp19SJMbbkuwQxaQAoAdSe1RoWx",
  "key21": "4rTA1zDp4Vhvz9ezwYbWSfurEnK3W3wb8u6a353Ta3p6G2pKL1ksg7qe3harid2Zu1r3VtYM7dCWKsDgi82FamfQ",
  "key22": "4mQqQXesYsTWQ7vE5XpjKFXmgGT5gJTVonFomN4sgVu4osc6dXabwM9r78WUSmRPkHKqRdSgNHS9mZkPYY52ZYQS",
  "key23": "2Wso83AZxWMPdN8UW4uKkG5QNFN6scQ7mu7B9LT1K9unVqV4D6wfPvRDfQWtw5CgJo6Qh1K8eKP58zjSaMJM5iTr",
  "key24": "4iFChqRTCrFYvNeVGwZpYCXvXuS6P6hrnANeLpmQgsoRQzdKB2A5jYTYqR2n7uBxQGeYtLPxhsq6GE9hwBLGyhua",
  "key25": "4iBUmkhJBXSzefMhPjXr8uuHuKaj2KEwXLLbooPcXj5LbormGikzX82hcYHFHGHF97dg5ZGcthsQ35bjiNJBqnPU",
  "key26": "2MNLcPyfZ1TeeGLNxpACDzn57V6B26CLthq6XuRPF5cgdSzGsGZpWmbNhwA9SERsA4udfBWjmEzftnAi9w8BcNvS",
  "key27": "21WKYJ9FPC6WaJy1GosQ1Y3j78ZaHeyEpSe6PTQGagi3KuiMna5p4PYeSUtv4P4A3dKHB5ZGDaxrtP1Agy3DLqdM",
  "key28": "59pxYHHE5BjxVtJTYCATgwD5mXZznn9Ug2SCxoZGvWe1rmKP47g9UsG5B48n81EPsiEV7Ucg7UHTTWpGj7ww6AdM",
  "key29": "71zrUKLrSKANme3sapgecqDk9e1d4TtVzUcZ4aatVjdvbPQWiiQMfwjk4GjMJkSRgUK8DA4jz5F4GiPCxbaGYVy",
  "key30": "54K14KxENYYwraybPVPPNawpwY8vH1dyJyvUQw4fwxqZQqUsTvYkpruoeGEaXvkQL7RPLCBcwxLdoC71mzTtAT5P",
  "key31": "5M5urXqjgwGcxHZB94u13ZrVT7MMcuFUeMAWpm8iNRPMEstxj4ZgjhJLmAZ8yKXSQzMQg9cK8NNr1eoLb8PRF5qb",
  "key32": "2HCmY9g2NJuo2aY6g3oN1ooDS4YxXZMkdocBS98ZzN4bVGGZ1AMx9svcQqSsfh9VVum6iHo3FAKp1sy6SgisWSUk",
  "key33": "5nd37dMusEwmbsNQBgx8zXNpT83LQXrv8iipTDMbavnwGeaWaHzjtg4XNzqsEmMveWzhPwwL88TszBSu7C3td5Ee",
  "key34": "3pH8XFUkDWVJtVv7yLrYpDv5ug6onfUXngMQUZXjNeDL8PiwKseBaSiCspYiwFDQeeoJX8gWDmjp7X49wwiC6LmZ",
  "key35": "3JSW42YYgV6Br77B2KtsRUoA1pVXXjdQZ3uC5U1nkzoMHPeDujATKjXd1H2Jf1gTKV4NPa5ckN2UDfBm2xPbXWKG",
  "key36": "59STtt1EAHcsJ2TSvj71DrEy3BABwj2VYV9FQRkTsSsv9ujAQiKMHmMGXYn8yx9GCWE52rD3REbdXSK2c8zumwzo",
  "key37": "gHxuepzQy6XKT3ujw8YQjptM2aStLGiSL45P9whNy3AZ32Zz39Px4Wvf88CeaVowxZSvNzeYr3dqvJdZdAXtUN7"
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
