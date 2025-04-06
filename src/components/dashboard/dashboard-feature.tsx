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
    "61tLK2FuzF6s1tXgagNNXbjBoFBXovz8gpBNhASDtkq7D5CoNmbYfvZ6sreGGTrNcFWhmaGvx3WitqHpAZgBAwTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nysd4fdg5ZRdUTSFiWrNvo4WwvdF2DcAK9UEFsAje1gTEPaxcjCZ3Jx1KSPEZyvyizM7zUDdPtSMuxVFu39Mr8S",
  "key1": "5gnsuRLPZH8ELzKt9sLXm2pQ3M4Q3C5eyYZazSqz6w854J7FPY37JULwHZw8xcQvY99PGY1RekHPArtjbi1TXm5c",
  "key2": "3YjCWYeCSf9jsH38MrKidxhhp3LnRVRVLi8vELAidiaPYuHm9qDQcJzUWFKDuJmpaSqhuhY8Km17zkCXVWbPPb3h",
  "key3": "2AHvVHpN6puRnhe4DbnWL4oZyc9Pm6RdgUD76anMJuzmCYtiTY5f7vvWUWpgAdMakFDMd1it7D6kYQbzdMVeRpr1",
  "key4": "5zS9vhJh3rBofxe7BSxCE8Dwb8SzWQGxUYY8nAWV6gJ2u7nWViAyiQisaMzzfVdPJ3AnLT7Thn7R2dwpLCmeZy4p",
  "key5": "5D1X2QshKyYupU7NGWFLHaYhseQrWLtsEgCP2r1b9DV5MdcadXpfZZMQXoDHKLYW1UrdJUnqpc2VTunWf4bNNppL",
  "key6": "4apajnUdn5B5jvRuQ46MrwiJXkYPGmPGFvumqQxi83okHJimCpJjZnFkyZJeTdPoagb4Bqc8kWAojGrfBuymrNXu",
  "key7": "5yjTucpKXVJFNeARb8MvZmhub5bm5EiMRmBdui3o1ujH44Q4k97Qex4WiVKd9u2uVXbkqEaBMCvvoWRcvjMLf2d3",
  "key8": "3tj13q2LiLKKWZA3xJFnsLk7rL1q51W1bUTsEdBcsBbUjMx2QKQ2ZZ92zDyxkATDoZXyGGzRoEUS3U4Vh9pANWyY",
  "key9": "B8FdXLatenMfisz6qwu3JWSmK8vLejQjLXUouXZBT7iXSH6ychqXrXuN8rR6MscZELv3dZYFGDffveJdjfaWnYM",
  "key10": "TXznMExoVdooiFTxmzbvQADQ8xgFpx1acB67Y66HALezNh8SSUoDRVxtL25Uyj9hUvwggNdnjnXf6Uxj9yRDMQQ",
  "key11": "3s9UmD4FogshbixTP4Aqz6PTQCDyWezfshbqL7B73CqXVe4QGAWshiMoAdc1QCtCpgYsHb2eZcCJ7wFZYGShY19W",
  "key12": "BJZsVc8QZBwQUAsNK9JgPcgRyFWba4G9PNDAa5aomSrN3NsDAxhhNFw4LYPHuuQEhd781rRxqtRLMWWbmQGth3Y",
  "key13": "A3S4UgJgwHxME3MswjZarX3t8f52ciVAGy4s8Vdzqoyap7JoR6J2tqY6ZQsVmP2t32971h56fddFS2jUmAzW13h",
  "key14": "WtpbzhKnNVPRSMnAsx8D5AkZJC2Y4bc1N3MUNo89FL12eZmNpXAfFC4bpStjhLhtkz4qE5nBWUfRRnqw2kN1cnT",
  "key15": "4cJwXACgvuLKDECsquoLfRBrknkVTKFKhJXigNWXKDMjwL6SCj5Y5WoYhobih75LXvc73gPTJcZGp8HpKgFzoWFG",
  "key16": "eDBX8xRyJTpCDmEL3kyocXkPscRVijoFGxkRtVMPhtcvJwybNtPfdbtWA5MJiCGvJoe3CLTYJpWd4b4PAm71zUd",
  "key17": "43ac9M852Boq6vdqGdLYkcVZcKZ3PgMwMaWP2T4nd5BTvHpi9hmEBJYTc1hfwU8nYo2DfuVkkp5mxg4yii2E9LBn",
  "key18": "3ZxKVh2V4n9U481iio22kVBVA6Ui8V18ahFph6mY6Rr6XPqsnrYPJoTManBvfAmFREyRByGyVy9YULtZUx3wsiVw",
  "key19": "2ZdrfsByWue5gWJRqatFvkSJXaA8kNvMUzvuaCLmqY9mjMieCLaCwShXEccV7JjqpquCyP36RKKDDsDytiMzRcfA",
  "key20": "bKcRcR3QDkoJGxSFXQSwoo2VmsoFjrF3Na2Pq8BnKyk3uEHrHUvRCqzzCQAwufZpmwCQ11nmPEk6eZZ16kweXua",
  "key21": "2WzphS5BTkbiAntHUMTzYDqfphzMQJq8quPeqYo2ZG7qAcSWz6hnoTKS6mN7PUbN9KtAZiUT3CRANvKt1nFwnRMp",
  "key22": "5qzRUhpzw3h42ESQdcKTDNttw2LefKrX2vj57AAWwwVmjRpBreLyyd4Hq3DUdPNRHiT11ayGceJGx1xhQd3hEgDj",
  "key23": "2iFBUQbkrWPnPiXxiRYxPXr9QHA9WnoATBtD4PyEzbwsKHCNJ3A7a4p9EYxX1v9aokVWGzV5aAiMPTjJ5m4HVXVT",
  "key24": "pwhRD3Wd6VqZSZpfNWHSQcaouDfnNTq9jFcVgPihGKRt7GbZrtimjSZdj3bg5qUqPdq8maNs8121U6mrDKUr5a6",
  "key25": "5bbtXFdKrBi6GNa8XWpnchQR2Jxfi3RBxivn6strFVu8QMQAAGiKZjEH1oZohfMBgaS9ixEb4u2ZGinPT84zzCqX",
  "key26": "2qdF5rH5k7fqMr1tUTdcEMpZyV3zLq1Vf5migcALirgHgHLhVEb3DkfqHkeYGjXfRE2L8HCejE79x3TAJT1PLbbj",
  "key27": "4udxFZFBVfTujaHnrrFtr8xduMPitZxLFCs9jf2r1FmyZ5vMSxqGvt8Af3o2BDjBg6nCjBssHwndUM2tjvWVN6mS",
  "key28": "3UH4wZ6WhjTyFfR8UQRfdvurukTx38DhZrJwd2hVZ1Q9jbwGYTfMXnan7RH4HPPUQqUKFu98q21P6gedLQwkEhfH",
  "key29": "3YukTKQ5cH2GMqmh8QvRcqDehumYgekevRDx1YKGPSNJAdkQT2jZto5HLZ3z7nuCoxCvGvywy4jfmvw7ZRaoMvLS",
  "key30": "3iqqd8aju1xpWmbKkpE8rHq59xX7cjVVVNvJ35ECK24xKkNrfHacSCWqbBZ9iqcfyhbKYZboJfjWjoyAu7iitLq",
  "key31": "5L64zmipV2pmLQXFE3wPAsreGZDw4n9hnr8byi676FUaHahCByv8XN31bR7pdwQvs9YX7UCVtnKkktnWTs5bKuDY",
  "key32": "43J3ccRoQPgbQwvYavEMiGBt7AcBrstf9qkrbRk7Vm38PChxCA6PfGhybACuqV2ahYbxdsJcjZ6so9XXM2AjVNkp",
  "key33": "VY8vGcZjXcxP28GVimcrPCCv1HPKUA3WP4BSNt3oKc9cY3feBDoAmeJcMM2iAQHNW4cc9nro8JmKmZoxTeT4ug4",
  "key34": "64a7JtTNWYeT6HXc3MSpmDFgBSYtLUo6nvMHurX4PPGTJ3rr2xx64ip7FSPv7pGp8w32SvzC63FnfNqwbpJ8Tn9B",
  "key35": "Eop7W8vUfAUWpkGau8zJY6x6V3bfMYcAcaVp9NNdtJDiWc1Soc4H4KiKQxzDLtUDmRbXUKEXEceuVqhNVB1wH2p",
  "key36": "VdGd5CDfD7PwN44mQGadXNWjCG159mVHTFYGydiedzvA5JrWUWiVxUeqWtN3JJEKsUQCw9kR11qh3sbeWv2F43i",
  "key37": "3DBCcKQwb3TRmL7Mo6homRx5mbj1JYU89pYUFcFaS6iYF9KKmuERLGB9KJ35AAD1Tg4JWRHM7svmrNnpb2q16yes",
  "key38": "jNR2XGa59Td2jGr1mtHaaQVvPvX9XGtVQnbefDv8bUnXdq9GmHTAQHengBYmeFYJqvtkgmz2r311pieJAR5r3D1",
  "key39": "2RB4sfCbfQAdyaq6nEzueFppPa6BcpajGjJj7L5rV6kHf1GrruLWrEQobJnzmW2KYQT333Dakc3ZYHEjKHxwYGow",
  "key40": "3hqjcc6C2DpY7DEeyvS4W6HXvh7QnXWYDHPgSk46DCEnxBZaW4UvaNEgRXekiRtvZnHDFNLJwK9sdxcuXMcq7bP6",
  "key41": "49k5imAHX2K7wwnVxkjEKgedvXfXLJ9ESmQ9yDeGgJ5zvm8uEzNsQNXW3ELLoXJXBwiRnvfeTzfrC7QhRBZCcx87"
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
