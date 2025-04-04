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
    "5N9zyNVeuqjKhtJA8Z3X5cpauBpGt8DjBZuYQbw2bvoM6TQcQCJBi94p24zHfTLxxhVa8CpQ5Y94Hv1UdFofWHMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jXBFJQK6NGBSw6ZFJ5wUuV27eNPMkJsbaURfvTiY9MXUL8Pt5rG5srmbNErDQTVEdYa4nchYZnmwXkUEDABGE32",
  "key1": "49xgT8uhQ2s6KKKtNj5xMZuQc5ayVdA6b7Q66Rw4RjHhbQPoqZJmJtebyHwQt4tg8t8ezExvL2hEmUfiHSU6ti6p",
  "key2": "44v64zTnCQ3AHz4nKTx7Q6Dd8c2ZBwuxcAbF2b3yyovsoEYAnoHmjAQZyBdhHfQpRcJ7rV9rAj9dcZPJFSnGZe5u",
  "key3": "4FmpiBsxgsVSMKvZS4GBwN3N6vjz17BMoXqCnKbsCRZ7DjW2uj788Si36jUR5E1mDZrdZJQN3zYqC1S84tVo8kR4",
  "key4": "2LPR8Bmn3iMM2cQEDeAMxMRm482tstLhDgubPo3vrKBV8WY86wuHqQue4V3q4qvus39Kusg649v9LWeZ9mSAGJ1G",
  "key5": "5j9NJKpfyfSUy4XfipMzZcuF7X2D2zaUAmPSD7GcrzmvtsFu7fnH9NX1hz7CgquL9rt4Yob3QLmNJ5wiGZ7Kvhff",
  "key6": "idaT17UjeKmfibdyM8oVxrGyuzJJQimHHXAPW1Db13s2pTyaDvQcvw5qbRrGsBCW6jd2VDC45Bf5XzwPJmEiUpg",
  "key7": "7A5bGE3cnookqvbhu7gD76hpxdLFpBaYiHBjSB6dXL31FXJAjLH2HDEZ7RNXNJnTeTvn43qw6JmbGR7N2qeLQt7",
  "key8": "PiXfyNQLrE9u5uLAR2rfM5UG2b1BPEWhGRD1uJ1kkBQzxtm8GSmy5ToC3RnsgvguWBbjvqDwM6EG1CL3zdEdGNY",
  "key9": "5PP5ZfmTwrd8nieDuBLi1GzvxHB3KovnnjWcMqM3Y5PRWp3oyDbuxykSRpBEoBu9VLqVigm7Vzb2H3xZAWv1Mmy",
  "key10": "4huCx29NwzuK1y4r4vXucbbDFapWGubjdA2GT8gQZCJp7mvNc7HDGy9u7dw7jQRutCBKgrochLCmYn7Si7xWwu4e",
  "key11": "3odiFD9DPrQ2RnKt3mtLky7Crh4dzjd9u8RHhTWj6a7HE1cvRQeFKvPX1maZWAkBvhMSa5tEHoYFZP13WQ73pSGr",
  "key12": "5v5SCgtvDN5iPYyHfTEAUbjmuAJdnsS2MsVUggNQbStbMmhfQG5yuLtBsAwCB5mNCvCHQqBB8ap91f4FeNM27HQH",
  "key13": "3BPaPaujCYVd3Rgf3VRmcvoJQjzCknNQrPsBMR6k7JgptPEgkDYCDUwWMUkgnq76Tgjga4pdf5WUBRRtk5zRdEt5",
  "key14": "3FSFby1zC5Tr5U9WF7XBt1Sm472SaqYPqLwdP9WK5JkuJwK7LwFjTxBmXRijH4uupMebr7tREhXsZFbsBBCo2HJA",
  "key15": "2xQGMEwU5y9TCVYkUEnkSgsRuAwZmKdc89eZrjwdKGsquXwRmQvgfApjyWZEbGG4gzYk9EnsUmbxx18ikSptCqqC",
  "key16": "2A1N6gr7zkkAdDPLqstjaZGn8BB92W6YFzmHDSrDBhQD3quZd3ap6EdagybPuNVaK9BcsMXmBHeWziprZU4SUTP4",
  "key17": "4NRRujnGedjXYj4Yu9cwBbK7b8cMKVVcjrNXVznA9zxiJKjeZMurWUbVtEhyc2idCGhG1ZJDQE4dVoU9VBuq2X5B",
  "key18": "4iEEcoUEHyvbNgQdj4jK3XkxBdbYwBo2erGBjYCH9dmoYrvLF17iXaN4JJSTYr2sHp77PcK46N9fRsjPEEAFzsrh",
  "key19": "3qvUy8oDKWKRbjsS9SPR3JgHTemWS5oR7XfSnsmfmYRXMfDzDqkU2mGDWCzroM1hj5cuCzFfSrjxe1fGL58WHwyi",
  "key20": "22nASdT6Rssqi7LevygrVncKDr9GVbu2ty5v1n5zTVXGqoLh97JApYREQmPLGkmYAUZiANCm6hsdZA2PRmVafwPP",
  "key21": "cvoUF8XQ2X4muLtoACjT4B27c6cRx62eSoMpXjD78YgnJGyumdym8V1iGx4krgHwpK49M9NvNBbeuMGAgC8PKCq",
  "key22": "3MPEYrbFcnWt8XueRzhk1Bayo3Du2SWvAKXE5hjXpoSqaaC9t6ndSuSjogeVv6gUdWQrC1TX81hJrDToPvAMVred",
  "key23": "5wx1wZe672Nxw5P5uaYwkxf4LxW6idcqxKcciwUThgPmqvnVQyLQoNL38CUcMGu5yWLa7FW2whZ2LGdqp6DzJVb8",
  "key24": "3vkbtfanrLWpJcmTf3yhWMuRFJwxR9smEEfuvEeNkyewrghBXteUfTYt9jSYEAqQJ2at2UNi43523dguMnDDLA13",
  "key25": "4x7CyeZe4L4zEs9UL2fVAxxvqdmtDS9peqAdF8hbFxosRZ4MMRDg4Zk426jNkyXbDJ65aPqawZUaZkXe3FXX2bcY",
  "key26": "5CdceQciAGppFF6S1xfwNKpAYGuq4K2kkQR9M2Bbee6vYw211s5iPF6wxfEkE748uaaYQQG1nZKQkRcmxzCcFEs2",
  "key27": "4idnCecLWZifA5V3hfMKZgpVvgkEAFeHVWpX4VNHz4HoAxvXJxT5EunKezJREWG68jMFb5hwWnLLRBg95RiNyvV8",
  "key28": "2rvx23MeBo3L6bfGJxSY7DNSKos6hq2pesvFXmdhYAsRGcqppWtLSFyphMmtr8GuDUz96PLxdnHrXWj2Sx3peDat",
  "key29": "2yLyydfpd8fAb4SehpH7NDGQTKYFbFNpciB9NDabEUTRjXKPMJooBCha5AYEdNM6ane9xrNmPRVUv14Vj9UMFAgj",
  "key30": "24ySjYayGVmdAcDF7Fj7uKX1SYdvBThc6GwTxQnsseGZRHFKSMnWLXL6tyTCZdrv8Sv9mYK1L2WNDRfvk1S9kEev",
  "key31": "CcW2fLCoTWUivvCLdWPffTkwaLEj8kpu2yhgudGXiQ6UdcnMbkU6Whhej1griAZ7smFbQEUv9DEEWmtXHn7W2J5",
  "key32": "5uKxNvWJnKTcrdPszmVNCs8dYEqndzK5yG7UhMYFg6p2mjPX5egGMyw2Leb4cxSoMec5RRAXo4niR4XUvcNzxFKw",
  "key33": "2BMU44RmkTLU1YhWWk6aabu68k3QGqpaRwXXZYyNK5Zfehmm8hpYsjPyXrvFout6Y1fKnCZA2CojuLxNNXcDfm3p",
  "key34": "1um7LACVsNBNfnKvt57m3xeuCPJ4imLhFsUN5P8mu6YfNV1jJcpqy1ivWjBWinWGrym9UL9jkKvb1bec1WNuL5J",
  "key35": "NNUue7yxBAL2H8gjKXQT8gZHCZ8Wv55Zxtsk85mXHSx67rVKnt6Kg9RbMBbA8Xfd9TyCi2zTqT5vtZEVF9FvGcr",
  "key36": "3ygdh43EipWMBgwZMBCoqxLozoPs8h9amgU7e5aFBmcPaez4TTWxqoXie8mLigX1BspBaHr1hYQymE2DnEbBHubZ",
  "key37": "HrvVLmYdz8enzxWo5XZ63KyXPgPAKA198u1MnuiermbFKGbzPmGrQhubXpJqKYhxhNp9b1jNHdvd4eahWuMDS4Q"
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
