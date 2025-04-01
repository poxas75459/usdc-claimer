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
    "5WR51TESXe6ryVAGG3Ldvbj6CSy8UjTzUr1XJCBHZprGR317dezzQGH5BoAG6B2L2EiRe24HPoiDHwZsRXDmU3at"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aaFp2f8naQC4aLaHjoQp16tVMiXNoZ2BbYvJCaEA9p6CFxWkdat9Ecu6GjbwYAvzCbDotr787WgCP5HaBCeZAji",
  "key1": "7TURfY1jt9YBioLxjoNVy9TyHUepVzdVjGVVqBm1TRNnYaXkvCM93xaYdyDyu9crXYoeuC9JvGhMQaKuDKucLLK",
  "key2": "2n1r8tRVMDL3EPxFcqvB8sQMfM2cHEjvqPDRCGAC7WF1JPR3UqNBMEi7hN8WLUSu8SuqRN5ZUuQ9SnFfain62uKh",
  "key3": "3FTUneg2xWgHJCQFh6K1wLXg9h94TSeexJB5kwx16KtJVELcKYzqia8wBFdpHgtPpUTzxNZBPf1h4Va6ACh7q4dg",
  "key4": "5z3ao9DJrzaQznhYkEDaPDM2WBxAtceUSiptR7Y7X8uiekCZ2vQc7ZoWgDPjGbpWM4KRQ1RL9onGe6V25ibnp51L",
  "key5": "6srAaGhciQ9rVxoBSwM5VtRKAM38JcyA7PpyaMDziaWrxEcuLUiw6sAh3YHoSJ4NCAXDcG2SY75vP7LC2EcChmb",
  "key6": "44KtzVtFJtUdqDoqjZbs3ZvkqPp1qvmtqYUSc9SjTPJ5mQpATFQHoxBKAWUr3YtDsiZDx1XGa6dbxaQvTY6Vvvui",
  "key7": "4EVqDruLHUc46rXDB1KkK54gRe8X2gGycbH2hMtKqAsgf4JYQaaiafrthhZpZuMXM16puRVuu6xwkswnQwZ3EaMT",
  "key8": "4UoQb4qnxrxFYaKYZiktempLqHrWGNhuzfxaZPhi6uwuFjHXZfAhh9Wj1CGJuvEMjcgiKsVvTpufMKgpMtDHLtDG",
  "key9": "oDa5rxASWfbo5oeTBjqJuWQriBdagezG7BCSKHM3eR6xsL3SQN5DTewF6M2zxVPA8aW7i7CGznNNfW1apfTV1Hh",
  "key10": "5UCShjUNY5zVUr86MPgGCfo7wMeRsw53Uk7zXTod6ZS5c3eogXZQDKLBkEPaypgkPNk1ZLBJZhwFviLsda2VPqML",
  "key11": "2nZNn8HReRTnmcVDEXyteEAzkVVEGBiGntFGAkrTaYEiosgJV15GNDoAvqYWPC4rgmnifygDyEV75VqD1nkpmar8",
  "key12": "4WWWjuCyRakWwos3H1Ua7W2bT2orZ7z94AL6PN7rWbHdyB9fqTCueH95qVTg8WARZoyjKLPY2jDmRmdmoamYqvs6",
  "key13": "5frEirePLVeTazsMjxfZgak5vBuPt4xtTnSuALiaFxMngps7iVc4EWjsrqxW9uCMxi7nuabBnzQx2jfjsX5pTDBq",
  "key14": "TdtgBPUw8Ls4TzPyLiBZ2ZgLS16q4wQxnzYZwuozdeRQi6xGqFeK81mjQqKxjzJiPaAjQv34oR5au9gwxqzQdzF",
  "key15": "2eHtB6fxS5eZUe5Xy9WC3gizzY8mGSgy8KnzFdRu8KmpNSnqk1obhnmVap9S7j3W1DeyEqvTD5V8daF9wuhAoyeY",
  "key16": "5PPfJEcq4DxMQjgDBjLseShinN8ognwjvA3dVRM1Uu8w3edpDi8Zqu2jYw8D6ddd3boXnX7dfmtKnZUpb1a3hTuM",
  "key17": "35CL6RyXuimUegS29YDdHdVinLLDmXxZgX7ai2QZTKBjt8AVjgVSX94c7KZRV5Vtkqoi6GHqZnDv1ZUXScxubEFV",
  "key18": "3bNGoDvfpTamjrCjiPyYV8H9PyMMwyZWtb7MpcPDfUr8vSdr8ZPaFrWnF3sE7QRGGEFAWGGUiLZQEEFetJyvV5zB",
  "key19": "4jKzTxMRW7UfDrMgtHbjVJCR2d7Y8Xe51vFFnjQSeiwL24Yg9426PsGEmW7yEURNQrz6qbmfL5jqDyHKnessf26o",
  "key20": "2YStCgaJKFCnDuoVe19zeP6xw3V87kjuu8WsBRkwJFSSsnHF6EWbSUDX8cEvT42PDivYKiVJceQdEsB22RrrPxUL",
  "key21": "4TarhFsTGGkSgw3hBDxVYqBYtNV6BQGjz2YVD4yxvVMkzqXZb7qAyHoYds9bWGdcL1nHvkSgeUmhJxzhymT21aef",
  "key22": "5un73xgDafkSwJDPzT2ycihjWc7wczWY5BHAkuoG5eMGzVn7dF3qcs2dzYCwR15k9DL8nCZKBGihPSDbtHREW6Qr",
  "key23": "zT2nmM9WL36tNrv7YuS7fPXWBweWStKLm82i26AtyLJAYWKGvezE6pd8xP7hp3FA4yGLPSvuS3dbNfBDwfj2cMg",
  "key24": "5ABkchLg3NtxJoxen2wgpwAzL8uAHPDY8pPDvTmxUUTgqU5TvsPoFGcy6SRPknrNZsAmTH68hwes83cTBZgm1Jyh",
  "key25": "3m2aDccJ7h2i8594c85ecox9BN1cD8D5BxN9iuvN3oFE3QrNoQZBfVnndGmCADBrGcSgBWoe9mMXVeGJ3EVWABKC",
  "key26": "2pyhu8tvCAJ8Woh1CzjmGJS7kMJ4TMuYf4K52xwm6sdJg7roemscvKm99nCZvkShCyYzsMdTiP2L5dDTZ3hHVxxn",
  "key27": "4NeCU8pPxCyKyw1dgJezFJzsNwBnQdsHQfD5j79S8E1MQNuxgf8H4JgpsADXWyg38e8noe7u7fg1K4JghzPQicsh",
  "key28": "5sxjC7xooRj6zQjLGVPDmfULMfkA5YKbcBsuof61tuJxbp7ct64swsmB4LrDnRzAuzaJnEiFgHqjZp32ZfdkZbhf",
  "key29": "4Q2cFC9qtnhyoS7ysF3vUK4cCfFAA3DXy5peDUM9U63RfCtF7dh5X2YXB17y7GAmb4KPC3xX4GnjFPQ2ApyAusJ",
  "key30": "NZ39txP79VHL82aC8JVKHEKJoNtd87eADVj1ZAcJAEfMjyYoL2acqPUQDSwfWYYqXEHWPhx1ee2j4GTs1ReR27U",
  "key31": "3iiJhoVXjr9QCdQy2XTJzwB2Ya5kVGvF5tJCcG4CmRWQwcXruuVHYj7EqQaTkoqoRHaZduKUbyhzYqozkcQFRq5w",
  "key32": "4pZZobBxdnQRy2ZQd6b7k1kE4GTM6dU9RiApgLmVdKa1BzCxuYja1Ee6736V3M53MGStTjRu1LAe8vGLgH1ujvSA",
  "key33": "5HBiCm2qDYqTyDESpDdqppfRw9RjxyAwfUiZ5XjabNwhKa85SvCFkaFrKUjCehePQn5DtaihzV4ARKfqi2B9v8XF",
  "key34": "3PB4sN32yy7VLCEZQ7K79UzxeGYzNu58c2UdwoUQHXDcc5NjrBAb48LUpS2QzsF5wPW8NDK56MTnKndTaEeJuax8",
  "key35": "4xM55kWQRs6WZ22GgND5a8x5kuAmJg3dn8CbTVjvvZcTwY8SyNYMeAUPDjEGGdW1UsL7fxQU6YevA6fhAZZGnJA6",
  "key36": "5H4BySWneBw56WaJXWPohzab6bSSwYZGYC2YP5EaRHvPaMKwB5oKTGZwoxMPSxwDJqq7SEN9w9N2BaPxyn1CaBwj",
  "key37": "28BD6Bx8cgJENzeUWgT2EJHmHcHRLLFuFmTfhapyYDTPQUHGwgXYh6nYe26H44wwGZWkvgox65YE8dybg79aR9Dt",
  "key38": "4GnV4JDUHxmDX5BUF6bn7K3GHrfYDSyKniXkFMawxrH8W7f7qMnDkvJW4XHXzLfRiQCyGRdJGQfAaxYmAsK6jjnC",
  "key39": "5pD6j2aDiURCUXmGSB4Ej7i8Lsrhosak9T4z2LTmdLzwM1TMb9F5LwCBke54hEEnLpfYQ4NPYKrjqRhWsw6ezYnZ",
  "key40": "3FH6PKsPoaWA2gPGo1j4SvHUjpBjRGD4LPKVHnhT1BJ7cEMFzbop2gaqFL9qYHZzx2fgPhVMPQmTc4vDqAijqCdV",
  "key41": "3s8VRTWHFkNHVXmck14jbANMkDJXKC95ReqHV7i4ZDRvqtJuhbWTRkRJ2r3cTo5gFcS4Z9ajoetVf9ppCCCfC1gL",
  "key42": "3MSBTenSR5vzLcfsrF2EoPjjUWA2AnBNLt5ntfFSWge2msnSSn6yxjYisDW8ayb9EqgxNnJ6yQCyUaxbCmBMUv2P",
  "key43": "3k6XaVg3F5A8FESLM9f9ecKLX5NjA4cUL52kXf7gawTnKC1crxpM2VBWJmtFa96w5iWTJtZgVeHZPzUxYN5x3ULe",
  "key44": "3Tbx45QmgJ7vPEPANP4t1RQ9HsX27WWqfFDmfmW8ihQnayEGGNQiK5hBusWfPFkepgEPyg14ppKsoFBa3hqF5X2s",
  "key45": "4d1ToTxste765q1FRCLBxyhzDPFm8xRayRVykBo2pGYeYA7WKHK4TeXJ3DxzXF6RQPigzdZXakGNnCRLKfGkLyAY"
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
