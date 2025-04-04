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
    "2LKaHgfRTh6GjzwndtknevgWrP7MBSC1xpXuR7v5pgVTZabTBSLDYkepacbiys45JffnMbpadFZpCbkBXC745TQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jNAwdbiXTSsjDwxiQMALqEUqUeAVf6cqyU4N2QHenPu7HPWEcgRsW5Xwz6uheQTdpVuG3gaGomv4ENVdx7oy3o8",
  "key1": "37Cb8RwCeoBFerjd6CXtPs5jAb6xQ6jCXjZeK6ZGwf6RM1b1cKUxLdX1Vxyb33NcehQN856KyfXfL9C65X2RYVki",
  "key2": "Mgx68cRP8inmgHPhXwrLNxKjTRbbmie6YyE1pMMFfBsLBWbCKvuXrW5Vtcz43xpfgATiQQ6McpnL7zpTfGCGDis",
  "key3": "4bYSByN8CpRx4q8iuQnLL6FjZoeteWyUHahzGJivQZyNxSDnReSDZVRUweHnTZFiymgrCR15CBm8DSkiPRC8QpUE",
  "key4": "3mUwHDAoo8vh4kh69gGqKNAid2r14cqyQhzVhzRhK75gdgcaE7CuGcqoy8pi4veCAMEKtSNKzPetzzJFESUMshf2",
  "key5": "3Xs9NdPJwXpR9D9otQAbycqU3iuUHJs5b4UThYVwU3YqSxQGCDXZCFy2tDvU1nbfboDYa7zqj8fyHofBYHcBcedZ",
  "key6": "5m8PFyp3qGwKWuDy5VJXdSFjpfuPN83h4CUFYmGUG4Kw6swQaJvohzDWP4mtL4rionswNjhYnfnu4vrPkqgNUKhu",
  "key7": "3p12DT68jjUJd2ePNhcHk2uiy4ZLtBMgouTBrf3kiGnCtS8t8TwqZE8ZxFHNU2wjdqQM6tBtSq7wzjteHi2ckUni",
  "key8": "5TZakQdG1CC6meW1SvKQgF8fxA9W3Td21FViNAzmm2Kw7ERU49RR3KDghRjWHDDsQcR6WFFpTdruxpvL543R5Va8",
  "key9": "2V9DM3taqu9KKowbNFHQoHkHogEtfXnBFmsXwvRNcwQq5QDfWJBu63sWg9HDytwPWjmT72GBdyw8SPPvkksvVpgo",
  "key10": "3vC4FFSJvckMG4j4H9ecSNQFMipd4HFnxNmERQimcTtM4uR1gPYom4Yfk1hxSdoRRUmBFLaQvioJrzBrU7v4PWQw",
  "key11": "31dXAL35eTDoHcbjwkjvP7vjCqiSXtea11nWctJHuJSEVTpTBATK5o3kuMWwhcs2u8ykWBLAZzH8Z2bEuzYWLxXc",
  "key12": "4tAnCAPPP9o4f6emVZ7hwUxNAGAnz4C2BEfLgER4DKypP38j2zFMscx5VbtJXsM28PY8tHzBE2UgQVHMPzQNdi67",
  "key13": "5ZTApEjsi8KHRUE6PD8hRd8gWyCgLD3piAZtGQ646zidCZM9ujphM5E4eavGpR1nNcdP7cujs8snVFgE2PXW38Uw",
  "key14": "2DgpQqtb2sy6f2zNUYvqRAkzghftpXm2Ly5iGLSEz4a9YhUeVdweLjPZ2ftx4oENmMLeNUvfMcjqFtSnmQU8b2AP",
  "key15": "24Adb4Cm6DAKhqEEhs26Vt7kLHLasUyfbrDaFfW7mvmtCZRR6mGyHJDkP7RMvdbkfG9PjieHh9KWsfNy1VwpyChJ",
  "key16": "647aZbXpxZsLvdTqpopdGSyycT43PxUVD6HzSVTtSqxtT41F1gTLHa4UXx87MaB8yX5JeRTMQ7AJ6quKg8ezdzQF",
  "key17": "4SHYa1xEzYfRk1gpeK3sJV9SVoKDr2aBL87DvHBwhsC9zwZFZFTWDCcAACCuYh3jTciYbgPZfnCvn1wa4WKWJ1B3",
  "key18": "27HMqgSm5eP8BNseqo3SqQRRxfK2SaqzoWWyiVSuT7BctVWZ1BWajFkLgKrQyqCd7BZ4Qs2wATT43KHD6n9Myn2v",
  "key19": "2Pv1Ut38qVFjX2Yjnvruzj44fg5vke47Pc6rxLLTwvaNeJBs5X4a49n8p2U9HeENYDbQvSHdSePQQZdSJFTtCqeA",
  "key20": "WcPHLdo3tCyUtc8UU96qjqWnXyUrcjuX7MHazSK5PbXdaaxpsnWUH6oUgTU7hVh9KHnr4jMH1L3AhMSrr6cPruu",
  "key21": "4XAXki5yNjiSYaDgffzVaRJZp7fCgK6W3gtmX2Xb4GSfsZomBVZd73d5Mtvvx5nah6txqMb55MJHv2RaSUkbEyE4",
  "key22": "2Z2ArmyCuCPGkcK1uyrwUBo9yYYLvAZnfMo8yhw3wBpBsmaTgUhh3nTorrWeJvuENfdYhpy1TadJSJd6PcZ2fC3S",
  "key23": "2ysADki5ZGJKFoNcBU1CjA2EBvzrAoBz2WWH4ohpd8vMNtdGZxMveS8h8A9JcaWQs147fyxMQmvS2o6zJKJP9hVh",
  "key24": "3k6Gv4GjwEBEHpLfVSfkME2UMgjkzDXqLC9cWTEQykFSTt12JLmkNGTK99cyx1RjwVhb4PMWmMTUXio3HTgwccvV",
  "key25": "2d2g1wDu2uzyATVLe3BzXaYWAR4b6uXdiXfKEPkir69ukFLmMscCKfgY2ajFyKgA81pXUVUTasdEmx32dtwA5kmE",
  "key26": "LpaBvsyCA4FmjdLG2ywiUe66W3myZivgxkSqagNZeVaHs5uP1NdcC1QS8SdFkMwSVHQVwbP2xPY1PFyvDyW6yBe",
  "key27": "3sZYEDL8zuCYHaccxErwHUY3MCoZWFGaY4LoiMN1qLf1cBNQW6xmr8S2fkw7GwZYZpw7CYT2Hzq8yL4uynimmW4z"
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
