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
    "3Bx2yg2LqUKPxPttoySN6aBi7zTgiWDday5osUnz9Updkx3eU1akGyvfAyn1topszvvhcCd9HxGXcU2nAsbesAH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2pFxQhq1Gh5GTxP4o8A4tP7DjPEeuJjTnFfXihGRp8HeTQpWvM7vxYqhMuMb8JSmKBguLcagv2KY725vdEPQrA",
  "key1": "25znwdK2XyFVJS2i8PyiPgMVcKidvSF6RyJ5J6TX9bnamRtf2QK2krRaMJh3Vp5dVFoHNjjqUAFN3p3p7KGcoQNa",
  "key2": "4kbgnPkiKNomymLYZkWWopbD6CbX5GLRqsH3FoAq61tceaEX7FKEsxkTHfyYSnxZJT6CU85JsL36jUBFdTr3D7Cb",
  "key3": "LRiaYJxz1Xw7DffHQmmK3d15NX9dJMDzRfui9fRDiGWddbZRNcH8MNC6dbURoS6QJ7c94SHVQZPxrd9qqbSyqJg",
  "key4": "vhw76DhPazvZeeox4RjgHV81Yn251dYfWvCXcjtMSRDJQ5NqRrj5TsjgJjtjiXcwNKix3AJchaDweGVqLp9D2Us",
  "key5": "3JRob94ZmfNn9kUeQgKknVvmMrZ529YsK4CU18szMgXAxokP6Qxu3ow9Y2vFNqn75tWRTgM4snwV9ShZmtvMDvw3",
  "key6": "3Ui1icQTDQi8LGTfcRH6HGsJzhZ3Ua9tLgz7wfbD7eqfxoBBYRcrAeR1gtMUpV7eGvZUa6dnFm4aTVzMfpgQWvy3",
  "key7": "3kXGRngHDq6H8hNnvzxmJh12n4tBKrNot7Pev8efkWFCsfqHVhRey5sXrKWnbVPZGsrG6We77PWdB19BwHfNWbW3",
  "key8": "665fiJRh2YXFRiTrrt1hyw7KxvJ9frUUyj8sg4Wp7ScHkstKYidKr2riyAh9JhRNj2uELmy2z8jNG6kmA14Dt3s5",
  "key9": "4gMo3aEscFvzXdv6vsThE8NGFNk9U9D53h4jDRHCdbhbmR4WLsgEqU8ftMjkcsF67gsMrrJFs3niatyXTtMHzyha",
  "key10": "2ty1rTZw12mMMYRtBoxKtcGGrj8ayzGHBEi3ApBbYNvm4SDetZLhqJC3m5mELXK4tTrzGz11VqjgPn6Vm3EUeSDa",
  "key11": "PXM68S4HuujPmuw5EKiK2QhSrKCDE75WvpUV9gD47YEizjrKYZBJJgvhqHa1q9wRyJD7cNqBzYYS1wUAfqrD6eG",
  "key12": "3B1p57LhaNCYTxcrMTxxmKAnUXhkDticzyPSFwpnoJkXMN6ak9dvseSj1EykpT9uFDbfqbjzLEuaFYvQdhzrWhRR",
  "key13": "4YDjwcdJre2pnvMNdtXRuf5ZrvgSKJeCLyvUKDhCATfqj2w5WpPNmRDcAPSpkDxkWaKKkcXBUBJgoMwMJ7NXYJQT",
  "key14": "5tBP78MN237bMdKMuhsyEpBoT7mm9j9pJotg13ksYktPLnYdVAQXkeAkqvdT5K9fDwcjiWWXKXiNoUpWjPRht1E2",
  "key15": "4UxyviZ7fZbzUGnVpVFh8ykd9bdDLiBhLaT2qXYkdo8xeumCHndZwyBKZy6Bs83ZyWYddKGbp4xqKmA8GGR5ZQLm",
  "key16": "WCAdMJ5fnJuKhVehjX4FLpZKbxELnwEaytvpAuu8xkKkDUVkG8DHty8qyCoLuB2kCSeLv15dPpt9hRAABAXVzQT",
  "key17": "z4zjNCaYkAmfY7AShgHvADWTuAF7ym5fVkjNvQqX493QbrxDVAeSH7TYBCWM7hft2vnTocmH9dMTMoycTJYkaY9",
  "key18": "3DpkzhnHMbnVJ2h236LCevacpyptYn4TC2zHYvkjTMqU4UnTjqhKtXafweoeTbUBfZTphAQ9rZDECgAiqqMEZYdd",
  "key19": "baZASZCCXm8y2BVATMpnJVnRAboJDvZ2DDmvuwpADyHgSRkvopE5nQK9f7q5zYFKHPKC62e92mLAmDhphTDrRph",
  "key20": "3UXmfbG23xLGZtdtyB1N6EZuYTsqW4uretY5qSGQUNZ4x3BkV6LDtoSxaBnHQkmLQxMH8Ug2SBdLbYbBU9iK6irb",
  "key21": "4WahmFWAzBNLA7mW28McrKLCMbotEbBVQiSdAWkRAQLiVHDX1bgdrpK8NKVFZDvcpUeDuPKzFF2ynUWzyeTKeBUf",
  "key22": "2ZNXEHdSh9v41EmwBLiRq3tJ9Lcz7UN6cn8d17K6fsuHHdWCnCLPU3N1NgjD4eeQX69iybsMvB6YmpYiRUZ3tCvj",
  "key23": "3K6mhvJNXvQCr631VUVa4dw6ZdAnB3mBfG3CtBp4biMZUJRQU83opsyMdsom6P3tiTMqBMMcEVa6GAck9xYrUh1P",
  "key24": "TvQghSC2E5Lk2A7TbxwWBTgvR584JgPvdDYUjCJ2Pwj6PYLPVi88jDVGgmzEJoRE5NFnPMQQJ7QmN4HYWuJDtV1",
  "key25": "eHpT6JtazkBGedg3KRbKXWF78gB9rPvHkkmeoDkYWctBQuGBB2LY1rrYKp7twtvrJn2DWAbrtjXPpwQmrwz4XtR",
  "key26": "pa2JPc66MDJ7bn7dfTTDWjwi4QJgdiYKAB99NPHtsErQAXPiyET8Ct7USM5ENBPSFJrx1gbC5VYEUr8uvpPur4t",
  "key27": "5CiSpspBngxX7fF1GNjcMQUuLbMfnMMAK9TBntdahSvuVBdoxmYVV6WfmRXBQq7DkMxoXL7UYPkrLmXHas3a1W7e",
  "key28": "5AQJva8T61w4s4ApgMvTmRYjZYrCgzKdGca8LFScETGBF6ymz4mSb9ZMBoyXLdSn1hE4Qj5EEwfMDJXWcLtfhbNZ",
  "key29": "3D3XcZVXG9yW6R88RE1Ryd27KBPfR44seJcyQ4oU2h9T73gPqS146g8jmZYbXGsCuWjvcPaPGV2Xo3xqMVc1ffVG",
  "key30": "2XpTDtPsZZ8aA9tV4UzTN2USteHtr4s3GqX4pe1YZd2iLAc4een5HhdoPxa9RTYRWkHSfHnNbNjNJWtRK2sa2PvJ",
  "key31": "2pyXae9yGvMz4K3kMnutcThzieeRMtTvXQac7RtUwpL4PwXAPFyaNgAFicDSAe1JjJQcxq55XXKkL1BXVeSktzeG",
  "key32": "4Nubt8GKNGRcyARNMjSsKH9DkubWE8NNQYhX9pAojSxMg6e52KDUT3AAr9wztLjcngaVBJ2fNVC2nhYDuWQYnzPX",
  "key33": "jrvmffQ5Lq9JKiQ4tFhMbVzjA9SUmEgngbK91w8Epzx3exQfrD8yJkobyLxc4tD6iPJZdGy2eHxhjWTmezFhQSu",
  "key34": "2JU5iNoNF3MBzVYEB7ZZiqDJguREyshJUyfTx3a6c9GT6JAZa9kZmhLXXipyEx7Th8ZVBo9gZHZfV19Gy2u7Y9kN",
  "key35": "uyfqqPkoJHgf9qvF69NUxZSRwPkyUt5dkeb8csTB31NG6mTJbgJiiMBoxbih7uhCZ6tED2Z6BMWhtHQeQzKdwub",
  "key36": "5eMFWcGcnA3Fc2cFSnszHAFKLgf4QpTGTehg9kSzqBxJ5vshZnRA2BM2ktPmQak4bGNiR3rztnp33jktoUv21mY5",
  "key37": "3TBkyokBgL3hqGCk1WPiCqwW1RhbK1CXQn17Wnmg9wYx2JKuyoTUf6A6u8bFaHszSpYmZGdrzZQ8CQWj68RWC1Qi",
  "key38": "5WPnrGrR2N4cmH6hwPSbJqVcB3AtPR8KNNsknLENwMLPisSE4AjMvHdScgA61NFtsBAdDMxt7jsDYyyun9z8cmU5",
  "key39": "NR9JEn6vUHUVUUCmQcV5PK553MjXhipnyp9Db7hg3EqE4tjaApNVJYqUKHsEimwiS249sUTbnat3frgTmrCYdQm",
  "key40": "63gqStJECrxLsT6dNrBAtjnaVUKQo6WyySFWHKqjvR4owKGpBaoXVGxBiFppizYCPuKTGXnu17WcyvoGJJUy767K",
  "key41": "2LAEj53HjnsxqKX9L4fgbJqL4RLqXKE5WM9FXJamwVbFCigJ2v8LYG1Gb1CCnDP5KtkuuxbWdCvrNNengv571w7N",
  "key42": "2RgeQX3dUpttFL5CSLTvZpmoXLcFga9F9uTLtgG5Z63kdZ4qeTtBh7fZcA2PWZSPmAn9kHQeHjbe9ki4pZQPSLLY",
  "key43": "21R2jU9MQK98ouDyikX6yV5gF95UmeKqBTbyn4RBggitZzkN92yML1RwVsRvf2iZRfgauzX2rdmB73D2v6McdhEj",
  "key44": "3x5ciLGqdoNxrHeB1BMuh3fyzM16F15evszn94JZZHdxwQhfBk6wwgymdCiqdZSwBkVsLCG8MNy7zeuQ6YyjBxbJ",
  "key45": "2kYBndmoLW5jkBJ9wGu5wyJv5risPKnsaZx8j83h4LvNjuGxGbv7ccdz3E6ySAiR2No3feoSMFsG8pTQpvEshv6b",
  "key46": "3CNUmn2UaceHNMzbbCB47pZnPUzGZky34XGUWhvoGpkCrKCSTeW53TxHCW2tPE4PQmfT1iySV5qbBwHW4XejbB2J",
  "key47": "5XywNUmdkYc42FLoLcpbBMzaGfg2EREEWaVE4nAXtSmAKUjYRzTXegdXuKmeve2gUzDhPyzysio4aYL6BcReDEy4"
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
