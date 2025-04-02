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
    "mJuhxqfMzKxJQWCQzKVoo7wvNSRnMYiPxifg1t2gBv5D29Vbz7rqp1NQuh9K4KRv7sQfwbbpd9uhXd53PSWWSnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fCUa6bdThq8Vva6EaywLAZjL8ie1rZRbCzQbBSzzwfZvWUCyQwPB6mEVXRkSgnXjiCEHjw99gFj24JW5HLGL2kn",
  "key1": "4Dqk1HsqBeL5DhG8vtWZHdr4oWyCE1oB2yiL8AviXqHdtp8Lyj5rTpz1pN6ExLR1MXcByaeDqXe5ogPDBpqi1WPH",
  "key2": "4niirSuUAfnxnziPVYD3SMZQuwouToQVrLuKnJaYdcbWNpCYBgHij7Gw3LRxhwkuCWrH4oKRwitRMweVjjy5yCMz",
  "key3": "FTCrypzhdPjXZozgLEJPhDbzSadCpLfprZQZtNRwhbV12r7EUfr6sE6twJv5uAv3sj7wQwbmsTai4F4FedqkTev",
  "key4": "Z1JKeUZmAfjks8XDezxvSay3DZH7BVugtAgHLxs27evx2bbexgQgEfPeeNTUMgKRUc476yMtJ5CT7tU3V6HKAqM",
  "key5": "456Z1GWxHuUGmVKYQBbFKYS2pHe6UgkjiU7MHwevKcsLeV9MLZYWPtwm28cJewPu2rsVcoPzBqoM1PjnrjzLhVct",
  "key6": "5V4YtSSKd4pF4BZe53dVwN4LBPA5hb4wnEvFMs1QU3ewKky1sZfFMJeWJwpUiJ9grwnDC3GgUUMGsW7B7boRbb1S",
  "key7": "5LaLfqQbvqs2NtDYftsCeQbbyfrNCkp5A6zDw4sWNgTfTJWiJQcZU4tGJiZ8EsQHLwxnngd7ewqAEE8u8PBbVRN1",
  "key8": "665AENJNjr2G4sQWg6tXrSi4z3vJJpxqCJ5XzZeFtRD8CdwKsgWJQc6toPXHzHNTpifBxeEDVA2XfSzswxSzL3aK",
  "key9": "4VHCaWsZxTkfWU4acSYGN7NLi6wHThYTTLdnqpYHt97JABqopsRgZvU1PLx6P4DmFNz9qgZgtKdCG1ozVGAVjhzk",
  "key10": "2kbGeaW1EqYN6FZR3Jn9HBiCqZ9SUEu2HVbGSTQeKkCjGj953KWeyC8iitzrTCm5qZUgkFi7VcsXPU4a2XZW2B6D",
  "key11": "3vBs9hByehFoQahfFgwa3ehekT5Ur3hD3xm1BvBnz1P9GWJbFkUxWPvTYtC14tWgKYZ85yj3Lap5CsuPfzCHR8mh",
  "key12": "iRJpBrqeazzqDpDCWLVSwyaSwadrEbujwuMohYaxT6t9yh1LMakJqFycWB6K6ijeyFQHwx5rkcoB97Rpk3FWGSU",
  "key13": "5WyRd9oLzUNwbgdrtLnVT75wU6ChcXZMRMmjBn4HU53ykD2iz4PaXdRj4GsGu3fhL63n28t3dS9HwZyQMnSrxkre",
  "key14": "2FGr4jgA5GzUozasWPwPdRK3T2JeuZmQBHwKrGv8gbM8EGfZaoDxLFnEYaKvG2StGFQnz4WN1T8zazUpZZwjwWHa",
  "key15": "22JWdSpNw8L7bHoQ5QZUmEkz2tatvdTwdx25fKdEY3mG2iwDo6biB3XzdvwJAL3hrs8uVhJ8zUCx14ouuZppE9Et",
  "key16": "57wqNqBvHmRDTpUFVFSYz8eB4nRRdVPNmndfegKvX2T2DXhggHhHy1asqkY7QWv7Td8gzgXcwBwYv3yUv9o3FFru",
  "key17": "3zm58sH22TJSeL4YFFBUvEJ8GXqrrBKXokd7AHyDHZs38is8K6n2j43ijG8rysuDEX4iyRyLhcsXQyRwxZkKy6s9",
  "key18": "5nSy3rK1vYH6rfYzA7ZN5Vz6vPR9sGScxdcqpaL7sKq3L4qCJnLBLzZsyPXYnSGq2L7HrcFcfuYSKMUreeEY6p2u",
  "key19": "2gW8Y9P2Q3ZcSTgaiNnr6Wt8MNBpsUzmXGYk82tDdjx5EFyLomzGfmBdgtu1RVAcnNrhtuaGhzgnjzKMbwi3jwg7",
  "key20": "2jPVnt3f89nJ65d76g3PxSqGhxrYfFQCw1obbM7kTiCa73qCzdZ2kDuv1XZke4VSprwe4hk6M6WVHC5CGRZFSRJp",
  "key21": "65SPJ2EUeUEfgFQrMyT281LnviPcLrFJrByDVJK5512b2cZ6pr83LQ7Z5NpKmob8HiH2D1ChEjKjSm447HVMvRCp",
  "key22": "5vC77zCE9JwfjbL7WguUHqTt2CykT7YbU4bP19nECB7BstJvw7TvyJzFM6pa6gdKxP8ogjt51V8972HZS6VZ1hY8",
  "key23": "NBjniuv5CRX247urb3KDCooK32L6QhDBskJjA5K9a2tiwx6jqN96s2pZK5fsWDBocFCs1shGBkd87dF9i48Rr2C",
  "key24": "32TMGo6boeetzngHAuKL6SJRB7QCMVXpPrwks9MycRHBgwkSiWYsTCYoF5aUGpM6jKjg7i9QjifE9X6oCwGwWve5",
  "key25": "4qqw4aLPzkVGsMf85Uhnabooorrogj75gMVR97nrBuV6Q528r5gAJR8SE6gM1x3bv8K7umSYV9PvASuyBhjthVw7",
  "key26": "26NZ6sABSN8AcFRNv4AbXi17xRsQxmbNN8dU3X2GUUoqsF91mstW9wyxmMKZf6k2vRsXLZvwhtMwf6w4SkeZK3Pr",
  "key27": "649yCUrmv57FnXcYza6YFQ1oKgiRoexMqAgCJ7SwqN2nDQaDHLEiGisciHLBKxMoXfESDQposzwGMm2Z1zXcaVCT",
  "key28": "4YMzyDLYWc6HfAdgXjBARiJLjdurzmh17xMitcgva7z3aynWT63fizMuT4kecapd9WNpgqpwLCMdheQXiZ183KXi",
  "key29": "E6LjnBXeRh3edNfj7Y1KsQ4WysSgFUKZ8PA3hsTjFrPquLrwo4y4jzFvSZXbP16pPrXfWgKGnqZRYFUpd7CcT6K"
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
