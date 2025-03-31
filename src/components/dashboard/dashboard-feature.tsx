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
    "5JJhhR5pcBMWE3UoFstJ2uudknuc9vFd5SsReu55xjh6KojhvdhwCc2zvYPrYmVmM56h3mpfYuqqV1EFoDxJE8js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCSweLB63XQ4BEJygJhsokD34FjgSoZwRUQHMwsf7JbZmbfG6KMbK5Nt4ZpeFgr5i9UyqwjDKChoWfmXC6dJ7zm",
  "key1": "2tWxnzuZK8jLMYEemDdKLvvd56KeLzguS1aKrs1Jp6u6WxcR81cV2ryrmJKaNRPVVMw7dJLhki8g1TJKwRYt2WZc",
  "key2": "5Dt5yYNMKoxL5LCHM7CFZ8raT6uHJ5hcmipfbp87MDSm9hPzx66rEWkpqh92GB7pMS6w4rPDuR6HYEUS9wfWQbRU",
  "key3": "x7WZVBZq7xZwrL374WpXbD98WkEFP1jCjKs6JoyhbtzZXGrtXpQpQjZrqUPvek4BBoxV7nyjSxn9ATxkM3EcWSQ",
  "key4": "3Ua4M2C6fdbPiPB2WZZUq7dMBDL4d1DWbYSCxmtbaXHz2FgkzGsawuB5VgLakNSjRS8ztKZ3FCxkCYQjhEzydHkP",
  "key5": "49pgqZ6ofiZSi2wTkK8JcdAEAFHoc3H63ePJN6fCmD7K29n88TiBJXig7Lc5aZtvD6to3j5Bh5qmT39yAGAYppJr",
  "key6": "5RHks6EW8TXs85ZHAGBagXCDXLE3JRBNLzZtpa61QQwJTBzxyrAMvMqj9Vnj3Fr1jjMTk1PtRz5YH7ZFEDw79edF",
  "key7": "4URcU4MyvTHoWFB7FZLHfa5aLm4gjr1naPDJNCcuHdHaQ9VcXuBKFTMfah54WEWYrMsGnepsn4cGhFWQQZ5CDF1k",
  "key8": "2Z3nujEmG5CWszHohz4HojMWSENGgTojx5AwRUR7Akxu59pnmRXRLiXgENgKoFvzpUxdYkHjgLyTzEixjTRMF4rj",
  "key9": "wpSFP3k7KrdcujghJuqbKuiGtAXhJGbUfLWBjs2BZ7aBULAuZACy5oCGxpEhG2dwupkFvXEtyRG2NwLZmw3MefJ",
  "key10": "34J7pQcdj9u2ysAiWaTvUEfiwFhQfjBAhUd1cMbvuB7u2pqcDLp9sWbsQvwVpcBU6XnNfiWR8UJnbypm9EemmAMJ",
  "key11": "4nM5AxLMKjWGBHgwpsj3H22bckQxVSQERSBT41NrR1mtYK9kcsTARRU5WHkqRn7NV57jEsypM7EJjx1L4g6znNc5",
  "key12": "2QkmdRwDwS2sh862TD6bkPSaNy94bveDtBFoxXmzWraR8XPZcs31FQ1oo895X54RKeWeKznUiUAqJQEMUka63sSQ",
  "key13": "3xeYJAx2jrXhP8bEmgA4KQsn2sKRUELDyvmZFprHjXAzUqPobmDaLponz64neejnQRCgzkhW19iu1cmUpo8s2ULE",
  "key14": "3ZMCQWrrN451jH5XYNqHBsnqseY4A2wvQvzcBdQNpjQXAK3cQrq4pScL22uBoYK3gXLhYUmu4KCL9NhLzKi6QNFG",
  "key15": "4z6E6L7JLB6MoHr5TBeaYGXr6LkzTofHSMd8dzWNRgUkXLn8WbzjJDoDXcd3r35zeD4PEMAUKXgZRVvdq5e5MX7x",
  "key16": "6t35b27i9HQDHLmc8HsSazpaDdU6fjVb6FuytcM9mVs9PXF9Lx8m8aLKVpYwcn8SCWZazqRwxgV3ShU2vJvvQhF",
  "key17": "23YGgUkS96qzjx9Yh9HhxpgF3tZav1a3oXWCfqUwC8npN9gueSR9iMbxygBA3jqxPfPWqYLZT1WvwSByx9d4w2cR",
  "key18": "2x7RayVLZZKu7C7oWRxPn5CGTxT6qyVgt5ib8uDpWHGY3CvrX3vys7HoNz1p3Uznf3RvNup7ACAd9cJjaiW24pho",
  "key19": "5TvnfPTZUGsPq2QmVGzZ5FiiBa1mmMxRSD1wHfVLZFndqKexCSmNYF9SDDvrzo44M8qx9yhF9SdCCDs96MMMTynf",
  "key20": "3eERcu6wYDHC2fwHTopt8Bxv72tMqqgRQY48xnvhosrCAZBuGSALtHGsZxd7tLhA2ZNS1mZXQMw4CVKHXGUQjQCD",
  "key21": "4gGy9ix3GfFuxMqK7Ret7FU68D7pGniQgoTneeZLwMDEdrZYgwjr9HaDDBibhB2GRFPJGWaQGdzeasWBt5hYhXtg",
  "key22": "5ybWXsfXPUY85oEkWVDoErbHT4eP5MURooL89u7CRnq2L7XEWev5YnU5cUYzUYSjC9CChxPX7AQXs82no3veEJhB",
  "key23": "4HdLoZwpK8pdAVT8bJeBda8agsBxLvUJ6qeGPNuLEGg2CZQquAomLACGd74ugoAyrz9y7B88LrCFqni8NMAMYSTh",
  "key24": "KxVprYB7sMXTpk8DGeirTiUctRp3GfWpdT2wXcCwReUng7rr3ANzKJd2rmYR3HLAzGY8UQaWtEpejzykierTg9c",
  "key25": "3oK5WzvMwuCTL6S5FUXAJ6RA5zEh3NfCPqyZCrrR6xdzcvDJrr8dxb2og7zdzRytQrq72xN9eB3bA8gWePUpVCbY",
  "key26": "4x35EVwCXWfV5DtW5AATUCnH13vxrp57J4nmaknGgjnh3sGw9VZ6W1wWCffderbE9wBwtVCPwuDzqJunfqJgxmMx",
  "key27": "5pr2zH9igH6JeR6BL1EW1y3Jo3m6CmSkogerRq4xbBRg2DRUVrrW4xBrkf88Z36WC6AostVZkLP1hcxYUdc9GRBB",
  "key28": "4wrvab7qtq5aSzRP17wSk6TMbW94xJzsED6guQvAoFAF5NnRrBB3CV6sLeVccADftGeh7GJUnnVyTvHsn45MTii2",
  "key29": "5VaymdRfZ25XFrqov1pSr1TdBukNSn1Vxb5yMSj4P1F1fnDEodfQCyUUPdwPgKgp6gJhUgwH3WZfs5P1rjSBcjje",
  "key30": "2pKtvSfcgsyNCXzgfsSqqRLUmk3msr6JVu74JcAoi4DUdupDjPECEWtNCL9p31rLHSh77ke9mx2TyVWxDuvfvacb",
  "key31": "tv7rFtLSeueJnF21prdttgocjYDvUwgm17QrZTXzDmCSBcw79uFMWz3vLZfERwsQpJytoeis3GUP5NCBCuiLVH4",
  "key32": "4bWhTNSXNrU6gk474FuA8twRDyc7eq31S25PssQXgsiibyUidzSMLgwaZaqG8wvVxsUGD4Z8UDs9B5VFinvgBe4k"
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
