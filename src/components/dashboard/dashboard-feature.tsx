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
    "1qNro8FNNNosfA6LnmVVqPH2Wpr7Hzb7sokEUBnGk61mVJYQUxHAjXgqric68njAb3q8VhpfYWg4ZYojyLvrqFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aCVRpyC6Wp8mjuHqkWvDcNYe8YKQGaLxLoN9kaRpxq25vibq9Fuu7CTNFngmBsZvyKUuJ8GYJG4HRx9NWJnAJ8C",
  "key1": "koNbnztrbDsZG8e8VPi8MtqJ8FJdC1epEQrS3TQ5vdfR5aGN23ZGzfAT5VsxY9qnCjhBR6E2B1XX12BAgThu8ur",
  "key2": "2FMNhnyuk3aPggxcXA1RUqANwKt2mY2gDtb41KSWFQqsLQrCi16Xds4SzfwCrdhhdvTsxwcBDAHEkE2np2Abff2m",
  "key3": "hN17ieTWoCT1J28wdBdY22h9G8nJL7m5XX2uhsy2XerzfgtGjkZQWA8FNiCBXSs3vYGfot6WXKYUtAG7QMVHZt3",
  "key4": "fwqgadvBwnCthfkShoG6cx7vJnoHpupm92jbA68HgTHQEGHKKM5esSJma2G2Kf8yrBWXhVsMxLyDokKyRNk9Y9n",
  "key5": "SmMU4DxPkpfbEvsxzRvtSDdka5PEn79b8wKqVo8SLwcrCtrtNdRsapQ2uGhCEY6Rhv945dQjtLZciURiAXiy3HY",
  "key6": "4BymJHmDu9HLaMiaqiwjvm8tUEcnyG1wDkMFzhv6WjDQqEzPAUnjfGf1Bg3grpCJe71seG145wDrXtkLnnbDJc5p",
  "key7": "3sHN4phgA748H1exdPPpfDn1Z4hwyRaDisKjNRfrXeeq7JR7LRGaMi6nq4sYKgUqu1q9BiCsbXgRN7sVGGpVY2i3",
  "key8": "54SyLtQLtFFBqmeZjq3t73NAugtmUqSZctVKEdgxAup4TiH5J1znMf3C7zU3kGuvDNXDbyqfpZg2dcKsUrs1sGVR",
  "key9": "2ZM7jeAhfp4nc9uWxCfiHVANJTQtMBtu3ccUCuBgHANUVJqMZzejs7BofUYJnV54w9mPSmV7QWBeSdwvLLFS4Coe",
  "key10": "83PoSCFekDgaV9NkPD692C4n2QY6QHhXB4GGxyX3ds16PM2WJZVoJMCZJnfbg4vGRRUY28xa7W5xsGcXqJzx2ti",
  "key11": "5VidNTZJaC7wMNtpi1hmgGzFEiWuJXELUmxckBUPw5TMwdQQTsF2GkVMNyXLWQNusrDPStKjAx21WTCWiHKErqsZ",
  "key12": "2yLEdrRrkCXAHbT16QGT8mQawthhMSdFoCb3wzSzM7ShLsLH8QHCw3Up7eXveaFwrzwGWnTNwNuW94XHxVUpogHh",
  "key13": "4RkoSiGKCJbHYnYbtRBwMZm3g4P8RdqGKLwSRGMjacHyS3snfy8cq96KGxoDFbkThquSntkg3t3jM5TKu416aQT8",
  "key14": "31y1FfT9zZ5Yt4uP5Q7KmxWt3r7y7ZZALCyoVM54LfdrBnzbTz5zVmgBnU3rU72yCq6NxKtw3E7E85jU4Rp2oJK",
  "key15": "66PdwbjAfgwT71XPUU9YqnutopmxEgcgFbjrbvJnHExpcVD2FTnDt8T13wj9rkhaFo6WPbpjigHYNSAJzQLU7Cc3",
  "key16": "2936Ebsid69p96Bm4S1q83ggMahdGB2TwVRWoZ5MFzbUmMCscYrgEWYwnicCRaMKmwnCfP1Yh5jxMKwqDuS5kBnp",
  "key17": "7ik9JsgfN6wBWg7iyhVcAHKr4M4hJfcRFcYwM7RDf3iKXk6AL5BTmUVNnWx3RYWzGRFLVGXpK2hBN7uAgG7FbU5",
  "key18": "BNUyf8nK6K6r8sqaawQwpZ2ZV9jx2Smi494zhwChZMJQCy2Wnip2kL4qB4cW7YDmFLvmKydX7y56X9seeSJzj6n",
  "key19": "34kEHC39QB3MX485mb3Grb29wVc1kemsVzLgEcQbmWFdP9f38MTDFxrE8pTRopHCxpGcHc1VSr3iE1GW7bKMQzci",
  "key20": "3pFyqD6FRdvkeTMA3fMRQ113dZC2PPfYnN4xyGYJfN9SFPusnGsvTa1iJWmwfMTwJ9fu4FwUZh5my86hcEsz7USh",
  "key21": "4a1WQt5y26rELujj1Mgza2MMs31TKg5BnNebcDih9D1rqD7TYsucNpMiqyKfNZMyrMD3GHMtWCYRhsjhy5nGB76w",
  "key22": "3DfTr6WQDfXRBmmtEWmhW1vzRGABad8ch4tYjvG8XCoDzGFNyW1Ze2ZXo8cXput3S5fE3bz35x4N7Qc39Un3346y",
  "key23": "wHpbJGJrjTPH7eVLTSAmtGfDZ8WB3nKc2tiVsAzZ87yrAFWsboNYgYX59qrkMjRSd3YhTckgP6SZxZP1Ndq8r17",
  "key24": "5MyAJ5h1ahAcb1chhGzmUKTsPH4kZ7oeUCjWehgQENs3spaq1SPRcVkwxbB9aHVF8RC2zAZXZ7nQAV94Qku8yxpt",
  "key25": "7Ej7VEZK9sVW4bMDoFruEtDAwH2519u2861Rp7whdH8yyFT946viUZFQLALiMkGxodPTca6KM4eHpA8iLnwRDbf",
  "key26": "2pGZbdh1hcJ9BjhMcmuSBZRBUBZPDJWaTYXBbaAxwkKR8sd76q42vr52migH7GMnZGgRGk4sqkm4HAQzbFb5ufyE",
  "key27": "4nuGCrki3c1aYa9qPuWcGmcQckp9ARA2XjdKuzxwFE1jFqPWV3U88LnzrSQGBuiKtGqEuALN7C2xoXUnisPWXQ2G",
  "key28": "59aVjVH56SQZjUj66cYK1tejJSD795KxVC58XeLkE9HukstG1xKc7nXi9E18AP3xF4Ez8GSLS9616gqkboQmbaFd",
  "key29": "3gym6Gb4cacY9uap9PQaFwkUzJ7KsYJrmHMm9euWVKyE37RmytqTEUQpfGQDhitmxHv4yySqqpAQPCRS4c9NLfH7",
  "key30": "3Giy84MAntva8ynTMpinkWRvGvLZ23Fgp1tjufsa9Ffacq9gA8hHdYiGnhHTQsT1uUNnGUHfEv7WDcLD7oD4VCkB",
  "key31": "22nxzt8Pp84DRyLfMCKn51kKhZqZ9iUnVe2ifojWLQ5XzP9uUUHHbjuNFfTNi8uwUAejdXWVVWogxcmtqRfEmugV",
  "key32": "PduhQfxta21Wcxo84ZPj2Sp5W3ajFBJW7Fda7cWkvaASiToNuz2otabUN4wLbBLLgLXNG4JLiG9kik2n42oiHFz",
  "key33": "5Kz22fokZdHgZuzF6CTDkymVRr9FkqSUsYSkXoty6EESeJh6KptAyXCJCw9Hj4zFataUB8TR5G6Ld5NJ8iHkepSR",
  "key34": "4GWJ1sZhDFCfmq4rZyHPzggHxVavNsDpMNBsDVpZXet3WF1dZXeyG1HgbUQnHr7BzvKH7NLQ8btq1ovfhtN6gszZ",
  "key35": "5tw3ExZT3V4KSc8bqEYmbUcFyLbddiNNvsRNbemfhgkWG4uhKEdW2RKmooRzUt5YkiH7U2ezQrNGdzvxZiuTf8QM",
  "key36": "3T1nECZ1gNCbSZg7eJ936sjkdF5DnnZPTp33gFGVGaANEfrLTKvvn1C9Ff5vSDU7QtPKQuQ76mBRYDpAs1CDKiFn"
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
