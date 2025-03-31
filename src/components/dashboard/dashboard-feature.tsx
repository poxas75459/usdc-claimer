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
    "4rfojeEQAz3VjEMWUBJ1w5WXSDjeA5jcr5uPZ2PqrQ8RWrTZMU68THuQ1NLEX7wDawZj2U7gNknj4iVRzBapkJsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eW3qhwWQoFFth2uwyiRubsGHD5dYNDCLfm9fUdEjz7dBwpkEbgkaAfnE4CAKNiNMg5U3c47DCX9TvsFQTvyxqX9",
  "key1": "ajnpjYpX89Zn8cQwp8vXma5VBwznP3UVPB7VhTy7GvSyXdH7semMa8SmSAFca7sFdkdU5zDJ4EKmCCBzsMiHFMe",
  "key2": "B1fw1TNVyQJ5Szavg9hNpAyV1QW8hHhnpXNHEnby4grTutgpzQ9mZbwhEqMHxKvvrCezB8kC1opNhUXsnwg3ku7",
  "key3": "4WrsQ1Fn7wWoxN2fPszFiK2DCFGa7oCDN9Pcet8RWqskFRh5FJN7kUnRo7J4T73fmRKFA9jQ7XDcHFpk6es2D8DE",
  "key4": "2KgxmT4Pkhf2wXs86DaNGG4GDkTcmfM7SjDwvcCdsK1U3GJ5AzEnnFTw89QbtkZzuk1MBY3bxTxYBFsxxsBnCBhf",
  "key5": "5CfFQf45i5hVwMbAZMi5QRn6kodqduzdVz5pnaosQNq1F6LELE6RfwMAmsZkPwsnJzTPretADFcAgiccKxfc4oDP",
  "key6": "4ndysyHfX1sGFRg9RHA7ub4YhtdKqnzw5iVtq5m3LhEwHY6QiYtFvRf1ond12bGQz5T9iiNGRK7ssuhhgE2u5puc",
  "key7": "4wMNhtZ1bMsFkBJCnzYtVrRjoco89Tdt38JRP4oRNUQkcYb1Uj9XRWKYcXd5c8EEGsWGpSzhLoRpoNu5AbiJ6s8N",
  "key8": "xshSA5N2zyZ9rRbV6weqVvkpbYNE8H9ETXiuKpe95Qb3T15ifA23b2k89RrWP93JhzMjRXvzcgU3pURLT5u2Q5K",
  "key9": "3Rd6fbkaRr1MYHJ9ZuqEX8X1nidR9CtdTwV3isLK7Wkcw6VTbkXRNRg2UntrzU9HVzFsVYrYGeahFn5i7aQrFFyq",
  "key10": "QsufXady9TFHinAw9HWuK8Q76sQ3cwCeDqYFZZeFf9nsXoyrCjzSAiqRbPXKfxdnWdWtYs5ZpQgdVz2ffNpjFao",
  "key11": "3Vq3APcbRkiwFcceLsxAa7v7eC4aok6taJDdezNSJBPUowqzqm6tuPCeRbSqy4DAdz7wzVZGvwcVush8LjBBfEmF",
  "key12": "4NyJPXhm8esNQ2NYRqGM4Fd86gqBd7W6cpczznyuejPCyBB4dHPCtMMCcUHrMYwhaCbQGTQGb11kZ7nT32e2aUts",
  "key13": "ypoctv2ZPuCEToREWrvKMJn3uD2awMSBF2baBEJDUayewnwGJ1xVY5s6GNJSBLyX3Rfwp4bGMjY5cb34tvBMHYy",
  "key14": "2vpipuF4Sc9pZCQzCuCeZtMXBguQKc3FmWTgSdhtJaswTAxgozkfZTCwiPhyvEDuva1FGmvw6FYEpMcyZhKvimrJ",
  "key15": "46iyUrsSEt3iagBa2QAhcoJqfRfSUWqNMWLKLnNopaFyMMynaVm5qhmK1WeATBZJCkXZTx8mEsXNbnfEbGxuSEgq",
  "key16": "2WmcbUrpq3YhfeX6ACiJckgaZ4rBKSbV8M6mSSgi74Ums1xyRZzCznR73L8A164sox2k36GheNWia3rYyaTnEBrr",
  "key17": "4n5uPvE8aAr23XYtkXiQb2hYsgGyYTCQjYtqhyAARj9r9PdRVuBwztLkPmDXfcqVbcHXgfEa9prMwQJuNGYs1A8c",
  "key18": "3fSCvrFSJDedyjPyXFUQH4NcmRiSMRpP4GyBskjfk8i4QB4MG2jh4PEoMxLcrH8SkNBdCCZMdttWUXJqkSkWc5yQ",
  "key19": "24x6dLRiaz814YtcXQJ5aVPyvqVgYCQR4fpLMajRvTLX9PjKtA4jdVcsi8MAg2sZsYEebjkBKZJS6tB6Ke9AGKEd",
  "key20": "3sCwB1DtfV9CEYHFt3oCYj68trmttDBzFYjsWtpbfuvJX13kt8pEofi1ggFcQR9aizkDy64EaZT9W9LugBTuVwWn",
  "key21": "3Tst5Ufmv88FPAHSAyWkDfFuhwVaVhtLamnUtpe2JJoc7Cr17PBC7wc7AYFKJiKx3e3g3e6gtZgBWvFnw1mj8gyY",
  "key22": "5U4Z91FBi739uRJNMoX8Qm6gb2f9ZZwrbNMxAXBbtdNYr1Dr5yKRo2AjyqEewNYvp7Ltzyihs6z5LLAa3gYsm1cV",
  "key23": "2FNDevWEXtnRRmaN6a6aniEVFwcuaFXLrA5GSsutB7wZzrXiZ9q3HcWMZapsp4eEaae2qS5g1GzrRwCxVGcCdTkt",
  "key24": "4UShPLGiqASG18dyfmxEQ3b3e3mJzvG74YFcBfgPhJtjVndAAxWLpHMb4jFhqBSHwodibSU1yYiZLFJczMKLcq2o",
  "key25": "vpvbpUkyKNfhKg3JUYH7eKKUS23dgz5ySMQ1PML6dGc1uKNXzVHRUGNMn75rpWnKp9J93MFekrUcehX9Zah6ZfS",
  "key26": "36StSDSwvr9FX1ZyKcBKR9PsFggaaf4GkCU9CKwF5KGUtc44MUD43norrTkyF1sFVnNAeaAnnABYQFxP2AMe76aW",
  "key27": "5WF1As5XPxBzkG5ftRXfTFsPkGzw9vAd41pX5kC29m1gx66Tht4U9sHgvqqjQLG7joruDunB6usqHf3M1y1GKF6V",
  "key28": "4ujtYFRcRRyeShyhSbivtDV4pFjTon1L2Zx3zXEVy63AmEftkuEc6XBsLCwwuy1EkwLWR5DLzTwbkMF8XHpwnjHr",
  "key29": "4ZrNYPASsCuGGpzG2JeNNb7zRX6WgFJt1bHJXRdKnA99Hzxy7fwQZ3AFf8e9rwQLjQt3GSZZbTQE1mU6wY6dFCCp",
  "key30": "mLMMZKdPgD4huRbs654mBFkbnrnQVNibXgthrgFYcYX89a3sge8WU62MuTkz1zxx4qCfsY6c8LbkJcVPEiAB1XG",
  "key31": "5twrocpjzWGy5mG8W92Zs6CHNfd3WTN1Q9b8AKQNRbKceKZVTbbsjBbnpatTA1o9P3dhFdsyJLHjUFJTNThAWcY6",
  "key32": "3CUjwebMnYzvD3HwJqwuMhbDTufUSer3S6G6U9ewxKcUaDKBgduah1CXpDcXC1jG3JSwVNA7JNsJsqdE8g5NLqxg",
  "key33": "669Ekznu4yZyBTjweQxPTrcpF62PG2AVYYL6UZVikQXHExdgiwBwQMe8yQGWJqHfHwRqTrqq745rfi5brfHoTrpz",
  "key34": "4Gt7NKfrHxg6kEDa9JUvRA5p1MLUNiZLS2EdN6DFj3B93MXNs7SM2Z69HKzQ2P2QGiqbdsmHZpCToo87CJW9536R"
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
