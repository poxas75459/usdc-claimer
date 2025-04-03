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
    "438nFuFErdvEqiyTugDfD6hnLtJ3LWtey4JNGYTRHMXDFarkF7FKmLvHuTjeT9fXdPAKqXLBZETXPZMCDpRRpQeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMQVCU3GwgsBWvpF3yZJvDirmUGjoJFak2yGNZbcqnx2DJU7B1RkJ1VJoAUUhmgnqE8XdSDKCiBo5ksvUwVXc7y",
  "key1": "5BPrSSyqAe9881XysnS9YDUyfQrnAwV2w9WrjtxaofNeVUtcFH2m8Cb17avqRKamoy7FkZmhgop2SkQbT4NJA5Vo",
  "key2": "24yggVdkncDzxuUinxouhq8LWHAv3pVwxp2Hc2JLbQpqgVHavG1isDceDXw32aNhRBhAAURHWFJfbJ9CtkewVckP",
  "key3": "4LjBDqpzd9ksa7RiHRCDDchV4phDpMJvRw75QSnQPmihrhBkWCb3a8zrntoJfankoXepKmXRdNsgiYfpuYuM36S8",
  "key4": "URD48qtyEjd2QzEwJB3z3GYLuAPkc34w82vQfydNbNvUyPN3BrnCMZdmmU1SdGUn9ENYUZuD9cQaitq5EpMGGFP",
  "key5": "4X7D87LiUekJwJWrLTS1SUmG34rnzqu83MyS2hxEg62Qh5HgXHMQSCBkbLwhmbE1M5YcQL6h32JcLj13qMNQupYY",
  "key6": "4UDkadit389fYk7m5E2CY8f6LnB3ZPVP9broU5qhHEUnEWqBWpQEGZvkbF6TAMx8Rfsj5TEvdsbKDuUgowrs8FVn",
  "key7": "4nuHH8JDTVzmTdev8wbXLfbsmuzn2Bnqwc9CrynRg3TrXLsxXcc2VNfbGx1CAsNum7WR6HVEs7jDyktg83X53uGe",
  "key8": "3EGRknMmK3GR8SVDdfoXsQo2yUsQT54T476WuUgneh8YQkHf3mSxGCP2MFgwYaGUVfQR7ZvuKwLCtCy9eywDUhi1",
  "key9": "56K5ox7xPYWa1rvtTwi4PjnYaj2aKN3t3k9sbA4f9VYP7aGCDig1iqR38bCkzBHSJYyBTBWKoehojgWHhjTSfG8K",
  "key10": "5hYYwL4Wu55bQoiHzL1tVgg3iYVF7d9jmxHRx4sNpcV5867A2JpojRNph2ossMTxL6UNTKSfcbMUiTW9xwhS1bKQ",
  "key11": "29N2St1kVsUgJYhsR2XudGsdi2pXWcq55VK5XyHRriyG547cN4L8b3UHNYimAX6bhXmqUb2FgMEqeFGx2BZptku3",
  "key12": "4q3zHn6wbcA1PhFm62bcxZkyMEdEjFbEpSQ5QJjrP61gMbdVSAuMpiFNQqF5hTny6Pk5KWkKUaYpzkMDGiJk4vGe",
  "key13": "2C6pnaBxkAUjHNZyQ3zLAwU7bwGYfVJXZfFjJHPQWeBKfu5HYJDotVTmXuMUj4jziRv82fPoqVE5R686ET9vLTcY",
  "key14": "5TPymzAGve2DNyLPmEAVFAhQ2GqPkoa1F8rgsMRYJRe86wPxnjfKemt4SQzGTX1oMMWPF2Y6eLZRNhjDyB3dfWB5",
  "key15": "Gvc6aWvSbMQnrkpxS7H8h9FzAz9hoeHQ26hRQdRe546F73kBmE8pEmFdiYwZjKEdGgHEf1s75VZumJUz2CMtXTv",
  "key16": "4QHqkWTiMcgfRk1Etm4zkvNeE1PCQpPgsydxSshd5JKTUyU2GaSiRLRUdixhsL3E1X6Q2dcqguzFoF1mdRoaUczP",
  "key17": "2dPT9oAEeb4zDK9GNwvsais1YjfNubVgrBigDhB8iGDfoPPDbUJdxnCMxhDEDEe5CRZxj31NMXjuZfeGtVYn5HoP",
  "key18": "VC6fp1Sbo7pbUEdDKb8hNP55sXZnDaLeSPHypYp845F3pgQnhBto4khbdRL3cuxB6HYWuT7egPDDppeHTmht67X",
  "key19": "3ULvxwQ8w16AXdY3ihyHmHiDyn1rvvBF7wyBB6NScQ289pJyXdTZMPpUQQSr4JSdzGrqGT28gk8tBmFbe2wnpMRK",
  "key20": "3teiZXzXDidxumhGxUXZK9TDqzcv9dGgEULRdG63vCgsuvg5zNJKTSWsAMivzAiLy24uL6qmZHppgoot7RKiLcKe",
  "key21": "2hreJnrMZQYe6FfSExHyK1yJ2c9m4gXfoAbsdMkW4spKa3ochnwLFpTRzSdPEFsxiNjBuaigaW97H17So1AZ586k",
  "key22": "bcbaR1L1zDmG4CHDnDf3niW8SR9Rczh7831n1A189HkVHaHFTgEE9FjHK6f7mWdsp9sGT7dWMYeXDkhx3P5o2jS",
  "key23": "5ufNnSwn7xAeHwR3Tua5FjsQhLgsUUP1xFXKZNBG9F7ieZgpHZKzmvLP47XdrU5HX1RmEzeYBdvcXKo5rXMP2o9Y",
  "key24": "5fc4Sw8BhtXrHaDjVNMYHgE1T6F9phyxhpQuhuJJuAmPY7qpuKzJk5XjqWbkHnp321h6fovGfKocjvq8SArimSVc",
  "key25": "5Av8JSADeVyy876NWrMcyoZvYMWHPUrLmCpXvHpXM3iTM685EjSqKhmUMtqRFx2scqjWuVaK5vdE6hiMj5fDdyTU",
  "key26": "2BaLyCq38sPKDaeKjRWq1kaPk1kRdmyKsBEoYcyFijbqXjPLGCtdRynPPVRYiLanNFidKVtdYufKA5UkDryyPjfD",
  "key27": "2G1KRzRFVoTx6cX83BedEoxSEbn1PNMKhKn79Ay9bbJVfRC4euXF2GjRs9Czo12i8RfKskzxyEozikqeHBj3mLvQ",
  "key28": "5rgozG6NMVsgzZH4easucWeo7MfvzSAZy6ghEXBe2B1Thh28omfty8c6XDRLE6PhXDSsTiV9LaMNahPMCa8UP2ge",
  "key29": "2gBrHKsh1PzD8TahxQhZJJNpmkWR3SA4BvJAmiL5sQ8kzVdkfEB2FR1Qgc98BMLNWGPB2aJ5eiTacb8g1EU3oxjG",
  "key30": "4k5a3qe7bKEvj6LaR73ULcVWKkiUX6HGNE7go7ENZoBpCVD75cXmRJCZd663QbTy6xTHCEbsbdkWxAbvVjzkRckH",
  "key31": "4BEyWukUVe3bsVMdCm1GLb1wDNeKYdLbTNzK1bewXgmJakS1juNPx5S3HiAip1eP5CJRdggxFggKZANBaW4iEdUt"
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
