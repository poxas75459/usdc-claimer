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
    "2k4M5u1uYWE2ZRx6x8GuW65Wrv7AzBi4i946HcyX1HmDZHLHfT7q97AmPi2MxypUeU6gBMyX192dqcNupRzLZDeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aT2rSueKfB9sFiFrEonBotTokAUNfxJJ6D4XdkicrWjEdSrtVBGigmSzi9BoHckJ6TiYToqm1LpMswphbmUqDoq",
  "key1": "2gA8i4Pz39szgJevHXfxMQvq2JxogskGNhs5qoeQzKLJW2J5GuedYRfvjgJVCy8Wx1biupowFQZSzGY4y9dpwJwv",
  "key2": "5q4obWCMm6E5PmaJi3VFKRjAUjyLcGr5kPL1GZW9c8t7xgNeV3uoaLU8yGRpTybLSRHMWytaeqZ2osEzxo3boS2f",
  "key3": "q8rk4AVRvbLX67zCCkP4yp7ioN8Rg8uDC4dxiy3VaFHKMGw5u2FgydvGmBFEdj3CU9Ue5qZC33wx4ks8yAGHbKJ",
  "key4": "4qRbkh8KkA3poC2yZzf3vZGxuUqZU5NCRtPJLR5UyUUFb3Cj5Gu5m7xdBS3ThxDia2XX783VQeFqw5wmXus24pwS",
  "key5": "4RAQN6o1qrdzb5eCcBDPvzpTZbtcbq33fHMPYsky86CVUcbsTWXZXadSkzHJmNNPG79vUzYux5VUeCvE9Zdbgmek",
  "key6": "2KeJSAew429Urzg7WaPn1PC146jJxqGZbSfSQaJeC95aT8hdVUuNyGTdUZ2NtpFdBgtdGEiWwPxwEm5C9wvtedrX",
  "key7": "3Fe7isp5jTzrEHTCgc6j4DusmbD6qgFRy1iUUMtEfveEY9pqVapR98Mzwx8P9AXKv4yZsNt3fAjnXrDMbB8tPbgV",
  "key8": "5VTdZ5nsuA4ALcDkjky2nVTmDEUHp7zTJGPSqwqWy8NCZ8NeUM3EDcPEGc5DqsUU3EN1sv9mRJmvzCTLV4cnWR97",
  "key9": "4iXKZDwyQiTr1s2K2y6PpMp5oKgZNKfLAmxgeAycoEoPwXEMx7dDNay1TnMzwdjjfTN3jugsHeCbyYULetinchGQ",
  "key10": "3v7B3MwBNHqDcWBhXtQufwdfQtpGQHdRS977HDFgRWqaYGTnUyh8hz8zTPvCGPEuGgBzbg11CQxk3MjYFq9rf4V1",
  "key11": "jzaJ1sgNJEUiJA5GcNp5uFGSDPDkC7Utk5MMWMA35pi7gWDVfXyx8pruGN3Skb8SHgcWUiBpTUChZFjr65HXR6U",
  "key12": "4h9ZjJ266N7gbh4KpKPn8w135hhE7AXZtfrCBWWqDn2P3fD6tJm3tudFg5i8NcxVYBTNtKhjw321fbGXdBVBopVT",
  "key13": "4sqfgUyX6kATfvZDRDsKyBR7jRayJwwvRH1sH2VUoehhcxxmopiQjoKkNCHP75R9PYK7McnuaM4rw6EdLDU9Mmz9",
  "key14": "3rRLgUYZVz7F3c4hyyEvVfVqrfduZQSRN44dZykoRi7tMPnzNb882NJvqRoGWDCtfVRrSSSQDSPQDWGBdqPbYGiw",
  "key15": "MBPFSUiiHknqkwL9M6amKwzTg7EFJvXvJYv6u386vDdGhKNNuRjCSh3hCyaYPS1v28kpGKXEYpHCvcgCEC12gWM",
  "key16": "kMYQZwhYfW9WC746kVwxNqbBv9DEEidYwtgPSCbGBNh9vpydnpJK9B3LAsajm1wto75hg36Y7mz8mLMuxR4puyJ",
  "key17": "2UFWej7Cuq52eufpMPFtqjFNNhqdPdrvQNi9fyZTUWUNVrE2PnCCBzkBCEdeLDNMeQa9Sz4H4FR6LhhWL1Suaz54",
  "key18": "2cR1Ktq8TdEPKUD5Gj8cfA6Gfyfbwbvbbr7bDigbrZ13YHRzY3Ap41PymKLKce2AB2xonV3yccNbtGVqayauk5nT",
  "key19": "4swdf757fxn8m67Ra9rULnm6E8pg4zDSpyS5ExaUUP1y73LYJoxvxTycrqRbfHtqVow75ej3SMVnmbrUFaTcFXoR",
  "key20": "2oXZLExm8Epe1GZ7jv6Qwra6c6tTUATfJw5zEy9GJChphEwqoG2V2YKCtkVcCyoqB9ewnStAAnM5vza6dAFd7NA5",
  "key21": "W3CNDJX5yzNnzeP1JaUXYg8tEBXtaPzeDpL2PyZbWMUtu4RRcHZS6tRkgz6cPCGoahgLMTraDpqGzcfFYQ6zP9G",
  "key22": "5t83WFoz7hi2gWhjW6GfaRbVo1Lb9euP5PbZrQEzYZqz5RbdxWCJM5MXXyrH64gnmdEwN8AWVkYSL1W6vPz6u2Cz",
  "key23": "5qrB4Zcgp8x9ve3kWjpR9XnN9acdSu8mU84pL9nsby74Xcow7w3TTUvzuXjNWEhYqW7FGaq3cfQquiNS95QuRQs",
  "key24": "3S4xHRydgna4TsVUUs4hA3fNMfXdbhnAAhGYU6PsM4a9MWRiKeZvXwChWK7XgTXhZ87WP2njFVdnF7JYnF2XqhrF",
  "key25": "2Vmwp5eRsyvsoFRWSFta4fvniSsnKkWUSiA5F3VfCf8oVKVxE296Y2QaoaxEL2A72RtnSbFpABRjJXczbSUxx4r8",
  "key26": "5Qpr1A1PG2xZ9Mb85me262svLoBqJPTrawL89g8EPN3STfNCgCeWC17ftJBNT1SVqZFB7oVJ7mn9PB9LoaUFrSp9",
  "key27": "5afguw4Z1AqyfY2WTAjmYYvfD6Fty8Ass4y8e6rHSLBNqLnADmHSWTYEMnb7iyn1a8wAQxbsPAWwPHyNQAWrN6ae",
  "key28": "27Lf3ocA5ZXrrRxWBCxrbL4XywgAPCoxCuSTxYjuqYdeTGomnd3PPNGy8seYYUYZpj4WZQDY7igvt1RFNejVmZDw",
  "key29": "3DArQHkHH6hZe3yqdT1cxpHCKdxVtwMr7yZWio27h1iP2Qbf6PWc6jLzMWcQPA2tKiqbT1JqWE1nMP1JD7Avw4T5",
  "key30": "4Md6ryREJicPMPkUpEQfPXS29Htf8Bzp4QXpiQXE3nZi8Xdw1rLa3GFGwYbQMpVxBgasyMpgGJMMy3NBvt4Bdw7k",
  "key31": "5qUHgzRb5op1gw32qzioixKquHEe2ZfNobZFsFQWQeHoT3kwpmxTnhCU5EoXhAoDEKPUDPy3CNBGhkNhLmvaP2Fu",
  "key32": "3kczgrWZPYNQRV172eDz9wDFC2TkoTKonSufDSDipj3SKRLX54k3Cj1hAZHVvQ2YvqG1oo2N7mvbSwy8mS7wQo2x",
  "key33": "5Qf5oRzCSYp1tkEyv7EpwvFcUodyPNmFNpE23AJMtGpfhNyUQHw5WtGu8sZN88ZAJk7UHJdZAz66LrShuD2CQzYp",
  "key34": "2FNKrGX89amvHy9rXLh1KwaZXVdCCiFj1ZW6hsdNC4XPo6KuTFpRRivGPi9dkKTENtjmCkQqb894dQsvAUYmRqnd",
  "key35": "4Q3WGRKWr1dmJygF9RZZP8W2Mh5vDJLDDnYtgQAeak4xQe9u3vQ9gSoJpXWsnonuMjKqrcymr7T4Ef3pn3a8sQvA",
  "key36": "4GNxUoxokDwCfjAgVteLbdMiCKHXUYE7FKP3xtJwoN5H64xiHTiTbApe6mDTow3SnnXYcnNSiBqCbVCiDD4RiavV",
  "key37": "4qWMFp2onUAbwhNtzk2iSwFAi8BMuJnJk8VYTcKdvvsKwntbWWt2vvpad5GmAf6QpDzxAS7CpbfX11wJz9CXLxx7",
  "key38": "2gx5ykwzXAfjv5kBzVqkeWf7euxuPMWXpYbu296sMt2VAokYNXjgh4ThaNWY5t6uqW5G1x1s5ALvvzRbbkRQKSkn",
  "key39": "2FSafPkkRvtMeFfBPyL9fxp98Wb7faQgLNLgfsQTKe1GQ7yNxevzdNLvNgALcAsHpSfARMdWqXSNmZKn4YhcYz8m"
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
