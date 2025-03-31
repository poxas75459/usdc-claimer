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
    "24xmi9FvrBZmyTwcT6TBvqbjNtw7U21R81xQAmUZVZDuDVBR7M8M4idY8o1973Pf3iN7XXzDWTmntuYEkVxekzmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ppeBN3xF42naVrk51fbfdW9wRqebB1BBdiQc5GYstwB2XufTmCaFXxaEvzs2CFL1oPrQbfEwpsiA6BzUw8BAdg8",
  "key1": "4fbEim9pDBfNbJdoiugR4nW5Q9XRALY2tgqRkSVg87gsLHVbiSGpU9CGB61R6pWscXzfMpEYRvsxLyLU7irdJzsD",
  "key2": "RovzJi3BXZTT5C23utZ927eVvruahc3B7stM1FHPVRKTaokEsj5MHTEuMUnhiRxWmjgZ6KzTBR4oFNik3JQgaBA",
  "key3": "3zbmxiAW3x89P1Z9JGWhYahFUefRgsh3dooHK1xXpkneruQB9fzgTDo9bCkpB9pqajFE539uW7iWnHC25XAmrMLr",
  "key4": "5nfx7xCbLfYhSxToVo6YmctN9FMkZeWMAWki6bqRggV4zkCzUjs8GSEeptYLz8YruN6attkmMaLQwQTTj9baKYqj",
  "key5": "3QPwfdQmtyq1krnUwxX8D8tbBGayVaMV4KKeWfumuVmjAwamDwFaKPLZjGMuVurNUpU9os723bWLirXBm1agmJyx",
  "key6": "KCN59cxzXNANFAdHaybV3RVKZyEL9iW8KUeP8XK5NKySXWQtqwiHynHaJvJbmZrukAyha5m3y5RXoyA13HxLSgp",
  "key7": "27Vic35q8uEboAU4FtcfXZX1J4BicTgKubedhQJacNijRc11kdxXEjVhg718kpk42FXNE1kNv7fC6uCwTLTr1nmB",
  "key8": "5eT1psAv8VotZzoCjKbnxMfvfoVq5e6kqP1xnbXBpcw3VnRCGiErstkPT4AHVvu6rMRyvin7kyezRtneHND8CVgF",
  "key9": "65cH25b8usDCVyEUQJiTv8gM2sZbzyTuvXqyofNXSVRAzeTbfzEfU5yh7ygwbBytuoW9wWcZQsz5JZWxALnGLtew",
  "key10": "vY8yrg6pgcSXxo3NtSws1M5Mug2ZnjwpCitNxDgBcoc88fGydUe9kqyYJQS9jBNHbAskWXXcWoYxhsSbeFsyBGw",
  "key11": "3J2MuQLKsu3GvZc7ZLMK934Rx3wwQZNMpfn2UP6n9Lhw1RWc4khAVp3PkyN7HG9QxLtGXa8FdmNQWrVN3E6TeMPH",
  "key12": "4DgmeVQXfncGLes3zCTjuXtAHi6f8PanTPjoVYNaSbE29XD5Po6BFFHDyQ3ZnMn8irkZiy45CJaC5yvoM6Rd8W2o",
  "key13": "U1BfPRNCVTmQo7fBzNGfdd5BenAqd322VxJqngBbwyhVEKrGwDB18wazZ2txdCZk4vyeXhkzJP5TXgAACcsM2jd",
  "key14": "5U1PqnfxLzicJqhtFygUApuVxAQaExPw8xWUrV13t5qtkUWCrH1MiwZLr5CY5KRPMtWvsVUq8b98zrNmJdVrJQGA",
  "key15": "4YyHB4ZnXaQK49pcWiiRRn9yccLqE7GpwxhgT8RTSAhDEaW2VHgZwhuVW3oSW7rv3evzGvnf1dZTc8pG5Xo3J8Ye",
  "key16": "5iiejWKg5EyRWUWYkKa2Gx3pwi6i5KbmtZT948efBUEruDQZa8D4ErGLGUgECW87eUXTfwb1R7ZWjQvTvfyoMPW4",
  "key17": "29zqdzYHC4pRa7CmS2kskwQ5h2fVJYSSw3kb88Zvtj8mdVYAANB2ibZ2fcqVuetDpsoV95c2GnaQtpsbAHRLPN2j",
  "key18": "B92UorPWBimrP2mgEK3ud9TQLPkyNgp4pjtY6rTusHLWmakEeFdRcLry6SfKnS8GBpo5Aa5XXRRArCiYG3f6cso",
  "key19": "3KkcMBGTqE7zxzzd73XCKA2Dv4bwWMBtr4mFFRghnXQbv54yMcxQxXbMBF1fzar9NdQ3ddmRWkHn7jnTQRGERZYF",
  "key20": "3xy6jWnGZVcjxuomXfMauQFFY1DRJGpbasYvZmdUYpAXCpWSXRGCQWAQDUQeWjmFoWwoBt5uEqRQBciyZPYR7Gir",
  "key21": "5JhD2UZVVHoL9hYaKPxXb7BZQ8VjUxnkFWT6qgUc6xKwZrHbwvpXeukUSUb8SLreREaJMQw1ByFeCbARA6t9Zrdr",
  "key22": "33LgkBs28HpdfqC1Y6oicEoeNQKYwchGv3tkC6aeLeKErrTpmJeasdVF1UrUATHebDXDZ7peroLr7mJwyHeakWnK",
  "key23": "44yjEn5KshKPBPBFJF7xbtD6JLqsTXfLGAfWRCqKvXJ2mKQhGbiC3SdJFV41hoMc35UPLTy4ekJ7iXAWZV1EsQoi",
  "key24": "4JvDEEQdhBAAUqMyDUumdW6uRjo3i7Xk24P8vPip6u56Mkjs7vrAano2DeFPWWcCa5cjhKtNvHepTGgxNqH3ZepU"
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
