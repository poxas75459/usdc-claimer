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
    "4FK3xNYxCwdzZ72bsBMAM1tJt2cesAFdrZLE5xwue2w3tUpba5qXBHMNwWJzS9SXvQUvD93fuNEXLUyvqAs6WQ7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V2tTWafxnWnQzRiyFeMPjZjdSw97wVGp39FYQgZvmAnYfan5DrKFVf7jYWHKdtR8nWnos6sG2z2rDbbEqb1j3Kw",
  "key1": "25iRRUwQV4HLwV2ufEvPt7N7sH5fZBbeuF5qN26MEWD3Gicfjo8k2M5FUa52CitKp8R2XPovRf4b82AjsBBNT8wH",
  "key2": "51KYvn5qiNz79uFWJAg6hfQQRGcr2LrgQ2SVhmSnXHUAhSerDJFMtGTyNhHJqZkzSEnEs4HtCfBJkiTFWRYfjVqo",
  "key3": "3y9CBFpKGKeZW31qo2R7ig7Q7UWKo3pSKza3Gp84pgg6YHViSa7xzSpf7teUKZiXYsmjrRwhb9JR9txVEhFyxYBM",
  "key4": "2iBVBvFWWfot3jgPwiM9wqVvLU67pgsQebe26M27U1nioGufr4mDyumhUBS3PJnpxnhKixnfJ5RYh2FyBuBbSkiy",
  "key5": "3nyt1JTy2YkRwZtmJW1AZQaodbjcSA4uhaUhFtpmyKvwpqTUTDt9AreLrBP8f51EtC9Yk47VoWGoUB7cWh34xry1",
  "key6": "AHLVjPDjW524wKkDF92Mt3HY2RMcvnA9pyp4y6hJkczLyRx9QzZfKzKMri1LthiZLyVk2v9voLKEKTdHAJ3LJ4o",
  "key7": "5jz2C7uAX8CQb1uPGcppiebpNnbQtkXLY5soZt7BTRTKSCMXccCXJKiQSCLJt3hAoz3Az25YCpEJXQNT7qM6HifW",
  "key8": "2HxJV2g25sXiBh23NqJDd4PMPrEnsw7a4fisy87dVg3k8ANuJ7VhPxpYjKiF7DWTGSqW75MhZVpzMPAnEUCjiWQ7",
  "key9": "5ieZdWT1BrkqaNxQ7tKACBVkjiXyXRGwTvyT1jZ3m6hofoqXeufRLhk17m2F32zsGRyHx142y4uHex6MGnZWcY9y",
  "key10": "iDn8K9gzzUcRS1mheUD8xhQhxF7J49ZKedo9asEg2dhaK154nJ1gGrDy2haHVpvpQGbWkf3nck3s7RKfrv3khtA",
  "key11": "iaUvBjRxwJJLnaEsTs1UiePE9g78VBWzW8bkMLPFZKJK4ZQSTnAW5hshCkeBkZbb5FRBPSkhuDNCrWWjijfy89P",
  "key12": "2fZEYZ92AL1ivEF7hTiZRcarCKBuaXYqT7BfrgB4NAq382wGC5HoVABxqm3vfefbZBsdEsUcbqA9hedneako131R",
  "key13": "bkNQRyk3Gumj5hpWk7DttAywuwZa9D9cDwtzWJhMQTg44w6tWn3LEDuJYUbL7GrzGwQfcFFARrRm3QB25AenJPM",
  "key14": "uJ8SjNSgGQTfabTHD7iUZdE4MmZoJL2U5voXvoov5R8Z3i1jfZvbzQNYMjjwqvfrUE3Z7Tk4EmyTsAfnsHqScHw",
  "key15": "3qmWRXpezYJJuSyhtU71MLKGkLGtVRz2BzAYRiZt8g5tfJifvu3URJ2NmfakofCukzyHgW4ZQMhiSim1iXxdUHHT",
  "key16": "MSY4nLXtj3CGLC2WgpLSusvgCtA1NRv8t2ZiYmi5JF9iroH5HG5C52JNnZB5syfpmHue2KURPQvymi2ZiyJgA8L",
  "key17": "5PnpViS4YHXWvWwhztTMrtKMagXbaDyB4bb6HxJ7aMkS7CcJ2VmcAXXsb9ukqeXP6hw7ponqH9aGj23bLqj39pAv",
  "key18": "2A1RpRLBvaG1DbWdRBbWMbWYfGJp9dbALKGYdz3SR1F4vaRxQqhvW2dpksURke4UrUg1q58A4DFCaVXAcjRYEFKi",
  "key19": "4N2ShJwUPNnmFyurzsyPi8eCYgJdvjE5syxZ3gGEEavFxTXpeKJoiZGkYPBo5fVWf7urcHjRKQkesr91oNGCBbnx",
  "key20": "529tgLSqLikubGRmRU4sgCv2P817m7DXaniDfySk2zXmWSXrPQHEEEFAFFEDtwy8UGFVT2fPeinudp5uRyYG1NRa",
  "key21": "rzhEpnmDnocsVzK8QqD4JfqducoDzDDCgaLrrSxpPmB9mdeSTyEQjQuuRyV5VdMDLaHVuEqMkLqUibA7tyxjo4e",
  "key22": "48xACS9pouCQQohAouVq4YmwVcjtQ4BwDQVa3XShJ8Hm2DBBztTWmVTo1jdAWNJeaEuWz4uRYo5tGTm1cQaHEMGc",
  "key23": "4kEA8ThTKX8FwpDjpJd6PxqFXyKDokjVYVcmgdXWtFjGd2rHR2wmPR7wNnCotdSu7bcWSAL7qxHyRJQd2YyH2uFj",
  "key24": "QtXRDXaaBQZVBfyRzU7iQUw4ntvWtJLqsmrzqHAu1kcWoy451xHsAe4q8iFjw3ktcBFKTT5nDvB7DjTi7uFxJev",
  "key25": "5Qs37Nr131oGsJJRaorWgFUZanYMdFQaceYxjV9BWPWdjpkBnoXENkS49Vh55TkYxJ2KM91NsNdQMHHEJCHVHB3P",
  "key26": "3qJR7mywdn3LAhV2DpJrdxDHrCcU8U4Dz9igHuKcYnVhfkM9cBSuAZDDSJ1UUG63qBqLBhDkYorKVSUEQ9x4sDkj",
  "key27": "kTC3ksgKe4m91dkMSYNZHL9JUK2hkTrP9RHCsb9qUUxoGw5163DQd5DB6jYEPGi7xRA7Mowo7iohT2K4soNRiHT",
  "key28": "3PamGohJB6AFQkXSjXVKH3VyGD2pezb49oFAPGccJa68G2wHxRV5jDdAYHXfCLX6jHnoWvopd4QniCUF8VXJc98H",
  "key29": "4dkGapp9nYZGhzMVKf4yGHqxyxpk4ozTuaqPxZwHosH8SDworRGwTtW4ZLorbYhVC9Kb6W1BdT1BsR5n2KhRHmKY",
  "key30": "4N448L8Ns2M9gf2puLwbHJLszYd84mbz5gfmTese4gpmsM1rEyhSeWEtW2YBNgn9wr2rUq2JsrtraHYYmNLFoUBf",
  "key31": "5eE8qQmFJPX3zacaiyNQzhPoMQrnBWzk1BwFKhWMK3ytUYRfTPMHDfjAZvpeqJHNhFgGabEoQJRKHR1HAEeMTQZx",
  "key32": "2Y8JjD5Ddn5o2RkhbM226dEtUvzmiB5GkJcjUCHNSbYinfadw94fPjNsksYy7nfV4ezTU9TN3EPMPcpGg7aLxxty",
  "key33": "58AoQDKtnywp2uK6gbty2BdwVj37iD5nQKF5bVQ2UYbGhdTbqWWFUNiToPnsA5mTn6eULYsRm94VqxQTQHyLPUcU",
  "key34": "2UofSkXZhQtkoNEtRZzb2swY1A8sTktE3MKthk8X1sj8hrQNJ1ZiuiPreLcK2Z9AGBmVVp8iNmyy1XhWzFDdQaLB",
  "key35": "3qKx1qX3ZNv5VSkF3koxAg3Mz8KR4FtghqZCxj8YXCHz8w2gKaEA2JZdCvM6n73NtVZNS6DwU7Sg2iNQPYcoifMQ",
  "key36": "5fJnB7YFJcDjBe2QpEdnPhcxCAVwjYUgnYQeUUFU1VdVy9wQpX6p2nbYhRwTH1u8FGJKSNnrtNDM8JYckMnrX1p1"
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
