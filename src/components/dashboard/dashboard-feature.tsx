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
    "4TSceKhAdBabhzPvErnTrEs2srtXFYm2UdYENhXYSnpGtNFBwhXsJNdSRbYe4vy8yzWkzr2LyhwxNA7C6PXUbNbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o14rHeCKLWrhrayEMqu2PQYpgJNoH7Qb7Tjg2nmX5g8CaAWHFrpBuZNvSiJjwPLcA8qQijtcpfPW4uYi6GeMicK",
  "key1": "4Sh88qtXThXXp86g2o4aKu6wX2toJgTEdAtrMFNjM1LN9KtLBgw8cNV7VPy7vEXbyLfjabQPojYabuPdqMQBmrwk",
  "key2": "4DxKa5dZ79ErwHnKHm4siSZDd8hUZc2NCV8SQnGz5KyNJodA8xtd23FBKZQ1uBH4iqS4GKV5DMSJ1XuUo2pqpKfp",
  "key3": "4aC7T4FVDJdUsY3iQ99bf1Rnf9Kc3vNRU26f6uSmTvsFH5KmBzrC648f4sUAyQaEwvhxj2Ff4PJ6MUeSoMDdEiD5",
  "key4": "3q77JZV6BNJNJPqwXQkMerK83vrEZE3aMs2D2tiwbz4VjTdyktjYK1vFbMc2ktdDhEx6oePSHiJWNeg7TkCdqANh",
  "key5": "GNp3QEb9maBZBotWR31A4Cix68RpvjkYHBFkzVj6w7HC59BoGtzA9jh2e21yuE44xW2WtVNmb6i9w4XZ3Hso2QN",
  "key6": "4rRuNArXGF9tNt7ZA4E9vH6NLNMSoi2cWwsBVrphH9MocJKUuivwgYvMHUD7b2becUZP8d4j44hoGUKERxntciTc",
  "key7": "5AwRfSoBUZKzP1EpTYJPTc4maqchTVypThadbghLsQV5JQbNmq3mrUgLfTDZNVBZDwTZ6WtKS7JKRX8wSVJtB1eY",
  "key8": "3f3wHnZa1vH9i7UvZ3qPjAQHndA59UAyxtsrPL3radU16asTa9A5VXUbja2ySnsoeECoLACKagZhmfHVzbsgVQqc",
  "key9": "2ekgLxLD9qh3DLsR51XaUaWAHS3ZxEqnPHarjM233JbcnjhXZR8RxUbUg1V54ZjBdFUW82cqZuKVNs5vWUu631YT",
  "key10": "43ojwjnqTvyTcfoRyQh6FuJZgLjs7MAQqSVdwPAnaJ2axWV9Y4CwhF2VgMWwETRGG9GYrRLPMDFLhKxZcQgL8Tz3",
  "key11": "2FCbWt6kNSUn6M9PQnZozUUcEqNP9p81Feb7ctwke8VuUXZ6bhekjDZ3m7kZDtdCYwf7XMirJYtjrkztRm2rUWXc",
  "key12": "hS3uKPHoU6QtkiLgfdsrR4Djp66kU35yvUSk2WkPYF3g8gchXNzYGbe5ajnWYX6FQkSzNrkMzSmZpmWQKsSp5m8",
  "key13": "VZMUeSUnvXyKvK8TUVxsrmdGdyR26e19zdGtV38skUNphMePSawFezk4Kt2A7nbpJFJNgrs2QoXg5wfSHAqTqim",
  "key14": "2mwVzuHpaTFcrvwsMeTizByUBzvX46PvwXFN45JkoJCYWSHXLvjPJS6QzoXwdzaAr7FEo6nFJEC7d6SrkTBeaigg",
  "key15": "BL5vMQV9RR6EjLBJEFYiKAAHh6qcYFWcnKiS1bTNeU7Bq58nqEZ5s9pM9naWjE49wGa3HKeaFJX7WLeVW7BFN2c",
  "key16": "5wqJPpzLMAupVmZtKWcNNfkKCUotGggwnqTSpUy9o1f53uZwFL5Fn7c8G27ZeoMUsbKHqDpZ1T9pr4bRJh6XVuRP",
  "key17": "r6Lo7hYHSnvFR1KpN3R8qawvuqcmLZWpyqVZQK9XUa8n1sU1ckmUrqJEgYE7utXxD88ik1Pkvzhu7iuDui5dYDo",
  "key18": "4CTgbyqS96nPpJmo47CR597VX9njQmRdbjsfPcHTKuavHVtq14Gvpdr4huDnJLUWf1mgREMqDjU7xLz7v75QXsPa",
  "key19": "5pSgjBzy8rt1Hx1L5a3maFHhcdx4b6yaa44f59WnwRyEFkYt7FTu3mag74yebJdvp4LJ2M9X8fyDxEWVwqz1G7JA",
  "key20": "3zvH8dHk3V5vHVZCFHcpPL5rnm4QHL4gqgDNZMNYZ2BtbhuTmoseGZAr5DCUVM8pHGHUk1Rs4n5giPS5KtHxb24k",
  "key21": "2nY8YnkwBb1pr7JzVZ9Hrf7p1UZsaBb2fxsgnvJHy8i8T4Hw8a7e2eKYU5H94qmdjFCJqUs9JJ9hDtkkwQWDWaS9",
  "key22": "41omkjESiy78iUU96YJmuJM64bSRejF1fW2GTeF5cmfavTxppsdxBtDLnUkGEVXB8Enom7PHQvTuCJmwcondzyJW",
  "key23": "2UwFveic6AdGA79RJAcZb4HvxvfK6aACPz9hBc2QLwqqmdn6nXLJjDzBBvCtUdjsZKSxr6nWBL3ZjFikJcCQcHt1",
  "key24": "2LuE88pRNw8NSU9Gu1drFXG8GPNmkHb5g4vHkUjQC28cnk92mUSsfC1cUmNEsvN6eeUXYF1UoW8NMLnV6UjTXL25",
  "key25": "76ggfxVXPXVCJhfV9B37MqT6fwXph1JSkh9b7z8QPbiafPsiaNxm8wf2h9jzeCYXb1tvLEeFEREcpU1BEwMnkbK",
  "key26": "3ELA7PwUXgH3UgzgkfDSZq7DD3pMLaXorN2kqsJ6qqQZFJi7oWPMxd6AGiH4DJ77j9PHXPxmjEr3SyKVkVHoS4So",
  "key27": "gPhCznE2B7RtpABsqbobwY2H1H8pfm8y1exZ343yTEk8ZNVW5RMVDi1qSHrtiRTG3DMyJB5R4HdVPweN3DkLBfB",
  "key28": "DV1gW2tNrhNRP84FE8sjMKmh6HxKkpet1atFAesX6QqvfETeB2m897iCp3GBRRV8kSmhUWsGJiRXYBe2rLPG6Td",
  "key29": "3NziRz4u5RUxJruTnGCfEtCUs387pzfwthmHDrnXMzLDBjnBcipe3VvpNQdYrGxhpDt8Eh6VTP6eiZoNS7ap55ke",
  "key30": "d5UXPeLL3tJAkGJe4fS98bx2E3K4AYCQsiNtcniGCe27zMLqgBMKYRLdXqytEHmmDgxDf6rxuQWmUD8DFta81KQ",
  "key31": "4A6n1NtPwMHAMr6hVng2Z1hPz4emRaECwa88SVpZhSFhsFXEfgZCcR9ewapyAv4vHhnooXb5XaQRphpoMtPspjq8",
  "key32": "3w5VgL98R8gWxG1gQA6Af8QNUNufLc75xRsXiVeZDXVpFrHjvjctGsMCiU3JmJKw9cuL6ZkYtf7HvoXDeHnJmLNr",
  "key33": "35DkUyw3w151NgBLmHGj1ygKPrRXLb1KZ255cSBB6W6A8CZfJzHVNH1fjedWSHM4CTBZnvxy8TLDxp6hwgsr47Fp",
  "key34": "6tBaTaxLZW1ppaZiy34sB8iGQ2BEqU4jhZtuBu2kiA8BGRjD2EFaTeQjHwb7f5WTQSD8KBBCqzbd5fxKP9ztbPT",
  "key35": "3A6ijYTeUiKUv61PZfWjuq9GGGha51k5BPdEFFzj1TsZoRLdS1RiGyfWUdhXaQ4gnADgRG2FecCzaMwgtBGTv9H7"
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
