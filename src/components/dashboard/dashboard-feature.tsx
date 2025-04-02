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
    "2ddd9FkN7KKmpGpvcoT2KLpW9qLtvEtaqkh3KawZTsTcp7eXPYMYTdpzLZLs6VaRHLArRhFPiYVoYMkgL4ky6YzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHj3RKegQvaWkpCVKTxJ6VW7WqivgVm9mkexL1uXKGjwfC1RPywzdE137WMHFHXyip9a72QKeWm1JYJNxfpcMX",
  "key1": "Hf7GXr1UjKREfUx4Gqu3befc1JfeP1kguzxp32hQz7wbAhjrWBU6t28yQbpD34wPZVbXRZDWbSngatVWbFUz8Bz",
  "key2": "2UvtE22iKDW1m8bvnWWF6UWW7XEFW89dZLfqeGPvbucdoQB9s5ufDfEC3qZmjdeL1PcMKL5bkiTKhGkrqZrp3uWD",
  "key3": "3NADFjAvhgSBpYHTYDLi4oEbVrGib43QbJsSaRw8hVPBMimrirXEr74kVXQAZw888vK3Q76Zviejjwt11FNrpsQP",
  "key4": "43bJ6F95MV6zHDrxjaFt3gZjzgRJbsSZjPAKTftVxtDwz1d9sJYRpASDLySCrjrHxPR2zoeZm77XjPXCAET1XRbW",
  "key5": "4JFC8r3bajymRMxk8DdhQD8xRwYQWkQmqy6ZJocBmCKfi5AznkaTWp1gY4RLkL16NoLiTnP1ZZVnYbuz6d1sR54g",
  "key6": "3K89RRiH1LhPvxeMUtSfCgi8AXkMVk5FPLgVCd15MQXVzqmcjWiUAjafoYuAsg1q6ekuUS6aXKZ1TfrPsh3xZ4nd",
  "key7": "R1v3SNPBkXW8c7KwvV8pgFEkgCiSHUTHiZbunCHjzDpNv3c6vYgsnVovt56CZyrAvncL72L6WDUrxcAzti7cKjY",
  "key8": "3AG68mxibdTzSEKVe9nwXpfonUiVZeyh1Pn8mWmVPezeidkUorpVK4dBgzTqiz8AXLwSje15DboPcxx5PwcExkGW",
  "key9": "4s6aUxNKam9Pcxnu7SrSyjanGakJgUPLjovxjMAoxXSyssMmqQCoUhbc23JUZmCge7qCs9B2FdYgQMpSVcXcsY1x",
  "key10": "5S7eW8RE9LFrg8XSYVXPhC5KVrgUj8BbpeGeNF2rzBBgQvvu8g5bfqBbXYJyWd2RKRhxwVHXorwpRhK2TZk27c2r",
  "key11": "XjPurQQr7sjT51VPw4Mv4sjKvDo3knVawcd69QXtQcGz4dvB7E8CnTtDd1B7Z2piZVq3FQeGjTsc6sYGXavvzkv",
  "key12": "2Fosak3d8h5jGzPYqgFne83MBgi8CVumRh5ATTJNgEU9tRLAZmLnzbFKsW5Ds2PPyhSGZH5nTkutoVKmP8djxx5G",
  "key13": "5iHracZP3MRUFZoGNSKA6r9mRSixxLRo2ryYAbRYjpqAYgeGHMesrSP3fyVgRej73medN8Xg5znda52yRz565FYv",
  "key14": "3ycCw4gdEvmSbJhAySebtaS74GLwRyFeefzJXxMzaPgomxYWt966T8UKe6VCXnV7pqFoPHDiV89RV7j1YdBkMrcQ",
  "key15": "dkffZ8R6ZDspVQ1dMhwVZNcFzb3zCWtkWv8qxezehb7J5MBocLRP1ZFV4twYBn2UK3UXj2d2NW3WVjgp5p8Vu1t",
  "key16": "uvECNsDzmBCSoX941QHnh6V1xfA1qQuBhc7Hy5FmkzEkaKxANchYQo3kkpQEkiciQ2Ngnwww9KS5e1RkQbjTw5z",
  "key17": "4Bd5UeEwDczwTxVGV4b9ZnWKjYpeBhvfWgVY3BWkvicnMHMnpV5uR1ekyTZa1n68wNLmeD7Xm3JGrNGpftfBhMYS",
  "key18": "6x32hQarJB53Ej3QyrKWQeHwh267oRtiLfAdLRreKmW1oKJtDDPvFD1dnustRdKHjfRvjGKVAsrRqZDFJFwoydN",
  "key19": "3xFLDZpKNmgHqn54HcNp9h6LxyzzUP4Sj9UWeeiCX9CJhnRAj5jYUFgZSCttD2k3sggaP8gmxDaSituo5hxzDJ1A",
  "key20": "4ceCzyvBVCTiug6DfdnjMj4zNSnwKbhqA8xmW1CHmkPkKXUp6GwgjSRaVMqsiueBDFxvnTf1H8b1g2JRNicynUfV",
  "key21": "SjtZNi6wDoRWFf7ChK56jnzReQ3Rgai5nyiBnYtxT89LuLe4wmJxS2P3SGtZMNNUpsbD4zihYVEtMUobcjVtiAF",
  "key22": "62tXGcgyAYsf6dH6XkSNoGe1Xy8679uhScE7RFmZVu3GEGi4mgpjnAFcuQLRZnQyPRe4iUo3PyYnNTp5Zu2dRibs",
  "key23": "5Vkdti2AcBZcapy9afpsVTXH1Q6y7uW2fW9PBqUvuefKkjKCsfavSEgAupgPmudiQjFX48jLasa5yXCfeMB5R17y",
  "key24": "4ANmBmfAV6paJiWyFkaUYqkN6L7yPerRzHqRHfjSiz3KxCXsaZj3HiWAiHaDTcTwC3jiYb8aoYaXq8W8KUaoxQ5C",
  "key25": "3mKGLA4JYA6aNbJAHkTnH7ZuYtUqKA5CQgHEyFw8xMeRgqDf2V8xNGAiXDNHNwTRLTkTj1xDax1HPEbmF8acyvnH",
  "key26": "519JD2PjrXn5x1rNjkwZuAhWj3QJN4PyyBZFG5vn1KT3jCzbnn1AewfeU5DpHSUXPDAnA8qWpjsutCBMMqu6G3Tn",
  "key27": "2Rv79aQvisbeySmu1RnEWYso5GhuzCA9dQCpg95q883rHhRnjLAG9XUMsU8wSa7QvmB3DBTfdFKEPcxC7SZbBa2G",
  "key28": "4LZfZepdsNenqPPMKgoeLpsrah9Nf4tQGTBEVSxBXRdgDstWL4G7Mx8aSuqo61ZYht2KNyt49kfHV6PcnpgbULrP",
  "key29": "LRJB8U2sBTJpG54ai5dXteLJFqipWbLPKqSTrejW4ys959vX3HwAY6wEydqCMYo6vdTMp5bc6LnXeV7ZSPm1cXd",
  "key30": "4ph7f2CQZmKcmDDv8SSqoNjyRMZdvKCvbDCfbWzgC1GnCt8rMTpTpxToJWNNcN5crHj1s2diknUspN2BEb9UgtSW",
  "key31": "2eLBsuhabdKMBDS89eD4Xi4BuyKcXT6Na9XM6r67yEogr2HyDbNGyT8wDNtjYovcP2S5Q8VTY5yC4xo6aezDVhj6",
  "key32": "5477icJoFv5V6sgtciQgRBdwyJiPsGW1jx5Y3Ph5M86kodwa5CinjNDuMU8EqLyJD12ZWCxjr2uogBBku4h5mQdC",
  "key33": "4P1v2WfvfGTA86YPAGpGmzJAn7z2z7MKZDSLmnDxysvgdbVrKAX9rSeu2LAdqxSviTfC82Jqn8RknAnkCWss4NfT",
  "key34": "5DQh9ar2St5cX4A3jSpU8VX7Z9rEo74MyqbPEbqLEkzyaAj8f5nHK2Fs78WgbufbYHfa8tY4X7wZ3dDvtyx9Bdg3"
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
