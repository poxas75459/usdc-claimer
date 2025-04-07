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
    "4nh1HA6A9F1yAvKQUtt7RzSELmsKopYbfEEHn5qjPNagmGEcTpEwRrt98TJrCUzf5BcB2nc8ETvofnr7C9zeTnL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6mQ79VjfrhK2asFxd8jg7s3zNbqXuk4bHDPLdWd6DkFiScZd7zfZ8Teh2iCALTfTiEKVAWzYrnw3LPw8tjGnu4",
  "key1": "RBmqiaz4SeXxoTd65dNUioMQVUXHiayD5LyxiPEju5nXUq9LomFhNgczyRegGAAPUn7j2WzwP15Rqz8vwcLdTiA",
  "key2": "24NuFsCzZwjb59raiSL9KsTyM37h4b6FUdocNYAFa7bsrTibLcMvf1CN9M2uBTtTJgWdXhfAjVvPJtnEcGSNNfhj",
  "key3": "3yu9DZTX9DaQru3Nn5ZyrSSozet1auoMLSDaCccBkuVf2yJWnKXMxxYB1b9YbosaX2LX3ArETYvxnDwUTC9iPJMd",
  "key4": "4TLwkbhHtcipttZwDhyT4Wr8MmSQCqTPjbzWARtecbkZpJyGvJwYbSaR38chq8NjCWsVqReb5PXoc68aamUVrXQS",
  "key5": "3DJjrDLs39zgZ8YseTSzMKumGfyKMnPPiwoimvDanQmv7LsrPQnrFRBrdPL9aDhUeX9Z1GRJxF1kPEWs5L374CYd",
  "key6": "5363XXfJewwha91ZDVVsum12NiQPviiskErvyRP78xR5AWveoJQE3J9Bbi7372n7qkAbUz7n7UVaLwsFwzp7eoik",
  "key7": "4ByX7MnFRcxwtB9cFFrbwhPGqc762EGiaSFRXiYUebS8vtQaonQaNmg6isuoNtCakdg4bKhffhZi6phgGyS4tyco",
  "key8": "JcJF6QfqVN1kC2Vy6tEZtVjBodRbg1ngM71iJBX7cbHqeVRXpydb4wWAx8YyW9Cdjeik2d6jUiTtfh6B1v9EJrb",
  "key9": "3hDPGeyQQFZxCYipQEFB7uxA81RJz1NV3AxmoAdA9kkxi2UWdFgWnp4DTgFKewtZ2rhU2323Y2jz3BKkcpK1cZ9J",
  "key10": "2oGvRgGV8M5n3F8ZyHmQ3AzWTbGdxPuzbKEbtDMaqFDDvkQLLLNeZJMtQ546qd8VFBLYDwYxaiBqD92FRxr4m2F1",
  "key11": "5sm75jdjXU2py37gKEthmhrZZeeHP5TMQEecSzpRkoRrCqSjUdYZUNZRTgKgoNonCa5Ko4zSCiX4TqBZmG8GTSHL",
  "key12": "YbiMwHUitW3wmrLNvdTdaipHPhRjJsudQ7HoxSTY4Zn8bf8gw7jYR8MBapeCfBD9p5BqJ4BhBQWPfeh7CFC9JAh",
  "key13": "1pzSc4qTVF9GvPuPPUBeC6TCaA8Yh22eqh4Va4QjKrPERzFZVwFFEzvsiApi25Nu8m3uLmJxp3cHAvjMgkMBDph",
  "key14": "7jPVRxbmc93BUNWPVMLFwxrh1iVpn9Bhpi91dALBR8p3WsuHANKez3kLVs2tmB8LvDWuKmxe3iAyojHmC2xUyfL",
  "key15": "2cWctmbErJLDM2HK8xuWPYeSVQFm5rQk8CcFrBkUzuZJt62qwucKScGaLUkCupab2foUjJgNPGdRUtWDL1d7x7bg",
  "key16": "4gRYqwGLSdATBYx7F4RDVgbpDswVCRHwvaYbP8cTnzNQyCDZJNK2gpe7kp7tJCkQeyJ5rqzBqfvrAyNRBTjQd7wc",
  "key17": "2i1cciSFRMig4XqTdMzdxgoFVgatHNP5zwzf14RGjDYZj9oNHoBp6cKWTmf6QHfXbnj1LPoQL8qJTR84p5Er7Ay3",
  "key18": "3G7CyGLo8LuHrAGHnT8suL3KNpv9SdAL6dApJvup6PAbeN6k7cfXfFWyqXQi7pqfjpiPtWpBSJayYpUfmHNB5z7q",
  "key19": "7jXUPWFBPQZKcwSvPMybPUwtokhdY61Brh1MK6RmCjiQGBh74EGS3uC1MbFvTJPFwUTEXCg4JyhhSdZpNVRzS6F",
  "key20": "65vPiiXPkbTNUXZ69GFYEQFs7syuVPzGUomTjTgPuNMZpfuzhKfiHQSbnoJuQWqGfLGBpqfgVx2zFLMaPnf92tsC",
  "key21": "vRdWyp9kyMVSnCUw3ckoYCByLMrFsPAAsmrYYCHfJw5nmHjfcxhiLTEXDNwDhBsk67axCtGyAUtmTZeuqd1jzQJ",
  "key22": "4Hm2CdNFfz6ZBH8Hi8pP2rT7m8Byu1v2bKiiyDxnBb4WJQ2uAvnrDE8fRUi1DuCQaiF1SSerwLMZNcMKdUKv1mDL",
  "key23": "3UTLcfyPExRJhi579hsCiac5Gjwbs9WnzSTLSKYjuLgCFNQMYHBuWuxMUpyG9YKa3XcmXFgfNYpKJS1BT6y7yEbF",
  "key24": "4LBKUSpZks4x2eJWDix3tsSm7ZvZx2qSDLp2D2C2ZsrEfD7aYwBcSA1DdpTbK6qQxPdeXZG2x3Bd5MPLC27FGJho",
  "key25": "syvN5GGwNxmyEzf2wwDtRz8ytCrTFuUgEJtUN4T3KLkL6Xf8bFUNnF6FghnLM8tV2bnaNiUhZ3afTKUTkgbQa3m",
  "key26": "257kZkYvqAYYLi7qC3JixMsc56WreuEHUFu6ZdAj3dTDNd6yAA41ezFKed4wsJyQMuS3YvgkV2Lkm9bSyV5Lw4kx",
  "key27": "bASCgPQ22C7qsKqYcnvpop5st868PZuCcJVMj7A2GW3SbWWmN9Zb7QTLQgHE7kTeBQWz7kHKpGtHgzZ84XU8v4F",
  "key28": "2FV3TbPJWkaj33f4UtJCFiMESPvD3Tc5YJ9h699N3P8E9VicYQ7Guu3SX34JneTxftW7Tg2eGABf5nV6QTjP88Aj",
  "key29": "AM4vqBJ5vq8d9zTFc6Sw3xNFX9TWPLtUwxgvscv29vgTxhWs6iogPUVU4LWqd3AA4SUXNFemQmsw6SaPYBrnHLJ",
  "key30": "3DbjWxmfm1g8ho2pme4JS3HdqXX3YWoENLHAuMpM6atuZGrE31vZBAtbpyMfR5L2kMTxcAMADUAUBjH9mS21Fy54",
  "key31": "92PtvUSXR48igt2kq3pH9yxqaZqs4QRB5EkhSKHaSG1GpFwij6TKjk6Q8ugGf4wpTp9LZWn31cQvm5eLAuVRe3s",
  "key32": "3tNTnSVaKn7oXf7NnjSHs1GXAAfxHggJKrX2mLrgSYZZEAHBkVWvoxzvWCbeUtSUMqset3LuHDCtfhwF8Eb2gYdN",
  "key33": "55iA5QULucWFq83gRAUe64qxo7svs5z7YBDzKXaRTyCfWm93zLLkKnHadzqMWbKnGK4ckrE6qiS4A7RGehGT4tF",
  "key34": "43jThMFmu5FzUfnj8jbaQb3KZL8K4PWAdNHWoDsVedw1gbdGa87WgjG2HdK5bL3Cnjuxh8HDiaWKuid1m25iNBLT",
  "key35": "RySbPBHZakJsNiTKnJY36H4TxeU4se5vLFTdEoUGZ74pmB5m4hRKhRAfvx3RkwYVL3oYmktpxtJheYG7byiCHnE",
  "key36": "3eQWKPpSMxYfgZHwzXMamaaUXqa5Kz5Bv9tUP2HAi7hbbjtdnrk4RaG6ZAhVsDRKjjA84iJruoqV5URdCkM3uBz6",
  "key37": "NNd4BepqcQsjaB8X4tPQv5u7Mrzt3TcQHgZ3bJFCrvdkZkBhE5A7fPzWBeqoqhRrGiQbQnKm2ZPVsK5pRwEz3LV",
  "key38": "4FBxWyPxEu2VHqFf7AeLnRotH1VbC8hvCQuk1n774SzapzEPR2Be1HAKZ7AB42rAcxYXkGdNm2weiKKrdf2BeiXD",
  "key39": "2MUE3XUu34MVw994y5Auax8BmR6318nWa2LVFrJGkxwcJi7WWpBKa1ASn5F1as7R7tQ2sFZxMrCaW1oTCYFxPFZA",
  "key40": "2YfiPkrSHEGWC5iJiBhjy5hc2FfZKBE9Pv52WJ6sM8hAGHgc3uE6wmFNSwDbhd9Jth81Be5LNz6ABzvnKr7Knan8",
  "key41": "4GWgJ3Bppj452HKDJAxcvHmeWyvrjx7MPs3fUdvCHWfCc1ratzMNHRpy6dpPBpVNzsc1dCRrNbjeU4VT2sWMKQu1",
  "key42": "5sQEeNLmKTXeKEghuyiyVp5XKkdKsQdrgwYd3riSpifS5SroRfGqL9BmCS8uV8aHEKZuHV23s4aZSD3RMMYFsvyH",
  "key43": "47TNQn3xwPdj8b5HsaFwirR1Vi3dA8EXEuXswR6sKZEZt1YcWGFLiHDWmDGoz6UfVetm1weHzxqnQwtXwYq6dsrZ",
  "key44": "63zbCkQ5WaYJay3TYgS33aqwCLagmpJMSLtgWdQUK5msyqhdHq3BiJjdRbqSskNE9QeBSk5NkDbCKDynzWfbZVnH",
  "key45": "fCZpC4QS22VEzHjxfpcrdGum3UiWgRgJz2XcrtZFNhM7nPj4eXsS6pN5eDDY3bEc2fExUTCrL4Lr4PravvtsG7P",
  "key46": "Ay56BtXfpEXJorA1eQbcRB11yLvJNCfQX5decGnKK4TZj1LECDECGCWe8gUk1r2C8HLyhy6byYDncFmHT5bsPcx",
  "key47": "2ggDU4uRMMC7f7j8cVcYt1Un3ANMTRseNiC9AgmB15LrxbubuTcF3YMyKCu29ihtTcHxKwtQsp9AthSHj4QN7qqm",
  "key48": "35Po3HByEzESFAfeHxSWXV7RG1EQJXBjgXcNKaFJqXB8brn5KpN6LkR6e7UvdJZDUodVCS3SuanEQweCQXf7skUd"
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
