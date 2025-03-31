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
    "5CcyKjMbpC6x4ZayXR9R4djGdLakYXPHf78mjnsUaAEZGnVUGCt5UrwWoXqHjE1MCbEyJBdwtMbafjDohMTWEefv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s6uo4LJxguXDaNEZRRWHoLj1XU1GBa8QbCSE7Wm7mNGYBFmPLgrE1EbCYy45iNd6LJGmmCCfq6syR7bkAgqwstG",
  "key1": "3PQhpWx8vHEH2iQDecH5dTfWnYCvzDBKnvZu4X6Ms94hDj2XxauegnyeRsCyW4ffEGZMKvaN8iAxnLcp6MnzQwpd",
  "key2": "3XWUkzpK8dSUpgXxY1t7waoEwntWz9YqrFmzNBtizeUSarUZgtmhNiHXCshigexnfk2rDXacjLMfatfmnutMfnRT",
  "key3": "3Fq6DPrTtAnojKTWnAGTXi6UHQAj9RDr3VBSivkiuv7y4f7Sw1Mc5qNzDHF6jcWQgPSqY7QXGQs2v7N17VD9otu3",
  "key4": "4p8ioUwURnXihk3DJFJygFyvupuUKWCcET9AGmSDTPqv34HZhTYmXC77ZZGXG8nyMYWBiqwe3cozt9TCQ1dgx1dK",
  "key5": "372G1BeGvyQKUWL7j48gtUEbKh1BaTYsA1TDvFPyMaCStF6YXSLB1TBgYpdfKPMf9cuaqQfaxohZsPLErUvgUwhP",
  "key6": "63FqGZErqHB1e8Ro4JHLpQZp7SeJSUL7PqJMAYDtE4eizwpvcoYcT7uainnrhFzxQdb17nynYYpE22dd9rjMMuAC",
  "key7": "vcE1TrwxLdsfwQfc3nyNjq376ChesM5K4U64sNwBxcJ9ACySk5xtR1BKSFPhgw1H4Mm3yCbsZVu4Nfuyd4qeKX4",
  "key8": "QzHFAiqkctpY9NastCAdFz1ApqTLu2x3uEZ3KjvmK84WAW9EpE8AAxjJGpp2JgQ1PTXTwuz577L3p1JpnYVhReg",
  "key9": "38i4MynK8ZzPwVYGD3j2U2X3pRwkWW3zdP96o7sbRwGam9ctBTvN7ANEsqhz6oHBz7Fw9PDfcq3fMdVMXhSL69Ga",
  "key10": "2iAw1o9BWi29VqNJozmdwNMBeYWaeMvmgqGPFLw5Q39wx2YchH9jUgejyooTLb1FBYBhgccAE3Ue7ZPnxLDZXnQb",
  "key11": "5vrQdCfWWfj3aJUwW24qi5QTxeEL8ZYs3x7pHAGXjNpVxWTu8HpjzfTZpRSPsmmopghuHZfYxtRkXVtGMXwJd1Wp",
  "key12": "5sqjxEUAWswWmzpvjbKjZvbDS5NgqBWchcXYejSUzUPJ9CtWTDuFcbZtVaCbw1eTPNaZbti2i29dMjzYVsdTUpkB",
  "key13": "4wC4kmzA59WP8vs78cJv7LpGR2VBWXtB6aPzd2bvPwP8uM1zYsAaJSQ1v6qKiwbhPoiLh7AsdfYTRBbfzRxXyv79",
  "key14": "Qr5V1K7Jumtww7xW9Lknp3Atz8ZZY6ZyQGUeh7Ynx4F75kz6tgb8P2bzNTCeGiu8jEkGWUSRFAnYuqvSPk49F7E",
  "key15": "4yRrRZvks7RMZVNqX2sKt32bs6D6cpGSjZ6jQW9JvAn2QSPy9wwDpwjasaXeWpAWmUKSJdF5h8RPFK3z4TigmhZa",
  "key16": "yg6uNvp7SDoFZBHpYCJhS1ohavUM5noDRqcxUV4CvuohMoLRSVRjFsoSjYtsKec62myfaeNfkN7gb5PQABEJopE",
  "key17": "4vRdi5Hn7Xrf6iQSZs8geFphy4U5W2mLcos4MntR74e3xKzZhe22DhQfwRJ8pUo1n2XvopWDuF1R4jGMF1hLqvHQ",
  "key18": "4cz3gLcg1q9gZW2yN36p5KYnW6p9CTPv1tEmfV5ZwZ4YHK4HU2ASAmcQU51C2bwDLxvfNyVVMzsH6fNpVvf4GYTc",
  "key19": "3jS9m7hgeWKKVRq6k9DjquzZXhLqoLMbKYLPX4YVS3rcGJchaZ4Z2YHULNWbqmJMjaPixyidGAxHNnF9tdaEKns",
  "key20": "3PvCmk2bfxQnKWtKFoGJkExGUct3aXvT9NdvZKiFQk1WP4raukrzNHykd7eEJR2bQ9HqGCF6dEQupWxCoqNTyMZ1",
  "key21": "3jQHC3VC8tdqGpG8gBazKPLph4Qctgp7PM3mWu7aRprj4Z1LXqZTiKKuFnsUEUFA1tiVsRzAbq6F984c8nthAHBN",
  "key22": "5dymVnpwLqrctwjUgPKJ4mkWe3EPash8uDxn76Jak8QphuT2hWWNTLa8ZDZXigSsd6u9JmfK75CWWf7ZJxzfB51v",
  "key23": "nxBWkPhjDK4WjDEmx5hGNpXPJevkhHQqeK6bJHHmeLtNhJL9mwJvd9iMjzwA7fCAEfCrcRgkHcXt27hqtH5mPz9",
  "key24": "5sEat53Y27eDzFDMHj9p39mYSLGpj1gC8SAokPhEf4GikCE216if43pdk8aQfRLCp9qTz2CrPWvPGsEy7kP1hZeD"
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
