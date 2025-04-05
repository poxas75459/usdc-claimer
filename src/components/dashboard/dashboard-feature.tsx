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
    "RUZsvVho5L9DBPDFHGzrJna3ykwaKinx5TD5cr5qvC5vFp8v6n4o3Jr9x89KqSL9b6XnGAqvkZ83TgLtvD9oJjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q723y7YVfaWfFXdQrCScpN5AGcMq2a6MQzwHTiu8Esays57kZf931FJC3RQMcfTgWR9SExy8p6MU58HuJwgmyDB",
  "key1": "4uPqELEcFr8H1brc7ixqUd9haTpyqqApvLM9PmSzpDUrfz8YyKkEv3Mf3322DENGYboxG2RzPi1MmKkYnyS5sP5m",
  "key2": "nVHKqo8mKkEd7a8DRfCJWawTWBMzqCujGqpfks32t4R3u51inknWvTLnUtasPMkQoZVAL7i1hEDZcrsnpPWGxiC",
  "key3": "scsXewXZN4ZYjpJtuGaAc7y8JmAJZVE4fZ5AY4WQXYLx7gLrErUPSxswZAsMiRvL8cCh7HsRUXospfVt75gZCXT",
  "key4": "21jiPAvQednt7YSgPSNkBpLuaptcbe9cBAzfVK8jtQafCQM3BY48azLKZv8Mn5PAT1cRsHzP96XMPWpSRchM4kb7",
  "key5": "3LQKtWLmkfNcD11y2EdXwQ3FhVrTr4Rkh8SYATYXjZrJFGVgvqoQ2LaydMK21wcrU19tjDv1WhB1i6orNvE9nspo",
  "key6": "4AYeDEdfS4dXpDWMA9monFYKRZnz4CKHrdMqei1WsQsJemfKhmTU95QSRB7eV2XcPUgdKrqCBXQ6JnsFHRcp68f6",
  "key7": "2RjwL6UGU6E7zGVGF1gzRXsVWgQNDW5YeUZxf2QMmQFPQeTJZrWP7yJuFMNbWbKw2c1pMpYyYLjgkvLrsKTUrgri",
  "key8": "2BGm58q4aGTCxqo2Yp8SwoHQUweK3gKuuLwqeVnPyyBwDC9BQEE5BpWfDFdcaW4xcgqsSC3TsLj5ENDeJGnp39iX",
  "key9": "4opSUnnLxz3PmvDpqmSkT6jWF642ygPtKWGZbxfxDUk8pEeHJqt7JrhMxh8sWSq33nw8HNd93YGcKN3sqh6JGXmS",
  "key10": "66heWvfWgRYikz73ARxQK6dY6vux1E7iJiUK197EFC6g482gCZZhFNsJR3STTYEiA4iZvef3wkrcijusvQmJYSjp",
  "key11": "4AuvLEMALS1eGDTmubxVKSa1mRioNP3RW4YmwJ2KQCNgVeW4BPSNTZGaZHkJUJxijeQviCSSCXJn2Uzo4Cnxzs4M",
  "key12": "66GNs8FidoWjaW3KPRqKQ6uiMUvBZezYYgRnR9i5CdxvsE8DaaQb8GZJXGeW9XucNfoFRRKqEWXejeBbXkEFnxKA",
  "key13": "5tQpnqDzms9ffDY1ydLfrWmzMYsa4X4uMB5WtgAeEgVb97jC3uHEAa3dwBS74cbDDy9JYgvqqnFWqk75PgffpcE8",
  "key14": "rikuz4uU41dgv15jxtJ8snbe6wcZeSWbPHb4TE5SeErQkF99A2EpMTDXeBLzi9UT4fuLYjwLKcTQMjU38HZs9Vq",
  "key15": "3WRypmQ7WzEqRsaKsJtExgpY8FGPHszVq8ft9gfDfsFRUfSn5Lnf2kcHEq9CiqRFycnDZNWGgh3inDxAausHJzcr",
  "key16": "bM9tuohvAEKLjzkuxLYeYhoxrjWhrSKNHWaWawaEbWSVjZPwBPVKPo2g1b9yEk8rz2PuxZ32io6ZaPCZoJRDwfD",
  "key17": "BsE8ZamvSirScTxaBoGr6mwaivqfP1rs7ym6Hz8oBLBNtY5T9rAeTV3pV1H5SVgZK8mAy6w8Q2XRcjFkF7GKYiY",
  "key18": "DU7gT7Wb167em9xFacPy7s2PyH3wcfoVZKebyHZuSQKfNZPFiHNzbqGT3Bv6HFE3Kg8NZHhjSVcHBLiTuXMkTcR",
  "key19": "TqGdP6jjk2mLJSe4JZAV6TRAeMLmha3J6mZsCTR9pvgfoxtW7RzhBq6xBGHZyMxBqgzw1hsmZ5z5xymDeaRxSRk",
  "key20": "2aAiSeHGTVrsoeQrg4AxTEihdwhtJWnnypD75L6FYnLg4yvkHtmpNqYQGskF3nTYTo1pvECFcBVFPDWbdGSuzPp6",
  "key21": "2u5EzZDmhayPcgN73xGy3wSv3cVg76sBXM7hgMRWku9B323ZXsWgQ3tttYXruZXZEY7cUFrhJVaCDoknN4eNnmSx",
  "key22": "5pepk15wgvWmfnw1sQtfKpHbj5W28VRm63Rbt4nmE6mMAJEV1Zd3zyZTZKxvZGcyW89y9RAbFtmRpoHRYCWMpGHR",
  "key23": "4kiQyY4MqPSg3MVHK5hPKLFrL4s5kNVJJeAG324k4wZRkWVEzw5tm5vYFkYNCMTXeVbPtHHJS7XuJ8HPREcqGiqN",
  "key24": "4BDb5TryAPef3NBMY51qmbTMvsCSaS1gGBCwggRYsQRYZMnVcotADciJUgrVbGEZ69SuhjWppNyBkGG7qmLaX258",
  "key25": "3ouu3Z6jXKsJGiBW9WAqH3eSQX25q8zdbRn7MWAKecZX7tbh15wef5hdyVffKuwkBCgdgYsNwf65L4BLLmdG8w5H",
  "key26": "LApV3BmTN3C2vFdfBt5iNuGCbh1xbHexK2HwVLWJB7nVWKaSuBzUFJhZjYAxE3p91FEQA2Ljg1aWHEynDe8nHUu",
  "key27": "32kF7NQpDdHzvxXMdbu2YPhTmYi8YXMpHsdnkBRaisakK6zjdp4PYKhH4vNVcx3BbSUCj3wXUPBZLsJw32RQg1iz",
  "key28": "42vyftDGxJrKs8DnTYFAcUzzUMrEYSeau7CvYar37wQ7nU5Hc2TcVxqJSiMqNGSpb3Ssi3Ti51xEfxL9GwSpLf6C",
  "key29": "Pit87TLJjct7TNaKJMTaqgfMQCQ8zL4U4qqpC4eCZfoFUrB4EfvDMWJkLPt5MkYhzChgTt8FDm1qekFSAGoJ2rD",
  "key30": "54W1ByVGrN1ACXHs9Jf9QmcHtmbq1QD7ADyEX4u2y9dHXQEw95QqxZfRF5dxTKNumNiokxEkqyz75FEYSuEYEvrN",
  "key31": "CUMVjtSzk6mvsrtdtqdXnivkES7dDJHrfHzPfkV9LMKEz6CfMsJmaA6RgyAvPuZpCumnW5cZGqjUVLHXi1VEP3p",
  "key32": "2phXPLWCthRpdv24yaw8h7rodBX3DK9QcMXDKDp9nmeX8v1mYmLYgMrZSwV9L5nFz3ndstBfY5kTBgBtpwHfqCG3",
  "key33": "4YEzikhC5sMrFvwtMtggLFp2cTn4hYrbTbqch6ceC9rsVJNmYmojXYDwZkt8oeCERz7QNcSAfF5rZ3sZRMMq7tcu",
  "key34": "ntJZEqGzGypmRpAKTzQjovcUs18Qh9bL9HrJTGwt1om17DNvxcuNNnJWAFjrdRC3L9MnRh8svLZQhCEKfZNRQdr",
  "key35": "JZ4r2tZnEWoh8rGhrhjMzeiCVoxcexYLndD7wyyq5mRq8zd8Krwz9EcDZNMGGTKn8mHxFTThEbum2ph1tWJWKgx",
  "key36": "4aGtAQ4xonF2wtFD5Bmx96nEWnap4zUAm9K2JJ5sSCRXVwaTYxrg8MedgjsjoEDWXpLb6uB2FaYbf8MDxd2kHKSc",
  "key37": "Bn2p7Ws7uY7DULp5ZMzbtjps9Wv78uPbLkB7kxYmqNeNpuRUpUwkEBfwJ9DccmcBy6ETjqSU3hwz43Ea1Bt4BLn",
  "key38": "55pBqwbcYSAsop9igchu4Q2AgQuvjpvfYLMM9atPvnqnwaPxkeLgqwF2P9Mxj71LizN3W9Rxs4NroSKHPy9U5J7j",
  "key39": "5VfCwErTBASHxdkLMZi5CH4jEYczt5a2KpTbte7YqEwFSGJYwPnsYtonKWhNaTRL6RH6cjFhS5k46aQeEbk8t1sE",
  "key40": "3C1zcV6SUDJZs444LMsdtZN5VgYobZifmQFppvxQk41JHFQXzUvzXFY3vnnaH2G1wyL5mjgfGQbPNAGiVXPfDYBR",
  "key41": "4ViS3TsbgAWNvM2q2P5AfQTzjJatanHgtx2FDZSeP4ZFCQfRxMsaXyKAioo2gcagc89Zu2V58qFkL5EeJqphWYjz",
  "key42": "2XuXTdWtMUP7RowrLdKbZC5jXUUaSK7hD6A8f3hdt13ByFiNyJYPnYg2zkjagY8bCv57CKyT6gnNxWJqhdqKHRmj",
  "key43": "Ua2XDgtNPonWADYoNq15RkvfsBeUPFHeyMqY1zavo7TzX5Z4my6y1HMoFC3YaTmGRywj1urpPU1uKncGkUVCtib",
  "key44": "4M61GvARKo1vTQNFTgji5BynDLrNovRG6hPiPcmoDboyY12GLtWSYyLaKezG6zmkoHNvEyaQaKQ1Qya5UBdyjxVy"
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
