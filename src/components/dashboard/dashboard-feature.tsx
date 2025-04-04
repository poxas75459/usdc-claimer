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
    "552EB8XcysxpcUSQGZCLFZ4jFipyyUNMMV75XNxdHNUoZXPxHYeqngu7JXETpe5Ee8aYA44nussUBc885XgbgE17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pb1Ch3SPpihwukNG5bWN2mWtT6zS1dBp4cp7H5BH9p1FXgJmja6bHZM1YFGnoPNMmYUQAw1sWZCsCQasyACBqdU",
  "key1": "SvX85bMFeJdwByPw94z8cJtGnm8AFzGP4STfCeqd44UHyyae7GEMKXnxv5AWd9cgdf55Zj3szA1PkW3UCwCLnCC",
  "key2": "2X2mTqprZjutGr24Ee6DmtHLziNqhpvjLDW5oxDFGrAFFjDsXzWYttJZCPXV2qb8eQvMR93BifFGNb2Rrh84hePQ",
  "key3": "4wTqmgyNiMGKDgu4E8gpALJEf54WoDcwdqXLjxpNR9jtpcdGP17CQGtvwjdmYvec7RNvErA4aJCPgCk2zCsVg6Hf",
  "key4": "55uMinkBFncvX14Ct9pH8aW4GoS4Kz3CMjkdTAJVPoUegcAoSQYyc8SqPBssjkZBkFmRPJsVuyzPiXzr2LxREy2L",
  "key5": "4mbU87x2uArjx5vNHdaYUrpNAKAKSrG53ad2wZy7HJj4FjhsxZwHPrEZGY1YnbKC1oS6A6W6xChwaBQFUPJuosQq",
  "key6": "3JcTTXMF52yr1TdDGud1XyKA9nyxUAvcLYFEYHn6U2Wtqu2wABysBkq71zUEYAi75vPKSwMLBJCNkTvAKiDGLyiV",
  "key7": "vYXdT2vuoXV4NZChKY2fygGgGjLYMfkHXEp8EM96L9NUHn5G5HmcsABH9sxiBcPbyeRWMwnEqfmfzZvuNDJxzwU",
  "key8": "48W6drmsWieWR9uhzdQ4D38X3HRgVa6GX8gwG7cCVn8rRRbiVNiW2Lnh1TZqFVXnLoeA9xGLcHGiDJ1gsTA6K7ey",
  "key9": "42CW1wsRkureCX4VAioALscEbNcK2BC6vLTHESEEkL6KniqnWEHyhkbiPaKuhDKWxVahBY4oCU3U8Wdf32N4Af3o",
  "key10": "2jsPAPQsvcuis2JRGXxkQK8eozFHRnz21y3XAPGSjGEMMHUNcV2wQbNhCB8xBhXcjne6mjrvH6tXEXonuVHSVdjj",
  "key11": "3JocKs9cETFYXqG1TWGJCdBJaGuf494BsMvXKZAPz4CyTVs5MxM3nfngHF34kZmpQuABKddLphLkPSEF37AYVDKT",
  "key12": "2nZFELaqzyZsiZ64VooZgi6nkd3V6Ng66ycw7o6KfoHUmm5KNifQiLrZCw3mXGLP3nzprW4hKHrTiyXhVF57PUKZ",
  "key13": "3Fc1cBN74C38EDuqepAq5Xu95GKrHEoDU9ho2JB5oKU2Snx4vnTJv26Ufs6gocFtDnUQ5afb3FaHuQg9hHonv28c",
  "key14": "4h9ZzaHv6aXETfnHF8gsidhPD39fevWFbhkhNubxQuaZQHjajjHMxEAYDMZZv9vNcXkTyDayAckYdqj24hgCL6oj",
  "key15": "3mDartoWmVGZsFhJFZe4mazECpcSf8WsGUbsgUqYoLAhg8r7MD1jxdHxewGmrwCQaRdSwBC3kRt3KAYmz66rqeQc",
  "key16": "eADn5MydzGsNfMAXbYm39jMNJ52vgakL5WSXnrVZAJjPjFxvLnNJWGGpfSkBUfLgaKL1tYFZXbR9bMvPRsDgiXB",
  "key17": "4bGJhXwr2Ub8cQWr8MxpyHzf6KCvVXd1onf6zdcjtNApY6hz7GBXegevmymNUyKpBVXyggfnNW56o8Xe7P39sgb3",
  "key18": "SWHf3vrMi45V9t8e5DFNVvH3MCCQVoikbTzoCaKTSXzX85RpmJyf9mEp55FP9ZAskuVuCQ95dRLoXTitcjhEFdK",
  "key19": "4EfXQbLgJuShzZs5Yq9xaz8HF7E7z2McTGvWiAu1TTg71mQrZKMtozQqqQz4iwN8EoggTugvJfeHVZVBfzNfrvP5",
  "key20": "J8uAKrTPExtuDaYJeZnifQ9c3gRbf6GKZTxXubCUbH6hJ1oiL3EwcJCb1ZCa5ngrELCedNnVmPszfCVvMt1aVVg",
  "key21": "2V8orQQhsUAx5FprQSuTw4W3PdYZEShikDGESrBcDG7nGhECJV6JUCbYXnPTiFc3vahccDHTMKjPoNDJVxrnxGLg",
  "key22": "3dcK66FE9a6CCn6G6BHmuc7bGk8hYVrPESDz762b2JQ3UnWGTXmQ1t3NRAqVgk22UUnSy7XyKuifijqFE6QdB1FB",
  "key23": "3HURZf8iAZPptgSusUkeXHGx8sbMgTfSCt4g4nrAaHcZQUYteZvKqJcqKGEqpdBZmTUGNQP2nDckgtAUVbUgDLfa",
  "key24": "2JoC3GQni4KHQ6C7MLPFi1fxPH225fZEfBvU7tRco5ojyJRKArNJG2Vsp8hYxUBt9urW4jkHJjajfFt5MaZHzdXr"
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
