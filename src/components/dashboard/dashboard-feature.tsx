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
    "5nbFP6fqS2nnJn3FEyWUouG8sdUDzqBL27wzUMAwiPbYh4n864FhdhUgDFpoPbyUs4SCyiqcbhs5yo6R6DFjRuVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e2kaTeYmbATN1esqKQxuN7P1tn3z79ih4o5MGyrTHm3UkhJFNWXadtj6X26aBRo3PD9n72acogZyALcY75Jv7hG",
  "key1": "5H2TNEgADPspSXqAGv9t92oTK6oxBrtQzHrrpGqP2Sce4BmyTYk9BnGGEQFqEF83eQ1yPB1fC1xNrivYdedb6PBQ",
  "key2": "2b61qAaGitXjmCooxuVKkbzK7Z2BSB2EhWRhk21HfUYVvJUcuPKSugpyNqt9ewpeofDUgE4FpEK1LFn1ny5TAwna",
  "key3": "462SvqTCt6vsF411x9rDZSEaWSASgzQQYwzh6UemUjUPbjJVFnpKKcznHtyoDBSbdGDxG6xmdDg3LAKKvaPuZtyW",
  "key4": "4o4WxTUoG9RThwpN5P1XF1B2oanipitoKXLWMws2awRxLT6oJkEhyA8DQwG4X5uBQptaEkYknN1voVjB9U4PCeo3",
  "key5": "2Ujh8yNmX8tyT9R2PJyznwJc7Fz88Gxq2iivBVdKvEJm22KqKWHJPdv2cFHvfCzqPM4BEsS3UExpgp8Wzuk5ySJK",
  "key6": "5QqJWE7bQfhgxJLfxpucr1fAujHt7fxe61PJkyPRA2V6Z2UxmczCY85cReU3MWWSzRfynCkRwPuoX7ufcKaXVJZB",
  "key7": "3d3pwo4WS7AT6V7otsWV3revHdTZdnfb2aWKTgeM8XvmbYKxAjhfEP2RajfuXd9LZx2wvzP53fWx17RXxheZ3vmt",
  "key8": "5CRhkG7vtpyP7QRmpFtYdWGmw2o2dN6dupCcdtArhVbvLwYVu1kiJZGMsBZPySNyR2Y7PFKXMhYvULqE5GAK2dHw",
  "key9": "61HCaUDydk6AMT97VqMYf1jwiJhBkK44qQeQEr3yJ3dzVt8ragx46egRvzmf2x4Nc4fhEJo6Xb4zitmwu7T4dKrC",
  "key10": "2zXNMHN288JrPagKr8u12QqyejeC5wKxwgj8cw75eTMgQnBqQ1iXK2W4kHNB6PJvfnJ6xYSCtcnjjPyD9LL8ETtN",
  "key11": "BJY9ogK57or5z1FHsjersYrK2J66tELKQLoRyFTWcotDfqbx5tSh27pBLoVWe1q8GLnZSiuK1aYKNdm4ygfpsCb",
  "key12": "5uNwMHftFpHbPUtCdbbY4ZSCfnJggxejz2kbSvzVpYvLjToTHwf1mDnn2bxDeepD6kP6iL5GnGWY76bGqQiCVwZC",
  "key13": "2ZpUMZPPv8Zeb3AJpj4a27UgXR3ZG94TJM7XF63cnXFk33peg3Pnyd425ik3nDvGFMP8SD6LAWduv3s611GQRuX6",
  "key14": "4EgLxPF24LS988sPLDpcvJJg1ynAFGqZMe7738TjvXwEGCDMBBWfEAL5GnZwYX9JPtQ6GXpjgyKwbSmPpXLDZfBz",
  "key15": "4Q35aqu2r7pk2rfeTand1YE8ssKC5oi32UUnpGki4srkxjLqTopnjoc95Qq99xPXoafiuvCkRubwaGkCMJkFG33s",
  "key16": "5FK6PxgPxQvMNkkLxk3HCQfi8MGRvcGnzqQAaSAuHib4isoSx5v7zM4kBLcAuBxP1JBUdoYkmxeoV8SyqT5Ljjs9",
  "key17": "5Kyvo5A5975GhGWhqT3eDWkPUvrK9JF6VSUE6yCNZSJYUxd1tyB8ud3CxVC3xtNufVD1jBJvE4RqRsQUBRsP4URg",
  "key18": "3VkFTpyBorekDGp5D3wDgPKEejKrAkVQNZScsCCn3Fjxq1ddVsvnnvTiRtBTbRgEjPj79kCQA7yH6ubnunv99com",
  "key19": "CX3cYLg4YY2nG2j8WRU8HVwjEjcc52isggE9jPLn2uE4NRUbp9XxsMRP54Ce9WSh5UnCSFk1a1aToeaUtYoS6Tk",
  "key20": "58RAWkMFxoBHGVefpFw8wJExDv223Gz7xKRp4fNrRxokMRFEgoiCpz28Pt88r8ApzsZMDEwXfCtYb2CXge6tkayr",
  "key21": "4HjwAz1uKt6qi7a7MP6ANcape4LbnK1xSnGJVsLPrhWXbTZGrEDwKRY2wTDTJpJgP46CQ1ixA3VWSLGjNtbxWM9t",
  "key22": "3VoFGZ9jGVeNWzPkJECG9tPFvFbw8v1HYx811PRUwbx26v4tgjen6bAqLAC9NwqSVjK3GnnW8aDgyssVRXfLPwRm",
  "key23": "2CgzfBkgki9EoJ1ovvkhsRD5FrYwa9UMFwxTwfhCfNKnhQ8YCq3WW74jGsLESyWNzroADCxxdN5oKrhH4mHhRyPF",
  "key24": "2mDDxWrFr9KRRjg7M7rXb6SPPCNi2QyJSJ3RwNGhGbZEmqZthgvcioBaEK6EG9B7fTYpcRpAC69dMeJi43ZfLC5h",
  "key25": "EjQEGn94NRFjFY49AbJNrcowC4CGs8aNbDhPAFR8EKis3dekYspu1ccNf5GvFPyeMei2eiJt57o7QHxFfePVUBc",
  "key26": "MaQw2pvuMviZGFde7v387bv4xPcwh45Whhn7XmxSV8W3rXQ6zJAusi98XaJ1Zg1x4kJ514JXgKzNrJJWpdSVVwH",
  "key27": "51gfWuXXa1Gv7BzBB2mBt51gY6N8eDaLoDBzkDvFmvgSvtYWkNZiV6vqCAfXqVv4CuEKDV4r1Y4GjH2vWFa3xmoR",
  "key28": "59fi4ACZmfqmd5PL4YwL4z22iVagBn1QSU7Ab1cVDGaTxRuhngajxERKiKsb58qCPUoue8AaDApeFgknvamwZHmy",
  "key29": "382nuLqVubLLUJXoY4byEN8NsKx6wQFr8bjMuPC9eiNpEfR7nkMdA9XFkdUdJvPMVd8qt6N5ivPCcHTquiSN9HGR",
  "key30": "5XNwgdfXEHeAQighdceWQ57dYaBq9jJtTDdCPQkaKpTx34wQMsSNWA5xuVJUMFATgqNVop6vyG8A9zrtNUiChyCQ",
  "key31": "5LUaUoHVVVt8x55f7ygEatCj6LbrreQkCgbuh5Y6HSaHw8uTmDvwUN1dLZ4bQtCdPARYWEZP1vVnVzy6xjGn1fng",
  "key32": "36TykgMMXQq7sYPQ6NM3N1obyUFWAeqx9WrmJzzzaJS8jzkAy2vTn5jujBDV7k6ABqN6ZBK9PpL5CwQHUVCuTEb8",
  "key33": "3rzXzEpbMdtaEXy2h986T5bKNGqkTETtGDJ1bKw7kz1c1zGfTEMYfc3bBrnCjWuzTSxHBvbouy82v4goMUwh3XVM",
  "key34": "htzbbvhSxd5PNatiRadnbQ4Gv6P2dvs36uK3VH8mCTUkWzvqYQURNvZgtqL5yuTjMvLYJb2p37ZyNeSHxH3iHvC",
  "key35": "DQjxU4tRFnSWD1Ufu4dYCdrE5U2y6gv6tYJjuX8SQHqkRiyxWia8XLVokq6uH6k1pXMVjW4sXbNF4UBNhTmLyiw",
  "key36": "552vzj1CgV7oaBCNbJGtGEJqhqfJEK2a6gAdFFjGcdo7zc9NZJwVMiAPwccmztfzzMAiHEnQ4aCvacKe23Yjisni",
  "key37": "3ao4e25gm7mXuFv53RbwfaiotrjU9fonf93XU9nyXA5kmRSsngT9hkTWzBvkkh7HbpUmN7Kh7m2AhnqrKxRpAtVi",
  "key38": "PpMyyN4awWjXtxVVAvTdc1defd2cc7K6qu7fRKUtNEHfQxFiV6yDLc3t5Mjdm5vWX1b4E2C6jr8QcNQQHqgw2gg",
  "key39": "J8FyDDihwnGva3AF8VzXkg8S3RNGc34vS2BhMS2aNcF7BA3DreVkXwMzUuEq3joastppYqHKKdANjY4vmjwHSfv",
  "key40": "4KUZvFERZfS97qiQy1uDV6mFQJM6m5ZYZVyesd6F3DwCwL2WdZS4LmRAaYR1H9zmiaiXAPevsnJctKG5WW1isDnA",
  "key41": "kHbttsBqMLkzkU8nq64imSvBzsN9aLReGWzzw6JWn1Bhxnt2Dvu5aYhP1EUFH5feFWyhWnrqPzFefhXPK8DWGKy",
  "key42": "3UhgCEAsLHc5TzG22uzK6BpX8B23o2b9rRc9QB9QXP4Y9xikD4iSgvPN3S4oQvFJF9ncHd6FvYUn5eqGbXC2buaf",
  "key43": "5pNkcBrUtXnwRj5D4FSmDwPWuj8HmxCZ616odHKQciib1iMwnYNpnB8XDzMG6M9f2vxD5sRaPpoETB2v4sKW6nsq",
  "key44": "4m4Go4UcEdHoqCZdbP3dxsUQvRJYq2i5MneAJz9LzeXLoVfF2Taz6mMT3Re6X5cLnCPA6cK7Yv5ke14DJXjNQvJU",
  "key45": "2BBNnUXWzN5KBzZCad1A2HDc5KEakBCKgUA4x3YuLUvdEh1CHdiMnzgXXcrqkJXK1NFZ4AB9KLYG71W5JSBoBnpS"
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
