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
    "2U3Qd9Qovca1aqeVmXkZDQdY5ZhSX9F61Kk9o9LpPT2DW4fujCuZ2puYWL3nxcRwRt8NTyDbBGTkf8NjLQoUbNGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55qq8BvMiSt5CnbNXDq5g11Ar917RSSp2e53sNuYYozgJ7Mb38z5oUov1iku2CccasbwZ4VGp8bzNS8KaWNybJK2",
  "key1": "2SBdb3KYREeTf43NRkyKRCEGPSsY2nUpmoSBfmqXmNQUnRHe8NMM6DqbUSnfWeJ9T5CtRUhdgd4itKuXkemtDYwT",
  "key2": "5AXMeWzd5xZFDB5FK1uAeq9fdAJXHcT6iYd57cmwTQ9o3DsRt21FFXDKCME5XeamoTbwSPWMN72Zxg11Ct7UcX1W",
  "key3": "4iN6KuS8FvDnhCzQ7qN9PANAiwa8d8djNBe3Zir9XMGnyi8SQM4DrusnK9AXuPp9E98ag17GJvo4d3JkLSSXXyFq",
  "key4": "4ajfo2dFW7a7cE7LMwAtARPztw6UXb1w26Z2Y6ef8J7GmCxV6Jj6t5F5Z7FgnMo44DBki442EcyDZHxDTJFxfeGB",
  "key5": "3iSVnxYBS6E1m719tzAqBtyb6zBJdDtGV6hLnSx8J65zZgaU3BR9HusDtycstWWHDQRt3BbemdLXvCnRCH3rtcze",
  "key6": "4YSKziPRseh2JUzjywAn5RHcjAUHfDEf9A9M9ZrtrpVXy5zzWC3ZAP2JeYSahhoR34hn4UL7tDvLpFsBmAocet74",
  "key7": "2xiJ92vEcDCvt28XMsVmVgipNZ93yFWgDB24eK1hkLYfNBnEr5nG2hou8UshNEVPNgN5tUU9EqiP9JtGLeE4Doby",
  "key8": "hfcW7k2T9pwsHSeavJJ6q86i9TyckqVrbSCfDJF8e182Yg5tSNBiFPNb5a2jqUEotZR9MQmbp5HR1Tw2WC7njL7",
  "key9": "32cB3bEJtoViYHDRHSz6rYtWCA6PDPsiuXtyJc5UwivcMXkTrF4ToNnDe377CtUnrhsrEEhgWqyC5jLbZtyvFM4G",
  "key10": "2yHExt1ckS7t8rhJ5jkqj4fYMLXmfwpcr2QpfePh9XqTKN7zyiA1tpgUneUu4WhjVmLk7xN7CnMweCW6HnathH3m",
  "key11": "5nwAaPWKfTN2tBgrzqnE9irZSzmRcTT5adaidduJpbCYcJCxGxRNbBCK8u6MZTkzRYrCHpbLvsxH22rfePqYq5KV",
  "key12": "52itCkSF8dxxo8uDrNxrdvuvtc8cZkFxsyrMb8BjzHvQAPLRDvh39QRMCq39JiCJm67S3yFHbkzCvv2GKiqEHGh5",
  "key13": "2e4AwSx8aujDbUVZ391Mi4JvkAUfBzX9jejHr6WiNQGpcurRUpnLMwp7MYUsxNNxqUm6h2p8nYLBGy59RfAuztCy",
  "key14": "2bQ918H539jsx4BuUq9MeubsbNcRE3xyvUtDaoZ9vh9kkq3XZ26GbCcT56GmMpiJdEQ6zWxr7haHa86tpCta8pqj",
  "key15": "2jWn1T2SqiMC7G7AnvixEhj8QwCD7KchfYJwDkxb3mJPkrCPL7pH26aJLkKYTkAswALFCYnf5sPD1AFkrqw8Ubow",
  "key16": "3Md3cZQdeEUvv2A6VZe6YSE7DyuwCczMDHavdmg67ynQPW224pZjSEUPWzCrwq2neNLiiLgjNLoRBeeWkpbG7RPk",
  "key17": "5SvXV2CHzEqJoLokFGnZgWW2Ufmz2QpCv86gTFZvyJJGMFZV7YDp7LqiN7Ueg1dxNqztmeia82yVcSnSRLSKNW1U",
  "key18": "ic28js2vVewMX1nV45eShiBtUXEaQgKX5gvcLBBMPHtaSkLdVHsctVaeGWoQ46oT6FZKX9WpQBXz22SEbidse1S",
  "key19": "3AGTKx5qWZajCHfxsKPrVrpzv3m678ddbAEj5rXktRg9hwgkHW7XrmAi2n15stQnUZmVxY5CrY95YrNJ811UL9VQ",
  "key20": "2ikGtCvUwfLHCvJXZL5BkwUgWv1PxD1EVxpiTAQqmJEWmk4subrGmSyySbqP8AMgpU9eCRV1RAW1ZfxzKg2cCGsb",
  "key21": "3PidhnVqoucET5waiXS5otvxy3rRZ2vaBfNt22iz2AoXgYwbnfqFtjJqm1M24phSSsYz11vp2N8AQBvo8B2bNYAU",
  "key22": "2rTDUa7HeyVaHztcYk5TQPnaJwtrtNXKdJ39QNo2RJY16RLgik76EsXARpk8ztGWLXEj4N5FPp8JxRMRecjsDM1a",
  "key23": "65irBxZkdHyJ7gUPNNmCFueFEpru51g674pxZszGNPj1Cg3MMnB4hj3pJkjdaBWcsrjDtBiDojfmrUKYy49GXdWa",
  "key24": "3ReqHvk6N6pvDMUAk7tvwDacXxLjPFSwdsKpmQFHQjFzDxckLDyCYWo97oWsxJsFDbdNBhss5nFSKQ7qKmZSmx6z",
  "key25": "3GNyFNy1k2fawd1Jy35C2m2rJGYPyx2L7zDAgDCJoFAkCmWjQyKnoTKb6DnvumAoAreanzR9Bz32Zb976XBXrcJE",
  "key26": "5CUmMpHSq58a24apc1Qx2yax6yHMT2ycq9GEmCrkctwXKNyQKU7CCW8S1mQEec4diMCSMBpkEz56LzKCxbayyqPA",
  "key27": "35zfcHM43mrPFw1SFJj7K9JBGBWZjy7eVZ7zRgZ66LELQGDDP9ctA7L6KsRLev4zszQ4khu3teb1ntg38FVgsdRm",
  "key28": "5VVzpGamN4xCe4qZFs5oB77NP7Tp6LAG1dN359EdKwmBLLmdvPerDzqyRULEe2MQ9JDCNwfnYWeaEfB6RzxGVpB1",
  "key29": "2GWRNGZU2VJ2acAfWDwNdXVJo2wgNQoKuA1UHZPjo9zYAyn5zs7jJ9Cs24MXtbwX1wGdhmUoumoYuXZvDRQccNbh",
  "key30": "33cTvDAenbY7zXNDGggnBL9fBiQptV5v2aJCF5PU9zjHysA7LZVhe2yRXTom3cYmkJyC371e7TGzjUYz817t6zKE",
  "key31": "2bTRfbXQh5RhJMoyJcMPGnhtb9nFmRj793RL5Fk8mVwEpNBszM7EhoP398A6hMJzEXDzzGkUQaoAX8LDKKqUXa4a",
  "key32": "23tMh1He1TxuaKFrTt6278mFvF3BFPdkdqHXinGqsCx4VynP3b6xAKju5JuBpe9FVJAgztcJ7n2SQfopMjErUaP9",
  "key33": "5jpfkk4FtTEt3E7HofZizRBtZUcaZQrpqyHN44shhcqDWDYcYvXMD53GKc8U2joxML1nqDH26NL5Cr2LJbC4rPJm",
  "key34": "3JfidGfHC2NTCbHUTpTwcttigXpTyXxpVhvtPDZxg5uwYqEn7fDDBFyrgv22iqdzgVtL3USTC9AcJ1JbEbyQWDYe",
  "key35": "K7vprVcHt2R9YC2vVz5AmJagLmRD7R9ALacDcMHgVCGEMnd8MEfjYVg1fHDagjY7HurzroSqVLfrU3Nt9Vwu5Aq",
  "key36": "3ujWuXPHvxisMjmZB7LybUU18YAGJ7fzCM9dret4nmkScD8TDPQPEvhdaGZvVRfLLfBMpDoJVaKpzBEUgyMtyibx",
  "key37": "2hYvaeN52Udq2rSAGpYt3dBjhdL4pZjTgNeC48H4iB5p64Dc3t6siR68yw6JCoUfbzsiBuJz2aEMxDma9C7RzKzc",
  "key38": "3xC6Dy3QvWPRTGvSXt4ydrJeBoywrStg4n1bbiD3Dx1gmWg9XHofadsuz7VYgd2rDa79zrUTumrHhMXrfqeta989",
  "key39": "3A43EUVZxWUs3HMePvcRcC3uYr8EoU1db6X7RQS4sX4wD3Yx5X1f7FPE2W3TCXAgduFtm1EunjEJm3V1anZejpuX",
  "key40": "2bJSm7vAG5HFvbdb6ZkDDSKgXc4XGGzmkGQoZoBfgBdArUmim7KXDEe3RAbENFcmpJ8gG11onomMhYQ4PgZhY3W6",
  "key41": "4935ogehhNDGwaXJ1mTcr7Mros2LJ2B7Nz5mmzhJJF4GRTuGHDwAD4VfnVyRnfPuw4rfDQZeAscRP4zJjoVDivzv",
  "key42": "CwsKtDMQQuu7wWYQnEVFikwzxcRkiPCE1FrLpvcLyrANB4BfHFQySjE4QDeE8536MHFGVcGXuYepwMnNTjGhHDo",
  "key43": "2rKzFJATB1sfLJq9kHFb6n6KqggpCWjQrXnqMgWuRDg2m8p6U7e1LRBbPQhUXNcj1yakXox7ov4MZ9zwA4h5raAJ",
  "key44": "3BpcS5koL4HvWZ2yUXNJytX3t7e8eWYKTx94hVFzrs8SQTf9DaD6Pg7rLQitUMEf5fahybBvkaFtL2HUoQJUo7vH",
  "key45": "2fmuqet4bHAUPMA41cPR9Z6ZCQSsYCS6mtwaB5YAXHePCFhUziCh2k2mBmTJa3a7nqJQTW8dxbzBji2bRyBRM4w7"
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
