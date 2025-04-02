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
    "56qi98fmeFT3VquC7RnKUAVgLWfBzGx7n66B7qn4GLXwBjrYA7NpvSKwyvvpVq1eA9LKRke8yLnmmqXotZX5RgfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c7Cre4QS5Zwpr4YfiZnrzGJwKsBy1MqgMJwMDe36tuS8xPqyrYX7cbdFbyS9kAMSMQzoaaD5mUfey2WgsEdhRiw",
  "key1": "28UaxrsqEGeRA6kvFdcDMTdbMuf27v3vjECd3ShPa22JNGDLgyxfJxbSPmtCKaEoyp1MpaanVE4g1b8HM1XMDUZe",
  "key2": "4NhepXqySY5QMFBPKrYm4iBErLsDop1FuU5jdQueFFpCVxuVYMGEdz5nuqhMbuHdc44VxQYsGoeRReAsM7re2XME",
  "key3": "eMkkN7xCJLcQkWH6unaYCqfRtJ4SCEreGLQCsA96fg43EA4xpryAtvgRvV4KbVryg47WEsMqZjp31HgoWujtCS6",
  "key4": "3RBTKZZDravAbGbHLwXCDhGeGQd6VVHF44arLP27ETFA1QNxWXmrGaBit8y1GCamYv7XswB1kDnRSq5a9X4k5Mp1",
  "key5": "3jjt1h7WnNu5CWWqHbYCEpfDJ4N8w6VKgd7vJwHtjUij8cKkFTjQ2qaUZTJsi4Q5gB5vNsB7TRJDWoinPtnEg6Yz",
  "key6": "xLNDCGzXJW2v7dcJGn3JF8DPFzHbMLvyuPgCBe2Au2g22oEt5wjfQSeagkUWkEFUWiEaog11tBoC2bMhH8yAs2C",
  "key7": "4GW3AHVg2pepHCdsVConc6Sg2mF4nLagJsuqhHi35Dd3JGLZNGjHnNhDxTWvsxAt5ozv54BwXkaZei3KuWrJbLAK",
  "key8": "457evP8Crqg5RrF3nxYQi5exYyW5mWbHoVhJF5AKanEmN85yuyxmk4SVHg76Tk4VhVYJf1zyHwYNtMNSirDsT8za",
  "key9": "4x6akFiBzn9DJj7hhneZ7nAnNupcnUTerQdXQvYrBhmJDcW1DVSv7GyEuCHHKPpypnj7fhCTGBmzsGMuCURbjzSt",
  "key10": "2KDBodRLoG6wFegcpVxkwdUYdrUYgmxXYTNcqzrnPKga2ttFoAhxidrjArSwQr36RXUUKC38Uf1AuzpoBJuFwa7F",
  "key11": "21qxYQs4ZkDrD34oYcdzXejmp38hevYiXQfYopnmt3KvFRoDDt1U8GtHmLufoySYk83yZfRP4QTQQfWvsMUTo5ju",
  "key12": "3Zoupz6p3ajeCWrSoyyfA9koaZGSL99GJM5z7yBMypnPNrQfrm3Ypatpvx9FBu6NcJGxwiD33W8AmkUL81TmmUJn",
  "key13": "4MYWzMn8qxNvULE9oQVvAjdi7owUocUysufLfLTu1RPyvV2seo1jnL19BsZK81jFSKA7PoriBDgYeDrnHfKPBdU4",
  "key14": "4TC3WmfWtDmkpzrQTiwrd5GLnu96ewSqDguL1kSZPnJ34AdufwWDwHi8cZaxg1nQnoTmAceugUddh18Nfm2PBSh4",
  "key15": "4dNZRiRVD2Bec9CHMa2j27YtQTeUkH5i56JRyAJZbHtfMNyTRvcUrWyxx1LV9u6UbebLQmLduDAY2Zv2wfgzN94D",
  "key16": "4PKnRhTLvqieGpp9wcDgvwpPDeaJvopXbdZzAyuPV6uHi2T288WVhL8sM74H5bTvvc7iF7AgJwhaZrEocr6Scxfi",
  "key17": "2qpBwRNWxZrpVjLYFe8d1AgRxjb7KpYPQHjzhMzVF4a6fkewWVPJJMNaBKDRr6cgf4iMy7NHTN2QXQ3VsnfC58tc",
  "key18": "2coZHb3TrAd32gVYPgwKr5nPNfgU4CnDrR2Jji8v9KAchBG2h4k9gVbn6wGgKNPMK8GUnNdCZoBoZ45oVks9miaG",
  "key19": "3AG6uuorShoyntYBEWjPNzj2NhmDhq9aAnUX99qwcpr6vsx7yNu6qdZc1Wd1GNVLyhFuUyTgZrBwc3KV4TEroJ5L",
  "key20": "37U62SFP2ZSdUmiTPu4v4ZnNvedxAQSrj9L3j3BQ5SzedtvFCk2xZVn9gwtD7wN8N4gSFzM74owukS1gVcCpgPru",
  "key21": "2fHoqYvQjZ5Bs36VbPBzcCGLsgLiLjQst3oMXvrERHfoQBHmgHxL38HGzR11EWzPo9VwfEtgJyYqY4XgaZGwRzWa",
  "key22": "2eojiog1jhdG1itZ9RWJtZ47igXBVxBgqWzHc7YZ8tiT79uNwHFqXcTMgwYckMNYBAXrn7nxVzJBwyzGFHJBiSYa",
  "key23": "bCSXpazQkc24inqVjnhvQ2p1NR1ZgtE4fn16jXcLyDA6azbCJzuHjM25LoV6xpNf1koWKWKSd7S85zVyh3FooVo",
  "key24": "3tty7tv2C6F1moizq2fQMsQcodmhMfCPnyaBXSRTq6H6eVDRo12uYmQRHzF9WdAbEUEUuPYqJcqGFV8FtsjEzz3W",
  "key25": "39VrvWQuguW4AQNDLGUPTuvHMFe2PtTVMKGriHxXfY9bkX4GfRB2zK8AGvMYSWVdqXodpg6yW9Tfmrw6m4PLZSZ4",
  "key26": "2EGjb1fFYqmeET97VPJ6LgS8qdSnmKeHjPHXTRJcmrAx259CXuKiFyiPtmmqsUwyqBxtkeSD7vcCv1mXAzEjGwz8",
  "key27": "4KsgFcwdbTBsqHPeW3tcdy9a9LWAmcbdgMCtr1G6j3LUVyqVp4YoUqawq7jLWtJp5cSELGpLxzuKY68A1xBTYt8u",
  "key28": "5Xh1LNksriqB6XomjgjksTDp4CuCdR6hdBNfjaMuc2AVV3sww3pxLPVxEMEsdF3Mfo17VBvfV8t6sukgwQoE8NVm",
  "key29": "5LRrukDYkbe8RSKbBLAhpQVEwsySzWcYUBT8pJ3QFtwsKq8vyWrkFeBqeoJVYDRViXsPdkzUhqYY9epEJF5XoReG"
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
