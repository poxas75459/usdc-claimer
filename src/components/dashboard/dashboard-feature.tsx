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
    "5coEjPbjT6C3da9nx7jeGg6VVSAY21sgRmRf7gKn21Lg5iQkoaJNqeMSLY39VzDPam559fzYKjZeLAT359aT9US7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "533DQ9F4mpToaMhNpTtdvAh8NXAHPpvpj7fCLMYppthUkwzCGMBEV4bq4JDnLm6TMYAAZTzzygAsRCHwvT78nt4w",
  "key1": "4xw7SsqPHJbswU8Lz2fvo93P6RM6aaPXYgstbRkjdvVPDYFaCUk7GNPcikZ6SD52CvpRhDLrFkbtM1zLfsiMAPT7",
  "key2": "5PPLYyiJiB5BJLVfYZa4MRxKoQKVvQ2m1M4VYd3GWAHeTEx7bjpyjVVtHtAHvDRWUsBxxGuDsWL5W3uJhbsESwYT",
  "key3": "4sRJRGYikMKTZ9yKvQo1HAwUze4iSpawXPfvYCrvHMjhSyHoqEpAgxHqXojWF8zBPh764xadQHKiWhHPJY2XNLfU",
  "key4": "5btFYGarjenJejvPNvm6M88zra3Swseemo4oVggjDv44BGHLuWLMfHFCVUXLh3UK5m1uvAa3qDPSHmwmZXihrcMY",
  "key5": "3ac61FkLc9dAafF9DxoMR1QZ8MEzaanMLNCsfFcwznFZHew77citrQUWhVuAQzv8ZjoVJyPijFamdZTtkEfkLaEs",
  "key6": "aJDEvhAaCGjLdoW235RCERPfdUuyXndJV6rRNgskmuKWkt6qZpgRsWXaDJmjF5faEoVJZaLZzu6cGnpCcv9dgEQ",
  "key7": "aqfUaBmVebTx5rPYqKjsmqEg3Bouaa33Kb7su3imA65aEeLokh2hBegyJgXNjLDbu56vGGLzc7BAM6VEYzg7yPj",
  "key8": "4sxyk2rcvdVv9vg71frT388GzSzUS6Dow68tfqE3DYzj46u9bALvYMXpZaG2ujvQUtwzwstTcaeenyuXwqLYxadF",
  "key9": "2MyhjEo5Ekocm9wMBKjELjFzH7yXGMTZBKYZ1iw72chs6zqM6VcyJmUELssUqB5mfZGvC5XNYDcgWZxdTaK5Rt2j",
  "key10": "5SjTrAzsm7S3QYM8QZuUWJ16szR43LvwK2Ai3qr7SSTxFdCcX2L5n3NjTpEC455X3ph9WhUMViFHKdUreYmE1nDZ",
  "key11": "3s8i6449YdsPGZHewUoScLrSSVxTLXQnYxJ4adazUK69uD9GpYWy4jUbVxufTdZ1KSQxDKxbEp9Af6gvTvUQws8r",
  "key12": "oauGnu35hNoQqRC3wox1hfrFtSgUFRkDJoAuRRGtnS4x1hgEMgPcEg6cqQCkN3CcDtrgVJN7AEjRDwioCeyhp5e",
  "key13": "NAEPuu58QYMMusWtpM2T9hU1E9kmiHybRR2TrKdCJD952jfzUxBbpWGmzfzDXf1rbTPsQNWj97C7M6NbctTmEyj",
  "key14": "54Niag5WdYTLwmMhCcqTefbHpxWshfm6MvYABikEgtJ5Ruxei8TxRMaH1HyVSo137ELdQyDfYXmG81o6ykCDqvSx",
  "key15": "31nFoPDkWdHsxtpkC2zQ4AQHGVAH8FZ8S8vXxn3DD58V5zzLLmriWz4DRyGE6SDQ95XtXirCGu8yFYcvR9dwx2fJ",
  "key16": "26bsYQWAdGY3nHzBAi8AwCGVdNBQq3CHH8e6LLC1HzxEUWxqoBbd1LKFCvhjATk5HNL4JAzxZPxd8VW3PUiiXH46",
  "key17": "2EHNpUqWgd7SRs17TpnKev2c8hDudLBz8dT4yQCaJwoqwEqNf3HvQWR2nRdTdPDMpD9u9JketgtXLhQTZmK6ypqg",
  "key18": "aLudESWpp5rLbrDHXaAAZe69M8vqSfGJxbfJ9UEymw4JDb3cwUjUW6VSvGPtHH4vPeRHTE3STFxLWyesXQ2xGN6",
  "key19": "3edztnbrFE7h9vSkjSUqF9bKPQPWzJgWcEQEyoZcMPX9sb6M48ZrrR95o7LjeJtJgHzWucyByF3LnQsiXjTBdwJq",
  "key20": "5CA4U6QQSyVe9mBFVkPfJTe3Cvx7SzKC5gs8VnJB9j3DFQuAhS3QUvVFBq9DhhsbUsWxKg9YQxNNL2QsqVeX3u2G",
  "key21": "55X9P32pLCKWLDUSLRgP2sjTvED8qK25EtqP9gdVi37HHYRhajpK6FVcJmjLHj77EHc2fHLdmahe3iQsiYgHcsah",
  "key22": "Hacs2igSmEDanETEpTp9FPuWgAMTxC6CQxcK2EphnCJSThGqV8ZWvYUEcb5gkFsW6DLwMcPcXW2Q9vDVSJc2xmk",
  "key23": "5rMsYfh2npnXTvQ89cjwWzybdGEoBHp4Cxm77Qzy81QwdBRTV7KXquyifdT82XJ1k8LZfF2QcGSfgKkMpFL5Kn3D",
  "key24": "4bypqYxmd5SZrrHXqnPDxqxi4Rq6R32CxfpwLxTtJuvHYuMA7raqqSK1E9zm1wsQTZU8NA4Qve8Sa8ziRBQNo64n",
  "key25": "eYXRkSC5ozvrpCvNeYMdJthfYMcQwEoyhaov6dpk4nMMLhhUcWUMsrMu8SSG7gfAJieYbfFF41gahNSxPnkmw2o",
  "key26": "2YkDy3RGBxVJGnMcMzT2YQnTZyA2f6kCTzDn8iTEMpRe58nXfJoTxANLydQjjLgoit5oH9dpbejjM8KnKrfFJjZT",
  "key27": "3AmZH1cSeiQfKD2FGt7jUxzRCkyTFgcyUnXirFfAe29zcrQj4U33Kpwq8khs8kM1djoGhYBz2RumeW5nimBTRNAu",
  "key28": "3z9hfbD5yhEFfs6YzkvGAFiwh7f2jzkUYiP11rpuoC9QCcJZKeNBHFjKCNvBRP56cUXeB7Q2bSvUgEWT87tKAdTs"
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
