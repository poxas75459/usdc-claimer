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
    "41cTWknfHUAfMGa9FQHc8DYVrJUXfvjT4n1T1FASo3jffcW2f1yMxRpW6Wq8twMPH7QcfeENVkNUH6VbyyLHTuDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E9zaiMWwZbWVtxywCi7T3FdDThRMjBTfLW5H1vnYn5ynMhf6ZwoeAVArigRi3HbDyzHufLu2Tf1QBBFFYwdQiCm",
  "key1": "66GiBP1UkFDfFQ3rx9aDneQM63hA435VPmgpKz3hx6nv8uSnkvzC1JyfC5sf46Y6eAXB22biXF8p5qsZbfkPzmY",
  "key2": "46UR9x2Hb2R2B5XodVhJFix3U7TjneZNUs2ZoBgqo6GDE6Yp4SxAdhdYC7j8gmgMLRLSjV4myp7Pqu26YUN424vt",
  "key3": "3r1Ms1sRvL59AyMUcMcWdnqLw8EBXB2taHMVBmEQjAvjo1j6HAVCnxjzicXGWBZeKkKP3XEhGPLk2rixzMGfk94N",
  "key4": "4oeq69MsxkWHhjLdjsFCAtPMeF5zPCf9nM2jhDBEhKEAeywC4MfiecxdY9N4BUc16urrsR2joY5pQYAxqMz2nzGE",
  "key5": "4ygXUyYcKDn8VMBUc7cuLM3o2JzU6Fhsky2i2tmbChTMwxZAxxjrQtj4tpPCQM6hJZHnambZUq7YjV68TBxEYxbm",
  "key6": "cffTAWtgYZnw7HSeMjnsYxHC3eCFpFYQ2sEJFKpvx4ttGGcVzNTbRVByK3tzRcfQQfwVZqoXmDr2imD7xEwMT5j",
  "key7": "4BR3Qj3miZDjJCctfAcPaowkcitMf5B6A3zNpcdVoqr2itQYzwQM6PXokGXAeVofRmDuXRS2jXnBwnoe8yunfFVp",
  "key8": "3N4y2kgXqQbu6XnhprDe7s9o1XJvMv3wZoD3YuYn3ubju2VnYXoQhH1nPd9s6Ktkjgo7V5QP2gZi25G4dufsRdoA",
  "key9": "7oKGoxzJFmyfMomz8utqW16g3VFzrkg1PT9Mx5G7dXZhe6BseRsNLwfZBDmr25jhDmkq2f5ebV3wxX26CD2y7Rg",
  "key10": "2Htjy3XsrCJXBYQMiogeo7Lc8JMZfXv3jz5uG4hdUnpUHU1g6XVLirVwG5kUJkhioJSthWwSnpCd95RwPKrDukNW",
  "key11": "3Kep48xUZ1xMH3MNJ4RaKUyKyVWtkRwVcQ4j4WPsdjP5MEYhxiQpy143rxnoMcrni3N8YLkkFSxMkrzRhKiJrzk",
  "key12": "4Ki8kfZuKXZzwzijeJe2mQqFTUy6HKgZDd5zM2x2cJwvqwTGrgyvHynx6R4h1NhZNuMMNNYXdJxxz78uCTDxmKX2",
  "key13": "2fBxZPtVjvg14hc5oXK84Krf7PAV6GHArkycqfRgjfGKf28pAzXWNPX2NFhX1uVe3yNS2pfkP8X6qep2VUVUJKKp",
  "key14": "2prXnH9yYBMMCVZB2S4HmouoqZvA4NGXknZsCjtUiJWCpmwWwJSNS4qjups6u1J4ibRy2V3SNePPfpTiSyianEbr",
  "key15": "5NPDCg5PhyhffcGvtwbwzgZfKmb17qwYJHt8qwBz6poWuPoPtzBJSbVwBPi7mzQoD1Z1mA2dDuKikTFm4t64Y8oe",
  "key16": "8dkhUteJWacNtTBoVZgrrz31NUUD6b1pyFbHtQJHXtZvd6CgsJjinVvMP4Azupd2CEREwbKfiNCS8UeWGhdz9MN",
  "key17": "2N3Y2rzLVxV1jVqu8t7Cqq32Vb7s39vrkDzLbiHm5n5Yxt3jCi5TLmwMMVbSLGs4MkMmsVpJCjmDo1JS3EP6HeFf",
  "key18": "3QWAFcNaqvRnh4phPRRRQ4TWs8nqprZm6tT8pizV4AEx6pAW1hRnm5tLxpxzxF4sPKq1ttvF6T6CZ6LyE4C7ARRc",
  "key19": "5Yerm5SWcHoRc4F2N3k8jrhUBwHyvqJHcJPYVDVUZYVizPaTq5natJXZ9RS7GpijN9iiM6L6m6ghLcyaGhxhURT6",
  "key20": "5Rd3dHLGHj55kX2RRQ3BLoVNHiw8hUfrkxAc7iWjbCS6Pn6xruRTgobYmS6gWHMv335s4g946ypGXFGuEN6pCZs3",
  "key21": "36wDADhPHxqTYJ4JXZkfbJnaPE4RhuzmrVx7c2DBZFs7GEmCJetVN48iAL6MJ6b67psqTpvPJwN8hmFbi1pjvykV",
  "key22": "3ssuV4kdFmXkFVW9yecm26pUUTCq4KBQvxaviUyFRFEQtPDBSKsxmKPDQAiKNYYJRWNkfKT5G9649uRBygEF9o8F",
  "key23": "3KjUi6TJzoessMksJf7sGya9RZtUzZLtHvrazLKAMa1QiWgWNputmhM2kWDmiCzoGfkHurmrC4TMPiYzjuqBcMjr",
  "key24": "45teudtAaAVTFMs5X2bj1sDuQDbMJvAvX8LNCyLkAcriFNyzHhGD2kASSdpy8tWDjPauddauTnJv28MAibXPzXX3",
  "key25": "5RprD4QahES6BYt7Bgih4BbuK452Sjj2eZC2FZ3VRNjVpMQz71BL6HJ6PHfxiCKC5bv9mBrxSYuDsMcWMFzSmNtc",
  "key26": "48jxvYEMcSZSd2Z3jhkbg85oM2DnQPYJWrkNJCegzo3qzBjXBnxZFtCUkcyGUDigh3BFqmvLWR8L1MZhZmX6YYxN",
  "key27": "3NFSBBmcWAH3GoLcikMotrSoewAoAQkhgTdjxY7D8DTR2qPhsfNstgbLZRkUYW34yXxTiZcLQ6EGwPTJcsg9Q6fy",
  "key28": "4x8Q3SeYxC1zswyuvKR7ta6qNeR3FVnAKyVEdqKB5UEsCp9aJjomPzFtZ7sqq7hqdRP3PkbJY29ujfFGkYaM8toC",
  "key29": "3dzb5WXJXgWEMdViXQjQV5ceQGpqutwMZbuFx3Cd444j9cLsvuDCY3NyHFi6ipQEkyL7TURAev7UUGHRP54yVWGU",
  "key30": "3GTxVWaRdzCNphCcf31qG6Q7QHomWBMr84JVyTKnnDq96uTLGYnEFm55shH5CCvQttiRtw8gQEbrEThUoZbiRCXw",
  "key31": "2B6CUcEtaypH7SdMVcYjvNeJyKSKRAS1k4BUttpDoEHWbi163B78Bz1UVFeEDGeEiAQe8Hbb5tMmNb9DgovYS84w",
  "key32": "4pMqAD4Teus3xCAEPmuEQMyVZYFqh69sZ3EAds8ajvM3Znwb4e9DCDUrsRJMBFnQK5GWqW74V9n9rBmGYiM6pkCe",
  "key33": "64W9w22eRhyk7vcxvFuodLwfmHos3o629JL6zFPqQFL1sSyv2YUhSzuWtEvqwDMh98sYNgJP7u1cpmbnNbx47rzD",
  "key34": "31ka1WDMY3AstX2sANwj7VWCgZacfSXvA2iTegugJVGsiQnKvAHk3QAXjUCrLWVQ37aGQiSKEXZitiivCE8RaBZA",
  "key35": "pm2efA3pXeMcYDLNdbCMdVEQrh5wEn6b9Rer6984Sq31GgBLfdp9EcWa4Uf32YqtumAqsohgGGDPLJKfucrELKE",
  "key36": "N8PuXScV84aM3qxa3voZSnnnYFT9XispyosYiBw4gk8Jv9Kq2uVuXVT8uR5wsWKnwpGS7AbVmkdVnPA5kUwbANG",
  "key37": "546uv9CmGWuwQNs2s1toY1o5TzfQv1aFfccP8nY2XSN9hrzJ5qaMUE7ePis4VXSfteUpwNVtDZv6iLheGuzRqPSu",
  "key38": "38zuQJDv9jH3PwdX2hDJUxbGgrBZBcmgYT3zGRpvd7W8Am3QMCs36JgJXFX4Ebv6XtyFZoLZz1BgRLKgfLGnPrxZ",
  "key39": "2hjNZ8Sj8iBKaTCoemNCNHWr4AXBwUvLJNxBmm8CsHUPxQig4DvH3FBeFJkhRjxEmC5EChiA5j4A11rpDphY5ZCv",
  "key40": "znwsd1yv1pGy5k1np6JpFkJUK7LR1B7B55LZL6Lywc98ZLjyiUwKBjpyzAQ9hES3rSjEdMznNZMAEeCvAoiC9zZ",
  "key41": "4y5Soh41VJbH75576dze8MqtBy1Pghv8B6h1M84E5j7eW5tqCPFoxiWY2C38J1WuXbWdw7966iTZj8CGojggA9ns",
  "key42": "2LuciT5ohH9cN8jbvK8ar8K7DWTz9GQWFBMGrMMCU3ihGzG96miPKgzRu5cjypYrJLMofAk7HpQJ3Ha1ogKbQizF"
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
