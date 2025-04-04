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
    "4bNGjL1Gsbhx9mC9yQMqH3crqhDYSHwPStFcpP4qgWVFcUFjaNaHKABKDYqViCh7m4FbJfMDDAT1th9XoK4CWDS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5csxA3E97kdwtmBF79aHdCu7eeWWfRoB3RTRZrGJKytEptjGn8KJxH3w4hkGaLtuQLm4NiUYt6CkaMDQ9WUaf9gw",
  "key1": "L4MkfVt9amQ1fJEXxiaZDVMMUUFV4heeQz1zhuujNnCutmFpwef2Gy79mbKabFnD7hWp9Ryjf57DjeRq2brYQhM",
  "key2": "tVNBK4SMBULnMRLrdYrmriMfa4offmciN4pMUdG7byzNZoTT8P7ghWnmBAwZHcZH3hBJgePQqvztMFxVZzfN3zV",
  "key3": "3njZXJWHGCNW4BphapKB8VcSz6wZrpmXBwHGUzvwFwDSMhE8SBT95C8iKh6KLeNGsoqzToNfQnjL6C1wmCuTjpLL",
  "key4": "4bXymgchpF2TfqTWKVATbyiDVGU5oLprvZYdQkRjWoFdtGyG9X5ph6fd2NdB6gsTnE5kU16tZrHgy8ug5aeKABNo",
  "key5": "4AFCvAnciTkq8RiFR5NmBMdVtZ45TTPmbY6MEdv2Sp8omeEKacYET7AJa58Fq3zhJWwB8f82eavEJU6hSuqyrVcy",
  "key6": "3VaRCmaTwcJnPsuL2xPCmYuSBuKuwJuR5nBUTxv2PvtVzmA5rnDLA698MT4xDAxZJSCHajStn63yeYGiBPZDscQ5",
  "key7": "5dvKJVANd9MeUfuaHG7LjBT1G6A6UrzXBzAeyKETnxaUkGEYDy67HvDVWbpP6QCixYNo9sQ2dQWmEiPDG32uwXe5",
  "key8": "5ts8UaX1kof9AbE8AQ8cfkytZu2rhDridSqFAab1J6gnFELfWxLKqNMhcbdTtPDAXpU8m6vnyug2Sg1u3C8RocFS",
  "key9": "3RmrH6Hr7iMFhpXHLQezuUtbsVHTdWyPrXXrsoZjiWcZGTs2XzphMsCSNRPRdo2PLaVMZAMHq3s34BWoCBxABEET",
  "key10": "2JbuE5G2fbfDv4mbhXdfWYsr6WXvmDiZtwpCAUWUa7ddGy3Q98nV3hEUZiLhEUR5QAvV8spe4J8QKvHNX6Xr1UbA",
  "key11": "2XQKm4SLCtZyxBEFEbqzdmB3CshpnBWhRq2DEA4u6NdZFU6HrnL9nrZqZod7pUKee97FqSZWWWppwUH5rVEonoJK",
  "key12": "sdmFsFyrjm1JgZVkScJ9SxD8CNB9s68DkHzaeDCqaWoXKAHWWT8BdXmPpvtyYKm6deAvP4ZqJDU8SLhF7LF3rEg",
  "key13": "2b3fTpvBpryTEXoZgF9mBWxoPbqm9b5Y9t14fVohYhGzB5xExbwAyFzvpgvRbeVfabEKiwqg6QpUG6b5UKDvhCrt",
  "key14": "4GqFLycTUYU3S3JH2YrJ4hJaRn4KT3tknkPWQjYS15p6BhEDQMYL8u9NPvG6HrtYqLXihLymcop6yeirfgDRUMxq",
  "key15": "4cvaEfpf6nTDuKVBhhG9bF6urxyMtSMEpPTSBCn8gtajbB7E5CbBpEZ78ac2m9JwMZnSu1K7bqDm3ZjjmPDY3hE1",
  "key16": "WiDxiP5rsj77vma9G6P8HURrZRZudnzH5Jd74d8xkZJH91JTGqo21wQL1qXF7KTTGvScLiQDU8QVVTweHKNDFLy",
  "key17": "3KMHN3C1muWeX9UqxDr6KwqHsbMy9DwkY2uoJWEmQMfj2VoHWfq8anvzAW8tpkg8fJoNhGc82CckRTR5HmijZwgy",
  "key18": "z538JTanmNFkTYB7EE8Jf51FFq7RdQh68ST5hPAJ4yXarhVJ8Qy5Lsan6mWktosN2pzCwqYs48JewFFWRwws5N9",
  "key19": "wL8tFf4TX4PK7sbQ5rNWRBtPL6QnxUQtCof7VnvVRxiDsUgw1yGX1EEh4sDzH24h7pc57nZXGF3YmYTS2NqJtV5",
  "key20": "4dG96RHZyL9952hCA2PSk6A4fWnfKMUzrt5ENUpjxdnn7167FQn6SG3yLcKLug96wHpuXCSfycZ7odgJK7BBCdD6",
  "key21": "122bJ7Q1TxukYNYBtDKXwi6s5znYdZnz6zxbRDMuxAHdm8grLeC3Azgj8YhnRinzds5Y3b8rhsYpEAKrW2q9Nu4o",
  "key22": "2W7k5Mig1C2cpKCPutcCr6n1aPQrdH1J6TKagT4yWKhwUfzuB1jKN9V1Ayjmt5zS19RfX4nGF19R6iCT1aNv7szB",
  "key23": "4FQxFsr1MYbMLJKeKW7Z1NHTyJi4PivzxMK7t9uJAb1D5kwWtT4qLqgvRRJj9m7kgBYRwSzXg3KhRQLi38LPSJaR",
  "key24": "5ejahFoKwcVZqh6RtieKqNsXseWPHihuv7V193vrtvhjK2zBZynzxGVLnGwgy2UiLg2JJiEmDaXHhhxCz9WmCyk1",
  "key25": "WsqVKwz7fXTM2KQcXgizkVhdRpeQ278UKLkB6NxpQscZh4hpW1fQqrfdC7zuXyygZWG6BjzDEkc53hHhHTFu6xE",
  "key26": "3RJz6uXsDXiaFVh1eB92pxMxwq3AhJraXtx3ztkUZJxNhuTG9rcKmFEevsCuWuEzerQ3AtAgrMd6aNET7wSuVDZ5",
  "key27": "2YW3L8RNDFNZSsfWMYcLoxjceU8jRHmgFw9HjTjcpWL8fwT4rfRtKn7XFGQ9MmHhskGf3dELZERsiGymBZXsDpxZ",
  "key28": "4Qx2LatooVGAq8Htg4wGjFxRobVTxdj3By5UdYUiUBrDvYiJ3exbw6mrxSMWfjmtfy1iPvS44s6uD2Djbe9X1DUM",
  "key29": "45mA6gXfRzySG1Mg1Seb56EA7rd69aaDt2GoZ47ipQvYSvBajEswp5PHtc9JW8oiW58p8uTuj8CMxrRAFtY6igCp",
  "key30": "2AK9pECxjDiyaTJKQubmJumHK9iQHevFNuQjuaiqDX3MtzWoLnF4G4y6KfbANxiw7UJ3rbUQmv1P8yvu1VJWjy99",
  "key31": "3Dw2bmdw628vU5WY13VbER7axzQU2VSCoNCczwGbGWEfK8ivNvpy732hPNKtt1UBhyQ3vwJ6cEL1quLmu4uVnwXR"
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
