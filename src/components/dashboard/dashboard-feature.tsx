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
    "64yYVUTPRkjZTqtq9FtHFbUoaP7J5adUFCFDi4dHoWCSzL4UPPzmnmAzamy7KSN2mxoexrxG5Hg2YnAbauTvCADy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29WzsAZZybrHNMHEssh7Rd8XFWeM94jSjPUzvVaxPGGexjP9PTRuQ5x9ynUP4HY6r7y8gvKG69DQU9T5TayJH8vR",
  "key1": "5G7sHGV6U8vk6Qwe1xySjnpw86Pdo4iRbckQ7C7xiJeL6eJLw5R5UjVcH3wq6nEDerddaKaC3Vgbf12HciSmPodr",
  "key2": "LkDJsNZJ9yxJx6aQJfiAq8jrn3Qof6jo5FJV7SAgxMXXynRxLX991ZUhd7FrWN9u2cmxe8tKUKdbLzM97urbTWR",
  "key3": "2sirqGZHknTTMG3QEJkhPqqeLhFVNMjZfp5yfscNGQEV2WQXjnBLKhNPXRpMz31iZjW6RSA9m1gpqRTSAoppVtwg",
  "key4": "2HCPwmSkcDCkri5LSEMJzGDLndTvbkLmTb3u8sLp6HK2iN4PN8QvY2KJpgVT5fLjkP6H7j3iTF2QsqKpCU76yZEr",
  "key5": "2UKUfyQK4Sm38h3kfT4dbZgrK5qCHmUsxUV39xHfS6iPiAXsrD4M1A5KTmgXWLBiMbCmxfDH3ssoMrH64LGuecR8",
  "key6": "2uqqXDenv9EBsAgaZW7vzTarb27UhQjbxUYPnim4GW3ojqSyjnzy9HXMFVWGqXcptVcy9fsinyJszJCWXnq3Xd6a",
  "key7": "khD7Ugp47mQEn2jQVXBf4aBBB4waMNA82x849M72eGugHKSioqAd2613YGcQCX1DUfHbLnhCr9w8JDJqkNczYKB",
  "key8": "2NQ6bDeBVngN3qj4gSj941sDry2eaeUYj9cPxFDveaJJ97S1PAFZ6mNe8KcM8mj49fqyioF7SgepodEG8C16fVPv",
  "key9": "K2fm198GxK9T2imx1npUrHqb9eeMFZ8ZyaaQ3FoGwJD51JS5r993JyKS6AvD8VRUD8YYnGJ6SSz6vfk4hpcKPgQ",
  "key10": "wU1cV1dJ4KjZpC3w8XHe6haoXo5NcTgQ4rGNYjkfg6zJysWpNry5nhFLteX5qMCHNmhyPn4ShjQwbFdey6eFhPq",
  "key11": "3R4NKvu9w2n3Rv7Dv2RwWU6MZyJQ8pmy3yshQpLaj32Uo9XScCSYTHs9zHqZcjWu6WdsZo7qbnDeFnrMXUVq6zD9",
  "key12": "57MRDpQHaG23UmA5m3sAMJP6VEfuLMqZugsK1EpKrRzWAfd23zyb1u2YyfTauPpsGqXNo7EnRUHgFipyxpSJFFhZ",
  "key13": "4TFUZbNZYitFuJaRVZcmrAPcpZCY3XQSbD6uMZwSVqBbnrT7Ucuxa9PsnRRqaSDwXFpUeJTv4eMoYYuSQ6LNJeDw",
  "key14": "56LxfPJuZP3vQtR7sLSmYVps8aZMMsGyXf8H2vkE3ZkcYEf5jrx9praE4qCuJ1CYGEdvEiTQniMcMKAuCmW9TzKZ",
  "key15": "5raJ2Ceg7Lm3ZqpN7JYXPJcXGQTnESjsqEnKEyBtjhbP9B8vexj3kkets8i4aFzGoaggqMZRccvYd69GQ7vXzBHA",
  "key16": "3Y6CcEkpimNnYBjVFG9oWhhi42J44UJXj1nLaiDx4WYENR8BJytUCBVjfXuLftxSnFF38DYmnUBG9CC2ooUbJvKL",
  "key17": "3n2DZ1dktSwNigGgZG9oto1gZ2U7UwABNR7tFH453fdnw4MsomeWHC1ewJfuY2SwyFf8V5vGKr1bYbUxRXYAMFXJ",
  "key18": "E2ZrT8xbEHcfxnBkywi1DhNVjqimSuoNgwfX1AKYDiELf2fRRCHu3vYc36z5a8S4QS96c8gKsaRxZvnNmbNwXij",
  "key19": "4y7mqo89xHUuEvhpkMDC2MuFzNG2A7ZsVrbnwYsKXketCA3SodpjmHYrt7oF7WeHtatqfQHLHdAK4ZuAvmQM3Nc",
  "key20": "rAJeW4mzR6mDC85opJurrRX8CYJKELTvP3C5SqHh7qBLovtA37NhssseTM2hLDfz6ai82kfdMVHp7geZF77ySmW",
  "key21": "XxkYu1nvq9hdBGG26XW3R5ubZquB5gFAhYtdJxLB7DpX8zkS6suZ6ML92etwFhQkswkAgyACw6rqrrhrYuaNDDq",
  "key22": "nn3subW4nmqktA9htMfZq3oEk4mHVd7M7v5HNA8GxRbP7dJbmcVtS38Sh7P9pDBytg66vP5CDN7V2fCDbv3hnCb",
  "key23": "398krMu8XVbcCY8k2n3qgp2S3om3wyfPe1hBamJG8bpHMdC1PPuWaa5dwQZTh4cVXAb8Ym6F9FPTPsgVxCMfLAx9",
  "key24": "5Kqjc6aqVwnzmZ3VXruNNv8CUSytrZJXRQX1mH3aoBCeLL8DkLpiaCUeXH1A7J3xGYrQyRY63hVzHn35S1BDQYc2",
  "key25": "4zZkeBa1mVadyMKijv8yJUS5Ca2t1jrUX7Xa2P9LQf34nV3TYbq1oC8wKzpdSoece9XGAGkx8NoeqZFkn5NzuAFd",
  "key26": "2CwRNtj2AsVAADH5N74TorQHrrtLVmhVQ3E8M9iZ56wSFhN4jC2YKce1vBnzRbVtz7PA5iDDmnZEudN9NwcUt338",
  "key27": "5DtfeVCwTrJPY4dvEreGsoksh97DAVrGFqFbyo48o8DhXZxqKhWKsU76tEvW9P513QLpXj1BDi36fExvWa5AK4Na"
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
