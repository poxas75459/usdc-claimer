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
    "4RGNe1mog8qtVp918o3j1o6wZbkNFCs7io7yBiieo7sbhwgeJRT8xSzXcFE689UitETn6iKzSyiv9MEt6cp7knRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4vsr7YhF1UysB5Qx15xEb2kJcERXejoJxzJskXv5FA1bPoabN4aUxCFGgpvn4idwvj2yxPQKnd1RLBU448qBNZ",
  "key1": "65PruM8885FDQjS6GCVzjG4jvY5wCRAF3255wswmLPQpEeQk2P1Jvf3PFdjWK2ARKsQMkiGskkYMTkiBTmfbLiW1",
  "key2": "jYgM3pdSKg3oq5GPFfQ5Aaeu7GvpWbckE8fFX51SCLxGN9qbLz61MkYatiqQT9rkCbpiqGkMN9uWsd8NLFz1fn6",
  "key3": "4Q6YxCye9uDpq2hCjETc7A7Hd2VqfairNw7MP8ci3LmrxXrH6N5QSkU758WsdkzUqvT9J5uKKVcA3ZWTCGmqMzjk",
  "key4": "5tAC8btk9wiPGJToghqjK1FzgWDkCNDUnGQY4ZahCYG883SiGcWU1dQBXpFdDZju8A8xQFS5o6dnfvrecsJrDhpg",
  "key5": "4pCCxaiV1Yvtkq9JBMFgURMmpd7Muy5tVJNtWx1aUgd8TNaT9pE8oLW9DKyFAktC9NqpqRwTUYb2bPNHkrsfRjSq",
  "key6": "5in5vnTWKFASPxkc1Mjvr2H1y5fURhDzSceBtM1LgnNZBjEy4fHz5i2em5wsCGBELwTiZnq1K49tU1GYzS8Kb2tf",
  "key7": "WmbtVeu9VxBSnc3LtLD1LS1LijhKpUNcYhkATPJhNdizsUdvBpdGCTH9tZzyrpq6munUXh8zxQ5xvZuFCzNxwrb",
  "key8": "2ZmPcynZTBCGRUMTxnipPDEP7eYowbf9VHsqRv3gTpk3G4Pdzmpr5W5TW3ri3NEfws6s3yX8vYf76KCLgd1itW2f",
  "key9": "5wVzpMR6Fd9KSzUk3sV88ZQUmnsjnBeLZw1UNzH1vJaoHsduT2F9Z65NCYZNvc324XCVFzLWQebCmeSy2DUBiW6F",
  "key10": "5p9zyZrBbajVqdzRuWaB5GUqxBZ4qdxcwVVHhBXsNvzE312ySmVnT5hA5dQLKP8Hg8vha1zdbwUFn2Bp7RK7fd5g",
  "key11": "2VEQV94DCc8VEvpcWVnsgeL3477dfiL24o2HviQKUNMsYkBQCZuCQ1YA5GkGgQcsu2f83qwfzYrYXnxd4vchYHzU",
  "key12": "2ieQ85Qg3GdHZexqQpJ1k9zJrLUd73MioRrXxfqHXYSKWDaUyi6TzE1sbmy66hRhc4HUWx6iv3Pjokn2zUB3HDv3",
  "key13": "yYo9NRT9wNr2bp3pFYZWshYND7cCvmsHZtTyiTF8FnHbvCJy6Nd1NLoJnkThUPvQcwypwc9JRUHmo63e8QJmH7L",
  "key14": "3FHosPjZ21LhKWwWJ5tqeZznMQkuPtjxtsvjXVPhzfQg8SJymn3QLP7N2j6ZsnNYrVszpfg6xzeBKZSMdQz8Rumw",
  "key15": "3L3KzEayknQkWkPF69iPV9T7UtwveqEwvTzkGj5Y85Jg4PoqMD5KbqtwH5j2UQ4mKjiyr59sxCXi8yvCvorGyc5t",
  "key16": "4Y16YqtBMSXm41G2matj2Pu2FKeffQooZSQLzdP5ExpmDVDcFgo46u12orDmr2o3v7w9MjYaQWgY8k49p5BEYRud",
  "key17": "4nNN17TC8kDP1yzLgUqtGpspQd1Wughfdn4bcE2CRBwUvCKwZBqhJdCY4qZUbN6pNA4s3aYU2VYcwvHbooS64ggN",
  "key18": "4ZuGB1ok9xEU81DaLEuWehqETLwNH7UXkznQejc1xyH79fSS7RSGgDnuCEp16Xcc9nqeGKjP34zzmbXmYUmPgKEB",
  "key19": "5KFPy6Wf7FvQqKVWBWjooMuQ5gG61xbi4mCMcuqMBEkAsPBQbzDkHawsHKoc2XbDmW15Xox9EZW5dPHZgBNyUALK",
  "key20": "2EUWMSAPD7UGLULPTvr8NyT1vgvEpENjDpN9UM4urfVyecq7igPx5u7wrjAqqjXb3KffQkP7o4m3QrRtS1XGbAWh",
  "key21": "2wh1R4M2x51ggj5tR4TjkyAMwPKdA4vRPFsMDeFYChJr8Uz7zNmRqhw9iKTLGNq63ge4CXecRzXF3UQW9Y1L6NnZ",
  "key22": "3TZwEFurpZXJ4aXAShmVtBLCVzovsZbGiSfKVd4qpXLsaaVevq46hVEg2TD8b3fmk9v5idPwf4bbqhpVcm6zYLbY",
  "key23": "3dwFgQr2uCDqbsDWkShrxwoU72JuEbjadfMbVhmfS9GZFnFp1yCcLXS9LbBZ1m8HHurXJjdFi6Y8fbEDuf9p3rBh",
  "key24": "5ZMyq24H7Jv9D6G3ZiYwPmwEEniHUfoeMhbhLwvWq8YWU3H7wgpdnAjuxafWCzgrZJW1VZtujWJvY66kaFNLV2K1",
  "key25": "4auUuqVkXxdR8EYXNc7iogMosnxjvzJ2wrfWK7Y4uNzofHcox6xAFyaJpcxTsEFNL1MGZVUNnwENUXZ9pV74AAeW",
  "key26": "5CuUApvbWF9BFFg8263AW8pkmVDpBSjmXvygrro5ScGSo9hAvLwFKH5pr6iEz4pGN4GeYZgzqvzpPnAkXsmFKyJv",
  "key27": "5XtNxDNPT9FAyBVUqzAMT1vjCWRvmWuTC4f4yXf8SwcLZ7yXcNSsxXL8TfooLuu4R1DsFJpL3ofM5rQrMLkWpWPj",
  "key28": "2knZ7HUxCPXZQ94Si42dPsftK2EbZn3d38xgKRrcY46Qw46RR9EppYc8UkVhdNJnuenZUKFSJLFq5cUq2E5di5p6",
  "key29": "3GuBo1GEdwu1opjbE7ybxsbNEMUzXhxpbQKsjVRX67DR7t7CuL6q2w38esUupXMoQ4MHa5KX5CFSE2JBWhL31zSv",
  "key30": "5znLMU2fe8mA2QAnP7BoyQXimCL9WP6rZNaYYPSC4A5FUJPahHtTxocM5ieKLdYMG3736kzzCgL39nxWr6rREMYJ",
  "key31": "5zyszmZU2cjZvqtrEgtpojaXoU6UxXV46hbpiUYBXkELZSwd1u8peBjUk93uM9SVnUnf57VxohCWyK9k9EDYxPv7"
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
