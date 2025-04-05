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
    "4oZom9QhFus8NZ1obEkWFEbUY3dKcoK2CA2wcfoiPmk2H4119Gqz5zF9NVaXFghKnMex5U2bAxEtHDFC1GDU8uMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgGqxzvFo6556aUUcWosY5HkZMmDTpBeDFJ2fWfPZHrfMT7kgXAQUYVUNYSbo6C2eW9JJnTkSDvvhCaANbkdyjh",
  "key1": "5YtY8ZKK8qhZ2HiWpYTGvsJLdAEeG2PLkRx3DxFg5HKsLwjGsaob3enyHq9taoz2HFfQcmrBZVM1K4YSvGcwwtVj",
  "key2": "5z7L3JT7962pEhsTQVbgDhercmGxuDM9dTG4AwU2FGTAxts468XVp4Hypo8KKNCEXsTCFzJomRTJJKgqHpSXA5HA",
  "key3": "4FR7HbeST4a3gJSWkGrizYUvBiVh8uHbUtfKzZtKWzTyUUxJsCaMySwVfXzW32BrWFaWUKmyQG6Dhq3MefLpd4Ru",
  "key4": "3pMthKjfPFy9bQqQ4mGYVW8uqVeX3eP4g6MsJaTTLugNGkV242A1HRWLN392G2Wv4JTYKiSSHofz7S4YhJLj3GwX",
  "key5": "4BJ7szTRLtb3gvXaRL99CW21cGjZbKMoHt8PcWD3ePHzwj6FCB6FFhQNhwioLYi2qBnVCazSMBTBUTF79uP7xEwQ",
  "key6": "42N9R5FXjVSfc3buMXtVfMGfYx5PDcdvETexb25JbsqEKkUdKFZBJ9q3RaAe84Uf6hyrQzB4Zen4Rss5sbssstAe",
  "key7": "5JySuwyMccmYbYswQeqzCuthoDDTW5TeuaPSaHaNk6Ze8GA7zFenzf6BhfqYC2CuEW9XCGYn6wrgzA3iVcTyw3aY",
  "key8": "5YoxNEkGtdQUf337M3iUKo8TTzBHeY7zUjU9kfJyabWZ75Kf7GXj37FtYrJaSD15MbNtq4pHfWugwqMZFQWKECCm",
  "key9": "46FHkZwpFfSMo9S1PyKBvuv1UkCN4NpVLw2v4jyDfgZn76xxZpT3YGQaXZACaXoZXF4ATGNofYwZmUKDhSGhkUsi",
  "key10": "4PZSQGvvfk8t9vqHGfrtg7FLieascpAc7KYWYNCFjN2P6kN8tz53gx7yQpCRdK24wdwpcqWu3gfCYCp9ajpMAJ8V",
  "key11": "3oNKZYNBW4Gugg1fnegBUjt49R2kVhs8ZwdN7KFyrTNn6Vxb3MqStkMRS9k9r5aK8gbpf7b5N4XCWtuENsZm4Y7y",
  "key12": "2HFFaZcGo69irFDDgeqTcVYy2bkxtkWZQwgYMn987dHaR6jSjTcPBnuinznmdbpgbLt5jKanKkA5f3L7FsABPwtH",
  "key13": "4uEU1aFLe4Jr352Ck4HAikGSPEtG521kLLvk3uvqXc9b4Zg38mrzZMojeYPs6W4uhJTBF4LUogt2SEn8L7Xgpfc6",
  "key14": "5Vr7sWvDeNUDDpBHEwYrCPoUg2DEJ9Lr3g32nrbUq5aZws3186y8NP9wcXrUFdYYgkBtJmuVScrDx3VSWjAjt3KR",
  "key15": "3E1PxkYWn2KfAvDRCy2AE1xbyhvrsPuCa2uGnSjV1GTrdKB69GYcbTKsfVbUhTxBQg6M1AQHPsyrMxz9ybyKshmP",
  "key16": "5UHfLdioT7hSPrphovrjYFbZrZ54kCm5H6mtK7noFkCz6dKGmMmuv3owNpT6SAAHehXVnJZYuRk2MkMTFsGQSUHu",
  "key17": "3A9DuGa4s6p4knFHj6bjwmEo1TTMT8y9gBYeMGp155xpfrSaCtKR5JHS2GjAnyHLJrp7iXuPiP6SLNpmfV7ebcjS",
  "key18": "BtqCbjvbPrGMfWrYwQfDH4kcUgo2rPNmdf1p3kjnho4a2KQ2aVq9EoyRN3dRJnDZ4g3K4Tf7qfC6qsVHraeTqee",
  "key19": "YJF3LzdQcWDqj6nykRhybjWc92snZtKy2jYmUYn97Faa89g5caQjEM5uAZiVtY3Gek6LkhK7x8dRW3jMJ39MHff",
  "key20": "54S1dhnbRnsnaMz3yb2N8VTE2refFBUgsH8EzE6uU5DJYh2iKor7ipAFb5AaA8hkNCEur2SV6pUxVjW4vaVzLeeD",
  "key21": "5SQRDFSVTxvcnwAZ3XAJ7JMTY2CuifRvyeqxx1BQ1apMudZkFxT56JJaRrSSZqLnikQZZudrS2sa6mmwtjrhHqma",
  "key22": "3DUTrZrmYezuDwQSM6x9oiY78aiZotUt38jxo21iV6eB96P5ekJ9pe6m9mPfg8pBNSdZUBDNymR58gaqkfD8L7xk",
  "key23": "5JFvZViLPoB64ZAgsoHfzicG44HVm1dw7TAXBwEiMN961hLUkh3yk7MgPnSBEwTofU2kc7JuvAW3XwYEWgto1nSH",
  "key24": "cycT7m6Mjg67NBALThoCNdsQN3JqDgwcxfepbmZ6jT2RYDeGqaDUaU2GNZ7meuNoaGwyYWovBSB6c8Q3VhCDS3M"
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
