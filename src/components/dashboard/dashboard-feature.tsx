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
    "3FTUnu23xoXBN4Tw8EfrvtJkMrbMQAMCk6KH5uMsKmJXDVuGp4XKetc3hk7ourEJ3c8tk99MHky6Gu567kHJaAhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BrZr3uPMVMgXh8gYNcuLE7nKboSePKrCRVANXxmqPu3Wkoi3cEu2DM9a2HFg51hTPLELNMK4CKabTuqRRwq9VyS",
  "key1": "XwTWBsiwsF4SbkhrsNXYgcJomdj9vFttYGXLKgjW36MqZASf9y54kcqZSwx7ZaakuTbwvcM6zQigGnJkhZuF21i",
  "key2": "2ivAjPgJ4QkN6nGLuVaeRfup2PPk6SXEtTzZkbsMbrTzPESvct6XmxUhMzt93G2PJk5vTFZsmwzD6x8yTfwo5qnj",
  "key3": "5R6Y4iS4MNZTTNULKWRkiXfYaQTYJMmKJvLkMKDpWRustMfLLJpHEieZSTv8S1YSWSa3kRd9WXC32z6p767v1NTm",
  "key4": "56SyAgh2b3rrc2b9CWpLPemcP74XvbqhgXe5s9tFBL9JLszvyp3BJDJcFtSDcBnwwnP3nzv1rWkkn91aKsY8nWfY",
  "key5": "4cxXnyjdbb2547wz5rJe1hFj4CyYpfGp4BVQSPF9UxghC2jYkauCuXuJG3CoXCJoFKkNqhLsgipSoxDiQc6gEwHp",
  "key6": "21H5kzrqGz5CfBqXJY1urx8QYYLwrC1QkJc7B12TMunuq55Uxh3ELd8PrMsVc8ymsyfyh5KDy8x5kwDZy7U4SSyy",
  "key7": "65k2jmirJfBwX6BJKdBttgi7F3v81VsCZXaG5JZn5SLvpsqZCEyNFXvWPc4crGxh94EVtpv4fdw2S4RjabHaqmMQ",
  "key8": "2TG1CXrs6bWaZi1NxJcS38VtDBjKCLfd2QLNAbSN36iwEV7Hfg8hs1Xodqq2kVse9pdbXJgQM7kjEs1H2S6Jxo9e",
  "key9": "41Q66hFsWr1Nnt4HXz7CzztjGMyEwhJU1Hc1q1djbv4W9rXxYCSd3iak9aCys5U6QYz6XtnNG4KtEknnDqM2zfZ3",
  "key10": "2tdRqsUNSYCAjAQ98dbaTeWi3sm277bVMEi6pxL7PaC1SBDp1RnKWqZRcnnhf9Y6wei2N4RqUaZDzDCvKF1Ek5VJ",
  "key11": "5JqiZYzhp3P7WwWU8P379ueqM18PsdLmA9jUfneqmXyHa7vCQiLweVohdTZJXsXyrc61j4UiDr1MnviPMmtauQwB",
  "key12": "3WtyoNweb9HFX51VuvA8bupj6h6YPw4hVSsnP43ZGjsV6RFTGTue9ttZ5C6LPLEj4yQrtd3sNsessq4QrFZeoh58",
  "key13": "29wcZAHnQ2wsFLWSScU9816EMFKgCmBjsrxx72UEc5UABPqU16awX9Px7No7P6sp1Cu9gpdWTPBgMPgc2QQCr4U3",
  "key14": "2kGaErzjKKncvKx6hxSh2opYGYqqgPN6ykgjZpTjb9hm4rcBUh4koeT1n3t63YZuHn3xMQB15dQ9ZxfGHAXR7mPE",
  "key15": "CRf8FtTEK6vVa6uYzA6EL9LobVfBbqZUhYNqqw96TxSHgY34LFRW4yPCU4qGxvEcv1Wsj5BiUHSQbwhkjPZrdjH",
  "key16": "34rbn6Uo2Rs5hBQSi3xwUK5U2JD1eDUfGuQY3tuxchbvCkFca6T5bbmBNAh8wZqepC3eTKj7XeEmFhjm9toXU5NK",
  "key17": "4ptyLdVPwSwnRc7c78tFvFxzzN7QaVP3xgjeqrrLFHaGq6CVfbaadAQ2reMYkKfxrcJogGFh4Y8sDoNi7nVKdVti",
  "key18": "2dwbWcBoBxgkECHwQyvRq6Uc18EDzLmuRkk2VsZrnR7FSZGUXGUU9mQUj51b3GzouoDwvppZENdxBF513LcfNS4U",
  "key19": "3LQjxoDgq4H8mnAx1RoabZ6Vz1dh6XHUWLZDdt4m6Au7dYddB1Pn8XeiwzdgKntgjBdrZAAHUewju2QqibAJxsqo",
  "key20": "4p2s2SVY7YmrxqTLGyhJTA3uehsu4AcDipSSLusoWeNxZjCLGdssriz38BBtSiq4j4phzWZVfY3DLEP8PE919Ksk",
  "key21": "5Zr1KViYGc5X6GjGUT2KyHkJUofX7wgGLtFMK2pKFSUnfFtAwqpQDTsdP159tDk6K58hwdXGxAStvZkov6tMgXEY",
  "key22": "48A9Kh4Vgrfe5YXqSayTrbW9SEHnpys5Fxk3Hf8mSd5vL6Ztw39Bni68RndzHqn2whZGTpqz7dNkvafZMLBbtivP",
  "key23": "2q9JJSTVa1PePCdmuag6vrshr39CcGkRMgjT4yDZwDywWg5UAaT2QJNqM2zS1qSSwZVGSDg9xiDGYqpAo6mvLKRj",
  "key24": "5q13oqTp2jY78hz5zWaYpyPaZkcCEbMP8PL8feZsxDi7Lh8ULLDaLwfmgfRtHzU3tfvJaJ5i2k1FuvpzWEkKbosW",
  "key25": "3qB4Jwr4gBwSBYLQoocW5XHT6Xc1yhQZzUpQuUf3wEnfus2YUa8zaxMX6cXuHSimftwJCWJ4x89RJ1EJVPwbN3zK",
  "key26": "5uyScsCGM8hxjkF9AVbe5AuKFmcTKhwCUNtztXToPGhZoomckCvrqGe15mppLqCttr6n4zPvScctzN8UPZ1DrHiF",
  "key27": "3s1AWh1bNZ74Hegr2zcpxH7ids9Sk1kcZfmhiDn4sm5JeT4Xw9XuHYsGe4xumcBKR9D51tDN6f84wzk9Dxwuimq8",
  "key28": "rb8q7vLCBpTnq5enbMZ1ihAwx11hvgUjMVmQsdhKaYKXScsbZXgn7wiDEdVgRNDJD7pePEDNpmSEc7sAQMSBgWw",
  "key29": "35eS2BmExdCyKTHCKsdak5Pd174HFxkmjiGAoCqSbJWb4JTv8yMw2wgg43vt1YN7yihDfUQ62peABXCApnPZG1Lg",
  "key30": "2Ab4Udo8ZjBu2wZ54X4EMr3F4E2yGYh9T9iyCGpMK9WNA1zriVSi9L989yJPmBnScHjmtkjpU8pYYTPYq5Ck6wF3",
  "key31": "2CDzpzXEW6Xov3TeChiwUEuP9rw9AoTHZEfUv9GHsf776UReNx88N2YhvZEDgbqMVv8MuiLpyUZi8Jt98QbgaJd8",
  "key32": "5VujgVv8svnZcsnnAmfQS2PabUiyy2PZsRwXu8wcaofj1DwJayWGFZvaesbV7aQMv5z8N496w9tsi1atxfZGt6DJ",
  "key33": "2CHz9xX1RizZBzG7xMzVFEHQ5NFLFyYEiivmNjrB5dgvccN3hxvAUrxjqeEFT7eDWqgGfMZ4z6KzQ9QJ9ByEgnGh",
  "key34": "5RoG7cEc3BryU7vNrHqDDfSWGxvBdnEY6qZRKEMUZbsqkZRX7yvBwTe2aRUv9n1W3PiJXMkr2ZLy91obC5NHZgjv",
  "key35": "3ku4E57tC6UmEbQGEC7WLTL6RdPXaY3ExwfnM3X8Y8T9ysQzRqXonuStkXfiKnvQ3mUTkGcD3DT8cojoVQMTKmMM",
  "key36": "4wVors5aoqGgg8T8qfoow8TxduXGLeo3g22v2PwfX7ZUsokLpUp3XUE6t6eQakfVohQ8Ap6t6mgEJ9GsJ7TH1g3L"
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
