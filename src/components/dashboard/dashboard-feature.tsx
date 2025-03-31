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
    "551SHKukGNbycVZxKqwbAMB15fX6w9SFmP4k4kxX5e7mxQAk1dLA5D3kH7HGfziAajhztkHNKYPgiTFx6ewFbxxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFThpFuCys1ksqbxYu1MZFD5WWMD8uU49Qhtpb4f76ewX8Ufjv6c5cumT3JDL1CzJo26GFd6JjVu4xfvPHQC5Cy",
  "key1": "53t4g2yoJuqcF9P5RDiQF7g6iZJuxNVA6rEDBhrvmvyTkgkKiYxk6z1GDtXoN7SrKWveLvPz8KU8CgGGE9mJPoGo",
  "key2": "25gJ9GFSKUP4yuey4wP4bC1sxJom9FuDXuKUMB8rGB2thRa6pkJV5y2MT1hQGYrc9JCwr42U1fdpMrT8uz7nnScs",
  "key3": "5BwqMqX93U3ZWhwFifwEm9QzVxBQ7ErhBjkLdnQmSzKPdPVFyGLC3KDJ35MYxrPYhaiSku1VBAPMhh6jSpbEYHan",
  "key4": "4TZjXK1PmCqKhULx9o471p7DyqNDu5th5k1iri4s88fqPRExHSqFGw1tTNTwEGuDaQ9mD5QHUwWB2AneibGyGm3R",
  "key5": "3dkzCyVhuMKhMeybn8by6i7kyRXSpmMsgnw8EfiNL8ANnTaVsv8dD3jdC29bf7PpgMoGyPQWo3DEy47pET2GDUza",
  "key6": "39WgcxJWoRpt2TQoGY2fsQAR8kzhm1thBY48Po68ztMXsSQzw5GuvH4FMHrjZCi4gg8sWMtexbDpukm6AP1ubgs8",
  "key7": "5D4Vfsq1xEa5BAFKbNoCzSEyWVuxcUAMmjBQuzW2veWxiZigtEyWQ4fwMdU39RFPEGB1h5zPGSsceSKaN8h4o1eW",
  "key8": "5P4xxTGBt9bR1YnV2iBcJP3wg2pMdCuMkUvi4AdSqcjBEJjcmPhWSRcJjCG7DD4uiT4ewWVZRhNzH4Z1Csr3VQBV",
  "key9": "fqtfbB3wvx4PwDrMqjWtrSnbVWuwjxPjC3mNRhmYYp1QXwhrREHC9oApGPmi6hfNgGvGhyd4Dumvtq4qjvYE4fQ",
  "key10": "5iztMvmAb9EAjUqJh4VjbVjX1kHvv7e8JZtf7SyK5NUHQPXWcamqHphbAvcbmfxe3cGvs2DGMuXkDxAjVUYmTZdm",
  "key11": "4Yo5gdPpyUoxGfkvABpWYvB278mYeFWFB1NKt6ywRJDNUnxFqejHEJP3ZWQisEVp4HZ3p2nSGG5gNeh6MQGcWjwE",
  "key12": "3psEmqie37yPsg7rADQ5UTEbsD9cuoeYwGLbiG1FGYm6B8KHTSt4vCBHD5VwqPYh9FrfkhWx9x3BhsWc6mBN5o6k",
  "key13": "4uAwYWXWUo3cKQM1NeJVQSoU4kvptrYRoF29zR4D5MQamZ32DgdTHQZtHFkJNvT673vSSgERatgC9kGkZwCZXpN4",
  "key14": "DZGesWFzFzR2oBmvoXaQ7utoj96AiDeR5QGJtvvyVU1XDC6Y266eyi4BKj61dS1EPYAvEY3PxnevF8f3V3cDVTp",
  "key15": "B2x9bqLJQS2A46ALGpvF2qZhuKjK2MEaswg3jYKZQbntesmAEF9PM3q9AFdBvc3wh7ky8FDacczrodNVBYCNd6b",
  "key16": "21JRY5nk2vQu4Ks89J8QPA1DUVZ4FE2xVz4VduKRvHgDQMVER8UAB9yCyubJNbVDWcDxWBZaYwUwWPTdZSbj5DGK",
  "key17": "2YBqpszhBRByAQiQHyiDC7iog3cySQHNQbwoUGU8p4KewEGkt1PcjB3RrjaEpC6FqGTW3zqne5L8aANWp1zYNxVh",
  "key18": "3JCby2EUfGvRG69XeQcLq2FrJs2B6AkDmkjBJiAfSEv3UQemvKeSN7su5nGqQYLUWjPBeYr8bqhAKSuYXpJx96h5",
  "key19": "2RpbdS3hoGKDRCUYUBUxnWs183qg93XyEBJoJybCuaDex23FzCVzzQEsiYpimBYxEWoGcn9seX9yxuf9uXD4rkGJ",
  "key20": "BNzRgWhP12cCkGDzQxusfsg753HNGvdfgapsxwvo4rX6eD68U9EBNihcJ7eN3g1qWYgDgnWg53KimBXGyWm3qHD",
  "key21": "4dMqvq3GTPDnPZY1F3fs2g26PvZRTDM3g6x2PbV5XEMFBicwqmNN7enRQbN4TTpepRNewCYpPyQbKoyJFZsdxpSc",
  "key22": "4VBWpuefxah7uSfnX7CMfpsq6Zszc7sQT54EorUCB6RJUCfPHRo9sErV7kgMLPbYpbbxx7ufMiqCzKnb56JRzgNU",
  "key23": "5Xcob7bxQCdbPXkPz43c7bYfKAmjSdWPiaBfrbmxwQpTteDps8cVdiCKawwbAsyked8jiCVuxcJ2KgUyrCyRS8si",
  "key24": "mKSfE6oUzTcbwKt3GoK7drrFaVFsXSaMHwB9sMpWs5Pnfq3jEUvgeXzL4VKgrjoFQxTxqhsmQbLNfQ5qyzxXG9K",
  "key25": "5R9yz1DrpSZ3goCXL6BE7xs2ftSXjLx2NuZyRNFjJDQAh3dtfQBEZ4gUEjYVpcSQungWDNkmKhsxHLVitR6tgzyU",
  "key26": "4JU1RdFGwqX3YvUh8DSB8fYoSuez9yCRUVXuF4LH5vmcmjXQfCsVfnqeT1oGojgvRTgjTN7wvUr6W6bQuUDfVZxC",
  "key27": "2oacDbrJgyx3cLhhRJfAJG3xvJa6DDsoxR7Wuwv1U3hsZTbooQmxgHP4t8aPp9wnr6hA1ZLNWJfF3rGhxVP7RL3w",
  "key28": "5VZp27tEQm2DxMsEKcpTRmBFGR63eaq9jQysvcbjXvCv8F8EJrmRp4LNya1rE3U5TrY2bMBbYGB2xAqmgcwokdG1",
  "key29": "7FJzQwYeFUQhhAtzSXrwJR6mdQFzwajU739v5pWZybnPuZuiN5Ymfrfo3j21abR7Umty5HHK5ABD8eEV8Mh7HB4",
  "key30": "4CJUtxNCPdui1DXvepNGosq8aFKibGWJWC5eUqFKbw2CZaWjxg1d3x28tF9LQvFYGLUL4N7W1CiXaT8S6cWhgRwX",
  "key31": "5ury2yTziGCrcoUZpEAPpaJtbeehgiQHs47WgrrCP8ZqP84suULDZ6iK5bvmYHmQxhFFziVNVJbQTyHwoodcG969",
  "key32": "5oNgxGguoQj1N2NniEgRs7xPk1aKsdgZnWYVVXG5Le77th5WPeoJeXwPu2hhuKY9BRSiKC6fTTzqu8TiGL24kihQ",
  "key33": "5QbG2xUvvF1aZy4Vg5vV6AuCQwCo167fSa1kXYqQrh39wnMu1YDz9BUrnfFMgmm7CQgGokuARNKSwu5eLASsxtEW"
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
