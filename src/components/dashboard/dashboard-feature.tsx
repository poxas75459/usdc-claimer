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
    "3TL5vN3objcXm8Ce4VvsggAYEWGbZukrLg9twrqJZWMymVdPNj8XHM8tAk8riGYmeBDoZr7fY1GJoy4xY8cMPyZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zFMwyZkBD9HLvy3EjKSu6DwbuPw1ngKBgmt2JjJeJAMby5SQicw5E9tdcRXyNaN1g5mMtqn1W2d8GcKa9uHpNUg",
  "key1": "48GJLhdUwtEcz8XBh1TxdpBGsF71KFZanZdQCC3iorU4PszHY6VeyP5G3bLpNHEfFXqUahxbq6EA6Ej6UXtxUmhZ",
  "key2": "2txgshKqU2YQzczoZXADM32f8ZxDKoXRdnmPjU1Lhq62Xjt2ckgsmWEJznxiYETgiBsVW4XuMg4Xw5cfbS4ZGgiz",
  "key3": "PeqJza5BVsrRbUNAuB3HUAEV45hnMHEEL4wZrCecbEoNbHzDYFz6Swxsacnme4phnApJXNBy61mwePEzvhW8wnT",
  "key4": "57VBjTqBjr2yA3aJPi6y1T1Zy63yMzWvSbQKwYkQ5D79Pwf43Q94NKdPe2p1xGjLQJB53V52oYBWwDe4MRsuW19p",
  "key5": "48tABz5tiE5XEkS4rJBar3LS8LCwTe4JkASVqzB7GYd1b1GZicJLdGGFxLe55932Wu7RdqSGuAtRyR7fYGbzFg7V",
  "key6": "5BpxtLkZ9tugw2ZSba4kZUzQVUxordcAB43vNkY4CvXnYAqQ9dqbJULTBhi8SvTVjk3baLqpR6XAy3iJ5Jv3MsLq",
  "key7": "4xBfz9QeK7EZ2kmsktaX56tssbZ58xJqR8wRvQYg1aABURWQXspfaCwTkvkcPJoJmsmTJ8CazUu6fHSbsciGvtdY",
  "key8": "3Wgd9UtQBeYYZfHn7TYUpaJGjpmfQQHCUQF1BnNqpQjnP7AveeAqBgEFx3wa2hqurgKTZKQMMuysgt2qCDLP9bxx",
  "key9": "5o5VzSdCUEkREdRAyy5A745G8rotAxngo6j2qmi1hxhaFZ1nnYaFLVaf86ckoyBj9pQhjvjvgyUnEHMnL3JCkF4V",
  "key10": "3QNHgWGkDjJTR8hFympXQQ8WMoKrqBw7RRqQNzcUzeVg5W4grLc2wrRTgbZwVc88WR6kymG5sAPYxYbWtegAJgMv",
  "key11": "3EVRzMF8gdJ2b97qzeFfM5T7X1HFm9k3hX32CNBuecVFFzuMopJC3cayFcTqriUC2yy8MUY6FbLGUpf5FMhiHubE",
  "key12": "5nZgukQhdsW1HNVypKqs9BogSN3PUUiw2L15Yyaann2f9A76i6EzTDo8812ErLzafAAXHsq142exQ7pLNoiwomdZ",
  "key13": "5U9Zp9HMmMVDhr9m16gm7qhrThnLznojCW2kBusTy3cvLazmrz9mEgbAdsMUBbamU5xPqyDGJHezZ15KoLGB27Aj",
  "key14": "TQvv49te7PjV3UhfaK6xoU8Mk4wWkyDJ7vDwJWsJzMtGrHM2cV2eDGhZBsgarQkLykQQamXHv5hZ1waSjTxHtA7",
  "key15": "5xjGqqLdi9nZNcSPzydfgdRnmxw9P6CfKWnfQx2QPv3jsXGibRVTRG1Lmh45NZEsbYovfP3EeKy7TNfP1uCakRvH",
  "key16": "56GvyrhtJMp3XFcRkNqcy99cmYQEseQCSEx3tXWMxRGY67HM7ix4GXUUXfn6zjV8fpXz2TyQ5u9PgAmHdLwiuHP5",
  "key17": "5CnS2Xgi6p4vSiqWWirvoFuF5gYaNtJTcaR17A2RLxXpcP9PjB5cWZj4QMg1ijKFdQChjfA6ezCyEXvaT7owMAWy",
  "key18": "5hb5LCFDrCaJEg84K8QHeK1mLkoqt2YFeRTtbnp9aRD1vUjzengafPAnZrnUtKkXBdnjCoj1nvm9rrvH69NEXemJ",
  "key19": "5BUVsWJ4TmxHs5nEwKnR8TaZVjtioHCAu1wvRkEWVDVd9Vzfn6aqD1JFEaUScPwX3vXs3GNftchJBCTvjjT3BbBo",
  "key20": "8ZpGRrKXGYPxdBXYybr8F85h18grFpn7HYv7KMuNovVdsYD8yvB2rBDreZDBNJYtwuLs8sPWxP63NKCUMibegVG",
  "key21": "4SqkwtJSXkNyRFEN3sk38cMSJLP9msSBGAo7MvMdofFaYHxeCb4gUiUwtDLh3oXcheqtHBcZA1YKZQWwBf6CVSXo",
  "key22": "5gbDNUW7pRWj59CwsDAEpWEdMfxMkYTdfhPAx1opvZbFEQUXtYCLdmhV61xfKaW8S3MNpcF5TgCmThEBRYSV8Uy3",
  "key23": "2MvcCdZnqnL1q9aSxumRCjapo196B91jnwoXk8A7UU6r5G9NWv56hmf6SHeKe93PNDrDdpWHPntajzv5xLQmmJ4n",
  "key24": "2CX4mGSUS1GUKj7p4TPWFePp6ZwARemqD6DWnDAwkGBgSHn52cvRajCypc9ogfcKh8yf4ZzuBQ8Rs9BhmmgmDGSR",
  "key25": "3fQJhXFKAAWeiB3KcKd4aZMVD7XrPbFhz7gFhvS6JRmUTon75VqjR16aKCYer3tLSn5RxpMaF8Q6YcERuPMpTRfW",
  "key26": "4Fb92Y99pxkUhrww7FQjbp9spTkg3fYXFaJCGuWgVPMvrXEdXRGg79Kmmn2erAcfHpftaHqSs9A2CA8ujQVRZrEG",
  "key27": "5jr9HCsFd1Gesprt5Z4mJmpZc8uEWeMMb2Hu8R5yw7yjTo1iiA3qmmjTaNd33Q6oqA3kWJjFwxyUjZRXCW4PBMWJ",
  "key28": "r1Lw8FjJtGE3839ydeyWSXnT3CHzBe9kPCFgg762Ah88H4MNms1g4j4U1yHqEqm24oXfzzYLZZq2jk6xhWx9pAT"
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
