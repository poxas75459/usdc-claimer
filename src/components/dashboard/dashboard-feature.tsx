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
    "ckSop9vQYsyTvynzxfCNzgCN8nbrjCfUU7vuTFcd1QKxZDvwvfm9nTeTD6bioS82Ux3VuGDWs6iQQjt8Nz3dTJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dttb86SUcwyAcGpb5rJG1CRQhRN7pXRq7uhFDXMSxgoRPDzgq1fJcosEEqsxGvGdvtNnCsCj7jp9qUTJCtobDc9",
  "key1": "4dq6ufWNo83aPCTETQHHgJMWtxLGDoSmjmRgm3wfpqUeVzUcsKt6E9NMkrdNNMfitZHuyuhyP3HK9avRQk4R88Tq",
  "key2": "DJLCjw8mD2BrAP2K7Juk7HRRR91UxtN7f2i4vQvCLZuACaDFLfav9ca72YmJDHvC3baWAJR4HKepzNm6NtbbYyQ",
  "key3": "9gvw9778tym6srxRa7E8oQmgopiPDSYJNQTModn7eRgrFHWTM24wJyurpW89HKJ7BmBtNhPxyUxCZ5eU8vmtUCi",
  "key4": "4mu1qfefPxiPgDV3NXLqy7yzMrNbNdeszQcfUzsUq4B5JD7Zi1BwG1983meJw2Ra5epPM5RN649bkoB28yQwKPo7",
  "key5": "5Q8n1vuHuUM2yeu2GKFYbk5RybgfNsB9Dh9dSwYKrNRfcXFmwEFh14oiZExL75NYek1zu5rG4h2q4WFFCPh5rxSH",
  "key6": "3P65m3qgyZdesdyjDka3ygLSpd1NGnmwrwDeQknXJmGHWG1PfpUxYeyNvF2b5EosJq2WsjzbiAxUMF3kttK2b9Zj",
  "key7": "4F6ZqWYezjxWCtsht9Tb3GCpTKmY5KSMRYhWdaNSif4LtqLgghQVwNBfox7P4w9NVt7zo23LtQtm46YrXkuxLGoD",
  "key8": "QR5z9XSmFpoQRDKBriE7mN12ouaAmfBVQkPEsVkw4Wxgr3rXQmpBVvHWiWdwXdDeSaXwq8cdtN3xsF9YAvszrpr",
  "key9": "4FaVk9Cu3tY24SQxbvXQATSb8ptjeYGNbC6F2iH2u18BG8zAKaUXki5YgLQPXpFtCw5Rmp4eLEvq7qwQb1wkoEr9",
  "key10": "3KAMQ7biiBZ3ZMiKGjQzN1hazeZJqhJxPkpG9ab8Y6idTXq8Pj2kV4SGLt4oZC7HFSZy3mKMCr5E8Jtx44bxCYs7",
  "key11": "2LWYTHRW1bW8Biyd5iJ1KxEdCZ6AZ5H9cviM7s4CeTqRVHGx9bWUqMXwJNC1Sz4pnaqpxnLYzDqaFMf6bqPeeRqT",
  "key12": "44Gh8jyHkzDxrXDqfYQPkEdAgU1XmjkdYxmze9fULa7UbZTdrRY2RLuaT2g6jiCgXYTX8XFD7viorJiRqeQbWQAU",
  "key13": "2cqsz3cYefcWZH5XsPzAFjhc4XNbYoa1XwmdutVsSGvs8U3dR5V3JAgC1NodEc6kDHM7SV4LPcyeGhib9CvCe3yR",
  "key14": "2q2xJLpKEueoqzzyGTHs2aAhopqT7LskaVzYQNTb7Uq1G6KoNtfCjagHa861cWoJQBj1vSYnJNeSQPRNuKPrmMKY",
  "key15": "2tKWHWEYz8oF4THDEnQDmnEjY8AhffB4YQ58H9g1DRErUceJYhmQn5YeUVb2WwQpp3DfnCPq8EB8XHbZLZzNJinh",
  "key16": "51Gd8rYK2sjjDxfq1c74ZTzFQPzhG8YPfsKQEDn9Fr2gLwMirrQkjsd1NA9cF3hRZWdii1u9zqyjNSBfUYWhfZty",
  "key17": "3WQ3ESFmgVCyEQBE4wuaFt3JYu4iFvAm2M2B8Y4E7LC95VbfgpDcYV8bcdu6Nn1KX9pfAAnK3w2H1FzXZiDKyEL5",
  "key18": "4BNJtEcxQ3ctipdNKuCW2sRL1HzygYJ2Gn48wYtKnSrrjKMmN9znUPUTWqeGMnmjrcdpEgVKE4P3wiR8TcXDzbAY",
  "key19": "qj58nY6JH87cphYXoF3Whf8cSc7mkt5BhoceXjb4xw423zP8XS9jD2VKTKgmsvW2HTPd5v1kweuWJ38dLRQEAxh",
  "key20": "3ZMBQjnpdWTuVtv8WvUXTYTXkDY2Bebf8Y5BweFQryXyeVcuMjHCDEM3nM6XDBeL6Wio4oKFfTMGy9vAVbeRm9pM",
  "key21": "5Q1Ffyc9T492BKf9U2pkoP2tv7tee9DjFxk2RxHR4WdfZeG8JpzRwMitNeS3m6td4qzLBo9dcr6Ah3FXuTDZVeQB",
  "key22": "2H73qpFKjdfk4MenMMwbLTrL1GQBWMkS56CKcqoCqJWwbzoutyFRPrzB12WpYJLRVQNpS5xXsgvTruvq5MUY2wmY",
  "key23": "UjdhhFgnPtfXa8vjh2SKzFuNYuN4ZVGuVwvFRj6KpxyUbb8rEnW72NqNiV7qiY5PhqW2kEugGdT5CzvYTPkEoEK",
  "key24": "uQA51DCcnsPpTDeJDCdioXC6fWHt71ZDwL787pSq4ViXko4tqfwmeDJFYKTHwQFuLKbyizPvdarSZogevPfKbT6",
  "key25": "3AbbpaCwJvkkAh1t3Cz2YX7v5DSz4uX6VMdUPLTR9JQtdVJbFwt7QG1N3NSzcvvU5GpKjrX7HjhBJz7tPneT6BPF",
  "key26": "wZprTPgAQwPDCawd7bffj7h6ZUPk3c3gwwWpeV4Ln9CsaN3xX4d5i1GFr43exoD1Bpx16U7o6ddD6EXS6CSyK1i",
  "key27": "5Go5xYoXsMGdFJqaTtS8k5848WnA1cPiiHzpUdiZFshTdBVDGUr4Bs5MuemrNAY8tSyGtnddGwMLZ4SXvA1j5iUD",
  "key28": "4JeJk13LauAobyE3ZU8JfWQwzp9FAoFkeyjGL9ty9nigev3t7PoxBG3nbReGtS8ZEDbHahN31yEoPWL7viNEFWmT",
  "key29": "4NQZEYVxCXYnq72Hkjt8DfFMHxVgLcutWEAWheCxV2drP7jZmhq7oFRJ4JuKD1GkcZNf3zE1hPD4uRmfCdYD3WV3",
  "key30": "29jdmZiKCVmvcsr2x61wmLVAtsiZmre2BnWvJiVX6DXGypywF3nt2ZrGMb2PymP1AhHAHqG5ndMKiryEzkuf6hC9",
  "key31": "3P9xcuGGjZ3FbrvVice6XNELvgue8AsryiCWTaFNndULdn5nwHpJTryL3q2Y3ySGxbi9vmxw7SnWKfnCDw7W6boy",
  "key32": "wZNgKF8bEkKZqSBPmjjrNdfLUe1DdGfZmCRQNhtm77qVNgSQYeRmHYzAEeNrPmxGNhW6RzjPbDX85Mb3nixaE5k",
  "key33": "5mufQAWWm2NRatKm9TSFy1GziyNmHvKUKvjPqfXkZgJCGGsQnhdMhbyczi1Uw43tV6WZaFdupqp6kAK3pEx3ji6A",
  "key34": "37S5nGEavAjboSugaQm7PvfoJg4N2GKmjLUTiFUtTo7UpKYAq1iEwK3yey5XLvcBwU8fGS8zug4nkqDK1qQyfG7B",
  "key35": "WXnx3ZB72dG5WRmSxCLP1mfvYPfKjjHrkpQ1axirZ8HKS7n8Mh9RB7ExqtZvgeUWmicEqWQwYEASMGbx1MF5PDv",
  "key36": "2w37RwXA8TtMsAZqKshnXNFxE1dgMeQ5wxdTciS6apxrwkoQFXbJzVjcvxENdFvHpyncCoBDDugrsZYZRW137awp",
  "key37": "5jntdwHvZsSy8NrX3s2f4vAgVsdDnNSdM3r5V5PyAT4mFhKMjK6q6zxchsMhtLqJzP4nHna6mM5KY5qvCMJtYqNa",
  "key38": "2TyZVGv8rfXugMkPC4zDUCurMnx1t8KmqRnMJxYvVJJTUKwodCE9HNrgd23id6gyB4S7j7UtXCLd9cejv1xvAJRn",
  "key39": "3pJhn6Gz3SeXpRkrgDXNjmWFxpVMjpiUj9khxhtqXxgkmQqRErp7yHGDWMQkyRH9X9dAaruTkkiwkSVbNaJKkvtZ",
  "key40": "4aZ4JvgBvaLZAGH5BBAYEuLUqNAKrzLCbZCUr9ggCYK4Pmf3XJuoKXUaiYECjHBk6zHKB6Hr6vVgrxHPMek4DoSD"
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
