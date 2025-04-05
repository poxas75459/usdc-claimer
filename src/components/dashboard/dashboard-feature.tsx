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
    "hMcVXkP3bQXsAT73kbzuSkVEh2Mir6Jsf1szp9z1APTS4pFw9UpARh4aWFedQZa8nUcCR6t65jfZ2jXvSvHbbJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yrNnLLyvqwRyfMKD6GgvDSU8oV9PutwSVPjpbivMvuvVMzT9tdy3RUrWPz9Pav2P5YLkXV7GehW57aPmkWynd1Q",
  "key1": "wyp7tfFbiykT7d4jdYhcVJdGuYaLoJBAbPiAkasxAEnj43VSFVSKeVWhYwSR7BU8UKzw3tFiUnJETaaNaL6hhLD",
  "key2": "4uZWC1nk827v5xEuik7kYrb9fYJXeVJJCbyyLcWYvHFy93sQXhKtt9X5jF5F2DfWjbrU46Y5L65VakdwPU2kwL56",
  "key3": "2VRvPta5ashfnVxN5o6znxbttR2oTa5MvHjkwVFfXneKFMXjfFin8EYJkmofm4EZHpQJa1fiQCG2jwut9XBpqSRV",
  "key4": "5FRrdGTsJiLkgEr85QHxtR3XP5gKMx1MwkQCZXRiz2U6fL9iR2q79Y8k8qQg18KEJ1DnHEbFYmDXhHkkApAjiQNh",
  "key5": "4S2td22xrg6RHHfjMGFX9e4irtwXzrL4q1WvkJBTC6ENjNnJb478eeU6HQkGbMRrEMmMsv2gJ31ojg5vp2kqwpZ2",
  "key6": "5WY1jxAb6rmj68VvoJ4xnqghxUp8pFoF2GhCn2FnbNSxeLN6QNWuiUfwJuWHzh575CSakYvbYuR59DxjFD6HBX14",
  "key7": "5rL9XQC3vyMf3ZPP5y9F3kHLYJjLmpiyTY2cXC9aUtQwEuAybvmaxP8bXtDJxQ9H14N4ckJYypiu8CxdQrxcgrSL",
  "key8": "3KGPoBxHPbKRBDfUyCYS75jsWfysB3Vhd5ThEAqM9SQZwDDY8yJEdWErEgeP5kpQEpT6Dpz6tGrS9AfS6t729f6P",
  "key9": "4zUu2NEhNoWmrSisCPhh4u5LuJ1jRcApseMEuMqa8Rge11iPRH8Yya77uSP8vGfghY2XoFfUF2JjHt2bJbcb8X8w",
  "key10": "5X1BsSFCsNZkXurgyMDN8jNWUKKCbRsXwJX15Kub7LESZpvoaUsWzRLZiRxZbTtMSk78MAzDbMcGf61ppYkCPF4w",
  "key11": "4XZmLuMnzi2eD7ZWj2apUoZLSMA1z1XpjeL9aLUeGdeT7ECZQtL89RV9hYTwQkdc4bEDYc8TJFSJ74bGvh6b2pnp",
  "key12": "4FfH8SyrYXiWouv3s4gXqkWk935Y8wgZNjGkcVAnKtieibUrD8ewYLuPWKREdZ4TVz7YXkFeYQJ4YYqzaTEtaZKt",
  "key13": "5V9Zi9TcLjpZG3wZxAbJyyoxz1whK3czVvgwePjRXaqsE3e4DMXgaH634deWUtKUkv4pLXFceFyLGFWScSn1am9q",
  "key14": "k6goi6yxKRFRVoZqjimdysCWW1nH3WWu9TkR4BTeSWMQyM9k2R2nNpZwGhhQQrNRx8vzngzqG1Lt6mhqBVoxeBW",
  "key15": "4mL2MFRGctttmBV7NYJpaZeVoRkcuERDcEfVn7gg2yTb62j1Um7LABAFuGYNoyRTX9vHmPgcwr8GvKFwbk3RYGVt",
  "key16": "5Y9sz8MKDDjZYLLAHi4srjduBV6KcDWbVQ8tWbUKHNaH4sk38X1DQz93DoVZjDbd6adjXKPL8HgvXm1phrN8M8H1",
  "key17": "3LhYYXVW6SpzY6tSmTWefy3EZfhpGFM1EW81urdMwakcSLZ8XdEquUatDmrksNB3veWFE5fe7B8V4TnBAMmkXgLv",
  "key18": "2jqvJpZcLggcBui7sDPXUqXdxwYGX7GCfdJ5o5XRJERs9LWkaHF96ausk77nwH8MyWsnuhn4zfMExLDMtajsasDY",
  "key19": "3h5zgvxY9cTy6wndxdt6BRZNqBQ1Uej7pfzjpUL6PFpLQZUkaL4YP17tbaZzRmGkDf86bUYdYBMVgR7cUvuARw3G",
  "key20": "3f9Ucuvzn6qepfSHyqcKQ1YumE4KSNt6nUmgtRUT6TDX5ejjMs9FbFL9nEapGQaqx48LxJqqWYr5Xc573C1F8Kpf",
  "key21": "2ice7vaiQqsEFn3tnX2DinRbQxHJwsTQzB2JKQN56VUEBYrExN4FGtjqjtxyZwVkwTzkbgsR6MibpMW259aYh1ua",
  "key22": "31xKY6TwaUKHJseq33KScUhx4PbY1J3WnxBqG2WCiBCm9DQAbVhMgkbaFUf4BWSR3aDDqegbT7kKJf4CUbRfC2PH",
  "key23": "2YgG8pBqCkH9RR84TU3K1YtYUZyt7vkxqQydDGSUDzR4uyKzBPmRp7joppgFTyKiawECTHnEj3SPPnJr3DmyWwbE",
  "key24": "4YdreEMQ9ipVR3oDrbjUY4YyycEJVSMhihNSjYwJ4qhbh1XNaKLaC3SrTxVLXaBqRjZyd9cymKLff7FegBGFJagd",
  "key25": "4GKQpubKtKbcokCvzJV7qRS9ZPdPGLuLV5AccnE8uJVJ6kxsXNVYU6cWwy29XP1ag3E8PNMcHCX3iT3jAjS33a2A",
  "key26": "4VN3g5PQ3iPVXWLKTHUo4o6YK1kyasu6YnAM4vNVqYuWJfP4gCHtRPuKikzGx8EoVmSGLav5GwYgvzPSd8pdP3t9",
  "key27": "3ZZjz5No5uiBji3iL36zwGCeAhp4TFyJj6Vfeqf9vGFbmD8YqrG7v6a91oHbY82mWWWL3PigoZzWvxoV1648aE9a",
  "key28": "ubpxcxjQfNKkZ6WfMuAv4Wh8LVNjZzqsJLUdLtGBAdt7UT999g7w33wRGa3oF4HreyaoSbJd8ynqkfR7grp148N",
  "key29": "4UkEt7FSpReXf7YMoEgpFmctpgNpTaScFHCidqJeWawXhj9UgkmeKrW3v89hJg7H7cUVxLL7Aw9V7KtFkXqconp3",
  "key30": "3vDAeNiUVzDhPBT5rFxJ9Qtp84FqoN5mR9XBzgEjQ4s3aXb7GBtmRspHWqnnYTWbTpDx1cJabmHFVBX9kNVQVvpm",
  "key31": "5Znvcimn9YE1YLvx6TYDYhf8dmJjL8Sf5p4Bzf3z6Edrzu9mS5NFnrc1piqdxScJnHmndxFZ8JCTyrLM32WbFA7e",
  "key32": "58FfycLDeBozY3q6UhJDkve1X5U6WfnbZZdMSpaJRJiFC5Tiqy4RVXtYteFA2ncc2fpDTFCbkRpSwCS2Ur4AcFYV",
  "key33": "CcKndzChg6BghkxxSu5BDfYrr7ymG7MmxmRrK46mja94C7Mir18JEJWNPh1pJ5UYfgWK5AgcWrZ6gaadEUxFnri",
  "key34": "BJCWGGgMrXUZQyGni4fghpuNg6Y3ACWtFrBhCyDNddHFcn2SmGCyK5bFyx1ifUbv7tqEnAUZvo79WUyfWvSB3Py",
  "key35": "2qwwbm2ypCkaZr9mWHp3uqBhJt5dDqGHjJVpsT8HM7Yknt7cE2Sm75wmHGJfj1JY1BtX5XewnW6e5kYgKvdeymkC",
  "key36": "25ihkHnysBbZVWLUtbjEP7yTqiZuFkVUiWAUARg66TkVKa4yHfhW9BN7wb1uHHikUyU3mH2xrP9uBzbiUpUj85de",
  "key37": "u9452r5bcgFiBJrEjtQrBaVoh9VLgumwp5YQg2VFDFURuKWHey1bQDXgngg47fuX2AQ5KzBATPuqvUEYUnXbgsg",
  "key38": "3cLMEpDaTzATucph2MjBVZDxh6w8QqPy7xdwx5fif3sEASsLiYavEE2JtZ5zJhvcppB6W1KGfa9GjL1B2ufQd2yt",
  "key39": "4HqfM97eVzTJC8rqbZhj4nNQd2xo1oEXEPxMpsYoobEwabsKqwxdiRmqKYvXc4mUfzt7V354zQy7dVL2X99rhkEN",
  "key40": "5Ehi2EPK3c8Lji1n3UpCTi2jG9FFSkqc1LYn3op7QPua8nT7HZCs4eSVxzq4q2zfU6aZzk6QrjSh5XY8Y43ATKmP",
  "key41": "41TjtfrJvTbEbGakhzqxxnpVwy9rSXrST7hXMYsiQSNngdmDfNjGsYGgrPAYWUTedhnu89konjQmfkc1E1TtqwZA",
  "key42": "4Pm4X5H8Tg8dFA1d6c1wAbDdhUduZ4XzjUrdL4u6cycf5E8uk2QzoAkSVc8Rc78sqALGuosK4oR7AcfLP38ZM7E"
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
