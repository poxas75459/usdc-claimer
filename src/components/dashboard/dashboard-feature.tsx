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
    "2Q2nWDhcjM472QYZ31FnEPHEv4g4tY75bWjWt169SSRauXiBKXqtxb5dL8iHRQb8SyuLDwntw3uv9m4AFmRuVYmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d6dbJDx7eyFx6w74BLgiQEXxTC6N7xZRiJWDpanoFNzB2oqLpfJMHkqbvH3kh3Z8A6gE5461jRff1QycQ4eQsDc",
  "key1": "4aykA3QH7hqUnuiyMowPcBaoaw3zRgtBRkE52G6bR13FvcHi7ZzhjJaCp7hDKGA1bU5oNZJ6j95XQtgqqkoFdq5o",
  "key2": "2cVHizSS2jW3p7LaVKbzyDnJ47MrxRSvcMhTF8c2QditTNzXDoh9VG5bY9zRTHxHbgbX6sNWxbfVU5rWn5yXFaiP",
  "key3": "3RBqkjktY6Q4L318SR7weqsTLxu3pHcs6aJiiRiH5P55TYPmamBUzhyuDwMFsfVvJjtBn4DzFb9g82zjLJYFqkuj",
  "key4": "1g7gCSoVp6n4TpWj5d55uhyWB5d9FxRkeRPCJ5LDbBP8BC8PW5yw59HgGuenMpeStbcyE9mPaeUpbXHTo46HjzK",
  "key5": "2JzcT3gK4Epy28WVdJN2b5Krq6eoBe4sBUZWLC7yiFUtgkmrtvQPhes3gM3GdLY6QwyszXW3keNpaEtjPngtRgeq",
  "key6": "62Q4ReDCUhzAyWshsVpesxF4vN4QJwXvL2PPVVYxPQRBoyrpkoWGTdd2eM57AMC1bHinqsu2Vk6pAcDPps6PuQYu",
  "key7": "3PTNtQY87HLd7vpfZvJXuhFRppDaifRzbYrVpkqEL2CoKVGew71NyK8LuF6mvfy1ifRmSEp1UcG3DWKM6PU6nVbM",
  "key8": "cQukzc31D1BrhuGmTCe3CwCELU4uPvQa39aQQ8igQ8ybAJo2kgSmrS5PwMMwtoYVuQasqcq1rnDKuNNpNrFXq9k",
  "key9": "644rmgWRruVUGSomqKq2ewLqTeqfJorqRoFZoAntNLVfuHrnt5SKd6pTiW26u5VZvmY2WCvqTjdjTrm1ycTyoqbo",
  "key10": "N83nJG5P9VCRu4zEq68Kw4W9jm9BmuNmNbd1a5tJ3YDduMuLyphaRnVxCMWZ5hdwCfZkGRj5h1gFYXdzFgPDhDv",
  "key11": "4KeNaqvC9hKoduEQovVfw9bU4EhERGjMffWnu9mbK5KjjLSZSvxLbP11purfZuFycpf3CsFN6fR3HUaqJMVUECud",
  "key12": "8MKvg3J6NFwEza7bpuDcz9BoqtAV5WPssDUtGAfnK6nYd1GNbJaQDXvxAzVgD58fvPJyNX22pAaJp3KGJkJnkyT",
  "key13": "4bVQcxbCsSMvE1p7igZ7qUq5Q1Yd1LqLJkxVL8kTJPC7U324eRkzJYuNBmBojU89SdDw682tLkZKeuaacDQj3eg9",
  "key14": "5CyDxuKQ6EbSeeQuDzvwhVp991aQggALhJZoNyS6d21Q5yzy8zXmPvgJTD5vJxzG7TvCBk8PRCJCNtXNWStDm3bN",
  "key15": "52RPbmBdXDbgy844ReLsmMotVugWgc3h9gi7vP5QvbU2VJqnTkGiAWba1gLhq7deHs1P8bsdadAnZ45g72pqxt4c",
  "key16": "3ceVmTX5x6nAfBjXoTHShNj3isk1uSDovpkyHjkpUzFerqRG4M1aHZ9qzy9ZxYaqYQXxGCCPaDkmwdBZ5eiPgkA8",
  "key17": "R7spkQ2CabqHdeXcDEv1BkEqN56VBkPCsmNATXVe45RmXmaUhXBeYUp7L9bs4gS2HkfcvU5oLj5f1TzYaXTGU6u",
  "key18": "4TAL9R6YddpG9K9nENp91ZuzLevQT1zG7uBnmvE2a92TcEsGBjs3gVauTPT5Q3JMT5Syck72JCFzb7464gsw96tV",
  "key19": "3WMDed3XSrgMfdkTnGWFmjRkdMyHnceV1tBNxGHmp8oXfUbi4atCP2kTgEvpispmGbVKHJtqKBCugk7YzJ5LxWwL",
  "key20": "1NJi6SS2Rd1mc5tnEVabKGTrHAQQjud8cbZZVWYi31kQ14sQQU43MCk17MN23py4orWR5S2NzhgQU9VF3wBYZCN",
  "key21": "4MisY94MEWXahCaESMHLTSiiWbDJ7cApFHkWG5tYcx1BPWCDpGkdZQ2QYjGEpBPhWS34zRF4vqLDQUPBF9HxdvMt",
  "key22": "2t76mBsTnNNgxsFiY7D2AFLKpyU5QjD6M63vHd4fPX98PcL8ZVTZbBFEy9JrCY2p1zaYziywVgLg8mB2i4A6rkyx",
  "key23": "9ehfGwFBfknRUqYhsUdr3GJn7Yq1PzzcXR48fWYkNEAvhyUqsL7vj7cSQ6PcUS9xijczjD89HkxDi2J3T7KVaDA",
  "key24": "2wr8ua1LWfM8SsU3hjrgG2kXmxNNCfZMxd2aGpGNPXGd1N1PGoc9deeHxA7idSQ5CtsRCo9u81hYDTPt3Yv9Khcr",
  "key25": "2wUyrtHNn29h87LvB7tnjKu3gbxaW1CaTHKz1S9dfMduFiiM78eab32RWJpsfUhmhu23Z6ssnjn1gBQmKV7nxa9K",
  "key26": "GouWUhZ4ArHwFsmAENjyaeB591dMxsN7KmQUNVLzWnmUXgWvdLden1X8gpMfBwi3ZZvdAajQLUcfHeQnoo7yDJm",
  "key27": "576RRxhrd3GeubaS3z2MJGSN4rP9cbxBH1W2FoCoU6SKwiR1thdfw9ZUJu1m47AKcayN2n4dLaArmtmR1xTijXw7",
  "key28": "5EjDQKQDasGYu1aziLtQYFKWHj6eA13d8siTp8cgNXAarXoZQgN7F5Mq2L1h998NwPQUQ7a7mcBP2ZL5bqFN9BQz",
  "key29": "HSSqNUCWMjpP8h26otMBDxDTW9fTotNQ2LiXXJPFBxUjRhZvhfx1yzwAGrvJ1eCxU41gMSEme26ggrVVUbCYpDg",
  "key30": "3eYrJsPNeKLAgekPJxdt6CFLGTsGVRxLevpRfZMX6ZNQoiQqh4Gn4GLuPTKP7S9eT5vVoEE24QA166CUmTdH4Bq2",
  "key31": "3KJR7h7zd2HgG75SgbJRQpQ8TWmERgvebKzMfeFkpS1WUyn8K6smBnVUWxLEcb1eacV6ZgZAvcEsCMcub6FwrMCy",
  "key32": "2T63LyPgdjYLQvDWFaKXhMzT2dRC42MJE56j9NTpUjCyBRiFLuZoznXwqYCoNP3ZoB7qWkxMXV46egoENybr9Nbm",
  "key33": "eUP6CVhWpzqWS8koPLL6vMX44R5GwohbYSUpRupfW9S26ZiLii6j9pav3aXf5zVmJvqRJXfL83tuCRrBNk4DoYM",
  "key34": "5RUauChCjzpY7V1dQdct8pX3tstvfk5nxdYt4roWg5xWXQKW4CcNyAULPiiFqp6Y7HBo6owQDkBUgRB2vKG4QQJR",
  "key35": "3Qjp2n1LiYpivUyWQuX6BAijD4uDMUCWEbCaD1mft8SwSdJh6xEDJdArGTT7bpTDcL3QzWfBQypn2YnQcsqhY4fs",
  "key36": "4ewhmj52YxK86QCN343GLLbxPbbcAuyMNhx6BwE72iKb6WYwHv7vQuWZC2frKpQrnEjiJUYQzqjscwCbxFgE8uRP",
  "key37": "Y8B5LM5B4sAK94u8pK63gfMT5KRjQktqP54SakvEkJ1CECFmjewjJtSCJCtE777XkZinXnHPKibM2Ngc2kLHSUr"
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
