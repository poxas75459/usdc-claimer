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
    "2Nk2JzCmSa7exwoCCgcAsjJB6D1Vr8osNvwzDhaG71paKL31k6Hsgk3cqYhuKo4FqQf8haK85ATdTsd9SHvcdwaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "538MVeKHMPsHHgy4NvUmXiSqY5bDwLAwpBdHcigqvGKWs5k2XP5JGuXGgYxsqZQizN6LnKQZJbgVYER4USXjgcKo",
  "key1": "3osxvEQtTP1gsSPoXWAiLGy6fdfLR45R9LGWBCcRWBjdCoYXTqxtfMz2L7TNZGbCATgQcTZ3aSmh3aZne3HP2PqH",
  "key2": "5GmB8gxwECXJtmVyRNgDo4SePytePpJChGn6pzGhim85ka3NCCe9P9h87EfNghdUgygUe1UZCvsGR91jfaZcP4dE",
  "key3": "FLe8gTfBPfa1zS5qWb3PQWTrtSBef8vnhj2aDeb8ask7cssVVP2A4oY6EsLu5xxRp4wp8iPfLdpkr2HEgaJLxqo",
  "key4": "3QXSNjUbgWvMDeYmzAUR8Jht5itkUur62qNXNBi3x7Ww4akZZwwWQawy9m7WHge9Yv1onQjcq7Qe4gV4x2VYs1C7",
  "key5": "3S9NNdJjtVUogth2cJriYexCMzHaiJYRVdPTiX8iUc7sLmuMEpCDP5DaotPpGgEL4srfdApghsBwwPDjBhuRCSZd",
  "key6": "2sbGfKksZYMYdXWXerFbJ5R3zAA3kKVJcMxbvSsfXy6mfN12s9pV9YWttwCHkuL4cHJimqPJfeN2EnbSG4z2azgh",
  "key7": "5otCdgVfPjM2EzVpMHYFixWJGGrdBQhnc9jcbnmYAgA7cGp2xVEPgq5VGbVtUZTjSVTZ2e9ycyvesPHJcUXJyuhu",
  "key8": "2aCu3bZFYbpngk344LGv1xTCnW85NAhXsA3ZxTi1XPqzsKrAxfGAQkRRH5FETigDWEbANjuJnkXtaj1NyiwDrwF6",
  "key9": "4JjK7FBa8B4KWn4nsZgQgSEA1rGrgAb3YtQ6JkWpJaMCPwfYMRUSiBXkUc7yDBASgqhJG3w2Muo3yCSQuxFqZjv",
  "key10": "2MM5tYGuKDKhyFZeMbKkN5tGPe9aPSjnnQqNgNxS3s6efkYhwHT1h7MPXbyoSQpKth7UfSydY6FRDjG6dGbiMZAT",
  "key11": "3f8a38AdmgpagJxWMfrFFM2XvxqxfAcTZ3HA3Adjh7G9oD1ZEdZwipH67iVW2BwtJY11HESY8XDr2wbRx8wTzZjN",
  "key12": "St8d7v6K8eNYyg1C12tH4wC32oG3exgjkKkUgPrwkVs4YRaAiKPdxC4TUorF5TWBBksJYfidwH5FXGKxbHSKjJH",
  "key13": "4beA7VbsTGkJAdC1nnWDppc4f83SYU4FrVfD1697AqiKyBdvc74LGyqPsG4noXxY3Sri1Ln3vDPLfcLCLCU8yrza",
  "key14": "2dTM62dNZW7x5feBjdeRYjwVi6Ven95VCRRe4NBbUtUvLyk5ukq35dUcPQKs8Duxg8nshthFEgeYTYbvhDGP2ozs",
  "key15": "32BqeWFB6qLUnxn4Nih65uxbQsXEkz1nyyGG62tCm5hXxVX35Ctq4qzZrkACGWR428R4bU4mAwbLg79WHUtCm38S",
  "key16": "3pjbzLbVyuvK1uvCedfW7QnMeXd2iXJetN6Sn1mGBhRDjQcnYSnRAZaJN2WjRjQgSdr5cGbv7WA5AcnqxvpwKfzU",
  "key17": "6EHBifGzWCQvhVFQaz2WiyrYZGEknzJ46pdKjZXxCZNC6Z4CeBkYQjG24mPmYEcZ2aQb4QN5HmXgsrijBECSNRV",
  "key18": "8dhoPUQxMY5iPJzztnyPZRmHAU5b8qa9PaGt1Y5PEs9B8afGNouU5cUzWFL5azMohY7wRH1GenYhibT6RqH5HtY",
  "key19": "5KVVJ5m2wLSTEfdc6RtWzDCWkGzdaZbrczz8m1v2zFqyi3G2RtgyBpuGeReTTeBw8a27M8YqAoPR2pZwft5K2kgv",
  "key20": "TvSbSxTHneY22mP57QsSNA8fvhkGzsAbbJs8r6c2EZXHudg2yatU1gnPKsUB7RrwQtNJUhMVGqgvcjLVyVkHbgw",
  "key21": "2QGckSoifLHzkFC9QDoRYMUp87PmWE5H5ghc45ax8Y2zSS378doSqsXbQojBzcbns4onLf6eZFPnsYGLreoiTx35",
  "key22": "61ooHNQAzePM1EqKfHWDPtT287zhP61ZZKCnQ6a6GoRGXKoiA8CJZEmQHTbeMEocjwQsYE5BPDkt7HgGSWhuGx1N",
  "key23": "DHAysq8DW7jmK6736iMKmNKM6uXkbP3LDFbkTAUhLsg1zdhpScafFp4rGaZ2h15gUh3bUbLtxcb7DqXzNpL7dpP",
  "key24": "5GVmimnwndnqbP4LNnRifuCJtNvXKpAoL26dJKERjSS4THVpMR8EmHvwsA1bczsL49eK4g2RRFLvTQtLiYvYQEVv",
  "key25": "3nxeijFZvD5A1pRo9BhtEam9PCYadqJmTcEQ2TLy7Fg3uCpqXeVAHvA4oF71HnkA2xQXgsjQBfYLXMxZjKKCVjhc",
  "key26": "Ew7arK9N4yVnEbHUZBf999SfG9uHm1nbBCy1AmZmMgEanaBNxKcN2ibpx3zieP2hbfxGCpajnBP97b8ZTZ3d7gk",
  "key27": "4Nwd6L3u7kfFeZS7g29XE628ZT7fmtZUYvT5wbfGbh6GeejddKQwJ96WjrWHEH5YePRcEyuz1X3ttPrkq95kKzwL",
  "key28": "2SSGiMD66hKeffXXiJdrfSBiTYrgEEvvEYEDRLgiMPWn64B4gjk7thdk8VJhaRPiNN18BtDUuQyCp1Ujf21GCEUQ",
  "key29": "3k8ujvvrshXifBiT1nH819ar4M8AhDRufYGpqevMPZHoz4BgyjFpP6cBJ6pamwvJ2Sz1eR9t3vQTrq53rwMJXRK7",
  "key30": "jNVKGzp8TSPDki1fpvSGKojNKfS146EkSfhq9Fb8HMbDhnbw7NoFYKQJ56V6FFHS7wTUAckre514i7Dobcsno2s",
  "key31": "3YjG99RzRaAcKnd7AcebeA7NjNGJFtqU9dMrGKb2or7inycnzGh9HQ5Z748XCCjmBYHFALXGEVmAwdnkbha3FwGs",
  "key32": "3ZDgNXHUtUwja8PpC8jw9RmLgn7ekuqsTq2jrB3Y6uvrXQnxK3VgZeyMGfrUfaTa5mjpsYvobxv7EtX4jBhk7kJK",
  "key33": "DxEAvMpqAxyoVdGNY8EnPMCSaLKndJoEUTUR5j2K2EmG9zDG4Y3xQFYvHD56dd8X1Vkizu8nRN86aCpQ8TxGyYu",
  "key34": "2cEENBo6yCH8dRGzYoWjTm7n955fTDgZ8bY79tkos9F47zt42BbzExwvFYq7LQCkpy9vF2MkZTosZcGRXcV5wt72",
  "key35": "v5JfStAgqVfVGfBLd2qMd6wc4wqVW9XjYHXbYbUc5CoaC49N1bn4SD7eWopCz8uU72e2UcwpTCDB7E8Kc6MxChG",
  "key36": "3aDLnQxAsox2nMrZGrjVKTExxE7mxnC7KfXxAdv76JpZWqq1saAsYKSdDzwMQXRukQaaW81d6FSK11rfmsqHdqkP"
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
