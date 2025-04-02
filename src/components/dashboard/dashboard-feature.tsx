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
    "311NBXdE7HeociB5nstiKdDNhtCmuHeAtmr1YquXmXKiS7g9G5X23khZrX8dLF2U8yLRmwVzRfqXFrffP66F18Tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9cttw1YuJEhFoLyWtGhbVgvzBV9HLAws4JoS9pMUkpnmrxmM6qoxDfxVSc4MxSX2ZVNWaa5Xsy2KenZ8CbkL1fY",
  "key1": "4vHfPw5JqTg65FiQsiTRVnghRggd4Q4jnazAVAkNozmxt652PbS1bhAGELWQPUEm6RWakD6Yv7LjBwcDvFjgiyy3",
  "key2": "4YgNBURJXs6mT2rNnKPZxcbw713XWvqUDrrfh94TqP8YaC4QF2yczgQUmartsHdS3rnRae8ZUzbpf8e6o8af5QSV",
  "key3": "4vLTLZby9MEcyyoPWr8jW6BmZaFJ1Ffk7uj9xjxBT5H7pSi6WRfQgckS5MFScUChgvi9vQ67k1Uuu6XpUCv9AQUk",
  "key4": "4SPRnuh92yygCRtQQoGbesW4EJyVLpbhVfPNGziPHC29MHQUxHo4EdTquF3gYJYHiU7EVGdsQbw5Nk6RxhkiZd2U",
  "key5": "2kMeKkzfzB19YgTEz4Lx5ug9WDeXuTr7f7mYwcDsbZwcUYuhcCLTZkB2zd3aZXFuRShtc49tX1HA99bVyL1oxvqx",
  "key6": "644fNxwSQ6ggRx7NQWHJb9zxgqixZkmbNZTaGmrjeA5haJrDux7aZg7HiGoP41sZ1uQoPjnvYNDTwhGA35uMEDcv",
  "key7": "2bUvagwV1jn73h3PMKAYEtmQEQk9T1k6oZQB4EbEcwQt5RrdaMZfEML7eaqQE6D182pmNXftkhEaWkpDW4RRje7T",
  "key8": "44zq2Ag9yh5uvLTFeSnWJmmhYPyUeAuP1jXbf4DpfHD5M8MJ5Ctu2rwN6xdvRYYy7EwAm9yD9yhuk7WyMg4NyLGq",
  "key9": "29MJKm3p1BMG4ZokoiACh9ozpYJRRX76xGQeCuAotPBhDjSWWAhtQnmaZ89TDHDux8zAqgP7udX6XCm8eizYuUgQ",
  "key10": "4TT7VxApe3PuDojPjpNa7KXLFP9szsqzPvz99ftARFNAjiPyQccHN52fYtZPK9gNuSv64pPr8cvPCca11uEswWYP",
  "key11": "4Har3UFRDJf5Zj1uAFvVngw7RM5yULbVi6c5b5nJhR1CrSBzQt2vZU55njSNqqRhKX39qXeGkyMjvJ5eo9F9idL7",
  "key12": "2JVaTmfyLjjKQRnWL7t7CcJSpMb4oAafqpPoTNSYJ5zUJGxnqBxPxGJh7M6iKyYhabHC1FbHAdtyQCpeXxBzp3F2",
  "key13": "2rqtiERPvYKyj4cYn93TYJMd2XfyAMBhh4joquRrPHWG42aqZD3A44Fioj2cbL2t6gRL5JmkRthnDswqBdwTh3CQ",
  "key14": "3z66sEQS6xx2hwA8X8vXt2g2ktNQFUR39wDYYiY9AZPQXEQKF4F946BvMSwwCYeeVuZ7JEdyxhGWPFYoZwaMSdJq",
  "key15": "56oh4KVANaE92bceyXCaiw7N8rC3EmUErKeADtEKGV68zEpb7TAmjrKXdQJzWwjgVMa4fpr1QXEZMhTDeMetMGJz",
  "key16": "2FnDwfUh2jfDu69BY8kUzFiFRT2Kei3zPGgjrKoj9ybV9i81h8zUx4PQrRxDyfyC2gdaZnhTVxoHsAkUJJGCygD5",
  "key17": "2KpmeMWL4EAeh2D7BGx2wuoaV5UgsRpHVEZvxUFqsy9eHF1ytfYZWvDFm2Sf8DoKgXqCtBx8XLULRRprTGRJ3Muz",
  "key18": "4XsNhoNXxTxnrWzZoQMm2Beu4uxh3xkMur9FQ1MaqaNTMaxecmsfc4zbBpBDpY7i2YDZToyi7PBEAEjQPbkrAZvw",
  "key19": "39xCSc1s72KPJonyj9gty7GdCUJMcDQq7sU2B9TWaHqTFtyHkqreez5JmBG4B3KeM7yK8jSAk1uQtn2KKTvgnw3G",
  "key20": "iDsA73HqA3Gwu1rUmAteXAmny82jjHqVQsVZfJMu6XmhG63i6RFiewQaR2t8JuvtP2v2nUFMSjw4kw1cKMVyKxb",
  "key21": "646iEQ4xuYJRQV2yfQHE71eGUF5h2bZ9tEnGjT9pfrBQmbjxAnowM3TEJnjahzrqWbPUB4gxvXHGZxFZ45AV5rqk",
  "key22": "4g2qnAYngeDSyzY3aU4M4ChUyQyaRLXuh5TrQhhByNnR2Bw1g4oCLNegpFnzZddPM3GCz2iSHrXA4D3Cy663KNVd",
  "key23": "2v99zCVhJ51FdSJ8CSN4aVfbconXpDR7dEtxi22S7ELD7yvAccmsHtMTz9Kbsc34dmn5AZp5QkHQwdv54KUA1mib",
  "key24": "jn2cCPLLqHsNBdTpAsS9BLoAnWfxoT3R5jxgETCJX9Yyo4oyw1z9YuGo4xuyekAXxDQ3kjz2tqZELgJK6AQF8Pm",
  "key25": "3R6sKsf2VQpRbwavcUv82bJf1Wh9kevVyx2ZUaatwjesHhbixbqzSRos5j4fxvEZvUYXzyxFVrnZPrtjSfCf77C6",
  "key26": "3cma3WxzLTMUpMmAoqXz6n3rDoNeoSWsk74qa2J18GiDMjYWpRtqFcdin3tuZXoptj2f1y1NZhh5cKivKQKMV5Df",
  "key27": "5M5ZN56H3UKz8xLh1jEvQB2sFhLERrNR7X4s2Z8K48qrW6DcwyZeuFMC7Li2fsDAp4VHwXGJotN6QoLuwEGhtiBu",
  "key28": "43We7n2f1hgkPFfuKRBgcuPuT6nZCu4uiTJ61AUG5CDDLycBvRa8XJTmnu2tNniNvveJJn7UMtSqeoUXY2yfC6x9"
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
