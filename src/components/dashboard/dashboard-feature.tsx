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
    "4nJYksdnwC1ZvxSsRW7W5vd6VsN7awssEkDGr8egeHqT7w8moeqSbW784L6ibuULiGJ2GSJzzyyvNQWi25cN7Tqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AGLciUVwMWeqSzyPWH8TkGrUNkPdHU5WJ7qDdybrEAjBuL8ugtJj9wAfSJwC8gAfJGzGgNW7B6qDvhZBruEnXiw",
  "key1": "Qd1o2cwmoYCKXzejAUApaQeDtWW1o8z8mCDVa6nJybHe5eGQSKr6q7aSMBGo33K4tgVEzVJogEkSTwa7fhzsPXg",
  "key2": "3xunXk3mhokhyuFin5xXPXreuBHMzdniYyGaJRLcYFgKSTcb18X739F2dkDpqVJYEZvJY86Jkae3Q22E3nGc6dUX",
  "key3": "5yNMNyGsJnqgEJECgDyDi8ucHydHrcw8B4SwNb44yQFBj43E3Te8A9nJ4HAhZZYK8hSKNq9jHTUcSRYMcJjNxRB9",
  "key4": "5NC1tXs6pfMTxm8ErL6weCjTtWV1FJ4PRLKqLBuLsmp8MVHhkXJti6gJiBL3EgoUxh1UPGiXgXFXpN3my1osMfse",
  "key5": "3eNajpqVnLK3wnkBMntsyRrumt7nJ1QDHuSYcmRqTp7ZrxbcEnxveTiqHxW1pAPUvhwKeAD4nmLucuPkfCjRjZBs",
  "key6": "mJzcuF9JWUk3DXEFUBHDJM3oi9kZTX6Rm3Gw4P81jBZ4QsAS2xeMeMpUrcc5ZSiRBVuZcRGu85id4xvMsRuDA1q",
  "key7": "8acj2T8RKeWrMLXfoyNQNxB6dMUthrhWnXfZSit9ZsKnkv147J6XwSXrUeQ2n9518kGo4KqGBRf9kfnBii9fs9x",
  "key8": "5k3vZSLMf13FDqYA8SdD2jJAwXS3jDQXA9fzYN7pQUt7EmWs1w86uWozHT1GpeGuf6qatWyv3eMkbDnyTR5MUyVu",
  "key9": "58KKfg7KEdsJfk3dVXKKuEg9G5TxzmNCQpcNBrpg4bgLydDaKUyvmYTDkSB78xWFSheo9r6JaSBJP9EUb9d3sMsH",
  "key10": "5LkV5XneesCWyP5Q7dwqAUJkUMQV5ozLcJWbmJqJhDE4knXEr9sC4dc6FEe6kcXck9kN1qCfXyStghDdbkMBy7hB",
  "key11": "3NZBLo2aQ5XRT1XScachBzxQhGcUBYcRvswJenu5Ss5ubpDGGA6714vxjn7wk2TP5WBCeqR5ic2mXPs7gbwj5omM",
  "key12": "2HmoVH66ZhKNwabdTNKRCAUQ2ce3KNwCbEBBdQpCkzF2j9dyCKn5gzpYAK1DmPm5GS5416YcmAviacdVFqcLf2vq",
  "key13": "2KEuJANfM7sDQktNE12YKjhNbUd8LKsuxL7j6kN4rpo3bU925sqQu6cXxxS1o4hn4dH5Ti5fvo6bsy1g1w8b3jP2",
  "key14": "2kZ9RQirDz9TKJoxUrPNQhukLrJ6LuZL2uDP9QrCLVNriuCNVC13waSZmrh139e9LWNdy6zgdbT11fJJ1yMVFkeh",
  "key15": "5Ne8gWCnUfLcBh4KDpb6cgyAM33B4riNMAxJQdC9tuwLwwmLFH6NzkTSQCRUJKLiwLEJERPfW9qGS54fuJdhJcmP",
  "key16": "4WB97L6Ea9LuSsqXyfQzRArahS3PWxUmQCGbZLorUE8o26yYo4FygS5iqSx3ZQt3f7N8TsNq51mCXZC65dhcuNck",
  "key17": "3SuESyjYnackKBpkbg3GDGAKhEy9iA9WhgYBvS4zrqMytyxtHEESKW2pjVn4TgRcLYGdKsHGE4WiTVh66G3AX1eL",
  "key18": "4kvEHLVfi7yv4V1mDiNwYiR1acSSDCCctm3xuXvJgyKd46zaDFRrTUeHb2Jams4fCybMAkESrnH4E8woEdBsK8s8",
  "key19": "nmqFG1Bg6pkJr6A2XztzSApW9X3RoCJvdcYD4AqSsfNFQ9EMcxHcdzdhaXap4sW3MSRYrVLUJqsHtrWvaNSDyey",
  "key20": "3QMKvkEeNHHPq5Vf1Bp5ZMZBL1G3oBx9dGYuuuXgPRTNRyZcEmPAdnMrFYPErJjb7k53HiBnt1AjViZqEMTojN5q",
  "key21": "EAfWdsntVw7RA34APL1Fiv7KaKv8QZiDGmk64Tp9akTqidY51nxDiL6sbBtCHeUbmvbmrZry9BHsqUbzdzSbv7y",
  "key22": "5DMZrhd5RSCUdmxjq5SuKtMKziKkAtMsQuodwkGazdHzQ7fRk1Qmzh2TqWAAErpJNRSgRN44zz9d7ZXCJGMps422",
  "key23": "4yeVkzFj26Gki7F7Lge8Ego1StLK9DsidYpNWqcJjqMgUfcgAaYZ1cuuHxBFxU2vkrWjojkyeApxiHqwa9TJBhgz",
  "key24": "2bEJCWHJEKYY55euyLD3HKpA8sZ4JH6XgLVMVvFb3h67iqsFZbuGhzFXnihJUV8qPWys9akaqFQzPtN25f6tdw8F",
  "key25": "4TQ2XcAr6EAMz4gSPgkhK9pShRqvpH89ScwCQH1eaB5r6c31yBeTxSPtjn3GM8iUeAKHyUV7cbgVfSFnwVfRNhrV",
  "key26": "5dA3PvWDHWFaKJe6TrKHqfWTvsaJa3PseASj3sBRJ3RRewT9nSDruhSv59EkZ7emJejmsFmjkLUQGDqfvPuGPsrz",
  "key27": "2qkTUufZGNHMEPigAvc7S6KnYH2A4TJ7z2h45NxqJsYTENqLRdRDpny8oqArd2d4Lqgs4rUghmm5hrxQcg6TwboP",
  "key28": "2s1ygMtU4uifhED8mvmosNdnsZgRBVdChtmz7hzosGSUfpS4mF7TLphc6Q6q5smG1eMRCYTpYDiGXnh7JTzBSpBL",
  "key29": "4NKKta2T6uB6DpXDDkaB37tY9myrvUCtEiqzKwrmahWXfAB525eCTaX8As8rDrwRkUjxU7D3wRq9keKmB1gGo12K",
  "key30": "gXF5nneRj85qY7GYESbmQDVLcRW7qHWEdSZrmZDT9b2dwySCzPmyicviKj6EADDGjhnqu7731WT2rCfLY3WMa8o",
  "key31": "41Uu2z38YbM1HuPDdtMSwvXNfjSL3yMEGQ1Xab4NwaGdev7wJ8KoCu3RVdwaMzTZxfnJVSRk5buXWaQP1yC8sURL",
  "key32": "3A52Nnh5CL6beiqdMZk2iLtRENK4ec5SwKRxQA3taJvgUWbRZd1Zh1ftk1pBSP9hUWJstN46zukuihY5ZGA9Zbcv",
  "key33": "51F1CMTgZbnyjniAgmGBkUdPNE5NcfSM6boTTJQeWy7LmnzE8ygp5AYHQTCmUXU7qpGgjvS74b7HdhA37GYboFZF",
  "key34": "26tVzx6run8WatQC1knQGr6z4Uzj9XaUapaEQcnMmLJ7rLHVCsNZHAnGXy1adazbC9hHhthU7jsBgknEJWB1itSA",
  "key35": "29Vke592WqEuLyfdd5u2415thXiPv8pjxegQrUubvHU6vowMyk31WUyY3uPs35A7SDRJycBhAvSQVLinZRqA8PEV",
  "key36": "3CZwtScrvZogRY9KL4gmGer3YLTpKjCxuWY7QJoVZWapsyFj7f8qdk9zZX4UDCo54bew5SBfcdHbx5tvy8S15tM9",
  "key37": "3EVXwe36ifkgTsFqYCm7pTRocjvhg1VP1vrTJy5qtfncrSeW26pZ4KQnSfipgrSvuyM41Z3LC34VEc2xBEYHrqBq",
  "key38": "4pELqL3etSQ32ra7RnJLzeJggNGz1s2T4ptPr5CZTB9A8VexeNvDyajAJxfQxcRCZxn2U7pQAYes6FBzEhsnTVkn",
  "key39": "5abrc2DGvskqaReBfGthzbMfgRBTyUBjk5iBdgG4T9LvT77NozMh4VmZkETR9yceiX3UsMJvhXgvsWC5mV25nQPz"
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
