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
    "5fEFT1YrDBZFLi2XMH7RPsRSJQqv2tJBCR1tDWGuDEoLnHoCczJAeRwjK4rJzftjZ8GDgt38vFdQj417Cn1182eN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tSUDGc3yeT9MazGJb6v2yqJsTQFKaAkoG3wZ6cwC2GJGRJ9WVjHSs7ETGZYG75dZDrh7EzTyLMzoVGcrsHB7A9X",
  "key1": "bS2vSu7CEHdM4ohk11uJ1MLNH94fiTZT4o8XaKprPdMHjHwKJs3oz18vqRrYKkTJGNxVHwDib7Q8gJG8SPXge5A",
  "key2": "4iLM2fA5LrBhNFYvFNsvYoZWq2FDeJq4jE55X7FG8VnaehcMnigpFdMi6CjnufjvRyRkFHjNc1chp9SaguK7gL1Y",
  "key3": "3MdvwcqRDYAc2cF8qCYi3R6MLqJcLxGM9Q5yH554pjwpKX1LarpgiYzhzSfvbiMUMev2AFVTHaWzyesNbpTnoZad",
  "key4": "3t3xTKj8T7xiu21ej2Vj573xSnxX8qDJVcEDGzcRP3BK6aZfYqeGzTrZhyrtf5DGw5CvQYZxrw2uMjySsiE3w81f",
  "key5": "2JAENTGk77RKRVAbF9bM9WTcmMgpWk64c6W84prbX5kfTVkfiU1MMyCHt5akMHAtMxDbfzcc8hCa2x9mUYiz8Rh8",
  "key6": "qCrgxtbH3mjEgmChKNQb5GrHbci2LEqiTEnBdYwHmvpXZLuE5SYHu7DXJi7jtZLFyoC4xMdi46GsWfSZnYqp4vu",
  "key7": "4Zo4oCnkA8Lh1Ltd41XpumCyVj6fhXHJhYZHNqfhHvq9VSjF6zViPeZGgDKFpB5SfMRiS7qJceSS4PaYPBt8xvse",
  "key8": "2syVC2tigAsmhGcyrfGJNpvxrswNjEDxtbLr6EmWpwDRmWH7eMAt9k37rHehbioXng63s8BWuTsJ6C1iPqLZ74Jd",
  "key9": "4uZoSytwvMfpvYSepiQNZRaocVrv9Wkq81WdomtsCDMHjpfnvnMa2kPJeDjA8hyF1FaEgeJE7YiGLYjkYt2DHf3N",
  "key10": "4tJfRZm3WU9YqUebtjf8ekHdzRapRJnzsERgy3uce8cnmueiP1jmqX6jhrGkbiMdyR8ToBx4hokQto4xPRcFR4Ya",
  "key11": "5ReDPJ8QYb1iQsgiJ61NCWvKRdBt6EMgLk5omk5QjtjdQxRkz3RQuHZerFJZ9n1bQvkStPsKFWhLsECh9Gd3g6e2",
  "key12": "436NTQxeLBpDgFy6W7Kx6YcoHGGM97qWX94rMH3HmdAhRpaGn9aJNbFoD8DyVi7kKY5AuH77uE5GVETD1vmAy1s4",
  "key13": "37STLixXaHQyht7B2SH8fh3NqjWS9adacaxGgvEX8iS5JZCSHk5AwveYUd1jkEqjgBoqsFGZGS9ppf7RwZsL6Lgp",
  "key14": "5iQsKba74NS7GWqUAJbhk28LBuSpEj1ehJHNoLqSBi1wJUHCnLpyETzBkKW1NzK9d8yLgNQdGUEVeBQo31QVA4bt",
  "key15": "5FvXkR4E1XpwAKc37mkppUL7pNukTfZhJ5wJqpV9hPR6kU5mp9ExwZXgy2rLZvbfHmuJ6d9RGM2TSFVfR9Sz3c4F",
  "key16": "3BNURpeNsM9VTbGKhfKiUZ8aEcX1dbffGSvG32zjoi5gNCwEotmNFnLr7bc4ty4S6Lh9TsAP3t1XHAmpkmX4KF2V",
  "key17": "2EtbzFKYXEMZPaC6RPgG9u3okuDCNY3uB3Bj9TwE9zPXzRsGV74S2wT2TLQPjDdhTmQCcdfvNPPqw3vBV4EAHpk4",
  "key18": "3xWgtjBSYM7HWKDBkwWHhSFDtPX6jSd2RoCChcAaMEidvTZPf5shFQ8qyUo3XkHDDyhaoxVeAobMeJXZUBh8msfL",
  "key19": "4wzk65MfQJnEBJqLLp6r57MfetYWFj9RCDMEa2v2LBVWLXZcfgCAdbX1TNNFg9w9CKmW9XFNH5xsS9k62j7JsDqS",
  "key20": "3pyryA5gSkzae1ZqZ2aozXozEsQKC3pss2uKhi2jxDpNe4SKBBh4YfMeSWFsRLiYZcGYyqJcANv9qP8XcomPEB8N",
  "key21": "54w7Hz6w8eDup2y5aTfPFWwBCbsaGqh6EJHyWkXmbeFNt1UUUzkXxJ5YFbA4DpgzPd77dveToWmCFL2PhnHDMJbt",
  "key22": "2zFLYGpLvrCRM4BWPjg4Jdix19sEYMa1JUuhYjXdnf3bseARcfDHoqzLG8kvA95wgV4EUvQPv6k3wmkdQXHHMVzf",
  "key23": "2efFkUXHBgvkLC9TEkyma1WLh9QLb3doz5zVn3kgN49DTyQjpWxihukGNXHf64CFxaG6oPuSPStLjEddXyoPvsdX",
  "key24": "xq2ayVASYcndV4L7G7Bfmpo5iSQ9uk6UPe8JrfTZdsUckmfsNz52M5sDnSynhbqtrbkAv5hq8Ew5RRCAJbdeNps",
  "key25": "5rvLJKG3gjbWAxAWtVr7GKR8jEzL3TFKj6NKStxkG44mNENkexjXn94S6CFHodYVx9fpsALEcQvhoxBbCeQMHb3x",
  "key26": "sV7vbZ1HvNP9d4C3rtVYQ2coJU64mtNaS8sGKwFvvo5aaoKJdTStZ1HLdZB7szpJVLPWNHZH6fWi3kXut8N3Tfw",
  "key27": "3BbXVNE8M4grG6BF8ZhrGAvfvhCSVhv8GDsdTq4cTj2GpSnYW3weKpYLJ3zuMn2YEBnj9dmmXAACfvibUnjSKag8",
  "key28": "3CaJdd1sfGmiDoAcG5fGvYHBVBy5u1zLVxgJy8CaidS9j4UjBFSLAq7f4hhMmwf7AxbCDExQvNRPanszrhfiJ6on",
  "key29": "33JPVasbCVre739JrXBn9nGwAvGCz6eTnV35AjFuVv9QrivJbQuwViKNsGZh3kySaumrHzr4WbQVKn1yb33Ubgqt",
  "key30": "44Wt3cVsnZq39E3dnEEqpkrNJLTT9WdhHM8E3Qx8P1xud5r3WL6cLgp8nQMnUpkJMwxtYxdgigbYkzc7u7DfFNWs",
  "key31": "5FZz7v8GSTxncmJPQwqqdSpNKxjHyJMwJzvcpqgnpkQyqtroKyT9QX1938i113VVP419aKmpDaagcxYu1fsGyD8N",
  "key32": "5dKVBZ9ak7LwPK7wFuvKR5AT19BeF11u8VxdoLZkUqLSsuvRbaCCJKBJqzwVQptCRfL7WUt3FBmKmZTAPU3bcYcq",
  "key33": "47ZVeFTYphF6awfpASs6D5bunNK3JW1iM1gHdix2fR7gUYXC8BSemE7a8ENZE6NeWyvby6Za9oSoZjo2C8LZo2MF",
  "key34": "21xjb3v9UfMLFXMyUBdCy3fh7a4m9AisMEoN28q6GRf1AnWebpYvkfvqsNHJ4HKpv37xXSmkHBS56jjWF7HcQ38m",
  "key35": "5Af7rybC9X4Bo5XsyeYH2UU3jy3VSDt9vc5YnumtdB2nEK9SBJfqWXVoPe2WD3MyfgrknTMRp4QA6XQTm8V3Rnhm",
  "key36": "2AjNinsA9YGN7UAZvZbaEe5TP8QywZz7B8Z6K3YP2fM9WQc95j1kTXa6bw8kT3yrytB7aynay6aVeGAAAYCpkoSH",
  "key37": "JBxc2hb4BPdGiLerU4qnXLMmyrpHNg4DgQrNyXpdF3JPdM8ohZKiQ6Z9Z3EKZ7mohgG72n7NXEhs32miQvnGho1",
  "key38": "5VLnKAmyKxKhN2CaipVXoH8FKzXefPq3rqWfnhYFLTitMaLSSAfJdk5B5tJ4MNLZUDrpURyeAFCVQ57hHk3tNskW",
  "key39": "3ceE2byYUnozynVu1BMYzeU5nAQjxb7vJLfrib695qEqwRTqqCc4KrfkbnUonRkth9g1iaj9vwVzbq8uwT3ESpQj",
  "key40": "3kj2iQzLbXUJ8x5PnC5sgLMjjFg96SC2htXZntsfXHqmA9KcozWyNAVMScEjSjV5KZtMQRxQqyaeaFjr7rytDAsi",
  "key41": "4Bf7PNFBaMzmEcMPBKEWcmZurzaDjth43mQSjFFNZmpXfhF1nqpW6YXHL9nhybyNAYoyvRqeQM1bYAZkoTWN8VKR",
  "key42": "3ABvA5kVyg2FwVewFv7JrW1cokZp5zj74iBBwLDjJXPcU36B8sv33nJdBdaQr7zeVmSZG2qkZig6yU4E9GRFEnHj"
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
