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
    "3scyarEe4W8KcCNoNjN3wPeqYiMtUjKnN8KfekCwi2RztLtBCEGLEwW7gUD1oRpCQctCpapUUwimxsnM1TafJu58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BPtShFrMX7oAWEbxDoGPzBgrqmiGeAHS9J8xRgZPBZrLy6aNLUXpuJXRwrq3t21S2UQpr3feDd5ihu5SXRmkqjj",
  "key1": "LmLiRiB97K2DTsKMpJ2XXhV7aL12dfvgkfX526UYw42BCajsHc3iWkdQdHkTiNVJQV8fRxNXaKsSUiMsXeG76MU",
  "key2": "3eUhdwd3pjfgK3a7AgiY4jnE4RLYPU3HGBPwMccgwQRanX4nQQJnEMR2EPoHTXfmLriRLsi46TyWXdjozk49a8y3",
  "key3": "ytr5sfLi6kqmR1eHtgZmneVVW7KqbhLq7PYLzFyPqrGNfqKGsQMubLRREA2zpWeh3WFqw5oNJY9t7rxfpva4PPy",
  "key4": "3sLEB5NpdehqWTcgcatatWNnjvsWAneopAhND3pn2SzPFM6GqUiEscUeNZ8EWLGaJqA9QpZJhQSLUMkRWMYzgFDk",
  "key5": "2HktWL4CVSnRRZNR3b88d1qLy6CFnQWCcZ2bxHyyjRAC3GJh31U9Jd5qJ7zeERidghWtqAcG5Uy6CvUJcY4ifEJK",
  "key6": "5pCsWiQ72oXK2LwsGugKwVhCHo2FDG15ezxVwv9x7DQRjoyRtcbWruyPH8GfDGE75Sb1coDatATn2G6BnyuhRPdL",
  "key7": "31reScWTdMwp4L16wYz3kyDddT3EV31gM5kfo86QdY4SW3w3JVwpnVi2WrCt2JvdbcNyBnrGkAH9cNQQvxtNyLKj",
  "key8": "5GiTUCtQHWPJkHhSyvnng99SE9p5x7PHg9bmHEYWhkibjUcVyJozstqfmuccde4HKPLpWmovVmjkxTS6vaA67mJ9",
  "key9": "4ZZKA4rsspmQFY2FiXFr1F5qJJTpa5oowXiuVNVox4G3dv9e5vMFxVeuU8ehCqbrWUhAbNHaHR4ckiKYDym679RL",
  "key10": "VN2pq2q1yuVgTNtXFWyqk9xUpJAwiBaWmqR89ZoqVmqCgKT83JhToMCNfQf4FL1EEZqSnuhWyTAGbSXcAcBXg9P",
  "key11": "5qvaW8f44FzLaaiFZVbM91PewvrZQYYgJnkGE2CxUDHmYDiDpzyMLgZtDE3rUgsitC2LbesDpiWB5PMFxxwc2Lfm",
  "key12": "zxnbi4cbmtZ2qxXLWCPBD3ntEBsE34mzYZtF7uwq3t84gGoN2Xt6t44U85WnwBZjB1HubAtMHGTHNfRLsmvFzVX",
  "key13": "xBoesMiJK8hdhbFSYaGcqs7kHkw6abDoBTKWe6t5X45QPdTuMzV6wBqo27Pn3k9kcsDhL7THdg1UUy4zQ2JMdbn",
  "key14": "39mEiRwqHwgAUDiha7ab16TvHen1gUqxFHs3kM65RqqHyKK8fU5hmrnU5U3diavckSBiZZz6TDgiRomBsvsjJqAB",
  "key15": "3ozcTCqFUePko1i9nQHVmUtdBNtWUtkPqc9wZTX1xFCtEnqAL5duDbSPDb4ure7jaimmSAb516FwFJJqLY5Vt36c",
  "key16": "47gJcF8jV5txrveZoo7YYakSZS2PxjhwMvzoYhBJp2YpyJensDz4f6rGsZHZvExpCzmvzVuZ2Awgg99ESK8WdEMA",
  "key17": "5oNRZFdc8kb33BgBMs8ZKdJncPKLbdWvYiZEQG5cXZurV3FMcdfXJ7y6vzG2aEB5vHxaX8oK9EyEgBjvqssTwaxJ",
  "key18": "3LnXxoySBMEy4cB6nJCjAaPgQ8Yc9mRBGQhEkpRKZAP3BwJQg9FiEu1eCnTNgB1jvsb95iSicLBxnc2SNncWpbks",
  "key19": "59jduGfeoUZqgFd7tYK9PjfVNAt513HknQrviqT61kQRsyeZhPGtLAgrAHEbZcJErbzzV2hseJrsbAqyxuTP8i3o",
  "key20": "26NTW9PCFWRc9ZcDDstzX8WrrgAXtNKxc8z4njfahrSNvQiBAMQWZWqANUAy65N5g17oc3qXBdcZkzPUFSuqeUm3",
  "key21": "6U7kyvqTkZyxeUJykCcdAJHSf1iKtKaY4U2NA8dcscmeo5617ByVLk6LJfYJpsQuZxQy3gq4yTLAjUAZbL5HuWf",
  "key22": "3b4d92hyDW6SXU64jHv3MwEzrnJj56GsAmCPNQrBVULziQyPcWfLNFGScMuGAifKsrhWfWh75aVqeYncgwUqBBKX",
  "key23": "454ALsWn7bYgw8WAXicQqkz38wqvqnh7gDRXx3gguhJNbusTfMLfBFZNo27f8TZD8umL5tSQnt4YqDFqNY3DxJA3",
  "key24": "4bMMKJy1U2r3CfHLa2aR6f7EqfekxmR74pHnMKkLZwQ4MGKAeL2vQ9L1f94AanMeBp2yw7zit6bfrQiXdYWdMWzz",
  "key25": "5JYjA6sVbP4r3vxQ2mWTPZTsg1GaA2hu8Qi3FAbUWkePzLS2Dh7smMwWVraiyTnPsqoudDAxKJrLnuzhqXdJbzFw",
  "key26": "5c4WS9SAB1ddBNnit1T23dqJEfE1EYAc9gXQ8KrQznULYuppsLzabUzYTnFW97fLFGPUEcEgFBj5CvUKTmxrezAc",
  "key27": "65GQ8Prv7gkQ6L9teG1bkKodKTJdBCnXqNhqjnXtDgf1DUj6Wt1yoftSw78jhiNbhSPQ7CPuDygBAguKaLu1hXV1",
  "key28": "4RJRfTkM2hQwNvE2y2kkRiTnkdyDfFSD9ybsgKwZ8CBDfJKBeCSpUTHyeEPje4A7V7Yp7GwuLFxbkdTApDMpHoTr",
  "key29": "5sPBPVcJyX9mE9PzEaBYtDSPwQkxibu859dkiC9G2eQCTzaNWmpxN1gqBDE2mvbZXAXS6kGMLveCD699APbNFWY6",
  "key30": "5SG2GXFvb7eJjHhMxwf3pE7GFEAUXnWZeZzEd7PZjmGopuPmLPmKKWrSdhdxquhHMEiJCz2P59ibtTP4gkLbSQkk",
  "key31": "5XPLJLDvMJmsEkVMHL75LujNYDgxMh6RaHg7NrJdZwLSHCK7G6VunmtCrTvvJM5K71wGaxz4sjuE8EwVMwwtA1K6",
  "key32": "hxWhoWkT4gQbD416Lbspb2Ky8vx9rnuCLx2Q7QZWMrz4rma9AiVugkYD7GsE9TSq6mkXA44fB7jVXgR8WgCRr5e",
  "key33": "ASFLdEWnep6PYQpJhCUZtJhAhVjLRcRS6pdkCoM21476HRBy55b5Hhf72yx2fnbvnRFZX79QKFG7m92M4xjxmcr",
  "key34": "5WTBLhLBS1EesFAYmEe7wmLnwSNvroj5HNmV8kEeq9UN3nfqHAZs1TQhdZxz6yaLhdEGstraHqmAEArXuuiUoTqc",
  "key35": "GA5dSPSZcMUNYa6hcPdaafRtUGcUTgp7pqhTb9FP6Vtq52aoQvDWTaUGMD5fijQqvGrkRa5rp5RAgLLJvTTxUnr",
  "key36": "4dNmUc7wBdYnnkoGNvcSzFoEPJwEHTjBSK4AkrHBRWFS9JY3SL5GScMHDHzqsxjvLVjuMkZroRe4qjwEf3Tk9Vaj",
  "key37": "3zFhntiJjvCbVUYTPiPtmtnMbzbksEpZDE8W5w8L6qUbEPNmMhDyHja1SzJFjgLx1UJW6sZLcq9DnKAQKxkzNgjy",
  "key38": "5GrbT6qiEXMzxLHYnViEQh1koMLJmQ9orrRHFWiLohqnT8UfBwDYJokPGwL5qnSm6Ku1hE9DH6ZnfvER9q4PY8DW",
  "key39": "5QQYmkuGdvpHmuWivLNZu3jK5d8ZVj48K2fLrsFGPPuCBSFQic4rb1KwPBQhBzJZcnomDR35BrLH1dcavxzHngZ6"
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
