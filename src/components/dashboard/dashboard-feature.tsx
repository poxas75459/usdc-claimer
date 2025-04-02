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
    "9mjrkTnjPSLaT6cce4cjmeBH76anYeaCxwdHK3UWmpDCezWf6cppEMHiVCYDjUEHwNyh7CSNyx8gR7WrmG7DfsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RHCya4iNv1rENkG4ao8hwhhDfFSzxkVSeySizoX1RJbPgoVNyuXNbJrNGc2muPM8JQb9ELty2fBVojH3qoGXagN",
  "key1": "aj5Y2hWa8BdPvbdKXAm6faLKsDGtKg4PeesmoRZZs3jnampkdoSWynMnNZetp4he4F71tEq4DrKCp8EKPHy5gkD",
  "key2": "3nm4jwUak5d95UTtd1UusVcAtq1JkSfCKNGCn72dNAj8KUY2pXDrSkhupXZ7FfzWpVCm39qH8sVQ1tBGrqV9iTGK",
  "key3": "3CXBWSowf1qQbxzJUucrpGu74xuKzU3wkDPnQ95FW4ZuXHHn3uBDqiH73Fu3NY7haG52wBkwW53hXTed9mSvymWM",
  "key4": "v8tV7UbctxpLCspgcktvRRXuV7eyesV3ZHf2wYNgAq4jo44ktnk1CACYfMTMJ92heKpxFy7SP7bAmydDC2DFRMB",
  "key5": "LyaUMYmGpzHaXhfdVjEPLsEYiDjtc3UBrMcD6TnEqvVrJ7GYbpUCek8SxwA1uy7JKTcGtRitWW3VnDcbvanpPa8",
  "key6": "5dCZWk9KFM1jxkCvkb5QcBW9LQgiCU5t5Y6jY7xNsJE88P1nTC66yhDEPRZ4hEH35Ysg6Q4kYMfdE9imQEvUNqbM",
  "key7": "29Fcn49yHnKD89SJV1v9KSQC8UVScs64tYJYhBVXZLY5yBo1N9PgLTapy5EaTKRWguwTQW3UJ3eb15hFEqpXeo2S",
  "key8": "5811xXBZHndcHHAzV6SmtGMZHpCZYhAsMC4uHMDEL6o4et1iyHUqktAuKFRyEcWNftjp5C9deNkTRJ9jFb5K8HZf",
  "key9": "2hGKZ3BWpEN1Bgft5oasrbQqgdzCWaNi271eRGewQxCLP8QGQZnFH9ZVqqhF3AWVzkYKExvTREU6wH1gN64chMqL",
  "key10": "5NGSVcNcv7rG3fkVn17p6yW2sUjWn5bH6s3c9gLDm5pMVspEE1A6ZLPR8QGxsWDqwQWkMeGRAwvjNKbUajSHeDsz",
  "key11": "2Q4zE5N12RX7Vp7steQDfdviDMtnu5gEktYaeSifDXw6rKYAcRWGivY3pLMThHnKbLeaCHse1JsRc8Dfgw4uqRGy",
  "key12": "4hVobNAKzFEn2pVm49Td5fWhrBo8QwWzvb8Q6jbfcEAuf94xSToawhHG42UFNMCnatMKA6VHdw5Sz1Fm2R2TFFj6",
  "key13": "9EKSMWYT9bqTM1j2odh7qcjKDw9VAPZmdTh3XEUZL5q8gPAYGgVpTMv8iabX6d7UM5DGxtPFPfrBidfnv5JE7hE",
  "key14": "wkwejeCZFkD6qwwt9UyS3vtB25Mfb6hB5vTmfsNgVacegKY7JkrxXj1NQbhWQxYXuhXbnnzGbbj6RLn5tkZVd5Y",
  "key15": "2W5K5R4JJQ5bBwc6znRdg34VjBbwNCkyPTCrtXH6T7PZbiwo9NPjhhGLMVtsU5wqpFok3C8AkZVmjmGEPHTPVSmx",
  "key16": "2RiEGsgjrefYN7JyW87fUjkkaRYPvd5jGm3M6fgzCoyrE9f839gZoLPiHXCpGJ8KKrm4r9Vy6uCgjBiqzhQbfdgi",
  "key17": "3Tg2vfBhBsBwex5rVe6pNLhYAxrjnUH9yFEAdBkCJcNWsYpwpEtKCWDnsaR8dng7bh6ARSru9kLwzLrTYnTExaWQ",
  "key18": "52tUJ5tEqGqG3wp7359NaRxehFCRMutq4Pt67ChfJ3XhzCQba6ZNeBRHAm4WpqBC7oVhD8x1w4sHC9zKPonsDeGm",
  "key19": "nCX4vyQX2VGBcwDSirP6oSnroJVxtGDxzUDe1Qg9gj78p4CH8r7b4G3V2785rXsvmNKHA82p5jCqSpu7CRVu7FT",
  "key20": "2VmUk9WAR5EM3GLm4x3kju6ZtPYq7wzPDLsxoFAkvw8qyyLH9Tz7g1NzttUHmnoZVfvZdhNtdZ6mZJNXnFJ2FSj5",
  "key21": "3VsuSmFXrbJ3kxbwEWXVbCieyr8gWhRZnQfDWDVcXg6RxswjZ6Z1cBPPXMrA32GUNFaaGgxo6avo1Sut29q8weVz",
  "key22": "XeEYz7PjCT8B7qxmqfLjz5u86Y5FNFXFFndbh2eTyxJZaxAvm7KuuJFB8Wh5W5fXiNz5hZZWQLM96jCdeJAiS6H",
  "key23": "2KE8wNPVvLjWPsfmohXSpCPb9mY1ZftJjQQbGjn9FWRDxFs73YJzAUhkxrFWZhyypmc9uXiR2wMDK6bruEL9nRba",
  "key24": "51ZQZAJGd7xoHfexiKW8XEEzfP3C93NEMB92QCxsVFuL6NHDvjSabFRB47wEzL1qQ8Aqqve5yhCB2PDHywRtUDkm",
  "key25": "4J9JCkSM2sbgqQEFYWBSRVF18vRa5RA1aShxPxUsKPPXM52hLfhdege2AiwF46rUzoJTJLVLyKQFWG7sM7AqjhVo",
  "key26": "rqHB94DKuChz2BjXqx4RHF89yCqhXxcbUwWbsubUqP1W1U71NzapvtapotvQcWJ5Jd6nFu8zziQtb5Ud6HvTnSS"
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
