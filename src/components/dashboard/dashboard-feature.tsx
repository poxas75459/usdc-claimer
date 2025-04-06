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
    "4MLvcqoh4B7emjX1TFrsEFCtEWqNvcMh8g8xU2WDULnGnNwxgG4yFtR9GH24kYw3wmcDH5kE9xfJgmirr9AwySBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VStGsx8Zwr2kg1m7swN5vg7iWnaYfHuV2RPtYLNV2duoB1SCYsJQxEFc9KK8jsGn8ggeHtoaGeMZhVn1HbzhAve",
  "key1": "4sSPg6ebyJf14DEYAh1BBZzNCe9uVP2dN3vgPtrXvVryzBV5e1ocvHxxfp3fv2czSsnDFbTP3nRy8QJUvkh5Rz9n",
  "key2": "qFTKxipYorBX2ogs9CSNpt5SZMTECkjnHKHvDwiEBYDWCcp5JQTEeuiwgk6hitfwv7Kb1mfqcvfVYs3PXZXG8QV",
  "key3": "2ipMs4tGuK3pfZiy65ua5Lnyns1uV7v8zJwEruMvu7Q7VeG8AnmS1i521ceBfsv7t7YHuFvrqWPghEGiiW526Au9",
  "key4": "2bF9GjLBAT1Ptfn3qVg3P5vJk2cX5dqDq13deFKCQwTSBjhXEgCHtB1JHWP1DnvBHFNdTKgurtB6azZVthCqwqtJ",
  "key5": "3qHuC6PgKSKre3xW1SYjyRr9AVqbghengdM4BqFdPTvrYpZWnq5BZK5TP2SfqEDiZKmixavzM4EHGUcdWdWnpjGe",
  "key6": "5vfqY8uRX6a4TjeZiKphnUYro5mQXa4fBppCdk2b7AB3zSWyMvZDgjkJ9zVRu8znK7J2qkBn9aaSvc3htgPfbNkN",
  "key7": "4xsmzcWiHNwtpFBzViKbZCmkGKiMeLAVNBMJZAyT1a7pyG1puTxH5zWVJfYExeBd5J3G6gAofBMZLzMDfuXwWKkT",
  "key8": "jMsRkH1PRiHnEMCRMxWoXrmS9bBDifWfan6QhUyJvnj8zK7VQHHUpyrUJkHcj5NEXzp7mkT5pkknGeRxTG1qoSK",
  "key9": "JjcdB53VncKJEsZwCCijUGRMQfULBukxGF1k3ox7w6LDLvggqcMciLLfwrVbySQoAz1ZTnDSX5XsDAK2fK8XapX",
  "key10": "2XG1BcXnUwYof9W6dNKEC8KPsHuujAWe9sSmyUX2GhNSmMwgeg7PRQyL9QsTUqL9Z4Cr6dkEDv1584jaUsEeoQAf",
  "key11": "3Dikojc2NaykuYoUa9bpVHAKwobB3CYQwRsrZcErUcy1wxVTmw66kTH987QQVBR9hoiQkpuXzEWnzHQz6snDWZU3",
  "key12": "mjZfBngz9hwYy4xyV2pPCoBEPSQ7CdanoQz57YiEa9QzBgHKQ77pzt12R3kDCDkJZN6HQWuEGoQmvTd6qf21t7E",
  "key13": "4dGm9N5zrvCtYvWCKJYZGRmV6GgjKGW7uukphg4iF2nNQqhWbqoT4hXnEYwWvXR93cmcdKzDn5VRqANai11mvHgx",
  "key14": "5mXdLSWGJokyWPX5XhBswRTVtWTkZgLb7zy3mAsrnXN9FoJ9GeQXo7ZwYD8Ub1WGmSgkCPJH1yfDbp7UrmxsSg36",
  "key15": "5iYJumxwqZSNCzfTpXuqofWeuW7pxjcosCnnaLbfvXbxpNa6vqdLjZee5GC4m3nLRfHvX9eg3yQYkJJc66nhNBDu",
  "key16": "2XvuLY7nvfV6DqsZB3Dz9W2gCjaAsbegRpR2z67wRmoSdGUCbzb44XDqKdCTdWv3KF7pCuoTamQRTu95isRXge57",
  "key17": "4kotwx1VC6cMgMH7L8ZJ5Zr6GN3xYxCfqRf4KQjw2vb9UmBJGfwjDFDU1qzfb8EZZrfhd263qnQiSDD3y5ACD9Bg",
  "key18": "4HxPvMh2qvdhWhdetvyVzphk7zGLZdXyS7W1cxN124TKRiz4Lrqu8Ecc8SjYCNFFsjfD9BKbYao6NHMaVwVX3gVm",
  "key19": "2ufLm5Bm4yjC68QDBtM3xNw8YsBWD4nNYmbf9vRHTDD7GJh6gU7dvGND6SLARyd5Ks1fNyQW7Rh8SQUwqFYHJUPH",
  "key20": "25hWNc9U2jqRTwZ3u59RLxyPNj5pa3gD4mBPKUYrp43xJFdXrjba5GRfXi4a5EBeAa7zAvYH7qutBzwuxWrQmDy7",
  "key21": "4tG4wvrJXQ577N59ZBAP91RbBJfRBqNt96ueVh6nYZ4dBxEx9w82fVxYh5DALTzKm39AAp6T1xUwQZ9GP9vhbEMq",
  "key22": "uCAz1F4xShScupZPVhmiPyuYD7oyscQixASXo2mKs8MHoMVVRFY33n867EzkE4Fm5KJa6XD7GE2Vn4efVzLMkpV",
  "key23": "HSPvLW78MZCe1vuBNGFNd4e9uPZgxN22wyM5Wz1ymuBmsJZVDkTLdavNLa6rUYApnoUN8EU3tJV1ne8DoWSvVJt",
  "key24": "3vYSbn48jZtgJ5Ybt2KhkdXwoJzNKMq1r2rSGpFuubKNeWqqHqSuBZ2SBwuv33JfD6RL9EyFeYkvwxxek9y5xQRc",
  "key25": "3XyZocMZfbkPvttKAxL5EBfD685SVFxyzuXQNMza51MYaCfJrB495u2DZfZXzzCbwJ8QzxZpxfnMEovnqum9f6tb",
  "key26": "4WPRyVpEdzvS7KEMC4WvrcjqgHVn7Nka5csaoVqWei3Joc2mSW6D8zesNWdkJP99zyymU8FbqE3VN44xvZprWVs5",
  "key27": "5Hmki4PhAXUkEfRAu9XsRoZauPAXEdGQfb1tXJehuGDN3ieRALwJ7UjubyJZChSgDDUyTCWSgM39UuLMMHgPXCRJ",
  "key28": "34RA4b7qcSLLpCKNYgwcqEPG78grmvp9sxjcoYvfoGU8BVob7zecWzkabj78vp8JwyZYHQdqJK75XYDtMHM8fYzd",
  "key29": "33PsY1dZDvu4NokDjB4tQbgJXimw3fFBgWXWahtSPmQNcHD6Hm1aprq574e9F5vyJDEHe1dSRJ11sribJchycgX1",
  "key30": "4Vuv3XxkxSMSC2MLm7rfeZSsm2wCWAPDbcRJQzumB1q3KrpVPtNq8hL9gDQHt2nF4yBB2piEzWzHMKS9arzH1FzG",
  "key31": "3WysQhoAERmqxz2XsGR3yNYqYbk7S2iZ6896WKXCSAYjUAB5HCdzZSabxnmndbVENFUovwXyzLiSrZoTcduhc2gf",
  "key32": "cp8qx1NzURdG7tFEefDpLVbcNYUgGPvWqqnsgaUajRjzNUmYTAppbdUi4Yv6FWigmaPzbfmGtEXAnbErShKKPhN",
  "key33": "4fJrgVM4bvAGWJe15S88hPe9euCPHihvZXPXwquTTPXPQ89zkCZCbJqeWtZtqg3H14vxnaeg3KwVhDAhLgxxNg7y",
  "key34": "4HX58zGbNxj1PZPZMzEiH8qDR56JA9BkzWrGZoh61N8nsLjqXwcUYfS2vqturMTPY2HzGsVcMrGjbZcFahbFK6xC"
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
