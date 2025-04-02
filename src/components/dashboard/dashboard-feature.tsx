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
    "5ASGChz2onKpy3obgq65cqvT3s5aKPKfPjxT4nbSgs3cLFabVHWivZPsdUprUnqaZDBuKeV2xEyVF7kvregVka2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45MuEFvV8C2L9MNnB4e5hKERcM2VtbV7mnMG5gBdqktYbkYsHnsqNxAThaiJFAFAknkkv9NH7G6hn3EW5jG4EWf2",
  "key1": "2z6W5p5eSjJ7CQpqn42LrowSUP7YsWQBWYy4NbiNVUu7pUHuhWsiSdZP15TLj2UdXyeLhvcxEYRAEq8NNDvKwtjh",
  "key2": "4hxm51WPwSh14DkDi367isrWxoCbMEbEtdMMHB7JYQJPsi3BKnvPSAet7TMwAUbt3qUvqTGM5fbaxxh8GgjCXigb",
  "key3": "wnRy9fDUphnwr6FciQYZaLpj4N6EP1qFZZkEi7gpZfccz5npcUDiCPeYf5WBiToQRXkSAgXs2v7QYo28ujPftGn",
  "key4": "3PZBzxMKQs4EQTfQTc4G5dMbGe6bWpHbbZTiSUJeMUUdYtdAmsgcGbVNUPseLfmU7iRTM9feZ47p1kkU9ooBH2XX",
  "key5": "3egewhHT7L8XudKpZLkMEJ9TZrm8ZtHr6CBvXGst2Sj73JxMGCe9ipqQ2wqsXyYPffn1yvNfn7fCU5gybHmw94Q5",
  "key6": "3foMXkp4JTJPATGpgZ1SYvquAEh8NHAdNQ5iPiyWWrm2ZAQa1r3F5ktaksW4EKn9KeCHNt9LyAy5TdwNt3asJrAu",
  "key7": "bqVCCY4BWdyWLKS5Shc6iiCuPb1YaJUGUz8GLuRQgm1MoAXsftgJuVtkp6WNx61AZRJbPk6jJ3m9LxHdW2NwxnQ",
  "key8": "3MGDC6cynMW3Rkm237mmktks16Pe2w5mv8oRjvdsAKvoKm7VpmE59R7drvJ4a58cXc4GYVU4QPUXHN1ZAqN1ZXPw",
  "key9": "tSXJ4bNm8ruTWsbT8412wR3SUmbzFvGUb1Lz4jHr2GLYJz2DQJ4VzA4yr2cCMp8NY3gcgYJXepDELUkjud5JjHx",
  "key10": "2AhotZfRM2xnDuz6ytaDRQnLyr5vqKApaqnExjkdD7xAvZKZs4WX9qG8MDDTWSoxJCgKUdwa3MaTurkNmiVGJyYB",
  "key11": "ru84cEmEUfCPArKZx2k3W1xqpYg5A8PHV5i7tyZmeWSwUdpKLRCop1gbxy5QwBgBQTQbmFCQzfS6FkeQyRZNNaH",
  "key12": "38dDfs9MBuzouHW3iXBwiRDpkdpV2bEeZuGopgUewfMmjBjXF23B2VaThbXnu7wA8hhtA1dHJYiRsSJLU7NNcH13",
  "key13": "59nV9VVobjnavLLZBbnK7xU3DobrLXYYvuLk2hcpiv2nCTQr4qVR5WyE66SxJN3zcb2fzKyW5qvmh2xHGbHiMRv9",
  "key14": "ruyD5KCY338LrVzEPZjGU3EjUFS4zkpQud6KEopEHZ3nYodHNrLkoCCJFrz8s6ZkLo1hpboJcY1x3tuNAFcWaMK",
  "key15": "3zMJZZp8Eeq8LnXgfWVRnfVikzzfojK8pnTN3mQzGJT4yDuSWmi3j6JcGARinZC7hzyUtu6eYL4brGMTJrMF9Qtg",
  "key16": "3NQtRbrrdKr76m8Am4phndpDJov4qoaY7Qf5yzrMf96bkxNaFHEHkCfvjeEDVN7T9nLscqspzcNnX7XnKj2DCNPD",
  "key17": "3JGBQfJmzP6u77256tUGEfaL4Cwi4rQM4uHFQpb9eMeBJGLCZJijWMW6seuGYYGxjY5nLxbf75PFripnG9eKof2d",
  "key18": "3aKB7qpcHC8p8SSTDpF7ApxzBaNY9qBazH5wpaz6KnGSCvjRshFgZj7rGHPPHugaqynauFtqqHRhsmaDhuWYq6vt",
  "key19": "2RK1fJwAj67snCibRS6oVPKGQ9yEe4MSsg21KByshcRTip943q15SnuZtvPrmus7n7u7r7C8x3KGdiEzhqaQccbi",
  "key20": "2YKUh4EbLLcnK65Gbbv4tejaxP3eFwJ9Z8ovm2QKfBrg1FXUan4vwvVGkjj469hEMqAxBuVALoYByzv84jUnSpfd",
  "key21": "2pJPjhWWr3DzZFZg4xQ6CdaCpJM6qfBekQh6FSCLdy9DLXKtgDh7zebVjhZ9o6ZAP8pTsCUud9KwDnXXNWuZUpkb",
  "key22": "w8mVkG1AaT1XvkQNTj4V4Fu4UjY3zZWDSuDGBFdvwByyhULDBFxXLdFZSLsWbswdLdnFonCsNgD9VYvC5NthKZc",
  "key23": "339BSKZuEZ3dt1JyJg9VSrDmY9mJm6FkKScb7aMNpR5Ftq2gsiC6fDzi6nGWuBu7nqRrtnoPAgMfCh4zVFnmm2i7",
  "key24": "45SSJ2MEKCjkQDKTDE9VmgRftgjkQipNEhRxdapUx1MSygpDRhJumxh4dyCK3ursn7zUwTEnWLaZgYBrpBjoFnpE",
  "key25": "3i8fV9bGLXnWVBcxEVzuYJMP4QD3uhRTF1PU6jXRnRmoKiz4PLEuq4y4Jm2szEB3daYCC42mJoVQBswoCnoRK5YL"
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
