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
    "x6HNp7CMuUoQu7dcSoYCmb81oLijivrbL33EevzSJNd72Yw46zYS8FR8zkGojPaeCcsbqqqaPvtjFzrVpRb8axZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S9YRA6eEvqDvExe9haGQ9KQyJPf1zyPchLmuxDTx5drK67EA2cvgCr4ApfNvRKeZEwss7wwqKmSrWp1b4BaXzFR",
  "key1": "4PvhsebND5WxK9XssXJaULUTky5rWhMovfxcF1gHfAZqfRKYxHKC3bCBHTQDBw66D1bMLY9fxQRzXLqRLtmaaU7w",
  "key2": "oMQ6fVd5f6N852XeUE5AnH8MFjFdKUppE752QNxnWGc6aFHbbFqWxfKGj9mo4PE1YsxQCru3ohVPoVkdvR1yANE",
  "key3": "658qaDg7AHMjTJQUvTWxCFW94fzP7CnsRLZn3n81jPHxTn5VV2RBzXn2r5wWkiywpiQC3wbdLFtrAFaizwm8GsuR",
  "key4": "5PSXjxdj9FnT488A9vDSsv85TcQdXuvUCmVit98QzeMnYoog2wLeEdHSYuvrLyCSLstfzvvwZ7akyCekGsch8Gnw",
  "key5": "2VHunHfFLRmTPjUDWdj1MU5AkGf4LNQDydtksY9FRCjbJUG9qiZE8byzaFVTfwdYWvQABBLHKWTbdAtbnHD1sch1",
  "key6": "2amJjXpGjJXNV9QK18qj3GyfTz9bTnqh7j7jCYRFAjAm8nns9cBQTSvxEGx6zi41NyP2F6paVniVvcnzdmnH5pWj",
  "key7": "56yTVLYqTKJpdAHSGkKoqYZ2Wsy6GsWTif89babvRWSpvESJb3yR5VQNvK26uZYa2qhh7uYmNmXZAb8UWd581EDq",
  "key8": "5fFLi5wSzFzrrTSL4DzE4jHkmxXGji1XNNRfEaMuesQJwmVrJKHqdzwLTzqyPF6nB9mkNzrNpYSVpGYLJbPKygsC",
  "key9": "5XUBVZ9pyDieidprRVpeHRM3wkFVcYKoAzecrMgmQgEk1CiJFFt7mqXW2ENVDj2f5cELcqCNN9ckmxGFkZsHRApU",
  "key10": "4CApcaasMy6yJhDZtwDeKxohCYRFmgVBXPCUcgbnRJSwipziAz3SLpDuppwwVVkBHSELQPeRXc2oYqtkwcaWckrY",
  "key11": "2691cV9aCiBanKChKCN1WAh2FmioC8waRK8P4rxHja88okUKhsF91ZYxnjSUfq6u6cxGgLrsjkY8yEMyE9Ub5Lse",
  "key12": "3rFvoNf3GSshXjC6CWLJg8gt8t2a6bB7n73kHpHtJee5wHa9xfxbx7ijrDTE4MYbBKS5ApoLx3o5Prj5g2hpckmE",
  "key13": "37CdRV1LwrWMTkDkoxHvt2cyV3EXUardoBuAaibnqbU3m5uY6spgyBxk6JBWiUDdjy5Q1oQjx593Bejbn39UXzGg",
  "key14": "3DhqcTwtqg3yast66ZFg5f3yRqSHYft3K2WKCJunuo92TGMe4WWpDsVMEYJZzjxtnfzdGvFtBykmabya7SRaqDDV",
  "key15": "2ek6zXVxx95udYfsMyxQt1ykKxbfZBgk9HSTgxZvMmH6X5kuyHpyLLjRPc883YeiH2g9d18nj33SX8mjkzowuxgG",
  "key16": "un1MTW9D8aFePJ6PgrVomUoGPRfhc2T5S7P6r5Q3b7ocKiF15F2UurcFqCt119hFBjMiE8wyeB8fGcbXhLoAvrA",
  "key17": "2MPtC3AoL8FQL6Wz7DRgEVshbWVXm6sPmbo23qDVYfRXJCPjQANs54imirdajAnoKTadq8uJbUQSKPdrpPAFKSoH",
  "key18": "3LQoJ1Qu3FMa7pLUrUxEYao8EmKzo7vGaNWUofLGuDEPrqmSpJZFhiyZ5ESEKTMep7fQhxSm96ctvCfi8N7e5Um7",
  "key19": "6agL21RWGjzpQ31fCmdWKR5v4CePqco77xQNaEbqBYw3DbHFGTAbEifarfzoQmdPnSLd64bH2AQzD49HryJEZRB",
  "key20": "273cz3oM7Xm66XSFs3P3CNBLap5BHdckM2zfHCK7gpiErfwC8GraTxwEouAYTEx7oRyu7YkPFCWDg51ip8E6czmo",
  "key21": "Zsqoqhn2UzSpj2oxrYMebJYuDzrv9wQ2mq4H24Puy8Snht6MYadTKQRVha3wgS1XsGfxW7msucze3SZnwNXv2UT",
  "key22": "prMpFz5uE2tqrzhmMBVshTTJcnv2e15WRujBWsUR6wNfZcZjLhGJrJaiqL43WZa3s241V9BnGefPbZmAtEHiYga",
  "key23": "4YY6YTM7TDBXmSerGEj3dQAPjaCw2HJvP4RHHNkqNDrVRZBjDPRUmxZoiXJDReFuHTRcGhxbPqHPX3j1nTBrVC8q",
  "key24": "U5ysDpkWXSprZqJuRxFM5N1N739XoucxeN6hMrUxBfdA7a6eHp7yU91jwxsfyEZnGjhSoput5Y9N4wtYDnKEAZV",
  "key25": "3htbTHHbVvErHng9Vcae9k8fAeRtffYVmdRrEf4JAQpZQMAa5rukGfsxPN1CVmHCKUXKNP8oaTiv2kSkUCm2F8wN",
  "key26": "5C1fnhyvEbkhZv3MGB3B9SKDoANTk2AQb3vQW2zdQefJAEKcU1ezJGgg3cv6nHo3t6tFgZQLqf9J6RTSE5rTSmEJ",
  "key27": "4YB7K72kpRtgHJe1C8sermgT1wC657qNnUDAd1otM2P4cpg4rShDshj7wKQCEzW8X4GJ6qsRPfsdMdTWaT3tApze",
  "key28": "5aVmfteZveA5VjXJnvndWrmLiRrh3FTykGgqT6Jp97Gx6rKdN3nZwN67iCZC9ByCg5Er4iFXxr1f2G7wx2rWVfjq",
  "key29": "y5o5ZjdJTvE6JHQt9tZ5jY4Qkfjgg4EJqT8QF5qtutyATaPTa869GGwELfRkMv2p7R8PBWfFG1BpJoNAmNa2Pj8",
  "key30": "4Ju6a4KvJ6dpEQVYGu6s5o2zvMnxA5YUgKDHtUXdmM7GiceDj57T6kDboYvvNRXopEzuuoqoJJqk1Tnto7uN6jJn",
  "key31": "3295eaf9fdmFr9DdhzRtNN9MLdyRqa2RKgaZDny8Pz4dCPPARqwWzijEB9de3YLy1udR73SB9JeZLJyB71ybqagt",
  "key32": "3teriGxqbZvfYJ5bD7DR8zWbJanguCz613GJnMWF6mdChmTg2BtmiPNyRe33N6Xdqp1XBUJSsHuEYhAgZBcr4i3p",
  "key33": "4ZBxTUdWjiLqQXpYFu3L2mdaKBaop6EPMb7GaukEzTyF8C2x2m5njURyebMn4T6ARx4m7KTqgqACq3YEqV9iJ975",
  "key34": "3WqKwG8UUzpytQttWAeKTrcQRqboqd4m68CXhGAQtQFrRLeBpgxRWWyYWkw83diizC2DR7ATFxYFr8Hyu3yvVM4r",
  "key35": "2VAk7QAUh9pbjuwA6sSasUqrMed97c3T8W6qKRw8aa8MzDvttPW5tzVq29CGT211YWSyf8GDBJU7w681YFq92td9",
  "key36": "6554nVEGkPnaPqnk226HFEqBd4vAxSRHzXQG7Xwim8gjEy8xTjKW5ayoxcoEPSU8i6HkJsk7jFMyLUoUkAUsoJt7",
  "key37": "2DEUftJ1BoYQKEjxvq1sAGWBpoRF8KRNdZRJsf6tWMms1N4P3MVDEyT3boQadzVT6qtMEheXQrNK3PzKR1dwSvut"
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
