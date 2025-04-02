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
    "HUMAPtVbJ4msQM6mqECV7S4csmxJsvKVjJbBKemxtF86xi5cXtgX7SyV2yRDghfVgrgEzd988rzfWZWanRuUjWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jHZE7KyxKMdnNsCYTeZRrGc85jCPJW15RVgVyeaVVGtSHqHbG5GdhNgTdafzFwLQKcoMsqZGb2zs4zLSX2tEN32",
  "key1": "25HsZDJsfA8qW8hpUr6BE3bqJXe6wXpu6TFu6HkSjtDQsb2NqY4atU8pb9ZGFgfVjapBQPy3NyjWrqUVRPAv9Xcw",
  "key2": "3QVCHcaWhzT4Bm5gJaaQCnw7r6xiQ3f9HUnr2AFQWzBrGF2qdfjtJ5rZsDMv5bUeJsTcFnCn81zoWHLy7oCSHrfL",
  "key3": "4Fbu3GYeH3w9KDZZavB6rLcNRuzdqdMh4UkyanxvFhwSBbUkfhS3sMBC9dnBd7QDo7PpgRwoFcuSDa79AsZsxqjg",
  "key4": "4N5hZketMbj6U2jfcxZwconbsdgzdoVoRUpNSXYgdmr3F6oezUPuoQZkkt1K2UEubuFKNFfBa4Zb9cdTY6GPjjMA",
  "key5": "2LrTqh7sTnTR74wLVwZbRvMW7dJd7gnHhWHjW9GQmKLsXa31LHibexwvsE3anRvQauA4t6cRnYaJPRRSLho91EKV",
  "key6": "S5XvEQ11jiHeUJ25s1uBgLXnDrXep72ccGCMQGZRAZMU7whzZ6hma3kuHhKiejf7XTF8ByAeTUeLhCTeGZUuoLd",
  "key7": "QAWRXrjHfN6puj95Q8YUuMKe54FJGXAZeEcMA8NeDUgrivaSmEnbduWD5wNk7HdwKftHCkSDLFFEQbhCf2SzvhG",
  "key8": "4FB4AzMTTxBH2TKo2NG4J6zBai2XmYfL99HgKkEBvZQDATJsqnahPbmkzGCjoSRqRpY43yFtAuRkw5VbaZsuTzQ8",
  "key9": "21cJtyhLPin928p74LetYw7ZPY9QmquMpHkg99j9MavcfJzyqyng2gff2SzQbScUiT1XWjpkUdhaMeXECKyU22wx",
  "key10": "5Wg5Q81aA4v5U2QLYD12QP3pP3RR81o2ecDQoiqo1MMEMQmECmGMwjNYpQqMvUm3TjoqTvp8nARjmGW6nwYcoD3u",
  "key11": "4ysQxQJvGcmsiTcxdvJzwMTZNYwvQDiD9n5sRv92mqN7kfrUyy1oiP1PGSJYfFj6L6aCi4QHQcy9FbY1S9RVcDG8",
  "key12": "5pPaixLpSuDYg69DQXWvwEwpFV1frFuaNmo58Hpyw8hDYZjRZMiMiktgbw1r85K6gkxoQtUA9njxcbtq4TfVhhdw",
  "key13": "28WZK4278VmfuhjFYABAjRYsGyQbw7EANWvSMe2XN5orA3jVYxjX2yayvPA7bcQeGW7GsXH9G123KWHxinvC8RzP",
  "key14": "5xCXSChPuR7vLkNrt9TKJMMkM4hCLRGAZKavF2iTwTAFX5KqgJRYNRTC76pvfSJr4jVMddhSwipbUr7C3NVH8eHE",
  "key15": "2DxhZwWVmKFqy4AKvNf4MWY4tBbyKWZmtvemixcwHz8mxzJm16N7jgfx8FjZskq2G3Pjmti4rjZgjUqMCrHMov6G",
  "key16": "53By1iJ3BMgBi9iccaDcfjtBzu8jdJ8DaSqqFCLNu9fBjEDiz2xyncq1xBLNUa9Xfad1GbEqVhhF3fyspAy2xa4F",
  "key17": "3oNSxXBWXgmrEsCxsaxgtNpdVt1siZq2vUuzCGD4kbG8V7QSDZG5CYyo2Quyx2kdcBtoAHrnAHsLVyRE3yo3zeiw",
  "key18": "38xSzHcbFwkDw9xFf5dZiwXM4y9MtpqqgK8xuzC1xRVkF2H6kWyo2SFmDLuWLYPXM2HPevD1zLGoCfCaXU5VjicK",
  "key19": "5UYHWunh6Zi16WXKei9FXWrh4BLh56LfAks83RvRCtQYs7tVA5nq4F7d1UsurZCqG9eYeNmcAVk3bmQTSrSbJJkw",
  "key20": "4XqDTZ7Mur61snBGF8JDd5ko319Tj1wFNp2Q7zxj6qGuK7wh4tXBhWkAy3bu38h7raoDrmFDN5ctWzoMYrseon1A",
  "key21": "5geiSSet8Pi5frUY8TXA61R49yWWE9q5U3aBmU634hu1AwfrDxc3rDPa8iTqnawXLFSPAnwwHHGLBbzWD9ZPPteu",
  "key22": "2PY5wCDmv6NJyrg9HKTiCzF2toVkAwhxhrKhRFnAKAbRwAXUuyUXcibVXJsD6VdsdKPXpU5DgSJykJRhVuKy4qG2",
  "key23": "49uGD6pDQdhtX71PPfn71N48HvYqid4t7DZwPadnRCfzNEhuaKDruFivJL9Ec4KmtKjJckPY2urcNbK9oQqWu9gH",
  "key24": "54uKoUHEuHC1Ah6MUpk8UFNgYxxEUnCR22h6ww32M7M9pu9eDEDTuGRJU1tAdRwpu4sXscBwjy7FdSxpqKN2jWr4",
  "key25": "9mAViobxprTFEKAApKSHvpSPHiE11ENiPZYxiKJpwgpBXh6oTs1exQhMe4AnM6yrjTZ8t8r8Re7HpK6XayZ4NH6",
  "key26": "5krmYoByA7PGBDynrioH7H27pUMZeg5NNc2NubRTmHBsWyPu5GBGvm4mGhFjrsTyE7CmPCBGfJCBUnJagVfUuvne",
  "key27": "55PDNhRrZtM2eWVLtv8YEZbAvo1bcWYcz2Cp6EYNfqZtiaovLQRBAMpt4XX8gFKRrTPw3WSXnmDWGKsuvBSdF9BJ",
  "key28": "635mk8dTaoiPtNiwwnpRG2ciSzYCnfFe3hUGBWsJ8UwQZj1vmQp25nEnLNjp3A7r61TYeF6tMf15RtF5xatactyU",
  "key29": "eZ5dcdhYHAkY74SVF1frenDSqSrNfdsrj8urg9TJWebCwZEd5mngcoDXQoyzjDm9tzpBpHQBWxBQyyqHQMia16a"
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
