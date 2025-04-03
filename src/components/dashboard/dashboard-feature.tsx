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
    "5v4gv7V7caWvdiBYsSwd3dmRfCyVs5adDB3RQ5oRc72dc6xNHJSRi87Y82u3eiugm3ozmsH7v7mc3842TSBNPuX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eZ88x7taWtGuEMiMhxNxotPzP2KD3ciVq7Wyp3wVyR6cRhgfYWKZ5tL2W71WTp3XsLwPrM7t2e1yGbVCW5dxbZE",
  "key1": "5DpnC2QeDpggcjJg6n4J37dqHr2ayS5taw1mwaiUUvQTtsdnSNMWakjpr2pB8HRvDJq75WZb2bc96H3FUNE5A74e",
  "key2": "44vCCRwM2xDp41wMC8waWWfBcW7hqo87onSscgiuUzTFggGii83zQVYU2HsdcnbaoJbidwUgJ6q1WAuhmaEY8WxY",
  "key3": "3nxezeRVoBeFBXPUtME8Nb8YkJSzEUF4tmS78ozvYc7c2zgF1wwUMu31zgop1Qe3oAgBQ5564T388DfnTUNPoqtD",
  "key4": "5Gu23Xbq58i2wXDD3SZJNM1spj4Nob3m9Qeo7q1TL5v4VkkoD74BV4AVZtmbbe9gZS4nosCoZJjNUkTrB3T8ZK4r",
  "key5": "7HvnkhsZc6WqrV8Ax46ELcTbM1QXUpDPJvWeiYiPRFDFbNzHDrr1mR1hMawLBLVu7Y5hh8hKzQQpMPRCNxxKjfB",
  "key6": "62iUfvQfp6FivukaFZUDc2KNZygK4R5b9BFgHkgbibh1aG8N6PJDG8ADwndapvkjFgnCDwxkC1mH9D2grvW7pbKy",
  "key7": "w2TveLFUGC65ASj2AoK1VyLZQfppNTSSgw9f28yda2rBX11BwqXB2qBd19PL3ouh8XceyDEiFtetpa9kKSxwTsd",
  "key8": "5yqXey36zXf95SaKbfS1Z5NyWq7LdN6FR1JpFShWuTqHtaLfWF1rr82Bzm4bprt2BkfJQEnyzTBSLuGoSA5NSTkg",
  "key9": "3HpPmPsVATL2p8tMch31mjsnTUXPoskuUsa3tTv3LFnWpkhNibxviFKZjDTdHkg5iWQwrCARHhjTcy2PqHhnykuE",
  "key10": "4EBACVKW3qEu9mL5mhRfDwjF3eSAYkoNfhzkiWdtXLU6aCXNbwiWFzC5ugGfdeJ7QSRhAy39AcEBSmXESG4wE32E",
  "key11": "MRb5KF9WK8m1h9umBqzwZdAHiUx9FoGzmm8czMCnA34FU4CBC4Thbev6uhfqQBskpEt3poasb3ADufB5weGoAz4",
  "key12": "3Wgske7F5SyPv2qMNcPEL99WmqaBcXfKdv18HVPdUskkCuNKWByQjs7Nz4xUM2wNJksQTjEoo4vCcGGG7svAvFTG",
  "key13": "itCFc8PHjSpqevwBQWWU7iaUw19BsvA1YKF4fubY6cUAsyHkBicp5vk3EMVQ3kb3fMxBU47dE9kwbRei1Avrgno",
  "key14": "63BvxHA2GPhoXBn28xtWccQtjDTTzgUCSCZzVe7nPnEdfRYWAnx78st3eCLjthjw5cysbepX6Ppy5JcZP6emFve6",
  "key15": "66pgjb6DHeMfNTpQghTHZAgfwfZxVWgTPiuMdaZwdVghJ9BkBX2NMarcECxxCy6xDygmETiy3DZ1BiU9yEnCmxPe",
  "key16": "3ysBaBBJ4Gk3dqZd35pKnweCSWPeGK3W3vB6A22RSZ4JzFg7rat4qe6XxCd81EPLeTkXxQvcnWTF8HDRA3zEi8yW",
  "key17": "4yhoxf5W1wejVX164gRWwZt1oA8UbvokSmeeF4yEz8dhSvyj34eaPVSFpFLYuWwLpVHva5xdTXWvG3e8LFFQ5Zu2",
  "key18": "5gBMmpX8EUGxiMwPJJvELuXnN7TU1bWqiMkJ2p9pSQjGrHgwhPSrZUV3e6anMA77ebRoBx31fj7TQgntxEFLtzqB",
  "key19": "5yrE7XoDaknhREWM4Vqghs7STampwevdsPmiZ5GwowbjXtRFDRfSbQKhb3NsBJ4dTPP2qP7xsRVGU6DjxiUXPYut",
  "key20": "28759YDpdnasW3VR113ftqyrJFSgFs6d7aEDjpeMa8LEQK3mWyJfNQSmw7vToKMXGAbUNfR3YFfu23cNQnKokH8g",
  "key21": "6qw7nFE1j5un1nNqYd4hoCxUL1vcELPszERBt36LEfHEhC1zkkE5WziBCk8HmnbdtFXDjTPbEcocxu2GCK7oTSL",
  "key22": "5ScDPtqCksckU8qK9EJYKJxpwT9AR27mgh5PXtnMy35gh65JG3xSDF2mPYbcZkL4mm4gRaW7nyd8vewsVQCnDr1i",
  "key23": "fDRc5qutzXFeeFXbVYhacXJX76NSx7EH4iED7ktd8HSkYnGo8bRr3uEc4mCH854ND9TuwAcwaaxe5k3jpHv5czx",
  "key24": "4mUDHGCVPg64ecz7sqCNyD5VEXmj9eKZ37bvyu7tur5vfTPtJXjpNn1QRbmumJQ3syjCHPX5hjTiYpYtwsVv5Uvs",
  "key25": "326FVmtgAYeuQDJEoKASPWZJnVFrQKmY9Loi9PnsdqquHTDj2KJJdYsuK8LQXjrpch3zHWXCaxKZi4dt4Xg464nP",
  "key26": "3ryoF5tURnZz4mzzW2trZRLkHJZMgnr1AxUco5h4nYeGCSj8ML7zvSiyWVaxwz9XmFXp9K6G4ji2wgu6Kc4X7395",
  "key27": "2pN5FGh2ALEJAmL3HYTp85JawoKq3ixFwqePEfjR5t2qhtkK6v2n6cFpGtaJFoi4jFihhGxQuQzxUNAdBRRiHA6N",
  "key28": "3Vzj5zQBZ4dCPLrsKHv9pKRnv9uVPoehcpzVRvsBWL61zpK7qoDit5qacjwAsNgq7RKtepJKezLRBjPKoypzxmwL",
  "key29": "5ZNAEvwNXhaja3NUyMJv63jnYLqy1YokFCVjv585wCdPgLEVFM7ySyP41HijjtDriSN2dUL49A9FPARvyJYfsav2",
  "key30": "qradg1Pjb8bN5io5ixF1BESfdPRf6NnLZswT5fKPdxeHLAfbXHAb5NxNwggH3NGFw2QEoRWgMW9C8bypwXDNErD",
  "key31": "3FNTtqZM7WbuEhrf2qCnMNzfafHmBK5knWpsMACf9fbyaB7d5MiSw9cXzwJvrATrSzxBV5aSChPfGsFYSTDjb8Wb"
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
