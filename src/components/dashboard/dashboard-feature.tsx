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
    "5V3jFLSnzGPhuYp5tehBNixPqb8EVsdwz9LTmsi2hm135J1puyGb9t6eDz5qJkx79DKCQ3y9eFiyzt8HVY4Nbiez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kc2XZiAZNxR3XtH5tTufY7QtqtK24LcxACUxrTw4t4hPXZFUNAqtmM97b9rdHxZ8qiMui1DHGSSV6XH9KFUdSBd",
  "key1": "4qwHY1MRDDWfZPA6r8FTeCYABTqjGu3gKyUQHyf1a1m5BWjcQjkpnZkKd4wWNsYA3cDgZXYxdofK7zQnUJmmAtfa",
  "key2": "3LVZp7GqwrwuLiJk2mtWApadebiKycy37rmebvymNfRBmPFvRxqU66xrNUTzA4LigTVsFkRgTqAZPqUCjyo9nKxe",
  "key3": "jrfMdpvm3MRnWpNqiRHAwoBRrKvrng9ywKCagsHPe7ARZKBRbdp7xMkRLiumEhwfwUdqsp2F2jjMx8ERyoMtftv",
  "key4": "wPSyzgpPcUxod5KgqHuiNXP8r7b5eG33HEiDNLf756Nq7YHZJ4GmyGtWKD5C6MkvooiLuCwFeibrdDc68DbNrPc",
  "key5": "64epvDnmqnVkM9EQRQPsC4541q4meJSrg2Tii5AuST1Ap3tsKUk7QzSY86u2QHWxXWMTebRH8wyUNVCoVn5WqTPf",
  "key6": "3ryoCFBukWNJGKF9dbzfRtcSpvoHRXBsXm5JQ54Aaep1Y6BNRLA6R52pXPpAD2n6TPCWb4SuUzAZvEEqeY6uZFoH",
  "key7": "5fybdUgECbUqpQNQQMi4ohK3tcdekbFuLFCGf6Fg7qCn6GNpw21fPHL3jJtRUd7Zwiked7M9fTzRqEqM72rAvwpW",
  "key8": "2zY3WvEewX3NRWzUCRqv3EuTP6vF9z4PGKCwdsQCEyn5TQMssxGcvSqQ1uqrjaQgA25HB6QEZmvSuLSwr8zo7dDX",
  "key9": "357btLNDkEM5yF4zPnLc1uoKFWSRw47noAqVCJx8CdLc5Sd2V6TtQQBJ5P9azymjVNrbz3wjipmTyAZQm3DiKbV",
  "key10": "NWqohMqwSMydxULWuUeTPD5gpsL9YnBeRmERkE9A6CtSTGNZLZFHM2tBk8fzQNVeknm3Gc7AdysiCmDfUXXr6DQ",
  "key11": "53V3Ua1eUFTqfUx3AE1id6wUH4tBNDcGhvRbHzxCgak4zsiyGqh3C6JxSyEUuNHQwmreHkVc11moJZQwTbRHWEv1",
  "key12": "AXBMrmExkriUqk87rCEBqPokHMoKwXY9r2kYcV74khVY5uDbRj7u8dYBkKAS5A6yZ2Cu1yVmCvzphXnsU7NeALT",
  "key13": "pt4b9cd7fHdqryH9SbAqhJZZQieX1q6Hjba2gt6kH9JG9T1ih1dJNsMCuWxNkKqtXfprqZ4CNPPF7RvB665WhZ6",
  "key14": "3SZkPKNW1kaQS2eBAhVyGYwSCRWs2opg824PPuAWMJEohyrtXjTbjStoqMvsnBrsPaws9MZ8eHAVoBXfHgVTcUi3",
  "key15": "XBbqXi4Ct2moUgxnf12VwfuUyinwGUBN7Cw3kbzHz9UU678oe5iakXcfajE3dtfyBMmGjQWETRDCGgpQkiGvQ8u",
  "key16": "2oqGfm7mbmsh7ExqKbSj7K7dTtnLXb5jX4wRzV3q5ACYLtxVJzokLKVaFmyZvspK2domcQnRibPdk6WvvHFvf3Yg",
  "key17": "DsvvP7tJWtCg1XYrrHu8Vs4415rLFn3rFLasxkfRnJUomb6vS97RKe5qWKDGAuA3jPRmJ4aYfobAEUsXgvDrtXH",
  "key18": "2ZPiMRcZHhHVQgGxVkMJ26mqXm1PpaMK2y8u4eF5JuiKw7zZJrzfb4NjFSdxUCHTUFJnVVF9uZwsusty12imrvpN",
  "key19": "5wsQSDjfYWHCAtFbqzRmXjsz5NNEdHx3QRXacFbh8ebipoxob6dhmWRab8NsHnSozSW4XG5xQeAk2KETHW3pPWcz",
  "key20": "SJM76FBQgscegh5fSMCpiNxYQHCqRX2ppYzzLFhR3wFj626CSQu3RpGphV4RedtirveE5HXE6kKHySvt6vjirZC",
  "key21": "51CwscpfrHUD9HKEqfiKzp1BuRqR89owF6jmQVAbVip9shcD1T8QNRpnknxxjxSGwub23AKJ2mJ5E8Vzdx3ausEN",
  "key22": "5JbiWjEeKRDGzC7W4MH9TxS2Y8E1rKrCZBgF8yzfVMWn3KJ64MCDsHGJuU8BrQ5gwKgWHE1AdVBLZHVtSHxKaBn2",
  "key23": "42MkHRCZZ26fLykhJaMTKgYn6ZhfvU3dUUSuvJXhSqchBWqKB211GeFZeuUykgsf8LDLBnPo6MQfkiWrDwj7wjvS",
  "key24": "Ry2rx37CdxNBkJ1xi6Kam9KDduS8TgybZcApYiMsxUHNVYX5zkydCCr8QSuCjhrrmTUXT8Ueb2DgWeXQhPG4Y1r",
  "key25": "4WFvkKhwxvNUkCQHympCDXHt9qoFk1LmzLGVr3bHCqKagu6jdGRysaGJBWB9hu4xmxSSXiDmgn2CsA52rxUreLx7",
  "key26": "2RbwcWWmdoPDrdq84RXFefJSWNFSUXnjKwLMszmesbPWxPHmAc8x31NVE9UbLXhYpEnw8CJST2fAG9BR61hGXpp5",
  "key27": "4oja6JNgyxJnBsNzgLPqyirkkrpJ5gbsr4mTGoGKbBuF44gNxJisPNMd936s8xY2693Jo3WtmYP5QmAJW8oK6vej",
  "key28": "NAG1gyHqBLeQRYGDmS6h3WPKEDRQ8NLkSxr3zuYTEsrfDaZf1F1p8UR4vJNnHMXT2mcufgav95PykaBGCmdCC4u",
  "key29": "3R8Up1ZC74CTAQyMraCFVeg3V94eUwS5cff193Z2TQsWs9YsHoMS1u58wNgGUuLn4Piv7YTBA5KY47hTL1WerNeX",
  "key30": "4oKZZYzGPpmZ8N26ZmpG3MxDEQiGFjRFfuHjdDtgufSgmbyic8yLACugJdiGwwQcSPQRS5McsXUMNfxEUHjHndhv",
  "key31": "4oY9o6xYL7S9P5RsTjrpmD2nTQoGocnsAgCE8LT8TnhZVRSC9omWtyZdaohH1nJCLHrUAgWhF5qdNoBqdkgTDAaN",
  "key32": "4nN1ecsLdiQSpuVmUogoXiQ1R6y1e9XPH6QUsHoTiBSeWuAi7CV4isSMtnf4LBmmkX68KX3doXpVU9mY7dSoMw9U",
  "key33": "4fMeJjKF3RBEGjcm31eXDZBMNH3SqmXRtMdME7xY57vdJxJ4rHbQKX6sBLmZQqCEjWcqfHntpiCEScE7jkLUFZH8",
  "key34": "z9THwFxyHb9fNdup2NbxmDafZ2KqcvDzzbzMpxieb7jxfaKwvNjnUSBkDhZCDt4t4tzhjY3Nn7GnXeBWr8VFaEX",
  "key35": "21g21hHEP35sHsPrjqB537wWdTTrkG77JUrvp7BWGqHhLaJ2fK3AkUWz6gZFEYQKyWh1LcZz7CM8R9SvmV8bVzp5",
  "key36": "2o9N4oYg2aPAmmQi9aD4hJBXpaX2AVL4ciaUmiboB8Y71RrCYkmFKhTZVp1tyGVjjKWYmZhi8ro9oBLTmJrwUXT7",
  "key37": "3pxRDXHwkNX6pdrAgYkbqCSwPJZDNcKzHmtS2okJHHf1jzyJAt6ySYaHc32KYwLqM4DM1rUHaZpXQJAzqXiNgGbt",
  "key38": "4J4gCvWSAt6eERyTV9x62TqoZF7etPrpFUbun6Zguay8NCWrcY5Tgje1c2ErJfgm9UA5DwkEGYsySVor6fFovrcZ",
  "key39": "5XW7aPM3TC81pvJUamFH39vPYh2bej7AZm3mB6L6274tsrpi4kmEBsRYPFUrRC6hNjyEM58pjSo9yhXHXn5d48hN",
  "key40": "3yiMmLETe71RgU2V1jxN61PevJkHQVNS96TDETU3erBTTA6gWRD84Krb2ZnRzLrDGEmyRgyxqJaJQH8VM5jwimZM",
  "key41": "29qXVxMMqtz9jFBaW7PStT6Admi2FyKEfVK9DtjQvrt2RHSKQS9dPMCZ7zwiVb3dAmdbnsDKZkZAPbnoNMcKzufx"
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
