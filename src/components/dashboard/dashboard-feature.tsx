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
    "4CZtt71Aw4LNKZzRJv6XZosEA2CfnxXcUfAxbcXfueuNYYvG3ZTgohfsKzPfmvmimqg9Zr67iMRXrrKXfnH2RFkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gj6pLqir64dzXhbaTk9E3vuJy94XnRtDFfF4syoN4XnwrDxxL5NRWK5bXN9ZEpfdpYgu3XhVs88bP3zt5tgBVCH",
  "key1": "zreEedJYpRjQERkU4UxNaWsAeCzyo9XkZoHaRKCDHCkmmUBfWMR5tLzPR7oLFHPHqoFCauMmjBPtcp7NYkN8Q7L",
  "key2": "3xfmjkiTg7zwpw3EACQv1TZh9zxziMfA7gk6DMSRNbauQTjNqMnJgUx6GaR4jWCB63KkP4UF8npL7T2jJGhAHECP",
  "key3": "rJRyKoczXAM8JhfsJUnt64H518yXsfEv3XTYbLoBB45iTrJzBj23HcA735GjfbbhubRafGif3DiK44NLJaiZbgQ",
  "key4": "F627JFrj1BryBokXsjYqBN6duSCom1DWdhTG3vGnFpR6uW4YHj7WmSUxyyS9FLWnS8Y7HfhC8n3L7Re7aCkZcME",
  "key5": "3cGX1mC9gxDTtu3uRpYV1t5ZFv9hZ7BBenFQefXJNKjvB81cHCMb1Z9eVhveW3k79PH8bhnrtHmP87GDXsQKa2hK",
  "key6": "Hx44rZv7RhTKq2QGLP3ygZVzqiQJ5NGK3mFLEeqXJF86bW68YkKRfefx1V4KoJz7uLvjGmM9SDLoDiRFCPwr5tb",
  "key7": "4QcFoG8J1HDx9n7NswSsG8dedidXV4GaWBK5tB6eue6SNGphdWtMxmJFU6UxrrJQX9U9BmAwbJszANXCHQqkRmk8",
  "key8": "66SYGk9bnXE1wxEzF4bQHg863re63fDyqGGEJNi5RVDmtWkM6GX5J7YZSyY5CxPDMBwfQ8m2wnNsNBSMsMV5SePM",
  "key9": "35BBU9kLXU24aM7Wt3W88S3rBZtRjCuEJs2iAUsj2QAq7AHtrv9gL51Wr7yrVy4rSZ26Z8zXJX4FmQ2rxGt43jya",
  "key10": "3CSaiHKpnwxtLmvFhjB4VfEKNzQLuPk8z2ywhqkMFX4MKUfPKMXGByVMxke16DniV49GsKfTuPBSqCSwiFRHMMLN",
  "key11": "3YvRYohTFU5T8y33SGZAVjbUJWybM4umXNanrepebxti3EnJqZFmWCa5VTA23iyPXWJwBkyEfQynZLCxhhTyfYoR",
  "key12": "wAaSbjDDrFRD8rDgrgoJQiVYNzfgLn6erQfmdjNLtpUHeci5AxvdgCRWBJV1ySAxGH293egtgaKVJqGioiAxUkm",
  "key13": "5kYu3uwNcqZu8ubxheoqpcGCAapHsAgq2rHTgZkBCcBXhvGUscgujpyAXzZFntaEpXkVAYC5K6GPcC6SsMG7n7Fd",
  "key14": "4cRZvh3P9EmS4bPUf1iSazLw5MTxY3o41nepw46FZX2kAHP7dQUAQxFsNt3ZyyrudEjJEM5Bzaot9fvbJBvQYooU",
  "key15": "2jHspwfWQoMG5STbRPLDKjVEQu8wKCqPcjSZJvvnTAXsUvaUSb5PoAuXkngtSaUuRNbHfutisqVLY9YQN69ymDwE",
  "key16": "4s8r1iL1grpLfv4oF3XRPkP7Jcp51cModKyeGWbBWpgMGCj3XQKo8NjiV7jWB8n4299ufCtUXEta4L25qWqACgCs",
  "key17": "4pQPD4xCqoiBpwNXt6ESTrzENn7d6ysstJb3ZdqckM9Q1zXKpJGtzpbnjc4R8igBs64XoqXNogfL6ZpqMFbRBfe7",
  "key18": "32rxensdWgKra6ZAdU1MU51nzZ68XpowbNuF3wajQUKc4EACD9GM4v8LHnx86Gj2qg3uju2kzctXAnTSdrPhW8Qp",
  "key19": "Lnpx1tnGDsXEHt4iJp1EBCa6KSBDWexXnUES65MNfLKUSURFBFyBu5ofNcH8mKzU4JKceRZS4oJCom7NE8PULxe",
  "key20": "3Tboi2Pd2MKSVpN3NmXnZajX6Pr5qbQjwzJdjo7DyXe76pEmsAkR5QvrkPUDfWsX3jB83t7CN4J7kHrvV6CQ5MCm",
  "key21": "4TPVFzojzsXZotRBn2iUc2shGcd6ddMtQMEmENGQrxVmGZigCdjSqDfp13FihPfab58fM89zU6AsSzubhQCF6Jdb",
  "key22": "2Lh7kFW1sVHR3UckSdrh8E7FjbL1389RFV4HsrS9VSBkTfSUF2uUkrLZP1aYpFPUTtJNAcrKyghDWV6uup2DZUSS",
  "key23": "2FyQpTjP8qCA2wb4q2vYfYYKDnTzco6m4up7MeFsPs18YL6jpSCVz2JuweTYb2aMfyA3fSGKobc63XU6pRcRiPMM",
  "key24": "8tPSvDTFaLHn5rnn1JLda6XPQFDHV14jxxpnwUNNsvgWmsyN8mC9norDkqTM5vzpwAk1MYkYPrbDsyaNixiFkoi",
  "key25": "375bJb2XAY3X454ETQ5j1UbfxiKDv6sq264LoYoJdV8LCjJvYhkdsfjZGybh6jtX6q8F4EtJo9ucX2AvsKn7ShWx",
  "key26": "3dzfEkpvdjdBzcYSFsDxBFDEdFr8yfysPBmUtr5LGaT8yxHmMLcnWXaCdAGDPx4sx2aZBTJA4et1NmzyAzDee5Dx",
  "key27": "37d6qTWiqdGVHZGhLbJ814Um5KSj64FpHmPEHHKp1LrpZ8TSJBjyPcd3mmzAEpB7X7vDAB4aQ3nkKZ2gVfKq8KYE",
  "key28": "5eP3qjcHDrukzaT96ZVqVJnD5uqLZ7q1iSqGfgP3KpR5DMvYAS7mfzMFfonvr39pMs75FrHXJvg2BFTTB6zQCuLZ",
  "key29": "3k6dSCxn8eiMXgZZUyNtHTPpQuMFZkauKmgBPRsdFjzBqFfduyNgKPSN4Q4NF5qsKbVzuqqv5crP8ChVdZidfzMX",
  "key30": "5scHY3cBNxTY1BoM4MS24bZbthY31bc1PzuFc42BHMngT2fkLncvAGYicTrWpzrRq1Rc7vcGoa8XXYv5rMwFgEfj",
  "key31": "3437EdSKTpHN7tar4iVBWpttvYwVVdHakkfLMmgbhtNUjRxPqF6aKwpmmbATviK4F5JAbEnfnj86s4zAjmXhr794",
  "key32": "9iCZxHUMhNF2Nh2iU31q5ts4aAk6ewY4VG6Y8MSPooK2j4RhEsKDAwRtQtSrNc3hQfsQSuDKWuuFyXZ2hWc15M8",
  "key33": "5YSACZsMVpYLXUGfLPGWn6iYXU5J3L1RX5JVpDybdNgy23cYpbzeko4pmwsrqwrgEorHRN2ACou9uQWmHyxpD45Y",
  "key34": "4wP7CEMi6bGjrqsBM8x4AviMA98LwcDGgoUWHqPVVQ7RCq1A5E7UHqDRDhC8poS9GobnUYAPYeXn7PK1UTXuki11",
  "key35": "5oCjRdVzanVedprGVcwtc3BJvTsEoBahkgwybx9CCPPjN8C3zdkExgESccUFzyTw2VDUdivd6LknT9ankMwF28Kp",
  "key36": "2vBjR6m7ZJoS4d9rLKmAJ5aZEtYUWviqUexsBDz7YVZr2iuTyP1GG55iefmPhxXQr8J2t7bhgnLo9Y6SoJ43dzSy",
  "key37": "J2ZQPynrGXHWudzmYLdCxqic1Du1xfy2q3fViF9xuZ9esvwTDby4RFGUqiawSBqpEAMyRaQqVrrmMAJSSLfCyYR",
  "key38": "3hD2csz47QEGBaMA516fEBWJeFkKBMoPD2xZVDHFmCyeBnBubFoNZbteZVSzvBvqAsEsUyxABBBQDKkFCXSGgsoM",
  "key39": "2W2x4WwMwZEpJzbkieDYV2hPL21Fz8AXWFWu1nPxbpkcwUh4XfMtu2xYdtH6bTDSGkG9zZ2MHbBNNyqoAPvEQLMR",
  "key40": "31XFS4BKDomjiWLPM1Q2hCnzzij92KY5P2c3BRFZe1D61HCEyuZk1LPmvbCsN7HRvHWXd7XYFpGdaBRR29SWxGzm",
  "key41": "PosJ8izrsTXVMfMqjcGAcUGwwbnJKx3NDVwQi9yM44TGGtKgdsy35FDit5q1ygVSeG6ppxvbvJ288DbixBwFS6Y",
  "key42": "3LcwfjbFNsz8DpLpCVenc1VnV8CGuy2AEf22NfzdBv93T6Pby3pmg3q8iLCNvVU48DV71G4QobiYJVNF9UDHMwer",
  "key43": "3VNW8H3QeZeN5tt5L8xMLPsXDA3XBKZctboJHjg2ZsnYnV3mWWkUHYmctCxCVeQiPtcEBZ4Q1hb6cKPW7ahGL7JL",
  "key44": "3X31bjXtpnisaokneDi4h8FvNgDp2JSifN8KXD7ZbaVMxCDjhTs9nHVcfeBmpcM4Vwu8UHzwyRWbskPAqMJgSGD8",
  "key45": "3J1qWnhdCwDcRhPb2TXTHBMaoozVcyCR9N16WRFBd6KwnPLwZUFQ3qhtLgDivj9EqNWud8aK3zPkHGCu9SYx8Y7h",
  "key46": "2Cexz1HbGcu8e1RUGL3YHh2o2sbcNx7uNfnvo9TyRofY54zxH5wexFM9iAwRmwWZEFrRWy4T5Fi7jyu1bznfb3W4"
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
