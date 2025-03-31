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
    "64Zmy8mTnzY1R6LbeNPwJPbugWqgQ3xC5zAdvTkmPR4vwtcUgZ4n9XV1Uwz7rDwB7VmPZSQ3vbHF5Tqh4SRr5eQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y2zktpLyqwRcsAx9ZHT9TXFsUBzf7q9DDYVY1YQMXwySY7jUi9mRBPE6BumrD5asB6bwch6nYsQACyTQCWpFNze",
  "key1": "3Ut2NZKfrF8yWo8hSnuNXRJoTZ7b8jA2Kpo9CFWDAWc7LVq4apATb3thXrPksu9TiS6tnTCf9aLnpKoYBfpgnzHg",
  "key2": "2KJ3bmh8eZMs9bbMb4vQHzamiGuR1H8SCfmV32AyxR1oknZGmWChkYhmn2v5keJi9M3iDNXvFoaFWbqk1V9tH3W1",
  "key3": "3oC2vFyGDf3LHoT1vuX1iwF4hCywpZkVYteAzXNuzWPiA4fxoKJSvxRTcuSuvenatBn53XYRpdjRBQTevEKNExUe",
  "key4": "3UF1fzp6myjKNmtcTboH4cQNjsKPDaTeDsbjYUMMMn5WJJti38BmhYLDZVPUr3msDKyE5bEbVx1sJSz2BBFmmn6N",
  "key5": "56Xa45R2hT1BWgzbfNvf5Q75DT5Q7c66KW6Ue6WBeuUEtKw5Jf4hkQiYNucVGMuFqP3HkuyzM5BH23Eef3JMHH74",
  "key6": "XkJ9ciMb2MyELoaczBiQzvk7qdnRTr5SBmHnu3fsfQXUdcqq6s9anvYCtnc6b8WXyRxYu1xeCzTTDCeiw5U6viJ",
  "key7": "3tFvBAdX1fpNnN8Ltvpx4eNpnC4dV2o5wssbafnGWNkdNTQsZNhfdTVAzicyp74rYKEruvaQpaVNoq1izCXDooXj",
  "key8": "2LH4V8djdaiZ5gBZe6MD5WvEvZS6ncTbAkzNfFHLW9eUppFjHWj3brNF2JNnAHhR1sr9ghj4KAhBxmaitB6YiSjB",
  "key9": "2nc3gDeKYKjbBcRoRJ9KQheTi12RwiKNjnRf1j32K8LWgMVkodPzu3M46iq1d3pntx2N8iVrE77SUv1qcUtZqMMf",
  "key10": "3ew5nchPzVLLgL4iqh1vWSXLnxv9jcM9UVxsetWaCDstcxxM5HYBGffHx92jDSq97cVtsPfXfH14SRYaGNzRMdxL",
  "key11": "5WoXYyDJ2A41bUkz4d6JfGirpphRVZfwxc4tvhe6cg88wfQ53vWugd9a8Fo9FAmca8vU5EBinXUeq5SBo4ZTNhvY",
  "key12": "2uyCK2SrGY9UJXZdAhUeWFvVi1yRwEMgoWsJQzzumoMM1ppm57CWwPd1ZwYf9xm39B62pGp4rFQbbqu1DjXWgEUM",
  "key13": "3mPr2FsWK9L1D6iMGdt1BFgULSevEFXDgqNNovX3aiMynZfBRt4puQR8DuZWUY2ygGdVM2dyNsLG8trPrmQ5JAZp",
  "key14": "4NKmhwen8WRAcVUnccworefKw9ztdzun82CJQr99wiHumhZYkW9BSuLsYJqzDmR3v12cZmAWfGArdBkyZJTqCkuq",
  "key15": "Afr9SQcFuav5sY6eufq6JKyTKYMkLadQW5kCE7MatJBGxtiNE2iG5bkY1ETPKjJy8xTChdj9eGq1DpDBs6eEVuS",
  "key16": "4YukHMiVdwRA8HTTuhtW1UPb3AokHcXrhZ6zDAxav4jwVkBHvCGq3Nqqe2KpPZKDjf9msW6uBhj8ynV7Tnpz91mM",
  "key17": "25AS2G7zmRGLWxZU8FfVvLtscz17vBPmYgyYDHrCewqg6nZJewwtqwHb1VPzDvgxH87FrVGpmKW9XfA6zmmdMHVE",
  "key18": "3ksLKpHgS5LPtavQkXDZX5EQBdu8UM9aghezbnH8mYAhAoeG6ZrVVMMpAXqzyUgrFVPx3wgRPPPpdcgyDVuLeFac",
  "key19": "58eEHzvfxv9m35DYEb8Yeo971zhMU7n2jKGfb89y6tSzVFyeHxSsfNXY6dvedyr1Yn3qEV7jYaoz9NPY8xZt5ED8",
  "key20": "2YLzQP9f95XQ1zFUnt9Qm41uuyGR3krQHz1XNpb9CtG6vhhRn9bTN31DnSsbZUHh1TBKRjqzweJfkTKdpWMX36g7",
  "key21": "kkXE1xLfcAy9U1ikgaQgapWcQkf9HA729fUt9Vn687r6zTxmLZMAEdbM829p3VGkWhhFEQ5JiodjjcwXh7azvE3",
  "key22": "2bZvKP4ZfnXrVaNh3knKZGSer6bAbpu6NXyecJPm596TQhJJYQmV1njNh56UsK7XgVVt51WuaFsSGQzpLbR95D3F",
  "key23": "38YQkWUt9r3wtEhn7vo8qtSmBQmKZY4nsiw45J2SB2Q5VMkvRezG6HaENgmuzEbffEVYvfUHPvRMFMmzZ2DnDymR",
  "key24": "5v19GuJLber3f9dYqEZP9fkaZt6WYbgrrt9dVBSrCQD2bBTjoeUYyNYpmRCfXQobp55q79eqSmGfAY2oaZc8fx3q",
  "key25": "4mcvhXnbnCYb44CsFpWSkync1X4LFs68CrUhbrrksbpbdMV1jVPMHZ2qnaBZMUYBLGVMbmbY5B7hGzuCkZ43wcya"
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
