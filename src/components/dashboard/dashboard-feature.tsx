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
    "Yb82xBaPaWsTbNrhKiZsqM5tMGWDf8J3ECTGR4dmE5dRNVD3zRnbh7YDxYWgRvGdymY2CM3emQsSGrMG5jos9cD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5etScbgxefmJNwbCSnsVjrEjB2XwTZe7EsTor5rSuxzVfFw5pKEYxhoA1MgBbLtJvMAQT3euBFW6o8kU7BrqEeb8",
  "key1": "3KY79L435JKLGMkB4jm4QJN59ftApYeYsECotVPmL9vV81Spp61ML1kmWn79rK43CNAnjUkD2mgTBoZV5jFJ5SPg",
  "key2": "3oYBxmR6G3VJdHhPzyWKMRaqCybQLcPZzkPfWCqwsZx3eyAVUzjbMeapnuPtS4pg14Yw2V2xfBeeNCyxFxBU4jHq",
  "key3": "49qyMinPp6DvBiw3vnC9c4tZfphT4FCETjkg3VfBLfqTRGLxYRY8zzaNYJvHLNhQJ1KCfKrFK3wyyhRL3aDM36Nn",
  "key4": "5NmFi3kuYRzEiqvmj23YUbH1pxznF3v1p4wLbj6MZRkciYGwtmt9dpaJDNWrWTJjZQ5zLLYevwYf4VY355TPYMJa",
  "key5": "5VNkH82iUzCj5mE8zCkYwL8kgnxP4Z6AhW69B539vtxRM4tLYfq6Q3mojoJDqMQTByuKGuMKTu2nzqa2dLAJmkek",
  "key6": "4rduHgZnLwwUd4QiiisT5HKwChS9z2mAZZEZK2PKUuFCrkrZrWm2MXve6xqrs8UbBfDiMVtVYWShymbx8GVjgPEX",
  "key7": "2im2BMEN75AjuGgAbmcvVLWtRLsyDMr7brGezin4CSjnxDj8Co7r2dXrBS7iVmgiQFghTNtyBaaNiRrXreoKWWnw",
  "key8": "3HzzwtMp9GhAvEVukhFpzQab6G6oLvBaZtpZc1Cd191eY4o8ds2EBcyjKpVZeXEJsezcBRDuyPqyWvRJnzLASy63",
  "key9": "45fL5pfb7vmmCZHn3D4cQbAbR64yEdaGrfPXjDYLSCQc4xGq2xwCzcrnDzzbruo6duoyQtfSa5zni6KSuX8y9CMk",
  "key10": "3YhwbzF5ya4dgSyv8EukYwqmDKv9ryyYLr9KUbMzvGtCFtVqdP7aSYDxNXrd2mfnnT8ytrJY6w2b4ce4Ge2uk9y3",
  "key11": "5UtdPSmESKJ6chzD2PSXWGiDPfG5TemToe1YvJe1ezS8cbxJ3XcXBLyBgsVEz5DAGdiWzqkA7C7hkUH4jaYZ9SNE",
  "key12": "2JMbScB1zXHaTjmDrebUv6uySXL4EReePmJbpWjooWMr723ipipmDLEWHDNr5VR2hMUqKZaJ9KF69T8y47XQ4KCg",
  "key13": "5tigJgkqeaAX1dWenPRRqMXxL2mMgt7cKUZo4mANfDQofgXSFG7pXtnWhpsziLXbLYediUNzn4sp7Dgy3x7odkYe",
  "key14": "2s8XC4nS7hGmwLXwGN1jpdWe2ABakfxQAKgfABm4LUF72dtHN17f18juCF9WCb87LUFRLE3mWtx7uWWZ89fGavQZ",
  "key15": "5ZFbNJrsAHm15NGbZGC6szjvmeduebhUGgYnwZGp7sM4hZGjwPqh26KUWyVEGSD3d3xSEyh6Wn8H2dqWZdYfqckJ",
  "key16": "BTb8qXVP1sPX8c58fzGfNJ8E2XqXqg1Lw8fAUpacZXkSADELJZzB7fhSUd4DmTNaDyRyRY9EHadBhh82VLRvZwP",
  "key17": "2EoDpcK6gcbdFVrYfPhGLfhc5tKL3icHkA6hcRxr49PJEtHSptg7SftuJFc7XLo8sH6HPFLWYetJ5RM2UK1Dc5y7",
  "key18": "2BfEtALhCfdbq7hS1w1k271XnqJEnDhV6GkGLQW3oJN3B8CZmVUpMaiHEGjKZrwm8xSVwS1zLZcf4otnpywaBMy7",
  "key19": "4HdEzKq5vYqeoedky7eqFrd8hHDSVf5outXWym422bWTBbgdpZKzRsmhxGVtJjzQXDEyowqcHqh4pdjeqNdaE6Rg",
  "key20": "HHR5n1Fr8Mezvrqse1dwPHadaPGXzNw6KmfDQoDq9jogLRLugaqUqYM8NAR6LEzfg7wZrXudbGf3Ti8aSFppjSC",
  "key21": "3jxAcKvf55jFM9Hp3rN3C8XN6o4tG8dT7Zyu5mWpkUwYUiUYSViE9mh3h6rG2oZ6W6nDHzGPQAxNMmaYgNZzGY9p",
  "key22": "j3cZFZZp2pvrJtDfatuYwCkkYqX4rHhnRmTauTPEtQZDBHMbMtY53NWWS9bQwFRezqHFW8oHh3wwmuqhPFjsnSa",
  "key23": "2f8AA5yN3RCmkU51TR31a8z7by1FPhizdTyA3iFinUaFnJnLVyDGgEpDszDnBm6FD4QEAhKZiDbUb8F9GBpuvPrE",
  "key24": "42DceueddGo36kqJjrXc1yiAoQCwamYkUqD6Tpk13bMBjEwuAri1XzgLZkXYvwz7GUS4gTcitmEWkjxa3dRXeMG2",
  "key25": "5PDsuFnkM97zcTuPYNNbwQPCm7RT8AWrrXaTd3kdJttfVbwKgYjyPEGkhJtQyU5b2YfyJVaWXunNHJVV3tWYd3xK",
  "key26": "gPk6uGASDnoLPf9oMvnvYS9tTbPjibveZZGMsvqkjZAykpGibG21dGiD9xPQFAgEpnh34ki2EEjCubq75tSWr1V",
  "key27": "3sWYczbRrD39QwGorZq28rXgigvbjL1dBKmV2ND4nnxiNKznnz3EXWi5GyPU6QHPyaazkbz9FouKXbUeFvracFN1",
  "key28": "4xLtyQbGmkLYDHrhWqdk91sZxBVh3X86uC7rhLzn41mFvx9FHYcR9Rodw8VmWGJuv836FczMQFgdGVwwPbXSF3H1",
  "key29": "4uLrgxaciT42oe9YGN1PNUKK7Ptuise85arUJpB5j3tEunmkRZkcut7yArMXcdDm9ZPAkhFCWvJcHkVFcvY2qpk6",
  "key30": "2Mru6eGPw7o1QUajFt2tTFYeg7qQq5FCkg2BVpJUBFwxAxhfFNXog836L9CxQTnCmvtTQn9NYCW3Eb2aThEkXgpE",
  "key31": "N8JybMMsLpTh1a8i1VvobNenLtr2UPXP7W9bzd9d5gwjiVUKKpA49eTvqkiQzAyBuZ8btrbW2mym2Cwf3ymWtci",
  "key32": "3hdMexthahMLrmv5zd4dCerauF5VQ2HKfKDUt6xFfK68cSmdcwFrupChgWp3vCeAAdCDnFuJxaf6eukgR4EhHQeW",
  "key33": "2AZ4VStw6q6dm5uVEjdft98KEQS9GEK21LdKeX53N6eMQAA5ehAvbNozAVzzaED33SiFNUEBCUBDU4E8SDkBbPKi",
  "key34": "5bbF2vB1fKBrhJ46FtqcXmBKNKows1SYvLygYSZjmw3zuxn8fgwB2fQ7Qcg7PWgsoZgwQiW4sw5SE5PSfVcz7Kob",
  "key35": "2seViPJdAfEheyPXvj881gvmJteJcZF7KHEiF2MsKuNRu2EwGBkhkBfE3RPq5K5AABmNEUbASSJZWeDNTt3pJWrd",
  "key36": "4Y8ocuyKR5VsVZBpVwGVTVsAQhKfhoDq4TBVGw61fzwiZug929pccLwsodE3GzmNpaXjaKwRL33asQ2psM5chmH8",
  "key37": "4ZRnX7RjaxF7C3HvH23rJ7148JSqwigvSY45vQEuTEKHvajgogACfFhTCMVrub6wxFyRNMUmdMj5e1XiU1dBsMbg",
  "key38": "3wsTGkTTHa8vme8ACDekHYJF3EP2e7pvkeSVjXeTcCwgkCSZz48sf3f5LnpvBJiT22d9v6Lc8eWS9XBYozbfybDE",
  "key39": "2ZeAmb98PFpQVxk7JCpHsz1T1sEkPpdGFEfE4tkXWd25v7yHPqfkfYryZzAvvqXiwnFNGSBTCT88XZ7MsE6E4enV",
  "key40": "337VCsLoJh1RMED9vXL8A3eVPUiv5BFKqGsKiugqMREQnoxa5gihgYjzfSdAbXcx79HRTGekiEM1pfTAxQQvw1KC",
  "key41": "a3WBS7qHCiogEDDMQgYDMNbRtPTMrb5HDQigyrNyfnBnSg8KG9Mztd4gej1ZfbzwvFK4cffvT3c7C4fwUbfHpJU",
  "key42": "2zXZ8J1qjE9poj3aEhZPSmUX3wAFKBFkXCn4KVobD2X6HisBVBCMBqjfGUkZAQg2QbME2t4i7q6TnZVUPFRTryPJ",
  "key43": "8KYY684H6gJhXsVUANbYJ4Wcx4j6D26VLex6UKFUaBUQmEurLp1qxsBAjQPVbc68urnVs5pnNFPXGndGSs2yWYx",
  "key44": "5TA8CMGR6GHdgPBKt66maNYK7nWjGanFhm1PUKMYxDLWvBQkNnKarsHEVd9dDqxD9bGpKDCzhLgriu4wwHAxsAuR"
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
