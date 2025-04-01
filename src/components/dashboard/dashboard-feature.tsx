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
    "SAi8jwZpBc11XZo6gejgBGTp1tp4nXhcf5vwwzntvwXX81KfBN2v3VD6eThaehYN3WpHgz3iYNJ1KasqkMpTkon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aNnYevprDi7ZttGEfbst8ezpe21caEcPZ71zTygVZzBdMrRDbamX8MSFzppHxef8KPbChtVjBryGgtbGdkHALcq",
  "key1": "2DmvC9uPTTVvYbLhRwup1B9beyEr9wXxyoTEAGx2tyZx9NeLSAancTLNG59SLYn3hiuJs8dycmX5vpmc8ntPAm8W",
  "key2": "hL28ftacdfzmAwsP6RYVCfWWcmEXD3daaCPamK75aDULvVRTvUjyAJnerVp7MrZwiAdDBY2RbUipawwngxgbcZD",
  "key3": "22qg47tfF6tPnvYTut2ifFA8XBmtRPK4jvRjBdjraqcpcJSsJMu1otpK8t3tAU9pqBgZFErBSh4ph3rRHpeXccfi",
  "key4": "5zs7aE82LSMrJKPRxFNF4Bx5yoRcEyygtuyVf9wrSLye4rLmVxqQ3nBaNSkbE8MNNcZWv96ojWPAhuuQGGamt92U",
  "key5": "3wyVLUWqMWnh2NDS6M9QMC7bXZimxbXHnvc31Zren7bXpMCsRBjnYxyquAHSCHe4KopGnnwqpw2yWNGiipusz5ZC",
  "key6": "3fq1SEFHPnn6RiMCzthLDU6xQDBYCSfaV8Vi5Pm3rKS4gGUNVbNqUkCjByENttjTnaEtdwYqqYAwDqEgekP9oKmC",
  "key7": "5ZvEuARGELNpq71CqUVcu7t2o29dbWYueoysGQCAGvHjv1yixQcYVQ1UcJx2ayuJA3yQicmxXvLNian8vZfV7hfw",
  "key8": "4XVmgzNW55SRA4irhMt9UeN5Kt53iaerJj3piJpCtPGkXmAgbv9eMaQuSozNR3BK2u31PfvVgmU5cDXMdX5Ld86z",
  "key9": "xQMuoe6j3LMkFsAQBsaeMeZhZPBz16vSrr7f3wA4a2jMBjQxX9aWS2tduXtm3qhUgLmqXyX1Sqcu7msWhVB21Cs",
  "key10": "4iVgsYyLF1TTB4NVt4sdZvrs3iSWMqrSwbCv4S7NnEaWM9ejf9R4vF5oMzZXFVz6u592EnynJCLnhhvRezBo8Zbv",
  "key11": "3z1fWNPXnVVR5MLExCkUm4c2hYJsFQVxkTbE7Y6e15wPptMXPKrkHZNzpoKGbR3cKAVRrRTKCjg19q5x3RxSnDa8",
  "key12": "63k1GZ3fUuMfdyrJVhpYYVZc5Tte4UZt95onCrGJ3VoE29dPpym9paHqUFZ5eHpxMgnQAYwGxAPxutk6JCjKW2jC",
  "key13": "4wJ1UGW6vxjZrSChMVfD8rRQ2iGQbgeS7xvKurrPZyGUTArfXf9UetdqJD3tVoLQN2XSZNei2ZuoyVwe8e7ySS1j",
  "key14": "2Y4vZh5hyjCo8xuvGxqAbeyCd7UjMmKRbvoN5134UHJa87bS2SoSjtxtbGzveFrzWrU7zkQUHo2KtrEfA2CG4Qq7",
  "key15": "22z6be4uhAt1Sqb3PzGroAS34rtrVpdFn4CLp2UPyrv4g8RsMotC5ahkPjGXJ4yMDwUCkGpzg8CkXNFtnP1dx2Vv",
  "key16": "2Ngw2ZTdtvZoHbCk2yq22tTG7wcpoVZEFH45BXs8a8EA5SZkFNtqc37Bx3fex3jzQHd3EevnNT5RUZvCzEggfe6t",
  "key17": "2LpY2RdP1CoBz845D3HGhiwhrXF39UXKNDQNEAhfLuqhnk5DNChzRr1GYCSi8CnRy4vFjmVVppBt5SVCj2gaWfRy",
  "key18": "3wBC2vSDrL3x2Utuh2g8xha8qDYivVr2KyxbHFXW4WwqnT9pYThFrTrdGprggKRL4k8bfnMg3RgP5J9qFSAmTwY7",
  "key19": "6VJtoULMN2uT9djfn8N6AfZXsqzzbBv668F2hLyshpeXfHqJiMM36G8vgPYBqayJprKyuzBB8HCawKpeb2pw3K4",
  "key20": "4Bwn72trwAAS6YsYPh5o4HunMDdGAUHPvAbNCBnqpvrhzYRB7mVYm82jvnYx4ydaUUm2A3cUkLkhTLTTeJwk9Cdk",
  "key21": "5zKVE8V8Cui7sYNdBiWZibKhAAV1CCZAwjwJNjvBY96PX5XnmFMzMY6AezXYPuXsd1yUjimuK1J61Qk6ZXVakYGA",
  "key22": "m9eoLys2rEz7aVEcQyN6kE4chVNTSWEokozX5P7KTEEv2VhAuaZH5sPnu7CpiUwQDUUzPhiSKrNSYBqYBtih8CP",
  "key23": "46kM275TtoHxpWEtuHgekXtvoT26G1bLvWGFNZttSh6kao722ycd4yG3f39ZWptSXnXfKj5eD8Qdk7hMJvfT7Cff",
  "key24": "3o15nNZi6Xr37uf1TaeCEaq6g9GsDb82mMn6LpjENXaNL3UoK4Ntx5TFWSYKQMAXeSXh5jJLGgurrP1TM3vyHfNJ",
  "key25": "65dJB6wccCaX3F6zChL1qgdW5ssEKdvH9RMd4yY9ZQ95g2jbiEJesE7KaGBeyvN8rPr9XaTCzP8s2dTbNwiUfSGa",
  "key26": "24uc3UFZHkPHiERS2aJtVKb4ThukFuzUGUbDqeVop558s1XABSttLmUv6XDMwd6t43YuwXEUM5Wq2SQSuru3CndH",
  "key27": "5LPRBQ7HuZyTf8YLxbusFgTTw8FQBKqtCAfKzrSWX2eZAg44poQPrCzydPc8pBzufjXTXaJCcC7rtUTaH9gGJMgY",
  "key28": "4Mb1rZG24nGDVy5jm5cUXzQTwVMm8pmgn6pwvReDwX9hoSPPDh1nmqsoHzzBmaKmgRi1MjZszfrvn8GboD4nb95k",
  "key29": "LnypfnuLTBYm3z1Szuw5YhmZV9cuoPX6A4qs7qja3qpqSwzWXrurMK5uxQdiXiSyVBMjonsoXEW53Lb2j1UWZa1",
  "key30": "5gVizDSzPzbWrxc8Pvte57Amep8VpcxiMZMSuEfeFLE7zBufkRqdPDSTzFC9RW7EWHbZTvWYG3hU3uJNvoksEm2i",
  "key31": "PRsRMCiKK6YLQQKM8jKyfbUJeKkjzimstsXHBYi5fTcLiSbGcBtgprhyVt35XyBfij2NXvtq3BcsoMo95Z9eaCF",
  "key32": "39f9noysoozYzWdGNzLEbXWxnneDuYyWsHWfv7rHy6xeFrDEgV6SDB7wetTtwoEiRaG84EsrSJ3TBxvsL1ytW42t",
  "key33": "3REp7KonX5ehRbe98pCobDHZyrxrkfcUiasPZj1vMXK4rGKuNcH59hb4Kp5BG4NDFNhgQrt2jScuBb9LVBhUB383",
  "key34": "2hqT59x8RnPq2xSLmGBM5cvEXBWCo9Aqcx1US842bbB9GoX5hLCiiXyAWReP4CpgrkX6zAJJEmAwzthW8T9uBsQR",
  "key35": "4ckGpv5eK6pWxGRzgJB3XpomiLPqtgTZE4xd1NCWtzscoLUzXii5kPJY1iqPHyaCeqhgKa3ZXUZpBwMqaV7eWLHd",
  "key36": "2tkabE39Nwkw2k9aXJT26kfsjhBkFNv79pbCLgSye7pdGtruhPNrriL457WagPndyN5AzdZYLLdeaPuPtkYEtZeE",
  "key37": "2RoBYwQPMW3m2yZsoqtHm7fownoGtAGpkxVYHgu5Cib3SVQQCtAYKxb5QgCz9wLaaMuychNk8JFeZ9fXUszdzA4k",
  "key38": "59a49hkT47oTktXULMsQ1UCPHXFjzueDE3csXNm5ULwgAEhNacBSE2dGrrEa7AYd65PGENikgXX1bjwuoCmqvyNt",
  "key39": "4yCV3MarP4mZL8ziGP1wgqeD49fqagvQudqtLmiXfmKuxUnXtM1zqvu8Eo26WmENJjQr2LvipLCZB1ENU4c7rCwa",
  "key40": "2df4w9vhs6Kns71DfzXtvtE99nFSzTBeiBwYeSHMFvUZdB8dSveLyW4cNpxsBESuk3hUFHcn25EqxuXaBHm9PeoL",
  "key41": "3tWo5WrEkLfJ6rBquqsPQYgpmFxWEfdYQsc9F2ihJU4v1w2Y4Nq79YiY4aYkKnKvUFZUmeAtYK6EyZ22PSynRvzc",
  "key42": "2zGmeVpREYv8ZE49vbE3UfwK3e7UFj47UqkZm749abTa6hiZ9uZhnsy2uLJGcPMgZuwPSNqLuc9ojp7yGXX1prrf",
  "key43": "2pDbg42CnVeW3F7szQLaubrJ73bY6E6HTBfF1jMpfNPCE9FzkJrefoea5tAvBmc2EppLbpkooeUM3jfVDwfhrZkQ",
  "key44": "N9nyTPqCMJ9H12cfAWJ1UwgnMjVeAdJRPL6mx4oNEdSDGu48pevMDyE4FTCiYfiEJVFwbtQsYMgxtpikrvRZciv",
  "key45": "37jmGu8wN7xgoguHiGBf8nEEPfmuPQCdicw9T2L65LEQhNYZ78HHtYHhqvtN7Tbcqjo331rJhrtnRQPmRp498g2L",
  "key46": "UhfAKwxP61zPAoqYJZ1mjRYJPiCMZFBu6hAuiRRPA8rnP5W8Ta2PnPRHZ6gg6VCsoYmobqJ4SntTuHBrBj3dWbQ"
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
