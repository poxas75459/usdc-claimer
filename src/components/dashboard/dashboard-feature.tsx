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
    "2axgKHsNRFkXsJi23Dk13YgAWPgLABCGA6nnL96o4UNZZ1QdKny3XaKpWvY3d4iQN9NXB2U5GUH3dHeRPkqzG2w5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "556yDizM3rHr5p7zZqw1GmUf57oEXXN1yyU6qer5XxioRnREFEpjYUKANYrnsf77ds6aq7BK29arTjBTqZj5ifzA",
  "key1": "4owU99PyDetMhaSet9ehg9S538UWp8f5y3uYtfZfP6ySEfjYGQUPNXkiA9tEjSAwfcd5Xs2uWhgu1EhyakYcbmSg",
  "key2": "2whuQSe6Dqc6yy47nb2fm8gNrxamD4tvuSJFvGhyZ2yJtmn3oV2c4e4r92i8Hjn2cLufrbVUVisMEzruqvtQQHAV",
  "key3": "uPu446hnpD7Hg6fkYTCsB9cBZrSBAugCwwpiU9uAvgWNFS9NAv7nTs9GfYBVC83TvDgfMk5FpjbnH1oM4rJ7pWq",
  "key4": "2A1YZjdkHLTKBnE5TNH9zB7zpd72n5x6meMMuP3FcNcPcjFJazjLWXtgUhgnxQp8yXUVSjxBZQZ8q65XXJQAir8k",
  "key5": "4VJkWkDuoUUqopgAkAPV1mi7FZ8uv62HJWSxqs5Gr81VstxPm8dJyWhZDBWJhyQxUEXx7apvX1w2yma1LXatY8ic",
  "key6": "32Zxn3oWkrf88sHfT3PW2SC24tpmCyjezZDyVij5D3eB86n1S8BjwUPYrwsNPTybqwYLuiszDneG6c5xcBKqdBTK",
  "key7": "4SU1HRPJYDi7pZ5hneyps9M7T7eLTDg6CqqcXeBUjLRqw7cLZJTywWPkhiLezBkaZFgicDRdUeZhbKiW6SnSxBsJ",
  "key8": "3kr9nmsGreWpoiQPYcGkFSwynNRnxgvuPHrC6C6LsJwPubULkoLHAyGPKeWwTUBXEGAZoNP6JPKzFcnF3KkZaA9A",
  "key9": "4uZvFPNoaEvnPmkTekMc6crNzPV1LVrj76k9drWTguS7swefHX1QuNWzbuqaLQm9bpjoWHHXFoVrBPakupN458wQ",
  "key10": "4kzCAP4bRVeFwk6cGum78UdPTKKsPrf8AzmtMo1mB2e8KSTHxEWeLVEyrvhb3eCDKj8yFheC5iH7FNT4fjBNkt6A",
  "key11": "3aUwPHDgbm82FjRcMs8wGLvMtjU6fdPxErRvxnhbpbpH1zehVkbxBSsvb3zATphhTpTvZPUz2qdTZE1xU7bfEZjW",
  "key12": "5y7VNgcH7cJMAUGrZdMkywDvjZANFp3MhvXdAKCPyF4bnpKm7Cq1y5yQ4q8kMUFQWBMz4AiV8Abm4GDCLt2jfHj4",
  "key13": "2R7E66K4B9RCHo3vJRz6vXfn8F8RM2khrbvXAUNpaDWd7NK13B3WhiDeEv1FeCT9RubMoSMk6C8ZRyBZ4gF25Hf7",
  "key14": "4znGU5guAZhVBRtD9p8mxwZVfaV4D5oDQxwEqVU8kp8WomUACdEBUD3gVHg7Z6KwT7xF2WpZ3gpLBedt4FhMn3DC",
  "key15": "3Ty1VZGk9ReZDDGw6cpmVUs28359Mqa7NRGpK3o9RJDcC7HyAekcHJikW3Q5MfyakqdLEC9qXboB1GrjUEjm2dRV",
  "key16": "2s3w8njwC8CFPzHnybFqq8WRR2wxwgDZkyvTN5zw1tUsihqkXLDrqtoyvYxfhaj2B7Nu8VhyCgpWDPJ5w5bpCwoB",
  "key17": "3DUHYyQokrRZhZopeVWeH1MUZSDYJRrbWLREGTA4ZWVg7DfiYpkhHdWonw8LVJ9J8EX8LYjYaHxqgJUrQo2NyFkT",
  "key18": "2c8YGpz5VPW8u1JQw29vNyNEN5g3rwhaoDSDtohvS7g5KTDjVuuvu6JbVAWuATnKMbvdGVF3JHNoYaogN4zsSqkU",
  "key19": "2w94YG1pS9pqk9wHJTnd7GhiEhZScmQkBPqoQsw9td1HBLn3CqvELLH59HkqRoJ5WCxccqhVUMtZNpyimXY4wwaD",
  "key20": "2crLykgjqkhhoDawFFofvqriWZkfgK8XoDnf5ZCPJ9rUzHHbTP4FpYmmenST3dysbFhMxRF9qA2xZZRvtQkC33qH",
  "key21": "2HFrEGGFkxjvxA5zJaaCLXijh2vTHiBDFknhRmwgrBg92F17H5CTXh4nJspGk1BJNkYWNg1r34UZi9PERof1PHUv",
  "key22": "2uepiCikdPJg7Wj5Kj8bh2g3kNcRFtZs7xLWuuySiBz8pgCqtdWQtd4mL45tRmnQd8LrWqzJ9VURHd1Y93ccqrJV",
  "key23": "4DMXarPwRX4NW1faUGUNLv9wYza7tqfEVXK5CJHVJ5HFotKBjSLaPeEaWHdkzBP69HB18G9vNUvm9YUYpzRr1Dh5",
  "key24": "3MmZ1vfkKdCaf3VvZ25uSb2tpku9f3kYYP3WrBybEEP82EhrgpsQaag1CofxZgYmXVFNuFBkY7roimVRx2d7GA9C",
  "key25": "3jATiTSaE4eEEi4MuSVJzQ2scRtXWfEoHMfX9iYPtML4wL3zHcJZCscucxKH9oZSzCBqfuf5oGPhZ2iqX5CS54zj",
  "key26": "eCyf9sHgvYg2HYFZ6oGiqhiyrtuwmXvpn8sQqdXgdUkfGiwL53ieWxRLZG3qphxod8Y5RzbnvdTvgiiHRkxgcvb",
  "key27": "4ARw1Wx3E2V4d84MKt88cUSKxKqWKUaFLGA3hyCJCAtpSQqP9jY9CELZYqAcp215LxMSrhK2erD32RURrhPBCcw8",
  "key28": "3DDArYn2EhkGXYqntzQHbMXuGrBAbiUaJFzkC5EshnJxDmtLqtJTgCzmbB3XaYAFDkxzXCT9Pjt9qpstciueQSTU",
  "key29": "27Jd6FGz3wxSrFTHj29mRs7NjajcB6p6HEzKcLxADN2xfkBQBCTgychGhPMqGHvqCZntyLBnhcW4hCjdmbnQXEcP",
  "key30": "wrDUFhXMe2dUjQthEdi9eXWmivcoNSF7qAw8C1RmCvfVMjY24HYziYqYg96dnE8qwYZtv9pusmkNzdCDA5ixiuS",
  "key31": "53UXNBN124oHX48mUvepSvH2TYpT7JJkXkQqyjsxigB9kn6qtCbtET8GdNCGJrrE8ykxmdbgye1MNgtZEBk6o74M",
  "key32": "xoWwN38hT1Z5vquhNbfKnqmk9kckLrKKcdgxrzyFsnNUEQf5bZdp8tmT9SnW4wPkoNGaSKtxQ7G75tE672E9Wiw",
  "key33": "R56f4co11vRjfXDWGgNU4xtGjcjt2zpKF6khCzuv5z7j2FbawzkWjqrpvLCy67GNGbWD3HAMBnfnZKMg9mMF49v"
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
