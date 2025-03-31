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
    "2iNa8iVko9VG6ExjLZwSAuy92xYSe92PEND9SKkpSnjjGFun4cRzJgAdDhZE3CmrBCFm4PaQk8eNB5CSbD2cwhCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uk2Vqv9tw5Xf716zsyZaSEfW3rZUZJGcnjFNy79Tb9ZVtB7s1xgHqixDFweiDoZNpfb5LvqgMvVn1n1xvMeJFwu",
  "key1": "QhmQBN5E4roeJjnbN4rphGkH3mC31MEiYvcJpTXbyvjkUWjEFkYTMLDZ2Rx8tW8URChyyfrpoXCWa6F2qAsFFTn",
  "key2": "87MFbj3xebT35uTdeWzBcSVufM8VmSwjPurpNb98Yia3irHNyAGTMfHkSXdvqBkJUyP4XiTeoVmJ4zbXuDuUcuR",
  "key3": "53woUab34p4kn2LNyjRLNo1bYe5XovhFtKPHta9hFiP2WqJFSUcghWMSJXJCzvqFiy1run9upytB5FBgDNe59JsR",
  "key4": "4Q5pGtuMW4pqjFVnkkYxPcw25tngjBYh5VdnhHTbxV4DsJ3jHb2sZxTkfYRKx9vzbaMJvYfnc83W2EPnsam18m8G",
  "key5": "5xdKP9dKrAcM5ZXogha9a7vKEjctSC2qkD8qLUeWWyhZFpzunZKDoc1t3ExvU3xtnzYavuF9ZPW5QcTf2FiZkeZg",
  "key6": "2iH1fLwhnUkw8izLmkFLaSQvAe27tb5DwGN7H4vsyoJkescoJwenREzUCsf6AiVtBQ4vPoWUhQfoVqLJiXHPnHj7",
  "key7": "3Cu8czcSTNYKFAg5F2tmY2dmBP5A3ofj9theEqPPj8vW5suPmqcwtP9RQS43JC2N2oBx5fPVB4KfMzbQWt72XVo6",
  "key8": "3kqZuzWBrqyTKDJPWxfGxhNriY7jy6APvJiuNdziwFia5wk91DCPxbunvFdmtPN1CxDng1MMLDD9HDd4FGrquqiU",
  "key9": "2CNxxDycA9T6GyyDhoTh9rzHtfPP2QjMkQ36JsF2VKNfFcubcTBR4ZYU67L2GaUWAsDsohk6WUPXBXSYRTMPR66v",
  "key10": "JjX1XV6Jvcnoxo9hDDBviJbMucSMpBbrTCHLGuvSR1d3FX6onKxa9NCzqYwABqS4pL8skBeP1ABs3LwoW74KM9o",
  "key11": "44EV1YFotrMhphUxDVWzm7Se5Z9BmxLq5eHgAj11biL8FCgKcL6XeuzKuXoyE3FdWMve7Xfbtjkjjqm61uqWKDRH",
  "key12": "5SHckR9Cqu5StueqcqEFsuDynBKeJg1wrPYrxMahaVfxqNCxnx8wQYqhdjKKew4v9kJ6ejNgS5fDmK2MPkb4h1Zv",
  "key13": "65sGJ8Pai3fbkE89CPxba6ZSeRe3iHmgsvvrJNcMRB1TcqJon8Mkn5P2jNZKhjvgv4Hm6XbSsfs5FJgjwnoCJZZG",
  "key14": "623tGkksbsdmPXPDbcWdEUY2cZVz5ZgWukUG2L7FGEbkSCga649YDxrdydKRC2nUUGQ6LQMMJxKBwRp4fwzKjxnt",
  "key15": "mm2tAhTicjoy8HgUzDSqnafdCaWeuKb4nP1HpznVSQfz5xeeS5aFvpCgFFuefgtfchY7NyPriCC5xDxfsTyc39w",
  "key16": "2qGFpTJE1uTPoR3aE9f3kLczWDHZ9eZtxzzNDKQ6wfNGCGgKKBuBreRKMgvtSjuTHZqPeH2ciojfj1b5Vns41ybo",
  "key17": "2e3PogBDMFZyzhFN1WLBRWpmbz6NfxhN7t3qfAqtm5a8mC4nN5Qx7LNfyWyjpbJr9ji8kkhjFXodXDMyg5jUScEe",
  "key18": "4MQHGAhHMYQXFeCC5KYtXhZjASr3JjNdKpzDwuR4abeY1iNqjSn4cHLx58PC73vY8DZP8m1949epecvi64M4MRnb",
  "key19": "4s6DaUAEk3fKuY9gE2kC6r3M1qzmAxweVyDSzHDYrdYRkfb3ACHKr8QxhE2zA2AQSnsn65TJXp18SVoFvR6JPDGB",
  "key20": "62YmHUoKoWgGfHcGrozebgQsU4r6TKvGo8VjuCBpShpbu73wycDYYQL7x9aScZ1VtCZRFVdsXYCrLt2U7UNXeEnL",
  "key21": "4g2EcoJS2ADuoyuBw2D4enguZLaBVptkb1q2aCCDstZLgrnS1ycuJAoRELLGiyXKHPNFRpSxwR7K6Aoki1nXp6jH",
  "key22": "3WekF286PYedQ9Z6UDyD89AALvCooQDHLg12qRgnqnsdUT8oT9HAPsEGNjdbPKdu4hfJodnMsWBqbARHgrfDMnpY",
  "key23": "5gfC8TfBm8s5DFk4LyFvseVmFXH8AxMeJMtp3XuHzVDgXUiQe6SMkwnSaxffPLKWuQ2yRAA2kwDkysDGbCxCNmAn",
  "key24": "3jbywnDQpAmZYW1hzz3vQVfcRjoPpUL4zZif2h2CCF8KmYVoEX1qnZoPjPAPQxZfNTwiUMZBGQWBmjgEGYcHdjLg"
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
