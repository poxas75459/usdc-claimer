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
    "3Mt3GqVjhV35XKycHSyz3JiifRaDz464RvRgmwV3s3tum4Zw1LhYoZ9AVpfEkkhtJMG2D7zT8KWrxAZg49La2P2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22CjGXuPVcfkNvA8EnitTXPTDnBUcg7XiyoqjmsfRENFBiYPgyNUvzWDNvZRHT4hWbaKKVkSUAUKXWJeXsUi9Bx5",
  "key1": "5snACL38zSvEsqQw64fudakdMVe6t358P1943QY3Yffs4i257MjM7EthzgaB4MTEvLBEL1eHKRGXKgRa6oQPfpXj",
  "key2": "2nd1mSBDwVjZsK1JtyuyK4HTfcsM8HCY8ejfppU9v8ZcMU6sPt4NqGfFDQMcpGREErg2qofcrnTkjUWBu7SQMhRa",
  "key3": "3EpLuE2Uuys9hee3MDuGjNBhpvw4G9iFFXas3dVSqxNmEffy9SeQBCGiaHrXRbc7ZouzUEtS8Qsu2kRMEpFm5xZa",
  "key4": "3ggfqgh8cWctGHQUkmBAeSUvzPScYBstDYoe4Zy9dzVPp8pd7fJMayfbQJXFJswjJ5cSZXoc2JYWo3Vsu13L2rgC",
  "key5": "2TSB9bZzDetyDnFNGes6VegfAD6XxV9KSug1eo7nfy55C6gn9ddFSwkkc5UxrjbcnL1iJvBExKoKcj99UMsZUR8s",
  "key6": "4Y6GuUgABwKqQvSYxDvAzBcVtVHpvYM6b6UNy9oLhJUBWrHgw2cpPyuiDxwVZqeiJcqPPhYN3JTscRukNqZe9J1E",
  "key7": "3RMntd6riCqFUkBWthBTMVyRgPjMQVRojDos1h3Srb9PZ1QjBA2PTvTaJDu3sSDvUjKB11Xxev93ehpWMnER7XDY",
  "key8": "2LTdfAAjrSgCLPgQTDKp2o3gZdTqN2C8s8ssk7tkTd7tqDiZDpV6vnLrRrCVeWsYfBLS24p3L6QcATgqfwJsaPTg",
  "key9": "2ynEo8gNFv6FxfrKiP69Bvr2nQFLKGzqFddK51RbzuoJ7BCuJertu55SWn7UZFjo5z5WkquYGE1zGXhwtND9oEN4",
  "key10": "3cz3yo3UCKbQi2azny83N7wqhXC6qfsiVdYUDXpuxAHvavcdbbLg3opkW2JZ3jqXwTwJHoQnyuGeaBkY5TH8UXA1",
  "key11": "jyXrSJyWv7CJZoDFtAoUCbdaGwy2PjHGmi9pkFLmwSoGWJZc8ux4EiRredQBNPbMfMug7XJtC1YfF1F1WSu6JSb",
  "key12": "51tL2DGk2AsmZziGHpv4YCa2xo7Fe1TPKrHqoVhhaoJFHjNivoj5kAkK7Wbtvui89anzz1Yfms75W1YtNfLSwZJW",
  "key13": "2he8gGAdQzWTYVshzvuLSkyB85i4oXKSsYbeJmB4VGbXH6SmcAMSgBW9nvu3qK46Fc6sZ7eNNJeja7buzbRD9dv7",
  "key14": "256U98x8VGVC8BBs1kVKjvSVKiFUqfivEYCAMBD5A7DEPy7wrxjoxR1KYuHeudNQpp36B8nDGwoeNZDei3pHRder",
  "key15": "38sFd7s447Zeo86exWTec87CqzSMBDBMc1x6Wr5Zd3aK92etzJ2Efw7eKcgousUKGqHARCfHYttzTRCarDNSznCB",
  "key16": "2ypRPzTm9d6kreLyc56QXcsUQQzgVZdeHyCpKa88bYwdAhULxDMnyjyLTHHDZsNQNvuCra2WxyTuGaFsXVQVrPVP",
  "key17": "vFGTwbWnJpbWbh349bahXLSPTZMoLy2uxJTs6gmbETx4o6ci9hDoTxihRSLSkPJ5MPvhL9gJfHkA6HpRmb9FZSc",
  "key18": "2PDWbPVmJtoiZksnN4mRAeWuzdtRwuQkeB5XbsA3k3Jq2R65rqT5Kb9G9ikTtzWGy5HE327XsfKeTXsk4fWDuGjb",
  "key19": "2xXEi7FLTZ8hgUoiJgS8TUAc3GKeEYEGgfzJZfkpU8rkGqLjdcZUr1v9FMdoajYS2hmfQiA589nwjvSGveeN9soP",
  "key20": "5nxBhcYh4k3qJN6MLgzrQB5WgXeUz6MqQFfJmcAKKhspcQ927Dm2kewnphmEd5fhTQmjvJW69gPqRg4x7A18brMN",
  "key21": "omvPDMCHNgvvtYRQ5u6J9AZ15SxfiX5ZmyVRg6S795yANxU3sxeiDQUsf6bCV5jsQRcBRPx12ouNcWit8DSkhna",
  "key22": "21LWsqukBmxAE9xy2xf2ADeFWJ1H69dBdMdcZrY41rfd6MStwW2Bkt8w5GX7EYGmoHnacMMshfLChopaMjuNgCYt",
  "key23": "4UMDvZYpDhU3aiHRN9BJdAMGxXAZqe9dDRXkxcBofyCu9SSyDCHVjDooa9Vo8TpWq5E12EGNsPdhkCtzyAzsLU3k",
  "key24": "3w48VT3n8k1jWvyB39Q8yjLYF5n1yCG4Ca25ph4bFYdpfRaacmg32CXbvKTgx9qCGLnEsfCqXZsFMhofxFi4NEfW",
  "key25": "2QmoEVoMAdp7zPxPx5xLy4kVfpdyJgZMiQijiTFpsAf7xBpQkg6cvYsquzY3pJYQ861zCMFdMCCriMBAJGcXmgRg"
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
