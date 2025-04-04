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
    "5K2sd6dgsgYsAzv5peXqYw6xdEP29TmPXwe8oRSjP4y5zKw2MPQxofSCYksHrhiuXzihqk3seynvC4eVtT6qaiDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "955num4NWk9eopnz19unRDa7j3BJYG6fr4hyc66VjKe6d9ofxwwRq2yYWdibKBTbyZpAPr2NK9vnV8XWeexTboU",
  "key1": "125MNMpAWgKEWDn1fGCv3toMJf1YJyzFQEavtHkDwrh5PUzYYQzk8pGPRgFsXLRzXBhPtgAJVwdnfQFe51xG3EwU",
  "key2": "2q6Eu6v6gabDQFWQB1DCDKpCcffXB64ZuT5xmz5fw48MqnBkgGqgVr7wcXUUcMBvutm7FUrxjJSXfUzugMYhpCVf",
  "key3": "5CbASTnG8WsUEoFmPSk7muQxUubfy7r4fv43dMFrG15xVPJYoyVMBZQWW5Vqt4jkZUffUYGs3HffEhXrvpVS3W6F",
  "key4": "CZTY4iRtioTp4MPN4YW7vGXTbMV3vAUeHCBsBD9xUF9hHAov4rAcXBYQ9JidbJsDSp6jjg2g8bLrH9TdguDqNvM",
  "key5": "5TeGooYfoNQzDK4vyzcUy5DgKowUWvJ1RZnhMHHFxvZA6WpkN5a42oQWZFUmT48DMUgHJZDQrXosUAiemZkgTb6X",
  "key6": "5me219WijjCgkYkKEfzwL8FLK7PaYTUmjHrRzMaG7EqFdQ1GUS1RzADTdf7Fd8jc8qU8GaGzyJtAqPQcn7ZLvkkg",
  "key7": "26LHtxnY8jvKQGLPpNf2aQHs4E1WKWVoeefSSKNrmtw5izCBh24naC1ecskLpzHYMJCnhL5Z14F7C8GfgyFAbiBE",
  "key8": "39o6rHMMK46fh3SKDDX2tDGnW4bTZStK3Cdc8kocbSS5hqpHwC3xszXWuRKv9AfMRJvM6Gz6kg9mFyqXmGEJDyxK",
  "key9": "3VG4EjuMCzZxLQ7aEnydHMC1mzntMVXDLtj2G7uYy4CKGQ5rn55msTf3oK9DBTW5TZx6i2TxESUFbAf6vqXhZAyS",
  "key10": "3uxetRLrs3pJ4txgrAiLagrmrTgZRfkzrEzvpyJRYdmxFaZfYjdXthXwqykv53T8y3voTCov9bkZLsLi4Dkt1BKV",
  "key11": "5AHT53c1JqKQSTJRdvGTENNqrGgHfTu4nhzC5fYD9F8sRk4uJXqkpJk8exJ8SJKHPJvxtCRMakPLrc3kyF9sqQsb",
  "key12": "5KfNAxRaGychzBDCwEN7EvobffNC2qjnBLmvFFcsxmXwRHxS3inSCEc9uMMaNP4reA85EsgJoLmBuWTGf7E5KjQT",
  "key13": "2HCauZdRikKghTZ3KW8yBntwZoyRXJwmAv8fZSS9UPHAPTiYvaotL7U9SC6fVfZ8BCvHUrXUvVDi9UUT3NtARfDa",
  "key14": "3id7Z6XxmV9CBLf7GjeJ8P3wzW6f6eHNLodTwAuQrGECHL2uAJ2Aw4NpUrtdVmQaXCzt34pUWMeKY9A3iCxFKj7K",
  "key15": "3MnSyg8TFwgxb8E7cv2Z3K5cnBGPdtN1soX7vboa6UhCszY7VZpnceDfCULj8bD6jnr6XK1U8Hgffys91TA87JVA",
  "key16": "oWaUiojuunEfA3mE7Cx8m2eRA5zJ5X78hQarbUkYf7h9aDmdpcuLaNEiwnAsxVozTC4zTUtZMNNxsa7Pz8K9pqQ",
  "key17": "2NEEy369ryAxaJ682cP6ACQa8PCrCaBNS4zYFPV25BBteNaE4WiDXH21ZB96Wfe4gpfJx5iAoHbCcBVuRAnSYXnM",
  "key18": "4AYq5X6YPVqeEPsAfhSScq8uPANsbEtJRNfWkEdZvjGgkBYDrYc14Fi3SmKK8jT41uEuWeup4NhWMbpV3193XkRx",
  "key19": "33hpWBxgcWqrzRzJZPPtXYZL7Py2jw3FyXCJVA5V7p8rdRVh9gB4JU6jXQrdjAVo8Sv2MNttwt2UrrWvzcVbPkg8",
  "key20": "TtJ3bqnfEssAGzAHvxf7HPevBWzrnsazUgnF8bX8fQuwESwZUgA1z1Q1tDFvCzfcnhZiwfeE9krP5q9qyuUgCdp",
  "key21": "2TpoGrr9RMZk6YEShvGPyS1srkXGDBmWXMQyHdSuZ8VvvMtSZaAEo4fBFXcr5UFrUKZVSnjvCgoLNgf3DqUWxRic",
  "key22": "62jxQdRHvTNWgSiwBHjJiLkkJeacVyfL8f7voHN48om66UvVZgT47gwLicJ17m1KNboqaWpkGiUJqpnDxZu6Nvqw",
  "key23": "4FdMcY2uzkXWTeP3Suke5LBvsyj4jFXfAP47Sft32VipVPpzUqtE7Z6LN6gJocg2yNBzyayiZkxdaEu4DJBqtXqz",
  "key24": "3xpd1F5hUgoxyEqPr94927FGzhiiRuXcKjqsDTW4yEKcQCJqAiKHzoUKsYCrfszNSK27GKe9wSijHt39Rk2ojs5H",
  "key25": "21JN2q1rg6mnA6133eqiUxbyhJQjgEygWoYzrWBw6NngqNHMo4FaTEQfhNw5cnyYMHDfLoQCi3d5So46pGEofgAw"
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
