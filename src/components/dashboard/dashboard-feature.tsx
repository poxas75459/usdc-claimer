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
    "496P38q2Z8FrxCP5wQQ3PF3YsaxELUouKtbHgijVQwgfJCL2fNYqPanVk7n1KX8dXrCgVpkbC7Ur134NmB52mghT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25FkKkx9FA1ab2MTrer8bckTxfgsiePSkJorkAaK2FoYQ7VQyoDaY32qAy7usQgBm2QvMdKQq7xw2KaXoAruQRjc",
  "key1": "3t4hVhPeUYJQrFAhAwKD2m2pPyAwxLUPCgocTVzjB9otWH2RRLARasPifFCWeNoxWdqpuQ9Fx1cF5mnbPB8xWUV8",
  "key2": "3FphRVf8wEuubQrdvVpyHhU6SSZAgeyPCM1qsjFzkkzHjB8XyAUYM4HfnjcMa4avdsET8YrPy54p2JF4f3Y4594K",
  "key3": "411fjGBzxqTHz6W7bX9Hd9J7jFZ2mHXQxk5DLfWky3XvFu4AaRGALSMLq6fPgzUbzwEYHFLyFATMKrC92vvVr72C",
  "key4": "5Mx7wXXPKYy2rMdu5jXQ9qrwko6nkVKSpQgZSSnQkZ6s2h7YEjFQTo22ueJTFvUSZrtL3q4ZzXKnPmJZ7P5ThrwX",
  "key5": "2q7eSKYBzxsBPMzDjsaLvVQ6ZsY4nLDsvWvBqobek2Cpsnm98HNMb7R9NP6k3znRviAKT9tWEcWijze4QKdyUySH",
  "key6": "3oGWPDuiTx98b2Abufvt8nUG8ueNiWfjRzNxwgjknja1cTfY5UXwAbGikKGVAuoPRM3L1tD4JZoNJAffGSWo3CkD",
  "key7": "2Hv3xiNtSzgadfs6pkSkUN5HCGcn5xWboVT7j6ts8fgu7w2XwWH4DkUJCBEfpaqRB8w6t3Lv6d3nVB5vtj3SNoxZ",
  "key8": "3RDaBjG55SjXyyydUJM9u7Zqo6V5kTSHCfzMXwdkYVRbCctQDykvhQbHP4UUrtjkZJQAbfko9nh78hmRLBVVQyQ",
  "key9": "2Z5FWYiXNS8F5G6KbeqbREycCYF4LsRb8w3nWpt7qCTc4EpXf8JT2K6zdG5VJXeS8UtmFBT1jTjkf7mztcokCTm7",
  "key10": "4eSCsnszqqAFhd66R1JPZnBeZ9iHyhXaikqAtfi7n5EgXQHVYHAt9EbJypQYx81bHbTDocWHygQhDPFRQfDpfkHS",
  "key11": "2mPhdZwELstDkVp2TxwaCijQu88aiGDk7Y2bWf9nqh29ymoLLGpGEcKc8e3saaKHw871nH7MvqARt6yvfA9335GR",
  "key12": "QLqHVwPHPRjwnYPM32z6fvbXdD2LtBXgBdaDuTYzmbe752pA1j6UU4ERYTmgN1AzUVHLzGerWwNUUa2psCNKmxg",
  "key13": "onsRbDhtR3KvWdegTSCyBLJhhwPDWXuHw567x1wN6AHqVEfzwfnriKAh3NbA6BxjpkKNyntTyQFk2jG5Tu1tWQQ",
  "key14": "HtPGNmUaKxse5nwjcWJjhCbBFMQd39ZdfCGia9zxChWNkCBtm3dAZRCD9ZrEVzaqtcL96dGFV4Yq3k41kSMopHx",
  "key15": "2qfY6w23b6BtK9H5rbjLLu8rgTLtnr5WNYU99hBZEMQbnKEWK3L5gauFYJfvp1T7KaVfPUvVm9dCjgvLcmn55rny",
  "key16": "54wkaasLXV8U2nXzfPKMxCGArMtCvGRtkoKiKMKbhrh2ytM95da2mDDeM3Pefi8hijYTXGz4n9NEzjD53KX4ZWDQ",
  "key17": "4XzQNZh4kZewS8QrwLkFuVzkGEsGhdHW6bq26yYGb4PrASdrAUNGNVMDL47JDJBjtrBNVsYypsMaG3pqmAYQWrQB",
  "key18": "3mRsmfVRT2FzcwUFmhFUiVBr8GfFecEVbjGBJJ6a5fx1hQAEpNzrdExhrhnYjq1sUkAq2SPRHGTq4ChprALjtdAi",
  "key19": "34wHF5Hp8qeR22EYsUEDgNFXESdLQRioju9j3MD6zBYf39QHfLySK8EhpT8HG6pvEjK8xR8Pzm1geijgiojqmt6F",
  "key20": "FsxrW2jQP8fcw6J25jELGvCUwPKrNuioewpanNfvdtnWxDw1tRonzrNR45L2L1oF7iXa2wUCQFnTyEjH4dD9uwv",
  "key21": "5VU771AVvSZc8foRZD3etonRLGLDy3ttoBELnz1ZmyZsYoBXnvBwpcqQ4x6ykEKB7vGp4YKWmFtp4dW4ucPhSXeh",
  "key22": "1gTCtd78pQSRNcBQMqo6ukk9i9PeU2353CZHqPVSLBnv1ZcwvEa3wzKPwwBGRxk9xsBz6zKxFoeTG4WwzTTSG2C",
  "key23": "54zs1oeuausdtykG1GzA76cEyKWBVmipeUCMN5B5XgAasS3r9mvd6yoDzXN62B1wtW1eGvsgiTNdMncWboRSzz1w",
  "key24": "2Pjkqvrb9MVjoMcWP2JNe1ko8mXQC11dPRm3NtEaJvyX6rLJ4GAZFnHvXfGf8fnn7uHFCUmt2REzm6nXR5D6VDAs",
  "key25": "5susp6L8fknhucDjMKVAuXh4kdvKLueez83gUKnH646tskmcNJ1FYiJCmM8onvFMvHzzWbNvMxEbnW4G7VnCSDif",
  "key26": "4Hv7WLLjWS4Eov37vbHPYhPqQd1cmkMhTymrneYAvCfvuqEAGhxYVwhsWEJWQhjNkSvRq4KiZ5v1Sj6sXDN9Tox6",
  "key27": "4SDNXzFkE7GNwhUdxSArvXBR2fTrW1Ajs3dnWnjELhuhgkGbs7gXrfCESuXCA4vtyoDXvSLvh5uWgiXbRvYaFpzr",
  "key28": "3aMdfDfRaNHt3dEhQMXqxUYbFwX8hWoEG8MsvTYVam7ZxUgavfwSJ7NCuTNp3wHgTTYLNpFwvZuJCvZAC3opfHFK",
  "key29": "EKtZUDKtoH4VSFJKmZYLgNnjMXh6o5v3zqCkTGGiWKfcwdkt4XgQoC6B483PndLDgVKzSRWmEZqp3RSm75g8EwB",
  "key30": "2Yoi1RgdeuqmaC4HKv39sTQsfamJVvC9Axk649Nci2kxXtdfM6sKuNA4MczXfZHcTFSLhWEiEHvksgAdsbuddj6L",
  "key31": "3S5iZt2mMUv2oZvSyNVxvkxkXbkFs3QbkVW4Mv91J9yxYaRDFPV6rncGR9cD8neSRJagF1cBuDFCJ1qF2hhQW4UX",
  "key32": "5nKYZ4Dgrx4nfmFRwmwBJhHM76tUbcAHTJLf41n62duFvLFFszj53TKuyvphwdqhLiwwEkoCTLtWUmyZnBFi6NHS",
  "key33": "54SfGuEduZg4n7BAQdPGSH7WB3XANa9i4iCBByCHpPgrZte7vw1vMTHWF678d1AEJXqraP99H81RcEJm6p76ChQv",
  "key34": "3Zz5eQPjsQpnjoA2mh2AK3WLJHD2xbvmLUeqfTbPM2yU5bhArYteACRMJVK7YegkAaAto5ZdeP6ePkGPTpEeUg7H",
  "key35": "3z1MvPTRtaE2FzxcjgW5mm8ysBHjYz2DCbAGD6EwuV8whY8drFcoxWcydceVnyij9RN8LemBNrXpGBtCZmyjkWeD",
  "key36": "x4rqR2soNXHbc1PsjQtqbBshqrGwnNetDnigGAjnwQKy6e3wigijQ9gsgTQVtgPXRj68sM9ZMqWQDwf1o44Sjhz",
  "key37": "4gqqydmn8ha5M5tGDmGZ61DZcHqTRL1Jiymy8HGEeoWaMqX5oYmU3vbSwUXT1RZ9tVRR8nK8XAFvnVmLuQDzKCqw",
  "key38": "7dEZpLMfyeyX8MQVA4mKxfryYAigwqxFgdVccsCxrN25f38NcVQAJ3tnj1fCNxg9jGEPT1GsRvWz3x2iJ9xcXMa",
  "key39": "wMwgGDuuD332TUj3SCniATW9F72XtY5bCoeMfqhWRQceeRxUYTBxCh1b6AmyNQy6uaoH78ioBmGqSrfkvifsBad",
  "key40": "2ZohofzMrFun95Sza8dy2Y2kK19aCPBhGGQRE53bgS5U7VA73pMAWhM7DjpoM8dTg77cMTUonL4bNoKXTtfkWLVC",
  "key41": "4B2q9uoxKNauEsBXguZnsLysdstyPaT6Di9hJgaN7KdhNqAptd6T6D3qyHpCFLb3cLKTyfVq5UajXVWkpPuiwdt4",
  "key42": "HMeGfhLmfRfg9aPUmSxZR3k8qp1KLMZ5EsjJT5n6iYoFMF7JnnsLLnBLJBb1PHQ8Q1hcgrHh1aSjxDyzDpnTtBr",
  "key43": "41zBMkPjnUVXHof7qjMShYqPj9t35RUin5ae72Rp1Po6aMxJimRxUHDqPvfJU57g5yiy1S8jK8tvmmopjwYqby4s"
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
