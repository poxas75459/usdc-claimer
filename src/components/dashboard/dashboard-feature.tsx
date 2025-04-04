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
    "3RPmpMDzUhAa5QByBUqzVobdrdeSn4thf68pBZiekyxKK6V2rqaF2BZaKc1BVXzupgLG1h9ASg5QpDHtzLYEDsRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35kxKj2Rxpo9greWXAKtrtSdR5sSGyni9gCAWC41KyFAGRdUmLSQsQgxcN4CkjCyNNCXJH9xcprTXBQ8aVTEnAEJ",
  "key1": "2wh1hWXohmv5roPxQohDvqNWBtMVyUZ5MkaQRmzoixjrCZoiGHrCyyCoNZJDQXfjdUfpEoU971AkhgE64tomao8G",
  "key2": "AR9VpTHsG4EeLxtSrUXvRfGDADviXakMkh8Fn2uKt32T4yEojTdxp3w7iKmoWQPq8K2SiQQTsAgtDepfuNDfLgw",
  "key3": "5AtafXgwXXHEDgUTCh7H1tKadGjmruaxCPfHiUkm6qPkrw2i85MMhjPMwQdJZCV3vBrNGrvjmprnHdroyi4A3S6h",
  "key4": "hfX4oaYMS9Zkf6dS6iYx7pXWgmE5Dg978wyayrPgzkpPUZSLVqAXqaa8z7ttdf2NFvb9PBxvH6ocTED6WausHYj",
  "key5": "PdQK5NivfVY5vd1XEB2zmM7NXRdQeySSc2oULSe6cfmcxXm9JTcDcMwbJFKq61b1advo8Tz2C8QELWw4nrmKSHw",
  "key6": "4DnnaQKTMUxkTMoufGsuVPtQduwUSCPkhu9LR94tSss7VVKbxKvTMAN6ceQYGowHc8AqqRx9rTu41XMCWyJxDVWC",
  "key7": "3vcwRfeMxMyRQdJXLVHioC9wo8UFTFCqFbgaB5QusPECVSZfc18ZGcBDyEH8VsBjWkd8gtW1TeG45urxGPaWsNz7",
  "key8": "66MCadSBxvLXRDVsNC8sAxysVHuKZjbWdfLycCQRzAPVENdrSJUCM1tkHWb89KjARPA5UeeFho7xJZ1LHRpN49ix",
  "key9": "5cj5GXe7mjmVoh7FLkUw6qXbVKwyiX1GJ86vHxRdAGDCRgwzqqsRbKmmwTfdWfvNiNtsRCWredyHegHDwqouXexx",
  "key10": "a4SJk4ZPBfqtprBNFHdfCc6oTkqsvGHBtvG5uLucEx9NmgKYnPqggyphjZuwiR5uiFrS5bcNBtkDHWiy9u6nAYm",
  "key11": "4mpZD56AfyNDHSPQxFpeqfxttYfDvKyUKCU6wraZGpFQWrwo6bxzVpSqNnSrpVVtnzDq2WFv3uvHk2TB5yPpmAKj",
  "key12": "kr6TopdQfyQ7Q1M6Sf15SNz8b2R53Yz8KTJpZeXsSiGhk5ACyoR9axihHuUvvUX8cbg892jacV3NPuXKhe9Es5e",
  "key13": "UsTCGJaTPQ1ToUrXxzPqiHKCJniAkmhU6ZXwRZ8jrhmn5NdtSefmSEArYPBSnvGTxSPb3GU8fLwXc4HTvH81Ndg",
  "key14": "4yt11u5VdWWv5kuA9KfxYdcPSLicDCcLqAyoYqBhx9JptxtPK9tCPAABY3PmViPDjEG1Y5aB24FnvDgFquMfJDey",
  "key15": "3ocgUiiTykpYJ36wN8hmGoUyTwEWnQ7B5PRwuXnKcQTDB9t7vQbBjxgMb7UkSPYqTJdrWt9kjS9rhFYBEiQeHgXM",
  "key16": "3z89u3HjGWpPNFXMJdpYFzsoW3brZhmJzbcRkj6bmq4aHm4ghKwUnYyX9suRonkc1DZGgbSHv6hBAXMqGPAgjgk4",
  "key17": "eZdv8wMFMMk3VMQGLP6jwBZFggaFmBxpK7XZ1JrYuF3n5tz1QrPQrmZYP5XD2tYwjHYGaGKdQtwrEkoPDukzyLd",
  "key18": "9K79uw61SvNshxY5Jz4pWUAS86YKZoTqpYTRXq9RQ9yNDnzsLe1fTPnorXQ7C5VMm7y5SuwHBBdc9C8tbTFKkYY",
  "key19": "5cvnPRDhzcRbkWsEcUZZex9BckeCLcocBs7d54jBu5mGzH7jJZEtC4849mJ8Esk7pdKSWzrd9jZtp9M8bLvxmhDa",
  "key20": "3mgmXxb67HPHon5fepBdkAkeKwbLdrYrVxABtACZ379uV6Eh6LkC9G9B4iQjgn5hm6tqrGxDGKdDt5yMHf4cQWwN",
  "key21": "4xqk5ETo7H6eSW29Y4PgxFWuD7MwSkRo7pJuNyMHXvZf92XYTKcsRAMZwqaH3ezZTAhBxHrNN6orZQmjxdSABywv",
  "key22": "QxE2THRjaqdLFFhgzTiYc2GFTFPi2ZQFTg4oYGt3Hp3qYq2BVYmrtJXGqocZYrMA6q5epNgZGM7dHWnKVAbsqxd",
  "key23": "5MTMVMjzSCPuVdwrS4SLTdDRX5c16XTkrNt8yypQSLNpaBWN3g5oW9jknbpmSjhcnD5WwoRHPSzVQDC4k3zPPBgt",
  "key24": "4FQRghzUQGWS7jWhjRBVBhKok5eZQcwiH8xDLUaJdn2vD5kqUetWBYbuTLNwHfYDk5Qm4NJxovcU44LXMHF9Zzhi",
  "key25": "5jDpd3Qg6ej9AqCb5mHhwi68ay222g1pPHzELnKgbUPn3bEnUYCPkcFBauM5ThaKqBht47MB6Gv61tEK9a5Veq23",
  "key26": "3ATWQwCQdWRT6axkWCGt3JHBSzMCCdQqgikqLkKnyTkU2FxekDurZkoohjwRVtBQx96CeuuGfFcGhKp6V2g6U9p8",
  "key27": "4c16KDPUEuL1pGfV3osxAQ1JDx3pJ5NDGgBTi4Rtg1ZaNCuosj8mtdamGUEgqC5FuSZdj69k2BE6V8t2ujuZoMrH",
  "key28": "5VAhS9HdX3TDzj3x369Yw2pLR3fLnFVZL6LrLizRfGM7YbQtp9DAfYS3pX4bjQHBCTyzBoi5FUgJ6F7X5q789LAa",
  "key29": "LxTP151UL25zw2uTqACTUTpg1HXR5T5Ncdn3XGqLcyxTtrJf5mJWzodbKpphaN8uceiVgGUYjrFnE7VHkC5WzoA",
  "key30": "46bf91PDxin68agJn2AqBwzynj1WRGf2HV9Rib7YcTw9jnKSnc2f43My8ovSWcXFhcmLf5WReW7zXTqfS1MxENmc",
  "key31": "416mECfZdYKc6mUcXArcPPGG2fGeogDkSCcBcmMjGSx7h9rTTMNfK3QbfJ4kELPuJzLg4K66zw4iPC9KbJpsrRuL",
  "key32": "3nNmc78pS9iZSaJGQ7rGMRuMrdWFN3QMaV78YXpHvHPyHCByJdxa7nK791wCAVFtLHLncsVGMgTzt3BH69PSUBGR",
  "key33": "5wGUpLh7Mhh24ZH5Xywv8cN9ZBNJiwSizmRjL9nkpgkjurewSiV7piVR91WR6EoobdkSR1TZMtMP1bMtXDFZuDi3",
  "key34": "LdhXG2f3viXvZyxv9LC19gTZmrYDJpAd5wKeuXkPjrM4JzmZ8qPvgrjKgyFWAWxp6BDQB7QcnU5kfAhQ7uy8Uvq",
  "key35": "3fnnrs1ViesMa5vwEyu3iqq8pzJWdGvy3RJSymQNWJDvrF9agJq68Qhj76uFDK1bDB7usbizbmEjWyhAscHhn12v",
  "key36": "21txbgWR4kXWtvf25kv5gd8SugkBxcmYVyCSFTzgAJjq8jzvsQeEBmz1aZsWGJQSwFDeDaGFZWALLY8r7kvk7vLH",
  "key37": "3MqiSFGC9NVVuByMiMe7uGXkoGzPgeGEYtySSXzebMXmuAJmPSDudErRodFL244DtzmvMN2Rmzsnefqc5MGnbt18",
  "key38": "2C8T4SbWjRcj8YF6g7S6gGJNCToFrmv5Q9hZvfJ3dBkMpSn91ktaeftyc63vZcnadNeUrL5auVFQTsVm2bnhPdCS",
  "key39": "2zWFRkVDLrvcpVKrNExj61oKmnDpc541E7YeAuzNVWhFELWpkXzMpyahrqT59iyhiCVmwoqKtYSX2sPFp3AN6sCJ",
  "key40": "66ood4qjEYoid1UZJbAbN4x6Sko56LckqsccHtg7TsZQxmaJ3EDkXPLZfjNScgR34hRN9sqy2ac9afcBdMM4ofUE",
  "key41": "p6rNHfVuETWcq65zcX1JUzafq1hqvkBnVmGVi5PaWqMVU1Pgo9L1nLSXQVRcudVvKNgm7ayRsT57YAAXfmt5NP8",
  "key42": "5eiLaBcLpoGmvHQ9WDQb6KYsanAndFvKyeVsaHbGnTFCc4Eh4HAqiekyaCQepwCUQWH7jPkHaYzybGoApD1hdvkv",
  "key43": "KX75LDTA8yjEKkeZJZnKNvg4Aii5b9kFbqXNmDXeEa5w75bdxfRqVBHJn1Np2e6zTgdA2gEfQsKgjZENPmsHEz4",
  "key44": "4AzgpYKDPF9VuHvFu27Fcd9jFzwnCi15JN46nvSath7pimxvXU8hBFoi6yLAUWk2bhj9ikwwoPnA9dBhzrMEYgTo",
  "key45": "52gzmz7MnyRP3jhFDaJvFwGGx2B9wSm3aMwTGC58AT4edwLoaabGbNTetqw7J9HVup25L6hPBUitdBuyPZN9vLDd",
  "key46": "5Y5o4Ato2YQgyk6afNw4zAt4bffFkoaKzA5VMREiRPtnye4ioak9R1AD3gbtexTj3ig6vhoHumouBgKpELZe5BGM"
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
