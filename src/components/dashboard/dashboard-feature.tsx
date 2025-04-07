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
    "2dMUUJ6sdZsz4ySegneT5WptavnHo9uequknftq3dtaev8MvLKt3dg5C947TCRqk73DWXucfx9ViBzfAb43fUmxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ic48V3jxA5b7TP2xKo2Smu8iA7jzNJxwRU11awd8Z2Qbd6w3dNVfgqnD7N33WXMSabtPnd6jtGEHRmkntfsVm3",
  "key1": "4j1xybFY6vaezy1PbfRc72H1c4PJRE2ufGq97PHRH6yTeRz8WP2hZDzXsmUGRDynx4x2qocNemPmUWw9rZ94fztW",
  "key2": "3b1pwraDH2WCRBSqSqKL8ThcbXmHtcPkD7uVJiiGug5e4xxRXrJ5fWRHuQ4sd4JTJDYaAQdYHzjHvdu6E8TQdYXf",
  "key3": "2U15vs9qDkqgvKDj12KxLJJe7vyNmQwCwt6x4TdsEvgAMbpYkvKxVYL9ZTu4gPPMJiLrUce3cfhXNpVxSzMia85u",
  "key4": "27D99QGoVY4KAV9nVrUTmPS55Ytv47T3vWzy2QAnbjEVpDDMKPXVgiot54J9LBUiJSDR15e2m4sv6K6EAz7G5oNe",
  "key5": "5W6NntdSi1ss6nLXjfb1a4EC7vvSmsY2u7EiNDmLba3USvw42s6bs41PRt3gAsGL9UxnHxG1KMbbf9bSUVXS1zC4",
  "key6": "4S1r4pHAUu2uz5sx2wSSE7MCmCwsZyxhMuFRCsUwVNmomysiYPM5ddL24b9Q5iz171Hm6ng4EJDs48rTtQpd4MBC",
  "key7": "SruQxAbkPuj3Z9JWfTj4LBRs5rTsnfBgkFKq6EkzuT8dYzQHV8tc4kr1942UTPv5bjze7m3UzojJQ3f4ZXnfDzL",
  "key8": "28cCP3d6CFAbw43kaRQbqAXvFXdCBYGLHpnQBWx2FT8knSbAEswaGVC8t4Yf64WcgwAkAjedq6iKdBFbpeouNyXU",
  "key9": "KDD59ETzR7bG5fFRigsZLM9Qersvv6T9K45QxKCnSPTNRuDyCeCWtt9QszxCTDEsvTEhrNVfy3h39SmrNgZr8YJ",
  "key10": "2GZAAbLoCCBcJ8C832GKLRUCAzLY6z3FKjHH1AZvx1tXFJfuiGaYLb61qUytNupExQiAqgd8LwHdZnsYHLjdPfrE",
  "key11": "4Xnnn6UrqzowukZFeX59v29dp1se54DdXYGjw5reZCiuwoGy3jiM9k4Pbby1RwDxVuQkPhXanWjv421MPZVDwXkz",
  "key12": "5tBLHAFxqxdXGHtit5uDdDyQyBnSRPZKrnqST5LCDAHWUPnhddvfn9hUj4rY6grHfSBgE6NGXF5aWcXRn7hmRaAx",
  "key13": "4cxbAsbAeLunACAMA4qtrTVMDYmiErcFjthZUPzh9rF3d7VMK651kTf4yHb6xm6vsshKqrWdTKcrnuD1WxoAum9t",
  "key14": "2bfHZYmAA5mCGWF5aeYQbWbKwGJURSC8LGdWhzoC8LF9YHXYLtaTPUNh3TFUE3KwH6QXtAzSyq2znr6rftSzQCxB",
  "key15": "2fV5GBV4xiZBr19gfaHU2N91oPoYpjMhVbyV4PGZZNtEB3M1MgEZHfNADmEhWZxj3KPpCEQBbmCWYUQDeNawFD5Z",
  "key16": "F7H5JuUNfBHvx4Xn4NUvzXkggW8N6UuaRxWsPitr23popEJGrsAZaySjDFBmmsuBT3QjU6QdEzwuBaPoSqGARXV",
  "key17": "5tbBKvscR8fzAvcjmh4VZ2aN6AsjPvmwC6w28Gpfhw4FXJGPERtuzW35Q8mXMSuL8REkZKBh3wC7F513Y3YQgUWR",
  "key18": "2dtSfGTaSNE4tE7gTRV8RbHeKboq26osiD3ebHxmhDQkJqZ7xMF6GZJPFCiLTt8iAR5ABsZPAtzPSnNiqgKxBNHs",
  "key19": "4EYm5sK4kZGFPa7p3yrmQdpqUrNcHDFFwj5z45rtrMGyW7FJshgFjtbzQu4B7NoXr8sWhDAeaPAbBCVtS3D3sjr6",
  "key20": "4deU67K3yg2XPgSGCEcniF3fXXgX52sNVkjNrHPVBcVLneSrqvGNM8vLj3Y4GkDsSwnvpYgtNiPhfWFBLVdinPjS",
  "key21": "4j4D6T6HJJGRs6mWCNPpwxmm31MPo3zHfJVyDDkUtPecvPEnDBXw8o6FvbTfLgjB6Uj3HPAMAnEtu14XE47rCjA6",
  "key22": "2XoM4NUHkeKVpCRAnHSaDeUmrZgoxuQ1B9AT6aKUqTr5XeqenB1WJrvKnARatJxTxEdNgAVYbcavXNdXM4yd2mgX",
  "key23": "5k8K98HyJXnNxoojNui57WntQwCs2YKQKUbpvSyVRiZALVGewGc9rdi163Tva5QyXVKMHSgoBRYvKRUHgNJCyg7F",
  "key24": "d4pnMHt5BiV8bg97tgMj2NZzYiURhgX5iXhD6xAjwR6Zf4VFMkwzBZpjYZfrUG6oM6TYYNyWyzkoW1rWsdS1Ry8",
  "key25": "MHmYQEpL6k9P3btfe3JnfEf4mCiqddqQGXmB81CLBNm7eVyLqvgq6egAhgJjajvcfGLfU7kD49yiH8jF7YC75vi",
  "key26": "2yNXvDCWaJjwunQNpdcWx4qz8VUWrFbertPFspT3BF6odPGLbn7dVLFGorw2gPvGQx65ckMfzRrMpPGUd9FHFkdT",
  "key27": "RbYBbihcmhx3d1VRzUrwbxyZFzidjxwjvSsD47VT79WiS89J717o4nLBW3i8H6kLRnhrMkBGTQxbf2PFTRB185j",
  "key28": "65Z7kHouS2pjf9y7w1cJLkZvZJnDi1dExavkU8BzZuZNYjdg25mXKjmrcX3Q5tZjTfTnWLzG37rwP72jqm2jq2cZ",
  "key29": "3EmKGWpJ6Cx1RiWnZUxexbzBrCUc8gGDq6iGhChFcSNdsNYfzvnCmKiYRknDzUhzUJ4JkTtECi52wcKK1xKM316M",
  "key30": "3qtw4F4YsNyeadSK2vXuJ4HJQMuDpDF84UVDKvfPCr5DFSJkfFN4pFguuKYHPwVLRAZjo2kJ9d7GCLQ47WXsaSVq",
  "key31": "4E4xeHuHSs58gzpTpPpgbSWyumvv2NkA7ZTXc9G68mDDGqeqAfMd9QGSWUJH5KdKMVQPkqEBAkw3ofni9HXp3s6M",
  "key32": "pqjyWzTnEwuHqYUPqPZrpG8FT9jzDN2ddsNi78JPsLwmH6XTtpes6ASx1Jvdr2ndpJPDjV9v9HEEbguyC6nErBf",
  "key33": "5hgASX8N92uzEVmahCmSXXA6v1XLCy5Vo5UnefMoYy8EhWT3p3TM819r9FVhYSUR8veLLmtJT4r34Wh7ufAFQ4CX",
  "key34": "4qRuCuAnJ7QQ1ehwKpRUGA9QndEUN1MtGH3kuftMEfJHXm2HuqZLFL8PifTeG8z39FjS7xg9EaATKdgBcf1RF23m",
  "key35": "3YXFMLkukWDgnWkRff4nRc1EZYh46vs2hQRrgCd6RyPX1qGXV2oN2a5KQfzTDaBM7fS2F6iMDaHpzWHsNZo21pux",
  "key36": "3z71yizDesr3nyChLzV1Xp5P7MjZvLa1BPzhtm1VT1dpYNNE4vUPkmNGdEM3S6ZR7hgNsT6qk7HhPG1vWRkHQzUK",
  "key37": "4wszW4bBibx5hPQQokjTfoXHx14uAmbYPqvc8h77kFv49RxqgEdfi7pCiDZFp6XLDAVC3ZL1Heb9H8sBdXMGjzs1",
  "key38": "2r7cP1Wa3PsMbkRvQ8zV7pM1toSk68swHQxfQfDMXMnGBt6ntyPutvCzhQWjqVDC8Ph5i2YC5cKQE5vhxWVUxKD2",
  "key39": "2AGm1DskfS4TTVemk8hqAC6GtUgtVMXnXAVRLcNH7d7CTTW3FC9k5bSwvzj5AXLSXfMoyPYCtBubD6V2PeUuvS5X"
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
