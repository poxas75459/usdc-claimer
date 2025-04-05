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
    "2dFe3VDyJVRNuQe4SaBqYTrxhTMy4j8TtGxtFakT5RiTMaockS8HujaZU2MhNyAcjYmvVohpLfVgb1nnDCCLUfn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39P8Qq8S6ZgtQEwGbDBjpzqFtzFai3T2RRF1EFHGr5kuEfMXvYssCUnLqvZsZvBU1RwwSAiyrPgxwBSd3wBLPKdz",
  "key1": "5EvhQbqCrffjgR4FDci4Z5Nnu1isJZN8ZsWoxaLDz7oAKwNetRJhhkckY5cP4WR6aQi84LPegsrjmqTEdqjJQ3QY",
  "key2": "3rwgfNmtddetuopY7syFWd2z9uENrE7vMXkaUGkUhMzqQPUq7kfJo7RRMsgftfLvAzVBLm3Rh3dvYzKQiindKF4Q",
  "key3": "5ppQ4C6CFUsh29ZJnL8WvFSc9uFWCZJnYM9vwra7BKiD5a6N9sR48MQXzMqu7g7SngGXZJecGYtDsnKFrTtFt88y",
  "key4": "36Zmk21Js77nTjFR9CrpQ58xVvroxVffq6eQfn2AMWo7dxAGn86cGXGQvujZe2pZXfQo96Df7JJh9Q4rvmRrq4f2",
  "key5": "2Aq1VSDbjuMW5x26JPs7dsetSKE3YgMLUD7q9ZpnyK4hP9yZjCDRe8VxiE3xuB1T6eZKydoFnmxrF3U95zHFu6Mt",
  "key6": "3AjvPNd48Ao7Em1pitt9xgeASM3tapKxCMJxpHibmhKcZqESHudzJZKbE4MCcfwQcV3yBEju5CedeWgYwNVYXrnx",
  "key7": "4ZUsHFP57dkmhs2QZWBLh7kCohdk1DsUkAgiXYJmwzXbHmC84X9W7UA6VKBQwHQ7XYm78itsfURVv5TpZ6rntUp9",
  "key8": "5aPMtNzkAZ6Q5GWRX7KzMPuL2bty4Zx7TUNjeVdYr3xtX4PiUgqMUUnAHwCeAKP25Y1rYxvsjgr3HdgLKGj3zikC",
  "key9": "5dQ4N7k13ULNKtQv1mUHviaJV3DZ2jjhWEQZKZ3cKhPWksgEzrCZfTE6qK6eDaXEWv4cNteL1DEzpNdCUbGXyicv",
  "key10": "5AHCFpZa8zRKATFkxPMCVQo52tTHMMKVYDhMZTer8Cdynic2tcK3qzanHkV1HW3pA9YcpbNxq6B5mve5bZFqVVhC",
  "key11": "5ifsrkJ34nTgC7Apygfo3xL9jmq4wgfGFZXYdx4aXjf645sPrntADBCeQFcq71fexXzVdykxy9Hhgczoo1oW8Lxv",
  "key12": "4jw4ZoMz5eHXHt11kyMD8snSEXqm5TPN7tMYaijgwobYY1EoBgep3H5vXE3UiEpkCJxfdP7W7i9G8J5xZYvsDPMD",
  "key13": "28h6XCiDcdfHG88zPFXDN6YE2TUMfmZi8TuwhdwhQufhCn3eBFh9gq9PVmnHjdUHYpb8FK4DT6c5bE17njz8q75h",
  "key14": "3zkDbocrtv4WaRTtRvMcNZiSPGFkAcSm2H6AjtZZSF5oTUTsgzBT3TNAG7XQdbr66Y7bjFMaX7oTwfe7AMEfkvEH",
  "key15": "2tp3zQgcQgu1dwiMxhrZ7oDQUB2Nf28WQwEiuVKUjYpXgPUsbU7GH5xEeQnHNKLb2P9CWcf7SUtVdVySArZRsuVj",
  "key16": "2T7HSfo2JeBBz2Np4LvSZGffQ6i7iaZmUrgxUNjThn3qzb6QiWoDQAmixd879t4e4yA9nnNrdEjSuYKkauF8pF5",
  "key17": "4f5cz9NJwF7T5SFmcyWEPt8XpLNgKqZe5dkhLotQiBNWxwrm1HPTX15JPNYNJqKeS7w1kP9hjdc27vrDUNBfFvGf",
  "key18": "4EtSzgwteYZYCkJ43Pav49zXB3WuF59m9reQApTS8uMXWQf7ykhcPJiDdPeWpNnnNT3HVh4f8agoMq4bsdQGZMD1",
  "key19": "5uGCc3nGWMcgRWjFbu3ieWm53t5SwQ6jXDBf3VqGVHq2gmg4P5PY8FMWVP1D6J7XQmfDg9n7mXVwFskMQd73PXSA",
  "key20": "4LcsmDFY6aJBocbiuwdj3GAgLmkjMontW3MBxRuGqyVxd3BPgbvau4Ug77gKeQ1RhN8LgoPfGwYkSQznjfHbevFY",
  "key21": "hqWSqgonk4Jn6yASnJoyAXysu81RD3wVa3GaVCyLPL5Dr3Zwvfy2UmBhCcyorYsbWTdmixGHohfeZ8eM8a69NhF",
  "key22": "4nyyDWmqfLbrrjuVW9Le4jrAspHt6NNzdVTjT79h4NMksHdWev3uDJbZ65RpyhD25kyF1sDZyDNrk3B72gvrxmG1",
  "key23": "21L2ZuEASrUEHkUpmbQUXoebHgjHJ8r1jdZ3s9H4fxHQsnex3HBPMTFpb9uj3r8T21vmRqSKvEEBnfsEshRCbvRA",
  "key24": "5PxzPHjYYkgqwn5BWW9VMhWEAapw74RF8VNJyNuGUwrs1W3Ltraig1hHimGrxGi9W5jNbQMGmiEeZLBiByZbr49n",
  "key25": "2FyPgwmbWx2Pyscd8qg4kkM3ATHzsh8XdUr2peqHCUPxm8ADdQFzPVQb7DNmsViNNPLQTxdsgZ2Aw3xiCCpjf4XJ",
  "key26": "4iPdZgSZfTgRDncxMcovD2Zqv7wJghbL912n61mcTJFaopgXpvywoCsqotqcLnjQgpQJAQvmBt8VE95vktnPfuZk",
  "key27": "kH3SggKFc2FMoz1UHvRH7ubt9WQ93Ty5Fm8c4ytQvaTHQUEGv14nicLhozuK6gQ5oMFaULeDvKNu7gT6XMoFzWU",
  "key28": "329ruNEqi9m89KBtjaGjmm5r1YaqF2TEatvEKx2v5YdT6q3HeQV2ZXQRsU2dxwD7FBm42HcUe9iV4TxrFXzu1w3j",
  "key29": "3h47xQRptxP1yw3YkPrh9iaAFdmD1J7Zj8rEDyc1gr2HXTNfrfdXzySwf1SxDfaC8P9Mqv4zsgD5768nkMbJEXsj",
  "key30": "2ottYxyB2FzAYcU2vHje7Z52RJfQ2SuCjs9DDkX1oTVb3nmaza2KVPN6eim7bZUhu1VafBsAhp7DfsxEj4TosTDo",
  "key31": "Mr7xjSnaPmcMDESrdszA4SeBZyeDS2tVF5oRENvnf8YLtsVLCtPVSBfWfQXwW5mKuVHVKGb2saD11k4fJ9czBdD",
  "key32": "2X4pFR9rC6HmxtVkMqy9W81urVvgS5fsafiTKKqVCZXWVDacD3sxhVhiKCVFvEXzqfgXTzJ5vinYpQDQdAVENaPB",
  "key33": "3mt6pEmj9Wr8eJccJv29LtYjjJmaNVn4qTeqFvkw4SUfMdFXeyrNNFmamCK3miXr3599pnxos26a1qGCUrGMvBV5",
  "key34": "yp1iDP5fyA1dS7JzBeRiD9UweQnpkyKrsnZ8iH43EQ4MdLpwMcQBb52Wovqa9r6kKzqD5gwkpiQ9SUVShTDiy8C",
  "key35": "34yQ4B3xTe25nosKHLZZzjGxstJ5HxK2a53GPrFihYUGnR175BtkB1BKo6yxbi8MMHjmWohQHMm7HQxYFHodPJ5h",
  "key36": "2YvoikGR93ybcDBeaL7T1svUPbJW2DLcysuzscZc5UYM9YKCVvWMpE5EjekrhBjr1aob6y6HdWiebVgdJChwwQhk",
  "key37": "36VC78FteFRCH7gY3wpfFS9zCAhM4b3NeRjUL6Fw6iANELpj1BdZeaQcMYcqB6eoWYdEAVFdxaZSHDd9aWtFBgu2",
  "key38": "2jrg2HJGz2HThw1ZF77bCAzmacS7GcFXCNv7dM21ruH4mkUmfcB9cWAf3rtAfRhFB1y2BM1tWAbTemdT6qyP6uDY",
  "key39": "5J8AHBFr2Jxjm4g4jZy1iDg4c8QcMrteLyacc6YPqhbxxvRFG411q7gAQiHsT2fC4RngHioeyqTWpPRqQZUBsZxh"
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
