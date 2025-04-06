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
    "3gG28Kq9DqLDmPvFHQwJcV1fRg7wza2DLGV5fKL8vqqDUzs5vYRVoWmgm5LyHYVvXqFX8s25nSX2b9GAmGTK3dxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kVgxNiUDiLr2hLvdZzn5m9HaMUNSU54ZjPmTqsPypA17ApdbWejmonnBtCk6AknLpqRJfcfjEUYK1Jro3njdP5F",
  "key1": "GeKMMqaP9Sack7kvQCq8n9VreofxfebDQwXXgsX697NPJcoh7d2TaHXWKWkNJuTGVa3R9ecocjjp91W6oTN6GUX",
  "key2": "4gju72K3wMWwrFzJed9JWVHNmPKxHJ6mafDLUUiajBaxxhmmpSNKGApa1qG5giWGUFUXroYKmGvf54qipsZMoLP",
  "key3": "4FpdBiqLLJ7LwadeKGarUQ5tuPekhndqoFiYHV8DHGbuBt52PvkxcKzPuPLpuG5cMuMnn8FqxLT2K1keCtJqF1dV",
  "key4": "2nc9sQtU5XRG8o3ixCtbFjHJzY861LwLAriQxRJUaXwTAw3E6BdcqkBzU9wg8Sha2Dai6hpXkWRxYMejCfdkD4iT",
  "key5": "2J1VSCdNNFegb4w8FtML5WyZWJAHpUJYhAHaC6ERjbpJ1TwGMJUCi6GE2iQgvKbLoChKsMhhduZaJx4qUBKSiKkk",
  "key6": "42VHFECZT6hjfHhAJLJgDqBcaFmya96FFRJvtsHuZchFfT9UbiHcUscm8viZQCQT1QUB2QEPDViTqFE4Eig3AACd",
  "key7": "Knv3JjgWcukBxPktCeJgoj6qpdNPoxdFL9FhJuZa1TwGdUFSL7L8NyCx8EVngERhMhE3C9W4AdmK1F32TSN66AW",
  "key8": "4Rvm3j2KZhny6nwASZ34NnLXnpRmxMJ42FLvE7S34anxNnZFxKxciwKaDimNKksjJR3CP2PqffZqXFTkx5NnavnM",
  "key9": "5FXuzgf4PngzcJavwQw1zkT6uxkpsMon4vVaALBgJu38kUrRf5rTdczv9fwvvxyaa56RuVKeMtHCCqRAb2zYCcuH",
  "key10": "22eSGKQfZMfizEvmiD9LRfJ1UVtsMUS1rV1o5vmi73hLPKedWebPAKHiddmMG4MXUpPECJ2BtC8qdWXmoXmGGETz",
  "key11": "28iMMmxFJXDJdcnbwmrFERAwFo7T3pbsszrjV31fiuLz8FkUJq78ZoWQErSY24AMn2USimSEh6Qy4WhGiEHbLAXE",
  "key12": "2yWUKoLBgk1HqXqFt8UDxPfVw1Ng4Wp1gU2VczEsKUBkyMpvLeJmpWao8XUBq6kwu31JVMyKmF14RaRi7HC1gJGB",
  "key13": "5kma7nw4NyNRxmb9YCVYTJe1FHscaivoD8UxGnRfpMCe7EwKY7MWoJLytNHn3sy48zdCX57fXE5ZvPC1dp7WUnxW",
  "key14": "hUkUdHLePCUYZcMo4fvr3NhyGE1fe8b2pcLVTWKhFAT733oNEuJijZLohkTrKnT4Tf6ypygYieiruiqmYavitqE",
  "key15": "51NqDcVicRpYViPRG9Lr3myuHgT5D9hziMU3MowpkL16WXcqpS9GctMCeVvVoqA918cLqnj6SmkTomgdixsHT1Yt",
  "key16": "5w6B8gHajUc5PPkFnRtjr5itE8cZX3mqNiJe51ufFZk6TedYKpN6YV8RHv1KKTMLWeSuBhCLKs3abzx4LBgnbk48",
  "key17": "5DopXhPWAWrBPUDftsKNtHHQ5Zq9QPoSoSiuRZ7hRejfuJC82JjkgiRskdWmfYrYA1o9sgvuSc8X5jhwhB85Ay37",
  "key18": "41AQC16thAnoXzqk1UyzbUh9isJcNKxxaJMjHnSm5iBXFuHchZzMAq8QsrdbxuTKQgu5KnXbK8frNKERvES6er8C",
  "key19": "3LN3UKfATizVApzxwrA3wTrakcQBXyA25aZDXAAZvoAVcnLJLd3ApEAqA5j13z8mfEaUtbCMbbibxoVebwNJ9r8r",
  "key20": "4i7XXnZ8dGLEx4oxPhCdNAHqcMt5xVXsErsdUwwwe6K1aGQPCQQyo4SDC1KNc8hwJNGhxxWa4D7jrAQijjVxw3C8",
  "key21": "3idHyqoZWz7XaZcWNuTSEb11jeNcXu5MosVZdXKQjCgSqr6c6gq4WFYFFgrqH4XQwzyvBPTtMSDzxECrjKPEf8YH",
  "key22": "Pn3LVDE5XuxaJPFfABjaYnHcPsMNMpVfWubdqg4hBe2ikSu4kQeiRpnvup5AzyBtkmYmTctpDVDN4eq5TvvdJc3",
  "key23": "yXLbEA7C7hmPv2VwsFA99kS4MiZn8g8QJhza8ZYt41Jpjvtkh5YsNogb3swsD1d1dhqEw2VrCd586EzoivoKXQd",
  "key24": "47MzqC2Rhbmye4TGC8HcSYTjdXkokhuQDtFFWpzUhFRayorDXnXLEmCeXwZ1PHevUGiwY1BPRRUtdRu9tC3Tz4hP",
  "key25": "5n7k3Z2THGyyowjrtRLVFNd2QiMvLSXLCekQZXwr463fFvn9Y36mLTKpRSZ8n5JA3S9BZg3vZu6FfwtdYnhEdY6J",
  "key26": "3wAGrN4wUzXAXRD8R1gpAPVouqz787X7gi2h95PPnpdkcvgBn7gwfyj3dPmZnC2jVJcRH4dmWpKsMZMhNn98Eyd3",
  "key27": "23hLu6xC9xvFXj1paVcZfgcSg9LX19oRVWenS9GnaAxmBxr621ArpXDR92mfqp9MV79eHT4ERMqXmQuJQFV7cGvH",
  "key28": "3A6jR3LowGdAc6EJ5yZERHNtS1JL7v5fuynjnmUWVsQukmoXSTKnzZdumwiDPfuYK37ReHbD2wigW2ZVbXvMdGRJ",
  "key29": "5SLsZP2B7jocSXCbVfz4kn5Vc3K8WBtkGXKYMhEp3LjFWdeQt7Y1Q9eCSvxU73kWfoSk7i51eA5cWkC46nXRfUo5",
  "key30": "5AjG5n5metMMV3aMEeZNLcBinxc23xtB5s3BoYRtBn46hdhAwMrchuRbbpF47ZHgea79PkQX2mu3KK5eCAsq1X2w",
  "key31": "4tiQ4GLcJuzXnUNYZZqjguxu48ufdFW2RmeUtppPuziMZX1fsKRzjWS9XwBvQExUtgodsRdxRda8Xy9THxoaix9e",
  "key32": "289qKhn3VeSygD5tsmS5diqXa2Aivm8Rf56Gb13x2B1H24a6nEDKKPVmMGdyyaz2sYUPipna3yHxgfWg2njbAC7K"
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
