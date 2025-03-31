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
    "3MKEMyGcADfEhob9K8P8VE4jXyFQ4d9g6bwzdbcQmuiJm6V2tFs4GA2gFSreGvFTX3TQN5FHuKXPNWJM5eisBSCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDqFmmaVdp6nRkQERNjWniBX6LDUvc9UQ8fA6VQHsoPxwTPPzf2QNhy4JnTrFG7J8V7b1R86TJRRFLcsZbjMcqL",
  "key1": "65poMzvr5wNomUQiMg3z55HCNHLhLhMbinrpVFqpgTDmSMAdjpDsAmd5EU1c5rzJEVVejreShz4uQTHCdVsy7EFe",
  "key2": "3jQu16i7W7dnwyb8tNXRpgUztTcxiWDZfuVWiKLbav4kSAcH9SswPEkWYXeC8xNJNDmKCJGFe2K2ZYsCJzD8vi1v",
  "key3": "4wu3SuV7q18N5eoyTjBCB97XVfPsKfz1MbAMi8GMiUQLYeGC3BtJPLCjQKofL1jeQopaSDEGapNd2VKfQSjPZ7cb",
  "key4": "5rvG9TeC7mnR1yVPnMeSjKNDVt8aEL5Gr77dM9vYuWM4N3bkN6kPjeFCSU3qECsUPG1opSgTvjHH7XpnhDM7VPVc",
  "key5": "5qjUSEYgM7q1Pbf9pV8A3mG2S3NXKky74qNGzpYmCc4eRcw22qtY2hV29y71kKbwmYxmKHTwN9GiDHf5AxnrBbZ5",
  "key6": "5pRRDShggJPNMfYh6fC7Kr3HdL4CbpVH1HwkMav94Pq8QSzWvJkckUsufGhngf19cEoaNzo79UtFe5V8TfDvys5g",
  "key7": "5JHHHLNtWkRA2epwiyES8ThxRowJJt6FqEP81LKrQAL1SZBxBVxemn8NLhK5ckmE7uJmXTJ4ZtuhbTx4S1CB2qC3",
  "key8": "73DmM6ajN4AaM3pPBNhnLY7QXSGwyPqMS192iUuKRVbNiB9Uo8zhYXMeZvjU7qmkvJ8uNEPdnVzUEudvVKdWBQL",
  "key9": "5f79662yXnMXzKgN9hJzLN9WVUR7shcEfjAYyxVRzHPcX4a4TngEwMT2GDPDqHKSwwT1ycqxYBz4bef5NcNzbfjf",
  "key10": "4gVg9WTRBtk5BTAeZLbM1xtFHgoN3x3S41jfVqoeUZXYUQNgPsov6yFYUXinGozNCj1zH8tr5XKWhbc9AfptPyUq",
  "key11": "5vRn1HoEoBpsnt7sLUWVHq9FyWk1aNRzKhtYJ8T1McmQF9LSxAVCG8YXxfKwgE9rwmrn5mnXoiRFSXs56GbmZGhN",
  "key12": "5ggCHJT6L76WY7uaypDNfQSxaLULyzGtpn3a3WaXi3ahjopMwG6eZEcWkyST96YtVwB6zKLcz5WBtyNxm8D3SCoG",
  "key13": "5sMBnUDTsNs5jXuoza3NTfzH1wmdKW9REJgNQJ62mmFFEUFv3zV9HqSUtPZCQZkH2F1YRQRyjnmnSzZGj5ZbWviE",
  "key14": "wvsUAfobssKBsBzks7xVCvmPi9yL4adEPtF58f7ECAfBWDXvYzCTogrWC114quG6SqWhEVFHW6obrMCDPKQGR7h",
  "key15": "4v7f8osgy6R4EHBX4AjWBGYdZEmgPXmyZuyDUfXkfYGce4paekn99fatdgJNvU1F76q4nFkthLyXabGxWTtJkBhk",
  "key16": "pmYSRezAdbMqLg6q8CTNRLHgdcsJB8Kz4g1a7YPssLwyF5CHtTc4ArJnfdaskbP8k5bhcBQYyB4icgqSuit9UyL",
  "key17": "4GBgvPKpAGHTtUnbq6mttYrNoRPMh4eKFweyXsnwJzbzRF7CXQBpP75wJW7srr5zgmsdrWoXog3Rm1bFM8NwFUWs",
  "key18": "3iFoJoPNpr81binXbnbdFuXTgHtwffivxZfCp6xgfcJvx97LPPxs4n9JaqfoCfBLs3arDTcNhQkCQsyqgNbGXcpR",
  "key19": "xkCqyLMh8a8UyqyzTNxCnxRMkqLN93fZJbJj34GrYgxmb5kj1axsW9bbYdJnV24ZSgZigPsB2fzNHRXrVmoGbJ6",
  "key20": "5DWAntavPUFfKkdzVvSn9mSMkfpJU3B59PqtdKJj6FPaEfB88EPXEfJoTpDqL3LtjCqp1a2CcMJD8iEDwuhFQBdR",
  "key21": "3KFpibbCZj6WvfJT53fGMPMcZt8egkdiEw4qBUxLYUe9L3JcGJGmFqTsjSQkcdP1ZC8Y9hUEe2EwFkMAV4wnmS7v",
  "key22": "432mLACV65U61uFvcrXJMcfXqE7fN5f7pW1eC774B4mHd4fw2tbroor17jCuA1pbD8FD6HiWqBThUo7KDXowFnvh",
  "key23": "3WmdVnqNC5exJRTPaFwsmGw95fRiJpboQ1YX7vcJ6H4nJa6QvwhFW6kNWBAjVBukoVQWZNKSgBBso8eMCZKPdNcr",
  "key24": "2MFgYHDtHBVpFUdFzXW19cA776yhD4pN5nneTbkgWGJ6dvX8F7tUqB6W7wu5iFhd3NjAMr3B5V2w8mYBtBLLs57h",
  "key25": "3EBnH5tkwbLSi7R6ZjAFeYiG51EJsriaj2tGi8dDr2mwNekNv9B69YcNFPLjyrgk8cBGUZL1gYnYE6rLuucfFQUD",
  "key26": "4s14sYwLDceaBsbP9JrwUMhrTbcjiVuRqR1yh8LiDZJ7LbPHmARaXPGTTB7tEsLk7we4587GS6Uc2DtbSsYp3kkB",
  "key27": "2Bzdri9Rwic2i6QFBYAuH15nW6sP22JGi7kc381DuXB56SHeVwZVZw4bUvgrXU18QR7trmmgCBeCbxwJjhydWoGU",
  "key28": "2ymk1G4vPP8wmMABmWM11JtnUfvCjjhLMvTXqgJSApr6WBM2PnzzUXUNuhEsYaijQ3Z11vg5PumDteHvC7eXMogL",
  "key29": "3Cqx9wipdfqN527BkKR9Zq4ib1gXLtXbZ3BDM5NSJinLeC62Gv8YUZbrsLWoVXqz6WxRoxgpTpZgynWhsHUyrYqq",
  "key30": "4ofq7NVcdwB8q7RYMKAyjHesEeWX8CbZENz3DfKfZrWXVqb7vdDDuBWQuRj8ahBQyqffXrLSF4xfGqisMF6c4Yr4",
  "key31": "grLC2R1mEZoaAvmJEV4iNcez5qapGEWkAt2rP4TnK1YuWyiGUNVcqFP2RTgHvHvYGhzGC6kWX6Xkqs1BTnqc3NB",
  "key32": "o63rBNR1nFnEmfgRon5ba9arTx96P5bJq6nAdoSwAQyXEpqjvWvSm5XRBN2ErbetVTgHRQvzVYDgR2umDyoJYrL",
  "key33": "41WSGyJZYGW1jgrYefXpmEcofUXwYgTQ4gibK372b4UKu8wok3GqnRSev4P6bjB9RJefoTdJnkax2e5AX77mXWQN",
  "key34": "3xdgHqoR9qXUpXsvhrG9P2EcqHyZZf1ev24pGRmVFJCXqFXWMGDcKm8HFmgNXfSWz4PQxPyptTgxK2BPcH51CVdu",
  "key35": "okjPt4NhcbsEauQzwTktRCJA592Bz1CFZjXCHUoZYZDbwJxCt9MPQZUSumA2nCBqPdxRrPQpf8s56UGg5uFXRXo",
  "key36": "35zfKRNVKpcYQLJzNsdEbVPjrm6VYaX7R1H4LM1ryYrPcuo1ZVJNyAgVTK69JFw25pnDdWieUA8ZUHcjaY6q8RTx",
  "key37": "5RTFmhy2MQ55iTL4FapvbUrnExcSHS1pYVBjSAoRp6vgpybqDTmkBK8VBUy3hDrkBmUg3hMv4eHxLzR4WMtTJ8yJ",
  "key38": "36F5U83gYB2EoRBkwCsF3Aud1kwQaWw97wWQdXinuxyVgMn3pWHVacaJKGnLZA8zFjY2A2yr4oD76j7wkBGeJeZd"
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
