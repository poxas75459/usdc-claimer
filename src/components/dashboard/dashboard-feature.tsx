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
    "5bS96mBwMP6mb3mt8ywt1fPyKQgtGyTbTtLmSMjqDJvokubzbMiUeXHTgnZwpJQodhG4BagyxdomQnkhDtEaJFEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iX8bSCtpqefwDEsrqLAmJmv1Xufc34jEZYXALWYn5Ufj3XZ3kZBcTQTSqipZrjCx8TnekXWQnxiT4H5YYHFmNEr",
  "key1": "ZBaQArrQnepcdfAJ7CVZvbi97nUaEgNCz7xsuXtxhSENpETnAiES8MYLUwTH3LcX36dAsMuHdPepsyNRjsbgrdb",
  "key2": "3WYcUJsaozsMBYfhfz9W2Q89SCjEWyXbqGpEqVbEN9Rj6LqsPw2pbTP9YeXF1v5oELSkjo7PHVHvQDJLB86zdZr9",
  "key3": "3VYmZD1YG9AWDRtXLuUKwgscHwyyYLspz7AYei6WWhrTT7Mh9SYaV2WJfXf2V1WZVjRLpdKEUSZLBQ1aeZBfRPB8",
  "key4": "5UdaMyFfanq4xCPeWEarowhf7x3MaxKPu4G3gmzus1mro331WrajqdyfnQj9yzyeKtJpCjjnLtUdR5mCHM5Nw3dx",
  "key5": "34qBenEVB9zgzoERSVmnTVxtLgvBUTfah61GKcdJgAgZ54rqfT2mzGoMbD7iKZLyCubvAydmDiS33iLUfnFhDpWh",
  "key6": "3wMxKAobY7YS5bsiteVD8rysCMAAgPqJit4EaJMUKQN9QYJcdS39sddWiuxMHcQwy6mqS1wyiUJeddZepGhVBNG5",
  "key7": "2yUwctah3kHmbo4dYaBvssKojRRFpHoNAsEjEf36VGDk2nKqhoZGjSHwccE7abEaBdy5ML4vjHNbFZga1s5qMHnH",
  "key8": "44ApF9UWk49rUF2s8c6XfFr9S98ut9tzZxhT1ge62NsNhgUV24o2jr3e7Mo5pUEJwJ1nFLXGvffpjmrFZNdg57Wr",
  "key9": "6DvbktMnZu81s99y5z5bwVnU4J1CGQid6bWsLLQSRyQse9ixx6uXhUSeUFR3Zdaj9APe7KQ3KHj3r4FUmmed23F",
  "key10": "56AatzPX8CuVM1tQbrBzBd37BL2WhscbEuLke7opq2Pc915nUzXqt7YeQrAAUFch5DZ3vXiWcHHcVwaBmtzNTMMt",
  "key11": "5P2chNPWe4gjiuTbFTe4HFJTvzBhJ2EibRutZFJHcNpPq7CDtF2ELyyTHuZfmZTCFdAWNeZffVSqnsAJtfngKAXi",
  "key12": "4sdhjArrubNRAY28F5mCYGgvCPZE9HqEsYVRyDgckzoudxxHbqHYaSeupg3ZoGMRx1QPM7zipStctF7jcYwdc334",
  "key13": "279JtuuVNSEeibJCkb4AM1uWVjUCZtbewsS2k51ne5ikLP6FoBKnm4odD7sc41FGZ9LWpD2XcY84UzPj5rC9gDz3",
  "key14": "5bZ34afS5r5Sb7YGdum3E22rnQ3oa2rCUS7QADRNyMpMnw7mkTJvAEVKf2fjwz8Be9L4Zc2pHQ3oNuKNPjMrXBVW",
  "key15": "a7naNhBZTM4oUv9UMU2oX76AJ471wKNeTpPLVRA5VGaGM45a76UdtMUxzDu8Z3g6M7tgCS4UkN8soeNfwJxit7g",
  "key16": "4jLb74g5KgAqsu9LCKo8GEXsj1b85Mh4tk5LdNYs75geTJLLDknuHn8ZfC6DiRmjB8aj8EjUariNqtf4xtmoe7L6",
  "key17": "653fJV8HUyHLNoNRj7MwAFyNaMtADnTCu6yGJXGvn4rysqhKjoUtYhTw9kASGQd8dczo9KmimQsEEYzgMa8rqpKL",
  "key18": "379YeoTcbAnfHDNhefu7KgX9ttCe8abfDzZhfZXih4SEvCFYwoK8bLvJAWUa9zWzFEPf9yfstAEwLAaWiZDS4AT5",
  "key19": "WWDuQaVW25AQCjzRVWijSiNBYysT5eLnH7uwFePzGzvqj3Kq7QpuisZSmi4cv2GfELypmRvzYrxnKejX4vhbvDY",
  "key20": "FYYgdzohRZaVxVLqskj5PyooYtSthZytRTcXHa2NCJvEB6LAeXKDqpaJUoRm7MYCGjwDfqDQptqWchAkd4FYvAP",
  "key21": "2V1Esu5PnvttZaoLK71NVNWcPrZbrRyQfTLSfcPk4ur8kFEms2k2J97hp8Q8gzMzLVvS4SJ4TJZZqWUyxxUKirwM",
  "key22": "5WYbS8Xw16mzyXeR54wN4FLzwr9dbtQwymeRkH1NDRVwWRJHjshKTcJWmQq7FD7DTdSPMqT9nG8DftLLCvpQWedR",
  "key23": "3Xmp9XxiC9ejjaCdm9Sj2QuM48HZ2HvLmm5UjuFrTkTeUUraj22aPzpkiKnrUXdcQhm42YkqunawyGYx5RJqL9Qt",
  "key24": "4mqhemnMJnRyLxHAFDQwTWPyaZptQSF7Scjsiuo2qXtz3hUkwyHAT9rK5SjuazBj8NSKJo3mjahonEgqBsUbzaZ6",
  "key25": "pw9pDrt1nChF86L4PuDaZqVPRWY3gPktyX5vV1ostLuEEYca1tCdfBm9f1GHrifQ9zsx9RwNa7CmcgsV15MDwrf",
  "key26": "2wWcDZRMNhhj1HQfX9D7fcZxUQDCt8yFzvVjcaoMZFpviAyHnJBdT439HxomBcXY1dXqE7oNA8qFCmAR6ZLAxp6p",
  "key27": "QFGf8cEwczytUaMkSmghWrxZXh4kdY2AF2Ubo8Ei73H3yk2Ji8cArKYmHX6bm6ESkFBnohzpguTHvXimMXNT2w9",
  "key28": "2GKzgjnnmwFsPkoMZLgWXENkL3nh5xobmDr4B8AxHnsecATURvwZsU9vc6eM1fMvTqzJvmH33tDFQxyWv23hWkZj",
  "key29": "5AWCSbdQqndBFQEfFx5Nu9nRCyHmy1BRNgG3KRMckMavwKBRZ8LNfAcoZBMipiNdNXbpKm1CzhzZgeRpTiCkHsdx",
  "key30": "umyifFAcbLr1wzzueUemZ7MMqGz82VNLkHrHFL5yKDW6x964noQeCXLRe7eRSuwJtqSFHbLcJftw9RAoqmiK8GF",
  "key31": "4Krpw4PXx2deqF7qgZKkdV2ig6X1SzGgxni58ShKUQ8BdVmBLZkSLoXACeXdgMtRd5KZocQ9e2brVfdCzM4uRaWh",
  "key32": "42FSBe7cHDwmSf4EUpDs4jwkPR8HmW5Sb1w9wc1bVi25cyLx3aZR9Lh7U1XUZnZ8yMPN2fHA3mGvKicT7kP2DL6u",
  "key33": "3FbJk11CcSrSPNkYidQT9W5ph1yQJuzvt7dRVXbE6Gf4yZrBPWoWVPf9P1SUVPitKwQUQUj69RkWkdHpx3m3gDaL",
  "key34": "2Hwv2Tjqwe9nNzL3vdfygnNGcfgoExWi2Zvp7s98uzEjHLiymbUXnaUgoaVXqVUrj39PuWjMJh8AWxwNux9MqYmc",
  "key35": "j3xJVUoJqVEF7u1JHNq3ejbsK4VRFdbnw1HiThhviYztbTTZJUSbMK7Bf8e2GifeT75hmeZisCTR34jzq4MUT57",
  "key36": "4G1zTvkQ4u8idqA8Uk1cevsy6Ye8hV4Bj1Gqi8fWAqzm7nk7e8XMaGjcSTPkAG6zEmrm4Xmdbwvq9qZBTXXZeisa",
  "key37": "5tiNR18BC8ksHEXPYNuBYQyXYvnEkWZ6NBgA5ZLEssi4Msqt56jWAdPctgxjVh2KtEz8pKKh4TofNdndHH3RecFq",
  "key38": "29RUXEQNuXjsVXHV4PA8c1HhCWp6NzHseHqHURSyWVofTaxtbWsfJQzxUrmbEZcVxjChAiiehegYrXFez9eNtDnP",
  "key39": "42EXBVsWm5uMinZj9hHakfyU2wJ8SAePd3W9M3SZzaxr1Rr4DJtn58jLF9x6Wyj7tJsbv36BRxuWMJTvRDmZxq1y",
  "key40": "Us9SciwcQnCtgjEmWjQ2pCkGyD1We4d5z8dooNXejACkk42Dv3QruZhaWuqiJqHHdDJhZXQZWG48xD38xRKazkf",
  "key41": "5qkf4G9mGnhP3sfZvrN91JaS4HBrvCxHGZEdR2EmpWJgy8qU8FoJLwKtWa5sdJWQna8hRUWNFoHkwn8Q1yq8EYSR",
  "key42": "5m1Lmf8WpwLjeMqHpfUoFeZ89jpr24PtETyWFyxMgPTVbmSgYXjvhrmKUACnp9QESBxx1epd8W6zPXy43n6BCFpf",
  "key43": "1h2MT5teCCEuFPcys3GGH5uVJHP1MnDkQW91bRNqMcA8s64uCcyXZcZA9Guxo9uv2GTcFHUDj7NtRFE5eFN2W2g",
  "key44": "4ftMKVjvKGCGE59PJwsG7rZ2EWMHiF2WM5NfhTqabYGsakpPwuXknUVGMzqxeZybqpj1vkFDwgVP1wBftXwFefmy",
  "key45": "28aLZTqLQnZBx9uKNxEWixsi82WKKe2Sh6rrjiniqBZwpFd9YLTZZrnZ2bHeQ56P1waVGzvTNy2h21WBMF5Foak4",
  "key46": "2TxAsu1JGLmmE6JaM5oCKuGohbD9JHaz3w2Dqi3y5DDfkFmNwE1iTSwT5e1T4UxrBdS8Z6kx8qQg2fc1eYCXXBuv",
  "key47": "6VNzoC6t5UEJyMAu6t6uCZ3nh8cSL5uftFYDvNb9axsMnJRSdxToX2ksJioLK4wo9urqTbUrjXiqQkRvFACT3fp",
  "key48": "2e1GVNRSkesCkecJVyukAFLJASBrBJdoox8o3D2vNbDbJKoHKq1qpebcmNYJrAQNURLDespW9X3kYR3C39eKuyVT"
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
