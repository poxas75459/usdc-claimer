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
    "2N45hh6VETm5wqWKHQZ2pj6jXmenXjkRF7XrZCddVaVMgyws227byTN86eeypo1aBfJDcGKXioYniWs21JRKyK7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "15c5ht3EDaGWxhPjZZEsbpE9pkL2Cg536B7akzm2J7WjPkLRzQBDmQiASqBYCihjW15qoW7wHFt3996JbsNSvv6",
  "key1": "65uTPdTeYjTCEEV2rJygWrEhgTNdys4DtnjikjvtnqJuj1CPGq9NFV8W2QvTLFMJQRySaKb9ntMtT5csg6LQC2Yd",
  "key2": "2fhh6yg1nd9VnRDdLgRTrztiw9297Lz1WYFQT9BeB9KapoYHLoQLYbZ843EBijBbyrNg3etHeVM457G6ymAWrKDx",
  "key3": "26MWGcsEjo5rYdhYH9xDKqyFiJXbtRL5zauNmc56zG7rrHAcmexUURTCyfxUtqgErHBL7Ht8CjM9nzRnxT3eiEAy",
  "key4": "631NAHGDFEEfQhiYC2Gf5Mn8QnqvGDoMcbAZtCyiKqUvc9A1zgQN8mH4bNEesGW7FUxUSd4FjnaoT1fYTsh6jSBX",
  "key5": "mFt8v1xYF2KCKBnE9biiB3eMkwxBW7HRcjapGe5kpw7yPuBzT6sxuo7R68Yzu4dZQGSKeFdZR1LrNqXoK2L8SqJ",
  "key6": "xfS42nTtALuEsmC3WpQ5Pe1FQDNZTodeeFuG55teBAZnLrHt9kqPM9GnbWTmhrrgkbdrhMDvCG1sRsFXjUfbmMh",
  "key7": "RgvyawFjhgieFndR3h2CBEuEcUd9N6eRMrv9NwRsVswPta2knhk5WqS7CAMBR7mJJrPuzZgKY1sVKzANZuYEbKw",
  "key8": "3VEDZMLjZ6KH8Y9HHMM99xUSs7sDKkm3FDNqvYhBWgN1FAeuHbyRrjASDabcHo8ormtpk9nCMpaDh3zo3CsMk6KZ",
  "key9": "36bEkGz4NTQLuJdPLL7quvTiXyX6yZdpKabZKrFx9whCJSMFB9wP2RKPDiZf33kxaxoKRDXhHoThmXR3Egs9QDid",
  "key10": "4GM2csY3pWepMKfHrpvEW7eJYcpg6F9C2WRYThS5GEN15MDjfX3onYzG2Uz2jgXRi6DQCKo1DhZoUEn2NEF6bWuQ",
  "key11": "iPpP3udvcT1ba3Fp1TqP2gEheg4PjWrAyvYfrwHjK84kyt52QzP1RSBYdrKzx7MyTNnccpbNnVBMEVcw3tXoAwW",
  "key12": "4rvEKPae5iA5VFmPB3aipADGbpLZGkpTti21ZCUunYqaApxZ9Pds9h6hrjXdCBT7vpCjGi73o5PBfJns26ozAbxP",
  "key13": "RvEj5EFZc8f75FCi64K5A7N1pqSiHSQXP6w1WXhdz78MNdcFTtF9RtpE3pdygPNHKTCwN1ZqBfCgxomuD3VxMXX",
  "key14": "31S1A3cHUKWtxVbXKWL6H7LQXk7AVZxzUbuLC2QAM5U7TY3Y58N2P5s19teuzRD826pjmU7Xqc4CkTK4D8WYemN",
  "key15": "e4R8w4SceJs3i2ztzEnd8EniKarTXUXuLGruHF8mcReRWpppEwpa4dcTQUmYuknLFL81aEFH2ByhnifxaiLtXUk",
  "key16": "5DHbJFV8M2VL3xyvm2Bpsym5wocfcukm9xNgXDUDPGZ3tSq1eMKHZr7axPhi6xiEDmmjcMfB1q79e26Mh9nHbfxZ",
  "key17": "3ktWBzWxP6TZ1Cn5uPjxVXMTW3hkZVuja9XhoCr7H2jGXFdm5XXfLWQmpg2EL2S7ZV7f8eSeM3F8VjosDqpzRsDJ",
  "key18": "5ReWoSKbWanbh4ZMbxRKoTkmcaCogw6m67w1H6cPD3jU4kZszYMPLtxhH9HEXw8jafMuBPkbxGhUSyoJcDafwBQC",
  "key19": "3YXSyKiR66L5ALBTy94C4tgHvHkunayzQbxfKcEkoC5p6BkzcgtZLgodRK8jFfh8Bjk5sV9DYob9TUNBcbeTY3w8",
  "key20": "51QBCToxv47jeFaNxP6Zdt2HG8cgpzLJ8r5wcW9MKhnfde7rr144c6VnnYe8BhHWyXg6rbHwRvCkjVaFWyjaBLtW",
  "key21": "3dYipDELYsHNmbrx5ar8yrDvLLVjzaaxvpPiYM9n2u8U557kosdPhA2nieFdWS1VYYoSBLBKAA81eug3Ms7xYwCV",
  "key22": "5FE3J5FMfiF3Pnvo1fh8qaPcS893ojEgD3Nimyg6dod9BGiQCSUwxQNwcKMAeZgqQdFn3ejN1ohpQnmkB1ZPyDBH",
  "key23": "4PAopWLao5tcsRCw3fjnEK8ZAGnzujV8TVKnvaMAfVchbLqegpBxp2v7jLDTvTPKqaRJbfTwk8GZAcuLprzzChcj",
  "key24": "afUTFi7hzV7mDv7t25mBEfw9D3ep3GfPbsbtuFVZYEtDizcXedaKZQauwK14QK7RmngSw5ibLJWsY8R8f5Ws4Si",
  "key25": "2nxoQDvCEwKrztXWvsZ1P5UNtTn7d5Wa3a3oKEQdCm1i9sXVkg1GnoqwaY1FZpKYrrj3wvEFkucmg5nEV84ZpGDM",
  "key26": "2GrEV7TcLSkxtJC4NuYZsJnx5yi77eMLoDeneiviBuVAn5NR1aQH3rg674QRjeQ2L6evBwHNDuH9sj6C2nTGaTtz",
  "key27": "3Q7itePdKAaVFDHopWG9kvHHkpwbqfMz8qkkjbXvxrGoY8R9Y5TQfJvjaK5w6C6JmZiyyQZPnLQrxSzgQmN7q1L1",
  "key28": "3X3nrncbExyVwsgZizcrDM4KcWMPqVbN87bc1ac1BfXLPCQCFmL4F8cf7T78t75pnpeK91HSitcxLkDBxBneDh8j"
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
