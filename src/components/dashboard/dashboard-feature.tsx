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
    "4nGGZkqTxyee57QjoVo9WJVcKBE3fsDj7PnnWf1Q85jx82fNogDBVcNmWSttKHz7DDaAD97KHT449adrij5FQnPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CUaf41TGXPZAL3DrXZDcUVefjqYB8AbDomRHXavU2qMgT5CGqG2R2EA3rFcnatjLCjnCuMzTZH27YfA535zxsy6",
  "key1": "45pntKvep29eJ7s4BnjGZUqnzCdsmkFjPYDazW32KxaS8Jvm7hDykk63bbub6wQ3Yvq32BXGJX7zyjsAM3XaXk15",
  "key2": "3X1JdT9jAp1rLY4Dt4jp7avBxtWhSSnDhEB9RHnLJaqhZRxavUqcpmYJeUQ33X9WmV5JzuJQeACgf8bpk8zpxxBN",
  "key3": "3RgHa7J3VvxANpGqsB52SnuCUwk9uuW2pMUgioRzcTLSWccyLzqAvJs7AU6YBDjJsqjKVQGS4RkuZbS8M95UB5r3",
  "key4": "NL5Y8WSZZmfY3DQwR7eYtkjVAdyhRXiH2gfwcWTnRKERnbDDrVxTswR42DaCMHzhXFZjz4bHYu2Sm3eF1jmNCx8",
  "key5": "2yTYZwiQTcErhCeaQ2YHLT5f1MypN3X2D11aMEBkeo8asEd6eQUQm75MjMvqng3wiWNXJzJDmyEf1adqJgqUdyv3",
  "key6": "5ZacYhnUBCBEw4hWFf94DxCfy6RgNCT9tnYVu4Zj23vSjyjRhrTrKRtREBDm1yEpYMUKAT9k7XuuywyJdauqmRWG",
  "key7": "67RxR3WUuKujb5R6AQDwwx77BKkugu8uzQf5BLPSyBKCmCyea9cf52YUZncrrk4xc5Qkw5KfKJryMaaLTKbC3pj7",
  "key8": "2GJ16iLQ2G2o8ssAUWrq63PXzjUtwKnMsCkRexTirsYckUF4PnuGTFH71477X4oqcLzEPRzfngyiwNpX5L2t32J1",
  "key9": "3nJ32RGbD4uzLfzFrGH8RbpCVZtUAuc75h37bJXhr7ji9MpHqrmVvsqS7Ye9k7oPuVsYoGCGsMwMXkT2Ck92EoY7",
  "key10": "5TcdMYU85A3exCGCE1LST5H6FZVdUApYHBwVTcrNvaKPve33NHE7iyvRGLBvVXAN1c1pZm5yMg784kHAFQtha4Gd",
  "key11": "52Bk1oii8y6f33Nto3f7S3VPkzDUhGr4GWsvM2YtSw8bEYG3X5usrEfkUbb156ak4TJuWBk57wqZZwpmZwvm3cKe",
  "key12": "2gt15LuifWdvyNzvs4GpcdPU7NCyz4aaWhxtQiPDLLACvDi2F84D4Euvaq5uGPeUK1PPM9KtQFQVmtxiqaYafUz8",
  "key13": "yaVaJrwrggqY5ggNQt1GzRek6BizgoxMdxdstWmoEAkVtTNXtR6EKVgtoPVjWzhd4pNWtPsRdqWt9xMUTTPSNgC",
  "key14": "3tJf3b3mJSEb6u43DHusonnz5dJvQQhbf74SNiM5u34PZ8munrJ72v2SMGYamThPXyDTYogAQvkJz9Fw5ZMEk6TR",
  "key15": "U82qNAG6zUdQYgPKZD9nsMqvwqwaVQTaJYiRJanhvVRSPwjXpq1PCUND8JFJKCdoAFaWVZ6ppDH8V9h3Z8qYoPz",
  "key16": "1Hi6U26b1Lyv6KQ2x7Z6kacgAHarufVWjGFK2shvMtHAeiTrEUNnfE2Cz2bAjEnVg1jGD6N3p7QZu2wHTd5wvJP",
  "key17": "4YVEAeoJguheUJAXCzc5kvrWuf11GDBAftRZC52t2FnFtGWtV5GRbEAYRR8ueYYasmyDDFCZm8acXZ1EMw4ZtoJE",
  "key18": "64XkHZaVJJaR4KzfYcanoLhhrvkFto1662zTX2Pbrf5novJD5zFmDSpkXGoGN65E1NbgbLAMhw54vZBdq6PyTde2",
  "key19": "2kbYUciwzULgvMR3iwJ3N61EUtyte8SbX4MLN8UWmwAorjannVgLCWVoDk6TvaU5KX2UewCyJc7REdnaPi2QkYcm",
  "key20": "21oNxCTAg188oxAUHE5wfgXswFWFbNGYyp49cRAMwoSMys1cyKqphG3FUd9hYAvswnYJcTJKqRmzTGgnPUFAmx1h",
  "key21": "5BjW5S4VkSa2CUNeG7cBeEFu3yroehykpkmJNwNncfPvMdr2UPkZxTHvjMbQrcPFYcepxufWFgNPE2PqZqgAxpAW",
  "key22": "2cJspHfTHTd8xLFcPJuWgnF3N9s1pY45jtDFhQuSVtFeG8PZWNL5mcCnqKUvx7p9L9WPTzhsL4bHnLZA9PoJTKPE",
  "key23": "3bpqVP6Doztf9zvQ2fQtyBHFkWn6VV2zsCyWPHtRH1YNkSowGbsjkX7eotqodKHdQyo6NVn1ej54EYxU9TBeDj6v",
  "key24": "2YqpouiRM2cvJXgdppNHd1RGg7bNAnYHKh935haksxCQqyUBXD2cq9VcbrK5xyjtxft7Sv6Le2T18F5MTKTQ4ucA",
  "key25": "4tLu5RwCvKrwxd5kuizJSfJZ6JQmN7bfNJs21A8zakbv6xWixfffyTAN18SwbpWxT5SznMwjcSJib5a98dU85h9X",
  "key26": "5dm8zyq8vtmQi3kXezjzWdr5FFu5BqF3zC1vwptQqCfQXS6L8JgFftWG1AykrxyNSmqxHojtUPJcC3ijBt3S9KYH",
  "key27": "4apcjymJoxZoCi681ZmH1cbciQFVyzLY72fDr9sQJJwDRR6h8ACHrk95oN6djaCytDV8FkN7w6uZvhKPYK1GZiCw",
  "key28": "5Zkbmtjqrd1qYTYANenWEdUnm2DonHYuhfmNLe9BePL8VKWLHSmAYwG417d8nw3jqbLDqNkJPnoMDUaLgDP5ekTM",
  "key29": "bWAVjehuBs6FtNoZzWutksYaH4ur5dkaAiKa7N8oTBNSvsqkSPCLH3EvsnfBdBiV2fv6fXg93hcYqiRoYYLAQuo",
  "key30": "5WxgaPemShi9JCW1QU2aNcfvoz48m9KTRsH561NcJWgATixMXo44zGs47GsWGtxmRLMM2f9teyooCdPezfBVu6Bd",
  "key31": "56xJtH7qFUXpCPbamgqVfKF11DJ4Mshz1terKmYAQz3YeHoE1AtMZBS2oip9cEJbfKe9xpJMHVqR8SiNhGxB3Exa",
  "key32": "5UMjMsXya7aEyRenHG6gPCBGL4TjeMccvHPJWLkbRkhfMgA7nykUFkMs4Fc2v5kxFv2ATHDHpatL4QXHFGLmXo2X",
  "key33": "2pZBEeVMnK83UfsBRwqsirDSHAvRAnqTN1HjrANePKV89oZYYrbSjJ4GfjbXUfNmdm3xy2NLSEvAA4wAjmgHVKtS",
  "key34": "4wK1EsvMJds9VmMiuqFrJBpCpd7NskCeFKuSQxyC81dh4Hzx9AGvAnnuxK45RJBd6ZDi9G54oVhdxbN1MhwYP8B9",
  "key35": "5U1uzQogjv6Fn9qx2hggEgzeCHekuYNV7sgU8v3e96amF5XuALUJ2fFq5kmMqp4bjMp4hcCM3qSW3AYrXK4mBWuW"
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
