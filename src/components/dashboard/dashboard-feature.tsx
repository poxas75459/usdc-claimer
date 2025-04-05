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
    "2VTAJE9JLqLPTzx2kAftCg9gmiN9St8WHj6pKb9Qq34B1RHhW5B7FPjrMAoUsX1vggBPiqcyTnQW3Emz8aBBCFvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A7kFNKLPa54YyYaDRTsCKKLVdeNgjcH1e6zCdHRSFoK3NxMEWosuvC9r51MLxCRWkAinuW7X7UzTGCK7DTp7i84",
  "key1": "3vBgmMy4StCpjpqdGKC9K3DNUYMSj6AqL43hBHp9TnMeQU4B8FGo65ZieCP1QoexCkFDaHzypmM6WZ3Bo3cdThpZ",
  "key2": "3mNcQApRTSoHuVcC5v964cRrHvUSU9tsZ5GMAJ2LHgxrWtT9xjVSunqTz2Cy1XpfcPs6fMgfTr1UWK3hzGuFHpLp",
  "key3": "MB7G94XSPNdhwAaawaEJ5EM5f3uyEP1qFXWkX4Cp91qfYwsMFDM37hEemBewFgpE4VRby9iJzdy9v6dTS4YoZF6",
  "key4": "4usumUJanXhjWS2Js2U2P8NydLzi8bWoDHnR2Xiw26vb35apCKpzyYiKH8WsFSfiDsufarNfbSUu2wV2UE8YkyBa",
  "key5": "2hTAs7CYJjTSc95F1z3v2JcgyYw7sdUxLuWWCTt9iJhBwkDXuMU4vKouPJ4vLNzdXFvdLLxQHTzT7H6NG8KSmumr",
  "key6": "4bw9FBccuZmEGvnp2gqkfzviPXce5q2R9fSwtiupZrqpMEQ2BJNUAaVndX22P6yo6YxhxdXrMQHAMq73qny9YsZe",
  "key7": "3B8MZbWeWZz7E6YRdC8yBwuta1bbqVeGBps133ZiNqmgJAEm2Prd13ZaEYKX7pSuRdZPaC2jPiZP5mFHzXgqxrAv",
  "key8": "UjrHhXjepA3rFzcgbRsErLtpQQqhuonxpHPakbu7aNRtTTQYyBoZUH4z93qCQRNiR5EP8GsAVWAUxQrHATqWRr7",
  "key9": "2ZN9ZQVLKyFgzz7gEh15zeBqmqSW9iCN398J5CSrmswN4tiV5h2VmZzyGg2DwWfcvoizdi7edkCUAg4EdrjwM31h",
  "key10": "3wmNRoSciSDgWSe6YG7KgarYT5SdCGNtkcxLSdHbtTkAndGRoFMUpikyH6koiMdanjtjmW1bt2X9jKcE3ADipMVJ",
  "key11": "66TkhzYcFUJAuJ69aHmRS6mi5vyy3BEBcFphPYjccX7D6SDLmX2WpKHuniDWyNNguQNxT2SPZuNkYq2Bwbe4DQQ5",
  "key12": "3LziS7yFiW2jX8NVi1Ey8mjvzh6wYViydfVMR8UkqTdufdgjvRLA1gcThmvsGt5dFLYiXiRuSWZrEiiP8SgA8BC8",
  "key13": "3bTMWPBknVBQQbeYzSR9gYGnXbzgWGUqDzRqbcYzuRoFF4xTgV7Xaqt28rFCVA1xENCw8epY4xA8hJ95xgHArHJy",
  "key14": "5KJMrqDPrVbTVAPH58DALH6KycSsDstv1tbBnTrDJLUPDRUKeGaGQ7Dqav6dMrSSbm5jiWD8dxD97whWtoLwQpaH",
  "key15": "4y9zKFFcKteBipFAuTtyWoz3HpTYCcBYqSA8ogeTHXiDMCPwmfwtRzfrt1k64SRbScfpxdSsMrWUv3hSmrQCYoBe",
  "key16": "Ce4YdFv6pxSvwzJgLHsA4wA6y9a1cUyWxSbdXHTXKVURbgfs6vTcrgqrTyXMDNA1k2r7sxY1aMSVdn9Cs7oZDhG",
  "key17": "2B9XqvaDK7Pcdaecm98XKugEZG9Zz4kpzK9CS2HmEPcp43gfDJgNSduabSmQN44sW5mbNLTN1tz3Ek13Q5qMmatM",
  "key18": "ygbVF4KPgH56MRyMdX1NuSRASbJuEWYDMc4Ae1EPYBUTncck5LanLWSnCQNKdKmsVAtWj6oevkHYsAWxkHcNsDa",
  "key19": "4PBx3eGw3zzYi2T7BD3nYpT8qodqKQeowazgKyD8j6auJFPGQpXUbSUqXpietRNU6ex5etEP8rGqESWtCpFsqGdg",
  "key20": "2HcyHW8hpK3b7a9AMrGsRKKM9bTmoD1mBJcVeDDt8UpRMgq1JHXju2S9rbjfKrtVN3Qfb5vx3XUwmGogjqYoNwDd",
  "key21": "3BvW6dgfc7DN1k5ngQqhGNgRRVbRb7USp6qMLf2RNYgokmksPtNnApQhc6uzNXPpLfjTryoSTxFkoGujF1UX5y61",
  "key22": "cEZkG8K8DJ1sJ5XxGetgArSAaxGGgait1KCDB8Y9rDo3WgopAynKtYEj33oifocZfqt2uJk8suLCpFvrc1GJz7w",
  "key23": "pSLdd1v4pMdmYp4y9f4r2kLmRKFuTuDEVKY2WBtgagQ6TBhC9KsTpNxih7Zdq8ZrNAF3EUQ8GGzFdadCuUZziRQ",
  "key24": "5o1e1jV3583n8VsZwLyHXR57p7XUC4rpHzBDymD3TdjSbzrjQCGzcmpfgPha5BPcJUjGStdoyA7Dj1r69gqxzAwA",
  "key25": "4H9yMop8RsLWzdSnTzepiBjTWHTQYwDbKcz1nsL4k5Hok7hbWUoewJUyJrdDCPJeTKZRFCkGt6NxNMwb5q2LPSCS",
  "key26": "5VTopHeauZRNk1xrXqrqkxf96EWU3QdAt6hBgZZNeePt9Qt6aTMhuXXXH9zGfMvQE5oZFaTdjCdJz3vqFkUGGcvT",
  "key27": "2v6EEwD3n71yf5QBT1m1mK8KYypsbj1YK7qau5gxBEt4H6VKap7VNj5mjRUYYGvz2gAqSLtHnz4LAww3HGy18Ymi",
  "key28": "4yFJFJz1vT67kADseDiym23hyAv41FGBSvAg3rgZ1YRCFawJ9QRygyTY3URXzXk8p146c6LXzwDtMPvdquC2d9Du",
  "key29": "4xrcuUggLiRCyvvTAm1fWQYWEtrme6sHwedaTnA4MNnFcz2jaVgk3SdVS8zQLFc7CAnvSHxkKpj4YLPQbhey1qhS"
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
