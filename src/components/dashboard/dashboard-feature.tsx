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
    "58pGg14pNpdyxCAgzngr6iwntExhJEmJ7cBqKvpnUR5bAkrQA8HxuCK86hrfdf1PkXSZyTSBRTb6496YGEkom9nG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UyJhjdWehcLCyggHA2XJPLUqSRBw5UscB1XvYz6zxgHiUxAXUkWn5SercWxYeanHZu7UdbP4ckT7g1qhJ9HMhVq",
  "key1": "5UHvuoWyzR4dzARCG33t1SnZgvExuTE5QjKLecxZTDceyjdBKMKY8EDZMDz4oVZKZAQGYxcyuDPNtcRZm49B8AVK",
  "key2": "2y7JifB3xtnbcK78aPHsF8qcJ48cYupyTV42hKmDPy8ZEp6LenDPcybobxTxg6xNQZ2BzgdHCHtB79rYkeaPbkY3",
  "key3": "5gGoWA3wHfeTm6AJMM38GxaLszFACCxsw4naZ2f1Wb6aDsvysGMGwVdUiebGPoGbwPgkEehdRMttDRiNmE5qViC4",
  "key4": "2MvRcobQsewxEKEU5HeNvdFQftcGi2Jd6HhV8K7CyGHRw3LVgr7vr8foh5tvJ9knfmCBho62f1dqKuooMZh5A7VK",
  "key5": "4Ep4YdTXmzYAyxnvybNHEJ3y2Ch1tvb76hNGoPhQsCKJFNkQFAX9sFfD3bkgzBNtSaqPpThk1C7zfeV5KNwcqd6L",
  "key6": "5fFE1hxovWFcEDwKjQe44XguzjxafQ565bvbGrCsJ9UCTFP651x3hx3YMpcc8ZUVveof9ysSMiSDi5GyeZ67syqG",
  "key7": "3z7Z63CUcy2CebKJm59sb3WFAmSYqvLS7sxJmDb5eMe94EY6Wiw6AEmK16b8HZbZ8HRCy6kVpRsPPDQg964fCowi",
  "key8": "39srvuEutBCT48RxtUBkmj7UhdMnHL6Rz54KSEGtxG73JJkAiEB4ZhM1eU17qW4j68HFi2B97fsaCzK3LTYp4ir6",
  "key9": "HvQPg5cfYRG2ayGkTpCYdfhXsoStvBjx29RAyHaoyyaJY94TCo16BjRBnt2bb64jCkTAGpBkxcPqzWSeLUE9jCU",
  "key10": "38Mba1wCneZqg5ostJUEBvQGHhGihfbTGpxVuLAwBvWW7GHbEFRqHtS2gfg4GrPnT8AVpjLJjMqxBmKN68q9CRPb",
  "key11": "4fi3qvAgHH1E3Cmui4iwpgrK9ZwSLHp75CJkZZu715nRpwcSZeHGgHzpFV82VxDgVjYWPem3TW9nunWKCjrV8PB2",
  "key12": "47SrBfCXJZ5237CoHdJoVHsG7pECtFaCQQ4Z5Lwx56Us8pv8wstPRyfc6pQPpmxnJGoNEXLxRVMiFP5GLDJUbidU",
  "key13": "3qBWGvtCz9ceuUNeoHDFi4Tr75Hrxj4piAphfmY4NM2qfQ87ZTZVGyZ6NSUaQYaVDQzC6iDVAXoWryktEgr77pkz",
  "key14": "41QKMJRJYWv9qARR5q3F3GfW7WTDSQnTcsoQ1bQ4UiinFpSbFsLdnHrBkRD62guLahhMk1LLPzHEK2sA8QqaXywv",
  "key15": "aZTTLzRnGthByk4MbU5kT3LpVSa3N2Rx66GY9EwAXaqqGhZmK5dfjdjJeosDJgYymnThBFPwWNmRh3G51QhLrEW",
  "key16": "5Wf1ijcizmZg9RBv1Hrr7kKUyrxNpcfFct2PMBkSGaGgMm4sP5Yo3PT2ij63Ahdij6wvCnQ8x2H4BjsxVvoUrDqp",
  "key17": "dnaGEGF61Ee1X3LkrrbT8iQGYrUH6PJxVmMg1Sj7j933LmC5EhHafy9CcHKY4qg8km2wX2yAQ5ntyTQHkwv1QNa",
  "key18": "3tWhaPHUNsa2RS1iaEHSU7GDJKPAGZXLKuxttJyW84KcruwcUSh5f2kc8jHeBdHphX9wMdbLfyVsRgso8xoEojNw",
  "key19": "4oRUzYGGGxGvsQZCf8taoyKPkdmi8qWojYDg46HKwvpJF1YR9SHQ5ohfqEgEqSQz3k1UU6LLVSWgatcvKPPJbv6W",
  "key20": "5b4mSBZ9sFR5dASkD5DsAnpESQdzxEpC9Ggnr8ySSkd5JvzpWP8wkvGjwzjdmnR8vGsAMmuppLcGGKc9v5q42csN",
  "key21": "5cgch4pBcoxeUHdAQQ5k766kNg3cUHJqLf3EdNNPUCdhW3huniu3hJkVDDzFJWL4ZMhm4qHaPqNZ8MNigNtveMNL",
  "key22": "38Kc6gqkRSaWgRQbwZaXkvMa8ME3YGSvPK4HtPDzHMXAqxJBYjAgru41MmtyNtPPeGbRVpMnPyycYWibeBm6jsgJ",
  "key23": "27XnZCA8QhLnpe33vrQAU9UcvnVB7KgCSnBBToydg5NiYzvzhFVgXzociMMkEgBPCrd9FQrJ6DuJDThfTBgEdfDR",
  "key24": "618j4aw2Ru5GRni7bGEfUmcBSd4eFYHRtXo96a2QvkL5vEj92GCs4jGqJuRvW96SKsVNWRtQq6T6wet7rm5nCo5y",
  "key25": "3WR4p5zx2Gv24vRdLEH1C3mLiveJdVkwTWzeTN4nWvucLa4hLf3SSCcikaKNignbMXzF2d33mm4vvTYgo2c9Mx5t",
  "key26": "5Xy2eB5jtpTHTYYaDqzjBKM91doETtBQnoRqiC3Kkhh9Be6rRj2oMD9Ju9cMYeAKFr8x72j5y7moR3RpeztANAfv",
  "key27": "65ZD1BzSKDDEcH6ScnFoDKzYR6t7L8cT28tttDkvsiMfjSEyMJjsHwrCjPzQTYMCLF7m2vE4n5vS2oxA6TBSniAC",
  "key28": "4zPzjBEk7Cog9JpA5Juxunyg3UEc5R7Nh3jqqK375CkQCZPVAh7WBjxGLVY2KqYEXToNgAKJVPXnk72TLiUWSc6u",
  "key29": "24tXrkfuQJuMm2FVwtPj5j32bN64qJn6DDBvQ1LxgyZnE8PDo6EDWAbrRYznD93xexcgGBwY3fveokdTJ197hvPR",
  "key30": "4QFnLYXZTaYHUVd9EaFoQTociMFvBzUuhqUp8mzJqCPCaeGgb1jFf2SK2k9tLZcZeq1uRwEJ5HEJyTWak7GSfQUa",
  "key31": "2zHQXcnUJpa3x9rpwSqDjcoexVNSuZ8pcHpe3FqTYG6Xz3W6FkWo8UNaPtEeDbByBmL4oTyea6af5BHkhE8FeKdm"
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
