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
    "JShD7JqYj4xD3VCeFqkbwfejmUXGKdE6DsGvDPkQhyaY2KT2DNHbXJTDkjJyvWDLNdTRSEeTKUt7ZUQyjLbq4wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YYrTXJapYCFH6ieiP6MiE7J85CcUkVmaCJe1eTZtBXKFyFHf39snff1pyqw7iEZg4PEyLStzebnJsmtaeHNSG6W",
  "key1": "2BZbFJikTHN9Pno2eZKyUai7MeC84eEmHC6w2KXV21b3Hm2cEfcZuCEmSYbi2QyTE991buATsE8jJNE72S86CmFB",
  "key2": "3uL7x8WuV3bC2KMXY7mzTGDxHqqqoK2adgBvwwkZkfdPpDY9h1Cp5drkpsRGfdSY9Biz2NVyKWK7aSmkrGU6exMs",
  "key3": "27uAFRuH44FEp7DvSyYQFmcgdEF5DEzFpCCdyZaFsPjemN1JK6GrsPuqcZDU9wKqZ7Ao3pcNbYhkrcBwvhryWBdj",
  "key4": "2BTy2ckenZqVnfRHcPQtkvsSh5fVdpFuhuU81Q9N1LTXbb7QDnGA6JFifTZoKWprQYqA7kqer1xg9k18EVHeHrT2",
  "key5": "3RErUiRtgXMWWwgz57LSTPKC1hupUaZev8CndKhjEmFGutre4d2PBUkpsSQ5Z6hqPGrpvzvLkDEn2jxQUYRVLo1T",
  "key6": "4QCpGDs36QP8dgBCEpL7AjgUr58yPG7sib9CcYLDW9S5weW8rpRYGTw9eEKRd1E46BGo2Nj1ncZyp9ry7vxnM17R",
  "key7": "5ooWeL9gQeC1rQZmir1jCgGxyKusaMyNE4JDVX9bhEkq5FDJGq1PA1r2V9K3GwXuuiQomi69hEgod1BnJKKzPQMG",
  "key8": "2ofFhRHC36N63j3MdkQjTKV2wbXcrPYXXA8eFW6Wht3Yinf6AENU2VdETjurhVCuxc24E7Hc6aw81axJ4PRjRupf",
  "key9": "3F5MnvwUpzXSRqUWBxEe6BnYwXfKxx9NBmWv2K4ufWtuhWBAXpEfSptAkG2q9m3M4qqJCWuUqAKgNm9EeAvS79r4",
  "key10": "59MknnMppWzK7ZxSqgDUoW4n9wMKzE6fC4iwDSqrj4pcFymCRGAo47kNy9RAHQV7JodkMcybhBGheqVBNRCr1Jre",
  "key11": "KNUUwwRUkDPfGJcmvc8nqy6XFjV6W1uk24BJoQLteDL7YJE7KLXAVuhui4BpXieooBNo16FuUo3wxFciHmPLQL4",
  "key12": "4gXTyGURu7JCfsWJ9BqAf1ddnYjuDuE1U7SZnx66tPdGnPYepZYnhmQZ5RUJF84oatzt6bDYQfVmSAGxHVvKNYnL",
  "key13": "2NRfD8nd7KFzZN9aNWpuZ4tkZSSALWNjWb1y29ebCfZr6smGSAS3oM5RaGRj3NPPFQBcpzwnfJHFV39KX1SRMW5W",
  "key14": "Xc9WXJjFeBMVkss2EZ7Ws29v97gXdFucXaH1ACodLdkyMSedV57Vmz5D8G8bQ7BWxU5GT3F3gavJ3TSxY98gyBx",
  "key15": "7WintGprC9PN1EmTtQ3o74ngZ6ch45YVjbijECW5JbF1PHNB1F2gKkqi3s6Jmjoy3gSa2w4G7EDUHGvRa5nr6zb",
  "key16": "29r28DjEavmAAvY8YogGt4rtYhd3SUr8znUkWYTs1eG29XKuS2U4uaSeCNGJagFWW4BYjtaEjYUQPWV95iFVWRY4",
  "key17": "33yaN5Wu87ssCXAoirdjfUbjHn8j776ao7aoBkuQExwpAvYVBXBjiHXwxT9tFmggNxB8wKPsdPsffn4cTh8aWJgm",
  "key18": "XqLgZMC4yHRtwnB2brtDEBDHDLy1yUBKrjydEwcKBNzYksArZ6wNLygzBWpm16eF9v8TrZomS7j8jWiNeCb1Moc",
  "key19": "3nBeirWF7hg7nfC9JcTD3HTc7oQv9eduLa6jRkrQKwJZjn2pnspKrWrf3QL4xGNa2TVR42o2sAxKqSUouRzLFfyy",
  "key20": "34ufU6pQXkVe1LXyeUKzxhBUFSuL25LsBAwcJoBiq5u6sW593DP6AWQkE1Tf7xbrMD3YnyG6FrNaHXcGWruQ1xYk",
  "key21": "xqa1AZrzJG9znHHaCZYEBv2AA7cVN85uKzD8na2PLKGov2iKkETSWh3sDZJM28reap47bM5RSByhfNeDkavVdxL",
  "key22": "5oWmxwNemz66eDTakk24Nf5T6Fs1LxJrKj91shxbvLGTuTcwnDmeAcCFqrY4XKrZcSGsWbDQKkn6SShtmcoD6z6M",
  "key23": "65kM6VBuqw3oYiUubhf9wgCCeh4aerjyGywW7f3iBYJsuyqPKTNG1nckEeoRCX4WL3yyiWixjEgaLMvxeYZtBTcS",
  "key24": "39ux2E5ePrpqzYnZn5gr2mbFfezvczAHohcLzzYwfy63mXSzQG64u2cD8ApbewSWDhWb6aMekXhFyXDkX5UsLGah",
  "key25": "4XftSjHkZS9Y4edZ6d1gBkwRWDqGJFerdCehK1PCEWYdWBkggmyEojL9Yfn43KHpYrmyRzwaM9EFp4D87kUC9uTm"
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
