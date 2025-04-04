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
    "2CgdSDnrf3ErKkMMn4CQoDtBbrwYojWuU4yB6Ldr2DeRG8nVDT8fHJ8dT6FoH8ASF9S5GoW3BDtx7DSZ6F2eYcok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TXoqDrhJcgLj2siPbHwzf6Q5GqSGtjUCE1mkckMjSjRdrmBCTiJFpitq1Fpz7es93zkk1R6RV22CCMfpM2RGZ4U",
  "key1": "379P5A52Y94TV3GCPvBSU3SvZ93jdMib1A26Nag6y7PjL6Xj9acEZQWsLgzrv7acEct5ZRVtxP8ceX16su8QFrZv",
  "key2": "4pjiZgPA65Am8Z2MbKmcz5ShD7BFCB1Ctm5VD1ayG8qJzcG3Tx9JTGTG2wsteU6TDexkWoCMvbdMoDZx5jR4zKHR",
  "key3": "5RoDwG7eYsQoERTtgViXnP5N1QNLwN2grKxa7KsN7HuDJw3RZShx15C4hgJa9ph8V561XvDr74TDgRD9x2rCyDcm",
  "key4": "dS7a6zRYrzQT4xR7jrTCZDT962KRvhmratx3Xmn4ZfAfeZxAn66A7x3CchLQPLZtygMQBDyJYFNX1gwheJYvo28",
  "key5": "5oGS17PKmk2Z3dn4ng2BVdqSZXUxAJKZMgsH6NSsknbWyEuixTrn8yK7UsjafsFMQ5Ve1GrKciHBBNvrnQtHTLPu",
  "key6": "2m8kEe6AtNH22FkvAMhbQdxSFXKf8pGY6mnhBxR2HJrduZspegqtBgJoGoX6SsJ63wseHoqLMRDWcEvgnMU97Fpx",
  "key7": "Ttg3YVXY3vxJyZ1tBbpJM7g1Kn7gJXACpNzUDjXyweD2JJZ9QUEd9aiohvMfsn55mvA5bNrXrKY4cwuwu4UEJ2v",
  "key8": "4QwJtoY7tJ9iKFg8U5JP1dTpyovXtiiycH1x584v4S2QyMiNB89ewNYdqaX4NBFmyGMKdmby9HJRnavUBRGmBd9U",
  "key9": "3YRtvKYTzYAaZdXXbCUK5kxBK7tDewW24wpkma625SUtCy3CMMBjREEq2rHghWkJGHRqhaiXo93Y1z3qfHq1WK9V",
  "key10": "2pqViQA9AVbGgx1EA25i6WbQX4mV3zsvPQXGbxYyrrFvophFLpTU6h38q5DXRscrLRCF5d6WVWCUZ3Uok9oGe1vo",
  "key11": "T8ncUmLJSk8FLi4jJgFmBPGzipxZpT5ete4ykuD8vdD9gvXwR7JpsRgAddpbdy9mWB8n4N5CFMB7T78DcT942gT",
  "key12": "2wUr1Nqmm5VTDF2Ct67jnPdfpNyHYwD2qGJ18C7a9qYMMZ2veuoZb2sRUnCH4F5oVyBbViPVcrnxAbuMGWHSXh6q",
  "key13": "3ztNZNjCs4oTscfhcRzrdHUEYYkVPJugsDGz8KjKir1NHP3jEE5EYhawPTsTwi3vAaD2hNSrStuxXe9kGUZcYAic",
  "key14": "2xFhGq9nKa5avUWnhhTAHNDiAJsJdembcHapijTTLBYt56PgdNuWRXbi9TG4KX62A2ZZ8JyXpsxTFUQRquXcL4ev",
  "key15": "aeVVXDLBCcPDCSD7crJT6Uuz15tnfE6Q1R1bvTzdjY21MyZ5xaCKj7V8QAAENWyvAt5GEmVj5ddz16c5VseKDsM",
  "key16": "4JuRavi28zeBdcKna6LCqtF5qc3Ut8N9nc9ZcpNbwQiwSDHEXntZWbLcbABht5nVLPjJSHuBnNLVngUGBsieqBKP",
  "key17": "4tBL5cAXH2y5ee3d83A15uZB9B134Bpy24U3cai9w5QA2g7enXx3geUQ5Wm9qxhW1Ghe3PVtoidyJ6HdSHuqqARL",
  "key18": "2AAaQRSFXSSc2v7wDiTA7qfHra9idnfNHdUTAKy8ykFqoheF7dbP8r56Q1fsUPm9b4f2u3Lsn9uxTDVbNttvKrZm",
  "key19": "46Dn8qrnPxjGoFEVkLv7S2h8EayfSYMq4McHZrWGbjb2p3qRhjJm7Ajx3ScZdyh5mZhwuKQBjrwwyi6poZ1B72Hh",
  "key20": "29HS37wBnrF3dyoRdoVFoFDkznwPdvntNiGeMfFSi97VZy6naPx2u8wm4Ajjf5fRPuLM3pb143vFnuZcoGHpHHuo",
  "key21": "41Qt6AjkfDR3LmhrFCdrdDwE4y1yxEdXdBNbgaCaAt9W2oMRwEjegewTgkRR124fg2gd2h5JbwYbneA2fG5pd9c8",
  "key22": "2vJeGUePhzJTWNT3VTXHfrXWwcBW3n6ssNFf3GmJWErcU4hBjJ2i7RsvSZNmhFuVX8f4Qf1jNULZnBtXD35WoAEi",
  "key23": "vRgML2q9ZuKf4Cd8ak56YjWB5Ue5tubfSniv8WJZycmZ27FC9szmm4qSgy5BQCXzcbN94fk8B3zNZMKdAAJ4DH8",
  "key24": "4QADNUYB9dGoeqHLSx2QNayj2mHsdkRCRviCegNfjw5vPwFyGsnS3Q7dHB5rdV6vcVbSEosBWLdFhzEK2DkbZn9H",
  "key25": "5vkDK1eHgmq6y48KiQqFzBCajCCBu5A5CJdFaJY3BLkusyNsEkZ8ocQb2YMx5RvLskcPFbpggAMScUiHoYyQdaWt",
  "key26": "agLH8YS9sdjLijn5dTNfv5rAm2GuGGBio2CNEnhZHAc18EX4K9fHUqHuQSGQ3XKw77LAVcLo4VFD1aCvrJWb5eF",
  "key27": "3XgymACz6dXNBWQJGyGd8Vf84NfVFDPMZ88vDb4z3Vsn13SSwpgUr96AhQUwR2MPb7ivqrqnu3pWNkmVbHHSjiT5",
  "key28": "3TJvqL3d4GCofzogPuCGouWaRRtRzwpKGZPLeUGFQTpfcP5YyqcGzAVLdBNxETAVDyamPuxgCtTCGH97dscE4mNB",
  "key29": "3N9pG89fEH2MAAnbEfMmbmDFYHD3eyJHnAQohH6bnzNEvkH7RMUeePyXAehaHx4Ps1ZRvaC71yq1VisekDz5PZYE",
  "key30": "dLnSo1PZWSATa2pbrEwiojgWTPEeG3GhjGBfJUcuo9eSy3zNXY7mpnhddmypCevW5P5tjpcD2h41z9rmVcEhHEz",
  "key31": "4PPJjBxbJmv9fhQCtN9abDN2UX3QERGHPZia8RbuKVX64Zq8aBvKPgkQy2vv112TjQ8hYyyTAyzwAoWhabrpWKob",
  "key32": "FUBaAh1jQHam8htb6c4o62xrnKoLTNaxQZWCGb9GCbJQWQ2NpQrjnPzFbKUtZkuKRX54KZHDopMfH8NhMTJzVFS",
  "key33": "55FKuWCWFnvxSMNcwCidZFHr5XscXKXPWa29oNE8AWzHyVS6uvMz7K5nxFDyQEn1RDfpKekF5ZE7GThhuHEFJfDM",
  "key34": "4PGpknJ8jioqAJc5w32TkaRfkYkSxhPErLWhUMeMHxwQ3ap4jkb7ZXVKdG4ssLZ2spoQfffuSVnDFg2xtRsH2CyB",
  "key35": "29B1Fnt9xP3rscqjUZnqzW8p7d2hsobgDZFcrC6A1ZQT7mjUJCKNS1A72HXxREW4deq5tWhBeE1Rm6S3fBD1hhGj",
  "key36": "66A2uUUUMpgGmoEDDGdCALicU7xwK5uVg8bawhLHV5oZZwbKptJSez6Y18RThDSbQSpJ4pG4cv2NWHrgqKDifDZq",
  "key37": "5QWBX2D4dYvhEBBXMJ6pumCwzyAAjNE7WfGhC1dzn7grRpsNNej9CgLxWNeYMqxWJbnXBg229foHwCpWGGkjFaWd",
  "key38": "p49PDqaAZtMbiYbUVbTByqx9C2BC5Sq5L9kq6YUjy3FdUtK2UQMXow8Sp6kCm253rhxktjEzJmta4HAnGt6fb2f",
  "key39": "2t1PTfN8vkrdVWPF3VKXMEJcanHicPQPPPMdeKJAWCL6GM2ypgeFAFk9oGBHrL4UPjUMG9ni2bNMjBSMCkbbZeAE",
  "key40": "3rvNmRzkbCAH1FpLwJKXRaa5FgE4pUWMZN7vap6Ee1xGAi6CTCUZRoQaB5GKfsSp98J6shQFAX9Gd38vaK5vm3y1"
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
