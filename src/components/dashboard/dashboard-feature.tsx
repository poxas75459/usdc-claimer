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
    "63x19nLqb7x2TejxyMCZU2ZeCioqLnqARrGwxotCCEXo1FeNHYLRpLUcR6ksE16qpnEWLAK6emAzTcq9GeTQRAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XzcqSsVggq5AAGq3rr6df3dNs7Bcz1wZGpVutr9WaUSFen2b5r7Vmv8Wu6TgVM6KuCogogpHK9AXSF9cNe24MEL",
  "key1": "2E5RKq9cREZDvr1PQDB1yXPyLHyxnzwCuuELEWRJNEbzEFn2vEpv4DEUgvnT25wTo3gNptKsXs1qCasH8LVKUhgi",
  "key2": "2g9ExmfkUanCLGRQ7Jz4zRtrtRFhbj1xqRWdhiyJDZJ1AYPMp26acxnwyjJo9emA3Bv4VFNFJY6JjiNUa3fBwteN",
  "key3": "127C7gLwX93xhrAo323McbCJVN183TTZSMioXa79DkYoRpNA7NqszhUnqj5nFJcVSj7soposHA7bya8sc6Xms2eY",
  "key4": "5srcM1ehyPUT7rXwXEsFcZ8jPZrzW2fxQ2he3CiYc4p4X2YW2AJtVD3MdjoVdKfSfhnJ5G2P2c9JdqnNxBgwquhz",
  "key5": "5zprRFd3fy4jWrYikkixzPNDV4qZXTW8h2YWewTqbBG4sycj5CbTuPigejsuwARiRDGR3YyJbRBhZyW4v7DZedfz",
  "key6": "uGWnf4VTyfcdpttX2DHoo2aaAnZtUdNbgV38yMGngseWvKFoeKhTomgCEuB8GRv4q9nbVjQmQEoqx2yZrxi7t2A",
  "key7": "2eNFtecT7r6P5TYWfsbeZ4cvC7azqGhhyancSwh6GpxG4qm19KGQWtE9hBb324kzTGeskQZQLWwzPb2Mjocoh5FG",
  "key8": "5q7azZut6BTCmJUrVnzYRBHfBDoAdJ86CJm7HZEmPE3cH8puHTGDzb83Lp3apgBGmfh2ZeEN2DD6uSt2F7HEhcww",
  "key9": "3qRZ7MPuzZ5nMgxRxovao1MvXZUpEqX8osLRnEkv5ffiSSNpBopsV8DSRfDx6G8kUXWrdMWkAjCDUrn7a9eyHN8v",
  "key10": "4iFDHS2f8JP1XkLQULMpr7SveAfWKEkeaoEaddZJRQFSwHupSUWGG7trNgVFW6DtpkDVpVPNfP1QShq7LsLkWafD",
  "key11": "4ctk3QG4imX3FuETnKGvKHUcmYUB7Ft1ojJbx7VdZoWbTqscnmQWes9qMg9gkURUzXHQrqFiSpWir45ERbdRaUER",
  "key12": "466wYzDvCBGRXSSLitmmNLugQX6P9KTiZYbXsM6fuJi7ek5W12T5x1nxtMSEFcUT8fAEQ374AnLAV3HvnWwoEweA",
  "key13": "5nLEdf9FVjyidUbZnUFPvhhUq9G7sAXNKbJPqTJs5deMro9g6vwo4k5fmG1PJrBg1vDuzuxi4rex4Yn3UJ1K8bhE",
  "key14": "4JTov8nA7h3Up3XzrB6CYJJ84EQ3YEA1MYgFxUy5MUBvwoTjMdwLyujGfnFvqX6BfNa5fFe1bRswL4Seg41RaL2b",
  "key15": "jeGfnJLPE2fTXfqVJjKh3CRrkUT7DwemTfK6Rwr4fjbxN5zzh15cj7o6yTN79DV9DDmJkV9AfMeDb19DtZPgkDY",
  "key16": "3SRZx6DfdQ729qqfU7G28PNhSHj37KBNBA6E2rNrmvSp7w3iyGNXpuZYdKHQCRz1V8zsH7wpWHktAiXvNz26NhvQ",
  "key17": "5bgaeXsYEvv2yGTiVbg8JD99bcDDrrxqEMQFrd5nEmFpjB9eSZkhX2Pm5efRYekbPdUcPUUrjUT648ypDYJ28jUm",
  "key18": "3tJUnf17gztNtVQ6mnNnpwnJBrECAfv2AzyCYFpDC4y6McKDxv5Foib3yt55rXiXwEvzrnZ3LT8hPVhAgExV4ecn",
  "key19": "46iWd3V4JQdiKuxXGiHu8tK9ZQCa4Jc7UHwwaBN57nYFVDzWSuMcPQjrg8QLsHyNWXforjmmhmbUDm1rMvAXAPS5",
  "key20": "NWP62Rrgs9Najtqxk8oMQ7AoLF9t8vsBJWxDwtGKUaPUn7yCcKgZD9vQR4uhVkbJfDor2ymLCuHzgb8cwkz81XZ",
  "key21": "qb6iW7FHUA8yJuRqagosetLdRncAQBS5LjkrST4cUKtMC8zjVt1K6Ub2ZFHJWDH3EpmGB3dZnNq8Uv3rj7pwqNN",
  "key22": "5CXcYNjDt1xmVJcAxXwN663k8Apb1dESkyojwR26nFAPU3sEzgc3kxxaGPG1podKUMmLGXV9ufHbgmwgCvDsxnGB",
  "key23": "5uRPp1gzcenw3DtcY7AHUoQfXoNZJEPif5fbdb69LFiNzPNqdr4VyJ11s33KTrUBE2H1Th5yj862JDMaBDtmAx5L",
  "key24": "bL85dT3mmyt97XVGeBV4YxLWLrrKVT6QEUqNDnpBhefdFKjLRdMKMSMC3gjx886R51RwXgwHYGvubDffJzF8vyY",
  "key25": "4TsdvnQiVoQVfznQepmJCb49gx3Bgb1b2y6bozytioHdF4kw5pqarP4wspcQnVf4ADmEU63YBW7EyugM5AKojErv",
  "key26": "3UXfeEqrW1YFsWY3wFBykMHBDzaz65NwMpCKKHHNQc64QoSms5o8F7NWHpSY3WT1TEEWTo1fP8jcbAhmPccVJRBK",
  "key27": "3wAr8kB3cpQEwoP7ZYpxz7NH4YLGzJUPuNWHnkpx7DsYGANMJykjg7FGg3kUm4jLZJqVMX6ogjquM71bCaLSo1NY",
  "key28": "5YYQxqcvZxtK4gjX3ieiJGQQ4mdFTCjqCjwbqBC3BNtQ8qCSoRLSt95TU8vwrRRWrFMkNhEETyoFNzpay4Sp1cYo",
  "key29": "buq4fjvp62WTXq2VEwMiRXog5UAPckb6Lk7f7F8VqRSWktX1U9UgWNyzbmWMx1WuRukKtww9BjRSSc1UG1AZUcf",
  "key30": "3WFEwGN7d65eg1GcCjbanNG37vDqKbJfxK6HbeyZa27E7zFJsgiQ1KQ7J7LLrF1DqJftqNsptbgk9kv5yN27XkPp",
  "key31": "3Z8rJZPimjsoNG3HNMtybB1ubhs49gENaXHxnheyXJRF1ULSxAD552VVpTHe7yYrwuVcD5UdhLLHBM6yHxNXNdQy",
  "key32": "5abuowHsyb5VwCbXEH5dHr2nFkiVF7Qeoe9Mm9XCTGwon147GDbGn5zmBc516g6TYfAMmyRd89enwpZK6kUzisQw",
  "key33": "3gmAnvXZsgv7GaG6HcDG6uUhZSg6aQVjJjDAqnqHnCkayK3p4VQfffHM6ghqca7yxRp37KGmN9Kb87Phs6C8oDof",
  "key34": "4jyFDJBWJM3uF2rpDkysh6dh1ZD6oX3Hf1s1tdxYtvtioHukUsAkJHu7ogseSPZAMh5Xzb8WFyo8pL6mscfYFYdJ",
  "key35": "5cBuzD9UDj9rSG6RoT46GXmdemkhhoctruGUW3hBXdubVmcxLX6K3NaLGzviCtB8csK3HNCouFUK8sZecAiX3kvQ",
  "key36": "RDAb4FaHfbHW5NqPYyzy4BBFV88QF5LBenHQ3si2vogsWU5rPUst9G6Pk2CFHindzFqdiJkuTm65hrXwnLmqaGG",
  "key37": "3S1pNqiv9hoZ74gi2y4gW1S1WUYDe3Tak3B8aFDGH8Qu7zVZmRUuwB57ehv4XZmWpukNTH6CuELe5qhegwm7qZrx",
  "key38": "3ExXNqChQmj2JLxwRhE21GJL5pwc7aLoDUzKkSzs7cVtxoZRbQLLAhP9E66knNMKRmNPGqVLSNXQkEFyQba9VPSh",
  "key39": "2ZLUXuAsZZ7iaBBVBxQKDBamskTvPGRKZ5cC9KUj77QVJmL7Ptq8NYKJAGsKSbk2xCsZdx7SZsbUwbbBEpcoB95G",
  "key40": "39hHMvLKV3LWvfSZ54zz6BTTAWdsGPVfbSKch8bAXhzB4cNcyNmUdCxV4FxQyQN4FwvhEmx7LJVj1eUgZSJgEWP8",
  "key41": "3cFcUVkSs2dBHhQw2tSEfq82Z4NJPSzQfw6v1LSau5UsC2Q4iqGjKbyHBcAj3Q4U6gRzpcyHtYJLHmnAAty93FVq"
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
