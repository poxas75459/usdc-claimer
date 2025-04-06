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
    "2xJjwGheQK1h1pmo22duiiUJQq3zn9q9i6hpBMyRDdBFCQdrkwLy6uNfCm85EQ4kL21bGbPK2GMxfpyERTYkAS5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53f9pjJjD66uzBYPuT55tdKjXgh5FDQbGfo6mp7znXmuVNL5DLb6fa2emXFskScTiQXRaVgvLneUjXpbwYS83S1L",
  "key1": "2V8ZJiUqy5uhT1Pokp73jAAdtZoAYgPDnmDiFBNs9P2Ua5csefjRZevLw8pFvRJvMRatqmgccKoTK2nDKz4MsTDb",
  "key2": "5sZJwBctd2cXhJvdwovCJWKdsCVyjVcucC47DfMzgpWATR9kpo3rVc4aJsFmeHXGUF2UK1u2sTUJDhsHb2TkQBzi",
  "key3": "5dcrZFmFAzRWAFwSHU4Uj43kPF5jn6yHyEQByfLnLYiHdY4HmaTodARs9aWKMykeEjbWkZeNJFTC72NiidGhchgS",
  "key4": "3p7By4k1LPzscFbk5pZxLPs4deFkqys2o77WwGMM4L7V8Meeb7oqaQbo9tB5da6QS9egVFTZtqxX54jGmNs5ym1W",
  "key5": "QEvJtsyne17NNok1XxWfwffE5NjV92Xk1yiSN4kjL8cV7Fnwz2zGWnqUuoCNjzetLyQeVm5bcxDLLtQscM3V9Nx",
  "key6": "3FcwmndrJGGAvRu11L9QFcSExdqZKNtMSQ8ehS7mnekUtsjDUfsoGqh7i6BgLM1Qu5X6WXwG4QrVK3ZQDW4Kkjuz",
  "key7": "29WQLhUbeYEkFcKviWjBHcdUTbZxvjbgBEjcHXYY5RpRJeaH8URhsk1MDfrEKWgTHzopXa3jUUVDALa2uefyzQeL",
  "key8": "2SzZgWVew91HEtRX4Y2ePKTHb4hQfeqg2AijpErf4MpCzF2QAr4uXjAyRtM9QQyYpZ9EuvQjui7gv1gjSxV7w14T",
  "key9": "18f59wvZp3pEas3XJAbK9zqp5sEbYj6xkKsUSWCjFbcsHfb413uK4NY76ke8iCx6v19aE46c4NU79NYDc2ghGXe",
  "key10": "2U8s1Hb6n4tMGK2b66zeCQrx3cBspfxNyTLrabvkABLfmE8J8fvstptdnjTnz3msdkKGqbEH7CWaLKwqpL43BbSG",
  "key11": "3hHEYY55dFm9GtTdB51tiB2v2A6avuG6WxgwhnUcxihhSbsAoEBQdxv1DZQSUqyXaQXtxSpwriPxZTc51tBH3aQC",
  "key12": "oNSeGQ9ergkYzKWDw6jdp3gKhwjtprDLv5vVXZ8LKTrUWi8Exmb2iMM87cCCLcAzVNWuQVUpa7CxTcyRgFn4fVw",
  "key13": "iAsbD7ojpfxUTz2viEpjNSecc3sFKMjk2pvGUnfdcCXJhGDyxooKqi462PydeKqkLGC8TM2Q2YYrLfYp7TPyUcS",
  "key14": "32txwQpxMpMYpVv8N7uA7CuR1GzSQ9dqsGF6kavaAjHA9K5ePons2UGweBRzSr4xXyNAgfEZPtFSSi4gWUKZwr3A",
  "key15": "Mmcg5pNRe5ZgRbJQnfJLU5JZbh1KzTfPy1PPNqHZ2zRdAoYTtb5V9SBgmAysd1sGmgZy3N84jfxGVXNPkSHen8f",
  "key16": "2grVN6XquavYtYuKLXHu4k43pExDB272ThPkEZCUfsXX6zSTjStKAStjNAV7VGtUaKMzBaui65RuXaTSgGReJQPy",
  "key17": "FuZUkj5YJbzhFXJWnA6QMnErCVXFjaVZBcyn5jLc7ynK7LqXQjYKcF2yDM4eZB4tDeKgWhSD2LuATozh4gXSzS4",
  "key18": "2pVREoUfoXnEBu5AsqgWBQycgLv9bJFLb3nJPMR5Jhxx8Ym788yiWH5b5EFGs5zeK1XwDK2YZQUWzroWk5dHksRV",
  "key19": "3mGUJjX4Uun2Udc9ikLqegfKaQgDhzSqxZiv4mzp9WNk8jayCs5QMoMbeRVi737NAeDFwtHGwHU7BZazeY3ivFux",
  "key20": "4khaYA9BzFvXRnQEjJWuSVL3WgohLYz4pmZ7Se74E95JgnsVYeXxkAt2jRggr1QqLjjF6Tk6isEAjck6PEYSNW7R",
  "key21": "3EmDsjZuA78bQUJBNXDQPbLxrTZZ4rMvQYPxJrFpNoNA14JM3QKBXLCagVnC79XZm7qWNSkeuzFgFxUagqmAwZj2",
  "key22": "2JE59DMVwtPsmSz5fJqxP1nYJEPHzJX4DTNoHCemfujVwAia8aBxSfH48cCiKXVgV97Tum13tLivZn9f4Csg8KyB",
  "key23": "2WNzEv9jMKrZ3NJwPXtF4SkXFLEQVQaEe3i2qziV2DU9DumpEwFPBWnxBmojJifQcY7UEsJnzqqz2HB5Ke8mXCvr",
  "key24": "rQgxssM3Mne1Dh81JbyT8ViAuBUbGtmWCz2YcAg1ghos63nfHmppWA49fAHnVyZZrxk9wPTTYgebrB4zC9daRzC",
  "key25": "2WDhPeqTo9b4V7d5Wp2tzKcFE2dg2AdFjYxTFpUDYCnsaLeCg9a7r5GDPMQ4K9KsdDtxaDBi5Ehmj4W623L87Xxg",
  "key26": "AHpgZpY4YmNBeAa9QkdcduaUCbK5Pq9EYv1MufQhKzQRyRsJdF1z96BP8vAiBb5nR9zFbgB1qzmrW8LZQdWbnz9",
  "key27": "5KnysQar9toVWcrmEGX9Q9UTGBFaCiBUyKk4myQtBiAqp5M4gng97CG583PoMbGaxahqvj9qqDEXKWBcyXeeZasZ",
  "key28": "28GbEepCsZp3dMPi52rkBkpEXQSHhP2JAsEkDMq2QHVmUys6TJLWLtLtfU2XVHJ8KZAguzijHhwkmyphBaoFhxJ5",
  "key29": "5iqPycVFjcvREfLwRt9Sp86wEtHzdEGQT3UASZYFgLEGjvFszq8cnA5u8fwsfDZ697zHG9pK2r9grwYmzDVkSPHg",
  "key30": "2P44aFfGh7Q9NsF4CMWNZEgH1pWtBV9jdGT7vcbQ4XVf8WEq84vsBKTEbCsmh7UUC19AFH3CoVuMJp5wMN1MeMsa",
  "key31": "EjtGaChQcfxSJSghzn2msrtSJcfNEj1vJzSHSUbazrcLqwsErN4sgU7466SuBFhbVbruJ3D8A8PypSxu84VywUM",
  "key32": "8iCP4r9G3op8mNP2Cmk9T3mdW6KFp249rrHBCZNu8W3t1kwdkq8Vos77rp3n8J17Vjt3YsoKDPqUB7zF8HSCWCr",
  "key33": "2yiRwXGnC7ZmonTMZx4DnG3853wrQJ62nqF3cGRKcBV6mAdezz13SyghDfi1peRkxQhShbJ6YBeXbkBxrNxfR8oE",
  "key34": "2dNigsWD3dpiSAnxPHhrpjmaNqq15NLcKQyFCH7QKJZ5GEnGqy4JZ94o3a8LAat8vVUKK2Dryzoo2qKQLzDkKe65",
  "key35": "2ykrDYopmyyfmzoXeX1M3pRqBEQs6mt2CT4LsiLqaBjTEYg7GyQ6txqRCxqiWJJ86LRkoGbieUzA3g7G8zMgAW49",
  "key36": "2z9d46oAhXUrVXSEvT6d8XH9Ygk8mKNWG4U37Xmvn9P8z7RsMGPc9B76WaZw1te2h9DNcFFNXFe7Jua4iLNUKJCr",
  "key37": "4Qcf7qUMUBhnz3o7QfQF5hx5hzWiJWKQUNQR5VTtZm43Y5TAk2gYWG2Asev2nUe7br5QtBBeb4ALLCZF9rg2NJfN",
  "key38": "2FLc8vgdEYgBS5viycJyUmMWz7g4n1PAntF3e1ZErR1xW9xCLPW4vHGyZtsFrb2zSWNpnAMXpVFNc5JqoNUhp52E",
  "key39": "2xcVF8au2XT4EzUhWZTX7YkJxHk2FM4wCNLjRCarQwcMApVC44hKoJeM5zk7xZnE8cqvWGro84ZBi1enVNXa3x9B",
  "key40": "2nJs1qLHCu1EF5wjd5DoUfZJe4UgbdiJHHV61gSE13BTvJyT5LKvLbuQdea24BYS1LfpPksgX68iSHi8kD8b97bz",
  "key41": "2sUF5CDzpcP7DLz9FLgRdX9JFeY2nXQRTBKiSDXMiRPKCNRhd2kvW39Kp37uT2X3NZooaPBa8CwMQmRTXcz7kJMo",
  "key42": "33JfHBqDHbqrQf3wQ8X86DuLipHYQB4EioRRZpADL45iaUo2QpFZYhbifezjxDoGAGU2oCew6Dn7wRWd5wASpXsw"
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
