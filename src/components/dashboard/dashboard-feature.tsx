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
    "2hCaE1p2Td38DEMnhkcRRZUK22res6RyrKsaTCPnARxXCEpfwthK6gxQmTMTd4qYmyoLL1T5ba6qT5uPNLmkR8VG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W5RrhVcvr9vnv2w57oBwgv8cu5HhqDVgb6za9qmmwdC352DvpwG8F6cU4eZw3fpU2M2kqHLYj6ZNGeTytwTiQBW",
  "key1": "27NVhhNz23e6cokQNRPXEtfDYUncR5t2Jm8WTyUiMQsu2S4AuexT78S149Hf4RBnVyh5VSAAzUtMNqZLNMuHZxts",
  "key2": "53Qcxdk829P7EjZDqFztQFuB75Rf4dGFoag3V9q1YgtprbVjoqJa2Ff6v4BLRuYMfTGRvCpvbWh1W6GqE2Rnaz5r",
  "key3": "4p6qaRkPBmLEd5typ98bmFiy4N9YcxJn6vQrQq12HY9Jhj7vWpVMxkmMc4gAPpvTuAkqGedWxgUVjsppTwuiFiMb",
  "key4": "2CC6bfUCvHoHWhAoDPHKtaPz7KAZHKxetYk8K5DTeir2UJRB9sHvK6JU2DqZgtN4TfXYKaY7epzmaPpYjNwW9HjZ",
  "key5": "bmouvSDop9upKWHDSUvGrZWX5FkLWiid5WsCWuftUw5kGJeGTcMdJiRWvGdebwVbydU49nPTqpPozjcBqH5P7ky",
  "key6": "KuWAkBwvTQAzpSLUaJgP35VKF8h64EymJpUoCayaZfZ81usns9zvMn5FhUEND7iciqjdu7p2n1ZjHsLDBntkXcd",
  "key7": "3eiMcUcP3zNdFUnJ5zoPjMJjQme3bt6z49i7g8dLE9B74gNwMTZjGVix8pNSXAbMy7jMwDgQHPXv7z5s4jsqH1ms",
  "key8": "5tgzZ6dNwBkCKvuofU29imid5BN4b7SBSohRzuxzBc6yVdhyA8wUZBoARVtSdWYpKrY9R4PUpNHoLsBiJr5ifsDd",
  "key9": "63328FYiFqZnm97mVThPnoSiQbJG6WgjrU1mxG8HbFth6TXSdtwHqKz4pFkFD1EZoMLeVnbXeXPFwwLXoMvA4tUj",
  "key10": "4doRF7XPGQrV2iUpSUUMXyFNWGj566KXaNeVsBW4hnSwX2WLY6Fg8zwUemFdhpegKAWbeDYXKxZMmMgxCqPQJTN",
  "key11": "5ki7BxL9uZbem8ci7ecufwrQuJYEPrRNEWA5VQepKn6xojoRyxx2B2Zuufj7zmuQQsjs68zNmQBXac3gVwu6sUaM",
  "key12": "5KrDPuDzRcgSPQKvbpZTWZMbu59nNpzAB87fadteSiDAaRFuCAVAc4Yd8sdoDZTJttBo7nQ9c3f1UtamGkgH4JrJ",
  "key13": "EqBEjzuGjWBYEXmDu8yZj92uC6jAc77mL3ZufAftVu6wTZWt9GvTL24bosFDqDn5dYSNJ4nb7Yv5MmrvCLU5etU",
  "key14": "r7NoVUf8W1iiLQBwdNFvj6nLXNPWqDeyTUTFB2ZqnPptV6LLNrh6C1u1fgLrhAtCEbDkvdQ4JptNR6uYjfKT67W",
  "key15": "Gt6gaPTjP8GaSdjwX2Qr4DQv8ym6vG9BPBCwFeJEQtCFtskg6Wxfb7oe1c5bTgg5FNMcK68MjfoSquJsxW8jp4C",
  "key16": "5jDV6xc5osxXGuVFU8cUp4sxQVZRTsKaJBY93X8DUVXLS2dE7rXkhGQQ6Ns4WFKX12HjR7w15jnU2N7bWaNPP6Fu",
  "key17": "3UPuY65TDPp9THMb7tCjWhqHCQw3eyimuHPpANLeEoGb3MWUWPUPUHPngmRXRsNK9NkEC4ZDq7kCW47qWYEURcWm",
  "key18": "aaZm11Z4NfaJTKDaPyyww6jgqbvZrkz9kfNmY7KaZmht3iD3TzLFxyh1JEixvfFx1sRt2KpXP9KuGjeiSAw6kn7",
  "key19": "3dJUtcpb3mKCZ4TqRH4NzFrTSDaAsbSzgSCQmueUf7zxiKT6Bfkh5qWqHgiAqDAwqqMj3USFzozMAoWReou4X4gY",
  "key20": "2j1gf3puicPX9dAM12BNzxrofVWjqAv6dM8SYYVLia5cFRmkQNgchWwsnDYofvgveVdyE77V2CxdCWFMp9fEsPMQ",
  "key21": "35JAX5QCtu9WAc8AhiejLcrKPwVArbCofXuS1DbusVsw5s7Cn46WcD8eacaypqSjoFsoszRRxYpvubgnntJ8dqWn",
  "key22": "JxSYEgEwftTe9HR3FedH3NmFCBsJWzA2YrnfqiUg2svpWLeRo95TdUBYTdzfzY93KxR6RFWu24GXV5K3dCsFNHa",
  "key23": "3hepGdfsneT4GTP1iWzmsE1cBGVdProyZzAWY3zo4xMUqd4B9qeLWnTHaASrVmDf5TefkUPK3YZG5j5WgkQbfrV8",
  "key24": "4Z4pCBJ1e8KA8baBqR9PNaq16sXinkRv1rgokgdrinvVi8qmau1fYRM5tuJQMdJ4EvXSP2LQwhgM9361nKL74kVF",
  "key25": "2owNrdMEdkfSX2CZ4z1fzWHVpKXGsGkbqncCafCXRB7K3JqYphr3EMK4nucJ3CdyVtUiY1aLmUAqs62Uv594wpxs",
  "key26": "5s9uHctPJEt8F99jfhtNtsuNV8QW7vcuYZcEGp6eup8Q3yt1tyHwpUoe7GVS8zE8QpqyWhV2ja1hMbrZUxA8zYcM",
  "key27": "4V6t2aKiQDcmivGSxqMbJYhUL9hCew2AnFmCydDZ7CxCB6YSzTpv68HiPXGL2eeSeN49xftZmYSes1A8gKCEZAQA",
  "key28": "3YkRrkUj4P58X2MGVbu7pwpScS3vKQhxKiGfTMkns9FZ77qCToEVZZWBQj749p9dwrmFyRCVhtTfhbMpZsR88N3S",
  "key29": "5h4PvYn8J8rQ69Hh2VmZrmaF3DWvHUpkjfLBYR3tNm9Lz7TGigCAYjQFXN52Ej7taqgHYERr6WLN5UHjSeuUBATx",
  "key30": "5detvR1LChG1S8toTf1uVEaGFQeA99Hzs5e2GSVpvtNuAfwtZJi5gb7B94PAMCYaVfH8frenC9fxKrvcSJ1PToFK",
  "key31": "2EjjELHo5KqYaqEkVTRJiweZPXHgp4dsWqqrQVspbKwU6FY9jqjyPWZjdwpqHkh7W1c8Cz8DY4AWmYJsu2yjzvWd",
  "key32": "593D6PyUEsohXvA1xMJiUeVBdmAG7tuBX5xR5tnJb4YqJkkN3cLudUcQLwc6sJQ3ismxrwD26bdjtT8NcgD67Tih",
  "key33": "5RJdRjYFRuVbSGaZKPFoCbrj6tqKfWzMEUWMMbtpVcZG8C7EuFLcy7k16w8nAL3Fu4Dpik9TQqWc5JABfNb6wPKx",
  "key34": "2xctgb6fSrKcn1srfhCT4DCV4NHaaqU5vdZZdKbrHpgQcanowqoGWvF6MQ4R9M3HFjDiss3wsMrcQWYAZ8Pd1Gai",
  "key35": "2fghBDioENWiAyDyN68YsX5wfW6Vm9gVtFZTDhUzqgfiVbcUBP7y8rhtKmof2WShrh1NPkKyjbAg7iCgEp4Jxqnn",
  "key36": "5fVPwRpy15y7JRVVMS8WWpQafCqepu38dtpZjjXWeAVcmL763PZr1NFsh7xtj66NPdCW9ThUwQFFi3YWpmdxrmdC",
  "key37": "2494QjocQ8xpyPdfsFMniLjfYUjHbEWVC9nXNf1hLxuF8kQHN5H8CnjSJYen676zHJWB2HbEWDyDW6HTGgrS9FBT",
  "key38": "2P2Jg7vvH8meb1tJnAwxDmHNneaS9LqHVEMDKpGzsPoHjnKD1bLX6cgWoo6UiFLpULcue74hKXUbGjK9XCqPD8p4"
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
