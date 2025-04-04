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
    "5M6cegHPyBHGy51ja2HpciCiDtpdatcD9FziQUsY3QSCuEmWKEPTk9XNGhfr2aAC73eU9Y3ryZDaC3xhjEzxcdGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFhuQM4hKDYCk8edqbfGEEbaCwKYnYShgi5yBVvV6QPAAf6MFkd6Zqq9gfoJpN28qFpAyzY4p3FynrNd4Uvuyir",
  "key1": "3wdBs4BoSgjaNhCjaxohHd8X5QRtayXPXrhscWcsQQYjRLoQ9NAvvpot49tjHpnMboZYCZMnppf4CXPsTJbqhx2f",
  "key2": "5THabXNAmtiiEay58xKfcg9FLZqYBYNppqnMhvVwBM1XDo9MLQRjM8eJv59e9hePW8qDthFCzKKBktGxFQWTrTEv",
  "key3": "nZsM2QNstvL2DDgT3sQQWKkGyx978TBdpe4SoGxUDvaztuh6fMi2Jb7QCQ5Qkxi3p1w8W6p4it33adobEJCjuGP",
  "key4": "RjJouMRyN6kvyKSCKNGz8WATiv2ZJ2oGcVcKooewRMAVhmcNaGiim8PvvjvoMNvFeqo7EPxNicgZLBJo8RXihFf",
  "key5": "2CAU4iY1byHrssjCCUvQQamQp7JJqRaNkio3oSTHWP9vJ4T6ASZB7yuaJRV8wnBct6Fr3N6SttjTxYKdgaifiAC7",
  "key6": "3y4Rhp8TsuXpfzsHxFt4pKdQnK5Bnd9bcNWztgouVfeGy5fSy1jEqKwH7hXNfrD2gXeyS3g3B1zKHfWrpQa8RfM",
  "key7": "5uotUq7zrNQafquKnDmX9uxCcZXWJCGdsRyFyZJBgywczkynuSmqbCqKuKC4WCjt9x5BeuRiJ94zypgCjQ9qnbRx",
  "key8": "2babMgAnrANjNg5643bhSjqAAKjBVpG5dP5FcLquzUoedRi8YhYhwWkcRtDdjnyUWrR7tpNMz4yB3UsB2zqmDCuJ",
  "key9": "4FHWNzrPNzwbhe2VWgCyA9Ycehn2EwCdX3SJDZqLGztfcK125NQqfBUXbJoBNPkveb97moHAFMR1mexEqwvUTWVF",
  "key10": "3CgrJwE5WY2k9AQ6dFomRUhBY4ooP9BmgAVUknLGTcUwHK44JzpVuR5WTr5MFs9da35nU4gS5SzCuPQPPHPaocj",
  "key11": "5eHZzc7dUd6VQdbZH8xsZxVAnS2GPcMbWFFBoVeJTHt7NiK5hrCdrEDV3DG2fDpZJde86uzMhi5dfDbidhNHm6Ss",
  "key12": "2ueXNxRw1csQd7tBWxUTbsGFZaLVvdRq6U33TheHNwxHaCjQUjj2cDv5VGt28cjW3SvBDTBA3pyYQ8ucXFyAsum9",
  "key13": "3x9WYJenm7pRzenNDzwg2s6ZHTqGVHtb3quZqXb4reBLCuMmRr1S7insRSxGfzLXPpMR4nqNZeCW4Khov36qa9Cw",
  "key14": "AwbHV7GfCRcTUWfpn1iTwNVxpX2i7DGPPwEwrf2TnUNjUQ63bg4WK9tZTTbapDZWp4nQ6HspuQnVhw9EvwpzT4g",
  "key15": "213oBSh1h31VtbBLU7BtuNzctyu2CUvML913wZQAnh4ZgyqEwLg2BGgHJhUCQtajRX5F1X49at8UCVKkvaMzqgxE",
  "key16": "3H8ereYDYsj3GS1Ahq4Y2T5d7oM9uUqH2QKcbk86Wyhpi9NYLa2uTpZqqjUbx8P8rmii6kSre5r6MmZaxhu9W2e9",
  "key17": "2wPH4zZuaGFYJJzVAa4hNb1VmB148HcE5NZxRrijxNQYmghzJH1vmhGPpPdCynHbHVJ2NXQjovZTmAJJbrepmEJA",
  "key18": "3PpQqqXdHU2HPhxqNpzAAS5PK8Z8aNU5wJBCohfitj8qNTLpq13quji3RT7e4nPfkUodiHAzLyr9byYWm6DvKW51",
  "key19": "3kFgMdZcHbVGr91FSoH4JdReAuc3u8ymG4qus3dan31Yvx1eQkCw7pzCT8Y3d2vWJMo7fFtkFYkYDQzuQPiy24K7",
  "key20": "2pq6vkgmWMj1sKCAXoiAwzhBHUSV5PxyJzHMGBQUHheE6aUWTudjvLDCz8taPUrmGJ6ZcVZr6L6sbMaRS5G2TJhr",
  "key21": "5PpanGMP1PZbjAASPtMC7RYNFc7YWvzRygoMaCt5Qk82WKsGJgZo8psQWW5ucqvFwzFZ6kg451mVx8vMo2PKyTnc",
  "key22": "5nLFiDYGjM58gvWfq5fM1qpHUJDP6Zdo9T1mMgtP2WsCV3Midji9WovMawbkiGMUyH3YN3Z6Z4SZmVkoaNhvvVrR",
  "key23": "mnMnVQMsUBwAPFBsrejsMu6NhVUAKSn16tcTzyzqnMEytUUFpT42vHGo7AddB9y5bsXfFtuz3ui83BtCC6VGUsW",
  "key24": "53iAQfafLw7fCdmLcyn2S8nWL5ff4bYXje9a1s4fFVYDCXCBXDBTrCqW3KzaE6JdZtp6zKnY5rVkgGmtDBA8tr4w",
  "key25": "2P7hntXpxt8LjdgZxxQMWjJDVEfrsLhN8gCXSJizCpaJL6qBxCQduBMDGqZanEGpKk2MxFs3ouMGhrgACsVng1UQ",
  "key26": "2UbzQLnmUmdXvBsDUuGDNcE75dnjPQa339nHnFgjbARX9Gp1rsVGYRnGecnJX9THJ28Pxvo27kB3wPb1DUEHvmra",
  "key27": "3yBEin7qu8BDqXfA6vV8oApangskeZN612mg6caZHArjEH7UKcMcx2EBDZkj8q5fDmytSTTBivAs3qAXQY8HYuTy",
  "key28": "35679krRGQH79JVp9q8VKC6yPTm36LhgKGKjfuZ1PfUUYFiytXudM97GmAafYDY3StVjZccsd3v6WXvPqQuxH7ji",
  "key29": "2hb3NLCyPJ4L5GKHxP6Pg2hfuLqfmoaPyc9pcgC2yTKhxGMYCrnEdzKBifNZDA7acN1KYDeYW7FQgYo9ZDvtVMbo",
  "key30": "4M7tojf9zPFjssBViL7bvKNeenKwtwKc2ntAuJQPADYPjVyFikRpmBcWGETMuBZH78SqH24HsmsZNsDgg9iH8Map",
  "key31": "VX55MCjn5xGcpBmkaFmDASbUJ2qm81CopJMJdkaDrYvJARcakrniXv6pAsM9p26BMaZCNY7QJbKvcimSpwN59m5"
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
