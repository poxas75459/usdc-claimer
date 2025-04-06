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
    "KkHz19AdvEHzXEBidwAGyYx2nGZ8VFufqcLNLJrfGHriNd9WCzS7nGd8A9TTs6Pt5eNkGbXdvYUadVMrwfiJekH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRDDe4bmQhXSKuKEQsS5wWYdj7vNwDSmUkQQ5CRtFQE3mS5sFkncW7hpPNj2eHbyYvApQGuw3PNTA6TatxTunRR",
  "key1": "xosBkC8Y6oYVXerhBUZppUbvJneTsZwnHiuq3t19cMtWt4Cusu3FQDaZZ4XwXfUX7gqbr1PM4AZVDm86yMayisL",
  "key2": "5Y7tpQNQbMF4etjXUS2qBdbZQBkCTze1BMfyLDQLEXpirizfi5wm6URW5tesdXZto79SQ2w2MrfFQLAheqqUcTNq",
  "key3": "3NWw5KHksHq9Zof33GaD5ZBchUnAeLpK4J5yCLtsQVfqPLHSFSr6b5uwfLWMCGSuW9Hf4ockFSCWg3AniSMco9Rt",
  "key4": "2rXUCiJp4GpmKibHJMtUn7cEDWcDrJZArsHvECtEYdiH7tcpMEevAvEcfJ5s2xtJJSiRSJhZMg9WETsGs1acPLqA",
  "key5": "55TYZFw2oP57CnvvnuwkEDivBnsPm1YeV4RF533fwWWuxwoGTbtcxaGqbeuTevpXW2zpZHkJz5coJfS1ymgZDCNA",
  "key6": "4p67JzziiK4BvStwgNqEkF4eFLVzQYQFqtqG3urqUJzC93CD5BEcMTMEtNVUXEc8Lfhx3xQvcBpKovwSEq5XtchQ",
  "key7": "59RVs6BMYF17ReCQp29z32z4UBrWCAjfVc75VHGxScNNHVYCotw5mYbRB9gvDpPdcQiZDUQiexbPMBpSJjnuC6EE",
  "key8": "24KS9TLSFFysvduSFgc4MoCRe6Ve2ATgBFudc5LibFk2f8JzaGkEyxyXMyzooZ4GfbGqJDrdZLYRNAzykkuxXMB8",
  "key9": "2NXJhgRgstWTuofUhcae4kQwors3dKKKp8g5DkYJEY92QcNhLB698p687fdk3JY7scm2nYCMiHGxhCe7F9QVf2Rh",
  "key10": "4ZAoSjh7YqETK4SgKwvHAzSdPyyPoaCHAvJYHwp3bTL3cn3htJfRUgZvMDRFMVfTJRXFY5K6QZLfKALrLR5rVHG8",
  "key11": "yD6KnaAXEsLhXe9aTDzM48QQPJVhCsTvBfSK8gzsLPew61Zs7d5K571SwqqfSFyiy1AwSCfLPw6XscBeE5NrDZJ",
  "key12": "QMNcvJ1jVqjH2DoCyQ1bEGwWCANL6KDqBFb9BtSJfNKVrmoysZC4rsxw4hdXiozDbEqoQ8uBTDMj5WFbvWPDf1p",
  "key13": "2EnKzweTFYFvB4wF8zh2NFB6kPaHh65k5bDam22BUAZ8CxCsjW8n8SgsSGrSFYZ8wDJcxDyJFb1Fd1BhwXGgGq7c",
  "key14": "3ADP2eT9Y7XcKZQdkPTUPG4hQqugnhktxBciXN3GYX8psSzTN5qArAxpSeiL3MqoWjzGmvJp47VP5HUzvgRZZiB3",
  "key15": "5NNT7YTkAvoAGdtzayaDJ5HHsmJRWoRdL5e4yiocuyPKwiWEcvN8Vmf1Wtaak9ErvGf2F7T7Av8NakV8RGiwgfBy",
  "key16": "5unvVaH7pSSBF4mxQWXacGiaiss8FkKdzrugT3htDk8EBuFE4u8hNG9KFHfWhHnfegFuqRPispHmZ4XrhzZ7EHva",
  "key17": "4Zm8urPA4hZ1kJo7iUfhyNgbEKTxQmb6BC1UHHgDrEyAPgbDsds3LazzKuMUKFNHZCN93CtURtvbT2bTYvKUJkh5",
  "key18": "2PDrJYuE1SSdj5d6mMVEzFBGoaVVN4nNA7U7kw2wUDyFPSJh9zDRpJNuUa7vwaT1GC1Rt856tZTgcyeMEiXnNwsV",
  "key19": "56Eq86z382Yev6uyxLbnmg4wQemaxYPeZvVaM7RtufCJvvNvNg4b67vAZWs6deoXCZpMGkzZqbnX6rxtP8DYSdaU",
  "key20": "33Z6fj8vr2owEYRsUd5HgEXhG59emufJDasraHfkB9fvXDSBvv5RfHeRB8Fm9Cc1LvURFtLnsZWGy98rr3qH7kCT",
  "key21": "DXwAMRp2HMq86zwqfxUNcyw45Agq3rw3AVgpNL8Bi9Ve5tJXMhiKWx9LbiLxxzhEuR5zkqaDPDkBY7ttusNaeLc",
  "key22": "5V5dqJtEShySvCDsAYoic3M21vh42GHFQwhsBFJcpkj6uLEgbyfztDWbZmhWPN9dfyjBtAfXUrw5NE3LNbKCDC2A",
  "key23": "2vDg7YjpLRziAvcNeZUiciZ6rWngeifu1T8DzzddSR2nd3YRdqVmRATrZhGqaQ6pS38znNrF7KeX4SBv86SexiLP",
  "key24": "5MBX837N6wt9SyVsdA8UjHZkNziGFsYHyK1dftjUArBFMWfW4dxaYEUZ7wbvi7Rrk5Lfj1EMpdAZKFigrrJ8qMfA",
  "key25": "5915gCJFReJLffs7KJWNzWrTUhsyHftPVQNy3iwHkxN8UR6XP8p3Cg7oc93qPzc3BG8ZXpCJ2ksVZspjV6yxWnE5",
  "key26": "N5GGVkXaJ3kgvJuvmfKGp8H89QLUR1dQEGxymgeBvpX2e2eR1kdpchjp54B3grKuKZS21se3FrU4MFcQyTPkrst",
  "key27": "5eHBNgnj8GEn7qwGEcTUb6wTXEPvu8vi6epVbJmTBexGhKffPTKFPTnCEwe5Z6xzBAPKFBnYyi3vTz1XC4iqkj9K",
  "key28": "LyJJ6nBRLyXnz5SuWPczMHga3FcMApjSCE5rTfEmGS691tVmK3ez13jrSBd2UXhrEf8Meb8imqTsinSuYctZK7K",
  "key29": "24D2DAw9PD6Y13JsHZY44mVv7zd4XbFe8vAbYtW5pzDmm8YpnupLTqH1a8wopJ3DUrW7CQjXt6RRGv6uExsEmLud",
  "key30": "5qxxtWwwKfLRiEueb3crNtBFtWajZ6jptr6qLYmjGpZ51tk9RNEBhusiLFNFTZMiJCqkcqZohc6s6k3UvS9YRrzN",
  "key31": "5pw1GxUbf8WTHucZxnefbgRcb7j4ejAzzzX5y9TPQ1aHNauaar6vrG5Zr8URYvCwuvPnHBr8ciwu1waQYCnLMALs",
  "key32": "sHsAbmrE6NiGkTDxEHEPRbTCac7FaLs4DmvBCAePotz2L58Nb3i8Z471Sa3XgAbLQiTaUjmu6yUQz3sJwfki2Tx",
  "key33": "VibESV5f71FabRg85VV7A4ELjZJMjpxCKhRL5ZXRrMPbxhTg9iHGor7BcKwAqp1fpF6haty6HCV5VLdaLrGCm34",
  "key34": "3J5oytDqGWpaRKbhtj1k4FybmA6RTmTZBdvZ7L1HmviVD9KCN6dCtGYjrnnPA8Wwadvnux7fYPQtAWMqqRg1wD5W",
  "key35": "5uMi47Eh9BjmSbiwpnG1bFJFDeHt78hcUnuHBSPNQUHp6saikr7eVWpMnKHrkyadsBdKDSm8ApfF5Lk51qWWG4vF",
  "key36": "4vVmaqjMkqWc6P3vbwuy3fzgASbyCAgVbn8QwDiZEgQM3xm9t2mgcFFjiDuGYida9Q7z4PBZ3jZezEBfqAUfUX8G",
  "key37": "bvTjSVkgpScpyAQQKY9pJ9ZuwRog3QezFB27nmDhggtDQVoCBCdFuWYmDofzt1cGRtA3DCn6cspVGh1mByD43Bo",
  "key38": "3thLxyFxzTZxA1kdjWTDfpuW63mSnJrCyY6Lqb8V5cXj1XiSve2BGUhkAS3CDpiUVVHT9hUyMLpyFguyzfB7jBgH",
  "key39": "4Joswv6qcd3wwtwRCTZfZVpR2hfsn11MzU5rMc6kCcCvQRcH5o6dGtaNHv3VWevrMPFWqtB3sFiqFdgXjnfLk4d3",
  "key40": "4W5NLXKj8grF8RXHD8w6NhbD5WP6Wvbu3nscC61Cga3mnZ3J6Xf5zrmgkt5kKRErxt1QgvKegUWaCL9wpTLAvtmc",
  "key41": "5u6wteTvQ8c7gDZsmDNxZp4E9Yak97MidfF1KuWtC7d6rAeMEw8HUCfsZXa6WVU5PbvqUEEsSupRuvkHV23ufkHy",
  "key42": "55usN4RGCTEoExH73fVYcuLvgA7U5mgHUDq3y3xDjDvGNJbqzaynfX67ohifHKiEEFHR5dGg6XBkHsvg7Eyf6Tgd",
  "key43": "2gLLYTRbqAqTmvUVhrtTmZex3AoRMr1MeiGyR2EZV5ciQC6LSTf6ugkH5F2w3WRSCzyB96bergRdvHDfjN7E6C9Y",
  "key44": "56cB8ZHrRbMpu4CZioWSjz91jqCKHGzvB7kwddTT4cTgaoY1oJLmkmAeS4MLXDfCTda3oqHAhrztDGHH2rGfQmoF",
  "key45": "4PiSqV3z9FoK9ssdqEmCJhhFdAfpACdK6QtSsSYG8Y9idy6juV4TJH5SETnXPvvoBMByYVFrD9fPxsuPGN7xs8xh",
  "key46": "YWPzdDxTWYKjwxow6X2or6YjSu8yF8zJgkkVRRBgEGHYVPVK3XvwSVtCf7oWYAJj3SQXy2VmjxGaqSrYMdMphXD"
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
