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
    "aA2pawUFBZ3qjzyCZo7Ha1YWCSccqsBXJULBCpFDGjR4j9tJ39ZkpnypP6y1FF95B3DrvEcccCMM9ccSHpH5cKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jFPKtJyr8VCBJpwiQ2drphTGJSZKurxAGifVRPr3t52VQkFAAT4SreZHZShi8XWGQLLVntQgGeSfaaMkjG4hhf6",
  "key1": "4J5ktpaqyRWri2FahkVQeGR7WzueBMigFkBgUyoafsfnZ7WhmdcdjY8W3DjNq7jGEzMBtTQnqG3gzjaEgHPEfzS9",
  "key2": "4Xx7Cau6vvK1PTRKAGJop5iMh1EKrb25WvxXAGn6utEYYG7zRdjz1bxsYEJUr1a5wVK5DrjywhuNeZz3Bc5fUeyS",
  "key3": "213mX9YapRdzXfPu4LkfU24nEjPnbW5NWTjDeiE66jHq2cqqXdUc5JfKmj51UG5F1qEp3aBVtsCaAjb16356xKaY",
  "key4": "2ZQR4AXE33c43B1roCBWbz651BwGMGeoewmHWY2AvbSWJJnfSmJAZQmry4CEDQY25gqPHg2PJUq9DTgg29JM2UTL",
  "key5": "2ZGrQMECWTQvcSTPGn1fttYvdMx27xJiBk7Asuyu5ySURRhp29EGbwFTCDsqc6tRZsQERWEnQQmtMA1AjpkeJhwk",
  "key6": "3CzftMSTYuYDdxuC1LGUeuE2E5JSNCuxBERQXteoZ4uBbwNpxohPPL2uoewx18FDxZDWVoSKCtquBA7PjvgkMXBB",
  "key7": "4s4sC6pJsGGQd118aSaYuxTmRrxbepcG9VUaLaNYV5LT9mLvYJ7jehuMDVRibrkx1ASP35dmt3ZfuqSHfZKVvYEf",
  "key8": "TQByLqqCjxuNMvKZ4qBurbmqiyjnMGYQ1KbvdSoPjwhZNxbBYdTMhRnyTxdk7qsxDAXV8JG3aS8k7o5HWgoZfrP",
  "key9": "4B3jWL1xrpV1NjTgmobvqHaoDA99HKWFZ7B3g124dui8hTUYD6G69PbemxKZcPfFkHPZnaWyRhhtafy7YjMNNDNC",
  "key10": "5qCHtM4xVbUEjdvSgapcEvnw58oXgk2zZEvpeEVwQWH24UFYocFxYzGucCCEjrGMLXDCaHS98wskHqUqKCVdEoYV",
  "key11": "5wZjDkUwBzT9Wccf5kdW89SF1trm69GZqnmUhHMG8GyBgkiD9EqNZ6c3oZsMStJo16bz1MmeTyyCSo9b5BRvYPuK",
  "key12": "3oF3WU6v36stJE4EjMVofgaMFdcPxBPDtB3Se8DzzFFpVSQzFiLHqiVBHNBRb6ca23p7B8qTWWw2fBGDqUGXeGj4",
  "key13": "DuzPZdvCd2ouacC38PycGwfLoqLo4Ygacaxd3kmG2Vg7bPja3FS96GQcbpwHmPumeHFTgyNXvEuj4gWRU8F6yBq",
  "key14": "Ztu6VWbR3HB2iUC2DQJbDR9MizjVDqiAyKB8U2hVZPRFbPPzNL2814Y6mZZz8dNgfeUxodjcfuG71oqcwT6SWQS",
  "key15": "4KRKkWhSkUgbya16ftZRu9uU9SzGYetJBkj8AsdTM6ZXXjaHyPfVvoVhwq8GrazCkfFkDT8MistS42yyKHCrnZ5M",
  "key16": "5AhT6rLuYNCPSugDM1wJRmY8unvt8ULqCgTtDdPhvEEM1P8bgNpLZV2622Jm5EmWA3oTpD24cqeBA8SgK54p9RdD",
  "key17": "5dBocLUc4N2PRuz9VfUFzteDue9Gket6YKfjcFwYRxQX43pfmLjfZwjM5t6uRvrpjZpWGqGNAnrFTNfD2gAtfSwe",
  "key18": "263iL3qet1xEQAkBytPZWD3knXGkxTt1S8dvJnpHcZppoGBbCJTMgQ4bufFKsfCsFVcnk9t9CQwAGdwVqvJjzqpw",
  "key19": "bo2bo5dwRNG6LRPwxQUPFhcD2eEcefTvT6hHtra1QTgSLR2uVaggG37fGP9d6N9q5NKMppubet4BmRQSNPnnYVm",
  "key20": "X2bPxxTpfSVv71yTBVNN9YGa6aTbK9FiFujmB52Ukg5EeSjMEvfsX9zr1PFDeQyFy1GbFzYWqyrUSzHA92ETzjK",
  "key21": "445znaeph5cP2TCMyRt82mKJRqDbBk5FpBrQcP59MnpXACse6ciD8sGpUsehEGBiMDpfTNbQUg8JxWzdr7p8zCnG",
  "key22": "5iDYQKJuzpzzPk7EHy5v24eeMtvBafuapeSpxS97jh6MUoUQUEeRXrB2nTjrqQvY3d2Y3qPyNnbhqeqNNTcHtjgt",
  "key23": "2X9CD8GP9TUgo4jaamqthHgn2S5Bh6o9o18nfXbRbdGd8rk8CWzdhrM4R4TbNWUtim4RZGPTxbRhMbfdNKdhHKAG",
  "key24": "5YPRhEoKQQbLsd4QRkTPsntc6hwEgGCwYgDxqCapuJaowTkLcPt9nfFrFLi8EWQcWuQekq6xCSH1Wzx5feHmguN4"
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
