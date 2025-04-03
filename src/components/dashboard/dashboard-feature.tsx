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
    "4jqjFv9mcgBmF2Zqh17r58XoDmTndibQntriMqa6akrdJg6m8LnufSwStCixJeCgTmjyr5ECRQLyAzCmrwNtYMgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y3LKNzdQwX4fxRsw3vBMzQkrfUXyzoGF4eLw2ZQXtwa3WyrSSqDPmog6UHehrrD9SbA63y5VfVjC2eDuy9vMeQ5",
  "key1": "5XCxTdr5LDANw9w7c2zbMjqP9uG2nxiCJy7f3s8pApVcZELEV8sKdkkThU2nUy2o5BPXMJQ85QMXANH3aHjoohMi",
  "key2": "3ptHf7eDQk8uVVX2HHykWwutszyRqQ3sHGZy3ERgD2QdNk6HTffJtnW8K4w5z77caUwPftrr3zqerctYG6EP77YJ",
  "key3": "4XjdFD6Rt9YqsXhXVRDdkpm2Dxvyz9kfc373ND1CB4VgGDfuEhna5Gx9KAJRPCGVaN46zpzyLVyAj9d4FnJfQt6s",
  "key4": "2KTxpZuiHpE7XYDndxEgSTx9mQJZ2UZYNQJi4daT44FTZrUMiHNP2VZRXVLiLm9AWQGiSBwkuNwaxk6rWJjHzWzA",
  "key5": "2fZT6Csofe7XmJFZUY6QXapZZJjSc2Ckw8wDiDUbqJScVGMoosEKiN4CdsHYgvVLmKYKmdQsrbraAN7a3o3Jj1wA",
  "key6": "3LwaCD6zxaMNzA2JjDzT1A38n48bTvEmZ5RuPzMEf2WeMroz9wdaSz673KdkSJXQcDHyNS7xF61k1cm8NffKvcVN",
  "key7": "2ivpGbRuhf5SFV815y3QCmD9jRhqYj1wregE4J1SzNcjvDmo6CyTiKHy1LZA753erbVth5h3vt1EJHEtnJnMfFnh",
  "key8": "3B573eAky6iixW1osR6b4bUeNiKmXWhufHKBAeXCoqbCp2JHTEe7pmULNq2nYRT2HZNHUiaj5EdXUF1fc87wnY5H",
  "key9": "3ec27TVxRdk85SB67FwsmwRhqq2ptbFmRvipcW2AcSz53WJa1JdnPw4nTntHukwRwJrgtekyz9r13yU91SjS7169",
  "key10": "EAb9DPfdpevvB1xxs6idYMf5fSrTtLjqsSaj5v5e7eyMQ4JntS2oekdpj2hCbrj2gv7ekJMnZ7zTaHQ2TujiuwC",
  "key11": "2axVLrss37GZUsx37RubiX2qG3YGwqJESSGrBiEqWKf8WH6bLKdjPjrbK4iKX9KCXvKFFsZKxizpS6niGsjGRVSy",
  "key12": "2S3ZehkGozRh1z9sRs9XK2fNwUHY6ztF2qjLwWya6p5XLrCwZ9mREWGzKi8aCgp5UDuMfSt9TbBW7LRdfPyockxq",
  "key13": "4ZbKkh9k2JMWuxEdHPCdBDK1azLGvtvMyVothyRTRuQL19ZgGDxxFoKFfCn1NRyy1aSVALnz6aJkB2skzj9M1G3H",
  "key14": "5rMdN5MsmzMFp7kbNCsB8eR9UpiD9YD5rsqqYuW4o3h7rr5oQgfqUKhWLnqJP27eh3dKmKZKUqsk7HvLudsa53Xn",
  "key15": "2np6Ndv8rBZDDHiiQnkEE8VJp1MQ6vKpzdkRdecU7MX1FYZUEcWx2RQDwkVPUMaQnrKgXuVFGjTMCRwNYpdn2z78",
  "key16": "2mMKEnVXSwduKAUfxEGVuJE6pzWLqfgwAbcgKvkhwaysgSMJBn8macGmCdUnNcGg9Kx86KHUafC12aSWzVCL6x4f",
  "key17": "GQCNzSqMshQNVYrjT43EX55BDF29ev2ZcYP9yjoMFw334KiR7tA4SDHT6WbGDJ8byGMytAFTAyyiUYHFGAUe8C1",
  "key18": "5CfaGeUJ8fU9Yx5vwYGhou1koiovsXu9SSsvs4WQ5Fe1YoAKr7ZtXjJEZv5LPTpQ8ZEhjXWc3rBuY6T2gH9eHbbx",
  "key19": "5KNv5MBWx8QeXoLXYnDXYnh5hN61NzFEnCAJnYAGUfnTcKhF2obLHbr6kRoZf2BBbeRJndMss13jQz1uNnpjYiPY",
  "key20": "2qkwoviaFdDDwLw96M9UGvmuDyhp85ukNnfZM6B2yuZUo8EENUuwmJ9ntwVuoXgPPQ2RJMAEptpGbFZcCnUybDUm",
  "key21": "37uWCdunG65Lxta9j9iuobRK62h4QMKrA4CAfzZRfbJcQPuP67Qwvfo6ZxUUjwa2eZsekfhsi76GpBv6PKUcwYcr",
  "key22": "53raSEEkRZs5jXCyQetE6kHpTpPhgz5qn5ns9eq2yjGfJiJY5dPzKVRwopqQWjjbv5muuD4i4m5wMeyyZJPAPkFg",
  "key23": "4z6GiFB9pmmmPSi3NJeVYpVsuqZs7dzYHjaRXnmRUc5MQvnQvKUhN7KXZ1unMFjxtcK9wPETDVki26m83ResjXhg",
  "key24": "GKqjCGJ1goyJLv5q8Q65trKzdkidnrNtgzABxzgKF4K9XqjsD6gnHgb3KoLRUi8w1sYwhVCFgyLsBK1VMwWTHKM",
  "key25": "4XuJzBXLgLiojvumT2jsmwXwgYefHzXRys6usbhTkhgdFYFkGa8nT6xL3zfxRZp2FGZiLTJ74UD8HQ3mwDB4XGxH",
  "key26": "2newQiUfmnPmLMniGK7bMDVqUPovYT8MJucHhdjPvYXHFr23tfzdjTNU324r12xKqmdguGdYHBSv9mqHYbcDemT8",
  "key27": "2TYwk9QEt8hPg9npDdDAjeFfR9oGUcftjqiZEB12po3G1GThBoqXsevCjm68KRdVVd7VrNkvgM2t1wiQEP9Eb4Wx",
  "key28": "2RPBKhZFWEkRTqpjVVYLH6PbKB1kHJ4o7A9gFL8fmtwLpM3nP6NC2867aUNV5Vc36Cbrs9H6dchGxJyzxTzMWqwj"
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
