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
    "2nxrh7eSaFhkEZ4ADmmhfwzWgRnkXJcUeJWqG6kfmrLnj8hASLiKmzs73T1nmFaaktZrN8NbVHmHz6fMFsWjsrf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H2raxYS361xtox8pyznkuvX1YFLv7fFJ4iKLKyfp6FvpdrB4y5afXLcW1DpGDZnDt6tx8ttMDa5QV9quEF75zuR",
  "key1": "3qqmnY4evgus37e1RUDK9zxh86v4jHccGGu95onZJ6vCDAfepcy2Z58qwLCUyM4gpQjXVepk9ifhu1xKJB4EDmVf",
  "key2": "MoKkXVoVuxNfhG6erpF1oEajR2moDrjF4UfHd4Sye8BTe2sHJWvjTFwK7Fr8Y5H8fi2pBhS34MDsYDwUWAZdoes",
  "key3": "51yvKUC8ui4jyegj7QS1xxBuB7up1PNcG1jd5djy4uXHDD9S8zrK5jU1qM2ysB4A9MWqcAjpznH4UrCkiyvYKpnf",
  "key4": "2JBYMk3Bnxt5mvLmgJLjUum3ZdRAcWzxkWQuCmhVaWnHPNa9zw3Rzo1MUY3ApXWs1wVhnNdiXTRmbNst9ikbSZXV",
  "key5": "3jz83w3TnVyGJ7kRVSqHhWYvTgh1w3VeQ5WgMz8MjkwsCdJS75RTDy8e4tt9ydVbJSguzNB74RbYwjchG13gw1Ke",
  "key6": "4rGDDqLw81xfz8QnWtjBd2A1WVf87aFJTDdQD6npvngQZgWZf1hx9YeJeKakM8gW4KucHmJ6CV5KCFHcqqk55GhU",
  "key7": "3PJdzhiNtczKj4tQ2xDMQ7dsVRgEUjtySgQ8pYuJLhnWSoeDH1SSYZMjhpzcJU8ZztisSG8FbqWXSLbJMVN78fk5",
  "key8": "UCNXZRkWRfQ4RV3QcS77zk6aNcLbmPVLWnUZfeki6KPGM7ea1gDgAgiatMZH6GXueyi5sDrVQZdLYndyguif2bo",
  "key9": "4uu7TpybAfh5FX1B2sWx7EyKzpxbwpF7R2ZUDCTKz4Ls3N3QcaUXTKYkVKAcG6YvVW2jqK9k8gyqpo4dh65wdX8S",
  "key10": "5LDLkKxGFTakfy3qqtP2xSccUbbGzHxP7BNzz2GoHaKnaFRcZdLLAoRenVkqyiMnAT4u73oJoQCmP7hYyjjwAJQE",
  "key11": "44HHH4wnjdtXFaBJ96bjA7SR1QdkQgcQc81vykFWUzBPJE9kyKZMQitAtUnkGY3ChAvBp1pCXfnsn42YXUQuYzAh",
  "key12": "5g6tWJnBvoT2UBuTqk9tF6GCdVwuGJqJMkx43Sk4TobNbDiAjbqoyzDtKycZzn3TPNw4kBq96Tu7XfMcGiFTSyQp",
  "key13": "29K6DEx7ycsAXmQx9f732H3bSbBjJJizgyFfkSL9jZXCHAw6H9DQqrgTGYz9xRxQqhxEr2kWWSJrB9NCe2N4aegH",
  "key14": "8Kp8UfF6C2LM3TUck6f693mkLuKPySJTt4a4rMJyVnNJkw1niFBfgmSCZzRgfdiZBeDQzZW1mAWcCeN2xvVmQVX",
  "key15": "4qf4hBytKeodghpVucyjsKRL6KBA3YzEX9PqY6oNmYhAJX5JSc1ja6gWBP6ockjDhzU8mX6QLZX6xKnKQyM4X8QV",
  "key16": "5Lb8gPFdaR13ZVWPtu15h5kXdXxHDNo1SaVwjzQgkB59ndtjiNER48qrigQWUTqLhnCb1CYZy186WG1bND9XE5Lo",
  "key17": "5ajbHP9BYnw3tmBZYkWJ8xTVczBd2KijBNQDNhqaYfXEjSZm8tfdtjjPenbCpAWFYWJMcGt4VynRTKVcM1vJEDT8",
  "key18": "3eqDEEqSSKkNkaqQM5SnH6KMHA6TBtDmEwrAncXLjZ4WqLiVvc3G46z3TfxJW4Ww21YEHMUmwUJB9s4C1EQhHyNw",
  "key19": "scrFYmKZiqKUWrpPn6pyrwcu5pjPsiM5YJgSF3wQpnipCmHQ3vaY5V8b1kdBhLofGNEzWWeQjboqEhDXfgYP1jw",
  "key20": "49d7NY3V7veELAw7sPP1DntfLnLNhS1y1Ehs7GDir7VzYZRdRojDCwnYji3Bp1dZFJ7ys5wFiv4rz9er6Vcy6Fvs",
  "key21": "5kbZcMqiWxN7ZrPPLLEFphtkF1Snfn1WdGFhxif2jR6BLwAo99XjBgPMB3Lwrii3fSCBzBDyhpHypCRRPSXAPm6s",
  "key22": "2fRuyHe8YGoLWJXu77Z4a4A8fCb5VHFoMdcUy5LTkApArWqc1BYQoecQKdafc1VxpY5szqz1UpRvfxtFuemzYjkq",
  "key23": "LadaSyJqwy7EY7974yrbbkQEVzxDFDUiXWCD74S8iHjaZoTex3ptRPk2act2F9CAuZy3o2aA6FhQ5esLsSXZT4G",
  "key24": "vvE88FgWiJQ9yaPUuntPVYaZWsqpAeR9j2V1xnrMyWLRNqAefo8w2bBi9LkmBNJoFLD6sUzNkVPk6RkZ4mAvAWg",
  "key25": "5yWckmSWXYVUAvzAB4VnHGEE8PRNDm5ySaihKJjgoRaAdA6sii2Et3UMbaJGhR7KZMez2D4JfzZojcZWRZ86hmTV",
  "key26": "7J26f7KPXVo8qsjfCnGPDRMrxb7qZSPjfN9TDvfJJwm6EA5iPawM1GHsNoeEG5BGASqS4PXNsqrmAvyZAKb3fzv"
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
