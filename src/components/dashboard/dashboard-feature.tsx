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
    "3P5htGcmTdugA8qRq4vgqRo2CmsU4tJw3uWE4LXd9F8jc8q6f2mYDbjzMMqPsUScZ74debdnr7o1zd2S5JtHetUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QdRrJP4eod5y7TaUNrgARTREcMBMUxWbHDSiiZtNrd8QWsWZPCzQtaKfQGkMREzsB9wMCH7DgvUh4NJJM9TSQHs",
  "key1": "2Ew6nffornCYRbQchSXLGu1AhoD5RPEqS88S5q8MP4GRtFdv9VC9kckmzB94SeZfHAUq999BPYq8Z5saBJDLy79c",
  "key2": "fG9SdpiYKguc3CcfaVmtYUvsG3DVbTHNDaiVpuqHc8pvqmDkMpQEPRR52DCW8ZV2xR9sFzbW5kzb4SZFcFWTzgm",
  "key3": "3MsAQgpYKxegoVsTcpwbFSLPMRonKRH99MDzEbCa8a4B9pzyDXqvyvoRXaRprqqNuyWRMtnUCmZAJN2ipMFP2x6o",
  "key4": "5WBmLStmbH9Mhm8sz4F33vRberZDXyGaa2nSNjgw7rPStEAy5QC5BUbRVceEDiekFcAzsT7VidR9xwkiY7nVnfBk",
  "key5": "5UwHRCuUKQxktsu84d6hGMqALCbCc2BWV64Z1U6g5q8wEhxvacGgDVKPiTQFytkvJUM9Es5dDR6JAmQaWSgnvgvS",
  "key6": "aFZzenqEY4LbD5fE7LzXmEAZhtTSrmB7gRv5ASyUc4i7WiWA1WgAuQWc9sBqpY8H99uFE9GFUqDfwsTggXUQaSZ",
  "key7": "2h22jnyEVYgqgWH2zcXcSm8bVkH4c3gKCqsgMf8oqUKF77H9DYYVTWe8Vo81jctKTR9oZXu7NUQG1xTcH8Nk8Y7y",
  "key8": "HGta2aTwrS5jLLiHp1kUhCF6e1aZ2BQes9DfcnD7xYP5TJsdyzixvxWCoJZ8Qn5TKiNcWYezrujBYdnPHeA3FNN",
  "key9": "2RkekzF6tJuAtPax1nusGiSfyNbDQm81udMkTu8rYCH4APRAH3BfXsQ7ai6CDKF2Ey3y7TkoLjKt9NpujyLnRbxP",
  "key10": "28xPjarwiGii7vgzcj44j6KfjPgqQhWTYtLTYNGa7v73EmCMgConDPNwhsFZpZjLHjDmtKjLzC8zsM7FTYwbRoey",
  "key11": "5yuAaEMvWR6e4LLNwV9MNSUxdzbdeKEmxn6nED3kr4XZKQ5c3EjtKr3UbtAtYh5TpnpJ1mWGBCE1morPRjAxAUkq",
  "key12": "4GoQRwt9YmQTCmwr3efJ2FrZfH8g6zP45LynusW1vq1EJugbWSM9xexTt2WSr7Eo3Pm6AorgBgoZrwm5wFWCbJqt",
  "key13": "2YcGeN8VpMbVZ4XeTSJSqEnRuMJEJmANfRqsTXEqZbYLN4mUfD1rpqAug7HAE5q2TW4xUHRdLoNKLdpRMz4ayjfJ",
  "key14": "2sPXuYqNRay3pehnsqfwc7mV4dEnNxGoQdcwD9faviEMTzztowC8UPbAZkqoECXYrfaJAjrxao7kG2ZBCRdQdhRM",
  "key15": "xTvxpNhQ7BjmW5t1Dqo7Zz4giou9mf1UFGyQSS9iyNYkGtNwz2QiigPuYokZ7utjKoBZJRmqgwuPtn2kvMYsq8z",
  "key16": "4GfkfkeF8jN4PR5KHsdvmWWE4hhpqrgJX9BsM6zwPhJ73QRgZPWJ6LFXTh5gSFuGET5dGe3FLAhfB513XPrUhMa2",
  "key17": "7Z4kg7xfB2Hz43ssP9dGFPXoDJ42EpVwKZSHvtiQw8UJRc7mpxZDZfAMkigRHzxVj5HVJJvLsquSKbjQP8aUNiv",
  "key18": "3zLUFrhADEy1pgsJB74pbxExFzaWY1GgDaZJVPwkRKwY8sXHFvZbPSBETakuGeRwX3t6q2ZL5Vi9a11cWZ1rPMRc",
  "key19": "DhCZY8QSRhxpuPp4BWTr4j55FWADMLdhFAXgK6zPwnc84ewXThUedh5TztMcbqksd8jYbscKxPBKPJq9rTnDP9m",
  "key20": "24RR8A4NP6MeX7EtR2dL9dbGKWVw3pF75yVmkmU4MV3rtZZE1E6D5RQxRjJHxnCqS7biZohQCVKk6zDYnUZ7eLam",
  "key21": "5Woea3Jv8ttqVz71spg1zmUwq5m76akCQ8PwKuTc4VLTHBs4cwjKaHZveLp2KYBYr9LViQay4jSx5Yoe5JL8fhF2",
  "key22": "65d7SJyBqUUJUgEpMEW6crty85Kpkhmp2D8hd2BJ82jiJVR3p7xDhP6peGkAfcSVWoyU7WUQeyw3s8kwuk7EB2dZ",
  "key23": "4725WUdJ21ZwvTAzo4QjB2SGitTDVgbSvRef5o1fxUKRMDyxKM1smDGkbHCRj7k73W47sJHbEg7xxgufFEfujBjP",
  "key24": "5qUZGZNJz7hu1SQbNWcRapzCpfoe6MCRaEMPKk9qLNBe9fvZv3uKyN77QTnSYiPBQ7x34r5gHttmRAgt5DTQewQg",
  "key25": "5SihfptjhwZ3QtBF3eCqnrEdhE6L5Spcy9cL1asQT9dGktphwEsUTCbNmt4Ave2TRfbwyuNpsYsx1xJ9GLoK3rP8",
  "key26": "jV9aeVvNHpWMWHuM6z7RoSHDAJFcbzHio7Tm9mG1Nf1hd9Mxrj3wm9HxEdP9Vdxtb2MNWyVEXF54p7ceBB7PAiR",
  "key27": "2PGNkhnxcg5QZqidbJbrJyoZVf3UZWyYnWuMW14wyxJidE2z6yzZb1caiL93vG717HPNdkjYHFSr86yaYyPQxU2k",
  "key28": "5HXfZ9a5BJ89ui57wCoiFUZ1DTsfxiZ2THr6aXhfVzX5U5zY8YHKeSeqnV5JJ3XoMnNWJ9WaWVxzXZX4bYKu79KV",
  "key29": "EAzc4VFsQ7s6haBjusv9FcRdaW1hgHxhpEAqYHEX2gxNFfGJamuD93DA1ZREGGaFQrP8rzwXnRmV1dVJUQhS9XL",
  "key30": "2bsnuqQxDmyz1ewU8JTrjxd4ox8sup6qCVHaj7zbHa5LctasDhrPqNYbmnmPZAE7GCAowcyz994zgGgWQVut5dt1",
  "key31": "2zhVQDEJ4KXnAonVGxExWT2KYE8xwFCZStQSFJUTyeUVsUPe3TDTtrFaJtCnWixdqBrGuBK811L8ZX7WZJGR3Kon",
  "key32": "3JgCkzzHL4bpL7YpnUXzpnZUN9LUXbTqS1UWGwE9uoLk6JkuiABZuhSskNVpWpuFNEMgw5gNRZoCJ1HqCqWqBkFJ",
  "key33": "3dxB2mX9JzemQEdi2iisNC2NtbNrzhRXw55Nm8sNbT6vaKXDEc4sNjZJ5mwC7T4qJaArxfcsjJBMSiohxwqxcYBK",
  "key34": "Kez4R9nbVs1upMKoPjy1jGoS4b7pvqLFbDwJA9b6xFyTwhpEhsgB6gLdEdWyfkhGUsdaTfMA4NmqTaQbpi3f5YE",
  "key35": "4skfTECajaSQhygghTrHxBjASDo8Nx9PVKSXAZJpfPmfhkk3zwDPHeSRDzfaCXRuyXRr8eeKkrGq6HVMhDBS1vG8",
  "key36": "2GLDdaacnHG2ahdfSHPL4Gup6JSoVE8ZFawwe1SdEGXxoecwpqwYbT73wxMJCCuatMCGT49uoWSPi74qNvx7iWKu",
  "key37": "3zc5qvP8XnCJ47wpUjZVWmYa5pmWSN5QwHDHbRTYcJUinZdJ3JsE3id2aSjze5HwWvPgPwu6XEDcDK3K5gg7otpP",
  "key38": "3jMrEPZpGLBZD34cknmLa4TMLD7rkHLFQz9YSmHibjL3FB5aFp2jLkRQPxVHm8yTTK8r5AoJEKZvC78B1wcxW5cU",
  "key39": "4FSxJwVbhxjsT1wst2f5SAByaEczxX46F7sWWZ1ZbHmFZkyeXW2EPo6W8fTkdwxxr75Uj6VwjHQrWZTS8taLhAKi",
  "key40": "j6KautDmefAMnnfd1VbHpj9riyktXj9ZfEFNLyHKwXXcmZusZXLczgskNyZdTgRt2ExtkZumqgPwoEt3h2tXbvL",
  "key41": "4vHSeaFX37tm4uMMn4zZW1DFB5LwKTJhLsDaPyva1uoKAhXKXA7wpqNDU4GZni2vPLzxkcMfEeEguBC2JXTCJDZu",
  "key42": "gqcURFfEb4jpFwEqaouRa1YNtPJu49haezFQth7YjDWPEJrGxk9gHsts9pbVA9WcMBRruHUPQLWb9S4L4z56mcU",
  "key43": "31NTG8YbfjMeSfqWVugiCBDcdtdhom4VcCx46GRqsYgAQHBL4D5Gm4HMxxLJe6BFJqp1wU7fzf93v2UCdomGHisk",
  "key44": "2NTdVvT1VrihapYJdaL6zD7umxFW2vtL9C4ve1Ufy2kP9uJW84K4RnRBqQGuBmrW8FAtn2yHhiDSFb3tNnpckad5",
  "key45": "5J4Jtgo4TQNkwC5ii8jG1yk4NgeJ7v6Zq6Pp9jrreVQFmjKE3LmXq8mVRCtPktZmBmMWadDhuHrDsmfyiqgZj4MJ",
  "key46": "2899XMCzFyFNHWBcxSSZGhwSHZhNsY5MKK6bZGTf7a1suiWV3fQKvetGNCMkpfC2xbCECGYX4DKUmW55uQ49a9AB"
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
