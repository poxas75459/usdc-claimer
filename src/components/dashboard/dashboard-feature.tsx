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
    "BbhHEnxiFHqzJvRFc5kRiZD26rkZX6tZfsnjuBByZ7r517UuPRsbpi8yTY46gEwapwHeS6yYfyaZAph2tJV27Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4AozCo3RT5qF4Utug8UuwXAL8JH3F9voyQCaAwf1wTX5uHk3G3EcCd1aTZhwWyCmZ2MPzg3sPThC1yPmNEfBBT",
  "key1": "67ovcwYTXoNUzbo4Ls1CYM1h8hLFAc5epixBx64GdLg3FaR416bDFscFmasKFmgUVY4sBnPFd5UdAa3LmWG3N8Vs",
  "key2": "VNzANzjA2eVybEi5wi91yk2ygyJ9qMKpv5iMnj2hzCX1hQKFbmqgvFx2krxQRJfcNhsdnfuiZzPtE4iDCTEDWzX",
  "key3": "5MU67mMXPV3hCYCcJwk3adggxiGiJF4dzmodCBhrXdyqnXyMoCumW2zHABg8GDAoiC7L4d4Y7L9ePEiMzMs4qWzb",
  "key4": "xA3Dr2pyPTXuie5LdeZ4TxcsEpqwumiZL4qX5aztWPji5NubnHxPTiGwAwgPYKqJ6KTK9qCTZHY7jPb17jXw1dZ",
  "key5": "3xgNdcpWZ12TDyQVfJUWKuBw2XYTWwjjk7W58mAhZ8jqsu9n4En8RDetjqdMNDY1k8qL1vYiK9KmK5P8wtph8UDZ",
  "key6": "4Evb6mPYocPUJQZ6vpxG627ZgtryCPjd6KFzKBt4ohHcGwCBWvXMEk6y9UNCw1dom62Qd5jiT2rbWQpLSyUU8yAd",
  "key7": "scK3ouUvaVqddMAf4CSS7QkktnishuGoSjmQ4Jw4DuruST83XCnDJKKaTaAeiJK8ydYLUXqeq4HfhKo8Jd1F1A5",
  "key8": "5wWLJogktU82A4HEZCzQAoHR7ra488QuZuZU8aa8quZHYrTHY5Cz6qo1fhWHXs6nNsfsxoMvmiAh68jksgM5CZYV",
  "key9": "5eiUhA9Hi6cdqhsqtFfoaR61nGhMR9MuwLFez7dxvQc6RzkAEhYxV3uAbgsK1rXJ9Bt2ovK813PhSjidhPEPW4Xi",
  "key10": "67ZiAeNU4JCPCjY4oWir4hcu8n2okaYkJLzzpmHEr7q8Gb7wsEjWuh53cWRqgXUeFn1XZEUMymrU9tjCHTeGpcA7",
  "key11": "rctxDSUtcvpNUySxSrCBS9NWmgiGZgK61spSUreQuL5HuSCSyBq7okXJm4QBQhjLS5bQFBGqdm3HEC7YfbYBE7j",
  "key12": "3hwyuwGpiWxt8dxu2yCR4X4cuUKpJvvhz7iM9o5scFA3gi6mF4azSNz4eEVFXEn3J55QRgoQhjXu89ttGFnMjtt3",
  "key13": "2vR2BwnzcLsceKTUGwA8SHmHBY9KhUWF4ro5wUR8DorgQLd4xBW9wg3rABqDATtErH6om7PSpDnv611ApuYD6hGJ",
  "key14": "549SBV3a6wmm31K9687qnvs8SegVY4AZV2jgiXrtWxRJk7YJyqoHNQdTEjApHYNpuFeDKxetJEnmY2eQqyZZ8J4H",
  "key15": "MiwFpxsXEcc451XwroxrTzbRXLqRhpV9gfEVCs1kQc7ZGDxUyiTP5pqfqYFpByo73egPbnmgbD8xSUrigUVfNg2",
  "key16": "3xpPkfzVessk9FyxSkv5zhp788KJ2heWxsg8WVXfvmBVvyu9MZJoFTPe5xsTgU1YFXmMutpSqx3ZLrvhgsG92yYK",
  "key17": "5YwwQeZzQkH1hNKs7HRPRQpipW3GSuqXpGTNX8CSCqaG7vAQZRTx4v4snSgvojTz66x2vezKhjTzKePxeRAT71L7",
  "key18": "2KfJCissJcnFo7QiE58uLJmj2rJ7zBqyzsMPyHzb2cPcrkvUkzh9XoQ74BV9zhUpPmX58CreAKgYWvuBQm5cPnwZ",
  "key19": "5GoTyp7QzKN28R7N164mrh6RYpzGr4WsUMnmPRs2hBvBcM2pyFPPpHQUYQERxz7jGPA1rQVkxBXY9CNv5yFcYQeg",
  "key20": "3oT5465BZWTDcvEMMLJxsSbXfS5B1pWeWX2uyngy9PqG9Vvd3ECKP3J8corepdAv6gdcjzqBtyjQ8jjBGWRweq61",
  "key21": "3fW9eygyakmic2r44Y6CsNjhX2mpRSHgD5QHCbkJ4pT69FvQrj7uCkxs6K6zYyyY7kn2DJ1xiFEsRU9BNBW15f3d",
  "key22": "235PMRpGzsw2pcYccsKpC8TqW7wxXawgmra6zzvqyDFEn8T3S1Ppxq2V5TJW6udogY3v4r2JWR1c3qN5pxvhcPSL",
  "key23": "3BBXeM3fez3jt36AxQsZRrcVYk9umiqygwkdrZtpyJiT2J93s9EiPqwHkcqtPybVbn3mrL8Y8bDRJeozVkmXFMwo",
  "key24": "3n93t4AD5FbcCDWmtxfVjxnxj2quBCSxhK92spf4Sc5jAg99RFwzQXW3WkbWpuU3Jjk4hDaQ1EWyrkEtFHy2Vwyx"
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
