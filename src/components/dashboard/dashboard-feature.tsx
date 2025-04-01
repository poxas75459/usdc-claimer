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
    "3QXxMDrv4eKRN1H6rGAaYtHe4oEyFRSCK1a49q1cxHEcq1UyehRSXMvmivCNo2Kj1FAszisYgtyhhFX3gctXUtgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g1yjPP47t574pyPwHcNQgoShLEAffzAJeqdJJM7SeiZ2XSB42VWWqdEfEtBx9rAvC2WfnEAUwpq1ZBtMyoM5QMD",
  "key1": "4dyXz4CZnza3UoH7gQAUZ4ceqw6YwHgvH48bhDZ4vAuMic4AEHhG7bxXLEN6CRt4WGji2ziZCRgLzgC1wLtSddBt",
  "key2": "5MAm86NrYnMZHfifLf7UT5PevUPGi67QcFCZhhPNbsKiVYemXBTuuesVhVn4dJSVJzSy3HgbTcddUjQfWabps3pK",
  "key3": "vMCHXQNnPSyyZNk7jhszfJYM3NBRxmwwBXq8FfvrUVCkiA1jWuxXgc3BxxhD7qoYMfuFDbfsn7T9jtSVkGdmL27",
  "key4": "3FMLfskcUpNWu9xdQiRbWHWdfqVhqS2FQQuHkQfBkiFUqGkA3L4ay93B2EULQb5N27eM6VBNG1NJ6cDjZH2nbLoh",
  "key5": "5krL1PFQee1oqYTogUgCuUCCV8XxrtxMmdshDZB8r7qqYYGQEeB1LWm6kTB1NZ2h3fh9t2gQ5PScZKHoiaqA9tes",
  "key6": "qxDdxKUSi7Nv7ZCmsGm7rXCEnuVYeKAiAcUFVkVt7YH2u5FeuTLp1FCJHaGQzf7yJcFtL1qk59yzc3A4wr2V9dQ",
  "key7": "5SNQKHGcYyo4pxBuNvmWZwUq5f1oDRNJsiTbadTdpQ81wWfgQ3r4D3C3c4FhcFBzS9KfcfxnMAYd6iFGRuHqjhrK",
  "key8": "5Ao8N4DtwHmpZoaMxjKfg2ar9dHfXdwNnsqWaFqTkDcySBFZvxk7Fq1j4xaeFU6jybgDsooT2Wen2fH1xVGW6ema",
  "key9": "abWKAh6cWGXNtzQKGkFvTbSbLjncxCStcRdHUv1ha1frLnki6HJVLegPC9a63s8woYRNZ4DgqQikebDeYynRL1v",
  "key10": "BFLVi8rSGdTQuPnYXwW7nFoZcVwA5Q82Qpg1jEXPZum23mc4rorcqM1uWYD9Gfu6vE7LiWw8qu7K45fM7qGS8tE",
  "key11": "66tpKahmYRYaAwDLrhj4GjSeukQ2dzLwbpkeKLBsqTUz3qUXwMXXRC1TjAmBApctCpVEZjGVaAMqeAH7ym7HdWmx",
  "key12": "fphP6mcLzbDX6Fa5qvDBjTXt6B6FfzD7NLpf6rGpFiVRyQMe4uqg9tzLAokBH2ULN7DaW8LBaGQGn2NowAbzcrg",
  "key13": "5zabyGLrRYtwaPvHRRqGZcJFQqEi2wMHX968nuvpeTH61mAubQgTZ4V8yFqNUuyGNHwzLuz5mYcYTFjPCJN4rsUN",
  "key14": "5VdLbYw3F4W4VQ7p1A4ft9bGbACbzkxmDP23qa6tJFwDVqgpUZyfyrVZEGWjkgQrBqc3PagtZdx6njJh54AqqKHM",
  "key15": "4oVy8F7bNsRNBc7pd3FtDQRhMV48GsAHu4yuNYLzkCWRziFZvjp2jfGVqyMvQqgbP1MNnUZsHt8Pow3FovQ9tbZS",
  "key16": "5wVY68enZudpmoQx6GJuM291QkUsoewk2MPtnEVuZb33vPzrkbnKpQsFvwbWpr3Xg8jscR9pqmUxpt3xnfQ9m5wY",
  "key17": "5rPUHAcQf9Fqvx2zcJdj1GKtZNKxdQTDmrMjfy1n2We4DD8JZ1hzEFf171VgDiBr6zVn9UKxKnhc3vWQSxFMugR2",
  "key18": "2V5Q3YqrYvpy2tFJzp8PvF8ncQSUSdb8qxeWxhqzWMP81hPMGNZXVz7TWNFREPQYYjKfEyGVxkM5tN2cmuiJBbjk",
  "key19": "3h3K4W5WJKXEZEhmDdBnpc6BVQsyDudwoU1eTtVJzjW62kDV5J1YRq3jFzHQccJJiVhtwBgfVRe6NqECuQjmzvQ1",
  "key20": "55oUmAt21boCFAfV2gFwyzRMicu479GvEj3RNkyreCtUDmXr6VRC6n8mSnnPGMcduTxMrSXZ7h6WkW2Zx2ijehhP",
  "key21": "6mwXwrZLHBeGCogk2CYJqCjiv9mPWUBe85D3sToTgkthW52XTGnhC43P25FGZdYMbSZvyj1GGoSEGmjPgikpNFZ",
  "key22": "GmNSWd9jvPjJhh6uXJxJcdQ3uwZu4PCHXUnkCRxXX3HZpMHyDkSBwWM2a3VHPKR1s68kvhmmJYWUFhKzFC8Aczf",
  "key23": "kYJBLuY2vmdAxPtLJ77xHpQcMGtyvPqetr6GBTMcYxBG3UwdAzhTCBUHWu9muunZPCXKDiG7cw7x1tJTwCRdRCc",
  "key24": "2U3PD23UGLbsd6qVXEtPwPYHP8NvBN514eKmU8vztLgp2yqjHBfp6WKgDURQak81HpJ44FnRhzQ9xxEPTW8diz7u",
  "key25": "2o7YhDE3GYJa2v9B5Zs6qDKPCRom8gDrAUmH83T7QMXUDZseNkkcquxB8GjdxCjY3n7X4JEq7nZrEN6fvGjZib5C",
  "key26": "4NQR7BqFeF9uejNiyVuRMYrx87Bm3mcFeKZ4E8Mba1yJsDPKB6FPGW3eFS4s1YCSHZYJW2rkZzNKvuoJx8F2KuaD",
  "key27": "24W9ZGKLcKnAuh93rjcuN8e4EEpm377xMjxA67acYv2w5aBDV2WaGbC1wSpe6MdUYygH21Q2hWs4Gw2og4VsJVzd",
  "key28": "5ZoKJaG2DovJo37NBngBzSBM4anTNAqrhd5QmbTHd4quvf3rtR84UtcsRDXK3Rx1k9yXybyr8j731CeJqvS7VCNM",
  "key29": "2v5VbcyyzGzVo49puBqUMCr3g948ParjhrdoCPR3ScntNeLRHZMaYAFxwnCcGf9TqAyEqQwSJtngHFwdmc6fe6tu",
  "key30": "CdhSpkjDM26uNbpmCWvsE1NgXMo5TQD1KfJatLPYBmwfPhSFntFpU3TBinw8e8hKYofDC3FnYux47Tw2jknTyku",
  "key31": "3mxphwLfEHwVuuG6f5aKVENGfudfJhWAy3RBkr2j5BJL4eTS9U5yTGeKd6BcAmfk8kHjCfoQ1DmivJPPWWDv9HTE",
  "key32": "4umnw5x1ab2dgeiSAMUsMrpspX111ZxUYu4hdJVX994nMchby9eH5vQvP2wmfKVVDiif2svPkBcfnKRtAn89mho3",
  "key33": "3R9X9PTNMaFpR8j7PwBBvFygVCcPSbyrWE9crgkcPiyPVEJLxaZXKAfFtfJLjjyDM1wCbj7iiWnLq78iQKayLnvS",
  "key34": "3bf7vRcr79isFiEkbBaMr5eEkqwMdzMhoy2aJiyqSvUnKLhhGMsUmUBBG65bcdqHeN3hjsf5NtzLWJQakY3L2Gke",
  "key35": "4y92bgvF7wDuLMRmDLvSB8ggQ7QephpfVrvK2AreoEBxGqkdNnUPgz4bERgMU8iB26GmV8C6aJjciSLvrqJs5Mwu",
  "key36": "PkfqEEgrJpja9itE6SSKcQLtknHDHanqELrzZWqdeTVvuBmX3ZMkUWC9NKSXKCjf7JwWcB6x1QPiNNaSoFGaugW",
  "key37": "3Mn3EH71UJwMegPCJ7zUuH5LoR2MJTzKmvS6hc1siWXhrAJ897k4QSVL3oBy3387FqkVszpMC7avqbqU1sEg8NR7",
  "key38": "2936PnfY6sCgG8hFuT77sdASmN5TsS4YVWj3R4AoEG9QZSxsvzvbjEw58zKFmpafxRgYtKgXZcDATcu5Kx99R2Zs",
  "key39": "3S2MGGwDR5k4qY3BUJCxtEcQkaud867MsYHE3YEyuCbngE8y1t3Vogt3ntSVvQdsU52vSA9r6UYMNibsXZLrog1D",
  "key40": "3N2jkD5SpiXc25pupjzfBKkZ7VTVA15SLgVvJ8Gc1SfcWQLVdAtP2VZgsjiiz2FWqhPWWKGXM7RgzPjuzQdZMbNc"
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
