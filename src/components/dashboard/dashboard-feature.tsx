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
    "aVPxy6zynBWGQpuHe8v43LTBt3kmMnf7HdvaDPjkyVRJNQ4SuqrevLDxHLUgVTVcRrxaQr1AjCLnn2eXn9AR6k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RoL9WzjLZR5EjfvfUmzLGAFK1DCv5hAvXU1rjesgx5pSP5RXMprgshR7jVoqZnGWR8SsC268wu62y9R47wX3Evn",
  "key1": "64WNrFJeqVmhU99DPqCCcAVxXJXUrpBWszHxKAYB2gw9Gf8QksCYXXqvYbNf5MfpYgMsXKaF4XpqFFTppY3CausZ",
  "key2": "3spHmeGKQEP8ASejkFpL1vzaDy6YLQ6eZRWFXCkhYe1qNCcr5xXhc4ci6UGGS5Z6B8MtzB3LDocXoaFLuufdepzu",
  "key3": "59wWBFQRE2WvY6NvWtChDHafjxZibvvevFcSwGEW8kksE3Tvp6bnegQKxTwfYS1NNwXfUcSUJN1egJ4HyF7xQYoP",
  "key4": "67MVxArWJDsni8zFQ4jNNWPuCt7SMmAQtBqJVoi6LN8Sxpinv1t8phzKB4rnRaPw7S5NoQNEggm9i9nvCshVXqMo",
  "key5": "5pTcjMGV5s4EQ2jjUCBL1DJbtLRNpopCFqHh8S9dhKfq2eMspeu7AMkFeMGdrFUCnCtxUiagqgDtLg31ZoX5VENj",
  "key6": "4DifQDojaF4mKf8Ls96d8bD2z6LPPNCJCJ5xf3qVX6Fec3QXDxaccGhpK8fn2pVDQHdz9okStoY7FaGcwEkR1NRS",
  "key7": "4iPi3thSZVL5rnNWzhxDXvPMu5HNpXm6ba3fiM1brAohZTjCo4ZEjVqPxbsyWocASCpGedQrmzXmNJBFGjaHzgZS",
  "key8": "62JUrTy4KZkLcvS26sXLits2n8iXaA2oww2eWCkmcnJ2bvJn1ku3jpccoR8p11hMDuLvGfTVPAi7P88fwTnVsnem",
  "key9": "3ctM6DcTXXnBantUTs5MoXif4wtAGJLj5fdrJvKGr1dD6dzEmxZaynp2xqWRe8sXszWFCezUEvNn8fWnqFNAp4vk",
  "key10": "3WkAkyt8t7cDGaE9LSgwKi1wHwicydxMsgExzy82zJggtYd1YvgE9x61JoXX5626H5kHugtPEyDLYgFyqb1X3FpL",
  "key11": "4XYAyUeRwLkk2e3U5cgEik9MgfgAy1RkyD94BcUy8jr8QPZR7K69587U4he8ZLtBo7m7trpd4Ybj5RYqxtqngoWB",
  "key12": "2VQkTzvBD1LxaA72dGjNyTXpCint5wtzDzc8pjP7JWxSeis197tfm2gvvrwhowGiL1m7te1tLfJ8C5dhGukwxsUf",
  "key13": "33YWwgmSNKfPnecwMNUGMCKMoo9jixVkD34aA5dEmBK14a7oRnPyZmGEHd7MpwBCiiJ5DCGeYqhUmrWsBwc27bKQ",
  "key14": "26ux5Rhz8ubbt9w9LNSyPE4XW6UxqEgMmmXNrB3RkMjM4Tk2YHpjYgyAwV315ThYXtaobcMmrs1x4iVj2T6fQmGh",
  "key15": "4pkPD6LqvRA8oRwzB9HzbAbfYcFMZZhKQNfrMwhpAuxECgr5UBNBhB6QWJKHn83pPU4gGur5CNV399r1qYai9fc2",
  "key16": "5AwgtjdqY3E6BRpcYck9hS9ah6nD55rCHq6ShoTPZQN1Tj5wKiqQubvknbq1VHV8a6oU83Aqky743zEo8QuLtpFa",
  "key17": "2HgRC6UFtUVrswjAtmMcPPYJemfxx7aBmjLz54wcsSbWzyxVKzR5d5v4kCCBk5K7srnhjGcTFykw6dFniiKuTxP7",
  "key18": "64iV45qXhug8khjThZwDwqq9x1auamUiH2S7AfTiaE9rd2XDzN3wqvKnkQJ8fcSGRafED7Tz6MXRjYB4CuDptAWu",
  "key19": "52H8VN4wugg7JqTuHDSHhP1P88dorSsSrUuqNKWCSnCo38ojYQqKFXbPN4x6JTXrKiqpDfDFwcny1HV9MZgXZJwt",
  "key20": "32AQUtvgo5LX5sg1uymPhYqeoYkGE2BEBySjVN51TaNnJFsxvJQeuLa65d5SjGqwrcr7jbdvoqDbhxFEtCWfZ16U",
  "key21": "2dQ5PEJ1cd7to3fYUYYMHdMCw5cs1DX1niQtZzBS84JCT3aymFXJy3d9n38tcZDzmEypDBQiiNDtQJsbBRjUsvLp",
  "key22": "2bixamfWa6sQkKQhQpAiy5f33GtyxPHuuBA6cSbsB6obDDhvZuU4V76in3Cv2FDpNzPBUaPmQqSdPCKqyVdUn4GQ",
  "key23": "2P91Tns4qNKs1Zgbg61QdBvFZuyLueKB5nZbX998hTidt5KHiySXF6P5w9igGvHfV6gMp2FGXypgqXMk3vXYcRn",
  "key24": "22fEMbD2n6MmdW2qtFNu2nmK4C1LFYcaxvJ8T95vEYrLUQgNDXZ5xSZVbTJnVmXZpCuR99W4SoRwz6shCkMHbD69",
  "key25": "22McH6RkANSzpHnAT2CkqQYLmUt6CgD4VmVyNy5cqts6CjK5H81BhND3qmpjcyNx39LtPQZaoq946ewfWZW8T7bZ",
  "key26": "2F8NvQnEFg4bsV5K1THCAjXoHkFXAT12YKYgb1hUYtgi7UPJ9azCts5anLYKXkpDu1krDAs1pRJ9ESS6SHr6G5ez",
  "key27": "svJznjS6DLLD9mzQvK4iBskMmgGKmZnVUakajHnw78vWrCFmqRSiaz2wqS46LqE2AkFMmoZcXNTraqQAyLgLbtf",
  "key28": "2TwkcrbsosJBznhp5v9CFM8MsVYRLStS3C4UC35btDh8E7u9kskTnxzxKz4WKuwoqQRbZCEMZ1ggW1hsvvhr3Tq5",
  "key29": "3LedGdRxeYMWzYxztDEAcC7uqeLUnmz6qBRkYPoLktfCbjK9KbrN3T93MbfdKjct4szdFo3ZMAMes697x3yV1ZWn",
  "key30": "N1cZmqgnaPhfowpM6JaJsjbNo9XZthrePsHWzk6o9tk2yqzXcjqJDoMti3npcdrEHyys2Yxz24ddKN7xVvBPyXt"
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
