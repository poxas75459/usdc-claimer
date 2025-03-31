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
    "4iCRhviJzRvyPbx3T2zGkfyABwHJmoCpdpwi88jq7YDtuQYZgXPPZ5Sz94HuYusZnpedob4M13H9pj61ZoosiVnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQDD6FgJDDQ5Y9Nhe2D3RL4Zc3HruzBAffW8zLekwAtvcSqr6mQipyFwdqUSkJUF2S8N9J38Q1th59rHZ8AZp9t",
  "key1": "5v2TEoVBNVKwPb9yW1zYyr7YdfBeetfp6tbRBAoYBZkuWp9zzeVzWgzfuVE8NZbu4BLWTbXT74rcRHP7apfzXGyH",
  "key2": "2dBJQXBVFVkeNaAFBYGhuH6AAuvWNHn225dKBKPseAXQdgEL2LZbGrxKoy4pJvJjCfLsBHfQexBaqGKdEiBbLa2Z",
  "key3": "Ds8qC9finZTzCCoFBGbHaiYYgMnRDjL4XBgCrgAzkKii1ShZAHEmEqNtv1B9U6VRaHuqnkNiN2uWmFuHFC9bAYk",
  "key4": "3SSHP2QwPEXi3HyoCuSHjaAh8yya73Y4DcUk7G2oTve3wPdFVLMPMM9LzyGMNayEtiTPDuFWRUEKDekcNokEcewK",
  "key5": "5Vn4fYBRdK9dJahSwNvhUgP4Sef2vQsQG2EirjwMUf5rrb1CxAFBS9vMYNQ8j77dCv9VqWggdcoNheHwA3VDFrvK",
  "key6": "44CiW1wCKcQG49FAE74HNCVohd6GtqrG7qPUbRD5saULRQKwq8mN6WVbVNNe1fJqfdjQpuZxRDzpdPAXPmuv6GaH",
  "key7": "9BvMaU6LUQVdJfNRMpkznjwXFaKXr5LiBJkzV7F4GRw6c8AGxugeg5usMj34QGBtZ3X4JHUCZq4v7WPZbp1Vk5i",
  "key8": "3mQgkabJCpEoTSB3yJteXrYdvnhWr87uJsJXmFzwpPmyWFV5ze23ze7MwF86jp2tH2YfrMtoBUNxpZHLCYg4SXHc",
  "key9": "3o3qVdQy2UEcett4jEE3zTbSubjraCwNDDoaZvYo9QzJBiRdcEJkNGH54Ggz8rC4ctTxLkPkqHhodvfK2zBvy4Vb",
  "key10": "5LRzCmusAEm3Mbu3B3g81TBDJbMdX1iDyZKyCqpffjzmQZxSwRniThnjYTrPJnQc5zq2CtTe5zXthWGwnJfTSxyp",
  "key11": "3S9Vtte3LPGF1Ty8n9fhRUAFkeyG8wLHa7ddELAgUVENxYPcFa8S2sjgDaqsekqtH3FG58TAupGWfzfPcJ4j1c9c",
  "key12": "27Jp3FBnTVmP8UgvmRuQwg3ccE94ytgnm7S4BhTYD1ykoRj49y5PX6D8CpS4p3BnXsC6BHFt8pGetgjKos6JYSwE",
  "key13": "5tKHPLo9H98UNuErLxhE3D9xaMr83YUj7Y1jpZoJRTCRYPnPN6PJX9bCkRatbPCEyqDdNNFsNaKJhx5dX3Fe6fp4",
  "key14": "2hL6S5rFZMQctZqKSrkkNeePRo2gVSYED9GUM3AZNySD2ehLbRs4sxJieLhCDP1fnfdkprLxhmyTAxdbmDxYhtL9",
  "key15": "2wpurDWjFcNkSib4PTPULAYuxnDUFmvhux1kRKC1aL1152JR58DsgkXKWxxDqbPWWwcXwS1MxK2D4fN79XsB3vNx",
  "key16": "5BWjaKLax9zHSYPRxUCuGXg5MmC7C8v3uTXifyFAaqbfa4XAUo5ToQzwccYrkH2wod18mHJey1ZAVk5fseAsMJn1",
  "key17": "2XSqJ3EhmukcrXiXauKusrPUMmdisYL6sR1V11M2jwmSL8JwpAv5CqVHfWLZAYPfC2nP8DMFVxxukhk7fDfvPnme",
  "key18": "5bZYLtngXitrZ8hSrsuJ2kJULMtam24GEU1SzyNjngFm1rCnGp9TWsyhv57rpHcmW3tKzawh1gSNLV3xJjvSaDg1",
  "key19": "4tsKHQbYzWr8YXkPWYxQpLUEhV65hRCVHZCzHDXtpVfcpb7w4jBee5hLLd8D3LavyhK2SxxNFdoYuMJ8MQiWj9Cm",
  "key20": "vUY9wKRn2rqeL79n71E7yyN3hVujVNWZMDKyFJToGrW3FzsKMJ6oAs6AMGdJaqq6e1UWJ6ViTFqQEAUFak2kRQw",
  "key21": "2S9giE13mSDwJCAbsDGvVSwU6dTUyWgm9NftM8aYNDtooQUyjChT7iAfUktGhbNwwfY4oWp3uQuyWhdVwxfH78Pw",
  "key22": "2i2qPgRhnW1CjboxzFvem2iGCT6nb4tNRYwy9JZNBdW5Upp6j1mn7gncAmHUKUjq3VTez7p4Z9BETp8ifXJUvxnh",
  "key23": "m256Chq6vtiqKadsyuYhwgxt2jshjstmiCz8nJopyVWisK64p6fg98MsowEfatg7X1r5WSw8HbpH7T3WXrZPDjE",
  "key24": "5jkexPdewbnm5hukxU6wKQXWD7fMTZtPBLCvjzPqAKiPjai3uDt3z57RwnHw7GKycjdL8XMpHeEhL22aZDzzvVRF",
  "key25": "2Kax32kP9MqQ6LD2bSn2UvHbrwGtDmGN1Bco3Vtg3899zdRv8MkRbovpxw4jRYP6AxMtBt8Upbnd6w7ZqoJbeD3Y",
  "key26": "4YZfKNGM47p63ELzP19rTbT8hSTqwoNhuGkY9raehChXqZeGZdHRJw6eEPfeXu9B82XJxhrrddxx69fryTJ1yUfw",
  "key27": "3ZrYQ468zbeqZ72JJxwNyCtKDLr5RgedXhW7osg8NNg8dYZTkjyuKwXWhncSSuGDYb3GNoF1CnXMjM14c7aMrs5e",
  "key28": "3EVj6383m7J3RNPCuyeB5jzbjh5thYtTp4dQANhzD23QG8tY48AaQQrP6K6LajMbEE1iN8rwZnPFkffRNAuAp5dR",
  "key29": "5wRxeTFH9iKZQn1ccsQ8SYQbP2CRzJM14iZwYGeuS5XFhEssFti1c8bzMu8ZuyRaNdAP6Y1TEKYNavoshFQSS1P9",
  "key30": "365eopTCsoh4qagiFx8wrLEdBb33MFVNM75fVrtDisPYSHSrUsdcUbiPGYhjcVvUxZBeSXDwzTvz2Y8epHHZnu8v",
  "key31": "9MP3vq6SLLMUk3Hgg7MuNhwhWqb2S39svitxzPs1jk9aPRqKANvbAEBr7v5EuDP6CNLxXK5LJuwUwcq82HRXX12",
  "key32": "4BxJK8RUYwBzEiofJZrFkqPx9e2u19dS49NCdY4aqWxrzE6Soo44GYMsroRiJUtmHo67sjdGwvuqu3J6VyB3Bya2"
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
