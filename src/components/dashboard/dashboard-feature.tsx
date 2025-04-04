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
    "on6WAg6L8uLGrr7tWJBj42EDFgidTwVfXDyEfkwvLKZ3raELnE7kzGi3e6LpSmUjLgNWo9SLAR3qxdHhHBYbLU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QFQq5EqWnJPP3gaF1FmWUdw5sBEZrPaeaVZ31PZwKeKUJ1rLhrK7ah7ERP4bsPRpboLPritkwUet19MZ3NquQkW",
  "key1": "rHABu2ZZszaeiCTMpdVA4kCv9CS9QthfYf3xe5XFuz5yH8AfPWKiu2LTo9SJhUgXL4wkxsbW4SFh1Zqvtv9XPfm",
  "key2": "wsknXNwZmHx958iAvZHW1NCrqXwwTJYhy8jmaruHuTF5ewchMWFkwkt5mbcC8jHCxJATT44LaH5FAoY1nUoSsfC",
  "key3": "3E78VWDqx5dDqGc6YULXcw4jnCnt6zibTHMfnD9fgdzRuqXY3Yf3QjFwc3VwWJnwkW9uo3SfvVfiddrUmUnRKdTC",
  "key4": "4h7KgJuv6RQ7LsSypYQZ1mUa33rD2qAfAdEGxcirFS8KxbFifcucdWnefACYUZNoVACfLT3MxhKA1tf739cFB9Z6",
  "key5": "4rNW4kfAgX5pcdLqGm24dtweAQrf9FZLUQNof1N9c2AVdXm9nUHuTMAEjCrAwxTPWd54hibj5Nu1GXfDSBoTf3fE",
  "key6": "2xaDw2yfi7zDcPYntT4wP5x18saQEx7FiiUzrzCqvRmrpfxZrme6yi1C5yGpY31weTUcdZLw5tjxtiEQHo655P9q",
  "key7": "3CjNPhuZuemp1jEBj9cr895Fk7wgVB1y5eu8XT9tzBZMW9m9XK9Sx5iwhYvxNhUkue7d9x2aRswCiR1r3ej2EUaA",
  "key8": "PVYfKjCahqTFc1JV7r6CEL5BAQkNVFT4nEVqtTqY8gcij7F3568bCh8EBoqKrjMreToNGYqhkcjpmNJzQvmzUCE",
  "key9": "Z6pSjYKwgE3HPFcF8hJRZcbpw1h3myez4gRuvj1fhF8k6tASTe1krdEbz8KaFP5xNT9RSTVYKVAKyqLv9mnyupD",
  "key10": "56WGZiH4X6aPEmWru3kP3UmouFmws8xAwRJor6Ub7Rzp8b3xwjsA29xjmFs93YTpURhNFMxe27DQ2pFj3v6cobQ8",
  "key11": "tfjNF51GBdPRNZAFJFFGnPaFY5nw2LAvFTSFkGv9g1yzTDmYNKJjZQy2iSXHz2YNQrKhWnFmV9XA5LtJkcv5i7y",
  "key12": "5nG8dPVgVmB2uUdxcB1fPzSirTYVheK45TaYdrBfDyDVVUxT4E9Pe7B6r1UftiZPmQxtqa9DA5Q6wJsYfp6n8jdq",
  "key13": "38G8N5Wq3pKKkLNjqNhaiwc4HqeVdZzq5WawRDeaW4YvcgDnwk6TCa5Pfu2651vGdefdoe5774AP7S7oyx29Nkg5",
  "key14": "2AB6mQC7SuXyRzC8eJTyoVgZQBMnwL4YtxPr3tJQPjdhbAXKSNyHqmDpsuAe3PhLSqBvZwJFwrWTpVfyrpidxC8V",
  "key15": "5fB44Vtxtwne7vJCRghbPHdtQZrobZixTij9BhZH22jqndMasjvy3bnHd9EQhZHZo3vf2obYZ6KxEnNKf2TsYzfr",
  "key16": "Y9iemkCxnVgWgze7ba2M8azJtBe4p7fHxm78u3mQ9bn8KTTJbbS2N96k34yuBdkze4bNNyhMeZ2vmMXgKLjLfkB",
  "key17": "2je6Szaza9z3BB76WyTwZ8HoqKWf5TAVJCXxFW4ECRPxmQqNahht2AnM7aB5kmdEuM8vA2mcZaN1zpXEaZhXZpaA",
  "key18": "5nLcbosjPm82f8Wfv6yHTtKuVyQ1bBT42ieChbDjyaAc4SAjVtpMRfMnQpKcSFj1JY9YnYWQuwJiTpb5nHJozEce",
  "key19": "48ToyLrYDLiCDXykJibXAUZoRbNufmY7LaqaAsZQbYToHwQbUL23SuPEus4VfV4Jct3A3kkr1MQLhst5UgmXNJRC",
  "key20": "5s1udHQtXNocFhUjGCPvwagesipHAyZpXCUbggbLQN7VMLu1XbQb84B84Tw4PBYcHSZnA5iQnHTDyfepD3j2bZH4",
  "key21": "3JnJYvGxpnJDUr436scrNHpEQZMD3tQLAz1FpwFFUNVesAMNEdscGrvo1qEEApruhLvQFwFs4jRxVWdCwChChCuc",
  "key22": "25bk72fLSfStAZLMFB8npx6FAVUirzwUzoE9cuyvtQhcw9gVZf9gwVJwy5SbDTUhuw9NkyPYhDzCgJuXicfTCE7S",
  "key23": "3EGPPd9R3aSHRpDRUtdX8kz2pP2Nhs4Uaog8nbTD6TjuhL1unKqqPUSHHLC7zuR4LbtZYr57WQXbW9aqUfmMWhNd",
  "key24": "5Gq1CdkYQL9ddyLmWHs3pwHrXXajvit4VRV3tN6nid4G1F1yoNtT4FcYCrKmP5oAr7P1vtsHKwBFiobDNnywh8RF",
  "key25": "2qgiWEAQVsXMLyrfRZXUBpY6iwGLEqh1Vr2UxKk6RZN9rkvGoSsaqPGYjykGfBF1fmBPjEmLZhRb3jhmkhNPcLVr",
  "key26": "2CpCipqt5NaLwDYHW7phxRtDhwCv55TQHczZ9tKhmZFN3hcdNuGEdAnZL6rgwvoxFRtYXocfjFHzoqsz2YEuvPzJ",
  "key27": "4wN3RjD8Dx9fBcSVZPswXXqRYmTbMhhwTMzTU5CqBZDQjHYFQFiZCumnLrfuAfZoPnBSVVSBisDGs9vxKb7KGgtF",
  "key28": "4sBuLrFfsvJM4YUMwsQ5qmCG1x5CVp8DHQ7Co3q71PB3KaQ7o5CMYiTEk1TP43uq78MGetWDjKVUs4ohcNnQPgsf",
  "key29": "539U9xS19zGZvuG6fmx1VHy1BjZRmwkU4BKTeQu6cyb9KDjReWZLy3nhZ8yxzTmmTDrzoQNtMAieFDv8tqc7jYZ6",
  "key30": "473Jk5keYo6Be3DNzSXHks6R1x9bs4nSmn34fyzDhTuLwAdEKHfqcjtKCgLYxj1z84yBRtMMWQGwLjkURKgiseEC",
  "key31": "AQtMga3WzxoZAWt8YjApbY3grP41UvwouU38U5uGkEZpzMw4u8f7WgNnnK6tZhagyvnorqmcyXYqdBhxkaz8aQ2",
  "key32": "3knGQ9Kn9YCY4kNXDu1FRgKz4iecJGYuuJ3YDpfF9QqKehp8ReG39TZj1zmMTmRKL4BhuTrxFpirurhqE3F1awzJ"
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
