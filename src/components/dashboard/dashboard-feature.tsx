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
    "5DGJ9nzSyQTZuE6eQzHUm24cwkmNupFHh9HiVge25D281XJFfqQncKdmrFBKgpMtUxLkSvVimBaciQvkzk6FXk9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3atdnVsLdKUzvYCapaaRDQCvKzXftMFQGqah1LQhfovidBePoWgpWjpE1Fr5UcnjysiSbUmefY5FFMwHypRkuXt2",
  "key1": "4H8ET7bo23oAXk7YwYuhbVrZRuUaR8b3gb4HckX5xUan4qYZB5v2rEAkULbJWpLYHnFu7oTfS4bAtFunBXUxUBdg",
  "key2": "5RiYKWek9wBEC4YJnXSdoTGbsjksyeF2vC815Jfb8PrL9pekZECTsF41Uj3kRa7rXe89hAqXUTXm2xFzvVEXEqFa",
  "key3": "23Wz4CNAGHnV8pVJ1f61o1CSDJDcz6GNgtKZUEKFtoRmuvEb8JXNgzAegixrbaDJ9xYa68w4YMgn5XPL4FdwN6BB",
  "key4": "53pE64Mbp4SYbg3jREesfBUnpcB1j4a6BvekH8Ti4YZN3YnFD6Ubf3tu89j8S3uBoxbYr7numNt8n12RLHU3A39m",
  "key5": "2ZQmhCLGY5JQBaoqhmi9cbTtkKBF4PRVtLcECV7q4DPt3gyfhKC58Dp6okLqoEVkvw4hza7cN1fF9CGQTFEWRy33",
  "key6": "5kk6yR4CR9aDYu8FrBankwogki8cKeYAsKAsY1DnVDAcHovaLwxRtXRMRrLvzYXSVwCN1cNCMQVsSLhecTVgjnP4",
  "key7": "4Vn8cNPnGcaNye7bibwLXwWqQSmtZN5Z3M8xQR8VU2KvJSCagPva9x7753V5PttvqDM3Hzeux9ihZxPUriMoHHqv",
  "key8": "5oEDukiCitKfgfNsC4paHH6MHdFLHkktcvevHCMCTyp13F54ZpjPCBieEesP6Vhk1T12G8uybspSSV6MaASR2XFb",
  "key9": "2VTYiHuBMvxdDQNDSdGBksBp1aLXRzZzG2saztQuhJZjJTdtvSrcmfM9t16VqYgqFnXHjqMKFVYFThMAbqM2sZ3h",
  "key10": "MfnfKuqZsqhWJNXwbo9tgEKzy8uAccYPq2GoGj6B2CQj3bUx1bKSBrzrbQVWM4ihX3qTV7q4kucjSsC8wj2S76i",
  "key11": "2LYDx12wijrBRCFH3nh1zuamQzojY3CkGMSiW8BykKWW5M21kUYgFSGA22KcjXPzyQBissvEHP5Fv6Sjewg7pEWz",
  "key12": "5ZA2iChGfSNGdA7f8Y4XbK3jF82Q9bwQTEyirLMnuGhDHTFdYGMWkUStsU8u1KGp5VApYJyq75cL2dRX4Rp2bPiS",
  "key13": "5gagMc5g92AbqU6a8xNPB6RtVPmRKxSjLFN97Pq4zuFqT6jTKcb1HQvU1n8cg8zDTjQEp5dXZUfC61Du8UmhFma3",
  "key14": "5VuoSoMbDcGmfnFUmCBSJqU5jDSBVQ5jSfz8xXmJmzRwUHgwSUbhX5TAoyjhhieQudNj614JTYwQHnrSitAPY9cq",
  "key15": "tRdoEqKVPTGHvTdWwd8vNR73JW2NdaiJZhCaJ4v8MHHg7kxKTZjjHAndV7ibfqfYe75ME4P439hNg6TrWtdFATQ",
  "key16": "2JJd5NGy2s4zc4q3wES41oAbPksm1fNevgnWaEwjYBUnzuiF9MWayVsoVspa6VdEcpMeTTPqkvX8vpSzCEBbhKaX",
  "key17": "3QpZSAQpAfkBnRSLMnHeuuyqrSoD83tq3sH6R1tHTNMjDEnQqvwfRGW73Zb3qDzSXuvYfVYkNTZKATuwdMYE18kn",
  "key18": "3GzfEkMnb4ZrKEQkQrQKdAVRcSJG2EnnRM6cSB6TAsSncfLVQuuLnM5Lc78jzKL4HDzDo6VpEE29m2PJM4zjRH6j",
  "key19": "4DK8bATVpjuWSYUTgQNbHfcAbHC6Lip2TTRy5HMTkoqntyopAVNbpCV3BVMQdEVPamb62Hd3QCWfNmCBhQRwhhm5",
  "key20": "5ADrB1CjVUL13FjrtvguqRkX52dVYa5tQhMKf9JdqVEQKZ1Dfv7SL7zqv9W9kEKnyhYSBsuHAVVs3gf8WwKRF5qb",
  "key21": "212z8wu8RbkPoGfB9qBYJxhCUJRfvnc88mwQ7U6WW2VTtxCtXj7L9rLQ6YJiMXep6EBje4YNQurStjvVapZqkoHZ",
  "key22": "5LLx1iHXqJASWbWR4HRYy6m1pd7kgc9y7j6QKuxKmx1NdfA5u3eKUQPcnHyF6akE5BUXEfmSXGCMmGLajZMrBMjw",
  "key23": "3neAVbnM6cLg5RMENnt4E1xpua6o5S2HRXB2TGjxiNiNKT8JBGguepRpsjjhBaW55ExEEDhChLxFoE1PkixhQh2N",
  "key24": "4jHcWajg1vz6MQ5nAvt5dWAjbKndLrccMoL8kRvcwm43DmJ9XQs6nZNYGvua1J1rHvYpS7jpv7F7hwRPUgUyAiJJ",
  "key25": "3DjBfrodUGfx7rscvZiaedp2JJcncKRb871CQojUwM2izMhUzDPbDackMLd67guCXVbaZEpLKKc4ECVLTvqkJjCq",
  "key26": "3zmomh95HJjthqeNSe4A5qjGsHr4vLLaJc8bdx9Cw1NYdnaGm52p5SnQgcXTMLx82Uthc1x7DBSPxD8YWyU5rUfQ",
  "key27": "3sy4KEXvnN7upxrGiQcB1EyRFiCTyHApJWz9JqZM3N9FfTowwVtJBg9AemDD6Zc3ewv4oHm3FKmHj5SEGbsLfGr7",
  "key28": "oPdx8zb1xtevqHj9cakYCmeocNRds82UiTeNCTyvGdPYwzmqLRVQdrcfPAMM6chP5YRQSEJmPBPxgRU96qaK6TN",
  "key29": "5xjXY5LzsF7cbG99YnD5ysubkj5Tm5NZoeEiNJnjrX88d45uqL3ZXm4EAHUxfzTr8PD5WtJWMW1TSw6Dwk58ZUX5",
  "key30": "4jeKQB5wuMFWCeKfbWdnngaLw3WAH8463FvTGnNYKjeqc3YNbkwrn3xwwpcAMBtbcVMt2SbywfqVD3PVPeDkL6j1",
  "key31": "4KjWdr8RxLepnnoE8KaKjDaA9B2RAMh2nMQ3DNKQpbV5sSkUnYA2XMdvgxeg5cp6eKsz61QHYrQ4HNfj47LDKRiF",
  "key32": "cZtVZXAv4j39324NDRa3k4N4rQE7MWtR54vX5aqMjoWBeQaGehD78KcLUQUfPFzVVaRUzGEcSb6Ut7Qkt3FCsPi",
  "key33": "q6f7Vvv6ywD7MkXV27jrqPbPS3WwAWtoBSK1Q3TdGMUmHXjwdKybLarGkQN883t1PPTEvpvmqSMbAVExLufHbn4",
  "key34": "3nY3axjtXZWS1Js9zaDHmjLmsQuysXDeUA3jVW3Xprj1XWMm3UxV4Jnd8EfgZ3XcTbobDXYLnwnthDLa7pWWqgr8",
  "key35": "41XMBSHfnCMkRP4ySnrShDNsgGWkadXP91536jcujUqx4zBFRApUKzGUudDvTWtag3m7ovzGCn51q5A1tJJeA3U6",
  "key36": "ntrXAfxq1A7qa7AahycZxWu3dE7Lne9VWUQ11ZS1Lftf3r6Sf8u6mLvWzdMbK7A7RHQprmwQWUQr5qvCR96Piwg",
  "key37": "5X35yFE1tena5F62F2RiZm5pJjtXtCApjLAKrYAgd45d18gCfNnWGm1Ug4duJ1spUkkhPzHfVTi2YoPTQZywwNqs",
  "key38": "3M9JG7j4sBy8dDA6QJr5ZeUmTaBeZWUXrZQWiyttdJeVaRfxSvRCCnrhewkqyvft4jigL7EnonLiwaczXLN6j2kb",
  "key39": "4fd2S223NkBGgs6c8nYeH2qc8v2Twxzn7wukDjnZM4pV1XBUfEaLFxJeFhTHnH8zieSy9UEyWNQovxPsJ2Cvmp9y",
  "key40": "2i4RrwC5RK3drSWY66D2RkGgko1qzP3HDqKDsG7Q2gBNk8VPtPGKpEd5u39hRhkE139X4cAog2E6TyiMuNpEhpyJ",
  "key41": "62KgT3xdRUCg9UjA5afCQb4wKtVJoK3VeUSrzFyvkdJkSYVeHAe7jYqGrMTzryX4U7YXWNC1ee8kSPUarsJy29fQ",
  "key42": "ZC1nE3KRVMFUsRSNQKu7i5R8n5W3VP1m1eDJx3wn5GCQpmS3FZPDaYJSP8p7PFEaXd2ZmiAajfBUTTj1f78EGMt",
  "key43": "276GbJQ9thSBUM6k7om4TcezTdeQw5dmNBJe3o3eDTHpXPw7wuZkzcC8TMAmjyrXD5RhPDi1hqg6xejKy3ixHzQp"
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
