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
    "2U9vZc73WNSErKVtxe2NqR34dUkFuMwzMTyqwgavzPiu1mtFmLACZhr7cMrWgRrqMULhPXuaSEwEHd7dKPg63LjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPdH3SaxBuUkQnsPZvbjM2gKu2BTVceNQo2Ud7GBrQrdCDRD5DMbW4eEBAFExGStRVQiCEmYXPJqtqs5d3TCy4B",
  "key1": "jHvfAV2JuCsNF7nW2VGMpCgrizLRXH53xsGsqN6XXFytQYL3TXF1rRkPgJ3jnBZTHKW8L1M9yGPHtpUAqLpfYHH",
  "key2": "2ZYEppmAZ1q6BBiZKv9F5ijneDBPvGaUa3mmzCSgtmQowT9TtsQy3A9CMknimEJWNJcjXN9BszYuAT4fAk2RT9iB",
  "key3": "3jzb7HQoC5YjCJs4GZJLLLoCKTvbpxWg8vYSGLKxen45Qc2wy7aLfLutwtjYLBvoXKmfVKmBBkq6q4zFJqAedhYg",
  "key4": "3nj9kRbKV3oRMrZV5zN5D4jz75KLL3WV4JqPFfbKdW7wZgu2vF6X8FyQdRWcUQLUx5aBiJnabmjowJyPHGpo1PTd",
  "key5": "3iakw4HCjnKU8C8h2NEzZzJ3ZaFXGMjpL3aMRKftkfiykPHW5rTcheng1WN2uyE9hBzicqPnxLXfBfvBSKZWTHNa",
  "key6": "535pCupcRNHi66vPuzHVzodwXEaw7U1HsQbD4Do9jiUSjxwx972Pmea2rQkmMhFPfAndidk4KiECX2qZjwhBnAth",
  "key7": "3UKM3DRaYdk742xfgjFfVXa9VhStBmV3Zq7626idadwt1xeGUFSgLsQywf4t37VKmZREa4ib6WLB2fQDHv1EN5Yv",
  "key8": "XaHiRdsA6NzWS3MLaCYPE3Si4sJjjprrBbCxcaAeBGZE7ZdfVZwNQ3yLriGBxqGJA4rhx9DSMfNDZ8Mb7rHgAkA",
  "key9": "5WcRmzhkZoywF7yoAHWUvdgcDrf9HNCRYm3K5FWWtx9UGB97EWEzuiwfhMwFtnvejdfLHMVqTfdEhWSrviKJn43y",
  "key10": "3BxT6AazK3VyfT54kavPK4ovJmk1zRhzVTtK32Leuv6221Nm9xk89BSUug5hvcHKALSW7YCx5a1P7rnzvsHkXhgf",
  "key11": "B88Z9EtBiX4u1dioA7U4CCLrEXKqHYE6xXSx9vcKUpMyr3ZvNikADLTXDqKzjw3qVPjenB6RMaHGSMoNY6F27Uw",
  "key12": "4vgtLMKpDS4V3BRSWPULqy9e6zFYjFoaCJFKzsTubxownGgXANKNi1x95ozLfScWLQxZWXPDFEcSJxZaaLScVUiH",
  "key13": "5EQJZFccXKMZfxNbCVK8LW2HcPoB8AfNvYjXpvfwUrzYcHmyXHw6F8Q12Dc6CHktj8r3dUgKPSPsLyt8u1JdP8ii",
  "key14": "255FuAem86CpQU5CjygF4RLhYxQXtYEcavpf2AravfNJTGoVWUtidccmXCfECb3yPBxcbikzQVzvH8m4jajrvxE8",
  "key15": "4T1yuuxs8ZZWUJdAsZQ1uQktijpQRgyJRoLFfGD6oKpnVmk9GQVvNmvjhuga1AEs2Wj3xicHgY8HbxWMA61Lsk2E",
  "key16": "57WE2q74xHa5ugeF9tPoydhx9XjCgAnDPeo9YUy6uEcXEHM8qPD5ssNyraFhzgp2JB9cceLWupEC2gnxMDr6TaYR",
  "key17": "4vn1oKSTSyeHeq1iHoQGrzzqYpdzXe64bybBrcVskzCoa1rLASjbMtiEbks94BBL2HDjUP7213k23YurQT43T6uQ",
  "key18": "4whKFG7VhNeuCRwX1fLA7ZcPuMDQdRMPr7kssG6FgNM6Zq8SxHWj5uRASHZ8BEVy8XYpUj21q1ixMrJpkXLD3xuw",
  "key19": "3Tn4TCYXJG2nB1QfNeunTNCQ7PmrUkWwZGrmuuH3xNvQLk3Ef2VYVcbPni1GCfnroMUgRXW255oC8iSmqkRSEDL5",
  "key20": "5ECWAAYjYsQRXsLfc7sgcfEHp4t9F2cG9bGpk48GGgZPFsoadT6iEnuDZ9EJoKujAZgHnUpcpCtSdSV1nthiBEY8",
  "key21": "4Km9cKm1WaPmMYxDHWFLwwXgDSSuagPyu8e2ZrBeX8ZDREoob2b7qo49umhqJZkXxCtVZMmKyY7SCWex2oz5o6yy",
  "key22": "5sHNHX53TZj5FYavqzp5xrmcUZNVbbP2gBjn1UryD7qrEdLMqffrP7pGn4VZGPvZXFduqWkkcJdjw9RrCw65K4zi",
  "key23": "5DxpGLwERqfJMvPsRdCL2KqWyFp8rbj5Bj3KCb2JBBdR4fFtpfLecT88oDZaw7kE7Y2qwDKQgbHJsXKrPesMNSBL",
  "key24": "qrGxCbvNgXTX2wbKt3ekRPtygPoD9AjRJ4yhH4cTTCsdpex6sdsPD5RRNrFJcEWVSSMAs7JgSDQ6cC4UCT7cHFw",
  "key25": "3owHvPkXhEsqSameox4e5VFkggtim72e7wURX3XQZUZVDQn8ziYFUqbKgv65TDzHF4sEYWC4x9Q6qu4nkTsPkeVc",
  "key26": "56aC3GwejvxeUUTSHXzubHMQRTmCWw16gYF7LUvBqoDVknT8Bu5ZtW26wknaewFXUH5WWYAqAi8W5JbQPjGck6EU",
  "key27": "65Ps7waH87ULG7jWKZJJMXva4R9vUNEAEBwtoHrZFVT1qyLCidKFXSdATuMTkHGmA8jwS27ZyRsquXuvwwFQeJ87",
  "key28": "35NgihsLQ69kFN1n6DQTejvYiezpgpXHgCNKNqQNqFFhYg2zh9RfZGZ6xp4G3FUPY7v2CspFc6va27pSAxy7Rg4f",
  "key29": "4cL88AYvdrSKRuwfVY9dQbe6XBHrKM76RJSWrYD5ZAw8shFX94qYPDwUSpTZtVJeNwEHGUuezwEjJCiBtrvqd5cF",
  "key30": "47KfEFTk2eDM4Mb8nJrngA5K89CkKz5i36HCzVo7vQn481AyytX9bdhBW4xLf7it884JGLb5wKVKzSxfAtyY7Wv7",
  "key31": "5gYz2YShgboca11inhmv9bcjkDcptPELB63G61myUQoYg82UFT3o13hLct5CCXfkCrVNd42bUfUR6miK9LDsHL68",
  "key32": "37QvYRheBfJrGR2VTLccAQkvqYx1CFrdFJ69MiXM2sENm4wnQWc49hBrKQRW3o7GaMBVtGoL7Vje6FdcR51w4Cym",
  "key33": "3jupu4q8gqTtTLfGJSSHFxGutNTtXB1dSjMp39212AYseAusrDH1P8TfVqEvjbAjFFmcLsVGxLDMwV1TuXMUSh5s",
  "key34": "3fLAVaaSybHjyjbnpr9TCLRrBNW9sjTDJSQUcoGkdZ8LNnudFhbnVJrRsCzBfyYLTu7v8jHMX37tAGvokEHTqWhG",
  "key35": "5DBku9CeyGNBVfSNgrVHUL7PMN8XjjHEABXER6yGPMvAwbRZgNdArhW8hwdevi1HjUBZfPAwbRQzjsJGJNMy2Jms",
  "key36": "3FXhBH2jLEUDdhEAKWDpw17bK4d3rZFNbneM3SoKTUGvvnBEgh19dea7Qi5aUXDDh18dLxkXLMRPbX84cwBinGjU",
  "key37": "4n5KVQBsbRkKYEjqGjwcUyyTvoQMLb8sroabEcQ25QcAKrAffDBfdMttXpQMwfjRuFhFAwn64wccMmG4AanDqNtr"
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
