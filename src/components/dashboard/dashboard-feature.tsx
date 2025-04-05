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
    "5498QtEbLuHZtSduJG8G7E7cfioikRrHtcahf5wA9q1ioZi4rr38GRxnSR8s7u6tMgKLKB6c6iy32BjGtbNAB4zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33FmgWb1KbFGn6LoUNNwEDxtmLU4LVZLXkgfumnhhE1wr3rxUkt4uxJVjEJn3yRLVmz7Q2kVCWjNwrKCUErbrAqN",
  "key1": "icSZPGYM65tpi7pJfWjoafArbcrQfMxqCQVMHJfSSSkXQ2ruaWtug8cVBsAKrjmWEXR3fRUSnepy5Zmrm4YFUex",
  "key2": "3f4wqg9ZHqF9h7moL8dYVzbavDmmiqdvsyZE9WsKdYEQDSxCeWyYiN5CyzjgGi1NwL4wMzEmHW4B2aaXJobx3u5E",
  "key3": "5owW7nHAoCHzdTXYvT8nexj7v7xx2aCcNKZ3DCj1bdZXgXLHozSdzZ9HiEAHgbbmWvinezoxvqtn1XWW4GFUrELv",
  "key4": "3S9ksXv1chSr7GgqJLAn7xdcGXwrxf9FCQWbcJrLvhrvKrCyt3hKErtCFL2dfA6ofjxMipJEANXbcFzRbtRmduPL",
  "key5": "4mSixZhr4TaBXHyJgHq1PnWiFJ6UisAaCV9LXSJ5mmAayZvpU77VTnq4FYAguCWXPcLomxxXrCY82zcsbscrgsiF",
  "key6": "4fYXb8Mw2QdkhkmBZKhfQPg7YVYA3B2sJBTNdBoH5ZfeVtRVA6dXCjmtK5tz5hqaSxHL2v27QGAQTBCiuGv26hEv",
  "key7": "2MsjxLUn5JXuhEseWmfk8U4NneHs8iDdVXb8LDAAB8B6Jv1ajqdaaRGVNemSkFn7p2dBzuKEK6WKMHTxCn3Z2YxW",
  "key8": "2zTtochx7yfjuC1G43fsPuhKEfg1J52Ey95rha6auMBzppdyH1vLGeqXkvrZWEpaLFQUbWZpjawubhKLPNEdL6Dy",
  "key9": "4Ujjy6ke71EK6C6B8Te8PZAa1XixbVN6NmCoK3KABqpwcNTvXNQxNsNTgFPQHNNr6pU1L4KXVaCcXqmtyiiEZ8m8",
  "key10": "5XBWTNFko7SFz1VzAVJg1hhbh5mmMp1ddUvQyMSRy1Ne1yL8fUMoJ6rRQdWk1JmD7wjK71MJ6bukZNWi1ZBG7XCn",
  "key11": "21tXFdJPUsrojXGhQZ8ZCLoowMjcYcksUJqyWjppboNsUWcfeomvA12HRPmiR2RxLtL6WxcsWLftKaZV5yFip3Gj",
  "key12": "c9puRXxwHyeEu7s3GRXJrny9LEe5GwHFfY8BPJEV2KBXLPWg1VRpaVUdTFj7px3gjAqnSMZzKvoNChVPea37gY4",
  "key13": "33fTFQvxS584R9tzr4SYXmLmTsgbe3myLLi6renqEWSjjJNkSZHvJaXn1ytHeVWm3qcDdnTmvdX3Fr85fjVjd8Q9",
  "key14": "5cny2yphDKaUVAE9BLBskVjduMdsdGis5qczMrQ9FnQTY3WwwrpLSoe4HzLLuSkUiQmPXurjKYp4nWyGG1od7r4n",
  "key15": "2MHRbXQCaog9gLmMy4t3a2Rhjhw86XvQFfVB84RFwvfcBs9437xeMPuYA26GE9iWR8t9VWSXS81jnCu7vPVJNQTt",
  "key16": "4vhDUVw89Am5YkAev8iW87CnG7rKCqqgkJdVavxnA1WAQYxDQrDGX4dhWQuo6JW2qKjaNSyNMufzeGN3rCe1qHMz",
  "key17": "3tEHGe4ePSHDmW5SYUu4A9cQac3jBud9W2KdCurXs7eNWwqcL5yjKYzDahPSFuLRoMtZwVf5cmw783TPZ5MvKBaB",
  "key18": "666fwwxY95jR37CrfSUCztzDJqshtsof3fufWhpDMQVnuWBsgDy1DoHssbeteSVHFXAGJzcDg4vdaiGEHyFpyCCk",
  "key19": "D7KY133ziLJ1pCrh5qmEys3C64xzG3zhmbwkCzBpbrDqsGgz7H6HXHU3AVLyKHwRStqPbp5gUBdXbvsiheYXumL",
  "key20": "2tTFkHkbMQxkMTej5apKKLbKy86FrEoWC86W5wKX9XCQxe3XbnDXd4JXkvB6wnStAyQbYNcCTn7jajkwNNCjxNhv",
  "key21": "3NhaNiSn1BuZuH6p1sDQPSS4NdsmKxQavuUyhWfLbTALmt2Nf8u9fZ9vtynWVdZMJfHM9MbpoTY3TQRHy76YWS1c",
  "key22": "akqR6qNNpk6njCZbz1eTae9s5GutqLTnKHcVf1vcjYrTsubvXMa62hwbB7k2XKSWRvEfeSnf9rwPuP3UNyiSGNJ",
  "key23": "TP9LWbuSsNgoWzgnTMSpETVwCiLWDbURsiN9F4ABm4SzMYWxmCaaAbmA64L5WgWTwweSwBuqDNr2xwkDaFn1P4a",
  "key24": "2pREXtfLsbm56YHibT6dnZLW8S1bzqodiehJVted8crhtMjvKPgkVJkG4gpaDdtWDYJrkFrgULDvUySyuoo1gFfn",
  "key25": "4tuMPyywWdeYGUifp63MST3Bor6uji1VB27e3k4kbDSMaHJZoBqWoYWMcwV6PMmNj5Pe3vXxLvovvC4VbKnMiWAq",
  "key26": "62vBsKZ7RnzmD8bRYm8fHLKrX6z5JyR2HMDA7SuY2KQfpGWeGJgCDv7bKXTi5yVvG4w579JfMGzTksE9xKM6XLkg",
  "key27": "4uNtqPwa7LFcEegwAketLvTEEgzaQhmoGHnCmB1xBfzAcU5wucVbbBkG4pyU29YrAf1dxKtR22V8m9RizNi7Tyvn",
  "key28": "46PmettbWRqTk4bpRr2axkddSWnutFrknMCVxhaYraG7PF1Q2Sj1uVmXGajVowNRtNBzKwp2BpeFiHEuzN3jkT3U",
  "key29": "3chdFR4Va1RdmHgjLFccBQeBWBdb1LN3mzP3q9s8giuDLka5U2ipezzoYfSqdWs7S2KiMSMM4GqPFxDchKXbUzzm",
  "key30": "421mMEr1QH7exP2Tp7MUxtAnjzpBbFGUkraPYSWnnvUzgcyvv1c4gsHqVbE1qVW54oGjiyJRi6rk1czuQP4sD1oM",
  "key31": "2eKvspsGCd56AX8tRLaYmaSmhVbmeAUPYTAUSm9L4PLi49ZitKwVrMuCQyb2kTSdjzjNLi47CQhTUJnWdQek2Nep",
  "key32": "2ZHUqVjQ9uFyqimhDL8L5dQjhTJjshiveFXTF8Wnw7WeDvjNCnpeXnBuYAETNo6brJvn6yqFHSdfVUPVGLUUzPXU",
  "key33": "45tjMdPdN1S4v4eEqp4Zbf1rCi9s1kfsKhiU2Yt3fpZLNd16bNseVaMUtRzyLwdr5Y6nrgo8chZm6R9c5qvcB5Z1",
  "key34": "3piRRp12Eg5wBQiMRwxz1J5z33P7YLHdnzbSjwWi56s5ci8vNNYZgZtV74nHw6PM9UNFSeMqmUmb1ZmwVpDH2Z8t",
  "key35": "4PuhsRKfGiMQfkyRy8FpetGcd5dZrDz2URfiiaW87rstkRGAhf9FHn4g3itLnC3XLggV6hQvETfpWKqHm7LEooK6",
  "key36": "9XpZkbr5QVqEkP3ikqY4PCBMVAQCBERMbP3MLeLWo2efhPnmiTteYMvKMCgU1NHf6fuZHhqzE4tnPxFTAK7xgvh",
  "key37": "48f6EmvUWwTazk3oM1qcZ7QtPc9PYRA33xSapcnFqbhPfSYeQdXSfqFY1qeJq2ETksXYu7Qj5LrgXMYMexAYwvhW"
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
