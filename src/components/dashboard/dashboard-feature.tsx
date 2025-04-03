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
    "Uws9P6DeoBV8RHU5KeqU2GKpxTQ2KpVhzGABVy1tSjGgrgF8A31RkJtmeyear85Xa3qou7pQTs9GcVNa7139Zxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L8Jjx9nVyzibMyiRJNn8Pb5azSkJaKnxUauADkNtEW5qfdcfrA5yVZdZthde2hk4X3PgTVqoAgHCm9bxdWV8zhC",
  "key1": "62CP7hPeSbEUZ4HJhAW67SNT35KtTNWEYessQMUFA7Ubm2j1x8Dmdm6bHwDpNvfnGpE92QiHZeQ6dKhhHfXSyQnx",
  "key2": "4WbUQtsR26piGcmMdHBzJnu4KJMeFjS4ah52vTbMa2bY7JtHDjzyHtziLaxuX6WvtYW8fXs1eW2pUcKkxKN3m8Xo",
  "key3": "BxyYQB5hSbg4rZTNXsVaZzU9vjFeZmvrSRYEQTTNyzHEXYmDST3iyWBN9Xipn9jQBUTkL6axk6RvamgN8nAu4od",
  "key4": "25mRHgtFtdNeuXuDeEM96wgRkxsbLkC9zhHsgsWkDrNbwEdoGZeNnyFXkKGnA4JsuDQJVMB15V4WqDGKrZYs5UBy",
  "key5": "33cA4qiDDWZ5aWJ1anj6GScxPs1yg1c91s2ppNLDCwy93eEEx6eRgNBN7azhDSpgEcKMjzozZSzK2ShFgtoG2aVL",
  "key6": "5Y6Q7RvghMQgwS3PeVQrUURfPKUQBUP2EWUvmibxxPnN1NcyhHBVHgEtE7Z3Wo3eWLttjgQFF5aXzSqufgzBjBCP",
  "key7": "4nXGSnY1QmUaRGtk81CQyU3pwxyZXTdXfmF1va84rv3HmG1wewjaMEmu1FQ7v2taFnWqJzjUGpveQJZJKu2fYtsY",
  "key8": "3tPMCVyF8Ff68QULzcSshA54oys2Qhi7TaqYGMjPvqqLNzLkn4FtrGABfYJPHqEyTDCgsrfZYdbdFdjpHtYdQC6W",
  "key9": "5bdzHCXNv7WtYHzdDMANF6SKXp8YGFHYfV4nezVTvUjcqBBsUh8LQwGZqh6wU9DDA5Nu9f4HEQAe2LrAsqFD9B7c",
  "key10": "4nJx7B3zxNnLD9CeVE55RXB8skrAJ3Ag5nuMBsqYVHtDpJVFw2fKPQSNCun9rP5b2o1YFJJ1EDhyVXPTbaSpRWev",
  "key11": "3QEti1Kc3zxw1cAdE93z84BPFccLJpibsZEKCodPXp1XMzX1iJyhgaeFwy9kEgMwNBTg3gDPA6yj2VakQwbEGxuD",
  "key12": "HYr6mFgEazximQ95CiE5KsggNntZRbYFzK6fRM4DxbeGhaxDWzbLuBpV3Q9tz63sEtPuKckXtgj6ZzSV5o95uCa",
  "key13": "ULrbmb42oAvkJV38LRazMAtsrBGYXweKKSejN8tXFVidxAz6mrpajJcfJZnCCNcC1DUWoWRNRRLxsjsddN7ReNS",
  "key14": "3XgnDD3MmDKtCzE7syhxSiMK6f8CNKkNk1GXGG2CzekeESHZtEGbTL9nBEsWwzocNZEwDPEm64uEdioMar5g314h",
  "key15": "4FNaWqw5hRHxFSM9tudxC5vGQxazjfoTRGy8zUHeViXWsJ8sUTtJnNdCT7hFjFQXDm5zj7DJBoE9JsnCUBwamwUA",
  "key16": "2emGCteTT8iRh9EUEnCsP3eFZmS4CWBVTSdTtW8YwDP2waCwhNzEDG881NLtipsESEGu67wrTf8enxeCNEGj4TnV",
  "key17": "5677S9Pk4UT7ALHUoFTnxQrhMdMaGWDrSnV9dnemN2pKTeGiwLfHxrfDjpjCi1CQSmcFLCndWLpd4o1QoTW3GvUk",
  "key18": "26Rr6CAapMuBstjaoWMfKN77sFXwsGbeobgCpZebRz3jwngjN1Y1TsiiMdUHNXbpvpDrfUH2rQZVvAEdrHJdf1Zz",
  "key19": "2CDVjdQ8dDZLnr1A7Sb6KbZmdHXmaKkQvFtfddmyzjYNCJbqrNdDbj1t5ZeQM6cu4Kpex4TC1eknKv2tUBVd7MwZ",
  "key20": "2uHTvL7AN9By8iVSwvdDJv2Axyqsp62ymaeRDCT8UCujCKk2DYYGoxNcB5xfYJvBgLfCJoYhu83ULY4gsNdD7gZW",
  "key21": "5hcwoJojpihVwZZBTeuHN41ETxDTmtDQKQhcXGyYDrV7sF2TTsKZavAh3FaN6EU4mmErUK3uaQwKFLhTAf2ZeKFX",
  "key22": "2UVLhkrtYecwTPAnmH2ogYQ7wTVQwK233fpt8PrkNWpD2NmeXGJoSEncugWvbovypHXFVJbyhNtgvAVAL3n61nEt",
  "key23": "3UoYDDAvL5v6V52K8cextt8NgMJt4fe4uYamRBP7U1Y41j4gpCdXiTCrvbgjVieBLptWB5jVMF3kRe5rFBxv5P7R",
  "key24": "5jz3UW4hC3K7TA7Na1qhU4QAmvhLSsNg7wBjqJAfywC248x24Jnt7628iYVPWgjuyDX8wYgFrcBogkHhv1dUnb4H",
  "key25": "3hdzppFJAWr9nut5eZKVtMnkBwVFwCUV7UC8RCqZn4auULviiiRwQEvgRciW6ZUZ32j5L5ZZ7x9oKZ44BuSqKFtp",
  "key26": "X79nCU91K1PY6gnHdGq8D6mJbkhsa67JqNWU97iJ9XcETtGE1TfFBexoWNyUMQ2HvT9Z6awbE8jQC7CqXY7oSCq",
  "key27": "2Uj6DAtZqHjMxTZ39JZEJfyrjtwA8xuH9DPpkGq5LwUMyGwc1nVEstxMJX5PNJTnEGNsmHVtAFiP43pNUDMKpHEJ",
  "key28": "63VpKNdSq9KkWpEipnB9F9QDr3LEZ5gR3KdF9UbYwE7eNCsPFkZrE78DYDSQe4j3YhGGVPRyoT8pDH1neq5wV5Dr",
  "key29": "m8TmuULgmuF6vcJ4ZyFJmwK6Nf6gkpupHdcwCKnJtioxrbqnqYhynx3Ka5u7mVnxuzjKXjfyhZwbMc3RnEYaiyS",
  "key30": "28dS7zutSuWNUjXau83ayfGCUwL9mfUJCrG2TBzJfw1iSosiXhUuwV6HFDweHGHrNHSU1NNwWjVqK9erGDkj4vG7",
  "key31": "3gMgdhBkkECT9Aq8C8SbGiw2pkdzifwpoHZQe32YasyyBurqEsRdgTq6eXAo41CwGBzvUmEL95XvkJZXrta9ywbk",
  "key32": "53AU3ngMqy9nXHJ6fr77DDZjytenNXkrdesNBGHetHLQ68NHLrb56YVCZX8va6e3LhT2UYhU2hKhJTrVus4jw5E6",
  "key33": "4SMLCvCANYEREgzLz7bCF49oJrkzBsDmLyzxKhTpUNyvu8mJLXQKbTwvoEhsFYMiU6Y1eMADiJcyYa3HoUZJaE1T",
  "key34": "TLJDhHvPeieDYZ8zpn2WYbXfrmtwybXr8rCvw9Tmgm3Azw1cT73S2QqowyRCkokvrjMVGocC3cYBLczak4MX4CF"
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
