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
    "3idutFV5nhesqnxLFM8coBP6ic3jifYnGkVMTG4tQgweyrrJMjeC97emeEFuFHfu8raBU5gUg84EyizVDZ3xwBBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3LZBu9ffiCs3mgKomQUFYNXRBiVkAqp1xc2QRNyck5u9qSWo8Z5ikK3ziqbtbtDA5cB1P9pd9i4fHpcVFZjt9K",
  "key1": "5GSU3StyJSY7mgj9ADVECcmu9xJtPhEnzemURd5EZtZXgEAdbYQVVx3DZxBTgyzZDEExFeVA1ekknFCf7BZcQc9K",
  "key2": "2dU7q6SeKD6Upzu1EMcpiMYb1VYSLDdoPTFNunx8fjt4zsanQmqdxRtuNNgBdzcGUjXd59x9yh8ZE3MENSfvFsGv",
  "key3": "4jQCFCyBnpJmCcMhM8T7bqEH4Ki68McRSYhK4bHDU9DMabayFMyrh1bk1G6aZg2u3BxhTdRt1MxXLdbV32i79BNQ",
  "key4": "uE621t7PqS8v5T8sM5SQ4t5L7WuSyBn5hudJMxebkgJLyNzi1sSfZte2cuVTG4fjM7Zvq8XM6XbuE8btnS6FxZ2",
  "key5": "3nhgNZY87MtmVbTLEiy9jUwYy4fMy9XJBM1Nx9uC1ghVKVfikCy1kwe2j4vPLCnkrurqPzcKoAn62X1KwiZtPHsq",
  "key6": "3bpxW1wc13csryuX2bhr5uWGQv7x9hRaW9gdDq3ToLMYU6Secc7cmrmUVHYTJnuyYD5oSWzuJiyZDWeruruk2y4f",
  "key7": "2SvLHV1mkzfxrDy4QdJKA9JoxrjDXbxFk8u2pVzwvpLW5XGArqkapapMMUws8QTjwkfWGUw2Zo74v3MqWVMr8BRY",
  "key8": "2uFToVWojRfNQtCeM623r7mUjEAj6b9gA9BeE6UvV2UEm69L8aqUuTHYP4P93ESCXUGP8NzwpTPTJMJHtB7NwxnB",
  "key9": "27bGhsDwAF8c7xDNcC5B4qzz4uDzQzJvGktayNkfZ6YM5FgQn6HtgBRPHzxSuQhciB8FzTDPoUEYvq81fuRS8T9V",
  "key10": "4L8TPFH36w2i1WFWkf9U9VkiweAebsqKAfmJD77nUweQXGjzDCUN15r8n5NdQxutoDwFTB4LU3z7MBhzk1pzrRhw",
  "key11": "2zfR5Ri7oiy2oKvQmdwuLzPumSo1RZUQJ6sR8DXB6PHhUQKBXME7jCUCPDfkvDn8cjoPXSbXnzZ3aRLyZ4bR9wf9",
  "key12": "3Hk4dPKtS58METwWjH84fDZcS7bRRBQT2NrDDTkHdz6Dow1DLhDS7AgYspaBBwyWCg1tN3QzRYBB3upKTBFC6RMj",
  "key13": "4yiEfFcU8C6oz3L18vrMEFScjkApXgKtxWDvffwixJAx2kwE9Xh9EB1zCrMFUNGu9DMZAFX2iDc51cv6HF2ZSYR4",
  "key14": "3aSykwKsKZFz3QhXUi2GYifDMBuoPP17p5CJoSvv99ih5KftYZkCR3heF6a8Wz1kDr6bAG2pvW7uAbdDdqVDoocb",
  "key15": "23MMxUPdMMSzGdc4FsKYDmkcs33cbwT8zLgsfy3ub9WGWBNCsfUG3cJb6Pbv7xzUJxq39podMiQPbGifcaiTXYre",
  "key16": "5p9RQs7QDaBXWU1Vc4uhPtrLY9MMovxdGXxjSJSVR3MFgSauuJgy8G9pyKtCUqxZ9ogvbPRB7W67YLyvq2UVQ3VD",
  "key17": "8scBkiZaPh2RwwQry2phiGLYNtABr4xRC1WVpgaJjCbQEJLY1xuxPwyc52hY3Hpd4Viy1ZaGHttoPNgCEagQLCr",
  "key18": "3VytdTVX5T99cTUMqXEdj2LKM3s7tZkk2eQK9342ipybK7CofmhUegJqUPrm57iZy2WnyjVybM55mYrcvHNWvvZA",
  "key19": "55ACCkBs9GmfxL5i2tRoMoBcGctEyqNxQnTdktbB5w48q6AYi2JHbp2cK8mTUNoZLxR32BNNUbaxkeFLDQPExiG8",
  "key20": "4hCF3woSXNAAorx1MSA4CpxQpUEqj6NnX72XXFXDpZpbALiLNv6GCKU3ewQJuazJbZD5b1mbAhz1yaB5gw2HFTmd",
  "key21": "4JKjsNEe9yVYhrrBfzHtSZgz69MsCBo8oN2S6ijg746g1HGj8zEp3AoiWskm71yx28GoKR8ksEavjMZn8br54fiF",
  "key22": "4Nm3Tu7qeGADQK8n3hXUQiehPhLv52KdjiCemZZFAy7ps1onrUyqPqUyEqzo66ZswPP2oWv3YryVu71QAvi1DSze",
  "key23": "2Qx4yjG7ZttBr1n561pgjuwrjUD291mKsNxSXDvVMhvgjJuoHsJU9n1P7ik5BKQpg3NsvzEUHxm3pynhJDmgd3XW",
  "key24": "5tiS6appHQwxvGBf2YcY1Ne52Nj647Ki5tVcbM3kBokXZmJckVK1mJ9e3TeSYYh3esJXcqStQ4AWoDrey584QGL6",
  "key25": "m65VygjTE1GLDETBN4wSRBAqVaRjx3rD7m6usaVCEq8Ehuwm7wVsooDAxvmhA9CVN1f9rHniqVkcMzrAcETbRjp",
  "key26": "4kVSuosdFnCwtbn5iaw6kcB1REuzic3KK35t4xmR1Ka3nFtBGKDQHBixeb8H1kELg7tKxRmDc4hWdh41zZPXt98C",
  "key27": "42D6a3zhL8EWPnQmkQjwWPdTH1ca12Ni8B7sEVzp58AVVnc2CMbVxwGLbZK1syfHXf7GfCRP3LQcaVrsERggARmD",
  "key28": "4Ag1ZpqRF4yBtKwvix32JX5rjJaqT9hxPDMV6sgxFcFuaQ3ouZezZnQa8q3Df4Mu4xdGuqEYFJREK4c8yKRterr5",
  "key29": "9auU1mWoqusWPw4UTsxZ4Rzum2n1o6ADoijzRxkmPK8TZjoi1vmZkv8UNh8ckMXZ3HLWuS4pVuSWD5vNowLeHcx",
  "key30": "SgVvvHM46fTxQMM4rTKtm569MmiiSpRYwppdhmGQdDiQJJMn1iBurhy3PjFeAbQ3jw7cWmBXVxmkGCVtMu9Cqcm",
  "key31": "1oZyXmVFJQZUaKVQ7Xt6yaccbnDyuUQY6UGerbbp5mAAa3mt2mGXYALdVCvD6cjL1nJR1mo4h5sGaf5uPZ2mjkt",
  "key32": "3JsGdq8h5yu7TWfSx9QMTkxkdVYWpRNgitRd5pZjHgMaPm6YHuVreg8CHEZoEmEf9DS2wz97Gp9uVFCT95nBuUvL",
  "key33": "4EV8FvvgAH3i9wDBPNigmNhsjsg364Ba1QZE33rDhgUuGJtCFuCX6vv3EtzbdJPpB1UB2YaVX9pZzPUBu5JL4taY",
  "key34": "4XPQgftNsLxcKWwSfn8PVSvaWtdQjSYoKehjLcjku9FaPRWtm6swzMRqfvRQy3Rfa2p34RLBXXg4Z2gZQhRvwMRh",
  "key35": "4YK4h44MgHkwTroPSpBJxzaLtQ2NfZv5HtKswEn5VmSS755NKAosz5yTmApi9gT8BoZSsX8roDsb2jackwizQqHt",
  "key36": "5r4kFJGofVpcDpoA8FURqKaCKwBWjZKBydzYsTLML6nAZJPQNUWhcSnhGpeq8o8t7BDUW2676XPbSPt1ES39HTTB",
  "key37": "3rq8w3PTJANwGC9fJZ3PxrtU6utWdpWYaFkrVoqMbYz2nshsnmnHEsKPdhHwc6b8tsTXPsmQvJaYsy69Ro2G5M5n",
  "key38": "2ZvmJ5CKZ6ACdPd4cuJyAV8qJN2RxNRQav1eJPL4kdxnocpigZFrE54fE5cGXX4ni7F3Vrfza5J5EtNjE4BwS3pP",
  "key39": "EwstVxSffjPWF15D5Sh4dUazGNH2hXcmeMjE3k4TYA41Dr4tWPoVbv25eyA4ctRHUydnc8QoyReK6HtXTSosuKo",
  "key40": "5K7HdJ18JVTBeJAX91eQaR34BhRxvTGraNQi5KuSLLm4v1RMCCtXis7enjSA8tC7DBwszn7r88MH3f488rH3vvFa",
  "key41": "5govqVhTPDfpjPfyvuAdHhrSraHVqz6S4edbrp3Aw3oHSZnmyNuwMBgjwJS2Y97HRhjrNTwN4yDJXDio4ZV1f7Tt",
  "key42": "3iim1CEfKyqKgLmBnULRESbtjy9JcZMoEDTm1SZRKiDQH2LoGSXdTsC2KSHFhHAQz7V7TRRdyxiWcSV3Hz9wjVNW",
  "key43": "4DBTXLZg5VxEHXG6yFknnbRHjLua2oXvmn99fHWoZNw1GPHqDspknhg5sM5J7xQgNuUBfiZJWoYnbH1AxJ3ULtjZ",
  "key44": "2cJJmNM32wjMP4oLQ6suvbWqmK1tXoq6RqUgCmQrKNNGpvzUoD2YqtMUYeqxMBycZCCNTudTHY6uuDZtkCbDspaV",
  "key45": "25Q4whjtP1Yjc2TJe7wtZqeiddvVZmi1ZpvJrL3VUz9sQU4ZNLUM9uPdtbaBunjaR1aQopewePSK371cjoCDZFxA",
  "key46": "5WERPPrAcDLmY8T3xpJBRNhQxE1zMdDZLHxXsYRwYGEQ3KL6edrUvgDxGNyFEq9WncV1URMZVuLNYTjjsVHmaj5X"
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
