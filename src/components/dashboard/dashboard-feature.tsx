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
    "2zqVZH123Hz8WfFkFHGdUdPCZQgnwr758is7EPMtP1f8kiNkvngg3dbPxGtQ6gJpj3QphkbqfyWh9WU8sKzGBUsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cUW82Aeqo5kFfmCKVaFS6yVCvtvrLYNjfjZ1Fv3za9TexrbEBw3wHtPMa2otZDGHytyAHQcWsVVP9rmuWQjHaE9",
  "key1": "YKGJk8vhuucqvxZD9bWz31gbV9hvJgVVWWBXS9si4gcsRMGqybNhkceBwg8A9UxdjTdDZxAYnBzPkpCEi3jKNbe",
  "key2": "45cbJ6vvvpk3W5g1RXmeNu2HFGfCQvbNaEtntWPiPbPejKvGTGPJ9w9mzyXo7noNoHUEoQs3VHFxPQ7t7WVe2fgr",
  "key3": "2UbRvy8FzyckjX7GSiPpnQ41xa4n32ukzRMcvL4PEYsGMxbHSqCsxxcfDizT6e1Hpz3LDvF6ThmWjpYrqacRLFCj",
  "key4": "4ovA6Xm5T9scKpeCEhwFaKWNf9D5bEBZruZFt7jBgMZ5rBF4hjkqjZD6BitoXYfAyoPj9nDwVEWCgVudW1jsrJ8f",
  "key5": "5b3AxKKbrVMAk86PsKueEhAVEvrGJYzdyYVDgdPXzWac6yTq4LL9vyBkYeg8iJszwLfEeos7Zu7tZGxog3yfrNRP",
  "key6": "2QV4ZJrdBnap7irMuRQm7BVifyrF57LdWZaZgQPVAUGaus4tcSPzEszKYPGRLTg7xbdPKHpnBssqph8ZsMDuGzkX",
  "key7": "4pjcgPTXd3H5Be6y9vv8P57xcUC1SA1uAGwsmaj3iXLV6gDWasPwDuH5TQEgxLckNw2FRh4A7mE4ErAHiVeRMonE",
  "key8": "2rcG3qstjMFPWNds237xnQGRGkfhCHakrSRk7tCqHnvBq2M3FJZ9ZJ7U2aJdLT9vsmQuxE5rMw8FEuqiL8ogC1BM",
  "key9": "oZwRpgxqwWnd3y2sHC7HbqDJdZtXy8UG1Djw1CiiBKYTaW6Dd7GMwB4AyFtUzKPvUYxYo7gvLCiV8TSoz6zcjyH",
  "key10": "3ZUBcYv9zFpyGYTLkNLpi5mmT5ZTxGXZ4gzRGbReqzEuQkvqUMw5d8LWGdkfRL2kfXndmg6Ns8BpJMkYkbTnKM4t",
  "key11": "4WCFQpYRQDTXfbDcaAnejiVhzmeMpJaSGnnAWrsX6DcCSdyT8BxLZYmWjeaGtt9fF5tevsGcS1xgcbMmAE3YQ8yZ",
  "key12": "j7vifxRFFipDChg7m4H2TJ11K2wbgJDNW8vLYJhtzZMmnZBugHE8dkx5eprhvFgxoSUjZKe3SQRH6QDcKb3ngjk",
  "key13": "5THrC5p79S7BULJLMVsTjLz4r8UZuSLHHgYkwrQ9TSxLr6vntAKE7Hte5DiQi6FsrJ5jaCxYxdDHfPmR8afotvki",
  "key14": "2oDd8PAncsve4KxPLE4aCyhLxF3VyQkHSeLW34dBdjKmgycdsb8foCLjYkuc5hisBrjMucFwAHmWVyZBiFCcftxx",
  "key15": "4cgE1TVhBNi9qojoc625GAifW6fpRQkSrgqNV6KfzPmt8bhFcEtRJ4nuZpaeJLW24KCGhkQ9C92Fwh6eJ6BzUa4G",
  "key16": "2UxK3N4aGKc6QM4rV3f3NZcX8mCAsANpgT4ZjS7bshku8d2YTc3RFbapTK8E9RdzRgY7zc1cRH3FJyi8HfbTVnVb",
  "key17": "4pBjps7fJ91EL4Z3BVaPNTUEDDBVhTExN57yvv6EgFBHhc6D15x4h35RhHiBdxQNwC9PN7xhBM7xZttq9Kwm5PxA",
  "key18": "3EsNNcx24WJE8PSgVRB5fhNtpCeLx1nJzURPpPMx9QPMsqvFVPxPNKYJ5AzS4s6UUsjgioLTRdpF1hbJvKUXdoEZ",
  "key19": "5b1nVL9e5eFj2Ada6vCenVDswrqMqsUp2FwhNiGDNwyPRmBnHsZVWRfLw7jdM2LhdUdtFzsC6BksX66HWr5fU5J",
  "key20": "53mvzg8moLAdbuzLeLws1kqEZzMjSB2puEx1zoCeynAR38Tdj46h9ZxzR9SsqTd1gJ6iRJr2LUiwBJDcjwwGDbDg",
  "key21": "4AoRr3KZWQVXeKc6vug3m9VpDe62a6KgXjnW5bdKYxTXyFhn7qCKCz4o6EF6JHSUQkMcNy5NZLXvPVrWQEoYm9Eo",
  "key22": "QDo4wfM8Ehwm6c9oCiYAgXw234RQmumXMY9ViRiGwcNcg91qr3rEHbRAdaMQvnuADQazqrBJ3SahcTp9wvzoKQY",
  "key23": "3XJJKQ33EkaZExgN116JTk9NRmJjnTiBw7FyJkQRQA7BZJExJfbmrSGEbxmASaeGLhAV2yqPPVG3anbhxyZXGCbN",
  "key24": "5ab5ZrfgdEBSWr4XNVM4aiz5copqfnw8gvvrhXyA6zPhsnzb5CpajiqXT1ydxk3YZgvABoerW7kndfvsZitnfP3K",
  "key25": "5qX9Zi8xpUSAuAbTgyP62PqvMYDTZpiFyo2EjJcjVNb2vRAQq7XFdET1Ak9duXHTsKaX3BexRmPf4dp1Yq3CBQ7z",
  "key26": "4yxSCCwe5oKcWz4nd6YTiFvad1bjeRDGX8v5P9FKfxiBavgkANcoD3SxXBTrbZVqVo3p5RzmvkKH8eoFNLY4xfNE",
  "key27": "3EGhQYoM1cowTQnMFG9Hq9njZs9N82K7jvUSu9LbPm9WTkttKFvTwgpM7hRHY8fCjvLHufKTFEPhjBdWkvjfd1tK",
  "key28": "5RHMxwrY2PVVgKdKFLfVjW9kH8DMjGxQ7TSdtULKMaYCD3PspPVZu8da4SE1eFKaP71g8EoHysUz1MbpqCVMkUxn",
  "key29": "3mLdwJXTX4cFq7g2Yt8z9wKtuMBFt8WqvXpavA8GVzvGJTDvcJWy7282J79thxBjhWoTqSogvcW13n28zKps5sj1"
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
