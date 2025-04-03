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
    "1iMj1vJucWRLsmmVi4sPXxWn9GqwyMHJYddXLfPcCS82a4HrTjQ2E4yjkWHE3HAMM5VQ7MuKLdJAkHAuTbeAKex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "613wqb9oWqo5cTC2XbRHrXyygcPHwM76EVmzjrQLyaKV8BnMyNUxCKajAfBRhcKNq21ayPSWDtCga84RGn2TXJ6W",
  "key1": "4PSLEHfuqXbHDMGRXYj8MbU8iAejBksAKJ1Ahzk9QxzUXbwmHgqrMuvxznHESEwyeVmn6SG53mYaDrHLJBJPGNmr",
  "key2": "62qZGAMmeX1P642h3nBY1B2ukkMegKP2qgF64gZ4egMFVdpeWf6AA1sPGzWvrNCyinprwq9uqWFgi3hqQS3a3i94",
  "key3": "bXq7nd4MAxTXQ669GjfDJViehQGLSCCFu7nCUiCpkGMJyPebew2FTRcqY3H7mDGBpwLbBQGFRww6H6prhAUZtFD",
  "key4": "GEXkrGd47GCA79iBFDQNkiUw2dkKyZEtdVr6hiH41MjHQ1iDVcgBHMp7XaDrdTKr35mYsUtw1cEtJjaXKmikC7s",
  "key5": "2Ykmpk1AMnUYRzP87zvRR3Kg2K1vb318c6XwyUeWRL1pn6kSXFvCHemfrjyxdBDgHSYhVzz5AuJzGEoULHZbGbqT",
  "key6": "Z99CVLV2Z4BoU2kXP4YFxeswDKi12surCaw3noQ1Jp3sPjEAY6gSJ3MbECuiFhvsvPFFyKxfQSgdvXPQgD3UTEM",
  "key7": "rELdK73N6wfw2FdSraQezrmnNtv8qHVuFnVAQoNDnarwVD5dj3tSUCq1Tf8PffCx8iMvMagzioBtQJ1E8TncRVC",
  "key8": "2WULUkFW7ThMm2GYjzNXqvn1pq4r9MDpJ9yyxVmj1DwQN9ekaYR8BrfJdBDWLXfKaufn8M7CdedYsDFxLKnZiZwm",
  "key9": "5ZdgsQ8scLkN9c6CAEUwonUiQjk4Q3mVcmPThwC5PoC1p9EysKWqBzRYFhPgDVujCB8L1kLNdvNbDCe27eHJBjef",
  "key10": "48Z2nUuprofo4Nh8MJqJjS4qPL9UTC5hY5qczHVygrNHQVSbx7Seey9fzXeiH7saqzVR6NfdQZRSTutudT8v69Tu",
  "key11": "3bBQ4R9oUrMV2efJswFzKXvRcLRa1Y4RNeknzSEDNT6xTW8q3rDpQi4fVqKLgh98ZboKTYRtqLR8Hn2UEW8s3SdH",
  "key12": "2JorcqiUHrq4X4yUUomsePYm5uxq8t7V2ZsrG6idz4RKF3CQxHKUzsA94S3oKTNJPdwxmVYBKVTuET4zFZP3yDrX",
  "key13": "5G2hkwHQqvuSYaNwTZ1XhmT8EBMo4ibJt6RxcQCPtDhK5AiBDMjqXbKJCks4PRekZQGsz4bDMpKccr9mzYmnyz4B",
  "key14": "w4CqimUaGYwBckPkaTWoKqSwTpAjuLgEVNqUgH2A6oVbBNnLiq2BpvAWmsuC3b538GvRURnh14PYMtFDjHoQ9j8",
  "key15": "5FpJca7xydHe82fw6rzWtCcpHeMrjF2ohjfg8c7LyKFJWkhC62GjuTVwnc6ECnTLv3dAkEH2xQMCvTAULEJe8uje",
  "key16": "3ezqdekqF1jx5qWqvq5tQ7tRpCHm3xivprKJyE9rSv851zhe8otAGgBrUfoKuAY5TsMAped6V3VwG1bQHtsUAnTN",
  "key17": "5djxC8yGSXPAAb7VDkurG6NzbV3hsLMp4tMCJuFac5bYnPsHWhXnnCyqsmKAxyCpN6FL12TQXBmRXWkJQE9RBjZF",
  "key18": "672ApUzUPQERo6UgdaiNudkDAvXd7a2cQkzBAgvzqHeTQ7GhNSRu97i9AJ2bsPmN18jGVWNhSnWLQ8xtY8DxSMff",
  "key19": "45oNwtR8rXLgBAUquH5JK92pJKjQDPfpxqH5wWSfaBL3YFBL8GY6371P87tni9x3iPxzQwjwEgYu3W8DZhpcQeGY",
  "key20": "3csw5uyo4MofxvMSu87e6G1DJkjiVPbJugB5v1Z4v2mqPTvw22XQ6P9vGTeYtb4y9b1jBb4VBevhV8NhZWY9xrHw",
  "key21": "4ULiEuBMWePtmBCRVxxJoiQ7DKtAL2PMGXgmtSqWQnzvLVHF3SjWdWA6Lx4P9pqaeHsdDuvurhSRtrYauXGEXLUm",
  "key22": "3bDJJyCR9Mf8yyibmkAWH5wR8MPxibgYYvsMmcvk8aK8gXcBZWGkqP8KWbbJ9CCxrW1SVW6xmfyWZgCDEo8xnLcN",
  "key23": "58v8otgFap81q5jgbT8THWncYnufwV2ZvQxkJiWbDiV1R2o4VCdbHvohNTVhiRZybd59RWZtnFWMWYEcg47qGs6g",
  "key24": "2r6aiX6rkNZEC8hW3qwoddHwDrAMEB8H6nCggDZGwWTGzNxTqDTdqqxenETsNUP6PZPmbxP8wR3JmZhe66TpScmj",
  "key25": "2HL1jmHVzkH52m1zBXM58kSeoyxNJnCimEnRQPRK1mMXLc8p7xBpLMemNgmbAnDANyxva4J9cSuGh2Hv19WNtsFF",
  "key26": "QQewPzKupYKR3XQZrzLpfjLWANbyGG4RzqDYUVaLsiyW3tLttskLw6yAP7CUHbzcYqKzN55XsxzfKVAP1Wwaprc",
  "key27": "4THW6eGd9qAjfWssrWhnUM98n21RPjmYXtZNMvRfKGWgSZnCLotxF3jrV34xkAUzWHYzhvqw74e5ykv6gBWWYSo4",
  "key28": "5udWFxKpyYUdxam3h4nwCcruUuCnoUauLdx266iYYcnh1RJcSZPEQ3uFK3he3LpXxppcmRUudcHdZLtK4ZnnQx9e",
  "key29": "4292qqS2wDABgxfjNNoPmMJ32tBqobY251WnSuYR7BmrB6PWREZnUaEQn8idcqaUUqQiTW6kFvng38ChCxKXTMxT",
  "key30": "2rGJEa1BT9mpQbocxSsyidrcwssZUpWMuhUgqT76kRNG6c484n7YM2gApmpUaw6CoYXy6teujfCrnRjxZ9hGX2hz",
  "key31": "2RGMsAiuvoABVCcrzwbfsWTqKkfhQNtcwuqyBNrd8BCbvPKA9i46YGZ1rGfC6egv2gT4MHTChbGcq54Ev63uqFVx",
  "key32": "54MEssdkdZzCu7aGtheMRCMkuDUzCfxuf8hiajioAGQeMDN1gAouoiPQV3nDBn4PDC8fZQnc8yWboA9AJu3Pzwbv",
  "key33": "5MGNF2NqGKc7nqFaY3CzDdU41Aw9CZaQW6aremejgPACVgsLLuxLiVePFGiHbA3jbmxmNDC787x4DrbjDYdrcb44",
  "key34": "3TtBCAo2cmW61mKviF3azzHPb8dx9VqgoF7j2fxRGJBBJSPKttqSrWnm6pTTcYUufmgWPj5zCpHURLBoBk6hLaMG",
  "key35": "u3eb8M1A6nFFDfFexxNRgvFfRk6rEFJ5X3emHASws9H18cdWsZwaecxdkWDJr613VyBkqEnRF6ksLYdkcysFguZ"
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
