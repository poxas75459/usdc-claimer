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
    "5gL8U4Z5Jp7XDmtpTzoU3YduSzvK9vs4vvmxqHaZ4Nh8vQFtyemxwhFYcbAscZqiNGsvcZk48FCQkHo3fyYw4jnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48F1J14QNK5bBJXPPwQVbvQza2Pu4LQkGsQqyQZnij1jnBv5LXNEwx1jex98sAe75eL6SSqddSkJxeVcjjYrNjNX",
  "key1": "3kiZHxsdxquwfEebwssTFc9CaY92mipmMtpFQ7FR3bNyE1pPLDxtF1KzBR83QWjxcbHQ1VaTEihkwAo75JAXd8SJ",
  "key2": "4ijqPzWqzVDb7Ws4WxrRWoDi3GQhbPN961ux4hN64MHiEtuEmw3kGzAoXhoibQGVA6ZHE1Rfe7RubpHeyWLnkxCc",
  "key3": "2fstweBLy5RkqJ5fzTQeFPNQBLNgcDdAA8K7iembpT7rXoYdAjPbaAzUyKZcXKvJiJwYvHbaoihKjyXWgb9BPhG8",
  "key4": "3n8nkJB92fvSN9grHtpTmHuPJdWpefcSmfqiRt8quPiaCWLjhyBJCLbmXHBKWwBm8hyQKCnLqe9vEgKaDj9EPEcK",
  "key5": "3bPFZqFpJGyMbrPpeySuXpYazVBGmi97QDL119JqwU3fhay54mXY37K6jESzyttYnwrUmcwDot5rFtRT5mvUdbon",
  "key6": "co74UQP9i8MND9QbJKMtKSLQcEA8G2S5BrKYwvEKWYTnix4zzDYtFGGzRcZta7r3j1R3TXXjyusj55huK2qoFnF",
  "key7": "2Sr5mByfZ528WCxxj1SgQVGGWbAdd3vtC9XDomX3gCjau4uxyLSQSv6zYZ73QLE1HCED3GAuPQTJVUsu7kRkYzFg",
  "key8": "3WY3jfjBcx8K6BjuKDK7Nu5932FTR98KCDeWuqiJ3WGTSp3qvEURJvAu3KRBZhdtveDLX4Ss8FChTxHnYemciuVL",
  "key9": "5aF9KQLV9tEbVXbq7ajdJyQpiDH5apZLi2AvsPytewy8rUUGk2QXme8J19g1xMFhggo3PEEqgEP999yrN5xP6bxK",
  "key10": "5QCTxsVK8f2Xq663fEbLhRALvKy3CN2nvLpb7dvvV8XQRvkM2Eafj5KCYmSswGQiPD62onmWNyYKKEDHQ7bMEAy8",
  "key11": "5q2HSe5YZStVz97pHp9JRAuZT8NPFS1Eqg36m9Z6uLQoNY7uzwdKqQVHfsYt4AwK55zjMUwT8avXVxeyrNkZwL7m",
  "key12": "5ZK81Ze2dM1VutvNgEenqneLQYLPucmKbwGuanDJ2hNsPDwvYsxh37NmpGVKeDRcugMjKwsg6mos4kfcQrG89ZQP",
  "key13": "5vMyVDY9WHrCexyb1igtvJyYCw1ZWb1smFZiXtDKsSFshLYHGAHQHSBuX4huPQWfsUM9ixZ8Jc7MWBCWvbyAeQ6N",
  "key14": "5vkChHnUkGn1i7KJwCYKgAnAr7YKNTxKFnzZcqgmm6z8uTDJo4AXfcm3CgyQkrsyBn5wNRQsdYhZPQFNtJXZ3C2J",
  "key15": "om8m17BG24PXpeisV3PJcakF1vuZzFoJxFrnXeT41QMkSmVZ1mBrKsBymcVwxG2suKiWBJ1mci3SN1RnSW7RtQS",
  "key16": "3GxhXw8DrqqGLzCTmwEbxaigZtDJwdiqMYMWbPaMpZWKqhwTsGDDnThHvRMdeyHvmZCAGBsJ7HLFpy5B2qUxy9Kx",
  "key17": "3h2x8JgfryVdJk6mm9BB7nqxJWMvLMNsBrmfoZxiD7dp8aBWbYzGqefRgMRA6tuGkr9TG7pMdQCgbBAyGBRQKkrb",
  "key18": "5ieRYBSfFawvhYnB17DLiPpDtGrS2SU75YxmN1np2ZZTKJxiZEUXRmacqZh5ngfqhvcmSSdhG8rHdLpnr3j21Yrk",
  "key19": "G5xB5e1xxuu9UQ5JmfE8FF7J5f8pw5SqT6qKkqU2ePWAsY4Mi7EKHpw583gALDrH8J28Ed4LW5N4xwQEDeRBrMz",
  "key20": "4jgwYL7JwFRbWbrZNnMVudLytyiuo5432vwJvuGVcaoized8KZCcsCaxP4DLrXqLm3A7Mz9GYNwXTpvC2SFCKFyJ",
  "key21": "3bGu9aKdv5k5Vyfft8ZNUPF5Jqf5ttQvwtk2idovr8Dq1ubL6mCLsL4if95SYagqXCUm4Sz5x5tUNAjvoMikmwQx",
  "key22": "2CvVP4EaWs89oUChfWJieDM7ZfTBP4GDQMYXmveA6HaS19BRaU1EAPua4gkko7TH82MYXy64Ws16ZnhoCJU5K3sG",
  "key23": "451QKrdh14c5xu6CWq66xRbvjF2gPW5HHKvkrVpc2jD7p9ftzuGp7HuDXfCBPiSwtyFdDg9XiJmarupmfXvEQeFV",
  "key24": "42R2urXBT1GaG4oUwmbwtNuv9sYDQMirFKaMkBmt7A4bwzoHknZs5x2tefD2iJFxzvBDfEXcmdk6gY6TRuSmCwtD",
  "key25": "2tAKbFA9bFqs3KZiK82it5LDV7jUatLg5CcZF5Cx2rGZ3AfwiYjPTKhKzvgS8qMQXZErvxSAwkkV6E2zCPpSK6a5"
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
