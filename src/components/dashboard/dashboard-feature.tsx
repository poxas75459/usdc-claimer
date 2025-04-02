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
    "5w2GVxw6v2pGxDxbgMFL7x9KDYo12XqdF1TY3xhKRd14q9qwi3bMcvW5z1T1rqN5YoawQ2GtGXvkqSUEuy2Lm4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2rrWHgUXyhN1gaZkPGDTwfFhLVbo8PKUrco7tUTxQjS52Fc3aUV7hsJwBgfM1c1rKHagwMsjvHLd3WCpQbL8Ja",
  "key1": "38BCCAEJsXD8JXTEZpmnfXmFkoLhsMvGNLdAY5vDkxPCc924sHjLXB75mvLixHwQRHFS9dfjh3GAxSAB2RMh7ttb",
  "key2": "358mjgtd7ucHRfzJWMSG9HZuYbgmjHrPheusyAxSihCQt5TxESMKYNADQyTFJwEhY7CMrAopwbkPgvgh1f6hxzGd",
  "key3": "jadbdhBSS5KJggtJkpN9UxaxHy7EyYoXNWGAS8D3oTBLMiSoKCoFmEv9J2YsmwWLMw2uFR1k466eM49dYZwUgJb",
  "key4": "4j2frg1M5EcpFpk9eHLvHoLPhauwyh2FEWVskeNp2E6KwrLxeKAwKZtQ8NNSPf6CdCyufAzjLpbvHqERggiz2eCN",
  "key5": "5kJPWeuFH8DFEhZJ4U4B7nWw5QAW7ymtnZNA4QUQ1AGSqqRxzaNwbDvKE1XrStka4ErYm3b2FJdEmyMF9GAhRuyE",
  "key6": "kg9WvMfTmawKz8TXCKLb21B9JtZCSDhMshn1Ho5ZWcfQYSxCZ7uiNh7wQxk4xrMCFby5b6CHKGa4n6DD1mWVWZQ",
  "key7": "3cQcjj3vSwbyhJALYHFDqVZn6TTz5ckreVCy7NSv2FCDuD9mB8bnyuP7Vss77XAJWjdQEdNgZtvVSiZeXqjsKzSV",
  "key8": "2UX9USvt3x7u8AW1hHrmoJDYh3zyexeZihByQKwhmthxUJYHqSC65qaF12jZcVZST7ZEoU7P5gg8wNLQJwmr2Usj",
  "key9": "3ZKj617kFzAWRDgdbeSKm5PGGd9A2QCViY7wN5idTeccP9pzmMgnBv6dEfUGDCfjtG2m1nWcusUw3vBoXViuFiZ3",
  "key10": "h6ruY1DLR5RZaALacbDEodHkviVPkiKaqcdSqkpT4oqXxSopEMZCLmwpmN92TtpgC8binio8ddKQ2aqTV94ryVJ",
  "key11": "DEtE2P2tDKNjsj9t6QrcsiXAt8h8s9PttX76dYNr3NH9RonY1JEpKUQJhLZjRSaraTwAjaKR6hmAaKQZTHTeget",
  "key12": "2DjcTNfeESqb1pUiQv2MdikT9w9jbx9RTTWCnzR6PA118dwNZMArJDZLHJshDE1ZT5SYPbWTxtN3VCkvsih3dLfy",
  "key13": "33d6MDQxLjLiUC7LEbRb6bjyjppjxXCd2hERgt1mg7o2j9NYMW5YqykkgSr7NiiR33QCY4KzXUFjJfo5cdVmVnAk",
  "key14": "39DyJG7UQUiaSPUSb1N8eQop97QA4W3spkrzrP8u4d1Uz18aoppjagsPiNc8Jkhe4zkAyYEGmtJSXuiaNMHyhBZz",
  "key15": "5nQpZpf42TXMHc26BMgTTA1xJL6NdFPtdg1cC4oDKZxgJs2q4898RFn2F5N6KTFabf1B2VobTrjqAiQ84o5ECEN2",
  "key16": "ugPAqVQZySYPsbrpD92ddgavEZuA7YfpXkC9N1Mq1xt1mCJqS5KLeDn2XwigXNaFwnUxqPzPpfyh7YMEuaj5GSv",
  "key17": "5Gzv9bFqxCugt6FxgymAy7ofhbQeeDTFMjhtxQLtEk8uH1ZWGQeA8qwPV8sEnXAYFtm1npwCP3WyXh6gu8CkrxSp",
  "key18": "2VDsGapi1QDobdoZmXzibH5X8npwfbuQNexqAmYSaBDUWPbs4T26yiWFXsbkF5v83m9PUQsiSdVN7JogqgAXRyii",
  "key19": "3Y7zNS46KrTpMPb4XHSVGFErwjDaT1tTsrP7AcEJtgkXyqAdCmMBcCaRV9by1kmw2icG93hA3nL529VYWZwn2PzF",
  "key20": "34LGUTZnfhiezGc5soqTZ5xrCkyqQDW71RaDgCJT6bsjFNSj2C6dydnzFroC8axrZiAV6mQVGYDqivPKefn39atC",
  "key21": "2NqSuxdfyvDSrixBaEFKZiSy8ErdBGHrHa6vMNWxPeHjCD9U3pMKNUZpPWgmaxLPasbpAqxzEnh2McZaqsdG2Liz",
  "key22": "5kf7K4arMsMztjjzHsh96phXkUCBXkkEVCee8to1ZBUXfvVPABZsUgLEkxikrBwojCv5Zg47QkXibWE9MswEXdjA",
  "key23": "61XrnqvjE41EUNom8FDUx7gzissS6zX2weZcm5pNAgXsyPsX3jQSYzDrHs1yR8Hn8CDbwYFtNP6c2fNhzf7pTJYy",
  "key24": "58JoH8hd2aoUriiQTthV1H9JCrfn9tjYb1PqVT9k8CXNU9p5pCU5FgJioZYhNWNRLiUPem21oxGUoRYtTbv6iZP8",
  "key25": "5G8FugWNE7TDeDCC756RUNE6fF6YtnugArzaytRe5ybeHv5BUAgfNiWeZs2eKtLhHiVown4C8NJMRdQ6XSMWBMnX",
  "key26": "27Dzu226yKfUi7stJq4chkuhfrAm9oyLrNRPV4T83uXZqz9vYhSy7sBUciXcAacfKLYHSxi7cJapg9gVm5PZ97Di",
  "key27": "WrJG9KQ2oDqwh6uymKGn45fP4mEaJWn9iMaQPSo4rRqJmf7dUQRbaT93fhzuzLmqBPEtPssMdyxc8kVuAPfFRB4",
  "key28": "239f3tokgDQ4tUhBqmgfH13tyPQPU1brjjq2Dvqa1uxxqn2xSXqPPKYSzrnhqYTqMPwbD46wbzCSgB2KhoDBHZPi"
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
