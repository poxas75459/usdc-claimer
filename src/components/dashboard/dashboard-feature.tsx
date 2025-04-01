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
    "TeKUXzWkHenvU7gcRPMkoFLwhh72UESkTjWaArn9NfJ7g9LbgrnrEFZfqqXq6QkooMBTTRBYrNoRW2mxZZnE3jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jQcgfSfPXEkRk9q9xRdGd1c6G4EtVQJNTzhMCmD1w8oa7Nr7M4qVmTBcqxd3MZMpxpgs4xpZngyHdkDieeNUS59",
  "key1": "3P9JCnHNbRTPRNZdcErFwDdjYypn958U1xovkpYUciwwE3MW48gxMME5DVrrtb338PCZZFP7A2G2wQJ2UR1aRPFK",
  "key2": "4yyArWiFwfRA6CcxDwzzoTvY6TZxMmL2ycu9CB1DWUuLmpYvwEYkF9AZGSeazQvTzk96pCNQ1pJbStJu6ZaFu5Wh",
  "key3": "2tTBKWG1CNxBthRqzPDJJXQoQHBN5dNJ9WzqRnMYtxFSYPeEj2QnwsCn3Davexkyr5XszLb1wZzmsxaaVnKPoUAQ",
  "key4": "4cZzEazxjrCWV51od6ZkaUkBiPEpLMQc65yhvhDKVD3EGcQW5eAugyh9N6rsJruKaAZ9ZXQ5LJAXWbHhyPGs7zzi",
  "key5": "4YQJm2PhVDa8vE2cwUEYPTLSAwXNcR1E6KCBhz1DH2KNjx9S3CPGEqs4B9b5JhXf1v1rhHaxox78KvG9RnBy1Cjr",
  "key6": "4q38NcnW88hyNzCVdxrYzRZLuRecpqtBXUBbmESMeyfG5SM5pvbirhg9sTMXKCrMsBrS1dps7eA4wrKazEZTHGBK",
  "key7": "5ZGvcLNYhShsG7Wy5jJehttgU187gBekQ1LEs67VuxE4MnbHRZMRH3QEENAmcdPeS1Swi7Q36hDjRtg1ujtSPxtz",
  "key8": "2oxRvLPRfYbnRnT1fEddCs54w7JmavW1MiEWLYvnWXfESYC77SFxX7pwagamRXnmPqeK59eE2tNmydiYbdaSK94j",
  "key9": "2fHTHmGzMeahLykZ8g2u5ZyY3kxftZr9e5rubFw8U4RpKA7sJ411vLvGJ9Mn927suPphBSinJGfYF5AtHAh6j9QK",
  "key10": "59JYkB4Zoxqhk5iUyqWckZYGZZZuCV432cav6ECmkvN5bBcmvdRPfW95BSa2tMintBs4QR1mNydHnapX3cwT9w2Y",
  "key11": "42u4cauPaQFy4Moa8ySvaHpAf55S5xJ1hZxmapB2JsotWe1MeUHsRjPu1BYfDFcnEcWLjaKNCtW7qoKMKqWBRkkk",
  "key12": "67hraTvDHpP4fHAeC8yZiD5vWpSgsdsL5cwXA2Vxsbg55rBD3gMXdQ5JU6bbZesQdKouzvPhS6mHz9Acrs2Qov6N",
  "key13": "37XfeHDyLmrio5hcQyXDSQ7BoxJFRSBvTf2pXhtYEwfpDKtfs93WGQiUtPFD8ThvJH7z9yM38i1FbCJLUpwFbyHo",
  "key14": "2Q9A9E2St6XGWZSX1q5ZrGYXA9rq9oJcDv2GqUuezRXzFGQsTdrFCM39kaVwhN1b3NRapp1RxVcywTcvNU7NcWiK",
  "key15": "5wtW2Yy6B849jno7oxjGEi5XaQLGKkE4aYU33bsaxJeNRu4ASGJCc1icTng7PhqkpZ4m22JKeRwUaagXg36FZ5Qs",
  "key16": "5eSpjw3LqwaUbnSH3YQP7a3AWeaFz8AHmW1Hmj9vQWqHvTM12Doda7G6YXbsMzxgcC4rud2AGio91d3vmStTn5aj",
  "key17": "4bVEV9X14W1rGmwVvDgAPwGBkcQ9hSes7K69oHBEgKWibBdGxQjXwMENn7p3qCvD3UmRPAiGZqmxW7CLSrM4fiex",
  "key18": "uucbYRUENoiKvSdDjVRmyHtgJG5FPDEyYjCrRu3q9JrWVpszohAHjiXmm9Wak6GcoAy6LwAiDsKe8dLagMGnHxE",
  "key19": "4PdfFsgkKNDWP4M2m864erNmpiejnE6ty5xsAjGT3PfLaRfntub9hhPR4VeZv5tVMPePVejdwvca8XB5Wc5o5e1h",
  "key20": "nfSoUFTVpo752nCXhYZGrsaiNDJ3jWRxLuGeUVGfjSBnucoTCbDwwcbq5HdufzMcXdtpLZ8tYtg7cY9NHZrQSvU",
  "key21": "xjfMtq5ZgXCTz2FwCPSha6uQeo9L2oYzqQp5Tc76NoQjiwjNt2GPyyw2tYVZV8v6ssUtZHTHmRacSLeYRJY7boS",
  "key22": "369Y4mEetyHhamgbMf135K9zRSEVd712s11rq6cs6Bh9tCGwaM2ULCL51Q2DzE6Nab6jwkfdJBFesCxhGqoV9Cvd",
  "key23": "3mUFEpjNqK7ftwka9bNTZ1tC5ewgMs9c68yjLDCiQmfo3sLTcRxR1ZSTVFVT2tDPvT7thTf9SFcCXE7n4zTkA6e3",
  "key24": "5EBU8s9i4t9CmKbuf56Mhu4FHAmHPWBXrRTYZbyuJ5AFpzH1gc8uFrmUESyLftoZxzvioo3dFwdhcB9n6eWGfALJ",
  "key25": "2hnjJ8y5cKxFGtGmio5hggZJzWVTBMkLAn26ohfzHkCGBPtbitHiKaEidnG69NXrRPJmxNzfkUis4P8a7LLjEruQ",
  "key26": "3HXZVfBop919FKaPpAQJ4CcXBGpXn6zVCcmGh3r42j9fH3RgEbbnpPHXtSLpwBFb2aCWxdfkwChipeaU9o6JWmN1",
  "key27": "Cb73srGn4fRsdRvSFY7bDWYxj2Ta6rij2YHaSZHyvAkeWzE8zXVnyzFgaFCSTgS5ngLDR9LbpCJLCUwVtwrcfZf",
  "key28": "wM9hqcKRiE4oTdhnkjDYKztCqZTNJuiuE7BArBufihqhVEkDECqvkQ1Ei5J38dL2Bujwwt2LL4BRkRbSxJGdpR2",
  "key29": "5xT1ZL8pgrKL8eHuE7gVDCSeS3hxKw7DaNvx75R2zZsgx7jK1syFLTJ6dzwASSkuaZh6UWeSurGVuCK3kaJRrx73",
  "key30": "5nL15qhm6M1neYXEHJXEgPwJ51ZCvGNRi9ThrDePR71GWs4Y9dgSfDuBD3eUB4TH1F5hd6SCwwupvLG2sAq6nvZW",
  "key31": "2ZsyKWg1RebAX3FArC5fg5ZybywD9JiFTPbSViaVwGhJKumb463CAHoVA5WNgVxSN1TkHd4k6S53p8HSGfCC78Cf",
  "key32": "5GNhS2sqSJNiNeSDwteKQ5pjQ3vt9W5GbQB2huNf2GKd3bnJppkcmgY3NKdKi6CsXSRHPdKEXS3bFMR4XMHDekgd",
  "key33": "3F8BKPGuTmXeA2Ku9bmuRZnpcRKrHsXwTH39Pphvx7L1PCNtKvxBaTvgWXhwNrTyGPmNm1kfpu8GRQvFkyANUbtt",
  "key34": "HKQFnZhh1iB6PYJmdQ7vVEvZZEhrCtjAomjGCuqWCf2oAjeFuZmTdP3EfjAjPeMhL6Bo3vXiZ23TzEeMrYBEupb",
  "key35": "26bPLJK2mtjnHNG1q7tA2q5RFbkxsqcHwuagyvwSiSAcU9EDnSa1NfDCG4AvuXvZiY3F2cVFeh5Xex3UJVgz6vzL",
  "key36": "4bu8RJuY77anAJi3WRKHHEbGExpbMuTYR6hFi7tSvZpg8GJSgArCSic1C9PunUzSzNRkLZFt72YCjWHfDFPGCJf1",
  "key37": "4d6TPtstHktqwffbwU9fJ4K3efBtPfgFxZuwbcs1Sd1c7Q6ZNrMemZJnNkxM75jaT7QvdbUBw9QDeWSsV3XQyjpc",
  "key38": "2doQEGzkg6yPF3njbTNVxX4hbG4VFcxHvch8xA5p2ySD2WhWaxTC7WFeuu79xgAEahSadLrZgcSJsN6uLhSoHn14",
  "key39": "62Vvs5b5doyKRdMNCbMgzkSevWWF8y7n88wrxZAU5Suji9TsDGNGEqkG1V4TmabXP3FEV1FopG4iJf1DSBxBG5Rh",
  "key40": "23K8g5AhbKrcJBrrVHXGwSFweZpRUQuJcaUcJsKqgH9NHxxpwQ8PQQtik6jV22ezs9MkxWzK8DVk9KKPnzxe3Rkx",
  "key41": "3d35AXF2jnu5h6STciR9v4243CjnF5B2af5LETdNt7CjiSSZ8Ttkbeaj5Rt2iUW85zPPJGdwZe7NHy3ZgzZjdbyt"
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
