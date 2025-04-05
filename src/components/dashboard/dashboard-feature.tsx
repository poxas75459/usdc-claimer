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
    "w6r8KzLKDNPVJWH8sJReyjNc9uypk5WVjbELpwP8PpWGgZGNLP6VzHT7c354zm13bfU69P2F8W9FeEJSdQ82eTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42oHnMyj6MASufkB3eNXT384AyneCG8gP1yPT137USxvS7Yot38xAmsWwBHuN4BMcs4voTq7CHiDygBSy693twcB",
  "key1": "29bu5K45B6NcB6dRDXh3KbNoqEB9NZBJEUr9YvjCSc2KdL6SNRa9mPh37gCeN9W5ac9PPKKHfE6A4H6zJmUpQv7x",
  "key2": "5hsUiJGz33TmdA36sWKb9Lek4JxEevXn9YW4fhjrGpyynnzA7g69eWgNKJ2wHKQDByKGBVBzc8Z38JVvCpnivLnQ",
  "key3": "4aBmDZRusdzy4hTvE1fCDvvU3fLHUULiTdhYRxQYvvDHkbeVo9WVJsonZYjqQb74TdapzZENiqYpJWLngpPvmgeQ",
  "key4": "HFQLixRoL5yazUne7KmViWKny3Fhe9vXqhTK6gKfpdesrjWnMdyT9GGcrGUNPhGu3mhtULQ3djX6i7feTRsxPD3",
  "key5": "5rc67MsrTMHqAZb732N9uD1S9X1QQtBchF2RRMNvfQaGCqowhmxP7QmRgxEsyEe4LomvYCpY8C6jMbgoEzVL4Z5B",
  "key6": "4c7aa5p5gLn5mcb7UiqAWxpDSNUykP9egpeUhdPTYzQDFLmHH3gmdRQ7y4ga5GpVZpXjUHAzPa5ELdHup9q9uB4g",
  "key7": "3yo9NR9acjKDD23JDSvZyaGH8VfHs6ivEFYtfh8Ez1Q4NzUtnXXhqGxT8miqkVciW7Vsspcy9MShAfB12NR16N9C",
  "key8": "3nfAGvmkAQbs2McFxCeHzEL3Gp5m2YJn7Bon53tU7FTMzaWt2t8BhfSWuNw9ntZiMp2dzjVAumoDrbasLzmZJRnY",
  "key9": "4pV4ZUiw6Mo3o96siaYZzENBVGkxPiU9FxeqabZMnLHqvihuppteMjwqwkZjm9wYRVNksagkR1qUVQDAS183XUYu",
  "key10": "2cPfKPjwjiGGkqU9MmsQr3zAXP8U8aQ7bQazU5vWWNbNW7RGQP1d2Pb6vJXB6bivHWuUUTX2t3NkQcs48U3sCPrZ",
  "key11": "4aEFesL5tQ2N43R371Tgs2kvgjfvQSWzFYnx6KoA2wRxQbN8rWn1VJC8JkzhgFgsqmyxdYUu9KMZKnokSvecKtAD",
  "key12": "4kGYaE2NamWKHPtKk2ZDHgpzgr8akrdjnWnR33oxBkUCv5ZipvB3Bg82Jk7Mc5zLJSry8RksqMj52hRWYaVP2f95",
  "key13": "37JDCRNFAXmAZSpHGBLzfkzD1DuNPs2a4Jh8N5YvPXK11qmgfhQq6hW8sS5ahi9JRKVJqT9AbvKRyUytoTn1YoSM",
  "key14": "2myaLKNLg5q6G531A75hYPKKkUWjVnimxT4vKUCK2q26av1zs9QGy4fo8mBTDu5PtCTPDCXNN1SQkUZJ57gxNHCQ",
  "key15": "2mKU3bWFuP7WZ5PhVfY4kRpkvLFmMZiXkpZmofMTVncQVYMMSTe4wXQUzujRXyNq4DTXYq8nPhAzeCcKMWdQiDRC",
  "key16": "3K9NC2HdpghYnFBSodMdGTyMD7wnWMEpFvPEwqemftW8xgYRstx1mbLSAWV2MBkdwyQ5c1cA4Yr47R7jCgeUpdbg",
  "key17": "3xh3Uh1B8QZt6shG7vjiX8j3tt5fc1CtnEtNmV8ES9YnFS1dMwWX9Eun9smUAiwR3PYkuRY8jeaeJvQGYvVTM67",
  "key18": "xDw2LEtZSYhoKf3CUcvvgPSuYrknhfiNLgEhPUWnU5ky8wj3BNvnvMyaQWAsJ9KbGNsAUvBqWRFHuvDYCRYMz1P",
  "key19": "3ERPrkvNbmuragoHkXJyeevucaaA9B13yttoNqVJPNyT6Wj8KzCjSPazLZqHT9cWf4V6tkdhEaqn4jffRZwB3xKd",
  "key20": "62JP8wJqYGnQJbUEfQCw6K1dmorCES6sx48PypSNH3EmcaebmfffFEDSCnNRQmDjD9tx41pinhryuVRATKwvQbSz",
  "key21": "49UXD5LyTVeHjdE38SQd17frfB8seSrhtoJ8isUz8rqnSnrqhjJeu6YEEtCCXYekPe1sEd6juVoLsBdRuFvtRXDe",
  "key22": "i8h3S3oVg3GrUvmMb4L5dmCof9AYoUwkVXYqyxEMfgLuMcx7e66okoaVTWCS4eRUL5or5fMKAZSfxpFdw5bseHj",
  "key23": "5KwbEgY2zmgpRdhcKbksHTYwQojKeY4vGWoZLBjDvwSYT3Z7Ke2ERZJebPNvWuzbRZHoz2czGf1khX1x8mamKLbj",
  "key24": "5WX6Cjaukj6ktY2V428W6YkSr28NuUubwqxWdxeywPWEMGJRMrx5GSxWHvPnAYnoH4RgqwNiu1Hnp23xxn47NTTk",
  "key25": "4Qp3uoVpiMBPGVqdEgKj1M9RQXqaCVKZmmf1XKAFnXZdmkHVRj3jcuv3QcPWuTzpQmspkULV575T9dETMKWFyDb4",
  "key26": "2dnhK4wdsggAkj6EMxC5ZmVPPaNJs9PCConzhrePjzk1AKqPDsGXe2PdCMzewEfWfEpdz32Ww1qTHduioFPnnuKh",
  "key27": "5AWrERnUNqfzUWdNe3AA86CPp7iQxxrEg4to9mbNq1yWAv757wVhcpURRbiJ6mwm2A5etRPaHoeEWmLR9jwFqQWd",
  "key28": "61CZbAbGv6F9Uv81uxDUZQ5Y1GDJANpZPUqHWB6wrMVdGKyeutaSdjCKXHD6Z6KxQAv1jbpf3y52RoL4z8xPQjBr",
  "key29": "3KrCFVAdP4mbbc2pZsioY1EyHN4beds7GbXAfEfDQGxBmZZyfyxuHb1BVYk3vZ7s5TwfC4GpGMpxCjXhec1sr9wX"
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
