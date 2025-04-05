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
    "3TyDuKxUKa2eVV1G5VKregzoDKRCNHZ1fyS1E2E3Q99RcqZNVVqhvQSRQqnD1rQ4NRvq5tAt4LYpKxGjFoXtpvSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38hh9x4fivPbGr7bAAd6JT8QKNcd6u4GDddBZYAhRSA4qaefLdFmAcy2pv22zd7TWqFoUU3vNPX1kn5HknEJ8wgy",
  "key1": "2MTEbsMyWgDRa78hsGqS9KAtxbYk9EzwijCcCUsbJFszQ72exNjqaCvSy4HGc1BtwyyKFJ3N9YpPX9SSjV5GfnNw",
  "key2": "5BDVZ8gbwDHcRBgEvyMd2U7q7m8B3SeQqJmpGeXo9qXpihz8f4q94UYiLtj8rSz9jkNv8t7d1pZjdRomCPEeQpKr",
  "key3": "5SJ9ETF2fdbMsPxx45wALnaDuHwv1uLpED9CvnKiv7FtJhm3oWGZ74WYqHUacCuRyGnFbY19K6hMTgP8w9SrJsWv",
  "key4": "4TABAJogkpP2MByRncVszat1FMTd4AMYwGdvyJv3nvkBahDvvKhgJ6Lf6LoA8PNo1stbk8gE6mkFEQcqeZxFXyjW",
  "key5": "63PrFnvB8pNiaNn92FTMAnpxTE5bLz3UbUBi2xigCt6FQXp4RQhhbzY8dwQmE9idX5DxpjXUPaYFdoUa3MSTts5W",
  "key6": "42u39hYiKSbPHxyGJjQAWFurNzPr6jbEXF1o3xSgBjHtFwv7nMTE3PS25gLAaJ3fDnV8awvjyitdu6aAfrFuSiVY",
  "key7": "4M53XRcmGxup1U9tqakiZLngzkZK5ASegyasPnZy5Gf4YxjCuQXNP7jNKkeu6GHYWazAPRmrJQLger4moXBXsEki",
  "key8": "5VXRyedoLaBux9vuRVKZtKe1AHBr2GqBnUGf9yMdhit3inQvccMqPY2RDrFhjZTLfGA4Rh8af1FSdHtAE57cNPSc",
  "key9": "2bAbg5H5w3kjeaH6Vc9F5gDZWLLN5o4i65caGc7HELx7FUhEdLyMyrUv4kLdweBGaE24NYd2Q9eUM5zXVT1MzumN",
  "key10": "5XBCHmGKHc59rkEyYCsjz5HsKXVUNR1hNDZh1m93HTndWrfCq4XghCDsJQiouFQDtespBNf4SGKRsU87AVQsSFe3",
  "key11": "jUQUVsCy7L9vTktjVe6Y15cmAgGAMSZVHggmG412VSCBA8D52f93ntf9Gc8GVKYJNbKEvVEJBnjkR5mGXTGGKNB",
  "key12": "36PvCEUBEDCUx9D4vLe7Vfm5Tn4oTr5Ww8mnzntVR8BmXYowhon1qc1SbfEf6mJdVj39apEZJJJy2KLXTmFixXMJ",
  "key13": "3oh3RYKqTWHopR2Lo8RDYbh1kRMggyRoMdhhmxKJLYRjBYpHfQMnZ3BjYe54Ha81sRWQhWsbUUJqGc28VL4dMbm6",
  "key14": "3VnvG6etANwxwfkAvURQSpTySpBavC6CVA4GwnYHWdFcMFYgHBNKwZUrZRMgi2aoAKBatFWoKDSrWgzg2YvSmuhJ",
  "key15": "5u4D2zy3QESUroScyxirFC9kp3JgGLqur7zbz4RG7wwtZ99qAXCmvoZAck4z5xeP79nKjkrvKp4ENfuAZKdy47gQ",
  "key16": "61gXfTzzvbwmCmeF4N2mvXNR8dq2n23PKpgqxoMXDukVGkE3gkrg9XoPm5o5BmBDdENCkhedzzZNVBAqm3jKyUFJ",
  "key17": "SHkpK54PXF9xUmt8QRCpb4q5jEemr5hm9gjLXRsbbEEziiaT7rs5oMdpMnPsACRQMAtJbVrXrp9TAoPFtFb5u6h",
  "key18": "3tymiA4JS1xkaxJRExP2L77ogXJ4xxZAptYLr2zydxMu694H3c97j7J3jBrZGJvk5B6u7L5vXuJaAcK9Hk1vHv7B",
  "key19": "3ELqrzp4exWfBA4utyHCW2bxFZ3MnS8BChUGeYPDvsCMFPBJUsAn8W6mbRWjV2kLgWgPqVSFbs9JcwK7dnYAEwZ9",
  "key20": "5Cr5exH51h7MG9fBgvRoFUC8dArgcQFhE7di6UjQVXpreeN2132quUyJ9Fp5oMBb4bzNGh3Jtzh279QLRQNhwCky",
  "key21": "3UgP3BPd4t2GEg2dEz7N9KPkY2Ld3BBYMVojVLLbXha7RxCxZHCMKGQgA5at2izuEWNJPa9V8EosHT4gftFy6xBs",
  "key22": "2Fi1cUaA1QUaYXDfjhZqLKMdgRxbfuTE8FiD5AzXqp7TGmXtk1xqABJLcw33gDwqkYMPn5cwHEoGdGHgwRw6cPxb",
  "key23": "5sapGDMJoh6x6p3dMp9CyUz2ggYqqh6hdfMskTdfHVXyCTgYKRj9MVNFkau2VmnNcbb3hTc8TGonQYLpjm8Cw76f",
  "key24": "39ovMW7CFjfJHwyjrx5MVLsLRmRqGkvFyDX64ggZPjZNMRpmAMEoBpW8nkf4X1t8SCWfMJa7RnRg162DwY78g5P9",
  "key25": "5SwgDA8yEQzr4kkwzH7fKUvKwHnja2WQv991w8BUWqBcJ8b2hi3f2nefiiHP3uqLaMunVgdSgLufD4fQ9cCYMpw6",
  "key26": "5hM2YdTxY8qygTZwXiwgU2vtqf4rddzUpup3rjgE7sE5Ge5b3ie9pcJyDxTmteu8G74UdGDJWqc3829WJ8ND2VuN",
  "key27": "2XycpdLcmEd8sz1RAoFb9xfLnWhbSnQRnHHVUAGaj6gXizsXUQ1Zm5bCE7KxCuiAKGi1rMzdzmL4c1ReQGGkCEMS",
  "key28": "2mPJKSKmQ8XVY9bxWtjd8uAHXjGKkpNg1bQR3XxZUtEFqeUZzaLiZjDYcfP2TrMHpBuMjifPaLMoY2ThzdCp4LW6",
  "key29": "24617Vsyzq6zjMP6ns2Pq6kQgsxN7roinZxM3AcvwERa7ZP9ZKVgndX7M8jjy2oCXnymr4ExUBjVLSwUWE2dY5dM",
  "key30": "4WRun4yYna5xwyqpuSXZuo5YdLGs4qvH1VsFtR3Jk1dZeCdMYZHLtS9c1BfBJpfztQAfx3LbGgjPSLLQWLatgMRr",
  "key31": "4pinU3CxYwtNB8W6mePWRoPSer3hc679AmarD9AEaBho34qUWftvQ8qdYRSvrRq6drNMBPwD1eAmygLKiNXUn1rT",
  "key32": "5kSD5ZtAx8V8aGkFSvr8J7bbPx7iE3jyWQUPX6f7DU4NnqtqLM5Qyu8Tqk3m6AhYRcbzUgVRoMMeafZoEvsAfWVj",
  "key33": "cgyqtTW46keWm1YrX6kSMH6T9fhankWQuvTnMsaeg6eX44kASLzVAWgQjFBRLzPueXt7csUkk9vY2W36YMChUzG",
  "key34": "4rYfHcYNvmZ8hb9cMMdsfiHCVgfScuQz6qdUTSe2op56vezyiAwtRVDHdxAi5hf2D8zm6eJD5SbVGi1RfABrDRkn",
  "key35": "ZDraqQNAcrxLF961kLdJXNL9VhxN6vPTgxvB7sNMEfAx9QZunmD4mFkWwvZH16ftSBzajGsEiDEBtNxQ95T5u9v",
  "key36": "2gpvqq3jiygMeSaUzTzW4sN1ub8txjNs5Pm2bKTwiz93BQipSnrCeenUtLXyw1WobMK5F59CZ8xsCkon69ktFDzE",
  "key37": "4E6MttN8qH5GEsE1FBXsU9ZUf4Cyy3GDR5TLKipFpcdmZViDcpf647FQGEiMxBjxm4bN1tZXZNxTJ8gCJpxtg86k",
  "key38": "zjxoaXHNPHQXjH7tGxWuFQLrpcMQg2SF4UnVcEjpqGuG8hZdideSr5UqQ5Qx7bero9mYb2RbUvjzQJdZtK1oY15",
  "key39": "5MygjrxF4ufEfrnbRjbYkVDnUsqQ3ZrwKk2HTDN9FRw4u7UVA6MowTsgDWj1nS6U2ZP67yPk7ukWkLPjN9vZNpbk",
  "key40": "356DYPX4ya8JKioGmXFHrBeppSguz8CqFRm51KCFVd8xMDNeqxUBxPcaqhoZDdUr8ifa3YPxNf44HYXYEiATP1ib",
  "key41": "4W244uXAizSXpKWDVGViSRtjcbJr7MPgBYjQUx9y7Jm97VdihdEKEZokpnNv6gbjaXh4iHBvRjqdzLmPUWY61rcm",
  "key42": "5sHC2LghvBSxgtSooj5fXxzGsKyf963e9ak9Kti1pMHuqFfpCfjgh2bznNHYLMvYbcTU3TcdGzKofMr1FSs6eTpK"
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
