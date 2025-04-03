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
    "2FT4yaATj4UriNVVvfQY17cfKubcYKNQdQ9k5pGHVeSMbyewVgTr2w2LVBE2CyNWJW5VECfM12RymKTKn1nDJnZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S72e3rfarKzAGmmtpid97jVts5n7Vif8d5KsHbGoz9MSkQpAgQvTZgrN482bnYB31XjL2LKmLvEJHWt3d3zKQL7",
  "key1": "5igNdjjRJvgG7yeKDctKMmcQfckg1GY3iTXnBsuZuxjoBJFvY2thYFrHpYyAFaeM7hExZ9Ms4N3NkdpyDhkmUgiQ",
  "key2": "25HR2wNeVtBYFHFcK37wKqmjp2Zgpcyrq7kpAxuLnByEVxSv1JeH8M3b3Z8LKVDS1eL777FVkU59AJecxP1rQNmf",
  "key3": "5cciaV7vdNuxmSxunBhxoMaEdoMN3y17mJ4e78AjeswQaZkdYYTjhNCtRNehMxXhsPLN4JsFqRDWvN7nLLNmJzBF",
  "key4": "2xr69DVE627Uu6qj6zbtxym1k6ZBZasUZ4ZEo8NoPbCk5dbMEE1J31c7SwRqrc6CsZyL899rgd2xUy3YHzZeNrNw",
  "key5": "4tQGLKhDT1VcYKRkF72iNYvKuaAS9HFXRh5VcVprYzyFbhqTK9JkFbgXJ5gQ4HLCfsneujuXMRQ87NCZ42M6ndnR",
  "key6": "2ULPLkQiFgKxMpg8ZEsxps7wxvu6fr4o21C1Br2YTP637hwTq49n1y1hxX1NcduF33iFdTv6aDYxaaa21XiTRZTS",
  "key7": "22Srj3GQdn6EojyjucTxou1hACn4tnVwSfkJtMeJCxaXPCa3jyzg9ek6DCwmsjMonb2Wih8vVdsu9KeRBS7EZ6cv",
  "key8": "3r23fMseMfN7C4E6MLRmmhD38Ly4G6QgQnAbvVFFgv54x5RT7vLxXN1W8Wgb1MSBJmDbEKARUecwQsWryw52gyHU",
  "key9": "2CCYsF6rJgTLXfVmE3gf6MqzeborFaWzBkjiBSdRTdeCThu63EC1CeiwivyUupAkCtnJRHXmHLbAAh9Ec4Pqe1KE",
  "key10": "UJDapGYPd4P4rAifVr9F1ysSsDe5tjgr7ds2TsNvUkwdj53gTCqfxx6wvCj7jcJqQebJQ4afR3Fx1cRZE6zSaSH",
  "key11": "5h1ZTBHgy3NbmrJf2KjsStN1XQSxR46VL1wReXRf6qiMbz1RbvdvCxjifi4CYhAD1akGr6ZaYQ2rHHZUpNP2s5ZA",
  "key12": "4n2seki3Xf2yEYPoXvXHMZKXiDFbr8y2yvQ49RXmsp2Qec4Sr6cEjGMV7NJpruvLT8ZQUCxRMLc73vosgZZnnYBa",
  "key13": "2L94idWwA7quVBWwcEUNqW2pVUyorr9BQahEm5B73FdDJkXs48RBQZFevQLWp24gknKpbg6hBnPjdu1Hy89LuQkb",
  "key14": "4HBbWe9cskYdMsbT3GF1z7wLofKEgSy2KYjsbTiukRvESTqzfwMv6Q9ftX5dEYYsBmXxKtKu1Ji9fT7SkkwXUCmC",
  "key15": "2qaHA3z7QbkcLEUgPbAuCh5vkZ2xdtNqcRffBueqYVXhNm2HBsRjm5NuTToa3PxSzqG8tsLrM3eapwUXcJSAT1K1",
  "key16": "E4dbkTNRZQqSieuX9YUhvDzc77zTYtQ56bKzWJFBS4W4JXkt6yp7yjR3a7hP6Ud2ZNziuk83gzjzMBxG6dzvV4f",
  "key17": "27P39LnPmMqG8bseMkaqMUsMUiFuPdquom1rkjZBXCvuMRYDjaxCsbaCYTE6tw8NskSMcsJMKwdCRqfVjALo5bM1",
  "key18": "5g98jLL2YEfwwfcbWQWZLoAfQVipwuJz6NHA3WHwa2mjBeqzGU8qb2hVgGtZAbwRWbbgaSw89Jx5YWCh7w5B5CAK",
  "key19": "4oVySRmBxZnGmWkjuJC8Mz92Xwr4JidSGqzXujpyiDghGwRayFrgP9RDAozVJNQZP3qkrmpTXGKcqCgT5rmwPyws",
  "key20": "3boomGEyaN2sqtpr6tLzaniURkJh6cqNQRwFivQqpJXQNekfqXD6dVdf7WtrfKv3SpGFr38697LCvG9vHftgCwD",
  "key21": "3jUv4KNgmnWZuw5AnoUCrd6QcVDQyPwAwh8bLx5iwSqQukaXfpjC8u75PAub2FBjRqgy2gLKyn6y73pfR6ewYq5p",
  "key22": "2fneQTe9hseF8auK53kEVmhkp7sL7KFMwLj8JafkdF2gLxdApo8zspcqVmANgBkGNEMz9sXB3Cy9bzBU36BvsNiT",
  "key23": "5udqkPc4n87rn76Rm91mWFPFsJZQuvUiDpWLzo87SnNrFhZqJ2Qpnc1uUb3hu4vZdr2VZpGygpViAJbSAnmPL6AM",
  "key24": "3Z2dLj7E1Qw8omvuAT13GkcprbySSki39t7wqEhVUjWkHK2ZKN9igvQsG15JgGNCJTepETUNrRDFjk4K5D45o39M",
  "key25": "4TKh1P782aRoZnwh8k3HS5JfnMLCQ9nwgMrn3mPaHwZpxmkPP77qr2NFku4Mnv9WevAoiCzCuCVhBiA4E6LqtfFj",
  "key26": "492db2UG8MpcvgneCuomkJE7iDcrLsD25v59YijkUmp3W5tyNpMAxTB4MU7MeHFxo1MEacGNyQLKuwyT5dA59GZi",
  "key27": "5VpEV2gpjsKYK8E3ymC8gBJNyKq7KdP4xGYCBWjRH6VZJirk1c9YeeEWKxNcEFnsk9URUxMQ1rCsPfE3QD7cHwvJ",
  "key28": "3htVXGejwMgEp6UnXunvbjKv7iydrxYaJKvFyEREEXb5hRNDLqt8JhqEXSfprkuAjUfK1gx9vvRCYZxAXG2qZuWK",
  "key29": "z1weXrizi1H31hjoEJTvREoWc6XHxXTYCcyP2uNKy35cjB4fE8cWHqyzVF3HikR4H97t83NrQjgrNRxefdLEJLz",
  "key30": "5g77oinu2VfCvSKAqqnX4geCsC823FDFr9bR5kGQZ8wXoMkXnkoWEJZe8Ux8Rb6gpqM46B913BW6zzgN6KnyQSpm",
  "key31": "3yqquKwossptkMikfpynxTRFafG8Yy8eSsgTmuzZE1eowzY46nQDuUnWMBReGh2vHzbZxAAUoihqTZ8hS4L1j2rQ",
  "key32": "2SaxYrofJYc17u1BcXUDVv4nnPdHjggLkEK4fFBomuh19MowyxZhd1YQZPRbhXMLykMRVXuosYkpkgb5nQzrgD8L",
  "key33": "3CW5vmbaxTM2yr9ncdkkpBxP3K6UJAgorPFPg12wFG872bLU7TEEBiyieDBC2ayPu4m5kVgbs9DiALxhP47KCWCZ",
  "key34": "58keguABpsnJn4BQePZQjC8DQQnm5g9GRA9F7Skdc18Ha1kdWB8SFmqv7kwnvXmFhP4BFVjG9FLWGSbwcbr4KCNy",
  "key35": "3f4LGagVMVteCEJr99cwWevsquoYq5MF7m3cCJXzT5QGpVUV4M8mCgaauUqiogLDXbD7ytJfxY8EZWTpS43zfc17",
  "key36": "jN3i63cZqbuMMX6ptayy5U4Nah3q6DAhjf3KE6Y2WaYEYTCcMXBPeNGZAfm47tVgMnaMp4gciwBRgv1CGFYmUP5",
  "key37": "SNjSzQg7jHCsetQMKNVbbHmbzgdGwNck2bykduofXqntDz8b2MfkJa9fZrKHiMXynpx79odaTS1Z78RgMCDgVb8",
  "key38": "46kqaaRgCXpkro3sgecBvHyUSPaQwCBK8Ti3ogt7qCSVzY45177jQo67XS8DLSyuyECDfaES5j2U5e9d1E5ykTSY",
  "key39": "a6Dzr4aNPy9tyVo8DeSVS8ZWQo45M8KXzHM888L9p7zeq8LtiG6uuKZZuSZEsYkhsf389oatPE7ekfNpRJtvvTw",
  "key40": "3SdS6aJdFPQbkrYBrwQdD83QcmkHHPZsta34TrWogyoGVah7HwUfBwztdoqCVgxuFfEMYyJozdRUgfa61JAfxWRM",
  "key41": "3zfs5qB3RwFHRU1fbUm5esBDsMSCiXgx4BHL9BH6mukVAGpcb2Z8spYHtBxzqXprwpEMxgXKXn4s6eKHYMziQ2J5",
  "key42": "wj1vgyHw3HRBB5i4ucp9FtZbF3n8jUVKnU5aUxsKPpkXJr8vuxKff8vWKchzPNmCE3pW7uhgCUdqor4nVZkcGhJ",
  "key43": "QDadvDieTxdrB18UMo7kEopt1Dps3fA4vRp5B7FLrANRVznWTKVBRFNzuBxCP33iCrWMAoEhcnHzmBDsoNfcybf",
  "key44": "3hQHMHr3rXf7ApVnXUHqzqNZfdMKgCwjCMW8191geusP4kbKzCBqZUVtYNKVNZNPnRA6n7mSmvYg4GwRKRW1rZnr",
  "key45": "p4xcE7sCHS8pXdXew5DA1vkifvLs9ZCjXNkM3ZH4KNKau5NLLzA2ucFaS51KqnUboNdNxUNH3nmJvue4tce1MYV",
  "key46": "5pBWe3SiXqNv8rZ7TFCo9M5tHiHdbvAZbJCNU939BeZDDwrUpBMkRhsez2nrgzGPtwdYkKU2vzTfhzZhJrwor7SN",
  "key47": "3BoHgxoxaKtX6Z4cHvTJ1uzKYJL4wxVvsZCQwHQT9FrzCahtdMnD8agrzMmtCtknwvopyXxy9dUwLCBjrEjN4Jjq"
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
