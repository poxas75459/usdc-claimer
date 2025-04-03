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
    "4ga9i9fr8JxpWoKkoA2xkH2JSqDERfX2grYvPAqi71LkLH29fN6NsGX8FNwFrrrmXd1pzzgroBN2mExTWWDNjx96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KBVSbWaeKE8FZ67DmeSi9qYGs2ox5HaphbfpJXXhmyJ1zUYX7f2af3PPqhPgWZD3JT8sQXCvPrhGbZKDgN17htd",
  "key1": "27rZuwEzyEp2KDtxMeYMCXpBnL3qTeZcCizp4No3UPQHP4Z4kyV261koJgvUYPyY1bu8oFY5mtF2WRDJBVMmdA8U",
  "key2": "ssGUusXJezE3byfkQwnF7tMe2YgdeJyiBL8zTrSyYeqjKNt9B9ho5TaEAzX9vWZCubTjs4cQMBv5A7a91yftCvJ",
  "key3": "531QFbjnNdwiBaTfkKP6FAp2zqt2v6pNLpWPhBDYSXpvhfK1vsYVk1sBUhYAspvXaVxxvXD7uKuh5f7NY5B3xd9R",
  "key4": "5GKfDzAYkydiCxgCSAs5Xu7cAPeszH55uw8NLSNdwtK1u4H6anyCoeCLCFgkYC6zfSDTC7GbMe61APGs1deuPoFc",
  "key5": "4xBvpvZbhCDyDnV5WsKfoVHssQoMqeGvVewreL3udKRotEbJWwTSw9ps7mbJjpdoCxXWhnPiLrrQerzAfv6wjDtt",
  "key6": "3j38c4VvQiec7TFT3HxSeFkPSmXYxuKay7MrrzhGA5tzUuf2pBMCcAsK8pDmPx36eRspYihLGze918Ys5bZL3Ynr",
  "key7": "39iY9p6RhQyFdGjQ5KfeioPv6jZpeGN4Pk59VHLTGT3XGxNAsDphbfoHgTa6kLphCbUVKUiLcQJgtcPmYGszzzxj",
  "key8": "5UjYFtMdNixbszWjYKhwvKiX5crPx1YwLzkwh7aaEQcQEp58yMLW4u7vycKhBk1vEVED3snhWvzJgftT34teB2Yw",
  "key9": "4zNDHUoyfzmE7VVNQmtU9Ez6AqNVFEN5aTer7zuFTGLMEmGEScmHuzok21djyUjHkHpb6AjKHfwZmVRdPheSS97Z",
  "key10": "4CZRSaVUrUb7wZWzYBXpNkqeWrSYTX2yQjB2ZVBv5JojiZKgiPLkFZN9DnjtX5u4T9qZxyoXzC1aAxF9SKny52wY",
  "key11": "4a4B6qpQHNRhSXzeJggqu7mra9ZUPHa4NkJ2Rk7gBsRN6VAbZakDrGhyYqcbNUhwg55vkSTXd22AR6kv42316TyJ",
  "key12": "26XFAnfPvVcbSPZKAb1Pc3WTwCWbJo8AHruoQyPugmHiADL7ntKgmJyjftkvnGwkPXELMNyA2QfiCNzGdEgNUSB8",
  "key13": "4fvmTxyjJnKTXWdTSwPadmEYJeBhVZXUG9Pb1Wjfheomoupxj7fGozprTThHycsuLMva3guAK4ZiwAzSty6fqs8V",
  "key14": "37n8NQmZrKbEXGpbQFJK4KmJAmb8xHj9xSo5J4GCcRQn3z3suVYL4pb6qjLf6r9FYHFP683FpJjsvoqv2cLh4or4",
  "key15": "jmRLpKy2UGfm1e1y3PXErLjzyweWH2C6VDcjngVyKvc9cUXKb8XxYVPvL97fn6Nobf5obpy1AmWWQ9rhZL9Vyhx",
  "key16": "2YGTySQKxdh3AqKQFVfvphg8aNhefwA1zEWtdyZvzARrxZNVuVJ6MRLrQo9gTnRZmr9WwxcYny4hx2i1YALYpGZr",
  "key17": "4AHA2XZSFpo66MS1Cy624HFxn3vB8RveBpa7UhJbxTyP2CZwnLa2TewowDopRpcwy2DaqJTbqWXrhPi7NzqvnyZq",
  "key18": "5E7yDcGouE1PZiqcB4nCHvXWaNrS23R1WACD71977dp3nEn9KR5pfC8g1HdeAnYoJfvkWzuAXZ4D7bzv78dWVe5b",
  "key19": "2g3JT3ExBRKNzVfuQLtKMRUUSSuq4cxJ5WxubvWUdCM3ounNFUcur9ztM3ETjhAjsUANb4crsi6ynLMbdeCLhomY",
  "key20": "5cfqDUzzekRwpjg7Z3czHyXXsR6Md43B5ZjMR2TMJbnmgQPrtXCGNCoy4jkVHYNKj8t8yd3wNkjuemMsbnLxgHJj",
  "key21": "ekFhjQfmWPt3D7dtjC4bonU1iFXJEcQAUWqAG9z8tsvPZTDMf5VFGmw3Dwtymnyx4PPEJWQYZj4wjdKjY1WJpN5",
  "key22": "35Q2UV65Nso5SzQ4wKHYzmA8qKT6kTSTxtKvj5TEyKvpjuzcRqridhsMo9EfwAHBwSKRaSJ52WpiMaosPWf2CfsS",
  "key23": "2t9o5adozzq2dP7UpYNfbJmEkqex1rn4TuDmQnSw2h1YiuvwYE9YvqemjZmDd7oDzJwU4dYy1pSUARoLCUNxythv",
  "key24": "5cwBzN9zxuYUbumkegFNSCTdCcaHihC1rg9b3GCmBjdwmtcL3k6kTknPefKscJUGF35EkfCJVfLTZ5bUMGr25nV5"
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
