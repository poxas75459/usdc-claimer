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
    "WzrANTMjE6qME1nnfn3N8MCDau3fwTgFygsZjgWjrDwPaNiaxsU6ZbdMXD7QDwdsxn2aiC3ofqLRHAniHSVMogz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hMg3uAu59FZ4Q9eek7enBYechg51n6KvGiKPhtRkg7tuQo9ZVHsidBJKXoEPt5LDit4GDrHndNAEd2C182rATVM",
  "key1": "2qfuvPjkq4sjrNTB6r8E9fCXaW2Rx2tmSpndjZf4wzFwtxTj9sAAMjwvz7TCH8jpfcVU3azfmjjVtmkHmpgPueVh",
  "key2": "xs9Er5Hm2mHDHWxA6Z7mFZbvELrEaAZrBTY3R3WYCoX1YNRDgXZxZuKerVDpbeWQSCK2goSr5mtKPxL6k568q62",
  "key3": "67a4GN83jSCd3KDBGzNHFok4jURq28keTmYGTnpxinbuB6zSxvmGs7XTt8e3tWieBsDqtoTLJxbad38XEGmkp585",
  "key4": "disCqPZtdj6kHQ1XJ8nySHe7YN7G7AFi3JDyv5V5mXthwUu5jkzwWLYs268r1vmrTtk4uUdMaucYBarMgvkk5u7",
  "key5": "3uWi6XoLNDSuKaVCULCE7zswRcF5FfZUPugj2s4Uur98RF4u4pYugRY51Dj8EYGH6JLvYZEE44ciQfLabAJi6t2q",
  "key6": "41cLNnR4s6oFSX4jisYyHTZJVDRJwPJC7a37tPVqQXvb4zJuadaLGZ4h4LecQSTmXypCLf5nRFg1rLxQK6VePjec",
  "key7": "2ogbg7KwWDe7kGpX7TcgxCnsfJutEkzBmQsjKHnLWmBFnyFRMyR8Gqo9GVuFQeQ3NW53wL3eX6RkvjPPZFsKDDHV",
  "key8": "2sAXRQBEahBuZRUQ5AF5JUJ11ptCAARTdLNoSM9Rz35dHyrHXNsSmo8M1VLk6C7EQT3hxaMF1ZWkWuBpGZTc8sTe",
  "key9": "2Hsas6SCTPGxmbnPz7UE5iD5vbBTJxqiumYMmiCsnuMHLyy3dirhrwJWUdKF71JxiJ48ppo6oWtXhR28MS3VL2SX",
  "key10": "5wZdzQc6h9TeQVfPSFR9Dqs1yWGH1Bw9MBU7pUwj27QxqL3xRKZA7uktc6QUpMuB9yy8saHsKhcKr5UimN51BdZA",
  "key11": "5hXXjfw7yXY1zmTDa5zqB9z8p47xjWcaEg9cbuvKt5hPso5VtXw9bDhqAbsKN8LVydTqRrqdz4BusedXdDGZi8gE",
  "key12": "3JviwVrU9P7k3VJbvgWz9gtegRZDjT8eFxFcC8N5BaYMFosPHzTKnEXsjzL4B7anp98hFu5ZbK9DYcXAFzbFZQFp",
  "key13": "4T54cFYqYx8fx2FJo9JFCbtpdt6Baxi3gcj9jCQ5GvDfmoiziJgk6rBoZZjhsR7g41UsWBd8RKkgBn48Mm3bgXMK",
  "key14": "5nmE45utSBTnQePiUMeMDc9ssF1w9ad3Fs5DcsL5kLssuuE8yasn8bBdJeUbpgwQomsJHzfDDN2Q7j4HDX79irnw",
  "key15": "2hmJHjQLgrttcmuyhEnjRnfEUkXZfx2X54NdNN73PGfHSZ336epgGCGmuBUs2U8FHQLgkKjaDRLr635gEdGTzzeX",
  "key16": "578CVCtFhJ53gfgrBgiQBMYbWRCrNzNj63iPQZFoQYPmZXH154swgArZDptiK3vT7yfuhmLULwkJpPXEtUjWUJf6",
  "key17": "3Na5TANAzNC3uwQH6Pd6M8jEGj5UWAzjd3FA4LT8XMcZ96kiisWjU9bRLChhkqvYTd55AWEmXqc4DsYS9SXtBix5",
  "key18": "4GSaReaUNVemXaCCvcFq8j32Z58KuJvakpqYg8NB2YUg1rx7xugcJY5awGQ54SpeudBTvmxB7GBZZQ857adhRJAX",
  "key19": "5Yr9iqxHvsXyobfWYXThNVfKHFsU7hNvu6fXmK7Dq8KGq4ruZ34gxKwK61S9xwCsACXSZBdsaBr9KGqvpxXrD3oz",
  "key20": "3QnKi2BfixpsM1eBr8RTgsKvnAz4Z5mEvrBAEwDBA4Xccjy1UqVWyEZrHCUgLXikw6tVf5AT79Z2VxELkiPM3H2T",
  "key21": "3vraHWrzgefyEifobGz5GK4mXdM96TmzCCnSKu2yDC1eqzeK665sW6SB31HSL2BqqQ3ZBRUd5v9aQW1n2TuhkbVE",
  "key22": "2caMQDLapHHrnA3U9wr7VSquFpLLArM9zK4phUKyBuddafoqX2S94whgc8HETWPAQefit3vNLXzwXT92UmCriJ3y",
  "key23": "sAL4bcvKbmzAqeTbWqsrpVgLhyd9XARJuLtdc1SkH3enSmR6wPNQKBXfahJCDHgohuJ2kdKCQPoAgzphcArcPaP",
  "key24": "3WiajNCkdLzwQcenyVjGior6YHyTGmMLCFJvQcXgTkoGB6tx575ZC4Gw9npps98FTUGNhnQG3sS1h3HJFUXNDy7",
  "key25": "PbKtHvs28TZTmkofi7yWwxvpGvRE1NC1GN1XP9z7URw9hdaAWvqSDJKD4oeon6L12jRC5CPBuhn72NCnyr9NeMh",
  "key26": "24FqJCwLKno4sN8RVyF18wg14sDccUEaEMXhfroap8fEXChGQwgC5pBXuS2XmQsxNnFHBZ5MhToB79a8vbthZH9c"
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
