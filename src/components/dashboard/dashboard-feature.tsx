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
    "2wov96CrFwf3RrSoxLJmsLDS8Sr3ydHDFn7XvJgH8rSivAGJgmqXz3Mz5rMdkPF9SXsTFN8cQGqja4LpVPCh66pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z1pvbWySSLCZvbFkZUNvieWeSC8yX1fCHERzcZQ5eEs63tCv1LeQkfxeJG6GivhFpecYzDYHirmuXhsWqV3ZLUh",
  "key1": "5eEpvL3ufnt3xTMB4ySNb2U5KRoDCsFywNb8B3gaifv7rzMo8bGnsjdXWABU8moeBvRtGYw7c2UmQwUubPAwX3xM",
  "key2": "5P3ev6HBxrhdCx3LYgCgJ3R8wie3azxJLfUWVr9PnE9syCK2rVpNMkja9FmM8YMKheSYVp5aLmjejPFxhA3ueD5p",
  "key3": "3jBMQDZdXVXw8FGvULbQhqQLShqkp9qUa3ETwtaTwf2Er5xcHKSEEjsUQWV8ci32PFit4cxRvx266DKnw2CmBVNz",
  "key4": "2f1xGFFu3XdEhVdu3hB4E3UFUnjHqZHa1HrySzownTm3nQpoCkxzGUD7keaPBXyyGQiWFt3oxjNA8WC9P63mWmm3",
  "key5": "3e3g88fu9vX87Z3RG2XKNC7ow8MWq42keLVW35GDa5XoajADZCodyBYshyjgk6ZTLv2HRH9AYczH8TsrvsB84hWM",
  "key6": "67iJFisx5gb6RfMR4Fyo55X6orHZcwVpTb2kaSvLGpWU1opd8fArTiNfmFRv5TPLcZ5ctYWCY6NaZgwdp2g1sFF3",
  "key7": "hK5hq3U2n9jx6zzhUGMbAKCeMyzKA2PQzgHUwxj4p2K4jWWV63CV9snKRZEv942LGLAcxxJJGV2JMPDk6GfSg9S",
  "key8": "4nGZEWLNrzFPN8VFL4bu3x1NCxeE6QTT6xg12DnYTHmETrykLAahPPxis8idZ6UWpe2jBVLDxV4QYfcQjsRMwF4M",
  "key9": "2PBvqQjt3chTwunBThqcNQdyBhqaPW1RUgDZpYEXqHc4vC7irCmrfRwLjdVMCsHwkT44u2p6ivq3zgo1hyQQ1HaV",
  "key10": "32ru6i8FdCFLUStu9X1EXoVR4A7NFSFXQDmfyRA6zsbK4eBx2fz7gMck6PcG46LVdytsxZxhM9T8smcirGJL5uiB",
  "key11": "4i1VYrzCwqd3aX1sbFWTUnjGq1XTxpNEGTrv3y4NUgkU5DyvtwnbZ55tx2AXRo7FKGYAD9YrixsKuaPY9ghh83E2",
  "key12": "5fgtvQFBG2ykvG3ipQ6m71hdgCbjJxNSYheeBmomFJCisf9hb4WWUPPQHjLPBw8EbqkVHRJGwf1KcUvNLX461NNq",
  "key13": "FcxVB8PJC6ifG14rBNuHCikg4RZDoEqXawjACejKgsTugWHFtoBmSKaswvGiyy5DMreehDrAzsyRg2n8cEVdRot",
  "key14": "29G2Y2fhjQ8kCk4ZzEnFeLef1XL2iBFSErk6iiF6CG9q3n9Ng1mjPVgM1x9Kb3AMfEWP1tCdgBDJrJccGcvaX6S9",
  "key15": "4qK4iLtB82rCfmuGrGh5PXQg3PwGzdXknYgYsVhQpKip1kvzSfspSRXC8rNSHtsW231hJfGHsrGkCC5BXSj2jXUB",
  "key16": "3RmY3w8Sv9GfQQHatqyr6DNx1jG6uTFYN9yYVV3bEBgjAeQnCqUMT5UyugWyDAeu9NaNAEDjPLd5eno5VwqMR2nM",
  "key17": "5uHhEX8M55qDA7vxA6XPYonPzggR6LCV9KffEdDA1UNxJkfAyZBHdgSwcvvep3WKibcDe3usanML5g7H1hUEwf3p",
  "key18": "G2biyRYau1aixfdmztnGqdadYXUk7gNwozSdjgS6Sc7goQJazyyRQ2UFZgY5xHv3VrtmWvXbzcf7hkagY6Lu4gu",
  "key19": "3NgWK8WbYDLSuQ97GaeGM9p9XrbiuU3WmnUjr1K4SbzYaQGyKs19TVZXKzA4njmba18M87J3YrJRNpDpYSKPjXxR",
  "key20": "Bs7Ro1RD4nLYkCygwzAGrFeZJQuu2ynHp6abRQbFzXUofnwnr6MBjcMsCbN3BUHSvy4qUB7gfwzSXh7PjGuPYUk",
  "key21": "4BNgsttpucYobNgutntc1m85q2XmueLLYxeLLhRX7jyNfJLyyi4BkPgqsF4PjyKY1gPnqPg8cxurZY9DHv2HkiK8",
  "key22": "jaKN7U5BYgB6z2Jd875ytuxXKCRBfe6FGdKeLwGvHJ9dYHzp6yfBgyZMpQwMTb3aiSm9kW4v1dKm2jj4griiiZ5",
  "key23": "5t2KbYn2CvLRv5EdaKERv5YRo88cdSFjHYBeg8ktiyeSGhKeJFRrWgU3Gt6dnRWUhGb4SuZc1iovQR5vjgPDPtgz",
  "key24": "4NmmpDaAFqaBoZSRmuyWRkJsHk1fRYFxbdknTtKjtHx8k9ioCJC7tXWkHEY1t6f3pZVuVn83EeiMbtv4JH2RsFCW",
  "key25": "3CcyTEmi1wgeFQSmsp2tky4SAHj3LvCbamoj6u6J6AjdQuLsSZCZjyb2zcLQGPJETe1YPcsnVR5M9nHqgtbbyM5q",
  "key26": "3BcNmE8i8gkNMJzDHvit3S48rpFJsyW1fB2qJHWYx4MuPhoGwMgh4CVQrvWKU8LDk6thnG7vyTABaDKzVRTbuNTy",
  "key27": "5F1xTn8FXQFWd5g5MHcPV5R8RVENPui8bgLBUuzagdwLLrtYj1TPqUCogGqgvBQzJZ8DZrw5DRVen9cN1LywyCZ2",
  "key28": "55XAh7W4gAqbqBkZwSF3V1Ak5v2FfJARgFZx3C6xeW9gF1nfTCkp7HpRNFFkdU4a3Hox43o7b1z9T382hwSohoBK",
  "key29": "5Yu18Htrt1MLjfkP6cZpFKJKJWmhjrRawegUpTtmjg4YpdLMWPdrMX3GyfGGKvFMNGriaQrnagZTYsYaqWjZsEkD",
  "key30": "66qr1GnAGVCyGwkkmELipeQ34s4hDRSWR3jo8yoBPUwQgPYBXKJFm81DtDopiYqqzvRTJ6yvdBrrgp6M6ZZZdaAv"
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
