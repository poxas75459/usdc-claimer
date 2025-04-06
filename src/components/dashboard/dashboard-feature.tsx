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
    "xZZz3ZvKBNH7bbH3MuBZLeDqC43ZonF7ehviQndZBdSiLFvZL8yfEKsNSUYzqyscUTP7CzgBVF4ht8oj8XvHq1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o8Hg9EtbC657kSxpPVhUaQqrkwcYZzvXXvBPEVwLVDHwqxPtNJ25wAFaRdxzfusYXyNWBrrvUD3MqJEGMRvAziT",
  "key1": "4vs9vx7G5wALWcdkHXDFtB1885uDrq8uNRoWZgGreLbirS5frDZbQJFkjpSnjrPpKRYgXXYC7aXm9zoWcCgrMjeu",
  "key2": "5X7ALXG8TwkyomLv2m8i9j8iZjSWfptbP7tE9s9edLQmFBBP5osDKrwTf4ibT6CCrUL3ptgdFTMbRfTjgn7BF4s4",
  "key3": "5Mx1vK1efzEHDSDpsYcQqXbzmEdjev4DbWNgtpJCQwrY76afbQGXnD4yZYYWXvaDYLzJF1xtrZPHU6tLSA8VYmRZ",
  "key4": "mWswxqSz9MvEpyHkSDXnTABEfFi7qQKJx9ZLSDD55u4jdCjvF1jGARj48vgdo9zEZbrVgCxq4zPKQFmqnCFtVoB",
  "key5": "2oKJymYR4LxUMpCer9wS9KbiGMxviSS9KMSzKDUrfXvoDzWDLTEKnB3NM6kxeBbVC6Fi1uNShdMuRqombPSso1Gd",
  "key6": "4sCf5hm3fQTWH3Q6TUqrxYR6Jj9LR2rUkhT3vQMdGi93whP3rg6eAmUGvNGWwLz1p5KjXdfJYpK313zMYSY77fRE",
  "key7": "37cfrnqAcAk5qjm9hbrmjHYXX3b8J4yfywQesVWXRvh5B4a7e3DBTcd6aH1ZP7MaCXeDUh76J4HVSJhMzGZPFi7a",
  "key8": "2CBvAVtaqfsrvHtn1G1KocEmVj8YJSBn9h9fxYuDuVrfyrHMNRDDMtM7hMMkw7qdyLscswih2Dk6137zsXLUuwWr",
  "key9": "667GgRTEtFeTTCDp1MaXL5kwLRsxQNPxLqXVkmQ6xavarRRWQLUq8E4UR5CoJmiCXq2n1jJpfccMPN3tDPmGMjng",
  "key10": "gx5XTahH6oUiryc7JARhWJFJzQqsrsrxcg6VDXJGJjDr6QpUVww5D3uLW8cQhsuUR3o7bmUJCBQG6xBesEzmXH2",
  "key11": "2e4eEJeCue2KWeqLnBRyj7kvcWabGodpJuBEWsjAhZu1vCd7K9XWSAGZ9hua4LkGfrBUn9rQV8nyRpbvg4J67awS",
  "key12": "2Gf23gsGL6c5E8p1BZRwkr4XbbuMjBsfYBctnDUHurbfRrijPbK5nzLKwf8kvF4PrHUUUNzNajwZdtcCgwY6BVbm",
  "key13": "2b7R6GFwgF7rMcvnwewC19zTHakWutiq9XFsfGbSuq8G59xkMXV5xBAb9a2XGV4fpFwKL1yUH1qnDk8qiESXfLsW",
  "key14": "2BXwaUFRSzYb1x144RQV5ioWNVPyMumsVnTjn1n6gBKjH4n6LNK8jfRKCVxciz9cFq8mCCXELMQznSf14pnR7Tsg",
  "key15": "2dcbEjkNqoNedKAo4bZNrFtLPdv2qceiWXu4QqebFonPg6UxeiCyzMeMy4h53p6BLWNF8SrikLBccu6oed7Xfu1A",
  "key16": "2ykx2JryC4cK2DH1Vw1oshSNCGkiHNxnxuxab2FSuusdNqRWSQs22JGiTkRWtZdBw4V1qNFAsodKs8Z7JyfqNNhe",
  "key17": "5gv9JrwrSQDvnxgGmgyS6sagvo6xzBHNfyqnDGhDPd4L5JF3gATARRJocPmQXHYH2CL4LnwXugKg3ZKkD98enF6K",
  "key18": "54fkNVXtsR9GN55wVoREH4UAPCrCoLKBnCYddmGaskL8TU5Fs2WgFeq6J7BsSedX1Rqt2o19YokTCcbQ4u8BeWSd",
  "key19": "57HdG3it2ULDSnY44g7hXE91xxCvjEXX65sUGmsLE7td8ZuFqttmZsRZiAucUnHfNVhdLYoRNLJnLPmY6iAEruvk",
  "key20": "5teCe5ccBd5QPUtcL4YcSkUUYnPCY3AhArg8SVQ6s2JgisXGCqsTnoW2cDoNJhK8rx2xEVyhWzXxZt8r5eiVqihd",
  "key21": "Vqwnphq12zfHaQNX4zTsZftAvT8RaCjhcW7u9Y6DS1BM1pB6TNAwgHxXcvEEkeqTUnsmTeWKe15SXeituFK4pLV",
  "key22": "5CQMFV1gt4XbAz1CrP9at5HekLG5cNYa8DsGj4CCYi9AAeJNupA52i4RgMgvYFwxCcbwQrSpxbqXkzEG9x2xBov6",
  "key23": "4t8c2LbuGU2eKE1oDWEQhtsqnRYar9YoLh4g7FDJN5hfRNdH9X2ydXVnGZzXK2oWwZUFu44CpL5xubwKmnPVAqoW",
  "key24": "5f38UoC2Z6ESgbaaEMck9AwnxFJGD6C1X4wQFypMtAoyCLLSC2Nm2rfSDsZqcpGdNj9c91t2Cr9j7aGqnGPyb4gN",
  "key25": "2XBZQpw2Dkqy4vebaEX2d99bwxPZhRncRk1EwNCMLMA25kYVZ4dvPBbJUmAYgLJBRXztBZNDPweyE2PYxXn66jfL",
  "key26": "2sUhWRwno8UkVGi9qoYU73XXTVs9UdWi7uePqRGxiAid91UXHrKYY3YwsvyXQQhWziDF2eDDFLe9NS1Z1zt5iKHb",
  "key27": "3qNZ5SVkTdgJRXrYSdYfxYskutkAsk2Qv4KnxSzi48RxtVHLXNQucxSC63KxdcDkN7ehNMZCtDBZ3AuxfyetT81F",
  "key28": "3B3LuMCNwVCDwB8jLf8zpnch7dVoprSeQbQgRKrUQ2prWGbarjJpGWyBvWJMQCSznHTywDsmgU21qoxsHRo3zFW1",
  "key29": "Hy6s3QHayRYqEKptsb5tJW5GzfUTbtYxKnMid9cT98ogFF8YQP3JKaTTQr6dNJueqcBEdaMKMa5Vr9J8fW33Xjo",
  "key30": "2updaUxMUdbF39A8ZAeWCUzUrTBMouLAPUx9RA7b9H5mAm4aSPERzXjgH9b9aDhvmCfCsn35ZS5s48xBTNTFr9Mz",
  "key31": "5YEUDuEQFj6eSB1VXMzLEwVtQASTkcGEKLskRcHrx9NeX9TUE696zs1EY8hPRNQL3CGZBinkruVE7jgPkDK3Gak5",
  "key32": "2B6mtwKVTFjXzZ24s94YdjJ5gvJfz4Pm23X2RqjnpF3WiZiFyjCTNPv44kw4GpGfS1EWk5EvmGQT13pfrS3dx8af",
  "key33": "mrg33xW7hAhe4mwrMQmNiAai6CLPDtNQgQ8KWPRYECtmD8Uj66HxL7f7LAsLB2kaoGaDxThWKfDY1Q1gzLckGFu",
  "key34": "TTrxZsUpZ77x5iXJdV6b4cHnSuVk1V1Md68uLN573gEQU18AMGc3FzrRMQk7Rrj5CAzvGQyJ34vzus3wZjcVpS6",
  "key35": "t23MwP9E35wdR4JuyXqEkmpA4513k8ag1D5ujU3WzfWohWhWjra3Fs3URNvSx8cpStjUCfc53WhqzooJJ72GXUp",
  "key36": "5nntfDcf1fP9M35eEo57KB2LvuUWWvLLuD8CQvgw48tHQ38QyzhJ3zhm5wEBmGrEsAgSPapSKrpRjavEPEo3kFWw",
  "key37": "3SYCfDeE3EpZqeZL5hPcRCWSaP6JxFbhmGhaHrPHPG4fNsyQkCwWQwov9uakGwpDd48t6nUKpoQtAffQeyNJX3f6",
  "key38": "5JowSsHGmUybQ4rz4NNLPFYLJjbMSv2HRCVuKKyc7DHDfKyBGHur8xoGUsviq7gnak8WTQfh5zF96GUG7NqifCX7",
  "key39": "puqu6h6LH2tDYzrPLrAgJaufpHcD3r6xW8ukRgqVJcPzYNkzUwEBiWKuk3sGGtByeFRpFp5H3KMyLdhuUMqmKJm",
  "key40": "65xzQXDGLfXsGn3ygbJAkoyAcKt3NSgAnj6xyxduUp2NekrvVpkmQDNupxvwBn3iWaBV3f6tRKUo4p3EcHWB5L9T",
  "key41": "3kL5eKM9yRA9vUHkmhqqZek9bzGrurMqRCcR3K1Brm2YVnvAE3gcLftpvN4YWPkXUUmDRd4UYFjLgVHjxeBsFkBa",
  "key42": "337k4BCAvpCaMEyGrfhjMLULKyTbyxuEzWLWM7pmqErqGRm3Yg9SeaLrJXgqDsXanhNJdf3guqDmiQfNwiM1kurt",
  "key43": "VXju4HRc4hh6pneDEAnrQzEVE1EjxR966ZAP6bde51kZZHrr4SVi7PHkk8wQ5BUWvYr1zDjjnvbibhitytKSAqN"
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
