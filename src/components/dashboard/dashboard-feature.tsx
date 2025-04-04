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
    "64sqCHzcVeCVqeKm3Frn79a1FsmRRTnQ6zPYUf8Vz1WejbVvXNcRpMHZPJmACpomcWFwJzQ6orJ9YKTpvBaFcmVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48cs7PFN46kp79EkVToMcwcUZiKq3sn2RsAyBfXo4bczr6cGr6nxuj6bhAgbYmHM1ZtP2bfioFnHCCHyiBSjbguX",
  "key1": "4f2YFW6bWd5TMTUELpdvqzf7Ro5tc9qoTWAXL7xpZYZUjAXsGU8wRvvAXqaURj15T7T47eXfcmTjMsqDMETen14r",
  "key2": "UwYxZpo6njVSAjaDgCpwwBRbYMN6LiWYuFqthYwyemST92QyVzt6c7tWmCiny4KY1BFGWxcDZ4bahD2JPirbi5n",
  "key3": "4VJuDe3zZvkoWzKh1Hiim1dUQ13iFjPm4LPQdGUye9Fwreqjsh2zPXjLmTbSYKDLKJUzZfVLDsALVoUtQEThL7p5",
  "key4": "5SDzFsPyBKo9YoLPy1pZJKyUR2CqyACMAztjfGhZ5PYyD9CGi5sGXrj1YAfrJmdjWuSMYqn6iJL6ccxfyE6SEBCb",
  "key5": "44wvtnaWoukimh59piK4ntLMDPyELPsaBMikUshEjAodddmsPoEYdmerCujLUA38wpC12odYDfmAsAM4cnV2XVre",
  "key6": "3dRC8xxiXorEhZqwCkEzpujmcBtZHHgD456SuZdF2BBXtzVcGnmGKRpdZFx5f3vpG298Bw59mkGYShoNGQ9uXMFC",
  "key7": "e2kvbD5Lv2zbkzV3sSrzjMN6y4WxPoQYD94RjdXB93559xmqV2MeounroEzYjnLoEfHpZoKLR9nHCSfMpq6caFC",
  "key8": "5yBptp8Rqnn9t4GvEVacsXbweqZUJ1KU6jXxfZwsA8ko7nfcPgawm5EUpLhPY9qsyED7oEKhBNgPgruCjnwJFFrU",
  "key9": "5BTXUywSbJKcuh82G6FGgyqp63rBA82YpNeEp2WX8cscwoZuB8FdnjdJMYubNSb78JBxksaBnCnPgjfywwq5BkqC",
  "key10": "3jPA5XbXru8PyX5LtiuEbnD1nkRYh3YFvK53q99UzPk6aGeuCF7gioPHg2cszMD4tuCAnBn4EsMXBEuPTamAbxiZ",
  "key11": "54stmNjEbgyHN8aQvwTWuRipBDzWU315UsGhD5yQdCVz7DL2V2AWfkCnYETzMWucTaNedEYDwzAgtbL3DUn7iqQn",
  "key12": "65hZMxbPh8LEtnUw4TzG7fLuY76qyd4rejYbkXsEFJMvRgHZLzUWSff1yXascg6exBcoBJz6J8wwSqDsKJab3XZN",
  "key13": "3rUwftRAmCWbSghHcoUTppX3QCw3RkaCzdkFfH1tkHttWGExuQEvj965VwXeKBsrGxdzSiMD34DxB4c76e28NxiY",
  "key14": "3S4C8r1kJNJ7SLtwMrCDDGVSuygeRdaYGrQ9qX8U5e119kYQvxRjrXgm3vnuniW7ym5pSns6tiyuesA2cTrrjtLn",
  "key15": "aGmynhbT5B8TULj73G3dYzxuDD4ebR3DYuT1hKgNcxroHv85oTPbk8PJ56rCbSNBxj5cDKkDm1W3Hq1BfcgCYvJ",
  "key16": "22oDo7WzHEUTbHf3AjpwFcQtwZSSTRhWaSe6174QFpCYDqtad7CL4KFbQNoJPHZq7CgBY2da37Biji3WsAcU4MLZ",
  "key17": "AkiRRU3y89bh2ejinMLmVRJKMAL4MsyhLbUEzC9t59aymrKPQJCVpiY5BhUpS9aLosSBpxHSK7LzmiPHqp6xKDt",
  "key18": "2UKiWTG5bf4knNUcYdgKjNPSx7zaN44WxZVGTYsVbdsJaZjwf4KzkjuuBMo33tJCHonzi6WA54Njv5P1w7sz7KUn",
  "key19": "3x1kwHiPZkLiFAdQmooc8VsSceWgpRHccYJbnUbExXpuL1os81nEMiXpxQDhnSsm6SH6xAk3n7XLZJS3TU7jpn2c",
  "key20": "i87752ruw4KY2hJcQGaX7zdshhzpnstLWtKUgWcAj2EZm7B9c6y4iAiJVNU8WE1peKMDuogJR4Shf243GfojTYf",
  "key21": "YSu1Y2CBthKmNncLTPiSXACK4VJD9EX6KdX37DU4TdGVMX8m8jmtjh84v5Rk16ZwkP3ohJT2FNfejuHJqsFdafy",
  "key22": "5ywqc9AnrFxgfFFPnVnYJaHyeRguMS4SQKqzVCbMVuhao6SAA3wkZhbUsW2KZPkJwrNum8bYxQxpRnDdGRKWRzkj",
  "key23": "4CWwVX5ERH9AZREqEeELKZNioFGKSc75LSbjcv1hxzBn6aWbuWkd6eFZs8wR7HfYTGezwA44cH9dR8ys86XzE1pS",
  "key24": "4TU2k3S9jW63i2eeDemZcoWZQrqEJwvQHNVWeVhZG3y1XMB4EE85JvNmiFxcuyb8Z9y5vdNEGaYsGdLXzy4nKTsQ",
  "key25": "5kwWWRfuXmJeGd9LeZR7FDCB1R9WwMDtUzjLu8niw8efA99YinqqfT6FeBuMKoYxyLNsUDW8u6s2LXqyBZMrdBxa",
  "key26": "2fwVQpsHSdYuceMp67dcqY2o9Cvs7RFcLejNBWpfucijCf2oEQjHwgRSVW7xTVvdGcFwyVfaPfB5KUEd8utEcd19",
  "key27": "2en6JdSU6zQPLq1pjAfiQEL98mNTEYi64bHB6Du9cBeUYeGoEAR4e9s9tFuyRVKavbun8zt3oY554G7rEBU9wFRC",
  "key28": "618Y1JQdEi6GNgDWudescqADbEtUFcFv87t18qwCbkx2R1VnmRrg95fwUkSUw97acD93dvztf7pn9svTf3bhh2Cy"
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
