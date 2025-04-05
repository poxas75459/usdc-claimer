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
    "4EQUPvnu5sdMT5LP113zWGaDiX9BieM2d2w5WWDoNmD6qY7KorKVSAC2e2RczwWQPBKwYdWRCQA8TyUnh2ZSRE4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t3HJxDvLzC3foZ9govzLQVtrghzXrZ8n67Dj7Jcmjk2NQaW7T6vctPbYiFSV1rBBPrrDoMTtBPVs7SjFjygpdP3",
  "key1": "2wofAXD5wRnQAThXtPGYCRp9NcJh9wavZGBLyHPKSBW8o93QeMcqoQYJqdNKLFGcby62Ap9Uh4kW8J1KqmFYtr5D",
  "key2": "42cBMAWUE5AstNH1Z6f3N6aoDg4mPrx8m9YksQCQkuxtZdR5JJNdQ4feL2wqmnQeeuhVXpGugwauLFxN22NVLY9c",
  "key3": "4i5mLJ6ScKXC6XrGWQREeMxLn8CWgcpBkTT7pDKSWeGzaCVBMsjak6CtNwS2Ua7K79ykhcWip635A1BbnhiJ6FRA",
  "key4": "VHzP77nnGLUhVNkLPGHsfKaBqiZ76Uobqd7AXw1WiTKvMPjghYmYy1pyUCoigNQJjdyxtyoUVdkYdJqmi6UKTwm",
  "key5": "2MRcPRK8WGEuRAa8fK87MAjEs2MGbQ6JuE3JEdLeBgSt9GBnVgQ9jD9yX4gP9y6vMixMfEyGSXhPij8R4AikdANR",
  "key6": "4P54bGB2t98wJL8L335BmiK8GoEwcTiicHgHx8uZFKgxCXm1QPTDkqHMyAyNqzhdNokvt6aHEeHfA7LfC7zSJjEe",
  "key7": "DymrcBvUQYtcbD74Xx4SkrZT3Cj5XDr9BEnLELjKSfy2Zxd5Qhi7KT84UCwY3VZAqFs7zSx3evs96MVjCzqLBoi",
  "key8": "r3Uo33pahDKbpjVNb3siyqur11bJhMdyHhnRXWQAvBUmy4aL4QSLeFxvd3pSUBzWJLymsuK2UQcRQcPadQwdiUb",
  "key9": "2z9FSDz4GjnmmaoEKxbUTtR6VyGxrBEkXHCGWnzwdEmNjZUkKAQ54yw6Fv1nKVRxrSZP5a7R4qycYL3N1JSCdaCp",
  "key10": "22RjKXDQQwF58tSQxeaJQqefcmwEv4y9faDN6PrGM4dKAqbeRRaaqUEtv1shBi8Eg1JN54cR2ehFZLNZ8u6BFbLF",
  "key11": "pXjFbm33jJWZxqY22Z69FwsqNqVkavAuFRNVt7De12mPkbMVs938ntpQEAtJAm6mhw9pLfagQ3bjTAxcn2rrhXM",
  "key12": "4bTSmaK8RjhjwXiKDauj91gcCncB5vWY44VYeB7bABZ5Nejg8SZhEiovtfRuvEg5kYF7GbJb78VDpWpRhP5pgpch",
  "key13": "5iwE238arhFjWdtzNJdDvrNvHbhst9JrTpTpKCZ2YEga7PdLfDTYTtgkZZUksD3GcMmxdPYNiNMJq1cRSbBzt6NN",
  "key14": "2zyT4DpVg71SUFdUEvQNi3FuDypTspUuYt5KHXbpHTnwUHfdvPHJTBg7eEn9c3iQJ1gRbytHekCRsuRpUoNsVkDi",
  "key15": "38ij84WQz4yHru2xHmL95EhAA3qx4pVCYvcvvDLP6sCyLn6gGWCRL14uuoSCFowYQeX8NxvdT7ePh56pph4HVaDP",
  "key16": "4jTHZHjtaWeE359R7U9QJXkDJEvcxwkQjPXeJP2MsfX5Dawb8uHGYtMwj8MHGQpBCsJ2fGLxMm2j8VKS6qvrA9Xf",
  "key17": "4AVe2uZKAJ1XK3VwmZP3Pcxsxb7m988cmXdVHebsbNW6pLW6xVVAxCWrtqks2Vbbr1wS5xRoDS2HTQMMUQx8Pmo9",
  "key18": "5PqhBqPr1Hecsx7rdSx24ZeiG9ESfZ52HkrGVgaAAHkg3494a2FQXEWvZCC3aFiWU9kER62YyVFEZXMzEPgTz3od",
  "key19": "2bJAmi4qYTeAxbWAYuXfVvcgXXeMo4n4aV6MctSu5bbgaN9hQmbeEmGmp6Zip7x361T46eGExwiVZuiJus5rsCvo",
  "key20": "XjTt74GWgrqyEXjM9zB1CfSCm4kbBajGcCdwQMcq6AxKJAEd5i18RdiRLdMKKh2A5JDfFKvPYYtc5ybwUBRAK22",
  "key21": "29PKLCLwBrQN7Eo67d5Wu7MJkUjHt4cVHPCN7GB4xy1Lz4Lgggq8emTwz4kNeF9ubEZy8NDfsVURPe4skUBjAmZc",
  "key22": "4jPMdeamSYByY6dMe3Haj4B6MzJRjHqaVwKs1wCnG52EgH8aYKoBoGubJ3GfGfyKuAPaQySgJTQF4gtQ5GWXCHz3",
  "key23": "5zNSYTE4AeCzyiVpCRuvGhhXADTsvpFDJeAan5kgsq8EGT7N8BveZSSnJnjaey8w2nByHgTDLYsU2Ft7hGqvnieP",
  "key24": "cDo5qoCumxfjkpGuetLyiEdyUPmLeJimb2aQ63knnadqN3ThFkFZpLZer6otv8vq5PzeAZ37Cqa1fR6GMJTdbNU",
  "key25": "3WcprjfbMJGrknzqknxSWDNMPApmfJjjzdKzMzwQKhEPsRCFLkPkKqMLXiaz5vr7EQ4Unm9d3KyWSLBkz2qUwCnV",
  "key26": "2F1JqYN5Jtz4xqfx1WruTzsZ8hV3VfjSq8Crv9L5UzvL8pwQkgZbS4fAi1ycSzzMoCfHJuksij13Jb3xdrJcHiD7",
  "key27": "3undXNR7m6EqCP6ao8LrNEHaH6Yg5quZtCve7ZhdCQSDXr6HtXPgVTuGs2SJMC9vAyosMFfPCS2CVDSczqFTzb9d",
  "key28": "2Y3Gs2C7PkdYyGdkKCNHzpaaXFeeG9amS9XSw9sF9my6stYV8g1qjKb6iWNQhvcLLAnxva42ACiBmfXbkupKkvqV",
  "key29": "54quiJg923R59Qwjnwkf9W4JTxykc47sTtDQomTxy7PRZzgNTVWfYJLECtaH6U1nof4EZkFk4EdNbvYPfD4S7oUi",
  "key30": "5FJnhHcGaeygSTfr6ZoXswMXqVeVGmVeKPLbu8wEyExfz1KJNr5yJDkDCj9aibBRYzSCZiLt35uuyUN6Z6xoEz3Y"
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
