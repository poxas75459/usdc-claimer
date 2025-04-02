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
    "5JtaNnTLLrnWXBYFsFBe3PFeFfVsKWi9k3SDTSTGtKjawK3Pmm6wz2GwpPg2jh9xLrd1rBNvo1YZqqTSEngnVKqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NtZ5Qu6UZF8UGV2e89nPjt1417np4FiiQ5RiZ5tbLXgJLztg2oEuPGosQmFxNerkxzsW3zi2gBjUxQHtd4SHmbF",
  "key1": "36tBzTDof47n2zBJfNo75eRcKRRCBtSr9B4wEfsFkNFm4u1imLx5Nrpg8us4qvhco6wKw1TkxahjCEGxCzCqrzjY",
  "key2": "wMbLnGWr9JuSP4vfUswbkYJo3s2XcXfC6DwsBU67ijHx9CkiHMQhpWVpVh2tD6nBmFatBzt2xsFNuXMhgrZX1qZ",
  "key3": "4TS3regWGB8zjwP9Ku6GoheMHnsKEkUxSpg6tecKW4gX9wie7YHxvUXVNk6BYSt1YBFj1mna7m2Jk4yEQYMMtT8p",
  "key4": "2wzwTwX8t86WciigRbgPjL3QDNfbGSgfWxZ9773RygJd46zQzqZgQr4cnAjMHHjQkR4uyFpGEgZC7ng52v1JfW6w",
  "key5": "juDr6W2bVaYhsdsTGzL5rfPq9usVNwcUVoD9kKAcZyntcP4yCCGrFVtnWJ1zzeTgAiC6MzcRCM2wxeEbS7EsaEz",
  "key6": "36A1ZrDAABBjbtguDc4pRh7rJTEngo6VEKb9YwuJrxis9sRvQ5Q6rm2vf6zA7LhwiVpPWdoYjRaBRGtmgy7wbKW8",
  "key7": "5oU9VCtM3KmgEKgLtf5Qbao1ExNTCDHfKGnuaW6sytkYmjC7mZDxsFJ5GNHAGMTZ4zjcaUyhEZ5dcGWrYfum5g9o",
  "key8": "5JSHBCfyYpYGzD6DvBKp8QuBD5WZsZpqW2xiFnEGNcASjfrBx7FJkeGSz8suBwQoKyASLXFdpf2bSoSdhHHbyh64",
  "key9": "3EQy4J5zBHnH6XVws7sAtoQbywUCFdFvePQMXhpfRjC9rKXLLxW1RfQWzb6jyTir9P6fh2dGsKcXfsm6fRvDJYBo",
  "key10": "61vou8j6bBMyh7R43D1rQeyYzAaUqY9qvJT4ARwHNR8n4xGnbcHoMMEAtuk7JQCVe9FjF8xPA8d2inaKei8VNi36",
  "key11": "4FcFWrbkWMTtjFiTZyLwDDRuULXjNyBHt55kkM6SGfEgMPw5EFaVcUKpe7FKY4MPPgz4iBwCSG2dqCXZwzGGDG4C",
  "key12": "4Qo99JgrrjiYBabUta3HN2uN46z2LxPRkDNdwsG77CksZu1zqcqgKJjJbeu1XYnCsfy2HwngvKwDzjEs3R5La4DH",
  "key13": "5srixoS8HSScrpm1W1iQF4zMUNnERc528WMnmJP2FoD6wR2FoCwNQ3b7ZCkXX5jAdmAnynAgJhR355vknG9eG7qd",
  "key14": "2CV3naLnnpP4cM2nxonFphrnthsHPrbWASBzuCZEw5TwY29VWjnC5HKhNUqxMeZtfct5ctdxPpGXR1GuYosWosB6",
  "key15": "36AuACRKGepHfXdLbzJUMVTeF2JhdqLFU1w5hzSpFPt8Ss4jh3gEsNnghhtLfNV4CoxHbxBCHFGxzNnWaSrdoQ9w",
  "key16": "2zaz2GjYPBrCrRwoRcDpWPuoKCBTN3V5kR73MLSkSrN2MPCyX4BdvuU6HHQHCA7qrMyA4nGeyBpuKn1KaKqgjER9",
  "key17": "3oKJ6GVawZgevWuuWoH9xvvmSEhyCLdJ9GA2yoJ7ofJ8jktftAfK7m2uScLUJ9HnweNAtnAGbcVfDjvXzWUC8xRK",
  "key18": "3mjKrj9D9KothYvz7UraLvLJzpHqqSRrdg2SS5gvUsXFJUBgyAc2g19hb46m5hik5R8x7sLBY3wo4ivND7PqASJZ",
  "key19": "4nhn7YXqtz3q6ZwBEg5KiVZyfq684eL2cKMMvFqwB6vTUT2qajZ8sohTDcMyjXYzHPdsJWVyYsHaQgbSjtqz3MPr",
  "key20": "2BV1NcvLUcYEn1a7W5iSaTb8pMdPtv2ucdnto7zhphB9RTcnvUwz1BqcrN4s6x1jngssvyTW97tK5vLJZA39tUtb",
  "key21": "2QHA4JwABXPB8svpbV3cstWNhppZm64eYnpRKTxmc22sj48WuLN6a6ufRpuAHADGNwa8r89XdAgJm2dWgod8bpZ5",
  "key22": "2PWuoorFKYuDamUp3CQfwcpaehFf9f45TcDMDtYVsKnDSAuEwqqtQmyYYqD5f4w98RTx5o7UpBuQXYYg2ZQghcNY",
  "key23": "49Cqwd8qPGKjGL1jtzmjG514YQ7Z7QoYaJdwCMLrCCCXJJdv4HxDRupEE7bwkQCWwAdZVUGFDEV4QMVQdUoVL1YT",
  "key24": "3BMA7ghKJfDbiVpmCv4WNDyBWjfXTei9L45EbZJaFAAomTQ3Kjbx7nH9kWYQHPmQyFocgFRQMbDUp2bkFQcrraNp",
  "key25": "4MnPCdG6tAJKMrc8ZDC3AJXzvj99U8k5K74iohPvxjDhxu6p3A4RmPtv18ma5FJJmVvcBWWdMdBb4kPT679Pp5Me",
  "key26": "2dgboyBKKcHF3yuBAPjEZXkrPjnaj1gtU4tvn1vN5JUNPsUL2NtD9AL61KkADKEwAk1JpWioyFG6RWbuhXFCjBao",
  "key27": "4fq5MLXzZ2HvEvSumHvmFJBv2t7WuynSYfY7X2ewfL2Xyy9tU66e5rzKbE2Jq1UAAVuy6GNM6yPk9d65s5jALijL",
  "key28": "4L6ZTD3EN9Us4CmghY9QqdtJv59uPc6T3iazehteRmaoPqRfQwkpx5jEirkwUUBQ1DXY9wPEgR3SWHTxTkhxsiTZ",
  "key29": "2UqmyDmYemGmDR6FbA9V3FGWr3DHotscxDQGeQusmRgEPh3YeGw419maJgcEjEKNyuL9Yt3AiepXt9UTWC9SbGEM",
  "key30": "2LhQRvUgaQzwap7wHEnFmipkEZALqGh7XniC1wpmz7hEBrmLNhVFBg5C4nYgBLHYkLQvA3LwEA7jqLpwzwBqAESD",
  "key31": "3XgpTNvVMoFiKSv522ud92nPcZ3r6Ep5GT2uPn1tmXCbQ4xGDAUpLzXpXS52Nf5u8uiNEbsWoHw4veib57N4p8R6",
  "key32": "5SJFW4KWRrCtiPRqik58VnerFreaY9tEvn8e3gtDm5QcEKZK95SScPG8EN5hixFTgjrfSgErjqfNotW2CFpfCpye",
  "key33": "5TKgveNAEVLxSqxoapdm9YHLnMHrDRrfsbeUCQAehNYwfRnEcgaBR9r8cEyJH5oUnhkfZsHDChdPuCgbrLcPNxjw",
  "key34": "BDrS6UAKVCTvRijnuRqt8WY3junboZJnpX4ZEonPbgUEwsjYBGMkcML9GuwMWYejoeyaRHhD4HJvp896JyLbKv5",
  "key35": "41QwawjmoSimzdjEiGLtXPWThyaqxoRpivzwVrMQ8prHeaDYD49DKMw6MEQRM8bgSLsuEcErgEyxetEBy9YRuF31",
  "key36": "5ueuX932iqhRhtVvQYwivWimAbM84gE2KdSAXe5cFXKUXW8rYt5Xpi95RVs9BaR2KstXUVbZiRFXcSJZ1mtxswcH",
  "key37": "3XXsnWygQ3SfwUbHhZTwHJqswXusizR6x7Mxr6mSHTSep3MscYZKQQTriM4MUnoQpqbyLuE8G3MLhSfVk19ceex7",
  "key38": "kcAMNtqcjvmqze64Dqt4EsR4BHjdkVfRUn93sNoL7vB7x8MqVM978LhHHXhFrAHobNsUPibGeGgJY6Th9uezPKs",
  "key39": "3TGYqW8G9TN3ctKVmLTk6J2fXgkuqLJpBf36pHQSstU3nQV67h3hYNFeCf6JMpyQFxdi4K8sFCJyKu5qU9ahgzrH",
  "key40": "3GmyLqhtRhTd9rhq4nAHZJjoqbm2gug9SbfxoMmCEBXsCq21wevRDYXBCrQmb9JMGm4rwWmEEe221Knx27Lzmf7e",
  "key41": "5yF7T3csa9Xmu4MH9v2zMU7V4ghThr7udH8vhAwi4wLJVBUQfXRPWm5SrnPYVhCfJ2qtEkoZcDq8QgjETvErTJop",
  "key42": "3sL3eb3fHyTAj9Yge77mAKLtjfiz6oMqPqUhc31YUEyLG46wEjC4xFveMkXEggmWZroA4c4FaqF4AqATBovGxrkz",
  "key43": "5PxUH3YsCDySbiD5YViUie4zYgKSUxpf3oW2gNUWEWDNGuggXbE5hhaF8xcisVGC2bPKprjyPM49ipC6ga8xehgk",
  "key44": "2sgELiADDqfaMqHMAPnRjdY8cZvhGWJbFJoV92ao5zcVqtFA25RsB4kMrqzjDcQ6Cj79Hx1CbA1eQSsyc4RMX2Bv",
  "key45": "KyPg4BJctCqMgJ75bgZ9NDqrGAvPAr9gzgmzaUBVFS3m8LVnLigWoCMUcqNHopaFhd6hBj4hSKzHm8CGojr4Q6Y",
  "key46": "YxdbhTdCeT3DRwbQWcmyRZCzy46iU63FtthKUbQWWHH3Zgn31PjSPgUHVrKBBMZYGq7cLJUY6xKKsS7PCp836tR",
  "key47": "sZRuNxjWzT2yhs78zKV3QV1dXeCUHkaBgTXWuZZ2UPW1AYyRvvbzX3UB68G1wcYSAV18VQaBa6ziUv5t4nZGZK6"
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
