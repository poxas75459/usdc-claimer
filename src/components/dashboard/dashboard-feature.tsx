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
    "nwf64VRHds6k6AWpf6K3KaM876icpj1ZNn8y7YfdsUxLZjPLDzkmBWefEL24unofDGsbXnBdpUAPdYQKvZjL63b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33aLUaFjaVA4wn75HYjVHrUSfkwsQYAV7S1h2a453AZfuhSqK4TdE1hcKgV87RnyfL9evLBV2Kko4ebCnjBtJeNz",
  "key1": "4FQYzQgvUuLBNwHdVAWrT9DaPDhddAi7SuCbKVaUFGkDbQPA1pyj8vH2znXXjEReo78oM95xrotjq7ToCNXCxcSp",
  "key2": "2hwZvLiCdRJSmGT8XWLk1YoGnTtK4HeDZvD92M7LXREUjP2FjmQKFgMTgud76UPGff6hisS52dpZgVGBscPz2SPW",
  "key3": "4i2skgL7BiVf6AapPNfEKKKc9PbBYi1gpJwdBRSb9KRpbLQoMk7QFhBJXiQYtdXu1TDdLQJ1RtgcKVgLgVt625BL",
  "key4": "2JFfEzuo7rrN1rHcVfoqhzrsG1HZECXcyCLwhgZhdFxAgzAbP59Yz4cfhjDeNMi64kZ9tzQQ4nJehK5zjwKyxb87",
  "key5": "U8YpztSWS1jCyQwrrcRVz2M9j18P6vNRPzjEtR4ZJKyjwn9tJJ1HcR1FZdVBjrgbg1E1EpkCdxRRMCpVVzGGjSj",
  "key6": "4FTD6DjxVPeJ8qLdS3SVCPRpo5fJ4tM3spNYQEDFSY2txCY4zUxgS2UmYrxPsB29VXaDZEZGL9j1vGeiUeFf8FXR",
  "key7": "4apUd9eWCAuZBc7QGLCeMArQCFzkc2jP6WG4xnKifnHWCcsKguLn1eWTtALMtb6UdgLXaS6dB7AENBgk2vYQTMi2",
  "key8": "3WaB5MpTc6jsJX2dybjwbeKQSDeXkWFrbrXPVjsecbBzvW2RDJWMafdn4Bi9R7Qqd73Ed8fVypkU8SHzaHTYuuVE",
  "key9": "3tFf3wdcsKPmNTYFBDhTarMyNe6GVmSMCTwUyDgnvipFBdnQH41KJHqWh9e7FyV6NSGUmFzLCwBPBbF6B3257DsG",
  "key10": "3AgwFfJM93FQcSZx1CEq4FZ4nzJCrDvLLsoZPeXmTru7YtN6RAvushxxShj2LtenMdC6KYWJG6bwcPQyBfjQjhEn",
  "key11": "LoSSNsSkV2JgH5Ky7dgkDfXce3R5VGjVAchjGnWfB7WxCJcbfdPefU5GMuTSuKV5z7UjU8LpW3wCCthP8UQWSBq",
  "key12": "2azd88TgsSU57vjvcxBmRRUHztwMa1s9W3kduVFZBJ7Fs92Qx6jHHJ2EBDZo2PEkhTGniHbJKxdtx6UDN5GfTa84",
  "key13": "2dH6vU9jRYUevtPt3PEW2yGNXMCmTYdrBcwe7p22qhtc37jHnLotmwZL2GFdNvN7WMHG4T85t29Y5XTzgUQZDcRt",
  "key14": "2A5YXgYw1s9hmdff9EzHa6xhJQnxNUM5WnMDMoTnNjDJKeKrLMa2QQEqxKQR5ykKTm9491NzH6FHsqzUAXbjsRdL",
  "key15": "4NY9fpcRQakSnedryrFsPyHd3tvPJ2FypjTbDTk6j1e4wmfzkhkkGrH4HxTbhLuqNQ7X4bseKbVrFsP8Xmckkip4",
  "key16": "2qKKem2ygc6Pjq1rQRasXyRPzCovoNiADoQpTkJBz3mmUNTXcAhcRvrfs25HQdMdEwTYN1WdsKNrQMqGJPqeTtEj",
  "key17": "2fvY5S7jojFVoUye7FNWmVEhVURQp6x9hiD7AUz8WwZ7j8dsDHnMEcgK5Bxz9GKwkWN6MExWadaSiTKdswcyFjnZ",
  "key18": "3zrE4bjQVnC3KBobdH27XFijdNvU2jWW24i45TNFiJ87asD9cWxHqiohomYgfnWM7HtCgsBJfVWFy5NWRWhnoPwo",
  "key19": "4Hj1aJWQobgchJ2reCRKBnq1PGfRoGfaFfj9TyLaqP4QCBBkirRk3S8Atn7d7i1dZLrsGdWGRzDQGMcjWngWrNJz",
  "key20": "4MSVsH8DHwgH2vNcqXUSj22JYMva7eYnyEsvCep5Rh7yPUbbHT3ETN1WZHa559h4s7uPuJ18TFuSukrXLemdr6uP",
  "key21": "5K8KEGyFsQcDZ5PKAV4okZsB9qj89JVCmmUWu4xWQ4egmmAC3o2HmDsLscWFyty5fT38mqAf2gvyQeTP5STbMzjP",
  "key22": "4U1R5rKT1DQaEzL1es9jqPgQLHEDdHbkq1Y6vjiUo7Tr4j6CU6xsP818PjqoTgnrpNdZMToLiPG4eF2cz4UmsumR",
  "key23": "44WxTPFyHLU4G8tF2RKrgVrR4US792rvp43bWPDScDFoaUUaMfSTpXKW8g9hpNb7NtKnFNFYcniPViJ5NY65vMQw",
  "key24": "3bpbrX1UK4fhcCKJWN3BY1L2TG483Jg5Y9stPK8gzzD5E8TBgLcuVWXy9JzzYdoEpNxLRoFYtVYgkXKtXpXrdhyc",
  "key25": "5b4TzH6mRgNg4DNf3bunktWueMXPwkDpz2mX4siuEAhinSZaU7SevvF15t1k9KejGT3dr2J4b2Hn4eqi3SdgEtDu",
  "key26": "4tDHdKqo6wW4w49q3VxEfrUJXa2dKLgDso4HKpdA9g7Uy5XjAJpZ3DVSSy4Sfsa74iu4HbjvDASASX5e6uUdcNEu",
  "key27": "4zQQCBAEgAfbJm4iNMAz5sFGqdQgtZuPv7CTFQgw7FEVa9uAhSqxwuW2BAtpT95k9YXkzh9628wKuUwMpLQbZ5Cv",
  "key28": "HZGpTPBZeiVUd5CiCz6dKSaas8vrSQCjiRxCtdVs2LocFx7QP2vKJJLW21WgX8VZrGaZQnGTfZXzcZiHD9v31eh",
  "key29": "XBemsnrVRbR7qY38z3j9KCMR5Wye1LtF2Bc4jZi2PsxvMa3hzcxFijZMfVvpggZhsy96u4bT8uSS3T1SzhS1ga1",
  "key30": "2mtvTHguvkXsciBDWALmDSDG59YV4hoZHBhhzKK9vKB4nutryCVV6uSakRsy2fz6uaSqcbMNqBjSaGRX5pMp6rMK",
  "key31": "3N5FxfNt7ecf1kTnYWanHifXg82EBpZtTzE9e2PfWZyS1SFXDyQfLvfHQy9ui4p7EK7BMBh57JMHdSiuuJTgYRy",
  "key32": "3rw5cWBwk1x8ZCZa8FJ3RwQ9XEH1r6wpqeHVwMP3FdSbM64zSUxLWpuxHRxPrKt6C289zuhZukYci7mQufynFkjB",
  "key33": "24P6B6i4Xz1ZPt5R9io8QWdqdGbWJRQvoaBp1LAyB8e6Drwu1PFf7Z46vvpuQfY2m7gFtyy8CNQdYn9AMWwgnfX3",
  "key34": "5itLAWFELLNYL3n6VGcC57uq9M47zerNR4W9seaFzbv7qVS8RhX67ckjGQyMujD9NZpsFQiZWgLK3jXi5wRsw5EM",
  "key35": "41GssDVZwBZNq4GFj57HvWFE1HK6KxyxfQ1V1SBBVg9UgURLp2i87vzGUf67z7FzkD2rZskYefEoSBsLiMkdFZYr",
  "key36": "5SK7v2gBxRr9D45Bk76xTCnFad6UtFzuAU5s1TB1bvPL2V2C5QokjMfKLMXkusVch4HqF5bf9wvfru3JPB8HXo8n",
  "key37": "522QE97PLJCgMyuz9E5AY7H4GhyNjNYZqLimLHSrLBWa5Tapz3hsv1XTrKeJ39kDCDN9aLCCEsJG991nWBLCioYr",
  "key38": "45jLshUHTN4M9xLevDtbWj6No7CCZ71DunqCLWyUfaqTh9JdktAPfFC3fVUVW1KtsPPXyyR267VAcWCQHecCWTpk",
  "key39": "4E7cfQQChpHnzGsZxkCcJJrmA9Jbrpn5vDRkR1hMX5gSQnoRqVQtbP6CEUzyNTYyex1TeSuairrqKQAp3uZK8ag2",
  "key40": "3nSqvtyEpqX4vu6363yXa4d9vZZyXRgtZTzT1KMK7sCuw6BCG7Ya3ZryvDKQqFQUcxxkA6gvuL1kyLLdbhCkdF1E",
  "key41": "2TcHa7mkMRr6dspiEGhLBxNBsRdAjatE5u1wL2FPRuNvAarDioYT9NUBzbZsT32BwAhNLDfsxXqK2SukahyNAnWG",
  "key42": "22xS5ihVgRjGptUWC9fiwtcGsxgzfD5K1XJxsybuf5aQJaT4orY3piDCmTs7YntbyXCtXnkNNNm9U9D5y1r1Q4mM",
  "key43": "3AgF1E5ZS82LEgMzUTfx4zs7yv36DC6YFLgq6Dxi7RNAnSj6rUVWS7AfigRzXDoP3EUyyvVt7trjvoDr2i2XejT2"
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
