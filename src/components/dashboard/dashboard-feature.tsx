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
    "3tvg4Pi3m57gkJ8Bc6pQ2dXX3dLGJcjf7bpTYheJNaMuXrqcWG2n5eE8JEgkVhBCTLKevKcSTYJRRtempvpeYqWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C2dwEMqvza8wgHoi6fkz5XiGCGHhSRm8ytpxoT3qASyC6QiVEFuS5tymoCauZeEmeGifqoozBWuCT1Cn5QTtNv2",
  "key1": "2Pm78PgbbVUmx9DgFaLRNjyEYj9rFGyx479prQdA8jvjQAX5syX1URqpMoXW6EHmSMx2zdK24Zk2JDmQKaCE14Rz",
  "key2": "5DPaNcXfLDm9bfTGqA2REkcezpMg4SNx9RHUgPxjgb89F9F9qzS2yb9uHG7JU9rgzS2LCtK8M9sML4VMUMZeDXXp",
  "key3": "4kzvzG7anVXoos46DRYdxMfNCXqkKAdLuECZWeLVCNTKgogbfPgEJwABfupF4ATvAWcfUViZrhJKLKkR8wuTizT3",
  "key4": "JQzzFCFTHxvCFBUfVGJjPAx8MyGajK2XbGurovhQULm1pv77onXfPqyvr5rAHr8o9y4q6bwdaXrZb3L64Tcs3aM",
  "key5": "2jf7f7wCoX65VJsMKfVcuypduFUvMx3mrGstpnZE1Hb8rEF63h4qWt48FoNMVN8tfB4GwELp8y1UJnsogAMNnJ4D",
  "key6": "3qYzaqvQgv3nCn6zyJDybx522M3WNTLYrZfBagma68eY8PuWPJH1HhBhDm7mSBZGViSU1aEviGAqmb4cAkTWnvH",
  "key7": "3yBTHJQfgBJNqaf9b7nFtAkF6P8wa6KwfkoSf94HG2VJGvCLxETCnYnyXvxD6NrHVV3mxhhmeK6XakPJUxr8XEBq",
  "key8": "4X9AAzn1apdXKyud6TevpiGoLzm8Nn1vrwLcV7mKo1UKPcFtp9osP21QrghsPudxgY9hNq1uu2g2jW16iwXFvR6n",
  "key9": "22RTFxLsQedG9J8aLJdsENWGXLwcQ2ai3KQGHNLNx37XgFjApzWRXYdKMTvTx1x38BBg34MGj7gB7tNzVvf34DhR",
  "key10": "54UG5AXZYPqP2J8My3AYzX6zFvh5Xf2PNi8tW56ZXQpn557SvfPqGxkGJx8gNqNYYDtkKomoEjdeEs4n5xLmXM6e",
  "key11": "3ZYFJDBkhm3tz6YUKTzHEzbhbTSxcbN54S9TU5jRCXxdSW9Z99QYTnd2WPb3J3UtmdCtHkgYaUQJ4NeuhUuQj59K",
  "key12": "M9a4iNTvEct4Gu56M5CbZzjHSm9wxoCPiQq7Z3ADqnbRpKWz4sRbpiCUYGXw74X9Wi9CMNAxAxeWmghZEqmcvFF",
  "key13": "23KVPKHEJhZkAme8dnFgbAZjnbVg3fmrQ4LWaseen8KAEsFJ99YocxumiVs11Gpn8v79kRitLTFjAETdNHUjfNJ5",
  "key14": "3GLvKiQnd5j7Gun1Zw3ybqvQ8dP1nPWp2H6DCWHKPsoUQd7DxTrQUVWghmaFwFE9VHtj6CM9e2D3ujyKSmmyvCm2",
  "key15": "4ZbQMLDPKaZ4fM9GA7V2WMUqLAFpS5qL692aXZs5jrfh9uHpDfLbDYJXRyZEzrtj6cyJzVGjRcqJx6nSdFxQVMiR",
  "key16": "27qmSEgEknghYe6PGdna3BLpaC9iRL4H3Eh4oPe9hUa5EjQpP2fnfKU5VewGLDvcf3FcBEuseqC1ZXaUGRL51KEu",
  "key17": "4ZfiNszPD7aEh4EPQP3UDkufLkSN1RavUxVRsaPFjq3kDjDgUstGpCrVx3mjEUeWVuv48HFqSd4gtDHUTG5hbvfk",
  "key18": "61Cxnx3pA2haonEHVMVzMTs3YUb9gpWFzndcatrqqiFYpPQPpRF7DBtCxCozZPc89kyYLBUzmUu6Bvop71ooMa8w",
  "key19": "3MR4EUkQ76pYqYhzbdw95quSNY9J2iP5KXaK92h5jseny5d4Akk4K63g4SpESFu5ku7vZ4z99fHfqsopyKUP8wXK",
  "key20": "2U1FhrynjQSRo2gFdMCsP18M3cn3M6K861bGfHDAa5KW3UoScJkiW8ewwKRezFjQHmZpkwQUA4qKGEr29NYGLcnX",
  "key21": "hhE6KBtVZhNGErsquzgGQ6w4gevazpsd1Tsvmr5AuLEceyQKUuceA6uPZdDvhZyrwQzwhhUeozkHyJvnrXuGw7G",
  "key22": "53tQ9t4hQGQhoSHQPaWegNnCbgdcu1ZXv83nUWNpB8GGUUAXVrcnQepJTUqBMesNw5UotiKYEzfgjiSooZHsBpxZ",
  "key23": "5Dh7j7nZRzfcUeL8tRvfjN32Czdg6Tg21281nYBHRTfWEohZiFnyiij7px5PKfDAimpH2fWXrEnN2KS97PPNcBFz",
  "key24": "2k4GGTu719Q37W7z2om7cF6o3B18TPUb6419R4ggKQhxhLMrPpwGhhyni3wAdAmZrvFhyaweKPfYeZJgWRzZ7FQR",
  "key25": "4xRi3ZbYosnXggptYgEpVW9UwbD2ptgoCH2QN6g2XPdVSYvr7XcbS5C3qFUoBFkV4GD26zFvQJPUakEuAizhf73s",
  "key26": "UZ9FKrBGKtK3ANiW5Eks3mFaUpUPvdmS2SZL2v6c9xBGhk5roXcwz7NL1e9KdTUpSiuGReEXbXpNSHznsZAP1z2",
  "key27": "5corHupxcGwJLn9NJZLfqxByd8wgsedCmpN9L4dGWGVeokA69CBaNQ5BLdJ2ZxJ27VTeg3dsqKgPkvwd8zmGYs4i",
  "key28": "BuFtH75ETccpTSkhmeS2sHsxo9K6fqcHy2B4wsM1ZLrQRrbngDcufLMVHKZ6uWFDnirYjLF9TQA1vMcEX4qXTuo",
  "key29": "o4BkVWR4fxScQxd8pmn4QTctVo2ZVpCbmBb6KCMbd8S1cBQKwPBcKRn5JbifsaS4fT7m27LYwkLRSuGTfFxqVSX",
  "key30": "2F3b7t7bSGzgBehV2Cs4HVke1YUKbhvkqPwidLV3P44NUvtYgoa227MMHFc49nrJAFQYCzDson4PFXmtFVu1RKhJ",
  "key31": "Eo6aTzEUKmh2UpvMdNkcTZfp3KEBKYNPwZx42uV3rrHGZxMeXveK4TK1YEkzwXE8tc5V7fJkU4gFuXcTycbEA4z",
  "key32": "5MrLdjbzCoaAi2CLrVDP1SfS2Gp8uamZ47sARsAc4eGmdzBUy8C3SJoLANABmsw6fCnX3RHQU1dgFNfYeWDCZhXG",
  "key33": "2tGC4LzjYUtYatbKPDjvzoEpMnw1HCmuu5P2XokZvrzVGUp1S24Led8srVNMvRtAThddTktvUnNQnvyH8Lxwqtkw",
  "key34": "4hjV3RtmWia6KCXbEMYX2wHeYkhKemq69pWs1f3HtCud3eEdYWBDCbLrbqqzg8BFViBJWKo4KcdryGnvpKhcqZT5"
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
