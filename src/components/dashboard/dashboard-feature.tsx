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
    "2Nnbf7TbQB6vcc7tng42JhuhiKQWhGrL2oJHFmcEMhrswUCguPqW7hYH6u9RWjBAw2HD7p5D7zDmGK3UCbYuneBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iu9pUdUDByiJqCMAUTssHURSVwfUFtaH4Rb3ZsRnVLa7tXJhSUG54oVQSnEUxsUdBvVM1UV6aEH68wmTzqs2ebU",
  "key1": "3XhCSuRT4HzJc5Ug7iZLVCcfs6M6DjmGGUYQ8fmXKia5hZdvec6KV99xstr64s2YgGn69Robo6yQRrVVx8D68sHd",
  "key2": "fNTGTv4T4Zbi3PaLquM6PSsvWTZ5E9m5LEFxXctaUGJU2GBePbKbYa8nGPhj4EU2asXjUvrauYuuorSqp4R98F3",
  "key3": "5CWXebBuqhUnhxGbALGnvqNwELMhP65dav7jVACWt5hUAthaqmK5B8hk2jss1WBqvJaHHhXbCMSJAmczewaY9Yq7",
  "key4": "5XpHPMXSUpoHLPdYM8Cv8peTJVBbVj4bNeSAV11tqgVK4Vb27U1DQH8grcdx2gPrumtw8tA6kibAeRN2vfKWAzMj",
  "key5": "4XDeKzpBy7iSN5DLNhPxV3E5CNyc1Mh8pQETSpup25thVZT9dGHcBDATfGStuzEMduTdDvBPoyexRznDrdBzzcJk",
  "key6": "3bXBQboufcCU2qivxvH7otmosuiXsRDKQ9TdyzJTkTYCbaNtgdsne1BSPjSRPXcWnRJAKGaauxDXxrZS7ZFnUX5A",
  "key7": "4Lmi9LJB2vd9koyja1EahGJdKj1WArMHoExBJcaFXMqVksqa4wVaCSSGNSwH23sMcsXskCX3umEKHLrT3vgdskha",
  "key8": "31ZYTPm2BkWHFKtwvQuaRCizkLUGBUFHgnHAxa7TDH13jtQvVPSf2iazmm44zTMptXxJC9FagzmpbBu2xpKQ4XuX",
  "key9": "5HWuangaz46Qs5gpa6oyDyF3q9X72egH3xeaUkQuQUuswGd2YHTR7PCXQiWGcNR4PJ3iJRDKwWokXUFjk1ofe8tL",
  "key10": "4Afna4q35jnUatC5RUdQzquUp5tST7WGDGNVikfNyeGkofvXYrySbNXQoviuYAAbMThnqPg9V5oFbvDn7WAaYi3r",
  "key11": "62do5GXPz7t8gyxDJiXMVudkJiGFahusvGurPyngmNLSU4BuXLtDQdjDjf9JtL3QQH5bxJk9dvefKgVtrWgUVy73",
  "key12": "5GhimQCvv2gJPp15YH6AhQRjZ4FoJzXDUujmKWmeyH8NyEnSk7uzPnapbYVhcvwUepBMZVuykLHSpaE5X5sByupb",
  "key13": "2a3QmNJFDwiJ9gEpf2gzJjNxbMVMr3KenKpyM8ooD6Qt9vdt3fRGfo26twazKMuDUwpeNaBYDjqdZ8agYAkzNEEw",
  "key14": "5mh6eNpRCV6BqxRL8PFae98ayswyTbh6TZnkKxrLGz52mMf8MXH7AFbD1TimCbxgzaZ9r9vESqSAWyPREk9UUoBw",
  "key15": "2DcQ9Zo5pGeAdBukHeH1AR8dtYqnBaRhNX1324BibY3m498vHrw7TUBqB3SB4Mqb3rdSrdJMQTtUxJmbpxDsMQ6a",
  "key16": "5iUbDRhMR4mSt2Ur5UQQbgHDAfEtEBEvd4DvT9RgV4GFRsLS8vC7TMzWhY6DxUhYB2bnMUpFQMuqtcnjWzG5BiuM",
  "key17": "zsqspgqCrXN6yHE3zRdw3qKGzA7Mq67t54sGbKK3w3v3qPMSAQxiutydgZWnRK72XdBPs7MHHrHGGSJXpp8u5dQ",
  "key18": "4LtSeYKkiMvXaCjsQ3Z2EpgPCaYZ6vdAenyf9YErt5t1BUgtah24z2Etj2n828CtzhKrKr1grz5yhNf7xxiqNGh4",
  "key19": "5SPCDaNaz7BYCN1cBzdkP3cJwiVSXezXCJfQ7wL427PWQ1bAGxPv8nD7nQbK4Fx2uuvwxQXTVWpqk53YEastFTDu",
  "key20": "66S3uQaathTbeZqdbz9txuCQD2zSi4LURpCk5RsbaoQ4pcfzWsrwe9udEbgJR51qCUxX3BdyRG2RTwJUEYBupDP4",
  "key21": "3qYzM4ErA9yXaMMcbnXTsddxeXapNKumET4eLFYx26ZnCLTuqBPCorgGsaNDAeBH8CwEJbQ7eXxdBWbtbb629W8X",
  "key22": "5qfSJDkb2eDMnJ4r1G57ogjQT4LBPsq4KYyk7xfF7wtnjcGs23aBYFAUnjKZuKpNg6P6bZ72YPRrFUHmxQqyrhCK",
  "key23": "5U7UiqGaoFgB3bmXPkByYP3NTrzPrJ3bokgTbRJ3vtqR3XricKGfEX4MDJPaKqt68GV2DmnTvJsjyFXsYLMrxTNg",
  "key24": "5LfSHEcVFUjWW3yoShuHY2XkjCykzz19H3SKKPxKpcUqd9NBGjfsgBvcYsHpXUgvVYFTnvyJMM8XZ6HtFhoy1SPq",
  "key25": "4UWLAFHkaoPJVEwGF5t8AK1AFXB2ssSsewgD6F1wNuBMLbod6HghKMPMaSyBDScB8eMe3wj1tdkTdsx5sM1bTwZV",
  "key26": "4k5QRkPXhoaiwFj7PnQWTVbTgB8cnGhvy7W7nNtzFvLyNnGKWJSLVzf32yCfRFvCghntgxgqLaZYkLrf5XCgB1fK",
  "key27": "5BdfhtitutCoSta77FQfERY8qVyFavjpUFiLaN5KkoiCxye7ekN1FS41EQFaDcm8cGVbEb9Jy3uBFZkNCoAjA67f",
  "key28": "3cP8xqRJ8s3xUGMBJGPMyMmcTZYKsyewuc8JbxjtcSnBEEgk36a9FTDYnqKroQZD1AbzR7tddHMncs2y55hq2FSD",
  "key29": "AqB4MogqvoUrKm2kyEwXYb9QztDoipnDBGFavAG9h2EjTCZcoYt9BGRY1ffrna7zjcNDgBK13b4MukTfCTRmFwQ",
  "key30": "5yWX9fqAgm9EPGmm6Q9PC7ewxhzdhm3CSDxe2jE9TrrmDAmHQ9dtfNPpJMR2cVYom8Pc4kX454jGWJZ1SScD21fu",
  "key31": "417QE8PCkdxjTX9a7GownJvJaGTtKqZBQrzjXhkg4jDHKcwndngeSWTDSroQ7dDz3GivUtKhxA6wUccyfnwxkSds",
  "key32": "4Whocw9DGNe9v5sAgUN61QBs82teAJ9K8Pn6MH4ZKfo4oaFmhFzsettc2Lsq5d8Pzc31B29djQS6UfRE1WJUn4Ui",
  "key33": "5394eoCCoGAU3zikW6AS2k9StypYKat3cxbkTXkEhBegjRPZWewR7bHEbbvBChyx1nP9CdfDAciRdJU8HKdT7qxT",
  "key34": "5k3jEFu8YmbYxaDnKyw2bFMbisqgXbfDtHNob7X9p8pcvRWRRwnWczcBq5bfQ83TrjyAU1Ahee4EDb4HdTHipcAx",
  "key35": "5d9LdXDCNCti2iEKp9ST6jcjpFRrJdARgESHDFAxJSMewPPYdX2EQxHYRwgrChh3bAByqBH2Ven25SvyXM4di9Zo",
  "key36": "2TGW4GudHgc1MYgzsDFQjzNR4KgJ7rGbCRrX9ovRZz4Ro9Lbkhkw8M9vuwt15dyKdKXSimPdVPWDiUARximqrhVz"
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
