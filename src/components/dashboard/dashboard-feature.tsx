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
    "5foRwWNLJ54we3Wiq7B5yPmJZ4yenvZyFWZv72wnpWGJq2yJbqgqLCNeCnsTn9WpvKMw5rn4LPQTn5bVWx56m69d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zmb2D5zj5pnJykEr8WYqoK98CG81D2B1ZDBhvznBoUUw69K3FxNdyCVvFLPW6YyZk2f7KAmp7h3CjUj6jNn89yA",
  "key1": "5eJ56THLhajoaqyGDciDBU5Zb2hJUHWUuaD7Di3BzTPcm6BCBL4FbYk8y2g2gA8uSC2toLf7M9BjQons2AttHqBx",
  "key2": "5qeDpWFCkUvvPsb1a8hxN5sUyTURjGcY2rwb6WiTyUH94MiKHhA8z8oJTrPx58YVvZb4vrMPaiodNvqqytFXzc7s",
  "key3": "3EdysxkrKHS93b4oiLMvDKiJwkGGcexW1S4o7NUQqCe1Wo8Pxi7gJh9NVFBB4VXgXsdf3Pdc4AumPeMMo1hwNRur",
  "key4": "2TK62wWJoebtyBcAoJpGjK5n1gqxAh65UC4Dkwkpef96WuzcUWWNhsCooq236Z4ptuSnHhjHwjSY2yMjyiJPGVZi",
  "key5": "2PoQjpMeRyymDjZvp97D5JJaDGQCFUW6MZZey4uCSHQYsNHcsJo7rzhVhgspD61ueRC4n4hBpSWh67NG5m3j4Rz",
  "key6": "5E3ipUhD47AbE74dCmVyzsQX7u7zKznjo736st1ZtSon7RAfzz7N1FAr3bpZ3KbqudRfFw6aQXEtVojt88jnErLj",
  "key7": "3Lk2LveQFJsXL2cstzG93KaZE9V2JSpLXamLGLViDSRxBKT8tBhjHA5oCCxtcEkK1xCihZhh7Z7XfUb8tHzMoXMi",
  "key8": "2mPpnDeRrxC5A2QGXDY26vQUdPGQg4RN3VD8RKqao2KHvmvUV7Zg5UmpdbHW1BYaH46Je3qSuQpbYLa4xSDJKZFE",
  "key9": "4iT2eKZSKoPXKxp9tDTqEDEopZvhf1wiWGHsFYbcVWWYge9xg4ueNZkpmov1RZmawc4QPs39jZWMi3vn9jMiwxPL",
  "key10": "5qvNsfZygRu2e9sb8wnv7A3s1utQsr371tQSjd57ZaiH8Z6791rHrLLZdMmhW5k12XFgLBs3AYbNAJqTQ6wgZeNu",
  "key11": "vBzEuzcv85egLRjeRUVD7pth6GRXZnBoobcah1yB8KYN6m9JucxnNQyjtMC6EsKtBWVDM3B6W17ZYFsgj5KJvPF",
  "key12": "5XZRufBw3zA55zFYBrbnqVo7RfLhLL4MwmV6HumjCdTQuXV8pWVaHuArHSZj9wshcuMBLAQhP93GEgRF9VabzLTQ",
  "key13": "3B99ecnWNYp6hg3WiGRU3jhrrYBu3wiH2vXbS8ny4jrZYue6yGbKMG5R7XxyHjyuS5NMgLthYYQ673tBDrEBwdEb",
  "key14": "26FFrMsgpuFpR6eNPEPGukYoMoWUJuutNaUDNJpB1T6SN7HtyhDXGCgJFCsHz9L8PVwA5DiLo9cfb55XshhFpY8L",
  "key15": "2ZenqWJYquHJfUV5hJhDfX9GEPqe6s8wzFdb2cRwTboAcpnfgGjduG5adZG2FwTdPd3kk5giHTHAaEqPWg6e2kBY",
  "key16": "4PPMF5h3q79iUchpVEPnGmcka8K4rYvDXv9GtcRVQpE1HwgN5F1GHViYxoQ8WkhU5hGLT9pyaPPThxMiAvXa8VzK",
  "key17": "e8JEm5M6AG3QqA4v7sxHxnKVUttih2XSvkCUwkByipXUSiJE2HwKMKCVv7fYHjpvDCNAfL6bUubtNmJb8txg1Sp",
  "key18": "4ENCx3b1DGgPQGis2Mjb4PUvasT7YugXrfvW68UAQZFWnDTErWNJpcjG7n7MkCS2VeexCCEhXTjuR6u9md74HfbB",
  "key19": "2wCX18AjT9aJF2joujvbPFtrUZULuuwAGYBSzSDEtstZjNY3n3GTe1wUQQTo2XoDuB6sDjuW8xbqrfxaESeuyQ6S",
  "key20": "3rY5dBGrUGSy47w89VS3DTi7zWyfmPKunDELqtxvU64hbi9n4RMbBWPiGYgiHq5oDHFS91R3RxcXmZkETDKEAfRL",
  "key21": "3KbtnpvdjkvSiede8sugsNtDUvV2NdzWQ8d31aZec7VjNK5qmvAA9ozV6MWjqvF2cJbZNQj7bLujdY9y9M6Tp9Dk",
  "key22": "AyGhbrCMcbDZdSWad5tXTKp2gwTTQhGJKjZesM93GZAPping8Dw5FhZ9gCXLc6GybXJYTMvq9AV1Z4s5ovgfWnM",
  "key23": "49Z56ixVqSDqUZnsgm3x1mffvZqLjMvZ3pDFnkRFYXmhG46PGP7wrqmFscM4CLPZNfpbXuL9qnNkvd9kTJH64ZCJ",
  "key24": "27UpvEMsJWjLxotuPz6atkb8Urg61jDRdpiqAmYpCYrSZMar1PffXmFgaipJ63tyypcZgJ3agDdD5vi1cB89EJhy",
  "key25": "42se44yrK51Fqi61m2NGKueCJX7tDyTncqcUdK4932XKR8TW2TJRRYqNRLpaPNmT3iwsHWM7uJ3Lujrkyu8QcwxP",
  "key26": "2kLiiKEhwJUU5cYB2MPGGr1pnx2rnK4sYQEi7z8ZhemUvQEmXt187dppsQFroK98cRhEebBdagwm8n6tyf16SAXX",
  "key27": "2iqNwem5GB8QNAQpEWvLkz4RDfMWYdXRpxh4GugaGzq3JdLXcoNJpjdANUiowCmn48brLTVGyPij732KT5Xmp6WE",
  "key28": "37bHDkBM3zmWR16zJFnLLVL3A5XTCkfpniPgSfynB8MFwdxfo6PBR6hUHnZdWcA8HcaVxFMKLpvt3jhkj63SDLJ5",
  "key29": "2BPsMq88Zjt9y7c4rvrzWP8it21LakQhsZwMZydc5w8cBSnetVjxw5NFbVCm1GNtZLFDbJp56GTWh8A4wJs17YXL",
  "key30": "dCBo8fyRGEQRhVCpbsPjSyXBZbkzmVrHxC9nf7mo6GNScn6VtJq7eEThsWz95JbiXGnWMZjbZBctC865wP5ttXu",
  "key31": "3xqSqQpFqakQYi4L6Gj5GeSNc8G2t6L1Z3VPYK9xA1ATHKDbDypoMHPQCzPBDQv57BPcZLHfNEnJG3WEWx3WP33a",
  "key32": "4HBG3pTQmTmLfJcgT2YTeowBJBG42UicDqfpxY48eaG5PmJbJ8TgsFT29mLGDxsJN1swR4LXYYxXcsmP6nBT493i",
  "key33": "4BKqk5L37Qh9FWW3zCWt3yAMaZ4q3CP4YucqZotaNBkEeHVzZS7V98MCjShCTjqhzMjFcSTrdAR8s4DczXYg2Fws",
  "key34": "5bpFV7b2YJ3uxvbm8oszyuJdvnFGgGL41taj7S2ztQUceAGThwtb8dgWoQMDwPSD9ebu7vwNNXZcNGYVng38FagV",
  "key35": "4GKYCEQfEeJJUi1HCbjhoCk1zby91KyNkJbcArPXdNLsyGx27h5bUkkdEbKLVxusjCPbCnNtEH7iCZzxwy8B8JvL"
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
