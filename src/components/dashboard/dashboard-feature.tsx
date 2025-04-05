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
    "2AqBjjjGpnF5gWAibW5wVTn8kL8MxHVa8qL72zZ12thPRbqGU36LLcjPPXqhLyAjigX8srKTRaA6rARcs17mJRKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57i1bkv4V2RuZuA6L1ys8kecZeF5t4ShqyCNV3vSX3Ut7xwJPzru2PGcXhUqeahVgCFnA2A3ECEVwvpSRPhuu9G5",
  "key1": "3Qr33x3fd9cND2xmr2qkMM7znKzM8FN7mMfQM2xD1RFfnxxWXvdCikKZYXdBe2CFeVV7PK4HmzQfG4gpRpHwc7C3",
  "key2": "8PDLuK5abuhDUgGgyQQnF9x3ARyEYjRMFh7rvzJch83smNsjKKP3Gev56gjFQU37Nu3LnQtCaGxYPLi4azj8drm",
  "key3": "XKLQwsWCJeP5X3AykVidw8gQrsx5oocQvxgLLcgxycxAvM6uRFjEhJseBAPq7thNxpCB73qPnRAsL6u27gjDCJm",
  "key4": "2wzGjqXCVJq1YjfizFv9JQmLeFEKa4GPL7RuRAZDWC9wy5iWM5Gu6AJgnoRPet5N3JdBvhXRKEavvSACYdkSz58s",
  "key5": "58QMWm78ugbaURfZpYR49DRdUTH7oBCzDeckszhseZigBYnMioXXdtG4VRiuaqBTegEDWiDC2A8teirchhGNqddd",
  "key6": "33QBr3tF7ceGp2NntBHBVezELJC2WKPniExbjto15u2Jrzg8QEYvcTy4tWn2AZGMMnhBxoQn5xHqVAQ9kkyrB8XX",
  "key7": "3MWWMjjYEG3mJg7Finz73CgJ1BdDnpsoYV5eLGsGnMiWqFhziLJ16ZFeDUJNHYeQjNieUzEiyVyqUr3i7kEQmTj5",
  "key8": "4frkXgHkpJWnX5zrjFR2PPrGAvrhgpqGHrRCzFWACreShArBYCk7DYrp6p5ddqcKcUPzkw7cfcAGYjvgbmEQYAiB",
  "key9": "XD1pKqVeT7e4wWDXTWTX6Y9NDxNRuWTonbgY8uAzqFD3ttepMKncV3faxKqmvnTA8eearYuve5Xuswafycz9fXJ",
  "key10": "EEf52yYFDHWwB8xLyMpBzz1Nw1RKDa6xvoK4NHzFjhq7nB5pc4UUmsyMnUdqzj24Z5PVXSyJCFeGQdZZHWLZMP5",
  "key11": "3xqYpkmj8gADruYz6mYy664rq7Z9qX811ReaLur3gpqiSJu15vogVWtDM47Wkv6hUmDy66zHdiePrNfq3wjt1yts",
  "key12": "5UpHE6B9MueAteykhMSS7p31oagJZ8j5vR46ZKEbdXNjo2PFBqDV5HMco1dgbCnyLnr6DYYqcaVdHwu1zAc8LNib",
  "key13": "3bVkBpBeHQ3QdyN5Hnw4Qw3oXJqfxG2wD9WPEXQfQg6phWv9JTwQCox1wFqQu2NqMUM9Y3JH4K6Ze4QUdB7Z5R2d",
  "key14": "4e6dpx3dwUNMmL4b5Bd41oXsmX9CJz6uL4bqrVZWUYaLiVZeTzy3nJ4xNquzBqhk6uLbeCgo2MyWkCMmL77QLpbK",
  "key15": "63qBpW1iQ8oCbgeph1H42wbUbgiRB2zuXLJnqfYUuHNs3uKxT4uprDUQyRVvfAA14bC2W2F97ZW5h85BT9XdwAzn",
  "key16": "bsZ76DtnwG5fjBPjMkjHFt8nrESdcbXttS1qHeVdzZFc6bnw4MQy17nt3jacsmfeMFnS5upUVGNi6LRrqiq7yLa",
  "key17": "63QHieXQ4CDNhfoQj4PDbYbxisvqoSoYAxFUrZzAYcEcoW1wYPoMXdTDMP11pMVWmxm3VFifmEhb1bCVGhqvX31a",
  "key18": "5XUVwDfmPJ3H8UdE98s783r6xzyDNmecjuVjXK2SRdoBHwvj4YA3Z4wBdXz4VrtE6m7kpMY9rsQkd32TibtRh753",
  "key19": "A2xor2WHfYgZHovZJ4Su2MHKxT2yghGpj6DTVMmCdox4vtRYtEGEiv9BpnMVHjBbpcVSq5e1nASJQTTvRWtetCm",
  "key20": "4X2ZFLom9ERmeUtZaAAZW8eLfLmeLBQMKGPmV3B7ReFRgp1sbWUvCdxM18TbFWL42fJTe2VQ7CrM4PirgzpjXjZc",
  "key21": "T3MpM6KaoaCzevFT5eG5BF5stUTpEEdKaoL9HAJNEEcPHoURYD1du5Kakr91AkL1ttAoabKswjAJNTnAQdhJi9s",
  "key22": "2QJsAucBno8BA8TUYpicsqijjT7rVDEB4cWvniPSDoNRvG7dnaAmxV6JozH5ZuQc5SEc66w6uA8QctjK2Q9szbQZ",
  "key23": "2pSkqhrg5XLkJnJy9G2mCQjjqwhKw1wENM1cZcZtoFHe13MaKKZzjtzz9UBzKviNV4wP1rBc2sZJUtpx2dTGK76m",
  "key24": "bKGGQzk5dxZZxxo8uMdU5s82YW9PptDzuuZoukWqcEL92MioYkjsYKWBkiJheqdHjyUxwdLA5Lb65q3ZVziEdxp",
  "key25": "RKPRabVCpEMPZfNB2zYvgbHSzZc4EsotQmWeYs4hzbtfwANd9n87Chy8kG87wqwDtiMtcBxqVwMf8pMxz2zGb5J",
  "key26": "2enwg2QeGRCqeR37kcWvFonjYxE1QM3bGTP3uXnxbPdWTQUdTaepoMubBUxRUwrtctwKnA2YRs6QvRpmLLts5RgC",
  "key27": "2koUYZ1bB3o38VUDBJTRvxeu89qmR36V3BRnJkrgtbP8FsoniAhJKwJy5BAYE1zFYSk1qEmVMaDveFCYeeWPpcwS",
  "key28": "5SFKGAviqZd6zcVzbwGhQc6RXzYDM7vMD7z12tM9Xp6yKs5DHTEmCYYAv2iiQtM6woTJSV1YBPPFCDLSY739Ecjc",
  "key29": "3X5PquyNnPdZ9XrushyBvsAWpo4WAB6CAAaP2K8mhRA6v6Ens7BmVMVq7tRfNQRtgyiyYLrRvB5MByGgACcF3EKA",
  "key30": "46NUNmkbnPu5mCFSw2nkoUB8K5DhmEzjDb9ctELje8A3AkAxFogjPTmimVKN2S9oSa1AXNYtQX3CEeVwYUg92ifL"
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
