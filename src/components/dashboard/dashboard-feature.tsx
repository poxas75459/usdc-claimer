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
    "3JMd3HerJHvB6dtTs3MTnnoMsujEqxsByxwadMVH2CV1C4TzcV82LiYvCHrLHydNp4VvE6Kh35hKGFswmmQG7swi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284bQg5ka1q2VqWKZ1K8v5HCGFTr1rY59Si9MfCudXqMG33SXmRtN61jSDwt5M2NNpsiHgBkf79JwUwpvbY4ucwi",
  "key1": "ZHbhPsJ9XNDWu1FTEpqaJcKymRwqe5VwAoVaHASuRMCky5k1Pz2q6YLgQ5jP2J88jYhBrhWRiuEu63k2o4AguwR",
  "key2": "DSWQT48abz1ei1dFk393hz8kQA3soDXqNoexCQuJ3DXxfVpWeZTPLix6vYLsUTb5fE2A8ZYZc2YFbqTQYB88hox",
  "key3": "2x36shQeLPnqN85ZoLmzh3rmD1pASVYUzj8RbSTYCEinhs9gr6yFJ6q1cUQp7koMLewYqQqVR6SX5r2thnMPgEZp",
  "key4": "4NNzYyubP1MC9U7hchre9GDbVw4UrJmYsUMyxft7EyPkSYzhusQuY9CsnDJZUALbgJY51dBY1Yf3qaFLXCcapsAh",
  "key5": "22tnXCcE6uJDLUqsu2yQYFF72pntnBbP7rcoCD3hYPRKVWz3kBZQNESLYE83ykYLXiyZ5JnjbmyZ4kSNiBQkubKf",
  "key6": "48E4NdfTtDgu8mkTpd1dMf8GWNzEs2GjWxbgCMqk6pyL15u6xxXbwtHboNMsAtyy3RoENM9R5zB5LiMKYcDvXkD4",
  "key7": "44YGLxn2EkthrThfPxRNWjrGCLNckSkdpnxb3ZTEosfQMwPuCMZREVXG5pxmqJfAPDNwh88LrvLfYQ6zVzASrJVW",
  "key8": "4Y5bGTY1LbwWL8RpF5csVNgUmp3DRsTgVKVvBLtpK8fXUuVrhAtG1DkF7bjUBkzfRrGdETHyNRGrVZBGvuQGgoBH",
  "key9": "3uTyViPXGA5XZxnDkfqKFa9WZMWNiRKDauC19cLi69xZMmu3AFZybgyBWHgEBHDCvzen6poriLtweUBcxwAgosKw",
  "key10": "3aWjirN1M5kXkWPZhxMbXQtHew7zL8Ggyagveahjfdra6XAhiJ8PPtTNef8XDsH5VoGQ59ZKmvVimfohKjdJxudD",
  "key11": "3nRL96qPTkLuJPgadY1bqAwvUTxTyc5sRkanm8gZirPk936Knv9FPD6iwk8o5tyj4uMqEJPtuJPv3ScQVuTyYy7x",
  "key12": "5JZ1q2TioXejYBqyrqZAjtuMYCJLuWoVxwT28hmAY3T5YZ3VkaNKdfy7h6or8Fh1oey8ukLFGe8r2HViNyv7eowh",
  "key13": "5TRMjrPTfvSC4LrUF5Qsvq4YbW55LszWCdtTauFdEC6L44qBevAntfTmiezfESYFYH92UwookJMte1fXx77wmCP8",
  "key14": "2VbeezTFzY6pJ2YPLd8vaJaSvhfLZWZcKM9tby4goVX7nYA15Am1wsuiJwYThgyiaddeziqRvPmcxUKVXKCWqwAk",
  "key15": "2QvB875eJwP9oehA6RftzDjGnqRYRBZuV449d6sBmwcN4meCtHM8ShtXfHKq42DHxhnC1TnqaRnHT7yAdKLGESjA",
  "key16": "5eCgKuRvWYbcX4rfobhGMipMMaQDxqkdyAfdRtV1t84pGNk6yoP64eaVvwTHCnkMXEx1jQWjRsnhaZriDsukfhHq",
  "key17": "TKaxXkRJR94t581MypQteHyRg3GwqzeEt5GJb6QgtGCMWmGvwxrcybLW82BG878B1c7ni1oHJM6Fo6p2obT7N2h",
  "key18": "5ub81D7xsymxT7eCU5CYiCUDiXFZFFKLYP7frjhqR5ZKhc18twDQtbxxXXi5Wzyr3g5g8Jn1HnbH5pUekqQXwdUA",
  "key19": "64cXNVi84PmVVEadVd7FmJS3qHCM92Y983X9cvd7CZa3DTkN4sV3z9ceNhfbUhcRhoDNZjZ1iswxGfbbWPmyNku1",
  "key20": "39c7q9LHu7HDeqMGPAvqBcpYdxbZ55MAYmaEmNGky3JHd13V9eCwdKtSe44vN85qnjWr8pg25VPMkcEu3Xoy7h1s",
  "key21": "5kUEZEEZG3zmkRwhzGRcFDAXSxuVMeGZ3Kadvg8NDskfi56bZvZAMRdb78mA1fN1biuFJ4kKTwN1mYK8r6Pve6vB",
  "key22": "zAH2iC7DMvUmzW6fhz6p6g5MeVPXxAUoamYpokaBoa9h6sgau3gCMFkkLr5efJVUwcMxttK8HEUwGqNMKfCWFTH",
  "key23": "25nx6Mjt59oJ7Wo8RDTs38W9ntSsbt1hex5Dv38rUEZTRxGWRw3fq8GipkQdcy1FjpqKmS8nsQ88cy149G7g29eW",
  "key24": "62SjnW2sob1a9DZJ8GXVLAuXvWrK66e2FBrvUri9eFsECsGeyE3Ypu3toVkTiqXSoTbJFqPKLRkE1pJYvStRRCU8",
  "key25": "4jrZUYoYkanXQ5f9eyEMzee2roY9QR2gSeFeZ3nhJGp6YHFGvAHf2wwPRVMQUnnSmHTXgpsiDf2qU1mQb3wr2TP5",
  "key26": "4A4FQCVDFCYgApJYyXsvv8JTWZzowgZksJwrj4vWvEdjsuxGKopPQ4EGdayHpzxjZCfaHz16jLG1zM7Uq3nJErdS",
  "key27": "2RatcsqGi849mzbZwb8uiWVZj2nPKEbocNRmcZ6p9gdVKGDQZEEoLu7s3aLPmHZagRX2LPM56A1E5FoQohrRvYq4",
  "key28": "QbLASJgwGUpSaivymtYAoLp1ZxMzBqyuVwaHsqhw1hWUPBcwkZeenqndfJDZvbrSmRuqRFV1rcrjP6hPaWfiMML",
  "key29": "2So4j1KQ5WJrUMeCv1HXtb7N8cGtnCnRFQn14T2W1GEojFEUQwMHAbkHP7tDG7cpuS1VKZZVXrpXDHSzDDSAmbBe",
  "key30": "3CuXUcomHk6rwtPnJnFXqLf2o7Zug46GiiwjCnWauoehbHwpaNG3VHHPpJRZ9zuw4icV9nNRzTvo3Fn5DxXvz51R",
  "key31": "2Bg2Pc3L9wBmwgU6djheUbWkUuc6XWwtHDBmBaYn7iy2uAvaQxdBTEa6X5NCYBiL8RU2SjVwkMaY4KxvqQJ7ML41",
  "key32": "3y9QHhhwZabDV7jRkGmBFpdE8CJzUGGtFcYPGqYtedKbZmvoF1U7xvr6XersAT5GEwTS3rN9zkMM1j8SbdyA12uC",
  "key33": "52n4MpDfbiUv6FGG2L8qXQET8tyAQ97axFFki5urFAEyyxQ1qfTjbziJikHFucc7GoZPDQe5R1DfHxeL6tyiZ9nP",
  "key34": "3HuVna2KhZLLDoDowSJS9ZpiZo3tqnuSaX39JDLnMu6LdA3Zs5gftZf2gyGgbrJYBq8SrMi2kJfmQ4cvip38yMnw",
  "key35": "A2aXEJnrYhycvzh7qRH8azRPTi45krBap37gfwMFhQ3AGLqM857HQBXQtxibC3WmehAL2MpDrWt1kzYJsb26F2p",
  "key36": "4rjzzUbgZavBEsTfkfryUzMbhzuDxuueW1UXAEnx1EVuBEeyoFoCRJxbfCYCeyJhBWWS4cxNeWFbk7dEYQCwDikw",
  "key37": "5MKvSoJr3yn9Rxrt6mhnXAYi5cHCcfhEbRCv1TUsngMJoGiVMs6p7ozWyeUrXCE8nFLCRrdL6vJbqWo3WHWXT69g",
  "key38": "SEpFbXkneGri7dDQ3LyTWTCHd7KaQ6ZYmdy6wBf2fVWcd6Q4cRVzidb1zeEVHWbYi1M5ACjLnMLdxBxGugstfET",
  "key39": "ZtGaxrEUNTqGRj2uTCF2x9uqnfTuA4cDc5VYgt1r35ZQ6i8ZLbFPG6TvxL31nCKUvZDAFdG7EcoR6q98UvLj8Wh",
  "key40": "45ESZasVYCumP7BJZ86R1oW6MCx2mRx9nxiHajbzL2VAsHTQqvMv9DPw8gWjabzCyy6kBAP1HWXn8TVs549Z3nEu",
  "key41": "3guqsPmbdw16f66iVpMb55jLQvaVCXeEWBjnsyHo1LxNxULXaFMp721Mb1ZUPaWDkzwnVfVz36s6TmcTtje1ZdUj",
  "key42": "445ZYsFJHmKiN7pxkJhoo3GQzuiPmA8ztcoGW2qCoWZQVs38VD41VMMSpAzTSwf8Tj2E1CEYqwVsa2Dhh62AF4Y3"
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
