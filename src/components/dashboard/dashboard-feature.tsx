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
    "2iavChtGiBRkMdZBw5Ge9qHL8fa87Qk94cwRb9hxWRXNe31kF2DaSQcPh7nTriP1h3jkLnuBwwSWP7tbn3SEqsYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MhyLtkzxCxFoeGabH2CnqBbqaRrc8AvTSZQGePCRiHnqgG3AnwUJyjS4e4a2UP47EwdLaxBM4ZUgZE3sNHmis1X",
  "key1": "3k1nzFVBahqUz5rpEZKjeoS1Lbhiiz7yT7DksqbLz7BoKCKmQRXSACTHF6tk8djYGy1H3cg45ajQLnFPohxJGvUU",
  "key2": "2bj82ppGkV2ugnzj2T7cTg5NmJ1f2rhKUyNdNBHkSb28rDV6VUJHJAPzeGZSe5oWjrhN1K2q1SsY8CNFxqcHYPhH",
  "key3": "5r6gYVytjDQ3jM8poc1ZpvEjnEuALzj9rJ8WEZZVPZamAjs2roBWDT12Tx1yb34Aw1h1Fn18GY6B1PSGqDes8iRg",
  "key4": "2cnbxQGWaY4BFH8GJbbJqx2aFG89nnT9Nky4EVUNBWACtc8K23SZYuiqwW3p6tJDdh441pVpGYSyPY5aTQCkJskp",
  "key5": "2hL6K7kKgZJv4deoChMRLSHqw8JJGsAED3L7PakVc1Qr85UJ5KB7U82WofR6Arh8NvhL2tqnFN2CbJ13h6JatBNM",
  "key6": "Zmy2Rkwk4B7J2oAKstibnBNJ8mgLpN2QivSQCakHGFpYwN1LKiqnSg9Q1HZ74Rypn8KSKx4c5b22Bwh4VX1K6M7",
  "key7": "5dFk5g2WPdcgN4sszxCPs9yEz1cPZn1Qi3ub8m5rVgJBg57r2ePnYq4qyT2WsE9oKCWZ7aJEwi5GG9TTwAqW6kku",
  "key8": "51wqB58P6MMxhr9ds61S4xJcFGpubcomX1QTXf8RiPpoxK1HKcu99MjThokwV9pmAUbuyBNEycjqgundVVmgT3uP",
  "key9": "ojwCrawFALKMfvzvvAr6n67QjXtaoHSuEuWXSQgJyEXgsKjavsppvfm1ESTKtqYT6BhkKLwRmXBTkMaKL7qZLbv",
  "key10": "4hk1fTVG42cA7uVZo2gUU19zzEgzfRtFdm4kzwfFp94KBNx6X48o5WFR1CfyNnHj2zzUigNTnSmqoLCV8oeRrh48",
  "key11": "XPaf6wHHLVxxB9oZWEMrZSw9R1sasMzcgTdcP3nRMwNpZ3jsD7Tyo8FJTAPq2us6YyFfZ8uCSJBZPe2tPbEVnZV",
  "key12": "7AntNT7uyxDRV7HRtJH6shJW2vzKR9RGpY2rhhNotD5RpDEwoewjCZREhAZMrwACBQPzH66JvE6Y1UW7GMVPdcj",
  "key13": "5gzfq2jXj3Mafys2tK5zHrKMc2Z7Zr2U6tg1bJJ22SD2Z2VjaZg7W2gz4zpKdwpwVHVhuheRmNS4jwGPWhaNEZK6",
  "key14": "64Vf5AjHqs7bE9SymGQx52HdnwM2svH1vwYHe8wprmSwZqDjGndqU4u5XSMmmXN7Yw8fNsYHEBsj6N7zvNyFXrb1",
  "key15": "5PfLd1hLiQQjppZjSnNyQrkcu7T4gHYWpZtzGfiHizCacyNnjPqsVBqHWDC3bTAgNmqNaff4CMLjdg4DmvE5vpnp",
  "key16": "4fu1WsRobVEuqVDASyAbkmsEkrQ88Hrs343o98QaQ7Hx2S4yfuSRozSjgzjFm7NYRGnsgdYKyPcUWBVAnedVdVaW",
  "key17": "pcyys2ADjVKQtsLoqv1k3yTttXHZJg26AUPZVVgVZT9v1vCu5swL8GCQQKncodwbqXEnWvbpMCpgh5dhZaxbjda",
  "key18": "5skBfaL4u4W5QinkSzyd6Jka7zPFmXbokR2j3oSNR6ygonjU9k4QwK1PmznWueV9GV2cKnQ38wiGHpA6cQ5LcFW1",
  "key19": "4Bz5sPEhnN2uN73e4nSJ1933XHaDLp8AHD2PwjkRzj3Tqhit68rD4tDARuYjikY4z9PQmL8BFY16N8GMrVwrVH1L",
  "key20": "4bWWAz4AAbiFnXm6vuDNUfgWCczzad6sAobi9UnpLaVYeizQ2zCa7b7zgTGixxZi6duJGiPnYdyWCVAtFQiy6yWU",
  "key21": "2M2P9LCh2c2BpwxSyWWKzBFm1ziwgyQjbCXQdRJWsWF4WL5VRnz7VKCH39jdNyU7frKkQZvPrJKBdx6uARG9naxp",
  "key22": "3C4xW5xu4SA1ZacSQ8APxHQGPSsGiCY9dqkiWmqrukKgrPJNcHJRRjqD4GXP4ceKTM4fveohqX6H4YqcWCUpzQ4o",
  "key23": "6686FZgA1FrseUqnLot16zMLCEVjXcXvNYDMSjKPZdJpzRbGjKNm68ps9ae1LQR5FBjiypd4K6uW1pkDfn4svSgQ",
  "key24": "5s6yrg6n5Tjf32nevRvCtxg32gdrhSnfHpsS1RYuwLmXCnx688ZAEQ25BqtahuVzPw3UmRWcwdstYPERqZ4iFx1Z",
  "key25": "3LtXGryLf4WqwfXuZ3bTQqytifbcLwVS2odcsCTJNUcaZNtGB3a8G9SCDvF6n7muS35e5xzyBaRUK4sj3o5384JE",
  "key26": "3Wzoy58d4JJf9QKxoafcwYLMm3XqndABgxfDtgTxUJUR2byivR9meXJ8TVyBYCwGGK7u29FGczxVQ9nTnKo31AfE",
  "key27": "2Zmd4fpGprRkQ1ygBjUh459Gxi65vdbkd1u2uXNFNxLsYYwwBfDoRaFGFKhk5YDwFVNTbZFzDiKZXCPeZK4ar6TH",
  "key28": "4oLHD58w9XqHNzA9JEtSazJEG13eeNQwCpeqJCRRAdRpnT4EhABe65ATUdFULgo3EAuMu3eZ8qC2CWit7RwF2kup",
  "key29": "buHuzGEHFPshzFSJahLoBhHX7NcUGp9vJDu12uPuw5DMZA7pWmVw6oQXJq3fkMbf3yrw558ZpxKix91rPni66Zc",
  "key30": "4iireQhAvSXr52Q2x11gBGzbfTL473de5rJ1jpEUvFsfAKjSHKrCEh3B3bwaYgfeWmMy26GYU9MCQ1L8yVorCsN"
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
