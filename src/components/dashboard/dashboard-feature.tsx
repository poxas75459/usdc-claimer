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
    "5wBxskoDRmjyuoNde6RBimDmt4kGzpjzyEgdRNCSSKjSU5rBBBGtdeeAUqdWD64469pSQNyQW9kpi38CtohGyS55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVgFuR75eyeQQGb81pdqj8UAfexBP59JmFHLCNLvbzJbgFrm9n9FZijQAH1Uz3s5V3CojEB4dXZxEG5QcjecEEW",
  "key1": "ZmuYSN2gbAg4Cwm2HJZ4VdkUQjgdYS8m5cJL9XURtrxLEaGCkXDrWsqi98Y8GKgof2PriTw9znGe12c4V45zhGC",
  "key2": "4Yf4kANu2esyGS77Yo42zidZ3UuyNgSiyjwMjCmRqsxJiNACfxdy9SgSrSEA8FB9LH2QeJsASRmjoC5xNq8FMYwY",
  "key3": "5X27wqr7wRtcxD4XAXV22bLF7NBNgkWLN76Qdt2fqy9Unw8b8zJF7W5877A6BJ8eTjZ2fqTwc5dFvpdxP1AqUJw4",
  "key4": "5s4zJKnBM5XQEaXfgWT4ZR9uFKd82LqNPSyByQXsbFGdVamsa5yoYjPS1mkHsSa23v7ggT7XPJHkVamuixWkht5z",
  "key5": "3TNR5YMifo4Z9BArfbduPjPRy9rR5MTGzY8xdBR1vDWZhitjA3LNafi7brD3Pk8ByoGMszyjWLzBinqwriTt2Jbg",
  "key6": "jcxWB3wRsmHVBcY8neS1LYAyVobdfsMHTt9CpLUeiWHoENaye85qLzKCz2g3VkKDo2WvB5wRua2tHNVJu6WVYdf",
  "key7": "Q3cUGf4UKKm2Sa8jvE2yqaY69W2WJjtWEZFL3auD9ZsSTFDVGZSzDKEywX2spkUw6t2zaxuyBGUgP39qxhNZr5F",
  "key8": "3NQuT6L8LYJKPKFxtcoMXc2kyacq6coDQdxA1rgcZb6iZBCpuYRAo2ggZJKyirHhSXjJJTey71UNypdtRfYF41Sy",
  "key9": "261wbfX5HghgxfErat645KriWLxgWpEiNFfzTLj37oUPyTTYXJd7FeNnp4Shie1potwAxgqoyvssKY895jPwJtAn",
  "key10": "5E3mbpZDhx5PsgRoaLE7Tyqbt2GmNuYfjSbBQtVp6ETKxfgVXKXGHBribihBtXpFCAKwbV4QXqS6x1Km5qgkUMv1",
  "key11": "Xt8z89ZFU5TfQd1gakHuYBnzQp2LjwTrUbM65Lq3XZrxztPYvk3QLE8MymUL2FRifAqfbbAcvFE2wQdDh44fQKz",
  "key12": "MZRn8E1uzqxFWiYCwPPQTr5NhxzgdySQcPoEoLFvEzp9gyYasr5EVFENmjdA4Woy8JCjmPGa5zn3AYH5yEZvAem",
  "key13": "4UV6iToMh1uz5BSW12ah3TB6ZmD2HrKX7YqbXbF4SBb7LKLVPJdPeW5vQpPvQwDr9pD48XEkUAmsXQxpf1d3fcXP",
  "key14": "9aZ5N7V5B2mmnUva5wrqBJDM5NQ2WhBdma9DrWkQVJf4tiQ9xVWy5wfhL5WMdCdcKTboXibzGUyn2sDYvwXqrkE",
  "key15": "DymBpTnYEmjEN85sFcaKXoLcskCag69BPPoMGiEfAu55f8HVk6ZJA94zYd4Ax61FCtNWnMk6ey1RG2mYBrgnbBu",
  "key16": "4CoWcjGnBTNTjqZmi279Lcy1Wtce6QUa3fYuinVTZJdn9nQEr3t95Uwc9bEN8WofxhXKxeiMGmzHmNXdqgtzj8br",
  "key17": "4tC5K9x2pu33MR2J6qURSZ8QrgNCaXa2HPHkLmCCbtwkjbv7mfrtydydbLe1ZJt5h2UpFX7prjGABxcMaWEJVGqM",
  "key18": "5YSMKjAqa4LPTrextaJcuz9nB3gEJkbQ52WzGt3nD71zrcHerbRZ2MbyTZR9Vso3PehvraqTaQJwf4j9Peky5hsZ",
  "key19": "4LLnSBJqEALT17vacG4GbUjPH4QNCD5FBGHEcXHo55UvKfVcZTj41HgPs4aBt3Hmk8YYHhF5s4xA2tdbJP6fpywx",
  "key20": "3hVcjr72XCFRMSevEfGpmwKGZQKtUWo8QagoNxhGrzXM8rvtGf9UwFnhELLFkm7QTwPjxVUUiJN6YPWey6E3v12U",
  "key21": "2wETt7ScaSMmYdBYDR1TdcmzSQB6hNkxq8W3yGh8tYBfLqUidVnuFLwTkt73YmdpSYMjfc59TfJ3R6uGXTJpmo3J",
  "key22": "2XsWZECa8aGRhZKvqBHWMuUvydrZ61WVYcbNvvPLyHJ2YLTSN1ZXfHkPwpovVEZ8cT3kkH4tfpqAc5LbMJYKw7m7",
  "key23": "4mWeESFj4h6kde7VGfbmw7zHjPBd3RSyQTGkPCnjicjDJhJX9tPy86ATpxDJUXnnudi2pLdg1Ur7nQd3vQaw29nc",
  "key24": "3EZZmLnLTcJjMysAweNi8r7yT8BqB8ySwfY8ZV8SAhyTekLWbqzqePrUiWkYyxUdzTUENoYCwxV6hDysi7TK4fAZ",
  "key25": "2VichPfN2AeUMuSCvt9B51wkDLptVRYwN5jszf8HAAebDesTYSA5MWuAVX4aDe988mnf7Zdoj5CpH5YbwCYxWjFm",
  "key26": "3DPeoc8zaRnAtWDRErpGnU4KcUYo2tcBURMp31VtgMXQGQ4guESWJ9nHpQmcfdRcw6APRrjraq9aq2CwryMkgwq6",
  "key27": "3j4hvKZHkoTbXPrdmVy5MecqHGhZjwrmxCBEXgcfLLyLDpZ91ArgNstjUxLnGoguu2zRi78rAHZkxtww3Xise6y1",
  "key28": "cXPKhQgCv3BLN1Bn89VGERZL5gQFG9h3VyodSc6yNWDKD317VN721iw2NxGi5UqjcfDAv7bwVEfLGBUexTHtT5p",
  "key29": "zxsyNS3LSeHVi78XpUBW8f5aFcmreSrkMvrYPWaRGcyfJ8NCvP4rS1vRzcYYi59MvLTNDeGPGNYkDiPcRxefnWb",
  "key30": "3vBMSGNFp8KQqkrJrmuVZsjU4wkcxDh8JzzDoEkbBk4q9awegb343pfaH1gQCu667ZHe5eoijNnE6Jx912LQaDWr",
  "key31": "5LQvBYyXBkFgCCTWjt6n4t9wsdPAKmCAdVSigd19hczB4KMbPiUT1pua9SSUkrtDDKi2fDJ8nxniNhgKTz4aARiZ",
  "key32": "3YbSc75TSAeYnhNRVopZd1X3HHP4GLws3JgBsU4wLPRTqX5MsrzygBF4Qcg85TSGX5AyFo9uAqpTWGXskcENe3yX",
  "key33": "29JMVn2i1HGyFv47iwvqn1hzBvfyU3cs8ZkcFYj9TenwhpuWuivkg8AEgopraWr6CcT3j2WqkVZkvFfjnQujP9Yh",
  "key34": "2dRD5zp5ZJPnUiTMnDEWyknJPYmoe9GbX3XBzdmih1PEMfpTTjFT8LeYexuXQsRbNsp8Vagcf8SEaNwtLqcevvGo",
  "key35": "3T9BjbDWHSEV6Tuk6RiApbp88NN2qEUTNrX5Ln5wMFdVkqwktBQSbYvYHGpo8asKh1GaMJmeN6ZQaGT9GAir4she",
  "key36": "491zoyrTBxwsqwKMGRiraJQU1BKtQnoWfPWtAstKbw576HPM2wq8HKpGjZqZD9dLBoyFNpFJVYzWVQjRtFBV1cBV",
  "key37": "5BVS97B8bPJX2BqoorQC9eTLTDtW9rg8biMsNAjpS7W3qw2eWQKKySwiSDQDUyJhVERsfemiuZLKEPyqSWJseUE6",
  "key38": "dVbcVaBuQea6jX9M7cTnBYsPZ6H6ENHF2HEN9meN3VhedtKEVYZPVHQ3wEFnTeGHFKy96qYsz1yTC78YuJfQqEr",
  "key39": "32r8wZrfDKc1GSrQUrGwhRrQbuHkkSEMPXfwaoR8SvGu4EcNVD1D6auGrAVRB7XEb8GCcBnwuzDB99Mp7XpDhH6y",
  "key40": "5Ws5hcfeKoEJ3Qfer1sMXshVW4JNCAcnc1cqLjvneKqE6VV5iwMCJB5VhuyCgv5FE2StJW2fh2VVThma81Msyi1P",
  "key41": "3vct6dFtGM2zeRVQr77hsX8PgkZaGtP4SeirWi6mopL1ExMyzkgHnSXmKGg8aGwVMPumcb6NKo9FvBZvRvppS3WB"
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
