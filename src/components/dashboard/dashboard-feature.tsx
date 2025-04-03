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
    "4pme6JHqVhPF4v8Av5dNnt9SUCcBap2qKyBaxaQoQeBFE38cBcH736daC1M5G5yEbbZK19tLZQHoXsVrb1z5iHWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9SLnyqAdzHq3qbkyeTC4xUe7VkEJgHQZ93PCbfhkFuBpV4NfKaKzaSFGqas6rZVscvfDCwYdo5xBqWBuaTpjru",
  "key1": "4b23dexqN7oDP2RyMs79q9HebE5TePbD2jiRpnbhcZkzGY6ATsdHzqHX2wpHGexMR6X3QUMh3aTUYuqkCNxErkZt",
  "key2": "2faU2m7PZsYN7EfmvYbVs5MMkj49xaaTLXVMX2gr7g7tRB2x6kMYcERfejTKoQxRmXm5vcLmd3hY7EMgirGTwy9H",
  "key3": "4TVhUzoBKXa9FCWWXfR5MmcCtTpwMMz2Y5WNsyZt2n1RsDkZvrksAeD66Q4xBcxqbS1e9QPwjp9tRARx2ozTYKNW",
  "key4": "xQ6TDkhrLHFWeEMCpaTiYCe7BALwSAs2yembMiUZxWPhLb1SsjzUUFr1cgv41xcbpjAe8VaEnnUQHR9orKom4tS",
  "key5": "439MsasfJxDWwzTxNyVyzUSrqGW3PPSSak2zkDSrqVPEC4AiuSUdb7GMMpbeQ3BvLXLV5NQgWuMyhgP3MGaR9Gky",
  "key6": "5f9zq2c4ajVUyHPAmCVaWMBUPLt82mVK7NaCfjNJ5Xk5cm9NebFfAQzYge7JXgVLtufcXBTcJVgV5hK7kWDVAyoZ",
  "key7": "2kC7jWJXLhHbteQBur29Fp5ijUAgFwK9wjmeyr9HhrQJMiARUGFMFc11NsbY4kxQnWTqXYVRK2e28BUUsFSksWd4",
  "key8": "4JbaRxU8ejd8g5CENxWnbS1v1RgES5WWKbPk5FB8Y7g6MW3iDpTpN63cHvPHxp617ohzH6oSY4wjKbBguzJp7QNX",
  "key9": "5HiixfUomSkks2umvFjisDCxcLRavV5ZmDH77BG2gZstZHgVEBkeKEYUsqVDjxJCWijppoWNvjgNbq8YdfuH5g1c",
  "key10": "w67qiY6MA4dNe8wMg75nKqeKY6XVjvJ7BSwXiP9jkGvxtqdkUY2799gMh7HXNVQqXkZnGnRt7gaY9MzJsqtzRka",
  "key11": "5vubuhxziU1UdVMoykLsNc9AkVzp6tHaPPi1XEuL6sYMX5CGsgeGQfuC3cecujnJueUob8kK8Upuk88MpRHCMB3u",
  "key12": "53fzs2KWZpRjQgaNy6UVex1Q5pZegQjhUrvvSVkW3v4KiwPLY3HcXxT7K6fQj8GEUwzBDFLjAp5yWSnWr5Do8sqd",
  "key13": "475f2jVoKxJcxg3JTTRBfWHk4CDVZJCdtvgtU2KGfTdsirLqHT3QQkmjeCEH24mep6EywQS8AVeeZ1ccq9f4nhep",
  "key14": "47iuo6e5U6NJHFKYB32uTqAcE7UzDQLW2dtzxAQabupgpHVuikZ36nZ9gkx92mc7YF2pcpS4JCScJ1PxNfeGRWyD",
  "key15": "4MAK4BwVP7AGf2S5Fuc8p6SmFi7vLWLwjm1JmV3pHUdvvUJxvQYYHKahsto7Pt9AxB7FVSK4ReBhokBKqYx6yMqN",
  "key16": "4Boqf3HURWeStiGfjRWuwqzKrA6ci9yysB38VF5ccwwsLAH8ePuwLmZ4oRDGSyPtZEbmV88d4E685iHXdRr7WrTR",
  "key17": "5p8V4nMt4agpZGrugkcjuYDH5uZy5iE1GXXSJP7G2XueMgiWtg8gTGJE1gPNAQWQNivjybqcg6d8c4HjEFxJhkDc",
  "key18": "5mYFh2k8Gq8JJqGceNrPo6oNVZLdLuokkah92qHr6PSqbuu9UQ6fpunu1uTVUiKFDYUK26H5stUqCTN7wqFMgKL4",
  "key19": "5dHW2M5CZfSUCYMPC6rtLZTNJ43UHdjWhQv2CcwSry11XyJuJsQG9gt5fy3bFd5xcuXk1pKAJDxgAYqiJPnv7vbe",
  "key20": "3UxVbCuR7fRT3sGpzmn3UuXErEoVPNtB5pbvzRyeMiRa3ERg2fk5kkyqgryUUn2RDUNNroULdvkVbDo43Ggd4TjY",
  "key21": "3oJ8yV25uZzrR62VcVXuW9BkisN98VHvAEqXEpNCc7xKRiZcMtgQYF1J7TQDxJPwvKnCZ23ZRkv8YTPnLy8R8vzG",
  "key22": "Z9FyvHtXA75YxdqHwcHwWNoDBw3v5xqvWKThXcu9yWLtvf5EtykBii34dK6JLxttqSD3fAjAD6RE4J5f6PXYLgm",
  "key23": "4uNRti8iBGUwd4hkAe6R2vSQpcngoLXzgsV1p2WiTQhjc8g4yffHitbE59oRbBcFNfcZ3Rqxcp9KN8EynoUj88k8",
  "key24": "4k4GxT37UwLRK5hwqKeqqHKDEfuQHef6gEqK7nBKniLZcVJEpj9Jyk2bVgFtp2e2DoYL7FJbdBFScfd3Zg8Zknet",
  "key25": "4X7gz2QcHVBt4nsZ4KT7ku3tQ5cxsr4G9csPiMee2qHj7oGvzrh5GLYKpW5QUS9Ge9wrKww7f7Pn2v9epXXBuWV9",
  "key26": "5EKSzeeNnNRK3sqksroK136w1oHC2as2QMGHyZ94Tf7j5hyvmzEWRJNMjTJf5bBcwK64cWpdzAHxewpd1ffJci3m",
  "key27": "SVSvWDoJtnpKeVbs6ja6yXvmZH4EVQ21BFW2QcGTpYvZ4yrsjArZrovbeP6RgLHSu2huhwqoK6ECBfPBjmhNUxQ",
  "key28": "5y6ciPhF8JcUUYfrt5udPiSLQdoaPLDY9uvpVjobUih1K6vXiGinLb9kibcZQDtJoDvftDZENtiuP6rvwJvcrbW1",
  "key29": "9SnaYHceG9RR7WnrVnYPotDnZr5HXHEMBPgHXdymRiyy7RWctXbNMxVvFq3xKWumbkXjrXVByiSbM7bEbDu2AUB",
  "key30": "52xpantnMnHirWjE19maBRxDckEiNqgjbtXjtRn7EAomTj42GJJ8jQXm6orUPQK7bFk2RQ8MSV6xYyXwaYpJdjoY",
  "key31": "2mScmJh8d3CzqxgBYBbmwUVvg82p6QbmNRazEicf4oQdMc96pYjudu3VMJCzrmSh2tUjoZiwr4TbLF5w1N62Pkja",
  "key32": "5iJHFniceivPFV2YT9ySjr6kKHkXay9i4HEMD2BevNMgAQ3WmGuxKFG18s3aKjhoKXFcvHGFYTMLz2Ro2Nu4cnsG",
  "key33": "591fQ5pWvFMEsx8DEZr2RKZPfLhArHJAZw5SeULwr22Ssk7tEeXgZhU1a5DsARWv2BMCHFaVsSRHwQatWpo4Ln4q",
  "key34": "5BQw2wovXfuXpXU6B2ncTWZgUXYZX6pQL3TRJk2q69PEszm7voT5XTF32RHLZmK7gfBH11tpfauypnR7Gbup7qkj",
  "key35": "HecyzBVEzieGybAZhPRKWBBAPU6FREJXNxfeXssQJKqYrYLt8r42CgHFJS6evEkZVWXdbMhJJfmhaV693zGJ7LF",
  "key36": "5UYWwdSiHvVkArDRUtb1Wv5sqfkYrZ4maY4BNNtM4Lb5qAa7L3yEB3vaWegFjexnonR7gQZXXSZLikyutZVhmiSz",
  "key37": "23E9uf9nC5zqfrP3QGPXZukbybUaBxqaFmzCfbxc4pUbXGoF6eEDEEfCvynp3nUKpDQ3szi9YULERhnQgUZgkLSp"
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
