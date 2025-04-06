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
    "6578fFNZpdZYEjjpWg6PgJhQtAw6a2keBKGVTP7QUL8WCPWb65v2wLVbLK2twoCSoKzgibkPfk7smCaYybndUcqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JeEjh2p1mhK5y9Z3SuxVxu3d9eWuzVmqkcG2zzMjCHE5aw3dHnzcVyc8F1FJUDhoZNVcVM9i39GB7TGJQeAqv1a",
  "key1": "4utKKAQbU4QDLXquJ2sf2KFPVhH7cSRFEBNhXAJt56h2LPBXog7JXPgJq7hHbZ7REZiphVjhwLv2imdB4MNUqdSS",
  "key2": "2tBu2ddE4VQFe1iwgCAVi9P2R8a6Kk3KDqPxwRay8L4MnB7NdVX3bEBasuRQLfEhJkh2uRoeJavkrvpVMoJPitaq",
  "key3": "5dTv66zHP6VgAzXoQT8jMcdkNp3xW8ih3hzvYF75XNb9w936Zwj2ESbPXjxj7rJzKSFFDEJeL47fGvSLJnB3EmWR",
  "key4": "4M83ktkixrFdK2NSWXPwRvz4kyjX7z5a5BM6iSu7FPbfXQZGyiCwFWDnfNn9DaFmyfu9CPvindC2mtnWxqktouCN",
  "key5": "4qRhkFA8yzH1HXa2MqApmFaDd41QUBen4bYSFghVe8cefDrP8qSGfQRKJYRbztCJStdXdW43sGsja3apTNZseVSd",
  "key6": "zFEdW3qQCvEsDK38BNaso8YUg6fLZk7aMQBZWvenjwPj49bCkUzXjAtAjbDNZoWYz8dxpjxNkEj2Jh3HHkKGjdS",
  "key7": "4bUEYToAp34jBqk3L468taGYGgY7njqG8kJNXBD89t96oD8dFadyySSggGpp2UbPnmX4UBm17KJdKzpkkLDiVkn6",
  "key8": "4vC4TkZJpML49Rz2oqoXJ34xbPChA3hLmPwkJrFZTdYX6koXuSFH2ViXUk5dRPRxxZYmaz7LJBCS1BvNuTWWhpNf",
  "key9": "4v8p5s3uc5atmJavWCfjdFGG1PAjmG9hePU1orAANGM3nKq6LoL3hPpBxuthXpYha3ad1sfakL3pDm3EUVPG6fKd",
  "key10": "P1LSt5N34SehEReQygHjSkXR7gVRihmUnwuYQgf3aW4ZSSgh2eitF4J71SAmek3NYHdDbFsdM7v8rXJH7xvYP8i",
  "key11": "5WFjpFzmQ19bxn1eLaorVFMzUBgh6WimVbEgimHr6YNssct4cPpaQP5fFCQ95QBwwxbWP6VhZUEhFhoAFbhXuY8w",
  "key12": "2nwMLw4pFMvrhznWWMFMGD6wdwGtVMjgn2uBqjYRBohADmygAjuMLzCpaH7xAB7CStgGRgQngGRz2TeEoTsrEutS",
  "key13": "4Ck72bwXCsUsKbPioPBHFQtnBxanCyo6SckQsqTriAvJawXGfGG2okmqeraMKQ2UVe8ezE3C9DDLHsfnKw3ci55L",
  "key14": "5znQ5o662vZa1xxTUVwiMEwLPigTWxpW1GLvEG7nNKCskoFZFqvq3hS3d9UUWJwHWrmgpnbP4cE3qFLTWRftmFCV",
  "key15": "52aMAUC3g1aRY4xsitZJEQ5F61mvJuNojbu6pRufvjm5rBcGzRgPANUzEb7RzssuEhyhmg9aXqo85zfKV8x4nxcQ",
  "key16": "3eWTz3qgu6np2jC3UQGWAMHEv7QuUmBeG8TDwCkMmBrk1peEMJnpRGLuz541zAP9StpfZQ2ZbVZ8e4WsMQtmv9w6",
  "key17": "3xvpuJ2fWhQ6FWfxjUnRQogT4XZrRTJDJYdmuP8P1YX5VFvW2P3xCxiAu9XNxxRryTRPV8as2HZmQ22TEaDssXaV",
  "key18": "3i9mWFBm8vHmeUrnA4XTn363WrCKMTVxWRgv4uWtsdNoysYknWWDRej2Mb9Stt2KuvorS6opEzkQc2LVjFVP4kwU",
  "key19": "3BwbCB9PoxQKW2mhv1bXub6MNnK8WzKFvTbL3hqHn76c5upXPjFt5vjEvtdwWf3P9fZ4qkxiRt61AZZy3NiaYLUD",
  "key20": "4WmfVhdgkwfaw1nu7ezmi9Zy8QEdfXUpbCMg1HwM7XuF7cWFAfkFBCtQHCJbDareTNfzMULGLQjmNCTFnKJwagkQ",
  "key21": "2PKmeKs2zPMmeseCu7ooX1DToHCk35NUS1XppJVPSbkpzwcswPuNMGEjguQtXosBPR1BfTjCPFsti3mchLCE6Bs6",
  "key22": "4Loz3vhtd1wdkV849W4SKXLB4uMtvfLyRUTA54nHCGdWKh4C8dsGyYLufqNdAeojPodxSqxFEGStTZ7Lb5qMe2L4",
  "key23": "4M5EmZACEgJXsVa2E46svbhrbLquDV6X62iyqyTxYtTSnN5sdiCwqucmkCdNTnfdTMCL4xWQEY17mKC7E64CQ6QD",
  "key24": "5DCkp5aUZi87KdstUyJ7C2YrSLyASzWRERZT5D7Ej6pNfDWVJK6mwExzHbrsjBn5syrQFDfABS6WVRrYrh3ZjwXX",
  "key25": "W1zXVfAPY4ahXa5LyPM69JcxfY5rMUGCNwPczJwSW5JoC5Sj4VPQPkTiBjwf5nsoBzWYChB39QSbryy8GtKEwLH",
  "key26": "2ZsrUfGSDnRbhAvb1JRe8YvdvrMpfpGwgys6xvZZ4eWejYGp5zkvsW3X46zdXXSH1aEvG3ErhgCfWWzk4zc5Qs3x",
  "key27": "224HCQLPXAfDREBQyk5hyYe8m7q7ektfWZePU15dfP3a6R7PLkM7MtDDBDQRcbW1fuut8DPP5mgiFFKRiwfiM6gz",
  "key28": "HgjB1NYpDHWs3Xv3CuQaSC6Kxqv6WkuPvoAzknBkoVAgETwcZFqhtwtwiZjmeR3UMkeZB6w2Btr1PSNMSEuWEjL",
  "key29": "3j8XtxBFaXGX8YmC9fPCYgfDNqWyED2GXsFSTpqd2PANNAsifZzZVq41ySWA5k9wV1DqAh3FRmfMXzNTviHk2NN3",
  "key30": "4TZp7e6WL16ka1FaL3VMT6vF5nw73pgsB6pKvHyAXT2mzdrr7oTC2oUbqpxzR4MumHPncYWwGwcyijmkCWQ7Aqis",
  "key31": "qb5eesMqn2bHvfLppTpX8Agn1y2kJYxhWn5FsFTXb3paHY2FMW98mLZoYC2ihGDPW8quvKMKRdEHPz5jbR97CtM"
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
