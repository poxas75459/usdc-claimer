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
    "8dCK4Vrma6ypa7evdgc4ZRxF2NF9zsrJoGaMA5tZQ4pcDhwhzrfiucwYRvXcqSy17MGjrrb4VwJei5dzdHTsJMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tqUfwrVbWLdv9UnMMukEnYHUAa2zagfbewXTYfbAPfuuT4hisSLEh2s4YNauieXLw9eAuPAcsqc9wHV3y8qx5X7",
  "key1": "4wTLu5CR9sMJUgPG5BnjcnHfuJesHiWD1gYHMCMWy7d4L6DbuGNq83Q7moiq94MjYWexh9QYFyf5Pm98G4Nndy68",
  "key2": "2BkUmZevUR9ThbMpoKbsT3V87J61x5oVBePZdGMzKrcjnELiVofWn9c2rWHw8wu1bU47STyJFnsGVKzfW4zFPr41",
  "key3": "4vonC5N1FpRA3v9axtfDbL7zpgtHKTQnixQzyApJhPJeN82vEpE24DWm4aFNorWxJNqgNeuKqkW8DzEM1GBRr1px",
  "key4": "66MqCvCDiJuEMHoKyAWgaBQQLPcZ8WBjVgN5t4TfZ5jq2kstmDWi3p4doWRwmxi2yTbwYvuwZJvPfR26VALX4ENZ",
  "key5": "4DqGEQ7DTp4CD6Euu3JRrhVsC5XuxdiyDutEvnNDdD6ydpnmWreJxL4unmxDL2ZUpx7v21Fdk596Pwsx32tB8Nz",
  "key6": "4xAKFVcnL2ChH4UEv4yESK5Qp88TeySmEpKfvHNJLYMkBGVwDJ3Sx67WfFyTmmXGXKcFZXCUKQVTQVpMWF9TrbmJ",
  "key7": "SEHoSZceMkRrxJ25Dg3XCAVXBHZcmYg15R7jy5TG2TazkesuASiMxDsQjmdnkLNDgo7WPHLncqcRSKCVsZDJjog",
  "key8": "2MctR3ba8xTo4QTtYrsmktYF6yeXfnr9PtYYLjV1xK82AK9bdx4gtfZYKRVRS1y7hfxcuYRDvbP4wYwQgtrwQK3S",
  "key9": "5TpWaJvoDn4eDxxLuzSq7ZVDnbNRX4UcgncoUJbvFio8LaEZU1TbdHyETycFCCn7rCsu8AoZsqu2ekun8zoXo9HT",
  "key10": "58wDFRb5qCoz4iwMnpy5UQxV8rdXQs6JkcxD8jtczDPm4tyG4F8CCFu3eNC5xEviSM1rziLi9rKbTepTFbbAAfrc",
  "key11": "35ZBhstQHiLejCZyLAu6MhFot3YM3Vcpd5VE8ztk2rVxkBjxDQjdXEBHuSBFJKTBZNmeKcvh9gHEtRAXskyjuvfu",
  "key12": "4T3FArqfcCrzW97coUnewL4QrtK46ji7zkxmUiLZ3JTdA9CrTtHRi5QPR3zU7wfUKSWdeWjd7QQJm5nkbrSDpd72",
  "key13": "3MSGew5p6HcaLP5TpiZQPFZtzHcovXHBqdjuH67cZYhXd4TWehrYRt9MCQBCdfvJ56svWkc9ekGuNbt8wYhsE3Xm",
  "key14": "3DHtXQJXvbCfBEF5tepoG6xk8zpm9FbznPjREMD5gGgGjcEXzrGswmGhqAgXp9pnSf4EkJSUC75Z4vzxATxUyDYj",
  "key15": "32fDvWJt9Zjho2ZTES2RofPWgaZkauEcAjRJVsefwf5h4ZhHBfFJ4uSyrhCYZiRxcnaDM6jrFjEALS7hX8wBGw16",
  "key16": "4XBzzpNB7HkgAxmjfNxPP9c4fgU4YCSDsnnoH3ttvx2FgTn5U2fzcBWf1VXUmiZ1LvsAde3RrApqFMk1kK8xL83G",
  "key17": "pTjkeUgxHzsRCyyxBXSbY5v4fB21VsE8Y5cRYTV3rMz2uieED4pRn5XhUjUMWTXrMKyTPaZmhLQ6pHNe6re3m9d",
  "key18": "BXMgq3XDAvYwjasjhfLURwxLH9N16VCssfyqg2fRYE2xxCFapfe6a443agbRDBsVrKeUnmBroP91a9CQLxqw7P6",
  "key19": "3cNbPiMMoMEFjozNBbmHZw2Ykskwekt7Mo5vug1ZD71SuXvG5YUVepNhmDhmcchVbH6cyxAqVR7xkrcdXrALmZaP",
  "key20": "5hTWHjgqCH23dA3TCvEydquxfMwztyoSasAGRMKP9rymJmsDLymrdh8vfFDp8vr7qxdFs73LyTyqoWN2isX63uys",
  "key21": "25ECJHAvKiy6KoJmDqFCaGemF59gCJtqeuoffVjvCb56KCJyizi4ZbLtrgHfU7rzRLnXXbvi9WhXjbaBPNLG1atW",
  "key22": "64D95j1kb8ovWSpzzBssTz2MEfEE13iaAyb499sGTdpcydaf5L6B6wrBMnSde5NwA4dsC5EcYBa3NZjhhPC3uPfX",
  "key23": "77Syx3Mtc6aDGE7SzNZTpeVSEgv8Sqf7yxB7bvBh5CLokss3789fn5veEJ79pM4mYCbZLavCnBngbEYuXS1QTRY",
  "key24": "26qXBFfGQ2d4wCsVKVUaEU8LZQdNMCV5UYwq1CXVLcJsdCJbvMgEGMUAszuUFUoAJ876K57nVUqX3oD84dpfaPSS",
  "key25": "3GGagLX8SGH9QxCdKVKLw4wgrr42cq969UxDeeq5v1HFkyyxZFeJbRXHbUMScTykUYGEcjFJLCNBRfJDeum8RoYu",
  "key26": "5faNS8Teh3DtbhWRPBgTQ8PCUbS6VTb1zibwMQMGG5gEiQYM9z4HaCox5yznZaGY2gugSuP5VqdGaDoiBfb2VCdA",
  "key27": "hDo8hN6mUVwSNtLc1XnSfQjN8ENh6aS9dqpnEVnfgUvxN4ZV6iBPQzJtJkYkFqCbCy2Z9eYFeWaYBB6v7hy46mt",
  "key28": "3kmkfRPo93C7m3TpwgU6evUiFZke2MkAjhzXMCNqeLWBn6Mj4Z9btnxmK1fxZcEBCaVm1MKa2cueqtdRK1TH1BGM"
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
