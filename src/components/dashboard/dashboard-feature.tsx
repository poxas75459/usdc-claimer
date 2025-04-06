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
    "5bNHs4VLuZhji2XwmHypAHis6r1zEm39EsQmSiJELqFWRXMsFSSr91UCFeUzsdyEuvzAaW67haGVYoE63G4rnJeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "588suq8dJLSYPZqmLFcsS1CKVFKyG7mouJPhYn8DFwGB9ZQGzh6b2PdqrdB4ULkxc6FoBT5XiVt8ncxgvTz6CL4x",
  "key1": "59dJKPRBxuF8NmTa3EZ8GL9FdjG8jLScZUXFjkfWskC33w5ufuPQjstagL1NDfHk4tJQvnwz8jo5tYfpofz7qooN",
  "key2": "eVTXJtHLpiW78MijyGDiWHofMfZCv3gPCvF3xmWHtrAjsn2VKzxgLHVpR5jYbfUjohRa2i6idwPUD3sFY5FNdhb",
  "key3": "3wBky2otdSqP3zWBSxSu8hPhMHcGw9kSntqBGxRBU5Nv294tf5vBpRSgNtdhHiG5DburyvWJdMSKoLvpBgAegArv",
  "key4": "39rJN88qzPycoEN772FtVZnSaa5hqR8X7ZX4MMS4rNhDxg5FZQAnBdN66Axy31tQUiq8GLwmn8GNgucDNygNnUVz",
  "key5": "36PvqpYiY46QV8e4nCiBESttowD1RNYj5gVrYNq3wDGoj41vJENTw8kiW2GvGVn4ERzznwiQ51vGnCGecZP4SAuE",
  "key6": "2ngxPwy5E458QYB8tZAedTpf3v2Ks6YycTUcQpGg1ZXGzxwwLcCt5RLitvz9vjCiYxC5SRC4fXXwY28NdtBAtMTC",
  "key7": "3piRE2v3RCE5AbmzxB5nQ1wHBuZemSsaV9FW9wRhi7aW78R4Q5tdR48btNXdD8aLQfRrptpGftrdxs1zmxu2xojS",
  "key8": "r7yRxmyRDuaBi4RwUzy42NLKS8PxCVES8Q1dmWwsSh1QdztSU7Z6UanMyRX5SRCydYfxRcW92KijqefSEUjLXqc",
  "key9": "5Kgk9wrhoZbMSgKq7hwsL8hRjXntBM5wh4JjEL4NaTBNLWTGetHJyFXSFGQNY9TfvGXciFwb86UzqwujHH26LFUz",
  "key10": "2Hif5PqfnvM9RWBxuNQ7koZigkj3PwU4TKZ9CbM2taerFYqGETRkHscEVPtp3mwcJXvuVTZvXbLZ6nck9vAKhAXv",
  "key11": "21Sv8pQy7MnfZPADMmZSrTkGhPopVwCsffuikjxd8AVh9dwo4SAxamvUYzYn4HMmX1iVzqvqr5DaAyeKs3gYoiUJ",
  "key12": "5GZJsLAfNMy1p4BtahYxUyJxuwoFgMK6su7bfbCFVqEQzgT2GyzB1ysgvLZBFJhu95PzzzXYMNxPLxvoG1Kt5cGf",
  "key13": "3JgrhNiGZctvhZNWcpbkDttbWr2FWn6NvLFbN1bxpiKtWxHeN2cjfu3JVEt6uubcXDo1xCXrEtchT41cD3MYDtdS",
  "key14": "4z4NE74AEQNUvyjpaNtMkCDpmomvieTKx7Abk8Ga36ZNYQ6hXtgg9Dtu1hgt3N843UqpKgTDcQvBjRNQ1jWetFbN",
  "key15": "2t3ub4sXvuQYazXbpwQxUYKimrZg1pSBnEXVPT5eATNFhz9gSdUuLLWEpmGqKyZAAtpWpeJB6QpmSptFcbqd7jdn",
  "key16": "LQ5WzLAvX4cvNaEWwCp5jQSnfs4tcrmqs5ztBzJ1hoyFwLwr2ERn6c7Qx8pdAJfsbgkXTnSJnUuZgkMSBkusSu9",
  "key17": "2Baz5QGYuYCLTHuji8TnoyTZxa3YSXKRAn4WSYGDWFyKyzAZBxDALE97xRGYMGuxsR9EBdi3xDdx6i5F8sAn2C2t",
  "key18": "6ptvLs6bgXuoPXyq3k91WTLXUPcfYNCPHzSQwf73dFKP7b1wAz87NitbSk1FA9JqHpnm2JMvzhjho3vqFAw23Qv",
  "key19": "2iVLxRMN2DE2WKNqkD4Xwkz3RM8gV6QKz4BBVNmdeJe8Xm6JtDDR8hgQAY4MCtjJ4dH6XQkBXQRsbCdnVfRyaLqZ",
  "key20": "3wBgrqVoPpPiLYjuQbcwA6SAY7ryvE9ZUcpcB7HkJyvCzj16pTsTn2WowVP9vMKuqsGTp1eWZgg2r1p7Ef7oVyFK",
  "key21": "oye5pJH18VRnegRUX3pufkF5gHwvveptpFWzdSXKU7xkWw8JqHh2uiAhmTwNMUkD622sKE1Rd78KSTnn1YxP6hX",
  "key22": "5fkMAW5FwCKNAsk2E8hes3GmXnv3DL1N86tDBJxdCbT4nPmkwprusNUMsMoWo8QMRp4Q2WTJPtXJKcxyMVvryhxh",
  "key23": "61AGHoZtPXk6tLq55zjM9wpUS1LBYW1Mp1gPSbz6VnjyASPb85MJT9n9bZFoLHSPWDZBo6ur6Uqd595i9tiiKAoe",
  "key24": "2yyiCqbrcZPr8CsT7Sq5hSnxf4j2h8GHQPvm7YACi9a2Ki5wt15fqQyHHgThdDEbWuDdyx4zvsrtxt4KEqHZ9dKL",
  "key25": "PR62ZxXgi1qRMaw7c8KhaWvsa4YdvTmyziZbf5jQCWfoJGVjDTrUjw7gG4EPDpSWGQhuh59aiUGzLZxHF3CfxnA",
  "key26": "4LtNhArKYZT2aru9BZbh2RokxJTXHkC4xpWac1CVc2zwQcw5pkEZMDkT3Ejw9VGHeQihnUNj9sBYcmyjf676UfUP",
  "key27": "2TFYjbjxVr9vwkWrf6x8CebU1nLTphYYDtWz3PQnDQBEBodsAAUk55NiM2UFcKrGuLpuznjkh7iVs6Cv4axzjZmp",
  "key28": "2DpnEShhvowwpsPpAhGicQ8nFHRW5S6KMV8XMHPntfrNnNbhsRzF8f4SDz7k4tMqUDXrLyrAPgyn4WRGGVsi6NkX",
  "key29": "67DztB4kC72qdycy3FoLiC8v4BBnhjAp6nLAbPzpDmBSg28NLSEgDUrDZ7YucgXPABhXcMSUN1K7r6PvCbBeHw2q"
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
