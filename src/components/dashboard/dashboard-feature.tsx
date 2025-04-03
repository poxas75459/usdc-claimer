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
    "ag4UphAptp38Yi6Cg9FkNA9L6hwEBc7Tmdmck62i78wxuB7vTbY6rvL98Zt28jXcmMFg3UFoc52VGW92hfyaGAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "277tvKHBj6qBw59gGL6RKR7gkNcyerG6QMH47Arj8pZj4Rmr4ejSfse8DE4WZKZBHDV58hPEiNu4quKizZgdabiD",
  "key1": "5DqH5F9TzdRWLuZVXLhbzKeBoaKW8VKdPWcPvFQ53JoQ2r6zAVoTeRmptNC8NwkgSMC8xHbQ5W8EbvEhcoK24fsk",
  "key2": "2jzDM7muTZ2QXdXWPQEheDGxQd6XKB29aXzkD6Ytmx15EBfy1XztKwEu3GaH4oWDVJ1R5UCDYAiGoa4SS3GNPazp",
  "key3": "2ZgKgMHhWmv1Nj1eVM6bM5ZX2vFvtmQXZ4uEvDR7iJbPMMnMLYYKSKouxEdJT64NwX3snhbnNAmuvkkC8VmwAvY3",
  "key4": "515EmyKaUkpWRrCgiXgqfWgCykpWYEbBiZ7xebRq9MHN2zHhCxvugHauWtWikcbFz8KN5kUYhAaPkuGHttEJMs7N",
  "key5": "3TH3BacyqLkUQUB1XhdhDs4fYdtTn8wyKUzvZedbk6s9MXyXaBUFeCgnf8jGvJ26eNvM8VtGo5xRQewiQwmNRFxk",
  "key6": "3nvrpV7aCkuuKvn6VpGC3uaRJjv3EXR5Aj7z8LBShU6JY72c5HHpetGf8brgNbowhJEuzXRtugpKUMHv9vDsPkUy",
  "key7": "4RXeFCFzQREdwv6yw5qZ9HsensbvvxCuWzNjAEZ1iKp875cV3AUuLePX3mfoD3eN3yiBc78vxWBbC6CHAu8GePbk",
  "key8": "4rmbcLCbBou67yD22u2VVnBhvXmoyfgqwtuAvX1CgVMmPmNafsHkKHsgmmLjtD9cF5Pk3mJQq22DTcHTbaJoEmAD",
  "key9": "2wpf7f4BvDERd1PmAnfkuorVVMkTqrBocyDGunBiPePF3jiAuXt78uWgrib5TJiLayKsaousrYWXxQwjR9cKTq37",
  "key10": "5n1bKz7sZwXBPFuNGB38UpD6TqJepQpbbt1toCpJRcdXNQmtxa8EkZYW4EQ9WMDpPQzXeB8K7ounCMxFoJMerYGv",
  "key11": "38Z6B527oqfkb66M22MjEegTWQ866zvy2v9vj5RFbpSm2cZs1JL7ghsVQdcbTNEnPRgsUbukUZb98syTMgHsH5oJ",
  "key12": "57ENNAy4rW9KAtVcSNXSQ1w234oaBzJLEy1pch6FQypL5SEGcKigGpbvQYcLo6k7S5YDFrDjKQF9CrJrySMCkeh1",
  "key13": "5P2Z5xJ25ETwxJZkTU8utA7e4ipxEaw6EM5vrAx4YZt1enET5YVR5B55NZt4bt27AM37Xk5Jkkc9wwxsb7LcnVVe",
  "key14": "4DBMYW3JvArPgUCQPM7ynRJfBGba4qtkwxDW7ib6R2ebEw67UyPwWMZiJ2nE78wo5rd4Ew3uWTWuh85QKU6SgP3x",
  "key15": "2aeWwdBDh2qPV6ZosNEqSNsyDNUS3iuCzGxdn1PGEY7BZHrBDewsiE7iWkiiKz9zbXDiJoGmNFMyXUnNxBbGLtED",
  "key16": "Rywmusbb7uv3cJtXhcazELzYm5roPkCgoYahSU2nMHgCvzFGJUSQfKsTRVhDxNceSs3Ug9uihztih9ejcUaEjMu",
  "key17": "2tWjfL3jDcrRpLjn98znUqJBwSabxYVzvcxTTfii1eEQSJjSJfCXAByNUTe8PxavWq3y789UdBHzej3qMPYkpuj9",
  "key18": "5xa78LcMKCBhWYEqVjxMQXcibf1jEiDG6Jt56R91T8kuNxSToCBHy5YApoQAaALFZSAqBUqbL8XNEDsEmPEPu657",
  "key19": "39TGDqTu44B96TQ4d8NVdaUXGiriKNc8pos9u1Nzac2xYuSDk13b6a6DYopF8ri7ztZm4yKkdJBz3TxPGqHFTxvS",
  "key20": "1mXeoEAJuFumaR1TfeQujC9iYmgxRxBoueCev4gF3ZRiexJuCcrdwAFFR13aoBfu6CpPJwZfoXK4fNGUmzqAggZ",
  "key21": "3kgv7mvLGvMH7t7vGm7kcmQ855WzqfzwQpaEwn5CCfmtXGzaJ2azNCiP24euUDCdEZ4Pf2FSFqMzxHmPuMNuvyUn",
  "key22": "311DNpmaTK6kdfaqAh1PXJnoqtiLvdaLa3sZgKfwXZ3Co3itwnuLoAjqusHQShfDeyM8MoLnrcGYZQ1oW6os69p1",
  "key23": "4bpDgpHDHB7fWv8QmQBoB5zThMpnxFaEugsBQA166iQZXSP4Endfi6vJyvhLKTHtipFqP3TfoeAs4sD9p9U8DXpN",
  "key24": "5LrFRF8bo2ZbENwonoi1LY7fbha6RtJkzyemx8diJDWNoVahRb5h8ijaGVwMkws9tbZcCgFX8sZXsqjfLC4Xb7Pn",
  "key25": "fTGjkEv7C5bJyUnxTnSdRsdqgvXXFHoRXHpxzEykJffJkayn2iVDZ7VPhmCM1jtFFFmwy4thuMumFXCa7d5zM1a",
  "key26": "5buY3S2b4aPEXrGkpjLMnRyXw4YHNbZk3LMu12KYrc53SwomyHQfrHDGU93C9qwTfDWWAqemYRSGN4PvkcGjNf9A",
  "key27": "5veYSMBSMJtJQ13fg21RMdzBYihYgs8XUEJGR7ZobJ5rWUCBKfJVBTnYRqy4pucuN2JNfDiDLWCWES6JYX9UeoUh",
  "key28": "5ucMcrPPHJnBX1vUcHk2u9uSvVyZCE8Pg213YvTi9cioHqAg3dNWEgVwFQBE5NgfFDrKBNQdMtqDhAtWuxw5bUYL",
  "key29": "5ueUu6a6nXNv4mEb6jqmAv1hoFKcoHaEj92nVtstVtA2cS7ykVjtYxuGaVHEvNS596HD2WF9qvBykuxmhEmc27wN"
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
