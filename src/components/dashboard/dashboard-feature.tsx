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
    "2A4D6Baz8mAdXyJgex7CkUnwpJsVrteDDHGx4FYRBKCqTm1A8GBxJQYYot8ciF8wZJuszHnseNyFsA7pWDiyJyHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FgMaEDJRgbLJxfGXr9yMyX63h7W3aBY6nLaFFQUqKjdQ95SQQUgSQwDc4wuBxPPKTyzhM3CHjrGggr1QCibHA2z",
  "key1": "4cFPuX69boAbjcqstz2a667TB1XNzYLtv6mjy84YB1aPVwqdEN2uxunGAibpo6MasEM2CS6uFTCDUN5hVkfsSbJ6",
  "key2": "3akDRYRzdeAHhrsoUddJY8ttrnE3c6GcPbqrHij218DKBNoDbLh41QVCJghtxcAjWJasjbm6jX9RdDg9TxEoP9CN",
  "key3": "2pRRHMhMFQQJnApTkhubkS8DftEAhw651TgHfF2PBFiRs3SHRFnbE6gTAmZtWbmFdgKdobvj4atp1QCkVzd2w9nN",
  "key4": "2Mqo7tuVkjVf8EU6TyFMAhQCRTrjJX8PqjiQC826jyfCuCSTB2RdnmYEJoc2KzmTVMnpCPJfJCqhUTvL2pjsdBA2",
  "key5": "4xV7yYfqCWwpYUiifxZQoANzg1vZhVR1YDW3EhrmQiAYBFnBim71qypDdAZvxpAenQ1p4rpXCToETkWRiThoRhzW",
  "key6": "5qDLA3bzgka1DS2mxo43ZTjY656QqsmqweRYHppT3F9MamLUeJedQ3zKB4sMkJ6pbgrrxAkYfwhW1FHx5bpqia44",
  "key7": "3d9JbKUeVLffnCpUsfnUNb61x8pt1LhgDUrcLqbdXvbw95JzNZ5hvFesukBKAJSvnrD1dyu36zJ6FtiSR75jDb2K",
  "key8": "3WyTf3H25ADadZFJFusJSL6bsgoE45y3TMUNnFXVbvMz5wnb3ke3BS9zcW3NAqyt94f9JR2gXt4BS6ab7x6K7yRP",
  "key9": "2Ph5b8s2rPHVSg9g7JZ4AU9Ckz3McMMzXUKMF5H2nbzSD813gPgVmRMkHPUjsSGiNbZHNBg5wtVSLfJsQqNeAdKN",
  "key10": "49sbUidb6vexLkA8d1q6RNgNWppoRwvgCfQXgoAvTzk8JSoc5NSSzpVvczYsgPRAugzHor6hS4FLkNGEmSD7ji3d",
  "key11": "4VSoiyuugkgGWQ5YwZab2AqCD6764Y1ETo1YgkzjtFwjnsPumVnQR5fMA8cVsVZrufM1A6xR9mGJCkWacDVtQA27",
  "key12": "5cDdgwBegFCtiuwV7QMBCgRnXyHjhs4Qyy7y4w1yMYhcwqfi9wzE9FLi7cauXdjGJjUfa9P1zzQFRQqem2CNGjzq",
  "key13": "4eUgXfHZwmeUwcFdJLZFLCxJRtTCnE3iGGJpinXnco9R58TqVVrQe17NRjvzzVm7H8UxC3JyBugMU1ZqsjG4FT5W",
  "key14": "2Ypn6U6VP3YHbajwv5LrNarNXtsX8XGDfQ9RGANET6CV6u56pYz5xfziy2McTx1jWW2K4QrbYN9aQA9b4Nuuwbcv",
  "key15": "3DrH2BzHshTRVtxp118vQMZGpSHJqWg5zFZTv6oAq4iFbvuYpqj591SeKtLzZKSiTxWy6sLFCrJ6zRvQvvhUrTxy",
  "key16": "4Qg3y1xVtgSiWgnFX4ZmsTpQnLAkSH8Dswm4eXnYSZWctgJFaTiHFQwyU139Zcc95N581EVjXoa98PXnuhThGFGE",
  "key17": "4nDAQVg9jWzsFem3kiFDtHWrp3G3LvqTsk1XzN5GUJwETABv7jPPD6QWm4nYxRsLcFTEnS6cD5a5vhhGnpxBov7S",
  "key18": "4EV9rbr4P6e9Rz5FttERtQN9Y37W2NBzivyJjC27rTtWg8igUMzeHDo8rYg16X8xBieYj9rbpXMrWpHPDjHkhwtu",
  "key19": "22hmByL4GRLDvswRD37gwdCycC3HcZSwyEomrLssMpjuspcKC7cYcLZvV8SjwB9G2T8qjGqJRzVxsa5JJuRZKCY4",
  "key20": "4eeTrdcqKoU8TdbAvdkak7kFxK1QfjU8FrKr1RtoXKttf1So1rX9EjFyzc7BoswPX4P3rYkHAz3hm4hqupxeHmEC",
  "key21": "3JRTynHkewYzK19Af3J7bZfzt7HTnwPNBopHQk2bEMuU4Pe2gZKN6gCYs4D5SPGsqjr2vLT6Lc6NX7kKkzSMzpDJ",
  "key22": "2wdd8RsVqJF9bZMKehBgUqA3Bw2HYzVQaaFYftxrEZvGS9CxUbaLkYDGPv31CQb3ib2Mvf2Yo8HxqiDwWNZ8337m",
  "key23": "dQiBpD6tb9ip9dc3R7RsgqtBFCHCCKQJikqykdZYKjZUmv6JEfsYWMMoweuw6ZLJEJMxk15fyxY4n92zo2fuLwu",
  "key24": "47us5Z1HuVfChKE727ZYPdkUSLyvz3SJS8d4aFADMRLHrf8oe3ewXPu3ngrZxrraDTpnJDC2YMB1N4hGL93MjR8t",
  "key25": "2iAMRLerPrz6EnNmNhXy7ZSdpePoQqVRngW5ZD1h1JkAdAgJwesw6FQ2Z4um1GbXbKLedRmWGoru9ipURAAW23cc",
  "key26": "2TqLb5TBNJFm154xf5uyqypUKcBBjaZZL6sNTRdKyXtoSyPo6e5LiVf58RJCgSSLdiPoLidiC9ay7G8TBzVDAwzU",
  "key27": "CSp6JL5dNEYdbsfp7ZfzkcdAQWHZcqHEnwaJV9zsA9awaYjmNiEtTaaE6RdXt1UKiVRxSXfrq9icjpSibP1J9cF",
  "key28": "2u7c3yTPgJS7tmnD3eUyrRiSQVQBJS9yDTT7SMjJx3brnbdHQwM3Sd4wBetjE88Ui8DazpZBhK4rnhWo7G1FNoGu",
  "key29": "z11u2NF9ctjjhfbVeiNSmZd9a62HfmrRBna17fGVhcFNWy8qYnDgZ7ao8pjAJ3ayQSxFzzVv9Z3KiZNgzZL7fGp",
  "key30": "5FvTj1c228XrQANAuPCumwPrvjZL7Wp9G3xA5QV8moLZ4UC1G7bqBeZfKs4YCPHMPfEryxCu2krXUCHQTf1SiiYg",
  "key31": "5WEka8NRVyoLeEDFwKtxkagXE5MN6PdnZkyS81vYGd7dzicdBfJPR4wkrEM2G4mnPcD9vYZ2YiZkH9cF75UD8B9e",
  "key32": "2m8VAPgTcBbXrsr8XxEfe3gdRoyBtPzfwpu6qm3QVhcj3EMMcNNis7SiMindGpgXsQmRHHxmzALCfDWFyXNuFr47",
  "key33": "2FdoLYG6NnjKNoZvqe51bmbKhJAMpReM5XaoGKSXcEe9HCarGZ8EJZAG5CTTvAY2SngWVovUxhSTVyqKsRRuP3fU",
  "key34": "27E5efS8cnN1mgsV4G4GHUayZPx4j3CqRxxNc6osXGh49tDb8SGa5nVikUYJsv4RcEZBCL6sdkegqCVZHw3M4CS4",
  "key35": "5aT934mpbUydSDzU9GQLxXKZnY7t9T5GEsieek9EkE13KWsDnhCachNo38eS9qJdHJLdDcfATQFByB4judPrXBXf",
  "key36": "4pFd6iyA75DhYRCWRUAP4bpKK72DxtBBVpCtarH7KUeEwQ7yuKAHT4dR3xDyYZ8B7uD8rRM6uD1m1SqzZvw83LjR",
  "key37": "2kaL4AV2Lg6q5uC152uoWSm9vEBxZ12wvsiiyaMYbuGFHY1muTfVCU7yWZtQTu27tgUjWH9Z2N6KYhYNsb4a4WHZ",
  "key38": "5jzktA1C87gtimEY9g7YRQDdRKRkuiA1Hkzy6H8MH6MZz31HDHmhREF6vDzN6Syw6B3VF4bf9VitA1Rdmn2spRzo",
  "key39": "4YuKaSVABvmMWnBgxS35KghFryjQ4shveX9sfkgFC9Fxkt3RZZCiL2GYQA6tbqwNRHkZ9Ttfs18AQypmU4LGxFgi",
  "key40": "3qjvhB94W2YkJebvpgVk9fPPp6SG8hCp4n7Fq7EdV4c2nYNG9rHDE43hiemoGE45dL2hTNkxVBbv8jCRjzfMM2JK",
  "key41": "p1NUgacRyhXmCpPMz9j7KZf8LzVY8zQhTCTK8VWskNdyhiTN16kF26o5FW7HwGEKmf7qXH7JKyj7BPYBRtgmfs3",
  "key42": "4QgW5ufjggFCL7QQf36xF2pekFoiejrMBvMEukeG4ea1hy1B1aczNPWpgGxv5yAjxTLBXPjHpdKBpm3HGSptDQdU",
  "key43": "4Cym98fCVcwLwZex3YQnoyZbF7fcfe6hX2KNsaLsyjrJFB5aLzktNmTMkoaR561naSuNpPwdJ4amgGTWB3pPg3QW",
  "key44": "36V7L3gfUWBWFk1tVAC7pTEivSxKy4eQd4giajjSxq2LdodL1YNTqvphzvXgH7BSxyexa3GQg6b6ABguSy1s2tL6"
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
