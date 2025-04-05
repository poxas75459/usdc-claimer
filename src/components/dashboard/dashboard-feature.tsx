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
    "5afv1GUm3N7nGuWK9kxBjaWYUtydEpf6fCJN42FQHY2JHWvoM4dGAgJMP1artbcWnturFkENHJM81nV8qL5Db3pH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2KVkMfamkHioSDTcP482XyQdSPQWmMKEyGtNdiuHfLfYnGNKb4Hx2Gamb2EZHYUtE7jthRe9kptovUE62FU886",
  "key1": "4a4xQxQ8dKZqewq1b6kxeQSxMLQkbWxMg9c76tw3fyK44kidcVCmhqjXsb5oJhBFxaBi3YSXPAfu6rp8XVKPA9E2",
  "key2": "4kvcaP9sTZAN4dGdyTym9YrnTGZ3kbCHgRXWoHeU8P6SwXittjHCsQJS4vaDywCmMeFNDyk7BvsoCf27W1zdVkGZ",
  "key3": "4V59wo9Veas7jFrmgqgwuq5XxSi9tWtitVMPQfz7KJykfU79SmzBsBJ1Chaj7FE44emh7esNUkBjjoVKUbsroby9",
  "key4": "2rh7iUNrkFvgsjf4Sn5cA4CZMpsJz9ppPjDrg6Qj7Ywhw7g2QHrvfe2HnVHMcrhxkuxsUuaYbiTuvCs18L7XUi5n",
  "key5": "2VM9bn48yR6b9RhVwff3u7gtZph8AVdDduNapG2YBPmJWqcaQTucSQJCZ1QUDBWgZC6YUxrEcnGnVEuEkgRTv47y",
  "key6": "5pGVb7dawmAJKPQ81d8q5iYfnHxmDWn9U8JJ3eCNBEhXna4q1EPYey6bNzHfYgobaxsaYvMc1vopEdHxRJRMhzrq",
  "key7": "4jr7XjqAcziEtDaeRwsqQ1DRzkZ1kJyaQV8TXYfCrM4VjZNoNsNHBVyWoseAZqheqeWpJxV2ZHVBJSanP64yTick",
  "key8": "1pwJmij2sa295hh5Fa31tz1MjtJvg3eJYr7rCSDYPYrKbPRGwMou7xjDABQfQmFxfRtLeUoDq7Kr4gDUkqkKnyP",
  "key9": "2oHgjTAh2D3asuyLNraViMJjqxJAEm7ye7VHQETyvgd8jHWEXMmo2XKtnTo9gXZq7uSTb8D69ckvY12CdNVhee9G",
  "key10": "64BnDM9ASxAREWqqUXZPcivVWRUrLoQLo45j8VYEYrWALTGqheEcr3peu8VMxJxvz5216ZaWEoQxFVabmbPKqeQc",
  "key11": "4VPpRcoGoiHwaWuBNvCsyxz9cDdhZhirRTM4PANQkYA2qRALi8m1pz1tpVYLNvw8KjthaioHZwxDf1jbxSPS5ovE",
  "key12": "3EQxd5P7uTDuyiomwyZHscHJ6YFJkvMDo5JFoxMVXojBAW9k2WAiQUe7gvqsgu2ZMTR147H2yhPP5cD9TiD1hWzt",
  "key13": "2HpYdebXrZgWJ4JsNrmYBfWAi2afu4TEdi1ARWuhu2Tj94wpc5W8JtJrjgWrr5pH1PUcfKr4WgpxHyp2w4nQTepQ",
  "key14": "4m4Dn1hqXKubTW7FNHJje7s2vJj3prYLwxrsmvHzgpakyBBE7tWfFLUH6wbNwUWTBnVgkojoYMxwQgYAzrP6VVUB",
  "key15": "3PNaMT3Cu8KUjQQbS7tCwj6sY3LLVjBDqFGsVfAzEiLhoZodLBbBWDda9ezvV7RSn2MqmaWGa1S9b3QHjhnjg7Xr",
  "key16": "4VEAscCr45uC7dKTKgENWoZSufEGhcr7MYLKrt1W3Bh1n4kat6L8F7a7s1gLfKdYaFqtvB4raErN51CzYmmPAU5n",
  "key17": "nCsRSUcvnmNDMnKDCxU6TmaptM7Ps6D8UmjWJJe7pwv8aSmoAyHEtqhFKSGZ2ynF4gfEsxJRbesK5sCW1HmBSKV",
  "key18": "D8wv88i7c5vDUqqHHjeYXUSAQfQN97zdyLMV8V6r7fb22Yh653Y9hXNzmsoDyZf6rFR4QnCbdji6s9kCJyLJMce",
  "key19": "2RDj9fnLewG9bZ3UVJQkivZr7Vh987PYfGtJvntdzawAPb8RtUgRvYQdBU6WpwT7SsgQnGHX9d4zDyJ12hStMttW",
  "key20": "F5dKoWy2kjb3wimYNzZURdd7jH3e6TDXKYbg9A25SXyVuhmk5nt8ogxgYcJ3i4kJfKp8kXwp1ioyxkJQKqxnbpX",
  "key21": "3eCXggJMQEic6LQyhP6tZy1FXTj42488BNotHVtGhdpp53VvMMZ2wFy4rYhJ16HGqp94Y9KkJA6xrYEam4DcXYiV",
  "key22": "3Skc59R1MKH5DLod5ZsqRWfBWAJcGUwut2upS7ZW7PTjC5DrfWo7gfSNN9X7CqsCQHLnNTm3iu9eWAvnh42z4hbd",
  "key23": "5HTGew7N865Kduq38s471E2g8RDfQRgCqBLpMEQmnDzt2JJi3oZvDLvnrXMxcyaR6D1rSsBUvw3WqrNr9AmE6ww",
  "key24": "3b4oDLUFWtjx6rTrvCyZSRnY7WxAXQ1HkSQJSwTQLBRRoSGkKKNDc1aMiHcD3D8jAeQJhCPy5fiv3X2DpXvocNy5",
  "key25": "RzhJjMRUrNQE17igb51e3PgiDK6kgfk1Ls57ts7w7GJHSSWqMQxHjYYC6vZEQjHVJ1DLWJtkdsvZi7uVhPc8i7n",
  "key26": "3rXZtHMdbsRRTuf8Er8YzZyk2qDxnE2sMrVUq686ve5gX9yBqZgnrzKCnLvEScCVdWC28ZgybnVYB8EaApo7ogyd",
  "key27": "3rzKzGmgSKzBeYtMWrbkim2g1iQyUh3G4vniSayfrfwsFaYJaqxQqthgD6AauEpgxbA4xA4wBcHg9gorki5G7xZx"
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
