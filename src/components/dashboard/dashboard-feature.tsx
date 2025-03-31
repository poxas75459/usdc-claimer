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
    "545c42m1rKLvmpGnEwwS4QHz3ks85zhzD4pLm825XCNrLHDDXb2Rtp2GsVAoFooE468qm676ZpriqAAEKzjxGgPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmZtepEzUZFPTvvHNFif2LLULFLnyCnL9BZ2Yi9G9EXzy73d1hMgGFpdvuEN6wffpYMzJS6XSZwHm5RhjvZQGjL",
  "key1": "5n5zzNb6xrRVMZr8ryXQYMmp7kEVFoGQwX9fQbwPNDsrzYCr9c5uGW11UaQVeEECcGZGefcRQqbpVephE51gFKS8",
  "key2": "2wAwTid35fTyZ8ohiEa9NzE5Po3b4UmtbQCuX73z4ZzdWDKGoav7NWFychan5qHYRDR3AHk8U6wAuuUCFs9PzRco",
  "key3": "PrxQznWSae9hTVrj5URqpBwmz6HASWGvHf2ZCPDpwT6J6yChkxSYbbvbjodjyDu9X2cf43co3WXar9ytWYYpuVt",
  "key4": "2SDcMdu8Nn7Mm43CPgV5Z84J9Dh4Ce8fGbGYh9ZjYpzGM2H5USYtSn5PCq91cXAGe42bJdGY14tQ9hro33cooxRd",
  "key5": "vMRr429JKuypKSpLDkQQ57Er3GsePhkjos6y3EFJNaKzQ1wDvKKhmimF3ZZ4ishtf4Bb8XBoo8dmX8zCUVTjAn9",
  "key6": "65aNC7BVbb8t8Ca1SXAK1opxjKkFwSj3kcMJ3nFrathdWwioJNK8XgEhA1o9FmotCc8JbDQezoSQyVgF4EG8bhGB",
  "key7": "5ZRBqZhG3HZzx6SMMHeXPENtkHtgKMN64Uk2mGuCWsWfX3eEWLUc375kDSgHLdqp1HD2owFsVZxErqJcMyjHJAZZ",
  "key8": "41cibqS1ghXGrweUD6M8yRgCtqcZGj769XaBc7VvX8btNnZw4ehXNR5ThXFsnifjfsLyCAPYqZP4wdCCFnRRwVon",
  "key9": "c1o9tvc1hGkAvU2VS142PPXoLLpJgnuiJSdBEh1kBjX1RNgm5xQYwFg2zTr8jQpEJxvw4VypdiwzYnWGRzqJ2Ny",
  "key10": "QGifJWBET8nf3Ev7tQaAWpgf9QPjE6rAqTMeZpwBc6a2W3YCWTfEvajGXGoafjBEMwXMAfY4yi4oPgm8HYcmK5b",
  "key11": "5j9LwdMBcgwgVAuD9x1mg3KbGq1zxdUU7iDmTkAyeYucoDzwXZQM2esmEx1fojaULT2G6ESt19xXCLtfkqp51a9E",
  "key12": "iggGb2nfSb1X4wcRpK5iKGFPk1of5rceoXUgwXbwMUJ2i4w4ZqKp9FbXsE3WhmGyKgxZvptD8sJv7mNQJ7MrqKh",
  "key13": "2E6sXEM75BVVzgiaGrRESs5rikvryRavuw9Yc8Ta2fAKruzFhSS72Dvc5mzrdSm8ZDFBZiYz2zxmXU3HmMHkGpMZ",
  "key14": "5DTvvhk5yexVQP5mpELVif9YQb8jdE92SDwyHAqB7HryygDD1o4E7VLLMeR8Ex4Qtri2o2LqutsqCW5tZh8nbUKx",
  "key15": "2bD5UkaKvdqEhtpfnFC6T4VnMv4LzTCDPs79thjNoCcezTM2UckgVivzBnSEuMYxS8ctBY6VETQanzcBZnfbosfA",
  "key16": "4k9MqLipuaigFDTHb1mbkDx6vwXNjS6g2EC8pcNFpYXvNsodbJPvxRQB9Eeta6fVge6jV1Y9tPMVHBK5rTg1SXUJ",
  "key17": "31pQYvwvTYp6oNkEuFPiKxcLERod4YsKd1g78Rz58Ns3jD5w1unmjfCaM1fdT4oRgMuK6gzwQ1fagZp6FWdHW1cT",
  "key18": "5Rd9CZfiPCvAJhdA23R1sgHzganTSRzAtS2fs2t4qmD8znQbFqHVELPjMfzLWUkWHMrrgvV5JqTmN1FYFtEhK49A",
  "key19": "yS4VY7TsjfdddTMQKuisYKkbq4BgW8bd3kUCVoMKV5eja5ywQc8oUYum6esy6J3ckevFije2Ci6BuRYU53H9UMa",
  "key20": "4Zgh6gLD2WHisPrxDfGnk2aC1M7GKS6YcrgNeSjGpkwp8fkmDfndjT8BcYqmfRUe1ky9AYb2gT2r5asYK8yZ1MEr",
  "key21": "8suhEYd7BpiokFqvjRuBLkhB5WZQG9rSUYNn64GaAtMNzbLexDG1E9tPModbjNPL9rg5539bXB2WkiE1iWPTzwT",
  "key22": "47FfC1haHtC7qVggx8pBQkSGzwsggKcXsRGkSdHzpYq5bbddQ5xj9yQmH29KMk7gj8WW2oXnMoDsBhaQTjMQ5T8H",
  "key23": "5gnUafZJyqQZgDRmASp3ZspgzYJKF3UEsZN35qwMcwAvd112dpixaEqMS1yYLUH4QQXYZ4aPmzJYZrP9PnBm2MSm",
  "key24": "3pAUNXMYqLKLkMgYdtdm5MHKt1FRuSZxc4rZW1UMEJ4HeaUpMLjbfT3FvtSmegQwK2sRMg1nYFJoMEX1SoQVcGzc",
  "key25": "49abiEP9m635W6YMbrKAdtgGuitaUQiQN9oa9iB6kQArH8m7o32teqzStGZCZe7XXJzr4JJdgeh66ZNantW8ZHED",
  "key26": "pDJSiQrLvFX5xajzLvmBZqLaDrtE5QUpqTWA6sNVBXNF3XzNW3qRyRrzJgtrB2QJRqCwdhDPVESYK7PPkh4gGRf",
  "key27": "4CvzHbrh4cib6vBe9NDA7nmMXpjDhgNeApgfKbBABS8hpzECgkHStxYn4QkchDupwJdrpovn4P4MYYX9fRsyFSiL"
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
