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
    "5UJ6X23ukGU2KuSCnQzyXZMFUQqHzNK35u4yg65P6dV8WZNVEEumc7mFsXwS147rYzSJfmSq9ccCLsPFQsXYd9zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R8wcohzkhJUogRZyzsXhbEGMay4FAzcwMK3FXFykFgEWge1H2fBBGEwHLMxMFEavYfxscXmCgVSqoykV7ZVoCZC",
  "key1": "2UsHXrjfShjnPKErQDyMKpeTyUAJRNmR8WE2nsz2Y3ZvA4Wk5GQpYCBSHhgTQwNpJtw7t26bPPwSpUMC8hdrdvdQ",
  "key2": "P3R1XhiA7LxnskydR7vXtSnw7VJxj2woU6M6Rsh1hqCdyWhRdLSdTFT4XWH41ZqiZ986pcproF48mwnJiG632Ju",
  "key3": "4jYufJyDjPThjeR4mQKhJe23gq4ZitcGqMwp4omkzBgLP66P2TUgti2ewppaYpjSALHb4H8EMfUxuDx9Nc9Z4Gwq",
  "key4": "5nQdpy72sPVs3z8YxUPzcCdtdsc9GgjHMnQmMEwNxpYmfRdhvgRnW6wtEAWKvg9WEEfw4aAC6CYTikq1WqPnWbB7",
  "key5": "4Q1YsoxyCm9yd9aEkTrmRtuWjZKzuNa372tJtHjqoE1hPbNiqHD6mNrCMHZ1UC4yQ8rdoAw1Q4gsQTFqXpUa6vRS",
  "key6": "5VPvBEPiBEy5Jvkb3Gvow74AdXYCq8Mye6ZutscVeJREkD5HL1xttHXmSV8zG3YPWgE3DHaajerxHpcm3TfJ6Uw8",
  "key7": "2RaxSVRam9gzVzhvWmMy9yBg4wroMFrVfFHbXHznfQwaEhZmZ5vYcC4DnEzBj4s8wiCQKfH6HL7mDonQTSdWRmN4",
  "key8": "5AM9XpfTN4NNzUaKV9J5y9GHWjMCCkugxdNngFEmvwsief2Bbqcn1qUkW2kiLGsDqVNhodu48tJjjNoTrZyUzxQ4",
  "key9": "5xnUJ9pkDDTSm36UwqaYBuzr7RG9VYdGnyP7XAvo2vYz5SZCQC2fFZavvd2R9mVnnp1XuymNkMAYu2gRDUUau9hB",
  "key10": "S9jiEjg8ZnHQycPjTrTA7SPeNbXdq8UaLfH8gM6W1qngdL5fi9kCy8aYQuaYkNdBHix4KYPREbp6gxGnQ69oj12",
  "key11": "4ofXhDkkMvxAVhSAb7Lk6hW19nyVTRNXD3ETnSHEFhsKxXFFxRkaraPhzfNkZ3cX29vQ9MWwMGET9gg92AhXWGPj",
  "key12": "KZtvTjztB3vto9fnbwpjLcPnavjzhxsmozynw1hhaQUCL4JjizN1rF1rF1hoTQDEdq5MHQ9G3DoFKUgPqbc14Ep",
  "key13": "JdjvSnnpE5cDSiBeQjfJ4ZRBPZ7MRDRqdHZGdz38DakeV2nC8jH1NMVTcUTz9TQfD2BrG9K2nUYwTSFrLgMj5yP",
  "key14": "3PNzBJgvX2GBXrtGZvxC88KBHbZjUwf1xFUCck8YUKwmgUpt6Eju2StVfV1wx6VroRznCbpcL5Ki5qhvPWMMKXS5",
  "key15": "2CjQ83Jwyyvu8xArbbAMeUJqCTZUX1JdRbTgQbonfhsLV96F8W9Ux37PmNsXh2aBtSQMrsVGKzH7LFA6f3JucAyh",
  "key16": "31v17Ae3a35Xi9WW2CqVd7zCUhaBc7V3J5N7VSfjxEstNsjLeSo8Yc8SvzR437dHWk7iyycxCqA4viTtTxamnh4h",
  "key17": "SBJdG1W1yokX6bGTX5dWJ1aXbj6BrtMzg2Sguz1n6MhW1bJSUnE5cKwXfcxuFvA9b4VLUBRUan3YFNXjts4z1Pd",
  "key18": "61GUG3PANa5gnLniCrVL6yNaMpyGMCgLUM3x1SfsLEB6tebKH8YNPHKUKVg8YU75nbx3bok9322nzD9B8LgDDCBz",
  "key19": "4K38F8SzHAQCq9Kbxijpjc8urfLdv8ACtU5HNYv9GdD1AEjriBoCBb995qHR7oCM7KYFVrg759rKPKMFRBAs3HjP",
  "key20": "4iWrDZCiKhc4baYFVhLuim9orksBaXEDqxBj71XyWNwMdjHCDjDwJFMzFBiRhixL9ti8PVVXRW1y93qQ4rbjbGAo",
  "key21": "2ms84bAVp4yT7F6mzhFsG4aWeJzdMHUHtfgGE6NPigTtgja5cjDHsK4GhTGMVuc9pNfU2uWVu76zgozRtcLegLGA",
  "key22": "562N7WwYaJmzsn5LZQKR6z1JaGbga4ZnJKr7xPmoY2JS6r1w19uTtadfpLd3cYHUvQQt8ANmGEb5Kkq5CkjbqnYh",
  "key23": "4Usw8YPUZttbZMGENy1YA86v2cDSjrxRNmzNBAzQnFgDPGXQCNjvwYswuAJbcwARVkZbrrEVJgq8CYFQmeZBrM6u",
  "key24": "4rMANHnSt6DC8kimF636EENdMQN35T22iMDdP6BcYn2Pjv2y4vFq29tFafZK6A2hi8CUknknzMWFaqSaMYaMg35a",
  "key25": "FHVC3CJGG6DtfMxoPUzfTNfQd6RJCoN4iJra65UAGxxF6WhpSBAR3Xe6UVTsKPr7AxPC4HJHWL8GTGej5oYuJGC",
  "key26": "38EWZ8yKcvF2V4yJxiuVuV8bcnpqiP4bXoPsea8pMVWpPjZV5FDLjXszrkNWucWT1xy1Ah8ou4LVjYQvaQHPsVko",
  "key27": "2v6Q1pwJUxy88iGdY9RWtPJfUu61JVQY1E6zodFzz96TZ5UdTFSijaX1Vm1dM7AQxKtE7hU71Ye69xkKHU9b9E4N",
  "key28": "3ENHdF8E3HMjrhRrDsrXunMd5zUPsayJwePsToxtxhBHNUWi8KuwHZ6JQTJ6qL45tcY9fBwNg1vcKq3bxdGpGejM",
  "key29": "2CPjjb5YbXac5frTzx6996QeCBKPfeyQ3QXZb9Ci14GgM9gPzTHcrJ7K9mGaoyFii5EceMGKXr3t4mhkfQwiQngG",
  "key30": "7RA3eVy5CbjefSs5FXWZmHCXHjRCjk4TezP5Kv5YBPEfEr4vUx675cJniZxDNWNKdu9QBQ3p7Y6uvPaoe2veHYR"
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
