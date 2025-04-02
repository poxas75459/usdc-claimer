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
    "4ez1mXuzi4xh8bXnMzAudNmp9KFobShSE1PCGZmw6oPHNn4y5BXA4MFLB3HsDiFe3JLdEDh2oiZkqZEFTLstF7tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52jQkFLLHwsCLwxFryUofF23jgxAW1GKLsqCg8fHdUpEX9TnKdapsLjPd8k4cetA4j4X6LmhwDKTHbtVU8CABefj",
  "key1": "5y3EWPAdSVm9VFcQ4kpZKwdR4pCUwuFRMxAmuGvbYHWEccC96YS9zs6Eth6AJ9fTP3tNhYhPnASusfF2meyQAcHk",
  "key2": "ePXrpL5Dbd6CMWmJDBhN14pShh6ZPEs3kdJFW2G5oL1wpBQcG85a5NsY4KqSyKKFGFZJ23XN4DqHgSKVTuwX6zS",
  "key3": "2XV8CwZ4s2XLcWoMQb4SShUJTfqHx91FbaCP4eH7WJt6JcuBM7yc1vVArQ8KByN4psiE5bitUBBHLnxP4yj5h1XJ",
  "key4": "4kveXRVpgwzuk6Vzp5JNhrwhLJqX7KYcCqsYmq5rP7Va8qoMw3rmhtcyL9H7RC5zpAoiRNfFkEHeCQSoBN91ZyUd",
  "key5": "3V9eCn3CWfRxy1UtW6Wg2Jj4JzQsesLxThvgfKzHqMhnDMNzqTTxu289znWnLx8LDZeuWQCeiZFXPvs2Q5Hac5ht",
  "key6": "5x4CkTZNuSdcCZTuBZLbydRTrfbinhHAFf6UhqARY5Hg67FrR7bUuPHCpffDxo6p9sqHA5SaGzcoSA8iW8GSAcz9",
  "key7": "29UQpTQ63ii6Tc97NKcfFTNvXx45zoU2hz9sJTfkyt5GbVahZycTfA9fYNVxnU6BMpVafd63QQDS3GmVouBs4EaE",
  "key8": "4wPaCP6ZgxccgDbcKxGsQ8c6Ezeyk9e4ANPfZRguovERRSFpM6N7opWCv5oGd1h2mTcNLA41D6pg6NKRYVcmPLEh",
  "key9": "5Cs2oReYZX1BDvzosGpx1YcZwYmfwgK1qKdGfUXBR8sUPh6TT1NRSZxjThY8r4G4M23Mnrm39rMrB9j118BsjGhe",
  "key10": "36tUfMzGycAbjXESCQE9jEFaTvixwX148NkytxJ951NeCrbk9XQ4uPsA9Qqvm2Gp7mmibYfoNUWE4XTfSY86ydB8",
  "key11": "6wEsq255bxB8sUCUXv9y8vTmVYL6mECYFrizNWzEGF46tW467CAX4fLdn6m2yWqxzzkFwmvV3koaPi3DxfPQbQo",
  "key12": "2eUWNUnNpFFqQwymVggq5t9xmH3FvjEULJaGJNpnaaz4x41hsgDawUGXP2pA6E4HA8Pe4c4ikmDqn7LfT7Qu3rMB",
  "key13": "2uhK1Q97EMb893EnnWfwBwC26FeUxFw25M33sq2TXhCjjzFbYc2US1VqNLZntdCm1VR2Mjv3tjwwaiqzN3Aw3F7Y",
  "key14": "5trwErsR7iLimhPfPj9Bsye8FYQkCwgx4ntBBNacRGo3PMCT6kq3S2C6uZygAsyiZPADaPZEy7oq7c5WsjX8shLv",
  "key15": "54Km55BE9bzR51GwP2Za4hgLF4dUYSoNbsWN369NmMCwBnMk7Vyws8t9hat63phjfwtM9tbGTKugZfjJknV3CT4s",
  "key16": "2K4hvfn1PeermE5mw8qGrJYKwNKHLoeveNA8xMugPUq9ej83LVibHah1Zo5QgjL5TKFmLSPokLngfAzRWcLzyy9t",
  "key17": "5GbEC6iaxMHoDrUxzpt7hTraPRrHg8rYfFXS9ZfZTtxt9Uzd1bZis8C385k6btVbx6WKCUQpwAyp3RKybDm8R3uq",
  "key18": "62GXBaHexMfEuLY9ieyQzAkiUvU3s2nF67TxXK5Mn91tvbayRg8HD26tJzKsphGBCxXqVDQwRK4WajqGeSACvpf4",
  "key19": "4dZo35hNb8NBQRmzee2wA4YBPH6rWJaGGzrGcKs2eNk5nPxP5iSxcsV5K8GMGkPFRUk19bBGZWP3yNBBWKEzs7ps",
  "key20": "GzXTD4kLnsGGGQbTkMUY21EppuBEZt7ufptQnuCUUAvP4QNLhKAqEHQsF8hG86PfbmUz5Lq2WuQH3XCQPoVpdDG",
  "key21": "4nDucHk27b4wN7CTrJwnrQvZ4xYNr4UppkfNm78FfitU3uCEvMMouTVhuRhuQZhmtx3zqQmPb9C9r83VdVXsuCsi",
  "key22": "6pr9sQZZeFz88h3RUnRCvyvqn7txSmVXbZFapRreQhkWap8BGL1oSSmN325ZfWxgSrahBwAr4Bk8MLvkUQtvDrs",
  "key23": "5rfCtc7Gyahqu4RXF3WHgGXs1dVCAaUdPpyfJwz3H835Rxn6DcttCSxH6AuFJnwkoAEy6GCvKVzd6BoaybSyjxJV",
  "key24": "3ct3sFBrytUsoyxp1nQ66adnUS3TySYXe5nv7s6SjN4wAecEYL5CGCgrY4ycymPz73sFCqN3nv6JLqqVw8SK1t7o",
  "key25": "2v83SAHqVkFZrpkUaNS776am5jfE9c19ymTW2heW6CUrjMzjnn8h2Fa9mJDnwNaCPDSdofDvs9CC1KoW3Qxbvuiq",
  "key26": "3mjWwNPTHx6wJjbwGjmUM5E7qPCQdGDTaNaY4e7d7iivnSyNths9zyDbczPE1H5vwtAGWGdBVSfCaTksUZzwa9r8",
  "key27": "39Mo5qGgQE3NRhYMrbWk7Cfkh4HtPR3pJh64waXiYhdqAoWjnPerjnz2xhbnih78ajr9A5UGpniRk2ksgSrpEKoM",
  "key28": "sS9XTas5xgt4Wjaixk67fqPByYNsx1FQLjoHhU25dW8uwgHnDNrkm1cPi8x2CsCoeiU2rLFycreeGvNY7xGGXzJ",
  "key29": "47VcHSRXp9uQyXm3MUujjAUcZSY7CcVMNxxPm6Ph46YNBUCTSZEeHU8Zp9sR4zgkVcgbWsfk8hJDHZcff3z2v71V",
  "key30": "513xZhUCaCJPWqZFha21yugZBQF5TuExkPHegGJ4ERXDtbmEiZKdD2bxNCqnEPVvfwrn6aWHp6ZbSKxZnxP9pFHj",
  "key31": "3aJ6HExM7wLD5xygSwTdo5a3Y7QGmZodZHtteF4w7wFkcV8pwWUC8uC8H8M5XkvzppMxU354MixogjyBaoSgQn5D",
  "key32": "4uQLJpBzSvqdtk7oCoUsTi6uuKgYR7gdCengNnrWDmTfqQEn7sGUmzkFeusiA5MyFVyvgjShFoxzNnC6G1zdNrhL",
  "key33": "4EfbdW2c7xH9mW9RHvQsos7du389fph3W3Zm7jMnS6m9xbx7uadv6JbUpgEGa1AFBM8kgMBdodWrU9FBJ7kP3vkk",
  "key34": "2QBA7FbPZuqaaLxdZxaqiVp8d5adfdm5YQKqDSvKoPCJp3W6pF6Q3nGQNdWicVCwirVoviu8LtmptyssWapmvWG9"
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
