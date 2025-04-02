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
    "4G7Vjgs2C3aZH9Nu6KJKsrnFC8aszDhiftNnpyZR3HuCeCnAaaAQSvpGnHjFMr8pmNnPQf4umQcV8SqXfLvjCdXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CzuQMCK2SdRBrhtnSbMPLbUAhL3tMaLW64zRMMFxTtTWxBsCFJnQYS5ao9BnHPxJ7eQWEsTDZkJvLC9mm7SWwNS",
  "key1": "3tNcsPaemDz9znGM6DeUrUzvBF2ZTP8PFSp8sDfvqd9XxB3DJF3ZRyvPuUCwbZwsJ4bbg8mE77eaFzmJUd1Sbtn5",
  "key2": "5sZPMZQDmojFk7TSYSyzVa239U7N3wFWVDNAbPR9pfhCUQTMy6sVMiURs3oror54TT6pfdoEuHamHSFwgPQHhMAT",
  "key3": "45d33Ch6pCD3wTEqevw6LS2R9Guw6tEieeXhoVAZPG9T7Ehi3EkL6yT8mn89dskvgTJAH1wgNkSKdBUyoYDGakaK",
  "key4": "QV48NnUXXNPB9j4oto6Ext3GiWpgP74KUtBv6ynm5mrLPhfDdKDxg25z6q8JzfyA8G9JkrnYFLEkjPJqJb5sqFU",
  "key5": "4FN3Sbz84yDGpX6odEywdncGLnQgbrydLtH7zRSMWZzj6hxjwXG6E1qb6NLCxc9YLM4BLcAtmTSFCWprMCKMbpMB",
  "key6": "5NDKNov4uRMuCgKRhNPvTWJwkPedtjRD8VKKpggGj21tVZx1Fw24bCpt7kJfpi7pdK9fmKRpQoWieTJvhhWxe4PY",
  "key7": "4xVVZDCKMgZoLAmSRZ77qrBgwPvphcxvM8aUVPMPt67TiZ4NmpN9qvz3132V3eQLtMMhYrXJpMN7JYWJXGsQkPAy",
  "key8": "5mNKL61TePjSwTxeyJkxRKAkwGfYnEzmFtNSN4oGwca2pVTWtNKZYMGkwGKnqFZ13rC1SciwdBgLWvp4R3WmixZc",
  "key9": "5kgMPCYWJtxngR1VPhQNtcz6X45LiJKV7BjUt77HyJXWBJbxm2MMLxE7wrGc9zrGCwCYsJBCrLhRBkA4a8cWt9vp",
  "key10": "5bMka4uQPpZMTDyJztyruqRdde7d2aEWZFyUJHD2TZhBoAmCnUySNxenZi2ADv4iYdtnM3CiaMCfv4uEhEitfmir",
  "key11": "55BZV1c1LWyEM2YEwSZhTp5a1pb3YECPHFnSE9F3V2KpKkE3WsFcVBgLEoRFZM8b6V7b72rKGZiSnYU7Gergqmqy",
  "key12": "2TazYc5s3QZXqAuk7wXECmiBrqkgaqh8Na66n3jpYcDzNuE5wYsPYnFD3Vh71o9w1BfChFA37uf7FmiSxcNs7eGb",
  "key13": "2SSA7mC5r5pU9DJWPfjLYYNM6DUxgdtKZXyCVjqZogkHUwRqVcDZHCqAvP74gb2KvX4buSTBfP7bZwy8oQRuZoyi",
  "key14": "3azEJtQR85ykozJ1gEUjk5Mq2xcJhECkpgdmhQrfxiYGuHqiBL1FjovJkahQ35x3e6zbL33crUhTgyvhkfQHWQcH",
  "key15": "35cc5qQDr3aB968wbt54RYtri3oZLZHE7vQuhL3cgBwbnjFum2YPj7rsJotpz7nmLYjhbxzYpHWGXWRF6vNa1pLd",
  "key16": "sxA6wX9dZzaMpbFHZE7ABYvbRGo3kUxvGVAVn6qwYcDfahtCFEpLkfX3kUCZMHu5UBUZUw6EinAR7a8zHzz8eF1",
  "key17": "mJHc7V9ZJsR52DcL4Ps225ckEF3Rke1MSE7a7ZwZTc4qfqv3SDGFbqSLD4ghKw6zzwiYciT5AyjMjbGod5HzB6f",
  "key18": "3CukwzVDVqnhjKGwwZfdsCpDxTwRSWwSR2HhCQvbB6u3kDdmCs9qMkR785Ls5ib5aDGXmagAQ23LDFniSpCU9DrB",
  "key19": "583LFfQNhFMyVEJe2oFwWEmvepSvjhoB9wzfbrLdyT1S2CYtrfnHvE9vbbKL6HJwvDSnRWfQWLTjRR5W9ebG2qfd",
  "key20": "3n79kmcXHEoXRqoqyHRN5vK1YZP1o45EY3qtLVP3zFF9BEeDYyWbyvbbjrrzB3cTgnLVAv3SMmwEQSaXBo8Cn8mg",
  "key21": "3DtostUq8HPveDiyJzRnBL4rx2zdq5kiYBxp8DQWy55fbXCdYkidKvzDyrusi3nvJMwscz8wnyMfXwreFcTM1DTA",
  "key22": "PpkzhswbfuLo1wmPecexecYBddJRokjj9etpsAxDEgNPk11okfL7j3rbvTUGpb53zttY6mxPsPE3ELWWATBEMcM",
  "key23": "2h7E22Q5b3LeRPDizCwk1tG91jwmu8T7haR7tYXgxtXMvPYCCfbb2ozH7WK4r8V1iZo5TunyhQyR1GHxVrsJcdoy",
  "key24": "32GvUEcVg3gYgD6uoRptfog1kYoqjUdhMaiDkX83AapLFyWFXexXeaVC3BRCnaGPo6VH4Nrs8GLPLwKfbr5bDboS",
  "key25": "29JGiQa1ad9Tk3kSgVCUtw8paYVZbUWraokvcdRVkf3sDziQgeK2Vd33MTTD9eUWtCaJZfjdoyksgEWWJAAeoGWi",
  "key26": "5CjjrU8YxtiAiL8JHqmZQXS3v6K4kj5L7QVUWfJxGmvXehGT4sjpT1sFrwSw6MeSFvQR4n1siXi9ERYQKbbiUXnx",
  "key27": "5cW2DP6e6bVtAwdp2pandnv4mS2iuDQfKcLfQJJ1Ky7tFu8fmrtNoopFrZ667NQMjgH3W8ds8SZScnEqX2mZhcTa",
  "key28": "2uUZvFK4RqBYmT7CmXL6zqESt16fuUNm67MsL39BP91r6wAvV1DfV4ZE572rHfNh6rhFSWCn5BFUtdJGR3UfuMq6",
  "key29": "ZXTFKywhYrzqijp5rDHyRrFunBTMX4UX5vPwZGN6YptESWrghGp6ATmGh5msEeFmKsSJN79AYAqEPbdnMZa5YV4",
  "key30": "53hGNh7Xs2cdLFUor9KF5zSbNYAQhBbhC3LVQfdAwa2LFnVKBosqEDykqcQBcFSgKv9gpTDqY2YkGu36xRTniKLq"
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
