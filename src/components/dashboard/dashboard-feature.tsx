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
    "4QuACxQwTGHJE7NP55oSeg5Ja9akzTDFW68nS58pCEGdPdtzAgjjmAwJ2son6gCLKESw44hYTJh329okBnm5acB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4igca5n58ToFF8m7m3BLUbvs4Yd63sSrVsvY3MSRAL1C2AQTuSSEc3MvkSc52DNuHTVCHvWUtpzEzBGU6CTckScA",
  "key1": "38xsEdCHEcExKTvfePnta8ZBS6Vifzcb7duAWuFZaQh3pQTP67YBB7wk9KFPeAQPsAmKfHXtbJbgyvziqQMbRKKw",
  "key2": "5faKXgCysAiXNg3433uh8HBSKCjEj6JpbTpXzfQ1pdF7V6NVg1fSqqMWFdNGYGxYwipuDcM3ddziMsHivYC7Myhd",
  "key3": "3Jwxeq4oV66jprBU3heCB1XxpMpzJ3GSw7KbZRLrxRexSQyWbW7XESAnKGy5Y7SmC7tCL5ESABgNXBhNr7Zh41b4",
  "key4": "5JHVcJD9uwUK38r9c3hysR1MtQdauTBKJXuJdwUgafrBaaya2D4BcYK3fvV4bsaQWVGRFB7nw7358bxkE9AvzK6H",
  "key5": "2rzdkHFA1nz3sirMy6kWw28EiMBqWkFMWXRuK6VTVGcQsQP2kUh5uYFp2QFtfxMxRUCVHDhqD3aEceQaxdiPvDGP",
  "key6": "23856NsokRq6KohKV1bxDd9MeJsnqUFTNobYqN6wmtBhocQkRGaqYicCfB2S4FANx8dBBcFVZkQsgAuKqdAPWb5y",
  "key7": "3wYhCCmnJsJJDYtVqmdBQPwyPuyyyNnfbjPZSRc276cnQbU1NEbA6tZfCAnAMhSWxv58zxnBUEJ1Tho7zWsgDpBm",
  "key8": "3noUZHL9aobXpxgChEnQn4dmYFpEVn6HWJ7Hy3R6q75yobMMZnP5YyCADk7YpxFhVt3Y9ibHyd82jLDG2rskoii6",
  "key9": "5botg1qFqgXPoi9n3Mez4JfwQoG9mntcBjERpKrhAdBdMQn3Qd4MGMBoE9qBYseRpb914nmJmcMLzCPsuND8Gyxv",
  "key10": "51i1SrFKB8SGxVvZTJS9zXby6GyZpSGaoYKb2yoimjDSpmbUhiHvujENTLLBaEd4MozftCZoV6coGfS85tPeFKEL",
  "key11": "29Bn2qCjeaWH2hsEi7nVp2Pp6WuhJ1V4tixmxMF9mrxW6daThfAz6yBQDubnJ5WJ7yAH7LaKkVsMdzLF2aw4xvz7",
  "key12": "2BUqj9GPU8ugZsYDmu9TechADUXRgJeK8cFg4sRAg3zz2EHKUfdzHtxJZU8QwfoevSpkisANL9XCeYtD3bwQuY5X",
  "key13": "3ZAW6RHpRYQZhV5HsgRzbMwLGDNq6tkjCkofhVJ95MuNUoFzsyEBSaBDuTXQtynMs3FQurWs4UCoSvcgKm9zPC9V",
  "key14": "3yCrcUrVJt5Frym66tPfKVVFj4um7MtoGN8kMJWVkFe3iJ7XPTpxgZmo73pCfvbWLB85qKsSBiAXzwbMKdxmGh2C",
  "key15": "LVHBBD3hHW1Hd6TQCMrx3C5HZ24kZP87Fr1cvMbRq42mQ47Vu6rswcqXgSLb54oC6DTQ7vwMA8F77tiVaY8Ui4R",
  "key16": "64NTZh8wukAPsCHMmSmFqZi9x9d5cH9P78pxNVyCpQ5WZv83U91NfW5o1BArF9LdKgLuH3MaHGdjkwyckPi7fWW5",
  "key17": "KZquLSgJ6yM3U7YfHZUUSFxz8Y4uyvWLLmGojSCx84BGEL75SW6dBPxApoawEdwXFLvZ9ah6DTgdPDCmmqtNgK7",
  "key18": "3jc4GKwuqJq7b4ckThmdZga2vpgCWyV2xauYfyqhFZd4pVd1enzBGw5iYoHV6Ejj93umnwG4rM1QGU56WtjKzTkJ",
  "key19": "3KDKYZyf7931YnzbWc1KJ9N4ZZUWbSZT3ooeJfSDQyTiUJ9wReJwaPPtX56uGJhgmU15tSb5cvD8TcdRpiBPnZan",
  "key20": "3ArSQMbiE8DU486uEM2tsMqBU7h3KsUXFEnk2eF6NiGVCDpdH78d8SsTJKiWnAHFAoz1Bk1x8j3MzPHzdhFae4wq",
  "key21": "5UxbfeJfXBxYXR8o9Kx8vnXL73ACf2b47HPq5iCqnxBr8RS8CuCxwBg1vLmt4cWWwUx1hxAYBZSDKZmXH9JMyngg",
  "key22": "4J37h95H8GeDS9mw27bbcGTsTUrVkvMaP6vLTdfDgLLQLsKFE4k3k992pSWeRReM69KZpsx3hQtquV5Ei3vgDaE2",
  "key23": "5L6tD8LCFPLeUtB8kUG9LWMuZ6qAfpZpHYQRGk3JSYBJZYqBeX3eJanyvGsmRwLWWE5SU1TALGnWkvygFjMPvmB1",
  "key24": "4eeRWnTMyfDQy45zkYq9cP6Ask9G91gDU55npHQZg3mpFkmkthBKXYCKLkSa87w4wB8hHUqPnfLKDLXCLfydjW4j",
  "key25": "3cGmfvbY9X3aPVTreAo6TwikjoR1WwzbTMeTcoW9oQRr4c5jLxWyUF66D1GinrFxKTipHNopJKqW9Vmk9VmGsJLK",
  "key26": "5rqYK76WsNjQttKr4XjpKvUvSCFgUQ6opHhHCmBAy7gnZ1qjVUs9wQJkfxA4Scs9y17J9rqitrfet6FDSfD5jEmq",
  "key27": "2rXijMBMxG3Pj1n78JMkKmMmvWct3svr71cFtvQdYFYXRqxKQcDqumvS1Ds9hzd5ETcP39FELuzEmiDC96pcaVuQ",
  "key28": "2sJgTW13FuQMNRwVmquQSmv3y9sU6BxnGCRgFTQPc13hCNiPtqDawLaVerjKsc52DPjeeuC4upvgmPUjVQ1X9Q9z",
  "key29": "YxzfMe1m7R8MuE964wjto2HyrHHTAuovbCLHrbVAh9Vw8NhKhcjMTki2dKw3NyawEHzCC7WsJdG4oJNQ1VLedTe",
  "key30": "5RSYhjuiJeM9HrpAsWp86t9QmvBkpELJoLfyshW17tT7uirt8cpPHTYbjSYkeL8VAFXqExLyZcnC4F3RBB5fUha1",
  "key31": "2saUzJcdpNmidvbHgDvqo6XKG2SpQscFETADEqE35eZRGEhNX3cqLDpiJKfCagEQHwUZJxsstYExDSuMUaFXq6U9",
  "key32": "ytQsJFJdf2yxt1gWycc86CtMmuY6fX41nErqnn86rBETmCCmtVvmTYS3pqWgVRB7rY4Kf9viMyd8rvrNJg2GrTc",
  "key33": "4UE2hmxuaf6dVm9b4dRYHbf3SyAPbADr7EhGrPtJGkZs5f1SoTLsA8iZAiyhq8S2i5Cy2UCEcxK4abRYn8ciKten",
  "key34": "zS5KHHvSVRH4PpWRCaT7yQup7B1XKJt1mFWmLRx2NSZYhRz2QrV8eJpUk1VSUn8PsynLKGsuHEQvg7yhyRxboeX",
  "key35": "4wB3qukALG5pMksyrNZbGPop2BdEPvURhUPLTCTv9uWmhMZvuJDRe1YbC3QwQpsELRA1ZQk9GeUQXEM3dwKyiA4N",
  "key36": "28hYrdob9tfSYSkS82CTTGDkKKrYm3FzQr7HuVwdUFZZ5xR1JCtTRGbkCUatFxJyNQRuN5yCBCnRcQiuSy3efYid",
  "key37": "3pUwTeyzJWgBQ5LXBAa47RCcjA3qJdXnVesyjXdSennjXAVaRRg2w3P6hsHwh8cJ5La9UEyJvZn7NHzce1usC3bN",
  "key38": "2T1aiNiEg1Bs4nvgbAX2ZoFCBFqFghGPyAQuPDVKDWDixzwGAUytpXvHGM8HJ8Ckejxvf8P1SUpDWd8P8jmKf2MT"
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
