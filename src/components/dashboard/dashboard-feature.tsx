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
    "4NqxTumBrZsoQ38AuWx1f3hs6ck38XuSvhecxg2kZZrxV2UvXCqZ84oCZ3ebVJxhfnKvnMUox1wX3q12ZSbnXZF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zjLXfs2nTz8M3tvhPGdoLrpXs9K39WC9Xb1yySuznvmw1pfcutVU4MqQ72u3HH1bKXKNVVy6rxaSZyzUqrHXscU",
  "key1": "5V1HNTd6fg2kv1KkdCktQ7hb7JtAsrpKGrvyj9NkWD5PjGQjHAKP9NmwQ7a8YxoUcqCgXEqp6gu5zmx5ypfX2vfk",
  "key2": "fjztJePESvd6Y4TsGSfPBRHL4R1k9zpAKT9Myfuphm7ZRhhVEA7tLt215oRTUVJVWvPQeMcJzb2KEssLijRuBFq",
  "key3": "kqTraxzBpGaWyWPWuiYVSuTEcXLmMfbJZvkFonZA9WXGNjQLPND8kKTe87ndrizaKF91oZ44PWjkb96ZWT3qCcY",
  "key4": "5UoYzyFMSxezKaXE3zAAL5iyPCN2TXxspNtv1cLmdBM8mh1cuGhsCUmenjxmNrxKcSoKtbkcLu4TfVPm9koid1Du",
  "key5": "tom5s5qemDh8YudKyY3Pt5HS1B2GyrHFmtfANk2Dy4JPU7fYqeEfgUv25KhP8pa9bwKxjBrzsMVLTHmNHa73v1S",
  "key6": "4jagWe8Ynjbi4ow23CkojTCGGiMdvX5RYGYSqPGBFZ1T6fHQniNBtCo9PGM9wqkk3ThvS41DLDVXfksfmoj1pdLL",
  "key7": "2PtYp34kqPjsxPsMhyuwNZGwLC3RSHBpB6fNTVnCCfg3mbiWzynLcUGCyeKtLxzYRTBEQZKWwYc6TwENz73wV2PR",
  "key8": "3xiFZmWrhfo3J6pSZMuWndVmCQeWZP18SP8JsfXcR41ABjCKjfAzcva5xCzfXTbJyP9gEcv9aTfZdMkCeqUhs61s",
  "key9": "5unCny2uDGXoaoLUrppuqU7M1u5aUnCADUYGi9xkzzz84TELAkGgRYkNCj4vaEFv1b5ok1eqGzFWX6BRsWGZ2eER",
  "key10": "357TXdRyc2gUom8DmKBExF1pzT3LfkW3T7owg1JJiwaJAwdxtZPCRWM4xWeb5NFmTACFkLEBBHZfVeXiieV2z9zJ",
  "key11": "zi8esoUid7MmokKh5kByJ1x8pFMA1xk5yzWgJERCLXSpAjZ9UUq5q9cY85UKVtwbnG1v6wQa2h51YiiZSjv8WWN",
  "key12": "2zemuCvmWuhfujYAdkZnZnrhJN1xim3ViafwZ4YHiDKMPhv1WqeEgYFHht3148vVcZwAyS1d7pGh66DjhgeZZF9j",
  "key13": "5eXy8rjqtWXvEm5aJ3oS7uV63B5FxDPBiaS7wvCcVkjiqZePPwQaGnbHTzdTEM3CLbMqu8uQaZg52jBYNPrEwVyn",
  "key14": "2juyMnm5pzvWZ3ZSt371hmduunYGAHkEAX2x8iHxhBNgbfRkN8n78PEtYVbawLgp8M6znw9YtRPVbGYFLc2tEM2k",
  "key15": "2tpPAiU4CJCudPsLrxhVttKkvBCNBvtu95uDkh9VZmCRU3woGjgek7Lz7VsmdwgdA7Ki9HFocWZJ1Wfdg13eY4qj",
  "key16": "34NaYHU9hGnSuMrN1SxptFb3idS2YvhmMauAirVbcEbcv2VKbQGPvHkWArpSaDcuzLkRrQqoWmMAe8Dz7vqpyaQW",
  "key17": "2KDjr96a7AeQW9SSrbrCC7C2VBbzx465P1LTLo6VNsc1anS9Q1mPXXX9amjR5rinr6GSpXxdhpkxxGvwYXLuurQy",
  "key18": "4UZ6VvDyhLJXs555VhRTRdE27fbFyDcymGvPD9EhKsk2xZixw5pSZduPwSdJMZJf4Qwb8saVxNNfUBHtyth8kTnp",
  "key19": "5ikMgkQXrLiYE5YUzhVHzNEtfr42RHEnvgnVGHFgku2e2zgCnTxKzJtb58S653ZuMKUbAQ8TEFQThknGahNKQxLc",
  "key20": "59dMZKyiE22abXp9nCijYcsPUorosaDRHLWR5jBUVmWLtL2Z8gw2mENF7V1jUNWqeRxm8AR4kvyzQs5QnuZ9JGY",
  "key21": "4EenvhKV43sQHSNQdMmvHA6dGw4AkHU9fWME3pbvec4M4prJ9BBq6k3PeeeDm3xS2VBsp4yQ4MKkvEdVzL5D2zg8",
  "key22": "5c1QNohscnaJc2QBEz7opvnURPNRdxHEEoanXjRLQc5Nbt8J7tLCBrTWfo1hd94u2nfBb3anybrUXu9vsRrGjsDd",
  "key23": "cNQo4A4vY8jkmJTp8x3dMPKk4imJUWFirftV1Tuo3Qqqz2FJouL3sF6XPqUc1JoQP25rBt84B4vGvKaeodNkHHj",
  "key24": "2fEFCGTPbAsNxgg5aa8arVPQnpMKFpzsS3pER5nb6Eam8tYff6QPMqY826hfH3pBnvHnLhtC2rVFGWTpRdycJS3s",
  "key25": "2YRwFbaK64d1LvbBr5yapm7KNNjngtpY3dHw7aMvh78dLf3SVcT5DtRJMvnWNwVFYfCFoWXMd4oRiJHD6HpDTuVs",
  "key26": "5LQrJNJiEzS3gViwapFbjm6AUeWUfDWRmASGMCQaMw8CFQFYNuYdiJE5hcXuPFXoPiBperv53mpRaZY9MrqUou7Z",
  "key27": "upKn57bsiHed9YqCuCciN1KsRaCpFcyvexR6tmwuP6uwFrsaHPGs3SPURSH48sKJeqMDMJGo1XKE8xBVAcfZ9Pb",
  "key28": "2qcrsoyXKcnfE51ZptzBRVHHoqDt1zuGbV2ikyxvd2FXQAauNnvicwxxGhHSkdJr4cDfGJgkSD1SSTLtkqtUDKkb",
  "key29": "3tagavwyPngW5yhQuQv1JwUk596yfxWBbDQ32LgjAaGdRK4w5jv1SSPTskRs21jXSSfN2EjvdUp9nw5h23iySK6u"
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
