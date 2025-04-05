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
    "eE1DtUybRJn92odxvbZjWBU4UNhsMhGHzkp3Ggwev8LZRyhzEHV3NwvzZRxZwopaxapuyHd79YpZq4RxCTvzuJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwo7VqrLj4H9DgniVFGLxpaSxNDXrhVBStPdzBVCeUTw5W7HAD2X6nkoZwHSdTagQNzqzysV4e7yRL3hhuekbYp",
  "key1": "3uP74xHmhBqfmSMLcbycnoDuhp6384CZNwyumniRb7EMSusxN3G4Kpwxx59zs3V1RBamez4JcHPD9uPzzi2fAnGN",
  "key2": "4hMggUkWuuo8v9x71wNz5fye6kGCFQxBQLcZCXLK1BpZsZxaspJZsBh4GN5BmbTDJnoH6xxoM3rNJ19MFjy9wWYY",
  "key3": "5fVtjjTqAKu9wqneyrBe91roiqeRJn84QJW34ewPQGBX9pGPTPqaEE5atvFiJ1srQ9Vr543Ex2p7fdEYvBrGyC9L",
  "key4": "4U462Skby1oQQKyvDvcGS1qdsNWooifuwCaXQDm6gy74UTit4Hf1vxLWA1wpTF89234up7xWaCEyWZxDoV4fmZtC",
  "key5": "2vL7GXiMB83tJf2sFJSxqZET8EkEtJtRZbzQcVpG1pXYTgU4F9uW3MTd7reCWprMBUUq73XRCm5jk7U1gfd9GwGP",
  "key6": "53onVF66VfWDYvfj3pueL9NE8PSjNpbGebpwLJFajnb6Mrmumgy8e8xxSi3Cn8ECrU19wKRJkRJy5ZJefV35Sy8N",
  "key7": "3y6xUGSs2EQEvneMe6Cfv4UGEV1BBX3T3PioYPKTF9ubjsrUBjqo64Mqjb6wNmjGT5ZpYs42y8xLg8xxWo8zWe3q",
  "key8": "3S4oMXmrQUE6LxY8h9c26JMry7wKtoWE3AuLrJDc5Coo86H5efaLUjbm1UiPJjJxPL6TBFKvEwa2g5iGQtmsEWa9",
  "key9": "3v6eW3tdqidrivfEzm1dP7VAmg4Zu2V8DDSgfr9WYHu8Bu6CZ7zxrCPRnWkQ2woEYknrvy77A9qGZ7GzQcbzvDgz",
  "key10": "4oMar9cyz73ATsBFnJVtyV3wYKHYwJXycFtKKMDP93LjxgyTEuns6FozWMPyVc3qjjXFDsCYtdQQMEWsrXZyj6S3",
  "key11": "4YgQsmMtGR47hVydbo1JjT1gct9VDF94ikKCWGEMSTKyhG7cZ8CGdsEjNWd8TueMqwemABooe5muoKR4wWCn7DAM",
  "key12": "3yTQBXoMjaN2FKLtQXkTPGFygYhac2L7KEa3QJTh1FLvAviTsXY6uUSnZvmDncrtCfmFX888m5eDgKeBWakEYFVv",
  "key13": "29nRz1Qbf428qTbiTb1qtPu8gFwe57bGQHqz8sf1pUzBHASJLGA9TNVCipkcNHFpSNXeu24DvmDbNmzHQj1jZ75p",
  "key14": "48efDXZfjkUcu2GqUpmMXwbhuURcDgfnaThYN3HjVZVPeB3ruMKLkiMd4R1U2Ag4n6GY3sgRVf9hZzYV8EbwJ4FN",
  "key15": "22BAR9eJDpTgTcj2wRsciwZPEPoFMc5QWuMsihEtExXe91Jjv7Gfx11uXV7GcfjHq3vp3Zwk1JaEP5eEQioDuLY3",
  "key16": "3Tuaiv9YNXsTqxonTrctyiekCwZyiQXf5i8PL7Hn4AbVpbHDznn7tbJGjFfSzNVungjWzoXMFkiap8hHe6SaEER2",
  "key17": "5NcedBppLhe7ubdCkt6FteXzeJnjMqUvbGR3gUqMGQg5dp27b9e9mLRve4PBiCJfr5pDCYzJCnDXWXLF8j7xFPan",
  "key18": "3MsaPJj8By2nGGrQM3p2tnGP7YN9zTuMWPnZnKVwuSVA3RnD9xANmWVZDYyMSwavknbc4uqXxMGLYvMZbXPnWocs",
  "key19": "QFAADtnKFxhqQiXWY7DzrCEypmQJGuH2hJEtSeLcQKkfs8rWxrCvPFZSDckM88ZmUaDwXJCU8Xk5CSiTyqRgtr2",
  "key20": "2e11tHG3fwAfiugy71NPMo3WYT7ezkBs3p47rDfjakiuSaFvbDkT2K3RucqEAo6Srj5TUZ1Bvd9c9sp5CPk51un8",
  "key21": "4Gs3LkACud9TE84MvBY6BGzeDAqS9sExroTDQLyS8wLzRW8AL1VZ2Azg7SEKjKmLB5Pd7T17dbtqAHzseUqZ3LoG",
  "key22": "5Rym2eursW71kHoABto4Disv3UBJLTV8emjv236zYfvjtD8KxinHLYuSvgANVEw633SRsNPyVsBc7baBcbufTjgq",
  "key23": "2hq86tvvoVKvFrP99h36c2Br5rEtCTntivFGPeNxXHwN3xyXQ2Ar72ZAH1Fy9HfP85jLq7uoJmCXM5ZmGZ9SR23a",
  "key24": "3sAPUW5tvcy8kYNkkgTz6h7xbjtiHMfHPnPJfAmJAeHAzm61nREXPsXpVUbkPTdfKKNTkGY5CefcXu1Ne4bgWYWY",
  "key25": "ME29kSphrckZzy9Q2c4Ln2UNhUik9uxjP1CV8N3H1e4yVvcTo4rdEcGJPBziaLDTkJx52J94s5FVVWd1idSJrF5",
  "key26": "3bJA2F217h34qhEyLgCSExjwzyQxKemEbad4QojnSXnT9wZALgbn1n4hn5FWRK76PqoJ9STYADLxWg8kyawJjdSN",
  "key27": "4oa9qZUwCdfdPBb8HuJMRwM6vvqPmW9tE48JMh2fDLejairoWSJyZ4JQVj1nr26ihj2JhrqQXBX4K9sueQcGRJCR",
  "key28": "vxT3fJQvALqmS4ukdoBzZW5LRKeSuLs2kCcuFCRXk7dHLviZhdY5QbDTf9CzK7kyaRd7m8SJUhPBkgBzp7fXkAx",
  "key29": "5LuLaqecQ3VsDXS6CLvEeYJb2tTnNXScXMfoLQ33AczPk2Sbnu42KpZimth1pJkr4qQSsyf1TmgPnCyKCe9oazwj",
  "key30": "tHnRN8tGoGDnSfuejKHBdVsNgGPyhSsqsLgXCPMZmXiq9eAfddiNbNvMDwezLU2JPuQ67ijQD5z88FdSRqSawwc",
  "key31": "2Zp39aTYyX6VYAqWrpzvP4it9VreK1HKHJSWatkSvUi9TDU7u6zNRGvnFp4S1vmpNegdUxbqPtx3Cnat5bG1Qd7W",
  "key32": "3VTjsmnPNzdMpFJoQnQHuX1KfGorUvQSoPf2JRAEM6zSSvnN6rpMWEpJ2Cc4rUCiuy6rB1pWo5nYsBd9nwpEqtcF",
  "key33": "3GRsErLnyTNowdw9drN1jvXrEYJfMFtavmL6LDsDcnzP6PPdYdFCyAgRmppU7jdjTgSW8oFEw7yM1w14a1StTuNw",
  "key34": "2tSJqirSKc1Q9rFpNUe77EXUE3wSnVrkt79VkcmHJsjNqxHvF7Wvhgfq7E9kmy7DhhMPSYRNw3e6o6bqEU95ZiTw",
  "key35": "PctdM8B14bXwjnVwuRme7nnJ8m2WSquSVGoGoH2QuhNazWs9kuv3AZk8w7szCDd8a1eh7JNVLLv2e8fFumXWJxi",
  "key36": "2GYgJmcprRejcTxuUkaF6sXx9SXHRpvVuPCAabfTNDS5MJhvp9GoXc51yrZ7tKS7gc2QFrhTEvLSx31rZMyRM12h",
  "key37": "4RLAB2TsebuMcpawHnfrBsiXFidwbTjekgXZYFy8NpEvgsJF43dCNCFiNmHwkZHi6LSk9r3tV1fF1weLPmzhnAAg",
  "key38": "2ECrZyGtz5upSuRAC8SCxGsCTefk6ApTo1C5Nq2sXivKyobqPi8mTvsKsnAY2Ef6oTfTHsRH675SHxnn2xSgip2Z",
  "key39": "3SzjEVKmAAvYMYhEL3AoL35cvTxmbkde7HSxpDknMsem7hY4U8zemhyD5xhuKwr2U7hAD5tqkkHysLA1yPpXZAf1",
  "key40": "3FBH5pBmHgHXghxFBfiHvtaJ2pr1qFeNxQWQfSQj72XPqju5gFQzYtebeoGUnFatatZ66ZhFDuU5SjmsE2Tcvxbf",
  "key41": "zeM2XPtSPqddxbqEPT6ZmFTvPyVgW7EZQGvsuf2AsEEdwEraEUtiLnhLkBNtt7by8Pepmucxj6FjiLeSTvjxr2g",
  "key42": "wJ55qiWkdLXERaN5Fc8rMGPTi3Cits2m3HjPjbsoMpajPTic71LwSfuNReLv31RSEvLHvQR8fGLw3V8o6HsMb82",
  "key43": "SYBhXgvWRNYEUyoqWQm7Ck4QtAQVDLKmdwxqBzkZR9VZpd1514WA2MnGChYydPw8orR3kXsmb4APB1pdxaRoXyB",
  "key44": "5J8cDCjLCvFfjtVj7gsVtVFSbAEeNZ5MvDJCaRe1F5NYycW2Dkikh5PiRBcvwYEYwbvBXqeftLg8GXRVfo8hx8rF",
  "key45": "TaVfuyNEXuF1K3cHow7oH6bxoRNtrQF6ZTsuYuwQ5CqogTYex9pKxhJBABaed7WHKTATvEBBXDB3TmASfXYRtJ7",
  "key46": "4RkeGStxyKRJHymHCkUqixMtVfELAUaB3bLsjrct5ecJ76Kp37UqJmQXXEhMaRPzAofyUJtksVngEgCXQYRCcCuB",
  "key47": "5FVhfYsjLa7kHzdSqrTwgFLigEAcaxpMpWtv7SZnWWeoHRGurGLCv24EAWfC5cxbdrRK6CDr5tUinT9hdpPymcmU",
  "key48": "3UoN4UnA1U1meAdVoDuvtkLm8xbHsvSJ39zYzpjpgQrD9tuykC2a1pqYgMibVhLvvPCg3J4xAjbdC7PGCxybSUYA"
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
