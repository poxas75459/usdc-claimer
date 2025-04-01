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
    "3HzLnRUtWrxaunKZYdW6Cjywf8VE2uKh89t4359zvFYCJDnrCLV28ifApdQENA9HypF2Epvkzpkqk3BbJFfYMVaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qYEWu2X99M7t7vCaBNKYLr8GwSXdDHxfDanhKWFvh1iTZ3YRfE1Y374BS5GzmkJYhCL7gNSxBHs2aNYf7qu92wZ",
  "key1": "5UiNsRsURCYD62d49b2D5U7WwSHmjeZ7EaQ9fug6rMBbYa6ZuxMg4Pf79fyEauKb1abUNbaPpmDzdT55G7gwXVSP",
  "key2": "3aHH1D9Aj4znfb5Q4d2A16uNSVu1wGnMag7CN6UgKcKd9Xv8TK8RdBZBBQhZydh3X1L8U3xeRk6nG2ek6KJ8YMxP",
  "key3": "5XsoBxsdrvivQQzMuwqVVhLK41KkU8bN7dwTNjNqWcJ2pAWEXRuKTYBQt7BZ8V4PPTUTcNu3ijJ82su8jaep3fUF",
  "key4": "yYY6s5NAVqGJSpkTXanTFoQXrH4GP7YdKiNahycYYzkAzdj9cHYrwSw3UA7c1ZBQvAvD7VjDKUQo8z8oUwC4yRU",
  "key5": "STjMMYyiXMhqo1GGpPLMPeiu3JFNGj6a5TonL1Jfx1kzuf6RDckmSboEdKidgPfAdw2b9ZzFZHB6kN9Dq1mmFpc",
  "key6": "5nKwfPcbnM7cSq7RgEUKsaXug9CKoyXQtzKYGGD2Y4EQB6gwPj8axFtpibi54aQAuvFuSPUR8YUKvaeaUny2wwLN",
  "key7": "4vSmjXp3FVHyiaGFCsG7JW7xu3poboWjND9XX2AQ6tHtDuVKTzJYgq4PYUEWcv8tgEoPAm11xqiowkh7u27KUQJt",
  "key8": "4PWCXFYcs4WT5KU24fEYBvqTb9J69Rwdm2PsWgU4XUC6Y1VdDqxC8NQwkckc2Djr9iZCTHPg9XmLUFyKrTcqdHAV",
  "key9": "4LcYDQiQex2WnghaUzKbR87ukzs6R7Qay9yj7mVhEjYxsMXaMRUKwjQ7zeUiBAePTHitQjvcn8yDuodHvgrFgj6c",
  "key10": "2Wpm1ietrpjofNbyHWiSZTqTZ21tdVG3cEPxeC5qtJQS7AYJoHC8L6ayzK27ZfS3xTRDowgsEJ3W9MoJiNJaWSHz",
  "key11": "3vjheAzfzHnt26a3tqZVxscsJsdVkkGedZQ9zjYm8CqYi73hMsP6x6arpgXGffiBSAuXXy6ixRpY1Tu1if5XBLco",
  "key12": "JtzoyMZeeTtBwE5D4gUd89hy9e5YR86NUwXRH42YBRXYvkJPaDybzBJbfuPQc3dCW7moTCTrmc4tCbbQmggbAhj",
  "key13": "n8Wnq2ZMh6UTyTDty3Xsi9mRhHRav5kuFGeEEVTfkVF4hTzwZyEqNThH5PfbNRHbiaahaqSApon7cDQXAPMt8eG",
  "key14": "2XDz3Zr8CjNhQJSjE3usg8SZ36kWYBbrAesS45A8FA5anCHPk2X2rfHHuy2rJHKhj8TUK9oFpdHUWjPJx2LnL1UM",
  "key15": "bzUyfCo8iQTarCWBUV7kTdViC1Zc1YWLN2TPyH3aUdMgmmK4uVFJaY78YKR1oATQeNLar6HxnSvz32SLLySYL96",
  "key16": "4RwHXktKEMd3F6HwiZsZbf2FzfJBfAUgWgBRzPdCR33FsBxFzo1pWihvSdsiKBhBpkNFiiEng4JEVVmC5k46rwA7",
  "key17": "4C9kAiNkQ6vUsSeWqv7ySEZnRALJvAGt22TkPSKDDnkqwg1dxehxvJMafuPBHzXRkNcxPYa6rs72ZKezfTJqbiM6",
  "key18": "ycGddU9izC1C6tWJsFMCeK2hk71qfByZMgW95Lvy1bk6wUuBhg2nj48uneiS9VUwNyjXu6ppAcZYLc2MC1RNUvv",
  "key19": "x7uEzESQia1TZGS5ucyc3N2hJC9Mze8ujByK2QLsBjDzVZAZZgNNbqHjRQi73VKMFpH6VBq2TjrTuBMqLH4YcPh",
  "key20": "5Fb9XyuH75W6jF71kH7cLWgxjCbTcsMeKMdR6wht8ou98ewKZ1S8kNQR86nCwfGiJtFsTrsvhZW2vUHiPGucX9ta",
  "key21": "5TyHtGipCR5HvaotNECMC2x8PDU66ti6NWuxmY8FBK9yHbmYv6ctRmxWhP8UCQFJEx2UCMqpEsY1jDoq7pHzfH9U",
  "key22": "3r7oFUPJv6TR9kRwKWcfDDFhtD5xaMEsLi5fCZiMrMpTpnHkyfADYj9QhvbspDt9xJ9nY6jXNydgKs29jQg8UoBW",
  "key23": "Q5Mbap8PnerhPRj1w7pHbcmkaASWKGZJKcBk8pMCuvGuyChGaTGVu8EvfwNFvHCshJnwmMwrW1T1FdHnZ1vdvnd",
  "key24": "441UiQDDTbtvFVM4WxX8jtHm2cw7nm2j8P5CbxW3RfDtbMEP8ey1Yiq8NoHozgcT6xCoqhJdoDVnsgp473MPsD4f",
  "key25": "2Sq8MzGXKbJX46ZvTvwcwmYRBkPEjSarh3dDk4pYkTvn31ASeUrxUkB5vFxockHxbSMqnHirR1R2V2Sd3rSnjXkn",
  "key26": "3H6wPyXSb6hYANUjJ84KyB8hbovQeeckFg8ppvUiNHruxtSEZ3U45ZbnTMZ4BB6PVYXd5wbQxwDA3miWNbpCjkJv",
  "key27": "2SysUKUY7kYX52Q7ogZ5pwVwMsynkf5hd6PSvDsZgoXTvj2FAcnvLzAvrhDacjhUUTUH3EWwRb6S4JPCSygHJdSU"
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
