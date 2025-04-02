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
    "QuoiTcm6sjUiopLBSjaXYeVrqT3Q92VDSB3wmA5ZzBUMniiPVr4A9NFNAhcKZ3eGTtDJYVRsnRB9kMfFSsvcUTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmgXgkqkwaY23NTWktpYmzyHgetdrTxLHKJgjEZxWtyr4VbRpT28Td5Geq7k6MJneaasv8v5cpMwVrTUe5CjDYG",
  "key1": "4sh9hgQZ5eD5Kwuf5rC2nMYfn8QJRddcR22H12TKrApdtWmgx8wjrWv1QTQBsLQVyRwjKDrSA3RNzzDoKkaCmnxW",
  "key2": "6Y7itS7BNqGmRdoZd2Vr2fwgu8h38XbL6U6793E5BqFY3EB4XNjBjrdwH1eBHV7RBa3yQirsFcMFCsCZB3DQ4yi",
  "key3": "4HuG7UvfzttiEVqSAruzGiYk9kEAjAHbUHVLfsq7zf8BkTzFLR1b8WEp46P5xqMy8M27zer4YxrGExHQfokNmXfj",
  "key4": "4FsePdQc5CHWcB42vbFxsSSj3z3peK7WJmFVBZV8cYseSAkAvngZL4WdDFgn9tc27F7XHPv8aKUJhdMBm4kqQaJY",
  "key5": "3LMQ7dMZLyKCuQ8gVYR9LFVTVMDEmy8NdEmajyZAn9AT4ySCHSuwMpn5bAEEKwFA3DkjHBpcTiosTPtWyPXx5F4F",
  "key6": "5xGeKAsMe4ctmassqPS6gqGW3iaTiH5GgfHJdDSY5zFZ9B2jUPkRBkjA7KLN3ebDD3gkfTRkzMunMSZYU7PRHuj4",
  "key7": "3oZZNW9pVc8z2nhDy6vx7f642Qn2bjtJVCg3y1MHqYWQLhEyKmkL5Yux4bEnA9ieMWq12veapH3b5gvmaxL8zyoY",
  "key8": "3oDaBuvfk1t8zHy7AS5HCqouwzx7SJxqU2CBS9CD8j5jJWfnxoNNQTrC3BdRev2Le1moLsMRuSMSrsoXwweDboMy",
  "key9": "5ByPm12zRA7YXZuwnxoC3jUvWLKo7MzYTh34Dx9Kjfj7yuDuhPgraV6paJ4khFqs83zfa66b6M8EUwAPDMwKiBo7",
  "key10": "59nfwqMEgmiZtaritzQjTH9SPnXeTgQeD9xNYnjGiE9o9Dj79BZ4DVgz8z7YEgZXvWc2h5Rv5BRQK2pG34kXqdLp",
  "key11": "4KBabfejQMpvaFZAgnCH9UimSKMzLBNP1BZibfMwM27iAv77WcQpN3Pw5CocqywrK3KXA7tQ2wR9Ym1J43g4dXg7",
  "key12": "2fFekuJaf4y8FJVdSz57NgkptAucvoLHNeBRXwchkwWXPwwGmATxdXA7PrgAdhnaEEfkjJsMvsUNmmSAE6c2zALB",
  "key13": "5rAWrV3bmH6qV22hZEczSnXLY4qYsjHTb9RVvqLij57chdPC5X5ZYfnVG7tWQCPFaTnD9Ku8yrf32BNYzRUiozDv",
  "key14": "K4WxcFuVN2T6gr9eCL6kYr8SBzEzBgjzeVXngyfzzCeQX2e8Hskm3XteEeQFtUBNx7fG7vM9pRxyqtC4UgbJVF6",
  "key15": "67G7LoYkd1DDsavPirZLq27f9fNhZWySewGKuvxu84r8nipijTUAjkaF44Sw26YCGjNXNcF9ecy7QELYYsLmG5w3",
  "key16": "45aJCXziCqgu4vZaNzQCfTeK4UZtMsu81WVLtzB7SXBXQRPm9SgFuxzEfyKsAtCToRa5o6j9YFMkHB9vqdmRt28G",
  "key17": "5pQmr3SfqWcrCLUUTn78a884N7J75vTt3XMD7DENJwsqw4s6gQvCy8N2ZBL5X63Yb3GaaGkgXMaZ9x8eU5arJFMS",
  "key18": "4BH3WMGcBeVgHbUErD6Y3oQnboE77N53rcNvE4ejN5c2ENLghri5xLNj7RZGbjjdswCKdhUuVobSzMYhGjqcgoBc",
  "key19": "3ehCfZQmhci5K86r4d9kPLTt8vbs6gvdw1tvkRc8KLXFKochmUMUMCnz1cR2vc569Q77QbEc3BwypB5TV5q6FMyp",
  "key20": "RQMJCXs7qQtGjh7GD9Ns5kLPNKY3PYb82v5HH2zHW6oCFCUD3wu99DoF7dJWmAzTPdS41QCW3eLh3vHwjXWFymN",
  "key21": "M781FzzKuzn3ReVvNYFyvRc7bq4FvhUzfFxHqzLGXLqY8hE6vcV4dmuWLjYPtJK9d411TmbVmF1arKiSNufgchr",
  "key22": "BrbWFCEECfhiSgZVuhekTJg5pqagpfhiHFTCMXPj1iKaQDWqR1L2gNPYdvU5JgUSv1i4AUwT7CH9TrPZuND9SY5",
  "key23": "23Hh4wWzZahpvaksT9qm3kWhgaDFsrZTCkp2SUnCroYpmCHUk1dMVY1VqAyGKrzFr4j51qNaTccyxG3Ru3LTHYMK",
  "key24": "5uQvcKmsYNTjtgPvDYKz3Vh4DiZgtsm8nza6LjBGiDQKjK2jaExmDnnWbqSnTsjdbuRHtj3ZWbUAi9cWDdr83VHB",
  "key25": "syjyBgBYehSnBbRmkmcoadZciiKtNyu8ePAvbe888n6MZMLi2ZRyPF1LGh3hprftL6EbHHJkepeuNc7xtF68cGx",
  "key26": "4vdvfNrBbQYQm7EnSpUucH4kYxVFhx2eSrnEfA1KQHAovh4ckaGEwHLBQS2cxGqjiLx1gAgccFXgU1x8Z7U5QVwb",
  "key27": "5BMRhb1jLNAVhiGraReM1YK2cWTXq9p4k4viPmFdeuLA2WFYz4SwxwaFRW92qY66jJtbJh2NK2LMMsEDvDLxyLou",
  "key28": "JSB84KQiBNfgbA8Crwn4nCG7hunFnfzMJGAfZfX7B68SeaBt5xuHsLZmFkBRVz3n1vJ46QNHJEV346NJzdMUNPy",
  "key29": "9jNJqbz3MSXkbkUQyByTSLPFEWHvqxvaPTDP8CRHxcB6TckTvGtdkSowAHKwF6mUHLEDzHG2xmoUzbb8oBkFmwa",
  "key30": "5owWCJQFXAH8FUd7XAtGxAuWBVPDuAaNGbJg6NUDaFYnhf7S8yKVKaKmLupF1tjyKp79FbV5XHkAQtjCJXmi9cm4",
  "key31": "5c6ukE9WJ1MAaf4fAcQrT3KUiNry8P17asU5Bc4JwyCaLEYm2tB8FJzmmYY9oLQLgZFrHpvqvwsTJx3v4XxABWJR",
  "key32": "4Jp4nTJmppEeJjSiyWzGZimLhs96mWhvtqTv3WJfzPSfPpChxyy225RH9hdubD5EvBZn3nhvTuWJPegYKymNYU6",
  "key33": "LRwwuavdnDkXcnqXxHrvdJWa7cQE3otB9SN8858xL77QUc8FLZxjG88CJd4BVbo2yfvx25pTDxjfhj9pfq2HD9n",
  "key34": "4ihfHwu2TxfrYjbbk5gi7wFLtNV6jKcuUjDS9K2kREbDh2SJvCS6HTaRUFieT8t6sY5X36KCcLY3HogpJaUiCVyx",
  "key35": "4DxQAwSUJPfgGsKVWg621597dcPoPrxYaoNCqzoGwfgs85j9UyyQCn3ky9g3FV97MQBwiePVxdnsXnFrNBF4mdJs",
  "key36": "CvqJYMFf3MNT7QomzSZqrcRa7UeTfcWxmm85NBTHQC4t8XzdkshTHfAFe1BjwmGHHQ35FA3Ag6tZdVeLWcM4DEM",
  "key37": "5uVVMT4oWyEZHBWRfCne2kU9mRTntPUAdHkEo17WAoJ6HEc32zkPYjuMoCHRWGcaJ2rGdY2SKo5GFEV9jjpKoYuf",
  "key38": "Q5F1oJ1DW2sz6T1yehNmZQS7kupqrhZybF3r4P2YRKnNL4sXToFEvk3pyqtDpfSf1iyw8tmr1gFopDAzPYh1NDP",
  "key39": "4Bm1o9qSkPTax3KDvQsttiNb7J9fWgJDaKFudXpxcgmocabQY2DG14c1CVrGhQEipn7efwNBqYqhrs5dV5ZMYNP4",
  "key40": "5w7NEQrfba2N8EL1cVFSSMnAUhQQEaRXF9Zr6B7EH6rPjBKaCBoPuLxajpQyfDZ3PPNXHSMZtaDmm8VidvTYHFw7",
  "key41": "4qpjK1LxKhDTNJtSyaacBoPcY1DtSR9ARbcHRco6ipF4VSZQjxGHvKrCgwEQYcCnZt7B3V8daaRn4cMk5CTKfvq2",
  "key42": "4uupEBKB9Ez5mP9G8NXMRs9k35EqAm5fw5PG7FWTXJaZ7YxKqKttP2r7apBodiu2Y56GdyAoQ5nF8TTiHVaEGDeW",
  "key43": "4dohuEjnQh3qsMQCT93rfPGusNcweZ95aLAmQSjMeftVkvuxsXjU8Sy1dhPm2XhW8MWuJJYcHM3kT6cLm7KyXPVU",
  "key44": "458bLsefsAoSKnBCa8sHFn8rczw5cdigx27sZA3i5QXb16wxWNbKGTNvTC7AiKxCthE3g13Lk57PjtGS8XMhpsCC",
  "key45": "5gLTyteWbM6D1xrtYFxEUAFtg5aMG7XPSAcEZBs5ZBnpcsczoVXBfeXMn8jAt7zthc3JQXVi69rGdfS9XgpBkwWC",
  "key46": "4XK9JvJNyFxwsAotfMBiG4hDG7dBAot6TAbyZPBdeu8a8rxDVVKaS23mkdLhndGNf9XxCirLycvqXjMnqeoDCE87",
  "key47": "3BCpWLMcJUvo4DmnKNy76cwZ6ZjN87iDakC4GWij2YMRJcmBaTUZR7iyZWt7dn2jbxzutfomFdkTuNGoJ4rxhULE"
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
