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
    "5jQxmw1vp8b2k3kcamJvmm6FYwjZAXqgdpos9FGShBknLDNHTpmqFjj4NcAQjuBAi3j9ZqdWgYGA5NKH5ikgZ2EV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W71ntRXcwhC4EA3oZhThBB4GimGRWaCN7cqVjdHg6vZimtYD7Ug8MZVyb12EN43ZWmEMKqjrjVpMozq4NXfNsGN",
  "key1": "NpwwDxSrmdGJjtLmMfRTyj8UVSCrNAE8dTBNqKjhv4CWSFhh3Wiqj9zT6HQa6s3ocaFc79YXVywx1ky3WXLegvS",
  "key2": "4D5DVXR7P4G39xweKaWQP3csAg2Fjswp7DKHPGcUdPFrxThqXWzVCFyDEcEBRfxBecN5LuMBUB6ufnaZAtdmBro8",
  "key3": "4JwXQh7Nv6YT16Er9hYZSJaNf1yKSmhC1tq3wMjfLkRBYNkdtwPVzGRyAMm1TDDdKCsN4oxhuAfBgQTmBDuVsmqk",
  "key4": "28onbN4xqq5tmiwZawvBioFGAevVc2wEwGafmcasNSbJfLuVNW6A7YgWV9oJnFLNrLFbkhhzvzuMp2Tw9pmta5iR",
  "key5": "Cp6xjbV5qdWuF6Qd7U3QgzuTvi6cJp8QjTv8jVkeh3r9PaBR8UziffJuzRqL7EaNLFWX21t7BxTd8GyHeQ1ABae",
  "key6": "whFmUBesjfNZ5dpMpuF6C5YVZGJjgvrXp4W4B8YL53Bxq7r7rseQvxWhJygdBbEGQ8wLppLxnvhNPGeq9b6wSma",
  "key7": "USjG6GK4jwWo95JbfdgEacjt6rS3ajhdMSZvRtCgfyvh1p2f2RQ7QVTHVb7tPuWTSK4B54sXBuSNfPLmtcAjL89",
  "key8": "5qUg17uyJn2mWjLZRKkCCUG22QMqe6VU8a3NQVgHao2fUmzQzEAqKLVGP3j2orJ1m15mV1WGkzFcqc4HsCaQ4C82",
  "key9": "5GX4tE6QHXD6pXrtzd9mRjus3Vg4TfZzqNy9Ztt5hgheHTdTSKggHVVTgpsHB2VNEVfa4tFJmPYJFC7R9KYSW19C",
  "key10": "QoxqTskvVfdTAi3BDQPGdzuBkCBKviaYqvf8nwxbM4S9mTdYJp1jg2rjnhSYTTaVYinG4sTVfMDgpv8qPjfW9ug",
  "key11": "nutv6e1GvnQcsnuQBwmZjTJK1EMdi8tWSJhSkZ6wmExMrG6PiFQsyez9SPQemp1Mevmauqk5foefRrkr1crNFSg",
  "key12": "4xEVkWiTHFhQpCNDWUTszguoCppGAn9FvkJ458AqSKPJXkg4mhtv7DD79dQowR7W48viGeTAmp8pDLANVm5X8Nng",
  "key13": "4zsoFsZiaTFGkKSm17CRr7vCaDpp63kiTCkTygvQG4sSKVWtroQw4Go2EgPrXp72X4GQHXoczMT6wtaDnskA7u5u",
  "key14": "5yDuVPXLUU42fHsHT8RA3svN2U88cMnrRVQ51wbU66JSyW3SDLG2yfkk6c7vbJdb2jZT22p7fmrNdcGyw1GnD95j",
  "key15": "2aYziaWccsXAw7JhZb9cJW6QLi4HmhkyBBxbikqrwhyyGttx7Ffj2oUzdo85FDYQhgQ5zEDutwD8wn327Ry66eUV",
  "key16": "3724Ex6ghg1ntCxUoJSyto9G5YxpHFGgqAr6AmRS86DbX8Pmdpb53AJZZgmNfJ54UuzX21UZ3co843js86BeMXjM",
  "key17": "3vEJrza28wsvkweSvbmnKtQJgK8oiGkcnbKJhnAtd37zacT2m6X4aqGppgARBQv8YFaYyM1z6en1Z5qjhV6tH1Xp",
  "key18": "7B8VaWstD2L6MBPsCsLXJ5RraLBadVqE3rB7YDvgC9V4oS7DWC48k7ApMjhVcSoPjXBi54kCA1Atv5KQQUH2rUK",
  "key19": "5SM1RnDQHDmHUUFKxD5B4MfGxhdjWL7HVfrRCt6qbpJqKaVZzhhJxVYKFPmpFJg9tyBpq5WzeuoVSS31U6Q1uV17",
  "key20": "35DKGSYpvMWvadfC3jdszF7YzHwbJgFSjedzSTQBUdRo9tGyk5YNCrzryC39XfHcp6M1GoLEShr7KVqy8VhHeuGw",
  "key21": "2dDLdoek3AhJYW2EvJ74d4U4JB9y67gDnQ49ncetKuKuB5QSpwi3jYGEFVRbJAPzuCgRhviCvfrfFieXASQQGcBw",
  "key22": "q54LdgmUUuPHJ7ukio9L8Dcq3XFecDS3PfgY82oAn6jsrXqZnrEjvzXqBAcse1ub69DHcq7Fbe8fGXz1PQaAd8F",
  "key23": "o8BumAEZifP6dA4EFW5xwQtax1gCyD4EqaRt7gSXeTHkwyE6fuCAhz21piXMy9YJkKapvVENcqEFEu245MYborr",
  "key24": "2iTeLE5iWcZguPaBnPq5wMJPqGqArkoWxUHbPHUnd9usP42BqnorjsVx8KpUGWva2TzZYiYU9CCxFWdiGsLa9AU7",
  "key25": "MVq19pLrWVDCRJyfUiFdy2CrJLxAbztTWYQFcuU3VyVyu8XxwhhcFRFXRovJHsfK4ywRL2g1qxoY7kFuKpZHMVe",
  "key26": "2jPrfRW1fkLv6PbB4y6W14k3RRndD7sCFbeqb5GPXmAcsGi5Yo68vseyfh1utyPq9L3i7FdNkBMqevdukvmsD5dc"
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
