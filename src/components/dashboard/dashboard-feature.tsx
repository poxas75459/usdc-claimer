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
    "4KcdSMig5gfesh2SSwJAxifVCgBo4BvHYLYFhDoDUcveB3wMpnB2LBsVBW9csC47AGaaJoswatkRrKYogVxZcnMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mqLXc74Yt9iZBtJfQEyY1EhgSoMBMBg8fk2PxGVdqNCVhp1kgqgS3P4wB56QpJo1E9wsACy3UNnXFfmFozgkRZM",
  "key1": "31X9HLJ8DxoJv3NWfzyT6foZiuySMchprGgcFFrZJwmAp1wA8etzJ7CVK5ZHc5qApLuJcBT4pf7jvj4m3v3hAoD6",
  "key2": "2B6y4AuLP1BFP6TBsAgBwaAQJxqVFgGb7VQzcMoXcJEP5zJGQ5WcrgsAt2qhJ8mx3CBtHAWS4cgGJ3fABmGceLhV",
  "key3": "2PEe3uZsb1DHy77yePLCvwVAw7VhBFrcGiX6j5x7r1STw4da9TQhDhATTxG11WZvPkMAF2oC6tkzXM61vJMu22Ym",
  "key4": "5ZFm5r2BeAkMhtA1QiYDDPoQ6R3PnNN9D2WbwDSS6JRZ2raTGF3D7UivRUoSvCqUgCVsQAWkPyKN2xw6QfjCT2rR",
  "key5": "2y4vfSjUXFpp3x3p3GnHGxX61Q16cWTQLujeYiwZMLeYw14uTjJjiDSpziHXG3rJnbmihRjcRwiPirRb2iqayMSY",
  "key6": "29Tr8mGj5FKEBMZvocLsAcQWegezbp8iscGZx7Kv7uyoFM1hhgfW3dmJeBMtjN162eRgtwYXpFTa5FCbgvreadUw",
  "key7": "4cDKgjfM7UXD9g3tZwQKRGoJ5B8RNMf9jY6Nc1ZzPigVQJZWZwWDaC8o1trdGuDT83PwGTiPLrCPxQzfJxjH4e4u",
  "key8": "579QNZm16vhXkYdyYSQGE9ZMsREsmnGDgUiXXzqucvWHz4TeWVYT5a1APh6yPberS6vcD3FbLvbXcdAtCZX3PuNW",
  "key9": "wJKmyeKEqPKBaW9ubctY1j6jDxUXmZN4H1DPQdtwGH6eTgW4YdkCjm82HY8ZebQdgFAJjr6587Hvr4uzWzjGuXp",
  "key10": "5H1JX8YvA8raXYxAgAPSLPmHye564duao39cpKJHYcRN86iCSsvgKwaGKugK8ZP6Rv97hQZNtfdR4YBcDtBryk3u",
  "key11": "hoFuGpzBTnzWhae97wf9uCJE2xCzRdW5AaFD2dVv4Y81CBrygCD4DEsu4njD787qzJeUoaNrqwYqEC34gx95Aij",
  "key12": "sn4qdrvvnJ9Ea9sKL1krdqbdJZeUggZW2uYH1WeBh3cUBmpZUQrqyHUgm84xXCDhyczVGSU2kGeT79YCdjDKvWe",
  "key13": "2cMC3mHiY2wPnGCKCQEuGGPg3RoJfLYgq9MaTBPLguBgvbZkh1upgSEb4jarEm4CEEypJdwcSPDH5YEPD2HcZLAv",
  "key14": "4MwreaS3tsDg7r1iw5tt9n5LLZWw2EsCbrywUUXB4M3bBRZhVmtbEMquF7iabFFWzqd99vM4cgMiR4ig4LMTxTXB",
  "key15": "3PK1YJotXuPvCwTJhkEGV9NBCJUKbyWeuAvDsM6ZWeYo4vKKe3gGhtaM6uKhReum3aYWbT1X8NtoambNJAbMrYEF",
  "key16": "r68QVreo9XhErbvafFMBdUb1puDpk3EVZEK4XPqV3eN8AFd8BMn6SEnJS1R6QMh4encoQY3j1vBmf1jW7bMyqDk",
  "key17": "4o4gJ7rDtk8kjhVhDTrRqhFdAcQsq1eJuhoQvPQvAdCYnnRAt6w2aAEYH7ZpjsredsC9kjUmXQ4mZA1R2Xf9pP7T",
  "key18": "3vBqMZEKJUV8YXz7RwF5YTgymECsRCxo5g2xLESE9wyLUxksonNP9JYrhybEBwBvRSSj1bpqeoEMncJs7moJkdej",
  "key19": "4JCexc5nhEbkn6spEVwEk6TF2xySa97dgVy89fDFv2g1zVVVVcXAV1dAXEeUFVjAiZ3DoXKzUcPRMavoBZLo5vmr",
  "key20": "47iKatg3fZCP28bqesMgptosX827RwEoYExvBZDzHwa2RJG2pynW3bVNPw4YhRu2MMZZeTTCC8TyHb1dEb1XGHg8",
  "key21": "3aT5acjpsBVUrwFxGtVju5yTAb4BPrKCqy53ewTCLGhgUPBjkTGGoL5HCwJxegMZYPf6FW7SrbFRmGhpNKExR5t8",
  "key22": "3FYR2v8H86rqXJEz2gfiPbudxsu9keaNwoTfpKgKr3sowo5zEwAPRhQFj7hRfWhhtwFbJgcFyB38yTnXsNPUDWuw",
  "key23": "3ZFvq1J6DtySqVjqJWnUQmr5dcPBhoxURXrbpNMyR7Abdd1sV6Pa7vpWuj1RhmRuKFoJQw51Awctkuj7FqoKt5rF",
  "key24": "QVdKAQvJ1wtqKGSg1QRNhXp3HJzTjDXYpk2rCGJoGvTBtSEDK7MBq2ftoE2nNHFtDsmNgExNqDwKxHgkGEE1yj2"
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
