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
    "rDofFSoDTMWetfwGc1qHGhNkphX3Ym2zE5wmmszpiUD5FrfcxbCWZaRPWKvK2MS86WCXUe8XyKGVYejQ4CsXNeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UG64YZpt1yJaYv1qXsd4Ef4nYqRNUWUj5k7F7ASm1UWAFF5LHMje56iaRkMp7SyGiGXmhteMtEwqsh8qdobTT3G",
  "key1": "2hYxukHZBER3dzi3VhLUntEQpyNpUwtR2nGfAU6Cn5wgBwjxVhDvchHQhJsHpYkGgXGY83LCeF5bEheQPjH1b7rL",
  "key2": "5J6x2bHvDWQpVcW1sfSLKEwiWAhk7KeJHngrith5sUxnT3h8M7Z5nhoLs47292vorxcGRZqyjMmFo8yyEN3d8MoP",
  "key3": "9D4rvwW9PNHCE3RFjQAPf3gvVpr1yHFftuos2ZBwsD94FmTjkeZacUHi6AkWJrmmgLHcp1mBdmAWS8AgYKz9RzD",
  "key4": "61okJQ7iDP99569ab8veEbfzEXhZgWLR5Bh1KdHwdjHuioytooM9i9QuJoPaNyZBXkmzT8ZmCwRnr2wQ5vW8ayC1",
  "key5": "3dWBvPSc7dphz8W6RHCaYunZP9CWVrTsaMV9xTFog5jJSKrmYxzPGM9d2Xv6MNm4jpDWYmgT3cbMH9hLcXVQJx8G",
  "key6": "2McCGRW2Pvv2mmp8T9wuQoH7bhRcppKW56cGe6zWan4JRvcLZ5mD9uBoD1ngnH69Xm8MADL3uidCJbFws9tYLZd3",
  "key7": "7HJ8oerLdmyiXiueZ4ZKMyBC4KmDR3ahCTeVtBNefw4GbUMVtMPjAsBMNrjXdYsLnqHAdKX5Qe2b3ZikmfhFn79",
  "key8": "5BBtiz7h6bbp8pBSWNYTfcJjyH5oLfx5YAQFpnxGNFcuM3s31CbhCvWw9LCw8H7WC4tfzAKRsaFfpytixydMTUmb",
  "key9": "2ojDWUi4G8fDoi23Bjq2mT53xb8dnuE7ERFKDobY1cMvfVLzkJ5xJ8j9LJVfDMvh2d3HcuAo3q369bbLppmN2TVH",
  "key10": "3SVU948Rz8nmhXmZEjQ27g5RzwSVoKoQNTUdMPpJ89vdkTaqauTqevrDBrRtLKfQoeCsCvbA5uHH9iVzihMjddGR",
  "key11": "3XrSurCM55qLF8wgg8QLyezNCVP4TrXnKQL6pwFRTV59HKjqKs5K8P5stCPqv3zbkK5uc7rgYjCumrR32Fb63KTy",
  "key12": "63Kwk3jif5DECb7BtwAcBDX2dW8qFUXzdYusiXNSKyiyfUdqZMU5iD83YnstZ22sJEsJYwCqCuMMvjCkkZxaoZGw",
  "key13": "32qwPn4vuHKHRvtE8f5t4Hbwr1TDMdKuyCG8aUaVFSdN4b8fGLHsKbVqpzqH9LKgZMDUhdtPCbXLRLq3jhDo7tYE",
  "key14": "4RG9MF4p38D9vfqfjkQu93Z495VZRxPvAPLkZVsWTMXySA5rxAP4G5NYVwM1MDXSKegf7kn4pEYhKAs56MPwcoxr",
  "key15": "4N1pg7H7eq1SCjMuFi44wy8YYLkghYA2nHdTvZe8Ff2SnUz3ojwZFbq5VB5x41z2SexNe9WVDxwHpxNA1aZryfut",
  "key16": "HfmfPEW9fsm1je87kQnRN97PQ8v7xTZspkyXFPgcisHNoyUMzg3pPyhEcpMroNNvnv58PtNrK3WPLJZop6c3vnL",
  "key17": "3hE4oZRv7jTfppW1nN6KeBTZWPPtDfneDgCKSAUJBDUrKiaG6mnArbUgFMV13qwkeCm5tE4fFy65wNRs7MXutBuJ",
  "key18": "4p5GvrDuCTUSJMcWvhhwagnV3zB7ki21PykePg9VGqoufqwujHi7RxLU39uisE8LkiDeJqz2X3R9GUXU4AzBqrZR",
  "key19": "2icmi5TXCVda3oQTrdgtRsG7dz2SswVDkfVGwDAc7ALuNTVGnEa4yhtpyCqadmYrP2jzNxbWioCC3GtaPtv5cHid",
  "key20": "2vKhDAAupnPoWVHjkfJopp3WzL9ajasQ2n6WGNAiauwWMiT1wp23DNSSvz4UEf5d8Yyc3tUGBbNPJEwsNPtrxnS3",
  "key21": "44Bd3zq3NDCxmZJK23n84pktyFPRN1gR8KXcmRaFh7ncnt4wPum2qwNTbyTqK3kdaRR1p3k16D45iNUKiwfhXNA8",
  "key22": "2Y1QFGAkqQdNdAjq9iE59GEGbYUfwfmT7ZF3y4q78dw2QwvnGq6b22m7WXTbsBLXd4etYvgS66V85dP7mWuFSWN2",
  "key23": "tZGrsMBAzok6wt67BCoa35hyY5Z1Vh2Cy6rsheXqapVo8LN8A5ZrNkSoJf8sqQUC5bqjAGQrnF5MZrsoUHvaG65",
  "key24": "2Z1oEiKcypYrLd5qcBQeXZuGqhLFF6YeS66hpsoJCsHDw1P9vWiMYTHXtvWn76WJ1fFeZ24cHaF6HeyRPnbrt1U5",
  "key25": "3E4hAQpNAXt5iTBci4TZdWDe6cdwiFsRQLBH8Rei3qZJkaQKuytytmAb3y9KpRCu1U4ynCBJBtjdEVbHaWi4GfBE",
  "key26": "4MfRXk1XgxrpJkCho5roXcgPis5qXEH2uxMFAeRduX2CxU6531t71H9uKLSsKBgdZY5rqsq2JV6q9KBNHPMJYmE6",
  "key27": "uEMArS6gGGGkU8GwuWi3wdvv9QDWGTFU4T3DnWMKTYobSqcWaHqSzy511YieWMNKdcvsMTRAD6UggJnzPwcie1k",
  "key28": "admfaVuh781gTjTLQyhtNTEDr7nBnsdW7HpK3Y4ewKYA7pLrtJwZ7zPhTz5t4gVnU5qyBYQBsyKjSknbSXs7EBy",
  "key29": "2Kyfz7qxCJe5TPgth4GcciGHDWn2FQfPFCcUUq48xe8iQ9Fp5pnEHMyaGPEmm2dUrSKtFhyzbHcKTW1E2KsqWPc5",
  "key30": "2eYgP4PfYwY5b4YwSdW3GdgUqEJtxpvKmmWyKPmo9Rgip2W8ZjxMyktq94dTLYQeqnzp8biJsyRSoAuF2Ym71RET",
  "key31": "EZGrZGrwHdbA6SmUwfpwcGwNUPGjwg1qeZACfDj2ndEbYsk6p7TGYHXRxpj7CR8u5SGsVQkd2GRbCqX7DY56xsZ",
  "key32": "2pT6F1b5g5J9snCnURqBPq3xo3J8qeBVKH5wRWqTnM8U5irrJvDCoLjL82wQf2NvfZ7BwNn8RCAtHMRJrAiz9p5i",
  "key33": "8piKvMyDKqDT1VzjCiKPu4zqEZTzwXKDAwh1at4Wa8UEKMuK6bgst4UrNf8WUmK1oJ6NswLShxU7GNsrfVrjCoh",
  "key34": "5GyUuG8u9vEJCaTEZ3f7F3Xepo8ksprDfhe7Py2R4rhZTWVk8AJdCbFeuA7dNxbCZbt2PShh1XXTES7AGhrJA78J",
  "key35": "5Ypr5ERDogQSq3hLrXgvNtiiWYGfLvfi6PgrkruFPTFUq15Ag88nsSfsSUjc1w32km4tZnzMUyKUbm5SE64RnTSe",
  "key36": "52cnVjrNENoFT3WTRKStmbgSq5Afw97Jp31EPHcRYt1p77sqB6xwAB37ibNZWPbMxNBLNcLqHHFPB4qi5QsGkxbR",
  "key37": "226eE1PHA3TefWA7hUjBNvMgsmstrrqZcAQAwSJiotLPG2n1eaoxouFB6Scaqwu9svY8SX4ZfgA3TdZe3Rpk4Apt",
  "key38": "ejGESYZ21ukVV5ZDKVtqXiyqAKwFqcmGQTZ11CnCoSX8pKVnN4Jrieo7y2S1Wf7AodjEqac7fPdLF7h4HR8bEdd",
  "key39": "b9wDJcnRHmSCYMi6ff5kvsFyNk6cxA2ASxoE53zWaFTXMr7qK3dyF3z4jNWwM5uQHGCcsyV8oGm5cSSqfRL2ftp",
  "key40": "4TqnS5MRQXB7WVNTMy6zVK3TTY1f5UUmWMdhpwVMHcELyrPqLinaGcFNbSSK2sTxQDwFdKfSWCLxTD7uEgX1VWkD",
  "key41": "2iMMqKWSpbR1NpDbeRbPg8P7yiWuDnGDz6UdwaFUEL1FLstq9dF91eWvqDQgm1gmL6npjfhrqtsN3JGVvY4mjaqT",
  "key42": "2ofRSpC75rcwi3pC9zLkPwU6eQPww9tPHT6VPPgqs3CoBoUKDt9Wo2RxHuaVcFoteuvZe1bNWbLL1iTcZD54416k",
  "key43": "62AbRvZXbRtbs1qFmJrGvjTqNaiWhXTN5Txh8YDQseoFSENDqNJ7eqHhbr2mdWs2giMvKJcnFbMXhjcXciv48or2",
  "key44": "45WY9vFqHPzypPZ7Uf7cW3UpEWv7b8mcZsgdfP7MzK4QwvQfMc9Rypxwq72tQ2piMtgw1ky7YgMRMQWH5GyRphef",
  "key45": "5qHRfD6ATyFgpC4XnTzkVVmmF3QRUHE9vNamfKu8ZUMqMVaTer1HWRMJxgoMJSJHpAJBsSWXGAZmbeF3e8Rm3tRf",
  "key46": "9Z4i8b1CgQPjQwPqnaWg111Q65X1NyEhecWPSPuX3UoSaqooNjDUQpjLE2QvFgwfPcWa9WwqCBYLfgySuzpSv37",
  "key47": "Gz1neym7176VPA7zrEDH8LsvCyNFFTr5iFeBPgAp3YH5NctTq73rgvxQoxAj7udcsuRrgBNdyqKMNX2bwcrSii7",
  "key48": "3JyankPJ2buWUgxg2yRGYHD5mgBoQjeLWCoY4mfQfNFUBKuyiv7FRb4SVB3FQnVJWP1hDB991svBpcqrmv1i8LBy"
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
