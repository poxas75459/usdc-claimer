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
    "2hKfxaKZ2R3cwgMkojtrY2FEBSZGnUBYL4WUcJ1ZEKXwVYy23f5gRAck9UtNxwFCwsyXKEAtuaPcUfWtBADofsZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFx6JjUfN55ufZbSavngCuUYvWnhiedcV5fgbthWvuWqjuRnyWc7JbgWxsAUAT6w43FrqW2Q2UsVvvxxx7jFQL4",
  "key1": "574V6dZySRXtFNQRz3BbDaJF7qbp17hsWh8vSyjMVSVq445NEcVFR8A2Fme5E98SL6h1qxtkVBXmuV4azRoS3gDY",
  "key2": "RWypZ98njtasa7MCx7k6nmFzbGTRqpjvPn3doRujPurX3dHSaCoAZwFpTKqGWBp7Rh86poB4TGrm5tzTWna8WCb",
  "key3": "33edaFUwbgcrD81j5URNgWo5ZEpdKtePcp9uxqcM92J5xkb59NZ5Fsh1Ly7bS52gfbCqmQn5eVihAAneraUV2aNn",
  "key4": "2wEFAzNKv1C4DPAXVkmaBSNc93xuMfXWq64Fb2WpEuTsHEtEiCyfUdkxGEXvRVJEKgAK9Vyg7g6N3cTxZ28NQEWu",
  "key5": "Y5ADpJCscLa5Wykk37weczQ29d2uR2HNsWRbhEaxA3wLP8Zq4ZTXcWD9XuoyFh3mtMPS28P8tJSv5tY2hrhHb32",
  "key6": "3c85guWy4Y3xas6HwuRgvcfR3yZHWfAb5gdb9vkqVknwECWK99mFrEuH4E1nPrqveJLFxpPAobPpxZ4vBpLiDkpQ",
  "key7": "3Dv9Sge9MUPTrd7jnpYwx653QwLGhgEEz35kRuHaLrAaMGyFPL4RSArbXaeEcYMQiuDXV6Mk9tadbPmQQb1kN7ed",
  "key8": "2Cud3HhnZ9oFMbmWtJkTsb2fbnF7NpkzG7PuAZjU5QZoRUbtAyn7k5E5sQqNmMBMRtNhJp2HoPEpRHra5p2nYpuD",
  "key9": "5GHqqhdRcXQNvV66V2ZbvUdnQFV6vW7dmSpHn6kNYn75BPifH14WfEwuFQYP5PAmFRZ2xeQn1pWHMc475eEpuz8F",
  "key10": "4KdE3KsqJe9VNn29zkXQGx1YJWBgpUNJ6443oJAkRTJgXWeSaf6T1Feco78bPW6g82aSiGWknn7ohhGuhSyXbTj3",
  "key11": "59dsRqJdVRMoqppS56oeWGvjBbLTffzrrpjeazufESHJvomfe66C9CweWK6nTFtoPdXXFtC1LckACkjaMMjykB4z",
  "key12": "2areaT7B8DCPNDjs142AbdKCpmBLPMQErBwzgGUQSBZ76yeKQoph6bgqLidndChhJvTu85QrD6yEqd3mAxUtkKhW",
  "key13": "38JJ6aj1FENJiYyxZfQusCVPk6kqbPhT2c7X4preTtynX3fZvSfMoGLxEQhmppEBmW2WtK2UjKVB74v3cNGpd6jy",
  "key14": "fnAkJMMqGm93qb13PrJD6r1zke9USqJfBcEiMyXQ8DpQwA7tu1tVtyA7nNA37Hfgppa5GW3RwwPiJa3TUKNUS3t",
  "key15": "4MuwbpqsR1R1FGA6LCohY7rc79NyXsGJZ9MUsHSoWv9E3kZQTboaA4dZ1Sno1ib9S1pCTAnXxthkwbYVopRJKGsF",
  "key16": "5b9PPnu7yHNxuHp47mL2UMZEpaLuLVdd9ueUdWpam9TAdqu7FDkL1m3XNiZQKoDYfjVKmi9A1u2f25nQN3eYFzgY",
  "key17": "4FdRv4oBpubnkA3gbF6RbFMjww87c5PMaYLuYS9d4gdThyiHo3YtPbpemTmjCgvW6GH4G67L1ZfoWrH2MxMSg7QZ",
  "key18": "2D3MeNuyV5Jgvsro3CSHgqCQ3nQYEuv9khA2rksCsaNhhiVs84MyDbtji4xbcYgrFqkLZmGtPgZSjcxECSjG6fp3",
  "key19": "42T9FA7YWge3mU3SoZ4mdx23nvGhu3QSrZBG8mq2A87k7b5GcqhVYK9tQGW1vSJ63kLRRNaGrQqACWDnabunGEHj",
  "key20": "26mbHsM5XvX3kmTry15uPpjTVE8tq4f1Bygo9eKEYeydxp16EzebNqSrMvhvEcNjfdUET6V8McKG1KLwyby4zjUa",
  "key21": "5YLZAfbBD6xYqwi68wZpS2BypZyTxFFCgGLtxE42DgQTnXghtLKFQohZk56Vw8nK8sPWvGmXoAd4X6ksxBUns14j",
  "key22": "Gktbih9zYicQ5uR4A9vkMg85ZmVvihLkARwY7njRE8wkV5cWFQYNpzfHkweMHgta1jGTb4NHnT383DhHscTjFci",
  "key23": "5qD9LBnCBcoF111caceG1ngzctM6aeHqsN17jQkYErwE6E57uJP5ycv7rs44kwNf5hAXcmUQo6XELaGVgqjrcRoH",
  "key24": "47UXsfdYjHSr6U4d9D4CeFbUZtTcSyLo1o9hYSkANJV7qAsyNbCDZqVnsRoiJ2xWZ2B8wyhwatA2ntnZnnE7TiM2",
  "key25": "KDSrEVrSAYs8jJQvWgd7BzbTUum28CpwyHvywe3S4foec7GMXg6DmhyYhu9z1i3ootAw9GFFdgnHmvabajGzpiq",
  "key26": "2pRDBLLbvtTNjy1CUH4vMe9JUsJqhTr3bW6U15YpBS1XXnBkLXecCoKENV3W3m99JMD1wRwt4ZHgck8vUj5uSYfo",
  "key27": "LVrzQKnWPQzbj6KiFtaRyC1g2X8daQouAuTm1uztmpw7P9aT9jDB68NNysjvmgsMrrsKro2XucaG5c2psX3Thac",
  "key28": "58NjW2tsRcgNyYQmhb6Gd5gDF4emPY8QKhPn57odtNSNSTENpXtKFSVMPQmLNRVm88jBbfc65mohChetcGcAsQ3i",
  "key29": "2JQZRAQtHA7EWDYYMQ32Ux8P8baL2fu5wzyjBPUAtR5zndvDVqWgAoeopueoXsX1sL4oxQdKyDHgGDLKNFMu3kP9",
  "key30": "23aFREyGKe7gu7Byf6KvvqfcwNggTJKqnkmc1Dn37LpibmmDiyrD3XjMMMYUoXu812fqAeFBR57eM5ijQe7aAoHN"
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
