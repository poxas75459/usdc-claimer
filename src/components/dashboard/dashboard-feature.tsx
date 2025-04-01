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
    "PCEaUg9XPw25fWhNFi8DRhq4Uq5QQU5BxTx8KbayoymtYY39odHJjZY7iGUxXQbceRsrFphpCA3ENZ1G5YLN4rK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gAWoVBuJtRcEYndMxnZijnS83gLck4dYeH58eFWdGjgc4xRB4xqcLVeobqXQ6wouDXP3dGUFCnWf918siuRBT19",
  "key1": "2wVp24EqaWSfcXbXS9dnqdcMy3mKBgedPWBEnKDeFo7UnP1azNqkWiNVVYRLp5rtzLt6FMiXuz5J5KNwVfYA2kYR",
  "key2": "u823pcfK643sNiyf4457FJs3yuxFrVK5CGG56QwLtF3PeWoPfifozSHRRXrGyAwGBqUDF1FdrrFh5z8K3XiWYLV",
  "key3": "3zazzBha47cxzhr5SbaxjGE3DsFxx2bQoqmY6SdbeZqh2A7bWCVp7UFtKDfCa3nXVZAscJJFnFwAmKZ3Sa9Z1z8N",
  "key4": "58ZwPkSZ5zVyL3L4aZ1jiZzvwXYHDpLrQXo8tn5Bi6pubmdRYXeqz7Qr97mYR1SbRFkF4PKRYY5QKE78SZgrRwZG",
  "key5": "3fKHpKo2uMa4h4F5C3TdHoAw8pRVWD9sBn2qNr9gkR9aFoPqdStkLPtHtdffo1FViu2LfnzzXCKqgUfYrUs8Auju",
  "key6": "5ZHxvdFVrMjGJgGa3iHypQ9NMFM3uNbSXGatnFev83XE4FWdrMcTaWTrb364nsn24petKqDBVg9vPdBpv7HBA9Ch",
  "key7": "3qoLBh3YmQfEd33hdaPKH8dM9mbYN2NmHqyKoQN84kAYaSfo9Kd4Lhi3RridTYEwfuRQnj3SG4xHgKfasgDQBePm",
  "key8": "5oFq6dkz2Ng7HExhtZ9jEhKu6vfDMD9nFPydxpqxDrKjdUK2K4srxgVeMaKTMdoxrgxuGmxvZFbcgaCNxmfLenoa",
  "key9": "3nHwwTW5Yesp8u9gBZM2DX3ZmiugnkeFnBoQTSj6WYw7rTei2K92Kp7JaZaNYKZKLTqkE1bVW2QYxGAgRspcLAxJ",
  "key10": "5iJTiY4VWgUJqi1LxJb1Mw2es3XuKt6BiRuzdjBNgPhBmDD4Fr6RsGipJQkkj3je3ETiXu36QvMLpFwT7zKsUTTz",
  "key11": "55jPE2uQfKnJfdr3qi2KTju9QWss7n3Y9vdbzY9BjpvXHpSdjRvkB1NGnMgJfWTGeYCQxqNvy75HC3WtT54dwzaY",
  "key12": "daEQgExFy2TJvq4VQT7gSDWZnsEiQnSSCeZLHA36yCuSGasGszJoaZt6yrvumhu3r7R9Li2AkdWu2tvVUTTu8MJ",
  "key13": "4viYfK8hSEgRVCMVq2Dxtz7WrxXJubGhJjzrHgarumPhCtrWW3tCpLEBWpuAMCJNEgsxeWB9tqVCXih3CS6SCpBK",
  "key14": "5b5ZtuqsZvPmfGuH7TYRjbmErBY9RtMK394S1jFwcJ7ytjjnZvPCUudqUZp8QygDoQ2ResiEYXgc2bGruz9ZHv7K",
  "key15": "3DY1kWVN9xwhU4c12XCGBmiQFeysqApCSgHorXztZUT67WGw8HdzWw732Ry2FQsuZcoSq6PVUpwEXqYiiDAts3do",
  "key16": "5xJJ8Mh5P4KXC2Nbe8ATpe4vy7LWJJL9BDU1YEH4Bo7GqeAo9tS6w4CQy7jbKZcqaomY3DGDyxEw2jkNMANzTgjh",
  "key17": "3mXUE3426BfernqoaTRUTxSQDdRc95qDw7RwxkkmiTZZddYhZL8H2PpxWEHYy4RhFRjcS4m4QeYSQ37rHAnpEo2K",
  "key18": "4Tswx6qvPQ4YnHrFMdoW8Ki6Zhpww9Mb47KkGtHQXJSbvHwqMayGcVDqRGzjdCMjniaurvpuSJ3JsPaD7TyMEXPm",
  "key19": "4Fi4TPyQDtwWVgmUFnyHAKcgPYLDGrA9jHRpb34vDnyVAfxm7KeGpvwSM4srHcRWfycz2JZp8Sig4oVpKwAuepKc",
  "key20": "5195uuHM6jZdk39Qost9LtbbgVH3uhrpCa8fuuZWWznaJbukC9DUeNiM5EeggwfjiDzJCtHXYQ7ZhByJQwW73734",
  "key21": "FeFSQNx3azGwt92JtaMyC9dPiV4iaxZ8RdUmXJyBtjvbtZXZxakaNaMpizTyozUi9owjvGWcAA8QDCsSW8wXhsS",
  "key22": "67VbcANtamC8QSZhoCtZwZ2qoP7yVV3t3hyAvyEwnGiNqEp34FLT1Y4oWcBgX5AcPgMpCaxtK7NvoY4TJsDbLd9w",
  "key23": "3xdDB8SQvY63FThLWRg7P8XHDcwjbZrJvtnscV97gKkbgHwayZ6PtPPa6gbxrXfR5U7fUYMDwg4sKCKjX3wvGMVG",
  "key24": "3FmVNCWmDTRKXnj7nkNKrXjfk6yGBBPNkdvPfcqrPBYX98U1jkbM6k17QVBB52y7rCT6jfNugoWzMJdJyxBhRFV5",
  "key25": "5o8xcfKwhmVWSpZ4GuLNFNpvq3fqU3BdSWf6datgPdcYGHVXL1JkNEfEuNwZaZsVFu1GS245Zo5HxRDp4Yoq6Jhn",
  "key26": "33tMT2Rbp3snxJN474E3BSbbDnkFdo24xLhYeSZScCxyvtTHVyF1TfJnFP7Nghf9hpte2TH5VrLBr9Wh6vsEEFx6"
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
