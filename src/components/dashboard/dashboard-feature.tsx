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
    "5yrb16Lt15pwFAEWQjCJK7vB8ckTNcxYq4V6d4tKu4UHQj8jLRGqGKNMdkQGX66sXmesEiDA7kSYaimPkmZXVAjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Me3e5cWqoTCHjAo71W9gQuZmRW39yVM35p7E97hFfZ8kd4sNBM1HvG37prXN1ndoFbuuSc9Sud3oeCqNduFuVu3",
  "key1": "RB98opTJQmJxH3DpvYNXth6QZwN1KJECjh32MyXudspvKwN29S2sWw84TYDFuHUHoMocfgRckdgbJUC3zx816AE",
  "key2": "5Py4JE1RFYCPEdwF4kqns6Qxprr3mPSnBdHDXJzoAxdMqKhSTtEK6UD2nWW1YQRcNFSscRJu7FLgaUiDsK6vXCNh",
  "key3": "2S7wnBSZb7He3bgtb9G3mKns7TU94wvLb4pUeYV6ACAXH6GHLwAEXPHE7AMhsNNq5h7rf2VmMyWn2Qrraood7scN",
  "key4": "5e3VmAgR84joVb4ebGtaiKhe75hfpyigGQJqT2NNABivwWLBWAcrQUs2nVEdH7kH7ZxbNdqUQZ6hf3RbBfMzpaQH",
  "key5": "4AyUfAhnyXuExQt1zxtuBP7EezontMyEDfZEpPS5qFxiM1xD4pLmLgNbLQjKLkzNBeQAUCrispoQ3hGvQ8Gg2cYv",
  "key6": "4z9XQDNwWuvjfZwpgRZGSutfigGBmLpH1H28fCdRPhDTMpZBFqDL9h1T48iVwBNvUL1e7S3xp4ubeuL5dLR3FW5z",
  "key7": "A4eYBHvNCt95Qiv76m65bZzGuiz6AbPhBkUhq25gXKK1J7HSe7b7S7wCRJZLrGa4J7qv3w6vieNBGbUgSEQdkLU",
  "key8": "5mqotrEEPkwPVYWvdoa9fHaPKtgxdHPTm5iU47TYwPzZojS5JcHHASRFpQdpSe9mLmjfV5ms4ZWJ1rYNbUTd9ZwM",
  "key9": "5Pq8TYZRyVEn42tsJNRV5B6wXVsW25L3n21Rbm2ra9ohF7w8iV6jZuz4HgemgKUVe3f4XiAw6cD3V869TLUoJKK8",
  "key10": "2xuPuNcfxYUqdupRYZYAVkFX7dA5JECo8y6vJ22G2pZResUdGrhkCUBgcCsiCbnJMgw596iiBc7X58fsmSd4w9MG",
  "key11": "4gWKgj8HjgaMVxWy9L32ZDM22EJ8Ubm8uXpMRe77XZF7Qz19wEqREjqUKq6sJAWGXJxLfADvkhS5JQjrkp5E4Vtd",
  "key12": "4bRaaPzfHDUwRJbszGWocnu739tmGzS4PrsLXTjVq3cBAh9KTzHoaN4u4x8Bv58arvu5r8rsR56fx5dTNhSSTNhV",
  "key13": "3yNV5UKDKEFGG4hYtPmZr16mNGrfyQkraRh1DBXxKoKsR4Gjb63T7ftTnNPj4Mx6XcdZg5uKCG3K3xVHba9b5cgP",
  "key14": "5TeAXsg5zHK494P2jsW5uYTHC2hPmuh3iKj9GBcDXeMHASdXZfxqxo1LRbYQSqQxF66FKA7TqmqRqjAVJcx1hV4S",
  "key15": "44N1h9N7scJae5UXTEXBjLvrbeuZMKuLA4xWvfNRZ3LdWfCZyghw68PohWNkRDVzTHiLoh1Qe4LybaR5dXcKDWHs",
  "key16": "5qPo3wXYanwetjju85fWWtiWCQR6d8yHCMhfE5Q8uu6HgnEG4GUP2QPe1d5JhKPXhV6oBkKteWkNbrGNdguqdu8R",
  "key17": "5Weje6jRnQE37KLjHz1fCvN8wtmnZXE2eX9LFhYUzo1ERsNdDPFhuQjoEqkakAcv8iXT3Bdcjqk58i2XwrtLqHmk",
  "key18": "43nC6HCgK6Pm7HjmhEiz4zmYwrADRDSXQ3Ahv3N2ZqWRpHQkHyKVnnP8eDne1q2hLiiSyqes65pUZHJBotFer6oZ",
  "key19": "5th7utkjeJZCqRPgFN9dkmmdcU28TQnz3PFxSnqWUTDNnLG7DPvct11USV1GdsiW66edDiixX2V2q9ghuuFBDXAv",
  "key20": "2JG4fUbU9AoBhyYirPzLS1KPsAg65WtJRu4z9b78JPS6g8qKhEzan5S97UT78ZYSonEpaFzikw3YSVdY5ynW2nis",
  "key21": "2Y2hKjviQ7qyBKKUGrDtFSb5vSZYkYH4fzeURfbUD8nZcVygrKD4ZwAGFDLuGJrZKnLyhWeLDk8kbzJu378qVDTX",
  "key22": "2Lthr6F4wbxVu1jBoyMnCkYLghbYPfcMRw6hnZ2ZYJ7439jpRgd71XHaRunABGcvX7fYAjDnw27Sv3Va9xbu1j1k",
  "key23": "2LXm9bP5bXQ2cqcMLKnbEz5KxhhypbGtbNDjjAmZAWCqhiiHvrQwjERhVGfHWVnbrHzPd2X55HEtmCYgBdc5WnZ",
  "key24": "33YdmefUs4E8niMbJsAhRV2eNb35S9Bs5iXZBMHv1k6n154dhxsAowpkc7FccfJ6jobD7czkcRFBHgvxPM2v3rKq",
  "key25": "4syJHKfBingFQMJuDoNUxEZ4kKgFLwrKVB4nQUBUW5uk1tnPJRx5caYUBiFpQDUtriB9B2AZtxL7szNifiaataWp",
  "key26": "5injZ2UXAE2GTbYry3DwGgeocTQPQH6NeXLnD6fYTD9xcR48v9VDN4hBHgkzj6RW8Qmu11XuHb4DKWSY6obQma47",
  "key27": "38rhsYob3gpSY8qEgbFodGswm4wqvf4XGErNJRwXfePDDu3pEkabhdFEfWiWHVxcnCXihBw3PfA6tu93BL9V1i2P",
  "key28": "5sxwCeSRigWHeSAemzyrTMik3VyH2mpJxwPea5S67hGWfpoCNnLGuHE2Dg5Q4Wkxztj9PJ2xB54JDnBgk24LZ6Pa",
  "key29": "KH7851gG6VsqK7TLiDVhkj2Jvqdk2LvsWvYXiSnmtCHpASdBfCvCisiChHmVnZPgPsiV5W1xDK9Jp4D8viuZ26K",
  "key30": "57QgPQLoRr7pdLDNJ1fqLuVoG3fFKGwfieYwDqi5JeaCyhw3a8YZ6BW3PGXSB6RKHFm94KPB22SKpMWk3jE7tYCW",
  "key31": "5byxw6UA8G4iqHdtRhtANJ6K2pxaXWxQqr8jpuTNcFN5VGAr4DrFSMJk9g5tXduCW29dKKKDUCqnpEExYoDaEYCW",
  "key32": "ThRthSoJ4pEyUhtC5Car1WLTgDz3JtaHCCJhKXhH16xq4Rrp319MAaTZzw9maoeM3scnKHkXNVwNpi7PTCifUFm",
  "key33": "3z121SuXZ6bEDyo2BBKRwRMXNjoAHh6eaLJDk73pCtAMAj1qsCabPyJXVvv4cAJVrn52gzovFCf95zn1rTu5rLc6",
  "key34": "yLYu8sDnL2dwKRrAgBNuhZ2dJ61o99753RffgyVxJ7HxXiJTGmQLu43yyrDL4WLCq73DGPnopRVHGKue8c1zgsU",
  "key35": "HtsP3NCe3HCPn7nXoX5BHu3FT7Zfc5wtGtnoEL5iGT9wZRJCUAGfTchKYS4HtK5gVNDPhfiYkbTZLQRTporbYPc"
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
