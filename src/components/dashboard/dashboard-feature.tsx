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
    "554jC5yi2TiEQnR2tW69kUGFgvquTc4FEQPLD3wezpZmvFXPXmCWKah2NXSW21Ki1yqdRHLxM3jzTcJ3CSWx2Qev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AHtU3SCJs9KP8iaJKdE7ahSJGGcKMvHW4t4svBPS6PAcQ3GQfCdmL47V7TeBJPiwjhTacdYhyQiES3H64bm9iA",
  "key1": "4UFFh6ubTgWruepXpVcuZdMXzbPYUn9XLDipe5bJrM6rF7kWBJgvWh53XetLTJoCJT8sTP5dn1pxJg1vkJ1wncjY",
  "key2": "2vYTw7oUJJJDdT3u1ekgSULCpUfbRfJsPFAYn2UvPka6KnVaJN1G8sNTN6wS5WfcDbDzE3sy37js5tJiaD27Ra97",
  "key3": "tC5GyYNW1kkJbp6QBFJm36yy5AQXwrRwnuYC8JRfSuqUjxJBqzz91yatW7XdeWLWJxve9wBghoAJUpaJc1eLP15",
  "key4": "3hMCyMJVPigXMHevAQpju6KnLczhvSQtALf5ZHhYDWHvnyfhbRMpH5GuoDb78bm5PB9JsowfXB749qFpHmzZQ5hK",
  "key5": "bwZS5um9uJZMxqwTtKxT9gjmqLA5Fgm2yEQcg1UzjtN7dTs3RYdbufom4RuyN2sAsG8bscqdQw9QzEuxA8ADBZB",
  "key6": "2FgnqobvkufunGZ58Yh1ub77dsXvYjwA3uyaUzbxiHFsywb6nYCrvzLeiGbiKwKYa7ncmM3i5FqjFkXJozwDq2nU",
  "key7": "1i9Vh23C1tvFM6AA1yw5WWuiutUFA5kHqtzwEmz3dbVSRgzeDiTxY5uAS4CYueGYfPLXfq9H3DdhHjNPGWPaeWs",
  "key8": "VtnhHGVPEWwGc1WXCZZJaWhH9YnWoikEEjxCpkCbFrbo8jxzwPRfxPgvP5YH2Jr8Lwnuyqr2aGDCyTL5wZMeZjB",
  "key9": "66UR1CEzFLekcqV3BoWM2Tb6g85wmW2DzEAQXDQX8dTPzvi1E2Vbk4Sbjz1HtBVfZ9fs3JdoVKQMQoAbVM5Q5DUm",
  "key10": "2uak2rDjgczGYtSi75BGz83yU7H289VzvrUJnEsRng5k9PpVstZNLJgWA9rJwqq2TWpAnpiaYXgwKUftsigm3kWj",
  "key11": "CvGBPBbfNmvidTe2fWYsV374116EU4qvJtdXaLnEQoFCV8epWCWTBZfFTaA2aBWCThQYrYPafP1BA1pQccma1Sp",
  "key12": "3MMpHzAXexAgoJ4jVMLH3RwjFe2o2w6Y9AyLsXw7g2DAHzVffHRPRkwp21vdoBZBiRJmj7E4W7LgTvPsErZ2a7TP",
  "key13": "2FMQGfMahWfq6SD487NEFP4kCX4Qm4pJRoQKLdWrhZHjz8NgPFuseuTXaSBpXLZTdha2VvhTWU5vSXv4DQqkhz4p",
  "key14": "4yR5atZYgZJCoLqZkJdNYv5MCLuEkeVAp2K31MMzRK3VxiE3ijYiiJK3RRxCk3yeiiVt3yfgGCFaqC53MyukosaT",
  "key15": "3ovK2yoVP6fHf6eofxQpmm48T18kKXo77BjKjxyjTsxT9QWSWv91xfnBgn6ghCtXBQMp9hsiBprDj3JWHmGajUFR",
  "key16": "3PepwvHcBKjwPwVB7Rf3NyJBHu9nwqjtHPDRfo7jYMQWEqYAtMeD94o37719Sqx7BU5X9tYAPaWj4rbFvoDYSfMB",
  "key17": "5J5TE3a7jmsDakiS4zsg2ASi81fGjv9P4911Lhyx3CLJvtJPMLTCC5NzLqhU4KypzDNuo9V8faBKmsucW8ous2XC",
  "key18": "622u9EYFqRFbawxMkUJwCRvF4BrmwffMFyxnuDgdFSKdjExCViutPSGaQ6FY69mqW9Nh8tEVq8MirfRKC18bEgb6",
  "key19": "4yeT9V7TVqiRVB4bv5qbDxfwa5CP4xcYXMo8LTpaRTbFfzvmHsKU4F2tTEtvYHp4SKPrgu4yh5W5cb3vrE5cgzef",
  "key20": "d8GWTs9crto7Ec3qf7qLBSrVbdgowfLaBcKdiySZTUtjjhb1LG9pbVPgXN8DM6pnJ5RaBGRfJf2NFYPG9rgxyEu",
  "key21": "5Lgzju9LoUQwrwZZDu7R2HFQMAE425vQPXg83kECUv3tMvZygb1AqjRtwN9WBXiLx1fE1AaDgjRaNGtAnJ4KJ7hL",
  "key22": "26QCiCPa9Azdf68Ur6ETLKr7p38nuUqDn1ZwU9Ze12hUP6YMi8CWfzjYe6JNCWogWKAvgZkeHnBYP1rnoLGsdnRA",
  "key23": "4BXmSXc9bZCSG9K59HFPeuMYNqS4U4uzJFudQPwzCaBsLCX4bSVrqr3vdTvwA3GWbn9HmAjRexS8Tyq3nPQkUMDe",
  "key24": "5ehCN8uCyqx97uv56Ff2vzAfYAP5QhDg1DjHRBHCLK7v6YFSc7541XR7FXfe5K7P3uGez4Vit5f4PKp9kAYjciSE",
  "key25": "4LoBAyeDzWMfdh9aBLCEqpi9YYe3arBMXWNkwvVFSKgKHwjx44wWGPAtuQjTKWWfDpXocEmX6BCkUbWPN14NcsuU",
  "key26": "5e4j9xexUy94Kqy4yFzwwkugS8RoedzbvyRD6mtnqXGnCPDkRdg1gYFYe9M2Kx1YB3kd25qfD92P5w29UdLDBKFN",
  "key27": "63cCtHKn9Cxm89VFNnW9RFcmHNRoutUjeHY4sUTkMgE17QZn9DebeHo3xdhK7YN598bgffPfMshU1P8Np8Y4rMpi",
  "key28": "5VsB948FTAaTaJJ7N1eU4h7AHs4qt9jTuuYuSb8WiiGBKeSHFBKTPgPSmpMRuTuyJi7UkZi19z3GhVrzQGtmT4N8",
  "key29": "iRUbFyb46hUsqXHm2L6pwaQK1LCrP1x3FmvusXpXbm9cWLwShWhoKsPDAQcA4ajpkHC7xffqG1myNCwP6V6Z8bY"
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
