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
    "4oSBrY4Ws4pv4j172SLZZV8oYYvCV4cZbzKrJYsWVquK4THmQNHfKGWv3JRg46SmEhTCSNG3XLeXy57M8P4SNuRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UuzUuQTcTbfHSvCTGLFTQah8eoJ7HQ9ZSH2Swd3F3EJqSbQFvE3HVVBKk5fgTKtRTfQ4Pdzh6xD2ETZX8r5YExY",
  "key1": "5H4weBZCfHxDk49oWJgwHDJbpfwwDnpMrSVjVakhBjYiFn1aeUwxmwafT3duvzrtWFjD9YoPcuDftUsd1aMvnvP8",
  "key2": "3HoBexGAuoAM6Sfv2S79yPmt49nZopcyGe1nVZJ9FLerYEpyvH8U2D1mbwophfZE57QsKn5zQQKt2bTW7vdaMFVX",
  "key3": "5pYGbHERuZQjXEJdHbWDQByKFDrdzJRmGYE2FXqzVHhVk7vmvfy1b3D4faYAcyXdNfFquD8EU8R4yZZ8CLhagg45",
  "key4": "4b6ZkroTrZ7HeiBj8gCmF3WMgL3vT6cAPzqXCiPXESpRdcck2ZzQ2zeZdEyYPngcRHvWhpJtiZWjdCGzxogAAV9D",
  "key5": "5pM81LLbVTyQ24EtGPNbBPoRhEJ1FwhYV9DtRnhQSjbUgbojwtMd9bJnQCouTfq7o3ijg8ZaCicgRZJL11aqSxzH",
  "key6": "xNimEZJoUJxYyBue2Ma96WTLWVMYqMt5dJN35CTwGH385aUGRHuMu4ymDtaKEkhEJ33CRwNJhKSiHyxU6Hd3zpF",
  "key7": "3wgvXybiJgDQwAM1Bo7eDQbVZMVybcFC7FML1Lrho1ssKTjpTPAEs7i6Wjq4Eu9R3GVaeYXZg7Am3Hm6D9M9Sg66",
  "key8": "3wxmXJp4AF6wTHhLUKnMRZNRdYcBt94njNo392DMvQ8oEMGrnmQMTr4wZUsvna33HQHQUJZCrkLBtNieMGPqZNqx",
  "key9": "5eVExD6LjQLtJdHEstdkWdqy7n65A15CLPydNe7K5sJpKdgYB8YnhiLD3BKWfr6cF5ENARpREK4BVxq5d5FqEW1B",
  "key10": "2dR2rNWvkztQ8941WF55NDJUpnJrBfMxr3J7xwN2P8FenciHPaNK88CFdwPwu8RAx57oLZwHqSHLTRAvKdjD3H1A",
  "key11": "2tHmAr6tusj8YWgSSuMcnJtXUWpa7AyjS27icnLLinC77DyGjgfwAaT7yr9tj26sb4h8p18iMvK52HTadv2PGCUo",
  "key12": "53PGt5NzkVz8F6BsgPCfZoU87Q3Zjy4mkCahFxEqnjWYytiMBTF7h5abu3VNpvHdxE3xyhEud58fnQmGyWvGun67",
  "key13": "Bd7paucRuEvNcr7g14kJMQX4PfNGP15YXjuat1S8TYUpuWboGVV8jqCQUSwrdt5gJ7hKgFPsPfJPQW5czZbmRqt",
  "key14": "5fem6EUWH6GWQHNbQigaw2R2GcPusQ6pBGCwMHBS5iZz5kaiM88XFBGXkrrUcgXUixCGQ44eBSDevAPZ9qtnxmu5",
  "key15": "3JPdEtW5Vszo6NHWSN3nE134yMTq6RAwDfNvrzAcJKZGHt7hx7EVDCwHy7VGkSdCXKSsqBQMw4gpx7oLUv5S7St9",
  "key16": "miD3qpbg7N9wHzng5YcEke6Mw4VAzfnTRKDoVAyL7aF744qf7HXpLs7WaKZnpJs4346U3JC5x2pbeEEKZmmpdnJ",
  "key17": "59LTxLk69MdWiYsusQuWi3nrbc5J777Xvr3QRaLjeikYy9bED6dzHbdSj2vAPF5dUEtg27FdfTinxUK9Z1RrECEP",
  "key18": "5xSB1SnVUYLJi6pZFrYqKBi9pvm3RyVQRNu1kDET6a1dvwif1DFrFhYeBEWf2vYM6wXc7K7w7bi7XRGYn6YD7qym",
  "key19": "5MwtRD2dQTgUuDWdTEUWSdUtb7yGUYL2aGz2PK5PnycRx29hoX3KeAHfxwwx9xd1CEgJ9obQ2uHjnLA6akTnP8L8",
  "key20": "4PpXwpzBnYtpNLCUKf7Tfxa5y3DhRajziE6xbHY772DHEc68MQpn1UoPcy3nryBJaf7WqtdgM62GmY4s7k8LarwP",
  "key21": "59YhnnwxykZsz7HPF2QDMHRNxNJXURMUZu8kUF6yY69VyLnwE5qDGWTvMe73nqJTmTRH8rJSAwZDuUjKSwffsPNp",
  "key22": "3ZGJDdDCvm56KzHsiHFov1z3bfm5bf3D7YSDbLPqJ87zq8M39bEskBSGPzUUp4cQGbezHuHr2aiMoGjz4LZmmUHC",
  "key23": "3uHXnEqD32o4zvBhZ3LETifebhd3Gty6EuHRiGRv1Zs9YCv8a7p4hMXwRdScrW2oj13DGY3eu5oHtWLqFkeLB172",
  "key24": "3hcdha6xEoJmQcRhHn1VnqgS85zerQSLJDt3cQo5uSMp3tcNVsstd5nDNpWNQBgSaVoc5m9tjd2G15yLmGHVBL8o",
  "key25": "2R23CaNPGNW9ZsTrBtN9bCDsPDx39y2Tf5cE9XxZYVvTS7jxfC7Xq4tJWCwWWhNM9XfE9QXS4YwvewR39xwMsyih",
  "key26": "5rx6CFmxGFy7FDxKVeehSLYngKtxhhBR5KFdHRTk9sX9UGQE2yQZAjM753xWE1SLqQTuEVfnbPpLnhmkuBMAZnCF",
  "key27": "4ifotwkfquqTuxUSFFMbxWkEu8tiUvbpNCvwvZEmsXPd3WqZgpdEYktLZkVMjGPnBGXLcygzKUjPZLDDNq5AuV99",
  "key28": "3so44FK5a62dk4PNWw7k8giZakcfWzWYHa9GyoR1Wya2ikBG2WvweTxWcQ2po5JjzcRxfTgduGQdH3Bv7cbBNzwB",
  "key29": "4sPDxKeQC8WQy2khpTppHGDXnKT2Dfhs9Hgqg5yinbPvSjUrRUgHnLCNixcaApiE7XRRTkqYPgjBFxdfVvNQuHEP"
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
