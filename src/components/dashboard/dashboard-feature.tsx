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
    "27bC1pqaZPiHdno6vgwMbDRK3tD2ELGnM8pRiFYPNXCDtjYsu62iv9iPLZa7dbMTdjshsgXNZy5Dwe4o1LKjKeNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2quH3YAN62kov9weBehqhCaPeH2WhpiePr9GWMqno7Sdm1UZAdbDkWhHL1iC1j3rNHGS57k2uBiUZ2E5PvMxMjgg",
  "key1": "4JgCLTzpnWCDFJDzSuKqRuqXmsg5PNZsrAHeckfCXqCVZBnTHiwADrrudCUkSjr6ZgoSETF9F6FzxjNpRVMxuudp",
  "key2": "rzYv2peD8wy8UuZaXb9zDx8g4q8RRyAWAaoB2r8j5vT8VuqZhL31atbtu43i4aiqB3i3Jm86B8fVCQ3Rh1z2sb5",
  "key3": "5r1ikag3WCJugoanwx1WnHDj2QbM8hT8vfhuT85g67Kz58hgNnHhmhaMgp1J1gqDuQtSDBent4b3694hymJJg9rm",
  "key4": "Ky52c1BCG7oQ61GGVPMS2uHKjUQ2UPrGV2anSxy9Vfj9KWJ62A2i4pKjKVSiKvJpeLVPdrzmSgGmBhBp6jbKa6q",
  "key5": "5z3sbtGiJQpRfsimJTTb2DQQjPLpjBpTQ3x4NR2qUeJ7dGcYbKdU1jEYrBh9cHJKmZLnX1L9LsP1C34pD1oKXLvc",
  "key6": "4vp43D2sTBLJKeVT6FsKvAP177aoRJQFZwgndpogGw9VZEELDbBL78FukDAhLWy2U51Ly9KtP3KB5UBMonfTgNcn",
  "key7": "434S9pGZhaGEMUf5GrX2udGFYMLsGsLZX7w68S13KyWfthHtez7iLfxXZmVCh5YU6doBd7FFp8L2uvGMiJtVW45Y",
  "key8": "3mBcWTQSavkD2BqrtuDtaD1EbFsrHuVQ4WxFoEkK9RAMqCCJh5FvJC52ViZ2CKwS4TuyZEz1i7UEuehb9pLawD2B",
  "key9": "2BpjcghairRccGG1tEywRpcKBisjZhz6QENLZMaVA9Wsr1hx79JWo8KKRxpDkkBFzjo4XuLE3A19di6HJ3uttNha",
  "key10": "3xo3v869mryshkKaAGxH6JUsBpmRxC1RzwkANUCkLAyWMTeRpF2KfccFBkPgF7sfaoNBzAeDiPH9961qYiCipp2U",
  "key11": "3FpEwF3AML6dbj5MNVgkL5k695xjYNQEyjyNWkTmYYmuBGrzAa6khRGGKdytrHbMBQMDL8QdXKuX9z5k2tf1brh7",
  "key12": "61txJxNQMeSxjhpreGwez5CfJhjP1xYw2wtsp4s8DidgWVFxGT2aVbuhFGcmTa6JduttvDEa5dzCcxfJztXBt6Z5",
  "key13": "2MVNTW9mBFJ9scQdGnMJfqU175vH6mo4LVZLeBcJGSTp3p33cuJ3c1Rk9KmMaDJfKUrWkRbUisvAF2dZhiu5j2u2",
  "key14": "X3Yd84qSjRUHQhucNvSFMDAhk6zDEiTgShwJPgEEAJVZqdHh3TcrKJxdd2wcsnvH5F7xyg6zf1puDurQunD5e7b",
  "key15": "5cbSRCLdd6ao2QiKNixKjuT1FdAwWmJmhn4RfERjEk1ocqm2UhUu4SdYbsQBFTLM5LALkmsijThgk5WbXYpwKnCD",
  "key16": "5Ww5DtwBMGhvNsSUwF5KFjhbnA4AHkveuSnka3LaVkb1h4jnmVDkp8Y5m1s3o1ye9cHAR4b4425CcDSk3qDcmypv",
  "key17": "3axLyemtoDXewDgkFUQMrEAHqGsPw42PSheorThNBi56yVACwZXftrKZZkCYxVav4wQ7111GwqvNBDB43X5btdSe",
  "key18": "4SCzffKKh6nRq6VkQrMrJyQgNJRCBiMbVzUy2AM1mRNDWjALCUgF3dxSVnUs18oa9hjpCSFDZrkw464y4LJ8HFKq",
  "key19": "41bB5PUEg4sjB3YWwVxepeojcxmMgfUTuA5QfqVisFjwtofSkAtu1WQ2sLinmJ7u5RZBpYGxgyJggTGPqbLZsyTd",
  "key20": "e8hP7hZWwMFCWxNqekrQmSTE5yTXDgG8ANpyhwDtca2zv9mkCmEVqu8WneWmCrUnwt1pnF65vdumK2tdp7EoKiH",
  "key21": "2tLTL7Ttyk8BwuQY1eeHCjNPqmeeXTbN7MzsVTBkWHkb7biAnbdK8CAea2B8GWjmVRC8RH4VCLetxh4hEZ1FucDx",
  "key22": "4sHDpEiuKMDirFaCCiDJHyhYxu2sJk8tKGUvF5dxUXu7FhBKfgqFqhxBihBi57wmp1ttAH4R2f9aHGQikLjLeZJt",
  "key23": "5gzs5HJnpp1aCsgumgJ7S4Ez4xrdQugc9kK2psvyC33fYzMVuyDDH6YA2SLFEzxRHN3CR8r7gMPu6FMWxtwwmTWo",
  "key24": "JbDLEqbcJsrf5VmubW63cZdLat9HdRZqbssyvHEdepnpg4vZZAqhpEerjqS1oXg6ccxZoVQbSdC4ph2wSf4hdSk",
  "key25": "9yhCGFueihHoH6MMYTYiex4q1UxyW1Qz5RLqMY9LC2iKx72V1SLmMXnNn7RA9wmdduoCXPbRakvyvDujMzHN5LX",
  "key26": "5yfd2aJDM3XVR3YqfbjzXYnKdx2Q1zYa7woCat1gDCAkdLK9wwzRobDmC3PmJofqRbNPoknqrVZDpgjNEkGrbujb",
  "key27": "2VtNneohHh76WuSXMcmaFD9jks8H9vLewGjnSNhhqXXTFhbPEouGtPE7Z7h3TvRYdznoibSHcEHRVezXC5gXWH8Z",
  "key28": "21fdtxoLrBtLXi9LwZedhK6XWpYYq7PE9XQhpGr83Ba7mynnaNRPVtt2iG1bDxCH2LDMt4ysLHgrc5LmgHxFscQ8",
  "key29": "5mpFBbtvSX4TThaRfAxuXJT2uJ94oxmbFdWykQ2mgrCTPG9LQmrqBMuDRFQR616SCJs1ch6SoBM11cMtSWWwUPbr",
  "key30": "2pXF75wwvUrRTzzPD2scPsB9VV8SDZsPqCRXr8CfvJJ7cG5iAuNna4nP86CF1cXAEzXe1jK4gj6DXHzN1rdUjdsZ",
  "key31": "22KaBcUDGxEs1y9UqYZPpDicqZaX75MbzBgf2nDkzT4WJmoN6tH3bMYgyUrN4G9F2QGAfEBhVf7FZeYzpAVRMbe1",
  "key32": "2gvg9ADB53nvHxQH1YrA9Up4MkcvepH7gca8XUY2GCXch4kBmNLuvCQxkz8trst3xpMnALweQ69CmcaMS67ehbZr",
  "key33": "3U7zeB3jPyDR4dozuYgYQpzodSkh3LRckZwm21C8ffdYDPD6xyXDaufabRYCkzjHrcfMb8vWounWPsfMuWvHmZsw",
  "key34": "5gxRaboBcyR8Gbu4X9bwAno5yr2mG3U1JWf97BXVGeBDSJoJvEdmWuRAWT6RRwtPuTCqUa8xqMHFGcNz46kFfKhW",
  "key35": "58LvQWCqNgFCanfMzmQFu27ktacXpqdHRK17XLda986AUiSNAxjmTS9hUdhzQGzoJaswe8QJW2xiesF8Jrsum8P9",
  "key36": "43WRxonTiiRMpTShBvb9w49aS7AhXs1zXoi3AUBfxBv6dJWGDiDJRecZj3R3mxE849ezsgEJkwc7yQMob7fos9nE",
  "key37": "3cS7UgGLYs4RArgqyZEguphjcph4UNCHEqWKn8wnMJpgiGnkcMwZDBhf47LX2WSYsrck1pZ5j2kY7Rn672bfHDS9",
  "key38": "4o7bteWuUx5jj31H6JqFEa3GX9DCvsVgb7DGHY1wPddEfbfkDe8t5c5VwWgEL4buseriCnQvbFz94HuwYu4DbkNE",
  "key39": "LXZa3nrjZGiVpK8H2twNY62WHWK5pBzJVTUP7WYat4ut5kkDa7J6KVDkNu11NdZbFVeopkq8HFKjhfRnySsxzWS",
  "key40": "5rhT2QdpPGgwfzuochQCSHQcuFHQbdyXPtuhVTtSerM2RHcS9hsLY1Jk7s5UKtKdWs9JWArjRsobKLr4rp6H7Jid",
  "key41": "4zdGcHAkZnCjWAjSx7a5nX57F5GqZvZBHoGf373ag4cid3Sx6SgkAHgG8iCPNEsVzU2jaT67DMvtzm6Z9bFFxwGC",
  "key42": "3WQS5sb7Vk1JNoTeHeDNv4JWNDJVMvsTbdTU63Qq3fBgLov4b1jb2aNjpFWYCrHUtFtddvq64Z6CFjE3phpwywHf"
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
