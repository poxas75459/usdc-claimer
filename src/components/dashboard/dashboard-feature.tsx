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
    "43KMNByyvHsA36eeaXyR8TQGmqEbwzAGVFnuYZrBezSBy63twowz1Voc2DDbokFUKugwg7jaxsTJ7gE313VjxgGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFvJcKhhokA19AKjxKZhPfnwJ8K3v8FBm4bd7S1NMMa39u8tgnD3F6tjZtrXUQRh1R2L4HeipWCH2ihzMB72LbL",
  "key1": "57vsfYCxV6RNHHHvkjUXeY1CPrF7hxzxF2vm7Qh7jPR4BgyW6k3ghFKRenqsCDDwwousRuDNQE188C3buHB6CF2Y",
  "key2": "2JLNAXLmTxUEv8r6gyW66EiA6L6jG18PWvhgY7KEyL5gRDVFLnGPkgNjHGpSu65eHtjJDN1yQQa5eVe4qqKUJ5T7",
  "key3": "5EXgpquzWcTsd2NUPKuNaCWCz9jUV9oYL7y5KxPeGTqV3Raz2FA3fW1pwyV7BGm8uZr9PoN67uhvVWnD9R2165M3",
  "key4": "3vKxpV8MASxxNZM2aQGzp7DwTQCfkGXianwBRJ1q7BaeU9HEKKym3Xo4ahi8ZF6uQcQF4qCSAxoz78v7kU5d2gzd",
  "key5": "LKVD3S6hbB1VcGfXLPzJUvfYdVpt8bpfzuCQS6weaRNXBPdaYk6f2kfd65JHAQhMVhMAaw5aLKSLzgpCQzWZNNj",
  "key6": "2WmBiNoAwjbaViwScu7CXK5ZtTg1VihBba42WzBYKT5yDBSFdRZPhzEkTdDR9d2aoZpokpaepiG4GAsVbiRUGTjc",
  "key7": "561oC3Uk763dhD5ULhSKPtMc4VgiBM7huRL82umvyfGeYDWx8V8K3s9dWuQ3mCQrb7f7Ndkr2wVm7y63xnmH3YcQ",
  "key8": "4UN9tXXwjUqBGKLpFjmt4KP7bUZNmbNwojBLXSrswMPm3EGHgSMr8whGNkePL8Jh9aqwzB82oRwP8G3iG1TuCj8P",
  "key9": "31TSDd9FKWpvXrDNa3mYm8VdXHXmnwdMb8enHchtyKMsuN5Rj9wCHGC7fHmsGit2GA4rHoYEmRYpWrBRAEybPwhg",
  "key10": "2WGRJqV31uqtsUDv7gVRCJHPBsHr1SrB84HeoCkgfD5jWFDb4c4PNANju1LCLSRk5zT75EK6jsC97BfUuN92D1qE",
  "key11": "4BkxBVpWkUG1Vcb3SJwa8i6PJnZgF6vAtxjFn1436hq6zR8SmLXUSqfgzG8JCrtSiF4GMaP3uKRUugjggvBq58Ub",
  "key12": "5J23biqsU4RZC9ggom2CqkJfKBRN6MoxgmYMLgW5Mwm4DhjcHatRjsK6vJgAczJqHoUbuYEjeahDbXxwfSi3GP33",
  "key13": "3crnMmjwsYBeWnFSJoERSqvzhKK4o197PpLz1LXFnYqJ9fjevAEoU6WLy6TPHZqxipEyx21Hf3BFF9tyk5H2NCqE",
  "key14": "4X3nejmHPT1EXFmkQvq1ZQ4rLvh4PfQdMpeHmTn4mD6DWa7PpYKYEcFfTjnXGf4v5EvV6SiG4esaf4eSk4AmPjX7",
  "key15": "3LbMAEYtW14jeujmqdzJb2abNwVa2opRVintbwrr4U8Pb9fYnnY5g4NgtZvapY8fPeWTL3qh5gEcy99AbLuaueJg",
  "key16": "4gvUJu38Ppy43ySGUsLUb2hftTEZqRNZcA6XzSKuybGCwdA1U8hyXt2odrVZdXGWDtWMy9z4AL3BEtFaUpzbem8q",
  "key17": "Kud6qH7AWNjPcU8cssHKd3WDckznYk3m9vcXyoppRruDeqWcReEXHiPtHjnjHSvG6NYWvaSe9FRJ4dT854Vmm9T",
  "key18": "2gna2dfqJb1ygdpmP3KVRAFQuGvHNWAGejLnyHxV5E4jHnhouZEbFepKfE6nEg5TfWrze9p1PjRuNov4EVXfiLbN",
  "key19": "59HKrBBgMt5cQmH5SYisHzwEmx1BuJXeYzzhuiodPjaz2CmfeEJWE1cQKwEjvajWhwtJwdq2e5oiwHEDemwocHX4",
  "key20": "5qc3EtH7pyuSyChb7k7z5JoKZNU642VtQTZjjgvY5S2GcuHy4xk63BkmRKRdc6gmUD6hxwVTxEKqbg7yXGmqU97C",
  "key21": "32pygH8AZ2Q4EaPPQt8FEXd6NLzrfuYNXHy5pcmCWNKaPGVBappY6S2JEMDALqFK5NLVkHG6e4uqU8c98r2R3vAt",
  "key22": "2MdLYZkZn2kEMfxAHxpCUjCtw8uhMqx5gx4hejnnLDDdyWQh1TRzJkPsYf62f2sjNNDgBgpQaa8RBxxkJiZSXcws",
  "key23": "3fZEwL8moPoJbshztXdAYPcnYnRjaPMZXULctpUeqhNENWSuzF2MxJLE3ni7e8QXHVVnmetkuTcWxov33wALx6ye",
  "key24": "3a4esnt5jGRExjQxDxfwEFXGMdyCLBDZ5eDZKPWsS3vapQWRbt1HXHn66rAV7dSvEnNWBYBtANuwtgedLeJ5X7ep",
  "key25": "2d5aXNhh9m2Sx86XStiETY1noSDHr71J9vgwtthy7SJLVsUMxSA1VQMvbzarcbDgrC357mPYeGkJyQjUMH9aN337",
  "key26": "iqQPeuB7S2qAod3Gn6b5meypqp2FHqLmgPUk9TcJ96N5whNcMQwf7jtQ3uvYMjwcZivswpR2BEiVcTKDQtfAcEu",
  "key27": "2NocZPv1ZHsXNf58BW87UasWqS4EoaCS3BxskNS1kK9QaeouZFbaJDe4u6iWGU6CeNq9dLwfQSXpCAGpMNAXnp4i",
  "key28": "2NFd73jnmvGoJuWUWU6vd6BwxC8zARLPPKtigF98xiZZEm2EUSyH48ZT29KKtWkoK5S83P7w1L5ZEeLBbDwr6qmF"
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
