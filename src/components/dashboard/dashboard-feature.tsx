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
    "5CngAHXFCwmvRPYxT2xZXyMKcf8nuTtk5emyjv6iqgtWh7pt43LaMADYZYKSypx3U9nbk5WRdRogwn4uCm4QbnWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XiStGN7ZEB2LQHz2TBfvyckhsyJPJ3YjDDHfdZbQh22QCjjuF21VJdCtjDwem1gwhJcsSHP1KwLLTF4iw3ev8H6",
  "key1": "29yRp5QEZmahqYU7yc7RhVGGZzkL5DupQa5MbQH6BEbmBKZ1uYviGeRbMDfpU34fAWoMqJNW36ueMaDNPEnYUJoE",
  "key2": "5XQ5QhaYVbvcoDwNEgiWxxXECw1ER7aVmaamnzBy3Bvdpv74zrMWdTFrGV8Ee4AR9frxiVpDRCMcHViDV8S7e98g",
  "key3": "5Ygvg24x9N4tYVZW1eYBbW6t63fTvxrVwgcfN7bMEtES8Zi8or7LHRTWonn48yrEj96QxMHRYf2QdMtUdhSv1gju",
  "key4": "5Gk8nUT9eZmirpeDe9y9b8aXoG26AZCP5mwiLL5Dwe1CecKspYZsZtnTRuJTKrYdvgByEMViHMLNfBPQRUhgrMtX",
  "key5": "5NSy51xSg4tRSeBALfokAjNv2jPvjoLLyq7TrvMNnu8sb1o3kgZnqzkcoMgr3YzzJj9zGL5xPTWwv6xYQnYbL8cW",
  "key6": "5mkBqhMjxhLTi8BxSr9XaZovvrvCui95Ggyszy4Ctr5YivDfaxthdtY61jbaxrxFsujg4qUJivHyZJ4FFneFBiz1",
  "key7": "5jSwpYcsoijVD4ibmdc8yX2gGsfo4q3hPP5hrmarPh7wPaH6yE8Kg1jhw3HE3TWEJedFp7g7DmZEwB8zhui1CMTw",
  "key8": "QzjzAhQ8E1fuJPuQNEhtQWY6tTNLLybX18dTLjQEWmssQijkgHNJhmmpw29nAXzYRaZZG5xNsFXwKA5yFwP6VWc",
  "key9": "2411Ch1Td8UXZJRa4yRZPQescbFDQXsGekWsaLhmxwcJ7hibXG9jgvS8KeHRbsUgUdu6xEL6vRQoeQu37u24JWJw",
  "key10": "4Ygk9EiuhV4cXZ2pWyhZVn6JmcLCqDneYeHPvv7QP2HY6jN8xXK1gVfjaDKH4hzbWegt8oeqmvVnF9SLS894b2bx",
  "key11": "LS9kSQtG64egfQefTjgiVbvKCyS2HZmh61AnGLQnkC1L7xGbFJGDRWXytE3erzdkiqeWCqp345ewWmydYt55GKz",
  "key12": "585xHxBS73mYiwfjdjrvBqkBAg6ZXbJY5itdW7Md7PyMeoBErarXQ7KyLaeYhVoxqDK3vxG64gsCKnh14vcY3twT",
  "key13": "636CuD1puisbWyHsxRu5bLdAeYpjMeLhn9Qthr4hQuXQHaT6BJ6E77cinjytRQn81BFa4aMSgHQDGNXh5Qb5X5AM",
  "key14": "4SSx8GYKwF5CNwgbzzFfbaLVg4yWuXVe7QxKMaGxHPcjJyx46cuX6DfqrmoVT9GRa4KvYhwqgnt8KgkGzfkcDzfi",
  "key15": "5q7NXSfyXyQtD1QvnG7vBPkM4SaQgJgw5ptZAGsS2Rg3vNV4wkqwmd8GWgTMiBAzZ6U2owcgvmnxiP6ksTjM8H46",
  "key16": "5ZdkeSP2YBVczohUhfZK3BZexNcNnuHuMGDw4DRBS85Rc8CTauUFpwaRRbUFt9xbEdxY1jihJfu3JMAq4LuA6DaU",
  "key17": "5VjNqjHuoBpmaNJfxzTuDW7qcQsUtqjDXgnP6ySKzY4y3iiNkqsW6T4pThfeB1Vw4VE4j1vE3QqZ1mMoJ42MRDii",
  "key18": "5YJuN7UjyavSHRc9obJc3R2JiCJjZh8sVBVCozX47eTuMEGAKyhqPLQb5bVCvjJ8ARkjuJPuPypUyv33CiEdhzL9",
  "key19": "z2dM1pFZc7PuoyFg9ecXGbYCiapBuZ1UVCSuLHFyjukLrc1U8FBVXwQJ6B1mTyYddPjpf2XUDFp3ggjaj6FGY3a",
  "key20": "5zFuyPsDUHEZBzeAZyMtjaVmbo1JzydnhTBy7KepMynLooGj1NaLsPytK9ZuUnwQxiTjpLzua1KqMRqqBGsHoyrh",
  "key21": "5vzTCU3kpAWcVHM7Fe1bneCcAVH3DYkSN3Kgn16xcH9N63cmiTp8Av1ofhXuveWTDAbNt4mx3KJ5pSU2XMTMG7tj",
  "key22": "UHxA97aN7QJBktCLgbDqVSCDEQuXZckz368hFzxnzi7kVqAj5skTgAPherbKbaZBF6M4rT3PX3W5TAUjN9cKB4w",
  "key23": "2capTRc8dMsfFA1vnmkM18G1iqsLzWomwDWCZLGGsQNr8F2TaobyaRgp89uXVN5SNcjeTR9qUz34TGz68yUbyNys",
  "key24": "4J7UYzAiMUiSjKp74QPPWLZU2DDJQLr12L6E2QamgRCjv39MfZBchzq3ofdGnqSLPFP3itqDFeJkkVAqBrWnuKN2",
  "key25": "4fbLxywe1vwizzt9CbwypzXKK6VZ2BQSRM6mHrXVPGhXZvweMQG2meNuA4KZ5A9LQnFqmW44TrazNiZmZ9fn1QcE",
  "key26": "iUFx6hrghxvVgxcowShUcLxT9qbTwqYhVPgfDZTw8dutsTkiyfqroydqhqKqDga5sDyumZMLk4o4NHQ5te28zDw",
  "key27": "3oPQCreCoayT26muRo7YH5NPXt8SiHH6hK9ioTYcjSsxxqNqNuT3EwZhfd6jA15C2m3HAe8QcN4rWS1SvxAoxhRN"
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
