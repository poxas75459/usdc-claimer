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
    "63cW3jFfzhWcKKEMoRfLdkzKkVUAA4y74SyxJhUFqeyvpA1PYQPFPgq9N9Z72krqFpftXeGAezwUJk5WVQuwZ379"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSTCifMr7vBa5yq4gEgXm71T3uwbq5U49zTA3hvSBRGh8Z3HULQraLdS3MwnshJrBcGW8m8PeLcKbuoZwBj3Hg6",
  "key1": "4NdzV2EsDNJ83wWKtptrP4xUAHTkDLd9AAcQkcykNtQs5c69rU2Hx1f6eV8EnioL6qTP3W3MDVuWxiZNgKEy7Y6y",
  "key2": "3q2bYktjrhe3RNLJphVS6idi6G1k3U4mPubHmVRD9tibZMe7D9bewoB5dd9X4U1UKzf9ZWFFCbYuKhghyEx3XTTe",
  "key3": "3YKNvt2bdgTcqnXNDd7Kq8Y6mBqcueP6CncvnXFSgnUjBJTaQ22ohBCJBqSZJPVFfn6cZ9vZEGR2NyiAFCocJZht",
  "key4": "4vPWnNeNhRfCt7yioxjb9BcMB5n6ZTxi5AhwkQYdoroF1fkEGnnbFZYw6M68SvAeGV3n5UajhMANZjbBFcnvJ94i",
  "key5": "5xGq6Uj4u99wG45ypvjFbnpyUpGjS6Pc9qvgqxwRxdkPMrPfNgkju6XeB4W2vQSpzE6C9kup4rV6gpwNGb8GawMm",
  "key6": "4EyZZEWAQ31p3PM4zy1tPgpzAHbJQi1FCMNTuMD9S2a3THYN7Ax3zcFmnSGTSPUKSHGvhXKr6NCGZJ7Lj9qD35P6",
  "key7": "jDMq2tYdX721buD4hnKjPf9yM2uRUMk9qDeGpSVNrgwaUupDJqEoNEPyEnbz5RuUmrd3PUcXsoytpaN5fxsccj7",
  "key8": "2nMAhZzZjW82edMhjgw1onw7Pao8tRivifteU3i6P9RDVxBfu3QdAFwxnGgbi2Q9iURU16FJqiXf4ZgAbU3thTxw",
  "key9": "24C1hDkcSt6Dnd9s34bhxo4ZsRTsgQ2qMGjUyamYQ4oZDBH1z5TPqBd92LbHfUa2GTbW5KLp4HjreughGu2PQkL3",
  "key10": "3dUzrd6FKRWVBA3wEBMsWXn1GFZXT9khG87YrJyE5y55inqKhaUbePJBxhCszMP4QM1ny4Z1xhhet1G3mDENZwL2",
  "key11": "4SHotNhSD6nHLLBZJqCn7W5Fodr57zLw6Cwgg5yXeTXexJJidm2UvDxucWEH63ckLVuDqWC6DmPmBiKrHvmccjS8",
  "key12": "2sdGJkvi36KWjGXgKqPE4RVbL4qFj14RQd2UisDvffqXaoV6fjHXnXAVYmfNw7hUoP9U1U7CjbBUjZFyvEBYPd72",
  "key13": "2KUrRKcwx1aknFJ3qnPcnhxAR2Pj4rycVxR6ANibA8336UZKRosEqd92ZdmrMuZbwxppDjyyWRcXRvoaqwKsfonk",
  "key14": "4FZg9Am3jSHkxYepQusciNvu1z4hx82X2BFvMYdkhcBeAE1Qjp6oZirbAUwTuV7fMsEBABDnXwohBXMDwVVahUAk",
  "key15": "3BXqY6gUrjEiS7DUHgyRci2J1nZUm4z7rpHNanmJB9gEfvq7WPHwhpmyGNiLHJh6rqKugrYiY4pL2n64g7WyPuvU",
  "key16": "48TBxqyGvbvEwR4Ehm81iQSkWHtd7ioBiHeFLGeASzt79p6pJvASrd2b4FtvA9CCmiLGtXGst9t2YM2mzrSGdWvU",
  "key17": "3CNqYXMBaQnWMgrfb8eduzaZLNv8bZq3m8qR45w73sCrCWBnyDDT8WTrnFaDwJXSYgUmicH3jRnf6HUuDs7GC6ie",
  "key18": "3F9hsws4mkSX2AqRMjbNX3So2bNCiiCkv89R8dYQKPzj26VmLhcVmUA28w8o6YR6wwhRNxLtCF69fq12LocZLJJB",
  "key19": "5zMFFTuEfFvtGbTD7UvTSV267hbrWW9sKFKxgru3Qiy2sLtUSRwi3Az72MVLGQxK5fssR2qSTxB6jFrSj7Xnso93",
  "key20": "45TADxZResRxzZ7AN7SXPHcQDBpAwcpTqLZjugRbgCdvKEG37aZLcSjbYXmS48QrZckAc6awH6UbsRoza1TjhTMY",
  "key21": "bM8kshWqzkEhTGpevnxNLAfhYGnA3Umm1wMqBTWUScSZUbZEJGJQUQgHLq2SgV4VM88wqa2WbLNcUPNdKKBRDig",
  "key22": "3EDVpB3DPK8B2X2LjvsJREWM2en1Ps8BWPVZ7gxS573F6wSdHvB14Ekb8RY9mLSuBjHEyWktLrDM9Z2XJwWfAbFv",
  "key23": "467mepA5bNU5wTQcFq2RetWdcSiqUF2gqVgL8ivAURUGSWiDCMYP4xTW9pvq3Ms6AXzjmWkE8XwGspgH3NdNYauT",
  "key24": "4HRdy8ZBtWNojmVCbhryhRfVs4nCZaDK21MXMc644ND3zuhpQh6HHjAhdWUZnooK2wDm2MGYCadkzCpPcDd1hA7J",
  "key25": "5wtGBCWxHumjMQ2iLFF6sNHiXiiXLi9NaNdBFAd1GuvQZzUtGUdPGejDNZ693FPEmgqoWZiLi7vBC1D5DUhjBU1e",
  "key26": "B1syTm9gC7BJZ3A59wTxb6Yhu4VquGhnbbQb8fT9ahzZPu3QWipDJpE4H9SikHXHitxMtTwYsBcHZMjwaoKatiz",
  "key27": "4rPx3MneR52ZqQo7L3Qa8vTNYhJKrwv92WP9QgTsyeLA5KSNW3Vv3QPbvHjCJWJWRpTiwVueFrWc6zgKRnqiMwXq",
  "key28": "tvePspbZgQ7hjZd84DfVQpGa41vrE14ambPiAQGujMmMsX4chYuS631mgdyoV7RxtUYeZqtPykRzKngVj8NMJgb",
  "key29": "4qeV4Y5v4Sr6eNJxx5G1zjgkjN1mfk77dDaUV1Dap19jNt3D8oTQ1CVxkDDWLXAjyFvJZssZLPTrdmApNb6oBo7r",
  "key30": "42yxAPAT2KaoiFaeC86HZJSPasWzcLunjCYUphy84aVDTBkYGb3qGeA8gZ6JMQCcFNPtak4ycKF8fe53t2SWouh6",
  "key31": "34dg7JiKfpt3ngfMrkmkBuYGhKSALfoGZzyb1MkKChRVYExXM6UaeSUcbzzN5yUf5xCCBrKyLvk5Jvz9zWndjbNT",
  "key32": "42EaBPWHtA8WipLxJ1zBCTMdkJnm42xcbmfdqjAEP4HESvM1qjAjomzreqryrsLPvrZeVAsaxMQSiUvxSNKbnvGv",
  "key33": "2mMSkC8Sj2LiA91v1A46Zdr4WBnRnJ9mgXwSc38qJFWVEav2Uw95FHjTj9pVZMHwJkY4ppY5qouitHuTHjRCMU6E",
  "key34": "3qvg6GR4jax4Nxf8oDBpzrBXvy4NcrEaFuFYDkivyQTy2Ps2NiSBxar2uBNdZeeuBzLm8jDhtC6PFEsw99rA5Lpt",
  "key35": "3yopuAcQwvuU7CYHBuYi9WMYAVy1xsUBG8tUiYWPRMwfHcBmV2mjn55aV9DpwmzhzbrQPSv8B5oRu4fPCA1JzXES",
  "key36": "4z5qnbveeHMEAJbTd5LaeB2XazoHQQDeEgVYJf3Hj7UqZfhW1ry8sZTkkXfKgtK9bbgvpqwBxdtctXfJyQLP2tJ5",
  "key37": "32k2BomgxKohs1Xdb445Si9T65NkEr7Hz3au88NLQrddAsLBCT57aXD7SnqGuVzv4y6BfRv7wWRkUWnw7qzzgUGY"
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
