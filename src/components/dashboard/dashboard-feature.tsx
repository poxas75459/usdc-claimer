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
    "4xuq35iER5BuwojbEejMg3RufspYmSDPPm7vvr73KPDg7eQTLCq5VynpJWiEJ8dpkzA7xgJ78WJko8KFMdukvRcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAB9L8dCaF8dEyd4SYhxgVAg9wzAsQ6ChsReiAKUJTYifN4pxPgnmtdaXSsqkH1xatzbEAEGkjN5wx3ZgfwjuVK",
  "key1": "zoNKvz5xn9bpbVzChG9WoyNGBHftLxYX5QvEuvzS2SgfiE1SxvdYtemUfY9P6udUGAEAHwUVtf5MHNnu48udvJK",
  "key2": "2QF4Lib2Eb1dFe2emL11Tqd3dPWy7FxyXbyfrjLwFEiZVLPfVSjsdojHnbWxDXzkobk6hVVdfGpafpaTg5KkbJiL",
  "key3": "xgNf5eXo2ciSgfR1P3DTYXbRSKa1dhpMsvBMadmshHXkbqmW1uCzm95r6KdDcU4CHksTJiMhiW4ud49nfhUhWkb",
  "key4": "2qkApZqd3i7F3AkL5QBZyn9DfkShkVNRT9kKYceUhVAkwyQ6wkdJAauJuvxGrAwdT6wiHnFzHpCFp2pFwtaHyDz4",
  "key5": "4Fwjwm4NuPaN8ds4esWGNkNTkpWPvxN4rJSgTzJKV6EyHnxSzE9t9BgYE8YBCQpNznCt36r48Bfp6dEqFeSNUEVf",
  "key6": "5rg7QRfXhhHhPfTUFxpS4ef3QLMxqHCYdXqj4GgS3nbwhGidPXV8mPimPhjF6vDx87dEJHGt7uTYv7pK7mshvqY6",
  "key7": "XBDdBqRyPwFUMRXMYdzhvH5aFWqsE5uBQPQM6XHvPNYEpitFfSrV1RpN11FrHtxTggb7BDsFzmR5jwtKXhkyKY5",
  "key8": "4zhcepxPExMsUJQXMKvkj3L3Lckt4KzZGsnEUFG4TnPXxjMT9oFFwJ1C5WLBFYUm8cFTF22YEbnCx6kDGxXzbQaX",
  "key9": "3SDrkPFTkkrp2EeJVEJVQ8bDdPWycPsSZojxK6y5xKQbhsCjMhNY71ohosWgq6iXZuHTQhdoUurgx6SqRBBsUGCq",
  "key10": "4MjvNkhZ6voZwLDwj1YmKkKKkKkNpurscC9fzE7emSZU4mo2p9vpQ5rZtuVweh9A6KUBXmKCLzS3Yr3htVXtfyJF",
  "key11": "Wbx62ZrERuvuHSL7o5irpjFneSD2Tcv5LyeqQ2J3yXM77JAAu2uKcLeX9nx3QadFot7d2HhgLybd7xiyaBMAgPR",
  "key12": "2qw6RQ9BseAqDUE7zKPiG8LNHvHvBpTW4UuvKDkuvcnJh2RcFKR5FmN5EJpyVZSVke1i2sv14woAFBbBzNPSZPM9",
  "key13": "5YkYkPp77y1xtC4fD38bLaxEfKLB78CJoejjbfgCTnREo3Gdq3vDF3k5GFEW2jC4vnKs1McHDc75v2uAcMvaf7pX",
  "key14": "2ocuf4dmUVk4mRjDHtTSNFnRTBu62GFKjBUNSZtgu6zKpawvgmiHjiymPrd9tBEq7C2d7oAB7SgbyuMTAKigb7Hr",
  "key15": "5gtvZWkSrTbeG2kA24Eo2YRoAr4ffwYfANPNxuizffeENyJdbyY2FneuVnrCtw5bJC8cTxREBiurzZs3nnfoqMRr",
  "key16": "DSMrC9eFsiavdySDLucpYXRck6xexien1Wy2QECRTeyMpxHBJ33horcVPskjgvbkyCVAuB5fHSX95xYk5SgxQgV",
  "key17": "4N8C6QrrdgPL2Zoka1Bhsx2sLnNGkASVydTVZeqDvpwzTTM8LN5Pr7k5Ffuq6yBxYudHTfSHZgR7HR8mrFEMDKrZ",
  "key18": "4gB2URBNBTQGj9u8AffU2QW6hzHjYkcLgkX9HbswNz4vDdWazMpRqCxVgEgxmi7iCZieQZmaL1371GKXSiQXL6fW",
  "key19": "zfm9UoDq6aZjE6WKFEvWtAcBskKmM1Bi5h8jbKMV9XTmrQ2zFCTMYJ9CzQUFzMhgBk1Yt1XPuWoSKStuWCvSXwX",
  "key20": "5WXbKKMydTt8s8DeakeDSzvV6jxb38PyaVmpCqgBsz8XyQtzgRQSn2MWkLfFZeqgJRg5uj5nPCjDjGYXCNy4D65u",
  "key21": "5KhFjJq6ryXSDK8mQNNXDnBKHcahPkxeYngE8FEqkndezCa6h97ChzLBaFB3cJko6GeCwdjBrccsEToqbMDoNiKN",
  "key22": "3J3dGZ3pjfAxvAngut7mVhcuCqjANQf7rmqT6ymzG1B2N51ZAEvS5Zzeh9sE4BbQ6jSkRxNDGxfWmQzEyN5UDAWX",
  "key23": "3NsAGQFsGgNkcqsbGmkwbhvJkCoEmHh7iefPgeMDTe7KvFQbGDPhvT1QopneS7yUzEA7ZFQe1n53S9xX1wTmESAj",
  "key24": "2EbLZNZQqNCgvBW4pFNbHMpaoWKVySJnVZu9aq5KfYvoKpCya55Afp4FH3B2SLhqD57n714hEQCaP6zbeRNwHY2w"
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
