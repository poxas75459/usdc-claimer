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
    "xB4AsXzJE2C7da2774BMLdtrxTVnjjBCbprUvuMWpTpBJxPfvcvQpVM2eBTLbM3aUHR7Zuqvw3n8meS9iimfZdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9SND1iatJy5jurDNSuFaX8mKHE3PGhExo3j2RxxkffGiUhhbn6UD8fe2afRjVmN4nZRtSQ9PJ4QfYpvJUyzccq",
  "key1": "657xZYqDwzkZnbZFtNP8CGXwxDFFKDhuLVTscboKFq963h3W44fhXpRshfLGvPwopZp7Dj68EXpsqf5vHUq1DyZJ",
  "key2": "3qGW5NG5ZvxwvV318sMGMDsDC71t6bXvhZfk2cBetmoNM336jwbfJQ1X3YxcwZA8DL3LSFwQ3XfUM4WW3nFkFEj4",
  "key3": "5GtbsiAYjNmpWLNiaJ88Akx33irdxn6hDzBQrS9PBJgzmamkCv1KzTZjAVaZhJoMTuh5dhCACT1MVrX98wLHmLS2",
  "key4": "2ooqEhSSYfUkV365PpoqPeFPerjq1yei753Ndu6TXsjWSA9bateT85wxjtEGmQAbwnG7V4urYw1E6rZrufQHd2zu",
  "key5": "4EgkrFL8YQpqx79n4P7NTDsX2JS7X4TN52GRMpEo4RPEHEHiY3HSHcGNrc8EjsHpb1dCCVUNaXHRqz1pJusYMvSL",
  "key6": "5JxsNYrwSNw8sBvawFQMdge5ZYnT34q28u3MRcrW9eY4iH2XuXUBnSCpk1PzLkttPSTaahDkmSLK2jjCZ3o3xBot",
  "key7": "542MqKU9TVCt7rnenmjhYmACwxQKbNBzFbBpu63LRoogrspwNU6cLw8Tt7Ruroksnkkw14CvSyN4vAGo3jzGnQDd",
  "key8": "3fTQv29VrmwVMLb8FfWVHA77W3445vSzyY2PcSY96UrrFrZDxqQdTGdFn3H5FB5zmRAp5SAER2Y8mwxbtPftsChQ",
  "key9": "VAsG7hGSnD5BnifgEv8rZFEm1JVyHw7qDiy3FVx2Bne2xBVLVwaqtfdUQmJxnAbq1bEU16svmsYJFVK8ACorJZQ",
  "key10": "3JRcYtgvyiyauXBBgdqDCqSLS3uyEz7YXD3uapKFBAesgaeLP4BapTiwH5vXwfFY1YNLZY8TKyff9CbKc8tygSYg",
  "key11": "B6kZgbC9oWAeYjsaBxjezpKWsPGwkXmVj9GXABmmb8NpHYb5BmHYb2bAYy3d5WcJNx2GH8zvreFdnSpc829By14",
  "key12": "4dN2LoLtjqLgaPs95yxszJHPiHv1pS6sc73VfJ3AjL3AAxvjGujwV9jyzVorPnW9fE1ZBXozHWNQxNQTLE6VMcr9",
  "key13": "3vfwVfHgSpLGpin1BJ3Nz61Dce2ncq5AFk9ubkCxgaFPGrAQ76R8gNi2suacW4CqRwkmdkkh4ieKkcVjRVw6FWHC",
  "key14": "4MDvJwj4aJ1jDMYMYjbaBTip9EQUaQ3Q5Umnx1DJvCSamdQVmXra8rXEm8GNmKoPkcV2U1fknAavhdri4pE2AhDp",
  "key15": "2dBZEDAhHdWg6qanh4RejKi2c72cb237ZwZpqp1StUpEePo1YahRyy8o2hNkCHUHVVn5kTiJKqTwhi1V5GSt5bWR",
  "key16": "3WFF92Q3qZBH6k5JTGBVDZXvnvUHjkYahacqXPgRc3fc9xf9j9hfwrjsyg7zFeYpuX4H1tpfufMJtSzqyjzV3pqP",
  "key17": "48RbrmK3u452ickxEHWT67geLPezJEeEmugsG3LXoSTKZCMmMqJqNsB2XqncgE6oaCTQ8iV7BCY5dXUTnrZejJdT",
  "key18": "2p3hxVKV2eBDfNJn8ks2zcwJiXxHfrUmaqUGa52vdzkQzg4NVojqJ1RdSpSLN7egDsHBtsb9sg9q3hXmQD3Xoubo",
  "key19": "3jJSCbzML2GpFcNCCVjaLGmLbLjhRcgBu48ez3NhD4vqoxRBKfYxo65v1p9LqcQuoz8GLwSPieZRymbiCUhjCnrE",
  "key20": "3QXxzjWk4XWsoE7ZDZ51bu4boYGx7T7FHeNyZ3ZSvDFbcnJLubnFTb2h58yW7nCYDnDWxTFWby4MBp3p6G9L8hRn",
  "key21": "2rAQB6XL1euGDigwRpLSrMzHkc3qKndUuyvnuPGzJLXFbmiEC5JgX9hjCNm4Kwpv9tXFUgUh7JzeSwfsMuMEf5Y1",
  "key22": "V98u7YedjwRYMTkCkfSnJPnDgZFEDGWNG9LQcMmpyE9hBquSFUgcVrCTkb8XLeWvndJG3wtTbjEW7EmCSjnV4FD",
  "key23": "5dpXYcPQXJpcMd5X6dCNeq8bNXCAQMLc89Xmcb5QbhNPNSdffQKQramUgrYV3aHRXThdFCYUYJu4aGwxsxxbn7gQ",
  "key24": "37XjaGDbeuF2j45mPjmQEmA6ic89EeG44tDwDRgUbdRT6aeUy4X9SfYphmTGjLXd6NtuqDM1kMYfHQxwy2ikGDAy",
  "key25": "yrLgdr2fjzywnv4mcnc6hvw84UKit7HuqZGYHKeXnPztbpkovpyv7cUhyzo5unKu3i7n7Agyu4R43RMCVCYPxyV",
  "key26": "2kvxGUzpmWPuLmBL1kPGNhH5pLkAAYsJkThaeXY4Ct5oK2rUQavqJ8aniakBEiSWu9ZrXYarSFHsBAHrGvyctXUo",
  "key27": "auMLiiJXhFxf3TfH1TLSs1BixMcP5eoB4TrTeTVctceWokHUbnEhPrFPxBrmAEKotVhSNnxmqWbC5PCt7GPh1Gb",
  "key28": "c7f2mGArNhay9FoShZ6qcvqauSaeggy6n8CfrsqCXt6rB7EMssCEM5xQEgYfcZwNJiQq3ASHYm7MFBhAi7J1tUo",
  "key29": "hNrbSMLZ8K3G4PKMJ5yoy2FacWB3PcBkfMon9yXw8sUZSzKXUzGPpNXWJEauksET2uspchUh2NogAEu1wPjujEj",
  "key30": "Bq5bXYFULhcrsyA4iYDdAwNHdxque7SKwm5nxqeoiQx3cTZGveijDMEsuFPZgnt3fEJiD1oabcHfCMMQPjWfN1q",
  "key31": "3fqTtU4FieTfLrmByjkwerfPNw9uTa6shLDfxoPyEqnzZGAXv88JT1TFiwmDDMs5Nqx8xbYmAe2DgGkuD1Zya1ds",
  "key32": "21yrpnDZqA5ZVsPGdsbsAqhwscNJnCGe7XwQwAiN5D3cYLWoQjjfA6jxm72EdEKe4gBQLPhZzok6dHdvkKdtNtYv",
  "key33": "48upSE6wrvxYpXPAEwrkzAQNFZagEJf1fy9ELgXM3qRtWhCghqyjZgpRLVwwDRV4HxwKph1xpYYArRKMBzcJS4Zr",
  "key34": "3BQXYKmPV4rP49J3DXRCmG1iMJv2W9wCPw1gbGpF8PGBpHEDNgqmcEpVcXLk8diWeAGRanbmSpRZnHmathuWFwGB",
  "key35": "3icnf46K2wgGZwFQ6NeZhdgP2yuhQ4oEzydXmF6doCGcNf4DkH5sMYebiwufAwufrPcjM32ZUcjrG78CdYAHdJ5H",
  "key36": "5k2ywYRQtw1SaENG8cRjGBvh5akWXry5DLPSZUh5M9L1VPQeRstKCjqSEw6SWeV4ZMCLq9TPrGhs8XYiNJqdTJ5h",
  "key37": "4EqWKgAF4tEvhwS3HPmbiXS4zSjxsCaNjvyvF9vpnyqQgpQYPvoorVrodxbTLM5CL4vt66aupzjw7X8KcAfBHFbt",
  "key38": "284woHbqf9HnyPoddBs29udPuDDxGF5m8CT87E1kbsvuzqH3RZ2StGg1VuuWyJP4a62GoqKUihtNGJmgSemLsvPa",
  "key39": "4fXoidESGj819fd6zP9RVmaBqnqwq6VTv7gnb2ZtcLJe9hxXeLepvbxVpgmyuspM5BKma7fWeAA6Zd6EB9jiba5K",
  "key40": "4LygqM58jYGxKdkqpQD2rc6oYJ7ktvJDokznvUXAyYG69XTSegruLs3f1NXZyKJSdsugXvcgusDsxH7GnGv3pR1u",
  "key41": "4D5igxXXveUSnEtVgNiys579FuU8WgaydHcmLb8WQ3XumHLhqa5GSKkg8myfxupepX4rMJs8Lq8vPuzCE5g9xetg",
  "key42": "4vyyAnkxRRmRnAGNzAppKZJgA6jYD8YeW6DvnAASEmCHzxDJQSLRTjifJHWPiWWB1d2KkRcZKqTYBTcmbVDHRBjt",
  "key43": "3dnr11Km8PBKezzSfob8kaFQxgZZ5XW3Pqr71c5heyFcPYnL7RWNJfV7px2nwwc3LUY2WZVEnr69aWsMMo2KJkmm",
  "key44": "DVxkSNwALHaYab6QzWBJnkDasmv8VH7Knjacq8XBLjhaegTYyW2zukEA4whg1FvuSxcbHFkHzDcvAnagVhS7M93"
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
