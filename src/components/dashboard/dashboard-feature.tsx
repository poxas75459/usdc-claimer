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
    "exAFAXQ9igWeddAx8ygAUrt8ieFjXqikULebTxCPB6gexezQ63EyEgm6mfrXUwrULKPXYfQEwtGB4LYseVxindw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61UQ5zX1DqLzYpKz8rjS3GrD3EF5jbbiKnJBzDM5UpTjZxjtphdLk8FtwNZmDp6T4rxvXCDTaUGLhCA6rQ6h98np",
  "key1": "5zLF9z3n9rBZ9tWPm1xQR1GmGnD1DcVWAsNU7mUvHpcygnDWr5n8ZGLssqXXmWJkq8mxiHVUAFYFbKgQj6dysmYx",
  "key2": "vw2Lb4zD17g6PQYnmmDeq94KKvbCPLgNLD7fHcygo9Rp92h2wSFTFr2aGEc8fc5KGMe8wG5qBaZNFsS2Rczah3r",
  "key3": "3hXNgErieT14iprX68jVqLZ7CnMirTvdGMHZy2GrZQ2tdWaPTGwmbrUTAY1vQj9N4cwaEoq5DydcARZ7VV3PZDJV",
  "key4": "66NAFohaCgmvnsU2TzGrtzdxRLbq5kAUZ6FWze5eiEy74EPAkzEuT1CqcFJwNEeE6PbYh13xr71X6Q9i1R4ER2N",
  "key5": "61iSdqVWWpawXTfQvPYWZiuGQ4nk183N1HsW1fkbp4V29tE5TSMbjAYusHFefZFcFVun2GSwBT2EM5Wu3PTPJBH5",
  "key6": "5XxRgzpL91Ne9hbx4raZ8SQ4zgrm9SiV4GkNGKEhVQPGnvqn9C6MB3MNDF1djGG4FwFebca9EamHjynvL9aHgSx6",
  "key7": "3XHEjVXggT4k2Wh5grcL8qexQ1h6fkDXrjDLYQ7utssB61etYDjH6TDHnhvkwe14GMhFzkxcbJJtFrtSR2VRvvid",
  "key8": "5yDcYaX3Xdb3gFY9gMMAtfS3nzcVQrShxD8JFcHKTEBYXD4u2etSAFmsXS8JwqkdxeQ7J7XKmMevyTcVxXFTdYLH",
  "key9": "5kMfLzQCgvQE1gYgMiK8A1fjTq5BomJW1SZX2oU1avfQq5MgJdUQvZ9fDpPa5KPgkeZQn1YBJKmAYNisciHgPGHb",
  "key10": "3TfiQfHWhpnjap4SadjdmHWWLSq4nyZBVVMrfsPebg44HwAkqn1XbNMD8FXeRdX5yZDeHBkSVhbb2u57Cpkq8a5D",
  "key11": "5KMaG3trqBRrsMKhRE7qxjagnJ69CURTR5K4tf8c6p8g7hbTNfvTPiCiboJP5CpXRgMAQVhgfSN6vrVMg32uXFy3",
  "key12": "5ek11cpcYcgBbTFcT2i5dYB1nB8sXF6Whc92sd75QqHMmoijXBAErX2TH52XvNykNXqBxwPC4k8qJTGTYEHzSt7Z",
  "key13": "4pANTHJj6BMCM2NzurZDwuCtw96oip1vHKDbRiN5qzVYSWXDtKM2eh2V2VAHbAZG4eFo2YgUs2hVEWorHW3iwtrw",
  "key14": "4oDxG9GnU3jUud2AFGT3EpAcBgEc3msCGibDcdZ9jvzvXG47MMaSGG3uhmdhsBWoP3T6NbJof2AuvqXNWf8CrXVy",
  "key15": "3xKXvPx5GE5X9F1o1mG85UJ2ce1JYToiKWYzNqxZQwtx63QhSJG9PRgbbw3bLJyrtAW9dQA4sSS4BchQ88fcWkkB",
  "key16": "4HFLVKj7HvfgybaG4uedznpgjKPvuYPFt5xmzT5QyoaDFjiqDXvVf5jkSrdjXxfmUCy3kKAqbvJ89poiN52fQQAa",
  "key17": "4LYwMT3MongUpn3iMve9TQ3hNpwZscwix83c1mRJg9HCxZvanAEkudSgi53b8qvYtjiP2qrGepdDUz4p8GETyhBM",
  "key18": "3GBUXHS6SjrBPeJ4NKT7ULmoBfQwxeQFSgm7SWL5DtyaLNfrg5jPRkpNKsQVoT3jiV5U21jU1XDnVHMLSieBFHR7",
  "key19": "4fRR3b1D1Xbb7WuApThPe6pzFw9PF6FkNFy5RnMaavCp4snfBx1pqaJxQ6xtjCf4jtqmE1QRwYsD7x4pVEYJ9ffN",
  "key20": "4cF76iL1Af4jsZKJTYicmLh6LzjNPgink1Wzzs4yXksCc9ftoTfCGzuYo9K5QBXYyN5jHVz2WEzn5GXth8Su6TF",
  "key21": "5CkqFqhdQi2J6q3sh3Fw1qoUByhdPjr1pXwHUXBuTA4C3kCoxtHKwSv83Y8kMN5Xnr94ZWRAgMLgV3GHEggDoE6e",
  "key22": "4vzNDEFwPkjWh8KzmPRvMuQMcP8mZZ7hbkxYnKkEhWhWXxMF2SMwNBJXwRuxwiXqJeapBV9XdNAa41u3nVcnHhVQ",
  "key23": "4Qc1mx2JdvNusH37dkjDH3Rx69pSePevMvXHvVyjQpukw5Q1EYxgH6Y83ntGbgnQCo1dtjhp5zye1kmEt43CNB57",
  "key24": "4M8bx25JWSo4q8LJDoKyezK9MYPRUTmJVc5GQSBQ5BeFK55ywwyZDbDA7i4YPECCfjdMwrr69SekjU3W5cqX8w9A",
  "key25": "4eB4ubBKSnMQA5Y5tWcoBf4kFN4fhwmqTH1L84eZnUV6P91d6Tti8Z4yw5wsAcvK2TKubdU9N2qxT2bL3pJagaHk",
  "key26": "346pi7F6J7T47jKEJ43y7ySfpuRdWDr69w5skDLFpanzE9uknnufKVzBhwnMihCjQM6y6dGEiDVkqhTwTDNAYJxZ",
  "key27": "66ACapFXHgjhU1ZE7scKtQz14KTs3o8HN8xkpEcK16SHhuKDXoiuCuxqMWYY5M1DmMst7BdivZTqAJnvm29o9Wj9",
  "key28": "2taR8eAvcRcnbXR46z6QQNLxc9EmpaiTbZQUj3e9WJ2LXJnJ6orRkJSxPdGgEVqsod8zMLdg3Ahwak5FVRWMfqDE",
  "key29": "iyEhaNHiCD9DT371GTh7iTY4rRW6jaV84iy1qe7kYaMmvCdo2RxK2Rvjj3nFysAXbJojw7ACHHXw13VRhVzSKp3"
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
