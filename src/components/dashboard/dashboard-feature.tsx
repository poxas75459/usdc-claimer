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
    "4RPP2eAhbFVSWJPdCtG2R8cLcV7L2gxaAJs1GMTSE63utATrDmE1VmbWV4kGiS7YXZh1f6J92svw3b4juTJbpNiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6qpZAuNh3hqVUFdSCt98LVpK1L14VtJMYpWvF9vD4UxgDYsfvsPrWZDHbfDzNkcwgcpE2MUUfNCz1Bs8fpYtF6",
  "key1": "5ttwSkXVXfa5edkUia72FhwxFHVhG5DWYRPMZSLYLTtJGBWsBea4bDSueZBrYJw2NMUihScbsMH9v8cdacF6z8eY",
  "key2": "2zhUAN6XcVrUEdHecNPPVjG5wrJu4aJKwo6M999V5ARWaPhKtoKeBDBCQQ8RdUgoTvNvTyXJZ1h5nMLjqF158s9y",
  "key3": "5Xw44US4fNpciLR8pkNHjVoGxBPkBz3Gc9ZSccwFeo8yU5BDmdnPEQX2XfyFP6yQBFWMybbU9JEATfv7By4K6V2o",
  "key4": "WGKo5EhGrbhcu9pmMw2VzrrvkB2DpSigReWTQ3DPH3ywbbHLCtBd4Sag8ZwKKRGRG7A5FDZpmmmFzYrMFER19bv",
  "key5": "3chry4hw6YxHSb3SUHNrbxgCH5QJp6dFxwwPJHK8fQhue7Z2rCdvb1w89dHkjrbLR51smf3T5Uan2TGJHNY67DhA",
  "key6": "FYk7jUrouhvwQ1q1gFuFeWvhjQu2CdyoQ3gv2oQd47wVEmdPwjVzzmuj7oG89EkiN6NxLdRmWJjThmhx3jpn75X",
  "key7": "5wPeMxVZaf4JK5QAuoQissYNmYTZEVApPbjLknzpiatdr4dv38d7TdEQcN6fWXeE3ca5uUr5iM4mNwVBqysTpU52",
  "key8": "5XEBD6VBfNhkEcGqdF68dZmM52kubHStEHcwznccyKxxSwqBXwVzKoGTZ1Qkpg2mzG7NntFb7gDsoAjXVLe6zYWx",
  "key9": "3FTrjfwoSRUbzUtbULp8a9vyfyTd6LWHYkNooP9B2pTp2R4w8iELRJr4VEn7CuFRsDxSwAXea5WWn4GJFh8UhWVF",
  "key10": "54qWMLGMBRDV29ZQsw34ge4pw9VbUu1FAqA3fQcepcuHFrV7HQZ9FS3zynQqhdZxksBxqiZakJy52W7hdDy8eJqD",
  "key11": "sUDUGmzFgRvK4Ku1qWur5ak5kJKo2zdgMS7jLcJcxKURnjd81bezQRhAECdBKxyPUkv2x4i98jVou2hVUFSE9kU",
  "key12": "35dXzjZa5MoqZ6k8xJtsTxTLs5PKbnTrBkzsuo9pS8ebByRGirrqT8ipZxz9RY9xxQMThDVRReVikEgGnUWayE5M",
  "key13": "25wRysuDSvmZ2P7LWkEFvvXJgpb1f8s2rUMhp9HvwPB5LmnM476P3gcRTiFBJ4EPfEZjDaAEkBNYUzjxB8cqTrDK",
  "key14": "2tizXiHZFuBsZuEDxjMFWrYcLLCewjA6ULrbxL31UZ3H2zV2FPXStpFTBXpgNB1w3pinLWtKoSTwzZqy25esmuRA",
  "key15": "3myBwVbLSom7cbC5oo1zkMtjNJWvb4RXhHUDwaB9DQZNFf4KZbxMBvPBNnpWvQiHHb8UiAmXTFzeMP9UAWyJyGkh",
  "key16": "4eUZk6PcnyM2hLy8DZm1YBvGspYhMa37aFEV9vsGnwvyezC6BZeGV2DR1AbbcHjXuctQWKxpSrzBfPA1kxJyi7gk",
  "key17": "4ZHMxqL4My4yneoiTKttCY2g1T7ZEy75bmc2gcrgp2LVvVfdhSd2tyzTg616c5TE1JSZPDy7vwJCjS1Wtc76FMiV",
  "key18": "3CMeKhxeHT8LzZEZoWS2TE2tDeBQLSHL4UrzS959kKgacxRZGqoBcYKxGpPPawxgtPpM1dUBFwWzKGRd4JmTqaCQ",
  "key19": "2QSAX2Qqb9u7bZTUPSXb8fwymbMwwcsWbeZ5AZ8eNNHKwMMcXMYEvMkDoHCUwLo8taCnupHQARbrYQZnt1D1ry68",
  "key20": "2ajAsk8HJU3mrFYF7379QBLusM4QfDG9kbW7W4dm6y733rW1LRthb2qdjVb7E6dL45XdPWTXcXaXDxZ3yCHL18eb",
  "key21": "2yRjgzKhEEhdcx1PqhRLy7tahSC24YFhriFQKqaEqrnc9NSpAJZ39n1Dnvs48rWwfkwV8empeGGgsam3KciLQa9J",
  "key22": "2Ureou9r5VNZjXtDWu1V9fp84JfdS7RS1Q53CUBnph8G4FEJS7iFsA97ZPMk6qN4ot3H2XwrEUkhpGRT3EMmzTwC",
  "key23": "3c44EkGbouKdwUProHzYgVjF1FyNznJ6S2sGAmaiSEZ1dfCM4WojRUMHMUZ4jeH3hzYcaCBeE9y5Bd1zF23xAY1v",
  "key24": "2wHEKiNHui18uGbR69pc5nFv7HhDYxyYKLAB9wz5oasRkSr5KEGohjymkpt9yUv92kxMenqk3o6f7gnehBdrdusp",
  "key25": "3Hk8APAeJ1hDqDc6BdY4N8bUwjkjNqLcZDN2Bh2yATkiz8Qk63NubjLwvjqabCbtqvefQqhj1hQXV3CQn9t8gaZY",
  "key26": "56JHqt3f4nnyKc4JwmTnGHa68e5TMJZRprYuX2nh2hoZsP7Ypsx4zcUTxycA2xa8EHtq7Ug4o8cJGSxrmAAnQivU",
  "key27": "2peAdvTYQtVAGKSiKGTa9QqnUQrrkGdsr4RvNZ4pXmoPK3joyxQ2eRNj6YEgqjwyxgNBMWWkFRWctcxYXLRxf9sk",
  "key28": "39EG46T82ana3ev5jftLTBu4CYcdjJAUa2q1phszhzg532YFDKeL8zJpjdZaJ6NfcgM6J7udDSvkGxRs9HcHJNa9",
  "key29": "2DNX4SPs7h1GnpyoVTYRgfpzbkfqPv6RHxZcMmCWcJjgyFXANEJczx8fR2bNPiqB6PhyL3QFkvVrpT4VLHF7aWDb",
  "key30": "28aLTdQe9A7AJvVWkKjKCKCBsPefjp61BZYkH2JK8crCrY17g3zPYWmfEAL98RC8GNL4eevzhF7hJTxqS5Zqt1og",
  "key31": "4FLhKQsBXPeYaarwumQ17nHBcbkXsWMRoBxHDEXbtewYhtrKU9tLQ27b88bQprv4bEw5Wy3AkYLop6P2h86MAqvt",
  "key32": "3KwRbw8vNw1ntLB2HtRpMJZyv9Bbm5GfUDB6brDpfJh6q2LwjZAN3XH3Qxpy74gPV2y9VGxyMieWiWuDQ9kz4ecu",
  "key33": "3JZxFMVJvrXQAm9XEMU4tG62a25b7nuXB1sLcE3vsdMGfw9GfvWtmEitdaNNbDXwA5jaojW4Bp1JQqWUjEFgqhV6",
  "key34": "5x5EbESz21DKcZuawmsY94ez5VgqVQW1Shr6zhssaGUwhWDXYFd2xJBeTtp1RtiPAaXuh9Kva4Q6DbTxkkaCJ6iE",
  "key35": "KPDi1Cojow7G4vgTPcxRyEuNsJXqNHDp9zvQ5TcnPuUxhtLCx7DJ6R8WxLtA3sCXwsM8vr6WUscXpWe3pKH19FJ",
  "key36": "XDkAKzpckqVN7ujVrWQLsAmP3qnY1XTDqz7gVmKXpZtYnbftUSfu3YAjfGM4x68zhTHW42jfZSXAvap7JWgsjVx",
  "key37": "3YNqnRHbcWP9bidcoEfEmqxiBGMFdGsoKTkE3EQD6ZivmvnvWTxwjbBREZwqjeheJZHz99K1nRdePs54iuLmPHTo",
  "key38": "2PKvSmeugs2n9mTyHNsd5K2RxaaqjzV8PU7WXmWGhjPphh8URbP7roAdjXEs1MMb5QqPR9aEPQ8nndCLJEydXsxJ",
  "key39": "63zhrA5qQuZcEQCQhz5k1EYfGxfQFFcTVfZ2L9a6g16XrkvWoNcxU8uHCsQECUdgP8EBmFAQv399xnFgx2LbXNoY",
  "key40": "3AGDC7NmAW9C2QLiCWdDUhSyrbKtfBtn2FzAZSRotYybPm7S8LXgbFac3LGx24sT1PbHCw7XxspPWhv7QWWaRSfL",
  "key41": "5VErXbe9qC9ARyvERcnyuVPN9Agv9JsE8sBGkPsL5GiXHBJdhLs8152mygXCY1PWH4qQbhpMLFx6ArTEm6PVtsWo",
  "key42": "5S6DpAA77hjio63XTzRxTLde7A4GoxF5ZzPttFe4eHRNRByjA1z658C1dWUV8TgSJzhtTe3Hoycf2h4ymtKThqNE",
  "key43": "4mnhQvag6MXdqfeHtKzDYW61ArWNEwJEgSZ4hbZsMw8JjxHZ2BLwQAiFEVNjufRzezcW43ZnrtGu35fznP2poabf",
  "key44": "qC9GTdLrJQmD6iubyVd9HDFbotJrUnBRygMHiCb1yTJDVHfEQkT6Wq42X2hjPLrT7B9tqH6hSsPdJSk8FX9ezxs",
  "key45": "XtVcvdVcVDZSKjzPWGYNuTnR3Gr4aNwk87MZre6oCUqC7vBagvFiey7MomcYccpgzugsC28LQoT9Ygm2ohscrhM",
  "key46": "GE4GFb3LDMU1pWbqzeW8EdiVhPVy7piSwTFZG4jzMUKckcbox8zgo8QiSn3vpLihNSRuaCsDEwvvJiMAHmDfAAb",
  "key47": "uvDXXGk3e4qHyW4t86S5CpwzxamsyCfXWHDLzkjzYDdkXstaYkoge8ZK8PhnFHooPZHRXrFkuWXjvWocJSTJCST",
  "key48": "2JicGp9t5ZFqujfrpLVjiVMqULh78FLuWWGWmixJDVTY3VjYdv3ZBaH6k9Kq67wzYAe4Rp1fridCiev961xqi4LS",
  "key49": "5gBHUTVWZJ2YnjSTxAnuBcKcZyorZNeFxoVjrpxYfhhbVLdQc26BMyVLpyPzYmPJR2SW7tru6ybTrM1u4oEYg4D"
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
