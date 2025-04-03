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
    "4NYumHX7agJFtxc895Lf6xuKSdGbk5nrNPGgw3qNLqsnXmgzJ6yx13CBuesLPo7opeVAxNpbjVbDGjBJ7NtgsX8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t37FbaV4DguwYaSUuZWdZc2LeU35szLi3yusyDzwGeaBEf1Ew1wvKvr44cSJFmwraheCxnW8HXnRtUfWmgCx3ww",
  "key1": "3vQmXaAD9XQTkA4rEjBdoSXkMbHEaAoxT6SGWkUp4DLU5HSU1zomxyct2XKDuNF79CPdAPHLQ1W7wCGXASVfcfd7",
  "key2": "5BoCK6ccFB6GkdamGfjjiv6RNfxidxAPjU6PPbpbG3FVrtW8LGvt5yqMHURG86ZFzgPQnEzbiVuGfyM8ou2eqN8m",
  "key3": "5YXuKRLv3hzvcxL48mYPghGyJtQ5M7g8srMc4tSBwtQ9N3BEd8zoD1NMyLNfNdXU5b4VWoopsXrfrvMeT9jW7BPn",
  "key4": "2iCg7My1hysm6BqyGVBX11qKRkHMLfeZfGndki31dWkfZzV7NLnZ4RdebLjLwmcuvtoXLgz7JYosGgCwhUDZn8Lf",
  "key5": "9Afy5ZgE4LYbNzCQCg6GFw69hieqpkSLqH2dTYjpQ4pKFBK7miQ2TdvYAzAcyFZYYVnpeYqX21KE5u1xymqd331",
  "key6": "4a4v7yrbKsVc5dh8S3eMH82ZWFent3DT7zRQ1QggbCmkidDbgbK1EGgMjMAn6KiXw7RSfAdxLobj3HAT44bWpnLz",
  "key7": "Nmhx9xrTm8JvHKtbJpscxaah7EaxKQehJc91WgVdYayFHhssc9xNbusvsSnxg77Co7ahVFM3QzUL9rzqXk7P8yT",
  "key8": "4WMPM1k7SxqbHQRZzvPQ3LE8Gubrw47KoyJ5bJSMgyzTFSia2v6vbw4CUxuv2r8Aj1ZJ42ex4cQ12ZbZL8JeUjA9",
  "key9": "5nCUWdk6S6LwxfvdJz9c9c8Pzq6NkFfpwdZDqeuiYzhSj9fV5kiP7isi2T2yXbzY5wtWa6nMMZpLxbZ4RJh7mR8g",
  "key10": "Ytux2TNwpBa7F2yFEh9KoWPtj4MhJhL5oVsEZqvDSEAxvxMy4HBDTC7wK8DHdV1k6FJravPH795HUaQEHf2tBtB",
  "key11": "2DwZzAyaYdUyFU1pny7CCHZJNhYWMSBQQ7nzJtEj7ezHQis4eBtbskzK37SQVPMTFc2gZvCB6SZ7rodHJ9t6M9Ys",
  "key12": "5QZhyTebzmmcwzzQ92721Lc7Q3chEX6Syk5LtGqLUKNjHcTdecUpWCXMi5q7yC5uKhKFARihxKprmRxbcYYWxUfD",
  "key13": "4WZcpMLjyAcSHWZvwV3qnJH8hACnPEpKsWPVWb7qGw4gFTnvZbU823yv9w5xEFuQ1o87Cyh2ZHhRzLSkRzLsMRAz",
  "key14": "LC9GU4j7VoGi2zyYDyeuuosddhsbS1x5kSURGQaanDhqnC8fLDKs2iEqgATXHMDyc9Qbe8D7RSsyxowF59X6oky",
  "key15": "2oFy62e2kdcDocUFcDDae27bE8bEfJibqrSedDLcWc6EpJ7AeaktEM3yyts8v48WPYLfnKwFecBSGBFHLjtfu7vR",
  "key16": "3JTaEFHcyrrE9VMwpMJ4y99H8hyBnnQw1EBkxKYmwNmPJrQQ1vZiU8mxcHYdTC9noCWt7Fno6uw4PVXNSdf5VyVL",
  "key17": "5taFwohbjtBpasxLHUPqR4rQXMYW5L2BuLFEb5TcW27uxRYJBfNfNWVPFrLw4wVBWwSGJeBkKaZUYVbxrQeEbAQ1",
  "key18": "2WGzEHWezZAF6FvyfRDdjQuXWPTU6SVKcfxG8PzhMaTX8Qf9Dce7hq2Ja9LkjwA2zPfSS6HWUQQJkuYbh9LWaULF",
  "key19": "5sQmsrStqUZ5yqL2QPzqYKpwFGunbrPUr9NqFqz5Ty1SH7bQbFwcoVXZ1tTgbtMeXGKuUg1xVGUCRrP5RsmRqW5W",
  "key20": "4c4ajb285SdZf4VCjr4DKXxQrGG24WZV9r1K8SBXqG46db8Ks7jhtWzDNWuUZ8TBBcC6uaA2quPdLbkWVamydE9R",
  "key21": "2jcZnRroHEVTarTr66C7h68qu5RmnrHyeQQjkNbdbGxSzwWaNiFiy4uBATKzDHeb5QdDrKmdct7a98wup9k9NTRx",
  "key22": "2C7XY1UHhCvx6khPA25UuyWKu4wJ6iCqDj5ajBWnC258t5ByQ7UEcY7t5mdxdqUW1ogmsQvX9EKJ3ky2sRX9LbJh",
  "key23": "3fkhuMMZjZKyoPScxMAzpxK74NeVuGN9pQQopd2hweh5PgSCjV53bubP72sEgQ94juxDaSqB7XrbDKPbjMwWE4r9",
  "key24": "5ZHpuzCguBxyGgzgAc9usX7EPLoHUfSeZRikJahpM6QfLZ8NA5P9M2a2H6YGnTuNEf8VUGGx8cLVVSQmM24YU9fj",
  "key25": "5pV2XkPDBcHpR5xB4feJGo893Z9P1iY2v6sgLhUfEkYcD8mQvgHN4VMokn4UavWcUCNv7z55FvnmRbz94FuBJ54V",
  "key26": "5AgRrHHmyrZfcg9AqUsoVPtjUR4LM93NbMqHNxfZNz63rV9yx6p1XKUKKKWxbbcoQm7YFHfMJfCRhBeUXEKJAhqT",
  "key27": "5pFwvLAEPoDamGr49DJnWmDianWd7pJEFM6kX8CmkMKM1y6mVrCPL4MyYxaAnkr1eUFW3bLWBc2eR5Si2PwGbDmJ",
  "key28": "3WWiCmPib3h4YTCvurT8mw6SmeUoauH9Ay7atwQvAudy5qu3soLWx2FyfXYp2xdy8VpVQhH6dnypCG3KBck1dQEc",
  "key29": "eMeXejZfwQcr5GrQ59UbB6cBk2Q1pctpLmkK952cLcAj6aQmC21KEWzLZTBCtgLKwprrGowzKDBrLf2dkHJLMWR",
  "key30": "VkKG54TgPVSNb4YarMZd7YXamwKfW8HEur8kbcicAQTBc7k4mR4m2oRvqLpizQ8i53tB9TAir4isjN2hXoXTexD",
  "key31": "4Di7ptxaC1Zsuai3fZPiuQ3x5xaUU1soWnD6y5QVRh6nCtgvgmj41mwXbRcAV9CQX3rxw3WosvXydTngysp8Qk6e",
  "key32": "2b8M8uPLA9Xd8ZVahF7GwAdL4RyX4v5BZBQarzrz1PD9hLYEUS5o9YHA3EtaS5PAqaN2CTQreMBkCT6W43vRsF7o",
  "key33": "4CG4qWqJpKnjDTQEykHbMuNfCa5fg4fE4w8kb2rJ2MHjMRu8TQtm3A1knPpzXnsiTrvbQkAdrNnxzDdcLhSBkwRR",
  "key34": "3mTQ5JNLbdW9XVxx9YHnPXqFYqRy9C2pPDhtyLoN2mJ6XRsjuCVn2SUJ3MoLYtZud773mwygjN2xrX6mZngpCATb",
  "key35": "37dEVqe8vq3aPktFYunYRR2bFqHi7toPtSKezm8ek864a5dypArF4JPvVRFuNSj8HDtADZxduCBLkesidGRDahqv",
  "key36": "1pBx8tdMZ3gdxJ2A7HbrMf1xXtf2by17BmTV7kPy7i8K3JJZogzWTXpMy93pJXKrb7oerCCu2MbsnUvGxYKnGgE",
  "key37": "3vagwZTt8JyEYodF5YfKjSU9iFYNcYCoGArSo5cH74SB3cYRToLpKEsnwGvCidFG6J9tFibp4AaVxttt7dGQ4LDz",
  "key38": "AvsGe2iKxJHAYE1PbGGaTMAt5qsCfgotEF27F5QLNgAmDqtt4K8wqEVaVLnKpno7c3pQMMz9WNSpgZpQ4hzTQLC",
  "key39": "4jasu9CrsgbFZLydsna9RauEGN1jz1Y9FPpNRQqvryivC6UFoiagE9UZiMiGeNahLKHAs5uHXnpiFMcd6BwBaDX1"
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
