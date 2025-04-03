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
    "56VT1QAeorGpaL2Es6qGD1bMadsuSvBPsHnnwdRWcguytPMcPyxqNWTwGy3iMyWLjEtpXoMF7cuvp27ZCD6tPgw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFh4nAzbPDsukzP7i9fM1o8puiyV3C9KcWSTMEBLxNCbHmi5a9ui2mi3Mu9E3fQTxXqwUgqnPBaFpE1tP93Sh2k",
  "key1": "5Z7w25HpZg6c98PeWkxibySxwTYCRBxgLJZsHeAirrC6KKvyV3BRf7P9yBZuGYQj3wNaEvpncg9gFb5r3mLmMqar",
  "key2": "3Gvt9EWbMCZQHMjrGyuAS5mS7oY1cePtaQwzm6BZXzoK9iaxTCxrgF5yZSrvpkr1onaSExzdPC88UPKfvTTapUSd",
  "key3": "53ioJmcawpWz75eDjBLXj3DtSXefUCkeGULa9SR4y4xooNa3YEUgVMwLS6fRMy2Wd7nAEmH9FhMrg8pWJMnWMqZw",
  "key4": "2JMueRiV6M1NSY9Pf513XAkx2zAdS3gwx72kf5tFrggiWaA9JzJWQFNTucVeyvoeSZcfoQgVV1AhaaCaM3tfo5gu",
  "key5": "X2zDe3RRJ7AsrWeX4A9zfG2bLxxYUTFcMKVE8Y6eibYdUSKzzzk7RWVrfiD5qQrGTT3h2Y4WkZNCFNFfiP1nZWp",
  "key6": "5tMWRTTxihJ3KBti2KWoydDDi1J6N6cpdNvCDMGCED2dEQs2zjb72Ze1gg6mbJqyR8uh7n7XdaMW6APPbgYEoK5G",
  "key7": "drpe1WxCER2AV9uZdxmqTWZu4wScnd2xedxZdcj5yqKrZGUv8menCJRZn7k9qwuPzJ2VGozExMT32LVjk6cqgQS",
  "key8": "2zu1iaQpUEBy1vt8dXwE6dTwAr3WGgduHJpgSbLPFiTtE9yF1Q73FjKd5dYuQXBqo7XoHFv3MNqixatFac4Aa2xE",
  "key9": "5ovQa65NfWV1ECfh4c5Za7SFqpVBbsecLoqJ9QZXAAgYFeYkJyNchDmoZ3ufb1Q2gFsqjLDVBvZEtNVy7A3GQTJi",
  "key10": "4xGU68HcCN4ngVHpyudHhUgNcuvyhRnqTVhE3MA6MFKgQqpe1n3Bd6KXij7483hZ3HQd92QGuJtEyQSE9F4Ehkzj",
  "key11": "t1Ea4iS9E29aXLygiAWMLHiNkQMFKe9JDZJrWqMvot6VNkzVhE8GZzMteN6NtZwNAw1TzBzzhzmYhJwSqKgaLHG",
  "key12": "HQNdocisepiRJvgUJjazJd97ikrp7ZY8bufJv1UkqgF5pwyiAm3Lm9jfD4ebUPd7mu1LquZmbsZrern8McGt3RX",
  "key13": "5wNi452fdWWzPGScKbJcpKqZJqut898mLA3SmV9Rrg4bEnV7HayERDmZAUXvbFSBhNTAUqVbYG6iwApWNyQCiynq",
  "key14": "k7gqdSX4RdycrCHEjGuezA8J2sahCt2Tjj2qn5i4a6e71CzKafEAGHuyqUxTgbUg3HdY7mERSu4kmukXa2VF8Mb",
  "key15": "27QpARwptHZjcujhwgQkgGMcGBYaRgiXLkpvXaaT4Hix5iF1nxaLcM4rYDjWy4RbcNAAT2Eh6NeBnTcMoreD4a2E",
  "key16": "5MkfPQuVHKtrUHpCgotzDp18E2oputaXRgM17UhQ1apLefAebwrXb9EjXNC8S7USLi3dJbWenpKkERK7s6jqE3WK",
  "key17": "VArr4SckrjT4HisbFZbb9hLnkEtx3iVjfEkHgxcNZQeaPcha8dfq4NVstxk6j4FNVj256svRwqMEAoW7Yv9zj9L",
  "key18": "63J3DHXnG3jNnfzEZJcB5n6GbcA5bee32VFXTqwGEcLe356MuZs2jN9Wtq7mm8bjvmxrsXkTbQQXeGhUWYEGM8Pv",
  "key19": "26KHs1d5jKSTjFn2e8X1vZ7fGZxr4LKwJhhLwb3ZDGnNTqjKKP9jU4hdC9FB53aUAKk8SDUajsnJDt1Qxd5nUkz2",
  "key20": "2jMmHwMmEVzHJzDSBKux8gyVRC9gvQXEDSBi9wpCt738dUfMUULM54ZRAgXyHYA9NoTHi7QMP4HHjPa1hjkkqNny",
  "key21": "57Zmp4KsAcwhtn5ghmprVBYcwtdEST5oxyQtTYr42Wve4N1HWLkDjwS7RivzMt7pvuZng5WuwckheNBUkimqbeaY",
  "key22": "KgcsRNKt6TzeqRxNMyPZjr3vqBPEkMbYmsJsaGfYuMXYukTkeo6piWPBUZ9tiLuNaJW7fN6USvGFruokRhErZzf",
  "key23": "5wG6xT6o88buVsY2wpFmoUMXpxNcVuZ4EViva1qtoLv9ZD5U4CHxcD6NVajJ98sV9ZK3r4y945RRVCMxFHAYg2na",
  "key24": "59qz6THY7txsX12EA6kWHdGrdedAX9HkdXHTgroXUPhMQCCbNtLwhPCVBazHGL3TzRBcHNMMBYP79ujgYQ9Gy7NG",
  "key25": "4Qzqv3wnTpQEvMk47XCt1k1P9ggQ37i8PbtYDvTkjb5d64kv3EZExjf6i8kQJZGhTDW999T6G52fQJcaLp6Fxzgk",
  "key26": "38nd9HPwfCm6H5eUPUbLHEcDUC97MAce1TuE8Fdm9J4JQhzR8ry5qPW4Y95CejFVJvYwt6dgmuRk8trahxuHshpQ",
  "key27": "5rsCTJ1PuVypQw15vBrmgWvP9fzxq4GC3Xx9CzBtR2fmQchn53euBpMNxhGqydjCLqDA54bgNguMTvnxLhzV7Twz",
  "key28": "5ya8b2YtsRcQ4rfsAuZ6idbTD1DeXErtBQgDF4iJq3Amqsc8raZVNNvQHXdRZFrjJb8N55JsMnwfcX4sktk62Fzu",
  "key29": "5ZLMSQdP4YkvKX5edCETRGEmeMaqtyf2wE7iYAgonR9ejkrBRJdpveMWfCeFdpMPvYxKruEM8JHu6b6BUnH5YejK",
  "key30": "Mtk99FZ48sNEDhFcrWHi1pQcNGb7aJLyP7UiiCm1vdyZykYVrxMVeGs4KVC3GXWrAh4e9Y8RqHB3WnhadnWhW1m"
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
