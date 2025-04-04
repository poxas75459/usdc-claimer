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
    "2L2ZeRh3yd5UUuiaeWUiu1esCaiPFDwAxXSV7CUBkSrozXTwwJpWx75j8tboVce7RUdJukrnMa7hoTXqBBCc9J9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BeyBU5Ui3qYD6CFsdpb2JFi3nFEbvurym3C2d63FMUsQUTb8aabxrFwWcJBCdGrGa6Ze3jcNvgTE7gCTEW75ki3",
  "key1": "M1xZiebUzjXgDBhs512AtHYDoYDPoX3bSzmZteaTFnaLNsLWeLzv2MCM88VC6A9yqq8agmrRzRvCtQoptrdBZT2",
  "key2": "3VnKtjkBeY5vmkqgH5S8fh5minnryn26nKdogURKCPiCTWg4Hc6hpMFmX6xTVYxhb9AGB9n94YSX5m5Zi88DkndN",
  "key3": "28fUjtZK4zpgjq9e2KVgz87vQaHG3hXEtMHXHM3TBK46exUiAyB7s5sXu5xD2J8hQeERo3nC5Th3e2k7H12Hkwk4",
  "key4": "4FkBpnh2GPEYZ5KC66u8m3MvNJW332ne5PtUrW2QmqnZyAKrGo4Y1aoVWP4Ue5DcFMfwo5BoXaVLKjdPHzwj8jQ9",
  "key5": "445bW2WZAcd8GeAgD2nRGPUN2AenVBw6K7hhdXQdFe2PQHEvedR8zqTtzR6rNmLzjwRfeUuDvJDKiggMmEgobeUW",
  "key6": "5Ehnod9zZYAK8YzJNrJ1FurR9QCCFSGXsL67qEhEH3aqF2C9chPFprqHxScjLYDyUbXwx6KLX99QHschbWJtkaud",
  "key7": "3JfchxFHrvuEnW7V2K4AzQ6ewQLUvaRFA9tqDTF8dPkGc4CFv9NRQpV6DfYcmrk7Ub2LRSBK18yTGAm2s3HeadDq",
  "key8": "SHtHAV1wBotCqAoRrHC9PuMRrDBmoLujNUU9pKS38fFhZQ6aDd1XDGozQWFWwEKuNHKck7XCp2ThtAZc8VpSMJz",
  "key9": "4FrbPM4NX4VphQfc4YVLTcHBdu2rnEiRu8qDtWAZTmUZL9kpHfoMbBqg9UiZpdjsyYJtciYWwQeZE1A4JEREfgN1",
  "key10": "n5y4ZsaUgn359gyMCqcWnyrqnfg7PSZCzUijvqssdredriJJ5y4qbV9u7kYfBZyhEeKH57r7RW1Fi5VdJwHqzhc",
  "key11": "RQyVa4Nh5Px2mCgmVCgBhj6A1mP9jLCGDdUwzBwbkU4RWgDuSdMee9mkqx9MFEYdqmZDaeKMAS3HP6WnSKBANLt",
  "key12": "pReyj9UDExS8AxkSCqLDhC351285DFB7VZeHTb1V7twcgCdMid9FzTH6MZCieQX7qyFjF3yroc4651s1yFmVSWB",
  "key13": "3vyUwT9x9KEZx6173d5YraWKkSbMUMCHgxfMsSnzJB2LKZ3zefSohE61rGuvPFEuEq3WMNzr13T46HDAo9duUayS",
  "key14": "4svPrvY7v6EpbyGBZzQjSKaw2iHrGJfxT8iiQgv8HkKsPMhPKVuaVrSSCp9jSJpRoR1UuuNebp8SVnx5xoTGTW1v",
  "key15": "317XAzFaUiLyC83uaZGZwMgFwgHZAwJyiFmeWLVSEoKaffUepsmXDdYkMGfXD6f1xRAzCXXp6RNiykxhc7xNg4Bu",
  "key16": "61cCijKRtcxr12epgzGCnYzVRYb23WZT7VZTyT73VAfrBc2W2ym8xbv8fr6yrdJe1MzCiNsCGwCcABNoe4pxw2BD",
  "key17": "2eLUww23mBFdf8dHNwgQBUZubm7ya58QJfyKGjLzEZ1Zeu6tGEQwCkjUg2iySqacT8PRcyxBnefEW4UnTQERZzYx",
  "key18": "5HtSat6Ba1k1XpD3cyHLEBWp9KZHWyBVbDZnZqjAwrwS1Vhvo2x8Zgpqar9u3HGJvBuEE6HnMGtJpBBSpt9Bi14c",
  "key19": "2gbZvcQ4TMUXhV8Pi2LsCmeiFWoqeLTeqNnK7w8YK9CFtUdxtFuz2gtXXMKgvaFFoNMZ8H9U5e3QXaZc4xFwqpXA",
  "key20": "5QE2iNjUF1heDWaDj5oDr6WtgJn11CVCURMmXLXToPejAzbGCMghraFuh6SbZK83xrpbXvwhCpQzGaxsQgGkPYEP",
  "key21": "5zvyhUWQXvW88w9HdEctiWENawvyUDJeXFPnT3HY6PjykcutKFqw38UDuxctWxeknwaRJaGkBw39DAAQbw4rGG2x",
  "key22": "4BG2JTwqnwLFGhJ2nXRnjg3udGLgfiECZVN9q24ZQzap7hxpoJ7UUbuxZmS2sTqoWdG5KtHs9rsZjukTFqDvP8rj",
  "key23": "3H3QJ85CE7MjNkwYfYLz9rX1GsxqXjZwYU8Q1oxEqrasnyRizQqvacadeoGk1x5SHnMM4UWe18u9UjZdJVYNU7LZ",
  "key24": "cuy3FUkD5zkb3NvNGTyb4nxos4WcyMkKgm9qqHxutRV1dzsRYAASG4snPypehTQw1hnsF51Tnh711WbeHDhB86p",
  "key25": "2hfcJRq9wqqvPB1YtztGqwCx1RTVKtKC3c7gTSsyMFMKHpZikGxWen2ndSyE4gsQQdabFr1tBkfYagXkPJtc9evn",
  "key26": "64BGPaLLoKh1xDQJesKwGmL1yru6ash5um6NnN5hyyvRgu3g3Mq28Amj9QYy8xaFM56Mjgzj7Ma1TK65FGdDpt4H",
  "key27": "3kH7A2B3zMuUXfK7ySWcusf1spEXkBASYMFgC2GyGf87FYrjT35nb8JMMcLJAH99quZEiXhGAskZSe3Rf53GDEg2"
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
