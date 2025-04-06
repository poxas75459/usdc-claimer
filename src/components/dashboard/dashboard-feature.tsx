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
    "ZvhLPWTBDRWhaiRq1Zs3XaVAuiS7RwRM7LbX7nxqZVqVYFwqb8HK9pFp8UMd6V7HM72vYDK1tPfnQvuwg6AbgRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MYcFv6u5Ym21KGKAgutcVZvEpb9ga8WpuTgSo54RXd3BZfWJbhGVvZkTGSicDybErwN4f1ewM7y4pxJpB7viR1n",
  "key1": "21smea8icMwh95ZdfF7Rk5ayazggDGmXvVBZxumJvZYK8goAF3GQoi1CGxvNYabxgCiLe5H1NWddXXzPCWoXTbpZ",
  "key2": "YKK6nY1jozztgG6RLUyAC1YwzxitR7HaUE1czh6Bh8uPN42fky3R1o4ofR2fCXEAJbVrqhyMkqXz8fiQvLnr8Cs",
  "key3": "3CmG31Yrp1iCMhLSGjdvPDWL82ejAfV63F1y157d8sUDTqs5U9Yb5QisnhkUW55DcssTYTFKmmSeaCjoZs8AVhGY",
  "key4": "54oV2fvGwb3upbkCjF6c4gfp2zjmHkF62hfjuSqMs8bMRiVB1n8AgRs8VmxZ1cvREvaX9LWwVGohn1qUT74puvk2",
  "key5": "32u1xXpEJVeKJe3n95DiWHQ3Vpwq99T5fS53ue2T93xRptvpgctte8Coa1o97heKqpybq2UBb4mFbAJt7pRY2q5A",
  "key6": "4cV9rwUz454MQ1rPE9WoT1hNC7ybdwZMFShBEstMWKtRqBmvFbDPnC8xoAVgwvJgcDxHbb8Eipf4fz9dVBpsZe1K",
  "key7": "23f9TLC3iXqVBuNmVMd48vY9s65amkjAGwpVcxLcQ1cjmhgpsDUrP3LsR5ak4zkqnidz6QVK7cft9Gi1c6NZYBXi",
  "key8": "4rfFFM6o3bvfZb9ykkZgK4rg21peiFs1pPbxXh1Aqz7BADaop7PA2n5fzdWDh1PyNF8r34Z19YXAyKXnR6XKB3w5",
  "key9": "37k6aBPUoJuUWnWgFCi1TKHkLVBypefoKstuoA7H68DLHuNBn8UELHgKiTgNBC3nKCRwhCDZpZx4rVtEraCnXSxq",
  "key10": "413DauSNmbWoLQ7ynARx5mGh6YBXdKGrZKpUZFVW6r18KVMAiBshZJMWSj2He7EisUMkk9XcD4JAttnkKCPGeA7n",
  "key11": "4HtvYoLDP57CFQNU7GEoEsuAToVjfJyasficog2sqFxRyZD6KrjKFHaGF8rD1qfKWnMo7ciJbr55SJKe8TEzdCoy",
  "key12": "5ivFNmv4n3eBKwJ7TmWQ9Xepbzdmw8JLdCQJwZVnz4YUsSMhYSSz6zP41QTvWYsf2Z61HihvbbJ6o8x8352XVyDo",
  "key13": "5CxL4obK5PuDjdGHHitKiFw8pTyPWVZBaMX9LptBKcryufD2tQrxku1LFwqrDxagAKUWUZiHrF7FsbDoKbrzbYLv",
  "key14": "4ttoQiAUAWyx6xo3FPuahM8bRUpu9hV9gBHju9E97gQzvAN5yfrbs3LbNDnVuXoK9erhahXK8jKwA5c1JzWmBwoR",
  "key15": "34JiVPom62Qu3yz75Pn4VDbrA568Q6cRrGLTMJ2r6EeNVEXKRK5NVkkc8iPAyBmUmSdtt12pMjoJSkEnALsKWPLs",
  "key16": "3Q2k4Qh5qznb1RUzqdg5AiJPsNGD7fotCvitthNnbN2xNpMQt97W5pABFPC84TK383ZVGw8vKnwhnvjfkCjvqdZN",
  "key17": "4FovGgfg5HEcYux8LQEqvKJCJL8FmpVBSJwKaNtpmNYACsLgEh8PqLWAohcjxNE7hVg7xRZ5qC3ZrGeVG286upRv",
  "key18": "4keNWFyfEjU4v4uoak3rwyKHoLFcmtTwRpm5P8zhcSfovFjbDDbFfgevYowqjFByHi7sdwceKCqsXvBLxy4d4aSW",
  "key19": "2usnzazp5dL4rbpNQT9DCY7Bb9LBxW2sfyQ4jP1PpHtJLqx2eyiFTe7uUrGhfKkifZvSNGfxkqxbAHTie6Gq1oL6",
  "key20": "5mD5BvtBdZnQwc9rMkYgQ55yid5ufmggvJALkJ4HomKtKiaP4s5sQsLsVhDjcaX8Q9uonXoJMeSw7KShRJVcvpcm",
  "key21": "5ZWDn1B5xEcdAc42S1PxUQTPvjWpd2yT52AAYVhW3HrZTU3gw6Ao1Ycxox5d3916SRB8wyxK8pagjCqeHKpcJL1x",
  "key22": "2KgzTXQabXVsqajkehXzWMj55EnaSZATEPs17xYcd2rwc8oeJZdDznjt9dEN1LJC6agZS3rbNjK4jzPX2yUJRtfi",
  "key23": "3b2wv35Jc4P7xRzzhWNFKQGUCgsGLTZsy9M6nZg2PuPjeyeqhsz1TzLtPw1zDPJAVBpWFS25TZtMmTyvA992oJSv",
  "key24": "bnVkYmmcRgoabWShmff8wn4QnYWKazzbFZgwPuoRjVb4Ebb5MK9nYWbVR8v5UzseqyPY6DzzYsK714LGhJh8oVP",
  "key25": "4qt4ULX8j1sH5mEkx86puwR4yq3cQSUtHoWWyWeVBYDVCnVYMmZtWbbZXpJc2QFL5Cw96BXe6segC7kVq827wH9w",
  "key26": "2JBpeb3JXYaL52PNpj4GnwUpCcmcNTRkKRBZtfY5yPtBNKaciczGwgcFzZLTbCNKtvQwPhsha6RWXCtuYj64tDgJ",
  "key27": "2sfSqe5ywjQyB6DeTLnjhpSUrpassMHcMMnjuFgrigmnXArFqPXbj4hAhhZUGLZtpBLDZLPsDfvfzQ3uWsNwAAiN",
  "key28": "7YVi9PmgvA9vSF1vFw8akvxD89mQYJkrzjDVebb2uYasF35RUuDUVsyyZe6yGvjESsRpG1buALwzcqeyYvi2acw",
  "key29": "ro4HAZyf1RokpgCgAXxYHG4jdjmKdkgLiw6aq4X6ppPHRNvph45JF4LFkywPz17gY1UcZ6iVcvqT9TFWwGSVRhJ",
  "key30": "5Ku4JSbnkXD3Q43yA1yeMS2217zrZqzxqCoac5RHGS7CjKgofhyVAqXssjuHacSqR1CLFuNQY5ZsC7FoMTjC2nhz",
  "key31": "45BJiba3VywCnkArpaAh62Mj7FP74YFfiNvPj56fG4R89BT2qwGgm1XhHXFRCTUBnBH2kgj3wrnMVwC3hzAiQsbF",
  "key32": "CHPCtZMDf7XsmPXETzgBHFhUDp1ZtYcxFVFHBEDBoYGr3cJYoX8Qwdtei4gEoGjqCbLByN3yKT7EuWiwBWRHsQM",
  "key33": "5hRmu8TyZsW3qm7vsVja6sZLqwxVbC12tfJRgdiWrCCgK4hgRqeQXM7QJzqmyXFJh4GWwSu6RWGAdrn9d2RrESVH",
  "key34": "2TH5fVPWRrP5EC3cHrfWunQFrY5xfQx2TZfEaENTnPPTKsiKhBrQ4qqbfNk7RXqSnzetczt7A6eaEPAvw2eKGntu",
  "key35": "3mDo1VUquxUkhD9qmU5KQiubtGgcDUM6RK9se4puLCQf8grkAcVsAggMbyHDHPHAJZcxCcJZapeGzAeUTpnfmVnD",
  "key36": "3ZRQPBqCqgd8wW4Bv8A6NDfniGY5j4KRU8R3EwkVGvXpXh9MdEq5ps3Xvf4XfLTHR3kdNNJgAkj45nxpumMS3Crj",
  "key37": "2BSZ8zdsBA3cjmrg1NornygE56DbQn5kwjYjoadnB6bwEAzKevWprWBYJ1HNuv4uHypmpmnfwCLCicKWzHe9p5mz",
  "key38": "65HgkDSB5kQGNT9ANddK49uGvmjGH8bf5wa8NuJvtga8JerpdfKiZ6YQYWqRDMTN2iZzSAPkUW5ecWHG5mqsVjVd",
  "key39": "4cZtSCEPvyj8FksdMGNse2f2J59qAnCCthDSc2R6msjs6aUSoVQtUqRAkMMuzCDowsxRnXRNUemvqS2dGfFfjixj",
  "key40": "ostks4SQqhiSwk8e6AP2PxtrUGFJipEysc22ZAQ5xx71JNoChTHArCrai19TSUfkKZwGAx8eCDBJBb1cDbt2QTr",
  "key41": "4FLKyuZWg3p1YzTKTmKNGewhkURQSb23hKTCQoVLaGEETnNu5GrtqNGVLiDo6bihAajo4c8jZf5kPfyh5zFBNdaA",
  "key42": "56XM2CR3TWvLxwToTzi5pec12aom5Qb1q615P9jzvcyetm7CG3gAFFKLWTFigfZq6SfppihfZwZseX5ML9NGDcyK",
  "key43": "5ds8nj3X9EYdPkfse7qnhsFUmoS87vxRRcqF4NZ2psbigTyKuEeH75xXjM13r7ubRqkH2fFjZZpFubBY7veAiddB",
  "key44": "5A374DWRY2Gnc3NNzPQr9CdiDJrUqz8FzHAmmsQGZURZayciu9cxBfc4FegAGXhwUMRubZAPBTwpyJXZJPoNxkgg",
  "key45": "61MShaToLcHH7VpCfpKh3PcehcLkrZ5d5LHXC4jiGzpGfQkXSDYXn3mBX47bpTNwfajuFwmfksqeggPdqXjuRnDR",
  "key46": "2EnydN7dQKCpVL7WaCsGiEopezpN458vwRKCNzbBRUBsMi4vGezVY3xBP4ZK4BmiPqmTLTsKpmCSkCWE2FyuncBs",
  "key47": "3xghJe7HFtoBriicMj9VkroHpKA7bicea7mqvqDBcb59BYcEQpt4GagRS5URtLAP7YduDH7SEKPMrG8AQ5Jxpn1S",
  "key48": "7FWvZ2fFi2faqcwLuixvLmEGaUZMphY5dADDYziWrJ7UwovJcd61mfXu6DR7mWCa3cvMuv5FB2Hv3C5JwPAPhUf",
  "key49": "3xmMqSEgx8x4ZTboD6mXsQNQnWuDhtPEcDk7axUDVhnDNWrUExA3y144meneQq4U49aFePmfuNGisa4Bm7baVEjq"
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
