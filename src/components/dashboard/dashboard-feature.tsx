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
    "5pZ4Szwv8wf2Ej1zHhFqBhfrrMp3V6wa4GtDuEGsmapAEHKKzESrCVThLs3uy4nekQ7gKFPmnCkjPSYzmJPA3rgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSiQiRTcgpPFFi3NBJaoAdLYU3GYLFFcpmYRA7DfHV292J3BsPNVp3PQEh52M7t3433seN1korraVcdmF7hsqS8",
  "key1": "qfeVNkqNx3GnYLrkTdfsrxVkFseevMYkExYwJ8rkm4k827TX8zgVZzCnKzH88FAVQdApGbXcPK85Pk59E8mMHNW",
  "key2": "35a4CJCixE1gBQ3eiwJ9K457hpEdiz7LoGnrTexzKHim2YGzQdvXFmSD4gLmH1aPsme6QLyYHK4QzG157U5xQffJ",
  "key3": "4pVHc8bqYdm1z4Xu64h9VvTc5V6yzCPN1KW5GaaEqZcQw3fcX6CQ4YSCQVPWDWNSf8vCS1bzcJVjw8cyds3RZWu8",
  "key4": "3XLLcRgK5VCePwvZM9g9Ga8MSEPh6SbriXnXWsXiwPESobNUGySYB2Ga3xhemya6ntfgSeYFekyy3bbxLG7Fe3qR",
  "key5": "5APYLQxyaTN6PGFvhnmAsuj6xjvkoFonMqX1ky8zUgqXMTdEMiZ3DrTrTkeeqP2VaTLy8oVMfzwPG5suD1odwSE5",
  "key6": "3vvkSNh49y2TQFB7dB5jAN9xDmUmJwr1Lt83psW3QhaGGhN4wf3GwwnSexNbFhi6hPHAKZ6oJmRnxxT3jMFhPUR2",
  "key7": "5YW2JX4rHyzSdkS8FXBCXkuQUL1pg6Xr6z8pyaYQvL1CHu7YzkDFTzxaFEu218wZj7vJJ2bmEyg8m1ZR9Hp5gMTm",
  "key8": "LpRz3C8Pp5eDEjRjcZ9E6WPpgt4uzeEbNbBTdcBQ1EQS8o7gzw9TCmAwrxc8YjiXpZmRsdD4i9h6u1cgviZb2nG",
  "key9": "372Ro6M6KUpL5iRADoijsLpeYKpmrQoTvcbaBMJTDNHbsm5Sg1kjzSceLuE31hu9xiYRA8ssfMqtrZ8BR2M4q9cf",
  "key10": "2WEwrChb14owucR12o63PZvDCwYfmZSzCSDyxqijH5oskAZ4CwFf6bKPCWHwuYSrtK9Hdv8XszKKPaBo6Mg4bosQ",
  "key11": "4JsCRiNa4jyb8tfUSaEuQ7UEZ7UgQyCHzT4oFdRjn8ShsnN82shFUDMCBvfZLAadCXo21wKTWb1mwqyGUSzogXhN",
  "key12": "4Xauat4uMWE11zHoXrTKDXKHBPxA2PtCFVYsbJWouZXrhKHfQCxrYqey9yfKTBEy8P1QjPEvB3oFT9zPU5fgL7bQ",
  "key13": "4STXHN9VcWeA2jBzPJo7QMSrB88WqRpPoHstpomXGcUXPLiBAnK4qowrXweaDVdcTejX3PxJbMeZxyc3LDnKL2Z5",
  "key14": "wMF9p8RrrkjPzGWNcPmuTDm1ynKcHAnMvpwNppty3Mykw1wfNvku3ETaZmWRv2Hf55TcotiuPRnVxfKfyCnKuUJ",
  "key15": "5oyrZYV77dJScQit9qSgwg9zRixhJMp4Wn11mDZcjRjLYjEZ48bgDz6GV22XeYoPnKUVMwJ8B1EViFGFdLooeDGk",
  "key16": "4A362JvQE3i6UMt7q7VBfgbguoVq9DE8VEZ9WnD1fiebtAMvCob75ZVrGSbE7HdKT74uLEFe96c9wHaAnY1ah7Wm",
  "key17": "4PX9YRse4GrpYuXU8s7Pq56kkGWtx4kVB7zQ12EC8NiHmYA1AL5A15bGrcPZ1unqgFGMHrMdLsGETaKAM9v6xuwH",
  "key18": "5H11NC2ng1nWLVJpoS3tXtGTZwc6tHpDDsixV9kNURxCHedXksRVtsaALGtzfGqG21AVYgQeDCbbLw7kyBzNsBL",
  "key19": "4Rr9zoqCZZwkHiRmTdkd9remuKDRBzWnsXuve9qqWW1YSXnD3ccLzrohSbWeypaSHKGkWtmo4dH9YWAQGNJMFh7z",
  "key20": "39JfApPXt3bm7Fo36j5YesdkVdscD8RRssRacUztBKT3sk8sEsHFgNWAXWT25Hdn54j8q1dNxFMT464diEp366Yg",
  "key21": "5f5eFV9ACuWgPQSc4zEp71LkTtMfbCCRyCSsAEbuCto625ff6LghDVMLK9FeVQeXPqMmNziD82Bg7tbNtd1d5uy",
  "key22": "2Fn5ej6gJZC1LgzxJG6QCpf7CDb6MdenfcyVQqE3gDxoBdJHxMsJSJjXgnDHrSJT4S1b9KTebTNUje2tD3Xk92za",
  "key23": "4g4mYg3aQw1oLsuJMUfaPfEKMmzzPGRLkn6y5yVxWKQCwgWr8y8HzCPctFpAZzvoCSYfQQzKPDCy5s512Y3j2vqF",
  "key24": "4XwZkgqHZYqF3R4H1WdRR1EjNRroukayhVaQopxNpAQMbnRWcHY5upJmmjNGHApUELvKnUDQBvPSQ2NxCtSrYfoB"
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
