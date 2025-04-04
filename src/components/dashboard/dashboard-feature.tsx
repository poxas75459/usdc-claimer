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
    "26xNSvKpuB4h1JGiZVRJRHYeyr92x4s1ZzvYTvnPsWhSerXFbZbNvbJVoD2KTGEWe5mftE8nGZt7ydxbNMKoQzrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64j8Q2G8g37nxkTWjnigbWnStmqrB5S8sDH6qKUTV3bqBA3JtuVhTxpT3kJtHpABakiZU1AtSivZN5KBANjeiBHS",
  "key1": "4WwYp9y8bfqBUYkxBMZySjrrGWVs4PXb9JJp7xvUHytPfTTQgKiBZFkHZBK216SXneUu5uJ2t1gJVsTiZopVrd1s",
  "key2": "rkQMAUtxJhMLXB7CNMg4LR2x3Sj7YqSqCvgfhAG52SUrUUJpqyJgMYbBEKfpk3zoMZANSxPZefjaaZRMXEtfWeW",
  "key3": "4Fp8HRnUaBGHJLbF6H9jgfgs8LAHRXKQH2Q3Pdj1NLa4rVKeNUKxeMNKPp4x4ZXBdKhmzHwqvdfCrV33sMMrYRdU",
  "key4": "4D7j1iXxXSmedd45BLMTzX8dpUWdnYNNxjcW42UYvDQoFGS7gtFLqVgN1GHvthdhuGrS9M1xpRCxdf1pRuhhbdLL",
  "key5": "2hqSFJGsu2hPwnjBwLxHEBqKikZy9ic2B322aQMUpB7FraHqC12mEBEDDe7sKgqTshuNuN3q3FpJgsaQ1vm5RVMK",
  "key6": "3WZAvobRvWhc3BvXEw8u9DyuQJMntuKDSH6MXuwWHqJ77bPA9FCbUqT51scmxyQ7pHhHfuu8kKxnrFpwDy6ZWdz6",
  "key7": "Y874YGxJLcSHp3pSidyJ9h7CxPDXRSCqDJ7G2uDPeyukScyrozSNKXJFnSUTHUjXX1B4ZdWy9yPyhsJTxqg1iKM",
  "key8": "4tYcKUUhQspSsPYSJKGpPmK6k8mftfDvwYuJwa1AQ8gtnFW8DRCnRTEipov5Tz1eDejBnfE6X3wZFbNbgwNkcQfU",
  "key9": "4A9rSk9hzcQkNhicx6dH3Zr2N77NEsaU8EJwxnaTEsmmeU3qK51ZMqhJMCerT6ehBbmPJSgq5NCxG6wFTa3uXzuc",
  "key10": "5JiGZ8SHf6E5XEU5ZGgquUkf9wc6mrtPR2FAQeXtPH8xw4eN3XhwQVzNgF9Q7GzG7MriMpF472t18wSqPMaxVs6U",
  "key11": "3DWAQpwGfwk28smHMmWQvt3ootUrz9oMjxQTqFC3fbhEQYW5kgUu46m2RDsNWRTzGP1a8FyJPapBPSbceiCzcCez",
  "key12": "5ZCgj5PUPFhKv8bDSpZUx7uQP4bRkFUxwFc4FZJPcBGxKsUNSE2ioyth6dhJcGAiuTbXBhEaDzE4a3omPNznY2H1",
  "key13": "2zhhhN71ScVUf8pV7W1n5nYKrwtknGbCCv2xrgMBYJtUyrnwxRnYBSJ8Y4i8cAvqQqnyseU71dPuYyRggy6ehBnf",
  "key14": "2uj1PwZxbxxHQyE8vRB1K9hy1pYcJunMg62Lqg1oxsPdzfo4XMZf4B6nJfU7YujXZDxrytyod5eg4zu69u8ubMS5",
  "key15": "4dBYYedb7sYQRDwguAhZ8NZdyXgeGEj9g6vbieMzHefW7kYQKe75P5b2w8nLUzNPd6yBhkszUz6Nm7rV19SZhtAn",
  "key16": "2oL1mgH6zYa9Eq7NfFiFhH3xE5zdgzBPpZiiKnepxEoiRj7vgLoLz6PYtQ2kFTDSnJTwpyzx7RpE7KRTEEvof1WC",
  "key17": "668EFqXvpWNxqkPAD3mvkP2M936tYE1RAs2L7eWbVtFZ9nsFUZTG4gkMeY7xtbw9fGGrNqZhJPnDvT253yGN8WG6",
  "key18": "4utisMTMncXgUDqQZhq3ow8ZaGpEWaCYBy2sbb4QtzEFurZwv6seAbng6iRsjn5RqAxJjfshDUs5RSM41BVmYExe",
  "key19": "4Grabtb6YzmcL717Cvt9rsEkJE8ZSm6DAuQdSdwtKrXDeKUzPSHyuLxCdEnJKUP5vbhgphTjoXQ11tqAsNws7YTk",
  "key20": "3d5U1fpVcT7UNkV2P3SkGL9kCJzUghttiT5TfTV6xg8WkeQ4eALj9vy2skJS9hTdzXsQj1o13EWisVbgpi5iACk5",
  "key21": "4s2fBNeC82Ysr3118k9Eq5Qb4woRDJ8Nxm3KC7M3zwhgTGk6r2JVhscSjkqh1j4MBHsGAnos69Dd6fZRrix7YSPc",
  "key22": "JFdkhMe1j8e45zAf8FQ8HLZtaA2ET7VQc2GKw3SxzCqJaTjAMLVRAP6oA1BGTcA7n1o8QTHB2kzQrSwQ84sZ25s",
  "key23": "4TWfFQjR25G6i91oX42nJvPbjCDHuvCAadr7MXxuwQ2wfkEobyfiRHoFw1XGg2mJxvmht1cfgDsBH6nYSCMgEdAw",
  "key24": "jrVt1ppsgL1NTy8QTjnmvfy4QpNRgJRF5j6jCYQxvTrMVK9QtUdtdT3EchSYSSrQrmX6cVwbxLAPg6yNFCLg1QL",
  "key25": "25rML54jnFEnkiaMZkmmupY2nEq3oCooEoT98w31eXvpdimPnH8t885PTL6vaHQDcKN6yaddD41jZBeDQkcFeZeP",
  "key26": "5v1L2P8y4mF26kGTXkL1qx1CXpJWK5N1QzgBDwq9z6E6LT5LdeErBawZNLaVKKEd6MAqwVtXVwAhHthNjcpAQ2JF",
  "key27": "5287BAJTFf83Gb1d2p35K59rzyH6SjywUj6MXYurN6b7PBKT57u6vN2RsQhVMRrTgugjZkqEGnLgKcBq4BksKZxk",
  "key28": "2fF3uaBJmXwPn4g6yfwem4MV1EngPMw71NnBR8WqWp24M1yw63zbVfcoQWssNeihuPC5dfMBqHJ1sCoc8M1vPVrZ",
  "key29": "5wbLGCNDY5utCsbxM2jrZv6MnEmZEtNqursiTajbUiWHfocdfJ2roaazcd2zQYsE91EZz2pVF8mGkKuawyUskrU3",
  "key30": "3hHiU5XS2PvBZfxTpwKr5wb9KTrRngZMaAMpUjVtnNrvre4ykxbYRjuVhWhVnP3XbnCLY5wYWQF3BZ2mNR6TDG7G",
  "key31": "57HWuamXKe2Su1rnFtSaC8BNzvLPQTqgSBSSxgwcvTxi5aRQgnGw1Z1zJWfAf4jLF4Jnjwp9TwZ9PXJYhLq8ASuB",
  "key32": "2me4uEkTpU4TPoMQkeXgXdyv6899QtW8428yJsAKpFp8fsebcHQSz3JToziwT7aXbbEryWwD1H3s8HTuF22UajAz",
  "key33": "3YrkfZ3K6iLbT1VgFAgS59JMuCDiwS4E6FezVWyagVWuF12npSFVj66oKyArwQzcnbxG3nUm5SNvuapDUFWUhKZ2",
  "key34": "PfGPTz3ngbCNVVrVjH3ME33WJxjAG9ofU96UqMiXXaQBBEJNozXfoRv6yDjM5k3SfDspCE274JqdjoYhXGBSWE5",
  "key35": "56Rb9eyMP6farbFNsMYaHmFByuHXjDitEycKZZ3rtEir7vj1dsMLJaTaGctUuAHvz39vdB6WbrZ9kh2zU2K7uTpM",
  "key36": "37mRM28jMDjNdgjJSdJt7KhAWeTHDDa7uBKSkrCSWaYvAiVF1ip5pJBpp9QZTdETseDJkfPpsmCChuyLiv1jdUke"
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
