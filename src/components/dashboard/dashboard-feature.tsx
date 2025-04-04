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
    "4zasmGRUHBsQGesBB2HGYNpVAThTg3vFGvm5Joeh5S3xe7ea337NUGNfkTciW1hwiWmkE9kqJpBU2Jsc1UXafaY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A29gZisk6dhTV4bzkxU78jfsUQiVENHQDPqx15DW3sxRfpyZNdzksuumMLhmjXXjz5n1ddDacPUbpX9jcJuJT2U",
  "key1": "58E6oa3PykexM1maeStafpHPqF5vAWXJdoR2KihnnsW5enJYBgvKK7KWWWFmza2BZBEwTysUvk3D4jge347dx3To",
  "key2": "5qUeEa8kHPkrAtwkqc3S7CrNdNPexgvmHdsG6oe9KYbHnnNQCoueR6w4YAWJRGFcQCp3cmnJNYAXUqkd159TLztC",
  "key3": "5MQPYY31ntSmHZdhSprDmJuLrrcrf432TgHiZcCSSrfLKMThNKs6bmjaQj2PguVxhN97v7h16CCCDv76Pw5GxmqG",
  "key4": "4t3Bcfdvg7sPNqKYi2mrGJK93uWTxtuzBKfz3rPHBcG8p86ZKvdc7sbGEfYKwGBpaLUGaG2CGqNkZkB4chEKZaPe",
  "key5": "5btko4aMhn8wVrxEuVkWeycwgrNpNyHqutQqTUPUMxc4EPhL1nuiDqAHwwznfwUSzgyknaXwEh2DAqxF6xiAUv8W",
  "key6": "4QTLKuBfudjMeUfFEi4U19ZLgWM7hXzAGtHnnw5PbPwNAKV9C1ZFemWf4QyaJcJ7kKhsTsVMXjvoZNKDcf2oKD5Q",
  "key7": "62KTiosL4PN4xyGapXrgn1pqCgafQu4a8JD4Cx9Zq6tbM6SWjy59X1568phFSHkJYwnLe2fCypGHM11NUmmLQwdk",
  "key8": "5wJ2NNai58gsAowwF9JrRshVqkktTnQbJVZCMLuPEymD5Bsfb2GZxcS6BsQWrk11ypZsvWBZXGGb7FNRTv7wzgUr",
  "key9": "3vigQZXfXPFUBJJmUNbMKf1NXNPbuLyCb1H8j5VfWLPj89HAksTTu5Yeg68VffrKf3NjKdqdkAY5gnRdf2AjsBw9",
  "key10": "5s5WARRcZgTVpqRFAqjsJKXuz5n1AyWRc4sYdi7Gpycxou85tdiGs4tm2wwJ4e7hk5ww5EeoiVvGUqrkq6NSvhas",
  "key11": "5TXHnRuCGzeHymtrsuSaB28rPEu2ZzyagS92PaZ2Txbrqgs5xW11SqKCkPFAL3ktMo5THuumhbaXxTwmnDiR4dcN",
  "key12": "3WRW8zby8ZXuiGvRk1txWo5VFkWJeJXX1qua8jF3hEwvFmektcuRjC6tee711AR6yofEjSeFDJNMQkcu4a8nTJbj",
  "key13": "p5D4RyhcKU1EAxEYRzDgJxKsFudV7J4gNPK1NndR78hwLVC5BERQUiENheq2u4fQuRBMrdPsjNNLUBGDRMRZwmZ",
  "key14": "4yCsT1JvA2uPXrQNZ4MW5GAgJuR6tFH3xUB6dQbszesDK5EzZc6ZtDet9s53zkYiBeN3EsV4BEfBX6E7kXmBYX3E",
  "key15": "ZiQV4comP92acoA5urxCmqba9XtvvdYXnYsmTCoA7kuFMSpayRTfRHCbCjwimYwv4kkVj2nwoTAqt84MvBCTYmB",
  "key16": "2f6PQAemex8tBsWVRWK5pRqgYFKHHNo1ztkTNGPdKUuNDN9e3jAaTomVmDWHqizRzYGuzgTZXWLHywPCqyqnSvpF",
  "key17": "3MKkT8zWYwCAa4CHqvTcwJ8YtfFvwkV8nLLw2YPxfjmNp7FDvRQ7BhURoPvBmZsFeHUnrnRWQi7gczwi9LZLNsMK",
  "key18": "4pweqR7TWzdisvUcyjCb5A924z6H18p32B8AkaMt1FjAafcH2kEVcbvnbLHMtawoJQBjaLdt34SUxRFZ1cmGnhwC",
  "key19": "2uXEX93yEvpdfo4dtzcyNgnQp4u1VCnWUPgh6gxHjJ3aPpwyiEDYZrrdQTrihCJKppKWnHt6dJqq1QNBR5XP7Zk",
  "key20": "3ZpZatjN2Yrd3DYKaecRkmeN6gxgM84pmPQDzJjRWZWbD5SZvbZP7f9DPpuPYMV2CgsYoc4w5XLDsJ9wcGZhu51K",
  "key21": "4Eqb2UrzzmddptB32QdS5t7j46JhuUoWbBd1n3mXXtDZFCj88DuUYRts6ayVeykvKtnYucXAdtj6TjouD9DYV8sm",
  "key22": "4QyDg38YixAUP1uJjCmAAownjbaL3mk5tFXLzDaaTnUTBypspAdpNQC8sFKu5UxhakER1HqNWnmX5PHMWi2eD5fn",
  "key23": "2SqgZ2rkvJkKcJbNZqk42rNKt9ESpaHHQ74vnSQmEyJiWmxTNSNkSt6Jh3q1bRr6zsyjUfH5p9cqNG42zCrEtza1",
  "key24": "wCziWiHpT8DzjB34onGVtDK1hXnBPoPRT2dA5kgnVTpLrstN6C9FWCFWp13jScN662Qq1YMSYuRnMs54qF54KbF",
  "key25": "48wMuT6yctsmXhs1s4nSNAEUryncKYR9aWNco639RbegzvN3SYKF3dkPhB9nWCcLY91JN8HuPjBoBkquzzfr9zQ5",
  "key26": "3UHzK5LCUM5UzvFa2bs2DLCKFeurscvzmJpYatr3Xq25krdQEjU7RBiFZULsaZgquUNKv5GzZ6qDP7UBXXFn4CUP",
  "key27": "4rzbubj3hQKB5Nzus17vkTusoLGGrDHNgvZAGjsbaP97qD9N9hj3fr8gTC9u9cXxjkPTji6H8tZuHzi9XRXBgBGy",
  "key28": "4m63s7AXNqZtxZ8ivmc86o3LHyProEK7DnohVwpoAVczsyB3uSwhPcLnpUGD2RmCj6jetSF5LZPFGoeqCKFUgJJa",
  "key29": "5J5v59xzcFPXDctkjEvkGc1nEXBeC2TfJJsQxDTSyxpR1JqyPEmJVcMNZFmGSrSjuL3wEyLpd4Sd61FSSjbRw8EG",
  "key30": "2CodqJtKi3BDxy4vGFNe8HzvBPKSWF7jNToHPxarDmnv8KfCP6HHqxw8FWK1pWU9FrWzzqUhKHttQRBXXyTWShnV",
  "key31": "3ioCEmL59ctk37RDdUfrW3nAJBSZa2nWH1NgkfdRR8QrDWd4nA3bMkFFNW6GF9DiEPVDKkd7moWvSoPWamWiBEcF",
  "key32": "xpJiBqU8x47tq9wUfeZbtwDp1AdM2vLRSbkLyG4poKLZiothaLdDNh9vwx6hbwuwTXBRA5gJWswog4GNVNu5RyX",
  "key33": "4rsAgsCAKDhjfqSBaBXqiJvmY8RJZwBLU1j4XgQERRxrnHjyZWVqMTeBgWzrM4Xf81QuCGH46K1QU3dQHQzNHAH5",
  "key34": "Z9WCusSTioxVdb65T17itfWoMTorvpuWWB5pjbtSXAPSnycxTnPdKtHf9ukW7QHcsinCyn8joyPcFAYzzWMBNVi",
  "key35": "oj8x3HHtf889Br8Bi6f3p1N67DoVD3mEzVFJbQYghNwu3AHh72CrDPBHrHooGJCayx289ozo7DQc33yKujtruM9",
  "key36": "2Ho2t7UXvwHDtwCVBQ71H3J4rszEBNmi7dRLRXRqk7jxoTEoh5iGDorsFFTvt2c1E5D2EZ8dUAW1C45T794n6Yzu",
  "key37": "4iaFvEDdBErBT8cpoJi347uhs5tLF7WJy9xFKiApNKnkDm9MGyCq4eimFFKsdy6RaB9vs7YqvYUj8oFkUdicpdLr",
  "key38": "4BMDvrZVQPa3oWUYdDisvcVDSxWTCzNer4uQUB7gaGpyBj6vyeWzjSaQ7ZqVbozhFHtSTp6Lb13jcX5y8XgarurM",
  "key39": "5HYjG31wMWkKaDmgZociiT8BmBE58xBKrtpzKJcg5BHVXqcAQt6FQNXCoUygw5bXUuiwh1sPdhNEs8GG9TJhE3UY",
  "key40": "BJS8tAHqSPDnAXcaCMXXeVyQqXzSVFkq85q2Csdg18E2tZAsonmXsN3ZVgao2A3H2Da7Wrtfh6ZU3wcJyjFZhsH",
  "key41": "XqABrQshW5ua3JQBZ3KSLWktSbQTwAbEmKJHsuhXu67LMJnVPVPSjPLbqH81FGUEPb7GVZMHhNgbkNFKBJtHmaQ",
  "key42": "4dnDoM97f6TL3FefB8Gn1XujiYsQ2rtkGnp29Bi8zijJehVTSrqkd2gkwpB29Eg6rk6Xw7qxDBigh8SrYacyMbi2",
  "key43": "4dvyXzMMkMjZmPJidmRhUbe3rKsmiN6R1ue1kbFH89yBnEyUHMMPmQFVFoVG1e7teRvunHT1zEVhURgjhLNZSbHq",
  "key44": "5suVC1L6sW1GvRqq4VtQta9edsopgzSLoU8q5u74qNFtppS8vsxtsW2bPMYeJKPpphuxpEq9DizqUMpqLmMTTanR",
  "key45": "3pfzokDsaWDXKTUHdQZt3p55djq3XLjKNAiy9yanCToS7Pw3TDQ7B755cvfLCfwXNK9rskUzdUC6V3FoU7k3RKAX",
  "key46": "Z7c1dv7mnRtB7hWMLywZ5ixrviqWQrU3oHRG4zZBX2iSNDQnkLhxuuvhRaXAgNhNhdHmBGe8KrXNGgnvspvRFtT",
  "key47": "4KDTxX8NxV4qZVqJvoiWM9hma8Z37va63xWisKAYKXDPKZTnUPMYGb2hP8qhpNCyombo55mkn8KBnT7iyn5Sd7Zb",
  "key48": "36T7cZGWdoiXM971TSyUhvzL12BjRwHQ49CWpfTyzJpjrisH3Y4TBjgW3yQnGZgdWca71YUELNC4BjN6fqfUAMnc",
  "key49": "2FK58rJ5YfXnquXp6grA5hPuo7JGKsdnGavWkknFpX45arbAaqaMfk3D6Rm1WvaZCPZMp7dSWaL58zbn11JYLDYX"
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
