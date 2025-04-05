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
    "5KPWy72twgCn1qU8UYG6i17i1jtUgCPnrzx9tPqsdCTUqLiZp3a6HtTciZUuvJqeFRJPUrSkvsLgWmYm6rH38B9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mAsELxFXKwKyxwMkMSsQiEBRjNUbcmJn4kQ9mwVhXQoPP2M9d1GLSfUjN6foGhoWyoSUUVS9iaTfo84uTxUgtHM",
  "key1": "2B3CmcBtMqLVEVipfTzyoZFMQPUJrDG3VDskq5mPhKcrSHt3AzfZpstYQvPj8tshv39EoQb7j1HvZZKpQ5berCqf",
  "key2": "Ex6zPQq4eH1uCePTdyJJZizwwYFW5VSMWTTAEnMs1vghUDWziuywCu3Bi4fnrP4BfUGaC2VqvKsTaGA4Wch3woc",
  "key3": "2EYA4qm26NWv4P1CpZqniBncUukxprzUu3sYprULip6Nu7QiZ1FGRdKFduFtFppTLtWETJEvQjDWjtWikTTGnEvx",
  "key4": "5egERZ1nxmDhwkQxqaXjFQz6YrGDb9sHMkPzuKniSNZJpupEmJ9sqr5S4ZctvUDYNiDew97aHNxfU29khybHA6yV",
  "key5": "35b9Kk8aFtLccYYx3pbzNeX8dnAFZAvpqPUhRr3T2PBt79pbGi35WcxKkFE7RWtW7trPJDWybWrjV3op1woi6cY2",
  "key6": "3iURzW4tbcvBTFfRXaYcW9YLMJqKoN3ysy5EpHZkXyueYjbHdZUCnBqUps1EVxbRung1ZtrmviJHAVgLZPWRY3a2",
  "key7": "5CZNtHUGZBMQwL7jPycmwosp8yRntV2cTi7v6K6qBQ5jGnvpHkp4vfCnn8EdK5dYPyhZb32VUSNws665u17BHvU9",
  "key8": "3BMjFdxgjwFP32EPSi7R2GTJi5PhC8KNBGD7RfRZhJ6veaLbjJxLbEqeYrnpGyJ94HYadjJXaYRVeWcNEeUN9S7A",
  "key9": "4C7mo6mFgJRU4pYHern2KPNcJkNJLEMbxDYtWCrH4rkg1AeDnc6QNTjGGAzJ1utK6uxsUmTBRFfJpzL1XyzFcK9U",
  "key10": "Si3aK13PPXa2VTsTwrYw466fagxGCqb1AuemGtQAWrXVa4YLrgfJqR9EeaKpB6UphBy56HQahKkGrBhSL5graBb",
  "key11": "5PdrSSDDXEe4mhxLvA1Q2wWKu1kcMU8oijFtqkQEKqCBH3xYtTtzwBBBPY4RvKLfavbYdxF6QmrpWV9XynthaaAC",
  "key12": "5GEX8rEZsFvvGjNzkVdhvYy3dSF3kc8a9bVwJXR7o89YmZnmxSYsHVU9sdBX1mzVWY7fy8tvfPHSozYg9KSuDYpy",
  "key13": "2i7fx4BWa2gt4yCUeqi34xKrNCv41MwEGkEY3mKiRJeFtLr6urX7ppCM14UnXdHuW2mng6zmVj3wBhdQoNoyZsX6",
  "key14": "51CuC5mgJY3F2dfLmLWviZzKaH3JsF3ZCqpfBmWxMFkWv8dS5AJyZbgcScathwGTSG1uY9b6YtKFPikPUziLUQrG",
  "key15": "5p97Raq76BU6wwFJqVg1tr8YJDcTGDuf1QxDr49nropdxLz8FPhPaoHBJQZ6Lh61aH6A9piksFPgi7z5Up9UNfqz",
  "key16": "5WZPN3bndwBN2Rc4QMv8KhPdW4TS5CRdYEfzvLeeNkiT6SymKAkmhu3uk7uyoEeNwrx4phAXNLrAT7eHW9ArDzft",
  "key17": "3K7ksRywpeq1Yfhjxgxm2XA3qjmhnb7vjf5Ni9yde8WtaS3GjmQTs8jKXPMDAh32ANAkSHJ1JnvhcPnzBDBRVW8M",
  "key18": "3GhcXKEzskUuSrFLiXA7F6v2ycpt3W8KB49gyVMA6jpRYnt2RtbDT5RDm5gHGdAbwRoM9HbrDdZkN6WUpQqKptwA",
  "key19": "4wYqJDjySvm72Kv84yCh41SX1SBs8LmhXPJTBoodVmwRQMsr4Vc53L1iGzATLnYx1YqkmQxrQcaFrmyJrrYyneZ1",
  "key20": "45E72VmuLjsC6HQurTh7KhPFrTRkWcniLnMKe8tHwNt6tM29Cvq9Hi18wi1c5bYmogvtBE2CWQde5KCiBEKALkdw",
  "key21": "2S6kngbiSCRpdr3WAfTRUwxRAodwk8G6UWSUhpYDufhuGU3nYMT4bDeRwybwWyBQbbmBPDV1UXk2WdHU6hsRVWYH",
  "key22": "3sEaraandkoesSrsqoZVQuwKnGZPNAfAE4G1VQCCyzBaxbZGNnbB5pp5YHEWBnQunzsZSc8bd5afABhoQ2Ly74Nj",
  "key23": "4hDhXcX3Gwz5VqxM5275bTvFh5C6gTr61SvqRLSjsWfLbgpkKVDPhkSpYKK817wLTsPbSE4ZkFq7H2CRRiFqeqR2",
  "key24": "5UFjESP5iszAE3g5gNnjhB5JUAqRwZop3rg9eXJ7wqekT9NDgZ2nWc36vUGXTJerPY94WjZcYXckqedyYJMwQK4w",
  "key25": "5ac8xeGAoupR7sTAwAaETq4fbqTzEY7gSENTvpJYmUzEM8G4KRWzpnkNvhm785VtedvxQSAZBDcsW5Hy2vMFsE7M",
  "key26": "2jnQvhG3EkYugkqMMzEQdXtsDPgdLB7JA1KQ2g4ULUSz5XsaymnjnpWQ6YjXdouLch8hQtREAnAwo6WRPh1VxrYD",
  "key27": "51qizfCc1jWaychGnigfgrJBiMML4ty5oDbXGT3QXQgPxMN9s64ZgiMQiRyhRBmAPWcyZ7DcCr3cD6mNtPGonz2C",
  "key28": "4BwoF38qhRakSeiXrM3gNfmrprd9sNboA2mLWM5X5PdAtUmBvMoGWpQ7ZpnbSfhjpWmrmZnJgByhcnLpnfjdU1kY",
  "key29": "44qpyV88J7rnoGvwPhv4SzMEr2o4hWZZ4Gz8dynhUDDkEt5uUan8bALunkgybeoLzwt2ej66W46CLw3DdgCji5jT",
  "key30": "5LwGQvQyRnX1f1ZmesXa43uZq8rbBQx8CjUEuVjf9ZHQAeeDmnoU54m2fMXfQkH4kzhjyyTpgXfb9hU7jkHrtwD2",
  "key31": "3z8ZwpkqyVAw7WnFRWuanRAywC67xUWFTdYDTArGAG5vTbvkLfatNAWjb1o3qpjvTUNEHGGKSxbhnZvJ24LAd2Jd",
  "key32": "3o3295iHXXv4Bv1t5nn2aUJ5vS2oAabgW2dEemTnuv2vss5AbRF3xPNspYE4eNenPzdbknxdiXmcWVBuhiQyYHdU",
  "key33": "541yFqZGdgJSxCmpGu1rADcSz1Hn724sPDQgfaS5mYa1jCyDPDwq2vzeiXBuRHuszvLLemBDMYp3ZTd6CFtesq9R",
  "key34": "PSwUyinBiEGqHy1dM98zpDuyTXRFcPgWVggY12NfYdyCJy8QYHgZDwMcAtRLkNT6nxs5KkZL7C5XtkprgNuPRib",
  "key35": "5YSEX5d7GTHFUPPviGojB6R18EYZJnNT2oPmsa6yBsgA7V3BQbyeDs9k6h8ki5nMzV91GDdcnCG9NZpVc3rWhTFx",
  "key36": "4ByyY7K6fHPssogaky2UFNdh6hk2HmSuFbeHguCApkNNFAL8fHppKyVTv1mQHXZ16eX5b6F6KCJ8BfhxRgkHhPF2",
  "key37": "3a2YnsmDYY3kskyPnbsdMHq9RBwKKANeLd1oAKnmtymfgN6Mn16t52NdCdm6TUqpzwnJD2QJ86uAi7v4wYQbGzab"
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
