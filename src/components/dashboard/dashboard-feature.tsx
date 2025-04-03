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
    "3F1uUu8ttd2wuWfcM7zHoaJspLbnzUh9U2SD6YUgAPzdaYWhp9D9Cmk8gWjmSaVPdE7iPjNJDtFGHzNjPUX77C7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rw2AvmPU4no3hYec6pFHV413Q3KyHAHCgJFBaue9Dv3FcH2An1UKXcGaVNcN9QMchUouYg3X6rhtmiA2NBydfdS",
  "key1": "v99vMWxY9K8diVFUp192VXv72yqAbwz55nfVFz6SpVxXMY4hP4yS9rKsB1xEPZgZAjhfPcCB4tJipqknZnTAVJb",
  "key2": "278MsKAQaadkcdLMBerfhG3w2cGkFySddyoFJDSbDkyroGxFSN5HE4fNaS43J5T8samvH45otdk49TrVsxbRS8Ww",
  "key3": "2iTyqgk5ecyanRXefTYWHrEHxvbXtS3jfeNRDQJyYfTw6rwdqtfZW4i3fWC2ATGhiEBVyaNTcfrowg2BjttKDERr",
  "key4": "5m5vk28s4TK3MSTuZSXfLGRGRfutjZMm371XG3xkTgf9Lz1sMGSwqoV4dRcjL3TPhxT4LEGE4KQaSDBGD47pQZQX",
  "key5": "P1AibptNVwVpapNgVWBazT6FkAHw3x1X3zCSHtkQ8ymqH2fieYPgKkAraXhMeZNJx9W3q19CUr5Qk6GjQ8PQmHj",
  "key6": "3umfLzeNMJm3uBpCXTrXuGTuix1Q7KadkVTwpnUJKMvDTbu67FVH2EqJwbMh7GCY8Pyki5nt5WWP165EoKoZPJjQ",
  "key7": "4pEC5Y4vpszd8TytQ6ScuPeEZiLk1KNunWj1YJyczqc1PFg8BvuwRKtX6s8wybiP5yN57dVe9NoPmrAKZ8uKJc2B",
  "key8": "4wsdW6zRWJbdaXR3J4gNF2Ti831sM32VaHvkacpw4syUTiRdypjcPVHH4dn5yy9bimngYuAGgUJ31btQW6cVD8HQ",
  "key9": "3ivA8harrBf9Hij7reTSZk42jqrkyRERehXcNaewH844ih2rBVHeca94DYmGtTbFe6cGYCzN7Wjb1X5v2pz9xy4e",
  "key10": "4uP2AmbkuxZ38cxpAooxxnDkYf8KB6nKctsnihUY2eaXMu5EJa81hLwYzrDYYrybpTBZCYEkimdzu7cMqdxuqVLm",
  "key11": "3PyDoZ1pfKMBZ4XyqCh5o1yXb4fGiXzKxKemMtUwSFx8wS48ha99cSY1okrvUbkdgSdaGzvxV77HRpovaK1xgqUi",
  "key12": "4kGwQ6Yq7yuaqRm21xqNHnpKPfBx27r8bk6z4FCB4A72VfcRhGFG5tNenzphRBAG5iRTsJ3AV8hL7FnAtzRQM1m1",
  "key13": "4qQeJPUVRmPhw1RvuNLq8ZKzur8vd4VJtbj7GpASyUrkRBfGKGAxhARVEiGG66evE5DCVotCmJLMsFHYz3bM23ow",
  "key14": "2cGxUEuX27jeumrbYigCJwTSDfZcXMvGYoMisY2H6mkSfexUUw17fNPDCErXYUX8doJ5PYV56EripRVfsz8tRXz7",
  "key15": "5ZSEcnVdEE9UFmUm9Cwrcyzj5mEbURfxoPFyHGiWKz2BKYnzDKhCDTSEeuCdt41iVqnbsbQa4sbh4oNMFw6JibMM",
  "key16": "4B8MRqrt2LwXjtSPg4Rn8vtFaQUnkUayWwkQh8u4AmsYcjFdjQKBsxpygHhFNHs3EtpxFRA2idnQxVQFCuuZKLuv",
  "key17": "5EAxg1Kzc5eeBdoacERhuL6ZpKRYnchAbjDPa7qNX4hUJSWzVQtbSDJCvvxBd1aXwJB1sFDspxXmZoTc26mzSYc7",
  "key18": "2SkFE1WGNchMacZ2fJGqpf4VjbvmUofYGjqE3xkupLA2fTwp7GZHdREdF7K5coV2oRMrx67vmwGMK54mMhRPUJF5",
  "key19": "5m28hBKN4UUxeM2edF8wQ4o3QHBXLXCyvPNqVUiqfS75PFRu1csphDXE2g65U3EvLEFQPfVmu2MpxzpSYR2X3oo7",
  "key20": "44QGUtUqWzxd6ZE1gb4UDcU4wzuz7dKYXddhibR84bb14SQaepbYGLzkaswxfpWmJpPitAC3vqFfWKUsfq9qobyA",
  "key21": "3aBXq8yaFnB4Fo7ymeg9rzmBQBC3wUTbPJWRkQZCTP66bqsabgyNjx5BHnaHevYrwrdAgM9nmAiCAcwTbf2r6DZ7",
  "key22": "5jTbjQ9VRdn34vjstzc1H9feUdCayDf8h7p7NNyyszRjqMCwY1fuXGJnQkj8of77sYVmGNtXJhvDN3HTBuLXYDnu",
  "key23": "vThJq4KmM2n3kLMYHFYLHf9AT28xiyCTqrr5dMm6z9JHYbSRaNVHLVN4d81oZ2TwExFsosFxH1mcjMK7ewymDDH",
  "key24": "5cCqCBfdPZEiAnJhFBiSYqhWJLRnjaMZiAuMLipwbRvwRrpuU7gReznoe7aRJKoERLiArm7kGLLQqahJtWEjT4sy",
  "key25": "4dyoFq1hd6mFzSCBqT1iSPRuF2jULrm4Y1B3sfjXiaZNVGwYvjG675sx5MGzZZfzCBMx8YNjhREkeR9TT8E1d8DR",
  "key26": "5NyoWrKVPDkVsLfEMxfo1JXnw635mT6yKPFJQx2RB8pYQZ4Sxrqpors5fEUHPFXBXWUygGETfDHEHS7n76gXuNuq",
  "key27": "5Cfi4coPiSqzEUy2dQp4t144amv15mijjXo3vAfgCAB6QrR7XoTSmPq9nupuHTBuqnELsrnbX7DvHhukjf7nq2n",
  "key28": "4nLkjh8Ur3sTc1xf6qM4hdkkxL8pboYkoCjjFH7gR14q9hSpszgTu8vbvZMG9DHvmtsthYzvpdhZZgcKEcavi1KY",
  "key29": "52rauRvWtz8U78Mn3J3uw3sFFMsd2VobESQ1i6A2XR3ZaKExQtsxqP8CtVwBUbBLkAfrVpa3o9k9gmj5mkcbVDhy",
  "key30": "5eStSnLG1b9xNe84PCAMk33MWsePcMncrvcWJ3NnTVbibRDA8eZaNfdD5xAstgiJCNeCvQDFnsxJXpqTYfP4LDQK",
  "key31": "2DCPGYaEC9R6vYiqDFojUM66ivCdCKYs37pyJkV3Kn8KFsZRCcutKUc74F7DqPcL6vP68gDf6HDHpsQmU2LrPZGU",
  "key32": "GJ2TQcbk4qWFRxu6p4RHLsd36e6PNtsGMtCMAxpdixoyEkPrp6TRoVTRRTwjVP68q5dfth27R5bhUiuWdSRQADX",
  "key33": "3u7ip7V18o4cacUqAiBgAWLZKi6gfFsU3wnFdZocjjCAc5bsWouj8aFCTgvY6oPaPbCPrrkQUttABsp4qCt3P5HC",
  "key34": "F8Hy2HWZKMrqfTue8BxYZezdZVaFFHLUb2EjtLUX2itazqi2Dchre9ws6s8d4P5uBpP1DDs9NZnc8FwyCCYTrsv"
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
