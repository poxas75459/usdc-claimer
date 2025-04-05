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
    "4A5Q7sgyxCyfKstY3dw5DK9ZjZHv6uYh1uXgzkvQb9opzBwMkoo4w74dPAYbJdC9uvUNcVgKCirB7iVCkKq4Wq31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wfEmA7afhYD5Wt642bGbkNmU6pJHL1WnwVA1VsE4H3Ss8pAzJKkvkNpvU6qi82pFiXK3hK3n7gULTcaaR3LvS9f",
  "key1": "2xHs8QckBf5tbXRysmA4ouXJCvFHH3Th7Dgwhsyq2UBWrdpCBB4zkM9DSnbyMNyKsBdMjDrPhkdYPYZCf14jxrW8",
  "key2": "26rjPn2zak7VtZAsaqRBG49bv9unwT34iSfU3bLcDYsGg6qEgemJaW8Mz5sAwPojdAFjSWuDeXxhN6ytgncetxp1",
  "key3": "2nwhRL87Xfam1uLwWqswbMhPyW2cq6pUAeYatvrNq2YFRYe3kt8Sx7BKEvBZHQfiBsR8mwQJJb9ULB4SvpS9RS5h",
  "key4": "LEhrBMKp67Bu1oyBVeGeE8arQvf1EDb5otFo4648LXEGNaqZz7LF1Km4VWAhUDGVaUVpR5vmDMsJACLUCW2rPdV",
  "key5": "iHzFo76hqEbywic8zVCkFSReME7xL5hH6BnrffpLsAod6rzjBdNSWhM1gYvP9DcXDDuzNGaNCAiFRfocWLbRJMi",
  "key6": "3J7RG8KntTJ6GJQaZEAYob4HKcBa1WU2qNrE7LUKEHy16fwQRc8Z7SM1aEbh3UpZFESg9TymwV8xDXscdU1hLoD8",
  "key7": "XG7C6YHfWezJmeTVuzPMS4bkXcPB4FH9rYymAKvZEatpaqr6vSbnbDwnFc14Tw2175Hu8WoZuG348RxXh3UMhW5",
  "key8": "4SZHM6rZ7sFqNWSiVpU2aQ5FggsgALPWYGNHHziccVeXuuNQ2yhr5Wyf81qhhQx1DUsYvvL7dFBF2aWdrDw8L6Nd",
  "key9": "2W9kqYY8qv4sQxoapEWRQoJYxkMCVbJAY38yetne719Av7vKkwgHNYpyfib28zZZFDLvH7jHnvKSaZ9yEDtXjoku",
  "key10": "nmsd5Abw7F6XGWHBWT58812ZfzWS8sHoXgCwc8hHPEYJM72eVuD7GfkDMq7ePaV3qn5QiMMwPKcYVrK11fiHgoo",
  "key11": "5FxW4G4xgVKduyoFdyASF1TqZRex7FFSS4ekJtUuwWJ6NFBUwLj1x5w3CyaRJwq4XQneMpe5PDzMxuGogjED1mNg",
  "key12": "344n9UTNvYh8qANxpr9EkmkhhnAdpJUcCA29BBiaw1yfMRinadc9YmjZMoQAqYgTCCvvdv3EDDtCUvg74jYaWbzD",
  "key13": "5Yaiy3ChBmY2GGhSFoT7oNr8Sk7nJR6HtYyhw94EuiL8hCxMkypqBCVT7gmwfZ8kjfkBiQD3chWm1aY9fzdntWkg",
  "key14": "oejiyNYbH5cKhdKd1LPuPxM7XCL7T7Fzf8CBehMe9E8vav7ox5dREuyNuqCMu8ViekkUhpGsKbVEaxkfTwmKH3x",
  "key15": "4M7wbya1HiMf697d4eZyxyM3JdYPqedHDynh9Gqu4hRbARwsrhJ9qfytf5CPF2csZYo1P6cb4HB61UWDmo8F99iD",
  "key16": "3XpYPMyuwGjrr1FKqemkvqq9S1xbvsDqagRLPYGEvpphew6168sCoZvkuMgrqsMSkiBGq5ebYsiUU2bhGAgPUf7a",
  "key17": "2rMoxjahWNCAtJzb1eiW9LZgxc8tYbaSKoatFpqmd7EhHu7K5LaBeDoPQcbj3xXEFDCxR6JNZGhGMLkK5z3Gogwi",
  "key18": "3vYhqyhcujVviHnSofnoEwX4p2Ue1uujhfADChuFRG12LYowBfi6E8rNysrx49VJPikEEn7XeFihuTWNemz5askw",
  "key19": "4rCcejtcwFiPMdafL5ADnAFUqdSddYBkWUUc4pq1ANh7ipFtM8LzJW2kT2F5UNAe2hRDmvr2WoKcyFHNyyxhUjup",
  "key20": "3SEwauPTiqFn3azQmXd43aracTaWRTz5Q1xtSrMAH9WqgGgZjphAFaYgBbD33vBoLJRW4rLr1L5BETPhx9L7fk5t",
  "key21": "4h1PekheM5g5ACTZL3tzghAbTmATqP7yNJQBQVWuKrbGfHYB3vZJatE7pw6tr9zMPStA6C2cTGshi7S1d27Q1FcD",
  "key22": "331ZMRkWNP3XMx9j6UQd6qap3RWFRbqP1A6TGh4rwWSGdxrMbXQHrpUVmVAMVEm4nnx72WwQKNLgWoibDeoog6s6",
  "key23": "Hs1dY6fio7fhYRD1NdFiFQdGdQ6MRRB94FKagT8EPMJGc4MBHe7TFnxzjYEkbgjuFqKByZXRrW5UfVnZx5Ys3P9",
  "key24": "3Eh9ojZp9uGXQRgFiNhRFLxR8No21UXp9W3XkxdjdK95ntY4sHKqPcTRmLSgHfraCajqhHthDmy9AtiggTkYsSDF",
  "key25": "3CE8YiKd5YFssBsXPXtmR4e1D2VgrcGkHtLmefn6Y4sD4B8gJbYcXrD4k1tKAbJ7pu7XcGrNiXfWLibQQs5iUhdg",
  "key26": "3ZMD1ZfhwXmd6T8BmpTYtrsVHKoKjobvwHurBJZh8pU9p46dGo95k9X5YyB8jWRgwUkvoi8SLBY3otisHThwyiAn",
  "key27": "zGtCd6etSSfBTzM2WuajW4RvSnCqQ4vygSk94QP6e4386cTAKFqiaRom8rfhWgpbDsYD6WG6miwXSshdxamu257",
  "key28": "5txyMtv5LT6Zci6S7Txd2PnuuAnbtjJ6e5L8zuS6znWdtgF2NWxB7eJ8THdjS9uFkaKZyM3ZsDskunCANTdw8k1q",
  "key29": "5VwAUALLbSyzZqgEhshYhAAqFvtxzhahoeiLWrHGhTGoWEZyNK3LxDxTPZEtaFj3ujEuerNPcivUFXBRazMGQF8a",
  "key30": "4o6AaWw7A1Mq5tVtSG3c4soz2euyg44pa8whrW2nqYBEXfQuq8XvuFwdDztHPcjUU6G4R8QrMcZkLBpJbBY1XtJG",
  "key31": "5nTPt2CMUvBsV7zwseQgzS1YzJtosWdkoPxiG8bCYtDk55mNprsZucDY6YHjhYvxzChi1m5D6B3jArP4zLs5exkf",
  "key32": "5o8BKku7F7HZ6qQprXSkPM6xp9z5dxM5vgje9b9B8icnmY2K548kaU8D6SBzt29f5PVNRBvsjA71nHKX3AJhHWgA",
  "key33": "2a1pfEjVBkWREEnc8f4m2HziYQD3uLfNsTARiYQmHAXbMx6qtWrEWAU8pFiPvduqJJzZr7a6TrPajYsCGsmALLCz",
  "key34": "QwQ4TsAQpqgjgNM5enR4UrdqK1a6sMYvwABtRprCmpyEJaCqWTr4BNiTmKsX7U4n9FpeKnbUGWC7KoPpKMDDmxL"
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
