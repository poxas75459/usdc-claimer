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
    "44LvhMKhvtLAcWZD3gJeDcdS48TcP1bfDaxT9PyAWry6PDNNgVDa8tHRcdn4n8YJ84rQ1nZdt8LxmXxsp1vPmhZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LsxqhwYUbEQEdnfsf6Jp7mDnBY9TY3ZpMh2pJGUw4g1DHmqABzH4PEAy2JUKEvPgZFN6BAxSu9juXw3NXckKDjy",
  "key1": "3WuGBqGuPDwvKr4E3agiQ8jG9BxeaDRi2vYGk3NxrHSS3DGJmFsNDfFPxPxibE9W9JJGAmBTvzCQaf1wjMvgTxMS",
  "key2": "5LVzyc1jj9m6sCdtoRExp1akA6s3KK1ZAjrZzmEFAy6NTk3gB4m9kKjWTdUFfmg8wJcHEX54wnV6qNKwhYh3hkb",
  "key3": "5ZVTTqiteLNxQZDB9cd47wc86T5PzRFcDfA6h8Bb8G2dEmYLUsPkfhy2LDfzUmHuFtVTi4Y3C2R5v5KyP9k9fgBo",
  "key4": "ZJdWNvrm4Q3Etxjd5cNNB4FsGjstx92dSweTuVTCkdeHATZjqybEmCvagLumCFg5RzNPt4TrsnRcT22xYwQMhcH",
  "key5": "3FkBnBPiLQbJX3vfMrkG8cuyXbhDbJT7rnRm8EKm9X3xpiFp9YfDHV1vSFzJkU4t2Mc729g4hmf15tPoNbcyAJUC",
  "key6": "3VA3vPf2gXL9QPJtsihNacXgzLSobs4Fa41mhM7nqdJoEPm1F13kNBW6bdk8JumhzD4eN23ASGLP1W7ZJyr8qLpe",
  "key7": "5uUTFgMpcHJ6dyMnqjDFGSpk2HQEmpeZNh53xtwCY9mqKDufsrR4V9MfvUyWEjoKeTkds29xa6DLpCpQLb2qE16J",
  "key8": "4RQMZpTTnMY7dct5kk3vUZy4mLkgRP7VcpH3YM4rPJcSG5dgBSU4uUwaqWd4i3uZiey6m23cEeoFHVrQBfRJ2enn",
  "key9": "1wK22BRUEHri7d6zfcYaskHodknovKRWuVxoZHVXZzAMv5Hhfwp4yFQSWn6Dwj65BmRCs8rddto2vyGefsmfsja",
  "key10": "23KiEq3KbRk7XGo1NEz56iZ9hMFXM7GtgFkgqpoXUJzkqnw8WaGo4tGA2fqfo58y1LDCbZgPUU9ACnkAw9KTt5Vj",
  "key11": "5vfCnoW6D5VPJs2Ygbur1h57obYDbiUVU77yabLVTLmUPup6scBcv9LeUtsC9GCUszgU5psDzL5BYq6p4SoySoRx",
  "key12": "5NPWJZVDxCVHmayJG7U6yPDi2FCYhPjuA4Fs1QTCJQzwtJ6fPrBP4p8DmoiKXtA5Qqvxr7FS9eKkWjBPVPTqF1cD",
  "key13": "NjkCBaTmpghaAo5KAMVW2FKpn1jYHuZWMS4CyhPjKXC97J9fiqdP6Abv4sCULTrXS4Q9LVg4Hmhiu7j6FWKWycB",
  "key14": "rjLFnkrGy83D4jjTFB6uAbMxRHAd3xGbhv5Fd9QXsPj81nq5rk4xCdac4NJJJcd8pR8iC5wBhhPN4fvrk8GXj5k",
  "key15": "5U4RLaJPZ2PaYhm5bCgqpwADM9NkAp55tAtaBPcJyBcL95E2KBRtMLJTGV5fqwSAbCiv5xUv3Lc5M7KcACnv3WMp",
  "key16": "5ZQCXWdTR4iYqYdjdDLWZJNKqby9E6dexjz176wXuwaFnuZohYqNA6jeSg993KhRrsgNdb4qzBpCUATvq2sTnVYW",
  "key17": "4Lh5hDnUj1uMZJpvPsJf1qPTXEcZTgzSEPQThPjfqM15TuWVVo27r4Mwa94NxX1gkLAXyKLALgz16NfWQHhpU2Z4",
  "key18": "2gzadD3j4KqPkKvYLNo7tn5PbneJ1nHWrq7ZjnygeYztmpgfiMUnMaxE2YteEFPWrYTkPPBkgnNp9KAq9xHsLVoj",
  "key19": "5jioVG7MdTvTM6Mj1aKvbWX9xhrL4A3XA3SgCe2dxE4M45h5csjEz9vKPcZQqRf1VBFZdHgWEALaASaZkFE6ZwJi",
  "key20": "2iddAYKfSnnu8aCGJzPumAsKhrSRvZT5XvpbNW3y8VDHNpNGTYJcyEBGWm9wmLmUWo3A4RLPFPhCzqARxzsyqJvd",
  "key21": "bUYkMBcFXzzDTgsYpRcHqcf5hmi7LR7ob2vyftk5FyMz7LezJJYXzLUjja8R2xvtZgCkf2huGvC28wgQTRA6SRE",
  "key22": "5jWSytnMbrkZvrzd8fy6jbw3UrLC5eH1GFzygh8LFXWzaA9Be7pHJsRbMFJmovLP63hBUStWrLqifSAiWdBCBqoE",
  "key23": "2UgbZwX4jLtqBco6iuHfV2WM3sEaPBqu3wMvY91AfqmDT5UDYntzmRq6uy9iNETnRjjyvkk9orxN2GheUUZo5LaX",
  "key24": "2VwtedBUNchrKAoTQGS8eWtvBYPe5Aa4iTnizou4xsRzWo1LSy4UBx7qPcHJF48L2ZPsB15Tvxqoq2qLXwMKC6b8",
  "key25": "5E9eghcnorsr9Zos8JRSvvWbVnsbyvtnQi8SkHa4J7xV1LxRkXBvDvmxqVex7i1Ws75YBXABwd49rZEbHGFUGF1D",
  "key26": "4tJz132ZyzRN7G28tiWsYZUFvtsKBNWwe8c6WYdVUTLjwErvHDBRA6Qg5sAcJUGzqTVR3nV7ymicmbiiwgnSpdWQ",
  "key27": "65YLERdH4VvHJgGQrhE3Nup5XZapXrPpmxgpT2Px4ycTDSNMYXW456MAn4P4zDZYaxNrKJSjeuMJoYdjJ1NTFDcQ"
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
