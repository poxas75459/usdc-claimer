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
    "3rVxzYxJUmWNfxWQZuhnsgkhsVSUvHMBeJGbn4P82AyWorjUzD1hfkh1rJW5KM3h8GfuuT2XoyHyMxNF7eQVXbPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34a62abEA5TPLufPu43Je9QypsBxdGjJdZoAt3AE5gTdWUMKUg7v79jaQLr5N4NEbBbVnXGNUgg7TcWirZpicyu8",
  "key1": "7MwKH8zc7Lk1rxPUo45eF9ubQsjL5Q5yg2QJhYjMa2Wg67mR7SjhauyFVPRSnhZBVBBJMsW5f3X7dm8DLZ3PMPb",
  "key2": "2h8MDF6Ko97xcnW4D5EghLXVD5Xyp868ncAG5Doi38p3y2XnjVTKeK9it2ByGG3ZVwu9bedbw6Y66sepZ9dBxJR1",
  "key3": "2xzNLVx8Z3psEfPqJG3dqLBwpVrYLkr97jxL8RvG2o4mWUaRPE3yNj261bRnHBktCmo6nbn1u8c4eddCX1EmJdYB",
  "key4": "4EvqnuisoM57QA8MHpmJ8fYiAPCZ16Puxk6m8fpTorKMNQHSvAKEFtzVM8xZLjLCWV7bdgxbNXYgT6UW2Xnxvdci",
  "key5": "ZkV8tmGUG1D83NdqhddhC27kMjifF27rVSg7KbSRTeM8coj1gAhoLz93Ee4RJZo3Ye9RV3UojFPrtPpHT2QnTpW",
  "key6": "2yeV1vv1tmq7n6KixtrrzwUkZopK4oW52a9T5ngHghFUYj7PipabGEUVhVCSxN3VrgYhrjVNwsbUtAc47YEXmbjK",
  "key7": "3LZjqRyod7ZXvF8nMM2oxno9kXs6vx6LbrSwi1hyFxFq5QbFe64DBmci9X528HCFbbi5V43VnZY7MYoA4JWyW64M",
  "key8": "3pqeQ5mj1ALXvh55c5dp8bpysmgUqK2r2HZTeeLDRGVhYR2YoZzrgtSVvsd4hH4ujmvPiKC1rxhfJn4GzqcYu2Tc",
  "key9": "5GgfURv4EyDDcZbnFsFryUaHuDpvMeTCM8hcereG8LkJUP1gAyBBUkQMAWiX8grPDnCBZpUyS2aZcDuuoY4Td5ku",
  "key10": "4gZLA5GkRyd1rVLC3WcesStowGLu8NFPWQJVfZdEUzvmShU4j87YWuLLxtr3e81UmXQfuk7dwsi7DkvtbY7SfyQB",
  "key11": "5KnA71QJNekMtx2FUYd8iHiXBcZVs1s2xrAgZe1gsGqnQAtE2pGqvcrCGP7xmbzbgyrsbFcz8FLKRSaCSTk3K9nq",
  "key12": "93JYoBCLFvzxyJxkeX73BDznzXPn42dUf2rRznEwPTkiQ8NzDn5xov74vS2S465QGErAvtbtTwtXRjBZDUdZSfm",
  "key13": "4hyXkbJ7V2xDkffnsh4Q138QzkrwGUN3XJRVY6bM99GdGpWP6nhaQNGD17CRfqoofWGJSosxzw4iCt6QbDA4PHcw",
  "key14": "rcBjHNpJBLZsXVk24yvnJaZdHeW3rj87fgGXYVsqgcKRveTz7XMUUZ87tcav3ERyruFB37JiBnXXyaQizs3jMN7",
  "key15": "2gvB1CZgxin2RUmV7PYS6i73rMVjzxwqWQ8C2dcyACKSdxibbbn5fQ7jeR387ia69ykWAUZJ2kT3aKAAEaRC5bE8",
  "key16": "5dxUGyYsB3HZHcP1WRgZupjm6qabQPhRvpR4UigkwjtwaanQAQsEKhXaT25bAPte1gjwd83wwxdxbGgVSmuJz7Xx",
  "key17": "5uAmVGS9pNb6Vex2ZJhSWWo2y67k9R7btWNw4aZ9CxFtngdYiUgP8hBr2Rokd3NjjagDoYf2CzmCqNVm9HvPT9kx",
  "key18": "5Y9dF4eXeg527MakUd175m4rt7wuduSiPqqnrSMkyXU6wUU3BZqUJE619uJek8RBjYKKke9cwSPjwi1asfvwpFLW",
  "key19": "3hdDL4CAEsjGLVnPtX8je4cabQPT7qDEmarebo8H8fNXTMvxkV9eZyvQYadjCAWLdDHPMhw8eYExrt4bJFcVZWC",
  "key20": "4Dy7UU62AVjjaoafw43oDmY7amAttns1BMEnGxH5QfWB2RKLqVvFZQHYQxijgWoUpR5Uw5QwpuQe7pWLuD3HoU3b",
  "key21": "5by3293s96o6KqjhvDuH67pQMUH97ghoynVq1cyGdkuc8ThL1wvBVaZay2UXVf1PoEkMigbXcnwZa83ZYNrJycn7",
  "key22": "sUyXE9tz4CP91vVGkNhg9JNZa86dvx5rDnEuDiWc3P5qLMsuRAvZ1L9pemf9Li9AgYB9UBBuQU23kzbbNQrdo52",
  "key23": "3aHLoDjwb9mFJJM4PZfHS9586gVdypeuczy3qZsULp3qxKuF4HyariJF9Tdt9ut5ghDn5u9PPBRbfNRdtH4piMR5",
  "key24": "5dRNMTeT6zHh7LitptQdJbGcpJNPFyZMzHvLrNvpzgmBUZCNUSDrx7aXtzXKYb7WBmynFJkLVtZDwF2FsFV26uhf",
  "key25": "5zbDnhGjPK2qLU8e3wrCdaeNjmngJBCXXaEQTZ8wYcbb1BttSVgb39zCbmZdBbdhFh8gYiSk6NCYHrnegx514ZBF",
  "key26": "64RDqmkoLiL5gM2gsyfPHLfUy5N6DGmAUhGGDDYrPFEWWCoEWCiWJNj3SAvhHe5qzvXuEYZxhq4jEcPHx5STMnUa",
  "key27": "3o9KidZUZnSqmorVvZrybgduAV8c8CtfoYES4Th9A9bWQXx7HXY7YHddz4PCc8swc3ZG6y3r59XQeFmLx6HvvmvH",
  "key28": "3FEJavcKVjnoE2kSNtVdGZD7v9EgxH9eKbmEpht5cZY3pp9GikzgSrDcWs7E6oUJHnzUG8L1cgJK1Fs1vNKnvPVn",
  "key29": "5HxPZLtdEW5KsqpCKLxLeJUMRbZvczmsoYsrPMrH8t2fT1o6fb1r1g2roFtvftoo3PfGqoLQqJLXkbVdvkwTeEps",
  "key30": "aMLcZoMrx6pzq8WrUf8bBS1oUQ7HnSXt7q6osXjsHcWQPk465oQ1Sx9yCtPLZX3z2BWyv3RknonpbKbY2d3MCBE",
  "key31": "cxZ1xy7upap91FDQ98gwTda76UwavKRf1UgRhqdAwwEZWRZhhBfQ3rZXYm2GEWZe5NRTp4uKDH5VfnC1uYX92Mp",
  "key32": "38PJxGGBPvo9oy3vPSPnHAnXze4Texw5aDsEBHsxrs32GCzuVx772QLdcBEmMt9fZ8iDTiEgwhcNQ9o8zoiukd4b",
  "key33": "44W1PkjeQTjrBUt55MzmxXXT5XKSxZ4S46MZeNwJvdatHqGLsi9k3hg9cgrpw2jYtLRUeGVYzaY3t4tnSWdd5es5",
  "key34": "4FdbyxezceKatju3tCnnpLBMijvGYayPWdLScPJ3c1K5MT6pgYoSsTLw9tsv6Y8fBNAbC4CGrP7QwYMxheV3sWms",
  "key35": "4TFQQcj1Yt8pTgm5u5ttx4Y1qthUbT1AcS5tB8s8kwQsQBvFcyMD68NSCwBUuiqyQJR1iWJgUCmGPjmKDfTgxJX9",
  "key36": "4Cshxa69nWACJ8BBt2wSRc3kQFXA5qpsrFbZn14P6ykKRoJWJs5EdEMz7WELtbXUdw2WeMCYq8xGxYXMnrq4mm8D",
  "key37": "4NHDXVb3CnmJQPH2vn4JrPcZpeWbgWqD6xYG3HWKL4bycLsZ2SrWQCfb1HTEhAkeYast6JWfw2QKkCvPTrLrVXrM",
  "key38": "Gh4ZYhjHSwkzXGnnBLutZdh4wq97GVDA3QugMr9i6Nwk7ECbrCzAu4C4wVPaPvBEbbCEHaSwyQHeyezYCeyCTTm",
  "key39": "5mbYRwV7cWehLHnEurssMAsvWfLjXh6cMujoz3qp5BuEXmW1fd4NGDUAqpr1GcyoZMoUCgnAJmCSAaBQkvPDrkXw",
  "key40": "4dU3CugVjbuk7gAVze8RxWMne51CoQRfupz5ZS2xLYP4CDLKH5Jq4k2YCeNjHkwhgeFWa8j5Y1LF9gfGtAxWy3e8",
  "key41": "dLoutjfaLoXpoU6ty7W8fJpFoFrF9ZAQQ7ff41tos9wgrEx5L4EikdMdpHKJ8LRxfi97UYJmR1CQKJVRubiZ3AL"
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
