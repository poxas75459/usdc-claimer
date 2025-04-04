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
    "2hq9Nm13dgDgRnNms5AzppbFqkC2pzbyicceUFYsjtM8nRokQrVzhAyT1x222sCeVvRDa9rNNDLqPNwa2m1AXDgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ybScD3q7Nc9fd8ECbPGrvpdZQsKVoZ228ndNZAV8X4mCdd4y15iuQKdQ5ezDKiUEUUHqnTxJ7b9qqpDwszT8C8Q",
  "key1": "44vQvTkDW8SVdFzsHP5EGFZrEi2rgqBrNPVKetHSNwebfffNBn3iMih3N9xpegSyrNd7myagBksZGfKkAqHBv67u",
  "key2": "4ARw3KpEoS6od2B6guokLyZYyCHEwUXUgp1eFNXP5vTNN4kjUbdaAbi9rbWC1aoviRjDBoXgE6sfbPgbBdS5epQu",
  "key3": "2xSJVNbEKW2L8i3JRqLW2rhssVTvATHRmAvsY1jxsd9XAbvMwgKMPuURDSQLbGZHVr1so25U69A3rSaYycpbjgaM",
  "key4": "GpR1UotitRQkLRv3QNFAZMn9BL8LUfdJMHqBh1hKCXbCrDbvZYjguDW1hi1Uwt8tqBuAppWgUnues5uyJFkxdZZ",
  "key5": "665ZQ6hpmfZ8mFga9krD2dmVxzyXgVjvc63Yw5XBoZ6U48BtaPjYemcXLtF793xs4KrGb5RyU9aL2Ror1dPu8yeL",
  "key6": "2NKwVaHVqtnxcJf1K4P6pzmxgL2ZSsJbfwBvpgufWUe4L6mkwRwgKPSQNPZ86JX3Wn7bxsX6VcoEnYoWK5o3MFQv",
  "key7": "2mk9LMVMxHqnP6d9zeGDEPUo4ir5Z8mp15iMiUAMb5nvN1oWX2qVQHPHcoXximHoZMjKfzECpTbWavgemsvCwBts",
  "key8": "5pjfaMLsHi6fWCvSbvySWDufBRkhWbsu1eB5fHwpr3p2d4qukByk7eFnVKfm1DBjKUPNaA8jrHr3HxsHGTSnuADj",
  "key9": "3GyAdb3CvBTKq2wBBypQiDeotHq7xWBw1FLxmmpHFdW3Sht1X3n3cSBveUtiNeArUXvWnPRbs7XquKT7xasDPRds",
  "key10": "4fUe8NF1YgXxFSyjgPVrVQUf76QgrSwhiBGZTbWZJzhns4qRqiCLQUG38bQnNUXMiaPUQsMsKG18K1dbbrVaAQ8p",
  "key11": "5g63PEWpFawD3ASvZMdDDLo8WzbombHM3sedCLfP8e1oUp5wJjAh8mWXrRXHJ41wLtgSyhRRSA3ePpmqx7oopZg2",
  "key12": "2KM8hrZkfxX7k5HCPtezy6A9xMuASKviHtKrtY9UwuYEpK1sqbJr3GKLRCYQxCnoMMgmypC3afUrP6o6B67hKit5",
  "key13": "sV54WhKy75dg9BSYH6Ss5ueSFcExnyBFmDuBHShQqvtKufY7qBDLtJ61yDGq3yF9BiwBKzXBkXp61Uw4ghNgjpi",
  "key14": "226YCdvDPyLcFbpLFgUQQE5THNbgcyY5HrZkGr2EZUdfPssATmRYLQtyWm3XbqJSiZkRJd2DsqZCQEo8TV3Fhp14",
  "key15": "644RcaeydZgPKMs26Eo9hfPgHEmtTaWHhfho8oCRL52tCoT3vKKsLKrVAxt2Pnn6zTXqasVkYU4xRWqHHLrAwiup",
  "key16": "3k4Q9ZjdZ25cnG5Zvhhnm9eqTS9KksfiSv79yYrTioGb7M9eqbvszmMQxGJnUKKnG9nySGerc1PzRW8eAByJPgfK",
  "key17": "YMaxB3axHJBkuXW36VmttyuDWosnGCn8LB6msb7FExmeNy13QuNbgfRiaQt98x59R3mxdTHGh7oJgnrvQpCudLy",
  "key18": "4YfoNsyMMhNngHc42AVqh2AXgRWjW6EEEE9KwjPw9Lnv5SyYziUCaDpi2nHEoZ2ik7QQZ5nVDACn82nynNs1CM4S",
  "key19": "4CcjqHUWsuDFXmS6RpBWLEjCXGBqju1nLMb1S1C3aCNBjf6Qg6izFRuqPXZAoVwdmN9fNQYRKDS439PRcXcCvocw",
  "key20": "5BZiFqSyup5nTM9pXJ4aZaJFSYoUBcsnCnt6FT96Q78LssmweomC1Yas7x55GW6TbKsmuMtpxnDKxEecbSvQth1v",
  "key21": "2z9b4GYy7iVzJFWX6dsVL7vM6wugcmq339hpcqcDAg4rMaaeQxsJJNpfTCc65diqNhMTgfsA11q5MsmfeaMgaQPM",
  "key22": "4cV4BC3C66jG1c6PCYcPgtVEnZfVgFgurUZuiM8stbPJYF8VsUTkUxd2siu9488SUcMadGyvpRNSxxCfb21w9Yqh",
  "key23": "jXi1JrSML8ZKGtcG6CMHY4Fby19qEnSE2FPTUeAcX3NWfvQKJ3MyMDyrKMeXfebqKW7znhqrxMiSJMc5rFZDavz",
  "key24": "5XdR3DoKBVHh5yrGAyU4tBmB2aEvHKmEUcmiY8HbhzB1po72nx1DhVg1oaZXHuit3sL1d46cU4NT8kx2pMjYmthU",
  "key25": "4o1fv2C2qZG814u9bWmpJdsmR5Q1q6QRq2cSDSh73V129hVVUiiG38SbXvZNR4BnL5bf9Jnh5rVqbvVeRY3tnyxp",
  "key26": "KVRgVLeVjEbNN6mfardkXU2bvwTDkvqSG9LureqUcLiA9JEeK3HVcgc5mwGyoSt8oRDP1WrgJpHESAUMu4HeGtU",
  "key27": "524DJZ4cv8N6Vz3PRaUyBikioocAo9fB1LSQapJjm9kxJhJBp9wgqtQyUrZMKZQkB6j631EHpxaCfsa4kEFvi69X",
  "key28": "HSu89nYUyXfv3jCcK5nux2L3YQVxUxKCCVfMrjZrAqx4t857vTvVd3oAD3oyg43GfY4G5i9iw1vBgNuu6Gxnvgq",
  "key29": "4fH7WoynYoV9NVxqZXSrLNxjE4wtwKqrfo7fiHqsoV5M2PFT1QLfCvdweiMkPbzd3MiL9fV1iNgabpzesCkUKoKw",
  "key30": "2JhbQmioTckFqHHcxP8RE6uV5jaandDg6Gp9FyDPdP54QNhodVQfm11KHwqMpotq2oCfE4SWQ2iykMisALaWi2S1",
  "key31": "5bbTqi5Ez1k2XAMmxDR4ytLenpuZdwqFkQCot27v6gRrZgYnTaS74RrpZt9xdF4eFEpW3My9osR6UM11aicw5iav",
  "key32": "4wioyTML6kGSBFKy6DMeJegVBwJiSD3NUSaohm9WgHXNL12uAH1nfjkxJ5SyXd7c1BBS9NN6sVtGvjstdmK8fKwr",
  "key33": "44CsMyaum4kU5FUzLvYVi1GdLCi1yXsFcsEJ5E3WdPDCsnvLeCMYmw6m1n4tWRvCRkBJZRNgPjjFjgudNVjcx3A7",
  "key34": "5dNW8y9odTsGnUm6Gk34rgnxjn8ABDAVLMCQdud2RgyQAqxHXhtCRRBjMKF7Cptm4x9DjfXzGwiv41XZEP1XbC5X"
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
