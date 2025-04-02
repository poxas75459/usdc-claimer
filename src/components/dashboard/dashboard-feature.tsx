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
    "2n89yKXgcq2EpkzrBwHY6aLNfURPYHWp56z6755gdehi81H7MyrBuWbjdiUCUmKtAfCRRbcPbGQP3gv1wWM4mv4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rcWAq5Xj7NEKMp1B2k3Tg1fR9ZvcfStK717LGeQC2x2KQMzKQE99J4Hs4haZPZhMv6mpMtjrXzPWpzLTsuiy5NF",
  "key1": "jewEnDGjCeiUiuWfgwpPKEfpcBLE8eLxsA7n4Ldrjvr2c7JKYwGAY9T9mpEBsNdJppwKVnqPrXxft56VpEuhm6t",
  "key2": "2TYR6VVBvk9ia3r3ovmbB9e2GAo8gfwe95sNcLLkaTW8XzNJ1fft7LqgPN2W3faaFrjabRDqy3TssxsNojQuddcm",
  "key3": "326E6VzWfwvHj4rxq95khk7XfrpfzLWENm6wgaP6ZCsSEFb3eQ24KkkzJqYcZd2DFmSWdukJx9Rp2RDdgdXNzydS",
  "key4": "Dqn26cQ11K2KM47BjE4khTXkMW7VozjX2rXfnCYZ2HgEvFYZBbQRVo5uc8yWN3McT6M1nDatutjLXjDZRHUxKHm",
  "key5": "47BhuaBpQwee7GwWkECzLzUN46DmnDdEpVqHXomZ1rAmWNJZoeA6DgRwCNDzBjXdpBct3qqdkxEs6Mu4c974c1gv",
  "key6": "5skYowqAid8rv31yayLN19W1LDRGCzHGBNDSd5LDw7P3z9Qr26bhfxEQVv4aiZibdSt5ToboFaBShr2nA5WHxXxx",
  "key7": "48SZFBcQ5ouUk6aSajtTeYawzvoZ5BPNYk579ozG1rj7WrsKwyWmLV1r3w623Hd3sEuEhWQpTgdkZBgdFoaYS55m",
  "key8": "5Hw48R6Ze5jyDzqyfxKQVW2hX6sauxBP3e49qGJrg18ZfwXoCJY2FZDi8GKsDPC59et9MdMF9w24Fv2fD1eZhVyv",
  "key9": "2SAF3g5h5nZhA8Psu6TSwRnEUPZNfhxMcVorAypVkdMPsB9kSjoFxQiTeF8PsWq6ycaLu6KRCAnW5cbz24gZAC1v",
  "key10": "BzsJkVMqzkdvhjbMVQ57ijBNeL9DhD4fLCd51gHaMHkFp9AvP8mWHbLB7LxaGxxAG978F8C9QUqcDZwJcLh9p88",
  "key11": "3jsGpsFNy38JBXHBfzTUCmVZqS8evzxJsLenAvChnPqf9pRZQwMbJqfyTD8nF3j1JDJyVMcNiFBhH3GdvJC2nps1",
  "key12": "2nHbVFqU4TzKEwBHLWRJKFbBLBik33HqDuCDq81MzuuR8BUvSWcQD3tEUWDSyUJhgQZUmmfyz62CucHyfoyuoizs",
  "key13": "2h1TtoDDjRGW5eYDQzcg7YffnGSpXRhxt64FwGuHYxHwpmVLx7zHyqbmzK8H57dXuUoqGDpoFkoWX8xGLgBnkkLa",
  "key14": "25nYEpzCyPs6RBvmudhaNYFngmhDM7NwgMCohWA7hbG6d6mAKKNtkbxaHkvLYtchrPqYHsmzfioGho9sqsEgmX4M",
  "key15": "24oo5CENhqAmKrH4fNhKmbjW6m4ZFsdpZYCAE4KFoRxg4zztByi5AcWj3GsVVGQVL6TGp19tHLemWTYCp4L16T1Z",
  "key16": "3iWJne8pYZ4PBk5j8dqxMU1F9Tp3MoBfkeoptvRxi5q8dpqxBvLEwaWaov9RrVZx88nZxqJZSeqZh7rfb7ZWcs4n",
  "key17": "21B9ZCETjGqjmqR3vjHQAmbu2S8zuczWrviEbe4WwaNmLhyAmr3NkCpaJ1CX9AMNg2VAm8Nk5CSxTm6WZSivosy6",
  "key18": "2ooRCTPRQ2wViZQhL6UAXKGVk4iYu1R5vLfjdBhMKbfXvz27qGdYg3mLjsa5yW1gUpqC7DeKpMTX83jdQVBs61i6",
  "key19": "2Yitm4ubwF4g2RWA5JhxG2beh4zoZ6HPFRP6LvLVmTS8W3KZwxkwmmtXyXbbKZDzAMuEhyb3cLnTekKXm4mxh28u",
  "key20": "4tJsKHYN8jNLhWPRRjChpZ33cQtSgqp3dduGK7b25pWq6hJntdURZmqj8sXTStHg4TqpsJeKhL4w4m6PC7EKxG9d",
  "key21": "28rGRTTStvYrSFr2oH1XWUzZMAx74YkC4iHoCf8UXkunQvKs6wRwk8rP3cS4sGbyhJsXTTn9STtp2XP417vYYbnR",
  "key22": "679GUjNaafCoJn3eQxTVZZX3g89DmPovzbsxf9xmwxxujC67gALewDr9xwYZwG1eBsxp7qcSUds58rShpik1qtXc",
  "key23": "4XjehMZ1EaXwDfizVtkRBs3TtKw5DGq6gFYPP422PTWyuKE6GBE2wbNos1FdinwwFhXFXkfDJtcWogoHZ7faVcTU",
  "key24": "3RftmnviyuW679UFk33v8XvBLVMxmP5FQBKpuq2GcFtzGEvKCZoptfVYyKSHTfG82bch8Kh8r89YY2soyw4tJEUc",
  "key25": "354UTSt2WBeGmeEpdvPau8offFxrqWGNNBaCsg5J3hGqCrediEWGRhz7aT3EXoatMbDpZ4QCPxYGHEJkduG47UUd",
  "key26": "5CGNHFJUGGpPZkfEsZqYYAKEFQpgF6SjcpMDtC3YRShz92T8zxKxVLRixwaeRAqpBpnBq3vm6adgbazvUurq9W9K"
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
