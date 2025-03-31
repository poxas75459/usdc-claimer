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
    "3p3wTwePoaEba8mHsXtWVXiXE5mb7t5vwsLaNPPwyk4NfPoMdpvxCPgibhcrjNvfmcGJAJByFHLXMrMEyC2zWKLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61v7YFM4kHzSFGWFo5o1Qi2jckqf8sEzG4wEXygZDQRprVVSGntLL78FVB5ooXWWeab4Q9GogBsHZ5bqWALhnbzc",
  "key1": "4K6EaePxDMjnVyHeVk4ynKPgeX2gRpnrRaheRuDdDzKhawojTTSBzeVyZHwkFAMxDmqqZJAroihS7MZr7MbFGyB5",
  "key2": "2PiYpekxsf6BB1BSEhacZTBAXE4sGrToGFNdRX3P2YiRHrceFnkKCBM3LnNCsMNki7M6rDUGu7ARKaYDksoAqbXZ",
  "key3": "3ZzJokdjVezZQWKm5MzrquvWX2dxAqBLfboqBLHnwo5gZiF9wAhqoc8zNEz5sVdgADRXxLtAY16tcUy6ithhGMKp",
  "key4": "5SDGgvcueBBGzhPNob1i29t3W5KbWRVX942nJMChM1fK1BpTMhDKdC6U5HriDUegd4RhiYELfavg1skXN1unvbzT",
  "key5": "5RRcyv9QAnHqsRuoMzTrDboYPsf5QC6SSfWkpJweodfi6i1bNsMUvbLWuzxtrUAhhVjNXhDQX2ofSz97yZ4eexKU",
  "key6": "3eCa2PGaW1933rFjHSAGe1im9YUcmbNW72TDxv8z6DoFoJWp1ozyafw6jfE1BciL6cfDqHr2nEYFLMnuaeos6ehK",
  "key7": "4SfBbhKx8JCBs5xf3sidHsMY84yQKAqCAfmYobbDS8yc9AFvnT4NJs5UDQavhsCSzFmUpkW9J7Q8XJwWLtVShhwd",
  "key8": "kA3XSywV5EnL7qEWuRGq3xwAPdwj6dJryGzX4SwuJYhoHua3y3hWBzaeqj4NkidS9qUfFHurDAnze7bgXNe4qs2",
  "key9": "25N1kY2zgQzs8nMrF5MNxxUWgBNJFhUhbxBxx8ppE72nFY8ogUnHA12jZeToZnkuFbRctd79ALNRtn86m1sf9uSE",
  "key10": "2LQoNbe8KYUqrQqZPeMqRMxWv8pqTCbthee7a3MhAovVXsMrk8vTFgMdGYETx8qBgo8G4HwBgyyL7t6j2J4YzZhs",
  "key11": "5a1b9jv5VfjVhnuYT6onVoz2hrc8dgKbYACJaNmkaZpE8H3Ych5geQTHo2KALDAwL3quZGKafXu8G14jcSAqpYAN",
  "key12": "2NRK3qi3dkJt6nV6oJhd1BAxNPCfYdY3iCBnkgcRvHaaxTQdHksWtpZreqGQyrZhLG7ySH8GvVbibCu6dxoTjSJg",
  "key13": "5Uq1uJ7DVRnT9LEed9HVCXSjiC4M7EarvAtwNWahtuoU3MHjyD32EgKxoWwyUXC7UQKt9ZEjhowt2miAQemkNXXq",
  "key14": "8mkactWkvvq8CjbY774vgqHFfFvZoWrSwNCCVH73YJz8kYGpBL6JH5qUJUVdJR7FsWAkMDa1pY9vGrv7EKg1nQH",
  "key15": "bVki18e5qfc8SqtCQJnPB5ZkfY4dF95gp4bt2esCp79bZ2DDrXKHs3RhQhYn7pU4cWSHAonQHvC3M66RXhLmxp8",
  "key16": "3MMJ4ZQEENUp1reuM5EMSvVNsaSPfNnAsHFHawCaw42Ga1e935VTJxEJh5Rs6ppjtnngxShVdeBNV8FhPNn7uWJs",
  "key17": "aQNHuZD4vBwRWpkxbGyJZL38nE6f9unCt2nqrXvRH3TdpsZio61PtLEqMmptmBA4uMExmfgNpUCHtbwF1JrJtj3",
  "key18": "2Eho1E2yG9CThasy6gZ4q1i6JkiNyNb45EtVZwAo1cGQTZuVKJn2WwooGn334XJyRb7kZEfUnK6xzJ2gxnWmZUNq",
  "key19": "46cePcSUWByJtkgUy5oCG2us5Eu59V2qXYzMSKJcZ2UmNva2oXTD5MMHQh5JDnLgMKVfoytU5RqrqnmiiKm9egh6",
  "key20": "i6nFJbTyzo4D68uGiwBM1zN7SU1ZE1f4Lvumhxk8LwUWPXStZuY67zkZ132efAjbyrRt5YYjprn3PZk9od5zbtR",
  "key21": "2qxagkbfhbDC6hDxzBf4grnbVDH9xtHcUu3pfemQR8P4RZG2cjsmRFJXt6VkiY5x4tTfMjdxisFzUDSz14L4HHoY",
  "key22": "3tR52sxAsms1VQLAYayY8kCBcBLthBMhpFW1nQn7ZuR3HMYtVwsodr9uVD1nCviHBD6HaBCmQKVE7ir6v5kXHRpb",
  "key23": "5cL7zu3Mse3JkY5ExcNoBUuD7azy3qBgAshn6b6z2VPWCKbqr85nNe8zCKSA24eVMwkNMkTfTiPVuEzBiaDXxgzf",
  "key24": "2xzk7w2vt5wina6dqeW9SSU8NTrrCektRpRHKkxKzA36W5TARCQKC36fbbyMtHCNnEkXWeUPLPsN3sx7XFkNMFSy",
  "key25": "3Wmt4kxhEc9cpi4gYhfjibG8Y8ywYvp5gVEgSdvtMyxcrjm4S2fZ3u31cn1ttbZuNxsF4dNN3SL6nyAfGoyzfSEA",
  "key26": "AFgPZFK9GAgRKvtZhMQ2SQDRKBaJNW9YWJDFbs62fsy2wTY8AWirY5pizPMX44hToyZS3srhSPuf6w2P3KeHkgA",
  "key27": "5kKY2r6V8Pi6zNrpwLXkZuc7KPhJh1S3erDHLsh5TJFcj7QCRkhps7wVNnrE5cjgSvzJkesMWmQvDvA4D4phKZM1",
  "key28": "3CK2dkKy3YEfePXuDjtVJD5xfTGncanXZJViZL3owrvmh2nnhxSBCoXEQaJygv3dV7poYq9DnA84phAQ8yeveya",
  "key29": "5jsBw7UT54PRHAcQFjyshyBTRzNtpMSgsZPtRPMqQ77TUJBmTxmizRgHFjycZBbJdDrPC6D33747Kz8JaTM8rsjD",
  "key30": "2G2RVAPoAckk4y4Yv2DusviL7ZhwE7iERSq3VJjSMoFq4MfVZxRpBXXjoanSybZ6nubcvLiY6kYTTYAgsXHHyWCR",
  "key31": "48j5pnjfN8SZg9QirDEyhGbSfy25TBFhADemerGDFy3d63UXQw1kaBfq5QinZb9kkxeAsfsRfHLiHZGzayANEN5t",
  "key32": "BicUbNWSM7FWNDU2uVMH3ber8uCFc91UGQUvwgXJG3JsyJwmsvda91JjfkwHcuJTUVYs2wHYMugybEP3jU8vamo",
  "key33": "64JN2oD48uv5SrtsvWa1FP5YNijaR1T1yrBBvagiRVXm1Q33EVf7ZMPL1H45GmVrPAueg5w8ZacyxhcXWN6xbbof",
  "key34": "5qSwTrjRVDDPHeTKQeoouNHVqUsfq4jGSgdHbPbDqQHPNctXUK3Dwb3fDnbuJLzMjoQTh2b11WgUnoPVSdu2Fgmf",
  "key35": "4TX1WL68ooFB4E4htn8TqaRADyXZfg49nrt5ppy32DBH9vXUmbJ2AiUihBCajGcmep1GwdVKTmBNGdLXYjro6KEV",
  "key36": "iFPo1PujunK2U13VvRpCg2WdW3WoRLc3bZ1nkM5ixap3NSgeFCSVrGYx6VG1udgoPcMcQHBH2w33aXjK6DW7HTr",
  "key37": "3PToDFSba7rcjyrqbuFhvKxmGUiqWSRHhmggXgyp85UDnnPu25dqx5y9GviYxik8uEu6h2NDBokd954dKdN33t1K",
  "key38": "5ZQUJmRZPj4f9FrxjSggvaGPD9tsdzMTCTUe6meCmjLLg8Uk4CxLjTCpqcr46kxCVUCa2cUyY4jE9qrPFwttVT8H",
  "key39": "kcFmRo819c4ijhgzWm2JChB416nese9wHhL2qJgzkwYjTsmvEXQtAN7jEtSrioZGpUKzGXHd3aor4kn35CFNRHD",
  "key40": "56MYnwFX3Kdrun3WTyewkBe9NdNzHNk1fEWhFGZj4vRkWaecWV5az2kkiRns9J5vq7Y3vs9h5785ML61ZueJKdFn",
  "key41": "2GJQLzXme13tB7VqsjqRkJom56G8dZMfWTieCxVezRoxeZtQGogR1kPx6bRkJG5qdXYvPLQtzREA14VczdC8c4GL",
  "key42": "VjKxUSGfsR8CVtRv4Fp6uT4xpXMGDpMkbeSkLrXSyzrHfZLCQrTRTnM8opBy4uX7dVduPpJLHewGPkYV4WmncKV"
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
