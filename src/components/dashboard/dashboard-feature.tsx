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
    "2bogDKMxMpeAE8rUL9zfHuvgTM3DBzCVjBgDPt7CN42R4pDU6yZzdfvACHnNHWWwM7AfGy34GEr5uoFq8Lsv6dGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNEWGtiPotg4Ky6vwS3yoaCvsxzoQb6fm8qzgxUN1zRFXRsMHxxP8uxg1ZJYFheHRQhd4ds7dFuTJVPqxcyC7wn",
  "key1": "2qKhMSCUoXfUPgABz8Gs3yhW2LmK5XYeyUqXCANjRX79AUB6widiaUp7gMRfCMBwtjzDPHeAMSTtDuSWaWTAJYg1",
  "key2": "57FVMwZbkSYuS6983S6rSczr8ophp7fdYEgSBLsDtb9S5VDsMhwaN54w8v6kCRXu4AkqDa2pszr5S5NwgebqQxEa",
  "key3": "5HLTjsyH7yPSrTxw78j2PRHvqoCFnyQhfkgnBVbnwdNQmcNbeCyDXKs7TydkgrKLx4z5YGBH5SB4E5yEADJjGR3N",
  "key4": "5nkVu1neG6XAJGvA9fyD7449ciWpnuRa7iMCUxUhJTAf5AKm6yUtrjHhrF6xupgHXHnnBvY1wyipKbm4qMw3mJVQ",
  "key5": "5yFjM2nVc4eG2iMg6Ax6coZcBQFrWuKL5s1srJYzrmbZRZj32XFWw9cJQ85S8JHeq4TTCPRZLoHHLUPnqx4v8heL",
  "key6": "5zExietSJST1HwYayVzqtQEpYpCyQw4nSDN74L7guGMe5wyD1bdLEJ3wj7A8n2NjYvxcnqjsGCKGT5eNCnizDQ5C",
  "key7": "4Me9o5bkFMwC2x8ddDbtHM4GnSCmZaHSq82cPtvFyULMTiTZBTgsLQzLgWRHTmpMjc6YQkZ9ovBzEhwPjRtziDHS",
  "key8": "5vMHkRgvqRmXHCpx2k7VvfQCj5pK29Kdcp2SzUPP69PVHJVdAwr8CGkzCnvzNMkAqJbPEfLuSGvwTR7rZFq7Qtdw",
  "key9": "49kpaoZdSnf6dLpVqCELUNdeQTrrPp1APK517JFcWKHie5FZrZoWsJ9UEmsT3LToj1wrp8fUnvUY414cs4uebhnU",
  "key10": "4Frzm9aHX9iSXcUxKRnDQhuGZBRzrhgnLsz1oZ7jfmLzLxDAQmvXPnaWLWTMdfCEjQ7y43fBNvZs42K8bvgRqtkj",
  "key11": "2h7frYd9oKBFEkotY1tdJhP9Jdo81hBWaheseCA8gEVkPRmQtNFWc1fUrFznAqSbQZFP8jnEQJ4skeoZTE7GUZK7",
  "key12": "5HYNkZ3ppLoN5j9nhaagzZtUfFD8hQKmmsfcrQKWMgNAgSYmvm94b2ZcPb6i1hQfHnZYJnXyhBbJ7FGjeyhDqsah",
  "key13": "ZLK2pzWcGrzni3pxxuLWVdSVZxNAt8gkeuctKBsjPnGTWbHKqwjzuRb1fijrjpCyY6KKC1PCVMtmhxCWLnVzsry",
  "key14": "2ohAQU5jdbqN1aqc9mYYCXswFyWqbcaN6A1YHHHZSNpnymxsbmWEyJRjgeZ8KBh6qizk61jhWDngeUqXniz8RjWY",
  "key15": "4a5adGzePHtQTufFskRDMm69nzgGWdVtFqpfQGPoR4DACZuhs2WJpNLaozkDzx7zAKhB6HPZPcSnXgCwtcSVbBkj",
  "key16": "Ad7aryCmkhaHUvkPFpFUCsYBYqJwz5t6W8kxVTZey4gRoy2Lpen8gjrtojzcDeFLNkyCGZhLpjuGuBHtgwx4dMh",
  "key17": "5mtKFfLZbuNifbErKj2ftPkup5tThqG1q1N8JQj4hXLsuiw2w8GKkZ9qPtnUAt32w2MB1ATuNSbnqVLpVugBQ8y9",
  "key18": "315nizzzSe6aHFvyiCCkxxdRKk6aQeqQ41CoBcCnmBfU7KrfnqVqvNtQuhHzvwtNBXxVdNtJygjzPw8XknfvrVy",
  "key19": "2XB6jrRrzPHP8SUKtswpxaFeMqXoCAC5T6zpPzeSLKoV67XpaqqQwYTPBjGUGAdf3JaJPVk4YVBk8cduaHtkbckB",
  "key20": "4NMG2JKpQgJ5cn8Wi5GTQuYnKJDvLxx22r6dFiGo3QjTEq48jzL5mQyBuMz8mHjeXvNY54gc9pESxWZDDtWNd1U1",
  "key21": "32iYJoiQtGHboDd9mhwzsCfzCUkHRF3zTfmMWWjDFkBTmNaKCm5A1B58ciTzAtRS58wa3jqCkDwronYtcKpgb1j6",
  "key22": "iCdg3payVqrQ3MYNitNAKP4Qnu33hEs19B3HV93oRxxVQn5odhF3EvgTE6HMLS11hbf5NpbqY8wAM6PJEJUMAwx",
  "key23": "3QfPikgxrXasBTwqhBDM7eQ2bDN9vH3ut6dXF8tJ8exhRFn1L2oWhpYM7MrTGA7fFfsxkmMxdDyDfPv3Kr3ioYsd",
  "key24": "2dsEDSA7aqmDGf7rGEa8aKA13RPwcXBFtE3Gv3LTxtvCT8fnB3U7J2KLUyexVwgoVbcnL4DmGoujSeP2jFqdNcK3",
  "key25": "5QqFaXE8dneN1zEioTrBn8USEE245J6eHyg2E5mJZeNW6owUhYtWg4Mubh1aFcwp4JqXayapsEvBrJSZHrNR7qmt",
  "key26": "3ZP4tdww3WS7i8DDDiZBeuzJDjtBD6v1JgPy2PPPDTEt4JUGqNfnLZU4ZcDmwYAQ2uMARgMCo1CW3nnJVoc476VE",
  "key27": "H7CUvQgsxienscEkcuBDeUwbcPkWGfozWzyC6XiGTpDrDWniRCXUnGVFJKf74d19jj78gKTSbCAkcXvYJ3KZ1FU",
  "key28": "5Fm1vN6KapqbKbo3wd7wtczJKe4eqwfDSRvJEACcwCw5MVgsgUXHZvZ4wok8hbaCjPgu2DPnuDGNzwVkWNSiYVnn"
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
