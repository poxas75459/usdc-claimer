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
    "5rDmnGQDJFNZWpcmhq7xgQrMpKozmpGJPE1E4rEoyxLSkEPR4SBytSZYaZLfc33ABGcJfLrJtBNzzM2MqLv9DSKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyNyP9nyewMHXCpNvcCHaVZQXsUqXBKSvZPXe4t6ySiNp6GngzH2utD9ceLNzcErCME2um7wRL7Ff3f7HpPv1K4",
  "key1": "2VTParbA5cKMEGAHtQYVsVyUw1dz13YhwActHpjb35TCDMWwWaJJRf5dEJMhA7aEXbwrkiU4SSeDTxjVbL6t8HFR",
  "key2": "3Rad5NuSxH6qQzydoyTkKuwANXid9EGw46T8tnkWqJJNhNwjCVqPULNh8EFyAhX7UF8NbRWSLHhgMNPYkyChDXqK",
  "key3": "3gbgwMsrieXz92uU2wefsH3EvfQvK88eyuQqSFUocvR2mxzURvh3RicsP5Fr4DfXfS2qZXjfmb9FQeGy2nutzZLn",
  "key4": "2fPfpm229Pzr4QTe5T5z4y2EYZdU1DCB8wj4AACfF1cFsADzZzvBgTwCmNTDi8PLS1DDFgPdDL6QgD6VqaNgQKB2",
  "key5": "3PAHHfY6fud5QGcC2BaLCDesw2mZpD3rHKhhPHJWcGupMW6tmzD7gPaaigoGg31sMwtyJXAFhUYp65FZyoa8p1gQ",
  "key6": "vfVEYBrQ5e8a7FDhEnayJtMCiCTPBuzJzY3FMZKM9todZnbcWF9dMbGDKhbdQassQTG82hjassutrGWY88rK69e",
  "key7": "deFDpoxCfqbsJBfHmyHTLWF4TSS39kJBgd2PwigmzYAdsQ5YCHEeocCmNZ1bzX7iizVPXMa8FNmtiotaeX8Ft4T",
  "key8": "3wkT7anakM2xoyR4vAQitKmaBnkPuYcYKUC6Z4ecRDW1wchaj6iCT7tBkoFr7gRh3ftC6j2GRrcSmLruWPdzwBE4",
  "key9": "4T32qutrnPTg4Tq9Gutq1hg7GgLwan6AREGmwFqTXm7htnZ6ewGzHNGgmCQN6jLjqx4GuvdvEhAamZmpEracaoWz",
  "key10": "pUvjLALdMFSejb2HrAPPK9fJ88X4XcmQbeum5CDTuJGBCLCCjhcHkMMFzrM9fipvtuoyscQY3RrfLrPcqDaVmrV",
  "key11": "5tmhoR7r18ZnyXSEQExkN4zS57sHKx65VUqWJ2EtVftyaePvEU6UaYmuJVWjZAFsgwka6TjX8mjzxganQqaQokJK",
  "key12": "yE1iHFn1bQ81BR39TAJWUNsEBJBSMx5kTaCCAo8bPeTaxB7yFrh9vZj6sLCW8nz3nhxqghBggCxQckxP2hUstiT",
  "key13": "5KrRgeytovqpyFEvG8CMK4oK8TSPdnScPmfKgPkNEisqHE66je2t8C2PctKRb64qkK1SEdxqDTTfUwu8XoUpCyKC",
  "key14": "4xjTW6bhzNfiJ3uTSbJvcCFL1ws5MSYn8BQ6SVrKZb3wTX6UX3thb1sQy9hxPWrJ9kuThq8yhmia8E4Ff9Z9Bk2g",
  "key15": "3LgkjzgCGbTHJ73uEwxyihLRkM7VpeB4VijmevCiJJE3WEHuUypu5Mz7RKeV7F2bMZoarMf89oLkfQT4dkXrWZtd",
  "key16": "5djkfVvpfTVexyZS1kZ4s9vs8hRXw6XMbtA3oEvzxRH5xpWCUWE1kQQeXCabHNVw39ooryzFzadaxLKdG1axdSdN",
  "key17": "Yf9w7X9GNf7TQfxvNmfykoe2EcoHhatGPhMGqiDgxs34krj9AJeVN7bmTUi4v3zLpE3fFi76JYBiuGKQPYFe6X5",
  "key18": "2assLctfPWCwk793jjQV81BSUMKrpJuD8cZiaGwvx7rrvkwpSaptTrmiQQMjnRXhTfc4GnjLeT7Fu9DErYwNRdh",
  "key19": "TjM8Wa9HtzVbjr8Es6xPhuPE9vTKrPPWT7zLrSeF5ZX3FL3qYmVG9re4BUkWcMUgv6F1WacAg4vntEn2DWTxn28",
  "key20": "2x3mFmQ2sCx44TjDP5yQUZurr2hrptGqFfyoMmjoGNjEbX7m6bkCwfGyBfvZBxNkphD1Pv31AyxQ3t7dTLH4yhMo",
  "key21": "2XcmHPc2LPtho6WQQdBc4GUqfNowvFLFacWaF8wNKLLHtDaTKPSrTTP1pcycihxA2ZodRBdEEHR7xA1NxvsAR25Q",
  "key22": "43ozs1LtSPh9hRnT77KEXpPb2nPZ4QSpaRJaSnEdxgpx4ekPG5tXid6SCx7p5H2U2zYDqYx4LHzkvyGRhxgAxsXZ",
  "key23": "iksLMAstpecBX5iVbQiqMPJiDwqM3RQwhCqy3xZXMJ48c9wBfw8FyTUjAHKbWhoeudu5cYFKXHUWeDBZ7QMbsGw",
  "key24": "taU4m4a3AjiUqEPHG2oUThJUwG5emJCiNundi5wb2dgvvZkCf2sDoTLa4e7kPZpYpuuWbpYwUmcKfg5bbfK5K5p",
  "key25": "5bL6KuidnY3fzc5xEficxE1tAbmcSCNmYtSpgV1RDxbDqmWLBnHVyr5iQdXtPJhSmwRtyfNTkMWUQfiFjdoyKJkD",
  "key26": "2gBtACD5CHrAkyJe4aATqPUNfZoomBbRxccWakinWyGYhifCpHNrjdVPNAqACvs5dFuwUCvqZwyvjWM7RFwL5XaQ",
  "key27": "29izVheubq4jQmNhRiKNsqrY6NEQ2XLVfQbLxLUkBN8DpzNSLqnZTcUom816RDGCF3Tub6La1V8hJAzwBHt1Qs8m",
  "key28": "2R9eGWKRsMyskfNpF81uXaDAdevPgivJm2SbUFUptLjt8Dp45PqJwiwHJs2hZkfY1rfh1xp6z8Dr47Tqj8pa2fFe",
  "key29": "4gmLboJFkm3yqPNaUX1wvEjZwk582QoTptxFbpQ7pQRJrFnntaw5zhZtiCH1JjAKcP6MKqTQqF4pFxAf4F9go2u1",
  "key30": "2kQxDUSb2qXQ4ekRgX6WhbdbwTHhNKbWnswGqTNUE1GdyfnLWdwhxHMLhdbwqa7mjhYZeWqGVpzrF51xHaQZkQBZ",
  "key31": "VKv6pxk64HzmcwD2Y1nbovx6wQN73LeW8ZaLn4UWNsqgpaKcDMnB5RqnjRqyqcDHDbW7S3x9sUnrsUstqoGrcZm",
  "key32": "4yRS9VAeA9kru9pRoDVg745qJCwo1RaMcZ8b5oLARXxEnvJLrVSgTMcc1hhcy72CMXjKKPFiJGqhTSNA3RYdcZDg",
  "key33": "2WenjEWDcTryLGWnD8VKuCRPUndBQuMT61p7bJk4GDjrypy9QySrhhSnf5Cs3e2q5ktd3VHnjUqesCyRFjUxHNmr",
  "key34": "9siDPirqCcsLd4qLCyVNi29bYnDwQCMNKtsyBzvTv2gaBRRaPo4XbYeK4xfXmJFEWeDRCBJheoZY6krfniNCREp",
  "key35": "4MycMFsak4Q7tazKcdDhnZDnTRKRJ6gybU2YcopSuWVaRK8KmWXoHRHXQxjUmDBhEMASBf9XGJo5MLrDepa3ixQe",
  "key36": "4PHGSK2W4bcE9DWsn7WLzfVrSSwH7u1Yy74DxJ629cPyHnxJBVR1BEgj22UXRabWMSF9GkhysEwNdnyfGPRPB4Xf",
  "key37": "4tspvybaxCEF7CmjhLJkcQrH1J49oAR6WYzL51ynqLnFzafPK6xcmMiLVywFBuvXpkcwXPtiXskmYq8xcGXFqBT3",
  "key38": "4o3GKxn7QeUPXBewANYtQYLFJSrgmE3DsWt47LUbMRLLap6WZRArnZGaFHs1jMoC5eYiiC3UM3vPrgaJWjJtRhr",
  "key39": "2avr3AvYazePaQQ1DnUKKYUUMFSfbR6fGmrPMsD3bsvj9WnBQyCWt4PSHD1zLjSDQ5XRhKLNwbqXe3iUwDoBz7Gf",
  "key40": "36khcK7vifiqz5ZDYt9tE65FC3Mk7MdfW64xcNAciDtTqFhtnJBPBofzNzbsjD5HvEuaCY3QQmJgFuWXhdGZBxnL",
  "key41": "5Lvy1tqC3Fd8jmujgtccCAmyVTkVQ7DU1B4y4oDi6NaZTNWAQ9dLr456ZkdNDh8eAUQC7Djhd8y5NgqWHMUUPBdB",
  "key42": "asE1UF9G9K9DJpFuMEQaq23evEaqGjTQE6W764YYG9QjDowJM166GfGBM7rPEym3gRfcAddkNn1fBiYA5TkHEW4",
  "key43": "2UfaWpQygB4BtxbqKc72b4Y9xmqJfXsjMacKvTF9b9gAw5hV5JKEpSqQtHn9QDRorwefJ3TiNySwqZ66eDFVZaNc",
  "key44": "2rQqUp3wJgT85Hx6LmSAe36EdYcZ96PwvWZiW7CkpJooyCojT4CZWPRrq9RFu1KFnbDY5kJZokajTqon4sh1acXz",
  "key45": "4MkTvFKeoMoTcXJfzg3VNvQEPFSDmwkTcaTKFosc8hUSnaYtnx4vbHHhDkgiuZw6FxWEwbK4QkPbU6VibkJqazna",
  "key46": "5tB1PYN76YUSVcEw2dqk5rVbs37bhTyc4anAd29kQykFrrB4G5JFJfg9CkSCmsrFnWCLzLvxK2pJmjHKCViC7gCS",
  "key47": "bfGbMPhDU1gTuB8ippu8m3JA8ZDshAY3VGjwFHaZk8pt9FDEsYr5XghuUr9puQVdPAEtc6p8kZnRVvbUHUk6LP2",
  "key48": "2MQhGVzpsU8Mxugpx5NiSWehxacopAEWsn395PGhVwGx7Ub39Fop1kpPqzRcmPTvodpfeaH4LPjssdZqa9BjnV3B"
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
