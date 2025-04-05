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
    "4cgd2zmdBW3YGcEc1778XdFujw9ybPQGS8e3D9Z51JaExcXPzMWtAGcszQLfnLmhe9i2ob2FW7FqLRYpop9TFjq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kmSaNbG293pqtogkK9u5N4xUfyok3qsrnEpawx27b3xXNCBsVpKhMQmZFcEmmJYW3bHHuUA7zTXywuPf1X2H2TJ",
  "key1": "3uGiiQcvSmiu5z7iYyAi41SF4z4Ay3rp2UbfjeAFts3UnGoLLcTHkXxgM4VwVubq3xeXdCiwxWNZmpsqt5PHidaF",
  "key2": "2RJUVZuL4z4dLakWyi9MJXmnKvNzQutMjnmSXFqpSb9KxMjnQsGnR3M5GMgFfxphrxEHZBVVg3EvdrE1isn13kQT",
  "key3": "2GavNTTi9nyzkMuFg58XFFfx7myAVZKvMzAbXwZxkFiSDQFbm7hTDhTtYvpWyks4XcE6ZvB1gn8HW6tZyDLcCsoy",
  "key4": "3ZoZSbujmwG637FWRv9bgrbc1YGNaK7H3TLE2TzkJEAhEqGXkeWJ8NwQEK3nAyyjR6qKXenskALoYsgZAt8ncryL",
  "key5": "3oyGVvj2D53MmkxA5rbfE3qjrYAMSWXDmwAunHeGcRSBbTNSoiJJJtXXpgkNNCLkyqtu16SJunqrrneSs95psHgY",
  "key6": "5rqBNBtJD1QfBoW8kr16Uyf4VQUNbThzBXbL1wjZHaX7KwLoHwAmCwJSLE1oTkj8FFFhuabQRKV3KxyrDqrpmLwZ",
  "key7": "3ai4hWhfKKacEghAQTZoC2gWLfUxG5icwT1JsVxYxvC4ymNdiKm4ZysxQGJGdQKvKR8oM38zzhw4gsxUdc4bbrCx",
  "key8": "JAVLvT3nG3XBAdvFhwGrdx26J5RbATgxvznztMxeL8u3GD86mfwf3R6DYEM4xTy83UVBZ8XYrHK3AVTk9omhFGc",
  "key9": "5hUxgmhUnHSMJs4hAcnGEb2esKzCtdxtPSCa4gqPwTygMKBL36L4Q2BRR3xB8PCG5HCTnoNGMkU4Q9UW6ttytRPy",
  "key10": "Rf3YofLZ9P7xGAYGnKCyMbfQPjrsaJ5ZGS7WAeLkagpi2YzKXZrwMqjdCcmntp2uv472T26WmZndeXfzvxjQEU4",
  "key11": "4ck3C8UYvt13ZXV4AwoGGckfWA7FYkTQasuv64EAHMG5cZzWhFsnpR2vabmaxPMnYNYev87VxBCZUnidQqnfUxjy",
  "key12": "51BVQdbFjf37rveMski6r8C9eLFmrVoskvWfjtryk4E2hm4ihe4ze8nEo6SMTZDs3U9r4Vhyur9Jjy2YZuU1K6Vg",
  "key13": "2KXJFvxorGhyGxed6VQcuh4x8h3Jyw5i1GDnfYxMK1rx2RvbTdiU9X3Z4xV1mqR8iwoZLpjq7pDefva5WnE6VST1",
  "key14": "4Cw4h8SJibqim8XjYd9XL91j1bu4FLqWVYxBRxVntHQp8hN8NAhYMa37BiQECfCNwATQT5v73EeWjvYmcB9fEV1P",
  "key15": "3LHJD1PY8poWuJSFuYUTJtzQMJu1UGw43ZY8tfAszhHtLFL9i7YCBmQ9P5ef1etC543LparQ4JSxczYzbWXLhQuA",
  "key16": "5LryAkVj9vA6d9dCRSjcdvXbxVmquJbUJDxpYGE6vfs5kykRvmJLQSAwjvwp5tZaxEEUEYgpzERsTtQAn4rux2qH",
  "key17": "5jc2gdDtuwCR5j6nfnYLRkh5VhRJoPPjvbmzjVsMfqv9jUz2fToZ3NugfoaPqEtg8JcFxDjQt7ERd1tUmc5uxyff",
  "key18": "4zQW67ZXybDVWaR1AzVrqdjxHbjzQBRri6v22iXN478jNgnRsfDmr7mQhYkvucUNVoMtzNXBesotutXjCcZX17Uu",
  "key19": "4SSiLL9Ts2hFxuDwQNQAjxvoyCGXhVEw1vrJ72JXP6NwaJhb16fRVZL4TAvDJ3BtsyeHCvQLjYnwWR7mEFqa7Dn",
  "key20": "3bykmCeqT7BVFayJbFDiGU93LcXDE8i1ijW65zU9Mvaf8MK5PTfpveTPEsEMqqcJng15MQm1VUbVinEzmtFgvVai",
  "key21": "51Rvd6jWM4R1c6zJMk2zGETzAQAhVKuLPQb5oSLBFtGTsh2Z9g3mCLtqgAQWZ778kpZG3gFwj1K6WiYf4Q5xvks7",
  "key22": "4eVS2rcujTQHPSF5oMzgXC54FjCPZXPEr3AC54tS6Vy3MzSyzAKqnJjwceFRbEyntpHjSiEbif476gnVuuTKuBbf",
  "key23": "36khUYGQYRa4KUDhFJ3n6BwabDgQSWwAXndGUEznUetQBuH2oz7TyAPPowqg8wb2eWYH8qpX5FmdjdkCF6HcQgBA",
  "key24": "5ukm3fCadgAT3riNr3VTicvVbCJ5j6yGz8cN7Ypv66FbwPvFh4fGjcn7jQLDbfQhzfeZnVMpzXZirJsWKjxjEmyc",
  "key25": "5WsSwAWK93vgsoDJgwYBctXg2Dv48EB6b9Gx69ghpGe9f8k6dtMkVFXWFmaR7pv7FCcqFpZZFjfPGE3XNFGkFC7g",
  "key26": "4h7uRMtZS5DaRGVMPJEJVJa8CFjfdoqK9nYzzm4LzR7Q5G8qxBSceqvXsB9AzFuRwXTGiBaUt2cuwNGcuNgU41rg",
  "key27": "475mDKVnG22VWvqSXrEyxsBMPwpLYsgG8FMYGpNDQ6cAaJ6wWrneNBTN4n8yTA7Cy2R7AffsZbjXzbLpv7EyKVSn",
  "key28": "2NUTXb9a8efxwdfRJ3fkmahRV8idmVusMg36YotDXpWGY2HGrWad8n32Qxv1mEWDbKSANNTo86b4b8MY37uaXnM8",
  "key29": "V114vPpkrkFvu57zSFZ2RX4dNFqCpRb6wQWrCaNR5xNyWh69gNmQAuUT45pkPBYFaCa2poWAeWNAJ398dudpcuJ"
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
