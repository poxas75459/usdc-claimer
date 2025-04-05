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
    "41t3MPQF1ZzK5r5xfpNivJQtfjEjX8VZy6cjfEJN28EK9evYKVLqbsEuNeWa4VY1oPanSK2E6q3vZswX7uKbE1hR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SpT9TFryD8He2rGBcFVPbV1pZ5phHtBVR6igDwrwTKED1FLkbixdgg3ss4MoaXQKGNsQzDKoZMBqnxFeJ2rdVkp",
  "key1": "25gzFGGtCvJJXLgGfDPATRXQkefmxcUJ2s6Lw3GFG6i61qP1Cgo7oC2ZJuBgwSqkHfRc9qGqUJBaeX24rM1UcUjb",
  "key2": "2uyBGZJWFfT4JktbsFfGX7HAMPWLEcuyRxPKsBQcrkKPvoiEMi9y1VsGTwdwYUDKDBbWHh6MsT2de6qNVL7pPyTk",
  "key3": "5cxV6j2AnEM1SyD2vqcxVcQ46JZ21KBB65rebkigpLCuDfmpKHzdF246oXypw94uQCsNs32oStJBg7bg2beBz4m6",
  "key4": "5AWyMg4jMF2LhkNjZjeYNEpFpDKxmQnDrxChVo31ab66hXxNJwjDLnifQDKtwb5sJNt3ihaSDf7k7gpmh33Dsqf8",
  "key5": "37vo7h1nqEstCS8R1HrNHqMmeF9Xjw5uNvT6WmZq6iyFDgJQbZs8u1FDfiCx6VEDtgNrcZ9pAPcDM8Ewcd5ZzfnF",
  "key6": "3zyMzfbJruY3dhwG64xxxvcmJNSdFYopEVvZ3CatvjMBx9gYCTY8K9xozvNHhBm4ZXkHhVDPhiG9PakjVQbaMSq4",
  "key7": "Lg34L6ew4aYA2jxUsUaoSF3RLmz3NNksnHkHQb85dJMSVyaLtzAcphUXCjbgSGxTgcnxmjYpeGcKebqCazahm8j",
  "key8": "2AbjtG5fagYyXiQSiFiWJNB8xpkRtMpDzYP5tzwf28gYbYyzkp7fT6kKiMz1eBCZhSMRRHojHzWX2f97aD4RJxFA",
  "key9": "wHKJt4eUM32vbqkAsWdUBBqptTPvWYkCxxrN8sarpKw1hDKgbe9uzWXfHzyHtGiDVryx5HD4uiaCGEyBzzwEnQY",
  "key10": "5Lf2JUoHbAwSesMM6GLp2wTwGXmxXgyGKhKrppaWK6Euyd3sMJqDmMV6d1uMqGtkMtQtrmJQwmQUwjHt26ebNXLC",
  "key11": "4eXGe3NusQjKTuhS8w6PeQtUqRrV8oRNhL7XZSMeXZrd5v48HdfVNrykz7uniA2r9232UBCQkbkr3Dbk7T32zPXN",
  "key12": "H2pxDPKYEXMGW3r2NZypJTuQvVFzHmWmGSMDkzdS8fcAcP3dFvJEL16zH2jpS5nWMnaSSCk2DFSjv91yMBGsPDk",
  "key13": "3H4qtdr57Zti2gYJRYEkSaPu67GRL89VPQjRvjdp6KUCWbATmvZbBuY1txj7t74VaMXZk4pz4ZMN2Tns4PdATNu8",
  "key14": "2RgwueYdzT8yEox58B11NtRUAWu9mKiGDCJBxD65FKU5Vz3Mkrpcw1BCzHyCEzyH9xHbiqSFzDaLEJTsHRw3hTox",
  "key15": "59gQAEHkoaNex3GBShgVmoyC3Z7rmSL93sKobuBsrS1HS15d4Fy2s9HjSjKD6nL48ALbzacoze9CoDZYaDqezHY7",
  "key16": "KqQiMwkx7hLHjjAet5bYUSsvp86EQTHUXgi3qZCNrZn3JhtKjwLaRn2c14AHw4pStaJgZitnAwWbGUEUsma7dSd",
  "key17": "5TqUZXYtAx5zd1CwwqX3W9zeTP1JvBgkUnrKdiAX2f3uyqMTKkxbx8jQ5UF7KrRPv5rFjuHyR1vkC9YzZTCchR65",
  "key18": "48Zi53jFSXXvXheLP9rmYMR9ySMCL9EJKJ685mv7Y5xws6rz9PrvbpgTTxCqPCsbf9XSzk7NFrNU6ovivBGhDc4z",
  "key19": "3s3RRVwJKmwk7nxdSLTbzNCJmJtruZFrKanTcGcoRzj6m3gaj1M5a5dgBUDonfCUkqUcnZMezGmM8wct6h8qGvqV",
  "key20": "qYSj7VBziZMzdwQLczigQ9QRQaZqF6xJDz3zvQf9LsTLDTKZapYmr5xRGzxbCvpSpJR6JgzNLznZeSCrUwUR55S",
  "key21": "3NJYfhZVqyMuCAuhHxtzY9DrCbnNkWy2HSQHyDMnsGvcdQzA1eWoPcF4x2G3FrFdP5L7oSzhbufUtr1pMKK92Hvr",
  "key22": "2CttXGRvmLjr67bVhgBJyxQpbQCfpjP9PuqP9qTffjbdnqWbwseUM7KWChPp6jBSDMeDKVvVdDN7KEmDXrHd9ZZy",
  "key23": "54zQzJJaXbqBVzAy14r32TNtdj7TtUZS5QdjmmqfJs5Qgb8MREMS7n2VDcXegDhWWZt8R3DtCY5PwatGpfqduHGm",
  "key24": "62B6HDUUaoiuppiPgr3c9cjzCL2QvR5Zx4aM9cWqRqw3kLjPNxADP6U8NvaY42WQxHvQXQeKvwjPhwg58N9XxwoV",
  "key25": "5519nXSW3T4rr3NsGHBskdSGzbHK6ttwVJAiDGdrYWnZL91oP2Jxg14ndG5qyyWBmF4MRrLoHfeVsQrRZfqoD4qQ",
  "key26": "5XgLmgMPXg6rTMUbdk7VxzYnhLqxvDfebyPJmwDq8HFw418iVPVEWhcupY6fmgP5odV1pYTg26CgE1gDXc8pLt41",
  "key27": "4vY96M1CoPHddJ5swT1Dr6438A8onY1v9r9F52b3DbT8WsLnELV2fPbLTAaoXCjzcBpUnuxYWpSZGZDoJmdzAQPg",
  "key28": "4dWsDtnuZNRuGLABv7kPnH1Vv64fZqio8QP2ywVMEeQHWrNX6UbBX8eBrcnFGgcZk3jKtnW7M76H5n2W2VBgW9YU",
  "key29": "ve8pbXL7zM3ygP6BXRMZxgwGWjMEENyLZzPbd56uiVapsdk27cmWRw3YacUx9SwyjkfBL8EUQQeNTFTxTrRyRHm",
  "key30": "VAiVqsKnM4yCgoXk1ZqKcQXuTzXnoMBZ3zdFiHLSeffqH4516WdbpJM9aJ5RApy1jYS8CZEeB1rrhWiZ7D2vddC",
  "key31": "4GWLHWPC7ngv4dq3ZNLNTWjndpn8MizczUgyLQ77qvJHYggyXY9uKLiaSzeV3aWhbkk29xeUVnGGzrVM58HNac87",
  "key32": "3o7Bh6FPVBBjxz91iJDvqUYB53prPijryRjit4oyNRRPjFcyuaTcimZs7Mus3c7hAmCmFoYd1CWFyE89M4UUDxvG",
  "key33": "5kj4AkvaPXokdDE9D7SfT5H3KgbmqngdHZ5JwDrwKZFQ39TqgwLTxKTRaL9eKjv7xoKdzRYsc5EJNT7yYAzy42sC",
  "key34": "2iGA658GtM5pWyWp8TLk1nq6ojF7z1hEkjYaHYTrYqgviszhV1q73B8P9Afv6ob7vhXdzWf44yi5EVcjPirTmmeZ",
  "key35": "x6mA22Poa6zdnuDSNUeG746ujg9dhr7iVcTajeg5ycD1HX3wRbtKdCRmhKCz24byD9cbnpBWugmDFnAbKt4Kkvh",
  "key36": "3gs94c9UFRHjWnA1Cc3EZF8rEqdMoEgMLk2Z3iXVnSwKStTDiYVrnMUfP8gBknsjH71MVGxhFof7UMEAfY6CR8Ga",
  "key37": "5Szc3DyfJMGxBGbHyDbugZbs9agCit7bvMZubFDAm5QtRPtxGodEoDPEaGjdBueDDoyAKuMYjaDmPg6hmc6nFbr7",
  "key38": "3m9CPwwfV3pbwiewQ6ryzQ7KViuK2VpaXyGH3P2wnQSu58bPYQNzqhGQng6hkLSN9mfCnrnQVz4AeMyydTc1PmaW",
  "key39": "2UvkLtdbZu4oBU7sjXQqtVbbzs58Fr1b4jcQjUWBqu83zGxdwt1YmQdcRRqa2TG3ssGosPodhy1ru7bc7TRE86Y",
  "key40": "5DtSwstNwQC8kh9wUhH1nCvaFCi1P8SPP2asvquEB9f5BFnHjtncfuCkaTz5ApsVBcqNQe8ZbTuoVAm1db3fDRNA",
  "key41": "AU38jxxg1aRhAjVMW7ETww4JxjeHfMdbpqTsJhHbipYXk16eS5JBDWsbDkz3jWokWqu2Y3ccSXvZtgSDu4P1jyg",
  "key42": "Xmq96MAUsomWBwSHVTc3ENL6B4E3TGxv2dguAgndDDfYANgBkbxBZwXYJkFRiYWatw1yPLCKPTamL7sux9LYQQq",
  "key43": "4QDzmDyk7fTjzUuG3VNCdsxU7SJ5VQfBCPprK3QBgs3wjLnrUy1kX45AvmUVJeSgsvUioonPy1nB13zqpmYo4Wm",
  "key44": "56sxawDN1rqJhtXHoeyZ9rvBbSVYL5Eq4py3n4T4UZm4g4N2jXaNCFyae8akhWd1jnkWa2MkC8xg4uUhbji3JcsA",
  "key45": "2xw4GZgsxrusQncME1MHgFZF5655RciGtacub3SsP934TKn4tis7ynfggu1KWijowjgJ54Ke1YSQvF8oB16jLAeB"
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
