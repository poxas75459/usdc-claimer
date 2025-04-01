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
    "33882KfUvpsZLu8C3ZKc7HbBqQjjG3avMKtN6zHjdg6aUGZnUetuSUy9QE54kofNxwLXaQpaY8QmoVrU3dxcsZ7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "319usSvTopM1nJ2wiBbzrFwhzuR6iNuYz6y7fseZZnGMGBxL7XFZ86GTL51JDE65cVUaCaJSfDntKvdyPMNpFrK",
  "key1": "4wXgFRj1hXFstt3yCxj4goNFUjbUb9ZdbhRnpdDhPT777qT62VDu2M3xsfqykhYsh1zbX1CeFQH32tgCnr3BCFWf",
  "key2": "29HBpftsonDHi9SfPCS6DxsXbQLDy8TVvnkVcdDa5tuZQJ36SD5NWtgFC6dnfm1jPmupZqKru9oKHGAFhJdNjHWC",
  "key3": "5hKLBtcfRGhM6gJ5AQ7wPRkpaiyQ1uGqkt9qZVzt49XRsSdGvn7hX6PriYUVw5K4yHA1qCnNPHggawNwaRMpDASp",
  "key4": "4ysLcKS8sN2rPmZjLyf6sF1Cq7e9Zdwgu5mUUaQLoRLJ62JZEjszXXgUWbYY5RA2sjaBaD6nLCGHyHHnmU3EBzCs",
  "key5": "5GmyL412iiQGDxJA1h8JUJ8vYabEM7qQjVoDft4bzEABqjwr7gVhAgb5EWgHFnBqy3R5ov2XRgFVTvDb7K1j6kbC",
  "key6": "3aywuYuFJUMnZ9qtow6TaJy9FfYA61iyLEeNWkXSQqA7wKuhhNqXjxxQZaNjapWU7D3uFGmm3AJNAxyEVxkUZxU3",
  "key7": "5YaGJugJkqqSZWhaZhaj6h9uchSUbnwZ43TmPCrWosFfrqEjDybMk6As3KGquoN8zAkPHMpVUFF5DBF7u4BcL3k5",
  "key8": "2STrdcqpf753Gtyqo7WJ29CpHuNxBbBAMmHA4Y7tMYz4hMLPjVF6FGj9UoqXnhvnjVVAwciv9qeiUqv4faJHBFN",
  "key9": "vzrPgY7DV3GhNfG2GrYH6wGA7tXQre7AFKDXgaFGmAN5aHbqMqTNcXnAbtMJuwDdXY58ZLHFTdWgxzfndDhmF1U",
  "key10": "66eUs7RX8t8MkFjv2xs3dVv3xMEC42vCwfRWZrPsWnX7cPt9BQxbBhbb4Btvc44F3XfqGj4csCsU9J9nxewxp1Wd",
  "key11": "5PduKHGgQXjw3GD34cEWnQuupjibpaLvpduvEUYZYJJ8TgQMsjzdzxpvmpsAFjHfYRcjSvcCUjTxSku58Lagmy3S",
  "key12": "d58YaR4HzQGrXfq78MVPMiLYSwFUxtL5iPX7okheLhWE6Z6AwTr9TWAn9rsH6zRe9RxyhD1pUcVxZoBXGQ5KvNY",
  "key13": "3p8Sj4as4UHqTrdkqJAJ7B8Gee537aDkpwAZsyrenuqB5bS5DziLW3t8G28PYy7A4ikpnf9ZterogyabYu4gdzFQ",
  "key14": "5N3LxSStiBpDtbYDp3sZVN9VQrfqmptJEmdkikuQf4WXmvXC9fDWPZVCC6dd97Musfkd9sPuJJ9dByZgRMZzXTcS",
  "key15": "uekLEsF7zT9pXS2JABqijFiuMZUDC1Aimok1mNdJk43cD51ZcLdjYotvhJCVRGD1gR68VUPpheGTMkg4Mx4cFvF",
  "key16": "5wxKLcBDmzogTwMZB5HsxnJe57GvW99x9yXX8pqsoJ4xqJrDHeFnG1YWGwzvQPZeL7NkRjpvB3dxEht68SgzQGTt",
  "key17": "4aikYuxW1rqmRjAeWU1tTyzxajreYdKWBveUyB9JfZ8gzm4PtvfPwrVBB6bPjCNtEYRKofHxT51UHwDuSwfTeLDm",
  "key18": "2nsFjLNSEqbbxh2ZxbJ68JkyoYVLz2s6efd8rZdzxPG7zXNVCJ2fwYwBRysmJutrB1bWqowqNHoknemTbVwUfwH2",
  "key19": "7hdtVGL8Ksmfw6zi9kSosf3RYG4JJFhi8VM2VJuHYZyLAuUkZZGmxCxcTpRjE7eVvhzfH8TCY6kCqoUvvVmPiop",
  "key20": "4X3t99Nu9XC69VrViqy59vEpcufyMBmuz6uMkHhx7AZrmSjuFvcd2E64YbHTGET1LzuQ92W9ndPuzAHupJgf86h2",
  "key21": "4zsgTKR9tZBEwmgVZMLsWyovoBJiKRgdBtkXLh656nxe8kx4Q98YR5kiePZo9YuPJdNHu5dVTq454e1B1z5zJcyd",
  "key22": "uRWkeas41D78i5xUPfSLukP5sURMa9ksE1sZ6Pb6Zb6QPMySnFUKFzEg3DvDHEfkwaVW3bw3mEEac8HfSZe3wU9",
  "key23": "M5hpmMyNh7Sox441AL5xNk4P2dCdpMVBHuYXaNsFVicox6LpqCpabGV6G8EgUP1XZaAfpt98tX6Q1msPyAV3xNk",
  "key24": "3ThBoiX4Ne8pVgdbUEvJ8Ded9oGpioV6X828cJQTD4f1f9MDFzdwHQwPYLRJ5Xwr1f6jA6tnijuD4jy762ZTSSx1",
  "key25": "4xJzSa4catSr3GAzq164JcT5aD5tByqtbmTMXynATAtBXTVDScHtXwpGzm8ZTbSE7arB2iYF62MHXbMLLw6F4xSF",
  "key26": "iyPtqccEJ5XRP9ja7WgE2ndJyoarWRy1YticN7RBgXvfZM74yAbHAS2LTZQ2vm2vzVLqKkiyHz1aXQG65RC6YKL",
  "key27": "48u8En3rcX8CVzSMW6GbMHhjGKHKS5vat1JwwApoXJfGc3fNJpNU1piKFjiiGmHd1ysjtbFGErxKb9uRXtddfZmj",
  "key28": "58E6fDrRhnZb8QJg4hqqHnGJrz1KEAH7iE2ES2hgVmi9uwsNFWbFeiPvyj9SBXPXiBNgbAvtvg4VwwtWYGy5n2Ut"
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
