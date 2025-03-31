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
    "2SzogNQVb4CYdboq8JdMQknDRSNdjpRLkNjEK72gneVEkfr1x6NC9k5f7BErnofyEktHrrNMohXbnXgiKkerHmFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WqW3HPCPLb5WHKgKEKJkTjZqc8qB8p7rhbABhNEDa4sVR3uo7XN1ovA1DC9o6wYGqjEuBanJgBeDpGUzKkDKhx",
  "key1": "5geKcXGinubx9WXGCZGJomQnJD7WukLJPy8GQDosCDbbRfj7TuAbY6iN7BGa66nT7vhHnhKqdyQUXnLWLmSLqMAF",
  "key2": "5pN8yo3sRJvXTAsSTZwf9zuEj4vKPJoPQqaQKkXrBqP8CoVhxMv4QeJk2H5rB93WYLNXMBcTafq7pYqDc7xHxY9e",
  "key3": "67H4arHKYUUQg8wmdfkoW5Upwty8yHzkez5S2LZadxymJKan4aPPnuYSMruh9TgZpiDviWK4BJiXyJaTML69V81R",
  "key4": "izoj15gVk8wWhKsWPmzEAYRS8M3ioASzuHXjY7FJZpTp6cmjgjP7Js7YaB7WamSZPigJfeRYBREpLWmvQ773Pti",
  "key5": "329CL123hUVEJBLgMCKmfoJFVgM9bXd3N6ANM9nHH4CZi8r5DyM38MSsHtzW4ygLwZu3bkfboLCpYEfq4kUpcH6b",
  "key6": "4HopGRjEB3XsxDooZPYN95p6bHMj1N2LSxACkPJ9tM1BhXW1Zdb9mPgN1dwmnv9QJd9TjCfpzPchgWLydanUv8e5",
  "key7": "7rxkxTy3iDrwQ3LLDSvJfqP9kdZejVwBkBsqUXq2xGY25nmWzocnmGgXNfK56ibnzpaHRyTHj8b9pw5CtQ2NLLU",
  "key8": "56qQaWmyVhD1MjKmRgtSXGmWLdNjJ6jz3oSRT9fC6VGuMH1xmAWztUqH35Pqd7YpC99igpp5tY3eNvo64181xSk1",
  "key9": "YRQjRmaU9hV8suLeYsJNitujA9X6P5jX21KnuYKoATqbTacvNhECyhaWhw6dat8iRELHuwrb3B7Z1ZDioxtNBeN",
  "key10": "5JBMxLUwzAJkhbYG75gNLiFzvKkvY8v7UnZNyS3y3U6YNx9VCpRRWSfTDZSw1afcZiqcP9QJMzZz95WdGsUe75os",
  "key11": "2txcnbeY6ZnQFuWRprHjov47MrL1eikQ6mgEyLnJ49jFkxf8zGAdpBfuXHmdEzQNhoiQXieDLkT21gyg9MtgExvF",
  "key12": "fe8aCc2oz2TieQjs8dD4BvWWhyRt16hj3dXJDxKy2K5SLjEi5kgATCCG9LRXc1G49nBFDFZARi9xrfGpB343usS",
  "key13": "3RePc3CjB6fG5Ki3ruza6w6kCdCpNE7ebF2obQKPEtD2nUzkSdBkrtDpKQxC4chf76UQ4cvMhUZsTnHZtY2qHHCT",
  "key14": "4Xc8f8wHhhJfuyLcQ7jhyRTCMwr2CQwLbZTR9t8NLPPABhKMfDPfF2Kn7k3mhcfPMW81cfHkXFARJVp2KKeBrKgx",
  "key15": "HsorXX3HkQzAyuj7Kx5x4xLETMhUqf9jszsbmg7Sf7M4sguAvA7KWf8Hqtwe9AX4XmiXL6982f1Donp1qtSpqaD",
  "key16": "31FLRwk4pooWZ8wnUVS6a3foK9LEBD5rpPhtFtrbkPYpaus6V4hMHo7xPCbAsaDT9FkevesakkcMANqGDjy3oi28",
  "key17": "23MJJbMy3mkxKszmLDdaUoCx7DZ6BPznzA2hEoPnojrLt6DVo42QaJe1iEPai8UfWKXXH45XaTXSZguKpiS8QErP",
  "key18": "53pQ6PuQ6xLYhM478wR8hmCVuBYgD722ENHP52xm6f1cKhGq6Jz2jUyFT8iFBsz61wUdeoSEksE3Q8HRESs41neH",
  "key19": "4t11dciNrGtJPuWPyHaaNSC5mtrRpCof5ZvXb4FMc9SiAYsgF8PHNEFQYczZc93tG9PszG7PWbBcQKuCxkHxN3s",
  "key20": "3agN89oMDR9kMjnsbzC1ZYFyyFU6UkhC5X2ch6whR5bv9R6pkxTqjRMi4ipWoFGtKzkvQ1qAXUuepghaExNixVLw",
  "key21": "w7aqwKWhPCnUY3awadstxGP7dscQTpTUoKDxLyLPdw2gUveKQ6cYLoM4sG7R68RZ7TJASVh8gExYtaCRrhonrGo",
  "key22": "4FatUiatbyxjVyjbEpQa4jiX8LFAAdniz4EP6nKXrWHZ7a8bJ6eoNYeNhe6WfiMgje76qqbygkEk7njDzMx6xDN2",
  "key23": "2h64HGhtsoYQGkbiDxampwKzEe2JGZwcPeeAWi6LM6bJqU8585v8cb1sHBr9fum57yD15opdgmCuopM2sN3vH12L",
  "key24": "4upa4GNrPVC1iNnq9hn5BetQomLCH7Y4FvMyQwa2BAaYpnDy5Gu2nFeE8uDdZKxtBwo1dZa2TysQ4Aj8rjo3BFB5",
  "key25": "31pRAwYce5vHK8GRffyrvyAsiNZF5MGkdgt1B7hJBNsRVMHs8LtgBSUne5WxwzrCWsNZ4o3AmvajXwz2cMqS4u4X",
  "key26": "4mAktkzKTraH4FQ3PbddE6iGQkjfF8ArBJpFo3VbTrMZF29f1ziCKneAxNGVUqHhe5e7gqP53pHPWSVwYAWn6dQ6",
  "key27": "2cW7fYZECJhyiyDSvk3LykETwT67AF963A2Eh6ye2hwGxcUXDWWj9X2vDU9WCUzkTSPbJKe4MPoyoJRyXreo6Rr7",
  "key28": "4CyucgQih3yraurWDiC4gbAbs1Y2krCHBWARjs3GfKaq3YC66XuufD1eZBZ6XiApNsmqvLRxz7vSkYTSusPLYrTd",
  "key29": "3TMAoKQyqgSKPCaaoCnhzPp2dhgtUQcNMA6RySP818ygiUWTbtSHJt6a8C5eRxtJcKX55QueiZhBKuHvzzNQbcGZ",
  "key30": "5uJ9GSFRGrXsvoHvjJgdExRAqeXWz3aY9Yo1fhZ56ZgFP6sD8DdBPbvdEZGM187gMbZ8wFAPLjvAJoQ1UBFvxTBa",
  "key31": "2NvC7LHdfD3ZuL3fd7sxprH8NhBxszvc1tCCEahLErYLk6UdLxE44G4NsV5inAukie2R516DBjnKYQsonaxdMHcP",
  "key32": "3cPu31z77CaubeHb3GSaTacCJbRuu79zEVo8iGExJ8w1X6xYT5Zjpi1AJQ47EpgjWGF1PNRvq5geKzCkJfy1Z19d"
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
