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
    "5KJGetfJY6qBgY8GKEE1R976PHS6rYnNjebMZyjTw2yGA1kuhgFZ5ZAEtDxQH97f2WbCTfzgREtPXe7VUDsG6bHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ieSuoXRQjkRhwjdw4doSxLktSMbyN7xfgdZnJfyeMgqYC5xqipLRWt8E52W7f8j81afkdmCgWiJdys7N7ykJtL",
  "key1": "3rcRtyCxvN2P2PvJotwM3LBXJUApKhojw2uBigfGXXmeZio93JJWZZAcs8y4RaqeMEe44E7dr3x4NtvQd1zLKd2k",
  "key2": "2efxRNCzDHVWQCzR7tQaqTMTFQU4TLdeHC7NagmuDfCr5EBpHL3iaaBvTNxq4QjBVVbjXdZsYmbR56MQwNp7iYcZ",
  "key3": "4aeo3swekKTDKipB8jNioXrbwrrgTz6bfmMs5s3L8F6Ctp11Ts8GTJRz2kSbbd6sAYSSvmygwmSQ5Nzo7DfhjRjq",
  "key4": "5zoyTi1eEXw6eem4tAbQeZUbzyUbmcLALwiixBLFHTTKP487SnTk4XyA8abJB1UvhsD99BxVnmahDxshtRS1HDL",
  "key5": "3bxQdmxbqeaaLCjy7rJx6DsWwNfH3iD7MdtQZpCQdniLDy7k4A4XqNqh15JewyrANm182rLTuMoNvvXZD72qns3D",
  "key6": "2pEqFmt4rWcaGHBBPh2Wz7vJPu8suTgmuvTfdmitGzrZ95pu3TQ9s2wuvxppjXprxH778y256sYPS37YBzebTK6h",
  "key7": "5DSyMVe6UobdS6Z4o2sZxokYEdUsU1vbXfbXaLgNQqtPEiQDaA9Vsiu9k7iECP3VN5BZxcGtiM3NYqcMEmdxYnBY",
  "key8": "2oQp2pMbFE8ZTSHT41rWLzfMigHLXHJBNqiC59jN7kAWe1SVzgAd2ZG7fboGPcLbMt1H2j9h7xjYYmZAXNiUZ44",
  "key9": "23xw29K267YX2WEV5xkiRpuEz4FLPKmWtQgi4kzicpV72TSquRRPpNqtAY5GCn28XzzrUo9UCcmYk4LDKjZ869w4",
  "key10": "3pwRJJMya16z4KeeLw7LauFTcnp7ejuEiDKp2NkAWt3uGmhZzqNfySbcYJpjJ2whL9E3LnQfdXqsYK7Mck5dbHvA",
  "key11": "WEj7hZgDHHJkumoE6ND9ipyvnW5pqdfMoi89fozy2vdM1HDF6fSBEAs8h93bVBBGDNx6gqt38SMN6fq1viehyXq",
  "key12": "rZDt3i2AwqWaxkvudBMdsdBhmMj6duexTtdQSbq5Q9CZaxwrfcZ9Fr87NpizpaLodVLtyvSRMu7cBaHT8EEzEB9",
  "key13": "zK8AKco9V4jjJa4oqzq9vpxa1pZoiV9jrJbHu5Gng6WrMPhwkd59Ca1GvsXwkxsxB7PYCus64GkkMFudj9JStJS",
  "key14": "2S3iK8A7D3jeMNCLeiGFESPJkiW8StbcHZmK89aox7vgb7cYCEYuh999Q5QBfbwjFacAqYxd2vY2CYD3gypQW3ac",
  "key15": "25A62y9YDhCiVhhAMfxcCwZLGiLGXae13pSZ95AtcQQvdga5hF3W1zi4D55HPMWXLXak2uirYYjxBYJ4TFia1Th1",
  "key16": "2yNWBGJJzaVsJTibuqAdWCE5njRnzk6gLRmnh5jbAsP7eXnGWTS2uExVSBF6F3dzuZ1sHK6GKBAY6VKvcUBTcGgL",
  "key17": "5R4gPTpRSPGumn1YdD2C8uz37MoSDowoyqYgCekyPp9MFm6j9gB2muuZsAHwn5GAbXtv2PZwrrmFrHLH5PN6WjYH",
  "key18": "3P5A2ZndMwnjhUNJeZNAKGEhbtcE1VCVvVTAZvCASn9AHkTdFyCpa5Q28G7i9dXK6XjekMpNCN5EJrEpyPwwqNpf",
  "key19": "3tVTBmZc1NBLfSiCXyQ7QPRTfrozZqSMjo6KBrsfBAkrcSFxF6M49FxNJzxYsjooaEG1GrXHdx1ytswWTmF7afw4",
  "key20": "GjaXoqXDvhAXxzfc5wRryMvY9kcMoTs5e5aGDjjMXK8wgST6dfYVvoXyU22kyRbDBPeWAc7TzJHPGSaFQrwjhg5",
  "key21": "zFCHfz2jHbSC9527qKczedhiuYD1rxS87yPXjPZZRLyNbqZmkXMd2apYx1WAMDPC3CMpZed8pgtuXNXiPzaN5jK",
  "key22": "43rhUwohCUVVXMtzNSNhreChQaGzSsYnbAKZFWASE8dJUuiJGmt5varfBAevUKyj5x69C4aAZnUbUoSw91yUkaiu",
  "key23": "2nSgHsJx3ZsaDAhvvpBNwVB5aiVm1mdnDquqseYVqMHArBPtvabM9L2ju95BxRqL9VeL3BYKvvCSr73NoL3qTx3C",
  "key24": "3V58gDT1eHJxCoN4Afgu6guEMXwwpxeKbmrDZT94AdYTbtRiW7dfZAi132KjxzwWBv4Ybbf5UVnh3cQB74U9ffEE",
  "key25": "XM7DkvKrVB7QNpdK24YDh7XxWQ97YpYcbgzNkmWxirHadvuaeSFzT6YjGdeARxckgSHLBEMQeYptQJC6xiTg7by",
  "key26": "2JNYkvLtcDZFn9wrAvcrwQJiUCCeWzwFim8kLJLhqWkN1Mp9cDgQ6UridqpogX5WyJUEkreNxrSpf8XWC6jxUgFL",
  "key27": "659yWbe5MGBYQd2175kxRVvzfWh9Kn5CMVx4pcsmpLCNftKWGQyuyAFeKR2NAFc7PQ2ugXH2TD97gtPrAYqgVEX",
  "key28": "5xfTVcHWdw8Zz5jgfweass6JCaYcMp3vs8WvxX4yEqeBQ6SYSPPuAaKaMBVi9J9QCaaNSv5CmgHfdv3esUKLqXFK",
  "key29": "nqaTWviq1BMchUpAMMtPYpRhBEPVLM3NWHNQR94TwsXwBU3VV1BrXN7rUhXwUheojJR14FSzrgabRTcEt6y7Rz9",
  "key30": "DAP6oYeWnyNyQ8qTRCV9kR9zPCYzWBRrf1CFx7PtZxz7VoYsxJdNAoFiq6ZzTd31hNwtXo2kZuYU2CyZC9A9Ema",
  "key31": "5oh1a5UA2N2Cfg56Dp1ex1PuXhqJdSN1ovTHmfc8x4BvZobCXRHdCGsh7VXhQQxCdkgBDTXYH9usLtXcHQjoAsJz",
  "key32": "5iFeUKwxjpgXG3cH4fUy1b6ksfEPm26xwFcGtPqPfdwVohnHNiREgHKuKzC8UPfxATPnYCKYrnyq51eVSHVqptr7",
  "key33": "2q5CzAvRxnpAidMTEUJjUYQCQcynHcLnKKbYFt9cLQCZp1oHSknG6cxa1fEBFhAhauWeUigfasF9nHRV26ZZ9gW9",
  "key34": "5pqtUYNA6CFC5BFZHEn7mJSq5wiK8fAHRSfEfeAhqnwX9qCxMSmKVoXAkYWu7UQYhVh8HosNgAtmMMsuKowUSBJd",
  "key35": "2sHCzvnwtdzeddRj5BxNUCsTJKG5gp9beFbu4vYHCsT9SJoHqfZ6CnAdqwL92aywry1Afu44nSxneDo61JX1TqcC",
  "key36": "4deHg5C1FCr1BzLg8vYyYm9xRSdzrU4ne8ddCaYP3xYtKQNetvsw4MPQnYz4JyUaht5qFdSDXSh3aF6se1J2Ybu",
  "key37": "3QG8Zsqf6x7Lv4kogyR2uE9dr6exFG9fcgGANrYRJ44JH6N2ZShpN276us7vuaMAWyabSZ8SofvbvXN7d4GsUbjy",
  "key38": "52ryC3SUfdVFydCmWtmy64hEjNBveDHR5839irxKAgGc9y29cxNrGEQdgcfaTaMwU41jPWhaMu8x8Qt5SdnbZkpQ",
  "key39": "5gTX28uvwjkyJ45hfFrzfxrs8fQxCZqCzfXymh1Xao1WJGzwjEgjVFUFeBrA8FkMmhiQFutbycysBmfWBaP562A3",
  "key40": "4wEP2kz5hFuvKUEZzPoUeioCCUE3CnV5z5QUYSpnBLDwXvYf7bQP4uSYBWGJzp3PzUXpPJkW2sD9NEn5j5irttsT"
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
