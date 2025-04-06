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
    "664spjmMxaEQQy2ygwZMZaDiymzFNBeDqzRVGq268cA6gMJtjTCbAdBqSTKXYmJ6R5vfTJJQsFYMfynW5MuBKSVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35VbwkBVy1312gb29naUTjatuocoV1mgfSQGUeM3DQv3qQrtxiW6gfNYKBsiemfiu91R5M5z6g2budodPmUvqrPy",
  "key1": "jSeGmwnApXPzHdK2jiQiDX6miZbVW9k8ywEyPzxc6nvWuPRVBHeMD7puyfSgj1BFir4TSGGKPjGp8NY5tMiFyCy",
  "key2": "56JtcrLJFbc4za3bm1tzp8iLA38wG8w1hwDaSJ1psU1Co4mEjkZ7nJ21dRuyJQqFDhpMiRkVPer7dabDuqxFSK8V",
  "key3": "2hNeDEv3B4742dnWgvx4yPZ3hdXGKezc4WNDfPnv4METUDr2jm5YNHBSVCyuzeNmVc9L3DnE8Zv3DYPNcEym1ytP",
  "key4": "3wLSP1PFmruaT9N4FdhUM7Kjbsj5CxGrYzud7tQuDTUxFt6p6W93Qm9tYvKx9gRrsr4tCEcGsnKeLpa2K4FM8P6C",
  "key5": "54LPGwLQmYwZDN2qu7J5XMDJhX6DyvYbFLMgkcQSUCBvkB9L45vCbG37P1cPR7DbasRd4oCFeeZ2FJFfNPJZfkaf",
  "key6": "2B8bahGycXs7Yro2ytpaMEJeRrqLJKrhwqf4Ym5UGNP19w6MdB5dfnu1sPj1ZugXc8HowzHeDPCHxJWeDXts8kqc",
  "key7": "2hbgK3xBfHEWPbTGyQiQqkroNKgkZpVRpVToQu4vqD6BQ96XXd53t53nJWHzdWztGhBzH72c1LPXmQCKtyoCNPKm",
  "key8": "4HwCmDMCbovEcScQeqDaZ6LZJcPJbUrtsLjTuhYQkjepchFAhC1eCSnwwU5gafejwpHGCtK35cytgB5LDhkxrmvy",
  "key9": "5nWWh6zxm445GJhPpmSMbQcVf4PpdyMRr46MxBvH4XDfFeTu6cU7NvghT6hFVB7xaEUJpuLAjW9xS4kGsnrjqnvX",
  "key10": "47gwJLNEpmZeErdoUng9XVTCkF65whGa1a67RTkd43pTdRQDUtpweWAYwxZU1VZpS2sxvQcTkPjuH84FGzRDvwwe",
  "key11": "3AwmMp8SVSwsooapU5cZgkJXzgZLbeTHahBEu7h8amAY7EzfZQrVskqTLGrcc2UGooXbVmd9BWJkis6WJgxT92rd",
  "key12": "2qMRirHFUoEmoTeAE94EcBUZS2ThYx4rr8WnCeEvYPkFiaFTyKPhdM5pcpg6Y9WHj7mANcmnZShWwV3kJ4ZBYD7x",
  "key13": "2THsjAhcrRW2e1p8AAuDWythaMWqsDmwLNGfVY6LqGp5Z2W22Lb8QJVcgiQmXYdnY4A895MgDQ5hSdtuqyahsvw4",
  "key14": "5fySgHidQZvWyk6EXDMAdCuMWfRwtDj6wsfkzBzzGRMyL9jeQL4AZSY2taK3VERgkEwwo9smKD3c96aSRHHPXscE",
  "key15": "pG5KusvuLQGHEZnbmdizW4ccNHi3UJkJ2UNaDFe5EHD9q15K3otBAyG1MEqFGE9wq45r894rn6TAfQeH29wvNuG",
  "key16": "3cnJ2AzWJjjv7HEoX43Sd4LfeQfT8zkm6vpzpp2icXXXsm1jkA1xyULEPZBVuzfygMEwPiGRDjedyD59S75HbnpG",
  "key17": "2AncnTEQFfbEbQKKTQvZP169qZmzUKRiwKWHzkoy7iT4nbaeSUdeWqBHq8xanzK3w8wJgZXUCFo4kc2QKEA3ta16",
  "key18": "2MEq7rpRyTW48KNZJrBAm3CVUttpd5vU3JtLeGfzVLem8tAQi7ou8Bdk67AEi5tmWdBQdhAWM24Xqyx4DQsNS4AN",
  "key19": "bMpCnJsPX4zL3Bh94P4TW2dEeJGGhDQhdYsTW83sP2D7y1d4fGsUkYJj8ECVNJxRpRpihvKTtvfeaZJFNkhs6U5",
  "key20": "5e5MPMzDdK9im2u4gNX3pxkhn8s6GEn8G2dP6Wur8SkeWHS64QUfXy8uxoXjKuYVbZtfpTGMe2HbkomX7VCxyEuX",
  "key21": "4pdwimJiitdmRCznhDs7q7WxLqBEsjPLNzZub4Zxi5uf4wXh4cTsomR9qTmNtid3qz9wWTaozQzv56vB8qf1NKn7",
  "key22": "51B4gjzfPptDFyqCvJSt5z26LrCqGpryJxHPeUfwXNRR2kaEd2RBfgBGK3s9w7fH92SRvFCZTSaGb9o3c7W1ne4c",
  "key23": "3rRKF7GmFFVNrihLxjKUuiJRou6Wt6eKkFcQAxsAb89dLPK6qLFtT7Agc81bTecoMrkVLdGJbja1CjgsXC1DXL76",
  "key24": "dCptspMsCrFE72j9ZmPYhNcrrxS4WNamRYhMKU879GTSEW8ChtTh9rnKiSY1uVoT64NNksqtkvczD8DfQieFLSH"
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
