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
    "2TimrekykRA81K2xpv2ZCDBdUjrRsi2he7ZRzLgsPymraSbnx4nx1kWPws39qdaC7yy6opxZMdQXXWhqgGxzxodQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E19yJaZ2fwJXLAZxb1nNuBYbTU9CzHvGaLaZMkXyWE3ithf8MsVCW9iK9CDcM6k5aPiMEVkF5NgPExbP7mrcs4H",
  "key1": "bFu5KkBpk4S18MpEmb39d92KYcZ9vabrvbxJJAVrZXYsyVThSintuEymEqKhbQGCNrDR1HBqFKPnawmTKxAWAEm",
  "key2": "khF8YEVFAHpBe8i97YSebMSzaCMmj7mBpQb3x22agHg4xLDKZ6pYAjcpqtpr5LsJaJy1gxWyXDibGrnvWadWAY6",
  "key3": "5xkgXCszdNWV1M45mTk2usazpJBmeaX149KK7MyQLZZyKZxerBrT9nX1vxKcxsVHvr9XesfLogSvCrcgtuvVJUSE",
  "key4": "Rk8mz1NvbjFijvZuqiE16aKaqH2Fiov6Wo4tmgur5fUGPQ8zVR84jubzn6irqHzKrrLT6WGmFYQ2spMYDv4ph99",
  "key5": "iU4bbxBb19YWJKhrGiVLMq3jmVbwu2EESXwTDuNryvbBMBtwZLccD6sVdMV5RVh4JqyAXt9mS9mSLQWxNGhucy4",
  "key6": "2Ze5UHqLswigirRidra1bhi7KurbZRgYSSNnH5vngf9DTkYTVrwFec7NAumiA991wNoBxwWaf1VkwfPEtwon3cXi",
  "key7": "278zGWzbZ7RmYxRCLguVi5Raa52BEs52nNXqdnk3N7jkyNPj2LrMoo7LzBfVqFPtvPMyKKoCb72SMVktE8fcM6VZ",
  "key8": "4ModfjttCNgzEGd8p3WtruoP2KgAPccws3ZZUxvyHN3q4Hu8YtT48tcKQsrzoYbv7fYfWX4HVgguRSbmVyyh4QsF",
  "key9": "5wg37WvxcanpFwQEPS5eDwW2mU61oVH5zf1dJi3xjanSRnNxHmaHtFRJTF4tQLXg6BxrwrJiRXtwkDDznRUXuTbs",
  "key10": "3fkouqhW1z7LJkxEKj9EwV5gNFzNv3mtySTMD8sVBCPpyWGAn189K7jMwTC2RCYaffcExQuYzmcJZs8En11mqW6C",
  "key11": "2DSvBJLBY91Zkx8dYtB49nn7Mq5KHXKG7aE2a6CTeEzdjmby1or4QoATBBuTaPCev8ExZjrCZyNJ1FikHFsWhcLb",
  "key12": "31JjWcPayDmARvtV81Ny8mmYtaJoxAp8DAG61c2EM42sTKJkyc5AK5TLgnubc4sNis3HptKTMvYeMUwnXBnxE6yp",
  "key13": "5ksdbix7sQxvY1JNd371sVaY28qzGfZsQ2nkHHVjisR5YLVRe6cMJTXLm1pWUCh4B5ZPua3sptiMx37wzvshk1gg",
  "key14": "5bozfxsfkptMxDQnggz2ke2H6JNivJ4iGPnQBiLpPgTxKswzT1nLaKhRZHLeRVEnJg1xD34h2ErUXwZnwASF6YbC",
  "key15": "aW5UNubCykL1ff8puA7U77jf6DCLTfaPewtMJPNyXH63Rf3BmS1DyuDfSdMHiefhykW6empGdCfiCR7Z1myfW3S",
  "key16": "6aKEHMiUtXdRr4eeASYQMHsHAwnnvBSp9uDg6f6SSiLXixKn6UULzdN7e26vQtmFjF2ehuyv5r6HyLR22kRF8pc",
  "key17": "4ZeiZHxfdMXHSigPmRNRqdvKX7Eo1DRoQ9Kr4mA4kKpYg8VnreczXEVNVd7ceLX9fQgLSNt7TLeL2ewX84vFdraP",
  "key18": "4ANM2V8UW3NW8i8iE67WZLv6VUYsXtvu7VC7RaU1bJjvwpLvQzbxB4oth43gr1KKxEd9LvuNC9E5tL5jT5R3x88k",
  "key19": "5cqixFE57SmXaUGvbg8iUjVEo6qtyuhh6x3TwFzkAmUVFa85Z6EMEHb8rZnvUgBuzJjJLxR7u8WDWkDeetG27Tm7",
  "key20": "D4HJhsw1bMMoV7Qc9ecZBbh9mT6Uj2HnyjdQ3KLY7AXEdcWD5bGmA73aAzpXL784WwoczNhf6xbWam6d9cGmWVa",
  "key21": "3ipLiQobNMfjoKywynSJ2JhP3it2VvcUZCS778cTQFW9cQzb1V6EFxMruTCHy7Kxxfeznp8eNjNJWeVCynWb3zcE",
  "key22": "ueBv7XNZ4DC98B8Ut8C427LA1qExztKUPw3qbswPfTD7gJVSvPawCw3hmwk6MznpAYZb9Zi8ovFWvNE4PnPP3Jc",
  "key23": "2jRyv9M5nYanajyiWLV6LHutSRBZDn9sRgVmLFkaa9w7iEWVcnTvwEKXmYe1hgsbpEwkHzPbMTw9EpZc9B4cPeAp",
  "key24": "4Yf369GWmT4UuJjQ7Dzcvp6Gb7icPHgHtb7SLeNrXVe9DD6U7HqXdRf4xhAeKcZZwZxZ6vxt3m9d8mbYMdKKF5Qx",
  "key25": "4rhbMPdybw2zxT6PKhAvnsraivtF66c6ivM5GJBbJTSy4mKFRrPePMt3Rz3Zjh8sQw89vj2TAcQF2AN2GebU9yJB",
  "key26": "2CUK6hFsL8fc24M9nnVzhQshsW9kmKqkzJGm3xmXB7BzwqViLi2AX1YZZ2YtqmYC5wBKwawCRBozz52CHRtUSR1w",
  "key27": "3DkPTHt4jgPdTwfxKwJZAZHAcMYTv84YNsL9eTmw6Cy6xLWTD1g8JxsU3ZeZyUoShYwecigVD28i5NCraDnTE4eo",
  "key28": "2SVep8DmgBn16VSN4JQdQBkbJL5frE6soQzdVMFjJNvNsUJicfYL6ev457dVjxS74CGGG7KFgeCBYgwnjvHVJrkW",
  "key29": "4JvbYocBeN6R4vmTgoYuWNHg15uLpX5uk45XuENKEzTqNxfSpewy9A8sjevoipW5mPMutKXAMAKWdYLptdzfy2vK",
  "key30": "4HJME67Uv3kv9NdV2DT1HwTu9jhPzrBTpYeRTaim39G8q9f4VCLJVeGjid3npjqbuKXKqyFAhvbM1XjnDsbPrQUZ",
  "key31": "4mAPJ2xrc7NMwtDqypBYsWoqdwmV15rUpJmaUeVf5LBr7eD3Y7dkmKmnYrijmKfq1R8iY8NazeGAee3ZmrdwhCjP",
  "key32": "46DLW67xUHLY7tArzJbKY7yXa1cms5SWD6VHCmiio4xdEoRy9ERQupDXCiSVWvrTBh3YvD39jov7eSqsnoZFkiNu",
  "key33": "32wWBk1jPWAFe8EV6Hos3nyz9xaS9ee4kEiYUrTmw93PZn7GYTMrLek5Xy6BsMXod9fNh6LYgyWosUbUyvhFnhRv",
  "key34": "292cVpB4VfExoaVjFyLrs7Y2bwjA7xGdCHaSFhFrX2gbu3gYTkyL4dsy2XLr25dNduSCT4DXL2yBxCRZdCer5aTP",
  "key35": "3CKjsC2rthNnn2u18kLFn1jvfjB75eGgWcWfzYRpCFGmKXEQXjVMnEYY7Huj5paJUDsag32CSLQHoMnu41ckagBt"
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
