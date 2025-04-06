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
    "4QyRq1s5ZYT9nbz7mcdw1zFFYaGaNCvQ9YadZWYcrp3qYpit4EbzEgkzZbLcssHyGXTt5U339kZrxRFBrftWwMuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMJZjKA12pAsyE1vmKCV3eiHGiyhqsy6oHzxDpmNnQGbDL6k5a1KRcjzgPYANwHBfA74vywqPUPLf33dK1EwKpr",
  "key1": "4gMcXXVzJL3JBByTeDBMv63RS1axKssmwDNvsBgphY1jEKuYPggzJqDdTTLNbFCPKjwUeWShzkmJiaNBRTz1CxkF",
  "key2": "61KK2t1XewbpEVS5oGTUcmWWEoSWRAi5qkY4R8So8NFwkWviUuZZw1Gv6MFLiM1MuLR7FH3anFFN3hEXUGaHsk5F",
  "key3": "5L2LuNd6m6FEk49zSmi6CuyrcXEh14vbkg8zMru3kZjCXygHgkzjN3ddQbfDdig1iuccLuuViMDvC2PjSyaZrxv",
  "key4": "5UokFrD1MuUzEks3ZgCSrZR3cMMtK7SC8FbLCfjYKQtLgQit11WuePYatUDKjaQCFDTKutPt7BTutC6hQ1GHJdxH",
  "key5": "2rcuPEHWh53PUHyBxf2K2gQFs2qVZAnkvsKY3hnZrdMBHPss8vPBVHEAkXP6ae4eieESQdznn6eLGDqyKXdZTLeu",
  "key6": "2VMGpc2pZk3CosPF7awvHYPmc4HX9fzzTSSsJVkFvvL9hAwauqUgmeJEYcAhucv2NXuPNodp7foEjzfJ1FccnVx6",
  "key7": "2qmQcMhSCWWFGEwKDvDQGJkoon73zm7WYoxBBxjCs9j5M8v1EBYiu8mUexkXjmKNk12s9zs9XU8cpLWXZSNZ7Jtz",
  "key8": "2VZKsftvM7Zi1vUUx11uecZLvV2ihTmUL8eptrmc9nZh1zLxcfWo7ggpWeYmwYTtJfY41mwLbL3ZvrZxpJxTJgmJ",
  "key9": "5HxDiP9pv2k3bqzcsoaejAQmf9DeBiVnQ2UYRyTHFFngkgVUmuyTw4ewEHKFTSrQUf1Yec9PftqWeuYygc8QSmUF",
  "key10": "RxzMFFbanPJ6xkJmvtad5bq5qV97EcogUJZYedvb7srqQwA3DcphsdizWTvs1ivhCMz4zN4jWEVCxzVnzAykbHy",
  "key11": "5vJxBGB6qNVPjrbKf8asRPM6Ysk36gWmqdHt2KyXdDbHPZJMa47AsfXCeyDHXkYvpLZ8B7SMRqDPVHRn6m5Now4t",
  "key12": "zgTsFWYs8EwC5EGv7U3cM8nY6qw6SK7sr3ZqHrKcd2Up1p1Abr9u882eVwsubXH9DFh4sgRVbUZwabmJFj64ysx",
  "key13": "3CUyQtKScKd2wAmmtVhHYghjZEkJ1dudv3YFweWHAHsf4gGhfhjHeLDwKoL8VNt4bcgrcS3pA6SQyGkwKxwHeD2h",
  "key14": "t6LkV8YF2vkrvxxkXsZvvHTSwtffuqnzPGsDfpud12BshXmCkjHzJVvZSd8PisuS1rY9FnKJfxKpaHzgAJs5g63",
  "key15": "EJdZubmHhcHbd2fG1Z9cdWCKc5dj9Eq72aPX1XajkJSmPUq1S64KN88sRJvA5XZ8A4HyDUVS5zVNVttNiA1jyRm",
  "key16": "6YVK1uLzHac6vcYrn8kPj2757Lo8ff5WCPQDHsoq4BwcjNn59yFZ33EYwrEPf1KyqqEASTMUQqxWqVrQr7KK34r",
  "key17": "4MmPdrUBzrLJTjo8ydziL1D4rDss6mskBSN9esaHMxgo2roa5zF84zpNW1o6Tdt1dF2yamQSZdBoQsTMWpnF1Bco",
  "key18": "4z83PWqNCivo3b6BqFG8kDWGSBSmnbvYHkM1UkA7629jYAdTRvKdMhjjbzq62uNYKb87xdFRLbfLavdRokr6GUB9",
  "key19": "2xrkdSA9bfFLLf9VctjtNDVEEDafXLmvPXUv8UANWfs4s6nPF82hJxANNTLjPXrYTsQ1QusXRn1NjGiuNkJeoGnM",
  "key20": "2mQNmKZ5iMLxJ37dr4JgCJbuZMNgjwauk2ponG7ykBF13apWu2idDXqZnHx6boRB55TrwKo1buCqsPjtPcSXb1kW",
  "key21": "FrSfEME6J2XzMnDEATvE2aocwYj6ZmZmL5gDaFrmkwS83Nasx95SL5ydrgiGEYbHmCbRkrraaB88YiVmEyhGDmd",
  "key22": "5jdL2o3YoW1gpPZPRML9z1wmfjUDT2facmjC6H97uFXSXYc9fRHuvxT18PLJqBsy44ifzmj2uN3L7YhbNNeQWDJj",
  "key23": "4GEanehRXeDxx3nNmozXovAQBLG6CYYZi3AeMfhZt7Eq9vSXwtAHThrMYEvU4FUPngRPRDAeCFhzVzfBCXEfJmXM",
  "key24": "3p35UcoveSyzWNFoFTi9t1QusfgQatxUjcKKEYNjexgJxR4QQS1ibpnHFHX3t2HnMD7LfxupvVBREu3F6EkPzppY",
  "key25": "XRpxb6PZ72NXvuHvZ6riVH6zihs6nTr474EfAxjVfTwmWLPCSW1oq8sjqwNGuajSy9nLaaqv5jJ1wrzshuuypv6",
  "key26": "4SAnzFHYUsdt73NRiPbsMXyRwHMcrTeSetyB1sQ76WNmKoExJmBDkLm8Y9fxAfQjcnzhPDzb51MaE2uAeh7SerkQ",
  "key27": "4RAoMcEsD8hVwZ6hxksrsPVTX2mUGQernb1ipPe3E5TmsVD4FF2cBdTQDwiDS8SPteK2ZvVW8kikcuA5gj6HEFDD"
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
