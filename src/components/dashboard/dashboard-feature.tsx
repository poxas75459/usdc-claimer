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
    "shMhfSSnLe2cbhqsoFKio4oopadgqbtdzWBqEDL7d2Se5VSGbwawVJDSmLtmuv81XXMbWRsJeHPazdazND7fufD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EV8wJfiGBabbNLnqeviYGLoPNKcYdFTNCthrDXQPeJmt2HuBgjbwfB2UwaRJUf89GCRAsHTppGoHD1ZuG8v2y3b",
  "key1": "2SMgvfHjMxSpwf52FvBaUwdjdbeBxMX27p3H8Z7QEGrPKduWNa4TCbCD5yJGQYFoYCjTdupjZKPbQT6dknGiRXUW",
  "key2": "3fpJADKwRECodvkxhSFifiSNjNUpFwcXdPAtQE9fE3w29H212jhuJhkxHXsLqm3pTugGZLcNkMRZjaenRRgSNX8s",
  "key3": "3WNbpANxn2YZDxWPFFiZZiErXisvMaKpeFgfudmikP9R78dA8ZJi6B7ZQwTxTagK7bFByLFTjxpKNYvEKLTdL4Px",
  "key4": "5Ufuk63nUJz4EMQn5oVT3gRFGa7rz3QA7cWn24ZrL3KZ8zZWeFUvdGpMsYgnfbEdhFsNCkeBMzJd37GWasgPB4u",
  "key5": "uYdGC6UkzkbgQLYCfP4dmsXVcyQoQeYkhAZ9cjjWoGSMbNDAURseZ8bbJSCP62nFgTGTEvthRrrLdoDhGhrrd4r",
  "key6": "4vAD3bTpVqDTyiek2o38PWoS9XcNrhxzwsEWiRraULUPhYm1ndBj1oMSra8bsyMjujYhtob4zDhmq95Jsxv4ua25",
  "key7": "4xiCTZFFKuVLPCBg2VwwsgoggznFFbmzERgwC9gbadzFeJktGwyJpSturyt3UJZAzvWjENApZTwg32iWfk9wNpZW",
  "key8": "2x6nmeLam7FyH4nFSQMhnUfN21ZVCZPnvs1WHkYxJJw17eXPW2xWsKyRmp7zYvxm6VJ5EnaFRxNySpEhBViSyGZU",
  "key9": "3ksR6Xw1KithXEwB7P9anFWvfxBxE5Hr5qUzGQmV4JWasMykvuHhKy4yWWuhyDWbGreL31ELN6gQiXrBCJaVxA6Q",
  "key10": "49EvdGsLbPi7WW8zdriGvpdA7M9WY6xTsgKuiPV7YU9vzsqYhmRcT9ps7884TwyxQd3A5c8W3xfSMdfdsVPuzUm",
  "key11": "4H24mFzRhU1xS4WAc3GkDv4UGHoTsNMbQpdSzwJKgSF2AyFbyXULgpzYFZpPzjCZX5vE7kTFUrKZYEpb653frHbb",
  "key12": "253vxiNg36rYW1zgcUF7avrqH2Tzo5NWL7xft6p36jbrQd5Ss4qtCy3dGPQio5aj7vEWxyMFMoUgrK5wJhJBuLhS",
  "key13": "Qz7qvD8DcdMRBzKwn3U2JkvzHAzLQGrstUqntAXBauMifQnsAJB8fzYHDq1T37NEHUKvRyzomnkQ59a3nNwTEb4",
  "key14": "EurxxvcjiXYhJZicgxcuU5mc2hqepURyhQn1a5yiAiieYDXrGhgyoDGifEZjR3js1emoNpfwHEbo8DgFf2s5JiT",
  "key15": "5snHTJfj7CQb9YpmYYJScQbbhM4qh4q9cLT1cTz8JgyMVWzCkmdiek9BJLDYBnvCJ23zyugW7dNWcZY2gD7TfeSK",
  "key16": "5yWFdQXVNN2rNUNAX4K3BvBU9KKgAfM4JbsEHgPRLb2eG2HEqSLhCGhFm8QvQRoNrqkqrJJuBmp4bL8gMACBMSSd",
  "key17": "4U5vrDSL7P5DY34ic4aXE5CWMnJVVg8MqtGxsobbZ2d5fz79qAgaDSaaQ9piQDd8jTtz28ujKMmcTeKozqtUk9Jt",
  "key18": "2earCE7j2LU1ucGbEqdjfPeDNUa714ExLKiBKQourUk5sbiU9oeQ3kpoQMmAkSGXaWM6QfNCAWBrQna9qkCeo4LY",
  "key19": "5vvBoWLZHxTNKq27yiEYSEY6HQevt9X7raHyTb31tmaYFBBaYWw5MYqSTbH7WWcbmJ6PJZ2g67w7M6yx7NbKNNzc",
  "key20": "4K8A1VV9WFzxULubLDp8FyeG2qpVKatevrDnHWS4PpYMBWcscjAjZTcnrkQx5hs4c43g1FFk2HyVtZRCrZu9TQgp",
  "key21": "65EK2qqfz2E34bNwix591JqHU6eoXai14b3XV4jCWXqVbe5WZdNEJyvaxcEfd6Wx2ZHdHywaNW9QBZTR6jpQMbgX",
  "key22": "4PzakeHsWvLLnM4JXbyLqhrNeDDGgA2sRRfwm7HPNViQipun1SekKbFTfmFXsWumYgVJDcgFpZfpEnGKavUgMUYs",
  "key23": "4WU6TVSN8ApZgDnwyqQ46EYacypXfhi3s9EMzXCedRQ9oDmsrR2LxGsYWN14EqJMUj2aH1hCtfB7bK7S2XTj7Ym1",
  "key24": "2PeNSLaB9CpzAzYSE9pjeEb7bYatv2aUavLouaQa17ajTP8mJ8Z4j3fdjVqqUqa32Y3bYrGFSYgMiAier5NhVLEs",
  "key25": "UuGmVUzeCCyLG4uMHxF4bdZ66ZC2mcTJs2bkWcfCiZZBcq4z9wJVXRwEPoqKQWFjQcuPCNFe7Jc7Rk3NbsXC7Kb",
  "key26": "5uTLYA8FtCSp2edi4ojeJHKPKxZ9yVpXWxwBwf2qJVDgA9e42C54pcfkpNf26eQ8dPR9CfTosP5kxXSYMbmNhQGr",
  "key27": "2C2XrTZfEvGvBQBuVptfPkssMvyxo4VLKoJrpqP9jnPR1WA7p7UVB2NjcJkLJ3AxEEi5fih6yMJNPteA86tQuk4K",
  "key28": "37QdKembnMBsDx4ZzmWzfrBaVNhq634QVBe7vCnKyKKptWnCTQaiUnyMsjZUrGQw6rnvP3yfMVbaY4uSL5efbwtV"
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
