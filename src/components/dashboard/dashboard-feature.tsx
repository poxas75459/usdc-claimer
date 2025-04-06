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
    "2vMFLoDdQAcyQWdEmNWFAaZUExsiaEx4hiRMdpprcNrx7Nz5D8ygdAFb8jExJnjkGnkBzfmdjeST1mxvr7FVVqmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45MEJPh1ih7zoFDM7Guj2xtHf8WNmvGHDJjhee7Zajx3wWHHnh6kozu8Ax8sfkQjwtjQxkQKLH1xm4hZfAisu2o9",
  "key1": "5Qyk1kkFf6WfUDx5kzdoDSTsnhLwtwDrNAw8hgFfs1Z6qkXUe6R5jtKWXDWCjFLA57rLF4oRUX4Px1eRJS87tGC2",
  "key2": "4YPxaPRaFMzWrLmkFfLBkN81qZobxeuDbDYME6AKm5vNav6TLfyf9zrB4Fkti9dhNJBHBjMk64GHLWmHVTFsNvM4",
  "key3": "54LnqeHjvBd7cgPfnNYXDU2vBkdq2cikVzrVfdpdMHdhqWrpsUc4PFfrZoL3iNUnfarCFAXr1tNM3rhhZzFVYH8Z",
  "key4": "VT1p6m7cLj8f2zk43sitDwYmzuRu24Jt6aiC3mhdXhjfv5hi6mwhKX12iMz2YjY5V6xZBV9TSzmQjTBP82L4GNi",
  "key5": "4XfkhJ6npF1qbAPkiWfzGfZdNoBr6diWLmtvP9i9cgFaAsp3poMUHmGM3GUGsrig73FQKNjM4bKoZD4yuhhmyNEE",
  "key6": "4Wz8p8jw18TNKRFUYSm1CtV7s5qV4e2TwUfYDYKAozk6kqGdNeFZJmNFbnsRnYAiP3Lxv54pfqanQ4QWVZ73Jndj",
  "key7": "uyqX5JMKEZkjX38VN2gewTwbYBHGcSvYKva1ddME9cj13d4HsSjBYtFL8VUu338w3Dx5MECkrXzcuzVi2M6fQ7j",
  "key8": "4PQZhP14SdVooRMUBPQJrb3b2gHfvPRqnufi3X7hKpKhH572gSLQzbxMnmP74UvNY4uS6wHHPaA1HpfVdd7NNjxC",
  "key9": "4H5dJPju9YB41R7esuZWu2zvQ5EUHA6vACHNMBhPbe8yGjic8qqb8MpbC7M6cRAWieJQ8bPzsKW7a3YhNeHxLvsF",
  "key10": "122Tes6f9kzFF6sNq2jrAQfZeUZTUj6W6ode2cbAAz8a5pz1Dz3t3uvWdqHGPfhnqbqLW7CAdSXwQYZ9qTTJbmzk",
  "key11": "4GSP4QotBAxq7p4WNY5nKEkK6zW8Qn5y1Aj5cfKcRQXAb8VziJsdA8C1fjuroP5X1HbD9kmCjArKXqb3psuMrsin",
  "key12": "3HYLYK3NiCAzY8tcsnP3igM684utnMSCQU5ZA5AgLMBFpJyGA6PyngexrebU3HF7uJ7gKtoRWMgLvKt6FZQurVXG",
  "key13": "5kQYztzZffmmbR6q2fL4jmXjyLnw83uj9YGrU5bv2U6UyC956Uiz2BJcMLxhAh7JtvcgFfB1TX1W5AnDLNhnqqEW",
  "key14": "25gCUVk1CdMezbdh8yqaVfMfJW2u1t8PHMhGdH4qds8zQFTws4HsUK4Hm8ASLNBwyFsTige5EMRo7PecszuA1h8g",
  "key15": "3DrSkVx5dFzSGDuvpxnrKFLnJNksmvTi9BnFRVbZbbCF6GfDAdGLFGLqsJF2rp7gaQ9mBV6yTFyKYDKDVvdUexkC",
  "key16": "5KjxHyWboREC7ikjjDRuKiXauHfs7aZEfuAgGVj1kV1RKGs9AgsLqU6c9pqbsm9u7u6AVzRSFDQ3TaRGhVojr6Kj",
  "key17": "4zDkLS8o9buzYS7oeKbsYpZ3QHNY48WXGd4TPaN7knyXqkf1wZfmhQTpBvENLYC9FFy9kcHmGKcvWUVTeuLJb9Ay",
  "key18": "4ZpTSqF63N8LLzGSmGU5VE5aH7PKkkMNdVQvVbonhCJS5kyFWgA1uenkyjH45DPr2bnPdjYektejgXdondfDxAWw",
  "key19": "59su8JoLNSxT3ZjHXaEpKAPoqwV24CBQMTS11RYM8rdhutPj8yNY6B3o19SmTgvDLDXs4sQTvuPUnkWGSTKrGrQU",
  "key20": "6uetyxWMU7RweGzk3GtDUaQs4BKh4PstziyULtdjeGTh5xgbwkZyJ3u59umr2BrWNcw9VeRzSQUBWAiB594yNFR",
  "key21": "3CdvrM5DF28RdDZLoi1uZpnHz4fqGWpBL8GKx1pcGBC6hWpvKX7ET5JkotszjLkoFbDNssm2Ck51pHCa7ADiQNyL",
  "key22": "eKemRwBK1XLJbRftSVVM4whCPDHcwhpToLnYZtCbqdEyBZhNnAXbQ8GVuVx5RwynSNHWTBAhCejERqWh8xn897h",
  "key23": "Ecg22ySxQA4RGcB5JjYbirogYq9KsA6CepVi7YnZA3yaL56UdXP6TJWbQvFNKk1d7aWcKXcQq2TsCHJEWtpMZuq",
  "key24": "2vGJGjJau8gx8nyybFmvFaVh2dj7MMHNorkRtRfDGzim2HGkWD5n2RwJrLuEw7p4QnTUH9ZfQwLxVnz8H47nxkqV",
  "key25": "618XWsp4c16XCq6QRuZHZVTPtDpA9s74ASERDQstkyFhRjPffsa26eZS9koFsQVwUSDRFZc8w7VUAtDG3WspuDtJ",
  "key26": "3bixZzzQM33RL5LjsZPd1ZuiGJrBVvpcf8przDdcxSwCmMSb4xuShnpDzcbSLWDLoUy6coJnPBUUb1Q3o5puJpFB",
  "key27": "W6uPiC4uh8r7yV1oaGHLuEG4xxGWnZR5u8A4HrqAKNKm7yYQwDdvn9RrrGvu6ykjBr7MQKSigVnFXtZNvEpfEsU",
  "key28": "2Gbu8i2FX3jpdK258CCxb5cGcbQWPeHGJBhDQh6h4umK6iDcXxX2Cv49uCBuBZrd9s2vsVProCF1tMF9AZex6NPf",
  "key29": "zv4JbAmimJE9UnagDbvVEH6s3FZoxT9AwqP7pLSJ4GZBCnswfqH4MLFWExMGbHpZVHiopJKukVPsYSitgEYKx4M",
  "key30": "5vcYkJc2mTchvgQa6MmTyYXoo5WC5S8y6zxNXuXBfpJ9HgjhMejQbVrxqtTAyqFTBwtTiP8sjxT9Q4K3b2PtHt3h"
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
