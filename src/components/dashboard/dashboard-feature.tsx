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
    "5jLR6sC5znayuGFTzEBfVudzz2BA9HoC2LjHvRxYKkELfNsmkJGczruU4P8yrCDrVPHPEqsvTjf2m7BihRfDrseG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GAimnnzJ5QGPgUKNmUNyP81vgVv47LRaK9Dtwjx3yozqmFcZEGNYP7VvjZwVVXoDXdHa36sVUKmX7KrAZhEYVTB",
  "key1": "2BrKfQ8rbT1tt6uuQGDZK4AF2bb1BxgBr9UQeekiwP5FnatLsGeTYd9isMNRXyXxtskvdaZpbFMzQpMPaYQ7uaBQ",
  "key2": "3HXthw2fdFcUZcKnmFBKgAwquMR1f3zHawbjtzxDVZWVcCqruqJpNeDZQNvdKtcuc6vrQTVdSF9DAYu6y7WRDxdD",
  "key3": "64krMBE8aFq6jrzzRPkE14pT7azxKRcua5QHiXYH5gBdGiCk9v1W9vdpqrWm6JzyDUNqo7HYcJhrbiLMaq9Bqnf1",
  "key4": "ii7GFYm16RakGqztfZ9FMyFeXjyo97ZNzecbvzcHwxYK8qceBVPMqxFBFyndL49j3KKa5VEEvrez7Drw3uHVrXL",
  "key5": "28aazNZkfa1zyV4zfgPbfn4vvRDXaK4Zz9sXcwLkt2bJMgoAXCZxiR99QuweJsXG5BY9EF5WTVbt8La15BKwVFNV",
  "key6": "59ADLf48q9VsN1rSfPxVPTVWDMDLdmuQJqoiSDpSw8tgRWscx1V3R8ipPe17gzmAjBv21aTsKseWEkabWEMqG89V",
  "key7": "3MPMufKBYSi3ZdXbZXJMyVL2qQLmZv5vcxaUh6SUDmCyay2Akj54dCbHycqDnUM7d2gsc1o266taYf6YUURbitgi",
  "key8": "4o91jycYNuXcpVexNeNtYwTXgg3AR4WsZuiXa1r4dpqkRkGFyST2JtiZqbYxn96R4wgkcwcm7mfBwypc6NQz6sjM",
  "key9": "4bvfEhvvPvjZVXSgHS8QGfsX2NGwpKEKq9dY4uupw8FgupYN1sdjcbYnYwazpfL3cHuFY2WRzWf9bHZAywhzez5G",
  "key10": "2NsNTPfEBmJxLSrh61jzaDJg8nwUtXj4sMjj8t7B95rpUqyAyLkvFePvonyMvrmpEFbnKq3Q5F2SwCScM8Y88Fum",
  "key11": "2NzfrGRVVst28J6tdCcdcYFmFKjXrz21xqq4x9tFyoSZLac7rNBMm75KEG3irfL7wJDoaoe1U7PcTCugBNPP4sYt",
  "key12": "5ErmZoqBMdKX7i9SF5WwGEHCQLetGoG6mJw77b7GrnRdoBa3aCNxGYRYMWUALTVaq3F4H1wTx2FEUJfvH9M2izpu",
  "key13": "48ovYqs8ryAnDqrRVSY2HQEcNkoNP5Dyx9vdJ7yL8pDnMr6SpveNAy63qcAKSgBJEZ1Lgp3YyWgWKP16JFyizgPc",
  "key14": "4Y9aRZAguXdRpbkEyGFctys1UfDM2s9VHyRf8rJ2JnqYmC8GPhASqui9ZRYFhCrXCLPJNv3bjGz2EKEK3QzrHc2Y",
  "key15": "o1qFvecZK2X2TMa1WhpdaMLJ8Z4ghZ21cpTqTA7GKWc5XNiQY6DucSFpwHE7Ck4vsfV1WaqujQxri2yHWzZY9ZX",
  "key16": "5oeVxYStKH7LTbYGfcQeqmxTqVZgHGxDqpXXwBrnBunBLBiCw4XN5TXieSRBEeq3mA6sKPR2CAowieRBACiqYBuz",
  "key17": "34xGvF3QnnH7S14KvaENr36EvHrhsY4p9cikLrK5sM7yCvWV3GXjnZB5biqx8cfkh5rnkQy2AnnPhotdRUhpgRN2",
  "key18": "5gon2xfkLenwg1CRA9msMXoJCegvb2L5X38YPDw3yHq6uYeGd2pApunwnhUZrjigK4V1xNPUhNPiZ1vo5oAjSGsN",
  "key19": "4ENkZZetBcXx52hKcZGYUTKZcDkbK99vuDYyqj4iZm3ndgXJphBkUzQEMpyLkT3SCLFGz2dXGqCWut2G4eF7PzWz",
  "key20": "Bfom9F53AR5aUxzHsHp2pJzENQW9qzZfYVAEeXNoDd6D64rp86Nyd82FuWWF756kDjkXWnRULRw65ig87M1DTTd",
  "key21": "42nQAD34erTfrRZpHxxW4dE4YErZpFrvxePpAyy9c5eDAogCirW32So2ChhYCT8adLhdY5Tom9uT12RrHd8YPEwF",
  "key22": "5SUQnpD4cHPR89q5nyuCBq4McBQEeeuF1Ze9a4aotBnbBJqc9roNzQbsapyUfS3kTSx6PZdQiBf47ed7tDrvmXoE",
  "key23": "2Fo2JzMpoRzVVtHzvMUfkSKAVSNf7zzdraPvLmBPD9B96bbHQJc1LkBXAADtCUQVy68i7HDyJqmcv8authpZLrvb",
  "key24": "5N59p4jJWVE37XpG5zFfCSF2z1wJ6MLng8t6vM2xXCQn3ELF3oCg2KtPgzTDPi5VXWZ4a7THbC7Wg5AAf5kR22jR",
  "key25": "4Ev4uFW79h4BLCpiX8Py9Q6298Ha6iNU7EJFhBU61dGCKK4RwyHF3Q7he8dzqd5qeGFQekMaJe9sXQWzLPy3277u",
  "key26": "3tUWisEgWpbCbyV3xUKWwAWeKRfHQ8T6AEosZhdcsd422mv4AcgjBnoQVKg7Xdw2xnnXEPvczHn5VZduCrzG88ax",
  "key27": "2rFBaWN9bgmqwK25gm9etMFiKghQ1tmCBjQdT2KTzzJJ49swShnGSAdCU6P9RDQf1ftWiSipDPHPj2dnmqR3fAEy",
  "key28": "5jfv9GKbFSWMart7jSrfGZrp71gx7jds3rTwJuJzNaQDAmTNi1DAesEKfBWwCYJz2o8UuD911SUprovtEgENDWYH",
  "key29": "2JKyA6p7VF3xJM8LUuUH92TgQHKKoZazuPh9XpT1zqHY2YF8NgBknFP32fsueGxDhRYgwFJYqi1efXsRtMkZd9qz",
  "key30": "2JkPNYEkD7hcpbFr6cLdVrd68gSgudXEQNvrLrusxJQkbqEegdNFNKVeVxzr64aHG9GYGyZ7TwQF9dzeQbDHvFkM",
  "key31": "RwgQAjCMv6eEjH2XMWFuNftykUaZfq8eLNYdbzUBN59oLA6gK3vP6DJLHo3dx4sj6KCordxzUH2qG3XZWB9uXMD",
  "key32": "3Eq7cYvwUZDYdDWZNYH1b9JAnsAGE55s8pqejCKfBAPaNXY9cfkUQMPBpeBiLFd2SKHyaRiX3DxqFmD1FfC5FmtS",
  "key33": "EJdTD8QoUchQJA9rC5RKEtk578gpx2RmegmpLULJgEDGfuPmz8D1aGpD58qjckLkPdWc1fab617ZQo9LP2E9qrT",
  "key34": "HS4fDXB5px8y1ZS6hUFHQrXFd4Kb8neeFv1s5i15KSNyRvreio8QaTTpeT7G4tFe8hno66iGuC6PuQkpuyTxEG7",
  "key35": "2varzFr3B4NcFtbE5ZCzGt1Fshkc8os61UppLhC4GZyvDbb7zzAKM5MWd5GT9gSpHVJRBG86crHMiovfv9X2unnH",
  "key36": "whWDkkfyMdS5QDybkmzsiq9C6P22Njzmtc9B8ZhT98onBP4VuhLT6j2oqkg9AYKQHt5s7P3xsoBz8ap2oQVziSS"
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
