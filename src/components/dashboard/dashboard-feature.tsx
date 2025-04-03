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
    "HTaNfYdZrT2WVCF7JmiVuM1xLvHhr15ukUA7LZuk3DyjH4Z2rKKvY2MWbeLQkG99dDKi15BJ2vHxXDTGsxbRJyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XRy5mWV6pRjfPzQd225FQ2NY7wiP91BzLTE9hP4DxMfzeh289J7Vvn3cDJ8z55YebuUdbK7cAHTq5wpjHzEvKZ",
  "key1": "3FCqLCWUTNKAEYurNEYi6tEkwC7iriK5NK6i8sYb2cot2iCKDXy288YNY7KbAZUnyTDJXxFKuULkhLjnA9h2sk6v",
  "key2": "5oCC25chiZrifbHTPxwvp3dD1XYDF5i8eFVXqYTskp1CaRVkL9BBEh1dRNUvUy2JTnkEjCe7KkDBvdLscRX8bmK5",
  "key3": "2JurejRNzsiRhL342DeQRcz7Qgni3Si2HRJraXouYT4NXWSRX7M6cug7bnq1gwDpuD3mrxSmMihHuaqVpzRRQecW",
  "key4": "31rAjE44fSgBZv3snpefa8Z3kAe53yhof3dmNmpELKBa3HTntupKu9FnSjd1VmJjNAkxvhwjzfTyaMffE3JQMHU5",
  "key5": "2m7HvkTFCdYiu83HYmQAnfFfiNRg68rWcRux7F3s3Jt3bTzhBV6m1CxbWYN4jv9STBs2pEW94ah7wncHjXDU3rMb",
  "key6": "J4Q5D3rcphARyHviu6KG6trJsEGqMb5g4DgbjKYrVqfXLwQkFBehe6aeYJoyVPYcuSPUhDUhqbqPHF1FRUG3Kbm",
  "key7": "3vJpviSe2ivc9oUvoJtBQvvfQwTV1Ec8mKzBTiwjipzgfs4bQWdSS6EiZKgfm12US5fAUeJvPY6nfS3fwzLmC3fs",
  "key8": "4Tmrt6ScTSG5x6qCNouZdhUsZB7kr87hKKPpgFK1UsY1vF3JxvMvxs2mUrhrKbr2TFzRtK6jjjKyCzBftXrMwEvv",
  "key9": "ySgnmdyt9scoyQTFxJXQbegUVQg3vZfFXsatVx2UB3MfPzfqwZJzDpPhVVQ4JizH7wUyZqCj92P9jnyrumBzUWn",
  "key10": "JyzRnCMqXrraf8FTXA3v5pYjSSJsPfgYwG4DqrouDMEUwFNLXe8JgLwxzVgN5GfsWiSmvdSpzeT5i8Ftt9bp3xd",
  "key11": "qKNme6MURmmPwYRvaY9QeiVd2VtSoUfJgTiGy1hqex6ZfuJYLkZp5hWSRpgY8JUqxLedYq9zYb6qmQKBTUVz3Ai",
  "key12": "5F8JQv6RDqBomEaieSEnCNqnt8AYFeRzNZAfbPLeAebtwrEx48UstHpvDEXCmfrTm83v7uuFbiqPfnQJVyWY8pNH",
  "key13": "4bh6b8qEaxSHyGwvAGJoVsrVCd9qP2vLENbyAxniWSRZf2MRdujyUpWgN3zGD1uFUJerQibUBmV8pV4YPSHRcUQj",
  "key14": "2bbzHjZns1PgZEEZCJgufCLSRfeM3CPMnqC3UXLZ4zMKJyec3euKGqcgTUsRKSFwPEjqoD28LeBDjr9DzfudTd6M",
  "key15": "4sG587UYGJdwToBdd6cjWKjKFAYef1mej327QNjTPkd8DwhrkXMkJJqhJFvXDfh4m9GDSNiXrvwBwNg7oM7UfS2m",
  "key16": "t3xyNkc85LdzpTMNuz676sV4wdejJK71gftq3T8xdzVsjkCxfEmeXSJRv2GzYCyGzVC1H4tSnUH421SDRUYvoH2",
  "key17": "4j9sgSSafRQtdk8H6mRtAFmCbxJt7bCsSvR8bctHJM7YKHHnniLueMiE22LuJ7z91vwqNaJiX7BQsAPobfNPGWW1",
  "key18": "4wmSxc1uU1ARoVuMrDHtGkjyu9ViK1ZPKspNgQBPzQ3mtYsdWrQEcB5eMEspVKB8nPqE5FwPirYDscMU3GsLAD9L",
  "key19": "5qZdpuTQwZhr2Hxg6i6M6XjA5wGeWVDn8kfGCcyUXyMPYpTcJqJ1SDufpsVxAXiThEJJ8YMPPAukQD9WfJDWDur7",
  "key20": "5wD3GPAYpid7Lgc3XnVicTVGAZUtWBptf71cfg4kh81pVx6rxzoQvvDuKArs4F8YFDTByD88hE1KShYJ9gVm82Qw",
  "key21": "5dB7smgeV3YyPhovheFfqBMMKW9bUSajSzW74zR7gUMoaZ77rQFoDKFJe9aqJ7tDTfL73oD9g4HZsKAeZUjGCkd9",
  "key22": "4tqHRukVMgekk5He3eHWA5S5vzZuwLbTAWQXH9cQJHVUinfBgGuLbm3RbCdedEmpgTuBrYAFubJWbvG4XtzpbQUZ",
  "key23": "3FLSrE67BTsDSsFUKGpJf6gyYaF2MP5CyuVETnrFhqW73BH4S228GBDiAcocTssY35sKyqY489xwLzSKbTgcSmaZ",
  "key24": "2wAJd9pw1AwxApcWWfrfGndmVJ71tCgXbyTCE7LXuu4tWta7oU5iZTFAoc7B5p5r5eWybKxK8Gsj76U3DAT9DjFo",
  "key25": "2fzjL5ZTxq7Ye7yKnU8o9hNzhenCGAJuPpHerCevrm7YNmnMA3hGLafEnLhXhcbTqY756aD9nYgBFNAfEAJDFByL",
  "key26": "3P7Xww1icoLzjX69HqnHGNfqbJptsfFopE7x8ajxFTNKEqAJW8NVQeXjCfMeTqzbZzquaNQqfwhgwmrGNQUY9NE6",
  "key27": "55CUHKxgGa664gktXhawJDQ2P77VXQoDU99XruNFdwShLR13yLjen6rje7T3FDpp3piw1KLDd3o13MeuJewQhTVt",
  "key28": "5KXEbtvFtzoJeKdGiPpMLPMHeqidzCdWL2LyHExhuhfV8mzjbXTARwcadZX341mJy96fSM9GzsZJGQxQr1rmgsBF",
  "key29": "3KnDnH7H8rMtWJVMg6aQb4iEP4Njva81TEMK7xmTUwStTJwETrwgag9XTMMxMhVwukVhAKdD5ddT5JDNRmV9rXdi",
  "key30": "2e2W6uMYGpjuoD287pGL74bbTeKcNutHcv378dBN3PqL1hLV4hBjyCbkzLQxAdSeJjHDuGNCtcCfG3bZBuLLqkey",
  "key31": "2jAiqnME3zXGA42EWmBuNNGoTrx2kKYAjH75ZNLHfcAgji5zWA59L3pGrTaTmgWo4XKEBHvxQXYKfLH1kMeL6Evz",
  "key32": "Q4XzoL2Yv4dmTzV4D2g8ZQS9rrkc2G66CjFWCse7zkuMoGe6efJJjD9YkpcwkieSUTBkaGLJ6D4tsxAJvdMoav4",
  "key33": "5WuppZJc8TGP6Mzk8eC8CSPjuz8VxGcMpnc3xk1gNwPw66DoL1a688Drp24wTysnhBnGfZcyW52w1b4ENorQJWDE"
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
