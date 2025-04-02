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
    "2YSYEh8REcCcEt1DCRbJq5pDAfA69HPXm8tTVVkzvQ3WdLtF6zoRBeGdFX5zxwJumW45L2fgu9B4TLnNb5z7dtZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zgKwyXk5DYwsjPpGeTaW6mpbxVhvddBwWDuJf4wYStia1ESJyxzzrYgftyNtN2FYK224iCZBNX8L4qENjKcoiWn",
  "key1": "QLnYyodNvAzsA2btpx9ywjoCs1yP3NypfMaGBKkiqofs2T6k6vUskJZDBPVsJUhSzE7DSdMjVAAGf4Cs4Mfs8Ej",
  "key2": "5dQrj2sW5P8WNBgtoTGBEaj9xffAfSAfjjxgPpshGBcS8fEKRxq3XA9X7WxiwE9DYAQk2E57cgu5tgn2gi5dbwho",
  "key3": "51CuKopFbN9KFsQ9CtEanyDMeoQqeBKoM3euFERhz9YzxDChekSyv2XoNaVQGjbRUZAyb1zGWVRezQJKDpmrdHDs",
  "key4": "3QFsk9zLaQnmDyxYJRv8Fv7XxnaiLbma1yb999ywvunab6Htw9XaV5HtByMS3dBcB9os9GTFX4Vie94W1d5H4XkK",
  "key5": "3swfs1aeoQ5EtXRv8nNFB2EgQHN7zQ4q9dyedMLTG44HFsn3PW9qp7PuyPkTTXuQTsgheZugGBxyKSKBow4v6Yik",
  "key6": "4Q6B1A1mRcRHZibt95zvtUF3mDoPfdpnHUm48S2YCAcZhbEH7j8CEkFg88acHHc8CTnWo89LFbkK4QNwpqYrh1sJ",
  "key7": "5hwZmsqdn1sDYPwAvRTqSZdAY8yZzVneKzS3qNLCg4gKcixBrn3PLneby4jBWQepwhDjVSitgaiHJPih5Z1YUJ7v",
  "key8": "2qH5ZjpkKYxWZyQxB6YyfjupHknFC3XY7cwX3VodLigu9EYfbB8KDv7vVVkJjCHwd7ooYMATmD6KgNckYR3rGMxT",
  "key9": "23DrqtBz6iDhTbt1chQ1eMv5mUcN2JQSgMZ8Z99FfJNuZhrmqMPAqJnRqtt5Mn5h81MHzrcenkTtcp1dG6HryTZp",
  "key10": "2vAzxUjaFsGtjhv1dJpFkiKh2Lf8mJotSeLPXnWNdjJLwJ5R1fqb12xwqMgeiMRuJVdHJkPPa52VoRgmbxTufDq",
  "key11": "5gkar5tmMH8igycd6c8zoLHHkwze2VYAdXgjC5wn7TmEDsHEmdKzuEUd8c4ADTAUVEqoQb2LkmhVkX7soGTmY2S9",
  "key12": "QJPcWLQuzYgnqu2CUbxqFZY9BAS2KziV9wW1fUuyARpnxohvcQEAiMy5dxbGPW5d6HjyiZtJT8JQfP8WJcVDr3H",
  "key13": "4a82j3jtR2pp8Q17zaLtNhxAYs9PqAA5FFeBxqNLFASEfjrPN4EepeCYdb3ZKuVg9zym6gbSjM16wsWGCxzFJnRX",
  "key14": "4Uw9Cn37Q9GBYQEayJ9wVmgYtz1uUYA6fAwVQXkP6oRKkHDaZN6NcrVEVjDJyrqFfb45hE5m8ybQprhjT6yQmQoA",
  "key15": "3522L5mJH2yFnN6j7JwbwysnEdm3YkvZj7EiPoXjsSekhxrCpLrF2kZG8eMoayknmKi2mhmdtjZEoG1i55LNQGfv",
  "key16": "2azbq49679Zhvr9d5dD42QACvyQ3jEonXv8XXYAU5NBontwmHKH1ufu4PtrAmcaKDi73WDcVU2REfkz6upACT1k9",
  "key17": "3jmS9NakmcHHuDDgRbJETicj1RcfCxRQTkoneKUwNyXbCBKD39ra3eUGLMtc9tCX6Kh165jKgMYGhd5GjJNmb2yh",
  "key18": "jJVvnhya9qNUett17WvxopgFefVyp1rZ1PLzHU9gyzF3kHKdZqK38WavTTgtnrqMQ8UNf3fM4RxMSFgp1YPuwzZ",
  "key19": "3xs7Ugzv32DxHnK3kxd5p1T1aykQ12BK8JgFFLTfaHifm9wEJFh4HurqwtDLbma2QFSSUfnTBgDEBAtnRgFMbRyS",
  "key20": "CLiT7niyJ42V4UR3v4xtehJykRjDWPwBkVJULWCoZP5RnkMxSWPXjyrPhhrVjx7Ar9xEMWow1scjSh15eASY5Hw",
  "key21": "39ugLtSZF54aCDThe7bHLWwT83sP9V8HewwnfzQygt78aueQfi81g6V2FK28d69VMn5Pf4jqzriunYsWRZZapCSg",
  "key22": "5j9EFVCXxhm9t5mXkUBfN7XG3CxrMVmMB11JwKXek1tBp5Kw8w5t7xeZENBNkP2mWE3rVgqXgWWMkJuErfookt94",
  "key23": "4ZCYgGUXAEX8MjerHjGT4vdfTyuH8tnYnWQdv58piUjCj9eKnYDzKd5iLxGAX52Hkwi67VjNXqjbGQ48r2xNvGZM",
  "key24": "2JqhZ8q1eKfabnWdgskpzvKvjueMa31aamoyX3oueB5ScjDH5YkpHdV38pNsB15iixbojqZbMBs9WXmgSHxBLvDH",
  "key25": "21uVjSDPSzu6Wf9LdyYgFeCLxJZzheD3PL13H8ggZcYTDxypZJ5tiNdQXeF4h8VJ8KYWzXdqsh6aNxoEVJRe6PHS",
  "key26": "3TKLNNQ8AErsvB2etMMcntUxWJ8mPg6w9k2xBFGJ7tE8ZubDmUtMMQki7CDHE4yPLee4nf4QV7zcVh9AnQQWLBo3",
  "key27": "5St6Y63niHfeVUsG7RicnDmmFhVLEeNrg2VnGgxVdEPTpCfnt35YP9AZtpegZwD3hAEMHUARjRf9hGWiQHASarGe",
  "key28": "xvS9WMYxDySpqq3yn1HbZkwPhWsdzH9ix3s7K7dvzKmwA5qbsrDZ6UNwHNUpHT7M1rjajJfFeR4srrYnabT1YWj"
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
