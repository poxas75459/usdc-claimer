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
    "57aFGGck4KMEzV6Jny3Un1PnH6fwPhdFmkG2fbyyGxXv5fgXrzF5RC5bgMM9d2ZgCLWBGmFoFWN2x6UkNBiSXzYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aesNF7gYS1tssNMBTqNf7BLenbr8GoYnoaRFF7cymt8gyh5jea2v6VnGtvnwvbfHDyzftGHmZ1a8KCv7Xzf1gdb",
  "key1": "9ZCNrJU5f6CozKFXbVFdzXcTUnqkZbauuERYwL5vhHriq9FuDTa2ZgA7MEsXmqofSDeXX5fZwBGBai3VStkN8DT",
  "key2": "Vtimok6TYRSNw7MGHJFPpSUHBKefipvXWsmpUpxGkmx6146GQCK1sb3iLR8BNScyEY3gSZqDGgCFnJTkd1ynXW5",
  "key3": "3Q6TwM24Zr16ZuMLEDbrNaxxpaurrvGwmMcCGgEwWEXeMBf5sfDSMFXzuRjUdvSSTKnREkLHUudtvfSPdmwcr6fo",
  "key4": "374m9AgnBCfxvBDAbsJuwCHHr8AmtGSEh2yukWkNi78NmH2VYomtqV7kutmUbNPPCL9ds4qUQBN2gezDj6Fejv8g",
  "key5": "5YfHZSZE7BVDASgcKXiXXnhQwoEaZ1x7LF3iCTGpYHBnnQ4yvQBPvNa3Ltj7BpWHvPVPc7MxjtD3DPFCPTQfsKiY",
  "key6": "3cZQCmzvJbMCZaagPSZYGdmdSBECzfe4v4UZj8gBR5haHiapkPpJ8pN6mXboj3C9htA6YuGYFWCdYwEmwGpuWxrb",
  "key7": "4mVTmBsgZnrV94aim6rivv3NMAheKVUxRSZXfE7FQzwFxaypfRpJp4qHdzP5k3FXG8aryCAhk8PPaxxUVhcjbTc9",
  "key8": "5xJJAkwvo1t1NdjtYfKtUGdhMoxm3GmaXPbbPaQvkj1mADuBDBJNxahAvEZrc2rir5f14LE4iHxyhHPYdE9eJwmb",
  "key9": "4gaPZNv4T27ayjSwDScJQ1NoQh1UQVCmdFCyUqFRcWx4LgwsBmnLX38dcQ5MG5px2ASH1qfw8tfkZy5ex9hGy1bS",
  "key10": "58XWVaU8dJfN8p9Z4bMV98RRxYWBpNAcjbMJuYeDKzMA1Svggqc9T8n74SU9Tk8roRQ1N6hdVf6nXo4MVhYnWQE7",
  "key11": "2eaTf32XfhioWUEzQHpbxwSTujwwTuy4WGk3wFZDb96j6SKRxrxxehizKQkAkPJEgq64DkrJeXrbExVjZTFQtcQq",
  "key12": "2KQQFz8ENLALGo5QeFUmtqAbcMy8bmA561b1BsGYEqyFdkTEMZ8238q6RtPnbHViPxJVHESxKQUanBZZnhHotJ7L",
  "key13": "2cctro27hz1fKyN9BtQjbwPEeXnFdjqmVZKYVs8vxG67znaNAQvtbNYvV3sRc1aRHNLuUguQPVvUfpGvHYwPDjxN",
  "key14": "5xUz3mKfrHpReYz5meF7QABgRUdDZDv2vhE2mikE3Z24xx5VaNfKT1GiP65BjrZDbCLwXZYqdLpgESiEkKGzvJug",
  "key15": "5Xz38o7wFgkiYFpJ4BJUajDjuLZEVjrFe6PYJJruj3FsQjZpmKinZcZ852zZgMe9obZuUpKeicc7qtSeM9c2Vatk",
  "key16": "3X5k2UPbKTSgbGm9WgvkoSYtcKPGkjMC8xzGEJZh6iLHdeKzLosQ2Tdf4r4AyonKrrXBRbZyp5dM9RdVF5pVUjJr",
  "key17": "4TatZZyuUqZAMBaBAPx3nUSdqZXY4gUqP6SamN5Sj9eshEczCmcc8qXAzMaWRa1heJG4k4SQqGJuRLExCZqQheTT",
  "key18": "2hESV53MXAfs27w95cDRnK9dQodYFUsDiA8CWMbrV5tdjaBJVWfap5zRRLU7VNdu1LLLpzZhFwcU5rZ3SKwTo9pE",
  "key19": "2ZTiaFQ4q62fjtBmMxiuMk1wUoRrERjt2KuSastFEWLyH1B6Xd4TQjdWUDz2S2N8kwbhuX4ESTiSp2aJB4RrMtcr",
  "key20": "61bp1FFHJMhwCjyDhpWTVpSJz4EQhDgfWNH49wK1YPZ6eeojefEVuWpWYgHfB1Abe4QM2mQYEqezyprXU8h2wANL",
  "key21": "3E3WyoupaWvJj9trhhbShaJHCxpahT5EKapZWZ9byJA5qAB8kKHgSoB5hxuMo6PmKE57oGQzYv717Uj1ufn3GzP3",
  "key22": "4V2UeqLksNyBuFnkexAcz1FzKYkqBuGuUKnQP9YRrMDfombjJXk4awfi47oeaMxvx6GE4GG47Z8SWXor3EAavKCx",
  "key23": "2QtJnKor7vbsnLNuufwyaJAfv8UASMN99XAX7Z2ewYNaV9eSwzZeNKvPkMQnp7bPrP4xJmVNRkKpoeo6ohRjK5HR",
  "key24": "3jQEaJrULhsqauAsb6hZbuSBfcYEP9Muk2w8mXTHAxbJVHWeHbb5NWXYzYSZQw7SpVW7zkMonD8edHYpD37VPnCW",
  "key25": "5mwnHGh3jLwsTsAccLPyuY8wLhXi2EMtuD3yySFJXMCbbNnpLnWyiVgXbPc6iZwx59fg36y7WCdk9JFpPxSviwcM",
  "key26": "5oEC7dguoduhJaUdxTA2S9ywozZTy4y5M2g2gCyJpNhVo7334RfTLriFWTeiJCk34bPNJFu44yxnG2CnZ5bHe2jk",
  "key27": "EGbLz2y1h5oE8XcdXhbEUT6SLikPKUKNN2BJTmxHUjrFaUgU2CuPbiRDoY1MD8vvxxp2P5kKfvniecSP7rtZhWu",
  "key28": "5pQokB1tZPn83c4BmMT7tm7Mg2ENz7wAY8KVFis9DsKipJobLycMK7ZV8ZrFWzrm3hPwz8vkDhzcaiY9WqPy221T",
  "key29": "HJaEz712AwxtEw5HirB2fcUa32NVWRRh2WPJoTjdMXgTr87EnYATi698aBBNfkTtZwkSFF7C8DFaCBiHUhSyYfB",
  "key30": "478AffYBDi9GZz4yoTKCjNAoh9BQz6fNZH2k9Sn2SMkJGMaHieoegeM7wm78niivLNVao8GwktKAYZgZchV97uy3",
  "key31": "56VAQcj1cubAVaeE97a9Ya1rZn4Nw31nU2jfTCNzbYHm17P9HsHdmw5q4nHbSRCKzS1SeQszHQGTm1hoW69nHkhu",
  "key32": "nsmnSprf2xB8hVdZFPAifjtastRuEZqcjMVYerLMTmanZNo2pA7EVztBMskSRHbAAkDvotGomkg4pnHRjKqAkZf",
  "key33": "656666rKdMizuM5c9tD1yKNfcuYACHBnXxh3RNrAzd9SG24TTU92Ty5UX9xXTDEG1mmn2pj1p7BoteyQkHTkJnZg",
  "key34": "4gFpfTKeRC18ee8ApBUFNRNPRj8rNKMt98Reet4uQGjBN4AbnoaLBMPKXyivXMuhpucqbzWmSxAAL2SB2M1ekHLK",
  "key35": "5c8GnZ2gU81xiT5wzBnBc2FrFXjgu7rwaZVQTFCkEvudDyRm72m39dws9pfWjWHARTiJc8bwwDfcoBqEArSzj57Q"
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
