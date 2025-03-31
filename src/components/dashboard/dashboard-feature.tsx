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
    "4qSgehP4ooCrjSUeDkEMPxTUEUYh2pcccWySnfRLiJggjPGBWW7f71HG6LNEUeSnEyuzbib2XjH5taexL76Sn6RU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n8nvqq8P3GUNoWzdyhgLokt9pnE1XZx1Hh7c1sLJd3212EqkYLMRB3frDzyHGijctVK1S49T6zVuQ7McAmFm7vY",
  "key1": "3fCq5H5wURxw9V2wQqWLM3VmqtnCktuzKNLBc8asYXiFYvkpyiAFSe6bWbMzC9fSVXtsAXSWhe5p17bTfXZ58vox",
  "key2": "2NmWfpwVU31UPbGjgVtJuCaxTkdtxMrg6mu8KKQUMh2BwYnKGW841c1Q6dgJtd7E7AizFcyh5jAnzjSDe61Fj4Zy",
  "key3": "2HEAsRSXe9Q1npvJYdCegAxeimSuSz9GrYLVUghthk5gvfA6b7WdT7rSe6mf9B1L3QWcEDd3q1dqBjHB1BHsZmjS",
  "key4": "5dJMkWAKfbfCXyQYCAGTS3S4tfQpNVqQEz7oGFnQ7XdLqq96d7tEXwHQAc3pXMMBCw1Gooe1NRAA1yq6F9fQVzBq",
  "key5": "3Jt7VXZUapAj3ArAeNM9kux9PdVikbj5mg8pdLPv6mvHyu2D6JqTfMijmfpsQTegiNHFACP7BY6Z4ud2QRYJJZy5",
  "key6": "61LaXNB2PaxTuxQ7GYPLQcgDpkRFyHyejJ2DjjtU7fCxRWRXYdmobyHvnCFvfmc9mkDA2cjgeuQzdcFZqis2TG2R",
  "key7": "2c9tXwnuR4NCEtaSrYVykYhsKm3Rk1oeTA46Kr2Mj2WyQkDyS3xMvDXfgqXcpBZmBpYABwUZM2jLSpdArx9JFtgf",
  "key8": "5xNDHkRJZvPZkPuyM9TziemPpuGbS1V3YF7LgyUx1DyV9kbk2Rc3gJdV4Vm65jHY4XuXgH3wNs8e4o2HDQWd51b",
  "key9": "3CcasHhT8UKGbVLryCLdyL616DUvc7xoc75Eoz5wVDF5q6d8Qv13nPCe3WgCxrLhRv1rNXyoV8nvEXpqR8hKqVcb",
  "key10": "5rmhPnCndEXHKbth6LiTJC7bRdKmGnsyBhoJgJSZmrS5QLnA7g8f3nA2nRSBv3veqFvqipFa4HhgTmRTURaTSgQp",
  "key11": "2KCMdFrisLvHjgLN5wDzLrGYo5dAvLqRgafLEBzcKqXjJCgbNnH4f2SajvdE4JV5nuCy54XBoJyTZr2dGf1fR78g",
  "key12": "5rCjD8pApd7N2wMnFQh33hFedAi58ViM6fKtiCBv1wANYGCUUU7ZWBvdXwGwrpefbqLjo6kLwCMhBZTov3ovX3QE",
  "key13": "qfMsP8msWh6LMvDWUgiAYD43wpCtZrqdE3aTqyrskTLL7qiq3fKgEaPxNNzpHjaUye5gBgGPqf3s66gScEqvkRb",
  "key14": "5riF15AqWQ9ojrT3htTuhCiT6DWoovPNBeXLbTcQ9SFFcj9Ykc58eqc8DVP8x1NoR98EtcSGHAEqujTyEU2Zc2sQ",
  "key15": "3AoHXGfP8ZR9TGN6qPwvzw2v1PdxHkHyUTLxafxyLHpyCzSw9ELh4eg1tz9CsNV7ckrrxP8QH9qxr8BqVH4mjmfc",
  "key16": "5EPffeWs9bDTMPAqgn69yTS8ub4Y7kkkAJkzzCHQCHZb8DsMW2QkE3AXnT5HM9VJDPzhEdNf21YDJEyFJAjoDUi9",
  "key17": "4GuP4bFsmGL5mTwwRzMEPoHW9VCmua9FL8qpuW9PtumYcMZ4P4a4mF62CKn9GszGJ4JhZ54jkpGCPAFVaC3DVgcT",
  "key18": "xmHP5exEzmVucqrJ51rxiGR4te6gpY8rhu1zyQqhdDch3YarnZuZcw2g2ojh5EcX1hJVVNiCbdxegFopb4jG7pT",
  "key19": "4V9LnpsQq5N69uqqpLgbAKAJAHvNmrNB3VqzMR6twdF3tsBRaSARB7yJvoZwhzjFacmh2pcuKi2yjb4KLNERkEMB",
  "key20": "2g2VqJkU6kKU9xLmETsRtos7hkjgynaCn3VJRLYqmnYSRUU2YnHXG2n8wA7DnYFspNpUU6kUiPiNtXLuUjshWc8L",
  "key21": "4x2HVu5VvTDq4s4thPyVNDwAjHmuswtBGRTugpeYiuSHXunmX4kWSo5qEK6WHVm4hKuN2c3ijEk9ZZXNDJkDqwRu",
  "key22": "2bBVERMqcgDv9PyZo4uhqonMpBgjQgkv4bqEfNWVE7caDziMnDqPFxL627aMD8nijiQPBnudXCFrH7Rc8qrivVvW",
  "key23": "4nSjg9BuCouqkLDD1HLeR3VKUgG1BEJ2W8mj56hbWiLQfSskwK8kHcgeBXK7xMNmnq5igYxswjRZGYEgGvy5Wtma",
  "key24": "2191Bworees9e2KRe5cXRxxi5J3snokMqGi8yqrnHrkJ3yUSa4MYgX1wfUvTQYZ1ofQtfto5uUqVwzJXk9uPmWbY",
  "key25": "nPMDYFDqxfbqCE8R7ejhV7UmHvJTaHfmDtdLYkWvMdEcUJLhtnDtZUzHp9GMdGoF2jAcFHPPUbjxGHKjJkj6Jye",
  "key26": "427MoRTZeeAH6VbXh8vrpX9QyChogsb6X2Bgmk7MqNdp6ZSQN2pUwzrGYqNXqZDvQBf4PGYT61dSnHjo8CV8Ujio",
  "key27": "4nG6yUEQXcBooa6AUyo7mrFpd3vhhrsDUuZCbJ9iyNsHi8gJSsi4EWdbirkmiRU8WrKoY7Vh89XvdsPiuRaQ5n79",
  "key28": "5rcr469PiFtvTQDzvnyz68oCUbdso9VNtUMbDT6ockCW44hhydHo74hR6C8sYo8BKyBwDXGZZ3NYEX5sFWBDkSsT",
  "key29": "3UfGrdDLgJPE1Dm8xy8S5UbBFtcth3RBjUB6AxU3S4N87nmPpttBXi6PByfUwpMencfjrbd8uqw9CQo4YXHA4M5b",
  "key30": "4dKjuYmoxH9rxExpbrfQG2drixeGQyARXswm3U5a2wi7BvFVpi39H7Naiqf9VmjPesu4pLPcofai9AbiW753rna6",
  "key31": "2vgTFJwzkDBvaNx4yxfaniZrLaRY8kCpckpPQmRypX43TVyu662vQzTmG55h5UMGZPESdR1wKw9dgEH14wW2kFZJ",
  "key32": "3vnWrBCS6jrRsEmgr75eowe6CqXWN7ih4MPcHgkeX9w54bcb3mYCwJKrttSd8yV7jk9kGjgjMNSKYvzspDt7JZQz",
  "key33": "2WieGVgUQ9pfANWjro4WjbdupiY2wvop4Lba7yE9s2BBxjbZGMNeRxsEv8wQTGh3Ng7xLEf6rcoVKtEFgSW2aseY",
  "key34": "41p17pJftwCtW7yve5xSTwvHQJi3BT3BZPE5WMgNF3wpB3FRg7U24jMS481Ep6MYkLFWVyPY3BQzBwoZCDSxHqyo",
  "key35": "5fuu2JKX3pjS3j3CAmuopgQP8XpfnGrCS6TUhaLqZdA2gAQ7bPaoLStYRYhBFUr1bypo224xnHt7VCq9EkUH88ue",
  "key36": "2qwd84R36NL4TvUjbmEud3XAKUNncRE3YeHck6Gqb8j11S6MDxmea2yyDa3dgqYPVrRXTsGDru6mpvyyynjYqevY",
  "key37": "5UwuVFXkcfh6RReAoPudkzaiJxMuTkTUMQkdhQCke4ZDta7Tiuiob2d5L5FL18ZcJk7L55NAHdKintaPmbqoiuHC",
  "key38": "7yeP4wobPvu96PEjzGgAmkWKXyKLDLpn1Au5kXajbEhBT1Z4yGPFeXKek5ZtLe8qi6xDMCZAK4tpkGHhgBycf79",
  "key39": "2oypSxYHUVm6DXanmxpN8XA3bU1dyPb2Z7MFwVQkkKd9NJPHhgdLQJ3KgkrLX4SzVwXnAQ3GU5NKiA89oyiTuc8T",
  "key40": "2btU82dEPcVpHjJvQX3Z37g42jAgJzyGt8QJt17W1x8sqQvXj3NpouDsbz91VfJkpBRZGk2TFMvA8FiZKw47PJLy",
  "key41": "351Nnih4FcP3esjzfBVq6eVNJ92RPJbSUa5o2Xfc6ADAYsZ6x13oTo1hDfsZzMfZYTCduJ5PT46QpH4YpZ3TDoQ1"
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
