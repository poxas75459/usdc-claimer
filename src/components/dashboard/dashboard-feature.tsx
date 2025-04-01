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
    "31ixrbHsmoCAg6gK1AKvTiJLEMGyjKtxgmmu9dZVYb7Zaqi7oo8aCiJqDa5vuyd8m91kx9KmatgRSrqqHpMqu8K1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABQ5Zj98PKohJ4ADeS5p3MVw1NnSUuvsmYNvb9bF5grBCtqZUWJNAbL96s6aqkNCnSezDibGandVzG3yjfALRUv",
  "key1": "5UekfxvR3ziCo5ewPqqdVnemVxcgw9zr2mKtimUhhDh2L3h6HgLQTEbErvecsrCGpAmh88gxGhVG8mrtXNZQNFT1",
  "key2": "rFthysvc5w4rdNfu8vJmQshzC6YgSNhR9PnzUSCkrCTaq3gt5yNWBLvJNw7XJswgr1SRdKMy4pzjd9ukPGUgALu",
  "key3": "66ni5zQKN6gFNiRso99i2oM7afjuSQ25nEXMHLx2jUavKyBW5oKLn5TLBJ3t4dZSp7RoVefERyhhSzvpnDKsqYXW",
  "key4": "LRHFYxx2wedEU7DrhKArp5VPeUv3GJv9aYRx8v4M2JofjkefYRZQMaropGJjNFstyLPPhASzB8SQ4qYjEexbPrL",
  "key5": "2JaUErDqhfEwmJBqQVg24Z4UWfpUrHDFF2MXMvtfSyJuTxfAz8KLupGybxjKSaVQBPD3GpSiQoMpe4CjSpGGo8wk",
  "key6": "4d332ohZdyvLAYt3b3x8KddRCkLimDJmyJsRWtKFWJrJjSJN7WwL1YEE2VceW5Kes6mQaRL2PtTzGs6WRYBTHoGb",
  "key7": "32AWiQ5Nnk6GXKz6NU5UTr3vJbV2Ah8SNk1R7dqDXsvF5vGABKrWNU3XZ9SAfEhbPEc37GTL7Fye7iE5yB7QFCpe",
  "key8": "4VCt7rZyLAawMqNnFQCA1he17NvLq7d8hYPsEGu7NcSE4wmGVor5X4uhZf9HDvo1aVLMbvZsNT9mWWawX6WWLXDY",
  "key9": "5AP8AhPEDAdLTJNvS8fSMHiPRntv33im64oPdvX64BJYk9xXNe5ZszSBqUjRHiufSqaUWi8MNwFpLAZN7daqjPUB",
  "key10": "5N8DaDMPoi2gDAWwC7GmnnMNPaUZ9S9rCdirRz7z6mhKCTbpZhqZY7ywJ8vJdT2Jsqty1nswRmCyCU7PRPRfsuUm",
  "key11": "5cHiWiRsvXbJiZw5831ukficcc7NSagaYmzCpKqCpdBKH8C8YX1SB4ifVXxrSpRzQakNsnWAef2mQSiLGHdActhL",
  "key12": "Cuwsp5Vdw4ajPY8R3ELGMVgQziHh5aDL3uEDTUibzncW8idTgskq866krksd4gYRahMtLsyYkP7veom9pB2uDtK",
  "key13": "4qT3F6koZcWWepFb4sByzfs7jUoRPHriC6LdRTLmpeKh3Yqzdx5HL1DKfaon3yE93N7q8oddoxtmNmnyCe5nCPcf",
  "key14": "xnrZfYVNFUmA4NufaL2EMR3tZbKfDn9j726PMKDX4LaHX2d38oQSVMte4UJ3ty9njnof5g3bR28N6tk1EiYV1HK",
  "key15": "36fDRL1b1m24Zn1YDgjVWzPynw6qL25Qff7w6rawD5p5TH7ekbXqThZ1Vxw3YFUgcgQa3rYE9bG6bb2VxxSJo2rc",
  "key16": "3wakiQ8GZQ7K6DK7QN88f5JqcT3PnGhYVktnL9tfJYicjufqkF9uzd11zYsWEDUTswADdrEQ1DRtkHBiq971qz9",
  "key17": "3gDiMZ5ocBJ2PzVmaiyr1phRHeXBvfRkbkhpacdvCdHPGnanjNKQJkY8QajFwrcbuRAgkPKmPC1Kk3QFxAij8GSU",
  "key18": "2DTJCcLwGYE2ZVSakERsscnxE4DvVQ98ifJmn1xTyp3TB1nqbD9Sh8HyLEoJ7wSz3zupoVaZxpQ4hcNiaQXYewYB",
  "key19": "21HYwUuAK4AfnrfAirQzKyKPPP1GRrLmy62sWLWaoB535cCxrK9T1ChAVK2pQv2Y3EgufqhxiJMJoHE8Zii1zYCi",
  "key20": "3i3wasC6SUt3bFQvXpWwBUAkhEUFUnsBjGep5GUeRz7LS1gWYewz7vj3cojWtCkzt5v8VSZVFA8e6Qv5KPFbxZHY",
  "key21": "35eYd6Yvcpzm2ytjdzSaLvjTV85AbCf4DHuKcQd7Y9iF1ntttpisZgHrGbVqN8bAaAEGY8vXpXyzzBxrkSLFB6tr",
  "key22": "4AwPG7bm4QiN3RPnAPZ8sQMCehZd5Ssrmd165RZMZeBpYoPKu64vopTQect5RaKp9XwrWhCHvZJp38SsHEjSLH6u",
  "key23": "5kpBHhAcyLJZCKx9Q1EaDNg9FDzpuaXD97eB1c2XoLavM3VhXRYAJop49BohnHhnpScQoQ2x1xo4jgS7MAPeomWw",
  "key24": "5MyjbDP3oHF1MRjybgn2pdPsuAqaJJgnXfx2VxJWYuxdq5oRsqWkLDodSFbjkzDEW6d9Yd8oB4UKQ5k8YFYCzQWA",
  "key25": "8uLDhMvkYvh1AGKvquuotE6vCs5FPWEJPxLjkc3fhSF8B8GisU52S5PVdP3mYrhnKgPc3S98Ckp29ZoPvxCJKqy",
  "key26": "2TGUkEV8x7jNQ2Tbj2E2DqTxbNXdED31ZBuMn3HXmGdLyvDMneUTEyYoQNLEET6UB41sbyFfoN9AoZSq7B1iRvvh",
  "key27": "4j8jmcXDQSJ1mrTrk7cgRMb3638wm5st7BMSVPrZNxuLds1XpmrJaYZ8iz9xzXWwzEqoH78i8oDGXTLYjEMTsxRf",
  "key28": "4BroDFUucnwvf4tqb5v2pNmeBAwJkLRwmqY29ZcsQYVgTzz2hR1tPuwfoUPiaqYVsA6CPQTqtGCheqdpby6Rz3cF",
  "key29": "52LDvKxpKZ7a1njfNsndZSjoWkK9DBwss4yVU2G1SZe4kBUtJnk32onw5PTicpeC69V7qbWHtiXZjvuuQx8LVq5J",
  "key30": "2pvUkdJxwJ2iWF6KaDT2oZpGjP3BNHxj2nhepFcBnBn2639ofS7FBW7bCFytWa7N7nWAiwQ8ynGqNAAs8NDg12wL",
  "key31": "4aNnRWSi9nz9EKhwxkXBARjdXUPtUcVZn5YbJwEnNqH7enJntcynne7UD8vyBjKYiU1YzNzHzcno47g7ko64HVVB",
  "key32": "5ftWRcDBvn9vownuukAyTtzjMCdWSxB1YVEwMim9hFmkv91Bn9ZHiQhkWaWPrKWYXNqMtrrVWdxSVTLFeinVc7Cn",
  "key33": "5C7n1J4djtsTPCDh8eYU4DPVTmNjn6TuxSu469xTf6HnRfz8fmUp4HAsQKi38hP88mNTu3DvhEsV47WGsdngWgQ1",
  "key34": "3khadkQQ2MJm7S4CTTxc1pTXpHAt5LebcqaLcr15vFGkRuamzsqXH6ikXgaQfZETK6dKqZJjD8tnE7T8yZwJwpwY",
  "key35": "XrjwLj8RSQYk9iSAuTcZ5ABUKwBTBptW2CozYmEttYpYia4AeQwxEsAxdbH1u2esmXBFypANgySSbpwN3Hmxkyu",
  "key36": "5VoupVqwNMYxcPtpKWLL8ETQX1RZwixLxUTByRdrX4mogxMzrg7cpBnmCVCqwuoTPS2bJXRZH4Z5A1SMnDgsMm1e"
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
