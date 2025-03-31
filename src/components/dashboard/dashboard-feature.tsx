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
    "3kHKW2pFoD8bBesqNN8S2bXumgJjhZFXhW5q1p3RWBiSd773FNeqSCUtb4WaoE7ToJGKuUgTNkkgfJPGfqRQFsHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNY5pr2uQHAYFoe7DdwR2THNgu16HNtQab5JUHKrjtXvzQhD3854LAK1waUy89HQ58vKGoUaxTMBK89eEDc5Kdh",
  "key1": "5JgzpwUJj76srJ1C1xUUCLd1JekJ7o44dVgFfnANgFdH2SrtWTWt1H1788nB7sw24GUqtYudiLtyFwEXy7LcFg8d",
  "key2": "3DjKajbqjgHYhwBYFjfRpyNXcJ2UrZn12qipY63ARCpja21mCFYdByhQcjkXmG4bJFv4K6tykf3bFgdhZ5AjEBXj",
  "key3": "64ufCyYijKKfJ5qgntzjdzFU4FEkmeE3HtjhvuS3M7FxweYUCyGG2WXGhQvQmpQi9wVcp75Bqdos4gE6q93h2H6L",
  "key4": "2pBJPcrVBGgLYBo1QVfCNhGiveGKeVMUnaUaqQo7xErUopKftBRnPzP9YvG196DMEbKXjmhu1YQcfi43QJYGrX8c",
  "key5": "52dJ1GHYmdN4TfPcKDioYR93zkAi93bTXhXcZbqhURTXWT958waCQSRkaDJNLTL2nYEjpkK4FzYmmsBx1zoGJXBC",
  "key6": "9BLQYqxw6nG1YzSaW5Srt7QYNa15QU77bVH8QZYLEtfW5aixWHKhy3R33in5CuzHi2za68tdNppzdxbddb5LrxP",
  "key7": "2tdsKgBj3tqxNJTfatsQy34WKDFez4YWedbHncszG9YDKdov1Rv8m9egH6PCRtScYbtVwVSqDmdZHTjRHkuBrykk",
  "key8": "2JmCHkndNX4gosn5VCErqHdySL7LZgr79KJreLskZ5bJCeiE8SgFFBeSVacFKdAMREHZstyCzFBunAm8SopUEs4b",
  "key9": "2NQ5LqeYCHJBRmk1FyvjpbDbB4UmXGr77bkYFdijtEphYMDXneqFNkYjCYVqmr3Webw6PNu3ZUSjqCTTnQ9GVRYY",
  "key10": "tvBGQXLbaj1tZj91Hv7q53cbCuyA5uc5Fi8ubfqTzryWBJFFFmXuyAL9RFNwayYrztqM8Hhoepj7QbkPS3j35qw",
  "key11": "45pYrKVrJZgQFzaE1j6CBj7CaomLoPyBQ3fF5zEXs196ueVqZ9FHhZpAYEFZPDBs4kpzN4vdUNqHZqhpKBHdya6b",
  "key12": "PBGX3v8EMq5UHxaPtiwKoYbSsVCbN4yuLzDuEffSDYqvMgzgVT3EoSfxRg9CERAmrzGskW6c892WUUHHt7xgLRf",
  "key13": "46nrKoBNzuNb9heduSMCNPVDX5PnsgLKcudNLXVspq9RRe7f8zuqQccFKb7Yi9t5H9L3LVCV3TEWt2uXTaXMaKSZ",
  "key14": "3FysBjbcBhFyTfzcvX3hgFHGyobr5XqtfbRVTYrKc7dcfzGYbpDfUzitdctN96rZ4VWrVGpWvz38hRCTHkGTLDEM",
  "key15": "32Tvo9YcUviKJ7RQ7Aw3FVTQwc3TD77DxUoRM8DmSoxp93oAHsi8ZzdCJ9FJUJmSXk52rnXyKV8s9HQFMFeLdHH9",
  "key16": "2o17XHnWF2QsGZLYgtgLXLxnHKdRR1pVeukR6S8Q9CB2wMgbnk5xUDVq2op8yqo7CWGALK6RXJUNEaRyB9GzYgKz",
  "key17": "27cfaAh7aSL3BuPKj7Mx6izjzdPJv5Y6s5wtacanroNhtk9sXi4q3gVAC8qEEaearExRm83mrREwENGm4tAAW5cD",
  "key18": "hkwCGQsNehYcbbnBskmVisgEv2jztvMK2MMqbUBpXhFcwJ3mKtYYCH592PNoZvehHGhBW7XAaN9VyADETSfAGdG",
  "key19": "3UCUvY7s72CkNA7LmUUTyjcCdu3rYLe6ghE2eSmU13jfzrGKQcKzbgJNsPBwBxYhrkbCzUXZZRfZEbC9jR9MLtub",
  "key20": "2KztTmK4Z81MCZad4cdCxf2tUsTSJumcDAGdxhXCyVQis5iX3oMN9C1Z59WohcFbKzJPYVUsfibCsvvmuBNLmSzG",
  "key21": "5PMahrwo7jQjqBmzejngTCUVJqi3Aav7YABofXTNuboR41Z2v155sHpfSiq75nnqvBt4CMXM7whGyTiy7eCQTmtz",
  "key22": "5iukgP1hjeEbGATqNYQVYvqERnmfudURQ5LUXzU93sfE9YQ8uuCY25imMB4fpysqJA7ef9vYj91XmEQAsMyAskVv",
  "key23": "WQA8fMUZnxJoMHHKyPJhSq7mT4D9eoVpQLUaEY3cWw3KM78uPp7e7LpPgmJAbZ5RYuTGu25ScoykWTgv4K2QJL9",
  "key24": "3oJnjgAwFyNDqYyPwJ9RWygg3DWo2fd6TD4VMM7RDDiJV1c5aaLqh6jAGV92ERqMrtbaH65S6WScyxcLxhwP3nav",
  "key25": "5MvCqNz7LSktNFHugeq14f3qQmFQ2it9Y9NyQELbNsJVxNWi8PmJWSno948yNoiT6vv52Ugt2Dhjt5Pp1aaqnhJ5",
  "key26": "4cf8ko5FDpJRCU4CcvCbGxpWRziU2XsF59Jq9mDYuwg6RgQWAHrkRLzJXmTLhzFkF73BQMULjHTC6RqPfHwe8xxF",
  "key27": "5eWL6KQvogRP3pNvmy8Z4CcdgrGKnFETE95vDS8yowZaUGnrPyQ7MpcavsusuZQ5HrPCeqJsz9oQWvzGMid5Rv4j",
  "key28": "33gChiuPEHjGmXbTaAjcT9T3Pe4FWMsbd9dDJnDRmbHXn7h3jYaSwcy7fGuLeDS9VjXamisBYpVz1it5ZzfjUdyS",
  "key29": "4iBgbwgNZNSBDXUevskXb8zeDgUfADBLGBVr9qHrewcG9xvoSuf22bdUEFQ1ySctN5AxgoVJ1C55D4Ek1AaFDQ9s",
  "key30": "3ovKux9xdBff8UHffRtgazdRU2nNqfvnuugEyqQcYnrcnVz89XVnQ5hKotJJkjms2k8vF47YE4Z1NZB1KBwTsKUg",
  "key31": "43f5ZKShmx7rAWSHbJyxv4LoBh9NnUHLxY9WTrE7g4eTS4GqjFWbaKbiED2q9yitQB5xpiodybH88iN13EKs2o1y",
  "key32": "3rPvKLhmeKLFcgmSVoL1espTRYVzGvmZghT4XcxtBzF8QMrM8CxtTQo5k428KGtozsrR6oXJ7STznsAn6jkzhoXa",
  "key33": "2f7JTm3kPeR7KKC2uXsJATsuzCT4KTSPZoFtw6nyuWFGT8hjzz1Wq7YLzCag1zTPtt7vd8CYMxt92FXAe9wuf8NC"
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
