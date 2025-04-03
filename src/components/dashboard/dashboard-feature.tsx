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
    "4B2xVvNY326pCNNnG9DQv5ZR6WXiA7MfkenLgxmWoLRxtxkj1BjYBbsZDBodeZkHevvvHU9jU3YRweQMhsUhJRFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkcQ9isQERhthAKPB5KKa5LCebLtq8ikSkXrHFRmrfmQGvsw4QbSCQwG2MGMw88rejoqcBmmD9JS2Y1AbC5ACri",
  "key1": "3sB6QGNeUEoDR1TTfDXarteUhSgngGuPg8dMzCEotZtDmTCeW2QrjV35zeLHShrMU3PxarujeZtMZMkZsp27nWch",
  "key2": "3nEPrwmhFLqTT23zm58gJkB7TMjsfgQW1RQoUGdeH8TJsEz1zryURRzFJY6pNEYQPV6Aq3paNWd8XB5RwwMtzD1H",
  "key3": "PMFcP1fB57f71FxcBE6b5rK4p3u7fSWpL1NNkAkKW5LVn3A7Wqko6K7jrDKmihf3f2JtNAjbACmMQqi8zxfP5Xs",
  "key4": "597KP5LDPBvB3F9jwAR9qgxZuQHNL4bLBr9U4Nw2DTaTJy9jZSxQHm6iqoGFLBboex94ZVx47RBfw86qENRUfCz9",
  "key5": "2ubic3QzFNoUpwqZzJu7XGAHaPENWoKUP7edCfTCPAfHZzvDiuhYeWszhinL5Bikrrz7vLJvsdLESSPQnNkV6wsv",
  "key6": "5Yz2zfJJBmM5UF8rd3kaX1tg8W9eVCDvsQkxEN5kZ3tHeqjBBb1ySVpeQTrfaEGcanYHrxJKuseVgpsAUMEKRB4z",
  "key7": "4B8eu4CAdYAxseVRpVJ46v9qF7EfDebizVNo3TMZ715pa1MsDHjXQGjqs9mUJX5HvCSabyUedhxf9uhLRF7pknE4",
  "key8": "5QJu5ZT8kvqAKTrpN1udyCwhHdyLB1p3h6giSP8RB2kpBFYsg69MQDjHmn3c4ycfvpquZzpnv4bD3MSapsoKnnrj",
  "key9": "yhYQ89v1AYLAxnKnYcPYMj1wT9ArjNty5LVAQKKQ9dz6T1vKkt66UJLhWXxcaiAWXN1q7bt1u97krhQ1jJEUQbN",
  "key10": "2Q88YJEhLm5k1FeDWMQi7PgZLv1rj42RtX5DHBngjDL8wppAda2HBC7YetQqKorZGEDJ2gbGCJQ8Hfd8iqwhJdBT",
  "key11": "T9nFS5HBNdttKANCuPjjPjHrtsdHs4Kefbw54uwk6ZggaB551XEjVW88EPbpH7nVNojdjQEUkQs8zBNjEWAPmv8",
  "key12": "iTEYP11nNzbtu5FQwZ4eTcv2pw5FQRsB4pHcGUvZZdCegeV6ggcZrym2jGUfwyDhqBBz5CPHjBD8RhtjsUxjQCN",
  "key13": "5gXZkdEepC95Yc4799dKkTGNkFwVTaEK9DDyYZaxMUEAew7oajdfBkvzZSroLoczhWnApTWPPVLhpSSfyNLx8hRr",
  "key14": "3dPd7GeDN8aRnzdzhcupRDfiEMtPLpUGAQgPyuWPFT8eKdfijKLz7toHPZG1B3sKnEZ1XQKMxQHtEJTE8MsjagyM",
  "key15": "25mLh4tpQ1PYpvo4yhBqowr7q6aCDYhtE9QxtiftAWRfKNFVGZ4YjKBBtxZkng7HNrvcKWab3XHgE5K9fJNQckFP",
  "key16": "YLGHL3gqixPJZJhoFHZ8ZWBq6zdbqK8oAWFd1cThhhcqjwkDZevq3i14ikBNQSLa3aXtLpFkUFjEoyngQkRTzEB",
  "key17": "5Euwgnvrj9U5XZNYLFF2T614kUU33wh9ukQMSD2ZSX87GfgjMQMmKXEvKFvCeoSkE5Mj6Lrbyhp1CPY4cYnq4HSy",
  "key18": "3f3HWCR5aKYbfVSJWLZdvjU7XQC2Po4t7Cb5YBBTn8GMU9CREtuH4VNwEHSDAUVNLCKdmbfG8z9bUctzrNDuhdv3",
  "key19": "yxLB1fySGaJeaD1WNzPsqGTAVcpdSWzWFj3XuxDeLceu55iioNP6otsBB6o6gy4FjMgksV8wFXoFt5w1zmGMCpN",
  "key20": "3wYTF2u1vwKEDU2qUfo8FvHZUcDj2nHayMj29oWi8eY5k3Hm6b59kXCfVbCf4Pt7igmVMkWSggjLhzr9EKERrSKx",
  "key21": "3fzidt5bvz1YJngWYayWb8oU1i3PyV1mRjGn5EuZrkr61M318fNZQcpMK2MyVDnwKWwgzBt8i6dHQap4u54dqzQK",
  "key22": "2v9Bkovk1fBuE4yrgPkP3gDtm7Evoq2k2C5vHU7UF1LhoLLB39ucMHzoYoJhjtQee5bankxBrsWx49gu9JtjQW9S",
  "key23": "3P3XAQB2P3zprcE52mJQut1jH8RVkEfJVPhPu7iAU7n7e652P7bTKYbEsqbLdYP58FzMKGWtRGokMxw8ikn5BVV3",
  "key24": "6GWqaR4tzJPn3BsK7veTvV5QtjEan2bVZ2iH5YBP5uPi3G3nyWhkd9YCs1nR8c5Hd61DJ6nwDaNMaC4Ct6uAWKD",
  "key25": "ZBxjodBD4VdemU9GEe9DdstvGeo3JZuJUZdyB6mHrafahmb9uHCW4pbhXqawPBUkFMcX6iFL5cxnHqL61jXBQfU",
  "key26": "5dDtgaT9xLdzvuiuRfoXuVcPw6u4V1q7W6YxABe7ekk8EAaoFCvXWkyxYBYfnjfhkbVsTDqzDHHcjuZxv3Z7JfnY",
  "key27": "CFNdR7XseMEtcT1vwv328na9xrLJpFA2aXoDjyMtxnsNb6wkmqr7vWQbB28FBmET9mrAHZdZYVhnrXQ66VGAqYk",
  "key28": "rEpNrfxffjUoXy88SpZGLsZLpLGyGViTc56qzkGTjoD5LhjZ4t54RdepnXd73QwS9kag2v65p7nU2NREAEYCPT8",
  "key29": "5cKY396EST5PEbCVkRSr8pQ9JvKwQW1oBXfRizbLnTmcgTA1FK15bAeLHSaeRvnwhqa7ktYrD8umdKw9EJMa2Xsk"
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
