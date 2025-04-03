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
    "4fk4UB9vbiM5YjjsxmS1RYfrfkqeJUoDM2tbSpTZob2RdqBBmz8zf7gZZoEpo96wznJzDpkvrhYfKUa8WF37TizQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wac7J7LChR8P5ALkTSpUfHAQCrm57BRyReMyy3sEXks3Rg6xSfVrgbJLSYwVYnnRWXDdF9DZQDQGaQdFi6mXhEB",
  "key1": "YXJoEFoQezjZHbHFt2oZHHqZTQ4gMZ2xmhjegdZLYkktwbxRX3otJ3eoTmwi99oGHyyfxbouNou2T3sgMfDFvtN",
  "key2": "34jyJ2gBtG6RmmA7upMknXdSE9rqKVMS6UzrB351r5K7ediJECdnPcoHSDzwpqTQJCXrZJDstjYmL242qhCZyPYm",
  "key3": "5eanARaii7NoNzLmeB2gZkwjP9r3zCVL2RJGwUXtiV75H4qnvBVpt17woKPc4srygfvkTToCoVHcMRm98LGx1haX",
  "key4": "2qa8MgQrSLTzTacX5N4gREQuZCArMMKjhVGAua8RbLJFBg4vwUSsYvysW2YQJAfXUJM1yLTYuB2hGCZhgsyDXjUS",
  "key5": "3WNAFqUdTgwiNqw9LxsgsDYRcaWFdFQeQ2JSskpSnvMCdVJ2tVfJUYhrXGZBMgJfF4oLrE9bqqyEDab8Nz2NCz9Q",
  "key6": "3GcdMQQn2xGy1sLsApyzYQtaFyQUGthfbbPJL5WHYjYa1m2G6crbgDjL1svU2fG4G7Sm8tB3TVUhDbk6jpgELKjq",
  "key7": "3hh7rayr7CXAikS3gFzey3RU41Wf1zkqReUDCkFHGeeF9A37AUeqr6CRBQoKHP9QYkt7yvvtuZutmYGEyUnvBnsu",
  "key8": "4c6vAYxcc9muVCjC4RtN9iEGfvh6qmYfwpXxDvdpN1YfPFzBjxQ5P8gnBkWuBGbaHYPmgRPTmYMVmNwgfNXv2Nun",
  "key9": "671Wh1xkPUHoKUGanyur75a1KHFYXdKLJUoxhn5QWwr4x2vhZJ81XoEYPDLGE4NRnzrkZnze5YjMJ8RuPvxGxZhV",
  "key10": "2uc5qUBeVA3eJCPJ3Lk8oj7RqyEJA2u1hNa62Rn2qDCkLWNZR16xY78zZsoBRHw18UuUCSEVdn6rVFgGNF7kmEDv",
  "key11": "2CqFStLzefj72ANywyAoqADzQfKrECmR1Q4fqXGzCBya7og18DgrJrv6yZYS2eA9XGkWuYQ35gpGgELanmaoV3jG",
  "key12": "32xgHtQV8GiqJ9aQxhLrNAjQ74eNPKfuFWsgMVN5N3bbXNvGxrHihqcX2MA4M9dpMMXVgUyK7KEre1ceZ5D2zmHD",
  "key13": "5R4GhciWcob75DWexV9xkpQbbrCAYnJgp4T5oSFhxc1sjNcZWD1h7NcD6rJke3tPG6yYxUm1pk9cNxhmKTYniii2",
  "key14": "5axxo42nSxSvKEnUim6C8DETKgk77NxnjCwmfuFcZEZJcSdEtQiHf23ktt87H4kY9T6eTTxCKzhirFp1XmLXUh5r",
  "key15": "4SbfbhSq8VBZCeTKbK2RU7PGNN9Ury6gcGUAQ2V4LPVd4CYJiVHb9k7thYD1eZUbv1DTmFxVU9RaZ3wkhBXRhKzp",
  "key16": "2zTCMT8x6g1nXjmdjMf216yLvhFbTZXutAgoG53rCBzBFHTmKierDs6xSFkYtmsJ1vny5i8sEAaxgMzVY7uSezpy",
  "key17": "2xevgQenLA8zRWrv9EYTGorTALey1xRvu5mHUesdum7KqviksWtsf67mNKWmwCumvx2wr4MqYuFJhE3TKaWKmN2y",
  "key18": "K7zFBmM7biSu9jGPdGhNsoekk6AvX6XXNGQtyyPCM92yZByudoSvFjAB8gapsKX8DNv6A8uvtiHv5RTNusRTYnh",
  "key19": "5JwrGpSPF8U2QcgVQ8U7iLgWJbKQxpHTGd8k4u5iozNgN5j5T7AqcfXoxbY67vF3hQKeZxDMebkz5Abf1mWBPhdC",
  "key20": "42HyeRYf5d9PLEhKXUzsAdULUjMQB4WdUv7qpKqULR4tcsJVM5cQ9Kc2vhVBxYZn8DYMWFwT1BsTnjfvpmfBMps8",
  "key21": "2cedC5DokDYvWUezddYCKUMmobJnLecJX1TLunfu7TDZSKwKcWZHaQKfJRs7gLdiEvT7SRqcg6xB9bDKvF7SKkJR",
  "key22": "4ky5rUp4usY2BzD5HVcvx8m1Py84EaZee7jpMeCPsw8ggyUtqAiEc7Ekfxo2vZvGLP2N3ecw7RjEEVBGgums6NE1",
  "key23": "4TPFEG1qrY9MeHXT4QAFwbZtKhMui1eYYFUaPxbJ5hAkPPeKRhWRJyWu3B2eQqqGRcgZZ9YrqC52EUgXztYKgtpG",
  "key24": "5Q1uj3xyNF3YPZ32tJQsxgDQi78z9Sq42MLCjMugGaV9iV9zoj2c1BujGXAq3ig4Pf2VVKJmDW3PDvEzpF6BUSjd",
  "key25": "2AZKknG6d3xpkajkM4vhs3ZFKgckwdizQGceVJmEVMDPW7aKzPgDSNnThuLFvJpx2MQPZ2jiUTEQgKj3riiwQJdk",
  "key26": "HEd4qpD6WHyV7ekNYreyU7yy6oJM1waKYYJmqGeYJTb8d8kc7p4f7TbbeepEE5DiGLCqqoN5Z4ZdRgEqajBU5BY",
  "key27": "2FsAJqCHWandqkbbsVThU7JmZkahf82Cx91uuXVwtAoiJngKQqDgVsUTSwZGP8z2xUN6yiiSyNZ7TFqTwSSEMGvB",
  "key28": "cyJpqqDwS3La4mL9WLwJi2776bNoLYewvXAdVMXrgLkggArapsioFiraZ2Pdz8hFEeYyNKETzcMf8ezAudqNutM",
  "key29": "2868GT4fPj6cmT26cKaECwxHZ8cjEuR4BEngQWhWQe93fkUKXoatkiZqYXpzjTKuPYeCTx5x9DTUy7gv8kpkwNYE",
  "key30": "5UK8Fjo3y2Cneecrbcyr3T1bduEFi87YndPxyBbGmaLRL6ZrvwBXzB4HHgBFrHRFkixeEmhZ7khMSzzrHkFBeCzz"
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
