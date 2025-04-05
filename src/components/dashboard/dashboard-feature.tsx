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
    "J2HT44e1q6UaKCfrwaB3ZoVfTCzpgv1aUEsNmXuuTnGMPGNajQUXM2qen1CGnvUngQWMRjYUD61YZMGuVLgS3qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HqR17R9EnxK7udoRnnviVJpvr5KaQp3J4x2xff8GNoCrr2pfQZhPkLWCi871BBKvaSrJhP8thq4v9VFrKGKhSmw",
  "key1": "2FeqLypPCTY7TRNKpP4wdEp7QfAm6zSBoB6CwEikKeiWiLm6tztZmEJGhMgVNwcZzDeYk1VgQQR4hkmzckQCXLPP",
  "key2": "4qYAkhuvJpNRzw8UMhxn15z1dgVdaDZ5oJD7kvG7h7vGegouvmdSE9kHt8AtPc9vah3ivSCKF4MLPxQCRT7cmFTy",
  "key3": "z1uFoRrwpA4dWFSBHCUNMVEAgJMEchFcKgVHAmsp2P1qbaQkZp4oYtA1vKvnmhobwXcmXKzBx2hqh4e66DVTMRN",
  "key4": "2ASkdY3LYeQ1nJzKkeK6tPLgT9DcrQn5fm23td19V4XyJgMZf2KdQSVhP3BJmXyUu2LSAZCEh4nYZgPqyuBLsvV5",
  "key5": "3MvTufCJ6w3w1MJ6nA3qaKKe3mGpPQXtKNupsievtvMm74JJgKTaE8ersGAzu52Nn14HxXndDAWnWfaCLik6eH9u",
  "key6": "3CsygXHeXeYi8EhdF1a7nSpFiALvgApAjctPS5sMXiaqCSiPU3hNvdDnrBrWsUmwfms7yuiCDXbKiwiumWnq214v",
  "key7": "4ZJD8qisHRT87cVYRGumuZwUK14Mhf2NLQtxpi6dRTnJbPxZgmrtRKrnNx4jSq9CDzrVstegpMv2ULuUnyv39PFb",
  "key8": "Ronydmv2NvS6awXvTxL7p2MRKwmUccPMiQZX4MaNmH1hXHSwhymSbypWJBD3bYwHYjPNEXAawEdskaT6imxJQjS",
  "key9": "E9rHiQeGih54pLDrGeyYNGrp9wJJPJPa9agyNTFsG8UuXdofCmMqqQzjYLNQwq63gZnxnpZjXsdvQgCVn3P4DTj",
  "key10": "4SHxzo9JZt3xzbVEsYFyLg3WHZrZ57AuNkJ4FrYjjVnZarWf7FgxJa23kFZ135i6NfERtLwru6TpdxEdNCnogjxo",
  "key11": "5VVfhsfr2Gsx6GpTBVFmKyyH1pLCyuWf1hVnLB6q2umZkhaaXFHhwkZcxuzYRxTLwgq1gUTgYgNem7dJcYQ98A9D",
  "key12": "4q7FPcEai5rKkSK3ruREXcKx2VPMRRwTuj6dXTiSSuFuNFRyqeWwGmBL6EPNp2YsKQZ6m6yynbVimT3yD6C3inMt",
  "key13": "2Y543Xq6DfywhQ6hgSNkc7rNuuxbzR8GVXKnYVZJdsU8ZhnuJjC9YwhbRYbk3aFtrAoqjcRWkAnhMoriCLVi6G4c",
  "key14": "61MerZFJqVo5UmVTN728nSLBNCoHkr5qRt16y6zGjHtDADjPkvUyeodDUBHj2nV5Z7nSPvy8zbwUei2QkhsWKN5C",
  "key15": "5jof3co1VtyJydTpxmNewFxTPePYnAoYRg5fMxeDDJDUV5yF3GU8PYBWqkU48b9eCGeR4FV2YR1aEnMkGup3cNDy",
  "key16": "rMqsyTurcNuyV4WyGCGkWkaRTZJEBzz8kqZMCZ9DeMuMbVFYNn2Q61nN5za7kLdwUsUpqRGuS8PN5WXRAHcpEu1",
  "key17": "k264awDdjqCqFE7paNbug1rBod8Pqdr9GCBHmPkzgbRYcM1HKv5PZMTq1szCBSajDA2pcFhYRdnR9KteMMzQ8z5",
  "key18": "KD9ncMSVnUc1DreZhu2iVH7Dzc4GscP2k3oMWxg75ntFWfMxV2Ly6oomoo2VoWLphFXKh8o5znTrQ2Wg2DQzS7S",
  "key19": "5nVzsXppaEbechU74CYQ5WBJvWyawqxBbbYanEGPqSjnhCTf9UoAzvtJdvSj1vRMLzggqnSZt3HFZBP7PGWzPak6",
  "key20": "2R4TC5Co4L7tyXqmGdN6oPDBkCzwSk3zAtrWaNYWW8qveLiVxMETRsuKgzQW3FeVc8jETqoaptqL8WmVF7WL1ZFY",
  "key21": "WiAQEZM7sWXAL6ueS2VLAP89Hfffwa9626S9ALxx1BGs1sinqAj4PShv6Tr2dje7dU4bCohJkVLsWVMaXGyUiEd",
  "key22": "2JNbNkneEronfL5bWL6oGDXRDtsom3stsSVDFw4v2Be5JP7zhcz9JfGX3jqVRrs4xWDowywz9a4ZFDCLxiHHwtmC",
  "key23": "2GT5EUdkXSZDHxKCHfp1uivgHvzWjnXaKK8N32SZbydMPxAxzmrjA2LLC6eZzph4niFDbH74kGoEjmZdBQgnjG2z",
  "key24": "3Gg7x3aHoXK7pq6HJYxeYrvmQpWUeHzfRw9ptrpFi7zxwcgTau8UjnJp7GB3jWDLEGoPnc9ypEcYeWvEsUCnKtJi",
  "key25": "ze5JcuLp3xojPoY7AFD227BzRWWJ943Yt7ke7jEb5dFDkZGPpAFYxWAx65QxMsLrtQax7drumU9n85CSQP9NNMr",
  "key26": "NAZM5hUptJU7bp7QLKyoH12mXeiqETu4Q3PFkivdJN2CksYTho81XRhRwRKhqayHP2cYYrCHC9JXtKPqu77NRRw",
  "key27": "qoZhwQkq61VQM6ArbVf97Y9riKFETCQJC5vtWNJuTEx6adx4gPXKzUNFzLBZXwKy2qqSeN5bAufwT2ezYHWqatq",
  "key28": "4bV78oTaii5Vyf1JAYVMu3psUbwipbbrcr5gMLACQTgxp9AvxNnbbqVThNyKLvNxMCZjTy1vQEA4wFkx2UcaKmhF",
  "key29": "59JjyDw4xV9bv7EuHiEFWwUJnQGBxTVNK2Ej3fpZsWYeS6jx5vgKdqzNVn7ZFBJwo5CcHmTTDEc2JpCcwwPzjsSj",
  "key30": "25ZAYVvhsqkrzP8GRLqC9Fs8ecXbk8XxH6JCNPzTNaCfggEgvMzHfLCe9MnYq62q4xWCutJsTpi5Ny5DDebTTfvP",
  "key31": "3emknkotvznD7Z4NfQq34Kc5hYsCJySo4mLGNkR34uz4V4Qy168iywtwNZiAo3PydB3y3MVBW7dZz6ypj1JAuLWS",
  "key32": "3gPw4spHAsEJvoPTevYS1ezGXFRqTovp6wxZeXosV6P8MN6LsE1Ngy5cXN4qEYtUHoTvPw9GS22vM4jNN5a5cPqR",
  "key33": "2FvWxtNhZxLUZwnr8gSB2c1aVHhXuGWKJPHeq2u4bYfEGoBstnvdonovho5WL1E6xLdSzk9DTtjkwKWt8oSWXMmh",
  "key34": "SAMo7WXqF1ASHJDxKGWGqCHc4MTVNaccLPKPMGDHrG54UCqCW7WFJNLr2Z7b5XmHPQ2uo43vAdJHQHLdzm3s6zx",
  "key35": "YBFHJ6EgA8BUzYZSwVGVK26X67jYZptCYGhE6E7mhCHW5578YxgScma1JnBVsPGh2zapJ1QD1R9DhiYuq2rotah",
  "key36": "5kSaNTSu43pJqrhfRJLDYTcLRPt3AF6hp3ooTaFKw83ZAAV8QXhPebR7pAH1YBTR32PiMcHF1DpcYj5WUm71KS3R",
  "key37": "GyoSDCC26tzTgyWqtcNPyi1PegSADsvo2sXHcCDkHaNdM9zBTYFk91uFXsTzsSbkoiqwNBrk5r9ZohSt6J4d8PC"
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
