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
    "4ANH5Rm98pG4NAihfzzPSgx4stYW5w8KySjnVfAEBS5i9NZtg4BZ6m9CMWA4Dk9Bz5Lt37vgjWWv2kNNHtXJsddg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZrvbMhj3XchrE3d9919eEVhjRVGSr6EUVcc5J1po4TJotQXsPESPPavTXMiXect4csVJsxgWcL1vZr6Vh5Yfkd",
  "key1": "EWN9VoPk621LM1KgDE4ozxuUj4GAg3dRPPQ7tt52qZavjsPz7tfq6mQ1ANfuLYEoxotuKUj23tsmEZci9M1u7L2",
  "key2": "rsUAHkMhqLd5yaeMx3UiT3Ly4ifdWFSAagodHXA2pKQjiTw85xZv9pdmNCtRnDjkmySxiar2SeXkWqoqjMvuP2Y",
  "key3": "5vzGxyyH4aDnjDRR7JvL6ba4SddGi3Ubsy4CKSkxZREhPdva8Y83eAM9fDtYWXwggezuqEue5e2db3H3usnL4LY8",
  "key4": "3yVW4FRKa3cAKe83wYKhdPpUwq4hCBZ2Cx55P1nAgHh9iMmpD7AxAT2AFaYa4niQ6y3Toh9gEWqeWB1XorcDjhbm",
  "key5": "5UQVY2qj4kPgpLpTWfLdkTVTdXe17rG5gzWqtv1oNs2atSChvYmi4NWnzPUxf91pFys87Ppc5BEu9Zn6fgK4ebdU",
  "key6": "5B26mgRyLZwvCUBSQctfdodJJtLyQncUyc7qUfsMCFwbEY24BZqn4btYrBPj5FdG2246VbhHemeUNPY7SSeEkByV",
  "key7": "qmCjzWyM3nu7KNnUrnDLLm4DjmUEga44ZUcdeSx6naHudu9gsUu3P6AiqHjnh9i656LYKL8HdHKGxpjSVR84WWU",
  "key8": "5jjFEWUgH4mqfUg6B3Ha99GftpZ924hj29ErQQHWVLMCFg38U19A6L1nk1Ve8gHVT96svzaCcCMt1imFyUrYv9uh",
  "key9": "4u1k3TqDJjND2ReQt2ivUyZrDbnFpbMw9Cdiqkn24CYeG96jeJM1J5jShzTtknZqLfrkh3E7b81MFx5ngk4KRrGa",
  "key10": "3uTBdSP6xvtFHdsNmyDYXu3MxiCYF2CskmJ9sBCGXwDzCfjeDER7p4JtcWyNpAUD3mngUeF9xsng9iExvndW7UCz",
  "key11": "4QJBYPVU7PbihTf4jJvGiFjYEW2YziHnwYechKdHTVR9QV8jC2NCcffqXefHnJi1a8wn58MAD15UXiMQS8gjWe95",
  "key12": "AGjSY8TaJDw4HU86GvfSdUfBa8zH4J9bMzCJTDN5JFEFRd2scuq75VeAwtG2i1SVWJUaAusidet9r8YgDXroYTj",
  "key13": "2qg7pMA56f8wJcAjTVrjCfDYzTyNK9gqR8nPStaPTn7at13uy2K4DmFQ7Fgurk3bS4JjWmBosqZqyB3icboRTyyQ",
  "key14": "59xRP4mJqB3aNQaDqP8reppNkHvYUAtdARrsuZMMWSHVEqau4RG71A1ixL7C94QJFmBXZWoV9MMcu8tyLQ7iA5Mr",
  "key15": "44EUSBFsyBSjUEonHsBPZmFDa7oSg5WGWucWbfBnxXfurhvcMppM7CXGfL8mkK8eyhb3nvz44V8gQp5RU3uJMK7x",
  "key16": "2Vyjc8L5tKpV2VvGMEkdJqm8AfESdVjfBANqQfHqNZwKkm3MCxAinnxkHBEFDy3J4TWG1NttRrXKG5fCM9mJkDL4",
  "key17": "5eTvJpMgd5AUzch889DmFNTR69ppjLLSbdHfLdXkCCMkdgMMwotVT5A3BLwYFb96tZzTDHgeHjdKryVWYjd83R5A",
  "key18": "424GTUH6MhTn8QWn5Td5Ug47d9DAihDvoAUb1YQg8KVfWuLsUBuoMs1id7Jky7DX2QJRUrCoTcotGSrd5juChBrs",
  "key19": "9puJMRvYw8LhRjBsDx9Chv8XgM4MsRN9dyuawCabKHwbTdsdYuR9kdPgqX6uoHWEyMR58GiCwXxSGNrxGTNeZsA",
  "key20": "mQUjD83caod6zSxA8t4QdDG3y2CTAX1CFPHbjn4H5RE6QVurdPgwnbNMhcCQEWqwpVfnQjjHyBQo9gwmENUu9AV",
  "key21": "5H4tLLUzd9BHG9fgEAWUuJ4RiqejMQET7pHc4Z1XCS9VYnZgx4bW6EVt6eq6zXJqtCnugUtM5KP489XNLQU68SEr",
  "key22": "2SuJhmY6vwgZv8PztNyUnt8TpnbA9SAH9YhfCcg6fn9HZ67zH2unZSL7BiPxVxasqESkoXpXuzBGbjF5qwJ5jFb6",
  "key23": "62SnH1vbUFzyv8HBtJiFMc5MAqnmUVBky1SVRZVnS9jvh3EhhoR6y3nGoWohjbU6y88MfHdNehEj3NRsF26CPw4k",
  "key24": "y49U8TWCCrhm5bZCifxEf2SUAnhzaHR6jB73oNeMBAAdK6xT3ZhEAfewZHbztim1xK5merxeouMAUayGQLtaLX5",
  "key25": "2uAZBE1EFLm9m5hvRFjA9nspbNQ5AYePa7U3QojdR5vDYJJvT7BCivskdpTkDLFLFtfNR3Ryy34nvavJxn1rp2Zb",
  "key26": "4rJJwJVLgeWThTVWvrPkf73UScA57MGQLEpGsonMvB8tJNSQ467ndGVSAozRYQbiRGH24caV9P8GZNXd4MqgPmvk",
  "key27": "4g9idJxzMCDuB4J2BhwhgtB1o9inveTCugTFNYum7YnQD5f7KDn8HWAJTudiZHTUoXc54LpoWmFuvgTc1S1UeqQw",
  "key28": "4mX9HkepvjdRhT1ZbBstdU92eX5VcbX7us3zTK9pjz3zf1Eazv5QcAjQh1TTkTp2z8m2Az23iSDKQDYduG7Z1nW8",
  "key29": "5Ta5UWx83aYzZr6m8inab2uoKS5Gma78s2Ffpqc8H9m6wLbnMbaC5WeqtZasMBBAiwEApsRN5mLmVVJx9dmtCzPY",
  "key30": "5cCj9EbdixjevNZB11kXqPufZGL6yMxmVi9jSZKEiwmR2THYGBhY1aN1omrSFieJC35ncCoM8UixuHWbAhLzFBVz",
  "key31": "3r4M8pUg6GhsUEwp79adTZ8UKJxXZbk1zysGwzpSQWPQs8eQpizFuoNZYXaJtfgcaC87ZziD7GVfPgzuABAXvKzq",
  "key32": "5fTLqxAxoupewC54Eqka96tQXbxCkoDCGwKSm6W7PBSmehyuEHvmo1awhHSamQjpBZKWjXwQ7B61aQy4U9X9pgFq",
  "key33": "5HTSzsgQgMNubXHsm9cEpFphTkDPGESEtW5MLv7M9Dbmtg7id6fgEeds7TAL8Bf6ytFHQuibxpWQrz1FDjjNqJ2z",
  "key34": "7Yjx7XNuKvZwpv6GKbkQBiym8owxL9wnrcdkTbsW3ZHrvUHrSoH2kFB9kbjVoW9N3hzPkA9b3EtETMyMtYYhaXT",
  "key35": "5Axu7KKYLVEDza2iDEw3QuphQv2uA1n1rFqGuoxbmwBNm3sXRkehBB1hNN1BqmVX3aV2VNjX1VWFcS3kme36xFAx",
  "key36": "3opHgEgzdbVeZRe69QAo3L8MbKREusSZBAF5wPpCXBPSWadcYkYNaKK1FstG2d1qJVDBxtkGoUGRhEWtneCuK9LZ",
  "key37": "3sRxZcRDFHqDAwrNhyTyRS5Moaao2R9qXrsTrvgLCmPU8jCLb9SFVX7HSWKXgA49GgYUUxssZG7TvaL7kXREtmjR",
  "key38": "63PMDEvUFnUSMVLvd8TRFXdmGYo2AKCRNQtWDcMS6rMBBjio6CzkRSEpsTKSTzWPeETRGfUMP84ozAiYBMWVVvYd",
  "key39": "47ga9iS9WxCVAu9vZSctd3DYhe7r4pEzQQPe69tGAXE16trUtJr71fqRbJTSAnmwdkpfR7zadXvDYLRPxmxV8vWW",
  "key40": "54nqQMXqxpE7cJGXETWiLm3RjxJhMH7HFUQNFmGUxaegfJQi2DoCHcxPM3w3ugZai4uAnTsR7AjDcTVG9JtJf8Hj",
  "key41": "ixYN1RMjHJAtzqDfS12xpE5fusWmZiXDLK9sjBVG5G6hwhyDSqRSDvCdFSzTnqeCC7LXLuHFpcB7LUsKthvGMAv",
  "key42": "5DfoomGS6JUvueqpWdQFgNqSJusFFs14J52LvNn4Toe8xU6fzGQVXETBfcGGbDXoMNRP385fYXgkXbnAVJ4d7aZB",
  "key43": "4uxRXtJrfgaUqDofumq2L1Ydvg1HDbPYJGuSgggcWxTm6wWtQQ6bTaHBHnRqujLpzh9svPNBhPQH4tAWZf2RqusA",
  "key44": "4MYYgqbajZu2rGZKduhQhxmNh9z3cAWRL6t34HzH3jsDen6Exvd1f9DxuWNq4iioPmNswweQ5a2YR757Jv9bySME",
  "key45": "2zmD5Cj9gZ4BkuJizWHZdmdFnsoeeJEQVAE8bU4RALQQdX77AEo9v1H9vvRCCPXjoGovAUwoSz7M7QGkTeTQ6vGa"
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
