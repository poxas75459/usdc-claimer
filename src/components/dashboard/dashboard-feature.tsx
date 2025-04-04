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
    "2avbjxV6puVqaJajQupFsJsDxbzVBFhA12Km2zrXiEd6Wth1N9138wCfmxoJrF1cMxLiqw4NZGUfR9jXe6fwaHa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUxz4mxnAwwXMks1H2cPe24BaJA84kk4uhmo74pbhfMDJc87tcViyi9vacTPTRtuvE4yiB8RrjHZs7e91EYmRqk",
  "key1": "3At3R7WbAv7yCz7EJec46UGAPTd7e1XMeBM2L4CpsvaDuQ9N1DjfqtaaWUCfWBtCpqxwJKREfRQTYPwiUZUNJYdp",
  "key2": "4jKnGbV9BZPzNAJXuwMfPXarejZEYf3y5syk7GyrxEoecCM7ZqMMSt13yneD9dYJoMy6csvJsj5pQ2645SA6nE6T",
  "key3": "5Hfa95W64ZNW7KgBocokgqGhEWnSnVw9ET8iPuxfrwfg7qVUDL8cWT1rJgHJ5jj8ZNzKUDyVDVVMvhLV7zQYmJeX",
  "key4": "mqgrn9HbJV3j11pDekysNdy4nmYemiCiVahbQcf1Bxcgb6AjAPR4yNzSK76CnRrMB31FkR2Jh3BCtUisuESr5nn",
  "key5": "36kh2rUjvRPZDF6HZycCcHiSGoWbyzfEuB2jaHxbpQC4mNcxMA4AoHSE4v9zs3rNANgEqpG1UhyKayGtBTNwkHng",
  "key6": "4cxXEvNurkAkLLkPKac6F5Ab6r8mvEiRTkZvi2g878LFZT4uoaUwazTyweY168uqXSWG2HWWorUdiWB5EWmUiioV",
  "key7": "4pDcYk3T5w2onRud15McsKKNqkupfFEpuYVYP6hFhS1nBaLDZ9JA3J6uKpGnuCGAq8xRkCnPZwSHPc5HxRHYxCev",
  "key8": "2dJhM7ZfF3Yyo3zZb3Qy3t4sViBGE6izE4S4FPs4awK1PG4NCPz8dvQ31XgsQRTm8LhfXzVp7omoFJWKEznvBuyy",
  "key9": "bUEdwCd3nH3omxsQP7BLyj7kSc7deQmu3W4y9aGVQ1Yp3qd265T1bpsJmeAg7nrvkYVKLQ6iTF57Jjic49qiQdv",
  "key10": "5wysgvjMnJMUjudTdhdGurMneA145a6YWSv15gDtdgQH15MWrE4hQzAfk3VRk9hDvxwvyCFR5yCURboMQY2ZWPwk",
  "key11": "2o64cmqKdD2p2MpxTgSqqMP1pSod7D4i3PmvCSZAohnpkqRwQ5Z6CuGKqEbsZVhKkVSZkcV9PfThyGgeqPqVEsTm",
  "key12": "5M6ygXkW3hVbvTn22VWDZFbP2ESyYvjazwhMs4skExNMQsauSHphyTDJhAT6qvoomMt6eeytAuXP2QYovevN9YSZ",
  "key13": "4NAdHtgqFx5atmwCMQzr6CRsuvNtJgy6R2Km1kMZYQE2RnKX77DeC7p17PoY26btKfgG6d4k6orfZ1W4B85DKvG3",
  "key14": "41wSngvk1yFZm2LJCTcFSq2BoRhfuiFBLNbu5pbrwop1vqJo7EYPgSphF2bbNqUEJX2VdVqxvCd4YUeGvFonvVgT",
  "key15": "5hMhZ57qPhPU6iuqzAgnoJW4jA3neHi4BKYrbg5ogRfzAiWxdcfKEEmbAQRkaRqcEyPvEGne1RPLpC5yB8fEe8Vn",
  "key16": "3JU94ZD2xufEm4uBkqFPgPVfzUYLhWvoABbHBaaa9BEgNgXzdsCVomQmTbEpwHg9M2VBfLZVA9MbyQmQUpDctyZ3",
  "key17": "5aTAJuNFEtQLWtkmuB8m2AHkaJR3rhpYDfUNbDUGHteWXhyNB62zat7qRK16NWoa7SPDK2W48pmPi5LMTSbLCevD",
  "key18": "21A54Cx1hT9DYSQsKqsLG4kyThzh55pyLR5pxHbTp1iZ8NcaJkgHaYizv2NUbx1YQwmujrbXddyvg1epb912WVfN",
  "key19": "5FH5coW5hoJWtP1aQGZBChKp2JKuV8X3JhMQXxngrfdTFq3HLWKgF4R9dFvn3hbo6awCkpQMwhobp1uXLy2XM1ea",
  "key20": "35HeyiFZFornJeJ64NtvaseTNWFPtoZ6jsfUx2udFnEU7sv2xF4XxftWnGroTDz3AGpu81VtwA6ME3EYsod66ku6",
  "key21": "2AgDqpEHeQVraMKYiYVuvpAThfknZfWV4pxYsMZYMYt2i7AqNS3SkvbJGGWUNZxZZ2GA5MZjsmXDP1ktryNMukN4",
  "key22": "4TWQZjeKrtpaY1xFatDUrphdPTY12Uc9BLAXc7s4U2Qivjc25Nsf49xQcguC1g6v3qJmbCjcnuZSVKCxbtQDKx8G",
  "key23": "rcp1SswfiZsauH1JyEkfMek8jZJbWbqh2wTopg3TnB9Tp5nAZD8ZpLTLVxCFkhUhW6BBs1G53EDtPUu2ytPvusW",
  "key24": "4QdkrsnhghM4GoG2tPJiECKTTwPxvcNfBhu9siMNYADBtLJDfHQf1mX2BbzcjF8LRfKLZfAuRYEyAVAxHQY9AbJQ",
  "key25": "3Kj284Hwv6U8SV9cbQiQ2w8QUpG9wndCFAXbmzt1tHxnNTPD7nCmj8WhLekEA8jmQBpDYv5zupXznt1ykv3tYXTh",
  "key26": "4Eo3jJpNLmCyXsKPzmKNotJGVie1zP64mx7eSrZBCsc1paLnRShm5YDQ1FoG8bBT2Vrg2eTpr5VSwcMKsi61wJue"
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
