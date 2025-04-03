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
    "3enYGgQSjrp7QY4Vng3bwHTRNaGJLa9U9csah9e1gyCwEw2d63LYVjw4Ez9pXBgPntbgjU9gmy1Sm1WrY1xzKSjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bcZuwea1c3swL5mGzEe6q1j7rDijxuXCrdkoR2D6M75C1h527wUvbJewEkv8Paaias3u2xPdj1viEUdaw5CEeWd",
  "key1": "2MVwgAhiXKmpRwGvZVwF18hZScXhu398MHsbsodFR1zV9DZ2onLTvkbbrdkjvbYLw48hmbh5XT95cUQ9Ln7N8943",
  "key2": "63VE1BdpsShJX1eFVGNbHbJpHUM1V2DY6VjdF8uCtkvsAVi8N3ZihTVXdbkB5T1o6FMaqd8bocu1s2pU9wo5VFSh",
  "key3": "3ZhBU19KPS7DSk5Qo3FpZ3yUEDWQhsE8YdPTc2AAsqYdXkAxz9NCrCYXtW9YHFiATmXSxH6vjvx1kaAmJrPBckuU",
  "key4": "3vCQNaGShRKTXs73P6VwNpNnqVCuD62dB1TXAqRmFLjuf6PnwmRuNocu8TxMEVWnC4qpeqtUNCPYJmKFtCJUJoap",
  "key5": "4MyCNTnuXXcxePsRuZP7ApW3EV2HAcFpd7c3fxkR8v9GYY3eHPo7AJrYHLh7y2JXGnis44FXhtJBF9TgZ9pGukdF",
  "key6": "EwG49bSSEUS1ub2Sxk353BSHiS4vpQTBqFkJZJH7eM32Sfp2MAoWRZ3imvuPrYMjD7w4LC7MQNfGcgphJRXracs",
  "key7": "Zc3LjHBAjA5dX9upHHWR7BUm4jh8g1jjRgffKJkxKc3PhDvfwsaqLaeAo3mWz9zgdbrkoXAgjRNvKkefsQRXKZ7",
  "key8": "iuKWWi49jJTKyUVmTtDQAuj94iGxFu8Qdckn7sKKzf3zhu9gPUZfP13KVBxhVzfNTkgGPrkEYTeS7ZnWcvqetKD",
  "key9": "46Ji5VPnzsDhT3nHPGKdSTncN4cjwUrSMt4dnRw2nKQcpwJWij3qzDU2ntj7Lb4k3rjmYS9ooS3ju8CYcGAkRLpq",
  "key10": "2EU52zrAvspiF7kHpNFjRR1KSCw7oUPRDqPQWs3ZqG5gfxJx2cVXVg1bNSUf1AvMwvv4GY6PhLWASQvMZp837iox",
  "key11": "awNRLX5456erCzW9VXu26TqRoG4pBpsN9yDCnQtLHcjaQ9ygQ88noFxopGDUQdFA1dRKVudpFgYuUKCYSWzW9sn",
  "key12": "3oPtJvnPQmAjYYzvGKDAsAP9ibwmBeBTLEb2r5r5YFXm3dMP36BQTpC5XRrzbXinUzLsSCYRvATfRZF1oe3YvSP5",
  "key13": "4MHfNeuuHvQM6YWaAomeZpy6jarZCXHExSeHz1ESwYtZDpfKVNqSTz3ChbkKewyQtjuCzg5cnCo4yveXqTqBtuip",
  "key14": "a3L7oVUECE6ntnzB6pCuyus2NfHjaD1tZUQkyuaEB8mcbDwEAK1q91Bj7efzvcGKogdehbL9ksuZaFY9wBAGQiA",
  "key15": "2SeEPfcUNdJEWQDrpD9rnE7VkZX19tzaLkh6872U6y4sSTdyqX4zKS8RsS2rGGVUmp3kK5RcWuqJMYd9TjJk5AKY",
  "key16": "44QgmaNTQ84rzdmpT7LS1KyzcMQphFjqcKZWVjV6nqpR1SXMsdPwfZPkjgVSMkdfu5ZwxFg19fxfe98ZWyn7gfi2",
  "key17": "4VHEEnhDpaH2hAvQ4AnnbGFasoxPp4y1CBzghXH6EU5HXvHGoE6aCYxTL9K3bUGzeWabZ7o2uahcGB1uv8Jma716",
  "key18": "5EVzQ5tU27fCfUVQ426xx2P4GBNrortTpJBoRYMvvddsgTWjF7eD3n5WKwmvR33sfGPXd61ScrqMwSXUj2giRswG",
  "key19": "4JDWEX1praB8ZuD7ayM997CpahCHz6eGeEwpSNDFAWdzaZepQZMyvSLeUtGd629kUQikvJWkCZTiWb9JK6iYWLys",
  "key20": "5wDVSRCj8dDmQALpdCvCacyLnBHrNkLGBgbk34JmY9nxpmdAceUtre57EuunTgiVthFAjzqasZ1TSWVQ6xdXsXwa",
  "key21": "3Xd4JHRu24SZKjc2qmmGDeGg7AptN2nHNV77Z9vdXqM9YRXZEGhTBcv9dhRy96fWt3CZ7jv2fsgoiRYasxJHq5hr",
  "key22": "WtFSxqBx4yDxjPGebekRQpHWkkbaRshcEExqLS2KbQuihVgjcCPxcVBD2mxEpyrsLG7QTMhoEPP9668DmsqnMFy",
  "key23": "tEHcohmdfaRS7qGvdfRLwjTxhidKzAyBiEogFgYNWgJYzHBN6kd2eJ9YnSRX7oAwLsoW5RoEKUhd3J51EwwpaPu",
  "key24": "xa71VGxrvvym57jGA4Ahz9kp7e9uNV6P2Mn57ZUwTVX3BgTqhAF6z1CVgEKX12ViTZX8T2ZFvAVuvhxAtCGajeo",
  "key25": "5aVHbUgB4BhorqpfJ4b7ReWETd88grsmaX64gfhHLcsU8Suxof3MwjWkQYvzKR6LKEKd8M9e2HPLbx1mMy7Fu17x",
  "key26": "2ypT1AaCki7UG9y4dk4GaLDwNFE2uGWggCNbNxsnZ3f6eMDup51rsD7bqjqHnmPENEMgockSTTeDGEw2VA8dJSV6",
  "key27": "4PkkFSrnx3ajyba8C55n7eycFk3VvZrFGUtcMRCf6xddtSzVHcPUuPK3NVbQrbhgwdQy1q7QkvFgaFwQzHYhGQDo",
  "key28": "2ggZ4a2hGRW28NzZjQEGWPuxX6gCqVot8WbZ4UAdwPC1iV9JK7KYVfyMzhRrDSg8k99FVCE14vTwSd2jZBehrM38",
  "key29": "4EqbQeWvtwiYvqbkvnhEfhbsV7UwD8Dg6XPUkzx1znhnTQqByiPofMwxcT6efS6HseecHRykZ95C3hEXb6CBqSQr",
  "key30": "5J9B1MAV2o1kdzAiteE4krFB7QJS6ijAVLS3nzVaAdXtRvs4njXWS8a7xx79TJRQrQA6JzvLu84Z2vwmLcSSRg1P",
  "key31": "348mL3MMx8CbTsEJBseHJxrU1hHBbNeHyo7ctFMGhkykYUF2aKqSWdYrrCmTsxJUYNHHSNMreFGehGj7Vwek3wNm",
  "key32": "5r9CuL5rvZSDD9WXwvPp4o3Jn6nDYJnVkKhtzakZ3yeHTq6JL9YkFi34Z41qsejJ9M27rPJPUFdhK3HpCM3QVbCy",
  "key33": "2GxL28d1EYKkBEC9VPdYYMpdGZtqSFmPnQq4VR9yFgJLxjz2QbeK669hK5GapZJ7k3Nhu83736PTkYrZjEKVS7tx",
  "key34": "2Bm5DfG5j1AfoG9jZjRoc3eCjdaX4g7Ec1M9MqC5xsQeTvcYVrKKx2WcGpmFDG2TM3aEP1Tnr2HLuwmFHtbuPYMN",
  "key35": "4CmgBVA4g3XEpbVd1paouqphRHCdnUDQbumgh7XWtPo77FfbMt4AE3jS4NUxdMPY8ejjsaSw5H1E58Jra4KC8jVp",
  "key36": "5xL2cycbxby3vtUSvsMpKr6swoFG1dNtSkmYyjLunDHYF6TNnHMrwu2BfxW4rQ5A5AWHj4hoiJfwYFRgU4TpACgt",
  "key37": "85JTzytV4kRzHCQqupWDu3Vp5a7C9wiVqeujgr7brTfWCKwuFVzuPBqjL6HDmoJJHTmCbcufBBwDWuA26N4Ye7D",
  "key38": "2vnx7ep2svKWuknfRAwCLccX3UgD2kbrCJFtDqX2TEARfgnnHZSxt4qwk1jwPxvc9nkxSSNKRc5Rb7Yd29vMcWsa",
  "key39": "b6D4rzf3o2BthM7nbpeCCibf2Lrz8Pri8akiCcNFHo5UCAiaV7FiFtKvCeV1U2nnzCqBYWGrqwiD6sNAXfnF6oW",
  "key40": "5ozUPfELpNm6sSY5o76L792z8r8QPUi1rJsjtgH2xHXebFxLFv2d1frLakPSYQTK3zRaSU5hjVcW8moeWPS1GQ4o",
  "key41": "53yWHiL87vJoXRAkcXU3nCXRLFo2qJ6xBsSJNLfgRicitTNo6fdwFVVVRk1smdftiFThoogMdB6BTENttPDsqzY8",
  "key42": "3h6Caa4LYaZLnRtDLhyTkRq6CMFuKfWPRhLC7kQauKfZb7qVdDR3EzbWNDjCzqzsK3SSCiZLUjNsiC9dWpPE4RAR",
  "key43": "5xzTbqc9snTMkabMTXKEQ7TGaLQ6GMQmggKYceshhmTV6UgWMbQdaeuLPJ7hLrthNPxvfP92HPh622Gn6mt1wckn",
  "key44": "67mTYsnDueqf6NSJEEjQhwzWthDF5i1pmUMbJbW9jSoSTEntJLu7qeb7svyJr4sjrxjYMjzQDSKcRrZRj2nLSa6q",
  "key45": "4gWWLLoGQQxTmWW9eUB2DKAKTZTqm5TjDsDQxGW4MmFVy9DGxSENNmVwsZJJ6bLXDATpN6BN2rEVe2JJVhn2Tmjb",
  "key46": "5NvgWqgf1Nfn2gxfYTnBi75cApLVts2UT7XedSxsPfV2g37Jmmf5CDJSdTgJy8qJdPeXXbdUvh3Sg8Z6g2NRW496",
  "key47": "2uRQXWXB1RnbhAXf5EGh7rEps3nEAcU2FEW9NDEmPRUqCp2qXNAVDtwgptdu25X1iF97QmBG8fUT4sCcGJtjDYUM"
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
