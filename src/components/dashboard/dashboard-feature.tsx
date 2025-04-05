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
    "4huCe3qdkqoUxUheJKkq9EsjcgxDhDV2bZAdjP9PhoenmEeqjZXLNbYDhSPGNgmasG91myXWJjKuCtiTvjnRDhNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d3dg9ghMQMYaq5faHyE7Vw5JZ2vApvcKzwmpuSv9Xk5Skwd5XBe2mrrNQB5uUneUWHMNsqs8Nr5A7Pe425wkySr",
  "key1": "26tXsQgFUBFpPoqm245KRjND8pYiJaCTrRzQTzbJko65XHnweYgtEK6fzoz8cHrBWqqRizPvfJNXSp4n1SZJsQn7",
  "key2": "aVm6GHLikBAM4dUBwCSMyWA4rPXQ6yQ7U4YowuvtYEijBRdmAeZ4r738zJw6v153xD5Nxby8SJZKf1uQUPiA6xS",
  "key3": "4p2S7E7GX996ceTqkNW7nZsrTZ1cc6XpHEdzk39oFkWwpJJganZ1Vprum5nVt8f4d6jSFyaaSUrS2wjrFf1raLKg",
  "key4": "39ZFY5DVekcR4HLj5DfPt2ugoDQQhnwibZKFv7iN3Qhxhq7XJR8nurDcX6tqaFCZa4f7tHAuLuuTBYSHEYk3iG1x",
  "key5": "56rZZhPFe5TFz6a7cv9ZZ6f8oQkQ2cEcoKsqsyXqa8iq3N69VDWvSVmdG8SyvvXFGzYnVJBrMHLHBBF26cSLxfCJ",
  "key6": "4fkfNYMwgN8qdEKGe5ycbXWr4oJV62aN9LzFG9UozhhUaYwdTFJo5nb3APAsRi6bUPbefo2oP71hpkh8qwBBvx8j",
  "key7": "43g6HCE2cnDgjfSmHka3EC376BVLxkL9uFPG4MKU3n7p4sLm3nmr3FVicY7Q9j9mvpp4T2SXmn64Xnim4aWjNRGd",
  "key8": "52YUbjM96symFEXXcJBggxXLSmUMGeGigs4vR3awxQdZz6btzFxJJBBtPTVY2t2WQKSSw7tVJ1fzsgPCVTyrdLWr",
  "key9": "2CUTPmEkNtGZmy7uS4URPBZgbGpiQZPDoHNzurQ9QLM2CcMq2wfNHCqUGwwapBVuN1aD7Sg8LLosTzWQBcEdg12V",
  "key10": "3nbbLyRwSvpeJ8QWpx6qx4WtouR3D3zARienz8VGqJagjE3BfUEiHZgJ4mvh7qvbQtYxGTywEEzBZnYcN49iHZrV",
  "key11": "4nzFyh1yep3rwRx1erSqfhj9q84A7M6vNr7pPA2HL9buBDsaygXsR2mHXV6HaPPVtkAn44NCESufSwgcbhAe8w9c",
  "key12": "433KGPEcR3urcCBKQHwH9QiWtcSbCQKgmJ3B59ue4qQTPsyPd4Z2USyMeZrZ7631cfFvK6RvNbDDAeHUbxRgxWAc",
  "key13": "2QAX2tYsUyi7GYh3GUav5P635p5q94uhwHyQmXTX5cx6Z7DPDQLZYFfUMMtAxH4zBAf4XFBtejbyENkn99be3j4S",
  "key14": "4YQFm5DizpdxCTPWhqj322j1c8eUzvwR3HVgSb2Ua8agGMd5eZytVuW3EqQqrtHAJgRrEffesq9G1eYXRJMuVBa",
  "key15": "24NHJrg4fQu8gxEeFavrMfEHq3kwkhfkkyHCjkNBfre6cYAo6BZ9d3XEmR6mJKcAnxVGBsbGV59VNTXXg9LkoCpJ",
  "key16": "23f1mBsnNg1p6fpRyAxCcHRz7XNLb2XCrQPHMSCchYjbXniRA5wja4m3YE3GPSK4MSf9Bw1hVcZAeUTseZR3CV3h",
  "key17": "5E7HkondApgG8BdXtBQ3vVL4Tb9twMtmJKABZsLRnw4jUgWpEQs7YhLiF78wA9Rz8yCxmZQC6vv1XU1rkfwCKfJQ",
  "key18": "3KhwSbWTxSZL1LuP2DtmRWbUUKkGsZbNUXNfpZtJ8VRhBbct5q7TkS1oViSo4iYhGeb3H6cnYgzMQTtLNYTbpokn",
  "key19": "2gwikKS2jmfxdbZ3VRyiZodqzfS1eSuxtedbqYNyJ1YhFogLa7E9qM7ayUaA6wASHbehFtpZGaZJW8PwRHYCr8Zb",
  "key20": "2wB2WsQBrXuNsa17JtaAYa5xhdwWJmiGQg5cURNyjgVA3PNG2cR9R6Nq6KNh6aNaUK8F14fww3z9np76M2H2Djak",
  "key21": "d2mV7TtfzrhPXLGH2wtrEvbC4BzYcPwEn6r8efACHLvwxNMnEteQfuzP5gHhx46bo8ZnBD5U3AvXjNV1rGY5jLM",
  "key22": "5wZ4c6RR27r9eYEcWC4JPT6ngt1U3GjNNZPwLQuCcRkPMEwFwa6QZQdovnpVuizh7K6qTuMuTfBwe6A8oTLYVHue",
  "key23": "3aC6ZSgoN2ueVGgJNBPdzfC4ejnEinCDRpAnkQzABvLHCL1XpuD51QHdiANG84jXskKKpADvLrKpJvp8oeU5Zaop",
  "key24": "3Dym6aNAbSvBxZhAjeAGxm4T71PysFLW3aiw7K7vyCzKXViFbdqeJdgjktY1aBg5fncEzFvENi3QSh5kbVpsLyLh",
  "key25": "2knADE7ZFXBeYexGH44eptVfQUU5AnUPZRp6fir5qAWQB4ShaMRxSb68tSgHWDc8SJfBApceNNMupEQ5Uu6WZzgk",
  "key26": "3jZKuPHZ17tcavyzeAy9wdHr27dYco5T63vBJnMB2cRoNt7wj933jxeZ6Kd193oqGz9KkZdrg3YkTLMSK8oDmyMt",
  "key27": "EyqpmmM9RLhGLzq5zp9xg5HyNyzhJSUmCG3iamT27mKHjeGmnSqncFgFKQvJZ49vxnWNjCb2qLoEoPFNUjoxTC1",
  "key28": "2HD1RnDiJkDD3hUcMDW41wfTBH6EYEuhNj9RLTxfYY1DNpHVqXLGw8FfjzJJaRShFcavVK2AyKAHnKA67ocrqnyK",
  "key29": "4R6dsrCKrjfBJV8xKYZXBYyKSCwMeiYP7vq1W1Gy1KeUKkBYYBHWeYEprdiDHcHuqog3SoquzDiTka63beeugbzf",
  "key30": "5qNDXUZTZXUnV7VJ4KpMA2NNKU2GrPgmy53hAbDEUHF3hNSDGTjmLUBkdXmwo9yqUCM6xaMwMDSf2Gy91MHJGMcA",
  "key31": "5AqLxNNGhySpukEnHEgXRG6z4vANYev886uBH6RmFB813YUTmp4RwpmjSn7CV938ktC9sNqJYMpiih5acFva3gaa",
  "key32": "44WaxVSZ1HrFUdkC1QJyxQmUf4swFDgSjbvt7gfniWs8iNP1ZJt1cQuCLqtJdi3NThYVsMkRfNcdKEuvjdJ5WFFa",
  "key33": "3J5CviCJzPu85MK8CbNbgrVDzES8oMwRvb7hM9QxZzfKVtcaX3XWNPaP9rvbFREtT7G3Gpc34omjN4FLDkQxR1x7",
  "key34": "gCq7tJongPmDYWmBCtp6T9NzNp377JELR6usqNm5K9TR5KhLzsifWMVyJJQr4nukH7yDCzvhCCaQQA8mWmuAa4g"
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
