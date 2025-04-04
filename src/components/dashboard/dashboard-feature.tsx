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
    "2CNmPRfvc1wf9XhdTFXka3pcy3mARMKUqx86pBDcJrBoJQf5Mr633wZ5n5woiRszjPoc1o45TNRRFBafsgW4hVXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oN2NVkUeDXHNh7LSaCE34sWMNkPd6kXeiNd7guJECcLrtDmu54th8L19fP4pM1kb7tym22aLLCFxJ1aDGT3UMXe",
  "key1": "o3N5QRnQqSAx8DUWeexHpBrCg7zHjRUmdkZhDAuakppFYt5v4hmVJ1apJwMmDth7X7Bi5a5JxXNapA44mFysUsz",
  "key2": "4qcJYvC4MZVcNZ9gk9RHx2b2sNJ99Qo9ZEJ2ujC5dpqvwnJQwnwNzEWc6bbE7ZGGtbRTbWxS6CgfT1mXAJch7ufT",
  "key3": "4GNECLGR6DE6VzaYRkXztCz6jEqAJe9RWGhtGe2iMt5ijmbabvmh481wEq91PbvZXwXvkzRvG6NhDSGtBiQY7Lrk",
  "key4": "YY7VE3qXGiqiMCYnsTNnYo6xMxmvE4RHfkdFvpYtaueK293bdR84LARPznw55FA9mutxTHoSaRci32DY6t4ZH6o",
  "key5": "3rTUigapcHJtgwatp9XQZtVDCRo3R7TMhFr4jAeBuZptfsfS1YAeRZQCww9Dz2KBz7cravoaBvJndiUcttPbqdms",
  "key6": "NM9xEtQhi87HfVxJ94BVebQ57D3rBiHjW4PzJxWKJvbv4kbFnkVtitzKhDiLNpER59mZnSppPK58zwSqvJPhUgK",
  "key7": "61EnJgFEQLkJovgVisYUZAGWxEQb1kGrMYnocRtELcrCLCHGpJZvtv2KRtCEfdFsdB7Kfm1eZ26F3b88quFHptR3",
  "key8": "55feRAoy83TZm5MiRG7TukemsvJkXMompg341nj8AydMahSmLgoyWnw69t9NmHa6AD6Gjav1D15dun9FwMTRdaUD",
  "key9": "2cZZx7a7xBstnwAydpvJRTKpFgpBw1cFoaweGZGHuqRbd3MAmZAMTQZsXutofvDup7a9rbJYVBUXxkGVDjY1nkV",
  "key10": "5k54XGshyK7hng9XQFYqKEHzNakmbpqCiDeiNBo8RMDsxYnzBT6aiofbDDrru7XisbTkyfQLB3PAvRSrSVwVtTWT",
  "key11": "3jtmhaRKP5v96SvBFpui7bpZdq4vjjdnVzbgXw173nbCLkzmtj2LBzf2k6L978xjiEjVY9Uh1HMZ8duzSyPN2WCg",
  "key12": "3UiRM4N7vFBySvW7osG7z2eeoYjk7kh2EoLpQ9PVv88MicTmNDWoJisrpunXHKnqRktLJt6G4yAMZjS4uoKhqSzk",
  "key13": "4ZNj9XHJFRDG1u1sKZACEtdamGXGiBbJ49xR6XcMqwExDuL7Skmm25YpMLfo6C1WjbjP9GkLaMJDTwxiurwzkcgm",
  "key14": "hXFFmppyRx1gMa3VRkFg5hD8p4nXqEU4maCmcwgmztWqGH5u7hyFAZYdFBZKjXG9nz9ZpMkvXHutMGqa15RyHqy",
  "key15": "3GK3J3JmbiSRa5m8WroH9CLhJXFML4YUtuqCG52yDLJ6ZTUYGfY4pQWF6xnTfWqJSgwL4hrxMNV56VbMiS8gYQav",
  "key16": "4CWAWhwVqcS6CgHPmbQztKiGboA2SdP8LMnrAFf6CScWLJRFFsjUNT478fCU1qoUT3VyAhRs25PmqbLmzBvBDibi",
  "key17": "2WoX4XC5t284ngXXHhmMzE9M1z3DysDeUrpv7AEaes9GLJVKC45FNnvi4ApBbZahFdjHyiRu7kGE92ZEAfcqyEJm",
  "key18": "5izjSa9Q3cJwgzGuUTqsZDEpm15WpCk2yEkqoirNaHT78nkNjYH1Xut3p7R1gKEx5v7uH6grLPEqi5gdtZBAsx2m",
  "key19": "5D8bKj5QYYnmEkHy2kjxzxA8zK15Rnn3qTb7LSX3uQ5r8RgjZMFrtx1WFY3UvJMYvB1hkzXXEpPCFeSkbWpKJGK",
  "key20": "3SgCuS2ue1V51u7LmU4yHnY88FhZJsc5sKhiYEbCijwGd94fXdmxg4BDuGmhBWCeisTh1CLXKUcFwx5E1nskfnJ",
  "key21": "3u6zRuEaJEGUZV46NNWRVyzZQxiPVuxhQKpZQM7Wh4MEpoEfmEgfAJ76VnyXkNjXQGvK8xn4ogRgMEnSTsCGCcht",
  "key22": "3Gkzex1Vp6XDZq3wNkK1w1gt27Yexhxw5ZpM2ejEccMqEqsu7kKejvKif2umiPkxXc3z86Q8PRxbX5QwYHxqNgXv",
  "key23": "2vv3eEvPn739KnbjaQJYZtn3VjADRuF5NFAGzyJYYXyvQXynwqjebf4oatTJ8fXAK4hhBYFw34oBhP9tuygucDQF",
  "key24": "5E5rF9tMy6dA74Mswh1qDWsuQXZMg4n72hShzKdPhxTKnyrVHjeFJdUTUxrLbciQH9fs5HDKXJoXsjiDBUfRh49q",
  "key25": "op5HG5hFdmaxSjLxWmrw8kHNa6ymftquiJ75r5u1EBqkj72wcJDLLsfFpvJ2cGeBRBLcnbropmqvdifvcLvkVT8"
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
