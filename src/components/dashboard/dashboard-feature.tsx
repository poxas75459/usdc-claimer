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
    "3P29Dv24TNtCfAmPSq62F8FrYTHGvnBNYoMBRrcgBguXqEDgzoDrA8umNAJSg18KEjXUKVxkPw7kPHEynetSQxGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fheu8VQXu1pJoK4ahtT6TB7iHTdjFRcr4FTk6iNWVHrFCz4o5KMJWDECFiAfgkpwqwLCHe26SZEWtn3GDYKj6uj",
  "key1": "2RY2h7ThLuxYrFsvb7sTSjU2baSYBX4xPspmwJVXzaY1gv9XUZjcuYaSLEzP3WkSHyPe9LdJMjL33pzSGC7DktTE",
  "key2": "3dXKwCJnSqVTPevKxTsXLbuMX5pnrQp6f7tJ3DL2SrPRzBrbRknWSsRKSYWcmpAoJ4xZa5PTV2rivzywWXZDpd1c",
  "key3": "5aZpW2ZZhJjMPFDp8A7Vdf8YTWqMiYX5Lr7LbncEFuYxYEy9CbdhGBewTXpwuLn1oDTMhibKzxEkLduzeyt6ZY3a",
  "key4": "4mv334BJsbJGhfAKUMFLerKTg9399Dt6QaTj7Z1bySicmaTmrJ65hC3Z8VVvVvxxDkus9hgwRNtApgHBidp4rCt5",
  "key5": "3vtHaosD6UvNhv7qpEsTKmqweHAqbiZExo19svAore31SuX8dfEskCoDi386WamELBxso2x7v9d8QNjCzdDPn48v",
  "key6": "DVsqVFpLvuLgpVfS1TTJPRKGNKKSKjBVee2GPeoyC2VREHsg7MU4mxE1WQV3UXekwi5fQzbCbs99zM1svNH9Lyv",
  "key7": "3o1ZXY1xtnBiQXfXUeEtU4e2wBJYBVrgufv135TqwnFLGS21axUcoT7czTptkCdsn6ajCX9UqjdyUaQ49R6fhbhF",
  "key8": "312erfZjUsx8AwXBoW9FPHmRUQKj8BauayPfS4LMfuhCZvkL1HgMHanofCxvDE4zo4ZqGuv8HxBdoeF8pwGTqjEp",
  "key9": "anW4XSBnkxCc3tniwuxNJU5kvdXhiAvhUSxz6k9NjL9ujFD93DrG7vCMyyMfPosseS27Uf2rMkpzpHYQnNJKwGN",
  "key10": "5Gi9ZXYwCKpfr6hJ6Y2hsHuo3Hie12LNyKzmPCE6AxCLDDyoT1AW8943Y5ghJuyLc4EnAZccnXjnwwayhiwStVGm",
  "key11": "3XxgLjiY3eJQKXww3gDwk1THgbc6teMuLVpSzHBqSfnrxrtGLLREAFNz1Zp4hggfdsyA6cFfYQk5ZEiBMEZANrms",
  "key12": "2WwgeJXFbbUj2VH5ZFxPZmv6NjCbX9mj66NvcQoAqRb6ErihcS3BQ4WnhABZokaQZmKyFg7ZsvD3rxCf55S1CnFE",
  "key13": "4rWsnfxkyVXpUYaeNGyRPNZKaYPZRQ7aHDDjN7NwQkvqyVigfsYdWBDpGQY8BhZVRM57G8njk3UhpPV274zUEtrv",
  "key14": "2ta11x4QvBxkyb9uNZGmErdhodfgRwYgX5FNnC6QHxuSz1uf2rJAyyyiqv74agPJe6cWMKiA7YgvyFavoURQvLVd",
  "key15": "3fcNcJ6dRAT9UMX2z4SaJ2VM6EPG24vpBhaFfjT4zU4CS9szWfGERina7MVBzCrXsZJD49QJRJ1JXvnjMDWa9swo",
  "key16": "GS5zotZmG8brpQsAkCbx5wWFois8DtcCpebjTZC3MMCcXm4A6tDkmGQmGnqQggchohj4cmZa2BEHBRtcTkEKcuu",
  "key17": "5MK1CFC7PoMpXd81oGVBTQfh1HTRYc5PqjcyVsFt6StFPkakyv44QWPrh5z3Xdwd1eQ8G5DxZDinLTvMGNPtFL8X",
  "key18": "3J7mfS1bbcmwyzPHR1LGxfGku3LKnHvs3MwwapZQ2ZhJCLKewL1tzo3SoRZtAc8W9iMZ18EScvoxa72TyB3fRJRC",
  "key19": "3rjMm9FencugBXVLyDpLrmJ2Jm6vgbhad9pnyvE8NLtNHxYhFrjMcE86yX9QTuuMtcTddvRVsCRbkCAmopDK9gma",
  "key20": "5uk29QrnajSMBqyQDJ8sjgmacBsTWCCBbdvoSB32FH5G6HR5pMR46ub1EtNH8sdTnYQdTaxpBdV54J5L7cAd9XWj",
  "key21": "8exqKxfMMJvX4wzbB6z372FWyKqdttiy5pXLwR6MPC39W536kTHZDNmj5oBCrr1sFkgax8EXUnc8cYrQH5WPK7o",
  "key22": "5LQEibEG2vLaYLdhZ7n9oiA2kxJop85qipP2oJn4AHEAUmJrfNqHtesmCEyUR2FvpqGREPaobUcKmc1jWux7cDqi",
  "key23": "4fkq3etwocgRiSFqATe3tZrvDQLLubNZUgWM8krU4317CbKyGvmBvGi4iD5pUwvMDknWAkMzhcYbqbT4EhxbggHG",
  "key24": "4AofKi43yojUpEUQEQCUcwMgyxs23RkegeRDhQy32eJFAamU5umj8TKhs5j6dnxkhYqNsqGaLw4sJ3F6pdNDHAL3",
  "key25": "5Adckhg4tVpy4sppPcgsYwNMpwDHCLVEXMuQiuqcExCsjGjLgnF73HDBnQug8CAjpN5aga82FWcJMTGz26AmrXJA",
  "key26": "26Hc6aZLwysDx1vn3MqRsT2LU5sF7BpfWQTrHNtCicqTKiN8BGQBCZ84446zMAkrG2ckpi5TmXSVHGNBWBsyS78W",
  "key27": "34MEGRtSMtxM2ujsz2NoSRwW3moWb9MQGcYWDLySAXw2NSczNCn5a9ir3d8ZTYLFXNEp994XHqzNcgZ166Xmrybh",
  "key28": "5xxhAqQNSezB1zens7MenE879MB92RxPTr3sMDySvG698H7ndxbDm4uLTG59YqzueqpT1aE6wYfhmFLWnaysBvVS",
  "key29": "4oAqoEWH9LcaR2kLXFjKpFMSyork2zgJRfUNsK8EhSj2hyYK8kKg1Ha5HqvpXa4zPcVR7pivW8Wbkuwkr46oWbq6",
  "key30": "3QreoAcoaL4PAQH5qSKW92xLEcBByMujWvuta4hEYK1D5CkmzCjj6tLqH4UrvZiQzToWsKy8zRCxMUWrhWToPJjn",
  "key31": "3roEaimmzp3WYuhznnqAAoaheqKj4Tf5MEiqDmdDpayDhZXowWN4kgnt1XHRmDB2MqZnCWjhbX7XJF8GGikh6E8P",
  "key32": "5RoBPKdDyN22fLMJ5cBW7yU1HM8uGJqdYeBJCEumhWYTDGsVH12rtyHDNcbGGWJCFT6dkdrREQ1sMtU9DtpzPpBm",
  "key33": "57yhRLFGGNQxCLBGUEvC8EChUqAMH4hgHmJCeHyYQMfp33a4csLCCsw79oNubnyFhg8FHXDogAdHFScat9z4BLej",
  "key34": "4eJt7XJBcn5rdD5i9ABD4hQfjJhnEL3dAV7ms6ciwcnqJoRLR9ZMhRvknTeehayGvPuKp43HcqH4usdwCyb4ZmhT",
  "key35": "2zrqm9Y5eQDb3Ckh4STAvwMsqcSQCeCWBXzoYHo9Kh64ipUDEAVxfoD88jvHXmFw2o6QGygZKyfWFQzb5h4YFPLQ",
  "key36": "4g15GgR1T7VtDvoDcdzfqC9wR61WooJwZua6arhyFe6r5X8umtVNoR1t1LkLe8jopqJH2LokuxyWVR9WGLwCiWL8",
  "key37": "4bumcbzj5J5eR4pU2QckDvbEqU84pMtPKckpVkbeVXFUrms8zNmzXESqdXWsuvMwCLbNHdPD1EeZVxmdc85AX8Gb",
  "key38": "tmkuBtLEL1pz4ppvTLSvgDp6Vc4jaaZaht64Y9TxTZ6KJzb9G7f36K74E8bCdUXHQftN4z4J2k9mw5AtihvyZZ2",
  "key39": "GMK2CD4GZnSZAbA8zJur5FvGjVZp4ec9tfJhGzbfNsQCE5ZgmsE46ydhiyazsZM9PXkNmEBWp8qs3HbRdyzGEW2",
  "key40": "3Rn3UwEaA8cWegoNr5QgmKYxin681cmEw1QREh1d8SEaCyb8BJQyT33VSvWvBxY6anNz8kbkh3HErHdAnUvMkRFN",
  "key41": "3g37CQ3N19KEF8z7evbg2Bs3xLrBXBpNEABxuhCACbQoQzxpW4xBztoKTj6YHXSYaabwM71kxKq8bCDPuAS61sYU"
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
