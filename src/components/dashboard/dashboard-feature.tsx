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
    "481V2rmAReD2hWSmTxptSAYrWFJVB3ePXu9J3tG6WTgzQbEdngw1oUJFs8NTV1WbM5JrfveZPsa2iha4331LRhJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TvbpaRmEWRRrTXXVtVw47nVEed3H52tThduLNuM38NLgiA4oR61N1GvAH2skYwWuAqCDRjo1Qp8ZQ6XCe3A9dku",
  "key1": "Cuix9NoMB71ZZaZTcu1Vr4TmRXous4AZQTm6mFNmkaxZXmaNhH4afYCwCJJwnNPhAb5G8ADYKsC8de8wond2tZz",
  "key2": "9ZjKDcC4QxAztVAd1YEd8E2gDJv5HkSyCbT5CFaqQQdiamQxaa8mtTubd7Dwpv3jHCarAMkGB4b3e2pLq25FmfW",
  "key3": "54GzKuYmAoYyg5SZw4ww6J7qcufi3HzAhsSbUTAmGyhjo1TMJMpQTaAyx8TKnPUcF6HnJEVSZvimTHDRPwYnG1NF",
  "key4": "2CDjCCs9B2skQLAwhJ9xMepkpbpgc2G9A4whux8uN4cyFK63txXE3F87MYGEy1xbvgZ1XuM8HXRrDr8Cf3ycjkb7",
  "key5": "JQb6jv3vmhJeaH8g2SCmJAzvqKfG45UMNAkbTPwuJ5nTBSiR6BqdoWXr7w6BtgkndTSanUZJRc6uwVv5mVjgbzy",
  "key6": "5RmMTjU3cRMohq5ywhTS3DaF4GEmUQSNDDPy5eyr2r2LM2KXMvGs3zaDNgF8The1PvVoF7Lnk827TawMaciCqBvG",
  "key7": "TR6YYrpiUaR6CAKxjxH5weWTGVbkcFdMpZ3RtGgvLarryqdfQp8tm4gBcuNZTmirEWXJUJkkwEVTaQpqvn95YSq",
  "key8": "2RawYRfqzvQHFGW43pJkKj3EqMdH9qkoAxwukoxBxcauc751MZY5FapDdnNfzAeVARXFsaHLGysTwGJabjAzav9W",
  "key9": "3xGfCGMEZZ6oropozeXYTxBttZXv7jsv2QjBYyXrDbw2H8q2T8amPrfSBFgEJ5R6aLEUwLBTduZyw3njmgw9HR5Q",
  "key10": "2fHpRVVyctiamdsaN9xET9wQM7ZWiRC7zRsYhMfgcYU6AurAWeL6EN8TLS7xjxhLg88cxXvwBLBqka47KB9XPbpj",
  "key11": "4a5zYKLihaPUVwQodUp28e3jS5Dp73vkxv6LKdWJTEh3sfzhAQP65pA2vLnj3DrMdMCimfNcekqo8hq2HTMZGHZg",
  "key12": "2CRR5gdGrpKcsmcuCt9GZR5md5VXJB3oFL7TrsbdJUYB8HptaBf3mmNecbMDDwAjgpDsL3Pq3tJdsHsobcrmfkcn",
  "key13": "4sF8an5N4iPnqgKjaUWviiEGS9MVDPMNbZeu1C8snex1YjhP71URPtGzWV2ELnYTavJNNsfvW23U28H8uwouwRhJ",
  "key14": "4CFqiK87y6YXs7CAhwJqjSbq8NRhAFnzXaPth7kz4x3GqotZQvmctp7yUE9SjTkVaZkHpgJNBbMBCwZbTwv3etZV",
  "key15": "4zuJvtwtfgH7fQcxHavR13qotzj7CbH4eRGcdEUag5jMbCBjfU6xxhw7oget1bcdY4zafzbJXK31D9i4TkBvhbzi",
  "key16": "4SD58BdyTsLD9tEajEGRm3JjWqzd7TFDiLWbK19YxgQCxM8wUsDkchERPtXfJEhEJCJVhRo3Fy6c142rQgwy6Zmv",
  "key17": "4t2u5icYewavMdZq9xt6UN9jUJoAo8NLLj6cWJGud9rwC3yqeLa3RA9JK27FZx2efBZymK5o9HV33ZEE5Uubs5Pc",
  "key18": "2uMkzDtdnHnp4wVAuELtS8UPThJW5X67rNg7XZcatKg91Bvf7Q2tk4V55kkXcsrtANKG3QEZBH9r5jCssoiQBDVT",
  "key19": "5HvGxs3YKfV3tV53Y8n8fnQsrzRHi3Pxw1JziPTbajVQYXJJcxhrhxmiq9YGCemEVmpzuTBrHETebmyy63FcveB9",
  "key20": "zjWP9eu8zmqhrng6QprhRNuoWTixpn59Rm2VG9aUEZ2HbRSvbYNXADyvRsQSghTqZ1FevFgSgAs6JJAg5JaqAUV",
  "key21": "44nyRNhbBhU5reEhZsj78KMe2J4xWa2oSvdSGDqtCPctT44cqkeBUf8ryBtjBoGvUqsXmVp28hdmnRmuZb67Daka",
  "key22": "5v93pW3opb6qtRKAzvMJusZEEMUUxjoFw2F13hGyo6G9yp7saBPykJpTQsKkbiWVwK2zqCFW3PqbdzqsmBxFAahW",
  "key23": "2EJotvvWXAXAZR2NfWHVsTdx1qfBMpSyz3vHE3YsKrrToEtfmBYj7yhzmQWT6XNnXXo32V3sVnGbDr5j7w67LfwT",
  "key24": "2mQZvrB6NsVSSsfovTZmjKpQznN8K2FekYjR2TEuMogVvQy9YtmtQqNqznVh3Ns27wjipqkCDRuwxzL5sWYHM9of",
  "key25": "4wVfPG8yrtbnGiY9eGr1x8FVV2QKCRyith7u5FD3r834B7JBWZs9n2eiy4BksYoBML561yYCxMdG7STLy1uqv77g",
  "key26": "PXm68ka7cqV5rq3NexqKiqzJVykmmcau6Umy4Ve8VcJzD2XmihgycyX5xmfeAtwaE3yBeqAta5Wr2GmaJNUjpzN",
  "key27": "2anzoQBTSFGHSghLPLhdhJ3RQGzwhsv6Dp61haQMZxCRjhgxX2rwSgtEV3eTRWTcQ53SeGg6NbffbfjbLTrtuN5q",
  "key28": "uK4fxT5jBvL5gbm5GCm9nmU2HsgdtPTdAFz12tDd2z2DXX3RqYjXPVoHqmfpNTdzr8MUAVQ96JAmuC7x2J4opEF"
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
