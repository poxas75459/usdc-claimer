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
    "27ByBsdr7x4Sf3H49zCHShTLDA7PYSGQkDBp7xeYjeHFTXx7AqGm6v2cKRMTFzPbk452FxSdxsJzT8EznEDKT8WQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Y2eh5r8p5PF7QgnNA3yy1jwc6dQ8Fz6jeLCvwv69C365ELpo8FsSPubFUY9WqttXop7WLFCAcfdPJHKfRCVFP6",
  "key1": "2VVZARpCBpgamR9aEb2MB3zEcz9BQjkPAkshFG3WtZqNVf4F3ya9KYhV5RyZCTWSQRzSEBqAcSQQJLkMHSUSRr7J",
  "key2": "UrH77guUtSJEws8rf7MzdZ1Yu4f6aKpHhs7BVg12c8XPHAiot116LoJkGoDjwG8MAGLFsbuN5P9iYNbfLB2wSvL",
  "key3": "4c1LeuyAfC7KTtc6vyar6kENoKX9GHm5XdZQAmsWtzy1DBthwnWKFQ7mx5cuYDoLUiHh58FCwqvxPDX7TNNCJ9SQ",
  "key4": "52Yq4PWaWJ7Ut9YgvktZf2iA8PMWr6azFmH4ESvydsca6JKDVG7UHHdG9ejVDKW3MwXgnQmApu1AWvpyb6CJXeZp",
  "key5": "sQUJ5Ebp8MrnHF1wfR7oVbHjMgxXFBzzMHNGjxGujDBrE3orRdySAP7bYuG8Ad8PSJvTzLqS3RGCT9PRBvzfVCj",
  "key6": "2PshJAAxqPj4sUxbCKpsjAbv2uc16hLXoJwgXmTHNHofYGjUoEjT1GD5ViCYCGD7SeU1s6qMCTvcPPqFgtUcFx5j",
  "key7": "5mhwdbKxzNmtCab8ckoHwFsNRKKviSAdH73kd6rXmVJba5c3epg815TkSMa1znB9rsKNxQFKETdESTFTuxZpgYXK",
  "key8": "4KfsGhTMWZdKbFAnKZCpBw9G3c4FayZZaKE1EbvBQxT9BmhchiVpAJXawuDQqYT9BCxA1zikdGsZZU5Bgc1txrmN",
  "key9": "4gHjH8wE3XmsJ6V1ZSAq6B2bV3E5KceEBJooaqZd9xjmccXV53cyKyZY2vSm7tFD7vXZniwpNyX4h7AcesHtVyCw",
  "key10": "2uTQGs98KeMgBmtE9BbiM4ZcHedAWjED52SRwnGApDaDP593MMCSfzfcixQWi8gwuCjRKWdn6qJDRohNcbznLMmf",
  "key11": "54UN9hVvSTquRx5iZsmVc16iyCq1JHc7mBxVroFhkFwZ9WjTc21yY85P5WX5WQ5JMRnFGczr1yebKT4TeaH22jaM",
  "key12": "34BNpv16zRhu8fayTSHndbqwdpMUZJaGSnkPjhNS5sh3RyMRtLMJn2WM9JDMWaYza75VmJ996sNgMRfZZcaHcucm",
  "key13": "3WnbGUkhwZkMyTBvVwAuZRprMYgbyTmjqFZAnsHBeDV8Tf9cGBSPp21Th1T395brra7uVgCSAbWkbJuWHDTakYDb",
  "key14": "3xNAbbMNqKpG9Axb2kmqDxHS1acambBJrWhHC2434yKhpqBmtmYZbMaz4g8DD7uXUhumRevWZHNk3nrdgygpqmjv",
  "key15": "4CWorMUwMJCjJvtrSKz95uDXJBa9m1z6ndMRsKtwViLzrKP7d8hPWNpvvkwoERJ36ygQCDbfZJSJiT7RhU74buTK",
  "key16": "3oQiviACTmFgdcwseYiWGdDqjZxqvccxJSgMLZHiuUhmq45o3DWJQwT7JZMub48tCX1hgFZDDPGwxebmQkP7UL2C",
  "key17": "4iqXdMUuF3WHHR4pw2BZwWbXz9gHQR66P5tgHbSmdFFMK3djwhv3x8z4ntmK7faFMK1ZVs8zUaSF7mjKqn3xYS57",
  "key18": "2EKbsP26yG3N4FrvXTkWKKfMrqxYswJxPy6koQBDE5pu7Y22Fpn1ELvFSbyLePdQ9tvz9TXzFo8tAKCFvJdCKA29",
  "key19": "4b2xh6hTjNLKJs25xWqbyrHc1b5eLdTWkFTszHLGKvc9GWdrYWZmFu9oCyzRCrG3U2ueuSzCLTUpKqqEvnGbT6KF",
  "key20": "cbYLQzGTwVoHcLqrqDZ14snan3kNEVAgddPYS32pxrT22VPMJnun5ESNWZ3XUma3gzSXNXJKnUAFyL5szwTE5mc",
  "key21": "3aJRodZRv6o3VsMBA59Mf8ZZE4WG752rZFD2drReyeb2XBz2XVtokCjRf8Jz9rga2gXV9wtfwKVNpgPC8cMGs5ad",
  "key22": "46MUJBMs8AaQSk1aHVGW5GC4bPUrLXBPTsre6yCxnUG1ffQRYGKNKAAnVezmeAZZdeS7CQrvPYQN72bjD4rF1kUm",
  "key23": "3C9dUzHEdNiCstt24MC6JvAGUJki9cCDUGMWTp6tVDNvuizCLgjvGe6HRfwKWmFqs2VGjukGhkpmWEuTxPCt3mhG",
  "key24": "3h82fZucjRQrt9QDLD3uP2oWV2zXFWtThkmqNKV1wD4r93vb24AuYu25SP3j6BSZGJ99gwj2JKahHZ4acVYZMPU5",
  "key25": "4adzFNDwqi9nkdvwexeuGY2sA1gMbpcqZyG7dwtHqhcr6tVvKiWx6UqAseR6Sstoxv2XNN8LKSKR51aJSou4Bq55",
  "key26": "2aw1zLvi8RuMWoxE1G4cLeFUQdh8FVkYqKXh3pVCCChHjP63PA5THKLNmoujapjg3TTjXQFcCfeFkriAedQVqyAa",
  "key27": "DkyDFk6L45xgdtTXb8WmKyWqnEDT4yxEumsvq3TdMFtmYpaCttWGvwU1XWnDB3gK8VbcbCGet9SU16YUcmvweXb",
  "key28": "51q8iHusHDnmB3Tsz2Qa7Crz44mfxskdvdznfb7MskBQQx7TymwVyH1W1FJU7oEpSfjTcrU2DTzm8474vQbnRSSk",
  "key29": "3mkvrpmSofe22BBDS2BP76t51wWwG1aio9BjU3WaHGdGE4uKCfSTuqLkQ6vP9npoEu42e7Qxsfh6eQbwmvyf27Mb",
  "key30": "gcGBoAFareJGWQxoHyEM3Mn5qon3bTFJuCByZGdzEGQwnY8mVShdAq2vFpYPEHmPCbiWbTyurAcwNMmbmBUaN24",
  "key31": "54n42vGDyvabu9fm5km5EyNGQo8wTuUnMzbd5DaVojU5W7LVqyi6KdSu4mv6NXk1WCxsMjbPnp6WRRZJsM7kqcZr",
  "key32": "gWNdoKB157MXKgbUXdtfsDTUsq1ZaW88c244XxbDj6CNC41ZFcSDo7un5YhmBdhHCmE2wmuwYEsseien3V1e3ed",
  "key33": "4wt5BRfsau3F3pPV2zqytfCMvsGY2zV877V1TWgSYBzc9CAxMrGpfaR5eV84hffnuXM1qGpAhU3NSCL6FfqUoS3n",
  "key34": "3z4Fzf6FJqxxPZpNdAGNUfifWigUH55rFGk3cmyUtMSrG2YqWbgfNqk11JT4DpgZ2xRCVni9GB5J4KjrrZKvhBgM",
  "key35": "mPKpcWaumYdLyADRT6uVSWkUb73gWmfCJaELGBhR8jVUJtCwBt8sAfPPK6qfHzMHismbgwYC9sKPjvuuXrHF9az",
  "key36": "5Tfy7UwRvRd7TDg5v4zKJiFi45hwq625ZuWdLirjEViehZYCUwoxugnJ4c5rmTV4QrBfTd6CqZuKUP8cqXhH56KX",
  "key37": "2mVxjia8tFWgtKv2Vp3a7Fkc5gtJxZNnSD8kfKZhEL6AUc6ZQTmnnpZCPMURW6shcHDjAiAcRTgGt2eDf7ySFhoB",
  "key38": "2FgEUbuzLwhegSun4cNaJpebksppW3uRr7zipxc4BmkYzxKsYvz5ZCXz92hH9CgUNoH8vXf2t2fwbqvyoYW7CrnC",
  "key39": "55b7hNEDovScXAgj3NViuJzaRafPcYWz6J98tzxzgD3YfCbGxySA41f3zxMwCG9H9iRRJkAg51mCG44xACSxpKuf",
  "key40": "UfVTB2ZAvEmrMxRFGwfvYj94myhyQnz63ox4y2dsKEw7qcvBKj6aJcfZPgmfkYq7mJEA6AhRjRHVpce42R1efX5",
  "key41": "35Mvs19SbyiJyaaLWrUfpS3gTkgsbvu7zY8MfKKJsBVLLtyBHNr2dVeKVAS9x2kV6G2nvVddLTUbkedYz9NScQkT",
  "key42": "591p1XmQ4dtwt5qrwBGJCwWtzyzGUba9GsijEmZ9whiyh3gH78GvTa8PHo1UXuy2xPmZHWpCUkCtMUi7H9hDNRqq",
  "key43": "4Gwjj595FZErFTZwGK3XEzmbAqwiM6BvUuhcYrM43brbPkNiE1GVsVoqGj94T7MHwrijXApRdZ24RsFuVxYJYhMs",
  "key44": "3spKtKJYLaR95pUFWBj67DAPr8Z3Wo4dpq4NsctC3jMxXMViWmWEk4KHiysYQP3P11QEvh4dBFRgEGimR6zwzEnb"
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
