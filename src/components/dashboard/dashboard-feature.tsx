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
    "1cnGHoXXhPrh8Q52jjWCGPfjmxnYLC9vbafx4kxfa1P4uw9CEWpdA2esqFwcQvgyPqzqfaBtPjouQtutpK23bRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqZHr3wk3Kba97qz6vzwfKe4EXsz8D4Q1RkZ4BsLHeqQungjMnhw27j3rCxo6vyoESW6tnVzSm4SfCqmnMTrav6",
  "key1": "3XoSxKHkkbDGxGPprPBVwcn7CMFRUEWVaLbjJnP8obeyYUo86ZGCCgRkBFeXUDq2Zb2GicLfuDjKZCbRV7sGAkV1",
  "key2": "YGWH6LXYK9HiqGJRK7gtQjc9EXx9GgWdmUXTgBtUtvYee1UmoU6s5FD4RfarDwwHsBUNTFMv2j96itvtmsLHkvK",
  "key3": "bg1TxsSZiGHcZP12HQ5Cd5gw4Pch844wtN1MSQSnLG3Pku4cPWFH9K8aXY389rfgDtmaC5zVTENw3Ws8XQFSAjD",
  "key4": "48r5K7uCVL4vbdZA6Jd121DAcbfCu4kH4jfppN9xd4Uu1bjjDMu7JNwGRRJCttTgg5voC2gi2swaNmV1KUSgGW6n",
  "key5": "3ttAX9frosCxBPs9trbCNcotL77DPMBbGLcySG1fwKRTHyqFLcn1Mpb5bygJrr4txEm7iVmw2fWAQpaZ6SoxYqMc",
  "key6": "2YRwrLdNtuhdrGnSAyziAVgn75oD9PVCu4AShpmrKL9bu7skMb8mtbBu3RCQPZcWbWq4s3mujoyfZwvFvrGSbwM1",
  "key7": "73Cctu3cruejgCVgMQbRXUy5hdZFTax6Ef83fQnUbaCbRN8qvLZNfxT1woJW7g7KTukZY5bu2HvcvARGMSGmexg",
  "key8": "5EkXK5DpZFn3YKebN3MLuqeh4q1gu5VEuAHEYxFEaS6cQB7RpXPqWgQ6HbGDutyqu6oheXHDo8553d9i8EHHQXVm",
  "key9": "5fjMrJCA6qTFfXgkowWDredGajTdzbasHJs3vBXjNkRrdty4asQxFL5BqNUvihTymg47yBDJvZ6zYyoVdnJPmSHs",
  "key10": "5eqZgnuJjCdafR2iXFpoW6GpZ56WCdurQfQxm6dcKpcdzU1cEGqo1XEDE1Mf6tFmMXuaD2RcjseURDE8zZPgaHFx",
  "key11": "4nVKzPMaNztRJEdxEVgjkFT5kPKCaLzx1oFhzio2u3A3yHaE4xxtZ6AQERUfQGfk1n12LWhu5S9EYSo9cYpkXvDq",
  "key12": "WjsdUzsS6BiyjFm8vx5AndjyNSE6beni2zDAC1sVERqNWxPyxHPqXbfuHc7zBusuTxaFHewQZvDaGntBGc6q8PJ",
  "key13": "3CxNeMWMapZVxx8ANZk1EaonW1pfBFGezC3t7VBTmyZGRcMc2p5iFKUfCq44u8at1E7LUcg8VjXGVUth5tPBWH8j",
  "key14": "gvuLDboYjr86o32J2PsnaYMZuF2Lf7xHki7dxf4zB9n4PNDG4rRuam71Toer9LUu33LbNBRTxsR2UGcXkeweAUM",
  "key15": "X62hrNbpAcU3zVeC8ozaqivQY7rFY5HFaQvEEkz9aeNWrc5JEtS4LLd876da5nv8tDfkUGFK3wysR4oHBfnb8zK",
  "key16": "2pA2S2ZXHnozMAZ87PEEnAEw9qTRTqRLNDULwDj2Srs5eUfhPbc8HpR8bWqSDtyEdcpAWu68Ji4e5knnPBhzUBSV",
  "key17": "4iAnJrFwtQs6XFuxiVUqyZ1zJv3wrwB8da2unWYvpcmrMNaQ8ej33iWt4S5wHsnp8kEQnVZ97QYNZ4hJPohxvGNY",
  "key18": "ebkzkwsgBGG3Li26PPhYWoRcGuLvqptvyV2Wm2LkcJ9SBjj5SXcbhNGRTP5BsBDzeNW5gTSCFFwjLN73Pu1DabS",
  "key19": "B1wFCB4WZZSGxQn1UkukLMLesVLTYu3dbrQv8ErxV8PA7PM3iDksMpcoQrKDz8BjQA8VPx32brFxmdvco15BWEh",
  "key20": "Uui2kP4K6Kb2eAR56TUA9oha1ZGufSVgN6i3HsuMcYhDtXtsfpPLsdq2Gv8ozJ2dp33vNLeCPMpaxg1m6Uqr9dF",
  "key21": "3BuNajk9ULnsE1javERdCefhAhAXTq5u1aGpHJYrPT9mwjj4tVMmrjTEVyhRWMngZQ7sR6Y3MRknBykYpknWVBRT",
  "key22": "KRrFiij9Rr54eNMchpBUNDMN4SKUanpLyyvn6ijQL3mSDHZUzamhgR7fvjTeXbQafYT5P33Uhv2TTaGwBR5HvvV",
  "key23": "4qS8kGg1j6oeitwVbjUL6ECqEML8BTHNPgCQRUPkuKKEiN7x9wuhv6yXMdLTfwykdvtqwCS12FNS7cGVHf9TCa8K",
  "key24": "65irmsQ1o1gT26hNqdS2piZtvU4smKy71XrZPggns7Q2weuVF46vLzyRb3nLhhPbS3WAs5usHrfxVLMciJzYZqHV",
  "key25": "BpMZdBsPo8U7Y7NpyJBhXTvbnZEJS6gBpJFUUGBpJ7uNhad5GjqMNaq5zAmB7PFTDQfzJrTfWwFfqSL7tMwrvh4",
  "key26": "2ZF5Cg9svakjjdXuUKzby37rpMDQ5Me2BYWwuASj3AE6fxmegw5e9zRQGkYLkcjLvaxpNCGkkRs6H63mzfVSSPkn",
  "key27": "3Ti7zd21avuApNFEKqBtyHsbVXFvur6Tf8BbFvwLRaiUH74RFjD68xJL6T8wuPWXNcnqeacp6DTEaNLpgwPaa9Td",
  "key28": "vrQyc7Cs7SsRgjrCUAZE8iJgigN9ajq46CgojFeZ8iPgtzzJNeQ9sqA7bUUhbi2T8WF1tvqW1zEVPNN1hsGVhkt",
  "key29": "2qHqF7h9TW2xeGNJ2iA8scVsk95Fc5Z9qUVgY2uKiDJ8ofWjLfp9atXSW1CngjKdJfPQR8nhHiDg2itzodM3UrPX",
  "key30": "2wnuhxFuNxb2MRqhS9Lnv7qG6n5v2JTK1GLi676aNDfgrsZzr8iSoQt4cgdR9UhFt6A2vcE1todaUgaqwkQRU7s1",
  "key31": "p6FuJbyuDgCQRbbFMPQRoAHVE9DYzmewFFkr47tPEPMUAVdBMXS8sY6noMkUPvpeH8WMhKtuotCvPAAt6bMasBn",
  "key32": "48kkvrb6kyoQHa5Qa7TnCe1yK3jzcLMjMCbZ3ACi1wPjoczJwpxuStquE1DA1ZAEDBVRhg3bQGrRTTwZh5W26Z5n",
  "key33": "577CsywHqDv2JWg5k8MNmu9HCZtsjDp4s6s4tcjNpGwjBPiXH1npyBmJV46koTamsnHpPkZzEPfjCFS2C9cJryM7",
  "key34": "4Fn6oCChKjZUqu6Ge9wQWM29BVjDdF3zK4kzGKf46j8pbYqg3NLfxoFTzCSorNYgEBEztA9tuszvfFZsbmk2Ujeb",
  "key35": "3boji9D1baCJZxq6rvakpKArpfk9hjdk6jPXZPUtUvc9ZUfAYfquJ2sL4hSjpuJgABbAx3JkCpaby2Xp4jCxinRG",
  "key36": "mNjCEKLBmuTYqZP8YQC63xB4QXAQs6CBSUbd1mhUyyysQXv8GeZVxZDwca3Seh9TnTZhC2GeSE7mmu5aTweF2JP",
  "key37": "42wQ24sRqa73GLh1dahn78M9AvSiW6s6Rjm2Y9MphBhoSQrDuAk5fduv2kAk25sifoUvvFws2cFwN7XMeGrC9hUK",
  "key38": "5BAhs6Gwc2cQNFbrRfWfzG9Jcwr7gkYvVyzCdhEtsmWWGUNFTfQNH6xF9ASWL9ciCWZwXSHb1w29wWoMJhVGSLAS"
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
