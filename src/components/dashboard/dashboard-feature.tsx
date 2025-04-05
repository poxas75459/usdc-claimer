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
    "n1eboGrNmRsnq1rusd3xGeCF6wSjSfqfxVWNzcVgJ169ELR4uzx1KTdob4GqAuPSSDDuAvghaeLW5gTaP72sPVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dvje2TP1a9FGmsFwFeXg2kkZgLMi4xDswEErmJrMNrxfgNYBFZZvFfEB89R2s4gL9zNWjogCLVTUPdnejoYAtfP",
  "key1": "3psfkWvh9E4vBsMfYskRiFUwLpDfq5ExFVtdeMoUqWaSBGCwaQ7gkh9knnC2MhHabCVfLSn7LyGWb5G9R64UQFB6",
  "key2": "4nfop4LAZomGdARu74FztUQoKpWGpxbkR5oQbwyPxnTprV5h6qvUXnE7nWWMfeZ88qfPEgQ3br9RWCJpkf7JuY7X",
  "key3": "2afWkyDAeSgfsBaowxgBXFy2mV5hqWK9BnnF4n88h379hEaAcnqfYG3CEMHwpV1DM9LYS71TeHdeMLiEcEhJcJ9M",
  "key4": "558o3YJR1kDWh8oRin4dcDHh95T2DvwZERYUfeqL1bntHdkMCb41YhitkNFoZt3AwQiMxxyo9wYMQA24cGLG96XW",
  "key5": "35LWrAkkgX6WAqmh4jwx4ubBUeUdfJvFpuK9WZfJmgiwzayon5ZNdjhux46eLT6mXJT6FhLFkuLtaGvp9Gi3uwB1",
  "key6": "2rRoJsATjpfMmAjkiUpS75sCVbfT4uYbRCJnRoA79Pa2dAdrdoK571G8E21TaxZ4jEYd2eg1uBrk8TYfPqS1Rhzv",
  "key7": "4QHxSQJEvQhtC7UihoE5zeACgfgSjFcfdZYnVvGV7mMMeMVCbekQPv5vxn2Bxkor6n6DcGq2uAr9y9jbCs6tga3n",
  "key8": "4pLAHjvVLjRGwYejUSQJ5WQacwi7M6CniZW7sCRRGtU8ZDhLQ8mDZf3qeTySYykTZHupGgfmjzmYS29XRVgLnY43",
  "key9": "4LEFkvrbMz5tkZ2guHzAMqCerL2Sa5mS8Q1h71HUh9wr83gDTjy5H276RvzKwJYy4vCY1LgMue7ZuPSwNoRzWxhT",
  "key10": "3XgncU5mFaMgw7W9S6rf6DmDBEq9EqEyLcMjicTMoQ8LwdK7ih7PeR2aKKrhXW876dkNhwdGHyxjnk3HFkFCkZDd",
  "key11": "4Ds8dfjMQ7E3Qs4rUQtAAaQn6i1oH23aCBK7gisNR3U8J8cszwjrgai8BGnqi8xv8UPypR3cX3TFjuA7ncWSrYXu",
  "key12": "4GfGG2Qxehgk4mqaeGq4ivYwE2gLCLdQvU6iWRT54Z48ZDS1c2hSTR5ZENSoiMg3B45qEkb6YsSB5bExPA5fJHPN",
  "key13": "2zsY4ZirkDs8T1Eyh3Uquc7SpKycwL6T46yZ2YnQhuMYUAd5p8X92pdpFQTFoekgrdaE7bqW7fjpjfw3i3hLiPz5",
  "key14": "5MRzkUMnvyCoKtZjHRGWibGR1YHPs1JThvj33UVXk98EdWHeUdrnUPgzzHEy3V3cvPNEwgwkAPGbEqAGaw6FMx97",
  "key15": "44Uza1MT6m9iHtYLviYekotK26aMdy7b9SfQQzGY9UjdHJP72e3JxhANAysq1T3MnnQmeVEaVYukr719QbXxpuzC",
  "key16": "3d8p1gpqqMQTKEaAjgbY1ZwqTS3jQYosjLwkDLp5VtMXmot81oY18XYDygAtZtqbZzzRQKF5qSG1HwH9v2BYCxmu",
  "key17": "3cfDRmHWfzbnumjfuWX1fBcJsX649Wvdo42aAVDzS2nvGsAW1PrKdkPTX9zBnDtxALrpWxyibych8t8Mge7h2eQm",
  "key18": "RySFrUhjxKBS6xmSPQXPC7M6jNP3HF7eo1HLkUtfCTq6CsSswPWLBbsBWvgPPRvHu1qon2G6AGhutJAaSRTp1mC",
  "key19": "3Pfi6Q4bMMPmbqqSWwb8cnthivQn3Tvvcixe1tuFP4jYkftPLNxNbxHXCFoVPGXJZo3ALp87AFpFTkib7aoTrWZp",
  "key20": "ZQidDVHCCiXLkF2tw6cKJ3Xo8nhxdtpC4ByYyRwku7PpPa8JgbsA7sxdhjJfcqwXF1w81KpQuFo8nShLcymY7pj",
  "key21": "5NruV8ytMs91YA2UcGuE4fRqTCATGj7QLs6GHoAMXrmBmim9b69PUxg8tgKeton2VTeYeAe2CwHpmdiHH1WRZepc",
  "key22": "4y1pmXHjN8fhWfEZPqkzPfj4bUDQu6oz6y6e8vt1kMjbDu2s6UnE8w3L2aHSLdApG25gXfS2A9EQR3kJRn4GNRYt",
  "key23": "46nEY4tRohjCPyZ5Q6xrzCjLSkSJuEv2bpemunxXUZMgVajMtcRWVKR7NHsag7RaS2hZMienKytbRRfZ7N1XPk5Q",
  "key24": "rKoUxQzYjd8Hfq36ftseMJvnCqK7ZZ1raQyPiZ6sYvyAScvyYQhc6hn7QfTeSh8YSWTiTSms2SNAc7F9raGV6jX",
  "key25": "75iMndBqe7ZQmNZQL15ua3v8uz2mWwwieHjR5wB2XjhqiRAhWB9C2Vy1MYL1T52so4x15togFvVGA1t2jYx6NPC",
  "key26": "2EXJf85UStkVq9PaNQ9W4Ni4tRp9M4dMVPVBcqnRLBm8D3c1caaQAVJdwsn4M8CvcQpWW8rfjsgZHPNz1t4zagof",
  "key27": "41TUUDL2kqJNZcQBcwFFD6GoNo5wThZirGybFeJ2heFp6mRU1ZtHcegUUHkeMmZ1BcvcB7tkYbPLTSPBaJ6b7LT4",
  "key28": "4kYWF1AtCudu8NfSUNhrjLZLPVS4ThYeNftGPbqYusXAHTkbKcpDKY3Pyk37BYM7MFigaWjdiukDarULD5FMDAJR",
  "key29": "4no7EBb9qXb5a3LkJLAww8FX4hZsTujQnEbner9yRmwHavCS5hNYX8Gfkrz74WcwwB6frhVUQ1bDtYgcKHWfDTA2",
  "key30": "49jzHq6dErKHRKLCWaQWB1ji3HFhHsWTJ9pkUdxiC1CzHNLhf5JWwTEmLpYZqKWP2mxfJit3Suva9SzS7J8yBE7X",
  "key31": "4sHdYcT5SgKoPDj4yn18iLXgn22NkoF29WLx1AF3DCduAJtBR4DePsS3KJyHe8Ab4W6WWAqGxQ81BHKQQBAq6Y2L",
  "key32": "3pEMjuD3688vkp9aJkAQkdrjZ6L4uVjSxxbf4vebcZB1HNQeree6u4FwkDkVJ8wNskmiew4DPBsPyhAwWgFWPdnN",
  "key33": "9zyvwfvZMJGfdmTf58YuMKg2FvTYqXhfbtGW1CyDbAw2E7FhArvC2VYbiMuug3vD1qBazVgc7yvY8SngD8eNfRy",
  "key34": "2jaQuXpp4MZdiKvSAUUNSy1SR5gha4NtMDWgBwfLzK6tNh2RJns8gpD6mrmg35UVChAgmfxhECjRJAdXFVvpsf5m",
  "key35": "5jNsJM1vSjjLYCsd9yPGEcGAFipHshwR65DLWNsc5pZ4VmiSgHELJ2VP6vaajWP3iZJnpTG7gsJovmejBGjSpMkM",
  "key36": "4vpwYYvytcW2fv2CL5ejQWkHdb75E3sPf51kXZ8DU3aUzZnE4BCDaneJzyvSFtfnpLnc4gcXazWMhEspRdAhYftN",
  "key37": "4ySBuDvm1z5JVUkaKUUMoVFLbv5jqjpKpg3k8BJJLJMPTQJWeW7kupvKSeTV3ELJPxyXJk5qDZP5VrPK9eLmDBfS",
  "key38": "2Rd57Zu5CPWaCQJr5VKqjn3DQsRSFGdbse83qPf5rVnCNMpYb3BEkGMuUMD5hFYA2B797j4b2397RUtki2ZYqZ7L",
  "key39": "29CXUhyAdBENrZ8Sse2qciViCkm6TJsUWEBCABE4tM1QCCJ7zY25Z4wG3R1CeFkWTFbnevjY6gdDNeCTNB9Zc7fs",
  "key40": "3wbvvw2DyvD6Cc133BsfHBUcJWH39QziKJojifU2BdYkvsrL1WPZG3BtNRY3dXJCPqEN9kb87uixBib3KZqkT9Do",
  "key41": "tKuhxsMApTaU2RA3TiaSg7JVQFowNZWyFdGJZAdXh9YZLwrPXzZv8Wef1zmz6LnmGWcrABkAsihaNwjxk5jnVcd"
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
