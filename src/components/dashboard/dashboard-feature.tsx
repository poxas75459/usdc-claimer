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
    "zoqkctGEEV9FcTQYrFQu28dQyZr2abzwPGrbMD6V6N8q8B4rx97nALLsJWuJLpvypv56zueaXHyYkCYa98ouZNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55c6twt5qrE4m988x6rMRkGkhMD7NqjeoutcwjngB7PfuPguBG1yJx6MTUZJ3XHydPHD4fN3ocYRTWj8FJmFvnoV",
  "key1": "BAWpwptfdXaRpihvPFn8PxTp9yyVSMWsEaYhyMoaqT9uUtGhaTRGf7C9Tq9eREpEeb3MRHUCQQ3fNUmrvgMUybK",
  "key2": "BgqgwdCxYtvEqYkNSSSdxp2Mox15RgLg3mBgoaBndiePkckBTiM89saHReEtqY9nyzHANBptFaC1YHsfTfCEKmb",
  "key3": "CE4saa1X15BRmDjuQb9aQc5Q15xbvDhVNLqxQhNbDtRccZun4dcrTFoWysfiftg2MaqP6rLv93qhuy93phpbeuB",
  "key4": "5T93oovQ1coUe7kYzmfVfHRxr8u7et1o5M5KTZnQ5UnTdiMGdtKeZWsUQACcNX71Lb2U2AJjUJrPWFvP79A29Bgn",
  "key5": "54pC6xzgqrN1gVLJBXezTWFZmhgDTT3dD9ZRd1APD4UxKVLxz2EteumXvsjBupwKayAw5azr7Yxmac5EeaPU61Ep",
  "key6": "5cYisybKWMx576CsDuYy7Rbx1VbQzXYW12yF5fYsPiwGsVnXGMa8wSHXeeJFZPo2RDe71kLtYpkuJgHpEXh8cL9J",
  "key7": "4MBx5aD8ZVg38ZpDMLzmT1vcBqmkXyEeXQ7u3sqqjGWidJ9tnqWT4pGakc4GULmmqmG5XMoxZYUXhViXWjYBPRc3",
  "key8": "4MjfeJL68gNnyv92pbNzCZUVyRwnhcTKcD1a4nNR6UvyoSqMotkk6BT8U2JrUi3WTALnpaQzHRFsPTwkqBTES7QJ",
  "key9": "5eh6jsbienne31tubFRm5xAEj392C5mSMXeaXtENPRMbtWRudunRTjUBjqvtNxKyN9ywdt5aETZSaoE9VdrSeRV2",
  "key10": "mWSfwUjvdLdsURQ5g5iEiUdVWgbBGUQXESWBA8wryLQWAQ8vF9PFhdfXdJZXVa2kHMgCNbJeRWdVAhvuHeJamrj",
  "key11": "4oMfbTQqEhLtRbF2N5i8s6Vt88WHUseZUTUTKftHsnZeeZhZB3P6iE472FhEJ9AuUmTvLKcP4SovRRgRKeCpi3yd",
  "key12": "2DhN8C4t5rtk8EjqG7DzHu4qvfPsN9TXsKaS5a94m4ywTN9HnXeGY5uswVozoqGsZiqgA4JVpVVZ2fVFDSm9Vhja",
  "key13": "64r7BGiop93Cz3xeTAhKb8TYxAjwmyvfkjet8bUknrRLbV8ev6rXbiYmJdFWsgnqH3rTXUiyP8cK1ZFNJND7TxDx",
  "key14": "4w98Jne9moKJZb1W6xG23aj5MYF5syM1scgQBoHufvjyttRnfBDGRHMVXN6cqrHZ2YTU7cuqfG4NwSKH6gT6FApN",
  "key15": "5aG41nsUymDJPJsq5XJpuQBu7G6JrQdFcvjoks5aqioyZ5EcYisrqzHA9aTTCgkgfxgLHAgvVs6L5AtyFmwBKvcm",
  "key16": "2sorGtiobVmNhDortgKavpfozeaT9wyUnSLmz6skp9saBBYjkwSr2axxkocpiZHMmWVybk6nrzxNoz6imbTaS3fE",
  "key17": "4w7oX3jBUVLCwuazGBbjK2rZjeeHH3QwdHLTzndXLDa997iHp4Wfe6WaDf1sKNbFo3Z4XiaBzNHJusjMRvoaG2FN",
  "key18": "3tWVA7hXjMipWvtmAbx9sfgDnp4rj3WmS7FPHSUebhnTFkbhMhVyWy1kQFT9KJ9CnT7WVqgu2GH8Xxz6JeumoRZM",
  "key19": "5gmqCN361cbuE7P2WgN5aKzFZhwVTrwgVyDMWEzVnTuxztmiRwzWoa1J9gF6RAsv3PqBoLSx8Cdf4r7Qd6zzZzp1",
  "key20": "3PyECx3jADc88eTjM8Rdc4U8gANjgRuC8JefcBndp8RZ36m1ekJoMty6XUXoXQTx3MpDoEYWiDHZfmPHE98xKHnJ",
  "key21": "5t7uLvdKMDiCG3vev7huDGFZknpHrRgBWXuSVhQqPuCSGm7CC4DvFy7j9Ey3P1MMNX9sFysVayGsM7dZuavvUirR",
  "key22": "5Uo9Ma1CfB1Gnp8dNQ2nD7rpGy5jvjWsQEXygxDnUYeywUa7aQm2KF3aLAFeYEsJcSgvrFNM5RPeiaknsScX695r",
  "key23": "Po9aEvvijddSAmu4D6XXht61F2XqSz1zbDRw7SqhYjX4q7o5YF7pEeYB8XT89ZLYt11WFRh7EUuDXuhL13DBXZV",
  "key24": "4nGbuoM6wtKha2bXJRAZgUQXJkgQWbP7zZcJtBaM3Loy5Xu3CyRUHKTyT3eGMTyJjfsJwKghGoEiothSsTGfrcbw",
  "key25": "2X4c2zS7p7UaHXmGAhhPkvrFWJLSRxmJFvFwKTUAX6k7QFTDBEgnEYjA9zU3NpeRCbf9Xap8Wf97wY4kjuc45jWv",
  "key26": "42BzbcXZUgkgE1pSVMtuWquh7wnk1SNhmeuH61m3km3MBmPuLsgqg4LveMDHciEicBDnqXapfCSiA6AdZwckCRoL",
  "key27": "5Y8WuN1xEnZHKi8heYQNqKeAtwWQ2vucXm8kWFZgaA9QgR6ZPX9aADnVTwPzcJbmHmCcniCHuP1aCRWPKu9hJ4fq",
  "key28": "3U5h2bVaqMEtfvsUm7QnBjYPT2sJ23m6oJCx5QjfcNEytVAaH7S5qA5KYWUThMn6NerVxR98u11HRzfsDoM5a9x4",
  "key29": "nXGSRGNM8x11Kw4zK2iMNiBoxW4RL9Ymy6ntfsB3a1WwM6C5gSxCgj3nkKshFBYoPA9uK1sHLRNSHmVAbLwpexW",
  "key30": "62AUGUdnraJdKbMgQnFr5ihyYo88pmCnyKrYscVzLCav9UNNZpdwV3x1NvThxWFdBFqtLNQSCzgMC6T6MjS41w1n",
  "key31": "5VVdCwXAFdB6rXQGBjtYsseD9V1PqaBxV6dT6nLabWYb7Su8rVGpAhz7E8jbgP44jWRJNrYXJ5URPoi7GCAnWi27",
  "key32": "5DPCPLAr52En4y9kZNdwugwQjCr4zfuFk9xoYvQeUi8D7VysURSgJobAhCbBL8agHttS4n8MHM9dAvPWH6czvDVQ",
  "key33": "ffB7mohMgpBLAveX6wfuKH8n1TSqNpwsjsc2jNEwWiKBHSniGNQxX9foeez8x5k5GCBq7guA8wAnDXVGzCMpWoD",
  "key34": "3WEKDTDmdt2z8fu967VYoiatfrqrC3yKCiQc6XrVYuQi4LSuHYYgy4qPB2eS4n1yYF1VkUcLc7VkR3P2odM4MUyV",
  "key35": "Nj7vAsU123Xzwqta7bLpJ65x6eSDvKeVpSrPCefDhP5PZpdbNnChywv1mmA2xTgCja9p3oq9TrW1CRLrhVrKjvK",
  "key36": "24uffJb554CASSC2AdtAfP2iH9tXMyyL1Sw9knHCVVbS5Acz9MjeBbXMvVHiQS4YVtBtJR6hPpEKtsuinuTcXdPB",
  "key37": "4RMHCyucUokGBSHSQVUx5VCawyoYNguvumbChc6sppdT8N4faBj61ecivFFG3VjYC7P85RfCAiFizQwYfhxXUMgf",
  "key38": "5vCXerBFAnPdntkQbunhvUW8PmPTcoM2t6AoJ69ofdR6xRNUnPBFPw2rGMhJkddMw994fME2hUDsQSSNZE5r1XZd",
  "key39": "59xfXAD5wXqvhUdm3c2ymJigfjbdtgCF9g7taZVRqa2XLfnMdTr5HeJBSMT7vtin2jpp7MJmuCN3gZMH87jZ8rm1",
  "key40": "3Z26HpNHj3Z5hZqAX5vuvPsE5qkRTm1Fj11amADDLThadLgqHMNArajssXeM9tHxDv3H2o3DhchXHbaq5NSSrETU",
  "key41": "5ZcTNigG7HbsFWWsaKKJ3vGE3dQtSKbgjAgaLy8sQFzbPJtpEVUKmQpjUdfkXAiDjNc8gwFzUw7FhLS4L8UT8ciL",
  "key42": "KFANEZx1VMt9f5MRQMShzVfT7fahvEYvr6CAh1rEvwgjFgwJiKdBmadGzuFBJkCw1vrUcyPmehS8GeXAHLu7kpd",
  "key43": "4n1V77HuFaUGqZvVraihZJR49yupgdavBvu7PntNibvMPiz1WDmAE7qq3UKscdnV3wsuXLCUJNNTW8yZ8fQ2nVTk",
  "key44": "3PpJYWsxL5UBDrYKUhGdiCfXzfVD2YAcv9MtdPLqcYAGjFJGnATemYPBadtwNYRFgXDHhuA8PcddB3heWhEzWPbe",
  "key45": "2UqEBVc8CV9gsPBvZUUN49bRb3v5ZB5VRy3XgjTog4HaPKcico3QyNyWFeVTr1svo5pFm39CBqfVj4XTLuL8ztm7",
  "key46": "481uAvfXE8VmAE5rZiX6Pp5RXSMD22FnHWax1WpgrH9p7EUbCC2yYjANmaoc9WQBW9dybe83wxUULQmyZTTmyMB2"
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
