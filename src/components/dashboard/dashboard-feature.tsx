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
    "55BQ5Gg7DYwCmAF4TVdSdcfyyYmWdgdTsZs3Z5kdGpLSP1WEj7qCprCWqGbM7bHjKt3M6WPXjZ3wugVEhbEv5k4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jEcqboHnHLa4QggMzpteiXQJ3MaEtFuiC3Jmfo6Ak5ZWf6zjuSP9jN34VFRATQv3y8yVp6fjhzuD89za2cfEih7",
  "key1": "K5cfhnzBWwDed1ZcrtQPWwWnTz49U3CX8sqKxBVLawuoA16sZSrgT8R1Py8p2P6U26GrUMTZmq3cyBCqki61Yk4",
  "key2": "2nbWMva1XZynY8yGW4pyUCmw2vESLfkhWhR1Z4yJcMf15AawCkGTxRhELcBa4yMygiVatqB6LoqoaSGD3YeSgLtr",
  "key3": "GiUiuZJstcW88R8WKhiHhjJFFpe2T5wdk5qgV1DWzMLzZampeSNfT37XWVv5JMjxUQP3iprtatCTZSEYdiiGP7M",
  "key4": "EsJ49TVfwMSfYFsoPfGyS59jKqTMBfttNeyo9GhTUKJDeYtwwnmXhudWiuDhiLQVS1exuwUzygUzDJH8Vs8AEjN",
  "key5": "4GNLGWnfbipasDJE6henzuvJ99dQ8zJkKUMBRUhudYs8RwgkeVXYR9J7hm8Mq3km3ATYFacxSpPuA43cQqsKY4vy",
  "key6": "3SKi8V2qFt8eP98rR69SFspcYEa7GHttPpCMEZbiMx3tsAh5mtoAaupmvZU3pUPwJ349XDyJRu5zJ2YY4ciF7Me5",
  "key7": "4C66fvhLzvQ269cnNAmA8c6iCkUxioYouUU1eg3GyNCJH2wDT8ouVrW42DwNGyS4hECp7SgHv4VmjTq4AfEMkc5U",
  "key8": "51wgnHcHjHasmLmJUfeyWXdFqNmV9NHx3K4UWus76u8W162DSKgix12CvAcxiDx2yagUc9TzJFvvAsnPGVxmr48t",
  "key9": "5LiBPSuj1TkyrY82o5TtQfSVYh7eRrJh9pWH2dfdX3ogxN7pND3XpuAQxrLSyE98vSZzAjv9nn1hESWar3A9G4XB",
  "key10": "3pMHpvuZF69HcDNTJmYnfMUV5U4FZwQH15TF1QxEhRAKuRFx3ia9HL2i7odncSNNU1XHRF7G3bgMtRewbHUTGRyn",
  "key11": "5t4o5xpBA3jHRsshLbdrii4ynzToMwoTF6JfzXzuuUWxw6vsC3uGn2ZFj2Cv8yennZj76KgGVAF88RXm9qTMqhU1",
  "key12": "wAGVs3g35QQBED7wDd8t3LGzxxe7rKDdz2JUuCers5g19YRHgUxbdtwZ6kUUSB1Tc1XCNCjfppUUNzEZJRFovS3",
  "key13": "3gstKf3aN6tCebcQMZJJ3JB5LGFZjFcAE8hELQkWs2VJvKa3hxw3JZzxNGhLfbr5c34EJbbNm7pfibDDSVQnDMGX",
  "key14": "QB7uCFoVuFquQ4EBqGpuyP1rk3Er3igKJm7YmHdJ5U8DZmRJ2RiDAXhPuUndceoFx64ffz7sKyjujHbtGe4h1ZW",
  "key15": "4REJbgBZ5PovQgmUcGfRFWX6ycDHWVb6xmnhiwjdDrKBQHYNHeeoKYJrHnMXSDuVd3j9fnqdggFBzu3xL63SbPYH",
  "key16": "2HRBM6MngrRTn2w69RFQLoMuzz8Z8wKRRAvYLSqPw8rAk92CHfxB8qjp4ZMR2d6P4mamszh6pepAH8uMWKBherFy",
  "key17": "2FqZEwGkWU1bzD383QkWkqBSSu8cnBYQD5SBwF6ECnv1xrJmUdg11G6vWo3udLTirM1MosdR2evz8pSRz8jViysi",
  "key18": "5Ldv6s2fMcaafDFUWEns5upF65mTNcb6UT7FkZaDCEEk6Cu1me7rUm9aTxn8o2pQxp4D39saC1gAGUidfSyktkQw",
  "key19": "4VkittMbWcZHvjj8KhFr8pTR9jEJVy56n9aa5xjnBpLoDCiwFgk9pQucms9Qquthmma85m6YE9hsrbhR8H484t53",
  "key20": "5JbTKbqAtPzcrw1D3Zi9opXyjhXcmu12HDeeAr7Kn5SAdRYtvoqdcArPmB5qA9Vndc4k8gSi5NuM84uDYag53Zao",
  "key21": "2P4Bo2eKKvvoYUyJgiTqRdXDNfi4ReqV4QLA7LcS5fpRLtEox1bMFdmUviB3MY4zQGJnBm6d1KGPqnMHdXNDeswG",
  "key22": "5Hp5k1kACtcEBxUZY2zYE6bBkUxPKWnfCjoLoL52bXr66PFh4jKL3c6MyX47CfZBYrfSHeAbyiWSfJc3Ur8RyEK2",
  "key23": "5PaEp4ReiZYvQWMcHnJteyztioPqfLujqsHAwe7hNCSSjxT9hF9mCNFEhYmiM1iygN8gYmjH7nc5hw1RbdRSspTP",
  "key24": "5moKn6U7CZvpvRMBqBJZL6HYhV4q4LmSj4bhemwm8nRnX6hAJyjSg3yHdVqK63BJ9QZuHojUxWJF2d1uvjiMFkh4",
  "key25": "2LeZ6v4xM7raKNyaXQiaduP7pbLp6dVEzFuGAXrCRFxiaAzF34i4PLfe4hDcAsT26Z6Sa639VjY9RaJDBueD5VbV",
  "key26": "3ZMtxVfb3Em9n3QiBfWTXvMgW25LRJKouhq2Z9g84R18mFZnVFuaxaWFnzV8zJmFPkibcfsrUJR8HB1BfTtWiWHr",
  "key27": "4PaEKm4PDnhCGN1d5yk8jdiqchASurAaAgfUgbZSnPf76iGWvCsGHijucaaF9QpvxP8iEvMn45UHtUiwLNmnGKPw",
  "key28": "3s2eUNr3dfV1pNKACaTu12mmLPFBkCZFkinuH6QFYVtkh8osFyca4Eq5fMSUrDSavXBYqUeCWL4KpL6JcEA7RgV9",
  "key29": "AqNxc2tporj3pUMRrmWDBzRxqdLvKxkkTJPCxTaUbsKYtR4wBvWhbjKtxRd1tc4sUiegJTZRR6QFgzmAYF2mHbY",
  "key30": "5DywwVsmCtvNNKZjYG3DguDaTEZCWjrdBjbuHcAjQXdJDyKac3gzz9eroQCt3XnFYUUE3R6cSr3AF6RLgN7TUbzq",
  "key31": "2kKHzMovDhnKY4fnczs3yyQJe7tpskmE5wZnYhipQXckqYLfoGtW2cmhtpuiC8avrqcgo2676RxADTN7EwsBrYgK",
  "key32": "2mmz8e9gBdqaEuYH5EgSA5orpgokoxZaPU7WjoVxoX4ExPMKtoy4gg15rjoBKGXJ4s62nTix1seQzGmv1jFHSUce",
  "key33": "65uQji1ttYF1sPWmjBFPE1h87QB4yD13v1BH9J4DjDfaRodANQXfQHeivQLTVHo3KVcMSk4RM7etBNB2mSjbyDaD"
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
