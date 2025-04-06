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
    "3uZwxwDQ7s1zpznmYUwFMEUxehh9xsXBasyptRg97TYaJsrzRvzGBdsCbVoWJN4mmrg987yfJBGwsUaJkXG8q6nE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sADt37ZZC8AAP2H7YRaXxgSkXa86gzALiatZM4rr92yjuW8FVThjiADiwSQMNxuv4u4YxPEZCVdVL9gbbdhe8G2",
  "key1": "3RnvRmakzMX6UFTptJUcuYiC6WDa9YmQk4eMtcnqufEvoiP5nzZkdLoB9uDtNoZUnThaekobG6rkNZHP3baxAdYx",
  "key2": "3tsWT6tmBNXHV5PvHVtEFZZRHiQKhfBhRkKTcF1XD9NRUpigcXw81wnfjY5BtxLc2hSkqUHz5fN7R9nTM9gZTpWB",
  "key3": "284HjLSK1R6VG7C7Vg1QaZfeeUNs23NgYMUgXu9EBrbFBZFyEE71Q5a1t9VdqsPjtG5kDHop7YmPkY8sWznhJJaW",
  "key4": "5gwbfB5mv1JNtCanwSrPTda1xgg3jAJoG6F9HS2PdvHEg3YpmPwSSVp28Vd964iHCwCCfssVDb3sJaFnrSk7zVa9",
  "key5": "3cakaZigEtir937TFQuJe8kuyrKLdXykq8zZpMkQCYaKTaK4ub6mMqZ3wVLWcSpwV7UUgxVGxZ631AUXjc44nfkY",
  "key6": "4mBXPwLnG16WEpwy5UaUPnR3zHFyF3nGYEN8XF33EfpM1sq8MjAgqupmXGb7KNn9b99uawfH3JDW8MwQn3u3Vsfe",
  "key7": "5JBKkH5FmnkruakDYv6N4EgSNBRioPSSCrYwa5U7mXZo9dbUMT6NZWiiwTHEdEsC3T2HwC6amjpDHXUsLxpVmpC",
  "key8": "3iaJr9DEXAcKUynBnfqMxHUtHLKwmdcAuRdsp5TVYWxk3Sg3sSZzuzUc8wmjBChf135waZ6uNsc2Y4E6Q421mH9J",
  "key9": "33ZPPHi5LF44913rCRNHVJ5wHBjmJxzN7op25s8cDv6LgRQMH8kvtYpQ6HXLPWvdWfZVkYpTcooELW4s26VP2SbE",
  "key10": "SDfeQfAo4oU4AX4FBNqbL4hqpcNkeAmES1ivV24qc6w69or2LyJh767N8g3rr8grT1L9zUyAEQnWMjYTJkVAdaw",
  "key11": "2n5hjzEJEx5tAGUyxRQyrPdAoHRX9491ibq8B9u4AapHEvXLnPZ8YhTaJBJwWobU2MwUhCKvGzqCgFZz5FmnoKjs",
  "key12": "2ik27qLNZYhKpPacq1QsVSHRMatr8ijLX8Sh9NoXm1V3W61NdrKitzy8AEorx4gvtjoRWzRedPp8g3d7kHXyfqv1",
  "key13": "3PwQtxUr5eeZb55F8eQLhiH4zLiDfhdhKNjYHMTendQcCGXSc2mNxi7pUQavx5bZnG9VDzN6sjxBpDzCpEoh3A9g",
  "key14": "grbeL5Lo6nP1vLRDNmG8LjhADYoUK711CJ1aMcPB9517AcbZpbGqEsy8U85QC4x2LVMDfg1wc3KMPK3EXbhoVpG",
  "key15": "5fe9gKwnkx6QvTRqsyMs3siMzHHhxvtZyuDEhcjUkhVD2cqmpB32kYGZzjsSeoMoCfg1rtR3414v8JxfYHgWyEh9",
  "key16": "EKPJ7VgkEnDGb5n239zLRZcqVR56VwfNnMFR7BmNhsdTnyhmsNyUqrzJmFyN3bAZEBLQg2qimrh8ZZFSGHiAjuu",
  "key17": "55dcSa1GszqSW7jvP51UzZsLhaYaQJYMffJrYJA6wuqQEAdK81zgMsACX34KnSrsD7yF1bUfjNqj9gBmHhtM9SJN",
  "key18": "3PgimCGa9w1UYpoL9o3gAaueGbVBpgqbZG1yTsgaCUsm9rcVoUsgh4d8ECSkdm5aQuRzB3U33xZgKLUgTq5AGwBQ",
  "key19": "4UEDqLGzYgify6TRq5YedMsDeyHTj8hK3sB1E6NQ3ygysQFvi6DZS4wzqyJL4hpDXFp6oZwDFHszdAwSSomdtZ3v",
  "key20": "6758AvkcqcSvpn4R5Cvqu4y9RCKvgNQJpH8VxWBvxvazBDLgoQmicfsa6QcYtBfn2AXwmpNSdVDBMt7BaG6jCXxN",
  "key21": "3sap4YLJKBeDv8QD3NkfrtETFAMihDSgyNGbCLyFF6ArUUdHxraJAB9DHRsHoG1K56yc8jGtbgPvZHKaw1dfYLp5",
  "key22": "5fas8q6FdzW4mmmhehDEa8oaxXKkxcHMjmYL4tkEovrDacBG1yanuPrTzPaJWpVeeVaoDqE24TTG7L39mZDG5GSc",
  "key23": "5QDnJhAmj6tuw7Wi9w9zm83xbUucY8rafctERWXxoi3BKgETTmkAsW5wRC5vs8488sjxXBTMGtGpJ5cCmA3AbLsH",
  "key24": "5z5E3kpKJaE78xKcM9UPGSkAGmAvUEZGWWLBCAxMZx1Gbk5HmLbfimsbD7PwmB5skPsSyubcSeYRxiqhwwZDcqt4",
  "key25": "5cBKQLYA5Mf6vYoDeeirXhCep1pQBpKZGxndZFdgVHtduJRewNSVCdL9xVygDko5vTayXQHcjLBb87ha4R9yENGo",
  "key26": "4UxAzTh7MCPiKxf9vtxbrFa8SQbHRJhJbsjsp536L1KMUCMkSYyAHP4hr8h1bVwjgRwoy3acnqu8SzpdtqqZSzQv"
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
