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
    "5fjG4zr47aJWQUsYsjmoLkcS6aY6wm7EWop7H63LjtK2WeDNwbhguWmJ5bLW1jmKWk4j5p3DxQpHavsEB3CumenJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YGgmVpMB9AgfDgCvgS3wCAmCuFjirNJneAUGt8YHZacDY8LH3X5ZDudpxfWVyuz8mzZmaVZqxt5kW9y5f2Xx724",
  "key1": "3dMcMzWQyK7uEQi1zvWnKcvwHE8TcjJsENfYTUkq4xr2DmQWxFcJJjGAsbQ1ie2zUSefUbXwcVMMquyv4HVk1QwP",
  "key2": "2nMhnyEkkTRTd1qhfy9HuyAvoE2znNLeN9thSuhJ34JtSJdgMq4VHqMr3fEFEvcor3x41MafPbjQcm1mghmWKmSc",
  "key3": "2eePtjmQesvYS5KH1U1H4i8ju1NKRApouua6donrumQe1tkDstPzchg2cuaRL55CurKaT6osh3TxGBvPVFkS4F26",
  "key4": "2pUsWwwECTQq4ypcMXuPLnLCwBPTGHq74T2AxAb2ckmDVvmhC2JYgQCgk29FHp9roxVVioUq37ENrEajsYy51P2H",
  "key5": "hLzywxwQsp5xAbH2Bjfwgt2ucNY63i1eCNtVKDJRDUVQ7seWrBMjm6nvnQ9GyVfWUzf1Sw5yLk2gnDAi2iMXjB8",
  "key6": "5KBANgwbZZjCCPEDj2gW9YjYr2ar2cnQuEk9hezikriMW2DWGhbTNqSLGyY9ou2r1dQBwoRvGwcqbRQ3GJtJV7jz",
  "key7": "4mGhPUDm1s7tSdhVSALNfmSwSPLbjK1AHL7AHXKpsq7aFCNGJfu2DFdKPAGUnaezv1JhZ6hQsPssHZf3y74achZk",
  "key8": "2o45NZ2SSzgYdKxmT4UAfuuQCifQbAqkcYAg9qbvLudpappXwxe8m6f3RCxbRXy94bpzEr1dHCww5xVqbY9kJ1oq",
  "key9": "5SVhYVFB1zJpteqmw7QCAUJfuf1g3rsQe5UJeL9iToM68f59YUb18or9ZzhKFEwXcyjRtEqma35ReDqMTTKehcpA",
  "key10": "4ZxFk9mWSo33pFKRznUs4kQTFzzXwppEuVsCtbgFrgZFkBhAFys7NTJkAYobqDvyF1TqS3JXNLGqd9WqZLMxDYWU",
  "key11": "3YMvLVgDKcYkVgpkJoHHwAYndhMWuELj93CWHAeGT5CQMXXi63FLiXNAaEqeYxmCyxfzoXouUS7yd6oxap57Uy6p",
  "key12": "2CN8cUTzr4CiPTcD4ubmqKeZxFXDB7dZQMqcb52n3WbWySM5SUD3BwZB3zrDRcFGr6DgYRPyzzMVXu1WLHWRMZaB",
  "key13": "2XSr6ftvAj8BUFVsrcHTQBwMhwNYLdoEQkAgb3j2T7pnTiXut57mqamYZgeyMBEfJhL4zVSsNH8S9ZbDXHS75s6Y",
  "key14": "4CQqSnTXMyV9A6HLSNnp63EDgrRxceZM3ATj8sFN6dWDceeZCx6EAFjtdtKR8kDGQ5FFiSUi6gVqVrzUHRHf2MWm",
  "key15": "5ZNF9ypmwo1R9trEdTya8JYQzYTbGdptg6aCoHCovMpFuhYLdRkPfGdp9zKcpJVbqsvwP2Jmg61hVxTvjpkqr65A",
  "key16": "3CHKiyRHQKrfdHnuX3PY4ZrDJXwVj2ioD5DVLgzKWiMnwMtvUrNys2CDkaxjLdv5cXo2caTwEwc53L7effB7eiVc",
  "key17": "4kJ84897bjNVgNjLc6GDcQafbgW7RSNj1afbC3inCVbJRj5FwTRZ2efRgSA8CwpBo8eTK32M53i9GQYegz2PhuZB",
  "key18": "4t9dtH3icwtJxPNN3eQgL3ZYd9wxWqk4nyfjnPG3r5c8NPTVLqcJK83o1B5MUcJxQEc8ChB6jmXGHQg228svAKFT",
  "key19": "2394neYjBCDDhPsiWZB4ysoYp2dUoX27sgHhEXVyyJXUeCfhrh5dY7KVMw8ZacdFbHfVbsJchSu7DrivRm8nPtH3",
  "key20": "zGdk27MTW5kNv15hu7tFJWqrtCgppGZmt8KNYKeTrmseAUTkmTDiZuJCuxt6ZDnmBHbN64J9tnRxyGBYhCfiYFM",
  "key21": "5sWaNSr7ZYTSWPhZxh1mjkHG93yWiEZEsmke4vcGmnnguTY8ws1MouriDyKGFrvzHzNbwLJetoN7PKqiRhfRFccq",
  "key22": "3VETJqgjpY5ZnmJQiqwdtwv1wJk9Nzx7x4V5SCwgdpuRQZMaa33fDdo4StHWMvgi554yS7VJAm7yast2pSV1M2aB",
  "key23": "3bSe51pdC1zRTd7piB6PZnFgUvSNbYj1Puc2Ga6hUd2PFugYXbTJjSzmC62kzLMvFuzpH4CLG2ai5fvbuDHJEpt4",
  "key24": "4YfufrmBkhPbNVb9Fn6e8MtJqigQshspFraGCX8z1oE4zLYcfS3RcQk2QGX8iZSDJVy9hjVoN8fVtEdCvci93x9C",
  "key25": "B7BDrPzZ8vQ77Dun8ZuChxL15NNjm7RUAJggod9pUboSVjuLz9bDBXc5wWu6SP8m41vzD8VxnS3Kkuuo6ExWgdX",
  "key26": "5EkTYimt65oZyn5xTLxw6qGgXtNoagrSmQjQ6Vc5x1zrcp4CADrw6UduP779ysEq61netGxfhbRLx1LPMgezKkqs",
  "key27": "2KJVVHU4aXXTtv8JggJhcSRXvi8H2ei2icxauKJm4KTShc9DhsGQj51CABURJWwVpzyJdUsCy75XLmZp9qPv9wXQ",
  "key28": "4x6hvZagX4ZAWJPU9akeEf3VTEbGCJFL9HgqLUmEqaahNdKwTSfQ226mjDUqKTF8j4UMBiSA7soLKCxN7S6YaA3d",
  "key29": "2FEgivvKdX1VwJV8bjakEw9gQp7ZxebL8hxwc1T5L59pxra4Fzk9rELKtDuXGeeacnMh7rmJVF1LiQdKjrcPmHgb",
  "key30": "dCtyCSbkxZ9XwjRNYYQxZ9CafTmkT8DFusLeAT7K8SnER5Aj6nkmay9hFvpNMHdFi2bBVHa96DGe887z2ytvhs4",
  "key31": "25kfbdTSi4iC9VTyqmu2xP1eyeaZEoPbpY9Msx7tdDDhEKpPTtQJnTcJnVW9dTQ78aqLtGfFeEsL3Vu5ikSc3HjN",
  "key32": "Vjx1WgrwvbLWv1uhuEoeqvYuh1zioZQGnQoJALq8N9GmdC5UDkCLUM8JqghQbAUBRJZxKCKH9KxH6h5gYjmWcw5",
  "key33": "3f32vHQXDFAcyC66wf26tWKrQwSDcNTcinwW4pk6uTtWXr64cQyeAPiAf79ccc9LWfQL37TL7kJEXqA9oB9UM8Sp",
  "key34": "pUTzbsM5sjkVXS9q6DmgzduyiZr8uBNt8ZKgVBWbDi1PgxQEsqA55c3nMKFLyxKZs6kiVQpNn2bFG5L1VQAWnzH",
  "key35": "41iMXk6z6Jfex9Z6qvUiyPCMiRBiN1TND3mVHgHVgxQTy1Xqo8NosuDXHcGE5Bk8DSvk3K7htgGuruT7xQTqiYzW",
  "key36": "2y9Lkt9uLm42heMZ3sisx2xNJUx2vgqGi1mFuW1o9cRGXvcs6XRuGqzits6MkqYXtztfjYQMzx7FgfTdyiTmqc4n",
  "key37": "4QbvpqhcrKuwBbq5c8YPtNVmHwwhMNYPmBjrgPvnNWUdHJpz98bDWNfC84ab6QPvtJ3yxvKhBFdNekyhKwztFoUf",
  "key38": "41XACZr9pV7iH7w6cUge7b4r9QnYnhXSneaQQ2uve2PUn7ihWBz85oAKCdBgkqGstARvpGxSfJoQJK4C7iumvbTW",
  "key39": "2G4La4JtCT6pnzk7JvGroN1EEPCfx51kczLw3EX63BvmQbDGoYEsYmopAFNthBkMGzG8Pnto8iEiXo86DF1YNJEN",
  "key40": "3kcoHLfAbupDSbjLogRkiTYobdF7MyoortYs6r9r4hiRKCoRDeWYyYZCmdS9LzvA2U5GGJFCqpeBVcc4u2s9z6sq",
  "key41": "31xSyZB3m5CAk1CRr4i3AFDySTkXZQopTJMdXXxfKchAq3GoSgAnvA6hJ1FaBkQCAwkSj4TzZhurRb3PZKbrdcyU",
  "key42": "3Mt26kk4LzchHSoCTz9gJj9B8ET5UhUU4KvZhXpMPqg9NAj6Py1JuiTJzcu5HiEe1YShcLeUHkzrv3uSChry5BHs",
  "key43": "2TLRZ81Ct6voXj2EHsJKuhYzrXEponp5GrSBcWbnTW8yYMb4Dt2cXYwG2kasVNNMAWRuxoggrNJz32dCoZwPJcB5",
  "key44": "5dAE8Xr3SysJtB14MBeSvUYxgRuDghz5V5jEjsrv8dkVy2Rr3XMdqbJYn9DN7zXDRtVzzWW8hAbt4x6Nw717oTYb",
  "key45": "5q7V5EXnsygw5smSKvXmhsm5QeY9XRCtQTsYbYwH3BPUh5kRRbxYwrPsbbhp4aJw7JxNiK84XMeCkSBfACasf5F3"
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
