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
    "4BRznnwbApMYnMbyA8122FYhpjqTbrfs94X6jwdYfC3uWSdCEE46KAn43DCo5eDwQhNhzeTFywvAcLRQWsFk7QQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oUJSYHfa9fM6akMZpay8QoMKXU7ns2TMjbnxAnBJ77vUQdLyFuezcQHkenokdcoRX4Qb3soixfjFFAvU5xZda2R",
  "key1": "UHeRqXCC89DiXrofYfEE6v6BqM2M8JkRmdTn13X3k33Emfd7m4CcYJbfCxge5Yv81TijuVWH4HYXF4NXyXdPudu",
  "key2": "24KKzTrzdwN7bxQUzYXF5LumzpKyqA1NFzhCRksXHLdHPJKGmnEk9sYUJkJfEWJ9PwCUvcDXCsypWDqZtYaZy8pb",
  "key3": "LorW8AQ2HtHMdHBsWU83Bd5RZ8HX5mSuvmWwkfcjVfRJDJoJXgt8BLyPHQK8QrfgwxMKswCf4tcvh34NJnj2tLH",
  "key4": "MGjp98RkBnBr8K2p5pWxWVy1VaY3jtziYGfSu2P9km1ByXtfvzE26CPm8G4zJYkZcwum5M4maNjaC5f9sFhEaYt",
  "key5": "TW1MvhtXszcUFqskKTBiE2TrZJhsNttp4X1GDo5BNvLC1TTyn6YqrLSuUnoT3aKUakpyTkpiXwCyrJg4DU4VJcB",
  "key6": "4QKAp3PC3X4ff3FQMUEpnq9m2BRhBGYgkuKQT1c4FZ3BLGWGDN2nkCWBssFDog9YEtC3tDer8jrsC31YHJveiqRr",
  "key7": "3ZsUgNvrrWUtsSTPsz5dsmpxZjXQMUU7NjtdgReA1aPxaPUqjPFjs6SSgFpDfFndHwidAp9U82BtTRpzSkDcMTn",
  "key8": "DEZLmzEkKpd3rB9pTBFd74yfpi7xBgUL9g5XmjPDM9XuVqGhjfzXKyaUQb5gQsvb8JsmRoiWmuXNSSivmC32LWN",
  "key9": "2wnMLBbqzZkNHgrYuNQykS349RZvpYmwzeApwga75o3Q2p6XBR2kVe9Nh3RAzKS5FT8YNYvn5HeUGkAUk6RGvPbf",
  "key10": "3cjPMHfbd4N6oxSw1NKB6Yw5AbNpXXwzfiw8TPnpHK6E3gYPXydihxtrbvP3JxxyK7z6JWhbKSPotFvhEt5mJf6t",
  "key11": "NQRAqjWm9AiQcrpoVQzC24WQP1DidUzFTJrLJWt6bfvJPYhXisWBi7askBqLCrmnMv52b43FYxibyDvUUpTQ9KU",
  "key12": "5kgAzwbBgNAswVDxVKEiN4kxoY4PUhZiK6dHziDS8iWoxE6kBTRzf9HTt4jhTEVJSTYYzch4zCdwSFtyoq1nJdsD",
  "key13": "2cpLnR44aDzNHvTfzYyqQxWh5p7TxpfcauNk9b8UhKuQNMbTYswfqafmDs1nf5sQ6dnXoJsB1BedJTJj7d3huvsM",
  "key14": "45Bp3iBDYqBKRmqhna4ixCqDnR2RiHg1SvDKF3zrVro1XCrE3nENr7qDCW8DGhUxkAQMk9vaSFBo4WJKzobCXjfn",
  "key15": "4EzoVtSPKXxi15ocUvrwZfs5X3xxJwxzpgC6wCfViVxL2NSqhe1koyDSDAMAD5s6Lvbd4ih43tpqEJaNWZcZSMKM",
  "key16": "5F2AAKMkLFFD4RRZcMjMdXjoH5JCNjyQ7cyqUzFWibvw4Uk7r6XfWBvwE4K2MqT6YhSxFB3hSpqo8FQKSrHRBkeD",
  "key17": "65uzS2vk1Lmepc9z7hEDfbPmEyU2s5UBBUdtkJbcXpkEZDxQnhqEuWuuve4fBgRxK8XYjjXRHD5bGdnHE9SL5nbZ",
  "key18": "38uV9tSFWxqZ1N4FfiBLmQfkn4VDX1dvCGkqThRETTV2XLYTGtcAtreUA42Bb7dnbGdfQdoh4aQeKMjS7BpJdwad",
  "key19": "46RmcNHWwmhvgqj4PVGfUv9uer6wr3GnqLszeMyKGUgTpyiVTxwtDnmnLTYcnztZ1rta7CHaHohHHZUVdHwdNL5K",
  "key20": "otMBUy7HPt2gLVRpowo5gcEuweJcv3g3EjW6NWPZ26hpjo5rHfNXUjGWWtjoCPLfY8gii7rTdNXx4MDkBRExuVe",
  "key21": "4phcu3R6yjbKGeZ68sxSg3LSnxPozzfmwG6jtM9A2KZ8FnsCXBw37hq4rDr9psVqMMh7KmSFrqCKvA81MrSumgwj",
  "key22": "2QWSkFEafoLUz7Bq76cR1j4Vkye94vsbd2dVhFLLjiciu2P2rxnABWR5tHcKon3wNLJgzrqEzFaMYpZnZGnBBKXN",
  "key23": "2My8Wjv9U5KWgMygEzCPBd55twM2G89AYfraDZdqK3ZqoqtSAamtyzijYZsTyCoxNLvs9n6zHWToYKrVJ4SZuRXe",
  "key24": "2YiBLAe9NkvcRxWTxFfxd4f2SYaVj2EeqBMa81TZasGPwpweecdWeLkUtDpxM8yJXi25DGkU6C9hdZhJcU5Sqytx",
  "key25": "3HbdZaxtVW66Qf6VuRSABsj5PfLvPieCBZ6B4oAfWR5sdsuszDuv8qQuqwpNMNxoGxfS7dXckb4U2CeGxE6k9E3x",
  "key26": "3URgPcHFD9iw3DaSXxCKpat9EcQxJsXj5v7V15tyGvrm6H9o4fXofSJXwPmHr7DTvfTerBYwk1xDFGRc4kNBebYC",
  "key27": "3at56kigHFs4K1udusodangwPSVY6xTKGjBWc3y1nV8sxkCYfHVrS5DFRSJr83aDCpkL23eoiWo5czMWwZxsZ3A9",
  "key28": "3xJ5zVp5aPq39EfkZAemyuUywR7GJe5R1YVHafdkiVpGFbwK19odXQE2EsM9QqWPpA7ZWWdkuEjWYemTrHEvmDiR",
  "key29": "5afSvfjwe2sCLqCxTf8prXp2mZY4YVB4vSz7P4Wfy3d42gfhWhkZAW8R89oANwoY9byCKZxvF5njukbkZ92gYp8n",
  "key30": "AvM6TUVL6DtiHfgq3aN72BdhDZA5zStjcFdJqKXb4fdf6mze4HGVh1PDij4o8JYTo3KXExA7tb7aX9bBKofFE4m",
  "key31": "3ufcBRiYNrPqZMdezFMvLXEAZZ5eGRtZJBgUmn2rsLGbrcj95wLtiG95E25vSqgENjiZYbuNxuKDjBXvngN42AyH",
  "key32": "2pD4HQWyJ3srLyxkBQTmtNigvenQjvqJfu9yo1NQ6n1xqvQH1Y2D7WsEzDcdG2LVMg9MYucsffHKkQfc9dosepiY"
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
