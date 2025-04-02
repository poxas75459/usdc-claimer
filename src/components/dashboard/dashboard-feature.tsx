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
    "5n6jSbBi95LiHP8YeyYNu3CXGYDfg1VAsTXg4mQtFG6CFtq2hcFvcdW5LGRjZr2jTL9tjjsns5vaSVJwLbcbfh4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zthdWBMHqnCobCGJLfc8JXqJyb3hQse3ydcDjpXmeMcqizver3Rk3D3GR5W2GJVN79EXgaMjHtULJJYASWsirMx",
  "key1": "ZG4ZCjtNs8GjUnFRzWveEGtfnyVgB6zffyNqw75SLHKhvZVhoWqT7JZfwqed4o1rV6hASqEJaNa8yntCx4fuSJZ",
  "key2": "4hQjWo4yXy7xDcsH336vNARs1FWYUuHGo4v3pxNRFVk5QMaEzJSzkqrFCofgRC4S77JoBrixgbmQcZppyc6tyMHF",
  "key3": "3qsQH4dxqehGPEkuKWDD5yQJxX2bYU9k2DumKm1Q5CaQAgCsrnYcKwc2FLE7ycKYRuSikEVi1RiNnBDZs3SkpkUn",
  "key4": "2PbEnmvMiYCZ9VDtPavkLHYjDrUXJVEgU8KnzJuNC31iLJSoWWuUAj2e6zu97BDDwPEsfCd1XUUyrSHWpuJJwrXs",
  "key5": "2AtgW14NmeHM2XAwcSeWdknLu54Ljp1eRACAXTbLW22k9VeXqSbVdhovDxL3Zr3rqyC9QtTc6JeMmh44sxYmzetM",
  "key6": "3cMryN37MjK2vTV2Z2J2gvm4bm5PsQKDZ2N6XUY3hVo4VDc7UaMKxra4eq8Bdaz76kiwJLxQoj13GncCaum9oFBH",
  "key7": "2cXDfJEwvV1r26jjstmrRTXotd5UmAoJ9Pp4gam1LCmjxEMSYma6gqxnZ3uuLRrL5PZC3UccgnCi1HdGSKEjHrRW",
  "key8": "4uhBXLW3ejgs4GkHNKMsUxGY8ZLchmNdJunML4opvPq7DJWSSHcJiFxe7VRbBnaEra3eNAKiSqJkwNDVYmmgSCHb",
  "key9": "3jJmPDiKDn7rkYbW1gj4ETr9MjM1he9Rs1kKBJm7heKZo5QVoMtaaUmseJvdeAozWiwDPcWeySQo3VxN8rxcu6oL",
  "key10": "4JqeQUfTJEaq9HBWtJFBg7aDaXuT9ZCD6WtwS8MLbovcnxXQJYK1R9ww6qB15TFt4Qs83qCQabU7CAefNUZYZpzN",
  "key11": "2wxH9ESchE5cnX2n4TRfyowjPNGXPi64vESbDhDYwbSAB3ujxqbzus97XzC1xrts8ZeWnodNe39QmoXWpRrGThM3",
  "key12": "3s8rrqBT1XcyWdhKTFgijDkJf8nufjDdty6r7iVmDxcbcoQwpbojFQwpNuwc9LSJMebYyYn4QrZzydVcCvXBuoc1",
  "key13": "5mT9dvrS9vsZWCxhr9rte6nxotVb5xsmgS8cj9rm3tyWDUQdL1Gssi5VaBtQo4hRGoCj3j7HPKtrH95bmv1dGVvd",
  "key14": "3H3HVRbEhhwbQQfDjtqAytniz7F6ZkQm7CwQjQfxV6zQC147ZEVE1rRQnZQGDMrnkbQPjKbQbm3uHNbYU6KrZQh1",
  "key15": "5Uex7Gnb6MTcdRUCvi81BxJm284568xCcSagUaYqtKLNqUtkgoFNj4YMp4AHKdodokBipA1yBpSPWruzNRnHd83i",
  "key16": "4ge6c1q2aezHGyxkukMEiPTUXCRbhorYfsANq23r8SipwR3B3bRvKHnLmFqVwfuoSJwxeWH6F9BdyzjEFWak7Z8m",
  "key17": "3FzHz3LqXqQryK8n1eBAR7pEipse3bUDCAJfsPREFWcG8KTiX78hMaTqstMev2fNNLTXBFpcYfyyUS6aPsKAX7K",
  "key18": "2oNeE9NqEemBF42w3boPHuNWiGstKWiE5j9iYpz7JSmkXYSsXH6mkybdm3yaPnCxpk3XByisVGaw1nk4V63m7RA9",
  "key19": "4WKgmsenVMxxVUm1QeP9T8HszY9iD3qu8v62553dFra4Gna5ixdCJtf2YSKzxqfCFWMGcZ4yepFktRwzZk8FKpLa",
  "key20": "3w7XnhNgwy1AkFMpoFEQa4uyj5deUrfh4grbkyrnXikaGZWspZs67bNJMXvJoJGTLZQzbWbeP3M8cBn97zAirmCC",
  "key21": "3nf2rLtqg2w8o88Cecbc1dhwpnkMHzcwWmzjyfQDLpcwHAi1RJQu8zLa1YyxWLwPFFfGCyMLiouB5KmTmLibJr1g",
  "key22": "5GGKjN77Kys3em4JrCPqh8bfrnRsog9gw9rxNYFDbcTDw9Wzj1Q3SXnSPQ93X1rVW2iJm7yQ3RnRogJEByagCzrL",
  "key23": "3vP3XkgnuDfcpowu27HpQCbeVQArAHLg63S516RvjfkAPbm2CM6DpZwZ9ajh97cFD7C9NRaPfuRSa9WFjLBzua16",
  "key24": "3YKZZLXkk2wqZCrDJN8ZCAufCnaCufRJ9ryzjCNKxaNezzn5HCs5fmzeB17sdfsCrVjGMrGW2LqRo5K8BEcn2kGw",
  "key25": "2d8nadoaCcEi8m8CiFGe8r4spqy2ipmW4Q5fX2J9RRHznSXUx1o9BJSF8R58tfrVk4YsSn2nsKiij8u5sDS7ZBKW",
  "key26": "4Q1Rq5tDsDkEE4be4UHAS6H7Zg3jtpBFnqLTDTEaH9jE7eSU8TpnjHes8wknCqjrWjLsFggJeLfgQmcb7zQGr1D8",
  "key27": "4fjoK1Ha7ydcPLEfPh42PKqsAtTjiLrNJgoynQH2X6SCRn1PTUi3UvHxtrxPmGWYuht15xmFnHhPwSR17UQrhy7A",
  "key28": "vUvxxZYg6XZHGKeormZxTMxpDvVVXeZJ87cpdCBkmKGyhoQcvskaDQgEFkkXEc87cWgNT9BjXXHG7Jqq4KGVMtJ",
  "key29": "5gqGKYBehKTLGbPiRNBuwPgCA8TQgsNetbVah8HZBBRcrtwdqtdtVopEVr3NBKFWinfNG8xg8tH6YLdpBDa8Ckj6",
  "key30": "44CdnB31cmW6T5ZrCuTnFvGttiNcDtxa4GCdm9Q2d6Zz4fwo8yJ9c4CgRzsiMMLnyMaJteegtd4b9P1VQSrd1aEv",
  "key31": "5afAZ2FhQYGVmQr5HNbKmijRwJ9LsRZMA5mykL9PTQhaUhSPmdVX7WvZem23URZytViRG4WGQry1KGpPGvwHp5BU",
  "key32": "26ABWjoufS7BqE4WgMBKoB9uzshx2pfcMd2WqxvSe1dusvp2L9kjzFkdWBu123ZHtk7HqyYPzRc1cnj332rUpH8p",
  "key33": "23E8CHS1QAVk9UYFSX2MK8vjJoRCc7tKefonHbzouUKdX6PhZHcxjRdNszwTsbSbtM2Tf3xt5bDVvmGBmx2CG6Vp",
  "key34": "5tWMZtbXaitYb9aiWjpjct6EcTiVKXaJMzL6zs6LS7dyGtFLar7EUbprNWQuj57PQsSwkoUU9zbAqXf69WTsCFqc",
  "key35": "3LnPf6ju4S9TxEiLHEgtoM2ssttVJ75Bz2xNbfHBeLEGzreAhWZXTqC3aJ7j7EDKaq17uJhEdoW1eE98RQtRc5Ak",
  "key36": "5rrQjXcL3jMogq9oWfYRjdU5CB28sL8pCwboSFqCDBAkDFqyd6vT6uWdAEWX9xceossoQDBUACmGfApBheZ4R8UF",
  "key37": "3fYbbgkr15TT31uKGYfZKNpasEbdEtZGkxDrnqaeqTCjWSA16h55QKBSG859z8vRemiLeR2ADaBJm52kNoj34Dd7",
  "key38": "5mrcd1hUihVuWDUu2CGngXeA8gn1F1EXhu7D7EBX4CvpiLu3cndg45foLZshGVzeYzqyk8ANHcaHQe7Eazpk5Lbo",
  "key39": "24nH3a3hfojbTrkMt5pGTTiHAhpHT6TxGiKVFRg4ZhKudtwWm5edtGmLmEnMSBdxXUM4EdLyqqyZgBJLrk5QbmWH",
  "key40": "AUUEG2gjpFGBUrLiMbiuu7jiVuipef48FVkGmHCeiCoyNT88YugYQ8s1C6gJGGKNNBRJwNoMYTG9766ypsrPRjh",
  "key41": "51UMHVAHg3QbJ27Y3ebjgbRbLk3cyf5GfMwGGpPiPJnR8Zsp2gQgebvdpspfMKPqmXHFvZKNHC7th56HQnbPeXTV",
  "key42": "3hPGTumLfV1vFHchMCA6Ut6zhQSAw2ewfiHUjrU5j13Da9ZcEerimWWJGFv65SCEMPPSn2JqpbPiEtRujQdo7ngL"
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
