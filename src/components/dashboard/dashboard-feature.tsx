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
    "PkQ55N6M2z17Kqj9KHzd3xZM9R4muyrMqbWF6ccTABmNqAPMV6hCMLhRLq1CpZcyEyHyQRNvqaYdpd6yNGPEXrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eSowob45oNN3L2UwYpoWG5QBvtKQbPa3M9Zwfhm2sBiegdi88jWmTJhZeL3NRFyeCiR9tQELTAdbrc3YuDsqW5",
  "key1": "2MeBdzt45YcW2zv5fQp2D7dyjRjgTozX5GeSfQg82QKTxSUkWw4WwcXjd7PH2VMrPLXwVrzSvXupxnzKDwkdJjHz",
  "key2": "3A1DKV3BUcZXCArmGfvxnQb3dBRwcsrs3xr4ebGsrxJLFo8mHaccZYWWipnpDajjuGLY8hL8VpUYUJJAh3UjFSHS",
  "key3": "256BbNybFzmvN1dGsqbqvGch1Jbidkm5yEn7kKSkGsoTiSAXJPFCU4G3g4fTE9GUMCCJgg9R8b7xnDE8qnsJ89ne",
  "key4": "3oipYBetfPGSErJDPvLL1d4U1kKU8yHFVPxcmiLWWLYCoguUZZNRbjg65RLgF5GnD5t9T16Ykv28cP5gY2QEHqu3",
  "key5": "2CjbzK8o3WZBAhP1E8ST15jzmEGB3nKir9TiY2Q2cPSg27kaQ93kJAKN5koVkdfWHczjYmTd1DiNqa7Pw9os3TCV",
  "key6": "4Qif1FJz3e4Gztq78NZgw4G7goNABhtNAyQ8qxhcgzEJibRyH4FD2SMXziBdY8NpD2uvrvpavAFtkQgnggfxMeKt",
  "key7": "5hWRNPhXEXXTdYgEFUWuNWuqKJakEu2Zox9z33EQBcddGjw4WXHCo3jTnYWEkLbA2EC3yiSmQchbNmFFWgvzYodd",
  "key8": "2NrDMyFqE8PAjVXPaBHyF5eGTAW4zL4aCJ87p7sPHgjBazyTTngeqtmgLg4XuZNUASiWuQKu8oPZstJqNQ965rJd",
  "key9": "5f4Seo12pMZ9i9meEMpX3pPLHW38TESc8wdvxtn2tFvFcdWTghAxEoNtv8LNVLUYH1P5b6g2ZLUsL2mf9Y1K5ehd",
  "key10": "3vxGgSUGs19UVba1ZEoFHTwddqXgv8mDze6N9U82kfehzYA86JCGeaZG5Jxwy8AdPBjidLVKCC1RQKsD5CGcDoKh",
  "key11": "3VL2g5RsY7keVKCQHBAxGWcMVT2AH5WuSWHXaXGtHpK18SXXVbbn5iAfSrPBJRiTGaKrxYaGbr99btDV1oHFwxeU",
  "key12": "5a9FoUYsToLVLZY6V68brSt8Z68Muo5ehvRWviFfQV1vHhuyU5z3jGn8p1t2JCmErxXu4n5uP3mdhsEXwFiXSHRf",
  "key13": "2hmXA8ZyrWUFtaoyi9E96p6cZFBpSQBbyLh9FAP2tAZi8E2Y6k9LTKNAkqzAqoiyE5AwfRErLDTmni8T1vx9NDAV",
  "key14": "2NUFncAPcm2FMSmCeLVwdJMfJM5MaoGGadqXR6H3hrctHuAktzx6cRTbAr8DdWRRGgXSnSkwod538xdnhym1Wn3V",
  "key15": "3GVLMSLCC9r7MVWdqEgXrU9pRVjbYtTokdSdGFNZb2y5qT3eZXa6koMFCrGk8snHa7hdJUzM4DYoxj1JfEhvP7jU",
  "key16": "4bdNAYYpnsGNxrQ6M7NyjTebyksFZuNycWqodzRBR9T2USdAhFvVih3gaFz65C5FJH86whH3cAu9TjamgTxQgUdi",
  "key17": "3UT19TBaAuRXoAL61o6aj3eA7K6dRKMpjXJJ3ShiQXr2viLGdZnHiVEi3SDAQ6ybnDMp6NbKmo4WWE2APB2PSzqF",
  "key18": "3AxQaakWuKbKP5B7Afj4NRPo5feKJ5sBfesniYsNVTZynvPDRguyPSsty5FLDSwkFiUY9nhFWACzUBNQykyn6RDB",
  "key19": "5QnruAbdcHQDipV6L3vwzUJLfPGSDzvjzjPxvSyaRimM6DYEumJYw5owDYRGQ6hNEmxmZncsjHpnAzwWynjhQUAp",
  "key20": "4B9KGTSGDqcsqd19onM185YdVzDGYLm4aXmvkxLTVTgPB6XZEFxhUbRAbUheP4Y6SDgRpSiYfuzQPJfj5MAbf5Eq",
  "key21": "4ecHAKdK4wJ9U6sYh1Mzn3oXmcsupjn1zqEe1KW9AUYdKciymiSmgTrtyQQR87Ru9fJCFB27Gxx8ETruYVEWoV3",
  "key22": "565JUoMMJd841mpUHfY1bn2HwSSJXCVZvYS3aaki9fxtotrCkgaaBTeQDoLKGrkW2QXFrkpwfuixM5rrNCkwdbaD",
  "key23": "5Ccqtnqt2nKxbNK6khxGUKSbq5V4tgcgqh5KEQwXGaEN2J3HT4PeyvgoMHfyceq4j9UprnxPC2n7qoizSwDysD8r",
  "key24": "5ZD6UsqDGoZnQ78WeAGdSZMEsBpZiKMoypvzJoAy13seZf8XtUNfQdTMUWvoYxNSbvuukiuiTNf5VUkKsbR5je2g",
  "key25": "34SPo6kdwD56hqvFvXJ7GqmUa2Kzpx1QGHmqx9p5qNo3s18U8cHYcSxqvJQvEzLM839rfsWymMT94wreaTQoBTLe",
  "key26": "27uAhNLj4bTWiNCY1PR2Mb9XtZ7WZiaU1fi46xcHeJzqnmLdvDAfDEY1aYmTVZGPSiEtbYB29jNPkwKtFumk4vSe",
  "key27": "tPaqhnFizV2GjPBd9D6WHtAPseDXrom8UZSRJgQtsH1q6Cd6mZxNUdMK4vQ7QKSVtscb4pfcq7Lagsf7qVUr4na",
  "key28": "xQbJfQa8cx2pzy5renGbmxfpLS3KN5RnC2cau3bTKWBzzRXZFShShNd9mhcf7qkQ8NdRN8ZwFJ2T2hGQRBS8a1m",
  "key29": "248ZFa76v2ajxds19Yjzcdx8UMco2CK61B5TwVVmRcKZPYPwrDVSd53juVXkZUTFve9B8cNLFbXJgb1MmVHHZHzv"
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
