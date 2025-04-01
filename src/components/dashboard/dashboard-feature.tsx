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
    "5kbHoHoKLP87SaU6DwC8usVu4Z8sE1pkPn3hAG3y25teAdx6hEvNfsUZvBHKaEGQrpqtXAdEpUvT9wFhpTj9d4JR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4egzeTvU8s6weeWF3oqQMLvL6CHYk3LB8e6YEr2zxGRMhnrRM256UHrVcJfsiMd4TX156PQk4p6JMkgKah7wJg7Q",
  "key1": "2Te9RpQ54EjJ9qWMZipf9Rsym4djDVu6iqwSSNiZaa9DDxLgYTn67T8vWTQYk462y43Pnf1oRxGnGZWPrbCGFwdd",
  "key2": "jW66gUZt4USH3zSBA5rppPqEH5ksmiE9fWrYzKu8mNS2cYYsyNYJjSaGnnPMioHzDqXA35EhHbwS87dsyyvMf2r",
  "key3": "4zeD6P8aTcVGbhqdWupjbgucaxchPKc3VhZKqDM1hdoQtN9n7n9fjyiH4p4qPjvTNfPLqK4nPr2XdFUTuPod8TgY",
  "key4": "2uUCbs4rFpY45bTHRwMTvqrFqNr4ovqJ14zEV5ZFVWqnpCBeYu6T3ybEuZUW6xZ8U6EP6gwPRn6rbBP2cp2gxNnC",
  "key5": "2igKvsXtsC5YGxEwmi888nXLK7B2XocSUYLJKm7rkTT3n7QvZYrJUmCqdYTW8rdDALnAt1ZbGnY3aqXRBeSMC7fY",
  "key6": "5hYXN7Lujjrbn1raCtc9DMpbB6xDi88qGu9BQvKGoCMoqNH6XZrBcaGwQfpAZHVptA8CCUaeKuJ2o6rWVZo4Ygvp",
  "key7": "6peMedEuyixgJowFxTLCACWtvFLsf56sHPA3iYcSXk3V2nJrYZceD9WoP8E7CFz5nKZNq8tKweAZBTqMwZdeZ39",
  "key8": "2hD4BPBdL5j6DBnw57VWpC6zo2wFVWspQ9uKCY8U86KLJK84o4EX2MKtK5rvcchcbME2qyg8o9k26TmNsb7AybX6",
  "key9": "4SQ6Hk63oKKkKWArN4gzKwV1tKJBCPgV9GUvVPJwRzWYorpPZRSC8wU8MYy5gFdchB4QQyEaLoGKpH2mgz33toUp",
  "key10": "64BPbeMx9qgpjEy7TffeZFu2jZoQM9jcEwYngRkcvEYtMXM3ZBxxRgFh5k3S9HDaSgFTvxzDYmFAvo4tiM3eBve7",
  "key11": "5aAjDiaDL9tjppnMJauMYHk5rwLwhwft6ykTNeVXxRXFnovvkhboVCeNDUkc6onrTseteq9g1KBcUeJzAkop5Gq",
  "key12": "4YbnJBki1RsvfUuhR1DPYBuRTS5z22souULhyTDQ1GBp7t12haH71PyYgNSuzLZgJ4YRV9wFDCRYkoN5PkkbC97U",
  "key13": "5rERxfrhHmhpWj5JqKvtuKzwgcice4c8QmtWeRMKXzJ5dJoZVZjGXrcgXejEoHqGPNkBimBF7pt17jGvdxXVEDK4",
  "key14": "4cb2Ynt7zJUyL6vfMx6HpWx36s24G2BJ4T5ZbonimrdgfZT7x2PS7qgEyRfcfEfjzgbDgyykG4uSZJCERCD1D47m",
  "key15": "4ezW4Smw1TyL2yXE4fAK47KKQgKdxTmph1a8Enrb5GvUZyaRQhwu9cbdR6U4f99uCU6Qd5VpPgupkFEEcXiJ6x8Y",
  "key16": "6757WYHQLbw78B9Rou6AvkYQpjMRFfCQ8K2cESw78H4t4XTFecWNgKCfrTMUcJicYtWtJohNMN5w3DJanH7kBMxX",
  "key17": "3y2S59qXXJWEZK7tiTF6MnVfmwDRbqSBrRU7Kbd42NftQo9mgfbaS4XpuzbZS9aPLMAJ4VFcqJN7B6JPUJvrSDpk",
  "key18": "3Pe4r33haggdxufZyadRSvCYJmER8PEunhsaiCV7fT62HAv1DgmM2CC2t2Us7YbTa6NMEXYassYRGMtpZWehjr8p",
  "key19": "4QNWjrR8Fq6xxDtmo3gXuCdSLQaDVgKAPBZXLdBC5Z1mQRG7MmybWCGkJ46HSXtvGYKbXLpKGCyRm5VWL41Swsmu",
  "key20": "2zpUnnRWZCa1iojAHLGGP9WUCrDbGbhXjNTafa3eu3PzYH7MiaS71XtGkBsthTybzmJjm8T1p5NDtRtbdpsSQ3cw",
  "key21": "54FDvJSGv3LripXNvfpcJnfHfjYfhAypsAVgz5Ry6fWyjUETzxtSPMrqgX6JhDPXjiHV89w8uh6xPZrFeUfVC3Qc",
  "key22": "5hXtLwaKPvbXU2zvoJTnmhBC1UNjtYCwEPTYBRJjaepJhSyiK7fWyyNJdpm43PBR35vG5JZHWbNb3ZgSGdz359p2",
  "key23": "4bPnpKdAWvYpN9szhnLNL6idYmukfbHuVWZv2Nt1iK2hvNqZmCD68iDkVL1ksB8WWVvtN87BhxwQZw1VStQcDaPP",
  "key24": "5e6Gdb7CyvVM4VRboNFpBVXwiKSeHpmgG3ZKeR63EANFEV5P3JLByphD4f3YcyYAucGbLg6Q9qf7Ztd9ZZVynjym",
  "key25": "AbEjAbp2bvuhybTkd25K3To7H4W4vuKWDe5tXcz3KbqQ18V5vDeMbC3qKzLNfzFL7V5PPuBbU1LTwFZnkiL1Fbh",
  "key26": "219Rcg55C5oCN6RHCfNLYxtXyfVfxYEgjr6JuL4TzCdnAoyvfkfHXpB2TiW5bBr7ZeCirNK5AzFgWDN1c61t9edx",
  "key27": "3YAFLMCN7VdHB6dLP2Tv156M59PpYePsQCw37bb6UWtAsGCaVTzkDabBLoWPk7TbqmgfxEkzRSJCW6HXuf6Muerk",
  "key28": "4G3b119YzoJoWbwTvX8a1Ew1Pxo6tkRGTzqRov3wWpLEC8PRMX9APgXuXgD6eDCzhKL7uKW4ctKEhb2HYtVY8WQC",
  "key29": "uCpLvPceAjVFchL33s629VcpG8caMp8bR5LUt7VaRW31SPFDFu2F8uRGL8qVQJ24jKRpRkrhLw1kpX5ya2efmmV",
  "key30": "3K4K2mfNYteoRu7aMXBR4poDT1N3nYyFf4Z31z9tKPriPM6e2mRG6nPgmgs25sVSaWCygBdqLx4ydL4YdFQwiGjs",
  "key31": "f8HocW6aNNQjwZp4xuLR6wDK4yxCpyozRh3QMJg61C83oNUuU7U4gvdaVudxeaV4tASv5q3P5ZE7VFR9Zkn7YQe",
  "key32": "3cV2V6AoLWt61Kc6udJmcawNkWtRCdnEATVCdfozYsBRLkDSCPK1iLBGgarsgSD4eBFbB5QE7e59RPwJNAa1qLth",
  "key33": "5xCPBzjchgNngP5epKj9hGDJ83FA8EBCA3dHc7947YWhziDbjRcSdBWqPh8TqwM6jJxgTKk9tFVm6uhYTZaw2jK6",
  "key34": "43FuYEbv9VCrvZB9isCq3jYFSdQUTbMXUXiTbrQJTWpwYbFMRUqALy45DmGxtMZA9s4TM9uP9PtGHCC2PiEmGXNf",
  "key35": "5hZ9eeVwufAaFmdHWfaXeacJh98Y5ZmjHQt4t9bfTfdFfNgd22ceRhZCdX6s4sSWHKgKEcq9KJbu85tDkJrNsiez",
  "key36": "4p7QoPA11xrrk8Sr9paw3dqbGKmozdpZYinD96BfaNeaft1zdXPWDGmerkf8tHSby2eSnd5vmNX1AskCkraCqRmR",
  "key37": "3QbN6pVHRBDefNpkKgSxDXL8oxLLEn5paLb7kpJGVn89xiF8Uwirvvc6CD3vWKHifAG6dTUffMcbvRRfZAbYKJgi",
  "key38": "3hnjqjHWXzPepML4yS84YUd2AGKgnu37FEHW9ApcCXUk1gS24kCbRRdVKmFBcCFoDxHqCGG4bU92MdBrM5V2Nohf",
  "key39": "X4n2eGZZFVr4DBpgzY24Eyv5VKR635jZjdRtBaHxXk9iswnGhASdJ8jHUHkkMRWY2yHP281YrUM6dPNESQC7to4",
  "key40": "4yGuf5QV6F1WMkfEPvVWzGYXTq8Pa2zbnTwmB63iQ8HDDBS9nympurrorNVspWpJfSLkcwCk64Fd2LHG69RQArQU",
  "key41": "2wZKK6tQvdEjzmC4nwZHKj4EKf2rPfpVmDHVQ4ZkSQc7YwC7DPYGVwJJWwZfpMFhASwa7FCXDTXZgggPGtTwJfJH",
  "key42": "3EPdT7swwkSte91XeSzAJA2JDg8Pjzfjmtr4ionvjamjZHhN9w71hij91hZwq38PfYh7yUbz6RnHo5fwyTrAyT6G",
  "key43": "41Di9AvJLR8tWiiiHBS1u9Q6SJs6mdRwHTcjmsa4aHYfFPX435ZXG3WxSiwCQcXLUKEjkSX9MqycqNZ2xop44MAj",
  "key44": "4v872a1523AdEiFq73A74on1zmZk44323f96pxkxSEBBAudMnE3TFopTsRKkwh1765Q2UCMjwiXZ1G9iQayAr5sG"
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
