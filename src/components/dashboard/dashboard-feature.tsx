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
    "5DoYVvtak9YdL8jMiitEaJZ8F73QV89vLyTkn6ZG7XWKDThfh8gmWCQzwLFQhZoGAN63hfmr1yBxhdEErRRNwXJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UqAEWd8FtKfia1vVxumco4WKZUoJyVWJ5YXYFcNG7ziuu2ARpiuufzRFF3sEosonQWFDCG9EKSeCPeWGkk914vt",
  "key1": "3RxoZRS9NLJbbxqxWNSQ1K3bDbBSn4uGaeWMvKbgnwLKASSzfdZzZu2aA58vsxTepGPayLGmG9LwiaC1CuwzQbuw",
  "key2": "36yySfZ3gEBNBwwgWw3YYCjoZ6MJxX2i7NeF4JiGb8rtiWhMz12L2VNkKkG2uHpSATnG5GnD8SoV7gogwYos6NyH",
  "key3": "YvguQcxcY19HfPi6geF8Q7eEx25QMztJWwzKujoVbB3RQFzeba6C2HwXw2TE3sofZDXsmocZVZLTLiGNsZVCrXP",
  "key4": "2JYhMkcybCEQXsTLvKH9jrtpyopQVmvpskpSwuoQokqMsw6f5DEQ3YxnENpTubFmiDwqVYis7BbsYzaERCSHJvNk",
  "key5": "2WsSo3VeY8QREzh4wsKYe3zwaZQNa3E8gu3mJU9QxxR83LiEyn9WuGXzvDk2Xc5SgV5FvZWWj9aGJ7rab4NbWe5V",
  "key6": "5XVZUCdZxTYzEbLW5ceMmF2UmJGuY95Qsg2FFhFxinjTqS9Wyyi98x42RMQkYCzLizAMqSuhvuk5FoHbLG9wSpXN",
  "key7": "28QuqFXSoyv1rNkwM1aCRoyXVvDWqJ5AzQKvXzx4J2HvkyQx8HJTovw4JhkNGLbSfWhHBn4Ryh5MBLWUtJFw4gbU",
  "key8": "2RpaP7NDoq6vQ9kBa1tvreV8tW8WRh7pDX8hnqVaUYjLLw4W7vLq2b8C4TpWafmGWaBk3RYDCXUgecYD6UX4sH18",
  "key9": "3KiPdiqDWENAQyq5BPbv5fkE8fV3kFSQ8tbjRbSyDxhhjXWFKFR7tY82qPtHMHVzXqXD8TBj4G2MjNurDG8diBNL",
  "key10": "4FoVfK45U7qWVVdotjeDwKq1RJ3yPz2aAiK4yWmt64NM6dpXBdDiWfQHQdmCov2qFCZceU7FKE6YEp5ivU4ejMzZ",
  "key11": "3qt5AgQ24i9Xen7THw65PhwLhRGzt6ZeVJJu4LurBzm7DVMeuGncdxKJJz7L1VGrLUc7AuMauvRUYwNTKi4y7dbz",
  "key12": "4ApuDJV1wSyuUbLLiZXpn6UcW7cHgqf5G49fXgmiLXgVXPv5gSzKXtMuFgt6Q3nWjFpPHUUqEDyvmxycS5LqtaXo",
  "key13": "3T5UVyJTCrwjojHv6e4qScv3oAfDgs9u9wv4v7164RfuiqhXFeAkDPHfvJSQycVnoqGfhewXoRkpn4RBnBwPJ66j",
  "key14": "3sLoY6sTVqMeTRmW4tLeXDxF2vu5b6mLqM4M9ceYnY9CMuMriq6VQ1fxNTvtU3xAgncLb5izmnsS9t2afDWtUgWD",
  "key15": "zxN9LjMY6YnrpEL6C2FP2bAF7T7BsfgU3hR2PeVmaMawF87Rt51aZe7wt1PQo3cag3T2sCwdC2qhjBZiaZsHbBz",
  "key16": "5DxVMSJKfhaXx2QgJDEoNXb7X5S6xAgGSKjqEgXf47zfsgDJgeaJoKTQYGn2ikhYwm6UeJ6UY6Qw5aTozWa1KbQJ",
  "key17": "5Pe4U3XCjsDSkxz9f7pmSVGp9FAXTXRjpVq6FYLjjkRWPYLgB4qbRZx1Q6wKkH1UxmLfAm2ue4WzAVBpJFVxBFyM",
  "key18": "5Kx6prqY765baGS3v4ERoEtqPyyyRCgw8j6uxNCuY4TqySXA9rq4utqSLEffrsYDuc1mnG8NTsyMYZEV6WTxyoWX",
  "key19": "3P3ustHAGFRH4RXc267w4HzpNBDFqzYqPMwvTCXbHpcbyKgiNXtqCWRzxX2BMqyLbXGGTgWEC1UoSuw48b8rMwxx",
  "key20": "4Ay7HpEwrYm2zXnupZ53v2TFPJdKDxxU94nokL84B9E2TznDJjcsfdya8VyEYKd7DcGbM8kw7dcGvJjkxEyzdGvq",
  "key21": "2stgS4fJQEHHmgeXb2isuyUMaNzuWL3T4na7EZUHteu9q5jocofrYUemzGvmLSXZD82EUjB2mVfsS69xcC2SWqvd",
  "key22": "4dvSHa7d6rEQ9Nhx8fYDCrhSQNHxuosZWKoWWMXPouWyosJieh3AWkyMpCPiHHPoHg9JzKJv6ip14m4jjXprCtNP",
  "key23": "4a5qFrZystDTEMwLoD12hWsJy4AaX1NK2Lxt8bqLavbVJrr7LTqCF2hjrFeq37dWWMrGx3Z8Linu6kQCz4w7UwQa",
  "key24": "4e3xzX5BaTuzgpPTkfRa6g9ULucaAKxuF3A7TgQRbaZ9ZLksU9vUEGykvo5aWKw2p2foCiH8GrvfiYgjXTkeCn8g",
  "key25": "56kwkpNaBfmDRhw26doYkBhPGD7uCBfYTMSQ7bwz3BQztytHfobJWmuLMjR1dAL7ScnJGHGP7w3iDtWu9znrRgQ9",
  "key26": "56QGngub3sx3E8d19XJYyvadewGqDGbesBqmJKb75rE4JnLCSkKxXxVQjwXMajLjQ2U3PxtNbHtgftgC2W6bP9Wz",
  "key27": "vAQAj1Rppe4sDF9e3GxW4GsgqxEtFsWEv3GLwf1Pab9VqTf5XtDUZMqu3585kYXW7L1AqEhDDiHCQWLbb1MfhXZ"
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
