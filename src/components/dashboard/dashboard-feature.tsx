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
    "2o6L2hoxUp6444XNmg2bpeKrYGzQo1NWig6CWRwZ8LDPM2jcWETLr65NvkaeHXaHF5e9wE1gzfCLJiPMpd3WKv76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsVBzbQAyYEoXTPgjx4gMinc5LwjePNTx63T5CUCQ1s7VatjFAQ2kUf1V6BnqBkn8kdE4UwDNKKhNzwsiKHSK1F",
  "key1": "3Hp9SVbiwXD8bPxrNEjdsVFQCma3VQ7wWVGiUDyShJ3UGd8NSUDqmGRiC97EUMjb4T8gvJSMPfhZhA526gxoASyc",
  "key2": "2Crhh9cYPmZ8CRSEVX1Rk1eHWirhE8dMoqoC4AJszcm8iLtzWhMJzKqu9hZJNDsswqCNxAUkNo82UGKDuMbBpHKq",
  "key3": "5ULYP7wzp8CFcSE5Zbyok31ys4TkFiTLXkF1xyNNSKphCWH19fVtJFKHXELsBhLkEsFhptM8sgnSceMEjk8GU6uw",
  "key4": "zt3yWEVKbgpwhgyTdhyCgED5pRFX8NWwwJt9LhmtxGsXLGpsFQFg6nYf9C4Yd4onQFF2mEB3v79b7VzThw1owEv",
  "key5": "2bQ9EB2fHmRJFHtiidDRFHd3CCs2fzCJVD7q49x4j2okLT4A2uLPh8zcf1jbqgWiZfEueiPbvJBdLLaBcVKCjxs8",
  "key6": "5dUUDzg2ddSgo3ATgVBQsyxn2UkWUpMFZscSPVf8jrL7GZn8sPaZXJERmBuDu81by1DAWgGP4wJCSQZFbQXCSbkb",
  "key7": "644JQNYFLQ8WaJCpv8BNerXG8swUkvh7Q5mYqPEVqEhW7vkUrjEesz5L2gWakch7KvXgKNyF8JJtFbhySMQ1tskn",
  "key8": "4C4Z4WSxjrvpLHKAxQv8TZbVhU4kGE8nfLebH6JexreHAbD1MJrXTcuc2Pq3ja8AqJ4ZXyeZT8VgYqJAdwDBoLJS",
  "key9": "Zz46UArvykxHFoUCukFs38EQhQyPeEsSkkWVCD3tRzWVLErKshywdX83ZvqweDQpxZhiFjGpLPBb76eCXcyPtFZ",
  "key10": "2R6XMP1CM4P97pMKD1nGCyaE4YzrCRjbyYKLqJC14nfj1z9TT3jMSjEfhfFpZcF722U6mVGz8voT9aKUnswdD6Bz",
  "key11": "3Sp8yN5HPUAVGC9xQxwLnZA6LiW436QoL3voToVzNphnpnRxunbBUmaNi3m8zMKJPeY5YA6Fjg8VrWi3egSEZgUq",
  "key12": "64hsQPLv3EEttnaJ59YDmfCwcxSAZWCpgwo1LYVE37XL4Eax9ugwWN9KjCuQ88HM7nZouBUbngsPXqFgjG4KhPdU",
  "key13": "1iTtHqB6gEtqA9pV3kZR9wjrc5ecQT9E7YocsmpmKDUTgcjypRWhXwBE1PwVdMM9zx3BCqzvpzpH7oYRgaD9vtK",
  "key14": "3svKTsjJQVjLhFMFNvmA3gkHM3neV92EnzFwSngqDLdjYUXanBCY1S8eHhqHbSURieJGT2XuECGZTAR5uNJGKpix",
  "key15": "3UaRvpj668L6S3bFPaMyAMjYnjkuAskgbJjjfmruyVW56HoFxe8bHrNqNYh8gUM8FpACGvEMgGc5ScfDwx3GTsJb",
  "key16": "4ZKBpYpfFDRtg3wc1PGH96cCWPwoAnpbYAbMuwHMpMyN5SzXcxPaH746mgQkJMyZJ8afRAhZdzB2UGtVGLBDCsEP",
  "key17": "22gUEDaaN8ydRbJ3SyQVgz3So91qgMdV8pkX5i6vSrpe8k6b3FDQmkLVbWZnn4TkDbyVjrZzUPDRRLvcGzxH5KWv",
  "key18": "D4EdRXhcsj52zJFe4hhenbLQNbPKwaxiXME5fr7yza2Pk3BmxV7qnawN2VckngGHhLi8yEgmD9WnxdpM6ei5TGA",
  "key19": "4Nfs91K9Cnk2GPMs5vBcHqBhrKWdbvJyftMV4nBNLLeLmmUPY2FbAtUzbdB5VYV2ANXHq8ndeaRRJPnXbPgDpxA8",
  "key20": "3BNRkVyCdWh1QfSJToHVyhddVyTNVtVqvFnfCx7w6KJDnNyzP4efA8FgZ1B2qBziQHUmxurrjvqUkvUNzArxo1Ao",
  "key21": "5WgD3KuHWcBPfDKySFQgB3nyFhuA8FTzKbfGcEbDL2AgBuuybHhtG46hHdhFiVoq7M2fYJdZpPJAeY2yHj4nrkJ9",
  "key22": "8rB9XYxph8CrBUGgyrY7UHPRU67nBtnAnX4H3WrFd7cgVkPZgJjbKRNJCrfbtHnU3F9BbTwaGXz9YLqX7bNKdDc",
  "key23": "4sDmX5kTCrgKrg3GwKUF88FQNySxbXx46JGkmiKtTTBp4Xe2Z3PTPaDsCaCeL3ytTeWMyduWScgJSvFTZVyrukpy",
  "key24": "5AHy4pxyUFCTd6Dyne1dxwFLsWuursSyQy5FncSunsPXReJHxrKbVNwpMfo9XFXh7CTz8up8Lnb1b89gNwMtzfs2",
  "key25": "189tv3a7kuJWwkUzhJZnqrudfLZTDrL7c75xgj6e8Zid3REZMfGXLeiGUb87SxnwggBRFJCLeDHCuxqXHuncVoF",
  "key26": "3wWrMgEyWWsSxznuLpDK69jv2uyeQ8DBmc5KHWMppWNB5TQqR7Nq51hPd2nfanjcY6RtJYVgc8unQ28H3Vbd92xS",
  "key27": "2zFPMrdygushenXF3V8Ph1ciYbeFHq5g1gMvaZHr1B8B1fkGr9aFwK8aQToNWsqhayiLUwfvK9EaCWNmtp8RyJQV",
  "key28": "2DCy33QVShzPW29Hnt33x1QhBM3BsX6uSU1fjxHmM9r3aEg5EgkNQyJNeQZ5QhPWs2rWgokXqiVHLfEfQUK2v2j1",
  "key29": "LW436asnfKAGZ87q6nM9NYaNue4u3snJSn6PrfQdqhbVXKM9VEhzz9XBpbDbbey3ddSZgSJM2d6NhUfpQ7vpr4t",
  "key30": "2CMHv73Bjo8XKVrinWyWAFUMPkVbrd21R7fASBnAQ9uYtTpzWzqkA9KVAQdZSXBZ2ur3pKA8j5urGBjDKsv8zdLM",
  "key31": "3iV5ju54aY6Rkwb6NtMqNmYBAA37vpcQLXAq83wpwUxtiri14MYPd2hycPU6xcGLGF76oSvcvPxXRUeaQYBgUnU6",
  "key32": "vgD8PKBo98frdPdf5HDJXNuLM7tLXvsEmLBcUL6L3dte4juzR28H9zAmbUfinAnrJxdUnkN1U57juauAyP8tDDv",
  "key33": "2pfeU742kdkQKNMpPfcmkuLx7vD3GqdLe1jnzSTdWXZ1z5UoD1C1hshc5ukQ8ZKdeaWj4Q6x6VBdiNRc3xhJPHGj",
  "key34": "LFRigHFt6oZiFZo2wnTWAZf4PpeggEPGMPcYPNZz7pi8SCRjnAvTMnnb6h2g6XpJmCZcPdzk1Zj6hmU5BbV9xff",
  "key35": "3aEJq4eWypNK9qLD2LWumox5BKrbM434fDmyAbCmfqCcEQkEgwwm1UbKsod6ff4ToJYYRBz2Y9jnc8DHhZBJ1m8e",
  "key36": "EzQe4PD4PHq1xAnAuGYagwMmJZ2wWAmCWmTeQHMydFwr7WKi255VqsyS3WU2JeQENoHJPoFV8LQMHmz9GMv17L2",
  "key37": "hRCDsXtyxYBL7ZFwvXQFeasVfJCH6axuUXWnvvtJRjzNNMq9X2Qr7fiBBreLazDcdQJhXxgtrMn8vKokV1QqZMV",
  "key38": "W78BoEkn66yz5aB8ybjnoMhmbNkFd5CWc9uk8JVdGBiCCCdfCFAZcYBGyKgndDVrsT5rSLTohvEByjm3SH8jkgJ",
  "key39": "5fMQMVN1c1gXosbWR1bPCEUMjfXyWuymRMp2rT7N82wArjC8eAfiYWuHBFmkCEEovw6N2vZ95e5v2mC5aJuwPKeS",
  "key40": "3CnSUR7UPtL3H1g6ooWiF9i43QB4hfiqvzYkL69FeH3Nwg5b4Up6tc9zafP55ns4dML3GHHSwM6Wj9xPzj1qwpNn",
  "key41": "4dgxcmKAp6mjU5NPC5KpiPTESqqXRLhEzHrSbSMNseDVGRFYusUA1XwZ8Dget2TCeWmpxNS5DBUopdw4o5iukPEo",
  "key42": "3qRbYoFkC4MhVrZxuij6D2nGS55Vz54bu6F7dDh9axk6v3Qnjcf44mnkduCiEebCt7m5ApvzG5tKXR4o4fZKL1qW",
  "key43": "2N2rcNu2JyAE8ijcFumrPZZ9kGrqM2y6DCCa3VBYx38MoT5W7AP96frbz8St7bW3f6wnFuUzk5eRAEoAJwykDHsR"
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
