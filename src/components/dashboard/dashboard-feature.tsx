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
    "2uw3BHQjQ7FFi46BAn4bXzcJXk4gphABv232xSCHxN71tQRrm3hZkRZw4QsXN7uYMHgZ7gpoA7uA83dNevcF1aoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KxgrdxeQdKrm3tCr24YtVAgZVHBWe8xtNcH3Ksg782ouiryXJ7C4JrozkRDCVGRcWQi4xtTMJCtKiHnpPyHxgDD",
  "key1": "3UD6kdEojV5QS5mEWgA4MgU2LLmVkHFFvZvhPtkcg3kiyfAEpGKyeTar9RtD7mDJYgVxYrMBVeAvn2CbswWS1ogL",
  "key2": "2td72q47pj8xsquZVNFtjgX8DDz2ud2ZYSFJjwhXrLadJEwDK3qHSY6i1rD6ULn1iD9h8HBupfWc2HLwhJBvnNpU",
  "key3": "3bMWrmxs6ewMAepMW8y6zqwxg3zcMNSTWysKPaVwyMg9QbfpwGeuT25byjh2sZW2hV84PxC3EGEvpfofbCgK53bV",
  "key4": "xc5oQuiMBQj7sxkY7EPx5XJdukxKa66uUiyne8SEqirDL4heSXDGBro1qZECBCBcy4Vtaf9SJp5jTXAY9s5T25Y",
  "key5": "2tRooQkeKEeB9MoanJVgW6gjt531s1oHjgR7ibtXinCgD8tibp2oFJBzLifkRah4fJdyQeDVWvsW6KYdXXptTHtq",
  "key6": "5L4ytB1tZuJGzuMpnXc9WMKFFARo9CKXxjtvxRbaZzooigCqFVD66ZQU6atzfwwAAfXuFHJ8y5ZcDMsoHsfBqgNC",
  "key7": "2hnUNBrfy7nQZjso3f2nXBqZ8QKagJB9KtdYyyvhtLH2b8RKu1LH6Uy77LTfwZF8Jk9mJeM1xWpUD2DaJEX3UWsQ",
  "key8": "3NhHWo8UGfubZKLjAH98F9AWhvtzFfNAP5EQ6tcJVprG7ngRsawKq2TnSst91UdEDoTBWpy4suhpQDoXqkXgUexW",
  "key9": "59qjThPn9CLGotrRUUP1DPjqbB4XPhxEuxwsnnQhi8SQ3cyv3dyKYr3pxFSs67u5sn6A2oAzbwuhD8Ftk4jCj3T4",
  "key10": "5HhkUbMu23VqwaQWvKb6NLkTmXY8TkurKURYEhqRucKvJwD86JxnFXEFGdk2QrVhQJgf1SsSzQaLhY1NG1ZzLsNh",
  "key11": "3FGZYqBe1UypxkVkJ4Eo7Cp64GjPeWEVgbnp7Pmc2xG2W3B7wg5kkKaBpvRbLzRcaLc5KBNuFqwatiu5JeSuz5X9",
  "key12": "4EonG27zX64SQAk5fJnP2MABvtjjsoYeU4hqkLUW3GhEKmBYN7LxmDhjJm9DyKnhKafGCJxW6A5HGL4doXUr2pqL",
  "key13": "3iKb4mU7FHXfT36vqBqJH78LV3ZrZ4v9kP2knHYwhRudJmuH6qRj76jVfzHA4j8LiHCSgtqvU3WaVV4gFpRSLj8j",
  "key14": "4SgpkkBPus3gv6EAeFaYUtqNeqGj37VZt5RVz6uY1qQDHZzvn3Db8QM6zZaGDkahCKLKBBcTjhT1PSqq7F22WjoY",
  "key15": "4oYeztkajmjxV5XcPKdtLfrgjNss5wTjUHZTskeWS7cvLW3XpVNHsXNnY6LSE4bfxoB2ydR9wSsgPgbmMDp3SUqC",
  "key16": "5xhUc3z7wxNiAz6rtwfxfFfkzqfB9WvsN9WJVfczBoDK3HpPLBFUyZgxZxazRTRTroAGtZE4UqJrUhXT5Ld2Pd58",
  "key17": "anGamTiop17p35JsnebNAHdM27JkrUtf1Qip7Zg4aCf3ouDw6ud4FuwDn5T8SkqQ6Kw8cyZaT9Fq9HJuNiptyqt",
  "key18": "38F8JttZkPyhpX7aeVMgsm14K7Knc4M3N34p9BbqF2tyxCDt5mCSKnm6UyXGdfrh7QkEovyUNCEG65rBuzdoEPvo",
  "key19": "4uFJsgu8sCuV5T62Vo5HNJM2UuCjKqqvVbHDYguf5t6AD8uHndGz8n458h9Si1TmDuj3Mv9oUQBEPkbWJXjDUeq5",
  "key20": "51J4PUEQ7FRPmXFF73FghpuyXnu6eodcg6kgHbSrXt3ccLxVAPkawnwU5xiwiWQnnUoUoTJ1vxb5uYpCDuiLFsuz",
  "key21": "2B6MeNtX3UZeXfWtTMkuUAAEvMA8rnoZNKod26CxN8LRxMksvbQpsJCNtWxSotZPAHHCknZQyRxVVB1QKwg862m2",
  "key22": "4UrRctwm6w8puAPaLetVPfgyBmjUj8YWKQdAyTauLnAtg4S51EsEP9BGGC8EckW2KjBGz2SSK9D6AEbBFMWRSqjM",
  "key23": "5ZctSsXemuwLKhLjW8Ctm7VG2CSNVqZGrtd4oweTuwkxJRXpp7F2yZr4sxqTiEBUMnyBaJvhEUEshnP2qQGtyf9f",
  "key24": "2Mf1B8CGhjPB8dGuKRdG8s74C3CfmcN8LTRGrgsSNLbTu5ZVGdaUn19UFhEUtzZXknYhmmSqBTQck9NAD8vkSXfr",
  "key25": "648fm1jRfQe4hWEwx1HAYP8UZZYq4xhZV3zmbSh5NcutTRCbbst8mDsRc1JMBhxEhhkahFP6GMHdsv1CEZ9FERnt",
  "key26": "63ZJbg17UmxFNQGvfdtyMMW5GhqYeW9SndK1riDD6KYtHX757ezqUcrBJ5b3KC9YFKQ5Bw7HHfsMtNfLzyRVnrR8",
  "key27": "5mjp2J5pipJfUDnUs7er3pisws3f3cen5os5Bs6jhriXyhLSY5jT2vR2TNhxDq17FcdfKMP5ewQhJMQzYDA6rj1n",
  "key28": "5YiXHKE6SRQ9L5xAGztLrgGgM3ZLaAXKuotRY3w7eWB9dpUi6UHBfLiSLsLz7D8e7MBkTfhC7obUbdwkSEiEqGwT",
  "key29": "mLdgUwWMUuupsPYuULs8bVYfHkvvYBB416TeDka7cNZnNKpK8tf45D6MFQiX4RNCaXcKpUPFUNoeLynh25NQGp9"
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
