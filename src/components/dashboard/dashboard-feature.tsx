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
    "5V5qACe8mojC3ieRvhcR9ANaqKXcUkhgG3rPHuzppmfE783tYKhRabxQMScuZqBT7AtNNuqwy4r9sJiHBEUP4Kkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XxiYvbSHXoPmHdsWJZx8TWrn4BBcw5L5PSorqfd3eZMfxxV2DVi9JDpxiMKcmDqSLwjj5sKu2DDMZyJefL7Rbu",
  "key1": "2yQ9ZmyK3GuNL13rR2JSUW1sJWN3cUr6bdzW3TC93abRP6cS6LbfP1wR81a8d8VNJXYwD5N5Gm5CaJR7EfyC8gQF",
  "key2": "4R9xFXyPLntaheMGj4UfiZxRDyBHhA7Cs2XWuiQusmzDBqmiAXbtyXRUXg1EbkikC3bZoiNQ8gbPXegLHekRrch8",
  "key3": "2LDjuToqFgcwjDGpWgHi7sKLxNZwoWtezHxjTcrj8CndnT2jRcR6qWBKqf1pzDrdDxAMfw6BwHotinFKa3ZQEgT8",
  "key4": "5wFqkSqBLREkTPqAuDU3diKgd1wJQMfAqG4GZ9TPs3Ek5yVajipFNTRa7cnjbUMPdAVWTzVZPJPgXYW4Mb2bEMpt",
  "key5": "5Ykm6YrthEyqg5hHtm3KhQPLPdmnFTKZNd5XKwjJwDsiX6AHt5gTrv5pSywadFi9fu9xsJ4dUsyQLW8H56YMDQrD",
  "key6": "zD1YeSNzGsiUpdPvjbwhrqAvotxaKXjTL2iDM3G3zUKRNGqMi6iL3CTSU5XgJiM3xEXi6qAH47nxZk9p69pv4NT",
  "key7": "5nGYmaxgr4eanS1TFjoibBcQHqxfSPL9apjMB2V1fmDuR7iY4UATz96C5FLiNgvNVRHirzNt56LVpwPuJgeFjiN3",
  "key8": "24P2Zz2BRP4v8E2PSDwMX8TW7h5SVe9maJPY9rXct1BUbJC5QrD3ghabFLRgpgTFgea7Tu7ss15fEfBLnNk3eUHw",
  "key9": "TRJiiEYqM194oh3pV1txAZxaPnJCmm3kyes9PmV44gqQDzo72oE8fbwTEnP7qJS5xuZRL2fUDQ2tMKNSK8gj4xp",
  "key10": "eCCJiCKF6v7oUppVtjmaXauPP4qtb2a7fmsV8TyMKn8npKEXUNqY58Enjw3jQcLUeXjEkCFAwhmZjNBimR7rRRM",
  "key11": "k8kpnhrMYHSf3JxynH4JutgJDGrm2DjjHrRHDoZhsHLkZgwFpEK778faC58BQGp3S1FzDGWn6TFayxmq4kyL4oE",
  "key12": "48qTrmDF3owJrF5dgs8r1aAbNmZMZGR8C3D3mQW2CvoXjqw1vRcqR6rFXMnJWuGe9DQTZteakhjaTK17hPYX4hQc",
  "key13": "45B6rTHpFoyT4KSybwaridTR38i7AtGDBbJntY5GWbALofM3UBayRB3bSYfQ9zWVLNNkhXK5j8xGnE7PuU1a58mg",
  "key14": "2hgPmPhS669mVPC2Pa1vRVU3S6eQ9V16rmJhKFC5xb5BmZVR291ELbVYTkpqAEBtvojURYtVjphLAK7pUqvT1KR6",
  "key15": "uo5LLfiwjzgEaCnkE3dXbpsD2eBxDokF9uku5ytUTjazSRza7SSZ5usXtLf5RoE7srQw72boN8RQv2RbrwGQuGb",
  "key16": "3Qb6c4u5Ev6YEvcWQ7mk1iWuwEfsvLh8an1VYqqHkTZjavX6mYpBaDqnMNGRnDZBNofcxU7LLe7Vrcs24T5unevj",
  "key17": "fSqsNc9h2nHYTSdJ779NtUhy7N6WsQts5toDv53HdRWsBoQdzPpttVPkGYa161c1aewxobCFq3gRzi2GTQB7xYk",
  "key18": "5eRtJdF9bua6mKikHiEKRwXSTrMRXyBtVeqCZCC6BcaWZgKmJSL8xQYZyK47SrgyRyQjLNbbcymQBCVNzdiGbG6b",
  "key19": "2VdJbLQ5M2B33ZMK1kKrkHRWCVekac9cUeCPJ2Wqcwk3CvsvV6pjRG6yszXqnxjVKEKaEweXW1m9bYf3Bpz5igDh",
  "key20": "28TzQZXtx6KmGX1jmBhmQ8x8dQXUWQTjCyGvhd8Mrzdx4kbf5D2MxNN9TPEXLhhyomvTri4Lq1ThVhPaKxqkBPzH",
  "key21": "435cFFvvNeZGST1vYBo1iWnCU2wDYeneUkA5WVkvEKu92dd5RkoppghTVynP56XRdzKodpH8A7FeqSRXFXhgjMtC",
  "key22": "2mjLsAw21mf1oHh7GrDVguMS7geQMqYNcQNU3jdFrzShDxn8NjM2mSDA2x4Dh92cF587DnZ5A29bMKQwi9SgHcjM",
  "key23": "4Q1DZSSjJAjiEa8CXy2Ufhvn1fY4asZGozxHUR6QrAS5kn4MBNHinzuJfXnDRbC7mi4Raf4X6ZU4CuV3GRye1LPZ",
  "key24": "514fQqajFhz2gN7KrbStVAg4iJFk66QAjfnXNHUGTKfgrZihAf5QSuQXBjX6DFuPaFkHHKXCK8TUDy7Zbd3dMmuW",
  "key25": "35CftMK4UpN1iEmz6Yve493rHWrWrzgvJmmmdyCzKn45v99bNmy8pmbLFyDiEd4ovKM4awy2b9Tc3fWqND7kP8gd",
  "key26": "551JiEJoWqq35VWPXFM4mReRTLpKn4Hw1HrqLb7wV4R144WK6zcsaV4WruJ1EseUSdtjMfGLL5FjBQEE644MtGp1",
  "key27": "5mGcxRXoEnQtj8LF8YFi94gF7dw8a1j3npS9QqkANY67j8zzJvisHcS6SBBriHdwn3tgrFEwyEVcpm3PhMH8KHbs",
  "key28": "3EntAAjdxfqVEsPTaRFXuRcqjoEe6h9hYQH4Lyqpbj5Wo5yn62qGZaUfpBg7PmTS2PczJ1i1Y636hHmpZU1hWa8n",
  "key29": "3qZjDpYqVoLyNjctSFw8KkiFZjDYe8G3KD6EZZQL3HkQXytNmu4QuHxMMeSAhBmBcoFfLVFWZDfPvbTinmsTDYhM",
  "key30": "xZs3jkogQehkcRXDTJrFiqqmEKKp3ALfksjP7TgbqVAVPrPi8AUwzFBw9Y7bfW1xLVFk46g3L1BqzQJ9DvcHzBk",
  "key31": "3MnqA9n8338Crr6w8Bb7JLAM45W1RoP45kraPsphBgARvrybdVGDxEdsVr4uaN9LVDf8u83YJthSz5Y9ckXo6UKz",
  "key32": "4SKLAhtf6eXb2mtDDf27yeJUoW4djmqDdQbeQ15bY3GFF6MRnMMPcwTJkjQEEUNq21j9MSHbvHUi3BBfUbEVB64X",
  "key33": "4WEQhggpo1k6pzybiX7gMadkNULAyDsCHaeLtANpqv1X1ESUBVK9pTvjZJRowqA8cM95WAsvSqfJ6zbRD3NN48vL",
  "key34": "2BaC651jrS9vUMJZMev3oi2HaXns6DrnRMiimGMpRpe5GNddWE326hNXFQLQapnYy5FqtCLqQCcLLpZnPHVd32SJ",
  "key35": "V8AwpAqS2AWvCCu8GaBjQRAZyydKAid3MeTqoHpJ6yVNEmqmLmy3nxKy6hR3hqs3G44hHmBC5XwGwaXFZDoTGWU",
  "key36": "32HN3BFvoX3pf6HYmmdWGyf8nBd8JKotRHRcQCkosg63JTcSv6BveYD4FhXLd79sxU3QoyB3m6qTV4Qe4sEkTF39",
  "key37": "24qkhAjRGuQXrt5aVbGZoXBhqiNAmccmdcdrj5BTUVswuJ6gy2BxiULeK6z1nV5DTit2mqE3WNcBLqPju3X8ptVk",
  "key38": "3DifAc1mcwFwiF6ogEjAtubEPC8cm8j4RiT1ipwt3SUqnbJR8VurwBU9QcZC32w19FHZedzVvgWaNgzfELijr8Vj",
  "key39": "4YoPyHuZaK9quJaXc5ZsJwFFDydXbJaaW6EE4RhroQi1gc2AQKid5sSeyMiRYqmvAVePKgLjWwtKfwkb8r3btYBi",
  "key40": "ndNCApU1Pm8C1AiAfNH7BEEC3dvFxfcHB8iDB5gW7iHKyAH8itdYtNWGC4ajYhGxCcyriWdPnNmZi3KLLoRWqfN",
  "key41": "goHhHhUoQggzVemvw1FNosuHmtJpzMotyRPXx3jorGnk9hHekVoaKaKonqEcGE3SJETLJ6gVx97eBmWYoqYCNm3",
  "key42": "3xjPEpF5tHhRCHcrqGVygWvEWqixW2DpggLXrXVQ5Hezg9iYvtLGxDPD7w5bgjKKf5d3TchjDdJN1nj5doqtufbz",
  "key43": "5JBcmcVBYKDAa9H7cPeBe5uSkTvxPZuvJDbqMkWno83Hqs6oecnBL41vNoqWJoMSJznGganktrZGMXjAKL65dtSz",
  "key44": "2pbcnp1cLqZ1Buc4VPY1xgAoyZyF3Gdn4D4tsPC95mvZ27TM4gs2nDoud7ibGazznx5vf2WEzyYuL9LeimDPtou3",
  "key45": "4hH29SRHsBfWirBeTSMEx7AKo1hgDuMznvNeBDES4vw5UJHq4rZXhXMkwuz7nnTD5nkjTwAnvm1vgbzr5dhFQz7J"
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
