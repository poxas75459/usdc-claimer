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
    "yMRdSqMwLW76W7frUWwWhc89S8EC2b6B9V8odfymd99VzGvGWkmPXAtivABgScNpLW2e57qsK1TSjUB7mRiAMge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xarv1yvFU5Mp4URsKc93wkdF88LmFCTRVSGiepWmqTQVxq5Jt1KtkQbiHKaS2EF72YsrjqJPwsyd7W65JFQJrr",
  "key1": "2rX5urWkwqkNZTALKCRBPxuntD8jHCLeage2KyQB3Dcj5xyY61EZwTReu6WACADWLxhwJGTRrvyhtn2sPXp1AbdW",
  "key2": "kf8fpMnWcr7ECmd7Wi1YhoTLKUE4995RA1vC7kBMXJzGE8m5pFKYVgVJE3JVWjq5qXM8Qdnyo5qLK2CJS2m2NA1",
  "key3": "4TAQHzgGN336bpyEicSVwWyy8BfF7EhtRy874TieGeQZnvmTJQXCv5Zy51iVudy7PTyQtcVmoBdaHNiSTBwuJFsw",
  "key4": "Um1pzZy1Dim5ThFtAvjWBHgxuahiNoqGStnVeQm6BehgAtQtEAHXWVg6nf4VXxnDo1RomAzS17MgM6jimpktBcG",
  "key5": "2U6YgMZkpAoA7BoVaSjse4TnkpoKptBzq6LQFd3LsnFEc51CrPJCfjr4GntyvEf8suVXeq2JgQUhBDmdGJ8Ki9DW",
  "key6": "MzxUBhfM7rphKuyLextCZggkmgDhoqMNNLmV2ny6466RYp2beggkhVjLGgRijEF8VVPbGXswXei17J4KyYmaAo1",
  "key7": "38sMN4oiK8EqnPodT9Y2QEPLrsmAd3bzEuYQx4BLurXqxmgWxj3xgKX3gRYbNyNPE6QB56qfFdSwRxsx4wtzRrDa",
  "key8": "2z3h1yPYFWxX7juwi1tuoR49Fah7bGj7hW3U2dsQWDpCjoDaQhi2N1gMdeJkwnoY3sGThkw9BDkQT1dFV9wBeiRF",
  "key9": "2a19K6u27pduAXwFcywhXTo43kw54JuHxf4q7Mnk8NuRhSZh8wbiwpqtKKoryH3zk5J2C6V6ugmdQVV9CwDxoasL",
  "key10": "58NVuVA2j8Tjn8bj99mT5PhKn6U6DkR2ddGk2cJk2CTeG3BZcvkBCUUZkRWtgwQG1pAwFwUzzvBSiDHa5Sh7oFXg",
  "key11": "baQHn79mMe3ZPYi3zfxrvXdeyFcsXSzF3zwJD8j5jaxpPAqgv7gzvfD1hp6Jw4pCGwLccdd94tDY97gc6UBGKsi",
  "key12": "5RHuQjrrHjW9A5jTrytcN7xHn2n5MntsFTSvoeqTeKobx4F6S2jh9CaJnHtaUNp7hcTa5oBygWv4WEwxdgEQGaBD",
  "key13": "5Lq9UVxTyg66M2ia35bvUThWYyYW21pnf8Ta3QfMz62wsvGqoF2o2kEP22niE5VNSrf7Uh5BXzurvJfTaNiRurEB",
  "key14": "FWcjnyea1Yd4QevpQW1y3Est6w6G86HfvY53dwfTbU5RUpdXMrrUPg9Y7sb2ga2YzGUKJFMjhL9Sct4qNQT1JBb",
  "key15": "27fu47D3ETKXXkZdPW2wJ2byDVTTvFmro1yWJ6bJmuR4faiJwqP8Gb4tBXXbyyfzyTaF5T9vuxMjpzcbPUZofeqg",
  "key16": "31XNzzZP6h5wEYM33NA9jPcVP5RtrGwXZr9eWRkBRyqVpzP1acsnr3iFgXXfxZsr2RjYp9MKARRNQPphPkwNpqUL",
  "key17": "3rDfVK3FaHcjxdCe72cXk9Y1gAGo7WPjpacq9QJXsyzRdxBgmthqJNeDBKpPu2u13PyJ5nSCsjrqhekKZnuttWdC",
  "key18": "3QPMjpPEWksTCg2enYPzerFcgXS1fw28dmHQovgkywAWvn9Rb3zjQg6kxJJYsJWzJDpoVWWR6UuiLiLmL5rwyWVd",
  "key19": "5X3CxEB6gHXhs4KE2npL977pyt6a98gKAD6AM9iPZsmuiH59w9RtHajkKjiXLcsYYvXEGT4C2r6j3FJNPgS4Ux5r",
  "key20": "4frPhEKGPN8QxRcuexb1J3RnPJWge7ndiKAeDiskWMv7vUwQSCtrDsNxT6CXzeofbpuKBa4rVuV9uFzZD67MpPAU",
  "key21": "3PnPWoRViyG1X2rM7p81YD67Ggrb1oZzinKbVV5hMYZDpUBtQoqyHP6Bvjv4ukx2VDoPBKTE95uiTmqihKK499U1",
  "key22": "3S4ouRa9RuHdXc4oEXtGntRXaYGAQDmZ7EFVSUspTTYUKos4AWwB31BhnBa4jrtUjqPfDXptKc1AKkYt7t6tD971",
  "key23": "hLKVNwea4yZz3abWDznjMYpq9XEWwxzMFwawTRqaY6QHXSWv3rZcS5ahhEQCdbAJ4QhrKaQwvi9SmaUJUyG8QPn",
  "key24": "YYeUeReAzNCe6jPvNVKbHfrCgiN3zYDgB4XxTgFCAbnLvKJeaFgfVBUW9iSR53gv6knqTrT6m9UZJtVRcYLWViq",
  "key25": "52PUUpzs5NAcmiGMrZAu7XKPpNNKhEa5dPLSct2CVmybNpzjY5HbPdDQX65p3rvMYRXAjj2TnnfwrbVS7NH8Sown",
  "key26": "4sYUHaFK3SRQDyjKw7Ykgw6ZxuYJvDUeTMG9SuVtEmarKgrNTJL3mCHw7TY2LNjML1NvC6Tuk7n7VFniEpyjjGMg",
  "key27": "hHJsbeGGyY6iJGY75TXTLyHD3WwrdVbmSFbroKdUDzj6ndz7VzBs73kgSMinaVnr1YrQ3dhKbhcaMfzETJSVaDK",
  "key28": "5HMESwwLQ4erCnYaUSVqxUjvhq5mmwhTta1ZGsokxb7QXxBvxoMGWG8qjhZ9EYVN7DdGaS5Xn8NHEyiSYa9EWKpr"
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
