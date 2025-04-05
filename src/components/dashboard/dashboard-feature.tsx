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
    "4Rt6ZDSGAZboUuuXCTH31GDzXGxoa8o1W1heeNHunyWVCarG3fTRxvScyQihNCr9rRVBFcpBea9yQHPo29rQbkrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GUBY1tYh7jmYm1KXwyRqKJ5uzgHwcLNdozQv6V6CDij6wNST8znjCAATuDNzwF1mUjTXgtvUTujipKM4KzKu4HQ",
  "key1": "2kFgnyXUCcYbuPdrXNMsbZci4dAMeqnx5gwCAqP2TFdgoedcWUVMWCYv5kxS3KzqKGKZg7EVacy6TcGny7c7FaRn",
  "key2": "67Y7NTuvT8fmLqKXD6cwGwqJM8Li4Tcwg1P4pBhwvdkhN4We29FezuB6dW14bsh5v4hWiXxzwrxuSQFVQNGcbqkR",
  "key3": "5ZjwzeGZePwh6PzW2PZMyZpmhTL7uU1yBqLtQiuvbaCnbmSETfvimiTcsmMhGAQnwfS3mfWcPB3eQLG7fmBwD5CZ",
  "key4": "Jd4necQZb6DiF9wE1GaWWVkg2MnbU6oLnc1R4ntjKABYu9ZzZpi52PcXV2GYvE8JGsprWz7r7Vm2TWgzZfrWu9n",
  "key5": "2QtfP2MnP1tVqApZbLhosta7tzJJcXaBPsPn18ZfNd4cNvWsrmDuav8vmF5ktyzTfEs2LeTeBU4FhD6HdpoAAp41",
  "key6": "3Tt5FBUuPEvN89ydfgtg6t5K3ui1UePZWtpTQwCrYiQBFNwYRaDeaga2ya6cHRmMt7veDGiBJB2ckh5DgDTAyGt9",
  "key7": "55cuGjJ2MFBjGd6dxj8vy2VTe3GDdJkcdCfwHoDwRh59WsAU9gP7akStEF998VNoVoG4YpJMQP9udweDR2Papb3W",
  "key8": "LNokjadjKfMSuRkPdyPzt8zRZrxG1Q9bGiux81YwH1oKmbpwpAjVQtQU53zfMf7casbL9VffDBgPaHXjDEkT8ya",
  "key9": "47zkxEr3quA9FfJoPKe52ZHf98S9v1CMdUR1iyBKWs48tScGiUPrTFkTW213EJUVSoSbmx1c5WejxYBzLZH4d8UQ",
  "key10": "3NmDA3Tsdxbh71L9VNeFBrCyXyjerQin4eixdhRsGd16UqMfTHBRyLdqrUSVSyMqnGPfoTymr4Lfi1tSjAMqY58s",
  "key11": "3FRZtFjY59AcLNB2RNe4Ag4Dtpo7DsVNMF7NLAWmx6arCDFP6cgYhosR3Zx9nxGxtMTpj1E229cwpbs7WLoADgkX",
  "key12": "4UvqzdE86ix85hCBqNSQSDL3rHT8N12SzQpQGWvTmAR6yZ7XitwqgEGvKr8rfLvmbbNG8coRoM5kAMV4CXpwYNRq",
  "key13": "3zWFi1Yg6z9y7LByyaawivxkXiJmJfyeDELYcPvL1QW62Pr3oRfYvwYjW11xeyLqm5fsTe4qVrVC4LZf7RixhVX3",
  "key14": "3P3Rk4MLFySHt4qs2RpLDKvPhE9UkVtj7sN6xa1HJxFWCEo7id1uhVQMKD8yheqFnZTrM8Q8JUHvGZ7sA3mLYPUy",
  "key15": "5XrHyre1o3tvY1Qfn47pbzveGtVs7n2AaQrucgi1Ha51f2eTsUzr4UJK9J2NExBi4tYBjetQTQoxTsFMU294TMEF",
  "key16": "5Cxa8YrqNbF5rBFHp491fCmLgYZzKPKjKapPuxQRaYvod9ogn38qfW8p2N5XDnGLim4SHakMShJQbta7Zpxikehz",
  "key17": "4zjy4W2uPz9rbv4vow7EZK1jmDPKrDunQ6aV2jhk5AmnDDqWCcqUtwTHgbPaxyDepntVbCdJCTsgkoGcqmSUbigS",
  "key18": "357eRW6zLPadCCKJMv3t2fbXoCQ6tpNWBvq1CbYcdUtVUjnyXTtJ1ZDg72mrh7mUhQREh6qFpB2cBwRyfgUmPsUd",
  "key19": "65M6geRyjshaDZhQo9T1visVwcCtJtfBEyYA6TN1Xyhs9hQ4otkxMH5ycufChuw2U79QZ4VtDNjE2DYnEq7tZnSe",
  "key20": "2d3QeaVRPvhKqq3Np43z3563su8zNmb8rmLujevoKQsov6WrJ8CXhF6VnschH4YbZdb7iFkRNGpzsPGUakzYY5E6",
  "key21": "62mmsTv7AR83JgKy7RnmWd7qJTwk4K7HUuP2X6mnvEV1N3m5kvM9RBiEPYhpbacV7wxa9Wbc3sYxrjfhpAekVr3S",
  "key22": "5otfe7w7AgVCG8ctQkvCNmZ7JTwFVV5AGfu9xSZVYcMCUTyxY1r8cq3jft11teuH6cHeA1SiPcFFd5Kr4AiRuzi9",
  "key23": "e42Chu5JzVnFZrS8XbJ3wj1uxHRWUvAaHKKN7Z43C2hcgdrH76PYcn3tmSYxrapwJsXkg5aWrc4kGvFmTxAhSzm",
  "key24": "3LFBYpd5AToDQKsMqyuA8A66bTBXHZ56jToPGzUNqsLf3PJmH5RmH9bmPeka2edJe9zbimz6b1HK5dCo2ScPzcoX",
  "key25": "4BgoNwGaafcCwqhuLRLKy5N5DsuiXpCaqAaFbvS974qf5TJPTUDvGT7h5B5M2XRxkfS51N7LAix2Vz3rm41iwqKL",
  "key26": "2wNkgebhPviZ5HLAzumkAR5tMzKwNYqE7b6aRxhWnBrkALMrveUzj8NCoZf1PuNWCzTL7RkuCwAbTspM3ZvAJK96",
  "key27": "Vk9ZYsXhDUsHDjMCgcFHsM4qfTQ7yAUJQ7cAArhvKGD3WQMuakAtAU3fXKPxP4opCzMJSYNRy1FAG4nEU8yFZTw",
  "key28": "3c8TinFwmyLstCsJ9p23cqAm8ZB7JejmDDk8C8Zd681SR3Pj5AtZLfiBkvRP1VETEZCrTYxQBnxSR24rvtN2GoDr",
  "key29": "3kWb2ysE5nFL8DyTnnVVdwSgX2HkSKkWVyHHBrvFroi1ikDQyFt1bTxrhTFCe95ArP2ui8FFMJbDGtJz2rhQ6zFL",
  "key30": "4HKtn4bExE6EcTzzRXte7pJxaE344UoPNTSiyYxFsJRFHXnnuadZvNjJbWRMznpJvyRqbZn98yDHFAoQw7eZPEes",
  "key31": "3uCf3bT8izdZumwcyCw9s2aTZuaoJqhCqm69frEM569eS6ujZwetiBq21RT4Ef8NFTR8xncLVroxAeqop5pZvgE3",
  "key32": "42PaL3HK5YAddZLdLcrHrENS1T2sTXf4bZXtoqWbwNTNF5Se4gx6BjLJF4H5vzjgPZ4F2Cz9HCneTQjbP3eRS3bi",
  "key33": "3CdvPrBog8YNCEegQeBT37a89Qyj84o4yibFgcr6a9i2eXcd2RUgXUz19tMz52NbpmYkBhbQhPvYrjSWUbEwfHjV",
  "key34": "QhBChnGNJZvDS1Ro4oMgnef6SMwSbekDji5yyz2sWh8xmAGxGPp5bc4TNLeTizFEo3fqP1HHSXgo2mRnMz44CFB",
  "key35": "3CMX4xbXMuF3yHfex61qvgDNG7nGK3AmX9wFd2iWwdKfNyTTQHxK76hZYzsmedWprQxE4tT49DerhXFVCquyqXN8",
  "key36": "3XdXxxvCtKCmTjtJzoknXZZSmuHjFU1t7watj6tFkb1GUdJQDjkKDWte3p5KTmeYd2V6M284FxxRYZhMz6iifAiP",
  "key37": "3AaSWKet6eKUYcN8bV1zcRp8zjxwosBBJkwhLJKyCDDvvaXwBcrRYzBcqejSojeu629PEkvkjGDEMwza66ZHEhqj",
  "key38": "2sUqNCiJncNq4PfMYGdbyei4BZ4Sn3b1GRbor2V1PT5TVECKoCyLDhSmSoMRbsRE1UxZBBQAjUchKXaJsPzxatos",
  "key39": "2DFx5dAfNiCpFXimNPjHn12kZPnkvCz44kCet3SAzYoBB78g21Qv8bZVHuiiKRhKVwJHo2iBn6YMygRLifDh61EA",
  "key40": "29sFqmYzff3HN4hwoorLakAmMXZ1DGrpkRn41KhgJCKSxtRXXFHa7dR5dJTdbmgNF9BnERUb9Nx5wGPJCH65UcEg",
  "key41": "2JXuLeWgAdKNdnqNQv3QRW1aKcwLRgYMv7f5j3riozxRi2BvabcwuAXxdMpkktJEWe3UU895B8Jv371Xw94vqDjp",
  "key42": "3pKENjbN2jS7k4oc9YJJbMayhU7QcpA1o4pBJmbAkPtSb3Xy8537scAjoinzx1hq69agQ4gqo68PBUHoecAPahse",
  "key43": "3NQsRgYfZDpHVWsxVvbux89rd55e2ZVAf1H6evnZNKNzyKEk8a8Xyb7KSGgHtDSE7wP17wUdPX98c8WQSMREHgR7",
  "key44": "5c6CR3y1ywjXtJpg4bE3hjDZZM51NPyJw4pexTwJGyNTwsFSNKjUhZB2XRqiS1K5vft3rieqphZfFstddeKVMrUg"
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
