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
    "YhdwPSwDPoVtRzxd8NzLpDWjb17gYJ11v2z3bfkib4frkdtZcMzQYPm8hi3AV9LFhsw6Pc2ujdDpjrmb77qVGTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UHUVKphSYWqb8tfMLGLbNVsZt7Sh9f2PeK6w8NyFz6HMfZ6dXR1QxyVqX82v1jcVgdkWPmfijAiQjqsoxiKU4MS",
  "key1": "3hCiLbRzGUuyGNpSQ1twycMPUv1Vg3L7WFEBWb7Kb5EEEY2Kcre7NaMbF9BkuKKF2EvXLPVq9jE1D1AtCyKWhjvB",
  "key2": "4f2xwwNj6tkY9nXNh9LXVjpoH53GyAafGLccmiLLWY7NR3Y5ecMD6E8nbgYYq5Nqwrz3ykvBjJWR5wtzwKMConrV",
  "key3": "Nq2u6brUqovZD93kh4KyyxAwvt2Qf5jWfv9bHat7vqDkr6zA7pX87DniBAiqrTqV9FcDUY1KUuv71AaQ4bEGR9e",
  "key4": "5DpQCSFBLKzRPFYsNnzHzLS2QWEcEv45HjCsUWSDGsvAx4L34aW9jH27gey6wMbo6k9LyBvhtfAt427BnSER3jEQ",
  "key5": "7ooPH4gjZNjGsgxX85MnZqXDPfDYYiHmrYWmTd9ijwHehN4uAHKDLeqaei8YcQkKFnH8zWBdVAmRNwnXMbAX87C",
  "key6": "hB4Le587TDDkJpwfyaFkP7jp7fd8GdRX3M3E1n9xzGMbs9vdMazeDUdHfsmchuoks78cEtCZ8H43xaL3QE96ZvY",
  "key7": "DaTX3khdXovqMFFTjkNg3iu1cMHPynmAF23EXYKRGUAxow2JVA9Abj7EFYH8QB7dKvU5UBqMqhiH3GntKTtAvu4",
  "key8": "2539D2Memx2A4yQVnsgBFAnwFgSev8FaqkRrrVnkoqEn6F9Qq2gJAMYc2AbeSxtQhYa6smS1bzqNhox2GHRwtsGX",
  "key9": "2bmKm1Wi9uJeUwXLj6tEf2bURvbMFiDiSbHDjJReLFnC39dLc7VNcBhjWCgAopgi4VQkZXQ7Q2K3QdCttbKhmVCU",
  "key10": "5S8ekNt4Ui7cwiHy1jefZT14FH5Q3RW6aShCa7ztMc7XU79QxymkUVQ3wQJgCDZ3LnFdek6AhZ2qMDy9q8TeQ7Kc",
  "key11": "3NZgQFq6NifFpQyEurvFuCus17qAHRiRdmYnHkaeyhsJnRUBLkjFgAkwqhWm6q5aJRinrN3C97RjGhKRdmHcmPep",
  "key12": "iXAnmw9fgXWR3H4PNzF3M1j4PxFuYuw2EwZdTESUTSShHyaMSZyggc9W7WhwaDrXgmgMBoZYDQm5P9HiGY5QeDY",
  "key13": "Qz9gAwRRaVFZNBWPqwnvubqMDyZ9rU3tcLEDe4iYeH4tKbUGd5v6dToBZgrKF6JzgzkXbiYM3JZpneyz9ZyxETy",
  "key14": "3sjD8PjeM3GQdtNAFz7cT7U61B3JXpTFQmP39DTLmV4k9dk2tXemoeBFt3qDDWiQgjqRh8hamxf6fxiYkJZrbtB7",
  "key15": "EzDt6HpwcKZc3CrXENXFU4b5djU2q2Rz4caNSzTeiSJbh5dHpRFXoEeLA1jErEybRxFLt9GE7X1JWwA1DME6vuj",
  "key16": "5WHtbzFe6W28KmEYhXg9CwM6c597xETSSJgmn4mxY7ea3qRw4kFB39rdbKPDc5FML3387XB1pzpHLiVdhRaxvukG",
  "key17": "4FB7Mw5hctXgHenh4UC4KXepic9wqY1JKwWLJyJiQrTUokEKwLvP8kXYuap4Fg9VYtmAjocaxaEpNTcGYiqwy9VF",
  "key18": "4m1ZC3mXUoGCkvxc5XQfRhuBaKVrEqNSNHUsAx8E3zTwJdT8iyfidEUrVqhzzmT97qf3vofxetH4zqSh9p9nDhwN",
  "key19": "qq67SsiJqUuu3Hsw2f63xtA1RuLcsATvyu8WKWpmNajDeX5j3wTK2TueYL7cK2F3bkdZfn8xEJ97FB6UZuin4Q4",
  "key20": "3E9ABXu83sPg4MULEJ11SgLFUDt6Ece1JyLSzzmdTcy5HoF7S8iaFj95RgP9CAGgL9gmxfLXsSjhzv4RTjn9caX8",
  "key21": "4VR2QiMk7RtBDTa8H7CNdWnrkSDBaeGesVZKot5NZY9FqkjscyGqK4Au87qDBegdRaZF58SN4rgayct6UPNEuxHp",
  "key22": "4uboeb92atVLSkC2Xv6fZkManZvpDhYYKVAKsbiJd4JGkRqnZ1wWfb1tAjyGtuVZGQPRkAcPEfZCfizsC9DKMSmn",
  "key23": "6Qx7fheuU9fk5SPHTvruRunyvUGyLCmghepLmDF44DoHE8461FqrRSb6ENMVPPvGRsQfxUMbFWYYD11WzRY7krm",
  "key24": "3fFsuNBnw4fhciGQMzyHYL4T6bPCnMDAbejFDPEkVuoctxF76VHN1DUhaeq1mJtCJQySsKttd76tZ3PcY6FTWLpD",
  "key25": "2GiWnrjHju7K4nhpXDeZ3EHcByDtPt1uWVYpAguzD2yPxKsXXHf2YgyK9ZgiBFr5UhWvLgGARBwQLgP3DSc39eeD",
  "key26": "2PxHeYrVT3NSxNxFJg8qoVY8xdjjRnBXJbmuA9vXAPpk1WHYEk3Q8LygEaQBQuqxo37s1udF79jSeiLXwoE3hZG7",
  "key27": "HNbith6hpMqD2zATNmj217n6U2gX3bTkrC2oAcpZXdm173m4pSwGoZCcz5HEzrZQedP2dHYED1nwyWznct2Q1Nd",
  "key28": "R82eDqKbeRHFV2y8fohCfJaPx1QA289aqaUJ2Fs9H3NwKSw96znSDXDKPPtimkUkgDWr9SF73Q7Ja49mN8im5A9",
  "key29": "2tGNKHHBBzQTHR49kf23wZL5JBF6y9py1946DRTP3FwsQofomULwBiotE7px7hFpjNjougMtZ4QGQQYAouCdrs9G"
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
