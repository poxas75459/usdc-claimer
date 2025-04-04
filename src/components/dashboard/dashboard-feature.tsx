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
    "5K6UkS2AfSnwjuVHVLvgMBbeLSBWNNcd6DceNgpxaTjbPGrFf39XyHBtY923EGUavRq3sSEbZ5Ar5TkzanhJmQT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mY8PmDRshDWaD9HpMjwMwbGWfehGr7bGa9PsmpvZE6vYpcAXRKnhUqTUcsGgYSSiJrHZn6TposjHX14hQdXwB7P",
  "key1": "49uRXirujfsmUiXvRdYCpNnXu21Jax9xLMCGw82gtza5uby6HNpSdn1X3zDb4sssLRAoyVzGuGCcbutdEJf5S4Rj",
  "key2": "4g7mpJGpjASnypCVrFYsPMwqgds4SHYpqPT2SmwTGSqYXAU9Qxd7ZoDrHgERhdLfwXkffqVFc2TiBXFJ8y2y5Esn",
  "key3": "NfJWrxa5NGZnFe9qNgRDivceeqiMDjAFM4HdJWGveg5BsWp3igPBfZRVPcU5WCxLJBbWmmjyUvxSTDGrVtHyKp5",
  "key4": "5g8eEfMev23DksGd4WzcNUGr2m2bKq1ZLML36n3kPaJqEwFNv5geUgse2f4HZf6uCjBgjs6Q8yETnCw89q77X3Ak",
  "key5": "5TdLyA8ghNgZUEE2ekUVi2CWMgV2gAUqDNj7r662yLJ17kuo6VGGjzFonSLJUWSYjMBJfFXp9PW4zeWbSGNT8a1k",
  "key6": "XeEor4iH5PeBsZSk31KFLwKRrzTk67Gfdrzr3LCGrrekMBuuKbN8yBR5C5kDARMPj4eZcDgBhEWZArztg1kFd9z",
  "key7": "3ZhKTTNuSB8KjYr7LNgrK9KqjprjunEgGMwbsSDvjzJvuPyQZ2uXhUCCfCr3Djq6f5Z2w9hai1Fv1kcHWxPW2KEw",
  "key8": "549hYfxMx9VSAhzJvc5mky36BrGZ5gAjqJw9tTrK5afkemz1GXBuhHSqC1rUPuprrefF3dECRbdAzusNpWAiLN36",
  "key9": "LD8af6tvGu8Dg21H2b5mrpY1iothkpRRkFpXY96WrvDJhj67Q3pVzB46C8gAxWVNVWu8qTpDrPamdyfLDtUUpdK",
  "key10": "3jq7LVQFccxaHjef8PLvc4eTMai4bfsCxcYHdcPuK3HsgnYJBm5sbbA5TjXM96ZR62fwbJMBi7crtk6dHRxEyZCu",
  "key11": "5sEpPTK7GHyS9idZNZJnd23VnHbHWR2asdmzA7VZbtX3yBwM4aXo9qKXyteQNkxwUVfUYvmjn38fdRiZzNCMjz9S",
  "key12": "qVRX5sZfywdLpinmVc3noKd1TqWhGiBkwJYmq7bjVxv5tVmb9ceCN1Qm5SWYnvEeKiF5LYcnYxfeqqxweVJ2zCs",
  "key13": "5KqNNnjyERY6X6bmU18Hn4KUN4vdnTzJ3rcjLAG2xeXQFuve3m39cGxsgezeeYHxxhJ7kWTp6YUoV5XMNr8UtAxx",
  "key14": "UxfPY3t1oK26MdLRs5bNJsdNaGfEr9r7QDzAME4ViDDYREhKENJeyDoGp4RnCtWBaFkp3LoUfFx9Kd55NYdEJnU",
  "key15": "2Wqb5pVxKdsjmTMymS3gd2jJvuvhQ1D7KWzq7okCHQAJRfpnjtxTgU2EnSNWWeWMiDJBzSGyt1C28UHz9V9rBMBW",
  "key16": "4jEPKK4LZPGxrg8MrR2VoYE5vxjhAwwu1j3xvQSJNfG6cf8VswkVxkPgnVTHE1Y6hMEW9CUTyEGshYSm3eDQ2mc1",
  "key17": "4MTqMG6FXQn6TLWRx3g7yK7uETmH5pYbJmxZBVDJE6QEKZCBuujZzfQcgQUtHD2ALHPck8PT2ssz24bQVg5K3h8y",
  "key18": "5674UVS6mHAtYtSiA7GWhHVxsdy4VKSEA4qBfFtsjajVK7g3ywYvLSTLDCbnLRBZdsTupk5xj2nYVySFZ4XURLLb",
  "key19": "5tCaLGExcDUphtGieS7NxWgvsy6e9h8qpNdVUKyY17D1jaf9K5v1D85UYjjB91zGrBABi5QmnNV3JpCTkjRfeFGQ",
  "key20": "3B21rBSuX8jL7J4Vn3xsQQoFkeRx6SvakjwkwxbmJsbZChF4oPHscy6F49D83ZzSYBcwmRYzXoz4nWWrLasTaktV",
  "key21": "5abodoNNBC2jMuYT3ozUVYQUeyPLniP3yk7tYPk54dhGHaSpfKVqG58E8i9TD5Z8bRwBosjJdLDuMcex96JR5nTs",
  "key22": "63Cw8GXtiPNHWPdFpKnPz918QRZYFeWmLzjfAhjXruuymVqWCprS6cqVNoo27ZmxTqXeGAxYVr2ZJZsNaf63eeP4",
  "key23": "4Lh7hYc2ZFxaW2RSydLQeM2D1M9wmBWmL8B2H552XepGxS77C3iHWuTnMWDqu8kqDHjG6nw9aPT9hTEzXtjb2TGG",
  "key24": "yPYRJCtiABoLuQPR9F2Uzxy2nW2zR8VjCSuu2ef8DMqMNcr7BkWQNBv8MTsRF39KDNCe4egwVcw39eH3wntLdXs",
  "key25": "R2qdXc56spQnFQjRKroNAqFbgaiE8MymwUmoYo1oeH4BsNSSm8UdASGk8365AWAwYh4TfKyRPNXBNX6ujV8pudA",
  "key26": "55QV3BgDyr2aRLxQkGoZ9U6Jy4vTdJBnJajYP12MbHcgLKKRtgBZJH5JtkL2QaskoE2SnXMWMqRYLUBBNJ4MYWpD",
  "key27": "398n6Em7BURPsXBTQXSMdgUUegdDQvSHXMVV5cK2Hb7x1dpAgb1xDqYvQwR9gLARjnWhnkH6eqXruqVwqVCbJGVp",
  "key28": "3MSoNr9B5gSHDh5Jm9fcf9tBKtqN3Q4RpogKTch9AFuTP8USVTmVcZus9V5t7WHZDy2bT75fqdjovKD1c3EwxjMd",
  "key29": "2Tok5sPZNC85Ea6ifQUKs6TQZ63QXUaSpsJBxMofn4UFZKY7XxG2tMAGRYJt47FNP9F9Bowf2rPyULc6bmWTK8fe",
  "key30": "4Y225D7yU1jbi8AmzPX5T26Q9pJW8pjTzFhF2nU8JJviMhCXxxLL73ddGkRuEUZfALrMFFnC9DCUAKkUAJmQBSHq"
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
