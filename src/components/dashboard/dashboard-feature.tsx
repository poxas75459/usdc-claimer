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
    "ggd3Ei1Ct2qkGRpq2koJ1ZmzRmYcZgmYQbt8V6njGUyWAXSq3WnhiqjhsLXhouBB2668yDASMSaDUGhnDtxXTWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q6pVBVHSZtwjPkeARNGxoZM7bLeEhZ4m4p9ZLoshfbCSZzpRnAfbNzSGdQWehUeYJ5X3hZx5qqZhT22YubhkiJx",
  "key1": "4B4NDVTQRQhvxWQzuacG11MnQrsdSBvPMnCfExMrkB83kNREP3j2gCVN4pLMYWfoQ5hGvEmWUAje3uaKT5jWbzyk",
  "key2": "66dZLq2xanVt81BTn17EwYsz2hCZhsiTHvorqMhjHm2QYYPd5BtB6imEjVeHDBpFr2FaxCjsAmoE5K3PGxY9LJGF",
  "key3": "5Q8vyiXXhnpiP9KJkzTrAbeFr31DFKPTRffR3eVn2JzBT8nPAs9Avu52RkSyTvnbT6tJK672z2njLENSk65rnT3h",
  "key4": "5L85JbpqVbDRS6wvQtV4c8JkZ1qNrcXMTQ9K4FiZ8mbj8d4ZSexHbqbaGszRi8dJjQwhfRT51X98voyCGRAGYqHR",
  "key5": "4E8M5SymBTdoP1F49jFE5E5skKMEMo5xTynRpAnyuq2FAPpVvWmBiAwsPPVrWW2AHGkQqetSQrwfpxjYrGH8tqYD",
  "key6": "5Bge2mrSYf8Tcz3CZA1zRkdpurXpxoEa8NT8mE4xUWNpvNLCakeraBeVvmMrpdXqxYG2aWso3MbecDYRd6ArW6Vg",
  "key7": "2uNwnMwfxfpuEYtDt42DtRvr3jGqpYSJEbYbqYmPeSo17Gg2B8ir2TCQYJ7q8MttBwE9nxe7jQkWb6uRwqNbre4Y",
  "key8": "22LSfZPFvjM5pAJeA7PKjfvEVhg3ooYHmx3WNwMDNAKeQ687rV8eGYkdxhf2jmU51E3BkFyFyhcvKphfqqURaYca",
  "key9": "JoXiWX93u2mJZWuPDBuu36y9sjh8yKxeuEsXDdvjnzNgYdFkpWtzZRLQAunnfJVScGi8TUWiLhwVMX8ZwK98mzN",
  "key10": "477rjwH38tPivcvysg4dQsDhgEwgYQPpBmB75DH1T2M1HVBNS5zaxZi5NpuJ5F3wHVphKbFMzb12E79iDq3gnP1r",
  "key11": "3hfGNNauXWHGrSPJgJDSq3EMA8PWBN972PCERH9rWiqWDgtoWUZ64216kh66WaNftPbduH9kY6bJZBsBDTPRnQc2",
  "key12": "3VqnxEPwbVwAYBBzzTVZb8gZsQeDL5GCG3GcvNtQ464eAfKpu5rkAqZfKnNHdqUi7gSmxQbWQ14HwT8RZniYxwGW",
  "key13": "AvSBCSrt68bNk4VyfbpHoa9hja126geYxc6G5uRgFZHUoDqrf5ddbbwDvRM8v6K3sBwmFagPQg5XtZrQ84d3KBQ",
  "key14": "5zkqCU7AAYWGRADi1UEi4QpPHLWrTMoGViFvBuuTq4NR16uQGPic3zpuhM9iPrUukS6BcZLXM7MJaSFkjATBefTh",
  "key15": "492mVmkPZraUDap56N9MW96KysMo27jBWPQ6bCUtymndCEEr19KdzXxdhpcSyGKNaAgytsBfFfGt6xXT7dZnsJoe",
  "key16": "izH5ZMD8CyhjmZ7QoyG23cEB2h4akqdsY8SWq9ubgFLE6tCHwQ2zciqMFje48qJaktfzWE9VkBrywBSotgasDMx",
  "key17": "2EWbwTn3D15nQwQpiCSVkrAfpMoRHwfMUtGcsRkDuZfzd71h7JeN4ujq28Gnb1qgXnJW1JLphh6Y5mwZp19d7T6E",
  "key18": "4jduc8Z3H9kcV4AU1AMqVnvNrVpqaNfFX3qEDBT8i2nQq9pDajftnMDETfSsjnT9ZJf3kmfypoKH5nyTbWgDKUar",
  "key19": "23QpHQnZ3yayQjCbnc9fJ9rgjfEg3VbEqybwd7RJ6aFcjrQg6nifiQfq2bwV67UBjFZSXDARvednDRtbbx61qPm3",
  "key20": "2qV9LnUEYdCeZ3N9pcwaLfaJFL8ebQR3viQzhBnX54xtf4WHHSdyHnXchJtFic17freWQFVU4HEqCMGULkv7BtHY",
  "key21": "4zUsHZZm9SwBwxRR4uADoPWtF7N1YBFTbnix7yoLbAreNKoMCQJsvFb2aCz5V7C1nBA4289E8Mfcq9WsD6reMJJG",
  "key22": "5dJ28566As7y922JQ4Hh4HE2gu1gjEzUpzzFKsQSdRKLmeTEise9ozeTPXDjWr8rnyNA7zaahc5giVuNtShZi316",
  "key23": "WLdMSx7RPZLRUR3ppsCB1EvqRWmyCd48bi3HgHyGNw8RQmHk845zv6dxURdPScPzQL1WYWvnZeu3WNcnb16CViX",
  "key24": "3wd3u4J8EhraQEisjMcw8g48oXrzdT63peMzzYpFXNKmsu1FyvamiZyPgUhNAmMXeEP4JCBembzn5NyP4btTm5t7",
  "key25": "3adLxHUE4HsmrjV1tPTo1xUMXjn9KuKUtfmsSjT3DTBRBfJzp8zdf1kUb9adg7hv8cFJpNpxtBdq8bYS17NHn5o9"
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
