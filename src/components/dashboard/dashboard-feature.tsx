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
    "4CDRAkFRFjSXGP6wLGFCBUq2wSLBV79Mgje2sQcVY9fB7KynZU6wbbcS7zDehXp2wtYwxoPkozWBx7yur9e8W3e1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NK9TdwkRYdXVXBSsmD3PZAZmDjYFjFE95WMdQ1fYiK9G5sKutZraJxEmT1n9rsyQF1wQxsAEUUkkaTppd5H8P7Y",
  "key1": "2feNzdtSVHrUdErb6Tpte1ww2iUNXonsrURR6BmqCgXLAQBMisjTQ6R555SnRN7tmHWTUZyMmZcbqfxAbzabyj9g",
  "key2": "2N6Emp7TpFVqxWAXd5x2oLNDAqovWMBpkNriaNWi7WkkX89ebpyJU9SHj8WeZxnr8GVGuorNWrL8pUfRbak8oGtD",
  "key3": "KnZMNFLqruD1aYuhRJ9KrW1V3spDCxLoUsCbqEYw6rPTwubYxEMaJ9JW13oY7kfJv9TxvvXQonfFavGh4woTbtL",
  "key4": "5ZDsLX5dDBQW4uCX6D5HLQBfUw79pxTz5KYVEsXsyPpLnkY7pfsRVeEvCwvVA3pnvjZfhCACoKqpXD91gyFP5a7Z",
  "key5": "5fKN3sLghQFe8dcXs6UPc5TDfDE1yV4uTc5ocMpYK6ke2VTUMVwgki3xGsDiytk4rLVpii4CtL6WyJYMaCggbYi1",
  "key6": "5M38bde3jSXvB92VqUdZnsa52HVhPz6VUz2VJSKmtPDxeFLuvhKoZ6YMk6kEhZmXw2dJEGFKRtxbnKuwM7c1v9a4",
  "key7": "2Nh7jB5XHQd1KSA1toCrr3CYZRMjypskovQ6vSLU4w2fWULYkG6ujx3bxjcRrqqM5pNLJviR5MAU1Zt6DDqBYTzM",
  "key8": "3aZqPyjq1uR1UxAZKJBhKtxpVue99f244iBraU4jdyfkyAsqCdqMdYyLaFU9Khibb15strZsArwFxdJB5Rk4KzX1",
  "key9": "3eXVdoPx7DEFKk5ogYmuLQkZNWCeqY2Dbt7NbJgNowV3ZHvgvu5K47PyjN1sLqseVvjxBX8WyYhbQhnGAaigWDRM",
  "key10": "544JG5nTvDdipWVa3TFYsYoxcWnqqH6Qpfx2stcuHtoawzP6SVg2yjfEF8NRhCaKLzXx6dzhGZ8uqBN74dqY6yMf",
  "key11": "563tAmn6CzhMxU2n9PqQSQfwvNC5cLoGfdNMVisNqXYtrbXksZtHCrDfwCM2vxFHrsnfN1jgoiYpRB1sR6g1hMpy",
  "key12": "q3rC5PCaB5mX25uf5PtgaZ7ZH68AmYsQ5wnf7zjwvrUXUbPE9B8HLrDSFzGr2MXGkKkBc8NfVVW9DfbynhQgXZm",
  "key13": "2Sgacoke2E2AWw6Bn9EebBKccAhKUkiezjxAD1PmBSTGVb1XGMnvS6345S9DTC3nHPzn6bGYsF61WmznHzCvfzvq",
  "key14": "5zCHHsfWXRBnhin1h4MejKx77N1nJUYxKep8xi7Ujxe8MUBY1Cm1A7KYARaPcyadfMNiiUK9c8HsahC2Lzsy2xcU",
  "key15": "4tGgBh8bf9XoxWjcw7cmS7BvMbKzxoh48paL9wwttMwnygKcnmDEYfubyAm9XpgQ6J9H1H19CPQU9agXABFf4qwM",
  "key16": "56iuz2xSftBbP597sBtDSHUjS6aq5GBtKApghBpEfvhCRK3eWUsZZHAR7vCPYd8Vycr2TPuSou1Vovr6YgwqfwWz",
  "key17": "2Wjsn71QsxU8c4Czq97PQJYazyqBv5fS2GHYqKGVdE5JLc6or12W7RNobiLy1Kc6xSULBwNKjTAT6Bu3jHK3jRf1",
  "key18": "EaN66i3EkRCXgVNZzYNEM1LmTTduE35mLRqVQ1F8Fgc2rBc9dMQ5YdS3YYATTjby1RySvpACE37dJo6qfSJfPRG",
  "key19": "2ykkjpZir3ydkRz9oXFtkb87nd1PUrEAF5LvXbNkeJv1obc4n2yrATUVXay2nHqNPFo3gYm7UYN6GvcFZnVN1psD",
  "key20": "5nzNU2fLdfqSQXdXdt3p7xPmCA1PR6kvpUmGw4du63GGwgewndzVtrE3vaRuwDeZvNjg9YzGGa896tAkVrt7ZZ4c",
  "key21": "2F6AWjP73KuzzeMSYz6gcwEMPWrCRXL4YhMJRBjsmuWcNtk4PA5QHAqw1Ax4iWvQVoGN5Z4snmySpAbwCMmCGiVV",
  "key22": "4zbFNv17s4HZYduPhfXeUqhqvMVNmZud9PLXfRzkF21F2gCUPZcfu8zn8cfv3ENeemU6N6wLhf8zaDT4A9AXqhsz",
  "key23": "5kmZKhd2SPqqoZizypD1iTgvJTKMW7GcDBwkxE8RBYBEAxxL6CdjspCc1yj3wL8oWQC5uAWo5omqbv9N18bYpBYq",
  "key24": "4SonQrRCYUPttNomypaFR9LF8HqqscYpuxTrSYzrVaVumvPaJQfEAUddNWvxRYhret8fBjQrztaH91FWASZNq42y",
  "key25": "44VpDJAvSApMDPRqAD6YFsYcdGgcSfWKzbzRrj4PtxJhYehA21KcVTCvodb9cdYjZ3w2vYwzaEgZVoarcvHRfgT7",
  "key26": "2gF3RuV9gFPScUEfSRdb29XKJm4NtSraLoMQQ3fB7J2WSXTBRqSXsQeDjSrgHnWgwFpmmXCDgEvNCGkHEk5orryy",
  "key27": "61c2TgU99cCZrVh9g1GiGZJNiAfcyofVXkUf81Za3ZqE9duczEiWoCbfjZnB9akBpHS8kj6nx4mY32vRudU4hRyG",
  "key28": "23xVe6qxTqjYpoFKLDMJ6Nh6uv6TJqaXcFWWxNZbFRAjyAPmLui9rhEs2244ogz1ivFVavipNu4yM6CQPTFCWmjb",
  "key29": "5QRPwJ4qSc6h5wioxPBzfavPoeJCjmRrBQ5GUwVMWTS4frDfbVPmYJvjxA2tHZPFbkvdxcGs83LARehu9cT2KF96"
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
