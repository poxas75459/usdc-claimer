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
    "2xsJZbVWcxCJVQCjZ3q2YnwEd5cooCzt83WY5icYjk2LvrdNEd9QkoHvqBBmEYhobFSe3eoCUVovrzQGYZSepn6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RwK8KU9DDr96hSGpXEr7j7zx5qyst8H9vBquDHgoGREotvJghZtWByQCCQGY3pc5vLFRyqEfPXXagjAQLRq5Nhg",
  "key1": "37xqzSDeUtHrDSuFkytLc4feHq3ZNSNgoX9U6fgcni846mYSSPZKnvz91oaCWGwk1vnL2p7Yr1pcu5XyJph3iVhg",
  "key2": "2tQcnjSyUhB2YVTPc7qfQByBtNxdza92bPfYiiSiXx8EJkWa1Mrs2vUtUKiZbAB44J7k4vAscSnH23SGJTJ6ppVN",
  "key3": "QqPFUjvWj94oty8TB7AGmHoFBfapE88U1SZ8bh1DFK4HaykxBQGRFMnkS4bLf8vxeEwp9tL9TAtmSPchQYzfk4R",
  "key4": "33Qjai9evTbXTAVvwKHXYYohpPPfWU89sGBWQtcqQ24fdKiKWwvj4kcewsEECyHBePdCJqzajWtt5xq4d2dvaigk",
  "key5": "2gV6W62R8ywaHgzxQjRRpuxtdxCS7qdYfRXNS4ECXsNDUDohfhXPXyUZYS3MrafcAP9FdxLkqSaX5mLkkTtoeXi3",
  "key6": "Ezg13DwhWDdKP1TxeeBusEZWgvkuNzmNRX4K3D69jmTVH1oc3Q4Wx5x6iqPxKgorgdRgemQbM3K5Bhe3QoCGozX",
  "key7": "5yV9yS5jJBTh9yWqTD2fnYPy4DW8Fs8wg2T78ho3hQRpntCn4uRy3EShhhfUVN1CQRrwFEM1RC9xrhDd9gLUFMsf",
  "key8": "5waQJEoQHKusVByHepxfMgfsJwhxkP8qFVp9f6gaLyw53Nr7quZXkLhHR6X7BxweEhiXW55NcDAGcYEk1VBjVmrW",
  "key9": "2nfJYjYL8SkWgUTSinfBbHHd6MmuEwe1j88FVvQY7878Ni44DHwzt6zXmbfP1A1hbGZfuugudsfaqKG4jEbj93AW",
  "key10": "5vN4aadWUiMA8mnKqqP5jGWfx84KpRiBeuYZ86uRYvDRQmX9jYsnjBnqpyMih8WkbJBuniAhS1XMDStED4T9pqjF",
  "key11": "3d7TJuRQGLj6mchEbeQeVegNxhXwmh68QUqafdc8Br3DoGRaKAHKmz5jwkkkgpTKdjvbiMqtAkdigS8KvsSeaCfv",
  "key12": "Ch3ouKfgg5m369YnccRjwLxCX45W8bmRnZeBX21qagAFAJehm9Tm2MKQynMDS2rwMbQsKr6uq5W3f2wyBwWyiRe",
  "key13": "5dFuFqdwcwos3pXditxh3SZnAE7MWt2CJW1jxyBrpmusDpRdHZWbNF99hP9J6jkf31hVr1symnEMwWKSvFzhugRp",
  "key14": "h5K8suPCUFB6A4kzQ1b9fbLjHEivSEcHr5LUsnztXZpXYHptFZbXFWdthYt2DmgadsGqym4QRiUqDfoc6L9Nnrf",
  "key15": "58fNWRYCG5cRAawFPdrCZ3T1zcCvB9dJGQ5zhCWXZpRGuVSotBAcyHmZ4vHLKRozELJvK4SWL7Dq4nNx4SmvdcA7",
  "key16": "3YT1U92NyhiEMxrXNnm8Fw4fPbx2AspKfF18DCfR2WQfETXgYShF2by3tJMZKEPAL2yomwbPFeCgLwtCG35jsZNU",
  "key17": "7kzatp9eQbaHHy86HgEuRANCPbnxHZ28f4vmRvcqTfZTYZxJo3HcPrA6YH2ot5QmazUUXkUZATdvrARQ85mJriP",
  "key18": "5QoxNzB2NJdqKrpn1YX1RB4xbRtNCcNqAeUGbvv4mtX3GQgUC3T1XnFrH3FJZwwggVzWha2QGRuT3Mfw6DcmHyLN",
  "key19": "2Q6ayxehvhpoZLSvxvJBUb8fj5gfh9ATncQwEWo95mNFTBMzskSoYbieYYQAn1152uvDQfG311CWb3UC629qF6T7",
  "key20": "5L9bEANG976Cs32zLRsau9rXdfF8CmNgiLqhcWfoMxS77RuR1x7hstN6pof7ZZCGZ4xZbwDLH5PnWTkjFLk2C2vz",
  "key21": "4Mq9qV5arMqtc4DikqkregAfqBdW7ynp8BbKtDFXJdJafpVCpJc8pm1f6hcUs6DjEQqi999N8mdbLscuBXLCW7Wa",
  "key22": "5PQ22oNiRMFhfU5XHk17of9kXirdigwcJ7sQYgYCHZxRPRqPnxENyJR246HDifVNJrhBrbBQ9W8S2DaZghSxVaYz",
  "key23": "3FRPLfsuNjWFzR2q5FvNknMXvR1FBxBDTc3Npys7wPkQanj5StyVZifESUdeS26UQubjufVEJMCGFVMonv5wEpPQ",
  "key24": "4GD3pgcMm67k92EpDisg4ujw6BFyugXgK84o8JA5DT6KBrCx8GsTHuj7HEirk2QBUF2ULKdtAvPiEvEyr9jqzJ8S",
  "key25": "xQsGdxQmyHxTsNzSWvT7DFaarnKxsLhkgboTx49FAvF14Q4tU6pgxCmqhHuDYQVqrRvRkzJGUdsXxiyivExZrrH",
  "key26": "3vPWhcCAr4kLzGmffYGQandnvXzKcM4XFsvVVTUqeJikthFDs4f5fFkvwA1Wq2eunC7dqMaNof9semU3zKC7Ycyx"
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
