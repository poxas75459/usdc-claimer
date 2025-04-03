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
    "TnVavVfq6zLecrJazNNkRrcadc7sUye6emD2rGKcHWK9XDsQgdNaeBSvd32LPyW6wkMTfZuKHqoNsrqwmgrJxHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vA6MMvLXc1feZArEX57EbMNWQVHRNC24a7k5ThifrVwLaHRAvZMz1Nd8GUerwZx9hk8vBYP61hYMr8Dek41BC6t",
  "key1": "5hGyZWCsbLAa6thZd1aZ3NSW6P2HErYjuLk8YhVs8dhGCnXxZyvWmJ179nEfmHDev1VXzPmoyYjm5oN5BdsrnfYV",
  "key2": "5tPs4d7J1iTDs7UHKhsJaXwJtZ6WGuTRfMNsrnvs3jpV9HxuPUS6cyuL71eC9bjNcfuzNF6n2aUoL461djmv8eTC",
  "key3": "3sN2dgfEqocyoBCctzgSCUYga51gwR8qHJzhm2LuHkpTX9SEJ9LAWB3tvtvHdhpg8X68QsXFNJuw9xXDEFaSAo7M",
  "key4": "38F38Pt96qZekF48BvKj4b1jtHK9ACfXVdGiYTAqs1hgV1nLpCxE1zQJszMGk3p638pRW9B9e5WwHSJuPGVgsAPH",
  "key5": "5Tj6G5bRTY5vcUPmMcy61zs2uyNT8bhhRNAMtLhsb8RgzcPphUMzndbNTfSKaPS8ZaCwAsGqdmUSnVSJDHBG5VAj",
  "key6": "5SGDie8SkgHVGPAFkZ2i3f7YmPbWGWY2qrGeHLZzebYFEQULLDUWthZPh89H1ka77NrPp6xTXXFeduazDqSMHdJi",
  "key7": "3rR8hB5exoqtawh7rKXzQvpXfXFu9VZJnaAkTmn5ygjouibhNSW4aYzHKruvVZ9rAEj5TM2S5uJzNZ1hH6iXQJFd",
  "key8": "2UxGuMPRThN9xLfAZZHzVMBPH7LgZVM6sDjUZTAHiHzpX9fg6FihU1FV89f5RS1AQ9vadPTrXzKg5d6pGG1TWjaQ",
  "key9": "LMMGdP5dNrY6Y1ui2e7BrWXtFRDxuxDYxEsPTKrjMk2rb3kSiBtKw9vcBR4bDnpz6KUwCCEU4QGULkEGEe9N3C9",
  "key10": "2b33qufq56UUbUR3nvuNF5BpPfpGbMHbHdbmXgWAe4UHF35H4NaK7F8fh1CeuF8snpGvkVKim1Ysr6PzGYkumvuT",
  "key11": "2gbotxrBVdDYgxnV578KvaAVdAUMvpWVqJ6MECvogTNFqV4B9X9jqH4FYtcH41xqbTmzgUfq1KPtVtFnFmwvFwWi",
  "key12": "7Qos1kkJFTV5K8tgUDeAqZ6xDLHaD2o2vkgJp9S2FFuLkgDEY9zz3u9dA7KDsnhRcqvzDScPhBaPXbGn1nktp2j",
  "key13": "jmdr7uxDgjr9HRyQ4sqizPLKGZ9d3L8X4XpGdrUWB3PiUpS6qLhFQB9F9aTqS7tWLQz4wjFuAjAnvn8D4UurG2k",
  "key14": "5onV8ia2myDdpt4xiLNuVqYhAMCHkKRjxYwrs8VWo6b3qM3mgfxfnvCRXgDeSMty2dEszrE2amkCveNH6AjSkmt2",
  "key15": "35izeHnGRYgZygb4P8Eyn13zDhSi8rCSPM133VpdVgtRW4CTvRSSxnLPd1TpcqUXfXXbHgoV2PRN8iA4LN2HK4nX",
  "key16": "2aiwRPuynMXHUCAadGSisX1qMMtYjfc8s1zNKN9pcDqKQ2CqMM4EUUoq84j1pPTyVu7q92VcmLpppD55gCSqNLps",
  "key17": "4UmcwHEEgEk5pqaZ2KPefiXbW9qqP2mZtniW8KMvrTWCz7zpNEBegSzW6Hgy6pZ98XPKyncnFVt9iwy8ugLu4Shr",
  "key18": "32h16waBM5eETVcev9pWKeMWBEyuwstWaaoGUzC98Ai7q2rA2Z9GFyrpHM1q9BbZAvCTcYheAjX7rQzJTonAhs6s",
  "key19": "5MZLKyNngDYnXoTr4m3Ejx1XftULKW1aEnW2tg1DdzGJ2gNrNGVQWMAk5B3hwSz5NKD1uf4ZMHB6iziswHpn6oWs",
  "key20": "385Jbf5HovwTBj2Hhv5PBnsFCEafTjfZjFietRE6SQHtWquAuKoSsNbQuze9REMdWB7QVv8mvNkC1T7ip3L5jRwN",
  "key21": "JEtbuRiVm99pFdoUjphDfTU7DuhE47htwWpjUJ8UmSmWBGVFhgRxNqHrYHgyz2cBu6BTdw3nBAw2JmpPhGk51Jf",
  "key22": "EhupZdnxa5papnuWBsNUXPCDBcc7Qcy8ppMVK4J79oeyneKCJPdx8HrTkPcAWk2bXyUfuREaLw65ABfQuipemy5",
  "key23": "3D2R6ajjf9UQvmiGfh9Gvbk7bXYU8wcz6jm5P57H8xk9cUYtE3QWYHuyxVFRDLLdA78KpTBn7Pg5zp7bEfNoJ9oS",
  "key24": "5AbsajpMYViwC13qh4yseC8aYVEiF4PBei1hWCjiRCoLCvX2UFeNvEyBUpfAuC7WV17h9Hk7Mq16AiHJFf3siAvW",
  "key25": "2XurE2XTziDDqQjQmBbE2yc5W3s3Dp7LLrsH44DvpoC4xdBPQYkpnZozzkSVHLo3tfJSb6GszvRzRPi6FvERSR3J",
  "key26": "32557DxhCexxwHnvzuzsVbrQNDnbsrUb5LHBXf2Faoid25Zoq2oo6g4u69cF2jgTfYSWCbygs7bUJoDiM2rycPcZ",
  "key27": "5u9GfUF5GGbJXJMgaoFKcTrTDGsN6wbmppAn8DafYVoHsKa6FhXPKA9BtSsAZMaAKFnBhBNrbCz7fdVHD3Zheswg",
  "key28": "jRe7Ci13gDBfvLisjeS8rLkEsTLSjMQLViijeXuqJLW2WL49WiSDt6zXtbpLiCm3hP6tpV4rfqAPL5FDVhum2Vw",
  "key29": "2q3JGXSXdL7Gp9V3jxrTf4ty4oD614Mr9NQcACCt2KwXU71GjEpmwvoCPA2imdro3mQ7m3wFL4u5WcTjR1RbdBC8",
  "key30": "45iZdBZUQ2EcfTWoeUNuP9JvVyuozrKUJSfcqgudBz6ACx31qjCCrUqxasTjP9kNv1ChMh5ZPqVQuQo2aFikyuNV",
  "key31": "4ijVGt1a5L9vfL9bGCmcMK16r4JnGZFSfASjV8GBDH2Rr3XhZxubrQAtbwutbkP7BHrRv1wR1qgZrNrp4qqVogEt",
  "key32": "5yR6vQ7vRLpLU52n9sBRyW1BZKWf17M9fyGXKCwLdK6u3D5EsRK3ZAjUq8XTZeDxyjaKe4TVpGgAHG1p7SURUweU",
  "key33": "345Qj9GonRi7LKMuEsfvweFFTfi1RBtasEnGceXNkWcqHnHMQEn3K5AfFmAzoARwjny76fH9eMBkUQJqxxW1sp5x",
  "key34": "64Su2oEXiZ8xxe5ZgmhVhMH7soQGkqiYnh5zLfJm5vVjMAbAB5JavbVbyKn5ZcsLbvRAYYkKzVwNpvzY8ZwZJKuc",
  "key35": "5F3oGfJUBvYTUMnoSJd7FZE1MzajEb9jKHkWAAzwiF8xQh1VmEWVSirKybmAq1cbCou3C4u3AwcMAqH8n7KatvjC"
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
