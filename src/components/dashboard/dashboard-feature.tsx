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
    "viVDXLZ87CvGHvMXctcZSLpgc9NNqf5Eom3TSyBjtcRJSHU3L8C7wkVpRBKDkTc2ZS4VjZgsK2vgXoqLzwR3ZWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HxgLkWiqoPqTDYqH9u28rvxmWn7fSstFPCptGDrDNHhcrbGK8pYP75R7YveM8GwRRE2cVP3kKx3U1rdnuRvBoU5",
  "key1": "5vpC68GVBjTN4hGajjDzYSgRbG74yX7XGKSMrhbTebW9sUmFnMAKWEajiAHZuLCNohzUfWChcMT1wUX3MiYtQTWT",
  "key2": "4UXoCkmQihRqrZkbibbcb3Y8xLXRQbKpDta9oQ2a9pUuBwgNwqXAASDYcAJyqTm4jNx2LhGSaa443RhsSc3LaibW",
  "key3": "57Z2Q6DnYYeSsrZG8aFWfoBhBWX58xCDLUEscTPcRXBiNvvynhSmgB544QDgavcKKcDSW1azbnFQodM8hqQZV4eP",
  "key4": "2xan49nab4vNuDX9J41BY2rD2s89J7rmMK4qahXgaVtX4vLRdCMZDYbXHyu2FxGSKFEWeHEGQaSLYXTFGR9uVGa5",
  "key5": "4fZDsJyUKFFcRaoEWx3DpuQZWVqsF2LxykdnMq1di2Z1CxDi4gmBsbDpHYPt414JMviGzjshLY5sDmHaQxPWSgkA",
  "key6": "3aCHHMhjNgducGgUZ9zRNGnGefJu85BGZEYrXvR5jBRLTh41Yfo3UqujQBx78CQbUaZTnBPNS8Sq6M2hSu8yseJo",
  "key7": "5KpeYGiY8ijRSwmjk6Qkfy6TgGmQgXn2VnRgbKB5NbjAG3QCdJde5w3rZAo8GWpSMFoFpc8kVt8vBLQnsntAFX6r",
  "key8": "37bob5PVet4q7cv4gQzZoVUd35EfZbjHVffnGKLuKhW7omvqDvqLNnuUBQXhHKmrRwBwRzy7ZmGpjBLch9rrUVoQ",
  "key9": "3FdjufFkmms4e8bYPPZqvnBrigsQuKFnp5JtfLC5CUwMPRgUrAmTagzAaZexF7zDRJGRjqUXDv6U48dHyLhHdtUu",
  "key10": "5yqiBZsUUZ843e3XPeaYnb7ErfKuMz3nce7nHoxrGq3VYUEQeut2wGCJfr1ToNrh3VguPu2zXbSaGCQXEQ5RuEYS",
  "key11": "2vLea2NCjG2hk7FsZKqJtkkWj62thV1bMfENVywwMwNnm4NRALMDbTrxhpAnzvF4XfELsjLBq1YzZu45AK5faPNo",
  "key12": "W1hDHi7h5GVjJ2STAjDrkDjbR8vT6SM37cVLc2JKh2QYkUa3uteHqngNGXWwrsiCXfPpKFoXu3M5gr3WL1yBW3Y",
  "key13": "2rdtdq5weHGtdbRRZVTBXTmhPHHuCpbpxZJWGBCQLfqCFojRqzRUpqYmcbWTHHs82bfhBTQA2Q7czoFJqej3Wk74",
  "key14": "5jRdkSB9og9sj1Fg8CJ2dPuVC9XPR8UFigiusbFXUvm852zF979R97cWkqRBrbm4JcRj62BDnJxTUchU2z52fw8e",
  "key15": "2Nxv35Wwp7S785YfcoKa7P6cisjJyEzviHLVhqFcsaQXm7nrargLnWW4H5m8FEcoXpYruJSPZ2wbir8VyPJ4dc2J",
  "key16": "YG8qZhkhhNb1Dpx1U1rWPEeW3vwxr8vmFZnhuVHS8J1ius8WBgJtUtP7eqm17zyJ378gTqdu2guPTnhEBCM9yUe",
  "key17": "5uBk7ZbfS59geeY6mjX7RR2TYc5XQYpTaLTPTPfYAPvzLsi2ccPMQLi5KrXVrCzLGtryeUT3FciZMafXg8Gqpmxh",
  "key18": "2ArB6Y2D4XNrS1CSk4GJdKdgkysbXN2pJswhucrrpoPgZ3xPZbmv2Xw54n8HT7siCAs48sVeWUASo4Mg4VBt1Fhf",
  "key19": "3x39NZF6R1c785svvb4L9gVbbo1YxrMBgiDpanJLkQUB7avhZFdXTt5SWajunV6vof3kaNaj39JrMUfC746UQvz",
  "key20": "2CZvtiTyv2QuVMHvQuD9xnShUrU1DF122oHDaVE7kcApmxrWeXRC2n3J7NtCeFkYnVoGC4wki5ttoMQztBV1VzED",
  "key21": "3HBiCVcoNTnz3y6xLuGV7kKY8gbv7AieBwfxpQXJBRuP9kYPEHNiVwQw3hJFdvxyPi8Yp4ThaWZYGiNZ253E2vVW",
  "key22": "3WhJL87M2RUQFidZHUXNSpYjWfbRxHhSq4S2sQsV2ezFvVmpq4aa34Mz3sA457NaCxW7PwEZE4ieJEsuV8UMYuZk",
  "key23": "4wkneiuDyVJHVHXnMpSnhtsReUNPaT8nYpMANRjwfmdqNqmx1ggWHomhsehnU9oC7sb99vbLH7xBHQAM4yeJHU6L",
  "key24": "4QTsptPxpKXEx54gzqYhgRGUYsLYMYK4DnxGCAdfFhouW7VLdd3xfGanx4ZbAaDodu55wwowk2qyKXwA67jENhEh",
  "key25": "3i9jEUP16yresRfgmiSSue3ZAUqbmZDi5DgAYxWTLHhEDsCa7FuyDE1u6BRygF9MoUDFWg4sUQB9fejK63Yjbs9B",
  "key26": "3FdJxHsBDxz7mt5VKR7GyqWvADP6ShY931AKSVpP7VL2qjPBddfN1UjRruZC4Lhkh2u47LG64wH1Fob3wGf8LEkS",
  "key27": "2TZ1nGmCN9SRYFr874h6xAe7U5X9S3DscAn3m2r66LBhxMDFm6d3BSqxJanfBVyDYDgUZ6fQFS669v3tTZXXz8P5",
  "key28": "2SBaRNeJqi6Mvp1EUpHatzx1hv2foMXJ781DMJv5UcMSwsFcwjAvYby255H36qsv86zN9EAS9TEtuAkr8RspNhg7",
  "key29": "2tTugLbWAnju13x8UEwNXUbp9B6AjBddX8g4iMaZgtJnSyjdwDy3VGWGHDhJ12GqRJQpoaTioFLh5yWhyfKEgQo4",
  "key30": "5LbZR7Vxb5bp7EctZVCp1cW5K1MitNRxmsScec7Xnc2a76LENUo83aJs4iDvmgo2bc7G8NsjWiAvgHeLdUo7L51h",
  "key31": "2iXPMJnU4KdFFNo3EFA7BPofHnMcnTqJFJ1ECjwppKa68Lp5TED1AA63VdGiX9YuzGTR718r79dKWtAFBLdV5fQb"
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
