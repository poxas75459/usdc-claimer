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
    "45k57ngBHjyBUfTrr7hF12Kf9gB8Bf9aG9D37zv3T4jQNUP4jEEJUcJKKKQ4fYt1AMbVZa5E97hKhb1JZyeeta5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxaTEf7n31juBUdCXsCF8CdyEmob1MbVdotjatmNLX1QmU9F5vwoBkSRxoM1tKhevmrFn647ZAD9Jcanj1hVyW1",
  "key1": "55jYuFmcNKkiS9hLdFpv5RSH9aKeu9vW7bqEZ9cCZECS6XkPbsx61CJt8yL1ixre3o7f8bap2MgF9LQMKywCZuQo",
  "key2": "2dBsL2DGb5pFAoPT2diuUUVpVcoVgu23xwbVCnpfZgZHCMp1rN3yZkXwdSsbDuhznN8Mf8MM78eTQm1mb9mkqdoo",
  "key3": "32nrpADA1mWpz1YTdEskc2YSaf7vhGYUXZZtRFq4NUeVtQQjMv55GgVXqZuXoBiUNR2NAuNgjkA1J8DucLpUYG5u",
  "key4": "2jp3DJSH2SPvY6XyCX6QhzWkXdxyQAnsCXEnyWcVyNRTqqU3R5P2mHfajHgq5Z5FSo7BGDa7PetxczGyU82a5nXx",
  "key5": "sb3E7PCBiiKMvJB656w77EZHxZbTm4UdJT6WNX5ghcA7U6fcMzuGuxKdpZycKJsmymqrp4DfmYETsfvhMMHzAXo",
  "key6": "BwJ4QUjK6PUqXm1715b6yt5pUkrpqKH1NBUVCTP43R2smAhh5a9SGbdHeotwtfdTmMid2ZVGB95aoVs7CYtZZK1",
  "key7": "2qf8vH8LMknoSdRR6oB3XErLeDGPS8cLXxaE7uW9Ani9mjUq8wRpawCB4S3i8ywQ2tcj6CE28cjRBJDUBgjddoBx",
  "key8": "4SuJP1bEuCzXkhcucHUUvCgAxZEVYCqca1kZY4NXj57N7SAXjymgR5SmWL3e9jdkFdBBJgc38pBBhX5jwaifxwSG",
  "key9": "2J8rJ2jPUVqdgc3QSthPUcsgbvvXHZ5hmAZhyYat1eQWA8AmDHj97HPfvdmp4v8rpfxpqLmF1YQF9Z1NSgUgfp1d",
  "key10": "4Vv27SKm3VbfvXwcJevNzwzZLM6EJLMnBLxP4ExHdcv5bxVu1TzFmLpBkaksYe8EFaWUzKofcaFLwEC3RfbTLoFK",
  "key11": "5t83kuQKAfKshLkwVsiwoSVuiGkie3xJ3nJhNE6yUD2Pk8A4v1PTvgzUhiogM9K4cTsyQNQg18cXyYnd8YZdmbhn",
  "key12": "49DobNt57A16maYibNf3EfPjWueUimQinWFZYKAh6gKom8XQGdMG5UtrfFQ8EhnbKuhpJkQPMLc5bAEFGruraAC7",
  "key13": "31v8F7vPhSBctiMA1cQ1ky3XsQvcBWJFeciwRogHZeHWE24EmM5TToQynXVWXQ7ahze7RJDvD1ua1ZgDY2xFxv9F",
  "key14": "3Ee57tpfqg738qyzF3MxXKM6vT1QZbVRk1b1V3eCXBMJesrzZdt8vK2varVDXZuzGy7AYTt1QUkXFZVgu2sCwX1X",
  "key15": "35YzH8jek6W2h8BymaSBhDPSS4gAjSXfTPZbUMx5EFm5WDvjgPMWhjgdZSxzDFsDhpMQMd8taR2R2oqCtcLRHJv1",
  "key16": "B6m7UzbWE7FKBF8DVq4RfFndxFBwFuAEdMMAsSgK5Xjd3m2kb47ZUAYSZcXgCGk4B3AzMb2sewFysNzp1WV117F",
  "key17": "2AdEeU62dbCuqRFHthEUxCtPdLsCgRnqNo5dVpvD4KNUCxWimJsAio765xBjo9wxWvkkUgDxnNhHyEWFTXbtkwNR",
  "key18": "4iEDiR4nm2iroUf8t3cMab4WhYYbXpkzF7VMuxUxPiACQipC7A2PNMu8u5oiPGa9ooUVnnzGSqLWp1YbfrXRthMA",
  "key19": "2SFCkXvzD7p86crBSgtk13pDFTWmKX8xSdKpEQDSTykBMZmZf3CyKYzgtQiHERCMD5GaqB51pukVdE4VT7YpfoYv",
  "key20": "3kQSCf8DsmBcHB1kKZZtduvCSLv1KxpNThS7NxqjmKTh5SbqtKzJ1Gfg1XqM8qpLvEai2CAQdnTF7F2JWdQb9Rf8",
  "key21": "3b9pg9VyMiA4f1k193h3tPvzXKZ4aGM9MR4SDJmbHUyMJcP7wi74Cbzji4rFHhc4BT89Z6kh3BD2cyQJbTM6BYc7",
  "key22": "3zS6foGc3mXdxvFoaXS7puaXqct3EqJyhTqJBtyccJxF52e8XPhH6meDrJfF6zNR3HPSiyqk6iAsXzu34zL5NNwy",
  "key23": "3Mmm6SoeXPLVYi4bUVhkinH8eKvVt2RCyACKohom1k3DtBpALaVhGGMBRQeBt8VQZqJGicbWGy19vPdSFknNczVf",
  "key24": "57A9L3jqUp74EivMgLV5xVRvTnsFSMax1XzA3q99fY2q4GXXPZje8DfJ5rC7dsLYgCuy4C5YpH5MTyd3iZK8zbcq",
  "key25": "5KD7emQJFgs3qfGUD4A8d8Fxm3N9hQhuVYD9bQW7ksLgEFa6AearJGdp8ue2qYwNH7GJzNseuWRLWeTj838EAncV",
  "key26": "5X3mmuHmvgbXMQgsZRL88BQc8ZtVz9k23uUVfEG4sQj2XzN6yj7fvfUb4ssrt2Jf4dFrZ8vsRse5duAZTeMaky13",
  "key27": "2pZMsEyTwnhorpULeD1sbEWuz4tGQkPXTYiE3QsrCwQmWziUgDuq68Exb7FNUBYiaMcJpoFt58jNk6nKpFBqcriC",
  "key28": "5DJUh5hT1Xumxg1LDNncdZv6VZd5igMwhfSuXFoh9WmSbBS1jACcbEg5r3vb6b9tBWzBDy6PTFojD628G1JBTiq2",
  "key29": "4BndZt1LDWCH6W1VvcEJK9BqdrXdc8cFdMRcD2iTx7vgh4dbD6DLo3caAfpPz9p2aL6yHxAFmahhbPdzv5V4xcJK",
  "key30": "3CXZKEPP8Ei3nAFszBzZSsS5ppvNkjBPkQvPqKAVW93E65K7nEWN1NwjE2kVAKXMQe6jDUQweu3HK5XVg5T8FLiP",
  "key31": "2bjM8YKFKHPr8okmvnYF2aPVqSusgKa3km4NAQNGqJmwBBBmpj287cyxFu1rc5EqpxmVSGp8cHGQdpE7QYjump7J",
  "key32": "5DnZhprAiw9gTHLznoRh2nYwQaAVhG6dsGtmoNSWFPnBMyBseRg114pUpjdCmHmXe42Qo1g76qpEQFHJDoLeycgx",
  "key33": "39nzDK4JYVtubEwAkDvs95cYc3k9wkGPrNpRVafu2rpmq4H33HJVBNWoExPbw7mqos9HdQMnVMdeJAZuFuusyw6g",
  "key34": "5Wbfpt3hsoptqTtrnAft4NDjLN2Ko3xbBghcjMh7SmQhB2EJ7ab8dRSR6mCNE1Wudugfdq8qA2KtPui3k9oJofBs"
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
