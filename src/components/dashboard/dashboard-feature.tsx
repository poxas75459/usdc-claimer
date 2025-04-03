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
    "3TZSSJ9SKNBFwGvzxvKnNh59gC1she8HdTgQBqTvTSNmpNGzcGiHPnvuv5tEMrjZCn2JnZF5rxWBgHhj2D52ynth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q9VYPrSFK9fEsDZZ6QLBx71Hknwk9c3becKYyhTjCdtQCsASkQNRXSCXdmArbmuEUSuDGcnsPAQ6VLz6EFk6yvA",
  "key1": "2HNwrBHhE1HqeGVopDC5zhDptQmQEDhMNzABT63rEt928VPztRxuj3k79K178JtoFU8dx9N5FPVZTiBFB9E4pt4M",
  "key2": "49CHQtwsmPACXJYYoUKgRaT1cPVFc1hUvVmdwZF9w5fUCUbYribi69xg1gZE7fHZiSozoVujktgfcJuxEWgmYH4B",
  "key3": "2okFYaVAFnao6sW4CdK7s8ccaojsm6RYZKzqRbm5V1fayBGPnFdWuTwN36AQTbbL9KFMXaaJdJBpGNLGMPnNHxDr",
  "key4": "3KFw9Urq42vkh4JprDeUPbniYUGYjTnX9DDFxHCk9iym4GjK4ypmMGBvm8MUHcvAWstFvsQVet4BSr7nEZiiq8ov",
  "key5": "64RdWBVm5XqFwFz4C2JLEAXtnpdwH8oHQ9VzyWRBA4KXX7BLf3LgyorE4MpGiug6kskPAxpAzUHk9xj9p62hao1g",
  "key6": "2mitX3EZ26Bxt3uwDcsQcXZuTKwpo5P41VQSeqAbLdkVw2X1Ry3kDDsN9BNtixpNXVQNpzc5XMXb6UX9N2Eb4fSw",
  "key7": "3wmMVyEaABERjJrGUGvbjFcrbk26r8FwK9kRbCJp8xUas945fsudTmmiZVgwGppuQna6xNKRYcbiecNJ7PZaZiLU",
  "key8": "5gF5ZR8a3SA48dDLyho6MiPRYzsADNP1EFxq5siPfcm4Znf5K8BuKQN1U3GEzy7YSTKLVedaxVJjKKMW76gH82eU",
  "key9": "3YdJUsYqqosUthd8yQfoxYpyxQ95xwjQeAwChpskR7Kp718WAAmDGeFLs6ie3J9Kz5x3nXcrjbT95Xg5zJk6ZJx9",
  "key10": "2fCF4uw8D7pETzKHJvaYxk77vksp3DesGmeYMQjR4LSF3KD9ch84YBRgvTCvhfbDqSy6HhdynubyMZc1e1sPrqBP",
  "key11": "EKFo69Uuvj55N68GApjUJDVtiFJ3b9wdErbmx3iKHQte1eFJWX8GGG82xQ5tCLQd7m97t1fuiLb9QpDYjTLtcqJ",
  "key12": "3JhUJd48im21uTLsg2rAo9cm715LNqN7bsvVm79HsJRciujvJn2uY9UU8ySpUUmPNDnJxSSAr8u9AdNWE1j82qRy",
  "key13": "2MkYLi68hu8bstJgxQJt47krSBNqiRdJxsdkrVJDt2QubMu6oG79ATtdaLbwhbCbAFZ8eitkxkneY5GdnfkyqLhK",
  "key14": "4HcM6tPX2HVX3k7aCtqgdmoZfvSTkEAE4bcpQGsF9E1BAXKFNv97WeZJj6Bp7ajU7T8HWAUNwfUxqcSTDen63feT",
  "key15": "4WSnk9kjtw6zEfLqZYySX4GReKej5ZHPQdBUgufqnSJE38qQFsMyvzhqtNV43st1c8HksrNdQFUmryrX5pbNjkZo",
  "key16": "ZYAYWFHUxWT1jqhANDKfGbEKJSnoYS6Dyz9i2UeipbwBJCXiYU9ou8c2TLYzPvzZMofuQsnTx5MSiwBjMNwWo9A",
  "key17": "4yaEL6uF5SPEG7WyJZ8QrB2XYTcewvW4WWJhM68Q3ks63tUGAsZdKdnNW4EhFRJqFEXeMWtb1uVgJQKWcZSoAwju",
  "key18": "3XARgkhtEN9eovKUsC24saU4E6rRPw2SDQNqUFAKPfdX5hxCayagZDbp7zdRXqjnBMFdCHppJ9eLJb2fsP9BbGr1",
  "key19": "5GkJRTzZnYrDSuAtRN7bX2HSGnXdYZoC5Dx5HvaNwnSdjowngASQYKf2KEqZ68YR2wHHdCGzBygtYjMSDqtU39bB",
  "key20": "2aF7ru7zNQe9LuZzU47czK7SV6m9i26BC8jiE2ZXQe9ZJgoyPT9Rm4izDVs4Wfzx6mFSdoFXHGHd3nzvGWF2mG3R",
  "key21": "4jbLpdCLtxbytiQmjB4fXykiGu3J6SS9SwYYGR2A937boK4zDfXG3nfwAyf3BYySL9sxXgh6vqq5Wp5Z8V59cp3S",
  "key22": "Xg3Gb5E4G6pS36TBYYJhgm1STeMrjWJBFtkrfyV3y2KtVZzDzCvMvStvriQYc5Nz51TTFcRtSBNkrKDjF6PGxeS",
  "key23": "F36SGeNnJvesBLXV4EaDFRJurvcfTUKDCUecNx31bMHgzMeGn5DxaKxLSeP9TmRkMDPYm2FG6sitSGVseX3rTks",
  "key24": "3TZffx8P4TeZQtm9cULMBq4jstY4iq6CAHQNSfAuHQ2L62Y2FieBZXPz5ztCp1sSZ6UraHKjv24WT1yMtCHvhEYt",
  "key25": "4Vtrih8vFzvDm7h1L1PUUZ81JthwNkYzSP9WZsqhZcNqqNWy7KhDhEzcwdPP8Wo86fV7UBSryL1rAhNFcDuFB9aN",
  "key26": "2wQNEn7MtXMbrWXqSSmdYBduFDWHwBdEgTqXGXeW9hyc5NTKjJmBazSwbbxfMKBnopzub7paN7pHskx7AQF8kcy8",
  "key27": "2gEWT6VrXgJzJSJGiNzxn6o1WahvB22qcVY9UPvfRMDVMFFR2uQmx5aUE3nKoJy9AUMPLZemr5eXM4aFMGcX6R9Z",
  "key28": "3H4H9RSc9ESCKoYEw99P55knJvG9CaSkxJ95D2rDZAwVQPMtvQWknMXt9a4CykdjhnfPSTX8dZGrnRj8ew1hssWL",
  "key29": "3ESRVZUfT3YxzQp1g3cRXLZ5BAyqsKwPjXqMzrbP9aHGWSDRnTwc42cGgqHTH3jhgYZptHQfaTAe6zKPU5jJ42kS",
  "key30": "5t6LuqteUeoqou7YzwRxss78cwqsKdsnxw268dPMnkfDQfshBCehptzNiAigrCu6HQ6ijLBah5i5cQFcxMgYnKDa",
  "key31": "iwxoBtBDgY1wUB18TyKAqs95DGz5SuXDtwPUK2LAREUBUgYs2AZAsGtdH79xTgJBH1KCjuhVDjJYrN3fDUKJvqA",
  "key32": "3A2NgyHF8Z87tfLZVmeqsa3VCrwai72dG4Sg9BWfayeubjqRYHynKsAqK9C3uPEkosBeaznkQfuzX7G1yMVGX7RX",
  "key33": "2UFiiUoUubF4inPguu7r6Yghsj4oYv1BmLvXohYD7kuNzknUx15cYA3Rjqh8y18FPhkL67x9hkwdcAYeRRh5cjQ5",
  "key34": "5MzNrmT54SWnAn4Bt8XoPU4AeUEmV5FCj5idnAdonwJPLt5kkETP2zmcyiXobpLX75JLirjhoTZDittmuWNWs3Kf",
  "key35": "sbNE9ov3KyEBV2aQ9VTSmfWW9EMsMe4yfpXYBNJHALV3GAcGBNnzTffV2PoEzTS8y6VDbQWBwTQjzqSXT82iPAC",
  "key36": "5STgCvCggi1TBmruKxG411sEy6gHXHg4qsQi9bxXYGue4VgFCi8addQgfe7G33FDtXHkHhQopLiRrjq3XxBwiaJm",
  "key37": "2N1VdxizBmmkqB6RHuJGVjQ2FU8C2aaWzRrT7Wqex2Suzudj8d25p77D5uTSWa1gvUXk3i5uiwX11Y2f97Q9fB34",
  "key38": "2DKB5m4xuQLUXNiSyfwbrxF2YdWgSPxfPFKjoC94z2erMKDeQedKhkC6RyDcUcPkCyWeB6ehBpbMQ2uTWcN5pLd",
  "key39": "3Z5yUqs1yTHXFuWV9saegABM4W9LoZ4j875A3pQ6u5jSYMQadypxZAJLwBtvhWUBcW2PmC6Cm5uz8FtZQxi57YLB",
  "key40": "4LJmGR5K6jgToAC4to2CxReEpx5PDZDTcMpZNyeTyGVkyYpQfB3rdhQVHx6deXB4M4GFYGofdKmUXmySDD4pqeAz"
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
