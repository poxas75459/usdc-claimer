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
    "226B9CXWErXKHH8gRN9ZJ15o8iewWVrdXhTA3A4DLE6MYQ3mt7eY2NN9SzC7MXvXhJDJ3cGLfYtMHPaPhGhitBKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LFR6K5KbEsoDNRFRThiGA31d1xWaPDkEbFdEe9DS74G9j7uCMtWQJd5HuW1htUwGgk9CkPdyCJn3TxmTpTaA93X",
  "key1": "3x7pBrHNJWLEFKLimnrSDeMiuqjdtcuhQv8gKmioLc4Cw6F4hvbqCxxQPhNb1DA57vw8q9tWbJU3aEzye1EfkgHc",
  "key2": "3jzbh2WgwLQbRoUb42kCZecgZyaEqnNDnfQsekRuKK33P6SnTb9VRMJqDni1r2HSLzbvMEUvQzpNPdeNKfC7byrm",
  "key3": "44F46r133GSuWh7U1E6CredyU6iWp7MdmZuHKoGv3d5SsJ2E49YU51t7Mhi8s7mrGBmU31UdH1QB72GEn4F5tMFn",
  "key4": "FFe6DCG2wjkhnhwuT7odTQrXAmWa2VkReMF6eWRuQEGkhobzwAmJ1LiUvTnnRGSzL4K96A9at24NZdwbAboq7SH",
  "key5": "5zTEvxaNfhUSmVFodT36jmWvoRajqYvQoJ5e8B3S23tbjazcYakx637QBXQ61zDLS8sn5Se8RpDQX4DGf7wbZPCr",
  "key6": "44wmd4MSscJYMERUBqJjuRVobJUXzNAXA9mvsFGGZx97yTvgn9aAAPog4jjjQZcTznKexgoGhWixCZe1RPDePSNv",
  "key7": "5mTPc6c3mogzUqSwAx7Zadf17DNYpkgphAS3k5henzJT9NrQiZijSVzNQEEAgiYuo2MsKTaWyDdgGEHmFSrB1zK6",
  "key8": "51BzEgUZ2Y4SGE1rbEuMCbtaE9i6nZ9GeHLyQumJA93PZbqdm42Q2LUFmjy9gPXC7MvRjuqRhos7jVDpLjHWTyzH",
  "key9": "iB9XyipPY5xxwtZ3np2kCHCKySR67tKjKgw3u8x6AivC6H1f3Xf3xHDje67w9CetcsVwuiqCR5cVTW1HjzVL9Da",
  "key10": "4mwTA9X1cEBgpNGgqNZ9RqAa3vWvyK7RL3ybcAhxKgjgEdxBNBcXBy6movnzLG3MV9dZtW8XphLVcMNTktHrch7j",
  "key11": "2SnURyyMDcf4ExHjsk9mFf9BDkDJby7HSzGup2NGeo2Mn4BDg2dvpDkMtC6FhqFq6KEdmkGB7DnjkCGAdVeU383Y",
  "key12": "kfW35LRny22JGKp56QCGuxDTTRNA9j6XDgJ2wXpJ6ojbomzzVjXrL1VLG8LjCRv5jY4LQ1Gzkv4S8hQ1xmeXKLd",
  "key13": "5V8amCeW62jBazaXkCHGekDqf4gM4KeMWUS9CQ3M8toupA1NWooaWL9zbHmrvXtJDxoqD9uM28v181RtSxoaRu6G",
  "key14": "4ikVbcgmVbTyxHiRwxhRzWn893o7s742aMhrimUipcxYYdAnhmzPA3WwAC41GZzwMsScz882oaqjgq9SXRTVPr77",
  "key15": "4ie7iYAJmWioris49MkTP4Hfs19spgWLJP1BmjaCCWQsGvzvJd4rdFUSDs6HD6aZNCRXRLPjc3ep9rMt4MYkrVDt",
  "key16": "3ABSkphDsLGCL5ELgQ614dcrRC1b8mWMXF7rAbKGVi7mDeNbZTWMwLZXdGVYhLpauMbUPJFzGwhtx78jgzgW9vgo",
  "key17": "3HN44DX6uosUzNYiZYcLundb9rT7DjFMhwvhnDCoxL1Y8sd8GeEhCmwY9uoZNg8WdSmiCnLHsssZgicFk5nAChh3",
  "key18": "w5tHspzaedc58U3px9QWPb8pYbJRDsovhYSDrD6LBctfksjo3tQHRJTEjoJW8UWCD7zgKkqPXMAYSdgm2Bkhdt2",
  "key19": "8MDo9oTysStyMjtep6iu9wPFK6efiFeZkovDXpYxFwQUx2X5ut4nnCoQCrMYNb1xXv8iiCEHsGfTWmrY1msRnTH",
  "key20": "2qRsVFRwaHAT78ddUPu5EDaxdjDzwZgNP3HERzTQt2KB9ybargDc7hRvPQr5kKEU9VhoT7LimML1RFKwCggVvvsY",
  "key21": "2BK1LDQbjThxC8dHfk9YTkfDPCAXTGfPfFf6u4AykgYgGnfbE2jEy27Q2a6uGNhmwG25h6mjxcFmd87PMPh8Mnj",
  "key22": "4bjn4vJXR77xKC1FRkKdUdxXFj7v7pX1Lsxtg99eyEjz1ibjsUi9TVKmnVmCNCKYfmB8mibGQVJTHoAX4xVkLpvG",
  "key23": "4Lmr5KcFJ1b7yFsfpq9xr2QQovterfV6BmQnNqzsnPkWKkBdA6CUXbmLTGxPqLuhDbi3iWJbmyU1c3GXZAjUEhyc",
  "key24": "5WCeGDXVma3ebDzFNDgwestCpus1saYYoeWCUVUpVs9xDSgHc5CgxJbrJgf3maeCun8GgxoxHeU1cf2N4Zmr5LDH",
  "key25": "4182kBGhp5qfs174MbHdWHaF9vQ3mNqURBNMM8pPi4nJPXNRet6JDVdJpCdChAmyevHgr8xnnHuAkugwLVN5SLX6",
  "key26": "f1TfnouHbN1N5yGwPowiKMviT8CnkvM7oaRkyk8iyhUW92CzBseE3PdtdUxnrLNXbtN7uAT2ryAQ2UPpKMqtw3z",
  "key27": "2wJDGPHjzNuDVNiVV9k61oToPA9ofExdHD6CQvQgAeWDkNwzZjEexsAVTRpY1DViWRbFfR56Bed92piz7SeDjS3U",
  "key28": "39GCvP8PRAGPLnQnZDx66CJGUvBoNvLV4wREhUFGTR45YMg5xtq26bxy5nS1cUqavNXZde5W84oUrPVWxYFCsXza"
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
