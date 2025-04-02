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
    "32ZL8oP7od1W7ra6eqbXDujFjwQG1X7TgN7YFqkbBnpaHCtTx7A6bjH4ZMww4QYEwfRvuXBmfSYe9yA71auf2AtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sPpiQV3UX6EoqiReLDGwSTTve7LZHUpUkWUxDtGVuxqr2FwJHTWXvaMMaKZCif96JASzXLk5fETQuH8BGsic23Y",
  "key1": "aq6BQra8s2DfQrSxdRm7ZgGpkSJfNbt5NvXC2B3uLFbMu5pieTUFXC7wHiTEy6Gsr8zPrXpnhHCdgujsEUB8QRK",
  "key2": "43eVjR3SCyNqv9egrkExGoqNbiYWzM8miwEAcCFYtCYE6FjFLNniRK8nzWaV3GgiPyZBiMM499C4FKoCHwcxXQN7",
  "key3": "2ckey9NEcP5UDjY8cWSbB7NDCCei9NF79gAfv2HA9CwVPN9B3rd4TrKQyy8Fk5YqzzdMK82XdXjvWoXVCUjmthZz",
  "key4": "5RWCSsvqapPrgXSP8CUUAbXRvDBn96HNegCfJDU83U2Kayu8pTptGNhoboMD7nvv47iJVD2Fu5WUgTchqzbVhwuX",
  "key5": "5sN5zLdJ7Lv1gh3oJcoRnDPofSXZMAdpHEaiTf4fP1oBhEtruMwjqUbGuqRXj6D3wa1yKm1jL7QvURUWosunAYYn",
  "key6": "2NEBRN3oToxnhG82wWXsrBB7APFtRmTk3L7rxpxRFEWvjZizYZixxXeNPrgTPH1fZDsjZCsFDAq79K6jgAT3Fvv6",
  "key7": "4nnbfNacohvX1jBj823MtxJWSLnkDNPMCQpuAMvRnM3soEFVzLPeuzTjivLQgnwJvLSYcpvZe1EdaP9ngrZCqLoK",
  "key8": "3CcaCKCb9ReoFQifwxPBcn7qWrGCeGSUMqdne9xbsVPhTd9n6WwwWfy4qTBPny3hisAZHmFTF9sRkHsd2iFpMQTP",
  "key9": "5WGFWhUTeKxujDu4miVhxBP56wUupWhKkCXLmGjCNrNzH9p4HH65nDXccBaV1vCMK7VVNCPsk2JiaeKRZ6HHxz4X",
  "key10": "5tsm5RE7Y9qqEd8uHqBTZoqdeva2g5grHFqAD4tziUWoxHRgEG7yHeopknw96QDAQubgUgqJBZGyEXGdMd9bx2Ep",
  "key11": "qom8KcWQy9UFJmy9W7jpKWKBi3LyBQE1ugwEBJbXppStCq5UgTqo54uZoGNjYgM9m2nFZ85kZyV7xCV2Esc865d",
  "key12": "2F1oDFCXBtx2UGMNy3mMZ4ZHoyXyKonPNbAw7mWp2hvp55HTbbsf3pRE2jsBqPdtNJMfuFM9JY7riBhdG7xNwoc5",
  "key13": "2nPmqizjrujj9QPKzbSpheqRa95tYrrMTCefhwS9qgwoAHFMdE7kDMdtAHnPWctabUgxFtJgsTf8ebGx7hCKjG5f",
  "key14": "2eYYfrwXPVa7b4feAPM4wV1bNZQJQxVC2HTc1BWz6FHQ6t7cHY6ym7QRwL94R5A69cNVzpDuY9dFFGR8AkZfgNtZ",
  "key15": "3vTJ9KHFkotDiDJS5xAnKA1ddmD9LYAP9tuv3TvVtNoiDVNVabkXevuBDJuDAgeu65w2czHdTWdiJ2v7UeZFG8dm",
  "key16": "3ZPZM7udU9gCVjijUeAs2ChwaZLus7sHFJZ4qtkQ1U3m1wPDKSPcLK6CDvnz6FP52wx6PRNQmL5QE8LpEKjJTXLc",
  "key17": "4H1jkdUbWAvCDgsifXFDXsAZPb6zkckfHoN4191X76xukNwY2dBhn3mfzfhVEDaj88myU8HR8QR5HkGspwjSTPgS",
  "key18": "2Eko1zEni31zexSSqLxTiEaF4xM2taKC9waEp3ZXM8h3t5RcT2GY9qrkvj3yJjJa4ScxCpMFqwSaVc1NMuLXWm58",
  "key19": "36g2RZhBm3QSc84SoHNru7vBmmdQReDqQLiurLtAA2m8WcnL82qadiQMeRTq3hhdvCWyPGKNaFq7y1sN4znpwjH9",
  "key20": "3X7G4ckjm8c1XdWcwCWxknYxA1FjRz1VHhVvSYePEGupAnbhrBJUz1hQkRwsCRBoz6jctcve7WWugzqvmhBaGyEf",
  "key21": "2SeRkTZuNFXHHsaQkFDBQox1Lri3zYDNw3jfFWdkZduSXuWg88Adfgszm4bpndRweeeoCECrAaE7ewNWXNZuRAfq",
  "key22": "FgstrPyRTZDXF2rq2KJRr2LzTDmEhsHg7tkWjXmi5HaQdc7o9yVxvaRSHKss5YBNrLyArAnQWRf61ANmHpsDd5D",
  "key23": "36LcobGW4g9MR47uJBVbNUVxDyzDNDe9eLNFsWqSXCFDom1MK2bgNs8ULfGFCK2B8HNgmwmmQeiDDatyKXQwYNrL",
  "key24": "2JdZh6maLz5ERwrL37EkFHjcQxaAQY1nHca3FgMAAwBx1z44GrsoeBD5zQzxhaqZH3xSba2hmKhVvmZ1c9NFgyxr",
  "key25": "5xKSc3CqsuniTgYMVA4ASEmPzEE9aQm5JCKeQzUtaPYDLn8HM8Rc1BuW7oJPWzrmCeRr9EoRqQqFZ96GpgFxmS5s",
  "key26": "3SQ1jLxCkpTnLMTN2iaKvtDvThn3oCksMtQfqCBEfNeTNP3RhWioVP17t8WC5D3pm6GUVNymUASBtWNzaxNcoQsh",
  "key27": "CWDGhnTx5gbAVnax5gF1jiBJNNiJ1yPSSochfvUwtUXGgufT6JZJKMk12SmrrKC6gDGK7Mc9UQ7sVgdiaEZHL3t",
  "key28": "27oi8tGkLbgZDcWE1dGNsyXHqZKA6WdXW3AxGuZZU4EdBUXQHepmf2rQLdHpi5gHruS9FBjQFzifxqDNsMywQJEt",
  "key29": "5otECLXeWrmb529sRseGSbAsdTR5m1aTtLp9ciQAraLG4YXmr6sWVq83ihDEr5ZU7mZbboT1LbFUn85DUzhe4ZD7",
  "key30": "hagJEBboyaDuV71YPV3zPGRwnaFMSo6GYmDVTXvvBnVKCbTsiV42hkcdxBud5wCHZWQp5ug1uabcRwMXNZ4wYXH",
  "key31": "K7dBYJ8M1mokeK8mYBYgRnBZ6zdNbUq6D7BFEQkutjv6DPKMVs38nL2TeQp8YL12Bop5B7eKU4NGThkxR7ydkAE",
  "key32": "4p7eGKguBdupZxtX3suKLt5SR6DgXEWYxBnrVyBnhzC9hpUW9PtDm3vRR3pwjkh8SWN4G5ZpkTZFDUygrrqYJxJB"
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
