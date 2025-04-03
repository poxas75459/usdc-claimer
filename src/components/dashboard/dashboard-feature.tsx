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
    "z9oAEDxcB29tCmV4p8ythL9DvZ6XERLTtA7GPisnB4NmnvaFe4CdsZhfMbnRKa1Z1bbwtKpwHUu2tW8L1un6Tdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgdJsboC3mTFDioatsdaGfBF4tBDzangBXpRoC1ACGbwkhQeZRsqtdWxJdHgjKHRnyeJiWf9E14AAnao8LXN6YY",
  "key1": "2uagpzDYsn1JwdVXDc7PZvbrC6dWRtq2kthuVRwGytWENnXZfFn4CWTsvq5B6VuCH2qkqB9aZZKviyBcdXcu6EX4",
  "key2": "wNACHUWE5VjtPrmBreESAS4baV7cuNstH1wcgiqLqqDbKYDSrbfJqQNw3SLR6TP9i9RY28BSrc9kiB7dDL8N1Y3",
  "key3": "4dAjv5yjXjC4roXV2SSZ2F2wVuHu51wQ8Y31AUjfhHktRuJNZTqY9q5sie6cFpHnzK3NGL8XRe8MsjFr8o78GDh6",
  "key4": "29kQeeB6i1BD1XUzsUcWu4BNvWydoEhR44UbrNfzDVeq76P3vNKs2Z2q4R2Nme3k8Q8yLUmDartBGMYNEZgJ6hDM",
  "key5": "5UgLY5TAr3NCwPYrtNtcWRhQRiFL4rhCsXHbPp5YDH1nPbXrMwSLkT1D4Hmc3HoaQfVBPVXGXTg8xA6oQM1Fv7xL",
  "key6": "3buexd3LzdHsK6XLvF8DpcMbcv87pino6FZUP4Xiv849hbxj18Mf51yEaDSufogjPoHG8DgHTKjmbH7jjk2XQFaG",
  "key7": "5Y2y3QvCwCsgfMu58EpsngR5YfQ9FiuyzY93SoXF7en7f7HUYLds8FQzzqNVR8dUxXHqPf29MhzP1KCzeTHtjMhS",
  "key8": "5F1Bj8h4c24oS3LWAxagvCcQRzRvEjHm99B5qunJDyqwwHHpV7rLV9DSnZrB8rrYJ4YRbhaBVpwVTBpxnd9hLjST",
  "key9": "2ZmjuEi17UZQBuWFd4pkjyEPg7fJxVnuB5NZpjrrSby6hLca9PwuYR4B24FncXNhTy9KPPnVXNcRPjqsrUZypoUt",
  "key10": "3fKggacsojkTFJVJmRiXESY27qGepBSg5Z75ePdpsb9iqwojUr9cu5U33RKoWtHKRtXkjwRVaGVZ9S8RANfovEzt",
  "key11": "VfZWWmPVP8SpWiVKGLjDxYsN93T6CBpKo2gv3nAUXzhgXvNHL5owUV1JQgyhkE5HWwDfHxhgvZpGYK9iuf6yi1Z",
  "key12": "5bqpfLYNkWkpJiDyL3tRmXyZEdWhA7vqMNJG6DASwTT15UvMjTRxLVb3W1hJviN1yfdsxQ5KBTGE2LrQUXj99yXQ",
  "key13": "AUheKKx1LHzTELq8CFMdmqRv1jpjV13rkwt7W59wHRz3u1mpd8ZsoShYaGNJTKuLdRixjLp1tXu9QuWfUSBE8Dh",
  "key14": "eohYhFPBwFKwSpR36ofUpt8WrfzcgEruRJdqki9s9g5ybe2MqxtBKktDzj2ZJtzi71Ri7u3AH2smY8EF3bJ7uSi",
  "key15": "2dSXg2ntRPc3hkQw8A7PBGYSe3uTPJm6Hs1U5E9aXeD56HR1wURZxS53qzdEYvUbWyip3zNLUpBwYDwj8HPqQwxL",
  "key16": "56t2oysb9m8uyakSevERWe3N3EQQ8T3U9K7E9vocuwnvW8tjaqSUrW3vr4WhBEBnArZAacjHMJDSNs61GvREXb7u",
  "key17": "2qDQgEK6b8d6wSWniyWCU8sb7JFrGtTnKfBBEbNun1RR6jYsqJZFbNL1twfxnknzY48b1jcsNsfGYSHrnJVWT4dj",
  "key18": "64Af21Ui6pqM8itg8JHhH6V7Kq2tHEMuWtYGwpdmoxe9hFJKCb21r6nX658Aj6DQvWptFthZxLNkXnhmtVoajAMi",
  "key19": "2vKrfnxx6WTejabex83hwJ9LeGwiULthDMZrsaUN8GVUB2AaRYHfceXu48uWUrSmKftPKRxVxz9Waz16o5CcTHZc",
  "key20": "VLEk93qeDCzdLtVRXphMWouf7d6nu2Ekwv3HpCsyVptULRC5PEjm43vJz3nrzW29YAxeB5jJSZxpqECWRa713b7",
  "key21": "44Jg6G3xvSEBihjtts5mPrv5TzUmM79DVPd7y8sju8Tf6UHoRMAXjjn63GyRDKbSAyxQtC2AGaa3cjneW7aRwjMF",
  "key22": "4pvA5hzQAoxJxdDqztQg4vpL1cRHF4ATiCnSKGEzgJUxUKBqmXV9bw9sLQYQw5W2asYpmfFyJ51UA43bHVZDVAAh",
  "key23": "3XyTApbTkE7mpCqkHK8Gb8n7yQ91amzQpLhKBCoDZ1QTSR667n4N4RWdJ3Sa6aTpsPzxY4vmtuLhVkndFrMPvfAf",
  "key24": "hEYtjrqX5FHR2Zvipaae4jjzimveQTYRCneuQqDREnLtQ5ohhJB2Awktit9DRbrZHXNuekQYMG13xsBj3fBuNej"
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
