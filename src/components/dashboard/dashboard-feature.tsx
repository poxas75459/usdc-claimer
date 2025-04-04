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
    "TwAVT3L2tP5kKzpta8eNKcFAupC7AtjbPabZRd8d2YC8NLGTdTH29PwEecvCMjdnrLCU96AtaX62ryuFXwpEBq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57KCFVbRQtNTNs1M8oyFhyttGSg5gsdWokAsbzwWY7P3PPVdNhu9Nv1zdzrFhE7Jz6aasJZm3EqMWDcKKjXzcqd1",
  "key1": "52Zg4RzLj17UpUvc3tCW7NnwP3fqTbomgBxb1JWSZxHqswdzB4Y9zy51VQPuH8Uz4i3Gi5E1B85PCCT3opFhZVDK",
  "key2": "4Lc6vijR2Uib4y6PAACozCjHyXgqgcstJirPkmPYo8QNprV3PBZiw1zooUxpTGanpAPiS2jK2GpGrJjGTaWFvBxG",
  "key3": "4xzxyT7DaXgNiaRhX95tiaDo4rUJcfgP3q4nJZLeYqP98tucCgQ61NbCYu3bkcmzzxTJzfDVPJVUKuYuNZAkTdax",
  "key4": "5LfwYKNoq2RQ6LyVHjYjwG7rz5fTFpQ4KJJsXbrEAB17JF3ddnvQ5qUHQMee4qQPNjrMAvYdzcdBYWcdiBYmuvq",
  "key5": "2eY2rdjQ8aHDFUP23NbQogPs1VkVXcypm27rnLX4Fb46i3VHzo1LMCnKwgWRUgWnvtsDVbvqDhVGH8Mt4Y3v7n5A",
  "key6": "4aWdSLdrXVWsyqqcHPkkK9J8UHwaG5ZNSaXEUU1pxqjhttZcrFTC2wFN3hrWcTKAjCev89ciJ9MjsKyq42JSSBob",
  "key7": "4mj8gnNHoSXgDREFT37dkTB66zuDXdMzqZVM3QtvMhyNCcmEjTdUMBWDjsZPTMT2YnHmquTfSmYQvoVXb4CTWHku",
  "key8": "4sDuHLm3Y9zreUBTJDDRtkd9ygvkmQu1Uqdy5S7bxXJ3TgAWsLW3sAqkVHVoEMbpgFh331Zp4hAy8KasAL7BUYB7",
  "key9": "2N2V5nWM96iPijh7ZktsiHMNDqMc8rZZohG9HFNWeDSQWiWvWFbZTVCmXEe39FHA7g5uFMvPV4YzLBrDFWb4Jj9J",
  "key10": "2MazsuVCPexfLaADv7rf3ZYEeVTMKMwuRQitCnyYVuDVv5uSzLLCjnBYjCTX36eUvRAW2ervPXuw6KgXFzJtss7R",
  "key11": "4ctjXQePwvWLBckuQD8wr9AFq2qpKPLqvx4njtGpQCw7XCSW1M6h5Z8QvtU81G6ohygTs6U5rpGJm4y3CL2X1N2k",
  "key12": "4CcrDHj5yYfctV883xpQYcSKCAm2f22v7TonwwVBg3iSwpj7SCn4F4bZ4tH6Chg1ALPWJM4kdn9HNQ6BDtMA9Hqq",
  "key13": "3oHqnFo8t9q3kaXxWgkuSyyv42j2xBFP78nEKf2xnoExL7FY9jBetvwfA3jcwk9WF4mKR8pKaM3T4YMPsNZjpknF",
  "key14": "juBBbbuX2i7X5T2kaeidEqGPjc7MpbB3Hf83VDe4qrYnVHSCrfexsx76NbMNd53YY7bNvCmfFYpB47nxWsLmtdD",
  "key15": "UeRTbYgEkDM8QVhWRtVaWD9EMoufgEcArP7etyjD7EBnX8h1vTM6CUvoYmpF3SnxCeJQwqewRJ2N9DcbPKcQmMg",
  "key16": "5fpXRkNarQxHvnx9aVyrrohRVt8qnMjPhzLWH7j9WM2QVGbPRb4smTvN4FEcNkzCTjzEbosw6tRzq6utN8HPEAyt",
  "key17": "4t8FjQWju3awsSFSJfii9bVWEEgcz7ZpCmxKuhnRFEaau86DTWqoCzxJfDCs1CQyEGrfNj1xWSxyHg8gVBjzZtux",
  "key18": "8JTMXFfA3mBLQatGVNGTqsrXDAkoStXB6RXkxvR5FoqcfCWkqWHfwt77EeFTrw5j5ix6EyoX83xFiiP1pTUYKdA",
  "key19": "eEwW4G7RBPgFkuxbdiKNuQ86TriDKGRb3HnEUXVQ6xsyrEN9ij6SRpk7GHjDiaPSofSSTkymm1kY2H5GGV6fWBJ",
  "key20": "426JdDszXnD3Fd2WwY9FccftKq4GoC2zYE8CeywLVgpfFspMVF6dMYJhawWHpuZR9kpdQMzDBhhkxNoPEWB21Hy3",
  "key21": "PSoAFjQwTTHPzhbSDXCEZgkStjDBmvfVCi1d6BgtXkpTXuDVoR3Rtz83nHTtNt8Bd2zcC72shuCDWJCCcgxmmjX",
  "key22": "jceFsTa7BVaLcikoFfa4y5mTiMR2qh3eeAPhxCcJr83ZW4382QDuwT8jcag9eGbHxEfwgNzViSkEjV4aSTTpJGs",
  "key23": "56xr1emN2TRDw6BFSYXTL3LSMnVpQKTqNEUZXFysawVb5RmbW3pSDPkc2kBbjYo3zx4JdL7HFrPyQDc9eEiTcqVv",
  "key24": "2LLjEZW1qyN2khgXa7hi3vunCzfBCLQTPnV7T9SQ15TEpxpMXhb8dTxR9sQpMwfXwPjfpMAku2igeJAh8QfSAYyp"
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
