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
    "2aCA2uTqah4rrLYvz8UCRoDYUUrWbdKyJPbnZxCPfLQudkuMTcwwmyTTi41AN13Uf4RpkyxDpYF5czG74ZXhUNZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MXJE2RKqt2ben1rS4rTn6UxjNrFsZBs2eZcLJdLWf2MNWS1PmYuRtrLFE96MV9ncx2K7vssGhEhqKFQRcuh5LFE",
  "key1": "2nYcUgCunmDJTBrmTJ4mEwXXgkBVdXXg35CFfqHAVKmGYtERctRJtYXMRZGNzyghpWoTo4y6cR1jCPDP5RnKFphn",
  "key2": "29wHfZCHMsFDYnsvmkKn2JiAqDn5sj4cUarbVtd5gBu1nHNMfkPv4ZWsKR9ybJNhgwaRGYYEZ3bgnN1CSzCLrT3P",
  "key3": "5jmRSHkE1hksKrNUdzxv6vQv7kGNU8uv2BQuMFLLD3YKNat2BR8K2LBMQjdG8xSeQo36KumdQVHhubU4xQKxwU2k",
  "key4": "26xook5WtAEpDLeQGYCke7eoKDAFuayB4Pf9TEPX3Y2Kr5hhn992YvPWfvHbFxAmjfZ4fAdKPG4tmcsUP7MKV494",
  "key5": "5GvyQ69wFXiScgP9nGzF8zgrmixFebZwErji9BJeZEqKj2G8NWiUA5p8PYbZUgK1F5Ce4V6s928dFd93hkSKAtKy",
  "key6": "5ZKYMZkgEfRKJZwh1jJQaXjuSwEhbG8Zo3sqmQ3yC6RU2QHRLapcbNJXExNTiY3ydVa5U6GUVwA65X9H5ABCAGER",
  "key7": "2xBvgSSuUGAH48CTuBe3Rh3SknPq4SqXFy99oWydc7NnrVjmNkVRPaRwNzrxcGsgyYxo8V3m7EfguNm2TuPHWFSA",
  "key8": "4LeVhvJXWa5358yicfMzXMsoNVqcEhBrKKGjV1MphnoaGQDmQYTZc2xoMECcg5FwAy1KVipQcELnuFkDdXZp9UCA",
  "key9": "3jQQz8UypA4Fif8rnjuznJ5mZL9KfjTS5DZpXz77MTWhQy5W4m1GH76cymQb55xCFUyNEF6S69cH2M1xRyAhKGNT",
  "key10": "bEPD4drGbh1zva8LGdrZbSfekVDDvzNyokRCduzWyosNxu4eE2ZvsyBXUrSy8CWx8bJKP6i98ZLz8YccJKCEY52",
  "key11": "iMY8eEYoP4BHGD2qZB4zWx7bi8YLbWTYbCBa3PTewNwnrfisgrqWwdpVxDZSvAfBps2vq9RZ8xJuEUPR99LAgoD",
  "key12": "WB2VkqyaNr81VZ6UQ2CwaXpyMPSRR4v9GRwKTQTJxqRCU1Sy1J2NqJWQ6HR9M32z4M1Rj4LddtBNEB9bdBB3JUL",
  "key13": "5Nw8b9mbeATXVFKtDZcDFhx1LTM6vasiWjiaw3fYLsyaTr1bp9cvHFV1RBoTz9tLgVpZnXYt6mbAjouAHm9ocWXx",
  "key14": "2yy15v3vkPPCEChUxh3AaoKXYQ7rxQdViLDE7MSYK1jTxdGKKLH3yY22QdfkvCksHC4KQnSb3XnFaFi9YFLB5d4z",
  "key15": "4SxZhidpzDNzWAn4jpMB6YrKuoLAMxQLX6CY9b7jAFVAkuruLuBU71TQoHh2X25v3QauQGYz9YzXXRf6Ba9YJC7X",
  "key16": "5R3GEdkgmMVfwz7r8acDmqm1PPQVxAW3pqfyLVyWwo2gdD2S61EhwWhTL4neTm4ftHT9jXnQS3ppMYrzaJ6t3TDj",
  "key17": "ikxvyXPFgGk87vhhLsLyo3RdU4ZF7izJSLcSnWJ3F7R8P3BidH63Kq2FnsLm5DuqAwSH13CVekf9JPWdJyeqrF2",
  "key18": "5jTsXET7rMNZY5DxbJ2fyJfq9e7UGXZpKDJK4xFXCWLdivCdbUULNPBGQAv44ZLWQAWZV57NeDtResAohy5DVQt8",
  "key19": "3P1i76DrpESPXnQbosesJ4pb6EJGByYa5kHNeRW5uQnywcBEXWdswy2L94s6vC7aeSaumHnScK2zB1PPMXBsXAZx",
  "key20": "3tK1XJaGcgxPcPQisXLHRVyLSZxbxgS77KgJ5kndpoqG5n5pZqVHeoHvxaVY1XNAxbEJpnQ2WQad189tmbiesEQU",
  "key21": "4oxT96zXzGBzRMY1xeNZLub9jTHK1FRxKuvwsjeKNNLVzoGtcw79hTE7x9wQE2aDSKo3krQBUJ8S5XxivkjW3A8",
  "key22": "2oDW6uVCA4qFqqw2bZmzhpyoaEqtVuWv76BAnkaDHTDLny8Sqpa2RxCASgZ2DFwYiD4ji7yCbJp15cFUZfRjxhUX",
  "key23": "4xuPLxJcqTq1mAF1Drcfncasga2CRQaGtExB9QgLkroea41okFgQvfe5htnmCnRz4XKZ6MSugHyi919xxsbQg1wE",
  "key24": "24ZkoJikY5fncaZU8bdxhH6YSM7MkGpVtiaMX4psBzWhKGQzqY6Wj3959T51CnsVhC6hUHPAEr7taGvtrqQnRPFk",
  "key25": "iJ1umew1PKzKYYHD1yWAUVGSyTRxbeomBQzVDszu24JgFo48zCaQbTpxi433vtv6jfNcehLWR6F8M1NhApN35jY",
  "key26": "2ZCD2AbKKvMUJNX5RfNFXU3qVNCwMGnqMAZYsAe386ggC1PQVdTPS2LQZV49sDGQ2coDYxmDhXp26rAbtEQYX84h",
  "key27": "wGXXHQWhNMVkgmRq6JkDpFfKe5tcs67C2Hr62siJubzGyg7T6HZ3G4tMywdNeBVLYZgTJc1YkiWx7rJDoQTLXz7",
  "key28": "m1csQ5PenFHE4BXS3iuwZYFTKAMWCAuBs37EE1SKxnU7mjHEHy8F8JSnpY7YzULyHFaovo8NeQnoGyVP3eVz7Fs",
  "key29": "2FtUhX9APc8w69ai1VqTJZXiFBpbuqJDEq44Bx2oDDh2xNcmWwuhDv1bRE1H8GQ3yRjgazrFrBqXPtSjiZxBoPeA",
  "key30": "2Ya1gGjiZwHmxUpDdmod56Fj6imJtDmzA2gjfHZRtivEE1yHAg8e8oj8EYGeGubcYNkq65NNQ61sV4HLeTmSCGqB",
  "key31": "2JKHnwctRe9Y5ppJhEWE3h8B8MqqayUw7REr7SqTGTh7bJ6VPHogYU4ahJ6X3rPRmgCGhRKhDb1sBGkhubSSNL9T",
  "key32": "3RTAo1raP2zvNjVd3PmLTu2JeMDriFZqqitFxgBLSLkYbY8s7F9Zc6CiSqFRTaES4iwDi2qjhQkJCueGzNZjZ77S",
  "key33": "23fS8v9j15eRTkR4nEGGpavEcQuwiRJ8Dpu5iHNQQvjN3WW27L91Vhd77L5A6uENMJvwdAeFTsY72fQzywRjNNqe"
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
