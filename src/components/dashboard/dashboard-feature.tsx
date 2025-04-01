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
    "269ZP2QCv59M72E8vPmmc6NgBu62U43dVqXZL6ACSfbYgzZRzdchDP2paEwrWn6QHCN4LrX5effMV1s2ZsSX8aPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ijFaqn4vjD6Uaa47DuHMg9BbRZZpKNwQ22inTVKiyyp7VxnaUoRRad7fCnHWJyQgJ83x35zVpoSCGxyiLqs84mR",
  "key1": "27u4SGobg8x8b4tEheTF8zmqkh9iiY4sboeUX7fxAzipjJ373on8ctKYvuJxZa37CNt17E1LS6QQekmuEZ5oCC9E",
  "key2": "L49WadJNGBBHdAHitgnwbxqZCXEmFf9Mf3WQdv5d52RrqLGyZdFQHrJRMiGz61gtoXZ8W2TESvwDdhwhZgzseZd",
  "key3": "4qLDLzZpJdqZkaEdJJmsk6a164xM7dtLopZF3yzD2tV4Z9ZwGtccyJosnT5w85D1jKA4dQ8rtBcNe5GxvM2bz2aW",
  "key4": "47CNigWV1qEg5WFCSthW8xBoZ5B8VMPGjRLK5MvSxf1cg3iM8c5qAxgit8KuieBDbVkqaWNR4nUeQBPejvEbFZdT",
  "key5": "4hHEShtvomaxgLKiz6gywiByN1SiCZ5LFbC2stHxXcjJ1nwy2EsLWqqXCUf8URRg6rjKruitbFM1XyFkKsoszxyX",
  "key6": "33DTZwmRY3UfpHfRpoLzs2sRvkqMkmoXt1JqjUkn4x2cmmZZtKeno4Y5mBhvtWziNZmqPN4Y8aKoiZ6t4UijSSwL",
  "key7": "613JB5nbzykWPLWqytt2a4ahMDynRBXpuGAGF2bykzprPVbi75spgsYgQTDeqR6m3eibxnU9KpQ5e3zoSGUTnV85",
  "key8": "YDSG99Z5mM18gLyevb8CzjofrkXsVcExcZ4KkprdtEZzBwwVGjWkBXvkRRAvmc4Dfipy5HMhDjztVgoJEiRUDgf",
  "key9": "2Ke5yuDeWXkLAZq5V6kkwVdGcygm1Ap5TjgbGndGXgQTayAJnMnQWn7fhottRnB4dMwL7yTMexuLYYhTy4VMpfmm",
  "key10": "2gvJ5Khb7e7ix9cCYLm7rgpgyFxzs1ojrtjo51PYCkmfbS9dnBXkNERGhRyzBV1MXLPjbcWQHiiTCEwVBfR4vNzw",
  "key11": "rHxk2SXgnBeA9hYJoKrCAx48cds8hD5jxmrXeLU5oRfUKgKXc1tWRqKnqPAUfyMMHe6UXhKtBzsjz15YpaVRejo",
  "key12": "5QHPPh2iLUzYmzoQVjEYkaaNhuGDf5hZdFhSjtn8D88zt383rxY5Mr8n6hfbuc3c9fnevL3Q8tGaFMtRfB2nfmBj",
  "key13": "nZ3ZmHAEFgFZTXS4RbTEjk3CqGMQXtAZFbWaAzJYugE1JxtVpMmJKPELj8yf1Vr9yXZ1Ya5KvWLBegCxytZLWdf",
  "key14": "4n9zcPA14ZsgZXW1rQVmw9pet2Hnzr76292CQUSTWijfWmnaod7GcxS96cKyrbj98pyGqJKFjtexuVhTPCYCfWta",
  "key15": "4psXBigheYG75uFp1tX62tsZ7V7eBp6LvxFcLu9TzTDocaFpsKJigz4E9LstdpjvDTF3y7Jpe6GAsqkMEL1fK8ro",
  "key16": "2z725MaveANS4jCAg5qJ25BuRKR2P9GykEv5AbuXgWz4yw5h538PiWRkP9wUVtTMTBE34nppgLPkGSo3Gtpsnnh2",
  "key17": "3JynERDFUbK4bUNGDMuKKaVV2S3qnsNL4eTDmiCTsFw1nVhxxdvLdLxdx91SxjsKWbmRG5k1BFeXs3uVq3uNnRk4",
  "key18": "4DvfcEppfg3eGUSJnjhrtMGRUYhz7zyRmgjiqDSXEjbnyC2Ak1ZbgFW1D5zdexazS5ZEEGRJk5b6r1ovrnMRgiyc",
  "key19": "5GqHeAG9msiWqKmCyagPSLD3m1bReakdi8Y5uTVLVNzkQL4CRpF9arDw57nZGkQPuHq7nk7sxRynCoLoiXEhy4f1",
  "key20": "3veSfvng9N7sVSPkrNcJ3VEGDGLaCLSK4rT8K8fwAg3haXvvAx8oDQuxrBtrci5c1e5QwYnvi1DZTT9vGckSMaLY",
  "key21": "5cWA2y9BU9CJ8DtuPr6WdfUZYopEinJgsvBNrTWLNbefp2E7A78L5RepibDXcgbxexeE8z8iu9RSnn8SMgznNc3L",
  "key22": "2NNDPbjmVmFT2haTZUcEakY5MWV5mLAsTu7NnZAvnKJzgUs3WCGJkrhCFvSLEc36jFvtdYC2GFeUfhU7Eg8Hg9SS",
  "key23": "4cxzmEm8nqZPhbhPfoHhTahvwBrmTNkAiFLR8MfxvhuSxfrUPsMt6GgDnqGDwenezVn5rBywyCs1X1nau5HBQbv4",
  "key24": "3rxwYfW2tn3DgWMkVsfjsQLMtPQMNJ72ugYcK7WwaLjbvGok893ibtAHYNJLT7xQppQaijVv9C8cLrPGYjk2BjCB",
  "key25": "3EK7A2qQQ2yB2c6peKFYQQZhBzJ3qAnDw6xRECq9ShkWJr8vbRettLWfAFa11qRQuQkM2Y3gEYyaLKutwvSfndKY",
  "key26": "2Jn9RmXHjNQjUjSG7y6CMDmS5BfqWrVY5RJT1JqG4GyKTwBGEfu2892Hg44oPQa72mfBKb1DzqeRmJihkFWKsyci",
  "key27": "5AezGENhSYRGSMuMY51dtEZZGnHYUsXkweLBUZwLT6dsvL5M23WYEnCjjdsDF32Fc5DDrTVGfFmcuyBztb5c5bYq",
  "key28": "2HiSxVrFuU6DMDkptZphoLQn3SpohRMENp7prRhdmNJWacC7Tvp4DVwffFuHsYCpfWZtuwvo7ThqFTH3JppcdADy",
  "key29": "4Ed6aCJzq4H35FyLnGZybETR4Xn2wnUBbW3UQ1unbSBDCNs3oTUVGxQtWYP3hEtpr8JvtDoRvWjtSP64Hk1kbAS",
  "key30": "5RgV2uywQizQktvrsTE5WCBrGz775UrBZdYqNGnGuhY4effKhh6h25h6eiriKL6Ck568iqtkjHivVGiReqT1eXP2",
  "key31": "2WxjagYEW57PVuy3rvoyiHaPexpJCrWCakni9RCf4c7WTiqo6XBnkG9V7JgGrwWkEWJTfNd4b4JtDBkNU1sHhe1d",
  "key32": "4FkqyFTC24LVtVUaDCiTNSsHisdhFkpf91sbE1u8h5edcjq5gHEFcz2pAF2oXDk1sdbJahVFskwa852woN3U5aGs",
  "key33": "3AYhyneaE4d5oWnxHXb76vaH2UCk92xstt18wbWC7RD7b8t7SWdukQbVPV6p9rjmyDHvEe88kGQS1TevkLKmiwn1",
  "key34": "aqdr4Coot5ACPBSW2mwEEFXf5LUzVSMvSKfPrmxqWqgkcBrEwpVZGapX9Htgj3hzAZ3437zMajw6WnGZJcWqmSY",
  "key35": "5WSDMMTvnjWEnhQS1kF1ZJywdRafm8EB5gTJdvjnRRkESQ2pYtYNdzYjoSQ9NBviKYhTGEh3ngMvVdJExMngfoEq",
  "key36": "9MBdkzKUW3jtegyi1KfwdPLcmv7uiGCd1TERW4GMGTfB18sMTzcudm5cRVBsPnhpsfPFehe9dJN6rwivmCEcufh",
  "key37": "5d92EpZBrmuLVTFDU5YjLdcLvahmMpVVZf9eEkLiKnMcg83M6duV4CgEsRJ85emxBfWWTAEZikNk7nDbx6FoZGZ",
  "key38": "5KWL3jryhVqmERPB79EnCBPC9zMAC6tNcBe9KyKieaKF88YwMNdXbUrNi2XmnEbYvK9XYVMn5cdMXjLjv5bZAGCY",
  "key39": "3vkaw8ENWxqcmgGL9XPLwtrxiUfFZ4GqAYoF8gwtTDATnXQdGtPrE8rQdkYsjPfqc8RiNt91gbdAzSUCXrrxQuE5",
  "key40": "3Y88f9Eb6j5CStW1MLwbLfeZCjKJHL1Lnr83rbu1WPTnpmgFJY281PVmij6Dr1vnJXdrsMSinn764a8S9jcoNECS",
  "key41": "mUhgHzVNh54iRraY57kFXKZ9dCPU5ANTNEeD5YdC8NPuz7BHNh1z5AuyFAJtfkSFBBD6Qqo5wMKkLap2Fre4EB1",
  "key42": "4oDeNKmQyJcFqp6jN1rHPBjEQJBzFfS5t1KzpHNjVQF5EaSgv2BCgUPPbMMQo5wk9WKmt5ns36byYkTA1HtJg1gg",
  "key43": "2JpbXyjaQLQeU32EkmqYAjWRusmsgbrqQhnqxrgVFhChS6eek7jtddNUVFgUypPHBwSaBaasbJrTTz8jkHDmL94Z",
  "key44": "C6nNiiSgfmhc7iaNLU4fsXUGHi9GVBWK4f2eburY2hEs3X21gzr8c4z7Q6dTiDKt7NqZAkk6d6PhFetx2CGkt9W",
  "key45": "5izbsx285mmSq43c9ASKQMnzLNEWeAHxeCHfeKmZs3hRRQjLNHc2CcQSd9XRm7oKfui7GUzJK7SVdJivFVH2tdGw",
  "key46": "4jGWU6REM3sDvwviApnHrozwE6a3VsP51gViaCLpgMky4wW6QtPfSCspk59mL63C2Hp2gNjAuhnp8SqdtTa3B4Vs",
  "key47": "yqGDA2aoaKDUZG4Sz3qFQoatnvxxfcu599Ygj3GTyTXN2fsLR3YhNYjPGKhkQjertv7RBKTGrj2QLvsB5HRycCW",
  "key48": "5XogoKdr1VstcpK681NkAqcU1BEXffJqi7eTTGs2qfhRrRqsZdvBxSjYms1MfLNbG16Vf5GcEfoR4LotSbTZWWEE",
  "key49": "3dDbV5KRuK6xiQ8rMqFzWiEUCxkbH41ip3poD2Ng4etSFreT1NFmcF6ShM2MJBFUT8qpxbB2A2itZw5juQyUh9iu"
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
