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
    "DHmwkhvHU9uGW8Hx5ewbUvp6wp9nxtWsycpFsEoS7v8MUBW8nS77DKwLDNsQmTnEUjmQ2CwJqq4xLA3kitsQhff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z3gnn56z6pJ25ELQ2fqvQHutPzz7guYcnkjbDrgVt8RMcE3dSn1XmQXaFwdF4aNp72kvKqs42ducb5N5zbA7qgd",
  "key1": "4rJkcHorW9v8rywWbAGdLr51Tu9WNqKbmMbWzbewntssy3c65NM3iH2PUcyXgMrvS9Xf6Xxi2NPePs8RGv2Fzbhp",
  "key2": "4am9hnz4pag9qy39ZVrtSAqgb7wimgVRxoye8oXpAiGesUhnJ9YS7jbf5v6aYr22YcyG6jXD5mFnvdS3FTxQRayM",
  "key3": "5VF8Nxv46HSeabv63yR8ofVyeQmuP4JbkWpygngFUWg3tosqSkqu6neq19QQnhZsJpNm7jtRaq6kYiSwn19NUDgr",
  "key4": "54eq8GGcTQD7LUD6bwJVD7rRWE5eXFTgsEzbcoHscV318rLisUXbPyQR4RXCcXbQUydc5eRLbQ3Lau8qEBG63vVC",
  "key5": "3RuuJwcNXQkYekue6LruZXVSVNfuhd2o3kPnpQVML6BWUs3mYfdBkUUehCw71q1z16nyRCCKuk7XXdYwTsfDDyY4",
  "key6": "5iEg1MFrvjdxmUWjunrZyuMXqdeUJkR2ALD9V8iTR32B5aLFjRXZccdUkuDydVvAeTKC7QN1oRoNyXXVWibex2qR",
  "key7": "5EFTLZ7wXELE8V29VsJVyoo9mw7M1mJZizV227ovJYTNoeiuFXKj2ix6RJHJ9Xj2jmX6STdTZn5QkpxUf6BmWBT3",
  "key8": "5oRKZjyUvbg2cw6mhhRgVeHXdvjQV5yFEfvX1qTMecYLkvbaLmtRn36TTDUFrkWGSMv2BNRRBntAFjGnuJsWoB4g",
  "key9": "2SQZWRtzmCP5EPmCfPVbofS4SMjzEiwmGxmLCqjNMwQcVEJZ6NihBB8rX74Z445DfNZ3z6Rcg7x6mFoYdsv6C8xj",
  "key10": "2KfCkZURiZpB3enMMoBZcEYJyyZwRJZbaxt34o8WYfGRNYPFakKYYaoxHSpPtWKHUpxhWJi1uyipgKMvnZQ7nMab",
  "key11": "5AM7MfnbMTTiGLkP4dcdXnVVLF7ex7hRvNUtYMMScgYWJ4HzLLoDj4DcQK5LhcgQwqw1fe2nY3KCBGx6QroJL1p1",
  "key12": "43Gsr9Cy45XPWssg1ShtDYBGJxNdXfcBe3FqECAbkmopw4w1iFM5RnAtgQCiWeeoigrBo1hGk4arTE6cNQ8u8JBS",
  "key13": "4nrAUvbfpX1bJMebDVpWxAWAuSuuFAZRxRW8G3eieVj6yKKAHeDRsLCePPHFiC3PtCt4GNyEz4akynCGe7m6U2Qn",
  "key14": "4zdTTeJ4bDFneQGdS3Pts4vziCdiKFWqUtX8tqGhzAsXZQR7dk3D4QfmwTRdTvbSdp5RzmLiri33bjPbQo2ymC6Z",
  "key15": "5MqRqyXZBVcCmEZe1gRU3hSjRCaXqDGka9B641yaojjRCU6i5irNojgz5kXvJt85M4jvwXLL3tubmqJQVBZprY64",
  "key16": "p6wv4JwwvYHmDNRVyQzeKFQxvtDT37pf8tZg2kxAMxaNkDAR12bpMzvUpDW5wTxKT7p6GPZNW4LUCyS1mRLwiDX",
  "key17": "5hHWpoS7RCVGjLJ4SGUtLRdHo9ddUcsNQKVW2dBdWsPBaDmH3jYmjNDNN6ry7gYYC5yarAfPM6oAgbkup8wkdQ8J",
  "key18": "2JkUaYULUaskvhdW6ofENcfpPKePnT1HTpWgePuA8EoLHkUpKXMxK3Wgx6UEU335nk2ToS9GM1d4gxnoLAKVpSvr",
  "key19": "5GiGFVuBNP5C3syecoPqsSqiYBbd7LUMqJWpdNJdJr7L2eteFoS28gSC9mffMWe5hftwgBzSWFDTjRx82zbARoKe",
  "key20": "5V9gzfSoHiPp5Wn8pLgmDHfUSqF3TgaJqZQq7vdKZF3ydVMPG5eLDqjj2VmPvET3mZrBqg4eKpHXHWSwYwarVtjU",
  "key21": "5Bn1EN4qieWPxkHNXqpweeMFU7PSSMiTdq29dwAVAvmLJMDqg19ckGyHK8zwid6ptEngvZXZg94ZpcaiJvS6UdfZ",
  "key22": "Xt8kAJ1r91Ur2NFwRhnGxeEAcC1UATz3ortrovp6vsNKKM8T9ig1APgErN41kVYgucxdbP2s23nXdy8vSUGCpi3",
  "key23": "3WTwJuZNwCVKt5e3BHsuWpkNeXRZrmMs8AumiNhXQX4ksbuHUkciNCox16EhJVNPWobMXyq9Dygo5tEXFPYyuBQ6",
  "key24": "2971jiuKji4A9gS2Mb5XQN8qteqnE7emYyLPncuQVYsgA4LBWsgUjDu3XiMAuQETmZ8wz9V6Pg56mKagCygVFqJZ",
  "key25": "4QdFNznRqiqJ2ZLqb7kk3k1oQUqnSJ1ySXZETmBhcpSLUKvq1jQDuDMgUAjzzz4Dhzw3ZHLLQFB2THWAc1UU1DPU",
  "key26": "3uWN5sHCFizxaDKJpF8DT3MJz4Yusa8TttPwr5qEjfJ4JQYjfXdjya5hb4Fd8U9eR9rKvJNtDMq43UbCQCkdhq2V",
  "key27": "588Zkgu61wpRx3nUjMf4upyptiaZXDLYpJWCmtMuL51N1RV5v8LhivFB7ehbMJmAUGLAPHcuMWbrVQ8fFJkKLU5D",
  "key28": "5T5HcN2jWo7P64tjs1nHAZvCKewTXUc13TUsZkWm1DnzWxZDrwTPgjEt5ovdf4QoREpbN8rXCmEHG56ZqyjDHKHt",
  "key29": "5hVWREZuR9vFmd1WFkkXGBdNVKB3EDpqaNwoMAVUXMiBrSe3oodZv5j64mUcCuQFYRgZibAsxLX7Kpb7KVDA1kqC",
  "key30": "m9hKRNU6uZGDhQsKA18bzrLizEtbo4yfNtueNLWDb4wUgND1mVwNux1wfHExetsmz5QxVD4ZkxE12SxpN1zuPQB",
  "key31": "2Sm1CeZUPZoVFhK7jGkGFjSjabBe4dsNhZRPgVgDzbH8YEgb8dqy6Xu6WsBigZuq4LH8KJNVHonFP3PJAYkNA5dQ",
  "key32": "hKhf7vyvjJmTGZEUzYZfN1FFqnC2FRpGzdRs3bLpo7GCDGdeDyJrCeh25kDhxdH6wmQVbf1vazXiwjWYCQYdoi4"
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
