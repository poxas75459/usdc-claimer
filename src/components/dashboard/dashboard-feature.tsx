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
    "2t5LxMgHNFAndSrtACcad5ZpnGvcrx7xayu8vPZ7RewkWwaoBYr8NwzaBNemNnQiFpxGPNdVAaAphsiNYURLcE6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZaQtkq7aM1kSx5cESCFnin8kXFgL9wYaNTBcvFYogUNhpeVzZoTEg87k821Zf97R6v94dBLJW3eLV4bY1ehAxh",
  "key1": "5hrWqrusih2r73AHrRqrFYt4gEKwUfbEi2s9z4MFAReqqmcUPVXg4Vgw1t5dJJst5dfoQKLQ2HzdZV2zKEK6A9Dz",
  "key2": "1NYT5RVaBE8WJfAbRTeGFKVZUTiDQAoh73DLXuN4xKABoTnH1quSiuoL9eH75LCTJr4Hc4XfKNeEXiGQr3iZLPQ",
  "key3": "2jMjggKp8RKy2SYbHm5twweeExHzRYhPjxETgHxWoU7r8LrUt6pX81eM4HRriRjzsSdGvspF4UA1DfkVN3iVdHGz",
  "key4": "4XAew7bYeWan6xpSx4DSLPVKmLqmQEQzEeq8xPc9cYJFuZNA1erdQyUsvyQU4335S3JvWHB6owtrGz7FLnGyj4vj",
  "key5": "Qi9fhVCGUh7vLKYfvCsYU1L1iUvXrhJnxjvCQA1NkVdu31ycseLaS5BCUqjtMkd1F9ro3b9caR5byfNzGW7moRP",
  "key6": "3gjtknLfTJRgEq1tRStMxJ5EGKM67n7bn4mELzjCC6cgQ5Z1fYi7bWeEEKB22zdZNWd9CP6WtNotYuaecustCfja",
  "key7": "2Uu1MrWjExd1BiGepjV7uWwkFwZrFh7P4zrFqL92kJSAjvaFfYxjQfa4g6LzDn4PnrHaTMAvAc4KcziEFmGJVD8g",
  "key8": "3Y6rn9qntgfoh649H7RxD62yPgBB6tgX8WRj8suwxH8FP45TZw4TYQN6gaw5YMaeuQAwpHNYug3QdodNiMpDamrN",
  "key9": "5R4Fouz79qi5keJKqjF7jKQNe7EZ9cBr4BRN46oWcZdWMzULQ6wjRgzCDB5xFfymj29u7NZWnLuUw5KceRBMRP1x",
  "key10": "461Snr8wh3hAA1i7zM5GUV3NB99YMKbEHtXqqtcryKMCqXkm1G9uBreguXCVLkkxpgLQQUmxhoNJrGWs3vXzJdsb",
  "key11": "4L1HXhr4AnPBjQMbN6BniS86z61soevFJGCeNGYHVVSsE7GMdxSZhzBSBSa1dzTEtdaunDxPH6myfAH3h7jb5Cw5",
  "key12": "4e3LJU83fXBHP78DrcMihoDXnkEabpXB9MtiUM5JA6DTt6rNvLJrRJH7AKCmkFWipzUEdHuG6uYiQCCfZzetks45",
  "key13": "5oQz2NudLLMtpBpAXN3jWHVELN6sL161EGHVCkwEAmSETPP56uUXc8jUftMG9Sjy2HRRDmvMJ6oCtFWLMxPZtHFp",
  "key14": "2zy4DvVnQveFo7W7CUAsom2agTf4Q4WdYtsZsPpLLvtBTpPjYZ1SuQyC1HkWUzQorkTKikzBSBgUpgMCbaJyh1xM",
  "key15": "3xH6R4rt5ugFNsSxg7UAhBgQd5eWqRWYnAWY85busipZgQDpqe9v4oPdnMTFL5UCe5BdWqx1J5kzwYjngHZbGPw8",
  "key16": "4psiJFMMH8YdmMkBQ17VEfAy66yfBskUPeSo6VuRXRL1ZEGf7X9DmYcftKNtKcPBpTSNVECwvy8VshGfmpAKenR4",
  "key17": "2x2UGDDYm2o2kduDrTLrujffyu92DRWpS46VG8f3p4YZYuQrF7Y9gUvTxEKfWVBxrHfPiQn3JKWd4v2TWAiWEq7q",
  "key18": "3rDjRVHFe5bVDhdBRWCeNpsoHGQAFCaeFk6wD48ekuPiGkvwMaNgjtMjQeRqcHxrT5UEVVw6FDFhVv3NcmLY8ebe",
  "key19": "4NNnRhwbv1GzCQcmYMrtJdYMu4jojewETnHvqqqDcBdSZGWa7WDMXtFkbh7VZse1vUzXMvqqdJJJrgayDNfmvQvk",
  "key20": "299AjyFBTFhuVS6Fg8YKCY7SYW2qQJLChXmMh9XKFw1Du2tUQP6uUr1ScnUriCaXhVprVm43RRTy7VPvwkfEhYtK",
  "key21": "2NVHhbZ7aq7bWdpNrkYZX6hTHuMb6vqmCYeSYLFCv9cdpiAZRGTPV3wMeUKiNetDcf4fmBbtE33b9wygmK3oUkqV",
  "key22": "5DRkNHLWnk26Vmrm7JL2jpnppBpDYpXWUgZCfgn7EEJh7g52fEk8Lj8BQqA3WGeKhSGC2vVNMgWvSVXBMVTh2G5y",
  "key23": "2kufqZaKR8ybyxDGKra8A8v4utaXmPMTAPsY5VpwcHRHAqLGrctbJs7sCusd6KDQg7K7u8oy1PpY648oN5r9auDF",
  "key24": "47PovWUd8372jS3vjBhPq91BdciKyqmUAEqyGYfUHNFUsaBbShG5MsKuZjKgRfPiNuBVaqaXCQdbGd6xWGaQdR86",
  "key25": "F8mpLqZXihxjVPw5D8qqVvkZp64bVKCt8g4o7Zkv4dAQrDwzNw9GqAjjK1Z7RdgFUxAmnQU5pym96ABuQyjbVnf",
  "key26": "34QeghrBQyommUR24bHsaoiBCY9qnVgc5GpgrBGgWdiDSBAhh6tmhgkF3wLoCEwUinb27M5XHxQQGBdhfo9sezXi"
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
