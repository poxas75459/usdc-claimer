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
    "5Yg28monwvvso7Ttqc37Ehf7jqoAW4t8j2oEcfWdrwE4RJ7gvgix8ioRAbhnRyyzVC4Nbco7FXEiZwCSqQhFRNVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WQpuuLdPD5taK8WqbUAzaNj6XhXtCWs3tPKHsoc7zhUkMYa4QG2bFpF6Y8KDHuU1Xnnfk2rbRh6nSs5sbqSA9sP",
  "key1": "3WhkQcRxViputjMae4Xv4epJ8WoghcJmBTawZ5DyrEhqVxa1UZfx4iotEYws3z5vQsYmkcY3Xkb97Gu2tSkYTyZY",
  "key2": "3PG32Q6W1JXoo7peJRuBAvMafPmpozk9oovgSgSJe1CAHvFQce7VXm2Jq7gNh6yubhh95BpoYq6Q49kTRTSBys2c",
  "key3": "yqHPHq4w24xqvApMRYprHRJtEp2qwyTTYyGp7uo7LgQJZXexrQjpTdP2fTmoJSQ4M5EXiKzucwjeC8STb6tP1np",
  "key4": "2nWYp1DK24ARMkvyaN2jovSydN387f4BtNC1EdQwGoyHrECnJNxg6gEcWMPJF9W2B2svdBtFRLtjhzkB3i9rUQSP",
  "key5": "5v3phpjLfG2Es2s1tf6XZ1tsSj7BUCLVpSueTy4N9h6pSbDRHEwSgqvSca9hv9VRmsX2YkkAzwuQnCf9u9669UvN",
  "key6": "opUVLnEHDDnm5EUgqHdMX9vajowjhMkgXEoPbtuCoZpSHf6rSxed3sw63f8pJG2XCqRnaBNfsfSNq9xw3kPUkNX",
  "key7": "2PnXuSURwZ5TBK9MG2EqfQXp9Uxbjkks7NENtYgEVk73EgHNmmpbt91ks3HsnoeJeip9ECLRejERBBmKBuBB7PH6",
  "key8": "44nAFRqLG2K34fULoYtPyzbmMqBEi1kSDWiS3aCVRYnMXFJyCSaeYmv3KyFXj7z4HkH85y8pvcqHieYSzwAa81mD",
  "key9": "5bu8KMWZzfrrjApGK47VDasbDwxYSavo4CDkUN5xaHPU4t5QPSrGKsmk1HcSp28DEMaQUzdTHGL3nU1meSXeW8nY",
  "key10": "wmtpHjsTAUkE6ZVuY2LJJfPCMa8cSi7ZVzun8CTEptFYMfJ6oArbEK5xG5E7jCUvXYU8ZnNJdmaNKuhhHQRbhCw",
  "key11": "41XyQQFswd5uJDTb95JiMjpjsPeXzuR1EnXK6AwBnZ1UVxCCCVCGHhQQimRHqL8w5xbE4v7eFmD2vaLX2LFXtoTW",
  "key12": "5jg2rybsT2TmF1biyuXEzmyTjG3xbSbqd7LfHYJDRB5hY7WYTKp5Lo5FaxWGAb7Dfo98c9qaTTAPPrdreAs1xGPr",
  "key13": "36Cf2CPkxUxEP6A92nXqNecgUif9EX5rPp9yTaPsg5KGvYLcxCbcc6i4bvy3FMxi6ZtxqFnBgLLtbvDM9tuGFvPc",
  "key14": "mCeNsWKUPtU5xBCn3L7xqVwm5gzB2kBwYJS3HH7YvyESyCCesVzxJZGhNdbgDTkNUU8MvehLqcPxwQfjhSuBwBc",
  "key15": "3Taqxk9eXi5UBSDVtPfHtriwxBqEVaEVo3MFBS39bcqv4uLkSvUFXwcPkPCe8Zw4SyoNDdpYdP6hbKLgvyGqqkLn",
  "key16": "62hg7bVFgSrAUUJ1SfLovE2dRABiMEwcD1nPCaUMbfVc2K2GHrnXmWMyPfqCao6V5bi9Y7LEG57vgBjK9xZHfWg3",
  "key17": "3RTfgT4MVLZAVbodvEuVrqgZwVkNxz6GGpNpgBM9g3LGBywFCjJgD2jmLjG8J1PvQ4bqqzKnGSZdpzSRAYwxnYNq",
  "key18": "24sUPqY26qNYHijYSmPvmRx1XV6AeX4nBKRJ67pK53gYXfqAbiL8PGK3Qru5YNGFPAFyMajMpcHcTX4vEb122zuJ",
  "key19": "45kjwG2oa12D7y85Q4yYEhFa5sbvdaAEJYkw6KHr7CCPbpfz4Q1GEBdbwfq93yDCw7zQLFzxGTrPUjVdSn8rR2kF",
  "key20": "2dgbqh5mH9dnvpH2aWtQbA74qpSKXV4c7nrq1dPgYkmYSEggDuXyK5MxdDPm8oUyTo4ZNgPymCdNADyQheZUBvHH",
  "key21": "gZKsojstRGecQGbwR6noPvkKyAegAMdHLS1AMRLQf5SMKPmK48AaCJMRSzMaVYaqZWGjJ8u7hxE7XXJEcxSpftR",
  "key22": "FbtrA4aVAXLXhjD3Yn5QM57XmCaypnKmPi1f4fsZ5nQ5NtNmWyuhjpmC315EpcUcRe9z1BMeGKhK63y7HzdUyvc",
  "key23": "5uwEdsobkQMY98CawrN6xUVjmZpiNpMMu2XdMdZ7Mbar4VKHxHe7Xd26Ks8XKixmobyvSJpCsFv2hXjPeBHVFYaU",
  "key24": "2DpxvEdAHv239ZxAUXwb6K5XAT7G5LDfeR8S7PiqXKqcLGWqANC5BAnAnHByFF8uX9ZFx6ByindxrTjkfP8Sh2Go",
  "key25": "46tXsS3PKHZ1rc4dF5ZPBr47EXqkT8KN7ptoduTsXjKPARAT5TvbJqxX5y16wk4DLGnZ6tWHbgvR8HhqQtxWDUBM",
  "key26": "62AanDJmZwSyLfk5ckCjiwzmsD2hUniX4wG6rrQy4bx7EnsFWzQs6qkJNEr8NM4NFXMQZiv1bCqj4NUms77hayir",
  "key27": "4FNpp3VqSbDKRvKvYxMu6pmiF2M198aiPyVycXWdPFQSVxZeZNoXHcYtWYGNw3QFDTqJjGUKtRz8yz7WdDkx1kNh",
  "key28": "47AnSSMpVZSj9qkYFZs39CFKLy5mmpQXE7fz59HWHpR9Li5yoSda3afT5dTqETjLXE215YqojGeTyxWqgtNfKS52",
  "key29": "2Wp9YRy9UZWCrSfqjV66J42g4prdnQLjUCfifaX2RqFfu8UyC4sWEb6CoWqwtgtUrjbM1u9G28gGubNeJyVPqpRG",
  "key30": "27GAPrdBDM56AB16D9xPru4NDJWBDw11sQ7e3wF2PR5r2RSTVYiEsj5rbMp1XPAtnmDUADwQ7ypy1HCbuDxRCqPn",
  "key31": "3tUbtEn4W6SLzjjhpPBLbkgK2fy7Eiuuvk2xjLL6TQDk1mgfSzG2ufUxZSM9XkATjCXntzHgNkLii4xuTRHdA9br",
  "key32": "2RyeHH8CfRkWDGVXyt1GNKtniYoACaff2AMsxTwkbUBifDjLgLYAP76nLqHvw7MhFY8YZquT9k21Ho6oh1tUexYm",
  "key33": "4wvCTHQzADXJdnGnfW8oMnii8fuLwF4162S2AEqktVXh36LUV9N4JmYaWXyUVQyq8twUiTMFpsMxp47p4pRySby1"
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
