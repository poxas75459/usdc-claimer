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
    "e9VtTZn1NWSx8T9gWrZjQbVFD2MQSQHeTRiW4UjBs7Bcha6XfnpWv1UrH1VDf25GSJ9HTi9Rcs3E4htxSusjN67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PPfFa49n7sHhyHBc2po5TxSbJwgfu8sfoWviuDZuiDVbCVQRm8YLGULGW6Erf3bLGNigkHfyDZoJHZN8p2rNKd5",
  "key1": "4Dc7RoikbJwphH2HyjK7pLXrvZsZuWu62qyKXXG9xd7EqttUvzGCokSEMVJQjHgEGyeQ7guWxMss35tGtUFZvQDs",
  "key2": "4SqtWRmWKM9Z8hgJKmbmzWHdhdL6Ba86utsQz1nhVJb8PELDzmHGW6sZ9nqakoGhsnqEUnV2UiDesLMP7etWqkZV",
  "key3": "2Re5qQcsPghYQ6RFEp2Ky8HQrY7zxPPPHrDS4EQRBTXihyFWbwSGFPw9RFj858URtHa7jwGjLMtGunCvqywe1qCh",
  "key4": "AckwxUQs3sWDjciTr4YMavfSSMXEaZihhrqj7985XvJTCrDYp4wNXjh4mrUASRYTn9UpeN3SfySDFZadjeFG4VE",
  "key5": "59xVSRBMNBQPpJPPNfEBaZJWQpDLFHunaF3HyCPL5Kv83veHF8Sp89tyuCa4xtojiyQdrZn8WSkE8P4c25Jr8pEo",
  "key6": "RYQKFe9JKuvCfmgjeCFaurv3aYDtRtWrqjyxNHqHpqHCrr52MRiBNCEKFU4F9ZQsFLAVgVUSX6QyHAwZXDnp7gs",
  "key7": "2RiMxMVRgjeGEM1BQ96Y4Ac4kNcypfdNc1i6BfL9M3VeFjBoLggGachBg2RzY32VvL3bjpwJwGcvekuxkao6QU3P",
  "key8": "3Byd5YBpHxnQBzPVe7ovrJfSJygLCmBS3avBGZfcTnxYP4AhHPo4smVTBxnETTWoM7qfWQw6CYZ9dLv8jLa3iZm6",
  "key9": "2zF85jgfk1f2kPrXYPDVUww4j8Z5LWqF6tbtcedDGF2c9THmem5T5SzuUrr9aZ1fYYsYRsKgz21HhHzZCJdTSQ9Z",
  "key10": "3XrYVGTPjhp6sU51gQU2R2DjFNqymtU169MghAv2jX9wYKvEksPjCtswpRzWf8VnoK9KQyTpsYGnxc3NkJmT4FPo",
  "key11": "3G5YEpKge1WwFJqHCmXh7q584y7QgosqLkY49idZ24je31fuF8okojtVQ3C1BxvsbTdAcyN7PePUprhvLk1CRCJX",
  "key12": "5cc5tFTqWayYADAchtXSHDGXWpxPGDsTdJfszxs1tCjggmmzqiPLYogzp28W7BGQgYddeuxwyHcpmPUFPAAPeUaN",
  "key13": "3zW89A2G5HQmoxzXSBQnuvqPj8rwJbWp4YNX5KjDbHiRFACHrJVdAj6R64yS8N7fuquLVfFHS5gsBaNW1fEn8oAV",
  "key14": "2hAbZEWXSPukG533YfgbRccN9roaeD6H4b6ZspsTDTWd3YzUtAFcyaSTTXeBgEQrAXVEFhdWSvpsMJgcnvUp9TQw",
  "key15": "5e2BbjBKeqR2dpUsB5Q6oZ4atgXRD9HdpUd1DpL7NwbqgEEG15Y2nEFMVE9ErbiWm6FBVPoAZReDi3v3FJghwBK4",
  "key16": "2kaxaGqcvFVz4ZXmHnzbQCfMu93YM9UKWUAwyqXTqMZaX8tVPsyHcnGcP82NjKa55BdtAcbPqgohkcfz3dar66Cj",
  "key17": "3ScXkZQFHnj36SWPrqdM39K2UVLVyRUaS7my8Uq6EkB84tZzLDnU4WJLn14c8eqEV5RTa6yZXEafyUuWiZVshjz1",
  "key18": "YgNod9DUtH594GoSGtfKTg4yw5y6rtQF7DQBjBHjHXrLi16rZtzpE2wUqjBmniMWA6gufwuAtcfT9d8dJMDEkaS",
  "key19": "2dgjDtXqr8hZ47EDxqePJQZKt6b2uGXjKN2wtvXDUGUUwPwuzi6wpJMhAG3FQKjmf3ZX4AswLZgLgo1JEmq6MsyN",
  "key20": "2ZMDz8BumLXw8NwbGEjze15D9jc8UbsAyJC52cvz8FZFd6qBjte7r7moxfB7TSnzsG2EGqZYZNWXB3DxKyK8TTcA",
  "key21": "PxWqa5sjmKQ2iR29Wf5ndp3qZm7xsJCxfJXw5acbVUUKGnHXzG4q2QLLHFS6orBbqjDgg9refyKD52BxYFdC51q",
  "key22": "3g6cbSrkjj3QDaT3f5Ma2rWqgrZ3fY99AkPMhbfimDsSz1S1wgyKjcTdeBAh2aQz2DKpEKSBd5z7ScQ9FeLZZhHX",
  "key23": "3k3TS4fS5QjyjT12LsgAHPCJAa8iDYuAdFaRLoVKSWkVZhgnyZgNyYZaDH7a2rfZzKzi9NC7GSxvrNx45VpSJmr3",
  "key24": "285vEoKKG6ZNG5bgTiPJLqArBPww8N96iWjzykhTzzGX3c31AkzpuortZACYEps6KLdy9ZVvurqtwHJx3bbYXgbe",
  "key25": "5hHqaXc2G48GJXqbnYuDMSiJM2yNqJTK5rA283SmXSzbQHjss5j1kvXRrg34Mjz5SmvYrq7icSHXA96bw5QysgwU",
  "key26": "37oGStEvgb8dsSVVLRn3mdeijzVh8vSpihWYndr5ferN78EhkZyyDSU5S1JFtAPpDXV31BtBWh46zyfkyWSKhwJM",
  "key27": "2g6YZhixSXKzAMiX8vQjGzjx4UtAsWSRCKRwSQ8zonF8SbFZP5UZNbv7GLk8SXrKQsHs25L4EfAY91YEDpza2Xo2",
  "key28": "2WdJYNxwrHa8Yy4WWArkNG1qALb1xPdUXEj8KfFTUVnXgyLo3z6REvaMrnqDcueXDQpdoV6GsooS51nNdAXjpEuv",
  "key29": "4obigHYMSN8RuRRGkwiDryUKDfDK5nJnVRRhxZv8deGN4msmpZJGe5T6Gdj51MWrfFWfqq6pwce9dZRp6YRFEMGe",
  "key30": "5Z4n3Bb1D3ATv87YeGo3f3tW2be1nW53NLQmiUjf82KKZ5wTQ19mcbMpQ3uikmCunR83MDLxMtaAzHu9yNvwJmze",
  "key31": "3Kf5UpsEbSFMonHqHmhHAudM1AERphPQnHJQ3fEunx2uxB55TGitZj45CP4Av4QFBNL3rqBX9GeKUwGvSLgdfa8K",
  "key32": "FyRqzhTYhfyKb36zKacyBFvrJVkFMRCWrq8knNHDjvKU9CBZe6udjJwb9XBPibete1KBt2CyZ7GNZ8JRceZ5NYa",
  "key33": "5pGzDr6Y7FPC5QVFyKbYSo7hVuwxPBzaFZEREbMBSLGAj2Y7EP5ouhrr3DWAn8KXmxneLYFe8JrthDSeoQXR4suv",
  "key34": "5wF23FDVqg9Cw82wJsXKzEoPmJY3wsMgz6bPjKivvoTfznRRx7w77HnusrYebSkuv2HFcwCMtu4eEHkMtFdV9aJ6"
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
