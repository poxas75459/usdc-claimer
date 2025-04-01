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
    "jW98TXEhHq7Zsb5UkyHwbEmKwD7CgzEaSUPu2HyXYsJVebaPcSvbkA3XBzziusek3nqS8tbHQbLDuaxXUR1tcD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cJWUYgKG5k1Dm38YgQ2EvuLmvxrt8x7L4Cg2nLby8h2JyzWMPfgZPGMKXfzgBS2AvNdbcGfuFJWf244SmoUJVGh",
  "key1": "ntEvH6K9LJo83RbsLYsvqEZmnsdyPSNHXjFkYin954avKqTjMvVdQwg9ovyS61SkqKtgGsPBN2E6JczQLkMr2jg",
  "key2": "2m5Aa6H1es9MR7kD7YP4k6ToLsTLdaB7Gxsy51Ym4afzs77Der57B1F8qzjozDaoTbUCtr3u5tbFrrxm8RrD9TWt",
  "key3": "2qiLgm9aBodbvre6yMetst5823hMB8AoFEKcPe7shVRmD4u3fY4z3CZzNxHrFQw99jJhojxNA8exTddghrvQNBh8",
  "key4": "3R3uVAbKwb489Re87ZVYf9iZGCRSRsqWCECVA3hmrFnQvhNdoa8sZEsuAL2tQEaz7cvodQRbX64a2tAk7KWwvpZU",
  "key5": "3KaumpqGfCmkNyN2vDwFu1XUJfK1tnc8opv3nQys4jxSfj8v26rvNxsJVC5Asd38bki2ZN6YsGhnYrU7gMyCg7mh",
  "key6": "gY9fSTsg62iFHuGjVUkvGvhyrnhSYLoCYkC56eg8ofB2RsCzjmT8SsDDtQ5mQV97RZ8v9to491gmXyS49ouoREH",
  "key7": "4swoPSsqk1MGeEMNuSz9uX38tsKoxDk9w88BQP8juVbTyzCwf7g4ANZh6mN8v9wc7N6YUNYCRtsJgPkhckNpSk5q",
  "key8": "21xfM79uRWbjRB6RQia52ebzMN6LfcasQ7CnpmsFiny4vuex477N2z36xmaDLVE6Liv1kA6XBmVfdJF8inmNvUd9",
  "key9": "2VdZrrSbRbVr9KdQWLqgYAWnESjMrSyjW3rg7S9nxFJxdc2KARYy3m9BsxwfCPGwFZCnexZp6AdC9pSDLpkx7VN3",
  "key10": "2xe6cnPfUp8gySAzSbosJKrQqw494w4Tx7U7b2Wu7vKJb3LwWUhTcGB4eQfwQJnGeMmXAPYNwg7F7CCi4YVaACaj",
  "key11": "2Mn8jgqDoEPcLoXpAnzVNBNrkvEA3mgxDcs1SritEuJ7BafXEE4A8TZoBvXa6yDPZCeiZonJeNAwogH3cYXYXhgs",
  "key12": "4d259iK3iapyy6Ax4C1wi3wu555BnmxwUnk8SNeyaqSnaZkvGHEYXjHmxEd4EEu4QcNfhCYz6w8qrzKWUndMhwKq",
  "key13": "3gxnXyEYbfJtKXR393Fdy5Jym6QodVUjRXwzLGPBPXaYsUXqgXXinHGoUbrqbyXNnq9hXjv6gXdXRNHiare2QDMU",
  "key14": "3V9TGE3sLLPuJckzHUMwjsBCk4TciwrsyMcvdotak3oGbmuDdnwDSMzBNiUtW5BQYotBNjEsEjagfA1bpeWSWc9r",
  "key15": "5EH7MaSPHAYK1UrLkswZduZ1as6eER6PmTnALC8ntLAhLodzx5EKMR6EjZeKakvHsxDpob4m34ZokH4p7tH8B3s6",
  "key16": "2xVePQh5KgBezChZ4q585PeUixraBTPjkT2VpqvWcuA7WwpCYpv4G4ri1i2fHxA5rGNT8xNQKQZgPQyogrt4TBHP",
  "key17": "4zzN817q5ciFRWGag3PoWkCQh6Z3KW8dbjjCnj8GksAyfj3y6Td8BqaMGzjVZTsSQeToUVx8MxmdqAtAJhfNM1Qf",
  "key18": "2h1BXsgiCWFtZJEL4VE3ANzgvnjfjGdP1GYdd7KTZBHbtx45jBL4DMPGd71Zyup41eUhZExkFzeQNbjQYEqaoyVe",
  "key19": "2EgsWNVpPHLJMDp1n5HD23djq94rq1qKuCzN8w3oVnsoeVBzQChteGaNMFSZwvseEQMemhcLyHrwZoSqVKQTiDNN",
  "key20": "59DJdwEf7qhhepMo6kBevAE3RYZrbL4SKbaKFRg9ZhSJXZKwyrJFk5DK5qMPntkVEQTrRa943TRPAzN1hZ1giW9G",
  "key21": "66BA6uxHZXw4h2DPS8MAVhv8WED67UNnFxkMaacLjRQZfddsrAVJbaqPjvr2RN2bDr4d9TLMESMJb7YsA4oUY5Lz",
  "key22": "54ABAeeWAVjdXjfAyESt89mWsi3iDgFnaMKno3ukeba7trTooskqt83VUeSdYVQLHmpY3emo9VQcoXXo36hd1GkJ",
  "key23": "41wpvAJ8jaDuaDmw36bmKUbF9GU7bRpjQTCqb8KxhrNzi4ezHkXAxzJCiJB7EVURTodFQHzEBB9nDbcyGNZhY81F",
  "key24": "363KVYzbXQFMUTVXAJMJL1F2YEyhPKsPQSQh7Tj9XxBw23L3jYtKJRkhvPPJwffHmoKVRVUhS93vj7KqhE8P6gD3",
  "key25": "4ekxkvPmTwCiqRiPnGvEyLP2eFgSHTDuzzGBoVRVZpxpidY2B7bE8GPTaCtFmX73oA4midZhwChxGg44brdxJftP",
  "key26": "3eCgzZgJMVEPtxaGbvRc7knpNAkWfeaLzJ2XTbNAzFp5Wjo1Mmuh7WUv4FdmBQnzydzbxsHTPVbWnjhdGeCRDoj8",
  "key27": "4qsfcrcczrmBpyXZSBKGuXmUrxYpfe7CRico4AaeL2ucWqMMfLYAHoBSeFjHN5DrYipygUTaPzUnpbQNKFHqGPSh",
  "key28": "4v64ti9MMiJgLQ5DcpS6pxLhGF5ykkpE3DUzcMzMZ3LJoCZMBisJee2iXx27ikKKJ1moRDFsHnvA7o5QSd6H4Rxm",
  "key29": "46F2N8oTtFzqTcDGA6Hi7sMmNST6MAXXZXvw71Vb4EWPsteKGN5ETuee1Mh9jKJL9pyaQNNc1zsMncaZkAtDR5SB",
  "key30": "5Xi8UjB79uRhLr917Qiq9kiqZf25bBeY3XLY3g48oXBW1RH5yuwruqDhXW76sNTpnbSUFoP7mtyN4ZiTejESWtin",
  "key31": "5GwaYGVXe2ZC2g31D7uBzAPhRXoxarxaSD9RQDA4XKTJizxjeJt2EQBxr4BE75RmLyoJjucY36cBmnUbo6oQ934H",
  "key32": "AQqRWzU2Pgs1yNjUrM4xJRELGmP89VjHPmmQSTcomtXAUuYGcuE66Lys8H6w1nNKKhiJjXQxr2a1P4dwpyXa5RE"
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
