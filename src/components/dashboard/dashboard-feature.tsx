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
    "22Jz7Ecm6xNtFbevMFd8F9BsPsYZhaisCkts7Qv5sjVc1jiypDuyNvyT2M5UxuQ9otDRbBSTH3WZhmhXP7ELXQoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KykHztspjZTLjTW2AMF2zhevye86vEG1bVFo6S1tr2UMZ9raNv8gQqigHfhYUUwo2Su22VR8ELL71x8banpB2j8",
  "key1": "3BqcEhTu67WHQNymaSWCvTapuHG2JJTPoa1hkwHAN2wAdF9rgQt3C1XhNCftRB1aQrYNMe7H98aZEnXggKK7kLcP",
  "key2": "3PfvyxPNMYMVKjwtffd6KT26i6pBUkah3bYqYEQV4Dw34fEpBFao3caNjZ9WZizM4AaTg4UDpdKJZt42b3kLGJJJ",
  "key3": "om82T8pBz6ULawzYj5dn8NGEegssYdY3g5T6fPqBoLN8o6qb4RMF5tSpWqtQtKToBf9KDPKAEuyw5rriRfcL7HE",
  "key4": "2WqRvMcsdPToxzyqzqkYDHEFHCRN9KZxfdFCvBouArA6ctvKmQnXyNRdAiRsWCzTddkaQbjTmHcHbiDyMXHbVZWM",
  "key5": "2CgV6xXfeJLJPgVgNqsZq4N1c84mrSJ9LroS4h6XHYRUf7URBfmV83VtzjN1WTRVAAFoc78ad6AUxwJfn4wMP4QK",
  "key6": "3gVqcGrdY8MrX6vCWRH7Ycv3yX4rU1QzQUPnFRqWggj6LRU2ikeHxcsENak7zM8prYWtZEq128PLHFDbr3ZS5wR8",
  "key7": "4XX2qDzPUo985ZDH8rM8oC2zSeDGArHLwMEcpzUmTkHMF1xnuGoMQWcK8bAqL3pkTa8pz9N6DMtCV9GHkfFWHRmA",
  "key8": "2vCLA8LGbsPuxCSZyxLs9NduyxfkjBAirUj9ipnPDm7QCg9ALN7fVwM3dB7Lkxede7nqYCps6dSjUVX8L3guFWd2",
  "key9": "4VFucrRg5PLCWgJNzxgcCXvyxpupHG96caKLZY77X5UbABen5TWZDsiCQy7jVNPAZxmL8fU8uyn75enoY43WCBrZ",
  "key10": "2t2ZcavVhV3hcsYgDAXgCSvA9SJ51Vv5qaVzan9J9u6QbTG8FxMurvfB9EA6KCXXiUicTUASvqavA6DrCiyJn4FC",
  "key11": "cHSR7MpBbLXvEQYTep4vV3pz2H8k6J6xw6ekewZ1quTpfGuwUCuxMV8135JbpDD5mUrKBNbr4pcd8bxLhPPLpvd",
  "key12": "4MKbVatjsoyaaYzVWrHz9KoRx32ymCoLDnekbn3F3BULF5QPyQYjLfeYRNr4NsHqbnWdMrTo3TwZeJPUuD6o8Cy5",
  "key13": "62jrc11H1kh9YmoAkNY7CQwD7TooXamoxL4AeXLorzX52JqBHT2vy9N1JS3Y3ufs2Eyjv8XAbtEv6vkznQj4whmJ",
  "key14": "2FWNbQXAhtywdJMn1brqkPmxFeMeNHAS6WQacp69XfvL4hxZ83KzCPRPQp42Z8FFtXm4gmeGCj1ZGCXVuVvs4k9x",
  "key15": "tJGnEcM5sdcC7oEwkGDBvZtB9NU3QWYmtmXn8axJbkk9caDE26GjmoUryM2ENwkru5TrA923AUe6ko92WHd6c1H",
  "key16": "4Q8xT64YefGc4CEbvoRq4JgwjeqwuF3myziE93rao95PpYBwepHzEk61CeX2HCnDZStMAAA7kUF7Gg7MigkrTXuK",
  "key17": "27EDGzuPwsn7Nd5obGcN3pEyX7qyMzDZDQ5CtaYpDMEV4sBCe39HNJ1ZWP1sgc3ohJGvBCwwytp2EUKdyg12JvEt",
  "key18": "3bWwSHWXAjBPekQuTtTvUZ1ePwExi1EBuRdgYhhJoEQsVy5n2TMBw7rhe7ysqAyGP3ZjfSYaDaHB3yUt5MxWuWxA",
  "key19": "3ufizTrbuNsvyoGq2Udt8ry8YtE4KZs5JGPrGWUW243jUC7FPg21gDT4C4xG9LfQ1j9gWBm2BHbDMfZGSanFnu23",
  "key20": "2WY398Qi4JtEXqzAHKd8mTreKN7SdUYrFj3HEE14ETQVvfBDZf2EaW3kQd8DkeUq67pVNyXLosgs2G4MEvz48Kq3",
  "key21": "5nWumq59ffAT4MXGMw7aUYgTnuHYWYWJv1EB4M1PWcTBifufYTpZkEWY7HepvUvAAAwepizQtKhzdWb86Nbdq8Y4",
  "key22": "4RBGiTek4RBH51ui8oHx5TyGTgvrw3MTFXP63LCM2wTLXsmLWjjxhhxpMuEkj7Hz4XZQ2CRpCd1YPZRnKKvUUDV2",
  "key23": "5gJd7xXbmvAEYGWrL4aQY2RQzemaTE11yoZG6LoutxmwhtT6zmEy1KjxfpN8uAUNGz9Rx6mN8agd6AvSsV5ce1xT",
  "key24": "3BQ6Lrb4rP3RvE9JC1YmGhK5r4GtCnkZ499nGS1m7m44mkuuHY8M8BJesSRWVN2yLJtzTdziWzEvYwg9em9MjPok",
  "key25": "4CgDd3M4XQn36JvPPY4Ur91imnagSSmbmmAASXAzPC9imQdjo4A86DvgLNXNeN6ppFqFqz6WkssfFxS5CDof25ok"
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
