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
    "4SxUSVfd1pQDr1UpwLuLRdXt124tedZMLTcuUa2V3p8dKj7tgSLPabQ94GWRPP5qqxbmJQZgrXFWSJMFxgKMuGoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XqjZkZJnUzARBD4iVgy32eG9V8rSG661WPfg5ETJA34Eim4mPTDMfQaDD6YKzw69GtyXpzV4pq4ts4ZqYB5WQsq",
  "key1": "3jbx6RzSt5rkgdhHhQRShQaitCCJB159qpSDg1KemLFSNPQ2o4ZPTLgJLJdCn5U8wcxyq6EE9qUARWYLakNxJGqn",
  "key2": "5B2fcbdX7ZdgDuK6BKUJkhoaaWY8zQEPhC8vr8UFV17ApwFa9AzcNJD3EFVgd7uFVfv93ve2U67wSfSxL9hYiNVP",
  "key3": "3vtvLThKGLVX7G3duAadMHXfDSkARWgpRmKLg77gy1vHhcKk7bdx9vDJouL7oK5YgWgXfKUimd8i5ph7mmN1kQij",
  "key4": "2YiCBtt6AweyYbykz7bpgdmpHHi6bPVts2z2cEpVCCn2d998dZbGL2DYq7GuKsQZwq1giwNBHfswRERbjSEM6KyA",
  "key5": "3HZ5eRG21PYD43T775QPBm8SKemhp9Ab4FRH8rMQ2SVbXxRmancq8krAx8YP9EojcmbkHgVsU5vw8VzuMW3AUYZs",
  "key6": "4z7YkDWpdtJUq42De2PUWT8eYnmRAtSpaEzuALi2YvP4GhJbrzpyBispV35NzR28o6MygPCDAmyMVb1H8MCYHgj1",
  "key7": "5shCYe6Lzz2dCYsxhadxPamCGYx4b46Ux9U39gbGiD4gB1iP3ZuigZ68NgDnPY6SLbkBmtgDtMwXJGEV6MZvCBkp",
  "key8": "31ohFFmmiMiZKTDXz679Ljw4qQiVC24faHss2ZKJXJpv7UkMvUaDFyu9Z2VpLiPvqUauQhLfzTxyc7PqWeqpy8eU",
  "key9": "9pkZsyArZXanFqjjrTgJPc1nQG1afMdWtddiQuny8PjrHHheVN7pbxd6qoS8bE7PkAgBeuAN6yU2seeZoasGtfb",
  "key10": "3gjpWBmFVvoohPj7gCRwEwwTstbyfgyrKym9ax4RCkkaVxRm1FJ873bB5J18T2n7sNcf4RvgraACAzkR2XtnG2of",
  "key11": "37ofhCGEf6sHzjeaJF2rdGdeL3Ts8dboK1rKBDBhGkGwx8Gp1Ti5nbJYdY7yuT4PnBfUzeVdrjutqsBMpnapb6NS",
  "key12": "4LqgagkgMcfpYKQ1qHGbuZTFSvy7meiuaPD2M1XxXJM8AM1HQzK9X85NRFecTUc1mtjJjpqftmHgNT79FQG1Qpba",
  "key13": "4Wbg2DGyAgtSDMH8Ar4EtaWgXqNeGFkq2NqygWTt8UjZnHpW9Kitd9rLREaVVBaExtfs2oyBtUsyANeS3xEqgwMe",
  "key14": "42Zbc8vTXeouSJLtPtmspoEVugMjk6c2siT32NJSFSnABdgcMCK2YrWgUwJ6pw4uBNDEKBuMLBvDQM6GsE1X8ZeX",
  "key15": "hLLE1rZ4is9PeZ7XesJVi9xCsQ4XpQjcZRUdvAZGfv5xRCvh4ccux9Q7o7fRDjPiNYjRzQAFgPU4Y7AaVQqtT3v",
  "key16": "ExDMWGvCzohgBmiYULFwpMBbd89xKkPkg43NUx5ToQW8BqP2WH8G3eVCyRV15TP4F7tdVLe8f5rpxy7c8qsNZuC",
  "key17": "3RHYZygBhskt3DNknHBmjv9Y1J32gLvVXrvo4V7RTYfkZhk9kizBHstGZBPFp49GtTztmnBxWriWoJcnxD33dyTb",
  "key18": "5ztDJy1vtiEYzAYR8a6GqvRGGLW4NvxrFNUpuCevwDpZioXWvcnNA2qTYALtpcbsYa9v45rf2cDz88UHwJjAxHqQ",
  "key19": "2PCTghsh1DBguWk8T4bhoPvxnjr2jeSnCZk2NWn2gGPmD3TfXudUNwj1t6a7WrDiGW4cQazA5RFPV8xsYssvd2et",
  "key20": "3cC62LZL12MpikcZifuspmb5f7nkAzzju7zhRZm1s2NS8ghx1e4Sm6Bgyvtiechxp5YxCTq7HhJbu4UvyT94wQ9P",
  "key21": "49RYFEK2vMUAeyn6NWfBhKTgyKW9jEmM9ECrUrbpFDegDY92Q2ysiXntFEpoaRptAPzaFC56VqQD3jDMvmBorcKH",
  "key22": "2tmb5dmX2E3VMEaYrGGm3FmohxaPxnzKG31rzoRV7BEzc1Qjwwefw8cXUQY8bXUn8JrQwqHYGTEEjfXBeBNMvnVu",
  "key23": "4SRVUZP6grMY4VDUmQcF2meMPSm2JGWHYZFZED2Q2pq9VfDVmFJVS3azFYqnckyM8da1SNSjjJnHVZ4tUCvqBDZC",
  "key24": "4Rxe8iXKv9r5udE2MHzm52TsdkxeJ4mpdmXWc1DCKScpqKBYGKdMXgzdJVJ3ZAqjgkkbMNmouFfW84K63PTYUyGE",
  "key25": "36jGQdvEK7WPho7NZ1Cwgk2BUrWQmj6GvfGCXY881Hr4Vdhq2yUgpNo1H4JhK1JNF9m8zvF9x1KzMbqocKbVjhAQ",
  "key26": "2kaEYKZqLL6UxJijDAFPnWW5xpE6LnXBsQJm3YTesgKHvztCrmaNKaKGTag14Kub9U2uZndBKZJxoFGSSKmr6Jnd",
  "key27": "2b7ep25gJns7DwKpBv6hnCo49twtkxWyXFB1QTDKH9Dcj61CaTys1mHUMVwrkkgxjTiSumHm19J4cWwiEwqkrkCi",
  "key28": "5gP9QYvcp7aTrdM4ZBa3AtjkGLoQBpR9sdS33LQajHBUSLi9LF2z7B23eF2qFVuXrmJXcYXj8QNoxG4KxeoSKATU",
  "key29": "3aTtppwWPtdvBWTt3CXhqjUDH8BbyLCB5KTD766kqVg4zMovF2mt4v6p7AdvK1117YTKjQVTKutAyiBs9tj7S9Eb",
  "key30": "UfjPa6idMSxAWLvoS9fCbHV2PX46V4Tmiwb7xPdfEkiFqA9JjfCuUphaYajhq9PPG4YUG48r2hpxV2bzAj61cAq",
  "key31": "5KZQLAjteBpTGs6NSmNMwk52qoYYTiVsE3iDLAnD5E12jr49YTurMXAMj9vSB6yNpNt6kLpmYe4yatP3UHwcje3V",
  "key32": "5Fd9Nbr7pnQDVssw8g1c7MKpAhSr4eWdDpDLcMvJD13gAocsaJbzZg5uA6piSqdhrwX7FUJuJNU1Mfmi9BAcdvgA",
  "key33": "5vsWRxchTpntBoX8H8BC8UJxUxPhZk4px2T9NHfJSW7fXMu7Tj4jWrieELZECB7F6fcvrdDwtZWGoD4BfgbFU5au",
  "key34": "2JmFxsgS8GkHTtvaKaiBWW4aac1QbGHuMi4Me88cUrA9YCJ8Bb7TizMW79D2uvuVU9p5HkWxGxL4uEYMS9DgGjNa"
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
