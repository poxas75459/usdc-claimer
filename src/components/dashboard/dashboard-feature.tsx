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
    "426yb2cDXucLJg53g7hgYrWRLcFErPKXp2uf7jfK5yXsUcJDNmvub71xY6d9UUp7L7k4SDXXGh1CeW1yZVcYbs92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zor9CfEJD5sGA3UfVQCyMqdU1Wh9j4xm3Q3qnzUmRW7MEqWqY6jCFzzUe9ikBNxQa3ykU8CNXPufJWe1gB2XkFJ",
  "key1": "awf2D3vT2N3my98yCHrri8c4gq7pNKbpNjQRrJKRuA1VDXeSCecSJtDihStzW256LEdwNVbtvMoozsQU42yu5P1",
  "key2": "ZKcT3zKz9a3T4gXbv6d7C3auvnP6Qhw3cujXddGVygyugt7PythHQ6Uu55eH6QiY653ajTCBrL9aiBMMryxoazV",
  "key3": "BFgEBfC23tyxuD1jwXPCba7ZK5DrtuAREvpybqrafV9ptkKCPWzkz6LaNRp6mXisH5WTyzBSVGwRhBzwGySmM5B",
  "key4": "4zi6CighFqEp7EKCtc7MfUCmH47kpbDbKjKsxL4mTCmVV5ob5gKEoocPebrLPyop5nECpRozAuMXEZFVyQG2sv1r",
  "key5": "35P6goxTDvqEo457MyUGcpbheidPSzmCsKudxZyvuV8Rsfb8sm5hRvxWzQPAN3YzX9S9s3HmG4txzdJK2GToEXyj",
  "key6": "4YrUDcPv5U1eLuxA37iT3M4Gqz8W8gt1B37WNb8CF14vgdA9r5bLUpGGNj4wW1LmDUXLJzLmZAP1XnjYKqFQhFHs",
  "key7": "xfTVqDLjMrxy3qfXkijfurnYepyMnvXPFQFqcZasEDSNFo1BPeGF4mXif6FXGxD1syJTYCrsPg4onTm7Y3MMxH4",
  "key8": "29T1XSUMfHs4W4bqLLGVTP3hgFB6nin9Hx9qdspS3NWMfDwz8wzHw8hYL8h8o1xERbk3ax5JMEK5gct8Pyt6261V",
  "key9": "5Vj3X1CBhTY3Edh1w8WR8AnSSkzaW72JmRm76o9Um26nxESnJDTLYZb1sJURfp6RagVKvhaxNVow6wwFDJPs9hLs",
  "key10": "5LwcaEEi7n4gJro2GewbLPiqvbuMiCh9EcQWmDDEk9DBnqgrYdAD4kpEbQNnFSGFp6bpYX9A3DbDpKRBUZxzGQ7B",
  "key11": "46GG82MgB4ih38LTQbUbC9gw3SgJb8f1gGXiqZAFqzZ6QttS55wYEqyiZKPnWS3HGvwYwhHnrbHxHaipGMETrmR3",
  "key12": "4Xb8f3GScqWd1fTRUC4zBeut16gLcvTYGyrmvcC38Rt5TgXj6K9gafY12pCYK9fCKV3hzWru9wGVvacYz8sMNcti",
  "key13": "hctxQd8GvGKByYe6G3oHq9qQwwhy64CF4gvGjqJ6iCKd6RtVFneRE4YoG6wZ1D6Hk6iSdawesdFRBMqbrsMP3jp",
  "key14": "3yrPX9cCeMW8RbLaaZZsrz6WtVs2vaqR4HW9sz3LiU2xv8sG1k2vVKVzGYJhtQ8eigWB9YhizFyqQGjSUzehfAEL",
  "key15": "3etx7A41PRiSMdphpHxZHXhjfvbsM1KkHFANNtxGzQUBSnKAUsp4rKeKBfBJXbdFRSq2h2AopgNBSiz1fcN6CbHr",
  "key16": "4ewYSUkMRNaVSJVAFZ7w9GoyCwd272cFtctjJeytMgHkbP9WLukCNNfKd9166tKszP886DPUaf9KfjCKzyy4iG8L",
  "key17": "WBWYjWmucjtGvwmAjmLEQGVNuac2suzZZ6Rxs7fMR1VoB2hd4v1gSwZjjrJd4sKAYjnYFb3Eqeku4Ejaaa2kBVC",
  "key18": "4Qjh2cRz6HASoe4RbJGcf7T7gsU4fmaSgkvcpBdofaMiZfczxeQ45bAYycwVs9tzUzVdidiDRhkrkTuru19Qwz8T",
  "key19": "3YGcTeWVCvTxzVxgVnyt7866xgMmzu1acG5Q1sBQNXNjT7cHLBa3j1Lwk5UwLq4LankEDGQYWPF3dDk1BRQJcz5s",
  "key20": "2Mb4VKEKVDdEsPGwVBUqHENi5e7k1LNfquXMGsjit2jJ86Y4J8moCLagsYS96nyi6sDU1y7sq9Kh972E3z9VRGVX",
  "key21": "2CxxZNgUGftYEXg2EdaKdwYX6iZx4v18drPzYunNjq6qHvZMo4ZrLK15qEcECFag1hGfCA6oeZs5zwF2WWR3FRVg",
  "key22": "2xKqLEbb6c1euHZUpNGEW23QDHicnvQ7bxyUGAVgNEBDHXRPLEmaxXxZtypho2A7CNiqfa5D6A1pvsijz3jLXFFj",
  "key23": "kpNL4exMAimCXuXZLA93qGdrZ1EbWRnFS7u7eLPi6LampGLmBNSWrGZvFnh1wKuGWAbBvRMwxTkAqbL3B741mch",
  "key24": "24eii9MEMX3Rie5d5HUtAeWB4TRgCSSs3NLzq7rnXYcfxQtB8LeEsqgWUMdTnDTRxP5gJ4iuC1bqqCbzcBUW8oV1",
  "key25": "Wsmgv9LY2oazvCoS5NUnfTfr2iQSfGmMg25SBVfRcSqq7WaTT7mWTvMyZ1dEQeKrXQ3ugPNmA6qBLqEyzos8DCe",
  "key26": "59Lykqfw1nkUNsf958mZ5dKX2QjERYf4zSpp4efwpya3R2We72VKDiNjyi7oxb4nrakGs5a6HAXj842hVd3hWoQa",
  "key27": "DtrtqhyyL3hZo5c4zKYH8P5d5xjwk8gxVsmsHMHNtXDgkY52u1ThgnBqJBYXc7R7k2Dy3waQV88GGZ1wT7wLqaP",
  "key28": "4wfnGHjqC13W7Lh3c4K83CjB92tEWHhTbjA2Cn5uMUjwRnAZyub6eQLGL6hzcQSAWUD6aBqMZWPfYHpUqUvpTZtD",
  "key29": "2SZgMsrCmWKGXu1hcvA6RzxhqCk3NvxMR1MaZa5MgWZbcqqjMkbaWk2jXA1gv24WVVZ3o91ksv9RvjFRiaCwFySs",
  "key30": "qVSzeaHcD88eFZMESMuqkX8PgAbERDCRQXLmqYSwCnN2uxckVwWRi6nR9cju89DSkvWd4PA8hfbifmrEwrhRkXK",
  "key31": "3oUd3UXZwhEYsyEHisg1JEeZQ2HroD3ZkcBWKXBGgmrT2ockW1YJ524ABDg9umaZcfPoytqmramzoZmoasCy8kze",
  "key32": "2m4rT9VwzGb2GeAQDLrpiqexrg9QiJi6W3aYCfbnontChNJN5o9YLY48Wu3boJWPS3pu23HrrzvS6F2aY3VMr9Wv",
  "key33": "ghSPrtyKTeb8muQ6RT2RbNAWSeFPC9GVjGormy7d1ajmPBjXPyppLeJjQVeaTZa7tpdES7xaPSwLckMGUJgSHLH",
  "key34": "jkNHpQuuFHdAs1cMHUtmvw9jwETw1qtLqvj6pudAiiJ4hDVUEjRW8LtNJgzpD8YNDopcKhjnSTabUMXUk2fXkkA",
  "key35": "677R2itZEH4cRx6BnmcV5gvJDGVdbktLnB8hQsJRFDgha8cNTJnCnkqUhenVeJTnY4UXxQHYhHEPoScJPgSGEon",
  "key36": "5stdSxqEuDARqVgTUQ9NdY8dh29J66W8kpVNxuWGM8EyurzAvxKTVujjAs8RDqA9UkH2f56THnzxEc411BVAgx1C",
  "key37": "bgS19puJWK6GUBUfVuNYMfBonFs5rsUabXwYB69VCYFZCUcfMtV67dScjFqZ7NkDhpykibckEuNfj5Q87LeqMbg",
  "key38": "yRMiNYhAR7bMkUJ1LyPdRWgfuFKE8mhuQ3FtXLA8GsyqGg4Re6CyHRvmEYPtLK5dExHFnCki5397t5VD2zacPUT",
  "key39": "4PnEby6oWEdqw9r3Z3EgUxY4236QXs9PyRUaz7664YXrfjg3w5QcRvkBA2cRsJuoCMdsGMxY5XVwESAP3yMg3Ku7",
  "key40": "2GwwZwG15UWjyhBkYFKMC8hmbt3qDTTRh6FLDku4asC4GHXzYhczrr3XJFV7gaHYZ1JcaXDermGugS8CmixBibG1",
  "key41": "55MhHJNrxbfJaBFJVqEEuDGF6dxrBNrHKrvdxMGn1TfDK8x67zHhgb2FdWsfBVPkKXhF1xUnZ5EwUxDju9ii2QDB",
  "key42": "2kQhy9xCp3vF9toNfwuPiBBFdjZhPkTXdxbB6Td3uStiUgBgarZwTaYnkZMYDwZ3pqBgQ5WCfeAATEs98uD7Hkbs",
  "key43": "29vheHwDPn5njF9QHiXgmfxrf3BqghCJLJbxVtaV6wuvcsLjwquyirgKeQu8xH43KXNdmv7nRpjp8i4scQVruEY9",
  "key44": "pNiLoBFV5cEZsyDCESXMiZ4LiFaozREuJh2u9DruYP3zaBtLYNob2D3755gH9HKU7osro6LqtE8Qox9nXqjabmW",
  "key45": "scB2YVP6aNk7DuT5YrmZAgGfoqtP687Ugpmse3FhxAtahGJvApk3Dsi1QnuycR2HQiXdGcLyWMVL68NcNGNHY5X",
  "key46": "3p1AKzboaXFsbkDiqtcTuja3dmuHfJ78qGUEDz19t1UWPZ4GvPbMVRYUM13A5e6AGwQzQWhZJN1VeeQQG44B6xVd",
  "key47": "2benhqTtwCiGEesJD2V9rWYraeKD78wiwqM28P6cdoi7sBgfSMszmFhNQX73PKsyCVUymu5PsKk3NyKjMj7pTExW",
  "key48": "4qYsUgLZk8gLsyxSzPL1ZAkp6iJiP7mYf7uUMQqWGcvcxyo95nE2QxtSR2iakz5Vkke9BfahqFo2pHgvLojckcxC",
  "key49": "59atP8qGYYQr9SxMCxts3hvfvfeqxiUQzZ6fWxMqcmH1bFEcHFpbojzkXoNbYscN9Te7qsU9bBxoxWiAAqfzPygF"
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
