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
    "czFitAExrCFAA3EYGGXEbcdAwMenfbifbnz9wPfRNUVrPZJrBuM2sAEeyrvx9x5GtdvYYndigptyrtrPbUSNjqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rqt6J3TD5TLGncAoyCKUhhDjhXrj38pajEXaVM6zLhbo2bbnhAnV1C6fdNxdU4DfKohBmoAL3B3bzhc5ZLDeVYe",
  "key1": "4WHLSnvgXWyDX2W1o41kGLQAcM86CXc8xW5bQTwxPJCPWyP21YdKbw8zGwymEkW715Y6NMChpYGS6uZJ6AyQauUw",
  "key2": "2MYWtpWKNoF7PFA6jvSTbe7CTRvuRim2xsLLBMwPtiUEVZKBDaXoddC8MD8Akad8jFWMBVkcLb1znmmKjNhswijD",
  "key3": "2gXMovN2bojjCnHhkjQyvbn67KVZmLNdUPk38iejHonACoz3UQz3RRRCVxHGpkzHa7BkP7mZvV63YCHNzMauB9nU",
  "key4": "nNQXu9wGREGFdBvYzUerREpMtVXfDQceTqXGgAH1owUzewHUDxyiVKA7TaYgoDszy2Dhqoj3ScJziVvkJPzodB3",
  "key5": "5dehWdFe6954EVonr2Rz121SC83ZMmqGBrXFZW12mwcHApY88eWPZP4sgKEk6FpiBMwDvJgpcrtBL7erw7sNkXyc",
  "key6": "3aNrVfBbCXFT2xDcQKSyKDT9UAtMEbentLZjmo1yqitSQxMLwJ59hsVY48e3FcvhnPHkyepd5xC56dwqdj8KQV6x",
  "key7": "2rYdV5PEpMnoHe9TfsSU6vEUMwXd2j1m6wBPkhjUFVjcUYK8ApjfyfcDoEBUXESJGWsth87RVdonXkn67fADxxe4",
  "key8": "5utBLYs1BiXmUsi8sMNb2NP5u7b3QzaXmJwc4ktUAvVLfefZW92kz7Q7CbWLj9AimBx3zCUczD91jJqJUtgjrE6k",
  "key9": "goYaEsgZxiaHMND1ZZhCHUnSEs6j32bHTtt5t24akcdUkNycCPwGT5YnSidq2sjSK9we77ZNRU33ogrPoGLpmQG",
  "key10": "EiaxyURmc7HFrrQAK1NUQaHvH83EMegkqnphRJgUkcTRz5RiPdwZDtvLmjvNrbA29khqkBg2LWPhYWkp4ae21fQ",
  "key11": "4TCZgCF4wYozjQk62p6i1MhWgzmGc5uNSLEoPjFq1HjjH8Eh5oQV7B6F3k7D47Nqp6GpTvqiqWDsQSYfKN8WNwww",
  "key12": "27WhkHk8duYTX7NYKrBj4yDEu9iYFm8QtcAdkjBzU2ggaLKmbhxwyzDq2r1eBNL2YEwdTpqKJcdyMjk8vkm4G8T9",
  "key13": "3HKPopxveT8yTSSv978ZvFofXTJEfDFRLVurcBrCDy3G7gAAmo5dKcnVFZBU99qgunhBoHKzYDhitGKmvFzmXzAA",
  "key14": "4wvGQnrcgVgqhq45qJfjcJmQD3m36eJ3w2yGhg4mwxdo9iSCcN2F9idhMW6TjbCdXvqUiygxHcDHaKryjj6VmNmJ",
  "key15": "4KTR1dULhEqSViE4TGsgu7xwJD9DipCytgWMVJCUsEoB7gREC1BSEkUVBsGmiFufEDB5Ruwgisf5FTZ2c3vvFVAP",
  "key16": "4UZCf5rbkbUixLsr5nV5ADYjgWuhR3qiUmLRex13yScR6SSN7saNFoqFLSrjJ2Dpi4zAiikHUEQbT75yViWb5CdL",
  "key17": "3nRbBfoKzScz93crywuYZpvCtLLSKidT8aokXh2k8BmPqR9vBgHKbGupheBTEQbVQNMLwSv2dSWk1T6q2XZ2PAv8",
  "key18": "LuEvezUDafARBNzrmXAhZs6hy8gbtjpKHEM36KF1WioXSJ78wrUVwJBRqbCqMcqBFgo8zVWDw367k5pS2h2nw8q",
  "key19": "2eEFZzF7SedWiD2i2SVYTGRPjjJ8sSWwV8Qg6tdf4pfb2F5bs6aDhZoPdiwsxyEzknzMdtKJnBh2ZB5BpcwxzStT",
  "key20": "4yinE6TSpy9rgyr3qp7nk4HAUyqGcoymGcedRF2na6a5N5hhiWHbxEXC5cnciNdRACHiMijJu6JCY7mX7f6wCyRA",
  "key21": "tobDCNpPNvuSUgHFk3qkkPkoLhrLzeAaE8tc3owLPLsW4bC5tBLA4ro7wDiDUDNCbSo4ka7SH6sHk3N5FpEPqJn",
  "key22": "3SqB6AvcgEZeL3xdsVuimooEKs68qyedweKG5D1cG1zhcgPV8f6kuyEYMysSVReWDew7dPuGrcZQNnrsesEATcaK",
  "key23": "48fohM1mHU8dEJBrjVmd9f3vtNLdD18PgntrVfBePeeHFs23JCbsgAmAdS8cT6TsDzZJN4yBY388h3PnuCKFUYhd",
  "key24": "3an6on5bcFsFAnnwwUsyut2UZy7gJ1egjSsEV6ZyLpm5wUbiQUsw6L43AtGMKyA3skbtw7FibDDNsWxawGzVyFcR"
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
