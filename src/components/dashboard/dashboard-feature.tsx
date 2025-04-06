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
    "KCKTe93dZkqE75GCmXkG5Yb3B3FFjYjw6UBKDHMA632VVozBGqBL2gSKhPh87gK6Uxtv3nmETo2f8q9r3Cvh4bB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "woUnt2UJzbqufEaKdysLYcJW6jL9X37mQuCvidPgfkRzBemDttxboKJyp3VaK6JKLHkhLgeprAVHXCw4o157QcB",
  "key1": "4nmtSAvHWVihT6WXo8tdwK2oEjeZSg5KNVTCpYCgsQWDepjLc1uR3wzHSqLj3PGp8qeKkNcT6jsYE9UFUNJcZR3w",
  "key2": "4Jr1bRb382GJ77ZMRkF23uqpj5R7VXWyKMEExP3e9MaJAJmDMdhxv38sgcDLmhFNcA1wm6yNVDowNkGvD54KPNmK",
  "key3": "4kMBC1WxVVx9JbCVWU8HDYPanFPwkYnznuxuCyMDmMsqTsSYL1UdUvUf2a9Af1rdw1A7VCo5ssR65Xjx2bFk7dMi",
  "key4": "5fVux6tR9PyZz6gqGTqJMrg99Udoye6r7vqguWZENokc6eHMY7KGVnixhpTASxDWpZrCtb79ASYdW4P2cMFNRZGd",
  "key5": "39ciGcWBfBH1veLGHAjffGgWNgLiCUNCCexc7zR68BC6WdsxUbND4sPLsRSyAoZK1Az85SYd4oFaMquCMmnQdag2",
  "key6": "2Pk7NLRn4jUVbpgNoy4EA84kgtpiBNrfKWH11PZjYeQksHbzDVp2ao1humySxbHTpLWZfPGMbxC96kN32tt9gHmS",
  "key7": "4tuVudfJKGYXXZ3DgCckor2Ah8hRd96oSbegdyjxXDyb7XJgE7EEogNFc1y4KZL6zuwPY1G9qnpMqfKTXjb9PwtW",
  "key8": "5W3xirk2WnJHft2nZ1QddSJp3gJGkVkQgzxySE7fLe524Cfn2qQGhC57DKs762ANQXDJwwLy3KvoFHcfVYCdkrbM",
  "key9": "5j8fJUmUhrCGsVmYZcsMYjHjQN718o8HCWYyVhuEWBikd3Tsx3X8NoFkNtqJgACF11eJbGMPUnzfGKxPDBZb9REn",
  "key10": "2Aq7awCMR5MtWScy9uMoSSSYkZVbYaHT198RbDsrYeZPvKxTsJzrhQf1WKKuydrzV2UTpeGfDGDn9DVBroZfbJLJ",
  "key11": "3uhkvRy3wXbHQ11M5tj7YQj9JGepx7bLj4VmNXFeGbTeeCHbVru3buAvnhZJckGqxaL8tjiUMtF2mNi3fPuqFHtT",
  "key12": "gubxLu4vjPZx4WHgLg9nMj9FFSV8BQ7dNp9GCtdFntPFCw627BWkQjhJWpciLi2xKT9pcMfZfABRVHXVmkGFnEz",
  "key13": "3CaJDdwdsbt48gxMLN7FztNmFKcW2MEracxKAvWSiFeY4K5EAAaDFdfnWScCpr6dJTd1HG5DvxMM1eTEjBbw341e",
  "key14": "4ntcNBaJ6K33XKVdCijNp2f5RP6ASfXYmqNadYdd2iKsf415WyeeQaNKwLKXEhMkFYrwQ73ZtpvrsSPib61PvwTR",
  "key15": "2b5uPdc2xUAHTjKB6EqyZPZaZGBmPdaarvRkhtPtjZaEG4NfHpY9iFFuhUbPZ3F2jqhZec3EDdJsAmmhCsCiCnxN",
  "key16": "3eK56Q4GP1v1zveEWVoxM4WXgk5cPT9bdYWsaSzs5ees3GHVT1qEG3fzeUMLub5MUZdRfdVFNhu7aU8FGFhWBj8N",
  "key17": "5tLzYASoofSFKL1H5F49e5Yx4rJN1QDPViG6zgQ4HCGL9GGzPLJHuJBgiwqGq9ypx6SyLR4xe46KPRjbDvXjK33r",
  "key18": "Z8y6asbX2znWpGCYADABw1N8WffokPNjsVHcUNxqunYLZBhQMn2ZqYxRn1PFddhVJVrK3JAL5LnRPMqxuadVW69",
  "key19": "2x7ngMSSB1PzijjoPguBf7QvAzL3qThqDcVys77qhW14vnHik1t8vwKLp1WhYHeersAt5JgzFgXA87nEfLcNzBdu",
  "key20": "TAdxPGKHkWfqWJSNXGS3ZG6xyn56DPZzByka3duWBfNGDBV14QW3nrx6xZFDfX9pAGk5TdzkLcLTanvKYXoqxmz",
  "key21": "4kxabeiqAMAEo9VsHuFk4LrKEgNses4detoKMpBM2BimWAsbghpW6u5rdKkf9Jf4x2eYj931H3a24hJXUeHNbS1K",
  "key22": "5uEAJ4KnDTzTjaNJAVgnsk9Cn82bpXTius3bQajkbrahgBt5qkepWx2gN7v35UDHni4tTe2CR8sPBuc8KCfK6QAB",
  "key23": "5hpcuwdt83YC1zCp7YSp2DQuZLfLsq3cegZMPkrMeQADEdtsdGc16m8fSbyJXuqrYYnKxXbX2n4JxVRuydsT7Crt",
  "key24": "4aWSMr9SVTJQ1S3PgTmoFLwij3VJJmyjBBwnoohKZqxT5h1RhHvhG4ThFnCEhAikr9o6tDAp319xCKRYnhZm76rJ",
  "key25": "WxiW2yXEeRBAbp41JN5WoGUX4DfyLbzWBfRckqE9nKCYhf3rXBNuYmR3HkwQYxbsTgoq5EPeyCCxoYQaC3rdFhJ",
  "key26": "2tM3QkfY9MoVeeqPtRvfcjupNj924PW2bbjVwj9CN5KGazW7YaCtYpK7RLJSQiGW4u2XfdaRVvNP8Sr8DkEnv127",
  "key27": "2Vjin4HExJ9p3wL7mC4yakYV9vYSqiohZaXrqGtvdSSp3fQpKm9enxsTfWHcZPavELchHkXfwR9BMv4v6Fyg3Gfb",
  "key28": "4cJpuTy2iwmfgWxtwUdvgyRcEeuDFjaRwsSGiZAazxhVAUYfat3JggTt3k8HBY2tyhKArHwqtGkZgzoktktRaHY7",
  "key29": "231JsJQnB6khK7dp1cJ2RqzMki4TMK1nBx3buW3qj5p6tGEghSsifsLxG6yWDmJubeWEhFMbGBmNJKn3869vKXtT",
  "key30": "4AgmfM35eGDdYHgWnqUQ2JHm4p2irvD18L8MVeTGyjUEfaRgjtBcLtEyzS6KAtS5f2Db19wLqmRW1AdxcVgfQyWj",
  "key31": "ZbHCxYdrGuoM7b9WpAevSvmmJwWapzQ8ffh4fsPtujSS2JkqfWETtg9weJPHJCzMUCJAbfhEBzVCqTxjnE1V24D",
  "key32": "62U4LA69TUUQ5HyYWQX6mYdQozRRg4SgDyvTGsqRUrqzDWu7jZ7WRMqM4coZQxLaW7QhSDM3YX1mD1Xnk4STzJ6f",
  "key33": "3qwVnGf4TozonkgV8MsnPhfqqrP5RaG63RdJ19R9mAeXHgHo7eHasTNVeyq1MZaDaRoBgbqcWk8Z1YgXkJ9rKiTE",
  "key34": "xSsHN3vu3DF3ZZc8DJqeSpcNdeKaKFjSM3GTnuVt5P4P1pmmJNb2W4Qi8L2ToCyoSmCfYz4r3DF8vM816Szo8Ei",
  "key35": "2Le6BJB5KmQEKh2xrHw8EWBSfLx1SciX1RpahWS7AKKLVWNi8XS6xm9V6xmcddqXniSUCtVPZpjHF7zTpeoRU4WW",
  "key36": "p7ndCsCdVWznhVNVn8rMHeJcfpSWWvXkQNASNkjo3nHxx31ubJBAMKDRHhoUg7Ux7JzcyrZMRk9aacFTmLYRG6P",
  "key37": "5kXfVbj1bC4T28HPAVhDmQephKtR559zbHhKcE3E45wnj4HEeBpXgpB5dXwL6p367mW25VALyB93Sy37DV3uW58q",
  "key38": "64zuX6y6sAx16LtmcCPBdGUsdkCfcniJg2QSU3UwvnPKWqUDGSpkP77yfZxKSqQiB6WSY3R8MgCHHVApAmHStypP",
  "key39": "2cz8ZnmdgWBVQZK9gsYftfvDupFnNBT6z2T9WapgmsQrGX1GFtythey4kDBN5D2P5pM4uPSHA2zCEL8oazKt3cAP",
  "key40": "3tnMqkdzJB7Zwa2Nr8svLN6WVPnvqfikdyp2kRdPKpRGvE6UyTGWhAcAZzBL47E9SSmkWncwqCa8MkpqyN49QX7V",
  "key41": "2bPnVYHRPUzMj5LykseDnWroWxNd3JqrZN8ej2qrzePKcFehst2uipnGkiPo4aHuQUgTo5XQmN1G4XFQ9XK7Mhtx",
  "key42": "5baa32CsvhPxVot58uxec93wyzAs9VS8aQAbw6FGodNnQdBEjkNhKcvRE2fb3NQjFqeZtfuqsZ2tnKnjAuY7NZnP",
  "key43": "3FXKY5KGSv5vTeuoM372mz2dW5VdNH5yyHY2ufRgWdBe2WkrBN3adQ7TbPZGcxiAd8AQeD3bFXMMy9UzaUX5S7Zg",
  "key44": "2PKcK1yjhud1YjSxP9Zt5caNvLHsBHCCtqBDcFbvFjLuJpKqGGCg1HWCGVthyctEzgYPupi6LrBTsb5xHSznxTnj",
  "key45": "3hQRNGQbXpqqnEeX72CmMdC8iWgqArPB7xZy85eA9cfgLoyQyyPvvNnmrFPqedmeoheFjSBki5HiU7LuCwx9xoEt",
  "key46": "4thmobRZEJNyDZrsKgnbveYnkpeCeaPALLEJkCcJHYiEkcZPU1p4uPhWC7HBpJzJpBWEwZKAdX5F1bqJ3FuZ8dVf",
  "key47": "3Zt7Tgna1paz7ZAXsqyUaqvSnaYxc4zkvCALWCbksoV7YrJiYZsBu29ZTiQ3aRomXpx35cEboQLXH2yPYwgMoNca",
  "key48": "BrXmNx6oTvfpmhApXNk3HqcCXHibofa7G8oNst7YA1wqwy55pRdLcMBNTruEw294wV9ZgV3zt5ZwRaZXWj5HvX1",
  "key49": "63qULY67JoPkBjRKQwcbq5sBoC2oBV1tNVoaoULfZzXAYhWQ3kZeb4QZ93JEW8G86TqieQ7fpxYxC9SfGeAywTVv"
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
