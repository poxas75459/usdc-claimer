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
    "5JxmpgENsEucefxxFnanw4RWuVVp2mzKfkdYzBskaJvWyicjw6eHJd3Q7xC1ZcUo6gAY6UzmKCYkmHo4fJJ6a6ZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zaYfqz29EDS3wK69NZJWJbmJwrw3jF6djeRTKC7YBGsXCJ5t1Zmnop5ZPAMLdKEcuejG9Z3TbT3kmxGmtX4nEwc",
  "key1": "4HP7c15XKrB1bJWNvkWafxC38wDMu6CkfbnqtqD2nbgBfSXM9uHdtDvobBfwYCva3Q8opBojXhYqBMZYD55uYbJe",
  "key2": "2uznykrZhGHbYYVUNPWcS5SEjsK5wDY2ZbboCAxV8C1MTFwwoiz3HvusD2yk6yUaqPJ23sSqYHgxNtPHY4cnu7M9",
  "key3": "5KMgPqZ2GjCXshhdT99bsiNftZff1qQ3x9grLbncSbjvcV6psD93hNEmLnjqaJhhLCNdJJBnmPVJQWHQot1UEoyR",
  "key4": "Qe19Vgqars93wqgadiwXfbwRHxosNWnVJexGjF35rfE9668HKjYpjtDak1WZFbw3AgVxZWNxAfDxYDSprpb92hS",
  "key5": "4SQq8rSeeoh4A6kvuQFpwzczgL5R2ZKU28c5sNeXBdW2dpJCVovxNp92JExSjZj2j8Rz7kf65EeywSHnsRhijsaq",
  "key6": "55UUWHMcsc3TFuecARDe3shPtxEdpk6VHgvKLq3a4fShwb8fzAGnX4tHxkxfkvwWE9BbXFWfEF6EFzQjZu3hxABe",
  "key7": "qjY6ZKgS6u4SQssktiY14Y6qqVjpVvAayAWp3SNppU1y4q2gaJACTF3aKuqj9Ex4voikPYD4t25bSsnSzMarCu6",
  "key8": "ZdxqY6gsE6s3B38P46FYPGChxnLbJoYkjLzq2SkX3aXw1sSMWhrow2GoNQT8DzTML8Bu6EQxzx2k4ktYZSfWNtE",
  "key9": "2ujTBHLY3zDGPHLAJWJhiSRD3xyeNBRFVCL4evD2JpWZxtgn8dSNsFfMc1zt9Ld1rrKsLa5LHBSZZLtN8SVuD1gx",
  "key10": "4ohLyo5YRbw9GifSB8ENtq5xzRE4gcgMeC85PBYgGd9FDwPwkom1sxNDLG18mqyC4WjPJnheTQi2D1ctBjFeS4hj",
  "key11": "2LWvoKZaroU2DzCk1Piy6xqrkndM12j76Uy8TztFgV3PWiqFXD8yLHocLiRUYGc222D85r7uqdDWFP2t4ZT5Mcke",
  "key12": "5s4M1wo9Dr6roELToKzxWG1vBcHv5Hwx9dctH9V9g2PDA6R7Pjujamz4D1v9MKv8snrbFkofkA1dMELFwPhEJpS6",
  "key13": "5uX4Mfvmua3tuSdyaFC696y7Nzz8iBnrvUrTVTPPhJoQjaSY5KXofRhH3uHyoRYAREZ46GNkuF82NvVWfyxUBzTM",
  "key14": "4Ae1N4SNrubJzzuMJ96FwLwjZFj2ujDyjkpYfJgoXRp3A2QsMU5EVpCvRJzXMxgb7NyN5Ujzdde91xs4VweR7rwz",
  "key15": "eQLormY3QP2Lq2CKa11uFpWCLC6rLuFU67tYdhr36dHpTqM2Ue2ZQSQfKSZeLZCz3ihya5LTu7GMexPDeusZ7dw",
  "key16": "2DvLQ3jycEijvagQFnxdiAbvEcpz7N7eULBxm8MnQifcepNQxWeWZtZYfnSCYYEciZJhbn9nUMhPUoXQnMW5j1Xg",
  "key17": "5F7Y48JHx35MqnHFyJB4T62rTK3XPjE8HXCDYVHN6HYzbQSvhurFUgggf6JEgCZszYMF9GXmWUBM8HSy1jMQx1sV",
  "key18": "ZCjkYzsWGXA5vbouor8Ycpnm5VcfVfDzuRTiucZwRGWSeP3SGPEyarNQJVbvWhcWEj2a4AbUrao3D3tVRNo8Wnf",
  "key19": "hGdz75WgVQrhEXLU8ZeYC2pK746SHsynvwYGMMuPvXVwtRpG32X5shNWa13uBcVofUDJbP4b8LBP6dBndEYXHjg",
  "key20": "4dcwde2kU52QWjQeg7EdDFTuxFXymfWxtEx7WhxqZbWZvFWSXvFTmSRFcjRazKnSm5Xm3S2xjntcyS4kknhaico6",
  "key21": "3ZmCVUJEJ4p7pTEAJq7a4eTeiJAmpzbo8EvrYC8DjMmJRSWrJvsKpooKwm7dBTvHB57ZfjkGcBiX8nKyNMc1HshV",
  "key22": "2oANQdePhxeXYgbYRsNaxiD28KS5NCnprPMuQWxS63gdyd9tycRscFJGVwcYTVjoSFwUffSAhvnS9wK2Hhf2JYce",
  "key23": "2JmonYb3cqSx75i1H2Qxa75RmuvxiJZKK3p9BsxQX4zuzbHiTrXaFFqaCftUiJtekmnSQU3P3vSDfQtUT18fk2no",
  "key24": "5CT2qgB3MNLx4YLptgSNowTLkpcyDqj2kpejmXzauM4vBEYb3GxbQ9C8EVSKXLnXDbVquvjsnqp2pY4rE3NpJdMZ",
  "key25": "3jzXGQNekwjBBy5Pv6WS6SAezgmD8LUBMdK7ShxjVBV3YVqrNKE1wmPKY9rWfFtfonSvWFvBEjhExkyebzXGk7Rq",
  "key26": "hhh5MEFX7zQEGeRtXBRzpfGJnnQXBx6CFeHYQ7HbGGX2HcMsSHUJHzWNDiqpG5M4wFQU1f95Txkdg66Wbfqohkd",
  "key27": "4ZpW5qvVq7wgvT6MAUFU16teg1QHBC44LP2xpqD48J3RXeLdMGH62wSrZw2wudGYm2rBgYQTRNxY6NjZUkxQGkhB",
  "key28": "LGz191msEjRnQNW6ZcQatYCq8to8TdT2u6SK57u97JGharsr7wGVFu7f8tvpwZ6nfdrY4YcKBGeZKeSusJv1rHD",
  "key29": "wnhvk5PiKYBshWtt8S1zbLtoYnPsPVaRSNrKqgaQPncuGmsLjgGaJ5EibrzmbQAHtEiJmm2ucqRf7ZEGPWumr17",
  "key30": "56wnwqRSdR2CkJY1bKuKf5XsmGqX4KgXo8rDhHCL4H3qb4GKAS31hbPWjmv6NY7jiCupVqRnXBLYDJBFR9azm9Xi",
  "key31": "4NfDQi4Ji1wp3B9ECagzPTQvwPmf1aKmgGtqaNZoAXznfKXWCfxkiLDCPyCTZVGypeypv1EzXNXsqe9be1UjCHZy",
  "key32": "4tSpdpUthzkS3dpqZHTWLPrL1bEdg1NmCMvEBKZAHeyzQEkByGzjs5fWM2NUR83QkMyJZinumnjVbHwjfBwDK2t3",
  "key33": "5KBEaHCjf1nGgSgZusQmsPXX3oa3upfkr2Vvhvks2ho331xd8ECVVSu5b5apeSALLFFFJ6NPorXxyeaJMpf3DtWA",
  "key34": "K5FpvhUFT94Wkh1G2B56K32ibSMcuzByMvKSHuCHi41Upi8hio88o7DDJMUMdyjJGMWbyxqi93QVjjntnTAdyy1",
  "key35": "31t4B2CnXCxWNUYDK66cjGzt4b36gU2MACpFLzy6AFnvAkvuFCPgLyqeo4cTTBCjDU1eLpg1nzxcytZkWPMrXfKh",
  "key36": "4CPL2d9vjAk45Bt6F6P8ZkhK8ESHGT3gDhh55xcwjNAbWQ2uXKisumxxYJzknoJHffDqBLQ6zfo385R9pUvocrXA",
  "key37": "5eR7hKvYeCjrrUbXtzHUj4Gg7Hj89JRmtqNbBYVgjSJWJY5HeYqU1DtDQkVSvfRXJPTfHZXyHzXCQqa5QvmaXjHm",
  "key38": "3jV1cPYWtdqn6NNT3c52z5KSpDKW7cyxZCTQjawbk4WQayyj5sY7qoYrM53Rr53fZ9GPCZYJCgjiLsswbSb7mPkx",
  "key39": "5ryQG2z2bFpQ9UT3hyenzJMH8xXvNfvJ87bBe3qVeohHzBd6GXhcnQS34he3BmWuRV3ved4Cvk4dPJvmqZ1bfTNG",
  "key40": "43wUYU8WRN4QPig9PLrKqxBv3fBSxLauoLn4PonQqxtiyKjhapLrUNaCsG8eih5i3WCYT8C5aXpzNayTF9zpMzyJ",
  "key41": "5uybHiobvKSB9EhFZ2z4YGZ7XpTrzGyxMZu7i2x5sfAPJjXzXoFrTYgj1F2RXKFwFXxZQmHooxpyfNvSSuDxqVTu",
  "key42": "4V1EoMLdDnfU1uxhU8ECxs81H8CdeFBjam3fd75mde8V4VEvXeN4aVu2jQVRZ6eSkM7iDhJwtm6sELvgDVNxFycb",
  "key43": "3YZrft33YAAn8AXo2uUmFNYALzZ6265HCUtZtkvgdAJNZfVMseQiMXJfhqsz2Zkok4ZV2w16HntA5j71Nrfhqzq9",
  "key44": "27K6LciGNNTPi4LBCbud4nD6eWsTadCwgMHZeCbPM9Gvm9xMYKUBQhCiZsm7YzMrjCUE1PBNtwVwMaDioDmBFynN",
  "key45": "2oCG2Nm6mfQnA5g2tPh93BDmzdPgFv3z2cx2MDJoLCqRp7dNC7HoMV4SrHBWWi9aqULRh7bQ193zUFZAgzdbdtWq"
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
