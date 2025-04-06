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
    "4icdd9xCYto4wNi7PRhANtF8qFpLpcVELRbbzoQJmAFp2Cd4TXTGaW8HMUdJPQJRC5ZYgzGL3Jwr9pFgBpqmpXtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5p9DLfiDNhM1b6nR1A3qsqd6HFemGRnwSBU86UtRhj7K9Xb3HANgSwcheKT54wcbr5YbYK11uEWAyz85XD6NMj",
  "key1": "9asJUybZUQM3bZjPqVS8GNgF48iMP6m5UCWRPXHJemDNuznxFDgnnJWL5Pu8mVeT4V5833Z753TLD5xus9hE8Yy",
  "key2": "vZTBjnoW5yxFb6VyzGp6hJ8c1wMArQ7dQGu2k1B4s7tqyduuL3BAdohP2nCG99mjRR2cPhRUCYYWnUGbZ4jeLfB",
  "key3": "mTXLZ8Y7KswpV3G3nnuRE7Yxk4pB6RatcAc6xUhpuTkJqv1jy8sem5o6dUWFzFMbYnb8Ap7rzFkDd7PREDa7Dih",
  "key4": "4yxmuDqK59DrtBSpatR5Gw1VinJR5GF8rxAY8dsWwfCj7rmo8UmNFTBvVnfB73dfRNFmJujdxTfo5HCMrbhUBuFV",
  "key5": "2Wv26YWRW9yHQ8YyWmfuHsKj85bzyhxCUzEeT4tjVW8boCoghU7yELRWZ9gqkbPbUg7d5DFNhqZ4J9aPioXcGfmR",
  "key6": "5k4XAaRg1bdxaiJgmDJ242VGr4MBs5fkJSw1V4eSd264nDWhvmMh8xafDXqCN44xQcvUxsP6YjKyxBB7UyyaHeB5",
  "key7": "2EUhK7xgD3vY6Xgc56qwD8GgSF9c1ZteP7RckeDyh3kDHtvqftcNzUgAXJfWadTWAWLPpMCHh3jwvotD1MFivi2S",
  "key8": "2K2i1RvA3weV3TbHmfqzohNFmmuNFPv7NsrbM46zzhnqrcKrbHhtFWMHG4iFsA6P1n2Cp7D1PMBDbKjUEB8d2R4W",
  "key9": "4hvVb94PQFoAyeHhGcvjdRfLDUrAysvL71EkQ9Ez6eBg5DmeVkA6vC2MarmvAz5J3EZN6zRYxJKjya8LqUTZ9URK",
  "key10": "5w7VWcDF6sGkExAySWULDZ4ck71TnWSxzNML4bf9FPwgNmBNUpJxrfm2r95cX3ZgozQjjuQbUYCUEJdMHeqReBm9",
  "key11": "4KjJc9qMTokCAy4z8vEz3eHSrjZZbbsVUBoXqjU3R5uso7QiomMbVHaJVKaLc4AsB6Sb5NsxbombnS93xwTjbRqu",
  "key12": "ArSJKEBjixTfmkLcQSx43U2jmgyEAJPf5vTSU6VLEfSiATJUHSqBVqRDh9HEAX4bMQu8cCuUxHe43en8HnDQ6Y7",
  "key13": "PcprJDKrpCaFHCTMUe4rVqMYvqPhWpv1KN4y2d2G7oex3GnsjWQW5p5o9M51bNoNMF4hTEArDEtP3MQV6LxckQa",
  "key14": "4F2QeeN82s9Q5jTh2KqrsAo5meKCrwbhdjgWVNDN5qbkBxPcRDBQMnVGQo5UePQ17UqDQv5EFiBfrwfvY2KToYCw",
  "key15": "4HDugXX1d3uqK5a64Kw6BtSgPufvunXgpTEGSx3fZicRhB3p1uA9GK91Ej5E2cNdhybnSgkxeHih739bTSTR7w2d",
  "key16": "3ytzCQEPFHfUXpcAjYzRrd4iCSH62y4JvrrZRLHF1Er4MiZhvhCMiMoe2yS5Daaig48D79xb74ExDJJFNsiTxqyu",
  "key17": "3waz4mdNrwP9647yfyahQUiTeeRBsne3DmRetARwqwyq4jXbeyjxsp2NnhTcZR8XGwkKjX5KiBuM78DLqy8Ln8LU",
  "key18": "3EFhbWnNYN7WuiA5i5uNXPjVyUiXjKCCmG3LUiwz2YGesAzfRd7P67hzKjSsrg5sSwrKZxWAtVGepyGHfjdtyZdn",
  "key19": "RgrsLQXRf9fCaTt9jgecadwnVQM3Hj2CTvR6xAhkhrjfgQhuacaizBq5x6ojVxtr7A4VARujYSwS1mSDnT8cerS",
  "key20": "39B4sa7pUNoNBQbdKZ4BHefbGSfk176Go99icULgsNr4PtS5pLBcPCZniPTxSujxFXnZD6DbV1jTqS5ZPxWghwfq",
  "key21": "3M7LMeisFWmFH8Fcvv7umkCKhTvcf31yfkrzZEzPxiaVfVA9dV34B9TJ2zpzbwULtTQSXP15VYBqefvPbwiMKb1u",
  "key22": "2RY3rWuZV4C3GnJibwxTyYrFs6CZLaEMcmNSeWuFU7gMNLYSvgC3k61NBovBm2KMNy2XKKr6eVXMnZfgNbzcVHuC",
  "key23": "5ADuyfQozak4TV5Pd6mVsY4ZP71SMduJBPK58T8KRysVTLfPnQrDJ1jJUizaKqKKJtHHDcv6GBNq58wjCjBFerAD",
  "key24": "4cosra3nww4TiQYMZN4XY4A6it2Gktg6kGD1GLFDdbPn54D6uZPbhkyHfTjy7ffM6njj3xay9qxb8FqJyLxiBD1K",
  "key25": "5a6T7uMefWZygT4qfBjDXa1oS8Niv8wqCKBzzpN5DP2ycTe74X42mdLcEGxzAm7tjDtTF6Hng311rEbn819uKaj7",
  "key26": "53jvq1p6tq6DgUvKZsEWQEtJHP5CThoBgeDrDQywuMDe5vdG1p4M5HAgYNYsgvau674ryyzkuSzNHr1irGizDYEP",
  "key27": "2E4jcvuNyYb1BjvwUq9bJkZKpP2Be5Ybwj3KTccquVUpbYSQFq5C1gSCF2QrqRUyfst2gDuQAa6jXTQ1bNXQHWgc"
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
