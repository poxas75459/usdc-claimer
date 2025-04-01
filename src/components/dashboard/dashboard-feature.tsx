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
    "3WS2ARMN7bev4hgUXXkqUNhyocZo3MKbuSm4B9LSQzLSqb5pzxVDyKzL1jUN1QvsMQv1aBNDnVjqULzPEgKgG77q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QwKwaFFrm5DAv1g7C1WNJCpwGybX2SQUcTM42Wmta3hySBGid6TbBkZ9Tssxtvg7oesXjtGnrcMjpkhai3CJUH2",
  "key1": "4F73C7Tu1mx2v95YVkcjUnZgx9sE1HSgintpeuqNmVkUrQLzFt7enMa39BEyHq1NB8dL3bFqKd7ci2acn35AoPNU",
  "key2": "4N53hbnzWZo72tZAKRcfPzEwSvNqN67GqV5aa7mRbSrw8JMBLmaRauGJ6YFuyWVeyq5oKyWWf2JcbAzpjvQTRJEg",
  "key3": "5cBMUDVdCDYBv1buKHtuLsr9MAhZFNbM6BiVxbLNMSV7ambnficiqQjGWYae1kW6GpqqZ3Y2f35BdMhJC2uauKP6",
  "key4": "2KQR5E7tK7KgRG51ieiga3piGCqwgyDz17QW8oaAn3hogL9cGLrpnj9rykLiSBFtxuGqMpMLVck7Nj1YzdJoUuyk",
  "key5": "415iqV2gQLAPViksqKHfd5MaXAjQSss3dbtGVf3ENk1JPY2Tp4Yq94qgM8wMUMeaGrcG1vbuEEMRgnN4q5UP43Ef",
  "key6": "4C6DE9Df2TYPTL7S6qkeATTGkkERDqKnE5VLVLwFLb92ehQAZ5KDngTv1ksThhS18vckfw8xsS8MmKFwQqTayjB2",
  "key7": "55JhfxtaepxvNDijrWZrPMhW8RZJv45aye2KxVGHf1jU7YKxcy4weZdANJtzZ4xakgGiNZbG6FrfTfy5W2mfEonn",
  "key8": "3otbhUXSfGsch85cp8U6aaFtZKY1m7cUFTLGWCUL8r4qYZJfhXEP4CTcdcc2sKAQvkqoBnFbDfJMNR3pSBrt7NNx",
  "key9": "jSBqWNUKgCQ27753c6QnAQwHrGRBx2yQpyN96nWmAmgKkP6JVuVYmumqSbggC3pMvLSMGi4jz13gnbBpBEA6Eqo",
  "key10": "bq7vcKDh2rQx2i1s4hhybRXgkeg9eVPrwcrtFS5stwohHtR7vFj1BgWkoJJxFxXELDTUbK213zoggaquZrsrVmL",
  "key11": "3uyKMrh7tGUkahpUwiEaU33zjgxgBpz29sj5VWBVNNkrWjd8jZ8iFvtTRWgTh6YVknA2t2FruNE95sdvK4edDDvN",
  "key12": "5QdvFmSKbhg8gB5gmgZ5jhV4ViZNxjk9GAYvtxwwxywqycRyNXrASaKoGid2bP2rwPAAdL5vKTgvgY6DJJd1fa9p",
  "key13": "5QpGWJZAPgC32m3UqGtZfTba5f1cfTze4jQpy7HL4Vw26syQUaNp3FkYsx3DCi36Fe3nwqWTos2M9ZxCidVkbkiG",
  "key14": "N7v4TzgTos1ygex81YKBPJVJVoVAr3Qha4EMTvaspJiVJsYaHo5UD1NyGr7AHMfcd2Yy1jCVhgAS6BBKAbYzGzn",
  "key15": "3DEyw8srLm3t2UxgQbeh3ZYRQAgVFVXuvLFtzWsUJWh1Mszfvr9fxyupdPQdYnpC89aKMPFkur8zGNESX5BWihWc",
  "key16": "4d46EHkLH6c7oRdZ55SHLXSTJH9zt9op9BWNqgFgmc8tQLXfT9aa8nL8hEJKnEtLq3oYviaWzCJs2KzYjEgruoTk",
  "key17": "d9djdmsyFMxGnLSdHKHJPCB3Dtkjc12fhUXDS1TaotqKG7TDTLnRWQfhgK6EZUGrZwpZB3HExtfNLdosDCiKwMD",
  "key18": "4cD7oC5GRYtCZMLNssvBUrK1Kd9EykKS5ZLA8Ra3UQuSv2k6SgqdDEFDAfmUDznfGzyZzxHd8vdpLMMtoBsxg5qp",
  "key19": "5YTzSzTwUbHwX5C6YCbR1xQPst32iqES39Yug2GhPar9UHDVbUZDo9c5eovatEynVjVMAR5oBLuppKMDhwCdN19K",
  "key20": "4AxvdVFXEmciu2aHcHNgkB3qSBvBhesSeaA38PZTMpEpoSxC1J4QEv43nCktJdp6UmdoiAzFT7JSK6YGjjY3qVkD",
  "key21": "4tfnbvNBfjkk9X7wwELR62HwLqyf5ivHU4kHNZD39Psb2bfsNANT6WnbsFvuBWrQJt3KGFaiU3e8H8MaihmeK6i1",
  "key22": "4t2XpxdLiZJhyXPgUbi9y29w4robxhaNXRYmi35u5nmWPTwWLiuQFfp8QwTizjsPjqAKiRzThXJeRMgzC1Uz4QwN",
  "key23": "668Wwx28hAqZUXeuTqKiFPiB5Yd7qM4WjNfdTo8Fxj1yVqA43kx1gNrPiNSWNEh9dTDy32SCLQxVx1gQWtRWAD4W",
  "key24": "2EJwGLXxAJmgeZySRnn2uxUMVipWodfj2qABzSUtPbhxAAhZgPbDjfibeEJFxMyb7tbqsU9FR4HqACWUCSoa7NV5",
  "key25": "5syg2m5wc9QygjH4EUPT8Hrn7ut4dimPMWCTvLzuUwXfVd57vPcmjH4FS88JmKZsDiz5B1azQeQNKYDHFmp1HLBS",
  "key26": "4m6aGahfBiSnb6mxFq1sJWBXoFMjLuYCazsrVh1rqM77KR1x9jKMPFPHzdBYx5H21y24mw63m5zLFyRtF2YKnZPY",
  "key27": "LjpHjmiuiiot9rhyAYM3AoPRgX5Gb8XWVXxxDS34s6n5tRyWT4p5soTqNvcfYjK15xpdS3v1sMinP7RFzgMZ2h3",
  "key28": "4UBYrra3g6g7F4H2TwbHJq5kqFAAvFN1Ti2fvouGjC4TPZK9Bn3aMiGSdJEAhdLszk7HmVXSboggVLuhbCbVwQWG",
  "key29": "4YkJ1Pfb9PKP6BpkzAYrGB3bKQKkJ34LX8w5KozdcpPMSWQ6VArM5rWr7QkqU6rdoAgU9snQ92mvCgZEYmFxcKda",
  "key30": "2owPzaDEqaySfi9iKqNbp8nBtd739sQsgN2kPpycZxtMZNpA8WgvWE4f2gnpsYoobJJYcDnBKhsrcyz44pt7wijk",
  "key31": "2HXDTD4WZp9BgBwNN7tPeZPYRi8zBe6AZYmGKPrx6VBcS2PTWMGLR75jKSXGytH5869yMn8sd3FvYZRe7EMAoS1E",
  "key32": "Vr9bNVyCjLxVVbfGAMhiN3UGhXUM1wKV36UnXf3qqUhHkMAGphosdYEWDMGBAz2FKgaXLFXuYhMq5ZVwphsmgGX",
  "key33": "3fTP8p8maks1q3gMNXJQXAR3LbdQgv7UBHaUFK5xviwW4jBGKL9CFR1fJd7DAFc9qkrgRXA3kv8QZCFepARbHTdW",
  "key34": "2BGErr1f8rpmuHuzpWP2DVkhH8S2zzYYm9yWtwCsizf4LCaPUBP1MeXQjcwZA64Q9cSkFxithvbxGn373v5Rrcok",
  "key35": "5fWbobiAu7SreczNVRdCCvRQVY2yAvqL3kzXJQ8WDczSoov9cnPQcvQmzDqFc5D78q4DMhwrCL1frT7zMYVwwKCN",
  "key36": "4BcrYQik6SBTEGqGwVBPYxtxgJDpXz7G4rEzpFJqYDA6F7CpZy6WWCRVFPKcH1LsAsdezJ5BiQqStU6knVUi54Uo",
  "key37": "Rm8rivvb2C99cEGNrs1gqtBkswannXtunh7ZFukhmeq4yoEj2qDBQkYg4eGcyxWyjGf6sJmoGgEgduP4CGEYJcE",
  "key38": "4REVKZcHEjdDNbmsjVtcGpZS2KjGNpAsDJtyBKmWq689LMBzFwWi8SZ7PgtNQJavsAVo13iFiMCuWMdJZiYsM4Z1"
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
