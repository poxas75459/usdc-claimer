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
    "3aK5KAnwe7FpQYDf6Tc98yH1W9Zdxu3zqkfMMgAzosJneoWmEJu6UyPi9w56MbNx4EXbRNrDcB2x9ux8DRgPMYcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g8wKxpn8ofJThsyuuTNYvZycW4KDCej5TGCkqvWZL2CywSLXycgDwrkMbhpK8BrdnJNx955e8oGe3oTip145A8B",
  "key1": "2q6YeP3xrXbpXXYrbXbBpqhumFm7HSw2b5q6Ys5348jcDFmLszhuQSpzuHQCiaXCmuW64bvcPtzdfXcsZ44FtFW5",
  "key2": "4bk21BnY8XGejRF64y6mgC6t21nmsWp9yy3H6KKSNMwoWr1ynNbGGokgH5tN7E3XavDzhXEVkZzFqYDRYA2oUA87",
  "key3": "2wmqCBwejnCP4Y43UAd7pMxvufmttZepnJJNR55QmMXMkUcHpn92YvcKiDK2PcpLwkocHPNNFDhc929zAhw5ma4D",
  "key4": "5LdW9twwYatXFqbs53BzGTzcY5SXGhjxu8VTmdTwUmiJaS7ug6RPvG49YNFWom8nYjtY7pq9yj24yjfwTh1ZPLAh",
  "key5": "5aMchcR819MvS5dxdPeuRZZ2XainWpG4YRFkDuvXcxqTtNuQfPxnRWz643ek4311jwF4LSdfzxML1TERr5Y66yFp",
  "key6": "3Gc5SVk4S4zv7YzLzR3KkfXKcuDcdHzD8t1CBU5BaKSX15qcsC1rR2GpCNWtRZq8LqTQq3AQKGvj8vouRjMNxwLf",
  "key7": "4XugXo8soRJdKX8B6Ww9pZBgxiqQUDoQ1U5As88NbCBtmr1dWJMLkdexbZH4p7NE7m1Hu5n84Vzbq1QT72anzJfb",
  "key8": "22zqCFMBapnEjaBE8dVLs4d5Ph1pkZWJiJFvnKsgQmFjdUMAbp6ctif71gyWz1AvkGd7NiUyXYvsVWKDJapeR9hB",
  "key9": "mSKoj9CYGrMJBAbC6hAuXENAXzvLE8afMN2ZZxsVGUssUJnaMRtJAjFrFqBrsMDBqm7awsPZD6EqL8PWGErXUb3",
  "key10": "4oCZ5DdhWkZgAGQ2rAxEq5jv3pwnUA6KcygU61HrmcHRiDoKcbrmHMbgufrf197W8sfAQvyVdyPXJuFAuqgd9DKG",
  "key11": "4iuhRBPft2xXZviGDjhU7nGjhPsWYmt24pHnbTLUp7pFUJMCDu4iivkQZWxTY3KSS1NYKe442wVFLTo7kBFYr6rp",
  "key12": "QqxVi65YxyqpfwkiSe1vgMThREKD8WqjMXtDWkTXGtXryR3Aw8uEzNxhRXUdHxp7DmZWYhUHdJDadyXQi38MKAf",
  "key13": "2S8yTRyyL6BjchJhC4PtfP545B3RFKMh5iVX8Ybc8A1Zn6Fjk3ew9EhA9rcmuPCgcYDyszGMQC3un4nFzJUaufRW",
  "key14": "sx3zijMKUuzPz7c45BUL17cK1QvZz7SpLegZvuFUtsT4t4nn92P68N7wzgGcW7Cx5bpCs8ZtBcWt6GhofprDghP",
  "key15": "4Z1sHAjUgNLqVJeQ1zNjmW4ZkL8GTZGJC39wgS3VZHxtyXBJBrxXyDn5XSRBKJxbxuLjXVEZEBZkTCjWnCiXjGGc",
  "key16": "5pDGmKRtiQMxJ8EJ8zsWzLsBSpQ5jwTGs1toJDFMeSGdq2mhqb5ZHq7yk4vo3gzsAdiMdMDdC6xtk1pwQVbRwZ3S",
  "key17": "5mVUBEiSKiXem4bnwKinxWTeb2QdHVTSrW17UKy6xr23mJ2153eiB5JYLrWpGfgpaqx6brzhmz3KcBf4ZPWf1QsS",
  "key18": "4a4ZveAtfQNQLe7bsRBX8p1Fbo8vEvpqkscsss4CQnHNLF1TpZwkgoaWxdb82yMdyZHVRZtgJ4ytNHm2nJqimzcD",
  "key19": "3pXarH7qQJD2LuZ26MddPXZq9Q2T3rdbAFvTyW1qKFGVyKNJTiwW3m9wDuo3faJ1zUUj2dtiPuD1mR2RXk2rbRF8",
  "key20": "3vERrnUBa58Rzm6orzHtadwVAoA89m3v3A47YzKBAxfqbQXYrN9CwpPGTtMqwgusE73Z3Cr8W9CjG54fQoJdkTHV",
  "key21": "2hGFyXhHjxNAVXDggo9NingWahfyu5hecSe1NS48JPFTwGbatMEWRg4rp5ZhPtDy5hwqCZjF5BCBFSmABAswHSVY",
  "key22": "w8AbYc4t4E55eejKBhh5R3q16tQBabmjYK2dpW4cVUCgb5S8VibAJQiy1ri5pgWo6F7MY6VzoZQxXJEnDvv6vhz",
  "key23": "f1T6WAMpbB8aQnL4eCGqhbB5t87tC3f5GJyA2ye8pmfeHV52rE8VA4vj6VJAnvbgcAAGXMCcY7j5YsWf3PF9D2a",
  "key24": "2dk6KjWjDbPNehHLjMUwefkdF26EmhBKMS8XzuzeZKJK7uimehF5Zx8UrhfdUSkqZ3cS8FoUc5dfUvo5P8otaWB",
  "key25": "E5HQdQEpMyN3TpvV77LK3ycicttVo5meCU9Yuy3QAFDSByJKPY4sSFFEzUifk5mYLQnPNpjwGTyXiCQpGukmj9h",
  "key26": "219wFVdhrEgzzSa3uAJNaRj7ga1YA9wJyNR3iCbySYFxVE1mosEhTmxBmGuySSAYaJ23VaEHvy77CabMT2ZFLY2X",
  "key27": "35t5fFLT5cfuSF8SdWLxtiekusn1LxteF32fhiMxiZdUAFzMrdSybp1Kyfb1sLEXFkzopNQ1ysaiJr4LBxV4LkQq",
  "key28": "21SXJ5zRf3MQwG58koPxWXTaZwRCGGhue8FRFsaGLNXoJQLpAKu2tH2vsSv6mftLNgRJR6m5GNFMPVyD7m7DzLdm",
  "key29": "2scpvj3dphTx5Rg499hg93q8musD75Xg948xheYxh9mG8uYw411iEzt6GHugXEaXfpT9TGwgKVNV83RPmDW2hxFB",
  "key30": "3vBV6rJgbkEdXhpsGPQnZvguHi5PXfhNgDhsUwr11sSbTSQNiNKMLPdhRPbEzazKGUrjEvyLFX4exYcubvAvC5cn",
  "key31": "5e89spKS4pyZHxnLJvRGjFeUgF7dqiD1uV5tU2RtNAR1uo4yxfV6h73oNCYBssEqntaGJByJ1U66XAHj4v79uHSa",
  "key32": "5dBuFAtvSdnLNW9c7mDLpgGt1LXHWGUyteDGqpKZqvDSKX2LHazqYp5pwFfTwX87gpF2cwwAsg8X1D9RgbyTRK5A"
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
