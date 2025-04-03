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
    "fgkEXMtzdwDWgRiSeDaLNFqYSFrVAhhQ52mf4Xy3wVSKJZpcqQXVKsxyJQJi7YFQWfBLXuwY4VW1n1Y2gojqKZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7XouRujSDiou9uNMLraYxYcm4NC5vZ87zUgT6aWjZ6uA87zJBsCjAsQFMYcNCaroDWeqyLV2JQYEzPtjtCDfJz",
  "key1": "349iLxrf5hrRrPa99N7ez4mzbtZqMz5qLes1JpdxhmNniV4ccLAAc87z6LDSxBh5KicQtcgpkVL9uJqJXMthc17L",
  "key2": "3AfFycidmFnzpvN5fAoYw8XJbqATLuSQEKHjESHrX8Tjtvg3272xgrGf37mk5YWbVuRm44sFTzL6yD8ELYBFEEb9",
  "key3": "33L9d4CgCqKBiLP89fXBGpFZNKQYyW4XnokEp1e1bT12Gk1cb2NHF1UT8G8M1KTM35rFLd7rnfRAjRU6cksLiJ5B",
  "key4": "5BZb7dyDYYjQjxeS7FeCkWLKsSwADFLRtPpUECDjvMz64gamS1MPgvMq6MrmBMK7GTXU3tQ4ENwTJueDWfuQXFzH",
  "key5": "4RXPoczh5VpFkE9suz4w5tY3sDhvG1oQRhRP6roVfBwKBqmqv2Ha9rwT2bQMRnWRGJP8LQXbnRMFwvY7hVa41j4n",
  "key6": "a61pepvpmXWy8oorvAwoe2Qiwzk5HHAVKqCk1n8EwwMKFkWpq79Ro3QsrTtdkbmsDPfKW3gnGcWGYB27wxg41Gr",
  "key7": "4BzqLuqJGaWLHHHCWLLYnL9tzHBRbt8XYBPdZFz1r9uSd67d2a65mWfxGwtEKzbgaAer8M1Q1SuuFC9mRAdnQFe4",
  "key8": "5rz6f6rZ4VaXmAR8umtRXrXo9YuHXe8K6Sy7iUV4PooMTTrBJXCwQnjA9vx1LqDumY32R6xfDFVQ7s2ip441SN46",
  "key9": "Z4dUf2JYP3X6Xksay16NLtZcCEg5DKQLXFpHKWbSVNJgjHbTrXYTA1MKCxCCoBkh9u2T5YkNZ4DoB4mxhWpmN7q",
  "key10": "M5wB9gihTowRnmcHrGgCT3cmfHwmPRpddLzUViZMRDKkvDML1QhqJFX4xUK4mqaowBtCyFnUKYhnZ3SvPWx9yBd",
  "key11": "3jFVVvna1YND8H2ScZEJ2WtqRJxifUJiwfv3ip7KJbEvnv5QmMxTMLha9WA483pwMY9y7B3Vfx1EJhrkjAvce3zr",
  "key12": "2zoY8rfEvLox1VYsHezvB1cqedR6XWVETHQ34FDucYvf35bwAhpRgbG8giaEhUcR3BuzGSAy4PJ3hGhAkqkiYNBZ",
  "key13": "3eMn8CqGTct7XCicF2voyx89Ewx3a65HmeKw4TFDMEfiusqsvyayBBStGPrrGTkx8Z9cSv8jdFSxhqrLgPk6qi8J",
  "key14": "4eoU6mS9PpyhDzSfGPzgsRGYxFFhJFawFvyxrmRnRoxKuPQtjN4QHR2R9kY6ASYgmBavmtfQaXJJPqMHQ5FwLUZu",
  "key15": "2672Gp2vXiAVaqkUVHKxuCFx8Q5jEnHPhPEMxsS4WfGu7vXpZRNSooggBe9LvZEjAQqAfqtmwC8bY3XWuKQVYTX7",
  "key16": "fmbUsfYZRw2rhaBFSFtQqNbLz2NrKeJvn2pJk3V6d4obbWt2BvNJZ2JEwaLJkK77QZxAPJsWX87C1kjp7GfMrUe",
  "key17": "5be2B8r7hdXjQXx8ggmzeWd8dcMiGBLC7nK9CFFgtRyMSmxaApnYJikJdYBL2ZKvh6kGKiq5Bq63FdbfXd4njJL1",
  "key18": "BTGbxoy9fnmF4H4nc5wAapUkF9uuvRbHHTuSawqemDiBvncyHqpfkdMw4H5QBGiGVcQe9q1DDUL4w22gFocW1jz",
  "key19": "2hL49W4C1GEorWafqsvTdN924MjS5SG9tEPCr51WDxMBoKffKvydDef5K94qT1fgcbkubUcFE3mtfsskzu6w2qMB",
  "key20": "5w5ToMkosNvSqXYwFUwHFPjiSYYZzcYVUfwJkjYi1o6zFeax5V8nPB8afAcqjuK5UM7YU1FhWZaahUEKAPuT9AbN",
  "key21": "5mRGpjWqkVtCquaP1TPxPZ41rWWHFaVZxv74SkBMWHxiEAgE9emH9sjvh5nkWYCcGPgqfMZFMKn84Pgk4mKkAdRU",
  "key22": "KvL2uoH71tK54wUZgyEg6fwzwFA65MHwXM54dLeDofiHf8MSbbvVaFKFJ87mNLMZP3BbCc7mj3gV7V3FovAU39d",
  "key23": "2VxDxuxsgjG3nWVAFGSexifPVLqYBWSUXHYGmD1iEHZfwnXA48HNHM4a1JtCoQZBh1Uzxz7Wrw6fxE8k8obsSvY8",
  "key24": "D7DTijcQsuXuTPSRT27nf8Bfbgw3QpG6EAr4Sm7f2LMEZtT3NAM5aj3Kng37dNm5KT5gPoUGQzozxvfZCbyT8JA",
  "key25": "5J2uVYXpR14oMHEhF94HQAmRhZWiUofwVHPDZcyHGUQdVBS7pigDiCijT8ZZrqqpxTswFKnyA4Y46PSFr7bm7aGp",
  "key26": "3h95dSJxJUSSYtNPugCsSKHcysGWAPQZkpMhsUpRA2LfrxqzyvkCpyivXbvLi4nxxmupfaJ8pxpNU73E9BDTGysw",
  "key27": "3xA3wXwTQm8dCU7M8k1irzk3MZucMRdN1FSDAJJHCymVvrcnAUD1L24XhsF7L5c9TzC9nPChJbePeTzTx4uCHhga",
  "key28": "fzFj7ZPPWcX9ztdJtBNTpzHUPyyGV32dERqk4STL7gD1wwifv9jRkAHrFSA2mT7ELQurP41odQt7uAX3zprntWu",
  "key29": "Z1eJBweZiHuw1UtpRngY2PEbi3sqSpaRGYm2b6m9YoFZBrY5JKLsmCy9rGXSq43FfyGyGs7iMRcmEbP2nj2F5ZV",
  "key30": "796Sa5V1ZwmKeBeyWH52biRymaqD4TAtwAnWERL6MYCE52LpmxwxgY9AR2deSg5SKbhYyrpqW58c58okWQmFFZr",
  "key31": "fd17DtyvqwPT5GF4SuttMYBEJPXesfLgi2uWps8zVULSQ8iTgqypZsEb49wwh3bEoWm3PA9PUSLqKCqRAMkncHt",
  "key32": "28JKzXMcQ78R2UFJTMEQHWgxaL1nNJBiXvjfiVfXXyyJ3KCiWo3Zg7Fdfc568HDxj47CaVScMojGBg8kNHY9SCYY"
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
