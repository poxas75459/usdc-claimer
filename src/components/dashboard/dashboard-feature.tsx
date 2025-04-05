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
    "CeFxmZFN83BY295HXv9nTnGr5Jv6ocDWD3s1eg6p6c34SibvetULVPhwD9zsV9KnRXGE17cjvVRQ363bTZku96z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TbyvsemENrb1k22Chr56Lr2PXNueUhSZmLoTMou41Sxo6xJLvMwzTCSyHmxoEEJ3vBBmMJr72MjRBC2K589YFWR",
  "key1": "2ufBmbo2yR1WrJJnLk3jSL5Usmwp8iaGxziZ4GeRNX9Tnbjs7aEshKrTadbC15BnXQ6Ta8RUCmKRr2Z2XakYUGkj",
  "key2": "4aKbxcsudu7Mx5D4gzCu7T93YJ58qB6wzXwMzGaHWBEY4iGy7iqCyemPTjZ1zRJVwt3rBQ1EkDFmd1hRtXHv1B2k",
  "key3": "4TS59SFoKFzVgGNcPVyDE1RNeXiux8Z5WtBf6EvFz8AMm8Fcw6bVXotkcRD3wxX5FgjtNxdv15dCowZKV7chH5D3",
  "key4": "oJNXoxeJfZrze9wzY7PGeTPHZTZoKVCAc7UK8KtWouigtrjcZGqzvFCf2UGgBY3JqPLSvN8vf1VrYW8FbeXFArV",
  "key5": "39PCqVn7FEG4otNyZzknyKr5WmffCXJcWBmzS6H5ooLWsEM1Trdyp8HiKY4bymB6jMopHqDCzZ4kt4CS7g7kncV7",
  "key6": "2JUBSSvSJPwyoS9ckSKsbtWWuDh5PtzecDAcPhvUZgn4GstE6Q4jbFYMWnAPoC7pViATgyJAgRcgk7F5RfXPKvCU",
  "key7": "5mkvmPWEwHQf9Fe2kMKcSJcuPxVG9PW6Vx1ZedjuF4C22X9gUMEkfoa8ZLE4TmP8npAab1yd86DTBtQi77tZehRc",
  "key8": "58P1RBP63n6Fx2E6vvdTHuNBvKxpxz8YpeWvTUrVmdbTedDPjtQBywBAHf4KdDyMM8LC11F6CRbiEwXqf19C94aR",
  "key9": "3hHQVuEtkNxBkVXLEFvsir438DPGxVhuatpudpFAAT3zuED8NTKtxusCWPcoQeYAar7SmqTQ4MABg8gxEQXfY8kB",
  "key10": "4B8HWeqWRneyo7QqmairiTn9Hc4fndcoRktuJjydP5R4NFPvwnuy1EueYvX91kEfuQi6R2eYxCq75c8RQaGjYTmw",
  "key11": "2UGi2nahbYrqCsQFHzKK8m9BFDbZrJUjzZnREUmv11MyM6QMsdm8915yiX8j936MFJ5F2rRTgHMmee3iDiDrDYPs",
  "key12": "5zMvUiNEnz9nxbeCvWSg8LyqDpAAzVSpSxREXMfct4EKJwEVgTXBuLd29xAEuUDbZ7V1T8Mei5SRLvGzZvLio9P3",
  "key13": "2tv82tvGQLeiD6injdr7YcNEVknn21RYPL1WzJfBD2wMEHYMoQheAGBMgtqZPGTqimaW54QepZsW7W3DgNCpjzi6",
  "key14": "4Tmv8rD7tQ27ZT76hyNjnQYg8v6EqNGhWWB6DyNKEKim9GASeURUdUEYAQj5mtCSQsy1byrXqj812jUsfTtYCSwt",
  "key15": "cdTcgX11hAhLvwyKGngHdWni6ooiuW9hzR7xza4ktjGzXVRRv97YbcqaJ93d9wQJrjy6qGWNVumGyH1aVToabMo",
  "key16": "5W6BimXQHf7hze1c5NntgzhWNFENcKyeWmDGgThVXEKQwTXnhEWePQJxchN2GtLm8Ln7qHZxAXxBMrHx14sJyR3Q",
  "key17": "MzfX4xQCqKBJE3pEZPBQjyY4ESyEs3Jh1oi5efYaHXfPAyCjKTVmDdr3vJmsnDfZaqV1HvoGmpsuG2zkwopqjfG",
  "key18": "2EcFJ2rwV5ZVRW6hPdWNHqgJkdK8rRr62NXPgUaLArd3sWkdV7MJGer8oDvNa5SwJ69VdL4eN7vByaVUMvrnx42N",
  "key19": "4gYhMVbnnK9BgFqs8d6wMuLbk58gMf9vm1xidV6E8rPJDFoshJpDpeqv3skdCNEvKxgc7s6tkfH6U1uDUiXdRPM9",
  "key20": "2pGFxXVgTFaN1y2xz6LayrSAkuZ1YCrWfDCNoE8epo8b2jaDBqiazKYvErttWJXJajqzxskkZTymA396z9gh4v7k",
  "key21": "3bZo4TFBX8VHg96VSnVNVMDMRUwiuTyFJYSCF6fukj1X3g9VDLk2LDqfPsQKn9ZAEprsc9FCNermouQJTAt1Kfak",
  "key22": "3HyhX4JCaGETzUKCDwaZexu23tNSSKpmWHEaW8CPCKb8jvZSatbbEhToypgvC2RSaMfU6ejF4xwLNZbQAgUAvyKP",
  "key23": "GG263smZFPf3URQkwFmR8xJzPd7jTj3QZpd1ksffXjoR34L8qTRKBDs8FQAWXhFyejfdPbH6yzMbtV7bjgqv7sJ",
  "key24": "4P4WdosvxEyyeSA92u3EyqSrWvPm1Kkwd4atFfhBE8EB3QD5EmDDtwrRthRsVSbpmGZDm5DSyrLYc11gDQdQPsiP",
  "key25": "27RknQ3Dxu3pjiWhUCvsDSy3DDgksMyJtzMDQpPWvLD4yAv9GaHF8NYQbafbGbBy6ywyWEuYKrjpC9KNiNjsfpgs",
  "key26": "3bSbSAkMetv6BuY6gcN2TBTwLTndkXAeX1nopQcjsE9Hiz9UK4QoUeVkg2WpTgATZJnYpWvAGpuyuNwy8csszUEG",
  "key27": "3qA5UQ5AP5LUVzeGzhHhcHdRVpgtQ8X6bW38cZctxnTUptNqBSfChjRwdAKLVVFFBJVuyGEZ9cZ3k5ye6em3ou3a"
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
