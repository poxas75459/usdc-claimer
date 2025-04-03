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
    "ckCm42HziLVubCy29rWjruGkJch9q1iDs7YV6cGyAkA7Ls63NBP2QWD3XRFome3jfYzVMKhQ3zgWStdVua7JYbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZszTGNRX7g7KZmKUiYaX4xNbSwhyrb9buo2DUsHDWRWRtEJzmMkuB886gnSLugrX5VtFh9KBhqA5nUo5avZY9k",
  "key1": "3FgPZ1Vowa8HVhTaYENiYuiGKfzXRQR3tW2qiTzuseBt5px2jnqv9zYXNZEicqHxBZ2CPcYFMVUysyepNtsjVEam",
  "key2": "5Sg9WEE9aHwzNhDJ42MCyNUStAi8GUrdbB5d5hKZsA6SBi2jeXcp6ezQtWbCbpXGmQSJVRKKrQ2B1E1hW7tKy9Ms",
  "key3": "5TQqk7D8y2gXhg2KqLYyCDZd6HbP5tSaHxeCq1fxRfugT8xSNZZ1zVhfY3NFnj9tvRMiniz2LcAbHrcW9V9qAw5p",
  "key4": "4sCq6mipBsM7gfgmas4rbJjgWDeXZDNLnPJq5ei4e5uEDHepxraSBfFbvh646Cwgeq1vXdr7BvBBNHfXxWkLjnHx",
  "key5": "5Ay8yG64of5JNaWtFdHi4UkVaRQNH9P6VCzKZF1fXv2pAdwR4Vh9GHbBkM3jzquoQetHMiaRe824HhYvi6yAcMKX",
  "key6": "319rYeNNYrpJd9eNo2PGcHzzAKtZZRxiJL7peLAqSfCENXi3CHh8fJHsccjnbgA7wNqGigNuBd2qTFD7a8ciMDFw",
  "key7": "4X53XjpmSibPrQU7namxQL5ALKC5wgL7BKRC7v6C3x4e7rvwM71TYRn9xEztp8WKMv2k8mwaVMhkSBDaWqfaJP94",
  "key8": "4iEAoFzNSVj6n5t6pfrs7bDFiMsiYgnEG69GgeaBs8CVxhSuArGtfBf4buSzDh8iLj4YMXv9oSioWGD2Q6ePTwpD",
  "key9": "3y1Lp9NpZ1ZJcqh5DosjFuddrmjKF4SSaZUsh6aG28LFaJaLnLdLExn37YbuvJGZMTU1KdE3sj94R7knrZzkZTzf",
  "key10": "5ryCBUaVdiwKF8rQWdK8cHtzhuh7tdQnzoogqQJCLZS9pu9u2HYcFGZQyTvrkLLLjmqdXSUcnVNFfCdwHvuRXCEw",
  "key11": "sAHCNrR2qPv4nHiKNGV2wD96XDDDm7ZjcpfGFRmHzMmpydZPkww3W9oGhuzuJhp29bQ3QSq5GwyXtogHuapQ2Bj",
  "key12": "4Q24Tif7x3MFs7kp2ahfh7VWm69nLE1FkhDERfkPuZGFVaoHnR7sRgB6L2Yx213PaX3HRJAjdURfxVKNRFcGEkFT",
  "key13": "1gAbZgeoTBWSyC8G9cuJrV7sLBQPHGkHp8LsqfmhS3qrMaZ2cvsj5vwHfsGzaWZKt3z6kNvxepAegVA9rFJ5UhU",
  "key14": "5hH9YSZQB4YKK564J1txAJUzjfUUSqkGMG1zpoaUNhFZkwatexdpCgG1UsEwyexCEARYWkch6KCTHKdyyY9DhgdA",
  "key15": "2YJrqHgYnY4gNGUuwir2PcPes4DnqK42DQ5WnvxALaWu2Q1MQim6zJV3dxVAFHaTuhvNzGTBm1SHyKuQ3F5giWvM",
  "key16": "4E5FyCFH2L9HT4crLVLoz8wj1Uk4zFUrdWqGrCY1SVaMLrGsFgRGLX5bVJ6xZ3vw9T2FCVq1KrLRNM5fisumismR",
  "key17": "53Kxqz5t7sPLkENJ6A2Wp2gSWhRgZzyBx1i9AWs9bhVn91526PxQNxBGAdcbVEUtyDXmPJYoueTB2BcMuzYSQQtE",
  "key18": "wNpbdM2Kuxu4iB7YCRdqzpr6LzAPEDLEeZd3xtS3pCZSwmfyAkRdk5bYaRacgs322JK7eWf9PUomFYiQHaSwMST",
  "key19": "3oEc4GPjhnRobfSWzaMLHNQKTJDvKbmAj5iKdSvRDJ929tALyfK498v9CamKWA4jMcNRRvbuT2Wr7AM9FzcaCSaE",
  "key20": "4AjKQM5M8td9FtVKXiQV7nPQDpKvpwxp2vsvtfL2Db1zpszhQXqbi8eaNUBevLuFJzHttMx29nyG58CnVy5Kyp1a",
  "key21": "36GMKneM1J9zd5Dii5Z2kqedn4NhTyL5L5T7QBqn1TPXCtGRa6UF9CaknTp5TXtNLR6vMr1YR1uU2Pu8P7RMZFFD",
  "key22": "2kAwgq9fEHX1ZM4px5sD1zog7C1F2ybQ18eZdCmaujSvsJ74rgyPzuvMmFEAF24F9uCqg3mVKvUmmpyGKB8D6kTF",
  "key23": "3CLaQ5giZUd1o9dRNiuUkVE2h8BT8xym9CPEgDtNKwagmKANPDs6N6PnWSWQ3f3xJoogZZQGwwBsZVqLdiLvQXZZ",
  "key24": "2M41FGdjsAVaEpS8togjtpttkVyXAKb9QXZBdiewSpd2purZ5e4Cs9v9bRkgdMgNUCDPPFSTbZB4uyj9fAQ8omzA",
  "key25": "31UzRnmY3jurDyALz9B9VdazBYG9RGHeDuS3mWqD4MywyG8ta5uqcz4UamQvPgUMSecoz3BJBz19W65rQjKLTGSx",
  "key26": "2JNj5njCh9VKJPUbtPCCqypXjrWy5vhq8Mwot282fixNTDxAdHQ6YSNC2sdjSJEa3oA1q9acKVqusWbTDNr7D1k4"
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
