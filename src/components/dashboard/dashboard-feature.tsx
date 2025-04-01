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
    "3uDiCrmFSEZDvxMV5gTciPSrEgBDTgg1aorzCMLprm8q7tEBcUg37h7BS3ro8qUYu2RggutvQB6yU1bNnNw3PrL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2juDhWDz5TH8ghVYtW7nBjQWUGE1tUSQZU8wP55cU9Wb4LxbLwfjTeYRELT4f22awHHuQnV7z4okTotxaTA1Nxn2",
  "key1": "SqWakhqj46xv6BTnZd8j3bKsruUv2Wc5wSyCqjyzVjpXps1McJuyAuZfuKhFAEU4Fu3qEoZJrpH4j4N1ioTynhM",
  "key2": "4pXdLqLDWYPGkem51RPfSwncZaBv1X82AUUfYkFayn8okNcUivFiRaDckuLE6Yyx95RYuYimRSjNv366VPhTKGLB",
  "key3": "42z1MpPmi8ybLbAZkACidhRD1vfsTPHAAcsQ8dbezoLxE7KzG8ZHJY3iRYiVLMz672KCJvr8dWnrmAjc9HGkTHLJ",
  "key4": "7bM1uXd3Jbh6SJyxZSokWg7Y4twaUvdAu411S2feSLwtGx5WQkVmQFREfkwFoTqb6dSFxukB944efGRx7RUJJVY",
  "key5": "4LAj8ZkuT3xVykstLCLxGUgwSSrF7GqbcPY8Pvby8rLfsDiRBBAJ5A2uNGC5PoAw1Y93E1LeFLWWPMLLMsFS3C7s",
  "key6": "5s5CAosRFq1T3c66hESBg53gquMV3fH9fW4pUGdKo8EVaDAJS6JfnkDUfASCQ2zCi143xponG6X9bVTygjWjm7pq",
  "key7": "QQiacT6HKjLicbNNDenp64TMFubfCQLU4kLD4Hd9Q6VfJifD7dCGmwTuZUSUbaxx3npaW6yj11W8VTuk47YE5X4",
  "key8": "3xyAfjmq4LmT5vJFDS3WEnRdte9JpqsxUZKXp74miGAAjpYDbNZ8UwV9NFJwB91fVXSm3TZ6kSDSu5iQFFVVmdv8",
  "key9": "2HzgwtA4xrgKijVot6MKmmzCJv9i1E2EDGmoawv45EsizmmLz8uEkoie8fZJPwF8GGmEqNsnFhrPMdMbHwHNwmxA",
  "key10": "3PyhtMAW5uDWVawr2gKpdnJVfPKoyfe6frGAAGsbf68QuGUYkB6SBJo8C8ukfMJozTZncxzamWq1XCZ5CV6VG9g",
  "key11": "UX1iSzhzA8uP83kYHtYGFFAbaiH5F1NBYeLgstbKcGV6atXKFUv4zMStLL9svAZdREgyWyvHn46rrcDSAz7xAi9",
  "key12": "58c7R51EraCRDWMYYitCKzWdnndYY38f3Yv8pQcmugBwPCZ43rn6FQWJPHqT9WmssqpiS9ZaAcKMsLiqRSMT4uNp",
  "key13": "BEDx6YSArQTyXnZK8gChcGDKkDPLzBXqQB6QY54cYQA5bbdG4zj4egLR1UDvkgGLZKVibzotMu26qZR66yaV7yP",
  "key14": "2rVSiHW6g9pRmEqcjp2rkmyogB1ggDkKBEUnqZdYxSXRzr7NaX3AUjQ3S8W4pYkdyPW6uJF75E8FtnUUfFErQux3",
  "key15": "zfAaJ4zRRMniPqa2odvrwvk9jjLeWkNbYmf2ArevZBw7Y6rR1zKKjM7vtLGmcqBUhhFGjtcwSGkgoSQyLuZQc6P",
  "key16": "65xm931jr56ate4ozQUxsgYJbxj1kFcz5mTpLYrGePNuQakf4E31uRb1EGs7RFU4Vih6ifxTXrRNJFWyLUhWARyb",
  "key17": "5thzWUbh8tY8wfNTx7DgnUNhAxnnRVRgt8vrkUHUKcmvaDkDudRkbPMbnKgZGCURQEdHKCxh3W1DTDaiirU89ipr",
  "key18": "5r1DMYNT5Xomx5u3dwYiQ8Q2vsgQbUqFVAasgQaCA8N3LvaZS6CrMpkK3xjWghxA14BmLqGDefgc21uDE29uLrwU",
  "key19": "4Nn2cz46sCrrXgFqmczGamw1TSr88thdptGyohPGHAmUFzKKZPne1dkrpiNKBNxmPeHmtkyVsndQhjqj1PmcQahN",
  "key20": "5FJntf5yQvAKm6rwq6r7tPwkJbbm7EzdKKVSGhgXXfWZU6r8ReEa6nxF7yocy2wHwFA1Md1TfnQeAhYAhi2sghcJ",
  "key21": "5XHYLAfM4LeCsPZUBLeEx5Uox8qG5RqBbKAVGCskXJKJ27AqNHiJgaRHCNj1EpKfE8FzquZv7L1tAPTpe2ynAyY9",
  "key22": "5SN72khmJE8PAwas2deEgxuexjSHEdpnf8WJmQCeNjCV8fz6a4gPZvjQdTTW5qD5FBN3axto9tU6pQiy3jj9JtzH",
  "key23": "egsxi8YR9q3RHjo2f9vqPZZYx62M8hN7moCxPt2zdtZcYbgocgbjrRkHeSABtFcRx6B3iy2qD7vooSqcJ6L42Ls",
  "key24": "4Sz2CN4V4Fif2Wa12erod49e8zUHky2ARhaLxMVAB9dx4mEtj1YeSqXtxbcjg53snDrdHBGUK4omNFK1qLTkPSBZ",
  "key25": "2Bv87zYj6A4HJS5ECwDKcJSitenp21CGPDCmsABVrJk6MkuzuahrftAPaZFGNQs3yMYKAyEv4UwABfkxBmhsvyaG",
  "key26": "49hSLdaWDiFbsSWww34FU5nYRT61ZWCQr1wH5Zbj3sm2TKywQjh1WHEU9afFL5b4AYNptmEQrENHR2vCUstmmZsS",
  "key27": "2cHTW8KGRu65NW5BtGzzXt1o8QKWHJJU8Ei2e6n6U7zWDoxyFP1csmTZnk9FnG5CNXkKieUwxobW4NgQdwLCmjNy"
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
