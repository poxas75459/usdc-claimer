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
    "A5TsumqRzZw9uKbxwj9Q4tEgVYSJQtkzyXWMKJhRUiL4eohztvr9xUDimKteUeYcxM9wqphyoTXwhqnXpauq8Le"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W86F2uUodkaUdGs9pAUUyCav6d88wtPvX9PaaPwvVPr3oQTRDzZfX2QHmTJR8DX7ebJ5WzHvxpBL3K1ktMQ53nD",
  "key1": "4FYPd4SVWpAEQ1GEavQ8LC7hwQ6PZPPGxSKiphcaydTZVSAWMMyyaGz5fRVMB3GpqdBjuTnFegwFuWjTsHRV1tiP",
  "key2": "52pxtZ6sJ22gcHc5Gncj1AbVQKhXkdQYA1ySFWzWSwDCAvc8wnGM1U143HZgNNBpXoNE5UF9yDcpGnVJTC7f5RqA",
  "key3": "sCuPZpw96M8mp8qytwnpzteFKFfdnmiCH2SAXekipUBoeJARVSpiemn8sWrdY6vbAm1x6tBf9rxnZSTLiZ1JisV",
  "key4": "5wEmBARf4foHGVLt194meTCirGWzMn5Cpi6TdrNEXAko5LENx6BUrdPzgoz9Npg5BQ7Xfz68dNwGjaLZWYgPmMGY",
  "key5": "2zhnTTAXXPMNznC4CAAfvXpjHTnfKbmC3EWeSR5K8QF63QNBdcAvSAbsYurEzPARTP4uQB9rYYaTW3uLRo5k6JXF",
  "key6": "4jjnAw1L9hU96TBNA1sGvvsTnDHMkJeX8bqQw1wrMGy1tHf5VwKJcHvanmkyY7YEkay2FRuM3ZWyi4a4WcyComf2",
  "key7": "3kMsEf6ZLnceYosNRjBNcwzxFYDuvqrrEnwcCDKDCKZuzaeotvTATQ2TETbGDM3DUxnWdKwetZnmFohvNLN7boWy",
  "key8": "3RrJMNr8YwrcJpKczvqnWTfu4JmvhDhrD1HWxMkmjzsE5gKgmP3n3i3FE9qQH38mGcB1KY6zTP2gWVJZ2YEU5cyD",
  "key9": "5FpFLBsFzBaf8sLM5CWL2ceYMXkABkZak9ZWBK45a38LkUvD63rGv31FcnFxSvBre5APUTNK19rnDe97dkVRjan2",
  "key10": "5esRxpvzsY4TtCfAzaufEx5tppoJ72Y9dqLaw2fqodGkFSVDZHjyXNYzxveDoCYYcd9KxdHuua2HPD21VAy73HEY",
  "key11": "3Yv3mhLSj2DbWPQwuTXuEgWVzUGyzqgZWH4BgZg3hQs1Rbozp1qF8rPkHfMofeEsejyUJFpCP8gZH6bUTyfMYaUQ",
  "key12": "62wyK4u8FnxgbsjG9qXqDEK8ZKp7bHzGxFBQicrv9EpWKoeTREE63xjxXczCKu7rzTb4GVCPYWw1qMLhzCPqKjYo",
  "key13": "67p8qKxpgpssQFUTfCTW4LNrCdDLi5HDrvsxUdzMnnBULiYDaH7iPmrLxbp7pZ7Sw9mM1vKiFXeMS5q2QgUSFYXN",
  "key14": "2nUguVjhxkJyM1mTZ6Wccy2FcWajKWmBAwxGEX1LiHvbrdrZVmeLDZsnpxrMNqqja7cxPqs51LxbpSr9tfcr9Bzm",
  "key15": "4NhonfNR8kodi33Mki14jsPnAUHccctdPgkxfzcPhvEfRjkjVSjwoGwZFVtZhtQYhLLfxoKbCQebgcswbP5UR53D",
  "key16": "XvfWoJTTc6aWG1KuaVLbrkcifkBusgYfpC92B4cG9QMyEti1vpnzCuPcTvwQNZADrJxWjehDwBR5Qg2mbNJEovA",
  "key17": "yWXQo3vtqw1HXf89RjViohfGXtruEEaGJSzKH3Ncz8pss7B4Z86zFSXpcJPWDBUtS4An6JbTtiLmP27tZm8nSwj",
  "key18": "5FpxwRrSkQerMezDB8tKHJZRN7UGetWLNmEivKBchmA4XqRmGeizZJHHvoaHdhoz6k3KC9VoWJYXbL5nca4aXwqF",
  "key19": "5awRr7snXsHUobUdiSkLhwKicfK44wM5WTNdx6eRmb6PdEs15xrjrLAYiuPpmYWGkUSqo1XTbeGp4mAh5JfoA3dt",
  "key20": "2SiuvYzHNLtifQQT16sMUbEcDZdXnHZRYvoLUCKeZV5bSzPpvTbfVPEu4RydM3HEqKiVvmE8mgQfYFoBGQJb51G9",
  "key21": "3BsQMBkP6qLAKg9ihQ24sKEtJ1QRwngMDWhtk6Y1cUPKhW5xkGUv8jt9FLNtMghYZWFtJPr1k4ggVQqqUUbSLHRz",
  "key22": "5UDKNx5Tpk6uWFxJckQ9vKCwPRR6P2e1xdKQWSx7nUtKS7Ewy5GEug7tP5duDi7HjWKzBt3KYX9CrrKrZztcaLWa",
  "key23": "3qvgiWZPRkxMQKruv62D5Hxek5vrMxf7ESoedcRd14vumbFUDrDUgcEDVMaeqMo29q8ASTafnAebfscmSwD59CG9",
  "key24": "3BFHMV6ZrRVpJFrqHuPwJL74zUAtSBoSUQSag5cswvNWxXgd7ktDsNbTke92bGaCx4jMgAjiocPEFJkxSzzqyBec",
  "key25": "5RkKTXLbkR4Tgizf5r14hfXVkCio1UH6myB3EXfCifeaqfq2QSRQf4XQj82e2B5b5ZaQMecd7hBMAnvDMzaGf2yL",
  "key26": "2qgSJctRN1FV49HfLW3Hywwjy58wXbasW3QHsZkxcNrrR9B5sSNm5kQSCWRLePP2NCfxjw4FzF9BHJJA8KMKABkU",
  "key27": "627wYjQejNECceuqAvFXQ4QF75zj2qx26GMffb7aoSw8z2EaA8uggsjwg6fdYZKH6k41ir3m4xrg2AbrLnhq1CYh",
  "key28": "55wnYCdK7Wc23BhSTcb6XSuss64YrJCyPBez6YG3eEU9F41ZXVXK5pNmqgLfJVQEYL5zcAUuAa4n8r4dEnsYaZWh",
  "key29": "4t9iR178PZGMLehzwzKHvaHdQ3FcSyot2nSKt6koHjQaRtJygbQERG4eGUKQuCbNdiCpT3CEvdFpJC5FTjTgv9bD",
  "key30": "48DLnmstnJKcvGFxUD3CxtjbX39kdNQqYUifqcJXMV9dM4nYuBpLGJZvz3XRF8mB4xpTyZ2rggMyUNsiDnWBzj3A",
  "key31": "4RHkj3NYv5QsPa3RNaKXogL3LHFDfeWzgGtf9oKiE9nT5ztSvgUSnViYqM3hdXdq1QrAuH9Mbdxn4M8ZscgMeZAm",
  "key32": "4CeoKQNau4gdi5pAiaGsMKJZcACd2Ahfb66d59yEFSkGzivrMJjMmc9bkrK4iytK4CfzqXduALcp2FPZMMNj2eje",
  "key33": "439E9UTzbhsg1uRKbLgGn7R1bGw42xv5uKMKPgx8FxL5WqnzcE7kUxUMfCavm6tBLE2g17XX9G1S3niLYn6W6csY",
  "key34": "mpREFV6V164jdPCemVWjk6zXBvdpTy213qzAmsQNynjUiPrxxqasoSJaDCodsyx8XLSXEeaeNXPztKKw8UuHKpb"
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
