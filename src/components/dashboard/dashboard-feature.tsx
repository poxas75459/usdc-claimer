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
    "3sswpRp2TYjyZwVhEkTPrcbcZ7Vzryp32dzpRdT4j5aRPVBNZtvWwqSmPKQx4EVL3PnMcP5sc1NGmFK6Q6UCV4xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WfbKvsSu5pTwTCAhauZViEKqFrSmZKiJJ8AuYrLYW5ZHCKwF3WMtasYSrp8iZVbZRV8cVUCFXu18GRYSy2SWXnF",
  "key1": "65HmUMAWK6KAqffKeKAiF1m7K8JoQVV7kNxgspEd7GpEz5nozc2bNhU5k9fh7tH7Zp4Yx2ap1jE7J3CuLsozmaLN",
  "key2": "5EArnfbm288ugnHB3FVDN2SaDvNZpM4hKSjStgkQ6yD35kxBeRp1dr1hhyWgPNcfjpiNCFvFS5hXnipgmFjoi8xo",
  "key3": "3aNvrFjU5LTpqKVJ2KH5BmKaRNQ5CeQ95zvJPaxc4zFPZGf5gWHj4ruG62PzPr8f1ecJToqvphwZrywuGkmPqhUi",
  "key4": "rESqAUXxPyrVSDEntxMpm4hyvBCLX2hFG3coiSUSvqvAKTtEi2ao1p34xUxSJNK8rqJpivFCi6ZrxE9d2HJYLp2",
  "key5": "4v3fChuiqKsjfJYmcqJvahpn8EXnaCprfHftepjMB3SFtmzAuAKo1ky8PjVvrxqk1HkmRsmsTYP3fqXMPCvhL3xX",
  "key6": "66XvEdm3cddFjEGoTj5V25ih2QUA7cbNSW8V3MwGWbJ3GWR6T6x1sLTLM91SQaRFhrZaKKf2RBR3UCeHGN7TzbGx",
  "key7": "4EFmKPFWMnKS85qjTfYRjycrhmcmKXZNkdQ1ttGZgSVk16GfShUSbjP3BXw515gpPbJJ8fXnrxRCvu7sJqAQKjmE",
  "key8": "5U4vvy5B2R3AVULoDjWGX7xqE3pVPAcFDxiSFqkAmwQmKqu5tCNR1RYjqciAZ3R5ankN6Lg1Zyq98gxiHAitSUgv",
  "key9": "2ighQzty1DSPTyeSypUUi8hqoQYaEUdtKJqRQNdX4tH6GLFaLy7AZ6JN24gqJTSsiJDKWkJKzf56JafkT2Q2i2tC",
  "key10": "3gF5q4t6UxyWpb5AiEsKENKGvEEzbhUe1rNdqsXoHgKn1ZdjmQ8so7MzTT2ViA3Q2MDLqa1mmSP87SXbGXMTpyh6",
  "key11": "3DCaYcJCjoWmLBWM9nmhVhtZEhsE1UyxkiJPXc4hqb7uKszxxG8FsNRRFA1sLEq1h25YFWqfzV62cMhS2tUcouXL",
  "key12": "4eqMxTGFSc6LZJnCpJic2FCJcvUaNxoxbwwL98akKVFQMrz1RGBUf2GpPWJfEKseBAZtaXJGh8VZeMFK1xnrCVXw",
  "key13": "3DEs6vo8C32P4MrrACuCnRS1WFJtmiaMdHJ1GrBGgfQQGL7g4AKijBKK5BfgbSuKDy955inscJUiGwHMknej2ACp",
  "key14": "nTg551VSkuvhgbYmxBjBLgLv4oViUrSY1P5NUFpGrnqfeSuXfmfABD7p6nwxna3DXdFdk4TmWkidv9WaXbRrxQE",
  "key15": "3GDErodGmbVtSkNLEKGG6GGDqQ61be4ZQvASugRGsC13TiGaGkNE42uSsC3dW2FLG6vvnvBUV5hTCBJVeJp86WRL",
  "key16": "55SZL8twZFeA9r4wXe5npo8x4J8XtaPo9YJSFUEbaZ8Ys5Z2kb6b7BTt3kuMgg2pSBad7eHtEszjmfwwqMc7bBAF",
  "key17": "5MrNmpYidFyLxdZNqdd5LkVJAmxKLAEGwm9yYpqpcSxDk2MJXbXVck7wooqNkynHh7Vk4LZG5EufdPiSUPyaMDdV",
  "key18": "5YjkbmoHhnXJtLQiProZ5AzcFxpM6pVqiFV6WJDoob4gNoZH9km7UBYPaMygHwWFtXNxBp3dP9rk5mgouBQtGpFg",
  "key19": "3J6UBaUG7ZGWUjg2qmb1wSnNqqfjFAcJV5QUpgb4FCHU7HMrcB3shPbNCCxXNFFrG5yf7JZHs5MKF9mA8qkFGfdr",
  "key20": "fgmHSqaMRz7koZc5tuWzm9gsdciENwALCLJ6juf27VEKKmMQ72bosCdsm2vTs4m2nHWFP38P5s8cXUtRE6VE14n",
  "key21": "2kFs5NAHKjaGdSCvf1Xdg52FnFJ6SdqFjAH6xSgTW8wDPYgbQgrCgBBQ7kveWy6WJ7p8RXjTquP3Jqe4tbkKqUiv",
  "key22": "SLvb2ETEgGBpvh1yua3bGJtkYKhopk2GqQgqg8mRZbvmF4NGnX3X6CJAcKNrSoykB9qbcgF8JXNM3zPzuWYqmYV",
  "key23": "aqzxsfb7ktkUZWJ24b6iKdAjz3s7HwwN6J34FhWafMkXRJBpRewfThFT5jTo1xjfBefNT4F9QgUKU5ZBn2heQE8",
  "key24": "2bbDHVzfNxr7A2AF2vYZb9iy5WXwXVHcLsrxuwxPLfQsjCzXwsUGkrfpwAgSQFeeduVYbpKNDyhbgmUHiJn4dJHp",
  "key25": "5NHA8i8AriLJNPp9zm4Bd4bVQj834En2RnNgG67ibDYWxWL1hXmrZusvzJciWFUfifjkpXuaU5BNtVWhvD5pRzxs",
  "key26": "32gsqhxpHH3mZZdzFcepnypMf367Bczru5byvowZbUbaLGHxashcmTGzWBpYwigpDoD1TMgPQvyAj4tfUeg5So4n",
  "key27": "5zPoJeDX3CRaWuwZfProUQWtdNefg5PuxaYTsyrubBpK8nHGSggza2thnWWDzXCBRPuBg1qyUvaMV6FAgMJe4pAT"
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
