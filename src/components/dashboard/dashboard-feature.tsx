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
    "qYaUBxDXskZ7pXbe4zCQriXdn7VMME3MeWMpXWkLyLro4Jr3ZpDLCMwhasvEcFSeETLvudgjpDy2hgTLvfb1Tsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yy5uBiFvBGdiwEkJgSbhYK1hdPyVjjUSWMTeVxBH8ZgUW4hcoqYAmJe96Rcz4TEyQEgrNegJQS18nmdYbi4eo86",
  "key1": "55ZiXjHPzSR9bqoXGTkp5WLNRjjdL4eXG8GTQU6BaJh2NUs9tTwn7RMqKa4ER5NHqvCVYxoN3wN76cJ98rnY3hEE",
  "key2": "5SiqxkQFQnPTfcDRk31eCcpqptTj2kFa951EDccFPb6aY7spmBmZQr4dKGDsqo74AaBvAoCXdHqzP5E2FutmRbc7",
  "key3": "3jzT5ASCfduYVCE6PeBL3gfbZkky4eRTVQ19YfxNN9yfKy1M8XVtWasVZmq5UJbKacbctFQ5cufFrPTNLrpFrgGE",
  "key4": "NLmgBZUWhW62ytwsBhrMJhxJcHFWPmrK59Qv5r2hGr1CJxrvCXByg4wMCe2A2TKBQG3TkqkFGLobFSnTEcPRRNC",
  "key5": "4sSzP9HoBK4DxBqSWMFRMiZtGJWZbhkz821oxFf6G5mw2kVV7NS7CBiB34Ney97AvTE76tUSQ3WuXjNiYW3bz3b4",
  "key6": "3Fps2dSHmqet1NTGPvmUsXuGXq6i155j6Y9JXqJeUQQf2UEq6BNqXZ2C5a4kzRzDcQP2jJMrB9GcyNKqwneMGrCR",
  "key7": "3vUmNSPfJYz5n2H88j93T1QappH5ExepaiFQc7SmsK17XpxfrPmxFoKiuiSZaxqqdHurTBtZ9GRTGCUss83PCXer",
  "key8": "5aQcWWBCxG9tsjes2LN327UgJsQoZwy4KcL4cyLrxi1Lto8Y5DcHvyxgqBekAZ41PhvAPsgPrbKKMoFKCz8GSuio",
  "key9": "2jZe2XCqVK8DYx1U6EEjLm2t7CnG9YFbzhLZ24Bv3fsiVVxofwDRDej2K9rTk3rnWnDrrTdbx7ruVnWSCw6TGEvG",
  "key10": "2g9Dnmuna9DrQ4We6zrfVaMpcchgCZwmvGPtdaDP2hV6fp5kbx2F7ctirAdFFYM7JnvpMtrmEDiEEvzdt1nM6Qj4",
  "key11": "3k6zJEEZg8PiXgwC9QLTfumY8PUgYesgm8hEK5K6NjafM4BB1qy8Cppvn5VCphpR4KAJ2PHaDCHonctdGzEnJWAf",
  "key12": "3mASWXdJ2T8K7t2ghKp7HZ4D8A1Ndtp1dta4DQ7eCEMHCz7EsHTCeLHPtS9KTw8twFJR2mwDi9XAhuWR5DZdor9v",
  "key13": "3Y4dzjwPxxqummkFncZMZQDnLzkWwcGHHkwdL5DTPmmmdCLiaY53nReDLwYrbdtCm5ZahQRTd3m8SAEKhmMTKsrW",
  "key14": "2bFxmN4VbwD7ECrxERx6uX5eiWchFK8QXBjVTkdtaAdH3XSidrEkMofnEY9BBaPqwDHetqsp73v7sKToMrzNPtgT",
  "key15": "4HrYfr5NP3vrBdYufzoEPB9GCeDt49HgJ6e6NMrQjXUFu9CARVjkgDTDaKNemzxnk7AAYo5YYipB9DkTYD72T2Ag",
  "key16": "5pA1nhdFR7m3yUiNWrob1dUUK5NXZF7s2ny5ik7UixfLNUkrtFv5LaCkGCkRMHJHxnGHjuoPZa5FvwqS6VpV3EAF",
  "key17": "5i5zyHFqxDbWCugNrkBEEkzdbQBMTiRRfgYBWfHvLhtwMfHMVEwwHfyWTYajFs9RWWx1aSSot8CLYb5xYUrrxGZw",
  "key18": "2JCqhR7ULMRdPqYFoPGZTY4SNwETgecCcwhB7dL1HdgHYatNMsLm9UeoXR2AnM13Kb8pVZAvsLG4Q4HrAPu4oYsU",
  "key19": "3F3EoyUK68eKNa6Gpw5p21yW6JnzBDM47VwdGnUPpXU3vn5o4n5rtpJ2gV9RDHZzqnQrx3Sr91vW6xwd1WSxMt7R",
  "key20": "3AqzzUxpPj2aYTRnt75FUtWQzhBDQmkvs3DgFL9F2tmzcdrurS3jBSw3xPsPSYPar6Sua3zSkf5n3FhHwJ1g6wo1",
  "key21": "2eXu5UAxQB8JyvG6VgaJ3ZUnQqER6GzD5FU7X3YCjEW1zA8grux1CvUX4baWNHeAaKxScx3ThAzW7DGECh9ovFcf",
  "key22": "4B2t1fj5wau3jgWKSqASNXCyzegvP3s9L77ocEVaejn3Pv8y1expHixHF3G1yZQRc2RxBED9ZBqDVax4hkZX12K4",
  "key23": "2aDtK9aFjm2EQ39bPnKzhKXSfB79Ypxh6ngNW4XKzEYfiwfnaC7Q4Lu55CNMtwy3co1WZuF9TphjSRWigNrMquf2",
  "key24": "LdRAJHKsqmySxGBwsc6h4ZHRzfnLuAdHLAJQ42uzc2WFadtSDvRTR6EfprQCoz96mRNviVNaJMkFeMLb8wDv5bo",
  "key25": "oQmRVvwp3yyGYf7SzSEr5HkzhFZ9BHsQppFpXGWNkdintStUtNFaeKLZJ3zeWHbVB7tnW8QZ7nENMyqCu9AMAmm",
  "key26": "cXKVViE8M1TJ8ee44NmvGQ58rbCcB9kJbxx9BHp89m8hxqZLNSU8rhNLCDbNgrL3EA32bZrLtkbZ492DnrVdCmK",
  "key27": "3rjxdDUoNj84TsAKLRc6Jva1LZRek4kCoUstumvTCSSYKTVpy4nrWfazA4M72EknsnwHxv5nMkk6wanhmdXxG3Rr",
  "key28": "2buz6uivjxoJVvvSkq3LWxzUQ6s3W1MgNSazuyVe98Sw9LicoGawCreuQbhxBDB9yJecFBujdEkLYoet8Xc3SWTQ",
  "key29": "4ByMUhsmciGVcukwZD8JosGL7JBmt1WJ3mENxf31qHK22Pma3uBoBYNUM9wSbkcnbKQ9TmPsQZL6o8j4Loj4BFrZ",
  "key30": "3dqYZ3HemXSkE4gjUBHxgudHuosSGRww3nvWaFenFMRovbHskoqNEbBVGDj42nbJGaFHXFgheFXmahHYGAo5aosf",
  "key31": "49QxRse1nADA7cBRWY4ctVEWR91swRkc5pTVMdB6hjPDYwRdHnsjjvwjqmFkB2wg41pJRfyb9bF4nA4MVNea7yuD",
  "key32": "62gfieSQRmVG3jdcHV7zguWRm18nvVVyt8yWKQdpmF8mybHzp8fWC2a1tbHmdWK7GmffoGeH4nt1CWMK27msgYLX",
  "key33": "2gDv91Nf3dtkMKE7dx3E9phHRkLe7kk3USitKGMcUUoNMVyfpd28yzfy38kFwZ9qHPYecjyxtJ7caGHM71LPbJjU",
  "key34": "Euk8gCKUqENbhQ2a3dvDm6x4G6bEy76a2PqD2tA5cXUo5tcRPvtgoL92FcbLJDKyhABTsoaPMju69yPA9YSbMyP",
  "key35": "3sLNp2Kg3ZX2j24XL3CgAYZsmyt81zxhttJmX9JgFJrfkZu8AKdQkT2zUbXL25m2B65XurS2jD5Mhf3FRh9VvGvA",
  "key36": "BXB5pbzNkXuu4AXUP5tTNhLH9EfTWrCM22zfo5K1pmYZmAuRhNTCUJqT3ZFcCwyNv8SG9Kj5cN1P43zjmSLimWa"
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
