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
    "eazFLUSK6d8o7WA1WAppXLu3NcknhevmZzHRHz3EXg973iX2GvjjLqyZYHzeKBzJcBcErfD9D9r3QP9jPi3KdyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grsJjiXQwq4Vs6nuK3L6Fsjb2u9XnZyG4hqZYy18ccKNzZCnqHdfs2MnGuN7XzkgT6adoazyJQckfLhAPj7Ztwx",
  "key1": "4sHiEiSszYKHzzajFej92iPh4E92uaMdahHiTYb8db7D91iCvNNjrZY7hFi4XWMTJeVv5hBipZeYNjXkb72yU3P1",
  "key2": "54thUczMQ7YJHfvkoHZ9sRQJjZbrbH3m1KR3cpdUYc9TFWfcGdx21CAzd6yAbGwpQHqFSeXJWAUjhvFWWbEJin4X",
  "key3": "yEGBnGtbHQ3P9srbeQgQg5zndNJpnYdLjmt2ZxLXDH6Nyb5WN5Cz1JkZq7Qcn9TxAgr58RdR1zsXZNqJyRDzg9j",
  "key4": "2qharSSMGgG9bi9iTZ2ww12rZwB1PJGcxpDoixaNRfD48R8JnF4Fo91mQzSTXR42txdS9yERLB7TTBx9oQQEhR8V",
  "key5": "vuQon8in9zDSugRVB53EcYMPTL6jKLDJftYquFhu5S2JLFQnGrQUS1ohrhHmwUPPHHWTKHW8YjdB4RomQtWzTwg",
  "key6": "234UAb8HC7YEW74MzKHUw8kNuCjLfVfBG7H8tkRQ3zApmrn5BA2CWrSuiyhoEfbbXMDpbh4vu2wbgHgWo22RHsQW",
  "key7": "5w5bZyLkwJnDvmCkAttQ62U9B5pzqmN3iLZ1abE4gkgyESbmWx6ubpMBYDwm2iWdrshzTbvgLN3LX7pz4X8UwMyn",
  "key8": "5tgLMnH2mcNEWmVU6Xvm1Bi7Vyz1SkSKB6A9czciBPHV3uZSsdnsFwdbbXtdgWfXUHbxC3KYXjhXNYsngD6PSGe4",
  "key9": "52qZh9JrHg9HX4cUgLPTfjRXktfxZrKGJWawmgvXoEipgqpipkFytoenEDSGQEgLnmLxcEkcFaTeq2S7ArxCLtdg",
  "key10": "58MhJEGgX2vB9EFYDziKWaNHQC4o6sXfxpcMF2t6w668pdC3zDfCFkDJWFJXsCf9bgHL9F4toafgN2j6iuLqY8cK",
  "key11": "4hApnRdANTrUpaLmEUVcLsaf7nokkWFL9dyZ2y6rd2V6Hka5WYWb2UbbhN3nBf1NFP498FFfPo98QfyNZPkf9jmL",
  "key12": "42yn7vU8ViKuY9FvbLvy79TRYeHkvNMA22WDmT9eAPSnnr619PScQUGRsUvSK5QHoxwzd5R1ga6pUHxsTtKc2xev",
  "key13": "3gkhm6uPdmyLPhpZSoMzqTZGo4pr4beL8AjrZVejBZ3bGybFsLBCXMqx7bimvD25ZqpN2FCwAXjzs6doVscMCDvf",
  "key14": "4VWJj3vgmPVqgJ8G8KeqkbmY6546tiWDGoz3NSWSY7BPTCNf6CKrvoKKQqszbqnvAyCdPkBgsiyA2mhyQ8avTh3A",
  "key15": "2G9iFqumvHoRXiXtobsSG6NE34uux3Ktk2cXpgXmw6UcquMJjDDjtDPc6gxdEvdEisiGrH7RNH1fcXiibxyzwwtP",
  "key16": "5J5K9u1fJXwUGK9DCjbXuf1RVpExDcApSdPWuHfCZncbKXL9jv4WMuewafbLy1MBkZk5udimTjkRD93QDwv7QgbY",
  "key17": "4aopXzmbtZWADzvHUCbhz9UAqyDSLjkgcoKA5ZFZefqi64vqUz5EkubfbbTTraqa1GMjMxdq1xWfm4py9fkkvgpV",
  "key18": "455SXZWZ1AqgYNb1sC3fbVod1S4Md6byuaJbMEvncv533esJTs7Qnz4Ckoocm12fVXPNyDYxBTiEDfRfy4PYrsLC",
  "key19": "58gNvvdTCBXYUf4Hr6PVXHxTj9vMnrrz2uPgMrw2zhm4MgoPJMosqMN5MhYkizXufRFscJX8xTzyzMeSqaaqDKUi",
  "key20": "2J9oxLU4GAhf2PnHpGMngdrPmxuQ5EmiV1TVNDvw7YJc2tLwEgKM2Vf9Fc5RCHFiqwSdPFCnnUt8tH4CSuwcVeue",
  "key21": "5U1jVAfVhcNAjmsPcGE6NAhi49SkrpbrHepyky6ZzEAhGe1oeoLejc2qCizUEXstoDmrYnY6NRw78fXGbR74RKYZ",
  "key22": "cqtAKbPADA4PuxquDuMQvYfsVdDHgB1jWrLgiPVyhCWzTndabQYuNXtAyzJXrAEACzgNo7er1uZ4sLr1qHXLVjN",
  "key23": "eGPYHcojEsrMMmWZG5c5qitJxkrikS1FfKtGb3gvoPVLH88vimPgvx2yftsEexdH1CJZk8rDDRfnKvHzG59udM2",
  "key24": "2EoLxKVaSJszEkizKM3yoR9ex12kz3TPkUxPL1a2xiE7izCb28nDUUYv1CaHdkNn8nWdyD5K5gyipfQQX4K7Jea3",
  "key25": "4nRHeBD3EgCw3GFcJTi1eHUkE9ujcHeUDYW8QV1uvkUWuJXUYLmyNMZ4vDHvJvcLc82Qt72KTGPpih96cq6MyEEd",
  "key26": "4Td95XfperndRgzAR1MQKXRP55EqRVSGJ3SxYEMjx6zkuvhozaK33ckHh9gt7rrZCNJeBARFRQGoGem2NDdZ63GE",
  "key27": "5YDUxaqy3ywFBAee5VASvQEakRTWub3zQ3RLqt5SRgzWBFpX6HotVtMQncbbajFg6Za5PoGi99h9BFzJf7JZPVbs",
  "key28": "33RJjWtsK66pf186Ys2oqQ8PfPSZHHVF5tYjeHfh73EbJkPXCbUizZJpaM7exNwXUkqbuN1CWvMykpxzHQ51K2dD",
  "key29": "4rtC55qm2ujeLgCTy139fVtR6Cj3r6p4KMAc7PKghS2Lg8Ldrk1j6MNf8amKd9r1ProqLJvgTYW762ei8XGtVrwJ",
  "key30": "3dpXA2iX8RuyfCDqASDtc8Psb1XeJHACq4vF2C4E6vFjHa172KEVJV48V4EAUWf85Nfw4EeKem1gLwR8V4XGpdLG",
  "key31": "2obXUF7bnzQcSLU1gMmq6TZNyPxug5Qey764mHY4p21WHdbqg9rroQSSr8yefJQpkm8NseBd1Vq54i15rhcUugg7",
  "key32": "3Bbaz4ndWMG3Pjz99r7s5jDcjBTPNDVYKWaaFaJRAUSjb5SqnsGtaJrq3X1MBzvufnoCEJRz3EKP6tupkUbhKU8D",
  "key33": "47qMBb9VrMdzbxSASmA4m7m3cVBFcCZkzhotb1RmZ9zbYZwo8u4TTnk7uAL27UXyB6nYbizLvrSgDTUnyhCcwpiu",
  "key34": "QCw7958vhW5QaTUbj4H4nvHj98NqzCg8uzVPDoGHhFg6zZXE7aC4ZbtvsEbmTbReXJc1ReUfMDK8BpuXmWAYMuj",
  "key35": "D3Vv6vb9YxKu3oPuDSkANJxeWsehKW9EQs7ZZdXNtvTSD8nuY3GyHVXiEWYMJKWX6krQFXDK44u8bhsHWVZrRHs",
  "key36": "2R9iEWLGf7c5yGZMHiWmnCT8nkpgvxmwXiL3mr39uYnhF6rjRsdnYagdXEejUbMJHvKzK3keuWMRfc1N66VY4Ccg",
  "key37": "FNfAHrKVuixk6AgLzxRbnoxMmcsf9ezTFNsr1HLeDERnpJ5nfkBHLYMn4cLhZvVXGRzgXj41VVYjKqxk7m7xZiJ",
  "key38": "5i6GbYtxrEPf5BxLCZTHRwismpkGYWYFwmvkhJ1XM4GgrMicqLJBd6piZDADfVF5H9AvFUnJa1RVEtr6SKidnf41",
  "key39": "4j1X5dvQ7yMp5HBvNm6gFXKjHmsyV7rTg1zkfUZeshUXPf96Mjr4pu8TDUGbQxbicVP55JMMXsPzovyDz9PpMXmY",
  "key40": "3gGRnVfkjgab7jwvxEPCUNkyYHSMt6TowgztkpGzbBUZCdSoR1FZWwW7MCNjyCqoCbLXymTh3c5BzJsqmnEUNjGP"
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
