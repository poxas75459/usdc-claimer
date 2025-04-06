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
    "vWnkyHfWpoBrJkyV9wxkPYiWvuFpmQfZciLxmsPEuzmhfqVXec6nabbGFiFpDrhHfAhM8U5DMrwQW9wpMCdg4Tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p2Gwvs1xkFLzTQHUJSxX5sHEbNNzMHdx9kvRbdoDaMVd1KDMsfmsceRoe7ZQFYexD9fopHL5DmN3DECe2hv6yzm",
  "key1": "4j1kaLmwHyTyEBohcq2LnQU8cfrSSxV1PZpYcwDj1H3judcw5DJacmBaqn3uz4TgKrGoTgsbbri1AVdV64vE9gZ2",
  "key2": "wYbZ6L6EW6MPACQDSBmXZbiVfL5bNAYMm3tW1VYddVpqrovkucKLbayxmgcqRD6J1yXbWYHSqrifpFsHp8DomoU",
  "key3": "2sd6dympB1B6BW7aABPTQmLm7XMoVg2rQbjaLJXu3cdbVPbRy4BxTxvGK7agmb7JPCU3SdkR5X1BoEBNznonzieS",
  "key4": "3pF7epcB89mrk2PhGPDC3Ta3mWNzA37jx71YH9xk3XuCLEEoW8MGyEPzueG8HM6gGzUjz8t2VhLHFs6iHRK3ENd1",
  "key5": "DxyWCxsZLBKj8wEwWbiAFotPt7tMPeeoryM3DLSZYqqHGjkjbEykqnw3ao35TWXwryuBPuwXQ6rq5BEzJfX5TWF",
  "key6": "noGArHGRAyNbyEsG6zAg3xfuJJswWDi6MLrDSvN52sw3VVhSHHehr2JcCLkZcrQHWzsYYkABaK21H4GiQjyzCq7",
  "key7": "4StY1yTSYpSu2Z2YksguKCpf3JcKwp58dxcEVFBQiamQqUn5nKpcJwTs78CCWZLWGj7bk6FYcx2s1dhYxKRDqwXd",
  "key8": "4gJVbNy4wY3bvuiPrDHJp6Fap4Gm9fiVHDzQPhr9ZtGPZDnw7L6wr1CpX7whpUt9jakcYtT7NePuPUWbzjpCWao3",
  "key9": "3errggSoN62Rmj4hxL4iRYhmqdUwv1wYeKeZTUMLcxqGrbDdHnWqSjPhnNtKZhRquu5Q4F1BU7wBJa5VjWLFFR4Q",
  "key10": "6vnAuEPeCFxXqptAK8caXXpKnkqMedaUTh5gWtrmkcHAPoF44wXnJYicjkxCu4KoUHuDaogw5hCPNpLjshccVjA",
  "key11": "4M92a3GF1AeCMP7yWvmLMDcua6V7Zz9Ks5goDvfWrrWTUSxYdQJaWa1Pegm8WidvMkwz5ud2jxcEwCUWJXLX1UMY",
  "key12": "5QNBpCVJwodJDsWc3UZGNNfXNtMMJcdpRdc1DMy2ej2vg1MqKabSwfieWJEDtWjYV9jHywF36QsKVhDVAameAztC",
  "key13": "sW3orufK3JJFhEpBhdtEQiDrHbLLF17wfpYHERSkcQLqTnWdtLZzGH6s89hyGmSTYj3Rg3qngSF5AvNNTgyTCfk",
  "key14": "3cyCmCXMniTGw3MMytJJsAxMJeynkByzbK8GJDY6ChADDjtELQEoGbED9rwEZ36jrCj6TeqB5PrYppt4xRDwixAD",
  "key15": "mtA6r1J2iWuKjNo6V1arzuYBZBZjRxqnrQSvP1UY4ZjfP8J2uWRsjBEGuDyk14K4aMLjE1SCYbuPvLFQuXQHWPN",
  "key16": "H9mb5jU3wG1ajst3ydcHKqLu9kJCcgUDnT9NtGLPnPmKVkbh4K1qkbBhJ9SV9jxHaGKx5kVP1MWkVdTvhYLX531",
  "key17": "5E3APgaZBEtxmz6NasoqcKmqVLPc4usq3EphDXzbQDaof8X5PVxBJqY1REwJWK9B2sfNWiFaocxRWoxZPbZ5iieF",
  "key18": "3ugiRATyjuKMCaQ3eV8CAJkw5g3poLFjuhCYsgKa6XMQEhiK473a3Nww5PrwJYeKzEQwQb4mQzj4gwKQPR5iJbxq",
  "key19": "42nrA1B7hd1ic57do3dJexC7hgMpL1TD7P8gDbBPX5ky3iUYRowxWq2ASQ5221nFsL6zAdpqEprTQ2Cbc2Ndgygs",
  "key20": "VHucSgDzTEd5FnL5QVF9Tcyvz9UrZry2xCBMQ6mQ317VewFBCLBBRrX1TZb1fZQNhSGQSwYHUnobX2mhBPv9gYp",
  "key21": "4rjUtqXRxBhvWtcjk3rvadESNCkDJMeDkeUNck2FoadnosB5vCECRFA4CCfH1GzpiKX9c3tbkWTFEpG4LiH8zv6h",
  "key22": "apaE3AT6FDY1pWi6zbQ5ZKSH3RF2tiNTAPCPFB4wRNcWM6Dz8yhdUxy74w7QiQQZNyhc2mxUVBD9yPyncHXmCWe",
  "key23": "58gQ83GgWPuA42AHYobDWKCAk2wy3bQuR8pvjf1jKrDKEqp3ayeqekoaPzjFfANz6efTvDJRLguN8rUbmvzLBz11",
  "key24": "yLjzgMYjcjvTccrwZ8t6LQmXzm3uqmYdWBfoaw9FytigYbttR7HVQA41VmHGDMqKdECUxzJy3nAdxjjZ95dQc6r",
  "key25": "5aduqJDiSGTHyHGSEhoW92i1R2LYaACYB6vKaSauYwJj5zg1bzZCFgux2M5h1de9h4cU1RfGUCidLZuHsJXWiS8M",
  "key26": "2BHSkWiTPZAS91GaqpspSLbzoePTYm1LRAbFA2AkXnA53xzue6GA1HJZMcL6La2RLKanQyuceJfiRnwgketFcKuc",
  "key27": "5fbufc2XpUWX9FGabqzitANDfcdSHFVXUo19MJr8yoEWruhAG9qcVMBzfjgsqgckxhTr83xVt1dXpjuQ94BBpsZy",
  "key28": "4wfVdCZgkrU7rzAjb2uk3SNDikPLA6piAEWb1LJU6y6dFQkorB81Sf3AaiujDdVtw1ysPiokAdYxQV1kDLuAscNU",
  "key29": "asAh3QtJ72LKVvK58LAiTsQbPh6i6brvHV6BzedGty6yg8Y4A3EvyRZ6gr34P6pzjNHJR7zhoczQpqaEir91pD4",
  "key30": "3UP6kyBMMcGWy52q9V4BnZWMDCECuXWJepJzzpLGFfACZzpvSiJLiYs6tYoPZ44r4JPEYSTE7TCHLJMJF1jyc6yZ",
  "key31": "5y926KDJYC5xWf9s8tTsHjV2Jqi9sRZeyjvyzNjQSWkS5ngpnMnYswBcmMFhxy3gdAp1PtxgxpeLanDhNa7GfTsx",
  "key32": "5bnn4fKCjpn7PiyoiJxef8vwzS6am7nrL1Zg3Jwxixf8bcAGMumdgwkv4R1Nv1i2Zzr6ftaCfsqRLQqi5xh32F9V",
  "key33": "4aY5Sybsjfgfnt3PLsZ5MfaFnsT7YLacz1sGsgWnyu5NicJfCV1UVes7eQJJEreKHVVmixdp4E5x7DGJJPiRbHe9",
  "key34": "4STD8JqrkKSKCUvXwv1DvjQUW4B66Ac2zqaj7N5ye8XxyG1QYyZ143G8kfKycbM8N7eJcrwRZmHtFdruzDKm3h79",
  "key35": "5cE8PyZKVFFrVqV6mbXE4BssSp4EsiaZCSPVy4gCig2KkjhrNH8tFUkeAg13zBgzWXMq1FEt3gd4HrAz7wtu5qfc",
  "key36": "3tjphp12XozxxzCP9pFof2PEoLNaMDYX57VYCXxEFCbkYd4A6uK6JXdiXAyjrN8gEN41KARk3pZSBhwWL83RUfTn"
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
