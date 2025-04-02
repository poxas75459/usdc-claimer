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
    "YSHHPNjMa8mMsgUUCHAjSWPjRyda33XJsx35JFxHFRLTFcWcbvabgY6KSiZt6jqAgriwS4SVh3coML18hRn3JZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xHFfvb1DvLycxXRgVde6xCTv7J2sdmaK3dfhWArNQB4F8X8Xya4XXfgbmoxmcDodDSEyaEX2XiDU8RSS5bx8mXL",
  "key1": "287MCQYyKz1CHoEeBZKU2h6SLRRDHPvBRh77oN8au8Wxi8d5LxzWS6tTuL5kUPgGD1seRgCrmRrGZHxbVhV8Z9zm",
  "key2": "3xxNhRW8RzrhCYP33kjnK8Q7YpQbjeHspzgLfvfmxpDN7Yru6buVxTS7BGkMrTs7ubzAHsznV9KdPzYZtHEWCnoP",
  "key3": "4EvnYtBZgN7AnWL6cpsYrTprbgKtnNy7vgCTNxGdu8A5EZ8m4xX4LiBwAtv8Gx9o8FSYEt2S1z5zRn4Ab4BqVbU3",
  "key4": "3MKSzUC681igqCnms2SP2TzySZCUQ6WZW827JjwRMXZgPc8fiSmyAqak84sUNeWoymrFemeiznbTVckZzugcocLM",
  "key5": "5kKxGFuvvzRKzE9jiW7RLdzvSXqqGQkXqygAowutn4QYfTGkEqCmYRT1He1VxyELVzfTPU3gNP6XCDxJEtv2ZStK",
  "key6": "3nSSgB1pScaJmYXqM6FFbe2VofNacGRXRhNXxcG1h9g3zeFbzcU6YVVAhRb7bEbjjp6kd3GdQ5CtNx3oL5oQ48FW",
  "key7": "4aBFrG4CB3D6Qt885KeSpT9fHogBxdJcVcmtSPKSJzcFagDzvosT8NqAqUQmYjtPUMxu6dSucwkNRsv8YRXnRYDG",
  "key8": "5SZc2XvfWGY2eGYQ5CgFTq4EED3nHTupKjMxPYaxDGrvpPnukf4j3r5CzaybRNpSdKj1P9PQRjWwbUrnJHHoGLEw",
  "key9": "4KPaYzpYjnKQ1XLnAnPe2khZZsMrgEWtSe3EpvJkrd6i8BWEDPjD6AucyjSSzGemEYo9YJ9SDQtepDttLAmHoK91",
  "key10": "5nQ7J9e7bhhB7VmJtzxqJ7jzbmPpdDn4Qrh4yzPr5JPPzJ2TrWpS8mx32KS697ivfMm9Xac5zirpTPSJW9TtkAtj",
  "key11": "5uTpzWycBR51QvQmSsFEJ4bc5eJJUMaMxKL7avq4nqpkF2ASztWFaMFzBkZ5FCJuhGxfwFLcCsCfN792D57Gp6pw",
  "key12": "vXSoFyWwxXuRgZrTfYfVpi2uPFFeW5kXDgAzgCqWNEezwD7FJstpjwZq3KKrVLsu84Hk5vR4x6aUNuzNNjNvtQb",
  "key13": "21MqkL9hDxTteULFiipngPqjzQaUpf5RG74xKge5FWPPdRLLnsdCwRXKqH7uHyWgZ1YtNxpphmyEMVZxYDuL1oyk",
  "key14": "65GuaS9gB7XuBUhgrDKzEfs27kaxVP4djw68fAF2Q77BNrfXd6aT8gUiev9THBe7owF8aCTL4r5Lfx835NWpAiPe",
  "key15": "2y8csTC9mfn1chum7AkLMdtjez2hKTGxTf9UKSy3Aarzaq5b7idGcByztnszFVbB8RddevbQoeUUGgX3Mv6U6ej3",
  "key16": "3XLLWNmdEcXKkEsotNsE4uU8SfS2eoYJccYdVcXon7uVdgsxUeWkAJi6hHMiv8NWDfdTxiza3btpLP4QoQiahT7X",
  "key17": "56yaC6JHPg48uSJ53bGAb5ZBpGHuZKuBarea7Ru6pUM9vGBfD2sZB9uNTp4SCR3SnfnBiVcb78KtLX4h9wsmktTi",
  "key18": "3YQKKsTmWv4EC9FxoZbbi4JNMPLaxEDMKt6z8zB4JGStEESEtD1E6geVsfFTLH7i9oS9WKjiqKjyVaBFoTk7BUpN",
  "key19": "5uRjRvTRq8MXrpf6fvdpjBF763zTtoCfdxhzkVGYgNPTnX459RDpQ3Bp1fQN2xbfLCKtBEfThmWDYXA1TaVBdHXs",
  "key20": "3xsaqmnxN4yYEDZStdHAUx6Hw77nW2aaKiwcEXNAWKgxir3T52aFc42WKnnQ9UxfkSJGM49hXA3UBcfYoLvtwZnC",
  "key21": "5x6YcvpWkQXmuEjSz3QDXdnSYsTPvrDLD5D82g5QiXnzzd5dui2QjP92z88F2RmAkVCTDegWDNyVoaK6X5sjzn2N",
  "key22": "7dgCfjLbKWMs3zFG4j4bX7AGwTAniUFLUAfVfTqsyQcfanYCCPYfdmsK4CLMCPPHcEdPyd6kmDnBKYL8sRubo92",
  "key23": "WL5j2HQSew18GokJJSDzXQkMZ5QSNLcaXiZQrwftmrunriD7S3TvryDGre6epBAQm1m6fYujNMujH7QHdM5CVXm",
  "key24": "5b7EsVkAMHge8wiHLK72EQzXaxSMrpALJ8PinegntQbhx3WWB1hXCVG5uXSmGWjkSeuz1eqeZucf5JKyYRQgBY6b",
  "key25": "58W2FseTXYa1E9v9ceQ1wvDivwsLeXhHVo6tVEStYnzf6gbsaW4NC72osYGSuDXSUFExo43QJb5MiDA9iL55SznR",
  "key26": "4gnekUpCkZbXoQGt17iT63KcQfNx17Ue7DnhaGWCxQXbfyzRTLDU94jFd66AVDA7RMHh1e1Zw7BfSwt5x6nncJYV",
  "key27": "zTB4TqEFawHin7H7E7uNEJAbuDsijti426u3cJcFM37QRmAhat6MqK9Vh1KrXQdMz5WzJb7XEwUd4vqXs7LnJZR",
  "key28": "5yecV8eiVyasuEo3T3RnVUTtUSBUVJivKRRJHcEyYBRUPEdMW2ur2jEHNXXxsffenoDeHfUJJHdUdyVdkBPTteMB",
  "key29": "4YQNHVzkBqpQjLaewU1Y3pMzV5XhBvY4iVNzpX4pPH6nwFC3oGsSKjb5QtyicVSje3z42rwEf41MiVsdJ4svurDE",
  "key30": "2MNQWwndMcRh4X5GwxUW5wkPM24EimzGkahDXqQfrWj76W8f9do76UVfWK8hwp3ocB3LuhYcTYtkLkxrsLdb17zC",
  "key31": "3J16h6K9PuwEk5tTAtdZDnYkcYcKbC2Wrjwnpdpug3rasw7r4mEA8T1dkco286zM8KHSbK23GX3CZtFAS2m2iXYE",
  "key32": "4Spg5rzJRREtYuRH47424c2U9FgoH2zkE887pstvYPgnGcwjFzQUpvi3zxk4Np2Ps8UizYicN7NxYp8z3PJhxa9e",
  "key33": "27qSMGJh9Jj3uUhs4fXKvH295491F3rtMkfvTfr82CKNNQbKiofEUBs8EpTTNVXYcvxVx7SNR1SNqMJ5zKsRUYcb",
  "key34": "3dyt7PNAKr1xRE7LRxK5yL6ZZvH3ag9boyTxoMbM2vHBA5AMZq9RS9e8AeALJYBDTAyXYCkFPJKJ1R1ohFJSrAGc",
  "key35": "5vXNUgQTHjfhgwX22kWjXrQsiM8tThX9NoSg5GDHLZezXC1VMfJo3o4ttVkCAr3MqkucHQFRDJeFjKTWEu92LpNA",
  "key36": "5JZp2Mst3awB5Cq13kQKTXbWB4PDZF7YswXTHc88nRt9FUKtsXHyGAKJygyWu29EufzqLSxRmdNVfxmrftPzSNfE",
  "key37": "Q4CcwQiwsUW63NjmePkUSTTVym2xvaUvo1Xxsuk6fBB5uYDAzvhq8EgsU1E3LXLRo6PSbzeNxt2wtkXEh2ReYLQ",
  "key38": "2pG2pxo51iG8yGHpJXAZ4JAEB2ASNQVnzQbBPPfhuz7AgayBiCwHPmL3kyhwP5L2rv67tTPQkuC7aUo99eKR8NBp",
  "key39": "48dvX4cHnxBEDFYYyvuCXEjR98Ta83yS2EqwVcDN9Lr5MEJSPBtLDG6gmMHPSVQNijVaC8Wk4xx9p2Z5xSMfVRNQ",
  "key40": "3J1mGUodmL82dHuQuPcWLrb6KNjV2qBGqzb6vKYvb6JBfSaYzt3DPEsu5SWsynjdQiTMZJG4cSdStFbkiBRaqFWC",
  "key41": "2gwDD9bFuZ3UvB4nHtYR7moqLoUe3BtVhX4WorCUFgreeHFjYbw25BCsW6LcBZwD7Syr3TXQn85fMYUFAa9au8Qb",
  "key42": "4TcA1M98cTdbGWehJpTjSHEMqZQKKh5kJvcJCSi9dZ6QhmKG8BmFf1mES3h9ThqmgYfNGBGnUe88zsSPwfMw2fBK",
  "key43": "4BWoM5Au5VzrrsebcXCs7AsZy3cVJTwjoB7oFjChkV8QXWZquoQH5h1XqzCCGFkzqRLEpmpR3AaffEAYaKND8kMG",
  "key44": "5VDkzGA8dZ9WRJdUy5a6M2sBAb58yCeqhpWtvq9U9pNctNtqzbQUdFRfYftfSdvoqT7HTKpNTyFqX8dPP6wqpwkx",
  "key45": "4DEn8J9cxczrANe4HoguFmpJmWkwzQJDtJeLtsUc3AAGDwhJo1x9qgZKTCZ1uBEE1MmMmjgiTCg72TcJ5nUK7Kpr",
  "key46": "4WhCmeyRKKiuzi8oULjmbr7vjtRZGzzWUT6yFnLn8otLemqebs3iVoQG3KGjpVdDX4BUjMNVedF85EinTsyoMFUB",
  "key47": "3jSrjuSS5fRv5Tss3dcsQ81yFuuAbrspvqycSzVY2mPCXJok6aZJnxGa1EE4b1ShQwmALWuAJgEK17DVEwWt8Tri",
  "key48": "5sFeHgvWH5FV4M9Tatpoir2ahFZPiYdEJ4ZcQWBPfQZi8RtvDDNPEQDFzUvbwJZUNXQJ3cfRFCuPrhpt6KqTtpbp"
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
