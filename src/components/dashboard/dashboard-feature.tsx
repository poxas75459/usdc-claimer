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
    "3Q8oeF7sc48ynrg1JicEkz8FRkVzQisAVgCsM8fusAekXCmjKtVFrU4c2Gp7P9tn2YYDKTG23wJG6PZsduSeTFQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FYvcYPsAKfpFNQWfQVD1ePK2AmsbZacwH4FioQoSwCXYcBRHWFrapJ1adxH3VsHyCU59Ev4KpAtn6ZTsxAoqB5y",
  "key1": "2XekNCm9BzMDHTE4LwFTrup7RXsU7p85TnxMggD2eGknHAzJJzCfrUT8f2mYL7DXbRkqH6vzGtfj4on23FRt95Lz",
  "key2": "2xQhCQL5w8yM3xvtq32nfLnz7Feku496NKuxdFS2hGP9C5A5Nk7WJ6wojvmjeVvsNQuyvdQ1pRdNiePMZRqAYGXq",
  "key3": "3xDJC5VgBvrLR3kSvDtMw2Ycpt4NGsdVmWo4nqKmeRRakuBXYv3ZSLotW6BJ5DVm9tJgUVyYxsSTCh8NWUfRfWkH",
  "key4": "2U8s1voybFUnpxDkNtYxbFbtz4XJy4eGsWcixCCffRv1WxH9hqg51VNUUCWRckR9RFN5fKzefzRAdWR868nFH7Hy",
  "key5": "2664PfQ35Nz4jaihdtNTFLVT1n67UzE9rvyjq2sAtMvLGLYbisdPhvq1Q48Zz4BS1DsK15BGEJrqhXVLj86T6MaJ",
  "key6": "dbDj6tEsrx3Ru4ssUVWA8jb2pa1NTpAEZ3M91EsYtimh3fRuriWbnG7UHLFHDygnVGid82yiX4EEeu7e9oQ4QQc",
  "key7": "5pqw3UheaE1tmu9yX7nZxduFXsHLtCAp8qoZCUsWZGCsiiDELGujeRJhVVtxs4pioGYu1vL2FUu1XxXXo9Pv2Gsv",
  "key8": "3XXbwP33zSCDQmzWweaKLxJc5cWzataCWXJcFLuwTcKKKVjvhxHR13FeeKpZ5JXiKLqzWQeQt2jZEmaMH1UfSCGw",
  "key9": "42MtFkfgD5QRdUXYzMisGGpkGzL966o3c2J2izzUEJn2gkhfg47UdnNcACa9gfWgpmeHVTx19nTqp3wpWNtFFvZL",
  "key10": "2BcVvxWwnWULbb1D6vo6V23fMfYDtafr292Tf1NhFgETaNjiyi8tHA3HGtorD9qyZyKW8heCZGaBY9R7cDAzkF9x",
  "key11": "4N1zy4w39yz2d7qpbYojhML43UwVALu1k6ZSCfA62xYUgoCdP6zeT1gxKXVyGE95TMq1xdmvkTRdYWY1d8yRhSGh",
  "key12": "3Mi3RLdW2k6botuR7824UzAz5m5ELNrPB2vmaRLXBKQ3NQv2NdW9nPDJVemBqWwgR2t1TRp9JsDY4smF3tnNjKB3",
  "key13": "49Ag3A4QxKHG1JTxY4FvaL3UMEx4vVUGgjWGwowXL9sTTJEkFyRrEQTKGo5fVdiseK4VQMh7UZgeFARF4RCrzTzh",
  "key14": "UMJnhgJQbMV5aotDgvqyWsnCexj5xoc7tcsHXNV17XnPoaSvYpxhGKju8pRoNbbobuQ4PoHjM4V8CiNJwDR1kwk",
  "key15": "NkJsKUwYTCUhKcnzSQJubD5XCymZDZ7Zkstdo9kZp5qMALMo5SRpkCPD61c8TG2vHSvbBStvVRavfsjFCkgsSu7",
  "key16": "xyGEwePqGiY4Dbaqpk2yJRbQURMLtGuSck2PQF1ryyHG58u9kjWdpssv8KudPzsvSUELrdYQwkuX85vK5hJKiyd",
  "key17": "2rG3zewJPvHK7Nu3v5wy6FH1cv1Y7wX2ED9eorgUda7ie8AW27CsA1TVJKvUdnoF3uSY3B2Cw5WfLP46w4nb3PRZ",
  "key18": "u5cr17FeWjTnDcB2Rq8vYZcorEG53nyPXfgXRmZcWyLFhz1YgwiodaAnxpGMPiUpseZExA5zKDb6eCLvnApPRJj",
  "key19": "2eNajKAstXfyfCjLSEqeoDq6F4U9bVVWYRT7mY4RbWfBruWJKDytRLasm3Qqb5siDNPcWYehC52Ey6gUAS3gcBUx",
  "key20": "4iWYHc5y2hpoKt18zeZT9hS6DyJ4quCJzTDq3LSbig3SFauXiZGQzbWs8UxkpBzyjc8yfJ4JdYzReBBvRifTiHQ2",
  "key21": "3KJ4nrQGLsEGsiXx2RyvJkYyzSesbwkQJpUStUjKNCECod9mLB7y6VS9JUpbMzn7vaTfuRjpZHPHku8c9cHWHSvz",
  "key22": "tg3rn4AxfYTnYndrDctghPD1ftTzK6P3gRFUTRxKXrJkTCZkDLPsPPD3HGF9iXDNswMsc5dhkeQ9hVo75CxTK3P",
  "key23": "4tvwFQe2xoJDJKQGzFTwJrpWsfMRck3qdFgetMYUSNhrkcoX3sfDHQTk1YQqSsbsDyg9cmKQHpVzENcTSc9TeG4c",
  "key24": "2pdiLsMxP24tXQBnRqnx87BJQo2gu3ysFGRkmGuH5KSQuyy9k4Bd877LwBxNibBaSPVX1UWmWJjBdHhRqwGcYbUd",
  "key25": "5apb5n6w6xG3h1qXTefssuoiFKgeV1Wa7QR8MDx6ahRxYPCYwiV5DCncyi5CBUt3DZt636oxDyai1AkjUGq71aib",
  "key26": "umm1oyoBcBEMpKaHETv1r2KkXRhnAuJitk6gnzcDNw8EDho3c7Ci6xDikRRTjdXCZWZwUNcAYr9B9JSBJdLE7aF",
  "key27": "39cac8g2BFiWtqM7qbkbEb6UsXgU8H2wA5SFQEGehqBm6gsw88iwNUAsu89mwR7eVAosqGwEqvDHpYA2yv1j9RwE",
  "key28": "2DoWKXC4fZ8HqvdDdQWH7xsoUsYbSDK5t1UwUG3mjEiNPKmwnff7vnCyqqDMvj5BXSMAKbagfYzNHQc7nBG6UJgm",
  "key29": "mZwG7vYDinp84oYpTvWZBXBtLf29SPVwCQLxLvqrag2is1NcYyUGE3MeQcuWReTPynqTAAoYwLhAGvscbwjuSHK",
  "key30": "642e3fN3p9XmpBEHprLMUgvkNZAWQFZLDKEroFEVetxEpYc2g7rYAf9xbtGZuyiciTSwLJbHCb9QKRozMRHmkz8S",
  "key31": "5Ucptbiu3rc5CrKQFbtpEFkS97ne4Go63644zLMDxKiCoWJCbS6pnfZ6FizSBnSXAQsggcsZZRG87t5YX2hMSSsR",
  "key32": "38Qm5YBThDYdbxzjWCKvf2AodFwC3nXVQjhyEqvwpkoGhjJ8dh9HX3F1Dne9ywMgB7tsXrpAr2BL9aiXaDkyYqNC",
  "key33": "2apStPUJUQ1oUPgHL6dXtRHAWhSp52xzvKjTStqgFNuKnAXHQrGcsyiFDhdhcFWKZsEkzfCRnFv1AfC2bhjB5DJa",
  "key34": "38iGGVFc4UTVfUjkhCKzmuCg4VZ5zAEquWgYcacpHH3ucRc7n3n4Cvya27MfMroQB7KFn2ERArqbEC4Hji95Q7Cr",
  "key35": "nS7F63VQg4rHdtFDLZRUKFQXVoDPrrcoFK2czaw13o2jUBx5oGSKXwArU8EheaPUofm3KVjhQTRNaRVgihz8yU9",
  "key36": "2UsdczQrTkv3kAdjA78tPfmebnX7fkzzysEjWimMxRMaR1TjSFbzCXCANtvguwZSmrgqFVapFsnXWX2wbUxJuqKg",
  "key37": "UdoA53uyMKedvDyzUfB5Z2UT3bwHDZt8GX9EAic4428fucdQ3rKy3d2hmSe8gnCnr4FZ7Co6tn69nkbcGh63CEU",
  "key38": "2GoJhDQE1hWUkLoR9fzjKVhykZ2gs23nESCNCHnfUBfmpMQcYJqY3hkNAffqzZbBmL3gJnEAhnvCP18KeVp5w8NX",
  "key39": "2HtocyVuj5hs5AjHQtNx52F3NT42awSeaAvj2u8i7yZKkFhrvV8Furg8U8ka6mJgvpdQLB82hpqcosqnqcGTtXAu",
  "key40": "58dQJZTdv742z2a8p3wjtATFPkvDkfqEC8URxuo6dVC4BpD6WwF5L5gGXQT3FB2ypL2g1A3AXvQLpAkZ9hzbZPeB"
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
