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
    "645emtYrUecdFE4iu6FYXW11E2dGiGS1QoBtwtFhtZt4HqNQo8oacyYYHXyPLRWFpfbh7r7cAuLWmorv2X3dcnBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y7cb13UcaRFUPAbdRk5abnMuoJZnXGi1Rsyzc7yKFL4ip2jARtywrtCAgrDYQY12FUwEbaEpfTe1aAuyCpgg5yB",
  "key1": "2HKNVBsKfSSKcxf7dErhcSQivQSkuJJyjdoeC3cxrKBwTtKHCSSfKf8eAFkTBi8WaN5HChq4LccUFvkU5Rc3qUt3",
  "key2": "2C71bYmMNENBjGBxGu4eVXKU76Mrr6S5HCuA2tBQo5Vvp7tHaEpxiDJ51PC6rr3z77dfc7eCte7xhkyNqffuqnGi",
  "key3": "21vcyy5xqpHqKQ8LeDPCQrbAXXHUC6tQmrUK1LU5b8HQMzJDUmUMhfsbKazYQ73CytGgM2HiyUtNr9iDfjQBroUt",
  "key4": "5HczzERYiYs1Th9wiM2NwiyXxoYLapqavKUMeKdmApkM8BxUptSawdm1FR7ZfsjidePtBiV5kFyDsmhCUUF4zexY",
  "key5": "2DWT95A1UAiAsTtQMFtCreQe13HY1VM6FgEbo2vLo3faZ9eJSNf2H3qtNc9RXzRF82F55whhQVhJDH9TNYPi4e3w",
  "key6": "5a4x8jBguMcDNbJ6JD8vnsQUeGLU2THCULZvaw65hcNzMPsovrhtRyqVK5AySaW6CsbJJJh1SB532zU2Cvv8bayx",
  "key7": "5zSy7ecyqvCBhmCaWgqtUSWDgR9NbzpWCWEVJT9kZjKG1BbByPDyK3zL31dXBFe8LBMGZr72fkuyEo2XbsdL9qct",
  "key8": "2f3uQhpDHZpSRCC8cKSDm5D8ALnajKmWHDr1KgfkJEZTLXGKevmnuzqEpeaW6wyDMGwfRBCAApUGbvC65e8vNYmd",
  "key9": "TzVMBdo4ocR1XstWFvbr7yNgCRN8iEaX8PTS7HeVDGkzcXNPBr8VUaAqwSSDUBNHPkQZa6ZejKx6osBfMP1pgda",
  "key10": "4JtYKtd64NjJSXqJEu6s2AZkuFfeNNm4zz3965V9gJqJxuyMM7cQp9AfdcZZVT1jsngnEQGcxNKuPYvRqSVa7mJL",
  "key11": "2AogrSvVLR55ouHf9NfZekP9zkeocoC9ummFWXUqJJvxGoNWQBhGXnDm3ogz33YtdSgNamBfG2suTJ3GJ8eg5oWb",
  "key12": "NECCckAdN5rdfLPssFT3oRrK8c2J9Fs5znHX46SyMmKPfhJwrkimPFbJQXW6yFUccTrQrVGwmuBDd4qoCoy4ykc",
  "key13": "4PS1uRK2SdF6TiH8z56VMeEwRPdkXVgkscQ8CDagEubs9EQWbDb2H8wz8aReJpfoHjQNigdaVAVUz6rLHctQtJmK",
  "key14": "2n6AWXMWpWD5qrJ46vf9JfjyYnx7kc4zkfZz4vYQjUQcwgyV2i6eYTVcqMVs6ECQ34h531g3hk9NhX8itV9aVQhK",
  "key15": "2vFDyXXcdhzfnCqihcz7k7QaKzot9Weoz9ZGwAXbR1ujRE6VEBLUxwJ9BHuHUr6NxapH9QjDGHzxRCNJeV4CfHT4",
  "key16": "4xhxJ2Rz6nLyfuJYxnm141afFLZaXpAw6qWRAfMAgDhkNBXck7aB6qB2ujn5N7sRSWEfGp2uc1KwRnLUQyuW6wqe",
  "key17": "apscVxn1h79ToTEcfuc2wPYYnKPzgDkMedDkvxF9oCn6DpaybeuSJcTuGLhctTCrgAFhU7RadJddm54iEJ7QMi1",
  "key18": "3xcWoo9YTNXupt7Vn5MijGe48jT4pgHJRX1U2RDn5MX1tcNdqLXhdj9vav8MdvWWG6frNT4SW7ZUJMRmTT4aoJtS",
  "key19": "57DKu199c7bLnSAvj3nRaqHtE8ZUu5YDfSyTQuprBSCoRWsGhvmh8WmeM7nGBn62dmSTP5L6TbKNHtHeFe1ANwfC",
  "key20": "58UdJQXmrceLsVw6pE5DTH39u9VYCsh343TxNqeGTFNjTPyM3LpFtod19B67nyzK68MDj5nYL4HTe7X9hzZpzkNi",
  "key21": "3avqKYgGLqif7LPsSRCBcNVhaDXfWT7Ja9wUBJWUmsx6HXmCPbTokLhPfX7VpMyCDdYk75m9Ut8b5Qboam7NViox",
  "key22": "2RSV1NuEjWRp589z4nT7dd193Xf29kNz8sJuoniFWQhsr8yPnoF7SW6UcHvHPvUYZhu7hvbBYfUyF1wvC836eyg",
  "key23": "3E1SBSxkGg4h9SUK3nKKWVYYCECAMt6z4PL4sX8XvNFfg5zjTjp2NJ1mPgZDEcKHpZi1wtkdhvmduds2k9Ekm883",
  "key24": "4pxNUAdxUDvKhGQqTW851NL3iUZ6gwzsLJcUfSkWPZ2vRVjENGH597NAA5bZRsdbJ8VtVDnZAJvUP1znG484a45A"
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
