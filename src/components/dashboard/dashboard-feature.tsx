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
    "3fcr1bqxRm8qEdBqdkCxPu4ys6uDn41VYHUHoBHH8WjS3XHzKMmuPfqTkzCPw5hC6aAMkRt2MwzgAtD9TqzAxjcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZvaDfeSCTZ8VSUYwA4sL2G8cPer6h5W94p3eQyMp1R32KdFahJQqc45euj5aJWZsm6SpSfzHsJVLN7L25s1kExH",
  "key1": "4kYD5M9Y31rdSTBgyejawvQVUCayz7XbAhckeFdWxW9Dn8RxMwGPAqcoGbKqaS2vgdjU6iJc8enwajr3hbQRqdwf",
  "key2": "5jbhPGt7Z8uvQkRt2x37or5QECgNLm4qP2NW8suq5N5f62MNByWu3BUFPe578ouxrBungET3Q96kQ9UeCejiKE1L",
  "key3": "Wur8kHaDmNXPnUYKPnS9kvWkM97zpHin8Z4xLX6cj8rEcJbu1Ah36D4VHwf88JjCpJ53uT1bsTxRuoDYp193MWs",
  "key4": "4A96D8PrvqCarhCnpbANyMgYCt7aLpSvJiYndkUAnY73SD627pdw952CtQkktaZUVEB25Qy9N2SaRSbC83fKM2Zm",
  "key5": "5or6uhxppW58zaKBd1ficJASE27TSgyhHeCMcbePsLpHM4gzUqR3D7TdK1uxiaiUppPMXqa9JvtzT1JSQJ6m6q7s",
  "key6": "4YWRwS1pkNmmtYP249PK9m8ibtxtifYvK7zgdwZTutRckW347NXQCYXvRHDvZEY2BV5eMtYWASH88qEmdc2auoQH",
  "key7": "wcAkGZjykes4dTCQRjginsia7aAmaJEzsssfBY3yRBSLJW6uxSGWqn5B4TCejnEcigePG3hx5saRdNUgWsZ5A7U",
  "key8": "3rxz165kmPBuVyHvmQJRpDzczuy1iLq5Nx2kweW17W2n25M5zD5q1YMaP9FfZ1CYDNU2Rqj57nukfvbAEmYb8C7y",
  "key9": "29x7gztunFMWHY8ujQQiXfnLnceHQyftW3opVC8NibP3uqxZSK5h7ZszCXj5gJC6nJnHsdqpzGEGbKC3udQMy5FL",
  "key10": "5sEPFpiow3TtNmYCg2uAVRh3cnGH2qHWEVYcUymEn5czNSaRqhoNNZieNr7L179L13nxEZJsV2t675BcajX28rea",
  "key11": "RNXeF5JrigUiAAPiHJFZpd8v51iTCRdj1zdjmQZJ16WQqG9RqmNv3LJsGSLE3fZqbG3XnVhPEtfoBJV6YcxVKEv",
  "key12": "2qxzvgaakyZZqyCr2w7p3xyQPLAC1q2KngdgHv1YSiMdvQEouvCQ9K2QoEpQ5K3278S9tzpGDpNPJN8rsTpum6hv",
  "key13": "4qGHY8FEFjxF6Trg6EUuUSg7FeZ2kixPFpot6Fg1FBybVnHgufjXKjvFLh27ohPXHVp7RSpUziLkaSVQumkyi2aw",
  "key14": "3wv2j7wz7VbMbTaHK9XJAFJskSP9wBf1qJyHfhTgc6fcwF6rqRHHTaB8aBJvqXaeonCpgUhtsmu8wctibw9FCtDR",
  "key15": "51iC5U8s3C3PgFx3BPDaTKE4xeLJ8LgJT9cxYi4Qmk6VzzeRYVEEwc6x3puYKvjwBbrU2DAhCptrQjiE52oe75dC",
  "key16": "39e2odWAQEZfZtJuCME8iaqBdMDS1qfsrK74keKqkycFVFoSFwH61ZpUQjoGPFLgYvHPGCVEtqquvZF3UNff7Ak1",
  "key17": "2zxUV2sCZjDYVuqk498o2fGYNskUwCkb4CgzeMTBXK8CTdccXs9XCwC4BD2mTopk9WKUZNcaihsC8TCueb7r22r4",
  "key18": "3QGcQvaP68cq8hZ8kYpJbCXu6mBvzNMuGUxC6TYZrYteSEYt9JF5Tkup9fbNA3PScuqvzFqG5sANQ926serjRZk1",
  "key19": "3DJw8a3e1z1cwUNnjp3TQByJik8YaRmkvoZEudYVMnU2BRfYPd33ZrvU6h78p3oSN447sxerJYWBoKJCA5GMYkU3",
  "key20": "MLESfqLHzx1jfoPB1FUibfbKis7GjnLKy8ZTrGg9Fp2YMwQBtfUeQXnsJf2VFiDMnfvAucXrgcMP2NLiYojYe13",
  "key21": "4PH99PmAmCZpYATT8fexG6jZLxMps5Ee1p9XTw6WAwAaRTWCM4s7MLdEjN8pdKG6fMWeELh523uRoCAmK1W9H5SQ",
  "key22": "2vMH8bZ88NHawRR5UdQLdQtyt3KhiLLwrNLezjNceomcBKAQDog1oXLyruSYGKpEwtSWtnZ1BmZGu29drWVAisgS",
  "key23": "3VUTVi2YQEQaqAHAWJ2vwouXcgoCh4Fhb3gw3NfMQfX4jmoQmDsLP9Kmjv99gigfpCPBncgpebYwNFuMaWBL1XiS",
  "key24": "5ngoFtBYSABeFGrS6z3gWdFF6KbVSYtV2kXfxnLsZPqV67oY6m7giKHEdZ6b93fb6Sy3urkWWjteFUnbFCFHwTbj",
  "key25": "49jjvyt9GmoEmiS8yu2DF65Yc8UVzAdoG98jKHLUMy7wY2UWg4Uxdw2NF3aNJxe6XtR5CBnYRVXxSBcPHW1wtFXt",
  "key26": "AQ38jznigtGv5WAqwYYfDgugj3jkCtnDmUFStFi1pixbotH2Yjk81yfkwQM9isHiTkQFtq3tJTjxCEsSTwjzFQZ",
  "key27": "4h1QZGkhaEAEttPb5v6bEZxVW7x4XDdHoKgCYSd4oUHFSik35w6WiHYTCeF6XX74JYPNH4TQg6yRCteL2sA8HxkB",
  "key28": "9qRcJyhgakuGA1xUSNUZWCmQkg1CDXGJeSDHYPhf26zy9waWEAGt9d14S8XpB2j57ipWfQPJVyfQ5LdhJy8yhm2",
  "key29": "5VuQ1MxeXdbSCPTAg8xC2o23696ttW8Q6HjVVMii2MJwyRaF4VVdyf2UsKRwhFJjs9gk85AK2y3xW5i9k9PJ36nn",
  "key30": "2ZsmB3zFo5ExjXyCtWKeAKzV21t8TWup8NpKeywz4B3dCFTToJmgystnVtn82Dsfu6vwZ936WsfCxMXQPw864xNb",
  "key31": "221EfGymdoMbUpubYfSvAK72fzrKBzoD2AXHYMmxKDsW3wqLVJAU6krLGeqEWNZjEb7x5CHTHs2P8ymxuwtGhUYC",
  "key32": "2TnGs9YAGiLVaB6sY8L8Kw5ZgAX4Sjwp61VZX5pRG5FX4UrdpY2MXVMauWg9ELBKf6jKySTZCEb1wowaPZ7NtTsV",
  "key33": "5qbgi4LGaAyitMkspDqJPfewrKCQ4CBtYacp6wb5WCWLB2uwvaDB3cAQQi6urGc4fanX2GiDwCD7soQzufvCdLtX",
  "key34": "61xqjc52Br2eBxhK3SMk76ME4weNhnPzZB4wTo5VqE5jL6ynrKspMw3Y8GnoVTrTn7EQJo8Pxg72PZ2g631CDWn3",
  "key35": "42yf4AmmV6fxXzRG598xPdDHmeJVyDQDL4SccBYZ8JYt8dmsb2TsUuQsd1Jz58MVyk9sxk2QaG5UnRsFsH7QrTpX"
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
