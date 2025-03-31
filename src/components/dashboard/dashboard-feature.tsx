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
    "3TnjVcpsyqZMQPpDiUCfJJgBJ2CG4VdHA8qqMwUgfPNQvcMNYqvJbzFW5J23ji2ueuFx7PXZtYKaP27a8hfFxL5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMPSPhzCwqFr22JonPfcUL2VptJwgLtDate8EoY9xDxGk9R358Pm9abRYWu1bPqLXgT3wYfeUpuzKePUjdhW26q",
  "key1": "2DagptfhsQm86fm112GAY4yxwNHNe5PUYGvn6P9ZzqoGDtcnRnPMfFYeR8VEeHMVzqPv2oMU29tSaVABcasSCzFw",
  "key2": "qVhaR1ouo6VbepqaVdVz6cHRmQFENU1DEaKg98LkeA2VUZKwCncJe6NHWnN3XCCm5P8VE7LveVSuxs6XSR97Xm1",
  "key3": "3exptSRB8e3UuhxbEKKQ7NkzfHw9HNfAbjtSFCkMin22MiUzpWHoXWgAfJ2Puw5CADrFEMb6Zw2CLocpj9SzRGoz",
  "key4": "2BiwQUNVpL9bbRLG4p1yjAWhqAokAvzib5XzmnZE8NkjCRzpmXL2B4JMR7jqBzzcH4qTzCEUE4Ezs19hKLrdMkh4",
  "key5": "45P9mswEDdeyMNeDFnKYJuY9SS31GCBgaLXKopzJsM6vJxi9dnpo5wDQMMGEFdAaiG68fSmwCXYYf7hWxiS7iE8u",
  "key6": "3wA9CGRoYGw7QBoTJgkUbokh36QUerEFo2qmWwcR4sW4qgr5Qr9Hof2bkRkYwohsaXqiEvFMGHsrpiXo9imriTSd",
  "key7": "64b5dQnemsDPBB5MAV79NyeAujm5tUvE1YAU8r8qsp9paRHnzWCgZG54sbTHZqGxXB8rgCJchgemYcArQmtPMpQK",
  "key8": "3joWd53fy1CUrEogD1VkRKBRWpnJQVa2Dri5gwjmLBnLLpqQRFs7jgYdSKg4pS7iyRycPjp65vmKtHfTVvrtJnQo",
  "key9": "3FB2AQyroMQe1ckpDhEfxNDBWvY99fiG7vAri6Jd1oiQ7SXuPn3Sd9boywYXfuXGNJFkKFupCk9k9ZFQUGWW2bN5",
  "key10": "4cyDb6iic8y5VHQv2LJLLTzdvGMkG91shhN5HDy4RhG6dWdq3TYAJGQ98thxVMGPRa7uVo1JTcvjSWhsxsNrZPTP",
  "key11": "2EqzLJWUmKainUzmXCf3uVW4pDFx64wSnxygkKv5VVYzMi8vPxbLMNut1tjA6trBvCkrcWySgjD8kfk1VEGmTwEQ",
  "key12": "9uY5pnuD7dsD4GjmRAYht8Y6iHo6xEXN2Lp8otQAF7SafzXrHvi6GD8yBeZ4Ks1tqX15HQoYbro7ksXREKKPDc3",
  "key13": "47X8vugijqrt1uovHKsXDJNNQszkAJ85jhhC8bqWXDe8E5Ey9LL9r3Uoboocn6boeGMspoLwTwNG1eiwGvWc1nFV",
  "key14": "4fCAxZcUoNeroRA3NsAmBrZqViAEimTzi8fazPNsGvVPvxYycFh2eBoWXhHVjhfimsdRaPzRDU8ggBvPLumqWmKm",
  "key15": "3BdxJf4NaTQRD2wJgHZSaCm3m9WH9vmb3MLpma3UAmebmbKRt52Ti8LrykE5V4Xh8zTQqy7Z1U8dCYH5Aub57H3W",
  "key16": "5DvfVgwxCkhJZfFoDMTkqtJXwvHwqxy8DG8HFhDBLYPXSSo3MRZNCgUiqvhaX7DXLwR9rtJTA63w6fZeKfwxjbjG",
  "key17": "3WAzZhebD7qep18A8XWdF5a9ryhEobGnZ4Uy4s9UXk3MwWynDDqYooj5yhHq7XoymvUApx8Zr6Ab7TikYBQJuEFW",
  "key18": "7imqVGMsuoBFsxQtnHJKMaAecr65dAvJY6SLJRJSTuQPafUjuD3BSeNXzTa8FSQCFRAXteHCtbBETpebJpzBQ5w",
  "key19": "3DsH3zPxbRkFsYaJim95e9mAHearcwMbNDmKAxTYej9ML75rTaXN12NNqVFY8csvqccGEQfdcnGjh8gBAWt1jRkW",
  "key20": "5Cqb8A1VBRqHSSateroUegZXchoRoLQSnpwbJyWPqcPoNGeGAvJyEQCCbzJoiAttUNjXvC1Z7UdVYVVkVdmRoFqq",
  "key21": "2oeAJXrtrnaHAY1oFN1wxSfgW4ERimWPdYXB1vwhHJ11SvDu71yajChyaG8kiVLUZECKMn7zwXNF1ZyEv1RvK4An",
  "key22": "6dWubtEHRFxEPyNzuX3ATmrGeKKEfH8eKwnSpQ2YZLTdxfE2hrTdPYs377keDy5tSHv8krtsCCffjwSspJU95mM",
  "key23": "5jEMgp2xcFbmLdKTyTtb5DY3QEmRnhr43NEHaJGQcG6spUQweyWWKCnsy6kSMEa6LyAwr4VuwEC4agpC9DqFYN4o",
  "key24": "3jYJomxMuYw5pyzxWidZtVUwXFh5cQ2cDdaoPBezJeQ5USaK3PJwhHx6GHCQUKsuWbnXeD21XgT3EZjigPy3C4nz",
  "key25": "4jAwA3cUruJpC1n522EyDJZBvbFGyjMWaaqS5vo2QHhbWrebjRD2wUVfBoCu7aGxZiYZBBG2gpaYVAEPxKCZDhbR",
  "key26": "2nK8YGyL5WP3bqrMoy8P3U89TySKVnHyN23eG4ydk7A79nZ1zSY7TBFs1NQsc2brnWvi7hb2KYTAvVSb472oxuCz"
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
