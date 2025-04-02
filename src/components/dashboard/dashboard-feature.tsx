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
    "5GK2n7Gqia23bon3YtFcJgeWknEJKexGSbRDZewb5ArschnJES7w8HQtL1n7Aii6zztCnAzAmJcmGWjTHRkZWY62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CQffbLbWpniw2d58KbUq6XvYF8khSaBujHrSiYvnqAuiBnRHwoZc6vu6fYEFDuRXU76f1ys5bXxRfAkAP6XRkoH",
  "key1": "As2gtWQJhgM8zK8qaX8oVtnUxyuQYHUhQEGs6o8uRJDWU6f6yeCwanQw7BodiXp7oZJpM2ifH7YoGvqptph9Ee9",
  "key2": "5xGuC4WnFuY1DKpkd6RBt9om7NXgcVCeQVM9m9UbxVhkaVWhy7mLDBva7WKecSUWJu4MXDrM41xeeLAzpr6xkCqK",
  "key3": "z2fk5ykRstVBKBCHEjMZCJoyYi8A5YgRBYn4pxKS5ru3VhE1e1Y6yqsSmTWGqawevzuXeWSDwUoGzLT9KDGhyYG",
  "key4": "2w4ztDkiRXxErK74a91K4V81bGyoE49oVCKaCfPn7gWMRbmxu3M6DfpfrMjdFTHJK5MiDDnUiKM6up4nDTfXNumM",
  "key5": "2zRvugzd1LpAxHfjqw9SULE1q8YBzqt9dhAShDnTYJ2KL1VrdhQpkz5jiWZazJLN5SERfJwQ8KZE23ow9uc2RDJk",
  "key6": "Z5rbjXgzqPYafDhuA8Tnz8BccUs98Lz8kRfGjUo9FGNZVEgQjeMye2u4Jdv1hfFMkzNxiNxFN2dZ5uxx8gK6CAf",
  "key7": "2pFTQEJpwSBpM4JWNxjkoRZDBPexdkVyUSXAit5tXto7xyLmVfZGfoptR96rAbdYhFoh6F4Pu5uFfRRbRsyYwGoV",
  "key8": "5459A8BNWLxRktUTgz3ta7He2waXYdizyRb2Q3sofKFzwJadQKEgNHu4DKTrxS4CcWoaehdAk5HQ5Q61dinYEt43",
  "key9": "3BbK9tjouHKufJeCJXREfcbUDnTfxide9eBi5tDTsxSxVAaB2p2pFLbqh2TbeXFcY95KQdWH4xwhKXeHB2R6PGSr",
  "key10": "4n98PTYMWLmB6so8cxsZHin9rYvzTm4NLjqsz1MGd1JKRyjV8w3tZLeoDW7eFQCdh9xbpfPiMRwg3WNvMU7BcBMu",
  "key11": "KCC6cez8gCTH5QJiVXHu2m1BSCEfeMLjd35scsNmvJgjizWTqRNGhzwxxN5TE5AJKQvVAjpoR6SKrM3m3ekYJc6",
  "key12": "5MZw9TG9NmMne4cgaJXRQ69K6kZwaCStKWF4j4o3Tsuh5mXzXSsHRp96d9oGLzLc5aCMhuGGn4Y63m3hMBwMij4x",
  "key13": "e84AsnQd5xk3QgC7EYknVyUVr4EsE4D3fCk1LXLFYiSdD7c32teTTmxscis9yimcBFmKPQ6XRc3WxqBvvVDqhuZ",
  "key14": "59jDyPwt3fdge7zFTJTSTpgkLQiu43yYCPscpn66omPQAh25a6bvbgBErsnPTc9zH2V9gU4MHoaGSg5q2rgQ2Ka6",
  "key15": "areJzBf2erB88TsZ82qYeoh1vJLvcRD7dnmfCAxo1qtNLM7bNKGqabFfBjw4R2KudBzwdHXqs666mR6QkvjZTpk",
  "key16": "67eYowijGwesoWW5PpAi72GPj5CicW6WahL59PFk5inP6BPVSozinHTdUZxAZXf9tUFrTKLWHUg6Tf3k6GnYdmsN",
  "key17": "2RZoXy4ygviocquZLZuNrZ4pFgowYe4JnyLH8LRxJ5x57VP1Q96rYMTaqkk4s5HSjDDU8TTRVenWGcWnhc9t9HZZ",
  "key18": "2eEFZCryX7KcNx1xbSshKundU6XDAocmoQsTyqBtEJkBGgmauonj8S7qY8Jj9Hv7yeYdzPJxPtrDMvCdoDP6fYzH",
  "key19": "5hBUWmh7YDVj5VFa6GDLMaCvGUQdRAcQpjAfECSqCq3ULRtqZikpxPyeiXAj1d88hYdSeCyE8hpdvF8HH2gWDsqz",
  "key20": "5NraDH492jG2R28Dt539TRbqx32Nehhkp6iASuS1aAooPRhVstKnGN7RpXSKfpgpEhQJswR7bsZLPuDWxDeCj6jP",
  "key21": "2jNgHJGsnK5WJsT6HjqT63YQr7KtvnrVHHZW17jQmuWTfUmtypqa7HUpVXfWPXuYoQPvd5fuomFPx6dPHr3tMUAE",
  "key22": "AwqNNy53y6qw8oy4EsFdpwUyeAAkPVSXMP31b13d44DEnPZW5fK4aTcbwYvCWaWqLeUF3h19u7LUHRUh8vDgqyz",
  "key23": "eM6skfdEdiynbyZE8ZDnNosMeR2VodvKXNfwTjb2vFv1HTW33nXZX5CPEpt5THWGFRJWSzA12qaUQxRZxkSzf1o",
  "key24": "5Gmk6rbz1k4hVCtNduE69rPyV9EiZWQpjfPWgn4dUDnX6pjt5H5oYoCumThYtc4UPd7TYQeEtddHGmvWShgpDzCK",
  "key25": "4CczUP8HHz9ytZ35Q35p9oux8uX8HgtS1GSxYFbbvSsBVRn4WNsTQqUBQUqf1x2XxpAi7wW2UmrtCM6XFbcajTct",
  "key26": "4MP5SFqFjqbrznb4S59W7kc3HBgtuL2J64iWvF52KZrRUeB73k1XXb55yd3x4cTewMbkyyaRmQDr7Ze1Kj5L4TQ1",
  "key27": "3xqR9JQymU9ZYDCnBp6pvha2Q6CrtxWHdYx2DHvqXwcCDu1z3gT1mJ5G9uePh1RNqkBaZbZx2nhff14x4aaWcxGp",
  "key28": "3K5YzD6MfHGiF43DGBwLbXJ7NDDBVQtXi6VbxEZKY6cTAMQr3dZrg46DBbaVgz2JSVTEELqhxzfZe3Je4wBJMdSY",
  "key29": "4daqN5rtq2NGBqKYUu6K3Cj5GS7GqXE2AyskKEd5eF3ggvvuJPpDKGEyRrgZ2BCmLXRrpPCkMWhjA24vBiRiAfmZ",
  "key30": "SXS1WEux7e84nMERTWEpZiX3Md6R2YUQeTe51QnopSwJbt1rbK7s8GVyX1AgMRDVoFnvu9ftk5K83urvcEciAGG",
  "key31": "ZoNCTfqdWFhEQ1BN7Myho2XtYv78hmh8DcEcKtbtsj6Ua2BHfcfg81ykeyPbFGmCwoizgRk4RshTRbZn38aoskv",
  "key32": "4Wp2n2M6KQre9S3uiTuAzcXLHG4n8Kh81hTe5iic3vyqbMwcPXbaTxHtoeFvZHJiFaneTbLWnHJxerr1v7c1eibx",
  "key33": "35FE1BMBQenctusZavpRsZSQVYPSgH9KqbN4rGMcQ9w4tJNax3XeaidNkhNT9LD9SJTHwThqL7Z27cwBym8RRB3T",
  "key34": "4CQD7vbbsHAAVepcjUaLmekn1o3pAoGUSwF7Cbu2DfqY9tF6zYTd53k3kagbib8a4avMJrHPL2yzCMCboononfbZ"
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
