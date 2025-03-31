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
    "4uSDVnL4yYqAN7WBNV5n3pyXMZFg9LGPYWH93Jn4CyceqPDXK7yoAgQueGCmZjb538x5vmEuEXqkjPZTn7yC1NkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvtqeEKscbQBPzvipkxV54hx22XStbBRV78dRXyj5tUrLXRvxmYccKkkWo3ZszW9BZTmnKjDtRTJUQBYYzP4yCE",
  "key1": "561BL4c8xHdxRJgHEBtaC8FfgXvnutLfHLEKUUL2q5Et7gCMybtbAAzXECf5H7i5N8Ag9qZeieEaFrnDCtPZYd3Y",
  "key2": "2r13ue2a2paki2c2Yt2CxwFGRE1UpVSGPVXnQrHXVQycmNuv3XaJPkbqAB77CHuxvMyiP5CEnS4RnxxMnWharZDV",
  "key3": "3UrSHY6jW7GX3o8QRG8TyuMUiCHF5ShuXH67P3U279iUwoTYkDo1zUkcFQ59TnURXLH4QtcSvhehxd57ZeMkzbnc",
  "key4": "2jiHJZDykCnP39jnPtygzTGvj3Dw3vP3dgDe8dwmhZ8ujpijt8ZUdBMpacCvN62d928bJibTGencjZvg8kUJSYr6",
  "key5": "2PhJSVU23vFs29ACF2Ef7CBQitFcAePXHav6ZAFd7JpFaDgEGiFBJnJ7NX15sUBSczpey1psFftzjZSoKgkyCiYT",
  "key6": "5Q7kaLnkY9JHud8qjJEpFZiatgJHb4QCLJRh9hG9p1BJSCwaQ7b3a3G2TaDzAunbCgoXCA49bpM8HQiAK5ySENZ1",
  "key7": "2477LEo7TmybQKFXHk3Ff6eNpKZ3Bhb6Qhn2Cp33BfQx5HfnaWFtfdGzToZ7z6oXxLejFH6uSbukvKdFnaQMBBfd",
  "key8": "2TupEs2pYdxf1VyYC1aNWWweA5oTAoLufBnVXoj13xRgLKbaMhqocf6RgBfgPMFQdbV5c8i3UxspfvWHPrMXVrWn",
  "key9": "4gipMXNvKaEpG1YKYem3N3TuR9xYK7rAGofm5hF9ZqqKEUvBh2CN8qsacU2eLnBf9C2i24FPJ3Tfe9EMfAFb8nEZ",
  "key10": "25cipb3zkoUoQXFNNBz7XqfZ3eXE7QHEvbWR6NN2Bbuf2436Aq6uouUQuCdKansaUKfsLMttC3dVyaAjFCjmHqW3",
  "key11": "37WAdXbBHnxdrKwnNi3eyykmzwaGRvegZtdrr9hWMHPoz5KMo6VzsZTLzbhsVtZ7yQBTfYdqmd6Yoi45PdA9zRdu",
  "key12": "3qNT1dJyeWBfkZ2iu49TopAdvKa3rX72HNQUqN7qefH944n7snCoZ5aTF143KZkJqUB27tjK81gnMoomcytxPDUq",
  "key13": "63kSBbQUGsK2skTL2NULNEYM5BkXxMjTyKUKoYkzZGJoQtEKRkci8FhiCVpKtdTucCgSVjDkabTuuuV17zZz4zvt",
  "key14": "4FCrJjqsNsEzAn8R8WwwKJo4GQSis7MU3tW1XtgFVLep5HTs7StpCEFdUNeGkLCVNz7hy3eKaMLEtx75hebS4Cp8",
  "key15": "3txwEfXdCG71M2oRPrhepj4tLcqaFpMtGSSLx1SdnCEx36mmSzie3XmdnVSWDGKEVFTGszEUYuAzRnmpjPQff2Ta",
  "key16": "2oZAXs6JGoy24UmNVnuNqrzCZEZT7DXZL7PgQct2Cqc9yf3UqdKo8gFxgXpckuRre7W1Uv6vsp6q6dfJzMDK3kuv",
  "key17": "3VrCDmhY5EcT9FtVJsT9aoeGy3NgQpEBPet8EtZFJR9B3yPQs3ADYuzh73Qvx3HDwpYHGmRjXv6envopEc4wFAED",
  "key18": "2D41equcwxbYrz8gGYNzU421MhDNYFQUETXiUh27hZAzNNt9YLgrUMAc1PLx5i5CMokFTL65QaXvk5ppNmag3Lyg",
  "key19": "4TwsTc7joJ46xiGgWX8ZtsdiDfN6oDEf2MXHJnzXfh8jzja8GthtyynroPUot4bxbxrSyJnUeHC8VsFsGf1k9EzG",
  "key20": "3q9BbBMfzWBw5fvaZwMJGBFTGymdbb7HW9N89XH1XUWV4snjb3Bx68XbsXZqeDbLVtrxLx3dBPqoS8bq6qCBWpL7",
  "key21": "4WGVeTs3Z4sL7t9cVQMwbd5HziJP3Na3xAR22LzPB2t3XskwpZGM958DSJP8E42oJomF9gDTabZbW4reZfkMEt5m",
  "key22": "62rJabqJUv4cAWCqa3NmdNUBvhBAa9PAMgjVhfrkumKT1fuhbGCdqYv8PML81ChVevMiWcNxAnaFvtmo8H6LSaGn",
  "key23": "4zdxKzXRVmGV8uFJ9oUs5tQTTfyHvEkz8j2h9vrXZDeT725HwfeiCJGX6caZDUpZn18cqhAH7mYeTqBAYb21vct3",
  "key24": "2Wc5RoBo4a6eDFWQ4sBBmurYmvVUJiAWt9v1w7mZt5FJ2GhNxjG9nrdAzSBtkZtoRna1qpCoyRN3zMpLxgtzeMv6",
  "key25": "ZZmFCE6TNLynpghdUnyDADhdyn327qZYTv17DbJuWYSdhnr456CNRZ3tmGgwiQAG3NSFmTL1E6CMqV2sp6VgnuH",
  "key26": "4iJ5MNLoSXT5Cw9PMwTRWksexhXRSqZtaa79QBnmv3q3RBM1BXMwiNHBJ94aN2ZzyxAvmJ4JWeVuaoEBEMS5Sgr2",
  "key27": "5KRdn2LJ6kZi49aJic1Nn9uyPRDbcprgErcSQtoa5eqXzUzbYGgbN13yE4UpBRk6kzbgiAZzAdVZuJG9GyXTGrgZ",
  "key28": "53yVJkpUDfJAvsmaCU2d2aZrg8NxeMGjcEFqnPN29aVReH5hazAWaCyvHnXHyn11e4TdNmrZQ5WUFYdgScfsU7JB",
  "key29": "5BePQN89kWAnQgfXgCL3NC75Yjii3xrXVnspF1SCPCzSwSzHC5ksCcxQpED1Cz8FK31b3PD7AfzECj9zkwsvzPA2",
  "key30": "4p7QEC6pRAxAGgRCYcXXd9hAYgB2ZvX4JDnV7Jn9cdeY3eYnWqchqMMTBqkf1p3UE9Devv85wRbpJ7PJHsu8CmvY",
  "key31": "5efcuFzsbUKpRTj1dVQp2uSUUPUzC7H9anfMqULHLiPxYvzG9e3sF1eM5SaNLx5oJjKYvZ9ERyme3uE6wHdXCj5"
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
