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
    "bFLKAV3juVAtkmMisekqzbGSWmTpp1qKTEXRh1ZLcEzn7VvLgWoWNC6YkUAHN9d93n8wpNB69X9Ebg6e28oQ8Rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LEioYQM1nWtS2DQJrKrr2MswZVSE3eyaiTFt2NSb9KgaZhiBWdqZjHLSQL7b6DFVrXoPFEHdhB1Puww7u89iY1d",
  "key1": "47wsfyLLAq7dtBqVWQyFRD7c6V7oF5VixksZYv9HcDNSSDvNLTbZNzRjMrPsciK5fyCmNfVpxszoMdBRJMHUc4ZY",
  "key2": "3HPAy7mBoFrXwXYz4N2jcUp9UTxAqrf8XdCtE6vvSCKfkT4D375s7HfKW2XpQUzXcmNRwyZSDk83qhQiYMeR2ZqE",
  "key3": "3mtY9RY63twbbbpEn2Nduwe5SiHxqvQpYQxcizPg14NSXkq2GDniv43Sfv1czW1TVtUqXYoyEUmGBxjKKjvy5tPM",
  "key4": "33bi7kHa2nqwPfa5KW1XqxnAttYyt19gVpfJnYpJho8MGJJEvdqkWsi2MpAz9v6ANiwXtekaLmTqkQ2CvyLcjaC1",
  "key5": "3kVMLPMm7Lrb3D9AHey9urT6nFZ8dTBF7CBKnp2run4dkyhastdFAmu7nzfy1GkdYz5XLh7bXAXu36dCyafTz38c",
  "key6": "5F2NLRaFp1jGzPsDhdGLjgUmQoUzMHLcNLCYtyYrDGc1Q66eQ87AhQDfGsmoCewwp9vESYMRodmxETY6tBW72ysw",
  "key7": "N5GULmgHccBRB4eCjixa9Y8eha7Cdt3u51ciNC2DUT6bAeDBxdw99ZJU4w7BsR838F6nUQQEuZcLyfEC2h2Z8e6",
  "key8": "3wuJahMMNEMdHh9v4hK966KprBm4xGvDhZhYo8Vq2UwLjo11Q7GewSaSVpTKyv3QZ3pfdPs6G4ELyf5KBf8UtdBF",
  "key9": "4wQRUH1YDxJex1mDXK1MwHgo1mGmVN7w9n1MNrbSGXeyVQKtpfy8SUjLmmQKKyvxig9Rg4KDoEX9r8oYqHk6Vr97",
  "key10": "24Hso5K7Dhsw81dPqc2DDD4oLrNsKWhHuyQ7aN4EqtfbEz8FmPybiwEiosN2NJzNM4ryMy41838Eovz62zhBMs3h",
  "key11": "3Ejf9j7TmuU6axpQRcEGbaEtwqMX5uVumw2St7kyPJ9Uw14B97mfSipx2HVB5jWu2iyLimqfd97dbPh8bKp9eT1V",
  "key12": "2FEkq2Y7uV3GYV26Ksedks6gCFv5HnVie3oCDXAt4YzKoGGMdk8g5U168BpBZzGQVmZniVjEWx6UGLN4nGDPQtwg",
  "key13": "3y3U68v8Zzco2sRNmqhyisdrqyFB5qiNVjp28RYZFsJzASery3y9JNYnNrhUZEsfvtZCippoNzujoMcwqFG4x3uf",
  "key14": "5ajXbgP9xHyUG733PuQx1YimnpamMe4KWb3a62QWgP4PhdfJdnnG1hKAfh6aUttaJb1UKCiZypgrzABZyFnW7XQu",
  "key15": "25Km9mzBwXUstVdiabeWA6rXhnRWu29E6KA6oVUsX7vDgb2crFGjmTudmhxoQwBSFCVw2HLM9NAeMP6kv5EvoH3t",
  "key16": "AL9UPNuph633CwNjftxAk4GjdYx5dpHfiWSNi3tvPjHpbydiWjCGF2pDGHskRGgwwWevxrVZ2K5eNT9hw3rLH24",
  "key17": "jAXKrFXhm7ga9GWZCmXr2E5mkVWCUX7Tm3g2woV2vbkA5KzhjNhBnXRo8SH5gzCeH6W1YZZDTyzL2oZZGtNVwZD",
  "key18": "33rZCxpyEbT7rBi1M8n11jmpfM9Hk3fvxPRtDCo8b4XnjtZSsyo2nB17BWVe2mWDohZNzXLF7PZZAw6zfBQQcFkK",
  "key19": "46zG2Eg9dRu9BHMUUyzPAz36LwBYZEnu16ojxftTxxFHN3pSVcntWCje7tHBUfopzThHCHmRUtDkuNrEmpbX6wN7",
  "key20": "46ZGoEWNiH5WhjCgZYfZz1LBUTBPWDQNfn9sHafg9Zf2qnoqYRaPMDStgk1MuEUoS2z75n51NhnjNXMKbZsnVoT",
  "key21": "5JE85pxFMGFhwaqwNcFXarwh61ck3vtrnq2729RhWSTub6bXYLVTqAtW6eE3x6yo7oQZyz2mhhT5UwZVFSXwQgCf",
  "key22": "FPjwrZAQJT2iJA1HMcLZsJqFyNmc39T4qyyUqMcAow3Kq3EMRzmSAoDSmw3ZPz2xoGATQzjxunbhgSfDGTLDApN",
  "key23": "4gbtCNihTcQJyBaT5rkyzArzP4FcdhBjUgZwi7LECKv7ivJXTzZwHuAbPvnAneJmFsQdgUSm3SeMPu78SGmaE7PP",
  "key24": "ArJqu4NGVTT3yq6wfqW7YVixXkeMTxuY1iVuUFQwsVR225jPxeTTcjzrCrsViZeEEuNacBjg6JS8L8s9S6n2YPk",
  "key25": "5kWyAh9q88sDjSQ8XtH55dxy5nRcCtxptcVAC3EMWGn7HkCT6ANjB4dRGu9DJz7x8mHP4PacMFgwgVeQEB2ez1y3",
  "key26": "3DhVMbsjroTWmDach6i9gEAFWZEXL3JcrpV8xDQDLsUnJuiZP2LNDFVv1mQcyLkntCUHkePkMGb1bN8t7dF95mFz",
  "key27": "5omK5npovMSBHD8tEvEs5gMWczwCdJTbALvQgJoYC1mr6cjJa6i127GbcJ5Ktvy9BJYKoUpADoH6qVMqUfvpRBuC",
  "key28": "62KEwh2c8D77BrTuLmY7Yt83cUgWsgU6fEmFqqbQhnLhKYKyJpyvpfQTU4CyE5h97nCRkuGgFtnFjqXoQwTtqYbp",
  "key29": "3HDZj2A4s6Pcf1V3KCHDkoKS8cVUVkWxUfM8Abi5HuseAhy9shftvfLhyWvP7JeGy9dpshRw2ENtE3zqaRgYXtAu",
  "key30": "3FLRAuduYjUWYnmEvBPCk913fGrgNK6kUVBvv4AsspZBU5GN7xj1n1yk5pFmWmDKaL6FFVsLzKdokRH8RTf6N6QR",
  "key31": "29o7xvCNhK6iapzG9QL9e9utvEiEjSczYyHewcWdrDgKjvhTgxKxJpf1Rq5WEUMWbpZYQeEL2HrmM5y6Z9476BbC",
  "key32": "5KmwTdv31o1nJkcvQcCG1RMKrqMcdWqroSNjc4uQeAUiTusezgugNYe6XYosVpv436dd3fq5FgC6Mfb7QfXBKyfU",
  "key33": "5UtwDrVbsSzedqfx1BrSHutp4X6k53anz1YcFeHtirE6Ra9AMoCHcDRGHLTHPeBSRvR7CTZZKUmo3CjTrHt9Q2Xj",
  "key34": "5qZRT1xsVdG1MHEqe7XKdUp1GvBTQMTfqpnt49cm9Apw6HcfNAjecS59hs8k5JcZKkhhbG18E18TUJs6JTgBGqCn",
  "key35": "5Qp5tFci8nR8FbUygcR4T4UErYAtr2TerCuwTXkVcfkNAA9bXgjQYoA2ZMVopuGxPrK58MsTFsX5F6TrjhTU2aGU"
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
