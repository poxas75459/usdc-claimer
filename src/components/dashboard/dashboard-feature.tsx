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
    "4pNhVVhBgVnmqyrKbHLy2gj3Zu3hcoY48QkyY2puFEbqqLK8dWC8gRov1kdjWMfNCPc1KNbmYMuLYo4kRNv8giVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34SxjchAAwgyboDv4BH5Pv8PB6yWxL1L683M7BbyqH2Nvi3ykDN56oEVz5jah4NtD7DfTvtWTtzAK3vQsEMhTfwW",
  "key1": "23xKMkkU2Cp915T8saE7i6XM8r7zZQWkkiF6VeRQHaD9sJQpb2LaW1sVKigyco9RqT5aoRJz9Bpj52fwTYYBPqJE",
  "key2": "5hscKm8B72RRWxMyEb3RcUfEhMe9E8j5whMyHfn6Q4aYbpE1TZXBteEfepe7vWEXscPEqVQiKfVzTjVUxXbEZVMs",
  "key3": "4aa78DUKJ8P7RL4cU5tBuQVCuFR3sKGvpgKqviUnfHW81QWnPuaKaqDyTkUN4vzTFiiuhreVzS8MJ6vFtMzwyf6u",
  "key4": "2ALrKQTZ31AHJdjfM5KxwzMemQUPL8x63mCs9eHwYgFw5oGBFD6FMN4kfjsSMFX4G2RYMBhjHNt7j1Lw7xkqeyaP",
  "key5": "5E3mdry6TgVkuoouCV2Jg9K6X6XSxJ3Rzy5NozCBhCnDZrwH96q1uHCh1GgvJa7cfoFHrXzvg5U6k9oKWjEi24Tt",
  "key6": "4DbBcqK9LpcESXEhGNR9nFYT5uLEiVpZMiCg9mxbNbKAoMfdNyniEvGWoTh5noNWStFpKzdU1hurxLqb8fyVQfMq",
  "key7": "5ieTKXZ5fMv34TMdDB5DiGAPaHsuAr4S3qZVV3omrHtWn19QxpTuPXUafHFHR8Dxe33fJtyBp5CxQeDgH4JwdaaA",
  "key8": "5gqzFBHohLcUFBTtiDop9Zr2JuZ7h8s2vrEmUskXPmX8LgZXZbNWDWYqGGQjdnuzyEVDChjvizqptsWhxhDJprSE",
  "key9": "cLrMSrmXj2Fzftn18YKCh8zXKTxs7xwpKeRR1NVHjHZgBHZwweeWbCoZaX97ZGbL48tW3aSdoRKVCMfKc21jT2u",
  "key10": "2qsrpaU7h51jiwfhcBUyfTEaL62zR58v9NWc8CMKYauezEkXiMcHA8PqSyEXLfudXYuvj9PURpkheK4PXxnQVHx4",
  "key11": "3HkBWEPdSje1M9wyzugX9TPxsMvQFs8njQym3hUcbPqUQtPPBzAqxsLw4h9AZfe7N6xmoXD75qSj7jVNHzDvZ9nh",
  "key12": "2vTYnHFyApdXAy36TMor45oAEJRqcRrVkeoVMPstgezcbSquHyyXxVD7wZcDF3PD8uHL9DiN4jBqJscqXQT2BeQL",
  "key13": "2kCZmSTVKiSdpENiQhBEPvfDDq8KZtvt6gLZvLBxNij8PQs1wJ7NApvv7oAq1THowT4tzhWpVQUKRgDbYjZjimLo",
  "key14": "29qXgx6ftfnQpEKeD4woq57ePZ189dGgVSdxeZR6AhMu6FbotbChMmxBdqQ9dMucB5RyuZBDT1YSx7zDnJSCGng2",
  "key15": "5zEuaHz5iVo9NeqnDv9Ec9bHARY3pG8YuqyVsYSxhbCvC4EAGhDDrkBXRnmZb6Wvr7dA8pRnzAeTPRp8VjMeuY33",
  "key16": "4iCM6juZMjMpkDJUxfEgcPnNH6WzVVYhzyYCVEc5kuSEuziXTyeG9R1D1yGd4gXRMtNoGa19kFJumQTU2h3vdRyr",
  "key17": "5nJS5NkFkDfTYnwQxtmhjF1hdPGkVGRJ6Ucpt9UbFv7rddk4dw7kE2rhaqsVuARNE1P9GMbjaJYZCjqeZF7J7bmA",
  "key18": "7kcgRbUEoNECEnmAvFFhtivbgVY8SA46p2ZCRvvnFw9yWxdYhtsDfPiZAdCqXzDYXdWKciz67BW3BAY7HMrVtms",
  "key19": "5b7rArGCQDGqyu2xTbfAEVVoX6iRyCqmFxFodxayWz5syGaL8rHh38Fg2at4MsE8D2dF8ij8XPW4weQZ4Lnng4ms",
  "key20": "5yt6d7HbmUJ1LFpr1WUyE8PbBiERaPbcuSuTf2WTsLgpatTAKmMcmPrh4gmMgYLaFCxWWWs5krUURJdfFy3tZQJC",
  "key21": "5RghDWtDyRZ5VTJtqtDKBRds7zRJUMmRobrkbtBPrtPsyxavxbsKGVZpRK73J7yyRwHSaabhwPSKHaAkGpyGfCg1",
  "key22": "3HM4Smh6kC34fjJrEAbcptYArDtB5B7vb92qBSKgKNBzMrXMSjLWC8A14SJ5rf5PtQZTNwnSkgYcULN5qbrESppv",
  "key23": "5jvpS7CeVmvEprKinbdChHEzzyaxtwWQy3Nj5EXYVTeXTgCW1V8hRWsh1bH9tx6gwjU4w6LSYsJA3VmovW2biVWu",
  "key24": "3x8ZsZiXXbauRqabdfoMjuXqXju87FGkDoCdbQU3RD37XuMXQbZfq9E7VRXGGnbHDYZ3TNaRyVt9qWKqcdcHYF9T",
  "key25": "Nv4L8VSB3BF4mYaARj4HYrGpGtKb1YE78HKMu4LhNsWNtj7Mk18Euxx2B13QnZy17uEfEWsF2WfjPzoK9jTS9Eg",
  "key26": "5ZnATiV5HLk54inBE28MqLF64fFwUy5VgbCMEz2w5zexqw3Tnovtvd7BjsBKMQYDAcuNDCC1Qyx3PQWAztDZUPPe",
  "key27": "3LunSyP7kxyD1wtKpxcCD9VMKemNcdSY2o8VmUXxCVMNLEGFAN3itwkv6pZYmT2yXNeKPdogh69JonS2FfKeR3T9",
  "key28": "YQVYnLS7QDwKKHG1B8Wc2TM9P7LHU5Y4JNw9cA6tFGGEnxZAVuQXeKgreLZjXVZqaHC3RgQYRrkvD7hM4CJXWsW",
  "key29": "44pRc3cp2BQxHcnhAyufH9BfbwihZ63ySx6zFz3fbpU5ycZmFuGAL7zY9L3JPzUJZWKpkaDDLJ4vXAHf6YJaq2QC",
  "key30": "2CUL4MLfZujrz9K5k5gvQGu6MQcov16CZjCyLGZMwYwppAB1tYdYR9mwtnf888uYVELAdxpxisxAvTMzXYqQ5XLm",
  "key31": "5DqStrsPck2JmnBsL1BK3xiWaTLsKqAzPa215cFPZbgqmERov2Frb3ECj1L5sbngCSkH7n3Am4V7Ao3GUPuuFYXJ"
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
