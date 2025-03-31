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
    "5guDrrLp6TF8H3aLyY9X81uiknuPsrLXDNfbwbUeKfssrftpVrfmNDBk6yXJEncVAGWdJ6UiA8t6Jh11ZEF6cQMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7G67xTiAgM4vEPubcSq76UCFZv5NvWDpnRajNB4ZfzmZYsvdX3ah7xitD4HmHUSaYLoUpR5WSexQ5Jxe3Yep2Y",
  "key1": "2YTofbMbukYUeHXpvXRhHtNEUPzc6mGE3369z2kz6QLH4GQUx7UwSMEJyFKt6kRa5KpFNXPquMDATbaCa7xFr2MS",
  "key2": "2ieyjgpBYho24biAGjmBbBe2YWH8cTAD4bGjMtyxr56tF31zKg353kzpfyw4ThihjFarpVGhSAKdN83Ze7X1ikvF",
  "key3": "2RBKpS2FtZVz5drobazFbfNQG4E6R2aw4E5gXrnvACitV5BfnCLZ7fr1msRozyxwnJXirHdAvT1ns3yzb4W3ra88",
  "key4": "5AQdE1Px4Ecv82GEZVkwxoXmfau7cg6Dpo7NhHsaTqTXa1EHCKe2BuQ8XLYkm9rNuyY5eWN2SzXoZkTFuBJbtJDg",
  "key5": "5skgp4Hd1L4PjKWg2EvyDo1dK2erhsA2CifqpE8UiZpw8m9NYg1RPdKdksUo3U9ircLuEf2EhLUN6kvfzDiJ9sdy",
  "key6": "Vy61ckyPgAgnDGpjC5G2LcxxTmVHPLq6f3PmRWxB7vwrNZwS9q4GjUpFvWK6sW8NzyrWPngt1YvRj4i1Gj8B1FK",
  "key7": "3hDkjZ8Dwg3LVMNVkaUCpTbjspxHZSmWmmcWzmiLxAAxW4GXzSny8yfBUhDQr3nRmLrFeVByEindArVNNvXeZ7j",
  "key8": "5nqTbfWK1PN2xz2m3oj6FN5MmZUWvrxPnXTHhmjEJBKkS4T6tEMUub5DADcyVtgxG6tUSTYqzp18atdStpdPndri",
  "key9": "p4VwQ4XcyPGRjAodBZTqqcyRTNZL1zWE8uhx4uVcLVQ75mhn3W9NSSsAsEhR4bafP5hVJL7SgeTUDUsW9ausaEs",
  "key10": "4DUVcUoYvASZnbXaeZnNdmrHmrh1TcmsXF8E7ufxaWCa4Z4tqvUMqWtGp5BSYhKZjVBbr7spKFJyWxXZxrRzSJUv",
  "key11": "2Wi8Pte9SqyXqoTWNXFmDMNChGMh1dFzDG93FN9C8UbsEsL3p855xMPsPKJt6ek2QwJRDD2PV4pFfrFjQShULpv9",
  "key12": "4eVbVfgXFk7VqhnoUgxHbr4tVxtmkfhf8iujWvGSyVxE4686m5eknZNBKFBbnVYfbGxNfGazTAEFdW5cPwZEfYx5",
  "key13": "35omv3KebJy8iQtUoJqxdKw39t1fGWx1Lno2neNTdQPQEXHGB3diWM2i4H4T2q2y3Jf1ZCXU6Ddbi2HaNnqTanKk",
  "key14": "3xBzSacbCdF4wse8C7hnYsXv4jaPPpdC5NfExb14rR5ucirshDN8k8bKCfXZUSn6XSfKnRFYJPCXbGiVHa4wxLZf",
  "key15": "4BCYJpkuq1YAxzfHVgjVEx6DMYcro6e2GyPE7GHeYJCg1Jxgu1EsnUsZG8foo6FhjVJynCDK9DJcdhBbwEZJe6gm",
  "key16": "3c5TnFCKGJJsBgnanHcAEtfxe4ReCmVLwyreuctQrE2TszGnCPKv6XCurHWGU3D5YBqrHLFTC1U5RtwgeZY67g7L",
  "key17": "5e485Qpp5DLWwNxww947ipfeLaZPi51fRy3pCJDu55EYZd9yzfJKDMgQdCXRnXa1LtDPsFTa8s2ceNv6QgWi34Sg",
  "key18": "3p82PY7cEv5Fk5iSP5gEw9U7nypLPCxRqRM2b34927wRuTPqGCEp3VYm5VLRq5Y2sLffuXT8w5CiNtWPZ9KfzrMq",
  "key19": "ZZmvbjKLuvqKBDUxbe9j8xyaK5heMeeZ2wjg8VU6Aqx8cGeiEH8QKyMRduAWtAnZf3GEKaRvah52vTEdjWaUfZu",
  "key20": "tHL3A2Wgrp1Stn9aqz48nM7AA5ZquDVcuCmaW7SHzfJz9m8gipw1swhGbFEEB3bvNL65BVmuvhRdSFRBmKUzbxm",
  "key21": "4YSJ8ziPHoW38Mc1wsVUoGUw4tyzGoTJJ45g3EwyEzkn7tSfvXnznxRWtPdd9PRv2tavpAfuCUUwU9X3ZegnhCML",
  "key22": "2pydqxJRxDPCfrzD1XFozBRWsqBxSgyy5Q8mgRbZ2AM7WThTp8sr8mPDepCbXf9xrusfHqQuQtT5Hs3owo19VDEa",
  "key23": "25MerTTVUTddmtEqMD1SFt5tcVdjmVtEi7CDfMcrDrwFtSR9vRrxMwUFghWjueo1DJHoQdm4MAcTxZaCa8n6ZBG7",
  "key24": "NFuxRNaGkHWev1MQ5SfhHTECBz1RZedAeeTXs1uUcb88GvThk5nrz1ZrEosc1X6J3RC7p4VoA8E4u6wxxt9Mmjg",
  "key25": "5XiecBPr6w48chkCh6ZkTSxqYhDZ7kgsSTMg2BLaBdRvSYnWjk1hZSMRGze12NJYpCKarGeZ2ddYZPQLu2WnJCC9",
  "key26": "2zEHVYzmreYREK5mZQ6DtfC2gawUVr87sBjp94bumCjgvAAjiBParnZ3NPqVGkXxM8LB74WdjZZZtsB2U5XaQ8JN",
  "key27": "61qXg6yiAnqeLKAvscoHVy1M1q6qcQwNxfjFZ15aLYKxMXFzvaY7FHseTt8xi8rzLoHYk2DC77mtQFp7TNmurRL5"
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
