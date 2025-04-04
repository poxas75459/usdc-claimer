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
    "4ktZgzxxsv4uc89HDn6ubpw6rbNkEpyDFtHUinDhVuAywaBoQchgPXSxk1mGoJw97QAoyHFfjFdaU1UYHMRUSdtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PGKGvCG7Pj2oUhJBKFGJTN2YdL2pMxH3Mu7AoBthypBz1tuLb6gtX71zpQqwaYTLhiw9kTBzxR39tCVjLUNBcRX",
  "key1": "5Mpc425z4tTTA4d7wJYjjGLHFFUxKZDk29X6mUf5AuPKKAUnEATJBUAocR6QjFNKLHh4G9cPkPYfXpFYiCEa9CYk",
  "key2": "5gLGMcq8y61wzf4RAp32RYvTMMn5jJvbx5D4qnLWgbo1vkKe9t4jtNRSAeNQFYC9oqjhqJwTTw8DqzkrpyTpv7Vm",
  "key3": "4frpbQTQdqpYtYahqDuwRcBNhP4AZXAZ8WQjJ7XTDfbrpDQrQWB6KLbaCfGtYos84vJjx6y5xZ9s5EsTKKcFrkRD",
  "key4": "37V1YRL8h9nWV1KDbT11KcWfQCbmkPMaaeL2mB8nb4KgY1geC23cujdxPE3zWENe2SjKjb1iKfaXxnZ2aPscDLaS",
  "key5": "zw1ttkkGhMRF9eLkBHvLpHJUG7msmoD3Yy6Zj7b2cqVvmLe75CJvc9ZUodY9ysYGdpgTzaovfwseFYNMDKsCEo5",
  "key6": "2HkKKGESk34RXbk57tKsXECZ2yP87avDGKqEoEsZE1V1nrCLVF2qbDSTHaB9wy38CPz5kSc42dXHPfXfdBaP6zYQ",
  "key7": "2NFpTpSAjJQCkNDhhQuRo9meV9hbWao3Za2PV1EyD5bgYZNS4BiD2cxwkskekXeipUTMSPAJSN1cap6ygb7BkzLr",
  "key8": "jQRrEvT8sYjkLw4VRAkhmQExZsVPrXmsv5Jg77BgUpcG3mPoMXsJWQ6d2cLWGkcFFrK5i111TXveokVoAfPf9tB",
  "key9": "53tbx2qzY2yitwpUadHjAuGiAGdAq7maoRML5ivy4kUZUsm4nALkpKfqvQEn3tELr3AWtqrdjrYg7ExGbunxkwtw",
  "key10": "5ksN3BfgYzt6BjPAcw1uKRK4nxpVQQzjYNyK4LqmcoUgdcj1dq1YwLHdrqSDtPSU7iMuEKVtBqpXJKU446jxmeY3",
  "key11": "5gSK6nQP4AbFQziL4bReD6nqR2BQvDcKM7cVc8UtxkPp8RzorGQ3RxM9rZ3JHLpWAcafDkSHjb7MvJr6oMnnYPqL",
  "key12": "4jyPaXGWmNNSnrgN3SKPniJ9GHc6ziQqwoMSHAk3yeG1f8uPSNwhfuVRRJ3R4pLKJhQSuprGu4CCbymitKYehKgU",
  "key13": "5EndKzoj3H1P76Xpe3HBMbNBXCX7g4xkmC6m7BQWrk82Y32cFF7vHDosAu7LP2Jt4vFaL4Eg6xqYpRYB84Y3va1k",
  "key14": "5EETrV1Lz6aUeeDi59KM4GGKaxYBTDmAEJ98GGCJsdszur14NHiyBBLKVj4vc7HqrFrS8KXrUt5t3VKJHgdxK9Y6",
  "key15": "5RpDqNfwnXq3yTxjLLwozHgqRMaJxSSnGRLCopG3ytXBKLh6RiC4SUQozpVyq4kzHRnZK62mwM7L7U9dJWYR5dUu",
  "key16": "48EjVGvuh9sG5Gg5KWs4FQE9uioBPEC7deUrgjHrSRJUoxiGWzdzr9do7wjRmkhMCj5f3LFxYGu1YW4LmjDNdvPK",
  "key17": "5jXJKoCBQpSPTRndvM1c451eFcvvnUFrLhbNFsbyGWKbmzafGMd5ubA8woUPWLLaFDqRdAZZ9HguoBzpC4tzw2YN",
  "key18": "5uU6MmuBbupfVgD49G3VdV2YuDvbyn2a9uiMqe9ZMCrv9c3cAzzjQPXX7qP71rmxJEiSDkPzCyRk5TQqXkd56jQB",
  "key19": "496epxNf8Vgu8dJn8ZaCCgTJd51QZpBoGznmrKxYYVPFv77z9i5DoJo8ynemW81p2MqqGoY76NdeSJNmivdRaiSM",
  "key20": "2nPNHmAsrnyzPeikLz5rUE8NjuhLfag5h1CqfZAPkPsZAojpBKbqeZMMmTN9yxFBn39zW1tXLKM5hYG22v5pdiTj",
  "key21": "3fsWWYGQwi3uHACeUx4NuwwhM82zMKxKRBDh5dsBssC3mxTfQGJxZQuZVQiPoXKtmmNRs53Lrr6UbjFdgnYWzSuq",
  "key22": "R6rTyF66H4UbaXZZvEQFjGxPDq8jMwuAf7YziBS22CgSeX4YgX736DygZVgAKSo93d3kyw7vxuAv115CdpgbPmd",
  "key23": "4uQkty5wUENF9aFyj7kBxEJrbXtaRM5zRNoasTxA9QiEeSQEvdBYkvePtaTaCwQwGmBUE45Gq9y4tsXzvz76T1Wc",
  "key24": "T7jC5tySA6dtRZuXeRG4AsTR4TaEYxsKTWijYXJ71HLDa77X1rkVSMHmr52TXdyCvjKq49wConUaeJxkcQ9v7q9",
  "key25": "36rUSa2kgeojVT3VAZkjzEJcuNjTui9WWtnSKq1ctK1RTchGvpep5oqgBo9GoFfVCTGxsGJTseqmB7jD9q3SaV21",
  "key26": "3wWo4Vd79ibHx6RZHf5bTsPieGwXWRb6hMUDX99GGvewrpaV39h6n5REkCC3rZnNUE9AUgxN74jtBej1s35LVqvs",
  "key27": "345Szh9urUcEuo3kiuM68XDnSSYqewB8e8NTUvEo44ysexGvqy9KYC2VrFC4fG5HKxVQpRnCHD94nqm6tDo4BDcd",
  "key28": "2W1hxVt5nGRjfjkstTWvjb7Foemf7kD7x83ZGd1DTmq4ujY8dPs4QAe2Vft2xmm32Fh8huPGjHeHe4A3oLosszFe",
  "key29": "pNEz2XZ6eDePWHSyxtKrmzWyQgNMYaaAR1TRGn4eAr5u8GsQRy2d1VguTmubkwzCQskkCwzbBe13MERdatNZnRX",
  "key30": "4L4HPoWgoUM4vowXDRtQNCCygaXzLbnp4mYHFA3jvLxfBnXpuxSsC45ncLfjgvNXPakJqqvUii1TjfkbF2KxtfGK",
  "key31": "2yw9PK1v56aqkgoGDzJxLLeQeD8Q6f7WDD5kHtRZMBVkS6ER3VYUVNRHxir76Q4zxxAvWqq9VC5FPmbDXCcswW6d",
  "key32": "aQArjumN3GpGFNtfCxrXURbYQLvZvqCe2Hoc9Xa9eB8zkZq5UnGdmCXBh9UyBeoG7WUNbjonmE9SqmMoFr39FBg",
  "key33": "4H7uRz54FDCrzWjbUqc3Modgc9WAQNoA7Zn4fUxyFm2NxSFMzPLGdFVbhKDyb9Q2F6ZGjGDi8qrvQ8st1JJMSg7W",
  "key34": "2CCAyfeNweo5wmrLLnd7n6SrWxksnP4Cw64hr7iqDBevSPryZKX7PPMdxuNm8R2T4S9Spe3nE4Vxhsbhe5S5RQ2x",
  "key35": "3tuHD5mdMmZkf8GnmSts2NvrY8KMrFyCgtVqJWkfqcpxnhPmZvMekG38imM61Pr3bDC5C6dw2uFtsSdBo75T1Mpz",
  "key36": "4KYFPPkBszFDSiZTEqNqtVXtG7tMXaYadnsbT33dJuU96BjQPt55UXVeXggbtso4SNyGsN83ARA8L3n61i62xeVY",
  "key37": "JLGdRPcWD1N2zrrWVeztP1VUMDf168viJfLtqBGvvadkGjuM7982gmhseoyEXh1Ut79SFmfHKqKKSy4Y4rce9E2",
  "key38": "4zbQtiktkpBVsRMtWWYrYRb8k1CNJE3Jmu3R3CvqcYAPRJD7VfKAH6PmTfDpjV2ZVBf1rxf95K51p1U9UxbcwWD6",
  "key39": "3qvC8yxqLRuL4UgngzRioVnAuZ3uKk9JtFFEvVCQqd2oe6u6ypkpYitcfdS6NzgGDzJpVwzL9dxsjPU9Jy5vBBmV",
  "key40": "3avRuBZGe2ydFLuLaADsMLfc1EmSPnwv8mJBVNdLaj4ezD2GxFxDXNxnVPC8xkCMaF61ERmfYvShLtNM7trownm8",
  "key41": "2xzjfM3XMA8kkMXFxC27svbqtToycU3g5TxcGLvUH6WCHFY4Kd7FNaBv5LvyViTbp796ZZPbCUrPYHC95kEr5ZsJ",
  "key42": "3ck6TGA9WRFwNfQM6pmKyafLxeJqJ7rgEfQ44T5WeyzhfRz48xiCeEEeuoe2Uo6Bf5APbyn4KLQFCvn7YVSDPWKm",
  "key43": "SE1ZA8efciU7QAsTEp6MGAnuJ6udKJikCdFfLvVFaumKr8ffBoHiKTwJr5Hp876guwjFXW4p8eBBrKpTQXKFsuQ",
  "key44": "3nDjyzYPS3VyAMW3xAkcYG6SXoTMjj49TknU9Qf9nMggewBwBNTyvQWRvKj75NUuSssxtxBi3aancmBn8dsQEiJD",
  "key45": "28cAHwYnjt6nUoSS5vrUo3NA4EyEq8GgY1pMPvPCZ9Bm66SXCf45X96gkVV4JhmnnSJRkjc5pJbGH61zqwZSRJRC",
  "key46": "5VGiKiGzYwmYBvrGUCkDxRRP6z4T2RHyHSnGxV7ukLpY9u8Y8obgQwz7sSqQVZAL1znDVqEbhNc6NbxaKqHpaEQm",
  "key47": "4cXea2HpibEfUV5rF9VeVQyZE58hWHEKupTWBgTL7BurS8oLDZf9HPDNqCPhgajJY35Mx4FpXszLb7ow84Mcasa9",
  "key48": "4NmiPY65G8sob7pf53rVEuRzk39Sy6paGQyxQNCzcKLyV29Q7DKqbeHNfwPwuSYETbHfEH6mYE3c5xe9ptp1ZRLL"
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
