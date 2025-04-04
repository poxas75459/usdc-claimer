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
    "2jEDJbhXqC89GE9NR8iyBHcJifEQZJS1PTM9kTjyEqCyn8z7tigaWrjMMLk9QCivJqC7V9zb9foZH7Mi9iGRLJcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAEXLCekiLbjY1ekZngFjHYtLcorc1yzJircH2qEbh7sENVbZXcxAr9VKcdJx6gYESSN3Abc38xSuas7GyAsMnP",
  "key1": "4z8JRVGdJffk5urAis7bc3brDBfqU8Quo52jRgX4c8tVW1HuQLuF5nbSaWQQxtPsqvWbE5GDHy7c8TcPJcLHdXsj",
  "key2": "3ZEnfQ3Xb9V4LqHQ2Kb1VgaszvgKgqfFtL42z6nv36TPuqRuzhRfbqPh8VR6H5koh1AtX7m5fhex4bCWsDkhP2Ro",
  "key3": "5Cdcy9UBda218jghSrtf23KwH4pzTm4yHQwaNMuejT944KQdeYpXo4NDhRZPWLq3sejUf1NH3GVBRh48vdnPFSD8",
  "key4": "2PNjHuaUTMxM2TEAV9Lw4RZoJqP6LdDvhUfmAcXLxFr6qxbaaiFbkEH96R8e5b4VerUpL6hk1vxuuoHaMxxizFjF",
  "key5": "5JxQoASD3eHnPs5c5rKXZ1PjXVhdNcUJ6C92V6EMgayiNWxUKuuHWpmWuU8k5n1mprq9kdauTx3w7KKSfggcgYBG",
  "key6": "22aPwqVJJEwh5riB36X434ENmi9nNpczsXy66fxTAPhNmLKKk9EoFWfJRyAwBrRY5uA4HphLsJDz39SxDApWE2uF",
  "key7": "3wBNgwHGHPDit3LqNA3mg1ig7bQPsnLLu49VjmnMtpxgBUfPeUsN6NNM3nbZTf6fPFqGo8Vi6e9HKZcXQNcvGUmV",
  "key8": "gnMGm4e2wv6TFpKNsXQDn9UKfG6t9peuC2bRsfzHEQhkrnPz5j2VZgrodEWetjHCcDjhaQ18sV47fqGqiXpoNxA",
  "key9": "2Wt8cfPxKf4z4Awxw1bfg8YZbEa4i9xtBpmAyLRRceFQfn7LHPbxoWorbm56eqGfp4rweeaZjGXTWc7YBFqkVszv",
  "key10": "64JEmKooYxacRhNumNvqCWWUFNYoxsvi4QhbqTxdyYLt4avudHMFoA5h5ihyErRaaCCkS9WZfxPE1XB8mYedZjGF",
  "key11": "36WHt4oScmFSXfFueQQbcu5CRLWLGDwHhkXKZGjSeB5sbVkVfy79hKF4hwSNwXAVwGVJVsFKgWR7MJAirgnivqGW",
  "key12": "4Ltx3PGRCnCSWC1pkwjTsnDt1gyXFt9wF9RgkrMJce2TjHFa2uc7NTCdmnFrSVVWUw98syKQFTMGdyJk9fzJFbX4",
  "key13": "53za5gpDT5xyBa6F2pCTqBagRYLLR87U549xRpGuEN93qJdYSfKfJKmhDTW4WL9yh4TWuCwZtu9trn7Z4hTkU6TY",
  "key14": "3yH6MmcyHvDs6cFGhST1yj1jVPXV1atiQQSTVUvSarzNsV1DqshEJcjDxh8UKAwUACMryms65Z5xjesNyhbtt7ah",
  "key15": "3n9HLVfq8ahrHiR8ESzBvZ8DGEyyNERSspjTL2o5aLZjZdUFjAjvhZr3EXU22HgG7SQg53NbmVAEC2wrQJEztfMH",
  "key16": "5hApHtrDcHoTL6vWT3Pczk1HFgyozVZrWewV5Kcccvf9MUVENCT1m83ynMXcNtNwvgntwdTyoZHfjQskiDQtXK1s",
  "key17": "3w6JuP3W2f3GTJLA53eu1cd8LQ75Efoz7f95LXVZgCtmDufkCmeYWTDRVfiVbpFSk5uZYAF6mXa1WCvbCMEs8hhk",
  "key18": "54gFCkx5aExpsxxNLEJweHgh8Q53RzwJkjZSuXG9gkHDhxjCsjRMQ3XLJZcXWC17BB3DjaVPuwV3Agzf699AnahQ",
  "key19": "MdrMwKs5NyiLgxqswJ5E1HgETrjFQjuqXTjbZ7VKTnHBf7oWn7R58DaCp9y8q5aDhEp1997EbBfAP6nL24B6tqc",
  "key20": "2iWCnNhPxFZK4zLezzoXmWAcPsbLqVpeWgUnzysxgMfKXY4jwo8CRyQnH3BWYc7EgoPNyjmWrqY6Meyd9DPHHKrG",
  "key21": "5MLHvwGmCoFw56UzPZtE6HTnN2PMNfkrBZ3nbNgAzw1eJxK9Da84Vy3NoXn6eSaWK4Y1ZeqWQsA37myoUH6GUPuM",
  "key22": "2GoL1zNPbtWQVQAPaUsmnP9y1FQTfLZgY89kY11Vn7zHEp9Btp3xB8RjE6fTSoVaX3aqtYrGKTZUqHZ53drxUSt5",
  "key23": "AhVGzZ4LKsLJUCMHU5r7HrY6ZhwKnSvTrqzsXwMeZTEK3iBfjSmLaiviq5ZuN4cEXvzcDcrjQ6jamem1udHsjDv",
  "key24": "2wztXWWAgjpqyvNTAGvGjndRtd7XpperZC7AjGVkSGCiS2iZRyKqo2UEVxwVF3qs98JX3KzrYyLwgWE9cjD1brma",
  "key25": "3pBAXkmh1eacRjwQJX2Xu3KnshqEmRPvUBbjgzgFoLsCorHofSrSs28x5123LyAXsp31nry7MCWGwXGTbvSBcUWY",
  "key26": "2S5n2T71rmmdGDE1yVDzzfTr3JeZSAnT6CyFeyCsa3yy1zzQ4DNZrTEazizAuyyCYbUSqJCTtTgakumsHXHkCdqn",
  "key27": "35p5u2vKfY2dsTgN8mdgokATkCKXjMaMWW78GP8XTKXBFqoLQyKida4x1PQzZYn6Y2qvMS7v8U8pBX5pnGg9JQXd",
  "key28": "Xj55rwgP4nSizwgZqgKK2awSz8ajXrKYCHTCY4fU9DqfwoyZzFb3pudPyvu4i2U7LyTQDLWSWvaRBZbMW5c2Kka",
  "key29": "39tFah7Yr8YN3Tw3BV48Ho5UDNoHpGanzQwkpGVbFJ63UpdRCeGt3gBHrRdTKqEtw84cFfEVxFX9LTvvEKMMWGRb",
  "key30": "4Drtg4iuyj8nyuj1nbNLj9ERwmzYuffGr3M1mtNt6DNbVqsqsKAMvfcuCDbjaUnYkZysUWtjfV46MCybnTTkY3uU",
  "key31": "5rQJvV2z4kBUXPvSxfmFTsmfmNfC5gMN5MRtviuyAgv2Bp6cazo43zpKfjLnBfzRtXkc9yT3TPfccDZ8MbJhpzGx",
  "key32": "37tuHt1ULGeQjdH2Mu2RxvkVjrVmYbS6PXPf3PqX5r9TtwAM73CCF1pQfrEJBhuvxq7PHiaCEz1tqqLbBgn4xEQW",
  "key33": "8u5A2QmyF52X9LnwqV8i1XZYZaedXoGxhx5btBj8Y2Qh8nQ9STzXGMuJLvZ1JafcNABAWPzTMicRHDzz7WGbhfD",
  "key34": "3M4nxu3jsW48emYTeyveTwQLc56nkRvPsJyD3K6RcphUthP9Xh3C3PCQxNFfLKJEqbeeqvZWsEMj6Q1Was6nJJeB",
  "key35": "5hKUhmDGzd4zS4mrWm7fCNgjoPmyT5Kt9Mqw1UQ2U2Tu1sPseshfaKc3RzVfaWJinEuf92ZPwWzEUp9xSVDeJEdw",
  "key36": "3p3JRkupqkmKEhbFaKUSx2pSqW2SrZCFTAiioa6SQQZaJ7eruHirnJYuLy343vC1afptwrZDtpepKerAb3k7z9p3",
  "key37": "Du5xsvxvBWEPJd4Q2FGUSiJ5fsQ5Hr7Egk8TaELvPWPCHz7Xbx9y3E8Nk5NJPYHTGmzLU5Qbps2iUXM3G4i4TBZ",
  "key38": "kzqLL6uZcLTLTL4rQW9TLRUvUTYQ24rRnBcyASq7beyU8xom4egYgyh1HaRoVW1LMScXJTUA3ytDr2e5nibCG8W",
  "key39": "22YKQmmYaJ6gVutSYFtwe75vw5yogatVm9oFCbqv1jqs1QbHtU7qe2XK3yL82KtPaapF4trAWMQTYhwc4j4Td1dw",
  "key40": "JuTcKFVDeQTth1CKnG6P4jE8UzUx9wifRxYtsvTot1FdpHCPhWtLuezb71QWEWmSNuatEH1RNN3zBnjAk5kuAL1",
  "key41": "5KqcVex1W4AmW6skFRBq9Tth4gWYLGzEkANeqXYgkvbLHVEJ3aNK2rLsRdCvXAEr7CZYQdxNvqoCizaNPTZca6L1",
  "key42": "4H1RwkbkbzG4MXqgTcQB7ufzYvW5vhhL64S1y2s7Vci267Xd3z99LtiugahDKVEosrqrjpdq9j2dKhXRP4fJ5btj"
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
