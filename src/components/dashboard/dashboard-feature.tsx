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
    "3txy6GsYKBppo9wqvFwq6NYqDgFgUJ2GBFPSBP6tNAQq5a8xqYQmbSiQJzzKceGEyJUtrrPgCFd4A9UpQMnNmUgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yKcE3GvzD2dw9dMtwkFSNQYdPcshKVvej4JEba1bk6hdBU5CdMATC8e87UnJ58sbLocRjpyXEYpa65Qqtg5BY6g",
  "key1": "2kVdPUSGi8Kkcd4gFuzN4TPoKfXU3Pfjm1HLhXASPp4cxwCMe9Nb9vTac26iabfXWrkAL3YjeSJckHxL1spGcEkb",
  "key2": "3cTAqBserUKBQfqHYQibhJMNmRTjaS1ftWDR9jE2pq6mLdcZSbGQqw5Uboxgxy6b5sJEyx9d1UraucrDnZWWQvSA",
  "key3": "5r8gDVWcRBYm1oxiQccWP12oagHKmhYK1FLoKoRHQDFwrbWJVqMc9crNDR7qBv8efmMn61wdB2cZfVAXdDBJD6hZ",
  "key4": "3hJ9w2bth4a7rPPNrmEDdzXN96QW1wou5rCfQy5WgaNa2rg1KV8twkdSML8JWjSGoJ89CmtmcvZmWdYtrUmWQmbT",
  "key5": "5TCX1vWT1tFFySF4MVgat28pi3rDVv518be1nE7ppezwxhhzu5T9Zx15qQjT1LudxFszdTmjhV5MRBvPCns2qfFv",
  "key6": "66zZbZMzJvWqaB2LBakJjNd9zg3XtujhGmNKgabmDmjCWfgk1R79aYNSbNHFdjh7gDrYDSCg4B6maY3HNRyEDcud",
  "key7": "48d5LpdJ1eEwftvoEQ2FNNHHVC76m4EnUM9eWjBTKJgAjXQ1WqkjEZ81HAUS5MFJ4MyTDhi9WsZCCqwDGpqVEC5u",
  "key8": "5uJZHiHYPXnTZSB7dYnFAnPbmpu7rGwRamMHgtHyUEQmz667EPj3v9tXJdW9aLcA4QmgqEwumfT8YLPpwpfmRV9H",
  "key9": "xhDPTDt8uJo4qrtq4KqFBDErYDbV957yax7NKuHZ5HjC2bzc3GoCmK5vYqotqGptMCB3yJ4mSzTskS1iu67MxGc",
  "key10": "3kx23DY6XPkQeR3z97tpsRfMsC43xjPyHeebx48WgUEGtf11tbTRNPBZGEdLKsaRHk9DVZH1wduLkzsVTYN2ZMCE",
  "key11": "4fTNuR1PAk61JnkErGpKEfedaUoCanAPA7vKKmfxD9iqDPPjPFCZYjQbnQkQYAhghKqjUQQzXRrP3TQ1BaXf4yga",
  "key12": "4c4QSLhvnoWuXRhfdA72V6AUzrXTRQgiKjZLppEJxUwkrPkGaZZJcxpfb1tL3tRXK1WKdeDUssY66T6pmgDSbSuR",
  "key13": "HHaAP2drQ5sJzfzJG17auHzq5uod9buLPXrjRRHnCuDZ4Luz7LGVwYvX8DBTsupKhNvvUKXTDsAGcRoY8qup6FB",
  "key14": "2m2vZkVZVP6hHHhgQyXzJnvRwk3yXxaL8vrHEVCDsb32Bdinxv85vejfhvCaAa1HB7e9juPbhCjDL7RKXFYYckD",
  "key15": "3WJJ4zUENS6ACYDvLNfTcjdMnEs95f316GWPxiaFaADFngW2HtWFz1PPRSoqQ8cv9nWwWJchd3mVsWZRHhfG3CAC",
  "key16": "51ujXusG6SP1B9V3UG6gkPpKBijbjpTRLQqmzZb2zfRzx5jPRo1HHdDm8bWExzNXwDDrKaoWGsS2S2v5nd9GW11Z",
  "key17": "5yAyYdH9GWbLnx4GybkfBjriqWwNtKYPqTDRPjSQ75L1RKcxKm3oN7uc5R5cRezq9YRngcsc84MyPahidBrzTMVL",
  "key18": "28juQNHshjKdpXbmRfPPvcUrhgMcjpCbCRhxwjdaGfJ45r4W5L45UEWjsBdrLxAGy6xHCWueEmhWnKAzXHB5ckSM",
  "key19": "5xrDDUVycXLcCk8X5MTVCgS2mH9p5JBzzje3u41pxCLFZQ2Kt2iuLn9gC1dCXTiArDhgTA6daMJ5PezuPkm2WXJC",
  "key20": "2U4AeBGiC3YeqSEiKupQpxYFqDZfYJKA8swvF6iJ1P256q9bqfmSpsknZvTthf2mfh5nKJs84art9yTs3fQZmeX2",
  "key21": "4gCSY4uHF9R7MDqTryYbkpHQKaymVZp9YBEwamV5RpusnXE5RRjNBXdaYycha9dAEhwEbmhivhpph9sdtdwCQpC1",
  "key22": "2iqs3cBDUGWy1PoDUYDyR4uAYuKRGyfDZJVjuRVzGxnS3ueRX6pUsVK3K1cnmumMFbVXH4VoyQrJcnMFmkxZAUYT",
  "key23": "tVGYqXyb4ob9gvSQin18bztJrJap7Cbfh9fdLRdyRQ2GVAavrX4YNYyromSBnkx65KpVRRYCNPbdQy254PG2TWC",
  "key24": "4DdLb2vzr8AdPBEsZeqSNY4iGSN5MsJCabafNgXLAudDz1qVdhWjwAtodkNPFojhvYJc34uhmkDfecFFEZfy36hp",
  "key25": "2JEzRmUrR9XPiWsWwAzbVPUWbhJcAJGRAb8pBCTaug8k5vVeXrLWjijK5TKqkbC3Wh9zRgqs3k5HwwrPyfR8PZST",
  "key26": "2BrbhXYErtuzr3iQussBETtobPTDZ8kpBgfkSSiQXHBJaYdRWcJHvhcZCFiKKKg7D1hKZvvajF16g5GdmXLnDTb3",
  "key27": "3y7tLXSkHbhxYPPL9TT6C7sLw8PiL9F9Y9CoUKzaD2qzqfkAeJfvcyrFUtXX58DZcg26i8poL9iuwT244U3GdqMG",
  "key28": "SjAXT5Srndcw7CoXQ6p4jWksFoTVGqVKAj8SamCMbtFDQRW9FjDCcnCSXBMytyMrAVQ7VsPpyLgVgpxKibHHXAD",
  "key29": "5EKPeNz5bkVgwVUrnCcz3GDQwpJsEHhH71HR36E6f2YkguQq86uTFPk2pfQJJ4s1ZBWQMV5KJH1EQcPjW9pXTR5y",
  "key30": "MnzLNq4CpZad6fKdfqPon1MhkXWS1ioAZ3JNPonQQWawpzDyPfxpbPvqXWKtmHtwFJg4f6QmzAwUpQiU2cRBDkk",
  "key31": "ZHhqimEth2yVCTJR72u5LZ8zrn6zuY3V8ZDnsjxz4PfRXS7sEjLmeznLfBiUaM9uW9H3ZfMbL5VnbyL6ufBF8sP",
  "key32": "2w5kX3DdQrRmFjnfHsgbPvg31uxKdLtN43VLa3i6iaauw3dgrUArtVJXBRg12kuiHksy3yukfCePKanPDU1hCrv1",
  "key33": "2cLcUASqXtu8ouZYxQ33HSHxodyUyvW5Quq89xMtpN57AsJYTn2dSXVUXFe6J8CHXugWwmEkrHH7u8P6zXZGyizp",
  "key34": "2Ly8DxedVGrucivXhvQPq84WDjg1c2NPfhxdHr45BnJM7Dfodx6VnW7NVdvQihBT8cTWMLSRgXeJpgePNgsVnHgo",
  "key35": "3UfpSWhtKnxyBF5HxUmEWzcXHeHyknri7ANaZy6X3dxBB5mJ3Ej9eQTu1AjKUkpTWuReJospnRfaEYxsNth4UaFX",
  "key36": "7ZuYU5cB6YySVR2erUTGPFeLmMsHxBJ1yzasQ35hFjRKhCXeqQKXfuvuP2KQXdSbUMfGuqbh84D2rBbZxNsQ7Ck",
  "key37": "2uaKVjzEqqjC1vwKRGNFqHUkXtrM1t7DjT378RkfBQE8yRUpNuJWtjoMsdsmum51px16tfU1hT7kD6rXUAcB8ZEM",
  "key38": "5fMYLWTMJqhQDRmjbsj9NREngQ4KQviouTphD8T9jRWZKFEtpCC6AFmSmniXxsd94EPNjnNa7MCekjfDdDgHPEFN",
  "key39": "2r35x21WEDArpocBQA9JC7tvuLFRmtW1iABcwHxtyEFFWevQ698KCu12UR8xstRWpqMWzqFfpXs9MdxKUUcy2GuY",
  "key40": "2yTXJ7EDB2B7dcqvDsGi6zdNLhsvVfPgwVG6citUjY9m84fkzpHFQAn1c8akBPufNCRWG6pKAs1sKuUnct1DNkiB",
  "key41": "3ND9TSTccLjsUgELSd5C36fpvA6zXufzBekFP7QywtzKvbcLkLQWvfvLp3Nx9VJj8WfggUrxKnwSu851gvRBpYYw",
  "key42": "128dH2vtSDvJLZ4yBL5ZgX1Z7RvDUUh9xmbLDGTa45ZzytZeoDRj52TiHYTbU2MxCtgjV4G27UesxFm1EC8kL5sc",
  "key43": "2N1TCCuK6GzTNNwQxiVS5fPtEbuTJcVFyD84NTsARpzC7LZimEFDYuVJk7amSDWJDf2ajPTfbbkyZG9v3B7SYU6t",
  "key44": "3TX1Em7bZxdkWPdhG8GzSSxDMRQLqxLVSRJhV51hNqosoZDJtjsqemgKXQkjxaH7bmaxe3byTRSfehtQKN1DHhJm",
  "key45": "3T9P4jxSvKQu3tvuK1MmfvAnqxqxChyqwXm5iycjGyypX4oKS2m9zJNmToXhevmQm8Ak6rmo3PtgGUSWQrgEuHrq",
  "key46": "5z6mtm8tH3c2b7kGGbX6WXhvnksUSHaxb9CFPLZqdVdWi8zHsYQeVAsVKkfk2SGESvsa9mEGVp4fuZQaksSqCzg",
  "key47": "9pP1Hhfg844VMcMX38XN2u3aDFde4sQXgDtxdatT4JDYWTQK36A1K2udregJT5b4KcLFzmKUxbFRG3xhoWNguGy",
  "key48": "5oeNQxrLqLxSikjXPi9xxAg85eVwBU5Ee6WTeaMjLFvorLEUu3jiKdPHsKqGFQWb9q45Ks8Q3a8kDbCB8i8QFNVk",
  "key49": "3FBmTNHYd6s2Yf4MawYvkRtKpwAhYNx24vi7g3oS649LKKR8kh7YfMXtK41z25AUNiYx5DAWe3co1DpYvygWL9SV"
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
