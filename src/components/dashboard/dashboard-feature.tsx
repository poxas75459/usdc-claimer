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
    "2bGHWjq6nfuMs3ztYsXXdXgq4nbXS5AHzfdhcwg64PDUfqRhBwcZiBzV3E2Q2ceH9R8EobMc4Zwr9BggXRiayTzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N5mC73aS9MxbVuyuav3iDwKLieNP7EBktLwCQ8KDFTo3kLRY6FW5i7PgFyTdd7NSjXi5gBBdvcJhgxcsNpiGS7p",
  "key1": "5nAt3Xx5VPPP24SE3FfJ2zUZx8vKvodnkKzbtvC9vPc8TZggvLRsr6veiJMkiLu8GJCTZUYEECFPDjgeAhREgrxi",
  "key2": "gAMsQGXXYhSbXSbNT82kXh8Z1Vi8aoZZQn4o4bToTKfJJxvmufR5dtRN4sCxnm1ZjpJ8Dotnu6ff2gt3SSz8W2M",
  "key3": "4SbpyeCnKP4Azg2tnSzwsruext5iAicnnbNnX9atyr5WG738ytCG7aGKda6jw4Lvs6X1LLGNZgs5289FeZADpmxF",
  "key4": "2y2ywg3MZM5jB3X8NuQ9hZdP7jkdFhyrqvHcyLLdFpVrnZznnrcRVawVNJvGFad5cDsirAsUh4rVSXkVU7gVrmMt",
  "key5": "wYBv3D4CmDAgUGf2sVTSBhsnTb6c55xsdWos3aWJGkrSuLpUkp5KYHExjvj5qn8Sk6zSRK8JSLT12wVAH9R5QoF",
  "key6": "3vEGsHvAeC7FGUHvfDXjmc33t9weJBRx1Tj4z6k493YsCMFaP2TzU35kjMKdchLV5CBgQbbdzPw36Jr1BqjRjU4U",
  "key7": "5ffEzithQVfuEVhnDN6wHd7NzKseSbMoe6TdP9Uob3wJMCU6TAskZmj9YAjRTrxMW7UDoSFBdyFtC4oamaum3Szn",
  "key8": "2D3AUu1xoautKMkRksJz5X2hP8cKMfbmYdDA25CnRMPegLDLA33zmku9QcX9JkmyLor7FaKzNHZ6qGvvCg2AjVHE",
  "key9": "2sxRP64DDZ85Z4pJPotM2qC5KV2hbTLAia4QJ6q8PiJGimUpKNKPFmB1PquNj8SaQL7tNbjrAig7TSxFMgLLHWnM",
  "key10": "2aaiAUdbcqPvdM91EWDDab5kfPJ9SS1PX2AxTGwp1GUfShDZk4JAG7ccnus7JkfzmoEonohXQXjB3TzkvS75a1Ts",
  "key11": "2AwkY3CmDZkpS3Hr2HkwfADBKvf8vsXnx9gkJKbh6eaSpVxw3xE8AZd4knHD9tcvBUwNs2rntHptc6Nw8HedooPV",
  "key12": "3NrCNcznqfPASSngPWtwj3T82M9qC8TX6TLJDkyzLvDRmK9PuvYDzfrY8AoMzYboCcfUdF2YHohoEU3zmjmdnNAf",
  "key13": "3erd6RR7ze5u8NdsDDzQgByvwUkjSkExWikkRudBJdXDDRgHw1VqrQimRCYcz4N6LHkQ58eFPBUBRkmC8UwynUYd",
  "key14": "3L3Xr4DqLksZs653sEVFXm3nGvaNpCwVz195MQ9xj1SpvdEDyaQjnwWbVCwfWFmj2Jj5StzUqBKdstoj3oesgAgi",
  "key15": "4SPUv2QxAFUmmktQ9U4QGqwwxRk1D8ic9BfQY2JDYbZjZ45q8kCKUAkZR3xkdyhyjAzJFgsZ4SQzYXYjkdinCqZm",
  "key16": "2pFiTyCgdWCtUBSazNp1jtrcRwXEczrempUGSU7eEhxCMxv1Uv9tdRz1astxB7Kz2ddZiVzz4odfwT5A4gywrbjb",
  "key17": "2o3wsYUkEP3FF6xqSPsNWXR2rFvGwrhqx2q7TQPS7ECzTeSCe9cmX4XjGvowmj8hwsL8UqmooUGVeRbhWQMg1Hn6",
  "key18": "2u7v84SvC5NBnk46Fgxub4d2wytqCgmyMXDjKNUZchsyB7U66bBTY4SRWG9z1HHVJPQyPqTRgWhAMwHVRKgM9Mx7",
  "key19": "3aGrxeF9jzgvMoPWgyf9RXje8QXTtPRErQ3ETVFe9o67AoWzrCATTxw4PLu3cgaSYqNq8AzqTdJStc1ZepzMuyhv",
  "key20": "3YKRf7Bv8U1jkaCsutDYaje8ghMkjBUdmFuorUcUaooM3B1fBRAegi4ZAUKhWPphWc5vynq9TRTu9upVQTWNFa1r",
  "key21": "2ZFv5KbzmR1a1fxUcFm31PxyMjVbVTiJwf6FcEebvyvviGKe1LGycFobs5vRpSJSPme3Lag2QFmhpPhBTbd2qJyB",
  "key22": "2YFQ87k1h8rkfXxp3CBAzhqWPW9axcCcfBDqUYK2dCDbiSe2JoMsfDdoQVUfvM8kSBBWSwAYAbb9zjcwmuXqHGsA",
  "key23": "2uCr2ZSbkUDEmQUCLnEjBR7QFGDqQY9THf4ej4e5pmyndgTSsfUgPnTvS5a94GHu7KxFufRdqktfnyNwXxNTT95g",
  "key24": "4Sf5Df2jHvoifYXPSzTAL5LqxQqGABc29tmHYp5842HeiFJC8eRwTcWXR5K2gigHZfFupYAXmm4vDQaAK7BxLdJX",
  "key25": "4CkkHQuA7tWVAjEACTWTCBH4ve2YPcXpfX3tZuiwKJ6HNAwQW13ZMphkmz5hoHwFAkdsMJ3FygbhC2vk1h4XJt1S",
  "key26": "42ums34kov7TstkPk5ewb2bcuNmFSLHfBgPK54yNJW1hXf7o9ADrq5ok9p6dVMKDuvMVbF79t3YtJsFmQ5vJTtUX",
  "key27": "4pDeE71yTR3TzNtoi5UcR6nZ6L5FQU6Q9cDF5J7Hq8sLhzdRQiZbH6U58wcdN6xN8UWXL5hM7n5aEyayFCiWFYC2",
  "key28": "3HAgNfq9UdqzMBRAvNNYbvt4hAFT1cwWV19StbnbboXDTuxt4LuC9yqjCuniT2ugeEhrv2QW7o7WdLjKWXZDKNN7",
  "key29": "5MTUJEsauFdPLEM5fH1aZHJvD1wW7rxE9VNiYN9wD3WvG3h87fW6Miu7Vzz5jqAKzmAYyGBU7hLcH5Q6NCCs8V3Q",
  "key30": "5YL5LbSRDnV94HUo1nMxuEEc8C38Zqdud8nwjrCfzAXajDhyPebNwBPs6EHMZd4fYhQiEdU18pRVWQRdcot19Pc",
  "key31": "5kVHef9RWtPpgVkTdmd9LjppdDiz3T3PV9Dy8idvCWdHYxNPk5MvW61FdxwbdJLgGgAJHzNFemGLAkFM4okhSnKq",
  "key32": "3FhR5HQbTfAUYm6emYXq79R9FonDHQSspmS32iTXmNt4zbL2NgyDGUCnDFrhBq7AdjjQAPUq4anzbAtXbT3f6i5a",
  "key33": "2Vc17wQw1BnfYzXK2xNuBEyaW1gw1ho1xnLX7JABrXxqLDg9aiFoWmzmLgkJmFd8VLCTgiGDdJ7BqGhooWcoFTNy",
  "key34": "tNxZ3B3L1xLPwN9iYpmnGJGy69WF8WXnqsrx8LNqEfeTaWjQjW3LLXUAc3i8fHkmE1CXxe12JqgZLFhwCiZMxWi",
  "key35": "5H4vbj6ph4T4GwgHfVNFd93rdiCqhGf5AEDKKV6ErjTuCPanKknXKxox6cVBWBFK9MdGLR5HJnKs5jQwPK9VpKng",
  "key36": "XVCGU27LpyT2UskwX4GmABnGDYo2btGBMVQLNTzLGkkE7SFTcyrHKjcxT3GYoRJmEsgL2sF3rZoNU1t3Qc1SL6c",
  "key37": "5PdCRgKfaXw83d36jwusWx43KR3jHG5yRepo33MzY4FgCd6CN4MCCUVoATXALVoopoeqmHGgJxtUdr7T9aJGyme4",
  "key38": "4Kir24df1Ahf3Jx3MEvta3QDGVH2a9UwLoEnnFykGNQnLgHfAjZpuwUjNsZv52VXfXht7KJ3SPvyqtgw8zDe7xxh",
  "key39": "4MzVL9cydSG5JeGjqytHG8dianJW4QKuHLJW9kMphXg2QVCeQkeonr58LL3f6LpqjKB8qLFw3oLRrTvGMkixPYte",
  "key40": "4msN1Z82mYGdvpuvKprzHn5mzMPXMuETysF2GVc5xQxBbpaTJkWXE2id1E4kMuNBVaqJiYJ4dkPisvuVqzPUbYfG",
  "key41": "2UEhyATgeJ9TmVVxPscqPz8gpQaQKhGSqboLsxwDs1U1NF4VjCuoxZgEA31RuZr8TK9XkWCyrESnnjKsSvs7HCFV",
  "key42": "4g3cF4zvL3PyicvTfbmp1yMJ5GuQRHYuCeMVb68qze1zuzTX4uX6wF2LjkZm6szkSa1a2zJTckG8gYkA5jSmsSWZ",
  "key43": "4vDJKGfkwDW1FZj3AMsLUY1pz64t9yvYaVdqPAt8SSproMMWGW32yb1z519Q4ZwWzvmK9sYARpnLREy3Rzo5vYex",
  "key44": "3x9W9LUWVzyBoiMs1TopRP9XwCzRCcQxRMuF5efEZonaaYxu8beLezzSVBVYGbokeB3HbYuihrUBnV3FEpR9eRPZ",
  "key45": "4g9Uv4v4ZKyhJvzRdPjvrNMyc3RYQv7bAPe1qHxy9iXeKtnJBcrBks8UEZ2fboVWnDjMdmKEEErVSZeuFncFYg2q",
  "key46": "3ezPZjK8eVBJXyihZkBHGAvCZUFapCfvPpTxL9cyKFoKYCK61EtUUpZQRYvWMWVUyiZUjQJVdKjrFfZgkQBvbyUw",
  "key47": "4zRRrEGhkrpfENs1tBFCK6uM7xxe5capaiENQUeCSd7ZkVAs2FhUrSFNzjh5ViPZNhoftCDGmZS3E9uTb8vkXPBR"
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
