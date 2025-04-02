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
    "49BdJPbKMxGewyRP4X2Pf7sreDE2qeoQt21UZgq8V9oMj3rN1Zt2mw8XTDCBXgPAX2WXKFvJcKZJHhUsZeR3eCeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62LVoGxWj6cJFeZo9XGWPovcgeu8iBJecEbKreEGFkYHCJP7bzBLhx6xyd4PiG2UP9qQaut2yTyYZXTXWNbt8tcn",
  "key1": "5eJKvVmjiFbchNwuv4wFbrVV2C6Fqf7pUdEYw8LVhBzFSB8G96t4VgPYGsUFY3wwJC5kUtf4Adns6QSoBkoPG42b",
  "key2": "5Af9ectv9n9L5nsCSgUTMzVUVQebgSYoUcsyJ9LqMkWAWo7P2UVL4gpCTeHzrD9uU6cqLGurcETcsXiWW88HW8qg",
  "key3": "2ooAmybzd5ZeHCyyQh1Rb9FyARShhoUCADVV82n89LDFXeiSLs4QavHtenyMiRnC2vKxADuUznKQXxcfPgebYhTV",
  "key4": "2CXhkDiuTkVcqck2UR2Sbq5uq3VzcckLj7tuKJQugBoWiAY5nGRpbLTtupycdv8JMAKJjUwAkQS37gBqCRSE5gQ7",
  "key5": "5R3n1EPyDPR3XgYefG9WeSfU3rQb3xPGGH4Np9dzve7vAUcJ3NRVgeaSPUE1mwdVBfHJFyqaESJ1v6apHddWNLM1",
  "key6": "4ixs4k9Lnj7JZLe5TDG6Vm6W7wS4pmndgKPhtQXUYYXLFmznX7TBzSyqNXDuBgy2ieMGeyt9jqKog7CzudKtJJem",
  "key7": "23oEt9Mwp1sSrTSbuk5eua7oQe2YHvMnxFbshWQBfA1o6xJiQ8RP2NbfZtgq1pXy8kHJNDZt29eCkQhXLUoHkYFq",
  "key8": "5Uj4sTTUdtL2LRVJ8pYZeGb6FNJSdzxj2XEVZYmcQfJLY88GCi6Zew3CTjyU3HCJJNRtCq56nest4CqqcTDWUVNi",
  "key9": "62ARsY8Ap5WDzKYZw2bqF5c52H2VCSjUJGprjddzsh875FAzpxN2FQfBx2DdB6DVEjRcovqEGbrZihtLwrNFrAk6",
  "key10": "7fd6HLwhRVEukBzdMx8tfCYyKxa4GZHRFDbnsfzGKen7Q7Mb7ZJxcNGAdLKoZHFxNzuKFBVXMPveCyis152PwGq",
  "key11": "2CPXQoJ4aiTgKqmYMMmNvK8xGnmSumw3LqgZWRhna3MqXTGxRcdnwENVVngM5oDa3kPLLGfESnejjtNDWoELgGiB",
  "key12": "4XsMGk3Wxjeq9uRQdGkEZXjEnKLtrBtENNYGzQ32wMhgSTbZvQSxNjLrMBgmYseSfKbfXQhHqmdk7zSXm1MWBvbG",
  "key13": "2rrQGovcPagy5WpvxUgRjhYbiPSvN9SA4kKkCDrPAb77GPjrM8tJCBBPyrKdHmBHyyWRZdkgQj9a5d8dL1JQoaqZ",
  "key14": "4wedsBM4FDVx4717f93RApQfS8J5roHJyv8SoyCw9HANjUoHoAgvkNrjqkvoNZxcKiY9S5y9Q25dp7wU5YTKPHWj",
  "key15": "2m48Zd9khbvmZjHBaLSHynV5m43x2khHJHCBQ52aeLVFbjJf9RhLf8BCbkvoc7PVNqR2ZsJMX5CX9SbUKmGqcRVQ",
  "key16": "4xnRpBFio9iFgThwwLxdAM4am4ZSy1nU5eqePW6nGEXmq9cneqxSeGNXX12oKRqTEiqMeZTHffk29LkydxeQBd62",
  "key17": "3cr6yry7x17ogw3GGGcUziuszsrfZfBUirgnGPSEBHRCK3ktSZgfFxP7kS184ZNNiyLyACETgnxfEDcgRfR7dfi7",
  "key18": "4VtaRgFdPUHfE3FFLTrVUDqqW84YnpfwHN1hJcDF8P5QeNHRm6DUyGV8KFNABXX7eVJLDi2BFTRNy9WfZW1Uzih3",
  "key19": "317HsVcGgRGRxX47wisbE7K6Wmu6vbVK6TeDqW5Wni8S1h2vaSz8AWTsg74bi4jmtGYxHtQ4Xz2CKnSvJbZQDXMv",
  "key20": "3K5Lw9qRn422i7FufWUtvQkBQEJAiUmM3preM7LrNnugq3Yh9oqBqNfcbPudz9uv3iW2Et1Ky1ZLq2wjuAnoUch3",
  "key21": "5fLKTo4MXikrXFvp492uf2CKNauGQkRXUQ9AW9PodX4eFjtCcQmHBBdgx1cikm65PDXtDkLNkRC8D2fc37sYJjwR",
  "key22": "5fcBZmjedxbUgQ3oNJkU5YD5Kxvgpzr1J1PFqxvJYLH4y2h98SFEna79mwZZC9Ce7K5C35VjxuepHc8WXcTPsVzu",
  "key23": "27fXe7vbTMGpfBf98ZP5ix1XZb93opR5DpzMTSeSZkoNh3prZ32yDn33ewkZRHnm86pY37JEaeGsqMwbxbiFvoNa",
  "key24": "2iPZmBfK69SD9bLtgKva44QUgqVi6MQdWKzBU7EftacSqEZxxemAgeooWExAUAcnTDUWdpgp2q4MBMoWDPDjDvXz",
  "key25": "5quhBL3dNhNV52tH5n1Q3SGiqzAjPc8ijD7XEJbXE5Gspw6UaA4vPtgqL36fC94fD6LLBjFj47prwNBCBv5yqSvY"
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
