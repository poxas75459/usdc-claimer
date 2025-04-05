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
    "2LfZzrrWKTKTGojQg376FHbehxzDSWRGajGKmzB7uKY4H2re9A9s9AAu1nBDG7VtyZgHJnkFC241Y8Vj5BQoKiiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vohcuwPPDy4VjxxgpknsuHoP9vAY6v9HX7neJaTt1AjmyEvAYyHhMaXVzFAwGzyVmkzinGEQjTYokoUowS6JPnk",
  "key1": "3Sf4T9hyBSpzgAot9e2TAgjANUC2GwRruyYFxh7NMSzkP595wkUWAsvgQTrFsqMiJPYZcYcrMUeKRETZcW3vtL2f",
  "key2": "34pZpXQ4bK9m3ToWoVB8nCBYsjyRP9j1pm5JuojbHnPZBs3zQPjHpFsuQjaE5brwqF8DYVBVNC1Fao8SSiLXSnt4",
  "key3": "UcEd2u7Eb4A2vwy6BUNpR7TQFcZ6pAeb9xCs9dNCYcFt4GMJ1wAQ5Q414t4zvLVQdsJHoPj1HybrwwgWzYDRKWJ",
  "key4": "3NC2UGw5kznTLmQ4B3TwXyKDdYjib26ResupuywixVZAUBnw1AEjZz27wSV4SdWK8d5Vaji68WxZ3S2AErkMaN3z",
  "key5": "9jqVnwKYKKmmF7xXDsb832erqMUG1VfunNSJm1UPjYSzNNgk34jKLEgCuvW5xHzZZHijJJaaW2jznZgvUAEucRK",
  "key6": "TEDepq5HZPJvMTPHeH5Vsrrwi2EaE7xfr93S7A8p8bZvr3KGy5S6TvkMyFSjDKwxUzz7xyjkRBjSt6TABRNtPsy",
  "key7": "4d3TAMF5uHobqoTbLo2Z6AdwtoPWgSPEUAF2LUnAdQJG2qvvJvNtnXA7UDmUpHjiTAwziEgjRHH347kcnAhYLXM",
  "key8": "DJwZURcZ7b8UcQHvkcFaVMNeKc41pViBLcXxAmJKf6c3CvqMxfbkbvzjGoLSUCdpECJEpbv89tHh6jXJw8FLeK7",
  "key9": "2rcgkRB4FvV4rf29zfZUH5962vveTNbQm9DyrnJkMxMLbKEYEUY8KBdxXE1EtWwH8hnhHuEw7GecT2RHgEqSJzMg",
  "key10": "3ucTJ8ZYgx4BdLwxvRpVvVkoVN1i9eTM1HhTzKLpEEkjUkEYB4DunGgYbCth4viJkrcRqDbKjy3qw7w3qTQmyFx",
  "key11": "3xzvXKaXSbL6BTbFuXL1X6dVaH5CK83wJKX69tnJKZUcsptncA4FuHJipRaV6QKCCsct1ZcTLu5XbAcVAFtFUtXd",
  "key12": "26H9GDLV5anyNsBV54EBYKJwt11EEPzMKCAnVBjKGZWR2vrM5ixDdwCpeMs25PwgD2QBvQxNeesUJyYaF91dCHE4",
  "key13": "2zwJ9ZqfSsyvsmevX452hxeVW3H5hxyNDCoWwnyrJ4SMm1tRvJy45hHpuzw5LBqiaT8QzarAd69HZ7pWfSeneq6o",
  "key14": "xeVRUtxcsof5szvqHhyoRWuMyGtNpphAsATEJvR5yTk13YYTQyEdZBMfaaEQ63RK5iAVvaN5CVsdKxamjqv7MTy",
  "key15": "2wfAfnEy4s9eyfDZn7gB7GkC1AywbXcQLhykuQxnLdqvB9oJWda5zV9PTeiBvjGKDG8jUaZYkTMnTpMTvRr1FTSX",
  "key16": "3KsQ4VrbKHFfG2EC4HJkyyGzRTBN259W6a4b6Tr3E5Gg7Y9Frnb5dPpK9n6UoYymPjre2f4VTwv29cCn8DiXFprE",
  "key17": "4AVgJCtgGJe6u3U49wLz6UrteqygvMaVJYRvKJPSE8LSyfNopK3gYxwNuvCM2V4dLXVLuHmoejEctn7pzWYHtL5K",
  "key18": "UUVPLGpyJhzqBnNvF85NLuZVDiei59XdR6XachYroSif1v3ky2vFtG4qEMVZKSJzcgyDZ2GMiNFerr6AfmVX3Mi",
  "key19": "4WzBYgzRjJLsmvaDcDiAAMH5i5WsofWNHy2ubtp3njNNxeTKyzfzjsabBsqH8tpUuaL5GBBQn4u7NX1UmCfg9btT",
  "key20": "3P3F4QPQuggRAR7HAq8YvAn6KVND5F8NomJg31hGFf89uPJiXtuY2xzH1w8zpQVgRuS6pf4xB4DpErcDH6P4M62c",
  "key21": "3ydv6gRzuYYaEep5ypHwPdPmwew9JQ6AJFvi3iwkLXNywDEaEJcpFh1DwofEkJ31GffFQH8SRRcmT4xZAPW4Chpv",
  "key22": "5xD1yHqpxth4R6TLM49YnZ8GwkMDRP3iRy7hNXHTzosDtRco2xt8851pwXi78whgcbnr9JMAku5UxhrughuNeQXg",
  "key23": "2VuNdaV6VtACNgWbqvkrWbTvXAZrPtVCvH89yyn2s55CVUomsrxWwRHKsqovwdej28xJ1PQVqR5WAoVi11wUgDU7",
  "key24": "3Ckim4rns1ekpJcSgHpDk1k6EVoTdV2ftjjD4mJbR33uGbABdfouoKCxjQ4WMBJFVF8m1fHc9UQKN8pDZkknuf9X",
  "key25": "jKjyfrZpYyrm7nW8G7qMmC8ouEK5iYqaGbZbKtxcVBifNdTZYEMqmXkSC8dyKCQXz4FDiw6GD5w6rNPDn6JSbh5",
  "key26": "4gLthE7kpNKihTEzuUJxVyhmdNWwn7tmuqDe8Wu7dhHR3FwKTArpzgM2iPZBTT8vz3RtmBKUfS5GNLkzPvfsqKGv",
  "key27": "4J2zbGKDubrew774oFixtrtYt35m74UVBi64f4AsG5XtNdJGxf1B4bVEXbmpe5RuYScwnuuW86b8JG1zTLdhHpAe",
  "key28": "2wWjGgeeq4H2kJwpk9tMteJRfyXBkwAWc9Z5Xnw6DyjkfZrNcvjH3cL5qPVbS8gtaDM8YCXvAHs3A4tiJ9F11cFU",
  "key29": "4sTBF5BMkaVGGz7b9hqZowxcsU5LWLz3rjuQTQweKw8xgJVpo13A4iSppTMcbJKBNTiMLJZXRAG4tEjaE2GeUQDS",
  "key30": "3W2KAWgpZdu344brrcJEVBtCpGRw4SWsLeqKmYmkdDZ4Cxem6TR4t8jCTSzqXfJhyxf3UNqzxDR3pPxiwo81ofE9",
  "key31": "26k2UH8CCF1XvMdE1jHNh8jsLY3SsA2WzZWAVXM1rG1h6DeTZR5FNSxBDbUzG8ezA1LHWynn3U8LiuJDUYtgha8F",
  "key32": "36p8JJw4UA5SHFzFwNPCZ4wHYQxQawgbrzVssgmBnoHR8W2wM7zisX65Md8gm9TmpT6Whoq7NhLdWrPffgsaCFNi",
  "key33": "4X6B18L7v5QFxp2xxFzn7eQzACuwsTFRFEdSSCt7d9nEZZk4zVjMd4pJzExcCMF6DSKAr9bFc7kN5Tpq3e6c4xUt",
  "key34": "3qGY44cESwxFuc5512XadYWoCpVdMFJEsUHvEikQbV9byhvzQgHrP9QhF7pSbgrsHVedenueQts1iLXovKs7U5D5",
  "key35": "4xwrvjza7weV1Gy6Y763UwaBVtHANsTWpV1cUHwkMwox7d8SG5FvGt1c7uXrT72uyWB3ik4TMUmuPvKsCTCaNW1U",
  "key36": "55ssZFXJvDXWTSftW3FF3HHRqLz9x1VGGuNFkVU3UtJ6iiRMAsMCTrNHgCUMDuwWwsgdLhNWjPQQEGocDQQ8Cjer",
  "key37": "3afBvvSEZ1GLfzpG8fkK4dWiCtvqq6BhhVJQ8c8L2jYzouDhnHAPvKqs98HvN4f2yMzwF7FWqjcoQb4tU19iJtJo",
  "key38": "GAAJEMa51FHe22yeXwriBBwgjNEmD6wKVBTfL6YgzmEYB1tXT24r3fBYaHhLViLG8VHxXtndUTse6mLL28ucgSW",
  "key39": "3AK9DTF5ZHmVZ6qWZxqjxvk9hiBJuvJFHncFTDyYxqKXUK9eDfDKNZenDxJKrnezoDJDNRLvEPtrmSTkKmPzVXFS"
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
