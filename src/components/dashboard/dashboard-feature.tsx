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
    "59d9ii6AVnZjhewzKvYFkufozk61Nke7cTSTQn35Aq1ucCTRFp4XZe4QjRAKjd9XiVbJQhEXnyS23nkuN9T4UeGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YnKiPJFbtwEG7B2migCD2vxKh6NGHBwAzDJr56wTFB1YW3rvvvAFfAbfNvDvQuzRbVNk7bpSjqHMGiBWrGMZHSt",
  "key1": "2276Jq9TA9eMZWRCbRKTg9WxyJbb9xjzTXxwch2R79uhB1a32tTPpGYXtyDBjzPYNDgC6F3KUUjZXuG69qMkSGki",
  "key2": "2YqfyqzasYJqjm7ngzwrx97gsLvzMGmvbzNMp2PJgUEm3sJPtgSm9PZYak4PYcNskavJNjFbiAB9MBpgMYfutTez",
  "key3": "2JewXU7qHBrpxQZDKcSqypbXHziyFSR1C7Qk4BPqG4RN5eDVnXW8ssZ9c8XvxT6wmWGvSGt9FaAaRcGcsg9oRXCE",
  "key4": "8ZpePMADzPHFYYq334qSuyKDCJqLxfXEPi4X12z7kq4BGBYa1Zj8V9asGQB5DSwRSSVEEfazLdLJvAYhjNVXqjB",
  "key5": "4MMxvaF4gHT1co7WEZT22QWot5HNvnYCmoVV9CPMBR3cgttXW8zd3KsZDpphGJNWLswZ7CCMxjvCSzr4xMiBvPR2",
  "key6": "65uYp6SmrnbzEGXnHDWd5QHEkghkxNcSTzSK1YQu8c4JMBtfG5P6oTxc61JPJzTi14pDfKqRqjg6sZ8LxqTcuEAy",
  "key7": "2UDFZxP6HmrYDkUSjwJyT7MWgbWbch1BQgXonpx4B8aTCCJ7LdUxhasTJmwgzNCPWS4tg72zoR14J8CUo4WFgZWW",
  "key8": "3kPPFRXo6Jd5KGP7NENQNt6upzhu9WfU168wCxKDs3HCBW9WTmUMGKC43tFNPcxC5Uts8xtfJWXf8iwQaArRE48V",
  "key9": "5gcv1xg1ykwADAmqiWWLUxnGiJZMNonZzGF3i8277zup6B91RGgNh58xQwHoyJk3WWkbax92HT7A94uM9GWJPJ24",
  "key10": "5f4EAq1sVBWxmbfJGZYjAJ7TSkHvCoVFx27NNQv4uadrcf7ZgjJgNQZ4KtCV6eAQH8p4v99X6Nfss6XKqXmoqisF",
  "key11": "pkWnz9LZxaEWRszhHW5jbuQwaoNX7tTJuXgg3MkCEHhvfuCjofeRNkeqPnXakkkXyg6u5hG5fzK4wdAokvczYvL",
  "key12": "3cnYY7fkjZjnTG6NvL6opgyUZ94StdCg5mRCFZVEQWLWFXYSVVUEgWFS8v4nLMmmTqYUK1SuKp4VcMNpLCkZMJF5",
  "key13": "zujTaX17DeCeEL8JH4BjEVX4MQ7ABR8CMAjfwyaobS3Q1dkSrhbLNpdKVNkGLn3VxJEgXtPrpzsd6EFByNRZ1Ec",
  "key14": "2ExxorcDHwhk8S8CPUTZQbfJXcjNtCmCjFpAZSttkfNfTgkaDUAUd4tvoYB6yrHrF79DZQDwU94gEULzrB7mhHtR",
  "key15": "4w4iGQp8BKLrhZqjREnd2Y7Z6nqpinKpsHfmf2LCT6csTL5EU8HWFi4PHD23Rr6tLNU4g8Pfb2zBSjVENxXYwMpy",
  "key16": "2AUVn4XYq3XbzM8H24s81sxbErY7VJjbg8xsiJooZjud843gSMcsks4VSXRwJAzXFHP3R6oggjaFJWWV2LAS3SJz",
  "key17": "3VApXSTG4mq45w4gZMtvVKQdww4241qBzKZczeTXBPLNQm8pDjggNc7AbRTgo65p7bNaZWjuHMUz9RHzaJBzV4nm",
  "key18": "23kRwmjdVj7887bxsutG21rq7rNmJYf7Hid5WuEgUSBfbeozb7uXMpRqYnqkPTjBzYT1zHtvZsCUGV47dDd337DY",
  "key19": "3U2QvjjGB1BZzYYWidhWjTNYkyzueguX3yNELxY4d3kv1L3f36t2qkq1o3ChjV8PmkCoStw6C6MRi2Vum1WstKbp",
  "key20": "4X2R4KdSLjLhzPX2LKgq1KMdPPj9EtyfYLgKVEv6dLDmBgaWBGxewYRzppTo8UE7YmbsE1sFRjo6WaP29R2GgjLj",
  "key21": "LagcJwTEQVhRpiqSgE6guMaD4uN1YTpf832mzSmD46DRXwQb8DLjXC6waiKcQTYbSzGKxVqsZaEmzg1iEjJix4Q",
  "key22": "54gbUFpN4A2wMvsrgiTTMd9C5wBFYMinFKMQ2YKAhpSkzw2zS71ePoKDjv3p9q6rZQdK2c7wxgpVfS2T238vuJGD",
  "key23": "vDYjVHNfBGRZynvFExUYgKyMJ26PRmZEunEkTBQoxEvmcJn4Yes6RnPFhr4F6ryVDvc6X1YJ9e59fS48S5ZB3aN",
  "key24": "4kq7gpACr9FuafCCDowycNkwpL7rkmMVmZUssWhCCkuvvwSuNeh9btJ8qB39F7cAS2houKeQVzGobpTQnzBayNMP",
  "key25": "29xdvXtwmWb1jEp4yV3vGqjbDXSCmiFK9SJ1iZXrt2drRmtEWCDYM7ck9pqRwgyFZxnBxojmv35d7JqBiVJUz96R",
  "key26": "4tLBLm9kS3sWCoZN2nnoAAjfUfu1tsPVD2Rky7UW9sJxkV6vVoVKpeWAjXghfPjqxBJnZGW4wrw5N1WgBCf3f5mP",
  "key27": "4AQNXnpLDPTpAzu4ynz5nyd1M6gxnngFfff8bA4cBCoSRMtEWkENnPseiu1SpEj1RXpDKC65W6Z6Jxk5bwqAhgMX",
  "key28": "4mtxHYGcoPupviRZv9K5rSSWoBbEk95TK1GMTZRHRtYpArfmFU2UtEhzxhTDYCrMvDrsmucRXJtqRdHJDjd95Vr6",
  "key29": "3u8CQe9ao76z4ApVCkLrPi1KajS1kxMvVyx1py3XSeJuBYNkmAEJA4GSZQGks4TqTubs66D349NGvB76J5vPb5CC",
  "key30": "3PAwdSYuyXprd9KF2hkUPxJRrXMGMb3UbJJe3mjo8eNdzvk4zCGjp9QCm18U11Zp1NmnhqdUJ38QUrjHv5FHkwEx",
  "key31": "64dJu1dPEykhoBbMQUzinsYkEAPM5PU2d3E6XSLfQj8bRyavD4zcGX5KuSKCrd1C4Y794A82NXgfDuBzAEohvbip",
  "key32": "5DPPL3NentYgTZ7rwaAhQAZgr5gwJ8Wf5Pm7khyVGJcpgVVrDZB9JPVgDkzqbCtQbrZDY8mWpTqFYHqamAKRSjHz",
  "key33": "5gQFgrHAQXLxsH5gHhm7JVB5p5p3D8aG7xsoE9ssxJrBxDcTaPXHws5cWXFxRedtJ9rkb6s2KUpDmCd4zrg4T8PE",
  "key34": "5nVee3VJtfy75GjuS8cn3fbVZ1kAdwTxGNETG1jsLCNZZh96w9YT78tJUWWAFo1u4R3uVSsEEqBY3TkzRdhM9MX6",
  "key35": "5dB71bAwma6kzMeoFYubQusxzFLa8xLKsCuEt691GoGQfHv1oDuF71CRyD5nFQhxm37K35Jpu7a2Lwi4sY3hJ198",
  "key36": "4HJEDRpTLGZm8xt43x5Z4c7MBHT4t84Rx1PEX8PNA2QjigC8HaSZQhRkSMQV8kUpBbuQRS9ppGQu7BSRGXyUnFtr",
  "key37": "66EEKdArf6wGvYJ7KAb12hGgNk7wSN7BoFSPYE2wAZSHk1tBstwpdaZf2W25h17euGDF4Tk8j9cPDVViHMXnqypA",
  "key38": "2rSCAHDxUNnKTCLKd4yyw8Pnx5gosyLsWRRWVfS3Ei8VmFMdQShP4nT3zSjToJP8ht8GibN6BZY9VMXcE8iuQBvx",
  "key39": "4wvwh8cPUZnPLCvo14j8MVCz3eZKygtNCX52uyqteqiCAYzsDBc2ZvsQLb4rZB14op3ncdEjVesDNPLn3aim9zyz",
  "key40": "4xfda713uYwnkRihLdYJA2A4nqXz1MHknAfdvR8SPHZJtaj635VQyRx5wgdtfSGy31W8Dm5eTtGau2EHZrp2mEpy",
  "key41": "2Gm5WFWi5Zz4CQ3hJTQfLqT92QRu1FDvAAzMySUgraDja81rbLjsBAU1PNbMggVPXugxejgyNrZJBa8FXyy5XNKJ",
  "key42": "4eQ8vEUPhWAnFrqHRUNLyc6roHirw7WJVRrqg9hayWZTrQ46WsecAbj7YcKrd32SDyQB8CQdtcBfCDUCodYoJW86",
  "key43": "2JtSj2912pzqbxig2UuZCWzn9uJW6sYwuRc25wSg6yKC2PkxMoAvMgHAcoNDHAv8oND6sfycaDfSzYotHkcFw8hg",
  "key44": "4V82hWKdsuYUxjEndYbidBVRCtvMvxYtu89NEGewPYVWfEEe4ins6WT2nBhWpE2347XfuWbW7TwFLnvAQsYh4HGv",
  "key45": "2rkVVBnUMtK2kAHq9DKAqzjemJ87pSQL5reNgkS4MYjg1rfSR1ZKzHgffG3j2d81XpZ9TYTmHoh9XRBnBydcV6DS",
  "key46": "abw8HezFe77yfzFVJByKjFA3h8hBi9btcm5K5scW6VDGaEepUzpEhiWHfRchTNDf4hnDCByWcrU5J6Y2Vxc9dWn",
  "key47": "66pxyfhwcnwheyq63KEuEGKVBSTWvC9wDDRtFQUrYmEXdn5bQqbwjs2ddhBHook67eFWuLHssvz2PsyLLGEceJie",
  "key48": "4k4ZT1oCDHeLKszaGwGCodan5CM1JULbt1c8ZPJUW63JRpyanB8n6PL6qv2YieBhfr4LqjiKrsTayTyB5oB7rpg"
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
