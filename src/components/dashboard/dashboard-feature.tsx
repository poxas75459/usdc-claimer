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
    "SkgkoeDyK4wjVdy7218VYuURgP3oRNfTTC5rE4JKBTWaXfHGduLAHmmwo1A2mXG1Kv4FxckoRBcQ6kWZyJFnfQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WDd5R76DDYu1b4yMVuizrttEvN5C7EuVNtADQSpSsN1ZV9ES5nXandi7LM2iLQV3nF4cStuFvB8ktKaSv27LsUi",
  "key1": "5xT3BFKhLUJ2nf97ymcsjv5BNf1Jb5sPNixdwkhqP68AJ57UKMatVwnAJkrfQZQaaCf3AK28JawfNZqkUc1cUigU",
  "key2": "5ZbSUGF6ASV3Edn3XmgeqCZVAaYxsAKFUPAd59d1E4rgfwT1bCRfN9iU8VEYgfgNSo3YbrnJ68EHSZrGjqpbeK2D",
  "key3": "2iE6WsdWe6BSwzGuzjuMCE728J7HHrnexHckYWdYGGjJij4FR49uFmH8ZYxeDbJonBkMCG7iR8vePgzhnQVxF4dK",
  "key4": "3U4ttQ5YfGaxYWeo3hUa8d6CTUwkj1CQXxdsy1do29mCSjbKUC4kdemv1Dzui4GMPCubyjxZGN7haLpyUXEkdCki",
  "key5": "5HgDQtagyTQRtmADusEfz4hL4ahKS8jJHBivgHXq9Djb3KKqcyrhAMyY9SFSnhRPK6zpmBN3Q7oGJaci6DdrzrgQ",
  "key6": "3Pxcah8kReK3Br7CcrPbhkesm1o5ypQ7basKfKN2keCVKSUnE745K2totBpZnhdPKwUz3k2z7AFERyQAjDswW8pU",
  "key7": "5cNfKtU3iUGxGbSzvadM51T7Eea5HhikMPYUPRD1uABY6rqFxg2e5Lo8FqmX5YWxaBSo45FrNsBLcagQrM8s7MJ5",
  "key8": "TZ3gaSubG6cJ3fLrMY3jCcBBLyQzQnjheWPE8bq6ugfKTsr168GewV3WSH1UJRNfsEcULYFmm1ntYc7szr4DfQo",
  "key9": "2U7GYedqXR5bnVDV5P2dDgsyWzNaZWCXRLWDJ5WHiqUzi6JWTu2hbadsMrQxnaVwpc7SVvwHVdAzSm6E9uC2EVEJ",
  "key10": "5Z825KmrfqzsUS87JX5s2qhKHiJdDTmhzHWBSN5k47txhZgzFjo6tZEmXsF63ReoYHXFW7b6Gpq1xaaR6A7FdJHx",
  "key11": "5XQhD95X945QctM1By4imTz34hbdmSx7fatDrzQwdLFjpCRTgYr1MHC7psFjNgPDmM4fCrdeZNUYs3KXYajKUifm",
  "key12": "4545PtVcPWNHvMUX5TDCTenjMFkgJvtZCs16wqEHZVzWsbarQKE5rtmCs4ivLSGe6tfEiqeKQCfMpq99AebTTqin",
  "key13": "3gGzW5cbMWWokni6WVD2Zd6YaC815eiFzsk2X4VMg9kj8WGJGvU7xjDix5TAAZ5xC7Tm98zUbtZ6SxGFPD1FC9rG",
  "key14": "4LDLSocae2BVnpGJSvjfHthwTutuunKsK1pnUeQAjmBEcHNPU5zweBrfXkgoJWrvMK5jXR9BgzZ9KaFy1KUXLiDS",
  "key15": "4hF8gZ2ZNE2ENMn5UHFc7Mz532TCzbomQohitXTw3aJF2zUykf7Vbng2YG3kLujPft417Umocii7bCzGPtFTPHg8",
  "key16": "5BMWWybnCPQ3dc2A9E4nuee6sYoVWhBCFnKkn8zFHaLQ2UnEbUZtoWQQrquxCAWWfBfxQP4ad7G3bwM1EJjM7KKU",
  "key17": "49uCW4va4zjiDikUKgo7Fe5TxKQU8bUjyMKNbwKcmA52TKkJADJk6uB2XeLznyEYpa1mu4J14DdnqUoULmfcTBrd",
  "key18": "5yNeBmic8M8EMertvo7czFj923HipFnbufsZZLcYenpPG9MuwDkr51j66STXSc8VQrya1qN6wSBNtkRYFD6QE2sZ",
  "key19": "65P3U8cHbkQHvSn9i7ueM4N95WMdmYm5mzognr5mynf6jX4aQ2tjXJbUJJkopfCGxG22yr8riXgJG9qPdZ4s8ptP",
  "key20": "NdioKcMFFjnH3THp2DGDHisEytJMWD9vbauFHF5yYjaeSYmRrzWpN3tPpNqHEwyFFhr2iRxPWoJtYW2vugD4hfB",
  "key21": "w8V8SntPgyyN5Povkr897Gp3KNWqtny1tTycdioCbhyCf5LMcAc7Ypft5kVq8aJPEHRKDCQkPhM83xLzHCvu8aE",
  "key22": "53YSGhF42uRiivaTWA6Q3tbshqejDcEZar7QxE5h6h3EpATAEGwERY677LXCiQiunZLqPzgMj4A1rHdyxVWZhJmd",
  "key23": "47eJzERFERUu3BJrbVMEs5r3j7QdP2VxhFFodd1muFiEfM9J1bPbDrjx6ndtNKBGXE4xQTuMUGB487JMWngjYbqs",
  "key24": "33cTHmLfsUtV7XXX7Hidp1TSiZYVf9JC685reeoGoVfYgZFRrHjJhkC4Rb2iUF4ztcKH1bmjvdNWPEZCjXN5FLXz",
  "key25": "4VNcn62CCmj5pZHLvGu7jVGkNcxoMFFRymHLnmwh7LRfRp97qFe4YfWFiBT1AjYRZpSH6H2Cjfk6XVjogNKxM35y",
  "key26": "nBDvTLHToc8pLJsNf6wZwAZWjmRBvXzKQH2tP3xYGnz8oKcB4QStfFCMmYR8hciCFk4LfFisL4e2fny3XSN9Eeu",
  "key27": "37grqCSvEMBH64U2ivfGt6C8x3tLuZKk6cKhowbygsDruyehej1ooTRzd7TE2oq87Nk6uje21zV4W6yhLNgmfQkR",
  "key28": "G5b9JDAFhHu9ruMAmdAmiTHVgJ9v7HN7gXFPxnCDDJ2uttyDGvFLkgQZkgtS65Mqo5wi6sEJDuMwch5nVnwdmDc",
  "key29": "nXEpS4wYKjMjJxYRjTjTqD5uNsFWUnrwZcZTuukvGmzeSKEQLqfU28yLmF8RrpEDFyS6GtzcjKYqiciHjrq2DmE"
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
