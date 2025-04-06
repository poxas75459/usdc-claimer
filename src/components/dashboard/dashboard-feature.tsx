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
    "4J2uLZCW1sLN1d5dY8McSSC7Pz9RuWdbZBKJkRV3J4GBRDvoPJfNxssXt6aFgt8gJb2gvnxbtgpxWM9gU1vv7b63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zAe6xkgZZCe1t3pcg32ujrBZBENwTfycBzoFoNr2TfUQekusi93X8bw7SAd2rs6zeE5awKMU3Vhm5pTShg1WA4P",
  "key1": "xgjAem8Am2eLtBe5Nx4SJJVXQgwEge9YPGRsiMJoYve18RWFM9Y5FUS1Wxw58iRnXKnUbPvK9eAwTvmQSVnfNpD",
  "key2": "uyyRQK9zbQ23JcfKLcAExKeZP48VDX9hSaC5YMautyLaWcVMBTzAi2y1Cp7sMVTegeo8Y8g7Xn7MAu4c893VUSp",
  "key3": "5kjexsCJJ6QEbjQyqGVQMPsJ25QkYaAjXqFBYX8nKs5wJyaBMvYX9hZgbi6Faa6ar8gy56abiPQcztKpjka29w6R",
  "key4": "4kPbZMqnpL8xd6nLG19tDRuZtjU5Urt2zYjxErzNpc3Mj7wube7uDhbhaypbj2843Uv2ya61jDgDyZL77jccV17",
  "key5": "5tWmnJCxbCxjybXz8SPUTx4FDWkCmfjEKYpCkY935CJRKc5ipWu3mQMDqpASrHcyRebFeoSa6PuB4U4UNfamoiQV",
  "key6": "5fK7MA9mcdQZdRPgXJae2y5W7LAT3UQPMdpGffQJG6HMaN6gYr69VkPjk3c63ikhVBGinZHQsVyHKsFWgpVzaGcZ",
  "key7": "2W5CkiqfQ5CKTLdkNJ3sj235wq9pgTEqpqLDF6DgSX13X4G78q5U66T1Kh2cZ4dYB3py8roSgQbjFKbVv6Lo4Vc2",
  "key8": "xo4Zy9xfNszPmayBYXqQeyncV5sLN5Cf1qFxErMvtf8du7Qi112HKHveZ55MUGjM2KdfGhnFt61pj7MvicxamY4",
  "key9": "4RMjVFoqpdVuZrf5UPvtGErGY9ENc3jnzps5RWxAXHyz14Tg6kkML9BEKwbNx6r7EP4EXcv6KB8w8PhV9csNtwuL",
  "key10": "ZAUnxYJCsU2kCQPtcSNonU69NcKKabMKqXHid7WSq75ev1hBMHUrMWQGCdRhZWb9EWTDkm2aEfkcU7BWh11JFy5",
  "key11": "oL5Gk3JXUKqVyuFG1QuzGTKs8kzeuy97MDA7QUVEvawaUvq2jwMetiQZMWtvWNrDPU6vkW4Zz8Mk1vpQM12mgXp",
  "key12": "66KJK38CUCrV7Yts5Y7tTioAtC2TsZAoVc83W8ySGeLskGSkqcpTVxYvZXqqK5VRcfR9EyrYxeEU6cQJaTFtGExq",
  "key13": "Vme4Vdmw42Lu1uJe2bPNmevCTPkbPcxp5ufWmkoTrBERQm33js84VdGLL8G5qLfd6XgKi2PeGGVhQdL5fQu55sp",
  "key14": "27wmisxZt3xkRXkKvJFSw1wW4eYCgUuBYPiYXLeD5F7oYjjRkpb7Pj7Pdoto2wxTGbruvmgcnkuoFyQG9kpmwTWJ",
  "key15": "2vB4Ryba5y4SS5yZRNcGfsBAKTMv6k5ktxtkLCkiFDPPQbeRCGwLKW8L4xswxUrSaxffQLuazPaHXaVvgUnNq1L7",
  "key16": "47pUSgXJZa8EDo1B8bDfVnULQJ7iGTsE7VMjmjBJyY35D6r9GtPbiGCWbgsKihZ2f9BHWTzcnpNafQyHReA8izsY",
  "key17": "4ucGPXEMZxRN2xJoAzjAjvN4zpXS5isuGSNZ8hSAW7pKFuzZWpbMEgwPvVcVe66wZYTdCpUCokoJc73qHgtjqt2b",
  "key18": "65kn3g3EVdsbT9GvrreJ5rH4AbzQ2qLyKEshckZdEBxZVygVLSb43MCoT14a3FYDyBxbep7z3gUVrWeCbqdXBZrJ",
  "key19": "3cqeLhfvZTaRoS8nzNVDPBCVNyy8CpS1csSEhWPAWeH99k3J7zWfWpdujwgjHM4JwYnbEzG3UedeuZjaVN5MPoZH",
  "key20": "q5PscZFA1uFuxta1yGhBcrVb36cSD58d7Ji1xahteVow8tYh6nzwqYDpdjCjUAZCTxZXgp7kD4aritsUCGuuoTn",
  "key21": "3EGF8xGPAQiYrSyQhNxquU78qBxWDCHexqjthi3kyG1YApcpBHpqNzcuGWLzfkKUDjxA2NtnKDyyyo1dpGyPQUQN",
  "key22": "43THHf8bZtL8ezVDrYvooCyX63pTDEJf4EdG2xoe5svKSvTi9ufJphT7vWv2R6qgmGteK313CGNJk5wEEe55tD2c",
  "key23": "3GMPcAqGKxGLArqv1P6GvRyKbHzmu4ardde42GCE88cw8dZhw71hFikqK3eMYGsNuUWBHVH6PC4rrtsQYFgqc2nG",
  "key24": "5snKfPJ55jVHWn4xeesVybNHnQ6MCmA7PPj9S2Jz82E1QqcQQCAizFU9VdqPnKSYAMm6CJzJUx93dxML24aXfWnx",
  "key25": "MFJw1XpLY68cHtVQ4inaJffjaZuyp81DAdQT4TrGJHEQGDkuXma9JhNkzB6NuEp3CAaT4ec8UvWH4wATd2Ykvdo",
  "key26": "8L2d1ukMSkEKgK2oMcUdDXgRC5RPs2tjNfu6vQ3nZQ5o2fPqx2uBXHAPwHJHjMmdGdX1PVqnMzh86GmJLKGoEnx",
  "key27": "27LU4YuMQCoJ4s3oejPmCYMn9N2za8ZKbv3BaFo8DAM6acZ7AHmzxFFbMNSxm75BrGrEgVESxfxemULwE4cSFbhX",
  "key28": "4dtxkmRUnFPsLf1MNdcxCbE6fenECVxdikPVbgiSkAAg7XD5QfxK1kN5tPAU5e986nFBvByGXyXmZ9zyuWCN6Hxz",
  "key29": "mUdh8rUv1w463ajmU1rexkEMxLQnx6pZnJub9FKB6dyZtrzEGzYURnv3dKX6ni3JLywjric438aszXq4cei36QK"
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
