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
    "2iownD6pHA2X31dPWJcHPP4uu8v9bE93scyTP1kYdJiajPAWANFN6GNdpvno5PBRyrPSVuJFpJC9DigAF8ZjcLXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rh9bYksZLfMVY68xwNvrHks1TZjD6xfz58Nc4hjC1S2paQpLrcCksLTkB8kL5MxkK4JbveVWjZeS5XzSiHQkYjR",
  "key1": "59QAL8ugVr7aEWWLFXwfQsHdLVd3t8AzhTY1HkTDBGCiJXu8WrWLS6zgonD2owPGEwV9T5XvUpmSu9wrx8fVjUGW",
  "key2": "LkWqim9fVKw2AAYovKv9ZVXepZEfuUUqFyktaJ1RjEghVQtP4LaUxFa6S3mgoN6eHnWm6GTbsth6kvHxxGn5yMU",
  "key3": "2A9BzSBc3BUAWFUBfjnjE5wn469gpZJbxkJZDgmWs8BcrEKmg3bsY6iiiiJeFFeXkxjuiv3qq74uzv8pMW7m933D",
  "key4": "3giRY9NCzuM55NpJpYHreMs9P2j8cwry8GZ2XMPTwXNBF4EaLtSc1A8qmJpR7F4rv4dSv6uMXpaQhvRZ232Y287y",
  "key5": "3pW1h2eHySg96eiNdnzHecmzYJBQGYWwbFRjHmxkbFN6cUHRaviwxX6wZXyKHKhpnR8Zys9XQci9nggAKv5Xh38C",
  "key6": "f8evU6AvYJhYxu8UBUKgj34p6oEoaq8eaakmYN5wJU6pKRpRi27DE4c86HArCHKqRRdkpuzV26iVfuEH8rwDnHM",
  "key7": "3ATRku9KnAfKe3Yipkzb5eefehs3ZLoE5Xq5MDc5Nu2vvgweGQp91gZdqCB96NGyJQCQS85jAHKn8USTRuhbQPLW",
  "key8": "3YF9iJHEQYvmNJbWdPRAJXWTcEkGAVcw8i1EQjzokzNXxjfTExcLcd2s46bns4idMD8PYMWNE36RTpwacEsZWg8P",
  "key9": "46gNySx7FDExZjEuJm94WJrd4gxtHUMBW76jNNJfw9QSEdo7LonEZoNnPNAG4HscTofLdx1jkmpnALkMUxyGLqML",
  "key10": "YLq21tXBUua5XKn4X1pZBXXNi57uaDuUma47bpzBcAn5NrFwLtsadK33ujS5FA5ybUWyhQ3Vkbo891h87eZSbep",
  "key11": "4hSdYaEBvt86GkDhEH2yAiTrA4kF7cms4ewvaArjyASNSs6kYE6VW2PtXEmab2mPnJoVbUWVaoXRez8piYWqdcnV",
  "key12": "P7XysdkFN671kTnfp3Mdue14byVPMev7wEuoemvVvwPvJ5eYZngtPxH6RvNxFXfboC7r5qLXFuGUPQo2YAcB49D",
  "key13": "4Fctaoo2jAtuY953xW9icPy4JqieH9xpdNZQoJoADekAXPfRG2m2buzdWnCh3ZL7e1cEEwBGVbq77d8EaTq5Ck8h",
  "key14": "4PVZdmv3ZytGAZF4anzfMk3wn3bTsswQjacPtygtk152pvpWKm6pM1gepr3ELuVPejrXqXyMoZdGBAMyBYNkvS7k",
  "key15": "g8zjQrLyicFKtgbPQsNoc2Nfnw24TwhmXwSyux6J1D8um9mwTTzTFdzUPDMV3FJahTtBg4yR9mxw2ikWMEvRyNK",
  "key16": "2SQwWbP3YUyTPizC5QeBw1KP3B2iqsKxfLAqjoszHdUB2CzP2Wd5aNZ5Yygy7NEdYEbbs8h6F3RLx81K2zTLUe8B",
  "key17": "5Pkj5WbrBsmwAcFvcpvSY7V1qHW4kzHyShHqGk5cuKBszZYdYsMmLsWVxnbTSaHpL4DES1vZoAdYzsskVBDCNJ6N",
  "key18": "cBj8mv4AbBWabkio9khqrrQhPtd4YKYPm43NfkWJ5igkTewCMwhzg5xAYSwWP2A336SwAxzJQ6fmQTLxtUg7CJp",
  "key19": "2buFihpg4CDKnJtNHVkjs8wB5CXAakg4eL4k8PTmzaPwqRRwGW8cfYEQCaQQRyQ3Wet3ZP2jTJ94g4UC54wStKkT",
  "key20": "5HAcEUMKbEzk6S8bLUbW7C2bAoVoUnHhjJBQ6E9ZFnvaniAScu1S7ezoj1DN5LAUuYqLr6Y7TjEsMkMfU5kR7Wxy",
  "key21": "43baK2NPZRo8Aca7dApNCuStbfG4svDuTQD48fZ2hHRjibZkQuLcXG4crTdEr6nnYTwHFG6LzaB1h4UcbBUkLBem",
  "key22": "5yCCd1EsGcyQFQKKSXG3XuiYH38rz997B8sd3jf7JdioK68ZTFvoHqKs6cjrRFcUmjDwC8gAhNjaKs4Fd72kfNZS",
  "key23": "5X7PRYZ7yC9vgrioMdutu292XodF4YuqLawBr7NzS4tU4KnBWLyRf8FxTvyVLyTvHnFRd2XjuAUcHyi1HTg1Erxd",
  "key24": "2JzducGpX8BwKF5n3BiVUh3i9xBBXcjhntCzCQbruuBiiAWaNkU2A5na3c8XTSGgLpCAemi12z7yNzwdiSBuGKuy",
  "key25": "55m2Z2w9YNwtGYbkh8qwUpsJGDyBNsi3xpCx44ZAwwNG67UjwpQLdShgQfXBEeA4SBjuLmpETWG7J54GxHTCQrvF",
  "key26": "26p5AnQhjn6stVuM1R2wvEGu8cwnGrZAkJvUupSGP4W7RTVfCnfsbs9YsNBnhCgEZeNVo9ARVciXZLhtTLHNpfmc",
  "key27": "5dvTAdxU1uspKwKS2yzSxRStUAscPtevZS461vFTBFxdWSGSeXEHfegNUMp7QMhobjbfiAppcPsKuX6bhwCbz9VA",
  "key28": "YcBo8TyKEGvveJLm3CnMQkXtbKrJEGbvNFQrbPmd5ikKtP7xuVPbQ5NBumhVHRAcXBaENb4wYb7EBDktdYyTRrF",
  "key29": "2sDTRX3T9QVJXjLJFMPte8otcFvKeUDEtm8pxVJ2CzW1kyvr6QU3GPCjFS4AjXjLKqqBjp8ovosiBSoNgpiXqrXr",
  "key30": "48RgexdbH8NKEUynBNZoTFgvRvhAXz5NoQickb9xQPKyexAuDQSDdhCwxDEqAn9e6QB21ccpF8h46YCXo7bdL1E1",
  "key31": "5YG7ow5yg2DwhJNZ5UrhVtdHTzxzKxgEuiDXmbzu2Hd7KHomA5t5ZiYsi4eRdSkYN7gxMEEHNe9RZGRJiHt3uHuK",
  "key32": "49TtjtEXNPVUjzFAaHpXsK4gUnAuBYZo5nbXuSfVgF1r3XgePPTuVBHsH1w7Ah3sqeXdKP5r2HgzejQ6W7yyHoFr",
  "key33": "4D2od6aDQMrHK8Q1Qk1gQVqUVhGV5oAteWtC5iLyGE6D9JpJf2NJGP1unnNFELu9y3nvcygwuANZ3AeXyCq2sdfC",
  "key34": "5RJjivPhBMcGmMvxbfbwTsWiw39CFumefxdgBWvdq1ABH2EdWdyU9ESrnjWMNKnfAk4oubrZwPx4GkompPUHmjq8",
  "key35": "iWmjoHgktqe6Jb1pNfihQjHFBWMgZ2nnC3gtsnQdLBeEk8bF4AuJz9ue1PH2Acx6bAQi9x1BUA8iZdvfx4V4vHD"
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
