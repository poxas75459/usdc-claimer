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
    "5ayZdQJvPwh81JBwag4w41D1Ney3oBnunzQqK4YZuijGREZekUeJRieRM2oqhKnhGVpv63FZufyT1DQ3GsKPQTCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65B6AE6xBmrwc2DdbXznQZ9jRZkH68rekyYBtcWrJKuiQN88NVfcfZkBX3XB9DK6DdLf2RuKHA4xz7WqsDpyT5CH",
  "key1": "4hTSJmSbDLqP6ptojJt2FAcNojtiM4tWqbmD514STP8Q4zDREdeUCmi6hfh5inLmnBhWKRZt23YbuXbiTt1vdg24",
  "key2": "49XQQs9uG7bypudXZR2fEGzRDybESEE4g1Xd9ewjrVPuevcKkMKPopag2dNobaEDzjkVxMbAACxR3SDz4ZQF9CMU",
  "key3": "3mVtGG7gSMrBNUL9emDGw44CgXoyhzrrq41H6LQd61FQdTm17K3CQL9LhiEFgqc4EBXDnXHXA5zNs3mL5QFuTbMC",
  "key4": "3YFsseXaujKrvXNJaWCW19bxgN8jAghAwJdyNKrT8xyaxGH1HUf4Au4kJpXbqxa7PTvz2yA2A9RxLgVvNEd3iAn2",
  "key5": "5Yg97BEHsvjQE3Ligu5j2f7KK3vfxCgxWRfwSsrXZHxZisuk3UbJshA3wkCQqRfqZihTsJekUQu3A5K8c34bnTML",
  "key6": "5efNDAHojPmuiVN72a3C7L76gZigeLXztZcdN356qrzy7VnekEZRd9oDa4Pquw3Ltgp67wSiS8XHu2KnrZtT7WDx",
  "key7": "DTRVoB1trBpUa3a45V1aS62kgG8PpCiKEUoCpwQntKuuhice9xmTkiA5LqF9JokxM7VXUsN3p9aYKDXNb82ECV3",
  "key8": "39FQA3hpeWPJDtnKDVf44T2hSELHDocReqcDkhjpLuxRPZwmJevnnwNPxV6BxfgvrDz8d8jA9pT25hM7o41MciN8",
  "key9": "5qzNFKKNgeoaPni6dynXXQn6bC2aTBiUP3UXLNcfTJ8xRKPaVE468Q6s6JpNKnfjNsKFcschvKnDPBYkQjpapz7S",
  "key10": "38zc32WT77u7UtJEZUXCRm7M6mYTtJS4bYtNesiS5ZM3LvrzdVe72x2NnjuYFogLnNkV9Y1dzKvfhAt9XHpjFwrR",
  "key11": "R8d3mscAytdgwwtG2sU1CgKwuZKkHJECwjqCFtfbZDTmRtVjWNEnxySQtfoQGfHntXhsNJkHSTfnrNGGzH3RJ7L",
  "key12": "rXrF1Vn1suViesirw6QJaoGQGhbUMCdMjAGyfjAgWr1xhdkGh97pRh4DRdYb1RE8wWvGcGFepwNvEYp3Nf2Cxv4",
  "key13": "3pECKijcYaa1MWyUhndNGsamDypyEesrAqP1WgRJJSgQxmo37HtJLEWuCn5bQjgyHEDYdVtUoQJtjTNux1WNyJ9y",
  "key14": "3TRSBKn1c7zrvUWyRWfkKU5FyynQhBtRivQ6hzzQZMU9AnTbXyeSvwzaLKR5r4CmGjLBmEotyEyz34K4kTv6DKwE",
  "key15": "3FjkCNbRSaWMn9Faq16Joe2mKXzBJV9pUJC7nm46YjVNUUDDuviBA3vo97PjPMu3uQo2iygPVcCVwzm4ARnhBqjt",
  "key16": "FTz86JyYP5xFcxtcEZT3pSrvE6Vq9Fc7zcwBYK4HfXwJaKbuY417nv7svT8bmaXBTfNTbrv1QnwoRmb6WqZhABC",
  "key17": "2DV6uTiuJrbkPbUxcAaTTzULPXSno1sZPu7uAv7KDrKzD1AtUKkjj96SLz2CYwsqJdgpj7DanWbq9HzwAPaH9nKj",
  "key18": "5uAEF2uhKVVqPWmJF7iq2PAm2trLUqkcN1F4WmSUCHQTzyPFFHzmgWjEGMa9bYRSV115eqRE3yys5wpVA38vA37q",
  "key19": "5s89173b4FTLSX6uhRDtm8F777isUmh7n86pXTdPT4HzJoRGuFRXDRR2gTamMUMVTN8SwPZp8wEopcX8R8svp3Fc",
  "key20": "43HBigsS2Dr3vKJiKZb47mjig9THmWs2PAeXSQabou1jNZfevBazhkbgZ5Nv1acjCSBvGftxk5A5vyq7E1VCo6J4",
  "key21": "47WJ5uVNX4KdGfNBbymWBW9bfeLYbqYxyLsinhgLsqCVJ1ojr2JFiR4LQmNQrZwnmgWqXz9rGyMaZhim1yTYgo9b",
  "key22": "2Dbp8Rgf6BXbid27B5jhnRVoW4RPyboJuba9741t2CmwJmCWdKPS7xrwaf5g5cCCJU1mKejo2pD28DX4k8E6mkB9",
  "key23": "3Kjr9oJapeBxtcWUEj12F87QniZhgK9HQo3bgF5ABdATSTdDazxgRGsenNiFu9MpEcSKGqpA2BcTezpP64Juk71Y",
  "key24": "4RvhJvfhDVfoYpQZtqbrk445AWzpqjFdHWSVxq5qwnLJDcSCXb5J1TMPeyBU7c8V7bDKFArW26XiMx8AjR8zQm6K",
  "key25": "5Y8Nhrf5W2omG3FJAwWYqqvqu34EVG3iNURF5rswZwWtnYT8uRBrjz1LTJkRsPmjxJUCMxnb3G6eysKdyUS6j2D5",
  "key26": "CC42eEP9YnouGBKViHN2zUgwPwB69yaBD4o1w8kZ4tB4MhAWo5YCHbQ7z5Nob96viJoP5kvWSECkVc6kRg9SDmT",
  "key27": "5CKeEVaxqGaSvEMQGS916GVTNddapRUNvig1hVWZFoYargHTBRG68uYJdp4ePBcSzHvr3ADS1CKU7N5Jk9EgbNdn",
  "key28": "62u8SHqjVRVa7ZBr7jBJ3DBZH5Vr4aWQD8jqkhv4RW6S7dsAG7wy17fqKwxuwacB3Q1RAwwNf8BtAEWGRHseT3Wg"
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
