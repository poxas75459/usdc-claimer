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
    "2HkCifeXT2EudYyCUyLDb7SiV7q2YtgU5irVHtXw54tXKbfxGR4bNT7sWvn9j86JkA8ydHzfchHxBkXyaALy2GBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5DnyXNjNyxkbYby33681UNSqCBhRdgUDVVyuxEg8BKKh8Dmb8Z82qKyb5187kgdUR7pna8P1Ayxby5BugFeBMf",
  "key1": "3xskxqLowTAeXED1N1bDDo2fBo6WPREMxAhseoai8qpxXpSYcZM6pe1aQV891BUmHFs1whwUi5RrmtYF6T7cSqdU",
  "key2": "3D2HqAmJAuCCsJQ6MZVQsrnWbboVHcpTfJNgXHoiMHc2xLnJR9Tukgxjgsv45awdpJA4YAoaaKQfF3z5rptpCfJk",
  "key3": "21cph287en15rWS3QSkK68z2V3x2vBTnhndwRBfWQ4E4DcSTTH9KkQxz29GhtHV2qA4GHj99SBAdNcPzRQHvRE9o",
  "key4": "5ndo33wzgNM1w8YmD5wk8rAyQqj7tkXvJwic8qAuJS8y1dR2SPCTPMg6BvX9QEQjmzv9MkrcTZiUosQPU2TbV5xG",
  "key5": "4h4JZRFpy574bDKLqMv53EUdSsXEvGfQL46XGPCVhKNVm36XGyqgsBPAkcV2dGhCkx9FySft43wEf9mrU9W7HP4M",
  "key6": "3GuGep7wN6V6FztWB8JX2oaFV2ncKsBDG2qhzTjjWXuoz1jtFDcQ65Z69Zu6NqsadaLgNan1PAyzbMeJ5Eey7kFt",
  "key7": "3N45vgA93Wes3qDFhtN2VyoCAmWr4stDjuHhRGcrH3iHFdoDbakJCTaz8wx5pYYEUCPESfKCp5DGrMFM6hWigsFk",
  "key8": "4fx1tYqQvXRLcVb3tBcGykB5XvbLdEcb83Ve7sLQD2hw115zY3Dzzk5c9MiBYeFH9GD25NSnbhzgatqAgMEmMxkY",
  "key9": "4XAm2PeVLByW2NoLjHNGYghYxjXjqxYzayxwFiwAe2pTwG2yuXxn3UUJvRi1Vxj86pJCUf8NJAMhmeffToWw4DXo",
  "key10": "5W6zgQp5Sn3jjzqV2SAVjZCQ5ycGbYzsJMVyqBSRiKCTcacBxBcsULDEYH4VVQFbBDZvtbvBBpH5GBoAYLWfWfgm",
  "key11": "2TrQEj2Y9sZLSsjmivdHvVrejyhduss4AkRui7xJTJeA4UzFDsnPegAA9LPAa6aK9GSByqfyfRVjCaRsA2TtWpAp",
  "key12": "3zU9N5EEexM4hX4cuf64gFwJZ1fwxFFsae429rVoVTFkeTTxYeh9wwvSRmjrshLxQmDbzAN4rqTFaRZ6hmxu77Wd",
  "key13": "5ufryQhhjfZgMUVgpktNJo1RcikR692FDhFXyaF5GBYVXuLNBe8M41rzzYnLkkvbzzi77KXMVDn1B1ZMzWc1NWhx",
  "key14": "31VEKmS82TcbH3kcswTP4sN45FKyZiwyPDiiZHxvTu4xj4ns6qAAM9DPDdQHzUp6NoATGbKMqvE8CzQpkdTxyMNk",
  "key15": "5uaATPt4ynPzMB7Gq2R55xu2JTBouATMuu3doP6qdyYGEy1GktoPqKM55UauDvi51ifnLDWtFf2CkVdG4iqEtAvy",
  "key16": "3JmEu2kykJGMUh8cR9ZrAhJwkPb2BtYAnY6McWYC6Gzm89hQFuukeNtFZvKDA5P8U9MNiC7LsDCGhc8FuajnKUjN",
  "key17": "4Zge7SVUMgs7h1ehaa7f4FesmwaHwVWK27bL3Z5HZkRi9K8RgQavNBFH7XWLfZA89rKNdKK5rDwiWMFhjwbp8UWj",
  "key18": "5QCzkpsmAYsu5HPodN2qNbnqqQgrqN7FJarZQyaUFvZHoV5Rr93CmK3iroXprMgVUWGBkP4tSxzJoP3PAR15zA4g",
  "key19": "5GQBepghW3ZGHqsWHEdJ7xhnBAye35vYnNVeoFewDKbpVe8z4jYW2Ni1Wis6b2poNDAtkptjSFwCFun9bekd6ETR",
  "key20": "4TCYU7gLDRkTXbAyy8TrT3hPWqTeSBEx25dEYwFXE7RgLf1No1ZQfHtNr8ksA8PrJnWdVN8uwg1zNs2SbWARsN5k",
  "key21": "3kY1wDKyWtQepFP2iyCAgfJZwiXuixBJ9fiFF7bGeKT1nfZwq5cdzu4wFGPEGLPXgsehuJz5wNtNWjH8zCUCnDMf",
  "key22": "2mwDfCgdusMD9iNjtgx3rFRziXPHDQ8R2XbczFJiLcVpSftVFdFxcjfbih476BXKronPHhBrVdGzkUiM1oSVgyv1",
  "key23": "mF8eQBdEorpcgDgYhQvYaAi8SWsFyBLesTbHKrcEB7AqJ2JLnuQ72C4r1i1jpQNejDuZ1R8w8yJtFTuFPqmhT3s",
  "key24": "2kpau8q7pRxu7YA6esPR6T7xhu77Pf8tRBKtmuv3wneBvzDvczcJG62vL3dwt5uHMoa922tVuks4HwhWHMrahfHR",
  "key25": "422saiB5i4uf8zs87Yz58hKi6S4iqWZERpp3J9LvSo29UvFu42hz4jEUzmbm9SrdiYTExSHBSQk1xHMCyFN3Vndh",
  "key26": "9RPQQNZpvGfTfuGmXKvEX27ARixo5XijHhRKstTT2T4QzaLVVAsuN52LYHGcL4JHhekisMHa8hbUjEVtWzwhDyb",
  "key27": "54VRUxc7hSWKNKYL4SFnXrcrRxhxKq1gawu2C2oYNoGFqkpw1UftZa2b1odMhuYgCejg3R6rbdPUvoECvaKjGqYA",
  "key28": "44yg83c33Htnvfnh8TyhcHZJRFFvGEz7gp5Qqrcr1VWhn6XJHh1R799rSJeooYM4ZkVrYjYNU9PXhxd6AoRmVm4b",
  "key29": "2jmZx8d3nu9KojRNttuqTSmCbqTKAJNZD9UAdRq4MeiZCJiBNzmWNKUrnhHvHnhDdrTenqPbNmiNYdsVoekRwvCa",
  "key30": "EejuDLXLHk79HFmmP2wiLutKHD5Zc11WsYE4eWGZ3u1sSUQfGtdNnkce2pV5MCmhw6eboP7whfaZLhMNyzHBKkE",
  "key31": "5vN8MEy2Jiqwyr56DpZYn6vQyXTLnvTVVpneLDJHJTWe885bL57woRsxhPwJwaUfZ4ic6XwRc2qgr1UL2gGcMWsj",
  "key32": "5TJ6TpJmMiu3ABPXHHttNjCJKaSbHw7VRaUnsLB45L5SjzLKWhcPb8XxqqtEERf2ymjcHWeSsm5wyrQYtb66ssGN",
  "key33": "53W7uJTa8T6XKwUxUBewUDgn6zyZYoR2tyoShuQcoE82qTRc7BLNfyQGzPLM5W7RT9jF7axMJEtNmmQmYXYQLpr6",
  "key34": "iXMCsuR3229TJtYTMs6pau2ux72hLR8zjrvWH3aG3reuXLJYduQ3Ckc7rfGiYEbanHemNySdGPr8YRm9v4ynyqe",
  "key35": "4qgfFrAsLP5Pp37cAGCxHqsDC6B8SkHYby42DJGa4mkBmibnBKVYQ5e2bdmzB915D6MoaVFBgngDt1eercMoRqVj",
  "key36": "gNps4zyifccgY3KVSZjtdnoFEYSJY4EZnftEdLdWa5L4JqqV3ARUVkh1oFX2pNhYuBYjsuxwCC97M3taHqZT4yJ",
  "key37": "5JkRH9twfzu6gLHZkvuS5Kn4gHz35kaHEUEUu17kisekYZHEj2fcssfyheBKqaMCBFTGSNtoByJDzBmgchTdgzwM",
  "key38": "2UktWrhXKt6VXXy6KZqpG8F1LRsHXLc96vnQw788c4quQKJZUiPGXb1AjTQ6cRKjc6X2YagdL4GyoqhbzzrrVxAH",
  "key39": "QgAxq86e85YmMHXZBk42X4nDToCMYYNHQSRyUv2wtM83nPJv1RmkRADQkFg4vHUmamVSJ1ycndwgXckffvsLxWo",
  "key40": "41VGewcfRmyMf3CYu5HTwRPxeC96u2hUBWiNcqRdrPrYB2EdwTUhCaibKxwu2vEJtZUwQqi3SSKPMDwifTR9VrVg",
  "key41": "4ASLtorUyTSPRnE6snAtjfMq7ZUEyCeYYemFAfQiFmSTJPKnBmDiU3S2ZBuWffZspdbfanK9K8qpXkryn2dVgcfm",
  "key42": "4kxde51UiSgZc8DN3Gn1WBATy7BXJCqL7wd7HMTi72P9LSfuLQMhV29LzPp5969FpKbMhfnDm7kDzUzdB9xsPQTn",
  "key43": "5mprxsinrJkXCqwiqVU6Lz9EQ48yuWy7e6E128jQFGq33DM8gahERk6oZCL6c4pbbVsR83XuTzamdcoGBtWXgZNT",
  "key44": "2LFqkPdt1E9Gdt5z6XE6gjYN38P439kb3nVi6VDApFkYpJ8nfkM3mpcaE3G7tUXBSorSnd2rHQXyuahAEV8bc5Z4",
  "key45": "deUSUb2fwPMizdzP9XncMvh6GasyNxKGy3kakKTuHS1TyvpeAhufZ7pzCLETe3LiCL7FJSaxxmTh8Jx8rgrkZKv",
  "key46": "cs7paMg7jwjXDwXZRyZ3Sq35aqtHsQooiPDB4pGfaEnnsTKKi3i978YXLcCpe146JyCMCS5iwZSTVNCqtVLxuGX",
  "key47": "2ZsoKjH6ogJtEDh6tP4hrNXNSza8dVYdYKdvSBGuaQ5H6qmnVdyyPZqHx8AaJuf9tvC2dCsFsweD3Smk5X5xCziX",
  "key48": "4Gx1Ny74Rqon7zsRUaV6N2vJ1X7tbHdgb5WKw1r81TA1hbXPJoDD3LKMJwrnhNHg1nGPqhkDftbhF3FN7seQrMye"
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
