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
    "2Fzr8KYFDanWtrRpRfQ8bVPzP32AyPnkzvXZ3H3HBFXjjCNp1H749y1EEBuYfT1fKsWZuyCf1B9VL1a7SynjAb2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NFeWbwdFyRDwkoE3sAabU5XimSvW3vv32amcGWU7rbZGfKba4Up8jNA2GyeAiBqi89cALkp6kjHkR13imKTvdja",
  "key1": "4mruhWjUQ76AXqjkVxCcUg4grbEZ2v715gXcZh8UZDKnEpxFq5fnXu7oNqsUXmPvrmy2PuV4uCmpq67LxwuTruHg",
  "key2": "5wx1Qmff4rTrt5tW65eUW9zZ3kYFNUkzJ16sceCxk9YYW3uQCSrpT6GSvVT7FX9vMJbtbhArwsB4s4W9zE1PzEx9",
  "key3": "4sHPapD3QShRmQvxShm6qxj6E4qpz5UosTv2bkb2P2okjqTxhz2Uzb8tv7RvCqnQGEgiB5oRW1r59Ci4HpBVTUrj",
  "key4": "2MDSNqwUs1ScTQKtZ7SsksWvZVDLD1FAgE6br99yw5Qn5ZWfz9NXgY1mPGZ6sQ5cmv4MmJyggM11at7FtZwd2rQo",
  "key5": "2dUedqrDF574rVs1RSP5E99YvZdToJ11AyXsNpq8oMV1r8XQqKGgEr7tYYLNy2THLi1jizwugaXCckMZi7E38jUd",
  "key6": "jDBbGgVEsQKiK4gXD4DMLxPHnjoiSAJHTrU9eeq2kjgucAfeBxYGD2gb3FZrVc9jLFMUWPUCqtXWf3f8gLqNwoq",
  "key7": "4NZt1y7NrYTPxFXYRQXDyqMrXpAGfSTbS1hgjCQ1JaBabPsVAemrrokQrZWf97UniCzq8mQpjQ2LfaoAcRh8JNSG",
  "key8": "49SuPYZ5ig8Tn32vvBut3HGhgccLroNAW9rADFjrmCKCdyUoFQhU3fQqZmLVdvbFxY9HAA9PaZS5ppqP7on2tHNL",
  "key9": "2r9DSKxgKvcbhR8rz28ko2nFCHDmuJzRyY8V5wkLZGGhxCFh2fdS9comrrtDgnkPF8eP2z33kud4xHRxKrr6yAGA",
  "key10": "nJ6nEP8YV54YpBgSWNixLUqUCW6XCbUrZQYQHhhPmNReeVU8dEXkmPRGrfm5r58De8xZxPmFTfXFkafomV6XvF6",
  "key11": "3L8d3oGCgKVR1zDePjBJQLiUn3nN9uaWi65WTGknsd15LQtZzqHx5sjg2S1BhC8qpyC9J5W4YeTFebzwwJeFxsyp",
  "key12": "5EAtyRiBqRN3br1hMcDeN5yoQx25WvrvDqfUSNSNA885ehRr19YeVKZHj4Ep3xDRAT6r4P4Qt9hPoR4LgzB7GdDP",
  "key13": "3ZGn5e5vbm3V3MkViQ1E6Sp3uoB9mnw9LD9bFXfpy2Tp9C3xFAqdZBv7FZ3Z6LPazwy7qRKBcMNHtzSPxzpnVHrp",
  "key14": "43vkAfjPysLZNk3wUZMDiiE2vyRkDnqaMb8RBQeoVAUxgQTsFPgXHkhuVLzD214Ca2PkmLrcMWVWDx5ucVmGPC6E",
  "key15": "3oavbPVtY5vHxrGGQFuDSUdoXFy2Rvapywm3JLtt7jFEF1GiPjNvMLUnNDsyrxVsYc6fChhybrhU53eUCzRP9qbc",
  "key16": "5qY7ECqAw731N4CgeZUXHoQaJMA6czRMFNtMABUoBc6VXmbqHZy6G3AQ6ejSBDozsCd9U8tmeAJw5q6J9yP9rD3X",
  "key17": "oMiDcmG27AX6h6p7S6GmDLuxvsmzio2J7i5hB9Kft5jEQKsChR8SR1v39mZ1xRnUS7pPV3gRDQ16XyDUHGeyR6C",
  "key18": "43gzYG1VgSeVuEFFjZGnK3xasUiq3U5ZydBfszSaGytLrFJHT6YfBMufds8zZKDWABKtuvhEYCwjJkY2cyd4zjnv",
  "key19": "2Wgf5UuaF8HBYU3DRfprgDbuorUa3V6x5rZBAVsmNPqHZHHLiYn2DAMxPYaiaEZKYCNv45jYJ5xB32MLbDBcSF5p",
  "key20": "2VumZ7Y3L43GXXtbP1GHcfaa8yMTbREGMWnzrtuvdBHc458S7GRhfD7xjQNkm3WaeNAHVzb5EAi2s2TJRePmBje4",
  "key21": "3Y2HQCRT5qCueURn7ar39rYEmAWsh9PAQxwVgGWuqjyu6uyK37pAtUMC36Vj8XGkbxWh5qTh7uKnySE25QXsEC27",
  "key22": "2iy7MMJK3LgNa1K58Ly8ratmyukVB91vLo1Cu96H3SFfkPBG9XNidYvc3USEgwUhcWCVLmRzvPjom5GiZ86Fv6f2",
  "key23": "64sdt1rrCwLRptv1N2kZGCur3DVHfEFxdWGppBznyR2PAcmdQ2LiLAF8j4GwTVgEf8ddU8qjTw6BuWTUDXYd3gHk",
  "key24": "3gngqjh75nfkkDtH81ZwhiuwobQrpWHRacSCmRz5xFBZfFijdGjgU2WdV2Avw5TaNvopQZeouRkcXvMFgFp17kRd",
  "key25": "3hDDY7UjPhU2MQKP6UbEpMzwSxbjzS9N9dVD3PJeF78u6F2BU4nQKCZe3kRMQDaXTcsNc4gms4fskhxMpMprtp3J",
  "key26": "3oCUqnbcJDSXyWLRLqRfBkBcQLAdyHtPcrngth1ujrgGYrNCN18F6dvNwSu89CxQo8DPPKxKcshwhG1BUQUP95gz",
  "key27": "wnP233m7yGNAC3YfCgTiNygFQitGSyp9HdG1v2DXWcZ5TLyaFgQoYH2TufeGhG28tGPuXgXjMAj9TcjsX38NA9r",
  "key28": "2NqGm5d8ku2a1SPMRPTasQgAhdspqc4GZqjRMFiaxrhKVB5mAyd2WaX7489t8g4WkjjosQMWGM6gpWnbMx9e6ndm",
  "key29": "2XNpjgqCD6VUiY1upRcPME1xwjT2UEabwie3SxovmogX2ykDR3d1upve2g5QmwJHX9SuVwACSgSBLmB66ipo7rEf",
  "key30": "5hkZ82p4HTBczwLwriqR7bBjhQYkhPquZRThkDqvJFWUFryW8BPGcPktZfbi3RuXpbGGyqfQRerJhanTAJDMqdyn",
  "key31": "2SwcaQhEkk5JVSvaVvcPjMN3bD9s5P1GE9cD2et6XPAbcRxryY2wut1Ly1PBYWeg8SEXDcQehVhkBmbnYhBp1UfE",
  "key32": "3ZdrwFp4ruuY7BqvHax1tTTzNgCDXRprfDLVYwymNJgFLu2P2picZwrD6e55WR47xdE7bMLCkYpQnng8KrzRsh5w",
  "key33": "6CDhTFtYMSJYJMtkhtutwqRcSLrdLjawpGy2N1Bb8TSWVUSJM5kvayVFiLpRYH1zZ4cVVvW3e9rkpRaVJfzBW4u",
  "key34": "3tUZt3KzvGX6poAr5GfNiQwmiMFHayy1XtoYizTv7LxRRB499sKM85mQ5fcDKfuZZWhxfnZJYhqw8xNwdQo1zvJy",
  "key35": "58GeH5s3GrZKCy6xqJKyzTHyc8uTBjLWRYqv3tBAviRLGBbpRjwLT47U9QBSChZMXshBo4WajaxBsB5Af2KMjLdb",
  "key36": "2QFRgyxDfRuLuFXtSB7dhAQtFMFZaKRACFXFg5dSVq9BYgQHRcsyzjF9u1sy5pSMz8ENuc44LTHEVKaTaA7Sakz5",
  "key37": "sPYAvWNFMEDM7W114aNJrDHE6MRQG5qbcJNxGi46C3nqZhrFw9u4nGXZJfPt7oR58xpgzv9cdNZ3oA6bqYU7h9M",
  "key38": "64qDdwwMV9exe84r8wXLSFbaNaQeqgqN1KhvpDpakLzRiaWtmaFYNU6kdKR2U4SuopG8LsA7X7k4TGc5NdzDC6oz",
  "key39": "3fZnQduANWMJ8aSDy3J4JakwGDkt4iL9oatjJpjRCkd3qaoGkQxJsPSdUNkV42qRJteku6G8vDd41jvs8jnNrJf1",
  "key40": "35aFBEvTQ6JXoicuudBbg2VpkAQjHQpjQDcEd46LecpzFqfZR8RCca5aCiWyuFXRCAZ2w3YvUCkkBoanZdqcC2EL",
  "key41": "59bsEp6tBXMezj5FjmKK8rH9xm7VtutjBjsvzenrsdm69nateTxSU64YpQmDtzt1yozxQZiBzXvLFw81bseBnDxN",
  "key42": "61tbW7gSAELuLSSnGbQuYqFnQa7n5YDnTCpE63wZps2Y1nLd5i292adGJNwRFoGRDz1B8GKyPQoYCv14QUWo49kx",
  "key43": "3ANuWs3gPdK3qikF5qDtSx7YSU6AGHBxsBH8U3LRuF9BPDhfUDvpj1pqjGq5sfBbpTts9FrC7E3p2u8LSLL7ikdR"
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
