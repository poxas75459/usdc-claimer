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
    "5T6Ky9Ftxf5N67v1rotsYuHrwrGYSz5sR26Bd1u6GnUd4B7znVxU1c6VNiumgzrrk8Kpk9JweaW3Rme3D6CNUGP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k12vB2VTT4gsmhHi9qZf65WrhfvLYzciMCHn37C17YWibxwnJZEvbEhY2qspa3x2Ekpp9246ZWcXYeJn2rYTSda",
  "key1": "4vEonJ2hWsFroPBVBv6YVpxjzCtGNLaxrtyyWu87J2o6XHQyoixmVw7idZTygbs22TJ7SR5BP9gWJcKDi8ouXEuv",
  "key2": "3pjG4WfMRzU7zg3YKFA6oMkgs3idycLzh8MCQ33dfugcntuagcjWT1WaJqpLgqPDkPvqyzAgLDZQi3hNKsifrr1R",
  "key3": "2pu8BTyCvvVQp16JHgNQd2CThoG5vhQk7cvqC3Vu6uHVP5njvpj3ERsUkvMxYMDnVZTknUZUf29LeqPJDHgDXKMc",
  "key4": "3EdSQpNEeFfKRjqauwMmAfbnj4DzmpyXDRLM35hJetPoqHSam6nN6YoB7vfFdDbHjg3fKkoAycjtvvmFwKrkJ7KE",
  "key5": "AMWKd9SseBmriyJmHo5kx23EEBNDSrHLWJDihnWvwXA424BS7sLw7fMZUF4RkZApR8yHnuTAMBxwFLt8Xa2pk9b",
  "key6": "3bmtwuDAjziVE9UrwgxQkt68phCMRCMmpNZ68yy1yH8T1Xh7sujwtXyfNEFcnYVmTX2HPDqQKq1PbfiFjhGMZdVA",
  "key7": "53jVs4EnNArWzzTwLHZ9VfppmYvdmDKZgyYjHBak664TUuTAt65TPPMywA1fSkHfJxpeL3jaeWHpWQee4RBMoXVx",
  "key8": "5qYuE3en9U34hi8qp9yqXBsBssasggTAFyiViWFthrAdPd23KY2VmYvBQTehM7mRwvyxrerwE6t68tDBDcaSEtTW",
  "key9": "5rS9ko4C8WHBBhJGGUakyrK453ty1QbzC1VzoGxfcKqfAyLBQXs5iBriN7dbmDoCC9BbT8T553VHv73nQ7K7Y7iK",
  "key10": "5f8Nj44JipRFkXp2SwmWcVZHrqsAAjJ8f3VJ5AiSaKzcuNbHof5MyWf2rofW36WyNWyWh8ksis3kmJ4ZMkyv5Mwi",
  "key11": "4hoScnXiju7f91FanhopprpXMcWVfxEXsgXitaVcv3FkLwh5rXw9ZpEFCLRQ97JkyqJCn125gpvJtPVXcNztTWn2",
  "key12": "2Tz3yUcGX8gyfGHULhoJKHBns8TVkYMfDJqFcXZTzY8ckw24hkgweDQPzWFVxUEjUpraSgCypwx5JNku18Zds1gi",
  "key13": "57WfL6V1RyDsGEW7HKAQVXfBXioWQWqGvZ9yBMqPhpcQSnA5WqKrqBumGs2Lz1UeYuxdeRW1mQssLkBQ4Pj3AYLc",
  "key14": "gjKSTJgDuYaXk2W9yhbvM9hSatWs3uPhGkuDzqq8emqGbk2t6Wki3pBjseouTDMrajLx4d4HpJ98XhQDNYUEAwb",
  "key15": "3XmS1KF1pgvZQjRppcMEqoDcL4TwWABqQNFsZ7PASzT3wX54YRUswChkk47zLvYmnP6GggM21uma7kMR2CNo4mec",
  "key16": "BpD1gLtbzLtQrshoTUAtHJnMuWi9GnSiZ6mNVhCBuoXPrZc1j78Uy51b88HYcSLsmh2CraREQyfch6L8u4qTG1t",
  "key17": "3RWkHBWezYAhidrqxMb7fEiRhCJzvSZMJBMGwy84jNLmdCWRFk5LupswZSbjhSLRTAjbnZiDPDJrh1dfdDVGCppX",
  "key18": "DvV1KftZoBzBtk1VcTkLDepcMCZvAhR4fKkQNpu4aEBf93pEZNDyFg4xfLajJULXVceFV71wiCdGyo9uMYZUyJP",
  "key19": "4gn6bqLL54fKZF2zoynuZ8qEtUVnWMrpAV5tWca4LucaNng2QHtb4PJ1pRbsFUR1CRLxs2Fsp8tZ2x8sHJjyHREg",
  "key20": "4EJ6vqPSvSrqwRHF1GQm6zVW5LM5J83SFxrvU1nbR4HzGKw7WcvTY7WnykuoknPWgdpSjW4ZrC7FtXVYtx2ppmV1",
  "key21": "37VwgNxfVPnqu5VMDxLAwAaxAVYNpDBhSEYaaJEPudGtMy2faApuUYa9iSfKbfpdFBJ4g1DchN599jquu4L2SBEH",
  "key22": "3VBbLdJwPBkgKDqcXPC7vNG2cpbfYzBLV3fiyfmnK5G674fvyTUHkkCFZ9pHVYNXbsB9w55Wecn6BymJs6vUhE87",
  "key23": "4fenap8fZDr2hjNcfnQ4V7sbJmhbsTGGtjL4tDxHEjTVZoDCXgG1NCWJQniGMiKMRBk4VCJ4rnHXMimYs5eiJ4b7",
  "key24": "2gs5H2u2PMwoMwsags3KWaTQyrurMjoJWxqnVutB5yuGYdSGxjF22ZMRRKmjpfUfzg331akv6GDUpxa3fABptvnE",
  "key25": "5XdsoXyQ3fRxVNEPEoft6PZNzU9LuQhykUVzoNQN7mZAw6ees8XMB5EacruPQ85JixXRWta6SXNWatwfSkuSK5gJ",
  "key26": "4K9RiCKLAtDMNFr2seBZuXJtGDzHYg697xWVUJJoLSiiPttXfvs79BF11VD9K3EPnL7aCMEJ3StQCAu4Y6iFtsqo",
  "key27": "3fhMYTxoUjwJhzknTYnjyHMDJFrWEmcsiMAvwN7qGpDzyWqFt8gwZvRj2sh6RH7FPEjmXDB3eR2Ep33VjcgtEcr4",
  "key28": "z6wgCgfHfFpa5FcEcS7NdyrtthJbzMisprkK82EaGqjruBkvdykseUQNTTKBRoYQ4tahdpBcpJVYdfktK7zWsjf",
  "key29": "5VvyxXkvKZCJtU7LGxeZqTCsc9qchQVr5qz9gAzZaM6sSPUSY4xpcWvqkogUaDP6maWTfWYF8eJEdq6yYBnZ4Zft",
  "key30": "5Az13F4PvrGuWgjRWeySR8GD3yWnNBxjST9J8xhWviYg11g9h9TV14oxLXhhViqqwr1nbAZpPgtEJC5KYMrhnyFV",
  "key31": "4XP1yU91pXhFyQEWQo3d8EiMyeSMb6PreZTQ1qtoLzwdrhkJWX5jB9nrL6BcfrKe6ZfjDtEsHpyLowaVib4z3NpG",
  "key32": "3m7B56tUX5okgriHdCbFgftdJwRRQ1DLoFmF9ytwnGrDWwa4waN86SpzmUQM3saBnf7dr3a1bjrNJhF7XNurmn6n",
  "key33": "3Z7ih6rdePQenYsNThv9jAk3TMK8Az2WZAMeD14fFHZsWf5YsDgsVxXhX3MRaCQKauUpaKGhDGJnE3yDREyV9wY2",
  "key34": "4sqWjv1vpFotX8BLm7FUDW1ptSvM287nMdmDbuj9W8whMp3rQg39d2D9o3ZifCiTTt8Qu8qyj7jTpNqEEk5gZTmF",
  "key35": "2Hpdzd1f36umrmPvH8F4cwpZ5Fizjm7ABnLmWbYsrjFgiXWPidfbMVsBqHmXi816XFGRvTfQ6PVPrNeGRCxyHgW9",
  "key36": "4VMwGtREb9xuYm8YUM4k6iLQCdQz49su3jNrZigDBuWMUyNB7pGmYnyAzRYPKnEQPCSG7fPgyTfnuEkW8QBJNj3G",
  "key37": "3WPEYYD1Lx5jqCgsXvzUygkZNuGJfT8hPKcbH8Y1bMtokRfMCAtqtubPihLnnLH47gAugQUcyxrLXQsn3vfECf2"
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
