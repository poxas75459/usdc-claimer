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
    "2bwmtEVQzUGtmf4HBGWZjad5CYTcjgiMGJLbBacjd9n8tBfdnDKWam4NuY9a9AxDh3p5uKreHu53Ww1sWhyegvUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cvrcckZLmGeAw656X47f98rzwmRrPBmtJCtdjiXzVNUk4c4g9beECSfb4BAUSJeUwPrKSdqH9XT33HBBHLpHrZQ",
  "key1": "kvjkrC5MLrDQnNbN246VEqB7C4W4CBsZpX1QVzDjSJuQ6MjERAuDr6oLvs47L8DEC2LradBFfUTPmMK4MJERo9C",
  "key2": "r6o4SQ4gTnfHv9XXMZMEckv1qD2idJPy87azKWPQv1VCGoyXJbFbxjLmQHhsv9UQvL4g2d4L1CU5Zq3ftDCLfen",
  "key3": "3SHPZ22xqAm1qBmnzMJZPMZJkc9sRqcxLCTJzenhVpib7RBag26NYvSTUdj8RTCDZPUaLMrbGtzKEPJ22TuPum2y",
  "key4": "23augMzd18UxkNGxg3do1siiE1vdnT7gza86aT5GfHfUP1ay4h4tcZ7j4GUzNTS7wGn1fd1iiwRXcKLq1pbrwpJ8",
  "key5": "2AUuaCk7gLgb1KC1VTseKAnNhkEdsfbnVNM7mnfMuHDNgot6apFRsfwHzTXKXwejuJWLovRJxiESBX6yh48WQ6GP",
  "key6": "4n8SMzs2Pd9AUEULMV681kWHARSVLYmcKmG2e3qEZzK2JBNjwZqZMcK5foD6T34CDZmQQW1QtzjwPW9pBY7wWWno",
  "key7": "4UPC1f2U2aginAz788SjuJSHxBVo6Z7q9uJmeZfLnwCBRG1acKJ2Aaup5FSvBgmTgcYSdd6uuVzBiX4WekusFMgY",
  "key8": "4LYMUQTqFctwvpjjJm1bqtU7W5nmrfm5NaGuAW88gUgnseB8d4x4HspTmWk9nhuaH5tNVJnSZbahEy6Ek9m6iE79",
  "key9": "7xr2g4h4UozJoMAmioW1bF1qKvk3dfnsnVYWpDp6DsfNKSr22NzM8MHj3yMCpMHX62C9JUJkEHZyq8nGThk8mw2",
  "key10": "3p7MyUxR9iFa8zRDyqJWWbiBUvYZsw6WXEw2wK4X44tmBDx5JwQXmXsg5FaM8k5puBwPx85bkeqoYbFf54Mv1uwF",
  "key11": "2njGqPRLP8hkWeM1imWjPf8jE8be74RzUMiXkX8tB61bNk9frduHjUKS4yarLTwoHqzEktgobjU9mEYtKfYdq4mu",
  "key12": "2eBYA78xoJVcqoxXhm3ipiWYskHieW3BgkX2Snffq8FspZ6TsogVws4nBrGB2xQiMhjAtWgWhTj5aoi5yXvAVbUE",
  "key13": "4oH73HeFNRZrd9BsoFvj2YGktPW221KJrtLXSx1qcUrNpF5G5H8ptULj3rKTfARGP6xu6HLeHb2fuTRDiFNP6zZY",
  "key14": "21Fp6iEo7iMEMqkD2bNARtiY7dth7v4hHCRpk88En1fhacmJVLQxv7wKU9Q2eCeGtxCoHnwVbNVcbeD9Cd37sSuY",
  "key15": "AzEYb3Dx7GMRzktQfGKP2XA3z9pnbejZQtkjPW7RPpw8zhiqJskRf4JWSb7bTfN64Ce5s11H4afn6YeuzLCwKHY",
  "key16": "dh1x6PZ7ZUQxw1iLnbFQsQ51Z26dHkm69dniedym2JmZNzAc26DTt5EQpryahfSj5gtJaEjwXKuZPDr1EcUapUh",
  "key17": "4PKcuL5iQHx2QPmHp4sNe2HoRy4jpS3Zt8hzTi6xEAMsjYiGL27Vyt4CRX7CyPi7NMgnSkLz1XBLUUEJzfcseNFt",
  "key18": "WhAfEnLNYzqMxrBiRyX8CgTE7VJCWuikKqV4nBdHiC4aEmStx3dXSfppp9BtQKVb7T5bgfjQiXewZuozwQjonUD",
  "key19": "5jRfYckJBHZ2NWeF85WpTCR89yvQPLqW4eij8p6WShnDHDcoU8XM9FJGUJ8EJjQ7Sxe3D7xot31a4uMBqYGAAmfq",
  "key20": "WS5ozWzsn7xh8mEgnfUcQ11Q1kf7SmXbzcMbbDG9ZYaZBm3Ryhnk6ZfmNvrGAoUp48f3hLE4HL32SfDh7qzcfCM",
  "key21": "3bxtttvAE6PZMxQzv2fK7dbfZoa9CcGKdNXjjJgY6izreoHFmu5BD9BFesYpLQ9u5vXKAFvogrSuDvLDH7P9VvPT",
  "key22": "5WTJwG4FMs9ECCDYrTbhKpHAKCQZsCyTrGCA5Uxd9M1x3ntc8NgK8xJDphhiK82Bh4AruMQvnVPTFS1suyY1ouYE",
  "key23": "5zdmbdG9tgYFjYCTuyqfcvmHzbmhEiqYDsbQYK1BRwi2BV85uBjNvcQ5CbFB87axpyBVSmXqR7RKT56cBZQSJNAu",
  "key24": "3ew2vAN5UEXFUvNDgJgWwaAXpNMnMrygrxqdFgwFT2C9K1B5xmEZc8ft3uUbn2FQCWweEbBYrcsmzJJ7dxUZFoAH",
  "key25": "2NBYm1D7Ssyr7eXwkUAicXjjHSwDhkYPjtk1vapW6GhNUG9itvrNceQQ7YSwQgX1AnkNjsRaf6saZHzYAgsZuZ2p",
  "key26": "2UGqEaBpwewmEFCwARxHA3KwSXCi13MSdRJ9eLh1pJhqBCUup5bTTBuVPS8HT3wHUZ8awhcSBW2i726nvxSCGZdo",
  "key27": "2M1gvezziLw3bkk3ASkqMQBvXHXikawZizrVAAgrwXGXEdNbwCBbYnheHrCZk1QX9HHC3roK5EvJdKDV1P8DzkFU",
  "key28": "2DdLkTCSm64DQw4WgXTBTTsM4MPePxNnrQ1SehU97hoJSHb4dW4FMFM8ZGVdLRyZiyRCxPMqJZrqyFQ51tRjRW61",
  "key29": "2NcbPivsvbdQTgw5hQ8WVPx1Q7yhHyhAxndkFnHLMnbnzKMmr8FB7QbDmjPqAmiRMRqnBkvAari5b3CctxS1GCef",
  "key30": "2QR34NLer6QNpWe2cd1VRaUFqTT3aSaCVPGdxGKEATrRuiEJpig6prnbGDgm1xko8bvaYzUR7jLq5G9Ndb1374DP",
  "key31": "15w2AzggmWfw5S49jYEfn7dGNUWpGkRM5NqNGrmXzpq7uZRfL8qasyjR7VeCiqt2L9L9PNgCv46RNzbQ11qQt6r",
  "key32": "vjB5v2EPghuLoyQu4FoiAkaTnU9qh38RcrhFzRJeL8BHo4dVm9uzQqhRAxB2bnBh7QBNyom8vW86q9oLcZRC32m"
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
