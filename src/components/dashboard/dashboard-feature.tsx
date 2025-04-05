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
    "33aAJmXy8TrHvv3PLGRC1rDTTxHbLnQzYqCcnnxJHVeGPftsc1mLUe9Z7kQqcL6GQETDhUm7DG5JpPUCgxcnAAdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d388JZzNys4LxNugdMxb3vCGh6xx9pGWwwTZXYVyRE8sfDoAXBhBtr1ZhdnYehggKakkQy6SXpDxop7ofnLS2RS",
  "key1": "2rcbhacFvdmoCMWeqepEjT7RdFAzgxP1DoGzifbRDmfyrNymvTQJSvwLuZgkjR716vCRL4qMU61HbMBwC3z3NBbf",
  "key2": "4fKrJx1Z4omGV8uzF5PLunjBtTiUR3dJDMJGSrPXSEX8yyY1ZZaKfHPmw6AC1BBFZEFy5KZkpvaJDnN1ohgyMgud",
  "key3": "Gr5TGM9JvpnDoC3CkduWyzGexAzkiuSccbzwNbpWXZmFcCdK8ifbHRFoKuERnRv4fQetnWJzoTaorZB5mh7cCrc",
  "key4": "465iLrL5NyvYVhe2s9UT6B5C1jw63bUjmWTutY38RJsso9UocXmPrWEjqwvrzPCxkrZZoMqAGtjZhsMn5TZjTP3c",
  "key5": "KF7ZKpKRXfbioh3X56MYB3oUnFRizTGHvSiYonKpFL3g1tjvC6r6i1TTpQq65JMAcGE1r5HcEoUodUw5LEXTGdj",
  "key6": "47YpATxZPXXYbJn6w6dZLTbmJfMk6P1Y2CNVBVEvKCXT2tVg2jbqUHERu7eU8eyKVmPi5T6f8EYt72FzXjmsQoFS",
  "key7": "5jBor7KzTs2FExPMECEZrM3KVrxf1ad9vCmeaog1u3qQfEYBFp2UH82gGz1v76oKQ6Z6bQzmKTZaFhfnWcQRyQjD",
  "key8": "2n4MDWgRCLvgLoFU3k6AmrDJUPeutkBFY7ggFcPu3c8rGDcWtoZ8FR3XNtXoXi7aHPxEH982PgUkwpkz1JXLY7y3",
  "key9": "5a2CL4fq3Bqimo7FBPXKy91EenanW7VPjbP6RtkgzbYX624j1cTVUjcFrfHgaXbsBRqST9hVfVirGLH7davHQL8g",
  "key10": "4vBnKoNmw1TK1VJtXJLb7CSXnaNNG3nHnRgvCQjo8uvTYUJNE6x2YeWtX6j7CLBbvwrL1RpF6PibdgLAvKHFiLw6",
  "key11": "49GNwhVx32C56QfyyhaY6k3CWTJ9QnwVZSQDTxtJpz9tRKSRicjNHQsje6cZ18qkaJghAghF8oBbQ9i1y5PJBugR",
  "key12": "4nh9KDeyW5y6vahdqh4GRzEhPSemGYGiT7qeovhJpKGyyR9Yv8rcXAMMghkQLXxiKi7osPWwr9GEjKy8iDzEi7XE",
  "key13": "3xqUEQ46add2ycySqopCB7dUSuf9mmmsvneBigV69VVRhe8HUZfFTsPGsiVM3m48G9PM3hddFrUDiTxbth96rYWV",
  "key14": "hzuJBdcSVyBSwjnz9AUvuA1ww9ohF8SHGnNzc6TcYP9hxpZAEuE23qjRXCpwjE1zxnChVUVV1mYEGoQ4CET7mSS",
  "key15": "2k633AgEzr11ugKWVn9WozYN4exSsYF8xcCCCXcDJ5u2QU1Vx7MH9yVhF5cVW3XoW6cKrM7YLAmRyo69PGrAk27k",
  "key16": "5EAXErXt4qfbffByivuUH71GbMTdiEK26iftX8B1HUaEX6mL3twksgtDabxJAoB28SKtQVutPo1LhPbVK9HD59DH",
  "key17": "3a8Wqb5EzthXGjvbYChbaY19pGSwUy1u2gK56VPRB39PYY4TmXJPmcGVktFtFurC7xau2GMMxH9frRuMfiqYhq4K",
  "key18": "5h3LxZVdFgy3qxZvSEQseJirnP9BPqvRtYq2BTiYuQ8JPVt87V44w8skjciacaFPsE4EVRsoLSgK4pp9ZZHNYbWT",
  "key19": "4Tkw8c6gkhpXap5JXLBF7As6DrFsmuQAu93MEttiyZbVthyLhyrTy8DyBjRcMWk2UunAkikjfzSpy4YDdbotaWef",
  "key20": "56vQHG1zMADFhnNQUdTfcWFDPGSMfvP43dDgUAjubFp7K8vmQheLkfNXunmcmcvEVbEobsWr2NyobjUDL1rpM92g",
  "key21": "5dDWn7SeYHZMVzByM8266JzpcJTCxiykPzotRPRT1rZLUd5Zc9GKecBr8UwjF18p7LUKJ3AdsEwzDME8Yuat8J5T",
  "key22": "34TUCdnYoaUTCU7KTQHMw1X7eKGYWuWhbCP14yAqYKmsg5ejLn86Hak89BgvfFdyAfyfFpY7YnsGfah9cCSGneTR",
  "key23": "5p9Au6SJtenZXTzyf69u5AwmhH7URDRe9T1as3MGTqUyLS8rc7qzAqdGxosSbMAMu7QJWTwMmzk9s3UbXU2egmBF",
  "key24": "6238m2NGmGSGpYxFa6SV6czYgWJtNB84773CdWQU8K4qzU7xNa74jPsbB8wDRdv219sdAhRPtGbxz3S1rFhoWnfw",
  "key25": "3M4WJ5MJP4uo3uGcaH8FeCC42mgQbfW1SNgyaaHHoKw2VheHkRqe2Y8wRxyTQEAsnxgJoS4G4d48DpJgcyJxAsFB",
  "key26": "5J76XmaaVmnbrheoQDyKha7NqZGVKVTVdadk3bNVkQnCvPZpav1mtDdSS7o6mPrseuxCtKyLGgscGigtqEzQaKFE",
  "key27": "3HcAG8zoLVoAGHnqHpghXdZQXGjmxRKNBzos46N6gX2PH83m1b9XN6jvY9fFYESDDYs9LfuUUkYyoDuWrFSx7nmB",
  "key28": "4qAcNBqCfupB7ZEk4NYQrH8ihKoLr9WbJdyLDotiumCZTJvqhrmhtCvkUR3M3Q4VzUgUmFQREzUrH48xZQYeWFwJ",
  "key29": "4YVEKBfxHv2KWK8oTb94ViB6t6f87LgWMZ8GJsp9dDgWMHtAVcBGznv5yw5Y5ts7S587D3Vr9DXvFtfngiYcSzae",
  "key30": "5oRV7vawD3K2FpADKkokjJqDsYJSNM1qZbnb1cizMqWDL8AyEyvchQ3x9dfFfzTjxSpH46BrXQLxxn5nobHsTzWt",
  "key31": "rUUUGXEMqQnwAHBsdRhzHmnrE2BYGC1RYr78xqfonTMMQGANtZg3ErrdTBKYSxbXjK32kpZydcyEpWUVWNZvBx2",
  "key32": "4ddJrsUCntAU23p7UdeX85m818iL7dvGC6bf9JnMn6EgiLNp67B85nKKZNsDHhQEXrq8k1ygpD3Gx6Jed5BBiPeB",
  "key33": "3ivF1p6u7CtCoSMxap9uYaMapNtVzqDYgDxUmxAwgYvaRUm41Kp6t7iDi7oYvV99c3syaiTP1JCtSmtCzfZbBKMs"
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
