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
    "2ZvcjChexL5hacCfC6for28NypwzWGqrHUqsMkXSNoWbRZVFKV48Yp4VZzoQcrV4LtjQWFMmmcvBDFrdkJEtftwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3biKtWy6dTST9TwLS9Ukx3PL9iBsX5BBc7VSA3sSjtuw4kkNGA5ja4vrg4UeMHB4MNR4d5T2adjkojeSkoYp98Un",
  "key1": "oFuSio18BtAk1jcKFPDhNyV5eSXsG6fEqp44mfCkWSaipGWnGpUbpLunDLSNu7DLREkKWuAgYwwFU65s9ZWY7Lm",
  "key2": "2hWE4XDix25SiGWHcKhsHQUZCukKPbkSSZhzsWazQy6f4ebkqmWkiWLEzVCXogb1gYCzbkjPi74Ftr7oEtu91BPD",
  "key3": "b76vAzmK7GzbW7AuHXGNKxMhK5ahvMsNjgtVjxgptn9q9WVTTmqJvuYsRuimnncav9JkKo87WuGZRJcKbywXxkT",
  "key4": "2f9A7GvobZ2u3bAfyZCtzzWrjKggzwb6XX8qNirxhguPEbieDimxRJ2zNbD98E5YQmJfa3wEN4n3KbYvbkz8Hb9z",
  "key5": "4fFuJhpXrFrPF7wrABDAHsfYVgDmFmFtdb99s2U2b3kJH1YFLggzU5HCwoZoWAvBro2k9Anc68nQh9ZDqYwYsVWr",
  "key6": "55W6cAaEyYfP62NAAMcQ5DewCusXe7k2z54UFiZcDEAqhgCMn6nRazthm8reXed73CBNL1VnzgEnw1qR4iEoG5uf",
  "key7": "67dTyr2iafexDvgbZWWbqeSj2Py7X4QEhtqGR8YGn8AHhJ3fkHBMQhdPVN7FQQ64pL5dv4kkobkBH5poD3YXy4VL",
  "key8": "3rSGdFm5zMQTQP75cL56XcxeF6RBPNGZ7AguSHwaCRUMMra98A2DtDyQxqXKq2uryBBiqey4g7TjzCYZpuq8dhyR",
  "key9": "35yFZU3cdc8hTwD5vRw7xbsfckTrTYVxWsK777Z9RMML7xji9ZHy2daVKyhZqSotbaBzFbzhajWUv1yPesDiYt5A",
  "key10": "ox8xfcLvsA214VoGQ4Gsp4DjrYFmm8KPp8r4n4dep7SzuU6vA5Mdc4asJsYEMLrz4xiceNtBfoJ5GRkqrHMuqL3",
  "key11": "3izh6ixWc8Adq2Jcw5krBfamKrnEq6WFSDPyFfapntbFTwAAcTr8Nkz5jACH4EzwBHmKS4tb29R9RhekkvX5ppgG",
  "key12": "43mmqdLusPaDCgAGwo61CuCT6cMxNXE2h9DkdQyDyCqFZNMByaB6FCiEjTFMoYraWM8DHqp4Zu9bEbFkGYr7T886",
  "key13": "5hWUbpBwPot4dLBjhLsvWAwqPiQZuDK6pTWhZPBwiRRgHaqLYGMCJu1RZpzUpFspnWWVZeLXkkfqsqESmrDs5331",
  "key14": "3agaFPYQ3hdfLCV9Y6rtgwHrsGKf9oBhaCgrPM4R2PdXCeimYPYE9kTy2HnSUktWVoxJXt3WxpayV5uKJCUb1Cke",
  "key15": "27Cvu2iT9mEvg75WrBe4xqeN8TagdtQKEwpPYHwQMHrAoLvhL9ngAMrsCaidnrNGEUnypH7V7UAL15u1aFoTYPGB",
  "key16": "2CptWVi4crYsjwLnqnxUDMFV4e8NfpXDtd73XeRqUNPuH3fMkcKoEobBtDFceFhTayHLW1ahXmTNRTJ3pc9bmhHQ",
  "key17": "5GEVarWB16hT2ssbyhgLr2QARscpCi8HVfAxSYMMwGCfjvcNHYVmpYvifDRBZpDiVEVTR1isNUEsXZMJ4JkikeLd",
  "key18": "51vnfGbF74qnHecmFU7761Xnz4NnXax8A2eMYh3QFsqkw4sEhNKWxfJVXcg8qCU8jqx95VVNgAmMfo4KKwCrmeZ9",
  "key19": "5KctEnxMMk2mU2UdhgPniJWLbaL2C7fTRSQjbATusFMJ2ENHs1fYi9x6Tdy8TiChkTZCfhfn2tL7SXHne64pPmiq",
  "key20": "Uz6MLL4kpNBGGYaDi1kbWhFAuNm4fo6Q2xSDkGpnnwxyKVn9RmGt8x2DRiXNxCFEh3SSmPSBpmwaR8ad9PANqYK",
  "key21": "3DwwuWHS96QEtBKrffXihZVJqi8nBqFDBavZDtv4pkHs7pXi2u4V7MCmtta6xCXFQU8JDsqDueC4ukypfkZCXoo4",
  "key22": "Xde1yyasXe8hZJiKgv865yYCV6KirEF7PpWr9ti4CP2W6CKcFZQCvjfCFipdUJ1975NidGMSD6kGAMbJG3JJwHS",
  "key23": "3fdCyjrhGJYcUP8dMKivSMkwECa8Cwgwap7fD9j51rxziwUfmhTo49BWY1vZTYnMv3F6hFgRyVGWkcsJDLEEvc7V",
  "key24": "35HykFxxksHz5FiiRNgPHhJF9uNuDtqjqf7UUAAyFgw7QEj5reyUA8LafvgeweLY6FoZK2XENws9eESvjdAinKQf",
  "key25": "2TuQwLHs6NFkZtcjtAEpvcqwMJY8XvnDiqxGuAv1gKFbMxLHcvXo9LxCV5ENRDEMuSbwYcKiVJKo1XGsttcqALZV",
  "key26": "5ksH18Jq5mpbgaZvMcLGdh9Q9xym1ybsFseFBxGxu8EcTwtiPah7cWnTx9DpdJjDkEKBDj7xTwiKKVd6zB4CwQLz"
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
