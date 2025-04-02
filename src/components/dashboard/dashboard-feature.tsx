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
    "WJNYaJjb2ZUCMDh3V1UFRP8rJtrk3XfmgjhtY9MCdJcqq47smyyS8NJEDMiAKfz9koARV8yHTE4ssS8CdgFzSUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfepmcs8pfkTMnXohsQxCH5Vr9yZfTRqZyA4iL9rs4HhCUsbDoXzxCeo7sormun2yiWsQAKKivTEW2UcdwNpxGP",
  "key1": "259JB7cUQ9tS1b6QcmBTP1LfMPyBhMroM6aKWo7H7fUM5KpSxqEfgUe5jKq615hddF2TefkjjoXzLFEfJBXoDyRa",
  "key2": "2SxTgkrM2Nzo71yt7ma4s5HrHZnEieWr2K7Jh4asHrx2tBqUwAQQ34K7BL8xEzJhkEx5jZq3PHrxWPJsQoDTPrcP",
  "key3": "5rDsXgihJv4hWgRcngDzSrvwSW2SEwTRTvtSuFukrQZN7ruvEufe47b3wAHVKcqfr56fgq8Gy2W8G6cJxgc8yN1r",
  "key4": "5TH6HgAv36hZdmHiZtVxqdgocXSjYsBzLWyKdDtm6U8CZW5K1EEtUHMKS2cDtQv7FtTFsgjW4CcRr4YQiTopup3W",
  "key5": "yxps5jPyCJLP2j9jeEwxM3wqrR6YnhTpzLqRS7voFmjoRfnsz52CYq2mFRg5GhTh554uvapHPU6ttQsW4krZK8u",
  "key6": "3nDpEauidDNr3G6m4D5mH9eNiJkvrU1cHqwKtfXGiBU5UYS89X3CupB84Mm8gaYwUHfXysRvESccDAD4ayDGSdbY",
  "key7": "4SBLkXzqnU9nKosnC86qKjhRy8RL7kUURzqaAH4C8iLz7FnMtAiQARTfWb5Hd7Y2dwVYhUNb5JNAPN87w7Q5eL7R",
  "key8": "A8iBTGbpvuhRFVV1G1q5cTeDKDzkwu4znd87v5VETbUGEEbt3bDsLGw11wmuLGmYuXYhHVWQbFYijYeRLXhTmcT",
  "key9": "59d7XGg7LqHRgLYo362TuSqBwSUkQ6VaBKkBC8AxadRtFFebtkdpaXgiWWJoHGwGzQRyanVZGZYK36QMjXWqMAVX",
  "key10": "2X6t7DgPpXkQ3z3M7DuCS8porSj8ShFenXoJS4cmh7N5SJPdjMX4nNeyY1GAw2yiXca6n5vRLh7JvgRYNMKzxWWu",
  "key11": "5qPTzeCuXcdBvzkk5GxeXK5W4zhAkfeJHCPj44gKKWe4mxHEdAib6oZVPw1LQqh9sy2SoNWTqjEzJRsX6dnLjyt1",
  "key12": "2UWEF2X9tTL6peCAzWNbfD7Mgv6gfJEJuBPiM8CfZoepbLEpCLmcfFKik1QtSFfsCFEcqQRZc2g3WhUoGgmVM7TU",
  "key13": "2C2rdSTkK9hEVe3PZ8DsZKpnNiP73rHBUCMQRDB8XrP3Lm4oizkFocNd5sYrTxQqmmF8XG6TGGmGv5cgN6AvfUjR",
  "key14": "4NYnxHcpNuce297o4a8NUdqARTitcBU4HdqBX9AKK9JiPFs2JefPKxRd1eiTnCLzE6SR3VSvVoCnYRUVbiA9FTmR",
  "key15": "A7DUv1g7hLDNtJEMtrw78XiucoPxxHpPWABuHRJuQtt4rpKdh85cKtd2VntbEHk6W9WXMkrU3BA2gRawCY88MCT",
  "key16": "3uQx5xyZbuuxYTCqWDrquiLM8utkGenbotwd7hipQ41hB6AZZmBnxT9PshB2aUa7AUmbdUpAZrMtHzzMhrvzzQxu",
  "key17": "3RQy5ptJBmwY5PPzVEMfzdaRddRT3NcccAmVLf2YDS9ZmaUXFUkEQtfVfQLGDLYLyCY9otkT4zY1AGh1jB6cE5Kx",
  "key18": "4zFabhSofAYotPdzKYYRA93UnK29RuNFdL5G9EJPN7CrAyVwPXDxnK89SGirLMv8fTq6xGzYsttg5CVfyydnc3FZ",
  "key19": "5j5vGw4HmH9HHx9cr6WqkbVc81atCyFJNpriKXPsKwGhEwFudhU1oERvjjZsD4qj12f2C8iSnRTMZ1P3EjFRp1JA",
  "key20": "5pR6HQYRDuvM8DbxbYivS66bXw3jSQDbJrbVKpTs4TducmDawDBHTMXiZJibBhckmkzUm4bDD7gJ8FVEimQppUN6",
  "key21": "5U3McoSRCMrVJDMUMj6Di8dYQ8jihoKvd9bPi3DebcVDXu8RLSPzGqRHXMAWAihG9bvP77h1tGXLvh26KGosvv1K",
  "key22": "37qfjNkmLpBVSGoiMEAiVMWeXaC71j6oKQU6XowcMqzNcPdCPmjsHGdVGvmts5uB8Y9pZ3v61gjz4ToG8qbcFLMc",
  "key23": "HoKwwfknGePvTryeuDTJvjVsQ6i4UTekEFiScCXVXefbhV2L1UjDZa9naaa6LUHsUJVtd2R4gUM59p1ivtMzGHV",
  "key24": "5Wzv3xZE37y59EAE9CNHWhYTaFSgnZ4v5s6z6ugcJszCenLrSs3H41iPyqyzpX72PAqLdpzPAu6VbSx8PjYwXcdp",
  "key25": "4pCME2A3khsBmXcbbBkTfKgwZiyNyp5fMXYFGqJK2FpbYgubx5HqDdT4ePSpopAiMyGJ4P1rVVnDDCWTxpsNHDC1",
  "key26": "2BP3e5WdbHgmeN9DxrwcJw9GZ8cb5XRsU1BRovqCRKqzYUtMLcja9UUUj5WgH7GgH4Xa8cuBEdtEQ7mvUS5W2hhV"
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
