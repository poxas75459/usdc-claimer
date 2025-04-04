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
    "3rpSQGZJyrJ3RsKepu9nUXX2KXWd1N1JgFuQRYjp4pRokrZzCiZ4xXcPMZxaHX6DX11as8zxpSbg5Hag6JzWPi3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SsC51EwkPsd3sK9TjYvEZGT3m3bMG8iL84gckkhWPxrXjmfneKinLm86vFRLSvEzVyquAjeeDgbFXuSLMkyMTwT",
  "key1": "52ZrjDnCyzpPR4LDufjFCuEvM69UeVFfNpKnFMyXCBuaVVRymkSzZF9PMq8omvSZzCrUqLSyayeXKZcqa61vCHtZ",
  "key2": "5S4BR9uBCKmu3vGvy2Vbu9aHTUkVMBP6FzbtNJCVodYvDKB4GWhfBwkVDc84EoLbKyR7cP8VFF9SNmmQJigbMhh",
  "key3": "DLHaEJkTwTxvf7ehGsQaHhnjDSFETeGQXrDriHF8zLEb3X2W53tZWrFvJkk5THWCQhSduScYjy4ozjUKLqxFp3J",
  "key4": "izsJyZbtSwX1VHMSxG3fK4MG4gBgd9NT8yxQodHYXwtU9nPgPkG6tLyWfcQuUH6CQf9xsXc2FbZDD9VeF7t7JdX",
  "key5": "3484Fg9wZ1LWvZZHqmARcN9M8W3yxFMDA8iG2HixZYeZ5b4yY7sZaEHXSjMokadTfQ7xSq6TUoWTX1Yk4ni5yBbo",
  "key6": "3xE1SsvrsuKUnKjTM3N3PxTULktvL2q9zSRavxcErGDYHWwshqYNXpPfuY3vDZRz3EaKeXeM9fhKLT7eB3fTDek1",
  "key7": "owb1FkEd3RoCEhFgNvp1zzDYCcUs4Y4jZzRCR9wQ8njsCMCFwYMKcag9iDdJ6CFYr7f86wn6ZpqeVBytwx2pft1",
  "key8": "3EcxAU17iaUwzK4Xe7fEK1XnRJcyBxetSuSxnNpanNpczzcZXGLJC9GQVep7D95LPBx9C82HpwjQwvs5bQUpXUiM",
  "key9": "65DeNtzUuwm5FXE3D8yDeUUjgkhwnYDFmqWCGvzdo2W7PnZrcvXCuJKbWBUAuYG6KbA4T3MUvVdj5eopYDJgYNbJ",
  "key10": "5VLN27S3WeQriya6LDv5Vkh928n7DWM7F2U8MHajkLv3yqriNdCEoc37cWEXzM8r7s2TXMPxSUdJ2GXKZCTPZkvf",
  "key11": "2wwa1syfgVe1WekHeNyHjJygQPavwbW49ojonMSV8Ks4B5DbBZK8dPGtqZh3VjWKo8oFomUsLGfKdeETbCDbsohC",
  "key12": "5Tbn19TVv4Jxvfr6hEdrAeWPnoZgUpAxgd7ACUmVbpugBjdoC971RhnWxzLKeWkcrxpFsZPCR6F6Gp5Qddkauxd3",
  "key13": "6EtVj3qt5w7u9MA7BfmamP5wF79YTFpx3nSQnhcbzou6s7iXEVy8HPkheqJ37iDjQpkSzmujumhqFfEiiZNEQxL",
  "key14": "3KgqydbWi7NDCZmwmtQ8ork5fsnCyzxVHtKYQLHSm8sJYPZYwCoCbFvHu7gjqLW5szNZfLk5SyFwgVzH2hzu3HyD",
  "key15": "PGCanwcsYSrvRDv5MbzGnfHMLPnYyC1fUvFrdsCEXcYAjnyVoL4zZDDognHpfBs8LcjMbNamM3p7af5y8Ac9R4E",
  "key16": "3ToRdsYTGMKDNsQLWTep8cnxmznhAG6Psy42xJaYjHtGg6Dv2ZHrv1k7ToEpcpwPqw2EZkWejbtgXfiwiCzPXWez",
  "key17": "2NzB98Lya5LEZggxWhv8kRVQhatrX9CMn8T4zrCc6zrXiGmzMyTyBnJ6SNf8pU4x32teD5cbfbpYHWkLWY1CjX3M",
  "key18": "212Psc3hGLTrTrfXNEmFWty4sFSqzdfTUnXG3Je5VGjqWn4zqGHRyqd88HZzVN2Wuc6Qm8UacTrKHkLBpdpYThw4",
  "key19": "3WmUhvcHs6GNUe2Cxk1RBLtr9B9TWesHqhp5MX6eCWAfgqkiXAob1ArSSDW2J9pmvhZQT3M2aSNCyfawC1JwLuFU",
  "key20": "3d7YFx4LhaJbrk185VQywMJQRKvm1wELN1iPbEp9a4htCdevLzAVCs5j8K1tsvwZWs82pJeqXXXENsPzSRikHFZw",
  "key21": "5iuKsErZ8iqbDtafaHPRFtNPXqajuJ8ZQzKazUX53MmbxJq3eMUNZbKL7hBbDPrWBK4XG6eb7yB4xFFEq1SDYdk5",
  "key22": "2EShoHo4m5pCWfhxQpoimTWVr4BQMHjUnX3TqVXY6ugXy7KYFNxuMVNBj4wafc23FDVecEEfi2bpAzJNASS1WiTy",
  "key23": "5jX1G3VKgXRRkTbzrYvkXGHCxZkJgKqQHPnZarzSqqM3CbyVfLamitxRekNsK8TBufdtgzAiZfMWS48N3tAs4DSe",
  "key24": "3FTcgSTtAcM7WopxyXbuorsWAa3BvCAhrssXkJVHGTYVs5fVsnh1Fu1JftJchvBm8kcfGRdAa5WdkYY4PZnsdKUf",
  "key25": "4CvqS8Ko6w16AZpMB12VSU4CiPkFyaQ1wvdEVBsPd7QV9hwbXomn2SyHn2GG86zLGgacN4MedsncrNLUra9V9qGi",
  "key26": "4wsax3VXeeeGbnoY2FUHayfW2oRNCepQErBZKeJBdkw34fd9vGu4YBx19YSz6rLpjoXUSHvJ1xKtjT31gUwxAx2j",
  "key27": "R1XmZweX6TQuLteRLfhw9krCbP4UF3bQDQUuXwEXwuj2LrA4mh7tdrAMZnYX2TYjDsXLwkeQnVYTj4E982WqP2a",
  "key28": "2cK6BhL21VNomvzMxS6zR8VKjWqivsEEdAft1xo1Ks3Zrz4wwbSFzPLL6cjHixCD1455ZX45TwMnGfkkNMZEUHVv",
  "key29": "nmUjiqDbCDZimH1q1Stke6f8vARHXXbKGDVBBNPKQz1RTdk5ZUTChFUkxT4Etbr1PLMikZrGQAszcVt2r98oHzX",
  "key30": "5uCPu37PNkPCBWvUoA9SyS5MgLwXqFqgwkffW9YzwLMFgKGN1Q9aYEQW6adicA1xAKdSvwuC83t17ArrQLj7w54F",
  "key31": "NtJQhrfzqj8z15YenDePFvKQWD4VsnBHyCaRhXsZ1tC4BaKUYLkizF4zBvRsWDVmXybED4sLX45w8jmjuTZXWVk",
  "key32": "2Rn4iBE5PdXAxuijc4JseUfewDgaRRGw3wS8BHhAMWfX9f18gfxvET7VPevxtfRSP5E2GXjQEVZ13FG9wgLSEQuR",
  "key33": "5e2YeNMLhCJeM4sBmaeUgQp6D6fbhVqFEsyLA5iLifJ9ninUztgtHmrthDKfhJdhaSNVbwkxJhVx9Qqi7ouJ8xaW",
  "key34": "24pW9WerDLrm8wRyS3GfxEL4oXZSTPEZfJPPt3hWs98r2Us6ifGP5q9zM7wJBC77BatnjBJ8Gjf3NRFfS3DSZ5Np",
  "key35": "5N9KLEyEggyvunkgvT4YRE7g8DZhnUSRkS1p3e8MLkLyF3cBx1wjgp6fXQQcbkjJj4aoLLMsvRLAEEkkmYnPRW7a"
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
