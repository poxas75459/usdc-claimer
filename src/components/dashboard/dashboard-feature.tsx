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
    "5QL5LPousSkfiDkK8VrHRUERaKRVnxPcaAA56oefrwsq5NwVm7urJAgAbXQotQw7J3TnzZrqyuF5JKVPLnrzrjSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mucpVNvkjyNH2eSPuTDGWH9wMQSWfxNCNLxDZKk8ah1tKNt8UowN8DpXnKRZ3KP3FGenA6Z5WA5dJDZ7k8MLgoN",
  "key1": "2ZD9KvaVk171zxBvPqWfFCcCTjaYk7TNxcFVib7zNosoGJznVPfvvQHtVt38QxWSKpvw11nmeSE9Crv4dGAPuQw8",
  "key2": "38rcqYsSGMEo8vKDXMm3zx3rgUFRusGxuh7MNKvMsFVbwmuQJMEtNYXErMstHtTXVktrivCR4LXPxVjd2bZQCcL6",
  "key3": "qXPsVRBhxVeQkTuNS4bzUBzpwvfNDqkjaEbFi3GGUfuHmwvtUbx5EjhDVmHB14iULuMPyMzS1bJbL8qr8MbSRmW",
  "key4": "5R8BP5peGd93YctfvasAsBmMmKLYHvFgnBf3xUN9eNJK1aJ7HzyG6NxaWRJDaSiXX9ZyJ9BLoneF6vCAdfF7XVFv",
  "key5": "5ERC2iWKAw5nzHBmiUJfxH2qigAS9d8yvnzC9mgh9whPeeUywFhPaAqFwQsuw8cJToHkNc7WMpXHNwu54ti1KFhP",
  "key6": "2k539hXcuboJcRwqvhhqLwVfr3xNKmyEZz3zj5KjNV7K1xnQPfzTwJej75UuXCKi7zsNb7N94Ua7ZtBsPA8aTsTF",
  "key7": "5Rm5i9FNpFfiSFYAjWZp7hZQGY59YCwzH5GPuu5do1UZ2qNk9jpdHMxfXEy8i7k1jQpEWiKbGxQQP9dvYdXxL69T",
  "key8": "yPBsBSkTN71Anuu4pXL3nfsEYcdd2NXWV5ocWZwWGAMSaqpXAVygGRePrgDBxPHzLYeiFJr4ULKt6CEySHd7iTD",
  "key9": "XWCnaySHS2JrTVSTibyjricjXAv1uCTx83Hzgr68ie3XwduPVdTvkasu7WJxzoBncBRmU7krUSBpc3a5KBm3Z1n",
  "key10": "5qwJGVeidiwDvk52ChgFdxGfYzzGbqdHBqpMoNWh56VoKE5nhaCfxmEkFuom6yFuHb99sk2nBZama7ZcqJKiBmbF",
  "key11": "3gsHWto9w3NWZfKkaRSgCYgwpyM2eEQipAWqdfikhThq6q49e1By4R5dkrQYuGbvQMF7JkhFGs9tUxSrGjYfch8",
  "key12": "5cJSJfNN3bCe3jPKi4MWoHxNour4SrDV2TUsjJgrUDV6rBhPdMaoJ9Ynq9ZLjNg4qucifcf1YSmTG8FzU9MucWCu",
  "key13": "4eHT14ZVgrP4ar1orEMH7nYjXonxUN16T8BBKaRUM92nJsw4dtDVEJ8okFxmg7pdW2fMBNTxikxJkuKyqUPmyZSm",
  "key14": "552hGuXF7Xt5yJxewUosAaFmgB5xqsDGVmZHeAwmP5gogxWoViPZkarLqgAx8VBAYZq77eBLQa91kT531nb6QBkB",
  "key15": "3gb6ssQdUnh2igztw4vBL1TRzTDAGWBdQawhj6fxh5vhX2QWrqJaJYivM3dCHtYvwdFusjv3QY2aYSL7YRQMS5Je",
  "key16": "4eACtADoj3knD93cgPBwxFknw2h52jMm4f8CeN2g6szQwJniNgJUwLHez2sM8iofo572gMe5LAfdH5sXDYk3BWTU",
  "key17": "3krdja2u9ka6e2xPk5zXbwPuHjSp3Z7VtjseC4uNSAVwWuRT946eoPqdVTVeVmk6zqp84U7uWDheKja29Xm3mC4m",
  "key18": "3LZQNRfPDTjQdFJfPJTFKAXCMUD9kgHEzbkgXRCY2z6STQriFktaqS2yi3TFd9nMd5L42y1prr9oS2532tU3Q7Zb",
  "key19": "4wLqyauREGAnaCWmiHUkH34nVWXAsAqqZ3p77D3QYv3c7DaHmmK3TzFnFMmUDNkRXMiR5NbNzRtqQKB695xyzb5B",
  "key20": "3AnJfvvtDJjY2he74vCi8cDeMPzVyM2HbpoVzbTM3LtkFZkNoesoCuWA64FqjUXpaPiPQnP9WbQ7xvNkhJJ6dN7G",
  "key21": "5AKrFVDFX4mNNc1SAcR3LCYgxmofB4QvLGABZJXcgPu2mFZRsnBmY56AgZ2k3iEBEzw1YXd62KGfvTY2aEhLXgav",
  "key22": "31U6Hp8ebkhkgd9k8uHSnbPzP8qbRckrwjMuLs8HartTRHiMRyQFKpZnumv2DmvoDuMWpNraxkY8mGKPhBeVvwcT",
  "key23": "mevZnwLtvau7PQGDPNTH8PdNvz4QLoftFu6wTD1wAut8B5ksAQAaogifCo4xWQAXXYvoL9rRZJJHxQ1t8CFaogo",
  "key24": "63F2yEHemZBMPGSCbitk4LfTSrkJzhkBJipJNKoANdLtUW8TiwBQPaajjTSea1xZ3pjbQxHeZUfPtKNAxwkVdYhU",
  "key25": "4tupZ8hmw22mfG9WHQo69QHPfWREeHZgndry5uGpZo8SrafvukzUWm9gLNGMbYVD171C7mmHEvHjo2g3tKyjNK9W",
  "key26": "66GUuLAx2AoEvkqfyTB8pLhin58k4k8dNqhy255WekvvGx22FXq9yYhva2ZEJiCbMBowbMhH7N69HhGUL2x6XVx8",
  "key27": "4EDKydKzigcc5KvTHpgAzAiHASRfcWTvyEzinHGGq6pwRzRmvbKjzytaKN9dSFWcHJ6K67h5pktWnD7md8rErVtR",
  "key28": "3DFJXGVL3ztwWWzYgNrsDSBrV8WW21RUqRJ19yMkFZdygrfc9A1Gb8Q1T9GwDtdW36xRAw3s8A6DwuK5sVkbUGo7",
  "key29": "3wuXW7zkSmaFEb6Tf3pmfsjiWPTqa2hjhVLnSE7UJQ4uGXC4vaLBoh1ywabBnnGpZWDkjkAZFhECaB83bffzW1x9",
  "key30": "2opC5DZ29Kc9Cw5tsT86yqPWtpf9F8cynPWoYvhivEVrnXfEhdPLiLzCaUmN7scYFAyeCQ1Gonq5Aj8XVrdG46FH",
  "key31": "59v3YAWJRqQM9KPWoDbCTJ4pguwmWRqL2wE5W1CzXME5F2dpccBmJTrkL5CN7HfWzGhTkyyff61XhsBAjLa47ZGH",
  "key32": "3NWRNFZaxgNqxKuBd3tSUVeYitDFeQ3vRVJmvezrBbDDqSGNJJyFzafKF5FGkdysN4trPz4gwwWNJ5MhftRuEQvw",
  "key33": "3XsVgQqv9ccHuFABfdbg7VXo74jYn6LAYeVij53VUsLJptvYHcgNu6hg61z2B1GxjXU8iy8hKRYpTVvkzq6JRFuU",
  "key34": "3F4ScNkFGrW4MQvic2C6HLkWSMG8Yj1xKd8v9BjV4bYhSBN28HisjDzK8DNWKQVYzR45AUUNQfUAWkmgMPFEC7Vf",
  "key35": "4WTLkW9TvhA4yLQXDoL3EJmAqvDg9GUxijw8gXyejJdZy4mjSiBnArDgn4EbdVAgejLWWnwGSUxh5XSdPr8VScWn",
  "key36": "5X6Cd3WbXSFGgpX9dxHYLgbBRkofXC7KDqtHQ2GgvNbiBNKCHMsBTXVoFeuXUqBTjLxorEKaD9wEetUXrrMvAThQ"
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
