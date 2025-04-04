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
    "2wfAQGVudP2kt6V5zaNbJnavV8Ngauugzpmo365VbL9cpm43c8Nvrmrf6Bcbu4ostJxsxgYTe1TPvqZ4MnTRuJmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JywHX1WWVPKL5egC8qFyQMXBAhmEaAJz7pNi6H6Xnd4eCNzPFxt37zvycUAi7KYqH3ScCynQ6wVKigpq4NvDmPg",
  "key1": "5mWJT95zYXLWxVQa2zT1ddyqigNQ9Xpd3N5kAR3EP96YpfTbhjTxoBY9T9CdhLsnxtSG1Be4Tn3rL3uCd1n9CrKr",
  "key2": "H71hTJa3oZKQbUwqa9ZrAw4wR7rmVoh6w6WiRoAD7WeTD2oG7BkDUHE42hKFEfrwA9HGvd2TRM4Ds7Nvf9PX5FE",
  "key3": "4ZeWYQZ6BEmNHXvuJo3dzxcQxooTtb4vUqxayFvWwwSyzMjdw9QHh6XJ6gWq8KqRjnWgjVobb2NSiLwTvdn7ehP6",
  "key4": "3ExH81ZVfuGEtKHqpo3Kwv9LrfEUVuPPJymgP1p5T6p2qoBpwevDcv9KGv99JA6aFn4ny428qfKjDFHf1W4ZARQj",
  "key5": "3Xep6qFkJ6Cmf4UDDcb9gRHNGU4gnj2t8togiGgNabLk1dFkNkU93w288wDnSFbs2amaiKycUyqTadMvKPHy3kQ3",
  "key6": "4AMb8mgajQKz7suCEJ9ihWX77PBFgh1KNo4LfYMzgQWKXXy6c71jS5B74mwEjAaTkqcj4YPJvkThjTFmAVu7t4Y7",
  "key7": "5vrTpEahS5MMwmQKjyKcLvZD7fixFt2em6dYhDeJE2v1SHq5uJhrSL5zshZRAeizft3D4Zib9RteVExabt2HLB4G",
  "key8": "5nSVsEiii38beMDWdworVh96B6HQG3ruVQEA4KAqx8Uqy9SRt9tFNGP2W3Zjzs3KRUcZvgmo1mqhpBEvsJjJxafn",
  "key9": "3y32tkMhztKXePUjj6aZwF1oNWaU7TUn4Bv2fr2Fsx5ss7CVqsRASLmm7VBH7X2dsoxpX1GVJCAGRCKGpN3P6FYy",
  "key10": "5Ndc5okk9Puukhqn5aTV1kn8Ld79EPupUXCXTe6wwR3V821gfn9Ppwi8pQgZ1X7fT9nBHCpm4D9LJtENYtGdgzui",
  "key11": "2WN318GMG7J9B8cMnYiaoZd5gRerZKLVz7cJt9sh7z776ctaNJASNVV1dkh2LTxFxAd2nzwBygL4KSTnFRZHb2hw",
  "key12": "4WNdmVhhnUhK2kY59FEzeTUUQet2k9wLGASA48sYwT1sks3g3NmB1KXvyWbt6JDSbLCzchJxDJn9CVFWMDTA9K5v",
  "key13": "ZYBT7v7gTpyWjBcLfyfzX1XEgtzLzVJR3bN6rWVWVgTDfCxosAfkbS1bacYk9ka13Ra12ByNW9sZvg2yeKrTaoZ",
  "key14": "3SewQSG7tMNQQb339ErQSBTNSBwuYFqzN2vqSjNk1U6dtyTa5wAgfmgCNvT9A56w4J6Uw1otR3d34oHdyBEduZtq",
  "key15": "5E48pyW43hzC6KYQaP4V7B7Ynbg3nGNTjpzSdMh8bDuHFZSbsN7GHp1M25QsDMuNT9NgtKQ9aRiWb9f7L9npX1ud",
  "key16": "cLTZ9V3QMjBRZpKLoCuSoy5XtCYUnmS83iV8zg6x2iVYWeuTMLMJmue5PRhcZGzgxUqGGb5xyqwQJrEtWrXTQi9",
  "key17": "Z7vhtNWUVdYVayteL5DWGaxzpCVh8qcRG3aS3WkNKi9Xfb7qqKZSuyuoDCRKBU1uyPU61D3JasL9EpEZG1cbyfA",
  "key18": "RXMGiqcm6KeSWQ7JdQcWrhQhbGXf9MBg6or7J5XM8JJx2sm7qrSjfawSoTYse9XM5qxvK9JSe7xuFbqnpfPJvt4",
  "key19": "3Fi6efie2FYRoB4eoas7vkc5um5PeaMXsu16YT1xocLNzs6FD6HdWdwwYJ6TTFxvMrExDHhCMDsV93CnFoTfPpgn",
  "key20": "5yPXjJ7ac5EYEPNcpAdw9d32PF5XiPHMvpubWSd7pqBXsL7sMWcr8DvncafTUY7iEQmErUiAJhL3ysDqtQ9od181",
  "key21": "32niUveVjN8R32T4RD9PPeYiirpUSB8ac3dVXApcYLqupxBHWhjMtYYB2dVzvqnV8JE6teyGG7Caf56HmXLMiPha",
  "key22": "3zrZ67nKbZLXR1VRyYDp3q1RqfrQZSjf9ZVkgPyzvhwuJfPuuUUKuwuLeRKSUTnQRz57mKxyDxxwxqBti58drc22",
  "key23": "co3PBM2dpCELWMZ56fMwoLAVrTbegdnM7oCMH3mBfkUqskAz6DUB3FXQB7BRsMbAY693NNMZ2fwgWjwkSTw3eWX",
  "key24": "2G1LD94Euw9e8pt7QmQVscPCsh91wth8dFTgNaEJYV4E651QoDBpeFWnWaNswK8fz6omp1e2KFEx3dginFN5DGFe",
  "key25": "46rczhcCNtqrExjFhy1rYCUA9hZCc2yUZPB8yhZtMR5GMoTJhw2jzPe9RawysBzivo7ju92n55t9wHeEWwGtAP22",
  "key26": "3NTwr6o1VZNHbdzpKdnZwYb9ivgwxGX47t4Hnc96RFhT1HtxjAakYpo5fuBqujEnjqXSaSynuKmLmXNqKNurDQnx",
  "key27": "5rXSbTbXME4E6fYossgB55GCwXyGAwzJ9BWSWbb1ciLQ7RLLZM7KeJrddyfNPZmjKeobDd8AEFSSVxjb8GRjRj31"
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
