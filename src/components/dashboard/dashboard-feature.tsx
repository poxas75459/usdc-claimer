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
    "2dFBHGam57om8an6dfRq1qbqEQXsnf5ftZgNe6JXwwgmYPqEFStkKQikFtUbdB6cnykL2ie7kgmiegTSh71zZevR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6BeG1kkH3V4D3mEsegkptLd6ngdQduvSF6eWYhYjCm1MXChVbvJCjv1dY2G2MVYyjQuyk5WaGTkiReVGs4aAM5M",
  "key1": "2vnBG9REGTLzr1XCAWVSCKZSGGT4fJXjeQGsG8njGEwTfG7R811sx8U2JbuPjHf2gtwis19o67YehLV4RvBfhP4X",
  "key2": "48m58aZWqTVuQnSWkn1BCDrjSCxHz3FQUkiEvDkcrUncj62V8shcj5dChW2daKaSxjccECB8hoaBYVGGCruP3iH",
  "key3": "YoXmjXp2t41WVNrsXHXkRFxjXkZ62VPV6VQNSrDZwdYUoe1uNhPio9cNYkdS9kWwUKpBLuxbDhPYUmD4fw8xQCS",
  "key4": "4iGuBDZU92WFQiRxkJa182PQGZ35UyZzL197VZYRmgy6c9xmMYBBHzoEYPJ6aeokQmKkCHqZf1B7seN6N9raqfvr",
  "key5": "4JaGxj2FehGJWosocVhECopRPW3MXsRzyRZt6MNCNfJYfncJd4P6x7pjCsf1h4sqzxQtoVTrWxXeMSiHEYxWkrBa",
  "key6": "4h8tTD8jZEYda5XySftpxcGAwy1snsTpV1cGpyULf1EGDkaYazgbP7yBPeEmSWDSp49YmycWSento5Dgmsf1omGG",
  "key7": "4eex26a8kNxbvwsVtkN6PpKP3BpjgsVF1wZFgtSmZZ38fd2SFtTM8gWDeVLdyPzywa3HJzRzYie8qs9WAw5J6nUN",
  "key8": "25HpHFpCwgQ61NJxk2YZ1wgk7RArYtUkoWUy4h3eMmBFD8hK9jbzZ724KrWvnj9TRysMF831mB7b5xG4tqUXKLoY",
  "key9": "4fvYd8taUnyESyXhgqKzSeCi5TuwqvWfad5cdDji2m3VToQs3KhMUk1HuBU7QZUNuPBV2McNKgqEz4UacE65k9bD",
  "key10": "3PwVo8Jb1r3S8WcFdK7MTF6qVQe1QMyckwNxsbUTLxCzLHFKGHT2tZhPXZseQ4PQeFLdhtbjRtGQjneTYLAR9V5G",
  "key11": "54eMre7psjnJ8RnxEzfAKaXg2RVvSio6HWyQP3Vwuqq3iMfuMioPAeNtJv8pRJKeztm1dMoXhH8QkGB4qTVS5bWT",
  "key12": "59RdRtRLwDF6dPGjC1R27J3xBZTi8oKyzRge3CpYBQdPVNr3vj5nHv4qU3iNx3TqYS7owYLfZc8S1GRUU86sPMuR",
  "key13": "4ejq2v2EiGMnNPzTxyeTYXhPaoYHQguezu7pe52uzKVS7DtyvUy1Qp4Y8Jr1T99paED5LT17zYerGM9fjsaRUaaX",
  "key14": "5fQErb44vQDTXSNixeGK9wzRYnnU3UiZkqvitr68VJ7DfTbi6FEffjQ2jWNzPuxXCCtBwi9bNYZDvR266RqkrXzq",
  "key15": "46Uz7zBsw7rA84F5Zk6WWnpX7vspQp1Np6ee1xou2kppCTcuc7CcxsAqgWz9XqjoExzKAD8Vo34XMf8Lhiknjxcb",
  "key16": "3LZEpWuX33vWSWxSyBHhJQHNG2kvnFZ8GV1jKy7afj4ghCDsRXksxpneRGXPirJEZSCknDMYe8n1WbzULiiEa4zA",
  "key17": "4kFqNBTf6Zg8aWoQN9E6qFhCFMdaiULmsKeT2uKtZeA9zEfzhNg5AFNLKhAr5F64fj3agxxY6jssb2JMSWCeh2RU",
  "key18": "4BahxTcpLW2PMYKM846A1qq6HkMkKRKL3RDqLiXJvk5wHps1dRB2J5jLjSy2y9pnLeY5mkyCcHYXXcKMN8aeTtXJ",
  "key19": "21rzoBYb7wJ4ireeApLH76CdBpA1ZgPBH9VqcBUa9addeGtCuVS73JvfGDdP6BGR3FkDqwjuwE1ZAbzFAdxmkvWC",
  "key20": "2BQqCVyvm436o1GDZCbcVsDMYJHawDvUW191CLqtaCaHK84wdpJtAn9Tdq7w1MaJv1VTY7HZwuEJeo4Fdt5q8cKq",
  "key21": "66tFQAdEK7pHwkyzCguPvaFCKKY736FjMnuoEBW6LdWZgXNVpHxXhNQx6DsVD7kxkRNmFxayFAHsbMHbcqkUrToj",
  "key22": "4sKhRj7d1M9ztikcUSumpHkB7JvU5F9NhuUvihyt1zZtoM3XcUqLUf2LWeRnQGYYxDJBrgiRm1BqZVaB17BBCJzw",
  "key23": "ZKTsfZrvf2wgPuyqK6vpbWDVjGYWhEaZwHw6BGq4qUmRNwWfuDJcRUcB72NQJ4eJMDRRAKhSjBBv7ai3WnBeUYa",
  "key24": "2dk5jNS3HrfRLzSfkoLY8gKYXEHMyKWjYRFs2YY5kNdn4ev9MDgruVvVTuDaCQQ9cYN818gy8amrFtSE6Gmp2899"
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
