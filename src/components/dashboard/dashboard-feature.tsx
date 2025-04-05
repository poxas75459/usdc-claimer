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
    "3MmteHXEbKCHJyaTmia1sZqiB7r4tfuZBSMyPbd71qA4YLTPfvKiusE38YdeksRRG7cRnTaztXYjBbiTELht9TqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RfemoqdDK2yy1Xjg3Y5Ev1DWJiiwggHSYEr7XduceNawy63covVSPwMgghDbrdUcWBzTWd5nKu1hkoU7bSVc9e7",
  "key1": "3WzfLCuue7iy3eECpQUdH6Kse2c5qV3crfXhhorQ3CPGhE8aGQmJpozccFUgwbP6HdNXki5Lfg54AARZWrkSPDVV",
  "key2": "2n7JARdqX3Tbfg8rKjyCKNMFbDUKDodLPcptMz5psu9ppxGTd4fqMtGCRSAq2HxX93xs7KimgDd4uLM2LUm8ZJvq",
  "key3": "2aVhGvqkDJUDaVXGDjAJBwbGQzqaGyXahcdPsGhvqyRZzPPw4n4kxwM7PgzX5M6qu8ACvfpwhfDK5FydA8KBzcDy",
  "key4": "5BPTodt84DaatyuBjo5wX8D7D2pMPes4dPR4q2UJwkbEnmnpp2wirmmMfRT3wvE2UE6Qbmp594DnCDPFhQRxb2rE",
  "key5": "32GXTv3VEWJPkfgHeM1M4fqhWi2snv4adBrx9nnJL734LVXqxKvQ7PpacMH4oBsibxQtfwZk4X3C9o4vDQVKAsh",
  "key6": "2HHnWdb9CCDWJizpGuHhWeFyiJAgt7F11z1KDARYxTyY4ncD8ptBvMDckFuoepnEbGyiwVLSWa1qefGxwC5aSJor",
  "key7": "5tkFRzvN1fnjpi11JThFvimogTntdJ1drQpmiTybgmViUoR8ZRB1W18dUhAAd68qfE3RAgoH7RMxCuUQFiHaYFdm",
  "key8": "391xP2yjbpb7WjLSbybiBLpkac5cM9anBC9c3qAbAQoGRtv2gBSdxwZS1Ey7FNGXSpF9CdMWFjg3R4byEtLaAPvE",
  "key9": "2MAseKWk2H8zbhUpbfwYvnoDk5dJWUbJovDyF9SkBVH48Mv9LAseBHS994zEZAXpaAFM7YZFkbzKoYfaaos9k19W",
  "key10": "23nGCUUPBy7avAaSNL9y725cXU8LM8HknXCYoj9YvGwV1BaifyVr6nJeLZiMAbLEMWgHjKRzLpPfWjyWiSbAiQfN",
  "key11": "56HvBBdRWiUdNp8QR7eJEaU5wusEcf85ny4RhVG2wTE5H8JowZMLyrZoXm7VeTKepPeiBxBigi53p5U3UTbnTzcM",
  "key12": "39wf4awodtHmhSfWRexDG1Twv5udAizuHz4mBuYCY8McnkkC2mUFwuCy3BQdPXAtA75hikdgqRFcxe6ATUkG9UQf",
  "key13": "3FBCnbeqkk3yvgFhX9NpGj1rkzwkkTCmEEX4cyC7VESzy5vSYS4ph44EDTfzrU594Pv3QQ7WhyLP7KvBoPxJjSG1",
  "key14": "416D56wQyEjt6qvFP9fbG1CX5HaoVXvszNa2EBj88PTPrjFaEEyxfddvju3i8kWJLW25ybhpfEZLHHyTZsrWnjs1",
  "key15": "3rnC4PUBepd2uwB5rqn97P4iEyi5n2pp6x1pJeTJVUud2tUjuVPn2LvYGWtvJM9XpeevUB5FcsX1k5Y1hprkuSPk",
  "key16": "49qksZpfzN4btGXLYf7L58Q94DY7zYY6XDEuwXdKmDHF68X48DeULdEEzqbkBsLNv2is7foq4vfPt5RZZdy2mPs8",
  "key17": "5pPttehsuTRtiAZaFotregGwV31gqFTg48unLupc3RkW8EppuzXWJKdCk1ShkfC8gFtWomo1ZLQFNaidYvqhTbJr",
  "key18": "2dCdV5enWFHz49ThqoZENKLYzckzd2FwercDDoyVejFhwXgY9EoruzbHMzKiMRuYLhbKMQVqQNcZmbGmzLHud9Xb",
  "key19": "uJmvSgyZBxQ9uighdvMpaCHqK8awRd35NA5r8qW7fnyYiSGqwXVRk2KPTSqXFh2ZKAFSUX7VdzBMEazhD1rVJyH",
  "key20": "423Wv2XJ1FQEVrdc9s8UHj54JX4Dkwrzy8fDG3Y8qknA5ZQgS3gPVsqypwiLji1jRqaXhVaAcQsgkkpQPsAHHWxx",
  "key21": "vF8iKyfbxJeEgD9YVdWX7gohJbyaV3kry1ERzB6Z4eNYHRVpifpPWi3ZuZkVktbB4J9bsE5vSa8pEg18AAhARcN",
  "key22": "GALtVBJvUgrK1Q1PCgWPkG9epspidvHADnWVuwmRoyVtCtGJ9Auy5ZtgmaB2bE2ws1rLRCQDJmHxQJ9jdWzXJb2",
  "key23": "RUKhMYDgWNPR6DsXGztjWgN95XkZ9dJgWKjn3uHXFrKq5ahGg1ghAJQc8WGS41914BjvSKAre2u3LDNTjyEvHaR",
  "key24": "3wMsiw5336YJseEX95gdG1efckvYgRZuofXRkVndTrFpFeErP9XmJc9kbhQwJimuZfx5s9r96uGSeHf6bW5oSekW",
  "key25": "kLNDpjqDszE4QNBmbNHaM3ZrtD64ipzxpvvvSiJF9BuQBQcW1S3ngKjFa97Wf16rQtRFxBbpo1jxpei6edMwxcF",
  "key26": "5zYzy5jpW53txoSZ2QxCEBDFDryK8cRp89pMQTVXd217HMvtffYVyjSd549nFABan34WmutqqkwsSV1ZJnZSkMGy",
  "key27": "64oHhz2Yaftga9c8q26xNNuTsyCo4MQq1kUFpPHncCFLwYKi7CmGXNNHYVxHj7dTjeW9my96s5SAr5zGu9UBe5eC",
  "key28": "2Lt9vKwHvsD8BZcBZWpJeXrUpb2ENpAn58izVro6WVY29vc9bnLimPSSuUz8H9GE6VRs8Y6cZGoCMzdFKzMyNAG8",
  "key29": "2VMUc1FRgwBLhEEefn3AfxhvWo2YMCfirMpTi5aFnc1uKx8WhzxL9vyWctnubfbg4afVQfhuHrAnLEJfDniggCm7",
  "key30": "2JVcQ1y7JF3dM4XnH5QqoDyVAtrjYL1mSdPAg7mGYTTCXiEjNr2oJjyyBWJMh3wS8RtbQU1hu69a84TADNHqykZC",
  "key31": "5TCHeJz32djHRMnUNE8rm1QWhoSAxLNvetD99ZGJ23QsXiPRFtREhYwFRAovR3X6o6QSekb3WLEwrvSzG3bFQ3ne"
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
