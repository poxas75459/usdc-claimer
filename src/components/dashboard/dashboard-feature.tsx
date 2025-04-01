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
    "3JQL5yU2HudRv3p6EY7yef9m82xKEvhzUbhybWx8qi2CV26fEaouneL7A51D9ACCLZefdiEg6DF89MPLzj6vkp6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ShPXEeRvgU3bzFd816FF1cu5hw5d6xcudXkA6wY8HvF45rCecdu9NqdhdHwVbuybuqqLNYXhFm5hbkeF3ZWVFfH",
  "key1": "2Pk7H4WAVwv3btx69bD4jnxDyof8su2dRXxUZAE55wMVU2StfNQnnv5MBBJ1TLbCc3R7g3bnEC515akM8WwYvTWB",
  "key2": "5cWcuAAeBB7oryDUdku8WpXiqdv2xc7oY9Wm8uhgaFiWyUrsQZYGxujD1e85kktv6qA6gAYXuT4nmq9Wb7wgTnb2",
  "key3": "49iN62fxjEryKYE1uZcZ1qF8pFFNMifL9qohmUoPVcu2RzKggNBResGtXiaLQA9Wx5c3HrPgfWJrXiwCEeSj4wzp",
  "key4": "3zNX7kVHySoJM6AWhUMGWHbYZDZ4RgfzTviX3kvbWiEmrnE4x5z852DR2A9B9ujPHGoqWp95TWwyrKKdT8HrCJha",
  "key5": "4v4BdMKndxAb9cnRQgpRBhmKcR5duwAnaCTVUQs12vTidcZGscHQZysCFofyuURnbqsQ4h2PgwXnpiroXuHDKvnv",
  "key6": "4SAgnrYPiQzSmK5RdWZbJcNmhLAL3XLDyTTtMJ3XGmZN2qCs1DCUdrxK6J9zofDnsgozKjpX2kuinSDTg8d7JNs2",
  "key7": "3dzHThZz2ipbtjSVwzLCULqtQecrnhfjSzyiWV4GDLGG9yhhAP8mWi7gve8Zj6b76p83bcQkW6RzhaNXdzFzktTZ",
  "key8": "56oEmPm4bueJq2AwwWJNJHzyCRkd9AJh2pewMsLaAWegoP2w8TW7H5f2avWQu6NvuQKxBgtahz9Br5gwtoPmqZNE",
  "key9": "4qkRVERnsZEf7N4yakvB92atfon7qqUax1YG7XfMq3KAXPjoWnwTBMYjci4XfQzYapmz5nh1Yy95Ejp2QqSmHU7e",
  "key10": "2CqrxCXAye3YomqxVQqs7BLoPUUV7vhRASXEZnUJm3KmrRCCKepXypGtjkwyuVPkkn3bBeeG7mkuHb83Gyv9ZxTR",
  "key11": "26pzaANJJt3XWg8gc3epG2fGPGF8shcM6s4zoMvHBzHgtickA7t5rtfRJPBxsHHdWu3WtiygwRpinmzC2R2SkjET",
  "key12": "2WCxDTRw1k7yRCZJinGg8pcGBQ5QVnGNp7i3Binxh7Gte94Nx3gyTx9Cqq6ALnKAZRhdeD4tVLnwEK5Hzm36Wf7L",
  "key13": "5g2dbtpaZee1mza4v4cXboD7yAKxDbepzSQwM8JsVcuVzMNFqaAcsnw5SY3dk7XnVL41LgQyBWaFrzANYm8pkRUj",
  "key14": "36P91Uun1EKdWt8zRBxDYyLCwzuVXtvDpodS3Ka78nikuaLeMq6DNJE3K3PJSqa6YYncsFQRGTaq5zHsMXxb7iy8",
  "key15": "2Wzqq6U28E7qQxHVptdKkxtb7uhoKUpFHgNf7JG14nbGhue7ZPEUcoZSao7aifwJnBT2SCpF9D2DadP79Nter1m6",
  "key16": "4QTGpfzKGMmUEQeY7JZTVXEwnLxsryUJZYrP6Jr7pU8hPWnaqzwBdsAzTBqVJRhMDfbnfHSpAFb2jykEcYi51vBA",
  "key17": "fD8oPkYV1y5AQbUbegqCUjt6BttekqzBQ3LFFnwvkspqz5eRqU9HjguqZGfGXgRsuS4AC24xfrZpKXKuWtpe2Jv",
  "key18": "jmDnticFGzLpbmLdJpwCTDxrM3KG9jBUsUexPyTtM4e9MEGYP57rTCPbzvA3x8BHtGrWhRfKTvBHtrWVJjP8kkq",
  "key19": "3T1GWfwhHKYQbbfaw4x8Lz2DRvqghxcK1Bz99roXAQykWJbDZ9bAo84BrTrtgn2HY7aNbXLJyTmUeyd5nuuUtpDB",
  "key20": "2Fb55WzQ1tNR3k7VmRzXC43kEAG71pLucCyaBaVkNiwzLvSoaRoErADPF8sKtfFaWQvsNTVDmfUxAtfsrvmJTdxV",
  "key21": "5dRpTsbMWjp6vQVAcXoVK9nDzp1iRRnDhexs65yJVVc4xL6E9soi46bfhYExqgGtxBr5J64GWk8MoM9dSksv6orE",
  "key22": "5AeyzSeQ3Sog47uniN9LuafbsGE5v74Dh1QsGkyzbJkyBNAssLpzy9ZTEUpVh6b3VMdzbU3QXtVW3ox8f5kR8DaD",
  "key23": "VnhSZB6EDCP91zd1u8HBCiiRVbFk1hfcWo1uPz2rMsCFCxkvATPFD2CSoft2LtWoxf7Kv1whia5wbLTzqhdvKQZ",
  "key24": "2BGUV25ft58fLoGfDsDx2vAh3nQ1NXpTkTUECUbc1jGShtPkMpzwDW8ToPWb77B924pnkekGzt8XEGTkpXoymUaZ"
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
