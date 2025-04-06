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
    "3NkgWZVCTHgMcXU5Gk4BZPfbr1SVrNSwa2L9abWXaHSzHBzNi5z5qY42TVTfxTUbCFgYjXky56AXAyKgpG2BKtBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25qZyH5DCYf3JgXV5VQAd9Rj8sNf434YCV5KqhSJcYfHdZ9tFswLh3tkfr1NVx1CShQt2STTmNBWHCndgVQRVnGF",
  "key1": "3uTwJXZWmGfMu7vbRsXUKdGh2YPR1wiZpmqnbbNuTw33jUxEFdwUSuUhBnEjoVk2cD7Cdxe2HwVQdZRYGKiCgTDQ",
  "key2": "5o4EnRW8wi3wshNVkurqhPrKHufCTwcTJM4sgyj191cAaFv2CxqLrFHXSGDj64RZDs6soutAnGyAEpopkqkGKLVR",
  "key3": "5hcoibf1r7xajmtnoEbPEycjMNP1KtMXcabjFFeHVkLHDLpecT8Zfta9V2remA75gH7Rr5i996Pn4weVT11jAzLv",
  "key4": "4G1vNkQxhhYidp3JqDcJy1yZHCQSCNTSYkn9YGno3cfJWQcAsLCT7kGfP21Eo8xM8Vtp4uNmT22CV9Edr7TYg6sY",
  "key5": "tDJDaWVCeYAjHGSgwPAotBNWuGiZ2EVbjsSyGYmwSs5n77zUvEmGHMCQrGLksnFWZ1k2UTQabDCrn258kzepkKJ",
  "key6": "4d7the2aZwsddExjwhLF11Qavmjenitt452VNaw9hqoutyEgvucTUTpTbri4fNRsNv9NUNrrssd7YpFfRY9Ei4eE",
  "key7": "3Da5tDxwVWGGJRppVVWwtVpB5tWJm4su1N4Sk3ZLyUTK6DYtmFLQpUJgCtzVabN5TBehweCeb13KHbu2vMMbeYfN",
  "key8": "3sQjtxCtD84mcuqPLzGpPkrN1yzUinfBA6xwxqkBcBdCLtmCjdcDqcSyAp85DDgZ6R3DvYmEPSdKUbFNvLhTdoFn",
  "key9": "2x1ngM15bgcHwnx3jCQ8JmsJdPrZz3qWKRaX5Lqs9XyetabStDfByKST1QvqfGrrn2yVCcMK7vPMRem1j9ignNyW",
  "key10": "44cj9ymcVViX74y34mzBU7Fi5VvqAJm123qFBGogWzM7FA9SUpFgqM7YjiHJh5SV3vF3yA7Z1Kq6xudhyQVR2G8M",
  "key11": "9U8cM7BQXKfhxUzkaVnHjBdRftC7PJwRUNSarJppdGsiSh4kZbYMbvbBmn4X3QMvuLncwCjjDoMLaSgMUvKMo9e",
  "key12": "2v19wKDdRnJuazu3cYTHWViZ9GozNM1xLrRkh4fFbfKXYqreVKrSB3bD34TexTauS5b25bQvtHEPkmEFr3QJefPk",
  "key13": "2Fb75DMrZkMep6qwrHohEcYNyi2YKWBujo6SoVuSPLw2pLn9agD3tgBHzGic2k1iqWDEhowrFMtBpmuShBk4dgcE",
  "key14": "kwKKNJ4WhnH8crhnRLPbhhYYknZfXeJn5bC9oouP2HnKNmFYGJmQXejaf2tmn4vJV1rV33tmg5NeGXcDT5v75Rt",
  "key15": "3GXkJZq1VCnHdAPpGJuXA5ijCY5P3KLFR2KxE49KRuUSCQhRTpTHgX85Xp8RyatUmRVGQkHRXZreMZjC7LXJSi1k",
  "key16": "3yB3wNrsPkkpXbjedEz32wtoF6s4mQGKSW9fUeZnFDFVhhY9R2oxQziaq6KYvRUJLgVQiYTqSaDX586oodYKNEKh",
  "key17": "3a9E9FKXcMmjXYJCAZcJwxyh8FnCqoF7EHRhpUeahhsJDfzGVfK5HiVArrsaH3699e9qL64DDh3ZP91WtiZjcrjg",
  "key18": "4g2KPhSc8LupGaubCXfkKCE1mHQ9HbWbgHR6pJ7oMH5irgjHUyx91xSxihJsD7Xad4VN826CyvwEb5Yg8fWM4GG4",
  "key19": "2bCk81n46o8dt1jLBEciuMeTPyR5NAm6nH1fWaD5Lqvxc9cm4ajZ7f9Epn4YanwvYdZGCeoAXFhoxXBj3N9vmJRQ",
  "key20": "2uDtk6VALpxxDhWhC8f6K4JdiZMESdKoySherioxKN8U5RE4yBDLhujAjmC5d5G73BoEhR54ahy24eQXwwJhHe9A",
  "key21": "66Kkm42MwqFdDaXBhMc42C5mKuewHoWz6xi2Fyv4cqBmxs1sm6wWVFtK24q1yJh2X8A1k5wPKsuE58uTwSU3Pq2U",
  "key22": "4XUZu2hEZTgevn1sZnNaZmnzdDtgdjiHKygH8iNkcuS9YcMQ2qCG3qkQd4GDMakikhFuQcGNa2WLAQC5sfg5Lt9h",
  "key23": "2GmVC8bDMTU5FVN17WcoTrwQJA6Mm8HaDeh5Sd9wqX77LGbxwvDmT4q1ya629tyBQUBXtJNrUVy6zaPCfdZjXgxF",
  "key24": "2WuQY7uyCwsah7BmxPshrcWshV7p6CBTbCdu2881QW7irWoNmN5P1NF79fNE8vNg5Pc1WEh2Y9wk3oYFavJQNi3a",
  "key25": "5JjuagYoVgaPnndA2nopQBdpcxFDbrqUoLu2Y5bvqz3yYr9moyRng9uzqnB7vXEP2yunM6qbTvdJB6krqjbHdx7h",
  "key26": "e4UsQmdoxnc5XFWreF8b1t3h55biEJvotfYsRT5zv8Xfzv2ACNPUkFWfCR3XAiMTRmKWY28MkRxfpyQD1o4uZZV",
  "key27": "2Nda6H4NHPmN9enN7ivkCzd1H2UuqXKWNQkZeZ7Q9JCH4Z6n2HbHu1VkRpr5vH9xSSyFVgW9thCcWUSwJbSKUk6P",
  "key28": "VK6muj7Wfhjk4zytD8LkACTZn6v3vVnZWWnh7Fu7ht2DTxsNjR2tYkAkv9GtSFvHckK78xrYDJXNXniLaaHWhMP",
  "key29": "22LsEk45QWY4i67ykbf5GF9JZQ8Bg5xmM8JiyuRhvMmjRsWZDG4P7Mm2cjrpFZDC6S1tHuuMfoHTLLJixcxGtUXC",
  "key30": "4XZMYckrLwvA2NfwnqSg7mQenLCZgTjMeEkvtGMZQURTrqQrZuHeFiPDH8BADKk6gCWCQZuNMBTATWoJgCCfTkE2",
  "key31": "3WioM15fiFEDqarRLkekouF3m4VVxkEXGw7XAmxQz7pvWZJco3ZzZXcJvKc52LQSWLHJhq1YrRN82mthhwRvh9at",
  "key32": "62PmTcSgScnQwuvgrE5pMB4KWXiQ6a7gdLjhysFzCqoom1iJWdfQSAJQbnbMLxUSjnjf1qBCMxKW1PfRFmYp6Zyc",
  "key33": "tr3AFmMzvBmDpnHH5YdseZyRcZU54GdRqJMyMgmiFiWWw2FQapudXG91dtervzBdtAeAVGsvfwsgmULrLfcqBZZ",
  "key34": "3LG9Gv3MCiR2Zy22B3NwYbYvAiRXYp6QxzGpv8zLQs6jMAnDXmUR6jfDFxrrukirMFVyaKHpyG3VM7gW57iawkGN",
  "key35": "43n8GQyEf2rXpRfchdPr7TZGTNMTdtywZD2fy6Yb3FxU9HynS6EjZS2zKZ3VV4v7t2ZrjxTXhTFGjnjiMwW6p76",
  "key36": "61m8Y4bmRjWiw3XSMdwvQxDpSxawYgfuwck8Q57RnnbWyKbczYo9daUjHE2ZY2LyvMf8CF8CVZQ3q3FpeNTcxoMs"
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
