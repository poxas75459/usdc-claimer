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
    "2WBSfU9uwP1WS4mBsitjpyxJMKU63gpEQuoPTWm6TE1yqURz3TBBPbUiJBGYjcHGS7Kw897aLVR3nAfCrkzSxdKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUCLmn9MNZAKmeLTByhExPvCS1cviHGUPCpKdTMFtZy7NHKP8XxP3NYgAB8bxvCZg2oQn6rXj5jsi67mWQ3BRV4",
  "key1": "hjqAzLdUB2d69b9VXPfU94ANnVj1c1Muh8HhNFp1hCxysgCESvymF5BSNKmtKRJXuNWiSaZHyzPJaybbxCnGmRr",
  "key2": "knBQZQAgSf9meWN5ytx8gYGK5XA2g4Dq6Wd2gZSYJE2RpoHzwudbCy63SL2qf8zpzWjRkwdTfoC1go43QHjWTKi",
  "key3": "3wWqjNR7SW171VDbjPKvMYNrRRxTqZXbdBpnb4mYXhGpjeP5wEE3TTahocg1xjGQuAqJdDM22mTkEMD7RXJPA2V4",
  "key4": "2SbEkb97GcDNW8x4kCZcpdFshD6ijQAEmVxRKte3RLvdjuLr2M3PmrWfiZbY9u6NFzfwotqaKxYzn5A1w3dQ3n63",
  "key5": "2ceHSLB2wyWxHwCtf6K5z3R8HU1Nw6ZeWHyEL1bcSAm2gzzL9DLwLU2iTnHnebMZ9iu8GGbpYyYgQCLnWQ4hWDWH",
  "key6": "kAcwpShXUs7qmKHe7WkpAN7pZ1c52b4aQSQM1ikW49UCLbAY92HWRaZiJcYhrKcFCPg7GFFSNfzG9PggxAfQiWh",
  "key7": "1LYavYF88udgnyEM4twPs2JfoLzmS6MQw24Co6XfFPZ3RfN5UVfTrNksFDFLH9gUQRB47gAAbR3SBdwkPbKADQU",
  "key8": "gqG6b9rpYUhVMhhuPWLZuFEs1fns2Kw17EWkR4nVYRNpTyGWAJpF4ypFfK5HKtoXTcMjiCnrU3DnPbPW8QudukE",
  "key9": "4UR8bcKyV4gtKSvz2Xad42YJfMbeFxsFpb4DsKJn5ezss2H2mRrJ9Vq8EsVSTnJgsNmfD9sD2emLNk5ACELSVRHn",
  "key10": "3nEPpoQBT34TXnEjwWptJ8zxaPuDcbWSoVsoK5DyAumFaa7QmjLeLmxPHVwYKPJHJQ2U6hm5UjFjqgwky8AhNpLD",
  "key11": "2cEjcbg8EPnRb8dBP43jZzZubh3ExhPZvs92LT96owzLuFm8TWignmY7Q3mnVzYHMxbP9mhcD89294yyKqWijYwV",
  "key12": "o1pcPstHC9YhdkAZDyKjDPZZKfdWQSPLa5EWhoXRpkZ5ynGBLsQv6gvJV2RsKj7b7sDRaaacvpAEL1gzfUhV9mj",
  "key13": "XYHvNipXFttB8fkhZoyUFDThPEiaLg6ks91e2gYArH2AJFwEuQLvcfYjoyngZ9KedTPjnyYZXMCKd1haVv1cUt2",
  "key14": "5BnNXrQ3hD8neLCRFGBeSAeZj4V2dxJHoTpauqHA7oufPtxhkD3GHW5WefRCEjSCgvVMf16nhd4iexuXFcmuwsEf",
  "key15": "2XUiYxhv9NSeP3df8nE26h6DQoyfMDUvoammMLYtfwkhWhpzKLgoTURvq92iBNM27uFJ5SAseN5yw5vSS3L3UESR",
  "key16": "62o8cNVyUqUbfhQ3Gc5qrfkSqPVqH4fgVruTaoGDdbYuFKAGazULpjKTvWtGx6faJ9qXNe1qUgisg4Eh1JoFCN6B",
  "key17": "44Kko5oNm3bPPtMXg3XGCi6aNMbs5Zyp4GfNPFcjNn3xsehjLRf9yp1NeXtqDmVGbC8hpJgN5AQUoFCqdt6M5hmG",
  "key18": "3cMhqUeZnha7E17J5TBfDd8HRv7BwemZQgjDXSycK7qD8gac7ggLP3kDqDnxfq2mmw95v4mKWpJ8WorryYrKbxTA",
  "key19": "HfaH53iVDF8BYap4YoZYFAdgEu2rfY6NRRH6QinN6HsjX1LHA7ATjV9XBAcThp3q98hhquVXRdEjkTckzRnQBmo",
  "key20": "3569KUJxD6xc7FmYmgfMHrvsLxeESnjNisZLvHR1g2ggREC8reWKZ8RHAQTC4csjSnK4Aqfpwmv2UMucup5G86do",
  "key21": "zGF1YaADfNCtdKj1rDKomvsYrWpDBCqnAp61GC3SDXy3hZjNeF9X3dQPawdmuP2a6D4apkUHok143QyBeMHvPBN",
  "key22": "63XEWCpNDv8nC8qyqwYCYDpc7Ay7x6r5a8mDNeF9d1SSuC36v8DpcuvNtD9aRPDioBShNQXeYVmGVi68jwbJmCuL",
  "key23": "49RsSSjndE5EXaeBhmhugu8TWC1mKcF6azw4DmVqNVYMHShr2XWBwN4dCgJUVYeFvTCpXuKKZP5sPDyNuFm7MQaG",
  "key24": "5WjukyKenzFk6LNY9pkELCT6WrFarNDYHszbxG1EqPoi7boEsHV5g27kXeCFT1sudwEnWbwkbKDTwnuWJ2JhodoD",
  "key25": "3HMPcn8MsMr8EMNZqpR7Xh4VKwTVgccWJAsW7Njdig5PyxGPo2s3HvDnznZUX5APTN4Zy3ZR289Tp1ZRPxRahkqD"
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
