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
    "2xGuRRwVG4RDUijU4hwHnmhL2wcVs5TUyWrKuCHnWufLBdhxsi7nGWqbFWBjRX6CK2wAdbMSijhqpLC9KhWukUwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fC7TQR76vmdrAQQ6sswnh6zT3NGLoUqdiMfVH8S4tP7favhNQYHtdu9ofu6mHNTMtCxpHxbuAGHVPfGm5s7wPwj",
  "key1": "4x91eSNYcd8RG46sx1EsNyeVedXrCGsQRYD7EVv4XPmmyCbC6h1zZhUyfHmJy83KRBxUmwDqosvRZepWPGTYVsRS",
  "key2": "4FdQYisqAqkegFWZCrBQEC96xRNeS2rgdvw5x6FFRqC1QS8g9YnGv55eYZeZ8BskRUDnHQnSa2cBuXY3v7r218qg",
  "key3": "4S5u3cLuDo15mQudQzvrXenhDDu1U9Yyh2abAELged9C4aji6MQZrbozqZMdbvN4MQrTjERLQSd51JCL3kzG1Ga4",
  "key4": "55CT5nTwY8BzXTGawsLYMb8LnkGrUg64UbwMn6LdViwP2Lns4bMbscfUtgsYLZMqhJ3LwY6AC8KkY9BeFdcvhKTs",
  "key5": "4kgr9XXcjjFtHVpzef2CjzVt7PvbtsobB4mMNaGT3Au3UcBpVnv7NPLd1VSxuhxmGb2iTBVVDG7kUJhyic5rh3pB",
  "key6": "34foRfhXEdmmugj1BQh4QA3rfwBcAmpmLRdQpSdqV7nyJftJcwtM2tca9N7oCWSM3fGP1MerswXy5e4BpiWXMaJb",
  "key7": "57VQjj6LKBs9XikQaLUgx8JxXpZz81HAyUBdLnJz7DVDYhQtXQeaYRMwtGGF3AtPJ3qVX4oD6rDstpzCc6PzuWqp",
  "key8": "5Nu5wMTnmtBkN9xxYJjXrs8umDwhsSoBaiGJy3ZMQXH2fr83jxnJgA1L8ZyjXHBwJouwJ5xBcbYBaqz5e4LvcnsJ",
  "key9": "459CAdQ1DKSWBPecyxGUVRyAtGqMkayzSRtpZadpJhm2tLQ5mmBPfoK9HdKQXUzY1rmvTzCVqZDwT5hFZjbYkxUT",
  "key10": "2oxufuw2PXCYEvnT81RhCb27W56r1i3Qm2JDBPjKrZZKLd2EqK4j7D9orsgM2rvS1r8v2egX9bhFUynyZ5m7YnZz",
  "key11": "4iXQbU1W7tAzbfz3uq8mRQnAnnVMd6XquPQ1dUB16HxG3kofDYbLoH1fgsuVyYKjqySFUXZdQ245ZQfq4ZPXREP1",
  "key12": "3fqhjCaCbgQeifWhKfFvjCFeZ855omYoM5zPiM3N3bA8o1BHBVnDW7gKtTh9H9Ups73WKXxHn1KiHtcfiZtMiM3B",
  "key13": "3SvXFhrAshTjpzZNza2Gr1hafSQ8XBgjS7MevHHwUcnFvb7jRpQHgDXJBXeGkiWALipaREcYsDMEuMqjYGSb9eMP",
  "key14": "EK27GQoAngroVcLzpUVMSkKKGw64TZSu1MWd8oH8HfyjP69uij3dU9nYsQsj6cJgFUZoRoMnPasv44XnQzsodcM",
  "key15": "wys4ccF9ppgpWWFxtGB57BHc5oqSHcQ6zkLHk35ufsbNE3jbGqGVCpGPa5AHCQKQ4BG7oDG4qgYKxoSnn9bJa3w",
  "key16": "4RjVLSPok2qEsxRQ9Yx9Eb6BN2CxzyaQ8hU2CK3RimKc8CrLdawjm6cZDQTtQ4sheHo3hCy3Bv6GszcuRja5ZBdQ",
  "key17": "5EZJ9qzXcHvLjDri2jjPU6STz2MMAquNS42vK7aWD6WK4FZSEPtKsDVUHoUcUmVb642mMAQVvUXxrB4SQK9pofFn",
  "key18": "3f6VYRn5EYxkCJd6CaXSvMLenrrNSm7Tp4nBDZN2iP1pREYfBF976AAEDg5CeqZHrNj6ooeupzv5JCzB8cSrRBpi",
  "key19": "35NUv7XCdAM9KdVoegXD47WABHG5LhuAeT5BNc7owiJsjyjHgb5TXFwJ1LKK7EyW5qzM8m4djJUsygNNAVuakv4T",
  "key20": "5iDvNWvHpwMndZKGFqMkxqLjE1beUZXS6rLqLLNHoWtjPhCB3dcMCXAvMMkSrizKUbo87Ki3XAnbgQqR79uo3G1M",
  "key21": "2iMan82WCAwjbV2FgMbVsdjQ5eRQKuRfVFBnQMqStZcWMQ1AujLL84H4niYTmMVkPy48VNU96SGPCDkgQ1E1xYwN",
  "key22": "4QoK1Bcie5imros8LtP6YE5CcEuraXAp3gvAvp5FTjf1gz1VvBwkoynktgF7md42TgBSomnx5BApAipLM247HcLc",
  "key23": "57YoDD5Zvz91MJ83h2B1XViJsiS2swGgax4NL6MUyJhpVQdc1Fqrh4REzS4kYrZBWzNdJxkyCf8Va9rumn1PWbo6",
  "key24": "5tfH3Qm2YJnyiRLXtjeMEG4huxWAg4dSjVgpBUzByUZ3GPiPUFuCSdxc4p4X86452tobFhCp2QJioxG8UwiFELc9"
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
