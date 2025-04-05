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
    "Nk9QnwxuKQV5rcaC8ZpFDMJUnbRTuEPV6mp6n36ZBzx5PvmMudG7TrhFYoAget37sYqdLJAnvdQxqp7XpPA9mHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TFxgmG5qrKzmhAuZNdYGQKU2Vzy5KFU7qjff5uEX3Dxx1M2K3vbZ1nwfQPDEiDMDHrv4ZSscmKTdUDMk5cXG3Sf",
  "key1": "5pQUB6oUZCJR2tibnqnoUxzh6AU4ybqYxPWiePpgH1xkBSZCrX9ZQmuSkmw63Z8BeKfi8B3Fg5f62CisEZgBfU21",
  "key2": "5wCV93BhahtwFLTGS8Esx9ABaauQ5M496qc5kdH32rSapDHVfuiA6rFegbPH5h4vp2ote9ohGnQGqAnFpvihJjDB",
  "key3": "3EEgrkFTgCxGNq6jv4RZpHUJJNrFFvEXLTGN354EJucKAtj1We86shUq52QHnTmft7VSpLZXTi98d7zbjqmVfCWE",
  "key4": "5PsMUd8MYMifMNvpqH6vQY6ifi69yLoyYsAyMVvacMaWMR2R3PafB9Ee24YkJqDF7hm5UiZkEZwZAezcaeWYrW9r",
  "key5": "21WhWumWC2UbkQv56j6Scasv1efRG94boodLKG2RdXtWc9zdpmBMDEJaJDdZXagy3GSoEJLhsGFesn3cfi6paD64",
  "key6": "3fhup1V1Bjg3YxtB6avvskg8YzbDP9fNxKrkMQ83ghvohMsizogPyRnUJaW6gMEzMyysgKSm7L4639Mft1wzbFyq",
  "key7": "5imAxxmspSihShS3EUcmVev6YmJMZRjtd13XAzy1G8aztJsU2hYe9XXm6tyCaNr8UdfsfV7t9fa3amqqNjHJ2bqB",
  "key8": "2xVU4QTuHGWuYJVZA81y2R6haKoF39RFQhcPLKavXHxHyNpZvqDay7GADUvbxJ9uTxmZzxmkLbDW8EmKv1PyTSUG",
  "key9": "2EjsxRsH9kJ28QrqB1VvYspMDpiUQdvd9tnuRc6xTFDisoKz9Hxzmm1sgpZKQ8qYCzzCjwrMux6VDonSVt7BtXh2",
  "key10": "5T2YfrThx6MLfDDCiDsEQLumN9qApvgtBmCKhcWBHUxMopz2oedoJ5UAa8RcTvo6uEkXZkBhxDxv5g6qwuDTtrne",
  "key11": "3gSuFXR4nY2VTtndCFfQYUWuhRSt6wr9GMVBJpbXHJuDyRpT9zsvC6bP19CQnEmw6HSpkdJoyrGnKn2jRxY64W6X",
  "key12": "2AhUxNuTgzN2FBiw1T9HPukpzXykyVt1iTdjtSWfxZfDvbdPnsE4Pq2Y3EQjGdiuAb31Ljpv77PD7aP7k4bs9M1Z",
  "key13": "Sm3ouotZ4fKUjpKArKs4ifvAdiSddgxu3jX8NupxBeN4QzfNNgNCkCJVZVphELVMJ2D7FjP2Dkm5gwhLq34HSZd",
  "key14": "4xAinUAAfz5rUrtz6oJUQTK5omY4MsHtyuCnQ8kEnWgpYnc525rNY8KxWv47M5UWVrU6F1MywuoRLUJ73pfnmrDw",
  "key15": "q8Mc434PRw6rULNQfF4WHQEsQ3o3DF4dititwXrUMHqL6K3kKkc45MwBzYnimv63KcesEhrgiZZjnRdvz3NVACi",
  "key16": "5xCwYir5Z95TKTvMFTAkfGUGdEAgi3cxRUeyLar3t5vwGzkFAehqZGVLc79MZh9SqXPfs2M5BujuY5j6d2c2wY1i",
  "key17": "3mfp7RkyWZ6GtzHwWZ8MZ1Wkf4ErNERS1DHPvbYoYb7RzVwWvEcrEMbuu49McdiozACifnfcpfNEKYUpzYYGHFTt",
  "key18": "3PMJCZKspGqabTqNaWPQnWLz7GeaUXKFkkARJbB5Sf6VhyWC5xaK77DkoBRJrzuT9HHiRfkt8NDcQb233GQYS8wR",
  "key19": "468wzU9uQhAoGYVpF2QkAizuZFj2pCTYYbw4UuW5v8CFQGJHgpHifzhXjxxABH5oP9mis3bjsXJdv3JkGeqfJQq5",
  "key20": "yVBxdPgJk5AbkcB2xRdc6C2LPW3cEgBCVqZQhxtiruyHmAeAe7SpoXnpVXoBHC9GzRx7WquERcZPGpjCduaW7c6",
  "key21": "3gJ8D6sDQoE8Hf8tT1eZRNHk8Uu2YYyh926M6U134iesSxvnnsnhrLfMeoY9bvF5sAhbqqLQGo2jsqcPgoHjWD6A",
  "key22": "3HrPByQfQe2wJMtHDsGnFmrD2Me2syPcUSiErjrgBkRZwSJ9X4mDWbhckeJbhY1TaUJ2KtZy59WW21Hhk5MJAmoc",
  "key23": "4Nur13cnLTaiZFiqGCwpR1adKwZLcS4QBt9JmoGASqrEBDBTpq51ZVtavB2X2Umv6xJxqzbWuT4fnPxr3VYZxcgR",
  "key24": "3EAfrBmxssn8hRYHWRmX13zdHFkHi8WbEQCPD8mLSgyjM1hB7CNCaAEDBQaFWbwt3eAWTmUQrx7H2FZL5X6FrtJJ",
  "key25": "yCo73hyfUnubq9Nt6nruDcmDohRekygYvNk2aWwtYrtxXmSzDGsW51eZDe9JwqMjNuqbJ3izeokvkwDXfA8R6TK",
  "key26": "2aCdMQ7juA18RXSPGqgHBUSJxoWsJHbtxoGNmBUXUKfpHFvyjTZvUMLWCgZzSDSX2Q7aHvGXCQYaWTRngNPLw9Ca",
  "key27": "2bR8wceUsrLzEdTL32S9jEZahFzJa7YzrPY5HA6SUKJrgyS2URnM9tswnqi3pjnh1H8NgRheAGCv8BmaPGAaLQdD"
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
