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
    "3WGEwhyMXHxT57xuJtGyeyU2HHteL7kQD81tzRonHie2ej2vuXH5QECmSQz9C54r5DYSCssYAEWf2upC7YyheBbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gs4yc6WhRePRBAZSApeZTYHH2DqejSDdwAJ3Bhhhbj6EUpveajDYS2jG3hn6rodiSnmmQrQd19UyyAVc7zu8Yki",
  "key1": "5YA69kMvD9sJ7AU5V7tbNT6UWQfqC17Vg33YshweZVF3AUzCTh9pzG7AuuBsCqRG7HUm1dNWFXkSD1X2inUhPLuF",
  "key2": "3nxiYeHMvaQKwmcjs7caVizQzrHSxawQpXFfs4EUMktR2rVZ3PkKvpU1r2368btLLjhZqPP9e9Gd2YhxGfWQiYps",
  "key3": "2Dg4baYaQp6BG7dCTaEX8XPgyVZRQfLEKt3ryMAVBJZzu4utQkCGRorvj4w3dnYftDn3oHLxc2QR2SGVPZqc2v1f",
  "key4": "2CfTTMvvpGELnDywYBSMHwBfsFAUPDSTL8cuDykDJQj4c7ALxchFopsZCgDZAjXqUMF6a3zb3EKrRWRB3FdHNmdj",
  "key5": "31566etggZa3GkLV8dVieHfX3UGByVxF2zrqRU57kb3YdnabmHVYuMBJ6bWB5Asq1qyuv77MmGCGptXyN8GXDyto",
  "key6": "fqnNzjGvCkK1M6Nw3ngUEww1xqerprvTHcffbpZpJeaSuyD5TWJWRAQ4gQVSoLfL9QNVsVJq7kcLBp8e2qHMfuQ",
  "key7": "4KJo1sqN65nuHJmSnNkd2YLvvbnJfXW8LhMkaPcziFDoJJwwSf8JzQGhXjjio1suooLqSskB1knZ1FCCe5cfJ9v2",
  "key8": "5WWc2GNqqs8kzVSBqkkLE6Bpn26UJw7pTK6f44qbrWw5mLJzechqrp6mXzKzBoeHsQcNjqanzceLJN89jkFBwA9z",
  "key9": "4MUMSWTZXGHJK8DMF7o9SSdLb7Z7RhZSQu7kCerqs5JYzXLJLzFWRo31ti6957HR36Hzaey7fk9K8fGkcwPiR66x",
  "key10": "5tg6paMMYN7dztzfjKGibh5H9gendPgShaB8UHZ3xBJheb1NMzpcuqwNFHkcqk1dQEbG2g6nguQSduTekKxtM26D",
  "key11": "5EWkoDkJt9RmTbsSpJJyt5x1fJNWSpJJraKd94cPvfv9oYf7nAPZrwBcK8eRdJ2PnhMiPUdSjvBtvvQWTrsHVmmA",
  "key12": "3mdoufBRdanEmvWZiL7MZhEX2WxhHv1HDBnJeHVMfoeaMKciBpR4MUD9AtJLfyLSNtDjs29wEJTg4px8bsJrPLnr",
  "key13": "Sjx8MFcaKJNM9BQ7tpTnjs4cUsMmdLhnUev5ptxw9mQ2pcm62zJmvo7TS5athNht6pacA3PMyfr7qC84qxrr14u",
  "key14": "4FctTf9FM2uxrVnqT123YQYbTtBMoUJwhcLyemkjUxB2Z18rmYfgsEpqLNbkq4b3LDaXaUQ2A7k3vyVRtTJJN55F",
  "key15": "gJyhL8Bq3U65K8psKACq6YUuU76DT2FHrhHnSfgPnd7bxyHS2xyWEv7fo1Cya2ZAbhaesXE2BpAsqyUEDwmhRe7",
  "key16": "dPXuYYi3ZBNBnVn1y5r2mZstNoK1yg7prXz9QzjaoFJJdPpTDBm8rDhuUBvbMQAHQqVi1PJsRYG14PGpow25aPb",
  "key17": "3FdEy7RBkhKwwSBaCvV4ssDbGVtLoLpf2KsxhG8sJZJwUTpCGhkvZhSSptnxV7ewvV3xX7FgzCKnoHR3u88xmo7Z",
  "key18": "3BbBqdVMa7WSPSSn8C4892FeoL9BgxuQqW7dYTYzfNnmixH5oMW1o2inbV5dxWAUJyF7Bay8vE9EX4TRatDWLUMR",
  "key19": "4zqjbMXCc9dW4W7YPBFWNtdHvNQcNfJt8UE68Ztukwd2hco5hSoiMCKQ2FkQ5WghjU1SWrpXLZoumgVQkUfwCarJ",
  "key20": "4c7D3DbpH16qZysW9pBo1bR4vpSPwpC8DnR7XxLszdQJVfJ88boZCxScwSqcZ17KrwjhJDS2J75K7bD93FXy5ec2",
  "key21": "2Ybdux14vAXKVEPijhpL9tC1xowbHL9yNTxjAuWfFNbiVhLHcbot2QgezrYpo81qTNN6rowMpnkB7iZpXJGrDzye",
  "key22": "3g3H1TuC6fSCnWBhvGzgZwzFxLCVqEesyeWZLuhPh3TmdDqwFrtYtSMNkShDrYPU4Z1YQZqya1hGLx7DYef8dKHF",
  "key23": "3nvpbMH4xiqEGhCdLutJcUFxV8VRMKV8M5rwx7aywNbAijNy4tYUAF7MmR5oou1756oygpZ6bEUcG2tVzWT1SWLg",
  "key24": "4GnQRFaZZWcpA8kfbX7W6LuW8g18a5xmTSeYxZgg81tXffRJBGkYW3P8xzpzxJnJ9XHRix9PbDdpZpAD6bu24g3J",
  "key25": "5iYnwiv9zgxXsqjEBuQ2v5kNLTFLukaSscLoftHbFiqg88x6e4Vi4v5veHk4ffoP3FZ7iTxMTxL5HKcUyabNJFb3",
  "key26": "RSn7bH7kQ3EBDreHyYnwVVxCyKGfx8NAyc3Mhrvfyih7GHnAgHdC9hF3FvwMiHpqod1F5h8GFwt1NFeQtptFtsB",
  "key27": "354s22NTNh2rCbU8Y5x8XNcqEhgGiiRmr2h21bjYDKwELRBjyKCkpWPBaMXnVCRBiMsWfFTxfCvVjfyP9RA7byem",
  "key28": "3ZEydeTBatE2mKGDnsN3UotNBSe2rt3BmVxmH8fLSHJB7zcZwnRGDpGa7rqyE4m9TPvuWm4dSoVZ1xWR5GdSBZeQ"
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
