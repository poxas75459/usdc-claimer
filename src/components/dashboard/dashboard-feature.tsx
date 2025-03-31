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
    "4getqSdKv4TS5KPdQY17qEfvHrMagN2ngRRPmaZFpXpGZqdLpzC21ye4bmC3RqKsE8yyG1D5hF52SX2Yv4qoGzwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pnWibmguTVGTdjC51T8bZ6tQKJvHFKiQrTxhuCkKAxsihd9SModyxq56KuMo3KoEe7oqcGTSgRPKk9u2m89d5Vk",
  "key1": "3EsTxC1ZsjDeJ9SRfeFNNTYQ1Cnh89YrBxc3g5pSsw1Q3xYxTvQwg2uh4c6NM1zZFSkFXSn48foZDcrg5TATE3F2",
  "key2": "2h6Vd2jT5KvHmEmeoG141NH9h9AGNKtwKxbpZgY8SjjpBVtXS3LWYqG3L9TRjAdwkWkusb9bQ83DzUgrYAQaQwyU",
  "key3": "3fZEMLnUmpdfPGbKVrg9zKqiuAMV28sVwznpirqJG928S7sEeb9ocW2jWoBEHU93fBiUb2w1b9U92sP73Dt3G73z",
  "key4": "qSgWqPgqTSSDXaUJGAQTDXtM8jCYa5Lr1dpcnQoRCjjjr5CqeGDkgygPwExTMBRxG8gbtpbURk4sqLaz5VScXuv",
  "key5": "dGFKY6JKWuf4kE6FnuqDWmUaqFu6Yh4pZFZmkUs46JPHDMu54HJ2VJgUMRa2MDwC553c8UMaNMcsmdxeoYRmG2Y",
  "key6": "43seDz1MUHWNWxR2mBEfsrG4SDabBKNrLuvNnUMeuzn9FJbFkouvAx7z6Pc1yjFRUQVDJuXf3FZNEMbSw8MsDGv2",
  "key7": "271bW7Xs3WD3XGNyWuZ1aLXyWSJb9xdmSVWwKT6Z6ZPqitKKQWAcZ1H1fj1XLRptzJ1B1xBea5J1b5AXTYXM674p",
  "key8": "3v7RoUDf5gjqqANRa2gVtKgXhETFrFJEoi1DNZUhzNXxAdEBhBRZv7g57LhN5JBHEfsEpJtQuJWUxZb3XgyeXnVq",
  "key9": "2FBSreo7SQz3JfYbnTGGF8AreMQ4VWs34AbnB5sdYXh16q52Hp4xuaAq6XjcRXd5Tze5YxPBh41LcCy7kj1ZdBo3",
  "key10": "4AK1p6nUqLQveutradFV6QuR6Kzn551FC8TPzfPy8Q7RpEXTttMT1Lc47PfaLVwQA5o3QSHiRmZ1dErozhaNcxSv",
  "key11": "2fssRPa5XFqPEiuxiN9oJQAmwmtUQUh67DZVx1hL7moSBbsKYuSBkU3n9UJ815wjkyv6e6is4EqUjHMqnXzY6eXe",
  "key12": "NzWS9F6gVwXhamoDvSBbvfmT64ThTHnn6q8qUPy2YSWhJoEbb1pwz1hUK4ZAindJTs1mwg1Th8SNoimMhrRBTGr",
  "key13": "4mXCBzqHCtuRyH65UnPv3X4eHFuYvFc4k6boXhmisMBxTf78ekw6cpKhcjN6s2jsFpRiT444igy3ADSP3MQtXXom",
  "key14": "5SntJHLM6Nr5rJcebAbymvEUT3KNB7STYsNswhrrNoeoqLqvPE24eJFeExUMhUQcDG6UMmjdqctvTfcHccjCqDS9",
  "key15": "3zk1LhPs6mgUgrYoFN8H3AQF4UzAtihnCjv17zXFRKDyCDNBtK36jfCtbzCgWWNsMXb79Fast857Ygeh6jdAMQfS",
  "key16": "3UdZmhfUVsizBY87Nt6a2bYwxFAw3BA4Mdfbshcj8zSW2kH2cMkA8m6GYyESyCrvzKhNdHg4DRA7BGxEs1h4Q9Po",
  "key17": "2Sk28PNWkD5rFmsx4RaSsFC2Bsj9X9BgStQhJsLTNTtC9j2CYYrCVYFS1FyPym5WQkd6PzUg11dRwZJi7sfxCu3x",
  "key18": "6752cRDtijDDxU2FC8MoEGxrmqAQ4MbcUuMLDXmqHCPpYuEH2SQQjsUUeprZSyPc5H3LSZm5yQmBBocFVvoA1Q2H",
  "key19": "4kDCijma53ttrW6iAXmR3zpsBAVvsiLHGYvapcXeoZXUYafxexVTUwZmNmA8eg5ozeSofGhfggDnpn4NRLcgirYY",
  "key20": "2PYrE63oBzdfhytgeYBAyHhuiB67AmHKWmyHPq1j5UyTS5frDSJq6rwfEfHkaagfDbm6niJpxGLrpFvifLdSiojK",
  "key21": "41c9ZnJQzdqdxN96vGai6KCabFJR7odTMXAUudayq9CDhmy8kMbzpgB1UrursoQKkCBVY35NdgZhB7yPq51pS5f7",
  "key22": "3DWZY6mdvyuymYQj8YRrxqaEGW9tzeWTnPeDkQCwoizbz9XXYXGftXJ7nXNLaqpQKBpnoJqzR8cxAa9KsY5KQRPV",
  "key23": "5LBGGx5RDBoTCy4wLuHRrXBG24gvbPQ7SR8GWVVD38twRy7tR98p42U25anQQqDChYxeytmFE7awZBrQZ14GUH4b",
  "key24": "5WgrBWoqxpWExKcJMMSgVUuQqm654LbdRRm9x7dPMY2veDP5BXP9xxuHTYdqqRMHL9ntND3CxuJemWMRu8y7vZzb",
  "key25": "2Ga6pBCqCt8WrwqQhTiYrEEe6DfrLbmz7ayg91xHzMSVrgLiK656YgSSTKvq16ZSrmuGhrCRSxRtWoGi4Zu1zXU2",
  "key26": "5Kk1595YPE4RLoKRyJUsfj7Rxdg8FSGcXsEtVK5fUamZC9xSxtnTD6zGAUJs59pPM8z6Bo1s5N7xYv49ZFnC2NMV",
  "key27": "5Wts61m3N8D6HrtbrQysd4DERhkwTeXD6fNJy6RB3pcQrZNVjT8tVLsmD2bDBopwfPmn4fAfnzVh2EsRzsCyP4dy",
  "key28": "Xi2ktECvhgNHUFNukCXBnujroohQkagnr2wRmFKgwVtJxowsLMZGKzU1EMy8LXAC6EVz19KX4wToEfnnv1BHdV9",
  "key29": "4UJmuR1qL8oPW8cyW7iBKHZRiX9EUG3bwKi5ALi6jVP4QQ3H11KSABgRnKN6LJVq16tC4LgZLhUDu1ahcR4evyAv"
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
