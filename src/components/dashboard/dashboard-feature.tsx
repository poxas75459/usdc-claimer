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
    "2dcgc3Z4r8ka4joSy8nRDwymovJEoJ2FU8e2o3aoDBhtjSdMzji5LTpMCWehz2XH8S2taf1CgF9PrVFMMfhAhDpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j2Q8rkMETFaupcbuFXs9bK4fdf7M9ScD4NeUuBxgnbwDKPBeQGcjSzKaLk4ZqUg9Fnpsn4FL7inYft8muX5LZdk",
  "key1": "5HenDcsG8f5tUArYRS3nZeQW2L7BJQEudvSgMVg1YoNEYy1bz3USrwqpbjzpmuu3HVaUoXBaoUgov6XMVeCEamPQ",
  "key2": "4x2UYhvsF4oZxPyQ5JzoArhUFJCXqTE7CxDpaSSxUrUSjocNs7jqqeJ282Nv7Tp48e1qZo5mQVhznRPQwEHpuLDT",
  "key3": "65KLiysPD1EKVPkZR2fHRHJ8ER1pJxbR5xnWfy11EN51mBnHCCgUwp7vgoxGPJNUcndE87QRsev9mM45huP1554G",
  "key4": "4RT3srrMog4SNL4ZAp7GmG9utKT1ZXE8H3CjEGfoZxyTp5R99GXXAJHhSyubVAdD2ofoLcwYQLidnP7yaQuR19G",
  "key5": "5gdzYJcecZRGac85bFacfnGcsk5A48g61DKgDTTG5xe611srucD5VpiyAc7qbgCtbnMphsiJr9kGUCCp2iuqdxe1",
  "key6": "3coc8wE4dEib9kcZZGFM4jXPWjpQXfipvLbZqjwwH9XSAxyByQ6tGXUTJuR7HLfY9vSGsL5KPC2L8khUYYy45ugH",
  "key7": "3NQXStaADPBE4uYLkrvN36fV3477hZ4SFjeiComaYo3Z6L2LJ3BdTooJissu5HzdQ4NPuQw4w93wnoicU6tyum4f",
  "key8": "L3JAYWFFzsrwoyHJ3tKw92WBQEBRga63QrAwBmGme5MaJHjgV29VubgqC6Yngxz1V8ZU2sAsyAExqjA8oZSn4bi",
  "key9": "3GLnjniBx8edz5XCFP9FcFKbMU9PZBbQVpjZVQ1Ysym5mQXTaGG9QbkjprdsXEEb76VbvGv6ZT9Abnet9C7AHVrk",
  "key10": "2hXSg361KySbJydtRoM6nncmVCQ3FRkUNCRnyjEyJs1SaKLTjNZFSztmViCPZZ6mjmBiS3DsmmZ29x5WuK39UQZV",
  "key11": "5V9rsLQPEQTWfuv33AFyAvvK9BVucLzNwGQC4J4zVhBdeUhBH2aqQ7pFKkdXKHGYWuaEEkgupi7Svf3JbYxjNxey",
  "key12": "3vVndoizMkUa4xQAwkoUxi9KuvG2m1B6Hi4dJesxKSkep154Em52EgRaxJ2kjRfcUr8FG9vsQbUALgBaBUXKy9bw",
  "key13": "4PCWwqrj8wQrdYNiTz9HhfY9hRBtdQJn9XppQxaie16NUjtajpwj2F4zq6M8uE9B92gv2JTUQGWnyY5tzC9ibbvL",
  "key14": "41vMr3M2zK1Eu7kB989GspuPmwQ2zquqe11D4Sk2zJRLN3jCjXeZg13UXJSwPQZTfp9jgzWXBcKWyxyFJmWv4irT",
  "key15": "4PoA1JekaWDLp4HMgWG7rtt6BH8tu4KcrKCecg2xGRni9NYohx42xnS7v7K3YDQmb3KGZWBmnS6ybCSY3UVT7eA6",
  "key16": "3yR9ofp3vcmXH9nWGFreKvt3YNhbhuptRrf9kkj2vzTgWNPQMCTzvu8BqYrCvHhcRG7FCwRoqA9piV4cxTcKbGPp",
  "key17": "3i5K6pHrcn4qv6fCBSF9DPR8WNXs6aV22jFnNxzjy1PfP1hcFRcMtgAQLFWmFPcrEApQrpb5sw68j29cgSHv7kaC",
  "key18": "3Jqw3UJksQFC7uTZzk86Pg1HhjYazkLFYFjjBASdJQWBFTjqxnxkukytXQLjh2MEMB7eBM8zNtQ5NeHgEgVHE3GQ",
  "key19": "QAahq2yQvpiafwyx2Uec4DEwZ3MS4cgCeTuUmEMMk7zGjcJiMgYhaKmMuqQ4e3eCxUskvJY6GEpkNZ73QX7x9NV",
  "key20": "28Gs6WyTVem1PgnKaH6JfPNspT4dAviQz8cMoq7wc1QvpsW85zo5BmVdzANDd4ccpojS6Z9yAB1gdb2tSficu9Yo",
  "key21": "5YwZHgphSoCHL2wFtBMA8EJekkao4cdeybgfreNz9LxCGdsLRmopCdAHGK5MyBxWzrCf5Yt6VJRu9Mmrg4Z4xnKA",
  "key22": "4bKf4jgzsCPw44KE9RbEe5XJZk8aJdfrGuTwSXarDJzqCv6scUYXg62Fcr1i6jf9vrx21mmZkK4jo8towSAVF92m",
  "key23": "4oq7TUxGoPawGPe4ZxkxUS2VfpQVyVUG8VSpLANVPbAXGZ8mNnsVLpZpbcRsEijArfd85UC7MoCpyoCf2ukZWRhL",
  "key24": "5jvZ73x5UnwZYrSnNYcYvNsaCQQb7pcY29e99yFmYRTvvna8VeS2EMU1oJz9eRzAZRhUpuQgG7n7kLKCELnfuC8X",
  "key25": "5noJs55kXJwCGZrZpRaoBstoVio92XpfuQHEndckqSQ7wpbwYCut3aqKq5gfogSjzZH8SghiXAGJ1gjsfLZHYbuU",
  "key26": "5wrcM6bdd3wPpQQ5tgdJDPRqN5KJaqh4WD66v8EZMHceG2RQrpzeLQuC5azLbbpdx1HTN5amFqEp2Dh3jAeFS7k3",
  "key27": "2tXPSovkiC5t1CM2y9ZCTy6D7eLnAJmpqNLQfTbnwBZAHb6bYQAgrjgF13VLkiNuXeJRygNiLj7BSZwM4ZiEcs9j",
  "key28": "5h1g3uCtYzZaFLvxeFbSeHLLd9epqFjUhBeDNZMpJdDMh2m2ocB4mvjsgLCGmCes1ia5iKnJbeT2zPJqxGJMVS75",
  "key29": "wn3syFY45sF9rgGDde2t4N6fwBUaKL4qgH5UPQBrhAhBjumW6opVHNXgTJF77ud5pdVZ4Mk8XSpWfV15FSwWLVq",
  "key30": "2PeX6nPj8jFh7CdHM1fpw8F1pA31j21he5wSD8PvPGXBtJXEfHstoqXjRMsgfEvHhiCcY3xjVPFS72SuAXdj4bYN"
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
