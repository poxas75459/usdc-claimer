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
    "3x4BXN4kXBgZXQdsYQu1wvdsa63nXStuFVgNT5keMAHN7S47mE2NZGwSUyFz4iHPDPmLTVqjLw95WWsVbMAN2kH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tCmazJpjB6MFDKa6Cu7BNYtzwu51QFRq1apN9Y833ssAuEGCb6U9MCGwj7rjv7VjZcCLz965ogt1VBaGGQVR2CF",
  "key1": "JeEc7UPrvrJvdwDAy9HK25PtVFWHZGF86Nvo4EWPbK9u3yW6pVLxCeuXv26N7JtvAZTC6pQeYxyzxAu5rbWrYet",
  "key2": "2uJ8TaXxAt4QzFZyjvotFRzEeeS2yDuPHdJHkxnHemvX1UaCDzusW7rHF8L8VrfmZJbvQ4ZDsKxKYpTmuUFCEcRB",
  "key3": "5zYNxo212zhQQQ5wj7FrYsnmSuedNEUtTRiz28jHuzL6fWQnVSEBLJpTBZh2NGpDWYD82wtHAE2YQCzH67LF9kQV",
  "key4": "2dyN3EJd5z3LtVm9Ypweq9A3nWTiPHea6uG7n8qbapD2F21hWifW6JQfVi6CkBvJCU4TAGyGFPT1bBhgERdh3W6z",
  "key5": "2gpEpr11Dr3ZLi2oNAC11QoWnm1E198Xg7CSQsVr2dTHUw4Zzmuswj91PnmVEXA17SqDTEorrrAKorJbgwKmahXJ",
  "key6": "4VfwKNt8PNxdqyUiWaXCQwcCL7JCT7PhNHzscaJLPfGUPFpDkGZBV5XrYazSUYFzKP88R4XhAec9FQzUoiERVS5y",
  "key7": "5NP8beXTefgffx8nEqKf9D5C7TwkY8d9mQTrKKJyGNF5Mcmk9zFTJaqt4yHohWPWAxAcsF7353Fv9AKQH7Mei8CW",
  "key8": "fh2tdVGGBxdr8wbe1mHW57Te9CXXaZpqsS6v8HzjQVJ8DNG9cQWeRP7E3MkJQoVWkjsTPTJQAzQmtfsbGCWaCMw",
  "key9": "2kFSeh83oCiz4cWdqQwZvTsruipQE3yPTcWqaYNZ4v3u82YT5UKtUyR4if3pUs2bJEmUhvVqUJrfUVpmKq6t73eg",
  "key10": "2792vbvwtdTZ4ojCsBSDCR1kXgZuPDYvoD7X7aZmb9qeftquU4Hx11W176rxgJPudaiBSNXQyQqzNVa5ZiHfcDPX",
  "key11": "2cni5BmydfQo5Mh97fg3LujY2FLMpoMnLmq52c7MzasmNWUwjRKZMSmtQzLP4hcK9KXHV7X5aZxdmPiwrW6SkgEA",
  "key12": "29yUYVQtsqdUzYkXNzutCSEUXEUsi3epwDmsa7aAEg9FQegnncmZLpKP877PQXJUfJuGJ9zZVubgMJFMUNUaRVYW",
  "key13": "5PMosvof1WTCKczmaKsExTecffQL2Pq5XFCAPsGVb6Q2ufpXmDKc98uFs7xNS24ZP6cS7qsYkwrWL8ybaZBZZa2H",
  "key14": "5C3DjsoDYDUjEAz7VfDqyC5ScmkqYvFrjmEw6qcp2abzP4kVpbq7kdiXPPRYcUvojgvTa9VX4VYyv2Zsp2iotur4",
  "key15": "65BCXapHqA4v8Z1tJmSmKFU4HzqR8J19ivKnQB4vAS2Y8uDNSYWi6aa1kTRPDTEgAJTJefRnFwgDw2wC4Z5iR8C9",
  "key16": "2f7nmhHGtmrHt51Mf7Ngvb3NVY4XHYpm2JeGgRLBs3xzxF1E8owGFcsLqFRq57uhN3U18mmLSagUXK3vux8AcKCH",
  "key17": "3rbvZAxeamUD8egz4NAT3dNjnG9RchCVTQNhQkFPKffBPcSJ4p8SNJPBHffaWgvmCiiuASxLmGViLCDYkdjQHv3B",
  "key18": "4ZmbABBjKiE815NoMFg6KxjGgXF6FhAGgTCamygqaEVFZatGh1o6cv5QEWn5hacV526TiJvmGZUKaSSJhh1MpdzS",
  "key19": "3oFjLz2rq5414TdGmaktDhRxk6EixhWmgBBvaqeMWtRThCkMo9vL5kvQdsVZ4TDnbLzwKCPgmP34bXTuFJtMUKot",
  "key20": "2ajSYCzhvvNc9DPa3fV35NoDK7h78aAqNZ7UVxSwEvXW1HTzvmpgznhSM3tLp6QLb5wAiSve4PPY8ZZ27fVaUg31",
  "key21": "zz5SmuNAFnP7zpnhRtCjLe2yjLNVbw7uSxsw9S9WNw3MJmwRC3XMxfyFQYFNJKY16gxemKyxpwgkV6VbQy7uWva",
  "key22": "4h2dCM2NcYA5sGGb2GEBbu3VYnfgCs7r1r5PT78kcKs8YfejoSgYPiZsfVxoYfa3NTeY9Pm1zx4K8tLMfS7H5PoN",
  "key23": "5rHipkBkbS8GVxdHvz3QoSydpqc6NfXAqugF11XJhCszbNw9qn7RqGdhj6mBhfdJqXH2QxsRSFayo3zzVmjQMzcm",
  "key24": "64BbB3NxHWr7FxW8QvzW8Jy1QhJSqF7kc6agi2wLDffnENyvsimt9T32oExsL9JBc8rhkZGUAQEXUopkGZTtxAeb",
  "key25": "3DkmAaF7bH9cHDwAnCKSGSkRjaG6X2RcaxeMKryqTRKoS7HKopvZJwkPuck66dtAg7AFAE2pohTj6tzDE7j6BLco",
  "key26": "8vfWPNW9ULJQSCz7PS2We6JWW2AVUy9qEUVMtPeRqoADXMXvnhQHo9i8cPatEkzJhw4XG4NpEzbL69uDGpU8EFy",
  "key27": "gWGVgUHqdVGKpayRnz6mzYW32jruUotyS3jDc2EnLVZyKPBGNaVkYt4VL7wVh44Aynx1nR9zw5kSviKzkXz6Lrn",
  "key28": "4FAA9W4GsHCGG2EsBseXoFS5nPinCNyvcoCT9Jfns1zGihL9yqcZsEthZBffEXUD8ay9WF49DdiGXQ2s5LfFBRpq",
  "key29": "5pxFtt7UsG73km3X4NF6hvTpjfhzH1EZ7RVVo17276zoDYfJXcGZn2X53E2x3HVqyvzFjYitXfJmHEvVGhQ28fWp",
  "key30": "38mXK7EUYEs5wtMTrN2KdKXFJT7eAj1FzqBb32vdHXSf9mf45rm9n5hhRBeezuoo4fkQHPQ6unNCLSxPo4bhSaqu",
  "key31": "uQLuRNHh4pLGbiWwmrurEaELCbaTFaSc7KnX2ntmiZFW5oaEQ1E44XERmorSN6CfoGr7eJqinokn6W5wK7H73Qy",
  "key32": "3aaaC4tE6V6SahbmofNaCc2GCjrjmshjALTmdpxVv4tmhDyrhhu4JkBhsFki3eWwmvCMCvPJLeJMMdwmpa1TUMc9",
  "key33": "61NudTmreu9ZQBortLXMUR62YCr8xwf1tagFM4mFddb92XHYeEzByDDDC6FC37QpZCdLeAeVHoSq4ntiMSPG9YC7",
  "key34": "9MmbHcohXL5jNGGsb8KHHbBAsTn4RgTXEYxBhmBe1YdCfF1Em6R2Qjm5kFszbZrqNLAo52KVAYExWzKWUaFkiJy",
  "key35": "5qF5YsHmXQMcSr7JX4VmLPKSn1xySbvJqQaqV56T59f7AFi5aHgUpQ1s3VP5sSG5hwWAm4dahDYJdp682c189dLB",
  "key36": "3nn2uwkRsPDDZQEBBSnUwvaw6ERyQxv4rCETF6b4RyvCaoK7nsH9YkeHwGkvgRAZA5U3Crc8rTLA7ns9eTnFr8oi",
  "key37": "5L6gCaGzLGkk9zjzyG1XscDcA7fyiNuxxFtPD1hiutx8ywLFPhNukVzABV53f84hyBaSEEVTnNAWD1j2kLLu8Whf",
  "key38": "3k9SsCk7hXyPXdEyP3mCnVw3o6XwCBH7pJURWvseS47Yyk8cfWdmofbWGwmGg7BGcBe1BwQisa56Dx3ZasS383y4",
  "key39": "5iLQrD2zaLwQaL4tQ3XM51fKDrkiAKvyJ9fXBSheCWhXqk8ss7ra7JH54Ye9rhiwrSRymtpphfQQ7nhPCegbexcb",
  "key40": "2pPAX7SU3sPxXQjihKyWatRRb3G8swdcXYM48kxeSnhXEgbrLh6PSYBAGvm4VxYg7rL13EuFLgYuabbfNUprjKG",
  "key41": "ifbxxhQt5A6fw5HtJKq9N6y1ucjii5pwqSRfou79qP7uaoay3veoVPXEuP6qB2kNo1HRwyP9z92b41TA2LLWDMH"
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
