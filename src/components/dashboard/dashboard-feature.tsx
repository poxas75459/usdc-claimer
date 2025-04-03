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
    "2n7xeqRbyEguNc2cDbDrCTUVN16Da1EfuW7WvfqNcdtknKVQjQxcu42HtHy9g7MXs9ima66XT7pV8LeAs7uUfKP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Fv63r4uw5U1PZ24RcBqXyrKmCBUrXaATRksbaLWc4NrAqr9m7raZhyjFxRS4DCV7GeAYirXXiZ5ryNKAEhYbC2",
  "key1": "4yqdiKYkBsHweuwVtP4cyoqMr4YgwRh7zGey85PsFwRxPuzwTo626AopyfS44H1GazHN1SJjzrssAFK4TuyafYaV",
  "key2": "4dKY5F58AFwMAhGFZmbE4RTGLBGEFsQijqaHecjZDBWi5swqNMyvRPXXFErYrokKwfSHs17ds9u3AJ983eMxdcQS",
  "key3": "2xcUotg1Cm5v1xRCuLnki3CDQuVFvZzKrYH93FeYQ4owQK1cafgXx8VaujVGq41y4h3r3Ws26iVgRFuM632h26gq",
  "key4": "4bk6UJWAab2PES8fBkbQ2958tHquci4MqSAB18LthbY88dY9n22BNDimWbQMip3tmqtGJkwTuGq5mZESnmQkGqkL",
  "key5": "4DcVnJkvRpzvQjxaWK9w4JaB9No7MMa9ckSaFRineyiabbHUo8gqY3dXDC8SMDhS9XXd4nguKEPxvUjkBHGjTjyK",
  "key6": "3mkz7w2SH3AJzyfQNrUdwGqpRLTTPXevtieEHxq1NEpQquEPnd4ct7mVSmiACEutNLzkHXBZr1saJnDwCfScT7my",
  "key7": "4EDtsKR3hhupggP9dvbCSpRRzxB1ZPtmH3DjRij3QAvRe6kyxvEbwGgGDfga1WEpzAGxu1JodabU8gSuM3URBV8q",
  "key8": "59R9PH1AwoeYbAnQTowXLRd2PPKSug1Hp9yiLNg27XMHBQWAijt68w3JW8VbLD4R3ZwXZCEAbDEv937vMs7eP39q",
  "key9": "gxUVkpGatCihxPVd1UMPn8cNUbo3MXDcRd6EsayyXmYjQDnTm4KpHAFEjpJX4W1sZcwRUCJRQjaeMCh5QaxDo8J",
  "key10": "4mmpnXxc6TEbN5nEDsTp2ESZHDQbbMZNwZCci3qEsLAd6Rew5sYinBJ9aNiXZTEJsijqb1eNmDEKvShdfQqUofsj",
  "key11": "58ojN2b1AgQypsJY7vqhWcKv1oNVaCiENMqy8syEuSZUSTDVnyaXUrqtKoVWax7152wzm5qjChnqrgFrd7KrQBqK",
  "key12": "5jbymv8kcE4n4vXHNZGhUqQYR43bnnup2gwjCyNB7U7XWD2mDymkQm732gzE5esZTkVkGFHwMuNue1DGmRTGWb4N",
  "key13": "5QMZz9ogLE2oKRnnv2vay32avFHYUqsrLF6kLaagavBQEhFPBeQz4TwwMBY3uHWgPAjKtFo4SiEoWEGrUYjEHHHa",
  "key14": "2Dgi6CX58uqPMbDCbHHMZdm6UGyCGnMjyt581kd34dwfwwdvqG6hFAySBsiSLLr7TmTNt4Y6HZo82iVeEbsJ56uD",
  "key15": "2GD5yvw2oa4y1gHLmidRJ48ji6yebsf9DdLkXXEEge8sKpaQSLNiU81LxscuUMWwvH8YZR7TdXVh71rjwexdDXov",
  "key16": "3mtJo6nVkbkwAjrvZ1THSp5DeMiWmvsxK7CT5AsyXAfrToJ8KACtS6CyqCDUsFjGPD5UxyHUYuJrjnKutrpJ1iii",
  "key17": "5hcSKRtwg7rJqrFBiW5ZPgDgWvhrtzYKkJWbqEh2SpGWnEnQRNYbCUbgDp1v9BfspRpnsy6tra8ZcfnxHawoqS8T",
  "key18": "35KaMJqzdGoUsFLCFa1h73oNWRwcdC5YNh2Ltn8ahDbapQGrPLGUWCMXGur6ndu8F3gCjwrZ5xRF6o5qtZiXUZGM",
  "key19": "3pEtwbAaK8ja272gn8nk3TX9boWvZXHFm6XJdFvfDYL84rKzCu7cfARtmCyMGeVCkyDDtXwF4xg7km9JxzfpzxGj",
  "key20": "3jiT4DfU7xqtUdJrFCBnAejhEwa2NL5kFgGF5gZJg2f6c27oPeKJwv2zQHuBCARoJdLEnZdoHBhrv8k7JwmSACAi",
  "key21": "5AMdXZoAf3escLaGC13CdhyJKHo2mCq3qjt1f3Wx6gqhsLV4stpbRBGx2ypQuTJTFV3V53w1q7LgpZsGp9VLfJ1N",
  "key22": "5KUkS5yT5GTdEguoecUPkqMbG1H5r47WfP81WoeXeEasDq6HDHv9a1ziEoVT3HVih11wsJtpR3HE3nywBpft8Xuh",
  "key23": "Pixs8QAUG6y8d2tMDBhmBx1WqLHJSmvEjNezaA8zKZmM2W4L8k2FEJpXQdSXnucQGVeGwyHQSAQjbjBeR48rPwk",
  "key24": "49vLG9fFTz5tVcYobsGMKAjfYUiz8CzW1TYA8m4qUUM3Cf8PfuEMXJJyajzsqDKvhVcLiUyNvYjQAUkukfYdKb5e",
  "key25": "MN9PK5xBHNvcxc3gUzrAGesqLNyBYrHsM3FXvmSCje4Wt5QdioAPLxZunehVdaUa2py2WNFHUekRKF69ZRTUHbv",
  "key26": "2U3hm9eRtjeEn81mBTBzX2bgRpyNZkxpFnbokzf4LDSU6WGYzxX97Hfh49GdPQfiGuoFXiRi1EBQBF1gsiSpwcXX",
  "key27": "57atz951Ly94DmH3rbfE5LAVWhmie79bSyEkVbenYwcg9jEeT25SjTmvQCG3EqjsyYM6B9XA5t39cd6QfKR3yTSF",
  "key28": "2C6gHWMPrRLprq8xrP1bSNxXeH5BaoFYsgTw6rvFkCPGPUTovjpXf9iY3ScQJ3FteXRkQ1xGtGUEWV3z5gcgNLdo",
  "key29": "48Uj4QNP7J4Y1P1EmE4wDrkFf167nNGvpJuQwe69tYoHXHYZqobdgwG9qbUGYsXw5N9VXwQQh57X2Qgvconr3paV",
  "key30": "3ieQhebbuGZtfZLfmmoWiT8bsqWj36HhA74bZwvFWKfSsMSJ2abexWogVgaLZsDhnUvRbTr1r7V1kKo6FweEnk8G",
  "key31": "5jhD7aPLuSnUcD7sGa73UqREc5hbiyfcD5eKdx1b7i2xk7dqLzihaVupT2GRBt5V3ibhhzPNB8ct5eZBYqCVYnpm",
  "key32": "BxUUuaxtpY5ivnZSeBvTLEYZnDG3z4xwgsjaN9wWC9pYXLHmTRVct92GB4wetMxudqQobrpsWSDWYbQ1Tjh1XBF"
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
