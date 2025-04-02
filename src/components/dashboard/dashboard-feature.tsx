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
    "2A14esccGQenihMuQauMqD6LR6fNWj4b2V1ENNGfvrkBN92Rt5bKMgemK2Xtc9iDLEtkVri2QQF5j5qE2VdiBBUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dakuzjxTdU1EPtoCH6Edp3Y8bFNZs18kfGkemF4122E4a8nyWLPtbboYTyUkwQEausaTz4sREVHyWAAe9xqReCE",
  "key1": "4utujYojpdSYigEBVowUm8wwV1FDUkZQXuL4oyRf1Z4rQAZF9Xu7Xk9adNF7uewkCyH5knKMo5oiFCnHG2Xzs16d",
  "key2": "52VQJvvtHQu3WAA5FKYF7ErCsG98sjxqK4bsS5o2gcTtpvPnPbANSHTqYUHxgMRrKtd3XieymZQzQ9fzarU83fEA",
  "key3": "5hYH68i4LFJUsGawpmjdxQp9Mz7EtwdqZVEd1MAiFvHthWsTfDyeVEo878is57VNzEofhJAMjM4A2u7xceCAow7c",
  "key4": "3TxyzwWMuUGp9z5uB8R1XbQbNMTP9Q1pNyYpL9ARhjXt9Q4Gu6qfWhxxUF5ihP234yhyoXdTP5iYP7H6iP6vHDNY",
  "key5": "2yn8Zx2myExvzpVJ84tJHboDPskAHfvzFooQtL6ff1nwH3Kx2GfCMW2MMYE19MSqeZgiNhMst2MasK2vFCBK9YvB",
  "key6": "4mDCfqZXewgAFdU3jDURqDMNNk7Gtv2h9jk4oDfNa8cF5mZ3fGKTJUCfre36ZQhqAtkuR1MDBZiapwPrSsbqxHb9",
  "key7": "2wecaXnPz1PA9yQEP9y8P3AN5hE9drdB9xwY9qA5N4YjMQRkfRqv9ebCQPJbo53QjgrotXXx9cXVX6SyVMRPTyR9",
  "key8": "239TqvucYYjTSQvHXjwpq2kQgaXEuBcNiBa5C1PRMnqf75vKfxKNFKyMdGt9jy2z9PiTJK2sMLt7eYJ3vFirw2mR",
  "key9": "2EviKGixA2JtCA6L5FNYgsD4vTu47aoJUh2MN6b2aARZo7Svb4h9LfVD27o3mHsRp27zNMrBN7QBvvadz4MWqVNL",
  "key10": "615NgukcAv6KGqKQk9bZh7n1bV45suvvwfMatTCHCpJkbSjKf1N2mcCcmYhJQj4JAsDX7oQ82sW8uSWzssVro6FG",
  "key11": "24bt5NKGNM9Atyhu13RBeMTzvhsmq1qJyHLfW7PpySat4mE83F3UNp379uvyhAUEPsZXvugbixMYquL2ZB9MYadG",
  "key12": "3G3LBUgKpBYsb6XtN4p3ZnjykbA1fUXoMPHgZspBpmhapg6ouZfyfoXCiwmUnNdbx1JagEvXuMwxd6Bjh8uRJ725",
  "key13": "3KkqmhRbggBr9jxGdwBBwTsgJkBytrysyHcfqadfxH4JPmET8cLPQLZD26i6ofQraDuyQ3aHyNdfJvH9ZMfGwySP",
  "key14": "2d8HuosdWfr7QfWH6imqm2BKrP9coQmVGQrZUzFtYsmFwG1iU15FmPFuAaw5WUYtbcDvEeqs5xijZzCdFW8CYiLU",
  "key15": "5Z3Aey75PWPtkCJf7CBbtkfHSQsWYaFj2tYq5EVCbC8AC5nU2Ei3Ty9fJHuoDZ5D7DWU8ffN4fSJde3v6RKyn3Y7",
  "key16": "fyDQwaLVG9aG6d5GmMVx7gqrFR9BhPGMumSumW7Uw7oaeBR1VpcGLEXwyVGPBLvEvfCPHRJKDiY3GM2ZhY5Rnoq",
  "key17": "58yQdnUgLoX7JvQkeo2ubToS5hjbYJYabVfLxjxVzW7Ppm74qF9qnLZXtPr4nSBqohavrMrd1dTugPLh4bdEmBBA",
  "key18": "4hfxEPJYU5JaoAC1uuesGZEUHiRMeSsWkZ1cwNxGyEVCyB7MLnvYoozTC886exyzZmXBnK9XtQzA5sN1B3nt2UD6",
  "key19": "4gEeXNGHQZ7WFyA36guAevGeSbBzXG9BPscUCaCMbnWWM2eKwsECac7BpmX5uFJSK2ALTJxS5GzpUuJPKJKkXqAH",
  "key20": "3HqQcRkoHYRYkor9HRCPvZn4DjGkHGo7LEmPXtHu74F9ZtwJCjWrYxLiXgEMCpHK6mzgYLXM5gGp2GEDDimr1M37",
  "key21": "59zcazRD9wQTR9jSBswtfvCRK7v3RFeZuSLcKkvN9JkfquqtmTMZAExcRs6ozv9NDRbWb4X2tchUsVJUY2LyrNoA",
  "key22": "3xuTPodmY7DeHC1rSYRTTgjcqNUXuMX3Z8hcr8ffoPkpkjH2DtNxoWUL2a5AjwibWMFSnTofmzh7pybUTHNxjEZy",
  "key23": "4hfknvmiSdyhZ9AZqVjeNfS72rZrdfB9qRqkYkVwzNYTudWsp8m5PFKKh2nY2ffPD5fPuyY2Sc7PiAkLbHQxXsnz",
  "key24": "5icLV2bUCj2pAnxKdNF4RnhAawTiUC1RGEzaerWF4uM6r2s5u27pms1RTWoxKJLRTtZEmEsUJwcipahf2uncCKmm",
  "key25": "5WTJphiCg89LZsvPmnGU9rG15bH8rgVii15X9oFoF33SXV9fsbUPsi6z4RKfMV63RLAsqMJ866ehyGFd6egrkEmx",
  "key26": "2XSwsW9w8EP8CATKwqpUHeLuK1NRZs6SWrtkai55atMYHB9iP6CbnM318g4hnPRw2xJMpcX4jT4G6Qvhu5xbXnTp",
  "key27": "2NEexbJEJYXnekYKuhEoYj58GDhS8uVyCyDRyWQ4bpiA79PyPN9rycT36zcQoNhqxi59WfwaGor5EHnH8yPGqqkf",
  "key28": "VZXM9GW4zTtYaswzjSSKDpcjM12TNoxL754yWHNHzJTvXdSbmGrnSbLKNZcPoLhWcctRVzXATXmfweDtEg56yj5",
  "key29": "5ZC7WCYKBmcXjyRvZvCv2Tii7HwroCunbhZtZTxw8iLnhb8qstm14qdiCvTffcY2e2QAj6sBSyg65R8f2H1tg9Xb",
  "key30": "559DsovXWB5WC3uAp7NjtdFe5sCUZuLMWmaW3rwGrLxE32svAnVWh9V8tse9Pma1wzsq8vEg9GWWDQwtg4Qe6Rou",
  "key31": "5rXtxMkaPGnXA6ktKRQvtrCFk7BZYFL1LMNPb8QMzKiR3Jcjto6tCNhhbnAFJj7epkQd9jBdJYfz7J1aovdt5fJ6",
  "key32": "34J1hTi2NPVKQnnizF86sNL4etQynFkxgnVn6496tPEibz13MdQ6ED2xc7hQFRHhd9EhMAEfbfXH3vszHbzQjc4Y",
  "key33": "2tWjWa8E99WDAHUFMCHgBH3h4q7mf3Cq4V7K2wAcwJYjX1PSFMX931sKcm9LjhtCHWJui54RZxK4sz4QUpK81Gyq",
  "key34": "2rEDJpfjQXWgp6W5skEbbuJEaTAngZ3fXYEnrVpv1daVf1LeoDLVWWyHxNj4JmaU2oLnA5dCqGqy5Ay6D9fEsYnp",
  "key35": "5xTKVJpHDXLeTCsdkyTyHSiyfZXR1Xv3DTfgaRFmkcDyqAdSETThg9TWGDWZ3w2MMd6GFYNTuM3BDHajJYRmJP5Q",
  "key36": "4E4jG7RE9Pus5NRLM49qxZV9UawoVZ3kN4pg3vQ7XdeTsi8eTp8zHxzqBM63CeqYMGWGbUg4muKpnNjpkmzZAG7Y",
  "key37": "2W1WDuXYopMUYLEWuWfLDusU1ZqfbhenUBJc8FAvVXvvK3tCxH4P5hcj2bfngtyavqwcyCkf5a6bECCu8jj7cGvU",
  "key38": "5tXk5dPUNMFmzqVzTMz7Rouu1RdtLXiU1oSDCxs7DsTYZBKNfmAQaTn7FhG22RzbMsz3h1ZZba6mbB6ehDDGLdxt",
  "key39": "5x2tpzhXPuKUUF7dzv6Kzr5tQAMfVPSQYsLLmBi3DieYMVBct6Ps8yYWKj6Bs1JfDFYekxBmWYbap6NrKctbwcjg",
  "key40": "PqifJcegBoy5GUH2DPym2Z2yvJtAd8PLVrC9crSUyrL3NCqvzqxB1dSeyaABwaczyBmHAoCXmcX98yLJWqsaX91",
  "key41": "242mJzQHTcTFUoJAbzZu92iawGgpDuPufQ5CajLq6u5UK5wzZwKjoi5ctdYasuPMtG9NuoahPc6FzAaEauvCi36m",
  "key42": "56NJrNncz9xXemfsX92AfcZRUjLEhQTzVeNysCMVLb83sjDfT1PRDp4nseK5xYi8vwFidDYzbcCWcv28Mt4bquBC",
  "key43": "3ah1Kr2MvTLkBvXPVSqT2YefWbj6apterxccJbSUD5DJMRbBpBPEe2BLR5428AbV23QLxK7pgWmhFVYB9Wqcr6Ac",
  "key44": "c3syvUyEQYZfAumsAXbzk2w82LNiKtChb9HmJRgHoYmsHGUERXqAQAV2KR7hEE5MCvX5EVDxWnZyrAGdXkY1TXW",
  "key45": "3b7YDrWpZvpkZoLjjmxJJtrxvdv6gQfFm4BcXT46jQz22EYTwQLPkyE9kVuU6MPzA1xmSznFw2sCPeNJskFgXi8W",
  "key46": "2yksmbqxm7maFr7yPz9tpowtDjxyPxJnUNtZjB2pYpcsfXdWQDpixu5w8mQrghGuj1feeYmLb32i19TcfJsoqq6S",
  "key47": "5aZd2NSJZYKBDFA8CRQgcyw8TyRVjBd2DBfoirbWabwekcCm69r4UdpVcjcPu5Ws7dMKtdcBi1VXv2hDjCwfhcRE",
  "key48": "2TP2WzpsHnsb3GwFM77RoLVFAcaFEVw8dLrv9oEtkB1iD9Us8Ga6NS7xB2KvdXJPqsq1ZTq8KpGYFF8nFQo9hen6"
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
