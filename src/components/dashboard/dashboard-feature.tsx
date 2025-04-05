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
    "4RkK96bojbEPeRgn9JLJkxeRAyA9cnDz6zEsaindfnwiDGSzUTd66dnDJf2fa6GjoiNNZhLwcHf4jCBHfFZi8tWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1LzefBu8wxJMBNiC5LYgVH3zbBWUvaP1y7wC4W8G91ieMFNeS9uJphfCaWngwPnTd8hS1VVb8iKh39x6uVCcPF",
  "key1": "3fswYYHeZry9QRLXHr9AQuzU4jscP6nwb8xcvvwug4y5yN5mxdgqaLBmuPqz5dKRFyp2hmnG6SHbJwH2QVZJrMwb",
  "key2": "4y3GtH8mFeeMWqUhNFo5pZ4UE4kMxXTUnAVRmLmNuBLqADyzMwaERMpNNrPhPPJeSodrU2hkqXEZCthxhSWx6Wf3",
  "key3": "57Z6eMU8XvqEcZayxVtte7EHRy4nwvUvB63MUePYaLiTjUKNYrHcpfq3Vjke9cjhgJ2qk9nfWbQA9foHWuYfpJSW",
  "key4": "AZgU8ZntU582nEJnquz5i2euW7ghYvdon8Ddsf3uYECiTaDA5eG7aUvopuakGNveSSBUY6vjJfg48xvm615NkPv",
  "key5": "4SVHPn8fE1rZGw8R3gfKNrGR7pogiEBA7AS7BMWTzmjDk6BYSJiBT3q78wMftQrvHDTxwhZAcqLyCqXCUQ5j23pg",
  "key6": "3q3h3Bv66WCA67qneS23arwubJnnWm42v8AQGg5hnu7JgdVEtdfUShZJa3YsHAbjfHNSx5fxL68V3m7AnwTvxaTo",
  "key7": "2iwddYuUVN7hN7JDrufmPnk8AwZCkrMeaZKgDAexQd9r82mqaunRG3ekb3FSzG6gDz8shd1yadGP6R18SdzXPZ1n",
  "key8": "LxhZq4c9AzEfrmPdkS5CRzDTQndsK3DuJa8LeDaKLTEq7KdTnZNcqxGX63fHbSpYUEcN8rwsZjYxozyAZv3USpb",
  "key9": "2L28XeBE6CBd52UX1FYDg85XTq5moSPzhoaMArHgBY7E9UYg7gHdn6USM9ATg1UefYnE4o7A6P2CCNyC7WJd7NTt",
  "key10": "3b4m9R7pgCHrhi5i9Gs7L5MibjH47cnwMjuSZJ9vZmqmzf7pmSV3kie2x6smM4NWavumkqPZ3Wk9k3TWvxjhmjJw",
  "key11": "ohpJ4sL8PtG5WRiBKx4vYbj5oh2h6BHNHjabi3gkft93a8tMKioWkhUGHcMT6fqtW1D2691k1Ujn6tVrMsD7GW1",
  "key12": "43puYp7vvAqyJPjaHPecQsHDtTP3GGqf1oxfq19cYggQQEX1NErBThatfiPCxbg5XTfKs7F13paygShjEqV5pBhA",
  "key13": "1qvv86fXZXjqb7tmZxWNmv3qBbJagjemHqG1EcQGEKGgKUnUUYQvDQ2bZUgxauQY3ZXGLT2sd3QxtbPc6jFu7bp",
  "key14": "2GPEPBa4VEvzyMemCQy12DDUmDZNSNvjUHHCcogX54G7AT9Hs6b4KcFzetfjK5j2zxcAKGi6ieanHPQaQ6L7Zt2R",
  "key15": "4iaLyvpqoAGAz7mNspcVmtZfsDDkNP5zZTXABT6cjrnvdQoq44vrs6K64UR1qp4aadj1P9JLfXCrUNAwrwGQpkry",
  "key16": "5QGCkZqJd7z7LizKsMPVh6YoyYZ3eGiwXaYYph1ii1ZH8zXaR5kCdftMK5C4ny7SE4tQZ6nZM5iA7y5n5oifVAEX",
  "key17": "4UVradnFQVGPqXE8Ps1CaH9YT1S2Bm2CZX3b7dJU9iTfvuZfXc6H2C7f65drft9Jw9NAZRoEeeDEqcjFvVpRoZik",
  "key18": "2upj1Eiy4oSeNG4qb36x2UpMGPCNemzhitkfk8zPzHKDxjRcSUhyajMuEmLFPkQ4va7go5LhV9bTiSNEnkK6zgb6",
  "key19": "5Q4b6K3ketBzTqeG441a39FhpDzhezud6b3nWq35sJj6E4hGJJqnDWcNCJXYqcaZScr2yQBGH2Dvc5C4UFrpByRy",
  "key20": "5xyKGP7MLgnPSKfued78VYUCuALKg6EfHcjgZ5gyT3myUQCENbSGc2qozKkQvRVe8ouVpU7RXiCL1chmGkXp53th",
  "key21": "3VdtTrmygZ5qLB3deMXVKs6MmbGhAhMgELBGDHGggegAz1Y7Bgdwm6wzYnBmUdpQub8u9bjFPb6k96RiKX2agjmY",
  "key22": "3SDdrHj2HGgL6QwWnGND9sdDzLzuXCLbELpumcHi9NEn5BLQ59GYjGfwqjiGX4DYqC92J4DnmwMoe69vD8MkxLgj",
  "key23": "2VtKibkdnaZe8GSECTofs1dLB9nixZA9hn28PDS1wuCp9g27D31dm4nRvaBt2GvUPByjwp9WXFJj3vS7crd2Ecpm",
  "key24": "3qN7GqkbJ62fFavdTPgsBjSb3qEsoie3neeTNpZfmBxqAb4X8re6koKQg746SHX3AyV9AgKR4ANReCnsgdRb9418",
  "key25": "2juES6ZHt9nQrRSTgBtjzWr4iyyDXdaJdtbVGuM3NQR2kQZGnFwgGweTkPeU6CX4Yn5yMNBBnqmasDLcR6EKiGDU"
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
