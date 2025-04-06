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
    "57rGRknEDhRUHLJLsCHig2s9SNWGHqPoYj1vWds9rbgbn25n9CP3K2h8yMtkqMEgFo6HhiYgpbZAkqeq9zR3ZWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aD6svqNASiwqi9PRPAyBxNme4KAWvEt4dypQTQthoo8jAMUnrRPmhhZSNwkTXL1TEEjbgWz97B2vnXYiotAWoVQ",
  "key1": "4r6cD8UWzXyNEH4gG1axviMFd7qAL2ihZQs4SG8dZAmvorhsFTBDgiASXZQiXp25RnZqc1yLsZBVT5gYmtMjvoAi",
  "key2": "5T7kUHhrCGudkLq1JrtHgggcWamneFeCShiq8Ld48RmGL7Sc9NL9KNBqxp9ot1fPfj2SBYdHsMJLy7YxgGRYLnjF",
  "key3": "257GCe7aPnQqyhZhbKgFbSPXQfEj4gZYZK6gZNBpWjnb6xRDxsyQLga1ShMCQVwV5JRH9EzXQysnYFkM7wVJdHDP",
  "key4": "2ZKVC6vr3J4onosFn8bcvF2ktgwRtGogTB9zaXbKt9aGi77mnZESaBWEJYbAuFuSpGcmQvBm3sWim8qA5LsmeiMf",
  "key5": "2sj2ahJ53B54R13A45qSucMbE1DyihYpn3texJxmzahTHeYbUpb2fhtj66iJ435mNyXpRTPx7fSje5AGnoNaCqQK",
  "key6": "2ts86UWexNDuxb3GLLcennAruBByekysQLzwmSCtia2YEPp4MhWREpdd4Rre8zdG5D46kUxRFxgrTvzjYDFs3Y2E",
  "key7": "5aQHx9oyD6NxwB8gSE4VLqimktqKnRfn7z1tgQ6ut2gjFSCvEnCSpf8NkncH9PLZ6yRMZzCaprBYj9JsLtSPoW7e",
  "key8": "JVRpmmCi4A965MJnPQ81UqhYS6mp5pctRZzVXg2pARtGr85mGXBwTs1Hkanboz9bMnag4YqSK24QJGNXze9uimM",
  "key9": "46i4khSCdrNrjBviPVam2i1Uo36FypDgTid3jgC3wv4SxAXZLMtsqr3XYkCjGwRyN79s3xkFD4XHqu9aqPYdWaKt",
  "key10": "4VPutukkUA7ZrdXoKkwJaUskoVjjn8Rmi3rVVWKxmVCvpkcHCZUfKjRnSyACnAYhXbTphoTfC6CkK3GfmUbVFwPH",
  "key11": "5iquqMbYK121SzoCjAZdAKdCJHJNrMLb4wpEyZV8umSWeb4rzVsTgbn99wqTVwZ7cXQZqszFv5zAJhePEZESW3G8",
  "key12": "4HsAbLufQ7exkpm2R2vAxWACwjuCFUrcpwUYyE9VBNbmyN2Jh8Hkb9fDuTxYknCRXNT6YZCZkDbfe5BQUYCVYv8Q",
  "key13": "4SrKsJHRtuxh3oFePq266KzLKiHhxTM4WJUD7XVCSxSMX4FGSTSj46LGYUSjSReRx4LaswtqiFYvtmJrUafQLmH1",
  "key14": "qkgMmtTBNvnWtzsF7ih24BjuYdVyYyD1TfE3KaNjCTJf5rECBesLAXbf8zi8Zng3rBuTT9wo8kRtd4YC1i64CNq",
  "key15": "2pM3FUMcCpzDBxEor4hwdFy7vW3PACXc6U9GVSqp4GTGQnu1GpwjqAyQ3FjBzfi2cydDThU4zC3XGPpFkf67mB6C",
  "key16": "47Uk4aPgZRTtLnzFc4EMepR1wiKPnMv5UbFibTQcrCTfaCWUH47wXZvrBQS84JTQTKrpC8G1h15nTyRFikWDfFRP",
  "key17": "VLDHkqyMSTMhysBFMERopK3ih79yh5wEHKmijUUNW9jFANAMvm285wvy8r4a6Dvd7eGVD8WU8KLGZ9LJ843GAh2",
  "key18": "3sKJKzF5Au7ZGbuAto6PN9PhJMKcDs69cQqRcw12R4mWzFMDNQvaULpFdHQDSLwp2qNKpYUKaKyj3fhQBpgtYLL8",
  "key19": "2KucT6UXkxx7DQaHcRHhQqioiwSGX2SeqEqgw44N8wyvqVsqYFMLEVCCMh7Fu3QMbrQcQ9JrpZF84R4WqXVe3WnN",
  "key20": "3xKPtzqff4hQahoBkYBjov9P1LsFJsBXDbfHZf9sBCP1EDXW4B9R3f8jM7FYLmxeCGPWiJsQe3BkLJHwNqoPFKWo",
  "key21": "2Ud4LHpo6mRvgmGFVpG5w2mo8iJyJ16KMFV8edjHwmRhoFDeXjVKR3rFLvH4sMLUPoYEcT1EHTzVGYDwk7YJFc6q",
  "key22": "2oMydKiiaybn5mcC5j7kr2xXJEh3QySGEWqtcfTV3fQrehUrZ6dGSvqSiFwmLJ5q8cM6TeTKuKwWshZ3XeVBVuWt",
  "key23": "44RaxoSiEKtGyrkX9xLNKP4FryZLdzz1ZWPwMNNe4VpJvNRdMt3ThiHFjy9v2SrUx6CFsPMWRqappoUUjUJimhpP",
  "key24": "4LxNdPU5RbxrRCNucLHEqtcejirCwrXGNUTgoviUyVMwJkc8eqkEpQq7i9e3hpmRStDL3SJiyC2xhSoxqbTmDgaT",
  "key25": "5bDzUBXRoMiL4dsxG9vr2zDCq5Gpkvi6oqahSmVPXDaRAS38EoZCyhZRzK8YD76M1xag2FpZwzGZvLdy8oBXgbmf",
  "key26": "5KCtgGfToBQuff9E7hyBfW8Py558eCdEpZ3GjV8oeiD84MYtMT6Nmw9iAkMDbjndiP4r1JzQdZVsBEEpaiXcNqGP",
  "key27": "tdYouMvgA5KWX8j9Mi362wuzvK9yyUzdeZ67Kse9z2KgrvKxUG6nk5rDagTsLpZ98HK9CSoBEtETMqjqapBbQbq",
  "key28": "4V9ecnBnYakVwx7fg1cKpzYHV2hUyfCNkrjjzgp515fVz81YrGkMEGZ5vSacTMWK9YiHSLaEpswQkjmZNLWqC2yt",
  "key29": "5xvKJv4dgaHBvYpMUoESSLjn9Dw39em7G1Ksq2ccRDwjdhCrvX6DL43GFYjRnjp1HifzLwnjpvr51u4KznpzZBXn",
  "key30": "48KiQh6vkJuMpjE1BHNpwbB799zZZg6xNXi8sGoDHY6bkjW7D4SNh8BgHFvaGp8AhhGmwFaZyqDTeVwMrtwmAPig",
  "key31": "2Y444F7yEoxZp5ghxzv2Czd5v9wPqxrzhBhm8LTWCyEwcr1EaKpEGN9ENTcnL2Q8HfrztBHCBifoNorSc4zSyG3d",
  "key32": "kDLh1qU8pt4f74Pro6HdgrjSHSsBFCq51ivCUUhasAe3yyVBdWrw86QmcLr7icYUtbdxUYN6WaABp4i349UCX88"
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
