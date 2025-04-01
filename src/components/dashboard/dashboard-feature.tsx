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
    "4z2wd6YjJrpxCtEzmtQgVkQYycCzTR9h8QEkc2QcmgBCgh8pDXtEibnNNzSryp7esXJDwVLoA3ztp48QbDZPdiWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cy9cGNtD4c4TVHXuE1yn53H4K33vq3WrytA8UyGdh9CNJPuF9eC1ZtSmcCXwTNowgQ522oWuacBnQr1V4iQVpoV",
  "key1": "2uCDYxmRrp5E25UXyHM9vKYB2ymbj6WpYfCZANdYFJkWoFjtjPYn8zrcfUwWTZsCwoP2gnDRQa7AUjLYLWf4Szxk",
  "key2": "4fbXEhNdK8t2BS1FQTjXFp81sYVi2QVR8RkCvWX22c2uheheS7MJWhBqSnrGxqTNV7pQ3czxPArquN2bpme1QjBc",
  "key3": "5wTh5xzrjGNCTDhBSywk4TZnrNdQtLvmMoMSW79VmYAiPSfk7Eedp9XMQCMZnEhYJqxL37xAhDovPa8U6Kh3W2cN",
  "key4": "65BXSeSZJ72ib4QyxqHQTUNp37ZQCi4kdb7cjARBjQgre28aaLRcSipeNRek5oWrdHEtTWojcDrDJgabFs6u444E",
  "key5": "3acwCxzkeaows7tsXJZpXY1QyV5c8AjmFXpRfA2GqqD5dtqrzEEcatpNWZbw1cVq3Tipk1gQPBijNDjcoWwF47hr",
  "key6": "NqGjfnhbKifTR7tk3sQWDtzPN1P34qLQuLp4aEHdAJ9nonXPvmXHDBpKVD4QgYwG336RPe3u58WBdPQ4tbDS2u2",
  "key7": "4K8XynVtnR9UCcEnzAgNrYyDA19Kt84ErMgXHrn2sEtDtmUSsZus2V23ZnmDonBfbhn4oVwU6cfExBuJxz1nwYR3",
  "key8": "231h1hSQrjy1HdDzVo8oo48THdKYesCfsuQiwAooq5BLtwW4nTUR46xpjzQtVqHsyLSW4CGt1ntaoQ2kcfQxyVjh",
  "key9": "3SQUgUV83P7gujpt7PLNkrPuGkwDNJtk1rftxypsek513EmMd6Yqc4szBMKEvhRjbdu58gtQaWzK9T7bJmJbKv78",
  "key10": "BrMN9MHj2KQr352r7q7F51QTjSLXFnVuGsaq8487JFXEjZuznZsnkGRiajr4kChQxrnNhKR4Rk7oqRHKe2HSPen",
  "key11": "2K8RQFFQwLxWtFScUtpSGTbSzBh9zPWgLwJVFbz9xr9HK5YD6Q1QTacE6Uy5aNhdArdjcBXWcuH2TVwYb3Jbb3Lv",
  "key12": "5TxvE1uye8MyhBiiVjdTuSV7DgdwyRnk1hjkeWxjStLjPguzGSMdDqya6qpiYJEW9Rn75tMNK4e9Pa6za6rx28NS",
  "key13": "3DHKBwoq9f3JdwkaJv3A9LEwgwMfWf3gdV5XbuaPTA6AqkvuTtaJaRL5kXuo4vHrwRHVFHhovLRASDKD732FCZkF",
  "key14": "23aQ7MnXKLUtK5TFtXfBzqCNREgS4PruST5Y1gNejGK219hhemA2q9nFhkDVmJShhXBWy5DMFCYoGoEDTxPuvGS4",
  "key15": "3wFFxtn1dVEEXVDevZrRerCVS1xgpHdBybjDVdXNfnT61Q1qk3GXV2ANDiNHXGGLJACZyaC2GDGH12YVa3uFXw93",
  "key16": "38tyrYh1qXeJLtXea7onPU3BLf25BNCiFSkrFRnK2yGkW27mapCx34TbkUoiMu2a2s4oN2zzjAWrzEzx9qEK5STu",
  "key17": "3B9yE466edHEF5PZ6E5Y4GwPACfE6Z2vJ3qh5eAbUDiUuYCwWGVzFSLaNfZJCwwMaGv2Xf6vk6nQrUs1gAXRNXPA",
  "key18": "4GykLeAM939zR98Nd6jfRX5AcAgN5dZA1Kx6M4bt27ULytrSbjGhFkioWut6kMPNA76mveD1F2PaaHnPFTZBysp9",
  "key19": "468MWa8ryTv2WwL2Q1hqJEK6hPACAG7ZutgWuQURrgunD7ULWEhAgPKFEvGgb6PTHgJZbgQVPzSJgg7QcVem6oFs",
  "key20": "2FxeKQQBS9PiNgCXuaABpzVNq1141aaUiMjDjtTWgYnEF2rNx1Xp2AkDrbL6VJiSKar7Ebq4heVfSBMuRWKMuQ1B",
  "key21": "5xibokLKY6yA7dZauJHGfFUeaDnLKCyQKrGscMMxmr4XncgY9YqckB8ucH4Ftr9RPBfYktcPsaarMQav5Yo1NiNT",
  "key22": "4kCDQydrtuci1iDpwvwCprQxQja4J1Z6CFjJV24dcf7ioFdwxLgdJbpesBR2TxWcqwEBEdNN8kkX6d3wjjZ5QRLw",
  "key23": "4qka1MvXFq7AGNgm42TTE5Jfwh6wD2wMfUbkXgGvCEcdBfvdDyZetVPWV8sdAYC4Ym2UTXQgMDxx4THzaQaAxzet",
  "key24": "56J7Fuvi3YZ2yXQecrKKeuSjRCRsucnREsYEYKmvxF65ANUjLA4iA9BHvZG75jvJxQdHYNfonH7fVmFxsMFHG1hs",
  "key25": "5uRcqLYuijJoPr4Uhhci31PsKLJCPYMC3io2x8xQWjdmsPX3VNRVF9gvHRaGdVoVBYMNFHLozoaRYHYGwSPeTUX6",
  "key26": "4wwcDBMVA37q1DDWHUPKmGA2PCaGYHUUsrmbokcsf8u43HNGGJJk5RCfM43bfFfcTWg1uwVTX4nPdta3Rr6zAfCR",
  "key27": "3k58MHbGgu8nwey48cRkb5vs6y7HLyd7JGS3vAMRLdiJCi5NaHoSsa2KQvsEMtRUQWfqcvS5aY4E6rBRQcKLXuGJ"
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
