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
    "24uQedbTJ2T6mxS1axbXBU9mc69bbA3t9mcWabPcTQmrAiawejtxq42va1ASmYSmqTUhtWYgsqDGzsMsnnCvLbHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3utc3EXkDaY9ivXedBtmYca7YkVJtprYMYorm3pqMnqyxknovV2yQrwVbVSydHbMd55vp5uk7eaCp5kLqwjUpsGF",
  "key1": "STVN4BkZQECMJwY8nf2PXt4MVVtkhfc1dK2u1qBBP6anFcGpe2zSyVQ84gDfdXgrXAxRVbJbZrf8NhvcBekt3t3",
  "key2": "3roqy7kkR3mAHsn4dVDiBTKTpihjQvmhMZ9uNnqR8JDCT8zPRyMB1qEbw5oaaFgwenCpJNW3xC3HVWAtvRg7UfaK",
  "key3": "5Cgjs4WfqRfFAEeF46TedrrNk7hG8XKNkwaEp3gpjjnWDMWTEkTVgGeqren9ZczBBWNcwYL1AjTpi5dJPzxuUGig",
  "key4": "5o6cVB7tNFLYJqw1HMTg6PpsTh8yYXJXThJMM9gQmoCskki9YRjfU2zT9XBahq4DiqfzRn3Nyj95wJKNve43wfKm",
  "key5": "3AxvQLzkrqHHdyWP8VfGSUJcoWY2HxGUAWdFd8pZmg7QbLJgZGv4wKahZFHHH1gPM2UahMXpQ3og8afPPuGVSjyg",
  "key6": "2B6z61DF35YzVHLWppXuQvZQYq77c3DbQJFzpHBi1woKFUXn3pQssyDQD44mCM77kDoWBkTEnL2GPiX6mSAyQbmd",
  "key7": "4Fmj5KzFnNpKzKkp2ExdgwMjR4uQG3yG12rQwnFgdCgk5Wr8DeQD118XrChqWUFGPTLvRRKr6EZV5gwwX8ESRKR1",
  "key8": "51enRgzgUHesExizbevvM3zsmwBYYr7iThSxBoXsn3Ru4LHUsKDHH55RvenEDeCoMjCBDQzX1X2vSwV2976peUHn",
  "key9": "2T96xvJCn5rx8mbZXARWQWcHKkVNqnCE89MdRExEpHJtwpwrN43ZGyMD3QXvRsdRHqkP45h4YKSzeECXmnA5ifU2",
  "key10": "LNLr5NziqKfSTyTJCdcdmUS7FWtXQDR6EdeAa2Wka4241FkvwuxWzWC1rbv8JG3iFSToWiBwzu5ZBJLPr3K3eRm",
  "key11": "JCkTUMsf5BJjKc93QBmV32paN7bByphFM9EJy7pVd9YGQknUGptwPi2KBEXz5p71nQAsTvfJL555qjYkpgEoJeM",
  "key12": "3EADxD78C9saz3WCMeekUBSj4CMUSogkz99zZFRYXeNtwRAxKSyVkapZBRXALRky8LJEkEFn6JJ9bzsmseZn4yLm",
  "key13": "4GLP2KgHGBpNzB5pqAWGMFtb8Uz2kdJ6DnDy5Fpd1hi3n7JVuVRK8mNYAE8NBBgHa6tPXX3SvRsGQnCSyTwwAUci",
  "key14": "5QNmuCuTR4ryW6kqtEpgNV6joKSJ64p58j2nKkKvWGAsZR4gq4jAZAEqLUZhiZvSUmjGBHPb6troVNGUCM9imzXk",
  "key15": "3Qvi25k43YQQ7kS4tL551zg2xha8aN5qPbZjTcwyW9nXY3R5GW337mEcXjMZVfdfDodftAHwodJkXx1GFFJGq8Gr",
  "key16": "495YV7BeUNoSyWtzzjYcbiFMvqwbFWFX9F4gK5Zi95csRAGWeCjqnUM1r74FqXGA9kyFzHGdQwz6a6tBZgVVYcnc",
  "key17": "PdKLxUg26RXL4eqcbtN97Dsy7qSXurDkGc6ZbxRi6nWpzPYUxEydVPcQYyYTmYiPe1MnzUFQMopJHx51NMwJudo",
  "key18": "U7kAG1F4tHKkPXQxJgVSe84xrAShpkqeYzTyMxKFtntUi68uzKxCtNzMEoBzb3EF375TNNLG4kC4Hp7c4YXsXB8",
  "key19": "5UQjRdnbY5DSat7sL1c1oadx45mmTHE5pGzcsEF52j2EwQs9UdANsDWcxddbPmVZWuPaHHwvCgfoYqmUhf4dfZLf",
  "key20": "42KDE48NHHNme5W9h4SaNoPCf9Tz4MNCJ94BBXYJGsBGrCvQBP94iEJcHP8Fnh8UEaKQmc64fBQtC6pYp7PEeUdJ",
  "key21": "4dS183EVGSP2KYQ2XDdqKiUCkZmnqx4K9AwnJHtH5xYNhgPafVEvkrejN73gV2YVNxjCmPbv4X6UUm7yXXBQSAg8",
  "key22": "3sVMcFUekGxdvRVeVPMSTj2HeD9o7UDjAKdsTybzsF4jA3LNkNDV8yTTtRTxemLW48EZ2BFwm3Ti95qyb8BoeNPV",
  "key23": "VAD2tXqyqmaYsXMjPmERVt5dZ215iooS3xdTMVEqjhiRjcA3EXrfrCpRoAf9C5yzFmebQMRsDx2jtADsa8Boh7q",
  "key24": "5Zi6u5CqVnsdd8dRPPhaheB7qRgpy7VkTKGx15FqUdVuM9SprGTeTuPeGB8JXHDHJKCRZUMWcs1tAffBiKogo7Fq",
  "key25": "5VvE6Gy7o87XxUBhsuXARoBDEV5B7HbQkjxMMK3wM8UsfAPZKDf1Fi2jTxw97JbCTpCDTj5hHExb4kgKhqQG7fep",
  "key26": "5x43gukTbZ2qVK5SWBjLSSMnLdbNTtu73spJqVsMMods9g1DcpzagmqLD3LAnvf6QXfBVa8wKqh9qPGuakKqUZyq",
  "key27": "29CAxKzpfn6FZukRGMvoz6YdefzV8zm6nPQxqyvCNTmWB8Us6syidvZgDan45pwBTg7joJWDEE4k41TLG4r3fV3f"
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
