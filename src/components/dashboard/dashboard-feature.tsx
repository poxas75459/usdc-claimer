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
    "4QwxfmQAp3s1UmNZsnn7zmnLXfDdgn9hguGhtaGsZvW7hsZkQuKDmfePzsuov2CumMBx7VxWhh2FCe2W7tLQPeEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ez98y6AReTqT5K1rRRvJc8w9sY1YxuBcisfmN43jE6Xkf8mbJnnF6b4CNcvek5WpSSqY36YkbVCFe6FJdWpWLU9",
  "key1": "4yRqgLSgAkVSY95RxcS8BYqFS1C1RHQoZeuYeZWx56NkoT9Gj3BqGwqskWSvjX5TEdi77fhJm7ebadWSS1hK9jt9",
  "key2": "3gHyHrMFZrtZRxYKecXrch79hHM4BCed5MizKRHW5UafiE7B2tkmkBYJovaSrqp6r65cbuKnYvboyB1eMZthRzpN",
  "key3": "2fQVEp3NxTgSyVYyf52gR2pgYFTn9wq5hUY4GLcmcA6nf89c1t3CNQdXJwbNzmNZnfEeNgL5MrqVZDHKH5b2wmZv",
  "key4": "2Sz9yGwgPogJEcbAScxdr6QP9bdzGxykDRztaSL9FgFJyxbVJxqtCfUu7a5DrH2cyHL17b1oMaTo2U1TJ8Qwzk83",
  "key5": "2BvHDHxWs5UCjb1BbAXyrkH6G28kWBK2vHJm3iywskdhA8htKwAXXQdC9knjHmL1cKMneS7G7HwZssb4cT6GhVmJ",
  "key6": "4foP2QmJYy5y5rgnFndt2YcXG5PP7wBcSyDagJEKVkX5bG6VgRcZ73pJMvjPizHMCPhZ2QKBHBuETUmj3EYipV2U",
  "key7": "25WSCkettP4Vc2rkhT3P6yt9iePoxWP2nEqDpdgdVXG8frqrf28kRzGEryfL9UhCHLusKvP2Rt7ZMEJimH8TPZ1C",
  "key8": "2p9eBmTpJY3DXFvxJ5HXtTDYUwde4bpfvjw8qshjvEfFbR38ZpjrYCaKdBu3rsdXVE66qgJXAP2tixnrcnhsNq6M",
  "key9": "d64gPX8BtYuEUzAH58Zf6BY78TPz2fpnF38Qo8VvvfefKNE925yG2kCeF9XntMCRFmeTLd2FzDzMkMDaXfk1Amx",
  "key10": "25pA1eP5qFCnQf4VDRw5WLHTs5cnouA6iHrUMgcbsVeYUawcLeXWZG8ao6YSyRxtizMiPAibekeRDpYUF4sru2SP",
  "key11": "25HHVAWW3BYmqkH5i8P2V2ekw54VTXYute2TPNjrUzgk29tyGKiEFjiiM4DCwtDhwJcSKWzXgp5FPsxrdKqX24dK",
  "key12": "4Y5QdSHJajso4BKku4eEtexyJoyXMpqswz88terSYpC11xQd99wrwiRBQPZUqs3JrGceg3RGk6FsMM13rvqqrHLC",
  "key13": "5XYctEAz2pkx9Asj29SHaXs6JeYPZ5uxC5hho4e5oEPHCJxgG1NGKFQiAUD6TLLpEhHszMvFyPverzaX2bZ47Zh",
  "key14": "2xo7n2N9tHDvMdHNjWhjaQ5x6nSCZvra1B3d5kNdK9HSTyFj5VDsKYNVj52H7sJEQrKjKL8x5mJ3M41WvX3T3x1L",
  "key15": "3GpF9acNvLEfodD1XzdhjoMZzqn8p3qmhBJZMc8C1KjLHebDTDGoYoSjYKLTX3uZFCeDg93YpSiQj1WEhAhtNfT",
  "key16": "4YxaUfK8JPdqenKdNTEUutkAqgotSTmtgLjembiwECfEvqGre8i2xd8w1YSNG9MSbeMNNqCFP7ifVdLhBdmDP2Aa",
  "key17": "v75CFHgjoRMcm8zNhd1cSTWLn1RJ986rXoQAAMgRqjo1Xhf19ndfGkqm4Xe5g6hpbcWosdzuzzgZ5tLpzxNhACr",
  "key18": "4nx65A4J7bxymox7RvMYzJxKUSZcebib5YMsZ4H1oZaQNrYGwsuD7hrPWekoj798Pi3BWomHntDMjhzRzuQyspJb",
  "key19": "23x5yyAXFJRoMcPhLoByuY4mAQ86K1dPeBVqaDVgT9GB5rtzXsAjqJX1Xn1swR3dHD8DwmRyV9JAYysM3jhFoNij",
  "key20": "qqJwVhJPCexMdEuFKXzFRGyGFxbYqcEBwGmTLF4X3rmSDoXptcf7HxXM8HsMMBNACXkiip67TaLyiKh9RYjSxQH",
  "key21": "46avezdYtm4yUF8qMoBtkV9wVkwUVMgyDw38F2Rk68XdYtRduw4iABF24E1tH2QqmuhfG7HhjUzP5cwSNC8E2cN1",
  "key22": "32gQEb6EUymSJvZJ4JiwE6qmBRXmWQPh9qiv5V4tQ81nAhxEKpbyf4ut8ntis5s1R8QjrgW2MWyPi2aaKYWDZo9Y",
  "key23": "43id3hsff8yN3Kh71xQCoTn25T8Q2d832g595HvnqUYbo16qVGUPV1zN6TxnYCGops3jcxXdD6ScNp32jcwrp16C",
  "key24": "3EarpSTHniHYp5Tag8AFcYQ2qDNGyGHdDtan3ontSomvPrFZx9FWb6fc2m4rjLVJePWhdVDBXSL2P5xFSByyWegx",
  "key25": "PAzXgin3P9YF512kriAfLGZpv7NvD82FqrthjMR8FeDNNzjLiuTWE9koawnCupNskikTzvRDa8APS1V46aTA6QV",
  "key26": "4sTvEJRE4US9AhgPFC1pq1GpZCLAJc859C5tFtRHq59WU9L4woJ8KKq95dhz6qGh39SFmZg2kQpe4RnWMnGVM5Pe",
  "key27": "tkqzEQ1GGGESX4NyRHJ1Npzp8FygiycsU5yJxz1Gpn575pQsP6DohZFWk3d35MB2wiqmv3BSJ1yCK5wni1bGtEq",
  "key28": "5Q2H5nvtqm4MrSZE92BGxZjF4C8XEDqKmMXgQFAsSppNuqqgqtbz9ea19hznVv3awT25JKnbBGEGaWRqRsyuMHrS",
  "key29": "4dXC6Dvu8tdb5zFSe7AwX9pdEb9HJvZAJnfHQHft6boE6yJmVYCjFM54WEBBZ5vHx5eCztoMoXYTy3etG34CGdLw",
  "key30": "3FTNd6U5JrrMJhPuhmWyDgmPU6L2s8Vr6xREtQrwuZw5jiHjGdzg7CRarXdvY6v42c5X8rBsC4LinTafDcv3VjtE",
  "key31": "5TX2opaQeFPHDRt9c4yBP3HJqfyB4Qt2gAWrDMh7STNvWJ9Pu6gMjmPiimi2rVA8K9yng4EiGcCNN3tErAdJvHut",
  "key32": "67WSUiGt9RokL9gEr8giXi9TUu6EV7iXkKyTJWHFFeTULM8ELWoW4Lg8mCHD5W3M4RXVexFeq3gLSSP4cHz4P12J"
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
