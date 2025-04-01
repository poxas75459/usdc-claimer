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
    "4Ui1aUzJXb1824cR1RJtmALff6gJmQmexUWk7TmuBTnVbvT5UZM41guYfHjKDHC4TTH1mA3x97f5RYTfGYdufng9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cQwRjUXVcgPVTN8zpTYvji6PkzoKvTUYHZZUoehroHzJpg9f52JA1uga7b4Su1WjGpFM7wTeao47aLecvR3m894",
  "key1": "LVrkKH2zPuaGQ5znAzDdHnWW8JjRersNibe9AV3BEJaqKVhZVcZnAENoPbmWHfY58B5aGf2NRMCqiM5M46ejKqC",
  "key2": "2wA6tjekdQCEg7dVjSWH1df3fCaTSUJpEXkTnANQ7xaBv58VYxCdSxKmdKySYtMKvTScFimzVt4RaDXEs5SPPDg1",
  "key3": "3nCvUafsMv5DihCekLZnH746x64F6cVWg55YeefrU9dfEDqr1f5N9ca6yJmKpURh66A9n1SwbvbHfJhkjUdsejDw",
  "key4": "3NYhD9CQviWLa3vjEQwrxK5UxkeYC9aKqZ5WTJiFHEThTUs27hxvKnkuT6i3ro3mErVEtyqTF1SeX7YbSyfMM9Dg",
  "key5": "2W5ijTYsa47bdDGG9LMXU8xxPGZdpfs9psmocG56Z5yph5XHN6inmUL5frePrQsDsJK2dE4PjRtiXVyChFPfziW3",
  "key6": "4JCno76TZsCLof17XWg2HsBn8zWKBm7yu8VPNY9u4ER2DMG7rrskBmapRb43STJ1GxSKbpcEdrfGKAvzWwuxu1sR",
  "key7": "DGuuFYAUjN9Bh545Bd5taDJSCmx9LRFDMiw7ZNJ6bDdvLoBNwhhihPnYhNJJSz3qcgsszyuAw3mcGSNHNTW1bsp",
  "key8": "wNnLXK4SXr4NfnqbtrRNZXHMN6TFWAwsYart5oSWEfpm3rC6y8UeKZfuU94MbVUpr7gGpUXoGPNnwJChVo91TEn",
  "key9": "kiYWtBCSySBsDBKQ5WJ8uZpVD79APgJmW1LbuLVs288uvZazhWFnXaLTKNjVuDGrMBdE8TfUy2zFDBrH1rVHnnb",
  "key10": "55FXXunk765wxjqzMRbWUBZfpz2u8djZGqdNLuBfwJ1jwGR8ZzhhGDGb77hBm8SVqXMznH4oxhEAmbw18vjaxLEo",
  "key11": "4oRDe5biYvzyFDw2KEihzPCHCah5e4WKWpyHKK1WsnnQNzrtetxRuFPkCwVsJASxNUBnxhPJq94cDR6fSg8JcuHz",
  "key12": "BP3opwyT2x2abVbEmcCYvoUoAQbveVSzQ6KcrosBJzQsgVXEdRENs4CBv8qTCTLp2c3a2wCDhJEqcQJm8kECMuQ",
  "key13": "4WdNHxEAwUjWzWzYnUEdPQTtQJWB83YGyjBGTkFbwWRFDjbWvRDKCQJV5VYdGRXFWXhSG4XVfYUBQS7cF1bbXsuL",
  "key14": "3ssNNDAPM9J8YHowQQohAXSm7z6dHojbbaGRxAZnYsYyawijt68YVSqWrpcKrM2Zci6EmGeH52KGYePjeQSA6YG6",
  "key15": "3LXzqCq78S35g6Veecg8aF9znFKAPA2QWYNNV88WKvgqiR6wicR2UXG3yZfkRdtMSRoGxSVU1kczjGHCMtGFXy31",
  "key16": "5Qrx4ciMfUSXgatchePmQVVsdfBJYGvcwCAYmfQDn6RnxW33DfAUw1p89JLtFBcFs8NeFsNagAtXGcLPqFibMFZf",
  "key17": "3gHH76oA1Nu4Tb4zcGAqXoLgAmgq7hQWpVArfVmcGG4hSUGDhquh9yKJEFyZstHot35JDhRqsJDfJY8MzV4Upu1D",
  "key18": "3txzsnD7RPx4Ea3G96nTWkPx5TyeHMFPVsoq62fEfGxHXJk2TZzVrGoY2EKXNZ2H8H9Y83phm7YxhZskLg9fFd9q",
  "key19": "2EJUyFriZTi1i4b9nWFHWx2mY5mdaVp9Q5fyYDJ8buNtiLSEGDD1ow56rVE9WyL5LzXVFxKuPhiaaxL7jziCmTcA",
  "key20": "4cEDDjcKqrEP8reL8kzBsPZ1dUd3qYsLmXa5u5Ge51Cd4NQ7PKCKzu4LAbXZvASdGjhTuEmGcF8Z4cmirRLShkzB",
  "key21": "65bu9JC6ud3fEnzWSVroMVvxkv4Mfmwapp5QcEckt2RTZitc1cq4JgcpkvrVJBmkyubXAt4MBqwBePpTn7uoompx",
  "key22": "3hp3wBax3SZNUvR6t3xkUFX3iPces5iUGKG7d47PXyxdkeXiPDzZNnvPCoJM3j8KoDiyFzUyKu6atm1xCfvEyNed",
  "key23": "2TnXCdXetuQxCQtm8YeEQCdLA6Lco47yPR16cB2Z8hWD1X8h7eGxU6DphDo3rUy2MKEA2AqLSS8NVFQnavjbveFa",
  "key24": "sJ59iQ5PW7mYaiLPYxPCWeLGspTrGGNQa5j8qDUp7RdLDT7H29VaVRiKX7QHmKvYinR9VgUexbjKtYDyC198FH3",
  "key25": "3JxjfZciLgURHs8LQricPFxW2ueS2Zyn1bqajDA9wwHPVB4SbamF8ycoRmDHTRpX2bYpm8jbGu8DPJYbsxAytSSh",
  "key26": "3xYF76xbsDhm6Q74jDrCNuwFMVNnY7vQE5ztRzELqRVVVVoHuVfWW2nNmcyD8dSUXizsNKuK6eScRWHx7jCssUf2",
  "key27": "3oB1Bzj6WAxzsd1P3wXQvPasri78GNW9ncCxAr9eH1AEbd5TKiurNVj82Er1n1hN9Tkyg6bLQ99S4shSaSSKTnxQ",
  "key28": "4NNBmaQRfrtHrXrdFPxH86jRhYcVvSUeHMGTpPVxPzX6qVQTrFzuk1QVE17nTGkwwxQSnMmdrfN4YUt8d7U5Qr5R",
  "key29": "4FLATiybA3FZPJoqT2nZdk16pbKmHsqExZiV3k6sYsU3p1iWdF4fm7JRcwJAb3KwpS7wAhURxXPkEyfuoKQXGSxY",
  "key30": "3z8SUFGXxRDmNYMEnN6pMTKKuZqpfByV8iuSXLzAZwYZRqX1hC8CqbkqYvFnQxdKM8bZ5gGvUhSBmLun8oDipiuo",
  "key31": "3zrLfPX98NPZdNdihTs57bkAbPoNUeRJap7Tvft7ECTY4LKjC2kgc599duGdDs93qy6BuqiExHav49jEkAMvKAmP",
  "key32": "4gftKquUFuYf1oCwetS9Ejvk9tVE8tWeXN616GWcz6gXN4kji1cCp671pqpwd25xiA8xHeHXE3TtPTZT4dek2V9V",
  "key33": "4nWwuHeJ1qMgQB6V6UFNdwcBqWjAmYvpTHBbPrYzBhhqCXVnNtFdfFP1ZuPcd8VSBjTtjGXjMQF3ZvvSCYXyLDxB",
  "key34": "2t942ahsVdJARNX32TujodbTisRe1DmTGzFgew8EVXMSjvt7UAphjW2zVWcyHRb678P8Q88cvEyYPXXFcmmeqxWe",
  "key35": "3SyEYwq21DJgDdGoPfQACBYqsviWkhSgzHZsKH8wcphRk39zMBzn1idi6F7B1GAvT8XdJ2pcM5wB8p4ejLPtAKsG",
  "key36": "2Koir3z2APQ8MtdZYg26kSaNeg7CRuqr7ostCb37rk7EuYkGjnZBG8MK2cmxjvAPqzZqxKkUrEJrStJd6eARDH2R"
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
