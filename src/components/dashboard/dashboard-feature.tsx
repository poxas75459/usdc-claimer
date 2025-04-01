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
    "61RDj4vwBt4N2bEU3XbwaTE34bYbJJWvF6Dh9WtbN3dRGh348SFUk95kJ3UdFbCtTppyAebqMxA6YTyEKsdJK841"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43LdK6hqpLzcqmwhJ1t6mftJd1tNF3FeUPshJ1wVRsKKg1sHP9PvR6wg9RsUHMFYXpiYJe75ucfZuv1Kj8Xc942j",
  "key1": "2BQ3qaEcUeFY5oLTsEDzFYGNimnKcmvRqopK57upf8b4szyqm9tyXveR2g5mQCPVZWKzX2eF2WuVWvLXkVwdy33i",
  "key2": "5S7QfNBVwRx2sZ2fDkgdaJMYtF4Th7dCr9pyZ5ux7HjcLyz5CrK5PooPQXgHJUCQj48kPZKEuEFsnYxBcjNB94uk",
  "key3": "5urgWXMbQsXTLKF2S5nDZBra6CDMj4Dvma3Uj1L4L4NbLCoXVGmv3LFWgBmwrY2gRDkFaD39mn1ooTXku2TArLPF",
  "key4": "3hwtMJnCXj1fJtwLFXa6G3G7dg8LpJ63JEZEpbfm1TEiwTyniLdqGKskGMu5zED642xMrDoZoX4dwKwkqzFVGTuz",
  "key5": "32GtaRFpGwJHCtEQWeHdKzrWh2UyHUqKHLyS2rm86UWmtYBTi5nuVxS3ShTAwh3FYePRJ8iSoiKHty6SGtShFn5Y",
  "key6": "7hnyMnYNxVfeSPsYxaUYdGg2XHx2cy2vrHGYMT4Di4hJkQ3Lg6MRWM2GX9zpdv5AhzQtFa4zjcQMAm4Xzmas1zo",
  "key7": "429gEsYfMTtVHo6jh5QnJNMRFpqRKyYNCfE8umohPtaSRfTcQUGvUADwQnTq6oT858bCyUYB88NcrGP3a6ECTvQF",
  "key8": "2byEa7UDEtjLzAR99YYjmkcDaqkbsuMvhuKkKw72JoPpF67dceXs8FHnbLfgDeXHXFzUM27kGyfKN9K6VsrJ1aW2",
  "key9": "3Hmy43qH2d38odeSfoe3riKRbbwT3hcSfCMydftYsHUAXQ7bbiEi163PegfAYzxZbARwUsJ8pwn2ipe1kHxf4LQq",
  "key10": "3VXzoG5pmaqv6932wTSFZaRiuzDinafJCpEMWWtwmeArwMiubRG3WmKQuyMjSkVdmcfGs6ELPT8LqVRCdqqsyyfp",
  "key11": "2uU2ohrTikp9dBs4RdAF477Fs5DZL1iwqbmooE2YswpBt4wDx73Azgj6YnBBXRbxBz62zco8q8Lvfp9CUSeiA537",
  "key12": "3AGhdJaDueUsXD3m1CRTJnbNzi8tc5W2XkPRvMSikwzrMkyB7XzEdKnv5RDGGSbTu189cW9Mh2PQEFa9zQKM9TDB",
  "key13": "2fLr3R6ut8QmR9F3MPMmHjFDBXZc1MUTQNb7EmGRAY6d5sNEePmX8bPpZWvxMDJPyRrzsRVoh59LCghnbn9rGK76",
  "key14": "43gEW7HCLDiu8Nntvc63DqKZUS2qmv8iYjtwHY8AdnqPiZg8bK6fwAqvrJ3BhGTyjHhHmKR488suy2ihLEWXaa6E",
  "key15": "GjUm7h2o8mL5M2RYyve5YLve4t9MgCmZrwyra8Q1YuDSBdX8FKacHvZxVLt3oCVEtiJxR8NsSssw1ogeuSd3HJv",
  "key16": "3E99asaZE2iDbnUUQtWCdX8cku8wuZN4kjz6KQePYJDXaTc4LautjKB3pHKyXzEsZvvBHuA9kjQoqu3rjw6k69CT",
  "key17": "k6G4dda3ChhjxihD4pTsSPX1jKb4Y1HVFhNHLNPvEAjADPLi2ns6FZY8kQx4uRExtbjGpqDhDMxNDHRfjuY4DeZ",
  "key18": "4sY2P6xsusGhynjdBv29AvAdi8ivwTy8rgSPSpN6A84i8EjSVe83Q59FTpe8vTXFJ88iaHBRYr7XUEP1DUm8FYPV",
  "key19": "23aV7KuH62rpSgqtTqLWdieL8PoeNkpCxA9CFhrsbDhA7foRqBhL8oyNv1jRbp5GCNGCgQBmG6YvsgDUrkd7jD7B",
  "key20": "2tdbg81a4FXQGWJ3BUQeaiHqpYDBM8wazxJfJajRsp3nonezFuwsQQnefCsYfir3uYdEvEScMXoLE4FueyZQKEBb",
  "key21": "xy53ZMW4f7K1tW9akQFFDrhP3thYK8Ca9Lpnt4uUGunt55CakB9e3bfvqEUMhKHTMfPo1ADhjFfcuPPp1pAVWm8",
  "key22": "2gRXvJwhcCLjV983va946wxt5hXck6gnX2N1deGeAiQdiN2AK5xBhWzY9s1m3qiwy6WXX3o5fvBS4Y23KipL1pTt",
  "key23": "5atrxTQMXguanDPmoMYV3MTh74ci1MJJWH4ieUF4myXDxjXUD3JSR28ixesgPyKDUe6qDPZdkydKxtsi5oaYVhKd",
  "key24": "37NENR4vqvsuAmKrngfCtPAEP7eRjqyvWG49RxKYRe8CzLy1f9EgVRpynxfe4MMEgCG2LVT2cgmwckUzU7MF2HxB",
  "key25": "47Zub7Qn7RPjuAGy2ScAf8E7iktJCG6ydk9sS8bPqDheojBdsCnMPXrcQHqB4CvqX44LYutZ9xw4Quxa28NsZrYM",
  "key26": "36BmWLfgY2Xdry2csJWsAhwrNbwgYLgdyiCmczVWeESvWRg5pf8PEboenU2enjwWucF9xwxsiKQzZaL7cvojLJPU",
  "key27": "4Byn7CpWySBnkP6jBG3uM6DdYgQgjQzfYsQs44VjWiKNHkkjQTZ7jAXmxTnyq5PQYWtyjfwVoZ94hyu5TZJKXZRX",
  "key28": "2MhG2PUVnCh6kqHw3xmt6DU6a7VaD97AvnASPKB8zAqDyj1ydD6fAew8b5xpLz9BLMVRCAoQvEcgkD1yWgX4qC6Y",
  "key29": "2wRZrRFuaxqCnZVQvUwmeKcqbF7MtKBYGUb3J4goG5SsxK3YvdnLkHZWgzRvg6W7a5o3F7FtENM4zS2fhPx9bewz",
  "key30": "5925SHqiW5MpEm2xAG2YMEw4siXzWe5AnFtuScjK575KoPvGHgY5bynzCSYy59dxf6dsJyESGQyPnZWqSXPVuefC",
  "key31": "2AkpadhJoKypRzh7TA1yn5SfiiDaFSCb4RVAaXPAwAzd5gBBs84NAnPcvK23YGeNEAxTt8Lsa8g986pqfbD3ZaCF",
  "key32": "4Vjnh1SFhGW2zz9GCbetyQFXi8ofkyFNKfkRs8ZnDsxxdcLwXK7kugBGrwQtQQynDECwggcsSc6hCf8B9tgaDVZT",
  "key33": "2HvzW3qYzVA3t6prUwC2AsJYiwnmzC4gSJZTJcNtSY2uHtWWACt7kvhsTBE4sgPbdreH5FKd9ichMJv6dTLJxTn9",
  "key34": "AjPd1EkouJ47ezn6AcuFMoEajW6WCXs7dQau3Y2hU4H2iSUPnbZ4qyeXaKgNPaUg4j11oc5YGh1rFeFpXiTHz59",
  "key35": "31wW6gL4GhBHMNjnBdgbHk8BAi24aHM499TvwXX9XFf5yrA5dzMSU12V63a2PoBXVUShS15uXvgxDLFPArKoKKfc",
  "key36": "2FXrQTcHAzewEpTD2pXVNZKV3SU97CbZpqt3CHEAniVpjTRz18SM9tSmfmpvheHY1ffBNECkETgQjrq6RV5Ftzny",
  "key37": "4WHbHXNazMjXAAmYp8rkUNAyLtB2mrkUQf7DzvqHnNJ9kEimDJWhd4FEtFkyyfpBa3zsY5wbxVjpm5rPcnHguZbM",
  "key38": "5rMGEtPkrTHxzJESdYuGwtTKZw8kwE1QupnoYXHKN8nZb59pB5HyDx34KfdophtaiUT6rgLMhVF6gqas7vDSntdY",
  "key39": "4jWLivgDxc19VeU8Jthrxnoo53dR3PfxMyWmQnSWFqSJg81GnTsRmk7vximFNnuAy4niQev6VscUxYfosfN6xuJ6"
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
