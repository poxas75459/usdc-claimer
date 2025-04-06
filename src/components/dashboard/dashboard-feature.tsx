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
    "4cDWpGTqrLae4nGKx4b8QaE4HqrVrD8UX1xaim4TBCTmGTdPzbt6qgdM4aEpdTaqvpFj3eR7N4dTFyCmRd7YGb9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R5uenDj4a3KR1suE5Emm3VsZ7NAcAyqn24bx1NjLpng1eT3ogjma9cDsjMCdPJrt6wLSVRfUrAoBQ56EJcS9wzT",
  "key1": "518cmwkJN6hqWmXbFAVQsr9NpXwazKdEzQM8NrFBobcFWaMs6UvY6uRBT7hTwTty3FQhuFwdcekCYwWtQ9ChKRau",
  "key2": "4F2YwZ51xLyUdUw45RKK3sBDYQPv1QXuPVkeef967S1G6i6jQboAZA2fJUWsjnp1UUCnB6NBh4UssbUwVhRx1fjg",
  "key3": "3KXvJddqQq4Srfv9bBamNUGeZ7WQpPTio83Vkva9xZRgHT7ZvFaBn1Zsi7TRt1nbPKPf4w46h58Y99ArcyF2EvB7",
  "key4": "3MRNZfNJB7ZgTdsbFeWpWPdLh5i1wE2KiLMtc29M2XbKXSpULEiNcEUnA3S1YQGXZFT9xgApLtoXqp52HPnoYgv",
  "key5": "2LYvrx7ouxJajiyK45a3yt9sBDMaE14LZjURngzus1cMnzkN5EYcB9rtpeDnTxjWTyjzBmeUFDJZ85xtmQa5KUt5",
  "key6": "31JwqVFUEyGR5NqdCsZY7EpU5yQkMQ77g5rZvVubhNNt5BUyzeswtuxSKrRgzBaJMrpA5sGCgua7FTwZ4ff2FWuy",
  "key7": "3BVfzJze794MJoYndne5aajzVLQWvMJgRkrsM3fu1pF1bFhCLxAUxcqYSkZmiwNkWeSTfPraWi5yXFHMbxCa94nk",
  "key8": "me8JTDvdXXq8BiErK7pfxtUQu6YsRbxnKsDt9Sr4EruJyyHGgjP7f2ziskgVuB6E5r9JaxAWwCvhoGNZc4vEVja",
  "key9": "4D3uMSFQtztFgPjF1v59itVodyaPbn3UPqQKGtcdZR6qGu4h54opwuXg87ew7P9zBaL9xWdEiazsGLggfP96dwQt",
  "key10": "3ShJfsnzFoSgFpdjpSwjpgBSc9Jwf5j4TDQSZLaqSBxkcagZgin4BqNXrwW2a2XH763zQLhTMTw1nVcHuz732J3B",
  "key11": "2PmAyegtbsxNGBjjfcCPqvqRpEKLvoyJWs8keWNASJKxQHocYri5mrCCpzE5DmGCNYDEXy38Ac3uvxDCW2inmiYb",
  "key12": "TH8cfvEa94B9EAarhCpGgjyphcpKqGkYdwN4yWxUxZ829mtuGW94ti9nURuGySX7i6cmYoP2jjDDjfNxKzJZF2k",
  "key13": "4TJWmEzFPKCj4NyvjFhXsWCSV4hDnSt1VeHUdCe9RaDehFLHF1Q7LoXF2gXpWzHHHj1oegCYh6yYmRX8cXPEKaci",
  "key14": "4L7Y9jvgSc7Lwnyi7voo3VrzEHj5TrHK6RRaYtoXUf4GLSmpwqLRd5FjxwQBjAnNkkQ8YbCzbzggG1L8pcdoqDx4",
  "key15": "5fJq9qXvhzhzPvwADRRPRDNomJCWP94E9BfuzRZvNsKcDef7Bpx2uccMXHbwGFZoiUkjuUyeEH8YXRzjsuL7qzKR",
  "key16": "LNYRnzg9o66M58E8SL27p9wiWdvZwNvoLmm6ZrADQNqnr8WayYtBE9nKzTuV54tyF2L2NQSXCzSzezJAkFtYYQJ",
  "key17": "2mXgYPMHcyQqE3YpXg7jAktACynoUJkQyQGQuoD7UMP3gLuKqHLfNkiwrnrcKpQJkevYeVxh4oQWEDyk54LxdNCM",
  "key18": "3SgWoHpH9pviM8n3kRwtHSKwmYYjC36X9spRyaGxJgvhddGAs6SL2NkKdWnckz6cruRa83y5Fc18mSQ17uyC9jq1",
  "key19": "3oFpnS2uvKsQHpJiLYpA6HU2UNUf2tCUxHkcQSBg1MoXyokKTDNcBJPykigkd2XT7HHbi5WD8ZWaTa8uWHf38stH",
  "key20": "zpTUBwEXhvMYRSpo6Cvh7cnPoikn2Mb4HzjTC2U3utam2i2K6cciwaM8BKTbb52St6x4zKgnWvmPVqMz1mYgqrx",
  "key21": "2mKCsNqWAbAxeoRLcx8jnTbqDa8i7GJow9xkvUppsH7E4CitymV7Ddc6VpbiR7y6yBze9gQXx49YY9mdUg82pqsH",
  "key22": "2hNA368XG7Mm5A4QsdGRg8QnW2QvbEfbYRZHXC5GGyVDNSLw8cs2HtesxXaigWXGKkG66XGeEXT11KPAB9vPScXn",
  "key23": "452g6VzKsmwguu5ng2zicv8mtXJUTkxmx6kGnMtbnQgXAXm4Y7s8XkbN9bUh5KRc48bkPPt5P65LVk9Jddu3pa9w",
  "key24": "2X7diHknPWfNN8xhmqFJuEATuUm9dBgoi4QfeHE4QzqqPsMtSLrYovBM1BVVabeS1tmNwQnVxuHaZpiXn9CANau6",
  "key25": "3v735io72EVB75zXCz4FWXGV4aruZcjQ5RfgPYcwss7aonU1qDfFGiCmeQNQCUfYRyZZzaFiDVmAPDXHYuhPSsmY"
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
