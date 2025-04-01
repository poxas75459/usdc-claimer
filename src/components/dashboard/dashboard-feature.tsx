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
    "243CStBdm9wHX7kXdZDuMD9HhDkPv5KLt4bV7PjWuFBnhbF8YFJEG6dQZgECaFNHXn7yJHMrzQod7bZM1Rpu7f2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ThX8vQkkytAom9rEL2wLNqrMgvS45eMvFgBMMu1SxtB7BK6HAnzhQuZFw3NSDYhXKHrrVNDWSybHWqRf722DFj8",
  "key1": "Fqp6CMX7zuDaaqcC5h4EF5tSiHuStSLH5WPQXGe7JaHfKLnWb6ahrQGrgpYvT6AGQpk1CHnF4GQ5VvumndKGHDK",
  "key2": "2i3QzmnRoXYBueNLJUgbacJVAJ8dgLHop4XUp6cS1MY39BrYHamvJDbws6h8ePM9CMEt5hUtL8hQtUEQRRycCGyR",
  "key3": "5AbychaUvokyMs3bxuky2zNXHr2i4AB4W4debemxocnGxqHtjfzr6zMHsgC9xNPmTm4UmVCkoRL2HvUy1f53J1ir",
  "key4": "ZeWidiarkHqr8ms1Mz8Bxa4vhGFB66hgp9oJPxoLxtDViDPCeHVAoJnhzQwryyunFo6Af8svvUp2aARfHPtN4yP",
  "key5": "3zH7NJFgQb7F7V1NiMh4bsfCLmR4zXXW8TKmCbyzgSVkdcE3FhdNcZAAspp5BLFkGZMkLgp9XKPUYeTg92WQ8pLE",
  "key6": "38tCZQUu74yGCo3viSkgKaQYDzkX7t47U449mf1hDHD6F2xn51DH1nbBEvPeny3473ntZwerkFQfsMPydkkQEmJX",
  "key7": "5DPQEQ14mG7yeMjTDZzEJiKLBvrjA7KGSmas76nbTV5dRupcEJuFAw17WTvNCQB2ESrahR524Snz7SfHtaXgVyH9",
  "key8": "65WznqUobvbm2y6RHE4gyshtumhSLE44AGniktjibLfkXB1LxPkayvCdAY7Cb62wSF8dnj6MqBjZBzky63dV8Q9",
  "key9": "2uV5mfzmDaqFZuZGSrxoXz4GXPKJdZmWgFZoX82CtuyZwh7j5CHSzZqtmwBk3J5BqEKqBDvBSJf3ktDgh12wXkhv",
  "key10": "3ngNArK6t2erAbUVHjnsEEd2SMwGTc39rvVFtriuogtsVxBoGGQFvcBPKqEGh6s2uwweJUnYBYUkuTLuEbQpqi3f",
  "key11": "2A995zzg3LDqFLPcXE4AUDGyJxaaBQqp7D71TdbjATjyZyL8LBzCWpN5oaA7mKMKe4VXemuwDA6PLkp1yWzJvf4z",
  "key12": "2njBcZGoAt4tRtJV3jVGkb1yEHMRHVFJR8zPUAUEr4E8Ti8WMdXVyfvBjapLz5cBGmVN2Hx2bcfJy4iBJ29yXjmG",
  "key13": "2y2i87pttuQNsNmHpJx36vzvyfK2L1kBjoy8AKNgDcgk71BCGMLro3DhGr49xpg4iFsEz5EomH8fqW8ChBDFXVZW",
  "key14": "58f74RQTnwq8UVCLPW9CaLFUbZT7NK9ryG6DCdWJVhNpZHiwV9efRbF6bw14qkTka1t7h2eyvVsxy9E7a4xLtuDB",
  "key15": "2rhU2ahZA8RT2ojEKwFVU6kJL8d2w8i24Nz2AEVsQ7kM2stQh5zjqcZ9RNFHNBrPtp5CSjYx9a6htNFBdq3ejoBA",
  "key16": "EUH6dzJqG4KmvSwcSKjwB3pNfjQpLja3GxxGLYLNJskRDbatNNeUnz6aRsP4SRYQ1iJwmE9BRYff4o6tkRK7rQd",
  "key17": "5uUEmz3qvUxqib4UbBmHU23fey7F4UbpaMqy3wsuEeRTH1MPuKwbSAvybt8ane1tQzb4hnJz2tDAF1hMskuyHEtU",
  "key18": "4a8dBdFYc2TMQGPmW8K9T9u9uABNtoYBDst2Q7PQ19uHBvnAqGDwET7NPVLaneW3mQYCJL9whb74BXGxTYV1hkEw",
  "key19": "4exsUrEfE9JVnUJqfTeeDf5vJgk1pvZojf1Z6bk6eXic4mKBFaouSxUMsazxbDGA4mYe61QU1e6mdVsSYkRNYSu8",
  "key20": "5A1pEbf95kzuxApvot8SGUDrsgoWjXGkTw5wV9ny1ubE1WcJqiSeAyyH6Lj4B3y6pdmZg6z4ujUyz4X7GBcyBbXj",
  "key21": "DBbnqQYZNLVRo7aH3qNacRMbu6Srh4ZRmhutsyFg6cknVU6ZU1eC9QfnGeoqpwfQtykH2dHTNZdnQKRdLJuSohe",
  "key22": "VurMfG9rzWLd9x89C44dMi9HTYpA7Zd3BLQ8mPmrYNUTBR2FENLyKWPQYbzf97vePoS3QEkJJX1ri1aCaTL4gDP",
  "key23": "5AQsTJ7w7NqxKASAzMEGQWvyNScwCU2pSmY3vuu7dRuT9MHVj8mmc2wkJAcjbgGoR6dzQfyAUBfmftkGHjeboY8D",
  "key24": "3pm33sXJmzQWZmshXSYoHCDYMxc1Caz9vppZ3WwuUSuUXpKKjLnD3xYZKF8n7N46moSSyiLeHi2ZYn2cwGSh5oZS",
  "key25": "4EG9vDkvNPDHb6Hq67ZxDU7J4xz1mkUwMFzStUjMNdHN8NWjp4JLvK4tYJ2KfniKepXrpVcQM63GZ78tahQp3viR",
  "key26": "5w2tbQQ8SYBwSdxaT8jy6G2QAVMf13BV1LtEWU2MoNjWqEnNKajrYLWU6YSNAZB2KcECR4GKZhxWkDUvtiM9HRnY",
  "key27": "3yhFvSgiB7PWeyFXY7K9WSTcKfzojABDQjhr7BGkRozGBNjnT5svhXgfmNBtVqBCtQvyfd9jnbx9UqTTQSvQvvqB",
  "key28": "2URLnA2QGuHYSCmkBPdcWbxcfkKUd3Hj2xUQpy1Qvf14Zb9BB87eAwjMHAyFWJLbsDUYt6gLngZ7SBp9vPA33ge8",
  "key29": "chVQu24R1PFhJ8q8trnLj4AbesbaT7G68PfbYqXFUFeTc8R7X3v6HJdYPC7qRW9oajAvZv36QUDy45iDGL4YwnZ",
  "key30": "3osFRK8pBZrQAx5bgkc7dGygwA7QZXd4cgrVCsHeud6qC5dftNKJEHmTNKSfxVHNR5gTAQKufsxMMgjaRk9Bf5bd",
  "key31": "5uBjNPzhezbnWUyK1ouJKQDcwbMc7c6zDmud8AtqsZVZX3XJy6DwPYffcEQzpnXmbTtoY1dNUxX6Xepk2ZA4kooJ",
  "key32": "QjW72dFXDcpiGDCekkYvbxLKyGmxeZie1BiuptkJE9uNetkLrUx3RvXWkq2NZKTr11ZPFmP6Th2c3iZSGn5x3NT",
  "key33": "4CzVB6mKUYmVrW6M9u2gNYKsv4X4GQYMUYcXqLPD9hRR2H87oDhZ3MfFZk35BoMaADfnNXfiMgMdk2LrTQQvUfCR",
  "key34": "5kbFSevza2S1MpQVifavZDUoXjdWTxA6h1GZuUrpgMWSvv21jtRN7VeLyZrt13n8Qdk92WLorsFWogW7hqoyS9g",
  "key35": "51fzLRABZUhJaGjUaoaqD8sHnSVgEaNQLpfLb7kPkeTDaM2XJmnu1bBj2i15MWfu9YZtPcyx1fNzsyH62sou8t6i",
  "key36": "3PGJF1AhnATL44zQGtxoYJbEScarCa5WYzA9399LR5WM2pSJYXj1zBpHDHwN8qxepQRsZN8AuBVxzxBgMYcCpAkw",
  "key37": "2vdYHeRWTMv8kF97Fz7A2tQaWAFXRSNTzmta4inP9iYq7NPSa278BYgEM9uweP5T2c91by2LrVHHrpjEGB5pdgL6",
  "key38": "PK6YNTKoojwPmCbvvRBiRLjkBR88cq3FVMHHhYsbLJ5jTcgwvUvAu9764LYCr8rMRbXBzA758iQkFreC914Ee6i"
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
