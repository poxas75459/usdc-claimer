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
    "wL9h4sqmyjf7nq52bGZoHU2c5XDbFir7RSPPKraGMGCkQCpuxzSL4MwNx1NLQYbu4XPvXEJr4KN9jw9Vw9Qa3Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E17nLYiyjz5BLFZQmwZd72rLegeEsz9XyhZZ7RaufumyKW8NyYYisU4JDsLfQHzWxT9x1W11Gws3bKXirWmA31y",
  "key1": "F2qPkQDifQLZDFHBHCdVGowjSUmJFWSR7esk6gxEhvnS92iDRisuJJrts7LnAhwG1QSegHjGeyZNsL3GdNcdbPw",
  "key2": "4qrXezz2HYgxVJZXxKE1rRwnN463qjZrCTiEbYoTw3HCYjhQHM3mAbKLwredGtNFu5pTXWfVpDcvS7HnmUekdmY",
  "key3": "2bcSyYVGPFgEoVmcGgNTdsxYyEfdSHX1d1p9xxy1YZhkNK6USRbdDtw3P5bUbpDBrL7NaBobsohz7EGUYC4sPfEw",
  "key4": "vcu6mVX6QvNB1FBfM9cFYLoJa9p6JpKafR2SVXNT4rYVZMC7ekHaBRcqVRV1QQXH7B621WvCyMeU7gcYCb8M1Xw",
  "key5": "21M6i6XZYTsaBLdVbnXjL8xDwyvTNpVxeEChhqfpsoKyLVYAF3MNjgG2Yh5HVgMmQaQiD5KUgA6rXKXfcEoW17uF",
  "key6": "3kQKSiCKq7HpTYbFDFxWbB47JMVGghHNaSAEfuekib5DswEjTr3FUr1xPm8CyiSZCnwtKLrNCQpkAe7c8n5csxyq",
  "key7": "C7G55kMCAAiaYhizTFHfwDE9mwoScsgK3C9hvrPPnrG9wsYeGFp5Da2fQEM2nVpeuwUFEy6L6ZNecAha7YdfyY9",
  "key8": "2N2AKmg7sZNB4NXYJTLt9KJjF8KcXKrmKxd19FXsjtuRuLDVKUBUQcZpHuMWxdyVKvX8BjA6BXsvZccKv5STnXEX",
  "key9": "YDTFqy5FT9ei1dPzs2sApy4HeVLMWs2VbZTsDY5RNAWX6hNh1QVxgbMcTubdzZTpsAByDZLE8vmNWYqgbRPV5ui",
  "key10": "2TY2WKckXBXq2m1dhkkhZiPXgp9pPmiZ2tgStu9NsHAhZhKngkrUX83ZiYySUH72NLxu56psma8igWfPGD3hEqcG",
  "key11": "Sk9wJyPfDGznQ8KkpV3s7ptnRtHU6oPCzxuag49khwZUbGVhv5DCcPn47ydJAmFvf1aDz7jLNMUZmTKDHF8hjME",
  "key12": "4hHHLQarpRnQNsoY25oT3ei6UkueTCA5T2XT1nX7WLRMiVoyvY5FBfD2XuUHc8TonaSPTvyuZy8VAwr1tS4c8mMm",
  "key13": "2mdrh3a1JaAc15KvdrCFLqy2mrkiBN5L2DUNSL6Gyer7z4acgTkKevokJH6JxaicoKLVRSHQ6FTGgebNjAtwGhQy",
  "key14": "3KZ7doyf6nWTW7nsTApgvrnFevrgM7P5bd6LLkx2cKnZ5oGXNpaLiZtyMnhA7Sp9geMgiexC6WGVnDVriXM2oUyj",
  "key15": "4jsK9wW8DAg2pUj4kELEqCf6tERh2SoijTFCSS4tPLmHpNdDzXnBvF1A495iSDTza9DTwVmpzZnabJuqcFbfMpEY",
  "key16": "5Yb8Aya1J3DRXD2YJP2r7K9A9tfqb1wZc9PZBgsfPzPuysQuV1zSUiC164xGbB19Kxo7q6RH4nay2kRfcF9cbyY9",
  "key17": "2MG6Zi5vD3u99XpNzh5ZRVQ9Bkp5KEwk3ZQ24Du5vqbZrvGSZB2KZFpGwCwJp2Kq4Wzho6tH5Vad2fqU1vtqLCuX",
  "key18": "5Gor1hbHfyoFsXWAT3bKH8eEZCZrFnvoeH1q99yqCCdSytaqexXesW5Dp59GXDUAxPyMGxU7qxecozhVrAfM7dt",
  "key19": "5wzyHcsUyaERwLwAoXRtQUhqXoxvFhTJ9UQGQrT2G61r5XfoNXEVHHFJ2cN5jXteZA6tGfHXtW9XN5m9pD5Xjeya",
  "key20": "2BzoNhtex1cS4EDM9LiMwm4XWPrmGnXibpHCgyub2Z7s418KC8Hf1v8NHiHBvHKshcAwKH7J7LKC1VfXwEL4bsdH",
  "key21": "3GmLGqUocJ62cUfzr8Pe4naeSaNUEmtN3yjaVgMexJ4NxkxqhvrBNEFi7mjcRGUPH2HTmvncguX4fQei2TWYEvk6",
  "key22": "5R2QiF1WmtT59kshPoLHPFHGWqdmAVz135JMVcMCCVUqbfNaBFnWy6SuRrt89FeqMt3o81hFL4Q3ivwHDS1Zq9EC",
  "key23": "3XirK7ocRjRvFewt6y53ozaXJjM9mik968yW81FEwyfcXpXAz53Zq8DfpgZRRKVrNmE6Y9TuMmVH9pqVUSuS585U",
  "key24": "4bBmcfkmt23sLE3uH2w4uBeTy4cEsym8pJGcq3iZ7jh3DUFfKck5Avp1qYn8HK71DUFpGa2JrM6nyscUKGM1a1hx",
  "key25": "2QYUxsAbkUKkH538NppMKh8rLLZ2CLd1DAn8fkq6XpLE63sTXaNnzw2Zm3UVM9hPX4ytrKqP4urwVzGKG1Qmw2Gf",
  "key26": "FmJMmPm9w1o9nuLgSQ7LfLRLUujKrdYoxCmmkN4ihFxFwSjq6f32dfzjUEGUZwV5ww852Ji5dtA9oNrkkUPpgpM",
  "key27": "3eRyLZ8YHv5eE8ze8fYTfaMPFzvMsWN8qUgSwLQ64cTR5uCfmbybNmQ9wKsJ8aYKAga98hQLq3VY68WKvMnyVBAN",
  "key28": "44iK8bLwKN794pqgJCf8s2i9ygugFY6SywHL1uqTFHuv8zCFC6PThvAvG92BJgNhZQKcqievXRVfstxJn8p72j7y",
  "key29": "2jj8yLkH3oeZm5Shrntj8inZsUyEZ39uAZpaaNFURB5EJu34UoxvJv4NcBfiEXQM1nivscaBo4XYHRV1zjLNYVDr",
  "key30": "4yUmeLM5gqGJJrEfPk7rSwYZuzR4nTH6xFanSaMAjB2wtXU66T2fbr5KKUZ1CiveK5M7FUGEMu9QHEPwSEJ8XiXY",
  "key31": "3XqEEUKSVp7woqQHhCfv7Mx46Ar4e6rioSC1xizUUZJ68hN87ZPNCvv3jcdfJR1M4dnXikYLFhgZ9B3q6VpD1JZA",
  "key32": "2bPcwZKuk1vZQo5y6GEfnKn1qyZt8zY3gsRegkPzToJ9La46cEdsNbG8NuKBjKCRmMvKkVTgQnswQybc12nim89C",
  "key33": "3U1RoXUCY4tCGDP55mWMqU1p7iUSHbRuSVk1o14gMW5apEbBzj9TPh4NKEF8J3q6cQWDoF9ERxHmvwofy3GQzvjd",
  "key34": "5Doh1BPzyVWFPQPg4dpwVLrDGW1hXQvehT6zHbGbQG6gyPZu5NeFuFMxWjcJturSa9AZ4qqxMiCYdmo7ASfmT7sU",
  "key35": "dEwjTRp6Q3tUpUooschrNQysZSjoUFjVRSLDiKE2UP6KMV4eXnDrURneToZXMwwPUNu7b8oAzW8w5XFtuDGnoHP",
  "key36": "5cgUSTwrCE8TjQyDvHc1vySZyss6tfHNr7eqJD5CzgqjTD6ZxhtnmgumxgNa6bXuDFYAbPjh1edTxGvRzCfxbtnX",
  "key37": "433SfQSvCRfCyCnq7o28eZHQ1Gj3Mrcvpa9iMxMvdHe4mgF9Hg8U7mnFXT1R3pgPVeMAkpBaDH3HKkfEYYnNsoMh",
  "key38": "2VWsHAjy6Fzz5CuZgqk7YY72Nsg2QSvcuydH7DtTtdf52rjSTtCcSMN3sY4XrC5Q24XBUyCFsANq67tsij8PVZ7T",
  "key39": "3apXMdNe4nVRaTop89TTPZmr8cyouVWAV38UUL4StZMzQu8jPjL45ER4smbRwHgUAmB6teQ7oNPJXbN5ASoUUDXV",
  "key40": "3UYrH3mhQsDpCHKQZZdkkKNmH5MNYqu8WaaMveVLzPvdWhKSvKxL6e8icSKe1V6TGYKMtPxpRXzoipG4Z4DJJRQn",
  "key41": "42ACxKeSLgEUvbmxznEq9WFgpHVcYCGrUZaQXPPRu61SpVMbnk6yh9pgbYzTTLTX4xgEBnsREeQNMpansnJp5cTS",
  "key42": "5CpHe77fowVNYhSzynh877ogyCcZzYjyagYwThS6YWtFYV7K5NySS5e412EeCNTJM18fGANKsJkRY2yEgCSodMxv",
  "key43": "3AR6CQ63LKfzgXo8DnKdwH82HUQsuKiWxbEBvTQtTN4hf43zaV7kHJ4KnDvyrPqCmEe2GuQGxd9cQZWZdu3omZb4"
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
