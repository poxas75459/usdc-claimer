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
    "DRAmPVa4XWrd9GnYRnFBdb8rkBbp18nBQuCKhMvTaUqPyTpLrh5tydM31E7MKMnZ6Wwu7Z7juZS2QYYnLuBMfRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fA39SwPyYuLZUf3aB8TNUTAYTNvzjAR7tYrQAc1QManiN6dVFAvbhcGLPsqQbQ3QJ9Czg6WvCaYWrgXtrvRnoLs",
  "key1": "4x642ZydLQWk8sbVuwLaEmnmqAbPj67rJXE31VArUbiJ8H9LMyr9sEhoC8txLjAjg4pmyfey3dCkvUpUKD7amtWk",
  "key2": "632tR4MR7WPJqfejJcn8zpUT5bpqHU6sy8K137HtD4rKYfXmk1qM6NCuk2vyfxt75L6YQwZw1TmfKXZvhTn76CPJ",
  "key3": "3YPw6kPPoEBNB5ui3czCLQpZMYKCdrGkbagPmnhoVvaajv5B5rTqGEruTzAEKDigDi5rwc6DWwD3ZpP3Wc2uUueS",
  "key4": "5qs1UBrJPAqYgX7bLkPi4oF9pv2i8ccnzo8ZGfWoHxuyMzRcToPRKEdTqUB9wHNJ7ypRFMkNjvtjnEVApte6YjAB",
  "key5": "46Q9LhPmQDCoLyzMyaeyX6RPJoVDPVWp9z8J4PYTErDiEQLbvF28Mvyv2MAQBqmHXNnz6XXAFKwwbYpD9yjbUFz",
  "key6": "3cmKxgjLwwa6X6qmGhgSin99GNFDsA2binv5Yy4m4Y8VxARAFSAYRcqMcgsCooJrWUdTKbKLdN4FzhJ6yL2HWKcz",
  "key7": "8wjQQ7Gz4JdUBkbCoBhW93kZQCjCVKpz3c65EK5NmHXUC8SnPtfURys8zSzdhrmNxB3b1vyqH2ZtanGdcyE17eX",
  "key8": "5YfmZBy8xTsGZEAbqcrZfF1N4ifb7knniS8kJFvhecmRxztQ2ppjZYP6jCA1eKdidBvo5ikpxpb4aYiYDByLoXWe",
  "key9": "e2SNDRiRSi4rba9CoY3gLEw7eaTpQzctR9X47Zm2v39iho3kCtbzyMSsAtyce6VDM4GcjrWeUjPK7kvM4MVTHHy",
  "key10": "4MBpEKmUFs4YPRJhBQeajxCrKN1bW7dmvpDNhJ3wv5KQFij3nKqDofAWrt8Y162PM6ZdbQoGFnD752CA36xFWii5",
  "key11": "2JwETuM5UrtMNubXFX6ncAW8NJiZA2TFcGnbeJg8BcsU7QcXcdaS7qL8Q2mPMUp4Cyz4DidfgFapCYsZSccMU7GH",
  "key12": "4jY5GK7MNgCbtQDaVakZa4i6RpB3zexw9WvXXTjF519rH4DArFNQhHTU8iWtwucRLqDYZaMw17TNVhtYFMjCDkT5",
  "key13": "5VzUqggx7BXgYzjfcfgw36GgnLmRUU5npbzE16kiAgK92mvBjjqzcmg49X31vHpncA8ykqFqeqR8uontC62Kec8F",
  "key14": "2pUQwXaiMTQn6fRpNzSfksTwAJ96s87Kp6N35ASY3JHV1bHaewuxt4LZNTgUBfA2UhrnR8JqdumgmbNVWTo8EEJj",
  "key15": "3Ayug7Jz2v3oRVGYyWyf6Lvjy1DMM9JNdVGzzBu6NxgzgXSKvEjsdJqSjXTbCJA75X5kNff1QApYX95eyvifhof4",
  "key16": "2tGmwjU8TbJnDzo11QD6GtPq4CQoNn7RXfxxVR5swk45KyDraEfgfKUvmp1mLmwMAyTPbULvKzcYuJCT57dJoDrB",
  "key17": "2Z2kBS9Y4ocdiueLZkDkKtqs5HhckHrjim6fQrFWtg2Uv5ztPdLcYciLh8nuDKCP3NbRSx4Vx8YwguHo1uPvSKiF",
  "key18": "5JF2CiMA5WZkvR5TnAFZiSxFxAicjwjjBcJYhq9qgsztvo3B8aiYmujTPcccZv8Y2ELQ2XbmAKgzQAwLjEtuZd97",
  "key19": "KSb2vFwVZ8UgCq76KFtxkWnxN3t1eUg5Uesoj68A4aZ16Mx7fCp96TLMdoBz6jvw9Q2njs6gqnJuTrkP7ibsHUR",
  "key20": "59d2o1NAEoamGekdfaEuzo8e3rdtjvLkXhzRRxNYqL8SW7VJmunTeerY1t72UzGc6TXQ1RQmesPCaszqP6w8oQG7",
  "key21": "31cDh5E8NinCVDnND3UZzKkWoh67AwvaLmGo5yvcSud14iALEGFXgRd5i9Pfk5BNGfXzR3NehNZeaX9RK23rJikH",
  "key22": "2tuKQ4EYifEwLEooJrY16W3fJAsivj1kZwN3TNPAuTgxTJkGzbNC597Lbtnj6omFZ26JTpjSPZ2HYk9C4xK75EuD",
  "key23": "3yYDDYTxaajgphE8HzzCtUvPZ7eCstuyFBm1c3pBwHWmZsZLvcwQNPd2U2z3h69gUhAShSsZadMX8tStiBgyHe9k",
  "key24": "5DStKnCdP2Jewp7sHKc4coHRp4setaDjVV3bZLmhsCgcYh4dE1G5XtgCUNGgaz9zWyEbWvZTasDZD13WiRrDS2s8",
  "key25": "6cuUaKpALNW5NWx9RfudVct5YFoAJmZCFoKne6WvwbX14ZHhgzgX27wht2MY252aWTVdP6mvokKAftCGh4Lf4ey",
  "key26": "5kYbLbRVTwSKvbNJW2WmL8aBuLDQXQx61rG7hhzjkFRTYib1b84eACqtbu1AB1MNCVAcWpWcKoG3ZuypCWavHGb7",
  "key27": "3EwxPbKBruqGHRt7uEA6J28b89EeaBqWzpc1Ew4c6nHgqQLPQsdagcJFjPoL36uPUivJBDCWuNKWDDsp7PFoaNEg",
  "key28": "5ZtQCsAHoNPzeCktCcBfMy2fccFV9nvTngsZVmtVkFNpD1M9kYN6LrCvUs1rY5mQQKbDe5b8WbuJepyQxFPwKzPS",
  "key29": "3HSttagPif5mWc56knf8dVeezQXi63es8Azrf89tM8mpJXLo6DTiteC4oh5SdSt8Pqz4Z9WWs6YaQdctSdhA7333",
  "key30": "4vbDR6iSqbN3NPvqoYS8BEFiy874hpX9v11FNuv36WNq7C4UUbhn5XbfKah8RUGvdRFCaxGJgXm2UDWEZXqpJRZE",
  "key31": "2mfqWX9HXcpkSf3PDe9LjDwwPDDRPgZ61rJ6jvoZ2ZQf1CNLYp3At8qXZTdKXa6yGDgt3uddjcLFh7Lc12FUG6sh",
  "key32": "4LuGipKN1jYz7hkdGiUQReXF8tsGeMpb2kHuNAhjxiK7Y1Yvu635yrh9SzSi4wvh1NyQAZ5gry6pwgUUpHoGiaVm",
  "key33": "LYTZRZkiEc4Js9U45CyjHHF7GygPXMrEHHB7wJ1dZh9EssTajmbTpuvs8rAxhwYX8NfsC4KjngY7UNvYQGawWZY",
  "key34": "4G7jsPPvV42EPDK5mvhH3YaiZsxykt4hFxoWWGGGjpBggCt516ESLVbvKJAnocVNKdpextLXPYYahJN1uj2i3dgF",
  "key35": "4BX2WUeChhS8QXn1m19qLuz6JREaHP91H7L94WDvf9NvtFs8Qm8645QdSCRRSdpDmX6iyrkbTKdLpmwBFXuTxqbA",
  "key36": "2LZeDg6ZbytiQgXWzMu6jdAhp37Eunf7PHpc59EMzrztUJdGgrFnBPEbbYhG1gJZyYLtw1VGwbDHK4adTBLeXv5B",
  "key37": "5GBZPct58b7fS4yNpPQPThToXxt9xbJouV4jrDSdGpv9Rj4HFBaUZoBWnWyZeqD6hUY62HBXkGUQ41VH44S4Koip"
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
