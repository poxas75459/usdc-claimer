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
    "5hsxNKWx51iy82GmBQthbo7s6m5WjkkdYNrFbHjyQ3hwhE3cEKBLhxkBZXwHvVxSAdR2NPzPHLEw7LSERaygR7HP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42BZvu8MkTTFHhJZ8BwsDaTDAokLDmMUu6CeLsJj948Ta9yTZdQmNosev4D7wbzgupXVWJCVJm6MgPUddNws8ECx",
  "key1": "o8DAARdHZTEMLGZYWdR1ZEsbpeo1rjHzKKSZhfytm2bxks7joYeCHdPjVUBSWCDFrZWo75T9dbPKKuDZL2XgFF3",
  "key2": "3juX2H3KVo9D1G6Tqg2sQXq1KKFjLpmYgANZESZEunsr5eUnPLcb6NVxa3kjDkZ9DQucdaftiHB3x4k1wGXAgZU4",
  "key3": "4PJkiREEVXdYHu4EJDf8Kn8WaTF1F9heyQU7xujwT9DHoQVpiMnp2K9astYKtRShBQM9Wo5BQ2QK7FKwvbRtrkis",
  "key4": "5BkWZ1nKD6f7VDuLJxry7PSQBpX3yPMZQdU2mk6Hr7qv5AQZ7b7ueWijbottGvD1r1HaQfVE9npNADGJDWfnq8cm",
  "key5": "4KcYc238BSo3hszf48ni4Y4jCdG8tQg7hHaSYnua9p5aVPX7TS99nFdUNPKi26hyMiQZJ94WM5yDRhUmL2LN9wX1",
  "key6": "qpteoLjr8i42KE51t9vqXnzrCiprwJnYoEYSGpst6LfRTjLYoocDURvjzcaw31g9Rx3Mn1pz2Lh2SpLqR2Dg9Um",
  "key7": "Xhx1hqLuPf6Qk7AzJE6ujLaYAvPNbNRqe9N7EGcvwSk3h5UuCsXxQxps1AC2k1Qczmxhy5HrY9SFiQAxaBqdqGG",
  "key8": "51cDgn8G5uFUiRVQeuNTmzBtPiMW5msbqsJcV8WPDeGTyqMnEe6rwKSgEEXDRBBJB5D1hHW2awy29ESkvrXKMy6s",
  "key9": "5nh53qfERiQXm5PHAzLvjFpyGn12qhHUVQPus4tmMKmXDutSJA769tUE4SQyNANgbYVecnz4tayw7cdVjXuurmHY",
  "key10": "2cyid9q2uX918uXgbJ1aCvnghq3ZXthWFEZpC3NkTBmFxLzudbDfS1y1HPJsVfJgWyVLWmjRs1DXNYFpJRt4XVnV",
  "key11": "2zbLmqaUxFqPxRihKooTFb4bvfCF5U8ZaShmaJ4rd23ScfU7pvj6Mdutqfmjr1M29mFKGEq5s6WsDKQYfkehkg2A",
  "key12": "4JUM58rbPLmNGd2mZwjsjwZDLmniqCTNuW1ZrNoTS6E7TWqLv9zkwizrLDehthduKyThjBJPFDGa84uV6GLWrNmG",
  "key13": "4SChkzT9Uaq46MBHWoamGbYcGqyE3nGoYNSu7CD3brPz6Axhy67B56hvm9AXx39cUSjqdbVApX7bYf7nXEFZP5ut",
  "key14": "3hMtqLtwpHEpBn1c112qbH8VcyEE7Qx93cG1JifKcJUvLAVLqmq8Y6QbkEqB9QGiQqC5cdq6JtEXnUNtj2vCBhHA",
  "key15": "4R4rZh1YczkEtUpc494WxhC75XZw8Ct4KrxaMYmwnqy6EqaYFuWz2KXhcoG73aSMF6CdRf38L8stF3hQeozamUSg",
  "key16": "3pkwjTNPz5f1PFbuo1KxE65AiVPUV9LHaHWdPfJAZehsGtvkmVuEJ8qaVdXny5fVpZMWk94BAZfMswgPWaXKkE7A",
  "key17": "2kSGfJMuyiq4wAjKHJhHthFUAzzemdMdntCpCWvBCkK6v6khVejHeXdHjj3qjSFqk7JAs3qTWcQBNg2hEqVTkbVL",
  "key18": "NFPxu1WLECRF8nzYVWtQ4TgZBaX39jXZ14FXkMq8dSecNE3NoEfjrq9bfMAGVYghXntKU74HBp4HaxPoHM3nApy",
  "key19": "4SbCGZ77ZtsqgzciAU9SyDMmuK2JQcKg8BrgKznX3DFNdW9Z9srk7y2gRD6rn2gbk9CTQx7qYm5xntdd1sccJPkK",
  "key20": "2QWmbkyLoQVNa6kmuvMSqutPcCGNzWmnLgBvX4TYRuaMFcWDn56WaJ9NWFLofcYAU1AJwQ3vskCKvZBtDRkBHVHD",
  "key21": "5syegFig1Kn4qfNS5zFHWL32fdrtFAesBzZB3wXr9ooQUv9NrKv4UcWzvptmFRsrQM8XQUQJqhSMLiNEwTKawPqR",
  "key22": "4hqqSyjPN9kdHzv7nofZRpxmyDNrovgR1ZBG8NCpRGhARPimJEQcnmizyJrUmvzAP1qyEHppmmKJ3w97tHbxxHni",
  "key23": "2dNSVVHR7qb272AQLJ4hDwdhRnoYdcHAD1Tog8vWqFWXv5yM6wQL7vmHUZntik9hHiMKSyNdj8S2FjiPeDonbBBH",
  "key24": "2unWc1Q1HtU23ZSNPdhkHyCiNzExw3zqghbgwS8rfWVt9MbzwTCkxq8FDmoVvd19N6HoJMPvjrJCAQ1tmEgx8YVJ",
  "key25": "5F7fzQESpcLEDwtDSuXwcBfgc9m45mD7NTeocRPhnQB4hEEi5K4FdXQbW7Dm3348TudBoFa5ifvN6SmZeFEMpbDQ",
  "key26": "4UWGbQwmuSpoHcqxdNnPvgt7gjKE9YtV17qMH6TRLZjsbQEC5dPVw3J1ExYS37Nj3RHKiJXwkadzDQfkPPiRbp1L",
  "key27": "54LqMU5QPuvYoKpwvrtkCMWL3wTcZnu8ug3U4PwtoUoTskUJef2EKQre4gBQphqP8jkaW3qP5vhLPU9UoQVpJLdx",
  "key28": "5E35GfEPvbPuNdUeCx8nvektc75qvxZjcKb1KHpWVJ77ESNiRQQRwfHChfWRAzyEWXJC7e6Z3RWaHU1sauNS2vhb",
  "key29": "58R9sFMMyHTFHofcePc233WJYhrNid5RFGsfR3gF1s9DqGHzivSXMhFH3F6gV3QK21EoCA1NR3myw8Hu6bwFVyq1",
  "key30": "55cy1c7QVpP7VRb4cM7iqq742n3W9QF3WfHuNNSmXvXTbGrqRA1mUT5MPfRmTqY6dj8BFzRucciBmeJEUYuD1deS",
  "key31": "58jAQd1YSQnbSggS2jw662Sd4mNU46YoKx9FjcRwpkArciPom9Txc8pbe42jTGtFxdoJqMz5ESba3Cks89vE7vTG",
  "key32": "5GCHu7zdycC6bWyDZT51hLKNxWfceSHwwrJ1nNJYv6DA2Q5GrY2nBTBFvwT8LtxPWMGXPXfV4A9GvvY8jKipoN31",
  "key33": "2XDFtjBwmikskaDtx1MtiPds8Pcf74pYA9g6XBPRNW9P8W7ow2KQHfz2NjPzprAcjhs9qBJKv3Unt64jboHurh8S"
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
