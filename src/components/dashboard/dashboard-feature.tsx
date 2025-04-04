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
    "3wKMakwJ7HBhYWhAEfHtWX1K1KVL5rf5AYiR6fAq2Pty195Aqt2artpKX7FaMomdhLTxSagEHTorNKV5dE5Ewwjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qJGGXirHbhSbQ5GS8p6ActST6sZaCggNgKSfDzrm5W6d2db16oYhnfNSPFJiZ6EFM5PUPKNpwWDZBdxoRGN56FH",
  "key1": "5GEfMbXzVoDqURYxsuojJRDtFv6NYMSr68jxSVRFDQYq1ghRS5hWVaCCU4eqe1QqwqasytfqTTqAtLWEyfXMKZd3",
  "key2": "jnNh8pkmYTib18xtochBMSXBwcs7PcnQnSxzVt2nCEaXfDncwLzxNS47wxe3ce5b4VQswUhSTpKwBofYqgXpJdi",
  "key3": "228QFT4JW4fno25yuXt6G4BpaHsPbuow8u7N5njdQnzPPcg61edoVZU1bPJ6QXrCCHP8CeQ9VW8hJ1dP2QWdNM1M",
  "key4": "ZnA3Wfn8v762ppBCQdqndQx4zzoTzCyJCNuhDtNb3hz2xdnByBJ1v4muH46CaDEgvEm1Sr58YVhwsC6uVnNNVUD",
  "key5": "548JakYe5oUHiXgBWNVsQbCPrMKZyXYfCaktFVA51VqsUQKCRyX1bK55MtEATwV4bg9ZPPEeEtxMH8Dt3G7zvD2c",
  "key6": "2wd7Qupq7XVDU5s6cgGwqcFsYZ2hcJqaBzbD9Aiw2qxd6u3LDAFUNeiSQNzjpAMeB7VoWscxrmwsQ7kNUa5A83J4",
  "key7": "r5mE8Ge1ueGhyaaecVaGocT1w9oPwA5ZtgiTMMxyGVYP7M8uqm1p7n5PwM6QdutBLPF8paNa9UYHkBqTS1D5HM8",
  "key8": "frq2Uecx5BZStj4nU7xkFoUf8exj8TST9MTBzqWVvoXnaeWEEn7tNXastdJsN2tMHwg95jyZiwb45514szGaasL",
  "key9": "4kixreuyfY5G3c795dTofaopDFMnuqmWTxKF9JYxM8wqhtJeReDUyZoQ1pXkkPD9iimS9J5tXEcPU4uCv5gnkc8K",
  "key10": "XWksy97PL1Rr4vMkDBCLViFnVNBCWb5WeLv1iv4BPkDf6CSFEzCMhJVEYsTWPwcpqQkhhkzv9STXrBD1rhsr3bF",
  "key11": "5S2R9SDFyHFyoJjz5eNyFNcCeo1Bx6NLRDMm2FDxbyxADV7uVnpAye61prnc9P7A5J7ys9NGEEhFg31nyMRyDp5d",
  "key12": "3rah6DaU4kke4CF4sVeYKsvff7Hto91dSUb7YbuC3kKhoe3jNnJ9Qwg4R4TkwuPWRfZMHddiaCCeHXx7pDezsyxF",
  "key13": "2uxkZoEvW8akKeTRU73TSByZYD4W1UNeADCmXPSWWJcqHK9ZrqyBbeMzMwtztfRJCgKeMe77TTpRn5VodChmiLp1",
  "key14": "sVYCF5RnUQGPJuLA2Dk1XJShK1ZrFMCjgUm9tZuUEzecQYek1P3mwR5aVNb2uPn4jQkNG9t6tbocTU8K3oiwPrz",
  "key15": "3iib4oRGavzrpCiwazW2P77w8gQsZ8n1Djzp88sbx22xouGCn9CSqMASoBnmh1nKWANk3fGe5nynR9XZTea3qfJc",
  "key16": "33g5D29ZiomzqTF7uCgnwYX7ujemx9o2xDhj1viahDcKyAFM3cuM9T7AcZxwEQUfeq429jiSgFo3iy1U87PekV67",
  "key17": "2d2k5kYpKj7ZfBhSTbbdji8mkvGgEU3LScZaMuuTTecs3EgF8t1CDfZjkfkhKymRFkQRdsRUfQRbhBe9rV8th1mR",
  "key18": "3XqmuSngZ8EoJeSb9tvMoqhrieaNLhwq1YUeqwy8u9nrb8yGxU4fdmPdmqUBDwu3KbjyafU76y1qmLcNWSb5shGy",
  "key19": "4N3mT53cuoXMXk6mDr6Ar5igZpDNyZHrbbkSjrWLWZXea82SrBDkrnD8M7g94xd8QABjvfVjipqkH9vAMUAV6ZnG",
  "key20": "24zZNhnHbbvuqRvpUoUAWYspwMxhJrfhEFsVBTKd3JE4ejozVseyZSJXG3rzTJxpt81wvjiKaxXP28PvDkjoDfHh",
  "key21": "5DV8DarSbCwyruHrWwYQwXoRm2aUgaSq6UmHQfsWFL8c5WozVy6cXrBiJDBR6PgAqtcjbYNpsw858UwQYD7VgCky",
  "key22": "2BkTrSm3nY5Xyj5veEHefYod4J56yAxoZev45iwz3o8ep4Zxk6taN7qyQirioVrnPt9oHAuzz9fDie3svK3F1ZGU",
  "key23": "5YcM3MC6rNZZ66jwjnBwbmYPLCjLzUnEMWav1u5iFCXirUvJVE9UGFmFQiV26ok63xvPFsNbhJhitgs141EgkfB8",
  "key24": "5haAySeqPSEzGxXTnVUi9ucpo4RFHgL7ntKbuRSdXPYVsbTZySHx2zBudrg9Q74xah85HULrczketC61osj9n1Po",
  "key25": "3KzFQnrQcF1gcfWNSGwzaLkaTTsZG8DtXtRy5JzC4FYKApLZn8sNNS7uWWLv2pXi75Cxdh4SXAP9pZqHVmM5GAPm",
  "key26": "2Z5vpfwXxfys6M9SidU9J8dYxvVUGyqjw81e8PnxM1S8SThn7z4JHkCY6U5jCMZexFBd1HoJWVYDX8Y58Qm1JzU1",
  "key27": "2fjcNDRgtLuNaaRwieXEJ6K8zkTSTXZw4rGkt16Fi7WiHdTSKnzz7eE11EwnjivEqk3ty88HLcDbt7L8YzyZLcx8",
  "key28": "67rkiJHKnw3Hn1D6uEyBySHNkEvEHPdt7PtWC1FMhcrsEpz5MoX72KwBwdmUmR4zWUpyZhmpwLQ3rsnYvNSTP6S1",
  "key29": "2FVKAxDnCRNniyP3Gfo3tyhSxuEXajvS4TZNy85wdTHasuB4JbGbS9B466zr8zGWdRXeAZqNitJGzRtCdFsYqHje",
  "key30": "3Jbku9aitZy1GxWDk3ubHWm7Qwsce1WrZKLkTyE46rtcLhMYYuwg51LR1RpoSvFXX5bw7sooXaivmr7x4Lz3GboB",
  "key31": "2LNMQs1YoWg7gAXzeiWckLYFWnTMCW2U9oH5W6pz12EeiUViSg9AyJw3rKkG5d4uvj2256pwQG8UCeNegRP9VCTa"
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
