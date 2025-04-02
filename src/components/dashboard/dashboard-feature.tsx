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
    "9near4f75vFUVAmVqMRSaUf3ZC6BJfr4a3tedMLw9XwaRhSviuWVAuuSWGGHpJN1RGQzkjtqT7ysVzJmGBuQSQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VcEy4QFF65x3xEDkvRXZgnJfGXey8Sj9dokBXriqDVhK1KMhuUvQCnrABgPgw7Jb6SNmuqwRV7yUws37nMSALLJ",
  "key1": "3bw61VmeJrKEBPDErBCxhXXH3cTrcfv2VDVTMPhAvd7kmJYgeMoA6EmyFw4vH4SKa55NnBjkbRMt3fxbo6YRduLT",
  "key2": "5sv8RtZ9vN8kHQabCkiu1HqPqE1HwGDiULmYkj2sTityduqotfMEMTkDhHHUFHfAttVkGphQoQiRwSZviL6oBfCb",
  "key3": "4ezwhv9VDdeqM4Cs3zwyYBCu3uoe26Ln9Tmqi8f8CP59XZ75wRdA1Qow7wNQ61X5DSteoE5rFrjJfsc9wRc74Ck5",
  "key4": "2Xh18ip9STgippvh66ekH4q5FDLszF6yqcegsdQPBBmtP4oi1YuyZVpPhP1aYyzkeYXtikkkzkEMyURXC7eeLVvv",
  "key5": "2y4XRY3aTzdMcj5qfgdjDRfQVJ4JRfpPAtVx41XZfdybA8Ke8h3g72DCcpqg7BrAUBP3pzm6RpWUHRQWQyCSMPue",
  "key6": "5RMTCL4FxK9XqXBtbRYdSdbvuGEXCa6ntQq6eKWmCzrdupqaJBhigdBpeGrko9C5foR4zLKxzRe9BMdK9VJxrW6s",
  "key7": "3AVRYNQSyuRPLjcixKUv1wBUW5ZRaT9mAowYFiqJ6ScdNpiFnqp25e4YsvSj7TiiKKCkGGorH9WKm2mP8BK27jDG",
  "key8": "4nJ6tmwyK2QWbqcCiy6j1qe7w9Re9K6JRMqeThLLHuDcAyMxBASEJfnrsNak4BNm3sbWgZ9YiBgRuaDy6TBTswfu",
  "key9": "3VBQHTupet8vBSnrcQ8nYnVCqphWVgguFt1Wjzr71yujBLm9eJTa8V4SonqdC9ZXxxheUZz5BrthxSEdSfNc97CF",
  "key10": "4JS8T6GZHjGHQMUJ8aUXpwne8KwgYq6NDHQXWCP5c5PEAZPb4JtDNmZC1o2oRTDMd9ZSn6hcnntQfEB2trJpLSic",
  "key11": "5gsu6bYnPnehGFKCe4S6e5FgTjMyjrCNM1vAfTa6BNUJuZndC3PKwUbUv96p7jGz2BK62i5t7GZzxVyRRSzUppmG",
  "key12": "23qTYF7ioVbt4mR8MRpU6JUHpfJVtasPEoF94d1fKm6Hw5pgrCbMKL3AKpNZ56YmkjAvmkeoH7n989b5hz3Fq2pV",
  "key13": "5GBpr9Cgi6vaSQG8ZqGzVBc95GtKhig5dCK5uyqHVD511CycUauQhMvNmfpbgMypouX5LRgivtuQNR2p4n8cNySD",
  "key14": "3wLhWWsHykMjdMHjKPorfF2Kw3a4JCSdBHKcWdMFXG1xXdK4XNJVniZBe7UBC6wF2FmvdtAHwAZAQMPE2hLZ43qD",
  "key15": "fX9q9kyqFQz4Fc2uj6iGBCK4GfkapfZfX2ChueyzbMLmUnWx7soH47Ne3Kr2WR7BmEmDjKnaodABbP1Rc85NVSo",
  "key16": "2snmBDP2aM6eknBj12VAiedUh79vDwpH3kdwYPXsxkLxFkr98CL883EA1TCWhcHcdzusq73WbyKFeH6pDMQ5E5dB",
  "key17": "3RPXrkyKvUm3pvmkgPrw3X71NjwMKoPaypoevFM2aSiSKmnPFeHdVxEqJRK7p9vRoCdWhikqazGzbENLGeJGJhNf",
  "key18": "3fqUh8ypXU5f5LZjSozKpXYuFu8j9FFkPgSJJEsqMGniiTwd2jJ9Lo7iMFCiH2E5o3L7jobfh6vm6eDEgWakHY2r",
  "key19": "32hP3qGKfvmGxsCKytEVeC74HrAWLUAuRu8aBGUFGFupPHS6qgZeqqLFqCPKGbewq2wVdCupRxvtDj7HYrkAKQem",
  "key20": "4GTCA2TgVUJAcZCGzpsgVX2SPUuHSmhqsUBqWatzWzArV9vFeVViHbGjoQMGnM7kG8geCT4ibrtFNpCRoGN9EaJn",
  "key21": "3XA4QDRxeAzQL51FAwgePYM6mgWm6nRLweBZaio73YPFyyqRgDeH5tpidwYZFCKHqQ5Rq3LTVAC53QrUVGievvJ7",
  "key22": "3uhKA7JVPcsXX7Dc7jdd8uGVhSVik1ssNEdZE3LwfWK6aBi85eyDx9eyxzXp5qVvNV6MrZxPrD9vgXvXgVxevS8x",
  "key23": "2wuhYBfdqVzh68H2A2hXJhrMjXfJPFZ6UkBf2Kh3u8Y4x1qzitnMuN8gDKKeXQJfEEZAhvzx9E6uRBfmtfY9dpSP",
  "key24": "NHgpGUXzGfigsFVutcmQJvhBUJ9M2E1KwzszFqcg7wZnpfX2FuqKofTtEMjRHhV3p6jMxUSeEsbVVsc3b7R2XAr",
  "key25": "3sTV1cPgMLYtRErv95e3tDqfyAitVH6CdS9FkJxpRsoJbWgMdYdZqYGv9LgLzwprDATQ96XCTE1p3vpdrD3MqcQm",
  "key26": "5eiGrn3ZBPytUrFdLKvaqwEKouG6Nipiv2Kz29Q58V4es3XGA5ncgK81Uow7eLcJvCdKpdaUHmxyBAYza4rGWCcG",
  "key27": "8HhTom15yJioobsW2atiUDYnFhfq9hjMDnXZ1MAf8BpeL6xafgTJUQy8UiTELguPj7GvWoJdLJ2QNJXLexeU2Qd",
  "key28": "SQcNFtUEJGoNDBVAVEVxy2odDpEZ9aaaiM6LTgffHoqMLQz7CQ9hhRxXBmnVFEpm51B9uvP3B9nKSDktk8txprW"
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
