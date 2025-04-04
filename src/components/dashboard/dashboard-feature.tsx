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
    "2RDsdfkCJ2YnsXoGNMfQxMTC3zrLcLoj6oYYnZJkQf36xnewaXjrdHSwkXsupvLZyN4v7sUZayZNsN9Ro1WvqbdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ysAFnt4hWsSBfrzRh1sk9LPAU6NCa7dtwpkjhbGswRJ5UcD3Q6rskHK8NJwexQ2aQrvJxyaRsSr5TC3w1iRoLNL",
  "key1": "pAGQ5YJww2W5NHEUSe12oRk7uRuMFWpwKLWdUJoSb4yKxRyQsm1cvSqMnmpFCS1EXmKbZs1RF6AfCnW599KZJDP",
  "key2": "4xeFFiayGCz4oPstbonnxiUUV4qaFvuY4Pu336odJtCAdcHkuQAdTHUVY8jpV8Gzss4VC74zdni476LuLVy2SwmR",
  "key3": "4ABjzphMh5QCdyjrn7MsFANsPoinR5gY1yM4mkp61iDgrhKDJnEhLKGKKvfyqNmiJN45mS5VEABpNaBDvLjdUQ7R",
  "key4": "3N843W8QbLScHhDwkS4wW8hduXd5gjsJ3cbGD3Zk9ZS1wBAHMJvU3jPotJPb7gAdzpXm92N9t5CQWUKXYVfA6pk",
  "key5": "4oT4tNFU3sajRaun5tFDyzRVK9ofSYwypSc5U3nWkDnZrqLhdgNPEiavmaLTcH2nYKeXwbtdrbe1ysmsKquHrheH",
  "key6": "4rxBwTg7RzvW2sy1aFAG8oYGbTK8x7TK3CJEpXKY8Ehbmvb5YTuVxxDRJoDZHrrkBf6oNNW2govhEX55xziyEv56",
  "key7": "5EBRjgCW3GKukgPVbywPFtKbiDb1vZ38GnNZjfwQWtFeMVsxV1rvY5PdWCFeWJDPrvLcvkaQB9URoPwzuAG7HneG",
  "key8": "3rJjHJQ1JGJPujRihxKwyexosfE4eTbNXcwEqXuhtPwijQPvezGJX3jVucemR9Kw6Wp2akoeyYo9m6nbSY8M6Pi7",
  "key9": "C8xF1WSYWA2jC29YCZLpHj9BxQyVh6GwGQKoCE33gfATCJBuoXc1yZDSfcfz8hT1VyZWNrHPRb7zgXdF3zaPuym",
  "key10": "34ytxQgzmYXbYvU1AE16XVEXjenYVApyBhGDACkBXQcZk5fH2PuNHfjEWmeRmU6AfyfCCw1fH4NW4mPNjdTfPKu4",
  "key11": "4tYBNYZaz3J5gcnGiVaVLbHDsLczGYAxe8TW4msFfjSGe7qA1MfLpRxvHBd8i2hMyy2bcZRQ1zjU3rfaScBxGPUd",
  "key12": "3fqNEBs58AudefGceX2TsnpHxfJnUuCaJxUVRPofwCNNssEskW4wnc8ht9Vqa7dRv5EfvxG57H7XZhsXGvJmHvvH",
  "key13": "4oALv7zAfvJ72mA51LVXnnXNXyf8PiGCDdMbJFfJ1CyLSUnqJGodDQqTw639LW4CdjQPQdtt9p3TpBqF3MpWiXeX",
  "key14": "3WwkSyoPm2y5JmjHxkeSe5uoafaengwbwhdhKZGMGKoG5u4RKaCt9MUpiN2KoQcmtPwYeDCTog3cE7QXskZPwybg",
  "key15": "4J75LJWyGZ4rsND16FvbDy2Z5BWMSnXGa49of6MXiUQ39Tz3MLM2R4hi9ivphtXt7u8CriTGhvSKtEcLHs1WhGy7",
  "key16": "3QGfku2RRDqnUUCwTvL1EBcfFagmRf9SZqMREnVyCBP7ehvAg7q3kMFg3FvoNN6Gz9T5rnx9t5MshYzrNDWTfr9z",
  "key17": "4aw35LKAkSYrFuvPALMmPPhpSGupHBGYH7KPxUnAEPGppDUqQCGKVgXAFgJM46gJdLnuBhJeZPKmJs4zqeqPg7vw",
  "key18": "64rk4v7QC7Gzz1HcbERA8NWMteMxHTyqJata3fxpgpB8ScZFg7pQ7fkLCzrSdSJ5GUkSVuVVXB4GdKvaCpeThLXp",
  "key19": "4iUgH3CC3ZxrhVEBuhehXFTu5Dqr1kwaa4MqfCcrMJyFFuBC4ksv1Pu7PH2Xs5iiZHVHd91CZNHKTAMDakLzcmK2",
  "key20": "3bSLNqMikMFidpT9hmLRFUd9gwJDZ7PV7Wsy36MtiL8UR5K2QEFVPE1924RzyAykuLLv3F9xcRdjzcEtnpGgaMzd",
  "key21": "25jtzWp2eyA8y1S13qZFJgho9f2fneXZ5kvyiicyHLzNx3HgC6Ltcis3FncXGTX7qQRtiV8LJEJAHQw8YGqDtKTK",
  "key22": "4sKqePxPoJQnUQHowgKHWMjymEfndHWz7DPi6nGDTSS8ZY4g6Ay2VqU6rDV3MfEYvPrGBgymLQLCdBX7uUy5H2W2",
  "key23": "28PzUZkGEh2SmX9toX41GdJwTXVLm9fqE9tayRu6vVDDwSxsrAtEKMNngBbPTFyNrt8skh2Rpf6duZNACs1whN8t",
  "key24": "49cqFsm7VrtURh7zNuejNrampZmbtmnMEj8ooooUL9he69kP5KMF6gvtq1gfCzkAs4AdJhLT31GHFXvz2oHnYnDS",
  "key25": "pXPKo1oKodpGQsyEDZfKjiz9oAEztAnncGy2vwMP9RB6eENUHLMwhTvA6vgcNHrxruxfoKzCppN9kLT5pU9evSB",
  "key26": "35E81YBedu3z7uout4ruzL8rQmLC5mwUWRnhTA4JJG56qJisE8bMTK1bCtUV42m8HKVBgEbtKp4W4g2r81QyxgXB"
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
