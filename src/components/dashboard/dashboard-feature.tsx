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
    "2wPxpYtj77GGZ6TaZzXNSiAticwEWiGQdBCmn7iNkh9CeyMbPcLDJo9oneBzQeqWPCzzHcL8i3TCEXSkT9cKFPsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwPqhwj8k9CqC3U8oJ7NktoKVGD3NmTp8Xx8YGhoZixJmzBqtEvozXDfHiTGSqsP6fVobKMRxmpPD3FWhwLC4yu",
  "key1": "5xecnSj4BCLTV8tuEJqdn4ph3f13fYRtoxBVZR6hM2ScX8ZoANw5k24F1dbwdb4Rry4cgZ6UzFzjate6VA7yK6k3",
  "key2": "63iqakGtoYCxBpP9Z2n5zhdokrvdEpMf7GWyZK75PAQ6RN6NGaxF8y35ZQoE9EiUoyFGf9LxgfZxLXVeMVcPZ2KE",
  "key3": "269hj7kaAUr7V53B6A2hLiZNivMec1NeuQZ1oEA4mttBCxbZ6wY8K5kcrAepxkNhnheanixJqYrSgAEJsSjavMqR",
  "key4": "JdLEk5nqnGBsSSLw9x64ApUb2tBm7dHF12Bx3trnSWMHuqShcE68ZUYBwGzz6K4cJSjRQNDroszUqYy3WSH5u5e",
  "key5": "5xJWo4vDDxtDEqp3Fr16jdiqzTt3uhrQCwVZHM7pNvqprHdkFqSXot8sAGVpZ8Ex4NGvxeHD6W3CC1gS2uUPbpWn",
  "key6": "3gBhVzEMjV19RBJzKmTJkhpavbTYNgNYQYo13Kc53t38BF74hxS4ZyyAYaVkKPDLAoBBQG9moSTcSimuzytG7ZXv",
  "key7": "5X1Kds6G6hwJa6fwFPwSWVpcsMAczc9VujUtaVyS798A9DyKLNDTpquyW3YQZC5F9e8cz9gey3n2Q3UEWUnMsPyi",
  "key8": "4DZuRYCVSJcH42R1Ffd7QD444FmoKY6eanY22dHkcUGpFgkz1DEN957K6TDwvwBvbw3ASnNEQBCHBnswyKMyQEwV",
  "key9": "MbHRW2WJZqyodRkqbxyFT1RLS5L9LvFp1vhrkCBCTxLDUB27pKW4ViPjmzobRiMpoqpMQkERmbtw3tUFc4rU6Gs",
  "key10": "5G59nEY45Sfd87R1EiaESQB2popTBp5Py9idVh6aNkrugyqw8wyEiTXqH1ZToLso6cPwj8svapQKRoyjKnUwkSS1",
  "key11": "3Ho1W5w7bKhNQKFWLXotdUNLfDgefRPgkL5EhF1cYyKCzbgzr8bCrAeU6YNzso9DtLYWU1MgFGexVUYmNKy2DoB3",
  "key12": "5xe6nhjXnvRZPvnHvihwjnZRYuLUwD1JPD7gwns76ot82UziDkaRRJfZhuB1DuHr6ekHoipEDApF5BtVcGH9NZnm",
  "key13": "22pJ9fRLNqY2UkeBtDuqoKjMyjYNnLLd5hoNRRgcsWAie7JUro36T9cbMkVkK5jJPpxkSX2ERTvpXeJX5bfTXhjE",
  "key14": "Jat8wCRwU7TyJZpGKYEPAyzmdHWZY6oBas5xz1DNNNsbUMryw2xPB98oJG41mS9zCR9SWD9JkQGeiGnrfeBw2jH",
  "key15": "3gNHdQ5Gu1i6anTrk97ST6yCC8twv1w1NkLCdpinkqVQA8PJ1RiXYk6rPKULdGn4scFkLPdbE9Vppg8KLFrj3TZP",
  "key16": "4s9WwMMdU5n4aFDoqps6vu9EeEGMcxzfi6nb1CgXi9Pmu3LWtysJBQ5RUmB125Xu2tVvzgtoT6GKCikgCZ5MPPFp",
  "key17": "29nUfGBf8XSeMy7xbgA8LS8WeVmdyFGidgUh7i9DbCX7xiLbrNDa2vnC5d1hFbajFx8wbrKNX9gCCXjinVzjU2eU",
  "key18": "2PUCLQtivWF7Xkegeis5Ace3muj8Ebm2HacjH85dpfR3DC2FuNPRCSseqx1tzQvLr6jPnDCURVx2P1iUV17TVVzu",
  "key19": "3yrhVGrKVNyvC5rN8S1YctNx663LJa6Uwohhm67pfrCb5W9cyMuB7KxV3bJr1RcWrKzEomFXpxMNcPcvnPxbP9LF",
  "key20": "xnL3GzxuDg8QZg2twwUkthbyGG6YFh7PNkK2dtTQjKKWcjhRB7yydVM4U5yg8wircT883BG5T448jJmjmQAdVCF",
  "key21": "3mZxjRETRZso2URcJBTeemU7ew1ovdUsZ4sFpyTRemHxMuYyRkmoL6vFBDxmzRxAq4NgbYpLfHcKE5JveuYbrWET",
  "key22": "3iMDBS6UzzbqAc8GhwvYMufEMd3Wuq69U8Hbak4bP2CLynywgmVMT2dntLiUEqxEeuGZaxdrFe3fjGNDovJdUiab",
  "key23": "2M5CMLg9Q4zVWwZGAqtgvy6qUcDuDzNkz6bjXiHVHJWJTZA881LDiLmzGeDvcNs4xDQ1mQHMFyd99z5sfnpSt1Ht",
  "key24": "2VXtfDxkafVyoxx6AVTLFepj14yj3siNhFmPciQGwsNZdM7THzzzJ2pNe6prayfWy4xono44yqjDJ6cWf9fBgq9Y",
  "key25": "2GcoEWx5Z83PiVJkhqghJUaioCsa72thChJhRRC7F2fnCDVt6mxGJs6LvVMvxygzWGSbVGpZPEADXyMigAeDKpZ8"
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
