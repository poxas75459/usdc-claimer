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
    "48sCPij4xjCzM11WeEmdSVqieX25QxsApXT5hxkXiYNX6r7ya4P2T4Esj157j4wryzZzum53mbH43qPHwkpHRMVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iqUSywxvp6JbsD5sHww1VL5ZKnSy68FSBTUiwfRhCEZZvHJHcoGZbqtm31HG6Gsmm9ksPy8CcqpRT6GcMphfkAU",
  "key1": "2796Hm9dc1C22UXzbSjbW6AhX9RhqENvecW5zLdKaJ4FWtMgVRHqj8HJPDqHQsYmhBxTBt6Xqk5ctFVx3a3bsyzr",
  "key2": "2MoKRnUon6BN2MChdCjmAPYabcNNSQCDmbk7mbScjq22tPsbq7rmwMhELctAXJSs4rTF5fxynqbuzBMgJB4hVv4L",
  "key3": "4b8Vu6UfmZMTeg1LNV5oX1bhTj4A1wNyCV6E7EAodpiwHb6sDye2p5WfB9rV3tFJrXR9sysrZAPv9jMSaJzRjkoX",
  "key4": "2zbs8uShLzZNo2GjJYgd4Fv76rZS9kqiXQMVAimmYze94UykojCrnh3k2LyWr1SWDoCiASGru3j8nPty6dEE6Gkn",
  "key5": "4KisWKVEjAnTFCFagDiVru72HqGZ5TxVtmss2yJdwmrXCAjj663WifJ4MpX45vhbS1j6vpBrDZbr57nYc2sBPL4X",
  "key6": "4Cn3LMdbxXNszZVXzAdqTmAm6JDcn8XJejPh3uonuB1LehsN45GMugdXqoUhnNsfvPGgegACAQu7R2TMVnZa1kmU",
  "key7": "4FQwKshyk5B9oaAdjkxMEtgHBe1BafjkiUehnkjgb6qXccUjw96Cy8zG8L6GBSWB3s6aHnkH42MrVhWvf53PoBub",
  "key8": "4SjGY2G7zX2jTpngaB8GPBsf7AQ3hXtKi1VmUR8CumRmHbfNrpBMXWteJctxqK2f649tfvFoCVjU5J2NX3UdGbUv",
  "key9": "4eKEKZ6y9SMxMUXuL9EjNQY5YG6hPNqg6oFn2eJjon6VRYeWShZoAmNmmqC5ZKf6u2T2C42ZWXiPLWZh4kbVsNYm",
  "key10": "3aTptZoWRzUoiJHH3HiVuUQfK8t9tDbRkuJx59GaxLTBLTRNqv7QwMisUEX2XLpFNLCMK3DA7Mq253SHXZcXApsM",
  "key11": "4PGKitLUBXoDpy7FYaXwuCNFV8sJk2po2VhNRqWXQfWMXC79afkNu1XwTqBsgihnRurAtDoZt8duiw5qhTu23443",
  "key12": "2G5w5Kr2v3mvtme12cZW6wQLuanK7u18jwHeUYz8GFLF2EYFoUTEU5GYQ8bAZzhQ4o3TjcBcCzg9X9bhwN2yNmPd",
  "key13": "WxBJb6dB9gWnF7egpReUEBKriZYrh3sYJ28nHBru1F3HRPHfYyk8mqoGzzHrsCE7pRuGPkDvXoJ6sSq9LJRNAj4",
  "key14": "5vCt62zbLsoKoWAd3MskJ3WLqFDNFydNc8byMPmNkBCkRRcSpkfzWAhS1vuY1urjMFr1Ud9hfFUYrKioNy41duYd",
  "key15": "nuMQNCyQ1PJ5RJMFxEUCZM1WLcgiNfvtLmatYokJpYQfLkEy9xYZrgdCcsGUxhGjTTxhMu3fHgGcqYbv9p542Dj",
  "key16": "5NejikXZLBgRhMfoYgCdQERpyCVF9sTAh73LdDWJWqvvZzA5gdF74Dtp4vtrnDyzLifGaYHs47XbjiphA5NpG3qe",
  "key17": "3Ma2Kqp7J75eXvHHbboFHmcG24osvT1aUYqguiEBY6KKB3UkoQ5Ed2BXiQfntaJ6H7oybX9RTbwiHQsT7Vrt35nz",
  "key18": "jwukY4GDaMaw2oD1QnrbnWMEAZZNYhadYNpqZVGbK9oSLKHGngXAzpXgYqWhAYRD1yYhHYyHtyzdKhgjdcrWwVN",
  "key19": "2fG6R6BoeWAFNs8QfdRREoEzHwvBSyvrPwhWDUyBfcUYiDGAdkxMDC6vm7fVmnd84FUiwmp1cUPc8W2NCAG27Gi5",
  "key20": "QvcPA6yWXP9LVyjkUQXcYys2FanuPQGM9s6VSgSicmFGPyx2CLyMtGSbnCDLKdCFXtGwjJcWf6js8dACYJj28ft",
  "key21": "5k5FKuuKRfq4EqX8tGyvvpBUCeLL8QkFYgULSDTymbNfBUNto9Rx2ZfaUwpqe8oDS7dcGNvDSz8CqxVs5SxgBvfR",
  "key22": "65VGYq2uSJfCoxDVSvPjJjnxaA1f15PiM4i8Wn8UthRts2s7QBzQv8ZU1fLMzduGQkFmpC4vviRpJudixwATdCj1",
  "key23": "29Rj5yui3GWh5rr4MvedTDKjnEEXUiteauGRZNT4Kzs2Rs557mTL1P41HcU93XVVFpjY3Bqx9maJyi4K6byzLnVq",
  "key24": "543LML8cXY98yYQBhaXAB87ZGLKZhLWvdD13S37C3S49c3sKmZYHK4YoHBtw8t16XL42GHHLsboWgUBqNu1VEauz",
  "key25": "5i1UcVjJZJ3X7H2r1PFmWoMyD4uvkQwxQ2gjzE8W1rhuEt3QUMWVAtAUMMaFuyiWqTReT9FQVQhH851ckS6pahsU"
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
