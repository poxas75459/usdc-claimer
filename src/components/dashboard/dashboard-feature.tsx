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
    "5ZiyPSjeiXQpAW8NBwJ6vJq3YjHSA8g5bpn26H7qwijjytA7w6Vi5MW6fR2k6VNLsY3swqPQ7LHvM8Vznb7Kx7tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2134qwzhCoFtW78867fLceAUwQBKWJnTawnGctSojG4xNpXGD5B8oNGqenHoJ9usoVj4cAM6k1bVk2ACTVpL1sAd",
  "key1": "2TPNbRk57FnB8UzPqWZLoAbqvLKBfKVtv7E5pSMvaSeq11yLv2hfD4r58MPnECAZ5D6CiuGAQ9HVy8v46QDxKzaT",
  "key2": "4jxwCRJnfhABhkRdkh4zZRpwqybXzWfiKkcnYbdvrZeL3ZJUB3dMYfQd6Hyndd1qy2UjssRrAv2KAA2HD8UWo3ck",
  "key3": "3ab9UrBk8pXFJkb7MWZDwH3VWC7WSZhmyRkSfNQMamSG7aWAAjt7kTggS9XtgHYykiPawhi7WBybNFZntA8NJr2A",
  "key4": "2xK7p6JQiHwGZvaBCoaFWf4Hh42hw9aZorXWGesZXhnfd8pdZH6oyuL2X8eKx1vD5gfaG8HK4qoRbATh2Rj9Cc6g",
  "key5": "2eQthEWp4Kxd5XEqKjEtf8mi9sG6xpSY79XrMaUvxq1zSDJ8ktbtzwyVh55yR9xmKKACNES4HaEyt5mR391nQijB",
  "key6": "5EKZrtyUQVyCz3vuC5xKRSCaP3msBx1GY55dnpMHhcG2i2jGMJHWYvRB68ezkTyNLWiQmedhyrCsy2ggN3TuE55w",
  "key7": "y9RWjwfxGKzDPgs4vC8A9qbgZWZabgirgyCn19dwNs9tUKitW9aMEV7k2YW1yi3RsiXfmwktQSCLL3s87iEycZB",
  "key8": "3FMbHvqGPrQjbeQ7wfJDXssoWv3NXcM8z9JueppUTuKzT3oHqvGVjiZkVE36KJru7oeRLj4gpTdM7GD4BwcUjfwf",
  "key9": "49XLQCHigXA9hokNLg9LyKvJjEgYhnzxg1azLffa77gCnW9sbShHQnxMovtQzjTq69yEvDZJnzNf7XdWN1fAoLvz",
  "key10": "3YmdTw5zWNisrzb9uY6osnq3DdJB9idkwAxqPXF1rcWiXGdZq3HZKcKSi1FRyEjVC5hmQxLX5bSeW82HkWcyeSkf",
  "key11": "62qyXAH94o9YhCXNz2mQFrGFJJ8SPfHtx4NBQrKaW4A3EZT8uZdhBDv9q1bCLYGre8qmbEDzKVnL9DetEEGT4w7h",
  "key12": "4GiHkWbgyBU1SqgojjVuBMk4atnTb3Za89Vs5qKx9WiAoLDnD21UkgPTkhACXed2wZFBNWYqFBX5G3JRJuVAeByx",
  "key13": "4LZhdQsFWRREjXpTz9BFfLzBred38n89MjcfVX7nbacMZvyJkDCTziD57Ac9QXRgL2JvWn2yG9TZBHuu9FsgMoh1",
  "key14": "5uX9qtqDqtaavvauVBNLWDjjPu5gj2WJX5HVbMfzobxj6kLhLDWPghCLu7SLGhuEAZD2JQQpVVBcXG9yu3RGbP4o",
  "key15": "2Rfm7KK4oCJYVFjQcWxJsS7AWkYXNAjLqoCX2CZkqn5LwqqdTbrj22aLuAx84csTXrw9YMnh1U2LXdpR3w7a9uPk",
  "key16": "4mShaufAMXuSjRkzcYmpQBZQkFy8v94eeEdS85Q9SxYNGFeHsWU4XieUM5mAgA9ZTgdnWsCuDzDteXf7HY1bGqUB",
  "key17": "4BUbQa3RKUBJqQNQBAXezvByxRwX1ZDnfwZkXh9PM5D4rBsriwUWAvf62GQVC1vfRcVriZzaBUNG4R8p1Mn1g2J5",
  "key18": "5qXscpTRkj7x4MwA5dGq7Rwq3vYFL4uELAseWvW8ApzmaevZ3DXLp8XeGGQUGeUe8WdNkTevmxBgzVYyZaBtZisZ",
  "key19": "5oALUFrtnQFbsdy9EBCsHA4aeayk52rG9xy5WTHrQadwthJtasN9LZzAo8Tpr8pjE1Kft8zots1arU1VBU7oH7yY",
  "key20": "3nGUktRTAMtNixV6uesjsp8UmsVpFTn5nUK19uWvazpxbQkEhJjfJjDZ8Co5Seyyy9vH3J2TeTLg1u86i2uRA5cH",
  "key21": "4mpxQ4arbmHcnF3e8dAPgLu8MPn3njbAa7fuikm79VXTeEqegvNRHNvG5frSD5WWLo4xB2HxuQBYv4UrVgsM3e6L",
  "key22": "LyXKNfzG82otWzQUUp2ZN9TY7VXcXdpzKUgvNe4RYqo67nGsXHM6wF5h2xbofePdjtJQWuGDgHtEv22nRdU2o6P",
  "key23": "cXcXTCiXu1yNJEiJsFcxQBeoyLkN1jhPUGk51MuVMLhAVq2Nhh9rfor9NooyZBXBTh6MxpVoWiGyc1mKKfkFVch",
  "key24": "4dvU4dt94E6F1cvaWegsPh4eTQSedBjBzL2nVG4w3qYL3UwatNRvRHrhLzDs7UJXjdyft5T6ZSw3dJShGU8Ac3Fz",
  "key25": "3J2isMVTVG5X7CNfpAbsmN8p5r9v8TcVKcJhEC5XGX8f6vwmKtZa65caAbZCZoxjNbh7hBFeY9n668gTaFzpuL2p",
  "key26": "4V6m6A7Yhfag4QKFfXkJzXGxKZFAfXEtN89VxnYtLpuxi8JtiUub6rRRKLjk3b7pavtJmZvj6pHgeusn9Ms1fJu7",
  "key27": "v9SfVBeKZfXmFSQbAWgGE9ZPnD3yTYVZqNxksTTrGVxRfkAPpyw8AXUY22LLrZxnHxCWcNFiSnVbZZxE993TsyZ",
  "key28": "67BPREBMFUzPT9FeE4FUsUoP2i7p9avLp6iRuUz7m67gY3V6xhAYaKf21NviMyj8EkaYJAaLt4nmqiTGhMPjwqyj",
  "key29": "kVXbk74gfWdjEL9jCc8CmHxgpYRp35vykTPNx8mKp9C4VQJWXZbHkRwbJFZbf6wC7yryVkPaTWcKCqFkmSV7rVS",
  "key30": "6dLKAv14eGG7BYSsWXnNRh5sg8cnPgtxUutFLB9dAK53BrE3rNGoCen5wmrwEm5D5buxSbRMb2fkamSY8LTNJ67",
  "key31": "5rf74m3bjjtjax8Z7Emast5knGNC62LwjFtNwXrxDjoNhDGzuenQjinbEAPAv66ryfFNzB3QftfsvSwvLCgHxqzY",
  "key32": "2LzoKPp2pFjo3pyY3HM5oyuRaFoLoXRgNxBPPuFfkokx4ADfdzXMvCprwehCBRKEHtjtwfFEsB5LnAPvtpX16dG7",
  "key33": "5MCk51xzZy661WFFpQorChxZFAjbkMtTqncoyHRej5TJ6YXNRAxKoZcfsamqU4trVY9tim2RWLabm2hzzPvhRXtg",
  "key34": "2ZBvwTK1FF6ALLbh58mTiime3Xu74GjhJGuXqrnWgJfKQfM6BqRJdYNAH5rgxUhnmG1MsERfhMezd1TwNEVT3pYp",
  "key35": "3jSrte4Le48jQDJhdEtYtsz1bPbWGswztkYWyPtf6tcya8aiR5nV7hjXyBtcdcPoYqH8ChfnPDiDShThCUDAN8EG",
  "key36": "37fm4uHWrBR5qv9nAkWtGBM8vjziHSGYa5uZ4S4wUA3Ef2MEujSPKZQ372z2WoQbzsWeqERKnzxvndBm8Zmv96dx",
  "key37": "3pBm2nR5zvh5EyR47Wdfr3UNNgzKsEBdkvcVEfYgyi19kJhcGaBHshwBGYpd9P43bmgXSrYqXVL4KJ6Dn3osoP51",
  "key38": "2AM7XZV8xbQnx2BF6z4SiTrS3pTYXnmAgqQJa1pysszqv3xUwo3KoWB4GAPZiKs5uPxGvMCyDUr3mEXb8jKggPuN",
  "key39": "347HD9tuCLpGcywDr1dH4S17sFEcdwjzV1NNQwBT6TLUr7JJCH5iztC3jRo9nUmZodfdJf4hLLibpVgsHGdYfRNN",
  "key40": "56gtE6j4M8MoX65kiSNY1NXVLzrihv41o4EY77Xg9C3BNqqe9kboEeHBKyhKoA7SwUQwFhGzEUtSPQaDjay4aAMf",
  "key41": "5yYz19Q3C9LTs2SUJg2Q7Vx2YKdhMSQkcV5jy1XctaFwWpxcEaYUoeKNadc7Kgcj3FoffYqj51EvmA6uCJ2NjUJ9",
  "key42": "J4ipAdpCo12zLaSE1xsennEUZeZSEugZQsBwHkomqgMYrzcPGqY7qxFbLxc1RDq4Q21fmxsE9AZ4rKui4xqAET6",
  "key43": "2hLrij7ytxDmsprx1UEEzduBhJjmujEAAebw1wNERto1eUjHJMCDGPdFum8jvWPiqHtu2chNo5WzR1j2ismHrtsA",
  "key44": "5d8NqCmMJSknMf9t1ydhqPSg2HE56sNanqeTNNy92Ri4TMMwDXqDPPGZoZSCkHeTCChPGXmpqUcxKaFE365bx4f"
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
