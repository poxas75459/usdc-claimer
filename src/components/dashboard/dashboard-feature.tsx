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
    "5DjYXdLkJvwX6ZE4XhzJujfABkYbuevjdJG2KiFXGtNhFpkz6dPxtvzEVetu6dWCTfFUgsmgYwMyoMjYZ5wGb5Jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VHW8Kgco2tGWBkVcmKfuuXCDmWULXegFbjDnzRc18GW9izBe4YeFfG9LGYmVuM54aKc4Js96v4pnbtDioGhA5RX",
  "key1": "5ogNaBnEEKA9fNm6vXQKr7rUhsyTc1FCB4H1oU7aBWA3NWDV5Hgs5C3w1umVsJj3zCTgw48MSaAqgo5XjJxJUqDQ",
  "key2": "ZJWJwjVR3d4jgGHMScTKMkHPDsXrzZjsSF8wU1shbq9tU6psPKDvBMoc3hLjRyrGShZ7WNm9EF9fG2934gR1gV7",
  "key3": "4QpUfRxg3sEBM7dRk6o9VGHqKH2tU8HbMJggkAb8sX1nsbwUtUhkeKVwVBXQzSMJfapaxqkHW1fVWgGxS8Hp8cwN",
  "key4": "SRnRsD2Dra5TzKZrkA5pNCSE5oB6jrHuNYSUgw1Jeg9aBC4HwEPP5554kc6Sm2Q8mQGDzJdD4k1HFmYTUxb36my",
  "key5": "2HU8LEbaQEzqPmbm1CDbakXiD8pq5Ac4XCDDbLQ4ZqH9VezvtEpKMfHnVHgmuawPuAX7aRamdVbUZCXZhehRgS3B",
  "key6": "4VpnK4B8bRV42z3p3Yxdiskmq2zNVTLyp4n9xU2xHwnXrMhxbNLCDzaoKbW45u4MpwdK2kV6gAoJiswmEGYkjf3L",
  "key7": "m4Ue6kNC9sDbZ3g3Zaxaiu3Sy7Z3FbZ4mmb3on9BVwEohLokgAtrDpFGFH3pfZ6y4UQvk78r4MSnUtJKzyJWUJC",
  "key8": "4weHjHxwQw1wLZSNFGStLGBhFATBLwHBTBAk6HxDsgfxAWyqb7uL9Ej4w2ogPj1yNK34o4fxjAgJ8ZcdK3sgW3Tf",
  "key9": "3oG81AXhr4Qnxs7sneWeHESNdC3Rw3vQQYBdYVhqRuN5Fy5JHHKTk1REUot7sSZF2gX5vuTHEURDCnxzEFz76AH5",
  "key10": "52JrnrPpVybx4LFF2qdLN8azRmtGJndpgqkXQY4jTU6oj9MHykB9FZ134nYJBFY6ErPR47E2khN4xJHMKxyQFaAg",
  "key11": "5Dh9BAL4BY5WNHPNVJhNhmF9HfKn7DQvVf5uQJvMw7Q4SxSh5AZ5JMwrNuFSvdBj59jLqg5JSWXQ9h4pBJo535qg",
  "key12": "3aWuBPREXeguALc8ePqYmNpX7ZLHKibMiX7jxDRLmJQuZgkSub4wgCyBuRgxNWXCKU18DL8z7UtFC5Er4SeEHDgg",
  "key13": "3cXeriUHNMMXFZSmQHvVWifUinuphSNvhSYwPBahwCiqfFT5UuGsjqaPDVjJE89NWrRaLYK2idB3QaPoBAe22rGj",
  "key14": "4PjoSVQe4YyWtHFErENfnDxCbzNAv4tuhvYR216Xu8UxnVdMEn838f43yXUafikeVgfHEMdn8sD22D9neeYzNGC5",
  "key15": "fGeUuWtzmJnFahgLEBbdvjmXtRn5eFrFURHvtHN3j4tkQT2hQcBQ5GSUivqLFBuQLZYPCfLJjWVPpksAExUU1aH",
  "key16": "5ZidQDZm5K2qjqNmzdFHy9D85yheJv52xvqFqi6oMsSTWNCy9yGsHYxizoh8b9ZirdpFPRFZAvWSUyjNtmWnzH2J",
  "key17": "Qt4kx5NEaFP6L1cNiGM1vkRNTf2Hhz19jLHEfQF43Gx8FWN1vppcK7PLYp8iqfB7r8zwHR9rkWdjuS2iaS35Xtv",
  "key18": "3XpFd7w8Yv64JsJDt8USmRpqbeFvEPUzsYURF1KRLqefxUPCS1QVVbaQpw1fNLY82WTHMkFKepkH35DyKzK9781C",
  "key19": "4cCVUbJd1B9urRUPH6n7q4T2ri8bjhea8RmWLRXrxTkYsUHTpShcGAS7327DmeuuWKFdtkNeyWvejwfMeughfr9G",
  "key20": "3UFZ3KTj4XRr2SdwUik9FEK7oWUk7oV668De7iW3drLqigFHVUUzoRteMnnm7B3x7czWbsidgLruzvzVwtfTR1j",
  "key21": "5fAz6htB2VooM6qm1uKwZF6fG7gUK5u6PNRhySWVgnbkc4UnTXY6dpcdyjMUprTcFeMG3cKPgxoTfdQ1HoUSiv6h",
  "key22": "5ACsLgV1baYB43zbsJrba7qz2U6zGMHmRSGxyQMGbHGFsbEuTs3xH188w1B8EqWcks89XkPvmJoUArSZGxQALe1y",
  "key23": "5kmMMtVzKFADoYoMcUF4E2yA6VwXXqGnMLmTbPrzYYNkeVLHY3JT9dp3jr2surmYkaqhzVUhEeTqLz9KpL6vA4gR",
  "key24": "3pSyxpB6S97aHxnkPDZ5nXsx6bxeQavZ1kSzEX6HwwXvNQXkcvuvw7hYWd2hr77RfUc15VLHorctxFtjNVfg8aWm",
  "key25": "4iXm4DhqrHmDvECB2MMdcVPZAoYyQSZgA7nZ3RCR4LA1YZFFNFWy2cMWJhbWAzr6yhZ3jQLxzjSNuE1d7QQhmFMW"
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
