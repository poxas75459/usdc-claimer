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
    "27xWuXUKKKMY7f2kz69Uze4tqmhT82TimdXcdRDLVwMPs7QtQRE5Bhiq69qRb2NFhBRsdhNc4TFXqXwkSH93ndhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kSknGoxLBUGfLxdxgptnqDVwzKxPBbApVGDtm4H58xMdWDxG3Dz86WdAz11g8j45LEmXpUsa3QVPcKwV2oVhpMd",
  "key1": "7KPq5z54WhZyjh1GgbhmBxJVKjXej1dEXZBTPaHrZZy5jkYh8uoJEu97XVFhscHc2Sy14bBnY5PVwzyYvbHXQDy",
  "key2": "5wZMDN6WnUNwDHS7tqP2NsTHrECAT5EgeU61MM5ZuS1DZ4TSg7ExiicmPH966BrAG8oyA6xoP5QBxHuLFDSBFEpv",
  "key3": "Wm4tpAWHzvJc3h2A2nryBKAEJvmek4Ne2URpozyHSWvCQjNrNWEGEMSbrPyMvDzZxYZBSE61EgCdDeX8xcKfq3A",
  "key4": "xmfSZXZvjvzXocemJKVcsQfXhqtaoGWTohgDeARYC45gEaNjEf4KnrnTCcPZSkzsKx3ck6EJx8S9btFogmm5oHW",
  "key5": "3tt5zTXaTqsvvX7TBu9djw8S6aTK48bKEdRj6pyFTtJNuhh8iARzjXbbjPxeP7g1om2PuVeQhkL5QGzfuKaamaEb",
  "key6": "jeNYixJ6pppJntdBAqKM91cMN84BCU4n4xSiz9gDC1LNoFezZ5ha9kZrGnbcre8Woudx3Xyde5HHNWPPWuugVsx",
  "key7": "53hhxDdCU6WEdQSw3gpe6LGe6TARxkHXsdq83kjKjj4ebrmWsMe6GVM294NErdkvzM3FoDsBNGfNbgCGMpTbhL8r",
  "key8": "4VTKeWzErjUse5jDu5b931RU4SrybdnPAEzyKmmsn7ARVgoQD6ptFsfGfQ5R77Epmtcjioh3pw5BFYz5eenb3L3x",
  "key9": "3KBQbBk5YdLteXhaRcP9UaPrHHxvWynFKGGXN15RJFKM3oBGE3qVnFY7RQFrqSqkNWKLHzj3jCP39j1sALhsjFBB",
  "key10": "4xucfJAzJmsidm6zT9epW39AWyKbjs8dwG7G4uyxr4DbVyNMDamjCnq9DyaBDppP4qurXgt69eFsinKkdihKD9Ad",
  "key11": "2vYhxhZHyq8XtF7rr8okTAiK1fNm2cmwXXaW1nc9xuURc8fP69ihoupMf6QWVZN9STsw5Y1NCD1wudbPfwdgjpoz",
  "key12": "4eqFjSb5vvs6x4kGH5BwbVubf2AzksR3cf3Xx8FRvxruigc4pTybuuU9HA3qZhWY6DCzfEfRdBMaPhBvDGMMqyk1",
  "key13": "5w2aDnUyi29SXNHbuWUv6HPjEutLNgixmLPHocmzpxVzbHakattxnNbtbYg2L3KcJHQN5kPqygQ8KoYCRtte92RA",
  "key14": "2p8j3wKGyGDCi2DpX31v4oVusaWcHhYc3wUurAnHM4GoyzRbP6Pdntmp6x43NkijBw5jtiv3UsMR9ARtYonbZz4J",
  "key15": "2N1C89JXDfkKCVoth5rofvnhHn7eHWsrmJtkAb13nHN48Lo3vxuqbfp8soQqUetpNr3gkPA7snHViBZPNX3Uw5NP",
  "key16": "3PoxwumkKwVDW8GSQFMXfAQ3m5vHBbm1AscwfPFYum49fNgBGcUw2opoJRgKbsbLTcYCEqFSQRjkU4jsow3zjEYS",
  "key17": "61Q7YuK8uM94W6YfavTpd4ZNyNai7ogpjDPpm6UF5g17DW7HdYWCQYJKHkRk6QxHaCKXevLYtxaAhj8h7W1HbzTh",
  "key18": "5PwPcHtU8iv3FN16n2VuaWodCdHTpjU7gotrgn6Fa9dbusQoSfpJrHiXXxuUBStQtxMuckPKMt73gS3k6udTLCRf",
  "key19": "4GEfizxteesUWDqWMFGpvXe9ytJshg3hJErzq2APK6LKtKnn7u5H8naq7PErj4Yjsgo6yEt6rJ3mK3M971zm649L",
  "key20": "2sCHz716ghCmdbov6we3NZL8axSdzGfqLzJJ7fpW1MwkeiJnwuy6bCaQxLzigRZEQYZ15Fc1oLPqn52x6kJnhhJY",
  "key21": "5NBWR9LEziShve79XBCbpN4RiJ95VhXqGcZ2t2bDUkmMMVUAV9HegxRcPLKdxHfucBVWXfTSv6uhbzFCQ5eEWAth",
  "key22": "4yu2WaovSg5CVfx7nWzXjpQH8YWJ82sPmS26dQGc6WQSXtmx5CErEBcHFkDUamGtEKHZc7pS9iFZEo3w9j7Z6Xum",
  "key23": "3J76Ba5saAoxSQrHumVotwyWb8eRrbWjYLuqiKYanxoG2VfJeZHCbwEhfiDgzjnY49NToZhuhh7jUuT1H3TGUC4G",
  "key24": "vMVDkHciFkhxJ8jA4NWyUuxatBNtLeenrLBmJdUPZAJFvYkcmWoVQW8jh18Wf4dL18KDN35VQWin3jYDytqvuUU",
  "key25": "zHvQNB1kFLeHECx18zmxzU51BzTmfFGStaGuqsNtvxT7eA5ymG5hWt78kXn3fBKzzQRE7isu569ik6vPY8k5yFP",
  "key26": "2B3JFoaf4wtsGepMEht6cV3PJRJmiHS2Npv6cd62xpGKKZDwcpLBoXFaoVpscPvZq4tRfMpTfMkZgPhqCg7khu43",
  "key27": "rrCqbnDSQusFGMhwJbVdpd1M8696RB9fSbAibepeox7jUETQgzXhihBZtP4JLdFbaYvURWgHttAc21cNAMWLFCf",
  "key28": "4Xc4JsgZkb5FYRDPBP2is6LNFC5o7SvsiL3r4fsAqh33wueH5U2ErwNK5FhgX8VKEjQU7NGKNtSU7o21W4cdFhu4",
  "key29": "6SvECdMxj8p2HE9QCosFXxpPAz5LB9PwbcvYqJn6Jt3zsKmv5Y92TEacVdvFQkmSDQvLhmE8m7EyjMweKRC8UmU",
  "key30": "2noMqJ5nyD9kbjdss8kbv2KSgQHmQUPgwgLAYRbBB1cXnaf9RYDf7BxeByzxg6biFpXg45YpPSY8dwQoC2XLJLxf",
  "key31": "5Pm11WnwxBfX8ckjLKVD9CT9N8Qoc5Krx9UyuHNn4rReqaztv2FfbG4yT75scpUndiWbjdiz3wdbgspkdhGHxQ1K",
  "key32": "3CXCxVWtUdqJT594a3rKb5VgUKSDAuPqM5n57rXiBXx2Q3np2KtWbxNhqX8LLdgaUTqpThYqxssEGkGQN8osvPVZ",
  "key33": "2YvrABXnSUUQoud79WRT5KsXDKkJM9BmQH7822BFkPm2qxusQscYUJvKH6hUmSsU4SWqUQzEByDjwx97stQRZHmD",
  "key34": "2xD6QpeQjS4o4sKqKWuCkGsNSRYFFdVvnHM2ADb5D7rTCZvYnXhA1gnesemdFUTt3CQPq8U9RavGbHC32GtjRnf2",
  "key35": "28tH4tvStnbDW8k2HXAu9fPk5xE1Nb2BXsqXy1qDxKAeVMqzTBNAYViWZ3h6ssJWLyw4wVXLXtjk8CVtm3gXtQom",
  "key36": "5yUSw6XWjR7dh1QDZB2LBxtnvCYz1CaXDaBs2jKgiLot3L31wEh8GDBNpBepGx8TzrPW9H2kHSe1a7DZFs1FcG2T",
  "key37": "31hZdsKadaN7z7c2UcSmd2ktZ85fmVd1JApJ114RFSRue5vCEbbGE5v8bt4bPsB1hhxo4Y5JuuzketEyCrtyxzUh",
  "key38": "3tZmPNw1FpY5fV88T5LRuv3pWXjX5RwSrgtc4CzrGiUrLWpxW7w97c4FqRLqRsA4GkehnTV5FheKcmK4dgufa1jh",
  "key39": "EFqUvB3i2WUtW12g59XpfmHbiZnioW2MLFSdkj95EwivEpdwnMWYQTRddPne2K7H2cbx1SPFeia7wkKMX4wrXc5",
  "key40": "2XGHYz3UCWV7hZb3e6JxrAWtvBHSkcrx9ND8aAgZ86rhzG9Y8vd2dVzJYwWuqZEk55M35VCi9g4guC8wWbECMaWb",
  "key41": "2nLfKzMCsqvLq7Z3c72ox8m44MgbDAu7k2xQk3nFFyVXnNL9WSpGnYvhGGzc1iy47vxfPgxtHzshu8JZYjdAYfwS",
  "key42": "4Q7Pha21RUgKjnLjVJuHTLMSSZss7yo7y8KdwEKQYTx21pky3TF6Mv7ZLgEPkzbW7c8jREMsYQfxbod3RyQu8VMp",
  "key43": "2wSBS2hExTK3AcAzQHobq6PFfbrHQ3KWw8HLxV7WSVtNNbz5tGr4fexmoZapb7FPmHj653bqcBdJs27YvPiiAVK4",
  "key44": "5EmhMHgCurSpFdHhcpG5LT17pWknfJK28vVwMgJaq9eTmdfFPF14wBdbqbUakMtLtTqpeg3JuKaxQ3ya449UnCub",
  "key45": "d8KqifaVK4vz6pLL82q7QwwJrNYZP5EYUqviprd6jJw6BKnksA5CNzkQs3U7nBmRRo4RufYU2wb7MfUxamr3vhg"
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
