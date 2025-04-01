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
    "5MXAHL5jKBgXi1o55ZPgeNxCtHgHMLw9z7unMybnMczYm3TUFULq2XLxojV8g51aMrrsA4bsvviBh4uQpSapXbtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JfzaCZ5BzMYVjvGaGGWHzBxirK8piH4MF1VsZFk8RNLsZEftV7Cf5Rjp9BJ44mPQ9anHjZ6sB2edkxvZL1iNSiu",
  "key1": "5MxDPBQiAsAezfLu7JndDxRhjUPCEPoFGvbiCZzQSXmVhpQzR5enA1PGMX463ehc6kQKhAz6mzMnq4h5739kiyMf",
  "key2": "4y7dg8DxrGTpw97yy3uYUs8DuC1PJWgfaBXXN6PHXLDN6MomBFwEbHg9aCL3Dkg3gwJmvbbv5p5s2ERHDT17z5mx",
  "key3": "28XZP9pjp1Q6VhFYaotoCyDysKK2rMe9SgcZeiv5GsLmUch2RnoyuHq5f3xFF4BkNXiNp7fWvqDaEDmT2uGGVYFa",
  "key4": "3fmHVMfzjkXbqCKfvgj3rbTBcXXWot4yxzgjMNp8gNL5AeAn7UupPsb1UAPzzZqxDevyyJ5Z76xgLiqY1h2QctU5",
  "key5": "F9KWSBX1SJfgqbGqhcTM3x7MHL6wPvNquZuzkqsAcCa9s6sxxzRs9KQnzV1DuQFnoeY8CeCtVs834MCdGsJ9Cjj",
  "key6": "jnhMC17edoSNNLVMDfYPfL4tBKctw8BeeM9nAp1DvV2FJvUQ2j6ysffwizJ8VYbBJjJhbceH3kxRm6kuxacY6WG",
  "key7": "Q8dzn3THi1nhFGuYA9s4jVTKMb7upsmyYiTTGSuq21wwkGmR29Bj9HyeVs3iSjn59ywg3216BKozZPdudYG8ocL",
  "key8": "3g32cRJDmaVkUdnPnNhba2XmHt5nw6MtTLzaNStrTbrGASXXZB5uqmSjy5wnuxu4fy7TuXvDVa8hVRSgdC9ZfCRt",
  "key9": "4yQMBFhRVECBNp2qEdgVzrmN7MgUwXEsSFqoFqi51x3TWnFoJmSR6JLHLudp4VeEKVXxwEeP8ithaQ9BifwJgucZ",
  "key10": "2jsKquF4bmom6YxRiqa8LZbqAew4mPXnrQPs6MxymJDDVUswTA7yidHHPHH65tLgqmwSA3DEctkf9okP3SiJjDmr",
  "key11": "5YYPS4tXCYYgiYzHvFMPPBqT7reM9ZtN9JSvHgrut4TkciWo1mW56FEJGAVgcBRDTa77dYA9PPbZmPtCvw2LC2q6",
  "key12": "KbvEy25R4tgkWE9kAHKqhoNEG9KqQ5StN1ydt5NYqGBSNM76iE8n6Un6XnTaS9gHD9jNTmLsRXjEhUyJooZA3cV",
  "key13": "24s4xc6tZBzQLTLZXHqYArn1yrS1vHAoUXExTN6zqVyAqJfC1ozYNqc73dpbcvM63xivRNrYJHwRqENowhbkddLP",
  "key14": "5YfNL1C9Eo6WW8Nx6vsXfssM3aQycq7UDWV2uRXoyvykGYiH47uAJxUMYJF6ygss4suozdr2rZaB3vYxRAoMeuGF",
  "key15": "ZjUCLsEWh2yTCvnUu6f3V4LWuS1SioP36Gya6JKSoKZjbU6iQVzUPi3srqZoeQj8PUkJRMaHTZzeRT89qZ6gr4m",
  "key16": "2NnoXCeRQF3DRvSXCeoLDCQLj1tK8NY8EqrVeHk7dbMAMEQJtjqRwLtUUJSUyeysCyK8nQ3ZjMFWr2SQGBF9JpaF",
  "key17": "3HDw4jKXWBS35dz6qoCrvZK8x5PTiQXVk6Y1xZdu5xZGqN38LmFCSUR1GJxYcthv992LDumLxmESxrehsnFvp6Bz",
  "key18": "368GxXeZTTUMxui31uP3EmHxCHrnHjqQB7Uwup3eqwJqsY6KwG6TNYMnsAbPAANt7ymPjj7bsY91xUTgxL58MipR",
  "key19": "2wVMLU4XAHfrCx5RijdhCuhyUKLTFuFTpPeMTHyZDwyYqsmgV9UQZxzcKpwVzsMh6NmKdmfAfp1X6uAFffbC2eEC",
  "key20": "MGbeqpaRJaCYN9XGkT65KhuDgNS5LbsnZ4SgoPYAarJEWpjiwYQNCFQUvSi96VxvD3vHzUK1a6WZQCz1jNjd3oL",
  "key21": "2VbmsF8fLKAVnF5r9fFYCK71sX7ymiZ9MjoAzLMyrbvaufDpYY4DCxCcSYaGiwdKSJbD9dKbeuVSFuKq2MR4awiN",
  "key22": "KsWah1uH7RBYKCh3nFKsUiN6PuegphsZcjLTApdJ2bUfTbRgHhpxecqUtpKiswLD6y3MS5RkZMCWAJBqFWHwSc5",
  "key23": "35z6Dwepkj7tTjStihWuusF6sjZZ3UErvfiwRznnDWeiwBBJScSQe9jn6VTbfb8RSVWJpbMSaS55w8EGGDohQqfH",
  "key24": "2JxUW3YwsYiSeRE2gwRaRvRuUcVj4eNVvioW51XCB31znniMyiVqGDzEXDndHev8Ud3Qu1qFzBfKRZdjzgpKMfM3",
  "key25": "4P4KGNZzAyjG73Epf9zG3M6sJUXzng6cjqkQYx1d63Dfzzytj7Dhu11dXh1SHkfTbnhUBCGmHxe6mYUb9dvmg5JZ",
  "key26": "3yPHWsxELqezJBrJWjxLueHVLGXC4mnk71EBFxCkWjXJJTgfVvkMPHgWeHgM8qrER6tnEi1ToqVEKK9BEgVpY6mz",
  "key27": "31ymWNwQhBiiNaJ4w1kxD3fL4uJxoN4PAszhvJFCevQtGxFmR1XAipDzwgwDnd4idjGhaLuWn4Vn8Wxo4qPhP1HJ",
  "key28": "4Y2gWXRGxpb4UkTea4ww3rut159vgrxLkuAAgKbzTcTFFKZT3SKbrjpMLuP9FzLAnGGyer3utFRY2p84xmKYxAJi",
  "key29": "4vU6WfbyUZAY2PMN6CaxCegrjpMKXFXiuUNjoXmxjovuXXHsZx9uowCGgHHwYXNBwK6YtPQP6y6ifjkg6ScPL6rB",
  "key30": "3uDpDnc2DjEdVynW8xg4S4h1Lzw8b1nWW9fi98vyjRtJy4HzQMiQTZykfyHYZwDELbqYHixBVZU9q2AkwGz34BFk",
  "key31": "5KVQkrjwpe4f6gkB44aTDH1ZiHF4LN1YsxAFnexY9PBHPveZy7tN6ySX39egQ9sHfSqnAKekvx636SfALN4yYMod",
  "key32": "ctHmD9KS7kD2skq2XyD1W1rJ74ibuSBpNPkRn6zWVZ8fX6esb2Kw6LfFqXEDyCJKFc2n3u7RRJ2huu5frpuGkYG",
  "key33": "2Jms4FJscpjP7qFT16Y97cpZ1jDPDa665x72nZ57M1CY17u1kMsdk8F2iaDjKywJUfsbZT8ATCcp2cqJfxsNdoZq"
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
