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
    "3b3x1hFEcR4F947qj6W9tYWQsoi8JaW7oDKLd27L9gDSdL9S1vqNXpr8U92JDtyTf7eooSY7zgiBVBs5goHAMS7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "128e8ZkoYVUifAY8VyiJWH9nf4JLYxEVtRykhAgc8SUGWAgS6TqDefg2tUWWwuJ16ziDFcc7tJF2o39Eu2awFP93",
  "key1": "5BBgqqcDoDosZXLmo8KX1T4n8FaXYGJJV1j5sTH4JuRDGw9kf55g22xHMe3VMh7MZahHb8wziBty9HfG14XSg4tx",
  "key2": "3YtyBS7Tmm6Co1W9ZaJjCbmQrx3yXBJtBwndHvZgmQVVh7TffLLJKYrJx3V91grkXmRw9RZGnA1AhiQTSYLUF8Eb",
  "key3": "5865iXrmF8e7Z9zqLg7kMC1rcSLwrTAihiivfqoz5wbG9Z9q7RP8ssPpNDYAGhZcZSoHhxgf55PCp1Q9fQ26oFPw",
  "key4": "5QPyew7uMJqu8SH3WdKH4Ep84K6NZ7sCjWspJHmXudWCkHszK8XnSFWKpZXfFa5hUDRiMT49tdXuRqqYBphLpz23",
  "key5": "4ubRtTQZrButA16wAZM8M4efkdPCVTBhpEmZJqA3JHeczue4LNA3Qd3a2LBE1p1WGs6KpwEqoqmfa2uzASqVaDUE",
  "key6": "3DehZDmynUwG94vy26QBwspdpRPQmRvnGqgF4oqtEUeCwkJjNRD7t3nSV4Mb3hJogzGjBu3NoR6sJB7hPkNCM3Dp",
  "key7": "yHdiH5HPqe95KP5ZDC8nDMrY9rQU7ppjJeFPUoc1uSvxX9jowkN3LDXq28zb7pB3Z99ESYFYdGqnvkRrmudHfZx",
  "key8": "2vijEwGhCocVtqYuxNBRcwYb77Wew4xn1ewkSH4vXgZ4rQ3iPpMvhHumgAvhMVYTdDFm8m1YrUaR7r1ktyMtMPhd",
  "key9": "5bzgVctSXUzANjVKRckeVMpxbLdeNFQDn5fn4htZSVBwSbUZ9pVMazuXe33cPJM8Gm5wu9h4LkJmyqjSU9rMRqJb",
  "key10": "5QxT4JvYdR74UcNY4PzdRYnrAcnM7NjZf9CNERYwQTUvi9voyDN96QoPcVjeGoFV6KzLbVAkbHJxBYSe6KvkZKJ7",
  "key11": "2bXFrKoSar7M2Mw88poCM3Fhx9DRgWKq5VdzpnpY4Me1oLbyRvvEur2Kn84YbCVaDWYpwupBrtpx2hq9NfVfTwva",
  "key12": "3sBt8jatcD1hUPEnAQz1mwUmYFo3ZfvJj9nXQHzUuwUWGzjBkmYpnHui2syzeap86xHdDsepayvhrXSSPdwn8hpz",
  "key13": "2EQwaVkGiD1tvNAippPY6L1ixAodd5RxihKoV7x1Ey1H2Zby3oLcsCgbnQvgEVsMufMkUZKrWS9yoTE2NDPzALJY",
  "key14": "5bJ9oqffgyxgFBLzpE9ALdiEAis3gBYMeTwmv3mgwEYHUtgwA7An4oHi2f4ePEjaa9ejiJPukckmebxcmAoiNbiZ",
  "key15": "5YZVP1r5AbFJSFiByFuFsrLU4ec7ejGsE8gVu9uxaPzvqpESShwu2NihqnjiCu8Do71EuB4da6bzwUHM4A38Eb3a",
  "key16": "2h59qGmgRW9ctL6LVx1TP3Q9SrF8uixqJ5mgaJsfeJJ94AbPv3T7h65pe25JkVszZKsr7jiLoe4ZCGsbLmho27YV",
  "key17": "7L6DyQrjwEinj1FAR7ZVcrAqBpL8nJHiivX4f32MHTwUh9QeLyeXB5vuKoK6ESa7xGn7awGoigtwtC4AW34kkN6",
  "key18": "1m5QWRF9oDrZ3eVNQDS482MHgtMNzBGZ1fpp94LuaSicoWEfu2PNuorxzfN64ai3ZksyB2299GFesb1UWno3dQi",
  "key19": "igNzE7VZXEyyU4y7Ha8qThSJRVjs84u1AtqWXFEi1YrmfCQGEboUhjbvjZrHfASCGUDnr9sTykAiV48KRincb68",
  "key20": "4Dcjkk3UeF9W3ixXB3YRFNwkYuoRZyLt7cNfuKA3zLgVoydgg3ij72qUtMqWDDgdFm7ydGUkPEMDk2kJMd9ygVWr",
  "key21": "2xwh91JNAg85ifFZn6dW6n9ohLMDWJSjSjGnguJBsf8PnRwD5Eir8by61BbAECrCoaFJwnVGRcdkKQQPXViziYGt",
  "key22": "ao7W6h6swm9MPDfVCkJmecxk7Fhx1iuJz5YhLJGMXMgErjsMybxkpeipcnsbSKShvP43UVXexEU8S3U5EzgJ4LQ",
  "key23": "5vthZErvsiVN8ddTxoxGAsUFnGv6AqXTcRwADsDJryTXHJzbea7m5hPpYXKnNLyUf2HZbt8McNLzNJHAzuVtorGq",
  "key24": "2fpAAZhUpNMci8gngmr7QtxPUD4MPY59cYFUrNCamEm62bJhvFgo81b698LSSTJ9ChJnMocnifmokb7SZk3mDNPL",
  "key25": "4x4sxjkVVD2dT6dD1fbmuWUU7QN3BCfrTT15Hx1Yo9Bt2QFuRtc6w6rw9f4BykBvcetr6Y5VWn7nXcPT5UN3SRyf",
  "key26": "UWcCdSFvEtVVAw57G4QUft3132USDLwwiQPTcbYGBe76mtuEECfShLysvuR1Usz6tfVLLSKEP1DWgNXZtbLwtn2",
  "key27": "5FXHeNgen8TmN5rCLG8wrhfTkxjJLAvvBrryaF19P8KEWJjALPVebLs1DzbL5ksd3YCfcKcenyH6V2bEG6xyk3CV",
  "key28": "4nGTdT61M4UkTJAgX6WH8wB9RZkABEhm2vU5GF54sfzVU6hnE2eWzM5iAspJzJFAWRPnMdSn9JLVzdeU4f4qcjAj",
  "key29": "3V1V2MDUGp7tCeqGgeH4ocUfoHPSZws9Ac1KSE7LPdXzZhrtyg1aHEUsZBadiYp7s9rBFpvxi1uGmVnuY43yS5VW"
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
