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
    "t59DhrMTcihfaj2m24V5LeEQ9xMds3715GxAaBTv25p8f4zNDUAGcZ8ACGhZJ4CsGJRphCdJxRLaiqFTGA62agv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35XVr44dAbfk2XQ1HVHXPBuFgFDhKBjvijESF6fDudda1eJHpQwBu4R8VGcAAcGB6LFaUXndx3fQgiFfQ3uzNtSg",
  "key1": "4dQcguVfXSVCNhu1t9so78AVev7My1FqiPzb4AD9AheGv1Ggn8LZw7f2ejgk57Cwg1jqcLysEQCscPmMy74hU3v",
  "key2": "r5xTmD2QPB8kDCoeH4xKVHSjXQ2G2nBG4PiXaZPPZtSi5VudwJhmSUWkpJyLURnQrbh4UWinTaJfx9pgM7giPqy",
  "key3": "4wkKnjM4imgeEsXWbXJbrAyWkiyi2Seym9wm2fY8w2P96opHc16wX8hC9dQjuimCQpKCXPBrMBZc18hgbWqB5jof",
  "key4": "4X4nhuEGJkrJP9kPTAFEA1WEt83ZEQFHLbrbj7wS3Ek4Q6SFijzNZmcYWYLSmnuDtTYZvzc9zAmjakNYCqPjEpSE",
  "key5": "2gdakdxjF7JXYUKsXSf2ZKisPH5YZbPgVasBxWFSX7oqYMLRaJrq2MgA8oJwb4hareGsLjym5YFcAPgfjATSQ67E",
  "key6": "3sM3uRdzYQmDXbMhEYAVwe31azELqaxCTsGFr5k6Yyn2416z3BdmBfwQTB592fQ1jU8dncf8bXtu3SbycwrH23hm",
  "key7": "2txV5FQo33dfbACRRyLgNjmgXL3Hw8g1omX1WVJG5LLun6L6KqoWMEymJi95c9AAj3Jj75TKX5GFW9XZwQ8x514a",
  "key8": "4AuCca47ApXa7n4pTcQfdBpw8NhUBW2RCHxKCpneARH1gQx26UGErBPHnRvbNGHcsVL95yz7MJwGDp3LKkEva2AM",
  "key9": "5MpJ1sWoBDp5p3fsTLUK7sxks8vja4wMw7RkZAq1qnedhWQGvjXvCuxRGFNxmAYDBEKaRnBUJEK59JzvWJ7akTpD",
  "key10": "4cXsbW9GQHU13tt7qq8kfH5iWPwiG7RYqsZPxL7rjTyHqY5Aiz6zt4vuK843cYXy4gXcwre8CebU8B9pwA35X2kx",
  "key11": "5pptN1cMGHGRn3whnAEc1nGdA8zjjAxXysavAEotbgjZft6u91vLgSr1HUmhjZSNPNC79yXsEsfeuu6ztXxdS2a8",
  "key12": "53dzLqQxa454uV86Hq1hbTsJQZQjCjeWhqi4yZ49iTuPTEibz3Za6pbUgymMBRzgss2WAypZLri6s5kXBV1mxp7o",
  "key13": "44c6b4zHrg6q4MZoehe7m7iN83E2oqisB72eDwg7gjXcQPxySzDLcoTzE6pb5yq4tgzZBU1xkjZXWej8FSNHLETv",
  "key14": "3xByp3M1KVrWf5qi9LoHE2pZJ9JgRP6CfsFN87vasthYK7UJsEg1pwuwLTDpFzduxnVqBUv9CkF79nHym3qdkHwU",
  "key15": "59MP71XpyJobDwb4NbTGQLPLLYKwKTfEo7MvoY48KMdYr1B9ucBxoWGdpcYSNdTvaamZ7j1De2VyiLTHcW5cfZNE",
  "key16": "3GziBWzVS2k7eDk8LRcTjALebAsixbiJNDyeLaRmF6BoL2Hu9x35ygaQNqscpZDmSpcYzPrAAbVLUjQctJJhhhYn",
  "key17": "65bsd1nEkyK9kJ64ERJEiB5QARGjvETcVqwxa7DBpCXA7aAaj343Jkh8x2CpC86rf3iPqZR7dkLhaCfQwEUfSKPT",
  "key18": "2TX9tnxz9M37CcSN4LDRkGv6jRszGVsTdATAHaP2SpgJ9yKa8nhz9byEWbRdHJxxVwnmajUQJvt3yMLzxkVqjwJg",
  "key19": "37oy1JGzMJdST1Q4Cd46TM52gaaH2v53H893fSar2pbMyJpTjpzxoiaWFk6Bbdupb6z33MfuCG6BUNTfstRsknxD",
  "key20": "2ZQbbLU8zHCSX74a5vp7BTT84Zof8uRTrAuJqXEhnJD7KKT52xfcdgCAqcxCfthwwp5k2PX8gj34nBpWMDSSopNo",
  "key21": "3RpjKYBwE4HjB6pYjeqJBjWWHheazNQzEJpr4NYuUdnTH4zobLEEA2bFED13QdgQE8MFHh87eByr8UaTq36WfRWt",
  "key22": "4UipWDxr6b7dhd7ZYfqCgfEf8ue6e2TokkURDRqCCaGfUDHNXEjip7ZSGbrBUKh38TxfXDcPNqUKTW4bvGMozGot",
  "key23": "5vqLQmzN87m1dm7RzsyHi9zRtvhEeYWhAwVzoFDzgbf3ncmg12FjpwabMPaJy4guy2CuroKEqEgEQtNK2cGTKJg6",
  "key24": "3xcgk471wjo4TC54NFFhdF1AE85NzQZQ6MmZhnwVCTnVihjCVRacC7J27Zr89zmrqKnnAqyAviSndFenxnKt2dPw",
  "key25": "5fezfUbvndbyft9Gefi9dF5UcCLjWsie5C8MPL8GHqUxvjwSBcW2j9uTLQkSo1dB8TNqXEoHmy4Md7UjZ8AcHnR5",
  "key26": "ex7DtViJ2hni6mXDdj5BM2SApJmFQg8KQtjvV3cXAE38VJqhwdqAYNzbywb2aUVQWrh7Z8V6FSAGkT1tUj5a7Ub",
  "key27": "5WrCkWToEnHVKc4WfomFFvWXhGvUZ44HjaCpEtENpk5UaaynjiFXU16RDFY6GAH8YnBXYuiUYyuR6EECTU6GxeY4",
  "key28": "2SBPqJhR2imA6sfEXnE3emqAJsRN1AaYy256P6bKkW4uMzPMwsxxkGocumFSnEBk34knDQSQWqhQiqvxmbmWfokC",
  "key29": "4JGJjyGQJ7t8Gp7ttaFtMgy6WG2MXFxphNtvvWVdsa874aZ9aC9gfZ9QJmo29DAZKP1n9DE1K3o6b6YPPcjRcVk8",
  "key30": "3y5xrwNXqqP2qEcfqb6vKkMiEJGAp5RacY2T28UAipEKZYNytQVWW3kfMK4ZWfUE51a99nZ6xG7qiAS8Wu6aYrJp",
  "key31": "o63Sha7JDX873sKPoLT1113TiePn9YmiYZgsvJKcgiGjr5zSs247MaM6VRp5uEyoYzfAvAMVteDTwhcyj9mzJnd",
  "key32": "353AcwUfg6Hro3xyNyboLip6rwCovNvP9HEL7vdQzAZjw9xBaAhDF4Dio5U9UmGVTDFe26YJjL9g2xXgwgu5JbYs",
  "key33": "5TMs4vFsK54PG2u3XwLf8fhWPcHky3fc2yW59UgJNy1k4SC5M6puaAQDqYWNbEKmBea33SknJZLjTcrP1JBdQrDV",
  "key34": "4CW4EdjKUiaTjcmQss7QE6Z7J29YGC7vpT7mkyVMakZZfbQpBSyBdd7uu7Aihmvy9ruBvBQmn9QNoS5y8V6u2iCf",
  "key35": "3air37NDcK2N8W2JAqmjpqB3rNN8ZQnnQrQ2uA25VsfYQsgoUmxw1c5enLLmkook7gDiH65oAy12oGjoK3ELCVyY",
  "key36": "5ktCG3XAe7igLGoVjGcxbRYJxiHcpVf2ny8xzon5GTkv8BdXiCLXEif4noJ7aZzdj868ME6hhN1kfKoWnXZ1vPE9",
  "key37": "2eV6b3w8dBub6AwQ1XDh7XUjtiaDstj5Bt2nHefu3mYzNVEyUVxHa81LKzkAGfnHPSMGnbxkQGvmZXfv9AG8t3BT",
  "key38": "4hqUUcYS6NzzRRhND29fPDaQs62YL37auxyVf67YZ2bFc8BKszY7scr5KnwoLjtKYPpwoGkzAaagFnDNnXXn5Ca9",
  "key39": "4frRPz3Fjn1DQ1jgi6UJg7VcLHEahJuBhodTxhXapnJSf5NYkvoCZ1H54JkUzEHsnQnZdvSAQmosAeBjCVr5QMUb",
  "key40": "4KLNS66VjnvxxCDpDRGyrdBQmpUCP95dsYBU5caZVxAe6b6i8cd7b1yUiD1dJcPt66jbYwHTYJAVgTAsZZayJJLo",
  "key41": "5btX99JfaA7d5dG9wfUsqZzPD8WQrjGZ7GngZB54wubpJCreJwJTYFuLHgvnTPVMBp8Lb7jZ7wJBR7qzPYPKGNK2"
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
