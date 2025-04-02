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
    "DwyJ4eSAuEVfe9NQxbfoejTULfrWQVoExYLh3eNX7zwZXjWJnaoNcyxxnLXaM2SGU4csEzgoQk1et5CmtwfThDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A6JrirRbR95eELfVkjpZKbFCBTyxdsrHSMqcopuzyEekutvmXmYjFTnCehezkmQUe3MFwoPGh4uQH4bY9UA5ANx",
  "key1": "4y7pyWkJt8mcgLYw4tyAMwbV5fU29c4rQZ11Xxqjv9SiZLB3givkqcvsbvwmdEv3FjxvRWzuAr4iYr5SQYp1mc9w",
  "key2": "4ZV2yj1E7ATma14uHBL2AZnw7rRBUEPUWSXKBpPmMBah9NBDcd4oBtiFRy2cDEDrZvJgVCCPkDUx2gvwLDodGrzA",
  "key3": "TxfmmvYkyGbwQKJNNdhTzuwRPCX66FWWavGDNFLGx3XCFNJaKoQDFoDDvxRJ8T8T1JGqGSdBqK6UJVDCcDpdWfT",
  "key4": "oraVYgKY4u8Qdejv7f6Sf41eToNrXrdR6L5HAMrDLkF1xpxLsrSgSa8uF9ymE2cKRu5cNDixLJLkwxW4i2254J3",
  "key5": "DYeqyNWLAvcoaLJM3CqkPXG19tnXurDgjZ8AvLLZVzTAjgZxBoovGvgKWMuwNHg37nv7ZzKeBUBUinHzJ67iGnf",
  "key6": "x1FJdbPgx6HMN1UcE7r6pYWeKfg5urPGLekfw4BhCHZ3nfmn78yaQtgFcnFEfgHdsVmtVg38SR7RHv8V5dcXBGb",
  "key7": "2DHcDZzZeocch1tVkqY2N7t5tQBzsZW2Subd8guRY1VAX1EZoL3PwLmAhFR1kqKRJNK9xTW685svyo4iWmRz71pd",
  "key8": "3MJ2Y31W6bgm8ticmYruU5qrMwtrpKcXnn8rUqPnWCQJS9ZqNE3gBkTcTGmtv2cvCE2renLMEeqzuKss6gDt7Dmm",
  "key9": "3axkC5CrMJhFesu5sY72CguSaacyLjGYu4TeLDMsHiC7xPS96c573wbKjXkMTY1xJ6oQoHxFRk4TcqSasakr438v",
  "key10": "2iQDGyXUUEdaFdh3JrNUfVaGuTZCghmn7wSb1u7kpWrUmdb8nn34doxAmAiLwK5vYRv5SaYzfHxKEhLkimtQ6i4z",
  "key11": "2fm9fKM8Z4VRZ396tBRYaWKNfe34KLJKPQ5yrsojyUSnQaDnwaU1Wakf1iLDGzuQBfwYoRJe8Er9VdJT9DfMkHi5",
  "key12": "d2HRkPugXyjcdPewsRHnoboS6nXA9CR4BJ8xrguK5VcAjFRNrkU6NtTN3oiHfadLMWpibNdWq5hH6hRko4SiytW",
  "key13": "5SBQLnyLPh1MYNgopGvSQSiEpDadKnAaYtUthJrYG1HUz3fSDHspnwVojS2hSPvPyyRF3jZ2GuofnjfUFkcZRtw1",
  "key14": "rEXrbc6kbFd3oka2LL4R6QomBjhXdy4cKiLh1Pa1S5VEYN6insWaZZYXaWjx6XL6gwik2obDcqZyxcjfg5ZevzA",
  "key15": "3w9TMWefhN8JkUPFKFTn1z8K4xEHHmW2Y2h3U2iTjFB4uWec6Nf8856mxj9imHFNBvZgC7XP11kXnZpeoPoTMLJA",
  "key16": "3a7PGukQEbni7CcNJsT8zVyys69fUtNp6PEXgisBs4b3ruy4tMaDWF5tPu2pxrLy6RQue8Z9c8XEVCod52hGd82Z",
  "key17": "3PDMJFcuAcDyXDnhbWdg2gYuPikcHyvL7C1AQxoMQjvy5cWSAojjSCYR9axFn2kGyWc4JndpfRdDFSncTFtwdrWu",
  "key18": "2X9MRxPvHUz9GnbowtNQymXNLGPHhUFqAYPQHokipy8BiMZARCvt8p4pTkK8D7WMp7m7rxw3VhbM5NUhj4pFU9wp",
  "key19": "W4pQPeLfchhmt9MyWVBB6zV534fCa4DvrgXe4Dk4uwWLmxQxYP3NjjrQxmmnYdrxFsKZNVZ9vEjLVCmF58j2CnN",
  "key20": "5W51CsSLJpgLkY45UCTJiZDmoHtGkDMheLt8arNW7tq4NxP4dttrEXfTRgeG7SVSS1WBJVUZUcBBJHT1DnxKyuh4",
  "key21": "5Es2wBx5EEJM3QHVhnoYWMSQjs6DuUCf13kkU2vMPn2aMWi9YkLWhvi6qMG6LKrpM26wJ65ZQZXJekyFsTHLu7po",
  "key22": "EocVnfbaUSYinARaaaj9wPwZwNtnCxuc6uwHksG5G5XKfxhMbU1YXzJw3rs88svSnZNTDgMEzfsKPvPz2nM7L5t",
  "key23": "41odXjNDXvdnJcWbMy91hDBXNVKNqepf5E9z18y6RtxS6MwndgF6VmEmd3mHY6aLnBJTbknXRq4WhFpyhkbFboMx",
  "key24": "LZyFdiHeMhg6oR9vqon2WXsjnPZbsBr7EV9HZRcyRKK15uFKY6nM3TNtHCwPNs7R2EWXodMWMS2tdSZ1yEfLpDL",
  "key25": "2sWeDsMQkf3DsdwxwdcKb4gpagV5m1MKBSczug7YCfwnacshKFF7k856x349dxA21bejb3JxQiWKb9Hg1GfmMZnm",
  "key26": "iTnvzW3ZR682Nz5qQM9p1EZSfmncZYpde24sv5yuLrZ5CU5kjH8Jf6NPEvonVK675cUZQUrvZ3gxTcV1xfUSTGD",
  "key27": "25YkSnS7JVqHNKHxDHpVcjdvTtVyJV4kJ9BKAM1eUH7ZBogFYdTVLYkBsfHBuMkSfhmzg5WRXHNLMqzMoBcCZ2Wo",
  "key28": "AAyd4rQnN5Fcc3RuBQAB1d7NMqV2vbTfozKT1Uqe9EuGkeUJuneoxavXfVixBce5FuV2Y7EkJT5PkfembMUi2JP",
  "key29": "2XnDk7LKNNEtJPSXpokySPPZ3Ef8cbr5Dq38fjqymvnNRd555Ph4xfFUWD8BdjpbnDvZyraPKVN8uF17LHgdsjBW",
  "key30": "67ap3dU46CjH3E8CydUzQEMX33pBzZfWtnGrKVqXSHTcxzd1RxbS1ZYrq1AZG5mRWjXtTouLbyxGAjJXq3LN4xPE",
  "key31": "4dHwvn6U2Z7KGSc7oxG76EpGy4Fzi5UxcrQSqtmkCeFh4tWqteZxZ3VrH1CNLbm8kjDuC11bwWmV8pQ4DbPa23X",
  "key32": "3waui5e6UNUfpEVu8Yc4TyG4H1SUz1kVnjfutD5EgZSBQrB3ugm2uhQuULHJLHeVnysTMuL2GX1A9Eqo6dFf4xPS",
  "key33": "5E1iF6MqLBuPxvnfv3axQeYDWzWzuR4ZK6RAXe9E6uXE3uW4f1e8289QDfvLaaMARby4oVTWTbpQmPTARkc8WR1n",
  "key34": "YXGAYPAsgk1sta9esvhDfCXQTvQz8J95Dd4MkaSobwT3xvYvBpxxKewNU9rmeeUcxddQfRtVx7pT8gLbnEFaU9s",
  "key35": "ooFTnvaeh7fyDnTRbtpTGyPMkp9NkD9KQSycAJuBoVwTNzCSWyGaTdVejmy1rVBFG5JYzBJqFV9ZwHqp9efKbfh",
  "key36": "5PeU5WheUYjcLzmMX1mJWPG3ehY97dNhGVN5TF7A2DDULh9PNBPFtrzAk7Y1EoQiFAiiXaiSk49x6WRVUTs4zuQG",
  "key37": "2Q3P8wYEjfvjYQ4HoXim2ggvUraMMapgXaUYbPiqabLXhV44UatBxXYaBsN5BUr9xZvzqQBoXbnKZMtzdvVL6Xmo",
  "key38": "5XTFnAxy2rBMihUNwg1ynF1tM9FrPy8HBNkQtSQqstdyV7WwyBRNzAajDEeMr6Yh3YFGixqH6rdxYei7CmXKDFPo",
  "key39": "5o2sKBGWVh8XoZGEujFRrXz7q5fwWcJXzroSPzec7QbsdmXFifZCxDK31ExiU8exYBHKgNdJZusDaguATT1gSUqY",
  "key40": "NZwAesndTphmJRTMuyGG9ASTSosyedjU5xcYU1smK6HzZrbm8dSmPmRRrAxwK9TxviCHTz6ovYZRCdP8qTsuAf4",
  "key41": "5utwKSZdh75HDg1482Z9ibo61BZxVNX3EPQzyWShojtWq3jjbkoH1BKzUjHvJXPx5NxBqYRaogijQPu48vqUPwnG",
  "key42": "3EJjjPBhvxqhb4JLkAYKtdXirzzNjkyML3EKRBWbfxmPpa6asCHqM5e6zPGYpErXJ2wfuaooyE9gkzDD1x9voagh"
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
