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
    "5SrEX6UA6jqyVt3WcNPP6fNyucww93q74Hgv2fZeJaKv61LypaQangTH6V8A1WLqs6fpFk9ydMUBA6R6Q5BXRWMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AwCZVLQwW57x9C3gBNaXrdvH7LQa87wmmx4uVkpn5a4ywnu4Nk5cWhPnM8M1JghVtKwQsB64c83sCcRwLqpp9Nx",
  "key1": "3HRNeEDBPu6ooHrkNfCrh7dwwLHadct4EGvF4vrQZL6jLfndRnjtdDPnwvfYzdkybxe2Shdci7ydQF66tYGtk1ft",
  "key2": "vfoaZfxCj1DDg9RtyeX4ya81BVTiot4Mm9Qs7FHkzcLdAeCAYPnKVoT151Ar6pDRQRwLpY9Ld3Dv1xmr42y4T7r",
  "key3": "4b1JEkKY4LwUdzvb1LRF4p99QNkJkLPVifcG43DCBY1Cvxm1psKKCMFcQDXo6TpqMAQt2KwH4UNRVDXSgiK3ZUM2",
  "key4": "5M1vKqf1DBpS2G6bhEpkL355WtgSdXyDA56tW2sqnRzyBL7xSbN6W49tvC3BBQaonvxU8Sofxa14eUX3niZWXFGS",
  "key5": "51Mp4n2Nzx35SNYrqn2AtXCWibk1gvGszbsjWT3v4pSWXMhum8AMaWLsHpjLXQNpKuAkLewLRniWfkkto9iTAXV5",
  "key6": "3TNrfmiry3AhTzRRbeLL6tUNmvG75oSKbHsdN4eKDLSv6VN6NRPQDXMp3LptNmBuUnytZx6hxB66CN1u3R3nFfjT",
  "key7": "3NYX3pDut7PbL6nfWnp4tMbh1Nm4spSZaQcomR5XozT2aJ9UejFcxfBfDc4UY6SWqgqqCyDvhogCtWTQJqrdjNPu",
  "key8": "4wEUKWiiL3CJyamCL1Pi4R969RCufp7joQimTwzv9CJhaVy5kbesM8AdUp5xGxr5xkFt5YCqGii7tYtJ1DphLqZF",
  "key9": "4nmBxLTSmcyq5CDcdyipZznKJpz12fUJkaaGAtsZXFKc1LAtbpBqPRRReYVQA4kKp8XXNh54bdQC4r3SjTmuB4Ub",
  "key10": "4t3A59bWXp9Wmbhtr3PWNb56xia19NHaMDMknii1m2V8ncSntFriraT28Nu4M7zctHr1Kz3Yr3acnvDWj6PNw6p1",
  "key11": "2oQUL9qa7gg4ceXqb7ZcXc1cerGhL69iyFGeiu9pRVktuuArAWGynGjHbMZfeKHSELByizrWbK2dDQb9NSh4nXyF",
  "key12": "3X8zTMLXckFoSxrntsrNde9ZcUaP9vJp6mzRkBGEVZicevhFiGymaR937sUEdUCuCwp3WeJSUbGVG7b1FW2sfRMQ",
  "key13": "ogKhfbbgUx6VgGeBSaKN4YkTYQhtTJTSW9DgkyJnYLGLS9trtAaXrnxm8F2HXq6Pvmn27mPfRQTqRBHg5YMZyQe",
  "key14": "4NRTmmhy6ofsC7Hd43j2KySJzzt9fjRkiT3KtB6X7kk8es4sjJRm4AM3MaGB9ZD2bXNfDxtMrmMyrdMECt5WjxZ",
  "key15": "4ea7mydyR2ErEbyzuhBcmE6Ha8amBYBVDWRtopo8ShTXFzYtBHEVpBrZobbhswHXhsNS519c7aAdzDvAtCkpbTpv",
  "key16": "37u1KAa3ZBaGoyjkDGvJsW2xE9NEje511fgLuSc8VgfNAfD56sf1tWai3G4QdHMBnTT5RpDkmPBpq6Hjm8bVSWSo",
  "key17": "5Zo82NF6cRrwpb6oVPxsbx1n2Wz33bdRNWg7n7yLLxZkbnGzp5zU6YfcocW7H1VRD6BeQ72Hr29qpAFzkC5m9wQX",
  "key18": "2n2AA6thxM2A3kcZyqd4ChPJ9KLmPgTbxcUc9W6u86wvkxUetR57CLz5Ac5j5CabwSFYdvYnEMXTZyMvFqJP7SU5",
  "key19": "khgft3Un7G6jWBb3mi3txdDTzFEUdPWWvTBxsYDZ2LBTzqWUHUGZWc6MszTe9sHckXmZdkPcdhFCCUYWJXroKHW",
  "key20": "5dGNuZwTDfm2x9X2Fi1oCbAtsjEntexnAY45JUZq8NEcmSVC6jh1iB3SsrN7qBie1T7nAjj198QFKFgQqgiZP6hc",
  "key21": "3DnmW5e5Ay2C3WG6yeXARbZ6Xvixobe7GAjb3yYVDWXepn4tYEgUjY5jWQtLHNW2snSpSrDdfjnTspmwGtXyw1vx",
  "key22": "2hcUDKDcpLR6XyHZWpZWGBhhohMX8QJjtFWpfoiwrGF1ZjYPxDGuoV1L7qhTMsSh91mSWckFxWHeBLZKG2mAg14Q",
  "key23": "4g7uKdZTsCJ6KJhZW1uSdcJRWkHtMTNzXx5fchqymJqbfqppq3yrjSgWNpDoXC5VX81R2RiNWJjDm9jYkdfQncoV",
  "key24": "MP4bvua87nfeLxi4m5dSmFv6J3DauAf33HusjrJYQSQcK2MQd32zRRgWXy5Jj9XPR1b99yPB3iX2XgaGQxqDCz6",
  "key25": "3bckztLBe3rj9FS4Bg3LGqbezLcCoyh7SqnnyiEKR2C344GnanD8QFsKsNvP4sZhsuquUzxQQ7jbxZ7tgJEU1D99",
  "key26": "3M8mKo7BUMYnXackqS4cgvoCUhXrGD3FuEQmudruPAWEk7iWNNEhUXi3w9RJEMtU1XMBKsYeFKwsNmzShE6PjWFT",
  "key27": "3uvm5gBENv4yzoMwGqg3rYsWCc9hyoUo4ZTjGEx3zwoSnGBqkoCyZ6hfzrKKVijgH1UaD4TGwNSBjbJBzXeFd7JF",
  "key28": "wYoT5f2HtzatW4N9xkmTAqQ5HuiFcvCrwKCDcNKk91dX1Bbdgf4ACf7Jq2aXrnY2FEVRVMsNtfvfWszqV11Xjsj"
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
