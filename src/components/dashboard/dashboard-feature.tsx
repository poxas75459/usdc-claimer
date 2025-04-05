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
    "2FKThnWRbBa2wYnLfrMB9MoqR9s3b1CVWr58fzEaf1t63ZbhyEA8TtysnGGhh9jNzhVw64trMu2csJh3zHXUfb9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XuQHzUmAcfdnoJfh4L1hWtp5i5mrHCHgqjJxvFRoUR7khuCs3YadHPxVfb6PxkXt5fS6NXvq1qaCkW2ZdSea1Vh",
  "key1": "3uaZWvoMvDW6u3o9DjWYUL1GhBumiQCCmt6RoPjb22gnWfjrcH9eA94awK9rdnvZAbtuKbuKBSv8sJTJWhWYy5hQ",
  "key2": "4ygxq1sWc8dfR113orkoqL3m2K8J3AdxxXV6Es2aJraJsB7VqoTSWFkPJti1j9t5yq2N3HQdk8oWBBV8y4TjNmFk",
  "key3": "fb7W4ZFvLnAEfNXCXkYqbYV25iBFs9KMNkHwaWr2zA5AUhjVwGLgyxpKfqMfBM8z5AaRaboMCbXkRB8YyNws75e",
  "key4": "2WLVFaS6A26sx5SfAQix1bZ8wwzfHsK5Hwp6UcN5nHhxnGuXWzVe9Xi4A3HAKe37RKuY34qpJQ4TevAi5gd9wn8p",
  "key5": "4utPeKL4yvMBQinM5BqLhZWZDGMzpCLFihsteeVbJKuXTBuLjBHzXeJ2TCRSj2DGEgx3ApfMjf2xiXuuLr1Q9dSo",
  "key6": "3v8eyTHXCvZpzyWe1CpJWqJ2PBxPWTnHiXGdxsGan73mZMWxCTQpDkKXGfmJfWtUyfB4GDvCVvXaFhUBBqqKe7d4",
  "key7": "3kS62cTV6QUaigjvgRnuNNxuZ4pGfEtU7EthYbFc4HTuBR5HgYWpEZ8scRdeD6agFn775j5WCfpVSxT3CyYnZ97q",
  "key8": "3Byuv9A5bcaThRQPrZUeJ4sMgzWbEbyZAYskS7ktGD2Lm42ZY4AbLmYH8716jTmf2rZSviU6hX8HC5m6WnRRDJqC",
  "key9": "2C1BWK1icrihYsdXcZhQfqwKC9hA3BZiCXrfv4PNjcUbYvdbSzYuwRSUYDGww1JBbJrV3aMkXwm2Ts3Zv8DCLTsk",
  "key10": "3e6FVKchQZEW3eqf4EkEvTqPXDJRaEkQ9GK8sG6ibCK1dMPE8JAXkZCmZNmgprzJirfeWj8rPtEdVX3CNfA6RcF8",
  "key11": "3uWPySbJRJvriqtcf5DWSvWBkZqVJC1VnPgVfETz2CNBK99gM294LMtVPHPFUBurSgAse66CtUY98vX4LuDsMrMK",
  "key12": "3PoonM2pc9imxdMF4NdZ6PnEx1RtjVjawY4aaseCAqogJ8vH7ENAGFAW2N5FeHcsXX3fbW3nZ5Hqu1je4RFLmMcL",
  "key13": "3q9YwyYcECcgEdnteK6RiBPBjQJf1qiJpBh9Dnq45RQn9TYJi4yu5qQcD984VbL2PbWbLA2BTkARgpUDuysDagNR",
  "key14": "3gHrxDncVmmqDkYd5Bu4cvwczJSNN2WdFLyyTbDANnxfpBsBt3aZzdatFAxNSGgcADNEVQ7zLSCtnncfBp13nYGo",
  "key15": "2kUPanjDchJFfh8BHV514Dm971HBfuTNTsN17nsUjpb1P52jsaiXWAJ2L1FCkpFQYjWd1iZSPaaGPr2qobFLr2ju",
  "key16": "agymmZP3eNoqkSdY9qjPyyicNCdq1JrD9SsuELJyoN5caLmXEk3PqRV3C1fRAvNCwKz7hRbCsHf8iGvMCjMNX4e",
  "key17": "2p8davcdW7rbXjrxCgABwUWoLe9VsVecLgcEmfJENCwAmkVbRapkDkt1SmCW1qSj1v2moU4RtaNHM3bJH4LiX61v",
  "key18": "2vFEJigBSRgdpRK4fsdmnMTksPxaqMbNxbSubbpSe32d89bCr6cnefM4wAx1Y1Si51qdwNFySN7fFrsrMtjh8Ve6",
  "key19": "5nSBwN8Qu1WTXw2jB9vtB5EZ1EmRWo9bcGba7kbUfKYQG7CRfcsoqQhKeUFMkhawqj6nQ64PBTLYbKhuuVvd1f5Y",
  "key20": "4byu1U19Qm4K4jPh9htqNC1YbFAKDmhYfMtK2hC24pFUhZBVHzdvRwtpCutnBMmhVJsr3L5xYF8jnBz1kHdccV8n",
  "key21": "2TfvdS2VXn4RwH68YAJi3UkMN8qcTTart5pWEUaUo9abR3uwEDwSeHG3d7Zwd8JmMDwneYEk9uuRCBcw7N1zMkzi",
  "key22": "43LDwkK4EBkGx5MfbQaLuuuMQN6CZjUFvuf433UcqMpcMEJANLzogGkDwUn6nss6rqja6pdqj7KPzhQbfGLLqGBV",
  "key23": "MmCeLbi4rRxachHPYJp8yZXNKBohFFMvXKdrozzMKjSQgrYvwQF799VeH6X5mJ1jThPsgFnBiL5d8E2EcHVvRr1",
  "key24": "4fmu1dpkQCcPvJUWwD6EaAZ32wPE8JvrmwGWgRurwcnDGkf2FuZWf7o3ncDGX5XvkeAWmjmaRexxEHwBUGPNq2pA",
  "key25": "4fpVmMnjHZkZkpkkzFhDSgpSVPpofFjeQZU6TADN7wjcUNTcy2sbAudkamfXpBSzNMsxAgrMmEv4ZrAvi8daUg22",
  "key26": "62eYCzByFeqKwfuV216KcsFEvqsb13YjB1xQbmV7CJcYHPVph4cVuwLtecw4RpauKMro2DLMytGRZqWDQN3JmyXK",
  "key27": "4sgvgpPQEMs72Aic3jJbM8xQ3rQ2SPnZ9HejtuZqUf5JwTxrxAssWqExYGKHJpZnK7Sy1wKPN7e6zXJqGc5sLUfB",
  "key28": "67gcWUMYUMbjYZsjYp2aemDVbL2xQYtctW9yZyxksp6AWSoRw6XfjTB9M5LCsNh7WiP5vjnK9sJrorHU5pYf7iNU",
  "key29": "51g5VShmY7L3t3X2aXF8NqZono3xK68tKGcBdMRXyEReKCAXaUEHLe9MfC49EVMVNCE9Hwoe3PdBmbyZUGgjggUq",
  "key30": "vqw9fC834xN3DCfEUR9rPpYXtgW93yNA6RNFJSTsuH4T3DvYmTJscYYGGnBjRa2BPfiKcpuDhFFxLpm298E31wy",
  "key31": "5GvPv2GVPBMtK73JccTUzmbfwREDAVy4QS7fc2K2PCBdNjwQT488WhoajEWroD1qnfNj9tBqxy7jXL8GCQMSeoBW",
  "key32": "2Vs36LahNQ4WLUpPrJhM9zjuZ2jCd94CQEyMB3zEVEP1e6dWrABHoh8HhaLpMo9Hsh8hdiFSraQZHo51HX5BN9EM",
  "key33": "2u4raBXe2SWHDDke27dUXtgSCyzUtizVfFPraDFJvGq6EhQ12Z9jmiCcR9evtLJVFD3kQdcTEao4KMv3W3ihqZqw",
  "key34": "7yhK7thqfX6dizPannWVkcNnBW3W2qnLN9ix8rww96TEhNU9cnG7nFpJ6BJhtAD2BWmnjynFqi8TBfvZbTHCmFr",
  "key35": "oJgncYRATMnYkKTMVKibm9QXcbcWNth7aCZi2KKPgvp5xupDxFnfUjfmnLxkRAA6BrS7YKmzeDJTn6v3aevDKRq",
  "key36": "5C5QvHqGJgw62agRgpZEEtTqQaTALpMFjuqLk3AE8utcRQHJvFSm6RrjHRaNZtaEmeFwR11NjhsRSvgmF9ZQp3oo",
  "key37": "64CjoKWSWserddTPpRy3in9rfTyWtWstJ7tPsEGHXTJMxNMvtQzwGimZuDP4vzkywR4G9cwGrDhC9jt9swzaQxe9",
  "key38": "4y9c3jWRDTgVXfsqNMH4dqfnqiQPgWWaqifgPzshyDvun8FaEqbfpMpwo6SpV1FwvXARjR8sUbFN4YiWnr5VU3sC",
  "key39": "3563JuS3RHqui2WccZW6gFpurBuM9HiFwH8rGARnJfiwh8RQjh5XiVV4ZUcxo23ZC1ZziDFWWQcFFUwZdQQxCmtP",
  "key40": "4NoGHmNvjPekMgePgKUcuzgtsaf9hHqPwWTtSv3w9NsXgYKrDhaoiQyWGUbp96vA3scak2CBu1yuMdiYytAGnxw5",
  "key41": "4HBQQqv12sbnHPb3aXiMXvP7b6xwwJSF4mSBJdPzFk71Zz42Zs4jAKoJ5WCh2TzaMpFvWVFYuwbP4rfKsugvzcXq",
  "key42": "34gJbn3TwFFp4vQB19MKNArPpGZvvnLCFqHMNTSrVijzUY55mVfyYWHezrew7jhsQ25yWBW2y6EHozxzTYscD2eE",
  "key43": "47CArmz8Jux6ZLkPX2T5pS5NVsBFPpLf7uszXw3QxBvtV6is5gpWLZBqRNZGG4ESUQMZVyW7GsPAPj4PNm7EeHWc",
  "key44": "2Vm3BReYBSw9RNkVpL21P39xs7bnog9dxMqY9fJe4RCWJADXv5dWEiiw7utyWvYaxxBwv16vuJNQpcUYsDWq2bvJ",
  "key45": "5gyo92fRYAuTgYey2AtyBbxXJtc6NepuyQ1neGgxZxgCinDhE1eG6PaoFFpfRKvthQ3avCh9LH5YbWaEPKcHV17v"
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
