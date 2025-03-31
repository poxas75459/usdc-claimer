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
    "5Su2Ff3BfiLdHE2FpqYctF9FbnEPtHFvwoTx5rg4KhLQxyvv91xAmoU3z9d9WzUw5BKHqPBjUTfvFVhKHGibaFQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zdU8oDfgNBGjgYXMYd8jSBjWysDhGdvQ29W2Q2JMGcqYhuQCY9MCznfUAhRpKr7f71uFv1CZ6fDJGAB8QkMa9H1",
  "key1": "2Tt8rBz2Da1WARBb5w7JdejHufYpCkyKbjxL9bKgY8AM38mXAyt1ctEVHyJ8scATZYrt3WWgfF5SQuadvcZUCoHU",
  "key2": "5xGBsKZtEWXSXq7WpKCPSwd8gzcc8wXaw3YpoP31DdX6CpD5UbTskxqRrqVnzxWrqg2aUfqYQ728B9WZhCcxqXg5",
  "key3": "tbGukd8CuPBnRU2CsXsSoLg8XReztL8mUMGTsTYiqwFYVAFJrjyvFMFqQ8n8rT9ymqNedRNuGbzNh3mRQgfkf1g",
  "key4": "LTyrHXXVhDW8LkJnv2w533An99RRuAiV9H8H4jNBYywAjrmTZzNsPYnbPdee7gmsN6PFinDkY6C4MUepwjonfcd",
  "key5": "5NwaK1yXdRN1p7jMWEEP2pssPNmtn23SPL5RyLMP9qWxSid97XNx1MeBTuf4n98URrahN35wEHhASN5V1czND3jh",
  "key6": "3xQ48yGfswpoHocqR9WdXtiYG1gDaajiUQkRVd8NS6s8E5NHqBJ5uQAzWgKBJ3Gc2NWN3kZxxsRazBhhw6V4U92a",
  "key7": "3yevxDTmuCmCYbx4QbuKmypgxzBxXYV88W643FPxYoaBdD6N7GyHDGyteyJywJySso7wseXFz2gtvKNhqAZDgWz",
  "key8": "iZAUkfA54BKEqVZTSm3Ww3DwKfWwy3HYxMXX9Z75n5wAUCi56vd5QGWf5dKgZTWU6yGtwPbtPBoK6zyKCKGajGf",
  "key9": "2npymP1iQ1mTFeeJkxp8TLWJ4zhDpD2pvmRXMeurwi19MSRkoc2jUt5iurTNx4azM8ubRNvDiXsL8htsPNJE6F3g",
  "key10": "27mwza4kM3gKNjQcwiFHtUBM6UVCRv8Xo2zA5MCYPumuBjEqgZ3FeRkfmF7VSXc7ehkpFua6SdBNNnxWgZS2hwa4",
  "key11": "2KuNKkRFRFPtuppLpW9d5PzXwPsV2qWvWiqizrWY8oasUe68uFEN5krzZ6zkwm1cQpFPfiCh55LEe8fdfLGJtcW3",
  "key12": "5u7ktHwUFHhvdBnSBzMd6drqnYYkpBBVH9tKyc57ynAbTB7J9Pu8xykjdz1MtW2ndcpLxXWA9x9Zm1ggLgzjXMhG",
  "key13": "2NBPcLmtqVnT1qC75Le2zUc9nsxTH6jQkLmx7gCnDAXc1TWaRL1bQzUjYXNdmn4k1oh9Kd1rsiEpVWXHLoTqAsrH",
  "key14": "4nWP8nVBF5nGumHKsBCcf4gWhobPgmjhCxMMKAEdShtRQT8HrPiSUMi1k4YoSUhMn4Uw6694KdYRcePZrSgWBfqg",
  "key15": "2HmLQq4m7NZJ9d9oKzQ8uHpSvUzy9ih8sviDRmwFsXBJLcDYBCg4ajpWrYVn8ZSUy6tnkvbL3TSYc5uKutkdZmsC",
  "key16": "4LrHDF4q7gi6oemeJvD2SXEhDP2Dfxv6sqQtXC73uNE9upf6PKiJmfHuZrADP867xHakRgrBV1qpkNA6ZDVRhcw5",
  "key17": "2bYjtkKX5HmrBidXZMkqkX1GvLNTNHM4sBMA1g26DSpt2N2fEkKssRnQt1wexXjAhupF3nczRdH9VBugJBoiMHFL",
  "key18": "5TSCvoGtUKiyzH4Z7B4EiZafJPyUmaUFkzUhf6kM1YkTkzaaVG66cfyHEQxBLLKqaA7Ma41gjt2bY6r8xmxfQPPL",
  "key19": "5inmgYvU5hMQixz1jLVGWzDZzKzrkgRcpMV7HK7r23nBxPWQQXcLz9hwmkf4hKPdsGjshAKyRrEzfYvMoBKzbCUu",
  "key20": "66kVD9fJCkU7z1yCh18MrgMqwo4wDEJcFwy6xxDFnLJpNHKSbws9Q1WPhYnGeynscw5aMrc5UFAuBVwTp12Q2Bvc",
  "key21": "4SSSVcwaxMNaqMiWGRSBHk6pmcXPAbNw3iycKmgReXd2kEa37SovNBQexs4CxaVV2z9kkrPftciyg3xoods6ZciR",
  "key22": "4cSPNM6qXXzrtST3JuYv97Jcb6gfWn8xN9N31o4VorACmMQLJXBdvTGE9bZghy1wq6heZJQ7UqWafzcezsPi9YPG",
  "key23": "FM7XafpdAmqsFxmgqULJhxUeeoToc7tw3AecC3WUKdYhXfDj649aizAFs2CdiAjR24SxeCyV242Zt3ppfBeGYif",
  "key24": "2uodgbXNrEneNg7vEkaCT5pqXt1p6Pbv5pKyyq7VZevYgJWZ2dP4rQYAebQk7fT4GhydTX3VR7FJm2WWecheGtTB",
  "key25": "62WqxziSQ5ez2zU1DFsmGZSuoT5UCgcu67hohU3N3gQ9CFaQGFXcwo84KYLMcC5ydTRg2NSJ6kigTiDbWdXxF7Uw",
  "key26": "3mwMm7H21V2arufZtKVdLMZ61qyweNgPu36EeRkKQBoUVzzpFhRtmD5tKhwKPduZqVs8vzQm59rMvDw6XVfLPwnm",
  "key27": "2z4aq8S9teBZjFcsyDfkFrW9p5mL6F52V2kJHvakcSUwnHBPwPtTGZhTZYtWaMajgtbtSvbXNEqXwvZbQ5FZurCi",
  "key28": "31psfpKJwr81yA1fVhmRzEXqeFufACEHynHK2RJYNFg4trQu6H2eKqZyfnJH2EYMqZ812N2ywB8P5o2kgGPL3o1L",
  "key29": "zpKjo3X3AUYgc73xnsgkQ7FrFDDY81E7NqZZkPG5poCUFpyXcFH2tkJ5hD3uvCAJDsP26wKJ6QVuoDLtPHac93E"
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
