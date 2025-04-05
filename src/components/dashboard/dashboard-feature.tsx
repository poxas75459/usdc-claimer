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
    "5hFHvpEMjGqzdumvGpo731osqmCRPppBcymjHB3pnkwwpF5wyLFi9TuNNhpfQjsFNUFaYTvCKWNY5uMEY6XAZqdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jUKxfETWgJD89VdLtXrtCnRsVVZrDoBn3KRbWM1e8DfpQAcGFWhg2EsPZGMHQG6p8WhNBghR7fDiLjKj23genL3",
  "key1": "4LS4ANtwXN9FdLAW6LiAYuBQmvdFgYb7RAveUjKo3Nz5MWnpqA22yADEAX4fN7WnQBvt74wsfhFW2aQV5PzCDfuj",
  "key2": "3S5jFAAiXpQPiLDVTT74pLsuEBPLvPXzAYoYm4PBJp32jE19mHoMCqLgTwTnymB8urMq14tTBmdpDvhpVA5R5n26",
  "key3": "xdP5ZVcP5vXxd8WQ86XF5mfMHhRHkFfbbvAJosQUi6tcxsohTmb1nWDmCqF6FnPd1xHWwndRN72F6bPGS5iB3QT",
  "key4": "4g17zRYV82TTRgqRujkdJMqqbKMZFdkhMic9xSQnW3PReJXHwv4kr1RwYVhgAgPWSdNdGfZjggxqaZ5bj9cCjnMm",
  "key5": "xahNAsw3YTSKYi9zbMgFkYhwM2BFs8aftFhRqxS47Biuq1wC2jVP9A9KZZWq7E4Hv6V7DQknt5rSm1Sa1dBz22A",
  "key6": "eDZDcc7Lc3ayDUY3UXJcWSZWT4xT4AZu4b7Dy7aKzLHDdHiBtXimMnFF1TMakzhEyJ8yAoAbXskgY1e6BPRNnSs",
  "key7": "5gdhiRKuzNuabWmtbNugrrchuHYSn5FjQxPSCzPnwE1sKS5RZfzsfc8UZSq9G4tdP6mc4TC6HoNYhTV2vgRAKgHG",
  "key8": "7DnbgjTwc2bZYbbUcnFteeBbRDehTUMAz44AXPg5QGFuvsKsXA6oW8iTGrKB9amg47U9ePJfCPhYGzYagQvPRrq",
  "key9": "5e4J4TUbhZPPaBYCiBpnGNV8kPwqhRCjJjj38VmNkAbkXCjVfFpxkChnQ42a8T8nekVpUnBU7Q9hhqkCTxruMQb",
  "key10": "5T49bejUaQm57SvATcmzQt7pFQ224ouFBDwabzyRX9epFWveXbpSUVcbmMjKCiC1zTvCH1x8vpQHiS3vf1tP6atm",
  "key11": "2QagNNtSLWeRsyzzUmoEQ1vnR5TKwdKiwwwtrVtpB2PGetWhX7aS1f8r3Y3hU6c7p7L2uwWwwWneoj3E8GVagsFA",
  "key12": "NGn35nNJTZcWxTKyuKgd2e1akK5xYxsEp28VV2Xt2W5nCrxVGzK1aDTtmG4owXshV322oS6vzmtADisfXV1Wp7k",
  "key13": "5cPmULKDHX3rm4taR5rePxEYouXFnNgpkg6wRqgwWS97DnjDdNZbpZU7TScTBZC3AhhPs8bPwwdBxyartNLxfWX5",
  "key14": "ps9ucCxsV4LrjMhW7EznSyHDtiq6LpjshY1yhmUCLaTbVTBZd6MjdfXkjJmQTV3FHT6mJp9LWsrNEFeZD7FCnWf",
  "key15": "TwQCwaaZrjCxz36FygB3gaDkYq9Rj31hUSPr53jTnFv63tLCAAiDnxLrpDQu2aVvnjjF9sEDdUSxKJzpVHFPW26",
  "key16": "3AKvuDngbPBLCgTVW1xfTd22vp3jMLYjMiKN17fhU9Aq3VYaBMsjDd87ZjBXi85R2ZWGPopx6r5BREUACtXDrAFX",
  "key17": "VSUPRshUxkCXmCEyxPJjgvg5ehTyjRyEw1dsUhui51LEPKDQbiuq3tsvcQgAWoTx2UBbr4TsBwXfE1eSvdHY6hG",
  "key18": "kx24fBdUm1fVUbNuXdJRGGiZFUQkahmYQHGpptSmrXViLWpPvdm8C94KVxTB1LnQBasV7YbymuFXrXGAvr97sko",
  "key19": "5MAjySeuazJZs9JSkP8cFj3rfdoRch8f2YmmLdHqUtmq84SMUBuvSuZtoJQVpH9oUjndbzuMzRPBZhJmDSGPztDR",
  "key20": "3UT3BVW9DMxgqrkUpCinHAQVSkEqKLnmuToawuJayYoHL4Wp5oZ2dzEBRhfRYZB6B22EirDnhcy2geCKu1wAKyNK",
  "key21": "FMKLnsQ88KkcXa3ZuHHdZmVqeDPMDiy4TdERGcKgHG7WSyx6UUgndhojtLfKy66aqncsF25Shu6UhhmwPfxN15D",
  "key22": "5t37qSwYavVMg9tTsaNZWKZjy96MtsB6YSBqYoR4FYJEhpbdruCtJa1VJ6BTgUufZYCEoNJumy6SrHgKnEAXQn3m",
  "key23": "5gaHaVaBEpyyo5qgYFiyWsE5EjYpFBapPrBHCyCgRtpFdXpNS5m4US7yCaLvJroSmur62NsgH9GSaZp2hq6UsZ4k",
  "key24": "63iqmyMbY4QyDKFeHbZ9fxsMt1EmZwr5mDo7mQyXimeNof8rtJBBo6F34KvFZMnHUuMKYznZsGrTk6R39VGcBWep",
  "key25": "3PXLoF7TjfkMEaW6yRrTL1pWgTwFtJogio5kBvstHckGogz9KFga5Ps7TPZZU8ZpNaveKmy6cfPnU4g7VTV9WMJp",
  "key26": "48fZnfsH8eGSXb84Tg2Ktsu8qbWbcD9G9gQuAyqNo28wqaGgFTvmwe88STaHbUkywXfSfE3YohqrZCNsXf36FmGC",
  "key27": "45DNR7H63xUQve7mCYXZRqWNdecmcwdyuFJe14W9JZEMaLbtx6uSBHgtcuHFt4cNKD5D1mhKoGxdX1iYygSGBUuo",
  "key28": "5YxdJb38t3Za3728X4ZtDoNHvza6XYE4tB9R1dNxw7sKW5cKPJ5YPSNKzMDoCDNdA8tL3n5BrMMnZ92cy5wPJoRa",
  "key29": "4dxWawgcTRNQYkp97hM4SzeLNed2WhGovHLwLiseSbmKELBDk5osi3oPyAKgntXYAsrcGNgzGoNfj7wt6zf2yWxL",
  "key30": "qSrvA9hVrJ773ibM1tp68SqBCkvDhJMvQGxGNf8u5G5YopmcVydYN21ALjEawp4w55J9CCEYr47MHN3HQdpVBGz",
  "key31": "4DdVyrCMU1MWc4b3qjDVnTsQyTfi9JhBxM3KeTomJ4srZ4X9knjYessDzyJXr26Ng4swhtchuV6ATdVdtZSbiKr3",
  "key32": "59DvqS1K9WKokjVAyG4R13haWfCUhHhhAJBAdaubCTDdr3fy5ZvkU8h52pbgyVU98BjQc6div3Wkfq1bhr7CUihe",
  "key33": "5286fySvMVPL4BVvgZ1sSdvdC9AhWhEH4zSwgbzccMtwRfnHJiKGrbNxfXstmQy6L2x21aUhSTTxXroFUTYDyMSZ",
  "key34": "4BRnjCxedB3SmLReGYfN7aX73rSNcomapMiwGxnAbULbMcEaFyytDvFp1BM4BWzP7iKHLzJuWrx189gdgdB1J9Ga",
  "key35": "2hEeTsbyk9vKZudL2sKVPD9TwMrYhdw919GVjKuaZCnwoBbnBXfMoBBEFgTtCX6RnLhrrhXuukc62hHBqTEkjLkB",
  "key36": "5F7EyzVU4oTESgQgkSpDuGRNsnuG2PiVumbJPHqjUukJH77cbRWwTnza3roJ3DG8yNfxrNGeiNrHnKUJ2bLbvGVU",
  "key37": "4dN2UY9GKuqLv7DaagajS2cLq3sPu6jWsXeGf7i6Mx9FsnffmKiB9njbQL1CZkcmGVJkcznRNFFJBsVnCPiM2eCa",
  "key38": "4oDD94fiXrSPV2osSKhNGkLUjRK5rPpncufn7XQFzR4WeUiA4wkQemN1NPGSCx6TM92Ykj9pqbQT1mbAn2QD2jNt",
  "key39": "a2oFy46njcj3qsHdzky1TE5imuYzSV51crjuXKhe8xNdACU8Urjxdeuq4avXMRDxbUsTX2RospYo7JsyWQZya3m",
  "key40": "dNryqcURCAVRKKLbxsXdHjsHDnRwQu5R1meCMBkj8xZhWmFPsu8pVtRe26ymmUuFWrD8ZiNPaUd1YG6KX67dcoA",
  "key41": "3rSUa2LjR2E5BSQVjxbZ5AGJVpa4boernHLcxPCXtutZZmJpb8HVaEEuFj7qNn2YkuaE1kn162uyDw66C2TAynQm",
  "key42": "3yCQeQxuJqYgQBPUwXdW5MPA83fANnpA86ekEZUyWNaLxEufEahtEEdHKRG9ffXuo5L9h4xpu5m3AtJquRT6LYsM",
  "key43": "4t8rQokGu3L7srg3yyQT3cjT4Rnn9FpjUJga9RpdskVDz7qEEBh5jj8FGpSz3eCiQpCTPZ9df352T2RDqsHu9Rat",
  "key44": "3iNRUTKQFe3eUBs7ypLNLXHvLxNUMZMSjk96XyBKfiYhS8YuFShX6HLrosUuTRrgbPiucnND6ei7DUTHTuLR5ERb",
  "key45": "5GLmnKSy91PSYwXyL6mRfVGji4joy1jgY66PZoMbDHG5tgDpis3oqr39CDsi1q3kPcWdYKA2eWFeMHfz6YT4TCnZ",
  "key46": "BWa7KbnKhXeczCiaFdwNEAHKZMGTd7JyaS78UfUbGQiTfWsE6CfAZMH9urNoRbzwWi7EsKHZEm9U4GtBNtM2w4V",
  "key47": "23yG6jFHnBF2Q1APeZ1Yc4LekuN64oabwRJgSzidA9QQfLSMYEYV8oq33qShn8A3ma52egYNzs6fB6ABKTnhHy6g",
  "key48": "3gy6kUi9R79VcZAaMXYKpnMkCtpSRXx4fjxAUeVh1oSWwfXA7DKQ6H9aGXWHZ7Ca3h5rof2v3hfz6xMjsJKWZYqb",
  "key49": "9Xdq5X26gBPQqCJoDWMmnx9ePLWVXh2MxVyqHxJcAQUzxJf9fzC4MJxuoydsEULxyiZiGZb8H72dU4cb6pmqRbq"
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
