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
    "43i53SyMLWRuaxCxMM16tYpGSHenUMiNTu2RzJAzwnLWtpDEde36oCxF2EYx5a3VDmUcGtqPC1jcbqRDgpqn4CEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27fmba68RA6kz5TzmnxJJpeK7iuy7iCYEnGSyU7M9xTisPdFDt74ZkdW6agx9wWD3S8dkqQt2aADUAp9M66tqeSA",
  "key1": "3NPh1135tLKWC2xAkhwLuKtSux5WfSeFa65pCLgVirfqriNvn47GrwSp22gPBmQt66abUNL2ibSqEyuYieccsJZU",
  "key2": "3qJyzfzEEyAaVymL3zvQoMMkQbEwMrUS8HNHE2DPaiCeKWfcpT9WNmMuy9hLDzc5Xx8C8HsuvhNdxaRrRjjtqRya",
  "key3": "5LafNQN1PYHWpVBDL9gwvCVtkmirr8LbgRRQTFMBuA5Mw4CYdWr3PpgUxMDjBpCvcJGnQbrLCGD7arHpTNGPndHC",
  "key4": "63nLNvtQCHtQpAGUKpY4pzwktZcstX8TgSafSUCvTNWtv2EYuk2oV2oE3Qz6GK9BzLkjjAnG5RVnd7GD9Hjm663A",
  "key5": "p7pN71ZtxE8gsQ2VrUawsm55VcxWeoXC9SWXhQJzpg6vji7FpkBugSu9KtqJBCAukh3QMyfNY3JMf1hGN5AK1qJ",
  "key6": "5aEqsda3q9fyf2S4ivRsYtcB1a978ckpcSZBFjrAx8yQRMBjN9E44ihaAkSotYMCBddPtEri6y113qZ2xBHYN9ph",
  "key7": "5SvySHxyQdwAgygNwvsuvcqvTLpVHFGwyg7S6TdZEmtQeSt6bn41nkjTqq64AFtFKuhhdSx3DrFd92wxd2hQUjFe",
  "key8": "2f2gJKkwqaStebgCLPQh7ifcc7WDCHQaYF5RJL7zPaTnHwCiFBzuRojD9czsiyHxnxb94QWMRoBNHoYcKfrtSjSV",
  "key9": "3ZBHZJPtZppBB8ht9n3NfLpkBhWy74XCxEURbPPdjPUv4bTU2Gc2qnmR3xyMY7nXmuH2fGMysAdGxjgYEAz9bNSp",
  "key10": "3i1RNwm6dMKu89EPmTRZyMDuzNUnn7yEEj3YVXG9iBoHCqFwPvEupKjUCJzZPWF5fTJ3jieG7rYidQGbss6Lf4eM",
  "key11": "38jtYZXTKKVB3Qbwd1HxPqzX6qJXW95pcVjAGCn5gYg84tvZKi35CMTHbsey8NQHDfgz31dTr6uUVuUzwG3meE8i",
  "key12": "3abNq5FPPcjtLLdAagevbEQZvYyiAiZSCgx8x7kvDyowz8D8mJ59Z8TDEJgjhVxLzo2tFhbi6vrySSBLe7fPjVUx",
  "key13": "2GoQvETF56ce59T2SJHY7Hvge9Lf6NTxnycRDMRrBke3YeXDkhvsafYb5ApJv8eN6X6KBHAPfofzukzEPQ5QPBK",
  "key14": "2PRo1iLyFRcAb8BHWDbYA16jirgzbAEA9BhRdp4uL6SHpmp1NxzAz8nPeM29Rt9JypmyfUiBVpzLqxS1MLT9Udvv",
  "key15": "24ZGhSqw5CtheanHKwohSVoTLh76DTQJ9g3mtW86pXEM2YpR1p4DVNXNKCATFnQTKwY18AbtpXshSqmokpiYM1pK",
  "key16": "2MfHqfqWWy93yAr9Jzj41X8kETT341zuQ3u6kmHKVaUxRVB1mnDozzCAZGaKLZJngvxiy1fC3Xr3EmxVnUeYzrvv",
  "key17": "UUcswnRCrCfcNh5PMA92sZZPb5sB4W5vUYpMrm9xA5dcktEmzqLhUVMwS9jPnTgr5shm6Zn6g31yXqJyfq3sf4d",
  "key18": "5yN52LtKK3J274g2axDmxiquadE6q38uMcW9gLsMmr6YPnpQJspQbfcppVbe5FJfzih148bNVZizvRXaJxSjvnAD",
  "key19": "5QYe8jrmAPdG3o4LQW2k42NPHKfGVXPchR1YeT9BVCHB3EiR9uqvoSJ3YkHNHG4osSonGMg1RCeioe9K2o4dF5ds",
  "key20": "2ZhGcYLZzsPbnUcMdVX9PrNCiUiGCXr5paQgGLBR1YHSntmjyZbA3xkpzEy1CY2eRkSWCdSrtyjkfsaW9Nfr1xpG",
  "key21": "4bDdTTiALtLpJvWjwdNxAUnXp5tCiSfj7CPfwVk4cNt86o2SzHDh6MtsVTkJoj2vJsfqyqmUDkw6aJ6N6aDi65pw",
  "key22": "tToymCagJtfn3z9D6YTSnsVaNZZkyL1caXG6KrbdPSb2cDbn3JrTeNxkfiaSaixA6YpXJ8CrdLPb5HqLitrwcn6",
  "key23": "3yGA9C2TPvsmRCwzCZnTZVcrXXs4Ydiwhf5xiegunGu5MmaBH3KjEsFZTvKv9XZE7k5vXffiEoJQDZeEPy3NixXs",
  "key24": "Q8Tx6W4bN5oCwnaWoToQL2HxTGiCtMq24Ep7iEAHF2UjSE3fyWrgovoVAtvsMhiAFDiMqtVqsnFzKeGQ8DnybcY",
  "key25": "2naqQgBg2udkbsLj1Amv5kYUPWPFQWTYbAz8YA1ua1Sopppgzorn1QuYULwQ68jnnvFrFpmdZotzPjUFYTFLu79X",
  "key26": "eFat8qSMjA5wzKDDSA8wqYPd7vgk6cHKdE1TTYjnDLH9zuCMny9mkKjPr3vXM2fELyqB9bTAMoN1hwPPSYPHrnw",
  "key27": "5LFZFSNpJtx3DWJkq1FDtP4JLRJtvhZuuPKeW7z6M63E8WPN3r789tPauxoasde4iJJ36pLvkHWuWopUy34SpgjU",
  "key28": "2ysZ7UTy6ZqvxWMY2PNWxR6b2jBB9xXAauVGmqdJwy77V7Yg6P2sUgSACbqK1ZtAJmNxUwgVMa6hCmLUY1ztEnby",
  "key29": "4Tr2ZVcTZBEXLoPoJeNgV8NKx48oAcUDfoiPaXctEQhU7gvvHM5gCLg5Hn7YjmJxRaYEGe9sPttRALh1wmqiuLrz",
  "key30": "5azshb7AJui5gvZ9uoZ3xax3TeKyP4b4PfPRjjYk5Cc31NprFEszFzXEe1GEbcbFJ39iMStT1Xs21jvzwHXNgX82",
  "key31": "5LZcds5LWXhqDWSu7X7FSmB7z5C2sPJSJJ8qbGrfXcQxeuGCihmgpnR1ZEsWtcSy92jub7JtMge6UzrhUNHM6BbF",
  "key32": "5JAKghZG5D4PuNA3PfjA7eoEa5N6AW2FcnMZQnyorc1V7qvEkuhZskMYA4sw17i6Cp4LAe42nNmzaKT37zZHWa5q",
  "key33": "3U2VfjuS6nfKRg8H3gFGF9LPWusa21QaiYPxxSN8VY7Wr6Jo1hgcRr8jrfvU2GRofLmc8FtXxRfDrjMyt1BUGXBH",
  "key34": "3qYwqfxJvnq8ax4WfHykrKCokd54yM8sFYY9jvhGPpFoFSYQ6LgzUiFGjrgBmYXZn4NVenpfN5xxKNDwyQWqfWCZ",
  "key35": "S5pXiJyXQhA913i464sGpz7bGaM3rMsrsxJhoFrPe3LfrniNpYjxZE6s5yx58AwHsh1iqxhsarE2w8sTVhSP5SY"
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
