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
    "wThbWEGmx3kkaZXRf41o1tZL335BHXe4RTBnRsKLyY3gSbpJmQAcr8vGKAsu4bQ42H8Sram9miPA8RXbMfy7QUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KZh6m1JBpWXnYX3VXQrcBkLgdZzMbHYcxNG8FfDFw7LnRxKEieYZTTzCP2ryA4JxRYMJUrQgsRc1JgJPj5CgsHi",
  "key1": "3L8thwRhJpbyxpZXYURj8B2hKtHPvXgpSJucaFtevXJNYfRYuxfujTMedVyoZyeomB4gxpkfNSQxtNicbzt4omfX",
  "key2": "5k7h3HRDHVtq88iNB2GWZaWpPdHytZtEpA44VUPrD7nJy4gQazJgBcYM6KToAYqXeWkXNRKXQki7gonJnBLSjDja",
  "key3": "5yG5kV7JJ8AuXhxXKj5ZsodwAdZQgEH72v6tBbq8hd9oTAAE3A1jTsk9hZfqHAsGxDASTWvaeskWtXJF9mGm39Vg",
  "key4": "5SgPy7C744KAS3RMdvf7vb867n4im41dMXvqUYWk95x8sepgw8NCCm7rA9zJM9YRGQ4ezusVyLRNaMaByqevV7Fx",
  "key5": "2rUkAjJTR8KMEsdfkMPJvdSLiUb8Sg2XkEjnegkPj1HtXGj2eDVth6aZe3YJBoMd4n5hMmZbXDJUTaqnL6iYfgf",
  "key6": "4xJDRK3L7g3pXpXxXwKyNBZYbUqTTN5GvjCE1U28yBMHN87AEt7ymMeb2WV8ftfAG1oW9FD9BExaHeCb2NyEesmV",
  "key7": "5rSmRDzgrNVemPo6HVh3xK9aMVPZn3sHKLaL4E1b3AnV6GatphCpLj1hwe7pY79KYptmpCQZ96KMenLAQuoEvY3t",
  "key8": "3jhBf5xmfvVHebEgjGz6DZf8pSpzCi7qzeSYjQq3WgJVHDhZCeYo8dmHy3t9zz8EyHdBKnYEJgW5TTmo9Fvik5Uu",
  "key9": "4R7cqS3ccVNiD9Fpn4gqsSXdxzh3qBg82141SuUSBGSFNFqHWbMucZexzg6oBczpcM1uKkc5ofTtPHUMiCMeRFhv",
  "key10": "4vrTs4sv2ELinHR7M2rKkJi4NbDWXhuWifXq9RqsjHQsWpFRpSji7SVQVsmHEWKTxE1thDa9tUnfneqTWe6yN2F6",
  "key11": "5xVVdQr2g71GqeYpY4fGJ78y88qwxrBxPG3VevMqB9T96D3CFHvXkjeWFTH6H3B4LYfmgd8hYDK29aKuit9ni2db",
  "key12": "4cXHfNMjdwpXTdbkA5dnhf5EwK27c433Ep4VEXtHrm4BBiCxDobB44CnDYVaqBZfvZzYdpnL86PdgoJ5UCGgKjre",
  "key13": "4ctt7MUj8yyT543LzaSUSfBdek8MxGdPJwiWsH2X2xAP4rZqjvmduYxf6w4uo3dJMbSgJsbuDJ8ipkFgekbxm1EZ",
  "key14": "uvtzXPb3VyZjn5x5oixe8PdYw8u5qSczKUTRnScBuCmweAWQs4cThDNFKK1rWeYnLRna4hkUZPtZMDPW24abZT8",
  "key15": "2VN1zxDH4k35REoCc8ctUmvUERy4NXjUk2tLHVHqnBuowSDxfyxsDKHU2KZ5h7KTqPYo6FseYpCMnPSV7wqnYsNe",
  "key16": "3S6UxUr1wZWSy2gAqMBhZ9KNq2syb9ikmbYZPaT7cndQRnGvzE8FtadeiEeEiqZKDnqkaYUTDP1hDJDB82g4Ber4",
  "key17": "5nLsdze8pfUPLiSaiAxjAbZhhjuyqjiiYQ1WCREXH82iFeyXmx75yp8AVpg9eRfXNXRyJSpeQMzdCjyZk6rhpkTq",
  "key18": "sxWeVCMuYS9GfUF7crrH2B1PiJrE4UUZMjDWgWLhMeV7j4b7URX5v8n9X4D8ZYXsGAo43C6seUKRfpYXu93fYsY",
  "key19": "66WK9fGBEbmrcwcWBvXkmzm6Yrep5mWm3TDqbLD2UUumUYXRXgqhbRLHk4StEqGVHFTNZionnV23wGNsrGkFFtye",
  "key20": "2hDauevioTSACz9HJyFTgDtP3y1uhg9Sy6S4DTWbc6HRrzeVUeJs1YMtqAJaBL8akWNndKVGQYSc8ZwDnkEQztu6",
  "key21": "4aPc2rTzQMMTUReZ7cVencEhresQJ1twVbNLocbRP2WhRQiRgYoVj13p7Kr9kSVRxDTiFSHcReb2kSRpQ3rR3Dot",
  "key22": "2xq4jfwmzT4xH5hEt5nfDbdNpH1hz18wdrq8RH1cRyFm2DM79jqnuGuTqECVLT4hn3q9ty6mQVQLrf8XtPNyFstR",
  "key23": "4F6m3fTqvVXHtwUzB1HzCy5JA7LRNsJT15tt3SP3VBTANtVssatuzt8B7k6vWNNxNMwvRku6ipSDpvwLAcctAiga",
  "key24": "bQRH9bqYBXEWdQzaM6ZQVpQCL3aAnGDaA66bX2G8bPhfeMsC3axFpao3XauytHCsnxeSTgbubAyfF4XRiHbCp7U"
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
