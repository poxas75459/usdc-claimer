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
    "5xMKRsmCjMERE2LUg577xvaduTPBmXu5ZmbYuffJdUMCJfhT4m3fZqdheosNt1mGbgXVNqWehpxfvuk6kSnMapyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dUAUiHFk25LYGJXEGThME2Ve5H3n4o4hRkWt8Kh7sLgnBzKJsv548x82hWkFLWJTTthpCmEj1PRNhDnzvU4xo6F",
  "key1": "2wFhUCq3RJdZ7hW4UPt1ktn4puNmm2a96iLHvkmJQqVx9gcUMAAJzdSDUUJGoCiEF2MC1yhHS5UydXHb9QVRLpuJ",
  "key2": "3XBKzhupdjnuwX7vZZNK6zbYNQ92QA7Wk9vLVxH2mU15vzqxCXiFiK7Fa64AgR6KaiWj2xvZQvETcu4MM5XvpNqW",
  "key3": "umhYYgBexFxmFZeeAY8f88pZRvYVxZDbkCkDpG9cWJh5wjVKkTdzFYzH2TRvrTFzMTwJgTcfujqDNMftDXFC71i",
  "key4": "2zUpaDzLH4JyrdxQZXCNrDVwBXZPf4j3oVjUcD6SrHgBEwM3Xx6DQbTRT3vgEMvnjjnYzA5ma4bEnzUe9tEusuky",
  "key5": "3kXjpPJADabLz3SYrSDBumyX2kBGVfyJRrgsvTioE9yHiqouRJ4dSa8ecvqsfsPxfw65izwGapaz18pTBHGhf7qn",
  "key6": "5Dw6rJV52fJPfy86AYhamTXWHcGkL2BvjL1UXvruABy3nZDy24MaqisY96RSrkdU9cHGYaBJ4jywCBbdWLJNUXQ7",
  "key7": "1tqdRcj7qwgGy61kjc4mwuuZMo42TEmkC15t3PVHpescEiV9FqoZYHPHLxBhvmD3ZFhjQurKZxLZ5DJCwwLynub",
  "key8": "e38MUXHMv7aNStsds1mGi76hUjyQGEJTxvsjTmzvKHdZnEJkhSjRFT1w9qZrgCyU4x7XTEGq3yUsmK4L2WcoAhq",
  "key9": "2KkLtKndhpnZTGDQ6VKFEmqKCDkVL2zGEPMPDR5REeaToLGBSyjzysPAw6UebWGNTHVas7TjSwkVgYyDWyDoqK5t",
  "key10": "5yzq89diLXtYsdL6Vqhm99zt3CnNZwHz4eyuA36VEB6ai7QMidBwgRfu2Hkhbqw7Yt9W1ZQfrdW8H7pevn5Zg25D",
  "key11": "5PZaJbGRj3axBPzk5td4KYxgxyeF3uJ6dD2Bc74Q8FZSpj1U9dqdZHz1NF72RoR8FfDsPUu9EU4ZgLx7fpv6eCE4",
  "key12": "3Swk9txcnhxb71n5Vh3kosK3Bb8s2jMgxswqQpGHXNoCdJvXGRhuzfCMk4bpcNeycURc2kPboLbetpj4iVvoRtsT",
  "key13": "4LJD1LTNgNgM2gLJyBRBRV8vvMKPHxkSQnEG5NQEkTzsdE7osLkvADRpGk3s7bt277rSoG7PouBPgvuCqFF4aAko",
  "key14": "3Yrae1QHhkC7r7YAJgBT7htfotPuyPiSKZzbS2YR5rb1a5wrKs77oub1i5yPKX2TqMTpN13Xbg8MLZa2tM5T4Tdq",
  "key15": "2ozW7Q1AwJELLYdoxowzyhMxcdiqciiadS6jootw2Ka6rCG843JkS45AD7riGYY1WYPJHY5dBjxZvZ3L7TAvF1D9",
  "key16": "h4rqWU6JAKSTtcPk6csS6Q91Sp3F1yf9yVs7WmzMKq3utBstrTTk8WLv9NqwELaYcyLdhrB1rfzyXqSo19jYGq7",
  "key17": "tnd6LHkJEjUHov9emHp9EfY2WRE2Jg4qDaVhWTi92a9853jU3R5uRXzLFc2ofJ1RDM8QQMVJEoHqtDzpckyq8jP",
  "key18": "78ounsQ4aUSj8Lcd3dvhTxyVkUj7Rp4QMzdE2x1z9RE4GnruHCyjA4uuzURDwazoShsWiwDa8hHeLymk8vqgAVH",
  "key19": "BXU2enABRpUmxpeDF3ckG1eUaRiRMLpT8TgR4MdBZawBeBwoHQMA4CCeN2FSMemvvZbKouGLb9pYWtL7VnTq6Fn",
  "key20": "hkjgDcQ6tmncAcywY36eescXG9e4E6rxn5T3ohvLCiq72jxoKxZC4nSSKNnrxTzPqCsiDxNDCdq7znA7BoEpKPP",
  "key21": "2dxyr6vjEnNCEKjNvZxXWhEDufkFd2sWuddFYhjcAYmkqv6hv8NcVzcGGvzwaUYa84hd8uuqK2JxXEMqGoqePQsA",
  "key22": "3cLhhQQdLjURPipdEZGox3QbJLfGHS66ANtoCgKb8KDNtCGe9fdEZ1HYk664rQkvJjQV7cBnWMHGFNBYMFt82HPv",
  "key23": "5sauMW8DS8pNsCuKTsJS9ZW7mTbffHr1RJ88Fhjdk8S3kRPmut89ZaANtddmbjbuZSrtudr5wpHHQvZTkXhFgdPn",
  "key24": "4LgYHiDdtv7vcNRi1zZShT7XXPBBLjKDTUyVXzKAgQg64rSPrwSrEs8GDD8w9qnGG61kVjRna2gLDwYX1N2ci2oz",
  "key25": "2ucs53pnij7jKL9B6CD2PJMVNhvmU23AoRhGJWTJBJv6wuXUTwwiiffPhk2pqUKXJuiRXUCG6JAHERQAWCXAZMSp",
  "key26": "5b8pFKh1BpQSdaiDEHotWPaUmpbE58PtXk3QCbBGsqYVGBcMqSjghDeFKVWmbAgQuYKTr4S1MmjrAibGHhZobJDe",
  "key27": "2Pq8u1fWMsBnVnNJMd268dwy65RXuW3aQ8CRQMpbtGVHeFVkbogg1zDU4qsTGC5AmZZ2Tqor1Rrhk2Egy3Vr2YJd",
  "key28": "4g5NXNoZwBtXNGDo2BNcKZhALHtPBNtSZfi8SmUPAmUvSzBpYL8S8niGxNTEcG2n8vJiFSp7LkKNJKBvRg7tertq",
  "key29": "2KzKysZ35KbHLPJN82CDpumApTmHALpaExvTA8inQPTqoZrQcvDP18UunKKRE8BDeq7XNcQeufDd8xRfQ159M6iw",
  "key30": "kSSbQjJqNQPGDLKbZVWCVog1971ShTEPjAUTaXQkqAEBhLSk1Hp6dTy1L1zAB94jAr3SVzQXJo8FPx9KyW69tEF",
  "key31": "34wymiWuxSdzaaqFEnPcSk9oDRQR2bFmMPWnnJdEnG8sDxE3AZ9DbKRoXiRw9MocQAAqcMXEbjX1inab9FQc54qC"
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
