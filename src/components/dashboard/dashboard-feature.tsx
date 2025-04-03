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
    "5KyEK88hUhMwMQLsLFG9PCAKU2Hu3Rbv7GxyvtK7PqJDndgrAPsBeEuyLk94BiMt2LAFSKVYc2TtsexUdrCQprcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uhD1xoN6hj5jHRdjoZPXEW1wkqUSFUMqkNcwztscdGhVrtjPUf689nuDi2qb1tukXB8dVsYJYe48iPkpsjzTRGc",
  "key1": "35getHzCyFcDcV7tyqdR5EDYWCeozCows2hd1vWB4fG34YgkV2m75uyLHKUtRvt5sVu4tWWySAYxmPPmfnbuJsgX",
  "key2": "1ofaMBt631vWFcELgRCi7TqoypWQLpDzyTFp88n4DHHk95YqEYZkJ6jzgRZS4tdaqnKb5iTW2vPST8Edj4raoQA",
  "key3": "5M9QF2PkZy5b5bqnSYqpuEmA138dod9NdppJ9tU4rkKjVuA5qp6eGb5aRTrw6exDyuq8jyVKzzeSwLRbL4F8hrAa",
  "key4": "3tzGTifKBH3gXZzkphNBVRfzXQ9Nr5W5m4is7wqLH6eJG6FkSvaCcoMJvPPPCHgEbhzioNg8rxQeQazzjXVfL9FN",
  "key5": "4P1uqu5C75SnvncfcMBpgE6zr5kTGzTcXy6G9mdTPxkpcgaHgiX57b5KfDNKEKfRgJK9q5he8xgSuvZwUGtHLagB",
  "key6": "Xsae2oN6cr24tDgaQKVj3Zj9LPbuAuXt6Kasn8ZkzjcXvKjB4hk176N8Gg4uAbGbLkrb5famEuwH1bXoeiid83N",
  "key7": "AsAbsnNjW7N5RxaLaSBBqA5JC94CYB62XcoYYfj2DAsJXg25UCDeZmgwb56BSqCUXN65uCRbVLVn3QBfkvCKGrg",
  "key8": "2CwwVZg4BJk6JcmsJq43uZi89TUc51A8KbDTLMy9vdZJSPKiKX3TeQracAjfqm11cbofNBMnWzNfZatzfBFWKvUc",
  "key9": "2AfPi5hqSYEhZFFMs1PTsZHZqwixzJKeTVLe4aLdF1AYKt7eAmf56R5oXDVkYXXPGZy1NDbxKFun5X2UDe7RDdTA",
  "key10": "5Lg84Ck6JGMAGbfabvnCQhL5236gMQgRuDfU9Aakiku9EXBvzsgGWPzpJCroq7JDQf5Sykt2HRnBM13y398Bhbur",
  "key11": "3zLwEsgqL3xr482LsVcmkMYRAuLsBMTQYw3nCAAz12MnXRr7ZEy9z7HTh9SaCUCdiVp6F2W1WEf1CCZkFUgFS4u8",
  "key12": "5AciHtdwjX364QQsacqjYZHC3hGasL2EY9UNeRQMBtoikHoC1MeUk1gtsYoWQ4gsUx5Yq4dPjuP1kgG7qRhMmLDY",
  "key13": "5jM8zkjQgeHN8M8HSorYxk2WaZG9cNuARAh1NS6UWh3tAgqxRJ7VTZfKioQ1E4W8yNCuurxu2BCJZ9w6a6kueAZq",
  "key14": "5s1BLfPGHZ9rkxwwBu1oA857oQeYTACb5bfb4W5kF5a6uERuT4Nfc27a72CUSBiHBvshHS39RdAfbbLTeQmfPFPv",
  "key15": "oA91Fc8CFVBgNZgT6x2ZTwP7nK67EaibnXgg5rPRJtWFMysBoCQfvi19aoy8wrMDYvSas5ynqoZ64MLYdNBC8eG",
  "key16": "cSDEiQGPdk8ExYYeyRJhEbTNUac6NYpfj9NBDsW5ynjPCHn3ALJWYhSupJcVM251jGPnk6UY7zZVMdBVSWXXF3a",
  "key17": "2yvUHCjyM3whC5C4WgbNMUX6NogQntUc8kveHkkKDEwEwWXkgstTSKDFyg9ZRwG8RxhyupyZNJCsYxYBNGy1FEqP",
  "key18": "2vyvvhtBmTK5RwvBaZknC4oXLYvWX2UDUGevA7oxLBKvkksSfHeSaP7D2A9EUaFwWW4fS1icXJ27fhrDiF5KMeCY",
  "key19": "5QbSBWwmV4GTKT91Jncx2DbgcKwSHGk9mphxVsKWf3srNo9xSsSv5KYzihm9fpHX1f1fvakdz4Q3RcWB8Wyog4PJ",
  "key20": "65zudXf7BdqB89rExLCPTrBtzj7f1hoPyQTPBAhbJ79ahgZd2x1e83FPxHepoVoor9isbFsNZu1CP2pTNMnX4jqG",
  "key21": "DGN35kMmoB7p5YJJbAfvcNgfF27BRGbPJC92rpKtTJNYZYYeXAPXjU13yUDdtayYBWLcT9yi7rakXfDQQrxxVmu",
  "key22": "2CN2Zv8jrV9J6Hr88Ls7zwfw6JkYtrLDEofu37mpRrPsG9XoKXk3SdqcaAfDf2xbuaZUyT9p8ezW4Ahr9GfpgDtP",
  "key23": "3Ad7qbBrh91nNr5qEnYJjX3e5A9p8kpr8jC6MUH7opgWn1fuR1tWuLveAQWiQzcqvKcZ2kdZMyXmPpHY34CMQk41",
  "key24": "5BgefigXYw62a5zA2UwSbL2dVLUtju8k98muEha6FPZ9KxDLbaBHv6vurKGYyG3nGMtBZPtPsrwECL1AXULaWDHG",
  "key25": "44BCQWGVTx2bqP9LXHQAx8iHpaFsgEtprppeHdfZGTDV7moyG5116mKD9MfDmvBFDxsW5bTh3V9VYdppPA8E1tu7",
  "key26": "4uEhbNFsYPpAwv5EcfsaPjQfne4konHudc36AJKgCexq6HGo6tX5G2etPk5p3Rr3nvnVjmNBeoEXRnmLc9mAmeXD",
  "key27": "5kpsqtYezfwLkeVnYSX5ijuFMB2p9vdE8LqP9LdaoXnrTfDozChvM2DpyrV5YoqCPTraga3AZo8ix7UJsi9cstwM",
  "key28": "4b7KZyWBTwrVwzWJEwmBWDRVHvmKtRA6UjacTAVw2Jj8iA9sEZsCsYq6eR5pJrw6YHp8AbryjKUVFHfeQar1TPLf",
  "key29": "5CTxkqtwXRUy1fwu72YmA1wfpjWeoBH41NTAuCJXwa27jfyTMFnvwLGnEQwaYWq2YpNKGcsnCs4nd57JFjw64jXJ",
  "key30": "A7nykbQw43jWF4qGZEsQx5XrEWN4NGBbpK9yU7g9mqwRrjgua131t7B58EGk5qq4BevbeaUxBVmR25ZRtWr54fD",
  "key31": "4iAWwKBLfpaaNZ3Pgsz7LCBhn2zEEDY7Do95wL9nCChaSTnxdd8VtxUq8dj5yYbhiuWQt95pz3MjuMJ1mBJMwbfZ",
  "key32": "5xzyugpnUrSU5WRhUNd4D4j6yweYxvcFEH6hUSTttN5PuyRohNdrgYE1UzxCGQs6BpZA52eNhxi4uw24vC2pz2Rw",
  "key33": "3k7gVCJ5wHTJJvU6xDyhWCyqwXYXMet49TYdBBtJXEDjuqr1n5k2x5frTRBi15nGDpHdy5kE72sWpKLkHC2xXKSf",
  "key34": "24U5Ye1CFamufX8eiYPDBqDRn9QDCdZkUg5vRCR1AXXjQkbj55MfyEDmFXggsmh9wjeEVfrAPkSstE4fx6KjLmFy",
  "key35": "2d3FcFjQk5yfMaTzeoW87CEnbkLmaKVua7jLXduFCEP5tWYTVKVKLFxhidnJhiRE8BNbHLicAXEB3FdTXhCB2NLu",
  "key36": "2PzEzyeKdoTmi18C81MS7Esy69gXaTH5C6NZU1VzGXhpNTKzBPs2AQs2d6cv5jRVvJjggUuCFuHYVn4oeHUqJDhV",
  "key37": "7VLnHmB83yAEqvveXusuz6fTjsqQxD6eJHPgc5TziU9HWuE6mLDhXhqQvbhT5RaWMqsE39A72FLSfScPc4DLuuU",
  "key38": "3JEdP4cuP5ueQrpZQw2byyNiNna6zdhih3nmnrpRTf2Zu2eW9VomKhMU58uqtFHSPpxYS7qXU1oe1n9z3Kd8bV3H",
  "key39": "5whewsmm8hNrwMWJ4E3V79AhSosKgb65jRdqHtZACPC3JVj2mkEBSLQe14tWnr9nhipjjuzbXafKCb4fJsHvFMNw",
  "key40": "2iyNRgN1i1FcM5hAYmWvVukGiV26Td8RVfsrf1qD6ZyX39xiwChgFScTiwRXLifraFjwkiNk4FXTEiA5FPTK8N8m",
  "key41": "2SV96F8oBka3i9n73HhqLLcHfw5XqcJW3ND9PbCAspY3dKg1JYWNy1EvasFcY21XxWfc4xzW557DiojFo7FwHyfH",
  "key42": "5RtTMrHELTtwXNjz8dgdFvwRq2bopDkJR6bWcKuiWQwqwfHqhVFVza2F3ZGR87hhauh2CeKig6qcfXKQDyPe6mDV",
  "key43": "2G6Dq4uyCuWgLCL19Yxyv3PLjup9ohkuk3NhYZLN7xXxJg27gbaWumrqCwZ2aCaVjzzjyTak41D8iqgfccuoJKLB",
  "key44": "5uFz3TKdQnh98Ha84bLjFeif1YbqqAyvKsqbGzTwZJM2k5Yo5nZ9kpzGjsVLqUTPwuMA595Xz9jjDMfpDAG7op4R"
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
