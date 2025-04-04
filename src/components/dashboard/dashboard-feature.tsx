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
    "5o9NVKyVDotu3wBCgM9fJQjxPGw48jcZ2ocLcWLwpE8mGhFkC3ndGm3RAztaK23L1TAFFYR9BrXrFyxSSyvm5DuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "442WjzTMNJLdkqhyaQXw884wbLcCjR6iqnpdXZ4zh4p7PnoLjznWYStndDLBZGn2915JwJdTXTRkeHrtDD2dVmh7",
  "key1": "zfR6ngdGK3XbArjx9po3SwARy3PyYw4n1HRCf6q2PBC7JZ5YrtN3x634jZ8ApwWCHa7xA5Xy8xnxE8jcWNewsBf",
  "key2": "3pSSaCmhk4Z2pJe62DnAUJmbagLu6QuTFWYcznF63RtbCYrMatWSEJUvPFWBDHiTJLomNc27hErP9RJX9YxURebM",
  "key3": "iW47YQiwb2cvHRmb96q4KgRmjwuw3D25WVpFcCX6gWoKSeDQqa9zG2vAhznqNkFn99ajjPGc57hHhC3EK8CuKVn",
  "key4": "53J9GYUsY8UcwxrcbjqP1JPJ8jkuQG5BYDeCknCj4RtPCmb5mMXkyx1SHWaSLMe4XFUomdyguNkcnsD8xX2R7i9K",
  "key5": "4Qhk5jmvG7WNXQaQFDw55Aq8h1XCRvNPvQUA12yywaBjdx8LNaS1mfNiPRD6x3CVYCM7VSnxvfXyqoTQVQXMehLJ",
  "key6": "2bUWEmwgmTABLP8FRXAwUtgk4dVnxn6FGPbeNz4hHFRMoDQiKWTjEg3ixGGt1wsvNeuZtoj5mEGXBnUJA9FNtQbZ",
  "key7": "cexX1GHHUaXP3ixUbctFkrLU3KhNgabgUYwnNvfBf6Vhd3MSo998M4pTyi3tQAV1rska7U6zJRmUgnAdNz9sHNV",
  "key8": "4rRcikYA4zkfipBU8yrHqqvXcx6rwvidowLFMqJ6xkZWhtrv2UEKswYwmCGfEMfijX2xTwpCo9iDYfJGcrM9P1VB",
  "key9": "tJ7vPKBzPZDQk4yHG5atd7K2a76EkHxNNffD7ccoXDyUDAdE6YSvAvxq18VUbis1Ph8hQhtfABFpwy7DpDUbfxn",
  "key10": "48khMWBc2F2L25918q8MtKunq56PMar7f2hzpkQDKQRMDyM89wJg39NPdjZ6XakbfL54zWFLge24D6sLWV1H7rMX",
  "key11": "eDVrcQEYLVpHBHPBViug4KctK9c2WxYYib8A68NqqLqog8f3iUaZb6VGEubaHgcxj9VB2nJapbAqH1FA47FyxAE",
  "key12": "3KwgMWUoZEAB8f8XDQfZcoMDgXiCHFcwrMmVReCses4TYivpUppRK9KReCjpffWXzUG5fFiezPPQ5hYPcuBSro94",
  "key13": "5Jfg96Sxb3VXiRLjMo4qXt7cEqtziRuifsHb51VYdVogWioFma7rYNixV5SXDnobWiAvD1h13EYANg9THRx6WG9F",
  "key14": "2ydTTcPTpJ4JSZn1ejvrLmaan9rWdV5f9Z4cBETdtWQrW9USbZ6v3NQ6qGnBZQCUYCuduNZimtvnCCJm6kYsqCM1",
  "key15": "8PCYK8AzYG3q154GXt78WeJqAjL4ee2UYR4kyrzTqer8tJvbA9dXaFN4L7GERDoqiK4c9G8XBbceSACdvgAjKBu",
  "key16": "3iiAEoJRQ8ULFWywY5xJoirnpKd8A71KHWJtwk3TaQ7srXnR6cd2RWPxPWx1kNLVCFp1DqP1i934RZkX5Z1xLk2y",
  "key17": "5Dbmp2Rxrysf6NiLm7JnkDFhYedW5mX4q5WXnigK8SDakKgoSaJ5sjUiJKcraoz17LRkwMRZKho5j1mfwpqvAmmw",
  "key18": "4ZNSYD54puPDPXGcisXSHCtkgrL7dZJ2jt2oWYgi1AtSWX4ytRvstMfRf2Aw4LS7uaBpJA4zvtfkxCpU2UEeXi8X",
  "key19": "33ER9guXvwJeU1gGje3DG6NW1fFE48XH8o7E4b4f5wGe1ifgAJHFaYwYWZ9wmy2jDLtc6Pjz3dbA6USSB2zr1kU4",
  "key20": "5sw6pq9prxx9G8otpKzCHFTYWSM8LecEnTtyWxpmDt2moSb99hEUN2a71GchPVbqfSGF4iSxqWMjRKKQinaU6yYK",
  "key21": "3y6RpVzjkrJcWRRfctdcLgXWGHJ2hBmQue6K1v88zDsQXBMW41RpXR3UhckMTrAhhfws52ECFhVndNpnRuA3mD5m",
  "key22": "5RfG58F1biTBRLKYxUS4fgQ7ykkGQBRt3roBQTvhcYNcDJCXa3kGjBxyceSAWADjkBRpiduXRmjgBmYGRcVfQ5PQ",
  "key23": "2zFH7NdvcxWPn8Dmnm9fwJ26C1yKcdfNgBe6e5gz3aubEuTQRJokmcBsg9Pst248qgWFoHWHeXjeej25H6de1QrX",
  "key24": "3J4AgXzpQCzypscnMm52Jmq2pjooNUBbBUV9VD16bjQNXTYcvTBq1buhXeLL5mWjg6mW43pYr8SS3B7Cpvp3zaw6",
  "key25": "rZTG4a4syMAzzNRjGp6FbnfBnHGrLzhVVQBb7Np2sXryDfUXJD6xagnptC9gfZznQuWsWfcQwQManJTyThcdjVq",
  "key26": "3p9WKmJFAc6Gyd9SGiPYsZVP6SqpHxVwvg4f414RSpBDwHXL2Q29m2feLCm7SWB7xdq7wVV2cLHzvzBhLq5b6LHs",
  "key27": "62Xobmq6pfbLAngU2jJQBmY5xC5gGw7beWVbFW5MT8XubYsie7VsvUQo3PF7uXHabyiwA7f53LjVvcUPcKdfbfqb"
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
